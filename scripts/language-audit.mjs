// Design language audit. Plain Node, no dependency.
// node scripts/language-audit.mjs            summary
// node scripts/language-audit.mjs --write    also writes design/language/audit.md
// node scripts/language-audit.mjs --json     raw breach rows
// Exit code is always 0. This is a report, not a gate.
import { readFileSync, writeFileSync, readdirSync, statSync, mkdirSync } from "node:fs";
import { dirname, join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const srcRoot = join(root, "src");
const wantWrite = process.argv.includes("--write");
const wantJson = process.argv.includes("--json");

const RULES = [
  { n: 1, title: "Class shape", check: true },
  { n: 2, title: "State is a pseudo-class or an attribute", check: false },
  { n: 3, title: "Custom property names", check: true },
  { n: 4, title: "Public knobs have a fallback", check: true },
  { n: 5, title: "No !important outside the reset", check: true },
  { n: 6, title: "No raw color", check: true },
  { n: 7, title: "No primitive token in a component", check: true },
  { n: 8, title: "No raw z-index", check: true },
  { n: 9, title: "Token tier", check: false },
  { n: 10, title: "Space is a relationship", check: true },
  { n: 11, title: "How space relates", check: false },
  { n: 12, title: "Radius from the radius scale", check: true },
  { n: 13, title: "Border width from the border scale", check: true },
  { n: 14, title: "Etched rules and a solid focus ring", check: false },
  { n: 15, title: "Category color from data-tone", check: true },
  { n: 16, title: "Text uses the text roles", check: false },
  { n: 17, title: "One accent per view", check: false },
  { n: 18, title: "Meaning never rides on color alone", check: false },
  { n: 19, title: "Surfaces", check: false },
  { n: 20, title: "Font size is a type token", check: true },
  { n: 21, title: "Font weight is a weight token", check: true },
  { n: 22, title: "Font family is a family token", check: true },
  { n: 23, title: "Uppercase sets a tracking token", check: true },
  { n: 24, title: "Letter-spacing is a tracking token", check: true },
  { n: 25, title: "Figures use tabular numbers", check: false },
  { n: 26, title: "The type floor", check: false },
  { n: 27, title: "Focus is the shared solid ring", check: true },
  { n: 28, title: "How the other states look", check: false },
  { n: 29, title: "Duration is a duration token", check: true },
  { n: 30, title: "Easing is an easing token", check: true },
  { n: 31, title: "Motion does not animate layout", check: true },
  { n: 32, title: "Reduced motion", check: false },
  { n: 33, title: "Containers, not the viewport", check: true },
  { n: 34, title: "Logical properties", check: true },
  { n: 35, title: "Scheme is light-dark and data-fh-scheme", check: true },
  { n: 36, title: "data-fh on a component root", check: false },
  { n: 37, title: "Landmarks, roles, and labels", check: false },
  { n: 38, title: "What must not wait on a script", check: false },
];

const CHECKABLE = RULES.filter((r) => r.check).map((r) => r.n);
const TITLE = new Map(RULES.map((r) => [r.n, r.title]));

const BEM = /^fh-[a-z0-9]+(?:-[a-z0-9]+)*(?:__[a-z0-9]+(?:-[a-z0-9]+)*)?(?:--[a-z0-9]+(?:-[a-z0-9]+)*)?$/;
const PRIMITIVE = /--fh-(?:gray|ember|sky|lime|orange|teal|fuchsia|violet|rose|amber|green|red)-\d+/;
const TONE_NAME = /--fh-tone-(?:neutral|sky|lime|orange|teal|fuchsia|violet|rose|amber|accent)\b/;
const LENGTH_RE = /(?<![\w.-])(-?(?:\d+\.\d+|\d+))(px|rem|em|cqi|cqb|vh|vw|dvh|dvw)\b/g;
const TIME_RE = /(?<![\w.-])(\d*\.\d+|\d+)(ms|s)\b/g;
const ODD_PX = new Set(["2px", "6px", "10px", "14px", "20px", "28px"]);
const LAYOUT_PROPS = new Set([
  "all", "width", "height", "min-width", "max-width", "min-height", "max-height",
  "margin", "margin-top", "margin-right", "margin-bottom", "margin-left",
  "margin-block", "margin-inline", "margin-block-start", "margin-block-end",
  "margin-inline-start", "margin-inline-end",
  "padding", "padding-top", "padding-right", "padding-bottom", "padding-left",
  "padding-block", "padding-inline", "padding-block-start", "padding-block-end",
  "padding-inline-start", "padding-inline-end",
  "top", "right", "bottom", "left",
  "inset", "inset-block", "inset-inline", "inset-block-start", "inset-block-end",
  "inset-inline-start", "inset-inline-end",
  "gap", "row-gap", "column-gap", "flex-basis", "border-width",
]);
const PHYSICAL = new Set([
  "width", "height", "min-width", "max-width", "min-height", "max-height",
  "margin-left", "margin-right", "margin-top", "margin-bottom",
  "padding-left", "padding-right", "padding-top", "padding-bottom",
  "border-left", "border-right", "border-top", "border-bottom",
  "border-left-width", "border-right-width", "border-top-width", "border-bottom-width",
  "border-left-color", "border-right-color", "border-top-color", "border-bottom-color",
  "border-left-style", "border-right-style", "border-top-style", "border-bottom-style",
  "left", "right", "top", "bottom",
]);

function posix(p) {
  return p.split(sep).join("/");
}

function walk(dir, skipTop, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      const rel = posix(relative(dir, p));
      if (skipTop && (rel === "tokens" || rel === "themes")) continue;
      walk(p, false, out);
    } else if (name.endsWith(".css")) out.push(p);
  }
  return out;
}

