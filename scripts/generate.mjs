/**
 * 从 data/plugins.json 生成 README.md（英文）与 README.zh.md（中文）。
 * awesome 仓库专用，零依赖。
 *
 * ⚠️ 与主仓库 scripts/plugins/generate-awesome.ts 保持同步（逻辑一致，仅 TS/JS 语法差异）。
 * 改动本文件时，必须同步更新主仓库的 generate-awesome.ts。
 *
 * 用法: node scripts/generate.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const CATEGORY_META = {
  "dev-assistant": {
    en: { name: "Dev Assistants", emoji: "🧠", blurb: "Coding, code review, SQL and developer workflow plugins for DeepSeek Harness." },
    zh: { name: "开发助手", emoji: "🧠", blurb: "面向 DeepSeek Harness 的编程、代码审查、SQL 与开发工作流插件。" },
  },
  "workflow": {
    en: { name: "Workflow & Automation", emoji: "🔁", blurb: "Multi-step orchestration, task scheduling and agent workflow plugins for DeepSeek Harness." },
    zh: { name: "工作流与自动化", emoji: "🔁", blurb: "DeepSeek Harness 多步骤编排、任务调度与智能体工作流插件。" },
  },
  "themes-ui": {
    en: { name: "Themes & UI", emoji: "🎨", blurb: "Terminal themes, UI enhancements and display plugins for DeepSeek Harness." },
    zh: { name: "主题与界面", emoji: "🎨", blurb: "DeepSeek Harness 终端主题、界面增强与显示类插件。" },
  },
  "data-integration": {
    en: { name: "Data Integration", emoji: "🔌", blurb: "Connect DeepSeek Harness to external data sources, APIs and services." },
    zh: { name: "数据集成", emoji: "🔌", blurb: "把 DeepSeek Harness 连接到外部数据源、API 与服务。" },
  },
  "plugin-productivity": {
    en: { name: "Productivity", emoji: "⚡", blurb: "Utilities that make everyday DeepSeek Harness usage faster and easier." },
    zh: { name: "效率工具", emoji: "⚡", blurb: "让日常 DeepSeek Harness 使用更快更顺手的实用插件。" },
  },
  "ai-enhancement": {
    en: { name: "AI Enhancement", emoji: "✨", blurb: "Improve model capabilities, context and output quality in DeepSeek Harness." },
    zh: { name: "AI 增强", emoji: "✨", blurb: "提升 DeepSeek Harness 模型能力、上下文与输出质量。" },
  },
};

const esc = (s) => s.replace(/\|/g, "\\|").replace(/\n/g, " ");
const slug = (s) => s.toLowerCase().replace(/[^\p{L}\p{N} ]/gu, "").replace(/ /g, "-");
const firstSentence = (desc) => {
  if (!desc) return "A DeepSeek Harness Cordis plugin.";
  const cleaned = desc.replace(/\s+/g, " ").trim();
  const cut = cleaned.split(/\.\s/)[0] ?? cleaned;
  return cut.length > 120 ? `${cut.slice(0, 117)}…` : cut;
};
const firstSentenceZh = (desc) => {
  if (!desc) return "一个 DeepSeek Harness Cordis 插件。";
  const cleaned = desc.replace(/\s+/g, " ").trim();
  const cut = cleaned.split(/[。！？]\s*/)[0] ?? cleaned;
  return cut.length > 80 ? `${cut.slice(0, 77)}…` : cut;
};

const data = JSON.parse(readFileSync(join(process.cwd(), "data", "plugins.json"), "utf8"));
const plugins = data.plugins;

const byCat = new Map();
for (const p of plugins) {
  for (const c of p.categories) {
    if (!byCat.has(c)) byCat.set(c, []);
    byCat.get(c).push(p);
  }
}
const usedCats = Object.keys(CATEGORY_META).filter((c) => (byCat.get(c)?.length ?? 0) > 0);
const uncat = plugins.filter((p) => p.categories.length === 0);

// ────────────────────────── 英文 README ──────────────────────────

