/*!
 * Firehorse enhancer — optional, ~2 KB gzipped.
 * Firehorse works without it. Load it to add:
 *   1. Dock engage in browsers without scroll-state queries, and the
 *      header-CTA hand-off (sets data-active="true" on .fh-dock).
 *   2. Tone follow: a dock with data-follow takes the tone of the
 *      section you're reading, so its cubes, chips and progress line
 *      change color as you scroll.
 *   3. Carousels: dots, arrows and a 1/N counter where the browser
 *      has no native ::scroll-marker support.
 *   4. Dropzones: data-dragging while files hover.
 *   6. Smooth wheel scrolling (opt in with <html data-fh-smooth>):
 *      eased, inertial scrolling on mouse wheels. Off for touch,
 *      trackpad pinch-zoom, nested scrollers and reduced motion.
 *   5. Scroll spy: links in .fh-dock .fh-chips, .fh-toc and any
 *      [data-spy] get aria-current="true" for the section in view.
 *   7. Field accessibility: hints and errors linked with aria-describedby.
 *   8. Popover and dialog buttons keep aria-expanded in sync (hamburgers).
 *   9. Quantity steppers.  10. Payment card formatting + preview.
 *  11. Command menu filtering, arrow keys and ⌘K / Ctrl+K.
 *  12. Dictation fields ([data-fh-dictate]): type or talk; the browser
 *      transcribes into the textarea. Hidden where it can't transcribe.
 *  13. Theme select ([data-fh-theme-select]): a dropdown (or radios)
 *      that switches data-fh-theme and remembers the choice. Row
 *      spacing select ([data-fh-rows-select]) does the same for
 *      data-fh-rows (sm · md · lg · xl), so every table and key value
 *      list on the page opens up or tightens at once. Frost select
 *      ([data-fh-frost-select], a range 0–100) dials --fh-frost.
 *  14. Word rotators (.fh-rotator): the slot eases to each word's width,
 *      extra words are hidden from screen readers, and the roll pauses
 *      off screen. The roll itself is CSS and runs without this.
 *  15. Entity pickers ([data-fh-entity]): the chosen option's row is
 *      mirrored into the trigger, the list closes on a pick, and
 *      fh:entity fires. The radios submit without this.
 *
 *   <script type="module" src="https://firehorse.rascode.dev/firehorse.js"></script>
 *   or: import "@rascode/firehorse/js";
 */
const ready = (fn) =>
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", fn, { once: true }) : fn();

/* —— 13. Theme select ————————————————————————————————————————
 * A theme is the whole look in one attribute (data-fh-theme). This wires
 * any control that picks one:
 *
 *   <select class="fh-select" data-fh-theme-select aria-label="Theme">
 *     <option value="">Firehorse</option>
 *     <option value="mustang">Mustang</option>
 *     <option value="friesian">Friesian</option>
 *     <option value="akhal-teke">Akhal-Teke</option>
 *   </select>
 *
 * Radios work the same: <input type="radio" name="theme" value="friesian" data-fh-theme-select>.
 * It sets data-fh-theme on <html> (or on data-fh-theme-target="#preview"),
 * keeps every theme control in sync, remembers the choice in localStorage
 * ("fh-theme", or data-fh-theme-key="…"; data-fh-theme-persist="false" to
 * skip) and fires a bubbling "fh:theme" event: { theme, previous }.
 * From script: Firehorse.setTheme("friesian").
 *
 * To restore the saved theme before first paint, put this in <head>:
 *   <script>try{var t=localStorage.getItem("fh-theme");if(t!==null)t?document.documentElement.setAttribute("data-fh-theme",t):document.documentElement.removeAttribute("data-fh-theme")}catch(e){}</script>
 */
const THEME_KEY = "fh-theme";
const themeStore = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch {} },
};
const isThemeName = (v) => typeof v === "string" && /^[a-z0-9-]*$/.test(v);
const themeTarget = (el) => (el?.dataset.fhThemeTarget && document.querySelector(el.dataset.fhThemeTarget)) || document.documentElement;
const themeKey = (el, target) => {
  if (el?.dataset.fhThemePersist === "false") return null;
  return el?.dataset.fhThemeKey || (target === document.documentElement ? THEME_KEY : null);
};
function syncThemes() {
  for (const el of document.querySelectorAll("[data-fh-theme-select]")) {
    const current = themeTarget(el).getAttribute("data-fh-theme") || "";
    if (el.type === "radio") el.checked = el.value === current;
    else if ("value" in el && el.value !== current) el.value = current;
  }
}
function setTheme(name, { target = document.documentElement, key = target === document.documentElement ? THEME_KEY : null } = {}) {
  const next = isThemeName(name) ? name : "";
  const previous = target.getAttribute("data-fh-theme") || "";
  next ? target.setAttribute("data-fh-theme", next) : target.removeAttribute("data-fh-theme");
  if (key) themeStore.set(key, next);
  syncThemes();
  if (previous !== next) target.dispatchEvent(new CustomEvent("fh:theme", { bubbles: true, detail: { theme: next, previous } }));
  return next;
}
{
  const saved = themeStore.get(THEME_KEY);
  if (saved !== null && isThemeName(saved)) saved ? document.documentElement.setAttribute("data-fh-theme", saved) : document.documentElement.removeAttribute("data-fh-theme");
  // Scoped controls with their own key restore their own target.
  for (const el of document.querySelectorAll("[data-fh-theme-select][data-fh-theme-key][data-fh-theme-target]")) {
    const v = themeStore.get(el.dataset.fhThemeKey), t = themeTarget(el);
    if (v !== null && isThemeName(v)) v ? t.setAttribute("data-fh-theme", v) : t.removeAttribute("data-fh-theme");
  }
  document.addEventListener("change", (e) => {
    const el = e.target.closest?.("[data-fh-theme-select]");
    if (!el || (el.type === "radio" && !el.checked)) return;
    const target = themeTarget(el);
    setTheme(el.value, { target, key: themeKey(el, target) });
  });
  globalThis.Firehorse = Object.assign(globalThis.Firehorse || {}, { setTheme, syncThemes });
  syncThemes();
  // Controls added by other scripts before load get synced too.
  ready(syncThemes);
  addEventListener("load", syncThemes, { once: true });
}

/* Row spacing select: <fieldset class="fh-segmented"> radios, or a select,
 * with data-fh-rows-select and value sm · md · lg · xl. Sets data-fh-rows
 * on <html> (or data-fh-rows-target) and remembers it in
 * localStorage["fh-rows"]. Fires fh:rows. Firehorse.setRows("lg"). */
