# Firehorse design language

The rules below are what Firehorse already says about itself. This pass does not change a component. Each rule has one sentence, the file and line that states it, how `scripts/language-audit.mjs` checks it, and one right and one wrong example from this repo.

A citation is `file:line`. "Not checkable by script" means the audit still lists the rule and does not score families on it. The script reads CSS text only. It does not compute a page.

Scanned files are every `.css` file under `src/` except `src/tokens/` and `src/themes/`. Family codes come from the header of each file, resolved through `index-ledger.json` (a retired code follows the replacement named in `retired`). A file with no code is still measured, under a code that starts with `?`.

## 1. Naming

### 1. Class shape

A class is `fh-block`, `fh-block__part`, or `fh-block--modifier`, and it starts with `fh-`.

Source: `CONTRIBUTING.md:5` (prefix classes with `fh-`). `README.md:333` (lint fails a class without the prefix). `scripts/lint.mjs:55-60` enforces the prefix. The block, part, and modifier shape is the form the component files are written in (for example `src/components/actions/button.css:15-16`).

Check: a class selector that does not match that shape. `src/integrations/` is exempt, because `scripts/lint.mjs:35-36` allows a third-party library's own class names.

Right: `src/components/actions/button.css:29` `.fh-button`, and line 139 `.fh-button--secondary`.

Wrong: `src/integrations/reveal.css:46` `.reveal`. The same class in a component file is a breach. In this file it is exempt.

### 2. State is a pseudo-class or an attribute

Hover, focus, active, disabled, busy, selected, invalid, and open are a pseudo-class or an attribute (`aria-*`, `data-state`, `data-*`), not a state class.

Source: `src/components/actions/button.css:77-89` (`:hover`, `:active`, `:disabled`, `[aria-disabled]`) and line 242 (`[aria-busy="true"]`). `src/components/forms/field.css:20-23` (`:user-invalid` and `aria-invalid`). `src/components/sections/records.css:162-164` (`data-state` on a row).

Check: not checkable as a breach. `src/components/navigation/hamburger.css:8-10` says the open state may come from `aria-expanded` or from the class `fh-burger--open`. The audit counts both habits under "For Rascode to decide" and does not pick one.

Right: `src/components/actions/button.css:242` `.fh-button[aria-busy="true"]`.

Wrong: `src/components/navigation/hamburger.css:76` `.fh-burger--open` used as a second way to say open. It is allowed by that file's own comment, so it is not scored as a breach.

### 3. Custom property names

A custom property a component defines is private (`--_`) or public (`--fh-`).

Source: `CONTRIBUTING.md:5` (private custom properties start with `--_`; public knobs are `--fh-<component>-<prop>`).

Check: a property definition whose name does not start with `--_` or `--fh-`. `src/integrations/` is exempt, because that file has to set reveal.js variables.

Right: `src/components/actions/button.css:30` `--_bg`.

Wrong: `src/integrations/reveal.css:23` `--r-background-color`. Exempt in that file. The same name in a component file is a breach.

### 4. Public knobs have a fallback

A public knob that is not defined in `src/tokens/` or `src/themes/` is read with a fallback.

Source: `CONTRIBUTING.md:5` (public knobs must have a fallback). `README.md:215` (components read semantic tokens; knobs such as `--fh-button-bg` sit on top).

Check: `var(--fh-...)` whose name is not defined in `src/tokens/` or `src/themes/`, and whose `var()` has no comma fallback. A token defined in those folders is allowed without a fallback, which is the same split `scripts/lint.mjs:51-53` uses for "never defined".

Right: `src/components/actions/button.css:30` `var(--fh-button-bg, var(--fh-color-primary))`.

Wrong: `src/icons/icons.css:22` `var(--fh-icon)` with no fallback.

### 5. No !important outside the reset

`!important` is only for the reset and the reduced-motion kill switch.

Source: `agent/system.md:126`. `README.md:333`. `scripts/lint.mjs:48` allows it only in `reset.css` and `document.css`. `src/base/document.css:123-130` is the kill switch that uses it.

