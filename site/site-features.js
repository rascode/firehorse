// Firehorse site features: send-to-agent menus, themes, catalog,
// icon browser, adaptive color picker, Pro profile finder, small demos.
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const toast = (m, t) => window.fhToast?.(m, t);
const store = { get: (k) => { try { return localStorage.getItem(k); } catch { return null; } }, set: (k, v) => { try { v == null ? localStorage.removeItem(k) : localStorage.setItem(k, v); } catch {} } };

/* —— Send to agent ————————————————————————————————————————
 * Opens the agent with the prompt filled in where the agent supports a
 * prompt link; otherwise copies the prompt and opens the app. Every
 * choice also copies the prompt, so it's never lost. */
export const AGENTS = [
  { id: "claude", name: "Claude", note: "Anthropic", tone: "accent", icon: "sparkles", url: (p) => `https://claude.ai/new?q=${encodeURIComponent(p)}` },
  { id: "chatgpt", name: "ChatGPT", note: "OpenAI", tone: "teal", icon: "bot", url: (p) => `https://chatgpt.com/?q=${encodeURIComponent(p)}` },
  { id: "cursor", name: "Cursor", note: "Agent in your editor", tone: "neutral", icon: "terminal", url: (p) => `https://cursor.com/link/prompt?text=${encodeURIComponent(p.slice(0, 7000))}` },
  { id: "v0", name: "v0", note: "Vercel", tone: "neutral", icon: "layout-grid", url: (p) => `https://v0.app/chat?q=${encodeURIComponent(p)}` },
  { id: "lovable", name: "Lovable", note: "Builds the app", tone: "rose", icon: "heart", url: (p) => `https://lovable.dev/#prompt=${encodeURIComponent(p)}` },
  { id: "bolt", name: "Bolt", note: "StackBlitz", tone: "sky", icon: "zap", url: (p) => `https://bolt.new/?prompt=${encodeURIComponent(p)}` },
  { id: "copilot", name: "GitHub Copilot", note: "Prompt copied, then opens", tone: "violet", icon: "github", url: () => "https://github.com/copilot" },
  { id: "gemini", name: "Gemini", note: "Prompt copied, then opens", tone: "sky", icon: "sparkles", url: () => "https://gemini.google.com/app" },
  { id: "perplexity", name: "Perplexity", note: "Research the brief", tone: "teal", icon: "search", url: (p) => `https://www.perplexity.ai/search?q=${encodeURIComponent(p)}` },
  { id: "grok", name: "Grok", note: "xAI", tone: "neutral", icon: "bot", url: (p) => `https://grok.com/?q=${encodeURIComponent(p)}` },
  { id: "claude-code", name: "Claude Code", note: "Copies a terminal command", tone: "accent", icon: "terminal", command: (p) => `claude ${JSON.stringify(p)}` },
  { id: "codex", name: "Codex CLI", note: "Copies a terminal command", tone: "teal", icon: "terminal", command: (p) => `codex ${JSON.stringify(p)}` },
  { id: "gemini-cli", name: "Gemini CLI", note: "Copies a terminal command", tone: "sky", icon: "terminal", command: (p) => `gemini -p ${JSON.stringify(p)}` },
];

export const basePrompt = () =>
  ($("#agent-prompt")?.textContent.trim()) ||
  "Build this page with the Firehorse design system. Read https://firehorse.rascode.dev/llms.txt first and use only fh-* classes and --fh-* tokens.";

async function copyText(t) { try { await navigator.clipboard.writeText(t); return true; } catch { return false; } }

export async function sendTo(agent, prompt, clip = prompt) {
  const copied = await copyText(agent.command ? agent.command(clip) : clip);
  if (agent.command) { toast(copied ? `${agent.name} command copied. Paste it in your terminal.` : `Couldn't copy. Open ${agent.name} and paste the prompt.`, copied ? "success" : "danger"); return; }
  window.open(agent.url(prompt), "_blank", "noopener");
  toast(copied ? `Opening ${agent.name}. The prompt is also on your clipboard.` : `Opening ${agent.name}.`);
}

