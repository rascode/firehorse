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

| ID | Name | Layer | Section | Groups | Demo |
|---|---|---|---|---|---|
| `NEU` | Neutral ramp | token | Foundations | — | [open](https://firehorse.rascode.dev/foundations/neutral-ramp/) |
| `TON` | Tones | token | Foundations | — | [open](https://firehorse.rascode.dev/foundations/tones/) |
| `TYP` | Type | token | Foundations | 1 Type presets (4) | [open](https://firehorse.rascode.dev/foundations/type/) |
| `SPC` | Space | token | Foundations | — | [open](https://firehorse.rascode.dev/foundations/space/) |
| `RAD` | Radius | token | Foundations | — | [open](https://firehorse.rascode.dev/foundations/radius/) |
| `ELV` | Elevation | token | Foundations | — | [open](https://firehorse.rascode.dev/foundations/elevation/) |
| `TGT` | Target floor | token | Foundations | — | [open](https://firehorse.rascode.dev/foundations/target-floor/) |
| `WRT` | Word rotator | part | Foundations | 1 Word rotator (2) | [open](https://firehorse.rascode.dev/foundations/word-rotator/) |
| `MOT` | Motion | token | Motion | 1 Entrances (10) · 2 Sequences (2) · 3 Scroll-linked (5) · 4 Choreography (4) · 5 Drift (8) | [open](https://firehorse.rascode.dev/motion/motion/) |
| `STK` | Stack | part | Layout | 1 Stack (3) | [open](https://firehorse.rascode.dev/layout/stack/) |
| `CLS` | Cluster | part | Layout | 1 Cluster (3) | [open](https://firehorse.rascode.dev/layout/cluster/) |
| `GRD` | Auto grid | part | Layout | — | [open](https://firehorse.rascode.dev/layout/auto-grid/) |
| `COL` | Columns | part | Columns | 1 Columns (3) · 2 Compositions (3) | [open](https://firehorse.rascode.dev/layout/columns/) |
| `MST` | Masthead | composite |  | 1 Header (3) · 2 Lockup (1) · 3 App bar (4) · 4 App bar layouts (4) · 5 Crumb trail (3) | [open](https://firehorse.rascode.dev/layout/masthead/) |
| `BKD` | Backdrop | composite | Backdrop | 1 Backdrop (2) · 2 Frost (1) · 3 Blueprint (1) · 4 Chooser (1) | [open](https://firehorse.rascode.dev/layout/backdrop/) |
| `FND` | Fender | section | Page design patterns | — | [open](https://firehorse.rascode.dev/patterns/fender/) |
| `CIN` | Cinch | section | Page design patterns | — | [open](https://firehorse.rascode.dev/patterns/cinch/) |
| `PNL` | Offset panel | composite | Building blocks | — | [open](https://firehorse.rascode.dev/patterns/offset-panel/) |
| `ESP` | Etched split | composite | Building blocks | — | [open](https://firehorse.rascode.dev/patterns/etched-split/) |
| `CTB` | CTA band | composite | Building blocks | — | [open](https://firehorse.rascode.dev/patterns/cta-band/) |
| `BTN` | Button | part | Actions | 1 Solid (7) · 2 Line (2) · 3 States (2) · 4 Round icon (2) · 5 Etched pill (1) | [open](https://firehorse.rascode.dev/components/actions/button/) |
| `ACT` | Action & link | part | Actions | 1 Action (4) · 2 Link (2) · 3 Cue (4) | [open](https://firehorse.rascode.dev/components/actions/action-and-link/) |
| `MRK` | Markers | part | Actions | 1 Markers (2) | [open](https://firehorse.rascode.dev/components/actions/markers/) |
| `EYE` | Eyebrow pill | part | Actions | 1 Lines (7) · 2 Shapes (4) · 3 Fills (4) · 4 Edges (2) · 5 Parts (4) · 6 Sentences (3) | [open](https://firehorse.rascode.dev/components/actions/eyebrow-pill/) |
| `CHP` | Chips | part | Actions | 1 Kinds (4) · 2 Parts (3) · 3 Chip cards (5) | [open](https://firehorse.rascode.dev/components/actions/chips/) |
| `CUB` | Cubes | part | Actions | 1 Cubes (6) · 2 Cube cards (4) | [open](https://firehorse.rascode.dev/components/actions/cubes/) |
| `LGS` | Logo strip | composite | Content | 1 Logo strip (1) | [open](https://firehorse.rascode.dev/components/content/logo-strip/) |
| `CRD` | Card in a ruled grid | composite | Content | — | [open](https://firehorse.rascode.dev/components/content/card-in-a-ruled-grid/) |
| `TIL` | Tiles | composite | Content | 1 Index tiles (2) · 2 Launch tiles (3) · 3 Option tiles (4) | [open](https://firehorse.rascode.dev/components/content/tiles/) |
| `STA` | Stats strip | composite | Content | — | [open](https://firehorse.rascode.dev/components/content/stats-strip/) |
| `CKL` | Checklist | composite | Content | — | [open](https://firehorse.rascode.dev/components/content/checklist/) |
| `STP` | Steps | part | Content | 1 Steps (1) · 2 Form steps (1) | [open](https://firehorse.rascode.dev/components/content/steps/) |
| `CAR` | Carousel | composite | Content | — | [open](https://firehorse.rascode.dev/components/content/carousel/) |
| `LST` | List & timeline | composite | Content | 1 List row (4) | [open](https://firehorse.rascode.dev/components/content/list-and-timeline/) |
| `FOL` | Text fold | part | Content | 1 Text fold (3) | [open](https://firehorse.rascode.dev/components/content/text-fold/) |
| `IMS` | Image stack | composite | Content | 1 Image stack (2) · 2 Viewer (1) | [open](https://firehorse.rascode.dev/components/content/image-stack/) |
| `DET` | Code and divider | part | Content | — | [open](https://firehorse.rascode.dev/components/content/code-and-divider/) |
| `TIR` | Pricing tiers | composite | Content | — | [open](https://firehorse.rascode.dev/components/content/pricing-tiers/) |
| `FEA` | Features | composite | Content | — | [open](https://firehorse.rascode.dev/components/content/features/) |
| `TST` | Testimonial | composite | Content | — | [open](https://firehorse.rascode.dev/components/content/testimonial/) |
| `TAB` | Tabs | composite | Bars & tabs | — | [open](https://firehorse.rascode.dev/components/navigation/tabs/) |
| `NAV` | Navigation | composite | Bars & tabs | 1 Nav links (4) · 2 Search (1) · 3 Stepper (1) · 4 Pagination (1) · 5 Sidenav (2) | [open](https://firehorse.rascode.dev/components/navigation/navigation/) |
| `BRG` | Hamburger | part | Drawers & menus | — | [open](https://firehorse.rascode.dev/components/navigation/hamburger/) |
| `MEG` | Mega panel | composite | Drawers & menus | 1 Default (1) · 2 Headed (1) · 3 Tile panel (1) | [open](https://firehorse.rascode.dev/components/navigation/mega-panel/) |
| `DRW` | Drawer | composite | Drawers & menus | 1 Drawer (1) | [open](https://firehorse.rascode.dev/components/navigation/drawer/) |
| `DRP` | Dropdown menu | composite | Drawers & menus | 1 Default (2) · 2 Tile menu (1) · 3 Context menu (1) | [open](https://firehorse.rascode.dev/components/navigation/dropdown-menu/) |
| `ACC` | Accordion | composite | Overlays & feedback | — | [open](https://firehorse.rascode.dev/components/overlays/accordion/) |
| `DLG` | Dialog, menu, toast | composite | Overlays & feedback | — | [open](https://firehorse.rascode.dev/components/overlays/dialog-menu-toast/) |
| `FBK` | Feedback | part | Overlays & feedback | 1 Feedback (1) | [open](https://firehorse.rascode.dev/components/overlays/feedback/) |
| `EMP` | Empty state & banner | composite | Overlays & feedback | 1 Banner (2) · 2 Empty (1) | [open](https://firehorse.rascode.dev/components/overlays/empty-state-and-banner/) |
| `AVT` | Avatars | part | Avatars | 1 Shapes (5) · 2 Sizes & presence · 3 Rings & halos · 4 Generated · 5 Groups · 6 Kinds (2) | [open](https://firehorse.rascode.dev/components/avatars/avatars/) |
| `AUT` | Sign in & sign up | composite | Forms | 1 Layouts (4) · 2 Method (1) | [open](https://firehorse.rascode.dev/forms/sign-in-and-sign-up/) |
| `FLD` | Fields | part | Fields & choices | 1 Fields (1) · 2 Dictation (2) · 3 Quiet (1) · 4 Password reveal (1) | [open](https://firehorse.rascode.dev/forms/fields/) |
| `SEG` | Segment switch | part | Fields & choices | 1 Switch (2) · 2 Toggle (3) | [open](https://firehorse.rascode.dev/forms/segment-switch/) |
| `CHO` | Choices | part | Fields & choices | 1 Choice row (2) | [open](https://firehorse.rascode.dev/forms/choices/) |
| `UPL` | Upload, range, tags, sheet | part | Fields & choices | — | [open](https://firehorse.rascode.dev/forms/upload-range-tags-sheet/) |
| `TAG` | Tag field | part | Fields & choices | 1 Field (1) · 2 Inline (4) | [open](https://firehorse.rascode.dev/forms/tag-field/) |
| `DTB` | Datatable | composite | Data | 1 Datatable (1) | [open](https://firehorse.rascode.dev/data/datatable/) |
| `TBL` | Table | composite | Table | 1 Table (1) · 2 Caption head (1) · 3 Record table (4) · 4 Row spacing (1) | [open](https://firehorse.rascode.dev/data/table/) |
| `MET` | Metric tiles | composite | Metrics | 1 Metric tile (11) · 2 Spread tiles (8) · 3 Icon looks (4) · 4 Parts (2) | [open](https://firehorse.rascode.dev/data/metric-tiles/) |
| `INV` | Invoice | composite | Invoice | 1 Sheet (3) · 2 Pay (1) | [open](https://firehorse.rascode.dev/commerce/invoice/) |
| `THM` | Brand theme file | token | Theming | — | [open](https://firehorse.rascode.dev/theming/brand-theme-file/) |
| `THS` | Theme select | part | Themes | 1 Select (1) · 2 Colour menu (1) | [open](https://firehorse.rascode.dev/theming/theme-select/) |
| `TML` | Timelines | composite | Timelines | 1 Timelines (4) · 2 Activity log (1) | [open](https://firehorse.rascode.dev/pro/project-management/#TML) |
| `CAL` | Calendar pickers | composite | Calendar | 1 Pickers (3) · 2 Inline (1) · 3 Booking (1) | [open](https://firehorse.rascode.dev/pro/project-management/#CAL) |
| `KEY` | Key fields | part | Key fields | 1 Fields (4) · 2 Groups (1) | [open](https://firehorse.rascode.dev/pro/keys/#KEY) |

## NEU · Neutral ramp

--fh-gray-*

Layer: token.

Classes: `fh-swatches-ramp`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/foundations/neutral-ramp/.

## TON · Tones

Category color. Set data-tone once; dots, marks, meta and links inside follow. Ratios are against the current canvas.

Layer: token.

Classes: `fh-tone-swatches`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/foundations/tones/.

## TYP · Type

Inter, Geist Mono and Caveat in the Rascode theme; system stacks in core. Fluid roles scale with their container.

Layer: token.

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

Layer: token.

Classes: `fh-space-scale`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/foundations/space/.

## RAD · Radius

--fh-radius-*

Layer: token.

Classes: `fh-radius-scale`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/foundations/radius/.

## ELV · Elevation

Drop shadows are a theme setting, data-fh-shadow (or "shadow" in a theme's config): none, hint (the default: no shadow on panels, bars, cards and rows, a barely visible one under menus and overlays), soft or full. A style that asks for a shadow keeps it, like the convex button (data-fh-button="convex"): bends out at rest, the shadow inverts on hover, it sinks on press.

Layer: token.

Classes: `fh-cluster` `fh-button`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/foundations/elevation/.

## TGT · Target floor

The smallest hit area on a fine pointer is --fh-target-floor (1rem), in both directions. A control drawn smaller keeps its size and grows the hit area around it. Coarse pointers keep --fh-tap-target. Each family is at its smallest size.

Layer: token.

Classes: `fh-target-floor` `fh-stack` `fh-stack--lg` `fh-check` `fh-cluster` `fh-stack--2xs` `fh-label` `fh-button` `fh-button--sm` `fh-button--icon` `fh-icon` `fh-button--disc` `fh-chip` `fh-chip--sm` `fh-chip__remove` `fh-switch` `fh-segmented` `fh-segmented--sm` `fh-sr-only` `fh-segment` `fh-stack--sm` `fh-tabs` `fh-tabs--sub` `fh-menu` `fh-entity` `fh-sidenav` `fh-sidebar__item` `fh-masthead` `fh-crumbs` `fh-crumbs__list` `fh-crumb` `fh-crumb--area` `fh-crumb__button` `fh-crumb__name` `fh-account-menu` `fh-account-menu--static` `fh-account-menu__stage` `fh-account-menu__panel` `fh-account-row` `fh-cube` `fh-cube--icon` `fh-account-row__label` `fh-account-row__value` `fh-account-row__go`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/foundations/target-floor/.

## WRT · Word rotator

The rolling word, without the usual wiring: no library, no word array in a script, no timers. Write the words in the markup and they take turns; change them by editing the HTML. --walk gives each word a step of the root colour's own family, held to a lightness that reads on each scheme. In a headline, or inside a paragraph.

Layer: part.

Classes: `fh-display` `fh-rotator` `fh-rotator--walk` `fh-lede`

### WRT-1 · Word rotator

#### WRT-1.1 · Headline

```html
<p class="fh-display">The design system that <span class="fh-rotator fh-rotator--walk" data-fh="WRT-1.1"><span>scales</span><span aria-hidden="true">adapts</span><span aria-hidden="true">fits</span><span aria-hidden="true">flexes</span><span aria-hidden="true">grows</span><span aria-hidden="true">adjusts</span><span aria-hidden="true">bends</span><span aria-hidden="true">shifts</span><span aria-hidden="true">responds</span></span>.</p>
```

#### WRT-1.2 · In a paragraph

```html
<p class="fh-lede">Firehorse is the design system that <span class="fh-rotator fh-rotator--walk" data-fh="WRT-1.2"><span>scales</span><span aria-hidden="true">adapts</span><span aria-hidden="true">fits</span><span aria-hidden="true">grows</span><span aria-hidden="true">responds</span></span> with your product: every component reads the box it sits in, so nothing needs a breakpoint.</p>
```

## MOT · Motion

Layer: token.

Classes: `fh-motion-tile` `fh-motion-tile--line` `fh-motion-tile--art` `fh-motion-tile--clip` `fh-motion-hero` `fh-motion-hero__mark` `fh-motion-hero__line` `fh-motion-hero__top` `fh-motion-hero__turn` `fh-motion-hero__chips` `fh-motion-art` `fh-recede` `fh-motion-art--b` `fh-scroll-fade` `fh-motion-art--c` `fh-reveal` `fh-motion-art--d` `fh-parallax` `fh-motion-note` `fh-scroll-progress` `fh-motion-card` `fh-button` `fh-button--sm` `fh-motion-code` `fh-motion-pro`

### MOT-1 · Entrances

Put data-fh-enter on an element and it enters once the page is ready. Step n starts at n × --fh-intro-beat (150ms); --fh-at sets an exact time. Press Replay.

#### MOT-1.1 · Rise

```html
<div class="fh-motion-tile" data-fh-enter="rise" data-fh-step="1" data-fh="MOT-1.1">rise</div>
```

#### MOT-1.2 · Drop

```html
<div class="fh-motion-tile" data-fh-enter="drop" data-fh-step="2" data-fh="MOT-1.2">drop</div>
```

#### MOT-1.3 · Fade

```html
<div class="fh-motion-tile" data-fh-enter="fade" data-fh-step="3" data-fh="MOT-1.3">fade</div>
```

#### MOT-1.4 · Scale

```html
<div class="fh-motion-tile" data-fh-enter="scale" data-fh-step="4" data-fh="MOT-1.4">scale</div>
```

#### MOT-1.5 · Blur

```html
<div class="fh-motion-tile" data-fh-enter="blur" data-fh-step="5" data-fh="MOT-1.5">blur</div>
```

#### MOT-1.6 · Fold

```html
<div class="fh-motion-tile" data-fh-enter="fold" data-fh-step="6" data-fh="MOT-1.6">fold</div>
```

#### MOT-1.7 · Draw

```html
<div class="fh-motion-tile fh-motion-tile--line" data-fh="MOT-1.7">draw<span data-fh-enter="draw" data-fh-step="7"></span></div>
```

#### MOT-1.8 · Wipe

```html
<div class="fh-motion-tile" data-fh-enter="wipe" data-fh-step="8" data-fh="MOT-1.8">wipe</div>
```

#### MOT-1.9 · Unveil

```html
<div class="fh-motion-tile fh-motion-tile--art" data-fh-enter="unveil" data-fh-step="9" data-fh="MOT-1.9">unveil</div>
```

#### MOT-1.10 · Lift

```html
<div class="fh-motion-tile fh-motion-tile--clip" data-fh="MOT-1.10"><span data-fh-enter="lift" data-fh-step="10">lift</span></div>
```

### MOT-2 · Sequences

An intro's order lives on its section. data-fh-intro marks the owner; data-fh-enter-children staggers a list by --fh-stagger (60ms). The homepage hero is written exactly this way.

#### MOT-2.1 · Intro

```html
<div class="fh-motion-hero" data-fh-intro data-fh="MOT-2.1">
  <p class="fh-motion-hero__mark" data-fh-enter="fold" data-fh-step="2"><span>_</span>firehorse</p>
  <span class="fh-motion-hero__line" data-fh-enter="draw" data-fh-step="4"></span>
  <p class="fh-motion-hero__top" data-fh-enter="blur" data-fh-step="6">The design system</p>
  <p class="fh-motion-hero__turn" data-fh-enter="drop" data-fh-step="7">that moves the same everywhere.</p>
  <ul class="fh-motion-hero__chips" data-fh-enter-children data-fh-step="9">
    <li>Tokens</li><li>Entrances</li><li>Sequences</li><li>Scroll</li><li>Choreography</li><li>Drift</li>
  </ul>
</div>
```

#### MOT-2.2 · Staggered list

```html
<ul class="fh-motion-hero__chips" data-fh-enter-children data-fh-step="9">
  <li>Tokens</li><li>Entrances</li><li>Sequences</li><li>Scroll</li><li>Choreography</li><li>Drift</li>
</ul>
```

### MOT-3 · Scroll-linked

CSS only, on the page's scroll timeline: it tracks the scroll exactly and costs no script per frame. Scroll the page and watch these.

#### MOT-3.1 · Recede

```html
<div class="fh-motion-art fh-recede" style="--fh-recede-range: 60vh" data-fh="MOT-3.1"></div>
```

#### MOT-3.2 · Scroll fade

```html
<div class="fh-motion-art fh-motion-art--b fh-scroll-fade" style="--fh-recede-range: 60vh" data-fh="MOT-3.2"></div>
```

#### MOT-3.3 · Reveal

```html
<div class="fh-motion-art fh-motion-art--c fh-reveal" data-fh="MOT-3.3"></div>
```

#### MOT-3.4 · Parallax

```html
<div class="fh-motion-art fh-motion-art--d fh-parallax" style="--fh-depth: 0.3" data-fh="MOT-3.4"></div>
```

#### MOT-3.5 · Progress

```html
<p class="fh-motion-note" data-fh="MOT-3.5">Page progress: <code>&lt;div class="fh-scroll-progress"&gt;&lt;/div&gt;</code> draws the line at the top of this page.</p>
```

### MOT-4 · Choreography

Script measures once and on resize; the motion itself still runs on the scroll timeline. The circle reveal, glide and lock are free in the enhancer (firehorse.js); dock beside is Firehorse Pro. See them together on the homepage concept.

#### MOT-4.1 · Circle reveal

```html
<div class="fh-motion-card" data-fh="MOT-4.1">
  <b>Circle reveal</b><small>Free · <code>Firehorse.reveal(change, from)</code></small>
  <button type="button" class="fh-button fh-button--sm" data-motion-reveal data-fh="BTN">Change the tone</button>
</div>
```

#### MOT-4.2 · Glide

```html
<div class="fh-motion-card" data-fh="MOT-4.2">
  <b>Glide</b><small>Free · <code>data-fh-glide="center"</code></small>
  <code class="fh-motion-code" data-fh="MOT">&lt;nav&gt;&lt;div data-fh-glide="center"&gt;…links…&lt;/div&gt;&lt;/nav&gt;</code>
</div>
```

#### MOT-4.3 · Lock

```html
<div class="fh-motion-card" data-fh="MOT-4.3">
  <b>Lock</b><small>Free · <code>data-fh-lock</code></small>
  <code class="fh-motion-code" data-fh="MOT">&lt;h1 data-fh-lock="clone" data-fh-lock-to=".nav a" data-fh-lock-scale="0.78" data-fh-lock-href="#top"&gt;</code>
</div>
```

#### MOT-4.4 · Dock beside

```html
<div class="fh-motion-card" data-fh="MOT-4.4">
  <b>Dock beside <span class="fh-motion-pro" data-fh="MOT-5">Pro</span></b><small><code>data-fh-dock-beside="#cta"</code></small>
  <code class="fh-motion-code" data-fh="MOT">&lt;div class="tools" data-fh-dock-beside=".cta"&gt;</code>
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
<button type="button" data-drift="dapple" aria-pressed="false">Dapple <span class="fh-motion-pro" data-fh="MOT-5.6">Pro</span></button>
```

#### MOT-5.7 · Tide lines · Pro

```html
<button type="button" data-drift="tides" aria-pressed="false">Tide lines <span class="fh-motion-pro" data-fh="MOT-5.7">Pro</span></button>
```

#### MOT-5.8 · Shutters · Pro

```html
<button type="button" data-drift="shutters" aria-pressed="false">Shutters <span class="fh-motion-pro" data-fh="MOT-5.8">Pro</span></button>
```

## STK · Stack

.fh-stack · --2xs … --2xl

Layer: part (transparent).

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

Layer: part (transparent).

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

Layer: part (transparent).

Classes: `fh-grid` `fh-card` `fh-card--solid`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/layout/auto-grid/.

## COL · Columns

The grid itself. data-cols="16" for the finer one; a child .fh-cols[data-subgrid] keeps nested content on the parent's lines.

Layer: part (transparent).

Classes: `fh-cols` `fh-card` `fh-card--solid` `fh-stack` `fh-eyebrow-pill` `fh-dot` `fh-heading` `fh-body`

### COL-1 · Columns

#### COL-1.1 · 12 columns

```html
<div class="fh-cols" data-fh="COL-1.1">
  <div class="fh-card fh-card--solid" data-span="12" data-fh="CRD">12</div>
  <div class="fh-card fh-card--solid" data-span="8" data-fh="CRD">8</div>
  <div class="fh-card fh-card--solid" data-span="4" data-fh="CRD">4</div>
  <div class="fh-card fh-card--solid" data-span="3" data-fh="CRD">3</div>
  <div class="fh-card fh-card--solid" data-span="6" data-fh="CRD">6</div>
  <div class="fh-card fh-card--solid" data-span="3" data-fh="CRD">3</div>
</div>
```

#### COL-1.2 · 16 columns

```html
<div class="fh-cols" data-cols="16" data-fh="COL-1.2">
  <div class="fh-card fh-card--solid" data-span="10" data-fh="CRD">10 of 16</div>
  <div class="fh-card fh-card--solid" data-span="6" data-fh="CRD">6</div>
  <div class="fh-card fh-card--solid" data-span="5" data-start="3" data-fh="CRD">5, from 3</div>
  <div class="fh-card fh-card--solid" data-span="7" data-start="10" data-fh="CRD">7, from 10</div>
</div>
```

#### COL-1.3 · Subgrid

```html
<div class="fh-cols" data-fh="COL-1.3">
  <div class="fh-cols" data-subgrid data-span="8" data-start="3" data-fh="COL">
    <div class="fh-card fh-card--solid" data-span="5" data-fh="CRD">Nested 5</div>
    <div class="fh-card fh-card--solid" data-span="3" data-fh="CRD">Nested 3</div>
  </div>
</div>
```

### COL-2 · Compositions

Three placements to start from. Offset: copy held to the left, the image breaking right. Asymmetric: a 5 / 7 split with the image dropped. Broken: two pieces sharing rows, so one overlaps the other.

#### COL-2.1 · Offset

```html
<div class="fh-cols" data-fh="COL-2.1">
  <div class="fh-stack" data-span="5" data-start="2" data-span-md="8">
    <p class="fh-eyebrow-pill" data-tone="violet" data-fh="EYE-1.1"><span class="fh-dot"></span>Offset</p>
    <h3 class="fh-heading">Copy from column 2</h3>
    <p class="fh-body">The text starts one column in; the picture takes the right half and runs to the edge of the grid.</p>
  </div>
  <div class="fh-card fh-card--solid" data-span="6" data-start="7" data-row="1" style="min-block-size: 12rem" data-fh="CRD">Image · 7–12</div>
</div>
```

#### COL-2.2 · Asymmetric

```html
<div class="fh-cols" data-fh="COL-2.2">
  <div class="fh-card fh-card--solid" data-span="5" style="min-block-size: 10rem" data-fh="CRD">5</div>
  <div class="fh-card fh-card--solid" data-span="7" data-align="end" style="min-block-size: 16rem" data-fh="CRD">7 · dropped to the bottom</div>
</div>
```

#### COL-2.3 · Broken

```html
<div class="fh-cols" data-fh="COL-2.3">
  <div class="fh-card fh-card--solid" data-span="7" data-start="1" data-row="1" data-row-span="2" style="min-block-size: 16rem" data-fh="CRD">Image · 1–7, two rows</div>
  <div class="fh-card" data-span="6" data-start="6" data-row="2" data-layer="over" data-fh="CRD">Card · 6–11, over the image</div>
</div>
```

## MST · Masthead

The head of a page or app. The header is a glass panel with a large caption: number left in the tone, title right, an etched rule under both. --bar is the one-line top bar, the client's round logo first (__mark); --split puts the caption and the tools in two pills with the page between them. The lockup is a hero's sign-off: the wordmark, an etched line from it to the edge, and the headline split by the line, its rolling word in the root colour's family. --app is the app bar on the sidebar's frost panel: a lead with the sidebar cube, summary chips with cards, and tools. Three layouts of it share that panel and content: centred (as is), --app-inline (a one-line readout after the lead, etched rules between items) and --app-tiles (each item a sidebar row tile with its cube, the tools past an etched rule). --app-crumbs puts a crumb trail where the lead was, with no summary: an area crumb that opens the areas and one record crumb (its cube and name) that opens a switcher; two levels at most, a soft progress arrow between them, the drop-down chevron on hover only. Shown over a picture so the frost reads.

Layer: composite. Slots: `mark` `eyebrow` `media` `title` `body` `items` `label` `meta` `link` `chips` `value` `summary` `actions` `name`.

Classes: `fh-masthead` `fh-masthead--bar` `fh-avatar` `fh-avatar--circle` `fh-masthead__mark` `fh-masthead__caption` `fh-masthead__index` `fh-masthead__title` `fh-masthead__foot` `fh-masthead__meta` `fh-masthead__tools` `fh-segmented` `fh-segmented--sm` `fh-sr-only` `fh-chip` `fh-button` `fh-button--sm` `fh-masthead--split` `fh-avatar--sm` `fh-masthead--lockup` `fh-eyebrow-pill` `fh-masthead__above` `fh-dot` `fh-dot--live` `fh-eyebrow-pill__seg` `fh-masthead__wordmark` `fh-masthead__bar` `fh-masthead__etch` `fh-masthead__headline` `fh-masthead__top` `fh-masthead__turn` `fh-rotator` `fh-rotator--walk` `fh-masthead__below` `fh-lede` `fh-masthead--app` `fh-masthead__lead` `fh-sidebar__cube` `fh-icon` `fh-masthead__crumb` `fh-masthead__summary` `fh-stack` `fh-stack--lg` `fh-cluster` `fh-sidebar` `fh-sidebar__head` `fh-app__brand` `fh-sidebar__toggle` `fh-summary-chip` `fh-summary-chip__label` `fh-summary-chip__value` `fh-num` `fh-summary-chip__short` `fh-summary-chip__bar` `fh-working` `fh-working__mark` `fh-working__what` `fh-button--disc` `fh-profile` `fh-profile--compact` `fh-menu` `fh-kv` `fh-kv--single` `fh-menu__foot` `fh-link` `fh-profile-menu` `fh-profile-menu__card` `fh-profile-menu__id` `fh-backdrop` `fh-stack--md` `fh-small` `fh-muted` `fh-stack--sm` `fh-masthead--app-inline` `fh-masthead--app-tiles` `fh-masthead--app-crumbs` `fh-crumbs` `fh-crumbs__list` `fh-crumb` `fh-crumb--area` `fh-crumb__button` `fh-crumb__name` `fh-crumb__caret` `fh-menu--rich` `fh-crumb-menu` `fh-crumb-menu__search` `fh-crumb-menu__list` `fh-menu__label` `fh-crumb-menu__row` `fh-crumb__mark` `fh-crumb-menu__status` `fh-crumb--record` `fh-crumb__sep` `fh-crumb__initial` `fh-crumb__meta` `fh-crumbs__sheet`

### MST-1 · Header

#### MST-1.1 · Bar

```html
<header class="fh-masthead fh-masthead--bar" data-tone="amber" data-fh="MST-1.1">
  <span class="fh-avatar fh-avatar--circle fh-masthead__mark" role="img" aria-label="Acme Supply" data-fh="AVT" data-fh-slot="mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 19 12 5l7 14"></path><path d="M8.5 13h7"></path><circle cx="12" cy="5" r="1.3" fill="currentColor"></circle></svg></span>
  <p class="fh-masthead__caption"><span class="fh-masthead__index">07</span><span class="fh-masthead__title" data-fh-slot="title">Business</span></p>
  <div class="fh-masthead__foot">
    <p class="fh-masthead__meta" data-fh-slot="meta">7 businesses</p>
    <div class="fh-masthead__tools">
      <fieldset class="fh-segmented fh-segmented--sm" data-fh="TBL-4.1" data-fh-slot="body"><legend class="fh-sr-only">Row spacing</legend><label><input type="radio" name="mst-rows" value="sm" data-fh-rows-select> S</label><label><input type="radio" name="mst-rows" value="md" data-fh-rows-select checked> M</label><label><input type="radio" name="mst-rows" value="lg" data-fh-rows-select> L</label><label><input type="radio" name="mst-rows" value="xl" data-fh-rows-select> XL</label></fieldset>
    </div>
  </div>
</header>
```

#### MST-1.2 · Page

```html
<header class="fh-masthead" data-tone="amber" data-fh="MST-1.2">
  <p class="fh-masthead__caption"><span class="fh-masthead__index">07</span><span class="fh-masthead__title" data-fh-slot="title">Business</span></p>
  <div class="fh-masthead__foot">
    <p class="fh-masthead__meta" data-fh-slot="meta">7 businesses · 5 owned · 2 client</p>
    <div class="fh-masthead__tools"><span class="fh-chip" data-tone="lime" data-fh="CHP" data-fh-slot="chips">All synced</span><a class="fh-button fh-button--sm" href="#l-masthead" data-fh="BTN" data-fh-slot="actions">New business</a></div>
  </div>
</header>
```

#### MST-1.3 · Split

```html
<header class="fh-masthead fh-masthead--bar fh-masthead--split" data-tone="sky" data-fh="MST-1.3">
  <p class="fh-masthead__caption"><span class="fh-masthead__index">05</span><span class="fh-masthead__title" data-fh-slot="title">Today is <small>Nov-05-26</small></span></p>
  <div class="fh-masthead__tools">
    <span class="fh-chip" data-tone="lime" data-fh="CHP" data-fh-slot="chips">Local</span>
    <span class="fh-avatar fh-avatar--circle fh-avatar--sm" data-tone="sky" data-fh="AVT" data-fh-slot="media">HJ</span>
  </div>
</header>
```

### MST-2 · Lockup

#### MST-2.1 · Lockup

```html
<header class="fh-masthead fh-masthead--lockup" data-fh="MST-2.1">
  <p class="fh-eyebrow-pill fh-masthead__above" data-tone="accent" data-fh="EYE-5.2" data-fh-slot="eyebrow"><span class="fh-dot fh-dot--live" aria-hidden="true"></span><span class="fh-eyebrow-pill__seg">Introducing</span><span class="fh-eyebrow-pill__seg"><strong>Firehorse v1.1</strong></span></p>
  <p class="fh-masthead__wordmark" data-fh-slot="media"><span class="fh-masthead__bar">_</span>firehorse</p>
  <span class="fh-masthead__etch" aria-hidden="true"></span>
  <p class="fh-masthead__headline"><span class="fh-masthead__top">The design system</span> <span class="fh-masthead__turn">that <em><span class="fh-rotator fh-rotator--walk" data-fh="WRT-1" data-fh-slot="title"><span>scales</span><span aria-hidden="true">adapts</span><span aria-hidden="true">grows</span><span aria-hidden="true">responds</span></span>.</em></span></p>
  <div class="fh-masthead__below"><p class="fh-lede">Built for modern workflows</p></div>
</header>
```

### MST-3 · App bar

#### MST-3.1 · Lead

```html
<header class="fh-masthead fh-masthead--app" data-fh="MST-3.1">
  <div class="fh-masthead__lead" data-tone="sky"><span class="fh-sidebar__cube" data-tone="sky" data-fh-slot="media"><i class="fh-icon fh-icon--sun" aria-hidden="true"></i></span><span class="fh-masthead__title" data-fh-slot="title">Today</span><span class="fh-masthead__crumb" data-fh-slot="link">› Morning plan</span></div>
  <div class="fh-masthead__summary" aria-hidden="true" data-fh-slot="summary"></div>
  <div class="fh-masthead__tools" aria-hidden="true"></div>
</header>
```

#### MST-3.2 · Summary

```html
<div class="fh-stack fh-stack--lg">
  <div class="fh-cluster" style="align-items: start; gap: var(--fh-gap-grouped); flex-wrap: wrap">
    <nav class="fh-sidebar" aria-label="Helm" style="inline-size: 12rem; min-block-size: 0; grid-template-rows: auto; margin: 0">
      <div class="fh-sidebar__head">
        <a class="fh-app__brand" href="#l-masthead"><i class="fh-icon fh-icon--panels-top-left" aria-hidden="true"></i><span>Helm</span></a>
        <button class="fh-sidebar__toggle" type="button" aria-expanded="true" aria-label="Collapse sidebar"><i class="fh-icon fh-icon--panel-left" aria-hidden="true"></i></button>
      </div>
    </nav>
    <header class="fh-masthead fh-masthead--app" style="flex: 1; min-inline-size: 16rem" data-fh="MST-3.2">
      <div class="fh-masthead__lead" data-tone="sky"><span class="fh-sidebar__cube" data-tone="sky" data-fh-slot="media"><i class="fh-icon fh-icon--sun" aria-hidden="true"></i></span><span class="fh-masthead__title" data-fh-slot="title">Today</span></div>
      <div class="fh-masthead__summary">
        <button class="fh-summary-chip" type="button" popovertarget="mst-32-dt" aria-label="Saturday 14 November, 11:15 PM Eastern." style="anchor-name: --mst-32-dt" data-fh="MST-3.4" data-fh-slot="items"><span class="fh-summary-chip__label" data-fh-slot="label">Now</span><span class="fh-summary-chip__value" data-fh-slot="value"><span class="fh-num">Sat 14 Nov · 11:15 PM EST</span></span><span class="fh-summary-chip__short">Sat 14</span></button>
        <button class="fh-summary-chip" type="button" data-tone="violet" popovertarget="mst-32-cy" aria-label="Cycle 5, Year 4, Chapter 3." style="anchor-name: --mst-32-cy" data-fh="MST-3.4" data-fh-slot="items"><span class="fh-summary-chip__label" data-fh-slot="label">Cycle</span><span class="fh-summary-chip__value" data-fh-slot="value"><span class="fh-num">Cycle 5 · Year 4 · Ch 3</span></span><span class="fh-summary-chip__short">C5 · Y4</span><span class="fh-summary-chip__bar" style="--fh-summary-value: 87%" aria-hidden="true"></span></button>
      </div>
      <div class="fh-masthead__tools"><a class="fh-working" data-tone="violet" href="#l-masthead" data-fh="WRK-1.1" data-fh-slot="body"><i class="fh-icon fh-icon--sparkles fh-working__mark" aria-hidden="true" data-fh-slot="mark"></i><b>Claude</b><span class="fh-working__what" data-fh-slot="title">#636 · App bar</span></a><button class="fh-button fh-button--disc" type="button" aria-label="Search" data-fh="BTN-4" data-fh-slot="actions"><i class="fh-icon fh-icon--search" aria-hidden="true"></i></button><button class="fh-profile fh-profile--compact" type="button" popovertarget="mst-32-prf" aria-label="Justin Rascoe" style="anchor-name: --mst-32-prf" data-fh="PRF-1.2" data-fh-slot="body"><span class="fh-avatar fh-avatar--circle" data-tone="sky" data-fh="AVT" data-fh-slot="media">JR</span></button></div>
    </header>
  </div>
  <div id="mst-32-dt" popover class="fh-menu" aria-label="Today" style="position-anchor: --mst-32-dt" data-fh="MST-3.2"><dl class="fh-kv fh-kv--single" data-fh="TBL" data-fh-slot="body"><div><dt>Day</dt><dd>318</dd></div><div><dt>Days left in 2026</dt><dd>47</dd></div></dl></div>
  <div id="mst-32-cy" popover class="fh-menu" aria-label="Cycle" style="position-anchor: --mst-32-cy" data-fh="MST-3.2"><dl class="fh-kv fh-kv--single" data-fh="TBL" data-fh-slot="body"><div><dt>House</dt><dd>4</dd></div><div><dt>Vibration</dt><dd>8</dd></div><div><dt>Age number</dt><dd>4</dd></div><div><dt>Chapter 3</dt><dd>Saturn</dd></div><div><dt>Days left</dt><dd>112</dd></div></dl><div class="fh-menu__foot"><a class="fh-link" href="#l-masthead" data-fh="ACT-2.1" data-fh-slot="link">Open year</a><a class="fh-link" href="#l-masthead" data-fh="ACT-2.1" data-fh-slot="link">Open cycle</a></div></div>
  <div id="mst-32-prf" popover class="fh-menu fh-profile-menu" role="menu" aria-label="Account" style="position-anchor: --mst-32-prf" data-fh="MST-3.2"><div class="fh-profile-menu__card" data-tone="sky"><span class="fh-avatar fh-avatar--circle" data-tone="sky" data-fh="AVT" data-fh-slot="media">JR</span><span class="fh-profile-menu__id"><b>Justin Rascoe</b><small>justin@rascode.dev</small></span></div></div>
  <div style="position: relative; overflow: hidden; contain: paint; padding: var(--fh-space-6); border-radius: var(--fh-radius-lg)">
    <div class="fh-backdrop" data-fh-backdrop="blueprint" aria-hidden="true" style="position: absolute; inset: 0" data-fh="MST-3.2"></div>
    <header class="fh-masthead fh-masthead--app" style="position: relative; z-index: 1" data-fh="MST-3.2">
      <div class="fh-masthead__lead" data-tone="sky"><span class="fh-sidebar__cube" data-tone="sky" data-fh-slot="media"><i class="fh-icon fh-icon--sun" aria-hidden="true"></i></span><span class="fh-masthead__title" data-fh-slot="title">Today</span></div>
      <div class="fh-masthead__summary">
        <button class="fh-summary-chip" type="button" popovertarget="mst-32b-dt" aria-label="Saturday 14 November, 11:15 PM Eastern." style="anchor-name: --mst-32b-dt" data-fh="MST-3.4" data-fh-slot="items"><span class="fh-summary-chip__label" data-fh-slot="label">Now</span><span class="fh-summary-chip__value" data-fh-slot="value"><span class="fh-num">Sat 14 Nov · 11:15 PM EST</span></span><span class="fh-summary-chip__short">Sat 14</span></button>
        <button class="fh-summary-chip" type="button" data-tone="violet" popovertarget="mst-32b-cy" aria-label="Cycle 5, Year 4, Chapter 3." style="anchor-name: --mst-32b-cy" data-fh="MST-3.4" data-fh-slot="items"><span class="fh-summary-chip__label" data-fh-slot="label">Cycle</span><span class="fh-summary-chip__value" data-fh-slot="value"><span class="fh-num">Cycle 5 · Year 4 · Ch 3</span></span><span class="fh-summary-chip__short">C5 · Y4</span><span class="fh-summary-chip__bar" style="--fh-summary-value: 87%" aria-hidden="true"></span></button>
      </div>
      <div class="fh-masthead__tools"><a class="fh-working" data-tone="violet" href="#l-masthead" data-fh="WRK-1.1" data-fh-slot="body"><i class="fh-icon fh-icon--sparkles fh-working__mark" aria-hidden="true" data-fh-slot="mark"></i><b>Claude</b><span class="fh-working__what" data-fh-slot="title">#636 · App bar</span></a><button class="fh-button fh-button--disc" type="button" aria-label="Search" data-fh="BTN-4" data-fh-slot="actions"><i class="fh-icon fh-icon--search" aria-hidden="true"></i></button><button class="fh-profile fh-profile--compact" type="button" popovertarget="mst-32b-prf" aria-label="Justin Rascoe" style="anchor-name: --mst-32b-prf" data-fh="PRF-1.2" data-fh-slot="body"><span class="fh-avatar fh-avatar--circle" data-tone="sky" data-fh="AVT" data-fh-slot="media">JR</span></button></div>
    </header>
  </div>
  <div id="mst-32b-dt" popover class="fh-menu" aria-label="Today" style="position-anchor: --mst-32b-dt" data-fh="MST-3.2"><dl class="fh-kv fh-kv--single" data-fh="TBL" data-fh-slot="body"><div><dt>Day</dt><dd>318</dd></div><div><dt>Days left in 2026</dt><dd>47</dd></div></dl></div>
  <div id="mst-32b-cy" popover class="fh-menu" aria-label="Cycle" style="position-anchor: --mst-32b-cy" data-fh="MST-3.2"><dl class="fh-kv fh-kv--single" data-fh="TBL" data-fh-slot="body"><div><dt>House</dt><dd>4</dd></div><div><dt>Vibration</dt><dd>8</dd></div><div><dt>Age number</dt><dd>4</dd></div><div><dt>Chapter 3</dt><dd>Saturn</dd></div><div><dt>Days left</dt><dd>112</dd></div></dl><div class="fh-menu__foot"><a class="fh-link" href="#l-masthead" data-fh="ACT-2.1" data-fh-slot="link">Open year</a><a class="fh-link" href="#l-masthead" data-fh="ACT-2.1" data-fh-slot="link">Open cycle</a></div></div>
  <div id="mst-32b-prf" popover class="fh-menu fh-profile-menu" role="menu" aria-label="Account" style="position-anchor: --mst-32b-prf" data-fh="MST-3.2"><div class="fh-profile-menu__card" data-tone="sky"><span class="fh-avatar fh-avatar--circle" data-tone="sky" data-fh="AVT" data-fh-slot="media">JR</span><span class="fh-profile-menu__id"><b>Justin Rascoe</b><small>justin@rascode.dev</small></span></div></div>
</div>
```

#### MST-3.3 · Tools

```html
<div class="fh-stack fh-stack--md">
  <p class="fh-small fh-muted">Container width steps (64rem, 50rem, 36rem, 24rem).</p>
  <div style="inline-size: 64rem; max-inline-size: 100%; margin-inline: auto"><header class="fh-masthead fh-masthead--app" data-fh="MST-3.3"><div class="fh-masthead__lead" data-tone="sky"><span class="fh-sidebar__cube" data-tone="sky" data-fh-slot="media"><i class="fh-icon fh-icon--sun" aria-hidden="true"></i></span><span class="fh-masthead__title" data-fh-slot="title">Today</span></div><div class="fh-masthead__summary"><button class="fh-summary-chip" type="button" aria-label="Now" data-fh="MST-3.4" data-fh-slot="items"><span class="fh-summary-chip__value" data-fh-slot="value"><span class="fh-num">Sat 14 Nov · 11:15 PM EST</span></span><span class="fh-summary-chip__short">Sat 14</span></button><button class="fh-summary-chip" type="button" aria-label="Cycle" data-fh="MST-3.4" data-fh-slot="items"><span class="fh-summary-chip__value" data-fh-slot="value"><span class="fh-num">Cycle 5 · Year 4 · Ch 3</span></span><span class="fh-summary-chip__short">C5 · Y4</span><span class="fh-summary-chip__bar" style="--fh-summary-value: 87%" aria-hidden="true"></span></button></div><div class="fh-masthead__tools"><a class="fh-working" data-tone="violet" href="#l-masthead" data-fh="WRK-1.1" data-fh-slot="body"><i class="fh-icon fh-icon--sparkles fh-working__mark" aria-hidden="true" data-fh-slot="mark"></i><b>Claude</b><span class="fh-working__what" data-fh-slot="title">#636 · App bar</span></a><button class="fh-button fh-button--disc" type="button" aria-label="Search" data-fh="BTN-4" data-fh-slot="actions"><i class="fh-icon fh-icon--search" aria-hidden="true"></i></button><button class="fh-profile fh-profile--compact" type="button" aria-label="Justin Rascoe" data-fh="PRF-1.2" data-fh-slot="body"><span class="fh-avatar fh-avatar--circle" data-tone="sky" data-fh="AVT" data-fh-slot="media">JR</span></button></div></header></div>
  <div style="inline-size: 50rem; max-inline-size: 100%; margin-inline: auto"><header class="fh-masthead fh-masthead--app" data-fh="MST-3.3"><div class="fh-masthead__lead" data-tone="sky"><span class="fh-sidebar__cube" data-tone="sky" data-fh-slot="media"><i class="fh-icon fh-icon--sun" aria-hidden="true"></i></span><span class="fh-masthead__title" data-fh-slot="title">Today</span></div><div class="fh-masthead__summary"><button class="fh-summary-chip" type="button" aria-label="Now" data-fh="MST-3.4" data-fh-slot="items"><span class="fh-summary-chip__value" data-fh-slot="value"><span class="fh-num">Sat 14 Nov · 11:15 PM EST</span></span><span class="fh-summary-chip__short">Sat 14</span></button><button class="fh-summary-chip" type="button" aria-label="Cycle" data-fh="MST-3.4" data-fh-slot="items"><span class="fh-summary-chip__value" data-fh-slot="value"><span class="fh-num">Cycle 5 · Year 4 · Ch 3</span></span><span class="fh-summary-chip__short">C5 · Y4</span></button></div><div class="fh-masthead__tools"><a class="fh-working" data-tone="violet" href="#l-masthead" data-fh="WRK-1.1" data-fh-slot="body"><i class="fh-icon fh-icon--sparkles fh-working__mark" aria-hidden="true" data-fh-slot="mark"></i><b>Claude</b><span class="fh-working__what" data-fh-slot="title">#636 · App bar</span></a><button class="fh-button fh-button--disc" type="button" aria-label="Search" data-fh="BTN-4" data-fh-slot="actions"><i class="fh-icon fh-icon--search" aria-hidden="true"></i></button><button class="fh-profile fh-profile--compact" type="button" aria-label="Justin Rascoe" data-fh="PRF-1.2" data-fh-slot="body"><span class="fh-avatar fh-avatar--circle" data-tone="sky" data-fh="AVT" data-fh-slot="media">JR</span></button></div></header></div>
  <div style="inline-size: 36rem; max-inline-size: 100%; margin-inline: auto"><header class="fh-masthead fh-masthead--app" data-fh="MST-3.3"><div class="fh-masthead__lead" data-tone="sky"><span class="fh-sidebar__cube" data-tone="sky" data-fh-slot="media"><i class="fh-icon fh-icon--sun" aria-hidden="true"></i></span><span class="fh-masthead__title" data-fh-slot="title">Today</span></div><div class="fh-masthead__summary"><button class="fh-summary-chip" type="button" aria-label="Now" data-fh="MST-3.4" data-fh-slot="items"><span class="fh-summary-chip__value" data-fh-slot="value"><span class="fh-num">Sat 14 Nov · 11:15 PM EST</span></span><span class="fh-summary-chip__short">Sat 14</span></button><button class="fh-summary-chip" type="button" aria-label="Cycle" data-fh="MST-3.4" data-fh-slot="items"><span class="fh-summary-chip__value" data-fh-slot="value"><span class="fh-num">Cycle 5 · Year 4 · Ch 3</span></span><span class="fh-summary-chip__short">C5 · Y4</span></button></div><div class="fh-masthead__tools"><button class="fh-profile fh-profile--compact" type="button" aria-label="Justin Rascoe" data-fh="PRF-1.2" data-fh-slot="body"><span class="fh-avatar fh-avatar--circle" data-tone="sky" data-fh="AVT" data-fh-slot="media">JR</span></button></div></header></div>
  <div style="inline-size: 24rem; max-inline-size: 100%; margin-inline: auto"><header class="fh-masthead fh-masthead--app" data-fh="MST-3.3"><div class="fh-masthead__lead" data-tone="sky"><span class="fh-sidebar__cube" data-tone="sky" data-fh-slot="media"><i class="fh-icon fh-icon--sun" aria-hidden="true"></i></span><span class="fh-masthead__title" data-fh-slot="title">Today</span></div><div class="fh-masthead__summary" data-fh-slot="summary"></div><div class="fh-masthead__tools"><button class="fh-profile fh-profile--compact" type="button" aria-label="Justin Rascoe" data-fh="PRF-1.2" data-fh-slot="body"><span class="fh-avatar fh-avatar--circle" data-tone="sky" data-fh="AVT" data-fh-slot="media">JR</span></button></div></header></div>
</div>
```

#### MST-3.4 · Summary chip

```html
<div class="fh-cluster" style="flex-wrap: wrap; justify-content: center; gap: var(--fh-gap-sectioned); align-items: start">
  <div class="fh-stack fh-stack--sm" style="align-items: center">
    <button class="fh-summary-chip" type="button" popovertarget="mst-34-closed" aria-label="Saturday 14 November, 11:15 PM Eastern" style="anchor-name: --mst-34-closed" data-fh="MST-3.4"><span class="fh-summary-chip__label" data-fh-slot="label">Now</span><span class="fh-summary-chip__value" data-fh-slot="value"><span class="fh-num">Sat 14 Nov · 11:15 PM EST</span></span></button>
    <div id="mst-34-closed" popover class="fh-menu" aria-label="Now" style="position-anchor: --mst-34-closed" data-fh="MST-3.4"><dl class="fh-kv fh-kv--single" data-fh="TBL" data-fh-slot="body"><div><dt>Day</dt><dd>318</dd></div></dl></div>
  </div>
  <div class="fh-stack fh-stack--sm" style="align-items: center">
    <button class="fh-summary-chip" type="button" aria-label="Cycle 5, Year 4" data-fh="MST-3.4"><span class="fh-summary-chip__label" data-fh-slot="label">Cycle</span><span class="fh-summary-chip__value" data-fh-slot="value"><span class="fh-num">Cycle 5 · Year 4 · Ch 3</span></span><span class="fh-summary-chip__short">C5 · Y4</span></button>
  </div>
  <div class="fh-stack fh-stack--sm" style="align-items: center">
    <button class="fh-summary-chip" type="button" data-tone="violet" aria-label="Cycle 5 with progress" data-fh="MST-3.4"><span class="fh-summary-chip__label" data-fh-slot="label">Cycle</span><span class="fh-summary-chip__value" data-fh-slot="value"><span class="fh-num">Cycle 5 · Year 4 · Ch 3</span></span><span class="fh-summary-chip__bar" style="--fh-summary-value: 87%" aria-hidden="true"></span></button>
  </div>
  <div class="fh-stack fh-stack--sm" style="align-items: center">
    <button class="fh-summary-chip" type="button" data-tone="lime" aria-label="Synced sample with open card" data-fh="MST-3.4"><span class="fh-summary-chip__label" data-fh-slot="label">Sync</span><span class="fh-summary-chip__value" data-fh-slot="value"><span class="fh-num">All clear</span></span></button>
    <div class="fh-menu" role="presentation" aria-label="Sample card open" style="opacity: 1; translate: 0 0" data-fh="MST-3.4"><dl class="fh-kv fh-kv--single" data-fh="TBL" data-fh-slot="body"><div><dt>House</dt><dd>4</dd></div><div><dt>Vibration</dt><dd>8</dd></div></dl></div>
  </div>
</div>
```

### MST-4 · App bar layouts

#### MST-4.1 · Centered

```html
<div class="fh-stack fh-stack--lg">
  <div style="position: relative; overflow: hidden; contain: paint; padding: var(--fh-space-6); border-radius: var(--fh-radius-lg)">
    <div class="fh-backdrop" data-fh-backdrop="blueprint" aria-hidden="true" style="position: absolute; inset: 0" data-fh="MST-4.1"></div>
    <div class="fh-cluster" style="position: relative; z-index: 1; align-items: start; gap: var(--fh-gap-grouped); flex-wrap: wrap">
    <nav class="fh-sidebar" aria-label="Helm" style="inline-size: 12rem; flex: none; min-block-size: 0; grid-template-rows: auto; margin: 0">
      <div class="fh-sidebar__head">
        <a class="fh-app__brand" href="#l-masthead"><i class="fh-icon fh-icon--panels-top-left" aria-hidden="true"></i><span>Helm</span></a>
        <button class="fh-sidebar__toggle" type="button" aria-expanded="true" aria-label="Collapse sidebar"><i class="fh-icon fh-icon--panel-left" aria-hidden="true"></i></button>
      </div>
    </nav>
    <header class="fh-masthead fh-masthead--app" style="flex: 1; min-inline-size: 16rem" data-fh="MST-4.1">
      <div class="fh-masthead__lead" data-tone="sky"><span class="fh-sidebar__cube" data-tone="sky" data-fh-slot="media"><i class="fh-icon fh-icon--sun" aria-hidden="true"></i></span><span class="fh-masthead__title" data-fh-slot="title">Today</span></div>
      <div class="fh-masthead__summary">
        <button class="fh-summary-chip" type="button" popovertarget="mst-41-dt" style="anchor-name: --mst-41-dt" aria-label="Saturday 14 November, 11:15 PM Eastern." data-fh="MST-3.4" data-fh-slot="items"><span class="fh-sidebar__cube" data-tone="amber" aria-hidden="true" data-fh-slot="media"><i class="fh-icon fh-icon--calendar"></i></span><span class="fh-summary-chip__label" data-fh-slot="label">Now</span><span class="fh-summary-chip__value" data-fh-slot="value"><span class="fh-num">Sat 14 Nov · 11:15 PM EST</span></span><span class="fh-summary-chip__short">Sat 14</span></button>
        <button class="fh-summary-chip" type="button" data-tone="violet" popovertarget="mst-41-cy" style="anchor-name: --mst-41-cy" aria-label="Cycle 5, Year 4, Chapter 3." data-fh="MST-3.4" data-fh-slot="items"><span class="fh-sidebar__cube" data-tone="violet" aria-hidden="true" data-fh-slot="media"><i class="fh-icon fh-icon--map"></i></span><span class="fh-summary-chip__label" data-fh-slot="label">Cycle</span><span class="fh-summary-chip__value" data-fh-slot="value"><span class="fh-num">Cycle 5 · Year 4 · Ch 3</span></span><span class="fh-summary-chip__short">C5 · Y4</span><span class="fh-summary-chip__bar" style="--fh-summary-value: 87%" aria-hidden="true"></span></button>
      </div>
      <div class="fh-masthead__tools"><a class="fh-working" data-tone="violet" href="#l-masthead" data-fh="WRK-1.1" data-fh-slot="body"><i class="fh-icon fh-icon--sparkles fh-working__mark" aria-hidden="true" data-fh-slot="mark"></i><b>Claude</b><span class="fh-working__what" data-fh-slot="title">#636 · App bar</span></a><button class="fh-button fh-button--disc" type="button" aria-label="Search" data-fh="BTN-4" data-fh-slot="actions"><i class="fh-icon fh-icon--search" aria-hidden="true"></i></button><button class="fh-profile fh-profile--compact" type="button" popovertarget="mst-41-prf" style="anchor-name: --mst-41-prf" aria-label="Justin Rascoe" data-fh="PRF-1.2" data-fh-slot="body"><span class="fh-avatar fh-avatar--circle" data-tone="sky" data-fh="AVT" data-fh-slot="media">JR</span></button></div>
    </header>
    </div>
  </div>
  <div id="mst-41-dt" popover class="fh-menu" aria-label="Today" style="position-anchor: --mst-41-dt" data-fh="MST-4.1"><dl class="fh-kv fh-kv--single" data-fh="TBL" data-fh-slot="body"><div><dt>Day</dt><dd>318</dd></div><div><dt>Days left in 2026</dt><dd>47</dd></div></dl></div>
  <div id="mst-41-cy" popover class="fh-menu" aria-label="Cycle" style="position-anchor: --mst-41-cy" data-fh="MST-4.1"><dl class="fh-kv fh-kv--single" data-fh="TBL" data-fh-slot="body"><div><dt>House</dt><dd>4</dd></div><div><dt>Vibration</dt><dd>8</dd></div><div><dt>Age number</dt><dd>4</dd></div><div><dt>Chapter 3</dt><dd>Saturn</dd></div><div><dt>Days left</dt><dd>112</dd></div></dl><div class="fh-menu__foot"><a class="fh-link" href="#l-masthead" data-fh="ACT-2.1" data-fh-slot="link">Open year</a><a class="fh-link" href="#l-masthead" data-fh="ACT-2.1" data-fh-slot="link">Open cycle</a></div></div>
  <div id="mst-41-prf" popover class="fh-menu fh-profile-menu" role="menu" aria-label="Account" style="position-anchor: --mst-41-prf" data-fh="MST-4.1"><div class="fh-profile-menu__card" data-tone="sky"><span class="fh-avatar fh-avatar--circle" data-tone="sky" data-fh="AVT" data-fh-slot="media">JR</span><span class="fh-profile-menu__id"><b>Justin Rascoe</b><small>justin@rascode.dev</small></span></div></div>
  <p class="fh-small fh-muted">Centered at 50rem and 24rem.</p>
  <div style="inline-size: 50rem; max-inline-size: 100%; margin-inline: auto"><header class="fh-masthead fh-masthead--app" data-fh="MST-4.1">
      <div class="fh-masthead__lead" data-tone="sky"><span class="fh-sidebar__cube" data-tone="sky" data-fh-slot="media"><i class="fh-icon fh-icon--sun" aria-hidden="true"></i></span><span class="fh-masthead__title" data-fh-slot="title">Today</span></div>
      <div class="fh-masthead__summary">
        <button class="fh-summary-chip" type="button" aria-label="Saturday 14 November, 11:15 PM Eastern." data-fh="MST-3.4" data-fh-slot="items"><span class="fh-sidebar__cube" data-tone="amber" aria-hidden="true" data-fh-slot="media"><i class="fh-icon fh-icon--calendar"></i></span><span class="fh-summary-chip__label" data-fh-slot="label">Now</span><span class="fh-summary-chip__value" data-fh-slot="value"><span class="fh-num">Sat 14 Nov · 11:15 PM EST</span></span><span class="fh-summary-chip__short">Sat 14</span></button>
        <button class="fh-summary-chip" type="button" data-tone="violet" aria-label="Cycle 5, Year 4, Chapter 3." data-fh="MST-3.4" data-fh-slot="items"><span class="fh-sidebar__cube" data-tone="violet" aria-hidden="true" data-fh-slot="media"><i class="fh-icon fh-icon--map"></i></span><span class="fh-summary-chip__label" data-fh-slot="label">Cycle</span><span class="fh-summary-chip__value" data-fh-slot="value"><span class="fh-num">Cycle 5 · Year 4 · Ch 3</span></span><span class="fh-summary-chip__short">C5 · Y4</span><span class="fh-summary-chip__bar" style="--fh-summary-value: 87%" aria-hidden="true"></span></button>
      </div>
      <div class="fh-masthead__tools"><a class="fh-working" data-tone="violet" href="#l-masthead" data-fh="WRK-1.1" data-fh-slot="body"><i class="fh-icon fh-icon--sparkles fh-working__mark" aria-hidden="true" data-fh-slot="mark"></i><b>Claude</b><span class="fh-working__what" data-fh-slot="title">#636 · App bar</span></a><button class="fh-button fh-button--disc" type="button" aria-label="Search" data-fh="BTN-4" data-fh-slot="actions"><i class="fh-icon fh-icon--search" aria-hidden="true"></i></button><button class="fh-profile fh-profile--compact" type="button" aria-label="Justin Rascoe" data-fh="PRF-1.2" data-fh-slot="body"><span class="fh-avatar fh-avatar--circle" data-tone="sky" data-fh="AVT" data-fh-slot="media">JR</span></button></div>
    </header></div>
  <div style="inline-size: 24rem; max-inline-size: 100%; margin-inline: auto"><header class="fh-masthead fh-masthead--app" data-fh="MST-4.1">
      <div class="fh-masthead__lead" data-tone="sky"><span class="fh-sidebar__cube" data-tone="sky" data-fh-slot="media"><i class="fh-icon fh-icon--sun" aria-hidden="true"></i></span><span class="fh-masthead__title" data-fh-slot="title">Today</span></div>
      <div class="fh-masthead__summary">
        <button class="fh-summary-chip" type="button" aria-label="Saturday 14 November, 11:15 PM Eastern." data-fh="MST-3.4" data-fh-slot="items"><span class="fh-sidebar__cube" data-tone="amber" aria-hidden="true" data-fh-slot="media"><i class="fh-icon fh-icon--calendar"></i></span><span class="fh-summary-chip__label" data-fh-slot="label">Now</span><span class="fh-summary-chip__value" data-fh-slot="value"><span class="fh-num">Sat 14 Nov · 11:15 PM EST</span></span><span class="fh-summary-chip__short">Sat 14</span></button>
        <button class="fh-summary-chip" type="button" data-tone="violet" aria-label="Cycle 5, Year 4, Chapter 3." data-fh="MST-3.4" data-fh-slot="items"><span class="fh-sidebar__cube" data-tone="violet" aria-hidden="true" data-fh-slot="media"><i class="fh-icon fh-icon--map"></i></span><span class="fh-summary-chip__label" data-fh-slot="label">Cycle</span><span class="fh-summary-chip__value" data-fh-slot="value"><span class="fh-num">Cycle 5 · Year 4 · Ch 3</span></span><span class="fh-summary-chip__short">C5 · Y4</span><span class="fh-summary-chip__bar" style="--fh-summary-value: 87%" aria-hidden="true"></span></button>
      </div>
      <div class="fh-masthead__tools"><a class="fh-working" data-tone="violet" href="#l-masthead" data-fh="WRK-1.1" data-fh-slot="body"><i class="fh-icon fh-icon--sparkles fh-working__mark" aria-hidden="true" data-fh-slot="mark"></i><b>Claude</b><span class="fh-working__what" data-fh-slot="title">#636 · App bar</span></a><button class="fh-button fh-button--disc" type="button" aria-label="Search" data-fh="BTN-4" data-fh-slot="actions"><i class="fh-icon fh-icon--search" aria-hidden="true"></i></button><button class="fh-profile fh-profile--compact" type="button" aria-label="Justin Rascoe" data-fh="PRF-1.2" data-fh-slot="body"><span class="fh-avatar fh-avatar--circle" data-tone="sky" data-fh="AVT" data-fh-slot="media">JR</span></button></div>
    </header></div>
</div>
```

#### MST-4.2 · Inline readout

```html
<div class="fh-stack fh-stack--lg">
  <div style="position: relative; overflow: hidden; contain: paint; padding: var(--fh-space-6); border-radius: var(--fh-radius-lg)">
    <div class="fh-backdrop" data-fh-backdrop="blueprint" aria-hidden="true" style="position: absolute; inset: 0" data-fh="MST-4.2"></div>
    <div class="fh-cluster" style="position: relative; z-index: 1; align-items: start; gap: var(--fh-gap-grouped); flex-wrap: wrap">
    <nav class="fh-sidebar" aria-label="Helm" style="inline-size: 12rem; flex: none; min-block-size: 0; grid-template-rows: auto; margin: 0">
      <div class="fh-sidebar__head">
        <a class="fh-app__brand" href="#l-masthead"><i class="fh-icon fh-icon--panels-top-left" aria-hidden="true"></i><span>Helm</span></a>
        <button class="fh-sidebar__toggle" type="button" aria-expanded="true" aria-label="Collapse sidebar"><i class="fh-icon fh-icon--panel-left" aria-hidden="true"></i></button>
      </div>
    </nav>
    <header class="fh-masthead fh-masthead--app fh-masthead--app-inline" style="flex: 1; min-inline-size: 16rem" data-fh="MST-4.2">
      <div class="fh-masthead__lead" data-tone="sky"><span class="fh-sidebar__cube" data-tone="sky" data-fh-slot="media"><i class="fh-icon fh-icon--sun" aria-hidden="true"></i></span><span class="fh-masthead__title" data-fh-slot="title">Today</span></div>
      <div class="fh-masthead__summary">
        <button class="fh-summary-chip" type="button" popovertarget="mst-42-dt" style="anchor-name: --mst-42-dt" aria-label="Saturday 14 November, 11:15 PM Eastern." data-fh="MST-3.4" data-fh-slot="items"><span class="fh-sidebar__cube" data-tone="amber" aria-hidden="true" data-fh-slot="media"><i class="fh-icon fh-icon--calendar"></i></span><span class="fh-summary-chip__label" data-fh-slot="label">Now</span><span class="fh-summary-chip__value" data-fh-slot="value"><span class="fh-num">Sat 14 Nov · 11:15 PM EST</span></span><span class="fh-summary-chip__short">Sat 14</span></button>
        <button class="fh-summary-chip" type="button" data-tone="violet" popovertarget="mst-42-cy" style="anchor-name: --mst-42-cy" aria-label="Cycle 5, Year 4, Chapter 3." data-fh="MST-3.4" data-fh-slot="items"><span class="fh-sidebar__cube" data-tone="violet" aria-hidden="true" data-fh-slot="media"><i class="fh-icon fh-icon--map"></i></span><span class="fh-summary-chip__label" data-fh-slot="label">Cycle</span><span class="fh-summary-chip__value" data-fh-slot="value"><span class="fh-num">Cycle 5 · Year 4 · Ch 3</span></span><span class="fh-summary-chip__short">C5 · Y4</span><span class="fh-summary-chip__bar" style="--fh-summary-value: 87%" aria-hidden="true"></span></button>
      </div>
      <div class="fh-masthead__tools"><a class="fh-working" data-tone="violet" href="#l-masthead" data-fh="WRK-1.1" data-fh-slot="body"><i class="fh-icon fh-icon--sparkles fh-working__mark" aria-hidden="true" data-fh-slot="mark"></i><b>Claude</b><span class="fh-working__what" data-fh-slot="title">#636 · App bar</span></a><button class="fh-button fh-button--disc" type="button" aria-label="Search" data-fh="BTN-4" data-fh-slot="actions"><i class="fh-icon fh-icon--search" aria-hidden="true"></i></button><button class="fh-profile fh-profile--compact" type="button" popovertarget="mst-42-prf" style="anchor-name: --mst-42-prf" aria-label="Justin Rascoe" data-fh="PRF-1.2" data-fh-slot="body"><span class="fh-avatar fh-avatar--circle" data-tone="sky" data-fh="AVT" data-fh-slot="media">JR</span></button></div>
    </header>
    </div>
  </div>
  <div id="mst-42-dt" popover class="fh-menu" aria-label="Today" style="position-anchor: --mst-42-dt" data-fh="MST-4.2"><dl class="fh-kv fh-kv--single" data-fh="TBL" data-fh-slot="body"><div><dt>Day</dt><dd>318</dd></div><div><dt>Days left in 2026</dt><dd>47</dd></div></dl></div>
  <div id="mst-42-cy" popover class="fh-menu" aria-label="Cycle" style="position-anchor: --mst-42-cy" data-fh="MST-4.2"><dl class="fh-kv fh-kv--single" data-fh="TBL" data-fh-slot="body"><div><dt>House</dt><dd>4</dd></div><div><dt>Vibration</dt><dd>8</dd></div><div><dt>Age number</dt><dd>4</dd></div><div><dt>Chapter 3</dt><dd>Saturn</dd></div><div><dt>Days left</dt><dd>112</dd></div></dl><div class="fh-menu__foot"><a class="fh-link" href="#l-masthead" data-fh="ACT-2.1" data-fh-slot="link">Open year</a><a class="fh-link" href="#l-masthead" data-fh="ACT-2.1" data-fh-slot="link">Open cycle</a></div></div>
  <div id="mst-42-prf" popover class="fh-menu fh-profile-menu" role="menu" aria-label="Account" style="position-anchor: --mst-42-prf" data-fh="MST-4.2"><div class="fh-profile-menu__card" data-tone="sky"><span class="fh-avatar fh-avatar--circle" data-tone="sky" data-fh="AVT" data-fh-slot="media">JR</span><span class="fh-profile-menu__id"><b>Justin Rascoe</b><small>justin@rascode.dev</small></span></div></div>
  <p class="fh-small fh-muted">Inline readout at 50rem and 24rem.</p>
  <div style="inline-size: 50rem; max-inline-size: 100%; margin-inline: auto"><header class="fh-masthead fh-masthead--app fh-masthead--app-inline" data-fh="MST-4.2">
      <div class="fh-masthead__lead" data-tone="sky"><span class="fh-sidebar__cube" data-tone="sky" data-fh-slot="media"><i class="fh-icon fh-icon--sun" aria-hidden="true"></i></span><span class="fh-masthead__title" data-fh-slot="title">Today</span></div>
      <div class="fh-masthead__summary">
        <button class="fh-summary-chip" type="button" aria-label="Saturday 14 November, 11:15 PM Eastern." data-fh="MST-3.4" data-fh-slot="items"><span class="fh-sidebar__cube" data-tone="amber" aria-hidden="true" data-fh-slot="media"><i class="fh-icon fh-icon--calendar"></i></span><span class="fh-summary-chip__label" data-fh-slot="label">Now</span><span class="fh-summary-chip__value" data-fh-slot="value"><span class="fh-num">Sat 14 Nov · 11:15 PM EST</span></span><span class="fh-summary-chip__short">Sat 14</span></button>
        <button class="fh-summary-chip" type="button" data-tone="violet" aria-label="Cycle 5, Year 4, Chapter 3." data-fh="MST-3.4" data-fh-slot="items"><span class="fh-sidebar__cube" data-tone="violet" aria-hidden="true" data-fh-slot="media"><i class="fh-icon fh-icon--map"></i></span><span class="fh-summary-chip__label" data-fh-slot="label">Cycle</span><span class="fh-summary-chip__value" data-fh-slot="value"><span class="fh-num">Cycle 5 · Year 4 · Ch 3</span></span><span class="fh-summary-chip__short">C5 · Y4</span><span class="fh-summary-chip__bar" style="--fh-summary-value: 87%" aria-hidden="true"></span></button>
      </div>
      <div class="fh-masthead__tools"><a class="fh-working" data-tone="violet" href="#l-masthead" data-fh="WRK-1.1" data-fh-slot="body"><i class="fh-icon fh-icon--sparkles fh-working__mark" aria-hidden="true" data-fh-slot="mark"></i><b>Claude</b><span class="fh-working__what" data-fh-slot="title">#636 · App bar</span></a><button class="fh-button fh-button--disc" type="button" aria-label="Search" data-fh="BTN-4" data-fh-slot="actions"><i class="fh-icon fh-icon--search" aria-hidden="true"></i></button><button class="fh-profile fh-profile--compact" type="button" aria-label="Justin Rascoe" data-fh="PRF-1.2" data-fh-slot="body"><span class="fh-avatar fh-avatar--circle" data-tone="sky" data-fh="AVT" data-fh-slot="media">JR</span></button></div>
    </header></div>
  <div style="inline-size: 24rem; max-inline-size: 100%; margin-inline: auto"><header class="fh-masthead fh-masthead--app fh-masthead--app-inline" data-fh="MST-4.2">
      <div class="fh-masthead__lead" data-tone="sky"><span class="fh-sidebar__cube" data-tone="sky" data-fh-slot="media"><i class="fh-icon fh-icon--sun" aria-hidden="true"></i></span><span class="fh-masthead__title" data-fh-slot="title">Today</span></div>
      <div class="fh-masthead__summary">
        <button class="fh-summary-chip" type="button" aria-label="Saturday 14 November, 11:15 PM Eastern." data-fh="MST-3.4" data-fh-slot="items"><span class="fh-sidebar__cube" data-tone="amber" aria-hidden="true" data-fh-slot="media"><i class="fh-icon fh-icon--calendar"></i></span><span class="fh-summary-chip__label" data-fh-slot="label">Now</span><span class="fh-summary-chip__value" data-fh-slot="value"><span class="fh-num">Sat 14 Nov · 11:15 PM EST</span></span><span class="fh-summary-chip__short">Sat 14</span></button>
        <button class="fh-summary-chip" type="button" data-tone="violet" aria-label="Cycle 5, Year 4, Chapter 3." data-fh="MST-3.4" data-fh-slot="items"><span class="fh-sidebar__cube" data-tone="violet" aria-hidden="true" data-fh-slot="media"><i class="fh-icon fh-icon--map"></i></span><span class="fh-summary-chip__label" data-fh-slot="label">Cycle</span><span class="fh-summary-chip__value" data-fh-slot="value"><span class="fh-num">Cycle 5 · Year 4 · Ch 3</span></span><span class="fh-summary-chip__short">C5 · Y4</span><span class="fh-summary-chip__bar" style="--fh-summary-value: 87%" aria-hidden="true"></span></button>
      </div>
      <div class="fh-masthead__tools"><a class="fh-working" data-tone="violet" href="#l-masthead" data-fh="WRK-1.1" data-fh-slot="body"><i class="fh-icon fh-icon--sparkles fh-working__mark" aria-hidden="true" data-fh-slot="mark"></i><b>Claude</b><span class="fh-working__what" data-fh-slot="title">#636 · App bar</span></a><button class="fh-button fh-button--disc" type="button" aria-label="Search" data-fh="BTN-4" data-fh-slot="actions"><i class="fh-icon fh-icon--search" aria-hidden="true"></i></button><button class="fh-profile fh-profile--compact" type="button" aria-label="Justin Rascoe" data-fh="PRF-1.2" data-fh-slot="body"><span class="fh-avatar fh-avatar--circle" data-tone="sky" data-fh="AVT" data-fh-slot="media">JR</span></button></div>
    </header></div>
</div>
```

#### MST-4.3 · Tiles

```html
<div class="fh-stack fh-stack--lg">
  <div style="position: relative; overflow: hidden; contain: paint; padding: var(--fh-space-6); border-radius: var(--fh-radius-lg)">
    <div class="fh-backdrop" data-fh-backdrop="blueprint" aria-hidden="true" style="position: absolute; inset: 0" data-fh="MST-4.3"></div>
    <div class="fh-cluster" style="position: relative; z-index: 1; align-items: start; gap: var(--fh-gap-grouped); flex-wrap: wrap">
    <nav class="fh-sidebar" aria-label="Helm" style="inline-size: 12rem; flex: none; min-block-size: 0; grid-template-rows: auto; margin: 0">
      <div class="fh-sidebar__head">
        <a class="fh-app__brand" href="#l-masthead"><i class="fh-icon fh-icon--panels-top-left" aria-hidden="true"></i><span>Helm</span></a>
        <button class="fh-sidebar__toggle" type="button" aria-expanded="true" aria-label="Collapse sidebar"><i class="fh-icon fh-icon--panel-left" aria-hidden="true"></i></button>
      </div>
    </nav>
    <header class="fh-masthead fh-masthead--app fh-masthead--app-tiles" style="flex: 1; min-inline-size: 16rem" data-fh="MST-4.3">
      <div class="fh-masthead__lead" data-tone="sky"><span class="fh-sidebar__cube" data-tone="sky" data-fh-slot="media"><i class="fh-icon fh-icon--sun" aria-hidden="true"></i></span><span class="fh-masthead__title" data-fh-slot="title">Today</span></div>
      <div class="fh-masthead__summary">
        <button class="fh-summary-chip" type="button" popovertarget="mst-43-dt" style="anchor-name: --mst-43-dt" aria-label="Saturday 14 November, 11:15 PM Eastern." data-fh="MST-3.4" data-fh-slot="items"><span class="fh-sidebar__cube" data-tone="amber" aria-hidden="true" data-fh-slot="media"><i class="fh-icon fh-icon--calendar"></i></span><span class="fh-summary-chip__label" data-fh-slot="label">Now</span><span class="fh-summary-chip__value" data-fh-slot="value"><span class="fh-num">Sat 14 Nov · 11:15 PM EST</span></span><span class="fh-summary-chip__short">Sat 14</span></button>
        <button class="fh-summary-chip" type="button" data-tone="violet" popovertarget="mst-43-cy" style="anchor-name: --mst-43-cy" aria-label="Cycle 5, Year 4, Chapter 3." data-fh="MST-3.4" data-fh-slot="items"><span class="fh-sidebar__cube" data-tone="violet" aria-hidden="true" data-fh-slot="media"><i class="fh-icon fh-icon--map"></i></span><span class="fh-summary-chip__label" data-fh-slot="label">Cycle</span><span class="fh-summary-chip__value" data-fh-slot="value"><span class="fh-num">Cycle 5 · Year 4 · Ch 3</span></span><span class="fh-summary-chip__short">C5 · Y4</span><span class="fh-summary-chip__bar" style="--fh-summary-value: 87%" aria-hidden="true"></span></button>
      </div>
      <div class="fh-masthead__tools"><a class="fh-working" data-tone="violet" href="#l-masthead" data-fh="WRK-1.1" data-fh-slot="body"><i class="fh-icon fh-icon--sparkles fh-working__mark" aria-hidden="true" data-fh-slot="mark"></i><b>Claude</b><span class="fh-working__what" data-fh-slot="title">#636 · App bar</span></a><button class="fh-button fh-button--disc" type="button" aria-label="Search" data-fh="BTN-4" data-fh-slot="actions"><i class="fh-icon fh-icon--search" aria-hidden="true"></i></button><button class="fh-profile fh-profile--compact" type="button" popovertarget="mst-43-prf" style="anchor-name: --mst-43-prf" aria-label="Justin Rascoe" data-fh="PRF-1.2" data-fh-slot="body"><span class="fh-avatar fh-avatar--circle" data-tone="sky" data-fh="AVT" data-fh-slot="media">JR</span></button></div>
    </header>
    </div>
  </div>
  <div id="mst-43-dt" popover class="fh-menu" aria-label="Today" style="position-anchor: --mst-43-dt" data-fh="MST-4.3"><dl class="fh-kv fh-kv--single" data-fh="TBL" data-fh-slot="body"><div><dt>Day</dt><dd>318</dd></div><div><dt>Days left in 2026</dt><dd>47</dd></div></dl></div>
  <div id="mst-43-cy" popover class="fh-menu" aria-label="Cycle" style="position-anchor: --mst-43-cy" data-fh="MST-4.3"><dl class="fh-kv fh-kv--single" data-fh="TBL" data-fh-slot="body"><div><dt>House</dt><dd>4</dd></div><div><dt>Vibration</dt><dd>8</dd></div><div><dt>Age number</dt><dd>4</dd></div><div><dt>Chapter 3</dt><dd>Saturn</dd></div><div><dt>Days left</dt><dd>112</dd></div></dl><div class="fh-menu__foot"><a class="fh-link" href="#l-masthead" data-fh="ACT-2.1" data-fh-slot="link">Open year</a><a class="fh-link" href="#l-masthead" data-fh="ACT-2.1" data-fh-slot="link">Open cycle</a></div></div>
  <div id="mst-43-prf" popover class="fh-menu fh-profile-menu" role="menu" aria-label="Account" style="position-anchor: --mst-43-prf" data-fh="MST-4.3"><div class="fh-profile-menu__card" data-tone="sky"><span class="fh-avatar fh-avatar--circle" data-tone="sky" data-fh="AVT" data-fh-slot="media">JR</span><span class="fh-profile-menu__id"><b>Justin Rascoe</b><small>justin@rascode.dev</small></span></div></div>
  <p class="fh-small fh-muted">Tiles at 50rem and 24rem.</p>
  <div style="inline-size: 50rem; max-inline-size: 100%; margin-inline: auto"><header class="fh-masthead fh-masthead--app fh-masthead--app-tiles" data-fh="MST-4.3">
      <div class="fh-masthead__lead" data-tone="sky"><span class="fh-sidebar__cube" data-tone="sky" data-fh-slot="media"><i class="fh-icon fh-icon--sun" aria-hidden="true"></i></span><span class="fh-masthead__title" data-fh-slot="title">Today</span></div>
      <div class="fh-masthead__summary">
        <button class="fh-summary-chip" type="button" aria-label="Saturday 14 November, 11:15 PM Eastern." data-fh="MST-3.4" data-fh-slot="items"><span class="fh-sidebar__cube" data-tone="amber" aria-hidden="true" data-fh-slot="media"><i class="fh-icon fh-icon--calendar"></i></span><span class="fh-summary-chip__label" data-fh-slot="label">Now</span><span class="fh-summary-chip__value" data-fh-slot="value"><span class="fh-num">Sat 14 Nov · 11:15 PM EST</span></span><span class="fh-summary-chip__short">Sat 14</span></button>
        <button class="fh-summary-chip" type="button" data-tone="violet" aria-label="Cycle 5, Year 4, Chapter 3." data-fh="MST-3.4" data-fh-slot="items"><span class="fh-sidebar__cube" data-tone="violet" aria-hidden="true" data-fh-slot="media"><i class="fh-icon fh-icon--map"></i></span><span class="fh-summary-chip__label" data-fh-slot="label">Cycle</span><span class="fh-summary-chip__value" data-fh-slot="value"><span class="fh-num">Cycle 5 · Year 4 · Ch 3</span></span><span class="fh-summary-chip__short">C5 · Y4</span><span class="fh-summary-chip__bar" style="--fh-summary-value: 87%" aria-hidden="true"></span></button>
      </div>
      <div class="fh-masthead__tools"><a class="fh-working" data-tone="violet" href="#l-masthead" data-fh="WRK-1.1" data-fh-slot="body"><i class="fh-icon fh-icon--sparkles fh-working__mark" aria-hidden="true" data-fh-slot="mark"></i><b>Claude</b><span class="fh-working__what" data-fh-slot="title">#636 · App bar</span></a><button class="fh-button fh-button--disc" type="button" aria-label="Search" data-fh="BTN-4" data-fh-slot="actions"><i class="fh-icon fh-icon--search" aria-hidden="true"></i></button><button class="fh-profile fh-profile--compact" type="button" aria-label="Justin Rascoe" data-fh="PRF-1.2" data-fh-slot="body"><span class="fh-avatar fh-avatar--circle" data-tone="sky" data-fh="AVT" data-fh-slot="media">JR</span></button></div>
    </header></div>
  <div style="inline-size: 24rem; max-inline-size: 100%; margin-inline: auto"><header class="fh-masthead fh-masthead--app fh-masthead--app-tiles" data-fh="MST-4.3">
      <div class="fh-masthead__lead" data-tone="sky"><span class="fh-sidebar__cube" data-tone="sky" data-fh-slot="media"><i class="fh-icon fh-icon--sun" aria-hidden="true"></i></span><span class="fh-masthead__title" data-fh-slot="title">Today</span></div>
      <div class="fh-masthead__summary">
        <button class="fh-summary-chip" type="button" aria-label="Saturday 14 November, 11:15 PM Eastern." data-fh="MST-3.4" data-fh-slot="items"><span class="fh-sidebar__cube" data-tone="amber" aria-hidden="true" data-fh-slot="media"><i class="fh-icon fh-icon--calendar"></i></span><span class="fh-summary-chip__label" data-fh-slot="label">Now</span><span class="fh-summary-chip__value" data-fh-slot="value"><span class="fh-num">Sat 14 Nov · 11:15 PM EST</span></span><span class="fh-summary-chip__short">Sat 14</span></button>
        <button class="fh-summary-chip" type="button" data-tone="violet" aria-label="Cycle 5, Year 4, Chapter 3." data-fh="MST-3.4" data-fh-slot="items"><span class="fh-sidebar__cube" data-tone="violet" aria-hidden="true" data-fh-slot="media"><i class="fh-icon fh-icon--map"></i></span><span class="fh-summary-chip__label" data-fh-slot="label">Cycle</span><span class="fh-summary-chip__value" data-fh-slot="value"><span class="fh-num">Cycle 5 · Year 4 · Ch 3</span></span><span class="fh-summary-chip__short">C5 · Y4</span><span class="fh-summary-chip__bar" style="--fh-summary-value: 87%" aria-hidden="true"></span></button>
      </div>
      <div class="fh-masthead__tools"><a class="fh-working" data-tone="violet" href="#l-masthead" data-fh="WRK-1.1" data-fh-slot="body"><i class="fh-icon fh-icon--sparkles fh-working__mark" aria-hidden="true" data-fh-slot="mark"></i><b>Claude</b><span class="fh-working__what" data-fh-slot="title">#636 · App bar</span></a><button class="fh-button fh-button--disc" type="button" aria-label="Search" data-fh="BTN-4" data-fh-slot="actions"><i class="fh-icon fh-icon--search" aria-hidden="true"></i></button><button class="fh-profile fh-profile--compact" type="button" aria-label="Justin Rascoe" data-fh="PRF-1.2" data-fh-slot="body"><span class="fh-avatar fh-avatar--circle" data-tone="sky" data-fh="AVT" data-fh-slot="media">JR</span></button></div>
    </header></div>
</div>
```

#### MST-4.4 · Crumbs

```html
<div class="fh-stack fh-stack--lg">
  <div style="position: relative; overflow: hidden; contain: paint; padding: var(--fh-space-6); border-radius: var(--fh-radius-lg)">
    <div class="fh-backdrop" data-fh-backdrop="blueprint" aria-hidden="true" style="position: absolute; inset: 0" data-fh="MST-4.4"></div>
    <div class="fh-cluster" style="position: relative; z-index: 1; align-items: start; gap: var(--fh-gap-grouped); flex-wrap: wrap">
    <nav class="fh-sidebar" aria-label="Helm" style="inline-size: 12rem; flex: none; min-block-size: 0; grid-template-rows: auto; margin: 0; padding-block-end: 0">
      <div class="fh-sidebar__head">
        <a class="fh-app__brand" href="#l-masthead"><span>Helm</span></a>
        <button class="fh-sidebar__toggle" type="button" aria-expanded="true" aria-label="Collapse sidebar"><i class="fh-icon fh-icon--panel-left" aria-hidden="true"></i></button>
      </div>
    </nav>
    <div style="flex: 1; min-inline-size: 16rem"><header class="fh-masthead fh-masthead--app fh-masthead--app-crumbs" data-fh="MST-4.4"><nav class="fh-crumbs" aria-label="Breadcrumb" data-fh-slot="body"><ol class="fh-crumbs__list"><li class="fh-crumb fh-crumb--area" data-fh-crumb data-fh-slot="body"><button class="fh-crumb__button" type="button" aria-haspopup="menu" aria-expanded="false" aria-controls="mst-44-a" aria-label="Organizations, switch area"><span class="fh-sidebar__cube" data-tone="sky" aria-hidden="true" data-fh-slot="media"><i class="fh-icon fh-icon--building-2" aria-hidden="true"></i></span><span class="fh-crumb__name" data-fh-slot="name">Organizations</span><i class="fh-icon fh-icon--chevron-down fh-crumb__caret" aria-hidden="true"></i></button><div id="mst-44-a" popover="manual" class="fh-menu fh-menu--rich fh-crumb-menu" role="menu" aria-label="Areas" data-fh="MST-5.1" data-fh-slot="body"><div class="fh-crumb-menu__search"><input type="search" aria-label="Filter areas" placeholder="Filter areas" value autocomplete="off"></div><div class="fh-crumb-menu__list"><p class="fh-menu__label" data-fh-slot="label">Work</p><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-crumb__mark" aria-hidden="true"><span class="fh-sidebar__cube" data-tone="sky" data-fh-slot="media"><i class="fh-icon fh-icon--sun" aria-hidden="true"></i></span></span><span class="fh-crumb__name" data-fh-slot="name">Today</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-crumb__mark" aria-hidden="true"><span class="fh-sidebar__cube" data-tone="teal" data-fh-slot="media"><i class="fh-icon fh-icon--target" aria-hidden="true"></i></span></span><span class="fh-crumb__name" data-fh-slot="name">Goals</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead" data-depth="1"><span class="fh-crumb__name" data-fh-slot="name">Active</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead" data-depth="1"><span class="fh-crumb__name" data-fh-slot="name">Archived</span></a><p class="fh-menu__label" data-fh-slot="label">Records</p><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="true" tabindex="-1" href="#l-masthead"><span class="fh-crumb__mark" aria-hidden="true"><span class="fh-sidebar__cube" data-tone="sky" data-fh-slot="media"><i class="fh-icon fh-icon--building-2" aria-hidden="true"></i></span></span><span class="fh-crumb__name" data-fh-slot="name">Organizations</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-crumb__mark" aria-hidden="true"><span class="fh-sidebar__cube" data-tone="amber" data-fh-slot="media"><i class="fh-icon fh-icon--users" aria-hidden="true"></i></span></span><span class="fh-crumb__name" data-fh-slot="name">People</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-crumb__mark" aria-hidden="true"><span class="fh-sidebar__cube" data-tone="neutral" data-fh-slot="media"><i class="fh-icon fh-icon--settings" aria-hidden="true"></i></span></span><span class="fh-crumb__name" data-fh-slot="name">Settings</span></a></div><p class="fh-crumb-menu__status" data-empty hidden data-fh-slot="chips">Nothing matches.</p></div></li><li class="fh-crumb fh-crumb--record" data-fh-crumb data-fh-slot="body"><i class="fh-icon fh-icon--chevron-right fh-crumb__sep" aria-hidden="true"></i><button class="fh-crumb__button" type="button" aria-haspopup="menu" aria-expanded="false" aria-controls="mst-44-o" aria-current="page" aria-label="Rascode, switch organization"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="amber" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">R</span></span><span class="fh-crumb__name" data-fh-slot="name">Rascode</span><i class="fh-icon fh-icon--chevron-down fh-crumb__caret" aria-hidden="true"></i></button><div id="mst-44-o" popover="manual" class="fh-menu fh-menu--rich fh-crumb-menu" role="menu" aria-label="Organizations" data-fh="MST-5.3" data-fh-slot="body"><div class="fh-crumb-menu__search"><input type="search" aria-label="Filter organizations" placeholder="Filter organizations" value autocomplete="off"></div><div class="fh-crumb-menu__list"><p class="fh-menu__label" data-fh-slot="label">Recent</p><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="true" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="amber" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">R</span></span><span class="fh-crumb__name" data-fh-slot="name">Rascode</span><span class="fh-crumb__meta" data-fh-slot="meta">Company · Rascode and Company</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="sky" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">A</span></span><span class="fh-crumb__name" data-fh-slot="name">Acme Supply</span><span class="fh-crumb__meta" data-fh-slot="meta">Company · Acme Holdings</span></a><p class="fh-menu__label" data-fh-slot="label">All organizations</p><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="lime" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">B</span></span><span class="fh-crumb__name" data-fh-slot="name">Birch &amp; Co</span><span class="fh-crumb__meta" data-fh-slot="meta">Partnership</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="violet" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">C</span></span><span class="fh-crumb__name" data-fh-slot="name">Cobalt Studio</span><span class="fh-crumb__meta" data-fh-slot="meta">Company · Cobalt Group</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="rose" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">N</span></span><span class="fh-crumb__name" data-fh-slot="name">Northwind Traders</span><span class="fh-crumb__meta" data-fh-slot="meta">Company</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="orange" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">O</span></span><span class="fh-crumb__name" data-fh-slot="name">Ostrich Ltd</span><span class="fh-crumb__meta" data-fh-slot="meta">Sole proprietor</span></a></div><p class="fh-crumb-menu__status" data-empty hidden data-fh-slot="chips">Nothing matches.</p></div></li></ol></nav><div class="fh-masthead__tools"><button class="fh-button fh-button--disc" type="button" aria-label="Search" data-fh="BTN-4" data-fh-slot="actions"><i class="fh-icon fh-icon--search" aria-hidden="true"></i></button><button class="fh-profile fh-profile--compact" type="button" aria-label="Justin Rascoe" data-fh="PRF-1.2" data-fh-slot="body"><span class="fh-avatar fh-avatar--circle" data-tone="sky" data-fh="AVT" data-fh-slot="media">JR</span></button></div></header></div>
    </div>
  </div>
  <p class="fh-small fh-muted">Live: hover a crumb (its chevron shows on hover), click it, or Tab to it and press Enter or the down arrow. Then at 56rem, 40rem and 24rem.</p>
  <div style="inline-size: 56rem; max-inline-size: 100%; margin-inline: auto"><header class="fh-masthead fh-masthead--app fh-masthead--app-crumbs" data-fh="MST-4.4"><nav class="fh-crumbs" aria-label="Breadcrumb" data-fh-slot="body"><ol class="fh-crumbs__list"><li class="fh-crumb fh-crumb--area" data-fh-slot="body"><button class="fh-crumb__button" type="button" aria-haspopup="menu" aria-expanded="false" aria-label="Organizations, switch area"><span class="fh-sidebar__cube" data-tone="sky" aria-hidden="true" data-fh-slot="media"><i class="fh-icon fh-icon--building-2" aria-hidden="true"></i></span><span class="fh-crumb__name" data-fh-slot="name">Organizations</span><i class="fh-icon fh-icon--chevron-down fh-crumb__caret" aria-hidden="true"></i></button></li><li class="fh-crumb fh-crumb--record" data-fh-slot="body"><i class="fh-icon fh-icon--chevron-right fh-crumb__sep" aria-hidden="true"></i><button class="fh-crumb__button" type="button" aria-haspopup="menu" aria-expanded="false" aria-current="page" aria-label="Rascode, switch organization"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="amber" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">R</span></span><span class="fh-crumb__name" data-fh-slot="name">Rascode</span><i class="fh-icon fh-icon--chevron-down fh-crumb__caret" aria-hidden="true"></i></button></li></ol></nav><div class="fh-masthead__tools"><button class="fh-button fh-button--disc" type="button" aria-label="Search" data-fh="BTN-4" data-fh-slot="actions"><i class="fh-icon fh-icon--search" aria-hidden="true"></i></button><button class="fh-profile fh-profile--compact" type="button" aria-label="Justin Rascoe" data-fh="PRF-1.2" data-fh-slot="body"><span class="fh-avatar fh-avatar--circle" data-tone="sky" data-fh="AVT" data-fh-slot="media">JR</span></button></div></header></div>
  <div style="inline-size: 40rem; max-inline-size: 100%; margin-inline: auto"><header class="fh-masthead fh-masthead--app fh-masthead--app-crumbs" data-fh="MST-4.4"><nav class="fh-crumbs" aria-label="Breadcrumb" data-fh-slot="body"><ol class="fh-crumbs__list"><li class="fh-crumb fh-crumb--area" data-fh-slot="body"><button class="fh-crumb__button" type="button" aria-haspopup="menu" aria-expanded="false" aria-label="Organizations, switch area"><span class="fh-sidebar__cube" data-tone="sky" aria-hidden="true" data-fh-slot="media"><i class="fh-icon fh-icon--building-2" aria-hidden="true"></i></span><span class="fh-crumb__name" data-fh-slot="name">Organizations</span><i class="fh-icon fh-icon--chevron-down fh-crumb__caret" aria-hidden="true"></i></button></li><li class="fh-crumb fh-crumb--record" data-fh-slot="body"><i class="fh-icon fh-icon--chevron-right fh-crumb__sep" aria-hidden="true"></i><button class="fh-crumb__button" type="button" aria-haspopup="menu" aria-expanded="false" aria-current="page" aria-label="Rascode, switch organization"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="amber" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">R</span></span><span class="fh-crumb__name" data-fh-slot="name">Rascode</span><i class="fh-icon fh-icon--chevron-down fh-crumb__caret" aria-hidden="true"></i></button></li></ol></nav><div class="fh-masthead__tools"><button class="fh-button fh-button--disc" type="button" aria-label="Search" data-fh="BTN-4" data-fh-slot="actions"><i class="fh-icon fh-icon--search" aria-hidden="true"></i></button><button class="fh-profile fh-profile--compact" type="button" aria-label="Justin Rascoe" data-fh="PRF-1.2" data-fh-slot="body"><span class="fh-avatar fh-avatar--circle" data-tone="sky" data-fh="AVT" data-fh-slot="media">JR</span></button></div></header></div>
  <div style="inline-size: 24rem; max-inline-size: 100%; margin-inline: auto"><header class="fh-masthead fh-masthead--app fh-masthead--app-crumbs" data-fh="MST-4.4"><button class="fh-button fh-button--disc fh-crumbs__sheet" type="button" aria-label="Open menu" data-fh="BTN-4" data-fh-slot="actions"><i class="fh-icon fh-icon--menu" aria-hidden="true"></i></button><nav class="fh-crumbs" aria-label="Breadcrumb" data-fh-slot="body"><ol class="fh-crumbs__list"><li class="fh-crumb fh-crumb--area" data-fh-slot="body"><button class="fh-crumb__button" type="button" aria-haspopup="menu" aria-expanded="false" aria-label="Organizations, switch area"><span class="fh-sidebar__cube" data-tone="sky" aria-hidden="true" data-fh-slot="media"><i class="fh-icon fh-icon--building-2" aria-hidden="true"></i></span><span class="fh-crumb__name" data-fh-slot="name">Organizations</span><i class="fh-icon fh-icon--chevron-down fh-crumb__caret" aria-hidden="true"></i></button></li><li class="fh-crumb fh-crumb--record" data-fh-slot="body"><i class="fh-icon fh-icon--chevron-right fh-crumb__sep" aria-hidden="true"></i><button class="fh-crumb__button" type="button" aria-haspopup="menu" aria-expanded="false" aria-current="page" aria-label="Rascode, switch organization"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="amber" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">R</span></span><span class="fh-crumb__name" data-fh-slot="name">Rascode</span><i class="fh-icon fh-icon--chevron-down fh-crumb__caret" aria-hidden="true"></i></button></li></ol></nav><div class="fh-masthead__tools"><button class="fh-button fh-button--disc" type="button" aria-label="Search" data-fh="BTN-4" data-fh-slot="actions"><i class="fh-icon fh-icon--search" aria-hidden="true"></i></button><button class="fh-profile fh-profile--compact" type="button" aria-label="Justin Rascoe" data-fh="PRF-1.2" data-fh-slot="body"><span class="fh-avatar fh-avatar--circle" data-tone="sky" data-fh="AVT" data-fh-slot="media">JR</span></button></div></header></div>
</div>
```

### MST-5 · Crumb trail

#### MST-5.1 · Area crumb

```html
<div class="fh-stack fh-stack--lg">
  <div style="display: grid; gap: var(--fh-gap-related); justify-items: start">
    <div style="inline-size: 100%; max-inline-size: 24rem"><header class="fh-masthead fh-masthead--app fh-masthead--app-crumbs" data-fh="MST-5.1"><nav class="fh-crumbs" aria-label="Breadcrumb" data-fh-slot="body"><ol class="fh-crumbs__list"><li class="fh-crumb fh-crumb--area" data-fh-slot="body"><button class="fh-crumb__button" type="button" aria-haspopup="menu" aria-expanded="false" aria-label="Organizations, switch area"><span class="fh-sidebar__cube" data-tone="sky" aria-hidden="true" data-fh-slot="media"><i class="fh-icon fh-icon--building-2" aria-hidden="true"></i></span><span class="fh-crumb__name" data-fh-slot="name">Organizations</span><i class="fh-icon fh-icon--chevron-down fh-crumb__caret" aria-hidden="true"></i></button></li></ol></nav><div class="fh-masthead__tools"><button class="fh-button fh-button--disc" type="button" aria-label="Search" data-fh="BTN-4" data-fh-slot="actions"><i class="fh-icon fh-icon--search" aria-hidden="true"></i></button><button class="fh-profile fh-profile--compact" type="button" aria-label="Justin Rascoe" data-fh="PRF-1.2" data-fh-slot="body"><span class="fh-avatar fh-avatar--circle" data-tone="sky" data-fh="AVT" data-fh-slot="media">JR</span></button></div></header></div>
    <div class="fh-menu fh-menu--rich fh-crumb-menu" role="menu" aria-label="Areas (static)" style="position: static; display: flex; opacity: 1; translate: none; margin: 0" data-fh="MST-5.1"><div class="fh-crumb-menu__search"><input type="search" aria-label="Filter areas" placeholder="Filter areas" value autocomplete="off"></div><div class="fh-crumb-menu__list"><p class="fh-menu__label" data-fh-slot="label">Work</p><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-crumb__mark" aria-hidden="true"><span class="fh-sidebar__cube" data-tone="sky" data-fh-slot="media"><i class="fh-icon fh-icon--sun" aria-hidden="true"></i></span></span><span class="fh-crumb__name" data-fh-slot="name">Today</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-crumb__mark" aria-hidden="true"><span class="fh-sidebar__cube" data-tone="teal" data-fh-slot="media"><i class="fh-icon fh-icon--target" aria-hidden="true"></i></span></span><span class="fh-crumb__name" data-fh-slot="name">Goals</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead" data-depth="1"><span class="fh-crumb__name" data-fh-slot="name">Active</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead" data-depth="1"><span class="fh-crumb__name" data-fh-slot="name">Archived</span></a><p class="fh-menu__label" data-fh-slot="label">Records</p><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="true" tabindex="-1" href="#l-masthead"><span class="fh-crumb__mark" aria-hidden="true"><span class="fh-sidebar__cube" data-tone="sky" data-fh-slot="media"><i class="fh-icon fh-icon--building-2" aria-hidden="true"></i></span></span><span class="fh-crumb__name" data-fh-slot="name">Organizations</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-crumb__mark" aria-hidden="true"><span class="fh-sidebar__cube" data-tone="amber" data-fh-slot="media"><i class="fh-icon fh-icon--users" aria-hidden="true"></i></span></span><span class="fh-crumb__name" data-fh-slot="name">People</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-crumb__mark" aria-hidden="true"><span class="fh-sidebar__cube" data-tone="neutral" data-fh-slot="media"><i class="fh-icon fh-icon--settings" aria-hidden="true"></i></span></span><span class="fh-crumb__name" data-fh-slot="name">Settings</span></a></div><p class="fh-crumb-menu__status" data-empty hidden data-fh-slot="chips">Nothing matches.</p></div>
  </div>
</div>
```

#### MST-5.2 · Record crumb

```html
<div class="fh-stack fh-stack--md">
  <p class="fh-small fh-muted">A record crumb (cube and name), another record kind, and a long name (truncated).</p>
  <header class="fh-masthead fh-masthead--app fh-masthead--app-crumbs" data-fh="MST-5.2"><nav class="fh-crumbs" aria-label="Breadcrumb" data-fh-slot="body"><ol class="fh-crumbs__list"><li class="fh-crumb fh-crumb--area" data-fh-slot="body"><button class="fh-crumb__button" type="button" aria-haspopup="menu" aria-expanded="false" aria-label="Organizations, switch area"><span class="fh-sidebar__cube" data-tone="sky" aria-hidden="true" data-fh-slot="media"><i class="fh-icon fh-icon--building-2" aria-hidden="true"></i></span><span class="fh-crumb__name" data-fh-slot="name">Organizations</span><i class="fh-icon fh-icon--chevron-down fh-crumb__caret" aria-hidden="true"></i></button></li><li class="fh-crumb fh-crumb--record" data-fh-slot="body"><i class="fh-icon fh-icon--chevron-right fh-crumb__sep" aria-hidden="true"></i><button class="fh-crumb__button" type="button" aria-haspopup="menu" aria-expanded="false" aria-current="page" aria-label="Rascode, switch organization"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="amber" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">R</span></span><span class="fh-crumb__name" data-fh-slot="name">Rascode</span><i class="fh-icon fh-icon--chevron-down fh-crumb__caret" aria-hidden="true"></i></button></li></ol></nav><div class="fh-masthead__tools"><button class="fh-button fh-button--disc" type="button" aria-label="Search" data-fh="BTN-4" data-fh-slot="actions"><i class="fh-icon fh-icon--search" aria-hidden="true"></i></button><button class="fh-profile fh-profile--compact" type="button" aria-label="Justin Rascoe" data-fh="PRF-1.2" data-fh-slot="body"><span class="fh-avatar fh-avatar--circle" data-tone="sky" data-fh="AVT" data-fh-slot="media">JR</span></button></div></header>
  <header class="fh-masthead fh-masthead--app fh-masthead--app-crumbs" data-fh="MST-5.2"><nav class="fh-crumbs" aria-label="Breadcrumb" data-fh-slot="body"><ol class="fh-crumbs__list"><li class="fh-crumb fh-crumb--area" data-fh-slot="body"><button class="fh-crumb__button" type="button" aria-haspopup="menu" aria-expanded="false" aria-label="Organizations, switch area"><span class="fh-sidebar__cube" data-tone="sky" aria-hidden="true" data-fh-slot="media"><i class="fh-icon fh-icon--building-2" aria-hidden="true"></i></span><span class="fh-crumb__name" data-fh-slot="name">Organizations</span><i class="fh-icon fh-icon--chevron-down fh-crumb__caret" aria-hidden="true"></i></button></li><li class="fh-crumb fh-crumb--record" data-fh-crumb data-fh-slot="body"><i class="fh-icon fh-icon--chevron-right fh-crumb__sep" aria-hidden="true"></i><button class="fh-crumb__button" type="button" aria-haspopup="menu" aria-expanded="false" aria-controls="mst-44-b" aria-current="page" aria-label="Rascode Design, switch business"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="teal" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">B</span></span><span class="fh-crumb__name" data-fh-slot="name">Rascode Design</span><i class="fh-icon fh-icon--chevron-down fh-crumb__caret" aria-hidden="true"></i></button><div id="mst-44-b" popover="manual" class="fh-menu fh-menu--rich fh-crumb-menu" role="menu" aria-label="Businesses" data-fh="MST-5.3" data-fh-slot="body"><div class="fh-crumb-menu__search"><input type="search" aria-label="Filter businesses" placeholder="Filter businesses" value autocomplete="off"></div><div class="fh-crumb-menu__list"><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="true" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="teal" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">B</span></span><span class="fh-crumb__name" data-fh-slot="name">Rascode Design</span><span class="fh-crumb__meta" data-fh-slot="meta">Business · Brand studio</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="violet" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">L</span></span><span class="fh-crumb__name" data-fh-slot="name">Rascode Labs</span><span class="fh-crumb__meta" data-fh-slot="meta">Business · Product</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="rose" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">P</span></span><span class="fh-crumb__name" data-fh-slot="name">Rascode Press</span><span class="fh-crumb__meta" data-fh-slot="meta">Business · Publishing</span></a></div><p class="fh-crumb-menu__status" data-empty hidden data-fh-slot="chips">Nothing matches.</p></div></li></ol></nav><div class="fh-masthead__tools"><button class="fh-button fh-button--disc" type="button" aria-label="Search" data-fh="BTN-4" data-fh-slot="actions"><i class="fh-icon fh-icon--search" aria-hidden="true"></i></button><button class="fh-profile fh-profile--compact" type="button" aria-label="Justin Rascoe" data-fh="PRF-1.2" data-fh-slot="body"><span class="fh-avatar fh-avatar--circle" data-tone="sky" data-fh="AVT" data-fh-slot="media">JR</span></button></div></header>
  <div style="max-inline-size: 60rem"><header class="fh-masthead fh-masthead--app fh-masthead--app-crumbs" data-fh="MST-5.2"><nav class="fh-crumbs" aria-label="Breadcrumb" data-fh-slot="body"><ol class="fh-crumbs__list"><li class="fh-crumb fh-crumb--area" data-fh-slot="body"><button class="fh-crumb__button" type="button" aria-haspopup="menu" aria-expanded="false" aria-label="Organizations, switch area"><span class="fh-sidebar__cube" data-tone="sky" aria-hidden="true" data-fh-slot="media"><i class="fh-icon fh-icon--building-2" aria-hidden="true"></i></span><span class="fh-crumb__name" data-fh-slot="name">Organizations</span><i class="fh-icon fh-icon--chevron-down fh-crumb__caret" aria-hidden="true"></i></button></li><li class="fh-crumb fh-crumb--record" data-fh-slot="body"><i class="fh-icon fh-icon--chevron-right fh-crumb__sep" aria-hidden="true"></i><button class="fh-crumb__button" type="button" aria-haspopup="menu" aria-expanded="false" aria-current="page" aria-label="The Rascode Organization for Applied Design Research and Education, switch organization"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="amber" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">R</span></span><span class="fh-crumb__name" data-fh-slot="name">The Rascode Organization for Applied Design Research and Education</span><i class="fh-icon fh-icon--chevron-down fh-crumb__caret" aria-hidden="true"></i></button></li></ol></nav><div class="fh-masthead__tools"><button class="fh-button fh-button--disc" type="button" aria-label="Search" data-fh="BTN-4" data-fh-slot="actions"><i class="fh-icon fh-icon--search" aria-hidden="true"></i></button><button class="fh-profile fh-profile--compact" type="button" aria-label="Justin Rascoe" data-fh="PRF-1.2" data-fh-slot="body"><span class="fh-avatar fh-avatar--circle" data-tone="sky" data-fh="AVT" data-fh-slot="media">JR</span></button></div></header></div>
</div>
```

#### MST-5.3 · Switcher menu

```html
<div class="fh-cluster" style="align-items: start; gap: var(--fh-gap-grouped); flex-wrap: wrap">
  <div class="fh-menu fh-menu--rich fh-crumb-menu" role="menu" aria-label="Organizations (static)" style="position: static; display: flex; opacity: 1; translate: none; margin: 0" data-fh="MST-5.3"><div class="fh-crumb-menu__search"><input type="search" aria-label="Filter organizations" placeholder="Filter organizations" value autocomplete="off"></div><div class="fh-crumb-menu__list"><p class="fh-menu__label" data-fh-slot="label">Recent</p><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="true" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="amber" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">R</span></span><span class="fh-crumb__name" data-fh-slot="name">Rascode</span><span class="fh-crumb__meta" data-fh-slot="meta">Company · Rascode and Company</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="sky" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">A</span></span><span class="fh-crumb__name" data-fh-slot="name">Acme Supply</span><span class="fh-crumb__meta" data-fh-slot="meta">Company · Acme Holdings</span></a><p class="fh-menu__label" data-fh-slot="label">All organizations</p><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="lime" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">B</span></span><span class="fh-crumb__name" data-fh-slot="name">Birch &amp; Co</span><span class="fh-crumb__meta" data-fh-slot="meta">Partnership</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="violet" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">C</span></span><span class="fh-crumb__name" data-fh-slot="name">Cobalt Studio</span><span class="fh-crumb__meta" data-fh-slot="meta">Company · Cobalt Group</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="rose" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">N</span></span><span class="fh-crumb__name" data-fh-slot="name">Northwind Traders</span><span class="fh-crumb__meta" data-fh-slot="meta">Company</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="orange" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">O</span></span><span class="fh-crumb__name" data-fh-slot="name">Ostrich Ltd</span><span class="fh-crumb__meta" data-fh-slot="meta">Sole proprietor</span></a></div><p class="fh-crumb-menu__status" data-empty hidden data-fh-slot="chips">Nothing matches.</p></div>
  <div class="fh-menu fh-menu--rich fh-crumb-menu" role="menu" aria-label="Organizations (filtered)" style="position: static; display: flex; opacity: 1; translate: none; margin: 0" data-fh="MST-5.3"><div class="fh-crumb-menu__search"><input type="search" aria-label="Filter organizations" placeholder="Filter organizations" value="co" autocomplete="off"></div><div class="fh-crumb-menu__list"><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="violet" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">C</span></span><span class="fh-crumb__name" data-fh-slot="name">Cobalt Studio</span><span class="fh-crumb__meta" data-fh-slot="meta">Company · Cobalt Group</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="true" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="amber" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">R</span></span><span class="fh-crumb__name" data-fh-slot="name">Rascode</span><span class="fh-crumb__meta" data-fh-slot="meta">Company · Rascode and Company</span></a></div><p class="fh-crumb-menu__status" data-empty hidden data-fh-slot="chips">Nothing matches.</p></div>
  <div class="fh-menu fh-menu--rich fh-crumb-menu" role="menu" aria-label="Organizations (loading)" data-state="loading" style="position: static; display: flex; opacity: 1; translate: none; margin: 0" data-fh="MST-5.3"><div class="fh-crumb-menu__search"><input type="search" aria-label="Filter organizations" placeholder="Filter organizations" value autocomplete="off"></div><div class="fh-crumb-menu__list"></div><p class="fh-crumb-menu__status" data-empty hidden data-fh-slot="chips">Nothing matches.</p></div>
  <div class="fh-menu fh-menu--rich fh-crumb-menu" role="menu" aria-label="Organizations (empty)" style="position: static; display: flex; opacity: 1; translate: none; margin: 0" data-fh="MST-5.3"><div class="fh-crumb-menu__search"><input type="search" aria-label="Filter organizations" placeholder="Filter organizations" value="zzz" autocomplete="off"></div><div class="fh-crumb-menu__list"><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead" hidden><span class="fh-sidebar__cube fh-crumb__mark" data-tone="amber" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">R</span></span><span class="fh-crumb__name" data-fh-slot="name">Rascode</span><span class="fh-crumb__meta" data-fh-slot="meta">Company</span></a></div><p class="fh-crumb-menu__status" data-empty data-fh-slot="chips">Nothing matches.</p></div>
  <div class="fh-menu fh-menu--rich fh-crumb-menu" role="menu" aria-label="Organizations (long list)" style="position: static; display: flex; opacity: 1; translate: none; margin: 0" data-fh="MST-5.3"><div class="fh-crumb-menu__search"><input type="search" aria-label="Filter organizations" placeholder="Filter organizations" value autocomplete="off"></div><div class="fh-crumb-menu__list"><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="true" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="amber" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">R</span></span><span class="fh-crumb__name" data-fh-slot="name">Rascode</span><span class="fh-crumb__meta" data-fh-slot="meta">Company</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="sky" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">A</span></span><span class="fh-crumb__name" data-fh-slot="name">Acme Supply</span><span class="fh-crumb__meta" data-fh-slot="meta">Company</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="lime" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">B</span></span><span class="fh-crumb__name" data-fh-slot="name">Birch &amp; Co</span><span class="fh-crumb__meta" data-fh-slot="meta">Company</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="violet" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">C</span></span><span class="fh-crumb__name" data-fh-slot="name">Cobalt Studio</span><span class="fh-crumb__meta" data-fh-slot="meta">Company</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="teal" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">D</span></span><span class="fh-crumb__name" data-fh-slot="name">Delta Freight</span><span class="fh-crumb__meta" data-fh-slot="meta">Company</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="rose" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">E</span></span><span class="fh-crumb__name" data-fh-slot="name">Ember Labs</span><span class="fh-crumb__meta" data-fh-slot="meta">Company</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="orange" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">F</span></span><span class="fh-crumb__name" data-fh-slot="name">Fathom Partners</span><span class="fh-crumb__meta" data-fh-slot="meta">Company</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="fuchsia" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">G</span></span><span class="fh-crumb__name" data-fh-slot="name">Granite Works</span><span class="fh-crumb__meta" data-fh-slot="meta">Company</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="amber" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">H</span></span><span class="fh-crumb__name" data-fh-slot="name">Harbor Foods</span><span class="fh-crumb__meta" data-fh-slot="meta">Company</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="sky" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">I</span></span><span class="fh-crumb__name" data-fh-slot="name">Ivory Press</span><span class="fh-crumb__meta" data-fh-slot="meta">Company</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="lime" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">J</span></span><span class="fh-crumb__name" data-fh-slot="name">Juniper Health</span><span class="fh-crumb__meta" data-fh-slot="meta">Company</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="violet" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">K</span></span><span class="fh-crumb__name" data-fh-slot="name">Kestrel Air</span><span class="fh-crumb__meta" data-fh-slot="meta">Company</span></a></div><p class="fh-crumb-menu__status" data-empty hidden data-fh-slot="chips">Nothing matches.</p></div>
</div>
```

## BKD · Backdrop

A quiet abstract picture behind a whole page or app: soft tone fields under the sign-in page's etched contours, fixed to the viewport, or a blueprint sheet with data-fh-backdrop="blueprint". --fh-backdrop-strength sets how much tone or grid shows. A grid of option tiles with data-fh-backdrop-select picks the backdrop and remembers it. Glass over it frosts by --fh-frost (0–1), a theme token; a range with data-fh-frost-select dials it live and remembers it. The frost line frosts the art behind a hero from a line down, with a hard edge: --fh-backdrop-frost-from places the line.

Layer: composite. Slots: `body` `label` `fields` `items`.

Classes: `fh-backdrop` `fh-field` `fh-field__label` `fh-range` `fh-backdrop--frost` `fh-grid` `fh-tiles` `fh-tiles--options` `fh-tile` `fh-tile--option` `fh-tile__media` `fh-tile__title` `fh-tile__note` `fh-icon` `fh-tile__go` `fh-sr-only`

### BKD-1 · Backdrop

#### BKD-1.1 · Backdrop

```html
<div class="fh-backdrop" aria-hidden="true" style="position: absolute" data-fh="BKD-1.1"></div>
```

#### BKD-1.2 · Frost slider

```html
<label class="fh-field" style="position: relative; z-index: 1; max-inline-size: 16rem; margin-block-end: var(--fh-space-4)" data-fh="BKD-1.2"><span class="fh-field__label" data-fh-slot="label">Frost</span><input class="fh-range" type="range" min="0" max="100" value="60" data-fh-frost-select data-fh="UPL" data-fh-slot="fields"></label>
```

### BKD-2 · Frost

#### BKD-2.1 · Frost line

```html
<div style="position: relative; overflow: hidden; contain: paint; min-block-size: 16rem; margin-block-start: var(--fh-space-6); border-radius: var(--fh-radius-sm); border: var(--fh-border-thin) var(--fh-card-border-style, dashed) var(--fh-color-etch)">
  <div style="position: absolute; inset: 0; background-color: var(--fh-color-text); mask: url(/img/backdrop/firehorse-horse.webp) center 30% / cover no-repeat" aria-hidden="true"></div>
  <div class="fh-backdrop fh-backdrop--frost" style="--fh-backdrop-frost-from: 55%" aria-hidden="true" data-fh="BKD-2.1"></div>
</div>
```

### BKD-3 · Blueprint

#### BKD-3.1 · Blueprint

```html
<div class="fh-grid" data-cols="2" style="--fh-grid-min: 10rem; --fh-gap: var(--fh-space-4); position: relative; z-index: 1; margin-block-start: var(--fh-space-6)">
  <div data-fh-scheme="light" style="position: relative; overflow: hidden; contain: paint; min-block-size: 11rem; border-radius: var(--fh-radius-sm); border: var(--fh-border-thin) var(--fh-card-border-style, dashed) var(--fh-color-etch)">
    <div class="fh-backdrop" data-fh-backdrop="blueprint" style="position: absolute" aria-hidden="true" data-fh="BKD-3.1"></div>
  </div>
  <div data-fh-scheme="dark" style="position: relative; overflow: hidden; contain: paint; min-block-size: 11rem; border-radius: var(--fh-radius-sm); border: var(--fh-border-thin) var(--fh-card-border-style, dashed) var(--fh-color-etch)">
    <div class="fh-backdrop" data-fh-backdrop="blueprint" style="position: absolute" aria-hidden="true" data-fh="BKD-3.1"></div>
  </div>
</div>
```

### BKD-4 · Chooser

#### BKD-4.1 · Background chooser

```html
<ul class="fh-tiles fh-tiles--options" aria-label="Backdrop" style="position: relative; z-index: 1; max-inline-size: 40rem; margin-block-start: var(--fh-space-6)" data-fh="BKD-4.1">
  <li><button class="fh-tile fh-tile--option" type="button" data-fh-backdrop-select data-backdrop="default" aria-pressed="true" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__media" style="background-color: var(--fh-color-canvas); background-image: radial-gradient(42% 48% at 16% 22%, color-mix(in oklab, var(--fh-tone-violet) 22%, transparent), transparent 72%), radial-gradient(38% 42% at 82% 78%, color-mix(in oklab, var(--fh-tone-teal) 16%, transparent), transparent 72%)" data-fh-slot="media"></span><b class="fh-tile__title" data-fh-slot="title">Default</b><span class="fh-tile__note" data-fh-slot="note">Tone · etched art</span><i class="fh-icon fh-icon--check fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button></li>
  <li><button class="fh-tile fh-tile--option" type="button" data-fh-backdrop-select data-backdrop="blueprint" aria-pressed="false" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__media" style="background-color: light-dark(color-mix(in oklab, var(--fh-color-canvas) 94%, var(--fh-tone-sky)), color-mix(in oklab, var(--fh-color-canvas) 72%, var(--fh-tone-sky))); background-image: linear-gradient(light-dark(color-mix(in oklab, var(--fh-tone-sky) 26%, transparent), var(--fh-color-etch)) 1px, transparent 1px), linear-gradient(90deg, light-dark(color-mix(in oklab, var(--fh-tone-sky) 26%, transparent), var(--fh-color-etch)) 1px, transparent 1px); background-size: 16px 16px" data-fh-slot="media"></span><b class="fh-tile__title" data-fh-slot="title">Blueprint</b><span class="fh-tile__note" data-fh-slot="note">Grid · drafting sheet</span><i class="fh-icon fh-icon--check fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button></li>
  <li><button class="fh-tile fh-tile--option" type="button" data-fh-backdrop-select data-backdrop="image" data-image="/img/backdrop/hv-hat-thumb.webp" aria-pressed="false" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__media" data-fh-slot="media"><img src="/img/backdrop/hv-hat-thumb.webp" alt loading="lazy"></span><b class="fh-tile__title" data-fh-slot="title">Photo</b><span class="fh-tile__note" data-fh-slot="note">Image · still</span><i class="fh-icon fh-icon--check fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button></li>
  <li><label class="fh-tile fh-tile--option" data-fh="TIL" data-fh-slot="items"><input type="file" accept="image/*" class="fh-sr-only" data-fh-backdrop-select data-backdrop="image"><span class="fh-tile__media" style="display: grid; place-items: center; border: var(--fh-border-thin) dashed var(--fh-color-etch); color: var(--fh-color-text-muted); font-family: var(--fh-font-mono); font-size: var(--fh-text-lede)" data-fh-slot="media">+</span><b class="fh-tile__title" data-fh-slot="title">Add an image</b><span class="fh-tile__note" data-fh-slot="note">Your file</span><i class="fh-icon fh-icon--check fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></label></li>
</ul>
```

## FND · Fender

A long page that changes gear partway. A note closes the first chapter and opens a tinted band that hangs down the rest of the page, the way a fender hangs down the side of a saddle: through the next section, under its full-width content and through a tall footer to the bottom.

Layer: section. Slots: `body` `items`.

Classes: `fh-page` `fh-main` `fh-section` `fh-grid` `fh-card` `fh-card--solid` `fh-label` `fh-small` `fh-muted` `fh-section--ruled` `fh-section-head` `fh-panel-inset` `fh-subheading` `fh-footer` `fh-footer--tall` `fh-footer__columns` `fh-footer__column` `fh-panel`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/patterns/fender/.

## CIN · Cinch

A page's opening argument, right under its sub-nav: the claim on the left, the substance on the right, held together by one line the way a cinch holds both sides of a saddle. Two panes, two tones, one number to end on.

Layer: section. Slots: `body`.

Classes: `fh-section` `fh-section--flush` `fh-etched-split` `fh-etched-split--roomy` `fh-bleed` `fh-etched-split__pane` `fh-crosses` `fh-stack` `fh-eyebrow-pill` `fh-dot` `fh-dot--live` `fh-heading` `fh-lede` `fh-body` `fh-muted`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/patterns/cinch/.

## PNL · Offset panel

A tinted column that begins where you mark it and runs to the bottom of the page, through every section below and the footer. Its fill against the open canvas splits the page in two tones; its dashed edges run the full height. Content stepping onto it takes .fh-panel-inset. Fender is built on it.

Layer: composite. Slots: `body`.

Classes: `fh-page` `fh-main` `fh-section` `fh-label` `fh-small` `fh-muted` `fh-section--ruled` `fh-section-head` `fh-panel-inset` `fh-subheading` `fh-footer` `fh-footer--tall` `fh-footer__columns` `fh-footer__column` `fh-panel`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/patterns/offset-panel/.

## ESP · Etched split

A full-bleed pair that breaks out of the content column while its copy still lines up with the content edge on both sides. Stacks when the page is narrow. --roomy gives each pane the full section rhythm. Cinch is built on it.

Layer: composite.

Classes: `fh-etched-split` `fh-bleed` `fh-etched-split__pane` `fh-crosses` `fh-stack` `fh-stack--lg` `fh-eyebrow-pill` `fh-dot` `fh-dot--live` `fh-heading` `fh-lede` `fh-checklist`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/patterns/etched-split/.

## CTB · CTA band

The closing ask. A display-size title and the actions on the left; the proof on the right behind a dashed seam: what it costs and takes, who you'll talk to, one line of fine print. A short tone bar rides the top edge. Stacks when the slot is narrow; label, heading, lede and actions on their own still make the simple band.

Layer: composite. Slots: `eyebrow` `title` `actions` `media` `who` `body` `note`.

Classes: `fh-cta-band` `fh-crosses` `fh-cta-band__main` `fh-eyebrow-pill` `fh-dot` `fh-dot--live` `fh-cta-band__title` `fh-lede` `fh-hero__actions` `fh-button` `fh-button--secondary` `fh-cta-band__aside` `fh-cubes` `fh-cube` `fh-cube--lg` `fh-cta-band__people` `fh-avatars` `fh-avatar` `fh-cta-band__fine`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/patterns/cta-band/.

## BTN · Button

Flat 3px rect, mono caps, solid fill (data-fh-button="convex" for the bevelled one). Primary buttons get an arrow; data-tone lights the top edge; --lg is the one size step (the text, nothing else). --flat is solid black with white text in every scheme. --disc is one glyph on a round disc, in the text colour or, with data-tone, in a tone. --etched is a frosted pill with a dashed etch edge and an ↑, for a trigger that opens something over art.

Layer: part.

Classes: `fh-button` `fh-roll` `fh-button--lg` `fh-button--secondary` `fh-button--accent` `fh-button--flat` `fh-button--outline` `fh-button--ghost` `fh-button--disc` `fh-icon` `fh-button--etched`

### BTN-1 · Solid

#### BTN-1.1 · Primary

```html
<a class="fh-button" href="#c-button" data-fh="BTN-1.1"><span class="fh-roll">Discuss a project</span></a>
```

#### BTN-1.2 · Tone edge

```html
<a class="fh-button" href="#c-button" data-tone="sky" data-fh="BTN-1.2">Tone edge</a>
```

#### BTN-1.3 · Large

```html
<a class="fh-button fh-button--lg" href="#c-button" data-fh="BTN-1.3">Discuss a project</a>
```

#### BTN-1.4 · Large, toned

```html
<a class="fh-button fh-button--lg" href="#c-button" data-tone="sky" data-fh="BTN-1.4">Tone edge</a>
```

#### BTN-1.5 · Secondary

```html
<button class="fh-button fh-button--secondary" type="button" data-fh="BTN-1.5">Secondary</button>
```

#### BTN-1.6 · Accent

```html
<button class="fh-button fh-button--accent" type="button" data-fh="BTN-1.6">Accent</button>
```

#### BTN-1.7 · Flat

```html
<button class="fh-button fh-button--flat" type="button" data-fh="BTN-1.7">Flat</button>
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

#### BTN-3.2 · Disabled

```html
<button class="fh-button" type="button" disabled data-fh="BTN-3.2">Disabled</button>
```

### BTN-4 · Round icon

#### BTN-4.1 · Disc

```html
<button class="fh-button fh-button--disc" type="button" aria-label="Typeface" data-fh="BTN-4.1"><i class="fh-icon fh-icon--type" aria-hidden="true"></i></button>
```

#### BTN-4.2 · Disc, tone

```html
<button class="fh-button fh-button--disc" type="button" data-tone="accent" aria-label="Theme colour" data-fh="BTN-4.2"><i class="fh-icon fh-icon--palette" aria-hidden="true"></i></button>
```

### BTN-5 · Etched pill

#### BTN-5.1 · Etched pill

```html
<button class="fh-button fh-button--etched" type="button" data-fh="BTN-5.1">Send to an agent</button>
```

## ACT · Action & link

Section CTAs and card actions: mono caps with a dashed underline and an arrow, at the caption size or one step larger (--lg), each in the ink or a tone (data-tone). Text links for running copy. A scroll cue is a line of heavy mono caps that ends in a down arrow, for under a hero; underline a phrase in it with fh-action__phrase.

Layer: part.

Classes: `fh-action` `fh-action--lg` `fh-link` `fh-link--quiet` `fh-action--cue` `fh-action__phrase`

### ACT-1 · Action

#### ACT-1.1 · Action

```html
<a class="fh-action" href="#c-action" data-fh="ACT-1.1">View all</a>
```

#### ACT-1.2 · Toned

```html
<a class="fh-action" data-tone="teal" href="#c-action" data-fh="ACT-1.2">Explore data architecture</a>
```

#### ACT-1.3 · Large

```html
<a class="fh-action fh-action--lg" href="#c-action" data-fh="ACT-1.3">View all services</a>
```

#### ACT-1.4 · Large, toned

```html
<a class="fh-action fh-action--lg" data-tone="teal" href="#c-action" data-fh="ACT-1.4">Explore every service</a>
```

### ACT-2 · Link

#### ACT-2.1 · Text link

```html
<a class="fh-link" href="#c-action" data-fh="ACT-2.1">Read the case study</a>
```

#### ACT-2.2 · Quiet link

```html
<a class="fh-link fh-link--quiet" href="#c-action" data-fh="ACT-2.2">Read the case study</a>
```

### ACT-3 · Cue

#### ACT-3.1 · Scroll cue

```html
<p class="fh-action fh-action--cue" data-fh="ACT-3.1">The design system built for <u class="fh-action__phrase">modern workflows</u></p>
```

#### ACT-3.2 · Scroll cue, toned

```html
<p class="fh-action fh-action--cue" data-tone="teal" data-fh="ACT-3.2">The design system built for <u class="fh-action__phrase">modern workflows</u></p>
```

#### ACT-3.3 · Scroll cue, large

```html
<p class="fh-action fh-action--cue fh-action--lg" data-fh="ACT-3.3">The design system built for <u class="fh-action__phrase">modern workflows</u></p>
```

#### ACT-3.4 · Scroll cue, large, toned

```html
<p class="fh-action fh-action--cue fh-action--lg" data-tone="teal" data-fh="ACT-3.4">The design system built for <u class="fh-action__phrase">modern workflows</u></p>
```

## MRK · Markers

Dots, eyebrow pills, breadcrumbs and badges. A badge is for counts only; a status is an fh-chip with data-status, or inline fh-status text.

Layer: part.

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

Layer: part.

Classes: `fh-eyebrow-pill` `fh-dot` `fh-dot--live` `fh-eyebrow-pill--tone` `fh-eyebrow-pill--lg` `fh-eyebrow-pill--etched` `fh-eyebrow-pill--dotted` `fh-eyebrow-pill--double` `fh-dot--square` `fh-eyebrow-pill--rounded` `fh-eyebrow-pill--sharp` `fh-dot--diamond` `fh-eyebrow-pill--oval` `fh-eyebrow-pill--tab` `fh-eyebrow-pill--solid` `fh-dot--blink` `fh-eyebrow-pill--gradient` `fh-eyebrow-pill--glass` `fh-dot--ring` `fh-eyebrow-pill--ghost` `fh-eyebrow-pill--bracket` `fh-dot--bar` `fh-eyebrow-pill--underline` `fh-eyebrow-pill__index` `fh-eyebrow-pill__seg` `fh-eyebrow-pill__count` `fh-eyebrow-pill--filled-end` `fh-eyebrow-pill--sentence` `fh-avatar` `fh-avatar--circle` `fh-eyebrow-pill__action` `fh-kbd`

### EYE-1 · Lines

.fh-eyebrow-pill · --tone · --lg · --etched · --dotted · --double

#### EYE-1.1 · Solid line

```html
<p class="fh-eyebrow-pill" data-tone="sky" data-fh="EYE-1.1"><span class="fh-dot fh-dot--live"></span>Solid line</p>
```

#### EYE-1.2 · Tone tinted

```html
<p class="fh-eyebrow-pill fh-eyebrow-pill--tone" data-tone="violet" data-fh="EYE-1.2"><span class="fh-dot fh-dot--live"></span>Tone tinted</p>
```

#### EYE-1.3 · Large

```html
<p class="fh-eyebrow-pill fh-eyebrow-pill--lg" data-tone="accent" data-fh="EYE-1.3"><span class="fh-dot fh-dot--live"></span>Large</p>
```

#### EYE-1.4 · Large, toned

```html
<p class="fh-eyebrow-pill fh-eyebrow-pill--lg fh-eyebrow-pill--tone" data-tone="amber" data-fh="EYE-1.4"><span class="fh-dot fh-dot--live"></span>Large, toned</p>
```

#### EYE-1.5 · Etched line

```html
<p class="fh-eyebrow-pill fh-eyebrow-pill--etched" data-tone="teal" data-fh="EYE-1.5"><span class="fh-dot fh-dot--live"></span>Etched line</p>
```

#### EYE-1.6 · Dotted line

```html
<p class="fh-eyebrow-pill fh-eyebrow-pill--dotted" data-tone="lime" data-fh="EYE-1.6"><span class="fh-dot"></span>Dotted line</p>
```

#### EYE-1.7 · Double line

```html
<p class="fh-eyebrow-pill fh-eyebrow-pill--double" data-tone="amber" data-fh="EYE-1.7"><span class="fh-dot fh-dot--square"></span>Double line</p>
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

--solid · --gradient · --glass · --ghost

#### EYE-3.1 · Solid tone

```html
<p class="fh-eyebrow-pill fh-eyebrow-pill--solid" data-tone="sky" data-fh="EYE-3.1"><span class="fh-dot fh-dot--blink"></span>Solid tone</p>
```

#### EYE-3.2 · Gradient sweep

```html
<p class="fh-eyebrow-pill fh-eyebrow-pill--gradient" data-tone="fuchsia" data-fh="EYE-3.2"><span class="fh-dot fh-dot--live"></span>Gradient sweep</p>
```

#### EYE-3.3 · Glass

```html
<p class="fh-eyebrow-pill fh-eyebrow-pill--glass" data-tone="teal" data-fh="EYE-3.3"><span class="fh-dot fh-dot--ring"></span>Glass</p>
```

#### EYE-3.4 · Ghost

```html
<p class="fh-eyebrow-pill fh-eyebrow-pill--ghost" data-tone="lime" data-fh="EYE-3.4"><span class="fh-dot fh-dot--live"></span>Ghost</p>
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
<p class="fh-eyebrow-pill fh-eyebrow-pill--sentence" data-tone="sky" data-fh="EYE-6.2"><span class="fh-avatar fh-avatar--circle" data-fh="AVT"><img src="img/avatars/reginald.webp" alt></span><span>Reginald is online</span><a class="fh-eyebrow-pill__action" href="#c-eyebrow">Talk</a></p>
```

#### EYE-6.3 · Search · shortcut

```html
<p class="fh-eyebrow-pill fh-eyebrow-pill--etched fh-eyebrow-pill--sentence" data-tone="neutral" data-fh="EYE-6.3"><span>Search the docs</span><kbd class="fh-kbd">⌘K</kbd></p>
```

## CHP · Chips

Chips filter or jump; the selected one fills with its tone. Icons replace the dot. Every variant takes the tone from data-tone. For the status of a record use data-status instead (merged, running, queued, failed, archived): the tone follows the value. A chip is for status, and sits only in a record's head, a collapsed section's summary and once per row; counts are an fh-badge; inline status text is an fh-status.

Layer: part.

Classes: `fh-chips` `fh-chips--wrap` `fh-chip` `fh-chips--track` `fh-chip--solid` `fh-icon` `fh-chip--tone` `fh-chip--plain` `fh-chip--underline` `fh-chip--indexed` `fh-chip__index` `fh-chips--indexed` `fh-chip__remove` `fh-chip-card` `fh-chip-card__block` `fh-chip-card__text` `fh-chip-cards` `fh-chip--sm`

### CHP-1 · Kinds

#### CHP-1.1 · Filter

```html
<div class="fh-chips fh-chips--wrap" data-fh="CHP-1.1">
  <a class="fh-chip" data-tone="sky" href="#c-chips" aria-current="true" data-fh="CHP">Agents</a>
  <a class="fh-chip" data-tone="teal" href="#c-chips" data-fh="CHP">Data</a>
  <a class="fh-chip" data-tone="orange" href="#c-chips" data-fh="CHP">Automation</a>
  <a class="fh-chip" data-tone="fuchsia" href="#c-chips" data-fh="CHP">AI</a>
</div>
```

#### CHP-1.2 · Choice

```html
<div class="fh-chips fh-chips--track" role="group" aria-label="Contact task" data-fh="CHP-1.2">
  <label class="fh-chip" data-tone="lime" data-fh="CHP"><input type="radio" name="task" checked> Start a project</label>
  <label class="fh-chip" data-tone="sky" data-fh="CHP"><input type="radio" name="task"> Book a call</label>
  <label class="fh-chip" data-tone="rose" data-fh="CHP"><input type="radio" name="task"> Support</label>
</div>
```

#### CHP-1.3 · Fill

```html
<div class="fh-chips fh-chips--wrap" data-fh="CHP-1.3">
  <span class="fh-chip fh-chip--solid" data-tone="sky" data-fh="CHP"><i class="fh-icon fh-icon--bot" aria-hidden="true"></i>Solid tone</span>
  <span class="fh-chip fh-chip--tone" data-tone="orange" data-fh="CHP"><i class="fh-icon fh-icon--workflow" aria-hidden="true"></i>Soft tone</span>
  <span class="fh-chip fh-chip--plain" data-fh="CHP">Plain</span>
</div>
```

#### CHP-1.4 · Tabs

```html
<div class="fh-chips fh-chips--wrap" data-fh="CHP-1.4">
  <a class="fh-chip fh-chip--underline" data-tone="lime" href="#c-chips" aria-current="true" data-fh="CHP">Overview</a>
  <a class="fh-chip fh-chip--underline" data-tone="lime" href="#c-chips" data-fh="CHP">Pricing</a>
  <a class="fh-chip fh-chip--underline" data-tone="lime" href="#c-chips" data-fh="CHP">FAQ</a>
</div>
```

### CHP-2 · Parts

#### CHP-2.1 · Indexed

```html
<div class="fh-chips fh-chips--wrap" data-fh="CHP-2.1">
  <span class="fh-chip fh-chip--indexed" data-tone="violet" data-fh="CHP"><b class="fh-chip__index">01</b>Foundations</span>
  <span class="fh-chip fh-chip--indexed" data-tone="amber" data-fh="CHP"><b class="fh-chip__index">03</b>Components</span>
  <span class="fh-chip fh-chip--indexed" data-tone="sky" data-fh="CHP"><b class="fh-chip__index">04</b>Data</span>
</div>
```

#### CHP-2.2 · Counted

```html
<div class="fh-chips fh-chips--indexed fh-chips--wrap" aria-label="Open roles" data-fh="CHP-2.2">
  <a class="fh-chip fh-chip--tone" data-tone="fuchsia" href="#services" data-fh="CHP">Design engineer</a>
  <a class="fh-chip fh-chip--tone" data-tone="sky" href="#services" data-fh="CHP">AI agent builder</a>
  <a class="fh-chip fh-chip--tone" data-tone="orange" href="#services" data-fh="CHP">Automation lead</a>
</div>
```

#### CHP-2.3 · Removable

```html
<div class="fh-chips fh-chips--wrap" data-fh="CHP-2.3">
  <span class="fh-chip fh-chip--plain" data-fh="CHP">Website <button class="fh-chip__remove" type="button" aria-label="Remove Website"></button></span>
  <span class="fh-chip fh-chip--plain" data-fh="CHP">Email <button class="fh-chip__remove" type="button" aria-label="Remove Email"></button></span>
</div>
```

### CHP-3 · Chip cards

Compact cards led by a tone block: categories, people, files. fh-chip-cards lines them up in one strip that scrolls along; aria-current="true" marks the one in view.

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

#### CHP-3.5 · Cards list

```html
<nav class="fh-chip-cards" aria-label="Goals" style="max-inline-size: 26rem" data-fh="CHP-3.5">
  <a class="fh-chip-card" data-tone="lime" href="#c-chip-cards" aria-current="true" data-fh="CHP-3.1"><span class="fh-chip-card__block">HE</span><span class="fh-chip-card__text"><b>Health</b><small>3 goals</small></span></a>
  <a class="fh-chip-card" data-tone="sky" href="#c-chip-cards" data-fh="CHP-3.1"><span class="fh-chip-card__block">WO</span><span class="fh-chip-card__text"><b>Work</b><small>5 goals</small></span></a>
  <a class="fh-chip-card" data-tone="amber" href="#c-chip-cards" data-fh="CHP-3.1"><span class="fh-chip-card__block">MO</span><span class="fh-chip-card__text"><b>Money</b><small>2 goals</small></span></a>
  <a class="fh-chip-card" data-tone="violet" href="#c-chip-cards" data-fh="CHP-3.1"><span class="fh-chip-card__block">HO</span><span class="fh-chip-card__text"><b>Home</b><small>4 goals</small></span></a>
</nav>
```

## CUB · Cubes

Tone blocks that carry one value. In a row they walk the hue wheel by 28°, so three facts read as one family.

Layer: part.

Classes: `fh-cubes` `fh-cube` `fh-cube--lg` `fh-cube--sm` `fh-icon` `fh-cube--outline` `fh-cube--icon` `fh-cube--soft` `fh-cube-cards` `fh-cube-card` `fh-cube--xl` `fh-cube-card__text` `fh-cube-card__trend` `fh-cube-card--stack` `fh-cube-cards--strip`

### CUB-1 · Cubes

#### CUB-1.1 · Facts

```html
<ul class="fh-cubes" data-tone="teal" data-fh="CUB-1.1">
  <li><b class="fh-cube" data-fh="CUB">$1,250</b> fixed</li>
  <li><b class="fh-cube" data-fh="CUB">14</b> days</li>
  <li><b class="fh-cube" data-fh="CUB">4</b> deliverables</li>
</ul>
```

#### CUB-1.2 · Large

```html
<ul class="fh-cubes" data-tone="fuchsia" data-fh="CUB-1.2">
  <li><b class="fh-cube fh-cube--lg" data-fh="CUB">98</b> score</li>
  <li><b class="fh-cube fh-cube--lg" data-fh="CUB">A+</b> grade</li>
  <li><b class="fh-cube fh-cube--lg" data-fh="CUB">12</b> fixes</li>
</ul>
```

#### CUB-1.3 · Icons

```html
<ul class="fh-cubes" data-tone="sky" data-fh="CUB-1.3">
  <li><b class="fh-cube fh-cube--sm" data-fh="CUB"><i class="fh-icon fh-icon--clock" aria-hidden="true"></i></b> 30 min</li>
  <li><b class="fh-cube fh-cube--sm" data-fh="CUB"><i class="fh-icon fh-icon--video" aria-hidden="true"></i></b> Video call</li>
  <li><b class="fh-cube fh-cube--sm" data-fh="CUB"><i class="fh-icon fh-icon--calendar" aria-hidden="true"></i></b> This week</li>
</ul>
```

#### CUB-1.4 · Outline

```html
<ul class="fh-cubes" data-tone="amber" data-fh="CUB-1.4">
  <li><b class="fh-cube fh-cube--outline" data-fh="CUB">v1.1</b> release</li>
  <li><b class="fh-cube fh-cube--outline" data-fh="CUB">MIT</b> license</li>
  <li><b class="fh-cube fh-cube--outline" data-fh="CUB">183</b> icons</li>
</ul>
```

#### CUB-1.5 · Icon

```html
<ul class="fh-cubes" data-tone="sky" data-fh="CUB-1.5">
  <li><span class="fh-cube fh-cube--icon" data-fh="CUB"><i class="fh-icon fh-icon--layout-grid" aria-hidden="true"></i></span> Overview</li>
  <li><span class="fh-cube fh-cube--icon" data-fh="CUB"><i class="fh-icon fh-icon--calendar" aria-hidden="true"></i></span> Today</li>
  <li><span class="fh-cube fh-cube--icon" data-fh="CUB"><i class="fh-icon fh-icon--target" aria-hidden="true"></i></span> Goals</li>
</ul>
```

#### CUB-1.6 · Soft

```html
<ul class="fh-cubes" data-tone="violet" data-fh="CUB-1.6">
  <li><span class="fh-cube fh-cube--icon fh-cube--soft" data-fh="CUB"><i class="fh-icon fh-icon--layers" aria-hidden="true"></i></span> Relays</li>
  <li><span class="fh-cube fh-cube--icon fh-cube--soft" data-fh="CUB"><i class="fh-icon fh-icon--users" aria-hidden="true"></i></span> People</li>
  <li><span class="fh-cube fh-cube--icon fh-cube--outline" data-fh="CUB"><i class="fh-icon fh-icon--shield-check" aria-hidden="true"></i></span> Outline</li>
</ul>
```

### CUB-2 · Cube cards

Cards led by a cube: the value is the headline, the text says what it measures.

#### CUB-2.1 · Row

```html
<div class="fh-cube-cards" data-tone="lime" style="--fh-cube-card-min: 12rem" data-fh="CUB-2.1">
  <article class="fh-cube-card" data-fh="CUB"><b class="fh-cube fh-cube--xl" data-fh="CUB">14</b><div class="fh-cube-card__text"><b>Days</b><small>Kickoff to handoff</small></div></article>
  <article class="fh-cube-card" data-fh="CUB"><b class="fh-cube fh-cube--xl" data-fh="CUB">4</b><div class="fh-cube-card__text"><b>Deliverables</b><small>Docs you keep</small></div></article>
  <a class="fh-cube-card" href="#c-cube-cards" data-fh="CUB"><b class="fh-cube fh-cube--xl" data-fh="CUB"><i class="fh-icon fh-icon--calendar" aria-hidden="true"></i></b><div class="fh-cube-card__text"><b>Book a call</b><small>30 min, this week</small></div></a>
</div>
```

#### CUB-2.2 · Trend

```html
<div class="fh-cube-cards" data-tone="orange" style="--fh-cube-card-min: 12rem" data-fh="CUB-2.2">
  <article class="fh-cube-card" data-fh="CUB"><b class="fh-cube fh-cube--lg" data-fh="CUB">$184k</b><div class="fh-cube-card__text"><b>Pipeline</b><small>Open deals · sample</small></div><span class="fh-cube-card__trend" data-dir="up">▲ 12%</span></article>
  <article class="fh-cube-card" data-fh="CUB"><b class="fh-cube fh-cube--lg" data-fh="CUB">2.4h</b><div class="fh-cube-card__text"><b>First reply</b><small>Median · sample</small></div><span class="fh-cube-card__trend" data-dir="down">▼ 8%</span></article>
</div>
```

#### CUB-2.3 · Stacked

```html
<div class="fh-cube-cards" data-tone="violet" style="--fh-cube-card-min: 14rem" data-fh="CUB-2.3">
  <article class="fh-cube-card fh-cube-card--stack" data-fh="CUB"><b class="fh-cube fh-cube--xl" data-fh="CUB">$1,695</b><div class="fh-cube-card__text"><b>AI agent</b><small>Per month, after setup</small></div><ul class="fh-cubes" data-fh="CUB-1"><li><b class="fh-cube fh-cube--sm" data-fh="CUB">24/7</b> coverage</li><li><b class="fh-cube fh-cube--sm" data-fh="CUB">3</b> channels</li></ul></article>
  <article class="fh-cube-card fh-cube-card--stack" data-fh="CUB"><b class="fh-cube fh-cube--xl" data-fh="CUB">1,284</b><div class="fh-cube-card__text"><b>Inquiries</b><small>Last 30 days · sample</small></div><ul class="fh-cubes" data-fh="CUB-1"><li><b class="fh-cube fh-cube--sm" data-fh="CUB">+12%</b> vs last</li><li><b class="fh-cube fh-cube--sm" data-fh="CUB">64%</b> booked</li></ul></article>
</div>
```

#### CUB-2.4 · Strip

```html
<ul class="fh-cube-cards fh-cube-cards--strip" data-tone="sky" data-fh="CUB-2.4">
  <li class="fh-cube-card" data-tone="amber" data-fh="CUB"><b class="fh-cube fh-cube--xl" data-fh="CUB">3</b><div class="fh-cube-card__text"><b>Tasks today</b><small>2 overdue</small></div></li>
  <li class="fh-cube-card" data-tone="lime" data-fh="CUB"><b class="fh-cube fh-cube--xl" data-fh="CUB">5/8</b><div class="fh-cube-card__text"><b>Habits</b><small>Done so far</small></div></li>
  <li class="fh-cube-card" data-tone="sky" data-fh="CUB"><b class="fh-cube fh-cube--xl" data-fh="CUB">2</b><div class="fh-cube-card__text"><b>Meetings</b><small>Next at 2:30 PM</small></div></li>
</ul>
```

## LGS · Logo strip

Grayscale marks that come to full colour on hover. Add fh-logos--marquee for an endless scroll (duplicate the list once). Only show logos you have permission to use.

Layer: composite.

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

Layer: composite. Slots: `meta` `title` `body` `value` `link` `media` `chips`.

Classes: `fh-grid` `fh-grid--ruled` `fh-grid--etched` `fh-card` `fh-card__meta` `fh-card__title` `fh-card__body` `fh-card__footer` `fh-card__price` `fh-action`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/content/card-in-a-ruled-grid/.

## TIL · Tiles

Open tiles on one ruled grid: a solid icon block in the tile's tone, a numbered mono eyebrow, a large title and a muted note, the arrow top right. Index tiles go somewhere; launch tiles do something; option tiles pick one, with a large preview, a specimen, a small swatch or the colour itself, and the picked tile marked.

Layer: composite. Slots: `media` `items` `key` `stage` `title` `eyebrow` `note` `link`.

Classes: `fh-tiles` `fh-tiles--lg` `fh-tile` `fh-tile__cube` `fh-icon` `fh-tile__eyebrow` `fh-tile__title` `fh-tile__note` `fh-tile__go` `fh-tile--row` `fh-tiles--launch` `fh-tile--compact` `fh-tile--command` `fh-tiles--options` `fh-tile--option` `fh-tile__media` `fh-tile__specimen` `fh-tiles--swatches` `fh-tile--swatch` `fh-tile--colour` `fh-tile__media--auto` `fh-tile__code`

### TIL-1 · Index tiles

#### TIL-1.1 · Index tile

```html
<ul class="fh-tiles fh-tiles--lg" data-fh="TIL-1.1">
  <li><a class="fh-tile" href="#c-tiles" data-tone="teal" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__cube" data-fh-slot="media"><i class="fh-icon fh-icon--book-open" aria-hidden="true"></i></span><small class="fh-tile__eyebrow" data-fh-slot="eyebrow">01 · Guide</small><b class="fh-tile__title" data-fh-slot="title">Guidelines</b><span class="fh-tile__note" data-fh-slot="note">The rules every Rascode design system follows.</span><i class="fh-icon fh-icon--arrow-right fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></a></li>
  <li><a class="fh-tile" href="#c-tiles" data-tone="violet" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__cube" data-fh-slot="media"><i class="fh-icon fh-icon--layers" aria-hidden="true"></i></span><small class="fh-tile__eyebrow" data-fh-slot="eyebrow">02 · 6 families</small><b class="fh-tile__title" data-fh-slot="title">Foundations</b><span class="fh-tile__note" data-fh-slot="note">Tones, type, space, radius and every token.</span><i class="fh-icon fh-icon--arrow-right fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></a></li>
  <li><a class="fh-tile" href="#c-tiles" data-tone="rose" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__cube" data-fh-slot="media"><i class="fh-icon fh-icon--layout-grid" aria-hidden="true"></i></span><small class="fh-tile__eyebrow" data-fh-slot="eyebrow">03 · 4 families</small><b class="fh-tile__title" data-fh-slot="title">Layout</b><span class="fh-tile__note" data-fh-slot="note">The frame, container queries and the auto grid.</span><i class="fh-icon fh-icon--arrow-right fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></a></li>
</ul>
```

#### TIL-1.2 · Row

```html
<ul class="fh-tiles" style="--fh-tiles-min: 16rem" data-fh="TIL-1.2">
  <li><a class="fh-tile fh-tile--row" href="#c-tiles" data-tone="neutral" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__cube" data-fh-slot="media"><i class="fh-icon fh-icon--book-open" aria-hidden="true"></i></span><b class="fh-tile__title" data-fh-slot="title">Guidelines</b><span class="fh-tile__note" data-fh-slot="note">How to use it well</span><small class="fh-tile__eyebrow" data-fh-slot="eyebrow">01</small><i class="fh-icon fh-icon--arrow-up-right fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></a></li>
  <li><a class="fh-tile fh-tile--row" href="#c-tiles" data-tone="accent" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__cube" data-fh-slot="media"><i class="fh-icon fh-icon--box" aria-hidden="true"></i></span><b class="fh-tile__title" data-fh-slot="title">Components</b><span class="fh-tile__note" data-fh-slot="note">Every fh-* part</span><small class="fh-tile__eyebrow" data-fh-slot="eyebrow">02</small><i class="fh-icon fh-icon--arrow-up-right fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></a></li>
  <li><a class="fh-tile fh-tile--row" href="#c-tiles" data-tone="teal" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__cube" data-fh-slot="media"><i class="fh-icon fh-icon--pen-line" aria-hidden="true"></i></span><b class="fh-tile__title" data-fh-slot="title">Forms</b><span class="fh-tile__note" data-fh-slot="note">Inputs and flows</span><small class="fh-tile__eyebrow" data-fh-slot="eyebrow">03</small><i class="fh-icon fh-icon--arrow-up-right fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></a></li>
</ul>
```

### TIL-2 · Launch tiles

#### TIL-2.1 · Launch tile

```html
<div class="fh-tiles fh-tiles--launch" data-fh="TIL-2.1">
  <button class="fh-tile" type="button" data-tone="violet" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__cube" data-fh-slot="media"><i class="fh-icon fh-icon--sparkles" aria-hidden="true"></i></span><small class="fh-tile__eyebrow" data-fh-slot="eyebrow">01</small><b class="fh-tile__title" data-fh-slot="title">Claude</b><span class="fh-tile__note" data-fh-slot="note">Anthropic</span><i class="fh-icon fh-icon--arrow-up-right fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button>
  <button class="fh-tile" type="button" data-tone="fuchsia" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__cube" data-fh-slot="media"><i class="fh-icon fh-icon--bot" aria-hidden="true"></i></span><small class="fh-tile__eyebrow" data-fh-slot="eyebrow">02</small><b class="fh-tile__title" data-fh-slot="title">ChatGPT</b><span class="fh-tile__note" data-fh-slot="note">OpenAI</span><i class="fh-icon fh-icon--arrow-up-right fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button>
  <button class="fh-tile" type="button" data-tone="neutral" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__cube" data-fh-slot="media"><i class="fh-icon fh-icon--terminal" aria-hidden="true"></i></span><small class="fh-tile__eyebrow" data-fh-slot="eyebrow">03</small><b class="fh-tile__title" data-fh-slot="title">Cursor</b><span class="fh-tile__note" data-fh-slot="note">Agent in your editor</span><i class="fh-icon fh-icon--arrow-up-right fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button>
  <button class="fh-tile" type="button" data-tone="lime" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__cube" data-fh-slot="media"><i class="fh-icon fh-icon--heart" aria-hidden="true"></i></span><small class="fh-tile__eyebrow" data-fh-slot="eyebrow">04</small><b class="fh-tile__title" data-fh-slot="title">Lovable</b><span class="fh-tile__note" data-fh-slot="note">Builds the app</span><i class="fh-icon fh-icon--arrow-up-right fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button>
</div>
```

#### TIL-2.2 · Compact

```html
<div class="fh-tiles fh-tiles--launch" data-fh="TIL-2.2">
  <button class="fh-tile fh-tile--compact" type="button" data-tone="violet" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__cube" data-fh-slot="media"><i class="fh-icon fh-icon--sparkles" aria-hidden="true"></i></span><b class="fh-tile__title" data-fh-slot="title">Claude</b><span class="fh-tile__note" data-fh-slot="note">Anthropic</span><i class="fh-icon fh-icon--arrow-up-right fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button>
  <button class="fh-tile fh-tile--compact" type="button" data-tone="teal" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__cube" data-fh-slot="media"><i class="fh-icon fh-icon--bot" aria-hidden="true"></i></span><b class="fh-tile__title" data-fh-slot="title">ChatGPT</b><span class="fh-tile__note" data-fh-slot="note">OpenAI</span><i class="fh-icon fh-icon--arrow-up-right fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button>
  <button class="fh-tile fh-tile--compact" type="button" data-tone="rose" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__cube" data-fh-slot="media"><i class="fh-icon fh-icon--heart" aria-hidden="true"></i></span><b class="fh-tile__title" data-fh-slot="title">Lovable</b><span class="fh-tile__note" data-fh-slot="note">Builds the app</span><i class="fh-icon fh-icon--arrow-up-right fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button>
  <button class="fh-tile fh-tile--compact" type="button" data-tone="sky" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__cube" data-fh-slot="media"><i class="fh-icon fh-icon--search" aria-hidden="true"></i></span><b class="fh-tile__title" data-fh-slot="title">Perplexity</b><span class="fh-tile__note" data-fh-slot="note">Research the brief</span><i class="fh-icon fh-icon--arrow-up-right fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button>
</div>
```

#### TIL-2.3 · Command

```html
<div class="fh-tiles fh-tiles--launch" style="--fh-tiles-min: 12rem" data-fh="TIL-2.3">
  <button class="fh-tile fh-tile--command" type="button" data-tone="violet" data-fh="TIL" data-fh-slot="items"><b class="fh-tile__title" data-fh-slot="title">Claude Code</b><code>claude "…"</code><i class="fh-icon fh-icon--copy fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button>
  <button class="fh-tile fh-tile--command" type="button" data-tone="teal" data-fh="TIL" data-fh-slot="items"><b class="fh-tile__title" data-fh-slot="title">Codex CLI</b><code>codex "…"</code><i class="fh-icon fh-icon--copy fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button>
  <button class="fh-tile fh-tile--command" type="button" data-tone="sky" data-fh="TIL" data-fh-slot="items"><b class="fh-tile__title" data-fh-slot="title">Gemini CLI</b><code>gemini -p "…"</code><i class="fh-icon fh-icon--copy fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button>
</div>
```

### TIL-3 · Option tiles

#### TIL-3.1 · Option tile, media

```html
<ul class="fh-tiles fh-tiles--options" aria-label="Backdrop" data-fh="TIL-3.1">
  <li><button class="fh-tile fh-tile--option" type="button" aria-pressed="true" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__media" data-fh-slot="media"><img src="/img/backdrop/hv-hat-thumb.webp" alt loading="lazy"></span><b class="fh-tile__title" data-fh-slot="title">Straw hat</b><span class="fh-tile__note" data-fh-slot="note">Warm · still</span><i class="fh-icon fh-icon--check fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button></li>
  <li><button class="fh-tile fh-tile--option" type="button" aria-pressed="false" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__media" data-fh-slot="media"><img src="/img/backdrop/hv-rider-thumb.webp" alt loading="lazy"></span><b class="fh-tile__title" data-fh-slot="title">Rider</b><span class="fh-tile__note" data-fh-slot="note">Open · bright</span><i class="fh-icon fh-icon--check fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button></li>
  <li><button class="fh-tile fh-tile--option" type="button" aria-pressed="false" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__media" style="background-image: radial-gradient(60% 70% at 30% 35%, var(--fh-color-accent), transparent 70%), radial-gradient(55% 60% at 75% 70%, oklch(from var(--fh-color-accent) l c calc(h + 120)), transparent 70%)" data-fh-slot="media"></span><b class="fh-tile__title" data-fh-slot="title">Glow</b><span class="fh-tile__note" data-fh-slot="note">Soft · radiating</span><i class="fh-icon fh-icon--check fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button></li>
  <li><button class="fh-tile fh-tile--option" type="button" aria-pressed="false" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__media" style="background-image: linear-gradient(var(--fh-color-etch) 1px, transparent 1px), linear-gradient(90deg, var(--fh-color-etch) 1px, transparent 1px); background-size: 12px 12px; background-repeat: repeat" data-fh-slot="media"></span><b class="fh-tile__title" data-fh-slot="title">Grid</b><span class="fh-tile__note" data-fh-slot="note">The grid alone</span><i class="fh-icon fh-icon--check fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button></li>
</ul>
```

#### TIL-3.2 · Option tile, specimen

```html
<ul class="fh-tiles fh-tiles--options" aria-label="Typeface" data-fh="TIL-3.2">
  <li><button class="fh-tile fh-tile--option" type="button" aria-pressed="true" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__specimen" style="font-family: 'Inter', sans-serif" data-fh-slot="stage">Aa</span><b class="fh-tile__title" data-fh-slot="title">Inter</b><span class="fh-tile__note" data-fh-slot="note">Default · neutral</span><i class="fh-icon fh-icon--check fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button></li>
  <li><button class="fh-tile fh-tile--option" type="button" aria-pressed="false" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__specimen" style="font-family: 'Geist', sans-serif" data-fh-slot="stage">Aa</span><b class="fh-tile__title" data-fh-slot="title">Geist</b><span class="fh-tile__note" data-fh-slot="note">Crisp · technical</span><i class="fh-icon fh-icon--check fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button></li>
  <li><button class="fh-tile fh-tile--option" type="button" aria-pressed="false" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__specimen" style="font-family: 'Hanken Grotesk', sans-serif" data-fh-slot="stage">Aa</span><b class="fh-tile__title" data-fh-slot="title">Hanken Grotesk</b><span class="fh-tile__note" data-fh-slot="note">Warm · rounded</span><i class="fh-icon fh-icon--check fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button></li>
  <li><button class="fh-tile fh-tile--option" type="button" aria-pressed="false" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__specimen" style="font-family: 'Archivo', sans-serif" data-fh-slot="stage">Aa</span><b class="fh-tile__title" data-fh-slot="title">Archivo</b><span class="fh-tile__note" data-fh-slot="note">Sturdy · editorial</span><i class="fh-icon fh-icon--check fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button></li>
</ul>
```

#### TIL-3.3 · Option tile, swatch

```html
<ul class="fh-tiles fh-tiles--options fh-tiles--swatches" aria-label="Photos" style="max-inline-size: 44rem" data-fh="TIL-3.3">
  <li><button class="fh-tile fh-tile--option fh-tile--swatch" type="button" aria-pressed="true" title="Straw hat" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__media" data-fh-slot="media"><img src="/img/backdrop/hv-hat-thumb.webp" alt loading="lazy"></span><b class="fh-tile__title" data-fh-slot="title">Straw hat</b><i class="fh-icon fh-icon--check fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button></li>
  <li><button class="fh-tile fh-tile--option fh-tile--swatch" type="button" aria-pressed="false" title="Rider" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__media" data-fh-slot="media"><img src="/img/backdrop/hv-rider-thumb.webp" alt loading="lazy"></span><b class="fh-tile__title" data-fh-slot="title">Rider</b><i class="fh-icon fh-icon--check fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button></li>
  <li><button class="fh-tile fh-tile--option fh-tile--swatch" type="button" aria-pressed="false" title="Dusk" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__media" style="background-image: linear-gradient(160deg, oklch(from var(--fh-color-accent) 0.7 c h), oklch(0.25 0.05 280))" data-fh-slot="media"></span><b class="fh-tile__title" data-fh-slot="title">Dusk</b><i class="fh-icon fh-icon--check fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button></li>
  <li><button class="fh-tile fh-tile--option fh-tile--swatch" type="button" aria-pressed="false" title="Meadow" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__media" style="background-image: linear-gradient(160deg, oklch(0.85 0.12 130), oklch(0.45 0.1 150))" data-fh-slot="media"></span><b class="fh-tile__title" data-fh-slot="title">Meadow</b><i class="fh-icon fh-icon--check fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button></li>
  <li><button class="fh-tile fh-tile--option fh-tile--swatch" type="button" aria-pressed="false" title="Dune" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__media" style="background-image: linear-gradient(170deg, oklch(0.9 0.05 80), oklch(0.65 0.09 60))" data-fh-slot="media"></span><b class="fh-tile__title" data-fh-slot="title">Dune</b><i class="fh-icon fh-icon--check fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button></li>
  <li><button class="fh-tile fh-tile--option fh-tile--swatch" type="button" aria-pressed="false" title="Ink" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__media" style="background-image: radial-gradient(70% 70% at 30% 30%, oklch(0.45 0 0), oklch(0.15 0 0))" data-fh-slot="media"></span><b class="fh-tile__title" data-fh-slot="title">Ink</b><i class="fh-icon fh-icon--check fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button></li>
</ul>
```

#### TIL-3.4 · Option tile, colour

```html
<ul class="fh-tiles fh-tiles--options" aria-label="Theme colour" data-fh="TIL-3.4">
  <li><button class="fh-tile fh-tile--option fh-tile--colour" type="button" aria-pressed="false" style="--fh-tile-tone: var(--fh-color-accent)" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__media fh-tile__media--auto"><span class="fh-tile__code" data-fh-slot="key">Auto</span></span><b class="fh-tile__title" data-fh-slot="title">From backdrop</b><span class="fh-tile__note" data-fh-slot="note">Follows the photo</span><i class="fh-icon fh-icon--check fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button></li>
  <li><button class="fh-tile fh-tile--option fh-tile--colour" type="button" aria-pressed="false" style="--fh-tile-tone: #ff5a1f" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__media"><span class="fh-tile__code" data-fh-slot="key">#FF5A1F</span></span><b class="fh-tile__title" data-fh-slot="title">Firehorse</b><span class="fh-tile__note" data-fh-slot="note">The house colour</span><i class="fh-icon fh-icon--check fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button></li>
  <li><button class="fh-tile fh-tile--option fh-tile--colour" type="button" aria-pressed="false" style="--fh-tile-tone: #f59e0b" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__media"><span class="fh-tile__code" data-fh-slot="key">#F59E0B</span></span><b class="fh-tile__title" data-fh-slot="title">Amber</b><span class="fh-tile__note" data-fh-slot="note">Warm · golden</span><i class="fh-icon fh-icon--check fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button></li>
  <li><button class="fh-tile fh-tile--option fh-tile--colour" type="button" aria-pressed="true" style="--fh-tile-tone: #10b981" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__media"><span class="fh-tile__code" data-fh-slot="key">#10B981</span></span><b class="fh-tile__title" data-fh-slot="title">Emerald</b><span class="fh-tile__note" data-fh-slot="note">Fresh · calm</span><i class="fh-icon fh-icon--check fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button></li>
  <li><button class="fh-tile fh-tile--option fh-tile--colour" type="button" aria-pressed="false" style="--fh-tile-tone: #3b82f6" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__media"><span class="fh-tile__code" data-fh-slot="key">#3B82F6</span></span><b class="fh-tile__title" data-fh-slot="title">Blue</b><span class="fh-tile__note" data-fh-slot="note">Clear · steady</span><i class="fh-icon fh-icon--check fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button></li>
</ul>
```

## STA · Stats strip

One column, two, or a row, depending on the slot.

Layer: composite.

Classes: `fh-stats`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/content/stats-strip/.

## CKL · Checklist

Layer: composite.

Classes: `fh-checklist`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/content/checklist/.

## STP · Steps

Numbered because order matters. Form steps live on Forms.

Layer: part.

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
      <ul class="fh-cubes fh-form-step__cube" data-tone="sky" data-fh="CUB-1"><li><b class="fh-cube fh-cube--outline" data-fh="CUB">01</b></li></ul>
      <h3 class="fh-form-step__title">About you</h3>
      <p class="fh-muted" style="margin:0">Who we are talking to.</p>
    </div>
  </header>
  <div class="fh-form-step__body fh-form" data-fh="SFM">
    <div class="fh-field" data-fh="FLD-4.1" data-fh-slot="fields"><label for="fs-name">Name</label><input class="fh-input" id="fs-name" value="Ada Lovelace" data-fh="FLD"></div>
    <div class="fh-field" data-fh="FLD-4.1" data-fh-slot="fields"><label for="fs-email">Email</label><input class="fh-input" id="fs-email" type="email" value="ada@analytical.engine" data-fh="FLD"></div>
  </div>
</section>
```

## CAR · Carousel

Multi-panel slider modelled on X media posts: swipe or scroll, panels snap, and the current dot stretches into a longer bubble. Native CSS dots in Chromium; the enhancer draws the same dots elsewhere.

Layer: composite. Slots: `body` `count`.

Classes: `fh-carousel` `fh-carousel__track` `fh-carousel__slide` `fh-label` `fh-stats` `fh-carousel__count`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/content/carousel/.

## LST · List & timeline

Rows with a visual, text and a trailing slot. A dashed timeline for activity.

Layer: composite. Slots: `media` `title` `sub` `link` `meta` `end` `items`.

Classes: `fh-row` `fh-cube` `fh-cube--icon` `fh-icon` `fh-row__text` `fh-row__title` `fh-row__sub` `fh-row__end` `fh-button` `fh-button--secondary` `fh-button--sm` `fh-row--done` `fh-chip` `fh-row__bar` `fh-progress` `fh-rows`

### LST-1 · List row

The Helm iOS row (FireKit FireRow): fh-row with a small lead in media, fh-row__title and fh-row__sub in fh-row__text, and fh-row__end for a button, a choice, a chip or a figure over a bar. An <a class="fh-row"> fills link. fh-rows is the list: each row fills its items. Knobs: --fh-row-gap, --fh-row-min-size, --fh-row-pad, --fh-row-done-line, --fh-row-bar-size.

#### LST-1.1 · Row

```html
<div class="fh-row" data-tone="orange" data-fh="LST-1.1">
  <span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--flame" aria-hidden="true"></i></span>
  <div class="fh-row__text"><p class="fh-row__title" data-fh-slot="title">Push-ups</p><p class="fh-row__sub" data-fh-slot="sub">50 of 100 reps</p></div>
  <div class="fh-row__end"><button class="fh-button fh-button--secondary fh-button--sm" type="button" data-fh="BTN-1.5" data-fh-slot="end"><i class="fh-icon fh-icon--plus" aria-hidden="true"></i>25</button></div>
</div>
```

#### LST-1.2 · Done

```html
<div class="fh-row fh-row--done" data-tone="lime" data-fh="LST-1.2">
  <span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--droplet" aria-hidden="true"></i></span>
  <div class="fh-row__text"><p class="fh-row__title" data-fh-slot="title">Water</p><p class="fh-row__sub" data-fh-slot="sub">8 of 8 glasses</p></div>
  <div class="fh-row__end"><span class="fh-chip" data-tone="lime" data-fh="CHP" data-fh-slot="end">done</span></div>
</div>
```

#### LST-1.3 · End bar

```html
<a class="fh-row" href="#c-list-row" data-tone="sky" data-fh="LST-1.3">
  <span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--target" aria-hidden="true"></i></span>
  <div class="fh-row__text"><p class="fh-row__title" data-fh-slot="title">Ship FirehorseKit</p><p class="fh-row__sub" data-fh-slot="sub">46 days left</p></div>
  <div class="fh-row__end"><span class="fh-row__bar"><b>58%</b><progress class="fh-progress" value="58" max="100" data-fh="FBK" data-fh-slot="end">58%</progress></span></div>
</a>
```

#### LST-1.4 · Rows

```html
<div class="fh-rows" data-fh="LST-1.4">
  <div class="fh-row" data-tone="orange" data-fh="LST-1.1" data-fh-slot="items">
    <span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--flame" aria-hidden="true"></i></span>
    <div class="fh-row__text"><p class="fh-row__title" data-fh-slot="title">Push-ups</p><p class="fh-row__sub" data-fh-slot="sub">50 of 100 reps</p></div>
    <div class="fh-row__end"><button class="fh-button fh-button--secondary fh-button--sm" type="button" data-fh="BTN-1.5" data-fh-slot="end"><i class="fh-icon fh-icon--plus" aria-hidden="true"></i>25</button></div>
  </div>
  <div class="fh-row fh-row--done" data-tone="lime" data-fh="LST-1.2" data-fh-slot="items">
    <span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--droplet" aria-hidden="true"></i></span>
    <div class="fh-row__text"><p class="fh-row__title" data-fh-slot="title">Water</p><p class="fh-row__sub" data-fh-slot="sub">8 of 8 glasses</p></div>
    <div class="fh-row__end"><span class="fh-chip" data-tone="lime" data-fh="CHP" data-fh-slot="end">done</span></div>
  </div>
  <a class="fh-row" href="#c-list-row" data-tone="sky" data-fh="LST-1.3" data-fh-slot="items">
    <span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--target" aria-hidden="true"></i></span>
    <div class="fh-row__text"><p class="fh-row__title" data-fh-slot="title">Ship FirehorseKit</p><p class="fh-row__sub" data-fh-slot="sub">46 days left</p></div>
    <div class="fh-row__end"><span class="fh-row__bar"><b>58%</b><progress class="fh-progress" value="58" max="100" data-fh="FBK" data-fh-slot="end">58%</progress></span></div>
  </a>
</div>
```

## FOL · Text fold

Long text (an agent's reply, an update, a note) folds to --fh-fold-lines lines (6 by default), the last line fading into whatever surface it sits on, with a ghost Show all / Show less button. fold.js (@rascode/firehorse/fold) sets the clamp and shows the button only when the text is taller than it, measured on load and when the width changes. Without the script it is plain full text.

Layer: part (transparent).

Classes: `fh-fold` `fh-fold__body` `fh-body` `fh-button` `fh-button--ghost` `fh-button--sm` `fh-fold__toggle`

### FOL-1 · Text fold

#### FOL-1.1 · Short text

```html
<div class="fh-fold" style="max-inline-size: 34rem" data-fh="FOL-1.1">
  <div class="fh-fold__body fh-body" id="fold-short"><p>Round 2 is in. The index check passes now.</p></div>
  <button class="fh-button fh-button--ghost fh-button--sm fh-fold__toggle" type="button" aria-expanded="false" aria-controls="fold-short" hidden data-fh="BTN-2.2">Show all</button>
</div>
```

#### FOL-1.2 · Long text

```html
<div class="fh-fold" style="max-inline-size: 34rem; --fh-fold-lines: 4" data-fh="FOL-1.2">
  <div class="fh-fold__body fh-body" id="fold-long">
    <p>Round 2 is in. The index check passes now: the three new code variants were missing from the ledger, and the day mark had no slot in sections.json. I took the 375 shot again; the Tokens table scrolls inside its frame and the page no longer scrolls sideways.</p>
    <p>Three commits on the relay branch, none pushed. The report is at relay/runs/rs1-fh-relay-sidecar-parts.report.md, with the timetable and the last lines of every check. The full build hash changed, so it is recorded in test/builds.test.mjs, as the last relay did.</p>
  </div>
  <button class="fh-button fh-button--ghost fh-button--sm fh-fold__toggle" type="button" aria-expanded="false" aria-controls="fold-long" hidden data-fh="BTN-2.2">Show all</button>
</div>
```

#### FOL-1.3 · Open

```html
<div class="fh-fold" style="max-inline-size: 34rem; --fh-fold-lines: 4" data-open data-fh="FOL-1.3">
  <div class="fh-fold__body fh-body" id="fold-open">
    <p>Round 2 is in. The index check passes now: the three new code variants were missing from the ledger, and the day mark had no slot in sections.json. I took the 375 shot again; the Tokens table scrolls inside its frame and the page no longer scrolls sideways.</p>
    <p>Three commits on the relay branch, none pushed. The report is at relay/runs/rs1-fh-relay-sidecar-parts.report.md, with the timetable and the last lines of every check. The full build hash changed, so it is recorded in test/builds.test.mjs, as the last relay did.</p>
  </div>
  <button class="fh-button fh-button--ghost fh-button--sm fh-fold__toggle" type="button" aria-expanded="true" aria-controls="fold-open" hidden data-fh="BTN-2.2">Show less</button>
</div>
```

## IMS · Image stack

Images that belong together sit as one card with the next two peeking out behind it and a count on its corner. Point at the stack, tab into it, or tap it once on a phone, and the cards fan out in a row to the right, floating over what sits there so nothing moves. Click a card to open the viewer: the full image, its details, a count and previous / next (arrow keys too). image-stack.js (@rascode/firehorse/image-stack) adds the tap and the viewer; without it the stack still opens on hover and focus and each card links to its image.

Layer: composite. Slots: `count` `close` `media` `actions`.

Classes: `fh-image-stack` `fh-image-stack__list` `fh-image-stack__item` `fh-image-stack__shot` `fh-image-stack__open` `fh-image-stack__file` `fh-image-stack__meta` `fh-image-stack__count` `fh-image-stack--bare` `fh-image-viewer` `fh-image-viewer__count` `fh-button` `fh-button--disc` `fh-image-viewer__close` `fh-icon` `fh-image-viewer__prev` `fh-image-viewer__figure` `fh-image-viewer__img` `fh-image-viewer__caption` `fh-image-viewer__file` `fh-image-viewer__meta` `fh-image-viewer__next`

### IMS-1 · Image stack

#### IMS-1.1 · Stack

```html
<div class="fh-image-stack" style="max-inline-size: 15rem" data-fh="IMS-1.1"><ul class="fh-image-stack__list" aria-label="3 images"><li class="fh-image-stack__item"><figure class="fh-image-stack__shot"><a class="fh-image-stack__open" href="/img/samples/tml2-actions-dark.webp"><img src="/img/samples/tml2-actions-dark.webp" alt="Screenshot: Actions page, dark mode" width="960" height="600" loading="lazy"></a><figcaption><span class="fh-image-stack__file">actions-dark.webp</span><span class="fh-image-stack__meta">960 × 600 · 52 KB</span><span class="fh-image-stack__meta">Screenshot · Claude · 8:24 PM</span></figcaption></figure></li><li class="fh-image-stack__item"><figure class="fh-image-stack__shot"><a class="fh-image-stack__open" href="/img/samples/tml2-actions-light.webp"><img src="/img/samples/tml2-actions-light.webp" alt="Screenshot: Actions page, light mode" width="960" height="600" loading="lazy"></a><figcaption><span class="fh-image-stack__file">actions-light.webp</span><span class="fh-image-stack__meta">960 × 600 · 54 KB</span><span class="fh-image-stack__meta">Screenshot · Claude · 8:24 PM</span></figcaption></figure></li><li class="fh-image-stack__item"><figure class="fh-image-stack__shot"><a class="fh-image-stack__open" href="/img/samples/ims-forms-dark.webp"><img src="/img/samples/ims-forms-dark.webp" alt="Screenshot: Forms page, dark mode" width="960" height="600" loading="lazy"></a><figcaption><span class="fh-image-stack__file">forms-dark.webp</span><span class="fh-image-stack__meta">960 × 600 · 52 KB</span><span class="fh-image-stack__meta">Screenshot · Grok · 8:19 PM</span></figcaption></figure></li></ul><span class="fh-image-stack__count" aria-hidden="true" data-fh-slot="count">+2</span></div>
```

#### IMS-1.2 · Bare

```html
<div class="fh-image-stack fh-image-stack--bare" style="max-inline-size: 15rem" data-fh="IMS-1.2"><ul class="fh-image-stack__list" aria-label="3 images"><li class="fh-image-stack__item"><figure class="fh-image-stack__shot" data-fh-slot="media"><a class="fh-image-stack__open" href="/img/samples/tml2-actions-dark.webp"><img src="/img/samples/tml2-actions-dark.webp" alt="Screenshot: Actions page, dark mode" width="960" height="600" loading="lazy"></a></figure></li><li class="fh-image-stack__item"><figure class="fh-image-stack__shot" data-fh-slot="media"><a class="fh-image-stack__open" href="/img/samples/tml2-actions-light.webp"><img src="/img/samples/tml2-actions-light.webp" alt="Screenshot: Actions page, light mode" width="960" height="600" loading="lazy"></a></figure></li><li class="fh-image-stack__item"><figure class="fh-image-stack__shot" data-fh-slot="media"><a class="fh-image-stack__open" href="/img/samples/ims-forms-dark.webp"><img src="/img/samples/ims-forms-dark.webp" alt="Screenshot: Forms page, dark mode" width="960" height="600" loading="lazy"></a></figure></li></ul><span class="fh-image-stack__count" aria-hidden="true" data-fh-slot="count">+2</span></div>
```

### IMS-2 · Viewer

#### IMS-2.1 · Viewer

```html
<dialog class="fh-image-viewer" open aria-label="Image viewer" style="position: static; inset: auto; margin: 0; inline-size: 100%" data-fh="IMS-2.1"><p class="fh-image-viewer__count" data-fh-slot="count">2 / 3</p><button type="button" class="fh-button fh-button--disc fh-image-viewer__close" aria-label="Close" data-fh="BTN-4" data-fh-slot="close"><i class="fh-icon fh-icon--x" aria-hidden="true"></i></button><button type="button" class="fh-button fh-button--disc fh-image-viewer__prev" aria-label="Previous image" data-fh="BTN-4" data-fh-slot="actions"><i class="fh-icon fh-icon--chevron-left" aria-hidden="true"></i></button><figure class="fh-image-viewer__figure"><img class="fh-image-viewer__img" src="/img/samples/tml2-actions-light.webp" alt="Screenshot: Actions page, light mode" width="960" height="600" style="max-block-size: 22rem" data-fh-slot="media"><figcaption class="fh-image-viewer__caption"><span class="fh-image-viewer__file">actions-light.webp</span><span class="fh-image-viewer__meta">960 × 600 · 54 KB</span><span class="fh-image-viewer__meta">Screenshot · Claude · 8:24 PM</span></figcaption></figure><button type="button" class="fh-button fh-button--disc fh-image-viewer__next" aria-label="Next image" data-fh="BTN-4" data-fh-slot="actions"><i class="fh-icon fh-icon--chevron-right" aria-hidden="true"></i></button></dialog>
```

## DET · Code and divider

A code block with its copy button, a divider with a word in it, and keyboard keys. The description list that sat here moved to the Record table (TBL-3.5, Stacked).

Layer: part.

Classes: `fh-stack` `fh-stack--lg` `fh-divider` `fh-code` `fh-button` `fh-button--sm` `fh-button--ghost` `fh-small` `fh-muted` `fh-kbd`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/content/code-and-divider/.

## TIR · Pricing tiers

Each tier is a card in the new look: an Icon cube in its tone, a numbered name and the price on the stat tier. The featured tier takes a tone wash and its tag; the cards stack or sit side by side by container.

Layer: composite. Slots: `media` `name` `sub` `body` `items` `note`.

Classes: `fh-tiers` `fh-tier` `fh-tier__head` `fh-tier__cube` `fh-icon` `fh-tier__name` `fh-tier__pitch` `fh-tier__price` `fh-tier__note` `fh-checklist` `fh-tier__foot`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/content/pricing-tiers/.

## FEA · Features

Layer: composite. Slots: `icon`.

Classes: `fh-grid` `fh-feature` `fh-feature__icon`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/content/features/.

## TST · Testimonial

Layer: composite.

Classes: `fh-testimonial` `fh-person` `fh-avatar` `fh-avatar--circle` `fh-person__text`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/content/testimonial/.

## TAB · Tabs

Underline tabs that scroll sideways when they run out of room. fh-tabs--mono for chrome.

Layer: composite.

Classes: `fh-stack` `fh-stack--lg` `fh-tabs` `fh-tabs--mono`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/navigation/tabs/.

## NAV · Navigation

Pagination, a wizard stepper, search and a side nav. Nav links are a site's top links in mono caps: a pill wash on hover, a rolling label and an accent chevron on a link that opens a panel; --tone washes the current link in the nav's tone and --lg is the one size step. Every part reads one set of --fh-nav-* values.

Layer: composite. Slots: `media` `label` `link` `actions` `body`.

Classes: `fh-nav` `fh-nav--links` `fh-nav__link` `fh-roll` `fh-icon` `fh-menu` `fh-nav--tone` `fh-nav--lg` `fh-search` `fh-sr-only` `fh-kbd` `fh-stepper` `fh-pagination` `fh-sidenav` `fh-label` `fh-badge` `fh-sidenav__area` `fh-sidenav__area-head` `fh-sidenav__row` `fh-cluster` `fh-sidenav__label` `fh-sidenav__badge` `fh-sidenav__chevron` `fh-sidenav__children` `fh-sidenav__child`

### NAV-1 · Nav links

.fh-nav--links · .fh-nav__link · --tone · --lg

#### NAV-1.1 · Nav links

```html
<nav class="fh-nav fh-nav--links" aria-label="Site (sample 1)" data-fh="NAV-1.1">
  <button class="fh-nav__link" type="button" popovertarget="nav-links-demo-1" data-fh-slot="link"><span class="fh-roll">Docs</span><i class="fh-icon fh-icon--chevron-down" aria-hidden="true"></i></button>
  <a class="fh-nav__link" href="#c-nav" data-fh-slot="link"><span class="fh-roll">Build with Firehorse</span></a>
  <a class="fh-nav__link" href="#c-nav" aria-current="page" data-fh-slot="link"><span class="fh-roll">Design patterns</span></a>
  <div class="fh-menu" id="nav-links-demo-1" popover data-fh="DRP-1.1" data-fh-slot="body"><a href="#c-nav">Guidelines</a><a href="#c-nav">Foundations</a><a href="#c-nav">Components</a></div>
</nav>
```

#### NAV-1.2 · Toned

```html
<nav class="fh-nav fh-nav--links fh-nav--tone" aria-label="Site (sample 2)" data-tone="violet" data-fh="NAV-1.2">
  <button class="fh-nav__link" type="button" popovertarget="nav-links-demo-2" data-fh-slot="link"><span class="fh-roll">Docs</span><i class="fh-icon fh-icon--chevron-down" aria-hidden="true"></i></button>
  <a class="fh-nav__link" href="#c-nav" data-fh-slot="link"><span class="fh-roll">Build with Firehorse</span></a>
  <a class="fh-nav__link" href="#c-nav" aria-current="page" data-fh-slot="link"><span class="fh-roll">Design patterns</span></a>
  <div class="fh-menu" id="nav-links-demo-2" popover data-fh="DRP-1.1" data-fh-slot="body"><a href="#c-nav">Guidelines</a><a href="#c-nav">Foundations</a><a href="#c-nav">Components</a></div>
</nav>
```

#### NAV-1.3 · Large

```html
<nav class="fh-nav fh-nav--links fh-nav--lg" aria-label="Site (sample 3)" data-fh="NAV-1.3">
  <button class="fh-nav__link" type="button" popovertarget="nav-links-demo-3" data-fh-slot="link"><span class="fh-roll">Docs</span><i class="fh-icon fh-icon--chevron-down" aria-hidden="true"></i></button>
  <a class="fh-nav__link" href="#c-nav" data-fh-slot="link"><span class="fh-roll">Build with Firehorse</span></a>
  <a class="fh-nav__link" href="#c-nav" aria-current="page" data-fh-slot="link"><span class="fh-roll">Design patterns</span></a>
  <div class="fh-menu" id="nav-links-demo-3" popover data-fh="DRP-1.1" data-fh-slot="body"><a href="#c-nav">Guidelines</a><a href="#c-nav">Foundations</a><a href="#c-nav">Components</a></div>
</nav>
```

#### NAV-1.4 · Large, toned

```html
<nav class="fh-nav fh-nav--links fh-nav--lg fh-nav--tone" aria-label="Site (sample 4)" data-tone="amber" data-fh="NAV-1.4">
  <button class="fh-nav__link" type="button" popovertarget="nav-links-demo-4" data-fh-slot="link"><span class="fh-roll">Docs</span><i class="fh-icon fh-icon--chevron-down" aria-hidden="true"></i></button>
  <a class="fh-nav__link" href="#c-nav" data-fh-slot="link"><span class="fh-roll">Build with Firehorse</span></a>
  <a class="fh-nav__link" href="#c-nav" aria-current="page" data-fh-slot="link"><span class="fh-roll">Design patterns</span></a>
  <div class="fh-menu" id="nav-links-demo-4" popover data-fh="DRP-1.1" data-fh-slot="body"><a href="#c-nav">Guidelines</a><a href="#c-nav">Foundations</a><a href="#c-nav">Components</a></div>
</nav>
```

### NAV-2 · Search

.fh-search

#### NAV-2.1 · Search field

```html
<label class="fh-search" data-fh="NAV-2.1"><span class="fh-sr-only">Search</span><input type="search" placeholder="Search components"><kbd class="fh-kbd">⌘K</kbd></label>
```

### NAV-3 · Stepper

.fh-stepper

#### NAV-3.1 · Stepper

```html
<ol class="fh-stepper" data-tone="lime" data-fh="NAV-3.1">
  <li data-state="done">Details</li>
  <li data-state="current" aria-current="step">Scope</li>
  <li>Review</li>
  <li>Sign</li>
</ol>
```

### NAV-4 · Pagination

.fh-pagination

#### NAV-4.1 · Pagination

```html
<nav class="fh-pagination" aria-label="Pages" data-fh="NAV-4.1">
  <a href="#c-nav" rel="prev">Prev</a><a href="#c-nav">1</a><a href="#c-nav" aria-current="page">2</a><a href="#c-nav">3</a><span>…</span><a href="#c-nav">9</a><a href="#c-nav" rel="next">Next</a>
</nav>
```

### NAV-5 · Sidenav

.fh-sidenav · __area · __child · __badge

#### NAV-5.1 · Grouped links

```html
<nav class="fh-sidenav" aria-label="Portal" data-tone="sky" data-fh="NAV-5.1">
  <section><p class="fh-label">Portal</p>
    <a href="#c-nav" aria-current="page">Overview</a>
    <a href="#c-nav">Invoices <span class="fh-badge" data-tone="amber" data-fh="CLS-1">2</span></a>
    <a href="#c-nav">Agents</a>
  </section>
</nav>
```

#### NAV-5.2 · Collapsible areas

```html
<nav class="fh-sidenav" aria-label="Collapsible demo" data-tone="violet" data-fh="NAV-5.2">
  <div class="fh-sidenav__area" data-open="true">
    <div class="fh-sidenav__area-head">
      <a href="#c-nav" class="fh-sidenav__row" data-contains-active="true">
        <span class="fh-cluster" style="--fh-gap: var(--fh-space-2)"><i class="fh-icon fh-icon--database" aria-hidden="true"></i><span class="fh-sidenav__label" data-fh-slot="label">Schemas</span></span>
        <span class="fh-badge fh-sidenav__badge" data-tone="rose" data-alert="true" data-fh="CLS-1">3</span>
      </a>
      <button type="button" class="fh-sidenav__chevron" aria-expanded="true" aria-controls="demo-schemas" aria-label="Collapse Schemas"><i class="fh-icon fh-icon--chevron-right" aria-hidden="true"></i></button>
    </div>
    <div id="demo-schemas" class="fh-sidenav__children" data-state="open" role="region" aria-label="Schemas">
      <a href="#c-nav" class="fh-sidenav__child">Overview</a>
      <a href="#c-nav" class="fh-sidenav__child" aria-current="page">Codex</a>
    </div>
  </div>
  <div class="fh-sidenav__area" data-open="false">
    <div class="fh-sidenav__area-head">
      <a href="#c-nav" class="fh-sidenav__row">
        <span class="fh-cluster" style="--fh-gap: var(--fh-space-2)"><i class="fh-icon fh-icon--store" aria-hidden="true"></i><span class="fh-sidenav__label" data-fh-slot="label">Store</span></span>
      </a>
      <button type="button" class="fh-sidenav__chevron" aria-expanded="false" aria-controls="demo-store" aria-label="Expand Store"><i class="fh-icon fh-icon--chevron-right" aria-hidden="true"></i></button>
    </div>
    <div id="demo-store" class="fh-sidenav__children" data-state="closed" hidden role="region" aria-label="Store">
      <a href="#c-nav" class="fh-sidenav__child">Overview</a>
      <a href="#c-nav" class="fh-sidenav__child">Studio</a>
      <a href="#c-nav" class="fh-sidenav__child">Products</a>
    </div>
  </div>
</nav>
```

## BRG · Hamburger

Three bars, seven morphs, every state. Open comes from aria-expanded, a sibling :popover-open, or fh-burger--open. Click any of them.

Layer: part.

Classes: `fh-burger` `fh-burger--boxed` `fh-burger--open` `fh-burger--label` `fh-burger--arrow` `fh-burger--spin` `fh-burger--squeeze` `fh-burger--minus` `fh-burger--plus` `fh-burger--dots` `fh-burger--tone`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/navigation/hamburger/.

## MEG · Mega panel

Grouped links under the header, on a frost ruled with the dashed etch: a quiet mono label over each group, a soft rule between groups and a rail of link cells along the foot. Default holds plain links; --headed lines the labels up on one row and pairs with fh-mega__link for rich rows; --tiles adds a mono title and count head and holds groups of tiles.

Layer: composite. Slots: `media` `title` `count` `sub` `label` `body` `items`.

Classes: `fh-mega` `fh-mega__grid` `fh-mega__rail` `fh-roll` `fh-icon` `fh-mega--headed` `fh-mega__link` `fh-mega__link-media` `fh-mega__link-title` `fh-mega__link-desc` `fh-mega--tiles` `fh-mega__head` `fh-mega__title` `fh-mega__count` `fh-mega__groups` `fh-mega__group` `fh-mega__label` `fh-tiles` `fh-tile` `fh-tile--row` `fh-tile__cube` `fh-tile__title` `fh-tile__note` `fh-tile__eyebrow` `fh-tile__go`

### MEG-1 · Default

#### MEG-1.1 · Default

```html
<div class="fh-mega" style="position: relative; inset: auto; display: block; opacity: 1; translate: none; max-block-size: none; box-shadow: none" data-fh="MEG-1.1">
  <div class="fh-mega__grid">
    <section data-tone="sky"><h3>Agents</h3><ul><li><a href="#c-mega">Lead follow-up</a></li><li><a href="#c-mega">Inbox triage</a></li></ul></section>
    <section data-tone="teal"><h3>Data</h3><ul><li><a href="#c-mega">Warehouses</a></li><li><a href="#c-mega">Pipelines</a></li></ul></section>
    <section data-tone="orange"><h3>Automation</h3><ul><li><a href="#c-mega">Workflows</a></li><li><a href="#c-mega">Webhooks</a></li></ul></section>
  </div>
  <nav class="fh-mega__rail" aria-label="More"><a href="#c-mega"><span class="fh-roll">All services</span><i class="fh-icon fh-icon--arrow-right" aria-hidden="true"></i></a><a href="#c-mega"><span class="fh-roll">Talk to us</span><i class="fh-icon fh-icon--arrow-up-right" aria-hidden="true"></i></a></nav>
</div>
```

### MEG-2 · Headed

#### MEG-2.1 · Headed

```html
<div class="fh-mega fh-mega--headed" style="position: relative; inset: auto; display: block; opacity: 1; translate: none; max-block-size: none; box-shadow: none" data-fh="MEG-2.1">
  <div class="fh-mega__grid">
    <section data-tone="sky">
      <h3><a href="#c-mega">Agents</a></h3>
      <ul>
        <li><a class="fh-mega__link" href="#c-mega"><span class="fh-mega__link-media" data-fh-slot="media"><i class="fh-icon fh-icon--bot" aria-hidden="true"></i></span><span class="fh-mega__link-title" data-fh-slot="title">Lead follow-up</span><span class="fh-mega__link-desc" data-fh-slot="sub">Answers and books on your channels.</span></a></li>
        <li><a class="fh-mega__link" href="#c-mega"><span class="fh-mega__link-media" data-fh-slot="media"><i class="fh-icon fh-icon--mail" aria-hidden="true"></i></span><span class="fh-mega__link-title" data-fh-slot="title">Inbox triage</span><span class="fh-mega__link-desc" data-fh-slot="sub">Sorts and tags every message.</span></a></li>
      </ul>
    </section>
    <section data-tone="teal">
      <h3><a href="#c-mega">Data</a></h3>
      <ul>
        <li><a class="fh-mega__link" href="#c-mega"><span class="fh-mega__link-media" data-fh-slot="media"><i class="fh-icon fh-icon--database" aria-hidden="true"></i></span><span class="fh-mega__link-title" data-fh-slot="title">Warehouses</span><span class="fh-mega__link-desc" data-fh-slot="sub">One place for every table.</span></a></li>
      </ul>
    </section>
  </div>
  <nav class="fh-mega__rail" aria-label="More"><a href="#c-mega"><span class="fh-roll">Browse the catalog</span><i class="fh-icon fh-icon--arrow-right" aria-hidden="true"></i></a><a href="#c-mega"><span class="fh-roll">Book a call</span><i class="fh-icon fh-icon--arrow-up-right" aria-hidden="true"></i></a></nav>
</div>
```

### MEG-3 · Tile panel

#### MEG-3.1 · Tile panel

```html
<div class="fh-mega fh-mega--tiles" style="position: relative; inset: auto; opacity: 1; translate: none; max-block-size: none; box-shadow: none" data-fh="MEG-3.1">
  <header class="fh-mega__head"><span class="fh-mega__title" data-fh-slot="title">Docs</span><span class="fh-mega__count" data-fh-slot="count">6 pages</span></header>
  <div class="fh-mega__groups">
    <section class="fh-mega__group" aria-label="Basics"><p class="fh-mega__label" data-fh-slot="label">Basics</p><ul class="fh-tiles" style="--fh-tiles-min: 100%" data-fh="TIL-1.2" data-fh-slot="items"><li><a class="fh-tile fh-tile--row" href="#c-mega" data-tone="neutral" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__cube" data-fh-slot="media"><i class="fh-icon fh-icon--book-open" aria-hidden="true"></i></span><b class="fh-tile__title" data-fh-slot="title">Guidelines</b><span class="fh-tile__note" data-fh-slot="note">How to use it well</span><small class="fh-tile__eyebrow" data-fh-slot="eyebrow">01</small><i class="fh-icon fh-icon--arrow-up-right fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></a></li><li><a class="fh-tile fh-tile--row" href="#c-mega" data-tone="accent" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__cube" data-fh-slot="media"><i class="fh-icon fh-icon--layers" aria-hidden="true"></i></span><b class="fh-tile__title" data-fh-slot="title">Foundations</b><span class="fh-tile__note" data-fh-slot="note">Tokens, type, colour</span><small class="fh-tile__eyebrow" data-fh-slot="eyebrow">02</small><i class="fh-icon fh-icon--arrow-up-right fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></a></li><li><a class="fh-tile fh-tile--row" href="#c-mega" data-tone="sky" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__cube" data-fh-slot="media"><i class="fh-icon fh-icon--panels-top-left" aria-hidden="true"></i></span><b class="fh-tile__title" data-fh-slot="title">Layout</b><span class="fh-tile__note" data-fh-slot="note">Grids, spacing, shells</span><small class="fh-tile__eyebrow" data-fh-slot="eyebrow">03</small><i class="fh-icon fh-icon--arrow-up-right fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></a></li></ul></section>
    <section class="fh-mega__group" aria-label="Build"><p class="fh-mega__label" data-fh-slot="label">Build</p><ul class="fh-tiles" style="--fh-tiles-min: 100%" data-fh="TIL-1.2" data-fh-slot="items"><li><a class="fh-tile fh-tile--row" href="#c-mega" data-tone="accent" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__cube" data-fh-slot="media"><i class="fh-icon fh-icon--box" aria-hidden="true"></i></span><b class="fh-tile__title" data-fh-slot="title">Components</b><span class="fh-tile__note" data-fh-slot="note">Every fh-* part</span><small class="fh-tile__eyebrow" data-fh-slot="eyebrow">04</small><i class="fh-icon fh-icon--arrow-up-right fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></a></li><li><a class="fh-tile fh-tile--row" href="#c-mega" data-tone="teal" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__cube" data-fh-slot="media"><i class="fh-icon fh-icon--pen-line" aria-hidden="true"></i></span><b class="fh-tile__title" data-fh-slot="title">Forms</b><span class="fh-tile__note" data-fh-slot="note">Inputs and flows</span><small class="fh-tile__eyebrow" data-fh-slot="eyebrow">05</small><i class="fh-icon fh-icon--arrow-up-right fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></a></li><li><a class="fh-tile fh-tile--row" href="#c-mega" data-tone="rose" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__cube" data-fh-slot="media"><i class="fh-icon fh-icon--chart-bar" aria-hidden="true"></i></span><b class="fh-tile__title" data-fh-slot="title">Data</b><span class="fh-tile__note" data-fh-slot="note">Tables and charts</span><small class="fh-tile__eyebrow" data-fh-slot="eyebrow">06</small><i class="fh-icon fh-icon--arrow-up-right fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></a></li></ul></section>
  </div>
  <nav class="fh-mega__rail" aria-label="More"><a href="#c-mega"><span class="fh-roll">Start here</span><i class="fh-icon fh-icon--arrow-right" aria-hidden="true"></i></a><a href="#c-mega"><span class="fh-roll">All categories</span><i class="fh-icon fh-icon--arrow-right" aria-hidden="true"></i></a><a href="#c-mega"><span class="fh-roll">llms.txt for agents</span><i class="fh-icon fh-icon--arrow-up-right" aria-hidden="true"></i></a></nav>
</div>
```

## DRW · Drawer

The mobile menu: a full-width popover under the header with grouped links. Open it from the hamburger below, or use the site header's drawer on a narrow viewport.

Layer: composite.

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

--rich is the site header's short menus and every table's column display menu: a tinted tile per row, walking the root's colours (--fh-walk-0 … 8). On the etched frost: quiet mono labels, sans items in rows that run the menu's width, shortcuts, checkable items, soft rules between groups and a danger zone. --inset sets the rows in from the frame, each rounded. Positioned with CSS anchor positioning. --context is the same menu opened at the pointer (right-click, long press, Shift+F10) on whatever names it with data-fh-context, with submenus. --tiles is a wide menu of tiles: a mono caps head with a status pill, labelled tile grids run edge to edge, an etched pill action and an ask row that opens into a short form.

Layer: composite. Slots: `title` `label` `chips` `body` `fields` `actions` `items`.

Classes: `fh-menu` `fh-menu__label` `fh-icon` `fh-menu__danger` `fh-menu--inset` `fh-menu--tiles` `fh-menu__head` `fh-menu__title` `fh-menu__status` `fh-tiles` `fh-tiles--launch` `fh-tile` `fh-tile__cube` `fh-tile__eyebrow` `fh-tile__title` `fh-tile__note` `fh-tile__go` `fh-tile--command` `fh-menu__foot` `fh-menu__pill` `fh-menu__ask` `fh-menu__ask-q` `fh-field` `fh-input` `fh-field--optional` `fh-button` `fh-button--sm` `fh-cluster` `fh-card` `fh-label` `fh-muted` `fh-menu--context` `fh-menu__sub` `fh-menu--rich` `fh-menu__item` `fh-menu__tile` `fh-roll`

### DRP-1 · Default

#### DRP-1.1 · Default

```html
<div class="fh-menu" role="menu" aria-label="Sample menu (static)" style="position: static; display: block; margin: 0; opacity: 1; translate: none; max-inline-size: 16rem" data-fh="DRP-1.1">
  <p class="fh-menu__label" data-fh-slot="label">View</p>
  <button type="button" role="menuitemradio" aria-checked="true"><i class="fh-icon fh-icon--table-2" aria-hidden="true"></i>Grid<kbd>G</kbd></button>
  <button type="button" role="menuitemradio" aria-checked="false"><i class="fh-icon fh-icon--kanban" aria-hidden="true"></i>Board<kbd>B</kbd></button>
  <hr>
  <p class="fh-menu__label" data-fh-slot="label">Show</p>
  <button type="button" role="menuitemcheckbox" aria-checked="true"><i class="fh-icon fh-icon--users" aria-hidden="true"></i>Owners</button>
  <button type="button" role="menuitemcheckbox" aria-checked="false"><i class="fh-icon fh-icon--chart-line" aria-hidden="true"></i>Health</button>
  <hr>
  <button type="button" class="fh-menu__danger"><i class="fh-icon fh-icon--trash-2" aria-hidden="true"></i>Delete view</button>
</div>
```

#### DRP-1.2 · Inset

```html
<div class="fh-menu fh-menu--inset" role="menu" aria-label="Sample inset menu (static)" style="position: static; display: block; margin: 0; opacity: 1; translate: none; max-inline-size: 16rem" data-fh="DRP-1.2">
  <p class="fh-menu__label" data-fh-slot="label">View</p>
  <button type="button" role="menuitemradio" aria-checked="true"><i class="fh-icon fh-icon--table-2" aria-hidden="true"></i>Grid<kbd>G</kbd></button>
  <button type="button" role="menuitemradio" aria-checked="false"><i class="fh-icon fh-icon--kanban" aria-hidden="true"></i>Board<kbd>B</kbd></button>
  <hr>
  <p class="fh-menu__label" data-fh-slot="label">Show</p>
  <button type="button" role="menuitemcheckbox" aria-checked="true"><i class="fh-icon fh-icon--users" aria-hidden="true"></i>Owners</button>
  <button type="button" role="menuitemcheckbox" aria-checked="false"><i class="fh-icon fh-icon--chart-line" aria-hidden="true"></i>Health</button>
  <hr>
  <button type="button" class="fh-menu__danger"><i class="fh-icon fh-icon--trash-2" aria-hidden="true"></i>Delete view</button>
</div>
```

### DRP-2 · Tile menu

#### DRP-2.1 · Tile menu

```html
<div class="fh-menu fh-menu--tiles" role="dialog" aria-label="Send to an agent (static)" style="position: relative; inset: auto; margin: 0; opacity: 1; translate: none; max-block-size: none; --fh-menu-width: min(45rem, 100%)" data-fh="DRP-2.1">
  <header class="fh-menu__head"><span class="fh-menu__title" data-fh-slot="title">Send to an agent</span><span class="fh-menu__status" data-tone="lime" data-fh-slot="chips"><i class="fh-icon fh-icon--check" aria-hidden="true"></i>Prompt copied on every pick</span></header>
  <p class="fh-menu__label" data-fh-slot="label">Open with the prompt</p>
  <div class="fh-tiles fh-tiles--launch" data-fh="TIL-2.1" data-fh-slot="items"><button class="fh-tile" type="button" data-tone="accent" style="--_i: 0" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__cube" data-fh-slot="media"><i class="fh-icon fh-icon--sparkles" aria-hidden="true"></i></span><small class="fh-tile__eyebrow" data-fh-slot="eyebrow">01</small><b class="fh-tile__title" data-fh-slot="title">Claude</b><span class="fh-tile__note" data-fh-slot="note">Anthropic</span><i class="fh-icon fh-icon--arrow-up-right fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button><button class="fh-tile" type="button" data-tone="teal" style="--_i: 1" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__cube" data-fh-slot="media"><i class="fh-icon fh-icon--bot" aria-hidden="true"></i></span><small class="fh-tile__eyebrow" data-fh-slot="eyebrow">02</small><b class="fh-tile__title" data-fh-slot="title">ChatGPT</b><span class="fh-tile__note" data-fh-slot="note">OpenAI</span><i class="fh-icon fh-icon--arrow-up-right fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button><button class="fh-tile" type="button" data-tone="neutral" style="--_i: 2" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__cube" data-fh-slot="media"><i class="fh-icon fh-icon--terminal" aria-hidden="true"></i></span><small class="fh-tile__eyebrow" data-fh-slot="eyebrow">03</small><b class="fh-tile__title" data-fh-slot="title">Cursor</b><span class="fh-tile__note" data-fh-slot="note">In your editor</span><i class="fh-icon fh-icon--arrow-up-right fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button><button class="fh-tile" type="button" data-tone="rose" style="--_i: 3" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__cube" data-fh-slot="media"><i class="fh-icon fh-icon--heart" aria-hidden="true"></i></span><small class="fh-tile__eyebrow" data-fh-slot="eyebrow">04</small><b class="fh-tile__title" data-fh-slot="title">Lovable</b><span class="fh-tile__note" data-fh-slot="note">Builds the app</span><i class="fh-icon fh-icon--arrow-up-right fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button><button class="fh-tile" type="button" data-tone="sky" style="--_i: 4" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__cube" data-fh-slot="media"><i class="fh-icon fh-icon--zap" aria-hidden="true"></i></span><small class="fh-tile__eyebrow" data-fh-slot="eyebrow">05</small><b class="fh-tile__title" data-fh-slot="title">Bolt</b><span class="fh-tile__note" data-fh-slot="note">StackBlitz</span><i class="fh-icon fh-icon--arrow-up-right fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button></div>
  <p class="fh-menu__label" data-fh-slot="label">From your terminal</p>
  <div class="fh-tiles fh-tiles--launch" data-fh="TIL-2.3" data-fh-slot="items"><button class="fh-tile fh-tile--command" type="button" data-tone="accent" style="--_i: 5" data-fh="TIL" data-fh-slot="items"><b class="fh-tile__title" data-fh-slot="title">Claude Code</b><code>claude "…"</code><i class="fh-icon fh-icon--copy fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button><button class="fh-tile fh-tile--command" type="button" data-tone="teal" style="--_i: 6" data-fh="TIL" data-fh-slot="items"><b class="fh-tile__title" data-fh-slot="title">Codex CLI</b><code>codex "…"</code><i class="fh-icon fh-icon--copy fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button><button class="fh-tile fh-tile--command" type="button" data-tone="sky" style="--_i: 7" data-fh="TIL" data-fh-slot="items"><b class="fh-tile__title" data-fh-slot="title">Gemini CLI</b><code>gemini -p "…"</code><i class="fh-icon fh-icon--copy fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button></div>
  <div class="fh-menu__foot"><button class="fh-menu__pill" type="button" data-fh-slot="chips"><i class="fh-icon fh-icon--copy" aria-hidden="true"></i>Copy the prompt only</button></div>
  <details class="fh-menu__ask">
    <summary><span class="fh-menu__ask-q"><b>Don't see your agent?</b><small>Tell us and we'll add it</small></span><i class="fh-icon fh-icon--chevron-down" aria-hidden="true"></i></summary>
    <form novalidate>
      <div class="fh-field" data-fh="FLD-4.1" data-fh-slot="fields"><label for="drp-ask-agent">Agent</label><input class="fh-input" id="drp-ask-agent" name="agent" required placeholder="Its name" autocomplete="off" data-fh="FLD"></div>
      <div class="fh-field fh-field--optional" data-fh="FLD-4.1" data-fh-slot="fields"><label for="drp-ask-email">Your email</label><input class="fh-input" id="drp-ask-email" name="email" type="email" placeholder="you@company.com" data-fh="FLD"></div>
      <button class="fh-button fh-button--sm" type="submit" data-fh="BTN" data-fh-slot="actions">Send request</button>
    </form>
  </details>
</div>
```

### DRP-3 · Context menu

#### DRP-3.1 · Context menu

```html
<div class="fh-cluster" style="align-items: start">
            <div class="fh-card" tabindex="0" data-fh-context="drp-context-live" aria-label="Q3 report: right-click, long press or Shift+F10 for its menu" style="inline-size: min(20rem, 100%)" data-fh="DRP-3.1">
              <p class="fh-label">Q3 report.pdf</p>
              <p class="fh-muted">Right-click, long press or Shift+F10 here.</p>
            </div>
            <div class="fh-menu fh-menu--context" role="menu" aria-label="Sample context menu (static)" style="position: static; display: block; margin: 0; opacity: 1; translate: none; max-inline-size: 16rem" data-fh="DRP-3.1">
              <p class="fh-menu__label" data-fh-slot="label">File</p>
              <button type="button" role="menuitem"><i class="fh-icon fh-icon--pencil" aria-hidden="true"></i>Rename<kbd>F2</kbd></button>
              <button type="button" role="menuitem"><i class="fh-icon fh-icon--copy" aria-hidden="true"></i>Duplicate<kbd>D</kbd></button>
              <div class="fh-menu__sub">
                <button type="button" role="menuitem" aria-haspopup="menu" aria-expanded="false"><i class="fh-icon fh-icon--folder" aria-hidden="true"></i>Move to</button>
                <div popover class="fh-menu" role="menu" aria-label="Move to" data-fh="DRP-1.1" data-fh-slot="body">
                  <button type="button" role="menuitem"><i class="fh-icon fh-icon--folder" aria-hidden="true"></i>Drafts</button>
                  <button type="button" role="menuitem"><i class="fh-icon fh-icon--folder" aria-hidden="true"></i>Shared</button>
                  <button type="button" role="menuitem"><i class="fh-icon fh-icon--folder" aria-hidden="true"></i>Archive</button>
                </div>
              </div>
              <hr>
              <p class="fh-menu__label" data-fh-slot="label">Show</p>
              <button type="button" role="menuitemcheckbox" aria-checked="true"><i class="fh-icon fh-icon--eye" aria-hidden="true"></i>Preview</button>
              <hr>
              <button type="button" role="menuitem" class="fh-menu__danger"><i class="fh-icon fh-icon--trash-2" aria-hidden="true"></i>Delete<kbd>⌫</kbd></button>
            </div>
            <div id="drp-context-live" popover class="fh-menu fh-menu--context" role="menu" aria-label="Q3 report" data-fh="DRP-3.1">
              <p class="fh-menu__label" data-fh-slot="label">File</p>
              <button type="button" role="menuitem"><i class="fh-icon fh-icon--pencil" aria-hidden="true"></i>Rename<kbd>F2</kbd></button>
              <button type="button" role="menuitem"><i class="fh-icon fh-icon--copy" aria-hidden="true"></i>Duplicate<kbd>D</kbd></button>
              <div class="fh-menu__sub">
                <button type="button" role="menuitem" aria-haspopup="menu" aria-expanded="false"><i class="fh-icon fh-icon--folder" aria-hidden="true"></i>Move to</button>
                <div popover class="fh-menu" role="menu" aria-label="Move to" data-fh="DRP-1.1" data-fh-slot="body">
                  <button type="button" role="menuitem"><i class="fh-icon fh-icon--folder" aria-hidden="true"></i>Drafts</button>
                  <button type="button" role="menuitem"><i class="fh-icon fh-icon--folder" aria-hidden="true"></i>Shared</button>
                  <button type="button" role="menuitem"><i class="fh-icon fh-icon--folder" aria-hidden="true"></i>Archive</button>
                </div>
              </div>
              <hr>
              <p class="fh-menu__label" data-fh-slot="label">Show</p>
              <button type="button" role="menuitemcheckbox" aria-checked="true"><i class="fh-icon fh-icon--eye" aria-hidden="true"></i>Preview</button>
              <hr>
              <button type="button" role="menuitem" class="fh-menu__danger"><i class="fh-icon fh-icon--trash-2" aria-hidden="true"></i>Delete<kbd>⌫</kbd></button>
            </div>
</div>
```

## ACC · Accordion

Native <details> with a shared name, so only one stays open. The height animates where the browser supports it.

Layer: composite.

Classes: `fh-accordion`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/overlays/accordion/.

## DLG · Dialog, menu, toast

Native <dialog> and popovers, with enter and exit animations from @starting-style. A toast is neutral, success or danger: a title, an optional muted description, and an optional action that is the text link.

Layer: composite. Slots: `body` `actions`.

Classes: `fh-cluster` `fh-button` `fh-button--secondary` `fh-button--ghost` `fh-stack` `fh-toast` `fh-toast__body` `fh-close` `fh-link` `fh-toast__action` `fh-toast__description` `fh-menu` `fh-dialog` `fh-dialog__header` `fh-stack--xs` `fh-label` `fh-subheading` `fh-dialog__body` `fh-body` `fh-dialog__footer`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/components/overlays/dialog-menu-toast/.

## FBK · Feedback

Alerts, progress, meters, rings, spinners, skeletons, empty states and tooltips.

Layer: part.

Classes: `fh-skeleton` `fh-skeleton--block`

### FBK-1 · Feedback

#### FBK-1.1 · Skeleton block

```html
<span class="fh-skeleton fh-skeleton--block" style="block-size: 6rem; inline-size: 100%" aria-hidden="true" data-fh="FBK-1.1"></span>
```

## EMP · Empty state & banner

Two banners on one recipe, the etched frost at one outer size: a plain line with a link, and the announcement with a tag, the news in bold and its links as ruled cells down the end, the last filled in the tone. Then an empty state on the hatch.

Layer: composite. Slots: `icon` `chips` `actions`.

Classes: `fh-banner` `fh-banner--announce` `fh-banner__tag` `fh-banner__text` `fh-banner__actions` `fh-icon` `fh-banner__cta` `fh-empty` `fh-empty__icon` `fh-button` `fh-button--secondary` `fh-app-empty`

### EMP-1 · Banner

.fh-banner · --announce

#### EMP-1.1 · Banner

```html
<div class="fh-banner" data-tone="accent" data-fh="EMP-1.1"><span>Themes now switch with one attribute.</span><a href="#top">Read the notes</a></div>
```

#### EMP-1.2 · Announcement banner

```html
<aside class="fh-banner fh-banner--announce" data-tone="accent" aria-label="Announcement" data-fh="EMP-1.2">
  <span class="fh-banner__tag" data-fh-slot="chips">Announcing</span>
  <p class="fh-banner__text"><b>Firehorse v1.1</b><span>The flagship design system from Rascode and Company</span></p>
  <nav class="fh-banner__actions" aria-label="Announcement links"><a href="#top">Read more<i class="fh-icon fh-icon--arrow-right" aria-hidden="true"></i></a><a class="fh-banner__cta" href="#top" data-fh-slot="actions">Become a Pro<i class="fh-icon fh-icon--arrow-up-right" aria-hidden="true"></i></a></nav>
</aside>
```

### EMP-2 · Empty

.fh-empty · __icon

#### EMP-2.1 · Empty

```html
<div class="fh-empty" data-tone="violet" data-fh="EMP-2.1">
  <span class="fh-empty__icon" data-fh-slot="icon">∅</span>
  <h4>No leads yet</h4>
  <p>When your agent answers its first inquiry, it will show up here with the transcript and the next step.</p>
  <a class="fh-button fh-button--secondary" href="#c-feedback" data-fh="BTN-1.5" data-fh-slot="actions">Send a test lead</a>
</div>
```

## AVT · Avatars

Shapes, sizes and presence, rings and halos, generated avatars, kinds (shape by what the avatar stands for) and groups.

Layer: part.

Classes: `fh-avatar` `fh-avatar--2xl` `fh-avatar--circle` `fh-avatar--oval` `fh-avatar--squircle` `fh-avatar--square` `fh-stack` `fh-cluster` `fh-avatar--xs` `fh-avatar--sm` `fh-avatar--lg` `fh-avatar--xl` `fh-avatars` `fh-avatars__more` `fh-avatar--add` `fh-icon` `fh-avatar--ring` `fh-avatar--halo` `fh-avatar--generated` `fh-avatars--spread` `fh-avatars--lg` `fh-avatars--grid` `fh-avatars--row` `fh-person` `fh-person__text`

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

--xs 1.375 · --sm 1.75 · md 2.25 · --lg 3 · --xl 5.5 · --2xl 7rem · data-status

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

Overlapping stack: at most three faces, then a counter at the same size and shape. A stack that fans out on hover, a packed cluster, a plain row, and a person with name and role.

```html
<div class="fh-cluster" style="--fh-gap: var(--fh-space-8) var(--fh-space-10)">
  <div class="fh-avatars" role="group" aria-label="Team: Ava, Cole, Maya and 7 more" data-fh="AVT-5">
    <span class="fh-avatar" data-face data-fh="AVT"><img src="img/avatars/ava.webp" alt="Ava"></span>
    <span class="fh-avatar" data-face data-fh="AVT"><img src="img/avatars/cole.webp" alt="Cole"></span>
    <span class="fh-avatar" data-face data-fh="AVT"><img src="img/avatars/maya.webp" alt="Maya"></span>
    <span class="fh-avatar fh-avatars__more" aria-hidden="true" data-fh="AVT">+7</span>
  </div>
  <div class="fh-avatars fh-avatars--spread fh-avatars--lg" role="group" aria-label="On shift: Isla, Mateo, Eleanor and 2 more" tabindex="0" data-fh="AVT-5">
    <span class="fh-avatar" data-kind="person" data-face data-fh="AVT"><img src="img/avatars/isla.webp" alt="Isla"></span>
    <span class="fh-avatar" data-kind="person" data-face data-fh="AVT"><img src="img/avatars/mateo.webp" alt="Mateo"></span>
    <span class="fh-avatar" data-kind="person" data-face data-fh="AVT"><img src="img/avatars/eleanor.webp" alt="Eleanor"></span>
    <span class="fh-avatar fh-avatars__more" data-kind="person" aria-hidden="true" data-fh="AVT">+2</span>
  </div>
  <div class="fh-avatars fh-avatars--grid" role="group" aria-label="Clients" data-fh="AVT-5">
    <span class="fh-avatar fh-avatar--sm" data-face data-fh="AVT"><img src="img/avatars/ruth.webp" alt="Ruth"></span>
    <span class="fh-avatar fh-avatar--sm fh-avatar--generated" data-tone="teal" data-fh="AVT">NW</span>
    <span class="fh-avatar fh-avatar--sm" data-face data-fh="AVT"><img src="img/avatars/ray.webp" alt="Ray"></span>
    <span class="fh-avatar fh-avatar--sm fh-avatar--generated" data-tone="amber" data-fh="AVT">HC</span>
    <span class="fh-avatar fh-avatar--sm" data-face data-fh="AVT"><img src="img/avatars/maya.webp" alt="Maya"></span>
    <span class="fh-avatar fh-avatar--sm fh-avatar--generated" data-tone="violet" data-fh="AVT">TJ</span>
  </div>
  <div class="fh-avatars fh-avatars--row" role="group" aria-label="Reviewers" data-fh="AVT-5">
    <span class="fh-avatar fh-avatar--oval" data-face data-fh="AVT"><img src="img/avatars/cole.webp" alt="Cole"></span>
    <span class="fh-avatar fh-avatar--oval" data-face data-fh="AVT"><img src="img/avatars/isla.webp" alt="Isla"></span>
    <span class="fh-avatar fh-avatar--oval" data-face data-fh="AVT"><img src="img/avatars/ava.webp" alt="Ava"></span>
  </div>
  <a class="fh-person" href="#avatars" data-tone="sky" data-fh="AVT-5"><span class="fh-avatar fh-avatar--lg" data-status="online" data-face data-fh="AVT"><img src="img/avatars/reginald.webp" alt></span><span class="fh-person__text"><b>Reginald</b><span>Head of agent services</span></span></a>
</div>
```

### AVT-6 · Kinds

The shape says what the avatar stands for: data-kind="person" is a circle; org, agent and record are rounded squares (smaller corners at xs). One hairline on every avatar; in a stack each face cuts a canvas ring out of the one before; dashed is the empty add slot only. Initials are two letters, in the label tier at xs and sm, the meta tier from md up.

#### AVT-6.1 · Kinds · light

```html
<div class="fh-stack">
  <div class="fh-cluster" style="--fh-gap: var(--fh-space-4); --fh-align: center" role="group" aria-label="People are circles.">
    <code>person</code>
    <span class="fh-avatar fh-avatar--xs" data-kind="person" data-face data-fh="AVT-6.1"><img src="img/avatars/ava.webp" alt="Ava Mendes"></span>
    <span class="fh-avatar fh-avatar--sm" data-kind="person" data-face data-fh="AVT-6.1"><img src="img/avatars/ava.webp" alt="Ava Mendes"></span>
    <span class="fh-avatar" data-kind="person" data-face data-fh="AVT-6.1"><img src="img/avatars/ava.webp" alt="Ava Mendes"></span>
    <span class="fh-avatar fh-avatar--lg" data-kind="person" data-face data-fh="AVT-6.1"><img src="img/avatars/ava.webp" alt="Ava Mendes"></span>
    <span class="fh-avatar fh-avatar--xl" data-kind="person" data-face data-fh="AVT-6.1"><img src="img/avatars/ava.webp" alt="Ava Mendes"></span>
    <span class="fh-avatar fh-avatar--2xl" data-kind="person" data-face data-fh="AVT-6.1"><img src="img/avatars/ava.webp" alt="Ava Mendes"></span>
    <span class="fh-avatars" role="group" aria-label="Mateo Ruiz, Eleanor Park, Ray Okafor and 2 more" data-fh="AVT-6.1"><span class="fh-avatar" data-kind="person" data-face data-fh="AVT"><img src="img/avatars/mateo.webp" alt="Mateo Ruiz"></span><span class="fh-avatar" data-kind="person" data-face data-fh="AVT"><img src="img/avatars/eleanor.webp" alt="Eleanor Park"></span><span class="fh-avatar" data-kind="person" data-face data-fh="AVT"><img src="img/avatars/ray.webp" alt="Ray Okafor"></span><span class="fh-avatar fh-avatars__more" data-kind="person" aria-hidden="true" data-fh="AVT">+2</span></span>
    <button class="fh-avatar fh-avatar--add" data-kind="person" type="button" aria-label="Add a person" data-fh="AVT-6.1"><i class="fh-icon fh-icon--plus" aria-hidden="true"></i></button>
  </div>
  <div class="fh-cluster" style="--fh-gap: var(--fh-space-4); --fh-align: center" role="group" aria-label="Orgs are rounded squares.">
    <code>org</code>
    <span class="fh-avatar fh-avatar--xs" data-kind="org" role="img" aria-label="Northwind Studio" data-fh="AVT-6.1">NS</span>
    <span class="fh-avatar fh-avatar--sm" data-kind="org" role="img" aria-label="Northwind Studio" data-fh="AVT-6.1">NS</span>
    <span class="fh-avatar" data-kind="org" role="img" aria-label="Northwind Studio" data-fh="AVT-6.1">NS</span>
    <span class="fh-avatar fh-avatar--lg" data-kind="org" role="img" aria-label="Northwind Studio" data-fh="AVT-6.1">NS</span>
    <span class="fh-avatar fh-avatar--xl" data-kind="org" role="img" aria-label="Northwind Studio" data-fh="AVT-6.1">NS</span>
    <span class="fh-avatar fh-avatar--2xl" data-kind="org" role="img" aria-label="Northwind Studio" data-fh="AVT-6.1">NS</span>
    <span class="fh-avatars" role="group" aria-label="Northwind Studio, Halcyon Health, Juniper Labs and 2 more" data-fh="AVT-6.1"><span class="fh-avatar" data-kind="org" role="img" aria-label="Northwind Studio" data-fh="AVT">NS</span><span class="fh-avatar" data-kind="org" role="img" aria-label="Halcyon Health" data-fh="AVT">HH</span><span class="fh-avatar" data-kind="org" role="img" aria-label="Juniper Labs" data-fh="AVT">JL</span><span class="fh-avatar fh-avatars__more" data-kind="org" aria-hidden="true" data-fh="AVT">+2</span></span>
    <button class="fh-avatar fh-avatar--add" data-kind="org" type="button" aria-label="Add an org" data-fh="AVT-6.1"><i class="fh-icon fh-icon--plus" aria-hidden="true"></i></button>
  </div>
  <div class="fh-cluster" style="--fh-gap: var(--fh-space-4); --fh-align: center" role="group" aria-label="Agents are rounded squares.">
    <code>agent</code>
    <span class="fh-avatar fh-avatar--xs" data-kind="agent" data-face data-fh="AVT-6.1"><img src="img/avatars/reginald.webp" alt="Reginald, support agent"></span>
    <span class="fh-avatar fh-avatar--sm" data-kind="agent" data-face data-fh="AVT-6.1"><img src="img/avatars/reginald.webp" alt="Reginald, support agent"></span>
    <span class="fh-avatar" data-kind="agent" data-face data-fh="AVT-6.1"><img src="img/avatars/reginald.webp" alt="Reginald, support agent"></span>
    <span class="fh-avatar fh-avatar--lg" data-kind="agent" data-face data-fh="AVT-6.1"><img src="img/avatars/reginald.webp" alt="Reginald, support agent"></span>
    <span class="fh-avatar fh-avatar--xl" data-kind="agent" data-face data-fh="AVT-6.1"><img src="img/avatars/reginald.webp" alt="Reginald, support agent"></span>
    <span class="fh-avatar fh-avatar--2xl" data-kind="agent" data-face data-fh="AVT-6.1"><img src="img/avatars/reginald.webp" alt="Reginald, support agent"></span>
    <span class="fh-avatars" role="group" aria-label="Reginald, Scout, Ledger and 2 more" data-fh="AVT-6.1"><span class="fh-avatar" data-kind="agent" data-face data-fh="AVT"><img src="img/avatars/reginald.webp" alt="Reginald"></span><span class="fh-avatar" data-kind="agent" role="img" aria-label="Scout" data-fh="AVT">SC</span><span class="fh-avatar" data-kind="agent" role="img" aria-label="Ledger" data-fh="AVT">LD</span><span class="fh-avatar fh-avatars__more" data-kind="agent" aria-hidden="true" data-fh="AVT">+2</span></span>
    <button class="fh-avatar fh-avatar--add" data-kind="agent" type="button" aria-label="Add an agent" data-fh="AVT-6.1"><i class="fh-icon fh-icon--plus" aria-hidden="true"></i></button>
  </div>
  <div class="fh-cluster" style="--fh-gap: var(--fh-space-4); --fh-align: center" role="group" aria-label="Records are rounded squares.">
    <code>record</code>
    <span class="fh-avatar fh-avatar--xs" data-kind="record" role="img" aria-label="Goal GL-014" data-fh="AVT-6.1">GL</span>
    <span class="fh-avatar fh-avatar--sm" data-kind="record" role="img" aria-label="Goal GL-014" data-fh="AVT-6.1">GL</span>
    <span class="fh-avatar" data-kind="record" role="img" aria-label="Goal GL-014" data-fh="AVT-6.1">GL</span>
    <span class="fh-avatar fh-avatar--lg" data-kind="record" role="img" aria-label="Goal GL-014" data-fh="AVT-6.1">GL</span>
    <span class="fh-avatar fh-avatar--xl" data-kind="record" role="img" aria-label="Goal GL-014" data-fh="AVT-6.1">GL</span>
    <span class="fh-avatar fh-avatar--2xl" data-kind="record" role="img" aria-label="Goal GL-014" data-fh="AVT-6.1">GL</span>
    <span class="fh-avatars" role="group" aria-label="Goal GL-014, Goal GL-015, Goal GL-016 and 1 more" data-fh="AVT-6.1"><span class="fh-avatar" data-kind="record" role="img" aria-label="Goal GL-014" data-fh="AVT">GL</span><span class="fh-avatar" data-kind="record" role="img" aria-label="Goal GL-015" data-fh="AVT">GL</span><span class="fh-avatar" data-kind="record" role="img" aria-label="Goal GL-016" data-fh="AVT">GL</span><span class="fh-avatar fh-avatars__more" data-kind="record" aria-hidden="true" data-fh="AVT">+1</span></span>
    <button class="fh-avatar fh-avatar--add" data-kind="record" type="button" aria-label="Add a record" data-fh="AVT-6.1"><i class="fh-icon fh-icon--plus" aria-hidden="true"></i></button>
  </div>
</div>
```

#### AVT-6.2 · Kinds · dark

```html
<div class="fh-stack">
  <div class="fh-cluster" style="--fh-gap: var(--fh-space-4); --fh-align: center" role="group" aria-label="People are circles.">
    <code>person</code>
    <span class="fh-avatar fh-avatar--xs" data-kind="person" data-face data-fh="AVT-6.2"><img src="img/avatars/ava.webp" alt="Ava Mendes"></span>
    <span class="fh-avatar fh-avatar--sm" data-kind="person" data-face data-fh="AVT-6.2"><img src="img/avatars/ava.webp" alt="Ava Mendes"></span>
    <span class="fh-avatar" data-kind="person" data-face data-fh="AVT-6.2"><img src="img/avatars/ava.webp" alt="Ava Mendes"></span>
    <span class="fh-avatar fh-avatar--lg" data-kind="person" data-face data-fh="AVT-6.2"><img src="img/avatars/ava.webp" alt="Ava Mendes"></span>
    <span class="fh-avatar fh-avatar--xl" data-kind="person" data-face data-fh="AVT-6.2"><img src="img/avatars/ava.webp" alt="Ava Mendes"></span>
    <span class="fh-avatar fh-avatar--2xl" data-kind="person" data-face data-fh="AVT-6.2"><img src="img/avatars/ava.webp" alt="Ava Mendes"></span>
    <span class="fh-avatars" role="group" aria-label="Mateo Ruiz, Eleanor Park, Ray Okafor and 2 more" data-fh="AVT-6.2"><span class="fh-avatar" data-kind="person" data-face data-fh="AVT"><img src="img/avatars/mateo.webp" alt="Mateo Ruiz"></span><span class="fh-avatar" data-kind="person" data-face data-fh="AVT"><img src="img/avatars/eleanor.webp" alt="Eleanor Park"></span><span class="fh-avatar" data-kind="person" data-face data-fh="AVT"><img src="img/avatars/ray.webp" alt="Ray Okafor"></span><span class="fh-avatar fh-avatars__more" data-kind="person" aria-hidden="true" data-fh="AVT">+2</span></span>
    <button class="fh-avatar fh-avatar--add" data-kind="person" type="button" aria-label="Add a person" data-fh="AVT-6.2"><i class="fh-icon fh-icon--plus" aria-hidden="true"></i></button>
  </div>
  <div class="fh-cluster" style="--fh-gap: var(--fh-space-4); --fh-align: center" role="group" aria-label="Orgs are rounded squares.">
    <code>org</code>
    <span class="fh-avatar fh-avatar--xs" data-kind="org" role="img" aria-label="Northwind Studio" data-fh="AVT-6.2">NS</span>
    <span class="fh-avatar fh-avatar--sm" data-kind="org" role="img" aria-label="Northwind Studio" data-fh="AVT-6.2">NS</span>
    <span class="fh-avatar" data-kind="org" role="img" aria-label="Northwind Studio" data-fh="AVT-6.2">NS</span>
    <span class="fh-avatar fh-avatar--lg" data-kind="org" role="img" aria-label="Northwind Studio" data-fh="AVT-6.2">NS</span>
    <span class="fh-avatar fh-avatar--xl" data-kind="org" role="img" aria-label="Northwind Studio" data-fh="AVT-6.2">NS</span>
    <span class="fh-avatar fh-avatar--2xl" data-kind="org" role="img" aria-label="Northwind Studio" data-fh="AVT-6.2">NS</span>
    <span class="fh-avatars" role="group" aria-label="Northwind Studio, Halcyon Health, Juniper Labs and 2 more" data-fh="AVT-6.2"><span class="fh-avatar" data-kind="org" role="img" aria-label="Northwind Studio" data-fh="AVT">NS</span><span class="fh-avatar" data-kind="org" role="img" aria-label="Halcyon Health" data-fh="AVT">HH</span><span class="fh-avatar" data-kind="org" role="img" aria-label="Juniper Labs" data-fh="AVT">JL</span><span class="fh-avatar fh-avatars__more" data-kind="org" aria-hidden="true" data-fh="AVT">+2</span></span>
    <button class="fh-avatar fh-avatar--add" data-kind="org" type="button" aria-label="Add an org" data-fh="AVT-6.2"><i class="fh-icon fh-icon--plus" aria-hidden="true"></i></button>
  </div>
  <div class="fh-cluster" style="--fh-gap: var(--fh-space-4); --fh-align: center" role="group" aria-label="Agents are rounded squares.">
    <code>agent</code>
    <span class="fh-avatar fh-avatar--xs" data-kind="agent" data-face data-fh="AVT-6.2"><img src="img/avatars/reginald.webp" alt="Reginald, support agent"></span>
    <span class="fh-avatar fh-avatar--sm" data-kind="agent" data-face data-fh="AVT-6.2"><img src="img/avatars/reginald.webp" alt="Reginald, support agent"></span>
    <span class="fh-avatar" data-kind="agent" data-face data-fh="AVT-6.2"><img src="img/avatars/reginald.webp" alt="Reginald, support agent"></span>
    <span class="fh-avatar fh-avatar--lg" data-kind="agent" data-face data-fh="AVT-6.2"><img src="img/avatars/reginald.webp" alt="Reginald, support agent"></span>
    <span class="fh-avatar fh-avatar--xl" data-kind="agent" data-face data-fh="AVT-6.2"><img src="img/avatars/reginald.webp" alt="Reginald, support agent"></span>
    <span class="fh-avatar fh-avatar--2xl" data-kind="agent" data-face data-fh="AVT-6.2"><img src="img/avatars/reginald.webp" alt="Reginald, support agent"></span>
    <span class="fh-avatars" role="group" aria-label="Reginald, Scout, Ledger and 2 more" data-fh="AVT-6.2"><span class="fh-avatar" data-kind="agent" data-face data-fh="AVT"><img src="img/avatars/reginald.webp" alt="Reginald"></span><span class="fh-avatar" data-kind="agent" role="img" aria-label="Scout" data-fh="AVT">SC</span><span class="fh-avatar" data-kind="agent" role="img" aria-label="Ledger" data-fh="AVT">LD</span><span class="fh-avatar fh-avatars__more" data-kind="agent" aria-hidden="true" data-fh="AVT">+2</span></span>
    <button class="fh-avatar fh-avatar--add" data-kind="agent" type="button" aria-label="Add an agent" data-fh="AVT-6.2"><i class="fh-icon fh-icon--plus" aria-hidden="true"></i></button>
  </div>
  <div class="fh-cluster" style="--fh-gap: var(--fh-space-4); --fh-align: center" role="group" aria-label="Records are rounded squares.">
    <code>record</code>
    <span class="fh-avatar fh-avatar--xs" data-kind="record" role="img" aria-label="Goal GL-014" data-fh="AVT-6.2">GL</span>
    <span class="fh-avatar fh-avatar--sm" data-kind="record" role="img" aria-label="Goal GL-014" data-fh="AVT-6.2">GL</span>
    <span class="fh-avatar" data-kind="record" role="img" aria-label="Goal GL-014" data-fh="AVT-6.2">GL</span>
    <span class="fh-avatar fh-avatar--lg" data-kind="record" role="img" aria-label="Goal GL-014" data-fh="AVT-6.2">GL</span>
    <span class="fh-avatar fh-avatar--xl" data-kind="record" role="img" aria-label="Goal GL-014" data-fh="AVT-6.2">GL</span>
    <span class="fh-avatar fh-avatar--2xl" data-kind="record" role="img" aria-label="Goal GL-014" data-fh="AVT-6.2">GL</span>
    <span class="fh-avatars" role="group" aria-label="Goal GL-014, Goal GL-015, Goal GL-016 and 1 more" data-fh="AVT-6.2"><span class="fh-avatar" data-kind="record" role="img" aria-label="Goal GL-014" data-fh="AVT">GL</span><span class="fh-avatar" data-kind="record" role="img" aria-label="Goal GL-015" data-fh="AVT">GL</span><span class="fh-avatar" data-kind="record" role="img" aria-label="Goal GL-016" data-fh="AVT">GL</span><span class="fh-avatar fh-avatars__more" data-kind="record" aria-hidden="true" data-fh="AVT">+1</span></span>
    <button class="fh-avatar fh-avatar--add" data-kind="record" type="button" aria-label="Add a record" data-fh="AVT-6.2"><i class="fh-icon fh-icon--plus" aria-hidden="true"></i></button>
  </div>
</div>
```

## AUT · Sign in & sign up

Four layouts, all container-sized. Split puts the art beside the form and moves it on top in narrow slots; Card floats the form over full-bleed art; Glass frosts the form over the art; Plain is the form alone.

Layer: composite. Slots: `media` `fields` `meta` `body` `actions` `links` `link`.

Classes: `fh-auth` `fh-auth__art` `fh-auth__panel` `fh-auth__brand` `fh-icon` `fh-segmented` `fh-auth__switch` `fh-sr-only` `fh-auth__head` `fh-auth__form` `fh-field` `fh-input` `fh-input-group` `fh-input-reveal` `fh-auth__row` `fh-check` `fh-button` `fh-divider` `fh-auth__social` `fh-button--secondary` `fh-field__hint` `fh-auth__foot` `fh-auth--card` `fh-auth--plain` `fh-auth--glass` `fh-auth__corner` `fh-segmented--sm` `fh-auth__logo` `fh-auth__method` `fh-auth__forgot` `fh-auth__rules`

### AUT-1 · Layouts

#### AUT-1.1 · Split · etched art

```html
<section class="fh-auth" data-tone="teal" aria-label="Sign in or create an account" data-fh="AUT-1.1">
  <div class="fh-auth__art" aria-hidden="true" data-fh-slot="media"></div>
  <div class="fh-auth__panel">
    <p class="fh-auth__brand" data-fh-slot="media"><i class="fh-icon fh-icon--shield-check" aria-hidden="true"></i><b>Northwind Studio</b></p>
    <fieldset class="fh-segmented fh-auth__switch" data-fh="SEG" data-fh-slot="fields">
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
      <div class="fh-field" data-fh="FLD-4.1" data-fh-slot="fields"><label for="auth-split-email">Email</label><input class="fh-input" id="auth-split-email" name="email" type="email" autocomplete="email" required placeholder="you@company.com" data-fh="FLD"></div>
      <div class="fh-field" data-fh="FLD-4.1" data-fh-slot="fields"><label for="auth-split-pass">Password</label><div class="fh-input-group" data-fh="FLD"><input class="fh-input" id="auth-split-pass" name="password" type="password" autocomplete="current-password" required minlength="8" data-fh="FLD"><button class="fh-input-reveal" type="button" aria-label="Show password" aria-pressed="false"></button></div></div>
      <div class="fh-auth__row"><label class="fh-check" data-fh="CHO" data-fh-slot="fields"><input type="checkbox" name="remember"> Remember me</label><a href="#forms">Forgot password?</a></div>
      <button class="fh-button" type="submit" data-fh="BTN" data-fh-slot="actions">Sign in</button>
      <p class="fh-divider" data-fh="DET" data-fh-slot="body">or</p>
      <div class="fh-auth__social">
        <button class="fh-button fh-button--secondary" type="button" data-fh="BTN-1.5" data-fh-slot="links"><i class="fh-icon fh-icon--github" aria-hidden="true"></i>GitHub</button>
        <button class="fh-button fh-button--secondary" type="button" data-fh="BTN-1.5" data-fh-slot="links"><i class="fh-icon fh-icon--mail" aria-hidden="true"></i>Email a link</button>
      </div>
    </form>
    <form class="fh-auth__form" data-fh-auth="up" method="post" action="/auth/sign-up">
      <div class="fh-field" data-fh="FLD-4.1" data-fh-slot="fields"><label for="auth-split-name">Name</label><input class="fh-input" id="auth-split-name" name="name" autocomplete="name" required placeholder="Ada Lovelace" data-fh="FLD"></div>
      <div class="fh-field" data-fh="FLD-4.1" data-fh-slot="fields"><label for="auth-split-new-email">Email</label><input class="fh-input" id="auth-split-new-email" name="email" type="email" autocomplete="email" required placeholder="you@company.com" data-fh="FLD"></div>
      <div class="fh-field" data-fh="FLD-4.1" data-fh-slot="fields"><label for="auth-split-new-pass">Password</label><div class="fh-input-group" data-fh="FLD"><input class="fh-input" id="auth-split-new-pass" name="password" type="password" autocomplete="new-password" required minlength="8" data-fh="FLD"><button class="fh-input-reveal" type="button" aria-label="Show password" aria-pressed="false"></button></div><p class="fh-field__hint">8 characters or more.</p></div>
      <label class="fh-check" data-fh="CHO" data-fh-slot="fields"><input type="checkbox" name="terms" required> I agree to the terms and privacy policy</label>
      <button class="fh-button" type="submit" data-fh="BTN" data-fh-slot="actions">Create account</button>
      <p class="fh-divider" data-fh="DET" data-fh-slot="body">or</p>
      <div class="fh-auth__social">
        <button class="fh-button fh-button--secondary" type="button" data-fh="BTN-1.5" data-fh-slot="links"><i class="fh-icon fh-icon--github" aria-hidden="true"></i>GitHub</button>
        <button class="fh-button fh-button--secondary" type="button" data-fh="BTN-1.5" data-fh-slot="links"><i class="fh-icon fh-icon--mail" aria-hidden="true"></i>Email a link</button>
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
  <div class="fh-auth__art" aria-hidden="true" data-fh-slot="media"></div>
  <div class="fh-auth__panel">
    <p class="fh-auth__brand" data-fh-slot="media"><i class="fh-icon fh-icon--shield-check" aria-hidden="true"></i><b>Northwind Studio</b></p>
    <fieldset class="fh-segmented fh-auth__switch" data-fh="SEG" data-fh-slot="fields">
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
      <div class="fh-field" data-fh="FLD-4.1" data-fh-slot="fields"><label for="auth-card-email">Email</label><input class="fh-input" id="auth-card-email" name="email" type="email" autocomplete="email" required placeholder="you@company.com" data-fh="FLD"></div>
      <div class="fh-field" data-fh="FLD-4.1" data-fh-slot="fields"><label for="auth-card-pass">Password</label><div class="fh-input-group" data-fh="FLD"><input class="fh-input" id="auth-card-pass" name="password" type="password" autocomplete="current-password" required minlength="8" data-fh="FLD"><button class="fh-input-reveal" type="button" aria-label="Show password" aria-pressed="false"></button></div></div>
      <div class="fh-auth__row"><label class="fh-check" data-fh="CHO" data-fh-slot="fields"><input type="checkbox" name="remember"> Remember me</label><a href="#forms">Forgot password?</a></div>
      <button class="fh-button" type="submit" data-fh="BTN" data-fh-slot="actions">Sign in</button>
      <p class="fh-divider" data-fh="DET" data-fh-slot="body">or</p>
      <div class="fh-auth__social">
        <button class="fh-button fh-button--secondary" type="button" data-fh="BTN-1.5" data-fh-slot="links"><i class="fh-icon fh-icon--github" aria-hidden="true"></i>GitHub</button>
        <button class="fh-button fh-button--secondary" type="button" data-fh="BTN-1.5" data-fh-slot="links"><i class="fh-icon fh-icon--mail" aria-hidden="true"></i>Email a link</button>
      </div>
    </form>
    <form class="fh-auth__form" data-fh-auth="up" method="post" action="/auth/sign-up">
      <div class="fh-field" data-fh="FLD-4.1" data-fh-slot="fields"><label for="auth-card-name">Name</label><input class="fh-input" id="auth-card-name" name="name" autocomplete="name" required placeholder="Ada Lovelace" data-fh="FLD"></div>
      <div class="fh-field" data-fh="FLD-4.1" data-fh-slot="fields"><label for="auth-card-new-email">Email</label><input class="fh-input" id="auth-card-new-email" name="email" type="email" autocomplete="email" required placeholder="you@company.com" data-fh="FLD"></div>
      <div class="fh-field" data-fh="FLD-4.1" data-fh-slot="fields"><label for="auth-card-new-pass">Password</label><div class="fh-input-group" data-fh="FLD"><input class="fh-input" id="auth-card-new-pass" name="password" type="password" autocomplete="new-password" required minlength="8" data-fh="FLD"><button class="fh-input-reveal" type="button" aria-label="Show password" aria-pressed="false"></button></div><p class="fh-field__hint">8 characters or more.</p></div>
      <label class="fh-check" data-fh="CHO" data-fh-slot="fields"><input type="checkbox" name="terms" required> I agree to the terms and privacy policy</label>
      <button class="fh-button" type="submit" data-fh="BTN" data-fh-slot="actions">Create account</button>
      <p class="fh-divider" data-fh="DET" data-fh-slot="body">or</p>
      <div class="fh-auth__social">
        <button class="fh-button fh-button--secondary" type="button" data-fh="BTN-1.5" data-fh-slot="links"><i class="fh-icon fh-icon--github" aria-hidden="true"></i>GitHub</button>
        <button class="fh-button fh-button--secondary" type="button" data-fh="BTN-1.5" data-fh-slot="links"><i class="fh-icon fh-icon--mail" aria-hidden="true"></i>Email a link</button>
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
    <p class="fh-auth__brand" data-fh-slot="media"><i class="fh-icon fh-icon--shield-check" aria-hidden="true"></i><b>Northwind Studio</b></p>
    <fieldset class="fh-segmented fh-auth__switch" data-fh="SEG" data-fh-slot="fields">
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
      <div class="fh-field" data-fh="FLD-4.1" data-fh-slot="fields"><label for="auth-plain-email">Email</label><input class="fh-input" id="auth-plain-email" name="email" type="email" autocomplete="email" required placeholder="you@company.com" data-fh="FLD"></div>
      <div class="fh-field" data-fh="FLD-4.1" data-fh-slot="fields"><label for="auth-plain-pass">Password</label><div class="fh-input-group" data-fh="FLD"><input class="fh-input" id="auth-plain-pass" name="password" type="password" autocomplete="current-password" required minlength="8" data-fh="FLD"><button class="fh-input-reveal" type="button" aria-label="Show password" aria-pressed="false"></button></div></div>
      <div class="fh-auth__row"><label class="fh-check" data-fh="CHO" data-fh-slot="fields"><input type="checkbox" name="remember"> Remember me</label><a href="#forms">Forgot password?</a></div>
      <button class="fh-button" type="submit" data-fh="BTN" data-fh-slot="actions">Sign in</button>
      <p class="fh-divider" data-fh="DET" data-fh-slot="body">or</p>
      <div class="fh-auth__social">
        <button class="fh-button fh-button--secondary" type="button" data-fh="BTN-1.5" data-fh-slot="links"><i class="fh-icon fh-icon--github" aria-hidden="true"></i>GitHub</button>
        <button class="fh-button fh-button--secondary" type="button" data-fh="BTN-1.5" data-fh-slot="links"><i class="fh-icon fh-icon--mail" aria-hidden="true"></i>Email a link</button>
      </div>
    </form>
    <form class="fh-auth__form" data-fh-auth="up" method="post" action="/auth/sign-up">
      <div class="fh-field" data-fh="FLD-4.1" data-fh-slot="fields"><label for="auth-plain-name">Name</label><input class="fh-input" id="auth-plain-name" name="name" autocomplete="name" required placeholder="Ada Lovelace" data-fh="FLD"></div>
      <div class="fh-field" data-fh="FLD-4.1" data-fh-slot="fields"><label for="auth-plain-new-email">Email</label><input class="fh-input" id="auth-plain-new-email" name="email" type="email" autocomplete="email" required placeholder="you@company.com" data-fh="FLD"></div>
      <div class="fh-field" data-fh="FLD-4.1" data-fh-slot="fields"><label for="auth-plain-new-pass">Password</label><div class="fh-input-group" data-fh="FLD"><input class="fh-input" id="auth-plain-new-pass" name="password" type="password" autocomplete="new-password" required minlength="8" data-fh="FLD"><button class="fh-input-reveal" type="button" aria-label="Show password" aria-pressed="false"></button></div><p class="fh-field__hint">8 characters or more.</p></div>
      <label class="fh-check" data-fh="CHO" data-fh-slot="fields"><input type="checkbox" name="terms" required> I agree to the terms and privacy policy</label>
      <button class="fh-button" type="submit" data-fh="BTN" data-fh-slot="actions">Create account</button>
      <p class="fh-divider" data-fh="DET" data-fh-slot="body">or</p>
      <div class="fh-auth__social">
        <button class="fh-button fh-button--secondary" type="button" data-fh="BTN-1.5" data-fh-slot="links"><i class="fh-icon fh-icon--github" aria-hidden="true"></i>GitHub</button>
        <button class="fh-button fh-button--secondary" type="button" data-fh="BTN-1.5" data-fh-slot="links"><i class="fh-icon fh-icon--mail" aria-hidden="true"></i>Email a link</button>
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
  <div class="fh-auth__art" aria-hidden="true" data-fh-slot="media"></div>
  <div class="fh-auth__corner">
    <fieldset class="fh-segmented fh-segmented--sm" data-fh="SEG" data-fh-slot="fields"><legend class="fh-sr-only">Colour scheme</legend><label><input type="radio" name="auth-glass-scheme" value="light" checked> Light</label><label><input type="radio" name="auth-glass-scheme" value="dark"> Dark</label></fieldset>
  </div>
  <div class="fh-auth__panel">
    <p class="fh-auth__brand"><span class="fh-auth__logo" style="--fh-auth-logo: none" aria-hidden="true" data-fh-slot="media"></span><b>Northwind Studio</b></p>
    <fieldset class="fh-segmented fh-auth__switch" data-fh="SEG" data-fh-slot="fields">
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
      <div class="fh-field" data-fh="FLD-4.1" data-fh-slot="fields"><label for="auth-glass-email">Email</label><input class="fh-input" id="auth-glass-email" name="email" type="email" autocomplete="email" required placeholder="you@company.com" data-fh="FLD"></div>
      <div class="fh-field" data-fh="FLD-4.1" data-fh-slot="fields"><label for="auth-glass-pass">Password</label><div class="fh-input-group" data-fh="FLD"><input class="fh-input" id="auth-glass-pass" name="password" type="password" autocomplete="current-password" required minlength="8" data-fh="FLD"><button class="fh-input-reveal" type="button" aria-label="Show password" aria-pressed="false"></button></div></div>
      <div class="fh-auth__row"><label class="fh-check" data-fh="CHO" data-fh-slot="fields"><input type="checkbox" name="remember"> Remember me</label><a href="#forms">Forgot password?</a></div>
      <button class="fh-button" type="submit" data-fh="BTN" data-fh-slot="actions">Sign in</button>
    </form>
    <form class="fh-auth__form" data-fh-auth="up" method="post" action="/auth/sign-up">
      <div class="fh-field" data-fh="FLD-4.1" data-fh-slot="fields"><label for="auth-glass-name">Name</label><input class="fh-input" id="auth-glass-name" name="name" autocomplete="name" required placeholder="Ada Lovelace" data-fh="FLD"></div>
      <div class="fh-field" data-fh="FLD-4.1" data-fh-slot="fields"><label for="auth-glass-new-email">Email</label><input class="fh-input" id="auth-glass-new-email" name="email" type="email" autocomplete="email" required placeholder="you@company.com" data-fh="FLD"></div>
      <div class="fh-field" data-fh="FLD-4.1" data-fh-slot="fields"><label for="auth-glass-new-pass">Password</label><div class="fh-input-group" data-fh="FLD"><input class="fh-input" id="auth-glass-new-pass" name="password" type="password" autocomplete="new-password" required minlength="8" data-fh="FLD"><button class="fh-input-reveal" type="button" aria-label="Show password" aria-pressed="false"></button></div></div>
      <button class="fh-button" type="submit" data-fh="BTN" data-fh-slot="actions">Create account</button>
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
  <div class="fh-auth__art" aria-hidden="true" data-fh-slot="media"></div>
  <div class="fh-auth__panel">
    <p class="fh-auth__brand" data-fh-slot="media"><i class="fh-icon fh-icon--shield-check" aria-hidden="true"></i><b>Northwind</b> Admin</p>
    <fieldset class="fh-segmented fh-auth__switch" data-fh="SEG" data-fh-slot="fields">
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
    <fieldset class="fh-segmented fh-segmented--sm fh-auth__method" data-fh-auth="in" data-fh="SEG" data-fh-slot="fields">
      <legend class="fh-sr-only">Sign in with</legend>
      <label><input type="radio" name="auth-method-how" value="password" checked> Password</label>
      <label><input type="radio" name="auth-method-how" value="link"> Email link</label>
    </fieldset>
    <form class="fh-auth__form" data-fh-auth="in" data-fh-method="password" method="post" action="/auth/sign-in">
      <div class="fh-field" data-fh="FLD-4.1" data-fh-slot="fields"><label for="auth-method-id">Username or email</label><input class="fh-input" id="auth-method-id" name="identifier" autocomplete="username" autocapitalize="none" spellcheck="false" required placeholder="yourname" data-fh="FLD"></div>
      <div class="fh-field" data-fh="FLD-4.1" data-fh-slot="fields"><label for="auth-method-pass">Password</label><div class="fh-input-group" data-fh="FLD"><input class="fh-input" id="auth-method-pass" name="password" type="password" autocomplete="current-password" required data-fh="FLD"><button class="fh-input-reveal" type="button" aria-label="Show password" aria-pressed="false"></button></div></div>
      <button class="fh-button" type="submit" data-fh="BTN" data-fh-slot="actions">Sign in</button>
    </form>
    <details class="fh-auth__forgot" data-fh-auth="in" data-fh-method="password">
      <summary>Forgot password?</summary>
      <form class="fh-auth__form" method="post" action="/auth/forgot">
        <div class="fh-field" data-fh="FLD-4.1" data-fh-slot="link"><label for="auth-method-reset">Username or email</label><input class="fh-input" id="auth-method-reset" name="identifier" autocomplete="username" autocapitalize="none" spellcheck="false" required placeholder="yourname" data-fh="FLD"></div>
        <button class="fh-button fh-button--secondary" type="submit" data-fh="BTN-1.5" data-fh-slot="link">Send reset link</button>
      </form>
    </details>
    <form class="fh-auth__form" data-fh-auth="in" data-fh-method="link" method="post" action="/auth/link">
      <div class="fh-field" data-fh="FLD-4.1" data-fh-slot="fields"><label for="auth-method-link">Username or email</label><input class="fh-input" id="auth-method-link" name="identifier" autocomplete="username" autocapitalize="none" spellcheck="false" required placeholder="yourname" data-fh="FLD"><p class="fh-field__hint">We email a one-time link to the address on your account.</p></div>
      <button class="fh-button" type="submit" data-fh="BTN" data-fh-slot="actions">Email me a link</button>
    </form>
    <form class="fh-auth__form" data-fh-auth="up" method="post" action="/auth/sign-up">
      <div class="fh-field" data-fh="FLD-4.1" data-fh-slot="fields"><label for="auth-method-new-email">Email</label><input class="fh-input" id="auth-method-new-email" name="email" type="email" autocomplete="email" required placeholder="you@company.com" data-fh="FLD"></div>
      <div class="fh-field" data-fh="FLD-4.1" data-fh-slot="fields"><label for="auth-method-user">Username</label><div class="fh-input-group" data-fh="FLD"><span aria-hidden="true">@</span><input class="fh-input" id="auth-method-user" name="username" autocomplete="username" required placeholder="yourname" aria-describedby="auth-method-rules" data-fh="FLD"></div>
        <ul class="fh-auth__rules" id="auth-method-rules"><li data-state="met">3–32 chars</li><li data-state="met">Starts with a letter</li><li data-state="met">Letters, numbers, _ only</li><li data-state="checking">Checking…</li></ul></div>
      <button class="fh-button" type="submit" data-fh="BTN" data-fh-slot="actions">Send verification link</button>
    </form>
    <p class="fh-auth__foot" data-fh-auth="in">New here? <label for="auth-method-up">Create an account</label></p>
    <p class="fh-auth__foot" data-fh-auth="up">Already have an account? <label for="auth-method-in">Sign in</label></p>
  </div>
</section>
```

## FLD · Fields

The "Required" chip comes from the input's own required attribute and settles to "Done" once the field is valid. Errors only show after the visitor has interacted, or at once with aria-invalid="true" (for errors the server sends back).

Layer: part. Slots: `label` `hint` `error` `currency` `input`.

Classes: `fh-form` `fh-form__row` `fh-field` `fh-input` `fh-field__error` `fh-field--optional` `fh-input-group` `fh-select-wrap` `fh-select` `fh-textarea` `fh-field__hint` `fh-form__actions` `fh-button` `fh-field--dictate` `fh-segment` `fh-segment--mode` `fh-dictate` `fh-dictate__mode` `fh-dictate__live` `fh-dictate__wave` `fh-dictate__clock` `fh-dictate__interim` `fh-dictate__error` `fh-icon` `fh-field--quiet` `fh-input-reveal` `fh-money` `fh-money__currency` `fh-money__select`

### FLD-1 · Fields

#### FLD-1.1 · Fields

```html
<form class="fh-form" novalidate onsubmit="event.preventDefault()" data-fh="FLD-1.1">
  <div class="fh-form__row">
    <div class="fh-field" data-fh="FLD-4.1">
      <label for="f-email">Work email</label>
      <input class="fh-input" id="f-email" type="email" required placeholder="you@company.com" data-fh="FLD">
      <p class="fh-field__error">Enter an email like name@company.com.</p>
    </div>
    <div class="fh-field fh-field--optional" data-fh="FLD-4.1">
      <label for="f-site">Website</label>
      <div class="fh-input-group" data-fh="FLD"><span>https://</span><input class="fh-input" id="f-site" placeholder="company.com" data-fh="FLD"></div>
    </div>
  </div>
  <div class="fh-field" data-fh="FLD-4.1">
    <label for="f-service">Service</label>
    <div class="fh-select-wrap" data-fh="THS">
      <select class="fh-select" id="f-service" required data-fh="THS">
        <option value>Choose a service</option>
        <option>Data architecture</option>
        <option>Automation</option>
        <option>AI agents</option>
      </select>
    </div>
  </div>
  <div class="fh-field fh-field--optional" data-fh="FLD-4.1">
    <label for="f-msg">What's going on?</label>
    <textarea class="fh-textarea" id="f-msg" placeholder="A few lines is plenty." data-fh="FLD"></textarea>
    <p class="fh-field__hint">We reply within one business day.</p>
  </div>
  <div class="fh-form__actions">
    <button class="fh-button" type="submit" data-fh="BTN">Send inquiry</button>
  </div>
</form>
```

### FLD-2 · Dictation

Type or talk. The label and a Text | Transcribe switch share the first row, text only or with a keyboard and a mic (data-fh-dictate="icons"); while listening, a live caption shows the waveform, clock and interim words. Progressive: without the switch it is a plain textarea. Wire with data-fh-dictate (or drive the same markup yourself).

#### FLD-2.1 · Dictation

```html
<div class="fh-field fh-field--dictate" data-fh-dictate data-fh="FLD-2.1">
  <label for="f-dictate">Message</label>
  <div class="fh-segment fh-segment--mode fh-dictate" role="group" aria-label="Type, or talk and we transcribe" data-fh="SEG-2">
    <button type="button" class="fh-dictate__mode" data-mode="text" aria-pressed="true">Text</button>
    <button type="button" class="fh-dictate__mode" data-mode="voice" aria-pressed="false">Transcribe</button>
  </div>
  <textarea class="fh-textarea" id="f-dictate" placeholder="A few lines is plenty." data-fh="FLD"></textarea>
  <p class="fh-dictate__live" role="status" hidden>
    <span class="fh-dictate__wave" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span>
    <span>Listening <time class="fh-dictate__clock">0:00</time></span>
    <span class="fh-dictate__interim"></span>
  </p>
  <p class="fh-dictate__error" role="alert" hidden></p>
</div>
```

#### FLD-2.2 · Dictation, icons

```html
<div class="fh-field fh-field--dictate" data-fh-dictate="icons" data-fh="FLD-2.2">
  <label for="f-dictate-icons">Message</label>
  <div class="fh-segment fh-segment--mode fh-dictate" role="group" aria-label="Type, or talk and we transcribe" data-fh="SEG-2">
    <button type="button" class="fh-dictate__mode" data-mode="text" aria-pressed="true"><i class="fh-icon fh-icon--keyboard" aria-hidden="true"></i>Text</button>
    <button type="button" class="fh-dictate__mode" data-mode="voice" aria-pressed="false"><i class="fh-icon fh-icon--mic" aria-hidden="true"></i>Transcribe</button>
  </div>
  <textarea class="fh-textarea" id="f-dictate-icons" placeholder="A few lines is plenty." data-fh="FLD"></textarea>
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
  <textarea class="fh-textarea" id="f-quiet" placeholder="Optional detail" data-fh="FLD"></textarea>
</div>
```

### FLD-4 · Password reveal

A show and hide toggle inside a password field. Put the input in an fh-input-group and add an fh-input-reveal button after it. firehorse.js switches the input between hidden and plain text, keeps aria-pressed and the label in step, and hides the value again when the form submits.

#### FLD-4.1 · Password reveal

```html
<div class="fh-field" data-fh="FLD-4.1">
  <label for="f-reveal">Password</label>
  <div class="fh-input-group" data-fh="FLD">
    <input class="fh-input" id="f-reveal" name="password" type="password" autocomplete="off" value="correct horse battery" data-fh="FLD">
    <button class="fh-input-reveal" type="button" aria-label="Show password" aria-pressed="false"></button>
  </div>
</div>
```

## SEG · Segment switch

One etched pill of choices, or a toggle between two states. The switch is links or buttons with one current, and its entity chips match it. Every variant sets its text at one size; add fh-segment--lg to any of them for a step up; the rolling toggle is a single solid pill whose word rolls to the other state; the mode toggle fills the pressed button, as in the dictation field's Text | Transcribe, with or without an icon before each label.

Layer: part.

Classes: `fh-segment` `fh-segment--entities` `fh-segment--roll` `fh-segment__roll` `fh-segment--mode` `fh-icon`

### SEG-1 · Switch

#### SEG-1.1 · Switch

```html
<nav class="fh-segment" aria-label="Segment" data-fh="SEG-1.1">
  <a href="#c-segment" aria-current="true">All <b>9</b></a>
  <a href="#c-segment" data-tone="amber">Business <b>5</b></a>
  <a href="#c-segment" data-tone="sky">Personal <b>4</b></a>
</nav>
```

#### SEG-1.2 · Entities

```html
<nav class="fh-segment fh-segment--entities" aria-label="Business" data-fh="SEG-1.2">
  <a href="#c-segment" aria-current="true">All businesses</a>
  <a href="#c-segment" data-tone="orange">Rascode</a>
  <a href="#c-segment" data-tone="violet">Lymynal</a>
</nav>
```

### SEG-2 · Toggle

#### SEG-2.1 · Rolling toggle

```html
<button class="fh-segment fh-segment--roll" type="button" aria-pressed="false" aria-label="Dark mode" onclick="this.setAttribute('aria-pressed', String(this.getAttribute('aria-pressed') !== 'true'))" data-fh="SEG-2.1"><span class="fh-segment__roll" aria-hidden="true"><span>Light</span><span>Dark</span></span></button>
```

#### SEG-2.2 · Mode toggle

```html
<div class="fh-segment fh-segment--mode" role="group" aria-label="Input" onclick="const b = event.target.closest('button'); if (b) for (const x of this.querySelectorAll('button')) x.setAttribute('aria-pressed', String(x === b))" data-fh="SEG-2.2">
  <button type="button" aria-pressed="true">Text</button>
  <button type="button" aria-pressed="false">Transcribe</button>
</div>
```

#### SEG-2.3 · Mode toggle, icons

```html
<div class="fh-segment fh-segment--mode" role="group" aria-label="Input" onclick="const b = event.target.closest('button'); if (b) for (const x of this.querySelectorAll('button')) x.setAttribute('aria-pressed', String(x === b))" data-fh="SEG-2.3">
  <button type="button" aria-pressed="true"><i class="fh-icon fh-icon--keyboard" aria-hidden="true"></i>Text</button>
  <button type="button" aria-pressed="false"><i class="fh-icon fh-icon--mic" aria-hidden="true"></i>Transcribe</button>
</div>
```

## CHO · Choices

Real radios and checkboxes under the styling, so they submit with the form and work with the keyboard. The segmented switch stays a row in a phone-width slot; add fh-segmented--stack to stack its options.

Layer: part.

Classes: `fh-choice-row` `fh-choice`

### CHO-1 · Choice row

The Helm iOS form choice: fh-choice-row holds fh-choice pills, each led by its tone dot, and wraps. A choice is a toggle (aria-pressed); for one of many, the row is a radiogroup and each choice a radio with aria-checked. Knobs: --fh-choice-row-gap, --fh-choice-size.

#### CHO-1.1 · Several

```html
<div class="fh-choice-row" role="group" aria-label="Days" onclick="const b = event.target.closest('.fh-choice'); if (b) b.setAttribute('aria-pressed', b.getAttribute('aria-pressed') !== 'true')" data-fh="CHO-1.1">
  <button class="fh-choice" type="button" data-tone="lime" aria-pressed="true">Mon</button>
  <button class="fh-choice" type="button" data-tone="lime" aria-pressed="true">Wed</button>
  <button class="fh-choice" type="button" data-tone="lime" aria-pressed="false">Fri</button>
  <button class="fh-choice" type="button" data-tone="lime" aria-pressed="false">Sun</button>
</div>
```

#### CHO-1.2 · One of many

```html
<div class="fh-choice-row" role="radiogroup" aria-label="Area" onclick="const b = event.target.closest('.fh-choice'); if (b) for (const x of this.querySelectorAll('.fh-choice')) x.setAttribute('aria-checked', x === b)" data-fh="CHO-1.2">
  <button class="fh-choice" type="button" role="radio" data-tone="lime" aria-checked="true">Health</button>
  <button class="fh-choice" type="button" role="radio" data-tone="sky" aria-checked="false">Work</button>
  <button class="fh-choice" type="button" role="radio" data-tone="amber" aria-checked="false">Money</button>
  <button class="fh-choice" type="button" role="radio" data-tone="violet" aria-checked="false">Home</button>
</div>
```

## UPL · Upload, range, tags, sheet

A dropzone over a real file input, a styled range, a tag field, and a dialog that slides in as a side sheet.

Layer: part.

Classes: `fh-grid` `fh-dropzone` `fh-dropzone__title` `fh-dropzone__hint` `fh-stack` `fh-stack--lg` `fh-field` `fh-range` `fh-field--optional` `fh-tags` `fh-chip` `fh-chip__remove` `fh-button` `fh-button--secondary` `fh-dialog` `fh-dialog--sheet` `fh-dialog__header` `fh-subheading` `fh-close` `fh-dialog__body` `fh-check` `fh-switch` `fh-dl` `fh-dialog__footer`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/forms/upload-range-tags-sheet/.

## TAG · Tag field

Toned chips with a remove button and an input in one field. The inline variant adds no chrome until it is used: a text link with no tags, then a small round plus that opens room for one more.

Layer: part.

Classes: `fh-field` `fh-field--optional` `fh-tags` `fh-chip` `fh-chip__remove` `fh-cluster` `fh-button` `fh-button--sm` `fh-button--ghost` `fh-icon` `fh-tags--inline` `fh-tags__add` `fh-tags__entry` `fh-tags__prefix`

### TAG-1 · Field

#### TAG-1.1 · Field

```html
<div class="fh-field fh-field--optional" data-fh="TAG-1.1"><label for="tg-channels">Channels</label>
  <div class="fh-tags" data-fh="TAG">
    <span class="fh-chip" data-tone="sky" data-fh="CHP">Messenger <button class="fh-chip__remove" type="button" aria-label="Remove Messenger"></button></span>
    <span class="fh-chip" data-tone="lime" data-fh="CHP">WhatsApp <button class="fh-chip__remove" type="button" aria-label="Remove WhatsApp"></button></span>
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
  <span class="fh-chip" data-tone="orange" data-fh="CHP">applications <button class="fh-chip__remove" type="button" aria-label="Remove applications"></button></span>
  <span class="fh-chip" data-tone="lime" data-fh="CHP">health <button class="fh-chip__remove" type="button" aria-label="Remove health"></button></span>
  <button class="fh-tags__add" type="button" aria-label="Add a tag"></button>
</div>
```

#### TAG-2.4 · Inline · link entry

```html
<div class="fh-tags fh-tags--inline" data-fh="TAG-2.4">
  <span class="fh-chip" data-tone="sky" data-fh="CHP">utbms.com <button class="fh-chip__remove" type="button" aria-label="Remove utbms.com"></button></span>
  <span class="fh-tags__entry"><button class="fh-tags__prefix" type="button" aria-label="Protocol: https, click for http">https://</button><input aria-label="Link" placeholder="example.com/page"></span>
</div>
```

## DTB · Datatable

Fields and rows in, a database out: search, filters, multi-sort, grouping with totals, three views and expandable rows. Every value is drawn by the data display contract (renderValue(), the Values parts): status as dot and word in a cell and a chip on a card or lane, money with its currency, people as avatars. Rest on a header, or press its Display as button, to show that column another way the contract allows; your pick stays in this browser. expand: true opens a row's other fields under it as a record table.

Layer: composite. Slots: `title` `actions` `count` `value` `chips` `body` `stage` `caption` `link`.

Classes: `fh-dt` `fh-dt--records` `fh-dt__scroll` `fh-dt__table` `fh-value` `fh-value--ref-key` `fh-ref` `fh-ref__label` `fh-ref__key` `fh-value--ref` `fh-value--duration` `fh-value--tabular` `fh-value--dot` `fh-dot` `fh-ref--gone` `fh-ref__note` `fh-sr-only` `fh-dt__expand` `fh-value--plain` `fh-dt__detail` `fh-panel-section__stage` `fh-button` `fh-button--secondary` `fh-panel-section__caption` `fh-chips` `fh-chips--wrap` `fh-chip` `fh-button--accent` `fh-value--date` `fh-dt--tree` `fh-dt__node`

### DTB-1 · Datatable

#### DTB-1.1 · Datatable

```html
<div class="fh-dt" id="pipeline" style="--fh-dt-height: 36rem" data-tone="sky" aria-label="Client pipeline (sample data)" data-fh="DTB-1.1"></div>
```

## TBL · Table

Static markup, or table.js from the same fields and rows the datatable takes (fields mode, no toolbar): every cell a Values part, each header naming its field and each cell its raw value, so any viewer can re-display a column from its Display as button. With fh-table--reflow, rows turn into labelled cards when the slot is under 36rem. fh-table__head in the caption is a title with a count chip.

Layer: composite. Slots: `body` `date` `link` `fields` `value` `actions` `chips` `hint`.

Classes: `fh-table-wrap` `fh-table` `fh-table--reflow` `fh-num` `fh-badge` `fh-table__th` `fh-roll` `fh-colmenu__button` `fh-value` `fh-value--mono` `fh-value--ref` `fh-ref` `fh-ref__label` `fh-value--avatar-name` `fh-avatar` `fh-avatar--circle` `fh-value__name` `fh-value--dot` `fh-dot` `fh-value--date-relative` `fh-value__sub` `fh-value--amount` `fh-value--tabular` `fh-sr-only` `fh-table__head` `fh-subheading` `fh-chip` `fh-record-table` `fh-record-table--read` `fh-value--line` `fh-value--copyable` `fh-kbd` `fh-value__action` `fh-icon` `fh-value--plain` `fh-value--unit` `fh-value--chip` `fh-chip--tone` `fh-chip--sm` `fh-record-table--fields` `fh-value--input` `fh-value--field` `fh-input` `fh-value--email-input` `fh-value--segmented` `fh-segment` `fh-segment--mode` `fh-value--switch` `fh-check` `fh-switch` `fh-record-table__full` `fh-value--textarea` `fh-textarea` `fh-record-table--mixed` `fh-value--full` `fh-entity` `fh-entity__who` `fh-value--amount-code` `fh-value--file-row` `fh-files` `fh-value--prose` `fh-record-table--review` `fh-action` `fh-record-table__edit` `fh-value--email` `fh-link` `fh-record-table--stacked` `fh-value--date` `fh-value--chips-inline` `fh-chips` `fh-segmented` `fh-segmented--sm`

### TBL-1 · Table

#### TBL-1.1 · Table

```html
<div class="fh-table-wrap" data-fh="TBL-1.1">
  <table class="fh-table fh-table--reflow" data-fh="TBL-1" data-fh-slot="body">
    <thead><tr><th>Invoice</th><th>Client</th><th>Status</th><th class="fh-num">Amount</th></tr></thead>
    <tbody>
      <tr><td data-label="Invoice">RC-0142</td><td data-label="Client">Northwind</td><td data-label="Status"><span class="fh-badge" data-tone="lime" data-fh="CLS-1">Paid</span></td><td data-label="Amount" class="fh-num">$4,800.00</td></tr>
      <tr><td data-label="Invoice">RC-0143</td><td data-label="Client">Tastin</td><td data-label="Status"><span class="fh-badge" data-tone="amber" data-fh="CLS-1">Sent</span></td><td data-label="Amount" class="fh-num">$1,250.00</td></tr>
      <tr><td data-label="Invoice">RC-0144</td><td data-label="Client">Halcyon</td><td data-label="Status"><span class="fh-badge" data-fh="CLS-1">Draft</span></td><td data-label="Amount" class="fh-num">$750.00</td></tr>
    </tbody>
  </table>
</div>
```

### TBL-2 · Caption head

#### TBL-2.1 · Caption head

```html
<div class="fh-table-wrap" data-fh="TBL-2.1">
  <table class="fh-table" data-fh="TBL" data-fh-slot="body">
    <caption><div class="fh-table__head"><h3 class="fh-subheading">Schema columns</h3><span class="fh-chip" data-tone="sky" data-fh="CHP" data-fh-slot="chips">12</span></div></caption>
    <thead><tr><th>Name</th><th>Type</th><th>Notes</th></tr></thead>
    <tbody>
      <tr><td>uuid</td><td>uuid</td><td>Primary key</td></tr>
      <tr><td>name</td><td>text</td><td>Display name</td></tr>
    </tbody>
  </table>
</div>
```

### TBL-3 · Record table

One record as a table turned on its side: a row per field, the label on the left and the value on the right, each value a Values part in the record context. --read is one column; --fields puts a field beside each label (the form context); --mixed runs two columns of rows from 38rem, with long values (fh-record-table__full) across both; --review adds an Edit action to each row; --stacked puts the label over its value in a narrow slot. record-table.js draws it from fields and a record and puts the display menu on each label. The Key value list (KVL), Review rows (RVW) and the description list moved here; their classes still work. Row spacing is set once for the page with data-fh-rows (sm · md · lg · xl) and applies to every table and record table; data-fh-rows-select on a segmented switch changes it live.

#### TBL-3.1 · Read

```html
<dl class="fh-record-table fh-record-table--read" aria-label="Parcel" data-fh-was="KVL-1.1" data-fh="TBL-3.1">
  <div data-fh-field="county" data-semantic="short_text"><dt>County</dt><dd data-fh-value="&quot;Travis&quot;"><span class="fh-value fh-value--line" data-fh="VAL-11.5" data-fh-slot="value"><span class="fh-value__name">Travis</span></span></dd></div>
  <div data-fh-field="parcel" data-semantic="external_id"><dt data-fh-colmenu-host><span class="fh-roll">Parcel</span><button class="fh-colmenu__button" type="button" aria-haspopup="menu" aria-expanded="false" data-fh-colmenu="parcel" aria-label="Display Parcel as" title="Display as" data-fh-slot="actions"></button></dt><dd data-fh-value="&quot;0219-0402-11&quot;"><span class="fh-value fh-value--copyable" data-fh="VAL-11.8" data-fh-slot="value"><code class="fh-kbd" title="0219-0402-11">0219-0402-11</code><button class="fh-value__action" type="button" aria-label="Copy Parcel" title="Copy" onclick="navigator.clipboard?.writeText(this.previousElementSibling.title)"><i class="fh-icon fh-icon--copy" aria-hidden="true"></i></button></span></dd></div>
  <div data-fh-field="built" data-fh-field-json="{&quot;shape&quot;:&quot;number&quot;,&quot;kind&quot;:&quot;id&quot;}"><dt>Year built</dt><dd data-fh-value="1987"><span class="fh-value fh-value--plain fh-value--tabular" data-fh="VAL-6.1" data-fh-slot="value">1987</span></dd></div>
  <div data-fh-field="lot" data-fh-field-json="{&quot;shape&quot;:&quot;number&quot;,&quot;unit&quot;:&quot;ac&quot;}"><dt data-fh-colmenu-host><span class="fh-roll">Lot</span><button class="fh-colmenu__button" type="button" aria-haspopup="menu" aria-expanded="false" data-fh-colmenu="lot" aria-label="Display Lot as" title="Display as" data-fh-slot="actions"></button></dt><dd data-fh-value="0.21"><span class="fh-value fh-value--unit fh-value--tabular" data-fh="VAL-6.2" data-fh-slot="value">0.21<span class="fh-value__sub">ac</span></span></dd></div>
  <div data-fh-field="zoning" data-fh-field-json="{&quot;shape&quot;:&quot;option&quot;,&quot;options&quot;:[{&quot;value&quot;:&quot;r1&quot;,&quot;label&quot;:&quot;R-1 residential&quot;,&quot;tone&quot;:&quot;teal&quot;},{&quot;value&quot;:&quot;c2&quot;,&quot;label&quot;:&quot;C-2 commercial&quot;,&quot;tone&quot;:&quot;violet&quot;}]}"><dt data-fh-colmenu-host><span class="fh-roll">Zoning</span><button class="fh-colmenu__button" type="button" aria-haspopup="menu" aria-expanded="false" data-fh-colmenu="zoning" aria-label="Display Zoning as" title="Display as" data-fh-slot="actions"></button></dt><dd data-fh-value="&quot;r1&quot;"><span class="fh-value fh-value--chip" data-fh="VAL-1.2" data-fh-slot="value"><span class="fh-chip fh-chip--tone fh-chip--sm" data-tone="teal" data-fh="CHP">R-1 residential</span></span></dd></div>
</dl>
```

#### TBL-3.2 · Fields

```html
<dl class="fh-record-table fh-record-table--fields" aria-label="Business" data-fh-was="KVL-1.2" data-fh="TBL-3.2">
  <div data-fh-field="legal" data-semantic="legal_name"><dt><label for="rt-fields-legal">Legal name</label></dt><dd data-fh-value="&quot;Acme Supply Co. LLC&quot;"><div class="fh-value fh-value--input fh-value--field" data-mode="edit" data-fh="VAL-11.6" data-fh-slot="value"><input class="fh-input" type="text" value="Acme Supply Co. LLC" name="legal" id="rt-fields-legal" aria-label="Legal name" data-fh="FLD"></div></dd></div>
  <div data-fh-field="dba" data-semantic="short_text"><dt><label for="rt-fields-dba">DBA</label></dt><dd data-fh-value="&quot;Acme&quot;"><div class="fh-value fh-value--input fh-value--field" data-mode="edit" data-fh="VAL-11.6" data-fh-slot="value"><input class="fh-input" type="text" value="Acme" name="dba" id="rt-fields-dba" aria-label="DBA" data-fh="FLD"></div></dd></div>
  <div data-fh-field="email" data-semantic="email"><dt><label for="rt-fields-email">Billing email</label></dt><dd data-fh-value="&quot;billing@acme.example&quot;"><div class="fh-value fh-value--email-input fh-value--field" data-mode="edit" data-fh="VAL-9.7" data-fh-slot="value"><input class="fh-input" type="email" value="billing@acme.example" name="email" id="rt-fields-email" aria-label="Billing email" data-fh="FLD"></div></dd></div>
  <div data-fh-field="priority" data-semantic="priority"><dt><label for="rt-fields-priority">Priority</label></dt><dd data-fh-value="&quot;medium&quot;"><div class="fh-value fh-value--segmented" data-mode="edit" data-fh="VAL-1.5" data-fh-slot="value"><div class="fh-segment fh-segment--mode" role="group" aria-label="Priority" onclick="const b = event.target.closest('button'); if (b &amp;&amp; !b.disabled) for (const x of this.querySelectorAll('button')) x.setAttribute('aria-pressed', String(x === b))" data-fh="SEG-2"><button type="button" value="low" aria-pressed="false">Low</button><button type="button" value="medium" aria-pressed="true">Medium</button><button type="button" value="high" aria-pressed="false">High</button><button type="button" value="urgent" aria-pressed="false">Urgent</button></div></div></dd></div>
  <div data-fh-field="billable" data-semantic="checkbox"><dt><label for="rt-fields-billable">Billable</label></dt><dd data-fh-value="true"><span class="fh-value fh-value--switch" data-mode="edit" data-fh="VAL-10.4" data-fh-slot="value"><label class="fh-check" data-fh="CHO"><input class="fh-switch" role="switch" type="checkbox" checked name="billable" aria-label="Billable" data-fh="SEG"></label></span></dd></div>
  <div class="fh-record-table__full" data-fh-field="about" data-semantic="description"><dt><label for="rt-fields-about">About</label></dt><dd data-fh-value="&quot;Tools and parts for small builders.&quot;"><div class="fh-value fh-value--textarea fh-value--field" data-mode="edit" data-fh="VAL-11.4" data-fh-slot="value"><textarea class="fh-textarea" rows="4" name="about" id="rt-fields-about" aria-label="About" data-fh="FLD">Tools and parts for small builders.</textarea></div></dd></div>
</dl>
```

#### TBL-3.3 · Mixed

```html
<dl class="fh-record-table fh-record-table--mixed" aria-label="Property" data-fh-was="KVL-1.3" data-fh="TBL-3.3">
  <div class="fh-record-table__full" data-fh-field="owner" data-semantic="owner_reference"><dt data-fh-colmenu-host><span class="fh-roll">Owner</span><button class="fh-colmenu__button" type="button" aria-haspopup="menu" aria-expanded="false" data-fh-colmenu="owner" aria-label="Display Owner as" title="Display as" data-fh-slot="actions"></button></dt><dd data-fh-value="{&quot;label&quot;:&quot;Maple Row Holdings LLC&quot;,&quot;description&quot;:&quot;Owner of record&quot;,&quot;initials&quot;:&quot;MR&quot;,&quot;tone&quot;:&quot;teal&quot;}"><div class="fh-value fh-value--full" data-fh="VAL-3.5" data-fh-slot="value"><span class="fh-entity" data-fh="ENT"><span class="fh-avatar fh-avatar--circle" data-tone="teal" aria-hidden="true" data-fh="AVT">MR</span><span class="fh-entity__who"><b>Maple Row Holdings LLC</b><small>Owner of record</small></span></span></div></dd></div>
  <div data-fh-field="since" data-fh-field-json="{&quot;shape&quot;:&quot;number&quot;,&quot;kind&quot;:&quot;id&quot;}"><dt>Since</dt><dd data-fh-value="2016"><span class="fh-value fh-value--plain fh-value--tabular" data-fh="VAL-6.1" data-fh-slot="value">2016</span></dd></div>
  <div data-fh-field="mortgage" data-semantic="fiat_amount" data-fh-field-json="{&quot;currency&quot;:&quot;USD&quot;}"><dt data-fh-colmenu-host><span class="fh-roll">Mortgage</span><button class="fh-colmenu__button" type="button" aria-haspopup="menu" aria-expanded="false" data-fh-colmenu="mortgage" aria-label="Display Mortgage as" title="Display as" data-fh-slot="actions"></button></dt><dd data-fh-value="212400"><span class="fh-value fh-value--amount-code fh-value--tabular fh-value--mono" data-fh="VAL-4.2" data-fh-slot="value"><data value="212400.00">$212,400.00</data><abbr class="fh-value__sub" title="US Dollar">USD</abbr></span></dd></div>
  <div data-fh-field="liens" data-semantic="short_text"><dt>Liens</dt><dd data-fh-value="&quot;None found&quot;"><span class="fh-value fh-value--line" data-fh="VAL-11.5" data-fh-slot="value"><span class="fh-value__name">None found</span></span></dd></div>
  <div data-fh-field="status" data-semantic="status"><dt data-fh-colmenu-host><span class="fh-roll">Status</span><button class="fh-colmenu__button" type="button" aria-haspopup="menu" aria-expanded="false" data-fh-colmenu="status" aria-label="Display Status as" title="Display as" data-fh-slot="actions"></button></dt><dd data-fh-value="&quot;active&quot;"><span class="fh-value fh-value--chip" data-fh="VAL-1.2" data-fh-slot="value"><span class="fh-chip fh-chip--tone fh-chip--sm" data-tone="sky" data-fh="CHP">Active</span></span></dd></div>
  <div class="fh-record-table__full" data-fh-field="files" data-semantic="document_file" data-fh-field-json="{&quot;multiple&quot;:true}"><dt data-fh-colmenu-host><span class="fh-roll">Files</span><button class="fh-colmenu__button" type="button" aria-haspopup="menu" aria-expanded="false" data-fh-colmenu="files" aria-label="Display Files as" title="Display as" data-fh-slot="actions"></button></dt><dd data-fh-value="[{&quot;name&quot;:&quot;deed.pdf&quot;,&quot;size&quot;:218000},{&quot;name&quot;:&quot;survey.png&quot;,&quot;size&quot;:64000}]"><div class="fh-value fh-value--file-row" data-fh="VAL-8.4" data-fh-slot="value"><ul class="fh-files" data-fh="SFL-2.1"><li><span><i class="fh-icon fh-icon--file-text" aria-hidden="true"></i><span>deed.pdf</span><small>213 KB</small></span></li><li><span><i class="fh-icon fh-icon--image" aria-hidden="true"></i><span>survey.png</span><small>63 KB</small></span></li></ul></div></dd></div>
  <div class="fh-record-table__full" data-fh-field="legal" data-semantic="description"><dt data-fh-colmenu-host><span class="fh-roll">Legal description</span><button class="fh-colmenu__button" type="button" aria-haspopup="menu" aria-expanded="false" data-fh-colmenu="legal" aria-label="Display Legal description as" title="Display as" data-fh-slot="actions"></button></dt><dd data-fh-value="&quot;Lot 4, Block B, Cedar Ridge Section 2, a subdivision in Travis County, Texas&quot;"><div class="fh-value fh-value--prose" data-fh="VAL-11.3" data-fh-slot="value"><p>Lot 4, Block B, Cedar Ridge Section 2, a subdivision in Travis County, Texas</p></div></dd></div>
</dl>
```

#### TBL-3.5 · Stacked

```html
<dl class="fh-record-table fh-record-table--stacked" aria-label="Subscription" data-fh="TBL-3.5">
  <div data-fh-field="plan" data-semantic="short_text"><dt>Plan</dt><dd data-fh-value="&quot;Agents · Monthly&quot;"><span class="fh-value fh-value--line" data-fh="VAL-11.5" data-fh-slot="value"><span class="fh-value__name">Agents · Monthly</span></span></dd></div>
  <div data-fh-field="renews" data-semantic="date"><dt data-fh-colmenu-host><span class="fh-roll">Renews</span><button class="fh-colmenu__button" type="button" aria-haspopup="menu" aria-expanded="false" data-fh-colmenu="renews" aria-label="Display Renews as" title="Display as" data-fh-slot="actions"></button></dt><dd data-fh-value="&quot;2026-11-28&quot;"><span class="fh-value fh-value--date" data-fh="VAL-7.1" data-fh-slot="value"><time datetime="2026-11-28">Nov 28, 2026</time></span></dd></div>
  <div data-fh-field="channels" data-fh-field-json="{&quot;shape&quot;:&quot;options&quot;,&quot;options&quot;:[{&quot;value&quot;:&quot;messenger&quot;,&quot;label&quot;:&quot;Messenger&quot;,&quot;tone&quot;:&quot;sky&quot;},{&quot;value&quot;:&quot;whatsapp&quot;,&quot;label&quot;:&quot;WhatsApp&quot;,&quot;tone&quot;:&quot;lime&quot;},{&quot;value&quot;:&quot;sms&quot;,&quot;label&quot;:&quot;SMS&quot;,&quot;tone&quot;:&quot;teal&quot;}]}"><dt data-fh-colmenu-host><span class="fh-roll">Channels</span><button class="fh-colmenu__button" type="button" aria-haspopup="menu" aria-expanded="false" data-fh-colmenu="channels" aria-label="Display Channels as" title="Display as" data-fh-slot="actions"></button></dt><dd data-fh-value="[&quot;messenger&quot;,&quot;whatsapp&quot;,&quot;sms&quot;]"><span class="fh-value fh-value--chips-inline" data-fh="VAL-2.2" data-fh-slot="value"><span class="fh-chips" data-fh="CHP"><span class="fh-chip fh-chip--sm" data-tone="sky" data-fh="CHP">Messenger</span><span class="fh-chip fh-chip--sm" data-tone="lime" data-fh="CHP">WhatsApp</span><span class="fh-chip fh-chip--sm" data-tone="teal" data-fh="CHP">SMS</span></span></span></dd></div>
</dl>
```

### TBL-4 · Row spacing

#### TBL-4.1 · Row spacing

```html
<fieldset class="fh-segmented fh-segmented--sm" data-fh-was="KVL-2.1" data-fh="TBL-4.1">
  <legend class="fh-sr-only">Row spacing</legend>
  <label><input type="radio" name="rt-rows" value="sm" data-fh-rows-select> S</label>
  <label><input type="radio" name="rt-rows" value="md" data-fh-rows-select checked> M</label>
  <label><input type="radio" name="rt-rows" value="lg" data-fh-rows-select> L</label>
  <label><input type="radio" name="rt-rows" value="xl" data-fh-rows-select> XL</label>
</fieldset>
```

## MET · Metric tiles

Drawn from data by metrics.js: the figure, its delta, a ratio and the people come from the data display contract's metric context, so an amount reads $48.2K with its change, a share is a ring, a bar or a meter against its target, and a team is a count beside its avatars. One fact per tile: label with an icon, the value, a line under it and where it came from. As many across as fit. Add an fh-progress for a share done, --needed for a fact still to fill in, or make the tile an <a> to open its area. --spread puts the label and description at the top and the value at the bottom, with a wide gap. __row holds avatars, counts and chips. __more is an etched line with a chevron: open, the tile grows in place and shows its detail, so the chevron stays under the pointer; use --full when the detail needs room. __delta shows the change (data-trend; data-good="down" where down is good), and a sparkline, ring or meter drops in as it is.

Layer: composite. Slots: `media` `label` `body` `items` `sub` `value` `source` `actions`.

Classes: `fh-metric` `fh-metric__label` `fh-cube` `fh-cube--icon` `fh-icon` `fh-metric__sub` `fh-metric__figure` `fh-metric__value` `fh-value` `fh-value--line` `fh-value__name` `fh-metric__source` `fh-value--text` `fh-value--tabular` `fh-value--bar` `fh-progress` `fh-metric--needed` `fh-value--plain-delta` `fh-metric--spread` `fh-value--plain` `fh-value--stack` `fh-avatars` `fh-avatar` `fh-avatar--circle` `fh-value--compact-delta` `fh-value--mono` `fh-metric__more` `fh-record-table` `fh-record-table--read` `fh-value--amount-code` `fh-value__sub` `fh-metric__delta` `fh-value--sparkline` `fh-sparkline` `fh-value--meter` `fh-gauge` `fh-value--avatar-ref` `fh-value--lg` `fh-avatar--square` `fh-ref` `fh-ref__label` `fh-metric--tinted` `fh-metric--full` `fh-metric--wide` `fh-table-wrap` `fh-table` `fh-table--reflow` `fh-num` `fh-value--date` `fh-value--amount` `fh-value--dot` `fh-dot` `fh-cube--soft` `fh-cube--outline` `fh-metrics` `fh-cube--solid` `fh-ring`

### MET-1 · Metric tile

#### MET-1.1 · Metric

```html
<article class="fh-metric" data-tone="teal" data-fh-slot="items" data-fh="MET-1.1">
  <p class="fh-metric__label"><span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--building-2" aria-hidden="true"></i></span>Structure</p>
  <p class="fh-metric__sub" data-fh-slot="sub">Formed 2019 · Delaware</p>
  <div class="fh-metric__figure"><p class="fh-metric__value"><span class="fh-value fh-value--line" data-fh="VAL-11.5" data-fh-slot="value"><span class="fh-value__name">LLC</span></span></p></div>
  <p class="fh-metric__source" data-fh-slot="source">State records</p>
</article>
```

#### MET-1.2 · Progress

```html
<article class="fh-metric" data-tone="lime" data-fh-slot="items" data-fh="MET-1.2">
  <p class="fh-metric__label"><span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--credit-card" aria-hidden="true"></i></span>Stripe</p>
  <p class="fh-metric__sub" data-fh-slot="sub">Next: bank account</p>
  <p class="fh-metric__value"><span class="fh-value fh-value--text fh-value--tabular" data-fh="VAL-5.1" data-fh-slot="value">82%</span></p>
  <span class="fh-value fh-value--bar" data-tone="lime" data-fh="VAL-5.2" data-fh-slot="value"><progress class="fh-progress" value="82" max="100" data-fh="FBK">82%</progress><b>82%</b></span>
</article>
```

#### MET-1.3 · Needed

```html
<article class="fh-metric fh-metric--needed" data-fh-slot="items" data-fh="MET-1.3">
  <p class="fh-metric__label"><span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--receipt" aria-hidden="true"></i></span>EIN</p>
  <p class="fh-metric__sub" data-fh-slot="sub">For Stripe and PayPal</p>
  <div class="fh-metric__figure"><p class="fh-metric__value"><span class="fh-value fh-value--line" data-fh="VAL-11.5" data-fh-slot="value"><span class="fh-value__name">Needed</span></span></p></div>
</article>
```

#### MET-1.4 · Link

```html
<a class="fh-metric" data-tone="sky" href="#a-metric" data-fh-slot="items" data-fh="MET-1.4">
  <p class="fh-metric__label"><span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--users" aria-hidden="true"></i></span>Faces</p>
  <p class="fh-metric__sub" data-fh-slot="sub">2 public</p>
  <div class="fh-metric__figure"><p class="fh-metric__value"><span class="fh-value fh-value--plain-delta fh-value--tabular" data-fh="VAL-6.4" data-fh-slot="value">4</span></p></div>
</a>
```

#### MET-1.5 · Spread

```html
<article class="fh-metric fh-metric--spread" data-tone="fuchsia" data-fh-slot="items" data-fh="MET-1.5">
  <p class="fh-metric__label"><span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--shield-check" aria-hidden="true"></i></span>Payment readiness</p>
  <p class="fh-metric__sub" data-fh-slot="sub">What Stripe still needs before payouts</p>
  <p class="fh-metric__value"><span class="fh-value fh-value--text fh-value--tabular" data-fh="VAL-5.1" data-fh-slot="value">27%</span></p>
  <span class="fh-value fh-value--bar" data-tone="fuchsia" data-fh="VAL-5.2" data-fh-slot="value"><progress class="fh-progress" value="27" max="100" data-fh="FBK">27%</progress><b>27%</b></span>
</article>
```

#### MET-1.6 · People

```html
<article class="fh-metric" data-tone="violet" data-fh-slot="items" data-fh="MET-1.6">
  <p class="fh-metric__label"><span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--users" aria-hidden="true"></i></span>Team</p>
  <div class="fh-metric__figure"><p class="fh-metric__value"><span class="fh-value fh-value--plain fh-value--tabular" data-fh="VAL-6.1" data-fh-slot="value">4</span></p><span class="fh-value fh-value--stack" data-fh="VAL-3.7" data-fh-slot="value"><span class="fh-avatars" role="group" aria-label="Team: Ava, Cole, Maya, Ray" data-fh="AVT"><span class="fh-avatar fh-avatar--circle" data-fh="AVT"><img src="/img/avatars/ava.webp" alt="Ava Mendes"></span><span class="fh-avatar fh-avatar--circle" data-fh="AVT"><img src="/img/avatars/cole.webp" alt="Cole Hart"></span><span class="fh-avatar fh-avatar--circle" data-fh="AVT"><img src="/img/avatars/maya.webp" alt="Maya Lin"></span><span class="fh-avatar fh-avatar--circle" data-fh="AVT"><img src="/img/avatars/ray.webp" alt="Ray Okafor"></span></span></span></div>
  <p class="fh-metric__source" data-fh-slot="source">People</p>
</article>
```

#### MET-1.7 · Expand

```html
<article class="fh-metric" data-tone="sky" data-fh-slot="items" data-fh="MET-1.7">
  <p class="fh-metric__label"><span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--receipt" aria-hidden="true"></i></span>Open invoices</p>
  <p class="fh-metric__sub" data-fh-slot="sub">5 invoices · 1 overdue</p>
  <div class="fh-metric__figure"><p class="fh-metric__value"><span class="fh-value fh-value--compact-delta fh-value--tabular fh-value--mono" data-fh="VAL-4.5" data-fh-slot="value"><data value="6940" title="$6,940.00 USD">$6.9K</data></span></p></div>
  <details class="fh-metric__more"><summary>Breakdown <i class="fh-icon fh-icon--chevron-down" aria-hidden="true"></i></summary>
    <dl class="fh-record-table fh-record-table--read" data-fh="TBL-3.1" data-fh-slot="actions">
  <div data-fh-field="bb" data-semantic="fiat_amount" data-fh-field-json="{&quot;currency&quot;:&quot;USD&quot;}"><dt>Brightline Builders</dt><dd data-fh-value="2180"><span class="fh-value fh-value--amount-code fh-value--tabular fh-value--mono" data-fh="VAL-4.2" data-fh-slot="value"><data value="2180.00">$2,180.00</data><abbr class="fh-value__sub" title="US Dollar">USD</abbr></span></dd></div>
  <div data-fh-field="mh" data-semantic="fiat_amount" data-fh-field-json="{&quot;currency&quot;:&quot;USD&quot;}"><dt>Mesa Homes</dt><dd data-fh-value="3420"><span class="fh-value fh-value--amount-code fh-value--tabular fh-value--mono" data-fh="VAL-4.2" data-fh-slot="value"><data value="3420.00">$3,420.00</data><abbr class="fh-value__sub" title="US Dollar">USD</abbr></span></dd></div>
  <div data-fh-field="hp" data-semantic="fiat_amount" data-fh-field-json="{&quot;currency&quot;:&quot;USD&quot;}"><dt>Harbor &amp; Pine</dt><dd data-fh-value="940"><span class="fh-value fh-value--amount-code fh-value--tabular fh-value--mono" data-fh="VAL-4.2" data-fh-slot="value"><data value="940.00">$940.00</data><abbr class="fh-value__sub" title="US Dollar">USD</abbr></span></dd></div>
  <div data-fh-field="cr" data-semantic="fiat_amount" data-fh-field-json="{&quot;currency&quot;:&quot;USD&quot;}"><dt>Cobalt Roofing · overdue</dt><dd data-fh-value="400"><span class="fh-value fh-value--amount-code fh-value--tabular fh-value--mono" data-fh="VAL-4.2" data-fh-slot="value"><data value="400.00">$400.00</data><abbr class="fh-value__sub" title="US Dollar">USD</abbr></span></dd></div>
</dl>
  </details>
</article>
```

#### MET-1.8 · Trend

```html
<article class="fh-metric" data-tone="lime" data-fh-slot="items" data-fh="MET-1.8">
  <p class="fh-metric__label"><span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--dollar-sign" aria-hidden="true"></i></span>Revenue · 30 d</p>
  <p class="fh-metric__sub" data-fh-slot="sub">vs September</p>
  <div class="fh-metric__figure"><p class="fh-metric__value"><span class="fh-value fh-value--compact-delta fh-value--tabular fh-value--mono" data-fh="VAL-4.5" data-fh-slot="value"><data value="48210" title="$48,210.00 USD">$48.2K</data><span class="fh-metric__delta" data-trend="up" aria-label="Up $5.2K">$5.2K</span></span></p></div>
</article>
```

#### MET-1.9 · Trend · down is good

```html
<article class="fh-metric" data-tone="sky" data-good="down" data-fh-slot="items" data-fh="MET-1.9">
  <p class="fh-metric__label"><span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--trending-down" aria-hidden="true"></i></span>Churn</p>
  <p class="fh-metric__sub" data-fh-slot="sub">Percent of accounts, down is good here</p>
  <div class="fh-metric__figure"><p class="fh-metric__value"><span class="fh-value fh-value--plain-delta fh-value--tabular" data-fh="VAL-6.4" data-fh-slot="value">2.1<span class="fh-metric__delta" data-trend="down" data-good="down" aria-label="Down 0.4, down is good">0.4</span></span></p></div>
</article>
```

#### MET-1.10 · Sparkline

```html
<article class="fh-metric" data-tone="teal" data-fh-slot="items" data-fh="MET-1.10">
  <p class="fh-metric__label"><span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--chart-line" aria-hidden="true"></i></span>Orders · 12 wk</p>
  <div class="fh-metric__figure"><p class="fh-metric__value"><span class="fh-value fh-value--plain-delta fh-value--tabular" data-fh="VAL-6.4" data-fh-slot="value">42<span class="fh-metric__delta" data-trend="up" aria-label="Up 8">8</span></span></p><span class="fh-value fh-value--sparkline fh-value--tabular" data-tone="teal" data-fh="VAL-6.5" data-fh-slot="value"><svg class="fh-sparkline" viewBox="0 0 120 32" preserveAspectRatio="none" aria-hidden="true" data-fh="MET-4.1"><path d="M0.0 30.0 L10.9 24.9 L21.8 27.5 L32.7 19.8 L43.6 22.4 L54.5 14.7 L65.5 17.3 L76.4 9.6 L87.3 12.2 L98.2 4.5 L109.1 7.1 L120.0 2.0 L120 32 L0 32Z" fill="currentColor" opacity=".12"></path><path d="M0.0 30.0 L10.9 24.9 L21.8 27.5 L32.7 19.8 L43.6 22.4 L54.5 14.7 L65.5 17.3 L76.4 9.6 L87.3 12.2 L98.2 4.5 L109.1 7.1 L120.0 2.0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"></path></svg></span></div>
</article>
```

#### MET-1.11 · Gauge

```html
<article class="fh-metric" data-tone="amber" data-fh-slot="items" data-fh="MET-1.11">
  <p class="fh-metric__label"><span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--gauge" aria-hidden="true"></i></span>Credit used</p>
  <p class="fh-metric__sub" data-fh-slot="sub">Target: under 50% of the line</p>
  <span class="fh-value fh-value--meter" data-tone="amber" data-fh="VAL-5.4" data-fh-slot="value"><span class="fh-gauge" style="--fh-value: 31" role="img" aria-label="31%, target 50%" data-fh="GAU-1"><b>31%</b><small>of 50%</small></span></span>
</article>
```

### MET-2 · Spread tiles

The flagship tile: a bold title and its line at the top, a wide gap, the figure at the bottom, so a row of tiles lines up at both ends. Anything below the figure (delta, sparkline, avatars, progress, source, detail) keeps its order. --tinted leads a row; --wide takes two columns; --full takes the full width, and a table in it fills the tile.

#### MET-2.1 · Progress

```html
<article class="fh-metric fh-metric--spread" data-tone="lime" data-fh-slot="items" data-fh="MET-2.1">
  <p class="fh-metric__label"><span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--credit-card" aria-hidden="true"></i></span>Stripe</p>
  <p class="fh-metric__sub" data-fh-slot="sub">Next: confirm the payout bank account</p>
  <p class="fh-metric__value"><span class="fh-value fh-value--text fh-value--tabular" data-fh="VAL-5.1" data-fh-slot="value">82%</span></p>
  <span class="fh-value fh-value--bar" data-tone="lime" data-fh="VAL-5.2" data-fh-slot="value"><progress class="fh-progress" value="82" max="100" data-fh="FBK">82%</progress><b>82%</b></span>
  <p class="fh-metric__source" data-fh-slot="source">9 of 11 facts</p>
</article>
```

#### MET-2.2 · Trend

```html
<article class="fh-metric fh-metric--spread" data-tone="teal" data-fh-slot="items" data-fh="MET-2.2">
  <p class="fh-metric__label"><span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--dollar-sign" aria-hidden="true"></i></span>Revenue · 30 d</p>
  <p class="fh-metric__sub" data-fh-slot="sub">All brands, after refunds</p>
  <div class="fh-metric__figure"><p class="fh-metric__value"><span class="fh-value fh-value--compact-delta fh-value--tabular fh-value--mono" data-fh="VAL-4.5" data-fh-slot="value"><data value="48210" title="$48,210.00 USD">$48.2K</data><span class="fh-metric__delta" data-trend="up" aria-label="Up $5.2K">$5.2K</span></span></p></div>
  <p class="fh-metric__source" data-fh-slot="source">vs September</p>
</article>
```

#### MET-2.3 · Sparkline

```html
<article class="fh-metric fh-metric--spread" data-tone="sky" data-fh-slot="items" data-fh="MET-2.3">
  <p class="fh-metric__label"><span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--chart-line" aria-hidden="true"></i></span>Orders</p>
  <p class="fh-metric__sub" data-fh-slot="sub">Last 12 weeks</p>
  <div class="fh-metric__figure"><p class="fh-metric__value"><span class="fh-value fh-value--plain-delta fh-value--tabular" data-fh="VAL-6.4" data-fh-slot="value">42<span class="fh-metric__delta" data-trend="up" aria-label="Up 8">8</span></span></p><span class="fh-value fh-value--sparkline fh-value--tabular" data-tone="sky" data-fh="VAL-6.5" data-fh-slot="value"><svg class="fh-sparkline" viewBox="0 0 120 32" preserveAspectRatio="none" aria-hidden="true" data-fh="MET-4.1"><path d="M0.0 30.0 L10.9 24.9 L21.8 27.5 L32.7 19.8 L43.6 22.4 L54.5 14.7 L65.5 17.3 L76.4 9.6 L87.3 12.2 L98.2 4.5 L109.1 7.1 L120.0 2.0 L120 32 L0 32Z" fill="currentColor" opacity=".12"></path><path d="M0.0 30.0 L10.9 24.9 L21.8 27.5 L32.7 19.8 L43.6 22.4 L54.5 14.7 L65.5 17.3 L76.4 9.6 L87.3 12.2 L98.2 4.5 L109.1 7.1 L120.0 2.0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"></path></svg></span></div>
  <p class="fh-metric__source" data-fh-slot="source">All channels</p>
</article>
```

#### MET-2.4 · People

```html
<article class="fh-metric fh-metric--spread" data-tone="violet" data-fh-slot="items" data-fh="MET-2.4">
  <p class="fh-metric__label"><span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--users" aria-hidden="true"></i></span>Team</p>
  <p class="fh-metric__sub" data-fh-slot="sub">Who can sign in and act for the business</p>
  <div class="fh-metric__figure"><p class="fh-metric__value"><span class="fh-value fh-value--plain fh-value--tabular" data-fh="VAL-6.1" data-fh-slot="value">4</span></p><span class="fh-value fh-value--stack" data-fh="VAL-3.7" data-fh-slot="value"><span class="fh-avatars" role="group" aria-label="Team: Ava, Cole, Maya, Ray" data-fh="AVT"><span class="fh-avatar fh-avatar--circle" data-fh="AVT"><img src="/img/avatars/ava.webp" alt="Ava Mendes"></span><span class="fh-avatar fh-avatar--circle" data-fh="AVT"><img src="/img/avatars/cole.webp" alt="Cole Hart"></span><span class="fh-avatar fh-avatar--circle" data-fh="AVT"><img src="/img/avatars/maya.webp" alt="Maya Lin"></span><span class="fh-avatar fh-avatar--circle" data-fh="AVT"><img src="/img/avatars/ray.webp" alt="Ray Okafor"></span></span></span></div>
  <p class="fh-metric__source" data-fh-slot="source">People</p>
</article>
```

#### MET-2.5 · Tinted

```html
<article class="fh-metric fh-metric--spread fh-metric--tinted" data-tone="orange" data-fh-slot="items" data-fh="MET-2.5">
  <p class="fh-metric__label"><span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--globe" aria-hidden="true"></i></span>Google profile</p>
  <p class="fh-metric__sub" data-fh-slot="sub">Next: opening hours for each location</p>
  <p class="fh-metric__value"><span class="fh-value fh-value--text fh-value--tabular" data-fh="VAL-5.1" data-fh-slot="value">45%</span></p>
  <span class="fh-value fh-value--bar" data-tone="orange" data-fh="VAL-5.2" data-fh-slot="value"><progress class="fh-progress" value="45" max="100" data-fh="FBK">45%</progress><b>45%</b></span>
  <p class="fh-metric__source" data-fh-slot="source">5 of 11 facts</p>
</article>
```

#### MET-2.6 · Expand

```html
<article class="fh-metric fh-metric--spread fh-metric--full" data-tone="sky" data-fh-slot="items" data-fh="MET-2.6">
  <p class="fh-metric__label"><span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--receipt" aria-hidden="true"></i></span>Open invoices</p>
  <p class="fh-metric__sub" data-fh-slot="sub">5 invoices, 1 overdue</p>
  <div class="fh-metric__figure"><p class="fh-metric__value"><span class="fh-value fh-value--compact-delta fh-value--tabular fh-value--mono" data-fh="VAL-4.5" data-fh-slot="value"><data value="6940" title="$6,940.00 USD">$6.9K</data></span></p></div>
  <details class="fh-metric__more"><summary>Breakdown <i class="fh-icon fh-icon--chevron-down" aria-hidden="true"></i></summary>
    <dl class="fh-record-table fh-record-table--read" data-fh="TBL-3.1" data-fh-slot="actions">
  <div data-fh-field="bb" data-semantic="fiat_amount" data-fh-field-json="{&quot;currency&quot;:&quot;USD&quot;}"><dt>Brightline Builders</dt><dd data-fh-value="2180"><span class="fh-value fh-value--amount-code fh-value--tabular fh-value--mono" data-fh="VAL-4.2" data-fh-slot="value"><data value="2180.00">$2,180.00</data><abbr class="fh-value__sub" title="US Dollar">USD</abbr></span></dd></div>
  <div data-fh-field="mh" data-semantic="fiat_amount" data-fh-field-json="{&quot;currency&quot;:&quot;USD&quot;}"><dt>Mesa Homes</dt><dd data-fh-value="3420"><span class="fh-value fh-value--amount-code fh-value--tabular fh-value--mono" data-fh="VAL-4.2" data-fh-slot="value"><data value="3420.00">$3,420.00</data><abbr class="fh-value__sub" title="US Dollar">USD</abbr></span></dd></div>
  <div data-fh-field="hp" data-semantic="fiat_amount" data-fh-field-json="{&quot;currency&quot;:&quot;USD&quot;}"><dt>Harbor &amp; Pine</dt><dd data-fh-value="940"><span class="fh-value fh-value--amount-code fh-value--tabular fh-value--mono" data-fh="VAL-4.2" data-fh-slot="value"><data value="940.00">$940.00</data><abbr class="fh-value__sub" title="US Dollar">USD</abbr></span></dd></div>
  <div data-fh-field="cr" data-semantic="fiat_amount" data-fh-field-json="{&quot;currency&quot;:&quot;USD&quot;}"><dt>Cobalt Roofing · overdue</dt><dd data-fh-value="400"><span class="fh-value fh-value--amount-code fh-value--tabular fh-value--mono" data-fh="VAL-4.2" data-fh-slot="value"><data value="400.00">$400.00</data><abbr class="fh-value__sub" title="US Dollar">USD</abbr></span></dd></div>
</dl>
  </details>
</article>
```

#### MET-2.7 · Wide

```html
<article class="fh-metric fh-metric--spread fh-metric--wide" data-tone="teal" data-fh-slot="items" data-fh="MET-2.7">
  <p class="fh-metric__label"><span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--gauge" aria-hidden="true"></i></span>Credit line</p>
  <p class="fh-metric__sub" data-fh-slot="sub">Drawn against $40,000 at Cedar Valley Bank</p>
  <div class="fh-metric__figure"><p class="fh-metric__value"><span class="fh-value fh-value--compact-delta fh-value--tabular fh-value--mono" data-fh="VAL-4.5" data-fh-slot="value"><data value="12500" title="$12,500.00 USD">$12.5K</data><span class="fh-metric__delta" data-trend="flat" aria-label="No change">$0</span></span></p></div>
  <span class="fh-value fh-value--bar" data-tone="teal" data-fh="VAL-5.2" data-fh-slot="value"><progress class="fh-progress" value="31" max="100" data-fh="FBK">31%</progress><b>31%</b></span>
  <p class="fh-metric__source" data-fh-slot="source">31% drawn · 9.4% rate</p>
</article>
```

#### MET-2.8 · Full

```html
<article class="fh-metric fh-metric--spread fh-metric--full" data-tone="sky" data-fh-slot="items" data-fh="MET-2.8">
  <p class="fh-metric__label"><span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--receipt" aria-hidden="true"></i></span>Invoices this month</p>
  <p class="fh-metric__sub" data-fh-slot="sub">Sent from all brands; amounts before card fees</p>
  <div class="fh-metric__figure"><p class="fh-metric__value"><span class="fh-value fh-value--compact-delta fh-value--tabular fh-value--mono" data-fh="VAL-4.5" data-fh-slot="value"><data value="6940" title="$6,940.00 USD">$6.9K</data><span class="fh-metric__delta" data-trend="up" aria-label="Up $1.1K">$1.1K</span></span></p></div>
  <div class="fh-table-wrap" data-fh="TBL-1" data-fh-slot="body"><table class="fh-table fh-table--reflow" aria-label="Invoices this month">
    <thead><tr><th scope="col" data-fh-field="inv" data-semantic="external_id">Invoice</th><th scope="col" data-fh-field="cust" data-semantic="short_text">Customer</th><th scope="col" data-fh-field="sent" data-semantic="date" data-fh-field-json="{&quot;display&quot;:{&quot;cell&quot;:&quot;date&quot;}}">Sent</th><th scope="col" data-fh-field="amt" data-semantic="fiat_amount" data-fh-field-json="{&quot;currency&quot;:&quot;USD&quot;}" class="fh-num">Amount</th><th scope="col" data-fh-field="status" data-fh-field-json="{&quot;shape&quot;:&quot;option&quot;,&quot;kind&quot;:&quot;status&quot;,&quot;options&quot;:[{&quot;value&quot;:&quot;paid&quot;,&quot;label&quot;:&quot;Paid&quot;,&quot;state&quot;:&quot;done&quot;},{&quot;value&quot;:&quot;sent&quot;,&quot;label&quot;:&quot;Sent&quot;,&quot;state&quot;:&quot;moving&quot;},{&quot;value&quot;:&quot;overdue&quot;,&quot;label&quot;:&quot;Overdue&quot;,&quot;state&quot;:&quot;failed&quot;},{&quot;value&quot;:&quot;draft&quot;,&quot;label&quot;:&quot;Draft&quot;,&quot;state&quot;:&quot;waiting&quot;}]}">Status</th></tr></thead>
    <tbody>
      <tr><td data-label="Invoice" data-fh-value="&quot;INV-1042&quot;"><span class="fh-value fh-value--mono" data-fh="VAL-11.7" data-fh-slot="value">INV-1042</span></td><td data-label="Customer" data-fh-value="&quot;Brightline Builders&quot;"><span class="fh-value fh-value--line" data-fh="VAL-11.5" data-fh-slot="value"><span class="fh-value__name">Brightline Builders</span></span></td><td data-label="Sent" data-fh-value="&quot;2026-10-30&quot;"><span class="fh-value fh-value--date" data-fh="VAL-7.1" data-fh-slot="value"><time datetime="2026-10-30">Oct 30, 2026</time></span></td><td data-label="Amount" data-fh-value="2180" class="fh-num"><span class="fh-value fh-value--amount fh-value--tabular fh-value--mono" data-fh="VAL-4.1" data-fh-slot="value"><data value="2180.00">$2,180</data></span></td><td data-label="Status" data-fh-value="&quot;paid&quot;"><span class="fh-value fh-value--dot" data-tone="lime" data-fh="VAL-1.1" data-fh-slot="value"><span class="fh-dot"></span>Paid</span></td></tr>
      <tr><td data-label="Invoice" data-fh-value="&quot;INV-1043&quot;"><span class="fh-value fh-value--mono" data-fh="VAL-11.7" data-fh-slot="value">INV-1043</span></td><td data-label="Customer" data-fh-value="&quot;Mesa Homes&quot;"><span class="fh-value fh-value--line" data-fh="VAL-11.5" data-fh-slot="value"><span class="fh-value__name">Mesa Homes</span></span></td><td data-label="Sent" data-fh-value="&quot;2026-11-02&quot;"><span class="fh-value fh-value--date" data-fh="VAL-7.1" data-fh-slot="value"><time datetime="2026-11-02">Nov 2, 2026</time></span></td><td data-label="Amount" data-fh-value="3420" class="fh-num"><span class="fh-value fh-value--amount fh-value--tabular fh-value--mono" data-fh="VAL-4.1" data-fh-slot="value"><data value="3420.00">$3,420</data></span></td><td data-label="Status" data-fh-value="&quot;sent&quot;"><span class="fh-value fh-value--dot" data-tone="sky" data-fh="VAL-1.1" data-fh-slot="value"><span class="fh-dot"></span>Sent</span></td></tr>
      <tr><td data-label="Invoice" data-fh-value="&quot;INV-1044&quot;"><span class="fh-value fh-value--mono" data-fh="VAL-11.7" data-fh-slot="value">INV-1044</span></td><td data-label="Customer" data-fh-value="&quot;Harbor &amp; Pine&quot;"><span class="fh-value fh-value--line" data-fh="VAL-11.5" data-fh-slot="value"><span class="fh-value__name">Harbor &amp; Pine</span></span></td><td data-label="Sent" data-fh-value="&quot;2026-11-05&quot;"><span class="fh-value fh-value--date" data-fh="VAL-7.1" data-fh-slot="value"><time datetime="2026-11-05">Nov 5, 2026</time></span></td><td data-label="Amount" data-fh-value="940" class="fh-num"><span class="fh-value fh-value--amount fh-value--tabular fh-value--mono" data-fh="VAL-4.1" data-fh-slot="value"><data value="940.00">$940</data></span></td><td data-label="Status" data-fh-value="&quot;sent&quot;"><span class="fh-value fh-value--dot" data-tone="sky" data-fh="VAL-1.1" data-fh-slot="value"><span class="fh-dot"></span>Sent</span></td></tr>
      <tr><td data-label="Invoice" data-fh-value="&quot;INV-1045&quot;"><span class="fh-value fh-value--mono" data-fh="VAL-11.7" data-fh-slot="value">INV-1045</span></td><td data-label="Customer" data-fh-value="&quot;Cobalt Roofing&quot;"><span class="fh-value fh-value--line" data-fh="VAL-11.5" data-fh-slot="value"><span class="fh-value__name">Cobalt Roofing</span></span></td><td data-label="Sent" data-fh-value="&quot;2026-10-12&quot;"><span class="fh-value fh-value--date" data-fh="VAL-7.1" data-fh-slot="value"><time datetime="2026-10-12">Oct 12, 2026</time></span></td><td data-label="Amount" data-fh-value="400" class="fh-num"><span class="fh-value fh-value--amount fh-value--tabular fh-value--mono" data-fh="VAL-4.1" data-fh-slot="value"><data value="400.00">$400</data></span></td><td data-label="Status" data-fh-value="&quot;overdue&quot;"><span class="fh-value fh-value--dot" data-tone="rose" data-fh="VAL-1.1" data-fh-slot="value"><span class="fh-dot"></span>Overdue</span></td></tr>
    </tbody>
  </table></div>
</article>
```

### MET-3 · Icon looks

The tile's icon sits in the Icon cube (CUB-1.5), the same part as the sidebar's rows, so the two read as one system. Solid is the default; fh-cube--soft is the tint with no frame and fh-cube--outline the etched frame. Set data-fh-cube="soft" or "outline" on a row of tiles (or a whole page) and every icon cube inside follows; a modifier on one cube still wins.

#### MET-3.1 · Solid

```html
<article class="fh-metric" data-tone="sky" data-fh-slot="items" data-fh="MET-3.1">
  <p class="fh-metric__label"><span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--calendar" aria-hidden="true"></i></span>Solid</p>
  <p class="fh-metric__sub" data-fh-slot="sub">Meetings this week</p>
  <p class="fh-metric__value"><span class="fh-value fh-value--plain fh-value--tabular" data-fh="VAL-6.1" data-fh-slot="value">12</span></p>
</article>
```

#### MET-3.2 · Soft

```html
<article class="fh-metric" data-tone="violet" data-fh-slot="items" data-fh="MET-3.2">
  <p class="fh-metric__label"><span class="fh-cube fh-cube--icon fh-cube--soft" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--layers" aria-hidden="true"></i></span>Soft</p>
  <p class="fh-metric__sub" data-fh-slot="sub">Open relays</p>
  <p class="fh-metric__value"><span class="fh-value fh-value--plain fh-value--tabular" data-fh="VAL-6.1" data-fh-slot="value">48</span></p>
</article>
```

#### MET-3.3 · Outline

```html
<article class="fh-metric" data-tone="amber" data-fh-slot="items" data-fh="MET-3.3">
  <p class="fh-metric__label"><span class="fh-cube fh-cube--icon fh-cube--outline" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--shield-check" aria-hidden="true"></i></span>Outline</p>
  <p class="fh-metric__sub" data-fh-slot="sub">Checks waiting</p>
  <p class="fh-metric__value"><span class="fh-value fh-value--plain fh-value--tabular" data-fh="VAL-6.1" data-fh-slot="value">3</span></p>
</article>
```

#### MET-3.4 · Row look

```html
<div class="fh-metrics" data-fh-cube="outline" style="margin-block-start: var(--fh-gap-grouped)" data-fh="MET-3.4">
<article class="fh-metric" data-tone="lime" data-fh="MET" data-fh-slot="items">
  <p class="fh-metric__label"><span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--dollar-sign" aria-hidden="true"></i></span>Revenue</p>
  <p class="fh-metric__sub" data-fh-slot="sub">Set by the row</p>
  <p class="fh-metric__value"><span class="fh-value fh-value--plain fh-value--tabular" data-fh="VAL-6.1" data-fh-slot="value">$48.2K</span></p>
</article>
<article class="fh-metric" data-tone="teal" data-fh="MET" data-fh-slot="items">
  <p class="fh-metric__label"><span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--users" aria-hidden="true"></i></span>Customers</p>
  <p class="fh-metric__sub" data-fh-slot="sub">Set by the row</p>
  <p class="fh-metric__value"><span class="fh-value fh-value--plain fh-value--tabular" data-fh="VAL-6.1" data-fh-slot="value">312</span></p>
</article>
<article class="fh-metric" data-tone="fuchsia" data-fh="MET" data-fh-slot="items">
  <p class="fh-metric__label"><span class="fh-cube fh-cube--icon fh-cube--solid" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--target" aria-hidden="true"></i></span>Goals</p>
  <p class="fh-metric__sub" data-fh-slot="sub">Solid on its own</p>
  <p class="fh-metric__value"><span class="fh-value fh-value--plain fh-value--tabular" data-fh="VAL-6.1" data-fh-slot="value">7</span></p>
</article>
</div>
```

### MET-4 · Parts

The two pieces a tile draws that a value also draws on its own, each a part so a field holds it without holding the tile: MET-4.1, the sparkline (fh-sparkline, drawn by VAL-6.5), and MET-4.2, the ring (fh-ring, drawn by VAL-5.3).

#### MET-4.1 · Sparkline

```html
<svg class="fh-sparkline" viewBox="0 0 120 32" preserveAspectRatio="none" aria-hidden="true" data-fh="MET-4.1"><path d="M0.0 30.0 L10.9 25.3 L21.8 27.7 L32.7 20.7 L43.6 23.0 L54.5 16.0 L65.5 18.3 L76.4 11.3 L87.3 12.5 L98.2 6.7 L109.1 9.0 L120.0 2.0 L120 32 L0 32Z" fill="currentColor" opacity=".12"></path><path d="M0.0 30.0 L10.9 25.3 L21.8 27.7 L32.7 20.7 L43.6 23.0 L54.5 16.0 L65.5 18.3 L76.4 11.3 L87.3 12.5 L98.2 6.7 L109.1 9.0 L120.0 2.0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"></path></svg>
```

#### MET-4.2 · Ring

```html
<span class="fh-ring" data-tone="teal" style="--fh-value: 69" role="img" aria-label="69% complete" data-fh="MET-4.2"><b>69%</b></span>
```

## INV · Invoice

The sheet: logo and number, title, from and bill-to with the dates, line items, totals, a signature, payment details and notes. __cover adds a picture band; --classic centres the logo and sets a small-caps title. data-fh-scheme="light" keeps it paper on a dark page, and it prints on its own. The pay bar (fh-pay --float) sticks to the bottom; Pay opens the payment panel up out of it.

Layer: composite. Slots: `media` `mark` `body` `value` `chips` `icon` `title` `actions` `label` `who` `date`.

Classes: `fh-invoice` `fh-invoice__cover` `fh-invoice__head` `fh-invoice__logo` `fh-invoice__number` `fh-invoice__title` `fh-invoice__parties` `fh-invoice__label` `fh-invoice__dates` `fh-invoice__items` `fh-invoice__totals` `fh-invoice__total` `fh-invoice__sign` `fh-invoice__foot` `fh-invoice--classic` `fh-pay` `fh-pay--float` `fh-pay__mark` `fh-pay__doc` `fh-pay__amount` `fh-chip` `fh-chip--tone` `fh-pay__icon` `fh-icon` `fh-button` `fh-button--sm` `fh-pay__panel` `fh-pay__head` `fh-pay__route` `fh-pay__party` `fh-pay__sum` `fh-pay__total` `fh-pay__details` `fh-pay__actions`

### INV-1 · Sheet

#### INV-1.1 · Cover

```html
<article class="fh-invoice" data-fh-scheme="light" data-fh="INV-1.1">
  <img class="fh-invoice__cover" src="img/backdrop/firehorse-horse.webp" alt data-fh-slot="media">
  <header class="fh-invoice__head">
    <span class="fh-invoice__logo" data-fh-slot="media"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M7 4h11a8 8 0 0 1 2.2 15.7L26 28h-6l-5.2-7.6H13V28H7zm6 5v6.6h4.6a3.3 3.3 0 0 0 0-6.6z"></path></svg></span>
    <p class="fh-invoice__number" data-fh-slot="value">INV-0513-0057</p>
    <h2 class="fh-invoice__title" data-fh-slot="title">Invoice</h2>
  </header>
  <div class="fh-invoice__parties">
    <div><h3 class="fh-invoice__label" data-fh-slot="label">From</h3><address><b>Rascode</b><br>hello@rascode.dev<br>rascode.dev</address></div>
    <div><h3 class="fh-invoice__label" data-fh-slot="label">Bill to</h3><address><b>Maya Okafor</b><br>Northwind Studio<br>maya@northwind.example</address></div>
    <dl class="fh-invoice__dates" data-fh-slot="date"><div><dt>Issued</dt><dd>May 13, 2026</dd></div><div><dt>Due</dt><dd>Jun 12, 2026</dd></div></dl>
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
    <div class="fh-invoice__total" data-fh-slot="value"><dt>Total</dt><dd>$5,520.00</dd></div>
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
    <span class="fh-invoice__logo" data-fh-slot="media"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M7 4h11a8 8 0 0 1 2.2 15.7L26 28h-6l-5.2-7.6H13V28H7zm6 5v6.6h4.6a3.3 3.3 0 0 0 0-6.6z"></path></svg></span>
    <p class="fh-invoice__number" data-fh-slot="value">INV-0602-0061</p>
    <h2 class="fh-invoice__title" data-fh-slot="title">Invoice</h2>
  </header>
  <div class="fh-invoice__parties">
    <div><h3 class="fh-invoice__label" data-fh-slot="label">From</h3><address><b>Rascode</b><br>hello@rascode.dev<br>rascode.dev</address></div>
    <div><h3 class="fh-invoice__label" data-fh-slot="label">Bill to</h3><address><b>Theo Laurent</b><br>Hexwork<br>theo@hexwork.example</address></div>
    <dl class="fh-invoice__dates" data-fh-slot="date"><div><dt>Issued</dt><dd>May 13, 2026</dd></div><div><dt>Due</dt><dd>Jun 12, 2026</dd></div></dl>
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
    <div class="fh-invoice__total" data-fh-slot="value"><dt>Total</dt><dd>$1,725.00</dd></div>
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
    <span class="fh-invoice__logo" data-fh-slot="media"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M7 4h11a8 8 0 0 1 2.2 15.7L26 28h-6l-5.2-7.6H13V28H7zm6 5v6.6h4.6a3.3 3.3 0 0 0 0-6.6z"></path></svg></span>
    <p class="fh-invoice__number" data-fh-slot="value">INV-0611-0064</p>
    <h2 class="fh-invoice__title" data-fh-slot="title">Invoice</h2>
  </header>
  <div class="fh-invoice__parties">
    <div><h3 class="fh-invoice__label" data-fh-slot="label">From</h3><address><b>Rascode</b><br>hello@rascode.dev<br>rascode.dev</address></div>
    <div><h3 class="fh-invoice__label" data-fh-slot="label">Bill to</h3><address><b>Isla Moreau</b><br>Lumen<br>isla@lumen.example</address></div>
    <dl class="fh-invoice__dates" data-fh-slot="date"><div><dt>Issued</dt><dd>May 13, 2026</dd></div><div><dt>Due</dt><dd>Jun 12, 2026</dd></div></dl>
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
    <div class="fh-invoice__total" data-fh-slot="value"><dt>Total</dt><dd>$1,380.00</dd></div>
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
  <span class="fh-pay__mark" data-fh-slot="mark"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M7 4h11a8 8 0 0 1 2.2 15.7L26 28h-6l-5.2-7.6H13V28H7zm6 5v6.6h4.6a3.3 3.3 0 0 0 0-6.6z"></path></svg></span>
  <span class="fh-pay__doc" data-fh-slot="body"><b>Invoice</b><small>INV-0513-0057</small></span>
  <b class="fh-pay__amount" data-fh-slot="value">$5,520</b>
  <span class="fh-chip fh-chip--tone" data-tone="amber" data-fh="CHP" data-fh-slot="chips">Pending</span>
  <a class="fh-pay__icon" href="#invoice" aria-label="Download PDF" data-fh-slot="icon"><i class="fh-icon fh-icon--download" aria-hidden="true"></i></a>
  <button class="fh-button fh-button--sm" type="button" popovertarget="pay-inv-1" data-fh="BTN" data-fh-slot="actions">Pay</button>
  <div class="fh-pay__panel" id="pay-inv-1" popover>
    <header class="fh-pay__head"><span class="fh-pay__doc" data-fh-slot="body"><b>Invoice</b><small>INV-0513-0057</small></span><span class="fh-chip fh-chip--tone" data-tone="amber" data-fh="CHP" data-fh-slot="chips">Pending</span></header>
    <p class="fh-pay__route"><span class="fh-pay__party"><span class="fh-pay__mark" data-fh-slot="mark"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M7 4h11a8 8 0 0 1 2.2 15.7L26 28h-6l-5.2-7.6H13V28H7zm6 5v6.6h4.6a3.3 3.3 0 0 0 0-6.6z"></path></svg></span>Rascode</span><span aria-hidden="true">→</span><span class="fh-pay__party" data-fh-slot="who"><img src="img/avatars/maya.webp" alt>Maya Okafor</span></p>
    <div class="fh-pay__sum">
      <p class="fh-pay__total" style="margin: 0" data-fh-slot="value"><span>Total</span><b>$5,520</b></p>
      <dl><div><dt>Issued</dt><dd>May 13</dd></div><div><dt>Due</dt><dd>Jun 12<small>in 30 days</small></dd></div></dl>
    </div>
    <details class="fh-pay__details" open>
      <summary>Payment details</summary>
      <dl><div><dt>Method</dt><dd>Bank transfer</dd></div><div><dt>Bank</dt><dd>First Example Bank</dd></div><div><dt>Account</dt><dd>1234 5678 9012</dd></div><div><dt>Reference</dt><dd>INV-0513-0057</dd></div></dl>
    </details>
    <footer class="fh-pay__actions">
      <a class="fh-pay__icon" href="#invoice" aria-label="Download PDF" data-fh-slot="icon"><i class="fh-icon fh-icon--download" aria-hidden="true"></i></a>
      <button class="fh-pay__icon" type="button" popovertarget="pay-inv-1" popovertargetaction="hide" aria-label="Close" data-fh-slot="icon"><i class="fh-icon fh-icon--x" aria-hidden="true"></i></button>
      <a class="fh-button" href="#invoice" data-fh="BTN" data-fh-slot="actions">Pay now</a>
    </footer>
  </div>
</div>
```

## THM · Brand theme file

@layer fh.themes

Layer: token.

Classes: `fh-swatches-ramp`

Markup: see [components.md](components.md) or copy from https://firehorse.rascode.dev/theming/brand-theme-file/.

## THS · Theme select

A native select, or a small colour menu: a dot and a mono caps label per colour, the picked dot ringed, a check in the accent. firehorse.js sets data-fh-theme (on <html>, or on data-fh-theme-target) and remembers it.

Layer: part.

Classes: `fh-field` `fh-select` `fh-theme-menu` `fh-theme-menu__head` `fh-theme-menu__title` `fh-theme-menu__count` `fh-theme-menu__list` `fh-theme-menu__item` `fh-theme-menu__dot`

### THS-1 · Select

#### THS-1.1 · Select

```html
<div class="fh-field" data-fh="THS-1.1"><label for="theme-select-demo">Theme</label><select class="fh-select" id="theme-select-demo" data-fh-theme-select data-fh="THS"><option value>Firehorse</option><option value="mustang">Mustang</option><option value="friesian">Friesian</option><option value="akhal-teke">Akhal-Teke</option></select></div>
```

### THS-2 · Colour menu

#### THS-2.1 · Colour menu

```html
<div class="fh-theme-menu" id="ths-colours-demo" role="radiogroup" aria-label="Theme (preview)" data-fh="THS-2.1"><header class="fh-theme-menu__head"><span class="fh-theme-menu__title">Theme</span><span class="fh-theme-menu__count">4</span></header><ul class="fh-theme-menu__list"><li><label class="fh-theme-menu__item" style="--fh-theme-dot: light-dark(#b33000, #da3a00)"><input type="radio" name="ths-colours-demo" value data-fh-theme-select data-fh-theme-target="#ths-colours-demo" data-fh-theme-persist="false" checked><i class="fh-theme-menu__dot" aria-hidden="true"></i>Firehorse</label></li><li><label class="fh-theme-menu__item" style="--fh-theme-dot: light-dark(#2b579a, #6f9fe8)"><input type="radio" name="ths-colours-demo" value="mustang" data-fh-theme-select data-fh-theme-target="#ths-colours-demo" data-fh-theme-persist="false"><i class="fh-theme-menu__dot" aria-hidden="true"></i>Mustang</label></li><li><label class="fh-theme-menu__item" style="--fh-theme-dot: light-dark(#161616, #ece8df)"><input type="radio" name="ths-colours-demo" value="friesian" data-fh-theme-select data-fh-theme-target="#ths-colours-demo" data-fh-theme-persist="false"><i class="fh-theme-menu__dot" aria-hidden="true"></i>Friesian</label></li><li><label class="fh-theme-menu__item" style="--fh-theme-dot: light-dark(#7a5200, #d6a640)"><input type="radio" name="ths-colours-demo" value="akhal-teke" data-fh-theme-select data-fh-theme-target="#ths-colours-demo" data-fh-theme-persist="false"><i class="fh-theme-menu__dot" aria-hidden="true"></i>Akhal-Teke</label></li></ul></div>
```

## TML · Timelines

Layer: composite. Slots: `date` `label` `stage` `title` `chips` `media` `count` `who` `kind` `time` `summary` `links` `body` `actions`.

Classes: `fh-milestones` `fh-milestones__item` `fh-milestones__date` `fh-milestones__body` `fh-milestones__title` `fh-phases` `fh-phases__stop` `fh-phases__date` `fh-phases__title` `fh-phases__items` `fh-dot` `fh-dot--live` `fh-schedule` `fh-schedule__grid` `fh-schedule__head` `fh-schedule__row` `fh-schedule__label` `fh-schedule__bar` `fh-activity` `fh-activity__day` `fh-activity__item` `fh-avatar` `fh-activity__body` `fh-activity__line` `fh-status` `fh-activity__time` `fh-activity__remark` `fh-progress` `fh-activity-log` `fh-activity-log__bar` `fh-activity-log__title` `fh-segment` `fh-segment--mode` `fh-activity-log__render` `fh-activity-log__list` `fh-activity-log__entry` `fh-icon` `fh-activity-log__main` `fh-activity-log__head` `fh-activity-log__actor` `fh-chip` `fh-chip--tone` `fh-chip--sm` `fh-activity-log__kind` `fh-activity-log__time` `fh-activity-log__summary` `fh-fold` `fh-fold__body` `fh-activity-log__text` `fh-button` `fh-button--ghost` `fh-button--sm` `fh-fold__toggle` `fh-activity-log__links` `fh-avatar--circle` `fh-avatar--generated` `fh-activity-log--media` `fh-activity-log__media` `fh-image-stack` `fh-image-stack__list` `fh-image-stack__item` `fh-image-stack__shot` `fh-image-stack__open` `fh-image-stack__file` `fh-image-stack__meta` `fh-image-stack__count` `fh-activity-log--compact` `fh-activity-log__more` `fh-activity-log--grouped` `fh-activity-log__groups` `fh-activity-log__group` `fh-activity-log__group-title` `fh-activity-log__count`

### TML-1 · Timelines

#### TML-1.1 · Milestones

```html
<div>
<ol class="fh-milestones" data-tone="sky" data-fh="TML-1.1">
  <li class="fh-milestones__item" data-state="done"><time class="fh-milestones__date" datetime="2026-11-01" data-fh-slot="date">Nov 1</time><div class="fh-milestones__body"><p class="fh-milestones__title" data-fh-slot="title">Shell</p><p>Side navigation, environment band and selector.</p></div></li>
  <li class="fh-milestones__item" data-state="done"><time class="fh-milestones__date" datetime="2026-11-01" data-fh-slot="date">Nov 1</time><div class="fh-milestones__body"><p class="fh-milestones__title" data-fh-slot="title">Sign-in</p><p>Glass sign-in with username or email.</p></div></li>
  <li class="fh-milestones__item" data-state="now"><time class="fh-milestones__date" datetime="2026-11-15" data-fh-slot="date">Nov 15</time><div class="fh-milestones__body"><p class="fh-milestones__title" data-fh-slot="title">Applications</p><p>The registry everything maps back to.</p></div></li>
  <li class="fh-milestones__item" data-state="next"><time class="fh-milestones__date" datetime="2026-12-01" data-fh-slot="date">Dec 1</time><div class="fh-milestones__body"><p class="fh-milestones__title" data-fh-slot="title">Enterprise</p><p>Organisations, their people and sites.</p></div></li>
  <li class="fh-milestones__item" data-state="next"><time class="fh-milestones__date" datetime="2026-12-15" data-fh-slot="date">Dec 15</time><div class="fh-milestones__body"><p class="fh-milestones__title" data-fh-slot="title">Identity &amp; access</p><p>People, accounts and roles.</p></div></li>
</ol>
</div>
```

#### TML-1.2 · Horizontal track

```html
<div style="min-inline-size: 0">
<ol class="fh-phases" data-tone="violet" aria-label="Project phases" data-fh="TML-1.2">
  <li class="fh-phases__stop" data-state="done"><time class="fh-phases__date" data-fh-slot="date">Oct 6</time><p class="fh-phases__title" data-fh-slot="title">Discovery</p><p>Scope signed.</p></li>
  <li class="fh-phases__stop" data-state="done"><time class="fh-phases__date" data-fh-slot="date">Oct 20</time><p class="fh-phases__title" data-fh-slot="title">Design</p><p>System approved.</p></li>
  <li class="fh-phases__stop" data-state="now"><time class="fh-phases__date" data-fh-slot="date">Nov 3</time><p class="fh-phases__title" data-fh-slot="title">Build</p><p>Sprint 2 of 3.</p><ul class="fh-phases__items"><li><span class="fh-dot fh-dot--live" data-tone="amber" aria-hidden="true"></span><span>Checkout</span></li><li><span class="fh-dot" data-tone="violet" aria-hidden="true"></span><span>Order emails</span></li></ul></li>
  <li class="fh-phases__stop" data-state="next"><time class="fh-phases__date" data-fh-slot="date">Dec 1</time><p class="fh-phases__title" data-fh-slot="title">Launch</p><p>Go-live and handover.</p></li>
</ol>
</div>
```

#### TML-1.3 · Schedule

```html
<div class="fh-schedule" data-fh="TML-1.3">
  <div class="fh-schedule__grid" style="--fh-schedule-cols: 6; --fh-schedule-now: 1.03" data-now="Today">
    <div class="fh-schedule__head"><span></span><span>Nov</span><span>Dec</span><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span></div>
    <div class="fh-schedule__row" data-tone="lime"><span class="fh-schedule__label" data-fh-slot="label">Shell &amp; sign-in</span><span class="fh-schedule__bar" data-state="done" style="--start: 1; --span: 1">Done</span></div>
    <div class="fh-schedule__row" data-tone="orange"><span class="fh-schedule__label" data-fh-slot="label">Applications</span><span class="fh-schedule__bar" data-state="now" style="--start: 1; --span: 2">Registry, domains, deploys</span></div>
    <div class="fh-schedule__row" data-tone="sky"><span class="fh-schedule__label" data-fh-slot="label">Enterprise</span><span class="fh-schedule__bar" data-state="next" style="--start: 2; --span: 2">Organisations</span></div>
    <div class="fh-schedule__row" data-tone="amber"><span class="fh-schedule__label" data-fh-slot="label">Business</span><span class="fh-schedule__bar" data-state="next" style="--start: 3; --span: 2">Entities, money</span></div>
    <div class="fh-schedule__row" data-tone="violet"><span class="fh-schedule__label" data-fh-slot="label">Identity &amp; access</span><span class="fh-schedule__bar" data-state="next" style="--start: 4; --span: 2">People, roles</span></div>
    <div class="fh-schedule__row" data-tone="teal"><span class="fh-schedule__label" data-fh-slot="label">Settings</span><span class="fh-schedule__bar" data-state="next" style="--start: 6; --span: 1">Preferences</span></div>
  </div>
</div>
```

#### TML-1.4 · Activity feed

```html
<ol class="fh-activity" data-fh="TML-1.4">
  <li class="fh-activity__day" data-fh-slot="date">Today</li>
  <li class="fh-activity__item"><span class="fh-avatar" data-tone="sky" data-fh="AVT" data-fh-slot="media"><img src="/img/avatars/ava.webp" alt></span><div class="fh-activity__body"><p class="fh-activity__line"><b>Ava</b> moved <a href="#timelines">Northwind Labs</a> to <span class="fh-status" data-tone="lime" data-fh="SCR-1.3" data-fh-slot="body">Won</span></p><time class="fh-activity__time" datetime="2026-11-01T14:10" data-fh-slot="time">2h ago</time></div></li>
  <li class="fh-activity__item" data-tone="amber"><span class="fh-avatar" data-tone="amber" data-fh="AVT" data-fh-slot="media"><img src="/img/avatars/mateo.webp" alt></span><div class="fh-activity__body"><p class="fh-activity__line" data-fh-slot="body"><b>Mateo</b> commented on <a href="#timelines">Launch checklist</a></p><time class="fh-activity__time" datetime="2026-11-01T11:42" data-fh-slot="time">4h ago</time><blockquote class="fh-activity__remark" data-fh-slot="body">DNS is ready; we can flip it Monday morning.</blockquote></div></li>
  <li class="fh-activity__item"><span class="fh-avatar" data-tone="violet" data-fh="AVT" data-fh-slot="media"><img src="/img/avatars/ruth.webp" alt></span><div class="fh-activity__body"><p class="fh-activity__line" data-fh-slot="body"><b>Ruth</b> is uploading the brand kit</p><time class="fh-activity__time" datetime="2026-11-01T09:05" data-fh-slot="time">7h ago</time><progress class="fh-progress" value="64" max="100" data-fh="FBK" data-fh-slot="body">64%</progress></div></li>
  <li class="fh-activity__day" data-fh-slot="date">Yesterday</li>
  <li class="fh-activity__item"><span class="fh-avatar" data-tone="teal" data-fh="AVT" data-fh-slot="media">SL</span><div class="fh-activity__body"><p class="fh-activity__line" data-fh-slot="body"><b>Sam</b> created the project <a href="#timelines">Halcyon Health site</a></p><time class="fh-activity__time" datetime="2026-10-31T16:20" data-fh-slot="time">Oct 31, 4:20 PM</time></div></li>
</ol>
```

### TML-2 · Activity log

#### TML-2.1 · Thread log

```html
<div style="max-inline-size: 52rem">
<section class="fh-activity-log" data-fh="TML-2.1" aria-label="Relay #696 · Button tokens"><header class="fh-activity-log__bar"><p class="fh-activity-log__title" data-fh-slot="title">Relay #696 · Button tokens</p><div class="fh-segment fh-segment--mode fh-activity-log__render" role="group" aria-label="Show text as" hidden data-fh="SEG-2" data-fh-slot="stage"><button type="button" data-render="rendered" aria-pressed="true">Rendered</button><button type="button" data-render="plain" aria-pressed="false">Plain text</button></div></header><ol class="fh-activity-log__list"><li class="fh-activity-log__entry"><span class="fh-avatar" data-kind="agent" data-tone="violet" role="img" aria-label="Claude" data-fh="AVT" data-fh-slot="media"><i class="fh-icon fh-icon--sparkles" aria-hidden="true"></i></span><div class="fh-activity-log__main"><p class="fh-activity-log__head"><b class="fh-activity-log__actor" data-fh-slot="who">Claude</b><span class="fh-chip fh-chip--tone fh-chip--sm fh-activity-log__kind" data-tone="sky" data-fh="CHP" data-fh-slot="kind">Action</span><time class="fh-activity-log__time" datetime="2026-11-15T20:12" title="Sun 15 Nov 2026, 8:12 PM EST" data-fh-slot="time">8:12 PM</time></p><p class="fh-activity-log__summary" data-fh-slot="summary">Dispatched the relay to Grok CLI</p><div class="fh-fold" style="--fh-fold-lines: 6" data-fh="FOL-1"><div class="fh-fold__body fh-activity-log__text" id="tml21-0" data-fh-slot="body">Sent **L6 · Button tokens** to Grok CLI.

- Spec: `relay/2026-11-15-button-tokens.md`
- Model: `grok-code-fast-1`
- Tier: screen</div><button class="fh-button fh-button--ghost fh-button--sm fh-fold__toggle" type="button" aria-expanded="false" aria-controls="tml21-0" hidden data-fh="BTN-2.2" data-fh-slot="actions">Show all</button></div><ul class="fh-activity-log__links"><li><a class="fh-chip fh-chip--sm" href="#activity-log" data-fh="CHP" data-fh-slot="links"><i class="fh-icon fh-icon--link" aria-hidden="true"></i>Spec</a></li></ul></div></li><li class="fh-activity-log__entry"><span class="fh-avatar" data-kind="agent" data-tone="teal" role="img" aria-label="Grok" data-fh="AVT" data-fh-slot="media"><i class="fh-icon fh-icon--bot" aria-hidden="true"></i></span><div class="fh-activity-log__main"><p class="fh-activity-log__head"><b class="fh-activity-log__actor" data-fh-slot="who">Grok</b><span class="fh-chip fh-chip--tone fh-chip--sm fh-activity-log__kind" data-tone="violet" data-fh="CHP" data-fh-slot="kind">Update</span><time class="fh-activity-log__time" datetime="2026-11-15T20:19" title="Sun 15 Nov 2026, 8:19 PM EST" data-fh-slot="time">8:19 PM</time></p><p class="fh-activity-log__summary" data-fh-slot="summary">Update from Grok: three files changed, checks passed</p><div class="fh-fold" style="--fh-fold-lines: 6" data-fh="FOL-1"><div class="fh-fold__body fh-activity-log__text" id="tml21-1" data-fh-slot="body">## Changes

1. `src/components/actions/button.css`: padding and gap now read the family values.
2. `src/components/actions/button-group.css`: the joined edge uses `--fh-border-thin`.
3. `site/pages/components/actions/index.html`: demo updated to the new sizes.

```css
- padding: 0.5rem 0.875rem;
+ padding: var(--fh-inset-tight) var(--fh-inset-control);
```

Every check in `relay:verify -- --tier screen` passed:

- typecheck: ok
- lint:css: ok
- leak scan: ok

&gt; No JavaScript added; the change is CSS only.</div><button class="fh-button fh-button--ghost fh-button--sm fh-fold__toggle" type="button" aria-expanded="false" aria-controls="tml21-1" hidden data-fh="BTN-2.2" data-fh-slot="actions">Show all</button></div></div></li><li class="fh-activity-log__entry"><span class="fh-avatar" data-kind="agent" data-tone="violet" role="img" aria-label="Claude" data-fh="AVT" data-fh-slot="media"><i class="fh-icon fh-icon--sparkles" aria-hidden="true"></i></span><div class="fh-activity-log__main"><p class="fh-activity-log__head"><b class="fh-activity-log__actor" data-fh-slot="who">Claude</b><span class="fh-chip fh-chip--tone fh-chip--sm fh-activity-log__kind" data-tone="teal" data-fh="CHP" data-fh-slot="kind">Verify</span><time class="fh-activity-log__time" datetime="2026-11-15T20:24" title="Sun 15 Nov 2026, 8:24 PM EST" data-fh-slot="time">8:24 PM</time></p><p class="fh-activity-log__summary" data-fh-slot="summary">Checked the button pages in light and dark</p><div class="fh-fold" style="--fh-fold-lines: 6" data-fh="FOL-1"><div class="fh-fold__body fh-activity-log__text" id="tml21-2" data-fh-slot="body">Both modes look right on the *Actions* and *Forms* pages. One thing for Rascode: the ghost button reads heavier in light.</div><button class="fh-button fh-button--ghost fh-button--sm fh-fold__toggle" type="button" aria-expanded="false" aria-controls="tml21-2" hidden data-fh="BTN-2.2" data-fh-slot="actions">Show all</button></div></div></li><li class="fh-activity-log__entry"><span class="fh-avatar fh-avatar--circle fh-avatar--generated" data-kind="person" data-tone="sky" role="img" aria-label="Rascode" data-fh="AVT" data-fh-slot="media">JR</span><div class="fh-activity-log__main"><p class="fh-activity-log__head"><b class="fh-activity-log__actor" data-fh-slot="who">Rascode</b><span class="fh-chip fh-chip--tone fh-chip--sm fh-activity-log__kind" data-tone="amber" data-fh="CHP" data-fh-slot="kind">Note</span><time class="fh-activity-log__time" datetime="2026-11-15T20:27" title="Sun 15 Nov 2026, 8:27 PM EST" data-fh-slot="time">8:27 PM</time></p><p class="fh-activity-log__summary" data-fh-slot="summary">Ghost button is too heavy in light</p><div class="fh-fold" style="--fh-fold-lines: 6" data-fh="FOL-1"><div class="fh-fold__body fh-activity-log__text" id="tml21-3" data-fh-slot="body">Take its border through the **preset**, like every other card edge. No one-off colour.</div><button class="fh-button fh-button--ghost fh-button--sm fh-fold__toggle" type="button" aria-expanded="false" aria-controls="tml21-3" hidden data-fh="BTN-2.2" data-fh-slot="actions">Show all</button></div></div></li><li class="fh-activity-log__entry"><span class="fh-avatar" data-kind="agent" data-tone="violet" role="img" aria-label="Claude" data-fh="AVT" data-fh-slot="media"><i class="fh-icon fh-icon--sparkles" aria-hidden="true"></i></span><div class="fh-activity-log__main"><p class="fh-activity-log__head"><b class="fh-activity-log__actor" data-fh-slot="who">Claude</b><span class="fh-chip fh-chip--tone fh-chip--sm fh-activity-log__kind" data-tone="orange" data-fh="CHP" data-fh-slot="kind">Fix</span><time class="fh-activity-log__time" datetime="2026-11-15T20:31" title="Sun 15 Nov 2026, 8:31 PM EST" data-fh-slot="time">8:31 PM</time></p><p class="fh-activity-log__summary" data-fh-slot="summary">Ghost border now follows the preset</p><div class="fh-fold" style="--fh-fold-lines: 6" data-fh="FOL-1"><div class="fh-fold__body fh-activity-log__text" id="tml21-4" data-fh-slot="body">Changed `fh-button--ghost` to read `--fh-card-border-style` and `--fh-card-border-color`. Rechecked light and dark.</div><button class="fh-button fh-button--ghost fh-button--sm fh-fold__toggle" type="button" aria-expanded="false" aria-controls="tml21-4" hidden data-fh="BTN-2.2" data-fh-slot="actions">Show all</button></div></div></li><li class="fh-activity-log__entry"><span class="fh-avatar" data-kind="agent" data-tone="violet" role="img" aria-label="Claude" data-fh="AVT" data-fh-slot="media"><i class="fh-icon fh-icon--sparkles" aria-hidden="true"></i></span><div class="fh-activity-log__main"><p class="fh-activity-log__head"><b class="fh-activity-log__actor" data-fh-slot="who">Claude</b><span class="fh-chip fh-chip--tone fh-chip--sm fh-activity-log__kind" data-tone="lime" data-fh="CHP" data-fh-slot="kind">Commit</span><time class="fh-activity-log__time" datetime="2026-11-15T20:33" title="Sun 15 Nov 2026, 8:33 PM EST" data-fh-slot="time">8:33 PM</time></p><p class="fh-activity-log__summary" data-fh-slot="summary">Landed in the main checkout</p><div class="fh-fold" style="--fh-fold-lines: 6" data-fh="FOL-1"><div class="fh-fold__body fh-activity-log__text" id="tml21-5" data-fh-slot="body">One commit for the part, one for the demo. Logged on the work log.</div><button class="fh-button fh-button--ghost fh-button--sm fh-fold__toggle" type="button" aria-expanded="false" aria-controls="tml21-5" hidden data-fh="BTN-2.2" data-fh-slot="actions">Show all</button></div><ul class="fh-activity-log__links"><li><a class="fh-chip fh-chip--sm" href="#activity-log" data-fh="CHP" data-fh-slot="links"><i class="fh-icon fh-icon--link" aria-hidden="true"></i>Commit</a></li><li><a class="fh-chip fh-chip--sm" href="#activity-log" data-fh="CHP" data-fh-slot="links"><i class="fh-icon fh-icon--link" aria-hidden="true"></i>Work log</a></li></ul></div></li></ol></section>
</div>
```

## CAL · Calendar pickers

Layer: composite. Slots: `label` `fields` `actions` `date` `chips`.

Classes: `fh-field` `fh-datepicker` `fh-input` `fh-field--full` `fh-cal-book` `fh-cal-book__layout` `fh-cal-book__month` `fh-cal-book__head` `fh-cal-book__label` `fh-cluster` `fh-button` `fh-button--sm` `fh-button--ghost` `fh-cal-book__week` `fh-cal-book__grid` `fh-cal-book__day` `fh-cal-book__times` `fh-cal-book__group` `fh-label` `fh-chips` `fh-cal-book__chips` `fh-chip`

### CAL-1 · Pickers

#### CAL-1.1 · Date picker

```html
<div class="fh-field" data-fh-slot="body" data-fh="CAL-1.1">
  <label for="pm-due">Due date</label>
  <div class="fh-datepicker" data-fh-datepicker data-mode="single"><input class="fh-input" type="date" id="pm-due" name="due" value="2026-11-14" data-fh="FLD" data-fh-slot="fields"></div>
</div>
```

#### CAL-1.2 · Date and time picker

```html
<div class="fh-field" data-fh-slot="body" data-fh="CAL-1.2">
  <label for="pm-kickoff">Kickoff call</label>
  <div class="fh-datepicker" data-fh-datepicker data-mode="datetime"><input class="fh-input" type="datetime-local" id="pm-kickoff" name="kickoff" data-fh="FLD" data-fh-slot="fields"></div>
</div>
```

#### CAL-1.3 · Date range picker

```html
<div class="fh-field fh-field--full" data-fh-slot="body" data-fh="CAL-1.3">
  <label for="pm-from">Reporting period</label>
  <div class="fh-datepicker" data-fh-datepicker data-mode="range"><input class="fh-input" type="date" id="pm-from" name="from" aria-label="Start" data-fh="FLD" data-fh-slot="fields"><input class="fh-input" type="date" id="pm-to" name="to" aria-label="End" data-fh="FLD" data-fh-slot="fields"></div>
</div>
```

### CAL-2 · Inline

#### CAL-2.1 · Inline calendar

```html
<div data-fh-calendar data-mode="single" data-value="2026-11-14" data-min="2026-11-01" aria-label="Pick a day"></div>
```

### CAL-3 · Booking

A quiet month grid beside the chosen day's times. Open days take a faint fill; the picked day and time take the primary. Under Calendar pickers (CAL).

#### CAL-3.1 · Booking calendar

```html
<div class="fh-cal-book" data-fh="CAL-3.1">
  <div class="fh-cal-book__layout">
    <div class="fh-cal-book__month">
      <div class="fh-cal-book__head">
        <p class="fh-cal-book__label" data-fh-slot="label">November 2026</p>
        <div class="fh-cluster" style="gap: var(--fh-gap-bound)"><button type="button" class="fh-button fh-button--sm fh-button--ghost" aria-label="Previous month" data-fh="BTN-2.2" data-fh-slot="actions">‹</button><button type="button" class="fh-button fh-button--sm fh-button--ghost" aria-label="Next month" data-fh="BTN-2.2" data-fh-slot="actions">›</button></div>
      </div>
      <div class="fh-cal-book__week" aria-hidden="true" data-fh-slot="date"><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span></div>
      <div class="fh-cal-book__grid" role="group" aria-label="November 2026">
        <span></span><span></span><span></span><span></span><span></span><span></span>
        <button type="button" class="fh-cal-book__day" disabled data-fh-slot="date">1</button>
        <button type="button" class="fh-cal-book__day" data-open="true" data-fh-slot="date">2</button>
        <button type="button" class="fh-cal-book__day" data-open="true" data-today="true" aria-pressed="true" data-fh-slot="date">3</button>
        <button type="button" class="fh-cal-book__day" data-open="true" data-fh-slot="date">4</button>
        <button type="button" class="fh-cal-book__day" data-open="true" data-fh-slot="date">5</button>
        <button type="button" class="fh-cal-book__day" disabled data-fh-slot="date">6</button>
        <button type="button" class="fh-cal-book__day" disabled data-fh-slot="date">7</button>
      </div>
    </div>
    <div class="fh-cal-book__times">
      <p class="fh-cal-book__label" data-fh-slot="label">Tue 3 Nov</p>
      <div class="fh-cal-book__group">
        <p class="fh-label">Morning</p>
        <div class="fh-chips fh-cal-book__chips" role="group" aria-label="Morning times" data-fh="CHP" data-fh-slot="chips">
          <button type="button" class="fh-chip" data-tone="sky" aria-pressed="true" data-fh="CHP">10:00</button>
          <button type="button" class="fh-chip" data-fh="CHP">11:30</button>
        </div>
      </div>
      <div class="fh-cal-book__group">
        <p class="fh-label">Afternoon</p>
        <div class="fh-chips fh-cal-book__chips" role="group" aria-label="Afternoon times" data-fh="CHP" data-fh-slot="chips">
          <button type="button" class="fh-chip" data-fh="CHP">14:00</button>
          <button type="button" class="fh-chip" data-fh="CHP">16:30</button>
        </div>
      </div>
    </div>
  </div>
</div>
```

## KEY · Key fields

Layer: part.

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
    <input class="fh-input" type="password" autocomplete="off" spellcheck="false" placeholder="whsec_…" aria-label="Webhook signing secret" data-fh="FLD">
    <button class="fh-button fh-button--sm" type="submit" data-fh="BTN">Save</button>
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
    <select class="fh-select" aria-label="Type for ACME__XAI_TEAM_ID" data-fh="THS"><option value>Choose a type…</option><option>ID</option><option>API key</option><option>Secret</option></select>
    <button class="fh-button fh-button--sm" type="submit" data-fh="BTN">Set type</button>
    <p class="fh-keyfield__hint">Nothing about its value shows until it has a type.</p>
  </form>
</div>
</div>
```

### KEY-2 · Groups

#### KEY-2.1 · Service keys

```html
<section class="fh-keyset" aria-labelledby="ks-1" data-fh="KEY-2.1">
  <header class="fh-keyset__head"><i class="fh-icon fh-icon--video" aria-hidden="true"></i><span class="fh-keyset__name" id="ks-1">Zoom</span><span class="fh-keyset__count">1 of 2 set</span></header>
  <div class="fh-keyfield" data-fh-keyfield data-kind="identifier" data-state="set" data-revealable data-key-id="demo-zoom-id" data-fh="KEY-1">
    <div class="fh-keyfield__head"><span class="fh-keyfield__label" id="kf-5">Client ID</span><span class="fh-keyfield__type" data-kind="identifier">OAuth client ID</span></div>
    <code class="fh-keyfield__name">ACME__ZOOM_CLIENT_ID</code>
    <div class="fh-keyfield__value">
      <output class="fh-keyfield__mask" aria-labelledby="kf-5"><span class="fh-keyfield__dots" aria-hidden="true"></span><span class="fh-keyfield__last">Qx7w</span></output>
      <button class="fh-keyfield__action" type="button" data-keyfield-reveal aria-pressed="false" aria-label="Show value" title="Show"><i class="fh-icon fh-icon--eye" aria-hidden="true"></i></button>
      <button class="fh-keyfield__action" type="button" data-keyfield-copy aria-label="Copy client ID" title="Copy"><i class="fh-icon fh-icon--copy" aria-hidden="true"></i></button>
    </div>
  </div>
  <div class="fh-keyfield" data-fh-keyfield data-kind="credential" data-state="empty" data-required data-fh="KEY-1">
    <div class="fh-keyfield__head"><span class="fh-keyfield__label" id="kf-6">Client secret</span><span class="fh-keyfield__type" data-kind="credential">OAuth client secret</span></div>
    <code class="fh-keyfield__name">ACME__ZOOM_CLIENT_SECRET</code>
    <div class="fh-keyfield__value"><output class="fh-keyfield__mask" aria-labelledby="kf-6">Not set</output></div>
  </div>
</section>
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
| `BTN-03` | `BTN-1.5` |
| `BTN-04` | `BTN-2.1` |
| `BTN-05` | `BTN-2.2` |
| `BTN-06` | `BTN-1.6` |
| `BTN-07` | `BTN-3.1` |
| `BTN-08` | `BTN-3.2` |
| `BTN-09` | `BTN-1.7` |
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
| `CUB-01` | `CUB-1.1` |
| `CUB-02` | `CUB-1.2` |
| `CUB-03` | `CUB-1.3` |
| `CUB-04` | `CUB-1.4` |
| `CUC` | `CUB-2` |
| `CUC-01` | `CUB-2.1` |
| `CUC-02` | `CUB-2.2` |
| `CUC-03` | `CUB-2.3` |
| `EYE-01` | `EYE-6.1` |
| `EYE-02` | `EYE-1.1` |
| `EYE-03` | `EYE-1.5` |
| `EYE-04` | `EYE-1.6` |
| `EYE-05` | `EYE-1.7` |
| `EYE-06` | `EYE-2.1` |
| `EYE-07` | `EYE-2.2` |
| `EYE-08` | `EYE-2.3` |
| `EYE-09` | `EYE-1.2` |
| `EYE-10` | `EYE-3.1` |
| `EYE-11` | `EYE-3.2` |
| `EYE-12` | `EYE-3.3` |
| `EYE-13` | `EYE-4.1` |
| `EYE-14` | `EYE-4.2` |
| `EYE-15` | `EYE-3.4` |
| `EYE-16` | `EYE-2.4` |
| `EYE-17` | `EYE-5.1` |
| `EYE-18` | `EYE-5.2` |
| `EYE-19` | `EYE-5.3` |
| `EYE-20` | `EYE-6.2` |
| `EYE-21` | `EYE-6.3` |
| `EYE-22` | `EYE-1.1` |
| `EYE-23` | `EYE-1.3` |
| `KVL` | `TBL-3` |
| `KVL-1` | `TBL-3` |
| `KVL-1.1` | `TBL-3.1` |
| `KVL-1.2` | `TBL-3.2` |
| `KVL-1.3` | `TBL-3.3` |
| `KVL-2` | `TBL-4` |
| `KVL-2.1` | `TBL-4.1` |
| `MRK-01` | `EYE` |
| `MRK-02` | `MRK-1.1` |
| `MRK-03` | `MRK-1.2` |
| `PRP` | `TBL-3` |
| `PRP-1` | `TBL-3` |
| `PRP-1.1` | `TBL-3.1` |
| `PRP-1.2` | `TBL-3.2` |
| `PRP-1.3` | `TBL-3.3` |
| `RVW` | `TBL-3` |
| `RVW-1` | `TBL-3` |
| `TAG-01` | `TAG-1.1` |
| `TAG-02` | `TAG-2.1` |
| `TAG-03` | `TAG-2.2` |
| `TAG-04` | `TAG-2.3` |
| `TAG-05` | `TAG-2.4` |
| `TML-01` | `TML-1.1` |
| `TML-02` | `TML-1.3` |
| `TML-03` | `TML-1.4` |
| `TML-04` | `TML-1.2` |
| `WRT-01` | `WRT-1.1` |
| `WRT-02` | `WRT-1.2` |
