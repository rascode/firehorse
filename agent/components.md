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
| People | `fh-social` (`__photo` `__body` `__name` `__check` `__bio` `__foot` `__stats` `--fade` `--dark`) |
| Commerce | `fh-invoice` (`__cover` `__head` `__logo` `__number` `__title` `__parties` `__label` `__dates` `__items` `__totals` `__total` `__sign` `__foot` `--classic`) `fh-pay` (`--float` `__mark` `__doc` `__amount` `__icon` `__panel` `__head` `__route` `__party` `__sum` `__total` `__details` `__actions`) |
| Forms | `fh-form` (`__row` `__actions`) `fh-field` (`--optional` `__hint` `__error`) `fh-input` `fh-textarea` `fh-select` `fh-select-wrap` `fh-input-group` `fh-check` `fh-switch` `fh-segmented` |
| Disclosure | `fh-accordion` `fh-tabs` (`--mono`) `fh-dialog` (`__header` `__body` `__footer`) `fh-menu` `fh-toaster` `fh-toast` |
| Chrome | `fh-header` (`__bar` `__brand` `__actions` `__toggle`) `fh-nav` `fh-nav__link` `fh-drawer` (`__group`) `fh-mega` (`__grid` `__rail`) `fh-footer` (`__columns` `__column` `__base`) |
| Design patterns | `fh-hero` `fh-hero__actions` `fh-hero-split` `fh-section-head` `fh-etched-split` (`__pane`) `fh-cta-band` (`__main` `__title` `__aside` `__people` `__fine`) `fh-window` (`__bar` `__body`) `fh-letter` (`__portrait`) `fh-panel` `fh-panel-inset` `[data-fh-panel-start]` `fh-footer--tall` |
| Media | `fh-canvas` (`__body` `__top` `__main` `__foot` `__title` `__sub` `__eyebrow` `__mark` `__badge` `__index` `__cubes` `__media` `__ui` (`--crop`) `--og` `--yt-thumb` `--yt-banner` `--x-header` `--li-banner` `--post` `--square` `--story` `--cover` `--card` `--center` `--split` `--row` `--plain` `--plate` `--native` `__cubes--rows`) `[data-fh-guides]` |
| Slides | `fh-slide` (`--title` `--section` `--middle` `__list` `__stats` `__quote` `__cite` `__code`) on an `fh-canvas`; reveal.js: `dist/reveal.css` |
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

### Size and alias helpers

New: `fh-stack--md` (the default gap, named), `fh-text-small`, `fh-text-micro`, `fh-font-mono`. Aliases, kept so pages that use them render the same; use the class on the right: `fh-button--primary` is plain `fh-button`, `fh-h` is `fh-heading`, `fh-h4` is `fh-subheading`, `fh-checkbox` is `fh-check`, `fh-table--hover` is plain `fh-table` (row hover is the default).

```html
<div class="fh-stack fh-stack--md" style="max-inline-size: var(--fh-measure-narrow)">
  <p class="fh-text-small" style="margin:0">Small text, <code class="fh-font-mono">fh-font-mono</code> inline.</p>
  <p class="fh-text-micro fh-muted" style="margin:0">Micro text for a footnote or a source line.</p>
</div>
```

### MOT-1 · Entrances

Put `data-fh-enter` on an element and it enters once the page is ready. Step `n` starts at n × `--fh-intro-beat` (150ms); `--fh-at` sets an exact time. Press Replay.

```html
<div class="site-motion-grid" data-fh-intro>
  <div class="site-motion-tile" data-fh-enter="rise" data-fh-step="1">rise</div>
  <div class="site-motion-tile" data-fh-enter="drop" data-fh-step="2">drop</div>
  <div class="site-motion-tile" data-fh-enter="fade" data-fh-step="3">fade</div>
  <div class="site-motion-tile" data-fh-enter="scale" data-fh-step="4">scale</div>
  <div class="site-motion-tile" data-fh-enter="blur" data-fh-step="5">blur</div>
  <div class="site-motion-tile" data-fh-enter="fold" data-fh-step="6">fold</div>
  <div class="site-motion-tile site-motion-tile--line">draw<span data-fh-enter="draw" data-fh-step="7"></span></div>
  <div class="site-motion-tile" data-fh-enter="wipe" data-fh-step="8">wipe</div>
  <div class="site-motion-tile site-motion-tile--art" data-fh-enter="unveil" data-fh-step="9">unveil</div>
  <div class="site-motion-tile site-motion-tile--clip"><span data-fh-enter="lift" data-fh-step="10">lift</span></div>
</div>
```

### MOT-2 · Sequences

An intro's order lives on its section. `data-fh-intro` marks the owner; `data-fh-enter-children` staggers a list by `--fh-stagger` (60ms). The homepage hero is written exactly this way.

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

### MOT-3 · Scroll-linked

CSS only, on the page's scroll timeline: it tracks the scroll exactly and costs no script per frame. Scroll the page and watch these.

```html
<div class="site-motion-scroll">
  <div class="site-motion-frame"><div class="site-motion-art fh-recede" style="--fh-recede-range: 60vh"></div><span>fh-recede</span></div>
  <div class="site-motion-frame"><div class="site-motion-art site-motion-art--b fh-scroll-fade" style="--fh-recede-range: 60vh"></div><span>fh-scroll-fade</span></div>
  <div class="site-motion-frame"><div class="site-motion-art site-motion-art--c fh-reveal"></div><span>fh-reveal</span></div>
  <div class="site-motion-frame"><div class="site-motion-art site-motion-art--d fh-parallax" style="--fh-depth: 0.3"></div><span>fh-parallax</span></div>
</div>
```

### MOT-4 · Choreography

Script measures once and on resize; the motion itself still runs on the scroll timeline. The circle reveal, glide and lock are free in the enhancer (`firehorse.js`); dock beside is Firehorse Pro.

