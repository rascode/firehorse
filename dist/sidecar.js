/*!
 * Firehorse sidecar opener — dist/sidecar.js · MIT
 * ---------------------------------------------------------------
 * Optional. Opens the record sidecar for any element that names a record:
 *
 *   <a class="fh-link" href="/goals/harbor" data-sidecar="goal-harbor">Harbor index refresh</a>
 *   <dialog class="fh-dialog fh-dialog--float fh-sidecar" aria-label="Record">…</dialog>
 *
 * A click (or Enter / Space on an element that is not natively a button
 * or link) sets data-record="<id>" on the sidecar and opens it as a modal
 * dialog. Escape, the close control (.fh-close or [data-sidecar-close])
 * and a click on the backdrop close it, and focus goes back to the
 * element that opened it. A link keeps its href, so with no script, or on
 * a modified click (new tab), it still goes to the record.
 *
 * A records row's expand toggle (.fh-dt__expand, see records.js) sits
 * inside the row's opener: a click or a key on it opens and closes the
 * detail row and never the sidecar.
 *
 * Which sidecar: the opener's data-sidecar-target="#selector", else the
 * dialog.fh-sidecar whose data-record matches, else the first
 * dialog.fh-sidecar on the page.
 *
 * Events (bubbling, on the sidecar; on the opener when the page has no
 * sidecar dialog), detail { id, opener, sidecar, previous }:
 *   fh:sidecar-open    after data-record is set, before the dialog opens:
 *                      fill the sidecar for `id` here. Fires again when a
 *                      record link inside the sidecar swaps its record.
 *   fh:sidecar-close   after the dialog has closed and focus has returned.
 *
 * Width, opt in with data-sidecar-resize on the dialog. When the attribute
 * has a value, that value is the localStorage key (for example
 * helm.sidecar.width). The saved width is read when the dialog opens, and
 * storage is wrapped in try/catch. A handle, .fh-sidecar__resize, is
 * inserted once as the dialog's first child. Dragging sets --fh-dialog-size
 * to the pointer's distance from the dialog's right edge, in px, clamped
 * between 352px and the window width minus 32px. ArrowLeft widens by 32px,
 * ArrowRight narrows by 32px, and Home or a double-click removes the
 * property so the dialog returns to its default. After a change:
 *   fh:sidecar-resize  detail { width } in pixels.
 *
 * Unsaved changes: an input or change inside a form section
 * (.fh-panel-section--form) sets data-dirty on that section and on the
 * sidecar. A submit that the page does not cancel, or a form reset, clears
 * it. While the sidecar is dirty, closing it (Escape, the close control, the
 * backdrop, closeSidecar) or swapping it to another record first fires:
 *   fh:sidecar-before-close  cancelable, detail { id, next, reason, opener,
 *                      sidecar }: id is the record being left, reason is
 *                      "close" or "swap", next is the record a swap goes to
 *                      (null on close). preventDefault() keeps the sidecar
 *                      on its record. With no listener it closes as before.
 *                      A page that cancels the submit and saves itself
 *                      removes data-dirty (section and sidecar) once it has.
 *
 *   import "@rascode/firehorse/sidecar";
 *   import { openSidecar, closeSidecar } from "@rascode/firehorse/sidecar";
 */

const ATTR = "data-sidecar";
const SELECTOR = `[${ATTR}]`;
const NATIVE = "a[href], button, input, select, textarea, summary";
/* Controls inside an opener that do their own job (records.js). */
const OWN = ".fh-dt__expand";

const openers = new WeakMap(); // sidecar dialog → the element that opened it
let uid = 0;

const emit = (target, name, detail) =>
  target.dispatchEvent(new CustomEvent(name, { bubbles: true, detail }));

const FORM_SECTION = ".fh-panel-section--form";

/* An event a host can cancel: true when nobody did. */
const ask = (target, name, detail) =>
  target.dispatchEvent(new CustomEvent(name, { bubbles: true, cancelable: true, detail }));

const findSidecar = (opener, id) => {
  const sel = opener?.getAttribute("data-sidecar-target");
  if (sel) {
    const named = document.querySelector(sel);
    if (named instanceof HTMLDialogElement) return named;
  }
  const dialogs = [...document.querySelectorAll("dialog.fh-sidecar")];
  return dialogs.find((d) => d.dataset.record === id) ?? dialogs[0] ?? null;
};

/* The dialog is named by the record's title once it has one. */
const label = (dlg) => {
  const title = dlg.querySelector(".fh-sidecar__title");
  if (!title) return;
  title.id ||= `fh-sidecar-title-${++uid}`;
  dlg.setAttribute("aria-labelledby", title.id);
};

const isDirty = (dlg) => dlg.hasAttribute("data-dirty");

const clearDirty = (dlg) => {
  dlg.removeAttribute("data-dirty");
  dlg.querySelectorAll(`${FORM_SECTION}[data-dirty]`).forEach((s) => s.removeAttribute("data-dirty"));
};