function stripComments(src) {
  const lines = src.split("\n");
  let block = false;
  return lines.map((line) => {
    let out = "";
    let quote = "";
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (block) {
        if (ch === "*" && line[i + 1] === "/") {
          block = false;
          i++;
        }
        continue;
      }
      if (quote) {
        out += ch;
        if (ch === quote && line[i - 1] !== "\\") quote = "";
        continue;
      }
      if (ch === "/" && line[i + 1] === "*") {
        block = true;
        i++;
        continue;
      }
      // A line comment. Do not treat // inside a string (http:// in a url) as one.
      if (ch === "/" && line[i + 1] === "/") break;
      if (ch === "\"" || ch === "'") quote = ch;
      out += ch;
    }
    return out;
  });
}

function stripFn(input, name) {
  const key = name + "(";
  let out = "";
  for (let i = 0; i < input.length; i++) {
    if (input.startsWith(key, i)) {
      let depth = 1;
      i += key.length;
      for (; i < input.length && depth > 0; i++) {
        if (input[i] === "(") depth++;
        else if (input[i] === ")") depth--;
      }
      i--;
      out += " ";
    } else out += input[i];
  }
  return out;
}

function rawLengths(value) {
  const bare = stripFn(value, "var");
  const out = [];
  for (const m of bare.matchAll(LENGTH_RE)) {
    if (Number(m[1]) === 0) continue;
    out.push(m[1] + m[2]);
  }
  return out;
}

function rawTimes(value) {
  const bare = stripFn(value, "var");
  const out = [];
  for (const m of bare.matchAll(TIME_RE)) {
    const t = m[1] + m[2];
    if (t === "0s" || t === "0ms" || t === "0.01ms") continue;
    out.push(t);
  }
  return out;
}

function splitComma(value) {
  const parts = [];
  let cur = "";
  let depth = 0;
  for (const ch of value) {
    if (ch === "(") depth++;
    else if (ch === ")") depth = Math.max(0, depth - 1);
    else if (ch === "," && depth === 0) {
      parts.push(cur);
      cur = "";
      continue;
    }
    cur += ch;
  }
  if (cur.trim()) parts.push(cur);
  return parts;
}

function declarations(line) {
  let body = line;
  const at = body.match(/@(media|container|supports|keyframes|layer|import|font-face|property)\b/);
  if (at) {
    const brace = body.indexOf("{");
    body = brace === -1 ? "" : body.slice(brace + 1);
  }
  const out = [];
  const re = /(?<![\w-])([a-zA-Z][a-zA-Z0-9-]*)\s*:\s*([^;{}]+)/g;
  for (const m of body.matchAll(re)) out.push({ prop: m[1], value: m[2].trim() });
  return out;
}

function isSpaceProp(prop) {
  return /^(padding|margin|gap|row-gap|column-gap|inset|scroll-padding|scroll-margin)(-[a-z]+)*$/.test(prop)
    && prop !== "margin-trim";
}

function isBorderProp(prop) {
  if (prop === "border" || prop === "outline" || prop === "outline-width" || prop === "border-width") return true;
  if (/^border-(block|inline)(-start|-end)?$/.test(prop)) return true;
  if (/^border-(top|right|bottom|left)$/.test(prop)) return true;
  if (/^border-[a-z-]+-width$/.test(prop)) return true;
  return false;
}

