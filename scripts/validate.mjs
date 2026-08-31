import { readFile } from "node:fs/promises";

const dataPath = new URL("../data/plugins.json", import.meta.url);
const allowedCategories = new Set([
  "ai-enhancement",
  "data-integration",
  "dev-assistant",
  "plugin-productivity",
  "themes-ui",
  "workflow",
]);
const allowedSourceTypes = new Set(["github", "registry"]);
const errors = [];

function check(condition, path, message) {
  if (!condition) errors.push(`${path}: ${message}`);
}

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function isNullableString(value) {
  return value === null || typeof value === "string";
}

function isNullableNonNegativeInteger(value) {
  return value === null || (Number.isInteger(value) && value >= 0);
}

function isSafeGithubUrl(value) {
  if (value === null) return true;
  try {
    const url = new URL(value);
    return url.protocol === "https:" && url.hostname === "github.com";
  } catch {
    return false;
  }
}

let data;
try {
  data = JSON.parse(await readFile(dataPath, "utf8"));
} catch (error) {
  console.error(`data/plugins.json: ${error.message}`);
  process.exit(1);
}

const isDataObject = data && typeof data === "object" && !Array.isArray(data);
check(isDataObject, "data", "must be an object");

if (!isDataObject) {
  console.error("Plugin index validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

check(/^\d{4}-\d{2}-\d{2}$/.test(data.version), "data.version", "must use YYYY-MM-DD format");
check(
  typeof data.generatedAt === "string" && !Number.isNaN(Date.parse(data.generatedAt)),
  "data.generatedAt",
  "must be an ISO-compatible timestamp",
);
check(Number.isInteger(data.total) && data.total >= 0, "data.total", "must be a non-negative integer");
check(Array.isArray(data.plugins), "data.plugins", "must be an array");

if (Array.isArray(data.plugins)) {
  check(data.total === data.plugins.length, "data.total", `expected ${data.plugins.length}, received ${data.total}`);

  const seenSlugs = new Map();

  data.plugins.forEach((plugin, index) => {
    const path = `data.plugins[${index}]`;
    check(plugin && typeof plugin === "object" && !Array.isArray(plugin), path, "must be an object");
    if (!plugin || typeof plugin !== "object" || Array.isArray(plugin)) return;

    for (const field of ["slug", "name", "npmPackage", "latestVersion", "installCommand", "cordisUrl"]) {
      check(isNonEmptyString(plugin[field]), `${path}.${field}`, "must be a non-empty string");
    }

    for (const field of ["nameZh", "description", "descriptionZh", "repoUrl", "author", "license", "securityStatus"]) {
      check(isNullableString(plugin[field]), `${path}.${field}`, "must be a string or null");
    }

    check(
      isNullableNonNegativeInteger(plugin.downloadsCached),
      `${path}.downloadsCached`,
      "must be a non-negative integer or null",
    );
    check(
      isNullableNonNegativeInteger(plugin.stars),
      `${path}.stars`,
      "must be a non-negative integer or null",
    );
    check(allowedSourceTypes.has(plugin.sourceType), `${path}.sourceType`, "must be github or registry");
    check(Array.isArray(plugin.categories), `${path}.categories`, "must be an array");

    if (Array.isArray(plugin.categories)) {
      const uniqueCategories = new Set(plugin.categories);
      check(uniqueCategories.size === plugin.categories.length, `${path}.categories`, "must not contain duplicates");
      for (const category of plugin.categories) {
        check(
          typeof category === "string" && allowedCategories.has(category),
          `${path}.categories`,
          `contains unsupported category ${JSON.stringify(category)}`,
        );
      }
    }

    if (isNonEmptyString(plugin.slug)) {
      check(/^[a-z0-9][a-z0-9._-]*$/.test(plugin.slug), `${path}.slug`, "contains unsupported characters");
      const previousIndex = seenSlugs.get(plugin.slug);
      check(previousIndex === undefined, `${path}.slug`, `duplicates data.plugins[${previousIndex}].slug`);
      seenSlugs.set(plugin.slug, index);
      check(
        plugin.cordisUrl === `https://cordis.run/plugins/${plugin.slug}`,
        `${path}.cordisUrl`,
        "must match the plugin slug",
      );
    }

    if (typeof plugin.name === "string") {
      check(!/[\[\]\r\n]/.test(plugin.name), `${path}.name`, "contains unsafe Markdown link characters");
    }

    check(isSafeGithubUrl(plugin.repoUrl), `${path}.repoUrl`, "must be null or an https://github.com URL");
    if (typeof plugin.installCommand === "string") {
      check(
        plugin.installCommand.startsWith("dsh plugin --profile <name> add "),
        `${path}.installCommand`,
        "must use the documented one-line install format",
      );
    }
  });
}

if (errors.length > 0) {
  console.error(`Plugin index validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Validated ${data.plugins.length} unique plugin entries.`);