Check: `!important` in any scanned file other than `src/base/reset.css` and `src/base/document.css`.

Right: `src/base/document.css:127` `animation-duration: 0.01ms !important` inside `prefers-reduced-motion: reduce`.

Wrong: any `!important` in a component file. The lint text at `scripts/lint.mjs:48` names the breach. A live one, if the audit lists it, is the example.

## 2. Tokens

### 6. No raw color

A component does not write a raw color. Color is a semantic token.

Source: `agent/system.md:99-101`. `README.md:333`. `scripts/lint.mjs:41-42` (raw hex and `rgb()`). `src/tokens/semantic.css:4-6` (roles, written with `light-dark()`).

Check: a hex color, `rgb()`, `hsl()`, `oklch()` or `oklab()` that is not `oklch(from ...)` / `oklab(from ...)`, or the words `white` or `black`. Comments are ignored. `url(...)` is ignored. `black` inside a `mask` or `mask-image` is ignored, because a mask uses it as an alpha, not as ink. `white-space` is not a color.

Right: `src/components/content/card.css:36` `background-color: var(--fh-card-bg, transparent)`.

Wrong: `src/components/actions/button.css:51` `white`, and line 53 `black`, inside `color-mix`.

### 7. No primitive token in a component

A component reads a semantic token, not a primitive ramp (`--fh-gray-*`, `--fh-ember-*`, `--fh-sky-*`, and the other hue ramps).

Source: `src/tokens/primitives.css:4-6`. `CONTRIBUTING.md:3`. `README.md:215`. `scripts/lint.mjs:43`.

Check: a primitive ramp token in a scanned file. Semantic files are not scanned, so `src/tokens/semantic.css:29` reading `var(--fh-gray-50)` is the allowed direction and is not a breach.

Right: `src/components/content/card.css:36` reading `--fh-card-bg`, a component knob over a semantic role.

Wrong: no scanned file currently reads a primitive ramp (lint already fails the build on one). The breach would be a component using the read at `src/tokens/semantic.css:29` (`var(--fh-gray-50)`) itself.

### 8. No raw z-index

Z-index is a `--fh-z-*` token.

Source: `src/tokens/primitives.css:212-219` (`--fh-z-raised` through `--fh-z-modal`). The rule is the token rule at `agent/system.md:99-101` applied where a token exists.

Check: `z-index` whose value does not contain `var(--fh-z-` and is not `auto` or `0`. Zero has no token (the scale starts at `--fh-z-raised: 1`), so `z-index: 0` is not scored.

Right: `src/utilities/helpers.css:32` `z-index: var(--fh-z-modal)`.

Wrong: `src/utilities/harmony.css:72` `z-index: 1`, which is the same step as `--fh-z-raised`.

### 9. Which tier a component may read

Primitives feed semantic roles, and semantic roles feed component knobs. A component reads the semantic tier and its own knobs.

Source: `README.md:215`. `src/tokens/README.md:3`. `agent/system.md:45-47`.

Check: not a separate score. Rule 4 scores knobs, rule 6 scores raw color, rule 7 scores primitives.

Right: `src/components/actions/button.css:30-31` a private name holding a public knob that falls back to a semantic color.

Wrong: the same wrong examples as rules 6 and 7.

## 3. Space

### 10. Space is a relationship

Padding, margin, gap, and inset use a relationship or inset token (`--fh-gap-*`, `--fh-inset-*`, `--fh-item-*`, and the page tokens `--fh-page-margin`, `--fh-section-space`, `--fh-float-gap`, `--fh-tap-target`, `--fh-header-height`, `--fh-dock-height`). A component does not pick a raw length, and it does not read a raw `--fh-space-*` step.

Source: `site/pages/guidelines/index.html:23-30` (a component picks a relationship, not a number) and line 51 (2px, 6px, 10px, 14px, 20px, and 28px are not relationships). `src/tokens/semantic.css:138-170` names the steps. `scripts/lint.mjs:18-21` and line 44-45 fail a component on `--fh-space-*`. `site/pages/guidelines/index.html:110` exempts tokens, themes, and the layout primitives.

