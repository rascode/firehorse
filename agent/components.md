# Firehorse — component markup

> Canonical markup for every Firehorse component, v1.1.1. Generated from the
> live demos on https://firehorse.rascode.dev — copy these exactly, then change
> the copy. Rules live in [system.md](system.md).

## Class index

| Group | Classes |
|---|---|
| Frame | `fh-page` `fh-frame` `fh-section` (`--ruled` `--hero` `--flush` `--tight` `--narrow`) `fh-main` `fh-bleed` `fh-container` `fh-rule` `fh-cq` |
| Layout | `fh-stack` (`--2xs`…`--2xl`) `fh-cluster` (`--between` `--end`) `fh-grid` (`[data-cols]` `--ruled` `--etched` `--rounded`) `fh-split` (`--wide-start` `--wide-end` `--sidebar`) `fh-center` `fh-ratio` `fh-reel` |
| Masthead | `fh-masthead` (`__mark` `__caption` `__index` `__title` `__foot` `__meta` `__tools` `--bar` `--split` `--lockup` `__above` `__wordmark` `__bar` `__etch` `__headline` `__top` `__turn` `__below`) |
| Backdrop | `fh-backdrop` (`--frost`) `fh-frost` `[data-fh-frost-select]` |
| Type | `fh-display` `fh-title` `fh-heading` `fh-subheading` `fh-lede` `fh-body` `fh-small` `fh-label` `fh-eyebrow` `fh-mono` `fh-index` `fh-price` `fh-signature` `fh-prose` `fh-muted` `fh-subtle` `fh-rotator` (`--walk`) |
| Actions | `fh-button` (`--secondary` `--outline` `--ghost` `--accent` `--plain` `--sm` `--lg` `--block` `--icon`) `fh-action` (`--lg` `--cue` `__phrase`) `fh-link` (`--quiet`) `fh-roll` `fh-close` |
| Markers | `fh-dot` (`--live`) `fh-eyebrow-pill` (`--sentence`) `fh-breadcrumb` `fh-badge` (`--solid`) |
| Content | `fh-card` (`__meta` `__title` `__body` `__footer` `__price` `--solid`) `fh-stats` `fh-kv` (`__full` `--fields` `--single`) `[data-fh-rows]` `[data-fh-rows-select]` `fh-checklist` `fh-steps` (`--grid`) `fh-quote` `fh-crosses` `fh-table-wrap` `fh-table` (`--reflow`) `fh-matrix` `fh-deck` (`__card` `__card--split` `__media` `__body` `__caption` `__caption--top` `__index` `__title` `__meta` `--hero` `--fade` `--blur` `--lift` `--fan` `--count` `--x` `--reverse` `--flush` `--plain`) `fh-member` (`__art` `__glyphs` `__body` `__name` `__id` `__facts` `__role` `__stamp` `__tagline` `__meta` `__badge` `--glow` `--square` `--plates` `--smear`) `fh-story` (`__head` `__logo` `__tag` `__field` `__field--lines` `__mark` `__figure` `__figure-label` `__ring` `__chart` `__foot` `__quote` `__link` `__media` `--deep` `--ink` `--paper` `--duotone` `--glare`) `fh-speed` (`__smear` `__img` `--orbit` `--still`) `fh-dither` (`__plate` `--paper` `--lines` `--fine` `--coarse`) `fh-glass` (`--dark` `--clear` `--pill` `--prism`) |
| Metrics | `fh-metrics` `fh-metric` (`__label` `__value` `__sub` `__source` `__row` `__more` `__delta` `__figure` `--needed` `--spread` `--tinted` `--wide` `--full`) |
| Admin (admin.css) | `fh-app` `fh-record` (`--cover` `__cover`) `fh-section-card` (`__head` `__title` `__tools` `__lede` `__subhead` `__note` `__foot` `--inset` `--aside`) `fh-gauge` `fh-tracker` (`__head` `__meter` `__done` `__body` `__log`) `fh-quick` (`__label` `__action`) `fh-check-cards` `fh-check-card` (`__check` `__area` `__icon` `__title` `__meter` `__above` `__below`) |
| Commerce | `fh-invoice` (`__cover` `__head` `__logo` `__number` `__title` `__parties` `__label` `__dates` `__items` `__totals` `__total` `__sign` `__foot` `--classic`) `fh-pay` (`--float` `__mark` `__doc` `__amount` `__icon` `__panel` `__head` `__route` `__party` `__sum` `__total` `__details` `__actions`) |
| Forms | `fh-form` (`__row` `__actions`) `fh-field` (`--optional` `__hint` `__error`) `fh-input` `fh-textarea` `fh-select` `fh-select-wrap` `fh-input-group` `fh-check` `fh-switch` `fh-segmented` `fh-segment` (`--entities` `--roll` `__roll` `--mode`) |
| Disclosure | `fh-accordion` `fh-tabs` (`--mono`) `fh-dialog` (`__header` `__body` `__footer`) `fh-menu` `fh-toaster` `fh-toast` (`__body` `__description` `__action`) |
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
<div class="fh-swatches-ramp" data-fh="NEU">
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
</div>
```

### TON · Tones

Category color. Set data-tone once; dots, marks, meta and links inside follow. Ratios are against the current canvas.

```html
<div class="fh-tone-swatches" data-fh="TON">
  <div data-tone="sky"><span></span><p>sky <span data-contrast></span></p></div>
  <div data-tone="teal"><span></span><p>teal <span data-contrast></span></p></div>
  <div data-tone="lime"><span></span><p>lime <span data-contrast></span></p></div>
  <div data-tone="amber"><span></span><p>amber <span data-contrast></span></p></div>
  <div data-tone="orange"><span></span><p>orange <span data-contrast></span></p></div>
  <div data-tone="rose"><span></span><p>rose <span data-contrast></span></p></div>
  <div data-tone="fuchsia"><span></span><p>fuchsia <span data-contrast></span></p></div>
  <div data-tone="violet"><span></span><p>violet <span data-contrast></span></p></div>
  <div data-tone="accent"><span></span><p>ember <span data-contrast></span></p></div>
</div>
```

### TYP · Type

Inter, Geist Mono and Caveat in the Rascode theme; system stacks in core. Fluid roles scale with their container.

```html
<!-- TYP-1.1 · Type presets › Geist -->
<div class="fh-type-scale" data-fh-type="geist" data-fh="TYP-1.1"><p class="fh-title">Ink, etch and ember.</p><p class="fh-body" style="margin: 0">The quick brown fox jumps over the lazy dog, 0123456789.</p></div>

<!-- TYP-1.2 · Type presets › Inter -->
<div class="fh-type-scale" data-fh-type="inter" data-fh="TYP-1.2"><p class="fh-title">Built for every screen.</p><p class="fh-body" style="margin: 0">The quick brown fox jumps over the lazy dog, 0123456789.</p></div>

<!-- TYP-1.3 · Type presets › Hanken Grotesk -->
<div class="fh-type-scale" data-fh-type="hanken" data-fh="TYP-1.3"><p class="fh-title">Beyond the ordinary.</p><p class="fh-body" style="margin: 0">The quick brown fox jumps over the lazy dog, 0123456789.</p></div>

<!-- TYP-1.4 · Type presets › Archivo -->
<div class="fh-type-scale" data-fh-type="archivo" data-fh="TYP-1.4"><p class="fh-title">Create something different.</p><p class="fh-body" style="margin: 0">The quick brown fox jumps over the lazy dog, 0123456789.</p></div>
```

### SPC · Space

--fh-space-*

```html
<div class="fh-space-scale" data-tone="lime" data-fh="SPC">
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
</div>
```

### RAD · Radius

--fh-radius-*

```html
<div class="fh-radius-scale" data-fh="RAD">
  <div style="--r: var(--fh-radius-sm)">sm · 3px<br>CTA</div>
  <div style="--r: var(--fh-radius-md)">md · 7px<br>groups</div>
  <div style="--r: var(--fh-radius-lg)">lg · .85rem<br>shells</div>
  <div style="--r: var(--fh-radius-pill)">pill<br>markers</div>
</div>
```

### ELV · Elevation

Drop shadows are a theme setting, data-fh-shadow (or "shadow" in a theme's config): none, hint (the default: no shadow on panels, bars, cards and rows, a barely visible one under menus and overlays), soft or full. A style that asks for a shadow keeps it, like the convex button (data-fh-button="convex"): bends out at rest, the shadow inverts on hover, it sinks on press.

```html
<div class="fh-cluster" style="--fh-gap: var(--fh-space-6)">
  <a class="fh-button" href="#foundations" data-fh="BTN">Rest</a>
  <span class="fh-button" style="box-shadow: var(--fh-shadow-convex-hover)" data-fh="BTN">Hover</span>
  <span class="fh-button" style="translate: 0 2px; box-shadow: var(--fh-shadow-convex-active)" data-fh="BTN">Press</span>
</div>
```

### TGT · Target floor

The smallest hit area on a fine pointer is --fh-target-floor (1rem), in both directions. A control drawn smaller keeps its size and grows the hit area around it. Coarse pointers keep --fh-tap-target. Each family is at its smallest size.

```html
<div class="fh-target-floor" data-fh="TGT">
  
  
    <div class="fh-stack fh-stack--lg">
      <label class="fh-check" data-fh="CHO"><input type="checkbox" data-fh-hit-toggle> Outline hit areas</label>
      <div class="fh-cluster">
        <div class="fh-stack fh-stack--2xs">
          <span class="fh-label">Button</span>
          <button class="fh-button fh-button--sm" type="button" data-fh-hit data-fh="BTN">Go</button>
        </div>
        <div class="fh-stack fh-stack--2xs">
          <span class="fh-label">Icon</span>
          <button class="fh-button fh-button--icon fh-button--sm" type="button" aria-label="Add" data-fh-hit data-fh="BTN"><i class="fh-icon fh-icon--plus" aria-hidden="true"></i></button>
        </div>
        <div class="fh-stack fh-stack--2xs">
          <span class="fh-label">Disc</span>
          <button class="fh-button fh-button--disc" type="button" aria-label="Typeface" data-fh-hit data-fh="BTN-4">T</button>
        </div>
        <div class="fh-stack fh-stack--2xs">
          <span class="fh-label">Link</span>
          <a class="fh-button fh-button--sm" href="#foundations" data-fh-hit data-fh="BTN">Link</a>
        </div>
        <div class="fh-stack fh-stack--2xs">
          <span class="fh-label">Chip</span>
          <span class="fh-chip fh-chip--sm" data-tone="teal" data-fh="CHP">Tag <button class="fh-chip__remove" type="button" aria-label="Remove tag" data-fh-hit></button></span>
        </div>
        <div class="fh-stack fh-stack--2xs">
          <span class="fh-label">Checkbox</span>
          <label class="fh-check" data-fh="CHO"><input type="checkbox" data-fh-hit> On</label>
        </div>
        <div class="fh-stack fh-stack--2xs">
          <span class="fh-label">Radio</span>
          <label class="fh-check" data-fh="CHO"><input type="radio" name="tgt-radio" data-fh-hit> One</label>
        </div>
        <div class="fh-stack fh-stack--2xs">
          <span class="fh-label">Switch</span>
          <input class="fh-switch" type="checkbox" role="switch" aria-label="Switch" data-fh-hit data-fh="SEG">
        </div>
        <div class="fh-stack fh-stack--2xs">
          <span class="fh-label">Segmented</span>
          <fieldset class="fh-segmented fh-segmented--sm" data-fh="SEG">
            <legend class="fh-sr-only">Segment</legend>
            <label data-fh-hit><input type="radio" name="tgt-seg" checked> A</label>
            <label data-fh-hit><input type="radio" name="tgt-seg"> B</label>
          </fieldset>
        </div>
        <div class="fh-stack fh-stack--2xs">
          <span class="fh-label">Segment</span>
          <nav class="fh-segment" aria-label="Segment" data-fh="SEG-1.1">
            <a href="#foundations" aria-current="true" data-fh-hit>All</a>
          </nav>
        </div>
      </div>
      <div class="fh-stack fh-stack--sm">
        <div class="fh-stack fh-stack--2xs">
          <span class="fh-label">Tabs</span>
          <div class="fh-tabs fh-tabs--sub" role="tablist" aria-label="Sections" data-fh="TAB">
            <button type="button" role="tab" aria-selected="true" data-fh-hit>One</button>
            <button type="button" role="tab" data-fh-hit>Two</button>
          </div>
        </div>
        <div class="fh-stack fh-stack--2xs">
          <span class="fh-label">Menu</span>
          <div class="fh-menu" role="menu" aria-label="Sample" data-fh="DRP-1.1">
            <button type="button" role="menuitem" data-fh-hit>Item</button>
          </div>
        </div>
        <div class="fh-stack fh-stack--2xs">
          <span class="fh-label">Picker</span>
          <button class="fh-entity" type="button" data-fh-hit data-fh="ENT">Rascode</button>
        </div>
        <div class="fh-stack fh-stack--2xs">
          <span class="fh-label">Sidenav</span>
          <nav class="fh-sidenav" aria-label="Sample" data-fh="SEG">
            <section><a href="#foundations" data-fh-hit>Overview</a></section>
          </nav>
        </div>
        <div class="fh-stack fh-stack--2xs">
          <span class="fh-label">Sidebar</span>
          <button class="fh-sidebar__item" type="button" data-fh-hit>Overview</button>
        </div>
        <div class="fh-stack fh-stack--2xs">
          <span class="fh-label">Crumb</span>
          <header class="fh-masthead" data-fh="MST-1.2">
            <nav class="fh-crumbs" aria-label="Breadcrumb" data-fh-slot="body">
              <ol class="fh-crumbs__list">
                <li class="fh-crumb fh-crumb--area" data-fh-slot="body">
                  <button class="fh-crumb__button" type="button" data-fh-hit><span class="fh-crumb__name" data-fh-slot="name">Area</span></button>
                </li>
              </ol>
            </nav>
          </header>
        </div>
        <div class="fh-stack fh-stack--2xs">
          <span class="fh-label">Account</span>
          <div class="fh-account-menu fh-account-menu--static" role="menu" aria-label="Account sample" data-fh="PRF-2.5">
            <div class="fh-account-menu__stage">
              <div class="fh-account-menu__panel" data-fh-panel="main" data-state="active">
                <button class="fh-account-row" type="button" role="menuitem" data-tone="amber" data-fh-hit data-fh-slot="stage">
                  <span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--calendar" aria-hidden="true"></i></span>
                  <span class="fh-account-row__label" data-fh-slot="label">Now</span>
                  <span class="fh-account-row__value" data-fh-slot="value">Tue 17 Nov</span>
                  <i class="fh-icon fh-icon--chevron-right fh-account-row__go" aria-hidden="true" data-fh-slot="link"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
</div>
```

### WRT · Word rotator

The rolling word, without the usual wiring: no library, no word array in a script, no timers. Write the words in the markup and they take turns; change them by editing the HTML. `--walk` gives each word a step of the root colour's own family, held to a lightness that reads on each scheme. In a headline, or inside a paragraph.

```html
<!-- WRT-1.1 · Word rotator › Headline -->
<p class="fh-display">The design system that <span class="fh-rotator fh-rotator--walk" data-fh="WRT-1.1"><span>scales</span><span aria-hidden="true">adapts</span><span aria-hidden="true">fits</span><span aria-hidden="true">flexes</span><span aria-hidden="true">grows</span><span aria-hidden="true">adjusts</span><span aria-hidden="true">bends</span><span aria-hidden="true">shifts</span><span aria-hidden="true">responds</span></span>.</p>

<!-- WRT-1.2 · Word rotator › In a paragraph -->
<p class="fh-lede">Firehorse is the design system that <span class="fh-rotator fh-rotator--walk" data-fh="WRT-1.2"><span>scales</span><span aria-hidden="true">adapts</span><span aria-hidden="true">fits</span><span aria-hidden="true">grows</span><span aria-hidden="true">responds</span></span> with your product: every component reads the box it sits in, so nothing needs a breakpoint.</p>
```

### MOT · Motion

```html
<!-- MOT-1.1 · Entrances › Rise -->
<div class="fh-motion-tile" data-fh-enter="rise" data-fh-step="1" data-fh="MOT-1.1">rise</div>

<!-- MOT-1.2 · Entrances › Drop -->
<div class="fh-motion-tile" data-fh-enter="drop" data-fh-step="2" data-fh="MOT-1.2">drop</div>

<!-- MOT-1.3 · Entrances › Fade -->
<div class="fh-motion-tile" data-fh-enter="fade" data-fh-step="3" data-fh="MOT-1.3">fade</div>

<!-- MOT-1.4 · Entrances › Scale -->
<div class="fh-motion-tile" data-fh-enter="scale" data-fh-step="4" data-fh="MOT-1.4">scale</div>

<!-- MOT-1.5 · Entrances › Blur -->
<div class="fh-motion-tile" data-fh-enter="blur" data-fh-step="5" data-fh="MOT-1.5">blur</div>

<!-- MOT-1.6 · Entrances › Fold -->
<div class="fh-motion-tile" data-fh-enter="fold" data-fh-step="6" data-fh="MOT-1.6">fold</div>

<!-- MOT-1.7 · Entrances › Draw -->
<div class="fh-motion-tile fh-motion-tile--line" data-fh="MOT-1.7">draw<span data-fh-enter="draw" data-fh-step="7"></span></div>

<!-- MOT-1.8 · Entrances › Wipe -->
<div class="fh-motion-tile" data-fh-enter="wipe" data-fh-step="8" data-fh="MOT-1.8">wipe</div>

<!-- MOT-1.9 · Entrances › Unveil -->
<div class="fh-motion-tile fh-motion-tile--art" data-fh-enter="unveil" data-fh-step="9" data-fh="MOT-1.9">unveil</div>

<!-- MOT-1.10 · Entrances › Lift -->
<div class="fh-motion-tile fh-motion-tile--clip" data-fh="MOT-1.10"><span data-fh-enter="lift" data-fh-step="10">lift</span></div>

<!-- MOT-2.1 · Sequences › Intro -->
<div class="fh-motion-hero" data-fh-intro data-fh="MOT-2.1">
  <p class="fh-motion-hero__mark" data-fh-enter="fold" data-fh-step="2"><span>_</span>firehorse</p>
  <span class="fh-motion-hero__line" data-fh-enter="draw" data-fh-step="4"></span>
  <p class="fh-motion-hero__top" data-fh-enter="blur" data-fh-step="6">The design system</p>
  <p class="fh-motion-hero__turn" data-fh-enter="drop" data-fh-step="7">that moves the same everywhere.</p>
  <ul class="fh-motion-hero__chips" data-fh-enter-children data-fh-step="9">
    <li>Tokens</li><li>Entrances</li><li>Sequences</li><li>Scroll</li><li>Choreography</li><li>Drift</li>
  </ul>
</div>

<!-- MOT-2.2 · Sequences › Staggered list -->
<ul class="fh-motion-hero__chips" data-fh-enter-children data-fh-step="9">
  <li>Tokens</li><li>Entrances</li><li>Sequences</li><li>Scroll</li><li>Choreography</li><li>Drift</li>
</ul>

<!-- MOT-3.1 · Scroll-linked › Recede -->
<div class="fh-motion-art fh-recede" style="--fh-recede-range: 60vh" data-fh="MOT-3.1"></div>

<!-- MOT-3.2 · Scroll-linked › Scroll fade -->
<div class="fh-motion-art fh-motion-art--b fh-scroll-fade" style="--fh-recede-range: 60vh" data-fh="MOT-3.2"></div>

<!-- MOT-3.3 · Scroll-linked › Reveal -->
<div class="fh-motion-art fh-motion-art--c fh-reveal" data-fh="MOT-3.3"></div>

<!-- MOT-3.4 · Scroll-linked › Parallax -->
<div class="fh-motion-art fh-motion-art--d fh-parallax" style="--fh-depth: 0.3" data-fh="MOT-3.4"></div>

<!-- MOT-3.5 · Scroll-linked › Progress -->
<p class="fh-motion-note" data-fh="MOT-3.5">Page progress: <code>&lt;div class="fh-scroll-progress"&gt;&lt;/div&gt;</code> draws the line at the top of this page.</p>

<!-- MOT-4.1 · Choreography › Circle reveal -->
<div class="fh-motion-card" data-fh="MOT-4.1">
  <b>Circle reveal</b><small>Free · <code>Firehorse.reveal(change, from)</code></small>
  <button type="button" class="fh-button fh-button--sm" data-motion-reveal data-fh="BTN">Change the tone</button>
</div>

<!-- MOT-4.2 · Choreography › Glide -->
<div class="fh-motion-card" data-fh="MOT-4.2">
  <b>Glide</b><small>Free · <code>data-fh-glide="center"</code></small>
  <code class="fh-motion-code" data-fh="MOT">&lt;nav&gt;&lt;div data-fh-glide="center"&gt;…links…&lt;/div&gt;&lt;/nav&gt;</code>
</div>

<!-- MOT-4.3 · Choreography › Lock -->
<div class="fh-motion-card" data-fh="MOT-4.3">
  <b>Lock</b><small>Free · <code>data-fh-lock</code></small>
  <code class="fh-motion-code" data-fh="MOT">&lt;h1 data-fh-lock="clone" data-fh-lock-to=".nav a" data-fh-lock-scale="0.78" data-fh-lock-href="#top"&gt;</code>
</div>

<!-- MOT-4.4 · Choreography › Dock beside -->
<div class="fh-motion-card" data-fh="MOT-4.4">
  <b>Dock beside <span class="fh-motion-pro" data-fh="MOT-5">Pro</span></b><small><code>data-fh-dock-beside="#cta"</code></small>
  <code class="fh-motion-code" data-fh="MOT">&lt;div class="tools" data-fh-dock-beside=".cta"&gt;</code>
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
<button type="button" data-drift="dapple" aria-pressed="false">Dapple <span class="fh-motion-pro" data-fh="MOT-5.6">Pro</span></button>

<!-- MOT-5.7 · Drift › Tide lines · Pro -->
<button type="button" data-drift="tides" aria-pressed="false">Tide lines <span class="fh-motion-pro" data-fh="MOT-5.7">Pro</span></button>

<!-- MOT-5.8 · Drift › Shutters · Pro -->
<button type="button" data-drift="shutters" aria-pressed="false">Shutters <span class="fh-motion-pro" data-fh="MOT-5.8">Pro</span></button>
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
  <div class="fh-card fh-card--solid" data-fh="CRD">1</div>
  <div class="fh-card fh-card--solid" data-fh="CRD">2</div>
  <div class="fh-card fh-card--solid" data-fh="CRD">3</div>
</div>
```

### COL · Columns

The grid itself. `data-cols="16"` for the finer one; a child `.fh-cols[data-subgrid]` keeps nested content on the parent's lines.

```html
<!-- COL-1.1 · Columns › 12 columns -->
<div class="fh-cols" data-fh="COL-1.1">
  <div class="fh-card fh-card--solid" data-span="12" data-fh="CRD">12</div>
  <div class="fh-card fh-card--solid" data-span="8" data-fh="CRD">8</div>
  <div class="fh-card fh-card--solid" data-span="4" data-fh="CRD">4</div>
  <div class="fh-card fh-card--solid" data-span="3" data-fh="CRD">3</div>
  <div class="fh-card fh-card--solid" data-span="6" data-fh="CRD">6</div>
  <div class="fh-card fh-card--solid" data-span="3" data-fh="CRD">3</div>
</div>

<!-- COL-1.2 · Columns › 16 columns -->
<div class="fh-cols" data-cols="16" data-fh="COL-1.2">
  <div class="fh-card fh-card--solid" data-span="10" data-fh="CRD">10 of 16</div>
  <div class="fh-card fh-card--solid" data-span="6" data-fh="CRD">6</div>
  <div class="fh-card fh-card--solid" data-span="5" data-start="3" data-fh="CRD">5, from 3</div>
  <div class="fh-card fh-card--solid" data-span="7" data-start="10" data-fh="CRD">7, from 10</div>
</div>

<!-- COL-1.3 · Columns › Subgrid -->
<div class="fh-cols" data-fh="COL-1.3">
  <div class="fh-cols" data-subgrid data-span="8" data-start="3" data-fh="COL">
    <div class="fh-card fh-card--solid" data-span="5" data-fh="CRD">Nested 5</div>
    <div class="fh-card fh-card--solid" data-span="3" data-fh="CRD">Nested 3</div>
  </div>
</div>

<!-- COL-2.1 · Compositions › Offset -->
<div class="fh-cols" data-fh="COL-2.1">
  <div class="fh-stack" data-span="5" data-start="2" data-span-md="8">
    <p class="fh-eyebrow-pill" data-tone="violet" data-fh="EYE-1.1"><span class="fh-dot"></span>Offset</p>
    <h3 class="fh-heading">Copy from column 2</h3>
    <p class="fh-body">The text starts one column in; the picture takes the right half and runs to the edge of the grid.</p>
  </div>
  <div class="fh-card fh-card--solid" data-span="6" data-start="7" data-row="1" style="min-block-size: 12rem" data-fh="CRD">Image · 7–12</div>
</div>

<!-- COL-2.2 · Compositions › Asymmetric -->
<div class="fh-cols" data-fh="COL-2.2">
  <div class="fh-card fh-card--solid" data-span="5" style="min-block-size: 10rem" data-fh="CRD">5</div>
  <div class="fh-card fh-card--solid" data-span="7" data-align="end" style="min-block-size: 16rem" data-fh="CRD">7 · dropped to the bottom</div>
</div>

<!-- COL-2.3 · Compositions › Broken -->
<div class="fh-cols" data-fh="COL-2.3">
  <div class="fh-card fh-card--solid" data-span="7" data-start="1" data-row="1" data-row-span="2" style="min-block-size: 16rem" data-fh="CRD">Image · 1–7, two rows</div>
  <div class="fh-card" data-span="6" data-start="6" data-row="2" data-layer="over" data-fh="CRD">Card · 6–11, over the image</div>
</div>
```

### MST · Masthead

The head of a page or app. The header is a glass panel with a large caption: number left in the tone, title right, an etched rule under both. --bar is the one-line top bar, the client's round logo first (__mark); --split puts the caption and the tools in two pills with the page between them. The lockup is a hero's sign-off: the wordmark, an etched line from it to the edge, and the headline split by the line, its rolling word in the root colour's family. --app is the app bar on the sidebar's frost panel: a lead with the sidebar cube, summary chips with cards, and tools. Three layouts of it share that panel and content: centred (as is), --app-inline (a one-line readout after the lead, etched rules between items) and --app-tiles (each item a sidebar row tile with its cube, the tools past an etched rule). --app-crumbs puts a crumb trail where the lead was, with no summary: an area crumb that opens the areas and one record crumb (its cube and name) that opens a switcher; two levels at most, a soft progress arrow between them, the drop-down chevron on hover only. Shown over a picture so the frost reads.

```html
<!-- MST-1.1 · Header › Bar -->
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

