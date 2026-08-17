/**
 * 从 data/plugins.json 生成 README.md（awesome 仓库专用，零依赖）。
 *
 * ⚠️ 与主仓库 scripts/plugins/generate-awesome.ts 保持同步（逻辑一致，仅 TS/JS 语法差异）。
 * 改动本文件时，必须同步更新主仓库的 generate-awesome.ts。
 *
 * 用法: node scripts/generate.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";

const CATEGORY_META = {
  "dev-assistant": { en: "Dev Assistants", emoji: "🧠", blurb: "Coding, code review, SQL and developer workflow plugins." },
  "workflow": { en: "Workflow & Automation", emoji: "🔁", blurb: "Multi-step orchestration, task scheduling and agent workflow plugins." },
  "themes-ui": { en: "Themes & UI", emoji: "🎨", blurb: "Terminal themes, UI enhancements and display plugins." },
  "data-integration": { en: "Data Integration", emoji: "🔌", blurb: "Connect DSH to external data sources, APIs and services." },
  "plugin-productivity": { en: "Productivity", emoji: "⚡", blurb: "Utilities that make everyday DSH usage faster and easier." },
  "ai-enhancement": { en: "AI Enhancement", emoji: "✨", blurb: "Improve model capabilities, context and output quality." },
};

const esc = (s) => s.replace(/\|/g, "\\|").replace(/\n/g, " ");
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9 ]/g, "").replace(/ /g, "-");
const firstSentence = (desc) => {
  if (!desc) return "A DSH Cordis plugin.";
  const cleaned = desc.replace(/\s+/g, " ").trim();
  const cut = cleaned.split(/\.\s/)[0] ?? cleaned;
  return cut.length > 120 ? `${cut.slice(0, 117)}…` : cut;
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

const lines = [];
const push = (s = "") => lines.push(s);

push("# Awesome DSH Cordis Plugins");
push();
push("> The official, auto-generated awesome list for the DeepSeek Harness Cordis plugin ecosystem —");
push("> curated by [cordis.run](https://cordis.run), the DSH Cordis plugin marketplace.");
push();
push(`**${data.total} plugins** · curated from the [cordis.run open plugin index](data/plugins.json).`);
push();
push("Every listed plugin has a **one-line install command** and a **security scan status** on its cordis.run page.");
push();
push("---");
push();
push("## Contents");
push();
for (const c of usedCats) {
  const meta = CATEGORY_META[c];
  push(`- [${meta.emoji} ${meta.en}](#${slug(meta.en)})`);
}
if (uncat.length > 0) push("- [📦 Other Plugins](#other-plugins)");
push("- [📖 Tutorials & Guides](#tutorials--guides)");
push("- [🛠 Tools](#tools)");
push("- [👥 Community](#community)");
push();
push("---");
push();

for (const c of usedCats) {
  const meta = CATEGORY_META[c];
  const items = byCat.get(c).sort((a, b) => (b.stars ?? 0) - (a.stars ?? 0));
  // 标题不放 emoji：GitHub 会把 emoji 后的空格转成前导连字符，导致 TOC 锚点不匹配。
  push(`## ${meta.en}`);
  push();
  push(`> ${meta.blurb} *(${items.length} plugins)*`);
  push();
  push("| Plugin | Description | On cordis.run |");
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
  push("| Plugin | Description | On cordis.run |");
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
push("- [Getting started with cordis.run](https://cordis.run/guides) — install, configure and submit plugins.");
push("- [DSH plugin development guide](https://cordis.run/guides) — how to build a `dsh.bundle` plugin.");
push("- [Preset importing guide](https://cordis.run/guides) — install `.dshpreset` agent presets safely.");
push();
push("## Tools");
push();
push("- [DeepSeek Harness](https://github.com/deepseek-ai/DeepSeek-Harness) — the host application for cordis plugins.");
push("- [cordis.run](https://cordis.run) — search, install commands, security scans, and plugin claiming.");
push();
push("## Community");
push();
push("- [dsh-plugin topic on GitHub](https://github.com/topics/dsh-plugin) — plugin repositories on GitHub.");
push("- [Submit a plugin](https://cordis.run/plugins/submit) — list your plugin on cordis.run.");
push("- [Report a security issue](https://github.com/web-casa/Awesome-DeepSeek-Harness-Plugins/security) — responsible disclosure.");
push();
push("---");
push();
push("## How this list is generated");
push();
push("This README is auto-generated from [`data/plugins.json`](data/plugins.json) by the cordis.run team.");
push("Each plugin entry links to its cordis.run page where you can find the install command,");
push("security scan report, and bilingual setup guides.");
push();
push("Unlike community-maintained indexes, every entry here is **verified against the npm registry and checked for a valid `dsh.bundle` declaration** before listing.");
push();
push("## License");
push();
push("[CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) for the list itself. Plugin code and metadata belong to their respective authors.");
push();

const content = lines.join("\n") + "\n";
writeFileSync(join(process.cwd(), "README.md"), content);
console.log(`generated ${content.split("\n").length} lines → README.md`);