Check: on `padding`, `margin`, `gap`, `inset`, `scroll-padding`, `scroll-margin`, and their longhands, a length other than 0 (`px`, `rem`, `em`, `cqi`, `cqb`, `vh`, `vw`) after `var()` calls are removed. A `--fh-space-*` read is also a breach, except in `src/layout/`, `src/base/`, `src/utilities/`, and `src/integrations/`, matching the lint exemption. A length of exactly 2px, 6px, 10px, 14px, 20px, or 28px is marked "odd step". A raw length stored on a custom property and only later used is not seen. A raw length that is only a fallback inside `var()` is not seen.

Right: `src/components/forms/field.css:29` `gap: var(--fh-gap-bound)`.

Wrong: `src/components/actions/button.css:45` `padding: 0.55rem var(--fh-inset-tile)`. The `0.55rem` is a raw length beside a real inset token.

### 11. How space relates

Inside is tighter than outside. Padding is at least the gap. A rule replaces space. One gap per relationship, from the parent, not from stacked margins. Numbers line up. One left edge in a tile or card. No odd steps.

Source: `site/pages/guidelines/index.html:45-51`.

Check: not checkable by script, apart from the odd-step label on rule 10. The script cannot see the box tree, so it cannot tell whether the inside is tighter than the outside.

Right: `src/components/content/card.css:31` padding from `--fh-gap-sectioned` and `--fh-gap-grouped-wide`, the card's own relationships.

Wrong: `src/components/actions/button.css:45` again, a padding length that is not a step. The do and don't on the guidelines page (`site/pages/guidelines/index.html:60-70`) is the same rule in markup.

## 4. Shape and line

### 12. Radius comes from the radius scale

A radius is `--fh-radius-none`, `--fh-radius-sm`, `--fh-radius-md`, `--fh-radius-lg`, `--fh-radius-xl`, `--fh-radius-pill`, or `--fh-radius-round`, or a component knob that falls back to one of those.

Source: `src/tokens/primitives.css:148-153` (sm is the CTA, md is grouped panels, lg is sheets and accordions, pill and round are the ends of the scale). `src/tokens/config.css:51-78` maps each card preset onto one of those.

Check: `border-radius` whose value, after `var()` is removed, still has a length, a percentage, or `999`. `0` and `inherit` are allowed. `50%` is not allowed, because `--fh-radius-round` is that value.

Right: `src/components/actions/button.css:47` `border-radius: var(--fh-button-radius, var(--fh-radius-sm))`.

Wrong: `src/components/overlays/menu.css:50` `border-radius: calc(var(--fh-radius-sm) - 1px)`. The token is there, and the `1px` is a second radius.

### 13. Border width comes from the border scale

A border width is `--fh-border-thin`, `--fh-border-thick`, or `--fh-border-heavy`.

Source: `src/tokens/primitives.css:155-157`. `agent/system.md:99-101` where a token exists.

Check: a `px` or `rem` length on `border`, `border-width`, `border-block-start`, `border-inline-start`, and the other border longhands, and on `outline` and `outline-width`, after `var()` is removed. `0` is allowed.

Right: `src/components/actions/button.css:46` `border: var(--fh-border-thin) solid var(--_border)`.

Wrong: `src/components/commerce/payment-card.css:40` `outline: 1px dashed`.

### 14. Etched dashed rules, and a solid focus ring

Structure is an etched dashed rule. Focus is a solid ring, at least 2px, and it is never dashed. Card, tile, table, and drawer edges follow the theme card preset, which is etched unless the theme says otherwise.

Source: `site/pages/guidelines/index.html:139-140`. `agent/system.md:108-109`. `src/tokens/config.css:51-54` (the etched preset is dashed, radius none). `src/base/document.css:91-93` (the `hr` is a dashed etch).