/* A dirty sidecar asks the host before it leaves its record. */
const mayLeave = (dlg, reason, next = null) =>
  !isDirty(dlg) ||
  ask(dlg, "fh:sidecar-before-close", {
    id: dlg.dataset.record ?? null,
    next,
    reason,
    opener: openers.get(dlg) ?? null,
    sidecar: dlg,
  });

export function openSidecar(id, opener = null) {
  const dlg = findSidecar(opener, id);
  if (!dlg) {
    if (opener) emit(opener, "fh:sidecar-open", { id, opener, sidecar: null, previous: null });
    return null;
  }
  const previous = dlg.dataset.record ?? null;
  if (dlg.open && previous !== id) {
    // The click was ours either way: a refused swap leaves the sidecar as it is.
    if (!mayLeave(dlg, "swap", id)) return dlg;
    clearDirty(dlg);
  }
  // Opened from a record link inside the sidecar: focus still goes back to the first opener.
  if (opener && !dlg.contains(opener)) openers.set(dlg, opener);
  dlg.dataset.record = id;
  emit(dlg, "fh:sidecar-open", { id, opener: openers.get(dlg) ?? opener, sidecar: dlg, previous });
  label(dlg);
  if (!dlg.open) dlg.showModal();
  openers.get(dlg)?.setAttribute("aria-expanded", "true");
  return dlg;
}

export function closeSidecar(dlg = document.querySelector("dialog.fh-sidecar[open]")) {
  if (dlg?.open && mayLeave(dlg, "close")) dlg.close();
}

/* —— Openers ——
 * Anything that is not natively a link or button gets the role, a tab stop
 * and the dialog hint, so a keyboard and a screen reader can use it. */
const enhance = (el) => {
  if (el.dataset.fhSidecarReady) return;
  el.dataset.fhSidecarReady = "";
  el.setAttribute("aria-haspopup", "dialog");
  if (!el.matches(NATIVE)) {
    el.setAttribute("role", "button");
    if (!el.hasAttribute("tabindex")) el.tabIndex = 0;
  }
};

const RESIZE_ATTR = "data-sidecar-resize";
const RESIZE_SEL = `dialog.fh-sidecar[${RESIZE_ATTR}]`;
const MIN_WIDTH = 352;
const WIDTH_STEP = 32;
const VIEW_GUTTER = 32;

/* Empty attribute: the handle works, and nothing is stored. */
const resizeKey = (dlg) => dlg.getAttribute(RESIZE_ATTR) || "";

const clampWidth = (px) => Math.min(window.innerWidth - VIEW_GUTTER, Math.max(MIN_WIDTH, Math.round(px)));

const rememberWidth = (dlg, width) => {
  const key = resizeKey(dlg);
  if (!key) return;
  try {
    if (width == null) localStorage.removeItem(key);
    else localStorage.setItem(key, String(width));
  } catch {
    /* Storage can throw in private mode. The width still applies for this view. */
  }
};

const storedWidth = (dlg) => {
  const key = resizeKey(dlg);
  if (!key) return null;
  try {
    const raw = localStorage.getItem(key);
    if (raw == null || raw === "") return null;
    const n = Number.parseFloat(raw);
    return Number.isFinite(n) ? n : null;
  } catch {
    return null;
  }
};

/* Sets --fh-dialog-size. Stores when asked. Fires only when the value changes. */
const applyWidth = (dlg, px, store) => {
  const width = clampWidth(px);
  const next = `${width}px`;
  const prev = dlg.style.getPropertyValue("--fh-dialog-size").trim();
  dlg.style.setProperty("--fh-dialog-size", next);
  if (store) rememberWidth(dlg, width);
  if (prev !== next) emit(dlg, "fh:sidecar-resize", { width });
  return width;
};

/* Home and double-click: back to the stylesheet default. */
const resetWidth = (dlg) => {
  const prev = dlg.style.getPropertyValue("--fh-dialog-size").trim();
  dlg.style.removeProperty("--fh-dialog-size");
  rememberWidth(dlg, null);
  if (prev) emit(dlg, "fh:sidecar-resize", { width: Math.round(dlg.getBoundingClientRect().width) });
};

const restoreWidth = (dlg) => {
  const saved = storedWidth(dlg);
  if (saved == null) return;
  applyWidth(dlg, saved, false);
};

