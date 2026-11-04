chrome.runtime.sendMessage({ type: "list" }, (response) => {
  const accounts = response?.accounts || [];
  if (!accounts.length || document.getElementById("cnxlog-bar")) return;
  const bar = document.createElement("div");
  bar.id = "cnxlog-bar";
  const shadow = bar.attachShadow({ mode: "open" });
  shadow.innerHTML = `
    <style>
      div { position: fixed; right: 16px; bottom: 16px; z-index: 2147483646; display: flex; gap: 8px; align-items: center;
        padding: 10px 12px; border-radius: 14px; background: #16181c; color: #e7e9ea; font: 14px/1.4 -apple-system, "PingFang SC", sans-serif;
        box-shadow: 0 8px 24px rgba(0,0,0,.28); }
      button { border: 0; border-radius: 999px; padding: 7px 12px; background: #f4212e; color: white; font: inherit; cursor: pointer; }
    </style>
    <div><span>公开记录：${accounts.length} 个 Liar</span><button type="button">一键屏蔽</button></div>
  `;
  shadow.querySelector("button").addEventListener("click", (event) => {
    const button = event.currentTarget;
    button.disabled = true;
    button.textContent = "正在屏蔽…";
    chrome.runtime.sendMessage({ type: "block-all" }, (result) => {
      button.disabled = false;
      button.textContent = result?.detail || "已完成";
    });
  });
  document.documentElement.append(bar);
});