Check: not a separate score. Rule 27 scores the focus ring. Hard-coded `dashed` versus hard-coded `solid` is counted under "For Rascode to decide", because a theme preset may be either (`src/tokens/config.css:51-78`) and a component that hard-codes one of them is not reading the preset. The script does not say which hard-coded style is right.

Right: `src/components/content/card.css:34` `var(--fh-card-border-style, dashed)` and `var(--fh-card-border-color, var(--fh-color-etch-soft))`.

Wrong: `src/components/commerce/payment-card.css:40` a hard-coded `dashed` width, not the preset.

## 5. Colour and tone

### 15. Category color comes from data-tone

`data-tone` sets `--fh-tone`. A component paints category color with `var(--fh-tone)`, not with a named tone token of its own.

Source: `src/utilities/tone.css:4-14`. `agent/system.md:48-49` and line 133 (no hard-coded category colors). `README.md:18`.

Check: a scanned file other than `src/utilities/tone.css` that reads `--fh-tone-neutral`, `--fh-tone-sky`, `--fh-tone-lime`, `--fh-tone-orange`, `--fh-tone-teal`, `--fh-tone-fuchsia`, `--fh-tone-violet`, `--fh-tone-rose`, `--fh-tone-amber`, or `--fh-tone-accent`. Reading `--fh-tone` is the right form and is not a breach.

Right: `src/utilities/helpers.css` does not need this; the right read is any `var(--fh-tone)`, as `src/utilities/tone.css:34-36` sets up with `.fh-tone-text { color: var(--fh-tone); }`.

Wrong: a component that reads `var(--fh-tone-teal)` directly. `src/utilities/tone.css:25` is the one file allowed to name that token, and only to assign it from `data-tone="teal"`.

### 16. Text uses the text roles

Text is `--fh-color-text`, `--fh-color-text-strong`, `--fh-color-text-muted`, `--fh-color-text-subtle`, `--fh-color-text-placeholder`, or `--fh-color-text-inverse`. Ghost text is decorative only.

Source: `src/tokens/semantic.css:48-56`. `site/pages/guidelines/index.html:129` (colors are named by role, not hue).

Check: not a separate score. A raw color is rule 6. The script cannot tell whether a line should have been muted rather than strong.

Right: `src/base/typography.css:65` `color: var(--fh-color-text-muted)` on `.fh-lede`.

Wrong: the `white` and `black` at `src/components/actions/button.css:51-53` (rule 6).

### 17. One accent per view

At most one filled accent per view. Tones carry category. Rules stay grey.

Source: `site/pages/guidelines/index.html:129`. `agent/system.md:106-107`. `src/components/actions/button.css:207-208`.

Check: not checkable by script. Accent is a property of a view, and the script sees one file at a time, not a page.

Right: `src/components/actions/button.css:208` `.fh-button--accent` is the scarce variant, comment and all.

Wrong: the script cannot see two accent buttons in one view. The rule text at `agent/system.md:106-107` is the statement of the breach.

### 18. Meaning never rides on color alone

A status has a word or an icon as well as a tone.

Source: `site/pages/guidelines/index.html:129`.

Check: not checkable by script. It depends on the markup, not on a CSS value.

Right: `src/components/actions/button.css:242-257` busy is `aria-busy` plus a spinner, not a color by itself.

Wrong: not visible in CSS alone.

### 19. Surfaces

Canvas, surface, raised, and overlay are the surface levels. Glass is for chrome and controls, not for reading text. How much glass clouds is `--fh-frost`.

Source: `site/pages/guidelines/index.html:149-150`. `src/tokens/semantic.css:28-44` (canvas, surface, raised, menu, chrome, sunken). `src/tokens/primitives.css:181-183` (`--fh-frost`). `agent/system.md:304-308` (`data-fh-surface`).

Check: not checkable by script. The script cannot tell a reading surface from chrome.

Right: `src/base/document.css:10-12` `[data-fh-surface]` paints `--fh-color-bg` and `--fh-color-text`.

Wrong: not a single line. A glass treatment on body text would be the breach the guidelines name.

## 6. Type

### 20. Font size is a type token

Font size is a `--fh-text-*` token.

