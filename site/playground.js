// Firehorse playground: drag blocks, reorder, theme, preview, export.
import { BLOCKS, PRESETS } from "./pg-blocks.js";
import { agentMenu } from "./site-features.js";
import { FirehorseTable } from "./datatable.js";

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const page = $("#pg-page"), frame = $("#pg-frame");
const store = { get: (k) => { try { return localStorage.getItem(k); } catch { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch {} } };

/* —— Toasts (the site's own toaster) —— */
window.fhToast = (msg, tone = "success") => {
  const t = document.createElement("div");
  t.className = "fh-toast"; t.dataset.tone = tone; t.setAttribute("role", "status");
  t.innerHTML = `<p></p><button class="fh-close" type="button" aria-label="Dismiss"></button>`;
  t.querySelector("p").textContent = msg; t.querySelector("button").onclick = () => t.remove();
  $("#toaster").append(t); setTimeout(() => t.remove(), 4200);
};
const toast = window.fhToast;

/* —— Library —— */
const tones = { Navigation: "sky", Heroes: "accent", Content: "teal", Commerce: "amber", Data: "violet", Conversion: "lime" };
const groups = [...new Set(BLOCKS.map((b) => b.group))];
$("#pg-blocks").innerHTML = groups.map((g) => `<div class="pg-group" data-tone="${tones[g]}"><p class="fh-label">${g}</p>${BLOCKS.filter((b) => b.group === g).map((b) => `<button class="pg-item" type="button" draggable="true" data-block="${b.id}"><span class="fh-icon-tile"><i class="fh-icon fh-icon--${b.icon}" aria-hidden="true"></i></span>${b.name}</button>`).join("")}</div>`).join("");
$("#pg-search").addEventListener("input", (e) => {
  const q = e.target.value.trim().toLowerCase();
  for (const it of $$(".pg-item")) it.hidden = q && !it.textContent.toLowerCase().includes(q);
});

/* —— Canvas state —— */
let uid = 0;
const blockById = (id) => BLOCKS.find((b) => b.id === id);
function wrap(id) {
  const b = blockById(id);
  const el = document.createElement("div");
  el.className = "pg-block";
  el.dataset.block = id;
  el.dataset.key = `b${++uid}`;
  el.innerHTML = `<div class="pg-tools" role="toolbar" aria-label="${b.name} block"><b>${b.name}</b>
    <button class="fh-dt__tool" type="button" data-act="drag" draggable="true" aria-label="Drag to move"><i class="fh-icon fh-icon--grip-vertical" aria-hidden="true"></i></button>
    <button class="fh-dt__tool" type="button" data-act="up" aria-label="Move up"><i class="fh-icon fh-icon--chevron-up" aria-hidden="true"></i></button>
    <button class="fh-dt__tool" type="button" data-act="down" aria-label="Move down"><i class="fh-icon fh-icon--chevron-down" aria-hidden="true"></i></button>
    <button class="fh-dt__tool" type="button" data-act="dup" aria-label="Duplicate"><i class="fh-icon fh-icon--copy" aria-hidden="true"></i></button>
    <button class="fh-dt__tool" type="button" data-act="del" aria-label="Delete"><i class="fh-icon fh-icon--trash-2" aria-hidden="true"></i></button></div>${b.html}`;
  return el;
}
const hydrate = () => {
  for (const el of $$("[data-fh-datatable]:not([data-fh-ready])", page)) {
    const src = el.querySelector('script[type="application/json"]');
    if (src) { el.dataset.fhReady = ""; el.fhTable = new FirehorseTable(el, JSON.parse(src.textContent)); }
  }
};
const save = () => store.set("fh-pg", JSON.stringify($$(".pg-block", page).map((b) => b.dataset.block)));
function add(id, before = null) { page.insertBefore(wrap(id), before); hydrate(); save(); }
function load(ids) { page.innerHTML = ""; ids.forEach((id) => blockById(id) && page.append(wrap(id))); hydrate(); save(); }

/* —— Presets —— */
const sel = $("#pg-preset");
sel.innerHTML += Object.entries(PRESETS).map(([k, p]) => `<option value="${k}">${p.name}</option>`).join("");
$("#pg-preset-chips").innerHTML = Object.entries(PRESETS).map(([k, p], n) => `<button class="fh-chip fh-chip--tone" type="button" data-tone="${["sky", "teal", "amber", "rose", "lime", "violet", "fuchsia", "orange"][n % 8]}" data-preset="${k}">${p.name}</button>`).join("");
function preset(k) {
  const p = PRESETS[k]; if (!p) return;
  load(p.blocks);
  // A preset that names a theme switches to it; one that doesn't leaves the current theme alone.
  if ("theme" in p) window.Firehorse?.setTheme(p.theme);
  setScheme(p.scheme ?? "dark");
  sel.value = k;
  toast(`${p.name} loaded. Drag, reorder or delete blocks.`);
}
sel.addEventListener("change", () => sel.value && preset(sel.value));
document.addEventListener("click", (e) => { const c = e.target.closest("[data-preset]"); if (c) preset(c.dataset.preset); });

/* —— Width & scheme —— */
document.addEventListener("change", (e) => {
  if (e.target.name === "pg-width") { frame.dataset.width = e.target.value; frame.style.setProperty("--pg-width", e.target.value === "fluid" ? "100%" : `${e.target.value}px`); }
  if (e.target.name === "pg-scheme") setScheme(e.target.value);
});
function setScheme(v) { frame.dataset.fhScheme = v; const r = $(`input[name="pg-scheme"][value="${v}"]`); if (r) r.checked = true; }

/* —— Block tools —— */
page.addEventListener("click", (e) => {
  const b = e.target.closest("[data-act]"); if (!b) return;
  const blk = b.closest(".pg-block");
  const act = b.dataset.act;
  if (act === "up" && blk.previousElementSibling) blk.previousElementSibling.before(blk);
  if (act === "down" && blk.nextElementSibling) blk.nextElementSibling.after(blk);
  if (act === "dup") { blk.after(wrap(blk.dataset.block)); hydrate(); }
  if (act === "del") blk.remove();
  save();
});
// Clicking a library item appends.
$("#pg-blocks").addEventListener("click", (e) => { const it = e.target.closest(".pg-item"); if (it) { add(it.dataset.block); toast(`${blockById(it.dataset.block).name} added`); page.lastElementChild?.scrollIntoView({ behavior: "smooth", block: "nearest" }); } });

/* —— Drag and drop: from the library, and to reorder —— */
let drag = null;
const marker = Object.assign(document.createElement("div"), { className: "pg-drop" });
document.addEventListener("dragstart", (e) => {
  const lib = e.target.closest?.(".pg-item");
  const handle = e.target.closest?.('[data-act="drag"]');
  if (lib) drag = { type: "new", id: lib.dataset.block };
  else if (handle) { const blk = handle.closest(".pg-block"); drag = { type: "move", el: blk }; blk.dataset.dragging = ""; e.dataTransfer.setDragImage(blk, 20, 20); }
  else return;
  e.dataTransfer.effectAllowed = "copyMove";
  e.dataTransfer.setData("text/plain", drag.id ?? "move");
});
const target = (y) => $$(".pg-block", page).find((b) => { const r = b.getBoundingClientRect(); return y < r.top + r.height / 2; }) ?? null;
frame.addEventListener("dragover", (e) => { if (!drag) return; e.preventDefault(); const t = target(e.clientY); t ? page.insertBefore(marker, t) : page.append(marker); });
frame.addEventListener("dragleave", (e) => { if (!frame.contains(e.relatedTarget)) marker.remove(); });
frame.addEventListener("drop", (e) => {
  if (!drag) return; e.preventDefault();
  const at = marker.parentNode ? marker : null;
  if (drag.type === "new") { at ? at.replaceWith(wrap(drag.id)) : page.append(wrap(drag.id)); hydrate(); toast(`${blockById(drag.id).name} added`); }
  else { at ? at.replaceWith(drag.el) : page.append(drag.el); }
  marker.remove(); save();
});
document.addEventListener("dragend", () => { if (drag?.el) delete drag.el.dataset.dragging; drag = null; marker.remove(); });

/* —— Export —— */
function exportHtml() {
  const theme = document.documentElement.getAttribute("data-fh-theme") || "";
  const scheme = frame.dataset.fhScheme ?? "dark";
  const clone = page.cloneNode(true);
  clone.querySelectorAll(".pg-tools").forEach((t) => t.remove());
  // Datatables export as their source JSON, not the rendered table.
  clone.querySelectorAll("[data-fh-datatable]").forEach((dt, n) => {
    const src = page.querySelectorAll("[data-fh-datatable]")[n].fhTable?.cfg;
    dt.removeAttribute("data-fh-ready"); dt.removeAttribute("data-view"); dt.removeAttribute("data-density");
    dt.innerHTML = `<script type="application/json">${JSON.stringify(src ?? {})}<\/script>`;
  });
  const body = [...clone.querySelectorAll(".pg-block")].map((b) => b.innerHTML.trim()).join("\n\n");
  const base = "https://firehorse.rascode.dev";
  return `<!doctype html>
<html lang="en" data-fh-scheme="${scheme}"${theme ? ` data-fh-theme="${theme}"` : ""}>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Built with Firehorse</title>
<link rel="stylesheet" href="${base}/firehorse.css">
<link rel="stylesheet" href="${base}/themes/rascode.css">${theme ? `\n<link rel="stylesheet" href="${base}/themes/${theme}.css">` : ""}
<link rel="stylesheet" href="${base}/icons.css">
</head>
<body>
<div class="fh-page">
${body.replaceAll('src="img/', `src="${base}/img/`)}
</div>
<script type="module" src="${base}/firehorse.js"></script>${body.includes("data-fh-datatable") ? `\n<script type="module" src="${base}/datatable.js"></script>` : ""}
</body>
</html>`;
}
const outline = () => $$(".pg-block", page).map((b, n) => `${n + 1}. ${blockById(b.dataset.block).name}`).join("\n");
async function copy(t) { try { await navigator.clipboard.writeText(t); return true; } catch { return false; } }

document.addEventListener("click", async (e) => {
  const b = e.target.closest("[data-pg]"); if (!b) return;
  if (!page.children.length && b.dataset.pg !== "clear") return toast("Add a block first.", "danger");
  if (b.dataset.pg === "clear") { load([]); sel.value = ""; toast("Canvas cleared"); }
  if (b.dataset.pg === "copy") toast((await copy(exportHtml())) ? "HTML copied" : "Couldn't copy", "success");
  if (b.dataset.pg === "download") {
    const a = Object.assign(document.createElement("a"), { href: URL.createObjectURL(new Blob([exportHtml()], { type: "text/html" })), download: "firehorse-page.html" });
    a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000); toast("Downloading firehorse-page.html");
  }
});

agentMenu($("#pg-agents"), () => {
  const html = exportHtml();
  const head = `I built this page in the Firehorse playground. Rebuild it in my project with the Firehorse design system.\nRead https://firehorse.rascode.dev/llms.txt first. Use only fh-* classes and --fh-* tokens, keep the data-fh-theme and data-fh-scheme attributes on <html>, and replace the sample copy and images with mine.\n\nSections, in order:\n${outline()}\n`;
  const full = `${head}\nHere is the HTML:\n\n${html}`;
  // Links carry the outline when the full page is too long for a URL; the clipboard always has everything.
  return { prompt: full.length < 6000 ? full : `${head}\nThe full HTML is on my clipboard; I'll paste it next.`, clip: full };
}, { label: "Send to agent" });

/* —— Boot —— */
const fromHash = location.hash.match(/^#preset-(\w+)/)?.[1];
const saved = JSON.parse(store.get("fh-pg") || "null");
if (fromHash && PRESETS[fromHash]) preset(fromHash);
else if (saved?.length) load(saved);
else preset("landing");
