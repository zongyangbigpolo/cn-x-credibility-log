import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const check = process.argv.includes("--check");
const errors = [];

const STATUSES = [
  { id: "documented", label: "已整理", plain: "已经按公开帖整理进页面。这不是法院判决。" },
  { id: "needs_review", label: "待核对", plain: "先放进来，还要再对一次公开帖。" },
  { id: "retracted", label: "已撤回", plain: "这条不再作为有效记录，留在这里是为了不悄悄删掉。" },
  { id: "example", label: "示例", plain: "虚构的，只用来看版式。" },
];

const AVAILABILITY = [
  { id: "example", label: "示例", plain: "虚构账号，不参与定期核对。" },
  { id: "unchecked", label: "尚未核对", plain: "还没有做过定期核对。" },
  { id: "active", label: "账号还在", plain: "最近一次状态变化时，这个公开账号名还能打开。" },
  { id: "deactivated", label: "已停用", plain: "平台显示已停用，或按记下的用户编号已经找不到。" },
  { id: "renamed", label: "已改名", plain: "同一个账号还在，但公开账号名变了。曾用名仍可搜索。" },
  { id: "missing", label: "账号名打不开", plain: "这个账号名已经打不开。还不能确定是停用还是改名。" },
];

const FORBIDDEN_KEYS = new Set([
  "real_name", "legal_name", "full_name", "phone", "mobile", "tel", "address",
  "home_address", "id_card", "id_number", "email", "wechat", "qq", "telegram",
]);
const PHONE = /(?<!\d)1[3-9]\d{9}(?!\d)/;
const EMAIL = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i;
const ID_CARD = /(?<!\d)\d{17}[\dXx](?!\d)/;
const DATE = /^\d{4}-\d{2}-\d{2}$/;
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const HANDLE = /^[A-Za-z0-9_]{1,15}$/;
const X_PROFILE = /^https:\/\/(www\.)?(x\.com|twitter\.com)\/[A-Za-z0-9_]{1,15}\/?$/;
const X_STATUS = /^https:\/\/(www\.)?(x\.com|twitter\.com)\/[A-Za-z0-9_]{1,15}\/status\/\d+\/?$/;
const EXAMPLE_URL = /^https:\/\/example\.invalid\/[a-z0-9_-]+(?:\/[a-z0-9_-]+)*$/;

const categories = JSON.parse(fs.readFileSync(path.join(root, "data", "categories.json"), "utf8"));
const categoryIds = new Set(categories.map((item) => item.id));
const statusIds = new Set(STATUSES.map((item) => item.id));
const availabilityIds = new Set(AVAILABILITY.map((item) => item.id));

function fail(file, message) {
  errors.push(`${file}: ${message}`);
}

function walk(value, file, visit) {
  if (Array.isArray(value)) {
    value.forEach((item) => walk(item, file, visit));
    return;
  }
  if (value && typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      visit(key, child, file);
      walk(child, file, visit);
    }
  }
}

function readJson(rel) {
  try {
    return JSON.parse(fs.readFileSync(path.join(root, rel), "utf8"));
  } catch (error) {
    fail(rel, `JSON 无法解析：${error.message}`);
    return null;
  }
}

function assertUrl(file, label, url, example, kind) {
  if (typeof url !== "string" || !url.trim()) {
    fail(file, `${label} 不能空`);
    return;
  }
  if (example) {
    if (!EXAMPLE_URL.test(url)) fail(file, `${label} 是示例，只能用 https://example.invalid/ ，避免连到真人`);
    return;
  }
  if (url.includes("example.invalid")) fail(file, `${label} 不是示例，不能用 example.invalid`);
  if (kind === "profile" && !X_PROFILE.test(url)) fail(file, `${label} 必须是 https://x.com/账号名`);
  if (kind === "status" && !X_STATUS.test(url)) fail(file, `${label} 必须是 https://x.com/账号/status/数字`);
}

function listJson(dir) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listJson(abs));
    else if (entry.isFile() && entry.name.endsWith(".json") && !entry.name.startsWith("_")) out.push(abs);
  }
  return out;
}