Source: `src/base/typography.css:3-4` (text classes map to roles, not sizes). `src/tokens/primitives.css:84-103` (the steps). `agent/system.md:99-101`.

Check: `font-size` whose value, after `var()` is removed, still has a `px`, `rem`, `em`, or `cqi` length. A length under 11px (`px` below 11, or `rem` below `0.6875`) is marked "under 11px". A fallback inside `var()` is not seen.

Right: `src/components/actions/button.css:217` `font-size: var(--fh-text-micro)`.

Wrong: `src/components/actions/button.css:57` `font-size: 0.7rem`, and `src/components/commerce/product-page.css:22` `font-size: clamp(1.8rem, 5cqi, 2.8rem)`.

### 21. Font weight is a weight token

Font weight is a `--fh-weight-*` token.

Source: `src/tokens/primitives.css:74-81`. `agent/system.md:99-101`.

Check: `font-weight` set to a number from 100 to 900. `inherit`, `normal`, and `bold` are not this check (a keyword is noted only when it is a bare number).

Right: `src/components/actions/button.css:58` `font-weight: var(--fh-weight-heavy)`.

Wrong: `src/components/commerce/invoice.css:74` `font-weight: 600`.

### 22. Font family is a family token

The family is `--fh-font-sans`, `--fh-font-mono`, `--fh-font-display`, `--fh-font-figure`, or `--fh-font-script`.

Source: `src/tokens/primitives.css:62-72`. `src/base/document.css:39`. `agent/system.md:119-120` (mono uppercase is for chrome only).

Check: `font-family` whose value does not contain `var(--fh-font-` and is not `inherit`.

Right: `src/base/document.css:39` `font-family: var(--fh-font-sans)`.

Wrong: a `font-family` set to a raw stack. The audit lists any live one. The token definitions at `src/tokens/primitives.css:63-66` are the stacks, and they belong in the token file, which is not scanned.

### 23. Uppercase sets a tracking token

Mono uppercase is for chrome (labels, eyebrows, CTAs, nav). Uppercase in a rule sets a `--fh-tracking-*` token in that rule or a parent rule.

Source: `agent/system.md:119-120`. `src/base/typography.css:81-96` (labels use `--fh-tracking-wider`, eyebrows use `--fh-tracking-caps`, both on `--fh-font-mono`).

Check: a declaration block with `text-transform: uppercase` whose own lines and ancestor blocks do not contain `letter-spacing` with `--fh-tracking-`. Tracking set on a different selector that is not a parent in the file is not seen.

Right: `src/base/typography.css:87-89` `letter-spacing: var(--fh-tracking-wider)` together with `text-transform: uppercase`.

Wrong: an uppercase rule with no tracking token in that block. The audit lists any live one.

### 24. Letter-spacing is a tracking token

Letter-spacing is a `--fh-tracking-*` token.

Source: `src/tokens/primitives.css:113-124`. The same token rule as `agent/system.md:99-101`.

Check: `letter-spacing` whose value, after `var()` is removed, still has an `em` or `px` length. `0` is allowed, because `--fh-tracking-none` is 0 (`src/tokens/primitives.css:119`).

Right: `src/components/actions/button.css:59` `letter-spacing: var(--fh-tracking-widest)`.

Wrong: `src/components/commerce/product-page.css:22` `letter-spacing: -0.04em`, which is the value of `--fh-tracking-tightest` (`src/tokens/primitives.css:114`).

### 25. Figures use tabular numbers

Prices, stats, and table figures use tabular numerals.

Source: `agent/system.md:121-122`. `site/pages/guidelines/index.html:119`.

Check: not checkable by script. Absence of `font-variant-numeric: tabular-nums` is not proof of a breach, because most rules are not figures.

Right: `src/base/typography.css:109` `font-variant-numeric: tabular-nums` on `.fh-index`.

Wrong: not a single line the script can call wrong without knowing which text is a figure.

### 26. The type floor

Body text on a reading surface is at least 16px. UI text is never under 11px.