const ROWS_KEY = "fh-rows";
const isRows = (v) => ["sm", "md", "lg", "xl"].includes(v);
const rowsTarget = (el) => (el?.dataset.fhRowsTarget && document.querySelector(el.dataset.fhRowsTarget)) || document.documentElement;
function syncRows() {
  for (const el of document.querySelectorAll("[data-fh-rows-select]")) {
    const current = rowsTarget(el).getAttribute("data-fh-rows") || "md";
    if (el.type === "radio") el.checked = el.value === current;
    else if ("value" in el && el.value !== current) el.value = current;
  }
}
function setRows(size, { target = document.documentElement } = {}) {
  if (!isRows(size)) return null;
  target.setAttribute("data-fh-rows", size);
  if (target === document.documentElement) themeStore.set(ROWS_KEY, size);
  syncRows();
  target.dispatchEvent(new CustomEvent("fh:rows", { bubbles: true, detail: { rows: size } }));
  return size;
}
{
  const saved = themeStore.get(ROWS_KEY);
  if (isRows(saved)) document.documentElement.setAttribute("data-fh-rows", saved);
  document.addEventListener("change", (e) => {
    const el = e.target.closest?.("[data-fh-rows-select]");
    if (!el || (el.type === "radio" && !el.checked)) return;
    setRows(el.value, { target: rowsTarget(el) });
  });
  globalThis.Firehorse = Object.assign(globalThis.Firehorse || {}, { setRows });
  ready(syncRows);
}

/* Frost select: <input type="range" min="0" max="100" data-fh-frost-select>.
 * Sets --fh-frost (0–1) on <html> and remembers it in localStorage["fh-frost"].
 * Fires fh:frost. Firehorse.setFrost(0.4). */
const FROST_KEY = "fh-frost";
function setFrost(v, { remember = true } = {}) {
  const n = Math.min(1, Math.max(0, Number(v)));
  if (Number.isNaN(n)) return null;
  document.documentElement.style.setProperty("--fh-frost", String(n));
  if (remember) themeStore.set(FROST_KEY, String(n));
  for (const el of document.querySelectorAll("[data-fh-frost-select]")) if (Number(el.value) !== Math.round(n * 100)) el.value = String(Math.round(n * 100));
  document.documentElement.dispatchEvent(new CustomEvent("fh:frost", { bubbles: true, detail: { frost: n } }));
  return n;
}
{
  const saved = themeStore.get(FROST_KEY);
  if (saved !== null && saved !== "") setFrost(saved, { remember: false });
  document.addEventListener("input", (e) => {
    const el = e.target.closest?.("[data-fh-frost-select]");
    if (el) setFrost(Number(el.value) / 100);
  });
  globalThis.Firehorse = Object.assign(globalThis.Firehorse || {}, { setFrost });
  ready(() => { const v = getComputedStyle(document.documentElement).getPropertyValue("--fh-frost"); for (const el of document.querySelectorAll("[data-fh-frost-select]")) el.value = String(Math.round(Number(v || 0.6) * 100)); });
}