function genEn() {
  const lines = [];
  const push = (s = "") => lines.push(s);

  push("# Awesome DeepSeek Harness Plugins");
  push();
  push("> The official, auto-generated awesome list for the **DeepSeek Harness (DSH)** Cordis plugin ecosystem —");
  push("> curated by [cordis.run](https://cordis.run), the DeepSeek Harness plugin marketplace.");
  push();
  push(`**${data.total} DeepSeek Harness plugins** · curated from the [cordis.run open plugin index](data/plugins.json).`);
  push();
  push("Every listed DeepSeek Harness plugin has a **one-line install command** and a **security scan status** on its cordis.run page.");
  push();
  push("[中文版](README.zh.md) | English");
  push();
  push("---");
  push();
  push("## What is DeepSeek Harness?");
  push();
  push("**DeepSeek Harness (DSH)** is an agent harness for DeepSeek models. Its plugin system — **Cordis** —");
  push("lets you install npm packages that declare a `dsh.bundle` and patch them into a DSH profile.");
  push("This list indexes **DeepSeek Harness Cordis plugins** that are verified against the npm registry");
  push("and listed on [cordis.run](https://cordis.run).");
  push();
  push("## Contents");
  push();
  for (const c of usedCats) {
    const meta = CATEGORY_META[c].en;
    push(`- [${meta.emoji} ${meta.name}](#${slug(meta.name)})`);
  }
  if (uncat.length > 0) push("- [📦 Other Plugins](#other-plugins)");
  push("- [📖 Tutorials & Guides](#tutorials--guides)");
  push("- [🛠 Tools](#tools)");
  push("- [👥 Community](#community)");
  push();
  push("---");
  push();

  for (const c of usedCats) {
    const meta = CATEGORY_META[c].en;
    const items = byCat.get(c).sort((a, b) => (b.stars ?? 0) - (a.stars ?? 0));
    // 标题不放 emoji：GitHub 会把 emoji 后的空格转成前导连字符，导致 TOC 锚点不匹配。
    push(`## ${meta.name}`);
    push();
    push(`> ${meta.blurb} *(${items.length} plugins)*`);
    push();
    push("| DeepSeek Harness Plugin | Description | On cordis.run |");
    push("|---|---|---|");
    for (const p of items) {
      const desc = firstSentence(p.description);
      const secure = p.securityStatus === "clean" ? "" : ` · ⚠️ ${p.securityStatus}`;
      push(`| [${esc(p.name)}](${p.repoUrl || p.cordisUrl}) | ${esc(desc)}${secure} | [🔗](${p.cordisUrl}) |`);
    }
    push();
  }

  if (uncat.length > 0) {
    push("## Other Plugins");
    push();
    push("| DeepSeek Harness Plugin | Description | On cordis.run |");
    push("|---|---|---|");
    for (const p of uncat) {
      push(`| [${esc(p.name)}](${p.repoUrl || p.cordisUrl}) | ${esc(firstSentence(p.description))} | [🔗](${p.cordisUrl}) |`);
    }
    push();
  }

  push("---");
  push();
  push("## Tutorials & Guides");
  push();
  push("- [Getting started with cordis.run](https://cordis.run/guides) — install, configure and submit DeepSeek Harness plugins.");
  push("- [DeepSeek Harness plugin development guide](https://cordis.run/guides) — how to build a `dsh.bundle` Cordis plugin for DeepSeek Harness.");
  push("- [Preset importing guide](https://cordis.run/guides) — install `.dshpreset` agent presets for DeepSeek Harness safely.");
  push();
  push("## Tools");
  push();
  push("- [DeepSeek Harness](https://github.com/deepseek-ai/DeepSeek-Harness) — the host application for Cordis plugins.");
  push("- [cordis.run](https://cordis.run) — the DeepSeek Harness plugin marketplace: search, install commands, security scans, and plugin claiming.");
  push();
  push("## Community");
  push();
  push("- [dsh-plugin topic on GitHub](https://github.com/topics/dsh-plugin) — DeepSeek Harness Cordis plugin repositories on GitHub.");
  push("- [Submit a plugin](https://cordis.run/plugins/submit) — list your DeepSeek Harness plugin on cordis.run.");
  push("- [Report a security issue](https://github.com/web-casa/Awesome-DeepSeek-Harness-Plugins/security) — responsible disclosure.");
  push();
  push("---");
  push();
  push("## How this list is generated");
  push();
  push("This DeepSeek Harness plugin list is auto-generated from [`data/plugins.json`](data/plugins.json) by the cordis.run team.");
  push("Each DeepSeek Harness plugin entry links to its cordis.run page where you can find the install command,");
  push("security scan report, and bilingual setup guides.");
  push();
  push("Unlike community-maintained indexes, every DeepSeek Harness plugin here is **verified against the npm registry and checked for a valid `dsh.bundle` declaration** before listing.");
  push();
  push("## License");
  push();
  push("[CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) for the list itself. Plugin code and metadata belong to their respective authors.");
  push();

  return lines.join("\n") + "\n";
}

// ────────────────────────── 中文 README ──────────────────────────