<!-- MST-1.2 · Header › Page -->
<header class="fh-masthead" data-tone="amber" data-fh="MST-1.2">
  <p class="fh-masthead__caption"><span class="fh-masthead__index">07</span><span class="fh-masthead__title" data-fh-slot="title">Business</span></p>
  <div class="fh-masthead__foot">
    <p class="fh-masthead__meta" data-fh-slot="meta">7 businesses · 5 owned · 2 client</p>
    <div class="fh-masthead__tools"><span class="fh-chip" data-tone="lime" data-fh="CHP" data-fh-slot="chips">All synced</span><a class="fh-button fh-button--sm" href="#l-masthead" data-fh="BTN" data-fh-slot="actions">New business</a></div>
  </div>
</header>

<!-- MST-1.3 · Header › Split -->
<header class="fh-masthead fh-masthead--bar fh-masthead--split" data-tone="sky" data-fh="MST-1.3">
  <p class="fh-masthead__caption"><span class="fh-masthead__index">05</span><span class="fh-masthead__title" data-fh-slot="title">Today is <small>Nov-05-26</small></span></p>
  <div class="fh-masthead__tools">
    <span class="fh-chip" data-tone="lime" data-fh="CHP" data-fh-slot="chips">Local</span>
    <span class="fh-avatar fh-avatar--circle fh-avatar--sm" data-tone="sky" data-fh="AVT" data-fh-slot="media">HJ</span>
  </div>
</header>

<!-- MST-2.1 · Lockup › Lockup -->
<header class="fh-masthead fh-masthead--lockup" data-fh="MST-2.1">
  <p class="fh-eyebrow-pill fh-masthead__above" data-tone="accent" data-fh="EYE-5.2" data-fh-slot="eyebrow"><span class="fh-dot fh-dot--live" aria-hidden="true"></span><span class="fh-eyebrow-pill__seg">Introducing</span><span class="fh-eyebrow-pill__seg"><strong>Firehorse v1.1</strong></span></p>
  <p class="fh-masthead__wordmark" data-fh-slot="media"><span class="fh-masthead__bar">_</span>firehorse</p>
  <span class="fh-masthead__etch" aria-hidden="true"></span>
  <p class="fh-masthead__headline"><span class="fh-masthead__top">The design system</span> <span class="fh-masthead__turn">that <em><span class="fh-rotator fh-rotator--walk" data-fh="WRT-1" data-fh-slot="title"><span>scales</span><span aria-hidden="true">adapts</span><span aria-hidden="true">grows</span><span aria-hidden="true">responds</span></span>.</em></span></p>
  <div class="fh-masthead__below"><p class="fh-lede">Built for modern workflows</p></div>
</header>

<!-- MST-3.1 · App bar › Lead -->
<header class="fh-masthead fh-masthead--app" data-fh="MST-3.1">
  <div class="fh-masthead__lead" data-tone="sky"><span class="fh-sidebar__cube" data-tone="sky" data-fh-slot="media"><i class="fh-icon fh-icon--sun" aria-hidden="true"></i></span><span class="fh-masthead__title" data-fh-slot="title">Today</span><span class="fh-masthead__crumb" data-fh-slot="link">› Morning plan</span></div>
  <div class="fh-masthead__summary" aria-hidden="true" data-fh-slot="summary"></div>
  <div class="fh-masthead__tools" aria-hidden="true"></div>
</header>

<!-- MST-3.2 · App bar › Summary -->
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

<!-- MST-3.3 · App bar › Tools -->
<div class="fh-stack fh-stack--md">
  <p class="fh-small fh-muted">Container width steps (64rem, 50rem, 36rem, 24rem).</p>
  <div style="inline-size: 64rem; max-inline-size: 100%; margin-inline: auto"><header class="fh-masthead fh-masthead--app" data-fh="MST-3.3"><div class="fh-masthead__lead" data-tone="sky"><span class="fh-sidebar__cube" data-tone="sky" data-fh-slot="media"><i class="fh-icon fh-icon--sun" aria-hidden="true"></i></span><span class="fh-masthead__title" data-fh-slot="title">Today</span></div><div class="fh-masthead__summary"><button class="fh-summary-chip" type="button" aria-label="Now" data-fh="MST-3.4" data-fh-slot="items"><span class="fh-summary-chip__value" data-fh-slot="value"><span class="fh-num">Sat 14 Nov · 11:15 PM EST</span></span><span class="fh-summary-chip__short">Sat 14</span></button><button class="fh-summary-chip" type="button" aria-label="Cycle" data-fh="MST-3.4" data-fh-slot="items"><span class="fh-summary-chip__value" data-fh-slot="value"><span class="fh-num">Cycle 5 · Year 4 · Ch 3</span></span><span class="fh-summary-chip__short">C5 · Y4</span><span class="fh-summary-chip__bar" style="--fh-summary-value: 87%" aria-hidden="true"></span></button></div><div class="fh-masthead__tools"><a class="fh-working" data-tone="violet" href="#l-masthead" data-fh="WRK-1.1" data-fh-slot="body"><i class="fh-icon fh-icon--sparkles fh-working__mark" aria-hidden="true" data-fh-slot="mark"></i><b>Claude</b><span class="fh-working__what" data-fh-slot="title">#636 · App bar</span></a><button class="fh-button fh-button--disc" type="button" aria-label="Search" data-fh="BTN-4" data-fh-slot="actions"><i class="fh-icon fh-icon--search" aria-hidden="true"></i></button><button class="fh-profile fh-profile--compact" type="button" aria-label="Justin Rascoe" data-fh="PRF-1.2" data-fh-slot="body"><span class="fh-avatar fh-avatar--circle" data-tone="sky" data-fh="AVT" data-fh-slot="media">JR</span></button></div></header></div>
  <div style="inline-size: 50rem; max-inline-size: 100%; margin-inline: auto"><header class="fh-masthead fh-masthead--app" data-fh="MST-3.3"><div class="fh-masthead__lead" data-tone="sky"><span class="fh-sidebar__cube" data-tone="sky" data-fh-slot="media"><i class="fh-icon fh-icon--sun" aria-hidden="true"></i></span><span class="fh-masthead__title" data-fh-slot="title">Today</span></div><div class="fh-masthead__summary"><button class="fh-summary-chip" type="button" aria-label="Now" data-fh="MST-3.4" data-fh-slot="items"><span class="fh-summary-chip__value" data-fh-slot="value"><span class="fh-num">Sat 14 Nov · 11:15 PM EST</span></span><span class="fh-summary-chip__short">Sat 14</span></button><button class="fh-summary-chip" type="button" aria-label="Cycle" data-fh="MST-3.4" data-fh-slot="items"><span class="fh-summary-chip__value" data-fh-slot="value"><span class="fh-num">Cycle 5 · Year 4 · Ch 3</span></span><span class="fh-summary-chip__short">C5 · Y4</span></button></div><div class="fh-masthead__tools"><a class="fh-working" data-tone="violet" href="#l-masthead" data-fh="WRK-1.1" data-fh-slot="body"><i class="fh-icon fh-icon--sparkles fh-working__mark" aria-hidden="true" data-fh-slot="mark"></i><b>Claude</b><span class="fh-working__what" data-fh-slot="title">#636 · App bar</span></a><button class="fh-button fh-button--disc" type="button" aria-label="Search" data-fh="BTN-4" data-fh-slot="actions"><i class="fh-icon fh-icon--search" aria-hidden="true"></i></button><button class="fh-profile fh-profile--compact" type="button" aria-label="Justin Rascoe" data-fh="PRF-1.2" data-fh-slot="body"><span class="fh-avatar fh-avatar--circle" data-tone="sky" data-fh="AVT" data-fh-slot="media">JR</span></button></div></header></div>
  <div style="inline-size: 36rem; max-inline-size: 100%; margin-inline: auto"><header class="fh-masthead fh-masthead--app" data-fh="MST-3.3"><div class="fh-masthead__lead" data-tone="sky"><span class="fh-sidebar__cube" data-tone="sky" data-fh-slot="media"><i class="fh-icon fh-icon--sun" aria-hidden="true"></i></span><span class="fh-masthead__title" data-fh-slot="title">Today</span></div><div class="fh-masthead__summary"><button class="fh-summary-chip" type="button" aria-label="Now" data-fh="MST-3.4" data-fh-slot="items"><span class="fh-summary-chip__value" data-fh-slot="value"><span class="fh-num">Sat 14 Nov · 11:15 PM EST</span></span><span class="fh-summary-chip__short">Sat 14</span></button><button class="fh-summary-chip" type="button" aria-label="Cycle" data-fh="MST-3.4" data-fh-slot="items"><span class="fh-summary-chip__value" data-fh-slot="value"><span class="fh-num">Cycle 5 · Year 4 · Ch 3</span></span><span class="fh-summary-chip__short">C5 · Y4</span></button></div><div class="fh-masthead__tools"><button class="fh-profile fh-profile--compact" type="button" aria-label="Justin Rascoe" data-fh="PRF-1.2" data-fh-slot="body"><span class="fh-avatar fh-avatar--circle" data-tone="sky" data-fh="AVT" data-fh-slot="media">JR</span></button></div></header></div>
  <div style="inline-size: 24rem; max-inline-size: 100%; margin-inline: auto"><header class="fh-masthead fh-masthead--app" data-fh="MST-3.3"><div class="fh-masthead__lead" data-tone="sky"><span class="fh-sidebar__cube" data-tone="sky" data-fh-slot="media"><i class="fh-icon fh-icon--sun" aria-hidden="true"></i></span><span class="fh-masthead__title" data-fh-slot="title">Today</span></div><div class="fh-masthead__summary" data-fh-slot="summary"></div><div class="fh-masthead__tools"><button class="fh-profile fh-profile--compact" type="button" aria-label="Justin Rascoe" data-fh="PRF-1.2" data-fh-slot="body"><span class="fh-avatar fh-avatar--circle" data-tone="sky" data-fh="AVT" data-fh-slot="media">JR</span></button></div></header></div>
</div>

<!-- MST-3.4 · App bar › Summary chip -->
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

<!-- MST-4.1 · App bar layouts › Centered -->
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

<!-- MST-4.2 · App bar layouts › Inline readout -->
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

<!-- MST-4.3 · App bar layouts › Tiles -->
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

<!-- MST-4.4 · App bar layouts › Crumbs -->
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

<!-- MST-5.1 · Crumb trail › Area crumb -->
<div class="fh-stack fh-stack--lg">
  <div style="display: grid; gap: var(--fh-gap-related); justify-items: start">
    <div style="inline-size: 100%; max-inline-size: 24rem"><header class="fh-masthead fh-masthead--app fh-masthead--app-crumbs" data-fh="MST-5.1"><nav class="fh-crumbs" aria-label="Breadcrumb" data-fh-slot="body"><ol class="fh-crumbs__list"><li class="fh-crumb fh-crumb--area" data-fh-slot="body"><button class="fh-crumb__button" type="button" aria-haspopup="menu" aria-expanded="false" aria-label="Organizations, switch area"><span class="fh-sidebar__cube" data-tone="sky" aria-hidden="true" data-fh-slot="media"><i class="fh-icon fh-icon--building-2" aria-hidden="true"></i></span><span class="fh-crumb__name" data-fh-slot="name">Organizations</span><i class="fh-icon fh-icon--chevron-down fh-crumb__caret" aria-hidden="true"></i></button></li></ol></nav><div class="fh-masthead__tools"><button class="fh-button fh-button--disc" type="button" aria-label="Search" data-fh="BTN-4" data-fh-slot="actions"><i class="fh-icon fh-icon--search" aria-hidden="true"></i></button><button class="fh-profile fh-profile--compact" type="button" aria-label="Justin Rascoe" data-fh="PRF-1.2" data-fh-slot="body"><span class="fh-avatar fh-avatar--circle" data-tone="sky" data-fh="AVT" data-fh-slot="media">JR</span></button></div></header></div>
    <div class="fh-menu fh-menu--rich fh-crumb-menu" role="menu" aria-label="Areas (static)" style="position: static; display: flex; opacity: 1; translate: none; margin: 0" data-fh="MST-5.1"><div class="fh-crumb-menu__search"><input type="search" aria-label="Filter areas" placeholder="Filter areas" value autocomplete="off"></div><div class="fh-crumb-menu__list"><p class="fh-menu__label" data-fh-slot="label">Work</p><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-crumb__mark" aria-hidden="true"><span class="fh-sidebar__cube" data-tone="sky" data-fh-slot="media"><i class="fh-icon fh-icon--sun" aria-hidden="true"></i></span></span><span class="fh-crumb__name" data-fh-slot="name">Today</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-crumb__mark" aria-hidden="true"><span class="fh-sidebar__cube" data-tone="teal" data-fh-slot="media"><i class="fh-icon fh-icon--target" aria-hidden="true"></i></span></span><span class="fh-crumb__name" data-fh-slot="name">Goals</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead" data-depth="1"><span class="fh-crumb__name" data-fh-slot="name">Active</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead" data-depth="1"><span class="fh-crumb__name" data-fh-slot="name">Archived</span></a><p class="fh-menu__label" data-fh-slot="label">Records</p><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="true" tabindex="-1" href="#l-masthead"><span class="fh-crumb__mark" aria-hidden="true"><span class="fh-sidebar__cube" data-tone="sky" data-fh-slot="media"><i class="fh-icon fh-icon--building-2" aria-hidden="true"></i></span></span><span class="fh-crumb__name" data-fh-slot="name">Organizations</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-crumb__mark" aria-hidden="true"><span class="fh-sidebar__cube" data-tone="amber" data-fh-slot="media"><i class="fh-icon fh-icon--users" aria-hidden="true"></i></span></span><span class="fh-crumb__name" data-fh-slot="name">People</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-crumb__mark" aria-hidden="true"><span class="fh-sidebar__cube" data-tone="neutral" data-fh-slot="media"><i class="fh-icon fh-icon--settings" aria-hidden="true"></i></span></span><span class="fh-crumb__name" data-fh-slot="name">Settings</span></a></div><p class="fh-crumb-menu__status" data-empty hidden data-fh-slot="chips">Nothing matches.</p></div>
  </div>
</div>

<!-- MST-5.2 · Crumb trail › Record crumb -->
<div class="fh-stack fh-stack--md">
  <p class="fh-small fh-muted">A record crumb (cube and name), another record kind, and a long name (truncated).</p>
  <header class="fh-masthead fh-masthead--app fh-masthead--app-crumbs" data-fh="MST-5.2"><nav class="fh-crumbs" aria-label="Breadcrumb" data-fh-slot="body"><ol class="fh-crumbs__list"><li class="fh-crumb fh-crumb--area" data-fh-slot="body"><button class="fh-crumb__button" type="button" aria-haspopup="menu" aria-expanded="false" aria-label="Organizations, switch area"><span class="fh-sidebar__cube" data-tone="sky" aria-hidden="true" data-fh-slot="media"><i class="fh-icon fh-icon--building-2" aria-hidden="true"></i></span><span class="fh-crumb__name" data-fh-slot="name">Organizations</span><i class="fh-icon fh-icon--chevron-down fh-crumb__caret" aria-hidden="true"></i></button></li><li class="fh-crumb fh-crumb--record" data-fh-slot="body"><i class="fh-icon fh-icon--chevron-right fh-crumb__sep" aria-hidden="true"></i><button class="fh-crumb__button" type="button" aria-haspopup="menu" aria-expanded="false" aria-current="page" aria-label="Rascode, switch organization"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="amber" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">R</span></span><span class="fh-crumb__name" data-fh-slot="name">Rascode</span><i class="fh-icon fh-icon--chevron-down fh-crumb__caret" aria-hidden="true"></i></button></li></ol></nav><div class="fh-masthead__tools"><button class="fh-button fh-button--disc" type="button" aria-label="Search" data-fh="BTN-4" data-fh-slot="actions"><i class="fh-icon fh-icon--search" aria-hidden="true"></i></button><button class="fh-profile fh-profile--compact" type="button" aria-label="Justin Rascoe" data-fh="PRF-1.2" data-fh-slot="body"><span class="fh-avatar fh-avatar--circle" data-tone="sky" data-fh="AVT" data-fh-slot="media">JR</span></button></div></header>
  <header class="fh-masthead fh-masthead--app fh-masthead--app-crumbs" data-fh="MST-5.2"><nav class="fh-crumbs" aria-label="Breadcrumb" data-fh-slot="body"><ol class="fh-crumbs__list"><li class="fh-crumb fh-crumb--area" data-fh-slot="body"><button class="fh-crumb__button" type="button" aria-haspopup="menu" aria-expanded="false" aria-label="Organizations, switch area"><span class="fh-sidebar__cube" data-tone="sky" aria-hidden="true" data-fh-slot="media"><i class="fh-icon fh-icon--building-2" aria-hidden="true"></i></span><span class="fh-crumb__name" data-fh-slot="name">Organizations</span><i class="fh-icon fh-icon--chevron-down fh-crumb__caret" aria-hidden="true"></i></button></li><li class="fh-crumb fh-crumb--record" data-fh-crumb data-fh-slot="body"><i class="fh-icon fh-icon--chevron-right fh-crumb__sep" aria-hidden="true"></i><button class="fh-crumb__button" type="button" aria-haspopup="menu" aria-expanded="false" aria-controls="mst-44-b" aria-current="page" aria-label="Rascode Design, switch business"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="teal" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">B</span></span><span class="fh-crumb__name" data-fh-slot="name">Rascode Design</span><i class="fh-icon fh-icon--chevron-down fh-crumb__caret" aria-hidden="true"></i></button><div id="mst-44-b" popover="manual" class="fh-menu fh-menu--rich fh-crumb-menu" role="menu" aria-label="Businesses" data-fh="MST-5.3" data-fh-slot="body"><div class="fh-crumb-menu__search"><input type="search" aria-label="Filter businesses" placeholder="Filter businesses" value autocomplete="off"></div><div class="fh-crumb-menu__list"><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="true" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="teal" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">B</span></span><span class="fh-crumb__name" data-fh-slot="name">Rascode Design</span><span class="fh-crumb__meta" data-fh-slot="meta">Business · Brand studio</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="violet" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">L</span></span><span class="fh-crumb__name" data-fh-slot="name">Rascode Labs</span><span class="fh-crumb__meta" data-fh-slot="meta">Business · Product</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="rose" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">P</span></span><span class="fh-crumb__name" data-fh-slot="name">Rascode Press</span><span class="fh-crumb__meta" data-fh-slot="meta">Business · Publishing</span></a></div><p class="fh-crumb-menu__status" data-empty hidden data-fh-slot="chips">Nothing matches.</p></div></li></ol></nav><div class="fh-masthead__tools"><button class="fh-button fh-button--disc" type="button" aria-label="Search" data-fh="BTN-4" data-fh-slot="actions"><i class="fh-icon fh-icon--search" aria-hidden="true"></i></button><button class="fh-profile fh-profile--compact" type="button" aria-label="Justin Rascoe" data-fh="PRF-1.2" data-fh-slot="body"><span class="fh-avatar fh-avatar--circle" data-tone="sky" data-fh="AVT" data-fh-slot="media">JR</span></button></div></header>
  <div style="max-inline-size: 60rem"><header class="fh-masthead fh-masthead--app fh-masthead--app-crumbs" data-fh="MST-5.2"><nav class="fh-crumbs" aria-label="Breadcrumb" data-fh-slot="body"><ol class="fh-crumbs__list"><li class="fh-crumb fh-crumb--area" data-fh-slot="body"><button class="fh-crumb__button" type="button" aria-haspopup="menu" aria-expanded="false" aria-label="Organizations, switch area"><span class="fh-sidebar__cube" data-tone="sky" aria-hidden="true" data-fh-slot="media"><i class="fh-icon fh-icon--building-2" aria-hidden="true"></i></span><span class="fh-crumb__name" data-fh-slot="name">Organizations</span><i class="fh-icon fh-icon--chevron-down fh-crumb__caret" aria-hidden="true"></i></button></li><li class="fh-crumb fh-crumb--record" data-fh-slot="body"><i class="fh-icon fh-icon--chevron-right fh-crumb__sep" aria-hidden="true"></i><button class="fh-crumb__button" type="button" aria-haspopup="menu" aria-expanded="false" aria-current="page" aria-label="The Rascode Organization for Applied Design Research and Education, switch organization"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="amber" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">R</span></span><span class="fh-crumb__name" data-fh-slot="name">The Rascode Organization for Applied Design Research and Education</span><i class="fh-icon fh-icon--chevron-down fh-crumb__caret" aria-hidden="true"></i></button></li></ol></nav><div class="fh-masthead__tools"><button class="fh-button fh-button--disc" type="button" aria-label="Search" data-fh="BTN-4" data-fh-slot="actions"><i class="fh-icon fh-icon--search" aria-hidden="true"></i></button><button class="fh-profile fh-profile--compact" type="button" aria-label="Justin Rascoe" data-fh="PRF-1.2" data-fh-slot="body"><span class="fh-avatar fh-avatar--circle" data-tone="sky" data-fh="AVT" data-fh-slot="media">JR</span></button></div></header></div>
</div>

<!-- MST-5.3 · Crumb trail › Switcher menu -->
<div class="fh-cluster" style="align-items: start; gap: var(--fh-gap-grouped); flex-wrap: wrap">
  <div class="fh-menu fh-menu--rich fh-crumb-menu" role="menu" aria-label="Organizations (static)" style="position: static; display: flex; opacity: 1; translate: none; margin: 0" data-fh="MST-5.3"><div class="fh-crumb-menu__search"><input type="search" aria-label="Filter organizations" placeholder="Filter organizations" value autocomplete="off"></div><div class="fh-crumb-menu__list"><p class="fh-menu__label" data-fh-slot="label">Recent</p><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="true" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="amber" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">R</span></span><span class="fh-crumb__name" data-fh-slot="name">Rascode</span><span class="fh-crumb__meta" data-fh-slot="meta">Company · Rascode and Company</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="sky" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">A</span></span><span class="fh-crumb__name" data-fh-slot="name">Acme Supply</span><span class="fh-crumb__meta" data-fh-slot="meta">Company · Acme Holdings</span></a><p class="fh-menu__label" data-fh-slot="label">All organizations</p><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="lime" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">B</span></span><span class="fh-crumb__name" data-fh-slot="name">Birch &amp; Co</span><span class="fh-crumb__meta" data-fh-slot="meta">Partnership</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="violet" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">C</span></span><span class="fh-crumb__name" data-fh-slot="name">Cobalt Studio</span><span class="fh-crumb__meta" data-fh-slot="meta">Company · Cobalt Group</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="rose" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">N</span></span><span class="fh-crumb__name" data-fh-slot="name">Northwind Traders</span><span class="fh-crumb__meta" data-fh-slot="meta">Company</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="orange" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">O</span></span><span class="fh-crumb__name" data-fh-slot="name">Ostrich Ltd</span><span class="fh-crumb__meta" data-fh-slot="meta">Sole proprietor</span></a></div><p class="fh-crumb-menu__status" data-empty hidden data-fh-slot="chips">Nothing matches.</p></div>
  <div class="fh-menu fh-menu--rich fh-crumb-menu" role="menu" aria-label="Organizations (filtered)" style="position: static; display: flex; opacity: 1; translate: none; margin: 0" data-fh="MST-5.3"><div class="fh-crumb-menu__search"><input type="search" aria-label="Filter organizations" placeholder="Filter organizations" value="co" autocomplete="off"></div><div class="fh-crumb-menu__list"><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="violet" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">C</span></span><span class="fh-crumb__name" data-fh-slot="name">Cobalt Studio</span><span class="fh-crumb__meta" data-fh-slot="meta">Company · Cobalt Group</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="true" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="amber" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">R</span></span><span class="fh-crumb__name" data-fh-slot="name">Rascode</span><span class="fh-crumb__meta" data-fh-slot="meta">Company · Rascode and Company</span></a></div><p class="fh-crumb-menu__status" data-empty hidden data-fh-slot="chips">Nothing matches.</p></div>
  <div class="fh-menu fh-menu--rich fh-crumb-menu" role="menu" aria-label="Organizations (loading)" data-state="loading" style="position: static; display: flex; opacity: 1; translate: none; margin: 0" data-fh="MST-5.3"><div class="fh-crumb-menu__search"><input type="search" aria-label="Filter organizations" placeholder="Filter organizations" value autocomplete="off"></div><div class="fh-crumb-menu__list"></div><p class="fh-crumb-menu__status" data-empty hidden data-fh-slot="chips">Nothing matches.</p></div>
  <div class="fh-menu fh-menu--rich fh-crumb-menu" role="menu" aria-label="Organizations (empty)" style="position: static; display: flex; opacity: 1; translate: none; margin: 0" data-fh="MST-5.3"><div class="fh-crumb-menu__search"><input type="search" aria-label="Filter organizations" placeholder="Filter organizations" value="zzz" autocomplete="off"></div><div class="fh-crumb-menu__list"><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead" hidden><span class="fh-sidebar__cube fh-crumb__mark" data-tone="amber" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">R</span></span><span class="fh-crumb__name" data-fh-slot="name">Rascode</span><span class="fh-crumb__meta" data-fh-slot="meta">Company</span></a></div><p class="fh-crumb-menu__status" data-empty data-fh-slot="chips">Nothing matches.</p></div>
  <div class="fh-menu fh-menu--rich fh-crumb-menu" role="menu" aria-label="Organizations (long list)" style="position: static; display: flex; opacity: 1; translate: none; margin: 0" data-fh="MST-5.3"><div class="fh-crumb-menu__search"><input type="search" aria-label="Filter organizations" placeholder="Filter organizations" value autocomplete="off"></div><div class="fh-crumb-menu__list"><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="true" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="amber" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">R</span></span><span class="fh-crumb__name" data-fh-slot="name">Rascode</span><span class="fh-crumb__meta" data-fh-slot="meta">Company</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="sky" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">A</span></span><span class="fh-crumb__name" data-fh-slot="name">Acme Supply</span><span class="fh-crumb__meta" data-fh-slot="meta">Company</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="lime" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">B</span></span><span class="fh-crumb__name" data-fh-slot="name">Birch &amp; Co</span><span class="fh-crumb__meta" data-fh-slot="meta">Company</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="violet" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">C</span></span><span class="fh-crumb__name" data-fh-slot="name">Cobalt Studio</span><span class="fh-crumb__meta" data-fh-slot="meta">Company</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="teal" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">D</span></span><span class="fh-crumb__name" data-fh-slot="name">Delta Freight</span><span class="fh-crumb__meta" data-fh-slot="meta">Company</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="rose" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">E</span></span><span class="fh-crumb__name" data-fh-slot="name">Ember Labs</span><span class="fh-crumb__meta" data-fh-slot="meta">Company</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="orange" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">F</span></span><span class="fh-crumb__name" data-fh-slot="name">Fathom Partners</span><span class="fh-crumb__meta" data-fh-slot="meta">Company</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="fuchsia" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">G</span></span><span class="fh-crumb__name" data-fh-slot="name">Granite Works</span><span class="fh-crumb__meta" data-fh-slot="meta">Company</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="amber" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">H</span></span><span class="fh-crumb__name" data-fh-slot="name">Harbor Foods</span><span class="fh-crumb__meta" data-fh-slot="meta">Company</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="sky" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">I</span></span><span class="fh-crumb__name" data-fh-slot="name">Ivory Press</span><span class="fh-crumb__meta" data-fh-slot="meta">Company</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="lime" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">J</span></span><span class="fh-crumb__name" data-fh-slot="name">Juniper Health</span><span class="fh-crumb__meta" data-fh-slot="meta">Company</span></a><a class="fh-crumb-menu__row" role="menuitemradio" aria-checked="false" tabindex="-1" href="#l-masthead"><span class="fh-sidebar__cube fh-crumb__mark" data-tone="violet" aria-hidden="true" data-fh-slot="media"><span class="fh-crumb__initial">K</span></span><span class="fh-crumb__name" data-fh-slot="name">Kestrel Air</span><span class="fh-crumb__meta" data-fh-slot="meta">Company</span></a></div><p class="fh-crumb-menu__status" data-empty hidden data-fh-slot="chips">Nothing matches.</p></div>
