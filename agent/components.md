# Firehorse — component markup

> Canonical markup for every Firehorse component, v1.1.0. Generated from the
> live demos on https://firehorse.rascode.dev — copy these exactly, then change
> the copy. Rules live in [system.md](system.md).

## Class index

| Group | Classes |
|---|---|
| Frame | `fh-page` `fh-frame` `fh-section` (`--ruled` `--hero` `--flush` `--tight` `--narrow`) `fh-main` `fh-bleed` `fh-container` `fh-rule` `fh-cq` |
| Layout | `fh-stack` (`--2xs`…`--2xl`) `fh-cluster` (`--between` `--end`) `fh-grid` (`[data-cols]` `--ruled` `--etched` `--rounded`) `fh-split` (`--wide-start` `--wide-end` `--sidebar`) `fh-center` `fh-ratio` `fh-reel` |
| Type | `fh-display` `fh-title` `fh-heading` `fh-subheading` `fh-lede` `fh-body` `fh-small` `fh-label` `fh-eyebrow` `fh-mono` `fh-index` `fh-price` `fh-signature` `fh-prose` `fh-muted` `fh-subtle` |
| Actions | `fh-button` (`--secondary` `--outline` `--ghost` `--accent` `--plain` `--sm` `--lg` `--block` `--icon`) `fh-action` (`--lg`) `fh-link` (`--quiet`) `fh-roll` `fh-close` |
| Markers | `fh-dot` (`--live`) `fh-eyebrow-pill` (`--sentence`) `fh-breadcrumb` `fh-badge` (`--solid`) |
| Content | `fh-card` (`__meta` `__title` `__body` `__footer` `__price` `--solid`) `fh-stats` `fh-kv` (`__full` `--fields` `--single`) `[data-fh-rows]` `[data-fh-rows-select]` `fh-checklist` `fh-steps` (`--grid`) `fh-quote` `fh-crosses` `fh-table-wrap` `fh-table` (`--reflow`) `fh-matrix` `fh-deck` (`__card` `__card--split` `__media` `__body` `__caption` `__caption--top` `__index` `__title` `__meta` `--hero` `--fade` `--blur` `--lift` `--fan` `--count` `--x` `--reverse` `--flush` `--plain`) `fh-member` (`__art` `__glyphs` `__body` `__name` `__id` `__facts` `__role` `__stamp` `__tagline` `__meta` `__badge` `--glow` `--square` `--plates` `--smear`) `fh-story` (`__head` `__logo` `__tag` `__field` `__field--lines` `__mark` `__figure` `__figure-label` `__ring` `__chart` `__foot` `__quote` `__link` `__media` `--deep` `--ink` `--paper` `--duotone` `--glare`) `fh-speed` (`__smear` `__img` `--orbit` `--still`) `fh-dither` (`__plate` `--paper` `--lines` `--fine` `--coarse`) `fh-glass` (`--dark` `--clear` `--pill` `--prism`) |
| Metrics | `fh-metrics` `fh-metric` (`__label` `__value` `__sub` `__source` `__row` `__more` `__delta` `__figure` `--needed` `--spread` `--tinted` `--wide` `--full`) |
| Admin (admin.css) | `fh-app` `fh-backdrop` `fh-frost` `[data-fh-frost-select]` `fh-masthead` (`__mark` `__caption` `__index` `__title` `__foot` `__meta` `__tools` `--bar`) `fh-record` (`--cover` `__cover`) `fh-section-card` (`__head` `__title` `__tools` `__lede` `__subhead` `__note` `__foot` `--inset` `--aside`) `fh-gauge` `fh-tracker` (`__head` `__meter` `__done` `__body` `__log`) `fh-quick` (`__label` `__action`) `fh-check-cards` `fh-check-card` (`__check` `__area` `__icon` `__title` `__meter` `__above` `__below`) |
| Forms | `fh-form` (`__row` `__actions`) `fh-field` (`--optional` `__hint` `__error`) `fh-input` `fh-textarea` `fh-select` `fh-select-wrap` `fh-input-group` `fh-check` `fh-switch` `fh-segmented` |
| Disclosure | `fh-accordion` `fh-tabs` (`--mono`) `fh-dialog` (`__header` `__body` `__footer`) `fh-menu` `fh-toaster` `fh-toast` |
| Chrome | `fh-header` (`__bar` `__brand` `__actions` `__toggle`) `fh-nav` `fh-nav__link` `fh-drawer` (`__group`) `fh-mega` (`__grid` `__rail`) `fh-footer` (`__columns` `__column` `__base`) |
| Design patterns | `fh-hero` `fh-hero__actions` `fh-hero-split` `fh-section-head` `fh-etched-split` (`__pane`) `fh-cta-band` (`__main` `__title` `__aside` `__people` `__fine`) `fh-window` (`__bar` `__body`) `fh-letter` (`__portrait`) `fh-panel` `fh-panel-inset` `[data-fh-panel-start]` `fh-footer--tall` |
| Helpers | `fh-sr-only` `fh-skip` `fh-reveal` `fh-reveal-children` `fh-hide-narrow` `fh-hide-wide` `fh-tone-text` `fh-text-start|center|end` `fh-nowrap` `fh-tabular` `fh-full` `fh-text-small` `fh-text-micro` `fh-font-mono` `fh-stack--md` |
| Spacing (HIG) | gaps by relationship: `--fh-gap-bound` (4) `--fh-gap-related` (8) `--fh-gap-grouped` (12) `--fh-gap-grouped-wide` (16) `--fh-gap-sectioned` (24) `--fh-gap-separated` (48); padding: `--fh-inset-tight` `--fh-inset-control` `--fh-inset-tile` `--fh-inset-card` `--fh-inset-page`. Never a raw `--fh-space-*` in a component (/guidelines/). |

Attributes: `data-tone` (tone), `data-fh-scheme` (light | dark | auto),
`data-fh-theme` (brand), `data-cols` (grid max columns), `data-label` (table reflow).

## Page chrome

```html
<div class="fh-page">
  <header class="fh-header fh-frame">
    <div class="fh-header__bar">
      <a class="fh-header__brand" href="/">Brand</a>
      <nav class="fh-nav" aria-label="Primary">
        <a class="fh-nav__link" href="/work">Work</a>
        <button class="fh-nav__link" type="button" popovertarget="mega-services">Services</button>
      </nav>
      <div class="fh-header__actions"><a class="fh-button fh-button--sm" href="/contact">Contact</a></div>
      <button class="fh-header__toggle" type="button" popovertarget="drawer" aria-label="Open menu"></button>
    </div>
  </header>
  <div id="mega-services" popover class="fh-mega fh-frame">
    <div class="fh-mega__grid">
      <section data-tone="sky"><h3>Agents</h3><ul><li><a href="#">…</a></li></ul></section>
    </div>
    <div class="fh-mega__rail"><a class="fh-action" href="/services">All services</a></div>
  </div>
  <div id="drawer" popover class="fh-drawer">
    <div class="fh-drawer__group"><p class="fh-label">Menu</p><ul><li><a href="/work">Work</a></li></ul></div>
  </div>
  <main id="main" class="fh-main">
    <section class="fh-section fh-section--hero">
      <div class="fh-hero">
        <p class="fh-eyebrow-pill" data-tone="live"><span class="fh-dot fh-dot--live"></span>Now booking</p>
        <h1 class="fh-display">Headline in sentence case.</h1>
        <p class="fh-lede">One or two sentences.</p>
        <div class="fh-hero__actions"><a class="fh-button" href="/contact">Primary</a><a class="fh-button fh-button--secondary" href="/work">Secondary</a></div>
      </div>
    </section>
    <section class="fh-section fh-section--ruled" aria-labelledby="s1">
      <header class="fh-section-head">
        <div><p class="fh-eyebrow-pill" data-tone="teal"><span class="fh-dot"></span>Label</p><h2 id="s1" class="fh-heading">Section title</h2></div>
        <a class="fh-action fh-action--lg" href="#">View all</a>
      </header>
      <!-- components -->
    </section>
  </main>
  <footer class="fh-footer fh-frame">
    <nav class="fh-footer__columns" aria-label="Footer">
      <div class="fh-footer__column" data-tone="sky"><h2>Group</h2><ul><li><a href="#">Link</a></li></ul></div>
    </nav>
    <div class="fh-footer__base"><span>© Brand</span></div>
  </footer>
</div>
```

## Etched split (full-bleed pair)

```html
<section class="fh-section fh-section--flush">
  <div class="fh-etched-split fh-bleed">
    <div class="fh-etched-split__pane fh-crosses">…problem…</div>
    <div class="fh-etched-split__pane fh-crosses">…approach or form…</div>
  </div>
</section>
```

## Components

### NEU · Neutral ramp

--fh-gray-*

```html
<div style="--sw: var(--fh-gray-1000)"><b>1000</b>#000000</div>
<div style="--sw: var(--fh-gray-950)"><b>950</b>canvas</div>
<div style="--sw: var(--fh-gray-900)"><b>900</b>raised</div>
<div style="--sw: var(--fh-gray-850)"><b>850</b>#2e2e2e</div>
<div style="--sw: var(--fh-gray-800)"><b>800</b>rule</div>
<div style="--sw: var(--fh-gray-750)"><b>750</b>field</div>
<div style="--sw: var(--fh-gray-600)"><b>600</b>#5c5c5c</div>
<div style="--sw: var(--fh-gray-500); --ink: var(--fh-gray-1000)"><b>500</b>subtle</div>
<div style="--sw: var(--fh-gray-400); --ink: var(--fh-gray-1000)"><b>400</b>muted</div>
<div style="--sw: var(--fh-gray-200); --ink: var(--fh-gray-1000)"><b>200</b>#e4e4e4</div>
<div style="--sw: var(--fh-gray-100); --ink: var(--fh-gray-1000)"><b>100</b>text</div>
<div style="--sw: var(--fh-gray-0); --ink: var(--fh-gray-1000)"><b>0</b>#ffffff</div>
```

### TON · Tones

Category color. Set data-tone once; dots, marks, meta and links inside follow. Ratios are against the current canvas.

```html
sky <span data-contrast></span>
teal <span data-contrast></span>
lime <span data-contrast></span>
amber <span data-contrast></span>
orange <span data-contrast></span>
rose <span data-contrast></span>
fuchsia <span data-contrast></span>
violet <span data-contrast></span>
ember <span data-contrast></span>
```

### TYP · Type

Inter, Geist Mono and Caveat in the Rascode theme; system stacks in core. Fluid roles scale with their container.

```html
<!-- TYP-1.1 · Type presets › Geist -->
<div data-fh-type="geist"><p class="fh-title">Ink, etch and ember.</p><p class="fh-body" style="margin: 0">The quick brown fox jumps over the lazy dog, 0123456789.</p></div>

<!-- TYP-1.2 · Type presets › Inter -->
<div data-fh-type="inter"><p class="fh-title">Built for every screen.</p><p class="fh-body" style="margin: 0">The quick brown fox jumps over the lazy dog, 0123456789.</p></div>

<!-- TYP-1.3 · Type presets › Hanken Grotesk -->
<div data-fh-type="hanken"><p class="fh-title">Beyond the ordinary.</p><p class="fh-body" style="margin: 0">The quick brown fox jumps over the lazy dog, 0123456789.</p></div>

<!-- TYP-1.4 · Type presets › Archivo -->
<div data-fh-type="archivo"><p class="fh-title">Create something different.</p><p class="fh-body" style="margin: 0">The quick brown fox jumps over the lazy dog, 0123456789.</p></div>
```

### SPC · Space

--fh-space-*

```html
<div><span>--fh-space-px</span><span>1px</span><i style="--s: var(--fh-space-px)"></i></div>
<div><span>--fh-space-1</span><span>4px</span><i style="--s: var(--fh-space-1)"></i></div>
<div><span>--fh-space-2</span><span>8px</span><i style="--s: var(--fh-space-2)"></i></div>
<div><span>--fh-space-3</span><span>12px</span><i style="--s: var(--fh-space-3)"></i></div>
<div><span>--fh-space-4</span><span>16px</span><i style="--s: var(--fh-space-4)"></i></div>
<div><span>--fh-space-6</span><span>24px</span><i style="--s: var(--fh-space-6)"></i></div>
<div><span>--fh-space-8</span><span>32px</span><i style="--s: var(--fh-space-8)"></i></div>
<div><span>--fh-space-12</span><span>48px</span><i style="--s: var(--fh-space-12)"></i></div>
<div><span>--fh-space-16</span><span>64px</span><i style="--s: var(--fh-space-16)"></i></div>
<div><span>--fh-space-24</span><span>96px</span><i style="--s: var(--fh-space-24)"></i></div>
<div><span>--fh-section-space</span><span>fluid</span><i style="--s: var(--fh-section-space)"></i></div>
```

### RAD · Radius

--fh-radius-*

```html
<div style="--r: var(--fh-radius-sm)">sm · 3px<br>CTA</div>
<div style="--r: var(--fh-radius-md)">md · 7px<br>groups</div>
<div style="--r: var(--fh-radius-lg)">lg · .85rem<br>shells</div>
<div style="--r: var(--fh-radius-pill)">pill<br>markers</div>
```

### ELV · Elevation

The convex button style (data-fh-button="convex"): bends out at rest, the shadow inverts on hover, it sinks on press.

```html
<div class="fh-cluster" style="--fh-gap: var(--fh-space-6)">
  <a class="fh-button" href="#foundations">Rest</a>
  <span class="fh-button" style="box-shadow: var(--fh-shadow-convex-hover)">Hover</span>
  <span class="fh-button" style="translate: 0 2px; box-shadow: var(--fh-shadow-convex-active)">Press</span>
</div>
```

### MOT · Motion

