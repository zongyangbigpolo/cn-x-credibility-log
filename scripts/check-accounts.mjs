import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const write = process.argv.includes("--write");
const selfTest = process.argv.includes("--self-test");

function sameHandle(left, right) {
  return String(left || "").toLowerCase() === String(right || "").toLowerCase();
}

export function cleanAvatar(url) {
  if (typeof url !== "string" || !url) return null;
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "https:" || parsed.hostname !== "pbs.twimg.com") return null;
    if (!parsed.pathname.startsWith("/profile_images/")) return null;
    parsed.search = "";
    parsed.hash = "";
    parsed.pathname = parsed.pathname.replace(/_(?:normal|bigger|mini|200x200|400x400)(\.[A-Za-z0-9]+)$/, "_200x200$1");
    return parsed.href;
  } catch {
    return null;
  }
}

function remember(list, handle) {
  if (handle && !list.some((item) => sameHandle(item, handle))) list.push(handle);
}

export function decide(account, byId, byHandle) {
  const former = [...(account.former_handles || [])];
  const unchanged = {
    availability: account.availability,
    current_handle: account.current_handle ?? null,
    x_user_id: account.x_user_id ?? null,
    former_handles: former,
    availability_note: account.availability_note || "",
    avatar_url: account.avatar_url || null,
    changed: false,
  };
  if (account.status === "example" || account.availability_lock) return unchanged;
  const found = byId?.kind === "found" ? byId : byHandle?.kind === "found" ? byHandle : null;
  const avatar_url = cleanAvatar(found?.avatar_url) || account.avatar_url || null;

  const apply = (next) => {
    const changed = next.availability !== account.availability
      || (next.current_handle ?? null) !== (account.current_handle ?? null)
      || String(next.x_user_id ?? "") !== String(account.x_user_id ?? "")
      || next.availability_note !== (account.availability_note || "")
      || former.join("\n") !== (account.former_handles || []).join("\n")
      || (avatar_url || null) !== (account.avatar_url || null);
    return { ...next, former_handles: former, avatar_url, changed };
  };

  if (account.x_user_id) {
    if (!byId || byId.kind === "error") return unchanged;
    if (byId.kind === "suspended") {
      return apply({
        availability: "deactivated",
        current_handle: account.current_handle ?? null,
        x_user_id: account.x_user_id,
        availability_note: "平台显示这个账号已停用。",
      });
    }
    if (byId.kind === "not_found") {
      return apply({
        availability: "deactivated",
        current_handle: account.current_handle ?? null,
        x_user_id: account.x_user_id,
        availability_note: "按以前记下的用户编号已经找不到这个账号，标记为已停用。",
      });
    }
    if (byId.kind === "found" && !sameHandle(byId.screen_name, account.handle)) {
      remember(former, account.handle);
      if (account.current_handle) remember(former, account.current_handle);
      return apply({
        availability: "renamed",
        current_handle: byId.screen_name,
        x_user_id: byId.id,
        availability_note: `公开账号名已从 @${account.handle} 改为 @${byId.screen_name}。`,
      });
    }
    if (byId.kind === "found") {
      return apply({
        availability: "active",
        current_handle: byId.screen_name,
        x_user_id: byId.id,
        availability_note: "最近一次核对时，这个公开账号名还能打开。",
      });
    }
  }

  if (!byHandle || byHandle.kind === "error") return unchanged;
  if (byHandle.kind === "suspended") {
    return apply({
      availability: "deactivated",
      current_handle: account.current_handle ?? null,
      x_user_id: byHandle.id || account.x_user_id || null,
      availability_note: "平台显示这个账号已停用。",
    });
  }
  if (byHandle.kind === "not_found") {
    return apply({
      availability: "missing",
      current_handle: account.current_handle ?? null,
      x_user_id: account.x_user_id ?? null,
      availability_note: "这个账号名已经打不开。还不能确定是停用还是改名。",
    });
  }
  if (byHandle.kind === "found" && !sameHandle(byHandle.screen_name, account.handle)) {
    remember(former, account.handle);
    return apply({
      availability: "renamed",
      current_handle: byHandle.screen_name,
      x_user_id: byHandle.id,
      availability_note: `公开账号名已从 @${account.handle} 改为 @${byHandle.screen_name}。`,
    });
  }
  if (byHandle.kind === "found") {
    return apply({
      availability: "active",
      current_handle: byHandle.screen_name,
      x_user_id: byHandle.id,
      availability_note: "最近一次核对时，这个公开账号名还能打开。",
    });
  }
  return unchanged;
}