let menuSeq = 0;
export function agentMenu(host, getPrompt = basePrompt, { label = "Send to an agent", size = "lg" } = {}) {
  const id = `agents-${++menuSeq}`;
  host.innerHTML = `<button class="fh-button fh-button--${host.classList.contains("site-agents--sm") ? "sm" : size} fh-button--secondary" type="button" popovertarget="${id}" style="anchor-name: --${id}"><i class="fh-icon fh-icon--send" aria-hidden="true"></i>${label}<i class="fh-icon fh-icon--chevron-down" aria-hidden="true"></i></button>
    <div class="fh-menu site-agents__menu" id="${id}" popover style="position-anchor: --${id}" aria-label="Choose an agent">
      <p class="fh-menu__label">Open with the prompt</p>
      ${AGENTS.filter((a) => !a.command).map((a) => `<button type="button" data-agent="${a.id}" data-tone="${a.tone}"><span class="fh-icon-tile" style="--fh-icon-tile:1.6rem"><i class="fh-icon fh-icon--${a.icon}" aria-hidden="true"></i></span><span><b>${a.name}</b><small>${a.note}</small></span></button>`).join("")}
      <hr><p class="fh-menu__label">From your terminal</p>
      ${AGENTS.filter((a) => a.command).map((a) => `<button type="button" data-agent="${a.id}" data-tone="${a.tone}"><span class="fh-icon-tile" style="--fh-icon-tile:1.6rem"><i class="fh-icon fh-icon--${a.icon}" aria-hidden="true"></i></span><span><b>${a.name}</b><small>${a.note}</small></span></button>`).join("")}
      <hr><button type="button" data-agent="copy"><i class="fh-icon fh-icon--copy" aria-hidden="true"></i>Copy the prompt only</button>
    </div>`;
  host.addEventListener("click", async (e) => {
    const b = e.target.closest("[data-agent]");
    if (!b) return;
    $(`#${id}`).hidePopover?.();
    const got = await getPrompt();
    const { prompt, clip } = typeof got === "string" ? { prompt: got, clip: got } : got;
    if (b.dataset.agent === "copy") { toast((await copyText(clip)) ? "Prompt copied" : "Couldn't copy", "success"); return; }
    sendTo(AGENTS.find((a) => a.id === b.dataset.agent), prompt, clip);
  });
}
$$("[data-agent-menu]:not([data-agent-menu=\"manual\"])").forEach((h) => agentMenu(h));

/* —— Themes ——————————————————————————————————————————————
 * A theme carries every design decision (type, both schemes, shape,
 * density, avatar/card/button/chip/table styles). The list comes from
 * themes.json, which the theme compiler writes from src/themes/*.json.
 * Firehorse's enhancer (firehorse.js) does the switching: any
 * [data-fh-theme-select] control sets data-fh-theme on <html> and
 * remembers it. This file only draws the pickers. */
const ORDER = ["mustang", "friesian", "akhal-teke"];
let manifest = [];
try { manifest = (await (await fetch(new URL("themes.json", document.baseURI))).json()).themes ?? []; } catch {}
manifest.sort((a, b) => (ORDER.indexOf(a.name) + 1 || 99) - (ORDER.indexOf(b.name) + 1 || 99));
// The base theme is "no theme" in the picker (value ""); its CSS only scopes the preview card.
const base = manifest.find((t) => t.base);
export const BASE_THEME = { ...(base ?? { label: "Firehorse", tagline: "The base system.", config: {} }), name: "", scope: base?.name ?? "" };
export const THEMES = [BASE_THEME, ...manifest.filter((t) => !t.base)];
const themeOf = (name) => THEMES.find((t) => t.name === (name || "")) ?? BASE_THEME;
const LABELS = { avatar: "Avatar", card: "Card", cardMedia: "Card media", button: "Button", chip: "Chip", radius: "Radius", density: "Density", table: "Table" };
const escHtml = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

