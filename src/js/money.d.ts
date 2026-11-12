export interface MoneyChangeDetail {
  /** Whole minor units as a digit string, with a leading "-" when negative. "" when the field is empty. */
  minor: string;
  /** The ISO currency code now selected. */
  currency: string;
}

export interface MoneyFormat {
  /** Decimal places (default 2). */
  digits?: number;
  /** Grouping mark (default ","). */
  group?: string;
  /** Decimal mark (default "."). */
  decimal?: string;
}

/** Wires every [data-fh-money] field under root (default: the document). Safe to call twice. */
export function initMoney(root?: ParentNode | Element | null): void;
/** Typed text to minor units as a digit string ("" when there is no number). */
export function parseMinor(text: string, options?: { digits?: number; decimal?: string; negative?: boolean }): string;
/** Minor units (digit string) to display text, e.g. "125000" to "1,250.00". */
export function formatMinor(minor: string | null | undefined, options?: MoneyFormat): string;

declare global {
  interface HTMLElementEventMap {
    "fh:money-change": CustomEvent<MoneyChangeDetail>;
  }
}