```html
<div class="site-motion-choreo">
  <div class="site-motion-card">
    <b>Circle reveal</b><small>Free · <code>Firehorse.reveal(change, from)</code></small>
    <button type="button" class="fh-button fh-button--sm" data-motion-reveal>Change the tone</button>
  </div>
  <div class="site-motion-card">
    <b>Glide</b><small>Free · <code>data-fh-glide="center"</code></small>
    <code class="site-motion-code">&lt;nav&gt;&lt;div data-fh-glide="center"&gt;…links…&lt;/div&gt;&lt;/nav&gt;</code>
  </div>
  <div class="site-motion-card">
    <b>Lock</b><small>Free · <code>data-fh-lock</code></small>
    <code class="site-motion-code">&lt;h1 data-fh-lock="clone" data-fh-lock-to=".nav a" data-fh-lock-scale="0.78" data-fh-lock-href="#top"&gt;</code>
  </div>
  <div class="site-motion-card">
    <b>Dock beside <span class="site-motion-pro">Pro</span></b><small><code>data-fh-dock-beside="#cta"</code></small>
    <code class="site-motion-code">&lt;div class="tools" data-fh-dock-beside=".cta"&gt;</code>
  </div>
</div>
```

### STK · Stack

`.fh-stack · --2xs … --2xl`

```html
<div class="fh-stack fh-stack--lg">
  <div class="fh-stack fh-stack--2xs">
    <p class="fh-label">2xs</p>
    <p class="fh-small fh-muted" style="margin:0">Tightest sibling gap.</p>
  </div>
  <div class="fh-stack fh-stack--sm">
    <p class="fh-label">sm</p>
    <p class="fh-body" style="margin:0">One gap between siblings, set by <code>--fh-gap</code>.</p>
    <a class="fh-action" href="#layout" data-fh="STK-1.2">Read more</a>
  </div>
  <div class="fh-stack fh-stack--2xl">
    <p class="fh-label">2xl</p>
    <p class="fh-small fh-muted" style="margin:0">Widest stack gap.</p>
  </div>
</div>
```

### CLS · Cluster

`.fh-cluster · --between · --end`

```html
<div class="fh-stack fh-stack--lg">
  <div class="fh-cluster">
    <span class="fh-badge" data-tone="sky" data-fh="CLS-1.1">Agents</span>
    <span class="fh-badge" data-tone="teal" data-fh="CLS-1.1">Data</span>
    <span class="fh-badge" data-tone="orange" data-fh="CLS-1.1">Automation</span>
    <span class="fh-badge" data-fh="CLS-1.1">Managed</span>
  </div>
  <div class="fh-cluster fh-cluster--between" style="inline-size: 100%">
    <span class="fh-label">Between</span>
    <span class="fh-badge" data-tone="lime" data-fh="CLS-1.2">Flush ends</span>
  </div>
  <div class="fh-cluster fh-cluster--end" style="inline-size: 100%">
    <span class="fh-badge" data-tone="sky" data-fh="CLS-1.3">End</span>
    <span class="fh-badge" data-tone="teal" data-fh="CLS-1.3">aligned</span>
  </div>
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
<div class="fh-stack fh-stack--lg">
<div class="fh-cols" data-fh="COL-1.1">
  <div class="fh-card fh-card--solid" data-span="12">12</div>
  <div class="fh-card fh-card--solid" data-span="8">8</div>
  <div class="fh-card fh-card--solid" data-span="4">4</div>
  <div class="fh-card fh-card--solid" data-span="3">3</div>
  <div class="fh-card fh-card--solid" data-span="6">6</div>
  <div class="fh-card fh-card--solid" data-span="3">3</div>
</div>
<div class="fh-cols" data-cols="16" data-fh="COL-1.2">
  <div class="fh-card fh-card--solid" data-span="10">10 of 16</div>
  <div class="fh-card fh-card--solid" data-span="6">6</div>
  <div class="fh-card fh-card--solid" data-span="5" data-start="3">5, from 3</div>
  <div class="fh-card fh-card--solid" data-span="7" data-start="10">7, from 10</div>
</div>
<div class="fh-cols" data-fh="COL-1.3">
  <div class="fh-cols" data-subgrid data-span="8" data-start="3">
    <div class="fh-card fh-card--solid" data-span="5">Nested 5</div>
    <div class="fh-card fh-card--solid" data-span="3">Nested 3</div>
  </div>
</div>
</div>
```

### COL-2 · Compositions

Three placements to start from. Offset: copy held to the left, the image breaking right. Asymmetric: a 5 / 7 split with the image dropped. Broken: two pieces sharing rows, so one overlaps the other.

```html
<div class="fh-stack fh-stack--xl">
<div class="fh-cols">
  <div class="fh-stack" data-span="5" data-start="2" data-span-md="8">
    <p class="fh-eyebrow-pill" data-tone="violet"><span class="fh-dot"></span>Offset</p>
    <h3 class="fh-heading">Copy from column 2</h3>
    <p class="fh-body">The text starts one column in; the picture takes the right half and runs to the edge of the grid.</p>
  </div>
  <div class="fh-card fh-card--solid" data-span="6" data-start="7" data-row="1" style="min-block-size: 12rem">Image · 7–12</div>
</div>
<div class="fh-cols">
  <div class="fh-card fh-card--solid" data-span="5" style="min-block-size: 10rem">5</div>
  <div class="fh-card fh-card--solid" data-span="7" data-align="end" style="min-block-size: 16rem">7 · dropped to the bottom</div>
</div>
<div class="fh-cols">
  <div class="fh-card fh-card--solid" data-span="7" data-start="1" data-row="1" data-row-span="2" style="min-block-size: 16rem">Image · 1–7, two rows</div>
  <div class="fh-card" data-span="6" data-start="6" data-row="2" data-layer="over">Card · 6–11, over the image</div>
</div>
</div>
```

### FND · Fender

A long page that changes gear partway. A note closes the first chapter and opens a tinted band that hangs down the rest of the page, the way a fender hangs down the side of a saddle: through the next section, under its full-width content and through a tall footer to the bottom.

