/*!
 * Firehorse area tabs reveal — dist/tabs-nav.js · MIT
 * ---------------------------------------------------------------
 * Optional. The area navigation region (.fh-tpl__nav, TPL-1.6) keeps its
 * sub tabs on one line and scrolls them sideways under 36rem. CSS snaps the
 * current tab to the centre, but browsers do not always snap on first
 * layout, so the current tab can sit off screen. This script fixes that:
 *
 *   <div class="fh-tpl__nav">
 *     <nav class="fh-tabs fh-tabs--sub" aria-label="Goals pages"> … </nav>
 *   </div>
 *
 * On load, and again when `fh:tabs-nav-refresh` is dispatched on a nav (after
 * the tabs or the current page change), every `.fh-tpl__nav > .fh-tabs`
 * whose [aria-current="page"] link is not fully inside the nav's visible
 * width gets its scrollLeft set so that link is centred. A link that is
 * already fully visible is left alone.
 *
 * Only the nav's own scrollLeft is set, with no animation. It never calls
 * scrollIntoView, which can move the page as well.
 *
 *   import "@rascode/firehorse/tabs-nav";
 *   import { revealCurrentTab } from "@rascode/firehorse/tabs-nav";
 */

const SELECTOR = ".fh-tpl__nav > .fh-tabs";
const REFRESH = "fh:tabs-nav-refresh";

const doc = typeof document === "undefined" ? null : document;

/**
 * Centres the nav's current tab when it is not fully visible.
 * Returns true when scrollLeft was set.
 */
export function revealCurrentTab(nav) {
  const link = nav?.querySelector?.('[aria-current="page"]');
  if (!link) return false;
  const box = nav.getBoundingClientRect();
  if (!box.width) return false;
  const rect = link.getBoundingClientRect();
  if (rect.left >= box.left && rect.right <= box.right) return false;
  const before = nav.scrollLeft;
  // Screen distance between the two centres; a positive distance scrolls
  // toward the inline end in either direction of writing, as scrollLeft does.
  nav.scrollLeft = before + (rect.left + rect.width / 2) - (box.left + box.width / 2);
  return nav.scrollLeft !== before;
}

function revealAll() {
  for (const nav of doc.querySelectorAll(SELECTOR)) revealCurrentTab(nav);
}

if (doc) {
  doc.addEventListener(REFRESH, (event) => {
    const target = event.target;
    const nav = target?.matches?.(SELECTOR) ? target : target?.closest?.(SELECTOR);
    if (nav) revealCurrentTab(nav);
  });
  if (doc.readyState === "loading") doc.addEventListener("DOMContentLoaded", revealAll, { once: true });
  else revealAll();
  // Fonts and images can change the tab widths after first layout.
  if (doc.readyState !== "complete") globalThis.addEventListener?.("load", revealAll, { once: true });
}
