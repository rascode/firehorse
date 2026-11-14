#!/usr/bin/env node
// Value inventory (data contract W0, relay dc0-inventory).
// Lists every place a value is drawn in Firehorse src/ and site/ and in Helm apps/helm/src:
// file, line, the shape (plan section 2.2, inferred from the line) and the component or class used.
// For each Helm file with a raw <table> it also lists the columns with an inferred shape.
//
//   node scripts/value-inventory.mjs [--json | --csv | --tables-csv | --summary] [--helm <path>]
//
// Read only. Output is sorted and carries no times or absolute paths, so two runs give the same bytes.
import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { join, relative, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const flag = (f) => args.includes(f);
const opt = (f) => { const i = args.indexOf(f); return i >= 0 ? args[i + 1] : undefined; };
const HELM = resolve(ROOT, opt("--helm") ?? process.env.HELM_SRC ?? "../../platforms/rascode/apps/helm/src");

const SKIP_DIRS = new Set(["dist", ".next-dev", ".next", "node_modules", ".git"]);
const EXT = /\.(html|js|mjs|jsx|ts|tsx)$/;

function walk(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir).sort()) {
    if (SKIP_DIRS.has(name)) continue;
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (EXT.test(name) && !name.endsWith(".d.ts") && !name.endsWith(".min.js")) out.push(p);
  }
  return out;
}

