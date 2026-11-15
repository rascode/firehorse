/*!
 * Firehorse text fold — dist/fold.js · MIT
 * ---------------------------------------------------------------
 * Optional. The text fold (FOL, src/components/content/fold.css) folds long
 * text to a few lines with a Show all / Show less button:
 *
 *   <div class="fh-fold">
 *     <div class="fh-fold__body" id="reply-1"><p>…</p></div>
 *     <button class="fh-button fh-button--ghost fh-button--sm fh-fold__toggle" type="button"
 *       aria-expanded="false" aria-controls="reply-1" hidden>Show all</button>
 *   </div>
 *
 * Without this script the fold is plain full text and the toggle stays hidden.
 * With it, every .fh-fold gets .fh-fold--js (the CSS clamp to --fh-fold-lines,
 * default 6), and the toggle shows only when the text is taller than the
 * clamp: measured once on load and again when the fold's width changes. Short
 * text gets data-fits and no toggle. A fold with no toggle gets one.
 *
 * The toggle sets data-open on the fold, aria-expanded and the label (Show all
 * / Show less, or data-label-closed / data-label-open on the button). It is a
 * real button, so focus stays on it after a toggle. Dispatch
 * `fh:fold-refresh` on a fold (or inside one) after its text changes.
 *
 *   import "@rascode/firehorse/fold";
 *   import { initFold, measureFold, setFoldOpen } from "@rascode/firehorse/fold";
 */

const SELECTOR = ".fh-fold";
const REFRESH = "fh:fold-refresh";
const SHOW = "Show all";
const HIDE = "Show less";

const doc = typeof document === "undefined" ? null : document;
const seen = new WeakSet();
let ids = 0;
// Only a new width can change the line count. Measuring and opening change the
// height, so reacting to that would loop.
const widths = new WeakMap();
const resize = typeof ResizeObserver === "undefined" ? null : new ResizeObserver((entries) => {
  for (const { target, contentRect } of entries) {
    if (widths.get(target) === contentRect.width) continue;
    widths.set(target, contentRect.width);
    measureFold(target);
  }
});

const partsOf = (fold) => ({
  body: fold.querySelector(":scope > .fh-fold__body"),
  toggle: fold.querySelector(":scope > .fh-fold__toggle"),
});

const labelOf = (toggle, open) => open ? (toggle.dataset.labelOpen || HIDE) : (toggle.dataset.labelClosed || SHOW);

/** Opens or closes a fold: data-open, aria-expanded and the toggle's label. */
export function setFoldOpen(fold, open) {
  const { toggle } = partsOf(fold);
  fold.toggleAttribute("data-open", !!open);
  if (toggle) {
    toggle.setAttribute("aria-expanded", String(!!open));
    toggle.textContent = labelOf(toggle, !!open);
  }
}

/**
 * Measures the fold against its clamp. Text that fits gets data-fits and a
 * hidden toggle; taller text shows the toggle. Returns true when it folds.
 */
export function measureFold(fold) {
  const { body, toggle } = partsOf(fold);
  if (!body) return false;
  const open = fold.hasAttribute("data-open");
  // Measure closed: the clamp applies only without data-open and data-fits.
  fold.removeAttribute("data-fits");
  if (open) fold.removeAttribute("data-open");
  const folds = body.scrollHeight > body.clientHeight + 1;
  if (open) fold.setAttribute("data-open", "");
  fold.toggleAttribute("data-fits", !folds);
  if (toggle) toggle.hidden = !folds;
  return folds;
}

/** Sets up one fold (once): the js class, the toggle and its ids, then measures it. */
export function initFold(fold) {
  if (!fold || seen.has(fold)) return fold;
  seen.add(fold);
  let { body, toggle } = partsOf(fold);
  if (!body) return fold;
  if (!body.id) body.id = `fh-fold-${++ids}`;
  if (!toggle) {
    toggle = doc.createElement("button");
    toggle.type = "button";
    toggle.className = "fh-button fh-button--ghost fh-button--sm fh-fold__toggle";
    toggle.hidden = true;
    body.after(toggle);
  }
  toggle.setAttribute("aria-controls", body.id);
  fold.classList.add("fh-fold--js");
  setFoldOpen(fold, fold.hasAttribute("data-open"));
  measureFold(fold);
  resize?.observe(fold);
  return fold;
}

function initAll(root = doc) {
  for (const fold of root.querySelectorAll(SELECTOR)) initFold(fold);
}

if (doc) {
  doc.addEventListener("click", (event) => {
    const toggle = event.target?.closest?.(".fh-fold__toggle");
    const fold = toggle?.parentElement;
    if (!fold?.matches(SELECTOR) || !seen.has(fold)) return;
    setFoldOpen(fold, !fold.hasAttribute("data-open"));
  });
  doc.addEventListener(REFRESH, (event) => {
    const target = event.target;
    const fold = target?.matches?.(SELECTOR) ? target : target?.closest?.(SELECTOR);
    if (fold) seen.has(fold) ? measureFold(fold) : initFold(fold);
    else if (target?.querySelectorAll) initAll(target);
  });
  if (doc.readyState === "loading") doc.addEventListener("DOMContentLoaded", () => initAll(), { once: true });
  else initAll();
  // Fonts can change the line count after first layout.
  doc.fonts?.ready?.then(() => { for (const fold of doc.querySelectorAll(SELECTOR)) if (seen.has(fold)) measureFold(fold); });
}