Source: `site/pages/guidelines/index.html:119`. The same page, line 117, says Firehorse body is 15.2px and labels and micro sit below the floor. The token file says something else: `src/tokens/primitives.css:88` sets `--fh-text-body` to `1rem`, and lines 84-85 set micro and label to `0.6875rem` (11px at a 16px root). `scripts/lint.mjs:46-47` fails a raw font-size under 11px.

Check: not a separate family score. A raw font-size under 11px is marked on rule 20. The disagreement between the guidelines page and the token file is under "For Rascode to decide". The script does not score `src/tokens/`.

Right: `src/base/document.css:40` `font-size: var(--fh-text-body)`.

Wrong: the guidelines' own "where Firehorse stands" sentence at `site/pages/guidelines/index.html:117`, which says the live sizes are under the floor the same page sets.

## 7. States

### 27. Focus is the shared solid ring

Focus-visible is `outline: var(--fh-focus-width) solid var(--fh-color-focus)` with `outline-offset: var(--fh-focus-offset)`. A component may tune the offset. It does not remove the ring without a visible replacement, and it does not draw a different ring.

Source: `src/base/document.css:110-118`. `src/tokens/semantic.css:105-107` (`--fh-focus-width: 2px`). `site/pages/guidelines/index.html:139` (a solid ring at least 2px, never removed, never dashed). `agent/system.md:115`.

Check: a declaration block whose selector matches `:focus-visible` (and not only inside `:not(...)`). If that block sets `outline` to `none` or `0`, sets no `box-shadow` other than `none`, and the file has no `:has(...:focus-visible)` rule that draws an outline, the ring is removed. If that block draws an `outline` or a `box-shadow` and uses neither `--fh-focus-width` nor `--fh-color-focus`, the ring is not the shared one. `:focus:not(:focus-visible) { outline: none }` at `src/base/document.css:116-118` is the right companion and is not a breach.

Right: `src/base/document.css:111-113`.

Wrong: `src/components/overlays/menu.css:57-59` (`outline: none` on `:focus-visible`, with only a background change). Also `src/components/forms/input.css:35-38` (the ring is a `box-shadow` of `2px`, not the focus tokens). `src/components/content/story-card.css:166-170` moves the ring to the card with `:has`, which the script treats as a replacement, and that ring is `2px solid currentColor`, so the parent line is still a breach of the shared tokens.

### 28. How the other states look

Hover, active, disabled, busy, selected, and invalid are visible, and disabled does not keep pointer events.

Source: `src/components/actions/button.css:77-89` (hover changes the shadow, active sets `--_lift`, disabled sets `opacity: 0.45` and `pointer-events: none`). Busy is lines 241-257. Invalid is `src/components/forms/field.css:20-23` and `src/components/forms/input.css:41-44` (the border picks up `--fh-color-danger`). Selected in lists is an attribute, as `src/components/overlays/command-menu.css:50` (`[aria-selected="true"]`).

Check: not checkable by script. A family that has no control is not missing a hover. The script cannot know which families should have had a state.

Right: `src/components/actions/button.css:86-89`.

Wrong: not scored. A disabled control that still accepts clicks would be the breach, and the script cannot see the behavior.

## 8. Motion

### 29. Duration is a duration token

A duration is `--fh-duration-instant`, `fast`, `base`, `slow`, `enter`, `reveal`, `intro`, or `scene`, or `--fh-intro-beat` or `--fh-stagger`.

Source: `src/tokens/primitives.css:187-207`. `site/pages/guidelines/index.html:159` (fast 150ms, base 220ms, slow 420ms). `agent/system.md:198-200`. The same agent file, line 197, says components never write their own milliseconds or curves.

Check: a time (`ms` or `s`) that is not inside `var()` and is not `0s`, `0ms`, or `0.01ms`. `0.01ms` is the kill switch at `src/base/document.css:127-129`, so it is not scored.

Right: `src/components/actions/button.css:70` `var(--fh-duration-base)`.

Wrong: `src/components/commerce/payment-card.css:45` `700ms`.

### 30. Easing is an easing token