export const themeSelect = (attrs = "") =>
  `<select class="fh-select" data-fh-theme-select aria-label="Theme" ${attrs}>${THEMES.map((t) => `<option value="${t.name}">${escHtml(t.label)}</option>`).join("")}</select>`;
// One radio card per theme. Each card renders inside its own theme, so it previews itself.
let pickSeq = 0;
export const themeCards = () => {
  const group = `theme-pick-${++pickSeq}`;
  return `<div class="site-themes" role="radiogroup" aria-label="Themes">${THEMES.map((t) => `
    <label class="site-theme"${(t.scope ?? t.name) ? ` data-fh-theme="${t.scope ?? t.name}"` : ""}>
      <input class="fh-sr-only" type="radio" name="${group}" value="${t.name}" data-fh-theme-select>
      <span class="site-theme__head"><b>${escHtml(t.label)}</b><span class="site-theme__swatches" aria-hidden="true"><i style="background: var(--fh-color-canvas)"></i><i style="background: var(--fh-color-surface-raised)"></i><i style="background: var(--fh-color-text)"></i><i style="background: var(--fh-color-accent)"></i></span></span>
      <span class="site-theme__tagline">${escHtml(t.tagline)}</span>
      <span class="site-theme__sample" aria-hidden="true"><span class="fh-button fh-button--sm">Button</span><span class="fh-chip" data-tone="sky">Chip</span><span class="fh-avatar fh-avatar--sm">${t.label.slice(0, 2)}</span></span>
    </label>`).join("")}</div>`;
};
const decisions = (t) => Object.entries(LABELS).map(([k, label]) => `<div><dt>${label}</dt><dd>${escHtml(t.config?.[k] ?? "default")}</dd></div>`).join("");
const paintTheme = () => {
  const t = themeOf(document.documentElement.getAttribute("data-fh-theme"));
  $$("[data-theme-decisions]").forEach((d) => (d.innerHTML = decisions(t)));
  $$("[data-theme-name]").forEach((n) => (n.textContent = t.label));
  $$("[data-theme-tagline]").forEach((n) => (n.textContent = t.tagline));
  $$("[data-theme-code]").forEach((c) => (c.textContent = t.name ? `<html data-fh-theme="${t.name}">` : `<html>  <!-- Firehorse base -->`));
};
$$("[data-theme-panel]").forEach((p) => (p.innerHTML = `<div class="fh-field"><label for="theme-select-page">Theme</label>${themeSelect('id="theme-select-page"')}</div>${themeCards()}`));
// Drawer + floating button
const drawer = document.createElement("dialog");
drawer.className = "fh-dialog fh-dialog--float fh-dialog--start fh-detail";
drawer.id = "themes-drawer";
drawer.dataset.tone = "fuchsia";
drawer.setAttribute("aria-labelledby", "themes-drawer-title");
drawer.style.setProperty("--fh-dialog-size", "24rem");
drawer.innerHTML = `<header class="fh-detail__header"><div class="fh-detail__bar"><span>Themes</span><button class="fh-close" type="button" aria-label="Close" onclick="this.closest('dialog').close()"></button></div>
  <div class="fh-detail__identity"><span class="fh-icon-tile"><i class="fh-icon fh-icon--palette" aria-hidden="true"></i></span><div><h2 id="themes-drawer-title">Theme this site</h2><p>A theme sets type, color, shape and density. Light and dark come with every one.</p></div></div></header>
  <div class="fh-detail__body">
    <div class="fh-field"><label for="theme-select-drawer">Theme</label>${themeSelect('id="theme-select-drawer"')}</div>
    ${themeCards()}
    <section class="fh-detail__section"><h3>What <span data-theme-name></span> decides</h3><dl class="fh-detail__fields" data-theme-decisions></dl></section>
    <pre class="site-pre site-config-code" data-theme-code></pre>
  </div>
  <footer class="fh-detail__footer"><span class="fh-dt__count">Saved in this browser</span><a class="fh-button fh-button--sm fh-button--secondary" href="#themes">Make your own</a></footer>`;