</div>
```

### BKD · Backdrop

A quiet abstract picture behind a whole page or app: soft tone fields under the sign-in page's etched contours, fixed to the viewport, or a blueprint sheet with data-fh-backdrop="blueprint". --fh-backdrop-strength sets how much tone or grid shows. A grid of option tiles with data-fh-backdrop-select picks the backdrop and remembers it. Glass over it frosts by --fh-frost (0–1), a theme token; a range with data-fh-frost-select dials it live and remembers it. The frost line frosts the art behind a hero from a line down, with a hard edge: --fh-backdrop-frost-from places the line.

```html
<!-- BKD-1.1 · Backdrop › Backdrop -->
<div class="fh-backdrop" aria-hidden="true" style="position: absolute" data-fh="BKD-1.1"></div>

<!-- BKD-1.2 · Backdrop › Frost slider -->
<label class="fh-field" style="position: relative; z-index: 1; max-inline-size: 16rem; margin-block-end: var(--fh-space-4)" data-fh="BKD-1.2"><span class="fh-field__label" data-fh-slot="label">Frost</span><input class="fh-range" type="range" min="0" max="100" value="60" data-fh-frost-select data-fh="UPL" data-fh-slot="fields"></label>

<!-- BKD-2.1 · Frost › Frost line -->
<div style="position: relative; overflow: hidden; contain: paint; min-block-size: 16rem; margin-block-start: var(--fh-space-6); border-radius: var(--fh-radius-sm); border: var(--fh-border-thin) var(--fh-card-border-style, dashed) var(--fh-color-etch)">
  <div style="position: absolute; inset: 0; background-color: var(--fh-color-text); mask: url(/img/backdrop/firehorse-horse.webp) center 30% / cover no-repeat" aria-hidden="true"></div>
  <div class="fh-backdrop fh-backdrop--frost" style="--fh-backdrop-frost-from: 55%" aria-hidden="true" data-fh="BKD-2.1"></div>
</div>

<!-- BKD-3.1 · Blueprint › Blueprint -->
<div class="fh-grid" data-cols="2" style="--fh-grid-min: 10rem; --fh-gap: var(--fh-space-4); position: relative; z-index: 1; margin-block-start: var(--fh-space-6)">
  <div data-fh-scheme="light" style="position: relative; overflow: hidden; contain: paint; min-block-size: 11rem; border-radius: var(--fh-radius-sm); border: var(--fh-border-thin) var(--fh-card-border-style, dashed) var(--fh-color-etch)">
    <div class="fh-backdrop" data-fh-backdrop="blueprint" style="position: absolute" aria-hidden="true" data-fh="BKD-3.1"></div>
  </div>
  <div data-fh-scheme="dark" style="position: relative; overflow: hidden; contain: paint; min-block-size: 11rem; border-radius: var(--fh-radius-sm); border: var(--fh-border-thin) var(--fh-card-border-style, dashed) var(--fh-color-etch)">
    <div class="fh-backdrop" data-fh-backdrop="blueprint" style="position: absolute" aria-hidden="true" data-fh="BKD-3.1"></div>
  </div>
</div>

<!-- BKD-4.1 · Chooser › Background chooser -->
<ul class="fh-tiles fh-tiles--options" aria-label="Backdrop" style="position: relative; z-index: 1; max-inline-size: 40rem; margin-block-start: var(--fh-space-6)" data-fh="BKD-4.1">
  <li><button class="fh-tile fh-tile--option" type="button" data-fh-backdrop-select data-backdrop="default" aria-pressed="true" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__media" style="background-color: var(--fh-color-canvas); background-image: radial-gradient(42% 48% at 16% 22%, color-mix(in oklab, var(--fh-tone-violet) 22%, transparent), transparent 72%), radial-gradient(38% 42% at 82% 78%, color-mix(in oklab, var(--fh-tone-teal) 16%, transparent), transparent 72%)" data-fh-slot="media"></span><b class="fh-tile__title" data-fh-slot="title">Default</b><span class="fh-tile__note" data-fh-slot="note">Tone · etched art</span><i class="fh-icon fh-icon--check fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button></li>
  <li><button class="fh-tile fh-tile--option" type="button" data-fh-backdrop-select data-backdrop="blueprint" aria-pressed="false" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__media" style="background-color: light-dark(color-mix(in oklab, var(--fh-color-canvas) 94%, var(--fh-tone-sky)), color-mix(in oklab, var(--fh-color-canvas) 72%, var(--fh-tone-sky))); background-image: linear-gradient(light-dark(color-mix(in oklab, var(--fh-tone-sky) 26%, transparent), var(--fh-color-etch)) 1px, transparent 1px), linear-gradient(90deg, light-dark(color-mix(in oklab, var(--fh-tone-sky) 26%, transparent), var(--fh-color-etch)) 1px, transparent 1px); background-size: 16px 16px" data-fh-slot="media"></span><b class="fh-tile__title" data-fh-slot="title">Blueprint</b><span class="fh-tile__note" data-fh-slot="note">Grid · drafting sheet</span><i class="fh-icon fh-icon--check fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button></li>
  <li><button class="fh-tile fh-tile--option" type="button" data-fh-backdrop-select data-backdrop="image" data-image="/img/backdrop/hv-hat-thumb.webp" aria-pressed="false" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__media" data-fh-slot="media"><img src="/img/backdrop/hv-hat-thumb.webp" alt loading="lazy"></span><b class="fh-tile__title" data-fh-slot="title">Photo</b><span class="fh-tile__note" data-fh-slot="note">Image · still</span><i class="fh-icon fh-icon--check fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button></li>
  <li><label class="fh-tile fh-tile--option" data-fh="TIL" data-fh-slot="items"><input type="file" accept="image/*" class="fh-sr-only" data-fh-backdrop-select data-backdrop="image"><span class="fh-tile__media" style="display: grid; place-items: center; border: var(--fh-border-thin) dashed var(--fh-color-etch); color: var(--fh-color-text-muted); font-family: var(--fh-font-mono); font-size: var(--fh-text-lede)" data-fh-slot="media">+</span><b class="fh-tile__title" data-fh-slot="title">Add an image</b><span class="fh-tile__note" data-fh-slot="note">Your file</span><i class="fh-icon fh-icon--check fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></label></li>
</ul>
```

### FND · Fender

A long page that changes gear partway. A note closes the first chapter and opens a tinted band that hangs down the rest of the page, the way a fender hangs down the side of a saddle: through the next section, under its full-width content and through a tall footer to the bottom.

```html
<div class="fh-page">
  <main class="fh-main" data-fh="FND">
    <section class="fh-section">
      <div class="fh-grid" data-cols="3" style="--fh-grid-min: 6rem">
        <div class="fh-card fh-card--solid" data-fh-slot="items" data-fh="CRD">Example</div>
        <div class="fh-card fh-card--solid" data-fh-slot="items" data-fh="CRD">Example</div>
        <div class="fh-card fh-card--solid" data-fh-slot="items" data-fh="CRD">Example</div>
      </div>
      
        <p class="fh-label">Closing note</p>
        <p class="fh-small fh-muted">Ends the first chapter and opens the panel.</p>
      
    </section>
    <section class="fh-section fh-section--ruled">
      <header class="fh-section-head fh-panel-inset" data-fh="PNL" data-fh-slot="body">
        <div><b>02</b> Next chapter<h3 class="fh-subheading">Stepped onto the panel</h3></div>
      </header>
      <div class="fh-grid" data-cols="2" style="--fh-grid-min: 8rem">
        <div class="fh-card" data-fh-slot="items" data-fh="CRD">Wide content runs across both tones</div>
        <div class="fh-card" data-fh-slot="items" data-fh="CRD">and keeps its own width</div>
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
    <div class="fh-etched-split__pane fh-crosses" data-fh="CTB" data-fh-slot="body">
      <div class="fh-stack">
        <p class="fh-eyebrow-pill" data-tone="rose" data-fh="EYE-1.1" data-fh-slot="eyebrow"><span class="fh-dot fh-dot--live" aria-hidden="true"></span><span>Why it matters</span></p>
        <h2 id="cinch-demo-heading" class="fh-heading">A design system that ships the layouts, not only the parts.</h2>
      </div>
    </div>
    <div class="fh-etched-split__pane fh-crosses" data-fh="CTB" data-fh-slot="body">
      <div class="fh-stack">
        <p class="fh-eyebrow-pill" data-tone="orange" data-fh="EYE-1.1" data-fh-slot="eyebrow"><span class="fh-dot fh-dot--live" aria-hidden="true"></span><span>The design pattern</span></p>
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
      <header class="fh-section-head fh-panel-inset" data-fh-slot="body">
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
<div class="fh-etched-split fh-bleed" data-fh="CIN">
  <div class="fh-etched-split__pane fh-crosses" data-fh="CTB" data-fh-slot="body">
    <div class="fh-stack fh-stack--lg">
      <p class="fh-eyebrow-pill" data-tone="rose" data-fh="EYE-1.1" data-fh-slot="eyebrow"><span class="fh-dot fh-dot--live"></span>Why it matters</p>
      <h3 class="fh-heading">Most systems fail at the seams, not the center</h3>
      <p class="fh-lede">Each tool works on its own. The cost shows up where data crosses from one to the next: re-keyed orders, stale reports, follow-ups nobody owns.</p>
    </div>
  </div>
  <div class="fh-etched-split__pane fh-crosses" data-fh="CTB" data-fh-slot="body">
    <div class="fh-stack fh-stack--lg">
      <p class="fh-eyebrow-pill" data-tone="orange" data-fh="EYE-1.1" data-fh-slot="eyebrow"><span class="fh-dot fh-dot--live"></span>The approach</p>
      <ul class="fh-checklist" data-tone="orange" data-fh="CKL" data-fh-slot="body">
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
    <p class="fh-eyebrow-pill" data-tone="live" data-fh="EYE-1.1" data-fh-slot="eyebrow"><span class="fh-dot fh-dot--live" aria-hidden="true"></span>Booking November</p>
    <h2 class="fh-cta-band__title" data-fh-slot="title">Ready when <em>the path is clear.</em></h2>
    <p class="fh-lede">Two weeks from kickoff to a site your team can run. Fixed price, no retainer, and everything we build is yours.</p>
    <div class="fh-hero__actions">
      <a class="fh-button" href="#cta-band" data-fh="BTN" data-fh-slot="actions">Book a call</a>
      <a class="fh-button fh-button--secondary" href="#cta-band" data-fh="BTN-1.5" data-fh-slot="actions">See pricing</a>
    </div>
  </div>
  <aside class="fh-cta-band__aside" aria-label="What to expect">
    <ul class="fh-cubes" data-fh="CUB-1" data-fh-slot="media">
      <li><b class="fh-cube fh-cube--lg" data-fh="CUB">$1,250</b> fixed</li>
      <li><b class="fh-cube fh-cube--lg" data-fh="CUB">14</b> days</li>
      <li><b class="fh-cube fh-cube--lg" data-fh="CUB">4</b> deliverables</li>
    </ul>
    <div class="fh-cta-band__people">
      <div class="fh-avatars" role="group" aria-label="Your team" data-fh="AVT" data-fh-slot="who"><span class="fh-avatar" data-face data-fh="AVT"><img src="img/avatars/ava.webp" alt="Ava"></span><span class="fh-avatar" data-face data-fh="AVT"><img src="img/avatars/cole.webp" alt="Cole"></span><span class="fh-avatar" data-face data-fh="AVT"><img src="img/avatars/maya.webp" alt="Maya"></span></div>
      <span>Talk to <b>Ava, Cole or Maya</b>. Replies within a day.</span>
    </div>
    <p class="fh-cta-band__fine" data-fh-slot="note">30-minute call · No prep needed</p>
  </aside>
</div>
```

### BTN · Button

Flat 3px rect, mono caps, solid fill (`data-fh-button="convex"` for the bevelled one). Primary buttons get an arrow; `data-tone` lights the top edge; `--lg` is the one size step (the text, nothing else). `--flat` is solid black with white text in every scheme. `--disc` is one glyph on a round disc, in the text colour or, with `data-tone`, in a tone. `--etched` is a frosted pill with a dashed etch edge and an ↑, for a trigger that opens something over art.

```html
<!-- BTN-1.1 · Solid › Primary -->
<a class="fh-button" href="#c-button" data-fh="BTN-1.1"><span class="fh-roll">Discuss a project</span></a>

<!-- BTN-1.2 · Solid › Tone edge -->
<a class="fh-button" href="#c-button" data-tone="sky" data-fh="BTN-1.2">Tone edge</a>

<!-- BTN-1.3 · Solid › Large -->
<a class="fh-button fh-button--lg" href="#c-button" data-fh="BTN-1.3">Discuss a project</a>

<!-- BTN-1.4 · Solid › Large, toned -->
<a class="fh-button fh-button--lg" href="#c-button" data-tone="sky" data-fh="BTN-1.4">Tone edge</a>

<!-- BTN-1.5 · Solid › Secondary -->
<button class="fh-button fh-button--secondary" type="button" data-fh="BTN-1.5">Secondary</button>

<!-- BTN-1.6 · Solid › Accent -->
<button class="fh-button fh-button--accent" type="button" data-fh="BTN-1.6">Accent</button>

<!-- BTN-1.7 · Solid › Flat -->
<button class="fh-button fh-button--flat" type="button" data-fh="BTN-1.7">Flat</button>

<!-- BTN-2.1 · Line › Outline -->
<button class="fh-button fh-button--outline" type="button" data-fh="BTN-2.1">Outline</button>

<!-- BTN-2.2 · Line › Ghost -->
<button class="fh-button fh-button--ghost" type="button" data-fh="BTN-2.2">Ghost</button>

<!-- BTN-3.1 · States › Busy -->
<button class="fh-button" type="button" aria-busy="true" data-fh="BTN-3.1">Saving</button>

<!-- BTN-3.2 · States › Disabled -->
<button class="fh-button" type="button" disabled data-fh="BTN-3.2">Disabled</button>

<!-- BTN-4.1 · Round icon › Disc -->
<button class="fh-button fh-button--disc" type="button" aria-label="Typeface" data-fh="BTN-4.1"><i class="fh-icon fh-icon--type" aria-hidden="true"></i></button>

<!-- BTN-4.2 · Round icon › Disc, tone -->
<button class="fh-button fh-button--disc" type="button" data-tone="accent" aria-label="Theme colour" data-fh="BTN-4.2"><i class="fh-icon fh-icon--palette" aria-hidden="true"></i></button>

<!-- BTN-5.1 · Etched pill › Etched pill -->
<button class="fh-button fh-button--etched" type="button" data-fh="BTN-5.1">Send to an agent</button>
```

### ACT · Action & link

Section CTAs and card actions: mono caps with a dashed underline and an arrow, at the caption size or one step larger (`--lg`), each in the ink or a tone (`data-tone`). Text links for running copy. A scroll cue is a line of heavy mono caps that ends in a down arrow, for under a hero; underline a phrase in it with `fh-action__phrase`.

```html
<!-- ACT-1.1 · Action › Action -->
<a class="fh-action" href="#c-action" data-fh="ACT-1.1">View all</a>

<!-- ACT-1.2 · Action › Toned -->
<a class="fh-action" data-tone="teal" href="#c-action" data-fh="ACT-1.2">Explore data architecture</a>

<!-- ACT-1.3 · Action › Large -->
<a class="fh-action fh-action--lg" href="#c-action" data-fh="ACT-1.3">View all services</a>

<!-- ACT-1.4 · Action › Large, toned -->
<a class="fh-action fh-action--lg" data-tone="teal" href="#c-action" data-fh="ACT-1.4">Explore every service</a>

<!-- ACT-2.1 · Link › Text link -->
<a class="fh-link" href="#c-action" data-fh="ACT-2.1">Read the case study</a>

<!-- ACT-2.2 · Link › Quiet link -->
<a class="fh-link fh-link--quiet" href="#c-action" data-fh="ACT-2.2">Read the case study</a>

<!-- ACT-3.1 · Cue › Scroll cue -->
<p class="fh-action fh-action--cue" data-fh="ACT-3.1">The design system built for <u class="fh-action__phrase">modern workflows</u></p>

<!-- ACT-3.2 · Cue › Scroll cue, toned -->
<p class="fh-action fh-action--cue" data-tone="teal" data-fh="ACT-3.2">The design system built for <u class="fh-action__phrase">modern workflows</u></p>

<!-- ACT-3.3 · Cue › Scroll cue, large -->
<p class="fh-action fh-action--cue fh-action--lg" data-fh="ACT-3.3">The design system built for <u class="fh-action__phrase">modern workflows</u></p>

<!-- ACT-3.4 · Cue › Scroll cue, large, toned -->
<p class="fh-action fh-action--cue fh-action--lg" data-tone="teal" data-fh="ACT-3.4">The design system built for <u class="fh-action__phrase">modern workflows</u></p>
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

<!-- EYE-1.2 · Lines › Tone tinted -->
<p class="fh-eyebrow-pill fh-eyebrow-pill--tone" data-tone="violet" data-fh="EYE-1.2"><span class="fh-dot fh-dot--live"></span>Tone tinted</p>

<!-- EYE-1.3 · Lines › Large -->
<p class="fh-eyebrow-pill fh-eyebrow-pill--lg" data-tone="accent" data-fh="EYE-1.3"><span class="fh-dot fh-dot--live"></span>Large</p>

<!-- EYE-1.4 · Lines › Large, toned -->
<p class="fh-eyebrow-pill fh-eyebrow-pill--lg fh-eyebrow-pill--tone" data-tone="amber" data-fh="EYE-1.4"><span class="fh-dot fh-dot--live"></span>Large, toned</p>

<!-- EYE-1.5 · Lines › Etched line -->
<p class="fh-eyebrow-pill fh-eyebrow-pill--etched" data-tone="teal" data-fh="EYE-1.5"><span class="fh-dot fh-dot--live"></span>Etched line</p>

<!-- EYE-1.6 · Lines › Dotted line -->
<p class="fh-eyebrow-pill fh-eyebrow-pill--dotted" data-tone="lime" data-fh="EYE-1.6"><span class="fh-dot"></span>Dotted line</p>

<!-- EYE-1.7 · Lines › Double line -->
<p class="fh-eyebrow-pill fh-eyebrow-pill--double" data-tone="amber" data-fh="EYE-1.7"><span class="fh-dot fh-dot--square"></span>Double line</p>

<!-- EYE-2.1 · Shapes › Rounded -->
<p class="fh-eyebrow-pill fh-eyebrow-pill--rounded" data-tone="orange" data-fh="EYE-2.1"><span class="fh-dot"></span>Rounded</p>

<!-- EYE-2.2 · Shapes › Sharp -->
<p class="fh-eyebrow-pill fh-eyebrow-pill--sharp fh-eyebrow-pill--etched" data-tone="rose" data-fh="EYE-2.2"><span class="fh-dot fh-dot--diamond"></span>Sharp</p>

<!-- EYE-2.3 · Shapes › Oval -->
<p class="fh-eyebrow-pill fh-eyebrow-pill--oval fh-eyebrow-pill--etched" data-tone="fuchsia" data-fh="EYE-2.3"><span class="fh-dot fh-dot--live"></span>Oval</p>

<!-- EYE-2.4 · Shapes › Tab -->
<p class="fh-eyebrow-pill fh-eyebrow-pill--tab fh-eyebrow-pill--etched" data-tone="sky" data-fh="EYE-2.4"><span class="fh-dot"></span>Tab</p>

<!-- EYE-3.1 · Fills › Solid tone -->
<p class="fh-eyebrow-pill fh-eyebrow-pill--solid" data-tone="sky" data-fh="EYE-3.1"><span class="fh-dot fh-dot--blink"></span>Solid tone</p>

<!-- EYE-3.2 · Fills › Gradient sweep -->
<p class="fh-eyebrow-pill fh-eyebrow-pill--gradient" data-tone="fuchsia" data-fh="EYE-3.2"><span class="fh-dot fh-dot--live"></span>Gradient sweep</p>

<!-- EYE-3.3 · Fills › Glass -->
<p class="fh-eyebrow-pill fh-eyebrow-pill--glass" data-tone="teal" data-fh="EYE-3.3"><span class="fh-dot fh-dot--ring"></span>Glass</p>

<!-- EYE-3.4 · Fills › Ghost -->
<p class="fh-eyebrow-pill fh-eyebrow-pill--ghost" data-tone="lime" data-fh="EYE-3.4"><span class="fh-dot fh-dot--live"></span>Ghost</p>

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
<p class="fh-eyebrow-pill fh-eyebrow-pill--sentence" data-tone="sky" data-fh="EYE-6.2"><span class="fh-avatar fh-avatar--circle" data-fh="AVT"><img src="img/avatars/reginald.webp" alt></span><span>Reginald is online</span><a class="fh-eyebrow-pill__action" href="#c-eyebrow">Talk</a></p>

<!-- EYE-6.3 · Sentences › Search · shortcut -->
<p class="fh-eyebrow-pill fh-eyebrow-pill--etched fh-eyebrow-pill--sentence" data-tone="neutral" data-fh="EYE-6.3"><span>Search the docs</span><kbd class="fh-kbd">⌘K</kbd></p>
```

### CHP · Chips

Chips filter or jump; the selected one fills with its tone. Icons replace the dot. Every variant takes the tone from `data-tone`. For the status of a record use `data-status` instead (merged, running, queued, failed, archived): the tone follows the value. A chip is for status, and sits only in a record's head, a collapsed section's summary and once per row; counts are an `fh-badge`; inline status text is an `fh-status`.

```html
<!-- CHP-1.1 · Kinds › Filter -->
<div class="fh-chips fh-chips--wrap" data-fh="CHP-1.1">
  <a class="fh-chip" data-tone="sky" href="#c-chips" aria-current="true" data-fh="CHP">Agents</a>
  <a class="fh-chip" data-tone="teal" href="#c-chips" data-fh="CHP">Data</a>
  <a class="fh-chip" data-tone="orange" href="#c-chips" data-fh="CHP">Automation</a>
  <a class="fh-chip" data-tone="fuchsia" href="#c-chips" data-fh="CHP">AI</a>
</div>

<!-- CHP-1.2 · Kinds › Choice -->
<div class="fh-chips fh-chips--track" role="group" aria-label="Contact task" data-fh="CHP-1.2">
  <label class="fh-chip" data-tone="lime" data-fh="CHP"><input type="radio" name="task" checked> Start a project</label>
  <label class="fh-chip" data-tone="sky" data-fh="CHP"><input type="radio" name="task"> Book a call</label>
  <label class="fh-chip" data-tone="rose" data-fh="CHP"><input type="radio" name="task"> Support</label>
</div>

<!-- CHP-1.3 · Kinds › Fill -->
<div class="fh-chips fh-chips--wrap" data-fh="CHP-1.3">
  <span class="fh-chip fh-chip--solid" data-tone="sky" data-fh="CHP"><i class="fh-icon fh-icon--bot" aria-hidden="true"></i>Solid tone</span>
  <span class="fh-chip fh-chip--tone" data-tone="orange" data-fh="CHP"><i class="fh-icon fh-icon--workflow" aria-hidden="true"></i>Soft tone</span>
  <span class="fh-chip fh-chip--plain" data-fh="CHP">Plain</span>
</div>

<!-- CHP-1.4 · Kinds › Tabs -->
<div class="fh-chips fh-chips--wrap" data-fh="CHP-1.4">
  <a class="fh-chip fh-chip--underline" data-tone="lime" href="#c-chips" aria-current="true" data-fh="CHP">Overview</a>
  <a class="fh-chip fh-chip--underline" data-tone="lime" href="#c-chips" data-fh="CHP">Pricing</a>
  <a class="fh-chip fh-chip--underline" data-tone="lime" href="#c-chips" data-fh="CHP">FAQ</a>
</div>

<!-- CHP-2.1 · Parts › Indexed -->
<div class="fh-chips fh-chips--wrap" data-fh="CHP-2.1">
  <span class="fh-chip fh-chip--indexed" data-tone="violet" data-fh="CHP"><b class="fh-chip__index">01</b>Foundations</span>
  <span class="fh-chip fh-chip--indexed" data-tone="amber" data-fh="CHP"><b class="fh-chip__index">03</b>Components</span>
  <span class="fh-chip fh-chip--indexed" data-tone="sky" data-fh="CHP"><b class="fh-chip__index">04</b>Data</span>
</div>

<!-- CHP-2.2 · Parts › Counted -->
<div class="fh-chips fh-chips--indexed fh-chips--wrap" aria-label="Open roles" data-fh="CHP-2.2">
  <a class="fh-chip fh-chip--tone" data-tone="fuchsia" href="#services" data-fh="CHP">Design engineer</a>
  <a class="fh-chip fh-chip--tone" data-tone="sky" href="#services" data-fh="CHP">AI agent builder</a>
  <a class="fh-chip fh-chip--tone" data-tone="orange" href="#services" data-fh="CHP">Automation lead</a>
</div>

<!-- CHP-2.3 · Parts › Removable -->
<div class="fh-chips fh-chips--wrap" data-fh="CHP-2.3">
  <span class="fh-chip fh-chip--plain" data-fh="CHP">Website <button class="fh-chip__remove" type="button" aria-label="Remove Website"></button></span>
  <span class="fh-chip fh-chip--plain" data-fh="CHP">Email <button class="fh-chip__remove" type="button" aria-label="Remove Email"></button></span>
</div>

