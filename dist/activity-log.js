// Firehorse — activity-log.js (dist/activity-log.js · MIT)
// Activity log (TML-2): the Rendered | Plain text switch and a small, safe markdown renderer.
// No dependencies. Progressive: without this file every body shows its markdown source as typed
// and the switch stays hidden; with it, the switch shows and bodies render.
//
//   import { boot, renderMarkdown, setLogRender } from "@rascode/firehorse/activity-log";
//   boot();                              // every .fh-activity-log on the page (runs on load by itself)
//   boot(el);                            // a log added later, or one whose entries changed
//   setLogRender(log, "plain");          // "rendered" | "plain"
//   renderMarkdown("**Done.** See `relay/plan.md`")   // → HTML string
//
// The choice is remembered per viewer (localStorage "fh-activity-log-render"). A log's own
// data-render sets its starting mode; a body's own data-render ("plain" | "rendered") pins it.
// Each change dispatches "fh:log-render" on the log (detail: { mode }) and refreshes any text
// fold around a body ("fh:fold-refresh"), so Show all / Show less still measures right.
//
// The renderer escapes every character of HTML before it formats, so no tag in the source
// reaches the page. It covers what agents and people write in updates: headings, paragraphs,
// line breaks, bullet and numbered lists, block quotes, fenced code, rules, `code`,
// **bold**, *italic*, ~~strike~~ and [links](https://…). Links keep only http(s), mailto,
// page-relative and #anchor targets.

const STORE = "fh-activity-log-render";
const MODES = new Set(["rendered", "plain"]);
const sources = new WeakMap();

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

const safeHref = (raw) => {
  const href = raw.trim();
  if (/^(https?:|mailto:)/i.test(href)) return href;
  if (/^[a-z][a-z0-9+.-]*:/i.test(href)) return null;   // javascript:, data: and any other scheme
  return href;                                          // relative, /absolute, #anchor
};

/** Inline formatting on an already escaped line. */
function inline(text) {
  const codes = [];
  let s = text.replace(/`([^`]+)`/g, (_, c) => `\u0000${codes.push(c) - 1}\u0000`);
  s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (m, label, href) => {
    const ok = safeHref(href.replace(/&amp;/g, "&"));
    if (ok == null) return label;
    const ext = /^https?:/i.test(ok) ? ' rel="noopener noreferrer" target="_blank"' : "";
    return `<a href="${esc(ok)}"${ext}>${label}</a>`;
  });
  s = s.replace(/\*\*(?=\S)([\s\S]*?\S)\*\*/g, "<strong>$1</strong>")
       .replace(/__(?=\S)([\s\S]*?\S)__/g, "<strong>$1</strong>")
       .replace(/(^|[^*\w])\*(?=\S)([^*]*?\S)\*(?!\*)/g, "$1<em>$2</em>")
       .replace(/(^|[^_\w])_(?=\S)([^_]*?\S)_(?![_\w])/g, "$1<em>$2</em>")
       .replace(/~~(?=\S)([\s\S]*?\S)~~/g, "<del>$1</del>");
  return s.replace(/\u0000(\d+)\u0000/g, (_, i) => `<code>${codes[Number(i)]}</code>`);
}

/** Markdown source → HTML string. Every tag in the source is escaped first. */
export function renderMarkdown(source) {
  const lines = esc(String(source ?? "").replace(/\r\n?/g, "\n")).split("\n");
  const out = [];
  let para = [];
  let list = null;            // { tag, items: [] }
  let quote = [];

  const flushPara = () => { if (para.length) out.push(`<p>${para.map(inline).join("<br>")}</p>`); para = []; };
  const flushList = () => { if (list) out.push(`<${list.tag}>${list.items.map((i) => `<li>${inline(i)}</li>`).join("")}</${list.tag}>`); list = null; };
  const flushQuote = () => { if (quote.length) out.push(`<blockquote>${renderMarkdown(quote.join("\n").replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, "&"))}</blockquote>`); quote = []; };
  const flush = () => { flushPara(); flushList(); flushQuote(); };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const fence = line.match(/^\s*(```|~~~)\s*([\w-]*)\s*$/);
    if (fence) {
      flush();
      const body = [];
      while (++i < lines.length && !lines[i].trim().startsWith(fence[1])) body.push(lines[i]);
      const lang = fence[2] ? ` data-lang="${fence[2]}"` : "";
      out.push(`<pre${lang}><code>${body.join("\n")}</code></pre>`);
      continue;
    }
    if (/^\s*&gt;\s?/.test(line)) { flushPara(); flushList(); quote.push(line.replace(/^\s*&gt;\s?/, "")); continue; }
    flushQuote();
    if (!line.trim()) { flushPara(); flushList(); continue; }
    const h = line.match(/^\s{0,3}(#{1,6})\s+(.*?)\s*#*\s*$/);
    if (h) { flush(); out.push(`<h${h[1].length}>${inline(h[2])}</h${h[1].length}>`); continue; }
    if (/^\s{0,3}([-*_])(\s*\1){2,}\s*$/.test(line)) { flush(); out.push("<hr>"); continue; }
    const bullet = line.match(/^\s*[-*+]\s+(.*)$/);
    const numbered = line.match(/^\s*\d+[.)]\s+(.*)$/);
    if (bullet || numbered) {
      flushPara();
      const tag = bullet ? "ul" : "ol";
      if (list && list.tag !== tag) flushList();
      list ??= { tag, items: [] };
      list.items.push((bullet ?? numbered)[1]);
      continue;
    }
    if (list && /^\s{2,}\S/.test(line)) { list.items[list.items.length - 1] += ` ${line.trim()}`; continue; }
    flushList();
    para.push(line.trim());
  }
  flush();
  return out.join("");
}