```html
<!-- MOT-1.1 · Entrances › Rise -->
<div data-fh-enter="rise" data-fh-step="1">rise</div>

<!-- MOT-1.2 · Entrances › Drop -->
<div data-fh-enter="drop" data-fh-step="2">drop</div>

<!-- MOT-1.3 · Entrances › Fade -->
<div data-fh-enter="fade" data-fh-step="3">fade</div>

<!-- MOT-1.4 · Entrances › Scale -->
<div data-fh-enter="scale" data-fh-step="4">scale</div>

<!-- MOT-1.5 · Entrances › Blur -->
<div data-fh-enter="blur" data-fh-step="5">blur</div>

<!-- MOT-1.6 · Entrances › Fold -->
<div data-fh-enter="fold" data-fh-step="6">fold</div>

<!-- MOT-1.7 · Entrances › Draw -->
<div>draw<span data-fh-enter="draw" data-fh-step="7"></span></div>

<!-- MOT-1.8 · Entrances › Wipe -->
<div data-fh-enter="wipe" data-fh-step="8">wipe</div>

<!-- MOT-1.9 · Entrances › Unveil -->
<div data-fh-enter="unveil" data-fh-step="9">unveil</div>

<!-- MOT-1.10 · Entrances › Lift -->
<div><span data-fh-enter="lift" data-fh-step="10">lift</span></div>

<!-- MOT-2.1 · Sequences › Intro -->
<div data-fh-intro>
  <p data-fh-enter="fold" data-fh-step="2"><span>_</span>firehorse</p>
  <span data-fh-enter="draw" data-fh-step="4"></span>
  <p data-fh-enter="blur" data-fh-step="6">The design system</p>
  <p data-fh-enter="drop" data-fh-step="7">that moves the same everywhere.</p>
  <ul data-fh-enter-children data-fh-step="9">
    <li>Tokens</li><li>Entrances</li><li>Sequences</li><li>Scroll</li><li>Choreography</li><li>Drift</li>
  </ul>
</div>

<!-- MOT-2.2 · Sequences › Staggered list -->
<ul data-fh-enter-children data-fh-step="9">
  <li>Tokens</li><li>Entrances</li><li>Sequences</li><li>Scroll</li><li>Choreography</li><li>Drift</li>
</ul>

<!-- MOT-3.1 · Scroll-linked › Recede -->
<div class="fh-recede" style="--fh-recede-range: 60vh" data-fh="MOT-3.1"></div>

<!-- MOT-3.2 · Scroll-linked › Scroll fade -->
<div class="fh-scroll-fade" style="--fh-recede-range: 60vh" data-fh="MOT-3.2"></div>

<!-- MOT-3.3 · Scroll-linked › Reveal -->
<div class="fh-reveal"></div>

<!-- MOT-3.4 · Scroll-linked › Parallax -->
<div class="fh-parallax" style="--fh-depth: 0.3"></div>

<!-- MOT-3.5 · Scroll-linked › Progress -->
<p>Page progress: <code>&lt;div class="fh-scroll-progress"&gt;&lt;/div&gt;</code> draws the line at the top of this page.</p>

<!-- MOT-4.1 · Choreography › Circle reveal -->
<div>
  <b>Circle reveal</b><small>Free · <code>Firehorse.reveal(change, from)</code></small>
  <button type="button" class="fh-button fh-button--sm" data-motion-reveal data-fh="MOT-4.1">Change the tone</button>
</div>

<!-- MOT-4.2 · Choreography › Glide -->
<div>
  <b>Glide</b><small>Free · <code>data-fh-glide="center"</code></small>
  <code>&lt;nav&gt;&lt;div data-fh-glide="center"&gt;…links…&lt;/div&gt;&lt;/nav&gt;</code>
</div>

<!-- MOT-4.3 · Choreography › Lock -->
<div>
  <b>Lock</b><small>Free · <code>data-fh-lock</code></small>
  <code>&lt;h1 data-fh-lock="clone" data-fh-lock-to=".nav a" data-fh-lock-scale="0.78" data-fh-lock-href="#top"&gt;</code>
</div>

<!-- MOT-4.4 · Choreography › Dock beside -->
<div>
  <b>Dock beside <span>Pro</span></b><small><code>data-fh-dock-beside="#cta"</code></small>
  <code>&lt;div class="tools" data-fh-dock-beside=".cta"&gt;</code>
</div>

<!-- MOT-5.1 · Drift › Wave -->
<button type="button" data-drift="wave" aria-pressed="true">Wave</button>

<!-- MOT-5.2 · Drift › Silk -->
<button type="button" data-drift="silk" aria-pressed="false">Silk</button>

<!-- MOT-5.3 · Drift › Eddy -->
<button type="button" data-drift="eddy" aria-pressed="false">Eddy</button>

<!-- MOT-5.4 · Drift › Panels -->
<button type="button" data-drift="panels" aria-pressed="false">Panels</button>

<!-- MOT-5.5 · Drift › Ripple -->
<button type="button" data-drift="ripple" aria-pressed="false">Ripple</button>

<!-- MOT-5.6 · Drift › Dapple · Pro -->
<button type="button" data-drift="dapple" aria-pressed="false">Dapple <span>Pro</span></button>

<!-- MOT-5.7 · Drift › Tide lines · Pro -->
<button type="button" data-drift="tides" aria-pressed="false">Tide lines <span>Pro</span></button>

<!-- MOT-5.8 · Drift › Shutters · Pro -->
<button type="button" data-drift="shutters" aria-pressed="false">Shutters <span>Pro</span></button>
```

### STK · Stack

`.fh-stack · --2xs … --2xl`

```html
<!-- STK-1.1 · Stack › 2xs -->
<div class="fh-stack fh-stack--2xs">
  <p class="fh-label">2xs</p>
  <p class="fh-small fh-muted" style="margin:0">Tightest sibling gap.</p>
</div>

<!-- STK-1.2 · Stack › sm -->
<div class="fh-stack fh-stack--sm">
  <p class="fh-label">sm</p>
  <p class="fh-body" style="margin:0">One gap between siblings, set by <code>--fh-gap</code>.</p>
  <a class="fh-action" href="#layout" data-fh="STK-1.2">Read more</a>
</div>

<!-- STK-1.3 · Stack › 2xl -->
<div class="fh-stack fh-stack--2xl">
  <p class="fh-label">2xl</p>
  <p class="fh-small fh-muted" style="margin:0">Widest stack gap.</p>
</div>
```

### CLS · Cluster

`.fh-cluster · --between · --end`

```html
<!-- CLS-1.1 · Cluster › Default -->
<div class="fh-cluster">
  <span class="fh-badge" data-tone="sky" data-fh="CLS-1.1">Agents</span>
  <span class="fh-badge" data-tone="teal" data-fh="CLS-1.1">Data</span>
  <span class="fh-badge" data-tone="orange" data-fh="CLS-1.1">Automation</span>
  <span class="fh-badge" data-fh="CLS-1.1">Managed</span>
</div>

<!-- CLS-1.2 · Cluster › Between -->
<div class="fh-cluster fh-cluster--between" style="inline-size: 100%">
  <span class="fh-label">Between</span>
  <span class="fh-badge" data-tone="lime" data-fh="CLS-1.2">Flush ends</span>
</div>

<!-- CLS-1.3 · Cluster › End -->
<div class="fh-cluster fh-cluster--end" style="inline-size: 100%">
  <span class="fh-badge" data-tone="sky" data-fh="CLS-1.3">End</span>
  <span class="fh-badge" data-tone="teal" data-fh="CLS-1.3">aligned</span>
</div>
```

### GRD · Auto grid

`.fh-grid[data-cols]`

```html
<div class="fh-grid" data-cols="3" style="--fh-grid-min: 4rem; --fh-gap: 8px">
  <div class="fh-card fh-card--solid">1</div>
  <div class="fh-card fh-card--solid">2</div>
  <div class="fh-card fh-card--solid">3</div>
</div>
```

### COL · Columns

The grid itself. `data-cols="16"` for the finer one; a child `.fh-cols[data-subgrid]` keeps nested content on the parent's lines.

```html
<!-- COL-1.1 · Columns › 12 columns -->
<div class="fh-cols" data-fh="COL-1.1">
  <div class="fh-card fh-card--solid" data-span="12">12</div>
  <div class="fh-card fh-card--solid" data-span="8">8</div>
  <div class="fh-card fh-card--solid" data-span="4">4</div>
  <div class="fh-card fh-card--solid" data-span="3">3</div>
  <div class="fh-card fh-card--solid" data-span="6">6</div>
  <div class="fh-card fh-card--solid" data-span="3">3</div>
</div>

<!-- COL-1.2 · Columns › 16 columns -->
<div class="fh-cols" data-cols="16" data-fh="COL-1.2">
  <div class="fh-card fh-card--solid" data-span="10">10 of 16</div>
  <div class="fh-card fh-card--solid" data-span="6">6</div>
  <div class="fh-card fh-card--solid" data-span="5" data-start="3">5, from 3</div>
  <div class="fh-card fh-card--solid" data-span="7" data-start="10">7, from 10</div>
</div>

<!-- COL-1.3 · Columns › Subgrid -->
<div class="fh-cols" data-fh="COL-1.3">
  <div class="fh-cols" data-subgrid data-span="8" data-start="3">
    <div class="fh-card fh-card--solid" data-span="5">Nested 5</div>
    <div class="fh-card fh-card--solid" data-span="3">Nested 3</div>
  </div>
</div>

<!-- COL-2.1 · Compositions › Offset -->
<div class="fh-cols" data-fh="COL-2.1">
  <div class="fh-stack" data-span="5" data-start="2" data-span-md="8">
    <p class="fh-eyebrow-pill" data-tone="violet"><span class="fh-dot"></span>Offset</p>
    <h3 class="fh-heading">Copy from column 2</h3>
    <p class="fh-body">The text starts one column in; the picture takes the right half and runs to the edge of the grid.</p>
  </div>
  <div class="fh-card fh-card--solid" data-span="6" data-start="7" data-row="1" style="min-block-size: 12rem">Image · 7–12</div>
</div>

<!-- COL-2.2 · Compositions › Asymmetric -->
<div class="fh-cols" data-fh="COL-2.2">
  <div class="fh-card fh-card--solid" data-span="5" style="min-block-size: 10rem">5</div>
  <div class="fh-card fh-card--solid" data-span="7" data-align="end" style="min-block-size: 16rem">7 · dropped to the bottom</div>
</div>

<!-- COL-2.3 · Compositions › Broken -->
<div class="fh-cols" data-fh="COL-2.3">
  <div class="fh-card fh-card--solid" data-span="7" data-start="1" data-row="1" data-row-span="2" style="min-block-size: 16rem">Image · 1–7, two rows</div>
  <div class="fh-card" data-span="6" data-start="6" data-row="2" data-layer="over">Card · 6–11, over the image</div>
</div>
```

### FND · Fender

A long page that changes gear partway. A note closes the first chapter and opens a tinted band that hangs down the rest of the page, the way a fender hangs down the side of a saddle: through the next section, under its full-width content and through a tall footer to the bottom.

```html
<div class="fh-page">
  <main class="fh-main" data-fh="FND">
    <section class="fh-section">
      <div class="fh-grid" data-cols="3" style="--fh-grid-min: 6rem">
        <div class="fh-card fh-card--solid">Example</div>
        <div class="fh-card fh-card--solid">Example</div>
        <div class="fh-card fh-card--solid">Example</div>
      </div>
      
        <p class="fh-label">Closing note</p>
        <p class="fh-small fh-muted">Ends the first chapter and opens the panel.</p>
      
    </section>
    <section class="fh-section fh-section--ruled">
      <header class="fh-section-head fh-panel-inset">
        <div><b>02</b> Next chapter<h3 class="fh-subheading">Stepped onto the panel</h3></div>
      </header>
      <div class="fh-grid" data-cols="2" style="--fh-grid-min: 8rem">
        <div class="fh-card">Wide content runs across both tones</div>
        <div class="fh-card">and keeps its own width</div>
      </div>
    </section>
  </main>
  <footer class="fh-footer fh-footer--tall" data-fh="FND">
    <nav class="fh-footer__columns" aria-label="Sample footer">
      <div class="fh-footer__column" data-tone="teal"><h2>Docs</h2><ul><li><a href="#fender">Design patterns</a></li></ul></div>
      <div class="fh-footer__column" data-tone="violet"><h2>Agents</h2><ul><li><a href="#fender">Index</a></li></ul></div>
      <div class="fh-footer__column" data-tone="accent"><h2>Studio</h2><ul><li><a href="#fender">Contact</a></li></ul></div>
    </nav>
  </footer>
  <div class="fh-panel" aria-hidden="true" data-fh="FND"></div>
</div>
```

### CIN · Cinch

A page's opening argument, right under its sub-nav: the claim on the left, the substance on the right, held together by one line the way a cinch holds both sides of a saddle. Two panes, two tones, one number to end on.

```html
<section class="fh-section fh-section--flush" aria-labelledby="cinch-demo-heading">
  <div class="fh-etched-split fh-etched-split--roomy fh-bleed" data-fh="CIN">
    <div class="fh-etched-split__pane fh-crosses">
      <div class="fh-stack">
        <p class="fh-eyebrow-pill" data-tone="rose"><span class="fh-dot fh-dot--live" aria-hidden="true"></span><span>Why it matters</span></p>
        <h2 id="cinch-demo-heading" class="fh-heading">A design system that ships the layouts, not only the parts.</h2>
      </div>
    </div>
    <div class="fh-etched-split__pane fh-crosses">
      <div class="fh-stack">
        <p class="fh-eyebrow-pill" data-tone="orange"><span class="fh-dot fh-dot--live" aria-hidden="true"></span><span>The design pattern</span></p>
        <p class="fh-lede">Every design pattern has an ID, a live demo and the rules that keep its fit, so a person or an agent can cut it again in any theme.</p>
        <p class="fh-body fh-muted">Design patterns at launch: <strong>2</strong>, plus 3 building blocks.</p>
      </div>
    </div>
  </div>
</section>
```

### PNL · Offset panel

A tinted column that begins where you mark it and runs to the bottom of the page, through every section below and the footer. Its fill against the open canvas splits the page in two tones; its dashed edges run the full height. Content stepping onto it takes `.fh-panel-inset`. Fender is built on it.

