/*!
 * Firehorse money input — dist/money.js · MIT
 * ---------------------------------------------------------------
 * Optional. Formats a money field as the person types and posts whole
 * minor units (cents) from a hidden input:
 *
 *   <div class="fh-field fh-money" data-fh-money data-currency="USD">
 *     <label for="amount">Amount</label>
 *     <div class="fh-input-group">
 *       <span class="fh-money__currency">USD</span>
 *       <input class="fh-input" id="amount" name="amount" inputmode="decimal" autocomplete="off">
 *       <input type="hidden" data-fh-money-value>
 *     </div>
 *   </div>
 *
 * On start the visible input gives its name to the hidden one, so the form
 * posts minor units ("125000" for 1,250.00). Without the script the visible
 * input keeps its name and posts what was typed.
 *
 * Options, as attributes on the field:
 *   data-currency="USD"     the ISO code; a select.fh-money__select in the
 *                           field overrides it and reformats on change
 *   data-minor="2"          decimal places; default from the currency
 *   data-locale="en-US"     grouping and decimal marks; default the page language
 *   data-allow-negative     lets the value start with "-"
 *
 * Event (bubbling, on the field): fh:money-change, detail { minor, currency }
 * where minor is a string of digits ("" when empty), kept as a string so no
 * amount passes through a float.
 *
 *   import "@rascode/firehorse/money";
 *   import { initMoney, parseMinor, formatMinor } from "@rascode/firehorse/money";
 */

const FIELD = "[data-fh-money]";
const doc = typeof document === "undefined" ? null : document;

const digitsFor = (currency, locale) => {
  try {
    return new Intl.NumberFormat(locale, { style: "currency", currency }).resolvedOptions().maximumFractionDigits;
  } catch {
    return 2;
  }
};

const marksFor = (locale) => {
  const parts = new Intl.NumberFormat(locale).formatToParts(11111.1);
  return {
    group: parts.find((p) => p.type === "group")?.value ?? ",",
    decimal: parts.find((p) => p.type === "decimal")?.value ?? ".",
  };
};

const groupDigits = (int, group) => int.replace(/\B(?=(\d{3})+(?!\d))/g, group);

/** Typed text to minor units as a digit string ("" when there is no number). */
export function parseMinor(text, { digits = 2, decimal = ".", negative = false } = {}) {
  const neg = negative && /^\s*-/.test(text);
  const [intPart = "", fracPart = ""] = text.split(decimal);
  const int = intPart.replace(/\D/g, "");
  const frac = fracPart.replace(/\D/g, "").slice(0, digits);
  if (!int && !frac) return "";
  const minor = (int + frac.padEnd(digits, "0")).replace(/^0+(?=\d)/, "");
  return neg && /[1-9]/.test(minor) ? `-${minor}` : minor;
}

/** Minor units (digit string) to display text, e.g. "125000" to "1,250.00". */
export function formatMinor(minor, { digits = 2, group = ",", decimal = "." } = {}) {
  if (minor === "" || minor == null) return "";
  const neg = String(minor).startsWith("-");
  const raw = String(minor).replace(/\D/g, "").padStart(digits + 1, "0");
  const int = raw.slice(0, raw.length - digits);
  const frac = raw.slice(raw.length - digits);
  return `${neg ? "-" : ""}${groupDigits(int, group)}${digits ? decimal + frac : ""}`;
}

/** Wires every [data-fh-money] field under root. Safe to call twice. */
export function initMoney(root = doc) {
  if (!root) return;
  const fields = root.matches?.(FIELD) ? [root] : [...root.querySelectorAll(FIELD)];
  for (const field of fields) {
    if (field.dataset.fhMoneyReady != null) continue;
    const input = field.querySelector("input:not([type=hidden])");
    const hidden = field.querySelector("input[data-fh-money-value]");
    if (!input || !hidden) continue;
    field.dataset.fhMoneyReady = "";

    const select = field.querySelector("select.fh-money__select");
    const locale = field.dataset.locale || doc?.documentElement.lang || undefined;
    const { group, decimal } = marksFor(locale);
    const negative = field.hasAttribute("data-allow-negative");
    const currency = () => select?.value || field.dataset.currency || "USD";
    const digits = () => (field.dataset.minor != null ? Number(field.dataset.minor) : digitsFor(currency(), locale));

    // The hidden input takes over the name; the visible one stops posting.
    if (input.name) {
      hidden.name = input.name;
      input.removeAttribute("name");
    }

    const publish = (minor) => {
      hidden.value = minor;
      field.dispatchEvent(new CustomEvent("fh:money-change", { bubbles: true, detail: { minor, currency: currency() } }));
    };

    // Rebuild the text from what was typed; keep the caret after the same
    // number of digits and decimal marks it was after before.
    const format = (final) => {
      const d = digits();
      const text = input.value;
      const caret = input.selectionStart ?? text.length;
      const sig = (s) => s.replace(/[^\d]/g, "").length + (s.includes(decimal) ? 1 : 0);
      const before = sig(text.slice(0, caret));

      const neg = negative && /^\s*-/.test(text);
      const hasDecimal = d > 0 && text.includes(decimal);
      const [intPart = "", fracPart = ""] = text.split(decimal);
      const int = intPart.replace(/\D/g, "").replace(/^0+(?=\d)/, "");
      const frac = fracPart.replace(/\D/g, "").slice(0, d);

      let out = "";
      if (int || frac || hasDecimal) {
        out = `${neg ? "-" : ""}${groupDigits(int || "0", group)}`;
        if (final && d) out += decimal + frac.padEnd(d, "0");
        else if (hasDecimal) out += decimal + frac;
      } else if (neg) {
        out = "-";
      }
      input.value = out;

      if (!final && doc?.activeElement === input) {
        let seen = 0;
        let pos = 0;
        while (pos < out.length && seen < before) {
          if (/\d/.test(out[pos]) || out[pos] === decimal) seen++;
          pos++;
        }
        input.setSelectionRange(pos, pos);
      }
      publish(parseMinor(out, { digits: d, decimal, negative }));
    };

    input.addEventListener("input", () => format(false));
    input.addEventListener("blur", () => {
      if (input.value && input.value !== "-") format(true);
    });
    select?.addEventListener("change", () => {
      if (input.value) format(true);
      else publish("");
    });

    if (input.value) format(true);
    else hidden.value = "";
  }
}

if (doc) {
  if (doc.readyState === "loading") doc.addEventListener("DOMContentLoaded", () => initMoney(doc), { once: true });
  else initMoney(doc);
}