An easing is `--fh-ease-standard`, `--fh-ease-out`, `--fh-ease-in-out`, `--fh-ease-expo-out`, `--fh-ease-spring`, `--fh-ease-glide`, or `--fh-ease-in`.

Source: `src/tokens/primitives.css:193-205`. `site/pages/guidelines/index.html:159` (ease out to arrive, ease in and out to move). `agent/system.md:197`.

Check: a `cubic-bezier()`, or the keywords `ease`, `ease-in`, `ease-out`, and `ease-in-out`, outside `var()`. `linear` is not scored: no token is named linear.

Right: `src/components/actions/button.css:70` `var(--fh-ease-out)`.

Wrong: `src/components/commerce/payment-card.css:45` `cubic-bezier(0.3, 0.7, 0.2, 1)`.

### 31. Motion does not animate layout

What moves is transform, opacity, clip, or mask. Layout does not move.

Source: `agent/system.md:220`. `README.md:183` (nothing animates layout).

Check: the first word of each item in `transition` or `transition-property` is a layout property (`width`, `height`, `margin`, `padding`, `top`, `left`, `right`, `bottom`, `inset`, `gap`, `flex-basis`, `border-width`, the physical longhands of those, the logical longhands of margin, padding, and inset, or `all`). A value split over lines is joined first. The bodies of `@keyframes` are not read, so an animation name that moves `width` inside keyframes is not seen. `inline-size` and `block-size` are not in this list.

Right: `src/components/actions/button.css:69-75` transitions `translate`, `box-shadow`, `background-color`, `border-color`, `color`, and `opacity`.

Wrong: a `transition` whose property is `width`, `margin`, or `all`. The audit lists any live one.

### 32. Reduced motion

Under `prefers-reduced-motion: reduce`, nothing slides, pulses, or rolls. The guidelines say every animation sits inside `prefers-reduced-motion: no-preference`. The base says every animation is either gated that way or neutralised by the global kill switch.

Source: `site/pages/guidelines/index.html:156` and line 159. `src/utilities/motion.css:7-8`. `agent/system.md:116-118`. `src/base/document.css:120-131` (the other writing: gate it, or the kill switch zeroes it).

Check: not a breach. The two writings disagree, so the audit counts families that wrap `animation` or `transition` in `no-preference` against families that do not, under "For Rascode to decide".

Right: `src/utilities/motion.css:21` the reveal animation sits inside `prefers-reduced-motion: no-preference`.

Wrong: not scored. `src/components/actions/button.css:69` transitions without that query, and relies on the kill switch. Both are written down.

## 9. Adapting

### 33. Containers, not the viewport

Layout adapts with `@container`, not with a viewport width query. `@media` is for `prefers-*`, `pointer`, `forced-colors`, and `print`.

Source: `CONTRIBUTING.md:4`. `README.md:15`. `agent/system.md:102-105`. `scripts/lint.mjs:49-50`. `src/layout/frame.css:9-12`.

Check: `@media` whose condition contains `min-width`, `max-width`, or a `width` comparison. A `@container` query is not this rule.

Right: `src/layout/primitives.css:4-6` (the primitives do not use viewport queries) and `src/utilities/helpers.css:49` `@container (inline-size < 40rem)`.

Wrong: `src/layout/frame.css:14` names the banned pattern in a comment (`width: 100vw` and `margin-left: -50vw`). The script does not score comments. A live `@media (min-width: ...)` in a scanned file is the counted breach, and lint already fails the build on one.

### 34. Logical properties

Size and space use the logical axes (`inline-size`, `block-size`, `margin-inline`, `padding-block`, `inset`), not the physical ones (`width`, `height`, `margin-left`, `top`, `left`, and the rest).

Source: `src/base/reset.css:25` (`min-block-size`) and line 38 (`max-inline-size`). `src/layout/frame.css:14-15` rejects the physical breakout. Observed across the component files, which are written on the logical axes. Nothing in the guidelines names "logical properties" as a word, so this rule is traced to the reset and the frame, which is where the system does it.