```html
<div class="fh-page site-panel-demo">
  <main class="fh-main" data-fh="FND">
    <section class="fh-section">
      <div class="fh-grid" data-cols="3" style="--fh-grid-min: 6rem">
        <div class="fh-card fh-card--solid">Example</div>
        <div class="fh-card fh-card--solid">Example</div>
        <div class="fh-card fh-card--solid">Example</div>
      </div>
      <aside class="site-panel-demo__start" data-fh-panel-start>
        <p class="fh-label">Closing note</p>
        <p class="fh-small fh-muted">Ends the first chapter and opens the panel.</p>
      </aside>
    </section>
    <section class="fh-section fh-section--ruled">
      <header class="fh-section-head fh-panel-inset">
        <div><p class="site-chapter" data-tone="violet"><b>02</b> Next chapter</p><h3 class="fh-subheading">Stepped onto the panel</h3></div>
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
<div class="fh-page site-panel-demo">
  <main class="fh-main" data-fh="PNL">
    <section class="fh-section">
      <p class="fh-label">Section</p>
      <aside class="site-panel-demo__start" data-fh-panel-start>
        <p class="fh-label">The panel starts here</p>
        <p class="fh-small fh-muted">data-fh-panel-start on any element.</p>
      </aside>
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
<dl class="fh-dl site-variants">
  <div><dt>Primary<code>.fh-button</code></dt><dd>
    <a class="fh-button" href="#c-button" data-fh="BTN-1.1"><span class="fh-roll">Discuss a project</span></a></dd></div>
  <div><dt>Tone edge<code>.fh-button · data-tone</code></dt><dd>
    <a class="fh-button" href="#c-button" data-tone="sky" data-fh="BTN-1.2">Tone edge</a></dd></div>
  <div><dt>Secondary<code>--secondary</code></dt><dd>
    <button class="fh-button fh-button--secondary" type="button" data-fh="BTN-1.3">Secondary</button></dd></div>
  <div><dt>Accent<code>--accent</code></dt><dd>
    <button class="fh-button fh-button--accent" type="button" data-fh="BTN-1.4">Accent</button></dd></div>
  <div><dt>Flat<code>--flat</code></dt><dd>
    <button class="fh-button fh-button--flat" type="button" data-fh="BTN-1.5">Flat</button></dd></div>
  <div><dt>Outline<code>--outline</code></dt><dd>
    <button class="fh-button fh-button--outline" type="button" data-fh="BTN-2.1">Outline</button></dd></div>
  <div><dt>Ghost<code>--ghost</code></dt><dd>
    <button class="fh-button fh-button--ghost" type="button" data-fh="BTN-2.2">Ghost</button></dd></div>
  <div><dt>Busy<code>aria-busy="true"</code></dt><dd>
    <button class="fh-button" type="button" aria-busy="true" data-fh="BTN-3.1">Saving</button></dd></div>
  <div><dt>Small, disabled<code>--sm · disabled</code></dt><dd>
    <button class="fh-button fh-button--sm" type="button" disabled data-fh="BTN-3.2">Disabled</button></dd></div>
</dl>
```

### ACT · Action & link

Section CTAs and card actions.

```html
<dl class="fh-dl site-rows">
  <div><dt>Large</dt><dd><a class="fh-action fh-action--lg" href="#c-action" data-fh="ACT">View all services</a></dd></div>
  <div><dt>Toned</dt><dd><a class="fh-action" data-tone="teal" href="#c-action" data-fh="ACT">Explore data architecture</a></dd></div>
  <div><dt>Text link</dt><dd><a class="fh-link" href="#c-action" data-fh="ACT">Read the case study</a></dd></div>
  <div><dt>Quiet link</dt><dd><a class="fh-link fh-link--quiet" href="#c-action" data-fh="ACT">Privacy policy</a></dd></div>
</dl>
```

### MRK · Markers

Dots, eyebrow pills, breadcrumbs and badges. A badge is for counts only; a status is an `fh-chip` with `data-status`, or inline `fh-status` text.

```html
<dl class="fh-dl site-rows">
  <div><dt>Breadcrumb</dt><dd>
    <nav class="fh-breadcrumb" aria-label="Breadcrumb" data-tone="teal" data-fh="MRK-1.1">
      <a class="fh-breadcrumb__back" href="#c-markers" aria-label="Back"><span class="fh-dot fh-dot--live"></span></a>
      <ol>
        <li><a href="#c-markers">Services</a></li>
        <li><a href="#c-markers">Data</a></li>
        <li><span aria-current="page">Schema design</span></li>
      </ol>
    </nav></dd></div>
  <div><dt>Badges</dt><dd>
    <div class="fh-cluster">
      <span class="fh-badge" data-fh="MRK-1.2">Required</span>
      <span class="fh-badge" data-tone="lime" data-fh="MRK-1.2">Live</span>
      <span class="fh-badge fh-badge--solid" data-tone="amber" data-fh="MRK-1.2">Beta</span>
    </div></dd></div>
</dl>
```

### EYE · Eyebrow pill

The Doppler pill from the top of this page, as a full component. Combine a shape, a line and any of the parts. Every variant takes the tone from `data-tone`.

