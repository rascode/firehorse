/*!
 * Firehorse image stack — dist/image-stack.js · MIT
 * ---------------------------------------------------------------
 * Optional. The image stack (IMS, src/components/content/image-stack.css)
 * opens on hover and on focus with CSS alone, and each card links to its
 * image. This script adds:
 *
 *   - Room: as the pointer or focus arrives, it checks whether the row fits on
 *     the end side (right in left-to-right text) inside the nearest clipping
 *     box or the window. If not, it sets data-fan="start" and the row opens
 *     toward the start; if neither side fits, it takes the roomier one.
 *   - Touch: the first tap on a closed stack opens it (data-open) instead of
 *     following the link; a tap outside, or Escape, closes it.
 *   - The viewer (IMS-2.1): a click on a card opens its image in a dialog with
 *     its details, a count, previous / next buttons and arrow keys. Escape or
 *     a click on the backdrop closes it, and focus goes back to the card.
 *
 *   import "@rascode/firehorse/image-stack";
 *   import { initImageStack, openImageViewer, closeImageStacks, fitImageStack } from "@rascode/firehorse/image-stack";
 *
 * A card's details come from its figcaption: .fh-image-stack__file and each
 * .fh-image-stack__meta. Set data-full on the link for a different full-size
 * file than its href. "fh:image-open" fires on the stack (detail: { index, href }).
 * Mark a stack data-viewer="off" to keep plain links.
 *
 * A gallery (ul.fh-gallery, the Gallery section SGA) shares the viewer: a
 * click on a thumbnail button opens the set at that image. Its details come
 * from the item's .fh-gallery__caption and its kind chip; data-full on the
 * button names a different full-size file than the img.
 */

const SELECTOR = ".fh-image-stack";
const GALLERY = ".fh-gallery";
const doc = typeof document === "undefined" ? null : document;
let lastPointer = "mouse";
let viewer = null;
let state = null;   // { stack, items, index, opener }

const icon = (name) => `<i class="fh-icon fh-icon--${name}" aria-hidden="true"></i>`;

const galleryItemsOf = (gallery) => [...gallery.querySelectorAll(":scope > li")].filter((li) => li.querySelector(":scope > button img")).map((li) => {
  const button = li.querySelector(":scope > button");
  const img = button.querySelector("img");
  return {
    link: button,
    href: button.dataset.full || img.currentSrc || img.src || "",
    alt: img.getAttribute("alt") ?? "",
    file: li.querySelector(".fh-gallery__caption")?.textContent?.trim() ?? "",
    meta: [...li.querySelectorAll(":scope > .fh-chip")].map((m) => m.textContent.trim()).filter(Boolean),
  };
});

const itemsOf = (stack) => stack.matches(GALLERY) ? galleryItemsOf(stack) : [...stack.querySelectorAll(":scope > .fh-image-stack__list > .fh-image-stack__item")].map((li) => {
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

const clipBox = (el) => {
  for (let p = el.parentElement; p && p !== doc.body; p = p.parentElement) {
    const ox = getComputedStyle(p).overflowX;
    if (ox !== "visible") { const r = p.getBoundingClientRect(); return { left: r.left, right: r.right }; }
  }
  return { left: 0, right: doc.documentElement.clientWidth };
};

/** Picks the side the row opens to: the end when it fits, else the start (data-fan="start"). */
export function fitImageStack(stack) {
  const list = stack.querySelector(":scope > .fh-image-stack__list");
  const first = list?.firstElementChild;
  const n = list?.children.length ?? 0;
  if (!first || n < 2) return;
  const card = first.offsetWidth;                              // untransformed width
  const gap = parseFloat(getComputedStyle(list).columnGap) || 0;
  const reach = (card + gap) * (n - 1);
  const r = list.getBoundingClientRect();
  const box = clipBox(stack);
  const rtl = getComputedStyle(stack).direction === "rtl";
  const start = rtl ? r.right : r.left;                        // the first card's start edge
  const endRoom = rtl ? (start - card) - box.left : box.right - (start + card);
  const startRoom = rtl ? box.right - start : start - box.left;
  const toStart = endRoom < reach && startRoom > endRoom;
  if (toStart) stack.dataset.fan = "start";
  else delete stack.dataset.fan;
}

const fitFrom = (e) => {
  const stack = e.target.closest?.(SELECTOR);
  if (stack && !stack.contains(e.relatedTarget)) fitImageStack(stack);
};

/** Closes every stack opened by a tap (or all but one). */
export function closeImageStacks(except = null) {
  for (const s of doc.querySelectorAll(`${SELECTOR}[data-open]`)) if (s !== except) s.removeAttribute("data-open");
}

function onClick(e) {
  const thumb = e.target.closest?.(`${GALLERY} > li > button`);
  if (thumb && thumb.querySelector("img")) {
    const gallery = thumb.closest(GALLERY);
    if (gallery.dataset.viewer === "off") return;
    const shots = [...gallery.querySelectorAll(":scope > li")].filter((li) => li.querySelector(":scope > button img"));
    openImageViewer(gallery, shots.indexOf(thumb.parentElement));
    return;
  }
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
    fitImageStack(stack);
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
  doc.addEventListener("pointerover", fitFrom);
  doc.addEventListener("focusin", fitFrom);
}

if (doc) {
  if (doc.readyState === "loading") doc.addEventListener("DOMContentLoaded", initImageStack, { once: true });
  else initImageStack();
}

export default initImageStack;
