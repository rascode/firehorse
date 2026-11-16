/*!
 * Firehorse image stack — dist/image-stack.js · MIT
 * ---------------------------------------------------------------
 * Optional. The image stack (IMS, src/components/content/image-stack.css)
 * opens on hover and on focus with CSS alone, and each card links to its
 * image. This script adds:
 *
 *   - Touch: the first tap on a closed stack opens it (data-open) instead of
 *     following the link; a tap outside, or Escape, closes it.
 *   - The viewer (IMS-2.1): a click on a card opens its image in a dialog with
 *     its details, a count, previous / next buttons and arrow keys. Escape or
 *     a click on the backdrop closes it, and focus goes back to the card.
 *
 *   import "@rascode/firehorse/image-stack";
 *   import { initImageStack, openImageViewer, closeImageStacks } from "@rascode/firehorse/image-stack";
 *
 * A card's details come from its figcaption: .fh-image-stack__file and each
 * .fh-image-stack__meta. Set data-full on the link for a different full-size
 * file than its href. "fh:image-open" fires on the stack (detail: { index, href }).
 * Mark a stack data-viewer="off" to keep plain links.
 */

const SELECTOR = ".fh-image-stack";
const doc = typeof document === "undefined" ? null : document;
let lastPointer = "mouse";
let viewer = null;
let state = null;   // { stack, items, index, opener }

const icon = (name) => `<i class="fh-icon fh-icon--${name}" aria-hidden="true"></i>`;

const itemsOf = (stack) => [...stack.querySelectorAll(":scope > .fh-image-stack__list > .fh-image-stack__item")].map((li) => {
  const link = li.querySelector(".fh-image-stack__open");
  const img = li.querySelector("img");
  return {
    link,
    href: link?.dataset.full || link?.getAttribute("href") || img?.currentSrc || img?.src || "",
    alt: img?.getAttribute("alt") ?? "",
    file: li.querySelector(".fh-image-stack__file")?.textContent?.trim() ?? "",
    meta: [...li.querySelectorAll(".fh-image-stack__meta")].map((m) => m.textContent.trim()).filter(Boolean),
  };
});

function buildViewer() {
  const d = doc.createElement("dialog");
  d.className = "fh-image-viewer";
  d.dataset.fh = "IMS-2.1";
  d.setAttribute("aria-label", "Image viewer");
  d.innerHTML =
    `<p class="fh-image-viewer__count" aria-live="polite"></p>` +
    `<button type="button" class="fh-button fh-button--disc fh-image-viewer__close" aria-label="Close">${icon("x")}</button>` +
    `<button type="button" class="fh-button fh-button--disc fh-image-viewer__prev" aria-label="Previous image">${icon("chevron-left")}</button>` +
    `<figure class="fh-image-viewer__figure"><img class="fh-image-viewer__img" alt="">` +
    `<figcaption class="fh-image-viewer__caption"></figcaption></figure>` +
    `<button type="button" class="fh-button fh-button--disc fh-image-viewer__next" aria-label="Next image">${icon("chevron-right")}</button>`;
  d.querySelector(".fh-image-viewer__close").addEventListener("click", () => d.close());
  d.querySelector(".fh-image-viewer__prev").addEventListener("click", () => show(state.index - 1));
  d.querySelector(".fh-image-viewer__next").addEventListener("click", () => show(state.index + 1));
  // A click on the backdrop lands on the dialog itself.
  d.addEventListener("click", (e) => { if (e.target === d) d.close(); });
  d.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); show(state.index - 1); }
    if (e.key === "ArrowRight") { e.preventDefault(); show(state.index + 1); }
  });
  d.addEventListener("close", () => {
    const opener = state?.opener;
    state = null;
    opener?.focus?.({ preventScroll: true });
  });
  doc.body.append(d);
  return d;
}

function show(index) {
  if (!state) return;
  const { items } = state;
  const i = Math.max(0, Math.min(items.length - 1, index));
  const it = items[i];
  state.index = i;
  const img = viewer.querySelector(".fh-image-viewer__img");
  img.src = it.href;
  img.alt = it.alt;
  const cap = viewer.querySelector(".fh-image-viewer__caption");
  cap.replaceChildren();
  if (it.file) cap.append(Object.assign(doc.createElement("span"), { className: "fh-image-viewer__file", textContent: it.file }));
  for (const m of it.meta) cap.append(Object.assign(doc.createElement("span"), { className: "fh-image-viewer__meta", textContent: m }));
  viewer.querySelector(".fh-image-viewer__count").textContent = items.length > 1 ? `${i + 1} / ${items.length}` : "";
  viewer.querySelector(".fh-image-viewer__prev").disabled = i === 0;
  viewer.querySelector(".fh-image-viewer__next").disabled = i === items.length - 1;
  state.stack.dispatchEvent(new CustomEvent("fh:image-open", { bubbles: true, detail: { index: i, href: it.href } }));
}

/** Opens the viewer on a stack's image (0-based). */
export function openImageViewer(stack, index = 0) {
  if (!doc) return;
  viewer ??= buildViewer();
  state = { stack, items: itemsOf(stack), index: 0, opener: doc.activeElement };
  closeImageStacks();
  show(index);
  if (!viewer.open) viewer.showModal();
}

/** Closes every stack opened by a tap (or all but one). */
export function closeImageStacks(except = null) {
  for (const s of doc.querySelectorAll(`${SELECTOR}[data-open]`)) if (s !== except) s.removeAttribute("data-open");
}

function onClick(e) {
  const link = e.target.closest?.(".fh-image-stack__open");
  if (!link) {
    if (!e.target.closest?.(SELECTOR)) closeImageStacks();
    return;
  }
  const stack = link.closest(SELECTOR);
  if (!stack) return;
  const items = [...stack.querySelectorAll(":scope > .fh-image-stack__list > .fh-image-stack__item")];
  const index = items.indexOf(link.closest(".fh-image-stack__item"));
  // First tap on a closed stack of several opens it.
  if (lastPointer === "touch" && items.length > 1 && !stack.hasAttribute("data-open")) {
    e.preventDefault();
    closeImageStacks(stack);
    stack.setAttribute("data-open", "");
    return;
  }
  if (stack.dataset.viewer === "off" || e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
  e.preventDefault();
  openImageViewer(stack, index);
}

function onKey(e) {
  if (e.key !== "Escape") return;
  const stack = e.target.closest?.(SELECTOR);
  if (!stack) return;
  stack.removeAttribute("data-open");
  e.target.blur?.();
}

let bound = false;
/** Wires the stacks (delegated: stacks added later work too). Safe to call more than once. */
export function initImageStack() {
  if (!doc || bound) return;
  bound = true;
  doc.addEventListener("pointerdown", (e) => { lastPointer = e.pointerType || "mouse"; }, { capture: true, passive: true });
  doc.addEventListener("click", onClick);
  doc.addEventListener("keydown", onKey);
}

if (doc) {
  if (doc.readyState === "loading") doc.addEventListener("DOMContentLoaded", initImageStack, { once: true });
  else initImageStack();
}

export default initImageStack;
