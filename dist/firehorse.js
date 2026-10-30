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
 *      that switches data-fh-theme and remembers the choice.
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
   * Same-page links: short jumps scroll smoothly; long jumps cut to just
   * short of the target and glide the last stretch, so travelling across
   * a long page takes ~400ms instead of seconds and never misfires.
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
    const glide = Math.min(Math.abs(dist), innerHeight * 0.6);
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
    if (!smooth || Math.abs(dist) <= glide + 1) {
      scrollTo({ top: y, behavior: smooth ? "smooth" : "instant" });
      afterScroll();
    } else {
      scrollTo({ top: y - Math.sign(dist) * glide, behavior: "instant" });
      requestAnimationFrame(() => {
        if (token !== navToken) return;
        scrollTo({ top: targetY(el), behavior: "smooth" });
        afterScroll();
      });
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
