# Awesome DeepSeek Harness 插件

> **DeepSeek Harness（DSH）** Cordis 插件生态的官方自动生成 awesome list ——
> 由 [cordis.run](https://cordis.run)（DeepSeek Harness 插件市场）策展维护。

**334 个 DeepSeek Harness 插件** · 数据来自 [cordis.run 开放插件索引](data/plugins.json)。

每个收录的 DeepSeek Harness 插件都有**一行安装命令**和 **cordis.run 安全扫描状态**。

[English](README.md) | 中文版

---

## 什么是 DeepSeek Harness？

**DeepSeek Harness（DSH）** 是面向 DeepSeek 模型的智能体运行框架。它的插件体系 **Cordis**
允许你安装声明了 `dsh.bundle` 的 npm 包，并把它作为补丁层挂载到 DSH profile。
本列表收录经过 npm registry 校验、并在 [cordis.run](https://cordis.run) 上架的 **DeepSeek Harness Cordis 插件**。

## 目录

- [🧠 开发助手](#开发助手)
- [🔁 工作流与自动化](#工作流与自动化)
- [🎨 主题与界面](#主题与界面)
- [🔌 数据集成](#数据集成)
- [⚡ 效率工具](#效率工具)
- [📖 教程与指南](#教程与指南)
- [🛠 工具](#工具)
- [👥 社区](#社区)

---

## 开发助手

> 面向 DeepSeek Harness 的编程、代码审查、SQL 与开发工作流插件。 *(75 个插件)*

| DeepSeek Harness 插件 | 简介 | cordis.run |
|---|---|---|
| [dsh-cc-tui](https://github.com/ccch1mneyyy/dsh-cc-tui) | 为 DeepSeek Harness 智能体打造的 Claude Code 风格交互式 TUI 入口，基于移植的 Ink 核心构建 | [🔗](https://cordis.run/plugins/dsh-cc-tui) |
| [dsh-at-file](https://github.com/omdsh-dev/dsh-at-file) | 为DeepSeek Harness网页界面提供Codex风格的@路径引用：搜索工作区路径，而不注入文件内容 | [🔗](https://cordis.run/plugins/dsh-at-file) |
| [dsh-notification](https://github.com/omdsh-dev/dsh-notification) | 当 DeepSeek Harness 完成一轮时发送浏览器桌面通知：可按结果配置开关，支持包含/排除关键词规则，通过浏览器 Notification AP… | [🔗](https://cordis.run/plugins/dsh-notification) |
| [@deepseek-ai/dsh-plugin-check](https://github.com/omdsh-dev/dsh-plugin-check) | DSH 插件健康检查器：扫描插件仓库，检查 manifest 协议、补丁格式、构建陷阱及 hub 注册问题，零依赖只读诊断 | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-plugin-check) |
| [@dsh-external/dsh-navbar](https://github.com/vlln/dsh-navbar) | 对话节点导航条——user 消息快速跳转（自渲染 DOM，官方 client 通道） | [🔗](https://cordis.run/plugins/dsh-external-dsh-navbar) |
| [@deepseek-ai/dsh-toolkit](https://github.com/omdsh-dev/dsh-toolkit) | DSH 零依赖工具集，将 time / encoding / json / calculator / csv / regex / markdown / d… | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-toolkit) |
| [dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon) | 深度整合 Mnemon 与 DeepSeek Harness，为 DSH 提供完整的本地优先三层记忆：运行时内存、可搜索文档及受监督的记忆空间 | [🔗](https://cordis.run/plugins/dsh-mnemon) |
| [@deepseek-ai/dsh-session-health](https://github.com/omdsh-dev/dsh-session-health) | DSH 会话健康检查器：针对多帧 zstd 会话日志的帧级诊断（撕裂/损坏/空帧检测），零依赖只读扫描器 | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-session-health) |
| [cordis-fabric-bundle](https://github.com/omdsh-dev/fabric) | Fabric/Mixin 扩展工作区：基于 cordis-fabric 三件套的可安装配置包载体 | [🔗](https://cordis.run/plugins/cordis-fabric-bundle) |
| [@lhmd/dsh-director-toolkit](https://github.com/lhmd/dsh-director-toolkit) | DeepSeek Harness 插件，可将 3D 创意转化为可拍摄的场景简报和可直接发布的展示文案 | [🔗](https://cordis.run/plugins/lhmd-dsh-director-toolkit) |
| [@lhmd/dsh-promotion-toolkit](https://github.com/lhmd/dsh-promotion-toolkit) | DeepSeek Harness 原生推广工具包：将任意长文内容转化为有源可溯、平台原生的推广矩阵 | [🔗](https://cordis.run/plugins/lhmd-dsh-promotion-toolkit) |
| [@loserfox/git-identity](https://github.com/LoserFox/dsh-git-identity) | DSH profile bundle：Git 提交固定采用环境自身作者身份（优先 gh CLI 登录账号、GitHub noreply 邮箱），GIT_A… | [🔗](https://cordis.run/plugins/loserfox-git-identity) |
| [@dsh-external/dsh-better-browser](https://github.com/titanwings/dsh-better-browser) | DeepSeek Harness 的 Better Browser：通过 Kimi WebBridge 驱动用户真实浏览器，提供导航、快照、交互、截图、网… | [🔗](https://cordis.run/plugins/dsh-external-dsh-better-browser) |
| [@deepseek-ai/dsh-tool-calculator](https://github.com/omdsh-dev/dsh-tool-calculator) | DSH 计算器工具 | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-tool-calculator) |
| [@dingyi222666/dsh-session-notification](https://github.com/dingyi222666/dsh-session-notification) | dsh web GUI 的会话状态通知插件：可提醒会话完成/失败、问题询问和权限请求，支持配置内置或自定义声音及浏览器通知，并包含 Notificatio… | [🔗](https://cordis.run/plugins/dingyi222666-dsh-session-notification) |
| [dsh-hdc-bridge](https://github.com/1na-ko/dsh-hdc-bridge) | DSH 原生的 HarmonyOS 开发助手插件：hdc 设备桥接，提供实时设备面板、官方优先的版本化 API 文档（SDK .d.ts + 离线内置核心… | [🔗](https://cordis.run/plugins/dsh-hdc-bridge) |
| [@detpecca/dsh-llm-wiki](https://github.com/detpecca/dsh-llm-wiki) | DeepSeek Harness 插件 — 由智能体管理 LLM-Wiki 知识库：wiki_search / wiki_read / wiki_stat… | [🔗](https://cordis.run/plugins/detpecca-dsh-llm-wiki) |
| [dsh-search-mcp](https://github.com/gxpppp/dsh-search-mcp) | 用搜索 MCP 服务器（Tavily / Brave / Exa / Perplexity / DuckDuckGo / 自定义）替换 dsh 的内置网络… | [🔗](https://cordis.run/plugins/dsh-search-mcp) |
| [@jiesou/dsh-stream-rules](https://github.com/jiesou/dsh-stream-rules) | 按需注入规则，不浪费上下文 | [🔗](https://cordis.run/plugins/dsh-stream-rules) |
| [@deepseek-ai/dsh-tool-csv](https://github.com/omdsh-dev/dsh-tool-csv) | DSH CSV 数据工具：对 RFC 4180 CSV 文本进行解析、查询与统计，零依赖的状态机解析器 | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-tool-csv) |
| [@deepseek-ai/dsh-tool-stat](https://github.com/omdsh-dev/dsh-tool-stat) | DSH 统计工具：对显式有限数值数组执行描述、百分位、频率与相关性分析；零依赖，结果确定且数值稳定（Neumaier求和 + Welford方差 + 线性… | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-tool-stat) |
| [@deepseek-ai/dsh-tool-time](https://github.com/omdsh-dev/dsh-tool-time) | @deepseek-ai/dsh-tool-time DSH时间工具插件 | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-tool-time) |
| [@deepseek-ai/dsh-qwen-mm](https://github.com/omdsh-dev/Qwen-MM-Plugins) | Qwen-MM 能力以运行时获取的 Agent 技能和严格的 MCP 工具服务器形式提供 | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-qwen-mm) |
| [@huanlin/dsh-plugin-anti-ads](https://github.com/HuanLinOTO/dsh-plugin-anti-ads) | DSH广告抑制插件：将dsh-ads自身的设置键全部写为false，广播其退役事件，从DOM中清除其入口，并短路其动态层级请求 | [🔗](https://cordis.run/plugins/huanlin-dsh-plugin-anti-ads) |
| [@bill9109/dsh-webbridge](https://github.com/bill9109/dsh-webbridge) | @bill9109/dsh-webbridge 是 DeepSeek Harness 的 Kimi WebBridge 宿主插件：通过本地 kimi-we… | [🔗](https://cordis.run/plugins/bill9109-dsh-webbridge) |
| [dsh-book2skill](https://github.com/omdsh-dev/dsh-book2skill) | DSH book-to-skill 插件：一个 5 阶段长任务（获取 → 解析 → 理解 → 生成 → 安装），含 3 个人工审核关卡，为代理提供宿主工具… | [🔗](https://cordis.run/plugins/dsh-book2skill) |
| [@deepseek-ai/dsh-tool-diff](https://github.com/omdsh-dev/dsh-tool-diff) | DSH diff 工具：对文本/JSON/CSV/Markdown 进行结构化比较，生成统一差异并支持内存补丁验证 | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-tool-diff) |
| [@deepseek-ai/dsh-tool-encoding](https://github.com/omdsh-dev/dsh-tool-encoding) | DSH 编码工具插件 | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-tool-encoding) |
| [@deepseek-ai/dsh-tool-json](https://github.com/omdsh-dev/dsh-tool-json) | DSH JSON 查询工具 | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-tool-json) |
| [@deepseek-ai/dsh-tool-markdown](https://github.com/omdsh-dev/dsh-tool-markdown) | DSH Markdown 工具：HTML 转 Markdown、白名单 Markdown 转 HTML、GFM 表格规范化、TOC 生成 | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-tool-markdown) |
| [@deepseek-ai/dsh-tool-schema](https://github.com/omdsh-dev/dsh-tool-schema) | DSH JSON Schema 验证工具：校验、失败路径、静态解释、仅默认值规范化；零网络、零动态代码，带资源限制和模式 ReDoS 工作预算 | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-tool-schema) |
| [dsh-wikilink](https://github.com/zhaoscsc/dsh-wikilink) | 为 DeepSeek Harness 网页界面添加 Obsidian 风格的 [[wikilink]] 提及功能：在输入框中键入 [[ 即可模糊搜索笔记标… | [🔗](https://cordis.run/plugins/dsh-wikilink) |
| [@huanlin/dsh-plugin-aigc-canvas](https://github.com/HuanLinOTO/dsh-plugin-aigc-canvas) | DSH 插件：为 better-sidebar 提供无限自由画布，并支持与提供商无关的生成 | [🔗](https://cordis.run/plugins/huanlin-dsh-plugin-aigc-canvas) |
| [dsh-deeptutor](https://github.com/TecFancy/dsh-deeptutor) | 用于DeepSeek Harness的DeepTutor桥接包：学习能力、知识库和笔记归档（HTTP/WS优先，CLI备用；自动适配本地/远程部署） | [🔗](https://cordis.run/plugins/dsh-deeptutor) |
| [dsh-plugin-graph](https://github.com/erduotong/dsh-plugin-graph) | DeepSeek Harness 的 Web 设置界面：客户端插件的力导向关系图谱 — 展示依赖注入与插槽注册 | [🔗](https://cordis.run/plugins/dsh-plugin-graph) |
| [dsh-plugin-manager](https://github.com/hrhgit/deepseek-harness-plugin-manager) | DeepSeek Harness (DSH) 和 Cordis 的 Web 插件管理器：用于检查、启用、禁用、分组与管理运行时插件 | [🔗](https://cordis.run/plugins/dsh-plugin-manager) |
| [dsh-plugin-meta-memory](https://github.com/YYTbit/dsh-plugin-meta-memory) | 为 DeepSeek Harness 打造的结构化长期记忆系统——基于单元的简要/完整配对，支持自动注入 | [🔗](https://cordis.run/plugins/dsh-plugin-meta-memory) |
| [dsh-side-panel](https://github.com/XYZ1024-alt/dsh-side-panel) | DeepSeek Harness 的右侧开发者面板：文件、会话历史与 Git 版本控制 | [🔗](https://cordis.run/plugins/dsh-side-panel) |
| [dsh-tool-git](https://github.com/lxj808624/dsh-tool-git) | 面向 DeepSeek Harness 的结构化、安全 Git 工具族：提供 status/diff/log/branch/stage/commit/st… | [🔗](https://cordis.run/plugins/dsh-tool-git) |
| [dsh-plugin-miliastra-toolbox](https://github.com/1475505/dsh-plugin-miliastra-toolbox) | DeepSeek Harness 插件：千星沙箱知识库（节点/指南/教程/FAQ）查询工具与技能 | [🔗](https://cordis.run/plugins/dsh-plugin-miliastra-toolbox) |
| [@a179-sanae/dsh-code-check](https://github.com/a179-sanae/dsh-code-check) | 针对 DeepSeek Harness 的自动类型检查与 lint 诊断：模型编辑代码后，tsc 在后台运行，code_check 工具报告出错的地方 | [🔗](https://cordis.run/plugins/a179-sanae-dsh-code-check) |
| [@bill9109/dsh-101](https://github.com/bill9109/dsh-101) | @bill9109/dsh-101 的文档优先阅读器配置包，适用于 DeepSeek Harness：精选、有序、可搜索、可翻译地阅读 DSH 自身文档，… | [🔗](https://cordis.run/plugins/dsh-external-dsh-101) |
| [dsh-usage-cost](https://github.com/Dino6021/dsh-usage-cost) | DSH 插件：逐步时间戳 API 使用时间线（usageTimeline 投影）+ DeepSeek V4 Pro 峰值/非峰值成本读数 | [🔗](https://cordis.run/plugins/dsh-usage-cost) |
| [@dsh-memory/bundle](https://github.com/Jesse-njx/dsh-memory) | dsh-memory —— 基于 DSH 无损会话日志的引用记忆：会话后将内容提炼为可人工审计的 Markdown 文件，配有紧凑的召回索引、memory… | [🔗](https://cordis.run/plugins/dsh-memory-bundle) |
| [@dsh-skillport/bundle](https://github.com/Jesse-njx/dsh-skillport) | dsh-skillport — 你已有的每种技能（Claude Code、Codex、Cursor、Gemini CLI）都能在 DSH 中使用：跨 .c… | [🔗](https://cordis.run/plugins/dsh-skillport-bundle) |
| [shopline-ai-toolkit-dsh](https://github.com/lunw/shopline-ai-toolkit-dsh) | SHOPLINE AI Toolkit for DeepSeek Harness (DSH)：连接官方 SHOPLINE Developer MCP 服务… | [🔗](https://cordis.run/plugins/shopline-ai-toolkit-dsh) |
| [dsh-memento](https://github.com/PerryLink/dsh-memento) | 有界、分层、审批门控、可审计的跨会话记忆，为 DeepSeek Harness 而设——一种能力接缝（ctx.memory 服务 + 本地 SQLite … | [🔗](https://cordis.run/plugins/dsh-memento) |
| [@yangzhe1003/dsh-web-search-firecrawl](https://github.com/yangzhe1003/dsh-web-search-firecrawl) | 由Firecrawl驱动的搜索提供程序，用于DeepSeek Harness的web能力接口（ctx.web） | [🔗](https://cordis.run/plugins/yangzhe1003-dsh-web-search-firecrawl) |
| [dsh-all-search](https://github.com/RealAlexandreAI/dsh-all-search) | DeepSeek Harness 插件：由 AnySearch 驱动的网络搜索提供程序，通过单一 MCP 网关聚合 exa、tavily 和 firecr… | [🔗](https://cordis.run/plugins/dsh-all-search) |
| [dsh-bisect-debug](https://github.com/PangYiMing/dsh-bisect-debug) | 以代码 / 边界 / 提交（git bisect run）三种模式二分定位 bug 根因 | [🔗](https://cordis.run/plugins/dsh-bisect-debug) |
| [dsh-browser-control](https://github.com/PangYiMing/dsh-browser-control) | DSH 插件，用于控制浏览器（CDP / Playwright） | [🔗](https://cordis.run/plugins/dsh-browser-control) |
| [dsh-context-lens](https://github.com/gordonlu/dsh-context-lens) | DeepSeek Harness 的请求上下文分析器 — 查看模型请求之间的变化，以及缓存复用如何随之改变 | [🔗](https://cordis.run/plugins/dsh-context-lens) |
| [dsh-find-skill](https://github.com/Moximxxx/dsh-find-skill) | 将 vercel-labs/skills 生态接入 dsh：LLM 驱动的技能搜索、安装与生命周期管理，支持临时/项目/全局范围 | [🔗](https://cordis.run/plugins/dsh-find-skill) |
| [dsh-lens-lite](https://github.com/ben7am1n/dsh-lens-lite) | DeepSeek Harness 的编辑后诊断工具：在成功写入/编辑后运行配置好的类型检查器和 linter，并将结果以工具结果上下文形式反馈给模型 | [🔗](https://cordis.run/plugins/dsh-lens-lite) |
| [dsh-plugin-vision-toolkit](https://github.com/YYTbit/dsh-plugin-vision-toolkit) | DeepSeek Harness 的视觉工具包——为纯文本代理提供 glance、ground、detect、crop 命令行工具，以理解图像 | [🔗](https://cordis.run/plugins/dsh-plugin-vision-toolkit) |
| [dsh-screenshot-diff](https://github.com/PangYiMing/dsh-screenshot-diff) | 对两张截图进行像素级差分，输出diff.png和带标签的三联图（pixelmatch） | [🔗](https://cordis.run/plugins/dsh-screenshot-diff) |
| [dsh-tavily-search](https://github.com/zhouzhencheng07/dsh-tavily-search) | 基于 Tavily 的搜索提供商（直接调用 Tavily Search API，不消耗 LLM token），用于 DeepSeek Harness 的 … | [🔗](https://cordis.run/plugins/dsh-tavily-search) |
| [dsh-custom-css](https://github.com/AnacondaKC/dsh-custom-css) | DSH WebUI 自定义 CSS 插件：共享样式、冲突保护与本地文件导入 | [🔗](https://cordis.run/plugins/dsh-custom-css) |
| [dsh-security-scan](https://github.com/ben7am1n/dsh-security-scan) | 为 DeepSeek Harness 打造的机密与危险模式扫描器 —— 这个 security_scan 工具可查找泄露的 API 密钥、令牌、私钥和凭据… | [🔗](https://cordis.run/plugins/dsh-security-scan) |
| [dsh-toolbelt](https://github.com/cking000bigdemon/dsh-toolbelt) | 八个 DeepSeek Harness 插件：角色设定、语言守卫、视觉回退、Python 工作目录守卫、Windows 编码守卫、跨代理记忆、图像生成和技… | [🔗](https://cordis.run/plugins/dsh-toolbelt) |
| [dsh-survey](https://github.com/jinhuang712/dsh-survey) | 面向DeepSeek Harness的问卷式调查插件：do_a_survey工具可一次提出1-10+个问题（单选/多选/是否/对比/开放类型），支持四种呈… | [🔗](https://cordis.run/plugins/dsh-survey) |
| [dsh-session-index](https://github.com/longyu065/dsh-session-index) | 会话全文索引插件：监听 session/event 构建跨会话索引，提供 session_search / session_index_stats 工具，… | [🔗](https://cordis.run/plugins/dsh-session-index) |
| [dsh-payload-capture](https://github.com/Moeblack/dsh-payload-capture) | DeepSeek Harness 插件：捕获每次上行 API 请求的 payload，以 JSON 格式存入插件文件夹 | [🔗](https://cordis.run/plugins/dsh-payload-capture) |
| [@omdsh/runtime](https://github.com/omdsh-dev/omdsh-runtime) | 轻量级OMDSH Runtime，用于官方Profile组合、候选生成、恢复及Workshop集成 | [🔗](https://cordis.run/plugins/omdsh-runtime) |
| [dsh-dev-actions](https://github.com/skitse/dsh-dev-actions) | AI 将重复的开发命令、提示词和指令转化为一键执行的 DeepSeek Harness 操作 | [🔗](https://cordis.run/plugins/dsh-dev-actions) |
| [dsh-test-runner](https://github.com/suimi8/dsh-test-runner) | DSH 插件：结构化测试运行工具（test_run）——自动检测 vitest/jest/pytest/node:test，运行测试，为模型解析失败摘要 | [🔗](https://cordis.run/plugins/dsh-test-runner) |
| [@deepseek-ai/dsh-tool-search](https://github.com/vibeinging/dsh-tool-search) | 实验性逐代理工具发现与渐进式模式披露 | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-tool-search) |
| [dsh-chrome](https://github.com/YJSoooooo/dsh-chrome) | DeepSeek Harness 的 Chrome 配置文件桥：通过 chrome_repl 工具、本地 HTTP 桥接器及配套的 WanJuan Chr… | [🔗](https://cordis.run/plugins/dsh-chrome) |
| [dsh-chrome-devtools](https://github.com/yuzi-ska/DSH-Chrome-devtools) | DeepSeek Harness 配置文件包：Chrome DevTools MCP 集成 — 通过 @deepseek-ai/dsh-mcp-clien… | [🔗](https://cordis.run/plugins/dsh-chrome-devtools) |
| [dsh-plugin-rag](https://github.com/YYTbit/dsh-plugin-rag) | 面向 DeepSeek Harness 的本地知识库 RAG——索引项目文件并搜索相关上下文 | [🔗](https://cordis.run/plugins/dsh-plugin-rag) |
| [@why913/dshx](https://github.com/why913/dshx) | DeepSeek Harness (dsh) 缺失的伴生 CLI：一条命令管理 MCP 服务器 — add/list/remove/test，支持 dry… | [🔗](https://cordis.run/plugins/why913-dshx) |
| [dsh-tool-describe-image](https://github.com/sala003/dsh-tool-describe-image) | DSH插件：describe_image工具 + 浏览器端粘贴图片转文字组件，通过DashScope qwen-vl将图像理解桥接至纯文本模型 | [🔗](https://cordis.run/plugins/dsh-tool-describe-image) |
| [dsh-tool-chaos](https://github.com/cyanseek/dsh-tool-chaos) | 为 DeepSeek Harness 工具流水线提供确定性故障注入、自主韧性实验和机器可读证据 | [🔗](https://cordis.run/plugins/dsh-tool-chaos) |
| [@dsh-voice/bundle](https://github.com/Jesse-njx/dsh-voice) | dsh-voice —— 语音输入，语音输出：口述音频转为用户消息（转写），让智能体朗读回复（播报），并在长时间无头运行时留下离场旁白 | [🔗](https://cordis.run/plugins/dsh-voice-bundle) |
| [@jorinyang/dsh-doctor](https://github.com/jorinyang/dsh-doctor) | DeepSeek Harness 诊断与修复插件：dsh_doctor（只读诊断）和 dsh_doctor_fix（分级安全/依赖/完整修复），解决启动崩… | [🔗](https://cordis.run/plugins/dsh-external-dsh-doctor) |

## 工作流与自动化

> DeepSeek Harness 多步骤编排、任务调度与智能体工作流插件。 *(38 个插件)*

| DeepSeek Harness 插件 | 简介 | cordis.run |
|---|---|---|
| [@dsh-external/workflow](https://github.com/icetomoyo/dsh_workflow) | 用于DeepSeek Harness的KodaX等效动态工作流框架 | [🔗](https://cordis.run/plugins/dsh-external-workflow) |
| [@omdsh-dev/dsh-annotation](https://github.com/omdsh-dev/dsh-annotation) | DSH Web 选区标注插件：选中助手文本，可选添加标注，按回车将标注块随消息发送——模型按编号逐条回复，回复中带可悬停标签 | [🔗](https://cordis.run/plugins/omdsh-dev-dsh-annotation) |
| [@dsh-external/dsh-automation](https://github.com/titanwings/dsh-automation) | 在全新的Agent会话中按计划运行编码任务，并通过DeepSeek Harness Web或Agent管理自动化 | [🔗](https://cordis.run/plugins/dsh-external-dsh-automation) |
| [@loserfox/distill](https://github.com/LoserFox/distill) | Automatic conversation reflection and skill distillation for the DeepSeek Har… | [🔗](https://cordis.run/plugins/loserfox-distill) |
| [@dsh-scholar/research-plugin](https://github.com/lzszq/dsh-scholar) | DSH Research OS — 为 DSH（DeepSeek Harness）打造的全自动科研插件：覆盖调研、创意、实验契约、持久化运行任务、主张-证… | [🔗](https://cordis.run/plugins/dsh-scholar-research-plugin) |
| [@dsh-external/dsh-super-injector](https://github.com/yjh051108/dsh-super-injector) | 超级模组注入器：运行时注入任意本地 DSH 插件包（junction 链接 + loader.create，不碰 patch/package.json/不… | [🔗](https://cordis.run/plugins/dsh-external-dsh-super-injector) |
| [dsh-emoji](https://github.com/hellodigua/dsh-emoji) | 用于 DSH 智能体回复的小巧语义内联表情 | [🔗](https://cordis.run/plugins/dsh-external-dsh-emoji) |
| [@deepseek-ai/dsh-security-audit](https://github.com/omdsh-dev/dsh-security-audit) | DSH 本地安全审计工具：只读扫描配置、凭证元数据、插件来源、会话结构及网络暴露面；生成脱敏、可复现、可定位的风险报告 | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-security-audit) |
| [@dsh-external/dsh-deep-research](https://github.com/omdsh-dev/dsh-deep-research) | DeepSeek Harness 的 Deep Research 编排器扩展：一种基于官方工作流引擎的自适应控制论/信息论 deep_research 工… | [🔗](https://cordis.run/plugins/dsh-external-dsh-deep-research) |
| [dsh-vision-proxy](https://github.com/Flyvhidbwo/dsh-vision-proxy) | DeepSeek 大脑 + 自动图像转录，为 DeepSeek Harness 设计：一条 deepseek-vision 提供者路由，通过任意兼容 Op… | [🔗](https://cordis.run/plugins/dsh-vision-proxy) |
| [@dsh-external/dsh-sentinel](https://github.com/fuhefei/dsh-sentinel) | DSH 哨兵：条件驱动的 agent 唤醒系统——文件/进程/端口/命令传感器，订阅存为会话事件，重启后自动恢复；每个订阅、每次触发对用户完全可见 | [🔗](https://cordis.run/plugins/dsh-external-dsh-sentinel) |
| [dsh-record-replay](https://github.com/humblebanana/dsh-record-replay) | DeepSeek Harness 插件：包含面向模型的 orr_* 工具，以及用于 Open Record/Replay macOS 工作流录制器的 op… | [🔗](https://cordis.run/plugins/dsh-record-replay) |
| [@dsh-external/dsh-evolve](https://github.com/william-jin-cmu/dsh-evolve) | 自进化插件：agent 在 session 内随对话按需给自己长出/剪掉能力 —— evolve_add 把 cordis 插件源码落盘并热挂载（下一 s… | [🔗](https://cordis.run/plugins/dsh-external-dsh-evolve) |
| [dsh-daily-progress](https://github.com/omdsh-dev/dsh-daily-progress) | DSH 每日进度成就插件：晚上规划明日计划，今日以待办清单逐项勾选，编辑器停靠栏中的完成率温度计组件 | [🔗](https://cordis.run/plugins/dsh-daily-progress) |
| [dsh-revive](https://github.com/omdsh-dev/dsh-revive) | DSH 一键复活：重启后自动向所有被打断的会话发送「继续」指令（/revive 命令 + revive_sessions 工具 + 浏览器一键按钮） | [🔗](https://cordis.run/plugins/dsh-revive) |
| [@deepseek-ai/dsh-tool-regex](https://github.com/omdsh-dev/dsh-tool-regex) | DSH regex 工具：对文本进行测试/查找/替换，提供静态模式解释，零依赖且带 ReDoS 防护 | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-tool-regex) |
| [@dsh-external/dsh-loop](https://github.com/vlln/dsh-loop) | 定时循环插件：/loop 命令 + loop 工具 + 活动状态条（官方 dock 槽） | [🔗](https://cordis.run/plugins/dsh-external-dsh-loop) |
| [dsh-prime-agent](https://github.com/yoke233/dsh-prime-agent) | 受Prime Agent启发的持久RLM控制平面，用于DeepSeek Harness代码模式 | [🔗](https://cordis.run/plugins/dsh-prime-agent) |
| [dsh-llm-fallbacks](https://github.com/btspoony/dsh-llm-fallbacks) | 为 DeepSeek Harness agents 提供自动的 provider/model 回退链，当 LLM 请求持续失败时（重试耗尽、认证、配额、速… | [🔗](https://cordis.run/plugins/dsh-llm-fallbacks) |
| [dsh-meta-orchestrator](https://github.com/jiruidai/dsh-meta-orchestrator) | DeepSeek Harness 的模型原生元代理插件：模型在运行时从五种代理工作流模式（提示链、并行工作器、路由器、监督者、评估循环）中综合生成任务特定… | [🔗](https://cordis.run/plugins/dsh-meta-orchestrator) |
| [dsh-douyin](https://github.com/AnacondaKC/dsh-douyin) | DSH WebUI 侧栏短视频插件：原生播放器、21 个系列选择、直链解析、滚轮历史回放与自动连播 | [🔗](https://cordis.run/plugins/dsh-douyin) |
| [dsh-switch](https://github.com/dongsheng123132/dsh-switch) | DeepSeek Harness 的证据优先模型控制平面 | [🔗](https://cordis.run/plugins/dsh-switch) |
| [dsh-playwright-cli](https://github.com/mitao-su/dsh-playwright-cli) | DeepSeek Harness 主机插件，封装 Playwright CLI：从智能体循环中安装浏览器、运行测试并打开 HTML 报告 | [🔗](https://cordis.run/plugins/dsh-playwright-cli) |
| [@dsh-external/dsh-kb-sieve](https://github.com/omdsh-dev/dsh-kb-sieve) | 知识库筛子：把文档（md/txt/docx/pdf）构建成可审计知识包（references + SQLite FTS5），提供确定性检索（kb_quer… | [🔗](https://cordis.run/plugins/dsh-external-dsh-kb-sieve) |
| [@deepseek-ai/dsh-ex-setting](https://github.com/omdsh-dev/ex-setting) | 适用于DSH的自动Web设置与组合配置包 | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-ex-setting) |
| [dsh-browser](https://github.com/ben7am1n/dsh-browser) | 为DeepSeek Harness提供浏览器自动化：基于Playwright的打开/点击/输入/截图/评估工具，让智能体能够操作真实网页 | [🔗](https://cordis.run/plugins/dsh-browser) |
| [dsh-nocturne-memory](https://github.com/RealAlexandreAI/dsh-nocturne-memory) | DeepSeek Harness 插件：Nocturne Memory 客户端 — 自动化长期记忆（启动/读取/搜索/创建/更新），由你自己的 Noctu… | [🔗](https://cordis.run/plugins/dsh-nocturne-memory) |
| [dsh-plugin-acp](https://github.com/agentic-control-plane/dsh-acp-plugin) | DeepSeek Harness 的智能体控制平面 —— 每次工具调用运行前都会对照你的策略检查，并持久记录允许了什么及原因 | [🔗](https://cordis.run/plugins/dsh-plugin-acp) |
| [deepjit](https://github.com/fly3366/DeepJIT) | DeepJIT：将重复的智能体工作流JIT编译为技能与流程模板，供deepseek-harness（dsh）使用 | [🔗](https://cordis.run/plugins/deepjit) |
| [self-control-guard](https://github.com/pandashere/dsh-self-control-guard) | DeepSeek Harness的自控守卫：拦截来自bash的主机终止尝试，训练受控退出/重启工具，执行经令牌确认的优雅退出/重启，并写入重启恢复清单 | [🔗](https://cordis.run/plugins/self-control-guard) |
| [@qing3a/dsh-event-auditor](https://github.com/qing3a/dsh-event-auditor) | Harness 事件流审计面板：观察事件类型、分发模式、计数与最近事件，帮助插件作者理解 Harness 内部发生了什么 | [🔗](https://cordis.run/plugins/dsh-external-dsh-event-auditor) |
| [dsh-obsidian-export](https://github.com/xiaomiba0904/dsh-obsidian-export) | DeepSeek Harness (DSH) 插件：将对话导出到 Obsidian 仓库，并提供阅读、搜索、列表、标签、反向链接工具及自动仓库发现功能 | [🔗](https://cordis.run/plugins/dsh-obsidian-export) |
| [@shelken/dsh-co-authored-by](https://github.com/shelken/dsh-co-authored-by) | dsh (DeepSeek Harness) 插件：agent 提交代码时自动注入 Co-authored-by 信息 | [🔗](https://cordis.run/plugins/shelken-dsh-co-authored-by) |
| [deepseek-harness-flow](https://github.com/alison-xx/deepseek-harness-flow) | 用于DeepSeek Harness的社区可视化工作流与多模型评估插件 | [🔗](https://cordis.run/plugins/deepseek-harness-flow) |
| [dsh-plugin-verified-search](https://github.com/f0909172434/dsh-plugin-verified-search) | DeepSeek Harness 的已验证实时来源搜索工作流 | [🔗](https://cordis.run/plugins/dsh-plugin-verified-search) |
| [@dsh-polyglot/bundle](https://github.com/Jesse-njx/dsh-polyglot) | dsh-polyglot —— 面向 DSH 的模型切换器：它提供了一个通用的 OpenAI 兼容 ctx.llm 适配器，内置经过精心挑选的免费/廉价 … | [🔗](https://cordis.run/plugins/dsh-polyglot-bundle) |
| [@towzai/dsh-memory](https://github.com/Towzai/dsh-memory) | DeepSeek Harness (dsh) 的跨会话记忆插件：基于 YAML 的记住/回忆/忘记/置顶工具、嵌入搜索，以及带 WebUI 上下文注入可见… | [🔗](https://cordis.run/plugins/towzai-dsh-memory) |
| [dsh-routing-suite-opencode-go](https://github.com/sixtysevenlf/dsh-routing-suite-opencode-go) | 面向 OpenCode Go API 的路由套件（opencode-go provider + DSH rc.6 兼容）：运行时注入器 × 思维模式路由预… | [🔗](https://cordis.run/plugins/dsh-routing-suite-opencode-go) |

## 主题与界面

> DeepSeek Harness 终端主题、界面增强与显示类插件。 *(92 个插件)*

| DeepSeek Harness 插件 | 简介 | cordis.run |
|---|---|---|
| [dsh-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) | DSH 网页插件：提供类似 VSCode 的右侧边栏（资源管理器 / 编辑器 / 终端 / Git / 浏览器），按对话会话隔离 | [🔗](https://cordis.run/plugins/dsh-better-sidebar) |
| [@dsh-external/dsh-ads](https://github.com/Nagi-ovo/dsh-ads) | DSH广告侵扰插件：本地化中文门户广告与英文诈骗广告戏仿，含虚假弹窗、大奖转盘、奖励式推理广告及假游戏动画 | [🔗](https://cordis.run/plugins/dsh-external-dsh-ads) |
| [@dsh-external/dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) | DeepSeek Harness 原生集成 agent-vision-toolkit：图像问答、OCR、视觉定位、UI 还原、像素差异、Artifacts… | [🔗](https://cordis.run/plugins/dsh-external-dsh-vision-toolkit) |
| [@oh-dsh/desktop](https://github.com/hust-open-atom-club/oh-dsh) | Oh-DSH：基于 DeepSeek Harness 的可安装桌面、Web 和 TUI 界面 | [🔗](https://cordis.run/plugins/oh-dsh-desktop) |
| [@huiliyi37/dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) | dsh-tianshu-tui：基于 dsh-base 配置的交互式 TUI 层，可作为插件安装（`dsh plugin --profile tui ad… | [🔗](https://cordis.run/plugins/huiliyi37-dsh-tianshu-tui) |
| [@dsh-external/dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize) | DSH 内联可视化插件：可视化工具 + 内置技能，让模型把对话中的交互式 HTML 片段渲染为沙箱卡片（Codex /visualize 语义） | [🔗](https://cordis.run/plugins/dsh-external-dsh-visualize) |
| [@omdsh-dev/dsh-genui](https://github.com/omdsh-dev/dsh-genui) | DeepSeek Harness 的 GenUI：通过 ```dsh-ui 围栏在助手回复中内联渲染交互式 UI 组件——布局、图表、绘图、表单、测验、m… | [🔗](https://cordis.run/plugins/omdsh-dev-dsh-genui) |
| [@zseven-w/dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil) | DSH 的 OpenPencil 插件，提供精确的多帧预览、交互式画布和受管理的编辑器工作台 | [🔗](https://cordis.run/plugins/zseven-w-dsh-openpencil) |
| [dsh-ui-status-label](https://github.com/alingalingling/ui-status-label) | 用于 dsh Web 的可配置进行中轮次状态文本：常规设置行，以及用于聊天视图的 conversationStatus provider | [🔗](https://cordis.run/plugins/dsh-ui-status-label) |
| [dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) | 将 Claude Code / Codex / ChatGPT / Cursor / Gemini / Reasonix / Pi Coding Agen… | [🔗](https://cordis.run/plugins/dsh-chat-import) |
| [dsh-custom-tool](https://github.com/omdsh-dev/dsh-custom-tool) | DSH 自定义工具：在设置界面中使用 Monaco 编辑器管理用户自定义的 JavaScript 工具；模型通过 custom_tool_create 创… | [🔗](https://cordis.run/plugins/dsh-custom-tool) |
| [@yejiming/dsh-data-agent](https://github.com/omdsh-dev/dsh-data-agent) | dsh Web GUI 的 Data Agent：会话级数据库连接（MySQL/PostgreSQL/SQLite）、sqlcmd 工具、data-age… | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-data-agent) |
| [@dsh-external/dsh-side-panel](https://github.com/ccq1/dsh-side-panel) | 适用于 DSH Web 的 Git 审查、终端和文件工作区面板 | [🔗](https://cordis.run/plugins/dsh-external-dsh-side-panel) |
| [@dingyi222666/dsh-focus-chat](https://github.com/dingyi222666/dsh-focus-chat) | 面向 dsh Web GUI 的 Claude Code 风格聚焦视图：对话的浓缩阅读界面——工具调用折叠为可展开的指标摘要、聊天 1:1 行级界面，以及… | [🔗](https://cordis.run/plugins/dingyi222666-dsh-focus-chat) |
| [@dsh-external/dsh-minigames](https://github.com/lhh010/dsh-minigames) | DSH Web UI 右侧小游戏面板：18 款离线小游戏，可扩展游戏注册表 | [🔗](https://cordis.run/plugins/dsh-external-dsh-minigames) |
| [@openguardrails/dsh-tui](https://github.com/openguardrails/dsh-tui) | 面向DeepSeek Harness智能体的交互式pi-tui终端入口 | [🔗](https://cordis.run/plugins/openguardrails-dsh-tui) |
| [@deepseek-ai/dsh-gomoku](https://github.com/omdsh-dev/dsh-gomoku) | 为 dsh Web 界面开发的五子棋（五连珠）应用：提供 AI 走棋路线、模型目录及默认提示词（节点端），同时包含带棋盘的会话视图标签页（浏览器端） | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-gomoku) |
| [dsh-explain](https://github.com/yuezengwu/dsh-explain) | DSH学习模式插件，具备全局本地优先学习线程 | [🔗](https://cordis.run/plugins/dsh-explain) |
| [@huanlin/dsh-plugin-mineru](https://github.com/HuanLinOTO/dsh-plugin-mineru) | DSH 插件，将 MinerU 文档解析工具开放给模型，并提供用于配置 API 基础 URL 的 Web UI 设置页面 | [🔗](https://cordis.run/plugins/huanlin-dsh-plugin-mineru) |
| [@bill9109/dsh-web-ui-notify](https://github.com/bill9109/dsh-web-ui-notify) | 适用于 DeepSeek Harness 审批、提问和回合完成的桌面通知——这样你在浏览其他标签页时，DSH 和你都不会干等着 | [🔗](https://cordis.run/plugins/bill9109-dsh-web-ui-notify) |
| [@dsh-external/dsh-task-status](https://github.com/vlln/dsh-task-status) | 后台任务状态条——对话输入区上方的任务进度 UI（官方 dock 槽 + Node 轮询路由） | [🔗](https://cordis.run/plugins/dsh-external-dsh-task-status) |
| [@dsh-external/dsh-diff-viewer](https://github.com/lehhair/dsh-diff-viewer) | DSH diff-viewer 插件：PiUI 风格的视觉 diff 界面（分屏/统一、变更栏、行号、词级标记、折叠上下文、窗口化渲染），替代 write… | [🔗](https://cordis.run/plugins/dsh-external-dsh-diff-viewer) |
| [@dsh-external/dsh-mobile](https://github.com/lehhair/dsh-mobile) | @dsh-external/dsh-mobile 是一款 DSH 移动端 Web UI 插件（PiUI 聊天分页模式）：窄屏下，默认三栏框架变为水平滚动吸… | [🔗](https://cordis.run/plugins/dsh-external-dsh-mobile) |
| [dsh-context-doctor](https://github.com/Zhenyu98/dsh-context-doctor) | DSH 上下文注入审计插件：统计 AGENTS.md 指令链、技能目录、工具 schema 及 MCP 工具的 token 开销，识别重复与冲突；内置 C… | [🔗](https://cordis.run/plugins/dsh-context-doctor) |
| [@huanlin/dsh-plugin-better-sidebar-plugin-office](https://github.com/HuanLinOTO/dsh-plugin-better-sidebar-plugin-office) | DSH web 插件：为 better-sidebar 编辑器提供 Office 文件预览器（.docx/.xlsx/.pptx） | [🔗](https://cordis.run/plugins/huanlin-dsh-plugin-better-sidebar-plugin-office) |
| [dsh-advisor](https://github.com/btspoony/dsh-advisor) | dsh 插件包，移植 omp advisor 子系统：采用每会话审查模型，观察主转录并注入按严重程度排序的建议（nit/concern/blocker） | [🔗](https://cordis.run/plugins/dsh-advisor) |
| [deepseek-harness-tui](https://github.com/gxinxing/deepseek-harness-tui) | 用于 DeepSeek Harness (dsh) 的交互式终端聊天 TUI | [🔗](https://cordis.run/plugins/deepseek-harness-tui) |
| [@loserfox/telegram](https://github.com/LoserFox/telegram) | Telegram Bot API 桥接插件：将 Telegram 聊天中继至 harness agent 会话（长轮询、按聊天隔离会话、HTML 格式化） | [🔗](https://cordis.run/plugins/loserfox-telegram) |
| [dsh-plugin-ds-api-usage](https://github.com/Sev7een/ds-api-usage) | DeepSeek Harness 插件：实时展示 DeepSeek API 余额和用量时间线（成本/tokens/请求次数），呈现在设置页面中 | [🔗](https://cordis.run/plugins/dsh-plugin-ds-api-usage) |
| [@openmaic/dsh-openmaic](https://github.com/THU-MAIC/dsh-openmaic) | OpenMAIC for DeepSeek Harness：创建课堂，渲染幻灯片、交互组件和教学卡片，外加苏格拉底式教学技能 | [🔗](https://cordis.run/plugins/openmaic-dsh-openmaic) |
| [@deepseek-ai/dsh-tui](https://github.com/turtle1999/turtle-ui) | DeepSeek Harness代理的交互式pi-tui终端入口 | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-tui) |
| [dsh-codex](https://github.com/Yan-Zero/dsh-codex) | ChatGPT OAuth、Codex 模型、独立搜索及图像输入，适用于 DeepSeek Harness | [🔗](https://cordis.run/plugins/dsh-external-dsh-openai-codex) |
| [dsh-huadong-bianzuqi](https://github.com/zjl88858/dsh-huadongbianzuqi) | DeepSeek Harness 前端插件：滑动变阻器 | [🔗](https://cordis.run/plugins/dsh-huadong-bianzuqi) |
| [@huanlin/dsh-plugin-yet-another-subagent](https://github.com/HuanLinOTO/dsh-plugin-yet-another-subagent) | 可配置的子代理预设，支持 Web UI 设置、实时工具调用/令牌显示与点击跳转子会话 | [🔗](https://cordis.run/plugins/huanlin-dsh-plugin-yet-another-subagent) |
| [dsh-balance](https://github.com/TwotwoPiggy/dsh-balance) | DeepSeek 余额实时显示插件: 在 dsh Web UI 输入框下方的统计条(命中率/输入输出 token 行)实时显示账户余额与本次对话的估算消耗 | [🔗](https://cordis.run/plugins/dsh-balance) |
| [dsh-plugin-installer](https://github.com/Toukaiteio/dsh-plugin-installer) | DSH 插件商店 + 安装排障技能一体包：通过 Web GUI「插件商店」页签浏览插件目录（名称/介绍/原链接），一键触发安装；内置 dsh-plugin… | [🔗](https://cordis.run/plugins/dsh-plugin-installer) |
| [@dsh-external/dsh-sidechain](https://github.com/Buyi-wsgzg/dsh-sidechain) | DSH 侧边对话插件：/side 与 /btw 在当前会话的临时分支中开启侧边对话（遵循 Codex /side 与 /btw 语义） | [🔗](https://cordis.run/plugins/dsh-external-dsh-sidechain) |
| [@your-scope/dsh-plugin-template](https://github.com/omdsh-dev/plugin-template) | DeepSeek Harness 的独立 Cordis 插件模板 | [🔗](https://cordis.run/plugins/your-scope-dsh-plugin-template) |
| [dsh-web-archive](https://github.com/renat3u/dsh-web-archive) | DSH Web 客户端插件：将会话中非正文的工具卡片（read/think/bash/...）收拢折叠为输入框上方一个可展开的 "Deep Sleepin… | [🔗](https://cordis.run/plugins/dsh-web-archive) |
| [task-passport](https://github.com/dongsheng123132/task-passport) | 开放任务交接协议及本地存储，用于跨AI工具链的持久状态管理 | [🔗](https://cordis.run/plugins/task-passport) |
| [dsh-plugin-deepeye](https://github.com/Favio8/dsh-plugin-deepeye) | DeepSeek Harness 原生插件：为纯文本 LLM 提供视觉能力（描述、OCR、VQA、布局分析、剪贴板） | [🔗](https://cordis.run/plugins/dsh-plugin-deepeye) |
| [dsh-web-search-pro](https://github.com/anweat/dsh-web-search-pro) | DeepSeek Harness 的增强型持久化网页搜索插件——多引擎路由（DeepSeek/Exa/DDG/Bing/Jina + GitHub/B站/… | [🔗](https://cordis.run/plugins/dsh-web-search-pro) |
| [@omdsh-dev/dsh-drag-and-drop](https://github.com/bill9109/dsh-drag-and-drop) | 将本地文件拖入 DSH Web UI，即可插入其原始文件系统路径，无需上传或复制 | [🔗](https://cordis.run/plugins/bill9109-dsh-drag-and-drop) |
| [@deepseek-ai/dsh-deepresearch](https://github.com/havingautism/dsh-deepresearch) | 独立、证据优先的研究工作流，具备持久状态和自带网页视图 | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-deepresearch) |
| [dsh-recall](https://github.com/Mongfayi/dsh-recall) | DSH Web UI 的消息撤回：从对话中移除一条消息及其后的所有内容，永久生效，绝不回退代码更改 | [🔗](https://cordis.run/plugins/dsh-recall) |
| [@dsh-external/dsh-inspect](https://github.com/omdsh-dev/dsh-inspect) | 发现问题 → 修复交付 → 质量复查 的简单闭环插件：checkup（对抗式检查+红队验证）/ fix（根因→修复→验证）/ review（对抗式复查）三… | [🔗](https://cordis.run/plugins/dsh-external-dsh-inspect) |
| [@dsh-external/dsh-plannotator](https://github.com/titanwings/dsh-plannotator) | DeepSeek Harness 的非官方 Plannotator 集成：可内联注释计划，并向等待中的编码代理返回结构化反馈 | [🔗](https://cordis.run/plugins/dsh-external-dsh-plannotator) |
| [@deepseek-ai/dsh-notebooks](https://github.com/havingautism/dsh-notebooks) | 独立的跨会话笔记本，支持模型工具、类型化远程 API 及 Web 视图 | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-notebooks) |
| [@deepseek-ai/dsh-ultra-ui](https://github.com/havingautism/dsh-ultra-ui) | 受Codemini启发的紧凑展示，适用于每次DSH Web Tool调用 | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-ultra-ui) |
| [@dsh-external/dsh-archive-viewer](https://github.com/keepermttl/dsh-archive-viewer) | 查看已归档会话的 DSH Web 客户端插件：关键词搜索（含对话内容）、排序、列表/网格排列、双语界面与可配置设置；支持阅读对话日志与下载 ZIP 导出 | [🔗](https://cordis.run/plugins/dsh-external-dsh-archive-viewer) |
| [dsh-client-ui-frosted-glass](https://github.com/makuralymi/dsh-webUI-Glass-Theme) | dsh 网页界面的全局毛玻璃（背景模糊）主题插件 | [🔗](https://cordis.run/plugins/dsh-client-ui-frosted-glass) |
| [@mattheliu/7d7d](https://github.com/omdsh-dev/7d7d) | 7d7d —— 7k7k 风格的 DSH 游戏门户：在 Web UI 中生成、同步并游玩 HTML5 与自托管 Ruffle Flash 小游戏 | [🔗](https://cordis.run/plugins/mattheliu-7d7d) |
| [@deepseek-ai/dsh-auto-chess](https://github.com/omdsh-dev/dsh-auto-chess) | 面向dsh Web GUI的极简自动棋：AI操作路由、模型目录和默认提示词（节点端），以及带棋盘的对话视图标签页（浏览器端） | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-auto-chess) |
| [@deepseek-ai/dsh-fun-weather](https://github.com/omdsh-dev/dsh-fun-weather) | 由Open-Meteo驱动的DSH天气标签页与随天气变化的主题 | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-fun-weather) |
| [@xilin3/dsh-prompt-persona](https://github.com/Xilin3/dsh-prompt-persona) | DSH 插件：在设置页可视化编辑系统提示词（deployment persona），支持实时预览与保存 | [🔗](https://cordis.run/plugins/xilin3-dsh-prompt-persona) |
| [@humanize/dsh-humanize](https://github.com/zevorn/dsh-humanize) | DeepSeek Harness 的 Humanize RLCR 工具包：DSH 技能、Codex 审查和 Humanize 轨迹视图 | [🔗](https://cordis.run/plugins/humanize-dsh-humanize) |
| [@huanlin/dsh-plugin-spur](https://github.com/HuanLinOTO/dsh-plugin-spur) | 一条辫子挂在聊天流中——抓住辫梢甩一下，给 agent 发送“去干活 | [🔗](https://cordis.run/plugins/huanlin-dsh-plugin-spur) |
| [dsh-session-hub](https://github.com/Asaiuta/dsh-session-hub) | 在单个面板中聚合并原生控制多个远程 dsh Web 服务器上的 DeepSeek Harness 会话：服务器注册、合并会话列表、历史记录、提示、取消、重… | [🔗](https://cordis.run/plugins/dsh-session-hub) |
| [dsh-tiered-approval](https://github.com/Elaina-real/dsh-tiered-approval) | DeepSeek Harness（DSH）的分层自动审查：静态规则安全网 + LLM 审查器 + 人工兜底 | [🔗](https://cordis.run/plugins/dsh-tiered-approval) |
| [dsh-tool-underseal](https://github.com/Hyperionjust/dsh-tool-underseal) | 面向模型的类型化工具，封装了经审查并冻结的 DeepSeek Harness 底盘适配器 | [🔗](https://cordis.run/plugins/dsh-tool-underseal) |
| [dsh-review-skills](https://github.com/ben7am1n/dsh-review-skills) | 面向DeepSeek Harness的工程规范技能包——包含代码审查、简化、先规划后执行、测试优先和冲突解决，以捆绑技能提供者插件形式交付 | [🔗](https://cordis.run/plugins/dsh-review-skills) |
| [dsh-kanban](https://github.com/Ericwong5021/dsh-kanban) | DeepSeek Harness Web UI 的任务看板插件 | [🔗](https://cordis.run/plugins/dsh-kanban) |
| [dsh-sticky-disclosure](https://github.com/Han-1413141/dsh-sticky-disclosure) | DSH Web客户端插件：一键折叠对话中所有展开的可折叠区域（Think / 工具卡片 / 命令卡片...），并支持自定义快捷键 | [🔗](https://cordis.run/plugins/dsh-sticky-disclosure) |
| [dsh-goal-mode](https://github.com/KarlOfLaw/dsh-goal-mode-enhance) | 为 DeepSeek Harness 的网页界面提供一个经过增强的目标管理面板：在输入框上方提供了一个停靠栏，该停靠栏覆盖了目标的完整生命周期（用户可执行… | [🔗](https://cordis.run/plugins/dsh-goal-mode) |
| [@dsh-external/dsh-split-panes](https://github.com/lehhair/dsh-split-panes) | DSH 分栏对话插件：PiUI 风格的多窗格对话界面 —— 支持分栏/堆叠窗格、每窗格会话、侧边栏会话拖放、单行融合页头 | [🔗](https://cordis.run/plugins/dsh-external-dsh-split-panes) |
| [dsh-prompt-studio](https://github.com/Moeblack/dsh-prompt-studio) | 用于 DeepSeek Harness 的 Prompt Studio 插件：在一个实时编辑器中组合运行时提示词、覆盖项和请求级合成对话 | [🔗](https://cordis.run/plugins/dsh-prompt-studio) |
| [dsh-local-filetree](https://github.com/Mongfayi/dsh-local-filetree) | DSH Web UI 的文件树面板：右侧详情栏显示当前会话工作区树（懒加载、只读） | [🔗](https://cordis.run/plugins/dsh-local-filetree) |
| [dsh-tui](https://github.com/orriduck/dsh-tui) | 用于 DeepSeek Harness 的小巧、支持会话的终端 UI | [🔗](https://cordis.run/plugins/dsh-tui) |
| [@deepseek-ai/dsh-client-ui-skin-miku](https://github.com/stushansusu/dsh-miku-skin) | 初音未来（Hatsune Miku）主题皮肤：蓝紫洋红渐变标题栏与按钮、半透明毛玻璃面板与输入框、可自定义背景图，用于 DeepSeek Harness … | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-client-ui-skin-miku) |
| [@dsh-plugin/dsh-review-loop](https://github.com/wuxiangru915/dsh-review-loop) | 一个 DeepSeek Harness Cordis 插件。 | [🔗](https://cordis.run/plugins/dsh-plugin-dsh-review-loop) |
| [dsh-atuin](https://github.com/RealAlexandreAI/dsh-atuin) | DeepSeek Harness 插件：你在 Web UI 中输入的每条提示词都会追加到你的 atuin shell 历史中，因此会出现在 atuin 搜… | [🔗](https://cordis.run/plugins/dsh-atuin) |
| [dsh-cloudflare-browser-run](https://github.com/RealAlexandreAI/dsh-cloudflare-browser-run) | DeepSeek Harness插件：由Cloudflare Browser Run驱动的网页浏览工具（markdown / 截图 / PDF）——真正的… | [🔗](https://cordis.run/plugins/dsh-cloudflare-browser-run) |
| [dsh-plugin-code-review](https://github.com/YYTbit/dsh-plugin-code-review) | 面向 DeepSeek Harness 的结构化代码审查技能——覆盖缺陷、安全、性能、风格 | [🔗](https://cordis.run/plugins/dsh-plugin-code-review) |
| [@xiaoyao-ai/dsh-client-ui-skin-black-whale](https://github.com/147228/dsh-black-whale) | 夕小瑶 × DeepSeek Harness 黑鲸实验室主题皮肤 | [🔗](https://cordis.run/plugins/xiaoyao-ai-dsh-client-ui-skin-black-whale) |
| [dsh-openclaw-acp](https://github.com/BeAChanger/dsh-openclaw-acp) | DeepSeek Harness 捆绑包，将配置文件作为兼容 OpenClaw 的 ACP 代理公开 | [🔗](https://cordis.run/plugins/dsh-openclaw-acp) |
| [dsh-telegram](https://github.com/ben7am1n/dsh-telegram) | DeepSeek Harness 的 Telegram 运行时适配器——通过 Telegram 与你的 dsh 智能体对话 | [🔗](https://cordis.run/plugins/dsh-telegram) |
| [dsh-openai-codex-oauth](https://github.com/dyuan311/dsh-openai-codex-oauth) | 用于DeepSeek Harness openai-codex模型的ChatGPT Plus/Pro OAuth登录 | [🔗](https://cordis.run/plugins/dsh-openai-codex-oauth) |
| [dsh-desktop-window](https://github.com/fengzhiyushui/dsh-desktop-window) | DSH 桌面窗口插件：以独立应用窗口打开 DeepSeek Harness Web UI（自动开窗 + 会话头部手动开关 + 设置页自动开窗开关） | [🔗](https://cordis.run/plugins/dsh-desktop-window) |
| [@dsh-cowork/chatnode-wechat](https://github.com/Jesse-njx/dsh-chatnode-wechat) | 通过微信与DSH智能体聊天、监控和审批——用于DeepSeek Harness的iLink网关+对话节点捆绑包 | [🔗](https://cordis.run/plugins/dsh-cowork-chatnode-wechat) |
| [@dsh-routines/bundle](https://github.com/Jesse-njx/dsh-routines) | dsh-routines——为DSH而设计的定时任务代理：您可以按照cron计划来运行一个提示词，并能够直接在您当前已经所在的工作平台获取到所需的摘要结果… | [🔗](https://cordis.run/plugins/dsh-routines-bundle) |
| [dsh-reloader](https://github.com/lin-cheng-lab/dsh-reloader) | DSH 一键重启：安装/更新插件后调用 dsh_reload 工具自动重启 Web 界面，无需手动 Ctrl+C | [🔗](https://cordis.run/plugins/dsh-reloader) |
| [dsh-plugin-switch](https://github.com/Nexus-Aethra/DSH-plugin-switch) | DSH 插件市场：浏览 GitHub dsh-plugin 主题，查看清单，安装社区插件 | [🔗](https://cordis.run/plugins/dsh-plugin-switch) |
| [dsh-kimi-bridge](https://github.com/pandashere/dsh-kimi-bridge) | DeepSeek Harness 的 Kimi 桥接：提供 call_kimi / kimi_status / kimi_abort / kimi_ste… | [🔗](https://cordis.run/plugins/dsh-kimi-bridge) |
| [falsify-dsh](https://github.com/shi275773124/falsify-dsh) | DeepSeek Harness 对公共 Falsify CLI 的适配器 | [🔗](https://cordis.run/plugins/falsify-dsh) |
| [dsh-translator](https://github.com/SiYue-ZO/dsh-translator) | DeepSeek Harness 的原生流式翻译工作区 | [🔗](https://cordis.run/plugins/dsh-translator) |
| [@wellorbetter/dsh-product-delivery-workflow](https://github.com/wellorbetter/dsh-product-delivery-workflow) | DeepSeek Harness 的产品交付工作流插件：完整的从产品到发布流水线（研究 -> PRD -> OpenSpec 架构 -> 并行多智能体实现… | [🔗](https://cordis.run/plugins/wellorbetter-dsh-product-delivery-workflow) |
| [dshplug](https://github.com/wuyuanjiang1/dsh2wechat) | DeepSeek Harness 消息桥插件：微信 ClawBot（iLink） | [🔗](https://cordis.run/plugins/dshplug) |
| [sidesight](https://github.com/ZhuXinAI/sidesight) | 纯文本编码智能体的视觉伴生工具 | [🔗](https://cordis.run/plugins/sidesight) |
| [dsh-sound-alerts](https://github.com/sixtysevenlf/dsh-sound-alerts) | DSH Web UI 声音提示插件：需要授权/提问与任务完成时播放提示音（Web Audio、无内置资源） | [🔗](https://cordis.run/plugins/dsh-sound-alerts) |
| [@chi-hong22/dsh-mdbox](https://github.com/Chi-hong22/dsh-mdbox) | DeepSeek Harness Web composer 的 Markdown 编辑辅助工具：支持通过 Shift+Enter 键继续输入列表项，有序列… | [🔗](https://cordis.run/plugins/dsh-external-dsh-mdbox) |
| [delivery-review-plugin](https://github.com/xiaoxiao-svg/delivery-review-dsh-plugin) | 双 Agent 交付协作工作流（loop 模式）的 DeepSeek Harness 移植版：/delivery-review 命令 + 审查材料自动生成… | [🔗](https://cordis.run/plugins/delivery-review-plugin) |
| [dsh-balance-window](https://github.com/sixtysevenlf/dsh-balance-window) | dsh 左下角余额悬浮窗：实时显示 DeepSeek 官方 API 余额与预计剩余 token，可拖动、自动刷新 | [🔗](https://cordis.run/plugins/dsh-balance-window) |

## 数据集成

> 把 DeepSeek Harness 连接到外部数据源、API 与服务。 *(8 个插件)*

| DeepSeek Harness 插件 | 简介 | cordis.run |
|---|---|---|
| [@nanmicoder/dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) | 用于 DeepSeek Harness 的 AgentTeams：由自然语言驱动的多智能体团队协作（队长、成员、带依赖关系的任务、消息传递），并在 Web… | [🔗](https://cordis.run/plugins/dsh-agent-teams) |
| [dsh-balance-monitor](https://github.com/jelly-000/dsh-balance-monitor) | DeepSeek账户余额、剩余比例条和今日花费，显示在dsh侧边栏底部 | [🔗](https://cordis.run/plugins/dsh-balance-monitor) |
| [dsh-telegram-relay](https://github.com/congchuanling-dot/DSH-Telegram-Relay) | 一个用于Telegram中继集成的DeepSeek Harness插件包 | [🔗](https://cordis.run/plugins/dsh-telegram-relay) |
| [dsh-win-notify](https://github.com/MuziIsabel/dsh-win-notify) | DSH 插件：当智能体任务完成时，发送带声音的 Windows 通知 | [🔗](https://cordis.run/plugins/dsh-win-notify) |
| [dsh-task-progress-notifier](https://github.com/sjscy05/dsh-task-progress-notifier) | DeepSeek Harness 插件：跟踪 todo_write 进度，并在桌面右下角弹出原生提醒 | [🔗](https://cordis.run/plugins/dsh-task-progress-notifier) |
| [dsh-deepseek-usage](https://github.com/ben7am1n/dsh-deepseek-usage) | DeepSeek Harness 的用量监控器：提供账户余额查询与 token 用量汇总，作为模型可调用工具 | [🔗](https://cordis.run/plugins/dsh-deepseek-usage) |
| [dsh-tool-monitor](https://github.com/yoke233/dsh-tool-monitor) | 面向现有 DeepSeek Harness 后台任务的事件驱动监控 | [🔗](https://cordis.run/plugins/dsh-tool-monitor) |
| [dsh-push](https://github.com/kiim-wong/dsh-push) | 将 DeepSeek Harness 代理生命周期通知推送到可配置的渠道 | [🔗](https://cordis.run/plugins/dsh-push) |

## 效率工具

> 让日常 DeepSeek Harness 使用更快更顺手的实用插件。 *(121 个插件)*

| DeepSeek Harness 插件 | 简介 | cordis.run |
|---|---|---|
| [@liustack/modlens](https://github.com/liustack/modlens) | 为纯文本LLM提供即插即用的视觉能力，由免费的Antigravity CLI驱动 | [🔗](https://cordis.run/plugins/liustack-modlens) |
| [whale-girl](https://github.com/vlln/whale-girl) | DSH Web GUI 内的桌面宠物（QQ 宠物形态） | [🔗](https://cordis.run/plugins/whale-girl) |
| [dsh-open-in-vscode](https://github.com/omdsh-dev/dsh-open-in-vscode) | 从 Web 界面在 VS Code 中打开工作区目录：每个工作区的溢出菜单里都会添加一个"在 VS Code 中打开"选项 | [🔗](https://cordis.run/plugins/dsh-open-in-vscode) |
| [@dsh-external/turn-rewind](https://github.com/Anionex/dsh-turn-rewind) | 为 DeepSeek Harness 提供逐轮对话与工作区回退，由持久化变更账本驱动 | [🔗](https://cordis.run/plugins/dsh-external-turn-rewind) |
| [@multica-ai/dsh-runtime](https://github.com/forrestchang/dsh-multica-runtime) | 为Multica提供的私有DeepSeek Harness运行时桥接 | [🔗](https://cordis.run/plugins/multica-ai-dsh-runtime) |
| [dsh-interconnect](https://github.com/Chinesezjc/dsh-interconnect) | DeepSeek Harness (DSH) 跨实例消息/事件交接插件：互联服务 + 模型侧工具 | [🔗](https://cordis.run/plugins/dsh-interconnect) |
| [dsh-message-edit](https://github.com/Moeblack/dsh-message-edit) | 为 DeepSeek Harness 对话提供分支编辑、重新生成、重试及版本导航功能 | [🔗](https://cordis.run/plugins/dsh-message-edit) |
| [@anionex/dsh-computer-use](https://github.com/Anionex/dsh-computer-use) | 为 DeepSeek Harness 打造的以无障碍为先的 macOS 计算机使用能力，包含过期观察保护、应用租约、确认机制、截图和 Web 诊断功能 | [🔗](https://cordis.run/plugins/dsh-external-dsh-computer-use) |
| [@dsh-external/dsh-share](https://github.com/hellodigua/dsh-share) | 将DSH对话轮次分享为PNG图片 | [🔗](https://cordis.run/plugins/dsh-external-dsh-share) |
| [dsh-balance-meter](https://github.com/Ghost011118/dsh-balance-meter) | dsh 网页界面的 DeepSeek 账户余额与用量读取器：调用官方 Get User Balance 接口，在页面上显示当前剩余余额和消费情况 | [🔗](https://cordis.run/plugins/dsh-balance-meter) |
| [dsh-plugin-template](https://github.com/bugmaker2/dsh-plugin-template) | 用于 DeepSeek Harness 的极简 Hello World 插件模板 | [🔗](https://cordis.run/plugins/dsh-plugin-template) |
| [dsh-milestone](https://github.com/SnowCrescenter-tech/dsh-milestone) | DeepSeek Harness 的 Git 风格里程碑时间线：悬停查看元数据，点击跳转到任意消息 | [🔗](https://cordis.run/plugins/dsh-milestone) |
| [dsh-stock-market](https://github.com/AnacondaKC/dsh-stock-market) | DSH沪深A股市场插件 | [🔗](https://cordis.run/plugins/dsh-stock-market) |
| [dsh-github](https://github.com/PivotStackIntelligence/dsh-github) | 为 DeepSeek Harness 提供的抽象 GitHub 能力接缝（ctx.github）—— 提供方注册表、执行时解析、规范化读写词汇、接缝强制差… | [🔗](https://cordis.run/plugins/dsh-github) |
| [dsh-provider-model-configurator](https://github.com/LiangYin233/dsh-model-config-sync) | DeepSeek Harness 的提供商模型配置器：跨所有已配置的提供商查看、创建、编辑、复制和删除模型条目（上下文窗口、最大输出、模态、推理力度），并… | [🔗](https://cordis.run/plugins/dsh-model-config-sync) |
| [deepseek-manners](https://github.com/Moeblack/deepseek-manners) | 在每次发消息之后给可爱的鲸鱼娘说谢谢（默认「谢谢你，鲸鱼大人」），仅当轮生效 | [🔗](https://cordis.run/plugins/deepseek-manners) |
| [@dsh-external/dsh-stickers](https://github.com/william-jin-cmu/dsh-stickers) | 人类离不开表情包：让 DSH 和用户在 WebUI 里发表情 | [🔗](https://cordis.run/plugins/dsh-external-dsh-stickers) |
| [dsh-acp-for-bitfun](https://github.com/bobleer/dsh-acp-for-bitfun) | BitFun 与 DSH ACP 交互对接插件：通过 Agent Client Protocol 将 BitFun agent（https://githu… | [🔗](https://cordis.run/plugins/dsh-acp-for-bitfun) |
| [deepseek-pet](https://github.com/keleus/deepseek-pet) | 在DeepSeek Harness Web UI中运行Codex Code Pet包 | [🔗](https://cordis.run/plugins/deepseek-pet) |
| [@ramify/dsh-ramify](https://github.com/yanglongyun/dsh-ramify) | 用于DeepSeek Harness的创意分支画布插件 | [🔗](https://cordis.run/plugins/ramify-dsh-ramify) |
| [dsh-lark-bridge](https://github.com/imetn/dsh-lark-bridge) | DeepSeek Harness插件：当DSH会话因用户交互（权限请求、提问、致命错误）而暂停时，实时发送飞书/Lark通知 | [🔗](https://cordis.run/plugins/dsh-lark-bridge) |
| [dsh-mcp-manager](https://github.com/hyqhyq3/dsh-mcp-manager) | DeepSeek Harness 的 MCP 服务器管理器：设置 → MCP 页面，支持 HTTP（OAuth PKCE + 动态客户端注册，或静态令牌）… | [🔗](https://cordis.run/plugins/dsh-mcp-manager) |
| [dsh-plugin-claude-bridge](https://github.com/YYTbit/dsh-plugin-claude-bridge) | 将 Claude Code 的记忆、技能和配置桥接到 DeepSeek Harness — 零迁移，完全兼容 | [🔗](https://cordis.run/plugins/dsh-plugin-claude-bridge) |
| [@0xsline/dsh-spotlight](https://github.com/0xsline/dsh-spotlight) | 面向 DeepSeek Harness Web 的键盘优先命令面板 | [🔗](https://cordis.run/plugins/dsh-external-dsh-spotlight) |
| [@fakechris/dsh-track](https://github.com/fakechris/dsh-track) | Track Bridge：DeepSeek Harness 嵌入式任务管理引擎 — 决策点协议、捕获墙和类 Linear 问题存储，基于会话事件与存储 KV | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-track) |
| [nowledge-mem-deepseek-harness](https://github.com/nowledge-co/nowledge-mem-deepseek-harness) | 用于 Nowledge Mem 的社区 DeepSeek Harness 捆绑包：Context Bundle、提示时召回、Mem MCP 工具和 DSH… | [🔗](https://cordis.run/plugins/nowledge-mem-deepseek-harness) |
| [@huanlin/dsh-plugin-d399](https://github.com/HuanLinOTO/dsh-plugin-d399) | 贪玩蓝鲸 — 模型生成时右下角弹出小游戏菜单（wordle / 消消乐，可拓展游戏注册表） | [🔗](https://cordis.run/plugins/huanlin-dsh-plugin-d399) |
| [@huanlin/dsh-plugin-interpreters](https://github.com/HuanLinOTO/dsh-plugin-interpreters) | 提供 run_python 和 run_node 工具，支持配置解释器路径；设置卡片（通过 /interpreters/api HTTP 路由）让用户设定… | [🔗](https://cordis.run/plugins/huanlin-dsh-plugin-interpreters) |
| [@huanlin/dsh-plugin-ya-workspace-sidebar](https://github.com/HuanLinOTO/dsh-plugin-ya-workspace-sidebar) | 两级 DSH 工作区侧边栏，含全局最近会话与面包屑导航 | [🔗](https://cordis.run/plugins/huanlin-dsh-plugin-ya-workspace-sidebar) |
| [dsh-vision-sidecar](https://github.com/121103qwq/dsh-vision-sidecar) | 为 DeepSeek Harness 添加免密钥托管或 OpenAI 兼容的视觉能力，同时保留已配置的推理模型 | [🔗](https://cordis.run/plugins/dsh-vision-sidecar) |
| [dsh-openapi](https://github.com/Degurechaff57/dsh-openapi) | 用于DeepSeek Harness的OpenAPI 3.x发现与安全API调用工具 | [🔗](https://cordis.run/plugins/dsh-openapi) |
| [dsh-agent-messaging](https://github.com/happyren/dsh-agent-messaging) | DeepSeek Harness 的跨会话智能体消息传递：按名称定位另一会话，向其收件箱投递消息 | [🔗](https://cordis.run/plugins/dsh-agent-messaging) |
| [@omdsh/dsh-hub](https://github.com/omdsh-dev/dsh-hub) | OMDSH 社区扩展中心，基于官方 DeepSeek Harness 合约构建 | [🔗](https://cordis.run/plugins/omdsh-dsh-hub) |
| [codex-plugin-dsh](https://github.com/wingoo/codex-plugin-dsh) | DeepSeek Harness 的 Codex App Server 模型提供器插件 | [🔗](https://cordis.run/plugins/codex-plugin-dsh) |
| [@huanlin/dsh-plugin-sleep](https://github.com/HuanLinOTO/dsh-plugin-sleep) | DSH 插件，提供单一的 `sleep` 工具，让模型可按配置的毫秒数暂停，并支持取消 | [🔗](https://cordis.run/plugins/huanlin-dsh-plugin-sleep) |
| [qiushi-dsh-evidence-audit](https://github.com/030611/qiushi-dsh-evidence-audit) | 用于DeepSeek Harness的仅观察哈希链证据收据 | [🔗](https://cordis.run/plugins/qiushi-dsh-evidence-audit) |
| [dsh-save-balance-monitor](https://github.com/sixtysevenlf/dsh-save-balance-monitor) | 省钱+余额监控悬浮窗（DSH Web UI 插件）：DeepSeek / OpenCode Go 双标签余额、限额监控（金额/tok/小时）、语音提醒、超… | [🔗](https://cordis.run/plugins/dsh-save-balance-monitor) |
| [dsh-plugin-cost-tracker](https://github.com/YYTbit/dsh-plugin-cost-tracker) | DeepSeek Harness 的 Token 成本追踪器 -- 跟踪使用量，计算成本，预算警告 | [🔗](https://cordis.run/plugins/dsh-plugin-cost-tracker) |
| [dsh-plugin-opencode-bridge](https://github.com/YYTbit/dsh-plugin-opencode-bridge) | 将OpenCode的技能与配置接入DeepSeek Harness | [🔗](https://cordis.run/plugins/dsh-plugin-opencode-bridge) |
| [dsh-report-html](https://github.com/hccccc01333/dsh-report-html) | 从 Markdown、表格和图表数据生成自包含的交互式 HTML 报告 | [🔗](https://cordis.run/plugins/dsh-report-html) |
| [dsh-superpowers](https://github.com/codeAnqiang-ma/dsh-superpowers) | dsh-superpowers：DeepSeek Harness 的 Superpowers（obra/superpowers）插件，包含软件开发方法论技… | [🔗](https://cordis.run/plugins/dsh-superpowers) |
| [dsh-undo](https://github.com/LingLambda/dsh-undo) | 为 DeepSeek Harness (dsh) 提供的用户端撤销/重做：/undo 命令将对话记录回滚到最后一条消息之前，/redo 将其恢复 | [🔗](https://cordis.run/plugins/dsh-undo) |
| [dsh-verification-receipt](https://github.com/030611/dsh-verification-receipt) | DeepSeek Harness 的隐私最小化逐轮启发式执行摘要 | [🔗](https://cordis.run/plugins/dsh-verification-receipt) |
| [dsh-learn-everything](https://github.com/cendaifeng/dsh-learn-everything) | DeepSeek Harness 的 Feynman 学习模式插件：/learn on\|off、结构化课程卡片、丰富的 HTML 教学 | [🔗](https://cordis.run/plugins/dsh-learn-everything) |
| [@deepseek-ai/dsh-daily-fortune](https://github.com/omdsh-dev/dsh-daily-fortune) | DSH每日运势插件，包含观音灵签、塔罗牌阵和每日箴言 | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-daily-fortune) |
| [dsh-ernie-image](https://github.com/omdsh-dev/dsh-ernie-image) | DSH ERNIE-Image-Turbo 文生图插件：通过百度AI Studio生成图像，保存为持久化会话附件，并提供设置卡片与生成画廊面板 | [🔗](https://cordis.run/plugins/dsh-ernie-image) |
| [@deepseek-ai/dsh-fun-typewriter](https://github.com/omdsh-dev/dsh-fun-typewriter) | DSH Typewriter：使用 WebAudio 模拟打字氛围，提供插件自有的设置 API，无需任何音频资源 | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-fun-typewriter) |
| [dsh-longbridge](https://github.com/omdsh-dev/dsh-longbridge) | DSH Longbridge（长桥）港美股插件：行情、账户、持仓与交易工具，另附设置界面 | [🔗](https://cordis.run/plugins/dsh-longbridge) |
| [dsh-paddle-ocr](https://github.com/omdsh-dev/dsh-paddle-ocr) | DSH PaddleOCR（百度 PaddleOCR-VL 文档布局解析）插件：OCR 工具，外加设置卡片和任务面板 | [🔗](https://cordis.run/plugins/dsh-paddle-ocr) |
| [@deepseek-ai/dsh-pet-corner](https://github.com/omdsh-dev/dsh-pet-corner) | DSH Pet Corner：浮动宠物、免密钥宠物图片代理、收藏夹及插件自有设置 API | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-pet-corner) |
| [dsh-voice-funasr](https://github.com/omdsh-dev/dsh-voice-funasr) | DSH 网页插件：本地离线 FunASR 语音输入（paraformer int8 onnx sidecar，Web Speech 备用，LLM 优化） | [🔗](https://cordis.run/plugins/dsh-voice-funasr) |
| [@deepseek-ai/dsh-sandbox-microsandbox](https://github.com/omdsh-dev/sandbox-micro) | 故障关闭型微沙箱微虚拟机提供器，及面向模型的客户机工具 | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-sandbox-microsandbox) |
| [@deepseek-ai/dsh-sandbox-nono](https://github.com/omdsh-dev/sandbox-nono) | nono (Landlock/Seatbelt) 后端，用于 DeepSeek Harness 沙箱接缝，附带内嵌的故障关闭执行器 | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-sandbox-nono) |
| [dsh-blue-whale-maid](https://github.com/yuxino/dsh-blue-whale-maid) | 蓝鲸女仆 — 一款适用于 DeepSeek Harness 网页 GUI 的桌面像素宠物（画师：simashui @ codex-pets.net） | [🔗](https://cordis.run/plugins/dsh-blue-whale-maid) |
| [@zerohackz/dsh-openflowframes](https://github.com/ZeroHackz/OpenFlowFrames) | DeepSeek Harness 插件，将 OpenFlowFrames 视频帧插值（RIFE）封装为智能体工具 | [🔗](https://cordis.run/plugins/zerohackz-dsh-openflowframes) |
| [@huanlin/dsh-plugin-auto-blame](https://github.com/HuanLinOTO/dsh-plugin-auto-blame) | Auto-blame：当一轮对话结束时，向 LLM 请求三个毒舌的后续提示，并以点击即可发送的气泡形式显示在输入框上方 | [🔗](https://cordis.run/plugins/huanlin-dsh-plugin-auto-blame) |
| [dsh-opencode-go-monitor](https://github.com/sixtysevenlf/dsh-opencode-go-monitor) | DSH web UI 悬浮面板：OpenCode Go 月度/滚动/每周额度余额 + 用量监控（key 本地读取，各自显示自己的余额） | [🔗](https://cordis.run/plugins/dsh-opencode-go-monitor) |
| [dsh-agent-message](https://github.com/GengDaPeng/dsh-agent-message) | 跨会话 Agent 通信：让 DeepSeek Harness 里不同的 Agent 会话互相收发消息 | [🔗](https://cordis.run/plugins/dsh-agent-message) |
| [dsh-claude-marketplace](https://github.com/ben7am1n/dsh-claude-marketplace) | 为 DeepSeek Harness 打造的 Claude Code 兼容层：可将 .claude 技能/命令/代理加载进来，并从 Claude Code… | [🔗](https://cordis.run/plugins/dsh-claude-marketplace) |
| [dsh-mobile-control](https://github.com/PangYiMing/dsh-mobile-control) | 用于控制移动设备（ADB / iOS 模拟器 / WDA）的 DSH 插件 | [🔗](https://cordis.run/plugins/dsh-mobile-control) |
| [dsh-plugin-codex-bridge](https://github.com/YYTbit/dsh-plugin-codex-bridge) | 将 OpenAI Codex 的记忆、技能和配置桥接到 DeepSeek Harness | [🔗](https://cordis.run/plugins/dsh-plugin-codex-bridge) |
| [dsh-plugin-pi-bridge](https://github.com/YYTbit/dsh-plugin-pi-bridge) | 将Pi Agent的技能和配置桥接到DeepSeek Harness | [🔗](https://cordis.run/plugins/dsh-plugin-pi-bridge) |
| [dsh-telemetry-redactor](https://github.com/030611/dsh-telemetry-redactor) | DeepSeek Harness 会话遥测的导出副本脱敏 | [🔗](https://cordis.run/plugins/dsh-telemetry-redactor) |
| [dsh-token-usage](https://github.com/hashdiana/dsh-token-usage) | dsh（DeepSeek Harness）外部插件：在 Web 设置面板新增「用量统计」页，展示过去 7/15/30 天的 token 用量与估算金额折线… | [🔗](https://cordis.run/plugins/dsh-token-usage) |
| [dizzy-dsh](https://github.com/Acidmoon/DIzzy-DSH) | Dizzy-DSH 插件合集仓库：git clone 后执行 dsh plugin add 即可安装，无需 npm 发布 | [🔗](https://cordis.run/plugins/dizzy-dsh) |
| [deepseek-harness-plugin-mcp](https://github.com/bobleer/deepseek-harness-plugin-mcp) | MCP 服务器，让任何代理都能发现、安装并运行 DeepSeek Harness 插件 | [🔗](https://cordis.run/plugins/deepseek-harness-plugin-mcp) |
| [dsh-cost](https://github.com/dongsheng123132/dsh-cost) | 面向DeepSeek Harness的以证据为先的token成本台账与预算检查 | [🔗](https://cordis.run/plugins/dsh-cost) |
| [dsh-tool-policy](https://github.com/Drifter-yh/dsh-tool-policy) | DeepSeek Harness 的声明式、失效关闭工具调用策略 | [🔗](https://cordis.run/plugins/dsh-tool-policy) |
| [dsh-model-modes](https://github.com/DTSFO/dsh-model-modes) | 能力感知的推理控制，以及为 DeepSeek Harness 网页编辑器提供的诚实 Fast 路由模式 | [🔗](https://cordis.run/plugins/dsh-model-modes) |
| [@jasonjin06/dsh-sound-effects](https://github.com/JasonJin2006/dsh-sound-effects-plugin) | 为 DeepSeek Harness 配置事件提示音 | [🔗](https://cordis.run/plugins/dsh-sound-effects-plugin) |
| [dsh-multimodal](https://github.com/MC5lan/dsh-multimodal) | 为 DeepSeek Harness 打造的多模态眼与手：通过 DashScope / OpenAI 兼容后端实现 GLM 视觉转写、OCR 和文生图，并… | [🔗](https://cordis.run/plugins/dsh-multimodal) |
| [@dsh-external/dsh-web-skins](https://github.com/Moeblack/dsh-skins) | DSH Web 换肤仓库 / DSH Web skins repo — 为 dsh Web 图形用户界面（GUI）打造的第三方皮肤（Token 皮肤 + … | [🔗](https://cordis.run/plugins/dsh-external-dsh-web-skins) |
| [@morlay/session-persistence-rdb](https://github.com/morlay/session-persistence-rdb) | DeepSeek Harness 的 RDB 持久化会话后端 | [🔗](https://cordis.run/plugins/morlay-session-persistence-rdb) |
| [@deepseek-ai/dsh-tool-scout](https://github.com/omdsh-dev/dsh-scout) | 面向模型的 DeepSeek Harness 环境探测工具：按需获取运行时环境、PATH 命令、软件版本与主机资源 | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-tool-scout) |
| [@deepseek-ai/dsh-sandbox-mxc](https://github.com/omdsh-dev/sandbox-mxc) | Microsoft 执行容器 (MXC) 后端，用于 DeepSeek Harness 沙箱接口 | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-sandbox-mxc) |
| [@mattheliu/session-teleport](https://github.com/omdsh-dev/session-teleport) | 基于PostgreSQL的单写入端会话交接服务，适用于DeepSeek Harness | [🔗](https://cordis.run/plugins/mattheliu-session-teleport) |
| [@deepseek-ai/dsh-client-web-component](https://github.com/omdsh-dev/web-components) | Web 组件适配器，将 DSH 插槽树挂载为原生自定义元素 | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-client-web-component) |
| [dsh-claude-move](https://github.com/PerryLink/dsh-claude-move) | 将 Claude Code 中的转录内容、记忆、技能和 CLAUDE.md 文件复制到 DeepSeek Harness 中，以可恢复的会话形式保存——每… | [🔗](https://cordis.run/plugins/dsh-claude-move) |
| [dsh-reasoning-translator](https://github.com/pinkllo/dsh-reasoning-translator) | DeepSeek Harness插件：通过Chrome翻译器或兼容OpenAI的API，在显示层翻译推理过程和回答 | [🔗](https://cordis.run/plugins/dsh-reasoning-translator) |
| [dsh-pixluna](https://github.com/PixLunaLab/dsh-plugin-pixluna) | 适用于DeepSeek Harness的PixLuna图像源工具 | [🔗](https://cordis.run/plugins/dsh-plugin-pixluna) |
| [mmv-dspic](https://github.com/sjscy05/matlab-modelsim-vivado-plugin) | MATLAB + ModelSim + Vivado 全流程工具组合，专为数字通信IC设计任务打造 —— 一款 DeepSeek Harness 插件包 | [🔗](https://cordis.run/plugins/mmv-dspic) |
| [@deepseek-ai/dsh-agent-budget](https://github.com/vibeinging/dsh-agent-budget) | 针对每次会话和代理树的持久Token准入预算 | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-agent-budget) |
| [@deepseek-ai/dsh-trace](https://github.com/vibeinging/dsh-trace) | 用于DeepSeek Harness的嵌入式yiTrace插件，支持轮次、模型步骤和工具调用 | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-trace) |
| [dsh-openai-codex-auth](https://github.com/yoke233/dsh-openai-codex-auth) | 用于DeepSeek Harness的OpenAI Codex OAuth登录插件 | [🔗](https://cordis.run/plugins/dsh-openai-codex-auth) |
| [dsh-archive-manager](https://github.com/zimixvx/dsh-archive-manager) | 一个极简的DeepSeek Harness Web插件，用于列出已归档会话，并在用户明确确认后永久删除归档会话目录 | [🔗](https://cordis.run/plugins/dsh-archive-manager) |
| [@sakikotgw/pack-agent](https://github.com/sakikoTGW/pack-agent) | 将技能、规则和 MCP 打包成 .pack.zip，并安装到 Claude Code、Codex、Cursor 等工具中 | [🔗](https://cordis.run/plugins/sakikotgw-pack-agent) |
| [dsh-batch-regression](https://github.com/PangYiMing/dsh-batch-regression) | 运行同一命令N轮，以中位数/分布而非单次结果作为判断依据 | [🔗](https://cordis.run/plugins/dsh-batch-regression) |
| [dsh-deepseek-balance](https://github.com/lin-cheng-lab/dsh-deepseek-balance) | DeepSeek Harness 的 DeepSeek API 余额徽章：一个显示实时账户余额的 shell.overlay 胶囊 | [🔗](https://cordis.run/plugins/dsh-deepseek-balance) |
| [dsh-git](https://github.com/walavave/dsh-git) | DeepSeek Harness 的 Git 能力包：结构化 Git 工具、需审批的变更操作，以及自动检查点 | [🔗](https://cordis.run/plugins/dsh-git) |
| [dsh-mcp-proxy](https://github.com/ben7am1n/dsh-mcp-proxy) | 为 DeepSeek Harness 提供一种对上下文占用十分友好的 MCP 访问解决方案：只需要两个轻量级代理工具，而无需像传统方式那样为每个服务器加载… | [🔗](https://cordis.run/plugins/dsh-mcp-proxy) |
| [dsh-memory](https://github.com/ben7am1n/dsh-memory) | 为DeepSeek Harness提供跨会话的持久记忆：本地SQLite FTS5存储、三个面向模型的工具和召回提示区——无需嵌入服务，无附带组件 | [🔗](https://cordis.run/plugins/dsh-memory) |
| [dsh-plugin-auto-docs](https://github.com/YYTbit/dsh-plugin-auto-docs) | DeepSeek Harness自动文档生成技能——README、API文档、更新日志 | [🔗](https://cordis.run/plugins/dsh-plugin-auto-docs) |
| [dsh-plugin-context-compressor](https://github.com/YYTbit/dsh-plugin-context-compressor) | 面向 DeepSeek Harness 的上下文压缩技能——智能对话摘要 | [🔗](https://cordis.run/plugins/dsh-plugin-context-compressor) |
| [dsh-port-guard](https://github.com/PangYiMing/dsh-port-guard) | dsh-port-guard：分流端口冲突——复用自有活跃服务，为其他进程切换端口，精准清除僵尸进程 | [🔗](https://cordis.run/plugins/dsh-port-guard) |
| [dsh-tool-approval](https://github.com/ilharp/dsh-tool-approval) | Deepseek Harness 的手动审批（即"手动模式"/"询问模式"） | [🔗](https://cordis.run/plugins/dsh-tool-approval) |
| [dsh-turn-index](https://github.com/Simon314620/dsh-turn-index) | 对话轮次索引：DeepSeek Harness Web GUI 右侧边栏按轮次列出用户提问，点击即可跳转到对应位置 | [🔗](https://cordis.run/plugins/dsh-turn-index) |
| [dsh-codex-import](https://github.com/918154429/dsh-codex-import) | 用于 DeepSeek Harness 的只读 Codex 配置兼容性扫描器 | [🔗](https://cordis.run/plugins/dsh-codex-import) |
| [dsh-webhook-bridge](https://github.com/ben7am1n/dsh-webhook-bridge) | 用于 DeepSeek Harness 的通用 webhook 接收器 — 向本地端点发送 POST 请求以唤醒 dsh agent | [🔗](https://cordis.run/plugins/dsh-webhook-bridge) |
| [dsh-effort-config](https://github.com/benzhoupo/dsh-effort-config) | 第三方模型思考努力度配置（DeepSeek Harness 插件）：在设置页为模型声明 reasoningEfforts 档位、路由默认档位与 Anthr… | [🔗](https://cordis.run/plugins/dsh-effort-config) |
| [@bill9109/dsh-conversation-share](https://github.com/bill9109/dsh-conversation-share) | 选取 DeepSeek Harness 对话中的一段内容，将其分享为带品牌标识的 PNG 长图，范围标记可拖拽并带磁吸对齐功能 | [🔗](https://cordis.run/plugins/bill9109-dsh-conversation-share) |
| [dsh-resume-plugin](https://github.com/Demogorgon314/dsh-resume-plugin) | 在 DeepSeek Harness 中将 Claude Code 和 Codex 会话恢复为静态交接上下文 | [🔗](https://cordis.run/plugins/dsh-resume-plugin) |
| [dsh-conversation-rewind](https://github.com/DTSFO/dsh-conversation-rewind) | DeepSeek Harness 的仅追加式对话回退与安全消息编辑 | [🔗](https://cordis.run/plugins/dsh-conversation-rewind) |
| [@dsh-crosstalk/bundle](https://github.com/Jesse-njx/dsh-crosstalk) | dsh-crosstalk — DSH的跨会话消息传递：机器上任何会话都能列出并与其他会话互发消息，Claude Code风格 | [🔗](https://cordis.run/plugins/dsh-crosstalk-bundle) |
| [dsh-apple-mode](https://github.com/jihongboo/dsh-apple-mode) | DeepSeek Harness的Xcode AI集成：26个Xcode MCP工具（mcpbridge）、Apple平台技能、Xcode Intelli… | [🔗](https://cordis.run/plugins/dsh-apple-mode) |
| [dsh-jumpserver](https://github.com/jumpserver-east/jumpserver-dsh) | DeepSeek Harness 插件：管理 JumpServer 资产并通过 KoKo 进行操作 | [🔗](https://cordis.run/plugins/dsh-jumpserver) |
| [dsh-plugin-doctor](https://github.com/lin-cheng-lab/dsh-plugin-doctor) | DSH 插件体检：安装任何插件前检查仓库可访问性、bundle 声明、peer 依赖与本地 DSH 版本兼容性、构建产物完整性，预防 rc 不匹配导致的启动崩溃 | [🔗](https://cordis.run/plugins/dsh-plugin-doctor) |
| [dsh-balance-display](https://github.com/Liu-ty/dsh-balance-display) | DeepSeek Harness 的 DeepSeek API 余额覆盖层 | [🔗](https://cordis.run/plugins/dsh-balance-display) |
| [deepseek-harness-plugin-from-scratch](https://github.com/Opr4Mp3r/deepseek-harness-plugin-from-scratch) | 经代码审计、循序渐进的指南，助你构建生产级 DeepSeek Harness 插件 | [🔗](https://cordis.run/plugins/deepseek-harness-plugin-from-scratch) |
| [dsh-codex-bridge](https://github.com/pandashere/dsh-codex-bridge) | DeepSeek Harness 的 Codex 桥接组件：提供 call_codex / codex_status / codex_abort 等一系列… | [🔗](https://cordis.run/plugins/dsh-codex-bridge) |
| [@dsh-community/dsh-deeplink](https://github.com/qyw233/dsh-deeplink) | DSH WebUI 深链：通过 ?session=<会话id> 或 ?workspace=<工程id> 直接打开指定项目对话 | [🔗](https://cordis.run/plugins/dsh-community-dsh-deeplink) |
| [dsh-plugin-wepre](https://github.com/shujiTech/dsh-plugin-wepre) | DeepSeek Harness 插件：可直接从 dsh 代理会话中将单屏内容卡片发布到 WePre Next | [🔗](https://cordis.run/plugins/dsh-plugin-wepre) |
| [@dsh-external/tps](https://github.com/Small-tailqwq/dsh-tps) | DSH Web 的实时 TPS 徽章：在 Deep diving 状态行内实时显示每秒 token 数 | [🔗](https://cordis.run/plugins/dsh-external-tps) |
| [dsh-capability-inspector](https://github.com/tree201/dsh-capability-inspector) | DeepSeek Harness Doctor：只读式 DSH 运行时能力诊断，支持工具、模型、技能、工作区、会话、插件及 MCP 故障排查 | [🔗](https://cordis.run/plugins/dsh-capability-inspector) |
| [@deepseek-ai/dsh-turn-navigator](https://github.com/vibeinging/dsh-turn-navigator) | 面向 DSH Web 客户端的紧凑对话轮次导航 | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-turn-navigator) |
| [dsh-pixel-whale](https://github.com/yoke233/dsh-pixel-whale) | 为 DeepSeek Harness Web 打造的活泼像素鲸鱼加载伴侣 | [🔗](https://cordis.run/plugins/dsh-pixel-whale) |
| [dsh-plugin-agent-dashboard](https://github.com/YYTbit/dsh-plugin-agent-dashboard) | DeepSeek Harness 的多智能体仪表盘技能——状态报告、任务追踪、进度可视化 | [🔗](https://cordis.run/plugins/dsh-plugin-agent-dashboard) |
| [@tappass/dsh-governance](https://github.com/tappass/dsh-governance) | 作为DeepSeek Harness插件，这是智能体AI的权限层 | [🔗](https://cordis.run/plugins/tappass-dsh-governance) |
| [dsh-archived-sessions](https://github.com/hashdiana/dsh-archived-sessions) | 在设置面板中新增“已归档会话”分区：列出被归档的会话（默认在侧边栏不可见），点击即可重新打开 | [🔗](https://cordis.run/plugins/dsh-archived-sessions) |
| [dsh-conversation-indicator](https://github.com/smanx/dsh-conversation-indicator) | DeepSeek Harness 网页 GUI 的对话指示器：对话记录滚动条上的可点击标记，可跳转到相应的消息或轮次 | [🔗](https://cordis.run/plugins/dsh-conversation-indicator) |
| [dsh-skill-manager](https://github.com/bitterSmilezzz/dsh-skill-manager) | dsh 网页 GUI 的界面内技能管理器：设置中的顶级“技能”入口（可移入“插件”区域），列出所有已安装技能（名称、描述、模型/用户调用类型、源根目录），… | [🔗](https://cordis.run/plugins/dsh-skill-manager) |
| [dsh-cost-guard](https://github.com/sixtysevenlf/dsh-cost-guard) | DeepSeek 成本守卫插件：按官方峰谷分级核算会话成本、¥ 预算守卫（超支近场收敛引导）、收敛/深度/错峰引导注入、峰谷感知错峰队列（空闲时段自动执行） | [🔗](https://cordis.run/plugins/dsh-cost-guard) |

---

## 教程与指南

- [cordis.run 快速上手](https://cordis.run/guides) — 安装、配置与提交 DeepSeek Harness 插件。
- [DeepSeek Harness 插件开发指南](https://cordis.run/guides) — 如何为 DeepSeek Harness 开发 `dsh.bundle` Cordis 插件。
- [预设导入指南](https://cordis.run/guides) — 安全安装 DeepSeek Harness 的 `.dshpreset` 智能体预设。

## 工具

- [DeepSeek Harness](https://github.com/deepseek-ai/DeepSeek-Harness) — Cordis 插件的宿主应用。
- [cordis.run](https://cordis.run) — DeepSeek Harness 插件市场：搜索、安装命令、安全扫描与插件认领。

## 社区

- [GitHub dsh-plugin topic](https://github.com/topics/dsh-plugin) — GitHub 上的 DeepSeek Harness Cordis 插件仓库。
- [提交插件](https://cordis.run/plugins/submit) — 把你的 DeepSeek Harness 插件上架到 cordis.run。
- [报告安全问题](https://github.com/web-casa/Awesome-DeepSeek-Harness-Plugins/security) — 负责任披露。

---

## 本列表如何生成

本 DeepSeek Harness 插件列表由 cordis.run 团队从 [`data/plugins.json`](data/plugins.json) 自动生成。
每个 DeepSeek Harness 插件条目都链接到其 cordis.run 页面，可查看安装命令、安全扫描报告与双语配置教程。

与社区维护的索引不同，这里的每个 DeepSeek Harness 插件都**经过 npm registry 校验和 `dsh.bundle` 声明检查**后才会上架。

## License

列表本身采用 [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/)。插件代码与元数据归各自作者所有。

