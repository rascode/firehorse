export interface RecordToggleDetail {
  open: boolean;
  toggle: Element;
  /** The detail row the toggle names in aria-controls, else the row after its own; null when there is none. */
  detail: HTMLElement | null;
}

/**
 * Opens or closes a records row's detail row (.fh-dt__detail) and sets the
 * toggle's aria-expanded; with no `open`, flips it. Fires fh:record-toggle on
 * the toggle. Returns the new state.
 */
export function setExpanded(toggle: Element, open?: boolean): boolean;

export interface TreeToggleDetail {
  open: boolean;
  /** The tree table row (tr[role="row"] in a role="treegrid" table) that opened or closed. */
  row: Element;
}

/**
 * Opens or closes a tree table row (fh-dt--tree, DTB-2.5): sets the row's
 * aria-expanded and the hidden of the rows under it, keeping a closed row's
 * own rows hidden; with no `open`, flips it. Fires fh:tree-toggle on the row.
 * Returns the new state (false for a row with no children).
 */
export function setRowExpanded(row: Element, open?: boolean): boolean;

declare global {
  interface DocumentEventMap {
    "fh:record-toggle": CustomEvent<RecordToggleDetail>;
    "fh:tree-toggle": CustomEvent<TreeToggleDetail>;
  }
}