<!-- CHP-3.1 · Chip cards › Data architecture -->
<a class="fh-chip-card" data-tone="teal" href="#c-chip-cards" data-fh="CHP-3.1"><span class="fh-chip-card__block">DA</span><span class="fh-chip-card__text"><b>Data architecture</b><small>4 services</small></span></a>

<!-- CHP-3.2 · Chip cards › Automation -->
<a class="fh-chip-card" data-tone="orange" href="#c-chip-cards" data-fh="CHP-3.2"><span class="fh-chip-card__block">AU</span><span class="fh-chip-card__text"><b>Automation</b><small>6 services</small></span></a>

<!-- CHP-3.3 · Chip cards › Maya -->
<a class="fh-chip-card" data-tone="sky" href="#c-chip-cards" data-fh="CHP-3.3"><span class="fh-chip-card__block"><img src="img/avatars/maya.webp" alt></span><span class="fh-chip-card__text"><b>Maya</b><small>Dental agent</small></span></a>

<!-- CHP-3.4 · Chip cards › Scope-of-work.pdf -->
<a class="fh-chip-card" data-tone="rose" href="#c-chip-cards" data-fh="CHP-3.4"><span class="fh-chip-card__block">PDF</span><span class="fh-chip-card__text"><b>Scope-of-work.pdf</b><small>212 KB · signed</small></span></a>

<!-- CHP-3.5 · Chip cards › Cards list -->
<nav class="fh-chip-cards" aria-label="Goals" style="max-inline-size: 26rem" data-fh="CHP-3.5">
  <a class="fh-chip-card" data-tone="lime" href="#c-chip-cards" aria-current="true" data-fh="CHP-3.1"><span class="fh-chip-card__block">HE</span><span class="fh-chip-card__text"><b>Health</b><small>3 goals</small></span></a>
  <a class="fh-chip-card" data-tone="sky" href="#c-chip-cards" data-fh="CHP-3.1"><span class="fh-chip-card__block">WO</span><span class="fh-chip-card__text"><b>Work</b><small>5 goals</small></span></a>
  <a class="fh-chip-card" data-tone="amber" href="#c-chip-cards" data-fh="CHP-3.1"><span class="fh-chip-card__block">MO</span><span class="fh-chip-card__text"><b>Money</b><small>2 goals</small></span></a>
  <a class="fh-chip-card" data-tone="violet" href="#c-chip-cards" data-fh="CHP-3.1"><span class="fh-chip-card__block">HO</span><span class="fh-chip-card__text"><b>Home</b><small>4 goals</small></span></a>
</nav>
```

### CUB · Cubes

Tone blocks that carry one value. In a row they walk the hue wheel by 28°, so three facts read as one family.

```html
<!-- CUB-1.1 · Cubes › Facts -->
<ul class="fh-cubes" data-tone="teal" data-fh="CUB-1.1">
  <li><b class="fh-cube" data-fh="CUB">$1,250</b> fixed</li>
  <li><b class="fh-cube" data-fh="CUB">14</b> days</li>
  <li><b class="fh-cube" data-fh="CUB">4</b> deliverables</li>
</ul>

<!-- CUB-1.2 · Cubes › Large -->
<ul class="fh-cubes" data-tone="fuchsia" data-fh="CUB-1.2">
  <li><b class="fh-cube fh-cube--lg" data-fh="CUB">98</b> score</li>
  <li><b class="fh-cube fh-cube--lg" data-fh="CUB">A+</b> grade</li>
  <li><b class="fh-cube fh-cube--lg" data-fh="CUB">12</b> fixes</li>
</ul>

<!-- CUB-1.3 · Cubes › Icons -->
<ul class="fh-cubes" data-tone="sky" data-fh="CUB-1.3">
  <li><b class="fh-cube fh-cube--sm" data-fh="CUB"><i class="fh-icon fh-icon--clock" aria-hidden="true"></i></b> 30 min</li>
  <li><b class="fh-cube fh-cube--sm" data-fh="CUB"><i class="fh-icon fh-icon--video" aria-hidden="true"></i></b> Video call</li>
  <li><b class="fh-cube fh-cube--sm" data-fh="CUB"><i class="fh-icon fh-icon--calendar" aria-hidden="true"></i></b> This week</li>
</ul>

<!-- CUB-1.4 · Cubes › Outline -->
<ul class="fh-cubes" data-tone="amber" data-fh="CUB-1.4">
  <li><b class="fh-cube fh-cube--outline" data-fh="CUB">v1.1</b> release</li>
  <li><b class="fh-cube fh-cube--outline" data-fh="CUB">MIT</b> license</li>
  <li><b class="fh-cube fh-cube--outline" data-fh="CUB">183</b> icons</li>
</ul>

<!-- CUB-1.5 · Cubes › Icon -->
<ul class="fh-cubes" data-tone="sky" data-fh="CUB-1.5">
  <li><span class="fh-cube fh-cube--icon" data-fh="CUB"><i class="fh-icon fh-icon--layout-grid" aria-hidden="true"></i></span> Overview</li>
  <li><span class="fh-cube fh-cube--icon" data-fh="CUB"><i class="fh-icon fh-icon--calendar" aria-hidden="true"></i></span> Today</li>
  <li><span class="fh-cube fh-cube--icon" data-fh="CUB"><i class="fh-icon fh-icon--target" aria-hidden="true"></i></span> Goals</li>
</ul>

<!-- CUB-1.6 · Cubes › Soft -->
<ul class="fh-cubes" data-tone="violet" data-fh="CUB-1.6">
  <li><span class="fh-cube fh-cube--icon fh-cube--soft" data-fh="CUB"><i class="fh-icon fh-icon--layers" aria-hidden="true"></i></span> Relays</li>
  <li><span class="fh-cube fh-cube--icon fh-cube--soft" data-fh="CUB"><i class="fh-icon fh-icon--users" aria-hidden="true"></i></span> People</li>
  <li><span class="fh-cube fh-cube--icon fh-cube--outline" data-fh="CUB"><i class="fh-icon fh-icon--shield-check" aria-hidden="true"></i></span> Outline</li>
</ul>

<!-- CUB-2.1 · Cube cards › Row -->
<div class="fh-cube-cards" data-tone="lime" style="--fh-cube-card-min: 12rem" data-fh="CUB-2.1">
  <article class="fh-cube-card" data-fh="CUB"><b class="fh-cube fh-cube--xl" data-fh="CUB">14</b><div class="fh-cube-card__text"><b>Days</b><small>Kickoff to handoff</small></div></article>
  <article class="fh-cube-card" data-fh="CUB"><b class="fh-cube fh-cube--xl" data-fh="CUB">4</b><div class="fh-cube-card__text"><b>Deliverables</b><small>Docs you keep</small></div></article>
  <a class="fh-cube-card" href="#c-cube-cards" data-fh="CUB"><b class="fh-cube fh-cube--xl" data-fh="CUB"><i class="fh-icon fh-icon--calendar" aria-hidden="true"></i></b><div class="fh-cube-card__text"><b>Book a call</b><small>30 min, this week</small></div></a>
</div>

<!-- CUB-2.2 · Cube cards › Trend -->
<div class="fh-cube-cards" data-tone="orange" style="--fh-cube-card-min: 12rem" data-fh="CUB-2.2">
  <article class="fh-cube-card" data-fh="CUB"><b class="fh-cube fh-cube--lg" data-fh="CUB">$184k</b><div class="fh-cube-card__text"><b>Pipeline</b><small>Open deals · sample</small></div><span class="fh-cube-card__trend" data-dir="up">▲ 12%</span></article>
  <article class="fh-cube-card" data-fh="CUB"><b class="fh-cube fh-cube--lg" data-fh="CUB">2.4h</b><div class="fh-cube-card__text"><b>First reply</b><small>Median · sample</small></div><span class="fh-cube-card__trend" data-dir="down">▼ 8%</span></article>
</div>

<!-- CUB-2.3 · Cube cards › Stacked -->
<div class="fh-cube-cards" data-tone="violet" style="--fh-cube-card-min: 14rem" data-fh="CUB-2.3">
  <article class="fh-cube-card fh-cube-card--stack" data-fh="CUB"><b class="fh-cube fh-cube--xl" data-fh="CUB">$1,695</b><div class="fh-cube-card__text"><b>AI agent</b><small>Per month, after setup</small></div><ul class="fh-cubes" data-fh="CUB-1"><li><b class="fh-cube fh-cube--sm" data-fh="CUB">24/7</b> coverage</li><li><b class="fh-cube fh-cube--sm" data-fh="CUB">3</b> channels</li></ul></article>
  <article class="fh-cube-card fh-cube-card--stack" data-fh="CUB"><b class="fh-cube fh-cube--xl" data-fh="CUB">1,284</b><div class="fh-cube-card__text"><b>Inquiries</b><small>Last 30 days · sample</small></div><ul class="fh-cubes" data-fh="CUB-1"><li><b class="fh-cube fh-cube--sm" data-fh="CUB">+12%</b> vs last</li><li><b class="fh-cube fh-cube--sm" data-fh="CUB">64%</b> booked</li></ul></article>
</div>

<!-- CUB-2.4 · Cube cards › Strip -->
<ul class="fh-cube-cards fh-cube-cards--strip" data-tone="sky" data-fh="CUB-2.4">
  <li class="fh-cube-card" data-tone="amber" data-fh="CUB"><b class="fh-cube fh-cube--xl" data-fh="CUB">3</b><div class="fh-cube-card__text"><b>Tasks today</b><small>2 overdue</small></div></li>
  <li class="fh-cube-card" data-tone="lime" data-fh="CUB"><b class="fh-cube fh-cube--xl" data-fh="CUB">5/8</b><div class="fh-cube-card__text"><b>Habits</b><small>Done so far</small></div></li>
  <li class="fh-cube-card" data-tone="sky" data-fh="CUB"><b class="fh-cube fh-cube--xl" data-fh="CUB">2</b><div class="fh-cube-card__text"><b>Meetings</b><small>Next at 2:30 PM</small></div></li>
</ul>
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
  <article class="fh-card" data-tone="sky" data-fh="CRD">
    <p class="fh-card__meta" data-fh-slot="meta">Agents</p>
    <h3 class="fh-card__title" data-fh-slot="title"><a href="#c-card">Lead follow-up agent</a></h3>
    <p class="fh-card__body" data-fh-slot="body">Answers, books and follows up on your own channels, around the clock.</p>
    <footer class="fh-card__footer">
      <p class="fh-card__price" data-fh-slot="value">Monthly <b>$1,700</b></p>
      <span class="fh-action" data-tone data-fh="ACT-1" data-fh-slot="link">Meet Wes</span>
    </footer>
  </article>
  <article class="fh-card" data-tone="teal" data-fh="CRD">
    <p class="fh-card__meta" data-fh-slot="meta">Data architecture</p>
    <h3 class="fh-card__title" data-fh-slot="title"><a href="#c-card">Schema design</a></h3>
    <p class="fh-card__body" data-fh-slot="body">Data models that match how the business actually runs.</p>
    <footer class="fh-card__footer">
      <p class="fh-card__price" data-fh-slot="value">From <b>$1,250</b></p>
      <span class="fh-action" data-tone data-fh="ACT-1" data-fh-slot="link">View</span>
    </footer>
  </article>
  <article class="fh-card" data-tone="orange" data-fh="CRD">
    <p class="fh-card__meta" data-fh-slot="meta">Automation</p>
    <h3 class="fh-card__title" data-fh-slot="title"><a href="#c-card">Process automation</a></h3>
    <p class="fh-card__body" data-fh-slot="body">Hand-offs that happen on their own, with an audit trail.</p>
    <footer class="fh-card__footer">
      <p class="fh-card__price" data-fh-slot="value">From <b>$2,400</b></p>
      <span class="fh-action" data-tone data-fh="ACT-1" data-fh-slot="link">View</span>
    </footer>
  </article>
</div>
```

### TIL · Tiles

Open tiles on one ruled grid: a solid icon block in the tile's tone, a numbered mono eyebrow, a large title and a muted note, the arrow top right. Index tiles go somewhere; launch tiles do something; option tiles pick one, with a large preview, a specimen, a small swatch or the colour itself, and the picked tile marked.

```html
<!-- TIL-1.1 · Index tiles › Index tile -->
<ul class="fh-tiles fh-tiles--lg" data-fh="TIL-1.1">
  <li><a class="fh-tile" href="#c-tiles" data-tone="teal" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__cube" data-fh-slot="media"><i class="fh-icon fh-icon--book-open" aria-hidden="true"></i></span><small class="fh-tile__eyebrow" data-fh-slot="eyebrow">01 · Guide</small><b class="fh-tile__title" data-fh-slot="title">Guidelines</b><span class="fh-tile__note" data-fh-slot="note">The rules every Rascode design system follows.</span><i class="fh-icon fh-icon--arrow-right fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></a></li>
  <li><a class="fh-tile" href="#c-tiles" data-tone="violet" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__cube" data-fh-slot="media"><i class="fh-icon fh-icon--layers" aria-hidden="true"></i></span><small class="fh-tile__eyebrow" data-fh-slot="eyebrow">02 · 6 families</small><b class="fh-tile__title" data-fh-slot="title">Foundations</b><span class="fh-tile__note" data-fh-slot="note">Tones, type, space, radius and every token.</span><i class="fh-icon fh-icon--arrow-right fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></a></li>
  <li><a class="fh-tile" href="#c-tiles" data-tone="rose" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__cube" data-fh-slot="media"><i class="fh-icon fh-icon--layout-grid" aria-hidden="true"></i></span><small class="fh-tile__eyebrow" data-fh-slot="eyebrow">03 · 4 families</small><b class="fh-tile__title" data-fh-slot="title">Layout</b><span class="fh-tile__note" data-fh-slot="note">The frame, container queries and the auto grid.</span><i class="fh-icon fh-icon--arrow-right fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></a></li>
</ul>

<!-- TIL-1.2 · Index tiles › Row -->
<ul class="fh-tiles" style="--fh-tiles-min: 16rem" data-fh="TIL-1.2">
  <li><a class="fh-tile fh-tile--row" href="#c-tiles" data-tone="neutral" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__cube" data-fh-slot="media"><i class="fh-icon fh-icon--book-open" aria-hidden="true"></i></span><b class="fh-tile__title" data-fh-slot="title">Guidelines</b><span class="fh-tile__note" data-fh-slot="note">How to use it well</span><small class="fh-tile__eyebrow" data-fh-slot="eyebrow">01</small><i class="fh-icon fh-icon--arrow-up-right fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></a></li>
  <li><a class="fh-tile fh-tile--row" href="#c-tiles" data-tone="accent" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__cube" data-fh-slot="media"><i class="fh-icon fh-icon--box" aria-hidden="true"></i></span><b class="fh-tile__title" data-fh-slot="title">Components</b><span class="fh-tile__note" data-fh-slot="note">Every fh-* part</span><small class="fh-tile__eyebrow" data-fh-slot="eyebrow">02</small><i class="fh-icon fh-icon--arrow-up-right fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></a></li>
  <li><a class="fh-tile fh-tile--row" href="#c-tiles" data-tone="teal" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__cube" data-fh-slot="media"><i class="fh-icon fh-icon--pen-line" aria-hidden="true"></i></span><b class="fh-tile__title" data-fh-slot="title">Forms</b><span class="fh-tile__note" data-fh-slot="note">Inputs and flows</span><small class="fh-tile__eyebrow" data-fh-slot="eyebrow">03</small><i class="fh-icon fh-icon--arrow-up-right fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></a></li>
</ul>

<!-- TIL-2.1 · Launch tiles › Launch tile -->
<div class="fh-tiles fh-tiles--launch" data-fh="TIL-2.1">
  <button class="fh-tile" type="button" data-tone="violet" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__cube" data-fh-slot="media"><i class="fh-icon fh-icon--sparkles" aria-hidden="true"></i></span><small class="fh-tile__eyebrow" data-fh-slot="eyebrow">01</small><b class="fh-tile__title" data-fh-slot="title">Claude</b><span class="fh-tile__note" data-fh-slot="note">Anthropic</span><i class="fh-icon fh-icon--arrow-up-right fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button>
  <button class="fh-tile" type="button" data-tone="fuchsia" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__cube" data-fh-slot="media"><i class="fh-icon fh-icon--bot" aria-hidden="true"></i></span><small class="fh-tile__eyebrow" data-fh-slot="eyebrow">02</small><b class="fh-tile__title" data-fh-slot="title">ChatGPT</b><span class="fh-tile__note" data-fh-slot="note">OpenAI</span><i class="fh-icon fh-icon--arrow-up-right fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button>
  <button class="fh-tile" type="button" data-tone="neutral" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__cube" data-fh-slot="media"><i class="fh-icon fh-icon--terminal" aria-hidden="true"></i></span><small class="fh-tile__eyebrow" data-fh-slot="eyebrow">03</small><b class="fh-tile__title" data-fh-slot="title">Cursor</b><span class="fh-tile__note" data-fh-slot="note">Agent in your editor</span><i class="fh-icon fh-icon--arrow-up-right fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button>
  <button class="fh-tile" type="button" data-tone="lime" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__cube" data-fh-slot="media"><i class="fh-icon fh-icon--heart" aria-hidden="true"></i></span><small class="fh-tile__eyebrow" data-fh-slot="eyebrow">04</small><b class="fh-tile__title" data-fh-slot="title">Lovable</b><span class="fh-tile__note" data-fh-slot="note">Builds the app</span><i class="fh-icon fh-icon--arrow-up-right fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button>
</div>

<!-- TIL-2.2 · Launch tiles › Compact -->
<div class="fh-tiles fh-tiles--launch" data-fh="TIL-2.2">
  <button class="fh-tile fh-tile--compact" type="button" data-tone="violet" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__cube" data-fh-slot="media"><i class="fh-icon fh-icon--sparkles" aria-hidden="true"></i></span><b class="fh-tile__title" data-fh-slot="title">Claude</b><span class="fh-tile__note" data-fh-slot="note">Anthropic</span><i class="fh-icon fh-icon--arrow-up-right fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button>
  <button class="fh-tile fh-tile--compact" type="button" data-tone="teal" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__cube" data-fh-slot="media"><i class="fh-icon fh-icon--bot" aria-hidden="true"></i></span><b class="fh-tile__title" data-fh-slot="title">ChatGPT</b><span class="fh-tile__note" data-fh-slot="note">OpenAI</span><i class="fh-icon fh-icon--arrow-up-right fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button>
  <button class="fh-tile fh-tile--compact" type="button" data-tone="rose" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__cube" data-fh-slot="media"><i class="fh-icon fh-icon--heart" aria-hidden="true"></i></span><b class="fh-tile__title" data-fh-slot="title">Lovable</b><span class="fh-tile__note" data-fh-slot="note">Builds the app</span><i class="fh-icon fh-icon--arrow-up-right fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button>
  <button class="fh-tile fh-tile--compact" type="button" data-tone="sky" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__cube" data-fh-slot="media"><i class="fh-icon fh-icon--search" aria-hidden="true"></i></span><b class="fh-tile__title" data-fh-slot="title">Perplexity</b><span class="fh-tile__note" data-fh-slot="note">Research the brief</span><i class="fh-icon fh-icon--arrow-up-right fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button>
</div>

<!-- TIL-2.3 · Launch tiles › Command -->
<div class="fh-tiles fh-tiles--launch" style="--fh-tiles-min: 12rem" data-fh="TIL-2.3">
  <button class="fh-tile fh-tile--command" type="button" data-tone="violet" data-fh="TIL" data-fh-slot="items"><b class="fh-tile__title" data-fh-slot="title">Claude Code</b><code>claude "…"</code><i class="fh-icon fh-icon--copy fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button>
  <button class="fh-tile fh-tile--command" type="button" data-tone="teal" data-fh="TIL" data-fh-slot="items"><b class="fh-tile__title" data-fh-slot="title">Codex CLI</b><code>codex "…"</code><i class="fh-icon fh-icon--copy fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button>
  <button class="fh-tile fh-tile--command" type="button" data-tone="sky" data-fh="TIL" data-fh-slot="items"><b class="fh-tile__title" data-fh-slot="title">Gemini CLI</b><code>gemini -p "…"</code><i class="fh-icon fh-icon--copy fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button>
</div>

<!-- TIL-3.1 · Option tiles › Option tile, media -->
<ul class="fh-tiles fh-tiles--options" aria-label="Backdrop" data-fh="TIL-3.1">
  <li><button class="fh-tile fh-tile--option" type="button" aria-pressed="true" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__media" data-fh-slot="media"><img src="/img/backdrop/hv-hat-thumb.webp" alt loading="lazy"></span><b class="fh-tile__title" data-fh-slot="title">Straw hat</b><span class="fh-tile__note" data-fh-slot="note">Warm · still</span><i class="fh-icon fh-icon--check fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button></li>
  <li><button class="fh-tile fh-tile--option" type="button" aria-pressed="false" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__media" data-fh-slot="media"><img src="/img/backdrop/hv-rider-thumb.webp" alt loading="lazy"></span><b class="fh-tile__title" data-fh-slot="title">Rider</b><span class="fh-tile__note" data-fh-slot="note">Open · bright</span><i class="fh-icon fh-icon--check fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button></li>
  <li><button class="fh-tile fh-tile--option" type="button" aria-pressed="false" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__media" style="background-image: radial-gradient(60% 70% at 30% 35%, var(--fh-color-accent), transparent 70%), radial-gradient(55% 60% at 75% 70%, oklch(from var(--fh-color-accent) l c calc(h + 120)), transparent 70%)" data-fh-slot="media"></span><b class="fh-tile__title" data-fh-slot="title">Glow</b><span class="fh-tile__note" data-fh-slot="note">Soft · radiating</span><i class="fh-icon fh-icon--check fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button></li>
  <li><button class="fh-tile fh-tile--option" type="button" aria-pressed="false" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__media" style="background-image: linear-gradient(var(--fh-color-etch) 1px, transparent 1px), linear-gradient(90deg, var(--fh-color-etch) 1px, transparent 1px); background-size: 12px 12px; background-repeat: repeat" data-fh-slot="media"></span><b class="fh-tile__title" data-fh-slot="title">Grid</b><span class="fh-tile__note" data-fh-slot="note">The grid alone</span><i class="fh-icon fh-icon--check fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button></li>
</ul>

<!-- TIL-3.2 · Option tiles › Option tile, specimen -->
<ul class="fh-tiles fh-tiles--options" aria-label="Typeface" data-fh="TIL-3.2">
  <li><button class="fh-tile fh-tile--option" type="button" aria-pressed="true" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__specimen" style="font-family: 'Inter', sans-serif" data-fh-slot="stage">Aa</span><b class="fh-tile__title" data-fh-slot="title">Inter</b><span class="fh-tile__note" data-fh-slot="note">Default · neutral</span><i class="fh-icon fh-icon--check fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button></li>
  <li><button class="fh-tile fh-tile--option" type="button" aria-pressed="false" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__specimen" style="font-family: 'Geist', sans-serif" data-fh-slot="stage">Aa</span><b class="fh-tile__title" data-fh-slot="title">Geist</b><span class="fh-tile__note" data-fh-slot="note">Crisp · technical</span><i class="fh-icon fh-icon--check fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button></li>
  <li><button class="fh-tile fh-tile--option" type="button" aria-pressed="false" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__specimen" style="font-family: 'Hanken Grotesk', sans-serif" data-fh-slot="stage">Aa</span><b class="fh-tile__title" data-fh-slot="title">Hanken Grotesk</b><span class="fh-tile__note" data-fh-slot="note">Warm · rounded</span><i class="fh-icon fh-icon--check fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button></li>
  <li><button class="fh-tile fh-tile--option" type="button" aria-pressed="false" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__specimen" style="font-family: 'Archivo', sans-serif" data-fh-slot="stage">Aa</span><b class="fh-tile__title" data-fh-slot="title">Archivo</b><span class="fh-tile__note" data-fh-slot="note">Sturdy · editorial</span><i class="fh-icon fh-icon--check fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button></li>
</ul>

<!-- TIL-3.3 · Option tiles › Option tile, swatch -->
<ul class="fh-tiles fh-tiles--options fh-tiles--swatches" aria-label="Photos" style="max-inline-size: 44rem" data-fh="TIL-3.3">
  <li><button class="fh-tile fh-tile--option fh-tile--swatch" type="button" aria-pressed="true" title="Straw hat" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__media" data-fh-slot="media"><img src="/img/backdrop/hv-hat-thumb.webp" alt loading="lazy"></span><b class="fh-tile__title" data-fh-slot="title">Straw hat</b><i class="fh-icon fh-icon--check fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button></li>
  <li><button class="fh-tile fh-tile--option fh-tile--swatch" type="button" aria-pressed="false" title="Rider" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__media" data-fh-slot="media"><img src="/img/backdrop/hv-rider-thumb.webp" alt loading="lazy"></span><b class="fh-tile__title" data-fh-slot="title">Rider</b><i class="fh-icon fh-icon--check fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button></li>
  <li><button class="fh-tile fh-tile--option fh-tile--swatch" type="button" aria-pressed="false" title="Dusk" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__media" style="background-image: linear-gradient(160deg, oklch(from var(--fh-color-accent) 0.7 c h), oklch(0.25 0.05 280))" data-fh-slot="media"></span><b class="fh-tile__title" data-fh-slot="title">Dusk</b><i class="fh-icon fh-icon--check fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button></li>
  <li><button class="fh-tile fh-tile--option fh-tile--swatch" type="button" aria-pressed="false" title="Meadow" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__media" style="background-image: linear-gradient(160deg, oklch(0.85 0.12 130), oklch(0.45 0.1 150))" data-fh-slot="media"></span><b class="fh-tile__title" data-fh-slot="title">Meadow</b><i class="fh-icon fh-icon--check fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button></li>
  <li><button class="fh-tile fh-tile--option fh-tile--swatch" type="button" aria-pressed="false" title="Dune" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__media" style="background-image: linear-gradient(170deg, oklch(0.9 0.05 80), oklch(0.65 0.09 60))" data-fh-slot="media"></span><b class="fh-tile__title" data-fh-slot="title">Dune</b><i class="fh-icon fh-icon--check fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button></li>
  <li><button class="fh-tile fh-tile--option fh-tile--swatch" type="button" aria-pressed="false" title="Ink" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__media" style="background-image: radial-gradient(70% 70% at 30% 30%, oklch(0.45 0 0), oklch(0.15 0 0))" data-fh-slot="media"></span><b class="fh-tile__title" data-fh-slot="title">Ink</b><i class="fh-icon fh-icon--check fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button></li>
</ul>

