## Run context (generated at dispatch; do not edit)
- Relay: firehorse-money, dispatch 1
- Worktree and branch: /Users/rascode/Dev/packages/firehorse-money, relay/firehorse-money
- Spec: relay/2026-11-12-firehorse-money.md (platform repo; its text follows)
- Model: claude-sonnet-5-5
- Audit: do not record events; keep a timetable in your report

# Report: relay F3, Firehorse money input and missing helpers

Commit: `d37a876 Fields: money input (FLD) and the helper classes pages were missing (relay F3)` on `relay/firehorse-money`. Not pushed.

## Timetable
- 01:35 read the spec, CONTRIBUTING.md, the Fields sources, sidecar.js and the build script
- 01:36 checked which helper classes exist (stack, button, typography, check, table)
- 01:37 wrote the helper classes, money.css, money.js, money.d.ts, exports, ledger IDs, demos, sections.json, CHANGELOG
- 01:37 first `npm test`: index failed on two mistakes of mine (duplicate HLP, FLD group count); fixed both
- 01:38 re-ran the stages after the index check by hand, `node scripts/agent-docs.mjs`, committed

## Index IDs (index-ledger.json)
- FLD-5 Money input (group, added to the FLD `data-fh-groups`)
- FLD-5.1 One currency
- FLD-5.2 Several currencies
- FLD-5.3 Error
- FLD-5.4 Negative allowed

## Money input
- `src/components/forms/money.css`, imported in `src/firehorse.css` after input-group. Classes: `fh-money` (on the field), `fh-money__currency`, `fh-money__select`.
- `src/js/money.js` and `money.d.ts`: built by the existing `src/js` loop into `dist/`, exported as `@rascode/firehorse/money` and `/money.js`, listed in `sideEffects`, copied to the site by `scripts/site.mjs`.
- Visible input is `inputmode="decimal"`, never `type="number"`. A hidden input `[data-fh-money-value]` takes the visible input's `name` when the script starts, so the form posts minor units (1,250.00 posts `125000`); without the script the visible input keeps its name and posts what was typed.
- Minor units are built by string math, never a float. Decimal places come from the currency (`Intl`), so JPY has none; `data-minor` overrides. Grouping and decimal marks follow `data-locale` or the page language. The caret stays after the same digits when grouping changes the text.
- Negative only with `data-allow-negative`; otherwise the minus is dropped. `-0.00` posts `0`.
- Event `fh:money-change`, detail `{ minor, currency }`.
- Error and help slots reuse `fh-field__error` and `fh-field__hint`; the input group carries the error ring.
- Checked by hand: `parseMinor("1,250.5")` = `125050`, `parseMinor("-3.07", negative)` = `-307`, `formatMinor("125000")` = `1,250.00`, `formatMinor("-7")` = `-0.07`, `formatMinor("500", digits 0)` = `500`.
- Not checked: typing in a real browser (no browser install, per the spec; verify-adaptive skipped). The caret logic and the select-driven reformat are untested in a browser.

## Helper decisions (audit G8)
| Class | Decision | File |
| --- | --- | --- |
| `fh-stack--md` | Real gap. Added, `--fh-space-4`, the same as the default gap. | `src/layout/primitives.css` |
| `fh-button--primary` | Alias. The primary look is the default. Sets the same two properties as `fh-button`; comment says use `fh-button`. | `src/components/actions/button.css` |
| `fh-text-small` | Real gap. `font-size: var(--fh-text-small)`. | `src/base/typography.css` |
| `fh-text-micro` | Real gap. `font-size: var(--fh-text-micro)`. | `src/base/typography.css` |
| `fh-font-mono` | Real gap. `font-family: var(--fh-font-mono)`. | `src/base/typography.css` |
| `fh-h` | Alias of `fh-heading`, joined to its rules; comment says use `fh-heading`. Guess: the audit gives no meaning for `fh-h`, so I took the section heading. | `src/base/typography.css` |
| `fh-h4` | Alias of `fh-subheading` (it uses `--fh-text-h4`); comment says use `fh-subheading`. | `src/base/typography.css` |
| `fh-checkbox` | Alias of `fh-check`, joined to its rule; comment says use `fh-check`. | `src/components/forms/checkbox-radio.css` |
| `fh-table--hover` | Alias. Row hover is already the default on `fh-table`; same hover fill; comment says use plain `fh-table`. | `src/components/data/table.css` |

## Site and docs
- Forms page: demo `c-money` with the four cases; `/money.js` added to the page scripts.
- Foundations page: "Size and alias helpers" demo (no Index ID of its own; the HLP family already exists).
- `sections.json`: new `fields` key with `money` (id, class, input, script, import, posts, options, slots, use).
- `scripts/agent-docs.mjs` helper row gained the four new helpers; `agent/components.md` regenerated (12 `fh-money` mentions).
- `CHANGELOG.md`: two lines under Unreleased. `dist/` is tracked, so the rebuilt CSS and `money.js`/`money.d.ts` are in the commit.

