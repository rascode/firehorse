#!/usr/bin/env node
/**
 * Firehorse MCP server — phase 1 free guide tools.
 * Data only from the package: dist/index.json, agent/*, dist/tokens.json,
 * dist/themes.json, index-ledger.json. No network calls.
 */
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import * as z from "zod/v4";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));

const loadJson = (rel) => JSON.parse(readFileSync(join(root, rel), "utf8"));
const loadText = (rel) => readFileSync(join(root, rel), "utf8");

const index = loadJson("dist/index.json");
const ledger = loadJson("index-ledger.json");
const tokensDoc = loadJson("dist/tokens.json");
const themesDoc = loadJson("dist/themes.json");
const systemMd = loadText("agent/system.md");

const SITE = index.system?.site || "https://firehorse.dev";
const CSS = `${SITE}/firehorse.css`;

const byId = new Map();
for (const f of index.families) {
  byId.set(f.id, { kind: "family", family: f, record: f });
  for (const g of f.groups || []) byId.set(g.id, { kind: "group", family: f, group: g, record: g });
  for (const v of f.variants || []) byId.set(v.id, { kind: "variant", family: f, variant: v, record: v });
}

const resolveId = (raw) => {
  const id = String(raw || "").trim().toUpperCase();
  if (!id) return { error: "id is required" };
  if (ledger.retired?.[id] && ledger.moved?.[id]) {
    const to = ledger.moved[id];
    const hit = byId.get(to);
    return {
      id: to,
      requested: id,
      retired: true,
      replacement: to,
      note: `${id} is retired; use ${to}. ${ledger.retired[id]}`,
      hit,
    };
  }
  if (ledger.retired?.[id]) {
    return { error: `${id} is retired (${ledger.retired[id]}) and has no replacement.` };
  }
  const hit = byId.get(id);
  if (!hit) return { error: `Unknown Index ID ${id}` };
  return { id, requested: id, hit };
};

const text = (obj) => ({ content: [{ type: "text", text: typeof obj === "string" ? obj : JSON.stringify(obj, null, 2) }] });

const listFamilies = () =>
  index.families.map((f) => ({
    id: f.id,
    name: f.name,
    section: f.section,
    page: f.page,
    url: f.url || `${SITE}${f.page || "/"}#${f.id}`,
    variantCount: (f.variants || []).length,
  }));

const getComponent = (rawId) => {
  const resolved = resolveId(rawId);
  if (resolved.error) return { error: resolved.error };
  const { hit, id, requested, retired, note } = resolved;
  const { family, group, variant, kind, record } = hit;
  const markup =
    kind === "variant"
      ? variant.markup
      : kind === "group"
        ? group.markup || family.markup
        : family.markup;
  const classes = record.classes || family.classes || [];
  const knobs = record.config && Object.keys(record.config).length ? record.config : undefined;
  return {
    id,
    requested,
    retired: !!retired,
    note,
    kind,
    name: record.name || family.name,
    family: { id: family.id, name: family.name },
    group: group ? { id: group.id, name: group.name } : variant ? { id: variant.group } : undefined,
    classes,
    knobs,
    markup,
    page: family.page,
    url: family.url || `${SITE}${family.page || "/"}#${id}`,
  };
};

const searchComponents = (query) => {
  const q = String(query || "").trim().toLowerCase();
  if (!q) return [];
  const hits = [];
  for (const f of index.families) {
    const hay = [f.id, f.name, f.summary, ...(f.classes || [])].join(" ").toLowerCase();
    if (hay.includes(q)) hits.push({ id: f.id, kind: "family", name: f.name, url: f.url });
    for (const g of f.groups || []) {
      const gh = [g.id, g.name, g.summary].join(" ").toLowerCase();
      if (gh.includes(q)) hits.push({ id: g.id, kind: "group", name: g.name, family: f.id, url: f.url });
    }
    for (const v of f.variants || []) {
      const vh = [v.id, v.name, ...(v.classes || [])].join(" ").toLowerCase();
      if (vh.includes(q)) hits.push({ id: v.id, kind: "variant", name: v.name, family: f.id, classes: v.classes, url: f.url });
    }
  }
  return hits.slice(0, 50);
};

