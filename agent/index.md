# Firehorse Index

> Every Firehorse component, group and variant has a stable ID, v1.1.0. People
> name what they want by ID instead of describing it ("use CHP-1.3", "swap the
> pricing badge for TIR"). Look the ID up here and use the markup exactly.
> Generated from https://firehorse.rascode.dev. Rules: [system.md](system.md). Full markup for each
> family: [components.md](components.md). Machine-readable: [index.json](../index.json).

## How IDs work

- A **family** ID is three letters: `EYE` is the eyebrow pill family.
- A **group** adds a number: `EYE-5` is the eyebrow pill's parts (index, segments, count).
- A **variant** adds a dot: `EYE-5.2` is one specific treatment in that group.
  Variants that share the number before the dot are siblings.
- IDs are stable. A retired ID is never reused; new variants take the next number
  in their group. Retired IDs that moved are listed under [Former IDs](#former-ids).
- On the site, every demo shows its ID. Click an ID to copy it with its markup.
- When a person gives you an ID, use that family, group or variant's markup and
  classes, keep its structure, and change only the content. If an ID isn't listed
  here (or under Former IDs), say so; don't guess.

## Families

| ID | Name | Section | Groups | Demo |
|---|---|---|---|---|
| `NEU` | Neutral ramp | Foundations | — | [open](https://firehorse.rascode.dev/foundations/#NEU) |
| `TON` | Tones | Foundations | — | [open](https://firehorse.rascode.dev/foundations/#TON) |
| `TYP` | Type | Foundations | 1 Type presets (4) | [open](https://firehorse.rascode.dev/foundations/#TYP) |
| `SPC` | Space | Foundations | — | [open](https://firehorse.rascode.dev/foundations/#SPC) |
| `RAD` | Radius | Foundations | — | [open](https://firehorse.rascode.dev/foundations/#RAD) |
| `ELV` | Elevation | Foundations | — | [open](https://firehorse.rascode.dev/foundations/#ELV) |
| `MOT` | Motion | Foundations | — | [open](https://firehorse.rascode.dev/foundations/#MOT) |
| `MTL` | The motion layer | Foundations | — | [open](https://firehorse.rascode.dev/foundations/#MTL) |
| `WRT` | Word rotator | Foundations | 1 Word rotator (6) | [open](https://firehorse.rascode.dev/foundations/#WRT) |
| `STK` | Stack | Layout | — | [open](https://firehorse.rascode.dev/layout/#STK) |
| `CLS` | Cluster | Layout | — | [open](https://firehorse.rascode.dev/layout/#CLS) |
| `GRD` | Auto grid | Layout | — | [open](https://firehorse.rascode.dev/layout/#GRD) |
| `FND` | Fender | Page patterns | — | [open](https://firehorse.rascode.dev/patterns/#FND) |
| `CIN` | Cinch | Page patterns | — | [open](https://firehorse.rascode.dev/patterns/#CIN) |
| `PNL` | Offset panel | Building blocks | — | [open](https://firehorse.rascode.dev/patterns/#PNL) |
| `ESP` | Etched split | Building blocks | — | [open](https://firehorse.rascode.dev/patterns/#ESP) |
| `CTB` | CTA band | Building blocks | — | [open](https://firehorse.rascode.dev/patterns/#CTB) |
| `BTN` | Button | Actions | 1 Solid (5) · 2 Line (2) · 3 States (2) | [open](https://firehorse.rascode.dev/components/actions/#BTN) |
| `ACT` | Action & link | Actions | — | [open](https://firehorse.rascode.dev/components/actions/#ACT) |
| `MRK` | Markers | Actions | 1 Markers (2) | [open](https://firehorse.rascode.dev/components/actions/#MRK) |
| `EYE` | Eyebrow pill | Actions | 1 Lines (4) · 2 Shapes (4) · 3 Fills (5) · 4 Edges (2) · 5 Parts (3) · 6 Sentences (3) · 7 Sizes (2) | [open](https://firehorse.rascode.dev/components/actions/#EYE) |
| `CHP` | Chips | Actions | 1 Kinds (4) · 2 Parts (3) · 3 Chip cards (4) | [open](https://firehorse.rascode.dev/components/actions/#CHP) |
| `CUB` | Cubes | Actions | 1 Cubes (4) · 2 Cube cards (3) | [open](https://firehorse.rascode.dev/components/actions/#CUB) |
| `CRD` | Card in a ruled grid | Content | — | [open](https://firehorse.rascode.dev/components/content/#CRD) |
| `STA` | Stats strip | Content | — | [open](https://firehorse.rascode.dev/components/content/#STA) |
| `KVL` | Key value list | Content | 1 Key value list (3) · 2 Row spacing (1) | [open](https://firehorse.rascode.dev/components/content/#KVL) |
| `CKL` | Checklist | Content | — | [open](https://firehorse.rascode.dev/components/content/#CKL) |
| `STP` | Steps | Content | — | [open](https://firehorse.rascode.dev/components/content/#STP) |
| `CAR` | Carousel | Content | — | [open](https://firehorse.rascode.dev/components/content/#CAR) |
| `DEK` | Stacking deck | Content | 1 Stacking deck (1) · 2 Hero handoff (1) · 3 Recede styles (4) · 4 Cards and captions (3) · 5 Direction (2) | [open](https://firehorse.rascode.dev/components/content/#DEK) |
| `MBR` | Member card | Content | 1 Pass (3) · 2 Plates (3) | [open](https://firehorse.rascode.dev/components/content/#MBR) |
| `STY` | Story card | Content | 1 Solid (6) · 2 Picture and glare (4) · 3 In the field (4) | [open](https://firehorse.rascode.dev/components/content/#STY) |
| `SPD` | Speed blur | Content | 1 Speed blur (3) | [open](https://firehorse.rascode.dev/components/content/#SPD) |
| `DTH` | Dither | Content | 1 Dither (4) | [open](https://firehorse.rascode.dev/components/content/#DTH) |
| `LQG` | Liquid glass | Content | 1 Liquid glass (4) | [open](https://firehorse.rascode.dev/components/content/#LQG) |
| `LST` | List & timeline | Content | — | [open](https://firehorse.rascode.dev/components/content/#LST) |
| `CHT` | Chat | Content | — | [open](https://firehorse.rascode.dev/components/content/#CHT) |
| `DET` | Details, code, divider | Content | — | [open](https://firehorse.rascode.dev/components/content/#DET) |
| `TIR` | Pricing tiers | Content | — | [open](https://firehorse.rascode.dev/components/content/#TIR) |
| `FEA` | Features | Content | — | [open](https://firehorse.rascode.dev/components/content/#FEA) |
| `TST` | Testimonial | Content | — | [open](https://firehorse.rascode.dev/components/content/#TST) |
| `CAT` | Card catalog | Card catalog | 1 Catalog (1) · 2 People (1) · 3 Media (1) · 4 Surfaces (1) · 5 Tokens (1) · 6 Commerce (2) · 7 Data (1) | [open](https://firehorse.rascode.dev/components/content/#CAT) |
| `DCK` | Floating bar | Bars & tabs | — | [open](https://firehorse.rascode.dev/components/navigation/#DCK) |
| `FAB` | Floating action bar | Bars & tabs | — | [open](https://firehorse.rascode.dev/components/navigation/#FAB) |
| `TAB` | Tabs | Bars & tabs | — | [open](https://firehorse.rascode.dev/components/navigation/#TAB) |
| `NAV` | Navigation | Bars & tabs | — | [open](https://firehorse.rascode.dev/components/navigation/#NAV) |
| `BRG` | Hamburger | Drawers & menus | — | [open](https://firehorse.rascode.dev/components/navigation/#BRG) |
| `PRF` | Profile picker | Drawers & menus | 1 Profile picker (4) | [open](https://firehorse.rascode.dev/components/navigation/#PRF) |
| `DRP` | Dropdown menu | Drawers & menus | — | [open](https://firehorse.rascode.dev/components/navigation/#DRP) |
| `TBR` | Tab bar | Drawers & menus | — | [open](https://firehorse.rascode.dev/components/navigation/#TBR) |
| `ACC` | Accordion | Overlays & feedback | — | [open](https://firehorse.rascode.dev/components/overlays/#ACC) |
| `DLG` | Dialog, menu, toast | Overlays & feedback | — | [open](https://firehorse.rascode.dev/components/overlays/#DLG) |
| `FBK` | Feedback | Overlays & feedback | — | [open](https://firehorse.rascode.dev/components/overlays/#FBK) |
| `EMP` | Empty state & banner | Overlays & feedback | — | [open](https://firehorse.rascode.dev/components/overlays/#EMP) |
| `AVT` | Avatars | Avatars | 1 Shapes (5) · 2 Sizes & presence · 3 Rings & halos · 4 Generated · 5 Groups | [open](https://firehorse.rascode.dev/components/avatars/#AVT) |
| `SCD` | Social card | Profile cards | 1 Social card (3) | [open](https://firehorse.rascode.dev/components/avatars/#SCD) |
| `AUT` | Sign in & sign up | Forms | 1 Layouts (3) · 2 Method (1) | [open](https://firehorse.rascode.dev/forms/#AUT) |
| `FLD` | Fields | Fields & choices | — | [open](https://firehorse.rascode.dev/forms/#FLD) |
| `CHO` | Choices | Fields & choices | — | [open](https://firehorse.rascode.dev/forms/#CHO) |
| `UPL` | Upload, range, tags, sheet | Fields & choices | — | [open](https://firehorse.rascode.dev/forms/#UPL) |
| `TAG` | Tag field | Fields & choices | 1 Field (1) · 2 Inline (4) | [open](https://firehorse.rascode.dev/forms/#TAG) |
| `ENT` | Entity picker | Fields & choices | 1 Shapes (3) · 2 Content (3) | [open](https://firehorse.rascode.dev/forms/#ENT) |
| `DTB` | Datatable | Data | — | [open](https://firehorse.rascode.dev/data/#DTB) |
| `TBL` | Table | Table | — | [open](https://firehorse.rascode.dev/data/#TBL) |
| `PRD` | Product grid | Commerce | — | [open](https://firehorse.rascode.dev/commerce/#PRD) |
| `PDP` | Product page | Commerce | — | [open](https://firehorse.rascode.dev/commerce/#PDP) |
| `CKO` | Checkout | Commerce | — | [open](https://firehorse.rascode.dev/commerce/#CKO) |
| `EXP` | Express pay | Commerce | — | [open](https://firehorse.rascode.dev/commerce/#EXP) |
| `CCH` | Choice cards | Commerce | — | [open](https://firehorse.rascode.dev/commerce/#CCH) |
| `PAY` | Payment card | Commerce | — | [open](https://firehorse.rascode.dev/commerce/#PAY) |
| `CRT` | Cart line items | Commerce | — | [open](https://firehorse.rascode.dev/commerce/#CRT) |
| `SUM` | Order summary | Commerce | — | [open](https://firehorse.rascode.dev/commerce/#SUM) |
| `CNF` | Order confirmation | Commerce | — | [open](https://firehorse.rascode.dev/commerce/#CNF) |
| `INV` | Invoice | Invoice | 1 Sheet (3) · 2 Pay (1) | [open](https://firehorse.rascode.dev/commerce/#INV) |
| `BAL` | Balance | Finance | — | [open](https://firehorse.rascode.dev/finance/#BAL) |
| `SEG` | Segment switch | Finance | — | [open](https://firehorse.rascode.dev/finance/#SEG) |
| `ACN` | Account card | Finance | — | [open](https://firehorse.rascode.dev/finance/#ACN) |
| `LDG` | Ledger | Finance | — | [open](https://firehorse.rascode.dev/finance/#LDG) |
| `VCD` | Virtual card | Finance | — | [open](https://firehorse.rascode.dev/finance/#VCD) |
| `CNX` | Connection status | Finance | — | [open](https://firehorse.rascode.dev/finance/#CNX) |
| `MST` | Masthead | Admin | 1 Masthead (2) | [open](https://firehorse.rascode.dev/admin/#MST) |
| `BKD` | Backdrop | Admin | 1 Backdrop (2) | [open](https://firehorse.rascode.dev/admin/#BKD) |
| `REC` | Record header | Admin | 1 Record header (2) | [open](https://firehorse.rascode.dev/admin/#REC) |
| `SEC` | Section card | Admin | 1 Section card (3) | [open](https://firehorse.rascode.dev/admin/#SEC) |
| `MET` | Metric tiles | Admin | 1 Metric tile (11) · 2 Spread tiles (7) | [open](https://firehorse.rascode.dev/admin/#MET) |
| `GAU` | Gauge | Admin | 1 Gauge (2) | [open](https://firehorse.rascode.dev/admin/#GAU) |
| `PLY` | Audio player | Audio | — | [open](https://firehorse.rascode.dev/audio/#PLY) |
| `CAP` | Captions | Audio | — | [open](https://firehorse.rascode.dev/audio/#CAP) |
| `TRK` | Playlist | Audio | — | [open](https://firehorse.rascode.dev/audio/#TRK) |
| `REL` | Reel | Audio | — | [open](https://firehorse.rascode.dev/audio/#REL) |
| `MIX` | Mixer | Audio | — | [open](https://firehorse.rascode.dev/audio/#MIX) |
| `PRM` | Parameters | Audio | — | [open](https://firehorse.rascode.dev/audio/#PRM) |
| `STG` | Render stages | Audio | — | [open](https://firehorse.rascode.dev/audio/#STG) |
| `THB` | Thumbnails & link cards | Social | 1 Thumbnails & link cards (2) | [open](https://firehorse.rascode.dev/media/#THB) |
| `SOC` | Posts & stories | Social | 1 Posts & stories (5) | [open](https://firehorse.rascode.dev/media/#SOC) |
| `WAL` | Home screen wallpapers | Social | 1 iPhone (4) · 2 Pixel (2) · 3 Galaxy (2) | [open](https://firehorse.rascode.dev/media/#WAL) |
| `HDR` | Profile headers | Social | 1 Profile headers (3) | [open](https://firehorse.rascode.dev/media/#HDR) |
| `CVR` | Cover art | Social | 1 Cover art (2) | [open](https://firehorse.rascode.dev/media/#CVR) |
| `BIZ` | Business cards | Social | 1 Business cards (2) | [open](https://firehorse.rascode.dev/media/#BIZ) |
| `SLD` | Slide layouts | Slides | 1 Openers (3) · 2 Content (6) · 3 Close (1) | [open](https://firehorse.rascode.dev/media/#SLD) |
| `THM` | Brand theme file | Theming | — | [open](https://firehorse.rascode.dev/theming/#THM) |
| `THS` | Theme select | Themes | — | [open](https://firehorse.rascode.dev/theming/#THS) |
| `TML` | Timelines | Timelines | 1 Timelines (4) | [open](https://firehorse.rascode.dev/pro/project-management/#TML) |
| `CAL` | Calendar pickers | Calendar | 1 Pickers (3) · 2 Inline (1) | [open](https://firehorse.rascode.dev/pro/project-management/#CAL) |

## NEU · Neutral ramp

--fh-gray-*

Classes: 

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/foundations/#NEU.

## TON · Tones

Category color. Set data-tone once; dots, marks, meta and links inside follow. Ratios are against the current canvas.

Classes: 

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/foundations/#TON.

## TYP · Type

Inter, Geist Mono and Caveat in the Rascode theme; system stacks in core. Fluid roles scale with their container.

Classes: `fh-label` `fh-title` `fh-body`

### TYP-1 · Type presets

Four faces as one attribute: data-fh-type sets the sans and display families and the heading tracking each face wants (Hanken Grotesk at −5%, Archivo at −3%). A theme picks one with config.type. Presets name the family only: load the font yourself.

#### TYP-1.1 · Geist

```html
<div class="site-type-row" data-fh-type="geist"><div class="site-type-row__meta"><span class="fh-label">Geist</span><code>data-fh-type="geist" · −4% display</code></div><div><p class="fh-title">Ink, etch and ember.</p><p class="fh-body" style="margin: 0">The quick brown fox jumps over the lazy dog, 0123456789.</p></div></div>
```

#### TYP-1.2 · Inter

```html
<div class="site-type-row" data-fh-type="inter"><div class="site-type-row__meta"><span class="fh-label">Inter</span><code>data-fh-type="inter" · −3.5% display</code></div><div><p class="fh-title">Built for every screen.</p><p class="fh-body" style="margin: 0">The quick brown fox jumps over the lazy dog, 0123456789.</p></div></div>
```

#### TYP-1.3 · Hanken Grotesk

```html
<div class="site-type-row" data-fh-type="hanken"><div class="site-type-row__meta"><span class="fh-label">Hanken Grotesk</span><code>data-fh-type="hanken" · −5% display</code></div><div><p class="fh-title">Beyond the ordinary.</p><p class="fh-body" style="margin: 0">The quick brown fox jumps over the lazy dog, 0123456789.</p></div></div>
```

#### TYP-1.4 · Archivo

```html
<div class="site-type-row" data-fh-type="archivo"><div class="site-type-row__meta"><span class="fh-label">Archivo</span><code>data-fh-type="archivo" · −3% display</code></div><div><p class="fh-title">Create something different.</p><p class="fh-body" style="margin: 0">The quick brown fox jumps over the lazy dog, 0123456789.</p></div></div>
```

## SPC · Space

--fh-space-*

Classes: 

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/foundations/#SPC.

## RAD · Radius

--fh-radius-*

Classes: 

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/foundations/#RAD.

## ELV · Elevation

The convex button style (data-fh-button="convex"): bends out at rest, the shadow inverts on hover, it sinks on press.

Classes: `fh-cluster` `fh-button`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/foundations/#ELV.

## MOT · Motion

Two curves. Everything is opt-in under prefers-reduced-motion.

Classes: 

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/foundations/#MOT.

## MTL · The motion layer

Motion you opt into, not a library you load. It runs on the platform (transitions, @starting-style, scroll-driven animations), stays inside prefers-reduced-motion, and stops when nobody can see it.

Classes: `fh-dl` `fh-cluster` `fh-button` `fh-button--plain` `fh-roll` `fh-nav__link` `fh-chip` `fh-chip--indexed` `fh-chip__index` `fh-rollover` `fh-rollover__item` `fh-button--sm` `fh-button--secondary` `fh-card` `fh-reveal` `fh-card__meta` `fh-card__title` `fh-reveal--scale` `fh-reveal--left` `fh-reveal--blur` `fh-checklist`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/foundations/#MTL.

## WRT · Word rotator

The rolling word in a headline, without the usual wiring: no library, no word array in a script, no timers. Write the words in the markup and they take turns. Change them by editing the HTML. Style the word apart from the sentence with a modifier, a tone or a knob: colour, font, size, weight, italic, underline, highlight, gradient, and which way it rolls.

Classes: `fh-title` `fh-rotator` `fh-lede` `fh-heading` `fh-rotator--script` `fh-rotator--accent` `fh-rotator--mono` `fh-rotator--highlight` `fh-rotator--fade` `fh-rotator--gradient` `fh-rotator--down` `fh-rotator--italic` `fh-rotator--underline` `fh-rotator--display`

### WRT-1 · Word rotator

#### WRT-1.1 · Title

```html
<h3 class="fh-title">The design system that <span class="fh-rotator" data-fh="WRT-1.1"><span>scales</span><span aria-hidden="true">adapts</span><span aria-hidden="true">fits</span><span aria-hidden="true">flexes</span><span aria-hidden="true">grows</span></span>.</h3>
```

#### WRT-1.2 · Lede · tone

```html
<p class="fh-lede" style="--fh-rotator-step: 1.8s">Built for <span class="fh-rotator" data-tone="sky" data-fh="WRT-1.2"><span>studios</span><span aria-hidden="true">startups</span><span aria-hidden="true">agencies</span></span>, shipped in a week.</p>
```

#### WRT-1.3 · Script · accent

```html
<p class="fh-heading">Made by <span class="fh-rotator fh-rotator--script fh-rotator--accent" data-fh="WRT-1.3"><span>hand</span><span aria-hidden="true">people</span><span aria-hidden="true">Rascode</span></span></p>
```

#### WRT-1.4 · Mono · highlight · fade

```html
<p class="fh-heading">Ship it <span class="fh-rotator fh-rotator--mono fh-rotator--highlight fh-rotator--fade" data-tone="lime" data-fh="WRT-1.4"><span>today</span><span aria-hidden="true">tonight</span><span aria-hidden="true">now</span></span></p>
```

#### WRT-1.5 · Gradient · down

```html
<p class="fh-heading">Every <span class="fh-rotator fh-rotator--gradient fh-rotator--down" data-fh="WRT-1.5"><span>tone</span><span aria-hidden="true">theme</span><span aria-hidden="true">scheme</span></span> included</p>
```

#### WRT-1.6 · Italic · underline · display

```html
<p class="fh-heading">Looks <span class="fh-rotator fh-rotator--italic fh-rotator--underline fh-rotator--display" data-tone="amber" style="--fh-rotator-scale: 1.2" data-fh="WRT-1.6"><span>sharp</span><span aria-hidden="true">calm</span><span aria-hidden="true">bold</span></span> anywhere</p>
```

## STK · Stack

.fh-stack

Classes: `fh-stack` `fh-stack--sm` `fh-label` `fh-body` `fh-action`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/layout/#STK.

## CLS · Cluster

.fh-cluster

Classes: `fh-cluster` `fh-badge`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/layout/#CLS.

## GRD · Auto grid

.fh-grid[data-cols]

Classes: `fh-grid` `fh-card` `fh-card--solid`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/layout/#GRD.

## FND · Fender

A long page that changes gear partway. A note closes the first chapter and opens a tinted band that hangs down the rest of the page, the way a fender hangs down the side of a saddle: through the next section, under its full-width content and through a tall footer to the bottom.

Classes: `fh-page` `fh-main` `fh-section` `fh-grid` `fh-card` `fh-card--solid` `fh-label` `fh-small` `fh-muted` `fh-section--ruled` `fh-section-head` `fh-panel-inset` `fh-subheading` `fh-footer` `fh-footer--tall` `fh-footer__columns` `fh-footer__column` `fh-panel`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/patterns/#FND.

## CIN · Cinch

A page's opening argument, right under its sub-nav: the claim on the left, the substance on the right, held together by one line the way a cinch holds both sides of a saddle. Two panes, two tones, one number to end on.

Classes: `fh-section` `fh-section--flush` `fh-etched-split` `fh-etched-split--roomy` `fh-bleed` `fh-etched-split__pane` `fh-crosses` `fh-stack` `fh-eyebrow-pill` `fh-dot` `fh-dot--live` `fh-heading` `fh-lede` `fh-body` `fh-muted`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/patterns/#CIN.

## PNL · Offset panel

A tinted column that begins where you mark it and runs to the bottom of the page, through every section below and the footer. Its fill against the open canvas splits the page in two tones; its dashed edges run the full height. Content stepping onto it takes .fh-panel-inset. Fender is built on it.

Classes: `fh-page` `fh-main` `fh-section` `fh-label` `fh-small` `fh-muted` `fh-section--ruled` `fh-section-head` `fh-panel-inset` `fh-subheading` `fh-footer` `fh-footer--tall` `fh-footer__columns` `fh-footer__column` `fh-panel`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/patterns/#PNL.

## ESP · Etched split

A full-bleed pair that breaks out of the content column while its copy still lines up with the content edge on both sides. Stacks when the page is narrow. --roomy gives each pane the full section rhythm. Cinch is built on it.

Classes: `fh-etched-split` `fh-bleed` `fh-etched-split__pane` `fh-crosses` `fh-stack` `fh-stack--lg` `fh-eyebrow-pill` `fh-dot` `fh-dot--live` `fh-heading` `fh-lede` `fh-checklist`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/patterns/#ESP.

## CTB · CTA band

The closing ask. A display-size title and the actions on the left; the proof on the right behind a dashed seam: what it costs and takes, who you'll talk to, one line of fine print. A short tone bar rides the top edge. Stacks when the slot is narrow; label, heading, lede and actions on their own still make the simple band.

Classes: `fh-cta-band` `fh-crosses` `fh-cta-band__main` `fh-eyebrow-pill` `fh-dot` `fh-dot--live` `fh-cta-band__title` `fh-lede` `fh-hero__actions` `fh-button` `fh-button--secondary` `fh-cta-band__aside` `fh-cubes` `fh-cube` `fh-cube--lg` `fh-cta-band__people` `fh-avatars` `fh-avatar` `fh-cta-band__fine`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/patterns/#CTB.

## BTN · Button

Flat 3px rect, mono caps, solid fill (data-fh-button="convex" for the bevelled one). Primary buttons get an arrow; data-tone lights the top edge. --flat is solid black with white text in every scheme.

Classes: `fh-button` `fh-roll` `fh-button--secondary` `fh-button--accent` `fh-button--flat` `fh-button--outline` `fh-button--ghost` `fh-button--sm`

### BTN-1 · Solid

#### BTN-1.1 · Primary

```html
<a class="fh-button" href="#c-button" data-fh="BTN-1.1"><span class="fh-roll">Discuss a project</span></a>
```

#### BTN-1.2 · Tone edge

```html
<a class="fh-button" href="#c-button" data-tone="sky" data-fh="BTN-1.2">Tone edge</a>
```

#### BTN-1.3 · Secondary

```html
<button class="fh-button fh-button--secondary" type="button" data-fh="BTN-1.3">Secondary</button>
```

#### BTN-1.4 · Accent

```html
<button class="fh-button fh-button--accent" type="button" data-fh="BTN-1.4">Accent</button>
```

#### BTN-1.5 · Flat

```html
<button class="fh-button fh-button--flat" type="button" data-fh="BTN-1.5">Flat</button>
```

### BTN-2 · Line

#### BTN-2.1 · Outline

```html
<button class="fh-button fh-button--outline" type="button" data-fh="BTN-2.1">Outline</button>
```

#### BTN-2.2 · Ghost

```html
<button class="fh-button fh-button--ghost" type="button" data-fh="BTN-2.2">Ghost</button>
```

### BTN-3 · States

#### BTN-3.1 · Busy

```html
<button class="fh-button" type="button" aria-busy="true" data-fh="BTN-3.1">Saving</button>
```

#### BTN-3.2 · Small, disabled

```html
<button class="fh-button fh-button--sm" type="button" disabled data-fh="BTN-3.2">Disabled</button>
```

## ACT · Action & link

Section CTAs and card actions.

Classes: `fh-dl` `fh-action` `fh-action--lg` `fh-link` `fh-link--quiet`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/actions/#ACT.

## MRK · Markers

Dots, eyebrow pills, breadcrumbs and badges.

Classes: `fh-breadcrumb` `fh-breadcrumb__back` `fh-dot` `fh-dot--live` `fh-cluster` `fh-badge` `fh-badge--solid`

### MRK-1 · Markers

#### MRK-1.1 · Breadcrumb

```html
<nav class="fh-breadcrumb" aria-label="Breadcrumb" data-tone="teal" data-fh="MRK-1.1">
  <a class="fh-breadcrumb__back" href="#c-markers" aria-label="Back"><span class="fh-dot fh-dot--live"></span></a>
  <ol>
    <li><a href="#c-markers">Services</a></li>
    <li><a href="#c-markers">Data</a></li>
    <li><span aria-current="page">Schema design</span></li>
  </ol>
</nav>
```

#### MRK-1.2 · Badges

```html
<div class="fh-cluster">
  <span class="fh-badge" data-fh="MRK-1.2">Required</span>
  <span class="fh-badge" data-tone="lime" data-fh="MRK-1.2">Live</span>
  <span class="fh-badge fh-badge--solid" data-tone="amber" data-fh="MRK-1.2">Beta</span>
</div>
```

## EYE · Eyebrow pill

The Doppler pill from the top of this page, as a full component. Combine a shape, a line and any of the parts. Every variant takes the tone from data-tone.

Classes: `fh-eyebrow-pill` `fh-dot` `fh-dot--live` `fh-eyebrow-pill--etched` `fh-eyebrow-pill--dotted` `fh-eyebrow-pill--double` `fh-dot--square` `fh-eyebrow-pill--rounded` `fh-eyebrow-pill--sharp` `fh-dot--diamond` `fh-eyebrow-pill--oval` `fh-eyebrow-pill--tab` `fh-eyebrow-pill--tone` `fh-eyebrow-pill--solid` `fh-dot--blink` `fh-eyebrow-pill--gradient` `fh-eyebrow-pill--glass` `fh-dot--ring` `fh-eyebrow-pill--ghost` `fh-eyebrow-pill--bracket` `fh-dot--bar` `fh-eyebrow-pill--underline` `fh-eyebrow-pill__index` `fh-eyebrow-pill__seg` `fh-eyebrow-pill__count` `fh-eyebrow-pill--sentence` `fh-avatar` `fh-avatar--circle` `fh-eyebrow-pill__action` `fh-kbd` `fh-eyebrow-pill--sm` `fh-eyebrow-pill--lg`

### EYE-1 · Lines

.fh-eyebrow-pill · --etched · --dotted · --double

#### EYE-1.1 · Solid line

```html
<p class="fh-eyebrow-pill" data-tone="sky" data-fh="EYE-1.1"><span class="fh-dot fh-dot--live"></span>Solid line</p>
```

#### EYE-1.2 · Etched line

```html
<p class="fh-eyebrow-pill fh-eyebrow-pill--etched" data-tone="teal" data-fh="EYE-1.2"><span class="fh-dot fh-dot--live"></span>Etched line</p>
```

#### EYE-1.3 · Dotted line

```html
<p class="fh-eyebrow-pill fh-eyebrow-pill--dotted" data-tone="lime" data-fh="EYE-1.3"><span class="fh-dot"></span>Dotted line</p>
```

#### EYE-1.4 · Double line

```html
<p class="fh-eyebrow-pill fh-eyebrow-pill--double" data-tone="amber" data-fh="EYE-1.4"><span class="fh-dot fh-dot--square"></span>Double line</p>
```

### EYE-2 · Shapes

--rounded · --sharp · --oval · --tab

#### EYE-2.1 · Rounded

```html
<p class="fh-eyebrow-pill fh-eyebrow-pill--rounded" data-tone="orange" data-fh="EYE-2.1"><span class="fh-dot"></span>Rounded</p>
```

#### EYE-2.2 · Sharp

```html
<p class="fh-eyebrow-pill fh-eyebrow-pill--sharp fh-eyebrow-pill--etched" data-tone="rose" data-fh="EYE-2.2"><span class="fh-dot fh-dot--diamond"></span>Sharp</p>
```

#### EYE-2.3 · Oval

```html
<p class="fh-eyebrow-pill fh-eyebrow-pill--oval fh-eyebrow-pill--etched" data-tone="fuchsia" data-fh="EYE-2.3"><span class="fh-dot fh-dot--live"></span>Oval</p>
```

#### EYE-2.4 · Tab

```html
<p class="fh-eyebrow-pill fh-eyebrow-pill--tab fh-eyebrow-pill--etched" data-tone="sky" data-fh="EYE-2.4"><span class="fh-dot"></span>Tab</p>
```

### EYE-3 · Fills

--tone · --solid · --gradient · --glass · --ghost

#### EYE-3.1 · Tone tinted

```html
<p class="fh-eyebrow-pill fh-eyebrow-pill--tone" data-tone="violet" data-fh="EYE-3.1"><span class="fh-dot fh-dot--live"></span>Tone tinted</p>
```

#### EYE-3.2 · Solid tone

```html
<p class="fh-eyebrow-pill fh-eyebrow-pill--solid" data-tone="sky" data-fh="EYE-3.2"><span class="fh-dot fh-dot--blink"></span>Solid tone</p>
```

#### EYE-3.3 · Gradient sweep

```html
<p class="fh-eyebrow-pill fh-eyebrow-pill--gradient" data-tone="fuchsia" data-fh="EYE-3.3"><span class="fh-dot fh-dot--live"></span>Gradient sweep</p>
```

#### EYE-3.4 · Glass

```html
<p class="fh-eyebrow-pill fh-eyebrow-pill--glass" data-tone="teal" data-fh="EYE-3.4"><span class="fh-dot fh-dot--ring"></span>Glass</p>
```

#### EYE-3.5 · Ghost

```html
<p class="fh-eyebrow-pill fh-eyebrow-pill--ghost" data-tone="lime" data-fh="EYE-3.5"><span class="fh-dot fh-dot--live"></span>Ghost</p>
```

### EYE-4 · Edges

--bracket · --underline

#### EYE-4.1 · Bracketed

```html
<p class="fh-eyebrow-pill fh-eyebrow-pill--bracket" data-tone="amber" data-fh="EYE-4.1"><span class="fh-dot fh-dot--bar"></span>Bracketed</p>
```

#### EYE-4.2 · Underline

```html
<p class="fh-eyebrow-pill fh-eyebrow-pill--underline" data-tone="orange" data-fh="EYE-4.2"><span class="fh-dot"></span>Underline</p>
```

### EYE-5 · Parts

__index · __seg · __count

#### EYE-5.1 · Indexed

```html
<p class="fh-eyebrow-pill fh-eyebrow-pill--etched" data-tone="teal" data-fh="EYE-5.1"><span class="fh-eyebrow-pill__index">02</span>Indexed section</p>
```

#### EYE-5.2 · Segmented

```html
<p class="fh-eyebrow-pill" data-tone="orange" data-fh="EYE-5.2"><span class="fh-dot fh-dot--live"></span><span class="fh-eyebrow-pill__seg">Automation</span><span class="fh-eyebrow-pill__seg"><strong>4 services</strong></span></p>
```

#### EYE-5.3 · Counted

```html
<p class="fh-eyebrow-pill fh-eyebrow-pill--rounded" data-tone="rose" data-fh="EYE-5.3"><span class="fh-dot fh-dot--live"></span>Open roles <span class="fh-eyebrow-pill__count">3</span></p>
```

### EYE-6 · Sentences

--sentence · __action · .fh-kbd

#### EYE-6.1 · Accepting · action

```html
<p class="fh-eyebrow-pill fh-eyebrow-pill--sentence" data-tone="live" data-fh="EYE-6.1"><span class="fh-dot fh-dot--live"></span><span>Now accepting proposals · <strong>Book a call</strong></span></p>
```

#### EYE-6.2 · Agent · avatar

```html
<p class="fh-eyebrow-pill fh-eyebrow-pill--sentence" data-tone="sky" data-fh="EYE-6.2"><span class="fh-avatar fh-avatar--circle"><img src="img/avatars/reginald.webp" alt></span><span>Reginald is online</span><a class="fh-eyebrow-pill__action" href="#c-eyebrow">Talk</a></p>
```

#### EYE-6.3 · Search · shortcut

```html
<p class="fh-eyebrow-pill fh-eyebrow-pill--etched fh-eyebrow-pill--sentence" data-tone="neutral" data-fh="EYE-6.3"><span>Search the docs</span><kbd class="fh-kbd">⌘K</kbd></p>
```

### EYE-7 · Sizes

--sm · --lg

#### EYE-7.1 · Small

```html
<p class="fh-eyebrow-pill fh-eyebrow-pill--sm" data-tone="lime" data-fh="EYE-7.1"><span class="fh-dot"></span>Small</p>
```

#### EYE-7.2 · Large

```html
<p class="fh-eyebrow-pill fh-eyebrow-pill--lg fh-eyebrow-pill--etched" data-tone="accent" data-fh="EYE-7.2"><span class="fh-dot fh-dot--live"></span>Large</p>
```

## CHP · Chips

Chips filter or jump; the selected one fills with its tone. Icons replace the dot. Every variant takes the tone from data-tone.

Classes: `fh-chips` `fh-chips--wrap` `fh-chip` `fh-chips--track` `fh-chip--solid` `fh-icon` `fh-chip--tone` `fh-chip--plain` `fh-chip--underline` `fh-chip--indexed` `fh-chip__index` `fh-chips--indexed` `fh-chip__remove` `fh-chip-card` `fh-chip-card__block` `fh-chip-card__text`

### CHP-1 · Kinds

#### CHP-1.1 · Filter

```html
<div class="fh-chips fh-chips--wrap" data-fh="CHP-1.1">
  <a class="fh-chip" data-tone="sky" href="#c-chips" aria-current="true">Agents</a>
  <a class="fh-chip" data-tone="teal" href="#c-chips">Data</a>
  <a class="fh-chip" data-tone="orange" href="#c-chips">Automation</a>
  <a class="fh-chip" data-tone="fuchsia" href="#c-chips">AI</a>
</div>
```

#### CHP-1.2 · Choice

```html
<div class="fh-chips fh-chips--track" role="group" aria-label="Contact task" data-fh="CHP-1.2">
  <label class="fh-chip" data-tone="lime"><input type="radio" name="task" checked> Start a project</label>
  <label class="fh-chip" data-tone="sky"><input type="radio" name="task"> Book a call</label>
  <label class="fh-chip" data-tone="rose"><input type="radio" name="task"> Support</label>
</div>
```

#### CHP-1.3 · Fill

```html
<div class="fh-chips fh-chips--wrap" data-fh="CHP-1.3">
  <span class="fh-chip fh-chip--solid" data-tone="sky"><i class="fh-icon fh-icon--bot" aria-hidden="true"></i>Solid tone</span>
  <span class="fh-chip fh-chip--tone" data-tone="orange"><i class="fh-icon fh-icon--workflow" aria-hidden="true"></i>Soft tone</span>
  <span class="fh-chip fh-chip--plain">Plain</span>
</div>
```

#### CHP-1.4 · Tabs

```html
<div class="fh-chips fh-chips--wrap" data-fh="CHP-1.4">
  <a class="fh-chip fh-chip--underline" data-tone="lime" href="#c-chips" aria-current="true">Overview</a>
  <a class="fh-chip fh-chip--underline" data-tone="lime" href="#c-chips">Pricing</a>
  <a class="fh-chip fh-chip--underline" data-tone="lime" href="#c-chips">FAQ</a>
</div>
```

### CHP-2 · Parts

#### CHP-2.1 · Indexed

```html
<div class="fh-chips fh-chips--wrap" data-fh="CHP-2.1">
  <span class="fh-chip fh-chip--indexed" data-tone="violet"><b class="fh-chip__index">01</b>Foundations</span>
  <span class="fh-chip fh-chip--indexed" data-tone="amber"><b class="fh-chip__index">03</b>Components</span>
  <span class="fh-chip fh-chip--indexed" data-tone="sky"><b class="fh-chip__index">04</b>Data</span>
</div>
```

#### CHP-2.2 · Counted

```html
<div class="fh-chips fh-chips--indexed fh-chips--wrap" aria-label="Open roles" data-fh="CHP-2.2">
  <a class="fh-chip fh-chip--tone" data-tone="fuchsia" href="#services">Design engineer</a>
  <a class="fh-chip fh-chip--tone" data-tone="sky" href="#services">AI agent builder</a>
  <a class="fh-chip fh-chip--tone" data-tone="orange" href="#services">Automation lead</a>
</div>
```

#### CHP-2.3 · Removable

```html
<div class="fh-chips fh-chips--wrap" data-fh="CHP-2.3">
  <span class="fh-chip fh-chip--plain">Website <button class="fh-chip__remove" type="button" aria-label="Remove Website"></button></span>
  <span class="fh-chip fh-chip--plain">Email <button class="fh-chip__remove" type="button" aria-label="Remove Email"></button></span>
</div>
```

### CHP-3 · Chip cards

Compact cards led by a tone block: categories, people, files.

#### CHP-3.1 · Data architecture

```html
<a class="fh-chip-card" data-tone="teal" href="#c-chip-cards" data-fh="CHP-3.1"><span class="fh-chip-card__block">DA</span><span class="fh-chip-card__text"><b>Data architecture</b><small>4 services</small></span></a>
```

#### CHP-3.2 · Automation

```html
<a class="fh-chip-card" data-tone="orange" href="#c-chip-cards" data-fh="CHP-3.2"><span class="fh-chip-card__block">AU</span><span class="fh-chip-card__text"><b>Automation</b><small>6 services</small></span></a>
```

#### CHP-3.3 · Maya

```html
<a class="fh-chip-card" data-tone="sky" href="#c-chip-cards" data-fh="CHP-3.3"><span class="fh-chip-card__block"><img src="img/avatars/maya.webp" alt></span><span class="fh-chip-card__text"><b>Maya</b><small>Dental agent</small></span></a>
```

#### CHP-3.4 · Scope-of-work.pdf

```html
<a class="fh-chip-card" data-tone="rose" href="#c-chip-cards" data-fh="CHP-3.4"><span class="fh-chip-card__block">PDF</span><span class="fh-chip-card__text"><b>Scope-of-work.pdf</b><small>212 KB · signed</small></span></a>
```

## CUB · Cubes

Tone blocks that carry one value. In a row they walk the hue wheel by 28°, so three facts read as one family.

Classes: `fh-cubes` `fh-cube` `fh-cube--lg` `fh-cube--sm` `fh-icon` `fh-cube--outline` `fh-cube-cards` `fh-cube-card` `fh-cube--xl` `fh-cube-card__text` `fh-cube-card__trend` `fh-cube-card--stack`

### CUB-1 · Cubes

#### CUB-1.1 · Facts

```html
<ul class="fh-cubes" data-tone="teal" data-fh="CUB-1.1">
  <li><b class="fh-cube">$1,250</b> fixed</li>
  <li><b class="fh-cube">14</b> days</li>
  <li><b class="fh-cube">4</b> deliverables</li>
</ul>
```

#### CUB-1.2 · Large

```html
<ul class="fh-cubes" data-tone="fuchsia" data-fh="CUB-1.2">
  <li><b class="fh-cube fh-cube--lg">98</b> score</li>
  <li><b class="fh-cube fh-cube--lg">A+</b> grade</li>
  <li><b class="fh-cube fh-cube--lg">12</b> fixes</li>
</ul>
```

#### CUB-1.3 · Icons

```html
<ul class="fh-cubes" data-tone="sky" data-fh="CUB-1.3">
  <li><b class="fh-cube fh-cube--sm"><i class="fh-icon fh-icon--clock" aria-hidden="true"></i></b> 30 min</li>
  <li><b class="fh-cube fh-cube--sm"><i class="fh-icon fh-icon--video" aria-hidden="true"></i></b> Video call</li>
  <li><b class="fh-cube fh-cube--sm"><i class="fh-icon fh-icon--calendar" aria-hidden="true"></i></b> This week</li>
</ul>
```

#### CUB-1.4 · Outline

```html
<ul class="fh-cubes" data-tone="amber" data-fh="CUB-1.4">
  <li><b class="fh-cube fh-cube--outline">v1.1</b> release</li>
  <li><b class="fh-cube fh-cube--outline">MIT</b> license</li>
  <li><b class="fh-cube fh-cube--outline">183</b> icons</li>
</ul>
```

### CUB-2 · Cube cards

Cards led by a cube: the value is the headline, the text says what it measures.

#### CUB-2.1 · Row

```html
<div class="fh-cube-cards" data-tone="lime" style="--fh-cube-card-min: 12rem" data-fh="CUB-2.1">
  <article class="fh-cube-card"><b class="fh-cube fh-cube--xl">14</b><div class="fh-cube-card__text"><b>Days</b><small>Kickoff to handoff</small></div></article>
  <article class="fh-cube-card"><b class="fh-cube fh-cube--xl">4</b><div class="fh-cube-card__text"><b>Deliverables</b><small>Docs you keep</small></div></article>
  <a class="fh-cube-card" href="#c-cube-cards"><b class="fh-cube fh-cube--xl"><i class="fh-icon fh-icon--calendar" aria-hidden="true"></i></b><div class="fh-cube-card__text"><b>Book a call</b><small>30 min, this week</small></div></a>
</div>
```

#### CUB-2.2 · Trend

```html
<div class="fh-cube-cards" data-tone="orange" style="--fh-cube-card-min: 12rem" data-fh="CUB-2.2">
  <article class="fh-cube-card"><b class="fh-cube fh-cube--lg">$184k</b><div class="fh-cube-card__text"><b>Pipeline</b><small>Open deals · sample</small></div><span class="fh-cube-card__trend" data-dir="up">▲ 12%</span></article>
  <article class="fh-cube-card"><b class="fh-cube fh-cube--lg">2.4h</b><div class="fh-cube-card__text"><b>First reply</b><small>Median · sample</small></div><span class="fh-cube-card__trend" data-dir="down">▼ 8%</span></article>
</div>
```

#### CUB-2.3 · Stacked

```html
<div class="fh-cube-cards" data-tone="violet" style="--fh-cube-card-min: 14rem" data-fh="CUB-2.3">
  <article class="fh-cube-card fh-cube-card--stack"><b class="fh-cube fh-cube--xl">$1,695</b><div class="fh-cube-card__text"><b>AI agent</b><small>Per month, after setup</small></div><ul class="fh-cubes"><li><b class="fh-cube fh-cube--sm">24/7</b> coverage</li><li><b class="fh-cube fh-cube--sm">3</b> channels</li></ul></article>
  <article class="fh-cube-card fh-cube-card--stack"><b class="fh-cube fh-cube--xl">1,284</b><div class="fh-cube-card__text"><b>Inquiries</b><small>Last 30 days · sample</small></div><ul class="fh-cubes"><li><b class="fh-cube fh-cube--sm">+12%</b> vs last</li><li><b class="fh-cube fh-cube--sm">64%</b> booked</li></ul></article>
</div>
```

## CRD · Card in a ruled grid

Dashed cells that share their rules, a tone-colored meta line, and a title link that covers the whole card. Narrow cards stack their footer.

Classes: `fh-grid` `fh-grid--ruled` `fh-grid--etched` `fh-card` `fh-card__meta` `fh-card__title` `fh-card__body` `fh-card__footer` `fh-card__price` `fh-action`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/content/#CRD.

## STA · Stats strip

One column, two, or a row, depending on the slot.

Classes: `fh-stats`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/content/#STA.

## KVL · Key value list

Label / value rows on etched rules: label on the left, value on the right. Two columns of rows from 38rem; __full spans both. --fields puts a field beside each label; --single keeps one column. Row spacing is set once for the page with data-fh-rows (sm · md · lg · xl) and applies to every table and key value list; data-fh-rows-select on a segmented switch changes it live.

Classes: `fh-kv` `fh-kv--single` `fh-kv--fields` `fh-input` `fh-kv__full` `fh-textarea` `fh-segmented` `fh-segmented--sm` `fh-sr-only`

### KVL-1 · Key value list

#### KVL-1.1 · Read

```html
<dl class="fh-kv fh-kv--single" style="max-inline-size: 24rem" data-fh="KVL-1.1">
  <div><dt>County</dt><dd>Travis</dd></div>
  <div><dt>Parcel</dt><dd>0219-0402-11</dd></div>
  <div><dt>Year built</dt><dd>1987</dd></div>
  <div><dt>Lot</dt><dd>0.21 ac</dd></div>
</dl>
```

#### KVL-1.2 · Fields

```html
<dl class="fh-kv fh-kv--fields" data-fh="KVL-1.2">
  <div><dt><label for="kv-legal">Legal name</label></dt><dd><input class="fh-input" id="kv-legal" value="Acme Supply Co. LLC"></dd></div>
  <div><dt><label for="kv-dba">DBA</label></dt><dd><input class="fh-input" id="kv-dba" value="Acme"></dd></div>
  <div class="fh-kv__full"><dt><label for="kv-about">About</label></dt><dd><textarea class="fh-textarea" id="kv-about" rows="2">Tools and parts for small builders.</textarea></dd></div>
</dl>
```

#### KVL-1.3 · Mixed

```html
<dl class="fh-kv" data-fh="KVL-1.3">
  <div><dt>Owner</dt><dd>Maple Row Holdings LLC</dd></div>
  <div><dt>Since</dt><dd>2016</dd></div>
  <div><dt>Mortgage</dt><dd>$212,400</dd></div>
  <div><dt>Liens</dt><dd>None found</dd></div>
  <div class="fh-kv__full"><dt>Legal description</dt><dd>Lot 4, Block B, Cedar Ridge Section 2, a subdivision in Travis County, Texas</dd></div>
</dl>
```

### KVL-2 · Row spacing

#### KVL-2.1 · Row spacing

```html
<fieldset class="fh-segmented fh-segmented--sm" data-fh="KVL-2.1">
  <legend class="fh-sr-only">Row spacing</legend>
  <label><input type="radio" name="kv-rows" value="sm" data-fh-rows-select> S</label>
  <label><input type="radio" name="kv-rows" value="md" data-fh-rows-select checked> M</label>
  <label><input type="radio" name="kv-rows" value="lg" data-fh-rows-select> L</label>
  <label><input type="radio" name="kv-rows" value="xl" data-fh-rows-select> XL</label>
</fieldset>
```

## CKL · Checklist

Classes: `fh-checklist`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/content/#CKL.

## STP · Steps

Numbered because order matters.

Classes: `fh-steps` `fh-steps__mark`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/content/#STP.

## CAR · Carousel

Multi-panel slider modelled on X media posts: swipe or scroll, panels snap, and the current dot stretches into a longer bubble. Native CSS dots in Chromium; the enhancer draws the same dots elsewhere.

Classes: `fh-carousel` `fh-carousel__track` `fh-carousel__slide` `fh-label` `fh-stats` `fh-carousel__count`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/content/#CAR.

## DEK · Stacking deck

Panels that pin as you scroll: each next one slides up over the last, and the ones behind shrink and darken into a deck with their top edges showing. Here it opens with a hero handoff (--hero): a full-height first card the deck slides in over. Pure CSS: sticky for the stack, a scroll-driven animation for the recede. Scroll the page.

Classes: `fh-deck` `fh-deck__card` `fh-deck__media` `fh-deck__caption` `fh-deck__index` `fh-deck__title` `fh-deck__body` `fh-label` `fh-lede` `fh-deck--hero` `fh-title` `fh-deck--fade` `fh-deck--blur` `fh-deck--lift` `fh-deck--fan` `fh-deck__card--split` `fh-body` `fh-deck__caption--top` `fh-deck__meta` `fh-deck--count` `fh-deck--x` `fh-deck--reverse`

### DEK-1 · Stacking deck

The same deck without the hero: every card is the same size and starts the stack. Number left, title right, a hairline under both; a card is a tone surface or fills with __media.

#### DEK-1.1 · Tone cards · media

```html
<ol class="fh-deck" data-fh="DEK-1.1">
  <li class="fh-deck__card" data-tone="orange">
    <img class="fh-deck__media" src="img/backdrop/firehorse-horse.webp" alt>
    <p class="fh-deck__caption"><span class="fh-deck__index">01</span><span class="fh-deck__title">Branding</span></p>
  </li>
  <li class="fh-deck__card" data-tone="sky">
    <div class="fh-deck__body"><p class="fh-label">Practice 02</p><p class="fh-lede">Sites and products that hold up on every screen.</p></div>
    <p class="fh-deck__caption"><span class="fh-deck__index">02</span><span class="fh-deck__title">Digital</span></p>
  </li>
  <li class="fh-deck__card" data-tone="violet">
    <div class="fh-deck__body"><p class="fh-label">Practice 03</p><p class="fh-lede">Motion systems, from a hover to a launch film.</p></div>
    <p class="fh-deck__caption"><span class="fh-deck__index">03</span><span class="fh-deck__title">Motion</span></p>
  </li>
  <li class="fh-deck__card" data-tone="lime">
    <div class="fh-deck__body"><p class="fh-label">Practice 04</p><p class="fh-lede">Shoots, casting and art direction for campaigns.</p></div>
    <p class="fh-deck__caption"><span class="fh-deck__index">04</span><span class="fh-deck__title">Art direction</span></p>
  </li>
</ol>
```

### DEK-2 · Hero handoff

#### DEK-2.1 · Hero handoff

```html
<ol class="fh-deck fh-deck--hero" data-fh="DEK-2.1">
  <li class="fh-deck__card" data-tone="orange">
    <img class="fh-deck__media" src="img/backdrop/firehorse-horse.webp" alt>
    <div class="fh-deck__body"><p class="fh-title">Ink, etch &amp; ember. A studio in four practices.</p></div>
    <p class="fh-deck__caption"><span class="fh-deck__index">Studio</span><span class="fh-deck__title">(Scroll)</span></p>
  </li>
  <li class="fh-deck__card" data-tone="amber">
    <div class="fh-deck__body"><p class="fh-label">Practice 01</p><p class="fh-lede">Marks, type and systems that hold together.</p></div>
    <p class="fh-deck__caption"><span class="fh-deck__index">01</span><span class="fh-deck__title">Branding</span></p>
  </li>
  <li class="fh-deck__card" data-tone="sky">
    <div class="fh-deck__body"><p class="fh-label">Practice 02</p><p class="fh-lede">Sites and products that hold up on every screen.</p></div>
    <p class="fh-deck__caption"><span class="fh-deck__index">02</span><span class="fh-deck__title">Digital</span></p>
  </li>
  <li class="fh-deck__card" data-tone="violet">
    <div class="fh-deck__body"><p class="fh-label">Practice 03</p><p class="fh-lede">Motion systems, from a hover to a launch film.</p></div>
    <p class="fh-deck__caption"><span class="fh-deck__index">03</span><span class="fh-deck__title">Motion</span></p>
  </li>
  <li class="fh-deck__card" data-tone="lime">
    <div class="fh-deck__body"><p class="fh-label">Practice 04</p><p class="fh-lede">Shoots, casting and art direction for campaigns.</p></div>
    <p class="fh-deck__caption"><span class="fh-deck__index">04</span><span class="fh-deck__title">Art direction</span></p>
  </li>
</ol>
```

### DEK-3 · Recede styles

How the cards behind go back. --fade fades them, --blur blurs them, --lift tilts them back in 3D, --fan turns each a degree or two and shows more of it. Each has a knob, and they combine. Scroll inside each box.

#### DEK-3.1 · Fade

```html
<ol class="fh-deck fh-deck--fade" style="--fh-deck-top: 0.75rem; --fh-deck-height: 15rem; --fh-deck-gap: 5rem" data-fh="DEK-3.1">
  <li class="fh-deck__card" data-tone="orange">
    <p class="fh-deck__caption"><span class="fh-deck__index">01</span><span class="fh-deck__title">Branding</span></p>
  </li>
  <li class="fh-deck__card" data-tone="sky">
    <p class="fh-deck__caption"><span class="fh-deck__index">02</span><span class="fh-deck__title">Digital</span></p>
  </li>
  <li class="fh-deck__card" data-tone="violet">
    <p class="fh-deck__caption"><span class="fh-deck__index">03</span><span class="fh-deck__title">Motion</span></p>
  </li>
  <li class="fh-deck__card" data-tone="lime">
    <p class="fh-deck__caption"><span class="fh-deck__index">04</span><span class="fh-deck__title">Art direction</span></p>
  </li>
</ol>
```

#### DEK-3.2 · Blur

```html
<ol class="fh-deck fh-deck--blur" style="--fh-deck-top: 0.75rem; --fh-deck-height: 15rem; --fh-deck-gap: 5rem" data-fh="DEK-3.2">
  <li class="fh-deck__card" data-tone="orange">
    <p class="fh-deck__caption"><span class="fh-deck__index">01</span><span class="fh-deck__title">Branding</span></p>
  </li>
  <li class="fh-deck__card" data-tone="sky">
    <p class="fh-deck__caption"><span class="fh-deck__index">02</span><span class="fh-deck__title">Digital</span></p>
  </li>
  <li class="fh-deck__card" data-tone="violet">
    <p class="fh-deck__caption"><span class="fh-deck__index">03</span><span class="fh-deck__title">Motion</span></p>
  </li>
  <li class="fh-deck__card" data-tone="lime">
    <p class="fh-deck__caption"><span class="fh-deck__index">04</span><span class="fh-deck__title">Art direction</span></p>
  </li>
</ol>
```

#### DEK-3.3 · Lift

```html
<ol class="fh-deck fh-deck--lift" style="--fh-deck-top: 0.75rem; --fh-deck-height: 15rem; --fh-deck-gap: 5rem" data-fh="DEK-3.3">
  <li class="fh-deck__card" data-tone="orange">
    <p class="fh-deck__caption"><span class="fh-deck__index">01</span><span class="fh-deck__title">Branding</span></p>
  </li>
  <li class="fh-deck__card" data-tone="sky">
    <p class="fh-deck__caption"><span class="fh-deck__index">02</span><span class="fh-deck__title">Digital</span></p>
  </li>
  <li class="fh-deck__card" data-tone="violet">
    <p class="fh-deck__caption"><span class="fh-deck__index">03</span><span class="fh-deck__title">Motion</span></p>
  </li>
  <li class="fh-deck__card" data-tone="lime">
    <p class="fh-deck__caption"><span class="fh-deck__index">04</span><span class="fh-deck__title">Art direction</span></p>
  </li>
</ol>
```

#### DEK-3.4 · Fan

```html
<ol class="fh-deck fh-deck--fan" style="--fh-deck-top: 0.75rem; --fh-deck-height: 15rem; --fh-deck-gap: 5rem" data-fh="DEK-3.4">
  <li class="fh-deck__card" data-tone="orange">
    <p class="fh-deck__caption"><span class="fh-deck__index">01</span><span class="fh-deck__title">Branding</span></p>
  </li>
  <li class="fh-deck__card" data-tone="sky">
    <p class="fh-deck__caption"><span class="fh-deck__index">02</span><span class="fh-deck__title">Digital</span></p>
  </li>
  <li class="fh-deck__card" data-tone="violet">
    <p class="fh-deck__caption"><span class="fh-deck__index">03</span><span class="fh-deck__title">Motion</span></p>
  </li>
  <li class="fh-deck__card" data-tone="lime">
    <p class="fh-deck__caption"><span class="fh-deck__index">04</span><span class="fh-deck__title">Art direction</span></p>
  </li>
</ol>
```

### DEK-4 · Cards and captions

__card--split puts the picture on one half and the words on the other (picture over text in a narrow slot). __caption--top moves the caption up; __meta adds a small mono line. --count adds a 01 / 04 readout that follows the card in front.

#### DEK-4.1 · Split card

```html
<ol class="fh-deck" style="--fh-deck-top: 0.75rem; --fh-deck-height: 20rem; --fh-deck-gap: 5rem" data-fh="DEK-4.1">
  <li class="fh-deck__card fh-deck__card--split" data-tone="orange">
    <img class="fh-deck__media" src="img/backdrop/firehorse-horse.webp" alt>
    <div class="fh-deck__body"><p class="fh-label">Case 01</p><p class="fh-body">A mark and a system that hold together.</p></div>
    <p class="fh-deck__caption"><span class="fh-deck__index">01</span><span class="fh-deck__title">Branding</span></p>
  </li>
  <li class="fh-deck__card fh-deck__card--split" data-tone="sky">
    <img class="fh-deck__media" src="img/backdrop/firehorse-hoof.webp" alt>
    <div class="fh-deck__body"><p class="fh-label">Case 02</p><p class="fh-body">Sites and products for every screen.</p></div>
    <p class="fh-deck__caption"><span class="fh-deck__index">02</span><span class="fh-deck__title">Digital</span></p>
  </li>
  <li class="fh-deck__card fh-deck__card--split" data-tone="violet">
    <img class="fh-deck__media" src="img/backdrop/lipizzaner-horse.webp" alt>
    <div class="fh-deck__body"><p class="fh-label">Case 03</p><p class="fh-body">A house style, set in motion.</p></div>
    <p class="fh-deck__caption"><span class="fh-deck__index">03</span><span class="fh-deck__title">Motion</span></p>
  </li>
</ol>
```

#### DEK-4.2 · Caption top · meta

```html
<ol class="fh-deck" style="--fh-deck-top: 0.75rem; --fh-deck-height: 15rem; --fh-deck-gap: 5rem" data-fh="DEK-4.2">
  <li class="fh-deck__card" data-tone="orange">
    <p class="fh-deck__caption fh-deck__caption--top"><span class="fh-deck__index">01</span><span class="fh-deck__title">Branding<small class="fh-deck__meta">2026 · Identity</small></span></p>
  </li>
  <li class="fh-deck__card" data-tone="sky">
    <p class="fh-deck__caption fh-deck__caption--top"><span class="fh-deck__index">02</span><span class="fh-deck__title">Digital<small class="fh-deck__meta">2025 · Web, product</small></span></p>
  </li>
  <li class="fh-deck__card" data-tone="violet">
    <p class="fh-deck__caption fh-deck__caption--top"><span class="fh-deck__index">03</span><span class="fh-deck__title">Motion<small class="fh-deck__meta">2025 · Film, UI</small></span></p>
  </li>
  <li class="fh-deck__card" data-tone="lime">
    <p class="fh-deck__caption fh-deck__caption--top"><span class="fh-deck__index">04</span><span class="fh-deck__title">Art direction<small class="fh-deck__meta">2024 · Campaign</small></span></p>
  </li>
</ol>
```

#### DEK-4.3 · Count

```html
<ol class="fh-deck fh-deck--count" style="--fh-deck-top: 0.75rem; --fh-deck-height: 15rem; --fh-deck-gap: 5rem" data-fh="DEK-4.3">
  <li class="fh-deck__card" data-tone="orange">
    <p class="fh-deck__caption"><span class="fh-deck__index">01</span><span class="fh-deck__title">Branding</span></p>
  </li>
  <li class="fh-deck__card" data-tone="sky">
    <p class="fh-deck__caption"><span class="fh-deck__index">02</span><span class="fh-deck__title">Digital</span></p>
  </li>
  <li class="fh-deck__card" data-tone="violet">
    <p class="fh-deck__caption"><span class="fh-deck__index">03</span><span class="fh-deck__title">Motion</span></p>
  </li>
  <li class="fh-deck__card" data-tone="lime">
    <p class="fh-deck__caption"><span class="fh-deck__index">04</span><span class="fh-deck__title">Art direction</span></p>
  </li>
</ol>
```

### DEK-5 · Direction

--x runs the deck sideways in its own scroll row; cards pin at the left edge and recede to the left. --reverse keeps the cards in a pile at the bottom, and the front one rises off it as you scroll.

#### DEK-5.1 · Sideways

```html
<ol class="fh-deck fh-deck--x" style="--fh-deck-height: 16rem; --fh-deck-width: min(80%, 22rem)" data-fh="DEK-5.1">
  <li class="fh-deck__card" data-tone="orange">
    <p class="fh-deck__caption"><span class="fh-deck__index">01</span><span class="fh-deck__title">Branding</span></p>
  </li>
  <li class="fh-deck__card" data-tone="sky">
    <p class="fh-deck__caption"><span class="fh-deck__index">02</span><span class="fh-deck__title">Digital</span></p>
  </li>
  <li class="fh-deck__card" data-tone="violet">
    <p class="fh-deck__caption"><span class="fh-deck__index">03</span><span class="fh-deck__title">Motion</span></p>
  </li>
  <li class="fh-deck__card" data-tone="lime">
    <p class="fh-deck__caption"><span class="fh-deck__index">04</span><span class="fh-deck__title">Art direction</span></p>
  </li>
</ol>
```

#### DEK-5.2 · Reverse

```html
<ol class="fh-deck fh-deck--reverse" style="--fh-deck-bottom: 0.75rem; --fh-deck-height: 15rem; --fh-deck-gap: 5rem" data-fh="DEK-5.2">
  <li class="fh-deck__card" data-tone="orange">
    <p class="fh-deck__caption"><span class="fh-deck__index">01</span><span class="fh-deck__title">Branding</span></p>
  </li>
  <li class="fh-deck__card" data-tone="sky">
    <p class="fh-deck__caption"><span class="fh-deck__index">02</span><span class="fh-deck__title">Digital</span></p>
  </li>
  <li class="fh-deck__card" data-tone="violet">
    <p class="fh-deck__caption"><span class="fh-deck__index">03</span><span class="fh-deck__title">Motion</span></p>
  </li>
  <li class="fh-deck__card" data-tone="lime">
    <p class="fh-deck__caption"><span class="fh-deck__index">04</span><span class="fh-deck__title">Art direction</span></p>
  </li>
</ol>
```

## MBR · Member card

A pass for one person: art on top, a big name with an ID number, a dotted rule, mono facts and a round "made by" stamp; --plates splits art and body into two pieces with a tagline, a quiet ID row and a holographic __badge. The art glitches (--smear drags it sideways) (blocks of the picture shift colour, ASCII glyphs flicker) and the stamp turns slowly; all still under reduced motion. data-fh-scheme="light" gives the paper look on a dark page; data-tone colours the stamp and the --glow.

Classes: `fh-member` `fh-member--glow` `fh-member__art` `fh-member__glyphs` `fh-member__body` `fh-member__name` `fh-member__id` `fh-member__facts` `fh-member__role` `fh-member__stamp` `fh-member--plates` `fh-member--smear` `fh-member__tagline` `fh-member__meta` `fh-member__badge`

### MBR-1 · Pass

#### MBR-1.1 · Paper · glow

```html
<article class="fh-member fh-member--glow" data-tone="orange" data-fh-scheme="light" data-fh="MBR-1.1">
  <div class="fh-member__art"><img src="img/backdrop/firehorse-horse.webp" alt><span class="fh-member__glyphs" aria-hidden="true"></span></div>
  <div class="fh-member__body">
    <h3 class="fh-member__name">Maya Okafor</h3>
    <span class="fh-member__id">#291832</span>
    <dl class="fh-member__facts">
      <div><dt>Account creation</dt><dd>Fri 10 Apr, 2026</dd></div>
      <div><dt>Current</dt><dd>Active</dd></div>
    </dl>
    <p class="fh-member__role">Studio team<br>Senior developer</p>
    <svg class="fh-member__stamp" viewBox="0 0 100 100" aria-hidden="true"><defs><path id="stamp-mbr-1-1" d="M50 50m-36 0a36 36 0 1 1 72 0a36 36 0 1 1-72 0"></path></defs><circle cx="50" cy="50" r="47"></circle><circle cx="50" cy="50" r="27"></circle><text><textPath href="#stamp-mbr-1-1">Made by Firehorse · Made by Firehorse ·</textPath></text><path d="M50 38l3 9 9 3-9 3-3 9-3-9-9-3 9-3z"></path></svg>
  </div>
</article>
```

#### MBR-1.2 · Follows the scheme

```html
<article class="fh-member" data-tone="violet" data-fh="MBR-1.2">
  <div class="fh-member__art"><img src="img/backdrop/lipizzaner-horse.webp" alt><span class="fh-member__glyphs" aria-hidden="true"></span></div>
  <div class="fh-member__body">
    <h3 class="fh-member__name">Mateo Alvarez</h3>
    <span class="fh-member__id">#291847</span>
    <dl class="fh-member__facts">
      <div><dt>Account creation</dt><dd>Mon 2 Nov, 2026</dd></div>
      <div><dt>Current</dt><dd>Active</dd></div>
    </dl>
    <p class="fh-member__role">Design team<br>Art director</p>
    <svg class="fh-member__stamp" viewBox="0 0 100 100" aria-hidden="true"><defs><path id="stamp-mbr-1-2" d="M50 50m-36 0a36 36 0 1 1 72 0a36 36 0 1 1-72 0"></path></defs><circle cx="50" cy="50" r="47"></circle><circle cx="50" cy="50" r="27"></circle><text><textPath href="#stamp-mbr-1-2">Made by Firehorse · Made by Firehorse ·</textPath></text><path d="M50 38l3 9 9 3-9 3-3 9-3-9-9-3 9-3z"></path></svg>
  </div>
</article>
```

#### MBR-1.3 · Clean art · no stamp

```html
<article class="fh-member" data-tone="sky" data-fh="MBR-1.3">
  <div class="fh-member__art"><img src="img/backdrop/firehorse-hoof.webp" alt></div>
  <div class="fh-member__body">
    <h3 class="fh-member__name">Isla Moreau</h3>
    <span class="fh-member__id">#291903</span>
    <dl class="fh-member__facts">
      <div><dt>Account creation</dt><dd>Tue 14 Jul, 2026</dd></div>
      <div><dt>Current</dt><dd>Away</dd></div>
    </dl>
    <p class="fh-member__role">Ops team<br>Producer</p>
  </div>
</article>
```

### MBR-2 · Plates

#### MBR-2.1 · Plates · smear · badge

```html
<article class="fh-member fh-member--plates fh-member--smear" data-tone="sky" data-fh="MBR-2.1">
  <div class="fh-member__art"><img src="img/backdrop/lipizzaner-horse.webp" alt><span class="fh-member__glyphs" aria-hidden="true"></span></div>
  <div class="fh-member__body">
    <h3 class="fh-member__name">Ruben</h3>
    <p class="fh-member__tagline">Gifted big shot</p>
    <p class="fh-member__meta"><span>#291832</span><span>Owner</span></p>
    <p class="fh-member__role">Fri 10 Apr, 2026</p>
    <span class="fh-member__badge" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 4v16M12 9l-4-3M12 9l4-3M12 13l-5-3M12 13l5-3M12 17l-4-3M12 17l4-3"></path></svg></span>
  </div>
</article>
```

#### MBR-2.2 · Plates · paper · glow

```html
<article class="fh-member fh-member--plates fh-member--glow" data-tone="amber" data-fh-scheme="light" data-fh="MBR-2.2">
  <div class="fh-member__art"><img src="img/backdrop/firehorse-horse.webp" alt><span class="fh-member__glyphs" aria-hidden="true"></span></div>
  <div class="fh-member__body">
    <h3 class="fh-member__name">Noor</h3>
    <p class="fh-member__tagline">Quiet operator</p>
    <p class="fh-member__meta"><span>#291856</span><span>Admin</span></p>
    <p class="fh-member__role">Sat 2 May, 2026</p>
    <span class="fh-member__badge" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 4v16M12 9l-4-3M12 9l4-3M12 13l-5-3M12 13l5-3M12 17l-4-3M12 17l4-3"></path></svg></span>
  </div>
</article>
```

#### MBR-2.3 · Plates · recolour

```html
<article class="fh-member fh-member--plates" data-tone="fuchsia" data-fh="MBR-2.3">
  <div class="fh-member__art"><img src="img/backdrop/firehorse-hoof.webp" alt><span class="fh-member__glyphs" aria-hidden="true"></span></div>
  <div class="fh-member__body">
    <h3 class="fh-member__name">Theo</h3>
    <p class="fh-member__tagline">First rider</p>
    <p class="fh-member__meta"><span>#291871</span><span>Member</span></p>
    <p class="fh-member__role">Sun 7 Jun, 2026</p>
    <span class="fh-member__badge" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 4v16M12 9l-4-3M12 9l4-3M12 13l-5-3M12 13l5-3M12 17l-4-3M12 17l4-3"></path></svg></span>
  </div>
</article>
```

## STY · Story card

A tall card in three parts: a logo on top, a quote and a link at the bottom, and a wide open field between them that carries the story. Here the field draws a brand mark in shimmering vertical lines; hover brings it up. Solid fills come from the Firehorse palette: data-tone on its own, --deep toward ink, --ink, --paper. The whole card is the link.

Classes: `fh-story` `fh-story--deep` `fh-story__head` `fh-story__logo` `fh-story__field` `fh-story__field--lines` `fh-story__mark` `fh-story__foot` `fh-story__quote` `fh-story__link` `fh-story--ink` `fh-story__figure` `fh-story__figure-label` `fh-story--paper` `fh-story__media` `fh-story__tag` `fh-story--glare` `fh-story--duotone` `fh-progress-field` `fh-progress` `fh-story__ring-wrap` `fh-story__ring` `fh-story__chart`

### STY-1 · Solid

#### STY-1.1 · Violet · deep · lines

```html
<article class="fh-story fh-story--deep" data-tone="violet" data-fh="STY-1.1">
  <header class="fh-story__head"><span class="fh-story__logo"><svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="33" fill="none" stroke-width="16"></circle></svg>Halcyon</span></header>
  <div class="fh-story__field fh-story__field--lines" aria-hidden="true"><svg class="fh-story__mark" viewBox="0 0 100 100"><circle cx="50" cy="50" r="33" fill="none" stroke-width="16"></circle></svg></div>
  <footer class="fh-story__foot">
    <p class="fh-story__quote">Halcyon keeps a million rooms in sync with Firehorse.</p>
    <a class="fh-story__link" href="#STY">Read Halcyon's story</a>
  </footer>
</article>
```

#### STY-1.2 · Ink · lines

```html
<article class="fh-story fh-story--ink" data-tone="violet" data-fh="STY-1.2">
  <header class="fh-story__head"><span class="fh-story__logo"><svg viewBox="0 0 100 100" aria-hidden="true"><polygon points="38,6 74,6 52,42 78,42 30,96 44,56 22,56"></polygon></svg>Voltline</span></header>
  <div class="fh-story__field fh-story__field--lines" aria-hidden="true"><svg class="fh-story__mark" viewBox="0 0 100 100"><polygon points="38,6 74,6 52,42 78,42 30,96 44,56 22,56"></polygon></svg></div>
  <footer class="fh-story__foot">
    <p class="fh-story__quote">Voltline ships every dashboard on one design system.</p>
    <a class="fh-story__link" href="#STY">Read Voltline's story</a>
  </footer>
</article>
```

#### STY-1.3 · Ember · lines

```html
<article class="fh-story" data-tone="accent" data-fh="STY-1.3">
  <header class="fh-story__head"><span class="fh-story__logo"><svg viewBox="0 0 100 100" aria-hidden="true"><polygon points="50,4 90,27 90,73 50,96 10,73 10,27"></polygon></svg>Hexwork</span></header>
  <div class="fh-story__field fh-story__field--lines" aria-hidden="true"><svg class="fh-story__mark" viewBox="0 0 100 100"><polygon points="50,4 90,27 90,73 50,96 10,73 10,27"></polygon></svg></div>
  <footer class="fh-story__foot">
    <p class="fh-story__quote">Hexwork cut its UI code in half in a quarter.</p>
    <a class="fh-story__link" href="#STY">Read Hexwork's story</a>
  </footer>
</article>
```

#### STY-1.4 · Lime · figure

```html
<article class="fh-story" data-tone="lime" data-fh="STY-1.4">
  <header class="fh-story__head"><span class="fh-story__logo"><svg viewBox="0 0 100 100" aria-hidden="true"><path d="M22 90V46a28 28 0 0 1 56 0v44" fill="none" stroke-width="16"></path></svg>Stirrup</span></header>
  <div class="fh-story__field"><p class="fh-story__figure">98%</p><p class="fh-story__figure-label">Screens moved</p></div>
  <footer class="fh-story__foot">
    <p class="fh-story__quote">Stirrup moved 98% of its screens in six weeks.</p>
    <a class="fh-story__link" href="#STY">Read Stirrup's story</a>
  </footer>
</article>
```

#### STY-1.5 · Sky · deep · lines

```html
<article class="fh-story fh-story--deep" data-tone="sky" data-fh="STY-1.5">
  <header class="fh-story__head"><span class="fh-story__logo"><svg viewBox="0 0 100 100" aria-hidden="true"><path d="M6 60c14-28 30-28 44 0s30 28 44 0" fill="none" stroke-width="16"></path></svg>Northwind</span></header>
  <div class="fh-story__field fh-story__field--lines" aria-hidden="true"><svg class="fh-story__mark" viewBox="0 0 100 100"><path d="M6 60c14-28 30-28 44 0s30 28 44 0" fill="none" stroke-width="16"></path></svg></div>
  <footer class="fh-story__foot">
    <p class="fh-story__quote">Northwind reads every surface the same, light or dark.</p>
    <a class="fh-story__link" href="#STY">Read Northwind's story</a>
  </footer>
</article>
```

#### STY-1.6 · Paper · lines

```html
<article class="fh-story fh-story--paper" data-tone="teal" data-fh="STY-1.6">
  <header class="fh-story__head"><span class="fh-story__logo"><svg viewBox="0 0 100 100" aria-hidden="true"><rect x="10" y="14" width="80" height="18" rx="9"></rect><rect x="10" y="41" width="80" height="18" rx="9"></rect><rect x="10" y="68" width="80" height="18" rx="9"></rect></svg>Lumen</span></header>
  <div class="fh-story__field fh-story__field--lines" aria-hidden="true"><svg class="fh-story__mark" viewBox="0 0 100 100"><rect x="10" y="14" width="80" height="18" rx="9"></rect><rect x="10" y="41" width="80" height="18" rx="9"></rect><rect x="10" y="68" width="80" height="18" rx="9"></rect></svg></div>
  <footer class="fh-story__foot">
    <p class="fh-story__quote">Lumen builds its docs, app and emails from one set of tokens.</p>
    <a class="fh-story__link" href="#STY">Read Lumen's story</a>
  </footer>
</article>
```

### STY-2 · Picture and glare

__media puts a picture behind the card with a scrim top and bottom; --duotone washes it in the tone. --glare sends a band of light across the card every few seconds, and quickly on hover, over a picture or a solid fill.

#### STY-2.1 · Picture

```html
<article class="fh-story" data-tone="orange" data-fh="STY-2.1">
  <img class="fh-story__media" src="img/backdrop/firehorse-horse.webp" alt>
  <header class="fh-story__head"><span class="fh-story__logo"><svg viewBox="0 0 100 100" aria-hidden="true"><path d="M22 90V46a28 28 0 0 1 56 0v44" fill="none" stroke-width="16"></path></svg>Stirrup</span><span class="fh-story__tag">Case study</span></header>
  <div class="fh-story__field" aria-hidden="true"></div>
  <footer class="fh-story__foot">
    <p class="fh-story__quote">Stirrup's riders book a lesson in under a minute.</p>
    <a class="fh-story__link" href="#STY">Read Stirrup's story</a>
  </footer>
</article>
```

#### STY-2.2 · Picture · glare

```html
<article class="fh-story fh-story--glare" data-tone="amber" data-fh="STY-2.2">
  <img class="fh-story__media" src="img/backdrop/lipizzaner-horse.webp" alt>
  <header class="fh-story__head"><span class="fh-story__logo"><svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="33" fill="none" stroke-width="16"></circle></svg>Halcyon</span><span class="fh-story__tag">Launch</span></header>
  <div class="fh-story__field" aria-hidden="true"></div>
  <footer class="fh-story__foot">
    <p class="fh-story__quote">Halcyon launched its new site in a single sprint.</p>
    <a class="fh-story__link" href="#STY">Read Halcyon's story</a>
  </footer>
</article>
```

#### STY-2.3 · Duotone

```html
<article class="fh-story fh-story--deep fh-story--duotone" data-tone="violet" data-fh="STY-2.3">
  <img class="fh-story__media" src="img/backdrop/firehorse-hoof.webp" alt>
  <header class="fh-story__head"><span class="fh-story__logo"><svg viewBox="0 0 100 100" aria-hidden="true"><path d="M6 60c14-28 30-28 44 0s30 28 44 0" fill="none" stroke-width="16"></path></svg>Northwind</span><span class="fh-story__tag">Archive</span></header>
  <div class="fh-story__field" aria-hidden="true"></div>
  <footer class="fh-story__foot">
    <p class="fh-story__quote">Northwind's archive, re-set in its own type.</p>
    <a class="fh-story__link" href="#STY">Read Northwind's story</a>
  </footer>
</article>
```

#### STY-2.4 · Fuchsia · deep · glare · lines

```html
<article class="fh-story fh-story--deep fh-story--glare" data-tone="fuchsia" data-fh="STY-2.4">
  <header class="fh-story__head"><span class="fh-story__logo"><svg viewBox="0 0 100 100" aria-hidden="true"><polygon points="38,6 74,6 52,42 78,42 30,96 44,56 22,56"></polygon></svg>Voltline</span></header>
  <div class="fh-story__field fh-story__field--lines" aria-hidden="true"><svg class="fh-story__mark" viewBox="0 0 100 100"><polygon points="38,6 74,6 52,42 78,42 30,96 44,56 22,56"></polygon></svg></div>
  <footer class="fh-story__foot">
    <p class="fh-story__quote">Voltline's team ships twice as often since the move.</p>
    <a class="fh-story__link" href="#STY">Read Voltline's story</a>
  </footer>
</article>
```

### STY-3 · In the field

The open middle holds what the story needs: Firehorse progress fields, a __ring that fills to --value as it scrolls in, a __chart of columns drawn in lines, a live indeterminate bar with a count. Anything else fits too.

#### STY-3.1 · Progress

```html
<article class="fh-story fh-story--deep" data-tone="amber" data-fh="STY-3.1">
  <header class="fh-story__head"><span class="fh-story__logo"><svg viewBox="0 0 100 100" aria-hidden="true"><polygon points="50,4 90,27 90,73 50,96 10,73 10,27"></polygon></svg>Hexwork</span><span class="fh-story__tag">Week 4</span></header>
  <div class="fh-story__field">
    <div class="fh-progress-field"><span>Migration</span><output>72%</output><progress class="fh-progress" value="72" max="100">72%</progress></div>
    <div class="fh-progress-field"><span>Tests</span><output>100%</output><progress class="fh-progress" value="100" max="100">100%</progress></div>
    <div class="fh-progress-field"><span>Docs</span><output>40%</output><progress class="fh-progress" value="40" max="100">40%</progress></div>
  </div>
  <footer class="fh-story__foot">
    <p class="fh-story__quote">Hexwork's move to Firehorse, week four.</p>
    <a class="fh-story__link" href="#STY">Read Hexwork's story</a>
  </footer>
</article>
```

#### STY-3.2 · Ring

```html
<article class="fh-story fh-story--deep" data-tone="teal" data-fh="STY-3.2">
  <header class="fh-story__head"><span class="fh-story__logo"><svg viewBox="0 0 100 100" aria-hidden="true"><rect x="10" y="14" width="80" height="18" rx="9"></rect><rect x="10" y="41" width="80" height="18" rx="9"></rect><rect x="10" y="68" width="80" height="18" rx="9"></rect></svg>Lumen</span><span class="fh-story__tag">Tokens</span></header>
  <div class="fh-story__field"><div class="fh-story__ring-wrap"><span class="fh-story__ring" style="--value: 72" role="img" aria-label="72% complete"></span><p class="fh-story__figure">72%</p></div><p class="fh-story__figure-label" style="text-align: center">Complete</p></div>
  <footer class="fh-story__foot">
    <p class="fh-story__quote">Lumen's token migration is nearly there.</p>
    <a class="fh-story__link" href="#STY">Read Lumen's story</a>
  </footer>
</article>
```

#### STY-3.3 · Chart

```html
<article class="fh-story" data-tone="sky" data-fh="STY-3.3">
  <header class="fh-story__head"><span class="fh-story__logo"><svg viewBox="0 0 100 100" aria-hidden="true"><path d="M6 60c14-28 30-28 44 0s30 28 44 0" fill="none" stroke-width="16"></path></svg>Northwind</span><span class="fh-story__tag">Releases</span></header>
  <div class="fh-story__field" aria-hidden="true"><div class="fh-story__chart"><span style="--value: 18"></span><span style="--value: 26"></span><span style="--value: 22"></span><span style="--value: 38"></span><span style="--value: 34"></span><span style="--value: 52"></span><span style="--value: 61"></span><span style="--value: 78"></span></div></div>
  <footer class="fh-story__foot">
    <p class="fh-story__quote">Northwind's weekly releases, up eight weeks running.</p>
    <a class="fh-story__link" href="#STY">Read Northwind's story</a>
  </footer>
</article>
```

#### STY-3.4 · Live

```html
<article class="fh-story fh-story--ink fh-story--glare" data-tone="rose" data-fh="STY-3.4">
  <header class="fh-story__head"><span class="fh-story__logo"><svg viewBox="0 0 100 100" aria-hidden="true"><polygon points="38,6 74,6 52,42 78,42 30,96 44,56 22,56"></polygon></svg>Voltline</span><span class="fh-story__tag">Live</span></header>
  <div class="fh-story__field">
    <p class="fh-story__figure-label">Deploying · 2 of 5</p>
    <progress class="fh-progress" aria-label="Deploying"></progress>
    <p class="fh-story__figure">02<span style="opacity: 0.4">/05</span></p>
  </div>
  <footer class="fh-story__foot">
    <p class="fh-story__quote">Voltline is rolling out its new dashboard now.</p>
    <a class="fh-story__link" href="#STY">Read Voltline's story</a>
  </footer>
</article>
```

## SPD · Speed blur

A picture caught at speed: a sideways motion blur with the subject kept sharp at --fh-speed-focus, fine scanline grain, and a slow drift. Pure CSS: the streaked copy is squeezed, blurred and stretched back, so it blurs along one axis only. --orbit adds a dashed ring.

Classes: `fh-speed` `fh-speed--orbit` `fh-speed__smear` `fh-speed__img` `fh-chip` `fh-title` `fh-speed--still`

### SPD-1 · Speed blur

#### SPD-1.1 · Hero · orbit

```html
<figure class="fh-speed fh-speed--orbit" style="--fh-speed-focus: 38% 38%; --fh-speed-focus-x: 50%; --fh-speed-focus-y: 55%" data-fh="SPD-1.1">
  <span class="fh-speed__smear" aria-hidden="true"><img src="img/backdrop/lipizzaner-horse.webp" alt></span>
  <img class="fh-speed__img" src="img/backdrop/lipizzaner-horse.webp" alt="A horse at full gallop">
  <figcaption style="place-self: end center; display: grid; justify-items: center; gap: var(--fh-space-3); padding: var(--fh-space-8); text-align: center">
    <span class="fh-chip">Adventure starts here</span>
    <span class="fh-title">Born to ride</span>
  </figcaption>
</figure>
```

#### SPD-1.2 · Long streak

```html
<figure class="fh-speed" style="--fh-speed-focus: 55% 35%; --fh-speed-amount: 28px; --fh-speed-ratio: 4 / 3" data-fh="SPD-1.2">
  <span class="fh-speed__smear" aria-hidden="true"><img src="img/backdrop/firehorse-horse.webp" alt></span>
  <img class="fh-speed__img" src="img/backdrop/firehorse-horse.webp" alt="Three horses running">
</figure>
```

#### SPD-1.3 · Short · still

```html
<figure class="fh-speed fh-speed--still" style="--fh-speed-focus: 40% 50%; --fh-speed-amount: 10px; --fh-speed-ratio: 4 / 3" data-fh="SPD-1.3">
  <span class="fh-speed__smear" aria-hidden="true"><img src="img/backdrop/firehorse-hoof.webp" alt></span>
  <img class="fh-speed__img" src="img/backdrop/firehorse-hoof.webp" alt="A hoof drawn in blueprint lines">
</figure>
```

## DTH · Dither

A picture as a halftone: dots that grow where it's light, on a dark ground. A tone colours the dots; --paper flips to dark dots on light, --lines uses a line screen, --fine and --coarse set the pitch. Pure CSS: blend with a dot screen, then contrast.

Classes: `fh-dither` `fh-dither__plate` `fh-dither--paper` `fh-dither--fine` `fh-dither--lines` `fh-dither--coarse`

### DTH-1 · Dither

#### DTH-1.1 · Dots

```html
<figure class="fh-dither" data-fh="DTH-1.1"><span class="fh-dither__plate"><img src="img/avatars/cole.webp" alt="Cole, dithered"></span></figure>
```

#### DTH-1.2 · Tone

```html
<figure class="fh-dither" data-tone="lime" data-fh="DTH-1.2"><span class="fh-dither__plate"><img src="img/avatars/maya.webp" alt="Maya, dithered in lime"></span></figure>
```

#### DTH-1.3 · Paper · fine

```html
<figure class="fh-dither fh-dither--paper fh-dither--fine" data-fh="DTH-1.3"><span class="fh-dither__plate"><img src="img/avatars/ray.webp" alt="Ray, dithered on paper"></span></figure>
```

#### DTH-1.4 · Lines · coarse

```html
<figure class="fh-dither fh-dither--lines fh-dither--coarse" data-tone="sky" data-fh="DTH-1.4"><span class="fh-dither__plate"><img src="img/avatars/isla.webp" alt="Isla in a line screen"></span></figure>
```

## LQG · Liquid glass

A pane of thick glass: what's behind it goes soft and bright, the rim catches a white highlight on top and a faint prism of colour at the corners. A panel, a --pill button with a stronger --prism, --dark and --clear.

Classes: `fh-glass` `fh-label` `fh-heading` `fh-body` `fh-glass--pill` `fh-glass--prism` `fh-glass--dark` `fh-glass--clear`

### LQG-1 · Liquid glass

#### LQG-1.1 · Panel

```html
<div class="fh-glass" style="inline-size: min(22rem, 100%); padding: var(--fh-space-6)" data-fh="LQG-1.1">
  <p class="fh-label">Glass</p>
  <p class="fh-heading" style="margin-block: var(--fh-space-2)">Soft behind, bright at the rim.</p>
  <p class="fh-body">Whatever sits under the pane goes soft; the edge catches the light.</p>
</div>
```

#### LQG-1.2 · Pill · prism

```html
<a class="fh-glass fh-glass--pill fh-glass--prism" href="#LQG" data-fh="LQG-1.2">Join now</a>
```

#### LQG-1.3 · Dark

```html
<div class="fh-glass fh-glass--dark" style="padding: var(--fh-space-4) var(--fh-space-5)" data-fh="LQG-1.3"><p class="fh-label" style="color: inherit">Smoked</p><p class="fh-body" style="color: inherit; margin: 0">--dark</p></div>
```

#### LQG-1.4 · Clear

```html
<div class="fh-glass fh-glass--clear" style="padding: var(--fh-space-4) var(--fh-space-5)" data-fh="LQG-1.4"><p class="fh-label">Clear</p><p class="fh-body" style="margin: 0">--clear</p></div>
```

## LST · List & timeline

Rows with a visual, text and a trailing slot. A dashed timeline for activity.

Classes: `fh-stack` `fh-stack--xl` `fh-list` `fh-avatar` `fh-list__title` `fh-list__link` `fh-list__meta` `fh-badge` `fh-avatar--generated` `fh-timeline`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/content/#LST.

## CHT · Chat

Message bubbles, names in tone, a typing indicator.

Classes: `fh-chat` `fh-message` `fh-avatar` `fh-avatar--sm` `fh-message__bubble` `fh-message__name` `fh-typing`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/content/#CHT.

## DET · Details, code, divider

Classes: `fh-stack` `fh-stack--lg` `fh-dl` `fh-divider` `fh-code` `fh-button` `fh-button--sm` `fh-button--ghost` `fh-small` `fh-muted` `fh-kbd`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/content/#DET.

## TIR · Pricing tiers

The featured tier glows in its tone; every tier stacks or sits side by side by container.

Classes: `fh-tiers` `fh-tier` `fh-tier__name` `fh-tier__price` `fh-tier__pitch` `fh-checklist` `fh-button` `fh-button--secondary` `fh-button--block` `fh-tier--featured` `fh-tier__flag` `fh-badge`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/content/#TIR.

## FEA · Features

Classes: `fh-grid` `fh-feature` `fh-feature__icon`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/content/#FEA.

## TST · Testimonial

Classes: `fh-testimonial` `fh-person` `fh-avatar` `fh-avatar--circle` `fh-person__text`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/content/#TST.

## CAT · Card catalog

Classes: `fh-card` `fh-card__content` `fh-card__meta` `fh-card__title` `fh-card__body` `fh-card__footer` `fh-card__price` `fh-action` `fh-avatars` `fh-avatar` `fh-avatar--sm` `fh-stats` `fh-card--cover` `fh-card__media` `fh-badge` `fh-product` `fh-product__media` `fh-product__badge` `fh-product__meta` `fh-product__title` `fh-cluster` `fh-price` `fh-swatches` `fh-swatches--sm` `fh-tier` `fh-tier--featured` `fh-tier__flag` `fh-tier__name` `fh-tier__price` `fh-tier__pitch` `fh-checklist` `fh-ring`

### CAT-1 · Catalog

#### CAT-1.1 · Etched · price · action

```html
<article class="fh-card" data-tone="teal" data-fh="CAT-1.1"><div class="fh-card__content"><p class="fh-card__meta">Data</p><h3 class="fh-card__title">Schema design</h3><p class="fh-card__body">Models that match how you work.</p><footer class="fh-card__footer"><p class="fh-card__price">From <b>$1,250</b></p><span class="fh-action" data-tone>View</span></footer></div></article>
```

### CAT-2 · People

#### CAT-2.1 · Elevated · avatar stack · stats

Config on the parent: `data-fh-card="elevated"`

```html
<article class="fh-card" data-tone="sky" data-fh="CAT-2.1"><div class="fh-card__content"><p class="fh-card__meta">Team</p><h3 class="fh-card__title">Agent squad</h3><span class="fh-avatars"><span class="fh-avatar fh-avatar--sm"><img src="img/avatars/ava.webp" alt></span><span class="fh-avatar fh-avatar--sm"><img src="img/avatars/cole.webp" alt></span><span class="fh-avatar fh-avatar--sm"><img src="img/avatars/maya.webp" alt></span><span class="fh-avatar fh-avatar--sm"><img src="img/avatars/mateo.webp" alt></span></span><dl class="fh-stats" style="margin-top:var(--fh-space-4)"><div><dt>Live</dt><dd>4</dd></div><div><dt>Replies</dt><dd>2.1k</dd></div></dl></div></article>
```

### CAT-3 · Media

#### CAT-3.1 · Cover · background image · scrim

```html
<article class="fh-card fh-card--cover" data-tone="violet" data-fh="CAT-3.1"><figure class="fh-card__media"><img src="img/supply/poster.svg" alt></figure><div class="fh-card__content"><p class="fh-card__meta">Journal</p><h3 class="fh-card__title">Printing in nine tones</h3><p class="fh-card__body">How the Firehorse palette made it to paper.</p></div></article>
```

### CAT-4 · Surfaces

#### CAT-4.1 · Glass · mesh background

Config on the parent: `data-fh-card="glass"`

```html
<article class="fh-card" data-tone="violet" data-fh="CAT-4.1"><div class="fh-card__content"><p class="fh-card__meta">Glass</p><h3 class="fh-card__title">Frosted panel</h3><p class="fh-card__body">Backdrop blur over any art. One attribute.</p><footer class="fh-card__footer"><span class="fh-badge" data-tone="violet">data-fh-card="glass"</span></footer></div></article>
```

### CAT-5 · Tokens

#### CAT-5.1 · Tonal · token swatches

Config on the parent: `data-fh-card="tonal"`

```html
<article class="fh-card" data-tone="fuchsia" data-fh="CAT-5.1"><div class="fh-card__content"><p class="fh-card__meta">Tokens</p><h3 class="fh-card__title">--fh-tone-fuchsia</h3><div class="site-cat__swatches"><i data-tone="fuchsia"></i><i data-tone="violet"></i><i data-tone="rose"></i><i data-tone="sky"></i></div><p class="fh-card__body"><code>oklch(from bg …)</code> · adapts to any surface</p></div></article>
```

### CAT-6 · Commerce

#### CAT-6.1 · Product · swatches · sale

```html
<article class="fh-product" data-tone="lime" data-fh="CAT-6.1"><a class="fh-product__media" href="#commerce"><img src="img/supply/notebook.svg" alt></a><span class="fh-product__badge" data-tone="rose">−20%</span><p class="fh-product__meta">A5 · pack of 3</p><h3 class="fh-product__title"><a href="#commerce">Dot Grid Notebook</a></h3><div class="fh-cluster" style="justify-content:space-between;--fh-gap:var(--fh-space-2)"><p class="fh-price" data-tone="rose"><b>$22</b><s>$28</s></p><div class="fh-swatches fh-swatches--sm"><label data-tone="lime" style="--swatch:var(--fh-tone)"><input type="radio" name="cat8" checked aria-label="Lime"></label><label data-tone="neutral" style="--swatch:var(--fh-tone)"><input type="radio" name="cat8" aria-label="Graphite"></label></div></div></article>
```

#### CAT-6.2 · Pricing tier · featured

```html
<article class="fh-tier fh-tier--featured" data-tone="accent" data-fh="CAT-6.2"><span class="fh-tier__flag">Popular</span><h4 class="fh-tier__name">Build</h4><p class="fh-tier__price"><b>$4,800</b> fixed</p><p class="fh-tier__pitch">A design system on Firehorse, themed and shipped.</p><ul class="fh-checklist" data-tone><li>Tokens &amp; theme</li><li>12 page templates</li></ul></article>
```

### CAT-7 · Data

#### CAT-7.1 · Metric · ring · trend

Config on the parent: `data-fh-card="solid"`

```html
<article class="fh-card" data-tone="teal" data-fh="CAT-7.1"><div class="fh-card__content"><p class="fh-card__meta">Win rate</p><div class="site-cat__metric"><span class="fh-ring" style="--fh-value:64" role="img" aria-label="64%"><b>64%</b></span><div><p class="fh-card__title">$184k</p><p class="fh-card__body"><span style="color:var(--fh-color-success)">▲ 12%</span> vs last quarter</p></div></div></div></article>
```

## DCK · Floating bar

The masthead from rascode.dev. It rides quietly under the header, then engages when it pins: the small title slides in, the cubes and chips appear in the section's tone, and the outline CTA fills. Scroll this page to watch the real one change color by section.

Classes: `fh-dock` `fh-frame` `fh-dock__bar` `fh-dock__identity` `fh-eyebrow-pill` `fh-dot` `fh-dot--live` `fh-dock__avatar` `fh-dock__text` `fh-dock__title` `fh-dock__meta` `fh-cubes` `fh-cube` `fh-dock__actions` `fh-button` `fh-button--sm` `fh-button--outline`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/navigation/#DCK.

## FAB · Floating action bar

A pill that surfaces after the first screen, using a scroll-driven animation. Shown here inside a phone frame.

Classes: `fh-label` `fh-subheading` `fh-skeleton` `fh-float` `fh-avatar` `fh-avatar--sm` `fh-avatar--circle` `fh-cube` `fh-button` `fh-button--sm`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/navigation/#FAB.

## TAB · Tabs

Underline tabs that scroll sideways when they run out of room. fh-tabs--mono for chrome.

Classes: `fh-stack` `fh-stack--lg` `fh-tabs` `fh-tabs--mono`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/navigation/#TAB.

## NAV · Navigation

Pagination, a wizard stepper, search and a side nav.

Classes: `fh-stack` `fh-stack--lg` `fh-search` `fh-sr-only` `fh-kbd` `fh-stepper` `fh-pagination` `fh-sidenav` `fh-label` `fh-badge`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/navigation/#NAV.

## BRG · Hamburger

Three bars, seven morphs, every state. Open comes from aria-expanded, a sibling :popover-open, or fh-burger--open. Click any of them.

Classes: `fh-burger` `fh-burger--boxed` `fh-burger--open` `fh-burger--label` `fh-burger--arrow` `fh-burger--spin` `fh-burger--squeeze` `fh-burger--minus` `fh-burger--plus` `fh-burger--dots` `fh-burger--tone`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/navigation/#BRG.

## PRF · Profile picker

Who's signed in and everything about their session: an identity card, a few facts, account links, a setting row, a profile switcher and sign out. A popover anchored to an etched pill; no JavaScript.

Classes: `fh-profile` `fh-avatar` `fh-avatar--circle` `fh-profile__who` `fh-profile--compact` `fh-menu` `fh-profile-menu` `fh-profile-menu__card` `fh-profile-menu__id` `fh-badge` `fh-badge--solid` `fh-profile-menu__facts` `fh-menu__label` `fh-icon` `fh-profile-menu__row` `fh-segmented` `fh-segmented--sm` `fh-sr-only` `fh-profile-menu__option` `fh-menu__danger`

### PRF-1 · Profile picker

#### PRF-1.1 · Ava Marlow@ava · Owner

```html
<button class="fh-profile" type="button" popovertarget="profile-demo" style="anchor-name: --profile-demo" data-fh="PRF-1.1"><span class="fh-avatar fh-avatar--circle" data-tone="sky"><img src="/img/avatars/ava.webp" alt></span><span class="fh-profile__who"><b>Ava Marlow</b><small>@ava · Owner</small></span></button>
```

#### PRF-1.2 · PRF-1.2

```html
<button class="fh-profile fh-profile--compact" type="button" popovertarget="profile-demo" aria-label="Ava Marlow, account" data-fh="PRF-1.2"><span class="fh-avatar fh-avatar--circle" data-tone="sky"><img src="/img/avatars/ava.webp" alt></span></button>
```

#### PRF-1.3 · MOMateo OrtizClient · Halcyon

```html
<button class="fh-profile" type="button" data-fh="PRF-1.3"><span class="fh-avatar fh-avatar--circle" data-tone="violet">MO</span><span class="fh-profile__who"><b>Mateo Ortiz</b><small>Client · Halcyon</small></span></button>
```

#### PRF-1.4 · Ava Marlowava@northwind.studioOwner Member2021Projects14PlanPro Account Profile⌘P Settings⌘, ThemeColour scheme Dark Light Auto Switch profile Northwind StudioOwner HHHalcyon HealthClient · viewer Sign out⇧⌘Q

```html
<div class="fh-menu fh-profile-menu site-menu-static" role="menu" aria-label="Profile menu (static)" data-fh="PRF-1.4">
  <div class="fh-profile-menu__card" data-tone="sky"><span class="fh-avatar fh-avatar--circle" data-tone="sky"><img src="/img/avatars/ava.webp" alt></span><span class="fh-profile-menu__id"><b>Ava Marlow</b><small>ava@northwind.studio</small></span><span class="fh-badge fh-badge--solid" data-tone="sky">Owner</span></div>
  <dl class="fh-profile-menu__facts"><div><dt>Member</dt><dd>2021</dd></div><div><dt>Projects</dt><dd>14</dd></div><div><dt>Plan</dt><dd>Pro</dd></div></dl>
  <p class="fh-menu__label">Account</p>
  <button type="button" role="menuitem"><i class="fh-icon fh-icon--user" aria-hidden="true"></i>Profile<kbd>⌘P</kbd></button>
  <button type="button" role="menuitem"><i class="fh-icon fh-icon--settings" aria-hidden="true"></i>Settings<kbd>⌘,</kbd></button>
  <div class="fh-profile-menu__row"><span><i class="fh-icon fh-icon--moon" aria-hidden="true"></i>Theme</span><fieldset class="fh-segmented fh-segmented--sm"><legend class="fh-sr-only">Colour scheme</legend><label><input type="radio" name="prf-static-scheme" value="dark" checked> Dark</label><label><input type="radio" name="prf-static-scheme" value="light"> Light</label><label><input type="radio" name="prf-static-scheme" value="auto"> Auto</label></fieldset></div>
  <hr>
  <p class="fh-menu__label">Switch profile</p>
  <button class="fh-profile-menu__option" type="button" role="menuitemradio" aria-checked="true"><span class="fh-avatar fh-avatar--circle" data-tone="sky"><img src="/img/avatars/ava.webp" alt></span><span class="fh-profile-menu__id"><b>Northwind Studio</b><small>Owner</small></span></button>
  <button class="fh-profile-menu__option" type="button" role="menuitemradio" aria-checked="false"><span class="fh-avatar fh-avatar--circle" data-tone="amber">HH</span><span class="fh-profile-menu__id"><b>Halcyon Health</b><small>Client · viewer</small></span></button>
  <hr>
  <button class="fh-menu__danger" type="button" role="menuitem"><i class="fh-icon fh-icon--log-out" aria-hidden="true"></i>Sign out<kbd>⇧⌘Q</kbd></button>
</div>
```

## DRP · Dropdown menu

Labels, icons, shortcuts, checkable items and a danger zone. Positioned with CSS anchor positioning.

Classes: `fh-button` `fh-button--secondary` `fh-icon` `fh-menu` `fh-menu__label` `fh-menu__danger`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/navigation/#DRP.

## TBR · Tab bar

Phone navigation with icons, a current marker and a count badge. Respects the home-indicator inset.

Classes: `fh-label` `fh-stack` `fh-stack--sm` `fh-chip-card` `fh-chip-card__block` `fh-icon` `fh-chip-card__text` `fh-tabbar`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/navigation/#TBR.

## ACC · Accordion

Native <details> with a shared name, so only one stays open. The height animates where the browser supports it.

Classes: `fh-accordion`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/overlays/#ACC.

## DLG · Dialog, menu, toast

Native <dialog> and popovers, with enter and exit animations from @starting-style.

Classes: `fh-cluster` `fh-button` `fh-button--secondary` `fh-button--ghost` `fh-menu` `fh-dialog` `fh-dialog__header` `fh-stack` `fh-stack--xs` `fh-label` `fh-subheading` `fh-close` `fh-dialog__body` `fh-body` `fh-dialog__footer`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/overlays/#DLG.

## FBK · Feedback

Alerts, progress, meters, rings, spinners, skeletons, empty states and tooltips.

Classes: `fh-grid` `fh-stack` `fh-alert` `fh-alert__title` `fh-alert__actions` `fh-button` `fh-button--sm` `fh-close` `fh-stack--lg` `fh-progress-field` `fh-progress-field__value` `fh-progress` `fh-meter` `fh-cluster` `fh-ring` `fh-spinner` `fh-button--icon` `fh-button--secondary` `fh-skeleton` `fh-skeleton--circle`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/overlays/#FBK.

## EMP · Empty state & banner

Classes: `fh-stack` `fh-stack--lg` `fh-banner` `fh-empty` `fh-empty__icon` `fh-button` `fh-button--sm` `fh-button--secondary`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/overlays/#EMP.

## AVT · Avatars

Shapes, sizes and presence, rings and halos, generated avatars and groups.

Classes: `fh-avatar` `fh-avatar--2xl` `fh-avatar--circle` `fh-avatar--oval` `fh-avatar--squircle` `fh-avatar--square` `fh-cluster` `fh-avatar--xs` `fh-avatar--sm` `fh-avatar--lg` `fh-avatar--xl` `fh-avatar--ring` `fh-avatar--halo` `fh-avatar--generated` `fh-avatars` `fh-avatars__more` `fh-avatars--spread` `fh-avatars--lg` `fh-avatars--grid` `fh-avatars--row` `fh-person` `fh-person__text`

### AVT-1 · Shapes

--rounded (default) · --circle · --oval · --squircle · --square

#### AVT-1.1 · Rounded rect

```html
<figure><span class="fh-avatar fh-avatar--2xl" data-face data-fh="AVT-1.1"><img src="img/avatars/ava.webp" alt="Ava"></span><figcaption>Rounded rect</figcaption></figure>
```

#### AVT-1.2 · Circle

```html
<figure><span class="fh-avatar fh-avatar--2xl fh-avatar--circle" data-face data-fh="AVT-1.2"><img src="img/avatars/mateo.webp" alt="Mateo"></span><figcaption>Circle</figcaption></figure>
```

#### AVT-1.3 · Oval

```html
<figure><span class="fh-avatar fh-avatar--2xl fh-avatar--oval" data-face data-fh="AVT-1.3"><img src="img/avatars/eleanor.webp" alt="Eleanor"></span><figcaption>Oval</figcaption></figure>
```

#### AVT-1.4 · Squircle

```html
<figure><span class="fh-avatar fh-avatar--2xl fh-avatar--squircle" data-face data-fh="AVT-1.4"><img src="img/avatars/ray.webp" alt="Ray"></span><figcaption>Squircle</figcaption></figure>
```

#### AVT-1.5 · Square

```html
<figure><span class="fh-avatar fh-avatar--2xl fh-avatar--square" data-face data-fh="AVT-1.5"><img src="img/avatars/isla.webp" alt="Isla"></span><figcaption>Square</figcaption></figure>
```

### AVT-2 · Sizes & presence

--xs → --2xl · data-status

```html
<div class="fh-cluster" style="--fh-gap: var(--fh-space-4); --fh-align: flex-end">
  <span class="fh-avatar fh-avatar--xs" data-face data-fh="AVT-2"><img src="img/avatars/sam.webp" alt="Sam"></span>
  <span class="fh-avatar fh-avatar--sm" data-status="online" data-face data-fh="AVT-2"><img src="img/avatars/maya.webp" alt="Maya"></span>
  <span class="fh-avatar" data-status="away" data-face data-fh="AVT-2"><img src="img/avatars/cole.webp" alt="Cole"></span>
  <span class="fh-avatar fh-avatar--lg" data-status="busy" data-face data-fh="AVT-2"><img src="img/avatars/ruth.webp" alt="Ruth"></span>
  <span class="fh-avatar fh-avatar--xl" data-status="online" data-face data-fh="AVT-2"><img src="img/avatars/cole.webp" alt="Wes"></span>
  <span class="fh-avatar fh-avatar--xl fh-avatar--circle" data-status="offline" data-face data-fh="AVT-2"><img src="img/avatars/reginald.webp" alt="Reginald"></span>
</div>
```

### AVT-3 · Rings & halos

--ring · --halo · data-tone

```html
<div class="fh-cluster" style="--fh-gap: var(--fh-space-6)">
  <span class="fh-avatar fh-avatar--xl fh-avatar--ring" data-tone="sky" data-face data-fh="AVT-3"><img src="img/avatars/isla.webp" alt="Isla"></span>
  <span class="fh-avatar fh-avatar--xl fh-avatar--circle fh-avatar--ring" data-tone="lime" data-face data-fh="AVT-3"><img src="img/avatars/mateo.webp" alt="Mateo"></span>
  <span class="fh-avatar fh-avatar--xl fh-avatar--circle fh-avatar--halo" data-tone="fuchsia" data-face data-fh="AVT-3"><img src="img/avatars/ava.webp" alt="Ava"></span>
  <span class="fh-avatar fh-avatar--xl fh-avatar--halo" data-tone="orange" data-face data-fh="AVT-3"><img src="img/avatars/cole.webp" alt="Wes"></span>
</div>
```

### AVT-4 · Generated

No photo? A tone mesh behind initials. Each tone walks its own neighbours on the wheel, so a team reads as a family.

```html
<div class="fh-cluster" style="--fh-gap: var(--fh-space-4)" id="generated-avatars">
  <span class="fh-avatar fh-avatar--xl fh-avatar--generated" data-tone="sky" role="img" aria-label="Ada Lovelace" data-fh="AVT-4">AL</span>
  <span class="fh-avatar fh-avatar--xl fh-avatar--generated fh-avatar--circle" data-tone="teal" role="img" aria-label="Grace Hopper" data-fh="AVT-4">GH</span>
  <span class="fh-avatar fh-avatar--xl fh-avatar--generated fh-avatar--oval" data-tone="lime" role="img" aria-label="Alan Turing" data-fh="AVT-4">AT</span>
  <span class="fh-avatar fh-avatar--xl fh-avatar--generated fh-avatar--squircle" data-tone="amber" role="img" aria-label="Katherine Johnson" data-fh="AVT-4">KJ</span>
  <span class="fh-avatar fh-avatar--xl fh-avatar--generated" data-tone="orange" role="img" aria-label="Dennis Ritchie" data-fh="AVT-4">DR</span>
  <span class="fh-avatar fh-avatar--xl fh-avatar--generated fh-avatar--circle" data-tone="rose" role="img" aria-label="Margaret Hamilton" data-fh="AVT-4">MH</span>
  <span class="fh-avatar fh-avatar--xl fh-avatar--generated" data-tone="fuchsia" role="img" aria-label="Linus Torvalds" data-fh="AVT-4">LT</span>
  <span class="fh-avatar fh-avatar--xl fh-avatar--generated fh-avatar--squircle" data-tone="violet" role="img" aria-label="Radia Perlman" data-fh="AVT-4">RP</span>
</div>
```

### AVT-5 · Groups

Overlapping stack with a counter, a stack that fans out on hover, a packed cluster, a plain row, and a person with name and role.

```html
<div class="site-avatar-groups">
  <div class="fh-avatars" role="group" aria-label="Team" data-fh="AVT-5">
    <span class="fh-avatar" data-face><img src="img/avatars/ava.webp" alt="Ava"></span>
    <span class="fh-avatar" data-face><img src="img/avatars/cole.webp" alt="Cole"></span>
    <span class="fh-avatar" data-face><img src="img/avatars/maya.webp" alt="Maya"></span>
    <span class="fh-avatar" data-face><img src="img/avatars/ray.webp" alt="Ray"></span>
    <span class="fh-avatar fh-avatars__more">+6</span>
  </div>
  <div class="fh-avatars fh-avatars--spread fh-avatars--lg" role="group" aria-label="Agents on shift" tabindex="0" data-fh="AVT-5">
    <span class="fh-avatar fh-avatar--circle" data-face><img src="img/avatars/isla.webp" alt="Isla"></span>
    <span class="fh-avatar fh-avatar--circle" data-face><img src="img/avatars/mateo.webp" alt="Mateo"></span>
    <span class="fh-avatar fh-avatar--circle" data-face><img src="img/avatars/eleanor.webp" alt="Eleanor"></span>
    <span class="fh-avatar fh-avatar--circle" data-face><img src="img/avatars/cole.webp" alt="Wes"></span>
    <span class="fh-avatar fh-avatar--circle" data-face><img src="img/avatars/sam.webp" alt="Sam"></span>
  </div>
  <div class="fh-avatars fh-avatars--grid" role="group" aria-label="Clients" data-fh="AVT-5">
    <span class="fh-avatar fh-avatar--sm" data-face><img src="img/avatars/ruth.webp" alt="Ruth"></span>
    <span class="fh-avatar fh-avatar--sm fh-avatar--generated" data-tone="teal">NW</span>
    <span class="fh-avatar fh-avatar--sm" data-face><img src="img/avatars/ray.webp" alt="Ray"></span>
    <span class="fh-avatar fh-avatar--sm fh-avatar--generated" data-tone="amber">HC</span>
    <span class="fh-avatar fh-avatar--sm" data-face><img src="img/avatars/maya.webp" alt="Maya"></span>
    <span class="fh-avatar fh-avatar--sm fh-avatar--generated" data-tone="violet">TJ</span>
  </div>
  <div class="fh-avatars fh-avatars--row" role="group" aria-label="Reviewers" data-fh="AVT-5">
    <span class="fh-avatar fh-avatar--oval" data-face><img src="img/avatars/cole.webp" alt="Cole"></span>
    <span class="fh-avatar fh-avatar--oval" data-face><img src="img/avatars/isla.webp" alt="Isla"></span>
    <span class="fh-avatar fh-avatar--oval" data-face><img src="img/avatars/ava.webp" alt="Ava"></span>
  </div>
  <a class="fh-person" href="#avatars" data-tone="sky" data-fh="AVT-5"><span class="fh-avatar fh-avatar--lg" data-status="online" data-face><img src="img/avatars/reginald.webp" alt></span><span class="fh-person__text"><b>Reginald</b><span>Head of agent services</span></span></a>
</div>
```

## SCD · Social card

A portrait, the name with a verified mark, a short bio, two counts and Follow. The same markup three ways (the first two set data-fh-scheme="light" here): the portrait framed above a plain body; --fade runs it the full card into a frosted body (a blur that grows toward the bottom); --dark fades it into ink with an inverted Follow.

Classes: `fh-social` `fh-social__photo` `fh-social__body` `fh-social__name` `fh-icon` `fh-social__check` `fh-social__bio` `fh-social__foot` `fh-social__stats` `fh-sr-only` `fh-button` `fh-button--sm` `fh-social--fade` `fh-social--dark`

### SCD-1 · Social card

#### SCD-1.1 · Framed

```html
<article class="fh-social" data-fh-scheme="light" data-fh="SCD-1.1">
  <img class="fh-social__photo" src="img/avatars/cole.webp" alt="Cole Bennett">
  <div class="fh-social__body">
    <h3 class="fh-social__name">cole. <i class="fh-icon fh-icon--circle-check fh-social__check" role="img" aria-label="Verified"></i></h3>
    <p class="fh-social__bio">Product engineer and designer building useful products.</p>
    <div class="fh-social__foot">
      <dl class="fh-social__stats">
        <div><dt><i class="fh-icon fh-icon--user" aria-hidden="true"></i><span class="fh-sr-only">Following</span></dt><dd>24</dd></div>
        <div><dt><i class="fh-icon fh-icon--eye" aria-hidden="true"></i><span class="fh-sr-only">Followers</span></dt><dd>1.8K</dd></div>
      </dl>
      <button class="fh-button fh-button--sm" type="button">Follow</button>
    </div>
  </div>
</article>
```

#### SCD-1.2 · Fade

```html
<article class="fh-social fh-social--fade" data-fh-scheme="light" data-fh="SCD-1.2">
  <img class="fh-social__photo" src="img/avatars/maya.webp" alt="Maya Okafor">
  <div class="fh-social__body">
    <h3 class="fh-social__name">maya. <i class="fh-icon fh-icon--circle-check fh-social__check" role="img" aria-label="Verified"></i></h3>
    <p class="fh-social__bio">Designer and writer. Systems, type and the space between.</p>
    <div class="fh-social__foot">
      <dl class="fh-social__stats">
        <div><dt><i class="fh-icon fh-icon--user" aria-hidden="true"></i><span class="fh-sr-only">Following</span></dt><dd>41</dd></div>
        <div><dt><i class="fh-icon fh-icon--eye" aria-hidden="true"></i><span class="fh-sr-only">Followers</span></dt><dd>3.2K</dd></div>
      </dl>
      <button class="fh-button fh-button--sm" type="button">Follow</button>
    </div>
  </div>
</article>
```

#### SCD-1.3 · Dark

```html
<article class="fh-social fh-social--dark" data-fh="SCD-1.3">
  <img class="fh-social__photo" src="img/avatars/mateo.webp" alt="Mateo Alvarez">
  <div class="fh-social__body">
    <h3 class="fh-social__name">mateo. <i class="fh-icon fh-icon--circle-check fh-social__check" role="img" aria-label="Verified"></i></h3>
    <p class="fh-social__bio">Art director. Shoots, campaigns and the odd short film.</p>
    <div class="fh-social__foot">
      <dl class="fh-social__stats">
        <div><dt><i class="fh-icon fh-icon--user" aria-hidden="true"></i><span class="fh-sr-only">Following</span></dt><dd>18</dd></div>
        <div><dt><i class="fh-icon fh-icon--eye" aria-hidden="true"></i><span class="fh-sr-only">Followers</span></dt><dd>9.4K</dd></div>
      </dl>
      <button class="fh-button fh-button--sm" type="button">Follow</button>
    </div>
  </div>
</article>
```

## AUT · Sign in & sign up

Three layouts, all container-sized. Split puts the art beside the form and moves it on top in narrow slots; Card floats the form over full-bleed art; Plain is the form alone.

Classes: `fh-auth` `fh-auth__art` `fh-auth__panel` `fh-auth__brand` `fh-icon` `fh-segmented` `fh-auth__switch` `fh-sr-only` `fh-auth__head` `fh-auth__form` `fh-field` `fh-input` `fh-auth__row` `fh-check` `fh-button` `fh-divider` `fh-auth__social` `fh-button--secondary` `fh-field__hint` `fh-auth__foot` `fh-auth--card` `fh-auth--plain` `fh-segmented--sm` `fh-auth__method` `fh-auth__forgot` `fh-input-group` `fh-auth__rules`

### AUT-1 · Layouts

#### AUT-1.1 · Split · etched art

```html
<section class="fh-auth" data-tone="teal" aria-label="Sign in or create an account" data-fh="AUT-1.1">
  <div class="fh-auth__art" aria-hidden="true"></div>
  <div class="fh-auth__panel">
    <p class="fh-auth__brand"><i class="fh-icon fh-icon--shield-check" aria-hidden="true"></i><b>Northwind Studio</b></p>
    <fieldset class="fh-segmented fh-auth__switch">
      <legend class="fh-sr-only">Account</legend>
      <label><input type="radio" name="auth-split" id="auth-split-in" value="in" checked> Sign in</label>
      <label><input type="radio" name="auth-split" id="auth-split-up" value="up"> Sign up</label>
    </fieldset>
    <header class="fh-auth__head">
      <h3 data-fh-auth="in">Welcome back</h3>
      <h3 data-fh-auth="up">Create your account</h3>
      <p data-fh-auth="in">Sign in to pick up where you left off.</p>
      <p data-fh-auth="up">Two minutes. No card needed.</p>
    </header>
    <form class="fh-auth__form" data-fh-auth="in" method="post" action="/auth/sign-in">
      <div class="fh-field"><label for="auth-split-email">Email</label><input class="fh-input" id="auth-split-email" name="email" type="email" autocomplete="email" required placeholder="you@company.com"></div>
      <div class="fh-field"><label for="auth-split-pass">Password</label><input class="fh-input" id="auth-split-pass" name="password" type="password" autocomplete="current-password" required minlength="8"></div>
      <div class="fh-auth__row"><label class="fh-check"><input type="checkbox" name="remember"> Remember me</label><a href="#forms">Forgot password?</a></div>
      <button class="fh-button" type="submit">Sign in</button>
      <p class="fh-divider">or</p>
      <div class="fh-auth__social">
        <button class="fh-button fh-button--secondary" type="button"><i class="fh-icon fh-icon--github" aria-hidden="true"></i>GitHub</button>
        <button class="fh-button fh-button--secondary" type="button"><i class="fh-icon fh-icon--mail" aria-hidden="true"></i>Email a link</button>
      </div>
    </form>
    <form class="fh-auth__form" data-fh-auth="up" method="post" action="/auth/sign-up">
      <div class="fh-field"><label for="auth-split-name">Name</label><input class="fh-input" id="auth-split-name" name="name" autocomplete="name" required placeholder="Ada Lovelace"></div>
      <div class="fh-field"><label for="auth-split-new-email">Email</label><input class="fh-input" id="auth-split-new-email" name="email" type="email" autocomplete="email" required placeholder="you@company.com"></div>
      <div class="fh-field"><label for="auth-split-new-pass">Password</label><input class="fh-input" id="auth-split-new-pass" name="password" type="password" autocomplete="new-password" required minlength="8"><p class="fh-field__hint">8 characters or more.</p></div>
      <label class="fh-check"><input type="checkbox" name="terms" required> I agree to the terms and privacy policy</label>
      <button class="fh-button" type="submit">Create account</button>
      <p class="fh-divider">or</p>
      <div class="fh-auth__social">
        <button class="fh-button fh-button--secondary" type="button"><i class="fh-icon fh-icon--github" aria-hidden="true"></i>GitHub</button>
        <button class="fh-button fh-button--secondary" type="button"><i class="fh-icon fh-icon--mail" aria-hidden="true"></i>Email a link</button>
      </div>
    </form>
    <p class="fh-auth__foot" data-fh-auth="in">New here? <label for="auth-split-up">Create an account</label></p>
    <p class="fh-auth__foot" data-fh-auth="up">Already have an account? <label for="auth-split-in">Sign in</label></p>
  </div>
</section>
```

#### AUT-1.2 · Card · full-bleed art

```html
<section class="fh-auth fh-auth--card" data-tone="violet" aria-label="Sign in or create an account" data-fh="AUT-1.2">
  <div class="fh-auth__art" aria-hidden="true"></div>
  <div class="fh-auth__panel">
    <p class="fh-auth__brand"><i class="fh-icon fh-icon--shield-check" aria-hidden="true"></i><b>Northwind Studio</b></p>
    <fieldset class="fh-segmented fh-auth__switch">
      <legend class="fh-sr-only">Account</legend>
      <label><input type="radio" name="auth-card" id="auth-card-in" value="in" checked> Sign in</label>
      <label><input type="radio" name="auth-card" id="auth-card-up" value="up"> Sign up</label>
    </fieldset>
    <header class="fh-auth__head">
      <h3 data-fh-auth="in">Welcome back</h3>
      <h3 data-fh-auth="up">Create your account</h3>
      <p data-fh-auth="in">Sign in to pick up where you left off.</p>
      <p data-fh-auth="up">Two minutes. No card needed.</p>
    </header>
    <form class="fh-auth__form" data-fh-auth="in" method="post" action="/auth/sign-in">
      <div class="fh-field"><label for="auth-card-email">Email</label><input class="fh-input" id="auth-card-email" name="email" type="email" autocomplete="email" required placeholder="you@company.com"></div>
      <div class="fh-field"><label for="auth-card-pass">Password</label><input class="fh-input" id="auth-card-pass" name="password" type="password" autocomplete="current-password" required minlength="8"></div>
      <div class="fh-auth__row"><label class="fh-check"><input type="checkbox" name="remember"> Remember me</label><a href="#forms">Forgot password?</a></div>
      <button class="fh-button" type="submit">Sign in</button>
      <p class="fh-divider">or</p>
      <div class="fh-auth__social">
        <button class="fh-button fh-button--secondary" type="button"><i class="fh-icon fh-icon--github" aria-hidden="true"></i>GitHub</button>
        <button class="fh-button fh-button--secondary" type="button"><i class="fh-icon fh-icon--mail" aria-hidden="true"></i>Email a link</button>
      </div>
    </form>
    <form class="fh-auth__form" data-fh-auth="up" method="post" action="/auth/sign-up">
      <div class="fh-field"><label for="auth-card-name">Name</label><input class="fh-input" id="auth-card-name" name="name" autocomplete="name" required placeholder="Ada Lovelace"></div>
      <div class="fh-field"><label for="auth-card-new-email">Email</label><input class="fh-input" id="auth-card-new-email" name="email" type="email" autocomplete="email" required placeholder="you@company.com"></div>
      <div class="fh-field"><label for="auth-card-new-pass">Password</label><input class="fh-input" id="auth-card-new-pass" name="password" type="password" autocomplete="new-password" required minlength="8"><p class="fh-field__hint">8 characters or more.</p></div>
      <label class="fh-check"><input type="checkbox" name="terms" required> I agree to the terms and privacy policy</label>
      <button class="fh-button" type="submit">Create account</button>
      <p class="fh-divider">or</p>
      <div class="fh-auth__social">
        <button class="fh-button fh-button--secondary" type="button"><i class="fh-icon fh-icon--github" aria-hidden="true"></i>GitHub</button>
        <button class="fh-button fh-button--secondary" type="button"><i class="fh-icon fh-icon--mail" aria-hidden="true"></i>Email a link</button>
      </div>
    </form>
    <p class="fh-auth__foot" data-fh-auth="in">New here? <label for="auth-card-up">Create an account</label></p>
    <p class="fh-auth__foot" data-fh-auth="up">Already have an account? <label for="auth-card-in">Sign in</label></p>
  </div>
</section>
```

#### AUT-1.3 · Plain · no art

```html
<section class="fh-auth fh-auth--plain" data-tone="sky" aria-label="Sign in or create an account" data-fh="AUT-1.3">
  <div class="fh-auth__panel">
    <p class="fh-auth__brand"><i class="fh-icon fh-icon--shield-check" aria-hidden="true"></i><b>Northwind Studio</b></p>
    <fieldset class="fh-segmented fh-auth__switch">
      <legend class="fh-sr-only">Account</legend>
      <label><input type="radio" name="auth-plain" id="auth-plain-in" value="in" checked> Sign in</label>
      <label><input type="radio" name="auth-plain" id="auth-plain-up" value="up"> Sign up</label>
    </fieldset>
    <header class="fh-auth__head">
      <h3 data-fh-auth="in">Welcome back</h3>
      <h3 data-fh-auth="up">Create your account</h3>
      <p data-fh-auth="in">Sign in to pick up where you left off.</p>
      <p data-fh-auth="up">Two minutes. No card needed.</p>
    </header>
    <form class="fh-auth__form" data-fh-auth="in" method="post" action="/auth/sign-in">
      <div class="fh-field"><label for="auth-plain-email">Email</label><input class="fh-input" id="auth-plain-email" name="email" type="email" autocomplete="email" required placeholder="you@company.com"></div>
      <div class="fh-field"><label for="auth-plain-pass">Password</label><input class="fh-input" id="auth-plain-pass" name="password" type="password" autocomplete="current-password" required minlength="8"></div>
      <div class="fh-auth__row"><label class="fh-check"><input type="checkbox" name="remember"> Remember me</label><a href="#forms">Forgot password?</a></div>
      <button class="fh-button" type="submit">Sign in</button>
      <p class="fh-divider">or</p>
      <div class="fh-auth__social">
        <button class="fh-button fh-button--secondary" type="button"><i class="fh-icon fh-icon--github" aria-hidden="true"></i>GitHub</button>
        <button class="fh-button fh-button--secondary" type="button"><i class="fh-icon fh-icon--mail" aria-hidden="true"></i>Email a link</button>
      </div>
    </form>
    <form class="fh-auth__form" data-fh-auth="up" method="post" action="/auth/sign-up">
      <div class="fh-field"><label for="auth-plain-name">Name</label><input class="fh-input" id="auth-plain-name" name="name" autocomplete="name" required placeholder="Ada Lovelace"></div>
      <div class="fh-field"><label for="auth-plain-new-email">Email</label><input class="fh-input" id="auth-plain-new-email" name="email" type="email" autocomplete="email" required placeholder="you@company.com"></div>
      <div class="fh-field"><label for="auth-plain-new-pass">Password</label><input class="fh-input" id="auth-plain-new-pass" name="password" type="password" autocomplete="new-password" required minlength="8"><p class="fh-field__hint">8 characters or more.</p></div>
      <label class="fh-check"><input type="checkbox" name="terms" required> I agree to the terms and privacy policy</label>
      <button class="fh-button" type="submit">Create account</button>
      <p class="fh-divider">or</p>
      <div class="fh-auth__social">
        <button class="fh-button fh-button--secondary" type="button"><i class="fh-icon fh-icon--github" aria-hidden="true"></i>GitHub</button>
        <button class="fh-button fh-button--secondary" type="button"><i class="fh-icon fh-icon--mail" aria-hidden="true"></i>Email a link</button>
      </div>
    </form>
    <p class="fh-auth__foot" data-fh-auth="in">New here? <label for="auth-plain-up">Create an account</label></p>
    <p class="fh-auth__foot" data-fh-auth="up">Already have an account? <label for="auth-plain-in">Sign in</label></p>
  </div>
</section>
```

### AUT-2 · Method

#### AUT-2.1 · Method · password or email link

```html
<section class="fh-auth" data-tone="lime" aria-label="Sign in or create an account" data-fh="AUT-2.1">
  <div class="fh-auth__art" aria-hidden="true"></div>
  <div class="fh-auth__panel">
    <p class="fh-auth__brand"><i class="fh-icon fh-icon--shield-check" aria-hidden="true"></i><b>Northwind</b> Admin</p>
    <fieldset class="fh-segmented fh-auth__switch">
      <legend class="fh-sr-only">Account</legend>
      <label><input type="radio" name="auth-method-mode" id="auth-method-in" value="in" checked> Sign in</label>
      <label><input type="radio" name="auth-method-mode" id="auth-method-up" value="up"> Create account</label>
    </fieldset>
    <header class="fh-auth__head">
      <h3 data-fh-auth="in">Welcome back</h3>
      <h3 data-fh-auth="up">Create your account</h3>
      <p data-fh-auth="in">Sign in to pick up where you left off.</p>
      <p data-fh-auth="up">We email you a link to verify your address.</p>
    </header>
    <fieldset class="fh-segmented fh-segmented--sm fh-auth__method" data-fh-auth="in">
      <legend class="fh-sr-only">Sign in with</legend>
      <label><input type="radio" name="auth-method-how" value="password" checked> Password</label>
      <label><input type="radio" name="auth-method-how" value="link"> Email link</label>
    </fieldset>
    <form class="fh-auth__form" data-fh-auth="in" data-fh-method="password" method="post" action="/auth/sign-in">
      <div class="fh-field"><label for="auth-method-id">Username or email</label><input class="fh-input" id="auth-method-id" name="identifier" autocomplete="username" autocapitalize="none" spellcheck="false" required placeholder="yourname"></div>
      <div class="fh-field"><label for="auth-method-pass">Password</label><input class="fh-input" id="auth-method-pass" name="password" type="password" autocomplete="current-password" required></div>
      <button class="fh-button" type="submit">Sign in</button>
    </form>
    <details class="fh-auth__forgot" data-fh-auth="in" data-fh-method="password">
      <summary>Forgot password?</summary>
      <form class="fh-auth__form" method="post" action="/auth/forgot">
        <div class="fh-field"><label for="auth-method-reset">Username or email</label><input class="fh-input" id="auth-method-reset" name="identifier" autocomplete="username" autocapitalize="none" spellcheck="false" required placeholder="yourname"></div>
        <button class="fh-button fh-button--secondary" type="submit">Send reset link</button>
      </form>
    </details>
    <form class="fh-auth__form" data-fh-auth="in" data-fh-method="link" method="post" action="/auth/link">
      <div class="fh-field"><label for="auth-method-link">Username or email</label><input class="fh-input" id="auth-method-link" name="identifier" autocomplete="username" autocapitalize="none" spellcheck="false" required placeholder="yourname"><p class="fh-field__hint">We email a one-time link to the address on your account.</p></div>
      <button class="fh-button" type="submit">Email me a link</button>
    </form>
    <form class="fh-auth__form" data-fh-auth="up" method="post" action="/auth/sign-up">
      <div class="fh-field"><label for="auth-method-new-email">Email</label><input class="fh-input" id="auth-method-new-email" name="email" type="email" autocomplete="email" required placeholder="you@company.com"></div>
      <div class="fh-field"><label for="auth-method-user">Username</label><div class="fh-input-group"><span aria-hidden="true">@</span><input class="fh-input" id="auth-method-user" name="username" autocomplete="username" required placeholder="yourname" aria-describedby="auth-method-rules"></div>
        <ul class="fh-auth__rules" id="auth-method-rules"><li data-state="met">3–32 chars</li><li data-state="met">Starts with a letter</li><li data-state="met">Letters, numbers, _ only</li><li data-state="checking">Checking…</li></ul></div>
      <button class="fh-button" type="submit">Send verification link</button>
    </form>
    <p class="fh-auth__foot" data-fh-auth="in">New here? <label for="auth-method-up">Create an account</label></p>
    <p class="fh-auth__foot" data-fh-auth="up">Already have an account? <label for="auth-method-in">Sign in</label></p>
  </div>
</section>
```

## FLD · Fields

The "Required" chip comes from the input's own required attribute and settles to "Done" once the field is valid. Errors only show after the visitor has interacted.

Classes: `fh-form` `fh-form__row` `fh-field` `fh-input` `fh-field__error` `fh-field--optional` `fh-input-group` `fh-select-wrap` `fh-select` `fh-textarea` `fh-field__hint` `fh-form__actions` `fh-button`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/forms/#FLD.

## CHO · Choices

Real radios and checkboxes under the styling, so they submit with the form and work with the keyboard. The segmented switch stays a row in a phone-width slot; add fh-segmented--stack to stack its options.

Classes: `fh-stack` `fh-stack--lg` `fh-segmented` `fh-sr-only` `fh-check` `fh-switch`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/forms/#CHO.

## UPL · Upload, range, tags, sheet

A dropzone over a real file input, a styled range, a tag field, and a dialog that slides in as a side sheet.

Classes: `fh-grid` `fh-dropzone` `fh-dropzone__title` `fh-dropzone__hint` `fh-stack` `fh-stack--lg` `fh-field` `fh-range` `fh-field--optional` `fh-tags` `fh-chip` `fh-chip__remove` `fh-button` `fh-button--secondary` `fh-dialog` `fh-dialog--sheet` `fh-dialog__header` `fh-subheading` `fh-close` `fh-dialog__body` `fh-check` `fh-switch` `fh-dl` `fh-dialog__footer`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/forms/#UPL.

## TAG · Tag field

Toned chips with a remove button and an input in one field. The inline variant adds no chrome until it is used: a text link with no tags, then a small round plus that opens room for one more.

Classes: `fh-field` `fh-field--optional` `fh-tags` `fh-chip` `fh-chip__remove` `fh-cluster` `fh-button` `fh-button--sm` `fh-button--ghost` `fh-icon` `fh-tags--inline` `fh-tags__add` `fh-tags__entry` `fh-tags__prefix`

### TAG-1 · Field

#### TAG-1.1 · Field

```html
<div class="fh-field fh-field--optional" data-fh="TAG-1.1"><label for="tg-channels">Channels</label>
  <div class="fh-tags">
    <span class="fh-chip" data-tone="sky">Messenger <button class="fh-chip__remove" type="button" aria-label="Remove Messenger"></button></span>
    <span class="fh-chip" data-tone="lime">WhatsApp <button class="fh-chip__remove" type="button" aria-label="Remove WhatsApp"></button></span>
    <input id="tg-channels" placeholder="Add a channel">
  </div>
</div>
```

### TAG-2 · Inline

#### TAG-2.1 · Inline · empty

```html
<div class="fh-cluster">
  <button type="button" class="fh-button fh-button--sm fh-button--ghost" data-fh="TAG-2.1"><i class="fh-icon fh-icon--hash" aria-hidden="true"></i>Tag</button>
</div>
```

#### TAG-2.2 · Inline · adding

```html
<div class="fh-tags fh-tags--inline" data-fh="TAG-2.2">
  <input aria-label="Add a tag" placeholder="Add a tag">
</div>
```

#### TAG-2.3 · Inline · with tags

```html
<div class="fh-tags fh-tags--inline" data-fh="TAG-2.3">
  <span class="fh-chip" data-tone="orange">applications <button class="fh-chip__remove" type="button" aria-label="Remove applications"></button></span>
  <span class="fh-chip" data-tone="lime">health <button class="fh-chip__remove" type="button" aria-label="Remove health"></button></span>
  <button class="fh-tags__add" type="button" aria-label="Add a tag"></button>
</div>
```

#### TAG-2.4 · Inline · link entry

```html
<div class="fh-tags fh-tags--inline" data-fh="TAG-2.4">
  <span class="fh-chip" data-tone="sky">utbms.com <button class="fh-chip__remove" type="button" aria-label="Remove utbms.com"></button></span>
  <span class="fh-tags__entry"><button class="fh-tags__prefix" type="button" aria-label="Protocol: https, click for http">https://</button><input aria-label="Link" placeholder="example.com/page"></span>
</div>
```

## ENT · Entity picker

Choose an account, person or client by its identity: avatar, an etch line, the name and a second line, a figure for the use case, then the chevron. The open list groups its options, and each option is the same row as the selection. Real radios underneath, so it submits and takes arrow keys with no script; firehorse.js mirrors the pick into the trigger and fires fh:entity.

Classes: `fh-field` `fh-field__label` `fh-entity-picker` `fh-entity` `fh-entity__value` `fh-avatar` `fh-avatar--circle` `fh-entity__sep` `fh-entity__who` `fh-entity__stat` `fh-entity-picker__list` `fh-entity-picker__group` `fh-entity-picker--rounded` `fh-entity-picker--etched` `fh-entity__stat--count`

### ENT-1 · Shapes

#### ENT-1.1 · Field

```html
<div class="fh-field" data-fh="ENT-1.1">
  <span class="fh-field__label" id="ent-a-l">Account</span>
  <div class="fh-entity-picker" data-fh-entity>
    <button class="fh-entity" type="button" popovertarget="ent-a" aria-haspopup="listbox" aria-labelledby="ent-a-l ent-a-v" style="anchor-name: --ent-a">
      <span class="fh-entity__value" id="ent-a-v">
        <span class="fh-avatar fh-avatar--circle" data-tone="sky">NS</span>
        <span class="fh-entity__sep"></span>
        <span class="fh-entity__who"><b>Northwind Studio</b><small>Owner · 4 seats</small></span>
        <span class="fh-entity__stat" data-tone="amber"><b>5</b><small>Open</small></span>
      </span>
    </button>
    <div class="fh-entity-picker__list" id="ent-a" popover role="listbox" aria-labelledby="ent-a-l" style="position-anchor: --ent-a">
      <fieldset class="fh-entity-picker__group"><legend>Workspaces</legend>
        <label class="fh-entity"><input type="radio" name="ent-a" value="northwind" checked>
          <span class="fh-avatar fh-avatar--circle" data-tone="sky">NS</span>
          <span class="fh-entity__sep"></span>
          <span class="fh-entity__who"><b>Northwind Studio</b><small>Owner · 4 seats</small></span>
          <span class="fh-entity__stat" data-tone="amber"><b>5</b><small>Open</small></span>
        </label>
        <label class="fh-entity"><input type="radio" name="ent-a" value="rascode">
          <span class="fh-avatar fh-avatar--circle" data-tone="accent">RC</span>
          <span class="fh-entity__sep"></span>
          <span class="fh-entity__who"><b>Rascode &amp; Company</b><small>Admin · 9 seats</small></span>
          <span class="fh-entity__stat" data-tone="rose"><b>12</b><small>Open</small></span>
        </label>
      </fieldset>
      <fieldset class="fh-entity-picker__group"><legend>Clients</legend>
        <label class="fh-entity"><input type="radio" name="ent-a" value="halcyon">
          <span class="fh-avatar fh-avatar--circle" data-tone="teal">HH</span>
          <span class="fh-entity__sep"></span>
          <span class="fh-entity__who"><b>Halcyon Health</b><small>Client · viewer</small></span>
          <span class="fh-entity__stat" data-tone="amber"><b>2</b><small>Open</small></span>
        </label>
        <label class="fh-entity"><input type="radio" name="ent-a" value="juniper">
          <span class="fh-avatar fh-avatar--circle" data-tone="lime">JL</span>
          <span class="fh-entity__sep"></span>
          <span class="fh-entity__who"><b>Juniper Labs</b><small>Client · editor</small></span>
          <span class="fh-entity__stat" data-tone="neutral"><b>0</b><small>Open</small></span>
        </label>
      </fieldset>
    </div>
  </div>
</div>
```

#### ENT-1.2 · Rounded

```html
<div class="fh-field" data-fh="ENT-1.2">
  <span class="fh-field__label" id="ent-b-l">Account</span>
  <div class="fh-entity-picker fh-entity-picker--rounded" data-fh-entity>
    <button class="fh-entity" type="button" popovertarget="ent-b" aria-haspopup="listbox" aria-labelledby="ent-b-l ent-b-v" style="anchor-name: --ent-b">
      <span class="fh-entity__value" id="ent-b-v">
        <span class="fh-avatar fh-avatar--circle" data-tone="sky">NS</span>
        <span class="fh-entity__sep"></span>
        <span class="fh-entity__who"><b>Northwind Studio</b><small>Owner · 4 seats</small></span>
        <span class="fh-entity__stat" data-tone="amber"><b>5</b><small>Open</small></span>
      </span>
    </button>
    <div class="fh-entity-picker__list" id="ent-b" popover role="listbox" aria-labelledby="ent-b-l" style="position-anchor: --ent-b">
      <fieldset class="fh-entity-picker__group"><legend>Workspaces</legend>
        <label class="fh-entity"><input type="radio" name="ent-b" value="northwind" checked>
          <span class="fh-avatar fh-avatar--circle" data-tone="sky">NS</span>
          <span class="fh-entity__sep"></span>
          <span class="fh-entity__who"><b>Northwind Studio</b><small>Owner · 4 seats</small></span>
          <span class="fh-entity__stat" data-tone="amber"><b>5</b><small>Open</small></span>
        </label>
        <label class="fh-entity"><input type="radio" name="ent-b" value="rascode">
          <span class="fh-avatar fh-avatar--circle" data-tone="accent">RC</span>
          <span class="fh-entity__sep"></span>
          <span class="fh-entity__who"><b>Rascode &amp; Company</b><small>Admin · 9 seats</small></span>
          <span class="fh-entity__stat" data-tone="rose"><b>12</b><small>Open</small></span>
        </label>
      </fieldset>
      <fieldset class="fh-entity-picker__group"><legend>Clients</legend>
        <label class="fh-entity"><input type="radio" name="ent-b" value="halcyon">
          <span class="fh-avatar fh-avatar--circle" data-tone="teal">HH</span>
          <span class="fh-entity__sep"></span>
          <span class="fh-entity__who"><b>Halcyon Health</b><small>Client · viewer</small></span>
          <span class="fh-entity__stat" data-tone="amber"><b>2</b><small>Open</small></span>
        </label>
        <label class="fh-entity"><input type="radio" name="ent-b" value="juniper">
          <span class="fh-avatar fh-avatar--circle" data-tone="lime">JL</span>
          <span class="fh-entity__sep"></span>
          <span class="fh-entity__who"><b>Juniper Labs</b><small>Client · editor</small></span>
          <span class="fh-entity__stat" data-tone="neutral"><b>0</b><small>Open</small></span>
        </label>
      </fieldset>
    </div>
  </div>
</div>
```

#### ENT-1.3 · Etched

```html
<div class="fh-field" data-fh="ENT-1.3">
  <span class="fh-field__label" id="ent-c-l">Account</span>
  <div class="fh-entity-picker fh-entity-picker--etched" data-fh-entity>
    <button class="fh-entity" type="button" popovertarget="ent-c" aria-haspopup="listbox" aria-labelledby="ent-c-l ent-c-v" style="anchor-name: --ent-c">
      <span class="fh-entity__value" id="ent-c-v">
        <span class="fh-avatar fh-avatar--circle" data-tone="sky">NS</span>
        <span class="fh-entity__sep"></span>
        <span class="fh-entity__who"><b>Northwind Studio</b><small>Owner · 4 seats</small></span>
        <span class="fh-entity__stat" data-tone="amber"><b>5</b><small>Open</small></span>
      </span>
    </button>
    <div class="fh-entity-picker__list" id="ent-c" popover role="listbox" aria-labelledby="ent-c-l" style="position-anchor: --ent-c">
      <fieldset class="fh-entity-picker__group"><legend>Workspaces</legend>
        <label class="fh-entity"><input type="radio" name="ent-c" value="northwind" checked>
          <span class="fh-avatar fh-avatar--circle" data-tone="sky">NS</span>
          <span class="fh-entity__sep"></span>
          <span class="fh-entity__who"><b>Northwind Studio</b><small>Owner · 4 seats</small></span>
          <span class="fh-entity__stat" data-tone="amber"><b>5</b><small>Open</small></span>
        </label>
        <label class="fh-entity"><input type="radio" name="ent-c" value="rascode">
          <span class="fh-avatar fh-avatar--circle" data-tone="accent">RC</span>
          <span class="fh-entity__sep"></span>
          <span class="fh-entity__who"><b>Rascode &amp; Company</b><small>Admin · 9 seats</small></span>
          <span class="fh-entity__stat" data-tone="rose"><b>12</b><small>Open</small></span>
        </label>
      </fieldset>
      <fieldset class="fh-entity-picker__group"><legend>Clients</legend>
        <label class="fh-entity"><input type="radio" name="ent-c" value="halcyon">
          <span class="fh-avatar fh-avatar--circle" data-tone="teal">HH</span>
          <span class="fh-entity__sep"></span>
          <span class="fh-entity__who"><b>Halcyon Health</b><small>Client · viewer</small></span>
          <span class="fh-entity__stat" data-tone="amber"><b>2</b><small>Open</small></span>
        </label>
        <label class="fh-entity"><input type="radio" name="ent-c" value="juniper">
          <span class="fh-avatar fh-avatar--circle" data-tone="lime">JL</span>
          <span class="fh-entity__sep"></span>
          <span class="fh-entity__who"><b>Juniper Labs</b><small>Client · editor</small></span>
          <span class="fh-entity__stat" data-tone="neutral"><b>0</b><small>Open</small></span>
        </label>
      </fieldset>
    </div>
  </div>
</div>
```

### ENT-2 · Content

#### ENT-2.1 · No avatar

```html
<div class="fh-field" data-fh="ENT-2.1">
  <span class="fh-field__label" id="ent-d-l">Account</span>
  <div class="fh-entity-picker fh-entity-picker--etched" data-fh-entity>
    <button class="fh-entity" type="button" popovertarget="ent-d" aria-haspopup="listbox" aria-labelledby="ent-d-l ent-d-v" style="anchor-name: --ent-d">
      <span class="fh-entity__value" id="ent-d-v">
        <span class="fh-entity__who"><b>Northwind Studio</b><small>Owner · 4 seats</small></span>
        <span class="fh-entity__stat" data-tone="amber"><b>5</b><small>Open</small></span>
      </span>
    </button>
    <div class="fh-entity-picker__list" id="ent-d" popover role="listbox" aria-labelledby="ent-d-l" style="position-anchor: --ent-d">
      <fieldset class="fh-entity-picker__group"><legend>Workspaces</legend>
        <label class="fh-entity"><input type="radio" name="ent-d" value="northwind" checked>
          <span class="fh-entity__who"><b>Northwind Studio</b><small>Owner · 4 seats</small></span>
          <span class="fh-entity__stat" data-tone="amber"><b>5</b><small>Open</small></span>
        </label>
        <label class="fh-entity"><input type="radio" name="ent-d" value="rascode">
          <span class="fh-entity__who"><b>Rascode &amp; Company</b><small>Admin · 9 seats</small></span>
          <span class="fh-entity__stat" data-tone="rose"><b>12</b><small>Open</small></span>
        </label>
      </fieldset>
      <fieldset class="fh-entity-picker__group"><legend>Clients</legend>
        <label class="fh-entity"><input type="radio" name="ent-d" value="halcyon">
          <span class="fh-entity__who"><b>Halcyon Health</b><small>Client · viewer</small></span>
          <span class="fh-entity__stat" data-tone="amber"><b>2</b><small>Open</small></span>
        </label>
        <label class="fh-entity"><input type="radio" name="ent-d" value="juniper">
          <span class="fh-entity__who"><b>Juniper Labs</b><small>Client · editor</small></span>
          <span class="fh-entity__stat" data-tone="neutral"><b>0</b><small>Open</small></span>
        </label>
      </fieldset>
    </div>
  </div>
</div>
```

#### ENT-2.2 · Counter

```html
<div class="fh-field" data-fh="ENT-2.2">
  <span class="fh-field__label" id="ent-e-l">Account</span>
  <div class="fh-entity-picker fh-entity-picker--rounded" data-fh-entity>
    <button class="fh-entity" type="button" popovertarget="ent-e" aria-haspopup="listbox" aria-labelledby="ent-e-l ent-e-v" style="anchor-name: --ent-e">
      <span class="fh-entity__value" id="ent-e-v">
        <span class="fh-avatar fh-avatar--circle" data-tone="sky">NS</span>
        <span class="fh-entity__sep"></span>
        <span class="fh-entity__who"><b>Northwind Studio</b><small>Owner · 4 seats</small></span>
        <span class="fh-entity__stat fh-entity__stat--count" data-tone="amber" aria-label="5 open actions"><b>5</b></span>
      </span>
    </button>
    <div class="fh-entity-picker__list" id="ent-e" popover role="listbox" aria-labelledby="ent-e-l" style="position-anchor: --ent-e">
      <fieldset class="fh-entity-picker__group"><legend>Workspaces</legend>
        <label class="fh-entity"><input type="radio" name="ent-e" value="northwind" checked>
          <span class="fh-avatar fh-avatar--circle" data-tone="sky">NS</span>
          <span class="fh-entity__sep"></span>
          <span class="fh-entity__who"><b>Northwind Studio</b><small>Owner · 4 seats</small></span>
          <span class="fh-entity__stat fh-entity__stat--count" data-tone="amber" aria-label="5 open actions"><b>5</b></span>
        </label>
        <label class="fh-entity"><input type="radio" name="ent-e" value="rascode">
          <span class="fh-avatar fh-avatar--circle" data-tone="accent">RC</span>
          <span class="fh-entity__sep"></span>
          <span class="fh-entity__who"><b>Rascode &amp; Company</b><small>Admin · 9 seats</small></span>
          <span class="fh-entity__stat fh-entity__stat--count" data-tone="rose" aria-label="12 open actions"><b>12</b></span>
        </label>
      </fieldset>
      <fieldset class="fh-entity-picker__group"><legend>Clients</legend>
        <label class="fh-entity"><input type="radio" name="ent-e" value="halcyon">
          <span class="fh-avatar fh-avatar--circle" data-tone="teal">HH</span>
          <span class="fh-entity__sep"></span>
          <span class="fh-entity__who"><b>Halcyon Health</b><small>Client · viewer</small></span>
          <span class="fh-entity__stat fh-entity__stat--count" data-tone="amber" aria-label="2 open actions"><b>2</b></span>
        </label>
        <label class="fh-entity"><input type="radio" name="ent-e" value="juniper">
          <span class="fh-avatar fh-avatar--circle" data-tone="lime">JL</span>
          <span class="fh-entity__sep"></span>
          <span class="fh-entity__who"><b>Juniper Labs</b><small>Client · editor</small></span>
          <span class="fh-entity__stat fh-entity__stat--count" data-tone="neutral" aria-label="0 open actions"><b>0</b></span>
        </label>
      </fieldset>
    </div>
  </div>
</div>
```

#### ENT-2.3 · Person · due today

```html
<div class="fh-field" data-fh="ENT-2.3">
  <span class="fh-field__label" id="ent-f-l">Assignee</span>
  <div class="fh-entity-picker" data-fh-entity>
    <button class="fh-entity" type="button" popovertarget="ent-f" aria-haspopup="listbox" aria-labelledby="ent-f-l ent-f-v" style="anchor-name: --ent-f">
      <span class="fh-entity__value" id="ent-f-v">
        <span class="fh-avatar fh-avatar--circle" data-tone="violet">AM</span>
        <span class="fh-entity__sep"></span>
        <span class="fh-entity__who"><b>Ava Marlow</b><small>Design lead</small></span>
        <span class="fh-entity__stat" data-tone="rose"><b>3</b><small>Due</small></span>
      </span>
    </button>
    <div class="fh-entity-picker__list" id="ent-f" popover role="listbox" aria-labelledby="ent-f-l" style="position-anchor: --ent-f">
      <fieldset class="fh-entity-picker__group"><legend>Team</legend>
        <label class="fh-entity"><input type="radio" name="ent-f" value="ava" checked>
          <span class="fh-avatar fh-avatar--circle" data-tone="violet">AM</span>
          <span class="fh-entity__sep"></span>
          <span class="fh-entity__who"><b>Ava Marlow</b><small>Design lead</small></span>
          <span class="fh-entity__stat" data-tone="rose"><b>3</b><small>Due</small></span>
        </label>
        <label class="fh-entity"><input type="radio" name="ent-f" value="mateo">
          <span class="fh-avatar fh-avatar--circle" data-tone="sky">MO</span>
          <span class="fh-entity__sep"></span>
          <span class="fh-entity__who"><b>Mateo Ortiz</b><small>Engineer</small></span>
          <span class="fh-entity__stat" data-tone="amber"><b>1</b><small>Due</small></span>
        </label>
      </fieldset>
      <fieldset class="fh-entity-picker__group"><legend>Contractors</legend>
        <label class="fh-entity"><input type="radio" name="ent-f" value="priya">
          <span class="fh-avatar fh-avatar--circle" data-tone="orange">PN</span>
          <span class="fh-entity__sep"></span>
          <span class="fh-entity__who"><b>Priya Nand</b><small>Copy · until Dec</small></span>
          <span class="fh-entity__stat" data-tone="neutral"><b>0</b><small>Due</small></span>
        </label>
      </fieldset>
    </div>
  </div>
</div>
```

## DTB · Datatable

Classes: `fh-dt`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/data/#DTB.

## TBL · Table

With fh-table--reflow, rows turn into labelled cards when the slot is under 36rem.

Classes: `fh-table-wrap` `fh-table` `fh-table--reflow` `fh-num` `fh-badge`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/data/#TBL.

## PRD · Product grid

Classes: `fh-product-grid` `fh-product` `fh-product__media` `fh-product__alt` `fh-product__badge` `fh-product__fav` `fh-product__meta` `fh-product__title` `fh-cluster` `fh-price` `fh-swatches` `fh-swatches--sm` `fh-product__add` `fh-button` `fh-button--sm` `fh-button--secondary` `fh-icon`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/commerce/#PRD.

## PDP · Product page

Classes: `fh-pdp` `fh-gallery` `fh-gallery__main` `fh-gallery__thumbs` `fh-pdp__info` `fh-label` `fh-cluster` `fh-price` `fh-price--lg` `fh-rating` `fh-link` `fh-muted` `fh-pdp__label` `fh-swatches` `fh-sizes` `fh-pdp__buy` `fh-qty` `fh-button` `fh-button--plain` `fh-icon` `fh-trust` `fh-accordion` `fh-review-bars`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/commerce/#PDP.

## CKO · Checkout

Classes: `fh-checkout` `fh-stack` `fh-stack--lg` `fh-stepper` `fh-express` `fh-or` `fh-checkout__step` `fh-field` `fh-input` `fh-field__error` `fh-check` `fh-switch` `fh-form__row` `fh-choice-cards` `fh-choice-card` `fh-paycard` `fh-paycard__front` `fh-paycard__top` `fh-paycard__chip` `fh-paycard__brand` `fh-paycard__mark` `fh-paycard__number` `fh-paycard__row` `fh-paycard__back` `fh-paycard__stripe` `fh-paycard__sig` `fh-card-field` `fh-field__hint` `fh-paycard-cvc` `fh-button` `fh-button--lg` `fh-button--plain` `fh-checkout__aside` `fh-label` `fh-line-items` `fh-line-item` `fh-qty` `fh-qty--sm` `fh-line-item__remove` `fh-input-group` `fh-button--sm` `fh-button--secondary` `fh-summary` `fh-summary__discount` `fh-summary__total`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/commerce/#CKO.

## EXP · Express pay

Classes: `fh-express`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/commerce/#EXP.

## CCH · Choice cards

Classes: `fh-choice-cards` `fh-choice-card`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/commerce/#CCH.

## PAY · Payment card

Classes: `fh-paycard` `fh-paycard__front` `fh-paycard__top` `fh-paycard__chip` `fh-paycard__brand` `fh-paycard__mark` `fh-paycard__number` `fh-paycard__row` `fh-paycard__back` `fh-paycard__stripe` `fh-paycard__sig`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/commerce/#PAY.

## CRT · Cart line items

Classes: `fh-line-items` `fh-line-item` `fh-qty` `fh-qty--sm` `fh-line-item__remove`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/commerce/#CRT.

## SUM · Order summary

Classes: `fh-summary` `fh-summary__discount` `fh-summary__total`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/commerce/#SUM.

## CNF · Order confirmation

Classes: `fh-confirm` `fh-icon-tile` `fh-icon-tile--solid` `fh-icon` `fh-label` `fh-muted`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/commerce/#CNF.

## INV · Invoice

The sheet: logo and number, title, from and bill-to with the dates, line items, totals, a signature, payment details and notes. __cover adds a picture band; --classic centres the logo and sets a small-caps title. data-fh-scheme="light" keeps it paper on a dark page, and it prints on its own. The pay bar (fh-pay --float) sticks to the bottom; Pay opens the payment panel up out of it.

Classes: `fh-invoice` `fh-invoice__cover` `fh-invoice__head` `fh-invoice__logo` `fh-invoice__number` `fh-invoice__title` `fh-invoice__parties` `fh-invoice__label` `fh-invoice__dates` `fh-invoice__items` `fh-invoice__totals` `fh-invoice__total` `fh-invoice__sign` `fh-invoice__foot` `fh-invoice--classic` `fh-pay` `fh-pay--float` `fh-pay__mark` `fh-pay__doc` `fh-pay__amount` `fh-chip` `fh-chip--tone` `fh-pay__icon` `fh-icon` `fh-button` `fh-button--sm` `fh-pay__panel` `fh-pay__head` `fh-pay__route` `fh-pay__party` `fh-pay__sum` `fh-pay__total` `fh-pay__details` `fh-pay__actions`

### INV-1 · Sheet

#### INV-1.1 · Cover

```html
<article class="fh-invoice" data-fh-scheme="light" data-fh="INV-1.1">
  <img class="fh-invoice__cover" src="img/backdrop/lipizzaner-horse.webp" alt>
  <header class="fh-invoice__head">
    <span class="fh-invoice__logo"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M7 4h11a8 8 0 0 1 2.2 15.7L26 28h-6l-5.2-7.6H13V28H7zm6 5v6.6h4.6a3.3 3.3 0 0 0 0-6.6z"></path></svg></span>
    <p class="fh-invoice__number">INV-0513-0057</p>
    <h2 class="fh-invoice__title">Invoice</h2>
  </header>
  <div class="fh-invoice__parties">
    <div><h3 class="fh-invoice__label">From</h3><address><b>Rascode</b><br>hello@rascode.dev<br>rascode.dev</address></div>
    <div><h3 class="fh-invoice__label">Bill to</h3><address><b>Maya Okafor</b><br>Northwind Studio<br>maya@northwind.example</address></div>
    <dl class="fh-invoice__dates"><div><dt>Issued</dt><dd>May 13, 2026</dd></div><div><dt>Due</dt><dd>Jun 12, 2026</dd></div></dl>
  </div>
  <table class="fh-invoice__items">
    <thead><tr><th>Description</th><th>Qty</th><th>Price</th><th>Amount</th></tr></thead>
    <tbody>
      <tr><td>Firehorse theme<small>Tokens, type and colour for your brand</small></td><td>1</td><td>$2,400.00</td><td>$2,400.00</td></tr>
      <tr><td>Client portal build<small>Invoices, files and messages</small></td><td>1</td><td>$1,800.00</td><td>$1,800.00</td></tr>
      <tr><td>Support<small>Per month</small></td><td>3</td><td>$200.00</td><td>$600.00</td></tr>
    </tbody>
  </table>
  <dl class="fh-invoice__totals">
    <div><dt>Subtotal</dt><dd>$4,800.00</dd></div>
    <div><dt>Tax (15%)</dt><dd>$720.00</dd></div>
    <div class="fh-invoice__total"><dt>Total</dt><dd>$5,520.00</dd></div>
  </dl>
  <p class="fh-invoice__sign">Rascode</p>
  <footer class="fh-invoice__foot">
    <div><h3>Payment details</h3><dl><div><dt>Method</dt><dd>Bank transfer</dd></div><div><dt>Bank</dt><dd>First Example Bank</dd></div><div><dt>Reference</dt><dd>INV-0513-0057</dd></div></dl></div>
    <div><h3>Notes</h3><p>Thank you for your business.</p></div>
  </footer>
</article>
```

#### INV-1.2 · Modern

```html
<article class="fh-invoice" data-fh-scheme="light" data-fh="INV-1.2">
  <header class="fh-invoice__head">
    <span class="fh-invoice__logo"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M7 4h11a8 8 0 0 1 2.2 15.7L26 28h-6l-5.2-7.6H13V28H7zm6 5v6.6h4.6a3.3 3.3 0 0 0 0-6.6z"></path></svg></span>
    <p class="fh-invoice__number">INV-0602-0061</p>
    <h2 class="fh-invoice__title">Invoice</h2>
  </header>
  <div class="fh-invoice__parties">
    <div><h3 class="fh-invoice__label">From</h3><address><b>Rascode</b><br>hello@rascode.dev<br>rascode.dev</address></div>
    <div><h3 class="fh-invoice__label">Bill to</h3><address><b>Theo Laurent</b><br>Hexwork<br>theo@hexwork.example</address></div>
    <dl class="fh-invoice__dates"><div><dt>Issued</dt><dd>May 13, 2026</dd></div><div><dt>Due</dt><dd>Jun 12, 2026</dd></div></dl>
  </div>
  <table class="fh-invoice__items">
    <thead><tr><th>Description</th><th>Qty</th><th>Price</th><th>Amount</th></tr></thead>
    <tbody>
      <tr><td>Design review<small>Two rounds</small></td><td>1</td><td>$900.00</td><td>$900.00</td></tr>
      <tr><td>Audit<small>AI visibility audit</small></td><td>1</td><td>$600.00</td><td>$600.00</td></tr>
    </tbody>
  </table>
  <dl class="fh-invoice__totals">
    <div><dt>Subtotal</dt><dd>$1,500.00</dd></div>
    <div><dt>Tax (15%)</dt><dd>$225.00</dd></div>
    <div class="fh-invoice__total"><dt>Total</dt><dd>$1,725.00</dd></div>
  </dl>
  <p class="fh-invoice__sign">Rascode</p>
  <footer class="fh-invoice__foot">
    <div><h3>Payment details</h3><dl><div><dt>Method</dt><dd>Bank transfer</dd></div><div><dt>Bank</dt><dd>First Example Bank</dd></div><div><dt>Reference</dt><dd>INV-0602-0061</dd></div></dl></div>
    <div><h3>Notes</h3><p>Thank you for your business.</p></div>
  </footer>
</article>
```

#### INV-1.3 · Classic

```html
<article class="fh-invoice fh-invoice--classic" data-fh-scheme="light" data-fh="INV-1.3">
  <header class="fh-invoice__head">
    <span class="fh-invoice__logo"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M7 4h11a8 8 0 0 1 2.2 15.7L26 28h-6l-5.2-7.6H13V28H7zm6 5v6.6h4.6a3.3 3.3 0 0 0 0-6.6z"></path></svg></span>
    <p class="fh-invoice__number">INV-0611-0064</p>
    <h2 class="fh-invoice__title">Invoice</h2>
  </header>
  <div class="fh-invoice__parties">
    <div><h3 class="fh-invoice__label">From</h3><address><b>Rascode</b><br>hello@rascode.dev<br>rascode.dev</address></div>
    <div><h3 class="fh-invoice__label">Bill to</h3><address><b>Isla Moreau</b><br>Lumen<br>isla@lumen.example</address></div>
    <dl class="fh-invoice__dates"><div><dt>Issued</dt><dd>May 13, 2026</dd></div><div><dt>Due</dt><dd>Jun 12, 2026</dd></div></dl>
  </div>
  <table class="fh-invoice__items">
    <thead><tr><th>Description</th><th>Qty</th><th>Price</th><th>Amount</th></tr></thead>
    <tbody>
      <tr><td>Retainer<small>June</small></td><td>1</td><td>$1,200.00</td><td>$1,200.00</td></tr>
    </tbody>
  </table>
  <dl class="fh-invoice__totals">
    <div><dt>Subtotal</dt><dd>$1,200.00</dd></div>
    <div><dt>Tax (15%)</dt><dd>$180.00</dd></div>
    <div class="fh-invoice__total"><dt>Total</dt><dd>$1,380.00</dd></div>
  </dl>
  <p class="fh-invoice__sign">Rascode</p>
  <footer class="fh-invoice__foot">
    <div><h3>Payment details</h3><dl><div><dt>Method</dt><dd>Bank transfer</dd></div><div><dt>Bank</dt><dd>First Example Bank</dd></div><div><dt>Reference</dt><dd>INV-0611-0064</dd></div></dl></div>
    <div><h3>Notes</h3><p>Thank you for your business.</p></div>
  </footer>
</article>
```

### INV-2 · Pay

#### INV-2.1 · Pay bar · panel

```html
<div class="fh-pay fh-pay--float" data-fh-scheme="dark" data-fh="INV-2.1">
  <span class="fh-pay__mark"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M7 4h11a8 8 0 0 1 2.2 15.7L26 28h-6l-5.2-7.6H13V28H7zm6 5v6.6h4.6a3.3 3.3 0 0 0 0-6.6z"></path></svg></span>
  <span class="fh-pay__doc"><b>Invoice</b><small>INV-0513-0057</small></span>
  <b class="fh-pay__amount">$5,520</b>
  <span class="fh-chip fh-chip--tone" data-tone="amber">Pending</span>
  <a class="fh-pay__icon" href="#invoice" aria-label="Download PDF"><i class="fh-icon fh-icon--download" aria-hidden="true"></i></a>
  <button class="fh-button fh-button--sm" type="button" popovertarget="pay-inv-1">Pay</button>
  <div class="fh-pay__panel" id="pay-inv-1" popover>
    <header class="fh-pay__head"><span class="fh-pay__doc"><b>Invoice</b><small>INV-0513-0057</small></span><span class="fh-chip fh-chip--tone" data-tone="amber">Pending</span></header>
    <p class="fh-pay__route"><span class="fh-pay__party"><span class="fh-pay__mark"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M7 4h11a8 8 0 0 1 2.2 15.7L26 28h-6l-5.2-7.6H13V28H7zm6 5v6.6h4.6a3.3 3.3 0 0 0 0-6.6z"></path></svg></span>Rascode</span><span aria-hidden="true">→</span><span class="fh-pay__party"><img src="img/avatars/maya.webp" alt>Maya Okafor</span></p>
    <div class="fh-pay__sum">
      <p class="fh-pay__total" style="margin: 0"><span>Total</span><b>$5,520</b></p>
      <dl><div><dt>Issued</dt><dd>May 13</dd></div><div><dt>Due</dt><dd>Jun 12<small>in 30 days</small></dd></div></dl>
    </div>
    <details class="fh-pay__details" open>
      <summary>Payment details</summary>
      <dl><div><dt>Method</dt><dd>Bank transfer</dd></div><div><dt>Bank</dt><dd>First Example Bank</dd></div><div><dt>Account</dt><dd>1234 5678 9012</dd></div><div><dt>Reference</dt><dd>INV-0513-0057</dd></div></dl>
    </details>
    <footer class="fh-pay__actions">
      <a class="fh-pay__icon" href="#invoice" aria-label="Download PDF"><i class="fh-icon fh-icon--download" aria-hidden="true"></i></a>
      <button class="fh-pay__icon" type="button" popovertarget="pay-inv-1" popovertargetaction="hide" aria-label="Close"><i class="fh-icon fh-icon--x" aria-hidden="true"></i></button>
      <a class="fh-button" href="#invoice">Pay now</a>
    </footer>
  </div>
</div>
```

## BAL · Balance

The total, what is available, what is pending and declined, and the split by segment or entity.

Classes: `fh-balance` `fh-balance__label` `fh-balance__figure` `fh-balance__currency` `fh-balance__cents` `fh-balance__meta` `fh-balance__split` `fh-balance__legend`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/finance/#BAL.

## SEG · Segment switch

All, Business, Personal; entities appear under Business.

Classes: `fh-stack` `fh-segment` `fh-segment--entities`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/finance/#SEG.

## ACN · Account card

Name, institution and last four, the entity tag, balance and sync health. Owed balances read red.

Classes: `fh-accounts` `fh-account` `fh-account__head` `fh-account__mark` `fh-account__name` `fh-account__sub` `fh-account__tag` `fh-account__figure` `fh-account__meta` `fh-account__foot`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/finance/#ACN.

## LDG · Ledger

Pending first and labelled; declined and reversed struck through; money in reads green with a plus.

Classes: `fh-ledger` `fh-ledger__day` `fh-ledger__mark` `fh-ledger__what` `fh-ledger__when` `fh-ledger__status` `fh-ledger__amount`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/finance/#LDG.

## VCD · Virtual card

A card face for issued cards: last four only, spend against its limit, lock and declines.

Classes: `fh-vcards` `fh-vcard` `fh-vcard__name` `fh-vcard__number` `fh-vcard__limit`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/finance/#VCD.

## CNX · Connection status

One row per provider: health, last sync and the one action it needs.

Classes: `fh-connections` `fh-btn` `fh-btn--sm`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/finance/#CNX.

## MST · Masthead

A glass header with the stacking deck's caption: number left in the tone, title right, an etched rule under both, on an etched, see-through, blurred panel. --bar is the one-line top bar: no rule, the client's round logo first (__mark). Shown here over a picture so the frost reads.

Classes: `fh-masthead` `fh-masthead--bar` `fh-avatar` `fh-avatar--circle` `fh-masthead__mark` `fh-masthead__caption` `fh-masthead__index` `fh-masthead__title` `fh-masthead__foot` `fh-masthead__meta` `fh-masthead__tools` `fh-segmented` `fh-segmented--sm` `fh-sr-only` `fh-chip` `fh-button` `fh-button--sm`

### MST-1 · Masthead

#### MST-1.1 · Bar

```html
<header class="fh-masthead fh-masthead--bar" data-tone="amber" data-fh="MST-1.1">
  <span class="fh-avatar fh-avatar--circle fh-masthead__mark" role="img" aria-label="Acme Supply"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 19 12 5l7 14"></path><path d="M8.5 13h7"></path><circle cx="12" cy="5" r="1.3" fill="currentColor"></circle></svg></span>
  <p class="fh-masthead__caption"><span class="fh-masthead__index">07</span><span class="fh-masthead__title">Business</span></p>
  <div class="fh-masthead__foot">
    <p class="fh-masthead__meta">7 businesses</p>
    <div class="fh-masthead__tools">
      <fieldset class="fh-segmented fh-segmented--sm"><legend class="fh-sr-only">Row spacing</legend><label><input type="radio" name="mst-rows" value="sm" data-fh-rows-select> S</label><label><input type="radio" name="mst-rows" value="md" data-fh-rows-select checked> M</label><label><input type="radio" name="mst-rows" value="lg" data-fh-rows-select> L</label><label><input type="radio" name="mst-rows" value="xl" data-fh-rows-select> XL</label></fieldset>
    </div>
  </div>
</header>
```

#### MST-1.2 · Page

```html
<header class="fh-masthead" data-tone="amber" data-fh="MST-1.2">
  <p class="fh-masthead__caption"><span class="fh-masthead__index">07</span><span class="fh-masthead__title">Business</span></p>
  <div class="fh-masthead__foot">
    <p class="fh-masthead__meta">7 businesses · 5 owned · 2 client</p>
    <div class="fh-masthead__tools"><span class="fh-chip" data-tone="lime">All synced</span><a class="fh-button fh-button--sm" href="#a-masthead">New business</a></div>
  </div>
</header>
```

## BKD · Backdrop

A quiet abstract picture behind a whole app: soft tone fields under the sign-in page's etched contours. Put it first inside fh-app; it is fixed to the viewport, and the sidebar and top bar turn to glass over it. --fh-backdrop-strength sets how much tone shows. Glass over it frosts by --fh-frost (0–1), a theme token; a range with data-fh-frost-select dials it live and remembers it. Shown here in a framed stage.

Classes: `fh-backdrop` `fh-field` `fh-field__label` `fh-range`

### BKD-1 · Backdrop

#### BKD-1.1 · Backdrop

```html
<div class="fh-backdrop" aria-hidden="true" style="position: absolute" data-fh="BKD-1.1"></div>
```

#### BKD-1.2 · Frost slider

```html
<label class="fh-field" style="position: relative; z-index: 1; max-inline-size: 16rem; margin-block-end: var(--fh-space-4)" data-fh="BKD-1.2"><span class="fh-field__label">Frost</span><input class="fh-range" type="range" min="0" max="100" value="60" data-fh-frost-select></label>
```

## REC · Record header

The top of a record page: eyebrow, mark, name, what it does, identifying facts and actions. fh-record--cover adds a band across the top, a picture or etched tone art, with the mark overlapping its edge.

Classes: `fh-record` `fh-eyebrow-pill` `fh-record__mark` `fh-icon` `fh-record__id` `fh-record__title` `fh-record__sub` `fh-record__meta` `fh-record__actions` `fh-button` `fh-button--sm` `fh-button--secondary` `fh-record--cover` `fh-record__cover`

### REC-1 · Record header

#### REC-1.1 · Plain

```html
<header class="fh-record" data-tone="orange" data-fh="REC-1.1">
  <p class="fh-eyebrow-pill">API · 07</p>
  <div class="fh-record__mark" data-state="live"><i class="fh-icon fh-icon--code" aria-hidden="true"></i></div>
  <div class="fh-record__id"><h2 class="fh-record__title">Ledger API</h2><p class="fh-record__sub">Accounts, entries and balances over REST.</p><p class="fh-record__meta"><span>ledger</span><span>api.example.com</span></p></div>
  <div class="fh-record__actions"><a class="fh-button fh-button--sm fh-button--secondary" href="#a-record">Docs</a><a class="fh-button fh-button--sm" href="#a-record">Open</a></div>
</header>
```

#### REC-1.2 · Cover

```html
<header class="fh-record fh-record--cover" data-tone="teal" data-fh="REC-1.2">
  <div class="fh-record__cover"></div>
  <p class="fh-eyebrow-pill">Business · Client</p>
  <div class="fh-record__mark">AC</div>
  <div class="fh-record__id"><h2 class="fh-record__title">Acme Supply Co.</h2><p class="fh-record__sub">Tools and parts for small builders.</p><p class="fh-record__meta"><span>acme</span><span>Austin, TX</span><span>Since 2019</span></p></div>
  <div class="fh-record__actions"><a class="fh-button fh-button--sm" href="#a-record">Edit</a></div>
</header>
```

## SEC · Section card

One area of a record page: title with chips on the right, a lede, the body, and a foot for its actions. --inset is a sunken sub-card inside another; --aside puts the lede beside the title on wide slots.

Classes: `fh-section-card` `fh-section-card__head` `fh-section-card__title` `fh-icon` `fh-section-card__tools` `fh-chip` `fh-section-card__lede` `fh-section-card__subhead` `fh-section-card__note` `fh-section-card__foot` `fh-button` `fh-button--sm` `fh-section-card--inset` `fh-section-card--aside`

### SEC-1 · Section card

#### SEC-1.1 · Default

```html
<section class="fh-section-card" data-tone="teal" aria-labelledby="sec-demo-1" data-fh="SEC-1.1">
  <header class="fh-section-card__head">
    <h2 class="fh-section-card__title" id="sec-demo-1"><i class="fh-icon fh-icon--building-2" aria-hidden="true"></i>Identity</h2>
    <div class="fh-section-card__tools">
      <span class="fh-chip" data-tone="lime">Complete</span>
      <span class="fh-chip" data-tone="teal">6 fields</span>
    </div>
  </header>
  <p class="fh-section-card__lede">Who the business is: its names, its code and how it presents itself.</p>
  <h3 class="fh-section-card__subhead">Names</h3>
  <p class="fh-section-card__note">Legal name comes from the state filing.</p>
  <footer class="fh-section-card__foot">
    <p class="fh-section-card__note">Saved 2 min ago</p>
    <button class="fh-button fh-button--sm" type="button">Save</button>
  </footer>
</section>
```

#### SEC-1.2 · Inset

```html
<section class="fh-section-card fh-section-card--inset" aria-labelledby="sec-demo-3" data-fh="SEC-1.2">
  <header class="fh-section-card__head"><h3 class="fh-section-card__title" id="sec-demo-3">Headquarters</h3><div class="fh-section-card__tools"><span class="fh-chip" data-tone="sky">Default</span></div></header>
  <p class="fh-section-card__note">400 Congress Ave, Austin, TX 78701</p>
</section>
```

#### SEC-1.3 · Aside

```html
<section class="fh-section-card fh-section-card--aside" aria-labelledby="sec-demo-5" data-fh="SEC-1.3">
  <header class="fh-section-card__head"><h2 class="fh-section-card__title" id="sec-demo-5"><i class="fh-icon fh-icon--code" aria-hidden="true"></i>Property record</h2></header>
  <p class="fh-section-card__lede">The full record as stored, and as structured data for search engines.</p>
</section>
```

## MET · Metric tiles

One fact per tile: label with an icon, the value, a line under it and where it came from. As many across as fit. Add an fh-progress for a share done, --needed for a fact still to fill in, or make the tile an <a> to open its area. --spread puts the label and description at the top and the value at the bottom, with a wide gap. __row holds avatars, cubes and chips. __more is an etched line with a chevron: open, the tile takes the whole row and shows its detail. __delta shows the change (data-trend; data-good="down" where down is good), and a sparkline, ring or gauge drops in as it is.

Classes: `fh-metric` `fh-metric__label` `fh-icon` `fh-metric__value` `fh-metric__sub` `fh-metric__source` `fh-progress` `fh-metric--needed` `fh-metric--spread` `fh-cube` `fh-cube--sm` `fh-metric__row` `fh-avatars` `fh-avatar` `fh-avatar--sm` `fh-avatar--square` `fh-avatars__more` `fh-chip` `fh-metric__more` `fh-kv` `fh-metric__figure` `fh-metric__delta` `fh-sparkline` `fh-gauge` `fh-metric--tinted` `fh-metric--wide`

### MET-1 · Metric tile

#### MET-1.1 · Metric

```html
<article class="fh-metric" data-tone="teal" data-fh="MET-1.1">
  <p class="fh-metric__label"><i class="fh-icon fh-icon--building-2" aria-hidden="true"></i>Structure</p>
  <p class="fh-metric__value">LLC</p>
  <p class="fh-metric__sub">Formed 2019 · Delaware</p>
  <p class="fh-metric__source">State records</p>
</article>
```

#### MET-1.2 · Progress

```html
<article class="fh-metric" data-tone="lime" data-fh="MET-1.2">
  <p class="fh-metric__label"><i class="fh-icon fh-icon--credit-card" aria-hidden="true"></i>Stripe</p>
  <p class="fh-metric__value">82%</p>
  <p class="fh-metric__sub">Next: bank account</p>
  <progress class="fh-progress" value="82" max="100">82%</progress>
</article>
```

#### MET-1.3 · Needed

```html
<article class="fh-metric fh-metric--needed" data-fh="MET-1.3">
  <p class="fh-metric__label"><i class="fh-icon fh-icon--receipt" aria-hidden="true"></i>EIN</p>
  <p class="fh-metric__value">Needed</p>
  <p class="fh-metric__sub">For Stripe and PayPal</p>
</article>
```

#### MET-1.4 · Link

```html
<a class="fh-metric" data-tone="sky" href="#a-metric" data-fh="MET-1.4">
  <p class="fh-metric__label"><i class="fh-icon fh-icon--users" aria-hidden="true"></i>Faces</p>
  <p class="fh-metric__value">4</p>
  <p class="fh-metric__sub">2 public</p>
</a>
```

#### MET-1.5 · Spread

```html
<article class="fh-metric fh-metric--spread" data-tone="fuchsia" data-fh="MET-1.5">
  <p class="fh-metric__label"><i class="fh-icon fh-icon--shield-check" aria-hidden="true"></i>Payment readiness</p>
  <p class="fh-metric__sub">What Stripe still needs before payouts</p>
  <p class="fh-metric__value">3 of 11</p>
  <progress class="fh-progress" value="27" max="100">27%</progress>
</article>
```

#### MET-1.6 · People

```html
<article class="fh-metric" data-tone="violet" data-fh="MET-1.6">
  <p class="fh-metric__label"><i class="fh-icon fh-icon--users" aria-hidden="true"></i>Team<span class="fh-cube fh-cube--sm">4</span></p>
  <p class="fh-metric__value">4 people</p>
  <div class="fh-metric__row">
    <div class="fh-avatars" role="group" aria-label="Team">
      <span class="fh-avatar fh-avatar--sm fh-avatar--square"><img src="/img/avatars/ava.webp" alt="Ava"></span>
      <span class="fh-avatar fh-avatar--sm fh-avatar--square"><img src="/img/avatars/cole.webp" alt="Cole"></span>
      <span class="fh-avatar fh-avatar--sm fh-avatar--square"><img src="/img/avatars/maya.webp" alt="Maya"></span>
      <span class="fh-avatar fh-avatar--sm fh-avatar--square fh-avatars__more">+1</span>
    </div>
    <span class="fh-chip" data-tone="lime">2 public</span>
  </div>
</article>
```

#### MET-1.7 · Expand

```html
<article class="fh-metric" data-tone="amber" data-fh="MET-1.7">
  <p class="fh-metric__label"><i class="fh-icon fh-icon--receipt" aria-hidden="true"></i>Open invoices</p>
  <p class="fh-metric__value">$6,940</p>
  <p class="fh-metric__sub">5 invoices · 1 overdue</p>
  <details class="fh-metric__more">
    <summary>Breakdown <i class="fh-icon fh-icon--chevron-down" aria-hidden="true"></i></summary>
    <dl class="fh-kv">
      <div><dt>Brightline Builders</dt><dd>$2,180.00</dd></div>
      <div><dt>Mesa Homes</dt><dd>$3,420.00</dd></div>
      <div><dt>Harbor &amp; Pine</dt><dd>$940.00</dd></div>
      <div><dt>Cobalt Roofing · overdue</dt><dd>$400.00</dd></div>
    </dl>
  </details>
</article>
```

#### MET-1.8 · Trend

```html
<article class="fh-metric" data-tone="lime" data-fh="MET-1.8">
  <p class="fh-metric__label"><i class="fh-icon fh-icon--dollar-sign" aria-hidden="true"></i>Revenue · 30 d</p>
  <div class="fh-metric__figure"><p class="fh-metric__value">$48,210</p><span class="fh-metric__delta" data-trend="up">12%</span></div>
  <p class="fh-metric__sub">vs September</p>
</article>
```

#### MET-1.9 · Trend · down is good

```html
<article class="fh-metric" data-tone="sky" data-good="down" data-fh="MET-1.9">
  <p class="fh-metric__label"><i class="fh-icon fh-icon--trending-down" aria-hidden="true"></i>Churn</p>
  <div class="fh-metric__figure"><p class="fh-metric__value">2.1%</p><span class="fh-metric__delta" data-trend="down">0.4 pt</span></div>
  <p class="fh-metric__sub">Down is good here</p>
</article>
```

#### MET-1.10 · Sparkline

```html
<article class="fh-metric" data-tone="teal" data-fh="MET-1.10">
  <p class="fh-metric__label"><i class="fh-icon fh-icon--chart-line" aria-hidden="true"></i>Orders · 12 wk</p>
  <div class="fh-metric__figure"><p class="fh-metric__value">42</p><span class="fh-metric__delta" data-trend="up">8</span></div>
  <svg class="fh-sparkline" viewBox="0 0 120 32" preserveAspectRatio="none" aria-hidden="true"><path d="M0.0 30.0 L10.9 25.3 L21.8 27.7 L32.7 20.7 L43.6 23.0 L54.5 16.0 L65.5 18.3 L76.4 11.3 L87.3 12.5 L98.2 6.7 L109.1 9.0 L120.0 2.0 L120 32 L0 32Z" fill="currentColor" opacity=".12"></path><path d="M0.0 30.0 L10.9 25.3 L21.8 27.7 L32.7 20.7 L43.6 23.0 L54.5 16.0 L65.5 18.3 L76.4 11.3 L87.3 12.5 L98.2 6.7 L109.1 9.0 L120.0 2.0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"></path></svg>
</article>
```

#### MET-1.11 · Gauge

```html
<article class="fh-metric" data-tone="amber" data-fh="MET-1.11">
  <p class="fh-metric__label"><i class="fh-icon fh-icon--gauge" aria-hidden="true"></i>Credit used</p>
  <div class="fh-gauge" style="--fh-value: 31; --fh-gauge-size: 8rem" role="img" aria-label="31% of the credit line used"><b>31%</b><small>of $40,000</small></div>
</article>
```

### MET-2 · Spread tiles

The flagship tile: a bold title and its line at the top, a wide gap, the figure at the bottom, so a row of tiles lines up at both ends. Anything below the figure (delta, sparkline, avatars, progress, source, detail) keeps its order. --tinted leads a row; --wide takes two columns.

#### MET-2.1 · Progress

```html
<article class="fh-metric fh-metric--spread" data-tone="lime" data-fh="MET-2.1">
  <p class="fh-metric__label"><i class="fh-icon fh-icon--credit-card" aria-hidden="true"></i>Stripe</p>
  <p class="fh-metric__sub">Next: confirm the payout bank account</p>
  <p class="fh-metric__value">82%</p>
  <progress class="fh-progress" value="82" max="100">82%</progress>
  <p class="fh-metric__source">9 of 11 facts</p>
</article>
```

#### MET-2.2 · Trend

```html
<article class="fh-metric fh-metric--spread" data-tone="teal" data-fh="MET-2.2">
  <p class="fh-metric__label"><i class="fh-icon fh-icon--dollar-sign" aria-hidden="true"></i>Revenue · 30 d</p>
  <p class="fh-metric__sub">All brands, after refunds</p>
  <div class="fh-metric__figure"><p class="fh-metric__value">$48,210</p><span class="fh-metric__delta" data-trend="up">12%</span></div>
  <p class="fh-metric__source">vs September</p>
</article>
```

#### MET-2.3 · Sparkline

```html
<article class="fh-metric fh-metric--spread" data-tone="sky" data-fh="MET-2.3">
  <p class="fh-metric__label"><i class="fh-icon fh-icon--chart-line" aria-hidden="true"></i>Orders</p>
  <p class="fh-metric__sub">Last 12 weeks</p>
  <div class="fh-metric__figure"><p class="fh-metric__value">42</p><span class="fh-metric__delta" data-trend="up">8</span></div>
  <svg class="fh-sparkline" viewBox="0 0 120 32" preserveAspectRatio="none" aria-hidden="true"><path d="M0.0 30.0 L10.9 25.3 L21.8 27.7 L32.7 20.7 L43.6 23.0 L54.5 16.0 L65.5 18.3 L76.4 11.3 L87.3 12.5 L98.2 6.7 L109.1 9.0 L120.0 2.0 L120 32 L0 32Z" fill="currentColor" opacity=".12"></path><path d="M0.0 30.0 L10.9 25.3 L21.8 27.7 L32.7 20.7 L43.6 23.0 L54.5 16.0 L65.5 18.3 L76.4 11.3 L87.3 12.5 L98.2 6.7 L109.1 9.0 L120.0 2.0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"></path></svg>
</article>
```

#### MET-2.4 · People

```html
<article class="fh-metric fh-metric--spread" data-tone="violet" data-fh="MET-2.4">
  <p class="fh-metric__label"><i class="fh-icon fh-icon--users" aria-hidden="true"></i>Team<span class="fh-cube fh-cube--sm">4</span></p>
  <p class="fh-metric__sub">Who can sign in and act for the business</p>
  <p class="fh-metric__value">4 people</p>
  <div class="fh-metric__row"><div class="fh-avatars" role="group" aria-label="Team"><span class="fh-avatar fh-avatar--sm fh-avatar--square"><img src="/img/avatars/ava.webp" alt="Ava"></span><span class="fh-avatar fh-avatar--sm fh-avatar--square"><img src="/img/avatars/cole.webp" alt="Cole"></span><span class="fh-avatar fh-avatar--sm fh-avatar--square"><img src="/img/avatars/maya.webp" alt="Maya"></span><span class="fh-avatar fh-avatar--sm fh-avatar--square fh-avatars__more">+1</span></div><span class="fh-chip" data-tone="lime">2 public</span></div>
</article>
```

#### MET-2.5 · Tinted

```html
<article class="fh-metric fh-metric--spread fh-metric--tinted" data-tone="orange" data-fh="MET-2.5">
  <p class="fh-metric__label"><i class="fh-icon fh-icon--globe" aria-hidden="true"></i>Google profile</p>
  <p class="fh-metric__sub">Next: opening hours for each location</p>
  <p class="fh-metric__value">45%</p>
  <progress class="fh-progress" value="45" max="100">45%</progress>
  <p class="fh-metric__source">5 of 11 facts</p>
</article>
```

#### MET-2.6 · Expand

```html
<article class="fh-metric fh-metric--spread" data-tone="amber" data-fh="MET-2.6">
  <p class="fh-metric__label"><i class="fh-icon fh-icon--receipt" aria-hidden="true"></i>Open invoices</p>
  <p class="fh-metric__sub">5 invoices, 1 overdue</p>
  <p class="fh-metric__value">$6,940</p>
  <details class="fh-metric__more"><summary>Breakdown <i class="fh-icon fh-icon--chevron-down" aria-hidden="true"></i></summary>
    <dl class="fh-kv"><div><dt>Brightline Builders</dt><dd>$2,180.00</dd></div><div><dt>Mesa Homes</dt><dd>$3,420.00</dd></div><div><dt>Harbor &amp; Pine</dt><dd>$940.00</dd></div><div><dt>Cobalt Roofing · overdue</dt><dd>$400.00</dd></div></dl>
  </details>
</article>
```

#### MET-2.7 · Wide

```html
<article class="fh-metric fh-metric--spread fh-metric--wide" data-tone="teal" data-fh="MET-2.7">
  <p class="fh-metric__label"><i class="fh-icon fh-icon--gauge" aria-hidden="true"></i>Credit line</p>
  <p class="fh-metric__sub">Drawn against $40,000 at Cedar Valley Bank</p>
  <div class="fh-metric__figure"><p class="fh-metric__value">$12,500</p><span class="fh-metric__delta" data-trend="flat">0</span></div>
  <progress class="fh-progress" value="31" max="100">31%</progress>
  <p class="fh-metric__source">31% drawn · 9.4% rate</p>
</article>
```

## GAU · Gauge

A half-circle meter from --fh-value (0–100), the figure under the arc and a caption below. The arc takes the tone; set it from the value. Sizes with --fh-gauge-size.

Classes: `fh-gauge`

### GAU-1 · Gauge

#### GAU-1.1 · Gauge

```html
<div class="fh-gauge" data-tone="lime" style="--fh-value: 82" role="img" aria-label="82% ready" data-fh="GAU-1.1"><b>82%</b><small>Ready</small></div>
```

#### GAU-1.2 · Small

```html
<div class="fh-gauge" data-tone="danger" style="--fh-value: 93; --fh-gauge-size: 6rem; --fh-gauge-width: 0.45rem" role="img" aria-label="93% of storage used" data-fh="GAU-1.2"><b>93%</b><small>Storage</small></div>
```

## PLY · Audio player

Classes: `fh-player` `fh-player__art` `fh-icon` `fh-player__meta` `fh-player__kicker` `fh-eq` `fh-player__title` `fh-player__by` `fh-play` `fh-play--lg` `fh-wave` `fh-wave--lg` `fh-player__time` `fh-player__tools` `fh-audio-btn` `fh-segmented` `fh-segmented--sm` `fh-volume` `fh-scrub`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/audio/#PLY.

## CAP · Captions

Classes: `fh-captions` `fh-captions__line`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/audio/#CAP.

## TRK · Playlist

Classes: `fh-tracks` `fh-track` `fh-eq` `fh-track__art`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/audio/#TRK.

## REL · Reel

Classes: `fh-line-reel`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/audio/#REL.

## MIX · Mixer

Classes: `fh-mixer` `fh-mixer__bar` `fh-play` `fh-wave` `fh-player__time` `fh-channel` `fh-channel__name` `fh-channel__gain` `fh-scrub` `fh-channel__value` `fh-meter-level` `fh-channel__buttons` `fh-audio-btn`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/audio/#MIX.

## PRM · Parameters

Classes: `fh-params` `fh-param` `fh-param__label` `fh-scrub` `fh-param__value` `fh-param__hint`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/audio/#PRM.

## STG · Render stages

Classes: `fh-stages` `fh-stages__head` `fh-stages__track` `fh-stages__list` `fh-stages__meta`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/audio/#STG.

## THB · Thumbnails & link cards

A YouTube thumbnail with the host in a tone ring (the timestamp covers the bottom right), and the Open Graph card every link preview uses: X, LinkedIn, Slack, iMessage.

Classes: `fh-canvas` `fh-canvas--yt-thumb` `fh-canvas--split` `fh-canvas__body` `fh-canvas__top` `fh-canvas__badge` `fh-canvas__main` `fh-canvas__title` `fh-canvas__foot` `fh-canvas__media` `fh-canvas__media--round` `fh-canvas--og` `fh-canvas__mark` `fh-canvas__eyebrow` `fh-canvas__sub`

### THB-1 · Thumbnails & link cards

#### THB-1.1 · YouTube thumbnail

```html
<article class="fh-canvas fh-canvas--yt-thumb fh-canvas--split" data-tone="accent" data-fh="THB-1.1">
  <div class="fh-canvas__body">
    <div class="fh-canvas__top"><span class="fh-canvas__badge">New</span></div>
    <div class="fh-canvas__main"><h2 class="fh-canvas__title">One file, <mark>every</mark> theme</h2></div>
    <div class="fh-canvas__foot"><span><b>EP 07</b> · Firehorse</span></div>
    <figure class="fh-canvas__media fh-canvas__media--round"><img src="img/avatars/maya.webp" alt></figure>
  </div>
</article>
```

#### THB-1.2 · Link card

```html
<article class="fh-canvas fh-canvas--og" data-tone="sky" data-fh="THB-1.2">
  <div class="fh-canvas__body">
    <div class="fh-canvas__top"><span class="fh-canvas__mark"><i>_</i>firehorse</span><p class="fh-canvas__eyebrow">Docs · Media</p></div>
    <div class="fh-canvas__main"><h2 class="fh-canvas__title">Media, <em>at the size it ships</em></h2><p class="fh-canvas__sub">Posts, headers, thumbnails, covers and slides from one set of tokens.</p></div>
    <div class="fh-canvas__foot"><span>firehorse.rascode.dev</span><span>v1.1</span></div>
  </div>
</article>
```

## SOC · Posts & stories

A 4:5 feed post (Instagram, Threads, LinkedIn; the profile grid trims it to 3:4), a square carousel card, a 9:16 story for Stories, Reels, Shorts and TikTok with the app's top and bottom bands kept clear, and a type specimen (--specimen with data-fh-type): the headline big at the top, the face named at the foot.

Classes: `fh-canvas` `fh-canvas--post` `fh-canvas__body` `fh-canvas__top` `fh-canvas__eyebrow` `fh-canvas__main` `fh-canvas__title` `fh-canvas__cubes` `fh-canvas__foot` `fh-canvas--square` `fh-canvas--center` `fh-canvas__badge` `fh-nowrap` `fh-canvas__ui` `fh-chips` `fh-chips--track` `fh-chip` `fh-canvas__sub` `fh-canvas--story` `fh-canvas__media` `fh-canvas__mark` `fh-canvas--specimen` `fh-canvas__face`

### SOC-1 · Posts & stories

#### SOC-1.1 · Feed post

```html
<article class="fh-canvas fh-canvas--post" data-tone="violet" data-fh="SOC-1.1">
  <div class="fh-canvas__body">
    <div class="fh-canvas__top"><p class="fh-canvas__eyebrow">Release notes</p></div>
    <div class="fh-canvas__main">
      <h2 class="fh-canvas__title">Themes are <em>one file now</em></h2>
      <ul class="fh-canvas__cubes"><li><b>3</b> themes</li><li><b>183</b> icons</li><li><b>0</b> js</li></ul>
    </div>
    <div class="fh-canvas__foot"><span>@firehorse</span><span>01 / 05</span></div>
  </div>
</article>
```

#### SOC-1.2 · Square card

```html
<article class="fh-canvas fh-canvas--square fh-canvas--center" data-tone="lime" data-fh="SOC-1.2">
  <div class="fh-canvas__body">
    <div class="fh-canvas__top"><span class="fh-canvas__badge">Tip</span></div>
    <div class="fh-canvas__main">
      <h2 class="fh-canvas__title">Say <span class="fh-nowrap">CHP-1.2.</span> <em>Not “the green chip.”</em></h2>
      <div class="fh-canvas__ui" style="--fh-canvas-ui-scale: 2">
        <div class="fh-chips fh-chips--track" role="group" aria-label="CHP-1.2 sample"><label class="fh-chip" data-tone="lime"><input type="radio" name="soc-chp" checked> Start a project</label><label class="fh-chip" data-tone="sky"><input type="radio" name="soc-chp"> Book a call</label></div>
      </div>
      <p class="fh-canvas__sub">Every component has an ID your team and your agent share.</p>
    </div>
    <div class="fh-canvas__foot"><span><b>_</b>firehorse</span></div>
  </div>
</article>
```

#### SOC-1.3 · Story

```html
<article class="fh-canvas fh-canvas--story" data-tone="amber" data-fh="SOC-1.3">
  <figure class="fh-canvas__media"><img src="img/backdrop/firehorse-horse.webp" alt></figure>
  <div class="fh-canvas__body">
    <div class="fh-canvas__top"><span class="fh-canvas__mark"><i>_</i>firehorse</span><p class="fh-canvas__eyebrow">Live</p></div>
    <div class="fh-canvas__main">
      <h2 class="fh-canvas__title">Ship day.</h2>
      <p class="fh-canvas__sub">Media and slides land in 1.1.</p>
      <ul class="fh-canvas__cubes"><li><b>11</b> formats</li><li><b>10</b> slides</li></ul>
    </div>
    <div class="fh-canvas__foot"><span>Link in bio</span></div>
  </div>
</article>
```

#### SOC-1.4 · Type specimen

```html
<article class="fh-canvas fh-canvas--post fh-canvas--specimen" data-fh-type="hanken" data-fh="SOC-1.4">
  <figure class="fh-canvas__media"><img src="img/backdrop/lipizzaner-horse.webp" alt></figure>
  <div class="fh-canvas__body">
    <div class="fh-canvas__top"><h2 class="fh-canvas__title">Beyond the ordinary</h2><span>TWF</span></div>
    <div class="fh-canvas__main"></div>
    <div class="fh-canvas__foot"><span>−5% letter spacing</span><p class="fh-canvas__face"><small>Font</small><b>Hanken<br>Grotesk</b></p></div>
  </div>
</article>
```

#### SOC-1.5 · Type specimen · Archivo

```html
<article class="fh-canvas fh-canvas--post fh-canvas--specimen" data-fh-type="archivo" data-fh="SOC-1.5">
  <figure class="fh-canvas__media"><img src="img/backdrop/firehorse-hoof.webp" alt></figure>
  <div class="fh-canvas__body">
    <div class="fh-canvas__top"><h2 class="fh-canvas__title">Create something different</h2><span>TWF</span></div>
    <div class="fh-canvas__main"></div>
    <div class="fh-canvas__foot"><span>−3% letter spacing</span><p class="fh-canvas__face"><small>Font</small><b>Archivo</b></p></div>
  </div>
</article>
```

## WAL · Home screen wallpapers

A wallpaper drawn on the phone's own icon grid: the brand on icon row 1, the page title on row 2, an etched rule with a tone tick, then a dashed cell where each icon lands, and the dock. Leave rows 1 and 2 empty on that home page and the icons fill the cells. iOS uses one wallpaper for every home page, so make one per Focus (each Focus gets its own page and wallpaper), and turn off Perspective Zoom so it isn't scaled. --wall-clean drops the cells; --wall-5x5 is the denser Android grid. Grid positions are estimates until measured on each device: correct a preset with its --fh-wall-* numbers.

Classes: `fh-canvas` `fh-canvas--wall` `fh-canvas--wall-iphone` `fh-canvas__band` `fh-canvas__top` `fh-canvas__mark` `fh-canvas__eyebrow` `fh-canvas__title` `fh-canvas__cells` `fh-canvas__dock` `fh-canvas--wall-iphone-61` `fh-canvas--wall-iphone-air` `fh-canvas--wall-iphone-max` `fh-canvas--wall-pixel` `fh-canvas--wall-pixel-xl` `fh-canvas--wall-5x5` `fh-canvas--wall-galaxy` `fh-canvas--wall-galaxy-qhd`

### WAL-1 · iPhone

#### WAL-1.1 · iPhone 6.3″

```html
<article class="fh-canvas fh-canvas--wall fh-canvas--wall-iphone" data-tone="accent" data-fh="WAL-1.1">
  <div class="fh-canvas__band">
    <div class="fh-canvas__top"><span class="fh-canvas__mark"><i>_</i>firehorse</span><p class="fh-canvas__eyebrow">Focus 01</p></div>
    <h2 class="fh-canvas__title">Studio</h2>
  </div>
  <ol class="fh-canvas__cells" aria-hidden="true"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ol>
  <ol class="fh-canvas__dock" aria-hidden="true"><li></li><li></li><li></li><li></li><li></li></ol>
</article>
```

#### WAL-1.2 · iPhone 6.1″

```html
<article class="fh-canvas fh-canvas--wall fh-canvas--wall-iphone-61" data-tone="sky" data-fh="WAL-1.2">
  <div class="fh-canvas__band">
    <div class="fh-canvas__top"><span class="fh-canvas__mark"><i>_</i>firehorse</span><p class="fh-canvas__eyebrow">Focus 02</p></div>
    <h2 class="fh-canvas__title">Work</h2>
  </div>
  <ol class="fh-canvas__cells" aria-hidden="true"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ol>
  <ol class="fh-canvas__dock" aria-hidden="true"><li></li><li></li><li></li><li></li><li></li></ol>
</article>
```

#### WAL-1.3 · iPhone Air

```html
<article class="fh-canvas fh-canvas--wall fh-canvas--wall-iphone-air" data-tone="lime" data-fh="WAL-1.3">
  <div class="fh-canvas__band">
    <div class="fh-canvas__top"><span class="fh-canvas__mark"><i>_</i>firehorse</span><p class="fh-canvas__eyebrow">Focus 03</p></div>
    <h2 class="fh-canvas__title">Personal</h2>
  </div>
  <ol class="fh-canvas__cells" aria-hidden="true"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ol>
  <ol class="fh-canvas__dock" aria-hidden="true"><li></li><li></li><li></li><li></li><li></li></ol>
</article>
```

#### WAL-1.4 · iPhone 6.9″

```html
<article class="fh-canvas fh-canvas--wall fh-canvas--wall-iphone-max" data-tone="amber" data-fh="WAL-1.4">
  <div class="fh-canvas__band">
    <div class="fh-canvas__top"><span class="fh-canvas__mark"><i>_</i>firehorse</span><p class="fh-canvas__eyebrow">Focus 04</p></div>
    <h2 class="fh-canvas__title">Travel</h2>
  </div>
  <ol class="fh-canvas__cells" aria-hidden="true"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ol>
  <ol class="fh-canvas__dock" aria-hidden="true"><li></li><li></li><li></li><li></li><li></li></ol>
</article>
```

### WAL-2 · Pixel

#### WAL-2.1 · Pixel Pro

```html
<article class="fh-canvas fh-canvas--wall fh-canvas--wall-pixel" data-tone="violet" data-fh="WAL-2.1">
  <div class="fh-canvas__band">
    <div class="fh-canvas__top"><span class="fh-canvas__mark"><i>_</i>firehorse</span><p class="fh-canvas__eyebrow">Mode 01</p></div>
    <h2 class="fh-canvas__title">Studio</h2>
  </div>
  <ol class="fh-canvas__cells" aria-hidden="true"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ol>
  <ol class="fh-canvas__dock" aria-hidden="true"><li></li><li></li><li></li><li></li><li></li></ol>
</article>
```

#### WAL-2.2 · Pixel Pro XL · 5 × 5

```html
<article class="fh-canvas fh-canvas--wall fh-canvas--wall-pixel-xl fh-canvas--wall-5x5" data-tone="teal" data-fh="WAL-2.2">
  <div class="fh-canvas__band">
    <div class="fh-canvas__top"><span class="fh-canvas__mark"><i>_</i>firehorse</span><p class="fh-canvas__eyebrow">Mode 02</p></div>
    <h2 class="fh-canvas__title">Work</h2>
  </div>
  <ol class="fh-canvas__cells" aria-hidden="true"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ol>
  <ol class="fh-canvas__dock" aria-hidden="true"><li></li><li></li><li></li><li></li><li></li></ol>
</article>
```

### WAL-3 · Galaxy

#### WAL-3.1 · Galaxy S

```html
<article class="fh-canvas fh-canvas--wall fh-canvas--wall-galaxy" data-tone="rose" data-fh="WAL-3.1">
  <div class="fh-canvas__band">
    <div class="fh-canvas__top"><span class="fh-canvas__mark"><i>_</i>firehorse</span><p class="fh-canvas__eyebrow">Mode 01</p></div>
    <h2 class="fh-canvas__title">Personal</h2>
  </div>
  <ol class="fh-canvas__cells" aria-hidden="true"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ol>
  <ol class="fh-canvas__dock" aria-hidden="true"><li></li><li></li><li></li><li></li><li></li></ol>
</article>
```

#### WAL-3.2 · Galaxy Plus / Ultra · 5 × 5

```html
<article class="fh-canvas fh-canvas--wall fh-canvas--wall-galaxy-qhd fh-canvas--wall-5x5" data-tone="orange" data-fh="WAL-3.2">
  <div class="fh-canvas__band">
    <div class="fh-canvas__top"><span class="fh-canvas__mark"><i>_</i>firehorse</span><p class="fh-canvas__eyebrow">Mode 02</p></div>
    <h2 class="fh-canvas__title">Travel</h2>
  </div>
  <ol class="fh-canvas__cells" aria-hidden="true"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ol>
  <ol class="fh-canvas__dock" aria-hidden="true"><li></li><li></li><li></li><li></li><li></li></ol>
</article>
```

## HDR · Profile headers

Channel and profile banners in one row: the copy sits inside the part every device shows. YouTube shows only the centre 1546 × 423 of its banner on phones; X and LinkedIn put the profile photo over the lower left.

Classes: `fh-canvas` `fh-canvas--yt-banner` `fh-canvas--row` `fh-canvas--plate` `fh-canvas__media` `fh-canvas__body` `fh-canvas__top` `fh-canvas__mark` `fh-canvas__eyebrow` `fh-canvas__main` `fh-canvas__title` `fh-canvas__cubes` `fh-canvas--x-header` `fh-canvas__sub` `fh-canvas--li-banner` `fh-canvas__ui` `fh-avatars` `fh-avatar` `fh-avatars__more`

### HDR-1 · Profile headers

#### HDR-1.1 · YouTube banner

```html
<header class="fh-canvas fh-canvas--yt-banner fh-canvas--row fh-canvas--plate" data-tone="accent" data-fh="HDR-1.1">
  <figure class="fh-canvas__media"><img src="img/backdrop/firehorse-horse.webp" alt></figure>
  <div class="fh-canvas__body">
    <div class="fh-canvas__top"><span class="fh-canvas__mark"><i>_</i>firehorse</span><p class="fh-canvas__eyebrow">New every Thursday</p></div>
    <div class="fh-canvas__main"><h2 class="fh-canvas__title">Design systems, <em>built in public</em></h2></div>
    <ul class="fh-canvas__cubes"><li><b>CSS</b> tokens</li><li><b>JS</b> optional</li></ul>
  </div>
</header>
```

#### HDR-1.2 · X header

```html
<header class="fh-canvas fh-canvas--x-header fh-canvas--row" data-tone="sky" data-fh="HDR-1.2">
  <div class="fh-canvas__body">
    <div class="fh-canvas__main"><h2 class="fh-canvas__title">Tokens in, <em>pixels out</em></h2><p class="fh-canvas__sub">Notes on Firehorse, weekly.</p></div>
    <span class="fh-canvas__mark"><i>_</i>firehorse</span>
  </div>
</header>
```

#### HDR-1.3 · LinkedIn banner

```html
<header class="fh-canvas fh-canvas--li-banner fh-canvas--row" data-tone="teal" data-fh="HDR-1.3">
  <div class="fh-canvas__body">
    <div class="fh-canvas__main"><h2 class="fh-canvas__title">Design systems <em>&amp; APIs</em></h2><p class="fh-canvas__sub">Rascode Studio</p></div>
    <div class="fh-canvas__ui" style="--fh-canvas-ui-scale: 1.5"><div class="fh-avatars" role="group" aria-label="Team"><span class="fh-avatar" data-face><img src="img/avatars/ava.webp" alt="Ava"></span><span class="fh-avatar" data-face><img src="img/avatars/cole.webp" alt="Cole"></span><span class="fh-avatar" data-face><img src="img/avatars/maya.webp" alt="Maya"></span><span class="fh-avatar" data-face><img src="img/avatars/ray.webp" alt="Ray"></span><span class="fh-avatar fh-avatars__more">+6</span></div></div>
  </div>
</header>
```

## CVR · Cover art

3000 × 3000, the size Spotify, Apple Music and Apple Podcasts ask for. An album or single over etched art, and a podcast cover led by an outlined episode number.

Classes: `fh-canvas` `fh-canvas--cover` `fh-canvas__media` `fh-canvas__body` `fh-canvas__top` `fh-canvas__mark` `fh-canvas__badge` `fh-canvas__main` `fh-canvas__title` `fh-canvas__foot` `fh-canvas__eyebrow` `fh-canvas__index` `fh-canvas__sub`

### CVR-1 · Cover art

#### CVR-1.1 · Album cover

```html
<article class="fh-canvas fh-canvas--cover" data-tone="sky" data-fh="CVR-1.1">
  <figure class="fh-canvas__media"><img src="img/backdrop/firehorse-horse.webp" alt></figure>
  <div class="fh-canvas__body">
    <div class="fh-canvas__top"><span class="fh-canvas__mark"><i>_</i>rascode studio</span><span class="fh-canvas__badge">Single</span></div>
    <div class="fh-canvas__main"><h2 class="fh-canvas__title">Drift</h2></div>
    <div class="fh-canvas__foot"><span>Rascode Studio</span><span>2026</span></div>
  </div>
</article>
```

#### CVR-1.2 · Podcast cover

```html
<article class="fh-canvas fh-canvas--cover" data-tone="amber" data-fh="CVR-1.2">
  <div class="fh-canvas__body">
    <div class="fh-canvas__top"><p class="fh-canvas__eyebrow">A Firehorse podcast</p></div>
    <div class="fh-canvas__main"><p class="fh-canvas__index">12</p><h2 class="fh-canvas__title">The Stable</h2><p class="fh-canvas__sub">Design systems, out loud.</p></div>
    <div class="fh-canvas__foot"><span><b>_</b>firehorse</span><span>Weekly</span></div>
  </div>
</article>
```

## BIZ · Business cards

3.5 × 2 in at 300 dpi (1050 × 600, the trim size), with text kept an eighth of an inch inside the trim. Export both sides and send them to any printer; ask yours whether they want bleed added.

Classes: `fh-canvas` `fh-canvas--card` `fh-canvas__body` `fh-canvas__top` `fh-canvas__mark` `fh-canvas__main` `fh-canvas__title` `fh-canvas__sub` `fh-canvas__foot` `fh-canvas--plain` `fh-canvas__eyebrow` `fh-canvas__cubes` `fh-canvas__cubes--rows`

### BIZ-1 · Business cards

#### BIZ-1.1 · Card front

```html
<article class="fh-canvas fh-canvas--card" data-tone="accent" data-fh="BIZ-1.1">
  <div class="fh-canvas__body">
    <div class="fh-canvas__top"><span class="fh-canvas__mark"><i>_</i>rascode</span></div>
    <div class="fh-canvas__main"><h2 class="fh-canvas__title">Ada Moreno</h2><p class="fh-canvas__sub">Design engineer</p></div>
    <div class="fh-canvas__foot"><span>rascode.dev</span></div>
  </div>
</article>
```

#### BIZ-1.2 · Card back

```html
<article class="fh-canvas fh-canvas--card fh-canvas--plain" data-tone="accent" data-fh="BIZ-1.2">
  <div class="fh-canvas__body">
    <div class="fh-canvas__top"><p class="fh-canvas__eyebrow">Rascode Studio</p></div>
    <div class="fh-canvas__main">
      <ul class="fh-canvas__cubes fh-canvas__cubes--rows"><li><b>@</b> ada@rascode.dev</li><li><b>T</b> +1 555 0142</li><li><b>W</b> rascode.dev/ada</li></ul>
    </div>
    <div class="fh-canvas__foot"><span><b>_</b>rascode</span><span>Design systems &amp; APIs</span></div>
  </div>
</article>
```

## SLD · Slide layouts

Ten layouts cover most talks: title, section, agenda, text and live UI, numbers, quote, code, product screen, team and close. The avatars, chips, chat, header and datatable on them are the real components inside .fh-canvas__ui, zoomed with the slide. Each slide is a <section>, so it drops straight into reveal's .slides.

Classes: `fh-canvas` `fh-slide` `fh-slide--title` `fh-canvas__body` `fh-canvas__top` `fh-canvas__mark` `fh-canvas__eyebrow` `fh-canvas__main` `fh-canvas__title` `fh-canvas__sub` `fh-canvas__foot` `fh-canvas__ui` `fh-cluster` `fh-avatars` `fh-avatar` `fh-small` `fh-muted` `fh-slide--section` `fh-canvas__index` `fh-chips` `fh-chips--wrap` `fh-chip` `fh-chip--indexed` `fh-chip__index` `fh-slide__list` `fh-canvas--split` `fh-window` `fh-window__bar` `fh-window__body` `fh-chat` `fh-message` `fh-avatar--sm` `fh-message__bubble` `fh-message__name` `fh-typing` `fh-slide__stats` `fh-slide--middle` `fh-slide__quote` `fh-slide__cite` `fh-slide__code` `fh-canvas__ui--crop` `fh-header` `fh-header__bar` `fh-header__brand` `fh-nav` `fh-nav__link` `fh-header__actions` `fh-button` `fh-button--sm` `fh-dt` `fh-dt__toolbar` `fh-dt__title` `fh-icon-tile` `fh-icon` `fh-dt__count` `fh-dt__spacer` `fh-dt__tools` `fh-dt__tool` `fh-dt__tool--action` `fh-dt__filters` `fh-chip--tone` `fh-chip--sm` `fh-chip--underline` `fh-dt__body` `fh-dt__scroll` `fh-dt__table` `fh-dt__th` `fh-cell` `fh-cell--text` `fh-cell--status` `fh-status` `fh-cell--currency` `fh-cell--percent` `fh-cell__bar` `fh-cell--user` `fh-cell__user` `fh-avatar--xs` `fh-grid` `fh-person` `fh-avatar--lg` `fh-person__text` `fh-avatar--generated` `fh-canvas--center` `fh-eyebrow-pill` `fh-dot` `fh-dot--live` `fh-button--secondary`

### SLD-1 · Openers

#### SLD-1.1 · Title

```html
<section class="fh-canvas fh-slide fh-slide--title" data-tone="violet" data-fh="SLD-1.1">
  <div class="fh-canvas__body">
    <div class="fh-canvas__top"><span class="fh-canvas__mark"><i>_</i>firehorse</span><p class="fh-canvas__eyebrow">Talk · 2026</p></div>
    <div class="fh-canvas__main"><h2 class="fh-canvas__title">Media, <em>at the size it ships</em></h2><p class="fh-canvas__sub">Designing the things you post outside the app.</p></div>
    <div class="fh-canvas__foot">
      <div class="fh-canvas__ui" style="--fh-canvas-ui-scale: 1.4">
        <div class="fh-cluster">
          <div class="fh-avatars" role="group" aria-label="Speakers"><span class="fh-avatar" data-face><img src="img/avatars/ava.webp" alt="Ava"></span><span class="fh-avatar" data-face><img src="img/avatars/cole.webp" alt="Cole"></span><span class="fh-avatar" data-face><img src="img/avatars/maya.webp" alt="Maya"></span></div>
          <span class="fh-small fh-muted">Ava, Cole &amp; Maya · Rascode Studio</span>
        </div>
      </div>
      <span>01 / 10</span>
    </div>
  </div>
</section>
```

#### SLD-1.2 · Section

```html
<section class="fh-canvas fh-slide fh-slide--section" data-tone="sky" data-fh="SLD-1.2">
  <div class="fh-canvas__body">
    <div class="fh-canvas__main">
      <p class="fh-canvas__index">02</p>
      <h2 class="fh-canvas__title">Why canvases</h2>
      <div class="fh-canvas__ui" style="--fh-canvas-ui-scale: 1.5">
        <div class="fh-chips fh-chips--wrap"><span class="fh-chip fh-chip--indexed" data-tone="violet"><b class="fh-chip__index">01</b>Native pixels</span><span class="fh-chip fh-chip--indexed" data-tone="amber"><b class="fh-chip__index">02</b>Safe areas</span><span class="fh-chip fh-chip--indexed" data-tone="sky"><b class="fh-chip__index">03</b>Export</span></div>
      </div>
    </div>
    <div class="fh-canvas__foot"><span>Media, at the size it ships</span><span>02 / 10</span></div>
  </div>
</section>
```

#### SLD-1.3 · Agenda

```html
<section class="fh-canvas fh-slide" data-tone="lime" data-fh="SLD-1.3">
  <div class="fh-canvas__body">
    <div class="fh-canvas__main">
      <h2 class="fh-canvas__title">Today</h2>
      <ol class="fh-slide__list">
        <li><span>Formats<small>Eleven sizes, one set of tokens</small></span></li>
        <li><span>Safe areas<small>What each platform crops or covers</small></span></li>
        <li><span>Export<small>PNG at native size, decks as HTML</small></span></li>
      </ol>
    </div>
    <div class="fh-canvas__foot"><span>Media, at the size it ships</span><span>03 / 10</span></div>
  </div>
</section>
```

### SLD-2 · Content

#### SLD-2.1 · Text and live UI

```html
<section class="fh-canvas fh-slide fh-canvas--split" data-tone="teal" data-fh="SLD-2.1">
  <div class="fh-canvas__body">
    <div class="fh-canvas__top"><p class="fh-canvas__eyebrow">Real components</p></div>
    <div class="fh-canvas__main"><h2 class="fh-canvas__title">The chat you ship <em>is the chat you show</em></h2><p class="fh-canvas__sub">That's fh-chat in an fh-window, live markup zoomed with the slide. No screenshots to redo when the product changes.</p></div>
    <div class="fh-canvas__foot"><span>Media, at the size it ships</span><span>04 / 10</span></div>
    <div class="fh-canvas__ui" style="--fh-canvas-ui-scale: 1.15">
      <figure class="fh-window">
        <div class="fh-window__bar">Messages · Reginald</div>
        <div class="fh-window__body">
          <div class="fh-chat" role="log" aria-label="Conversation">
            <div class="fh-message" data-from="them" data-tone="sky"><span class="fh-avatar fh-avatar--sm"><img src="img/avatars/reginald.webp" alt></span><div class="fh-message__bubble"><p class="fh-message__name">Reginald</p><p>Which channel gets the most inquiries?</p></div></div>
            <div class="fh-message" data-from="me"><div class="fh-message__bubble"><p>Messenger, mostly after 6pm.</p></div></div>
            <div class="fh-message" data-from="them" data-tone="sky"><span class="fh-avatar fh-avatar--sm"><img src="img/avatars/reginald.webp" alt></span><div class="fh-message__bubble"><p class="fh-message__name">Reginald</p><p>Then Wes covers evenings first. Live by Monday.</p></div></div>
            <div class="fh-message" data-from="them" data-tone="sky"><span class="fh-avatar fh-avatar--sm"><img src="img/avatars/reginald.webp" alt></span><div class="fh-message__bubble"><span class="fh-typing" aria-label="Reginald is typing"><i></i></span></div></div>
          </div>
        </div>
      </figure>
    </div>
  </div>
</section>
```

#### SLD-2.2 · Numbers

```html
<section class="fh-canvas fh-slide" data-tone="accent" data-fh="SLD-2.2">
  <div class="fh-canvas__body">
    <div class="fh-canvas__main">
      <h2 class="fh-canvas__title">One system, <em>everywhere</em></h2>
      <ul class="fh-slide__stats">
        <li><b>11</b><span>Formats</span></li>
        <li><b>10</b><span>Slide layouts</span></li>
        <li><b>1</b><span>Set of tokens</span></li>
      </ul>
    </div>
    <div class="fh-canvas__foot"><span>Media, at the size it ships</span><span>05 / 10</span></div>
  </div>
</section>
```

#### SLD-2.3 · Quote

```html
<section class="fh-canvas fh-slide fh-slide--middle" data-tone="amber" data-fh="SLD-2.3">
  <div class="fh-canvas__body">
    <div class="fh-canvas__main">
      <blockquote class="fh-slide__quote">Our banner, our thumbnails and our deck finally look like the product.</blockquote>
      <p class="fh-slide__cite"><b>—</b> A team that ships · sample</p>
    </div>
    <div class="fh-canvas__foot"><span>Media, at the size it ships</span><span>06 / 10</span></div>
  </div>
</section>
```

#### SLD-2.4 · Code

```html
<section class="fh-canvas fh-slide" data-tone="fuchsia" data-fh="SLD-2.4">
      <div class="fh-canvas__body">
        <div class="fh-canvas__main">
          <h2 class="fh-canvas__title">Three lines to a deck</h2>
          <pre class="fh-slide__code"><i>&lt;!-- after reveal.css and firehorse.css --&gt;</i>
&lt;link rel=&quot;stylesheet&quot; href=&quot;<mark>firehorse/dist/reveal.css</mark>&quot;&gt;
&lt;section class=&quot;<mark>fh-canvas fh-slide</mark>&quot;&gt;…&lt;/section&gt;
Reveal.initialize({ <mark>width: 1280, height: 720</mark>, center: false });</pre>
        </div>
        <div class="fh-canvas__foot"><span>Media, at the size it ships</span><span>07 / 10</span></div>
      </div>
    </section>
```

#### SLD-2.5 · Product screen

```html
<section class="fh-canvas fh-slide" data-tone="sky" data-fh="SLD-2.5">
  <div class="fh-canvas__body">
    <div class="fh-canvas__top"><p class="fh-canvas__eyebrow">Live markup, not a screenshot</p><span class="fh-canvas__mark"><i>_</i>firehorse</span></div>
    <div class="fh-canvas__ui fh-canvas__ui--crop" style="--fh-canvas-ui-scale: 1.05">
      <figure class="fh-window">
        <div class="fh-window__bar">app.example.com/pipeline</div>
        <header class="fh-header">
          <div class="fh-header__bar">
            <a class="fh-header__brand" href="#slide-layouts">Northwind</a>
            <nav class="fh-nav" aria-label="App"><a class="fh-nav__link" href="#slide-layouts" aria-current="page">Pipeline</a><a class="fh-nav__link" href="#slide-layouts">Clients</a><a class="fh-nav__link" href="#slide-layouts">Invoices</a></nav>
            <div class="fh-header__actions"><div class="fh-avatars" role="group" aria-label="Team"><span class="fh-avatar fh-avatar--sm" data-face><img src="img/avatars/ava.webp" alt="Ava"></span><span class="fh-avatar fh-avatar--sm" data-face><img src="img/avatars/sam.webp" alt="Sam"></span><span class="fh-avatar fh-avatar--sm" data-face><img src="img/avatars/mateo.webp" alt="Mateo"></span></div><a class="fh-button fh-button--sm" href="#slide-layouts">New deal</a></div>
          </div>
        </header>
        <div class="fh-dt" data-tone="sky" data-view="grid" data-density="compact" aria-label="Client pipeline (sample data)">
          <div class="fh-dt__toolbar">
            <h3 class="fh-dt__title"><span class="fh-icon-tile" data-tone="sky" style="--fh-icon-tile: 1.75rem"><i class="fh-icon fh-icon--briefcase" aria-hidden="true"></i></span>Client pipeline</h3>
            <span class="fh-dt__count">42 records</span>
            <span class="fh-dt__spacer"></span>
            <span class="fh-dt__tools"><button class="fh-dt__tool" type="button"><i class="fh-icon fh-icon--filter" aria-hidden="true"></i><span>Filter</span></button><button class="fh-dt__tool" type="button" data-active><i class="fh-icon fh-icon--arrow-up-down" aria-hidden="true"></i><span>Sort</span><b>1</b></button></span>
            <button class="fh-dt__tool fh-dt__tool--action" type="button"><i class="fh-icon fh-icon--plus" aria-hidden="true"></i><span>New record</span></button>
          </div>
          <div class="fh-dt__filters"><span class="fh-chip fh-chip--tone fh-chip--sm" data-tone="amber">Proposal</span><span class="fh-chip fh-chip--tone fh-chip--sm" data-tone="lime">Won</span><span class="fh-chip fh-chip--underline fh-chip--sm"><i class="fh-icon fh-icon--arrow-up-down" aria-hidden="true"></i> Sorted by Value ↓</span></div>
          <div class="fh-dt__body"><div class="fh-dt__scroll"><table class="fh-dt__table" aria-label="Client pipeline">
            <thead><tr><th scope="col"><span class="fh-dt__th"><i class="fh-icon fh-icon--type" aria-hidden="true"></i><span>Company</span></span></th><th scope="col"><span class="fh-dt__th"><i class="fh-icon fh-icon--activity" aria-hidden="true"></i><span>Stage</span></span></th><th scope="col" aria-sort="descending"><span class="fh-dt__th"><i class="fh-icon fh-icon--dollar-sign" aria-hidden="true"></i><span>Value</span></span></th><th scope="col"><span class="fh-dt__th"><i class="fh-icon fh-icon--percent" aria-hidden="true"></i><span>Probability</span></span></th><th scope="col"><span class="fh-dt__th"><i class="fh-icon fh-icon--user" aria-hidden="true"></i><span>Owner</span></span></th></tr></thead>
            <tbody>
                <tr><th scope="row" class="fh-cell fh-cell--text">Meridian Clinic</th><td class="fh-cell fh-cell--status"><span class="fh-status" data-tone="amber">Proposal</span></td><td class="fh-cell fh-cell--currency">$39,150</td><td class="fh-cell fh-cell--percent"><span class="fh-cell__bar" data-tone="teal" style="--v:69"><i></i><span>69%</span></span></td><td class="fh-cell fh-cell--user"><span class="fh-cell__user"><span class="fh-avatar fh-avatar--xs"><img src="img/avatars/ava.webp" alt></span><span>Ava</span></span></td></tr>
                <tr><th scope="row" class="fh-cell fh-cell--text">Brennan Landscapes</th><td class="fh-cell fh-cell--status"><span class="fh-status" data-tone="lime">Won</span></td><td class="fh-cell fh-cell--currency">$34,800</td><td class="fh-cell fh-cell--percent"><span class="fh-cell__bar" data-tone="teal" style="--v:100"><i></i><span>100%</span></span></td><td class="fh-cell fh-cell--user"><span class="fh-cell__user"><span class="fh-avatar fh-avatar--xs"><img src="img/avatars/sam.webp" alt></span><span>Sam</span></span></td></tr>
                <tr><th scope="row" class="fh-cell fh-cell--text">Nimbus Air</th><td class="fh-cell fh-cell--status"><span class="fh-status" data-tone="amber">Proposal</span></td><td class="fh-cell fh-cell--currency">$34,450</td><td class="fh-cell fh-cell--percent"><span class="fh-cell__bar" data-tone="teal" style="--v:70"><i></i><span>70%</span></span></td><td class="fh-cell fh-cell--user"><span class="fh-cell__user"><span class="fh-avatar fh-avatar--xs"><img src="img/avatars/mateo.webp" alt></span><span>Mateo</span></span></td></tr>
                <tr><th scope="row" class="fh-cell fh-cell--text">Halcyon Dental</th><td class="fh-cell fh-cell--status"><span class="fh-status" data-tone="sky">Qualified</span></td><td class="fh-cell fh-cell--currency">$31,200</td><td class="fh-cell fh-cell--percent"><span class="fh-cell__bar" data-tone="teal" style="--v:45"><i></i><span>45%</span></span></td><td class="fh-cell fh-cell--user"><span class="fh-cell__user"><span class="fh-avatar fh-avatar--xs"><img src="img/avatars/isla.webp" alt></span><span>Isla</span></span></td></tr>
                <tr><th scope="row" class="fh-cell fh-cell--text">Oak &amp; Ember</th><td class="fh-cell fh-cell--status"><span class="fh-status" data-tone="rose">Lost</span></td><td class="fh-cell fh-cell--currency">$28,000</td><td class="fh-cell fh-cell--percent"><span class="fh-cell__bar" data-tone="teal" style="--v:0"><i></i><span>0%</span></span></td><td class="fh-cell fh-cell--user"><span class="fh-cell__user"><span class="fh-avatar fh-avatar--xs"><img src="img/avatars/ruth.webp" alt></span><span>Ruth</span></span></td></tr>
            </tbody>
          </table></div></div>
        </div>
      </figure>
    </div>
    <div class="fh-canvas__foot"><span>Media, at the size it ships</span><span>08 / 10</span></div>
  </div>
</section>
```

#### SLD-2.6 · Team

```html
<section class="fh-canvas fh-slide" data-tone="lime" data-fh="SLD-2.6">
  <div class="fh-canvas__body">
    <div class="fh-canvas__main">
      <h2 class="fh-canvas__title">Who's on it</h2>
      <div class="fh-canvas__ui" style="--fh-canvas-ui-scale: 1.5">
        <div class="fh-grid" data-cols="3" style="--fh-grid-min: 11rem; --fh-gap: 1.25rem 1.5rem">
          <a class="fh-person" href="#slide-layouts" data-tone="sky"><span class="fh-avatar fh-avatar--lg" data-status="online" data-face><img src="img/avatars/reginald.webp" alt></span><span class="fh-person__text"><b>Reginald</b><span>Agent services</span></span></a>
          <a class="fh-person" href="#slide-layouts" data-tone="lime"><span class="fh-avatar fh-avatar--lg" data-status="online" data-face><img src="img/avatars/ava.webp" alt></span><span class="fh-person__text"><b>Ava</b><span>Design engineer</span></span></a>
          <a class="fh-person" href="#slide-layouts" data-tone="amber"><span class="fh-avatar fh-avatar--lg" data-status="away" data-face><img src="img/avatars/mateo.webp" alt></span><span class="fh-person__text"><b>Mateo</b><span>Data and APIs</span></span></a>
          <a class="fh-person" href="#slide-layouts" data-tone="violet"><span class="fh-avatar fh-avatar--lg" data-face><img src="img/avatars/isla.webp" alt></span><span class="fh-person__text"><b>Isla</b><span>Research</span></span></a>
          <a class="fh-person" href="#slide-layouts" data-tone="teal"><span class="fh-avatar fh-avatar--lg" data-status="online" data-face><img src="img/avatars/cole.webp" alt></span><span class="fh-person__text"><b>Cole</b><span>Front end</span></span></a>
          <a class="fh-person" href="#slide-layouts" data-tone="rose"><span class="fh-avatar fh-avatar--lg fh-avatar--generated" data-tone="rose">RT</span><span class="fh-person__text"><b>Ruth</b><span>Operations</span></span></a>
        </div>
      </div>
    </div>
    <div class="fh-canvas__foot"><span>Media, at the size it ships</span><span>09 / 10</span></div>
  </div>
</section>
```

### SLD-3 · Close

#### SLD-3.1 · Close

```html
<section class="fh-canvas fh-slide fh-slide--middle fh-canvas--center" data-tone="violet" data-fh="SLD-3.1">
  <div class="fh-canvas__body">
    <div class="fh-canvas__top"><span class="fh-canvas__mark"><i>_</i>firehorse</span></div>
    <div class="fh-canvas__main">
      <div class="fh-canvas__ui" style="--fh-canvas-ui-scale: 1.4"><p class="fh-eyebrow-pill" data-tone="live"><span class="fh-dot fh-dot--live"></span>Questions welcome</p></div>
      <h2 class="fh-canvas__title">Thank you</h2>
      <p class="fh-canvas__sub">firehorse.rascode.dev/media</p>
      <div class="fh-canvas__ui" style="--fh-canvas-ui-scale: 1.4"><div class="fh-cluster"><a class="fh-button" href="https://firehorse.rascode.dev/media/">Read the docs</a><a class="fh-button fh-button--secondary" href="https://github.com/rascode/firehorse">Download from Git</a></div></div>
    </div>
    <div class="fh-canvas__foot"><span>Rascode Studio</span><span>10 / 10</span></div>
  </div>
</section>
```

## THM · Brand theme file

@layer fh.themes

Classes: 

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/theming/#THM.

## THS · Theme select

A native select. firehorse.js sets data-fh-theme on <html> and remembers it.

Classes: `fh-field` `fh-select`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/theming/#THS.

## TML · Timelines

Classes: `fh-milestones` `fh-milestones__item` `fh-milestones__date` `fh-milestones__body` `fh-milestones__title` `fh-phases` `fh-phases__stop` `fh-phases__date` `fh-phases__title` `fh-phases__items` `fh-dot` `fh-dot--live` `fh-schedule` `fh-schedule__grid` `fh-schedule__head` `fh-schedule__row` `fh-schedule__label` `fh-schedule__bar` `fh-activity` `fh-activity__day` `fh-activity__item` `fh-avatar` `fh-activity__body` `fh-activity__line` `fh-status` `fh-activity__time` `fh-activity__remark` `fh-progress`

### TML-1 · Timelines

#### TML-1.1 · Milestones

```html
<div>
<ol class="fh-milestones" data-tone="sky" data-fh="TML-1.1">
  <li class="fh-milestones__item" data-state="done"><time class="fh-milestones__date" datetime="2026-11-01">Nov 1</time><div class="fh-milestones__body"><p class="fh-milestones__title">Shell</p><p>Side navigation, environment band and selector.</p></div></li>
  <li class="fh-milestones__item" data-state="done"><time class="fh-milestones__date" datetime="2026-11-01">Nov 1</time><div class="fh-milestones__body"><p class="fh-milestones__title">Sign-in</p><p>Glass sign-in with username or email.</p></div></li>
  <li class="fh-milestones__item" data-state="now"><time class="fh-milestones__date" datetime="2026-11-15">Nov 15</time><div class="fh-milestones__body"><p class="fh-milestones__title">Applications</p><p>The registry everything maps back to.</p></div></li>
  <li class="fh-milestones__item" data-state="next"><time class="fh-milestones__date" datetime="2026-12-01">Dec 1</time><div class="fh-milestones__body"><p class="fh-milestones__title">Enterprise</p><p>Organisations, their people and sites.</p></div></li>
  <li class="fh-milestones__item" data-state="next"><time class="fh-milestones__date" datetime="2026-12-15">Dec 15</time><div class="fh-milestones__body"><p class="fh-milestones__title">Identity &amp; access</p><p>People, accounts and roles.</p></div></li>
</ol>
</div>
```

#### TML-1.2 · Horizontal track

```html
<div style="min-inline-size: 0">
<ol class="fh-phases" data-tone="violet" aria-label="Project phases" data-fh="TML-1.2">
  <li class="fh-phases__stop" data-state="done"><time class="fh-phases__date">Oct 6</time><p class="fh-phases__title">Discovery</p><p>Scope signed.</p></li>
  <li class="fh-phases__stop" data-state="done"><time class="fh-phases__date">Oct 20</time><p class="fh-phases__title">Design</p><p>System approved.</p></li>
  <li class="fh-phases__stop" data-state="now"><time class="fh-phases__date">Nov 3</time><p class="fh-phases__title">Build</p><p>Sprint 2 of 3.</p><ul class="fh-phases__items"><li><span class="fh-dot fh-dot--live" data-tone="amber" aria-hidden="true"></span><span>Checkout</span></li><li><span class="fh-dot" data-tone="violet" aria-hidden="true"></span><span>Order emails</span></li></ul></li>
  <li class="fh-phases__stop" data-state="next"><time class="fh-phases__date">Dec 1</time><p class="fh-phases__title">Launch</p><p>Go-live and handover.</p></li>
</ol>
</div>
```

#### TML-1.3 · Schedule

```html
<div class="site-demo">
          <div class="site-demo__head"><h3>Schedule</h3><p>Bars across months with a today line. Set <code>--start</code> and <code>--span</code> in columns; <code>--fh-schedule-now</code> places today. Scrolls sideways when narrow, with the labels pinned.</p></div>
          <div style="padding: var(--fh-space-6)">
<div class="fh-schedule" data-fh="TML-1.3">
  <div class="fh-schedule__grid" style="--fh-schedule-cols: 6; --fh-schedule-now: 1.03" data-now="Today">
    <div class="fh-schedule__head"><span></span><span>Nov</span><span>Dec</span><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span></div>
    <div class="fh-schedule__row" data-tone="lime"><span class="fh-schedule__label">Shell &amp; sign-in</span><span class="fh-schedule__bar" data-state="done" style="--start: 1; --span: 1">Done</span></div>
    <div class="fh-schedule__row" data-tone="orange"><span class="fh-schedule__label">Applications</span><span class="fh-schedule__bar" data-state="now" style="--start: 1; --span: 2">Registry, domains, deploys</span></div>
    <div class="fh-schedule__row" data-tone="sky"><span class="fh-schedule__label">Enterprise</span><span class="fh-schedule__bar" data-state="next" style="--start: 2; --span: 2">Organisations</span></div>
    <div class="fh-schedule__row" data-tone="amber"><span class="fh-schedule__label">Business</span><span class="fh-schedule__bar" data-state="next" style="--start: 3; --span: 2">Entities, money</span></div>
    <div class="fh-schedule__row" data-tone="violet"><span class="fh-schedule__label">Identity &amp; access</span><span class="fh-schedule__bar" data-state="next" style="--start: 4; --span: 2">People, roles</span></div>
    <div class="fh-schedule__row" data-tone="teal"><span class="fh-schedule__label">Settings</span><span class="fh-schedule__bar" data-state="next" style="--start: 6; --span: 1">Preferences</span></div>
  </div>
</div>
          </div>
        </div>
```

#### TML-1.4 · Activity feed

```html
<div class="site-demo">
          <div class="site-demo__head"><h3>Activity feed</h3><p>Who did what, when: an avatar on a rail, the action in one line, a relative time, and anything else (a remark, a progress bar) stacked under it. Day labels split the feed.</p></div>
          <div style="padding: var(--fh-space-6); max-inline-size: 40rem">
<ol class="fh-activity" data-fh="TML-1.4">
  <li class="fh-activity__day">Today</li>
  <li class="fh-activity__item"><span class="fh-avatar" data-tone="sky"><img src="/img/avatars/ava.webp" alt></span><div class="fh-activity__body"><p class="fh-activity__line"><b>Ava</b> moved <a href="#timelines">Northwind Labs</a> to <span class="fh-status" data-tone="lime">Won</span></p><time class="fh-activity__time" datetime="2026-11-01T14:10">2h ago</time></div></li>
  <li class="fh-activity__item" data-tone="amber"><span class="fh-avatar" data-tone="amber"><img src="/img/avatars/mateo.webp" alt></span><div class="fh-activity__body"><p class="fh-activity__line"><b>Mateo</b> commented on <a href="#timelines">Launch checklist</a></p><time class="fh-activity__time" datetime="2026-11-01T11:42">4h ago</time><blockquote class="fh-activity__remark">DNS is ready; we can flip it Monday morning.</blockquote></div></li>
  <li class="fh-activity__item"><span class="fh-avatar" data-tone="violet"><img src="/img/avatars/ruth.webp" alt></span><div class="fh-activity__body"><p class="fh-activity__line"><b>Ruth</b> is uploading the brand kit</p><time class="fh-activity__time" datetime="2026-11-01T09:05">7h ago</time><progress class="fh-progress" value="64" max="100">64%</progress></div></li>
  <li class="fh-activity__day">Yesterday</li>
  <li class="fh-activity__item"><span class="fh-avatar" data-tone="teal">SL</span><div class="fh-activity__body"><p class="fh-activity__line"><b>Sam</b> created the project <a href="#timelines">Halcyon Health site</a></p><time class="fh-activity__time" datetime="2026-10-31T16:20">Oct 31, 4:20 PM</time></div></li>
</ol>
          </div>
        </div>
```

## CAL · Calendar pickers

Classes: `fh-field` `fh-datepicker` `fh-input` `fh-field--full`

### CAL-1 · Pickers

#### CAL-1.1 · Date picker

```html
<div class="fh-field" data-fh="CAL-1.1">
  <label for="pm-due">Due date</label>
  <div class="fh-datepicker" data-fh-datepicker data-mode="single"><input class="fh-input" type="date" id="pm-due" name="due" value="2026-11-14"></div>
</div>
```

#### CAL-1.2 · Date and time picker

```html
<div class="fh-field" data-fh="CAL-1.2">
  <label for="pm-kickoff">Kickoff call</label>
  <div class="fh-datepicker" data-fh-datepicker data-mode="datetime"><input class="fh-input" type="datetime-local" id="pm-kickoff" name="kickoff"></div>
</div>
```

#### CAL-1.3 · Date range picker

```html
<div class="fh-field fh-field--full" data-fh="CAL-1.3">
  <label for="pm-from">Reporting period</label>
  <div class="fh-datepicker" data-fh-datepicker data-mode="range"><input class="fh-input" type="date" id="pm-from" name="from" aria-label="Start"><input class="fh-input" type="date" id="pm-to" name="to" aria-label="End"></div>
</div>
```

### CAL-2 · Inline

#### CAL-2.1 · Inline calendar

```html
<div class="site-demo">
  <div class="site-demo__head"><h3>Inline calendar</h3><p>The month grid on its own, for booking and scheduling screens. Listen for <code>fh:change</code>; set <code>data-mode="range"</code> and <code>data-months="2"</code> for ranges.</p></div>
  <div style="padding: var(--fh-space-6)">
    <div data-fh-calendar data-mode="single" data-value="2026-11-14" data-min="2026-11-01" aria-label="Pick a day"></div>
  </div>
</div>
```

## Former IDs

IDs retired before or since release, and what replaced them. Use the new ID.

| Was | Now |
|---|---|
| `AUT-01` | `AUT-1.1` |
| `AUT-02` | `AUT-1.2` |
| `AUT-03` | `AUT-1.3` |
| `AUT-04` | `AUT-2.1` |
| `AVG` | `AVT-4` |
| `AVK` | `AVT-5` |
| `AVR` | `AVT-3` |
| `AVS` | `AVT-1` |
| `AVS-01` | `AVT-1.1` |
| `AVS-02` | `AVT-1.2` |
| `AVS-03` | `AVT-1.3` |
| `AVS-04` | `AVT-1.4` |
| `AVS-05` | `AVT-1.5` |
| `AVZ` | `AVT-2` |
| `BIZ-01` | `BIZ-1.1` |
| `BIZ-02` | `BIZ-1.2` |
| `BTN-01` | `BTN-1.1` |
| `BTN-02` | `BTN-1.2` |
| `BTN-03` | `BTN-1.3` |
| `BTN-04` | `BTN-2.1` |
| `BTN-05` | `BTN-2.2` |
| `BTN-06` | `BTN-1.4` |
| `BTN-07` | `BTN-3.1` |
| `BTN-08` | `BTN-3.2` |
| `BTN-09` | `BTN-1.5` |
| `CAL-01` | `CAL-1.1` |
| `CAL-02` | `CAL-1.3` |
| `CAL-03` | `CAL-1.2` |
| `CAL-04` | `CAL-2.1` |
| `CAT-01` | `CAT-1.1` |
| `CAT-02` | `CAT-2.1` |
| `CAT-03` | `CAT-3.1` |
| `CAT-04` | `CAT-4.1` |
| `CAT-06` | `CAT-5.1` |
| `CAT-08` | `CAT-6.1` |
| `CAT-09` | `CAT-7.1` |
| `CAT-12` | `CAT-6.2` |
| `CHC` | `CHP-3` |
| `CHC-01` | `CHP-3.1` |
| `CHC-02` | `CHP-3.2` |
| `CHC-03` | `CHP-3.3` |
| `CHC-04` | `CHP-3.4` |
| `CHP-01` | `CHP-1.1` |
| `CHP-02` | `CHP-1.2` |
| `CHP-03` | `CHP-1.3` |
| `CHP-04` | `CHP-1.4` |
| `CHP-05` | `CHP-2.1` |
| `CHP-06` | `CHP-2.2` |
| `CHP-07` | `CHP-2.3` |
| `CUB-01` | `CUB-1.1` |
| `CUB-02` | `CUB-1.2` |
| `CUB-03` | `CUB-1.3` |
| `CUB-04` | `CUB-1.4` |
| `CUC` | `CUB-2` |
| `CUC-01` | `CUB-2.1` |
| `CUC-02` | `CUB-2.2` |
| `CUC-03` | `CUB-2.3` |
| `CVR-01` | `CVR-1.1` |
| `CVR-02` | `CVR-1.2` |
| `EYE-01` | `EYE-6.1` |
| `EYE-02` | `EYE-1.1` |
| `EYE-03` | `EYE-1.2` |
| `EYE-04` | `EYE-1.3` |
| `EYE-05` | `EYE-1.4` |
| `EYE-06` | `EYE-2.1` |
| `EYE-07` | `EYE-2.2` |
| `EYE-08` | `EYE-2.3` |
| `EYE-09` | `EYE-3.1` |
| `EYE-10` | `EYE-3.2` |
| `EYE-11` | `EYE-3.3` |
| `EYE-12` | `EYE-3.4` |
| `EYE-13` | `EYE-4.1` |
| `EYE-14` | `EYE-4.2` |
| `EYE-15` | `EYE-3.5` |
| `EYE-16` | `EYE-2.4` |
| `EYE-17` | `EYE-5.1` |
| `EYE-18` | `EYE-5.2` |
| `EYE-19` | `EYE-5.3` |
| `EYE-20` | `EYE-6.2` |
| `EYE-21` | `EYE-6.3` |
| `EYE-22` | `EYE-7.1` |
| `EYE-23` | `EYE-7.2` |
| `HDR-01` | `HDR-1.1` |
| `HDR-02` | `HDR-1.2` |
| `HDR-03` | `HDR-1.3` |
| `MRK-01` | `EYE` |
| `MRK-02` | `MRK-1.1` |
| `MRK-03` | `MRK-1.2` |
| `PRF-01` | `PRF-1.1` |
| `PRF-02` | `PRF-1.2` |
| `PRF-03` | `PRF-1.4` |
| `PRF-04` | `PRF-1.3` |
| `PRP` | `KVL` |
| `PRP-1` | `KVL-1` |
| `PRP-1.1` | `KVL-1.1` |
| `PRP-1.2` | `KVL-1.2` |
| `PRP-1.3` | `KVL-1.3` |
| `SLD-01` | `SLD-1.1` |
| `SLD-02` | `SLD-1.2` |
| `SLD-03` | `SLD-1.3` |
| `SLD-04` | `SLD-2.1` |
| `SLD-05` | `SLD-2.2` |
| `SLD-06` | `SLD-2.3` |
| `SLD-07` | `SLD-2.4` |
| `SLD-08` | `SLD-3.1` |
| `SLD-09` | `SLD-2.5` |
| `SLD-10` | `SLD-2.6` |
| `SOC-01` | `SOC-1.1` |
| `SOC-02` | `SOC-1.2` |
| `SOC-03` | `SOC-1.3` |
| `TAG-01` | `TAG-1.1` |
| `TAG-02` | `TAG-2.1` |
| `TAG-03` | `TAG-2.2` |
| `TAG-04` | `TAG-2.3` |
| `TAG-05` | `TAG-2.4` |
| `THB-01` | `THB-1.1` |
| `THB-02` | `THB-1.2` |
| `TML-01` | `TML-1.1` |
| `TML-02` | `TML-1.3` |
| `TML-03` | `TML-1.4` |
| `TML-04` | `TML-1.2` |
| `WRT-01` | `WRT-1.1` |
| `WRT-02` | `WRT-1.2` |
| `WRT-03` | `WRT-1.3` |
| `WRT-04` | `WRT-1.4` |
| `WRT-05` | `WRT-1.5` |
| `WRT-06` | `WRT-1.6` |
