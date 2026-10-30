/* Firehorse Index on the docs site.
 * Every family and variant carries data-fh-id ("CHP", "CHP-02"). This file:
 *  1. reads them into a registry (from the page, or /index.json elsewhere),
 *  2. shows each ID beside its implementation; clicking copies the ID with
 *     its markup and instructions for an agent,
 *  3. renders the searchable index table (#site-index),
 *  4. makes #CHP-02 links work,
 *  5. runs KC, the Firehorse guide, who turns descriptions into IDs. */
const $ = (s, r = document) => (r ? r.querySelector(s) : null);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const BASE = "https://firehorse.rascode.dev";
const toast = (m, t) => window.fhToast?.(m, t);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const words = (s) => String(s).toLowerCase().replace(/&amp;/g, "&").split(/[^a-z0-9]+/).filter((w) => w.length > 1);

/* —— 1. Registry —— */
const clean = (html) => {
  const s = html.replace(/ data-fh-(?:id|name)="[^"]*"/g, "").replace(/<button class="site-id[\s\S]*?<\/button>/g, "").replace(/^\n+|\s+$/g, "");
  const lines = s.split("\n");
  const ind = Math.min(...lines.slice(1).filter((l) => l.trim()).map((l) => l.match(/^\s*/)[0].length), Infinity);
  return [lines[0].trimStart(), ...lines.slice(1).map((l) => (Number.isFinite(ind) ? l.slice(ind) : l))].join("\n").trim();
};
const classesOf = (html) => [...new Set([...html.matchAll(/class="([^"]*)"/g)].flatMap((m) => m[1].split(/\s+/)).filter((c) => /^fh-/.test(c) && !/^fh-icon--/.test(c)))];
const txt = (el) => (el?.textContent ?? "").replace(/\s+/g, " ").trim();

function fromPage() {
  const fams = new Map();
  for (const el of $$("[data-fh-id]")) {
    const id = el.dataset.fhId;
    if (id.includes("-")) continue;
    const head = $(":scope > .site-demo__head", el);
    const stage = $(":scope > [data-demo]", el);
    const section = el.closest("section[data-fh-label]")?.dataset.fhLabel ?? "";
    fams.set(id, { id, el, name: el.dataset.fhName || txt($("h3", head)).replace(/^[A-Z]{3}\s*/, "") || id, section, summary: txt($("p", head)) || txt($("code", head)), markup: () => clean(stage ? stage.innerHTML : el.outerHTML), variants: [] });
  }
  for (const el of $$("[data-fh-id]")) {
    const id = el.dataset.fhId;
    if (!id.includes("-")) continue;
    const f = fams.get(id.slice(0, 3));
    if (!f) continue;
    const cat = el.classList.contains("site-cat");
    const config = cat ? Object.fromEntries([...el.attributes].filter((a) => /^data-fh-(card|avatar|button|chip|radius|density|table|card-media)$/.test(a.name)).map((a) => [a.name, a.value])) : {};
    f.variants.push({ id, el, family: f, name: el.dataset.fhName || (cat ? txt($("figcaption span:last-child", el)) : txt(el)) || id, config, markup: () => clean(cat ? $(".site-cat__stage", el).innerHTML : el.outerHTML) });
  }
  return [...fams.values()];
}
async function fromJson() {
  try {
    const r = await fetch(new URL("/index.json", document.baseURI));
    const j = await r.json();
    return j.families.map((f) => { const fam = { ...f, markup: () => f.markup }; fam.variants = f.variants.map((v) => ({ ...v, family: fam, markup: () => v.markup })); return fam; });
  } catch { return []; }
}
const entries = (fams) => fams.flatMap((f) => [{ ...f, family: null, kind: "family" }, ...f.variants.map((v) => ({ ...v, kind: "variant", section: f.section, summary: f.summary }))]);

/* —— 2. Copy payload: more than the view shows —— */
function payload(e) {
  const fam = e.family;
  const title = fam ? `${fam.name} › ${e.name}` : e.name;
  const parts = e.variants?.length ? e.variants : null;
  const markup = parts ? parts.map((v) => `<!-- ${v.id} · ${v.name} -->\n${v.markup()}`).join("\n\n") : e.markup();
  const cfg = Object.entries(e.config ?? {}).map(([k, v]) => `${k}="${v}"`).join(" ");
  return [
    `Firehorse ${e.id} · ${title}`,
    e.summary ? `What: ${e.summary}` : "",
    `Classes: ${classesOf(markup).join(" ")}`,
    cfg ? `Config on the parent: ${cfg}` : "",
    fam ? `Family: ${fam.id} (${fam.variants.length} variants: ${fam.variants.map((v) => v.id).join(", ")})` : e.variants?.length ? `Variants: ${e.variants.map((v) => `${v.id} ${v.name}`).join(" · ")}` : "",
    "",
    parts ? "Markup, one block per variant:" : "Markup:",
    markup,
    "",
    `Agent: use Firehorse ${e.id} exactly as marked up above. Keep its classes and structure; change only the text, links and images. Look up ${e.id} in ${BASE}/agent/index.md and follow ${BASE}/agent/system.md. Load ${BASE}/firehorse.css.`,
  ].filter((l, i, a) => l !== "" || a[i - 1] !== "").join("\n");
}
async function copyEntry(e) {
  try { await navigator.clipboard.writeText(payload(e)); toast(`Copied ${e.id} · ${e.name}, with markup and agent notes`); }
  catch { toast("Couldn't reach the clipboard. Select the ID and copy it.", "danger"); }
}
const tagHtml = (e, extra = "") => `<button class="site-id${extra}" type="button" data-copy-id="${e.id}" title="Copy ${e.id}: ${esc(e.name)}, with markup"><span>${e.id}</span></button>`;

/* —— 3. Tags beside implementations —— */
const root = document.documentElement;
const IDS_KEY = "fh-site-ids";
const overlays = [];
function placeTags() {
  if (!root.hasAttribute("data-site-ids")) return;
  for (const o of overlays) {
    const h = o.host.getBoundingClientRect(), r = o.el.getBoundingClientRect();
    if (!r.width && !r.height) { o.tag.hidden = true; continue; }
    o.tag.hidden = false;
    o.tag.style.insetInlineStart = `${Math.max(0, r.left - h.left)}px`;
    o.tag.style.insetBlockStart = `${Math.max(0, r.top - h.top - 10)}px`;
  }
}
function setIds(on, save = true) {
  root.toggleAttribute("data-site-ids", on);
  for (const b of $$("[data-ids-toggle]")) b.setAttribute("aria-pressed", String(on));
  if (save) try { localStorage.setItem(IDS_KEY, on ? "1" : "0"); } catch {}
  requestAnimationFrame(placeTags);
}

function mountTags(list) {
  const byId = new Map(list.map((e) => [e.id, e]));
  for (const e of list) {
    if (!e.el) continue;
    if (e.kind === "family") {
      const h3 = $(":scope > .site-demo__head h3", e.el);
      if (h3) { h3.insertAdjacentHTML("afterbegin", tagHtml(e)); continue; }
    } else {
      const dt = e.el.parentElement?.tagName === "DD" ? e.el.parentElement.previousElementSibling : null;
      if (dt) {
        // One row can hold several variants: their tags share a strip at the top of the label.
        let ids = dt.querySelector(":scope > .site-ids");
        if (!ids) { dt.insertAdjacentHTML("afterbegin", '<span class="site-ids"></span>'); ids = dt.firstElementChild; }
        ids.insertAdjacentHTML("beforeend", tagHtml(e));
        continue;
      }
      const cap = $(":scope > figcaption", e.el);
      if (cap) { cap.insertAdjacentHTML("beforeend", tagHtml(e, " site-id--end")); continue; }
    }
    // Everything else: an overlay tag, shown in IDs mode.
    const host = e.el.closest(".site-demo__stage, main > section");
    if (!host) continue;
    host.classList.add("site-id-host");
    host.insertAdjacentHTML("beforeend", tagHtml(e, " site-id--float"));
    overlays.push({ el: e.el, host, tag: host.lastElementChild });
  }
  document.addEventListener("click", (ev) => {
    const b = ev.target.closest("[data-copy-id]");
    if (b) { ev.preventDefault(); ev.stopPropagation(); const e = byId.get(b.dataset.copyId); if (e) copyEntry(e); }
  }, true);
  const ro = new ResizeObserver(() => requestAnimationFrame(placeTags));
  new Set(overlays.map((o) => o.host)).forEach((h) => ro.observe(h));
  const io = new IntersectionObserver((es) => { if (es.some((x) => x.isIntersecting)) requestAnimationFrame(placeTags); });
  new Set(overlays.map((o) => o.host)).forEach((h) => io.observe(h));
  addEventListener("resize", () => requestAnimationFrame(placeTags));

  // IDs toggle: one in the floating bar, one in the index.
  $$(".fh-dock__actions").slice(0, 1).forEach((a) => a.insertAdjacentHTML("afterbegin", `<button class="fh-button fh-button--sm fh-button--ghost site-ids-toggle" type="button" data-ids-toggle aria-pressed="false" title="Show every variant's ID"><i class="fh-icon fh-icon--hash" aria-hidden="true"></i><span>IDs</span></button>`));
  document.addEventListener("click", (ev) => { if (ev.target.closest("[data-ids-toggle]")) setIds(!root.hasAttribute("data-site-ids")); });
  let saved = null; try { saved = localStorage.getItem(IDS_KEY); } catch {}
  setIds(saved === "1", false);
  return byId;
}

/* —— 4. #CHP-02 links —— */
function goToId(byId, id, flash = true) {
  const e = byId.get(id);
  if (!e?.el) return false;
  if (e.kind === "variant") setIds(true);
  const target = e.el;
  for (const s = target.closest("main > section"); s; ) { s.style.contentVisibility = "visible"; break; }
  requestAnimationFrame(() => {
    const top = target.getBoundingClientRect().top + scrollY - (parseFloat(getComputedStyle(root).scrollPaddingBlockStart) || 120) - 24;
    scrollTo({ top, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    if (flash) { target.classList.remove("site-id-flash"); void target.offsetWidth; target.classList.add("site-id-flash"); setTimeout(() => target.classList.remove("site-id-flash"), 2400); }
    setTimeout(placeTags, 900);
  });
  return true;
}

/* —— Where an ID lives: #ID on this page, /page/#ID elsewhere (the docs are split into category pages). —— */
const pageOf = (e) => e.page ?? e.family?.page ?? "/";
const hrefOf = (e) => (pageOf(e) === location.pathname || e.el ? "" : pageOf(e)) + "#" + e.id;

/* —— 5. Index table —— */
function renderIndex(list, byId) {
  const box = $("#site-index");
  if (!box) return;
  const fams = list.filter((e) => e.kind === "family");
  const nV = list.length - fams.length;
  box.innerHTML = `
    <div class="site-index__bar">
      <label class="fh-search site-index__search"><span class="fh-sr-only">Find a component</span><input type="search" placeholder="Find by name, class or ID" data-index-q></label>
      <p class="site-index__count" aria-live="polite"><b>${fams.length}</b> families · <b>${nV}</b> variants</p>
      <button class="fh-button fh-button--sm fh-button--ghost site-ids-toggle" type="button" data-ids-toggle aria-pressed="${root.hasAttribute("data-site-ids")}"><i class="fh-icon fh-icon--hash" aria-hidden="true"></i><span>Show IDs on the page</span></button>
    </div>
    <div class="fh-table-wrap site-index__wrap"><table class="fh-table site-index__table">
      <thead><tr><th scope="col">ID</th><th scope="col">Component</th><th scope="col">Section</th><th scope="col">Variants</th></tr></thead>
      <tbody>${fams.map((f) => `<tr data-q="${esc([f.id, f.name, f.section, f.summary, ...f.variants.flatMap((v) => [v.id, v.name])].join(" ").toLowerCase())}">
        <td>${tagHtml(f)}</td>
        <td><a class="fh-link fh-link--quiet" href="${hrefOf(f)}">${esc(f.name)}</a></td>
        <td class="site-index__section">${esc(f.section)}</td>
        <td><span class="site-index__variants">${f.variants.map((v) => `<a href="${hrefOf(v)}" title="${esc(v.name)}">${v.id.slice(4)}</a>`).join("") || "<span>—</span>"}</span></td>
      </tr>`).join("")}</tbody>
    </table></div>`;
  const q = $("[data-index-q]", box), count = $(".site-index__count", box);
  q.addEventListener("input", () => {
    const t = words(q.value);
    let n = 0;
    for (const tr of $$("tbody tr", box)) { const show = t.every((w) => tr.dataset.q.includes(w)); tr.hidden = !show; n += show; }
    count.innerHTML = t.length ? `<b>${n}</b> of ${fams.length} families` : `<b>${fams.length}</b> families · <b>${nV}</b> variants`;
  });
}

/* —— 6. KC, the Firehorse guide —— */
const KC_LINKS = [
  { re: /\b(install|npm|setup|set up|get started|cdn|link)\b/, a: `One line: <code>npm i https://firehorse.rascode.dev/npm/firehorse-1.1.0.tgz</code>, or link <code>firehorse.css</code> from the CDN. No build step, no JavaScript required.`, href: "/#top", label: "Install" },
  { re: /\b(licen[cs]e|mit|free|open source)\b/, a: "MIT. Use it anywhere, commercial work included.", href: "https://github.com/rascode/firehorse/blob/main/LICENSE", label: "License" },
  { re: /\b(pro|price|pricing|cost|buy|purchase|paid)\b/, a: "Firehorse is free. Pro adds AI-powered fields and a skill that builds a design system from any URL.", href: "/pro/", label: "Firehorse Pro" },
  { re: /\b(stable|blog|news|updates?|subscribe|newsletter|changelog|release)\b/, a: "News, release notes and deep dives live in The Stable. Subscribe there and they come to you.", href: "/stable/", label: "The Stable" },
  { re: /\b(human|person|hire|custom|build it for me|work with|consult|justin)\b/, a: "For a build, a theme or a second pair of eyes, Rascode does that work. I'll point you to the door.", href: "/#services", label: "Work with Rascode" },
  { re: /\b(agent|claude|cursor|chatgpt|llm|ai)\b.*\b(read|use|build|files?)\b|\bllms\.txt\b/, a: "Your agent reads three files: the contract, the markup and the index. Hand it an ID and it knows exactly what to build.", href: "/agent/index.md", label: "agent/index.md" },
  { re: /\b(who are you|your name|what are you|kc)\b/, a: "KC. I'm the Firehorse: wild by nature, steady at work. I know every component by name and number. Describe what you're after and I'll give you its ID.", href: "/components/#index", label: "The index" },
];
function kcAnswer(q, list) {
  const id = q.toUpperCase().match(/\b[A-Z]{3}(?:-\d{2})?\b/g)?.find((x) => list.some((e) => e.id === x));
  if (id) { const e = list.find((x) => x.id === id); return { text: `${e.id} is <b>${esc(e.family ? `${e.family.name} › ${e.name}` : e.name)}</b>.${e.summary ? " " + esc(e.summary) : ""}`, hits: [e] }; }
  const lower = q.toLowerCase();
  for (const k of KC_LINKS) if (k.re.test(lower)) return { text: k.a, link: k };
  const t = words(q).filter((w) => !["the", "an", "and", "with", "for", "want", "need", "use", "show", "me", "find", "looking", "something", "that", "like", "one", "can", "you", "how", "do", "is", "it", "of", "to", "in", "on", "my", "what", "which"].includes(w));
  if (!t.length) return { text: "Tell me what you're picturing, in your own words: \"a filled chip with an icon\", \"pricing badge\", \"glass card\". I'll find its ID." };
  const scored = list.map((e) => {
    const hay = words([e.id, e.name, e.family?.name, e.section, e.summary, e.kind === "variant" ? classesOf(e.markup()).join(" ") : ""].join(" "));
    let s = 0;
    for (const w of t) for (const h of hay) { if (h === w) s += 3; else if (h.startsWith(w) || w.startsWith(h) && h.length > 3) s += 1.5; }
    if (e.kind === "variant") s += 0.2;
    return [s, e];
  }).filter(([s]) => s >= 3).sort((a, b) => b[0] - a[0]).slice(0, 4).map(([, e]) => e);
  if (!scored.length) return { text: "Nothing in the index answers to that. Try another word, or browse the full index.", link: { href: "/components/#index", label: "Open the index" } };
  return { text: scored.length === 1 ? "That's this one:" : "Here's what fits, best first:", hits: scored };
}
function mountKC(list) {
  const face = `<svg viewBox="0 0 24 24" aria-hidden="true"><use href="#fh-kc"/></svg>`;
  document.body.insertAdjacentHTML("beforeend", `
<button class="site-kc-launch" type="button" data-kc-open aria-haspopup="dialog"><span class="site-kc-face">${face}</span><span>Ask KC</span></button>
<dialog class="fh-dialog fh-dialog--float fh-detail site-kc" id="kc" aria-labelledby="kc-title" data-tone="sky" style="--fh-dialog-size: 25rem">
  <header class="fh-detail__header">
    <div class="fh-detail__bar"><span>The Firehorse guide</span><button class="fh-close" type="button" data-kc-close aria-label="Close KC"></button></div>
    <div class="fh-detail__identity"><span class="site-kc-face site-kc-face--lg">${face}</span><div><h2 id="kc-title">KC</h2><p>Knows every component by name and number</p></div></div>
  </header>
  <div class="fh-detail__body">
    <div class="fh-chat site-kc__log" role="log" aria-live="polite" aria-label="Conversation with KC"></div>
    <div class="fh-chips fh-chips--wrap site-kc__ask" aria-label="Try asking">
      <button class="fh-chip fh-chip--sm" type="button" data-kc-ask="A filled chip with an icon">A filled chip with an icon</button>
      <button class="fh-chip fh-chip--sm" type="button" data-kc-ask="Glass card">Glass card</button>
      <button class="fh-chip fh-chip--sm" type="button" data-kc-ask="What is CUC-02?">What is CUC-02?</button>
      <button class="fh-chip fh-chip--sm" type="button" data-kc-ask="How do I install it?">How do I install it?</button>
    </div>
  </div>
  <footer class="fh-detail__footer site-kc__footer">
    <form class="site-kc__form" data-kc-form><label class="fh-sr-only" for="kc-q">Ask KC</label><input class="fh-input" id="kc-q" autocomplete="off" placeholder="Describe a component, or give an ID"><button class="fh-button fh-button--sm" type="submit">Ask</button></form>
    <p class="site-kc__note">KC answers from the Firehorse Index.</p>
  </footer>
</dialog>`);
  const dlg = $("#kc"), log = $(".site-kc__log", dlg), input = $("#kc-q", dlg);
  const endpoint = document.querySelector('meta[name="fh-kc-endpoint"]')?.content || "";
  const history = [];
  const say = (who, html) => {
    log.insertAdjacentHTML("beforeend", who === "kc"
      ? `<div class="fh-message" data-from="them" data-tone="sky"><span class="fh-avatar fh-avatar--sm site-kc-face">${face}</span><div class="fh-message__bubble"><p class="fh-message__name">KC</p>${html}</div></div>`
      : `<div class="fh-message" data-from="me"><div class="fh-message__bubble"><p>${esc(html)}</p></div></div>`);
    log.lastElementChild.scrollIntoView({ block: "nearest" });
  };
  const hitsHtml = (hits) => `<ul class="site-kc__hits">${hits.map((e) => `<li>${tagHtml(e)}<a href="${hrefOf(e)}" data-kc-go>${esc(e.family ? `${e.family.name} › ${e.name}` : e.name)}</a></li>`).join("")}</ul><p class="site-kc__hint">Click an ID to copy it with its markup.</p>`;
  say("kc", `<p>Hey. I'm KC. Describe the piece you want in your own words and I'll give you its ID, so you and your agent are talking about the same thing.</p>`);
  async function ask(q) {
    q = q.trim(); if (!q) return;
    say("me", q); history.push({ role: "user", text: q });
    if (endpoint) {
      try {
        const r = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ agent: "kc", message: q, history, page: location.href }) });
        const j = await r.json(); if (j.reply) { say("kc", `<p>${esc(j.reply)}</p>`); history.push({ role: "agent", text: j.reply }); return; }
      } catch {}
    }
    const a = kcAnswer(q, list);
    say("kc", `<p>${a.text}</p>${a.hits ? hitsHtml(a.hits) : ""}${a.link ? `<p><a class="fh-action" href="${a.link.href}" data-kc-go>${esc(a.link.label)}</a></p>` : ""}`);
    history.push({ role: "agent", text: a.text.replace(/<[^>]+>/g, "") });
  }
  document.addEventListener("click", (ev) => {
    if (ev.target.closest("[data-kc-open]")) { dlg.showModal(); input.focus(); }
    if (ev.target.closest("[data-kc-close]")) dlg.close();
    const chip = ev.target.closest("[data-kc-ask]"); if (chip) ask(chip.dataset.kcAsk);
    if (ev.target.closest("[data-kc-go]")) dlg.close();
  });
  dlg.addEventListener("click", (ev) => { if (ev.target === dlg) dlg.close(); });
  $("[data-kc-form]", dlg).addEventListener("submit", (ev) => { ev.preventDefault(); ask(input.value); input.value = ""; });
}

