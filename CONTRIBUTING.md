# 怎么加一条记录

不会改文件的话，用 Issues 里的「提交一条公开记录」。不要填写真实姓名、电话、住址、身份证或私人聊天。

会改文件的话，按这个顺序，三处要连得上：

1. 复制 `accounts/_template.json`，改名为 `accounts/稳定编号.json`。编号用小写英文和短横线，以后不要因为改名而更换。
2. 复制 `data/behaviors/_template.json` 到 `data/behaviors/稳定编号/行为编号.json`。在账号文件的 `behaviors` 里写上这个路径。
3. 复制 `evidence/_template.json` 到 `evidence/稳定编号/日期-短名.json`。在行为文件的 `evidence` 里写上这个路径。
4. 运行 `node scripts/build.mjs`。
5. 用浏览器打开 `index.html`，搜索这个账号，确认总览和全部行为都在。

正式记录的链接只能是 `https://x.com/账号/status/数字`。示例只能用 `https://example.invalid/`，避免误连到真人。

「已证实的恶意造谣」必须写 `verification`，说明是哪份公开材料证实的。不能只靠转述。

## 已停用和已改名

GitHub Actions 每周一运行「标记已停用和改名的账号」。也可以在 Actions 页手动运行。

核对规则：

- 第一次能打开时，记下平台用户编号和公开头像地址，不记下显示名。显示名可能是真人姓名，不能自动写进仓库。
- 头像只接受 `https://pbs.twimg.com/profile_images/`。停用后仍保留上次公开头像。示例不用真人照片。
- 之后用这个编号核对。编号还在、账号名变了，标为已改名，并保留曾用名。
- 平台显示停用，或编号已经找不到，标为已停用。记录不删除。
- 还没有编号、只是账号名打不开，标为「账号名打不开」，不直接写成已改名。
- 网络失败时不改旧标记。
- 示例账号，以及 `availability_lock` 为 true 的账号，不自动改。

想手工锁定：把 `availability_lock` 设为 true。想手工改名：填 `current_handle`、把旧名放进 `former_handles`、`availability` 设为 `renamed`。

可选：在仓库 Secrets 里加 `X_BEARER_TOKEN`，核对会优先走官方接口。没有这个密钥时，用公开的资料接口，失败就不改标记。

合并到 `main` 后，阅读页工作流会发布页面。第一次需要在仓库 Settings → Pages 里选择 GitHub Actions。

## 中文抽 iPhone

GitHub Actions 每周一运行「查找未发奖的中文抽奖帖」，也可以手动运行。它只搜索公开网页，不登录。

- 粉丝数超过 100 万的不收录。
- 只自动写入帖子自己写了抽手机、又写把手机或名额送给作者的记录，并标成待核对。
- 只说“我来抽奖送手机”、但帖子没有证明没发奖的，不自动写入。要另看到截止后的公开页没有发奖证明，再手工加。
- 纯评论别人抽奖、或只让粉丝给作者送手机的，不收录。