```html
<dl class="fh-dl site-variants site-variants--grouped">
  <div><dt>Lines<code>.fh-eyebrow-pill · --etched · --dotted · --double</code></dt><dd>
    <p class="fh-eyebrow-pill" data-tone="sky" data-fh="EYE-1.1"><span class="fh-dot fh-dot--live"></span>Solid line</p>
    <p class="fh-eyebrow-pill fh-eyebrow-pill--etched" data-tone="teal" data-fh="EYE-1.2"><span class="fh-dot fh-dot--live"></span>Etched line</p>
    <p class="fh-eyebrow-pill fh-eyebrow-pill--dotted" data-tone="lime" data-fh="EYE-1.3"><span class="fh-dot"></span>Dotted line</p>
    <p class="fh-eyebrow-pill fh-eyebrow-pill--double" data-tone="amber" data-fh="EYE-1.4"><span class="fh-dot fh-dot--square"></span>Double line</p></dd></div>
  <div><dt>Shapes<code>--rounded · --sharp · --oval · --tab</code></dt><dd>
    <p class="fh-eyebrow-pill fh-eyebrow-pill--rounded" data-tone="orange" data-fh="EYE-2.1"><span class="fh-dot"></span>Rounded</p>
    <p class="fh-eyebrow-pill fh-eyebrow-pill--sharp fh-eyebrow-pill--etched" data-tone="rose" data-fh="EYE-2.2"><span class="fh-dot fh-dot--diamond"></span>Sharp</p>
    <p class="fh-eyebrow-pill fh-eyebrow-pill--oval fh-eyebrow-pill--etched" data-tone="fuchsia" data-fh="EYE-2.3"><span class="fh-dot fh-dot--live"></span>Oval</p>
    <p class="fh-eyebrow-pill fh-eyebrow-pill--tab fh-eyebrow-pill--etched" data-tone="sky" data-fh="EYE-2.4"><span class="fh-dot"></span>Tab</p></dd></div>
  <div><dt>Fills<code>--tone · --solid · --gradient · --glass · --ghost</code></dt><dd>
    <p class="fh-eyebrow-pill fh-eyebrow-pill--tone" data-tone="violet" data-fh="EYE-3.1"><span class="fh-dot fh-dot--live"></span>Tone tinted</p>
    <p class="fh-eyebrow-pill fh-eyebrow-pill--solid" data-tone="sky" data-fh="EYE-3.2"><span class="fh-dot fh-dot--blink"></span>Solid tone</p>
    <p class="fh-eyebrow-pill fh-eyebrow-pill--gradient" data-tone="fuchsia" data-fh="EYE-3.3"><span class="fh-dot fh-dot--live"></span>Gradient sweep</p>
    <p class="fh-eyebrow-pill fh-eyebrow-pill--glass" data-tone="teal" data-fh="EYE-3.4"><span class="fh-dot fh-dot--ring"></span>Glass</p>
    <p class="fh-eyebrow-pill fh-eyebrow-pill--ghost" data-tone="lime" data-fh="EYE-3.5"><span class="fh-dot fh-dot--live"></span>Ghost</p></dd></div>
  <div><dt>Edges<code>--bracket · --underline</code></dt><dd>
    <p class="fh-eyebrow-pill fh-eyebrow-pill--bracket" data-tone="amber" data-fh="EYE-4.1"><span class="fh-dot fh-dot--bar"></span>Bracketed</p>
    <p class="fh-eyebrow-pill fh-eyebrow-pill--underline" data-tone="orange" data-fh="EYE-4.2"><span class="fh-dot"></span>Underline</p></dd></div>
  <div><dt>Parts<code>__index · __seg · __count · --filled-end</code></dt><dd>
    <p class="fh-eyebrow-pill fh-eyebrow-pill--etched" data-tone="teal" data-fh="EYE-5.1"><span class="fh-eyebrow-pill__index">02</span>Indexed section</p>
    <p class="fh-eyebrow-pill" data-tone="orange" data-fh="EYE-5.2"><span class="fh-dot fh-dot--live"></span><span class="fh-eyebrow-pill__seg">Automation</span><span class="fh-eyebrow-pill__seg"><strong>4 services</strong></span></p>
    <p class="fh-eyebrow-pill fh-eyebrow-pill--rounded" data-tone="rose" data-fh="EYE-5.3"><span class="fh-dot fh-dot--live"></span>Open roles <span class="fh-eyebrow-pill__count">3</span></p>
    <p class="fh-eyebrow-pill fh-eyebrow-pill--filled-end" data-tone="orange" data-fh="EYE-5.4"><span class="fh-dot"></span><span class="fh-eyebrow-pill__seg">Automation</span><span class="fh-eyebrow-pill__seg"><strong>4 services</strong></span></p></dd></div>
  <div><dt>Sentences<code>--sentence · __action · .fh-kbd</code></dt><dd>
    <p class="fh-eyebrow-pill fh-eyebrow-pill--sentence" data-tone="live" data-fh="EYE-6.1"><span class="fh-dot fh-dot--live"></span><span>Now accepting proposals · <strong>Book a call</strong></span></p>
    <p class="fh-eyebrow-pill fh-eyebrow-pill--sentence" data-tone="sky" data-fh="EYE-6.2"><span class="fh-avatar fh-avatar--circle"><img src="img/avatars/reginald.webp" alt></span><span>Reginald is online</span><a class="fh-eyebrow-pill__action" href="#c-eyebrow">Talk</a></p>
    <p class="fh-eyebrow-pill fh-eyebrow-pill--etched fh-eyebrow-pill--sentence" data-tone="neutral" data-fh="EYE-6.3"><span>Search the docs</span><kbd class="fh-kbd">⌘K</kbd></p></dd></div>
  <div><dt>Sizes<code>--sm · --lg</code></dt><dd>
    <p class="fh-eyebrow-pill fh-eyebrow-pill--sm" data-tone="lime" data-fh="EYE-7.1"><span class="fh-dot"></span>Small</p>
    <p class="fh-eyebrow-pill fh-eyebrow-pill--lg fh-eyebrow-pill--etched" data-tone="accent" data-fh="EYE-7.2"><span class="fh-dot fh-dot--live"></span>Large</p></dd></div>
</dl>
```

### CHP · Chips

Chips filter or jump; the selected one fills with its tone. Icons replace the dot. Every variant takes the tone from `data-tone`. For the status of a record use `data-status` instead (merged, running, queued, failed, archived): the tone follows the value. Chip rules: a chip is for status, and sits only in the record header, a collapsed section's summary and once per row; counts are an `fh-badge`; inline status text is an `fh-status`.

```html
<dl class="fh-dl site-variants">
  <div><dt>Filter<code>.fh-chip · aria-current</code></dt><dd>
    <div class="fh-chips fh-chips--wrap" data-fh="CHP-1.1">
      <a class="fh-chip" data-tone="sky" href="#c-chips" aria-current="true">Agents</a>
      <a class="fh-chip" data-tone="teal" href="#c-chips">Data</a>
      <a class="fh-chip" data-tone="orange" href="#c-chips">Automation</a>
      <a class="fh-chip" data-tone="fuchsia" href="#c-chips">AI</a>
    </div></dd></div>
  <div><dt>Choice<code>.fh-chips--track · radio</code></dt><dd>
    <div class="fh-chips fh-chips--track" role="group" aria-label="Contact task" data-fh="CHP-1.2">
      <label class="fh-chip" data-tone="lime"><input type="radio" name="task" checked> Start a project</label>
      <label class="fh-chip" data-tone="sky"><input type="radio" name="task"> Book a call</label>
      <label class="fh-chip" data-tone="rose"><input type="radio" name="task"> Support</label>
    </div></dd></div>
  <div><dt>Fill<code>--solid · --tone · --plain</code></dt><dd>
    <div class="fh-chips fh-chips--wrap" data-fh="CHP-1.3">
      <span class="fh-chip fh-chip--solid" data-tone="sky"><i class="fh-icon fh-icon--bot" aria-hidden="true"></i>Solid tone</span>
      <span class="fh-chip fh-chip--tone" data-tone="orange"><i class="fh-icon fh-icon--workflow" aria-hidden="true"></i>Soft tone</span>
      <span class="fh-chip fh-chip--plain">Plain</span>
    </div></dd></div>
  <div><dt>Tabs<code>.fh-chip--underline</code></dt><dd>
    <div class="fh-chips fh-chips--wrap" data-fh="CHP-1.4">
      <a class="fh-chip fh-chip--underline" data-tone="lime" href="#c-chips" aria-current="true">Overview</a>
      <a class="fh-chip fh-chip--underline" data-tone="lime" href="#c-chips">Pricing</a>
      <a class="fh-chip fh-chip--underline" data-tone="lime" href="#c-chips">FAQ</a>
    </div></dd></div>
  <div><dt>Indexed<code>.fh-chip--indexed · __index</code></dt><dd>
    <div class="fh-chips fh-chips--wrap" data-fh="CHP-2.1">
      <span class="fh-chip fh-chip--indexed" data-tone="violet"><b class="fh-chip__index">01</b>Foundations</span>
      <span class="fh-chip fh-chip--indexed" data-tone="amber"><b class="fh-chip__index">03</b>Components</span>
      <span class="fh-chip fh-chip--indexed" data-tone="sky"><b class="fh-chip__index">04</b>Data</span>
    </div></dd></div>
  <div><dt>Counted<code>.fh-chips--indexed</code></dt><dd>
    <div class="fh-chips fh-chips--indexed fh-chips--wrap" aria-label="Open roles" data-fh="CHP-2.2">
      <a class="fh-chip fh-chip--tone" data-tone="fuchsia" href="#services">Design engineer</a>
      <a class="fh-chip fh-chip--tone" data-tone="sky" href="#services">AI agent builder</a>
      <a class="fh-chip fh-chip--tone" data-tone="orange" href="#services">Automation lead</a>
    </div></dd></div>
  <div><dt>Removable<code>.fh-chip__remove</code></dt><dd>
    <div class="fh-chips fh-chips--wrap" data-fh="CHP-2.3">
      <span class="fh-chip fh-chip--plain">Website <button class="fh-chip__remove" type="button" aria-label="Remove Website"></button></span>
      <span class="fh-chip fh-chip--plain">Email <button class="fh-chip__remove" type="button" aria-label="Remove Email"></button></span>
    </div></dd></div>
</dl>
```

