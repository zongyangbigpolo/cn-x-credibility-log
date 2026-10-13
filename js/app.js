(function () {
  const log = window.CREDIBILITY_LOG;
  const report = document.querySelector("#report");
  const directory = document.querySelector("#directory");
  const count = document.querySelector("#result-count");
  const input = document.querySelector("#q");
  if (!log || !Array.isArray(log.accounts)) {
    report.textContent = "记录还没准备好。";
    return;
  }

  const byId = Object.fromEntries(log.accounts.map((account) => [account.id, account]));
  const label = (list, id) => (list.find((item) => item.id === id) || {}).label || id;
  const plain = (list, id) => (list.find((item) => item.id === id) || {}).plain || "";
  let selected = location.hash.slice(1);

  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    Object.entries(attrs || {}).forEach(([key, value]) => {
      if (key === "class") node.className = value;
      else if (value != null && value !== false) node.setAttribute(key, value);
    });
    (children || []).forEach((child) => node.append(child instanceof Node ? child : document.createTextNode(child)));
    return node;
  }

  function safePostUrl(url) {
    try {
      const parsed = new URL(url);
      const host = parsed.hostname.replace(/^www\./, "");
      if (parsed.protocol === "https:" && (host === "x.com" || host === "twitter.com")) return parsed.href;
    } catch { /* ignore */ }
    return null;
  }

  function safeAvatar(url) {
    if (typeof url !== "string" || !url || url.includes("..")) return null;
    if (/^assets\/avatars\/[a-z0-9-]+\.(svg|jpe?g|png)$/.test(url)) return url;
    try {
      const parsed = new URL(url);
      if (parsed.protocol === "https:" && parsed.hostname === "pbs.twimg.com" && parsed.pathname.startsWith("/profile_images/")) {
        return parsed.href;
      }
    } catch { /* ignore */ }
    return null;
  }

  function avatar(account, size) {
    let hue = 0;
    for (const ch of account.id) hue = (hue * 33 + ch.charCodeAt(0)) % 360;
    const name = (account.display_name || account.handle || "?").trim();
    const node = el("span", {
      class: size ? `avatar ${size}` : "avatar",
      style: `--hue:${hue}`,
      "aria-hidden": "true",
    }, [name.slice(0, 1)]);
    const src = safeAvatar(account.avatar_url);
    if (src) {
      const img = el("img", { src, alt: "" });
      img.addEventListener("error", () => img.remove());
      node.append(img);
    }
    return node;
  }

  function stat(term, text) {
    return el("div", { class: "stat" }, [el("strong", {}, [text]), el("span", {}, [term])]);
  }

  function formatDate(iso) {
    const [year, month, day] = String(iso || "").split("-");
    if (!year || !month || !day) return iso || "";
    return `${year}年${Number(month)}月${Number(day)}日`;
  }

  function namesOf(account) {
    return [account.handle, account.current_handle, ...(account.former_handles || []), account.display_name, account.x_user_id]
      .filter(Boolean);
  }

  function matches(account, query) {
    if (!query) return true;
    const needle = query.toLowerCase().replace(/^@/, "");
    const haystack = [
      ...namesOf(account),
      account.overview,
      ...account.behaviors.flatMap((behavior) => [behavior.title, behavior.summary]),
    ].join("\n").toLowerCase();
    return haystack.includes(needle);
  }

  function visibleAccounts() {
    return log.accounts.filter((account) => matches(account, input.value.trim()));
  }

  function renderDirectory(accounts) {
    directory.replaceChildren();
    count.textContent = accounts.length ? `找到 ${accounts.length} 个账号` : "没有这个账号";
    accounts.forEach((account) => {
      const button = el("button", {
        type: "button",
        class: "account-card",
        "aria-current": account.id === selected ? "true" : null,
      }, [
        avatar(account),
        el("span", { class: "card-body" }, [
          el("span", { class: "card-top" }, [
            el("strong", {}, [account.display_name || `@${account.handle}`]),
            el("span", { class: `pill ${account.availability}` }, [label(log.availability, account.availability)]),
          ]),
          el("span", { class: "card-handle" }, [`@${account.current_handle || account.handle} · ${account.behaviors.length} 项`]),
          el("span", { class: "card-overview" }, [account.overview]),
        ]),
      ]);
      button.addEventListener("click", () => select(account.id));
      directory.append(button);
    });
  }

  function select(id) {
    selected = id;
    history.replaceState(null, "", `#${id}`);
    render();
    report.scrollIntoView({ block: "start" });
  }

  function renderReport(account) {
    if (!account) {
      report.replaceChildren(el("div", { class: "empty" }, [
        el("h2", {}, ["先选一个账号"]),
        el("p", {}, ["在左边搜索或点一个账号。打开后会看到账号总览，以及全部不诚信行为。标成示例的不是真实账号。"]),
      ]));
      return;
    }
    const availability = account.availability;
    const stamps = el("div", { class: "stamps" }, [
      el("span", { class: `stamp ${account.status}` }, [label(log.statuses, account.status)]),
      el("span", { class: `stamp ${availability}` }, [label(log.availability, account.availability)]),
    ]);
    const facts = el("dl", { class: "overview" }, []);
    const addFact = (term, text) => {
      facts.append(el("dt", {}, [term]), el("dd", {}, [text]));
    };
    addFact("收录名", `@${account.handle}`);
    if (account.current_handle && account.current_handle.toLowerCase() !== account.handle.toLowerCase()) {
      addFact("现在叫", `@${account.current_handle}`);
    }
    const former = (account.former_handles || []).filter((handle) => {
      return handle.toLowerCase() !== account.handle.toLowerCase()
        && handle.toLowerCase() !== (account.current_handle || "").toLowerCase();
    });
    if (former.length) addFact("其他曾用名", former.map((handle) => `@${handle}`).join("、"));
    const postCount = account.behaviors.reduce((sum, behavior) => sum + behavior.evidence.length, 0);
    if (account.x_user_id) addFact("平台编号", String(account.x_user_id));
    if (account.availability_checked_at) addFact("最近标记", formatDate(account.availability_checked_at));

    const children = [
      el("header", { class: "profile" }, [
        avatar(account, "xl"),
        el("div", { class: "profile-id" }, [
          el("h2", {}, [account.display_name || `@${account.handle}`]),
          el("p", { class: "handle" }, [`@${account.current_handle || account.handle}`]),
          stamps,
        ]),
      ]),
      el("div", { class: "stats" }, [
        stat("不诚信行为", String(account.behaviors.length)),
        stat("公开帖", String(postCount)),
        stat("账号状态", label(log.availability, account.availability)),
      ]),
    ];
    if (availability === "deactivated" || availability === "renamed" || availability === "missing") {
      children.push(el("p", { class: `banner ${availability}` }, [plain(log.availability, availability)]));
    }
    children.push(
      el("h3", {}, ["账号总览"]),
      el("p", {}, [account.overview]),
      facts,
    );
    if (account.availability_note) children.push(el("p", { class: "muted" }, [account.availability_note]));
    const list = el("ol", {}, account.behaviors.map((behavior) => el("li", {}, [
      el("a", { href: `#${account.id}-${behavior.id}` }, [behavior.title]),
    ])));
    children.push(el("p", {}, ["不诚信行为一览："]), list, el("h3", {}, ["全部不诚信行为"]));
    account.behaviors.forEach((behavior, index) => children.push(renderBehavior(account, behavior, index)));
    if (account.editor_note) children.push(el("p", { class: "muted" }, [account.editor_note]));
    report.replaceChildren(...children);
  }

  function renderBehavior(account, behavior, index) {
    const tags = el("div", { class: "tags" }, behavior.categories.map((id) => el("span", { class: "tag" }, [label(log.categories, id)])));
    const timeline = el("ol", { class: "timeline" }, behavior.evidence.map((item) => {
      const link = safePostUrl(item.url);
      const body = [
        el("time", { datetime: item.date }, [formatDate(item.date)]),
        el("p", {}, [item.excerpt]),
        el("p", { class: "muted" }, [item.why_it_matters]),
      ];
      if (link) body.push(el("a", { href: link, target: "_blank", rel: "noopener noreferrer" }, ["打开原帖"]));
      else body.push(el("p", { class: "muted" }, ["示例没有真实链接"]));
      return el("li", {}, body);
    }));
    const children = [
      el("p", { class: "kicker" }, [`不诚信行为 ${index + 1}`]),
      el("h3", {}, [behavior.title]),
      tags,
      el("p", {}, [behavior.summary]),
      timeline,
    ];
    if (behavior.verification) {
      children.push(el("p", {}, [`证实来源：${behavior.verification.note}`]));
    }
    return el("article", { class: "behavior", id: `${account.id}-${behavior.id}` }, children);
  }

  function render() {
    const accounts = visibleAccounts();
    if (selected && !accounts.some((account) => account.id === selected) && input.value.trim()) {
      selected = accounts[0] ? accounts[0].id : "";
    }
    renderDirectory(accounts);
    renderReport(byId[selected]);
  }

  document.querySelector("#search-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const accounts = visibleAccounts();
    if (accounts.length === 1) selected = accounts[0].id;
    render();
  });
  input.addEventListener("input", () => {
    const accounts = visibleAccounts();
    if (accounts.length === 1) selected = accounts[0].id;
    render();
  });
  const themeButton = document.querySelector("#theme");
  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    themeButton.textContent = theme === "dark" ? "浅色" : "深色";
    localStorage.setItem("cnxlog-theme", theme);
  }
  themeButton.addEventListener("click", () => {
    applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
  });
  const savedTheme = localStorage.getItem("cnxlog-theme");
  if (savedTheme === "dark" || savedTheme === "light") applyTheme(savedTheme);
  else if (matchMedia("(prefers-color-scheme: dark)").matches) applyTheme("dark");

  if (!byId[selected]) {
    const photo = (account) => /\.(jpe?g|png)$/.test(account.avatar_url || "") || String(account.avatar_url || "").includes("pbs.twimg.com");
    selected = log.accounts.find((account) => account.status !== "example")?.id
      || log.accounts.find(photo)?.id
      || "";
  }
  render();
})();