```html
<div class="fh-page">
  <main class="fh-main" data-fh="PNL">
    <section class="fh-section">
      <p class="fh-label">Section</p>
      
        <p class="fh-label">The panel starts here</p>
        <p class="fh-small fh-muted">data-fh-panel-start on any element.</p>
      
    </section>
    <section class="fh-section fh-section--ruled">
      <header class="fh-section-head fh-panel-inset">
        <div><h3 class="fh-subheading">Next section</h3><p class="fh-small fh-muted">On the panel, stepped off its edge.</p></div>
      </header>
    </section>
  </main>
  <footer class="fh-footer fh-footer--tall" data-fh="PNL">
    <nav class="fh-footer__columns" aria-label="Sample footer">
      <div class="fh-footer__column" data-tone="teal"><h2>Docs</h2><ul><li><a href="#offset-panel">Layout</a></li></ul></div>
      <div class="fh-footer__column" data-tone="violet"><h2>Agents</h2><ul><li><a href="#offset-panel">Index</a></li></ul></div>
    </nav>
  </footer>
  <div class="fh-panel" aria-hidden="true" data-fh="PNL"></div>
</div>
```

### ESP · Etched split

A full-bleed pair that breaks out of the content column while its copy still lines up with the content edge on both sides. Stacks when the page is narrow. `--roomy` gives each pane the full section rhythm. Cinch is built on it.

```html
<div class="fh-etched-split fh-bleed">
  <div class="fh-etched-split__pane fh-crosses">
    <div class="fh-stack fh-stack--lg">
      <p class="fh-eyebrow-pill" data-tone="rose"><span class="fh-dot fh-dot--live"></span>Why it matters</p>
      <h3 class="fh-heading">Most systems fail at the seams, not the center</h3>
      <p class="fh-lede">Each tool works on its own. The cost shows up where data crosses from one to the next: re-keyed orders, stale reports, follow-ups nobody owns.</p>
    </div>
  </div>
  <div class="fh-etched-split__pane fh-crosses">
    <div class="fh-stack fh-stack--lg">
      <p class="fh-eyebrow-pill" data-tone="orange"><span class="fh-dot fh-dot--live"></span>The approach</p>
      <ul class="fh-checklist" data-tone="orange">
        <li>Map every hand-off between systems</li>
        <li>Fix the model before adding automation</li>
        <li>Instrument it so problems surface first</li>
      </ul>
    </div>
  </div>
</div>
```

### CTB · CTA band

The closing ask. A display-size title and the actions on the left; the proof on the right behind a dashed seam: what it costs and takes, who you'll talk to, one line of fine print. A short tone bar rides the top edge. Stacks when the slot is narrow; label, heading, lede and actions on their own still make the simple band.

```html
<div class="fh-cta-band fh-crosses" data-tone="accent" data-fh="CTB">
  <div class="fh-cta-band__main">
    <p class="fh-eyebrow-pill" data-tone="live"><span class="fh-dot fh-dot--live" aria-hidden="true"></span>Booking November</p>
    <h2 class="fh-cta-band__title">Ready when <em>the path is clear.</em></h2>
    <p class="fh-lede">Two weeks from kickoff to a site your team can run. Fixed price, no retainer, and everything we build is yours.</p>
    <div class="fh-hero__actions">
      <a class="fh-button" href="#cta-band">Book a call</a>
      <a class="fh-button fh-button--secondary" href="#cta-band">See pricing</a>
    </div>
  </div>
  <aside class="fh-cta-band__aside" aria-label="What to expect">
    <ul class="fh-cubes">
      <li><b class="fh-cube fh-cube--lg">$1,250</b> fixed</li>
      <li><b class="fh-cube fh-cube--lg">14</b> days</li>
      <li><b class="fh-cube fh-cube--lg">4</b> deliverables</li>
    </ul>
    <div class="fh-cta-band__people">
      <div class="fh-avatars" role="group" aria-label="Your team"><span class="fh-avatar" data-face><img src="img/avatars/ava.webp" alt="Ava"></span><span class="fh-avatar" data-face><img src="img/avatars/cole.webp" alt="Cole"></span><span class="fh-avatar" data-face><img src="img/avatars/maya.webp" alt="Maya"></span></div>
      <span>Talk to <b>Ava, Cole or Maya</b>. Replies within a day.</span>
    </div>
    <p class="fh-cta-band__fine">30-minute call · No prep needed</p>
  </aside>
</div>
```

### BTN · Button

Flat 3px rect, mono caps, solid fill (`data-fh-button="convex"` for the bevelled one). Primary buttons get an arrow; `data-tone` lights the top edge. `--flat` is solid black with white text in every scheme.

```html
<!-- BTN-1.1 · Solid › Primary -->
<a class="fh-button" href="#c-button" data-fh="BTN-1.1"><span class="fh-roll">Discuss a project</span></a>

<!-- BTN-1.2 · Solid › Tone edge -->
<a class="fh-button" href="#c-button" data-tone="sky" data-fh="BTN-1.2">Tone edge</a>

<!-- BTN-1.3 · Solid › Secondary -->
<button class="fh-button fh-button--secondary" type="button" data-fh="BTN-1.3">Secondary</button>

<!-- BTN-1.4 · Solid › Accent -->
<button class="fh-button fh-button--accent" type="button" data-fh="BTN-1.4">Accent</button>

<!-- BTN-1.5 · Solid › Flat -->
<button class="fh-button fh-button--flat" type="button" data-fh="BTN-1.5">Flat</button>

<!-- BTN-2.1 · Line › Outline -->
<button class="fh-button fh-button--outline" type="button" data-fh="BTN-2.1">Outline</button>

<!-- BTN-2.2 · Line › Ghost -->
<button class="fh-button fh-button--ghost" type="button" data-fh="BTN-2.2">Ghost</button>

<!-- BTN-3.1 · States › Busy -->
<button class="fh-button" type="button" aria-busy="true" data-fh="BTN-3.1">Saving</button>

<!-- BTN-3.2 · States › Small, disabled -->
<button class="fh-button fh-button--sm" type="button" disabled data-fh="BTN-3.2">Disabled</button>
```

### ACT · Action & link

Section CTAs and card actions.

```html
<a class="fh-action fh-action--lg" href="#c-action" data-fh="ACT">View all services</a>
<a class="fh-action" data-tone="teal" href="#c-action" data-fh="ACT">Explore data architecture</a>
<a class="fh-link" href="#c-action" data-fh="ACT">Read the case study</a>
<a class="fh-link fh-link--quiet" href="#c-action" data-fh="ACT">Privacy policy</a>
```

### MRK · Markers

Dots, eyebrow pills, breadcrumbs and badges. A badge is for counts only; a status is an `fh-chip` with `data-status`, or inline `fh-status` text.

```html
<!-- MRK-1.1 · Markers › Breadcrumb -->
<nav class="fh-breadcrumb" aria-label="Breadcrumb" data-tone="teal" data-fh="MRK-1.1">
  <a class="fh-breadcrumb__back" href="#c-markers" aria-label="Back"><span class="fh-dot fh-dot--live"></span></a>
  <ol>
    <li><a href="#c-markers">Services</a></li>
    <li><a href="#c-markers">Data</a></li>
    <li><span aria-current="page">Schema design</span></li>
  </ol>
</nav>

<!-- MRK-1.2 · Markers › Badges -->
<div class="fh-cluster">
  <span class="fh-badge" data-fh="MRK-1.2">Required</span>
  <span class="fh-badge" data-tone="lime" data-fh="MRK-1.2">Live</span>
  <span class="fh-badge fh-badge--solid" data-tone="amber" data-fh="MRK-1.2">Beta</span>
</div>
```

### EYE · Eyebrow pill

The Doppler pill as a full component: a dot and a short label that sit above a heading. Combine a shape, a line and any of the parts. Every variant takes the tone from `data-tone`.

```html
<!-- EYE-1.1 · Lines › Solid line -->
<p class="fh-eyebrow-pill" data-tone="sky" data-fh="EYE-1.1"><span class="fh-dot fh-dot--live"></span>Solid line</p>

<!-- EYE-1.2 · Lines › Etched line -->
<p class="fh-eyebrow-pill fh-eyebrow-pill--etched" data-tone="teal" data-fh="EYE-1.2"><span class="fh-dot fh-dot--live"></span>Etched line</p>

<!-- EYE-1.3 · Lines › Dotted line -->
<p class="fh-eyebrow-pill fh-eyebrow-pill--dotted" data-tone="lime" data-fh="EYE-1.3"><span class="fh-dot"></span>Dotted line</p>

<!-- EYE-1.4 · Lines › Double line -->
<p class="fh-eyebrow-pill fh-eyebrow-pill--double" data-tone="amber" data-fh="EYE-1.4"><span class="fh-dot fh-dot--square"></span>Double line</p>

<!-- EYE-2.1 · Shapes › Rounded -->
<p class="fh-eyebrow-pill fh-eyebrow-pill--rounded" data-tone="orange" data-fh="EYE-2.1"><span class="fh-dot"></span>Rounded</p>

<!-- EYE-2.2 · Shapes › Sharp -->
<p class="fh-eyebrow-pill fh-eyebrow-pill--sharp fh-eyebrow-pill--etched" data-tone="rose" data-fh="EYE-2.2"><span class="fh-dot fh-dot--diamond"></span>Sharp</p>

<!-- EYE-2.3 · Shapes › Oval -->
<p class="fh-eyebrow-pill fh-eyebrow-pill--oval fh-eyebrow-pill--etched" data-tone="fuchsia" data-fh="EYE-2.3"><span class="fh-dot fh-dot--live"></span>Oval</p>

<!-- EYE-2.4 · Shapes › Tab -->
<p class="fh-eyebrow-pill fh-eyebrow-pill--tab fh-eyebrow-pill--etched" data-tone="sky" data-fh="EYE-2.4"><span class="fh-dot"></span>Tab</p>

<!-- EYE-3.1 · Fills › Tone tinted -->
<p class="fh-eyebrow-pill fh-eyebrow-pill--tone" data-tone="violet" data-fh="EYE-3.1"><span class="fh-dot fh-dot--live"></span>Tone tinted</p>

<!-- EYE-3.2 · Fills › Solid tone -->
<p class="fh-eyebrow-pill fh-eyebrow-pill--solid" data-tone="sky" data-fh="EYE-3.2"><span class="fh-dot fh-dot--blink"></span>Solid tone</p>

<!-- EYE-3.3 · Fills › Gradient sweep -->
<p class="fh-eyebrow-pill fh-eyebrow-pill--gradient" data-tone="fuchsia" data-fh="EYE-3.3"><span class="fh-dot fh-dot--live"></span>Gradient sweep</p>

<!-- EYE-3.4 · Fills › Glass -->
<p class="fh-eyebrow-pill fh-eyebrow-pill--glass" data-tone="teal" data-fh="EYE-3.4"><span class="fh-dot fh-dot--ring"></span>Glass</p>

<!-- EYE-3.5 · Fills › Ghost -->
<p class="fh-eyebrow-pill fh-eyebrow-pill--ghost" data-tone="lime" data-fh="EYE-3.5"><span class="fh-dot fh-dot--live"></span>Ghost</p>

<!-- EYE-4.1 · Edges › Bracketed -->
<p class="fh-eyebrow-pill fh-eyebrow-pill--bracket" data-tone="amber" data-fh="EYE-4.1"><span class="fh-dot fh-dot--bar"></span>Bracketed</p>

<!-- EYE-4.2 · Edges › Underline -->
<p class="fh-eyebrow-pill fh-eyebrow-pill--underline" data-tone="orange" data-fh="EYE-4.2"><span class="fh-dot"></span>Underline</p>

<!-- EYE-5.1 · Parts › Indexed -->
<p class="fh-eyebrow-pill fh-eyebrow-pill--etched" data-tone="teal" data-fh="EYE-5.1"><span class="fh-eyebrow-pill__index">02</span>Indexed section</p>

<!-- EYE-5.2 · Parts › Segmented -->
<p class="fh-eyebrow-pill" data-tone="orange" data-fh="EYE-5.2"><span class="fh-dot fh-dot--live"></span><span class="fh-eyebrow-pill__seg">Automation</span><span class="fh-eyebrow-pill__seg"><strong>4 services</strong></span></p>

<!-- EYE-5.3 · Parts › Counted -->
<p class="fh-eyebrow-pill fh-eyebrow-pill--rounded" data-tone="rose" data-fh="EYE-5.3"><span class="fh-dot fh-dot--live"></span>Open roles <span class="fh-eyebrow-pill__count">3</span></p>

<!-- EYE-5.4 · Parts › Filled end -->
<p class="fh-eyebrow-pill fh-eyebrow-pill--filled-end" data-tone="orange" data-fh="EYE-5.4"><span class="fh-dot"></span><span class="fh-eyebrow-pill__seg">Automation</span><span class="fh-eyebrow-pill__seg"><strong>4 services</strong></span></p>

<!-- EYE-6.1 · Sentences › Accepting · action -->
<p class="fh-eyebrow-pill fh-eyebrow-pill--sentence" data-tone="live" data-fh="EYE-6.1"><span class="fh-dot fh-dot--live"></span><span>Now accepting proposals · <strong>Book a call</strong></span></p>

<!-- EYE-6.2 · Sentences › Agent · avatar -->
<p class="fh-eyebrow-pill fh-eyebrow-pill--sentence" data-tone="sky" data-fh="EYE-6.2"><span class="fh-avatar fh-avatar--circle"><img src="img/avatars/reginald.webp" alt></span><span>Reginald is online</span><a class="fh-eyebrow-pill__action" href="#c-eyebrow">Talk</a></p>

<!-- EYE-6.3 · Sentences › Search · shortcut -->
<p class="fh-eyebrow-pill fh-eyebrow-pill--etched fh-eyebrow-pill--sentence" data-tone="neutral" data-fh="EYE-6.3"><span>Search the docs</span><kbd class="fh-kbd">⌘K</kbd></p>

<!-- EYE-7.1 · Sizes › Small -->
<p class="fh-eyebrow-pill fh-eyebrow-pill--sm" data-tone="lime" data-fh="EYE-7.1"><span class="fh-dot"></span>Small</p>

<!-- EYE-7.2 · Sizes › Large -->
<p class="fh-eyebrow-pill fh-eyebrow-pill--lg fh-eyebrow-pill--etched" data-tone="accent" data-fh="EYE-7.2"><span class="fh-dot fh-dot--live"></span>Large</p>
```