## `npm test` (trimmed)
```
✓ lint: 200 files, 609 custom properties, 0 errors
Firehorse 1.1.0 ... dist/money.d.ts 1.1 KB, dist/money.js 6.4 KB
✓ verify: 64 contrast pairs pass AA in dark and light; build artifacts present
○ verify-adaptive: Chromium not installed, skipped
✓ schema: 8 component types generate, validate and catch drift
✗ index: only the known CAL, KEY and TML "was issued but is gone" / "moved ... isn't live" lines
```
`npm test` stops at the index check, so I ran the remaining stages by hand:
```
✓ audit: findings, suggestions and --fix behave
✓ mcp: 8 tools, CUB-04 → CUB-1.4, all calls returned data
```
The first run also reported `duplicate ID HLP`, `HLP-1.x is not inside its family` and `FLD: data-fh-groups names 4 groups, the family has 5`. Both were mine and are fixed; no HLP or FLD line remains.

## What did not work
- A command combining a python heredoc, sed and node was refused by the shell guard; nothing ran. I redid it as separate steps and with the Write tool.
- BSD `sed` needs `-i ''`; one early call failed on that and was repeated.

## Open for Rascode
- Money input is untested in a browser (caret placement, the currency select, forced-colors). Run it once on /forms/#c-money.
- `fh-h`: the audit gave no meaning. I aliased it to `fh-heading`; change it if pages meant something else.
- No React wrapper for the money input (not in the spec). `PasswordInput` has one, so say if you want `MoneyInput`.
- The script sets the hidden input's `name` at start. A framework that re-renders the field after the script runs needs `initMoney(root)` called again, or it will post the typed text.
- The currency select posts its own name (`price_currency` in the demo) next to the minor units.

# Dispatch 2: React MoneyInput

## Run context
- Relay: firehorse-money, dispatch 2
- Worktree and branch: /Users/rascode/Dev/packages/firehorse-money, relay/firehorse-money
- Model: claude-sonnet-5-5
- Audit: do not record events; keep a timetable in your report

## Timetable
- 01:42 read the spec, `money.js`, `react/src/index.tsx`, the READMEs
- 01:43 moved the caret and text rebuild out of `initMoney` into an exported `formatTyped`; exported `digitsFor`, `marksFor`, `groupDigits`; updated `src/js/money.d.ts`
- 01:43 added `MoneyInput` after `PasswordInput`; README note; CHANGELOG line
- 01:44 `npm test`, node check of the shared functions, commit

## What changed
- `src/js/money.js`: `format` inside `initMoney` now calls `formatTyped(text, caret, opts)`, so the script and React run one code path. Script behavior is unchanged. `dist/money.js` and `dist/money.d.ts` rebuilt.
- `react/src/index.tsx`: `MoneyInput` imports `digitsFor, marksFor, formatTyped, parseMinor, formatMinor` from `@rascode/firehorse/money`. Props: `name`, `currency` or `currencies` (select), `allowNegative`, `defaultValueMinor`, `value`/`onValueChange(minor, currency)`, `minorDigits`, `locale`, `label`, `hint`, `error`, `currencyName`, `onCurrencyChange`, and input props. The hidden input posts minor units under `name`; the visible input has no name. The markup omits `data-fh-money`, so `money.js` never adopts it. A controlled value that matches the parsed text leaves the text alone, so "1." survives the parent's echo.
- Node check of the shared functions: `1250` gives `1,250`; `1250.5` final gives `1,250.50`; `-42.5` final gives `-42.50`; parse gives `-4250`; `125000` formats to `1,250.00`.

## `npm test` (trimmed)
```
✓ lint: 200 files, 609 custom properties, 0 errors
✓ verify: 64 contrast pairs pass AA in dark and light
○ verify-adaptive: Chromium not installed, skipped
✓ schema: 8 component types generate, validate and catch drift
✗ index: only the known CAL, KEY and TML lines
✓ audit (run by hand): findings, suggestions and --fix behave
✓ mcp (run by hand): 8 tools, all calls returned data
```

## What did not work
- The React package has no `node_modules` here and installing was out of scope, so `MoneyInput` is **not type-checked and not rendered**. Only the shared functions were run. Run `npm i` in `react/` and `npm run typecheck` before release.
- Chained shell commands and a heredoc append were refused by the guard; I used the Edit and Write tools instead.
- Scratch files I could not remove (`rm` needs approval), untracked and not in the commit, please delete: `react/README.md.add` and `relay-money-react-check.mjs`.

## Open for Rascode
- `@rascode/firehorse` is an optional peer dependency, but `MoneyInput` imports `@rascode/firehorse/money`, so React apps now need it installed. Make the peer required, or say if you want the helpers copied into the React package.
- `money.js` runs its auto-init on import. Harmless here (it only adopts `[data-fh-money]`), but it is a side effect inside a React bundle.
- `peerDependencies` says `>=1.1.0`; the new exports ship with the next core release, so raise it then.

REPORT COMPLETE
