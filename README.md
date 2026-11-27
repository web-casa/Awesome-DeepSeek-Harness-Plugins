# Awesome DeepSeek Harness Plugins

> The official, auto-generated awesome list for the **DeepSeek Harness (DSH)** Cordis plugin ecosystem —
> curated by [cordis.run](https://cordis.run), the DeepSeek Harness plugin marketplace.

**349 DeepSeek Harness plugins** · curated from the [cordis.run open plugin index](data/plugins.json).

Every listed DeepSeek Harness plugin has a **one-line install command** and a **security scan status** on its cordis.run page.

[中文版](README.zh.md) | English

---

## What is DeepSeek Harness?

**DeepSeek Harness (DSH)** is an agent harness for DeepSeek models. Its plugin system — **Cordis** —
lets you install packages from npm or GitHub that declare a `dsh.bundle` and patch them into a DSH profile.
This list indexes **DeepSeek Harness Cordis plugins** with a checked package source
and `dsh.bundle` declaration, listed on [cordis.run](https://cordis.run).

## Contents

- [🧠 Dev Assistants](#dev-assistants)
- [🔁 Workflow & Automation](#workflow--automation)
- [🎨 Themes & UI](#themes--ui)
- [🔌 Data Integration](#data-integration)
- [⚡ Productivity](#productivity)
- [✨ AI Enhancement](#ai-enhancement)
- [📖 Tutorials & Guides](#tutorials--guides)
- [🛠 Tools](#tools)
- [👥 Community](#community)

---

## Dev Assistants

> Coding, code review, SQL and developer workflow plugins for DeepSeek Harness. *(82 plugins)*

| DeepSeek Harness Plugin | Description | On cordis.run |
|---|---|---|
| [dsh-cc-tui](https://github.com/ccch1mneyyy/dsh-cc-tui) | Claude Code style interactive TUI front door for DeepSeek Harness agents, built on the ported Ink core. | [🔗](https://cordis.run/plugins/dsh-cc-tui) |
| [dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon) | Composable, view-based context for DeepSeek Harness | [🔗](https://cordis.run/plugins/dsh-mnemon) |
| [dsh-at-file](https://github.com/omdsh-dev/dsh-at-file) | Codex-style @path references for the DeepSeek Harness web GUI: search workspace paths without injecting file content | [🔗](https://cordis.run/plugins/dsh-at-file) |
| [dsh-auto-review](https://github.com/perrylink/dsh-auto-review) | Second-model AI auto-review for DeepSeek Harness approval requests: a read-only reviewer subagent or the local non-ge… | [🔗](https://cordis.run/plugins/dsh-auto-review) |
| [dsh-memento](https://github.com/PerryLink/dsh-memento) | Bounded, layered, approval-gated, auditable cross-session memory for DeepSeek Harness — a capability seam (ctx.memory… | [🔗](https://cordis.run/plugins/dsh-memento) |
| [dsh-permission-rules](https://github.com/perrylink/dsh-permission-rules) | Declarative Claude Code-style permission rules plus a Codex-style process-level network policy for DeepSeek Harness: … | [🔗](https://cordis.run/plugins/dsh-permission-rules) |
| [dsh-notification](https://github.com/omdsh-dev/dsh-notification) | Desktop + webhook notifications when your DeepSeek Harness agent finishes a turn, hits an error, or needs approval. | [🔗](https://cordis.run/plugins/dsh-notification) |
| [@vlln/dsh-navbar](https://github.com/vlln/dsh-navbar) | 对话节点导航条——user 消息快速跳转（自渲染 DOM，官方 client 通道） | [🔗](https://cordis.run/plugins/dsh-external-dsh-navbar) |
| [dsh-lsp-actions](https://github.com/perrylink/dsh-lsp-actions) | LSP action surface for DeepSeek Harness: diagnostics, formatting, completion, code actions, symbols, signature help, … | [🔗](https://cordis.run/plugins/dsh-lsp-actions) |
| [@dingyi222666/dsh-session-notification](https://github.com/dingyi222666/dsh-session-notification) | Session-state notification plugin for the dsh web GUI: session completed/failed, question-asked, and permission-reque… | [🔗](https://cordis.run/plugins/dingyi222666-dsh-session-notification) |
| [@deepseek-ai/dsh-toolkit](https://github.com/omdsh-dev/dsh-toolkit) | DSH zero-dependency toolkit collection: time / encoding / json / calculator / csv / regex / markdown / diff / stat / … | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-toolkit) |
| [@omdsh-dev/dsh-plugin-check](https://github.com/omdsh-dev/dsh-plugin-check) | DSH plugin health checker: scan plugin repos for manifest protocol / patch format / build pitfalls / hub registration… | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-plugin-check) |
| [dsh-hdc-bridge](https://github.com/1na-ko/dsh-hdc-bridge) | DSH-native HarmonyOS dev assistant: hdc device debugging, an input-row development panel, official-first versioned AP… | [🔗](https://cordis.run/plugins/dsh-hdc-bridge) |
| [@huanlin/dsh-plugin-aigc-canvas](https://github.com/HuanLinOTO/dsh-plugin-aigc-canvas) | DSH plugin: an infinite free canvas for the better-sidebar plus provider-agnostic generation | [🔗](https://cordis.run/plugins/huanlin-dsh-plugin-aigc-canvas) |
| [dsh-plugin-miliastra-toolbox](https://github.com/1475505/dsh-plugin-miliastra-toolbox) | DeepSeek Harness plugin: 千星沙箱知识库（节点/指南/教程/FAQ）查询工具与技能 | [🔗](https://cordis.run/plugins/dsh-plugin-miliastra-toolbox) |
| [@oh-my-dsh/stent-pack](https://github.com/omdsh-dev/fabric) | Stent/Mixin extension workspace: installable profile bundle carrier over the stent package trio | [🔗](https://cordis.run/plugins/cordis-fabric-bundle) |
| [dsh-deeptutor](https://github.com/TecFancy/dsh-deeptutor) | Learning assistant extension for DeepSeek Harness (dsh), Claude Code (MCP) and pi: DeepTutor tutoring for your agent:… | [🔗](https://cordis.run/plugins/dsh-deeptutor) |
| [@dsh-external/dsh-better-browser](https://github.com/titanwings/dsh-better-browser) | Better Browser for DeepSeek Harness: drive the user's real browser through Kimi WebBridge with navigation, snapshots,… | [🔗](https://cordis.run/plugins/dsh-external-dsh-better-browser) |
| [dsh-search-mcp](https://github.com/gxpppp/dsh-search-mcp) | Replace dsh's built-in web search with search MCP servers (Tavily / Brave / Exa / Perplexity / DuckDuckGo / custom), … | [🔗](https://cordis.run/plugins/dsh-search-mcp) |
| [@huanlin/dsh-plugin-anti-ads](https://github.com/HuanLinOTO/dsh-plugin-anti-ads) | DSH ad-suppression plugin: writes dsh-ads's own settings key to all-false, broadcasts its retire event, scrubs its po… | [🔗](https://cordis.run/plugins/huanlin-dsh-plugin-anti-ads) |
| [dsh-code-index](https://github.com/lemonxiny55/dsh-code-index) | Local code intelligence for DeepSeek Harness (DSH): Review Briefs, Impact X-Ray, call graphs, bounded Context Packs, … | [🔗](https://cordis.run/plugins/dsh-code-index) |
| [@lhmd/dsh-director-toolkit](https://github.com/lhmd/dsh-director-toolkit) | DeepSeek Harness plugin that turns a 3D idea into a shootable scene brief and publish-ready showcase copy. | [🔗](https://cordis.run/plugins/lhmd-dsh-director-toolkit) |
| [@deepseek-ai/dsh-session-health](https://github.com/omdsh-dev/dsh-session-health) | DSH session health checker: frame-level diagnostics over multi-frame zstd session logs (torn/corrupt/empty detection)… | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-session-health) |
| [@jorinyang/dsh-doctor](https://github.com/jorinyang/dsh-doctor) | DeepSeek Harness diagnostic, repair, and rollback plugin: dsh_doctor (diagnose), dsh_doctor_fix (journaled repair), d… | [🔗](https://cordis.run/plugins/dsh-external-dsh-doctor) |
| [@lhmd/dsh-promotion-toolkit](https://github.com/lhmd/dsh-promotion-toolkit) | DeepSeek Harness-native publicity toolkit: turn any long-form source into a source-grounded, platform-native promotio… | [🔗](https://cordis.run/plugins/lhmd-dsh-promotion-toolkit) |
| [@deepseek-ai/dsh-tool-calculator](https://github.com/omdsh-dev/dsh-tool-calculator) | DSH calculator tool | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-tool-calculator) |
| [dsh-chrome-devtools](https://github.com/yuzi-ska/DSH-Chrome-devtools) | DeepSeek Harness profile bundle: Chrome DevTools MCP integration — drives one real Chrome browser through chrome-devt… | [🔗](https://cordis.run/plugins/dsh-chrome-devtools) |
| [@dsh-skillport/bundle](https://github.com/Jesse-njx/dsh-skillport) | dsh-skillport — every skill you already have (Claude Code, Codex, Cursor, Gemini CLI) works in DSH: Agent Skills SKIL… | [🔗](https://cordis.run/plugins/dsh-skillport-bundle) |
| [@bill9109/dsh-101](https://github.com/bill9109/dsh-101) | A document-first reader profile bundle for DeepSeek Harness: curated, ordered, searchable, translatable reading of DS… | [🔗](https://cordis.run/plugins/dsh-external-dsh-101) |
| [@loserfox/git-identity](https://github.com/LoserFox/dsh-git-identity) | DSH profile bundle：git 提交固定使用环境自身作者身份（优先 gh CLI 登录账号，GitHub noreply 邮箱），GIT_AUTHOR_*/GIT_COMMITTER_* 环境变量注入压过一切 git c… | [🔗](https://cordis.run/plugins/loserfox-git-identity) |
| [@why913/dshx](https://github.com/why913/dshx) | DeepSeek Harness（dsh）的 MCP / Skill / 记忆管理工具：写入前先连接自检，连不上不写；从 Claude Code / Codex 一键迁移；可装成 dsh 插件，在 Web 里用 /mcp 命令和卡片操作。 | [🔗](https://cordis.run/plugins/why913-dshx) |
| [dsh-plugin-meta-memory](https://github.com/YYTbit/dsh-plugin-meta-memory) | Structured long-term memory system for DeepSeek Harness -- unit-based brief/full pairs with auto-injection | [🔗](https://cordis.run/plugins/dsh-plugin-meta-memory) |
| [dsh-tavily-search](https://github.com/zhouzhencheng07/dsh-tavily-search) | Tavily-backed search provider (direct Tavily Search API, no LLM tokens) for the DeepSeek Harness web capability seam … | [🔗](https://cordis.run/plugins/dsh-tavily-search) |
| [dsh-tool-describe-image](https://github.com/sala003/dsh-tool-describe-image) | DSH plugin: image understanding via any OpenAI-compatible vision API, paste-to-describe, and an animated whale-buddy … | [🔗](https://cordis.run/plugins/dsh-tool-describe-image) |
| [dsh-tool-git](https://github.com/lxj808624/dsh-tool-git) | Structured, safe Git tool family for DeepSeek Harness: status/diff/log/branch/stage/commit/stash/show/fetch/pull/remo… | [🔗](https://cordis.run/plugins/dsh-tool-git) |
| [@jinhuang712/dsh-survey](https://github.com/jinhuang712/dsh-survey) | Questionnaire-style survey plugin for DeepSeek Harness: the do_a_survey tool asks 1-10+ questions at once (single/mul… | [🔗](https://cordis.run/plugins/dsh-survey) |
| [shopline-ai-toolkit-dsh](https://github.com/lunw/shopline-ai-toolkit-dsh) | SHOPLINE AI Toolkit for DeepSeek Harness (DSH): bridges the official SHOPLINE Developer MCP server and ships SHOPLINE… | [🔗](https://cordis.run/plugins/shopline-ai-toolkit-dsh) |
| [@deepseek-ai/dsh-tool-stat](https://github.com/omdsh-dev/dsh-tool-stat) | DSH statistics tool: describe/percentile/frequency/correlation over explicit finite numeric arrays, zero-dependency, … | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-tool-stat) |
| [dsh-find-skill](https://github.com/Moximxxx/dsh-find-skill) | Bridge the vercel-labs/skills ecosystem into dsh: LLM-driven skill search, install, and lifecycle for temp/project/gl… | [🔗](https://cordis.run/plugins/dsh-find-skill) |
| [dsh-tool-chaos](https://github.com/cyanseek/dsh-tool-chaos) | Deterministic fault injection, autonomous resilience experiments, and machine-readable evidence for the DeepSeek Harn… | [🔗](https://cordis.run/plugins/dsh-tool-chaos) |
| [@detpecca/dsh-llm-wiki](https://github.com/detpecca/dsh-llm-wiki) | DeepSeek Harness plugin — manage an LLM-Wiki knowledge base from the agent: wiki_search / wiki_read / wiki_stats / wi… | [🔗](https://cordis.run/plugins/detpecca-dsh-llm-wiki) |
| [@jiesou/dsh-stream-rules](https://github.com/jiesou/dsh-stream-rules) | Inject rules when needed, without wasting context | [🔗](https://cordis.run/plugins/dsh-stream-rules) |
| [@deepseek-ai/dsh-qwen-mm](https://github.com/omdsh-dev/Qwen-MM-Plugins) | Qwen-MM capabilities as runtime-fetched Agent Skills and strict MCP tool servers | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-qwen-mm) |
| [dsh-webbridge](https://github.com/bill9109/dsh-webbridge) | Kimi WebBridge host plugin for DeepSeek Harness: model tools that drive the user's REAL browser (navigate, snapshot, … | [🔗](https://cordis.run/plugins/bill9109-dsh-webbridge) |
| [@dsh-voice/bundle](https://github.com/Jesse-njx/dsh-voice) | dsh-voice — voice notes in, spoken answers out: dictate audio that becomes user messages (transcribe), have the agent… | [🔗](https://cordis.run/plugins/dsh-voice-bundle) |
| [dsh-book2skill](https://github.com/omdsh-dev/dsh-book2skill) | DSH book-to-skill plugin: a 5-stage long task (fetch → parse → understand → generate → install) with 3 human gates, h… | [🔗](https://cordis.run/plugins/dsh-book2skill) |
| [@deepseek-ai/dsh-tool-csv](https://github.com/omdsh-dev/dsh-tool-csv) | DSH CSV data tool: parse/query/stats over RFC 4180 CSV text, zero-dependency state-machine parser | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-tool-csv) |
| [@deepseek-ai/dsh-tool-encoding](https://github.com/omdsh-dev/dsh-tool-encoding) | DSH encoding tool plugin | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-tool-encoding) |
| [@deepseek-ai/dsh-tool-markdown](https://github.com/omdsh-dev/dsh-tool-markdown) | DSH Markdown tool: HTML-to-Markdown conversion, whitelisted Markdown-to-HTML, GFM table normalization, TOC generation | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-tool-markdown) |
| [@deepseek-ai/dsh-tool-time](https://github.com/omdsh-dev/dsh-tool-time) | DSH time tool plugin | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-tool-time) |
| [dsh-test-runner](https://github.com/suimi8/dsh-test-runner) | DSH plugin: structured test runner tool (test_run) — auto-detect vitest/jest/pytest/node:test, run tests, parse failu… | [🔗](https://cordis.run/plugins/dsh-test-runner) |
| [dsh-plugin-graph](https://github.com/erduotong/dsh-plugin-graph) | Web settings surface for DeepSeek Harness: a force-directed relationship graph of client plugins — inject dependencie… | [🔗](https://cordis.run/plugins/dsh-plugin-graph) |
| [dsh-plugin-rag](https://github.com/YYTbit/dsh-plugin-rag) | Local knowledge base RAG for DeepSeek Harness -- index project files and search for relevant context | [🔗](https://cordis.run/plugins/dsh-plugin-rag) |
| [dsh-custom-css](https://github.com/AnacondaKC/dsh-custom-css) | DSH WebUI 自定义 CSS 插件：共享样式、冲突保护与本地文件导入 | [🔗](https://cordis.run/plugins/dsh-custom-css) |
| [@deepseek-ai/dsh-tool-diff](https://github.com/omdsh-dev/dsh-tool-diff) | DSH diff tool: structured comparison of text/JSON/CSV/Markdown plus unified diff generation and in-memory patch valid… | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-tool-diff) |
| [@deepseek-ai/dsh-tool-json](https://github.com/omdsh-dev/dsh-tool-json) | DSH JSON query tool | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-tool-json) |
| [@deepseek-ai/dsh-tool-schema](https://github.com/omdsh-dev/dsh-tool-schema) | DSH JSON Schema validation tool: validate, failure paths, static explain, default-only normalize; zero-network, zero-… | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-tool-schema) |
| [dsh-wikilink](https://github.com/zhaoscsc/dsh-wikilink) | Obsidian-style [[wikilink]] mentions for the DeepSeek Harness web GUI: type [[ in the composer to fuzzy-search note t… | [🔗](https://cordis.run/plugins/dsh-wikilink) |
| [dsh-bisect-debug](https://github.com/PangYiMing/dsh-bisect-debug) | Bisect bug root causes in three modes: code / boundary / commit (git bisect run) | [🔗](https://cordis.run/plugins/dsh-bisect-debug) |
| [dsh-chrome](https://github.com/YJSoooooo/dsh-chrome) | DeepSeek Harness (dsh) browser companion: a Chrome side panel that embeds the full dsh web UI and lets the dsh agent … | [🔗](https://cordis.run/plugins/dsh-chrome) |
| [dsh-model-selector](https://github.com/bitterSmilezzz/dsh-model-selector) | DeepSeek Harness model selector upgrade: one-level model & reasoning-effort picker with 5 Liang tiers, custom model a… | [🔗](https://cordis.run/plugins/dsh-model-selector) |
| [dsh-plugin-manager](https://github.com/hrhgit/deepseek-harness-plugin-manager) | Web plugin manager for DeepSeek Harness (DSH) and Cordis: inspect, enable, disable, group, and manage runtime plugins | [🔗](https://cordis.run/plugins/dsh-plugin-manager) |
| [dsh-plugin-pkgseek](https://github.com/web-casa/dsh-plugin-pkgseek) | PkgSeek Linux package, command and CVE intelligence as native DeepSeek Harness tools | [🔗](https://cordis.run/plugins/dsh-plugin-pkgseek) |
| [dsh-plugin-vision-toolkit](https://github.com/YYTbit/dsh-plugin-vision-toolkit) | Vision toolkit for DeepSeek Harness -- glance, ground, detect, crop CLI tools for text-only agents to understand images | [🔗](https://cordis.run/plugins/dsh-plugin-vision-toolkit) |
| [dsh-side-panel](https://github.com/XYZ1024-alt/dsh-side-panel) | Right-side developer panel for DeepSeek Harness: files, session history, and git version control | [🔗](https://cordis.run/plugins/dsh-side-panel) |
| [@a179-sanae/dsh-code-check](https://github.com/a179-sanae/dsh-code-check) | Auto type-check and lint diagnostics for DeepSeek Harness: after the model edits code, tsc runs in the background and… | [🔗](https://cordis.run/plugins/a179-sanae-dsh-code-check) |
| [dsh-usage-cost](https://github.com/Dino6021/dsh-usage-cost) | DSH plugin: per-step timestamped API usage timeline (usageTimeline projection) + peak/off-peak cost readout for DeepS… | [🔗](https://cordis.run/plugins/dsh-usage-cost) |
| [@dsh-memory/bundle](https://github.com/Jesse-njx/dsh-memory) | dsh-memory — cited memory over DSH's lossless session log: post-session distillation into human-auditable markdown fi… | [🔗](https://cordis.run/plugins/dsh-memory-bundle) |
| [@ohmydsh/runtime](https://github.com/omdsh-dev/omdsh-runtime) | Lightweight OMDSH Runtime and Profile Pack toolkit for auditable DSH composition, signing, candidate installs, and ro… | [🔗](https://cordis.run/plugins/omdsh-runtime) |
| [dsh-dev-actions](https://github.com/skitse/dsh-dev-actions) | AI turns repeated dev commands, prompts, and instructions into one-click DeepSeek Harness actions. | [🔗](https://cordis.run/plugins/dsh-dev-actions) |
| [@deepseek-ai/dsh-tool-search](https://github.com/vibeinging/dsh-tool-search) | Experimental per-agent tool discovery and progressive schema disclosure | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-tool-search) |
| [@yangzhe1003/dsh-web-search-firecrawl](https://github.com/yangzhe1003/dsh-web-search-firecrawl) | Firecrawl-backed search provider for the DeepSeek Harness web capability seam (ctx.web) | [🔗](https://cordis.run/plugins/yangzhe1003-dsh-web-search-firecrawl) |
| [dsh-all-search](https://github.com/RealAlexandreAI/dsh-all-search) | DeepSeek Harness plugin: AnySearch-backed web search with optional TinyFish and DeepSeek search/fetch, registered int… | [🔗](https://cordis.run/plugins/dsh-all-search) |
| [dsh-browser-control](https://github.com/PangYiMing/dsh-browser-control) | DSH plugin for controlling browsers (CDP / Playwright) | [🔗](https://cordis.run/plugins/dsh-browser-control) |
| [dsh-context-lens](https://github.com/gordonlu/dsh-context-lens) | Request Context Profiler for DeepSeek Harness — see what changed between model requests, and how cache reuse changed … | [🔗](https://cordis.run/plugins/dsh-context-lens) |
| [dsh-lens-lite](https://github.com/ben7am1n/dsh-lens-lite) | Post-edit diagnostics for DeepSeek Harness: runs configured type-checkers and linters after a successful write/edit a… | [🔗](https://cordis.run/plugins/dsh-lens-lite) |
| [dsh-screenshot-diff](https://github.com/PangYiMing/dsh-screenshot-diff) | Pixel-diff two screenshots into diff.png + a labeled triptych (pixelmatch) | [🔗](https://cordis.run/plugins/dsh-screenshot-diff) |
| [dsh-security-scan](https://github.com/ben7am1n/dsh-security-scan) | Secret & dangerous-pattern scanner for DeepSeek Harness — a security_scan tool that finds leaked API keys, tokens, pr… | [🔗](https://cordis.run/plugins/dsh-security-scan) |
| [dsh-toolbelt](https://github.com/cking000bigdemon/dsh-toolbelt) | Eight DeepSeek Harness plugins: persona, language guard, vision fallback, python workdir guard, windows encoding guar… | [🔗](https://cordis.run/plugins/dsh-toolbelt) |
| [dsh-session-index](https://github.com/longyu065/dsh-session-index) | 会话全文索引插件：监听 session/event 构建跨会话索引，提供 session_search / session_index_stats 工具，优先使用框架自带 ctx.sessionQuery (SQLite FTS5) | [🔗](https://cordis.run/plugins/dsh-session-index) |
| [dsh-payload-capture](https://github.com/Moeblack/dsh-payload-capture) | DeepSeek Harness 插件：捕捉每一次上行 API payload，JSON 存储到插件文件夹 | [🔗](https://cordis.run/plugins/dsh-payload-capture) |
| [@webcasa/deepseek-harness-marketplace](https://github.com/web-casa/DeepSeek-Harness-Marketplace-Cordis) | Cordis marketplace plugin for DeepSeek Harness | [🔗](https://cordis.run/plugins/webcasa-web) |

## Workflow & Automation

> Multi-step orchestration, task scheduling and agent workflow plugins for DeepSeek Harness. *(40 plugins)*

| DeepSeek Harness Plugin | Description | On cordis.run |
|---|---|---|
| [@changfenhuang/dsh-annotation](https://github.com/omdsh-dev/dsh-annotation) | DSH Web selection-annotation plugin: select assistant text, annotate (optional), and press Enter to send the annotati… | [🔗](https://cordis.run/plugins/omdsh-dev-dsh-annotation) |
| [@dsh-external/dsh-super-injector](https://github.com/yjh051108/dsh-super-injector) | 超级模组注入器：运行时注入任意本地 DSH 插件包（junction 链接 + loader.create，不碰 patch/package.json/不重启），热重载全家桶 + 开发侧挂区一键转正 + 一键卸载 + 路由自愈 + 插… | [🔗](https://cordis.run/plugins/dsh-external-dsh-super-injector) |
| [@dsh-external/workflow](https://github.com/icetomoyo/dsh_workflow) | KodaX-parity dynamic workflow harness for DeepSeek Harness | [🔗](https://cordis.run/plugins/dsh-external-workflow) |
| [@anionex/dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind) | Turn-level conversation and workspace rewind for DeepSeek Harness, powered by a persistent Change Ledger | [🔗](https://cordis.run/plugins/dsh-external-turn-rewind) |
| [@dsh-external/dsh-automation](https://github.com/titanwings/dsh-automation) | Run coding tasks on schedule in fresh Agent sessions, and manage automations from DeepSeek Harness Web or an Agent | [🔗](https://cordis.run/plugins/dsh-external-dsh-automation) |
| [@dsh-scholar/research-plugin](https://github.com/lzszq/dsh-scholar) | DSH Research OS — a fully automated scientific research plugin for DSH (DeepSeek Harness): survey, idea, experiment c… | [🔗](https://cordis.run/plugins/dsh-scholar-research-plugin) |
| [dsh-emoji](https://github.com/hellodigua/dsh-emoji) | Tiny semantic inline emoji for DSH Agent responses | [🔗](https://cordis.run/plugins/dsh-external-dsh-emoji) |
| [@dsh-external/dsh-deep-research](https://github.com/omdsh-dev/dsh-deep-research) | Deep Research orchestrator extension for DeepSeek Harness: an adaptive cybernetics/information-theory deep_research t… | [🔗](https://cordis.run/plugins/dsh-external-dsh-deep-research) |
| [dsh-llm-fallbacks](https://github.com/btspoony/dsh-llm-fallbacks) | Automatic provider/model fallback chains for DeepSeek Harness agents when LLM requests keep failing (retry exhausted,… | [🔗](https://cordis.run/plugins/dsh-llm-fallbacks) |
| [@loserfox/distill](https://github.com/LoserFox/distill) | Automatic conversation reflection and skill distillation for the DeepSeek Harness | [🔗](https://cordis.run/plugins/loserfox-distill) |
| [dsh-sentinel](https://github.com/fuhefei/dsh-sentinel) | Condition-driven agent wakeups for DSH: durable file, process, port, command, HTTP, session turn-end and webhook watc… | [🔗](https://cordis.run/plugins/dsh-external-dsh-sentinel) |
| [dsh-background-agents](https://github.com/perrylink/dsh-background-agents) | Retired: DeepSeek Harness now ships native continuable subagents | [🔗](https://cordis.run/plugins/dsh-background-agents) |
| [dsh-vision-proxy](https://github.com/Flyvhidbwo/dsh-vision-proxy) | DeepSeek brain + automatic image transcription for DeepSeek Harness: a deepseek-vision provider route that transcribe… | [🔗](https://cordis.run/plugins/dsh-vision-proxy) |
| [@deepseek-ai/dsh-security-audit](https://github.com/omdsh-dev/dsh-security-audit) | DSH local security audit tool: read-only scans of config, credential metadata, plugin provenance, session structure a… | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-security-audit) |
| [dsh-record-replay](https://github.com/humblebanana/dsh-record-replay) | Record & Replay for the dsh web GUI: (1) replay every automatically recorded session as a readable timeline, export/i… | [🔗](https://cordis.run/plugins/dsh-record-replay) |
| [@dsh-external/dsh-evolve](https://github.com/william-jin-cmu/dsh-evolve) | 自进化插件：agent 在 session 内随对话按需给自己长出/剪掉能力 —— evolve_add 把 cordis 插件源码落盘并热挂载（下一 step 工具即可见），evolve_remove 可逆卸载，重启自动恢复 | [🔗](https://cordis.run/plugins/dsh-external-dsh-evolve) |
| [@vlln/dsh-loop](https://github.com/vlln/dsh-loop) | 定时循环插件：/loop 命令 + loop 工具 + 活动状态条（官方 dock 槽）+ 设置页（工具暴露开关） | [🔗](https://cordis.run/plugins/dsh-external-dsh-loop) |
| [dsh-browser](https://github.com/ben7am1n/dsh-browser) | Browser automation for DeepSeek Harness: Playwright-powered open/click/type/screenshot/eval tools so the agent can dr… | [🔗](https://cordis.run/plugins/dsh-browser) |
| [dsh-meta-orchestrator](https://github.com/jiruidai/dsh-meta-orchestrator) | A model-native meta-agent plugin for DeepSeek Harness: the model synthesizes task-specific workflows at runtime from … | [🔗](https://cordis.run/plugins/dsh-meta-orchestrator) |
| [dsh-prime-agent](https://github.com/yoke233/dsh-prime-agent) | Persistent TypeScript REPL control plane for DeepSeek Harness | [🔗](https://cordis.run/plugins/dsh-prime-agent) |
| [dsh-plugin-acp](https://github.com/agentic-control-plane/dsh-acp-plugin) | Agentic Control Plane for DeepSeek Harness — check every tool call against your policies before it runs, and keep a d… | [🔗](https://cordis.run/plugins/dsh-plugin-acp) |
| [dsh-monitor](https://github.com/abnerai/dsh-monitor) | Persistent watchers that wake the DeepSeek Harness agent when new messages arrive — the harness analog of Claude Code… | [🔗](https://cordis.run/plugins/dsh-monitor) |
| [dsh-douyin](https://github.com/AnacondaKC/dsh-douyin) | DSH WebUI 侧栏短视频插件：原生播放器、21 个系列选择、直链解析、滚轮历史回放与自动连播 | [🔗](https://cordis.run/plugins/dsh-douyin) |
| [self-control-guard](https://github.com/pandashere/dsh-self-control-guard) | Self-control guard for DeepSeek Harness: intercept host-kill attempts from bash, teach the controlled exit/restart to… | [🔗](https://cordis.run/plugins/self-control-guard) |
| [@dsh-polyglot/bundle](https://github.com/Jesse-njx/dsh-polyglot) | dsh-polyglot — the model switch for DSH: one generic OpenAI-compatible ctx.llm adapter, curated free/cheap DeepSeek p… | [🔗](https://cordis.run/plugins/dsh-polyglot-bundle) |
| [dsh-revive](https://github.com/omdsh-dev/dsh-revive) | DSH 一键复活：重启后给所有被打断的会话自动发送「继续」指令（/revive 命令 + revive_sessions 工具 + 浏览器一键按钮） | [🔗](https://cordis.run/plugins/dsh-revive) |
| [dsh-switch](https://github.com/dongsheng123132/dsh-switch) | Evidence-first model control plane for DeepSeek Harness | [🔗](https://cordis.run/plugins/dsh-switch) |
| [dsh-plugin-verified-search](https://github.com/f0909172434/dsh-plugin-verified-search) | Verified current-source search workflow for DeepSeek Harness | [🔗](https://cordis.run/plugins/dsh-plugin-verified-search) |
| [dsh-playwright-cli](https://github.com/mitao-su/dsh-playwright-cli) | DeepSeek Harness host plugin that wraps the Playwright CLI: install browsers, run tests, and open the HTML report fro… | [🔗](https://cordis.run/plugins/dsh-playwright-cli) |
| [dsh-daily-progress](https://github.com/omdsh-dev/dsh-daily-progress) | DSH daily progress achievement plugin: evening plans for tomorrow, a todo-style checklist today, and a thermometer co… | [🔗](https://cordis.run/plugins/dsh-daily-progress) |
| [@dsh-external/dsh-kb-sieve](https://github.com/omdsh-dev/dsh-kb-sieve) | 知识库筛子：把文档（md/txt/docx/pdf）构建成可审计知识包（references + SQLite FTS5），提供确定性检索（kb_query）与原文精读（kb_read）工具，可生成零脚本的 DSH skill 并动态加载。 | [🔗](https://cordis.run/plugins/dsh-external-dsh-kb-sieve) |
| [@deepseek-ai/dsh-tool-regex](https://github.com/omdsh-dev/dsh-tool-regex) | DSH regex tool: test/find/replace over text plus static pattern explanation, zero-dependency with ReDoS guards | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-tool-regex) |
| [@towzai/dsh-memory](https://github.com/Towzai/dsh-memory) | DSH 跨会话记忆插件 \| Cross-session memory plugin: YAML 存储、embedding 语义检索、标题优先注入、两级自动注入 | [🔗](https://cordis.run/plugins/towzai-dsh-memory) |
| [dsh-nocturne-memory](https://github.com/RealAlexandreAI/dsh-nocturne-memory) | DeepSeek Harness plugin: Nocturne Memory client — automated long-term memory (boot/read/search/create/update) backed … | [🔗](https://cordis.run/plugins/dsh-nocturne-memory) |
| [@fly3366/deepjit](https://github.com/fly3366/DeepJIT) | DeepJIT: JIT-compile repeated agent workflows into skills and flow templates for deepseek-harness (dsh) | [🔗](https://cordis.run/plugins/deepjit) |
| [@deepseek-ai/dsh-ex-setting](https://github.com/omdsh-dev/ex-setting) | Automatic Web settings and composition configuration bundle for DSH | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-ex-setting) |
| [dsh-obsidian-export](https://github.com/xiaomiba0904/dsh-obsidian-export) | DeepSeek Harness (DSH) plugin: export conversations to an Obsidian vault, plus read/search/list/tags/backlinks tools … | [🔗](https://cordis.run/plugins/dsh-obsidian-export) |
| [@shelken/dsh-co-authored-by](https://github.com/shelken/dsh-co-authored-by) | dsh (DeepSeek Harness) 插件:agent 提交代码时自动注入 Co-authored-by 信息 | [🔗](https://cordis.run/plugins/shelken-dsh-co-authored-by) |
| [deepseek-harness-flow](https://github.com/alison-xx/deepseek-harness-flow) | Community visual workflow and multi-model evaluation plugin for DeepSeek Harness | [🔗](https://cordis.run/plugins/deepseek-harness-flow) |
| [@qing3a/dsh-event-auditor](https://github.com/qing3a/dsh-event-auditor) | Harness 事件流审计面板：观察事件类型、分发模式、计数与最近事件，帮助插件作者理解 harness 内部发生了什么 | [🔗](https://cordis.run/plugins/dsh-external-dsh-event-auditor) |

## Themes & UI

> Terminal themes, UI enhancements and display plugins for DeepSeek Harness. *(93 plugins)*

| DeepSeek Harness Plugin | Description | On cordis.run |
|---|---|---|
| [dsh-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) | Better Sidebar for DSH — file tree, editor, changes, tasks and side chat in one column, separate for every conversation | [🔗](https://cordis.run/plugins/dsh-better-sidebar) |
| [@changfenhuang/dsh-genui](https://github.com/omdsh-dev/dsh-genui) | GenUI for DeepSeek Harness: interactive UI components rendered inline in assistant replies via the ```dsh-ui fence — … | [🔗](https://cordis.run/plugins/omdsh-dev-dsh-genui) |
| [@anionex/dsh-vision-toolkit](https://github.com/anionex/dsh-vision-toolkit) | DeepSeek Harness-native integration for agent-vision-toolkit: image Q&A, OCR, grounding, UI restoration, pixel diff, … | [🔗](https://cordis.run/plugins/dsh-external-dsh-vision-toolkit) |
| [@dsh-external/dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) | DeepSeek Harness-native integration for agent-vision-toolkit: image Q&A, OCR, grounding, UI restoration, pixel diff, … | [🔗](https://cordis.run/plugins/dsh-external-dsh-vision-toolkit-plugin) |
| [@nagi-ovo/dsh-ads](https://github.com/Nagi-ovo/dsh-ads) | DSH ad-infestation plugin: localized Chinese portal ads and English scam-ad parody, with fake pop-ups, a jackpot whee… | [🔗](https://cordis.run/plugins/dsh-external-dsh-ads) |
| [@nagi-ovo/dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize) | DSH inline visualization plugin: a visualize tool + bundled skill let the model render interactive HTML fragments as … | [🔗](https://cordis.run/plugins/dsh-external-dsh-visualize) |
| [dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) | Import conversation history from 25+ AI coding agents into DeepSeek Harness as resumable sessions — tool calls, reaso… | [🔗](https://cordis.run/plugins/dsh-chat-import) |
| [@oh-dsh/desktop](https://github.com/hust-open-atom-club/oh-dsh) | Oh-DSH: installable Desktop, Web, and TUI surfaces over DeepSeek Harness | [🔗](https://cordis.run/plugins/oh-dsh-desktop) |
| [@huiliyi37/dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) | dsh-tianshu-tui: an interactive terminal UI plugin for the official DeepSeek Harness — streaming markdown/tool cards,… | [🔗](https://cordis.run/plugins/huiliyi37-dsh-tianshu-tui) |
| [@zseven-w/dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil) | Preview, inspect, and edit real .op OpenPencil design documents inside DSH conversations — headless rendering, a read… | [🔗](https://cordis.run/plugins/zseven-w-dsh-openpencil) |
| [@yejiming/dsh-data-agent](https://github.com/omdsh-dev/dsh-data-agent) | Data Agent for DSH Web and TUI: shared database connections, versioned metadata Catalog governance, secure credential… | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-data-agent) |
| [@openmaic/dsh-openmaic](https://github.com/THU-MAIC/dsh-openmaic) | OpenMAIC for DeepSeek Harness: generate classrooms and render slides, interactive widgets, teaching cards, plus a Soc… | [🔗](https://cordis.run/plugins/openmaic-dsh-openmaic) |
| [dsh-codex](https://github.com/Yan-Zero/dsh-codex) | ChatGPT OAuth, Codex models, search, read_image URL support, and configurable GPT Image generation for DeepSeek Harness | [🔗](https://cordis.run/plugins/dsh-external-dsh-openai-codex) |
| [dsh-web-search-pro](https://github.com/anweat/dsh-web-search-pro) | Enhanced, persistent web search plugin for DeepSeek Harness — multi-engine routing (DeepSeek/Exa/DDG/Bing/Jina + GitH… | [🔗](https://cordis.run/plugins/dsh-web-search-pro) |
| [dsh-context-doctor](https://github.com/Zhenyu98/dsh-context-doctor) | DSH 上下文注入审计插件：统计 AGENTS.md 指令链 / 技能目录 / 工具 schema / MCP 工具的 token 成本，检测重复与冲突；原生 Context Doctor 面板 + context_audit 工具。 | [🔗](https://cordis.run/plugins/dsh-context-doctor) |
| [@huanlin/dsh-plugin-better-sidebar-plugin-office](https://github.com/HuanLinOTO/dsh-plugin-better-sidebar-plugin-office) | DSH web plugin: Office file previewers (.docx/.xlsx/.pptx) for the better-sidebar editor | [🔗](https://cordis.run/plugins/huanlin-dsh-plugin-better-sidebar-plugin-office) |
| [dsh-ui-status-label](https://github.com/alingalingling/ui-status-label) | Configurable running-turn status text for dsh Web: General Settings row plus the conversationStatus provider for the … | [🔗](https://cordis.run/plugins/dsh-ui-status-label) |
| [@huanlin/dsh-plugin-mineru](https://github.com/HuanLinOTO/dsh-plugin-mineru) | DSH plugin exposing MinerU document parsing tools to the model, with a web UI settings page for the API base URL. | [🔗](https://cordis.run/plugins/huanlin-dsh-plugin-mineru) |
| [@openguardrails/dsh-tui](https://github.com/openguardrails/dsh-tui) | Interactive pi-tui terminal front door for DeepSeek Harness agents | [🔗](https://cordis.run/plugins/openguardrails-dsh-tui) |
| [@dsh-external/dsh-minigames](https://github.com/lhh010/dsh-minigames) | DSH Web UI 浮动小游戏窗口：18 款离线小游戏，可扩展游戏注册表。等待模型回复或修 bug 时的摸鱼神器。 | [🔗](https://cordis.run/plugins/dsh-external-dsh-minigames) |
| [dsh-advisor](https://github.com/btspoony/dsh-advisor) | dsh plugin bundle porting the omp advisor subsystem: a per-session reviewer model that observes the primary transcrip… | [🔗](https://cordis.run/plugins/dsh-advisor) |
| [dsh-web-ui-notify](https://github.com/bill9109/dsh-web-ui-notify) | Desktop notifications for DeepSeek Harness approvals, questions, and turn completion — so neither DSH nor you end up … | [🔗](https://cordis.run/plugins/bill9109-dsh-web-ui-notify) |
| [@yejiming/dsh-gomoku](https://github.com/omdsh-dev/dsh-gomoku) | Gomoku (five-in-a-row) for the dsh web GUI: AI move routes, model catalog, and default prompt (node half) plus the co… | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-gomoku) |
| [@dsh-external/dsh-mobile](https://github.com/lehhair/dsh-mobile) | DSH mobile-friendly web UI plugin (PiUI chat-pager mode): on narrow screens the stock three-column frame becomes a ho… | [🔗](https://cordis.run/plugins/dsh-external-dsh-mobile) |
| [@dsh-external/dsh-diff-viewer](https://github.com/lehhair/dsh-diff-viewer) | DSH diff-viewer plugin: PiUI-style visual diff surface (split/unified, change bars, real file line numbers, word-leve… | [🔗](https://cordis.run/plugins/dsh-external-dsh-diff-viewer) |
| [dsh-custom-tool](https://github.com/omdsh-dev/dsh-custom-tool) | DSH custom tools: manage user-defined JavaScript tools in the settings UI with a Monaco editor; the model creates its… | [🔗](https://cordis.run/plugins/dsh-custom-tool) |
| [dsh-drag-and-drop](https://github.com/bill9109/dsh-drag-and-drop) | Drag local files into the DSH Web UI and insert their original filesystem paths without uploading or copying them | [🔗](https://cordis.run/plugins/bill9109-dsh-drag-and-drop) |
| [@dingyi222666/dsh-focus-chat](https://github.com/dingyi222666/dsh-focus-chat) | Claude Code-style focus view for the dsh web GUI: the conversation's condensed reading surface — tool calls folded in… | [🔗](https://cordis.run/plugins/dingyi222666-dsh-focus-chat) |
| [@huanlin/dsh-plugin-yet-another-subagent](https://github.com/HuanLinOTO/dsh-plugin-yet-another-subagent) | Configurable subagent profiles with web UI settings, real-time toolcall/token display, and click-to-navigate child se… | [🔗](https://cordis.run/plugins/huanlin-dsh-plugin-yet-another-subagent) |
| [@xilin3/dsh-prompt-persona](https://github.com/Xilin3/dsh-prompt-persona) | DSH 插件：在设置页可视化编辑系统提示词（deployment:persona-prefix），支持实时预览与保存。已适配 DSH 0.2.0-rc.2（兼容 0.1.7-rc.2 起的契约）。 | [🔗](https://cordis.run/plugins/xilin3-dsh-prompt-persona) |
| [@dsh-external/dsh-side-panel](https://github.com/ccq1/dsh-side-panel) | Git review, terminal, and file workspace panel for DSH Web | [🔗](https://cordis.run/plugins/dsh-external-dsh-side-panel) |
| [@deepseek-ai/dsh-deepresearch](https://github.com/havingautism/dsh-deepresearch) | Evidence-first research workflow with durable state and a Web workspace | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-deepresearch) |
| [@dsh-external/dsh-sidechain](https://github.com/Buyi-wsgzg/dsh-sidechain) | DSH side-conversation plugin: /side and /btw start isolated forked child sessions (Codex /side & /btw semantics). | [🔗](https://cordis.run/plugins/dsh-external-dsh-sidechain) |
| [@dsh-external/dsh-plannotator](https://github.com/titanwings/dsh-plannotator) | Unofficial Plannotator integration for DeepSeek Harness: annotate plans inline and return structured feedback to the … | [🔗](https://cordis.run/plugins/dsh-external-dsh-plannotator) |
| [@your-scope/dsh-plugin-template](https://github.com/omdsh-dev/plugin-template) | Standalone Cordis plugin template for DeepSeek Harness | [🔗](https://cordis.run/plugins/your-scope-dsh-plugin-template) |
| [dsh-explain](https://github.com/yuezengwu/dsh-explain) | DSH learning-mode plugin with a global local-first learning thread. | [🔗](https://cordis.run/plugins/dsh-explain) |
| [deepseek-harness-tui](https://github.com/gxinxing/deepseek-harness-tui) | Interactive terminal UI for deepseek-harness, installed as a dsh profile bundle | [🔗](https://cordis.run/plugins/deepseek-harness-tui) |
| [dsh-balance](https://github.com/TwotwoPiggy/dsh-balance) | DeepSeek 余额实时显示插件: 在 dsh Web UI 输入框下方的统计条(命中率/输入输出 token 行)实时显示账户余额与本次对话的估算消耗 | [🔗](https://cordis.run/plugins/dsh-balance) |
| [@deepseek-ai/dsh-tui](https://github.com/turtle1999/turtle-ui) | Interactive pi-tui terminal front door for DeepSeek Harness agents | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-tui) |
| [task-passport](https://github.com/dongsheng123132/task-passport) | TaskPack: an open, offline task-handoff container | [🔗](https://cordis.run/plugins/task-passport) |
| [dsh-comfyui-canvas](https://github.com/wbin0001/dsh-comfyui-canvas) | Give DeepSeek Harness agents live control of your ComfyUI canvas (local or cloud): embed it as a split-screen tab, th… | [🔗](https://cordis.run/plugins/dsh-comfyui-canvas) |
| [@dsh-external/dsh-split-panes](https://github.com/lehhair/dsh-split-panes) | DSH split-pane conversation plugin: PiUI-style multi-pane conversation surface — split/stack panes, per-pane sessions… | [🔗](https://cordis.run/plugins/dsh-external-dsh-split-panes) |
| [@dsh-cowork/chatnode-wechat](https://github.com/Jesse-njx/dsh-chatnode-wechat) | Chat with, monitor, and approve your DSH agents from WeChat — an iLink gateway + conversation node bundle for DeepSee… | [🔗](https://cordis.run/plugins/dsh-cowork-chatnode-wechat) |
| [@vlln/dsh-task-status](https://github.com/vlln/dsh-task-status) | 后台任务状态条——对话输入区上方的任务进度 UI（官方 dock 槽 + Node 轮询路由） | [🔗](https://cordis.run/plugins/dsh-external-dsh-task-status) |
| [dsh-huadong-bianzuqi](https://github.com/zjl88858/dsh-huadongbianzuqi) | DeepSeek Harness 前端插件：滑动变祖器 | [🔗](https://cordis.run/plugins/dsh-huadong-bianzuqi) |
| [dsh-diff-stat](https://github.com/haoyueqin/dsh-diff-stat) | Inline +N −M diff badges on edit/write tool rows and a per-turn file change summary card for DeepSeek Harness | [🔗](https://cordis.run/plugins/dsh-diff-stat) |
| [dsh-session-hub](https://github.com/Asaiuta/dsh-session-hub) | Aggregate and natively control DeepSeek Harness sessions across multiple remote dsh web servers from one pane: server… | [🔗](https://cordis.run/plugins/dsh-session-hub) |
| [@loserfox/telegram](https://github.com/LoserFox/telegram) | Telegram Bot API bridge plugin: relay Telegram chats to harness agent sessions (long polling, per-chat sessions, HTML… | [🔗](https://cordis.run/plugins/loserfox-telegram) |
| [@dsh-external/dsh-inspect](https://github.com/omdsh-dev/dsh-inspect) | 发现问题 → 修复交付 → 质量复查 的简单闭环插件：checkup（对抗式检查+红队验证）/ fix（根因→修复→验证）/ review（对抗式复查）三个工具，基于官方 workflow 引擎。 | [🔗](https://cordis.run/plugins/dsh-external-dsh-inspect) |
| [dsh-web-archive](https://github.com/renat3u/dsh-web-archive) | DSH Web 客户端插件：把会话里非正文的工具卡片（read/think/bash/...）合并折叠为输入框上方一个可展开的 "Deep Sleeping..." 小列表，前端不再显示一堆工具卡片。 | [🔗](https://cordis.run/plugins/dsh-web-archive) |
| [dsh-plugin-installer](https://github.com/Toukaiteio/dsh-plugin-installer) | DSH 插件商店 + 安装排障技能一体包：Web GUI「插件商店」页签浏览插件目录（名称/介绍/原链接），一键触发安装；内置 dsh-plugin-installer 技能作为安装后端引擎。 | [🔗](https://cordis.run/plugins/dsh-plugin-installer) |
| [dsh-plugin-ds-api-usage](https://github.com/Sev7een/ds-api-usage) | DeepSeek Harness plugin: real-time DeepSeek API balance and usage timeline (cost / tokens / request count), rendered … | [🔗](https://cordis.run/plugins/dsh-plugin-ds-api-usage) |
| [@huanlin/dsh-plugin-spur](https://github.com/HuanLinOTO/dsh-plugin-spur) | A braided whip (辫子) hanging in the chat-flow — grab the tip and swing to send "go work!" to the agent. | [🔗](https://cordis.run/plugins/huanlin-dsh-plugin-spur) |
| [dsh-telegram](https://github.com/ben7am1n/dsh-telegram) | Telegram channel for DeepSeek Harness — rich tables and lists, real image delivery both ways, inline-keyboard questio… | [🔗](https://cordis.run/plugins/dsh-telegram) |
| [dsh-goal-mode](https://github.com/KarlOfLaw/dsh-goal-mode-enhance) | Enhanced goal surface for the DeepSeek Harness web UI: full lifecycle dock above the composer (create / multiline edi… | [🔗](https://cordis.run/plugins/dsh-goal-mode) |
| [@dsh-external/dsh-archive-viewer](https://github.com/keepermttl/dsh-archive-viewer) | 查看已归档会话的 DSH Web 客户端插件：关键词搜索（含对话内容）、排序与标签筛选、内嵌 AI 助手（标准模式 agent）、归档会话标签、列表/网格排列、双语界面与可配置设置；支持阅读对话日志、恢复会话与下载 ZIP 导出。适配… | [🔗](https://cordis.run/plugins/dsh-external-dsh-archive-viewer) |
| [dsh-client-ui-frosted-glass](https://github.com/makuralymi/dsh-webUI-Glass-Theme) | Global frosted-glass (backdrop blur) theme plugin for the dsh web UI with animated light/dark switching, a scheduled … | [🔗](https://cordis.run/plugins/dsh-client-ui-frosted-glass) |
| [dsh-plugin-deepeye](https://github.com/Favio8/dsh-plugin-deepeye) | DeepSeek Harness native plugin: vision capabilities for text-only LLMs (describe, OCR, VQA, layout analysis, clipboard) | [🔗](https://cordis.run/plugins/dsh-plugin-deepeye) |
| [dsh-recall](https://github.com/Mongfayi/dsh-recall) | Conversation history recall for DeepSeek Harness: search the original text of every session (like searching chat reco… | [🔗](https://cordis.run/plugins/dsh-recall) |
| [@xiaoyao-ai/dsh-client-ui-skin-black-whale](https://github.com/147228/dsh-black-whale) | 夕小瑶 × DeepSeek Harness 黑鲸实验室主题皮肤 | [🔗](https://cordis.run/plugins/xiaoyao-ai-dsh-client-ui-skin-black-whale) |
| [@deepseek-ai/dsh-notebooks](https://github.com/havingautism/dsh-notebooks) | Cross-session notebooks with model tools, typed Remote API, and a Web workspace | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-notebooks) |
| [@mattheliu/7d7d](https://github.com/omdsh-dev/7d7d) | 7d7d —— 7k7k 风格的 DSH 游戏门户：在 Web UI 内生成、同步并游玩 HTML5 与自托管 Ruffle Flash 小游戏。 | [🔗](https://cordis.run/plugins/mattheliu-7d7d) |
| [dsh-tui](https://github.com/orriduck/dsh-tui) | A small, session-aware terminal UI for DeepSeek Harness | [🔗](https://cordis.run/plugins/dsh-tui) |
| [@wellorbetter/dsh-product-delivery-workflow](https://github.com/wellorbetter/dsh-product-delivery-workflow) | Product delivery workflow plugin for DeepSeek Harness: a full product-to-release pipeline (research -> PRD -> OpenSpe… | [🔗](https://cordis.run/plugins/wellorbetter-dsh-product-delivery-workflow) |
| [@humanize/dsh-humanize](https://github.com/zevorn/dsh-humanize) | Humanize RLCR bundle for the DeepSeek Harness: DSH skills, Codex review, and the Humanize trajectory view. | [🔗](https://cordis.run/plugins/humanize-dsh-humanize) |
| [dsh-kanban](https://github.com/Ericwong5021/dsh-kanban) | Smoothly Kanban (思磨力看板): external DeepSeek Harness plugin — a cross-session, workspace-scoped kanban board for plans … | [🔗](https://cordis.run/plugins/dsh-kanban) |
| [dsh-tool-underseal](https://github.com/Hyperionjust/dsh-tool-underseal) | Model-facing typed tools wrapping the frozen, reviewed underseal adapter for the DeepSeek Harness | [🔗](https://cordis.run/plugins/dsh-tool-underseal) |
| [dsh-translator](https://github.com/SiYue-ZO/dsh-translator) | A DeepL-style translation surface for dsh: replaces the shell's root frame with a two-pane translator driven by a too… | [🔗](https://cordis.run/plugins/dsh-translator) |
| [dsh-sticky-disclosure](https://github.com/Han-1413141/dsh-sticky-disclosure) | Collapse Think, tool cards and turn-process sections in DeepSeek Harness Desktop and Web; pinned headers and customiz… | [🔗](https://cordis.run/plugins/dsh-sticky-disclosure) |
| [@deepseek-ai/dsh-ultra-ui](https://github.com/havingautism/dsh-ultra-ui) | Codemini-inspired compact disclosure for every DSH Web Tool call | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-ultra-ui) |
| [dsh-prompt-studio](https://github.com/Moeblack/dsh-prompt-studio) | Prompt Studio plugin for DeepSeek Harness: compose runtime prompts, overrides, and request-local synthetic turns in o… | [🔗](https://cordis.run/plugins/dsh-prompt-studio) |
| [dsh-plugin-switch](https://github.com/Nexus-Aethra/DSH-plugin-switch) | DSH plugin marketplace: browse the GitHub dsh-plugin topic, view manifests, and install community plugins. | [🔗](https://cordis.run/plugins/dsh-plugin-switch) |
| [@deepseek-ai/dsh-auto-chess](https://github.com/omdsh-dev/dsh-auto-chess) | Minimal auto chess for the dsh web GUI: AI action routes, model catalog, and default prompt (node half) plus the conv… | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-auto-chess) |
| [@deepseek-ai/dsh-fun-weather](https://github.com/omdsh-dev/dsh-fun-weather) | DSH weather tab and weather-following themes powered by Open-Meteo | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-fun-weather) |
| [@deepseek-ai/dsh-client-ui-skin-miku](https://github.com/stushansusu/dsh-miku-skin) | 初音未来（Hatsune Miku）主题皮肤：蓝紫洋红渐变标题栏与按钮、半透明毛玻璃面板与输入框、可自定义背景图，用于 DeepSeek Harness (DSH) Web GUI | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-client-ui-skin-miku) |
| [dshplug](https://github.com/wuyuanjiang1/dsh2wechat) | DeepSeek Harness 消息桥插件：微信 ClawBot（iLink）。 | [🔗](https://cordis.run/plugins/dshplug) |
| [sidesight](https://github.com/ZhuXinAI/sidesight) | Vision sidecar for text-only coding agents. | [🔗](https://cordis.run/plugins/sidesight) |
| [dsh-plugin-code-review](https://github.com/YYTbit/dsh-plugin-code-review) | Structured code review skill for DeepSeek Harness -- bugs, security, performance, style | [🔗](https://cordis.run/plugins/dsh-plugin-code-review) |
| [dsh-openclaw-acp](https://github.com/BeAChanger/dsh-openclaw-acp) | DeepSeek Harness bundle that exposes a profile as an OpenClaw-compatible ACP agent. | [🔗](https://cordis.run/plugins/dsh-openclaw-acp) |
| [dsh-review-skills](https://github.com/ben7am1n/dsh-review-skills) | Engineering-discipline skill pack for DeepSeek Harness — code review, simplification, plan-then-execute, test-first, … | [🔗](https://cordis.run/plugins/dsh-review-skills) |
| [@chi-hong22/dsh-mdbox](https://github.com/Chi-hong22/dsh-mdbox) | DeepSeek Harness Web composer markdown editing helper: Shift+Enter list continuation with ordered-list auto-renumberi… | [🔗](https://cordis.run/plugins/dsh-external-dsh-mdbox) |
| [dsh-openai-codex-oauth](https://github.com/dyuan311/dsh-openai-codex-oauth) | ChatGPT Plus/Pro OAuth login for DeepSeek Harness openai-codex models | [🔗](https://cordis.run/plugins/dsh-openai-codex-oauth) |
| [dsh-reloader](https://github.com/lin-cheng-lab/dsh-reloader) | DSH 一键重启：安装/更新插件后调用 dsh_reload 工具自动重启 web 界面，无需手动 Ctrl+C。 | [🔗](https://cordis.run/plugins/dsh-reloader) |
| [falsify-dsh](https://github.com/shi275773124/falsify-dsh) | Ask DeepSeek to falsify a file or gate a PR | [🔗](https://cordis.run/plugins/falsify-dsh) |
| [@dsh-plugin/dsh-review-loop](https://github.com/wuxiangru915/dsh-review-loop) | A DeepSeek Harness Cordis plugin. | [🔗](https://cordis.run/plugins/dsh-plugin-dsh-review-loop) |
| [dsh-atuin](https://github.com/RealAlexandreAI/dsh-atuin) | DeepSeek Harness plugin: every user prompt you type (in the web UI) is appended to your atuin shell history, so it sh… | [🔗](https://cordis.run/plugins/dsh-atuin) |
| [dsh-cloudflare-browser-run](https://github.com/RealAlexandreAI/dsh-cloudflare-browser-run) | DeepSeek Harness plugin: web browsing tools (markdown / screenshot / pdf / crawl) powered by Cloudflare Browser Run —… | [🔗](https://cordis.run/plugins/dsh-cloudflare-browser-run) |
| [dsh-tiered-approval](https://github.com/Elaina-real/dsh-tiered-approval) | Tiered auto-review for DeepSeek Harness (DSH): static-rule safety net + LLM reviewer + human fallback | [🔗](https://cordis.run/plugins/dsh-tiered-approval) |
| [dsh-desktop-window](https://github.com/fengzhiyushui/dsh-desktop-window) | DSH desktop-window plugin: opens the DeepSeek Harness Web UI in a standalone app window (auto-open + session-header t… | [🔗](https://cordis.run/plugins/dsh-desktop-window) |
| [@dsh-routines/bundle](https://github.com/Jesse-njx/dsh-routines) | dsh-routines — scheduled agents for DSH: run a prompt on a cron, get the digest where you already are (file digests, … | [🔗](https://cordis.run/plugins/dsh-routines-bundle) |
| [dsh-local-filetree](https://github.com/Mongfayi/dsh-local-filetree) | File tree panel for the DSH Web UI: the right details column shows the current session workspace tree (lazy, read-only). | [🔗](https://cordis.run/plugins/dsh-local-filetree) |
| [dsh-kimi-bridge](https://github.com/pandashere/dsh-kimi-bridge) | Kimi bridge for DeepSeek Harness: call_kimi / kimi_status / kimi_abort / kimi_steer tools plus a WebUI Kimi tab obser… | [🔗](https://cordis.run/plugins/dsh-kimi-bridge) |
| [delivery-review-plugin](https://github.com/xiaoxiao-svg/delivery-review-dsh-plugin) | DSH 专属双 Agent 交付协作插件：/dsh-delivery 命令 + 确定性状态机（JS 纯函数）+ 结构化审查结论（schema 校验）+ Web 活动面板（状态路由+浮层）+ 按任务规模自动分级。基于 DSH 原生能力（… | [🔗](https://cordis.run/plugins/delivery-review-plugin) |

## Data Integration

> Connect DeepSeek Harness to external data sources, APIs and services. *(13 plugins)*

| DeepSeek Harness Plugin | Description | On cordis.run |
|---|---|---|
| [@xmanrui/dsh-im](https://github.com/xmanrui/dsh-im) | 把微信、飞书、企微、钉钉、QQ、Telegram、WhatsApp、Slack、Discord、Matrix接入DSH。 Connect Telegram, WhatsApp, Slack, Discord, Matrix, WeCh… | [🔗](https://cordis.run/plugins/xmanrui-dsh-im) |
| [dsh-pocket](https://github.com/shaobeichen/dsh-pocket) | 把 DeepSeek Harness 装进你的口袋：一个包、一个设置页，手机扫码即同步访问电脑上的 DSH（局域网 + 公网，实时同屏）。 | [🔗](https://cordis.run/plugins/dsh-pocket) |
| [@nanmicoder/dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) | AgentTeams for DeepSeek Harness: multi-agent team collaboration (captain, members, tasks with dependencies, messaging… | [🔗](https://cordis.run/plugins/dsh-agent-teams) |
| [dsh-mcp-panel](https://github.com/perrylink/dsh-mcp-panel) | MCP management console for the official DeepSeek Harness MCP client: /mcp command with health diagnostics and pipelin… | [🔗](https://cordis.run/plugins/dsh-mcp-panel) |
| [@anweat/dsh-browser](https://github.com/anweat/dsh-browser) | Browser runtime plugin for DeepSeek Harness (scoped @anweat) — ships Playwright and Patchright, uses your system Chro… | [🔗](https://cordis.run/plugins/anweat-dsh-browser) |
| [dsh-balance-monitor](https://github.com/jelly-000/dsh-balance-monitor) | DeepSeek Harness (DSH) API 余额监控插件：实时监控 DeepSeek API 余额，低于设定阈值时自动暂停任务并询问用户，支持一键跳转开放平台充值。 | [🔗](https://cordis.run/plugins/dsh-balance-monitor) |
| [dsh-mcp-bridge](https://github.com/edge-echo/dsh-mcp-bridge) | Curated, verified MCP server bundle for DeepSeek Harness (dsh): one install brings demo, memory, filesystem, GitHub, … | [🔗](https://cordis.run/plugins/dsh-mcp-bridge) |
| [dsh-telegram-relay](https://github.com/congchuanling-dot/DSH-Telegram-Relay) | A DeepSeek Harness plugin bundle for Telegram relay integration. | [🔗](https://cordis.run/plugins/dsh-telegram-relay) |
| [dsh-win-notify](https://github.com/MuziIsabel/dsh-win-notify) | DSH plugin: Windows toast notification with sound when an agent task completes. | [🔗](https://cordis.run/plugins/dsh-win-notify) |
| [dsh-task-progress-notifier](https://github.com/sjscy05/dsh-task-progress-notifier) | DeepSeek Harness plugin: track todo_write progress and pop native desktop reminders (bottom-right). | [🔗](https://cordis.run/plugins/dsh-task-progress-notifier) |
| [dsh-deepseek-usage](https://github.com/ben7am1n/dsh-deepseek-usage) | DeepSeek usage monitor for DeepSeek Harness: account balance query and token usage summary as model-callable tools. | [🔗](https://cordis.run/plugins/dsh-deepseek-usage) |
| [dsh-push](https://github.com/kiim-wong/dsh-push) | Push DeepSeek Harness agent lifecycle notifications to configurable channels | [🔗](https://cordis.run/plugins/dsh-push) |
| [dsh-tool-monitor](https://github.com/yoke233/dsh-tool-monitor) | Event-driven monitoring for existing DeepSeek Harness background jobs | [🔗](https://cordis.run/plugins/dsh-tool-monitor) |

## Productivity

> Utilities that make everyday DeepSeek Harness usage faster and easier. *(120 plugins)*

| DeepSeek Harness Plugin | Description | On cordis.run |
|---|---|---|
| [@liustack/modlens](https://github.com/liustack/modlens) | Plug-in vision for text-only LLMs, powered by the free Antigravity CLI | [🔗](https://cordis.run/plugins/liustack-modlens) |
| [dsh-image-gen](https://github.com/shanliuling/dsh-image-gen) | Bring ChatGPT-like image generation to DeepSeek Harness — Gemini, OpenAI, Seedream, DashScope, local ComfyUI & more. | [🔗](https://cordis.run/plugins/dsh-image-gen) |
| [whale-girl](https://github.com/vlln/whale-girl) | DSH Web GUI 内的桌面宠物（QQ 宠物形态） | [🔗](https://cordis.run/plugins/whale-girl) |
| [@anionex/dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind) | Turn-level conversation and workspace rewind for DeepSeek Harness, powered by a persistent Change Ledger | [🔗](https://cordis.run/plugins/dsh-external-turn-rewind) |
| [@anionex/dsh-computer-use](https://github.com/Anionex/dsh-computer-use) | Accessibility-first macOS Computer Use capability for DeepSeek Harness with stale-observation protection, app leases,… | [🔗](https://cordis.run/plugins/dsh-external-dsh-computer-use) |
| [dsh-plugin-template](https://github.com/bugmaker2/dsh-plugin-template) | Dual-side (host + client) DeepSeek Harness plugin template with Typert Remote, React view, tests, lint, and CI. | [🔗](https://cordis.run/plugins/dsh-plugin-template) |
| [dsh-github](https://github.com/PivotStackIntelligence/dsh-github) | Abstract GitHub capability seam (ctx.github) for the DeepSeek Harness — provider registry, execution-time resolution,… | [🔗](https://cordis.run/plugins/dsh-github) |
| [@multica-ai/dsh-runtime](https://github.com/forrestchang/dsh-multica-runtime) | Private DeepSeek Harness runtime bridge for Multica | [🔗](https://cordis.run/plugins/multica-ai-dsh-runtime) |
| [deepseek-pet](https://github.com/keleus/deepseek-pet) | Run Codex Code Pet packages inside the DeepSeek Harness Web UI. | [🔗](https://cordis.run/plugins/deepseek-pet) |
| [dsh-message-edit](https://github.com/Moeblack/dsh-message-edit) | Branch-based editing, rerolling, retrying, and version navigation for DeepSeek Harness conversations | [🔗](https://cordis.run/plugins/dsh-message-edit) |
| [dsh-open-in-vscode](https://github.com/omdsh-dev/dsh-open-in-vscode) | Open a workspace directory in VS Code from the web GUI: an Open in VSCode row in every workspace's overflow menu | [🔗](https://cordis.run/plugins/dsh-open-in-vscode) |
| [dsh-skill-hub](https://github.com/cheshireez/dsh-skill-hub) | dsh web GUI skill hub: browse/search all local skills, per-skill/group toggles, install-time audit (hidden chars, pip… | [🔗](https://cordis.run/plugins/dsh-skill-hub) |
| [dsh-share](https://github.com/hellodigua/dsh-share) | Share DSH Q&As or selected conversation groups as PNG or Markdown. | [🔗](https://cordis.run/plugins/dsh-external-dsh-share) |
| [dsh-interconnect](https://github.com/Chinesezjc/dsh-interconnect) | Cross-instance message/event handoff plugins for DeepSeek Harness (DSH): interconnect service + model-facing tools + … | [🔗](https://cordis.run/plugins/dsh-interconnect) |
| [dsh-claude-move](https://github.com/PerryLink/dsh-claude-move) | Four-source migration wizard: copy Claude Code, Codex, OpenCode and Hermes sessions, memories, skills, instructions a… | [🔗](https://cordis.run/plugins/dsh-claude-move) |
| [dsh-mcp-manager](https://github.com/hyqhyq3/dsh-mcp-manager) | MCP server manager for DeepSeek Harness: OAuth/stdio servers, workspace isolation, and an opt-in on-demand tool broker | [🔗](https://cordis.run/plugins/dsh-mcp-manager) |
| [dsh-milestone](https://github.com/SnowCrescenter-tech/dsh-milestone) | Git-style milestone timeline for DeepSeek Harness: hover for metadata, click to jump to any message | [🔗](https://cordis.run/plugins/dsh-milestone) |
| [@dsh-external/dsh-stickers](https://github.com/william-jin-cmu/dsh-stickers) | 人类 cannot live without 表情包：让 DSH 和用户在 WebUI 里发表情 | [🔗](https://cordis.run/plugins/dsh-external-dsh-stickers) |
| [@0xsline/dsh-spotlight](https://github.com/0xsline/dsh-spotlight) | Keyboard-first command palette for DeepSeek Harness Web | [🔗](https://cordis.run/plugins/dsh-external-dsh-spotlight) |
| [dsh-stock-market](https://github.com/AnacondaKC/dsh-stock-market) | DSH Shanghai and Shenzhen A-share market plugin | [🔗](https://cordis.run/plugins/dsh-stock-market) |
| [dsh-plugin-ramify](https://github.com/yanglongyun/dsh-ramify) | Creative branching canvas plugin for DeepSeek Harness | [🔗](https://cordis.run/plugins/ramify-dsh-ramify) |
| [dsh-provider-model-configurator](https://github.com/LiangYin233/dsh-model-config-sync) | Provider Model Configurator for DeepSeek Harness: view, create, edit, copy and delete model entries (context window, … | [🔗](https://cordis.run/plugins/dsh-model-config-sync) |
| [dsh-balance-meter](https://github.com/Ghost011118/dsh-balance-meter) | DeepSeek account balance and usage readout for the dsh web GUI: queries the official Get User Balance endpoint and sh… | [🔗](https://cordis.run/plugins/dsh-balance-meter) |
| [dsh-openai-codex-auth](https://github.com/yoke233/dsh-openai-codex-auth) | Unofficial OpenAI Codex provider for DeepSeek Harness with ChatGPT subscription sign-in. | [🔗](https://cordis.run/plugins/dsh-openai-codex-auth) |
| [deepseek-manners](https://github.com/Moeblack/deepseek-manners) | 在每次发消息之后给可爱的鲸鱼娘说谢谢（默认「谢谢你，鲸鱼大人」），仅当轮生效 | [🔗](https://cordis.run/plugins/deepseek-manners) |
| [@huanlin/dsh-plugin-ya-workspace-sidebar](https://github.com/HuanLinOTO/dsh-plugin-ya-workspace-sidebar) | Two-level DSH workspace sidebar with global recent sessions and breadcrumb navigation. | [🔗](https://cordis.run/plugins/huanlin-dsh-plugin-ya-workspace-sidebar) |
| [dsh-superpowers](https://github.com/codeAnqiang-ma/dsh-superpowers) | Superpowers (obra/superpowers) for DeepSeek Harness: the software-development methodology skills plus their session b… | [🔗](https://cordis.run/plugins/dsh-superpowers) |
| [dsh-acp-for-bitfun](https://github.com/bobleer/dsh-acp-for-bitfun) | BitFun 与 DSH ACP 交互对接 插件: expose the BitFun agent (https://github.com/GCWing/BitFun) as a subagent provider inside De… | [🔗](https://cordis.run/plugins/dsh-acp-for-bitfun) |
| [codex-plugin-dsh](https://github.com/wingoo/codex-plugin-dsh) | Codex App Server model provider plugin for DeepSeek Harness | [🔗](https://cordis.run/plugins/codex-plugin-dsh) |
| [@huanlin/dsh-plugin-auto-blame](https://github.com/HuanLinOTO/dsh-plugin-auto-blame) | Auto-blame: when a turn closes, asks an LLM for three cynical follow-up prompts and shows them as click-to-send bubbl… | [🔗](https://cordis.run/plugins/huanlin-dsh-plugin-auto-blame) |
| [@huanlin/dsh-plugin-interpreters](https://github.com/HuanLinOTO/dsh-plugin-interpreters) | Exposes run_python and run_node tools with configurable interpreter paths; settings card (via /interpreters/api HTTP … | [🔗](https://cordis.run/plugins/huanlin-dsh-plugin-interpreters) |
| [nowledge-mem-deepseek-harness](https://github.com/nowledge-co/nowledge-mem-deepseek-harness) | One memory layer for every AI tool and agent, packaged for DeepSeek Harness with startup context, prompt-time recall,… | [🔗](https://cordis.run/plugins/nowledge-mem-deepseek-harness) |
| [@zerohackz/dsh-openflowframes](https://github.com/ZeroHackz/OpenFlowFrames) | DeepSeek Harness plugin exposing OpenFlowFrames video frame interpolation (RIFE) as agent tools | [🔗](https://cordis.run/plugins/zerohackz-dsh-openflowframes) |
| [@huanlin/dsh-plugin-d399](https://github.com/HuanLinOTO/dsh-plugin-d399) | 贪玩蓝鲸 — 模型生成时右下角弹出小游戏菜单（wordle / 消消乐，可拓展游戏注册表） | [🔗](https://cordis.run/plugins/huanlin-dsh-plugin-d399) |
| [@huanlin/dsh-plugin-sleep](https://github.com/HuanLinOTO/dsh-plugin-sleep) | DSH plugin exposing a single `sleep` tool that lets the model pause for a configurable number of milliseconds, honori… | [🔗](https://cordis.run/plugins/huanlin-dsh-plugin-sleep) |
| [dsh-agent-message](https://github.com/GengDaPeng/dsh-agent-message) | 跨会话 Agent 通信：让 DeepSeek Harness 里不同的 Agent 会话互相收发消息。 | [🔗](https://cordis.run/plugins/dsh-agent-message) |
| [dsh-plugin-claude-bridge](https://github.com/YYTbit/dsh-plugin-claude-bridge) | Bridge Claude Code's memory, skills, and configuration into DeepSeek Harness — zero migration, full compatibility | [🔗](https://cordis.run/plugins/dsh-plugin-claude-bridge) |
| [dsh-blue-whale-maid](https://github.com/yuxino/dsh-blue-whale-maid) | DeepSeek Harness Web 的蓝鲸女仆桌宠，任务有动静时会在网页边上提醒你 | [🔗](https://cordis.run/plugins/dsh-blue-whale-maid) |
| [dsh-agent-messaging](https://github.com/happyren/dsh-agent-messaging) | Cross-session agent-to-agent messaging for DeepSeek Harness: claims, verification and a decision ledger, so two agent… | [🔗](https://cordis.run/plugins/dsh-agent-messaging) |
| [dizzy-dsh](https://github.com/Acidmoon/DIzzy-DSH) | Dizzy-DSH 插件合集仓库:git clone 后 dsh plugin add 即装,无需 npm 发布。 | [🔗](https://cordis.run/plugins/dizzy-dsh) |
| [dsh-learn-everything](https://github.com/cendaifeng/dsh-learn-everything) | Feynman learning-mode plugin for DeepSeek Harness: /learn on\|off, structured lesson cards, rich HTML teaching. | [🔗](https://cordis.run/plugins/dsh-learn-everything) |
| [dsh-lark-bridge](https://github.com/imetn/dsh-lark-bridge) | DeepSeek Harness plugin: real-time Feishu/Lark notifications when a DSH session pauses for user interaction (permissi… | [🔗](https://cordis.run/plugins/dsh-lark-bridge) |
| [mmv-dspic](https://github.com/sjscy05/matlab-modelsim-vivado-plugin) | MATLAB + ModelSim + Vivado full-flow tools for digital communication IC design tasks — a DeepSeek Harness plugin bundle. | [🔗](https://cordis.run/plugins/mmv-dspic) |
| [@fakechris/dsh-track](https://github.com/fakechris/dsh-track) | Track Bridge: embedded task-management engine for DeepSeek Harness — decision-point protocol, capture wall, and Linea… | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-track) |
| [@dsh-crosstalk/bundle](https://github.com/Jesse-njx/dsh-crosstalk) | dsh-crosstalk — cross-session messaging for DSH: any session on the machine can list and message any other, Claude Co… | [🔗](https://cordis.run/plugins/dsh-crosstalk-bundle) |
| [dsh-pixluna](https://github.com/PixLunaLab/dsh-plugin-pixluna) | PixLuna image source tools for DeepSeek Harness | [🔗](https://cordis.run/plugins/dsh-plugin-pixluna) |
| [dsh-plugin-opencode-bridge](https://github.com/YYTbit/dsh-plugin-opencode-bridge) | Bridge OpenCode's skills and configuration into DeepSeek Harness | [🔗](https://cordis.run/plugins/dsh-plugin-opencode-bridge) |
| [dsh-undo](https://github.com/LingLambda/dsh-undo) | User-side undo/redo for DeepSeek Harness (dsh): the /undo command rolls the transcript back to before the last messag… | [🔗](https://cordis.run/plugins/dsh-undo) |
| [dsh-verification-receipt](https://github.com/030611/dsh-verification-receipt) | Privacy-minimal heuristic per-turn execution summaries for DeepSeek Harness | [🔗](https://cordis.run/plugins/dsh-verification-receipt) |
| [dsh-vision-sidecar](https://github.com/121103qwq/dsh-vision-sidecar) | Add no-key hosted or OpenAI-compatible vision to DeepSeek Harness while keeping the configured reasoning model | [🔗](https://cordis.run/plugins/dsh-vision-sidecar) |
| [dsh-apple-mode](https://github.com/jihongboo/dsh-apple-mode) | Apple Mode for DeepSeek Harness: an agent preset declaring 26 Xcode MCP tools (mcpbridge), Apple platform skills and … | [🔗](https://cordis.run/plugins/dsh-apple-mode) |
| [dsh-longbridge](https://github.com/omdsh-dev/dsh-longbridge) | DSH Longbridge (长桥) HK/US market plugin: quotes, account, positions and order tools plus a settings surface | [🔗](https://cordis.run/plugins/dsh-longbridge) |
| [@deepseek-ai/dsh-sandbox-microsandbox](https://github.com/omdsh-dev/sandbox-micro) | Fail-closed microsandbox microVM provider and model-facing guest tools | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-sandbox-microsandbox) |
| [@dsh-community/dsh-deeplink](https://github.com/qyw233/dsh-deeplink) | DSH WebUI 深链：用 ?session=<会话id> 或 ?workspace=<工程id> 直接打开指定项目对话 | [🔗](https://cordis.run/plugins/dsh-community-dsh-deeplink) |
| [dsh-mobile-control](https://github.com/PangYiMing/dsh-mobile-control) | DSH plugin for controlling mobile devices (ADB / iOS simulator / WDA) | [🔗](https://cordis.run/plugins/dsh-mobile-control) |
| [dsh-report-html](https://github.com/hccccc01333/dsh-report-html) | Generate self-contained interactive HTML reports from Markdown, tables, and chart data | [🔗](https://cordis.run/plugins/dsh-report-html) |
| [dsh-conversation-share](https://github.com/bill9109/dsh-conversation-share) | Select a range of a DeepSeek Harness conversation and share it as a branded PNG long image, with draggable magnetical… | [🔗](https://cordis.run/plugins/bill9109-dsh-conversation-share) |
| [dsh-openapi](https://github.com/Degurechaff57/dsh-openapi) | OpenAPI 3.x discovery and safe API calling tools for DeepSeek Harness. | [🔗](https://cordis.run/plugins/dsh-openapi) |
| [dsh-tool-policy](https://github.com/Drifter-yh/dsh-tool-policy) | Allow, ask, or deny DeepSeek Harness tool calls before execution | [🔗](https://cordis.run/plugins/dsh-tool-policy) |
| [dsh-multimodal](https://github.com/MC5lan/dsh-multimodal) | Multimodal eyes and hands for DeepSeek Harness: vision transcription, OCR, and text-to-image via OpenAI-compatible ba… | [🔗](https://cordis.run/plugins/dsh-multimodal) |
| [@morlay/session-persistence-rdb](https://github.com/morlay/session-persistence-rdb) | RDB durable session persistence backend for the DeepSeek Harness | [🔗](https://cordis.run/plugins/morlay-session-persistence-rdb) |
| [@deepseek-ai/dsh-daily-fortune](https://github.com/omdsh-dev/dsh-daily-fortune) | DSH daily fortune plugin with Guan Yin lots, Tarot spreads, and daily quotes | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-daily-fortune) |
| [@omdsh/dsh-hub](https://github.com/omdsh-dev/dsh-hub) | OMDSH community extension hub built on official DeepSeek Harness contracts | [🔗](https://cordis.run/plugins/omdsh-dsh-hub) |
| [dsh-paddle-ocr](https://github.com/omdsh-dev/dsh-paddle-ocr) | DSH PaddleOCR (百度 PaddleOCR-VL 文档布局解析) plugin: OCR tools plus a settings card and task panel | [🔗](https://cordis.run/plugins/dsh-paddle-ocr) |
| [dsh-tps](https://github.com/Small-tailqwq/dsh-tps) | Running-turn TPS badge for DSH Web: live tokens-per-second inside the Deep diving status row | [🔗](https://cordis.run/plugins/dsh-external-tps) |
| [@smanx/dsh-conversation-indicator](https://github.com/smanx/dsh-conversation-indicator) | Conversation indicator for the DeepSeek Harness web GUI: clickable markers along the transcript scrollbar that jump t… | [🔗](https://cordis.run/plugins/dsh-conversation-indicator) |
| [qiushi-dsh-evidence-audit](https://github.com/030611/qiushi-dsh-evidence-audit) | Observe-only hash-chained evidence receipts for DeepSeek Harness | [🔗](https://cordis.run/plugins/qiushi-dsh-evidence-audit) |
| [dsh-plugin-agent-dashboard](https://github.com/YYTbit/dsh-plugin-agent-dashboard) | Multi-agent dashboard skill for DeepSeek Harness -- status reports, task tracking, progress visualization | [🔗](https://cordis.run/plugins/dsh-plugin-agent-dashboard) |
| [dsh-plugin-codex-bridge](https://github.com/YYTbit/dsh-plugin-codex-bridge) | Bridge OpenAI Codex's memory, skills, and configuration into DeepSeek Harness | [🔗](https://cordis.run/plugins/dsh-plugin-codex-bridge) |
| [dsh-plugin-cost-tracker](https://github.com/YYTbit/dsh-plugin-cost-tracker) | Token cost tracker for DeepSeek Harness -- track usage, calculate costs, budget warnings | [🔗](https://cordis.run/plugins/dsh-plugin-cost-tracker) |
| [dsh-plugin-pi-bridge](https://github.com/YYTbit/dsh-plugin-pi-bridge) | Bridge Pi Agent's skills and configuration into DeepSeek Harness | [🔗](https://cordis.run/plugins/dsh-plugin-pi-bridge) |
| [dsh-telemetry-redactor](https://github.com/030611/dsh-telemetry-redactor) | Export-copy redaction for DeepSeek Harness session telemetry | [🔗](https://cordis.run/plugins/dsh-telemetry-redactor) |
| [dsh-token-usage](https://github.com/hashdiana/dsh-token-usage) | Token-usage statistics for the DeepSeek Harness settings UI: summary cards + 3-month heatmap of real token spend conv… | [🔗](https://cordis.run/plugins/dsh-token-usage) |
| [dsh-turn-index](https://github.com/Simon314620/dsh-turn-index) | 对话轮次索引：Web GUI 右侧边栏列出每一轮用户提问，点击跳转到对应位置 (Turn index sidebar for the DeepSeek Harness web GUI: one entry per user turn,… | [🔗](https://cordis.run/plugins/dsh-turn-index) |
| [deepseek-harness-plugin-mcp](https://github.com/bobleer/deepseek-harness-plugin-mcp) | MCP server that lets any agent discover, install, and run DeepSeek Harness plugins. | [🔗](https://cordis.run/plugins/deepseek-harness-plugin-mcp) |
| [dsh-cost](https://github.com/dongsheng123132/dsh-cost) | Evidence-first token cost ledger and budget checks for DeepSeek Harness | [🔗](https://cordis.run/plugins/dsh-cost) |
| [@jasonjin06/dsh-sound-effects](https://github.com/JasonJin2006/dsh-sound-effects-plugin) | Configurable event sounds for DeepSeek Harness | [🔗](https://cordis.run/plugins/dsh-sound-effects-plugin) |
| [@dsh-external/dsh-web-skins](https://github.com/Moeblack/dsh-skins) | DSH Web 换肤仓库 / DSH Web skins repo — third-party skins for the dsh web GUI (token skins + AI-art backgrounds), install… | [🔗](https://cordis.run/plugins/dsh-external-dsh-web-skins) |
| [dsh-ernie-image](https://github.com/omdsh-dev/dsh-ernie-image) | DSH ERNIE-Image-Turbo text-to-image plugin: generate images via Baidu AI Studio, save them as durable session attachm… | [🔗](https://cordis.run/plugins/dsh-ernie-image) |
| [@deepseek-ai/dsh-fun-typewriter](https://github.com/omdsh-dev/dsh-fun-typewriter) | DSH Typewriter: WebAudio typing ambience with a plugin-owned settings API and zero audio assets | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-fun-typewriter) |
| [@deepseek-ai/dsh-pet-corner](https://github.com/omdsh-dev/dsh-pet-corner) | DSH Pet Corner: a floating pet, keyless pet-image proxy, favorites, and plugin-owned settings API | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-pet-corner) |
| [dsh-voice-funasr](https://github.com/omdsh-dev/dsh-voice-funasr) | DSH web plugin: local offline FunASR voice input (paraformer int8 onnx sidecar, Web Speech fallback, LLM polish). | [🔗](https://cordis.run/plugins/dsh-voice-funasr) |
| [@deepseek-ai/dsh-sandbox-mxc](https://github.com/omdsh-dev/sandbox-mxc) | Stent MXC sandbox sidecar for the DeepSeek Harness | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-sandbox-mxc) |
| [@deepseek-ai/dsh-sandbox-nono](https://github.com/omdsh-dev/sandbox-nono) | nono (Landlock/Seatbelt) backend for the DeepSeek Harness sandbox seam with a vendored fail-closed executor | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-sandbox-nono) |
| [@mattheliu/session-teleport](https://github.com/omdsh-dev/session-teleport) | PostgreSQL-backed single-writer session handoff service for DeepSeek Harness | [🔗](https://cordis.run/plugins/mattheliu-session-teleport) |
| [@sakikotgw/pack-agent](https://github.com/sakikoTGW/pack-agent) | Pack skills, rules, and MCP into .pack.zip and install them into Claude Code, Codex, Cursor, and other harnesses | [🔗](https://cordis.run/plugins/sakikotgw-pack-agent) |
| [dsh-archive-manager](https://github.com/zimixvx/dsh-archive-manager) | Archived-session manager for DSH Web: sidebar footer entry, grouped archive panel, restore/delete with full agent tea… | [🔗](https://cordis.run/plugins/dsh-archive-manager) |
| [dsh-git](https://github.com/walavave/dsh-git) | Git capability bundle for DeepSeek Harness: structured git tools, approval-gated mutations, and auto-checkpoints. | [🔗](https://cordis.run/plugins/dsh-git) |
| [dsh-plugin-auto-docs](https://github.com/YYTbit/dsh-plugin-auto-docs) | Auto documentation generation skill for DeepSeek Harness -- README, API docs, changelogs | [🔗](https://cordis.run/plugins/dsh-plugin-auto-docs) |
| [dsh-plugin-context-compressor](https://github.com/YYTbit/dsh-plugin-context-compressor) | Context compression skill for DeepSeek Harness -- intelligent conversation summarization | [🔗](https://cordis.run/plugins/dsh-plugin-context-compressor) |
| [dsh-tool-approval](https://github.com/ilharp/dsh-tool-approval) | Manual approval for Deepseek Harness (aka "Manual Mode"/"Ask Mode") | [🔗](https://cordis.run/plugins/dsh-tool-approval) |
| [dsh-effort-config](https://github.com/benzhoupo/dsh-effort-config) | 第三方模型思考努力度配置（DeepSeek Harness 插件）：在设置页为模型声明 reasoningEfforts 档位、路由默认档位与 Anthropic token 预算，写入 llm-pi-ai 命名空间；档位调节复用原生… | [🔗](https://cordis.run/plugins/dsh-effort-config) |
| [dsh-conversation-rewind](https://github.com/DTSFO/dsh-conversation-rewind) | Same-Session append-only conversation branches and safe message editing for DeepSeek Harness | [🔗](https://cordis.run/plugins/dsh-conversation-rewind) |
| [dsh-model-modes](https://github.com/DTSFO/dsh-model-modes) | Capability-aware reasoning controls and provider-native Fast mode for the DeepSeek Harness web composer | [🔗](https://cordis.run/plugins/dsh-model-modes) |
| [@jumpserver-east/jumpserver-dsh](https://github.com/jumpserver-east/jumpserver-dsh) | DeepSeek Harness plugin: manage JumpServer assets and operate on them through KoKo | [🔗](https://cordis.run/plugins/dsh-jumpserver) |
| [@deepseek-ai/dsh-tool-scout](https://github.com/omdsh-dev/dsh-scout) | Model-facing environment probe tool for DeepSeek Harness: runtime environment, PATH commands, software versions, and … | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-tool-scout) |
| [@deepseek-ai/dsh-client-web-component](https://github.com/omdsh-dev/web-components) | Web Component adapter that mounts DSH slot trees as native Custom Elements | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-client-web-component) |
| [deepseek-harness-plugin-from-scratch](https://github.com/Opr4Mp3r/deepseek-harness-plugin-from-scratch) | A code-audited, progressive guide to building production-grade DeepSeek Harness plugins. | [🔗](https://cordis.run/plugins/deepseek-harness-plugin-from-scratch) |
| [dsh-reasoning-translator](https://github.com/pinkllo/dsh-reasoning-translator) | DeepSeek Harness plugin: display-layer translation of reasoning and answers via Chrome Translator or an OpenAI-compat… | [🔗](https://cordis.run/plugins/dsh-reasoning-translator) |
| [dsh-capability-inspector](https://github.com/tree201/dsh-capability-inspector) | DeepSeek Harness Doctor: read-only DSH runtime capability diagnostics for tools, models, skills, workspaces, sessions… | [🔗](https://cordis.run/plugins/dsh-capability-inspector) |
| [@deepseek-ai/dsh-agent-budget](https://github.com/vibeinging/dsh-agent-budget) | Durable per-session and agent-tree Token admission budgets | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-agent-budget) |
| [@deepseek-ai/dsh-trace](https://github.com/vibeinging/dsh-trace) | Embedded yiTrace plugin for DeepSeek Harness turns, model steps, and tool calls | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-trace) |
| [@deepseek-ai/dsh-turn-navigator](https://github.com/vibeinging/dsh-turn-navigator) | Compact conversation turn navigation for the DSH Web client | [🔗](https://cordis.run/plugins/deepseek-ai-dsh-turn-navigator) |
| [dsh-pixel-whale](https://github.com/yoke233/dsh-pixel-whale) | A lively pixel-whale loading companion for DeepSeek Harness Web. | [🔗](https://cordis.run/plugins/dsh-pixel-whale) |
| [dsh-balance-display](https://github.com/Liu-ty/dsh-balance-display) | DeepSeek API balance pill for the DSH Web GUI: shows remaining credit in the left sidebar footer with low-balance ale… | [🔗](https://cordis.run/plugins/dsh-balance-display) |
| [dsh-batch-regression](https://github.com/PangYiMing/dsh-batch-regression) | Run one command N rounds and judge by median/distribution instead of a single run | [🔗](https://cordis.run/plugins/dsh-batch-regression) |
| [dsh-claude-marketplace](https://github.com/ben7am1n/dsh-claude-marketplace) | Claude Code compatibility layer for DeepSeek Harness: load .claude skills/commands/agents and install plugins from Cl… | [🔗](https://cordis.run/plugins/dsh-claude-marketplace) |
| [dsh-codex-bridge](https://github.com/pandashere/dsh-codex-bridge) | A DeepSeek Harness plugin that routes text to a base model and images to a configured vision model. | [🔗](https://cordis.run/plugins/dsh-codex-bridge) |
| [dsh-deepseek-balance](https://github.com/lin-cheng-lab/dsh-deepseek-balance) | DeepSeek API balance badge for DeepSeek Harness: a shell.overlay pill showing live account balance | [🔗](https://cordis.run/plugins/dsh-deepseek-balance) |
| [dsh-mcp-proxy](https://github.com/ben7am1n/dsh-mcp-proxy) | Context-cheap MCP access for DeepSeek Harness: two proxy tools instead of every server's full schema set, with lazy c… | [🔗](https://cordis.run/plugins/dsh-mcp-proxy) |
| [dsh-memory](https://github.com/ben7am1n/dsh-memory) | Durable cross-session memory for DeepSeek Harness: local SQLite FTS5 store, three model-facing tools, and a recall pr… | [🔗](https://cordis.run/plugins/dsh-memory) |
| [dsh-port-guard](https://github.com/PangYiMing/dsh-port-guard) | Triage port conflicts: reuse your own live server, switch ports for others, precisely kill zombies | [🔗](https://cordis.run/plugins/dsh-port-guard) |
| [dsh-codex-import](https://github.com/918154429/dsh-codex-import) | Read-only Codex setup compatibility scanner for DeepSeek Harness | [🔗](https://cordis.run/plugins/dsh-codex-import) |
| [dsh-webhook-bridge](https://github.com/ben7am1n/dsh-webhook-bridge) | Generic webhook receiver for DeepSeek Harness — POST to a local endpoint to wake a dsh agent. | [🔗](https://cordis.run/plugins/dsh-webhook-bridge) |
| [dsh-resume-plugin](https://github.com/Demogorgon314/dsh-resume-plugin) | Resume Claude Code and Codex sessions as inert handoff context in DeepSeek Harness | [🔗](https://cordis.run/plugins/dsh-resume-plugin) |
| [dsh-archived-sessions](https://github.com/hashdiana/dsh-archived-sessions) | 在设置面板中新增“已归档会话”分区：列出被归档的会话（默认在侧边栏不可见），点击即可重新打开 | [🔗](https://cordis.run/plugins/dsh-archived-sessions) |
| [dsh-plugin-doctor](https://github.com/lin-cheng-lab/dsh-plugin-doctor) | DSH 插件体检：安装任何插件前检查仓库可访问性、bundle 声明、peer 依赖与本地 DSH 版本兼容性、构建产物完整性，预防 rc 不匹配导致的启动崩溃。 | [🔗](https://cordis.run/plugins/dsh-plugin-doctor) |
| [dsh-plugin-wepre](https://github.com/shujiTech/dsh-plugin-wepre) | DeepSeek Harness plugin: publish single-screen content cards to WePre Next straight from a dsh agent session | [🔗](https://cordis.run/plugins/dsh-plugin-wepre) |
| [@tappass/dsh-governance](https://github.com/tappass/dsh-governance) | The authority layer for agentic AI, as a DeepSeek Harness plugin | [🔗](https://cordis.run/plugins/tappass-dsh-governance) |
| [dsh-skill-manager](https://github.com/bitterSmilezzz/dsh-skill-manager) | In-GUI skill manager for the dsh web GUI: a top-level Skills entry in Settings (movable into the Plugins section) tha… | [🔗](https://cordis.run/plugins/dsh-skill-manager) |

## AI Enhancement

> Improve model capabilities, context and output quality in DeepSeek Harness. *(3 plugins)*

| DeepSeek Harness Plugin | Description | On cordis.run |
|---|---|---|
| [dsh-context](https://github.com/bowenliang123/dsh-context) | A DeepSeek Harness plugin for context insight and management, with context dashboard and context command, for underst… | [🔗](https://cordis.run/plugins/dsh-context) |
| [dsh-vision-router](https://github.com/ysr666/dsh-vision-router) | Eyes for text-only DeepSeek Harness agents: built-in free vision chain + pixel-level tools | [🔗](https://cordis.run/plugins/dsh-vision-router) |
| [@anionex/dsh-vision-toolkit](https://github.com/anionex/dsh-vision-toolkit) | DeepSeek Harness-native integration for agent-vision-toolkit: image Q&A, OCR, grounding, UI restoration, pixel diff, … | [🔗](https://cordis.run/plugins/dsh-external-dsh-vision-toolkit) |

---

## Tutorials & Guides

- [Getting started with cordis.run](https://cordis.run/guides) — install, configure and submit DeepSeek Harness plugins.
- [DeepSeek Harness plugin development guide](https://cordis.run/guides) — how to build a `dsh.bundle` Cordis plugin for DeepSeek Harness.
- [Preset importing guide](https://cordis.run/guides) — install `.dshpreset` agent presets for DeepSeek Harness safely.

## Tools

- [DeepSeek Harness](https://github.com/deepseek-ai/DeepSeek-Harness) — the host application for Cordis plugins.
- [cordis.run](https://cordis.run) — the DeepSeek Harness plugin marketplace: search, install commands, security scans, and plugin claiming.

## Community

- [dsh-plugin topic on GitHub](https://github.com/topics/dsh-plugin) — DeepSeek Harness Cordis plugin repositories on GitHub.
- [Submit a plugin](https://cordis.run/submit) — list your DeepSeek Harness plugin on cordis.run.
- [Report a security issue](https://github.com/web-casa/Awesome-DeepSeek-Harness-Plugins/security) — responsible disclosure.

---

## How this list is generated

This DeepSeek Harness plugin list is auto-generated from [`data/plugins.json`](data/plugins.json) by the cordis.run team.
Each DeepSeek Harness plugin entry links to its cordis.run page where you can find the install command,
security scan report, and bilingual setup guides.

Each entry records its current install source and index status. A listing or a clean status is **not** a security audit: inspect source, permissions, compatibility, and pin the version before installing.

## License

[CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) for the list itself. Plugin code and metadata belong to their respective authors.

