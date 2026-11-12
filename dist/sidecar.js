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
 *   import "@rascode/firehorse/sidecar";
 *   import { openSidecar, closeSidecar } from "@rascode/firehorse/sidecar";
 */

const ATTR = "data-sidecar";
const SELECTOR = `[${ATTR}]`;
const NATIVE = "a[href], button, input, select, textarea, summary";

const openers = new WeakMap(); // sidecar dialog → the element that opened it
let uid = 0;

const emit = (target, name, detail) =>
  target.dispatchEvent(new CustomEvent(name, { bubbles: true, detail }));

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

export function openSidecar(id, opener = null) {
  const dlg = findSidecar(opener, id);
  if (!dlg) {
    if (opener) emit(opener, "fh:sidecar-open", { id, opener, sidecar: null, previous: null });
    return null;
  }
  const previous = dlg.dataset.record ?? null;
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
  if (dlg?.open) dlg.close();
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

const scan = (root) => {
  if (root.matches?.(SELECTOR)) enhance(root);
  root.querySelectorAll?.(SELECTOR).forEach(enhance);
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

  // Enter is a click on a link or button already; the rest need it by hand.
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
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
