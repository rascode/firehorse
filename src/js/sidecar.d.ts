export interface SidecarEventDetail {
  /** The record id from the opener's data-sidecar attribute (null on close if none was set). */
  id: string | null;
  /** The element that opened the sidecar; focus returns to it on close. */
  opener: HTMLElement | null;
  /** The sidecar dialog, or null when the page has none. */
  sidecar: HTMLDialogElement | null;
  /** The record the sidecar showed before this open (fh:sidecar-open only). */
  previous: string | null;
}

export interface SidecarBeforeCloseDetail {
  /** The record the sidecar is showing, the one being left. */
  id: string | null;
  /** The record a swap goes to; null when the sidecar is closing. */
  next: string | null;
  /** Why the sidecar is leaving its record. */
  reason: "close" | "swap";
  /** The element that opened the sidecar. */
  opener: HTMLElement | null;
  sidecar: HTMLDialogElement;
}

/** Sets data-record on the sidecar, fires fh:sidecar-open, opens it as a modal dialog. Swapping a dirty sidecar to another record fires fh:sidecar-before-close; if cancelled, the sidecar is returned unchanged. */
export function openSidecar(id: string, opener?: HTMLElement | null): HTMLDialogElement | null;
/** Closes the open sidecar (or the one given); focus returns to its opener. A dirty sidecar fires fh:sidecar-before-close first and stays open if it is cancelled. */
export function closeSidecar(sidecar?: HTMLDialogElement | null): void;

declare global {
  interface DocumentEventMap {
    "fh:sidecar-open": CustomEvent<SidecarEventDetail>;
    "fh:sidecar-close": CustomEvent<SidecarEventDetail>;
    /** Cancelable. Fires while the sidecar has unsaved changes (data-dirty), before it closes or swaps record. */
    "fh:sidecar-before-close": CustomEvent<SidecarBeforeCloseDetail>;
  }
}