<!-- TIL-3.4 · Option tiles › Option tile, colour -->
<ul class="fh-tiles fh-tiles--options" aria-label="Theme colour" data-fh="TIL-3.4">
  <li><button class="fh-tile fh-tile--option fh-tile--colour" type="button" aria-pressed="false" style="--fh-tile-tone: var(--fh-color-accent)" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__media fh-tile__media--auto"><span class="fh-tile__code" data-fh-slot="key">Auto</span></span><b class="fh-tile__title" data-fh-slot="title">From backdrop</b><span class="fh-tile__note" data-fh-slot="note">Follows the photo</span><i class="fh-icon fh-icon--check fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button></li>
  <li><button class="fh-tile fh-tile--option fh-tile--colour" type="button" aria-pressed="false" style="--fh-tile-tone: #ff5a1f" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__media"><span class="fh-tile__code" data-fh-slot="key">#FF5A1F</span></span><b class="fh-tile__title" data-fh-slot="title">Firehorse</b><span class="fh-tile__note" data-fh-slot="note">The house colour</span><i class="fh-icon fh-icon--check fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button></li>
  <li><button class="fh-tile fh-tile--option fh-tile--colour" type="button" aria-pressed="false" style="--fh-tile-tone: #f59e0b" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__media"><span class="fh-tile__code" data-fh-slot="key">#F59E0B</span></span><b class="fh-tile__title" data-fh-slot="title">Amber</b><span class="fh-tile__note" data-fh-slot="note">Warm · golden</span><i class="fh-icon fh-icon--check fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button></li>
  <li><button class="fh-tile fh-tile--option fh-tile--colour" type="button" aria-pressed="true" style="--fh-tile-tone: #10b981" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__media"><span class="fh-tile__code" data-fh-slot="key">#10B981</span></span><b class="fh-tile__title" data-fh-slot="title">Emerald</b><span class="fh-tile__note" data-fh-slot="note">Fresh · calm</span><i class="fh-icon fh-icon--check fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button></li>
  <li><button class="fh-tile fh-tile--option fh-tile--colour" type="button" aria-pressed="false" style="--fh-tile-tone: #3b82f6" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__media"><span class="fh-tile__code" data-fh-slot="key">#3B82F6</span></span><b class="fh-tile__title" data-fh-slot="title">Blue</b><span class="fh-tile__note" data-fh-slot="note">Clear · steady</span><i class="fh-icon fh-icon--check fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></button></li>
</ul>
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
      <dl class="fh-stats" data-fh="STA" data-fh-slot="body"><div><dt>Tokens</dt><dd>{{TOKENS}}</dd></div><div><dt>Layers</dt><dd>9</dd></div><div><dt>Breakpoints</dt><dd>0</dd></div></dl>
    </figure>
    <figure class="fh-carousel__slide" aria-label="4 of 4">
      <i data-tone="sky"></i><i data-tone="teal"></i><i data-tone="lime"></i><i data-tone="amber"></i><i data-tone="orange"></i><i data-tone="accent"></i><i data-tone="rose"></i><i data-tone="fuchsia"></i><i data-tone="violet"></i>
      <figcaption>Nine tones. One attribute.</figcaption>
    </figure>
  </div>
  <span class="fh-carousel__count" data-fh-slot="count"></span>
</section>
```

### LST · List & timeline

Rows with a visual, text and a trailing slot. A dashed timeline for activity.

```html
<!-- LST-1.1 · List row › Row -->
<div class="fh-row" data-tone="orange" data-fh="LST-1.1">
  <span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--flame" aria-hidden="true"></i></span>
  <div class="fh-row__text"><p class="fh-row__title" data-fh-slot="title">Push-ups</p><p class="fh-row__sub" data-fh-slot="sub">50 of 100 reps</p></div>
  <div class="fh-row__end"><button class="fh-button fh-button--secondary fh-button--sm" type="button" data-fh="BTN-1.5" data-fh-slot="end"><i class="fh-icon fh-icon--plus" aria-hidden="true"></i>25</button></div>
</div>

<!-- LST-1.2 · List row › Done -->
<div class="fh-row fh-row--done" data-tone="lime" data-fh="LST-1.2">
  <span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--droplet" aria-hidden="true"></i></span>
  <div class="fh-row__text"><p class="fh-row__title" data-fh-slot="title">Water</p><p class="fh-row__sub" data-fh-slot="sub">8 of 8 glasses</p></div>
  <div class="fh-row__end"><span class="fh-chip" data-tone="lime" data-fh="CHP" data-fh-slot="end">done</span></div>
</div>

<!-- LST-1.3 · List row › End bar -->
<a class="fh-row" href="#c-list-row" data-tone="sky" data-fh="LST-1.3">
  <span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--target" aria-hidden="true"></i></span>
  <div class="fh-row__text"><p class="fh-row__title" data-fh-slot="title">Ship FirehorseKit</p><p class="fh-row__sub" data-fh-slot="sub">46 days left</p></div>
  <div class="fh-row__end"><span class="fh-row__bar"><b>58%</b><progress class="fh-progress" value="58" max="100" data-fh="FBK" data-fh-slot="end">58%</progress></span></div>
</a>

<!-- LST-1.4 · List row › Rows -->
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

### FOL · Text fold

