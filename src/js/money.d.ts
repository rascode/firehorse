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

/** Decimal places for a currency in a locale (2 when unknown). */
export function digitsFor(currency: string, locale?: string): number;
/** Grouping and decimal marks for a locale. */
export function marksFor(locale?: string): { group: string; decimal: string };
/** Inserts the grouping mark every three digits of a digit string. */
export function groupDigits(int: string, group: string): string;
/** Rebuilds typed text as money text; returns it with the caret position that keeps the caret after the same digits. */
export function formatTyped(
  text: string,
  caret?: number,
  options?: MoneyFormat & { negative?: boolean; final?: boolean },
): { text: string; caret: number };
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