function genZh() {
  const lines = [];
  const push = (s = "") => lines.push(s);

  push("# Awesome DeepSeek Harness 插件");
  push();
  push("> **DeepSeek Harness（DSH）** Cordis 插件生态的官方自动生成 awesome list ——");
  push("> 由 [cordis.run](https://cordis.run)（DeepSeek Harness 插件市场）策展维护。");
  push();
  push(`**${data.total} 个 DeepSeek Harness 插件** · 数据来自 [cordis.run 开放插件索引](data/plugins.json)。`);
  push();
  push("每个收录的 DeepSeek Harness 插件都有**一行安装命令**和 **cordis.run 安全扫描状态**。");
  push();
  push("[English](README.md) | 中文版");
  push();
  push("---");
  push();
  push("## 什么是 DeepSeek Harness？");
  push();
  push("**DeepSeek Harness（DSH）** 是面向 DeepSeek 模型的智能体运行框架。它的插件体系 **Cordis**");
  push("允许你安装声明了 `dsh.bundle` 的 npm 包，并把它作为补丁层挂载到 DSH profile。");
  push("本列表收录经过 npm registry 校验、并在 [cordis.run](https://cordis.run) 上架的 **DeepSeek Harness Cordis 插件**。");
  push();
  push("## 目录");
  push();
  for (const c of usedCats) {
    const meta = CATEGORY_META[c].zh;
    push(`- [${meta.emoji} ${meta.name}](#${slug(meta.name)})`);
  }
  if (uncat.length > 0) push("- [📦 其他插件](#其他插件)");
  push("- [📖 教程与指南](#教程与指南)");
  push("- [🛠 工具](#工具)");
  push("- [👥 社区](#社区)");
  push();
  push("---");
  push();

  for (const c of usedCats) {
    const meta = CATEGORY_META[c].zh;
    const items = byCat.get(c).sort((a, b) => (b.stars ?? 0) - (a.stars ?? 0));
    // 标题不放 emoji：GitHub 会把 emoji 后的空格转成前导连字符，导致 TOC 锚点不匹配。
    push(`## ${meta.name}`);
    push();
    push(`> ${meta.blurb} *(${items.length} 个插件)*`);
    push();
    push("| DeepSeek Harness 插件 | 简介 | cordis.run |");
    push("|---|---|---|");
    for (const p of items) {
      const name = p.nameZh || p.name;
      const desc = firstSentenceZh(p.descriptionZh || p.description);
      const secure = p.securityStatus === "clean" ? "" : ` · ⚠️ ${p.securityStatus}`;
      push(`| [${esc(name)}](${p.repoUrl || p.cordisUrl}) | ${esc(desc)}${secure} | [🔗](${p.cordisUrl}) |`);
    }
    push();
  }

  if (uncat.length > 0) {
    push("## 其他插件");
    push();
    push("| DeepSeek Harness 插件 | 简介 | cordis.run |");
    push("|---|---|---|");
    for (const p of uncat) {
      push(`| [${esc(p.nameZh || p.name)}](${p.repoUrl || p.cordisUrl}) | ${esc(firstSentenceZh(p.descriptionZh || p.description))} | [🔗](${p.cordisUrl}) |`);
    }
    push();
  }

  push("---");
  push();
  push("## 教程与指南");
  push();
  push("- [cordis.run 快速上手](https://cordis.run/guides) — 安装、配置与提交 DeepSeek Harness 插件。");
  push("- [DeepSeek Harness 插件开发指南](https://cordis.run/guides) — 如何为 DeepSeek Harness 开发 `dsh.bundle` Cordis 插件。");
  push("- [预设导入指南](https://cordis.run/guides) — 安全安装 DeepSeek Harness 的 `.dshpreset` 智能体预设。");
  push();
  push("## 工具");
  push();
  push("- [DeepSeek Harness](https://github.com/deepseek-ai/DeepSeek-Harness) — Cordis 插件的宿主应用。");
  push("- [cordis.run](https://cordis.run) — DeepSeek Harness 插件市场：搜索、安装命令、安全扫描与插件认领。");
  push();
  push("## 社区");
  push();
  push("- [GitHub dsh-plugin topic](https://github.com/topics/dsh-plugin) — GitHub 上的 DeepSeek Harness Cordis 插件仓库。");
  push("- [提交插件](https://cordis.run/plugins/submit) — 把你的 DeepSeek Harness 插件上架到 cordis.run。");
  push("- [报告安全问题](https://github.com/web-casa/Awesome-DeepSeek-Harness-Plugins/security) — 负责任披露。");
  push();
  push("---");
  push();
  push("## 本列表如何生成");
  push();
  push("本 DeepSeek Harness 插件列表由 cordis.run 团队从 [`data/plugins.json`](data/plugins.json) 自动生成。");
  push("每个 DeepSeek Harness 插件条目都链接到其 cordis.run 页面，可查看安装命令、安全扫描报告与双语配置教程。");
  push();
  push("与社区维护的索引不同，这里的每个 DeepSeek Harness 插件都**经过 npm registry 校验和 `dsh.bundle` 声明检查**后才会上架。");
  push();
  push("## License");
  push();
  push("列表本身采用 [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/)。插件代码与元数据归各自作者所有。");
  push();

  return lines.join("\n") + "\n";
}

writeFileSync(join(process.cwd(), "README.md"), genEn());
console.log(`generated README.md`);
writeFileSync(join(process.cwd(), "README.zh.md"), genZh());
console.log(`generated README.zh.md`);