const getTokens = ({ tier, prefix } = {}) => {
  const out = [];
  for (const [name, meta] of Object.entries(tokensDoc.tokens || {})) {
    if (tier && meta.tier !== tier) continue;
    if (prefix && !name.startsWith(prefix) && !name.startsWith(`--${prefix.replace(/^--/, "")}`)) continue;
    const value = meta.$value;
    const entry = { name, type: meta.$type, tier: meta.tier, group: meta.group, value };
    if (typeof value === "string" && value.includes("light-dark(")) {
      const m = value.match(/light-dark\(\s*([^,]+)\s*,\s*([^)]+)\s*\)/);
      if (m) {
        entry.light = m[1].trim();
        entry.dark = m[2].trim();
      }
    }
    out.push(entry);
  }
  return out;
};

const listThemes = () =>
  (themesDoc.themes || []).map((t) => ({
    name: t.name,
    label: t.label,
    tagline: t.tagline,
    description: t.description,
    base: !!t.base,
    line: t.line,
    voice: t.voice,
  }));

const getTheme = (name) => {
  const key = String(name || "").trim().toLowerCase();
  const theme = (themesDoc.themes || []).find((t) => t.name === key || t.label?.toLowerCase() === key);
  if (!theme) return { error: `Unknown theme ${name}` };
  return theme;
};

const composePage = (ids) => {
  const list = Array.isArray(ids) ? ids : [];
  const blocks = [];
  const notes = [];
  for (const raw of list) {
    const c = getComponent(raw);
    if (c.error) {
      notes.push(`<!-- ${raw}: ${c.error} -->`);
      continue;
    }
    if (c.note) notes.push(`<!-- ${c.note} -->`);
    blocks.push(`<!-- ${c.id} · ${c.name} -->\n${c.markup || `<!-- no markup for ${c.id} -->`}`);
  }
  const ref = index.system?.reference || `<meta name="design-system" content="firehorse@${pkg.version}">\n<link rel="design-system" href="${SITE}/index.json">`;
  return `<!doctype html>
<html lang="en" data-fh-scheme="auto" data-fh-theme="firehorse">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Firehorse compose</title>
  ${ref}
  <link rel="stylesheet" href="${CSS}">
</head>
<body class="fh-page">
<main class="fh-main fh-frame">
  <div class="fh-stack fh-stack--xl">
${notes.concat(blocks).map((b) => `    ${b.replace(/\n/g, "\n    ")}`).join("\n\n")}
  </div>
</main>
</body>
</html>
`;
};

export const tools = {
  list_families: listFamilies,
  get_component: getComponent,
  search_components: (q) => searchComponents(typeof q === "string" ? q : q?.query),
  get_tokens: getTokens,
  get_theme: (n) => getTheme(typeof n === "string" ? n : n?.name),
  list_themes: listThemes,
  get_rules: () => systemMd,
  compose_page: (a) => composePage(a?.ids ?? a),
};

const server = new McpServer({ name: "firehorse", version: pkg.version });

server.registerTool("list_families", {
  description: "List Firehorse Index families: id, name, section, page URL, variant count.",
}, async () => text(tools.list_families()));

server.registerTool("get_component", {
  description: "Exact markup, classes, knobs and page URL for a family, group or variant Index ID. Retired IDs return their replacement.",
  inputSchema: z.object({ id: z.string().describe("Index ID, e.g. CUB-1.4 or CUB-04") }),
}, async ({ id }) => text(tools.get_component(id)));

server.registerTool("search_components", {
  description: "Search Firehorse components by name, class or Index ID.",
  inputSchema: z.object({ query: z.string().describe("Search string") }),
}, async ({ query }) => text(tools.search_components(query)));

server.registerTool("get_tokens", {
  description: "Firehorse tokens with values (light/dark when they differ).",
  inputSchema: z.object({
    tier: z.string().optional().describe("primitives | semantic | config"),
    prefix: z.string().optional().describe("Token name prefix, e.g. --fh-color"),
  }),
}, async (args) => text(tools.get_tokens(args || {})));

server.registerTool("list_themes", {
  description: "List built-in Firehorse themes.",
}, async () => text(tools.list_themes()));

server.registerTool("get_theme", {
  description: "One theme by name (e.g. lipizzaner, mustang).",
  inputSchema: z.object({ name: z.string().describe("Theme name or label") }),
}, async ({ name }) => text(tools.get_theme(name)));

server.registerTool("get_rules", {
  description: "agent/system.md — how agents must use Firehorse (exact markup, data-fh, design-system meta tags).",
}, async () => text(tools.get_rules()));

server.registerTool("compose_page", {
  description: "HTML page linking firehorse.css from firehorse.dev, with design-system meta tags, stacking snippets for the given Index IDs.",
  inputSchema: z.object({ ids: z.array(z.string()).describe("Index IDs in order") }),
}, async ({ ids }) => text(tools.compose_page({ ids })));

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];
if (isMain) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