/* —— Boot —— */
(async () => {
  const onPage = $$("[data-fh-id]").length > 0;
  // The whole Index (every page) feeds the Index table and KC; this page's own demos get the ID tags.
  const all = await fromJson();
  const pageFams = onPage ? fromPage() : [];
  const where = new Map(all.map((f) => [f.id, f.page]));
  for (const f of pageFams) f.page = where.get(f.id) ?? location.pathname;
  const ensureFamily = (list, fams) => { for (const e of list) if (e.kind === "variant" && !e.family) e.family = fams.find((f) => f.id === e.id.slice(0, 3)); return list; };
  const allList = ensureFamily(entries(all.length ? all : pageFams), all.length ? all : pageFams);
  const list = onPage ? ensureFamily(entries(pageFams), pageFams) : allList;
  renderIndex(allList);
  // Copy buttons for IDs that live on other pages (the hub's Index table, KC's answers).
  const byAll = new Map(allList.map((e) => [e.id, e]));
  const local = new Set(list.filter(() => onPage).map((e) => e.id));
  document.addEventListener("click", (ev) => {
    const b = ev.target.closest("[data-copy-id]");
    if (!b || local.has(b.dataset.copyId)) return;
    ev.preventDefault(); ev.stopPropagation();
    const e = byAll.get(b.dataset.copyId); if (e) copyEntry(e);
  }, true);
  if (onPage) {
    const byId = mountTags(list);
    const fromHash = () => { const id = decodeURIComponent(location.hash.slice(1)); if (/^[A-Z]{3}(-\d{2})?$/.test(id)) goToId(byId, id); };
    document.addEventListener("click", (ev) => {
      const a = ev.target.closest('a[href^="#"]'); if (!a) return;
      const id = a.getAttribute("href").slice(1);
      if (/^[A-Z]{3}(-\d{2})?$/.test(id) && byId.has(id)) { ev.preventDefault(); ev.stopImmediatePropagation(); history.pushState(null, "", `#${id}`); goToId(byId, id); }
    }, true);
    addEventListener("popstate", fromHash);
    if (location.hash) setTimeout(fromHash, 400);
  }
  mountKC(allList);
  // Keep the theme/mode controls snug to the left of Ask KC.
  const kcBtn = document.querySelector(".site-kc-launch");
  if (kcBtn) new ResizeObserver(() => document.documentElement.style.setProperty("--site-kc-w", `${kcBtn.offsetWidth}px`)).observe(kcBtn);
})();