### CHP-3 · Chip cards

Compact cards led by a tone block: categories, people, files.

```html
<dl class="fh-dl site-variants">
  <div><dt>Category<code>.fh-chip-card · __block</code></dt><dd>
    <a class="fh-chip-card" data-tone="teal" href="#c-chip-cards"><span class="fh-chip-card__block">DA</span><span class="fh-chip-card__text"><b>Data architecture</b><small>4 services</small></span></a></dd></div>
  <div><dt>Category, other tone<code>data-tone</code></dt><dd>
    <a class="fh-chip-card" data-tone="orange" href="#c-chip-cards"><span class="fh-chip-card__block">AU</span><span class="fh-chip-card__text"><b>Automation</b><small>6 services</small></span></a></dd></div>
  <div><dt>Person<code>__block img</code></dt><dd>
    <a class="fh-chip-card" data-tone="sky" href="#c-chip-cards"><span class="fh-chip-card__block"><img src="img/avatars/maya.webp" alt=""></span><span class="fh-chip-card__text"><b>Maya</b><small>Dental agent</small></span></a></dd></div>
  <div><dt>File<code>__text small</code></dt><dd>
    <a class="fh-chip-card" data-tone="rose" href="#c-chip-cards"><span class="fh-chip-card__block">PDF</span><span class="fh-chip-card__text"><b>Scope-of-work.pdf</b><small>212 KB · signed</small></span></a></dd></div>
</dl>
```

### LGS · Logo strip

Grayscale marks that come to full colour on hover. Add `fh-logos--marquee` for an endless scroll (duplicate the list once). Only show logos you have permission to use.

```html
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
<div class="fh-stack">
<fieldset class="fh-segmented fh-segmented--sm" data-fh="KVL-2.1">
  <legend class="fh-sr-only">Row spacing</legend>
  <label><input type="radio" name="kv-rows" value="sm" data-fh-rows-select> S</label>
  <label><input type="radio" name="kv-rows" value="md" data-fh-rows-select checked> M</label>
  <label><input type="radio" name="kv-rows" value="lg" data-fh-rows-select> L</label>
  <label><input type="radio" name="kv-rows" value="xl" data-fh-rows-select> XL</label>
</fieldset>
<dl class="fh-kv fh-kv--single" style="max-inline-size: 24rem" data-fh="KVL-1.1">
  <div><dt>County</dt><dd>Travis</dd></div>
  <div><dt>Parcel</dt><dd>0219-0402-11</dd></div>
  <div><dt>Year built</dt><dd>1987</dd></div>
  <div><dt>Lot</dt><dd>0.21 ac</dd></div>
</dl>
<dl class="fh-kv fh-kv--fields" data-fh="KVL-1.2">
  <div><dt><label for="kv-legal">Legal name</label></dt><dd><input class="fh-input" id="kv-legal" value="Acme Supply Co. LLC"></dd></div>
  <div><dt><label for="kv-dba">DBA</label></dt><dd><input class="fh-input" id="kv-dba" value="Acme"></dd></div>
  <div class="fh-kv__full"><dt><label for="kv-about">About</label></dt><dd><textarea class="fh-textarea" id="kv-about" rows="2">Tools and parts for small builders.</textarea></dd></div>
</dl>
<dl class="fh-kv" data-fh="KVL-1.3">
  <div><dt>Owner</dt><dd>Maple Row Holdings LLC</dd></div>
  <div><dt>Since</dt><dd>2016</dd></div>
  <div><dt>Mortgage</dt><dd>$212,400</dd></div>
  <div><dt>Liens</dt><dd>None found</dd></div>
  <div class="fh-kv__full"><dt>Legal description</dt><dd>Lot 4, Block B, Cedar Ridge Section 2, a subdivision in Travis County, Texas</dd></div>
</dl>
</div>
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

Numbered because order matters. Form steps with outline cubes live on Forms.

```html
<ol class="fh-steps" data-fh="STP-1.1">
  <li data-tone="sky"><span class="fh-steps__mark"></span><div><h3>Assess</h3><p>Understand the current state and its risks.</p></div></li>
  <li data-tone="teal"><span class="fh-steps__mark"></span><div><h3>Build</h3><p>Ship the foundation, then connect the systems.</p></div></li>
  <li data-tone="orange"><span class="fh-steps__mark"></span><div><h3>Operate</h3><p>Keep it healthy as you grow.</p></div></li>
