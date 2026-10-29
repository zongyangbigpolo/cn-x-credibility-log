import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { cleanAvatar } from "./check-accounts.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const write = process.argv.includes("--write");
const selfTest = process.argv.includes("--self-test");
const FOLLOWER_CAP = 1_000_000;
const QUERIES = [
  "site:x.com 抽奖 iPhone Duo 一键三连",
  "site:x.com 抽 iPhone grok 关注",
  "site:x.com 送出 iPhone 抽奖 点赞 转发",
  "site:x.com iPhone Pro Max 抽奖 评论",
];

const STATUS_LINK = /x\.com(?:%2F|\/)([A-Za-z0-9_]{1,15})(?:%2F|\/)status(?:%2F|\/)(\d+)/gi;

export function classifyGiveaway({ text, followers }) {
  const body = String(text || "");
  const count = Number(followers);
  if (!Number.isFinite(count) || count > FOLLOWER_CAP) return { include: false, reason: "followers" };
  if (!/[\u4e00-\u9fff]/.test(body) || !/iphone|苹果手机/i.test(body) || !/抽奖|抽\s*\d|抽个|抽一位/.test(body)) {
    return { include: false, reason: "not-chinese-iphone-draw" };
  }
  const commentary = /为什么|是不是真的|操了|假活动|盯了一个|到底是真|媒体报道|玩\s*X\s*以来|听说一键三连/.test(body);
  const ownEntry = /参与方式|一键三连|关注我|获赠/.test(body);
  if (commentary && !ownEntry) return { include: false, reason: "commentary" };
  const reverse = /送给我|给我送|送我一|粉丝送给我|人给我送|送我\s*iphone/i.test(body);
  const claimsGift = /发个福利|发福利|获赠|送出\s*\d|抽\s*\d+\s*台|抽奖奖品|等你拿/.test(body);
  if (reverse && !claimsGift) return { include: false, reason: "reverse-only" };
  if (reverse && claimsGift) return { include: true, kind: "self-reversed" };
  return { include: false, reason: "no-public-proof-it-was-not-sent" };
}

function slug(handle) {
  return String(handle).toLowerCase().replace(/_/g, "-").replace(/[^a-z0-9-]/g, "").replace(/-+/g, "-").replace(/^-|-$/g, "");
}

function excerpt(text) {
  const clean = String(text || "").replace(/https?:\/\/\S+/g, "").replace(/\s+/g, " ").trim();
  const hit = clean.search(/送给我|给我送|送我一|人给我送/);
  if (hit > 60) return clean.slice(Math.max(0, hit - 50), hit + 90).trim();
  return clean.slice(0, 180);
}

function postDate(createdAt) {
  const date = new Date(createdAt);
  if (Number.isNaN(date.getTime())) return null;
  return date.toISOString().slice(0, 10);
}

function existingKeys() {
  const handles = new Set();
  const ids = new Set();
  const dir = path.join(root, "accounts");
  for (const name of fs.readdirSync(dir)) {
    if (!name.endsWith(".json") || name.startsWith("_")) continue;
    const account = JSON.parse(fs.readFileSync(path.join(dir, name), "utf8"));
    handles.add(String(account.handle || "").toLowerCase());
    if (account.current_handle) handles.add(String(account.current_handle).toLowerCase());
    for (const handle of account.former_handles || []) handles.add(String(handle).toLowerCase());
    if (account.x_user_id) ids.add(String(account.x_user_id));
  }
  return { handles, ids };
}

async function searchLinks() {
  const found = new Map();
  for (const query of QUERIES) {
    const url = `https://r.jina.ai/http://duckduckgo.com/html/?${new URLSearchParams({ q: query })}`;
    const response = await fetch(url, { headers: { "User-Agent": "cn-x-credibility-log" } });
    if (!response.ok) continue;
    const body = await response.text();
    for (const match of body.matchAll(STATUS_LINK)) {
      found.set(match[2], match[1]);
    }
  }
  return [...found.entries()].map(([id, handle]) => ({ id, handle }));
}

async function fetchTweet(handle, id) {
  const response = await fetch(`https://api.fxtwitter.com/${handle}/status/${id}`, {
    headers: { "User-Agent": "cn-x-credibility-log" },
  });
  if (!response.ok) return null;
  const payload = await response.json().catch(() => null);
  return payload?.tweet || null;
}