/** The common indent of the authored text, taken off so a source reads as typed. */
const dedent = (text) => {
  const lines = text.replace(/^\n+|\s+$/g, "").split("\n");
  const indent = Math.min(...lines.filter((l) => l.trim()).map((l) => l.match(/^\s*/)[0].length));
  return Number.isFinite(indent) && indent > 0 ? lines.map((l) => l.slice(indent)).join("\n") : lines.join("\n");
};

const sourceOf = (el) => {
  if (!sources.has(el)) sources.set(el, dedent(el.textContent ?? ""));
  return sources.get(el);
};

const stored = () => { try { const m = localStorage.getItem(STORE); return MODES.has(m) ? m : null; } catch { return null; } };
const remember = (mode) => { try { localStorage.setItem(STORE, mode); } catch {} };

function paint(el, mode) {
  const src = sourceOf(el);
  if (mode === "rendered") el.innerHTML = renderMarkdown(src);
  else el.textContent = src;
  el.dataset.md = mode;
  el.closest(".fh-fold")?.dispatchEvent(new CustomEvent("fh:fold-refresh", { bubbles: true }));
}

/** Shows every body in a log rendered or as plain text, and sets the switch to match. */
export function setLogRender(log, mode) {
  const m = MODES.has(mode) ? mode : "rendered";
  log.dataset.render = m;
  for (const el of log.querySelectorAll(".fh-activity-log__text")) {
    const pin = el.getAttribute("data-render");
    paint(el, MODES.has(pin) ? pin : m);
  }
  for (const b of log.querySelectorAll(".fh-activity-log__render [data-render]")) b.setAttribute("aria-pressed", String(b.dataset.render === m));
  log.dispatchEvent(new CustomEvent("fh:log-render", { bubbles: true, detail: { mode: m } }));
}

function bind(log) {
  const sw = log.querySelector(".fh-activity-log__render");
  if (sw && !sw.dataset.bound) {
    sw.dataset.bound = "";
    sw.hidden = false;
    sw.addEventListener("click", (e) => {
      const b = e.target.closest("[data-render]");
      if (!b || !sw.contains(b)) return;
      setLogRender(log, b.dataset.render);
      remember(b.dataset.render);
    });
  }
  setLogRender(log, stored() ?? log.dataset.render ?? "rendered");
}

/** Wires every .fh-activity-log in root (or root itself). Safe to call again after entries change. */
export function boot(root = document) {
  const logs = root.matches?.(".fh-activity-log") ? [root] : [...root.querySelectorAll(".fh-activity-log")];
  for (const log of logs) bind(log);
  return logs;
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => boot(), { once: true });
  else boot();
}

export default boot;