ready(() => {
  const root = document.documentElement;
  const headerOffset = () =>
    parseFloat(getComputedStyle(root).getPropertyValue("--fh-header-height")) *
      parseFloat(getComputedStyle(root).fontSize) || 68;

  /* —— 1. Dock engage, with hysteresis so it never flickers —— */
  for (const dock of document.querySelectorAll(".fh-dock")) {
    // Engage when this element passes under the chrome; default: the dock's own start.
    const anchor = dock.dataset.engage ? document.querySelector(dock.dataset.engage) : null;
    const sentinel = document.createElement("span");
    sentinel.setAttribute("aria-hidden", "true");
    sentinel.style.cssText = "display:block;block-size:0;";
    if (!anchor) dock.before(sentinel);
    let ticking = false;
    const update = () => {
      ticking = false;
      const edge = (anchor ?? sentinel).getBoundingClientRect().bottom;
      const top = headerOffset();
      const on = dock.dataset.active === "true";
      if (!on && edge < top + 4) dock.dataset.active = "true";
      else if (on && edge > top + 60) delete dock.dataset.active;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    update();
  }

  /* —— 3. Carousel fallback —— */
  const nativeMarkers = CSS.supports?.("selector(::scroll-marker)");
  for (const car of document.querySelectorAll(".fh-carousel")) {
    const track = car.querySelector(".fh-carousel__track");
    const slides = track ? [...track.children] : [];
    if (!track || slides.length < 2) continue;
    const count = car.querySelector(".fh-carousel__count");
    const label = car.getAttribute("aria-label") || "Slides";
    let dots = [];
    let prev, next;
    if (!nativeMarkers) {
      const group = document.createElement("div");
      group.className = "fh-carousel__dots";
      group.setAttribute("role", "group");
      group.setAttribute("aria-label", `${label}: choose slide`);
      dots = slides.map((slide, i) => {
        const b = document.createElement("button");
        b.type = "button";
        b.setAttribute("aria-label", `Slide ${i + 1} of ${slides.length}`);
        b.addEventListener("click", () => slide.scrollIntoView({ block: "nearest", inline: "center" }));
        group.append(b);
        return b;
      });
      prev = Object.assign(document.createElement("button"), { type: "button", className: "fh-carousel__prev" });
      next = Object.assign(document.createElement("button"), { type: "button", className: "fh-carousel__next" });
      prev.setAttribute("aria-label", "Previous slide");
      next.setAttribute("aria-label", "Next slide");
      const step = (dir) => track.scrollBy({ left: dir * track.clientWidth * (document.dir === "rtl" ? -1 : 1) });
      prev.addEventListener("click", () => step(-1));
      next.addEventListener("click", () => step(1));
      car.append(group, prev, next);
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const i = slides.indexOf(e.target);
          dots.forEach((d, j) => (j === i ? d.setAttribute("aria-current", "true") : d.removeAttribute("aria-current")));
          if (count) count.textContent = `${i + 1}/${slides.length}`;
          if (prev) prev.disabled = i === 0;
          if (next) next.disabled = i === slides.length - 1;
        }
      },
      { root: track, threshold: 0.6 },
    );
    slides.forEach((s) => io.observe(s));
  }

  /* —— 4. Dropzones —— */
  for (const zone of document.querySelectorAll(".fh-dropzone")) {
    const on = () => zone.setAttribute("data-dragging", "");
    const off = () => zone.removeAttribute("data-dragging");
    zone.addEventListener("dragenter", on);
    zone.addEventListener("dragover", on);
    ["dragleave", "drop"].forEach((t) => zone.addEventListener(t, off));
  }

  /* —— 6. Smooth wheel scrolling (opt-in) —— */
  if (root.hasAttribute("data-fh-smooth") && !matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)").matches) {
    root.style.scrollBehavior = "auto"; // we drive it; native smooth would fight the easing
    let target = scrollY;
    let running = false;
    const ease = parseFloat(root.dataset.fhSmooth) || 0.12;
    const maxY = () => document.documentElement.scrollHeight - innerHeight;
    const scrollableAncestor = (el, dy) => {
      for (; el && el !== document.body; el = el.parentElement) {
        const s = getComputedStyle(el);
        if (/(auto|scroll)/.test(s.overflowY) && el.scrollHeight > el.clientHeight) {
          if ((dy > 0 && el.scrollTop + el.clientHeight < el.scrollHeight) || (dy < 0 && el.scrollTop > 0)) return true;
        }
      }
      return false;
    };
    const loop = () => {
      const y = scrollY + (target - scrollY) * ease;
      scrollTo(0, Math.abs(target - y) < 0.5 ? target : y);
      if (Math.abs(target - scrollY) >= 0.5) requestAnimationFrame(loop);
      else running = false;
    };
    addEventListener(
      "wheel",
      (e) => {
        if (e.ctrlKey || e.defaultPrevented || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
        if (scrollableAncestor(e.target, e.deltaY) || e.target.closest?.("[popover]:popover-open, dialog[open]")) return;
        e.preventDefault();
        const delta = e.deltaMode === 1 ? e.deltaY * 40 : e.deltaMode === 2 ? e.deltaY * innerHeight : e.deltaY;
        target = Math.max(0, Math.min(maxY(), (running ? target : scrollY) + delta));
        if (!running) { running = true; requestAnimationFrame(loop); }
      },
      { passive: false },
    );
    // Keyboard, anchors and scrollbar drags move the page directly; follow them.
    addEventListener("scroll", () => { if (!running) target = scrollY; }, { passive: true });
  }

  /* —— 6b. Idle sections ——
   * Pause time-based animations in sections that are well off-screen,
   * through the Web Animations API so nothing is restyled mid-scroll.
   * Scroll-driven animations (scroll()/view() timelines) are left alone. */
  if ("IntersectionObserver" in globalThis && Element.prototype.getAnimations) {
    const timeBased = (a) => !a.timeline || a.timeline === document.timeline;
    const idle = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          for (const a of e.target.getAnimations({ subtree: true })) {
            if (!timeBased(a)) continue;
            if (e.isIntersecting) { if (a.playState === "paused" && a.__fhIdle) { a.play(); a.__fhIdle = false; } }
            else if (a.playState === "running") { a.pause(); a.__fhIdle = true; }
          }
        }
      },
      { rootMargin: "300px 0px" },
    );
    document.querySelectorAll("main > section, main > .fh-section, .fh-page > section").forEach((s) => idle.observe(s));
  }

  /* Anchors clear the real dock height (it changes with width). */
  const dock = document.querySelector(".fh-dock");
  if (dock && "ResizeObserver" in globalThis) {
    new ResizeObserver(() => root.style.setProperty("--fh-dock-height", `${dock.offsetHeight}px`)).observe(dock);
  }

  /* —— 6d. Rollover headings ——
   * Firehorse.rollover(el, html, dir) rolls a .fh-rollover to new content.
   * [data-fh-rollover="sections"] follows the sections that carry
   * data-fh-label: forward rolls up, back rolls down. */
  const rollover = (box, html, dir = "up") => {
    if (box.dataset.current === html) return;
    box.dataset.current = html;
    for (const old of [...box.children]) {
      if (old.hasAttribute("data-leave")) { old.remove(); continue; }
      old.removeAttribute("data-enter");
      old.setAttribute("data-leave", dir);
      old.setAttribute("aria-hidden", "true");
      setTimeout(() => old.remove(), 700);
    }
    const item = document.createElement("span");
    item.className = "fh-rollover__item";
    item.innerHTML = html;
    item.setAttribute("data-enter", dir);
    box.append(item);
  };
  globalThis.Firehorse = Object.assign(globalThis.Firehorse || {}, { rollover });
  const rollers = [...document.querySelectorAll('.fh-rollover[data-fh-rollover="sections"]')];
  const labelled = [...document.querySelectorAll("main [data-fh-label]")];
  if (rollers.length && labelled.length) {
    for (const r of rollers) r.dataset.current = r.dataset.current || r.textContent.trim();
    const esc = (t) => t.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
    const total = String(Math.max(0, ...labelled.map((s) => parseInt(s.dataset.fhIndex, 10) || 0))).padStart(2, "0");
    const seen = new Set();
    let last = -1;
    let rollTimer = 0;
    const pick = () => {
      const i = labelled.findIndex((s) => seen.has(s));
      if (i === last) return;
      const dir = i > last ? "up" : "down";
      last = i;
      const s = labelled[i];
      for (const r of rollers) {
        // data-fh-part="index" shows "04 / 16"; the default part shows the label
        // (with its index in front unless the rollover sits in an eyebrow pill).
        const pill = r.closest(".fh-eyebrow-pill");
        const part = r.dataset.fhPart;
        let html = esc(r.dataset.fhDefault || "");
        if (s && part === "index") html = s.dataset.fhIndex ? `${esc(s.dataset.fhIndex)} / ${total}` : esc(r.dataset.fhDefault || "");
        else if (s) html = `${s.dataset.fhIndex && !pill ? `<b>${esc(s.dataset.fhIndex)}</b>` : ""}${esc(s.dataset.fhLabel)}`;
        for (const t of pill ? [r, pill] : [r]) {
          if (s?.dataset.tone) t.dataset.tone = s.dataset.tone;
          else if (t === pill) t.dataset.tone = pill.dataset.fhDefaultTone ??= pill.dataset.tone || "";
          else delete t.dataset.tone;
        }
        rollover(r, html, dir);
      }
    };
    const band = new IntersectionObserver(
      // Wait for the scroll to settle so a long jump rolls once, not through every section it passes.
      (es) => { for (const e of es) e.isIntersecting ? seen.add(e.target) : seen.delete(e.target); clearTimeout(rollTimer); rollTimer = setTimeout(pick, 140); },
      { rootMargin: `-${Math.round(headerOffset() + 96)}px 0px -60% 0px` },
    );
    labelled.forEach((s) => band.observe(s));
  }

  /* —— 6c. In-page navigation ——
   * Same-page links glide to the target in one eased motion (0.42–0.9s by
   * distance), re-aiming each frame so it never misfires, and stop the
   * moment the visitor scrolls themselves.
   * Updates the URL, closes the popover it came from and moves focus to
   * the target for keyboard and screen-reader users. */
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  // Where the page must scroll for el to land under the sticky chrome,
  // computed from layout (never by scrolling, which would cancel a glide).
  const targetY = (el) => {
    const pad = parseFloat(getComputedStyle(root).scrollPaddingBlockStart) || 0;
    const margin = parseFloat(getComputedStyle(el).scrollMarginBlockStart) || 0;
    const max = root.scrollHeight - innerHeight;
    return Math.max(0, Math.min(max, el.getBoundingClientRect().top + scrollY - pad - margin));
  };
  let navToken = 0;
  const goTo = (el, { push = true } = {}) => {
    const token = ++navToken;
    const smooth = !reduced.matches;
    const y = targetY(el);
    const dist = y - scrollY;
    // Once a scroll settles, re-check the landing (sections that render
    // on the way can change size) and correct it, at most twice.
    let fixes = 0;
    const afterScroll = () => {
      let done = false;
      const once = () => {
        if (done || token !== navToken) return;
        done = true;
        removeEventListener("scrollend", once);
        requestAnimationFrame(() => {
          if (token !== navToken) return;
          const y2 = targetY(el);
          if (Math.abs(y2 - scrollY) > 2 && fixes++ < 2) { scrollTo({ top: y2, behavior: "instant" }); afterScroll(); }
        });
      };
      addEventListener("scrollend", once);
      setTimeout(once, 1200);
    };
    if (!smooth) {
      scrollTo({ top: y, behavior: "instant" });
      afterScroll();
    } else {
      // One eased glide all the way, re-aiming every frame (sections that render on the way
      // can move the target). Longer trips take a little longer, never more than ~0.9s.
      // A wheel, touch or key from the visitor hands the page straight back to them.
      const from = scrollY;
      const dur = Math.min(900, Math.max(420, 300 + Math.abs(dist) * 0.12));
      const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);
      const stop = () => { navToken++; };
      for (const ev of ["wheel", "touchstart", "keydown"]) addEventListener(ev, stop, { once: true, passive: true });
      const t0 = performance.now();
      const step = (now) => {
        if (token !== navToken) return;
        const p = Math.min(1, (now - t0) / dur);
        scrollTo({ top: from + (targetY(el) - from) * ease(p), behavior: "instant" });
        if (p < 1) requestAnimationFrame(step);
        else {
          for (const ev of ["wheel", "touchstart", "keydown"]) removeEventListener(ev, stop);
          afterScroll();
        }
      };
      requestAnimationFrame(step);
    }
    if (push && location.hash !== `#${el.id}`) history.pushState(null, "", `#${el.id}`);
    if (!el.matches("a, button, input, select, textarea, [tabindex]")) el.setAttribute("tabindex", "-1");
    el.focus({ preventScroll: true });
  };
  document.addEventListener("click", (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = e.target.closest?.('a[href^="#"]');
    if (!a || a.hasAttribute("data-fh-native") || a.getAttribute("href").length < 2) return;
    let el = null;
    try { el = document.getElementById(decodeURIComponent(a.hash.slice(1))); } catch { return; }
    if (!el) return;
    e.preventDefault();
    a.closest("[popover]")?.hidePopover?.();
    goTo(el);
  });
  addEventListener("popstate", () => {
    const el = location.hash && document.getElementById(location.hash.slice(1));
    if (el) goTo(el, { push: false });
  });

  /* —— 7. Field accessibility ——
   * Links each .fh-field's hint and error text to its control with
   * aria-describedby, and keeps aria-invalid in step with :user-invalid,
   * so screen readers hear the same thing sighted users see. */
  let fieldSeq = 0;
  for (const field of document.querySelectorAll(".fh-field")) {
    const control = field.querySelector("input:not([type=hidden]), select, textarea");
    if (!control) continue;
    const notes = [...field.querySelectorAll(".fh-field__hint, .fh-field__error")];
    if (notes.length) {
      const ids = notes.map((n) => (n.id ||= `fh-note-${++fieldSeq}`));
      const existing = (control.getAttribute("aria-describedby") ?? "").split(/\s+/).filter(Boolean);
      control.setAttribute("aria-describedby", [...new Set([...existing, ...ids])].join(" "));
    }
    const sync = () => {
      let bad = false;
      try { bad = control.matches(":user-invalid") || (control.form?.hasAttribute("data-checked") && control.matches(":invalid")); }
      catch { bad = control.matches(":invalid") && control.dataset.touched === "true"; }
      bad ? control.setAttribute("aria-invalid", "true") : control.removeAttribute("aria-invalid");
    };
    control.addEventListener("blur", () => { control.dataset.touched = "true"; sync(); });
    control.addEventListener("input", sync);
    control.form?.addEventListener("submit", () => requestAnimationFrame(sync));
  }

  /* —— 7b. Password reveal (FLD-4) ——
   * An .fh-input-reveal button inside an .fh-input-group shows or hides the
   * password beside it. Delegated, so fields added later work too. The value
   * is hidden again when its form submits, so it is never left readable and
   * password managers still see a password field. Add data-manual to a
   * button your own code drives (the React PasswordInput does). */
  const setReveal = (btn, shown) => {
    const input = btn.closest(".fh-input-group")?.querySelector("input");
    if (!input) return;
    input.type = shown ? "text" : "password";
    btn.setAttribute("aria-pressed", String(shown));
    btn.setAttribute("aria-label", shown ? (btn.dataset.labelHide ?? "Hide password") : (btn.dataset.labelShow ?? "Show password"));
  };
  document.addEventListener("click", (e) => {
    const btn = e.target instanceof Element ? e.target.closest(".fh-input-reveal:not([data-manual])") : null;
    if (btn) setReveal(btn, btn.getAttribute("aria-pressed") !== "true");
  });
  document.addEventListener("submit", (e) => {
    if (!(e.target instanceof Element)) return;
    for (const btn of e.target.querySelectorAll('.fh-input-reveal[aria-pressed="true"]:not([data-manual])')) setReveal(btn, false);
  }, true);

  /* —— 8. Popover buttons report their state ——
   * Keeps aria-expanded on every [popovertarget] button in step with
   * its popover, so hamburgers morph and screen readers hear "expanded". */
  for (const btn of document.querySelectorAll("[popovertarget]")) {
    const pop = document.getElementById(btn.getAttribute("popovertarget"));
    if (!pop) continue;
    btn.setAttribute("aria-expanded", "false");
    pop.addEventListener("toggle", (e) => {
      for (const b of document.querySelectorAll(`[popovertarget="${pop.id}"]`)) b.setAttribute("aria-expanded", String(e.newState === "open"));
    });
  }
  // Dialog openers (data-opens="dialog-id") get the same treatment.
  for (const btn of document.querySelectorAll("[data-opens]")) {
    const dlg = document.getElementById(btn.dataset.opens);
    if (!(dlg instanceof HTMLDialogElement)) continue;
    btn.setAttribute("aria-expanded", "false");
    btn.addEventListener("click", () => { dlg.showModal(); btn.setAttribute("aria-expanded", "true"); });
    dlg.addEventListener("close", () => btn.setAttribute("aria-expanded", "false"));
  }
  // Click on the backdrop closes a modal dialog.
  document.addEventListener("click", (e) => {
    if (e.target instanceof HTMLDialogElement && e.target.open && e.target.matches(".fh-dialog")) {
      const r = e.target.getBoundingClientRect();
      if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) e.target.close();
    }
  });

  /* —— 9. Quantity steppers —— */
  document.addEventListener("click", (e) => {
    const b = e.target.closest?.(".fh-qty > button");
    if (!b) return;
    const input = b.parentElement.querySelector("input");
    const step = b === b.parentElement.firstElementChild ? -1 : 1;
    const min = Number(input.min || 0), max = Number(input.max || Infinity);
    input.value = Math.min(max, Math.max(min, (Number(input.value) || 0) + step));
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.dispatchEvent(new Event("change", { bubbles: true }));
  });

  /* —— 10. Payment fields → card preview ——
   * Inputs marked data-paycard="number|name|expiry|cvc" (inside a form
   * that also holds a .fh-paycard) format as you type and fill the card. */
  const brands = [["amex", /^3[47]/, [4, 6, 5]], ["visa", /^4/, [4, 4, 4, 4]], ["mastercard", /^(5[1-5]|2[2-7])/, [4, 4, 4, 4]], ["discover", /^6(011|5)/, [4, 4, 4, 4]]];
  document.addEventListener("input", (e) => {
    const t = e.target;
    if (!t.matches?.("[data-paycard]")) return;
    const scope = t.closest("form, [data-paycard-scope]") ?? document;
    const card = scope.querySelector(".fh-paycard");
    const kind = t.dataset.paycard;
    if (kind === "number") {
      const digits = t.value.replace(/\D/g, "").slice(0, 19);
      const [brand, , groups] = brands.find(([, re]) => re.test(digits)) ?? ["", null, [4, 4, 4, 4]];
      let out = "", i = 0;
      for (const g of groups) { if (i >= digits.length) break; out += (out ? " " : "") + digits.slice(i, i + g); i += g; }
      if (i < digits.length) out += " " + digits.slice(i);
      t.value = out;
      const chip = t.parentElement.querySelector("[data-card-brand]");
      if (chip) chip.textContent = brand;
      if (card) {
        card.dataset.brand = brand;
        const masked = (out || "•••• •••• •••• ••••").replace(/\d(?=(?:\D*\d){4})/g, "•");
        card.querySelector("[data-paycard-show='number']") && (card.querySelector("[data-paycard-show='number']").textContent = out ? masked : "•••• •••• •••• ••••");
        card.querySelector("[data-paycard-show='brand']") && (card.querySelector("[data-paycard-show='brand']").textContent = brand || "card");
      }
    }
    if (kind === "expiry") {
      const d = t.value.replace(/\D/g, "").slice(0, 4);
      t.value = d.length > 2 ? `${d.slice(0, 2)} / ${d.slice(2)}` : d;
    }
    if (kind === "cvc") t.value = t.value.replace(/\D/g, "").slice(0, 4);
    if (card && kind !== "number") {
      const show = card.querySelector(`[data-paycard-show="${kind}"]`);
      if (show) show.textContent = t.value || show.dataset.empty || "";
    }
  });

  /* —— 11. Command menu: type to filter, arrows to move —— */
  for (const cmd of document.querySelectorAll(".fh-command")) {
    const input = cmd.querySelector(".fh-command__search input");
    const items = () => [...cmd.querySelectorAll(".fh-command__list > :is(a, button)")];
    const visible = () => items().filter((i) => !i.hidden);
    const select = (el) => { for (const i of items()) i.removeAttribute("aria-selected"); el?.setAttribute("aria-selected", "true"); el?.scrollIntoView({ block: "nearest" }); };
    input?.addEventListener("input", () => {
      const q = input.value.trim().toLowerCase();
      for (const i of items()) i.hidden = !!q && !i.textContent.toLowerCase().includes(q);
      for (const label of cmd.querySelectorAll(".fh-command__list > .fh-menu__label")) {
        let n = label.nextElementSibling, any = false;
        while (n && !n.matches(".fh-menu__label")) { if (!n.hidden) any = true; n = n.nextElementSibling; }
        label.hidden = !any;
      }
      select(visible()[0]);
    });
    cmd.addEventListener("keydown", (e) => {
      const list = visible(), cur = list.findIndex((i) => i.getAttribute("aria-selected") === "true");
      if (e.key === "ArrowDown" || e.key === "ArrowUp") { e.preventDefault(); select(list[(cur + (e.key === "ArrowDown" ? 1 : -1) + list.length) % list.length]); }
      if (e.key === "Enter" && cur > -1 && e.target === input) { e.preventDefault(); list[cur].click(); }
    });
  }
  document.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      const cmd = document.querySelector(".fh-command[data-hotkey]");
      if (cmd) { e.preventDefault(); cmd.open ? cmd.close() : cmd.showModal(); }
    }
  });

  /* —— 12. Dictation fields ——
   * [data-fh-dictate] around a textarea: a Text | Transcribe switch (added
   * if missing), final phrases appended to what's typed (sentence starts
   * capitalized, never invented punctuation), interim words in the live
   * caption, a clock, and plain-language errors. Chrome stops after pauses,
   * so it quietly resumes while Transcribe is on. Fires "input" on the
   * textarea so forms and frameworks see the new value. */
  const Recognition = globalThis.SpeechRecognition ?? globalThis.webkitSpeechRecognition;
  const polish = (base, text) => {
    let t = text.trim().replace(/\s+/g, " ").replace(/\s+([,.!?;:])/g, "$1");
    t = t.replace(/(^|\s)i(?=\s|[,.!?;:]|$)/g, "$1I");
    const prev = base.replace(/\s+$/, "");
    if (prev === "" || /[.!?…]["'”)]?$/.test(prev)) t = t.replace(/[a-z]/, (c) => c.toUpperCase());
    return t.replace(/([.!?]\s+)([a-z])/g, (_m, p, c) => p + c.toUpperCase());
  };
  for (const field of document.querySelectorAll("[data-fh-dictate]")) {
    const area = field.querySelector("textarea");
    if (!area) continue;
    let sw = field.querySelector(".fh-dictate");
    if (!Recognition) {
      if (sw) sw.hidden = true;
      continue;
    }
    if (!sw) {
      sw = document.createElement("div");
      sw.className = "fh-dictate";
      sw.setAttribute("role", "group");
      sw.setAttribute("aria-label", "Type, or talk and we transcribe");
      sw.innerHTML =
        '<button type="button" class="fh-dictate__mode" data-mode="text" aria-pressed="true">Text</button>' +
        '<button type="button" class="fh-dictate__mode" data-mode="voice" aria-pressed="false">Transcribe</button>';
      (field.querySelector("label") ?? area).after(sw);
    }
    let live = field.querySelector(".fh-dictate__live");
    if (!live) {
      live = document.createElement("p");
      live.className = "fh-dictate__live";
      live.setAttribute("role", "status");
      live.hidden = true;
      live.innerHTML =
        '<span class="fh-dictate__wave" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span>' +
        '<span>Listening <time class="fh-dictate__clock">0:00</time></span><span class="fh-dictate__interim"></span>';
      area.after(live);
    }
    let error = field.querySelector(".fh-dictate__error");
    if (!error) {
      error = document.createElement("p");
      error.className = "fh-dictate__error";
      error.setAttribute("role", "alert");
      error.hidden = true;
      live.after(error);
    }
    const textBtn = sw.querySelector('[data-mode="text"]');
    const voiceBtn = sw.querySelector('[data-mode="voice"]');
    const clock = live.querySelector(".fh-dictate__clock");
    const interim = live.querySelector(".fh-dictate__interim");
    let rec = null;
    let want = false;
    let base = "";
    let timer = 0;
    let seconds = 0;
    const setValue = (v) => {
      area.value = v;
      area.dispatchEvent(new Event("input", { bubbles: true }));
    };
    const show = (on) => {
      textBtn.setAttribute("aria-pressed", String(!on));
      voiceBtn.setAttribute("aria-pressed", String(on));
      field.toggleAttribute("data-listening", on);
      live.hidden = !on;
      clearInterval(timer);
      if (on) {
        seconds = 0;
        clock.textContent = "0:00";
        timer = setInterval(() => {
          seconds += 1;
          clock.textContent = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
        }, 1000);
      } else interim.textContent = "";
    };
    const stop = () => {
      want = false;
      try { rec?.stop(); } catch {}
      show(false);
    };
    const fail = (msg) => {
      error.textContent = msg;
      error.hidden = false;
      stop();
    };
    const start = () => {
      error.hidden = true;
      rec = new Recognition();
      rec.continuous = true;
      rec.interimResults = true;
      rec.lang = field.dataset.fhDictate || document.documentElement.lang || "en-US";
      base = area.value;
      rec.onresult = (e) => {
        let fin = "";
        let mid = "";
        for (let i = e.resultIndex; i < e.results.length; i++) {
          const r = e.results[i];
          if (r.isFinal) fin += r[0].transcript;
          else mid += r[0].transcript;
        }
        if (fin.trim()) {
          base = `${base}${base && !/\s$/.test(base) ? " " : ""}${polish(base, fin)}`;
          setValue(base);
        }
        interim.textContent = mid || "Talk now; your words land in the box.";
      };
      rec.onerror = (e) => {
        if (e.error === "not-allowed" || e.error === "service-not-allowed")
          fail("Microphone access was blocked. Allow it in the browser, or keep typing.");
        else if (e.error === "audio-capture") fail("No microphone was found. Keep typing, or connect one.");
        else if (e.error === "network") fail("The browser's transcription service isn't reachable. Typing still works.");
      };
      rec.onend = () => {
        if (want) {
          try { rec.start(); } catch {}
        } else show(false);
      };
      want = true;
      try {
        rec.start();
        show(true);
        interim.textContent = "Talk now; your words land in the box.";
      } catch {
        fail("Transcription isn't available right now. Typing still works.");
      }
    };
    textBtn.addEventListener("click", () => {
      if (want) stop();
      area.focus();
    });
    voiceBtn.addEventListener("click", () => (want ? stop() : start()));
    // Typing mid-dictation becomes the new base for the next phrase.
    area.addEventListener("input", (e) => {
      if (want && e.isTrusted) base = area.value;
    });
  }

  /* —— 14. Offset panel ——
   * Placed by CSS anchor positioning where it's supported; here, measured. */
  if (!CSS.supports("anchor-name: --fh-a")) {
    for (const panel of document.querySelectorAll(".fh-panel")) {
      const page = panel.parentElement;
      const start = [...(page?.querySelectorAll("[data-fh-panel-start]") ?? [])].find((el) => el.closest(".fh-page") === page);
      if (!start) continue;
      const place = () =>
        panel.style.setProperty("--fh-panel-top", `${start.getBoundingClientRect().top - page.getBoundingClientRect().top}px`);
      place();
      new ResizeObserver(place).observe(page);
    }
  }

  /* —— 2 & 5. Tone follow + scroll spy —— */
  const spyLinks = [...document.querySelectorAll('.fh-dock .fh-chips a[href^="#"], .fh-toc a[href^="#"], [data-spy] a[href^="#"]')];
  const followers = [...document.querySelectorAll(".fh-dock[data-follow]")];
  const sections = [...document.querySelectorAll("main [id]")].filter(
    (el) => el.matches("section, article, [data-tone]") || spyLinks.some((a) => a.hash === `#${el.id}`),
  );
  if (!sections.length || (!spyLinks.length && !followers.length)) return;

  const baseTone = new Map(followers.map((d) => [d, d.dataset.tone]));
  const visible = new Set();
  const choose = () => {
    // The first section (in document order) that is in the reading band.
    const current = sections.find((s) => visible.has(s));
    const id = current?.id;
    for (const a of spyLinks) {
      if (a.hash === `#${id}`) {
        if (a.getAttribute("aria-current") !== "true") {
          a.setAttribute("aria-current", "true");
          // Keep the active chip visible inside its strip, without moving the page.
          const strip = a.closest(".fh-chips");
          if (strip && strip.scrollWidth > strip.clientWidth) {
            strip.scrollTo({ left: a.offsetLeft - strip.offsetLeft - (strip.clientWidth - a.offsetWidth) / 2, behavior: reduced.matches ? "instant" : "smooth" });
          }
        }
      } else a.removeAttribute("aria-current");
    }

    const tone = current?.closest("[data-tone]")?.dataset.tone ?? current?.querySelector("[data-tone]")?.dataset.tone;
    for (const d of followers) {
      const next = tone ?? baseTone.get(d);
      if (next) d.dataset.tone = next;
    }
  };
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) e.isIntersecting ? visible.add(e.target) : visible.delete(e.target);
      choose();
    },
    { rootMargin: `-${Math.round(headerOffset() + 64)}px 0px -55% 0px` },
  );
  sections.forEach((s) => io.observe(s));
});