document.body.append(drawer);
drawer.addEventListener("click", (e) => { if (e.target.closest('a[href^="#"]')) drawer.close(); });
const fab = document.createElement("button");
fab.className = "site-config-fab fh-button fh-button--sm fh-button--secondary";
fab.type = "button";
fab.innerHTML = `<i class="fh-icon fh-icon--palette" aria-hidden="true"></i><span>Theme</span>`;
fab.setAttribute("aria-label", "Choose a theme");
fab.addEventListener("click", () => drawer.showModal());
document.body.append(fab);
$$("[data-opens='themes']").forEach((b) => b.addEventListener("click", () => drawer.showModal()));
$$("[data-opens='cart']").forEach((b) => b.addEventListener("click", () => document.getElementById("cart")?.showModal()));
document.addEventListener("fh:theme", paintTheme);
// Also catch themes set without the enhancer (a direct setAttribute).
new MutationObserver(paintTheme).observe(document.documentElement, { attributes: true, attributeFilter: ["data-fh-theme"] });
// The old per-decision settings now live in themes; clear what earlier visits saved.
for (const k of ["avatar", "card", "button", "chip", "radius", "density", "table"]) store.set(`fh-config-${k}`, null);
window.Firehorse?.syncThemes?.();
paintTheme();

/* —— Card catalog filter + arrows —— */
const cat = $(".site-catalog");
if (cat) {
  const track = $(".fh-carousel__track", cat);
  $$("[data-cat]").forEach((b) => b.addEventListener("click", () => {
    $$("[data-cat]").forEach((x) => { x.setAttribute("aria-pressed", String(x === b)); x.classList.toggle("fh-chip--solid", x === b); });
    for (const s of $$(".site-cat", track)) s.hidden = b.dataset.cat !== "All" && s.dataset.group !== b.dataset.cat;
    track.scrollTo({ left: 0 });
  }));
  const step = (d) => track.scrollBy({ left: d * track.clientWidth * 0.9, behavior: "smooth" });
  $(".site-cat-prev")?.addEventListener("click", () => step(-1));
  $(".site-cat-next")?.addEventListener("click", () => step(1));
}

/* —— Icon browser —— */
const iconWrap = $(".site-icons");
if (iconWrap) {
  const q = $("[data-icon-search]");
  let group = "all";
  const filter = () => {
    const term = q.value.trim().toLowerCase();
    for (const b of $$(".site-icon", iconWrap)) b.hidden = (group !== "all" && b.dataset.group !== group) || (term && !b.dataset.icon.includes(term));
  };
  q.addEventListener("input", filter);
  $$("[data-icon-group]").forEach((b) => b.addEventListener("click", () => {
    group = b.dataset.iconGroup;
    $$("[data-icon-group]").forEach((x) => { x.setAttribute("aria-pressed", String(x === b)); x.classList.toggle("fh-chip--solid", x === b); });
    filter();
  }));
  iconWrap.addEventListener("click", async (e) => {
    const b = e.target.closest(".site-icon");
    if (!b) return;
    const ok = await copyText(`<i class="fh-icon fh-icon--${b.dataset.icon}" aria-hidden="true"></i>`);
    toast(ok ? `Copied fh-icon--${b.dataset.icon}` : "Couldn't copy", ok ? "success" : "danger");
  });
}

