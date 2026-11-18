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
 *
 * Tree table (fh-dt--tree, DTB-2.5): a records table with role="treegrid"
 * whose rows sit flat in one tbody at any depth. Each row says its depth
 * (aria-level) and, with children, its state (aria-expanded on the row);
 * the rows under a closed row carry hidden. The toggle in the first cell
 * (tabindex="-1", aria-hidden) flips the row. Rows take the focus, one at a
 * time (tabindex 0 on the current, -1 on the rest), with the keys of the
 * treegrid pattern: Up and Down, Home and End, Right opens or goes to the
 * first child, Left closes or goes to the parent, Enter opens the row's
 * record (a click on its first data-sidecar link). The row keeps
 * data-sidecar off itself: sidecar.js sets aria-expanded on its opener.
 *
 *   import { setRowExpanded } from "@rascode/firehorse/records";
 *
 * Event (bubbling, on the row), detail { open, row }:
 *   fh:tree-toggle     after a row opened or closed.
 */

const TOGGLE = ".fh-dt__expand";
const DETAIL = "fh-dt__detail";
const TREE = '[role="treegrid"]';
const DEEPEST = 8; // records.css indents aria-level 1 to 8 by itself; deeper rows get --fh-dt-level here

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

const levelOf = (row) => Number(row.getAttribute("aria-level")) || 1;
const rowsOf = (row) => [...row.closest(TREE).querySelectorAll(':scope > tbody > tr[role="row"]')];
const visible = (row) => rowsOf(row).filter((r) => !r.hidden);

/**
 * Opens or closes a tree table row; with no `open`, flips it. The rows under
 * it show or hide, and a closed row deeper down keeps its own rows hidden.
 * Returns the new state.
 */
export function setRowExpanded(row, open = row.getAttribute("aria-expanded") !== "true") {
  if (!row.hasAttribute("aria-expanded")) return false;
  row.setAttribute("aria-expanded", String(open));
  const level = levelOf(row);
  let cut = Infinity; // the level of the closed row whose rows stay hidden
  for (let r = row.nextElementSibling; r && levelOf(r) > level; r = r.nextElementSibling) {
    const lv = levelOf(r);
    if (lv <= cut) cut = Infinity;
    r.hidden = !open || lv > cut;
    if (open && !r.hidden && r.getAttribute("aria-expanded") === "false") cut = lv;
  }
  row.dispatchEvent(new CustomEvent("fh:tree-toggle", { bubbles: true, detail: { open, row } }));
  return open;
}

const focusRow = (from, to) => {
  if (!to || to === from) return;
  from.tabIndex = -1;
  to.tabIndex = 0;
  to.focus();
};

const parentOf = (row) => {
  const level = levelOf(row);
  for (let r = row.previousElementSibling; r; r = r.previousElementSibling) if (levelOf(r) < level) return r;
  return null;
};

function onTreeKey(e) {
  const row = e.target;
  if (!(row instanceof HTMLElement) || row.getAttribute("role") !== "row" || !row.closest(TREE)) return;
  const rows = visible(row), i = rows.indexOf(row), open = row.getAttribute("aria-expanded");
  const go = {
    ArrowDown: () => focusRow(row, rows[i + 1]),
    ArrowUp: () => focusRow(row, rows[i - 1]),
    Home: () => focusRow(row, rows[0]),
    End: () => focusRow(row, rows[rows.length - 1]),
    ArrowRight: () => (open === "false" ? setRowExpanded(row, true) : open === "true" ? focusRow(row, rows[i + 1]) : null),
    ArrowLeft: () => (open === "true" ? setRowExpanded(row, false) : focusRow(row, parentOf(row))),
    Enter: () => row.querySelector("[data-sidecar], a[href]")?.click(),
  }[row.matches(":dir(rtl)") ? { ArrowRight: "ArrowLeft", ArrowLeft: "ArrowRight" }[e.key] ?? e.key : e.key];
  if (!go) return;
  e.preventDefault();
  go();
}

/** Sets the indent knob on rows deeper than records.css reaches, once per tree. */
const deepen = (root) => {
  for (const r of root.querySelectorAll(`${TREE} tr[aria-level]`)) if (levelOf(r) > DEEPEST) r.style.setProperty("--fh-dt-level", String(levelOf(r)));
};

if (doc && !globalThis.__fhRecords) {
  globalThis.__fhRecords = true;
  doc.addEventListener("click", (e) => {
    const toggle = e.target.closest?.(TOGGLE);
    if (!toggle || toggle.disabled) return;
    const row = toggle.closest(`${TREE} tr[role="row"]`);
    if (row) setRowExpanded(row);
    else setExpanded(toggle);
  });
  doc.addEventListener("keydown", onTreeKey);
  if (doc.readyState === "loading") doc.addEventListener("DOMContentLoaded", () => deepen(doc));
  else deepen(doc);
}