/* —— 14. Word rotator ————————————————————————————————————————
 * The roll is CSS (see .fh-rotator). This adds the finish: the slot eases to
 * the width of the word coming in, so the text after it glides instead of
 * sitting beside the widest word's gap; words after the first get
 * aria-hidden; and rotators off screen pause. */
ready(() => {
  const rotators = [...document.querySelectorAll(".fh-rotator")];
  if (!rotators.length) return;
  for (const r of rotators) {
    const words = [...r.children];
    words.slice(1).forEach((w) => w.setAttribute("aria-hidden", "true"));
    const fit = (w) => { r.style.inlineSize = `${w.getBoundingClientRect().width}px`; };
    fit(words[0]);
    document.fonts?.ready.then(() => fit(r.querySelector(":scope > [data-fh-in]") ?? words[0]));
    const on = (e) => {
      if (e.target.parentElement !== r) return;
      r.querySelector(":scope > [data-fh-in]")?.removeAttribute("data-fh-in");
      e.target.setAttribute("data-fh-in", "");
      fit(e.target);
    };
    r.addEventListener("animationstart", on);
    r.addEventListener("animationiteration", on);
  }
  if ("IntersectionObserver" in globalThis) {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.target.toggleAttribute("data-fh-paused", !e.isIntersecting)));
    rotators.forEach((r) => io.observe(r));
  }
});

