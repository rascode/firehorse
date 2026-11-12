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

/** Sets data-record on the sidecar, fires fh:sidecar-open, opens it as a modal dialog. */
export function openSidecar(id: string, opener?: HTMLElement | null): HTMLDialogElement | null;
/** Closes the open sidecar (or the one given); focus returns to its opener. */
export function closeSidecar(sidecar?: HTMLDialogElement | null): void;

declare global {
  interface DocumentEventMap {
    "fh:sidecar-open": CustomEvent<SidecarEventDetail>;
    "fh:sidecar-close": CustomEvent<SidecarEventDetail>;
  }
}