</ol>
```

### CAR · Carousel

Multi-panel slider modelled on X media posts: swipe or scroll, panels snap, and the current dot stretches into a longer bubble. Native CSS dots in Chromium; the enhancer draws the same dots elsewhere.

```html
<section class="fh-carousel" aria-roledescription="carousel" aria-label="Firehorse in four panels" data-fh="CAR">
  <div class="fh-carousel__track" tabindex="0">
    <figure class="fh-carousel__slide site-slide site-slide--faces" aria-label="1 of 4">
      <img src="img/avatars/ava.webp" alt="Ava"><img src="img/avatars/cole.webp" alt="Cole"><img src="img/avatars/maya.webp" alt="Maya"><img src="img/avatars/mateo.webp" alt="Mateo"><img src="img/avatars/isla.webp" alt="Isla"><img src="img/avatars/ray.webp" alt="Ray">
      <figcaption>Ten agents, one system. Every portrait sits in the same plate.</figcaption>
    </figure>
    <figure class="fh-carousel__slide site-slide site-slide--poster" data-tone="accent" aria-label="2 of 4">
      <p class="fh-label">Firehorse · 01</p>
      <p class="site-slide__big">Ink, etch<br>&amp; ember.</p>
    </figure>
    <figure class="fh-carousel__slide site-slide site-slide--ui" data-tone="teal" aria-label="3 of 4">
      <dl class="fh-stats"><div><dt>Tokens</dt><dd>{{TOKENS}}</dd></div><div><dt>Layers</dt><dd>9</dd></div><div><dt>Breakpoints</dt><dd>0</dd></div></dl>
    </figure>
    <figure class="fh-carousel__slide site-slide site-slide--tones" aria-label="4 of 4">
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

### MEG · Mega panel

Equal category columns with dashed rules and a footer rail. Default sits flush under the header; `--headed` puts the category titles on one row above a full-bleed etched rule with scaffold ticks, and pairs with `fh-mega__link` for rich rows.

```html
<div class="fh-stack fh-stack--lg">
  <div class="fh-mega fh-frame" style="position: relative; inset: auto; display: block; opacity: 1; translate: none; max-block-size: none; box-shadow: none; border: var(--fh-border-thin) dashed var(--fh-color-etch); border-radius: var(--fh-radius-lg)" data-fh="MEG-1.1">
    <div class="fh-mega__grid">
      <section data-tone="sky"><h3>Agents</h3><ul><li><a href="#c-mega">Lead follow-up</a></li><li><a href="#c-mega">Inbox triage</a></li></ul></section>
      <section data-tone="teal"><h3>Data</h3><ul><li><a href="#c-mega">Warehouses</a></li><li><a href="#c-mega">Pipelines</a></li></ul></section>
      <section data-tone="orange"><h3>Automation</h3><ul><li><a href="#c-mega">Workflows</a></li><li><a href="#c-mega">Webhooks</a></li></ul></section>
    </div>
    <div class="fh-mega__rail"><a class="fh-action" href="#c-mega">All services</a></div>
  </div>
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
</div>
```

### DRW · Drawer

The mobile menu: a full-width popover under the header with grouped links. Open it from the hamburger below, or use the site header's drawer on a narrow viewport.

```html
<div class="fh-stack">
  <button class="fh-burger fh-burger--boxed fh-burger--label" type="button" popovertarget="demo-drawer" aria-label="Open demo drawer" style="--fh-burger-label: 'Menu'"><span></span></button>
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
<div class="fh-grid" data-cols="2" style="--fh-grid-min: 18rem; --fh-gap: var(--fh-space-6)">
  <div class="fh-stack">
    <div class="fh-alert" data-tone="sky" role="status"><p class="fh-alert__title">Your agent goes live Monday</p><p>We'll text you when Wes answers his first lead.</p></div>
    <div class="fh-alert" data-tone="live" role="status"><p class="fh-alert__title">Payment received</p><p>Invoice RC-0142 is paid in full.</p></div>
    <div class="fh-alert" data-tone="amber" role="status"><p class="fh-alert__title">Trial ends in 2 days</p><p>Add a card to keep Maya on shift.</p><div class="fh-alert__actions"><a class="fh-button fh-button--sm" href="#c-feedback">Add card</a></div></div>
    <div class="fh-alert" data-tone="danger" role="alert"><p class="fh-alert__title">Messenger disconnected</p><p>Reconnect your Facebook page to resume replies.</p><button class="fh-close" type="button" aria-label="Dismiss"></button></div>
  </div>
  <div class="fh-stack fh-stack--lg">
    <div class="fh-progress-field" data-tone="lime"><span>Scope complete</span><span class="fh-progress-field__value">64%</span><progress class="fh-progress" value="64" max="100">64%</progress></div>
    <div class="fh-progress-field" data-tone="sky"><span>Uploading</span><span class="fh-progress-field__value">…</span><progress class="fh-progress"></progress></div>
    <div class="fh-progress-field"><span>Message quota</span><span class="fh-progress-field__value">820 / 1,000</span><meter class="fh-meter" min="0" max="1000" low="700" high="900" optimum="200" value="820"></meter></div>
    <div class="fh-cluster" style="--fh-gap: var(--fh-space-5)">
      <div class="fh-ring" data-tone="teal" style="--fh-value: 72" role="img" aria-label="72 percent">72%</div>
      <div class="fh-ring" data-tone="fuchsia" style="--fh-value: 38; --fh-ring-size: 3.5rem" role="img" aria-label="38 percent">38</div>
      <span class="fh-spinner" aria-label="Loading" role="status"></span>
      <button class="fh-button fh-button--icon fh-button--secondary" type="button" aria-label="Copy" data-tooltip="Copy link">⧉</button>
    </div>
    <div class="fh-cluster" style="--fh-align: flex-start; --fh-gap: var(--fh-space-3)">
      <span class="fh-skeleton fh-skeleton--circle"></span>
      <div class="fh-skeleton" style="--fh-lines: 3; flex: 1"></div>
    </div>
    <span class="fh-skeleton fh-skeleton--block" style="block-size: 6rem; inline-size: 100%" aria-hidden="true" data-fh="FBK-1.1"></span>
  </div>
</div>
```

### EMP · Empty state & banner

```html
<div class="fh-stack fh-stack--lg">
  <div class="fh-banner" data-tone="accent" data-fh="EMP-1.1"><span>Themes now switch with one attribute.</span><a href="#top">Read the notes</a></div>
  <div class="fh-empty" data-tone="violet" data-fh="EMP-1.2">
    <span class="fh-empty__icon">∅</span>
    <h4>No leads yet</h4>
    <p>When your agent answers its first inquiry, it will show up here with the transcript and the next step.</p>
    <a class="fh-button fh-button--sm fh-button--secondary" href="#c-feedback">Send a test lead</a>
  </div>
</div>
```

