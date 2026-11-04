const summary = document.querySelector("#summary");
const names = document.querySelector("#names");
const result = document.querySelector("#result");
const button = document.querySelector("#block");

function show(accounts) {
  summary.textContent = accounts.length
    ? `名单上有 ${accounts.length} 个已确认的 Liar。点一下才会屏蔽，不会自动发言。`
    : "名单上还没有 Liar。阅读页确认并提交之后，这里才会出现。";
  names.replaceChildren();
  accounts.slice(0, 8).forEach((account) => {
    const item = document.createElement("li");
    item.textContent = `@${account.current_handle || account.handle}`;
    names.append(item);
  });
  button.disabled = accounts.length === 0;
}

chrome.runtime.sendMessage({ type: "list" }, (response) => show(response?.accounts || []));
button.addEventListener("click", () => {
  button.disabled = true;
  result.textContent = "正在屏蔽…";
  chrome.runtime.sendMessage({ type: "block-all" }, (progress) => {
    button.disabled = false;
    result.textContent = progress?.detail || "没有返回结果";
  });
});
