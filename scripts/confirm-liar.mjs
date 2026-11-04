import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function parseConfirm(title, body) {
  const titleText = String(title || "").trim();
  if (!titleText.startsWith("确认 Liar:")) return null;
  const titleId = titleText.match(/^确认 Liar: ([a-z0-9]+(?:-[a-z0-9]+)*)\s*$/)?.[1] || "";
  const bodyId = String(body || "").match(/account_id:\s*([a-z0-9]+(?:-[a-z0-9]+)*)/)?.[1]
    || String(body || "").match(/### 账号编号\s+([a-z0-9]+(?:-[a-z0-9]+)*)/)?.[1]
    || "";
  if (!bodyId || (titleId && titleId !== bodyId) || !SLUG.test(bodyId)) return null;
  return bodyId;
}

function today() {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Shanghai" }).format(new Date());
}

function confirm(id) {
  if (!SLUG.test(id || "")) {
    console.error("账号编号不合法");
    process.exit(1);
  }
  const rel = path.join("accounts", `${id}.json`);
  const abs = path.join(root, rel);
  if (!fs.existsSync(abs)) {
    console.error(`找不到 ${rel}`);
    process.exit(1);
  }
  const account = JSON.parse(fs.readFileSync(abs, "utf8"));
  if (account.id !== id || account.status === "example" || account.status === "retracted") {
    console.error("这个账号不能标成 Liar");
    process.exit(1);
  }
  if (account.status === "liar") {
    console.log(`已经是 Liar：${id}`);
    return;
  }
  if (account.status !== "needs_review" && account.status !== "documented") {
    console.error(`当前状态不能确认：${account.status}`);
    process.exit(1);
  }
  let text = fs.readFileSync(abs, "utf8");
  const next = text
    .replace(`"status": "${account.status}"`, '"status": "liar"')
    .replace(/"updated": "\d{4}-\d{2}-\d{2}"/, `"updated": "${today()}"`);
  if (next === text || !next.includes('"status": "liar"')) {
    console.error("没有写上 Liar 状态");
    process.exit(1);
  }
  fs.writeFileSync(abs, next);
  console.log(`已标为 Liar：${id}`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  if (process.argv.includes("--self-test")) {
    if (parseConfirm("确认 Liar: okx-service", "account_id: okx-service") !== "okx-service") process.exit(1);
    if (parseConfirm("确认 Liar: okx-service", "### 账号编号\n\nokx-service") !== "okx-service") process.exit(1);
    if (parseConfirm("确认 Liar: okx-service", "account_id: other") !== null) process.exit(1);
    if (parseConfirm("质疑: okx-service", "account_id: okx-service") !== null) process.exit(1);
    if (parseConfirm("确认 Liar:", "### 账号编号\n\nokx-service") !== "okx-service") process.exit(1);
    if (parseConfirm("确认 Liar: ../ok", "account_id: ../ok") !== null) process.exit(1);
    console.log("self-test ok");
  } else if (process.argv.includes("--from-env")) {
    const id = parseConfirm(process.env.CONFIRM_TITLE, process.env.CONFIRM_BODY);
    if (!id) {
      console.error("确认单对不上，没有改记录");
      process.exit(1);
    }
    confirm(id);
  } else {
    confirm(process.argv[2]);
  }
}