### AVT-1 · Shapes

`--rounded (default) · --circle · --oval · --squircle · --square`

```html
<div class="site-avatar-row">
  <figure><span class="fh-avatar fh-avatar--2xl" data-face><img src="img/avatars/ava.webp" alt="Ava"></span><figcaption>Rounded rect</figcaption></figure>
  <figure><span class="fh-avatar fh-avatar--2xl fh-avatar--circle" data-face><img src="img/avatars/mateo.webp" alt="Mateo"></span><figcaption>Circle</figcaption></figure>
  <figure><span class="fh-avatar fh-avatar--2xl fh-avatar--oval" data-face><img src="img/avatars/eleanor.webp" alt="Eleanor"></span><figcaption>Oval</figcaption></figure>
  <figure><span class="fh-avatar fh-avatar--2xl fh-avatar--squircle" data-face><img src="img/avatars/ray.webp" alt="Ray"></span><figcaption>Squircle</figcaption></figure>
  <figure><span class="fh-avatar fh-avatar--2xl fh-avatar--square" data-face><img src="img/avatars/isla.webp" alt="Isla"></span><figcaption>Square</figcaption></figure>
</div>
```

### AVT-2 · Sizes & presence

`--xs → --2xl · data-status`

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

`--ring · --halo · data-tone`

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

### FLD · Fields

The "Required" chip comes from the input's own `required` attribute and settles to "Done" once the field is valid. Errors only show after the visitor has interacted, or at once with `aria-invalid="true"` (for errors the server sends back).

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

### FLD-4 · Password reveal

A show and hide toggle inside a password field. Put the input in an `fh-input-group` and add an `fh-input-reveal` button after it. `firehorse.js` switches the input between hidden and plain text, keeps `aria-pressed` and the label in step, and hides the value again when the form submits.

```html
<div class="fh-field">
  <label for="f-reveal">Password</label>
  <div class="fh-input-group">
    <input class="fh-input" id="f-reveal" name="password" type="password" autocomplete="off" value="correct horse battery">
    <button class="fh-input-reveal" type="button" aria-label="Show password" aria-pressed="false"></button>
  </div>
</div>
```

### FLD-5 · Money input

A currency prefix, or a select when several currencies are allowed, then a text input with `inputmode="decimal"` (never `type="number"`: no spinner). `money.js` groups digits as you type and keeps a hidden input in step that posts whole minor units, so 1,250.00 posts `125000`. Without the script the field posts what was typed. Add `data-allow-negative` to allow a minus sign.

```html
<div class="fh-stack">
  <div class="fh-field fh-money" data-fh-money data-currency="USD">
    <label for="f-money-one">Amount</label>
    <div class="fh-input-group">
      <span class="fh-money__currency">USD</span>
      <input class="fh-input" id="f-money-one" name="amount" inputmode="decimal" autocomplete="off" placeholder="0.00" value="1250">
      <input type="hidden" data-fh-money-value>
    </div>
    <p class="fh-field__hint">Posts whole cents.</p>
  </div>
  <div class="fh-field fh-money" data-fh-money>
    <label for="f-money-many">Price</label>
    <div class="fh-input-group">
      <select class="fh-money__select" name="price_currency" aria-label="Currency">
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="JPY">JPY</option>
      </select>
      <input class="fh-input" id="f-money-many" name="price" inputmode="decimal" autocomplete="off" placeholder="0.00">
      <input type="hidden" data-fh-money-value>
    </div>
    <p class="fh-field__hint">The currency sets the decimal places: JPY has none.</p>
  </div>
  <div class="fh-field fh-money" data-fh-money data-currency="USD">
    <label for="f-money-err">Deposit</label>
    <div class="fh-input-group">
      <span class="fh-money__currency">USD</span>
      <input class="fh-input" id="f-money-err" name="deposit" inputmode="decimal" autocomplete="off" value="75000" aria-invalid="true" aria-describedby="f-money-err-msg">
      <input type="hidden" data-fh-money-value>
    </div>
    <p class="fh-field__error" id="f-money-err-msg">The deposit is more than the limit of 50,000.00.</p>
  </div>
  <div class="fh-field fh-money" data-fh-money data-currency="USD" data-allow-negative>
    <label for="f-money-neg">Adjustment</label>
    <div class="fh-input-group">
      <span class="fh-money__currency">USD</span>
      <input class="fh-input" id="f-money-neg" name="adjustment" inputmode="decimal" autocomplete="off" value="-42.5">
      <input type="hidden" data-fh-money-value>
    </div>
    <p class="fh-field__hint">A credit or a charge. Type a minus sign first.</p>
  </div>
</div>
```

### STP-2 · Form steps

Numbered form sections with outline-cube heads (CUB-1.4). Wide slots put the head sticky beside the fields.

```html
<div class="fh-form-steps">
  <section class="fh-form-step">
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
  <section class="fh-form-step">
    <header class="fh-form-step__head">
      <div class="fh-form-step__text">
        <ul class="fh-cubes fh-form-step__cube" data-tone="teal"><li><b class="fh-cube fh-cube--outline">02</b></li></ul>
        <h3 class="fh-form-step__title">The job <i class="fh-icon fh-icon--check fh-form-step__done" aria-label="complete"></i></h3>
        <p class="fh-muted" style="margin:0">What you need done.</p>
      </div>
    </header>
    <div class="fh-form-step__body fh-form">
      <div class="fh-field"><label for="fs-job">Brief</label><textarea class="fh-textarea" id="fs-job" rows="3">Connect the warehouse to the agent inbox.</textarea></div>
    </div>
  </section>
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
<div class="fh-stack fh-stack--lg">
  <div class="fh-field fh-field--optional" data-fh="TAG-1.1"><label for="tg-channels">Channels</label>
    <div class="fh-tags">
      <span class="fh-chip" data-tone="sky">Messenger <button class="fh-chip__remove" type="button" aria-label="Remove Messenger"></button></span>
      <span class="fh-chip" data-tone="lime">WhatsApp <button class="fh-chip__remove" type="button" aria-label="Remove WhatsApp"></button></span>
      <input id="tg-channels" placeholder="Add a channel">
    </div>
  </div>
  <div class="fh-cluster">
    <button type="button" class="fh-button fh-button--sm fh-button--ghost" data-fh="TAG-2.1"><i class="fh-icon fh-icon--hash" aria-hidden="true"></i>Tag</button>
  </div>
  <div class="fh-tags fh-tags--inline" data-fh="TAG-2.2">
    <input aria-label="Add a tag" placeholder="Add a tag">
  </div>
  <div class="fh-tags fh-tags--inline" data-fh="TAG-2.3">
    <span class="fh-chip" data-tone="orange">applications <button class="fh-chip__remove" type="button" aria-label="Remove applications"></button></span>
    <span class="fh-chip" data-tone="lime">health <button class="fh-chip__remove" type="button" aria-label="Remove health"></button></span>
    <button class="fh-tags__add" type="button" aria-label="Add a tag"></button>
  </div>
  <div class="fh-tags fh-tags--inline" data-fh="TAG-2.4">
    <span class="fh-chip" data-tone="sky">utbms.com <button class="fh-chip__remove" type="button" aria-label="Remove utbms.com"></button></span>
    <span class="fh-tags__entry"><button class="fh-tags__prefix" type="button" aria-label="Protocol: https, click for http">https://</button><input aria-label="Link" placeholder="example.com/page"></span>
  </div>
</div>
```