function loadAccounts() {
  const files = fs.readdirSync(path.join(root, "accounts")).filter((name) => name.endsWith(".json") && !name.startsWith("_")).sort();
  const accounts = [];
  const seen = new Set();
  const usedBehaviors = new Set();
  const usedEvidence = new Set();

  for (const name of files) {
    const rel = path.join("accounts", name);
    const account = readJson(rel);
    if (!account) continue;
    walk(account, rel, (key, value, file) => {
      if (FORBIDDEN_KEYS.has(key)) fail(file, `禁止字段 ${key}`);
      if (typeof value === "string" && (PHONE.test(value) || EMAIL.test(value) || ID_CARD.test(value))) {
        fail(file, `${key} 里像是电话、邮箱或身份证号，不能收录`);
      }
    });
    if (account.id !== name.replace(/\.json$/, "")) fail(rel, "文件名必须等于 id");
    if (!SLUG.test(account.id || "")) fail(rel, "id 要用小写英文和短横线");
    if (seen.has(account.id)) fail(rel, "id 重复");
    seen.add(account.id);
    if (!HANDLE.test(account.handle || "")) fail(rel, "handle 只能是 X 账号名，不要填真人姓名");
    if (!Array.isArray(account.former_handles)) fail(rel, "former_handles 必须是数组");
    else account.former_handles.forEach((handle) => {
      if (!HANDLE.test(handle)) fail(rel, `曾用名不合法：${handle}`);
    });
    if (account.current_handle != null && !HANDLE.test(account.current_handle)) fail(rel, "current_handle 不合法");
    if (account.x_user_id != null && !/^\d{1,25}$/.test(String(account.x_user_id))) fail(rel, "x_user_id 必须是数字编号或 null");
    if (!statusIds.has(account.status)) fail(rel, "status 不合法");
    if (!availabilityIds.has(account.availability)) fail(rel, "availability 不合法");
    if (account.status !== "example" && account.availability === "example") fail(rel, "正式账号不能标成 example");
    if (account.availability === "renamed") {
      if (!account.current_handle) fail(rel, "已改名必须填写 current_handle");
      if (account.current_handle && account.current_handle.toLowerCase() === account.handle.toLowerCase()) {
        fail(rel, "已改名时，现在的名字不能和收录名相同");
      }
      if (!(account.former_handles || []).some((handle) => handle.toLowerCase() === account.handle.toLowerCase())) {
        fail(rel, "已改名时，former_handles 要包含收录时的账号名");
      }
    }
    if (account.avatar_url != null && account.avatar_url !== "") {
      const localAvatar = /^assets\/avatars\/[a-z0-9-]+\.(svg|jpe?g|png)$/;
      const twimg = /^https:\/\/pbs\.twimg\.com\/profile_images\/[A-Za-z0-9_./-]+$/;
      if (account.status === "example") {
        if (localAvatar.test(account.avatar_url)) {
          if (!fs.existsSync(path.join(root, account.avatar_url))) fail(rel, "示例头像文件不存在");
        } else if (!twimg.test(account.avatar_url)) {
          fail(rel, "示例头像只能用 assets/avatars/ 里的图片，或 X 公开头像地址");
        }
      } else if (!twimg.test(account.avatar_url)) {
        fail(rel, "头像只能是 X 公开头像地址，或留空");
      }
    }
    if (typeof account.display_name !== "string") fail(rel, "display_name 要是字符串");
    if (typeof account.overview !== "string" || account.overview.trim().length < 8) fail(rel, "overview 要用一段人话写账号总览");
    if (!DATE.test(account.updated || "")) fail(rel, "updated 要用 YYYY-MM-DD");
    if (account.availability_checked_at != null && !DATE.test(account.availability_checked_at)) {
      fail(rel, "availability_checked_at 要用 YYYY-MM-DD 或 null");
    }
    if (typeof account.availability_lock !== "boolean") fail(rel, "availability_lock 必须是 true 或 false");
    if (typeof account.availability_note !== "string") fail(rel, "availability_note 要是字符串");
    if (account.sources_are_public !== true) fail(rel, "sources_are_public 必须为 true");
    const example = account.status === "example";
    if (example && X_PROFILE.test(account.profile_url || "")) {
      const expected = String(account.handle || "").toLowerCase();
      if (!account.profile_url.toLowerCase().includes(`/${expected}`)) fail(rel, "示例若打开 X 主页，必须是这个账号自己的");
    } else {
      assertUrl(rel, "profile_url", account.profile_url, example, "profile");
    }
    if (!example && account.profile_url) {
      const expected = (account.current_handle || account.handle).toLowerCase();
      if (!account.profile_url.toLowerCase().includes(`/${expected}`)) fail(rel, "profile_url 必须指向现在的账号名");
    }
    if (example && !(account.editor_note || "").match(/虚构|示例|示范/)) fail(rel, "示例必须写明是虚构或版式示范");
    if (!Array.isArray(account.behaviors) || account.behaviors.length === 0) fail(rel, "至少连接一项不诚信行为");

    const behaviors = [];
    for (const behaviorPath of account.behaviors || []) {
      if (typeof behaviorPath !== "string" || behaviorPath.includes("..") || path.isAbsolute(behaviorPath)) {
        fail(rel, `行为路径不合法：${behaviorPath}`);
        continue;
      }
      if (!behaviorPath.startsWith(`data/behaviors/${account.id}/`)) {
        fail(rel, `行为必须放在 data/behaviors/${account.id}/ ：${behaviorPath}`);
      }
      usedBehaviors.add(behaviorPath);
      const behavior = readJson(behaviorPath);
      if (!behavior) continue;
      walk(behavior, behaviorPath, (key, value, file) => {
        if (FORBIDDEN_KEYS.has(key)) fail(file, `禁止字段 ${key}`);
        if (typeof value === "string" && (PHONE.test(value) || EMAIL.test(value) || ID_CARD.test(value))) {
          fail(file, `${key} 里像是电话、邮箱或身份证号`);
        }
      });
      if (behavior.account_id !== account.id) fail(behaviorPath, "account_id 必须指回账号");
      if (behaviorPath !== `data/behaviors/${account.id}/${behavior.id}.json`) fail(behaviorPath, "文件名必须等于行为 id");
      if (!Array.isArray(behavior.categories) || behavior.categories.length === 0) fail(behaviorPath, "至少选一个类型");
      else behavior.categories.forEach((id) => {
        if (!categoryIds.has(id)) fail(behaviorPath, `未知类型 ${id}`);
      });
      if (typeof behavior.title !== "string" || behavior.title.trim().length < 2) fail(behaviorPath, "title 不能空");
      if (typeof behavior.summary !== "string" || behavior.summary.trim().length < 4) fail(behaviorPath, "summary 太短");
      if (behavior.categories?.includes("verified_rumor")) {
        if ((behavior.verification?.note || "").trim().length < 8) fail(behaviorPath, "已证实的恶意造谣必须写 verification.note");
        assertUrl(behaviorPath, "verification.url", behavior.verification?.url, example, "status");
        if (!example && account.status !== "documented") fail(behaviorPath, "已证实的恶意造谣只能出现在 documented 账号");
      } else if (behavior.verification != null) {
        fail(behaviorPath, "只有已证实的恶意造谣才填写 verification");
      }
      if (!Array.isArray(behavior.evidence) || behavior.evidence.length === 0) fail(behaviorPath, "至少连接一条证据");
      const evidence = [];
      for (const evidencePath of behavior.evidence || []) {
        if (typeof evidencePath !== "string" || !evidencePath.startsWith(`evidence/${account.id}/`) || evidencePath.includes("..")) {
          fail(behaviorPath, `证据必须放在 evidence/${account.id}/ ：${evidencePath}`);
          continue;
        }
        usedEvidence.add(evidencePath);
        const item = readJson(evidencePath);
        if (!item) continue;
        walk(item, evidencePath, (key, value, file) => {
          if (FORBIDDEN_KEYS.has(key)) fail(file, `禁止字段 ${key}`);
          if (typeof value === "string" && (PHONE.test(value) || EMAIL.test(value) || ID_CARD.test(value))) {
            fail(file, `${key} 里像是电话、邮箱或身份证号`);
          }
        });
        if (item.account_id !== account.id) fail(evidencePath, "account_id 必须指回账号");
        if (evidencePath !== `evidence/${account.id}/${item.id}.json`) fail(evidencePath, "文件名必须等于证据 id");
        if (!DATE.test(item.date || "")) fail(evidencePath, "date 要用 YYYY-MM-DD");
        assertUrl(evidencePath, "url", item.url, example, "status");
        if ((item.excerpt || "").trim().length < 2) fail(evidencePath, "excerpt 要摘公开原话");
        if ((item.why_it_matters || "").trim().length < 2) fail(evidencePath, "why_it_matters 要用白话说明");
        evidence.push(item);
      }
      evidence.sort((a, b) => a.date.localeCompare(b.date));
      behaviors.push({ ...behavior, evidence });
    }
    accounts.push({ ...account, behaviors });
  }

  for (const abs of listJson(path.join(root, "data", "behaviors"))) {
    const rel = path.relative(root, abs).split(path.sep).join("/");
    if (!usedBehaviors.has(rel)) fail(rel, "没有任何账号连接到这项行为");
  }
  for (const abs of listJson(path.join(root, "evidence"))) {
    const rel = path.relative(root, abs).split(path.sep).join("/");
    if (!usedEvidence.has(rel)) fail(rel, "没有任何行为连接到这条证据");
  }

  const rank = { documented: 0, needs_review: 1, retracted: 2, example: 3 };
  accounts.sort((a, b) => rank[a.status] - rank[b.status] || a.handle.localeCompare(b.handle));
  return accounts;
}

