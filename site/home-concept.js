/* Homepage concept (/home-concept/): the theme-colour dot's five roots. The page opens on Violet;
 * a pick re-tints it for the visit and does what the
 * logo's root picker in site.js does: --site-pick + data-site-root on <html>, so the root, the
 * accent and every harmony re-tint live, remembered in localStorage "fh-root" (shared with it). */
/* A circular reveal for look changes (colour, typeface): the new look opens out from the
 * button that was used, over the old one, as a view transition. Falls back to an instant
 * change without view transitions or with reduced motion. */
window.hcReveal = (change, from) => {
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!document.startViewTransition || still) { change(); return; }
  const r = from?.getBoundingClientRect?.();
  const x = r ? r.left + r.width / 2 : innerWidth - 40, y = r ? r.top + r.height / 2 : 40;
  const end = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  document.documentElement.setAttribute("data-hc-vt", "reveal");
  const vt = document.startViewTransition(change);
  vt.ready.then(() => {
    document.documentElement.animate(
      { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${end}px at ${x}px ${y}px)`] },
      { duration: 720, easing: "cubic-bezier(0.65, 0, 0.35, 1)", pseudoElement: "::view-transition-new(root)" }
    );
  }).catch(() => {});
  vt.finished.finally(() => document.documentElement.removeAttribute("data-hc-vt"));
};

const html = document.documentElement;
const pop = document.getElementById("site-hc-roots");
if (pop) {
  const swatches = [...pop.querySelectorAll("[data-root]")];
  const mark = (hex) => swatches.forEach((b) => b.setAttribute("aria-pressed", String(!!hex && b.dataset.root.toLowerCase() === hex.toLowerCase())));
  // The page opens on Violet (home-concept.css), so that is the pick shown until one is chosen.
  mark("#8b5cf6");
  pop.addEventListener("click", (e) => {
    const b = e.target.closest("[data-root]");
    if (!b) return;
    const hex = b.dataset.root;
    const dot = document.querySelector(".site-hc__root-btn");
    pop.hidePopover();
    window.hcReveal(() => {
      html.style.setProperty("--site-hc-pick", hex); // this page's own pick (it opens on Violet)
      html.style.setProperty("--site-pick", hex);
      html.setAttribute("data-site-root", "");
      try { localStorage.setItem("fh-root", hex); } catch {}
      mark(hex);
    }, dot);
  });
}

/* The spine: a grey etch on the left edge of the logo's underscore, the full height of the
 * window in two runs: up from the underscore to the top of the window, and down from under the
 * tagline to the bottom. As the page scrolls they draw back toward the logo (the top run comes
 * down, the bottom run goes up), gone when the logo locks (CSS, on the scroll timeline). */
const spine = document.querySelector(".site-hc__spine");
const bar = document.querySelector(".site-hc__fh .site-mark__bar");
const hero = document.querySelector(".site-hc");
const ledeEl = document.querySelector(".site-hc__lede");
if (spine && bar && hero) {
  const down = spine.cloneNode(false);
  down.classList.add("site-hc__spine--down");
  spine.after(down);
  const place = () => {
    const h = hero.getBoundingClientRect(), b = bar.getBoundingClientRect();
    const fs = parseFloat(getComputedStyle(bar).fontSize) || 16;
    const x = Math.round(b.left - h.left);                // the underscore's left edge
    // the only break is the tagline's own line box: the top run ends at its top, the bottom
    // run starts at its foot
    const l = ledeEl?.getBoundingClientRect();
    const has = l && l.height;
    const upEnd = (has ? l.top : b.bottom - fs * 0.3) - h.top;
    const downStart = (has ? l.bottom : b.bottom + 8) - h.top;
    spine.style.left = `${x}px`;
    spine.style.top = "0px";
    spine.style.height = `${Math.max(0, Math.round(upEnd))}px`;
    down.style.left = `${x}px`;
    down.style.top = `${Math.round(downStart)}px`;
    down.style.height = `${Math.max(0, Math.round(h.height - downStart))}px`;
  };
  (document.fonts?.ready ?? Promise.resolve()).then(place);
  addEventListener("resize", place, { passive: true });
  document.querySelector(".site-hc__fh")?.addEventListener("animationend", place);
  ledeEl?.addEventListener("animationend", place);
  setTimeout(place, 2000); setTimeout(place, 4500);
  place();
}

/* Send to an agent: right-aligned under "that ___.", at its own width. */
const agents = document.querySelector(".site-hc__agents");
const tagTop = document.querySelector(".site-hc__tag-top");
const turn = document.querySelector(".site-hc__tag-turn");
const marks = document.querySelector(".site-hc__marks");
if (agents && tagTop && turn && marks) {
  const fit = () => {
    const m = marks.getBoundingClientRect(), t = turn.getBoundingClientRect();
    agents.style.top = `${Math.round(t.bottom - m.top + 20)}px`;
  };
  (document.fonts?.ready ?? Promise.resolve()).then(fit);
  addEventListener("resize", fit, { passive: true });
  turn.addEventListener("animationend", fit); // "that ___." drops into place in the intro
  setTimeout(fit, 3000);
  fit();
}

// The lede starts on the underscore's left edge (the spine's line): glyph edge on the line.
{
  const bar2 = document.querySelector(".site-hc__fh .site-mark__bar");
  const lede = document.querySelector(".site-hc__lede");
  if (bar2 && lede) {
    const ctx = document.createElement("canvas").getContext("2d");
    const bearing = (el, ch) => { const cs = getComputedStyle(el); ctx.font = `${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`; return ctx.measureText(ch).actualBoundingBoxLeft; };
    const align = () => {
      const x = bar2.getBoundingClientRect().left;
      const base = lede.parentElement.getBoundingClientRect().left;
      lede.style.setProperty("--hc-lede-x", `${Math.max(0, x - base + bearing(lede, "T"))}px`);
    };
    document.fonts?.ready.then(align);
    addEventListener("resize", align, { passive: true });
    document.querySelector(".site-hc__fh")?.addEventListener("animationend", align);
    setTimeout(align, 1800);
    align();
  }
}

// "Build with": clone the services once for a seamless loop, then light the one passing just
// right of the label in its brand colour, one at a time. Reduced motion: no flow, they take
// turns in place instead.
{
  const track = document.querySelector(".site-hc-svc__track");
  const list = track?.querySelector(".site-hc-svc__list");
  if (track && list) {
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    [...list.children].forEach((li) => { const c = li.cloneNode(true); c.setAttribute("aria-hidden", "true"); list.append(c); });
    const items = [...list.children];
    let lit = null, on = false, raf = 0, k = 0;
    const light = (el) => { if (el === lit) return; lit?.classList.remove("is-lit"); el?.classList.add("is-lit"); lit = el; };
    const tick = () => {
      if (track.closest(".site-hc-svc")?.hasAttribute("data-pinned")) { lit = null; if (on) raf = setTimeout(tick, 120); return; }
      const t = track.getBoundingClientRect();
      const focus = t.left + t.width * 0.12;
      let best = null, d = Infinity;
      for (const el of items) { const r = el.getBoundingClientRect(); const dd = Math.abs(r.left + r.width / 2 - focus); if (dd < d) { d = dd; best = el; } }
      light(best);
      if (on) raf = setTimeout(tick, 120);
    };
    const real = items.filter((el) => !el.hasAttribute("aria-hidden"));
    let timer = 0;
    new IntersectionObserver(([e]) => {
      on = e.isIntersecting;
      if (still) { clearInterval(timer); if (on) { light(real[k]); timer = setInterval(() => { k = (k + 1) % real.length; light(real[k]); }, 1800); } return; }
      clearTimeout(raf); if (on) raf = setTimeout(tick, 0);
    }).observe(track);
  }
}

// The send card for "Build with": hover (or focus, or tap) a service and a card above it holds
// the prompt, editable, with Open in <service> (or Copy command) and Copy. The flow pauses while
// the card is up; the prompt edits carry over between services.
(async () => {
  const sec = document.querySelector(".site-hc-svc");
  const track = sec?.querySelector(".site-hc-svc__track");
  const src = document.querySelector('script[src*="site-features.js"]')?.src;
  if (!sec || !track || !src) return;
  const { AGENTS, sendTo, basePrompt } = await import(src); // same URL, same module instance
  const card = document.createElement("div");
  card.className = "site-hc-svc__card";
  card.setAttribute("role", "dialog");
  card.setAttribute("aria-label", "Send the prompt");
  card.innerHTML = `<div class="site-hc-svc__card-head"><span class="hc-c-mono hc-c-title">Send to an agent</span><span class="hc-c-mono hc-c-hint">Prompt copied on send</span></div>
    <div class="site-hc-svc__card-body">
      <div class="site-hc-svc__card-tile"><span class="site-hc-svc__card-cube"><i class="fh-icon" aria-hidden="true"></i></span><span class="hc-c-mono hc-c-num"></span><i class="fh-icon fh-icon--arrow-up-right hc-c-go" aria-hidden="true"></i><b></b><small></small></div>
      <label class="site-hc-svc__card-prompt"><span class="hc-c-mono">Prompt · edit me</span><textarea spellcheck="false"></textarea></label>
    </div>
    <div class="site-hc-svc__card-foot"><button type="button" data-act="copy">Copy prompt<i class="fh-icon fh-icon--copy" aria-hidden="true"></i></button><button type="button" class="site-hc-svc__send" data-act="send"><span></span><i class="fh-icon fh-icon--arrow-up-right" aria-hidden="true"></i></button></div>`;
  sec.append(card);
  const ta = card.querySelector("textarea");
  ta.value = basePrompt();
  const list = track.querySelector(".site-hc-svc__list");
  let current = null, hideT = 0;
  const paused = (p) => { list.style.animationPlayState = p ? "paused" : ""; };
  const show = (li) => {
    clearTimeout(hideT);
    const a = AGENTS.find((x) => x.id === li.dataset.svc);
    if (!a) return;
    current = { li, a };
    card.style.setProperty("--_brand", li.style.getPropertyValue("--_brand") || "var(--fh-color-text)");
    const n = AGENTS.indexOf(a) + 1;
    card.querySelector(".site-hc-svc__card-cube .fh-icon").className = `fh-icon fh-icon--${a.icon}`;
    card.querySelector(".hc-c-num").textContent = String(n).padStart(2, "0");
    card.querySelector(".hc-c-go").className = `fh-icon fh-icon--${a.command ? "copy" : "arrow-up-right"} hc-c-go`;
    card.querySelector(".site-hc-svc__card-tile b").textContent = a.name;
    card.querySelector(".site-hc-svc__card-tile small").textContent = a.command ? "From your terminal" : a.note;
    card.querySelector(".hc-c-hint").textContent = `${String(n).padStart(2, "0")} / ${String(AGENTS.length).padStart(2, "0")}`;
    card.querySelector(".site-hc-svc__send span").textContent = a.command ? "Copy command" : `Open ${a.name}`;
    card.querySelector(".site-hc-svc__send .fh-icon").className = `fh-icon fh-icon--${a.command ? "terminal" : "arrow-up-right"}`;
    const s = sec.getBoundingClientRect(), r = li.getBoundingClientRect(), w = card.offsetWidth;
    const center = r.left + r.width / 2 - s.left;
    const x = Math.min(Math.max(center - w / 2, 12), s.width - w - 12);
    card.style.setProperty("--_x", `${x}px`);
    card.style.setProperty("--_caret", `${center - x}px`);
    card.style.setProperty("--_y", `${s.bottom - r.top + 14}px`);
    li.dispatchEvent(new CustomEvent("hc-svc-pin", { bubbles: true }));
    card.setAttribute("data-open", "");
    paused(true);
  };
  const hide = (now) => {
    clearTimeout(hideT);
    hideT = setTimeout(() => { if (card.contains(document.activeElement) && !now) return; card.removeAttribute("data-open"); current = null; paused(false); sec.dispatchEvent(new CustomEvent("hc-svc-unpin")); }, now ? 0 : 220);
  };
  const items = () => [...list.children];
  items().forEach((li) => { if (!li.hasAttribute("aria-hidden")) { li.tabIndex = 0; li.setAttribute("role", "button"); li.setAttribute("aria-haspopup", "dialog"); } });
  // Hover intent: the card opens only when the pointer has deliberately rested on a service
  // (a real pointer move onto it, then ~0.55s without leaving or scrolling). Passing over, or
  // the page / the flow sliding a service under a still pointer, does nothing. A click (or
  // Enter / focus from the keyboard) opens it at once.
  let intentT = 0, intentLi = null, lastMove = 0, lastScroll = 0;
  const DWELL = 550;
  const cancelIntent = () => { clearTimeout(intentT); intentLi?.classList.remove("is-aiming"); intentLi = null; };
  addEventListener("scroll", () => { lastScroll = performance.now(); cancelIntent(); }, { passive: true });
  list.addEventListener("pointermove", (e) => {
    if (e.pointerType !== "mouse") return;
    lastMove = performance.now();
    const li = e.target.closest(".site-hc-svc__item");
    if (current) { if (li && li !== current.li) show(li); else clearTimeout(hideT); return; } // card up: follow
    if (!li || li === intentLi) return;
    cancelIntent();
    if (performance.now() - lastScroll < 250) return;
    intentLi = li;
    li.classList.add("is-aiming");
    intentT = setTimeout(() => { const ok = intentLi === li && performance.now() - lastScroll > DWELL && li.matches(":hover"); cancelIntent(); if (ok) show(li); }, DWELL);
  });
  list.addEventListener("pointerout", (e) => { if (intentLi && !intentLi.contains(e.relatedTarget)) cancelIntent(); });
  list.addEventListener("click", (e) => { const li = e.target.closest(".site-hc-svc__item"); if (li) show(li); });
  list.addEventListener("focusin", (e) => { const li = e.target.closest(".site-hc-svc__item"); if (li) show(li); });
  track.addEventListener("pointerleave", () => hide());
  card.addEventListener("pointerenter", () => clearTimeout(hideT));
  card.addEventListener("pointerleave", () => hide());
  sec.addEventListener("focusout", () => setTimeout(() => { if (!sec.contains(document.activeElement)) hide(true); }, 0));
  addEventListener("keydown", (e) => { if (e.key === "Escape" && current) { const li = current.li; hide(true); li.focus?.(); } });
  addEventListener("scroll", () => current && card.hasAttribute("data-open") && show(current.li), { passive: true }); // keep it on its service
  card.addEventListener("click", async (e) => {
    const b = e.target.closest("[data-act]");
    if (!b || !current) return;
    const p = ta.value.trim() || basePrompt();
    if (b.dataset.act === "copy") { let ok = false; try { await navigator.clipboard.writeText(p); ok = true; } catch {} window.fhToast?.(ok ? "Prompt copied" : "Couldn't copy", ok ? "success" : "danger"); return; }
    sendTo(current.a, p);
  });
  // While the card is up, the lit service is the one it belongs to.
  sec.addEventListener("hc-svc-pin", (e) => { sec.dataset.pinned = ""; items().forEach((el) => el.classList.toggle("is-lit", el === e.target)); });
  sec.addEventListener("hc-svc-unpin", () => { delete sec.dataset.pinned; items().forEach((el) => el.classList.remove("is-lit")); }); // hand back to the flow: only the featured one lights
})();

// The horses stop receding when the logo's top reaches the top of the window.
{
  const fh = document.querySelector(".site-hc__fh");
  const art = document.querySelector(".site-hc__art");
  if (fh && art) {
    const lock = () => {}; // superseded: --hc-lock is set on :root by the scroll choreography
    document.fonts?.ready.then(lock);
    addEventListener("resize", lock, { passive: true });
    fh.addEventListener("animationend", lock);
    setTimeout(lock, 3000);
    lock();
  }
}

// Scroll choreography. Everything moves on CSS scroll-driven animations (compositor, no
// per-frame script); this only measures, once and on resize, and hands the numbers to CSS:
//   --hc-lock   scroll distance at which the logo's top meets the nav row (the lock point)
//   float       the nav links' fixed wrapper: --_y, --_x0 (over the row) → --_x1 (centred)
//   mark        the logo's fixed copy: --_t0, --_l (where the logo sits at the top)
// The links and the logo copy live on <body> so they stay above the sections below.
{
  const root = document.documentElement;
  const nav = document.querySelector(".site-hc__sections.site-hc-nav");
  const links = nav?.querySelector(".site-hc-nav__links");
  const fh = document.querySelector(".site-hc__fh");
  if (nav && links && fh) {
    const PAD = 5; // the float's padding (0.3125rem)
    const ag = document.querySelector(".site-hc__agents");
    const float = document.createElement("div");
    float.className = "site-hc-float";
    document.body.append(float);
    const mark = fh.cloneNode(true);
    mark.removeAttribute("id");
    mark.className = "site-hc-mark";
    const home = document.createElement("a");
    home.href = "#hc-hero";
    home.className = "site-hc-mark__link";
    home.setAttribute("aria-label", "Firehorse, back to top");
    home.append(mark);
    document.body.append(home);
    const measure = () => {
      const y = scrollY;
      const home0 = links.parentElement === nav ? links.querySelector(".site-hc-nav__link").getBoundingClientRect() : null;
      const nr = nav.getBoundingClientRect();
      if (home0) { measure.row = { top: home0.top + y, left: home0.left }; measure.navOff = home0.left - nr.left; }
      else if (measure.row) measure.row.left = nr.left + (measure.navOff || 0);
      const fr = fh.getBoundingClientRect();
      const { top, left } = measure.row;
      const w = links.offsetWidth + PAD * 2;
      const lock = Math.max(1, Math.round(fr.top + y - top));
      root.style.setProperty("--hc-lock", `${lock}px`);
      float.style.setProperty("--_y", `${top - PAD + (measure.dy || 0)}px`);
      float.style.setProperty("--_x0", `${left - PAD + (measure.dx || 0)}px`);
      const fw = links.parentElement === float ? float.offsetWidth : w;
      float.style.setProperty("--_x1", `${Math.round((root.clientWidth - fw) / 2)}px`);
      home.style.setProperty("--_t0", `${fr.top + y}px`);
      home.style.setProperty("--_l", `${fr.left}px`);
      if (ag) {
        // measure where the button sits in the hero: the real one, or (once it has moved to
        // <body>) its invisible stand-in, which home-concept.js's fit() keeps placed
        const src = ag.parentElement === document.body ? (measure.ghost || ag) : ag;
        const ar = src.getBoundingClientRect(), fr2 = float.getBoundingClientRect();
        const fh2 = fr2.height || 40, fTop = parseFloat(float.style.getPropertyValue("--_y")) || top - PAD;
        ag.style.setProperty("--_t0", `${ar.top + y}px`);
        ag.style.setProperty("--_l", `${ar.left}px`);
        ag.style.setProperty("--_w", `${ar.width}px`);
        ag.style.setProperty("--_s", (fh2 / ar.height).toFixed(4));
        // lock when the button's middle meets the nav pill's middle
        measure.lock2 = Math.max(1, ar.top + y + ar.height / 2 - (fTop + fh2 / 2));
        root.style.setProperty("--hc-lock2", `${measure.lock2}px`);
        // the T and colour dot: fixed top right; as Send to an agent arrives under them they
        // slide to sit just left of it, level with the nav row
        const tools = document.querySelector(".site-hc__git");
        if (tools && tools.parentElement === document.body) {
          const tl = tools.offsetLeft, tw = tools.offsetWidth, tt = tools.offsetTop, th = tools.offsetHeight;
          const s = fh2 / ar.height;
          const agLeft = ar.left + ar.width * (1 - s);           // its left edge once locked (scaled from the right)
          root.style.setProperty("--hc-tools-dx", `${agLeft - 8 - (tl + tw)}px`);
          root.style.setProperty("--hc-tools-dy", `${fTop + fh2 / 2 - (tt + th / 2)}px`);
        }
      }
      const cs = getComputedStyle(fh);
      Object.assign(mark.style, { fontFamily: cs.fontFamily, fontSize: cs.fontSize, fontWeight: cs.fontWeight, letterSpacing: cs.letterSpacing, lineHeight: cs.lineHeight }); // colour comes from CSS, so it follows the scheme
    };
    let done = false;
    const init = () => {
      if (done) return; done = true;
      const first = links.querySelector(".site-hc-nav__link");
      const before = first.getBoundingClientRect();
      measure();
      float.append(links);
      // true up the float so the links land exactly where they were (no jump on hand-over)
      const after = first.getBoundingClientRect();
      const dy = measure.row.top - after.top, dx = 0; // float is fixed at the row's top-of-page spot
      if (dy) { float.style.setProperty("--_y", `${parseFloat(float.style.getPropertyValue("--_y")) + dy}px`); measure.dy = dy; }
      float.style.setProperty("--_x1", `${Math.round((root.clientWidth - float.offsetWidth) / 2)}px`);
      root.setAttribute("data-hc-choreo", ""); // CSS: show the copies, hide the original logo
      if (ag) {
        const btn = ag.querySelector(".fh-button");
        const txt = btn && [...btn.childNodes].find((n) => n.nodeType === 3 && n.data.trim());
        if (txt) { const sp = document.createElement("span"); sp.className = "fh-roll hc-agent-roll"; sp.textContent = txt.data.trim(); txt.replaceWith(sp); }
        const tools = document.querySelector(".site-hc__git");
        if (tools) { tools.classList.add("is-fixed"); document.body.append(tools); }
        measure();                       // float is in place now: measure the button against it
        const ghost = document.createElement("span");
        ghost.className = "site-agents site-hc__agents site-hc__agents-ghost";
        ghost.setAttribute("aria-hidden", "true");
        ghost.inert = true;
        const gb = btn.cloneNode(true); gb.removeAttribute("popovertarget"); gb.tabIndex = -1;
        ghost.append(gb);
        Object.assign(ghost.style, { top: ag.style.top, inlineSize: ag.style.inlineSize });
        ag.after(ghost);
        measure.ghost = ghost;
        document.body.append(ag);
        ag.classList.add("is-fixed");
        let locked = null, raf = 0;
        const check = () => { raf = 0; const l = scrollY >= (measure.lock2 || 1e9) - 0.5; if (l !== locked) { locked = l; ag.toggleAttribute("data-locked", l); root.toggleAttribute("data-hc-past", l); } };
        addEventListener("scroll", () => { if (!raf) raf = requestAnimationFrame(check); }, { passive: true });
        check();
      }
    };
    const ready = () => setTimeout(() => requestAnimationFrame(init), 3200); // let the whole intro land (and Send to an agent settle under the headline)
    if (root.classList.contains("fh-ready")) ready();
    else new MutationObserver((_, o) => { if (root.classList.contains("fh-ready")) { o.disconnect(); ready(); } }).observe(root, { attributes: true, attributeFilter: ["class"] });
    setTimeout(init, 6000);
    let rz = 0;
    addEventListener("resize", () => { cancelAnimationFrame(rz); rz = requestAnimationFrame(() => done && measure()); }, { passive: true });
    document.fonts?.ready.then(() => done && measure());
  }
}

// "Dark": toggles the page between light and dark through the (hidden) scheme radios, so
// site.js remembers it as usual.
{
  const btn = document.querySelector(".site-hc__dark");
  if (btn) {
    const mq = matchMedia("(prefers-color-scheme: dark)");
    const isDark = () => { const v = document.querySelector('input[name="scheme"]:checked')?.value || "auto"; return v === "dark" || (v === "auto" && mq.matches); };
    const sync = () => btn.setAttribute("aria-pressed", String(isDark()));
    btn.addEventListener("click", () => {
      const r = document.querySelector(`.site-hc__scheme-src input[value="${isDark() ? "light" : "dark"}"]`);
      if (!r) return;
      const flip = () => { r.checked = true; r.dispatchEvent(new Event("change", { bubbles: true })); sync(); };
      // the label rolls first, then the whole page cross-fades into the other scheme
      btn.setAttribute("aria-pressed", String(!isDark()));
      if (document.startViewTransition && !matchMedia("(prefers-reduced-motion: reduce)").matches) setTimeout(() => document.startViewTransition(flip), 120);
      else flip();
    });
    mq.addEventListener?.("change", sync);
    sync();
  }
}

// The Git chip (v1.1 · Download from Git) lives bottom right now, just left of the KC
// launcher, level with it; placed from KC's box so it follows KC's size and the window.
{
  const chip = document.querySelector(".site-hc__git .site-hc__meta");
  if (chip) {
    chip.classList.add("site-hc__meta--dock");
    document.body.append(chip);
    // the Light / Dark chip sits between the Git chip and KC
    const dark = document.querySelector(".site-hc__dark");
    if (dark) { dark.classList.add("site-hc__dark--dock"); document.body.append(dark); }
    const place = () => {
      const kc = document.querySelector(".site-kc-launch");
      const W = document.documentElement.clientWidth, H = innerHeight;
      if (!kc) { chip.style.setProperty("--_r", "16px"); chip.style.setProperty("--_b", "16px"); return; }
      const r = kc.getBoundingClientRect();
      let right = W - r.left + 8;
      if (dark) {
        dark.style.setProperty("--_r", `${right}px`);
        dark.style.setProperty("--_b", `${H - r.bottom + (r.height - dark.offsetHeight) / 2}px`);
        right += dark.offsetWidth + 8;
      }
      chip.style.setProperty("--_r", `${right}px`);
      chip.style.setProperty("--_b", `${H - r.bottom + (r.height - chip.offsetHeight) / 2}px`);
    };
    place();
    addEventListener("resize", place, { passive: true });
    new ResizeObserver(place).observe(document.body);
    setTimeout(place, 800); setTimeout(place, 2500);
  }
}

// Typeface picker: sets data-fh-type on <html> (the system's own type switch, in the fh.config
// layer), remembers it, and re-measures the layout once the new face has loaded.
{
  const pop = document.getElementById("site-hc-types");
  if (pop) {
    const root = document.documentElement;
    const KEY = "fh-type-concept";
    const get = () => { try { return localStorage.getItem(KEY) || "inter"; } catch { return "inter"; } };
    const mark = (k) => pop.querySelectorAll("button[data-type]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.type === k)));
    const apply = (k, save) => {
      root.setAttribute("data-fh-type", k);
      mark(k);
      if (save) { try { localStorage.setItem(KEY, k); } catch {} }
      (document.fonts?.ready ?? Promise.resolve()).then(() => requestAnimationFrame(() => dispatchEvent(new Event("resize"))));
    };
    apply(get(), false);
    pop.addEventListener("click", (e) => {
      const b = e.target.closest("button[data-type]");
      if (!b) return;
      pop.hidePopover();
      window.hcReveal(() => apply(b.dataset.type, true), document.querySelector(".site-hc__type-btn"));
    });
  }
}


// Backdrop picker (the camera, left of the T). Scenes set data-hc-bg on <html>; a photo also
// sets data-hc-photo and puts the photo on the scene. Remembered in localStorage. Photos are
// decoded before the reveal so they open out whole.
//
// Drift reveal: the photo through a drift from the Firehorse Drift library (site/drift.js):
// Wave and Panels are free, the rest Pro. "Showing" (0–90%) is how much of the photo is visible
// at a time; every style re-randomises itself from that on each change. It keeps moving while the page
// scrolls and rests only in hidden tabs; one still frame under reduced motion.
const HC_QS = (() => { try { return new URL(document.currentScript.src).search; } catch { return ""; } })();
(async () => {
  const pop = document.getElementById("site-hc-bgs");
  const scene = document.querySelector(".site-hc__scene");
  if (!pop || !scene) return;
  const { createDrift } = await import(`/drift.js${HC_QS}`);
  const root = document.documentElement;
  const KEY = "fh-hc-bg", FX = "fh-hc-drift", SHOW = "fh-hc-drift-show", STYLE = "fh-hc-drift-style";
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const store = (k, v) => { try { localStorage.setItem(k, v); } catch {} };
  const read = (k, d) => { try { return localStorage.getItem(k) ?? d; } catch { return d; } };
  const btnFor = (k) => pop.querySelector(`button[data-bg="${k}"]`);
  // Photos are rasters, so unlike the horse (a mask, sharp at any size) they are fetched at the
  // size this screen needs at the backdrop's largest: the window's covering width x the pixel
  // ratio x 1.1112 (the scale the scene starts at before it recedes), stepped to 200px so the
  // cache holds, capped at 3840. Assumes a 3:2 photo for tall windows.
  const SCALE0 = 1.1112;
  const photoUrl = (src) => {
    const need = Math.max(innerWidth, innerHeight * 1.5) * Math.min(devicePixelRatio || 1, 2) * SCALE0;
    const w = Math.min(3840, Math.ceil(need / 200) * 200);
    return src.replace(/([?&])w=\d+/, `$1w=${w}`);
  };
  const imgs = new Map();
  const load = (src) => {
    if (!imgs.has(src)) { const img = new Image(); img.src = src; imgs.set(src, img.decode().then(() => img).catch(() => img)); }
    return Promise.race([imgs.get(src), new Promise((r) => setTimeout(() => r(null), 1800))]);
  };

  const cv = document.createElement("canvas");
  cv.className = "site-hc__drift";
  scene.prepend(cv);
  const fillLayer = document.createElement("div");
  fillLayer.className = "site-hc__scene-fill";
  scene.prepend(fillLayer);
  const drift = createDrift(cv, { maxDpr: 2 }); // keeps moving while the page scrolls; rests only in hidden tabs.
  // Its backing store is sized from the canvas's scaled box, so it is full resolution at the
  // start of the recede and only ever shrinks from there.
  let photo = null, pos = [0.5, 0.5], lift = 0, fitOpts = {};
  const on = () => root.hasAttribute("data-hc-drift") && root.hasAttribute("data-hc-photo") && photo;
  const sync = () => {
    if (!on()) { drift.stop(); return; }
    drift.setPhoto(photo, pos, lift, fitOpts);
    if (still) { drift.frame(); drift.stop(); } else drift.start();
  };
  addEventListener("resize", () => { if (on()) drift.resize(); }, { passive: true });

  const posOf = (s) => { const [a = "center", b = "center"] = (s || "").split(" "); const n = (x) => (x === "center" ? 0.5 : parseFloat(x) / 100); return [n(a), n(b)]; };
  const mark = (k) => pop.querySelectorAll("button[data-bg]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.bg === k)));
  const apply = (k, save, img) => {
    const b = btnFor(k) || btnFor("firehorse");
    k = b.dataset.bg;
    root.setAttribute("data-hc-bg", k);
    if (b.dataset.photo) {
      root.setAttribute("data-hc-photo", "");
      scene.style.setProperty("--_img", `url("${photoUrl(b.dataset.photo)}")`);
      scene.style.setProperty("--_pos", b.dataset.pos || "center");
      pos = posOf(b.dataset.pos);
      lift = parseFloat(b.dataset.lift) || 0;
      scene.style.setProperty("--_lift", String(lift));
      fitOpts = { fit: b.dataset.fit || "cover", fill: b.dataset.fill || "" };
      if (b.dataset.fit) scene.dataset.fit = b.dataset.fit; else delete scene.dataset.fit;
      if (b.dataset.fill) scene.style.setProperty("--_fill", b.dataset.fill); else scene.style.removeProperty("--_fill");
      if (img) scene.style.setProperty("--_ar", (img.naturalWidth / img.naturalHeight).toFixed(4));
      photo = img || null;
      if (!photo) load(photoUrl(b.dataset.photo)).then((i) => { if (root.getAttribute("data-hc-bg") === k && i) { photo = i; scene.style.setProperty("--_ar", (i.naturalWidth / i.naturalHeight).toFixed(4)); sync(); } });
    } else {
      root.removeAttribute("data-hc-photo");
      scene.style.removeProperty("--_img");
      scene.style.removeProperty("--_lift");
      scene.style.removeProperty("--_fill");
      delete scene.dataset.fit;
      fitOpts = {};
      photo = null;
    }
    mark(k);
    if (save) store(KEY, k);
    sync();
  };

  // Showing: 50–90%
  const amt = pop.querySelector(".site-hc__bgs-amt input"), amtOut = pop.querySelector(".site-hc__bgs-amt-out");
  const setShow = (pct, save) => {
    pct = Math.min(90, Math.max(0, pct | 0));
    if (amt) amt.value = String(pct);
    if (amtOut) amtOut.textContent = String(pct);
    drift.setShare(pct / 100);
    if (save) store(SHOW, String(pct));
    if (on()) drift.frame();
  };
  amt?.addEventListener("input", () => setShow(parseInt(amt.value, 10), true));
  // Drift style
  const styleBtns = [...pop.querySelectorAll("button[data-drift]")];
  const setStyle = (id, save) => {
    if (!styleBtns.some((b) => b.dataset.drift === id)) id = "wave";
    drift.setStyle(id);
    styleBtns.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.drift === id)));
    if (save) store(STYLE, id);
    if (on()) drift.frame();
  };
  // On / off
  const fxBtn = pop.querySelector(".site-hc__bgs-fx");
  const setFx = (v, save) => { root.toggleAttribute("data-hc-drift", v); fxBtn?.setAttribute("aria-pressed", String(v)); if (save) store(FX, v ? "1" : "0"); sync(); };

  setStyle(read(STYLE, "wave"), false);
  { const v = parseInt(read(SHOW, "74"), 10); setShow(Number.isNaN(v) ? 74 : v, false); }
  setFx(read(FX, "1") === "1", false);
  apply(read(KEY, "firehorse"), false);

  pop.addEventListener("pointerover", (e) => { const b = e.target.closest("button[data-photo]"); if (b) load(photoUrl(b.dataset.photo)); });
  pop.addEventListener("click", async (e) => {
    if (e.target.closest(".site-hc__bgs-fx")) { setFx(!root.hasAttribute("data-hc-drift"), true); return; }
    const d = e.target.closest("button[data-drift]");
    if (d) { setStyle(d.dataset.drift, true); if (!root.hasAttribute("data-hc-drift")) setFx(true, true); return; }
    const b = e.target.closest("button[data-bg]");
    if (!b) return;
    pop.hidePopover();
    const img = b.dataset.photo ? await load(photoUrl(b.dataset.photo)) : null;
    window.hcReveal(() => apply(b.dataset.bg, true, img), document.querySelector(".site-hc__bg-btn"));
  });
})();