// ---- Shapes (plan 2.2) -----------------------------------------------------------------------
// Inferred from words in a line, a column label or a cell. First match wins. "link" values are
// shape text with the link renderer (the grid's link row); they are reported as "text (link)".
const SHAPE_RULES = [
  ["secret", /\b(secret|vault|password|private key|api key)\b/i],
  ["money", /(\$\$\{|["'`(\s>]\$\d|["']\$["']|\busd\b|\bcost|\bprice|\bamount|\bspend|\brevenue|\bbalance|\bfees?\b|formatMinor|formatMoney|fmtUsd|fmtMoney|\bmoney|style:\s*["']currency|currency:)/i],
  ["ratio", /(%|\bpercent|\bpct\b|\brate\b|\bshare\b|\bratio|\bprogress|\bcoverage|\bused\b)/i],
  ["temporal", /(\bdate\b|\bdates\b|\bcreated|\bupdated|\bmodified|\bwhen\b|\btime\b|\btimes\b|\blast\b|\bsince\b|\bago\b|\bexpires|\bexpiry|\bdue\b|\bstarted|\bended|\bfinished|\bseen\b|\brenew|toLocaleDateString|toLocaleTimeString|toISOString|formatDate|fmtDate|relativeTime|timeAgo|<time\b)/i],
  ["entities", /\b(members|assignees|people|owners|users)\b|fh-avatars\b/i],
  ["entity", /\b(owner|user|assignee|author|person|who|org|organization|organisation|account|agent)\b|fh-avatar\b|fh-entity\b/i],
  ["options", /\b(tags|labels|scopes|capabilities|roles)\b/i],
  ["option", /\b(status|state|kind|type|tier|level|priority|severity|stage|mode|role|category|verdict|result|health|outcome|provider|target|source|format|grade)\b|fh-status\b|fh-dot\b|data-status|data-tone/i],
  ["bool", /\b(enabled|disabled|required|yes|no|on\/off|toggle|checked|active\?)\b|[✓✔✗]/i],
  ["file", /\b(file|files|image|thumb|attachment|upload|media|logo)\b/i],
  ["link", /\b(url|urls|website|link|links|email|phone|host|domain|href)\b/i],
  ["long", /\b(description|notes|summary|body|message|remark|comment|reason|detail|details)\b/i],
  ["identifier", /\b(id|ids|key|keys|hash|slug|uuid|sha|commit|code|path|ref|env|name key)\b|<code\b|fh-mono|font-mono/i],
  ["number", /(\bcount|#|\brows\b|\btotal|\btokens|\bsize\b|\bbytes|\bturns|\bcalls|\bruns\b|\bversion|\bnumber|\bqty|\bquantity|\bscore|\bfiles\b|toLocaleString|Intl\.NumberFormat|toFixed|\.length\b)/i],
];
function inferShape(text, fallback = "text") {
  for (const [shape, re] of SHAPE_RULES) if (re.test(text)) return shape === "link" ? "text (link)" : shape;
  return fallback;
}

// ---- Components ------------------------------------------------------------------------------
// Each detector: [component, test(line), shape(line)]. A block class matches only the block,
// not its elements or modifiers (fh-kv, not fh-kv__key), so one list counts once.
const block = (name) => new RegExp(`(^|[^\\w-])${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?![\\w-])`);
let JSX = false; // set per file: in .jsx/.tsx a ">${" is a dollar sign before an expression
const DETECTORS = [
  ["fh-status", (l) => block("fh-status").test(l), () => "option"],
  ["fh-dot", (l) => block("fh-dot").test(l), () => "option"],
  ["fh-chip[data-status]", (l) => block("fh-chip").test(l) && /data-status/.test(l), () => "option"],
  ["fh-badge", (l) => block("fh-badge").test(l), (l) => (/\{[^}]*(count|length|total|n)\b[^}]*\}/i.test(l) ? "number" : "option")],
  ["fh-pill", (l) => block("fh-pill").test(l), (l) => (/multi|tags/i.test(l) ? "options" : "option")],
  ["fh-kv", (l) => block("fh-kv").test(l), (l) => inferShape(l)],
  ["fh-dl", (l) => block("fh-dl").test(l), (l) => inferShape(l)],
  ["fh-review", (l) => block("fh-review").test(l), (l) => inferShape(l)],
  ["fh-stats", (l) => block("fh-stats").test(l), (l) => inferShape(l, "number")],
  ["fh-metric", (l) => block("fh-metric").test(l), (l) => inferShape(l, "number")],
  ["fh-entity", (l) => block("fh-entity").test(l), () => "entity"],
  ["fh-avatar", (l) => block("fh-avatar").test(l) || block("fh-avatars").test(l), (l) => (block("fh-avatars").test(l) ? "entities" : "entity")],
  ["raw <table>", (l) => /<table\b/.test(l), () => "mixed (see columns)"],
  ["hand money format", (l) => /style:\s*["']currency["']|currency:\s*["'][A-Z]{3}["']|["'`]\$["'`]\s*\+|\$\$\{/.test(l) || (JSX && />\$\{/.test(l)), () => "money"],
  ["hand percent format", (l) => /style:\s*["']percent["']|toFixed\([^)]*\)\s*\}?\s*%|\*\s*100\b[^\n]*%|\}\s*%\s*[`<]|\+\s*["']%["']/.test(l), () => "ratio"],
  ["hand number format", (l) => /\.toLocaleString\(|Intl\.NumberFormat|\.toFixed\(/.test(l) && !/style:\s*["'](currency|percent)["']/.test(l), (l) => inferShape(l, "number")],
];

// ---- Tables ----------------------------------------------------------------------------------
const stripJsx = (s) => s.replace(/<[^>]*>/g, " ").replace(/\{\/\*[\s\S]*?\*\/\}/g, " ").replace(/\s+/g, " ").trim();
function tableColumns(src) {
  const tables = [];
  const re = /<table\b[\s\S]*?<\/table>/g;
  let m;
  while ((m = re.exec(src))) {
    const body = m[0];
    const line = src.slice(0, m.index).split("\n").length;
    const head = body.match(/<thead\b[\s\S]*?<\/thead>/)?.[0] ?? body.replace(/<tbody\b[\s\S]*?<\/tbody>/g, "");
    const ths = [...head.matchAll(/<th\b[^>]*>([\s\S]*?)<\/th>/g)].map((x) => x[1]);
    const firstRow = (body.match(/<tbody\b[\s\S]*?<\/tbody>/) ?? [body])[0];
    const tds = [...firstRow.matchAll(/<td\b([^>]*)>([\s\S]*?)<\/td>/g)].map((x) => x[1] + " " + x[2]);
    const dynamicHead = /<th\b[^>]*>\s*\{[^}]*\.(label|title|name|header)\b[^}]*\}\s*<\/th>/.test(body) || (/\.map\(/.test(body.match(/<thead\b[\s\S]*?<\/thead>/)?.[0] ?? "") );
    const columns = ths.map((th, i) => {
      const t = th.trim();
      let label = stripJsx(th).trim();
      if (/^\{[\s\S]*\}$/.test(t) && !/\}[^{]*\{/.test(t)) {
        // The header is one expression: keep its string literals ("Class / ID"), else it comes from data.
        const lits = [...t.matchAll(/"([^"]+)"|'([^']+)'/g)].map((x) => x[1] ?? x[2]).filter((x) => /^[A-Z#]/.test(x));
        label = lits.length ? [...new Set(lits)].join(" / ") : "(dynamic)";
      }
      if (!label) label = "(blank)";
      const cell = tds[i] ?? "";
      const shape = /^\(dynamic\)$/.test(label) ? "dynamic (from data)" : inferShape(label + " ", inferShape(cell, "text"));
      return { label: label.slice(0, 60), shape };
    });
    if (!columns.length && tds.length) tds.forEach((td, i) => columns.push({ label: `(col ${i + 1})`, shape: inferShape(td, "text") }));
    tables.push({ line, dynamicHead: Boolean(dynamicHead), columns });
  }
  // A <table> whose closing tag sits in another file or is built by a helper.
  if (!tables.length && /<table\b/.test(src)) tables.push({ line: src.split("\n").findIndex((l) => /<table\b/.test(l)) + 1, dynamicHead: true, columns: [] });
  return tables;
}

// ---- Run -------------------------------------------------------------------------------------
const roots = [
  { repo: "firehorse", base: ROOT, dirs: ["src", "site"] },
  { repo: "helm", base: HELM, dirs: ["."] },
];
const rows = [];
const tables = [];
for (const r of roots) {
  for (const d of r.dirs) {
    for (const file of walk(join(r.base, d))) {
      if (file === fileURLToPath(import.meta.url)) continue;
      const rel = relative(r.base, file).split("\\").join("/");
      const src = readFileSync(file, "utf8");
      JSX = /\.(jsx|tsx)$/.test(file);
      src.split("\n").forEach((l, i) => {
        for (const [component, test, shape] of DETECTORS) if (test(l)) rows.push({ repo: r.repo, file: rel, line: i + 1, component, shape: shape(l) });
      });
      if (r.repo === "helm" && /<table\b/.test(src)) for (const t of tableColumns(src)) tables.push({ file: rel, ...t });
    }
  }
}
const cmp = (a, b) => (a < b ? -1 : a > b ? 1 : 0);
rows.sort((a, b) => cmp(a.repo, b.repo) || cmp(a.file, b.file) || a.line - b.line || cmp(a.component, b.component));
tables.sort((a, b) => cmp(a.file, b.file) || a.line - b.line);

const components = DETECTORS.map(([c]) => c);
const summary = {};
for (const c of components) {
  const pick = (repo) => rows.filter((x) => x.component === c && x.repo === repo);
  summary[c] = Object.fromEntries(["firehorse", "helm"].map((repo) => [repo, { lines: pick(repo).length, files: new Set(pick(repo).map((x) => x.file)).size }]));
}

const csvCell = (v) => { const s = String(v ?? ""); return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s; };
const csv = (head, data) => [head, ...data].map((r) => r.map(csvCell).join(",")).join("\n") + "\n";

if (flag("--csv")) {
  process.stdout.write(csv(["repo", "file", "line", "component", "shape"], rows.map((r) => [r.repo, r.file, r.line, r.component, r.shape])));
} else if (flag("--tables-csv")) {
  const byFile = new Map();
  for (const t of tables) { if (!byFile.has(t.file)) byFile.set(t.file, []); byFile.get(t.file).push(t); }
  const data = [...byFile].map(([file, ts]) => [
    file, ts.length, ts.map((t) => t.line).join(" "),
    ts.map((t, i) => (ts.length > 1 ? `T${i + 1}: ` : "") + (t.columns.length ? t.columns.map((c) => `${c.label}: ${c.shape}`).join("; ") : "(columns built in code)")).join(" | "),
    ts.some((t) => t.dynamicHead) ? "yes" : "no",
  ]);
  process.stdout.write(csv(["file", "tables", "lines", "columns (label: shape)", "dynamic header"], data));
} else if (flag("--summary")) {
  const lines = ["component\tfirehorse lines\tfirehorse files\thelm lines\thelm files"];
  for (const c of components) lines.push([c, summary[c].firehorse.lines, summary[c].firehorse.files, summary[c].helm.lines, summary[c].helm.files].join("\t"));
  lines.push(`helm files with a raw <table>\t${new Set(tables.map((t) => t.file)).size}`);
  process.stdout.write(lines.join("\n") + "\n");
} else {
  process.stdout.write(JSON.stringify({ roots: { firehorse: ["src", "site"], helm: "apps/helm/src" }, components, summary, rows, tables }, null, 1) + "\n");
}
