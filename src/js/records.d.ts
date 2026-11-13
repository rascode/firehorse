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

declare global {
  interface DocumentEventMap {
    "fh:record-toggle": CustomEvent<RecordToggleDetail>;
  }
}