/* —— Adaptive color: live picker + measured contrast —— */
const live = $("[data-adaptive-live]");
if (live) {
  const cv = document.createElement("canvas"); cv.width = cv.height = 1;
  const ctx = cv.getContext("2d", { willReadFrequently: true });
  const px = (c) => { ctx.clearRect(0, 0, 1, 1); ctx.fillStyle = c; ctx.fillRect(0, 0, 1, 1); return [...ctx.getImageData(0, 0, 1, 1).data]; };
  const lum = ([r, g, b]) => [r, g, b].map((x) => { x /= 255; return x <= 0.04045 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4; }).reduce((s, x, i) => s + x * [0.2126, 0.7152, 0.0722][i], 0);
  const ratio = (a, b) => { const [x, y] = [lum(px(a)), lum(px(b))].sort((m, n) => n - m); return (x + 0.05) / (y + 0.05); };
  const pick = $("[data-adaptive-pick]");
  const update = () => {
    live.style.setProperty("--fh-color-bg", pick.value);
    // Decide the scheme from the color's own lightness so light-dark() pieces follow too.
    const [r, g, b] = px(pick.value).map((x) => x / 255);
    live.dataset.fhScheme = 0.2126 * r + 0.7152 * g + 0.0722 * b > 0.28 ? "light" : "dark";
    requestAnimationFrame(() => {
      const cs = getComputedStyle(live);
      const muted = getComputedStyle($(".fh-muted", live)).color;
      const rt = ratio(cs.color, cs.backgroundColor), rm = ratio(muted, cs.backgroundColor);
      $("[data-adaptive-ratio]").textContent = `Text ${rt.toFixed(1)}:1 · muted ${rm.toFixed(1)}:1 · ${rm >= 4.5 ? "AA" : "check"}`;
    });
  };
  pick.addEventListener("input", update);
  update();
}

/* —— Pro: profile finder (sample results only) —— */
const finder = $("#c-profile-finder");
if (finder) {
  const NETS = { youtube: ["YouTube", "rose", "youtube", "subscribers"], linkedin: ["LinkedIn", "sky", "linkedin", "connections"], x: ["X", "neutral", "at-sign", "followers"], facebook: ["Facebook", "violet", "facebook", "followers"], instagram: ["Instagram", "fuchsia", "instagram", "followers"], github: ["GitHub", "teal", "github", "followers"] };
  const faces = ["maya", "isla", "eleanor", "ava", "ruth", "sam"];
  const roles = ["Product designer", "Founder", "Creator · design tutorials", "Head of brand", "Engineer", "Studio owner"];
  const q = $("[data-finder-q]", finder), out = $("[data-finder-results]", finder), status = $("[data-finder-status]", finder);
  let timer;
  const run = () => {
    const name = q.value.trim();
    const nets = $$("input[type=checkbox]:checked", finder).map((c) => c.value);
    if (!name || !nets.length) { out.innerHTML = ""; status.innerHTML = `<span class="fh-muted">Type a name and pick at least one network.</span>`; return; }
    status.innerHTML = `<span class="fh-spinner" aria-hidden="true"></span><span>Searching ${nets.length} network${nets.length > 1 ? "s" : ""}…</span>`;
    out.innerHTML = Array.from({ length: Math.min(4, nets.length + 1) }, () => `<li><span class="fh-skeleton fh-skeleton--circle" style="inline-size:2.5rem;block-size:2.5rem"></span><div style="flex:1"><span class="fh-skeleton" style="display:block;inline-size:55%;block-size:.8rem"></span><span class="fh-skeleton" style="display:block;inline-size:35%;block-size:.7rem;margin-top:.4rem"></span></div></li>`).join("");
    clearTimeout(timer);
    timer = setTimeout(() => {
      const handle = name.toLowerCase().replace(/[^a-z0-9]+/g, "");
      const items = nets.flatMap((n, i) => {
        const [label, tone, icon, unit] = NETS[n];
        const count = Math.round((name.length * 913 + i * 4021) % 48000 + 1200);
        return [{ n, label, tone, icon, unit, count, handle: `@${handle}${i ? i : ""}`, face: faces[(name.length + i) % faces.length], role: roles[(i + name.length) % roles.length], match: 98 - i * 7 }];
      });
      status.innerHTML = `<span class="fh-badge" data-tone="lime">${items.length} profiles</span><span class="fh-muted">Sample results · ranked by match</span>`;
      out.innerHTML = items.map((it) => `<li data-tone="${it.tone}">
        <span class="fh-avatar fh-avatar--circle"><img src="img/avatars/${it.face}.webp" alt=""></span>
        <div style="flex:1;min-inline-size:0"><p class="fh-list__title">${name.replace(/[<>&]/g, "")} <span class="fh-icon-tile" style="--fh-icon-tile:1.3rem;vertical-align:middle"><i class="fh-icon fh-icon--${it.icon}" aria-hidden="true"></i></span></p>
        <p class="fh-list__meta">${it.handle} · ${it.label} · ${it.role} · ${it.count.toLocaleString()} ${it.unit}</p></div>
        <span class="fh-badge" data-tone="${it.match > 90 ? "lime" : "amber"}">${it.match}% match</span>
        <button class="fh-button fh-button--sm fh-button--secondary" type="button" data-finder-add>Add</button></li>`).join("");
    }, 650);
  };
  q.addEventListener("input", run);
  finder.addEventListener("change", run);
  finder.addEventListener("click", (e) => { if (e.target.closest("[data-finder-add]")) toast("Added to your list (demo)"); });
  run();
}

