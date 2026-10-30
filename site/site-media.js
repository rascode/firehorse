/* Media page: safe-area guides for the social canvases, and the slide builder.
 * The builder's layouts are the SLD demos on this page (one source of truth);
 * it exports a reveal.js deck that loads Firehorse from this site. */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const pad = (n) => String(n).padStart(2, "0");
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/* —— Safe areas —— */
const guides = $("[data-site-guides]");
// The switch covers the canvases in its own section (the page builder moves section ids onto the family chips).
guides?.addEventListener("change", () => $$(".fh-canvas", guides.closest("section")).forEach((c) => c.toggleAttribute("data-fh-guides", guides.checked)));

/* —— Slide builder —— */
const root = $(".site-builder");
if (root) {
  const KEY = "fh-site-deck";
  const TONES = ["accent", "sky", "lime", "teal", "violet", "fuchsia", "amber", "rose", "orange"];
  const EDITABLE = ".fh-canvas__title, .fh-canvas__sub, .fh-canvas__eyebrow, .fh-canvas__mark, .fh-canvas__badge, .fh-canvas__index, .fh-canvas__foot > span:first-child, .fh-slide__list li > span, .fh-slide__stats b, .fh-slide__stats span, .fh-slide__quote, .fh-slide__cite, .fh-slide__code";

  const strip = (el) => {
    el.removeAttribute("data-fh-id"); el.removeAttribute("data-fh-name"); el.removeAttribute("data-fh-guides");
    $$("[contenteditable]", el).forEach((e) => e.removeAttribute("contenteditable"));
    $$(".site-id, .site-ids", el).forEach((e) => e.remove());
    return el;
  };
  const layouts = $$('[data-fh-id^="SLD-"]').map((el) => ({ id: el.dataset.fhId, name: el.dataset.fhName, html: strip(el.cloneNode(true)).outerHTML }));
  const fresh = () => layouts.map((l) => ({ html: l.html }));
  const toEl = (html) => { const t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstElementChild; };
  const number = (el, i, n) => {
    const s = $(".fh-canvas__foot > span:last-child", el);
    if (s && /^\s*\d+\s*\/\s*\d+\s*$/.test(s.textContent)) s.textContent = `${pad(i + 1)} / ${pad(n)}`;
    return el;
  };

  let deck, cur = 0, saveTimer;
  try { deck = JSON.parse(localStorage.getItem(KEY)); } catch {}
  if (!Array.isArray(deck) || !deck.length || !deck.every((s) => typeof s?.html === "string")) deck = fresh();
  const save = () => { clearTimeout(saveTimer); saveTimer = setTimeout(() => { try { localStorage.setItem(KEY, JSON.stringify(deck)); } catch {} }, 250); };

  const list = $("[data-builder-list]", root), view = $("[data-builder-view]", root);
  const select = $("[data-builder-layout]", root), tones = $("[data-builder-tones]", root);
  select.innerHTML = layouts.map((l, i) => `<option value="${i}">${esc(l.name)}</option>`).join("");
  tones.innerHTML = TONES.map((t) => `<label data-tone="${t}" style="--swatch: var(--fh-tone)"><input type="radio" name="builder-tone" value="${t}" aria-label="${t}"></label>`).join("");

  const thumb = (i) => {
    const mini = document.createElement("div");
    mini.className = "site-builder__mini";
    mini.inert = true;
    mini.append(number(toEl(deck[i].html), i, deck.length));
    return mini;
  };
  const renderList = () => {
    list.replaceChildren(...deck.map((s, i) => {
      const li = document.createElement("li");
      li.className = "site-builder__item";
      if (i === cur) li.setAttribute("aria-current", "true");
      li.append(thumb(i));
      li.insertAdjacentHTML("beforeend", `<button class="site-builder__pick" type="button" data-pick="${i}" aria-label="Edit slide ${i + 1}"${i === cur ? ' aria-pressed="true"' : ""}></button>
        <div class="site-builder__tools"><span>${pad(i + 1)}</span>
          <button class="fh-button fh-button--sm fh-button--ghost fh-button--icon" type="button" data-move="-1" data-i="${i}" aria-label="Move slide ${i + 1} up"${i === 0 ? " disabled" : ""}><i class="fh-icon fh-icon--chevron-up" aria-hidden="true"></i></button>
          <button class="fh-button fh-button--sm fh-button--ghost fh-button--icon" type="button" data-move="1" data-i="${i}" aria-label="Move slide ${i + 1} down"${i === deck.length - 1 ? " disabled" : ""}><i class="fh-icon fh-icon--chevron-down" aria-hidden="true"></i></button>
          <button class="fh-button fh-button--sm fh-button--ghost fh-button--icon" type="button" data-remove="${i}" aria-label="Delete slide ${i + 1}"${deck.length === 1 ? " disabled" : ""}><i class="fh-icon fh-icon--trash-2" aria-hidden="true"></i></button>
        </div>`);
      return li;
    }));
  };
  const renderView = () => {
    const el = number(toEl(deck[cur].html), cur, deck.length);
    $$(EDITABLE, el).forEach((e) => { e.contentEditable = "plaintext-only"; e.spellcheck = false; });
    view.replaceChildren(el);
    const tone = el.getAttribute("data-tone");
    $$("input", tones).forEach((r) => { r.checked = r.value === tone; });
  };
  const render = () => { cur = Math.max(0, Math.min(cur, deck.length - 1)); renderList(); renderView(); save(); };

  // Edits: write the slide back, refresh its thumbnail, keep the caret where it is.
  view.addEventListener("input", () => {
    const el = view.firstElementChild;
    if (!el) return;
    deck[cur].html = strip(el.cloneNode(true)).outerHTML;
    $$(".site-builder__item")[cur]?.querySelector(".site-builder__mini")?.replaceWith(thumb(cur));
    save();
  });
  view.addEventListener("keydown", (e) => { if (e.key === "Enter" && !e.target.closest(".fh-slide__code")) { e.preventDefault(); e.target.blur(); } });

  list.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    if (b.dataset.pick) { cur = Number(b.dataset.pick); render(); return; }
    if (b.dataset.move) {
      const i = Number(b.dataset.i), j = i + Number(b.dataset.move);
      [deck[i], deck[j]] = [deck[j], deck[i]];
      cur = j; render(); return;
    }
    if (b.dataset.remove) { deck.splice(Number(b.dataset.remove), 1); if (cur >= deck.length) cur = deck.length - 1; render(); }
  });
  tones.addEventListener("change", (e) => {
    const el = toEl(deck[cur].html);
    el.setAttribute("data-tone", e.target.value);
    deck[cur].html = el.outerHTML;
    render();
  });
  $("[data-builder-add]", root).addEventListener("click", () => {
    deck.splice(cur + 1, 0, { html: layouts[Number(select.value)].html });
    cur += 1; render();
    list.children[cur]?.scrollIntoView({ block: "nearest", inline: "nearest" });
  });
  $("[data-builder-reset]", root).addEventListener("click", () => {
    if (!confirm("Start over from the sample slides? Your edits will be lost.")) return;
    deck = fresh(); cur = 0; render();
  });

  /* —— Export: a reveal.js deck ——
   * reveal.js core from jsDelivr (no reveal theme), Firehorse + the reveal adapter from this site. */
  const deckTitle = () => (toEl(deck[0].html).querySelector(".fh-canvas__title")?.textContent || "Deck").replace(/\s+/g, " ").trim();
  const deckHtml = () => {
    const o = location.origin, d = document.documentElement;
    const theme = d.getAttribute("data-fh-theme"), scheme = d.getAttribute("data-fh-scheme");
    // Absolute asset URLs; lines are left as they are, so <pre> blocks keep their whitespace.
    const slides = deck.map((s, i) => "    " + number(toEl(s.html), i, deck.length).outerHTML.replace(/ (src|href)="\/(?!\/)/g, ` $1="${o}/`)).join("\n\n");
    // The page's own stylesheet URLs carry content stamps, so a deck never picks up a stale cached copy.
    const sheet = (f) => { const l = [...document.querySelectorAll('link[rel="stylesheet"]')].find((x) => new URL(x.href).pathname === `/${f}`); return l ? l.href : `${o}/${f}`; };
    return `<!doctype html>
<html lang="en"${theme ? ` data-fh-theme="${esc(theme)}"` : ""}${scheme ? ` data-fh-scheme="${esc(scheme)}"` : ""}>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(deckTitle())}</title>
<!-- Built with the Firehorse slide builder: ${o}/media/#slide-layouts -->
<!-- reveal.js core only: Firehorse styles the deck, so no reveal theme. -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@6/dist/reveal.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500;600;700&family=Inter:wght@300..700&display=swap">
<link rel="stylesheet" href="${sheet("firehorse.css")}">
<link rel="stylesheet" href="${sheet("themes/rascode.css")}">
<link rel="stylesheet" href="${sheet("themes.css")}">
<link rel="stylesheet" href="${o}/reveal.css">
</head>
<body>
<div class="reveal">
  <div class="slides">
${slides}
  </div>
</div>
<script type="module">
  import Reveal from "https://cdn.jsdelivr.net/npm/reveal.js@6/dist/reveal.mjs";
  import Notes from "https://cdn.jsdelivr.net/npm/reveal.js@6/dist/plugin/notes.mjs";
  // Firehorse slides are 1280 × 720 canvases. Add <aside class="notes"> to any slide; press S for speaker view.
  Reveal.initialize({ width: 1280, height: 720, margin: 0.04, center: false, hash: true, plugins: [Notes] });
</script>
</body>
</html>
`;
  };
  const flash = (b, text) => { const span = b.lastChild; const was = span.textContent; span.textContent = text; setTimeout(() => { span.textContent = was; }, 1600); };
  $("[data-builder-copy]", root).addEventListener("click", async (e) => {
    const b = e.currentTarget;
    try { await navigator.clipboard.writeText(deckHtml()); flash(b, "Copied"); } catch { flash(b, "Copy failed"); }
  });
  $("[data-builder-download]", root).addEventListener("click", () => {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([deckHtml()], { type: "text/html" }));
    a.download = (deckTitle().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "deck") + ".html";
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 4000);
  });
  $("[data-builder-present]", root).addEventListener("click", () => {
    const url = URL.createObjectURL(new Blob([deckHtml()], { type: "text/html" }));
    window.open(url, "_blank");
    setTimeout(() => URL.revokeObjectURL(url), 60000);
  });

  render();
}