### CHP · Chips

Chips filter or jump; the selected one fills with its tone. Icons replace the dot. Every variant takes the tone from `data-tone`. For the status of a record use `data-status` instead (merged, running, queued, failed, archived): the tone follows the value. A chip is for status, and sits only in a record's head, a collapsed section's summary and once per row; counts are an `fh-badge`; inline status text is an `fh-status`.

```html
<!-- CHP-1.1 · Kinds › Filter -->
<div class="fh-chips fh-chips--wrap" data-fh="CHP-1.1">
  <a class="fh-chip" data-tone="sky" href="#c-chips" aria-current="true">Agents</a>
  <a class="fh-chip" data-tone="teal" href="#c-chips">Data</a>
  <a class="fh-chip" data-tone="orange" href="#c-chips">Automation</a>
  <a class="fh-chip" data-tone="fuchsia" href="#c-chips">AI</a>
</div>

<!-- CHP-1.2 · Kinds › Choice -->
<div class="fh-chips fh-chips--track" role="group" aria-label="Contact task" data-fh="CHP-1.2">
  <label class="fh-chip" data-tone="lime"><input type="radio" name="task" checked> Start a project</label>
  <label class="fh-chip" data-tone="sky"><input type="radio" name="task"> Book a call</label>
  <label class="fh-chip" data-tone="rose"><input type="radio" name="task"> Support</label>
</div>

<!-- CHP-1.3 · Kinds › Fill -->
<div class="fh-chips fh-chips--wrap" data-fh="CHP-1.3">
  <span class="fh-chip fh-chip--solid" data-tone="sky"><i class="fh-icon fh-icon--bot" aria-hidden="true"></i>Solid tone</span>
  <span class="fh-chip fh-chip--tone" data-tone="orange"><i class="fh-icon fh-icon--workflow" aria-hidden="true"></i>Soft tone</span>
  <span class="fh-chip fh-chip--plain">Plain</span>
</div>

<!-- CHP-1.4 · Kinds › Tabs -->
<div class="fh-chips fh-chips--wrap" data-fh="CHP-1.4">
  <a class="fh-chip fh-chip--underline" data-tone="lime" href="#c-chips" aria-current="true">Overview</a>
  <a class="fh-chip fh-chip--underline" data-tone="lime" href="#c-chips">Pricing</a>
  <a class="fh-chip fh-chip--underline" data-tone="lime" href="#c-chips">FAQ</a>
</div>

<!-- CHP-2.1 · Parts › Indexed -->
<div class="fh-chips fh-chips--wrap" data-fh="CHP-2.1">
  <span class="fh-chip fh-chip--indexed" data-tone="violet"><b class="fh-chip__index">01</b>Foundations</span>
  <span class="fh-chip fh-chip--indexed" data-tone="amber"><b class="fh-chip__index">03</b>Components</span>
  <span class="fh-chip fh-chip--indexed" data-tone="sky"><b class="fh-chip__index">04</b>Data</span>
</div>

<!-- CHP-2.2 · Parts › Counted -->
<div class="fh-chips fh-chips--indexed fh-chips--wrap" aria-label="Open roles" data-fh="CHP-2.2">
  <a class="fh-chip fh-chip--tone" data-tone="fuchsia" href="#services">Design engineer</a>
  <a class="fh-chip fh-chip--tone" data-tone="sky" href="#services">AI agent builder</a>
  <a class="fh-chip fh-chip--tone" data-tone="orange" href="#services">Automation lead</a>
</div>

<!-- CHP-2.3 · Parts › Removable -->
<div class="fh-chips fh-chips--wrap" data-fh="CHP-2.3">
  <span class="fh-chip fh-chip--plain">Website <button class="fh-chip__remove" type="button" aria-label="Remove Website"></button></span>
  <span class="fh-chip fh-chip--plain">Email <button class="fh-chip__remove" type="button" aria-label="Remove Email"></button></span>
</div>

<!-- CHP-3.1 · Chip cards › Data architecture -->
<a class="fh-chip-card" data-tone="teal" href="#c-chip-cards" data-fh="CHP-3.1"><span class="fh-chip-card__block">DA</span><span class="fh-chip-card__text"><b>Data architecture</b><small>4 services</small></span></a>

<!-- CHP-3.2 · Chip cards › Automation -->
<a class="fh-chip-card" data-tone="orange" href="#c-chip-cards" data-fh="CHP-3.2"><span class="fh-chip-card__block">AU</span><span class="fh-chip-card__text"><b>Automation</b><small>6 services</small></span></a>

<!-- CHP-3.3 · Chip cards › Maya -->
<a class="fh-chip-card" data-tone="sky" href="#c-chip-cards" data-fh="CHP-3.3"><span class="fh-chip-card__block"><img src="img/avatars/maya.webp" alt></span><span class="fh-chip-card__text"><b>Maya</b><small>Dental agent</small></span></a>

<!-- CHP-3.4 · Chip cards › Scope-of-work.pdf -->
<a class="fh-chip-card" data-tone="rose" href="#c-chip-cards" data-fh="CHP-3.4"><span class="fh-chip-card__block">PDF</span><span class="fh-chip-card__text"><b>Scope-of-work.pdf</b><small>212 KB · signed</small></span></a>
```

### LGS · Logo strip

Grayscale marks that come to full colour on hover. Add `fh-logos--marquee` for an endless scroll (duplicate the list once). Only show logos you have permission to use.

```html
<!-- LGS-1.1 · Logo strip › Logo strip -->
<ul class="fh-logos" data-fh="LGS-1.1">
  <li><svg viewBox="0 0 120 24" width="120" height="24" aria-label="Northwind"><text x="0" y="18" font-size="16" font-family="system-ui,sans-serif" fill="currentColor">Northwind</text></svg></li>
  <li><svg viewBox="0 0 100 24" width="100" height="24" aria-label="Halcyon"><text x="0" y="18" font-size="16" font-family="system-ui,sans-serif" fill="currentColor">Halcyon</text></svg></li>
  <li><svg viewBox="0 0 90 24" width="90" height="24" aria-label="Voltline"><text x="0" y="18" font-size="16" font-family="system-ui,sans-serif" fill="currentColor">Voltline</text></svg></li>
  <li><svg viewBox="0 0 80 24" width="80" height="24" aria-label="Lumen"><text x="0" y="18" font-size="16" font-family="system-ui,sans-serif" fill="currentColor">Lumen</text></svg></li>
</ul>
```

### CRD · Card in a ruled grid

Dashed cells that share their rules, a tone-colored meta line, and a title link that covers the whole card. Narrow cards stack their footer.

```html
<div class="fh-grid fh-grid--ruled fh-grid--etched" data-cols="3">
  <article class="fh-card" data-tone="sky">
    <p class="fh-card__meta">Agents</p>
    <h3 class="fh-card__title"><a href="#c-card">Lead follow-up agent</a></h3>
    <p class="fh-card__body">Answers, books and follows up on your own channels, around the clock.</p>
    <footer class="fh-card__footer">
      <p class="fh-card__price">Monthly <b>$1,700</b></p>
      <span class="fh-action" data-tone>Meet Wes</span>
    </footer>
  </article>
  <article class="fh-card" data-tone="teal">
    <p class="fh-card__meta">Data architecture</p>
    <h3 class="fh-card__title"><a href="#c-card">Schema design</a></h3>
    <p class="fh-card__body">Data models that match how the business actually runs.</p>
    <footer class="fh-card__footer">
      <p class="fh-card__price">From <b>$1,250</b></p>
      <span class="fh-action" data-tone>View</span>
    </footer>
  </article>
  <article class="fh-card" data-tone="orange">
    <p class="fh-card__meta">Automation</p>
    <h3 class="fh-card__title"><a href="#c-card">Process automation</a></h3>
    <p class="fh-card__body">Hand-offs that happen on their own, with an audit trail.</p>
    <footer class="fh-card__footer">
      <p class="fh-card__price">From <b>$2,400</b></p>
      <span class="fh-action" data-tone>View</span>
    </footer>
  </article>
</div>
```

### STA · Stats strip

One column, two, or a row, depending on the slot.

```html
<dl class="fh-stats" data-tone="teal" data-fh="STA">
  <div><dt>Timeline</dt><dd>2–3 wk</dd><dd>From kickoff to handover</dd></div>
  <div><dt>Investment</dt><dd>$1,250</dd><dd>Fixed scope</dd></div>
  <div><dt>Deliverables</dt><dd>4</dd><dd>Docs, diagrams, migration plan</dd></div>
  <div><dt>Follow-up</dt><dd>30 d</dd><dd>Questions answered</dd></div>
</dl>
```

### KVL · Key value list

Label / value rows on etched rules: label on the left, value on the right. Two columns of rows from 38rem; `__full` spans both. `--fields` puts a field beside each label; `--single` keeps one column. Row spacing is set once for the page with `data-fh-rows` (sm · md · lg · xl) and applies to every table and key value list; `data-fh-rows-select` on a segmented switch changes it live.

```html
<!-- KVL-1.1 · Key value list › Read -->
<dl class="fh-kv fh-kv--single" style="max-inline-size: 24rem" data-fh="KVL-1.1">
  <div><dt>County</dt><dd>Travis</dd></div>
  <div><dt>Parcel</dt><dd>0219-0402-11</dd></div>
  <div><dt>Year built</dt><dd>1987</dd></div>
  <div><dt>Lot</dt><dd>0.21 ac</dd></div>
</dl>

<!-- KVL-1.2 · Key value list › Fields -->
<dl class="fh-kv fh-kv--fields" data-fh="KVL-1.2">
  <div><dt><label for="kv-legal">Legal name</label></dt><dd><input class="fh-input" id="kv-legal" value="Acme Supply Co. LLC"></dd></div>
  <div><dt><label for="kv-dba">DBA</label></dt><dd><input class="fh-input" id="kv-dba" value="Acme"></dd></div>
  <div class="fh-kv__full"><dt><label for="kv-about">About</label></dt><dd><textarea class="fh-textarea" id="kv-about" rows="2">Tools and parts for small builders.</textarea></dd></div>
</dl>

<!-- KVL-1.3 · Key value list › Mixed -->
<dl class="fh-kv" data-fh="KVL-1.3">
  <div><dt>Owner</dt><dd>Maple Row Holdings LLC</dd></div>
  <div><dt>Since</dt><dd>2016</dd></div>
  <div><dt>Mortgage</dt><dd>$212,400</dd></div>
  <div><dt>Liens</dt><dd>None found</dd></div>
  <div class="fh-kv__full"><dt>Legal description</dt><dd>Lot 4, Block B, Cedar Ridge Section 2, a subdivision in Travis County, Texas</dd></div>
</dl>

<!-- KVL-2.1 · Row spacing › Row spacing -->
<fieldset class="fh-segmented fh-segmented--sm" data-fh="KVL-2.1">
  <legend class="fh-sr-only">Row spacing</legend>
  <label><input type="radio" name="kv-rows" value="sm" data-fh-rows-select> S</label>
  <label><input type="radio" name="kv-rows" value="md" data-fh-rows-select checked> M</label>
  <label><input type="radio" name="kv-rows" value="lg" data-fh-rows-select> L</label>
  <label><input type="radio" name="kv-rows" value="xl" data-fh-rows-select> XL</label>
</fieldset>
```

### CKL · Checklist

```html
<ul class="fh-checklist" data-tone="lime" data-fh="CKL">
  <li>Current-state schema review</li>
  <li>Risk register with severity</li>
  <li>Migration plan you can hand to any team</li>
</ul>
```

### STP · Steps

Numbered because order matters. Form steps live on Forms.

```html
<!-- STP-1.1 · Steps › Steps -->
<ol class="fh-steps" data-fh="STP-1.1">
  <li data-tone="sky"><span class="fh-steps__mark"></span><div><h3>Assess</h3><p>Understand the current state and its risks.</p></div></li>
  <li data-tone="teal"><span class="fh-steps__mark"></span><div><h3>Build</h3><p>Ship the foundation, then connect the systems.</p></div></li>
  <li data-tone="orange"><span class="fh-steps__mark"></span><div><h3>Operate</h3><p>Keep it healthy as you grow.</p></div></li>
</ol>

<!-- STP-2.1 · Form steps › Form step -->
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

### CAR · Carousel

Multi-panel slider modelled on X media posts: swipe or scroll, panels snap, and the current dot stretches into a longer bubble. Native CSS dots in Chromium; the enhancer draws the same dots elsewhere.

```html
<section class="fh-carousel" aria-roledescription="carousel" aria-label="Firehorse in four panels" data-fh="CAR">
  <div class="fh-carousel__track" tabindex="0">
    <figure class="fh-carousel__slide" aria-label="1 of 4">
      <img src="img/avatars/ava.webp" alt="Ava"><img src="img/avatars/cole.webp" alt="Cole"><img src="img/avatars/maya.webp" alt="Maya"><img src="img/avatars/mateo.webp" alt="Mateo"><img src="img/avatars/isla.webp" alt="Isla"><img src="img/avatars/ray.webp" alt="Ray">
      <figcaption>Ten agents, one system. Every portrait sits in the same plate.</figcaption>
    </figure>
    <figure class="fh-carousel__slide" data-tone="accent" aria-label="2 of 4">
      <p class="fh-label">Firehorse · 01</p>
      Ink, etch<br>&amp; ember.
    </figure>
    <figure class="fh-carousel__slide" data-tone="teal" aria-label="3 of 4">
      <dl class="fh-stats"><div><dt>Tokens</dt><dd>{{TOKENS}}</dd></div><div><dt>Layers</dt><dd>9</dd></div><div><dt>Breakpoints</dt><dd>0</dd></div></dl>
    </figure>
    <figure class="fh-carousel__slide" aria-label="4 of 4">
      <i data-tone="sky"></i><i data-tone="teal"></i><i data-tone="lime"></i><i data-tone="amber"></i><i data-tone="orange"></i><i data-tone="accent"></i><i data-tone="rose"></i><i data-tone="fuchsia"></i><i data-tone="violet"></i>
      <figcaption>Nine tones. One attribute.</figcaption>
    </figure>
  </div>
  <span class="fh-carousel__count"></span>
