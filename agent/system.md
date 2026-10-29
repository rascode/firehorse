# Firehorse — agent contract

> Firehorse is a dark-first, container-native CSS design system (v1.0, MIT).
> Read this file before writing any markup or CSS with it. Component markup
> lives in [`components.md`](components.md). Every token is in
> [`tokens.json`](https://firehorse.rascode.dev/tokens.json).

kind: system-index · version: 1.0.0 · package: `@rascode/firehorse`
home: https://firehorse.rascode.dev · source: https://github.com/rascode/firehorse

## Install

```html
<link rel="stylesheet" href="https://firehorse.rascode.dev/firehorse.css">
<!-- optional: the built-in themes (Mustang, Friesian, Akhal-Teke), after the core -->
<link rel="stylesheet" href="https://firehorse.rascode.dev/themes.css">
<!-- optional brand layer -->
<link rel="stylesheet" href="https://firehorse.rascode.dev/themes/rascode.css">
```

```js
import "@rascode/firehorse";              // dist/firehorse.css (modern browsers)
import "@rascode/firehorse/compat.css";   // lowers nesting + light-dark() for 2022–23 browsers
import "@rascode/firehorse/themes.css";            // every built-in theme
import "@rascode/firehorse/themes/friesian.css";  // or just the one you use
import { tokens } from "@rascode/firehorse/tokens";
```

Through the Rascode design library (installable from GitHub):

```js
// npm i github:rascode/design
import "@rascode/design-system/firehorse";                    // CSS + tokens
import "@rascode/design-system/firehorse/themes/rascode.css";
```

Browser floor for the default build: Chrome/Edge 123, Firefox 128, Safari 17.5.

## Mental model

1. **Frame → slot → component.** Pages, sections, headers and footers are frames
   (`.fh-page`, `.fh-section`, `.fh-frame`): a grid with named `full` and
   `content` column lines. Every direct child of a frame is a *slot* that sits in
   `content` and is a query container. Components respond to the slot's width.
2. **Tokens in three tiers.** Primitives (`--fh-gray-950`) → semantic roles
   (`--fh-color-canvas`) → component knobs (`--fh-button-bg`). Components only
   read semantic tokens.
3. **Tones carry category color.** Put `data-tone="sky|teal|lime|amber|orange|rose|fuchsia|violet|accent|neutral"`
   on any element. Everything inside that reads `var(--fh-tone)` follows.
4. **Schemes come from `light-dark()`.** Default is dark.
   `data-fh-scheme="light|dark|auto"` flips any subtree.
5. **Layers.** `fh.reset < fh.tokens < fh.base < fh.layout < fh.components < fh.patterns < fh.themes < fh.utilities`.
   Unlayered author CSS beats all of them.

## Priority order when making a decision

1. Accessibility and keyboard behavior
2. An existing `fh-*` component or pattern (see components.md)
3. Layout primitives (`fh-stack`, `fh-cluster`, `fh-grid`, `fh-split`)
4. Semantic tokens
5. New CSS (last resort, and only with tokens)

## Page skeleton

```html
<body>
  <a class="fh-skip" href="#main">Skip to content</a>
  <div class="fh-page">
    <header class="fh-header fh-frame">…</header>
    <main id="main" class="fh-main">
      <section class="fh-section fh-section--hero">…</section>
      <section class="fh-section fh-section--ruled">…</section>
    </main>
    <footer class="fh-footer fh-frame">…</footer>
  </div>
</body>
```

Put inline content inside a slot wrapper (`fh-stack`, `fh-hero`, `fh-grid`),
not directly as a section's child: direct children of a frame stretch to the
full content width.

Vertical rhythm comes from `fh-stack` (a flex column with `gap`), never from
margins on components: components reset their own margins. A lead eyebrow
pill or chip followed by content goes in an `fh-stack`, so side-by-side panes
(e.g. two `fh-etched-split__pane`s) put their first line of content at the
same height.

## MUST

1. **fh-classes-only** — Style with `fh-*` classes and `data-*` attributes from
   components.md. Do not invent component class names.
2. **tokens-only** — Colors, spacing, radius, type and motion come from
   `--fh-*` tokens. Never write a hex, `rgb()` or a raw pixel spacing value in
   product CSS.
3. **container-not-viewport** — Never use `@media (min-width…)` or
   `(max-width…)` for layout. Use the frame, the primitives, and `@container`.
   Viewport media queries are only for `prefers-*`, `pointer`, `forced-colors`
   and `print`.
4. **one-accent** — At most one filled accent (`fh-button--accent`, ember) per
   view. Primary CTAs are `fh-button` (ink fill, 3px radius, mono caps).
5. **etch-not-boxes** — Separate content with dashed etched rules
   (`fh-grid--ruled fh-grid--etched`, `fh-section--ruled`, `fh-etched-split`),
   not filled gray panels.
6. **semantic-html** — Use `<button>` for actions and `<a>` for navigation;
   `<details>` for disclosure; `<dialog>` for modals; `[popover]` for menus.
7. **labels** — Every input has a `<label for>`. Mark required inputs with the
   `required` attribute; the "Required" chip is generated from it.
8. **focus** — Never remove a focus outline without a visible replacement.
9. **motion** — New animation goes inside
   `@media (prefers-reduced-motion: no-preference)`. Content must be visible
   with animation off (use `fh-reveal`, which never hides content).
10. **sentence case** — Body and headings in sentence case. Mono uppercase is for
    chrome only: labels, eyebrows, CTAs, nav. No emoji in UI chrome.
11. **numbers line up** — Prices, stats and table figures use tabular numerals
    (`fh-price`, `fh-stats`, `.fh-num`, `.fh-tabular`).

## NEVER

- `!important` in product CSS (layers make it unnecessary)
- `width: 100vw` / `margin-left: -50vw` breakouts (use `.fh-bleed`)
- Pills as the primary CTA; ember on every button
- Light or cream marketing themes unless the brand theme asks for one
- Purple gradients, glassmorphism, glows, heavy drop shadows on cards
- Content that is invisible until JavaScript runs
- Placeholder text as the only label
- Hard-coded category colors (use `data-tone`)

## The Firehorse Index (IDs)

Every component family and variant has a stable ID: three letters for the
family (`CHP` chips, `TIR` pricing tiers, `DTB` datatable), plus a two-digit
number for a variant (`CHP-03` filled chip with icon). When a person names an
ID, look it up in [index.md](index.md) (or `index.json`) and use that markup
exactly: same classes and structure, new content. Never invent an ID; if one
isn't listed, say so. When you describe what you built, cite the IDs you used.
KC (the Firehorse guide, [kc.md](kc.md)) turns plain descriptions into IDs.

## Floating bar (dock)

Put a `.fh-dock.fh-frame` right after the hero (inside `main`). It pins under
the header and engages on its own where `scroll-state` queries exist; load the
optional enhancer (`firehorse.js`) for every other browser, for the header CTA
hand-off, and for `data-follow` (the dock takes the tone of the section in
view). Give each `section` a `data-tone` so the dock has something to follow.
Cubes (`.fh-cubes > li > .fh-cube`) walk the tone wheel by 28° per item; chips
(`.fh-chips > .fh-chip`) jump to sections and get `aria-current` from the
enhancer. Use one dock per page. Don't repeat the dock's section chips in the
header: the header carries site destinations, the dock carries the page.
For the dock title use a segmented eyebrow pill whose parts roll with the
section in view (live dot, label, then "NN / total"):
`<p class="fh-eyebrow-pill fh-dock__heading" data-tone="accent"><span class="fh-dot fh-dot--live"></span><span class="fh-eyebrow-pill__seg"><span class="fh-rollover" data-fh-rollover="sections" data-fh-default="Name"><span class="fh-rollover__item">Name</span></span></span><span class="fh-eyebrow-pill__seg"><strong><span class="fh-rollover" data-fh-rollover="sections" data-fh-part="index" data-fh-default="v1" aria-hidden="true"><span class="fh-rollover__item">v1</span></span></strong></span></p>`
and give each section `data-fh-label` (and `data-fh-index` for its number).
The pill and its dot take the section's tone.
Number section chips with `fh-chip--indexed` + `<b class="fh-chip__index">NN</b>`
using the section's real number.

## Motion

Motion is a layer you opt into. All of it sits under
`prefers-reduced-motion: no-preference` and uses `--fh-ease-out`,
`--fh-ease-in-out` and the `--fh-duration-*` tokens.
- Flip: wrap link and button labels in `<span class="fh-roll">`; the label rolls on
  hover/focus. Use it on every menu link, nav link, chip and button label.
- Rollover heading: `.fh-rollover` + `.fh-rollover__item`; forward rolls up, back
  rolls down. `Firehorse.rollover(el, html, "up"|"down")`, or
  `data-fh-rollover="sections"` to follow `[data-fh-label]` sections.
- Reveal: `fh-reveal` (+ `--fade|--scale|--left|--right|--blur`), or `fh-reveal-children`.
  Scroll-driven (`animation-timeline: view()`), no script. Use on a few key
  elements, not every card: on long pages each one costs a frame of work.
- Parallax `fh-parallax` (`--fh-depth`), page progress `fh-scroll-progress`.
- The enhancer pauses time-based loops in off-screen sections and handles in-page
  links (smooth for short jumps, cut-and-glide for long ones, focus moves to the
  target). Never move layout in an animation; never animate width/height.

## Optional enhancer

`<script type="module" src="…/firehorse.js">` (or `import "@rascode/firehorse/js"`)
adds: dock engage + header hand-off, tone follow, scroll spy for chips / `.fh-toc`
/ `[data-spy]`, carousel dots and counter where `::scroll-marker` is missing,
dropzone drag state, in-page link scrolling, rollover headings, off-screen
animation pausing, and opt-in wheel smoothing (`<html data-fh-smooth>`; avoid it on
long pages).
Never make content depend on it.

## Themes (decide once)

A theme is every design decision in one attribute: type, color in light and
dark, radius, density, and the avatar, card, card-media, button, chip and table
styles. Put it on `<html>`:

```html
<html data-fh-theme="friesian">
```

Built in: `mustang` (compact, square avatars, solid cards, zebra tables, slate
and denim), `friesian` (monochrome, square corners, outline cards, underline
chips, spacious, serif display), `akhal-teke` (soft corners, tonal cards, flat
pill buttons, squircle avatars, sand and gold). No attribute = the Firehorse
base; `data-fh-theme="firehorse"` restores the base inside a themed page.
`data-fh-scheme` still picks light or dark inside any theme.

A theme picker is a native select with `data-fh-theme-select`; the enhancer
switches the theme and remembers it (`localStorage["fh-theme"]`):

```html
<select class="fh-select" data-fh-theme-select aria-label="Theme">
  <option value="">Firehorse</option><option value="mustang">Mustang</option>
  <option value="friesian">Friesian</option><option value="akhal-teke">Akhal-Teke</option>
</select>
```

To make a theme, write `themes/<name>.json` (see `src/themes/_template.json`) with
`config`, `color` (`neutral` hue/chroma, `accent`/`accentHover`/`accentText`/`onAccent`
as `{ light, dark }`), `font` and `tokens`, then `npx firehorse-theme themes/<name>.json`.
It writes `themes/<name>.css` and fails if text or accent drops below AA. Never
hand-edit a generated theme CSS file.

The `data-fh-*` presets still work as local overrides of the theme on one
section: `<section data-fh-card="solid">`. Use them sparingly; prefer a theme.

## Theming a brand (hand-written layer)

For a brand layer on top of a theme (fonts, a token or two), create
`themes/<brand>.css`, load it after the core and themes, and only re-point tokens.
Every color a theme sets must be a `light-dark(<on light>, <on dark>)` pair, so
the brand works in both schemes:

```css
@layer fh.themes {
  [data-fh-theme="brand"] {
    --fh-font-sans: "Brand Sans", system-ui, sans-serif;
    --fh-color-accent: light-dark(#1d4ed8, #60a5fa);
    --fh-button-radius: var(--fh-radius-md);
  }
}
```

Public component knobs: `--fh-button-bg`, `--fh-button-fg`, `--fh-button-border`,
`--fh-button-radius`, `--fh-button-font`, `--fh-card-radius`, `--fh-dialog-size`,
`--fh-dot-size`, `--fh-gap`, `--fh-grid-min`, `--fh-grid-max-cols`, `--fh-split`,
`--fh-align`, `--fh-justify`, `--fh-measure-max`, `--fh-ratio`, `--fh-reel-item`,
`--fh-action-color`.

## Structured data (Schema.org)

Read `agent/schema.md`. In short: put `data-schema` on components that hold
real content (`breadcrumb`, `faq`, `offers`, `service`, `review`, `howto`,
`person`, `article`), hand-write one `Organization` with an `@id` in
`<head>`, then run `npx firehorse-schema <file.html> --write`. Never mark
demo or sample content, never invent reviews or ratings, and never
hand-edit the generated `#fh-schema` block.

## Surfaces and adaptive color

Text and tone tokens are computed from `--fh-color-bg`. To paint a section,
set the color and add `data-fh-surface`; never hand-pick text colors for it:
`<section data-fh-surface style="--fh-color-bg: #f3ede2">`. Presets:
`data-fh-surface="raised|sunken|chrome|inverse|tone|tone-solid"`.

## Optional modules

- Icons: `@rascode/firehorse/icons.css`, then `<i class="fh-icon fh-icon--name" aria-hidden="true">`.
  Inside a chip the icon replaces the dot. Tiles: `fh-icon-tile`, `fh-icon-tile--solid`.
- Datatable: `@rascode/firehorse/datatable` renders `fh-dt` from `{ fields, rows }`.
  Field types: text, long, number, currency, percent, progress, select, status, multi,
  tags, date, check, rating, user, users, url, email, phone, link, attachment, formula,
  sparkline; add more with `FirehorseTable.defineType`. Listen for `fh:row-open` to
  show a record in `fh-dialog fh-dialog--float fh-detail`.
- Audio: `fh-player` (wrap a real `<audio controls>`; it stays as the no-JS fallback),
  `fh-play` (+ `--sm|--lg|--solid`, `aria-pressed` = playing), `fh-wave` (`data-peaks`,
  `data-fh-wave-style="mirror|bottom|line"`), `fh-scrub`, `fh-volume`, `fh-audio-btn`,
  `fh-eq`, `fh-tracks` + `fh-track`, `fh-captions`, `fh-reel`, `fh-mixer` + `fh-channel`,
  `fh-meter-level`, `fh-params` + `fh-param`, `fh-stages`. Load `@rascode/firehorse/audio`
  to wire them; it sets `--p` (progress) and `--level` (live level). Use `data-fh-play`,
  `data-fh-wave`, `data-fh-time`, `data-fh-duration`, `data-fh-volume`, `data-fh-mute`,
  `data-fh-loop`, `data-fh-skip="10"`, `data-fh-speed`, `data-fh-playlist="#player"`,
  `data-fh-captions="#player"`, `data-fh-reel="#player"`, `data-fh-mixer`.
- Cubes: `fh-cube` (+ `--sm|--lg|--xl|--outline`, an `fh-icon` inside works) in `fh-cubes`.
  Cube cards: `fh-cube-card` (+ `--stack`, `__text`, `__trend[data-dir=up|down]`) in
  `fh-cube-cards`; both groups walk the tone hue by +28° per item.
- Floating bar: put the section chips in `.fh-dock__bar > .fh-chips` (use `fh-chip--indexed` with the
  real chapter number) and add `<p class="fh-dock__section" data-fh-dock-section></p>` before
  `.fh-dock__title`; on narrow widths it becomes the live section title.
- Chips: `fh-chip--solid`, `fh-chip--tone`, `fh-chip--underline`, `fh-chip--indexed`
  (or `fh-chips--indexed` on the group).
- Menus: `fh-burger` (+ `--arrow|--spin|--squeeze|--minus|--plus|--dots|--label`),
  `fh-overlay-nav` (popover), `fh-command` (dialog, `data-hotkey` for ⌘K), `fh-menu`
  with `fh-menu__label`, `<kbd>`, `role="menuitemcheckbox"`, `fh-menu__danger`, `fh-tabbar`.
- Commerce: `fh-product` (set `data-tone` per product; inside `fh-product-grid`), `fh-price`, `fh-swatches`, `fh-sizes`, `fh-qty`, `fh-gallery`,
  `fh-pdp`, `fh-line-item(s)`, `fh-ship-meter`, `fh-summary`, `fh-choice-card(s)`,
  `fh-paycard` (+ inputs with `data-paycard="number|name|expiry|cvc"`), `fh-card-field`,
  `fh-express`, `fh-or`, `fh-checkout`, `fh-trust`, `fh-review-bars`, `fh-confirm`.
  Payment inputs always carry the right `autocomplete` (`cc-number`, `cc-exp`, `cc-csc`).
  Stores use the normal Firehorse look; restyle them with a theme (or `data-fh-card` on the section), not a separate store stylesheet.

## When to ask the human

Only for: the product name, real copy, prices, legal claims, licensed images
or logos, and which tone maps to which product category. Decide layout and
chrome yourself from these rules.

## Self-check before you finish

- [ ] No hex / rgb / px spacing in your CSS
- [ ] No viewport-width media queries
- [ ] Every class is `fh-*` (or your own app-prefixed class with token-only values)
- [ ] One accent per view
- [ ] Narrow the container to ~320px: nothing overflows
- [ ] Tab through: every control shows focus
- [ ] `npx firehorse-schema <file.html>` passes (real content marked with `data-schema`, nothing invented)