const mountResize = (dlg) => {
  if (dlg.querySelector(":scope > .fh-sidecar__resize")) return;
  const handle = document.createElement("div");
  handle.className = "fh-sidecar__resize";
  handle.setAttribute("role", "separator");
  handle.setAttribute("aria-orientation", "vertical");
  handle.tabIndex = 0;
  handle.setAttribute("aria-label", "Drag to change the panel width");
  dlg.insertBefore(handle, dlg.firstChild);

  handle.addEventListener("pointerdown", (e) => {
    if (e.button !== 0) return;
    e.preventDefault();
    const right = dlg.getBoundingClientRect().right;
    let moved = false;
    let done = false;
    const move = (ev) => {
      moved = true;
      applyWidth(dlg, right - ev.clientX, false);
    };
    const up = () => {
      if (done) return;
      done = true;
      handle.removeEventListener("pointermove", move);
      handle.removeEventListener("pointerup", up);
      handle.removeEventListener("pointercancel", up);
      if (!moved) return;
      const n = Number.parseFloat(dlg.style.getPropertyValue("--fh-dialog-size"));
      if (Number.isFinite(n)) rememberWidth(dlg, n);
    };
    handle.addEventListener("pointermove", move);
    handle.addEventListener("pointerup", up);
    handle.addEventListener("pointercancel", up);
    handle.setPointerCapture(e.pointerId);
  });

  handle.addEventListener("keydown", (e) => {
    if (e.key === "Home") {
      e.preventDefault();
      resetWidth(dlg);
      return;
    }
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    const current = dlg.getBoundingClientRect().width;
    applyWidth(dlg, e.key === "ArrowLeft" ? current + WIDTH_STEP : current - WIDTH_STEP, true);
  });

  handle.addEventListener("dblclick", (e) => {
    e.preventDefault();
    resetWidth(dlg);
  });

  if (dlg.open) restoreWidth(dlg);
};

const scan = (root) => {
  if (root.matches?.(SELECTOR)) enhance(root);
  root.querySelectorAll?.(SELECTOR).forEach(enhance);
  if (root.matches?.(RESIZE_SEL)) mountResize(root);
  root.querySelectorAll?.(RESIZE_SEL).forEach(mountResize);
};

const modified = (e) => e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;

const activate = (e, opener) => {
  const id = opener.getAttribute(ATTR);
  if (!id) return;
  if (openSidecar(id, opener)) e.preventDefault();
};

function init() {
  if (window.__fhSidecar) return;
  window.__fhSidecar = true;

  scan(document);
  new MutationObserver((records) => {
    for (const r of records) r.addedNodes.forEach((n) => n.nodeType === 1 && scan(n));
  }).observe(document.documentElement, { childList: true, subtree: true });

  document.addEventListener("click", (e) => {
    if (e.target.closest?.(OWN)) return;
    const opener = e.target.closest?.(SELECTOR);
    if (opener && !modified(e)) return activate(e, opener);
    const dlg = e.target.closest?.("dialog.fh-sidecar");
    if (!dlg) return;
    if (e.target.closest(".fh-close, [data-sidecar-close]")) return closeSidecar(dlg);
    // The backdrop is the dialog element itself: a click outside its box.
    if (e.target === dlg) {
      const r = dlg.getBoundingClientRect();
      if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) closeSidecar(dlg);
    }
  });

  // Unsaved changes: the form section marks itself and the sidecar around it.
  const markDirty = (e) => {
    const section = e.target.closest?.(FORM_SECTION);
    if (!section) return;
    section.dataset.dirty = "";
    section.closest("dialog.fh-sidecar, .fh-sidecar")?.setAttribute("data-dirty", "");
  };
  document.addEventListener("input", markDirty);
  document.addEventListener("change", markDirty);

  const markClean = (e) => {
    const section = e.target.closest?.(FORM_SECTION);
    if (!section) return;
    section.removeAttribute("data-dirty");
    const sidecar = section.closest("dialog.fh-sidecar, .fh-sidecar");
    if (sidecar && !sidecar.querySelector(`${FORM_SECTION}[data-dirty]`)) sidecar.removeAttribute("data-dirty");
  };
  // A page that cancels the submit has taken over saving: it clears data-dirty itself.
  document.addEventListener("submit", (e) => {
    if (!e.defaultPrevented) markClean(e);
  });
  document.addEventListener("reset", markClean);

  // Escape: the dialog's own cancel event, before it closes.
  document.addEventListener(
    "cancel",
    (e) => {
      const dlg = e.target;
      if (dlg instanceof HTMLDialogElement && dlg.matches(".fh-sidecar") && !mayLeave(dlg, "close")) e.preventDefault();
    },
    true,
  );

  // A saved width applies when the dialog opens (showModal, show, or the open attribute).
  document.addEventListener(
    "toggle",
    (e) => {
      const dlg = e.target;
      if (!(dlg instanceof HTMLDialogElement) || !dlg.matches(RESIZE_SEL) || !dlg.open) return;
      restoreWidth(dlg);
    },
    true,
  );

  // Enter is a click on a link or button already; the rest need it by hand.
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    if (e.target.closest?.(OWN)) return;
    const opener = e.target.closest?.(SELECTOR);
    if (opener && !opener.matches(NATIVE)) activate(e, opener);
  });

  // `close` does not bubble, so listen on the capture phase. Escape, the close
  // control, the backdrop and a script's dialog.close() all end up here.
  document.addEventListener(
    "close",
    (e) => {
      const dlg = e.target;
      if (!(dlg instanceof HTMLDialogElement) || !dlg.matches(".fh-sidecar")) return;
      const opener = openers.get(dlg) ?? null;
      openers.delete(dlg);
      clearDirty(dlg);
      opener?.setAttribute("aria-expanded", "false");
      if (opener?.isConnected) opener.focus({ preventScroll: true });
      emit(dlg, "fh:sidecar-close", { id: dlg.dataset.record ?? null, opener, sidecar: dlg, previous: null });
    },
    true,
  );
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
}