</section>
```

### LST · List & timeline

Rows with a visual, text and a trailing slot. A dashed timeline for activity.

```html
<div class="fh-stack fh-stack--xl">
  <ul class="fh-list" role="list" data-fh="LST">
    <li><span class="fh-avatar" data-status="online"><img src="img/avatars/eleanor.webp" alt></span><div><p class="fh-list__title"><a class="fh-list__link" href="#c-list">Eleanor</a></p><p class="fh-list__meta">Legal intake · 14 leads today</p></div><span class="fh-badge" data-tone="lime">Live</span></li>
    <li><span class="fh-avatar" data-status="away"><img src="img/avatars/sam.webp" alt></span><div><p class="fh-list__title"><a class="fh-list__link" href="#c-list">Sam</a></p><p class="fh-list__meta">Medical front desk · paused</p></div><span class="fh-badge" data-tone="amber">Away</span></li>
    <li><span class="fh-avatar fh-avatar--generated" data-tone="violet">RT</span><div><p class="fh-list__title"><a class="fh-list__link" href="#c-list">Ruth</a></p><p class="fh-list__meta">Property management · setup</p></div><span class="fh-badge">Draft</span></li>
  </ul>
  <ol class="fh-timeline">
    <li data-tone="lime"><time>Today · 9:41</time><p><strong>Wes</strong> booked an estimate for 14 Oak Lane.</p></li>
    <li data-tone="sky"><time>Today · 9:12</time><p><strong>Wes</strong> replied to a new inquiry in 4 seconds.</p></li>
    <li data-tone="amber"><time>Yesterday</time><p>Quote follow-up sequence started for 6 open quotes.</p></li>
  </ol>
</div>
```

### DET · Details, code, divider

```html
<div class="fh-stack fh-stack--lg">
  <dl class="fh-dl">
    <div><dt>Plan</dt><dd>Agents · Monthly</dd></div>
    <div><dt>Renews</dt><dd>November 28, 2026</dd></div>
    <div><dt>Channels</dt><dd>Messenger, WhatsApp, SMS</dd></div>
  </dl>
  <p class="fh-divider" data-fh="DET">or install</p>
  <figure class="fh-code" data-fh="DET">
    <figcaption>terminal <button class="fh-button fh-button--sm fh-button--ghost" type="button">Copy</button></figcaption>
    <pre><code>npm i https://firehorse.rascode.dev/npm/firehorse-1.1.0.tgz</code></pre>
  </figure>
  <p class="fh-small fh-muted">Open the command menu with <kbd class="fh-kbd">⌘</kbd> <kbd class="fh-kbd">K</kbd>.</p>
</div>
```

### TIR · Pricing tiers

The featured tier glows in its tone; every tier stacks or sits side by side by container.

```html
<div class="fh-tiers" data-fh="TIR">
  <article class="fh-tier" data-tone="sky">
    <h4 class="fh-tier__name">Assessment</h4>
    <p class="fh-tier__price"><b>$750</b> one time</p>
    <p class="fh-tier__pitch">Find the risks before they find you.</p>
    <ul class="fh-checklist" data-tone><li>Backend review</li><li>Risk register</li><li>30-minute readout</li></ul>
    <a class="fh-button fh-button--secondary fh-button--block" href="#c-pricing">Book assessment</a>
  </article>
  <article class="fh-tier fh-tier--featured" data-tone="accent">
    <span class="fh-tier__flag fh-badge">Most chosen</span>
    <h4 class="fh-tier__name">Agent</h4>
    <p class="fh-tier__price"><b>$1,695</b> per month</p>
    <p class="fh-tier__pitch">A trained agent on your channels, live in days.</p>
    <ul class="fh-checklist" data-tone><li>Voice and text</li><li>5 channels wired</li><li>3-day free trial</li></ul>
    <a class="fh-button fh-button--block" href="#c-pricing">Add an agent</a>
  </article>
  <article class="fh-tier" data-tone="lime">
    <h4 class="fh-tier__name">Managed</h4>
    <p class="fh-tier__price"><b>$400</b> per month</p>
    <p class="fh-tier__pitch">A steady hand on the systems you already run.</p>
    <ul class="fh-checklist" data-tone><li>Monitoring</li><li>Monthly report</li><li>Priority fixes</li></ul>
    <a class="fh-button fh-button--secondary fh-button--block" href="#c-pricing">Talk to us</a>
  </article>
</div>
```

### FEA · Features

```html
<div class="fh-grid" data-cols="2" style="--fh-grid-min: 12rem; --fh-gap: var(--fh-space-8)">
  <div class="fh-feature" data-tone="teal" data-fh="FEA"><span class="fh-feature__icon">CQ</span><h3>Container queries</h3><p>Every slot is a query container.</p></div>
  <div class="fh-feature" data-tone="amber" data-fh="FEA"><span class="fh-feature__icon">L8</span><h3>Eight layers</h3><p>Override without !important.</p></div>
  <div class="fh-feature" data-tone="fuchsia" data-fh="FEA"><span class="fh-feature__icon">◐</span><h3>Two schemes</h3><p>light-dark() on every role.</p></div>
  <div class="fh-feature" data-tone="violet" data-fh="FEA"><span class="fh-feature__icon">AI</span><h3>Agent-ready</h3><p>Contract, markup and tokens.</p></div>
</div>
```

### TST · Testimonial

```html
<figure class="fh-testimonial" data-tone="orange" data-fh="TST">
  <blockquote>We stopped losing quotes in the follow-up. Wes answers at 9pm, books the estimate, and I wake up to a full route.</blockquote>
  <figcaption class="fh-person"><span class="fh-avatar fh-avatar--circle"><img src="img/avatars/cole.webp" alt></span><span class="fh-person__text"><b>Cole Brennan</b><span>Owner · Brennan Landscapes (sample)</span></span></figcaption>
</figure>
```

### TAB · Tabs

Underline tabs that scroll sideways when they run out of room. `fh-tabs--mono` for chrome.

```html
<div class="fh-stack fh-stack--lg">
  <div class="fh-tabs" role="tablist" aria-label="Portal" data-fh="TAB">
    <button role="tab" aria-selected="true" type="button">Overview</button>
    <button role="tab" aria-selected="false" type="button">Invoices</button>
    <button role="tab" aria-selected="false" type="button">Proposals</button>
    <button role="tab" aria-selected="false" type="button">Activity</button>
  </div>
  <nav class="fh-tabs fh-tabs--mono" aria-label="Sections" data-fh="TAB">
    <a href="#c-tabs" aria-current="page">Scope</a>
    <a href="#c-tabs">Pricing</a>
    <a href="#c-tabs">FAQ</a>
  </nav>
</div>
```

### NAV · Navigation

Pagination, a wizard stepper, search and a side nav.

```html
<div class="fh-stack fh-stack--lg">
  <label class="fh-search" data-fh="NAV"><span class="fh-sr-only">Search</span><input type="search" placeholder="Search components"><kbd class="fh-kbd">⌘K</kbd></label>
  <ol class="fh-stepper" data-tone="lime" data-fh="NAV">
    <li data-state="done">Details</li>
    <li data-state="current" aria-current="step">Scope</li>
    <li>Review</li>
    <li>Sign</li>
  </ol>
  <nav class="fh-pagination" aria-label="Pages" data-fh="NAV">
    <a href="#c-nav" rel="prev">Prev</a><a href="#c-nav">1</a><a href="#c-nav" aria-current="page">2</a><a href="#c-nav">3</a><span>…</span><a href="#c-nav">9</a><a href="#c-nav" rel="next">Next</a>
  </nav>
  <nav class="fh-sidenav" aria-label="Portal" data-tone="sky" data-fh="NAV">
    <section><p class="fh-label">Portal</p>
      <a href="#c-nav" aria-current="page">Overview</a>
      <a href="#c-nav">Invoices <span class="fh-badge" data-tone="amber">2</span></a>
      <a href="#c-nav">Agents</a>
    </section>
  </nav>
  <nav class="fh-sidenav" aria-label="Collapsible demo" data-tone="violet" data-fh="NAV">
    <div class="fh-sidenav__area" data-open="true">
      <div class="fh-sidenav__area-head">
        <a href="#c-nav" class="fh-sidenav__row" data-contains-active="true">
          <span class="fh-cluster" style="--fh-gap: var(--fh-space-2)"><i class="fh-icon fh-icon--database" aria-hidden="true"></i><span class="fh-sidenav__label">Schemas</span></span>
          <span class="fh-badge fh-sidenav__badge" data-fh="NAV-2.3" data-tone="rose" data-alert="true">3</span>
        </a>
        <button type="button" class="fh-sidenav__chevron" aria-expanded="true" aria-controls="demo-schemas" aria-label="Collapse Schemas"><i class="fh-icon fh-icon--chevron-right" aria-hidden="true"></i></button>
      </div>
      <div id="demo-schemas" class="fh-sidenav__children" data-state="open" role="region" aria-label="Schemas">
        <a href="#c-nav" class="fh-sidenav__child" data-fh="NAV-2.1">Overview</a>
        <a href="#c-nav" class="fh-sidenav__child" data-fh="NAV-2.1" aria-current="page">Codex</a>
      </div>
    </div>
    <div class="fh-sidenav__area" data-open="false">
      <div class="fh-sidenav__area-head">
        <a href="#c-nav" class="fh-sidenav__row">
          <span class="fh-cluster" style="--fh-gap: var(--fh-space-2)"><i class="fh-icon fh-icon--store" aria-hidden="true"></i><span class="fh-sidenav__label">Store</span></span>
        </a>
        <button type="button" class="fh-sidenav__chevron" aria-expanded="false" aria-controls="demo-store" aria-label="Expand Store"><i class="fh-icon fh-icon--chevron-right" aria-hidden="true"></i></button>
      </div>
      <div id="demo-store" class="fh-sidenav__children" data-state="closed" hidden role="region" aria-label="Store">
        <a href="#c-nav" class="fh-sidenav__child" data-fh="NAV-2.1">Overview</a>
        <a href="#c-nav" class="fh-sidenav__child" data-fh="NAV-2.1">Studio</a>
        <a href="#c-nav" class="fh-sidenav__child" data-fh="NAV-2.1">Products</a>
      </div>
    </div>
  </nav>
</div>
```

### BRG · Hamburger

Three bars, seven morphs, every state. Open comes from aria-expanded, a sibling :popover-open, or fh-burger--open. Click any of them.

```html
States
  <figure><button class="fh-burger fh-burger--boxed" type="button" aria-label="Menu" data-fh="BRG"><span></span></button><figcaption>Closed</figcaption></figure>
  <figure><button class="fh-burger fh-burger--boxed" type="button" aria-label="Menu" data-fh="BRG"><span></span></button><figcaption>Hover</figcaption></figure>
  <figure><button class="fh-burger fh-burger--boxed" type="button" aria-label="Menu" data-fh="BRG"><span></span></button><figcaption>Focus</figcaption></figure>
  <figure><button class="fh-burger fh-burger--boxed fh-burger--open" type="button" aria-label="Close" data-fh="BRG"><span></span></button><figcaption>Open</figcaption></figure>
  <figure><button class="fh-burger fh-burger--boxed" type="button" aria-label="Menu" disabled data-fh="BRG"><span></span></button><figcaption>Disabled</figcaption></figure>
  <figure><button class="fh-burger fh-burger--boxed fh-burger--label" type="button" aria-label="Menu" data-toggle data-fh="BRG"><span></span></button><figcaption>With label</figcaption></figure>

Morphs
  <figure><button class="fh-burger fh-burger--boxed" type="button" aria-label="Menu" aria-expanded="false" data-toggle data-fh="BRG"><span></span></button><figcaption>Cross</figcaption></figure>
  <figure><button class="fh-burger fh-burger--boxed fh-burger--arrow" type="button" aria-label="Menu" aria-expanded="false" data-toggle data-fh="BRG"><span></span></button><figcaption>Arrow</figcaption></figure>
  <figure><button class="fh-burger fh-burger--boxed fh-burger--spin" type="button" aria-label="Menu" aria-expanded="false" data-toggle data-fh="BRG"><span></span></button><figcaption>Spin</figcaption></figure>
  <figure><button class="fh-burger fh-burger--boxed fh-burger--squeeze" type="button" aria-label="Menu" aria-expanded="false" data-toggle data-fh="BRG"><span></span></button><figcaption>Squeeze</figcaption></figure>
  <figure><button class="fh-burger fh-burger--boxed fh-burger--minus" type="button" aria-label="Menu" aria-expanded="false" data-toggle data-fh="BRG"><span></span></button><figcaption>Minus</figcaption></figure>
  <figure><button class="fh-burger fh-burger--boxed fh-burger--plus" type="button" aria-label="Add" aria-expanded="false" data-toggle data-fh="BRG"><span></span></button><figcaption>Plus</figcaption></figure>
  <figure><button class="fh-burger fh-burger--boxed fh-burger--dots" type="button" aria-label="More" aria-expanded="false" data-toggle data-fh="BRG"><span></span></button><figcaption>Dots</figcaption></figure>

Opens
  <figure><button class="fh-burger fh-burger--boxed fh-burger--tone fh-burger--label" type="button" popovertarget="overlay-nav" aria-label="Open the overlay menu" style="--fh-burger-label: 'Overlay'" data-fh="BRG"><span></span></button><figcaption>Full-screen menu</figcaption></figure>
  <figure><button class="fh-burger fh-burger--boxed fh-burger--arrow fh-burger--label" type="button" popovertarget="site-drawer" aria-label="Open the side drawer" style="--fh-burger-label: 'Drawer'" data-fh="BRG"><span></span></button><figcaption>Side drawer</figcaption></figure>
  <figure><button class="fh-burger fh-burger--boxed fh-burger--dots" type="button" popovertarget="actions-menu" aria-label="Actions" style="anchor-name: --actions-menu" data-fh="BRG"><span></span></button><figcaption>Dropdown</figcaption></figure>