const accounts = loadAccounts();
if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

const payload = { version: 1, categories, statuses: STATUSES, availability: AVAILABILITY, accounts };
const logJs = `/* 由 scripts/build.mjs 生成，不要手改。改 accounts、data、evidence 后运行 node scripts/build.mjs */\nwindow.CREDIBILITY_LOG = ${JSON.stringify(payload, null, 2)};\n`;
const reading = renderReading(payload);
const logPath = path.join(root, "data", "log.js");
const readingPath = path.join(root, "阅读.md");

if (check) {
  const same = fs.existsSync(logPath) && fs.readFileSync(logPath, "utf8") === logJs
    && fs.existsSync(readingPath) && fs.readFileSync(readingPath, "utf8") === reading;
  if (!same) {
    console.error("阅读页和数据不一致。请运行 node scripts/build.mjs 后重新提交。");
    process.exit(1);
  }
  console.log(`检查通过：${accounts.length} 个账号。`);
} else {
  fs.writeFileSync(logPath, logJs);
  fs.writeFileSync(readingPath, reading);
  console.log(`已生成 data/log.js 和 阅读.md（${accounts.length} 个账号）。`);
}

function labelOf(list, id) {
  return list.find((item) => item.id === id)?.label || id;
}

function renderReading(data) {
  const lines = [
    "# 公开记录",
    "",
    "这一页给不看代码的人直接读。想搜索账号，用浏览器打开 `index.html`。",
    "",
    "搜到一个账号后，先看账号总览，再看它的全部不诚信行为。每项行为下面是公开帖证据。",
    "",
    "不收录真实姓名、电话、住址、身份证、私人聊天。标成「示例」的不是真实账号。已整理不等于法院判决。",
    "",
    "GitHub 会定期核对正式账号，并标出已停用和已改名。曾用名仍可搜索。示例不参与核对。",
    "",
    "## 类型是什么意思",
    "",
    ...data.categories.map((item) => `- **${item.label}**：${item.plain}`),
    "",
  ];
  for (const account of data.accounts) lines.push(...renderAccount(account, data), "");
  return lines.join("\n");
}

function renderAccount(account, data) {
  const names = [`@${account.handle}`];
  if (account.current_handle && account.current_handle.toLowerCase() !== account.handle.toLowerCase()) {
    names.push(`现在叫 @${account.current_handle}`);
  }
  const lines = [
    `## ${account.display_name || account.handle}`,
    "",
    `\`${labelOf(data.statuses, account.status)}\` \`${labelOf(data.availability, account.availability)}\``,
    "",
    names.join(" · "),
    "",
    account.overview,
    "",
    `不诚信行为：${account.behaviors.length} 项`,
    "",
  ];
  if (account.availability_note) lines.push(account.availability_note, "");
  for (const behavior of account.behaviors) {
    const tags = behavior.categories.map((id) => labelOf(data.categories, id)).join("、");
    lines.push(`### ${behavior.title}`, "", `${tags}。${behavior.summary}`, "");
    for (const item of behavior.evidence) {
      lines.push(`- ${item.date}：${item.excerpt}`);
      lines.push(`  - 这条说明什么：${item.why_it_matters}`);
    }
    if (behavior.verification) lines.push("", `证实来源：${behavior.verification.note}`);
    lines.push("");
  }
  if (account.editor_note) lines.push(account.editor_note, "");
  return lines;
}