Check: a declaration whose property is `width`, `height`, `min-width`, `max-width`, `min-height`, `max-height`, `margin-left`, `margin-right`, `margin-top`, `margin-bottom`, `padding-left`, `padding-right`, `padding-top`, `padding-bottom`, `border-left`, `border-right`, `border-top`, `border-bottom` (and those border longhands' `-width`, `-color`, and `-style`), or `left`, `right`, `top`, `bottom`. `scrollbar-width`, `line-height`, `border-width`, and `stroke-width` are different properties and are not this rule. A length inside `@media` or `@container` is not a declaration. `text-align: left` or `right` is scored, because the logical value is `start` or `end`.

Right: `src/base/reset.css:38` `max-inline-size: 100%`.

Wrong: the physical breakout named at `src/layout/frame.css:14`. A live physical property, if the audit lists one, is the counted example.

### 35. Scheme is light-dark and data-fh-scheme

Light and dark come from `light-dark()` on the same token name, switched by `data-fh-scheme`. A component does not write `@media (prefers-color-scheme)`.

Source: `src/tokens/semantic.css:4-12`. `README.md:17`. `agent/system.md:50-51`. `src/tokens/adaptive.css:20-22` (paint a surface with `--fh-color-bg`, do not hand-pick text colors).

Check: `@media` containing `prefers-color-scheme` in a scanned file.

Right: `src/tokens/semantic.css:29` `--fh-color-canvas: light-dark(...)`. The token file is not scanned. The attribute that flips it is `src/tokens/semantic.css:17-24`.

Wrong: a component `@media (prefers-color-scheme: dark)`. None is expected in `src/` outside the build. The lowered file `dist/firehorse.compat.min.css` emits that query so older browsers can follow the scheme. Writing it by hand in a component is the breach.

## 10. Markup

These four are properties of HTML. The script reads CSS, so none of them is scored. They are here because the language states them.

### 36. data-fh on a component root

Every component root carries `data-fh` with its Index id. A block Firehorse does not have carries `data-fh="local:<name>"`. Parts, primitives, and utilities do not.

Source: `README.md:149-152`. `agent/system.md:150-156`. `CONTRIBUTING.md:6` (`data-fh-id` on the docs demo).

Check: not checkable by script.

Right: the contract at `agent/system.md:150-152`.

Wrong: a shipped component root with no `data-fh`. The audit tool named in `README.md:155` is what sees it, not this script.

### 37. Landmarks, roles, and labels

A button is a `button`, a link is an `a`, a disclosure is `details`, a modal is `dialog`, a menu is `popover`. Every input has a `label`. Required is the `required` attribute. Icons that are not the name are `aria-hidden`.

Source: `agent/system.md:111-114`. `README.md:19`. `site/pages/guidelines/index.html:179` (real elements first). `src/components/forms/field.css:10-16`.

Check: not checkable by script.

Right: `src/components/forms/field.css:14-16` a `label` with `for`, and `required` on the input.

Wrong: an input with no label. Not in the CSS.

### 38. What must not wait on a script

Content is visible with no script. The optional enhancer (`firehorse.js`) adds behavior and is never required for the content to be there. Native elements cover disclosure, dialogs, and menus.

Source: `agent/system.md:112` and lines 225-233. `README.md:19`. `src/utilities/motion.css:11-13` (content is never parked invisible).

Check: not checkable by script.

Right: `src/utilities/motion.css:11-13`.

Wrong: content hidden until a script runs. `agent/system.md:131` names it. The script cannot see that dependency.

## What the audit is not

The script does not open a browser, does not compute custom properties, and does not read HTML. A `skip` from lint, or a clean lint, does not mean a family follows a rule this audit scores: lint covers hex, `rgb()`, primitive ramps, `--fh-space-*`, font-size under 11px, `!important`, viewport width queries, undefined variables, and the `fh-` prefix. This audit repeats those and also scores raw lengths, radius, border width, z-index, weight, tracking, focus treatment, duration, easing, layout motion, logical properties, and knob fallbacks.