```

### MEG · Mega panel

Equal category columns with dashed rules and a footer rail. Default sits flush under the header; `--headed` puts the category titles on one row above a full-bleed etched rule with scaffold ticks, and pairs with `fh-mega__link` for rich rows.

```html
<!-- MEG-1.1 · Default › Default -->
<div class="fh-mega fh-frame" style="position: relative; inset: auto; display: block; opacity: 1; translate: none; max-block-size: none; box-shadow: none; border: var(--fh-border-thin) dashed var(--fh-color-etch); border-radius: var(--fh-radius-lg)" data-fh="MEG-1.1">
  <div class="fh-mega__grid">
    <section data-tone="sky"><h3>Agents</h3><ul><li><a href="#c-mega">Lead follow-up</a></li><li><a href="#c-mega">Inbox triage</a></li></ul></section>
    <section data-tone="teal"><h3>Data</h3><ul><li><a href="#c-mega">Warehouses</a></li><li><a href="#c-mega">Pipelines</a></li></ul></section>
    <section data-tone="orange"><h3>Automation</h3><ul><li><a href="#c-mega">Workflows</a></li><li><a href="#c-mega">Webhooks</a></li></ul></section>
  </div>
  <div class="fh-mega__rail"><a class="fh-action" href="#c-mega">All services</a></div>
</div>

<!-- MEG-2.1 · Headed › Headed -->
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

### DRW · Drawer

The mobile menu: a full-width popover under the header with grouped links. Open it from the hamburger below, or use the site header's drawer on a narrow viewport.

```html
<!-- DRW-1.1 · Drawer › Drawer -->
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

### DRP · Dropdown menu

Labels, icons, shortcuts, checkable items and a danger zone. Positioned with CSS anchor positioning.

```html
<button class="fh-button fh-button--secondary" type="button" popovertarget="actions-menu-2" style="anchor-name: --actions-menu-2"><i class="fh-icon fh-icon--settings" aria-hidden="true"></i>View options</button>
<div class="fh-menu" role="menu" aria-label="Sample menu (static)" data-fh="DRP">
  <p class="fh-menu__label">View</p>
  <button type="button" role="menuitemradio" aria-checked="true"><i class="fh-icon fh-icon--table-2" aria-hidden="true"></i>Grid<kbd>G</kbd></button>
  <button type="button" role="menuitemradio" aria-checked="false"><i class="fh-icon fh-icon--kanban" aria-hidden="true"></i>Board<kbd>B</kbd></button>
  <hr>
  <p class="fh-menu__label">Show</p>
  <button type="button" role="menuitemcheckbox" aria-checked="true"><i class="fh-icon fh-icon--users" aria-hidden="true"></i>Owners</button>
  <button type="button" role="menuitemcheckbox" aria-checked="false"><i class="fh-icon fh-icon--chart-line" aria-hidden="true"></i>Health</button>
  <hr>
  <button type="button" class="fh-menu__danger"><i class="fh-icon fh-icon--trash-2" aria-hidden="true"></i>Delete view</button>
</div>
```

### ACC · Accordion

Native `<details>` with a shared `name`, so only one stays open. The height animates where the browser supports it.

```html
<div class="fh-accordion" data-fh="ACC">
  <details name="faq" open>
    <summary>How long does an assessment take?</summary>
    <p>Two to three weeks from kickoff. You get the findings, a risk register and a migration plan.</p>
  </details>
  <details name="faq">
    <summary>Do you work with our existing team?</summary>
    <p>Yes. Most engagements pair with an in-house engineer so the knowledge stays with you.</p>
  </details>
  <details name="faq">
    <summary>What happens after the 30-day follow-up?</summary>
    <p>Nothing automatic. If you want ongoing help, managed services is a separate monthly plan.</p>
  </details>
</div>
```

### DLG · Dialog, menu, toast

Native `<dialog>` and popovers, with enter and exit animations from `@starting-style`.

```html
<div class="fh-cluster" style="--fh-gap: var(--fh-space-4)">
  <button class="fh-button" type="button" data-open-dialog="demo-dialog">Open dialog</button>
  <button class="fh-button fh-button--secondary" type="button" popovertarget="demo-menu" style="anchor-name: --demo-menu">Open menu</button>
  <button class="fh-button fh-button--ghost" type="button" data-toast="Saved. We'll be in touch within a day.">Show toast</button>
</div>
<div id="demo-menu" popover class="fh-menu" style="position-anchor: --demo-menu" data-fh="DLG">
  <a href="#c-overlay">Duplicate</a>
  <a href="#c-overlay">Share link</a>
  <hr>
  <button type="button">Archive</button>
</div>
<dialog class="fh-dialog" id="demo-dialog" aria-labelledby="demo-dialog-title" data-fh="DLG">
  <form method="dialog">
    <div class="fh-dialog__header">
      <div class="fh-stack fh-stack--xs">
        <p class="fh-label">Book a call</p>
        <h3 class="fh-subheading" id="demo-dialog-title">15 minutes, no slides</h3>
      </div>
      <button class="fh-close" value="cancel" aria-label="Close"></button>
    </div>
    <div class="fh-dialog__body">
      <p class="fh-body">Tell us where it hurts and we'll tell you if we can help. If we can't, we'll say so.</p>
    </div>
    <div class="fh-dialog__footer">
      <button class="fh-button fh-button--secondary" value="cancel">Not now</button>
      <button class="fh-button" value="ok">Pick a time</button>
    </div>
  </form>
</dialog>
```

### FBK · Feedback

Alerts, progress, meters, rings, spinners, skeletons, empty states and tooltips.

```html
<!-- FBK-1.1 · Feedback › Skeleton block -->
<span class="fh-skeleton fh-skeleton--block" style="block-size: 6rem; inline-size: 100%" aria-hidden="true" data-fh="FBK-1.1"></span>
```

### EMP · Empty state & banner

```html
<!-- EMP-1.1 · Banner & empty › Banner -->
<div class="fh-banner" data-tone="accent" data-fh="EMP-1.1"><span>Themes now switch with one attribute.</span><a href="#top">Read the notes</a></div>

<!-- EMP-1.2 · Banner & empty › Empty -->
<div class="fh-empty" data-tone="violet" data-fh="EMP-1.2">
  <span class="fh-empty__icon">∅</span>
  <h4>No leads yet</h4>
  <p>When your agent answers its first inquiry, it will show up here with the transcript and the next step.</p>
  <a class="fh-button fh-button--sm fh-button--secondary" href="#c-feedback">Send a test lead</a>
</div>

<!-- EMP-2.1 · Empty module › Empty module -->
<div class="fh-app-empty" data-fh="EMP-2.1">
  <h2>Finance</h2>
  <p>This module is not wired yet. Numbers and ledgers will land here.</p>
</div>
```

### AVT · Avatars

Shapes, sizes and presence, rings and halos, generated avatars and groups.

```html
<!-- AVT-1.1 · Shapes › Rounded rect -->
<figure><span class="fh-avatar fh-avatar--2xl" data-face data-fh="AVT-1.1"><img src="img/avatars/ava.webp" alt="Ava"></span><figcaption>Rounded rect</figcaption></figure>

<!-- AVT-1.2 · Shapes › Circle -->
<figure><span class="fh-avatar fh-avatar--2xl fh-avatar--circle" data-face data-fh="AVT-1.2"><img src="img/avatars/mateo.webp" alt="Mateo"></span><figcaption>Circle</figcaption></figure>

<!-- AVT-1.3 · Shapes › Oval -->
<figure><span class="fh-avatar fh-avatar--2xl fh-avatar--oval" data-face data-fh="AVT-1.3"><img src="img/avatars/eleanor.webp" alt="Eleanor"></span><figcaption>Oval</figcaption></figure>

<!-- AVT-1.4 · Shapes › Squircle -->
<figure><span class="fh-avatar fh-avatar--2xl fh-avatar--squircle" data-face data-fh="AVT-1.4"><img src="img/avatars/ray.webp" alt="Ray"></span><figcaption>Squircle</figcaption></figure>

<!-- AVT-1.5 · Shapes › Square -->
<figure><span class="fh-avatar fh-avatar--2xl fh-avatar--square" data-face data-fh="AVT-1.5"><img src="img/avatars/isla.webp" alt="Isla"></span><figcaption>Square</figcaption></figure>
```

### AUT · Sign in & sign up

Four layouts, all container-sized. Split puts the art beside the form and moves it on top in narrow slots; Card floats the form over full-bleed art; Glass frosts the form over the art; Plain is the form alone.

```html
<!-- AUT-1.1 · Layouts › Split · etched art -->
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

<!-- AUT-1.2 · Layouts › Card · full-bleed art -->
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

<!-- AUT-1.3 · Layouts › Plain · no art -->
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

<!-- AUT-1.4 · Layouts › Glass · frosted over art -->
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

<!-- AUT-2.1 · Method › Method · password or email link -->
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

### FLD · Fields

The "Required" chip comes from the input's own `required` attribute and settles to "Done" once the field is valid. Errors only show after the visitor has interacted, or at once with `aria-invalid="true"` (for errors the server sends back).

```html
<!-- FLD-1.1 · Fields › Fields -->
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

<!-- FLD-2.1 · Dictation › Dictation -->
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

<!-- FLD-3.1 · Quiet › Quiet -->
<div class="fh-field fh-field--quiet" data-fh="FLD-3.1">
  <label for="f-quiet">Notes</label>
  <textarea class="fh-textarea" id="f-quiet" placeholder="Optional detail"></textarea>
</div>

<!-- FLD-4.1 · Password reveal › Password reveal -->
<div class="fh-field" data-fh="FLD-4.1">
  <label for="f-reveal">Password</label>
  <div class="fh-input-group">
    <input class="fh-input" id="f-reveal" name="password" type="password" autocomplete="off" value="correct horse battery">
    <button class="fh-input-reveal" type="button" aria-label="Show password" aria-pressed="false"></button>
  </div>
</div>
```

### CHO · Choices

Real radios and checkboxes under the styling, so they submit with the form and work with the keyboard. The segmented switch stays a row in a phone-width slot; add `fh-segmented--stack` to stack its options.

```html
<div class="fh-stack fh-stack--lg">
  <fieldset class="fh-segmented" data-fh="CHO">
    <legend class="fh-sr-only">How should we reach you?</legend>
    <label><input type="radio" name="reach" value="email" checked> Email</label>
    <label><input type="radio" name="reach" value="call"> Call</label>
    <label><input type="radio" name="reach" value="text"> Text</label>
  </fieldset>
  <label class="fh-check" data-fh="CHO"><input class="fh-switch" type="checkbox" role="switch" checked> Send me a copy</label>
  <label class="fh-check" data-fh="CHO"><input type="checkbox"> Keep me posted on new articles</label>
  <label class="fh-check" data-fh="CHO"><input type="radio" name="plan"> Monthly</label>
  <label class="fh-check" data-fh="CHO"><input type="radio" name="plan" checked> Annual, two months free</label>
</div>
```

### UPL · Upload, range, tags, sheet

A dropzone over a real file input, a styled range, a tag field, and a dialog that slides in as a side sheet.

```html
<div class="fh-grid" data-cols="2" style="--fh-grid-min: 17rem; --fh-gap: var(--fh-space-6)">
  <label class="fh-dropzone" data-tone="sky" data-fh="UPL">
    <input type="file" multiple>
    <span class="fh-dropzone__title">Drop files or browse</span>
    <span class="fh-dropzone__hint">PDF, PNG or JPG · up to 10 MB</span>
  </label>
  <div class="fh-stack fh-stack--lg">
    <div class="fh-field" data-tone="lime"><label for="fx-budget">Monthly budget</label><input class="fh-range" id="fx-budget" type="range" min="500" max="5000" step="100" value="1700" data-fh="UPL"></div>
    <div class="fh-field fh-field--optional"><label for="fx-tags">Channels</label>
      <div class="fh-tags">
        <span class="fh-chip" data-tone="sky">Messenger <button class="fh-chip__remove" type="button" aria-label="Remove Messenger"></button></span>
        <span class="fh-chip" data-tone="lime">WhatsApp <button class="fh-chip__remove" type="button" aria-label="Remove WhatsApp"></button></span>
        <input id="fx-tags" placeholder="Add a channel">
      </div>
    </div>
    <button class="fh-button fh-button--secondary" type="button" data-open-dialog="demo-sheet">Open side sheet</button>
  </div>
</div>
<dialog class="fh-dialog fh-dialog--sheet" id="demo-sheet" aria-labelledby="demo-sheet-title">
  <form method="dialog">
    <div class="fh-dialog__header"><h3 class="fh-subheading" id="demo-sheet-title">Agent settings</h3><button class="fh-close" value="cancel" aria-label="Close"></button></div>
    <div class="fh-dialog__body fh-stack">
      <label class="fh-check"><input class="fh-switch" type="checkbox" role="switch" checked> Answer after hours</label>
      <label class="fh-check"><input class="fh-switch" type="checkbox" role="switch"> Voice replies</label>
      <dl class="fh-dl"><div><dt>Agent</dt><dd>Wes</dd></div><div><dt>Plan</dt><dd>Monthly</dd></div></dl>
    </div>
    <div class="fh-dialog__footer"><button class="fh-button" value="ok">Save</button></div>
  </form>
</dialog>
```

### TAG · Tag field

Toned chips with a remove button and an input in one field. The inline variant adds no chrome until it is used: a text link with no tags, then a small round plus that opens room for one more.

