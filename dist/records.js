/*!
 * Firehorse record rows: dist/records.js · MIT
 * ---------------------------------------------------------------
 * Optional. Opens and closes the detail row of an expandable records row
 * (fh-dt--records, RDT). The markup is the state, so a server renders it
 * as it is:
 *
 *   <tr data-sidecar="cmp-button" tabindex="0">
 *     <td><button class="fh-dt__expand" type="button" aria-expanded="false"
 *           aria-controls="cmp-button-detail" aria-label="Variants of Button"></button></td>
 *     …
 *   </tr>
 *   <tr class="fh-dt__detail" id="cmp-button-detail" hidden><td colspan="4">…</td></tr>
 *
 * A click on the toggle (Enter and Space are clicks on a button) flips its
 * aria-expanded and the hidden of the row it names in aria-controls, or of
 * the detail row right after its own row when aria-controls is missing.
 * sidecar.js leaves the click alone, so the row's sidecar does not open.
 *
 * Event (bubbling, on the toggle), detail { open, toggle, detail }:
 *   fh:record-toggle   after the state has changed: fill the detail here
 *                      the first time it opens, if the page loads it late.
 *
 *   import "@rascode/firehorse/records";
 *   import { setExpanded } from "@rascode/firehorse/records";
 */

const TOGGLE = ".fh-dt__expand";
const DETAIL = "fh-dt__detail";

const doc = typeof document === "undefined" ? null : document;

const detailOf = (toggle) => {
  const id = toggle.getAttribute("aria-controls")?.trim().split(/\s+/)[0];
  if (id) return doc.getElementById(id);
  const next = toggle.closest("tr")?.nextElementSibling;
  return next?.classList.contains(DETAIL) ? next : null;
};

/**
 * Opens or closes a toggle's detail row; with no `open`, flips it.
 * Returns the new state.
 */
export function setExpanded(toggle, open = toggle.getAttribute("aria-expanded") !== "true") {
  const detail = detailOf(toggle);
  toggle.setAttribute("aria-expanded", String(open));
  if (detail) detail.hidden = !open;
  toggle.dispatchEvent(new CustomEvent("fh:record-toggle", { bubbles: true, detail: { open, toggle, detail } }));
  return open;
}

if (doc && !globalThis.__fhRecords) {
  globalThis.__fhRecords = true;
  doc.addEventListener("click", (e) => {
    const toggle = e.target.closest?.(TOGGLE);
    if (toggle && !toggle.disabled) setExpanded(toggle);
  });
}
