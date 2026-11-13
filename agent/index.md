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
| `NEU` | Neutral ramp | Foundations | — | [open](https://firehorse.rascode.dev/foundations/neutral-ramp/) |
| `TON` | Tones | Foundations | — | [open](https://firehorse.rascode.dev/foundations/tones/) |
| `TYP` | Type | Foundations | 1 Type presets (4) | [open](https://firehorse.rascode.dev/foundations/type/) |
| `SPC` | Space | Foundations | — | [open](https://firehorse.rascode.dev/foundations/space/) |
| `RAD` | Radius | Foundations | — | [open](https://firehorse.rascode.dev/foundations/radius/) |
| `ELV` | Elevation | Foundations | — | [open](https://firehorse.rascode.dev/foundations/elevation/) |
| `MOT` | Motion | Motion | 1 Entrances (10) · 2 Sequences (2) · 3 Scroll-linked (5) · 4 Choreography (4) · 5 Drift (8) | [open](https://firehorse.rascode.dev/motion/#MOT) |
| `STK` | Stack | Layout | 1 Stack (3) | [open](https://firehorse.rascode.dev/layout/stack/) |
| `CLS` | Cluster | Layout | 1 Cluster (3) | [open](https://firehorse.rascode.dev/layout/cluster/) |
| `GRD` | Auto grid | Layout | — | [open](https://firehorse.rascode.dev/layout/auto-grid/) |
| `COL` | Columns | Columns | 1 Columns (3) · 2 Compositions (3) | [open](https://firehorse.rascode.dev/layout/columns/) |
| `FND` | Fender | Page design patterns | — | [open](https://firehorse.rascode.dev/patterns/fender/) |
| `CIN` | Cinch | Page design patterns | — | [open](https://firehorse.rascode.dev/patterns/cinch/) |
| `PNL` | Offset panel | Building blocks | — | [open](https://firehorse.rascode.dev/patterns/offset-panel/) |
| `ESP` | Etched split | Building blocks | — | [open](https://firehorse.rascode.dev/patterns/etched-split/) |
| `CTB` | CTA band | Building blocks | — | [open](https://firehorse.rascode.dev/patterns/cta-band/) |
| `BTN` | Button | Actions | 1 Solid (5) · 2 Line (2) · 3 States (2) | [open](https://firehorse.rascode.dev/components/actions/button/) |
| `ACT` | Action & link | Actions | — | [open](https://firehorse.rascode.dev/components/actions/action-and-link/) |
| `MRK` | Markers | Actions | 1 Markers (2) | [open](https://firehorse.rascode.dev/components/actions/markers/) |
| `EYE` | Eyebrow pill | Actions | 1 Lines (4) · 2 Shapes (4) · 3 Fills (5) · 4 Edges (2) · 5 Parts (4) · 6 Sentences (3) · 7 Sizes (2) | [open](https://firehorse.rascode.dev/components/actions/eyebrow-pill/) |
| `CHP` | Chips | Actions | 1 Kinds (4) · 2 Parts (3) · 3 Chip cards (4) | [open](https://firehorse.rascode.dev/components/actions/chips/) |
| `LGS` | Logo strip | Content | 1 Logo strip (1) | [open](https://firehorse.rascode.dev/components/content/logo-strip/) |
| `CRD` | Card in a ruled grid | Content | — | [open](https://firehorse.rascode.dev/components/content/card-in-a-ruled-grid/) |
| `STA` | Stats strip | Content | — | [open](https://firehorse.rascode.dev/components/content/stats-strip/) |
| `KVL` | Key value list | Content | 1 Key value list (3) · 2 Row spacing (1) | [open](https://firehorse.rascode.dev/components/content/key-value-list/) |
| `CKL` | Checklist | Content | — | [open](https://firehorse.rascode.dev/components/content/checklist/) |
| `STP` | Steps | Content | 1 Steps (1) · 2 Form steps (1) | [open](https://firehorse.rascode.dev/components/content/steps/) |
| `CAR` | Carousel | Content | — | [open](https://firehorse.rascode.dev/components/content/carousel/) |
| `LST` | List & timeline | Content | — | [open](https://firehorse.rascode.dev/components/content/list-and-timeline/) |
| `DET` | Details, code, divider | Content | — | [open](https://firehorse.rascode.dev/components/content/details-code-divider/) |
| `TIR` | Pricing tiers | Content | — | [open](https://firehorse.rascode.dev/components/content/pricing-tiers/) |
| `FEA` | Features | Content | — | [open](https://firehorse.rascode.dev/components/content/features/) |
| `TST` | Testimonial | Content | — | [open](https://firehorse.rascode.dev/components/content/testimonial/) |
| `TAB` | Tabs | Bars & tabs | — | [open](https://firehorse.rascode.dev/components/navigation/tabs/) |
| `NAV` | Navigation | Bars & tabs | — | [open](https://firehorse.rascode.dev/components/navigation/navigation/) |
| `BRG` | Hamburger | Drawers & menus | — | [open](https://firehorse.rascode.dev/components/navigation/hamburger/) |
| `MEG` | Mega panel | Drawers & menus | 1 Default (1) · 2 Headed (1) | [open](https://firehorse.rascode.dev/components/navigation/mega-panel/) |
| `DRW` | Drawer | Drawers & menus | 1 Drawer (1) | [open](https://firehorse.rascode.dev/components/navigation/drawer/) |
| `DRP` | Dropdown menu | Drawers & menus | — | [open](https://firehorse.rascode.dev/components/navigation/dropdown-menu/) |
| `ACC` | Accordion | Overlays & feedback | — | [open](https://firehorse.rascode.dev/components/overlays/accordion/) |
| `DLG` | Dialog, menu, toast | Overlays & feedback | — | [open](https://firehorse.rascode.dev/components/overlays/dialog-menu-toast/) |
| `FBK` | Feedback | Overlays & feedback | 1 Feedback (1) | [open](https://firehorse.rascode.dev/components/overlays/feedback/) |
| `EMP` | Empty state & banner | Overlays & feedback | 1 Banner & empty (2) · 2 Empty module (1) | [open](https://firehorse.rascode.dev/components/overlays/empty-state-and-banner/) |
| `AVT` | Avatars | Avatars | 1 Shapes (5) · 2 Sizes & presence · 3 Rings & halos · 4 Generated · 5 Groups | [open](https://firehorse.rascode.dev/components/avatars/avatars/) |
| `AUT` | Sign in & sign up | Forms | 1 Layouts (4) · 2 Method (1) | [open](https://firehorse.rascode.dev/forms/sign-in-and-sign-up/) |
| `FLD` | Fields | Fields & choices | 1 Fields (1) · 2 Dictation (1) · 3 Quiet (1) · 4 Password reveal (1) | [open](https://firehorse.rascode.dev/forms/fields/) |
| `CHO` | Choices | Fields & choices | — | [open](https://firehorse.rascode.dev/forms/choices/) |
| `UPL` | Upload, range, tags, sheet | Fields & choices | — | [open](https://firehorse.rascode.dev/forms/upload-range-tags-sheet/) |
| `TAG` | Tag field | Fields & choices | 1 Field (1) · 2 Inline (4) | [open](https://firehorse.rascode.dev/forms/tag-field/) |
| `DTB` | Datatable | Data | — | [open](https://firehorse.rascode.dev/data/datatable/) |
| `TBL` | Table | Table | 1 Table (1) · 2 Caption head (1) | [open](https://firehorse.rascode.dev/data/table/) |
| `MET` | Metric tiles | Metrics | 1 Metric tile (11) · 2 Spread tiles (8) | [open](https://firehorse.rascode.dev/data/metric-tiles/) |
| `THM` | Brand theme file | Theming | — | [open](https://firehorse.rascode.dev/theming/brand-theme-file/) |
| `THS` | Theme select | Themes | — | [open](https://firehorse.rascode.dev/theming/theme-select/) |
| `TML` | Timelines | Timelines | 1 Timelines (4) | [open](https://firehorse.rascode.dev/pro/project-management/#TML) |
| `CAL` | Calendar pickers | Calendar | 1 Pickers (3) · 2 Inline (1) · 3 Booking (1) | [open](https://firehorse.rascode.dev/pro/project-management/#CAL) |
| `KEY` | Key fields | Key fields | 1 Fields (4) · 2 Groups (1) | [open](https://firehorse.rascode.dev/pro/keys/#KEY) |

## NEU · Neutral ramp

--fh-gray-*

Classes: `fh-swatches-ramp`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/foundations/neutral-ramp/.

## TON · Tones

Category color. Set data-tone once; dots, marks, meta and links inside follow. Ratios are against the current canvas.

Classes: `fh-tone-swatches`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/foundations/tones/.

## TYP · Type

Inter, Geist Mono and Caveat in the Rascode theme; system stacks in core. Fluid roles scale with their container.

Classes: `fh-type-scale` `fh-title` `fh-body`

### TYP-1 · Type presets

Four faces as one attribute: data-fh-type sets the sans and display families and the heading tracking each face wants (Hanken Grotesk at −5%, Archivo at −3%). A theme picks one with config.type. Presets name the family only: load the font yourself.

#### TYP-1.1 · Geist

```html
<div class="fh-type-scale" data-fh-type="geist" data-fh="TYP-1.1"><p class="fh-title">Ink, etch and ember.</p><p class="fh-body" style="margin: 0">The quick brown fox jumps over the lazy dog, 0123456789.</p></div>
```

#### TYP-1.2 · Inter

```html
<div class="fh-type-scale" data-fh-type="inter" data-fh="TYP-1.2"><p class="fh-title">Built for every screen.</p><p class="fh-body" style="margin: 0">The quick brown fox jumps over the lazy dog, 0123456789.</p></div>
```

#### TYP-1.3 · Hanken Grotesk

```html
<div class="fh-type-scale" data-fh-type="hanken" data-fh="TYP-1.3"><p class="fh-title">Beyond the ordinary.</p><p class="fh-body" style="margin: 0">The quick brown fox jumps over the lazy dog, 0123456789.</p></div>
```

#### TYP-1.4 · Archivo

```html
<div class="fh-type-scale" data-fh-type="archivo" data-fh="TYP-1.4"><p class="fh-title">Create something different.</p><p class="fh-body" style="margin: 0">The quick brown fox jumps over the lazy dog, 0123456789.</p></div>
```

## SPC · Space

--fh-space-*

Classes: `fh-space-scale`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/foundations/space/.

## RAD · Radius

--fh-radius-*

Classes: `fh-radius-scale`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/foundations/radius/.

## ELV · Elevation

The convex button style (data-fh-button="convex"): bends out at rest, the shadow inverts on hover, it sinks on press.

Classes: `fh-cluster` `fh-button`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/foundations/elevation/.

## MOT · Motion

Classes: `fh-recede` `fh-scroll-fade` `fh-reveal` `fh-parallax` `fh-scroll-progress` `fh-button` `fh-button--sm`

### MOT-1 · Entrances

Put data-fh-enter on an element and it enters once the page is ready. Step n starts at n × --fh-intro-beat (150ms); --fh-at sets an exact time. Press Replay.

#### MOT-1.1 · Rise

```html
<div class="site-motion-tile" data-fh-enter="rise" data-fh-step="1">rise</div>
```

#### MOT-1.2 · Drop

```html
<div class="site-motion-tile" data-fh-enter="drop" data-fh-step="2">drop</div>
```

#### MOT-1.3 · Fade

```html
<div class="site-motion-tile" data-fh-enter="fade" data-fh-step="3">fade</div>
```

#### MOT-1.4 · Scale

```html
<div class="site-motion-tile" data-fh-enter="scale" data-fh-step="4">scale</div>
```

#### MOT-1.5 · Blur

```html
<div class="site-motion-tile" data-fh-enter="blur" data-fh-step="5">blur</div>
```

#### MOT-1.6 · Fold

```html
<div class="site-motion-tile" data-fh-enter="fold" data-fh-step="6">fold</div>
```

#### MOT-1.7 · Draw

```html
<div class="site-motion-tile site-motion-tile--line">draw<span data-fh-enter="draw" data-fh-step="7"></span></div>
```

#### MOT-1.8 · Wipe

```html
<div class="site-motion-tile" data-fh-enter="wipe" data-fh-step="8">wipe</div>
```

#### MOT-1.9 · Unveil

```html
<div class="site-motion-tile site-motion-tile--art" data-fh-enter="unveil" data-fh-step="9">unveil</div>
```

#### MOT-1.10 · Lift

```html
<div class="site-motion-tile site-motion-tile--clip"><span data-fh-enter="lift" data-fh-step="10">lift</span></div>
```

### MOT-2 · Sequences

An intro's order lives on its section. data-fh-intro marks the owner; data-fh-enter-children staggers a list by --fh-stagger (60ms). The homepage hero is written exactly this way.

#### MOT-2.1 · Intro

```html
<div class="site-motion-hero" data-fh-intro>
  <p class="site-motion-hero__mark" data-fh-enter="fold" data-fh-step="2"><span>_</span>firehorse</p>
  <span class="site-motion-hero__line" data-fh-enter="draw" data-fh-step="4"></span>
  <p class="site-motion-hero__top" data-fh-enter="blur" data-fh-step="6">The design system</p>
  <p class="site-motion-hero__turn" data-fh-enter="drop" data-fh-step="7">that moves the same everywhere.</p>
  <ul class="site-motion-hero__chips" data-fh-enter-children data-fh-step="9">
    <li>Tokens</li><li>Entrances</li><li>Sequences</li><li>Scroll</li><li>Choreography</li><li>Drift</li>
  </ul>
</div>
```

#### MOT-2.2 · Staggered list

```html
<ul class="site-motion-hero__chips" data-fh-enter-children data-fh-step="9">
  <li>Tokens</li><li>Entrances</li><li>Sequences</li><li>Scroll</li><li>Choreography</li><li>Drift</li>
</ul>
```

### MOT-3 · Scroll-linked

CSS only, on the page's scroll timeline: it tracks the scroll exactly and costs no script per frame. Scroll the page and watch these.

#### MOT-3.1 · Recede

```html
<div class="site-motion-art fh-recede" style="--fh-recede-range: 60vh" data-fh="MOT-3.1"></div>
```

#### MOT-3.2 · Scroll fade

```html
<div class="site-motion-art site-motion-art--b fh-scroll-fade" style="--fh-recede-range: 60vh" data-fh="MOT-3.2"></div>
```

#### MOT-3.3 · Reveal

```html
<div class="site-motion-art site-motion-art--c fh-reveal"></div>
```

#### MOT-3.4 · Parallax

```html
<div class="site-motion-art site-motion-art--d fh-parallax" style="--fh-depth: 0.3"></div>
```

#### MOT-3.5 · Progress

```html
<p class="site-motion-note">Page progress: <code>&lt;div class="fh-scroll-progress"&gt;&lt;/div&gt;</code> draws the line at the top of this page.</p>
```

### MOT-4 · Choreography

Script measures once and on resize; the motion itself still runs on the scroll timeline. The circle reveal, glide and lock are free in the enhancer (firehorse.js); dock beside is Firehorse Pro. See them together on the homepage concept.

#### MOT-4.1 · Circle reveal

```html
<div class="site-motion-card">
  <b>Circle reveal</b><small>Free · <code>Firehorse.reveal(change, from)</code></small>
  <button type="button" class="fh-button fh-button--sm" data-motion-reveal data-fh="MOT-4.1">Change the tone</button>
</div>
```

#### MOT-4.2 · Glide

```html
<div class="site-motion-card">
  <b>Glide</b><small>Free · <code>data-fh-glide="center"</code></small>
  <code class="site-motion-code">&lt;nav&gt;&lt;div data-fh-glide="center"&gt;…links…&lt;/div&gt;&lt;/nav&gt;</code>
</div>
```

#### MOT-4.3 · Lock

```html
<div class="site-motion-card">
  <b>Lock</b><small>Free · <code>data-fh-lock</code></small>
  <code class="site-motion-code">&lt;h1 data-fh-lock="clone" data-fh-lock-to=".nav a" data-fh-lock-scale="0.78" data-fh-lock-href="#top"&gt;</code>
</div>
```

#### MOT-4.4 · Dock beside

```html
<div class="site-motion-card">
  <b>Dock beside <span class="site-motion-pro">Pro</span></b><small><code>data-fh-dock-beside="#cta"</code></small>
  <code class="site-motion-code">&lt;div class="tools" data-fh-dock-beside=".cta"&gt;</code>
</div>
```

### MOT-5 · Drift

A photo shows a set share at a time; the rest rests under a soft veil and drifts in, so the photo's tone holds. Five styles are free, three are Pro. import { createDrift } from "/drift.js".

#### MOT-5.1 · Wave

```html
<button type="button" data-drift="wave" aria-pressed="true">Wave</button>
```

#### MOT-5.2 · Silk

```html
<button type="button" data-drift="silk" aria-pressed="false">Silk</button>
```

#### MOT-5.3 · Eddy

```html
<button type="button" data-drift="eddy" aria-pressed="false">Eddy</button>
```

#### MOT-5.4 · Panels

```html
<button type="button" data-drift="panels" aria-pressed="false">Panels</button>
```

#### MOT-5.5 · Ripple

```html
<button type="button" data-drift="ripple" aria-pressed="false">Ripple</button>
```

#### MOT-5.6 · Dapple · Pro

```html
<button type="button" data-drift="dapple" aria-pressed="false">Dapple <span class="site-motion-pro">Pro</span></button>
```

#### MOT-5.7 · Tide lines · Pro

```html
<button type="button" data-drift="tides" aria-pressed="false">Tide lines <span class="site-motion-pro">Pro</span></button>
```

#### MOT-5.8 · Shutters · Pro

```html
<button type="button" data-drift="shutters" aria-pressed="false">Shutters <span class="site-motion-pro">Pro</span></button>
```

## STK · Stack

.fh-stack · --2xs … --2xl

Classes: `fh-stack` `fh-stack--2xs` `fh-label` `fh-small` `fh-muted` `fh-stack--sm` `fh-body` `fh-action` `fh-stack--2xl`

### STK-1 · Stack

#### STK-1.1 · 2xs

```html
<div class="fh-stack fh-stack--2xs">
  <p class="fh-label">2xs</p>
  <p class="fh-small fh-muted" style="margin:0">Tightest sibling gap.</p>
</div>
```

#### STK-1.2 · sm

```html
<div class="fh-stack fh-stack--sm">
  <p class="fh-label">sm</p>
  <p class="fh-body" style="margin:0">One gap between siblings, set by <code>--fh-gap</code>.</p>
  <a class="fh-action" href="#layout" data-fh="STK-1.2">Read more</a>
</div>
```

#### STK-1.3 · 2xl

```html
<div class="fh-stack fh-stack--2xl">
  <p class="fh-label">2xl</p>
  <p class="fh-small fh-muted" style="margin:0">Widest stack gap.</p>
</div>
```

## CLS · Cluster

.fh-cluster · --between · --end

Classes: `fh-cluster` `fh-badge` `fh-cluster--between` `fh-label` `fh-cluster--end`

### CLS-1 · Cluster

#### CLS-1.1 · Default

```html
<div class="fh-cluster">
  <span class="fh-badge" data-tone="sky" data-fh="CLS-1.1">Agents</span>
  <span class="fh-badge" data-tone="teal" data-fh="CLS-1.1">Data</span>
  <span class="fh-badge" data-tone="orange" data-fh="CLS-1.1">Automation</span>
  <span class="fh-badge" data-fh="CLS-1.1">Managed</span>
</div>
```

#### CLS-1.2 · Between

```html
<div class="fh-cluster fh-cluster--between" style="inline-size: 100%">
  <span class="fh-label">Between</span>
  <span class="fh-badge" data-tone="lime" data-fh="CLS-1.2">Flush ends</span>
</div>
```

#### CLS-1.3 · End

```html
<div class="fh-cluster fh-cluster--end" style="inline-size: 100%">
  <span class="fh-badge" data-tone="sky" data-fh="CLS-1.3">End</span>
  <span class="fh-badge" data-tone="teal" data-fh="CLS-1.3">aligned</span>
</div>
```

## GRD · Auto grid

.fh-grid[data-cols]

Classes: `fh-grid` `fh-card` `fh-card--solid`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/layout/auto-grid/.

## COL · Columns

The grid itself. data-cols="16" for the finer one; a child .fh-cols[data-subgrid] keeps nested content on the parent's lines.

Classes: `fh-cols` `fh-card` `fh-card--solid` `fh-stack` `fh-eyebrow-pill` `fh-dot` `fh-heading` `fh-body`

### COL-1 · Columns

#### COL-1.1 · 12 columns

```html
<div class="fh-cols" data-fh="COL-1.1">
  <div class="fh-card fh-card--solid" data-span="12">12</div>
  <div class="fh-card fh-card--solid" data-span="8">8</div>
  <div class="fh-card fh-card--solid" data-span="4">4</div>
  <div class="fh-card fh-card--solid" data-span="3">3</div>
  <div class="fh-card fh-card--solid" data-span="6">6</div>
  <div class="fh-card fh-card--solid" data-span="3">3</div>
</div>
```

#### COL-1.2 · 16 columns

```html
<div class="fh-cols" data-cols="16" data-fh="COL-1.2">
  <div class="fh-card fh-card--solid" data-span="10">10 of 16</div>
  <div class="fh-card fh-card--solid" data-span="6">6</div>
  <div class="fh-card fh-card--solid" data-span="5" data-start="3">5, from 3</div>
  <div class="fh-card fh-card--solid" data-span="7" data-start="10">7, from 10</div>
</div>
```

#### COL-1.3 · Subgrid

```html
<div class="fh-cols" data-fh="COL-1.3">
  <div class="fh-cols" data-subgrid data-span="8" data-start="3">
    <div class="fh-card fh-card--solid" data-span="5">Nested 5</div>
    <div class="fh-card fh-card--solid" data-span="3">Nested 3</div>
  </div>
</div>
```

### COL-2 · Compositions

Three placements to start from. Offset: copy held to the left, the image breaking right. Asymmetric: a 5 / 7 split with the image dropped. Broken: two pieces sharing rows, so one overlaps the other.

#### COL-2.1 · Offset

```html
<div class="fh-cols" data-fh="COL-2.1">
  <div class="fh-stack" data-span="5" data-start="2" data-span-md="8">
    <p class="fh-eyebrow-pill" data-tone="violet"><span class="fh-dot"></span>Offset</p>
    <h3 class="fh-heading">Copy from column 2</h3>
    <p class="fh-body">The text starts one column in; the picture takes the right half and runs to the edge of the grid.</p>
  </div>
  <div class="fh-card fh-card--solid" data-span="6" data-start="7" data-row="1" style="min-block-size: 12rem">Image · 7–12</div>
</div>
```

#### COL-2.2 · Asymmetric

```html
<div class="fh-cols" data-fh="COL-2.2">
  <div class="fh-card fh-card--solid" data-span="5" style="min-block-size: 10rem">5</div>
  <div class="fh-card fh-card--solid" data-span="7" data-align="end" style="min-block-size: 16rem">7 · dropped to the bottom</div>
</div>
```

#### COL-2.3 · Broken

```html
<div class="fh-cols" data-fh="COL-2.3">
  <div class="fh-card fh-card--solid" data-span="7" data-start="1" data-row="1" data-row-span="2" style="min-block-size: 16rem">Image · 1–7, two rows</div>
  <div class="fh-card" data-span="6" data-start="6" data-row="2" data-layer="over">Card · 6–11, over the image</div>
</div>
```

## FND · Fender

A long page that changes gear partway. A note closes the first chapter and opens a tinted band that hangs down the rest of the page, the way a fender hangs down the side of a saddle: through the next section, under its full-width content and through a tall footer to the bottom.

Classes: `fh-page` `fh-main` `fh-section` `fh-grid` `fh-card` `fh-card--solid` `fh-label` `fh-small` `fh-muted` `fh-section--ruled` `fh-section-head` `fh-panel-inset` `fh-subheading` `fh-footer` `fh-footer--tall` `fh-footer__columns` `fh-footer__column` `fh-panel`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/patterns/fender/.

## CIN · Cinch

A page's opening argument, right under its sub-nav: the claim on the left, the substance on the right, held together by one line the way a cinch holds both sides of a saddle. Two panes, two tones, one number to end on.

Classes: `fh-section` `fh-section--flush` `fh-etched-split` `fh-etched-split--roomy` `fh-bleed` `fh-etched-split__pane` `fh-crosses` `fh-stack` `fh-eyebrow-pill` `fh-dot` `fh-dot--live` `fh-heading` `fh-lede` `fh-body` `fh-muted`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/patterns/cinch/.

## PNL · Offset panel

A tinted column that begins where you mark it and runs to the bottom of the page, through every section below and the footer. Its fill against the open canvas splits the page in two tones; its dashed edges run the full height. Content stepping onto it takes .fh-panel-inset. Fender is built on it.

Classes: `fh-page` `fh-main` `fh-section` `fh-label` `fh-small` `fh-muted` `fh-section--ruled` `fh-section-head` `fh-panel-inset` `fh-subheading` `fh-footer` `fh-footer--tall` `fh-footer__columns` `fh-footer__column` `fh-panel`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/patterns/offset-panel/.

## ESP · Etched split

A full-bleed pair that breaks out of the content column while its copy still lines up with the content edge on both sides. Stacks when the page is narrow. --roomy gives each pane the full section rhythm. Cinch is built on it.

Classes: `fh-etched-split` `fh-bleed` `fh-etched-split__pane` `fh-crosses` `fh-stack` `fh-stack--lg` `fh-eyebrow-pill` `fh-dot` `fh-dot--live` `fh-heading` `fh-lede` `fh-checklist`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/patterns/etched-split/.

## CTB · CTA band

The closing ask. A display-size title and the actions on the left; the proof on the right behind a dashed seam: what it costs and takes, who you'll talk to, one line of fine print. A short tone bar rides the top edge. Stacks when the slot is narrow; label, heading, lede and actions on their own still make the simple band.

Classes: `fh-cta-band` `fh-crosses` `fh-cta-band__main` `fh-eyebrow-pill` `fh-dot` `fh-dot--live` `fh-cta-band__title` `fh-lede` `fh-hero__actions` `fh-button` `fh-button--secondary` `fh-cta-band__aside` `fh-cubes` `fh-cube` `fh-cube--lg` `fh-cta-band__people` `fh-avatars` `fh-avatar` `fh-cta-band__fine`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/patterns/cta-band/.

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

Classes: `fh-action` `fh-action--lg` `fh-link` `fh-link--quiet`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/actions/action-and-link/.

## MRK · Markers

Dots, eyebrow pills, breadcrumbs and badges. A badge is for counts only; a status is an fh-chip with data-status, or inline fh-status text.

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

The Doppler pill as a full component: a dot and a short label that sit above a heading. Combine a shape, a line and any of the parts. Every variant takes the tone from data-tone.

Classes: `fh-eyebrow-pill` `fh-dot` `fh-dot--live` `fh-eyebrow-pill--etched` `fh-eyebrow-pill--dotted` `fh-eyebrow-pill--double` `fh-dot--square` `fh-eyebrow-pill--rounded` `fh-eyebrow-pill--sharp` `fh-dot--diamond` `fh-eyebrow-pill--oval` `fh-eyebrow-pill--tab` `fh-eyebrow-pill--tone` `fh-eyebrow-pill--solid` `fh-dot--blink` `fh-eyebrow-pill--gradient` `fh-eyebrow-pill--glass` `fh-dot--ring` `fh-eyebrow-pill--ghost` `fh-eyebrow-pill--bracket` `fh-dot--bar` `fh-eyebrow-pill--underline` `fh-eyebrow-pill__index` `fh-eyebrow-pill__seg` `fh-eyebrow-pill__count` `fh-eyebrow-pill--filled-end` `fh-eyebrow-pill--sentence` `fh-avatar` `fh-avatar--circle` `fh-eyebrow-pill__action` `fh-kbd` `fh-eyebrow-pill--sm` `fh-eyebrow-pill--lg`

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

__index · __seg · __count · --filled-end

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

#### EYE-5.4 · Filled end

```html
<p class="fh-eyebrow-pill fh-eyebrow-pill--filled-end" data-tone="orange" data-fh="EYE-5.4"><span class="fh-dot"></span><span class="fh-eyebrow-pill__seg">Automation</span><span class="fh-eyebrow-pill__seg"><strong>4 services</strong></span></p>
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

Chips filter or jump; the selected one fills with its tone. Icons replace the dot. Every variant takes the tone from data-tone. For the status of a record use data-status instead (merged, running, queued, failed, archived): the tone follows the value. A chip is for status, and sits only in a record's head, a collapsed section's summary and once per row; counts are an fh-badge; inline status text is an fh-status.

Classes: `fh-chips` `fh-chips--wrap` `fh-chip` `fh-chips--track` `fh-chip--solid` `fh-icon` `fh-chip--tone` `fh-chip--plain` `fh-chip--underline` `fh-chip--indexed` `fh-chip__index` `fh-chips--indexed` `fh-chip__remove` `fh-chip-card` `fh-chip-card__block` `fh-chip-card__text` `fh-chip--sm`

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

## LGS · Logo strip

Grayscale marks that come to full colour on hover. Add fh-logos--marquee for an endless scroll (duplicate the list once). Only show logos you have permission to use.

Classes: `fh-logos`

### LGS-1 · Logo strip

#### LGS-1.1 · Logo strip

```html
<ul class="fh-logos" data-fh="LGS-1.1">
  <li><svg viewBox="0 0 120 24" width="120" height="24" aria-label="Northwind"><text x="0" y="18" font-size="16" font-family="system-ui,sans-serif" fill="currentColor">Northwind</text></svg></li>
  <li><svg viewBox="0 0 100 24" width="100" height="24" aria-label="Halcyon"><text x="0" y="18" font-size="16" font-family="system-ui,sans-serif" fill="currentColor">Halcyon</text></svg></li>
  <li><svg viewBox="0 0 90 24" width="90" height="24" aria-label="Voltline"><text x="0" y="18" font-size="16" font-family="system-ui,sans-serif" fill="currentColor">Voltline</text></svg></li>
  <li><svg viewBox="0 0 80 24" width="80" height="24" aria-label="Lumen"><text x="0" y="18" font-size="16" font-family="system-ui,sans-serif" fill="currentColor">Lumen</text></svg></li>
</ul>
```

## CRD · Card in a ruled grid

Dashed cells that share their rules, a tone-colored meta line, and a title link that covers the whole card. Narrow cards stack their footer.

Classes: `fh-grid` `fh-grid--ruled` `fh-grid--etched` `fh-card` `fh-card__meta` `fh-card__title` `fh-card__body` `fh-card__footer` `fh-card__price` `fh-action`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/content/card-in-a-ruled-grid/.

## STA · Stats strip

One column, two, or a row, depending on the slot.

Classes: `fh-stats`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/content/stats-strip/.

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

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/content/checklist/.

## STP · Steps

Numbered because order matters. Form steps live on Forms.

Classes: `fh-steps` `fh-steps__mark` `fh-form-step` `fh-form-step__head` `fh-form-step__text` `fh-cubes` `fh-form-step__cube` `fh-cube` `fh-cube--outline` `fh-form-step__title` `fh-muted` `fh-form-step__body` `fh-form` `fh-field` `fh-input`

### STP-1 · Steps

#### STP-1.1 · Steps

```html
<ol class="fh-steps" data-fh="STP-1.1">
  <li data-tone="sky"><span class="fh-steps__mark"></span><div><h3>Assess</h3><p>Understand the current state and its risks.</p></div></li>
  <li data-tone="teal"><span class="fh-steps__mark"></span><div><h3>Build</h3><p>Ship the foundation, then connect the systems.</p></div></li>
  <li data-tone="orange"><span class="fh-steps__mark"></span><div><h3>Operate</h3><p>Keep it healthy as you grow.</p></div></li>
</ol>
```

### STP-2 · Form steps

Numbered form sections with outline-cube heads (CUB-1.4). Wide slots put the head sticky beside the fields.

#### STP-2.1 · Form step

```html
<section class="fh-form-step" data-fh="STP-2.1">
  <header class="fh-form-step__head">
    <div class="fh-form-step__text">
      <ul class="fh-cubes fh-form-step__cube" data-tone="sky"><li><b class="fh-cube fh-cube--outline">01</b></li></ul>
      <h3 class="fh-form-step__title">About you</h3>
      <p class="fh-muted" style="margin:0">Who we are talking to.</p>
    </div>
  </header>
  <div class="fh-form-step__body fh-form">
    <div class="fh-field"><label for="fs-name">Name</label><input class="fh-input" id="fs-name" value="Ada Lovelace"></div>
    <div class="fh-field"><label for="fs-email">Email</label><input class="fh-input" id="fs-email" type="email" value="ada@analytical.engine"></div>
  </div>
</section>
```

## CAR · Carousel

Multi-panel slider modelled on X media posts: swipe or scroll, panels snap, and the current dot stretches into a longer bubble. Native CSS dots in Chromium; the enhancer draws the same dots elsewhere.

Classes: `fh-carousel` `fh-carousel__track` `fh-carousel__slide` `fh-label` `fh-stats` `fh-carousel__count`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/content/carousel/.

## LST · List & timeline

Rows with a visual, text and a trailing slot. A dashed timeline for activity.

Classes: `fh-stack` `fh-stack--xl` `fh-list` `fh-avatar` `fh-list__title` `fh-list__link` `fh-list__meta` `fh-badge` `fh-avatar--generated` `fh-timeline`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/content/list-and-timeline/.

## DET · Details, code, divider

Classes: `fh-stack` `fh-stack--lg` `fh-dl` `fh-divider` `fh-code` `fh-button` `fh-button--sm` `fh-button--ghost` `fh-small` `fh-muted` `fh-kbd`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/content/details-code-divider/.

## TIR · Pricing tiers

The featured tier glows in its tone; every tier stacks or sits side by side by container.

Classes: `fh-tiers` `fh-tier` `fh-tier__name` `fh-tier__price` `fh-tier__pitch` `fh-checklist` `fh-button` `fh-button--secondary` `fh-button--block` `fh-tier--featured` `fh-tier__flag` `fh-badge`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/content/pricing-tiers/.

## FEA · Features

Classes: `fh-grid` `fh-feature` `fh-feature__icon`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/content/features/.

## TST · Testimonial

Classes: `fh-testimonial` `fh-person` `fh-avatar` `fh-avatar--circle` `fh-person__text`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/content/testimonial/.

## TAB · Tabs

Underline tabs that scroll sideways when they run out of room. fh-tabs--mono for chrome.

Classes: `fh-stack` `fh-stack--lg` `fh-tabs` `fh-tabs--mono`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/navigation/tabs/.

## NAV · Navigation

Pagination, a wizard stepper, search and a side nav.

Classes: `fh-stack` `fh-stack--lg` `fh-search` `fh-sr-only` `fh-kbd` `fh-stepper` `fh-pagination` `fh-sidenav` `fh-label` `fh-badge` `fh-sidenav__area` `fh-sidenav__area-head` `fh-sidenav__row` `fh-cluster` `fh-icon` `fh-sidenav__label` `fh-sidenav__badge` `fh-sidenav__chevron` `fh-sidenav__children` `fh-sidenav__child`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/navigation/navigation/.

## BRG · Hamburger

Three bars, seven morphs, every state. Open comes from aria-expanded, a sibling :popover-open, or fh-burger--open. Click any of them.

Classes: `fh-burger` `fh-burger--boxed` `fh-burger--open` `fh-burger--label` `fh-burger--arrow` `fh-burger--spin` `fh-burger--squeeze` `fh-burger--minus` `fh-burger--plus` `fh-burger--dots` `fh-burger--tone`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/navigation/hamburger/.

## MEG · Mega panel

Equal category columns with dashed rules and a footer rail. Default sits flush under the header; --headed puts the category titles on one row above a full-bleed etched rule with scaffold ticks, and pairs with fh-mega__link for rich rows.

Classes: `fh-mega` `fh-frame` `fh-mega__grid` `fh-mega__rail` `fh-action` `fh-mega--headed` `fh-mega__link` `fh-mega__link-media` `fh-icon` `fh-mega__link-title` `fh-mega__link-desc`

### MEG-1 · Default

#### MEG-1.1 · Default

```html
<div class="fh-mega fh-frame" style="position: relative; inset: auto; display: block; opacity: 1; translate: none; max-block-size: none; box-shadow: none; border: var(--fh-border-thin) dashed var(--fh-color-etch); border-radius: var(--fh-radius-lg)" data-fh="MEG-1.1">
  <div class="fh-mega__grid">
    <section data-tone="sky"><h3>Agents</h3><ul><li><a href="#c-mega">Lead follow-up</a></li><li><a href="#c-mega">Inbox triage</a></li></ul></section>
    <section data-tone="teal"><h3>Data</h3><ul><li><a href="#c-mega">Warehouses</a></li><li><a href="#c-mega">Pipelines</a></li></ul></section>
    <section data-tone="orange"><h3>Automation</h3><ul><li><a href="#c-mega">Workflows</a></li><li><a href="#c-mega">Webhooks</a></li></ul></section>
  </div>
  <div class="fh-mega__rail"><a class="fh-action" href="#c-mega">All services</a></div>
</div>
```

### MEG-2 · Headed

#### MEG-2.1 · Headed

```html
<div class="fh-mega fh-mega--headed fh-frame" style="position: relative; inset: auto; display: block; opacity: 1; translate: none; max-block-size: none; box-shadow: none; border: var(--fh-border-thin) dashed var(--fh-color-etch); border-radius: var(--fh-radius-lg)" data-fh="MEG-2.1">
  <div class="fh-mega__grid">
    <section data-tone="sky">
      <h3><a href="#c-mega">Agents</a></h3>
      <ul>
        <li><a class="fh-mega__link" href="#c-mega"><span class="fh-mega__link-media"><i class="fh-icon fh-icon--bot" aria-hidden="true"></i></span><span class="fh-mega__link-title">Lead follow-up</span><span class="fh-mega__link-desc">Answers and books on your channels.</span></a></li>
        <li><a class="fh-mega__link" href="#c-mega"><span class="fh-mega__link-media"><i class="fh-icon fh-icon--inbox" aria-hidden="true"></i></span><span class="fh-mega__link-title">Inbox triage</span><span class="fh-mega__link-desc">Sorts and tags every message.</span></a></li>
      </ul>
    </section>
    <section data-tone="teal">
      <h3><a href="#c-mega">Data</a></h3>
      <ul>
        <li><a class="fh-mega__link" href="#c-mega"><span class="fh-mega__link-media"><i class="fh-icon fh-icon--database" aria-hidden="true"></i></span><span class="fh-mega__link-title">Warehouses</span><span class="fh-mega__link-desc">One place for every table.</span></a></li>
      </ul>
    </section>
  </div>
  <div class="fh-mega__rail"><a class="fh-action" href="#c-mega">Browse the catalog</a></div>
</div>
```

## DRW · Drawer

The mobile menu: a full-width popover under the header with grouped links. Open it from the hamburger below, or use the site header's drawer on a narrow viewport.

Classes: `fh-drawer` `fh-drawer__group` `fh-label`

### DRW-1 · Drawer

#### DRW-1.1 · Drawer

```html
<div id="demo-drawer" popover class="fh-drawer" data-fh="DRW-1.1">
  <div class="fh-drawer__group">
    <p class="fh-label">Docs</p>
    <ul>
      <li><a href="#c-drawer">Foundations</a></li>
      <li><a href="#c-drawer">Components</a></li>
      <li><a href="#c-drawer">Forms</a></li>
    </ul>
  </div>
  <div class="fh-drawer__group">
    <p class="fh-label">Pro</p>
    <ul>
      <li><a href="#c-drawer">Overview</a></li>
      <li><a href="#c-drawer">Key fields</a></li>
    </ul>
  </div>
</div>
```

## DRP · Dropdown menu

Labels, icons, shortcuts, checkable items and a danger zone. Positioned with CSS anchor positioning.

Classes: `fh-button` `fh-button--secondary` `fh-icon` `fh-menu` `fh-menu__label` `fh-menu__danger`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/navigation/dropdown-menu/.

## ACC · Accordion

Native <details> with a shared name, so only one stays open. The height animates where the browser supports it.

Classes: `fh-accordion`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/overlays/accordion/.

## DLG · Dialog, menu, toast

Native <dialog> and popovers, with enter and exit animations from @starting-style.

Classes: `fh-cluster` `fh-button` `fh-button--secondary` `fh-button--ghost` `fh-menu` `fh-dialog` `fh-dialog__header` `fh-stack` `fh-stack--xs` `fh-label` `fh-subheading` `fh-close` `fh-dialog__body` `fh-body` `fh-dialog__footer`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/overlays/dialog-menu-toast/.

## FBK · Feedback

Alerts, progress, meters, rings, spinners, skeletons, empty states and tooltips.

Classes: `fh-skeleton` `fh-skeleton--block`

### FBK-1 · Feedback

#### FBK-1.1 · Skeleton block

```html
<span class="fh-skeleton fh-skeleton--block" style="block-size: 6rem; inline-size: 100%" aria-hidden="true" data-fh="FBK-1.1"></span>
```

## EMP · Empty state & banner

Classes: `fh-banner` `fh-empty` `fh-empty__icon` `fh-button` `fh-button--sm` `fh-button--secondary` `fh-app-empty`

### EMP-1 · Banner & empty

#### EMP-1.1 · Banner

```html
<div class="fh-banner" data-tone="accent" data-fh="EMP-1.1"><span>Themes now switch with one attribute.</span><a href="#top">Read the notes</a></div>
```

#### EMP-1.2 · Empty

```html
<div class="fh-empty" data-tone="violet" data-fh="EMP-1.2">
  <span class="fh-empty__icon">∅</span>
  <h4>No leads yet</h4>
  <p>When your agent answers its first inquiry, it will show up here with the transcript and the next step.</p>
  <a class="fh-button fh-button--sm fh-button--secondary" href="#c-feedback">Send a test lead</a>
</div>
```

### EMP-2 · Empty module

A section that has not been built yet: dashed outline, title and a short note. Under Empty state & banner (EMP).

#### EMP-2.1 · Empty module

```html
<div class="fh-app-empty" data-fh="EMP-2.1">
  <h2>Finance</h2>
  <p>This module is not wired yet. Numbers and ledgers will land here.</p>
</div>
```

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
<div class="fh-cluster" style="--fh-gap: var(--fh-space-8) var(--fh-space-10)">
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

## AUT · Sign in & sign up

Four layouts, all container-sized. Split puts the art beside the form and moves it on top in narrow slots; Card floats the form over full-bleed art; Glass frosts the form over the art; Plain is the form alone.

Classes: `fh-auth` `fh-auth__art` `fh-auth__panel` `fh-auth__brand` `fh-icon` `fh-segmented` `fh-auth__switch` `fh-sr-only` `fh-auth__head` `fh-auth__form` `fh-field` `fh-input` `fh-input-group` `fh-input-reveal` `fh-auth__row` `fh-check` `fh-button` `fh-divider` `fh-auth__social` `fh-button--secondary` `fh-field__hint` `fh-auth__foot` `fh-auth--card` `fh-auth--plain` `fh-auth--glass` `fh-auth__corner` `fh-segmented--sm` `fh-auth__logo` `fh-auth__method` `fh-auth__forgot` `fh-auth__rules`

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
      <div class="fh-field"><label for="auth-split-pass">Password</label><div class="fh-input-group"><input class="fh-input" id="auth-split-pass" name="password" type="password" autocomplete="current-password" required minlength="8"><button class="fh-input-reveal" type="button" aria-label="Show password" aria-pressed="false"></button></div></div>
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
      <div class="fh-field"><label for="auth-split-new-pass">Password</label><div class="fh-input-group"><input class="fh-input" id="auth-split-new-pass" name="password" type="password" autocomplete="new-password" required minlength="8"><button class="fh-input-reveal" type="button" aria-label="Show password" aria-pressed="false"></button></div><p class="fh-field__hint">8 characters or more.</p></div>
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
      <div class="fh-field"><label for="auth-card-pass">Password</label><div class="fh-input-group"><input class="fh-input" id="auth-card-pass" name="password" type="password" autocomplete="current-password" required minlength="8"><button class="fh-input-reveal" type="button" aria-label="Show password" aria-pressed="false"></button></div></div>
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
      <div class="fh-field"><label for="auth-card-new-pass">Password</label><div class="fh-input-group"><input class="fh-input" id="auth-card-new-pass" name="password" type="password" autocomplete="new-password" required minlength="8"><button class="fh-input-reveal" type="button" aria-label="Show password" aria-pressed="false"></button></div><p class="fh-field__hint">8 characters or more.</p></div>
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
      <div class="fh-field"><label for="auth-plain-pass">Password</label><div class="fh-input-group"><input class="fh-input" id="auth-plain-pass" name="password" type="password" autocomplete="current-password" required minlength="8"><button class="fh-input-reveal" type="button" aria-label="Show password" aria-pressed="false"></button></div></div>
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
      <div class="fh-field"><label for="auth-plain-new-pass">Password</label><div class="fh-input-group"><input class="fh-input" id="auth-plain-new-pass" name="password" type="password" autocomplete="new-password" required minlength="8"><button class="fh-input-reveal" type="button" aria-label="Show password" aria-pressed="false"></button></div><p class="fh-field__hint">8 characters or more.</p></div>
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

#### AUT-1.4 · Glass · frosted over art

```html
<section class="fh-auth fh-auth--glass" data-tone="orange" aria-label="Sign in or create an account" data-fh="AUT-1.4">
  <div class="fh-auth__art" aria-hidden="true"></div>
  <div class="fh-auth__corner">
    <fieldset class="fh-segmented fh-segmented--sm"><legend class="fh-sr-only">Colour scheme</legend><label><input type="radio" name="auth-glass-scheme" value="light" checked> Light</label><label><input type="radio" name="auth-glass-scheme" value="dark"> Dark</label></fieldset>
  </div>
  <div class="fh-auth__panel">
    <p class="fh-auth__brand"><span class="fh-auth__logo" style="--fh-auth-logo: none" aria-hidden="true"></span><b>Northwind Studio</b></p>
    <fieldset class="fh-segmented fh-auth__switch">
      <legend class="fh-sr-only">Account</legend>
      <label><input type="radio" name="auth-glass" id="auth-glass-in" value="in" checked> Sign in</label>
      <label><input type="radio" name="auth-glass" id="auth-glass-up" value="up"> Sign up</label>
    </fieldset>
    <header class="fh-auth__head">
      <h3 data-fh-auth="in">Welcome back</h3>
      <h3 data-fh-auth="up">Create your account</h3>
      <p data-fh-auth="in">Sign in to pick up where you left off.</p>
      <p data-fh-auth="up">Two minutes. No card needed.</p>
    </header>
    <form class="fh-auth__form" data-fh-auth="in" method="post" action="/auth/sign-in">
      <div class="fh-field"><label for="auth-glass-email">Email</label><input class="fh-input" id="auth-glass-email" name="email" type="email" autocomplete="email" required placeholder="you@company.com"></div>
      <div class="fh-field"><label for="auth-glass-pass">Password</label><div class="fh-input-group"><input class="fh-input" id="auth-glass-pass" name="password" type="password" autocomplete="current-password" required minlength="8"><button class="fh-input-reveal" type="button" aria-label="Show password" aria-pressed="false"></button></div></div>
      <div class="fh-auth__row"><label class="fh-check"><input type="checkbox" name="remember"> Remember me</label><a href="#forms">Forgot password?</a></div>
      <button class="fh-button" type="submit">Sign in</button>
    </form>
    <form class="fh-auth__form" data-fh-auth="up" method="post" action="/auth/sign-up">
      <div class="fh-field"><label for="auth-glass-name">Name</label><input class="fh-input" id="auth-glass-name" name="name" autocomplete="name" required placeholder="Ada Lovelace"></div>
      <div class="fh-field"><label for="auth-glass-new-email">Email</label><input class="fh-input" id="auth-glass-new-email" name="email" type="email" autocomplete="email" required placeholder="you@company.com"></div>
      <div class="fh-field"><label for="auth-glass-new-pass">Password</label><div class="fh-input-group"><input class="fh-input" id="auth-glass-new-pass" name="password" type="password" autocomplete="new-password" required minlength="8"><button class="fh-input-reveal" type="button" aria-label="Show password" aria-pressed="false"></button></div></div>
      <button class="fh-button" type="submit">Create account</button>
    </form>
    <p class="fh-auth__foot" data-fh-auth="in">New here? <label for="auth-glass-up">Create an account</label></p>
    <p class="fh-auth__foot" data-fh-auth="up">Already have an account? <label for="auth-glass-in">Sign in</label></p>
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
      <div class="fh-field"><label for="auth-method-pass">Password</label><div class="fh-input-group"><input class="fh-input" id="auth-method-pass" name="password" type="password" autocomplete="current-password" required><button class="fh-input-reveal" type="button" aria-label="Show password" aria-pressed="false"></button></div></div>
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

The "Required" chip comes from the input's own required attribute and settles to "Done" once the field is valid. Errors only show after the visitor has interacted, or at once with aria-invalid="true" (for errors the server sends back).

Classes: `fh-form` `fh-form__row` `fh-field` `fh-input` `fh-field__error` `fh-field--optional` `fh-input-group` `fh-select-wrap` `fh-select` `fh-textarea` `fh-field__hint` `fh-form__actions` `fh-button` `fh-field--dictate` `fh-dictate` `fh-dictate__mode` `fh-dictate__live` `fh-dictate__wave` `fh-dictate__clock` `fh-dictate__interim` `fh-dictate__error` `fh-field--quiet` `fh-input-reveal` `fh-money` `fh-money__currency` `fh-money__select`

### FLD-1 · Fields

#### FLD-1.1 · Fields

```html
<form class="fh-form" novalidate onsubmit="event.preventDefault()" data-fh="FLD-1.1">
  <div class="fh-form__row">
    <div class="fh-field">
      <label for="f-email">Work email</label>
      <input class="fh-input" id="f-email" type="email" required placeholder="you@company.com">
      <p class="fh-field__error">Enter an email like name@company.com.</p>
    </div>
    <div class="fh-field fh-field--optional">
      <label for="f-site">Website</label>
      <div class="fh-input-group"><span>https://</span><input class="fh-input" id="f-site" placeholder="company.com"></div>
    </div>
  </div>
  <div class="fh-field">
    <label for="f-service">Service</label>
    <div class="fh-select-wrap">
      <select class="fh-select" id="f-service" required>
        <option value>Choose a service</option>
        <option>Data architecture</option>
        <option>Automation</option>
        <option>AI agents</option>
      </select>
    </div>
  </div>
  <div class="fh-field fh-field--optional">
    <label for="f-msg">What's going on?</label>
    <textarea class="fh-textarea" id="f-msg" placeholder="A few lines is plenty."></textarea>
    <p class="fh-field__hint">We reply within one business day.</p>
  </div>
  <div class="fh-form__actions">
    <button class="fh-button" type="submit">Send inquiry</button>
  </div>
</form>
```

### FLD-2 · Dictation

Type or talk. The label and a Text | Transcribe switch share the first row; while listening, a live caption shows the waveform, clock and interim words. Progressive: without the switch it is a plain textarea. Wire with data-fh-dictate (or drive the same markup yourself).

#### FLD-2.1 · Dictation

```html
<div class="fh-field fh-field--dictate" data-fh-dictate data-fh="FLD-2.1">
  <label for="f-dictate">Message</label>
  <div class="fh-dictate" role="group" aria-label="Type, or talk and we transcribe">
    <button type="button" class="fh-dictate__mode" data-mode="text" aria-pressed="true">Text</button>
    <button type="button" class="fh-dictate__mode" data-mode="voice" aria-pressed="false">Transcribe</button>
  </div>
  <textarea class="fh-textarea" id="f-dictate" placeholder="A few lines is plenty."></textarea>
  <p class="fh-dictate__live" role="status" hidden>
    <span class="fh-dictate__wave" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span>
    <span>Listening <time class="fh-dictate__clock">0:00</time></span>
    <span class="fh-dictate__interim"></span>
  </p>
  <p class="fh-dictate__error" role="alert" hidden></p>
</div>
```

### FLD-3 · Quiet

A barely-there lift off the canvas, no border. Default fields already use a light fill (--fh-color-field); quiet is fainter still. Use fh-field--quiet or fh-input--quiet.

#### FLD-3.1 · Quiet

```html
<div class="fh-field fh-field--quiet" data-fh="FLD-3.1">
  <label for="f-quiet">Notes</label>
  <textarea class="fh-textarea" id="f-quiet" placeholder="Optional detail"></textarea>
</div>
```

### FLD-4 · Password reveal

A show and hide toggle inside a password field. Put the input in an fh-input-group and add an fh-input-reveal button after it. firehorse.js switches the input between hidden and plain text, keeps aria-pressed and the label in step, and hides the value again when the form submits.

#### FLD-4.1 · Password reveal

```html
<div class="fh-field" data-fh="FLD-4.1">
  <label for="f-reveal">Password</label>
  <div class="fh-input-group">
    <input class="fh-input" id="f-reveal" name="password" type="password" autocomplete="off" value="correct horse battery">
    <button class="fh-input-reveal" type="button" aria-label="Show password" aria-pressed="false"></button>
  </div>
</div>
```

## CHO · Choices

Real radios and checkboxes under the styling, so they submit with the form and work with the keyboard. The segmented switch stays a row in a phone-width slot; add fh-segmented--stack to stack its options.

Classes: `fh-stack` `fh-stack--lg` `fh-segmented` `fh-sr-only` `fh-check` `fh-switch`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/forms/choices/.

## UPL · Upload, range, tags, sheet

A dropzone over a real file input, a styled range, a tag field, and a dialog that slides in as a side sheet.

Classes: `fh-grid` `fh-dropzone` `fh-dropzone__title` `fh-dropzone__hint` `fh-stack` `fh-stack--lg` `fh-field` `fh-range` `fh-field--optional` `fh-tags` `fh-chip` `fh-chip__remove` `fh-button` `fh-button--secondary` `fh-dialog` `fh-dialog--sheet` `fh-dialog__header` `fh-subheading` `fh-close` `fh-dialog__body` `fh-check` `fh-switch` `fh-dl` `fh-dialog__footer`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/forms/upload-range-tags-sheet/.

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

## DTB · Datatable

Classes: `fh-dt`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/data/datatable/.

## TBL · Table

With fh-table--reflow, rows turn into labelled cards when the slot is under 36rem. fh-table__head in the caption is a title with a count chip.

Classes: `fh-table-wrap` `fh-table` `fh-table--reflow` `fh-num` `fh-badge` `fh-table__head` `fh-subheading` `fh-chip`

### TBL-1 · Table

#### TBL-1.1 · Table

```html
<div class="fh-table-wrap" data-fh="TBL-1.1">
  <table class="fh-table fh-table--reflow">
    <thead><tr><th>Invoice</th><th>Client</th><th>Status</th><th class="fh-num">Amount</th></tr></thead>
    <tbody>
      <tr><td data-label="Invoice">RC-0142</td><td data-label="Client">Northwind</td><td data-label="Status"><span class="fh-badge" data-tone="lime">Paid</span></td><td data-label="Amount" class="fh-num">$4,800.00</td></tr>
      <tr><td data-label="Invoice">RC-0143</td><td data-label="Client">Tastin</td><td data-label="Status"><span class="fh-badge" data-tone="amber">Sent</span></td><td data-label="Amount" class="fh-num">$1,250.00</td></tr>
      <tr><td data-label="Invoice">RC-0144</td><td data-label="Client">Halcyon</td><td data-label="Status"><span class="fh-badge">Draft</span></td><td data-label="Amount" class="fh-num">$750.00</td></tr>
    </tbody>
  </table>
</div>
```

### TBL-2 · Caption head

#### TBL-2.1 · Caption head

```html
<div class="fh-table-wrap" data-fh="TBL-2.1">
  <table class="fh-table">
    <caption><div class="fh-table__head"><h3 class="fh-subheading">Schema columns</h3><span class="fh-chip" data-tone="sky">12</span></div></caption>
    <thead><tr><th>Name</th><th>Type</th><th>Notes</th></tr></thead>
    <tbody>
      <tr><td>uuid</td><td>uuid</td><td>Primary key</td></tr>
      <tr><td>name</td><td>text</td><td>Display name</td></tr>
    </tbody>
  </table>
</div>
```

## MET · Metric tiles

One fact per tile: label with an icon, the value, a line under it and where it came from. As many across as fit. Add an fh-progress for a share done, --needed for a fact still to fill in, or make the tile an <a> to open its area. --spread puts the label and description at the top and the value at the bottom, with a wide gap. __row holds avatars, counts and chips. __more is an etched line with a chevron: open, the tile grows in place and shows its detail, so the chevron stays under the pointer; use --full when the detail needs room. __delta shows the change (data-trend; data-good="down" where down is good), and a sparkline, ring or meter drops in as it is.

Classes: `fh-metric` `fh-metric__label` `fh-icon` `fh-metric__sub` `fh-metric__value` `fh-metric__source` `fh-progress` `fh-metric--needed` `fh-metric--spread` `fh-cube` `fh-cube--sm` `fh-metric__figure` `fh-avatars` `fh-avatar` `fh-avatar--sm` `fh-avatar--square` `fh-avatars__more` `fh-metric__more` `fh-kv` `fh-metric__delta` `fh-sparkline` `fh-gauge` `fh-metric--tinted` `fh-metric--full` `fh-metric--wide` `fh-table-wrap` `fh-table` `fh-table--reflow` `fh-num` `fh-chip`

### MET-1 · Metric tile

#### MET-1.1 · Metric

```html
<article class="fh-metric" data-tone="teal" data-fh="MET-1.1">
  <p class="fh-metric__label"><i class="fh-icon fh-icon--building-2" aria-hidden="true"></i>Structure</p>
  <p class="fh-metric__sub">Formed 2019 · Delaware</p>
  <p class="fh-metric__value">LLC</p>
  <p class="fh-metric__source">State records</p>
</article>
```

#### MET-1.2 · Progress

```html
<article class="fh-metric" data-tone="lime" data-fh="MET-1.2">
  <p class="fh-metric__label"><i class="fh-icon fh-icon--credit-card" aria-hidden="true"></i>Stripe</p>
  <p class="fh-metric__sub">Next: bank account</p>
  <p class="fh-metric__value">82%</p>
  <progress class="fh-progress" value="82" max="100">82%</progress>
</article>
```

#### MET-1.3 · Needed

```html
<article class="fh-metric fh-metric--needed" data-fh="MET-1.3">
  <p class="fh-metric__label"><i class="fh-icon fh-icon--receipt" aria-hidden="true"></i>EIN</p>
  <p class="fh-metric__sub">For Stripe and PayPal</p>
  <p class="fh-metric__value">Needed</p>
</article>
```

#### MET-1.4 · Link

```html
<a class="fh-metric" data-tone="sky" href="#a-metric" data-fh="MET-1.4">
  <p class="fh-metric__label"><i class="fh-icon fh-icon--users" aria-hidden="true"></i>Faces</p>
  <p class="fh-metric__sub">2 public</p>
  <p class="fh-metric__value">4</p>
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
  <div class="fh-metric__figure"><p class="fh-metric__value">4</p><div class="fh-avatars" role="group" aria-label="Team">
      <span class="fh-avatar fh-avatar--sm fh-avatar--square"><img src="/img/avatars/ava.webp" alt="Ava"></span>
      <span class="fh-avatar fh-avatar--sm fh-avatar--square"><img src="/img/avatars/cole.webp" alt="Cole"></span>
      <span class="fh-avatar fh-avatar--sm fh-avatar--square"><img src="/img/avatars/maya.webp" alt="Maya"></span>
      <span class="fh-avatar fh-avatar--sm fh-avatar--square fh-avatars__more">+1</span>
    </div></div>
  <p class="fh-metric__source">People</p>
</article>
```

#### MET-1.7 · Expand

```html
<article class="fh-metric" data-tone="sky" data-fh="MET-1.7">
  <p class="fh-metric__label"><i class="fh-icon fh-icon--receipt" aria-hidden="true"></i>Open invoices</p>
  <p class="fh-metric__sub">5 invoices · 1 overdue</p>
  <p class="fh-metric__value">$6,940</p>
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
  <p class="fh-metric__sub">vs September</p>
  <div class="fh-metric__figure"><p class="fh-metric__value">$48,210</p><span class="fh-metric__delta" data-trend="up">12%</span></div>
</article>
```

#### MET-1.9 · Trend · down is good

```html
<article class="fh-metric" data-tone="sky" data-good="down" data-fh="MET-1.9">
  <p class="fh-metric__label"><i class="fh-icon fh-icon--trending-down" aria-hidden="true"></i>Churn</p>
  <p class="fh-metric__sub">Down is good here</p>
  <div class="fh-metric__figure"><p class="fh-metric__value">2.1%</p><span class="fh-metric__delta" data-trend="down">0.4 pt</span></div>
</article>
```

#### MET-1.10 · Sparkline

```html
<article class="fh-metric" data-tone="teal" data-fh="MET-1.10">
  <p class="fh-metric__label"><i class="fh-icon fh-icon--chart-line" aria-hidden="true"></i>Orders · 12 wk</p>
  <div class="fh-metric__figure"><p class="fh-metric__value">42</p><span class="fh-metric__delta" data-trend="up">8</span><svg class="fh-sparkline" viewBox="0 0 120 32" preserveAspectRatio="none" aria-hidden="true"><path d="M0.0 30.0 L10.9 25.3 L21.8 27.7 L32.7 20.7 L43.6 23.0 L54.5 16.0 L65.5 18.3 L76.4 11.3 L87.3 12.5 L98.2 6.7 L109.1 9.0 L120.0 2.0 L120 32 L0 32Z" fill="currentColor" opacity=".12"></path><path d="M0.0 30.0 L10.9 25.3 L21.8 27.7 L32.7 20.7 L43.6 23.0 L54.5 16.0 L65.5 18.3 L76.4 11.3 L87.3 12.5 L98.2 6.7 L109.1 9.0 L120.0 2.0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"></path></svg></div>
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

The flagship tile: a bold title and its line at the top, a wide gap, the figure at the bottom, so a row of tiles lines up at both ends. Anything below the figure (delta, sparkline, avatars, progress, source, detail) keeps its order. --tinted leads a row; --wide takes two columns; --full takes the full width, and a table in it fills the tile.

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
  <div class="fh-metric__figure"><p class="fh-metric__value">42</p><span class="fh-metric__delta" data-trend="up">8</span><svg class="fh-sparkline" viewBox="0 0 120 32" preserveAspectRatio="none" aria-hidden="true"><path d="M0.0 30.0 L10.9 25.3 L21.8 27.7 L32.7 20.7 L43.6 23.0 L54.5 16.0 L65.5 18.3 L76.4 11.3 L87.3 12.5 L98.2 6.7 L109.1 9.0 L120.0 2.0 L120 32 L0 32Z" fill="currentColor" opacity=".12"></path><path d="M0.0 30.0 L10.9 25.3 L21.8 27.7 L32.7 20.7 L43.6 23.0 L54.5 16.0 L65.5 18.3 L76.4 11.3 L87.3 12.5 L98.2 6.7 L109.1 9.0 L120.0 2.0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"></path></svg></div>
  <p class="fh-metric__source">All channels</p>
</article>
```

#### MET-2.4 · People

```html
<article class="fh-metric fh-metric--spread" data-tone="violet" data-fh="MET-2.4">
  <p class="fh-metric__label"><i class="fh-icon fh-icon--users" aria-hidden="true"></i>Team</p>
  <p class="fh-metric__sub">Who can sign in and act for the business</p>
  <div class="fh-metric__figure"><p class="fh-metric__value">4</p><div class="fh-avatars" role="group" aria-label="Team"><span class="fh-avatar fh-avatar--sm fh-avatar--square"><img src="/img/avatars/ava.webp" alt="Ava"></span><span class="fh-avatar fh-avatar--sm fh-avatar--square"><img src="/img/avatars/cole.webp" alt="Cole"></span><span class="fh-avatar fh-avatar--sm fh-avatar--square"><img src="/img/avatars/maya.webp" alt="Maya"></span><span class="fh-avatar fh-avatar--sm fh-avatar--square fh-avatars__more">+1</span></div></div>
  <p class="fh-metric__source">People</p>
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
<article class="fh-metric fh-metric--spread fh-metric--full" data-tone="sky" data-fh="MET-2.6">
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

#### MET-2.8 · Full

```html
<article class="fh-metric fh-metric--spread fh-metric--full" data-tone="sky" data-fh="MET-2.8">
  <p class="fh-metric__label"><i class="fh-icon fh-icon--receipt" aria-hidden="true"></i>Invoices this month</p>
  <p class="fh-metric__sub">Sent from all brands; amounts before card fees</p>
  <div class="fh-metric__figure"><p class="fh-metric__value">$6,940</p><span class="fh-metric__delta" data-trend="up">$1,120</span></div>
  <div class="fh-table-wrap"><table class="fh-table fh-table--reflow"><thead><tr><th>Invoice</th><th>Customer</th><th>Sent</th><th class="fh-num">Amount</th><th>Status</th></tr></thead><tbody><tr><td data-label="Invoice">INV-1042</td><td data-label="Customer">Brightline Builders</td><td data-label="Sent">Oct 30</td><td class="fh-num" data-label="Amount">$2,180.00</td><td data-label="Status"><span class="fh-chip" data-tone="amber">Due</span></td></tr><tr><td data-label="Invoice">INV-1041</td><td data-label="Customer">Harbor &amp; Pine</td><td data-label="Sent">Oct 26</td><td class="fh-num" data-label="Amount">$940.00</td><td data-label="Status"><span class="fh-chip" data-tone="lime">Paid</span></td></tr><tr><td data-label="Invoice">INV-1040</td><td data-label="Customer">Mesa Homes</td><td data-label="Sent">Oct 21</td><td class="fh-num" data-label="Amount">$3,420.00</td><td data-label="Status"><span class="fh-chip" data-tone="amber">Due</span></td></tr><tr><td data-label="Invoice">INV-1038</td><td data-label="Customer">Cobalt Roofing</td><td data-label="Sent">Oct 9</td><td class="fh-num" data-label="Amount">$400.00</td><td data-label="Status"><span class="fh-chip" data-tone="danger">Overdue</span></td></tr></tbody></table></div>
</article>
```

## THM · Brand theme file

@layer fh.themes

Classes: `fh-swatches-ramp`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/theming/brand-theme-file/.

## THS · Theme select

A native select. firehorse.js sets data-fh-theme on <html> and remembers it.

Classes: `fh-field` `fh-select`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/theming/theme-select/.

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

Classes: `fh-field` `fh-datepicker` `fh-input` `fh-field--full` `fh-cal-book` `fh-cal-book__layout` `fh-cal-book__month` `fh-cal-book__head` `fh-cal-book__label` `fh-cluster` `fh-button` `fh-button--sm` `fh-button--ghost` `fh-cal-book__week` `fh-cal-book__grid` `fh-cal-book__day` `fh-cal-book__times` `fh-cal-book__group` `fh-label` `fh-chips` `fh-cal-book__chips` `fh-chip`

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

### CAL-3 · Booking

A quiet month grid beside the chosen day's times. Open days take a faint fill; the picked day and time take the primary. Under Calendar pickers (CAL).

#### CAL-3.1 · Booking calendar

```html
<div class="fh-cal-book" data-fh="CAL-3.1">
  <div class="fh-cal-book__layout">
    <div class="fh-cal-book__month">
      <div class="fh-cal-book__head">
        <p class="fh-cal-book__label">November 2026</p>
        <div class="fh-cluster" style="gap: var(--fh-gap-bound)"><button type="button" class="fh-button fh-button--sm fh-button--ghost" aria-label="Previous month">‹</button><button type="button" class="fh-button fh-button--sm fh-button--ghost" aria-label="Next month">›</button></div>
      </div>
      <div class="fh-cal-book__week" aria-hidden="true"><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span></div>
      <div class="fh-cal-book__grid" role="group" aria-label="November 2026">
        <span></span><span></span><span></span><span></span><span></span><span></span>
        <button type="button" class="fh-cal-book__day" disabled>1</button>
        <button type="button" class="fh-cal-book__day" data-open="true">2</button>
        <button type="button" class="fh-cal-book__day" data-open="true" data-today="true" aria-pressed="true">3</button>
        <button type="button" class="fh-cal-book__day" data-open="true">4</button>
        <button type="button" class="fh-cal-book__day" data-open="true">5</button>
        <button type="button" class="fh-cal-book__day" disabled>6</button>
        <button type="button" class="fh-cal-book__day" disabled>7</button>
      </div>
    </div>
    <div class="fh-cal-book__times">
      <p class="fh-cal-book__label">Tue 3 Nov</p>
      <div class="fh-cal-book__group">
        <p class="fh-label">Morning</p>
        <div class="fh-chips fh-cal-book__chips" role="group" aria-label="Morning times">
          <button type="button" class="fh-chip" data-tone="sky" aria-pressed="true">10:00</button>
          <button type="button" class="fh-chip">11:30</button>
        </div>
      </div>
      <div class="fh-cal-book__group">
        <p class="fh-label">Afternoon</p>
        <div class="fh-chips fh-cal-book__chips" role="group" aria-label="Afternoon times">
          <button type="button" class="fh-chip">14:00</button>
          <button type="button" class="fh-chip">16:30</button>
        </div>
      </div>
    </div>
  </div>
</div>
```

## KEY · Key fields

Classes: `fh-keyfield` `fh-keyfield__head` `fh-keyfield__label` `fh-keyfield__type` `fh-keyfield__name` `fh-keyfield__value` `fh-keyfield__mask` `fh-keyfield__dots` `fh-keyfield__last` `fh-keyfield__action` `fh-icon` `fh-keyfield__editor` `fh-input` `fh-button` `fh-button--sm` `fh-keyfield__hint` `fh-select` `fh-keyset` `fh-keyset__head` `fh-keyset__name` `fh-keyset__count`

### KEY-1 · Fields

#### KEY-1.1 · Key field (copy-only)

```html
<div>
<div class="fh-keyfield" data-fh-keyfield data-kind="credential" data-state="set" data-key-id="demo-secret" data-fh="KEY-1.1">
  <div class="fh-keyfield__head"><span class="fh-keyfield__label" id="kf-1">Secret key</span><span class="fh-keyfield__type" data-kind="credential">Stripe secret</span></div>
  <code class="fh-keyfield__name">ACME__STRIPE_SECRET_KEY</code>
  <div class="fh-keyfield__value">
    <output class="fh-keyfield__mask" aria-labelledby="kf-1"><span class="fh-keyfield__dots" aria-hidden="true"></span><span class="fh-keyfield__last">4f2a</span></output>
    <button class="fh-keyfield__action" type="button" data-keyfield-copy aria-label="Copy secret key" title="Copy"><i class="fh-icon fh-icon--copy" aria-hidden="true"></i></button>
  </div>
</div>
</div>
```

#### KEY-1.2 · Key field with reveal

```html
<div>
<div class="fh-keyfield" data-fh-keyfield data-kind="identifier" data-state="set" data-revealable data-key-id="demo-publishable" data-fh="KEY-1.2">
  <div class="fh-keyfield__head"><span class="fh-keyfield__label" id="kf-2">Publishable key</span><span class="fh-keyfield__type" data-kind="identifier">Stripe publishable</span></div>
  <code class="fh-keyfield__name">ACME__STRIPE_PUBLISHABLE_KEY</code>
  <div class="fh-keyfield__value">
    <output class="fh-keyfield__mask" aria-labelledby="kf-2"><span class="fh-keyfield__dots" aria-hidden="true"></span><span class="fh-keyfield__last">9c1e</span></output>
    <button class="fh-keyfield__action" type="button" data-keyfield-reveal aria-pressed="false" aria-label="Show value" title="Show"><i class="fh-icon fh-icon--eye" aria-hidden="true"></i></button>
    <button class="fh-keyfield__action" type="button" data-keyfield-copy aria-label="Copy publishable key" title="Copy"><i class="fh-icon fh-icon--copy" aria-hidden="true"></i></button>
  </div>
</div>
</div>
```

#### KEY-1.3 · Key field, not set

```html
<div>
<div class="fh-keyfield" data-fh-keyfield data-kind="credential" data-state="empty" data-required data-fh="KEY-1.3">
  <div class="fh-keyfield__head"><span class="fh-keyfield__label" id="kf-3">Webhook signing secret</span><span class="fh-keyfield__type" data-kind="credential">Stripe webhook</span></div>
  <code class="fh-keyfield__name">ACME__STRIPE_WEBHOOK_SECRET</code>
  <div class="fh-keyfield__value">
    <output class="fh-keyfield__mask" aria-labelledby="kf-3">Not set</output>
    <button class="fh-keyfield__action" type="button" aria-label="Set webhook signing secret" title="Set"><i class="fh-icon fh-icon--pencil" aria-hidden="true"></i></button>
  </div>
  <form class="fh-keyfield__editor" hidden>
    <input class="fh-input" type="password" autocomplete="off" spellcheck="false" placeholder="whsec_…" aria-label="Webhook signing secret">
    <button class="fh-button fh-button--sm" type="submit">Save</button>
    <p class="fh-keyfield__hint">Starts with whsec_. Stored sealed; only the last four show.</p>
  </form>
</div>
</div>
```

#### KEY-1.4 · Key field, needs a type

```html
<div>
<div class="fh-keyfield" data-fh-keyfield data-state="untyped" data-fh="KEY-1.4">
  <div class="fh-keyfield__head"><span class="fh-keyfield__label" id="kf-4">Team ID</span><span class="fh-keyfield__type">Needs a type</span></div>
  <code class="fh-keyfield__name">ACME__XAI_TEAM_ID</code>
  <form class="fh-keyfield__editor">
    <select class="fh-select" aria-label="Type for ACME__XAI_TEAM_ID"><option value>Choose a type…</option><option>ID</option><option>API key</option><option>Secret</option></select>
    <button class="fh-button fh-button--sm" type="submit">Set type</button>
    <p class="fh-keyfield__hint">Nothing about its value shows until it has a type.</p>
  </form>
</div>
</div>
```

### KEY-2 · Groups

#### KEY-2.1 · Service keys

```html
<div class="site-demo">
          <div class="site-demo__head"><h3>Service keys</h3><p>One service's keys together, with how many are set. Adding a service to an application creates its fields from the service's slots.</p></div>
          <div style="padding: var(--fh-inset-card)">
<section class="fh-keyset" aria-labelledby="ks-1" data-fh="KEY-2.1">
  <header class="fh-keyset__head"><i class="fh-icon fh-icon--video" aria-hidden="true"></i><span class="fh-keyset__name" id="ks-1">Zoom</span><span class="fh-keyset__count">1 of 2 set</span></header>
  <div class="fh-keyfield" data-fh-keyfield data-kind="identifier" data-state="set" data-revealable data-key-id="demo-zoom-id">
    <div class="fh-keyfield__head"><span class="fh-keyfield__label" id="kf-5">Client ID</span><span class="fh-keyfield__type" data-kind="identifier">OAuth client ID</span></div>
    <code class="fh-keyfield__name">ACME__ZOOM_CLIENT_ID</code>
    <div class="fh-keyfield__value">
      <output class="fh-keyfield__mask" aria-labelledby="kf-5"><span class="fh-keyfield__dots" aria-hidden="true"></span><span class="fh-keyfield__last">Qx7w</span></output>
      <button class="fh-keyfield__action" type="button" data-keyfield-reveal aria-pressed="false" aria-label="Show value" title="Show"><i class="fh-icon fh-icon--eye" aria-hidden="true"></i></button>
      <button class="fh-keyfield__action" type="button" data-keyfield-copy aria-label="Copy client ID" title="Copy"><i class="fh-icon fh-icon--copy" aria-hidden="true"></i></button>
    </div>
  </div>
  <div class="fh-keyfield" data-fh-keyfield data-kind="credential" data-state="empty" data-required>
    <div class="fh-keyfield__head"><span class="fh-keyfield__label" id="kf-6">Client secret</span><span class="fh-keyfield__type" data-kind="credential">OAuth client secret</span></div>
    <code class="fh-keyfield__name">ACME__ZOOM_CLIENT_SECRET</code>
    <div class="fh-keyfield__value"><output class="fh-keyfield__mask" aria-labelledby="kf-6">Not set</output></div>
  </div>
</section>
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
| `MRK-01` | `EYE` |
| `MRK-02` | `MRK-1.1` |
| `MRK-03` | `MRK-1.2` |
| `PRP` | `KVL` |
| `PRP-1` | `KVL-1` |
| `PRP-1.1` | `KVL-1.1` |
| `PRP-1.2` | `KVL-1.2` |
| `PRP-1.3` | `KVL-1.3` |
| `TAG-01` | `TAG-1.1` |
| `TAG-02` | `TAG-2.1` |
| `TAG-03` | `TAG-2.2` |
| `TAG-04` | `TAG-2.3` |
| `TAG-05` | `TAG-2.4` |
| `TML-01` | `TML-1.1` |
| `TML-02` | `TML-1.3` |
| `TML-03` | `TML-1.4` |
| `TML-04` | `TML-1.2` |