/* —— 15. Entity picker ———————————————————————————————————————
 * The options are radios in a popover, so the value submits and arrow keys
 * move through it without this. This adds the rest: the chosen row is
 * copied into the trigger's fh-entity__value, a click or Enter closes the
 * list and returns focus to the trigger, opening it focuses the current
 * option, and the picker fires fh:entity ({ value, input }) on change. */
ready(() => {
  const sync = (picker) => {
    const input = picker.querySelector(".fh-entity-picker__list input:checked");
    const slot = picker.querySelector(":scope > .fh-entity .fh-entity__value");
    if (!input || !slot) return;
    const row = input.closest(".fh-entity");
    slot.replaceChildren(...[...row.children].filter((c) => c !== input).map((c) => c.cloneNode(true)));
    slot.querySelectorAll("[id]").forEach((el) => el.removeAttribute("id"));
    picker.dataset.value = input.value;
  };
  const close = (picker) => {
    const list = picker.querySelector(".fh-entity-picker__list");
    if (list?.matches(":popover-open")) list.hidePopover();
    picker.querySelector(":scope > .fh-entity")?.focus();
  };
  for (const picker of document.querySelectorAll("[data-fh-entity]")) {
    const list = picker.querySelector(".fh-entity-picker__list");
    const trigger = picker.querySelector(":scope > .fh-entity");
    if (!list || !trigger) continue;
    list.addEventListener("change", (e) => {
      if (!e.target.matches?.("input[type=radio]")) return;
      sync(picker);
      picker.dispatchEvent(new CustomEvent("fh:entity", { bubbles: true, detail: { value: e.target.value, input: e.target } }));
    });
    // A pointer pick closes the list; arrow keys only move the choice.
    list.addEventListener("click", (e) => {
      if (e.detail > 0 && e.target.closest(".fh-entity")) setTimeout(() => close(picker));
    });
    list.addEventListener("keydown", (e) => {
      if ((e.key === "Enter" || e.key === " ") && e.target.matches?.("input[type=radio]")) {
        e.preventDefault();
        e.target.checked || (e.target.checked = true, e.target.dispatchEvent(new Event("change", { bubbles: true })));
        close(picker);
      }
    });
    list.addEventListener("toggle", (e) => {
      trigger.setAttribute("aria-expanded", String(e.newState === "open"));
      if (e.newState === "open") (list.querySelector("input:checked") ?? list.querySelector("input:not(:disabled)"))?.focus({ preventScroll: true });
    });
    trigger.setAttribute("aria-expanded", "false");
    if (list.querySelector("input:checked")) sync(picker);
  }
});

