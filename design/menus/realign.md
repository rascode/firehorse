# Firehorse: menus realigned to the new look

Work log **fh-menus** in Helm (Actions › Relays, marked Direct). Opened 2026-11-14 at Rascode's request: dropdown menus and context menus both matter, and both need to come into the emerging Firehorse look. This takes the Dropdown menu out of the uniform-values pass (work log fh-uniform-values, record 492), where it was next, and adds a context menu, which Firehorse doesn't have yet.

## The standard

The new look as the Tile panel (MEG-3.1) and the Tile menu (DRP-2.1) set it, and as Mega panel now follows it:
- a frost (88% raised surface, blurred) with the etched frame through `--fh-card-border-style` and the small radius
- mono caps in one recipe: a bold title at full ink, quiet labels (regular, subtle, no dot), caps tracking, snug leading
- tile-scale spacing: `--fh-inset-control` top and bottom, `--fh-inset-tile` at the sides, `--fh-gap-related` between parts
- soft rules (etch-soft) between groups, the full etch on the frame and the foot
- arrows and icons from one family value, hover nudges the way the arrow points
- every value a public knob with a token default (`--fh-menu-*`), set once on the base class; no raw lengths, no multipliers; `--lg` (or `--sm`) changes only the text size
- the same rules as the uniform-values pass (one family at a time, measure, ask, build, check, commit, log)

## Where things stand

| Part | Today | Gap |
|---|---|---|
| DRP-1.1 Default menu (`.fh-menu`) | solid border, `border-strong`, opaque surface mixed with ink, sans small items, a raw `0.25rem` drop, `13rem` / `22rem` sizes, check `0.85rem` | the old look: no frost, no etch, labels on their own recipe (micro, wider tracking) |
| DRP-2.1 Tile menu (`.fh-menu--tiles`) | the new look, but its etch is a raw `dashed`, raw `45rem` / `44rem` / `2rem` sizes | small fixes |
| Context menu | none | new: a menu opened at the pointer on right-click or long press, with the Default menu's items (icons, shortcuts, checks, danger, labels, separators, a submenu if wanted) |

Where they show up: the navigation page demos (DRP-1.1, DRP-2.1), the site's agent picker (`site/site-features.js`, Tile menu), the menu entries in the site header, and Helm (row menus, the command menu, table actions) through the pinned Firehorse build.

## Runs

One part per run, stopping for Rascode's go after each:

1. **Dropdown menu, Default (DRP-1.1)**: measure every value against the Tile menu; write up what disagrees; ask the design calls (item size and weight, label look, check and shortcut style, the hover wash, whether separators are soft rules); rebuild `.fh-menu` on the standard; fix the Tile menu's raw values; site and Helm uses swapped.
2. **Context menu (new)**: decide its home (a new group in Dropdown menu, DRP-3, recommended, or its own family), live and free; a small script in `src/js` that opens a menu at the pointer (`contextmenu`, long press on touch, Shift+F10 and the menu key), keeps it inside the window, closes on Escape, outside click and scroll, and moves focus with the arrow keys; the same items and recipe as the Default menu; a demo on the navigation page; React wrapper if `firehorse-react` exposes menus.
3. **Integrate**: push, move Helm's pin, and swap Helm's own menus to the new classes where it restyles them.

Each run: measure (Playwright, computed values, every variant opened by hash), findings as a short table with the cause in one line, the real design calls with a recommendation, build, gen-index, agent-docs, CHANGELOG under Unreleased, `npm run build`, `npm run site`, the full-build hash in `test/builds.test.mjs` with a note, the site swap (screenshot first), the checks (lint, site, release, builds, verify, lint-site, specimen, the language audit: 370 now, must not go up), a lineup screenshot, a commit in the Firehorse main checkout, events and commit links on the log, a report with a table, clickable links and numbered next steps.

Close the log (`finish --id <id> --status closed`) only when Rascode says the menus are done.