/* —— Small demos —— */
document.addEventListener("click", (e) => {
  const burger = e.target.closest?.(".fh-burger[data-toggle]");
  if (burger) burger.setAttribute("aria-expanded", String(burger.getAttribute("aria-expanded") !== "true"));
  const fav = e.target.closest?.(".fh-product__fav");
  if (fav) { const on = fav.getAttribute("aria-pressed") !== "true"; fav.setAttribute("aria-pressed", String(on)); toast(on ? "Saved to your wishlist" : "Removed from your wishlist"); }
  const thumb = e.target.closest?.(".fh-gallery__thumbs > a");
  if (thumb) {
    e.preventDefault();
    $$("a", thumb.parentElement).forEach((a) => a.toggleAttribute("aria-current", a === thumb));
    document.querySelector(thumb.getAttribute("href"))?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  }
  if (e.target.closest?.(".fh-product__add")) { toast("Added to your bag"); document.getElementById("cart")?.showModal(); }
});

// Audio: loop a sample render so the staged progress reads as live.
{
  const box = document.getElementById("audio-render");
  if (box) {
    const stages = [["Voice", "Generating voice…"], ["Layers", "Building layers…"], ["Mix", "Mixing background…"], ["Master", "Mastering…"], ["Export", "Uploading export…"]];
    const items = [...box.querySelectorAll(".fh-stages__list > li")];
    let p = 0.46;
    const step = () => {
      p = p >= 1 ? 0 : Math.min(1, p + 0.012);
      const i = Math.min(stages.length - 1, Math.floor(p * stages.length));
      box.style.setProperty("--p", p);
      box.dataset.state = p >= 1 ? "complete" : "active";
      items.forEach((li, k) => { if (k < i || p >= 1) li.dataset.state = "done"; else if (k === i) li.dataset.state = "active"; else li.removeAttribute("data-state"); });
      box.querySelector("[data-stage-pct]").textContent = `${Math.round(p * 100)}%`;
      box.querySelector(".fh-stages__track").setAttribute("aria-valuenow", Math.round(p * 100));
      box.querySelector("[data-stage-label]").textContent = p >= 1 ? "Complete" : stages[i][1];
      box.querySelector("[data-stage-eta]").textContent = p >= 1 ? "Done" : `~${Math.round((1 - p) * 75)}s left`;
    };
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches) setInterval(step, 400);
  }
}

// Motion: rollover demo
{
  const box = document.getElementById("motion-roll");
  const words = [["01", "Foundations"], ["03", "Components"], ["04", "Data"], ["06", "Commerce"], ["07", "Audio"], ["13", "Config"]];
  let i = 2;
  document.querySelectorAll("[data-roll]").forEach((b) => b.addEventListener("click", () => {
    const step = Number(b.dataset.roll);
    i = (i + step + words.length) % words.length;
    globalThis.Firehorse?.rollover?.(box, `<b>${words[i][0]}</b>${words[i][1]}`, step > 0 ? "up" : "down");
  }));
}