function easingHits(value) {
  const bare = stripFn(value, "var");
  const hits = [];
  if (/cubic-bezier\(/.test(bare)) hits.push("cubic-bezier");
  for (const word of ["ease-in-out", "ease-in", "ease-out"]) {
    if (new RegExp("(?<![\\w-])" + word + "(?![\\w-])").test(bare)) hits.push(word);
  }
  if (!hits.some((h) => h.startsWith("ease")) && /(?<![\w-])ease(?![\w-])/.test(bare)) hits.push("ease");
  return hits;
}

function colorHits(line) {
  const s = stripFn(line, "url");
  const hits = [];
  if (/#[0-9a-fA-F]{3,8}\b/.test(s)) hits.push("hex");
  if (/\brgba?\(/.test(s)) hits.push("rgb()");
  if (/\bhsla?\(/.test(s)) hits.push("hsl()");
  if (/\boklch\((?!from\b)/.test(s)) hits.push("oklch()");
  if (/\boklab\((?!from\b)/.test(s)) hits.push("oklab()");
  if (!/\bmask(-image)?\s*:/.test(s)) {
    if (/(?<![\w-])white(?![\w-])/.test(s)) hits.push("white");
    if (/(?<![\w-])black(?![\w-])/.test(s)) hits.push("black");
  }
  return hits;
}

function under11(length) {
  const m = /^(-?[\d.]+)(px|rem)$/.exec(length);
  if (!m) return false;
  const n = Number(m[1]);
  if (!(n > 0)) return false;
  return m[2] === "px" ? n < 11 : n < 0.6875;
}

function visibleFocus(selector) {
  const stripped = selector.replace(/:not\((?:[^()]|\([^()]*\))*\)/g, "");
  return /:focus-visible/.test(stripped);
}

function isNoneValue(value) {
  const t = value.replace(/\s*!important\s*$/, "").trim();
  return t === "none" || t === "0" || t === "0px";
}

function propValues(body, prop) {
  const re = new RegExp("(?<![\\w-])" + prop + "\\s*:\\s*([^;]+)", "g");
  return [...body.matchAll(re)].map((m) => m[1].trim());
}

// Join a declaration that is split over lines, and keep a selector that is
// split over lines with the block it opens. A newline used to end the
// selector early, so `:focus-visible` on the line above `{` was missed,
// and `transition:` with its value on the next line was never scored.
function parseSheet(lines) {
  const blocks = [];
  const decls = [];
  const stack = [];
  let pending = "";
  let pendingLine = 1;
  let paren = 0;
  let quote = "";

  function pushDecl(text, n) {
    const raw = text.trim();
    if (!raw || !stack.length) return;
    const block = stack[stack.length - 1];
    block.lines.push({ n, text: raw });
    decls.push({ n, text: raw, gated: block.gated });
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const n = i + 1;
    if (!pending.trim()) pendingLine = n;
    for (let c = 0; c < line.length; c++) {
      const ch = line[c];
      if (quote) {
        pending += ch;
        if (ch === quote && line[c - 1] !== "\\") quote = "";
        continue;
      }
      if (ch === "\"" || ch === "'") {
        quote = ch;
        pending += ch;
        continue;
      }
      if (ch === "(") { paren++; pending += ch; continue; }
      if (ch === ")") { paren = Math.max(0, paren - 1); pending += ch; continue; }
      if (paren > 0) { pending += ch; continue; }
      if (ch === "{") {
        const selector = pending.trim();
        pending = "";
        pendingLine = n;
        const parent = stack[stack.length - 1] || null;
        const block = {
          selector,
          chain: parent ? parent.chain + " " + selector : selector,
          lines: [],
          parent,
          gated: /prefers-reduced-motion\s*:\s*no-preference/.test(selector) || !!(parent && parent.gated),
        };
        stack.push(block);
        blocks.push(block);
        continue;
      }
      if (ch === ";") {
        pushDecl(pending, pendingLine);
        pending = "";
        pendingLine = n;
        continue;
      }
      if (ch === "}") {
        pushDecl(pending, pendingLine);
        pending = "";
        pendingLine = n;
        stack.pop();
        continue;
      }
      pending += ch;
    }
    pending += " ";
  }
  return { blocks, decls };
}

function headerBlock(raw) {
  const lines = raw.split("\n");
  const out = [];
  for (let i = 0; i < lines.length && i < 80; i++) {
    out.push(lines[i]);
    if (/@layer\b/.test(lines[i])) break;
  }
  return out.join("\n");
}

function titleOf(header) {
  for (const line of header.split("\n")) {
    const m = line.match(/Firehorse\s+[\u2014\u2013-]\s+(.+)/);
    if (m) return m[1].replace(/\*+/g, "").replace(/\s+/g, " ").trim();
  }
  return "";
}

function plainTitle(title) {
  return title.replace(/\s*\(.*$/, "").trim();
}

function clean(s) {
  return String(s).replace(/[\u2014\u2013]/g, "-").replace(/\|/g, "/").replace(/\s+/g, " ").trim();
}

function clip(s) {
  const t = clean(s).replace(/`/g, "'");
  return t.length > 160 ? t.slice(0, 157) + "..." : t;
}

function loadLedger() {
  const ledger = JSON.parse(readFileSync(join(root, "index-ledger.json"), "utf8"));
  const issued = ledger.issued || {};
  const retired = ledger.retired || {};
  const familySet = new Set(
    Object.keys(issued).filter((k) => !k.includes("-") && !k.includes(".") && !retired[k]),
  );
  const nameToFamily = new Map();
  for (const code of familySet) {
    const name = String(issued[code]).split(" › ")[0].trim().toLowerCase();
    if (!name) continue;
    if (!nameToFamily.has(name)) nameToFamily.set(name, code);
    else if (nameToFamily.get(name) !== code) nameToFamily.set(name, "");
  }
  function toFamily(code) {
    if (!code) return null;
    if (familySet.has(code)) return code;
    const rootCode = code.split(/[-.]/)[0];
    if (familySet.has(rootCode)) return rootCode;
    return null;
  }
  function replacement(note) {
    const m = String(note).match(/\bto\s+([A-Z]{2,5}(?:-[A-Z0-9]+)?(?:\.\d+)?)/);
    return m ? m[1] : null;
  }
  function resolveToken(token) {
    if (retired[token]) {
      const fam = toFamily(replacement(retired[token]));
      if (fam) return fam;
    }
    const direct = toFamily(token);
    if (direct) return direct;
    if (token.includes("-")) {
      const [a, b] = token.split("-");
      return toFamily(b) || toFamily(a) || null;
    }
    return null;
  }
  return { issued, familySet, nameToFamily, resolveToken };
}

function definedTokens() {
  const defined = new Set();
  const files = [
    ...walk(join(srcRoot, "tokens"), false),
    ...walk(join(srcRoot, "themes"), false),
  ];
  for (const file of files) {
    const text = stripComments(readFileSync(file, "utf8")).join("\n");
    for (const m of text.matchAll(/(--[\w-]+)\s*:/g)) defined.add(m[1]);
    for (const m of text.matchAll(/@property\s+(--[\w-]+)/g)) defined.add(m[1]);
  }
  return defined;
}

function eachVar(line, fn) {
  const key = "var(";
  for (let i = 0; i < line.length; i++) {
    if (!line.startsWith(key, i)) continue;
    let j = i + key.length;
    while (j < line.length && /\s/.test(line[j])) j++;
    const start = j;
    if (!line.startsWith("--", j)) continue;
    while (j < line.length && /[\w-]/.test(line[j])) j++;
    const name = line.slice(start, j);
    while (j < line.length && /\s/.test(line[j])) j++;
    fn(name, line[j] === ",");
  }
}

function familiesFor(rel, raw, ledger) {
  const header = headerBlock(raw);
  const title = plainTitle(titleOf(header));
  const found = new Set();
  const re = /\b[A-Z]{2,5}(?:-[A-Z0-9]+)?(?:\.\d+)?\b/g;
  for (const m of header.matchAll(re)) {
    const fam = ledger.resolveToken(m[0]);
    if (fam) found.add(fam);
  }
  if (found.size === 0) {
    const byName = ledger.nameToFamily.get(title.toLowerCase());
    if (byName) found.add(byName);
  }
  if (found.size === 0) {
    const slug = "?" + rel.replace(/^src\//, "").replace(/\.css$/, "").replace(/\//g, ".");
    found.add(slug);
  }
  return { codes: [...found], title: title || rel };
}

function familyName(code, issued, titles) {
  if (code.startsWith("?")) return clean(titles.get(code) || code.slice(1));
  const raw = issued[code];
  return clean(raw ? String(raw).split(" › ")[0] : code);
}

function auditFile(rel, raw, ledger, tokens, breaches, forks, titles) {
  const { codes, title } = familiesFor(rel, raw, ledger);
  for (const code of codes) if (code.startsWith("?") && !titles.has(code)) titles.set(code, title);
  const integration = rel.startsWith("src/integrations/");
  const spaceExempt = /^(src\/layout\/|src\/base\/|src\/utilities\/|src\/integrations\/)/.test(rel);
  const importantOk = rel === "src/base/reset.css" || rel === "src/base/document.css";
  const lines = stripComments(raw);
  const { blocks, decls } = parseSheet(lines);
  const seen = new Set();
  const flag = (rule, line, text) => {
    const key = rule + ":" + line;
    if (seen.has(key)) return;
    seen.add(key);
    breaches.push({ rule, file: rel, line, text: clip(text), families: codes });
  };
  const touch = (set) => {
    for (const code of codes) set.add(code);
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const n = i + 1;
    if (!line.trim()) continue;
    const shown = clip(line);

    if (!integration) {
      const bare = stripFn(line, "url");
      for (const m of bare.matchAll(/(?<![\w\\])\.([A-Za-z_][\w-]*)/g)) {
        const cls = m[1];
        if (!BEM.test(cls)) flag(1, n, "." + cls);
      }
      for (const m of line.matchAll(/(^|[^A-Za-z0-9_-])(--[A-Za-z0-9_-]+)\s*:/g)) {
        const name = m[2];
        if (name.startsWith("--_") || name.startsWith("--fh-") || name.startsWith("--font-rascode")) continue;
        flag(3, n, name);
      }
    }

    eachVar(line, (name, hasFallback) => {
      if (!name.startsWith("--fh-")) return;
      if (tokens.has(name) || hasFallback) return;
      flag(4, n, "var(" + name + ") has no fallback");
    });

    if (!importantOk && /!important/.test(line)) flag(5, n, shown);
    const colors = colorHits(line);
    if (colors.length) flag(6, n, colors.join(", ") + " in " + shown);
    if (PRIMITIVE.test(line)) flag(7, n, shown);
    if (rel !== "src/utilities/tone.css" && TONE_NAME.test(line)) flag(15, n, shown);
    if (/@media\b/.test(line) && /(min|max)-width|width\s*[<>]/.test(line)) flag(33, n, shown);
    if (/@media\b/.test(line) && /prefers-color-scheme/.test(line)) flag(35, n, shown);

    if (/\[aria-(?:expanded|pressed|selected|current|busy|invalid|checked|disabled)\b/.test(line)
      || /\[data-(?:state|selected|open|invalid|busy)\b/.test(line)) touch(forks.attr);
    if (/\.[\w-]*--(?:open|active|selected|disabled|busy|invalid|loading)\b/.test(line)
      || /\.(?:is|has)-[\w-]+/.test(line)) touch(forks.cls);
  }

  for (const decl of decls) {
    const n = decl.n;
    for (const { prop, value } of declarations(decl.text)) {
      if (isSpaceProp(prop)) {
        const lengths = rawLengths(value);
        const odd = lengths.filter((len) => ODD_PX.has(len));
        const rawStep = !spaceExempt && /--fh-space-/.test(value);
        if (lengths.length || rawStep) {
          const bits = [];
          if (lengths.length) bits.push(lengths.join(" "));
          if (odd.length) bits.push("odd step " + odd.join(" "));
          if (rawStep) bits.push("raw --fh-space-*");
          flag(10, n, prop + ": " + bits.join("; "));
        }
      }
      if (prop === "border-radius") {
        const lengths = rawLengths(value);
        const bare = stripFn(value, "var");
        const pct = bare.match(/(?<![\w.-])(\d*\.?\d+)%/);
        const pill = /\b999(?:px)?\b/.test(bare);
        if (lengths.length || pct || pill) {
          flag(12, n, "border-radius " + [...lengths, pct ? pct[0] : "", pill ? "999" : ""].filter(Boolean).join(" "));
        }
      }
      if (isBorderProp(prop)) {
        const lengths = rawLengths(value);
        if (lengths.length) flag(13, n, prop + " " + lengths.join(" "));
        const bare = stripFn(value, "var");
        if (/\bdashed\b/.test(bare)) touch(forks.dashed);
        if (/\bsolid\b/.test(bare)) touch(forks.solid);
      }
      if (prop === "z-index") {
        const v = value.trim();
        if (v !== "auto" && v !== "0" && !v.includes("var(--fh-z-")) flag(8, n, "z-index: " + v);
      }
      if (prop === "font-size") {
        const lengths = rawLengths(value);
        if (lengths.length) {
          const mark = lengths.some(under11) ? " under 11px" : "";
          flag(20, n, "font-size " + lengths.join(" ") + mark);
        }
      }
      if (prop === "font-weight" && /(?<![\w.-])[1-9]00\b/.test(stripFn(value, "var"))) {
        flag(21, n, "font-weight " + value.trim());
      }
      if (prop === "font-family" && !value.includes("var(--fh-font-") && !/^\s*inherit\b/.test(value)) {
        flag(22, n, "font-family " + value.trim());
      }
      if (prop === "letter-spacing") {
        const lengths = rawLengths(value);
        if (lengths.length) flag(24, n, "letter-spacing " + lengths.join(" "));
      }
      if (prop === "transition" || prop === "transition-property") {
        const hits = [];
        for (const part of splitComma(value)) {
          const word = part.trim().split(/\s+/)[0];
          if (LAYOUT_PROPS.has(word)) hits.push(word);
        }
        if (hits.length) flag(31, n, prop + " moves " + hits.join(", "));
      }
      if (prop === "animation" || prop === "animation-name" || prop === "transition" || prop === "transition-property") {
        touch(decl.gated ? forks.gated : forks.open);
      }
      const times = (prop === "animation" || prop === "transition" || prop.endsWith("-duration") || prop === "transition-duration" || prop === "animation-duration")
        ? rawTimes(value) : [];
      if (times.length) flag(29, n, times.join(" "));
      if (prop === "animation" || prop === "transition" || prop.endsWith("-timing-function") || prop === "animation-timing-function" || prop === "transition-timing-function") {
        const ease = easingHits(value);
        if (ease.length) flag(30, n, ease.join(", "));
      }
      if (PHYSICAL.has(prop)) flag(34, n, prop);
      if (prop === "text-align" && /^(left|right)\b/.test(value)) flag(34, n, "text-align: " + value.trim());
    }
  }

  const drawsFocus = (text) => propValues(text, "outline").some((v) => !isNoneValue(v));
  const replacement = blocks.some((b) =>
    /:has\(/.test(b.chain) && visibleFocus(b.chain) && b.lines.some((l) => drawsFocus(l.text)),
  );
  for (const block of blocks) {
    const up = block.lines.find((l) => /text-transform\s*:\s*uppercase\b/.test(l.text));
    if (up) {
      let tracked = false;
      for (let b = block; b; b = b.parent) {
        if (b.lines.some((l) => /letter-spacing\s*:[^;]*--fh-tracking-/.test(l.text))) tracked = true;
      }
      if (!tracked) flag(23, up.n, clip(up.text));
    }
    if (!visibleFocus(block.chain)) continue;
    const body = block.lines.map((l) => l.text).join("; ");
    const outlines = propValues(body, "outline");
    const shadows = propValues(body, "box-shadow");
    if (!outlines.length && !shadows.length) continue;
    const outlineNone = outlines.some(isNoneValue);
    const outlineDrawn = outlines.some((v) => !isNoneValue(v));
    const shadow = shadows.some((v) => !isNoneValue(v));
    const token = /--fh-(?:focus-width|color-focus)\b/.test(body);
    const problem = (outlineDrawn || shadow)
      ? block.lines.find((l) => propValues(l.text, "outline").some((v) => !isNoneValue(v)) || propValues(l.text, "box-shadow").some((v) => !isNoneValue(v)))
      : block.lines.find((l) => propValues(l.text, "outline").some(isNoneValue) || propValues(l.text, "box-shadow").some(isNoneValue));
    if (!problem) continue;
    if (outlineNone && !shadow && !token && !replacement) flag(27, problem.n, "focus ring removed: " + clip(problem.text));
    else if ((outlineDrawn || shadow) && !token) flag(27, problem.n, "focus ring is not the shared outline: " + clip(problem.text));
  }

  return { codes, shared: codes.length > 1 };
}

function countByFamily(rows) {
  const counts = new Map();
  for (const row of rows) for (const code of row.families) counts.set(code, (counts.get(code) || 0) + 1);
  return counts;
}

function nameOf(code, issued, titles) {
  return familyName(code, issued, titles);
}

function fmtFamilies(codes, issued, titles) {
  if (!codes.length) return "(none)";
  return codes.map((c) => c + " " + nameOf(c, issued, titles)).join(", ");
}

function render(files, familyOrder, issued, titles, breaches, forks, sharedFiles) {
  const measured = familyOrder.length;
  const lines = [];
  lines.push("# Firehorse design language audit");
  lines.push("");
  lines.push("Generated by `scripts/language-audit.mjs`. Do not edit this file by hand. Re-run the script with `--write`.");
  lines.push("");
  lines.push(files.length + " CSS files under `src/`, excluding `src/tokens/` and `src/themes/`. " + measured + " families. " + breaches.length + " breaches. Exit code is always 0.");
  lines.push("");
  lines.push("A family code comes from the file header, resolved through `index-ledger.json`. A retired code follows the replacement in `retired`. A code that starts with `?` is a file whose header names no Index family. A file that names several families counts each breach toward every one of them. The script cannot tell which part of that file belongs to which family. " + sharedFiles.length + " files name more than one family.");
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push("| Rule | What | Follow | Break | Three worst |");
  lines.push("| --- | --- | --- | --- | --- |");
  for (const rule of RULES) {
    if (!rule.check) {
      lines.push("| " + rule.n + " | " + rule.title + " | n/a | n/a | n/a |");
      continue;
    }
    const rows = breaches.filter((b) => b.rule === rule.n);
    const counts = [...countByFamily(rows)].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    const worst = counts.slice(0, 3).map(([code, n]) => code + " " + n).join(", ") || "none";
    const brk = counts.length;
    lines.push("| " + rule.n + " | " + rule.title + " | " + (measured - brk) + " | " + brk + " | " + worst + " |");
  }
  lines.push("");
  lines.push("## Matrix");
  lines.push("");
  lines.push("A tick means the family has no breach of that rule. A number is the breach count. Columns are the checkable rules: " + CHECKABLE.join(", ") + ".");
  lines.push("");
  lines.push("| Code | Name | " + CHECKABLE.join(" | ") + " |");
  lines.push("| --- | --- | " + CHECKABLE.map(() => "---").join(" | ") + " |");
  const byRuleFamily = new Map();
  for (const row of breaches) {
    for (const code of row.families) {
      const key = row.rule + ":" + code;
      byRuleFamily.set(key, (byRuleFamily.get(key) || 0) + 1);
    }
  }
  for (const code of familyOrder) {
    const cells = CHECKABLE.map((n) => {
      const count = byRuleFamily.get(n + ":" + code) || 0;
      return count ? String(count) : "✓";
    });
    lines.push("| " + code + " | " + nameOf(code, issued, titles) + " | " + cells.join(" | ") + " |");
  }
  lines.push("");
  lines.push("## Breaches");
  lines.push("");
  for (const rule of RULES) {
    if (!rule.check) continue;
    const rows = breaches.filter((b) => b.rule === rule.n).sort((a, b) => a.file.localeCompare(b.file) || a.line - b.line);
    lines.push("### Rule " + rule.n + ". " + rule.title);
    lines.push("");
    lines.push(rows.length + " breaches in " + countByFamily(rows).size + " families.");
    lines.push("");
    if (!rows.length) {
      lines.push("No counted breach.");
      lines.push("");
      continue;
    }
    for (const row of rows.slice(0, 15)) {
      lines.push("- `" + row.file + ":" + row.line + "` " + row.families.join(", ") + ": `" + row.text + "`");
    }
    if (rows.length > 15) lines.push("- and " + (rows.length - 15) + " more");
    lines.push("");
  }

  lines.push("## For Rascode to decide");
  lines.push("");
  lines.push("Each item is a place the system does two things and no source picked one. Counts are families. A family on both sides is counted in both numbers. No preference is stated.");
  lines.push("");
  const fork = (title, aLabel, aSet, bLabel, bSet) => {
    const a = [...aSet].sort();
    const b = [...bSet].sort();
    lines.push("### " + title);
    lines.push("");
    lines.push(aLabel + ": " + a.length + " families. " + bLabel + ": " + b.length + " families.");
    lines.push("");
    if (a.length === b.length) {
      lines.push("The counts are equal.");
      lines.push("");
      lines.push(aLabel + ": " + fmtFamilies(a, issued, titles));
      lines.push("");
      lines.push(bLabel + ": " + fmtFamilies(b, issued, titles));
    } else {
      const smaller = a.length < b.length ? [aLabel, a] : [bLabel, b];
      lines.push("Smaller side (" + smaller[0] + "): " + fmtFamilies(smaller[1], issued, titles));
    }
    lines.push("");
    lines.push("No preference is stated here.");
    lines.push("");
  };
  fork(
    "Open, selected, busy, and invalid: attribute or class",
    "Attribute (`aria-*` or `data-state` / `data-selected` / `data-open` / `data-invalid` / `data-busy`)",
    forks.attr,
    "State class (`--open`, `--active`, `--selected`, `--disabled`, `--busy`, `--invalid`, `--loading`, or `is-*` / `has-*`)",
    forks.cls,
  );
  lines.push("Source of the split: `src/components/actions/button.css:242` uses `aria-busy`, and `src/components/navigation/hamburger.css:8-10` says open may be `aria-expanded` or the class `fh-burger--open`.");
  lines.push("");
  fork(
    "Hard-coded border style: dashed or solid",
    "Hard-coded dashed",
    forks.dashed,
    "Hard-coded solid",
    forks.solid,
  );
  lines.push("A border that reads `var(--fh-card-border-style, dashed)` is not counted, because the style is the preset (`src/tokens/config.css:51-78`). A leftover keyword after those variables are removed is hard-coded. The guidelines want etched dashed rules (`site/pages/guidelines/index.html:139`) and the theme presets include both dashed and solid.");
  lines.push("");
  fork(
    "Reduced motion: gated, or left to the kill switch",
    "Animation or transition inside `prefers-reduced-motion: no-preference`",
    forks.gated,
    "Animation or transition not inside that query",
    forks.open,
  );
  lines.push("`site/pages/guidelines/index.html:156` says every animation sits inside `no-preference`. `src/base/document.css:120-122` says an animation is either gated that way or neutralised by the global kill switch. Families with no animation and no transition are in neither count.");
  lines.push("");
  lines.push("### The type floor, guidelines against the token file");
  lines.push("");
  lines.push("`site/pages/guidelines/index.html:119` says body text is at least 16px and UI text is never under 11px. The same page, line 117, says Firehorse body is 15.2px and that labels and micro sit below that floor. `src/tokens/primitives.css:88` sets `--fh-text-body` to `1rem`, and lines 84-85 set `--fh-text-micro` and `--fh-text-label` to `0.6875rem`. The script does not score `src/tokens/`. There is no family split to count. No preference is stated here.");
  lines.push("");
  lines.push("## What the script cannot see");
  lines.push("");
  lines.push("- HTML. Rules 17, 18, 36, 37, and 38 are not scored. One accent per view, a label, a landmark, and `data-fh` live in markup.");
  lines.push("- The box tree. Rule 11 (inside tighter than outside, one left edge, numbers lining up) is not scored. An odd step is only labelled when rule 10 already found that raw length.");
  lines.push("- A raw length stored on a custom property (`--_t: 2px`) and used later through `var(--_t)`.");
  lines.push("- A raw length that is only the fallback inside `var()`.");
  lines.push("- The bodies of `@keyframes`. Rule 31 only reads `transition` and `transition-property`.");
  lines.push("- A transition of `inline-size` or `block-size`. Rule 31 lists the physical axes, margin, padding, inset, gap, flex-basis, border-width, their longhands, and `all`.");
  lines.push("- Which lines of a shared file belong to which of its families.");
  lines.push("- Comments. The banned breakout in `src/layout/frame.css:14` is a comment, so rule 33 and rule 34 do not count it.");
  lines.push("- `src/tokens/` and `src/themes/`. They define the scale. They are not families under test.");
  lines.push("- Named colors other than `white` and `black`. `linear` has no easing token, so it is not scored. `z-index: 0` has no token, so it is not scored.");
  lines.push("- `line-height`. The leading tokens exist (`src/tokens/primitives.css:105-110`) and this audit does not score them.");
  lines.push("- Computed style, container size, and contrast.");
  if (sharedFiles.length) {
    lines.push("");
    lines.push("Files that name more than one family:");
    lines.push("");
    for (const file of sharedFiles) lines.push("- `" + file + "`");
  }
  const unmapped = familyOrder.filter((c) => c.startsWith("?"));
  if (unmapped.length) {
    lines.push("");
    lines.push("Files with no Index family in the header:");
    lines.push("");
    for (const code of unmapped) lines.push("- `" + code + "` " + nameOf(code, issued, titles));
  }
  lines.push("");
  return lines.join("\n");
}

function summary(files, familyOrder, issued, titles, breaches) {
  const out = [];
  out.push("language audit");
  out.push("files: " + files.length);
  out.push("families: " + familyOrder.length);
  out.push("breaches: " + breaches.length);
  out.push("rules by breach count:");
  const ruleCounts = CHECKABLE.map((n) => [n, breaches.filter((b) => b.rule === n).length]);
  ruleCounts.sort((a, b) => b[1] - a[1] || a[0] - b[0]);
  for (const [n, count] of ruleCounts) out.push("  " + String(n).padStart(2, " ") + "  " + String(count).padStart(5, " ") + "  " + TITLE.get(n));
  out.push("families by breach count:");
  const counts = [...countByFamily(breaches)].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  for (const [code, count] of counts.slice(0, 25)) {
    out.push("  " + String(count).padStart(5, " ") + "  " + code + "  " + nameOf(code, issued, titles));
  }
  if (counts.length > 25) out.push("  ... " + (counts.length - 25) + " more families in the audit file");
  return out.join("\n");
}

function main() {
  const ledger = loadLedger();
  const tokens = definedTokens();
  const files = walk(srcRoot, true).sort();
  const breaches = [];
  const forks = {
    gated: new Set(), open: new Set(), attr: new Set(), cls: new Set(), dashed: new Set(), solid: new Set(),
  };
  const titles = new Map();
  const familyFiles = new Map();
  const sharedFiles = [];
  for (const file of files) {
    const rel = "src/" + posix(relative(srcRoot, file));
    const raw = readFileSync(file, "utf8");
    const { codes, shared } = auditFile(rel, raw, ledger, tokens, breaches, forks, titles);
    if (shared) sharedFiles.push(rel);
    for (const code of codes) {
      if (!familyFiles.has(code)) familyFiles.set(code, new Set());
      familyFiles.get(code).add(rel);
    }
  }
  const familyOrder = [...familyFiles.keys()].sort((a, b) => {
    const aq = a.startsWith("?") ? 1 : 0;
    const bq = b.startsWith("?") ? 1 : 0;
    if (aq !== bq) return aq - bq;
    return a.localeCompare(b);
  });
  if (wantWrite) {
    const md = render(files, familyOrder, ledger.issued, titles, breaches, forks, sharedFiles.sort());
    const dest = join(root, "design", "language", "audit.md");
    mkdirSync(dirname(dest), { recursive: true });
    writeFileSync(dest, md);
  }
  if (wantJson) {
    console.log(JSON.stringify(breaches.map((b) => ({
      rule: b.rule,
      family: b.families.join(","),
      file: b.file,
      line: b.line,
      text: b.text,
    }))));
  } else {
    console.log(summary(files, familyOrder, ledger.issued, titles, breaches));
    if (wantWrite) console.log("wrote design/language/audit.md");
  }
}

try {
  main();
} catch (err) {
  console.log("audit failed: " + (err && err.stack ? err.stack : err));
}