### TBL · Table

With `fh-table--reflow`, rows turn into labelled cards when the slot is under 36rem. `fh-table__head` in the caption is a title with a count chip.

```html
<div class="fh-stack fh-stack--lg">
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
</div>
```

### Harmony & overlays

One root colour in, a balanced family out. Set `--fh-root` on any element and Firehorse derives tints, shades and harmonies in OKLCH, so the steps look even on every hue. Overlays paint a layer built from the same family. Pick a root:

```html
          <div class="fh-stack fh-stack--lg">
            <label class="fh-field site-harmony__pick"><span>Root colour</span><input type="color" value="#e8590c" data-harmony-root aria-label="Root colour"></label>
            <p class="fh-label">Tints and shades</p>
            <div class="site-harmony__row"><div class="site-harmony__sw"><span style="background:var(--fh-root-shade-3)"></span><code>--fh-root-shade-3</code><small>Shade 3</small></div><div class="site-harmony__sw"><span style="background:var(--fh-root-shade-2)"></span><code>--fh-root-shade-2</code><small>Shade 2</small></div><div class="site-harmony__sw"><span style="background:var(--fh-root-shade-1)"></span><code>--fh-root-shade-1</code><small>Shade 1</small></div><div class="site-harmony__sw"><span style="background:var(--fh-root)"></span><code>--fh-root</code><small>Root</small></div><div class="site-harmony__sw"><span style="background:var(--fh-root-tint-1)"></span><code>--fh-root-tint-1</code><small>Tint 1</small></div><div class="site-harmony__sw"><span style="background:var(--fh-root-tint-2)"></span><code>--fh-root-tint-2</code><small>Tint 2</small></div><div class="site-harmony__sw"><span style="background:var(--fh-root-tint-3)"></span><code>--fh-root-tint-3</code><small>Tint 3</small></div></div>
            <p class="fh-label">Harmony</p>
            <div class="site-harmony__row"><div class="site-harmony__sw"><span style="background:var(--fh-root-analog-1)"></span><code>--fh-root-analog-1</code><small>Analogous −30°</small></div><div class="site-harmony__sw"><span style="background:var(--fh-root-analog-2)"></span><code>--fh-root-analog-2</code><small>Analogous +30°</small></div><div class="site-harmony__sw"><span style="background:var(--fh-root-complement)"></span><code>--fh-root-complement</code><small>Complement</small></div><div class="site-harmony__sw"><span style="background:var(--fh-root-split-1)"></span><code>--fh-root-split-1</code><small>Split 150°</small></div><div class="site-harmony__sw"><span style="background:var(--fh-root-split-2)"></span><code>--fh-root-split-2</code><small>Split 210°</small></div><div class="site-harmony__sw"><span style="background:var(--fh-root-triad-1)"></span><code>--fh-root-triad-1</code><small>Triad 120°</small></div><div class="site-harmony__sw"><span style="background:var(--fh-root-triad-2)"></span><code>--fh-root-triad-2</code><small>Triad 240°</small></div><div class="site-harmony__sw"><span style="background:var(--fh-root-muted)"></span><code>--fh-root-muted</code><small>Muted</small></div></div>
            <p class="fh-label">Overlays · <code>data-fh-overlay</code></p>
            <div class="fh-grid" style="--fh-grid-min: 12rem; --fh-grid-max-cols: 4">
              <article class="fh-card site-harmony__card" data-fh-overlay="wash"><p class="fh-card__meta">wash</p><h4 class="fh-card__title">Flat and quiet</h4></article>
              <article class="fh-card site-harmony__card" data-fh-overlay="glow"><p class="fh-card__meta">glow</p><h4 class="fh-card__title">Radial bloom</h4></article>
              <article class="fh-card site-harmony__card" data-fh-overlay="aurora"><p class="fh-card__meta">aurora</p><h4 class="fh-card__title">Conic sweep</h4></article>
              <figure class="fh-card site-harmony__card site-harmony__photo" data-fh-overlay="duotone"><img src="/img/backdrop/firehorse-horse.webp" alt="" loading="lazy"><figcaption class="fh-card__meta">duotone</figcaption></figure>
```

### THS · Theme select

A native select. firehorse.js sets data-fh-theme on <html> and remembers it.

```html
<div class="fh-field"><label for="theme-select-demo">Theme</label><select class="fh-select" id="theme-select-demo" data-fh-theme-select data-fh="THS"><option value>Firehorse</option><option value="mustang">Mustang</option><option value="friesian">Friesian</option><option value="akhal-teke">Akhal-Teke</option></select></div>
```

### MCP server

Phase 1 free guide tools over stdio: list and search the Index, fetch markup and tokens, read the agent rules, compose a page. No network. Install the package, then point Claude Code, Claude Desktop or Cursor at `npx firehorse-mcp`.

```html
<figure class="fh-window site-terminal">
  <div class="fh-window__bar"><span>mcp.json</span><button class="fh-button fh-button--sm fh-button--ghost" type="button" data-copy="#mcp-config">Copy</button></div>
  <div class="fh-window__body"><pre class="site-pre" id="mcp-config"><code>{
  "mcpServers": {
    "firehorse": {
      "command": "npx",
      "args": ["-y", "firehorse-mcp"]
    }
  }
}</code></pre></div>
</figure>
```