```html
<!-- TAG-1.1 · Field › Field -->
<div class="fh-field fh-field--optional" data-fh="TAG-1.1"><label for="tg-channels">Channels</label>
  <div class="fh-tags">
    <span class="fh-chip" data-tone="sky">Messenger <button class="fh-chip__remove" type="button" aria-label="Remove Messenger"></button></span>
    <span class="fh-chip" data-tone="lime">WhatsApp <button class="fh-chip__remove" type="button" aria-label="Remove WhatsApp"></button></span>
    <input id="tg-channels" placeholder="Add a channel">
  </div>
</div>

<!-- TAG-2.1 · Inline › Inline · empty -->
<div class="fh-cluster">
  <button type="button" class="fh-button fh-button--sm fh-button--ghost" data-fh="TAG-2.1"><i class="fh-icon fh-icon--hash" aria-hidden="true"></i>Tag</button>
</div>

<!-- TAG-2.2 · Inline › Inline · adding -->
<div class="fh-tags fh-tags--inline" data-fh="TAG-2.2">
  <input aria-label="Add a tag" placeholder="Add a tag">
</div>

<!-- TAG-2.3 · Inline › Inline · with tags -->
<div class="fh-tags fh-tags--inline" data-fh="TAG-2.3">
  <span class="fh-chip" data-tone="orange">applications <button class="fh-chip__remove" type="button" aria-label="Remove applications"></button></span>
  <span class="fh-chip" data-tone="lime">health <button class="fh-chip__remove" type="button" aria-label="Remove health"></button></span>
  <button class="fh-tags__add" type="button" aria-label="Add a tag"></button>
</div>

<!-- TAG-2.4 · Inline › Inline · link entry -->
<div class="fh-tags fh-tags--inline" data-fh="TAG-2.4">
  <span class="fh-chip" data-tone="sky">utbms.com <button class="fh-chip__remove" type="button" aria-label="Remove utbms.com"></button></span>
  <span class="fh-tags__entry"><button class="fh-tags__prefix" type="button" aria-label="Protocol: https, click for http">https://</button><input aria-label="Link" placeholder="example.com/page"></span>
</div>
```

### DTB · Datatable

```html
<div class="fh-dt" id="pipeline" data-tone="sky" aria-label="Client pipeline (sample data)"></div>
```

### TBL · Table

With `fh-table--reflow`, rows turn into labelled cards when the slot is under 36rem. `fh-table__head` in the caption is a title with a count chip.

```html
<!-- TBL-1.1 · Table › Table -->
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

<!-- TBL-2.1 · Caption head › Caption head -->
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

### MET · Metric tiles

One fact per tile: label with an icon, the value, a line under it and where it came from. As many across as fit. Add an `fh-progress` for a share done, `--needed` for a fact still to fill in, or make the tile an `<a>` to open its area. `--spread` puts the label and description at the top and the value at the bottom, with a wide gap. `__row` holds avatars, counts and chips. `__more` is an etched line with a chevron: open, the tile grows in place and shows its detail, so the chevron stays under the pointer; use `--full` when the detail needs room. `__delta` shows the change (`data-trend`; `data-good="down"` where down is good), and a sparkline, ring or meter drops in as it is.

```html
<!-- MET-1.1 · Metric tile › Metric -->
<article class="fh-metric" data-tone="teal" data-fh="MET-1.1">
  <p class="fh-metric__label"><i class="fh-icon fh-icon--building-2" aria-hidden="true"></i>Structure</p>
  <p class="fh-metric__sub">Formed 2019 · Delaware</p>
  <p class="fh-metric__value">LLC</p>
  <p class="fh-metric__source">State records</p>
</article>

<!-- MET-1.2 · Metric tile › Progress -->
<article class="fh-metric" data-tone="lime" data-fh="MET-1.2">
  <p class="fh-metric__label"><i class="fh-icon fh-icon--credit-card" aria-hidden="true"></i>Stripe</p>
  <p class="fh-metric__sub">Next: bank account</p>
  <p class="fh-metric__value">82%</p>
  <progress class="fh-progress" value="82" max="100">82%</progress>
</article>

<!-- MET-1.3 · Metric tile › Needed -->
<article class="fh-metric fh-metric--needed" data-fh="MET-1.3">
  <p class="fh-metric__label"><i class="fh-icon fh-icon--receipt" aria-hidden="true"></i>EIN</p>
  <p class="fh-metric__sub">For Stripe and PayPal</p>
  <p class="fh-metric__value">Needed</p>
</article>

<!-- MET-1.4 · Metric tile › Link -->
<a class="fh-metric" data-tone="sky" href="#a-metric" data-fh="MET-1.4">
  <p class="fh-metric__label"><i class="fh-icon fh-icon--users" aria-hidden="true"></i>Faces</p>
  <p class="fh-metric__sub">2 public</p>
  <p class="fh-metric__value">4</p>
</a>

<!-- MET-1.5 · Metric tile › Spread -->
<article class="fh-metric fh-metric--spread" data-tone="fuchsia" data-fh="MET-1.5">
  <p class="fh-metric__label"><i class="fh-icon fh-icon--shield-check" aria-hidden="true"></i>Payment readiness</p>
  <p class="fh-metric__sub">What Stripe still needs before payouts</p>
  <p class="fh-metric__value">3 of 11</p>
  <progress class="fh-progress" value="27" max="100">27%</progress>
</article>

<!-- MET-1.6 · Metric tile › People -->
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

<!-- MET-1.7 · Metric tile › Expand -->
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

<!-- MET-1.8 · Metric tile › Trend -->
<article class="fh-metric" data-tone="lime" data-fh="MET-1.8">
  <p class="fh-metric__label"><i class="fh-icon fh-icon--dollar-sign" aria-hidden="true"></i>Revenue · 30 d</p>
  <p class="fh-metric__sub">vs September</p>
  <div class="fh-metric__figure"><p class="fh-metric__value">$48,210</p><span class="fh-metric__delta" data-trend="up">12%</span></div>
</article>

<!-- MET-1.9 · Metric tile › Trend · down is good -->
<article class="fh-metric" data-tone="sky" data-good="down" data-fh="MET-1.9">
  <p class="fh-metric__label"><i class="fh-icon fh-icon--trending-down" aria-hidden="true"></i>Churn</p>
  <p class="fh-metric__sub">Down is good here</p>
  <div class="fh-metric__figure"><p class="fh-metric__value">2.1%</p><span class="fh-metric__delta" data-trend="down">0.4 pt</span></div>
</article>

<!-- MET-1.10 · Metric tile › Sparkline -->
<article class="fh-metric" data-tone="teal" data-fh="MET-1.10">
  <p class="fh-metric__label"><i class="fh-icon fh-icon--chart-line" aria-hidden="true"></i>Orders · 12 wk</p>
  <div class="fh-metric__figure"><p class="fh-metric__value">42</p><span class="fh-metric__delta" data-trend="up">8</span><svg class="fh-sparkline" viewBox="0 0 120 32" preserveAspectRatio="none" aria-hidden="true"><path d="M0.0 30.0 L10.9 25.3 L21.8 27.7 L32.7 20.7 L43.6 23.0 L54.5 16.0 L65.5 18.3 L76.4 11.3 L87.3 12.5 L98.2 6.7 L109.1 9.0 L120.0 2.0 L120 32 L0 32Z" fill="currentColor" opacity=".12"></path><path d="M0.0 30.0 L10.9 25.3 L21.8 27.7 L32.7 20.7 L43.6 23.0 L54.5 16.0 L65.5 18.3 L76.4 11.3 L87.3 12.5 L98.2 6.7 L109.1 9.0 L120.0 2.0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"></path></svg></div>
</article>

<!-- MET-1.11 · Metric tile › Gauge -->
<article class="fh-metric" data-tone="amber" data-fh="MET-1.11">
  <p class="fh-metric__label"><i class="fh-icon fh-icon--gauge" aria-hidden="true"></i>Credit used</p>
  <div class="fh-gauge" style="--fh-value: 31; --fh-gauge-size: 8rem" role="img" aria-label="31% of the credit line used"><b>31%</b><small>of $40,000</small></div>
</article>

<!-- MET-2.1 · Spread tiles › Progress -->
<article class="fh-metric fh-metric--spread" data-tone="lime" data-fh="MET-2.1">
  <p class="fh-metric__label"><i class="fh-icon fh-icon--credit-card" aria-hidden="true"></i>Stripe</p>
  <p class="fh-metric__sub">Next: confirm the payout bank account</p>
  <p class="fh-metric__value">82%</p>
  <progress class="fh-progress" value="82" max="100">82%</progress>
  <p class="fh-metric__source">9 of 11 facts</p>
</article>

<!-- MET-2.2 · Spread tiles › Trend -->
<article class="fh-metric fh-metric--spread" data-tone="teal" data-fh="MET-2.2">
  <p class="fh-metric__label"><i class="fh-icon fh-icon--dollar-sign" aria-hidden="true"></i>Revenue · 30 d</p>
  <p class="fh-metric__sub">All brands, after refunds</p>
  <div class="fh-metric__figure"><p class="fh-metric__value">$48,210</p><span class="fh-metric__delta" data-trend="up">12%</span></div>
  <p class="fh-metric__source">vs September</p>
</article>

<!-- MET-2.3 · Spread tiles › Sparkline -->
<article class="fh-metric fh-metric--spread" data-tone="sky" data-fh="MET-2.3">
  <p class="fh-metric__label"><i class="fh-icon fh-icon--chart-line" aria-hidden="true"></i>Orders</p>
  <p class="fh-metric__sub">Last 12 weeks</p>
  <div class="fh-metric__figure"><p class="fh-metric__value">42</p><span class="fh-metric__delta" data-trend="up">8</span><svg class="fh-sparkline" viewBox="0 0 120 32" preserveAspectRatio="none" aria-hidden="true"><path d="M0.0 30.0 L10.9 25.3 L21.8 27.7 L32.7 20.7 L43.6 23.0 L54.5 16.0 L65.5 18.3 L76.4 11.3 L87.3 12.5 L98.2 6.7 L109.1 9.0 L120.0 2.0 L120 32 L0 32Z" fill="currentColor" opacity=".12"></path><path d="M0.0 30.0 L10.9 25.3 L21.8 27.7 L32.7 20.7 L43.6 23.0 L54.5 16.0 L65.5 18.3 L76.4 11.3 L87.3 12.5 L98.2 6.7 L109.1 9.0 L120.0 2.0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"></path></svg></div>
  <p class="fh-metric__source">All channels</p>
</article>

<!-- MET-2.4 · Spread tiles › People -->
<article class="fh-metric fh-metric--spread" data-tone="violet" data-fh="MET-2.4">
  <p class="fh-metric__label"><i class="fh-icon fh-icon--users" aria-hidden="true"></i>Team</p>
  <p class="fh-metric__sub">Who can sign in and act for the business</p>
  <div class="fh-metric__figure"><p class="fh-metric__value">4</p><div class="fh-avatars" role="group" aria-label="Team"><span class="fh-avatar fh-avatar--sm fh-avatar--square"><img src="/img/avatars/ava.webp" alt="Ava"></span><span class="fh-avatar fh-avatar--sm fh-avatar--square"><img src="/img/avatars/cole.webp" alt="Cole"></span><span class="fh-avatar fh-avatar--sm fh-avatar--square"><img src="/img/avatars/maya.webp" alt="Maya"></span><span class="fh-avatar fh-avatar--sm fh-avatar--square fh-avatars__more">+1</span></div></div>
  <p class="fh-metric__source">People</p>
</article>

<!-- MET-2.5 · Spread tiles › Tinted -->
<article class="fh-metric fh-metric--spread fh-metric--tinted" data-tone="orange" data-fh="MET-2.5">
  <p class="fh-metric__label"><i class="fh-icon fh-icon--globe" aria-hidden="true"></i>Google profile</p>
  <p class="fh-metric__sub">Next: opening hours for each location</p>
  <p class="fh-metric__value">45%</p>
  <progress class="fh-progress" value="45" max="100">45%</progress>
  <p class="fh-metric__source">5 of 11 facts</p>
</article>

<!-- MET-2.6 · Spread tiles › Expand -->
<article class="fh-metric fh-metric--spread fh-metric--full" data-tone="sky" data-fh="MET-2.6">
  <p class="fh-metric__label"><i class="fh-icon fh-icon--receipt" aria-hidden="true"></i>Open invoices</p>
  <p class="fh-metric__sub">5 invoices, 1 overdue</p>
  <p class="fh-metric__value">$6,940</p>
  <details class="fh-metric__more"><summary>Breakdown <i class="fh-icon fh-icon--chevron-down" aria-hidden="true"></i></summary>
    <dl class="fh-kv"><div><dt>Brightline Builders</dt><dd>$2,180.00</dd></div><div><dt>Mesa Homes</dt><dd>$3,420.00</dd></div><div><dt>Harbor &amp; Pine</dt><dd>$940.00</dd></div><div><dt>Cobalt Roofing · overdue</dt><dd>$400.00</dd></div></dl>
  </details>
</article>

<!-- MET-2.7 · Spread tiles › Wide -->
<article class="fh-metric fh-metric--spread fh-metric--wide" data-tone="teal" data-fh="MET-2.7">
  <p class="fh-metric__label"><i class="fh-icon fh-icon--gauge" aria-hidden="true"></i>Credit line</p>
  <p class="fh-metric__sub">Drawn against $40,000 at Cedar Valley Bank</p>
  <div class="fh-metric__figure"><p class="fh-metric__value">$12,500</p><span class="fh-metric__delta" data-trend="flat">0</span></div>
  <progress class="fh-progress" value="31" max="100">31%</progress>
  <p class="fh-metric__source">31% drawn · 9.4% rate</p>
</article>

<!-- MET-2.8 · Spread tiles › Full -->
<article class="fh-metric fh-metric--spread fh-metric--full" data-tone="sky" data-fh="MET-2.8">
  <p class="fh-metric__label"><i class="fh-icon fh-icon--receipt" aria-hidden="true"></i>Invoices this month</p>
  <p class="fh-metric__sub">Sent from all brands; amounts before card fees</p>
  <div class="fh-metric__figure"><p class="fh-metric__value">$6,940</p><span class="fh-metric__delta" data-trend="up">$1,120</span></div>
  <div class="fh-table-wrap"><table class="fh-table fh-table--reflow"><thead><tr><th>Invoice</th><th>Customer</th><th>Sent</th><th class="fh-num">Amount</th><th>Status</th></tr></thead><tbody><tr><td data-label="Invoice">INV-1042</td><td data-label="Customer">Brightline Builders</td><td data-label="Sent">Oct 30</td><td class="fh-num" data-label="Amount">$2,180.00</td><td data-label="Status"><span class="fh-chip" data-tone="amber">Due</span></td></tr><tr><td data-label="Invoice">INV-1041</td><td data-label="Customer">Harbor &amp; Pine</td><td data-label="Sent">Oct 26</td><td class="fh-num" data-label="Amount">$940.00</td><td data-label="Status"><span class="fh-chip" data-tone="lime">Paid</span></td></tr><tr><td data-label="Invoice">INV-1040</td><td data-label="Customer">Mesa Homes</td><td data-label="Sent">Oct 21</td><td class="fh-num" data-label="Amount">$3,420.00</td><td data-label="Status"><span class="fh-chip" data-tone="amber">Due</span></td></tr><tr><td data-label="Invoice">INV-1038</td><td data-label="Customer">Cobalt Roofing</td><td data-label="Sent">Oct 9</td><td class="fh-num" data-label="Amount">$400.00</td><td data-label="Status"><span class="fh-chip" data-tone="danger">Overdue</span></td></tr></tbody></table></div>