/* —— Motion (MOT-2, MOT-4.1) ——————————————————————————————————————————————
 * Intro hold: intros ([data-fh-enter]) run once <html> has fh-js and hold until fh-ready. The
 * page's head sets fh-js with a 2s fallback for fh-ready:
 *   <script>(d=>{d.classList.add("fh-js");setTimeout(()=>d.classList.add("fh-ready"),2e3)})(document.documentElement)</script>
 * This adds fh-ready sooner: as soon as fonts and the images inside [data-fh-intro] have
 * loaded, so intros never play against a half-loaded page.
 *
 * Circle reveal: Firehorse.reveal(change, from) runs change() as a view transition and opens
 * the new look out as a circle from the element `from` (a theme picker, a typeface button).
 * Instant without view transitions or under reduced motion. */
{
  const root = document.documentElement;
  if (root.classList.contains("fh-js") && !root.classList.contains("fh-ready")) {
    const imgs = [...document.querySelectorAll("[data-fh-intro] img")].map((i) => (i.decode ? i.decode().catch(() => {}) : Promise.resolve()));
    const go = () => root.classList.add("fh-ready");
    Promise.race([Promise.all([document.fonts?.ready ?? Promise.resolve(), ...imgs]), new Promise((r) => setTimeout(r, 2000))]).then(go, go);
  }
  const ms = (name, fallback) => {
    const v = getComputedStyle(root).getPropertyValue(name).trim();
    return v.endsWith("ms") ? parseFloat(v) : v.endsWith("s") ? parseFloat(v) * 1000 : fallback;
  };
  const reveal = (change, from) => {
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!document.startViewTransition || still) { change(); return Promise.resolve(); }
    const r = from?.getBoundingClientRect?.();
    const x = r ? r.left + r.width / 2 : innerWidth - 40, y = r ? r.top + r.height / 2 : 40;
    const end = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    root.setAttribute("data-fh-vt", "reveal");
    const vt = document.startViewTransition(change);
    vt.ready.then(() => {
      root.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${end}px at ${x}px ${y}px)`] },
        { duration: ms("--fh-duration-reveal", 720), easing: getComputedStyle(root).getPropertyValue("--fh-ease-in-out").trim() || "ease-in-out", pseudoElement: "::view-transition-new(root)" }
      );
    }).catch(() => {});
    return vt.finished.finally(() => root.removeAttribute("data-fh-vt"));
  };
  globalThis.Firehorse = Object.assign(globalThis.Firehorse || {}, { reveal });
}

/* —— Choreography: glide and lock (MOT-4.2, MOT-4.3) ——————————————————————————
 * Free. Script measures once (and on resize); the motion itself rides the root scroll timeline
 * in CSS (src/utilities/intro.css), so it tracks the scroll exactly on the compositor.
 *
 *   data-fh-glide="center"   The element hands off from its place to a fixed pill that slides to
 *                            the centre of the window as the page scrolls (the homepage nav).
 *   data-fh-lock             The element rides up with the page, then locks on a line:
 *     data-fh-lock-to          a selector (its top, or its middle with data-fh-lock-align="middle")
 *                              or a number of px from the top; default 16
 *     data-fh-lock-scale       a number, or "fit" to end as tall as the lock-to element
 *     data-fh-lock-origin      "left" (default) or "right": the side it shrinks toward
 *     data-fh-lock="clone"     for non-interactive marks: a copy moves, the original stays in
 *                              place for assistive tech (opacity 0); data-fh-lock-href makes the
 *                              copy a link (e.g. back to the top)
 *   The first lock (or the one with data-fh-lock-primary) sets --fh-lock on <html>: the scroll
 *   distance other pieces (glides, fh-recede via --fh-recede-range) share. Each locked element
 *   gets data-locked once it has locked. Waits for intros to finish; skipped under reduced
 *   motion or without scroll-driven animations, where everything simply stays in the page.
 *   Firehorse.choreo.locks maps each element to its measurements; "fh:choreo" fires when ready. */
{
  const root = document.documentElement;
  const able = !matchMedia("(prefers-reduced-motion: reduce)").matches && CSS.supports?.("animation-timeline: scroll()");
  const glides = [...document.querySelectorAll("[data-fh-glide]")];
  const lockEls = [...document.querySelectorAll("[data-fh-lock]")];
  const choreo = { locks: new Map(), glides: new Map(), ready: false };
  globalThis.Firehorse = Object.assign(globalThis.Firehorse || {}, { choreo });
  if (able && (glides.length || lockEls.length)) {
    // Moving an element restarts its CSS animations, so a moved element (and its stand-in) drops
    // its entrance attributes first: its intro has already played.
    const settle = (el) => { for (const n of [el, ...el.querySelectorAll("[data-fh-enter], [data-fh-enter-children]")]) { n.removeAttribute("data-fh-enter"); n.removeAttribute("data-fh-enter-children"); } };
    const ghostOf = (el) => {
      const g = el.cloneNode(true);
      g.removeAttribute("id"); g.querySelectorAll("[id]").forEach((n) => n.removeAttribute("id"));
      g.setAttribute("aria-hidden", "true"); g.inert = true; g.classList.add("fh-choreo-ghost");
      for (const a of ["data-fh-glide", "data-fh-lock", "popovertarget"]) g.removeAttribute(a);
      settle(g);
      return g;
    };
    const lineOf = (spec, align) => {
      if (spec && !/^[\d.]+$/.test(spec)) {
        const t = document.querySelector(spec);
        if (t) { const r = t.getBoundingClientRect(), fixed = getComputedStyle(t).position === "fixed"; return { y: (fixed ? r.top : r.top + scrollY) + (align === "middle" ? r.height / 2 : 0), h: r.height }; }
      }
      return { y: spec ? parseFloat(spec) : 16, h: 0 };
    };
    const measureGlide = (g) => {
      const { el, wrap, ghost } = g;
      const pad = parseFloat(getComputedStyle(wrap).paddingInlineStart) || 0;
      const r = ghost.getBoundingClientRect();
      wrap.style.setProperty("--_fh-y", `${r.top + scrollY - pad}px`);
      wrap.style.setProperty("--_fh-x0", `${r.left - pad}px`);
      wrap.style.setProperty("--_fh-x1", `${Math.round((root.clientWidth - wrap.offsetWidth) / 2)}px`);
    };
    const measureLock = (L) => {
      const { el, layer, ghost } = L;
      const r = ghost.getBoundingClientRect();
      const align = el.dataset.fhLockAlign === "middle" ? "middle" : "top";
      const line = lineOf(el.dataset.fhLockTo, align);
      const s = el.dataset.fhLockScale === "fit" && line.h ? line.h / r.height : parseFloat(el.dataset.fhLockScale) || 1;
      const right = el.dataset.fhLockOrigin === "right";
      const top = r.top + scrollY, ref = align === "middle" ? r.height / 2 : 0;
      const dist = Math.max(1, Math.round(top + ref - line.y));
      Object.assign(L, { dist, s, box: { left: right ? r.left + r.width * (1 - s) : r.left, width: r.width * s, top: line.y - (align === "middle" ? (r.height * s) / 2 : 0), height: r.height * s } });
      layer.style.setProperty("--_fh-top", `${top}px`);
      layer.style.setProperty("--_fh-left", `${r.left}px`);
      layer.style.setProperty("--_fh-w", `${r.width}px`);
      layer.style.setProperty("--_fh-dist", `${dist}px`);
      layer.style.setProperty("--_fh-s", String(s));
      layer.style.setProperty("--_fh-o", `${right ? "100%" : "0"} ${align === "middle" ? "50%" : "0"}`);
      if (L.primary) root.style.setProperty("--fh-lock", `${dist}px`);
    };
    const measure = () => { choreo.glides.forEach(measureGlide); choreo.locks.forEach(measureLock); choreo.glides.forEach(measureGlide); root.dispatchEvent(new CustomEvent("fh:choreo-measure")); };
    const start = () => {
      if (choreo.ready) return;
      for (const el of glides) {
        settle(el);
        const ghost = ghostOf(el); el.before(ghost);
        const wrap = document.createElement("div"); wrap.className = "fh-glide"; document.body.append(wrap);
        wrap.append(el);
        choreo.glides.set(el, { el, wrap, ghost });
      }
      const primary = lockEls.find((e) => e.hasAttribute("data-fh-lock-primary")) || lockEls[0];
      for (const el of lockEls) {
        if (el.dataset.fhLock !== "clone") settle(el);
        const ghost = ghostOf(el); el.before(ghost);
        let layer;
        if (el.dataset.fhLock === "clone") {
          const copy = ghostOf(el); copy.classList.remove("fh-choreo-ghost"); copy.inert = false;
          layer = el.dataset.fhLockHref ? Object.assign(document.createElement("a"), { href: el.dataset.fhLockHref }) : document.createElement("div");
          if (el.dataset.fhLockHref) { layer.setAttribute("aria-label", el.dataset.fhLockLabel || el.textContent.trim()); copy.setAttribute("aria-hidden", "true"); } else layer.setAttribute("aria-hidden", "true");
          layer.append(copy);
          const cs = getComputedStyle(el);
          Object.assign(copy.style, { fontFamily: cs.fontFamily, fontSize: cs.fontSize, fontWeight: cs.fontWeight, letterSpacing: cs.letterSpacing, lineHeight: cs.lineHeight, margin: "0" });
          settle(el); el.classList.add("fh-lock-source"); ghost.remove(); // its intro has played; now it only holds its place
          choreo.locks.set(el, { el, layer, ghost: el, primary: el === primary, copy });
        } else {
          layer = document.createElement("div"); layer.append(el);
          choreo.locks.set(el, { el, layer, ghost, primary: el === primary });
        }
        layer.classList.add("fh-lock");
        document.body.append(layer);
      }
      measure();
      choreo.ready = true;
      root.setAttribute("data-fh-choreo", "");
      let raf = 0;
      const check = () => { raf = 0; choreo.locks.forEach((L) => { const on = scrollY >= L.dist - 0.5; if (on !== L.on) { L.on = on; (L.copy || L.el).toggleAttribute("data-locked", on); L.layer.toggleAttribute("data-locked", on); } }); };
      addEventListener("scroll", () => { if (!raf) raf = requestAnimationFrame(check); }, { passive: true });
      check();
      let rz = 0;
      addEventListener("resize", () => { cancelAnimationFrame(rz); rz = requestAnimationFrame(measure); }, { passive: true });
      document.fonts?.ready.then(measure);
      root.dispatchEvent(new CustomEvent("fh:choreo", { detail: choreo }));
    };
    // Wait for intros to land (fh-ready, then every running entrance), at most 6s.
    const intros = () => Promise.all(document.getAnimations ? document.getAnimations().filter((a) => a.effect?.target?.closest?.("[data-fh-enter], [data-fh-enter-children]")).map((a) => a.finished.catch(() => {})) : []);
    const whenReady = () => new Promise((r) => { if (root.classList.contains("fh-ready") || !root.classList.contains("fh-js")) r(); else new MutationObserver((_, o) => { if (root.classList.contains("fh-ready")) { o.disconnect(); r(); } }).observe(root, { attributes: true, attributeFilter: ["class"] }); });
    Promise.race([whenReady().then(() => new Promise((r) => requestAnimationFrame(r))).then(intros), new Promise((r) => setTimeout(r, 6000))]).then(() => requestAnimationFrame(start));
  }
}
