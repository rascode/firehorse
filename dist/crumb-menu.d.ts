/** A row a host answers a `fh:crumb-load` with. `mark` is an element, an image URL or short text. */
export interface CrumbRow {
  name: string;
  href?: string;
  meta?: string;
  /** An element (used as is), or a logo URL or initial shown in a solid cube on `tone`; default the name's initial. */
  mark?: Node | string;
  tone?: string;
  /** A Firehorse icon name: the cube shows the icon (an area row) instead of an initial or logo. */
  icon?: string;
  group?: string;
  current?: boolean;
  /** 1 sets the row in under the one before it (a subpage under its area). */
  depth?: 0 | 1;
  id?: string | number;
}

/** The detail of `fh:crumb-load`, dispatched on the crumb when a menu with data-fh-source opens or its filter changes. */
export interface CrumbLoadDetail {
  source: string;
  parent: string | null;
  q: string;
  menu: HTMLElement;
  respond(rows: CrumbRow[]): void;
  fail(): void;
}

/** The detail of `fh:crumb-select`, cancelable: preventDefault to route in the page instead of following the link. */
export interface CrumbSelectDetail {
  row: HTMLElement;
  href: string | null;
}

declare global {
  interface DocumentEventMap {
    "fh:crumb-load": CustomEvent<CrumbLoadDetail>;
    "fh:crumb-select": CustomEvent<CrumbSelectDetail>;
  }
}

/** Opens a crumb's menu. focus moves focus to its filter (click, Enter, ↓); hover leaves focus alone. */
export function openCrumb(crumb: Element, options?: { focus?: boolean; how?: "hover" | "click" | "key" }): void;

/** Closes a crumb's menu. restoreFocus returns focus to the crumb's button (Escape). */
export function closeCrumb(crumb: Element, options?: { restoreFocus?: boolean }): void;

/** Writes rows into a menu's list, with group headings. Replaces what was there. */
export function setCrumbRows(menu: Element, rows: CrumbRow[]): void;

/** Readies the crumb menus under a root (popover, aria-controls, aria-expanded). Runs once on load. */
export function initCrumbMenu(root?: ParentNode): void;