</article>
```

### THM · Brand theme file

@layer fh.themes

```html
<code><span class="c">/* Load after firehorse.css */</span>
<span class="t">@layer</span> fh.themes {
  [data-fh-theme=<span class="v">"brand"</span>] {
    <span class="a">--fh-font-sans</span>: <span class="v">"Your Sans"</span>, system-ui;
    <span class="a">--fh-font-mono</span>: <span class="v">"Your Mono"</span>, ui-monospace;

    <span class="c">/* light canvas, dark canvas */</span>
    <span class="a">--fh-color-accent</span>: light-dark(#1d4ed8, #60a5fa);

    <span class="a">--fh-button-radius</span>: var(--fh-radius-md);
    <span class="a">--fh-card-radius</span>: var(--fh-radius-md);
  }
}</code>
```

### THS · Theme select

A native select. firehorse.js sets data-fh-theme on <html> and remembers it.

```html
<div class="fh-field"><label for="theme-select-demo">Theme</label><select class="fh-select" id="theme-select-demo" data-fh-theme-select data-fh="THS"><option value>Firehorse</option><option value="mustang">Mustang</option><option value="friesian">Friesian</option><option value="akhal-teke">Akhal-Teke</option></select></div>
```

### TML · Timelines

```html
<!-- TML-1.1 · Timelines › Milestones -->
<div>
<ol class="fh-milestones" data-tone="sky" data-fh="TML-1.1">
  <li class="fh-milestones__item" data-state="done"><time class="fh-milestones__date" datetime="2026-11-01">Nov 1</time><div class="fh-milestones__body"><p class="fh-milestones__title">Shell</p><p>Side navigation, environment band and selector.</p></div></li>
  <li class="fh-milestones__item" data-state="done"><time class="fh-milestones__date" datetime="2026-11-01">Nov 1</time><div class="fh-milestones__body"><p class="fh-milestones__title">Sign-in</p><p>Glass sign-in with username or email.</p></div></li>
  <li class="fh-milestones__item" data-state="now"><time class="fh-milestones__date" datetime="2026-11-15">Nov 15</time><div class="fh-milestones__body"><p class="fh-milestones__title">Applications</p><p>The registry everything maps back to.</p></div></li>
  <li class="fh-milestones__item" data-state="next"><time class="fh-milestones__date" datetime="2026-12-01">Dec 1</time><div class="fh-milestones__body"><p class="fh-milestones__title">Enterprise</p><p>Organisations, their people and sites.</p></div></li>
  <li class="fh-milestones__item" data-state="next"><time class="fh-milestones__date" datetime="2026-12-15">Dec 15</time><div class="fh-milestones__body"><p class="fh-milestones__title">Identity &amp; access</p><p>People, accounts and roles.</p></div></li>
</ol>
</div>

<!-- TML-1.2 · Timelines › Horizontal track -->
<div style="min-inline-size: 0">
<ol class="fh-phases" data-tone="violet" aria-label="Project phases" data-fh="TML-1.2">
  <li class="fh-phases__stop" data-state="done"><time class="fh-phases__date">Oct 6</time><p class="fh-phases__title">Discovery</p><p>Scope signed.</p></li>
  <li class="fh-phases__stop" data-state="done"><time class="fh-phases__date">Oct 20</time><p class="fh-phases__title">Design</p><p>System approved.</p></li>
  <li class="fh-phases__stop" data-state="now"><time class="fh-phases__date">Nov 3</time><p class="fh-phases__title">Build</p><p>Sprint 2 of 3.</p><ul class="fh-phases__items"><li><span class="fh-dot fh-dot--live" data-tone="amber" aria-hidden="true"></span><span>Checkout</span></li><li><span class="fh-dot" data-tone="violet" aria-hidden="true"></span><span>Order emails</span></li></ul></li>
  <li class="fh-phases__stop" data-state="next"><time class="fh-phases__date">Dec 1</time><p class="fh-phases__title">Launch</p><p>Go-live and handover.</p></li>
</ol>
</div>

<!-- TML-1.3 · Timelines › Schedule -->
<div>
          <div><h3>Schedule</h3><p>Bars across months with a today line. Set <code>--start</code> and <code>--span</code> in columns; <code>--fh-schedule-now</code> places today. Scrolls sideways when narrow, with the labels pinned.</p></div>
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

<!-- TML-1.4 · Timelines › Activity feed -->
<div>
          <div><h3>Activity feed</h3><p>Who did what, when: an avatar on a rail, the action in one line, a relative time, and anything else (a remark, a progress bar) stacked under it. Day labels split the feed.</p></div>
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

### CAL · Calendar pickers

```html
<!-- CAL-1.1 · Pickers › Date picker -->
<div class="fh-field" data-fh="CAL-1.1">
  <label for="pm-due">Due date</label>
  <div class="fh-datepicker" data-fh-datepicker data-mode="single"><input class="fh-input" type="date" id="pm-due" name="due" value="2026-11-14"></div>
</div>

<!-- CAL-1.2 · Pickers › Date and time picker -->
<div class="fh-field" data-fh="CAL-1.2">
  <label for="pm-kickoff">Kickoff call</label>
  <div class="fh-datepicker" data-fh-datepicker data-mode="datetime"><input class="fh-input" type="datetime-local" id="pm-kickoff" name="kickoff"></div>
</div>

<!-- CAL-1.3 · Pickers › Date range picker -->
<div class="fh-field fh-field--full" data-fh="CAL-1.3">
  <label for="pm-from">Reporting period</label>
  <div class="fh-datepicker" data-fh-datepicker data-mode="range"><input class="fh-input" type="date" id="pm-from" name="from" aria-label="Start"><input class="fh-input" type="date" id="pm-to" name="to" aria-label="End"></div>
</div>

<!-- CAL-2.1 · Inline › Inline calendar -->
<div>
  <div><h3>Inline calendar</h3><p>The month grid on its own, for booking and scheduling screens. Listen for <code>fh:change</code>; set <code>data-mode="range"</code> and <code>data-months="2"</code> for ranges.</p></div>
  <div style="padding: var(--fh-space-6)">
    <div data-fh-calendar data-mode="single" data-value="2026-11-14" data-min="2026-11-01" aria-label="Pick a day"></div>
  </div>
</div>

<!-- CAL-3.1 · Booking › Booking calendar -->
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

### KEY · Key fields

```html
<!-- KEY-1.1 · Fields › Key field (copy-only) -->
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

<!-- KEY-1.2 · Fields › Key field with reveal -->
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

<!-- KEY-1.3 · Fields › Key field, not set -->
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

<!-- KEY-1.4 · Fields › Key field, needs a type -->
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

<!-- KEY-2.1 · Groups › Service keys -->
<div>
          <div><h3>Service keys</h3><p>One service's keys together, with how many are set. Adding a service to an application creates its fields from the service's slots.</p></div>
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

## More markup

Demos on the docs pages that are no Index family or group of their own.

### Size and alias helpers

New: `fh-stack--md` (the default gap, named), `fh-text-small`, `fh-text-micro`, `fh-font-mono`. Aliases, kept so pages that use them render the same; use the class on the right: `fh-button--primary` is plain `fh-button`, `fh-h` is `fh-heading`, `fh-h4` is `fh-subheading`, `fh-checkbox` is `fh-check`, `fh-table--hover` is plain `fh-table` (row hover is the default).

```html
<div class="fh-stack fh-stack--md" style="max-inline-size: var(--fh-measure-narrow)">
  <p class="fh-text-small" style="margin:0">Small text, <code class="fh-font-mono">fh-font-mono</code> inline.</p>
  <p class="fh-text-micro fh-muted" style="margin:0">Micro text for a footnote or a source line.</p>
</div>
```

### Disabled choices

A disabled option, a disabled segmented group, and a disabled switch. The control stays in the form and takes no pointer.

```html
<div class="fh-stack fh-stack--lg">
  <fieldset class="fh-segmented">
    <legend class="fh-sr-only">How should the shirt ship?</legend>
    <label><input type="radio" name="studio-ship" value="fold" checked> Fold</label>
    <label><input type="radio" name="studio-ship" value="hang"> Hang</label>
    <label><input type="radio" name="studio-ship" value="mail" disabled> Mail</label>
  </fieldset>
  <fieldset class="fh-segmented" disabled>
    <legend class="fh-sr-only">Pack size</legend>
    <label><input type="radio" name="studio-pack" value="one" checked> One</label>
    <label><input type="radio" name="studio-pack" value="six"> Six</label>
  </fieldset>
  <label class="fh-check"><input class="fh-switch" type="checkbox" role="switch" disabled> Hold the print</label>
  <label class="fh-check"><input class="fh-switch" type="checkbox" role="switch" checked disabled> Lock the size</label>
</div>
```

### Dictation field

Type or talk. The label and a Text | Transcribe switch share the first row; while listening, a live caption shows the waveform, clock and interim words. Progressive: without the switch it is a plain textarea. Wire with `data-fh-dictate` (or drive the same markup yourself).

```html
<div class="fh-field fh-field--dictate" data-fh-dictate>
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

### Quiet field

A barely-there lift off the canvas, no border. Default fields already use a light fill (`--fh-color-field`); quiet is fainter still. Use `fh-field--quiet` or `fh-input--quiet`.

```html
<div class="fh-field fh-field--quiet">
  <label for="f-quiet">Notes</label>
  <textarea class="fh-textarea" id="f-quiet" placeholder="Optional detail"></textarea>
</div>
```

### Booking calendar

A quiet month grid beside the chosen day's times. Open days take a faint fill; the picked day and time take the primary. Under Calendar pickers (CAL).

```html
<div class="fh-cal-book">
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
```

### Harmony & overlays

One root colour in, a balanced family out. Set `--fh-root` on any element and Firehorse derives tints, shades and harmonies in OKLCH, so the steps look even on every hue. Overlays paint a layer built from the same family. Pick a root:

```html
          <div class="fh-stack fh-stack--lg">
            <label class="fh-field"><span>Root colour</span><input type="color" value="#e8590c" data-harmony-root aria-label="Root colour"></label>
            <p class="fh-label">Tints and shades</p>
            <div><div><span style="background:var(--fh-root-shade-3)"></span><code>--fh-root-shade-3</code><small>Shade 3</small></div><div><span style="background:var(--fh-root-shade-2)"></span><code>--fh-root-shade-2</code><small>Shade 2</small></div><div><span style="background:var(--fh-root-shade-1)"></span><code>--fh-root-shade-1</code><small>Shade 1</small></div><div><span style="background:var(--fh-root)"></span><code>--fh-root</code><small>Root</small></div><div><span style="background:var(--fh-root-tint-1)"></span><code>--fh-root-tint-1</code><small>Tint 1</small></div><div><span style="background:var(--fh-root-tint-2)"></span><code>--fh-root-tint-2</code><small>Tint 2</small></div><div><span style="background:var(--fh-root-tint-3)"></span><code>--fh-root-tint-3</code><small>Tint 3</small></div></div>
            <p class="fh-label">Harmony</p>
            <div><div><span style="background:var(--fh-root-analog-1)"></span><code>--fh-root-analog-1</code><small>Analogous −30°</small></div><div><span style="background:var(--fh-root-analog-2)"></span><code>--fh-root-analog-2</code><small>Analogous +30°</small></div><div><span style="background:var(--fh-root-complement)"></span><code>--fh-root-complement</code><small>Complement</small></div><div><span style="background:var(--fh-root-split-1)"></span><code>--fh-root-split-1</code><small>Split 150°</small></div><div><span style="background:var(--fh-root-split-2)"></span><code>--fh-root-split-2</code><small>Split 210°</small></div><div><span style="background:var(--fh-root-triad-1)"></span><code>--fh-root-triad-1</code><small>Triad 120°</small></div><div><span style="background:var(--fh-root-triad-2)"></span><code>--fh-root-triad-2</code><small>Triad 240°</small></div><div><span style="background:var(--fh-root-muted)"></span><code>--fh-root-muted</code><small>Muted</small></div></div>
            <p class="fh-label">Overlays · <code>data-fh-overlay</code></p>
            <div class="fh-grid" style="--fh-grid-min: 12rem; --fh-grid-max-cols: 4">
              <article class="fh-card" data-fh-overlay="wash"><p class="fh-card__meta">wash</p><h4 class="fh-card__title">Flat and quiet</h4></article>
              <article class="fh-card" data-fh-overlay="glow"><p class="fh-card__meta">glow</p><h4 class="fh-card__title">Radial bloom</h4></article>
              <article class="fh-card" data-fh-overlay="aurora"><p class="fh-card__meta">aurora</p><h4 class="fh-card__title">Conic sweep</h4></article>
              <figure class="fh-card" data-fh-overlay="duotone"><img src="/img/backdrop/firehorse-horse.webp" alt="" loading="lazy"><figcaption class="fh-card__meta">duotone</figcaption></figure>
```

### MCP server

Phase 1 free guide tools over stdio: list and search the Index, fetch markup and tokens, read the agent rules, compose a page. No network. Install the package, then point Claude Code, Claude Desktop or Cursor at `npx firehorse-mcp`.

```html
<figure class="fh-window">
  <div class="fh-window__bar"><span>mcp.json</span><button class="fh-button fh-button--sm fh-button--ghost" type="button" data-copy="#mcp-config">Copy</button></div>
  <div class="fh-window__body"><pre id="mcp-config"><code>{
  "mcpServers": {
    "firehorse": {
      "command": "npx",
      "args": ["-y", "firehorse-mcp"]
    }
  }
}</code></pre></div>
</figure>
```