function assertEqual(actual, expected, message) {
  if (actual !== expected) throw new Error(`${message}: ${actual} !== ${expected}`);
}

function runSelfTest() {
  const base = {
    status: "documented",
    handle: "old_name",
    former_handles: [],
    current_handle: null,
    x_user_id: "100",
    availability: "active",
    availability_note: "",
    availability_lock: false,
  };
  const renamed = decide(base, { kind: "found", screen_name: "new_name", id: "100" }, null);
  assertEqual(renamed.availability, "renamed", "id lookup rename");
  assertEqual(renamed.current_handle, "new_name", "new handle");
  if (!renamed.former_handles.includes("old_name")) throw new Error("former handle missing");

  const suspended = decide(base, { kind: "suspended" }, null);
  assertEqual(suspended.availability, "deactivated", "suspended");

  const gone = decide(base, { kind: "not_found" }, null);
  assertEqual(gone.availability, "deactivated", "id missing means deactivated");

  const noId = { ...base, x_user_id: null, availability: "unchecked" };
  const missing = decide(noId, null, { kind: "not_found" });
  assertEqual(missing.availability, "missing", "handle missing is not yet a rename");
  const suspendedId = decide(noId, null, { kind: "suspended", id: "946" });
  assertEqual(suspendedId.x_user_id, "946", "suspended handle lookup keeps user id");

  const locked = decide({ ...base, availability_lock: true }, { kind: "suspended" }, null);
  assertEqual(locked.changed, false, "lock");
  const example = decide({ ...base, status: "example" }, { kind: "suspended" }, null);
  assertEqual(example.changed, false, "example skipped");
  const outage = decide(base, { kind: "error" }, null);
  assertEqual(outage.changed, false, "outage keeps old mark");

  const noted = {
    ...base,
    current_handle: "old_name",
    availability_note: "最近一次核对时，这个公开账号名还能打开。",
    avatar_url: "https://pbs.twimg.com/profile_images/1/a_200x200.jpg",
  };
  const kept = decide(noted, { kind: "suspended" }, null);
  assertEqual(kept.avatar_url, noted.avatar_url, "suspended keeps last public avatar");
  const onlyAvatar = decide(noted, {
    kind: "found",
    screen_name: "old_name",
    id: "100",
    avatar_url: "https://pbs.twimg.com/profile_images/9/a_normal.png",
  }, null);
  assertEqual(onlyAvatar.changed, true, "avatar change is saved");
  assertEqual(onlyAvatar.avatar_url, "https://pbs.twimg.com/profile_images/9/a_200x200.png", "larger public avatar");
  const junk = decide(noted, {
    kind: "found",
    screen_name: "old_name",
    id: "100",
    avatar_url: "https://evil.example/a.jpg",
  }, null);
  assertEqual(junk.avatar_url, noted.avatar_url, "reject non-public avatar host");
  assertEqual(junk.changed, false, "rejected avatar does not rewrite the file");
  console.log("账号核对自测通过。");
}