Long text (an agent's reply, an update, a note) folds to `--fh-fold-lines` lines (6 by default), the last line fading into whatever surface it sits on, with a ghost Show all / Show less button. `fold.js` (`@rascode/firehorse/fold`) sets the clamp and shows the button only when the text is taller than it, measured on load and when the width changes. Without the script it is plain full text.

```html
<!-- FOL-1.1 · Text fold › Short text -->
<div class="fh-fold" style="max-inline-size: 34rem" data-fh="FOL-1.1">
  <div class="fh-fold__body fh-body" id="fold-short"><p>Round 2 is in. The index check passes now.</p></div>
  <button class="fh-button fh-button--ghost fh-button--sm fh-fold__toggle" type="button" aria-expanded="false" aria-controls="fold-short" hidden data-fh="BTN-2.2">Show all</button>
</div>

<!-- FOL-1.2 · Text fold › Long text -->
<div class="fh-fold" style="max-inline-size: 34rem; --fh-fold-lines: 4" data-fh="FOL-1.2">
  <div class="fh-fold__body fh-body" id="fold-long">
    <p>Round 2 is in. The index check passes now: the three new code variants were missing from the ledger, and the day mark had no slot in sections.json. I took the 375 shot again; the Tokens table scrolls inside its frame and the page no longer scrolls sideways.</p>
    <p>Three commits on the relay branch, none pushed. The report is at relay/runs/rs1-fh-relay-sidecar-parts.report.md, with the timetable and the last lines of every check. The full build hash changed, so it is recorded in test/builds.test.mjs, as the last relay did.</p>
  </div>
  <button class="fh-button fh-button--ghost fh-button--sm fh-fold__toggle" type="button" aria-expanded="false" aria-controls="fold-long" hidden data-fh="BTN-2.2">Show all</button>
</div>

<!-- FOL-1.3 · Text fold › Open -->
<div class="fh-fold" style="max-inline-size: 34rem; --fh-fold-lines: 4" data-open data-fh="FOL-1.3">
  <div class="fh-fold__body fh-body" id="fold-open">
    <p>Round 2 is in. The index check passes now: the three new code variants were missing from the ledger, and the day mark had no slot in sections.json. I took the 375 shot again; the Tokens table scrolls inside its frame and the page no longer scrolls sideways.</p>
    <p>Three commits on the relay branch, none pushed. The report is at relay/runs/rs1-fh-relay-sidecar-parts.report.md, with the timetable and the last lines of every check. The full build hash changed, so it is recorded in test/builds.test.mjs, as the last relay did.</p>
  </div>
  <button class="fh-button fh-button--ghost fh-button--sm fh-fold__toggle" type="button" aria-expanded="true" aria-controls="fold-open" hidden data-fh="BTN-2.2">Show less</button>
</div>
```

### IMS · Image stack

Images that belong together sit as one card with the next two peeking out behind it and a count on its corner. Point at the stack, tab into it, or tap it once on a phone, and the cards fan out in a row to the right, floating over what sits there so nothing moves. Click a card to open the viewer: the full image, its details, a count and previous / next (arrow keys too). `image-stack.js` (`@rascode/firehorse/image-stack`) adds the tap and the viewer; without it the stack still opens on hover and focus and each card links to its image.

```html
<!-- IMS-1.1 · Image stack › Stack -->
<div class="fh-image-stack" style="max-inline-size: 15rem" data-fh="IMS-1.1"><ul class="fh-image-stack__list" aria-label="3 images"><li class="fh-image-stack__item"><figure class="fh-image-stack__shot"><a class="fh-image-stack__open" href="/img/samples/tml2-actions-dark.webp"><img src="/img/samples/tml2-actions-dark.webp" alt="Screenshot: Actions page, dark mode" width="960" height="600" loading="lazy"></a><figcaption><span class="fh-image-stack__file">actions-dark.webp</span><span class="fh-image-stack__meta">960 × 600 · 52 KB</span><span class="fh-image-stack__meta">Screenshot · Claude · 8:24 PM</span></figcaption></figure></li><li class="fh-image-stack__item"><figure class="fh-image-stack__shot"><a class="fh-image-stack__open" href="/img/samples/tml2-actions-light.webp"><img src="/img/samples/tml2-actions-light.webp" alt="Screenshot: Actions page, light mode" width="960" height="600" loading="lazy"></a><figcaption><span class="fh-image-stack__file">actions-light.webp</span><span class="fh-image-stack__meta">960 × 600 · 54 KB</span><span class="fh-image-stack__meta">Screenshot · Claude · 8:24 PM</span></figcaption></figure></li><li class="fh-image-stack__item"><figure class="fh-image-stack__shot"><a class="fh-image-stack__open" href="/img/samples/ims-forms-dark.webp"><img src="/img/samples/ims-forms-dark.webp" alt="Screenshot: Forms page, dark mode" width="960" height="600" loading="lazy"></a><figcaption><span class="fh-image-stack__file">forms-dark.webp</span><span class="fh-image-stack__meta">960 × 600 · 52 KB</span><span class="fh-image-stack__meta">Screenshot · Grok · 8:19 PM</span></figcaption></figure></li></ul><span class="fh-image-stack__count" aria-hidden="true" data-fh-slot="count">+2</span></div>

<!-- IMS-1.2 · Image stack › Bare -->
<div class="fh-image-stack fh-image-stack--bare" style="max-inline-size: 15rem" data-fh="IMS-1.2"><ul class="fh-image-stack__list" aria-label="3 images"><li class="fh-image-stack__item"><figure class="fh-image-stack__shot" data-fh-slot="media"><a class="fh-image-stack__open" href="/img/samples/tml2-actions-dark.webp"><img src="/img/samples/tml2-actions-dark.webp" alt="Screenshot: Actions page, dark mode" width="960" height="600" loading="lazy"></a></figure></li><li class="fh-image-stack__item"><figure class="fh-image-stack__shot" data-fh-slot="media"><a class="fh-image-stack__open" href="/img/samples/tml2-actions-light.webp"><img src="/img/samples/tml2-actions-light.webp" alt="Screenshot: Actions page, light mode" width="960" height="600" loading="lazy"></a></figure></li><li class="fh-image-stack__item"><figure class="fh-image-stack__shot" data-fh-slot="media"><a class="fh-image-stack__open" href="/img/samples/ims-forms-dark.webp"><img src="/img/samples/ims-forms-dark.webp" alt="Screenshot: Forms page, dark mode" width="960" height="600" loading="lazy"></a></figure></li></ul><span class="fh-image-stack__count" aria-hidden="true" data-fh-slot="count">+2</span></div>

<!-- IMS-2.1 · Viewer › Viewer -->
<dialog class="fh-image-viewer" open aria-label="Image viewer" style="position: static; inset: auto; margin: 0; inline-size: 100%" data-fh="IMS-2.1"><p class="fh-image-viewer__count" data-fh-slot="count">2 / 3</p><button type="button" class="fh-button fh-button--disc fh-image-viewer__close" aria-label="Close" data-fh="BTN-4" data-fh-slot="close"><i class="fh-icon fh-icon--x" aria-hidden="true"></i></button><button type="button" class="fh-button fh-button--disc fh-image-viewer__prev" aria-label="Previous image" data-fh="BTN-4" data-fh-slot="actions"><i class="fh-icon fh-icon--chevron-left" aria-hidden="true"></i></button><figure class="fh-image-viewer__figure"><img class="fh-image-viewer__img" src="/img/samples/tml2-actions-light.webp" alt="Screenshot: Actions page, light mode" width="960" height="600" style="max-block-size: 22rem" data-fh-slot="media"><figcaption class="fh-image-viewer__caption"><span class="fh-image-viewer__file">actions-light.webp</span><span class="fh-image-viewer__meta">960 × 600 · 54 KB</span><span class="fh-image-viewer__meta">Screenshot · Claude · 8:24 PM</span></figcaption></figure><button type="button" class="fh-button fh-button--disc fh-image-viewer__next" aria-label="Next image" data-fh="BTN-4" data-fh-slot="actions"><i class="fh-icon fh-icon--chevron-right" aria-hidden="true"></i></button></dialog>
```

### DET · Code and divider

A code block with its copy button, a divider with a word in it, and keyboard keys. The description list that sat here moved to the Record table (TBL-3.5, Stacked).

```html
<div class="fh-stack fh-stack--lg">
  <p class="fh-divider" data-fh="DET">or install</p>
  <figure class="fh-code" data-fh="DET">
    <figcaption>terminal <button class="fh-button fh-button--sm fh-button--ghost" type="button">Copy</button></figcaption>
    <pre><code>npm i https://firehorse.rascode.dev/npm/firehorse-1.1.0.tgz</code></pre>
  </figure>
  <p class="fh-small fh-muted">Open the command menu with <kbd class="fh-kbd">⌘</kbd> <kbd class="fh-kbd">K</kbd>.</p>
</div>
```

### TIR · Pricing tiers

Each tier is a card in the new look: an Icon cube in its tone, a numbered name and the price on the stat tier. The featured tier takes a tone wash and its tag; the cards stack or sit side by side by container.

```html
<div class="fh-tiers" data-fh="TIR">
  <article class="fh-tier" data-tone="sky" data-fh-slot="items">
    <header class="fh-tier__head">
      <span class="fh-tier__cube" data-fh-slot="media"><i class="fh-icon fh-icon--search" aria-hidden="true"></i></span>
      <h4 class="fh-tier__name" data-fh-slot="name">Assessment</h4>
      <p class="fh-tier__pitch" data-fh-slot="sub">Find the risks before they find you.</p>
    </header>
    <div class="fh-tier__price"><b>$750</b><span>one time</span><small class="fh-tier__note" data-fh-slot="note">Readout in a week</small></div>
    <ul class="fh-checklist" data-tone data-fh="CKL" data-fh-slot="body"><li>Backend review</li><li>Risk register</li><li>30-minute readout</li></ul>
    <a class="fh-tier__foot" href="#c-pricing">Book assessment<i class="fh-icon fh-icon--arrow-right" aria-hidden="true"></i></a>
  </article>
  <article class="fh-tier" data-tone="accent" data-featured="Most chosen" data-fh-slot="items">
    <header class="fh-tier__head">
      <span class="fh-tier__cube" data-fh-slot="media"><i class="fh-icon fh-icon--bot" aria-hidden="true"></i></span>
      <h4 class="fh-tier__name" data-fh-slot="name">Agent</h4>
      <p class="fh-tier__pitch" data-fh-slot="sub">A trained agent on your channels, live in days.</p>
    </header>
    <div class="fh-tier__price"><b>$1,695</b><span>per month</span><small class="fh-tier__note" data-fh-slot="note">3-day free trial</small></div>
    <ul class="fh-checklist" data-tone data-fh="CKL" data-fh-slot="body"><li>Voice and text</li><li>5 channels wired</li><li>Weekly tuning</li></ul>
    <a class="fh-tier__foot" href="#c-pricing">Add an agent<i class="fh-icon fh-icon--arrow-right" aria-hidden="true"></i></a>
  </article>
  <article class="fh-tier" data-tone="lime" data-fh-slot="items">
    <header class="fh-tier__head">
      <span class="fh-tier__cube" data-fh-slot="media"><i class="fh-icon fh-icon--shield-check" aria-hidden="true"></i></span>
      <h4 class="fh-tier__name" data-fh-slot="name">Managed</h4>
      <p class="fh-tier__pitch" data-fh-slot="sub">A steady hand on the systems you already run.</p>
    </header>
    <div class="fh-tier__price"><b>$400</b><span>per month</span><small class="fh-tier__note" data-fh-slot="note">Cancel anytime</small></div>
    <ul class="fh-checklist" data-tone data-fh="CKL" data-fh-slot="body"><li>Monitoring</li><li>Monthly report</li><li>Priority fixes</li></ul>
    <a class="fh-tier__foot" href="#c-pricing">Talk to us<i class="fh-icon fh-icon--arrow-right" aria-hidden="true"></i></a>
  </article>
</div>
```

### FEA · Features

```html
<div class="fh-grid" data-cols="2" style="--fh-grid-min: 12rem; --fh-gap: var(--fh-space-8)">
  <div class="fh-feature" data-tone="teal" data-fh="FEA"><span class="fh-feature__icon" data-fh-slot="icon">CQ</span><h3>Container queries</h3><p>Every slot is a query container.</p></div>
  <div class="fh-feature" data-tone="amber" data-fh="FEA"><span class="fh-feature__icon" data-fh-slot="icon">L8</span><h3>Eight layers</h3><p>Override without !important.</p></div>
  <div class="fh-feature" data-tone="fuchsia" data-fh="FEA"><span class="fh-feature__icon" data-fh-slot="icon">◐</span><h3>Two schemes</h3><p>light-dark() on every role.</p></div>
  <div class="fh-feature" data-tone="violet" data-fh="FEA"><span class="fh-feature__icon" data-fh-slot="icon">AI</span><h3>Agent-ready</h3><p>Contract, markup and tokens.</p></div>
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

Pagination, a wizard stepper, search and a side nav. Nav links are a site's top links in mono caps: a pill wash on hover, a rolling label and an accent chevron on a link that opens a panel; `--tone` washes the current link in the nav's tone and `--lg` is the one size step. Every part reads one set of `--fh-nav-*` values.

```html
<!-- NAV-1.1 · Nav links › Nav links -->
<nav class="fh-nav fh-nav--links" aria-label="Site (sample 1)" data-fh="NAV-1.1">
  <button class="fh-nav__link" type="button" popovertarget="nav-links-demo-1" data-fh-slot="link"><span class="fh-roll">Docs</span><i class="fh-icon fh-icon--chevron-down" aria-hidden="true"></i></button>
  <a class="fh-nav__link" href="#c-nav" data-fh-slot="link"><span class="fh-roll">Build with Firehorse</span></a>
  <a class="fh-nav__link" href="#c-nav" aria-current="page" data-fh-slot="link"><span class="fh-roll">Design patterns</span></a>
  <div class="fh-menu" id="nav-links-demo-1" popover data-fh="DRP-1.1" data-fh-slot="body"><a href="#c-nav">Guidelines</a><a href="#c-nav">Foundations</a><a href="#c-nav">Components</a></div>
</nav>

<!-- NAV-1.2 · Nav links › Toned -->
<nav class="fh-nav fh-nav--links fh-nav--tone" aria-label="Site (sample 2)" data-tone="violet" data-fh="NAV-1.2">
  <button class="fh-nav__link" type="button" popovertarget="nav-links-demo-2" data-fh-slot="link"><span class="fh-roll">Docs</span><i class="fh-icon fh-icon--chevron-down" aria-hidden="true"></i></button>
  <a class="fh-nav__link" href="#c-nav" data-fh-slot="link"><span class="fh-roll">Build with Firehorse</span></a>
  <a class="fh-nav__link" href="#c-nav" aria-current="page" data-fh-slot="link"><span class="fh-roll">Design patterns</span></a>
  <div class="fh-menu" id="nav-links-demo-2" popover data-fh="DRP-1.1" data-fh-slot="body"><a href="#c-nav">Guidelines</a><a href="#c-nav">Foundations</a><a href="#c-nav">Components</a></div>
</nav>

<!-- NAV-1.3 · Nav links › Large -->
<nav class="fh-nav fh-nav--links fh-nav--lg" aria-label="Site (sample 3)" data-fh="NAV-1.3">
  <button class="fh-nav__link" type="button" popovertarget="nav-links-demo-3" data-fh-slot="link"><span class="fh-roll">Docs</span><i class="fh-icon fh-icon--chevron-down" aria-hidden="true"></i></button>
  <a class="fh-nav__link" href="#c-nav" data-fh-slot="link"><span class="fh-roll">Build with Firehorse</span></a>
  <a class="fh-nav__link" href="#c-nav" aria-current="page" data-fh-slot="link"><span class="fh-roll">Design patterns</span></a>
  <div class="fh-menu" id="nav-links-demo-3" popover data-fh="DRP-1.1" data-fh-slot="body"><a href="#c-nav">Guidelines</a><a href="#c-nav">Foundations</a><a href="#c-nav">Components</a></div>
</nav>

<!-- NAV-1.4 · Nav links › Large, toned -->
<nav class="fh-nav fh-nav--links fh-nav--lg fh-nav--tone" aria-label="Site (sample 4)" data-tone="amber" data-fh="NAV-1.4">
  <button class="fh-nav__link" type="button" popovertarget="nav-links-demo-4" data-fh-slot="link"><span class="fh-roll">Docs</span><i class="fh-icon fh-icon--chevron-down" aria-hidden="true"></i></button>
  <a class="fh-nav__link" href="#c-nav" data-fh-slot="link"><span class="fh-roll">Build with Firehorse</span></a>
  <a class="fh-nav__link" href="#c-nav" aria-current="page" data-fh-slot="link"><span class="fh-roll">Design patterns</span></a>
  <div class="fh-menu" id="nav-links-demo-4" popover data-fh="DRP-1.1" data-fh-slot="body"><a href="#c-nav">Guidelines</a><a href="#c-nav">Foundations</a><a href="#c-nav">Components</a></div>
</nav>

<!-- NAV-2.1 · Search › Search field -->
<label class="fh-search" data-fh="NAV-2.1"><span class="fh-sr-only">Search</span><input type="search" placeholder="Search components"><kbd class="fh-kbd">⌘K</kbd></label>

<!-- NAV-3.1 · Stepper › Stepper -->
<ol class="fh-stepper" data-tone="lime" data-fh="NAV-3.1">
  <li data-state="done">Details</li>
  <li data-state="current" aria-current="step">Scope</li>
  <li>Review</li>
  <li>Sign</li>
</ol>

<!-- NAV-4.1 · Pagination › Pagination -->
<nav class="fh-pagination" aria-label="Pages" data-fh="NAV-4.1">
  <a href="#c-nav" rel="prev">Prev</a><a href="#c-nav">1</a><a href="#c-nav" aria-current="page">2</a><a href="#c-nav">3</a><span>…</span><a href="#c-nav">9</a><a href="#c-nav" rel="next">Next</a>
</nav>

<!-- NAV-5.1 · Sidenav › Grouped links -->
<nav class="fh-sidenav" aria-label="Portal" data-tone="sky" data-fh="NAV-5.1">
  <section><p class="fh-label">Portal</p>
    <a href="#c-nav" aria-current="page">Overview</a>
    <a href="#c-nav">Invoices <span class="fh-badge" data-tone="amber" data-fh="CLS-1">2</span></a>
    <a href="#c-nav">Agents</a>
  </section>
</nav>

<!-- NAV-5.2 · Sidenav › Collapsible areas -->
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

Grouped links under the header, on a frost ruled with the dashed etch: a quiet mono label over each group, a soft rule between groups and a rail of link cells along the foot. Default holds plain links; `--headed` lines the labels up on one row and pairs with `fh-mega__link` for rich rows; `--tiles` adds a mono title and count head and holds groups of tiles.

```html
<!-- MEG-1.1 · Default › Default -->
<div class="fh-mega" style="position: relative; inset: auto; display: block; opacity: 1; translate: none; max-block-size: none; box-shadow: none" data-fh="MEG-1.1">
  <div class="fh-mega__grid">
    <section data-tone="sky"><h3>Agents</h3><ul><li><a href="#c-mega">Lead follow-up</a></li><li><a href="#c-mega">Inbox triage</a></li></ul></section>
    <section data-tone="teal"><h3>Data</h3><ul><li><a href="#c-mega">Warehouses</a></li><li><a href="#c-mega">Pipelines</a></li></ul></section>
    <section data-tone="orange"><h3>Automation</h3><ul><li><a href="#c-mega">Workflows</a></li><li><a href="#c-mega">Webhooks</a></li></ul></section>
  </div>
  <nav class="fh-mega__rail" aria-label="More"><a href="#c-mega"><span class="fh-roll">All services</span><i class="fh-icon fh-icon--arrow-right" aria-hidden="true"></i></a><a href="#c-mega"><span class="fh-roll">Talk to us</span><i class="fh-icon fh-icon--arrow-up-right" aria-hidden="true"></i></a></nav>
</div>

<!-- MEG-2.1 · Headed › Headed -->
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

<!-- MEG-3.1 · Tile panel › Tile panel -->
<div class="fh-mega fh-mega--tiles" style="position: relative; inset: auto; opacity: 1; translate: none; max-block-size: none; box-shadow: none" data-fh="MEG-3.1">
  <header class="fh-mega__head"><span class="fh-mega__title" data-fh-slot="title">Docs</span><span class="fh-mega__count" data-fh-slot="count">6 pages</span></header>
  <div class="fh-mega__groups">
    <section class="fh-mega__group" aria-label="Basics"><p class="fh-mega__label" data-fh-slot="label">Basics</p><ul class="fh-tiles" style="--fh-tiles-min: 100%" data-fh="TIL-1.2" data-fh-slot="items"><li><a class="fh-tile fh-tile--row" href="#c-mega" data-tone="neutral" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__cube" data-fh-slot="media"><i class="fh-icon fh-icon--book-open" aria-hidden="true"></i></span><b class="fh-tile__title" data-fh-slot="title">Guidelines</b><span class="fh-tile__note" data-fh-slot="note">How to use it well</span><small class="fh-tile__eyebrow" data-fh-slot="eyebrow">01</small><i class="fh-icon fh-icon--arrow-up-right fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></a></li><li><a class="fh-tile fh-tile--row" href="#c-mega" data-tone="accent" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__cube" data-fh-slot="media"><i class="fh-icon fh-icon--layers" aria-hidden="true"></i></span><b class="fh-tile__title" data-fh-slot="title">Foundations</b><span class="fh-tile__note" data-fh-slot="note">Tokens, type, colour</span><small class="fh-tile__eyebrow" data-fh-slot="eyebrow">02</small><i class="fh-icon fh-icon--arrow-up-right fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></a></li><li><a class="fh-tile fh-tile--row" href="#c-mega" data-tone="sky" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__cube" data-fh-slot="media"><i class="fh-icon fh-icon--panels-top-left" aria-hidden="true"></i></span><b class="fh-tile__title" data-fh-slot="title">Layout</b><span class="fh-tile__note" data-fh-slot="note">Grids, spacing, shells</span><small class="fh-tile__eyebrow" data-fh-slot="eyebrow">03</small><i class="fh-icon fh-icon--arrow-up-right fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></a></li></ul></section>
    <section class="fh-mega__group" aria-label="Build"><p class="fh-mega__label" data-fh-slot="label">Build</p><ul class="fh-tiles" style="--fh-tiles-min: 100%" data-fh="TIL-1.2" data-fh-slot="items"><li><a class="fh-tile fh-tile--row" href="#c-mega" data-tone="accent" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__cube" data-fh-slot="media"><i class="fh-icon fh-icon--box" aria-hidden="true"></i></span><b class="fh-tile__title" data-fh-slot="title">Components</b><span class="fh-tile__note" data-fh-slot="note">Every fh-* part</span><small class="fh-tile__eyebrow" data-fh-slot="eyebrow">04</small><i class="fh-icon fh-icon--arrow-up-right fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></a></li><li><a class="fh-tile fh-tile--row" href="#c-mega" data-tone="teal" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__cube" data-fh-slot="media"><i class="fh-icon fh-icon--pen-line" aria-hidden="true"></i></span><b class="fh-tile__title" data-fh-slot="title">Forms</b><span class="fh-tile__note" data-fh-slot="note">Inputs and flows</span><small class="fh-tile__eyebrow" data-fh-slot="eyebrow">05</small><i class="fh-icon fh-icon--arrow-up-right fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></a></li><li><a class="fh-tile fh-tile--row" href="#c-mega" data-tone="rose" data-fh="TIL" data-fh-slot="items"><span class="fh-tile__cube" data-fh-slot="media"><i class="fh-icon fh-icon--chart-bar" aria-hidden="true"></i></span><b class="fh-tile__title" data-fh-slot="title">Data</b><span class="fh-tile__note" data-fh-slot="note">Tables and charts</span><small class="fh-tile__eyebrow" data-fh-slot="eyebrow">06</small><i class="fh-icon fh-icon--arrow-up-right fh-tile__go" aria-hidden="true" data-fh-slot="link"></i></a></li></ul></section>
  </div>
  <nav class="fh-mega__rail" aria-label="More"><a href="#c-mega"><span class="fh-roll">Start here</span><i class="fh-icon fh-icon--arrow-right" aria-hidden="true"></i></a><a href="#c-mega"><span class="fh-roll">All categories</span><i class="fh-icon fh-icon--arrow-right" aria-hidden="true"></i></a><a href="#c-mega"><span class="fh-roll">llms.txt for agents</span><i class="fh-icon fh-icon--arrow-up-right" aria-hidden="true"></i></a></nav>
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

`--rich` is the site header's short menus and every table's column display menu: a tinted tile per row, walking the root's colours (`--fh-walk-0` … `8`). On the etched frost: quiet mono labels, sans items in rows that run the menu's width, shortcuts, checkable items, soft rules between groups and a danger zone. `--inset` sets the rows in from the frame, each rounded. Positioned with CSS anchor positioning. `--context` is the same menu opened at the pointer (right-click, long press, Shift+F10) on whatever names it with `data-fh-context`, with submenus. `--tiles` is a wide menu of tiles: a mono caps head with a status pill, labelled tile grids run edge to edge, an etched pill action and an ask row that opens into a short form.

```html
<!-- DRP-1.1 · Default › Default -->
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

<!-- DRP-1.2 · Default › Inset -->
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

<!-- DRP-2.1 · Tile menu › Tile menu -->
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

<!-- DRP-3.1 · Context menu › Context menu -->
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

Native `<dialog>` and popovers, with enter and exit animations from `@starting-style`. A toast is neutral, success or danger: a title, an optional muted description, and an optional action that is the text link.

```html
<div class="fh-cluster" style="--fh-gap: var(--fh-space-4)">
  <button class="fh-button" type="button" data-open-dialog="demo-dialog" data-fh="BTN">Open dialog</button>
  <button class="fh-button fh-button--secondary" type="button" popovertarget="demo-menu" style="anchor-name: --demo-menu" data-fh="BTN-1.5">Open menu</button>
  <button class="fh-button fh-button--ghost" type="button" data-toast="Saved. We'll be in touch within a day." data-fh="BTN-2.2">Show toast</button>
</div>
<div class="fh-stack" style="--fh-gap: var(--fh-gap-grouped)">
  <div class="fh-toast" data-tone="neutral" role="status" data-fh="DLG">
    <div class="fh-toast__body" data-fh-slot="body">
      <p>Saved.</p>
    </div>
    <button class="fh-close" type="button" aria-label="Dismiss" data-fh-slot="actions"></button>
  </div>
  <div class="fh-toast" data-tone="success" role="status" data-fh="DLG">
    <div class="fh-toast__body" data-fh-slot="body">
      <p>Published to X</p>
      <a class="fh-link fh-toast__action" data-fh="ACT-2.1" data-fh-slot="actions" href="https://x.com" target="_blank" rel="noreferrer">View on X</a>
    </div>
    <button class="fh-close" type="button" aria-label="Dismiss" data-fh-slot="actions"></button>
  </div>
  <div class="fh-toast" data-tone="danger" role="alert" data-fh="DLG">
    <div class="fh-toast__body" data-fh-slot="body">
      <p>Could not publish</p>
      <p class="fh-toast__description">The post did not go out. Try again in a moment.</p>
    </div>
    <button class="fh-close" type="button" aria-label="Dismiss" data-fh-slot="actions"></button>
  </div>
</div>
<div id="demo-menu" popover class="fh-menu" style="position-anchor: --demo-menu" data-fh="DRP-1.1">
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
    <div class="fh-dialog__body" data-fh-slot="body">
      <p class="fh-body">Tell us where it hurts and we'll tell you if we can help. If we can't, we'll say so.</p>
    </div>
    <div class="fh-dialog__footer">
      <button class="fh-button fh-button--secondary" value="cancel" data-fh="BTN-1.5" data-fh-slot="actions">Not now</button>
      <button class="fh-button" value="ok" data-fh="BTN" data-fh-slot="actions">Pick a time</button>
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

Two banners on one recipe, the etched frost at one outer size: a plain line with a link, and the announcement with a tag, the news in bold and its links as ruled cells down the end, the last filled in the tone. Then an empty state on the hatch.

```html
<!-- EMP-1.1 · Banner › Banner -->
<div class="fh-banner" data-tone="accent" data-fh="EMP-1.1"><span>Themes now switch with one attribute.</span><a href="#top">Read the notes</a></div>

<!-- EMP-1.2 · Banner › Announcement banner -->
<aside class="fh-banner fh-banner--announce" data-tone="accent" aria-label="Announcement" data-fh="EMP-1.2">
  <span class="fh-banner__tag" data-fh-slot="chips">Announcing</span>
  <p class="fh-banner__text"><b>Firehorse v1.1</b><span>The flagship design system from Rascode and Company</span></p>
  <nav class="fh-banner__actions" aria-label="Announcement links"><a href="#top">Read more<i class="fh-icon fh-icon--arrow-right" aria-hidden="true"></i></a><a class="fh-banner__cta" href="#top" data-fh-slot="actions">Become a Pro<i class="fh-icon fh-icon--arrow-up-right" aria-hidden="true"></i></a></nav>
</aside>

<!-- EMP-2.1 · Empty › Empty -->
<div class="fh-empty" data-tone="violet" data-fh="EMP-2.1">
  <span class="fh-empty__icon" data-fh-slot="icon">∅</span>
  <h4>No leads yet</h4>
  <p>When your agent answers its first inquiry, it will show up here with the transcript and the next step.</p>
  <a class="fh-button fh-button--secondary" href="#c-feedback" data-fh="BTN-1.5" data-fh-slot="actions">Send a test lead</a>
</div>
```

### AVT · Avatars

Shapes, sizes and presence, rings and halos, generated avatars, kinds (shape by what the avatar stands for) and groups.

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

<!-- AVT-6.1 · Kinds › Kinds · light -->
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

<!-- AVT-6.2 · Kinds › Kinds · dark -->
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

### AUT · Sign in & sign up

Four layouts, all container-sized. Split puts the art beside the form and moves it on top in narrow slots; Card floats the form over full-bleed art; Glass frosts the form over the art; Plain is the form alone.

```html
<!-- AUT-1.1 · Layouts › Split · etched art -->
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

<!-- AUT-1.2 · Layouts › Card · full-bleed art -->
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

<!-- AUT-1.3 · Layouts › Plain · no art -->
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

<!-- AUT-1.4 · Layouts › Glass · frosted over art -->
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

<!-- AUT-2.1 · Method › Method · password or email link -->
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

### FLD · Fields

The "Required" chip comes from the input's own `required` attribute and settles to "Done" once the field is valid. Errors only show after the visitor has interacted, or at once with `aria-invalid="true"` (for errors the server sends back).

```html
<!-- FLD-1.1 · Fields › Fields -->
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

<!-- FLD-2.1 · Dictation › Dictation -->
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

<!-- FLD-2.2 · Dictation › Dictation, icons -->
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

<!-- FLD-3.1 · Quiet › Quiet -->
<div class="fh-field fh-field--quiet" data-fh="FLD-3.1">
  <label for="f-quiet">Notes</label>
  <textarea class="fh-textarea" id="f-quiet" placeholder="Optional detail" data-fh="FLD"></textarea>
</div>

<!-- FLD-4.1 · Password reveal › Password reveal -->
<div class="fh-field" data-fh="FLD-4.1">
  <label for="f-reveal">Password</label>
  <div class="fh-input-group" data-fh="FLD">
    <input class="fh-input" id="f-reveal" name="password" type="password" autocomplete="off" value="correct horse battery" data-fh="FLD">
    <button class="fh-input-reveal" type="button" aria-label="Show password" aria-pressed="false"></button>
  </div>
</div>
```

### SEG · Segment switch

One etched pill of choices, or a toggle between two states. The switch is links or buttons with one current, and its entity chips match it. Every variant sets its text at one size; add `fh-segment--lg` to any of them for a step up; the rolling toggle is a single solid pill whose word rolls to the other state; the mode toggle fills the pressed button, as in the dictation field's Text | Transcribe, with or without an icon before each label.

```html
<!-- SEG-1.1 · Switch › Switch -->
<nav class="fh-segment" aria-label="Segment" data-fh="SEG-1.1">
  <a href="#c-segment" aria-current="true">All <b>9</b></a>
  <a href="#c-segment" data-tone="amber">Business <b>5</b></a>
  <a href="#c-segment" data-tone="sky">Personal <b>4</b></a>
</nav>

<!-- SEG-1.2 · Switch › Entities -->
<nav class="fh-segment fh-segment--entities" aria-label="Business" data-fh="SEG-1.2">
  <a href="#c-segment" aria-current="true">All businesses</a>
  <a href="#c-segment" data-tone="orange">Rascode</a>
  <a href="#c-segment" data-tone="violet">Lymynal</a>
</nav>

<!-- SEG-2.1 · Toggle › Rolling toggle -->
<button class="fh-segment fh-segment--roll" type="button" aria-pressed="false" aria-label="Dark mode" onclick="this.setAttribute('aria-pressed', String(this.getAttribute('aria-pressed') !== 'true'))" data-fh="SEG-2.1"><span class="fh-segment__roll" aria-hidden="true"><span>Light</span><span>Dark</span></span></button>

<!-- SEG-2.2 · Toggle › Mode toggle -->
<div class="fh-segment fh-segment--mode" role="group" aria-label="Input" onclick="const b = event.target.closest('button'); if (b) for (const x of this.querySelectorAll('button')) x.setAttribute('aria-pressed', String(x === b))" data-fh="SEG-2.2">
  <button type="button" aria-pressed="true">Text</button>
  <button type="button" aria-pressed="false">Transcribe</button>
</div>

<!-- SEG-2.3 · Toggle › Mode toggle, icons -->
<div class="fh-segment fh-segment--mode" role="group" aria-label="Input" onclick="const b = event.target.closest('button'); if (b) for (const x of this.querySelectorAll('button')) x.setAttribute('aria-pressed', String(x === b))" data-fh="SEG-2.3">
  <button type="button" aria-pressed="true"><i class="fh-icon fh-icon--keyboard" aria-hidden="true"></i>Text</button>
  <button type="button" aria-pressed="false"><i class="fh-icon fh-icon--mic" aria-hidden="true"></i>Transcribe</button>
</div>
```

### CHO · Choices

Real radios and checkboxes under the styling, so they submit with the form and work with the keyboard. The segmented switch stays a row in a phone-width slot; add `fh-segmented--stack` to stack its options.

```html
<!-- CHO-1.1 · Choice row › Several -->
<div class="fh-choice-row" role="group" aria-label="Days" onclick="const b = event.target.closest('.fh-choice'); if (b) b.setAttribute('aria-pressed', b.getAttribute('aria-pressed') !== 'true')" data-fh="CHO-1.1">
  <button class="fh-choice" type="button" data-tone="lime" aria-pressed="true">Mon</button>
  <button class="fh-choice" type="button" data-tone="lime" aria-pressed="true">Wed</button>
  <button class="fh-choice" type="button" data-tone="lime" aria-pressed="false">Fri</button>
  <button class="fh-choice" type="button" data-tone="lime" aria-pressed="false">Sun</button>
</div>

<!-- CHO-1.2 · Choice row › One of many -->
<div class="fh-choice-row" role="radiogroup" aria-label="Area" onclick="const b = event.target.closest('.fh-choice'); if (b) for (const x of this.querySelectorAll('.fh-choice')) x.setAttribute('aria-checked', x === b)" data-fh="CHO-1.2">
  <button class="fh-choice" type="button" role="radio" data-tone="lime" aria-checked="true">Health</button>
  <button class="fh-choice" type="button" role="radio" data-tone="sky" aria-checked="false">Work</button>
  <button class="fh-choice" type="button" role="radio" data-tone="amber" aria-checked="false">Money</button>
  <button class="fh-choice" type="button" role="radio" data-tone="violet" aria-checked="false">Home</button>
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
    <div class="fh-field" data-tone="lime" data-fh="FLD-4.1"><label for="fx-budget">Monthly budget</label><input class="fh-range" id="fx-budget" type="range" min="500" max="5000" step="100" value="1700" data-fh="UPL"></div>
    <div class="fh-field fh-field--optional" data-fh="FLD-4.1"><label for="fx-tags">Channels</label>
      <div class="fh-tags" data-fh="TAG">
        <span class="fh-chip" data-tone="sky" data-fh="CHP">Messenger <button class="fh-chip__remove" type="button" aria-label="Remove Messenger"></button></span>
        <span class="fh-chip" data-tone="lime" data-fh="CHP">WhatsApp <button class="fh-chip__remove" type="button" aria-label="Remove WhatsApp"></button></span>
        <input id="fx-tags" placeholder="Add a channel">
      </div>
    </div>
    <button class="fh-button fh-button--secondary" type="button" data-open-dialog="demo-sheet" data-fh="BTN-1.5">Open side sheet</button>
  </div>
</div>
<dialog class="fh-dialog fh-dialog--sheet" id="demo-sheet" aria-labelledby="demo-sheet-title" data-fh="DLG">
  <form method="dialog">
    <div class="fh-dialog__header"><h3 class="fh-subheading" id="demo-sheet-title">Agent settings</h3><button class="fh-close" value="cancel" aria-label="Close"></button></div>
    <div class="fh-dialog__body fh-stack">
      <label class="fh-check" data-fh="CHO" data-fh-slot="body"><input class="fh-switch" type="checkbox" role="switch" checked data-fh="SEG"> Answer after hours</label>
      <label class="fh-check" data-fh="CHO" data-fh-slot="body"><input class="fh-switch" type="checkbox" role="switch" data-fh="SEG"> Voice replies</label>
      <dl class="fh-dl"><div><dt>Agent</dt><dd>Wes</dd></div><div><dt>Plan</dt><dd>Monthly</dd></div></dl>
    </div>
    <div class="fh-dialog__footer"><button class="fh-button" value="ok" data-fh="BTN" data-fh-slot="actions">Save</button></div>
  </form>
</dialog>
```

### TAG · Tag field

Toned chips with a remove button and an input in one field. The inline variant adds no chrome until it is used: a text link with no tags, then a small round plus that opens room for one more.

```html
<!-- TAG-1.1 · Field › Field -->
<div class="fh-field fh-field--optional" data-fh="TAG-1.1"><label for="tg-channels">Channels</label>
  <div class="fh-tags" data-fh="TAG">
    <span class="fh-chip" data-tone="sky" data-fh="CHP">Messenger <button class="fh-chip__remove" type="button" aria-label="Remove Messenger"></button></span>
    <span class="fh-chip" data-tone="lime" data-fh="CHP">WhatsApp <button class="fh-chip__remove" type="button" aria-label="Remove WhatsApp"></button></span>
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
  <span class="fh-chip" data-tone="orange" data-fh="CHP">applications <button class="fh-chip__remove" type="button" aria-label="Remove applications"></button></span>
  <span class="fh-chip" data-tone="lime" data-fh="CHP">health <button class="fh-chip__remove" type="button" aria-label="Remove health"></button></span>
  <button class="fh-tags__add" type="button" aria-label="Add a tag"></button>
</div>

<!-- TAG-2.4 · Inline › Inline · link entry -->
<div class="fh-tags fh-tags--inline" data-fh="TAG-2.4">
  <span class="fh-chip" data-tone="sky" data-fh="CHP">utbms.com <button class="fh-chip__remove" type="button" aria-label="Remove utbms.com"></button></span>
  <span class="fh-tags__entry"><button class="fh-tags__prefix" type="button" aria-label="Protocol: https, click for http">https://</button><input aria-label="Link" placeholder="example.com/page"></span>
</div>
```

### DTB · Datatable

Fields and rows in, a database out: search, filters, multi-sort, grouping with totals, three views and expandable rows. Every value is drawn by the data display contract (`renderValue()`, the Values parts): status as dot and word in a cell and a chip on a card or lane, money with its currency, people as avatars. Rest on a header, or press its Display as button, to show that column another way the contract allows; your pick stays in this browser. `expand: true` opens a row's other fields under it as a record table.

```html
<!-- DTB-1.1 · Datatable › Datatable -->
<div class="fh-dt" id="pipeline" style="--fh-dt-height: 36rem" data-tone="sky" aria-label="Client pipeline (sample data)" data-fh="DTB-1.1"></div>
```

### TBL · Table

Static markup, or `table.js` from the same fields and rows the datatable takes (fields mode, no toolbar): every cell a Values part, each header naming its field and each cell its raw value, so any viewer can re-display a column from its Display as button. With `fh-table--reflow`, rows turn into labelled cards when the slot is under 36rem. `fh-table__head` in the caption is a title with a count chip.

```html
<!-- TBL-1.1 · Table › Table -->
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

<!-- TBL-2.1 · Caption head › Caption head -->
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

<!-- TBL-3.1 · Record table › Read -->
<dl class="fh-record-table fh-record-table--read" aria-label="Parcel" data-fh-was="KVL-1.1" data-fh="TBL-3.1">
  <div data-fh-field="county" data-semantic="short_text"><dt>County</dt><dd data-fh-value="&quot;Travis&quot;"><span class="fh-value fh-value--line" data-fh="VAL-11.5" data-fh-slot="value"><span class="fh-value__name">Travis</span></span></dd></div>
  <div data-fh-field="parcel" data-semantic="external_id"><dt data-fh-colmenu-host><span class="fh-roll">Parcel</span><button class="fh-colmenu__button" type="button" aria-haspopup="menu" aria-expanded="false" data-fh-colmenu="parcel" aria-label="Display Parcel as" title="Display as" data-fh-slot="actions"></button></dt><dd data-fh-value="&quot;0219-0402-11&quot;"><span class="fh-value fh-value--copyable" data-fh="VAL-11.8" data-fh-slot="value"><code class="fh-kbd" title="0219-0402-11">0219-0402-11</code><button class="fh-value__action" type="button" aria-label="Copy Parcel" title="Copy" onclick="navigator.clipboard?.writeText(this.previousElementSibling.title)"><i class="fh-icon fh-icon--copy" aria-hidden="true"></i></button></span></dd></div>
  <div data-fh-field="built" data-fh-field-json="{&quot;shape&quot;:&quot;number&quot;,&quot;kind&quot;:&quot;id&quot;}"><dt>Year built</dt><dd data-fh-value="1987"><span class="fh-value fh-value--plain fh-value--tabular" data-fh="VAL-6.1" data-fh-slot="value">1987</span></dd></div>
  <div data-fh-field="lot" data-fh-field-json="{&quot;shape&quot;:&quot;number&quot;,&quot;unit&quot;:&quot;ac&quot;}"><dt data-fh-colmenu-host><span class="fh-roll">Lot</span><button class="fh-colmenu__button" type="button" aria-haspopup="menu" aria-expanded="false" data-fh-colmenu="lot" aria-label="Display Lot as" title="Display as" data-fh-slot="actions"></button></dt><dd data-fh-value="0.21"><span class="fh-value fh-value--unit fh-value--tabular" data-fh="VAL-6.2" data-fh-slot="value">0.21<span class="fh-value__sub">ac</span></span></dd></div>
  <div data-fh-field="zoning" data-fh-field-json="{&quot;shape&quot;:&quot;option&quot;,&quot;options&quot;:[{&quot;value&quot;:&quot;r1&quot;,&quot;label&quot;:&quot;R-1 residential&quot;,&quot;tone&quot;:&quot;teal&quot;},{&quot;value&quot;:&quot;c2&quot;,&quot;label&quot;:&quot;C-2 commercial&quot;,&quot;tone&quot;:&quot;violet&quot;}]}"><dt data-fh-colmenu-host><span class="fh-roll">Zoning</span><button class="fh-colmenu__button" type="button" aria-haspopup="menu" aria-expanded="false" data-fh-colmenu="zoning" aria-label="Display Zoning as" title="Display as" data-fh-slot="actions"></button></dt><dd data-fh-value="&quot;r1&quot;"><span class="fh-value fh-value--chip" data-fh="VAL-1.2" data-fh-slot="value"><span class="fh-chip fh-chip--tone fh-chip--sm" data-tone="teal" data-fh="CHP">R-1 residential</span></span></dd></div>
</dl>

<!-- TBL-3.2 · Record table › Fields -->
<dl class="fh-record-table fh-record-table--fields" aria-label="Business" data-fh-was="KVL-1.2" data-fh="TBL-3.2">
  <div data-fh-field="legal" data-semantic="legal_name"><dt><label for="rt-fields-legal">Legal name</label></dt><dd data-fh-value="&quot;Acme Supply Co. LLC&quot;"><div class="fh-value fh-value--input fh-value--field" data-mode="edit" data-fh="VAL-11.6" data-fh-slot="value"><input class="fh-input" type="text" value="Acme Supply Co. LLC" name="legal" id="rt-fields-legal" aria-label="Legal name" data-fh="FLD"></div></dd></div>
  <div data-fh-field="dba" data-semantic="short_text"><dt><label for="rt-fields-dba">DBA</label></dt><dd data-fh-value="&quot;Acme&quot;"><div class="fh-value fh-value--input fh-value--field" data-mode="edit" data-fh="VAL-11.6" data-fh-slot="value"><input class="fh-input" type="text" value="Acme" name="dba" id="rt-fields-dba" aria-label="DBA" data-fh="FLD"></div></dd></div>
  <div data-fh-field="email" data-semantic="email"><dt><label for="rt-fields-email">Billing email</label></dt><dd data-fh-value="&quot;billing@acme.example&quot;"><div class="fh-value fh-value--email-input fh-value--field" data-mode="edit" data-fh="VAL-9.7" data-fh-slot="value"><input class="fh-input" type="email" value="billing@acme.example" name="email" id="rt-fields-email" aria-label="Billing email" data-fh="FLD"></div></dd></div>
  <div data-fh-field="priority" data-semantic="priority"><dt><label for="rt-fields-priority">Priority</label></dt><dd data-fh-value="&quot;medium&quot;"><div class="fh-value fh-value--segmented" data-mode="edit" data-fh="VAL-1.5" data-fh-slot="value"><div class="fh-segment fh-segment--mode" role="group" aria-label="Priority" onclick="const b = event.target.closest('button'); if (b &amp;&amp; !b.disabled) for (const x of this.querySelectorAll('button')) x.setAttribute('aria-pressed', String(x === b))" data-fh="SEG-2"><button type="button" value="low" aria-pressed="false">Low</button><button type="button" value="medium" aria-pressed="true">Medium</button><button type="button" value="high" aria-pressed="false">High</button><button type="button" value="urgent" aria-pressed="false">Urgent</button></div></div></dd></div>
  <div data-fh-field="billable" data-semantic="checkbox"><dt><label for="rt-fields-billable">Billable</label></dt><dd data-fh-value="true"><span class="fh-value fh-value--switch" data-mode="edit" data-fh="VAL-10.4" data-fh-slot="value"><label class="fh-check" data-fh="CHO"><input class="fh-switch" role="switch" type="checkbox" checked name="billable" aria-label="Billable" data-fh="SEG"></label></span></dd></div>
  <div class="fh-record-table__full" data-fh-field="about" data-semantic="description"><dt><label for="rt-fields-about">About</label></dt><dd data-fh-value="&quot;Tools and parts for small builders.&quot;"><div class="fh-value fh-value--textarea fh-value--field" data-mode="edit" data-fh="VAL-11.4" data-fh-slot="value"><textarea class="fh-textarea" rows="4" name="about" id="rt-fields-about" aria-label="About" data-fh="FLD">Tools and parts for small builders.</textarea></div></dd></div>
</dl>

<!-- TBL-3.3 · Record table › Mixed -->
<dl class="fh-record-table fh-record-table--mixed" aria-label="Property" data-fh-was="KVL-1.3" data-fh="TBL-3.3">
  <div class="fh-record-table__full" data-fh-field="owner" data-semantic="owner_reference"><dt data-fh-colmenu-host><span class="fh-roll">Owner</span><button class="fh-colmenu__button" type="button" aria-haspopup="menu" aria-expanded="false" data-fh-colmenu="owner" aria-label="Display Owner as" title="Display as" data-fh-slot="actions"></button></dt><dd data-fh-value="{&quot;label&quot;:&quot;Maple Row Holdings LLC&quot;,&quot;description&quot;:&quot;Owner of record&quot;,&quot;initials&quot;:&quot;MR&quot;,&quot;tone&quot;:&quot;teal&quot;}"><div class="fh-value fh-value--full" data-fh="VAL-3.5" data-fh-slot="value"><span class="fh-entity" data-fh="ENT"><span class="fh-avatar fh-avatar--circle" data-tone="teal" aria-hidden="true" data-fh="AVT">MR</span><span class="fh-entity__who"><b>Maple Row Holdings LLC</b><small>Owner of record</small></span></span></div></dd></div>
  <div data-fh-field="since" data-fh-field-json="{&quot;shape&quot;:&quot;number&quot;,&quot;kind&quot;:&quot;id&quot;}"><dt>Since</dt><dd data-fh-value="2016"><span class="fh-value fh-value--plain fh-value--tabular" data-fh="VAL-6.1" data-fh-slot="value">2016</span></dd></div>
  <div data-fh-field="mortgage" data-semantic="fiat_amount" data-fh-field-json="{&quot;currency&quot;:&quot;USD&quot;}"><dt data-fh-colmenu-host><span class="fh-roll">Mortgage</span><button class="fh-colmenu__button" type="button" aria-haspopup="menu" aria-expanded="false" data-fh-colmenu="mortgage" aria-label="Display Mortgage as" title="Display as" data-fh-slot="actions"></button></dt><dd data-fh-value="212400"><span class="fh-value fh-value--amount-code fh-value--tabular fh-value--mono" data-fh="VAL-4.2" data-fh-slot="value"><data value="212400.00">$212,400.00</data><abbr class="fh-value__sub" title="US Dollar">USD</abbr></span></dd></div>
  <div data-fh-field="liens" data-semantic="short_text"><dt>Liens</dt><dd data-fh-value="&quot;None found&quot;"><span class="fh-value fh-value--line" data-fh="VAL-11.5" data-fh-slot="value"><span class="fh-value__name">None found</span></span></dd></div>
  <div data-fh-field="status" data-semantic="status"><dt data-fh-colmenu-host><span class="fh-roll">Status</span><button class="fh-colmenu__button" type="button" aria-haspopup="menu" aria-expanded="false" data-fh-colmenu="status" aria-label="Display Status as" title="Display as" data-fh-slot="actions"></button></dt><dd data-fh-value="&quot;active&quot;"><span class="fh-value fh-value--chip" data-fh="VAL-1.2" data-fh-slot="value"><span class="fh-chip fh-chip--tone fh-chip--sm" data-tone="sky" data-fh="CHP">Active</span></span></dd></div>
  <div class="fh-record-table__full" data-fh-field="files" data-semantic="document_file" data-fh-field-json="{&quot;multiple&quot;:true}"><dt data-fh-colmenu-host><span class="fh-roll">Files</span><button class="fh-colmenu__button" type="button" aria-haspopup="menu" aria-expanded="false" data-fh-colmenu="files" aria-label="Display Files as" title="Display as" data-fh-slot="actions"></button></dt><dd data-fh-value="[{&quot;name&quot;:&quot;deed.pdf&quot;,&quot;size&quot;:218000},{&quot;name&quot;:&quot;survey.png&quot;,&quot;size&quot;:64000}]"><div class="fh-value fh-value--file-row" data-fh="VAL-8.4" data-fh-slot="value"><ul class="fh-files" data-fh="SFL-2.1"><li><span><i class="fh-icon fh-icon--file-text" aria-hidden="true"></i><span>deed.pdf</span><small>213 KB</small></span></li><li><span><i class="fh-icon fh-icon--image" aria-hidden="true"></i><span>survey.png</span><small>63 KB</small></span></li></ul></div></dd></div>
  <div class="fh-record-table__full" data-fh-field="legal" data-semantic="description"><dt data-fh-colmenu-host><span class="fh-roll">Legal description</span><button class="fh-colmenu__button" type="button" aria-haspopup="menu" aria-expanded="false" data-fh-colmenu="legal" aria-label="Display Legal description as" title="Display as" data-fh-slot="actions"></button></dt><dd data-fh-value="&quot;Lot 4, Block B, Cedar Ridge Section 2, a subdivision in Travis County, Texas&quot;"><div class="fh-value fh-value--prose" data-fh="VAL-11.3" data-fh-slot="value"><p>Lot 4, Block B, Cedar Ridge Section 2, a subdivision in Travis County, Texas</p></div></dd></div>
</dl>

<!-- TBL-3.5 · Record table › Stacked -->
<dl class="fh-record-table fh-record-table--stacked" aria-label="Subscription" data-fh="TBL-3.5">
  <div data-fh-field="plan" data-semantic="short_text"><dt>Plan</dt><dd data-fh-value="&quot;Agents · Monthly&quot;"><span class="fh-value fh-value--line" data-fh="VAL-11.5" data-fh-slot="value"><span class="fh-value__name">Agents · Monthly</span></span></dd></div>
  <div data-fh-field="renews" data-semantic="date"><dt data-fh-colmenu-host><span class="fh-roll">Renews</span><button class="fh-colmenu__button" type="button" aria-haspopup="menu" aria-expanded="false" data-fh-colmenu="renews" aria-label="Display Renews as" title="Display as" data-fh-slot="actions"></button></dt><dd data-fh-value="&quot;2026-11-28&quot;"><span class="fh-value fh-value--date" data-fh="VAL-7.1" data-fh-slot="value"><time datetime="2026-11-28">Nov 28, 2026</time></span></dd></div>
  <div data-fh-field="channels" data-fh-field-json="{&quot;shape&quot;:&quot;options&quot;,&quot;options&quot;:[{&quot;value&quot;:&quot;messenger&quot;,&quot;label&quot;:&quot;Messenger&quot;,&quot;tone&quot;:&quot;sky&quot;},{&quot;value&quot;:&quot;whatsapp&quot;,&quot;label&quot;:&quot;WhatsApp&quot;,&quot;tone&quot;:&quot;lime&quot;},{&quot;value&quot;:&quot;sms&quot;,&quot;label&quot;:&quot;SMS&quot;,&quot;tone&quot;:&quot;teal&quot;}]}"><dt data-fh-colmenu-host><span class="fh-roll">Channels</span><button class="fh-colmenu__button" type="button" aria-haspopup="menu" aria-expanded="false" data-fh-colmenu="channels" aria-label="Display Channels as" title="Display as" data-fh-slot="actions"></button></dt><dd data-fh-value="[&quot;messenger&quot;,&quot;whatsapp&quot;,&quot;sms&quot;]"><span class="fh-value fh-value--chips-inline" data-fh="VAL-2.2" data-fh-slot="value"><span class="fh-chips" data-fh="CHP"><span class="fh-chip fh-chip--sm" data-tone="sky" data-fh="CHP">Messenger</span><span class="fh-chip fh-chip--sm" data-tone="lime" data-fh="CHP">WhatsApp</span><span class="fh-chip fh-chip--sm" data-tone="teal" data-fh="CHP">SMS</span></span></span></dd></div>
</dl>

<!-- TBL-4.1 · Row spacing › Row spacing -->
<fieldset class="fh-segmented fh-segmented--sm" data-fh-was="KVL-2.1" data-fh="TBL-4.1">
  <legend class="fh-sr-only">Row spacing</legend>
  <label><input type="radio" name="rt-rows" value="sm" data-fh-rows-select> S</label>
  <label><input type="radio" name="rt-rows" value="md" data-fh-rows-select checked> M</label>
  <label><input type="radio" name="rt-rows" value="lg" data-fh-rows-select> L</label>
  <label><input type="radio" name="rt-rows" value="xl" data-fh-rows-select> XL</label>
</fieldset>
```

### MET · Metric tiles

Drawn from data by `metrics.js`: the figure, its delta, a ratio and the people come from the data display contract's metric context, so an amount reads $48.2K with its change, a share is a ring, a bar or a meter against its target, and a team is a count beside its avatars. One fact per tile: label with an icon, the value, a line under it and where it came from. As many across as fit. Add an `fh-progress` for a share done, `--needed` for a fact still to fill in, or make the tile an `<a>` to open its area. `--spread` puts the label and description at the top and the value at the bottom, with a wide gap. `__row` holds avatars, counts and chips. `__more` is an etched line with a chevron: open, the tile grows in place and shows its detail, so the chevron stays under the pointer; use `--full` when the detail needs room. `__delta` shows the change (`data-trend`; `data-good="down"` where down is good), and a sparkline, ring or meter drops in as it is.

```html
<!-- MET-1.1 · Metric tile › Metric -->
<article class="fh-metric" data-tone="teal" data-fh-slot="items" data-fh="MET-1.1">
  <p class="fh-metric__label"><span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--building-2" aria-hidden="true"></i></span>Structure</p>
  <p class="fh-metric__sub" data-fh-slot="sub">Formed 2019 · Delaware</p>
  <div class="fh-metric__figure"><p class="fh-metric__value"><span class="fh-value fh-value--line" data-fh="VAL-11.5" data-fh-slot="value"><span class="fh-value__name">LLC</span></span></p></div>
  <p class="fh-metric__source" data-fh-slot="source">State records</p>
</article>

<!-- MET-1.2 · Metric tile › Progress -->
<article class="fh-metric" data-tone="lime" data-fh-slot="items" data-fh="MET-1.2">
  <p class="fh-metric__label"><span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--credit-card" aria-hidden="true"></i></span>Stripe</p>
  <p class="fh-metric__sub" data-fh-slot="sub">Next: bank account</p>
  <p class="fh-metric__value"><span class="fh-value fh-value--text fh-value--tabular" data-fh="VAL-5.1" data-fh-slot="value">82%</span></p>
  <span class="fh-value fh-value--bar" data-tone="lime" data-fh="VAL-5.2" data-fh-slot="value"><progress class="fh-progress" value="82" max="100" data-fh="FBK">82%</progress><b>82%</b></span>
</article>

<!-- MET-1.3 · Metric tile › Needed -->
<article class="fh-metric fh-metric--needed" data-fh-slot="items" data-fh="MET-1.3">
  <p class="fh-metric__label"><span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--receipt" aria-hidden="true"></i></span>EIN</p>
  <p class="fh-metric__sub" data-fh-slot="sub">For Stripe and PayPal</p>
  <div class="fh-metric__figure"><p class="fh-metric__value"><span class="fh-value fh-value--line" data-fh="VAL-11.5" data-fh-slot="value"><span class="fh-value__name">Needed</span></span></p></div>
</article>

<!-- MET-1.4 · Metric tile › Link -->
<a class="fh-metric" data-tone="sky" href="#a-metric" data-fh-slot="items" data-fh="MET-1.4">
  <p class="fh-metric__label"><span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--users" aria-hidden="true"></i></span>Faces</p>
  <p class="fh-metric__sub" data-fh-slot="sub">2 public</p>
  <div class="fh-metric__figure"><p class="fh-metric__value"><span class="fh-value fh-value--plain-delta fh-value--tabular" data-fh="VAL-6.4" data-fh-slot="value">4</span></p></div>
</a>

<!-- MET-1.5 · Metric tile › Spread -->
<article class="fh-metric fh-metric--spread" data-tone="fuchsia" data-fh-slot="items" data-fh="MET-1.5">
  <p class="fh-metric__label"><span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--shield-check" aria-hidden="true"></i></span>Payment readiness</p>
  <p class="fh-metric__sub" data-fh-slot="sub">What Stripe still needs before payouts</p>
  <p class="fh-metric__value"><span class="fh-value fh-value--text fh-value--tabular" data-fh="VAL-5.1" data-fh-slot="value">27%</span></p>
  <span class="fh-value fh-value--bar" data-tone="fuchsia" data-fh="VAL-5.2" data-fh-slot="value"><progress class="fh-progress" value="27" max="100" data-fh="FBK">27%</progress><b>27%</b></span>
</article>

<!-- MET-1.6 · Metric tile › People -->
<article class="fh-metric" data-tone="violet" data-fh-slot="items" data-fh="MET-1.6">
  <p class="fh-metric__label"><span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--users" aria-hidden="true"></i></span>Team</p>
  <div class="fh-metric__figure"><p class="fh-metric__value"><span class="fh-value fh-value--plain fh-value--tabular" data-fh="VAL-6.1" data-fh-slot="value">4</span></p><span class="fh-value fh-value--stack" data-fh="VAL-3.7" data-fh-slot="value"><span class="fh-avatars" role="group" aria-label="Team: Ava, Cole, Maya, Ray" data-fh="AVT"><span class="fh-avatar fh-avatar--circle" data-fh="AVT"><img src="/img/avatars/ava.webp" alt="Ava Mendes"></span><span class="fh-avatar fh-avatar--circle" data-fh="AVT"><img src="/img/avatars/cole.webp" alt="Cole Hart"></span><span class="fh-avatar fh-avatar--circle" data-fh="AVT"><img src="/img/avatars/maya.webp" alt="Maya Lin"></span><span class="fh-avatar fh-avatar--circle" data-fh="AVT"><img src="/img/avatars/ray.webp" alt="Ray Okafor"></span></span></span></div>
  <p class="fh-metric__source" data-fh-slot="source">People</p>
</article>

<!-- MET-1.7 · Metric tile › Expand -->
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

<!-- MET-1.8 · Metric tile › Trend -->
<article class="fh-metric" data-tone="lime" data-fh-slot="items" data-fh="MET-1.8">
  <p class="fh-metric__label"><span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--dollar-sign" aria-hidden="true"></i></span>Revenue · 30 d</p>
  <p class="fh-metric__sub" data-fh-slot="sub">vs September</p>
  <div class="fh-metric__figure"><p class="fh-metric__value"><span class="fh-value fh-value--compact-delta fh-value--tabular fh-value--mono" data-fh="VAL-4.5" data-fh-slot="value"><data value="48210" title="$48,210.00 USD">$48.2K</data><span class="fh-metric__delta" data-trend="up" aria-label="Up $5.2K">$5.2K</span></span></p></div>
</article>

<!-- MET-1.9 · Metric tile › Trend · down is good -->
<article class="fh-metric" data-tone="sky" data-good="down" data-fh-slot="items" data-fh="MET-1.9">
  <p class="fh-metric__label"><span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--trending-down" aria-hidden="true"></i></span>Churn</p>
  <p class="fh-metric__sub" data-fh-slot="sub">Percent of accounts, down is good here</p>
  <div class="fh-metric__figure"><p class="fh-metric__value"><span class="fh-value fh-value--plain-delta fh-value--tabular" data-fh="VAL-6.4" data-fh-slot="value">2.1<span class="fh-metric__delta" data-trend="down" data-good="down" aria-label="Down 0.4, down is good">0.4</span></span></p></div>
</article>

<!-- MET-1.10 · Metric tile › Sparkline -->
<article class="fh-metric" data-tone="teal" data-fh-slot="items" data-fh="MET-1.10">
  <p class="fh-metric__label"><span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--chart-line" aria-hidden="true"></i></span>Orders · 12 wk</p>
  <div class="fh-metric__figure"><p class="fh-metric__value"><span class="fh-value fh-value--plain-delta fh-value--tabular" data-fh="VAL-6.4" data-fh-slot="value">42<span class="fh-metric__delta" data-trend="up" aria-label="Up 8">8</span></span></p><span class="fh-value fh-value--sparkline fh-value--tabular" data-tone="teal" data-fh="VAL-6.5" data-fh-slot="value"><svg class="fh-sparkline" viewBox="0 0 120 32" preserveAspectRatio="none" aria-hidden="true" data-fh="MET-4.1"><path d="M0.0 30.0 L10.9 24.9 L21.8 27.5 L32.7 19.8 L43.6 22.4 L54.5 14.7 L65.5 17.3 L76.4 9.6 L87.3 12.2 L98.2 4.5 L109.1 7.1 L120.0 2.0 L120 32 L0 32Z" fill="currentColor" opacity=".12"></path><path d="M0.0 30.0 L10.9 24.9 L21.8 27.5 L32.7 19.8 L43.6 22.4 L54.5 14.7 L65.5 17.3 L76.4 9.6 L87.3 12.2 L98.2 4.5 L109.1 7.1 L120.0 2.0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"></path></svg></span></div>
</article>

<!-- MET-1.11 · Metric tile › Gauge -->
<article class="fh-metric" data-tone="amber" data-fh-slot="items" data-fh="MET-1.11">
  <p class="fh-metric__label"><span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--gauge" aria-hidden="true"></i></span>Credit used</p>
  <p class="fh-metric__sub" data-fh-slot="sub">Target: under 50% of the line</p>
  <span class="fh-value fh-value--meter" data-tone="amber" data-fh="VAL-5.4" data-fh-slot="value"><span class="fh-gauge" style="--fh-value: 31" role="img" aria-label="31%, target 50%" data-fh="GAU-1"><b>31%</b><small>of 50%</small></span></span>
</article>

<!-- MET-2.1 · Spread tiles › Progress -->
<article class="fh-metric fh-metric--spread" data-tone="lime" data-fh-slot="items" data-fh="MET-2.1">
  <p class="fh-metric__label"><span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--credit-card" aria-hidden="true"></i></span>Stripe</p>
  <p class="fh-metric__sub" data-fh-slot="sub">Next: confirm the payout bank account</p>
  <p class="fh-metric__value"><span class="fh-value fh-value--text fh-value--tabular" data-fh="VAL-5.1" data-fh-slot="value">82%</span></p>
  <span class="fh-value fh-value--bar" data-tone="lime" data-fh="VAL-5.2" data-fh-slot="value"><progress class="fh-progress" value="82" max="100" data-fh="FBK">82%</progress><b>82%</b></span>
  <p class="fh-metric__source" data-fh-slot="source">9 of 11 facts</p>
</article>

<!-- MET-2.2 · Spread tiles › Trend -->
<article class="fh-metric fh-metric--spread" data-tone="teal" data-fh-slot="items" data-fh="MET-2.2">
  <p class="fh-metric__label"><span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--dollar-sign" aria-hidden="true"></i></span>Revenue · 30 d</p>
  <p class="fh-metric__sub" data-fh-slot="sub">All brands, after refunds</p>
  <div class="fh-metric__figure"><p class="fh-metric__value"><span class="fh-value fh-value--compact-delta fh-value--tabular fh-value--mono" data-fh="VAL-4.5" data-fh-slot="value"><data value="48210" title="$48,210.00 USD">$48.2K</data><span class="fh-metric__delta" data-trend="up" aria-label="Up $5.2K">$5.2K</span></span></p></div>
  <p class="fh-metric__source" data-fh-slot="source">vs September</p>
</article>

<!-- MET-2.3 · Spread tiles › Sparkline -->
<article class="fh-metric fh-metric--spread" data-tone="sky" data-fh-slot="items" data-fh="MET-2.3">
  <p class="fh-metric__label"><span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--chart-line" aria-hidden="true"></i></span>Orders</p>
  <p class="fh-metric__sub" data-fh-slot="sub">Last 12 weeks</p>
  <div class="fh-metric__figure"><p class="fh-metric__value"><span class="fh-value fh-value--plain-delta fh-value--tabular" data-fh="VAL-6.4" data-fh-slot="value">42<span class="fh-metric__delta" data-trend="up" aria-label="Up 8">8</span></span></p><span class="fh-value fh-value--sparkline fh-value--tabular" data-tone="sky" data-fh="VAL-6.5" data-fh-slot="value"><svg class="fh-sparkline" viewBox="0 0 120 32" preserveAspectRatio="none" aria-hidden="true" data-fh="MET-4.1"><path d="M0.0 30.0 L10.9 24.9 L21.8 27.5 L32.7 19.8 L43.6 22.4 L54.5 14.7 L65.5 17.3 L76.4 9.6 L87.3 12.2 L98.2 4.5 L109.1 7.1 L120.0 2.0 L120 32 L0 32Z" fill="currentColor" opacity=".12"></path><path d="M0.0 30.0 L10.9 24.9 L21.8 27.5 L32.7 19.8 L43.6 22.4 L54.5 14.7 L65.5 17.3 L76.4 9.6 L87.3 12.2 L98.2 4.5 L109.1 7.1 L120.0 2.0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"></path></svg></span></div>
  <p class="fh-metric__source" data-fh-slot="source">All channels</p>
</article>

<!-- MET-2.4 · Spread tiles › People -->
<article class="fh-metric fh-metric--spread" data-tone="violet" data-fh-slot="items" data-fh="MET-2.4">
  <p class="fh-metric__label"><span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--users" aria-hidden="true"></i></span>Team</p>
  <p class="fh-metric__sub" data-fh-slot="sub">Who can sign in and act for the business</p>
  <div class="fh-metric__figure"><p class="fh-metric__value"><span class="fh-value fh-value--plain fh-value--tabular" data-fh="VAL-6.1" data-fh-slot="value">4</span></p><span class="fh-value fh-value--stack" data-fh="VAL-3.7" data-fh-slot="value"><span class="fh-avatars" role="group" aria-label="Team: Ava, Cole, Maya, Ray" data-fh="AVT"><span class="fh-avatar fh-avatar--circle" data-fh="AVT"><img src="/img/avatars/ava.webp" alt="Ava Mendes"></span><span class="fh-avatar fh-avatar--circle" data-fh="AVT"><img src="/img/avatars/cole.webp" alt="Cole Hart"></span><span class="fh-avatar fh-avatar--circle" data-fh="AVT"><img src="/img/avatars/maya.webp" alt="Maya Lin"></span><span class="fh-avatar fh-avatar--circle" data-fh="AVT"><img src="/img/avatars/ray.webp" alt="Ray Okafor"></span></span></span></div>
  <p class="fh-metric__source" data-fh-slot="source">People</p>
</article>

<!-- MET-2.5 · Spread tiles › Tinted -->
<article class="fh-metric fh-metric--spread fh-metric--tinted" data-tone="orange" data-fh-slot="items" data-fh="MET-2.5">
  <p class="fh-metric__label"><span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--globe" aria-hidden="true"></i></span>Google profile</p>
  <p class="fh-metric__sub" data-fh-slot="sub">Next: opening hours for each location</p>
  <p class="fh-metric__value"><span class="fh-value fh-value--text fh-value--tabular" data-fh="VAL-5.1" data-fh-slot="value">45%</span></p>
  <span class="fh-value fh-value--bar" data-tone="orange" data-fh="VAL-5.2" data-fh-slot="value"><progress class="fh-progress" value="45" max="100" data-fh="FBK">45%</progress><b>45%</b></span>
  <p class="fh-metric__source" data-fh-slot="source">5 of 11 facts</p>
</article>

<!-- MET-2.6 · Spread tiles › Expand -->
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

<!-- MET-2.7 · Spread tiles › Wide -->
<article class="fh-metric fh-metric--spread fh-metric--wide" data-tone="teal" data-fh-slot="items" data-fh="MET-2.7">
  <p class="fh-metric__label"><span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--gauge" aria-hidden="true"></i></span>Credit line</p>
  <p class="fh-metric__sub" data-fh-slot="sub">Drawn against $40,000 at Cedar Valley Bank</p>
  <div class="fh-metric__figure"><p class="fh-metric__value"><span class="fh-value fh-value--compact-delta fh-value--tabular fh-value--mono" data-fh="VAL-4.5" data-fh-slot="value"><data value="12500" title="$12,500.00 USD">$12.5K</data><span class="fh-metric__delta" data-trend="flat" aria-label="No change">$0</span></span></p></div>
  <span class="fh-value fh-value--bar" data-tone="teal" data-fh="VAL-5.2" data-fh-slot="value"><progress class="fh-progress" value="31" max="100" data-fh="FBK">31%</progress><b>31%</b></span>
  <p class="fh-metric__source" data-fh-slot="source">31% drawn · 9.4% rate</p>
</article>

<!-- MET-2.8 · Spread tiles › Full -->
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

<!-- MET-3.1 · Icon looks › Solid -->
<article class="fh-metric" data-tone="sky" data-fh-slot="items" data-fh="MET-3.1">
  <p class="fh-metric__label"><span class="fh-cube fh-cube--icon" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--calendar" aria-hidden="true"></i></span>Solid</p>
  <p class="fh-metric__sub" data-fh-slot="sub">Meetings this week</p>
  <p class="fh-metric__value"><span class="fh-value fh-value--plain fh-value--tabular" data-fh="VAL-6.1" data-fh-slot="value">12</span></p>
</article>

<!-- MET-3.2 · Icon looks › Soft -->
<article class="fh-metric" data-tone="violet" data-fh-slot="items" data-fh="MET-3.2">
  <p class="fh-metric__label"><span class="fh-cube fh-cube--icon fh-cube--soft" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--layers" aria-hidden="true"></i></span>Soft</p>
  <p class="fh-metric__sub" data-fh-slot="sub">Open relays</p>
  <p class="fh-metric__value"><span class="fh-value fh-value--plain fh-value--tabular" data-fh="VAL-6.1" data-fh-slot="value">48</span></p>
</article>

<!-- MET-3.3 · Icon looks › Outline -->
<article class="fh-metric" data-tone="amber" data-fh-slot="items" data-fh="MET-3.3">
  <p class="fh-metric__label"><span class="fh-cube fh-cube--icon fh-cube--outline" data-fh="CUB" data-fh-slot="media"><i class="fh-icon fh-icon--shield-check" aria-hidden="true"></i></span>Outline</p>
  <p class="fh-metric__sub" data-fh-slot="sub">Checks waiting</p>
  <p class="fh-metric__value"><span class="fh-value fh-value--plain fh-value--tabular" data-fh="VAL-6.1" data-fh-slot="value">3</span></p>
</article>

<!-- MET-3.4 · Icon looks › Row look -->
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

<!-- MET-4.1 · Parts › Sparkline -->
<svg class="fh-sparkline" viewBox="0 0 120 32" preserveAspectRatio="none" aria-hidden="true" data-fh="MET-4.1"><path d="M0.0 30.0 L10.9 25.3 L21.8 27.7 L32.7 20.7 L43.6 23.0 L54.5 16.0 L65.5 18.3 L76.4 11.3 L87.3 12.5 L98.2 6.7 L109.1 9.0 L120.0 2.0 L120 32 L0 32Z" fill="currentColor" opacity=".12"></path><path d="M0.0 30.0 L10.9 25.3 L21.8 27.7 L32.7 20.7 L43.6 23.0 L54.5 16.0 L65.5 18.3 L76.4 11.3 L87.3 12.5 L98.2 6.7 L109.1 9.0 L120.0 2.0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"></path></svg>

<!-- MET-4.2 · Parts › Ring -->
<span class="fh-ring" data-tone="teal" style="--fh-value: 69" role="img" aria-label="69% complete" data-fh="MET-4.2"><b>69%</b></span>
```

### INV · Invoice

The sheet: logo and number, title, from and bill-to with the dates, line items, totals, a signature, payment details and notes. `__cover` adds a picture band; `--classic` centres the logo and sets a small-caps title. `data-fh-scheme="light"` keeps it paper on a dark page, and it prints on its own. The pay bar (`fh-pay --float`) sticks to the bottom; Pay opens the payment panel up out of it.

```html
<!-- INV-1.1 · Sheet › Cover -->
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

<!-- INV-1.2 · Sheet › Modern -->
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

<!-- INV-1.3 · Sheet › Classic -->
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

<!-- INV-2.1 · Pay › Pay bar · panel -->
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

### THM · Brand theme file

@layer fh.themes

```html
<div class="fh-swatches-ramp" data-fh="THM">
  <div style="--sw: var(--fh-color-surface); --ink: var(--fh-color-text)"><b>sans</b>--fh-font-sans</div>
  <div style="--sw: var(--fh-color-surface-raised); --ink: var(--fh-color-text)"><b>mono</b>--fh-font-mono</div>
  <div style="--sw: var(--fh-color-accent); --ink: var(--fh-color-on-accent)"><b>accent</b>--fh-color-accent</div>
  <div style="--sw: var(--fh-color-field); --ink: var(--fh-color-text)"><b>button</b>--fh-button-radius</div>
  <div style="--sw: var(--fh-color-surface-chrome); --ink: var(--fh-color-text)"><b>card</b>--fh-card-radius</div>
</div>
```

### THS · Theme select

A native select, or a small colour menu: a dot and a mono caps label per colour, the picked dot ringed, a check in the accent. firehorse.js sets data-fh-theme (on <html>, or on data-fh-theme-target) and remembers it.

```html
<!-- THS-1.1 · Select › Select -->
<div class="fh-field" data-fh="THS-1.1"><label for="theme-select-demo">Theme</label><select class="fh-select" id="theme-select-demo" data-fh-theme-select data-fh="THS"><option value>Firehorse</option><option value="mustang">Mustang</option><option value="friesian">Friesian</option><option value="akhal-teke">Akhal-Teke</option></select></div>

<!-- THS-2.1 · Colour menu › Colour menu -->
<div class="fh-theme-menu" id="ths-colours-demo" role="radiogroup" aria-label="Theme (preview)" data-fh="THS-2.1"><header class="fh-theme-menu__head"><span class="fh-theme-menu__title">Theme</span><span class="fh-theme-menu__count">4</span></header><ul class="fh-theme-menu__list"><li><label class="fh-theme-menu__item" style="--fh-theme-dot: light-dark(#b33000, #da3a00)"><input type="radio" name="ths-colours-demo" value data-fh-theme-select data-fh-theme-target="#ths-colours-demo" data-fh-theme-persist="false" checked><i class="fh-theme-menu__dot" aria-hidden="true"></i>Firehorse</label></li><li><label class="fh-theme-menu__item" style="--fh-theme-dot: light-dark(#2b579a, #6f9fe8)"><input type="radio" name="ths-colours-demo" value="mustang" data-fh-theme-select data-fh-theme-target="#ths-colours-demo" data-fh-theme-persist="false"><i class="fh-theme-menu__dot" aria-hidden="true"></i>Mustang</label></li><li><label class="fh-theme-menu__item" style="--fh-theme-dot: light-dark(#161616, #ece8df)"><input type="radio" name="ths-colours-demo" value="friesian" data-fh-theme-select data-fh-theme-target="#ths-colours-demo" data-fh-theme-persist="false"><i class="fh-theme-menu__dot" aria-hidden="true"></i>Friesian</label></li><li><label class="fh-theme-menu__item" style="--fh-theme-dot: light-dark(#7a5200, #d6a640)"><input type="radio" name="ths-colours-demo" value="akhal-teke" data-fh-theme-select data-fh-theme-target="#ths-colours-demo" data-fh-theme-persist="false"><i class="fh-theme-menu__dot" aria-hidden="true"></i>Akhal-Teke</label></li></ul></div>
```

### TML · Timelines

```html
<!-- TML-1.1 · Timelines › Milestones -->
<div>
<ol class="fh-milestones" data-tone="sky" data-fh="TML-1.1">
  <li class="fh-milestones__item" data-state="done"><time class="fh-milestones__date" datetime="2026-11-01" data-fh-slot="date">Nov 1</time><div class="fh-milestones__body"><p class="fh-milestones__title" data-fh-slot="title">Shell</p><p>Side navigation, environment band and selector.</p></div></li>
  <li class="fh-milestones__item" data-state="done"><time class="fh-milestones__date" datetime="2026-11-01" data-fh-slot="date">Nov 1</time><div class="fh-milestones__body"><p class="fh-milestones__title" data-fh-slot="title">Sign-in</p><p>Glass sign-in with username or email.</p></div></li>
  <li class="fh-milestones__item" data-state="now"><time class="fh-milestones__date" datetime="2026-11-15" data-fh-slot="date">Nov 15</time><div class="fh-milestones__body"><p class="fh-milestones__title" data-fh-slot="title">Applications</p><p>The registry everything maps back to.</p></div></li>
  <li class="fh-milestones__item" data-state="next"><time class="fh-milestones__date" datetime="2026-12-01" data-fh-slot="date">Dec 1</time><div class="fh-milestones__body"><p class="fh-milestones__title" data-fh-slot="title">Enterprise</p><p>Organisations, their people and sites.</p></div></li>
  <li class="fh-milestones__item" data-state="next"><time class="fh-milestones__date" datetime="2026-12-15" data-fh-slot="date">Dec 15</time><div class="fh-milestones__body"><p class="fh-milestones__title" data-fh-slot="title">Identity &amp; access</p><p>People, accounts and roles.</p></div></li>
</ol>
</div>

<!-- TML-1.2 · Timelines › Horizontal track -->
<div style="min-inline-size: 0">
<ol class="fh-phases" data-tone="violet" aria-label="Project phases" data-fh="TML-1.2">
  <li class="fh-phases__stop" data-state="done"><time class="fh-phases__date" data-fh-slot="date">Oct 6</time><p class="fh-phases__title" data-fh-slot="title">Discovery</p><p>Scope signed.</p></li>
  <li class="fh-phases__stop" data-state="done"><time class="fh-phases__date" data-fh-slot="date">Oct 20</time><p class="fh-phases__title" data-fh-slot="title">Design</p><p>System approved.</p></li>
  <li class="fh-phases__stop" data-state="now"><time class="fh-phases__date" data-fh-slot="date">Nov 3</time><p class="fh-phases__title" data-fh-slot="title">Build</p><p>Sprint 2 of 3.</p><ul class="fh-phases__items"><li><span class="fh-dot fh-dot--live" data-tone="amber" aria-hidden="true"></span><span>Checkout</span></li><li><span class="fh-dot" data-tone="violet" aria-hidden="true"></span><span>Order emails</span></li></ul></li>
  <li class="fh-phases__stop" data-state="next"><time class="fh-phases__date" data-fh-slot="date">Dec 1</time><p class="fh-phases__title" data-fh-slot="title">Launch</p><p>Go-live and handover.</p></li>
</ol>
</div>

<!-- TML-1.3 · Timelines › Schedule -->
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

<!-- TML-1.4 · Timelines › Activity feed -->
<ol class="fh-activity" data-fh="TML-1.4">
  <li class="fh-activity__day" data-fh-slot="date">Today</li>
  <li class="fh-activity__item"><span class="fh-avatar" data-tone="sky" data-fh="AVT" data-fh-slot="media"><img src="/img/avatars/ava.webp" alt></span><div class="fh-activity__body"><p class="fh-activity__line"><b>Ava</b> moved <a href="#timelines">Northwind Labs</a> to <span class="fh-status" data-tone="lime" data-fh="SCR-1.3" data-fh-slot="body">Won</span></p><time class="fh-activity__time" datetime="2026-11-01T14:10" data-fh-slot="time">2h ago</time></div></li>
  <li class="fh-activity__item" data-tone="amber"><span class="fh-avatar" data-tone="amber" data-fh="AVT" data-fh-slot="media"><img src="/img/avatars/mateo.webp" alt></span><div class="fh-activity__body"><p class="fh-activity__line" data-fh-slot="body"><b>Mateo</b> commented on <a href="#timelines">Launch checklist</a></p><time class="fh-activity__time" datetime="2026-11-01T11:42" data-fh-slot="time">4h ago</time><blockquote class="fh-activity__remark" data-fh-slot="body">DNS is ready; we can flip it Monday morning.</blockquote></div></li>
  <li class="fh-activity__item"><span class="fh-avatar" data-tone="violet" data-fh="AVT" data-fh-slot="media"><img src="/img/avatars/ruth.webp" alt></span><div class="fh-activity__body"><p class="fh-activity__line" data-fh-slot="body"><b>Ruth</b> is uploading the brand kit</p><time class="fh-activity__time" datetime="2026-11-01T09:05" data-fh-slot="time">7h ago</time><progress class="fh-progress" value="64" max="100" data-fh="FBK" data-fh-slot="body">64%</progress></div></li>
  <li class="fh-activity__day" data-fh-slot="date">Yesterday</li>
  <li class="fh-activity__item"><span class="fh-avatar" data-tone="teal" data-fh="AVT" data-fh-slot="media">SL</span><div class="fh-activity__body"><p class="fh-activity__line" data-fh-slot="body"><b>Sam</b> created the project <a href="#timelines">Halcyon Health site</a></p><time class="fh-activity__time" datetime="2026-10-31T16:20" data-fh-slot="time">Oct 31, 4:20 PM</time></div></li>
</ol>

<!-- TML-2.1 · Activity log › Thread log -->
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

### CAL · Calendar pickers

```html
<!-- CAL-1.1 · Pickers › Date picker -->
<div class="fh-field" data-fh-slot="body" data-fh="CAL-1.1">
  <label for="pm-due">Due date</label>
  <div class="fh-datepicker" data-fh-datepicker data-mode="single"><input class="fh-input" type="date" id="pm-due" name="due" value="2026-11-14" data-fh="FLD" data-fh-slot="fields"></div>
</div>

<!-- CAL-1.2 · Pickers › Date and time picker -->
<div class="fh-field" data-fh-slot="body" data-fh="CAL-1.2">
  <label for="pm-kickoff">Kickoff call</label>
  <div class="fh-datepicker" data-fh-datepicker data-mode="datetime"><input class="fh-input" type="datetime-local" id="pm-kickoff" name="kickoff" data-fh="FLD" data-fh-slot="fields"></div>
</div>

<!-- CAL-1.3 · Pickers › Date range picker -->
<div class="fh-field fh-field--full" data-fh-slot="body" data-fh="CAL-1.3">
  <label for="pm-from">Reporting period</label>
  <div class="fh-datepicker" data-fh-datepicker data-mode="range"><input class="fh-input" type="date" id="pm-from" name="from" aria-label="Start" data-fh="FLD" data-fh-slot="fields"><input class="fh-input" type="date" id="pm-to" name="to" aria-label="End" data-fh="FLD" data-fh-slot="fields"></div>
</div>

<!-- CAL-2.1 · Inline › Inline calendar -->
<div data-fh-calendar data-mode="single" data-value="2026-11-14" data-min="2026-11-01" aria-label="Pick a day"></div>

<!-- CAL-3.1 · Booking › Booking calendar -->
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
    <input class="fh-input" type="password" autocomplete="off" spellcheck="false" placeholder="whsec_…" aria-label="Webhook signing secret" data-fh="FLD">
    <button class="fh-button fh-button--sm" type="submit" data-fh="BTN">Save</button>
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
    <select class="fh-select" aria-label="Type for ACME__XAI_TEAM_ID" data-fh="THS"><option value>Choose a type…</option><option>ID</option><option>API key</option><option>Secret</option></select>
    <button class="fh-button fh-button--sm" type="submit" data-fh="BTN">Set type</button>
    <p class="fh-keyfield__hint">Nothing about its value shows until it has a type.</p>
  </form>
</div>
</div>

<!-- KEY-2.1 · Groups › Service keys -->
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

### Light

`xs · sm · md · lg · xl · 2xl · stack · add`

```html
<div class="fh-stack">
  <div class="fh-cluster" style="--fh-gap: var(--fh-space-4); --fh-align: center" role="group" aria-label="People are circles.">
    <code>person</code>
    <span class="fh-avatar fh-avatar--xs" data-kind="person" data-face><img src="img/avatars/ava.webp" alt="Ava Mendes"></span>
    <span class="fh-avatar fh-avatar--sm" data-kind="person" data-face><img src="img/avatars/ava.webp" alt="Ava Mendes"></span>
    <span class="fh-avatar" data-kind="person" data-face><img src="img/avatars/ava.webp" alt="Ava Mendes"></span>
    <span class="fh-avatar fh-avatar--lg" data-kind="person" data-face><img src="img/avatars/ava.webp" alt="Ava Mendes"></span>
    <span class="fh-avatar fh-avatar--xl" data-kind="person" data-face><img src="img/avatars/ava.webp" alt="Ava Mendes"></span>
    <span class="fh-avatar fh-avatar--2xl" data-kind="person" data-face><img src="img/avatars/ava.webp" alt="Ava Mendes"></span>
    <span class="fh-avatars" role="group" aria-label="Mateo Ruiz, Eleanor Park, Ray Okafor and 2 more"><span class="fh-avatar" data-kind="person" data-face data-fh="AVT"><img src="img/avatars/mateo.webp" alt="Mateo Ruiz"></span><span class="fh-avatar" data-kind="person" data-face data-fh="AVT"><img src="img/avatars/eleanor.webp" alt="Eleanor Park"></span><span class="fh-avatar" data-kind="person" data-face data-fh="AVT"><img src="img/avatars/ray.webp" alt="Ray Okafor"></span><span class="fh-avatar fh-avatars__more" data-kind="person" aria-hidden="true" data-fh="AVT">+2</span></span>
    <button class="fh-avatar fh-avatar--add" data-kind="person" type="button" aria-label="Add a person"><i class="fh-icon fh-icon--plus" aria-hidden="true"></i></button>
  </div>
  <div class="fh-cluster" style="--fh-gap: var(--fh-space-4); --fh-align: center" role="group" aria-label="Orgs are rounded squares.">
    <code>org</code>
    <span class="fh-avatar fh-avatar--xs" data-kind="org" role="img" aria-label="Northwind Studio">NS</span>
    <span class="fh-avatar fh-avatar--sm" data-kind="org" role="img" aria-label="Northwind Studio">NS</span>
    <span class="fh-avatar" data-kind="org" role="img" aria-label="Northwind Studio">NS</span>
    <span class="fh-avatar fh-avatar--lg" data-kind="org" role="img" aria-label="Northwind Studio">NS</span>
    <span class="fh-avatar fh-avatar--xl" data-kind="org" role="img" aria-label="Northwind Studio">NS</span>
    <span class="fh-avatar fh-avatar--2xl" data-kind="org" role="img" aria-label="Northwind Studio">NS</span>
    <span class="fh-avatars" role="group" aria-label="Northwind Studio, Halcyon Health, Juniper Labs and 2 more"><span class="fh-avatar" data-kind="org" role="img" aria-label="Northwind Studio" data-fh="AVT">NS</span><span class="fh-avatar" data-kind="org" role="img" aria-label="Halcyon Health" data-fh="AVT">HH</span><span class="fh-avatar" data-kind="org" role="img" aria-label="Juniper Labs" data-fh="AVT">JL</span><span class="fh-avatar fh-avatars__more" data-kind="org" aria-hidden="true" data-fh="AVT">+2</span></span>
    <button class="fh-avatar fh-avatar--add" data-kind="org" type="button" aria-label="Add an org"><i class="fh-icon fh-icon--plus" aria-hidden="true"></i></button>
  </div>
  <div class="fh-cluster" style="--fh-gap: var(--fh-space-4); --fh-align: center" role="group" aria-label="Agents are rounded squares.">
    <code>agent</code>
    <span class="fh-avatar fh-avatar--xs" data-kind="agent" data-face><img src="img/avatars/reginald.webp" alt="Reginald, support agent"></span>
    <span class="fh-avatar fh-avatar--sm" data-kind="agent" data-face><img src="img/avatars/reginald.webp" alt="Reginald, support agent"></span>
    <span class="fh-avatar" data-kind="agent" data-face><img src="img/avatars/reginald.webp" alt="Reginald, support agent"></span>
    <span class="fh-avatar fh-avatar--lg" data-kind="agent" data-face><img src="img/avatars/reginald.webp" alt="Reginald, support agent"></span>
    <span class="fh-avatar fh-avatar--xl" data-kind="agent" data-face><img src="img/avatars/reginald.webp" alt="Reginald, support agent"></span>
    <span class="fh-avatar fh-avatar--2xl" data-kind="agent" data-face><img src="img/avatars/reginald.webp" alt="Reginald, support agent"></span>
    <span class="fh-avatars" role="group" aria-label="Reginald, Scout, Ledger and 2 more"><span class="fh-avatar" data-kind="agent" data-face data-fh="AVT"><img src="img/avatars/reginald.webp" alt="Reginald"></span><span class="fh-avatar" data-kind="agent" role="img" aria-label="Scout" data-fh="AVT">SC</span><span class="fh-avatar" data-kind="agent" role="img" aria-label="Ledger" data-fh="AVT">LD</span><span class="fh-avatar fh-avatars__more" data-kind="agent" aria-hidden="true" data-fh="AVT">+2</span></span>
    <button class="fh-avatar fh-avatar--add" data-kind="agent" type="button" aria-label="Add an agent"><i class="fh-icon fh-icon--plus" aria-hidden="true"></i></button>
  </div>
  <div class="fh-cluster" style="--fh-gap: var(--fh-space-4); --fh-align: center" role="group" aria-label="Records are rounded squares.">
    <code>record</code>
    <span class="fh-avatar fh-avatar--xs" data-kind="record" role="img" aria-label="Goal GL-014">GL</span>
    <span class="fh-avatar fh-avatar--sm" data-kind="record" role="img" aria-label="Goal GL-014">GL</span>
    <span class="fh-avatar" data-kind="record" role="img" aria-label="Goal GL-014">GL</span>
    <span class="fh-avatar fh-avatar--lg" data-kind="record" role="img" aria-label="Goal GL-014">GL</span>
    <span class="fh-avatar fh-avatar--xl" data-kind="record" role="img" aria-label="Goal GL-014">GL</span>
    <span class="fh-avatar fh-avatar--2xl" data-kind="record" role="img" aria-label="Goal GL-014">GL</span>
    <span class="fh-avatars" role="group" aria-label="Goal GL-014, Goal GL-015, Goal GL-016 and 1 more"><span class="fh-avatar" data-kind="record" role="img" aria-label="Goal GL-014" data-fh="AVT">GL</span><span class="fh-avatar" data-kind="record" role="img" aria-label="Goal GL-015" data-fh="AVT">GL</span><span class="fh-avatar" data-kind="record" role="img" aria-label="Goal GL-016" data-fh="AVT">GL</span><span class="fh-avatar fh-avatars__more" data-kind="record" aria-hidden="true" data-fh="AVT">+1</span></span>
    <button class="fh-avatar fh-avatar--add" data-kind="record" type="button" aria-label="Add a record"><i class="fh-icon fh-icon--plus" aria-hidden="true"></i></button>
  </div>
</div>
```

### Dark

`xs · sm · md · lg · xl · 2xl · stack · add`

```html
<div class="fh-stack">
  <div class="fh-cluster" style="--fh-gap: var(--fh-space-4); --fh-align: center" role="group" aria-label="People are circles.">
    <code>person</code>
    <span class="fh-avatar fh-avatar--xs" data-kind="person" data-face><img src="img/avatars/ava.webp" alt="Ava Mendes"></span>
    <span class="fh-avatar fh-avatar--sm" data-kind="person" data-face><img src="img/avatars/ava.webp" alt="Ava Mendes"></span>
    <span class="fh-avatar" data-kind="person" data-face><img src="img/avatars/ava.webp" alt="Ava Mendes"></span>
    <span class="fh-avatar fh-avatar--lg" data-kind="person" data-face><img src="img/avatars/ava.webp" alt="Ava Mendes"></span>
    <span class="fh-avatar fh-avatar--xl" data-kind="person" data-face><img src="img/avatars/ava.webp" alt="Ava Mendes"></span>
    <span class="fh-avatar fh-avatar--2xl" data-kind="person" data-face><img src="img/avatars/ava.webp" alt="Ava Mendes"></span>
    <span class="fh-avatars" role="group" aria-label="Mateo Ruiz, Eleanor Park, Ray Okafor and 2 more"><span class="fh-avatar" data-kind="person" data-face data-fh="AVT"><img src="img/avatars/mateo.webp" alt="Mateo Ruiz"></span><span class="fh-avatar" data-kind="person" data-face data-fh="AVT"><img src="img/avatars/eleanor.webp" alt="Eleanor Park"></span><span class="fh-avatar" data-kind="person" data-face data-fh="AVT"><img src="img/avatars/ray.webp" alt="Ray Okafor"></span><span class="fh-avatar fh-avatars__more" data-kind="person" aria-hidden="true" data-fh="AVT">+2</span></span>
    <button class="fh-avatar fh-avatar--add" data-kind="person" type="button" aria-label="Add a person"><i class="fh-icon fh-icon--plus" aria-hidden="true"></i></button>
  </div>
  <div class="fh-cluster" style="--fh-gap: var(--fh-space-4); --fh-align: center" role="group" aria-label="Orgs are rounded squares.">
    <code>org</code>
    <span class="fh-avatar fh-avatar--xs" data-kind="org" role="img" aria-label="Northwind Studio">NS</span>
    <span class="fh-avatar fh-avatar--sm" data-kind="org" role="img" aria-label="Northwind Studio">NS</span>
    <span class="fh-avatar" data-kind="org" role="img" aria-label="Northwind Studio">NS</span>
    <span class="fh-avatar fh-avatar--lg" data-kind="org" role="img" aria-label="Northwind Studio">NS</span>
    <span class="fh-avatar fh-avatar--xl" data-kind="org" role="img" aria-label="Northwind Studio">NS</span>
    <span class="fh-avatar fh-avatar--2xl" data-kind="org" role="img" aria-label="Northwind Studio">NS</span>
    <span class="fh-avatars" role="group" aria-label="Northwind Studio, Halcyon Health, Juniper Labs and 2 more"><span class="fh-avatar" data-kind="org" role="img" aria-label="Northwind Studio" data-fh="AVT">NS</span><span class="fh-avatar" data-kind="org" role="img" aria-label="Halcyon Health" data-fh="AVT">HH</span><span class="fh-avatar" data-kind="org" role="img" aria-label="Juniper Labs" data-fh="AVT">JL</span><span class="fh-avatar fh-avatars__more" data-kind="org" aria-hidden="true" data-fh="AVT">+2</span></span>
    <button class="fh-avatar fh-avatar--add" data-kind="org" type="button" aria-label="Add an org"><i class="fh-icon fh-icon--plus" aria-hidden="true"></i></button>
  </div>
  <div class="fh-cluster" style="--fh-gap: var(--fh-space-4); --fh-align: center" role="group" aria-label="Agents are rounded squares.">
    <code>agent</code>
    <span class="fh-avatar fh-avatar--xs" data-kind="agent" data-face><img src="img/avatars/reginald.webp" alt="Reginald, support agent"></span>
    <span class="fh-avatar fh-avatar--sm" data-kind="agent" data-face><img src="img/avatars/reginald.webp" alt="Reginald, support agent"></span>
    <span class="fh-avatar" data-kind="agent" data-face><img src="img/avatars/reginald.webp" alt="Reginald, support agent"></span>
    <span class="fh-avatar fh-avatar--lg" data-kind="agent" data-face><img src="img/avatars/reginald.webp" alt="Reginald, support agent"></span>
    <span class="fh-avatar fh-avatar--xl" data-kind="agent" data-face><img src="img/avatars/reginald.webp" alt="Reginald, support agent"></span>
    <span class="fh-avatar fh-avatar--2xl" data-kind="agent" data-face><img src="img/avatars/reginald.webp" alt="Reginald, support agent"></span>
    <span class="fh-avatars" role="group" aria-label="Reginald, Scout, Ledger and 2 more"><span class="fh-avatar" data-kind="agent" data-face data-fh="AVT"><img src="img/avatars/reginald.webp" alt="Reginald"></span><span class="fh-avatar" data-kind="agent" role="img" aria-label="Scout" data-fh="AVT">SC</span><span class="fh-avatar" data-kind="agent" role="img" aria-label="Ledger" data-fh="AVT">LD</span><span class="fh-avatar fh-avatars__more" data-kind="agent" aria-hidden="true" data-fh="AVT">+2</span></span>
    <button class="fh-avatar fh-avatar--add" data-kind="agent" type="button" aria-label="Add an agent"><i class="fh-icon fh-icon--plus" aria-hidden="true"></i></button>
  </div>
  <div class="fh-cluster" style="--fh-gap: var(--fh-space-4); --fh-align: center" role="group" aria-label="Records are rounded squares.">
    <code>record</code>
    <span class="fh-avatar fh-avatar--xs" data-kind="record" role="img" aria-label="Goal GL-014">GL</span>
    <span class="fh-avatar fh-avatar--sm" data-kind="record" role="img" aria-label="Goal GL-014">GL</span>
    <span class="fh-avatar" data-kind="record" role="img" aria-label="Goal GL-014">GL</span>
    <span class="fh-avatar fh-avatar--lg" data-kind="record" role="img" aria-label="Goal GL-014">GL</span>
    <span class="fh-avatar fh-avatar--xl" data-kind="record" role="img" aria-label="Goal GL-014">GL</span>
    <span class="fh-avatar fh-avatar--2xl" data-kind="record" role="img" aria-label="Goal GL-014">GL</span>
    <span class="fh-avatars" role="group" aria-label="Goal GL-014, Goal GL-015, Goal GL-016 and 1 more"><span class="fh-avatar" data-kind="record" role="img" aria-label="Goal GL-014" data-fh="AVT">GL</span><span class="fh-avatar" data-kind="record" role="img" aria-label="Goal GL-015" data-fh="AVT">GL</span><span class="fh-avatar" data-kind="record" role="img" aria-label="Goal GL-016" data-fh="AVT">GL</span><span class="fh-avatar fh-avatars__more" data-kind="record" aria-hidden="true" data-fh="AVT">+1</span></span>
    <button class="fh-avatar fh-avatar--add" data-kind="record" type="button" aria-label="Add a record"><i class="fh-icon fh-icon--plus" aria-hidden="true"></i></button>
  </div>
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

Type or talk. The label and a Text | Transcribe switch share the first row, text only or with a keyboard and a mic (`data-fh-dictate="icons"`); while listening, a live caption shows the waveform, clock and interim words. Progressive: without the switch it is a plain textarea. Wire with `data-fh-dictate` (or drive the same markup yourself).

```html
<div class="fh-stack fh-stack--lg">
<div class="fh-field fh-field--dictate" data-fh-dictate>
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
<div class="fh-field fh-field--dictate" data-fh-dictate="icons">
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
</div>
```

### Quiet field

A barely-there lift off the canvas, no border. Default fields already use a light fill (`--fh-color-field`); quiet is fainter still. Use `fh-field--quiet` or `fh-input--quiet`.

```html
<div class="fh-field fh-field--quiet">
  <label for="f-quiet">Notes</label>
  <textarea class="fh-textarea" id="f-quiet" placeholder="Optional detail" data-fh="FLD"></textarea>
</div>
```

### Booking calendar

A quiet month grid beside the chosen day's times. Open days take a faint fill; the picked day and time take the primary. Under Calendar pickers (CAL).

```html
<div class="fh-cal-book">
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