function writeRecord(tweet, today) {
  const author = tweet.author || {};
  const handle = author.screen_name;
  const id = slug(handle);
  const avatar = cleanAvatar(author.avatar_url);
  const date = postDate(tweet.created_at);
  const quote = excerpt(tweet.text);
  if (!id || !handle || !date || !avatar || quote.length < 8) return null;
  const account = {
    id,
    handle,
    former_handles: [],
    current_handle: null,
    x_user_id: String(author.id),
    avatar_url: avatar,
    display_name: "",
    profile_url: `https://x.com/${handle}`,
    status: "needs_review",
    availability: "active",
    availability_note: `${today} 公开搜索时主页资料还能打开。粉丝数不超过 100 万。`,
    availability_checked_at: today,
    availability_lock: false,
    overview: `公开搜索找到一条中文抽 iPhone 帖。帖子写了发福利或抽手机，又写把名额或手机送给作者，所以不能把它当成已经发奖。${today} 公开资料粉丝数约 ${Number(author.followers)}，不超过 100 万。这不是法院判决。`,
    updated: today,
    sources_are_public: true,
    editor_note: "公开显示名没有写入。没有登录。只收录帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
    behaviors: [`data/behaviors/${id}/fake-giveaway.json`],
  };
  const behavior = {
    id: "fake-giveaway",
    account_id: id,
    categories: ["false_info"],
    title: "中文抽手机帖写明不是作者发奖",
    summary: "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
    verification: null,
    evidence: [`evidence/${id}/${date}-iphone-giveaway.json`],
  };
  const evidence = {
    id: `${date}-iphone-giveaway`,
    account_id: id,
    date,
    url: `https://x.com/${handle}/status/${tweet.id}`,
    excerpt: quote,
    why_it_matters: "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。",
  };
  fs.mkdirSync(path.join(root, "data", "behaviors", id), { recursive: true });
  fs.mkdirSync(path.join(root, "evidence", id), { recursive: true });
  fs.writeFileSync(path.join(root, "accounts", `${id}.json`), `${JSON.stringify(account, null, 2)}\n`);
  fs.writeFileSync(path.join(root, "data", "behaviors", id, "fake-giveaway.json"), `${JSON.stringify(behavior, null, 2)}\n`);
  fs.writeFileSync(path.join(root, "evidence", id, `${date}-iphone-giveaway.json`), `${JSON.stringify(evidence, null, 2)}\n`);
  return id;
}

function runSelfTest() {
  const samples = [
    [{ text: "发个福利，本次抽10台iPhone Duo。抽10个粉丝送给我。", followers: 100 }, true],
    [{ text: "抽2位粉丝送我iPhone 18Pro", followers: 100 }, false],
    [{ text: "为什么这么多人抽奖送iPhone，是不是真的送啊？", followers: 100 }, false],
    [{ text: "获奖者每人将获赠全新 iPhone Duo", followers: 100 }, false],
    [{ text: "发个福利，本次抽10台iPhone。抽粉丝送给我。", followers: 1_000_001 }, false],
    [{ text: "Giveaway iPhone follow me", followers: 10 }, false],
  ];
  for (const [input, expected] of samples) {
    const actual = classifyGiveaway(input).include;
    if (actual !== expected) {
      console.error("self-test failed", input, actual);
      process.exit(1);
    }
  }
  console.log("find-iphone-giveaways self-test ok");
}

async function main() {
  if (selfTest) {
    runSelfTest();
    if (!write) return;
  }
  const today = new Date().toISOString().slice(0, 10);
  const known = existingKeys();
  const links = await searchLinks();
  const lines = ["# 中文抽 iPhone 公开搜索", "", `粉丝超过 ${FOLLOWER_CAP} 的不收录。只自动写入帖子自己写明不是作者发奖的记录。`, ""];
  let added = 0;
  for (const link of links) {
    if (known.handles.has(link.handle.toLowerCase())) continue;
    const tweet = await fetchTweet(link.handle, link.id);
    if (!tweet?.author) continue;
    const author = tweet.author;
    if (known.handles.has(String(author.screen_name || "").toLowerCase()) || known.ids.has(String(author.id))) continue;
    const decision = classifyGiveaway({ text: tweet.text, followers: author.followers });
    if (!decision.include) {
      lines.push(`- @${author.screen_name || link.handle}：跳过（${decision.reason}）`);
      continue;
    }
    if (!write) {
      lines.push(`- @${author.screen_name}：可以写入，本次没有加 --write`);
      continue;
    }
    const id = writeRecord(tweet, today);
    if (!id) {
      lines.push(`- @${author.screen_name}：资料不完整，没有写入`);
      continue;
    }
    known.handles.add(String(author.screen_name).toLowerCase());
    known.ids.add(String(author.id));
    added += 1;
    lines.push(`- @${author.screen_name}：已写入待核对记录 ${id}`);
  }
  if (added > 0) {
    const page = path.join(root, "index.html");
    const html = fs.readFileSync(page, "utf8");
    const next = html.replace(/log\.js\?v=\d+/, (token) => {
      const version = Number(token.match(/\d+/)[0]) + 1;
      return `log.js?v=${version}`;
    });
    if (next !== html) fs.writeFileSync(page, next);
    const built = spawnSync(process.execPath, ["scripts/build.mjs"], { cwd: root, stdio: "inherit" });
    if (built.status !== 0) process.exit(built.status || 1);
  }
  lines.push("", added ? `新写入 ${added} 条。` : "没有新的可自动写入记录。");
  console.log(lines.join("\n"));
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