function normalizeLookup(payload, status) {
  if (!payload || typeof payload !== "object") return { kind: "error", status };
  const errors = Array.isArray(payload.errors) ? payload.errors : [];
  const reason = [payload.reason, payload.message, payload.detail, ...errors.flatMap((item) => [item.title, item.detail])]
    .filter(Boolean)
    .join(" ");
  if (payload.reason === "suspended" || /suspend/i.test(reason)) {
    return { kind: "suspended", id: payload.id ? String(payload.id) : null };
  }
  const user = payload.user || payload.data;
  const screen = user?.screen_name || user?.username;
  const id = user?.id;
  if ((payload.code === 200 || payload.data) && screen && id) {
    return {
      kind: "found",
      screen_name: screen,
      id: String(id),
      avatar_url: user.avatar_url || user.profile_image_url || null,
    };
  }
  if (status === 404 || payload.code === 404) return { kind: "not_found" };
  return { kind: "error", status };
}

async function lookup(key, token) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 20000);
  try {
    if (token) {
      const officialPath = key.startsWith("id:")
        ? key.slice(3)
        : `by/username/${key}`;
      const response = await fetch(`https://api.x.com/2/users/${officialPath}?user.fields=id,username,profile_image_url`, {
        headers: { Authorization: `Bearer ${token}`, "User-Agent": "cn-x-credibility-log" },
        signal: controller.signal,
      });
      const payload = await response.json().catch(() => null);
      const normalized = normalizeLookup(payload, response.status);
      if (normalized.kind !== "error" || response.status === 401 || response.status === 403) {
        if (normalized.kind !== "error") return normalized;
        if (response.status !== 401) return normalized;
      }
    }
    const response = await fetch(`https://api.fxtwitter.com/2/profile/${key}`, {
      headers: { "User-Agent": "cn-x-credibility-log" },
      signal: controller.signal,
    });
    const payload = await response.json().catch(() => null);
    return normalizeLookup(payload, response.status);
  } catch {
    return { kind: "error" };
  } finally {
    clearTimeout(timer);
  }
}

async function main() {
  if (selfTest) {
    runSelfTest();
    if (!write) return;
  }
  const token = process.env.X_BEARER_TOKEN || "";
  const dir = path.join(root, "accounts");
  const files = fs.readdirSync(dir).filter((name) => name.endsWith(".json") && !name.startsWith("_")).sort();
  const lines = ["# 账号核对", ""];
  let writes = 0;
  for (const name of files) {
    const abs = path.join(dir, name);
    const account = JSON.parse(fs.readFileSync(abs, "utf8"));
    if (account.status === "example" || account.availability_lock) {
      lines.push(`- @${account.handle}：跳过（示例或已锁定）`);
      continue;
    }
    const byId = account.x_user_id ? await lookup(`id:${account.x_user_id}`, token) : null;
    const byHandle = account.x_user_id ? null : await lookup(account.handle, token);
    const next = decide(account, byId, byHandle);
    if (!next.changed) {
      lines.push(`- @${account.handle}：标记不变（${account.availability}）`);
    } else {
      account.availability = next.availability;
      account.current_handle = next.current_handle;
      account.x_user_id = next.x_user_id;
      account.former_handles = next.former_handles;
      account.availability_note = next.availability_note;
      account.avatar_url = next.avatar_url;
      account.availability_checked_at = new Date().toISOString().slice(0, 10);
      if (write) fs.writeFileSync(abs, `${JSON.stringify(account, null, 2)}\n`);
      writes += 1;
      lines.push(`- @${account.handle}：标为${next.availability}。${next.availability_note}`);
    }
    await new Promise((resolve) => setTimeout(resolve, 800));
  }
  if (write && writes) {
    const built = spawnSync(process.execPath, [path.join(root, "scripts", "build.mjs")], { cwd: root, stdio: "inherit" });
    if (built.status) process.exit(built.status);
  }
  lines.push("", writes ? `本次新标记 ${writes} 个账号。` : "没有新的停用或改名标记。");
  console.log(lines.join("\n"));
}

if (selfTest && !write) runSelfTest();
else main();
