const LIST_URLS = [
  "https://raw.githubusercontent.com/zongyangbigpolo/cn-x-credibility-log/main/data/liars.json",
  "https://zongyangbigpolo.github.io/cn-x-credibility-log/data/liars.json",
];
const BEARER = "AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA";
let running = false;

async function loadList() {
  for (const url of LIST_URLS) {
    try {
      const response = await fetch(url, { cache: "no-store" });
      if (!response.ok) continue;
      const data = await response.json();
      if (Array.isArray(data.accounts)) return data.accounts;
    } catch { /* try the next public copy */ }
  }
  const bundled = await fetch(chrome.runtime.getURL("liars.json"));
  const data = await bundled.json();
  return Array.isArray(data.accounts) ? data.accounts : [];
}

async function blockOne(account, csrf) {
  if (!account.x_user_id) return { handle: account.handle, ok: false, detail: "没有平台编号" };
  const response = await fetch("https://x.com/i/api/1.1/blocks/create.json", {
    method: "POST",
    credentials: "include",
    headers: {
      authorization: `Bearer ${BEARER}`,
      "x-csrf-token": csrf,
      "x-twitter-auth-type": "OAuth2Session",
      "x-twitter-active-user": "yes",
      "content-type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ user_id: String(account.x_user_id) }),
  });
  const detail = (await response.text()).slice(0, 180);
  const already = /already/i.test(detail);
  return { handle: account.handle, ok: response.ok || already, detail: response.ok || already ? "" : detail };
}

async function blockAll() {
  if (running) return { ok: false, detail: "正在屏蔽，请稍等" };
  running = true;
  try {
    const cookie = await chrome.cookies.get({ url: "https://x.com/", name: "ct0" });
    if (!cookie?.value) {
      const result = { ok: false, detail: "请先在这个浏览器登录 X" };
      await chrome.storage.local.set({ blockProgress: result });
      return result;
    }
    const accounts = await loadList();
    const results = [];
    for (let index = 0; index < accounts.length; index += 1) {
      await chrome.storage.local.set({
        blockProgress: { ok: true, done: index, total: accounts.length, results },
      });
      try {
        results.push(await blockOne(accounts[index], cookie.value));
      } catch (error) {
        results.push({ handle: accounts[index].handle, ok: false, detail: String(error).slice(0, 180) });
      }
      if (index + 1 < accounts.length) await new Promise((resolve) => setTimeout(resolve, 1100));
    }
    const failed = results.filter((item) => !item.ok);
    const result = {
      ok: failed.length === 0,
      done: accounts.length,
      total: accounts.length,
      results,
      detail: accounts.length ? `完成 ${results.length - failed.length} 个，失败 ${failed.length} 个` : "名单里还没有 Liar",
    };
    await chrome.storage.local.set({ blockProgress: result });
    return result;
  } finally {
    running = false;
  }
}

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message?.type === "list") {
    loadList().then((accounts) => sendResponse({ accounts })).catch(() => sendResponse({ accounts: [] }));
    return true;
  }
  if (message?.type === "block-all") {
    blockAll().then(sendResponse);
    return true;
  }
  return false;
});
