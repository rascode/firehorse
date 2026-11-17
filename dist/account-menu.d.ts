export type AccountPanelDetail = {
  /** The shown panel's name (its data-fh-panel); "main" is the list. */
  panel: string;
  /** The row that opened the panel, or that it returned to; null when closing the menu. */
  row: Element | null;
};

export type AccountPanelOptions = {
  /** The row the panel opened from; Back returns focus to it. */
  row?: Element | null;
  /** Move focus to the panel's first item (or back to the row). Default true. */
  focus?: boolean;
  /** No slide and no height change. Default false. */
  instant?: boolean;
};

/**
 * Sets up one .fh-account-menu once: the panel states (data-state, inert, aria-expanded), the keys
 * (Enter and → open a panel; Esc and ← go back; ↑ ↓ Home End move) and the reset on close. Returns the menu.
 */
export function initAccountMenu<T extends Element | null | undefined>(menu: T): T;

/** Shows the named panel ("main" for the list). Returns false when the menu has no such panel. */
export function showAccountPanel(menu: Element, name: string, options?: AccountPanelOptions): boolean;

/** The name of the shown panel ("main" for the list). */
export function currentAccountPanel(menu: Element): string;

declare global {
  interface HTMLElementEventMap {
    "fh:account-panel": CustomEvent<AccountPanelDetail>;
  }
}
