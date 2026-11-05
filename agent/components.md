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
| Admin (admin.css) | `fh-app` `fh-backdrop` `fh-frost` `[data-fh-frost-select]` `fh-masthead` (`__mark` `__caption` `__index` `__title` `__foot` `__meta` `__tools` `--bar`) `fh-record` (`--cover` `__cover`) `fh-section-card` (`__head` `__title` `__tools` `__lede` `__subhead` `__note` `__foot` `--inset` `--aside`) `fh-metrics` `fh-metric` (`__label` `__value` `__sub` `__source` `__row` `__more` `__delta` `__figure` `--needed` `--spread` `--tinted` `--wide` `--full`) `fh-gauge` `fh-tracker` (`__head` `__meter` `__done` `__body` `__log`) `fh-quick` (`__label` `__action`) `fh-check-cards` `fh-check-card` (`__check` `__area` `__icon` `__title` `__meter` `__above` `__below`) |
| People | `fh-social` (`__photo` `__body` `__name` `__check` `__bio` `__foot` `__stats` `--fade` `--dark`) |
| Commerce | `fh-invoice` (`__cover` `__head` `__logo` `__number` `__title` `__parties` `__label` `__dates` `__items` `__totals` `__total` `__sign` `__foot` `--classic`) `fh-pay` (`--float` `__mark` `__doc` `__amount` `__icon` `__panel` `__head` `__route` `__party` `__sum` `__total` `__details` `__actions`) |
| Forms | `fh-form` (`__row` `__actions`) `fh-field` (`--optional` `__hint` `__error`) `fh-input` `fh-textarea` `fh-select` `fh-select-wrap` `fh-input-group` `fh-check` `fh-switch` `fh-segmented` |
| Disclosure | `fh-accordion` `fh-tabs` (`--mono`) `fh-dialog` (`__header` `__body` `__footer`) `fh-menu` `fh-toaster` `fh-toast` |
| Chrome | `fh-header` (`__bar` `__brand` `__actions` `__toggle`) `fh-nav` `fh-nav__link` `fh-drawer` (`__group`) `fh-mega` (`__grid` `__rail`) `fh-footer` (`__columns` `__column` `__base`) |
| Patterns | `fh-hero` `fh-hero__actions` `fh-hero-split` `fh-section-head` `fh-etched-split` (`__pane`) `fh-cta-band` (`__main` `__title` `__aside` `__people` `__fine`) `fh-window` (`__bar` `__body`) `fh-letter` (`__portrait`) `fh-panel` `fh-panel-inset` `[data-fh-panel-start]` `fh-footer--tall` |
| Media | `fh-canvas` (`__body` `__top` `__main` `__foot` `__title` `__sub` `__eyebrow` `__mark` `__badge` `__index` `__cubes` `__media` `__ui` (`--crop`) `--og` `--yt-thumb` `--yt-banner` `--x-header` `--li-banner` `--post` `--square` `--story` `--cover` `--card` `--center` `--split` `--row` `--plain` `--plate` `--native` `__cubes--rows`) `[data-fh-guides]` |
| Slides | `fh-slide` (`--title` `--section` `--middle` `__list` `__stats` `__quote` `__cite` `__code`) on an `fh-canvas`; reveal.js: `dist/reveal.css` |
| Helpers | `fh-sr-only` `fh-skip` `fh-reveal` `fh-reveal-children` `fh-hide-narrow` `fh-hide-wide` `fh-tone-text` `fh-text-start|center|end` `fh-nowrap` `fh-tabular` `fh-full` |
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

### TYP-1 · Type presets

Four faces as one attribute: `data-fh-type` sets the sans and display families and the heading tracking each face wants (Hanken Grotesk at −5%, Archivo at −3%). A theme picks one with `config.type`. Presets name the family only: load the font yourself.

```html
            <div>
              <div class="site-type-row" data-fh-type="geist"><div class="site-type-row__meta"><span class="fh-label">Geist</span><code>data-fh-type="geist" · −4% display</code></div><div><p class="fh-title">Ink, etch and ember.</p><p class="fh-body" style="margin: 0">The quick brown fox jumps over the lazy dog, 0123456789.</p></div></div>
              <div class="site-type-row" data-fh-type="inter"><div class="site-type-row__meta"><span class="fh-label">Inter</span><code>data-fh-type="inter" · −3.5% display</code></div><div><p class="fh-title">Built for every screen.</p><p class="fh-body" style="margin: 0">The quick brown fox jumps over the lazy dog, 0123456789.</p></div></div>
              <div class="site-type-row" data-fh-type="hanken"><div class="site-type-row__meta"><span class="fh-label">Hanken Grotesk</span><code>data-fh-type="hanken" · −5% display</code></div><div><p class="fh-title">Beyond the ordinary.</p><p class="fh-body" style="margin: 0">The quick brown fox jumps over the lazy dog, 0123456789.</p></div></div>
              <div class="site-type-row" data-fh-type="archivo"><div class="site-type-row__meta"><span class="fh-label">Archivo</span><code>data-fh-type="archivo" · −3% display</code></div><div><p class="fh-title">Create something different.</p><p class="fh-body" style="margin: 0">The quick brown fox jumps over the lazy dog, 0123456789.</p></div></div>
```

### MTL · The motion layer

Motion you opt into, not a library you load. It runs on the platform (transitions, `@starting-style`, scroll-driven animations), stays inside `prefers-reduced-motion`, and stops when nobody can see it.

```html
<dl class="fh-dl site-variants site-motion">
  <div><dt>Flip<code>.fh-roll</code></dt><dd>
    <div class="fh-cluster" style="--fh-gap: var(--fh-space-4)">
      <a class="fh-button fh-button--plain" href="#motion"><span class="fh-roll">Book a call</span></a>
      <a class="fh-nav__link" href="#motion"><span class="fh-roll">Menu link</span></a>
      <a class="fh-chip fh-chip--indexed" data-tone="teal" href="#motion"><b class="fh-chip__index">01</b><span class="fh-roll">Chip</span></a>
    </div>
    <p class="site-motion__note">Hover or focus: the label rolls up and its twin rolls in.</p></dd></div>
  <div><dt>Rollover<code>Firehorse.rollover()</code></dt><dd>
    <div class="site-motion__row">
      <p class="site-motion__roll" data-tone="sky"><span class="fh-rollover" id="motion-roll" data-fh="MTL"><span class="fh-rollover__item"><b>04</b>Data</span></span></p>
      <div class="fh-cluster" style="--fh-gap: var(--fh-space-2)">
        <button class="fh-button fh-button--sm fh-button--secondary" type="button" data-roll="-1">Back</button>
        <button class="fh-button fh-button--sm fh-button--secondary" type="button" data-roll="1">Forward</button>
      </div>
    </div>
    <p class="site-motion__note">Rolls up going forward, down going back. The floating bar's title uses it.</p></dd></div>
  <div><dt>Reveal<code>.fh-reveal · --scale · --left · --blur</code></dt><dd>
    <div class="site-motion__scroller" tabindex="0" aria-label="Reveal demo, scrollable">
      <article class="fh-card fh-reveal" data-tone="sky"><p class="fh-card__meta">01</p><h4 class="fh-card__title">Fade and rise</h4></article>
      <article class="fh-card fh-reveal fh-reveal--scale" data-tone="lime"><p class="fh-card__meta">02</p><h4 class="fh-card__title">Scale in</h4></article>
      <article class="fh-card fh-reveal fh-reveal--left" data-tone="amber"><p class="fh-card__meta">03</p><h4 class="fh-card__title">From the left</h4></article>
      <article class="fh-card fh-reveal fh-reveal--blur" data-tone="fuchsia"><p class="fh-card__meta">04</p><h4 class="fh-card__title">Out of focus</h4></article>
    </div>
    <p class="site-motion__note">Scroll the box. Each card runs on its own view timeline, no script.</p></dd></div>
  <div><dt>Rules<code>always on</code></dt><dd>
    <ul class="fh-checklist site-motion__rules" data-tone="teal">
      <li>Still under <code>prefers-reduced-motion</code></li>
      <li>Scroll-driven, never waits on JavaScript</li>
      <li>Loops pause off-screen</li>
      <li>Layout never shifts</li>
      <li>Two curves, three durations, all tokens</li>
    </ul></dd></div>
</dl>
```

### WRT · Word rotator

The rolling word in a headline, without the usual wiring: no library, no word array in a script, no timers. Write the words in the markup and they take turns. Change them by editing the HTML. Style the word apart from the sentence with a modifier, a tone or a knob: colour, font, size, weight, italic, underline, highlight, gradient, and which way it rolls.

```html
<dl class="fh-dl site-variants">
  <div><dt>Headline<code>.fh-rotator</code></dt><dd>
    <h3 class="fh-title">The design system that <span class="fh-rotator" data-fh="WRT-1.1"><span>scales</span><span aria-hidden="true">adapts</span><span aria-hidden="true">fits</span><span aria-hidden="true">flexes</span><span aria-hidden="true">grows</span></span>.</h3></dd></div>
  <div><dt>In a sentence<code>--fh-rotator-step</code></dt><dd>
    <p class="fh-lede" style="--fh-rotator-step: 1.8s">Built for <span class="fh-rotator" data-tone="sky" data-fh="WRT-1.2"><span>studios</span><span aria-hidden="true">startups</span><span aria-hidden="true">agencies</span></span>, shipped in a week.</p></dd></div>
  <div><dt>Styles<code>--script · --mono · --highlight · --gradient</code></dt><dd>
    <p class="fh-heading">Made by <span class="fh-rotator fh-rotator--script fh-rotator--accent" data-fh="WRT-1.3"><span>hand</span><span aria-hidden="true">people</span><span aria-hidden="true">Rascode</span></span></p>
    <p class="fh-heading">Ship it <span class="fh-rotator fh-rotator--mono fh-rotator--highlight fh-rotator--fade" data-tone="lime" data-fh="WRT-1.4"><span>today</span><span aria-hidden="true">tonight</span><span aria-hidden="true">now</span></span></p>
    <p class="fh-heading">Every <span class="fh-rotator fh-rotator--gradient fh-rotator--down" data-fh="WRT-1.5"><span>tone</span><span aria-hidden="true">theme</span><span aria-hidden="true">scheme</span></span> included</p>
    <p class="fh-heading">Looks <span class="fh-rotator fh-rotator--italic fh-rotator--underline fh-rotator--display" data-tone="amber" style="--fh-rotator-scale: 1.2" data-fh="WRT-1.6"><span>sharp</span><span aria-hidden="true">calm</span><span aria-hidden="true">bold</span></span> anywhere</p></dd></div>
</dl>
```

### STK · Stack

`.fh-stack`

```html
<div class="fh-stack fh-stack--sm">
  <p class="fh-label">Flow</p>
  <p class="fh-body">One gap between siblings, set by <code>--fh-gap</code>.</p>
  <a class="fh-action" href="#layout">Read more</a>
</div>
```

### CLS · Cluster

`.fh-cluster`

```html
<div class="fh-cluster">
  <span class="fh-badge" data-tone="sky">Agents</span>
  <span class="fh-badge" data-tone="teal">Data</span>
  <span class="fh-badge" data-tone="orange">Automation</span>
  <span class="fh-badge">Managed</span>
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
      <div class="fh-footer__column" data-tone="teal"><h2>Docs</h2><ul><li><a href="#fender">Patterns</a></li></ul></div>
      <div class="fh-footer__column" data-tone="violet"><h2>Agents</h2><ul><li><a href="#fender">Index</a></li></ul></div>
      <div class="fh-footer__column" data-tone="accent"><h2>Studio</h2><ul><li><a href="#fender">Contact</a></li></ul></div>
    </nav>
  </footer>
  <div class="fh-panel" aria-hidden="true"></div>
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
        <p class="fh-eyebrow-pill" data-tone="orange"><span class="fh-dot fh-dot--live" aria-hidden="true"></span><span>The pattern</span></p>
        <p class="fh-lede">Every pattern has an ID, a live demo and the rules that keep its fit, so a person or an agent can cut it again in any theme.</p>
        <p class="fh-body fh-muted">Patterns at launch: <strong>2</strong>, plus 3 building blocks.</p>
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

Dots, eyebrow pills, breadcrumbs and badges.

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
  <div><dt>Parts<code>__index · __seg · __count</code></dt><dd>
    <p class="fh-eyebrow-pill fh-eyebrow-pill--etched" data-tone="teal" data-fh="EYE-5.1"><span class="fh-eyebrow-pill__index">02</span>Indexed section</p>
    <p class="fh-eyebrow-pill" data-tone="orange" data-fh="EYE-5.2"><span class="fh-dot fh-dot--live"></span><span class="fh-eyebrow-pill__seg">Automation</span><span class="fh-eyebrow-pill__seg"><strong>4 services</strong></span></p>
    <p class="fh-eyebrow-pill fh-eyebrow-pill--rounded" data-tone="rose" data-fh="EYE-5.3"><span class="fh-dot fh-dot--live"></span>Open roles <span class="fh-eyebrow-pill__count">3</span></p></dd></div>
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

Chips filter or jump; the selected one fills with its tone. Icons replace the dot. Every variant takes the tone from `data-tone`.

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

### CUB · Cubes

Tone blocks that carry one value. In a row they walk the hue wheel by 28°, so three facts read as one family.

```html
<dl class="fh-dl site-variants">
  <div><dt>Facts<code>.fh-cubes > li > .fh-cube</code></dt><dd>
    <ul class="fh-cubes" data-tone="teal" data-fh="CUB-1.1">
      <li><b class="fh-cube">$1,250</b> fixed</li>
      <li><b class="fh-cube">14</b> days</li>
      <li><b class="fh-cube">4</b> deliverables</li>
    </ul></dd></div>
  <div><dt>Large<code>.fh-cube--lg</code></dt><dd>
    <ul class="fh-cubes" data-tone="fuchsia" data-fh="CUB-1.2">
      <li><b class="fh-cube fh-cube--lg">98</b> score</li>
      <li><b class="fh-cube fh-cube--lg">A+</b> grade</li>
      <li><b class="fh-cube fh-cube--lg">12</b> fixes</li>
    </ul></dd></div>
  <div><dt>Icons<code>.fh-cube--sm · .fh-icon</code></dt><dd>
    <ul class="fh-cubes" data-tone="sky" data-fh="CUB-1.3">
      <li><b class="fh-cube fh-cube--sm"><i class="fh-icon fh-icon--clock" aria-hidden="true"></i></b> 30 min</li>
      <li><b class="fh-cube fh-cube--sm"><i class="fh-icon fh-icon--video" aria-hidden="true"></i></b> Video call</li>
      <li><b class="fh-cube fh-cube--sm"><i class="fh-icon fh-icon--calendar" aria-hidden="true"></i></b> This week</li>
    </ul></dd></div>
  <div><dt>Outline<code>.fh-cube--outline</code></dt><dd>
    <ul class="fh-cubes" data-tone="amber" data-fh="CUB-1.4">
      <li><b class="fh-cube fh-cube--outline">v1.1</b> release</li>
      <li><b class="fh-cube fh-cube--outline">MIT</b> license</li>
      <li><b class="fh-cube fh-cube--outline">183</b> icons</li>
    </ul></dd></div>
</dl>
```

### CUB-2 · Cube cards

Cards led by a cube: the value is the headline, the text says what it measures.

```html
<dl class="fh-dl site-variants">
  <div><dt>Row<code>.fh-cube-cards > .fh-cube-card</code></dt><dd>
    <div class="fh-cube-cards" data-tone="lime" style="--fh-cube-card-min: 12rem">
      <article class="fh-cube-card"><b class="fh-cube fh-cube--xl">14</b><div class="fh-cube-card__text"><b>Days</b><small>Kickoff to handoff</small></div></article>
      <article class="fh-cube-card"><b class="fh-cube fh-cube--xl">4</b><div class="fh-cube-card__text"><b>Deliverables</b><small>Docs you keep</small></div></article>
      <a class="fh-cube-card" href="#c-cube-cards"><b class="fh-cube fh-cube--xl"><i class="fh-icon fh-icon--calendar" aria-hidden="true"></i></b><div class="fh-cube-card__text"><b>Book a call</b><small>30 min, this week</small></div></a>
    </div></dd></div>
  <div><dt>Trend<code>.fh-cube-card__trend · data-dir</code></dt><dd>
    <div class="fh-cube-cards" data-tone="orange" style="--fh-cube-card-min: 12rem">
      <article class="fh-cube-card"><b class="fh-cube fh-cube--lg">$184k</b><div class="fh-cube-card__text"><b>Pipeline</b><small>Open deals · sample</small></div><span class="fh-cube-card__trend" data-dir="up">▲ 12%</span></article>
      <article class="fh-cube-card"><b class="fh-cube fh-cube--lg">2.4h</b><div class="fh-cube-card__text"><b>First reply</b><small>Median · sample</small></div><span class="fh-cube-card__trend" data-dir="down">▼ 8%</span></article>
    </div></dd></div>
  <div><dt>Stacked<code>.fh-cube-card--stack</code></dt><dd>
    <div class="fh-cube-cards" data-tone="violet" style="--fh-cube-card-min: 14rem">
      <article class="fh-cube-card fh-cube-card--stack"><b class="fh-cube fh-cube--xl">$1,695</b><div class="fh-cube-card__text"><b>AI agent</b><small>Per month, after setup</small></div><ul class="fh-cubes"><li><b class="fh-cube fh-cube--sm">24/7</b> coverage</li><li><b class="fh-cube fh-cube--sm">3</b> channels</li></ul></article>
      <article class="fh-cube-card fh-cube-card--stack"><b class="fh-cube fh-cube--xl">1,284</b><div class="fh-cube-card__text"><b>Inquiries</b><small>Last 30 days · sample</small></div><ul class="fh-cubes"><li><b class="fh-cube fh-cube--sm">+12%</b> vs last</li><li><b class="fh-cube fh-cube--sm">64%</b> booked</li></ul></article>
    </div></dd></div>
  <div><dt>Strip<code>.fh-cube-cards--strip</code></dt><dd>
    <ul class="fh-cube-cards fh-cube-cards--strip" data-tone="sky">
      <li class="fh-cube-card" data-tone="amber"><b class="fh-cube fh-cube--xl">3</b><div class="fh-cube-card__text"><b>Tasks today</b><small>2 overdue</small></div></li>
      <li class="fh-cube-card" data-tone="lime"><b class="fh-cube fh-cube--xl">5/8</b><div class="fh-cube-card__text"><b>Habits</b><small>Done so far</small></div></li>
      <li class="fh-cube-card" data-tone="sky"><b class="fh-cube fh-cube--xl">2</b><div class="fh-cube-card__text"><b>Meetings</b><small>Next at 2:30 PM</small></div></li>
    </ul></dd></div>
</dl>
```

### CRD · Card in a ruled grid

Dashed cells that share their rules, a tone-colored meta line, and a title link that covers the whole card. Narrow cards stack their footer.

```html
<div class="fh-grid fh-grid--ruled fh-grid--etched" data-cols="3">
  <article class="fh-card" data-tone="sky" data-fh="CRD">
    <p class="fh-card__meta">Agents</p>
    <h3 class="fh-card__title"><a href="#c-card">Lead follow-up agent</a></h3>
    <p class="fh-card__body">Answers, books and follows up on your own channels, around the clock.</p>
    <footer class="fh-card__footer">
      <p class="fh-card__price">Monthly <b>$1,700</b></p>
      <span class="fh-action" data-tone>Meet Wes</span>
    </footer>
  </article>
  <article class="fh-card" data-tone="teal" data-fh="CRD">
    <p class="fh-card__meta">Data architecture</p>
    <h3 class="fh-card__title"><a href="#c-card">Schema design</a></h3>
    <p class="fh-card__body">Data models that match how the business actually runs.</p>
    <footer class="fh-card__footer">
      <p class="fh-card__price">From <b>$1,250</b></p>
      <span class="fh-action" data-tone>View</span>
    </footer>
  </article>
  <article class="fh-card" data-tone="orange" data-fh="CRD">
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

Numbered because order matters.

```html
<ol class="fh-steps" data-fh="STP">
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

### DEK · Stacking deck

Panels that pin as you scroll: each next one slides up over the last, and the ones behind shrink and darken into a deck with their top edges showing. Here it opens with a hero handoff (`--hero`): a full-height first card the deck slides in over. Pure CSS: sticky for the stack, a scroll-driven animation for the recede. Scroll the page.

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

### Stacking deck · alt

The same deck without the hero: every card is the same size and starts the stack. Number left, title right, a hairline under both; a card is a tone surface or fills with `__media`.

```html
<ol class="fh-deck">
  <li class="fh-deck__card" data-tone="orange">
    <img class="fh-deck__media" src="img/backdrop/firehorse-horse.webp" alt="">
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

How the cards behind go back. `--fade` fades them, `--blur` blurs them, `--lift` tilts them back in 3D, `--fan` turns each a degree or two and shows more of it. Each has a knob, and they combine. Scroll inside each box.

```html
<div class="fh-grid" data-cols="2" style="--fh-grid-min: 18rem; --fh-gap: var(--fh-space-8)">
<figure class="fh-stack fh-stack--sm">
  <figcaption class="fh-label">Fade <code>--fade</code></figcaption>
  <div style="block-size: 26rem; overflow-y: auto; padding: 0.75rem" tabindex="0" aria-label="Fade, scrolls">
    <ol class="fh-deck fh-deck--fade" style="--fh-deck-top: 0.75rem; --fh-deck-height: 15rem; --fh-deck-gap: 5rem">
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
  </div>
</figure>
<figure class="fh-stack fh-stack--sm">
  <figcaption class="fh-label">Blur <code>--blur</code></figcaption>
  <div style="block-size: 26rem; overflow-y: auto; padding: 0.75rem" tabindex="0" aria-label="Blur, scrolls">
    <ol class="fh-deck fh-deck--blur" style="--fh-deck-top: 0.75rem; --fh-deck-height: 15rem; --fh-deck-gap: 5rem">
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
  </div>
</figure>
<figure class="fh-stack fh-stack--sm">
  <figcaption class="fh-label">Lift <code>--lift</code></figcaption>
  <div style="block-size: 26rem; overflow-y: auto; padding: 0.75rem" tabindex="0" aria-label="Lift, scrolls">
    <ol class="fh-deck fh-deck--lift" style="--fh-deck-top: 0.75rem; --fh-deck-height: 15rem; --fh-deck-gap: 5rem">
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
  </div>
</figure>
<figure class="fh-stack fh-stack--sm">
  <figcaption class="fh-label">Fan <code>--fan</code></figcaption>
  <div style="block-size: 26rem; overflow-y: auto; padding: 0.75rem" tabindex="0" aria-label="Fan, scrolls">
    <ol class="fh-deck fh-deck--fan" style="--fh-deck-top: 0.75rem; --fh-deck-height: 15rem; --fh-deck-gap: 5rem">
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
  </div>
</figure>
</div>
```

### DEK-4 · Cards and captions

`__card--split` puts the picture on one half and the words on the other (picture over text in a narrow slot). `__caption--top` moves the caption up; `__meta` adds a small mono line. `--count` adds a 01 / 04 readout that follows the card in front.

```html
<div class="fh-grid" data-cols="2" style="--fh-grid-min: 18rem; --fh-gap: var(--fh-space-8)">
<figure class="fh-stack fh-stack--sm">
  <figcaption class="fh-label">Split card <code>__card--split</code></figcaption>
  <div style="block-size: 26rem; overflow-y: auto; padding: 0.75rem" tabindex="0" aria-label="Split card, scrolls">
    <ol class="fh-deck" style="--fh-deck-top: 0.75rem; --fh-deck-height: 20rem; --fh-deck-gap: 5rem">
      <li class="fh-deck__card fh-deck__card--split" data-tone="orange">
        <img class="fh-deck__media" src="img/backdrop/firehorse-horse.webp" alt="">
        <div class="fh-deck__body"><p class="fh-label">Case 01</p><p class="fh-body">A mark and a system that hold together.</p></div>
        <p class="fh-deck__caption"><span class="fh-deck__index">01</span><span class="fh-deck__title">Branding</span></p>
      </li>
      <li class="fh-deck__card fh-deck__card--split" data-tone="sky">
        <img class="fh-deck__media" src="img/backdrop/firehorse-hoof.webp" alt="">
        <div class="fh-deck__body"><p class="fh-label">Case 02</p><p class="fh-body">Sites and products for every screen.</p></div>
        <p class="fh-deck__caption"><span class="fh-deck__index">02</span><span class="fh-deck__title">Digital</span></p>
      </li>
      <li class="fh-deck__card fh-deck__card--split" data-tone="violet">
        <img class="fh-deck__media" src="img/backdrop/lipizzaner-horse.webp" alt="">
        <div class="fh-deck__body"><p class="fh-label">Case 03</p><p class="fh-body">A house style, set in motion.</p></div>
        <p class="fh-deck__caption"><span class="fh-deck__index">03</span><span class="fh-deck__title">Motion</span></p>
      </li>
    </ol>
  </div>
</figure>
<figure class="fh-stack fh-stack--sm">
  <figcaption class="fh-label">Caption on top, meta line <code>__caption--top · __meta</code></figcaption>
  <div style="block-size: 26rem; overflow-y: auto; padding: 0.75rem" tabindex="0" aria-label="Caption on top, meta line, scrolls">
    <ol class="fh-deck" style="--fh-deck-top: 0.75rem; --fh-deck-height: 15rem; --fh-deck-gap: 5rem">
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
  </div>
</figure>
<figure class="fh-stack fh-stack--sm">
  <figcaption class="fh-label">Count <code>--count</code></figcaption>
  <div style="block-size: 26rem; overflow-y: auto; padding: 0.75rem" tabindex="0" aria-label="Count, scrolls">
    <ol class="fh-deck fh-deck--count" style="--fh-deck-top: 0.75rem; --fh-deck-height: 15rem; --fh-deck-gap: 5rem">
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
  </div>
</figure>
</div>
```

### DEK-5 · Direction

`--x` runs the deck sideways in its own scroll row; cards pin at the left edge and recede to the left. `--reverse` keeps the cards in a pile at the bottom, and the front one rises off it as you scroll.

```html
<div class="fh-grid" data-cols="2" style="--fh-grid-min: 18rem; --fh-gap: var(--fh-space-8)">
<figure class="fh-stack fh-stack--sm">
  <figcaption class="fh-label">Sideways <code>--x</code></figcaption>
  <ol class="fh-deck fh-deck--x" style="--fh-deck-height: 16rem; --fh-deck-width: min(80%, 22rem)">
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
</figure>
<figure class="fh-stack fh-stack--sm">
  <figcaption class="fh-label">Reverse <code>--reverse</code></figcaption>
  <div style="block-size: 26rem; overflow-y: auto; padding: 0.75rem" tabindex="0" aria-label="Reverse, scrolls">
    <ol class="fh-deck fh-deck--reverse" style="--fh-deck-bottom: 0.75rem; --fh-deck-height: 15rem; --fh-deck-gap: 5rem">
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
  </div>
</figure>
</div>
```

### MBR · Member card

A pass for one person: art on top, a big name with an ID number, a dotted rule, mono facts and a round "made by" stamp; `--plates` splits art and body into two pieces with a tagline, a quiet ID row and a holographic `__badge`. The art glitches (`--smear` drags it sideways) (blocks of the picture shift colour, ASCII glyphs flicker) and the stamp turns slowly; all still under reduced motion. `data-fh-scheme="light"` gives the paper look on a dark page; `data-tone` colours the stamp and the `--glow`.

```html
<div class="fh-grid" data-cols="3" style="--fh-grid-min: 16rem; --fh-gap: var(--fh-space-8)">
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
</div>
<div class="fh-grid" data-cols="3" style="--fh-grid-min: 16rem; --fh-gap: var(--fh-space-8); margin-block-start: var(--fh-space-12)">
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
</div>
```

### STY · Story card

A tall card in three parts: a logo on top, a quote and a link at the bottom, and a wide open field between them that carries the story. Here the field draws a brand mark in shimmering vertical lines; hover brings it up. Solid fills come from the Firehorse palette: `data-tone` on its own, `--deep` toward ink, `--ink`, `--paper`. The whole card is the link.

```html
<div class="fh-grid" data-cols="3" style="--fh-grid-min: 15rem; --fh-gap: var(--fh-space-6)">
<article class="fh-story fh-story--deep" data-tone="violet" data-fh="STY-1.1">
  <header class="fh-story__head"><span class="fh-story__logo"><svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="33" fill="none" stroke-width="16"></circle></svg>Halcyon</span></header>
  <div class="fh-story__field fh-story__field--lines" aria-hidden="true"><svg class="fh-story__mark" viewBox="0 0 100 100"><circle cx="50" cy="50" r="33" fill="none" stroke-width="16"></circle></svg></div>
  <footer class="fh-story__foot">
    <p class="fh-story__quote">Halcyon keeps a million rooms in sync with Firehorse.</p>
    <a class="fh-story__link" href="#STY">Read Halcyon's story</a>
  </footer>
</article>
<article class="fh-story fh-story--ink" data-tone="violet" data-fh="STY-1.2">
  <header class="fh-story__head"><span class="fh-story__logo"><svg viewBox="0 0 100 100" aria-hidden="true"><polygon points="38,6 74,6 52,42 78,42 30,96 44,56 22,56"></polygon></svg>Voltline</span></header>
  <div class="fh-story__field fh-story__field--lines" aria-hidden="true"><svg class="fh-story__mark" viewBox="0 0 100 100"><polygon points="38,6 74,6 52,42 78,42 30,96 44,56 22,56"></polygon></svg></div>
  <footer class="fh-story__foot">
    <p class="fh-story__quote">Voltline ships every dashboard on one design system.</p>
    <a class="fh-story__link" href="#STY">Read Voltline's story</a>
  </footer>
</article>
<article class="fh-story" data-tone="accent" data-fh="STY-1.3">
  <header class="fh-story__head"><span class="fh-story__logo"><svg viewBox="0 0 100 100" aria-hidden="true"><polygon points="50,4 90,27 90,73 50,96 10,73 10,27"></polygon></svg>Hexwork</span></header>
  <div class="fh-story__field fh-story__field--lines" aria-hidden="true"><svg class="fh-story__mark" viewBox="0 0 100 100"><polygon points="50,4 90,27 90,73 50,96 10,73 10,27"></polygon></svg></div>
  <footer class="fh-story__foot">
    <p class="fh-story__quote">Hexwork cut its UI code in half in a quarter.</p>
    <a class="fh-story__link" href="#STY">Read Hexwork's story</a>
  </footer>
</article>
<article class="fh-story" data-tone="lime" data-fh="STY-1.4">
  <header class="fh-story__head"><span class="fh-story__logo"><svg viewBox="0 0 100 100" aria-hidden="true"><path d="M22 90V46a28 28 0 0 1 56 0v44" fill="none" stroke-width="16"></path></svg>Stirrup</span></header>
  <div class="fh-story__field"><p class="fh-story__figure">98%</p><p class="fh-story__figure-label">Screens moved</p></div>
  <footer class="fh-story__foot">
    <p class="fh-story__quote">Stirrup moved 98% of its screens in six weeks.</p>
    <a class="fh-story__link" href="#STY">Read Stirrup's story</a>
  </footer>
</article>
<article class="fh-story fh-story--deep" data-tone="sky" data-fh="STY-1.5">
  <header class="fh-story__head"><span class="fh-story__logo"><svg viewBox="0 0 100 100" aria-hidden="true"><path d="M6 60c14-28 30-28 44 0s30 28 44 0" fill="none" stroke-width="16"></path></svg>Northwind</span></header>
  <div class="fh-story__field fh-story__field--lines" aria-hidden="true"><svg class="fh-story__mark" viewBox="0 0 100 100"><path d="M6 60c14-28 30-28 44 0s30 28 44 0" fill="none" stroke-width="16"></path></svg></div>
  <footer class="fh-story__foot">
    <p class="fh-story__quote">Northwind reads every surface the same, light or dark.</p>
    <a class="fh-story__link" href="#STY">Read Northwind's story</a>
  </footer>
</article>
<article class="fh-story fh-story--paper" data-tone="teal" data-fh="STY-1.6">
  <header class="fh-story__head"><span class="fh-story__logo"><svg viewBox="0 0 100 100" aria-hidden="true"><rect x="10" y="14" width="80" height="18" rx="9"></rect><rect x="10" y="41" width="80" height="18" rx="9"></rect><rect x="10" y="68" width="80" height="18" rx="9"></rect></svg>Lumen</span></header>
  <div class="fh-story__field fh-story__field--lines" aria-hidden="true"><svg class="fh-story__mark" viewBox="0 0 100 100"><rect x="10" y="14" width="80" height="18" rx="9"></rect><rect x="10" y="41" width="80" height="18" rx="9"></rect><rect x="10" y="68" width="80" height="18" rx="9"></rect></svg></div>
  <footer class="fh-story__foot">
    <p class="fh-story__quote">Lumen builds its docs, app and emails from one set of tokens.</p>
    <a class="fh-story__link" href="#STY">Read Lumen's story</a>
  </footer>
</article>
</div>
```

### STY-2 · Picture and glare

`__media` puts a picture behind the card with a scrim top and bottom; `--duotone` washes it in the tone. `--glare` sends a band of light across the card every few seconds, and quickly on hover, over a picture or a solid fill.

```html
<div class="fh-grid" data-cols="4" style="--fh-grid-min: 15rem; --fh-gap: var(--fh-space-6)">
<article class="fh-story" data-tone="orange">
  <img class="fh-story__media" src="img/backdrop/firehorse-horse.webp" alt="">
  <header class="fh-story__head"><span class="fh-story__logo"><svg viewBox="0 0 100 100" aria-hidden="true"><path d="M22 90V46a28 28 0 0 1 56 0v44" fill="none" stroke-width="16"/></svg>Stirrup</span><span class="fh-story__tag">Case study</span></header>
  <div class="fh-story__field" aria-hidden="true"></div>
  <footer class="fh-story__foot">
    <p class="fh-story__quote">Stirrup's riders book a lesson in under a minute.</p>
    <a class="fh-story__link" href="#STY">Read Stirrup's story</a>
  </footer>
</article>
<article class="fh-story fh-story--glare" data-tone="amber">
  <img class="fh-story__media" src="img/backdrop/lipizzaner-horse.webp" alt="">
  <header class="fh-story__head"><span class="fh-story__logo"><svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="33" fill="none" stroke-width="16"/></svg>Halcyon</span><span class="fh-story__tag">Launch</span></header>
  <div class="fh-story__field" aria-hidden="true"></div>
  <footer class="fh-story__foot">
    <p class="fh-story__quote">Halcyon launched its new site in a single sprint.</p>
    <a class="fh-story__link" href="#STY">Read Halcyon's story</a>
  </footer>
</article>
<article class="fh-story fh-story--deep fh-story--duotone" data-tone="violet">
  <img class="fh-story__media" src="img/backdrop/firehorse-hoof.webp" alt="">
  <header class="fh-story__head"><span class="fh-story__logo"><svg viewBox="0 0 100 100" aria-hidden="true"><path d="M6 60c14-28 30-28 44 0s30 28 44 0" fill="none" stroke-width="16"/></svg>Northwind</span><span class="fh-story__tag">Archive</span></header>
  <div class="fh-story__field" aria-hidden="true"></div>
  <footer class="fh-story__foot">
    <p class="fh-story__quote">Northwind's archive, re-set in its own type.</p>
    <a class="fh-story__link" href="#STY">Read Northwind's story</a>
  </footer>
</article>
<article class="fh-story fh-story--deep fh-story--glare" data-tone="fuchsia">
  <header class="fh-story__head"><span class="fh-story__logo"><svg viewBox="0 0 100 100" aria-hidden="true"><polygon points="38,6 74,6 52,42 78,42 30,96 44,56 22,56"/></svg>Voltline</span></header>
  <div class="fh-story__field fh-story__field--lines" aria-hidden="true"><svg class="fh-story__mark" viewBox="0 0 100 100"><polygon points="38,6 74,6 52,42 78,42 30,96 44,56 22,56"/></svg></div>
  <footer class="fh-story__foot">
    <p class="fh-story__quote">Voltline's team ships twice as often since the move.</p>
    <a class="fh-story__link" href="#STY">Read Voltline's story</a>
  </footer>
</article>
</div>
```

### STY-3 · In the field

The open middle holds what the story needs: Firehorse progress fields, a `__ring` that fills to `--value` as it scrolls in, a `__chart` of columns drawn in lines, a live indeterminate bar with a count. Anything else fits too.

```html
<div class="fh-grid" data-cols="4" style="--fh-grid-min: 15rem; --fh-gap: var(--fh-space-6)">
<article class="fh-story fh-story--deep" data-tone="amber">
  <header class="fh-story__head"><span class="fh-story__logo"><svg viewBox="0 0 100 100" aria-hidden="true"><polygon points="50,4 90,27 90,73 50,96 10,73 10,27"/></svg>Hexwork</span><span class="fh-story__tag">Week 4</span></header>
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
<article class="fh-story fh-story--deep" data-tone="teal">
  <header class="fh-story__head"><span class="fh-story__logo"><svg viewBox="0 0 100 100" aria-hidden="true"><rect x="10" y="14" width="80" height="18" rx="9"/><rect x="10" y="41" width="80" height="18" rx="9"/><rect x="10" y="68" width="80" height="18" rx="9"/></svg>Lumen</span><span class="fh-story__tag">Tokens</span></header>
  <div class="fh-story__field"><div class="fh-story__ring-wrap"><span class="fh-story__ring" style="--value: 72" role="img" aria-label="72% complete"></span><p class="fh-story__figure">72%</p></div><p class="fh-story__figure-label" style="text-align: center">Complete</p></div>
  <footer class="fh-story__foot">
    <p class="fh-story__quote">Lumen's token migration is nearly there.</p>
    <a class="fh-story__link" href="#STY">Read Lumen's story</a>
  </footer>
</article>
<article class="fh-story" data-tone="sky">
  <header class="fh-story__head"><span class="fh-story__logo"><svg viewBox="0 0 100 100" aria-hidden="true"><path d="M6 60c14-28 30-28 44 0s30 28 44 0" fill="none" stroke-width="16"/></svg>Northwind</span><span class="fh-story__tag">Releases</span></header>
  <div class="fh-story__field" aria-hidden="true"><div class="fh-story__chart"><span style="--value: 18"></span><span style="--value: 26"></span><span style="--value: 22"></span><span style="--value: 38"></span><span style="--value: 34"></span><span style="--value: 52"></span><span style="--value: 61"></span><span style="--value: 78"></span></div></div>
  <footer class="fh-story__foot">
    <p class="fh-story__quote">Northwind's weekly releases, up eight weeks running.</p>
    <a class="fh-story__link" href="#STY">Read Northwind's story</a>
  </footer>
</article>
<article class="fh-story fh-story--ink fh-story--glare" data-tone="rose">
  <header class="fh-story__head"><span class="fh-story__logo"><svg viewBox="0 0 100 100" aria-hidden="true"><polygon points="38,6 74,6 52,42 78,42 30,96 44,56 22,56"/></svg>Voltline</span><span class="fh-story__tag">Live</span></header>
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
</div>
```

### SPD · Speed blur

A picture caught at speed: a sideways motion blur with the subject kept sharp at `--fh-speed-focus`, fine scanline grain, and a slow drift. Pure CSS: the streaked copy is squeezed, blurred and stretched back, so it blurs along one axis only. `--orbit` adds a dashed ring.

```html
<div class="fh-stack fh-stack--lg">
<figure class="fh-speed fh-speed--orbit" style="--fh-speed-focus: 38% 38%; --fh-speed-focus-x: 50%; --fh-speed-focus-y: 55%" data-fh="SPD-1.1">
  <span class="fh-speed__smear" aria-hidden="true"><img src="img/backdrop/lipizzaner-horse.webp" alt></span>
  <img class="fh-speed__img" src="img/backdrop/lipizzaner-horse.webp" alt="A horse at full gallop">
  <figcaption style="place-self: end center; display: grid; justify-items: center; gap: var(--fh-space-3); padding: var(--fh-space-8); text-align: center">
    <span class="fh-chip">Adventure starts here</span>
    <span class="fh-title">Born to ride</span>
  </figcaption>
</figure>
<div class="fh-grid" data-cols="2" style="--fh-grid-min: 16rem; --fh-gap: var(--fh-space-6)">
<figure class="fh-speed" style="--fh-speed-focus: 55% 35%; --fh-speed-amount: 28px; --fh-speed-ratio: 4 / 3" data-fh="SPD-1.2">
  <span class="fh-speed__smear" aria-hidden="true"><img src="img/backdrop/firehorse-horse.webp" alt></span>
  <img class="fh-speed__img" src="img/backdrop/firehorse-horse.webp" alt="Three horses running">
</figure>
<figure class="fh-speed fh-speed--still" style="--fh-speed-focus: 40% 50%; --fh-speed-amount: 10px; --fh-speed-ratio: 4 / 3" data-fh="SPD-1.3">
  <span class="fh-speed__smear" aria-hidden="true"><img src="img/backdrop/firehorse-hoof.webp" alt></span>
  <img class="fh-speed__img" src="img/backdrop/firehorse-hoof.webp" alt="A hoof drawn in blueprint lines">
</figure>
</div>
</div>
```

### DTH · Dither

A picture as a halftone: dots that grow where it's light, on a dark ground. A tone colours the dots; `--paper` flips to dark dots on light, `--lines` uses a line screen, `--fine` and `--coarse` set the pitch. Pure CSS: blend with a dot screen, then contrast.

```html
<div class="fh-grid" data-cols="4" style="--fh-grid-min: 13rem; --fh-gap: var(--fh-space-6)">
<figure class="fh-dither" data-fh="DTH-1.1"><span class="fh-dither__plate"><img src="img/avatars/cole.webp" alt="Cole, dithered"></span></figure>
<figure class="fh-dither" data-tone="lime" data-fh="DTH-1.2"><span class="fh-dither__plate"><img src="img/avatars/maya.webp" alt="Maya, dithered in lime"></span></figure>
<figure class="fh-dither fh-dither--paper fh-dither--fine" data-fh="DTH-1.3"><span class="fh-dither__plate"><img src="img/avatars/ray.webp" alt="Ray, dithered on paper"></span></figure>
<figure class="fh-dither fh-dither--lines fh-dither--coarse" data-tone="sky" data-fh="DTH-1.4"><span class="fh-dither__plate"><img src="img/avatars/isla.webp" alt="Isla in a line screen"></span></figure>
</div>
```

### LQG · Liquid glass

A pane of thick glass: what's behind it goes soft and bright, the rim catches a white highlight on top and a faint prism of colour at the corners. A panel, a `--pill` button with a stronger `--prism`, `--dark` and `--clear`.

```html
<div style="position: relative; display: grid; place-items: center; min-block-size: 26rem; padding: var(--fh-space-8); overflow: clip; border-radius: var(--fh-radius-md); background: radial-gradient(circle, color-mix(in oklab, var(--fh-color-text) 22%, transparent) 1px, transparent 1.5px) 0 0 / 14px 14px, var(--fh-color-canvas)">
  <p aria-hidden="true" style="position: absolute; inset: 34% auto auto 30%; margin: 0; font-family: var(--fh-font-display); font-size: clamp(4rem, 16cqi, 10rem); line-height: 1; letter-spacing: -0.05em">Liquid</p>
  <span aria-hidden="true" style="position: absolute; inset: 10% auto auto 12%; inline-size: 12rem; aspect-ratio: 1; border-radius: 50%; background: var(--fh-tone, orange); filter: blur(4px)" data-tone="accent"></span>
  <div class="fh-cluster" style="position: relative; align-items: end; gap: var(--fh-space-6)">
    <div class="fh-glass" style="inline-size: min(22rem, 100%); padding: var(--fh-space-6)" data-fh="LQG-1.1">
      <p class="fh-label">Glass</p>
      <p class="fh-heading" style="margin-block: var(--fh-space-2)">Soft behind, bright at the rim.</p>
      <p class="fh-body">Whatever sits under the pane goes soft; the edge catches the light.</p>
    </div>
    <div class="fh-stack" style="gap: var(--fh-space-4)">
      <a class="fh-glass fh-glass--pill fh-glass--prism" href="#LQG" data-fh="LQG-1.2">Join now</a>
      <div class="fh-glass fh-glass--dark" style="padding: var(--fh-space-4) var(--fh-space-5)" data-fh="LQG-1.3"><p class="fh-label" style="color: inherit">Smoked</p><p class="fh-body" style="color: inherit; margin: 0">--dark</p></div>
      <div class="fh-glass fh-glass--clear" style="padding: var(--fh-space-4) var(--fh-space-5)" data-fh="LQG-1.4"><p class="fh-label">Clear</p><p class="fh-body" style="margin: 0">--clear</p></div>
    </div>
  </div>
</div>
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

### CHT · Chat

Message bubbles, names in tone, a typing indicator.

```html
<div class="fh-chat" role="log" aria-label="Conversation" data-fh="CHT">
  <div class="fh-message" data-from="them" data-tone="sky"><span class="fh-avatar fh-avatar--sm"><img src="img/avatars/reginald.webp" alt></span><div class="fh-message__bubble"><p class="fh-message__name">Reginald</p><p>Good evening. Which of your channels gets the most inquiries?</p></div></div>
  <div class="fh-message" data-from="me"><div class="fh-message__bubble"><p>Facebook Messenger, mostly after 6pm.</p></div></div>
  <div class="fh-message" data-from="them" data-tone="sky"><span class="fh-avatar fh-avatar--sm"><img src="img/avatars/reginald.webp" alt></span><div class="fh-message__bubble"><p class="fh-message__name">Reginald</p><p>Then Wes should cover evenings first. I can have him live by Monday.</p></div></div>
  <div class="fh-message" data-from="them" data-tone="sky"><span class="fh-avatar fh-avatar--sm"><img src="img/avatars/reginald.webp" alt></span><div class="fh-message__bubble"><span class="fh-typing" aria-label="Reginald is typing"><i></i></span></div></div>
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

### DCK · Floating bar

The masthead from rascode.dev. It rides quietly under the header, then engages when it pins: the small title slides in, the cubes and chips appear in the section's tone, and the outline CTA fills. Scroll this page to watch the real one change color by section.

```html
<div class="fh-dock fh-frame site-dock-demo" data-tone="sky" data-active="true" data-fh="DCK">
  <div class="fh-dock__bar">
    <div class="fh-dock__identity">
      <p class="fh-eyebrow-pill" data-tone="sky"><span class="fh-dot fh-dot--live"></span><span>Agents</span></p>
      <span class="fh-dock__avatar"><img src="img/avatars/cole.webp" alt></span>
      <div class="fh-dock__text">
        <p class="fh-dock__title">Landscaping agent</p>
        <p class="fh-dock__meta">Wes · Landscaping agent</p>
      </div>
    </div>
    <ul class="fh-cubes" aria-label="Snapshot">
      <li><b class="fh-cube">$1,695</b> per month</li>
      <li><b class="fh-cube">3</b> day free trial</li>
      <li><b class="fh-cube">5</b> channels wired</li>
    </ul>
    <div class="fh-dock__actions"><a class="fh-button fh-button--sm fh-button--outline" href="#c-dock">Talk to Wes</a></div>
  </div>
</div>
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
    <div class="fh-alert" data-tone="sky" role="status" data-fh="FBK"><p class="fh-alert__title">Your agent goes live Monday</p><p>We'll text you when Wes answers his first lead.</p></div>
    <div class="fh-alert" data-tone="live" role="status" data-fh="FBK"><p class="fh-alert__title">Payment received</p><p>Invoice RC-0142 is paid in full.</p></div>
    <div class="fh-alert" data-tone="amber" role="status" data-fh="FBK"><p class="fh-alert__title">Trial ends in 2 days</p><p>Add a card to keep Maya on shift.</p><div class="fh-alert__actions"><a class="fh-button fh-button--sm" href="#c-feedback">Add card</a></div></div>
    <div class="fh-alert" data-tone="danger" role="alert" data-fh="FBK"><p class="fh-alert__title">Messenger disconnected</p><p>Reconnect your Facebook page to resume replies.</p><button class="fh-close" type="button" aria-label="Dismiss"></button></div>
  </div>
  <div class="fh-stack fh-stack--lg">
    <div class="fh-progress-field" data-tone="lime" data-fh="FBK"><span>Scope complete</span><span class="fh-progress-field__value">64%</span><progress class="fh-progress" value="64" max="100">64%</progress></div>
    <div class="fh-progress-field" data-tone="sky" data-fh="FBK"><span>Uploading</span><span class="fh-progress-field__value">…</span><progress class="fh-progress"></progress></div>
    <div class="fh-progress-field" data-fh="FBK"><span>Message quota</span><span class="fh-progress-field__value">820 / 1,000</span><meter class="fh-meter" min="0" max="1000" low="700" high="900" optimum="200" value="820"></meter></div>
    <div class="fh-cluster" style="--fh-gap: var(--fh-space-5)">
      <div class="fh-ring" data-tone="teal" style="--fh-value: 72" role="img" aria-label="72 percent" data-fh="FBK">72%</div>
      <div class="fh-ring" data-tone="fuchsia" style="--fh-value: 38; --fh-ring-size: 3.5rem" role="img" aria-label="38 percent" data-fh="FBK">38</div>
      <span class="fh-spinner" aria-label="Loading" role="status" data-fh="FBK"></span>
      <button class="fh-button fh-button--icon fh-button--secondary" type="button" aria-label="Copy" data-tooltip="Copy link">⧉</button>
    </div>
    <div class="fh-cluster" style="--fh-align: flex-start; --fh-gap: var(--fh-space-3)">
      <span class="fh-skeleton fh-skeleton--circle" data-fh="FBK"></span>
      <div class="fh-skeleton" style="--fh-lines: 3; flex: 1" data-fh="FBK"></div>
    </div>
  </div>
</div>
```

### EMP · Empty state & banner

```html
<div class="fh-stack fh-stack--lg">
  <div class="fh-banner" data-tone="accent" data-fh="EMP"><span>Themes now switch with one attribute.</span><a href="#top">Read the notes</a></div>
  <div class="fh-empty" data-tone="violet" data-fh="EMP">
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

### SCD · Social card

A portrait, the name with a verified mark, a short bio, two counts and Follow. The same markup three ways (the first two set `data-fh-scheme="light"` here): the portrait framed above a plain body; `--fade` runs it the full card into a frosted body (a blur that grows toward the bottom); `--dark` fades it into ink with an inverted Follow.

```html
<div class="fh-grid" data-cols="3" style="--fh-grid-min: 15rem; --fh-gap: var(--fh-space-8); justify-items: center">
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
</div>
```

### FLD · Fields

The "Required" chip comes from the input's own `required` attribute and settles to "Done" once the field is valid. Errors only show after the visitor has interacted.

```html
<form class="fh-form" novalidate onsubmit="event.preventDefault()" data-fh="FLD">
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

### ENT · Entity picker

Choose an account, person or client by its identity: avatar, an etch line, the name and a second line, a figure for the use case, then the chevron. The open list groups its options, and each option is the same row as the selection. Real radios underneath, so it submits and takes arrow keys with no script; `firehorse.js` mirrors the pick into the trigger and fires `fh:entity`.

```html
<div class="fh-grid" data-cols="3" style="--fh-grid-min: 16rem; --fh-gap: var(--fh-space-6)">
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
</div>
```

### TBL · Table

With `fh-table--reflow`, rows turn into labelled cards when the slot is under 36rem.

```html
<div class="fh-table-wrap" data-fh="TBL">
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

### INV · Invoice

The sheet: logo and number, title, from and bill-to with the dates, line items, totals, a signature, payment details and notes. `__cover` adds a picture band; `--classic` centres the logo and sets a small-caps title. `data-fh-scheme="light"` keeps it paper on a dark page, and it prints on its own. The pay bar (`fh-pay --float`) sticks to the bottom; Pay opens the payment panel up out of it.

```html
<div style="display: grid; gap: var(--fh-space-8); padding: clamp(var(--fh-space-4), 5cqi, var(--fh-space-12)); border-radius: var(--fh-radius-lg); background: radial-gradient(60% 50% at 20% 20%, color-mix(in oklab, var(--fh-tone) 45%, transparent), transparent), radial-gradient(50% 60% at 85% 70%, color-mix(in oklab, var(--fh-tone) 30%, transparent), transparent), var(--fh-color-surface-sunken)">
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
</div>
<div class="fh-grid" data-cols="2" style="--fh-grid-min: 20rem; --fh-gap: var(--fh-space-8); margin-block-start: var(--fh-space-12)">
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
</div>
```

### BAL · Balance

The total, what is available, what is pending and declined, and the split by segment or entity.

```html
<section class="fh-balance" data-tone="teal" data-fh="BAL">
  <p class="fh-balance__label">Total balance · All</p>
  <p class="fh-balance__figure"><span class="fh-balance__currency">$</span>48,210<span class="fh-balance__cents">.33</span></p>
  <dl class="fh-balance__meta">
    <div><dt>Available</dt><dd>$41,005.10</dd></div>
    <div><dt>Owed</dt><dd>$3,120.00</dd></div>
    <div data-status="pending"><dt>Pending · 3</dt><dd>$412.80</dd></div>
    <div data-status="declined"><dt>Declined · 30d</dt><dd>2</dd></div>
  </dl>
  <div class="fh-balance__split" role="img" aria-label="Business 62 percent, Personal 38 percent">
    <span style="--fh-share: 62%" data-tone="amber"></span><span style="--fh-share: 38%" data-tone="sky"></span>
  </div>
  <ul class="fh-balance__legend">
    <li data-tone="amber"><span>Business</span><b>$29,890.40</b></li>
    <li data-tone="sky"><span>Personal</span><b>$18,319.93</b></li>
  </ul>
</section>
```

### SEG · Segment switch

All, Business, Personal; entities appear under Business.

```html
<div class="fh-stack">
  <nav class="fh-segment" aria-label="Segment" data-fh="SEG">
    <a href="#f-segment" aria-current="true">All <b>9</b></a>
    <a href="#f-segment" data-tone="amber">Business <b>5</b></a>
    <a href="#f-segment" data-tone="sky">Personal <b>4</b></a>
  </nav>
  <nav class="fh-segment fh-segment--entities" aria-label="Business" data-fh="SEG">
    <a href="#f-segment" aria-current="true">All businesses</a>
    <a href="#f-segment" data-tone="orange">Rascode</a>
    <a href="#f-segment" data-tone="violet">Lymynal</a>
  </nav>
</div>
```

### ACN · Account card

Name, institution and last four, the entity tag, balance and sync health. Owed balances read red.

```html
<div class="fh-accounts" data-fh="ACN">
  <article class="fh-account" data-tone="amber">
    <header class="fh-account__head"><span class="fh-account__mark" aria-hidden="true">CH</span><div><h3 class="fh-account__name">Operating</h3><p class="fh-account__sub">Chase · ••4417</p></div><span class="fh-account__tag" data-tone="orange">Rascode</span></header>
    <p class="fh-account__figure">$18,240.12</p>
    <dl class="fh-account__meta"><div><dt>Available</dt><dd>$17,990.12</dd></div></dl>
    <footer class="fh-account__foot"><span data-health="ok">Synced 4 min ago</span></footer>
  </article>
  <article class="fh-account" data-tone="sky">
    <header class="fh-account__head"><span class="fh-account__mark" aria-hidden="true">AX</span><div><h3 class="fh-account__name">Gold Card</h3><p class="fh-account__sub">Amex · ••1009</p></div><span class="fh-account__tag" data-tone="sky">Personal</span></header>
    <p class="fh-account__figure" data-flow="owed">−$3,120.00</p>
    <dl class="fh-account__meta"><div><dt>Limit</dt><dd>$15,000</dd></div></dl>
    <footer class="fh-account__foot"><span data-health="stale">Synced yesterday</span></footer>
  </article>
</div>
```

### LDG · Ledger

Pending first and labelled; declined and reversed struck through; money in reads green with a plus.

```html
<ol class="fh-ledger" data-fh="LDG">
  <li class="fh-ledger__day">Today</li>
  <li data-status="pending"><span class="fh-ledger__mark" aria-hidden="true">AW</span><div class="fh-ledger__what"><b>AWS</b><small>Card ••2231 · Rascode</small></div><time class="fh-ledger__when" datetime="2026-11-02">Nov 2</time><span class="fh-ledger__status">Pending</span><span class="fh-ledger__amount">−$212.40</span></li>
  <li data-status="declined"><span class="fh-ledger__mark" aria-hidden="true">FG</span><div class="fh-ledger__what"><b>Figma</b><small>Card ••8810 · Spend limit reached</small></div><time class="fh-ledger__when" datetime="2026-11-02">Nov 2</time><span class="fh-ledger__status">Declined</span><span class="fh-ledger__amount">−$45.00</span></li>
  <li data-status="posted"><span class="fh-ledger__mark" aria-hidden="true">ST</span><div class="fh-ledger__what"><b>Stripe payout</b><small>Operating · Rascode</small></div><time class="fh-ledger__when" datetime="2026-11-02">Nov 2</time><span class="fh-ledger__status">Posted</span><span class="fh-ledger__amount" data-flow="in">+$2,400.00</span></li>
</ol>
```

### VCD · Virtual card

A card face for issued cards: last four only, spend against its limit, lock and declines.

```html
<div class="fh-vcards" data-fh="VCD">
  <article class="fh-vcard" data-tone="violet" data-state="open">
    <header><span class="fh-vcard__name">AWS</span><span>Open</span></header>
    <p class="fh-vcard__number">•••• 2231</p>
    <div class="fh-vcard__limit" style="--fh-used: 42%"><span>$212 of $500 / month</span></div>
    <footer><span>Merchant-locked</span><span>0 declines · 30d</span></footer>
  </article>
  <article class="fh-vcard" data-tone="orange" data-state="paused">
    <header><span class="fh-vcard__name">Trial subscriptions</span><span>Paused</span></header>
    <p class="fh-vcard__number">•••• 8810</p>
    <div class="fh-vcard__limit" style="--fh-used: 100%"><span>$45 of $45 / transaction</span></div>
    <footer><span>Single use</span><span>3 declines · 30d</span></footer>
  </article>
</div>
```

### CNX · Connection status

One row per provider: health, last sync and the one action it needs.

```html
<ul class="fh-connections" data-fh="CNX">
  <li data-health="ok"><b>Chase</b><small>Plaid · 3 accounts</small><time>4 min ago</time><button class="fh-btn fh-btn--sm" type="button">Sync</button></li>
  <li data-health="stale"><b>Privacy.com</b><small>73 cards</small><time>Yesterday</time><button class="fh-btn fh-btn--sm" type="button">Sync</button></li>
  <li data-health="off"><b>PayPal</b><small>Not connected</small><button class="fh-btn fh-btn--sm" type="button">Connect</button></li>
</ul>
```

### REC · Record header

The top of a record page: eyebrow, mark, name, what it does, identifying facts and actions. `fh-record--cover` adds a band across the top, a picture or etched tone art, with the mark overlapping its edge.

```html
<div class="fh-stack fh-stack--lg">
<header class="fh-record" data-tone="orange" data-fh="REC-1.1">
  <p class="fh-eyebrow-pill">API · 07</p>
  <div class="fh-record__mark" data-state="live"><i class="fh-icon fh-icon--code" aria-hidden="true"></i></div>
  <div class="fh-record__id"><h2 class="fh-record__title">Ledger API</h2><p class="fh-record__sub">Accounts, entries and balances over REST.</p><p class="fh-record__meta"><span>ledger</span><span>api.example.com</span></p></div>
  <div class="fh-record__actions"><a class="fh-button fh-button--sm fh-button--secondary" href="#a-record">Docs</a><a class="fh-button fh-button--sm" href="#a-record">Open</a></div>
</header>
<header class="fh-record fh-record--cover" data-tone="teal" data-fh="REC-1.2">
  <div class="fh-record__cover"></div>
  <p class="fh-eyebrow-pill">Business · Client</p>
  <div class="fh-record__mark">AC</div>
  <div class="fh-record__id"><h2 class="fh-record__title">Acme Supply Co.</h2><p class="fh-record__sub">Tools and parts for small builders.</p><p class="fh-record__meta"><span>acme</span><span>Austin, TX</span><span>Since 2019</span></p></div>
  <div class="fh-record__actions"><a class="fh-button fh-button--sm" href="#a-record">Edit</a></div>
</header>
</div>
```

### SEC · Section card

One area of a record page: title with chips on the right, a lede, the body, and a foot for its actions. `--inset` is a sunken sub-card inside another; `--aside` puts the lede beside the title on wide slots.

```html
<div class="fh-stack">
<section class="fh-section-card" data-tone="teal" aria-labelledby="sec-demo-1" data-fh="SEC-1.1">
  <header class="fh-section-card__head">
    <h2 class="fh-section-card__title" id="sec-demo-1"><i class="fh-icon fh-icon--building-2" aria-hidden="true"></i>Identity</h2>
    <div class="fh-section-card__tools">
      <span class="fh-chip" data-tone="lime">Complete</span>
      <span class="fh-chip" data-tone="teal">7 fields</span>
    </div>
  </header>
  <p class="fh-section-card__lede">Who the business is: the names it files and trades under, its code across the platform, and how it describes itself on its site and profiles.</p>
  <div class="fh-metrics">
    <article class="fh-metric" data-tone="teal"><p class="fh-metric__label"><i class="fh-icon fh-icon--scale" aria-hidden="true"></i>Structure</p><p class="fh-metric__value">LLC</p><p class="fh-metric__sub">Texas · Mar 2019</p></article>
    <article class="fh-metric" data-tone="sky"><p class="fh-metric__label"><i class="fh-icon fh-icon--tag" aria-hidden="true"></i>Brands</p><p class="fh-metric__value">3</p><p class="fh-metric__sub">Acme, Acme Pro, Field Kit</p></article>
    <article class="fh-metric" data-tone="orange"><p class="fh-metric__label"><i class="fh-icon fh-icon--map-pin" aria-hidden="true"></i>Locations</p><p class="fh-metric__value">2</p><p class="fh-metric__sub">Austin, San Marcos</p></article>
  </div>
  <h3 class="fh-section-card__subhead">Names</h3>
  <dl class="fh-kv fh-kv--fields">
    <div><dt><label for="sec-legal">Legal name</label></dt><dd><input class="fh-input" id="sec-legal" value="Acme Supply Co. LLC"></dd></div>
    <div><dt><label for="sec-dba">Trades as</label></dt><dd><input class="fh-input" id="sec-dba" value="Acme"></dd></div>
    <div><dt><label for="sec-code">Code</label></dt><dd><input class="fh-input" id="sec-code" value="acme"></dd></div>
    <div><dt><label for="sec-site">Website</label></dt><dd><input class="fh-input" id="sec-site" type="url" value="https://acme-supply.example"></dd></div>
    <div class="fh-kv__full"><dt><label for="sec-about">About</label></dt><dd><textarea class="fh-textarea" id="sec-about" rows="2">Tools, fasteners and parts for small builders across Central Texas. Same-day pickup in Austin.</textarea></dd></div>
  </dl>
  <p class="fh-section-card__note">The legal name comes from the state filing; change it there and it updates here.</p>
  <footer class="fh-section-card__foot">
    <p class="fh-section-card__note">Saved Oct 28 by Eleanor Vance</p>
    <button class="fh-button fh-button--sm fh-button--secondary" type="button">Reset</button>
    <button class="fh-button fh-button--sm" type="button">Save</button>
  </footer>
</section>
<section class="fh-section-card" aria-labelledby="sec-demo-2">
  <header class="fh-section-card__head"><h2 class="fh-section-card__title" id="sec-demo-2"><i class="fh-icon fh-icon--map-pin" aria-hidden="true"></i>Addresses</h2></header>
  <div class="fh-grid" data-cols="2">
    <section class="fh-section-card fh-section-card--inset" aria-labelledby="sec-demo-3" data-fh="SEC-1.2">
      <header class="fh-section-card__head"><h3 class="fh-section-card__title" id="sec-demo-3">Headquarters</h3><div class="fh-section-card__tools"><span class="fh-chip" data-tone="sky">Default</span></div></header>
      <dl class="fh-kv fh-kv--single"><div><dt>Street</dt><dd>400 Congress Ave, Suite 210</dd></div><div><dt>City</dt><dd>Austin, TX 78701</dd></div></dl>
    </section>
    <section class="fh-section-card fh-section-card--inset" aria-labelledby="sec-demo-4">
      <header class="fh-section-card__head"><h3 class="fh-section-card__title" id="sec-demo-4">Mailing</h3></header>
      <p class="fh-section-card__note">Same as default</p>
    </section>
  </div>
</section>
<section class="fh-section-card fh-section-card--aside" aria-labelledby="sec-demo-5" data-fh="SEC-1.3">
  <header class="fh-section-card__head"><h2 class="fh-section-card__title" id="sec-demo-5"><i class="fh-icon fh-icon--code" aria-hidden="true"></i>Property record</h2></header>
  <p class="fh-section-card__lede">The full record as stored, and as structured data for search engines.</p>
</section>
</div>
```

### MET · Metric tiles

One fact per tile: label with an icon, the value, a line under it and where it came from. As many across as fit. Add an `fh-progress` for a share done, `--needed` for a fact still to fill in, or make the tile an `<a>` to open its area. `--spread` puts the label and description at the top and the value at the bottom, with a wide gap. `__row` holds avatars, cubes and chips. `__more` is an etched line with a chevron: open, the tile grows in place and shows its detail, so the chevron stays under the pointer; use `--full` when the detail needs room. `__delta` shows the change (`data-trend`; `data-good="down"` where down is good), and a sparkline, ring or gauge drops in as it is.

```html
<div class="fh-metrics">
  <article class="fh-metric" data-tone="teal" data-fh="MET-1.1">
    <p class="fh-metric__label"><i class="fh-icon fh-icon--building-2" aria-hidden="true"></i>Structure</p>
    <p class="fh-metric__sub">Formed 2019 · Delaware</p>
    <p class="fh-metric__value">LLC</p>
    <p class="fh-metric__source">State records</p>
  </article>
  <article class="fh-metric" data-tone="lime" data-fh="MET-1.2">
    <p class="fh-metric__label"><i class="fh-icon fh-icon--credit-card" aria-hidden="true"></i>Stripe</p>
    <p class="fh-metric__sub">Next: bank account</p>
    <p class="fh-metric__value">82%</p>
    <progress class="fh-progress" value="82" max="100">82%</progress>
  </article>
  <article class="fh-metric fh-metric--needed" data-fh="MET-1.3">
    <p class="fh-metric__label"><i class="fh-icon fh-icon--receipt" aria-hidden="true"></i>EIN</p>
    <p class="fh-metric__sub">For Stripe and PayPal</p>
    <p class="fh-metric__value">Needed</p>
  </article>
  <article class="fh-metric fh-metric--spread" data-tone="fuchsia" data-fh="MET-1.5">
    <p class="fh-metric__label"><i class="fh-icon fh-icon--shield-check" aria-hidden="true"></i>Payment readiness</p>
    <p class="fh-metric__sub">What Stripe still needs before payouts</p>
    <p class="fh-metric__value">3 of 11</p>
    <progress class="fh-progress" value="27" max="100">27%</progress>
  </article>
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
  <article class="fh-metric" data-tone="lime" data-fh="MET-1.8">
    <p class="fh-metric__label"><i class="fh-icon fh-icon--dollar-sign" aria-hidden="true"></i>Revenue · 30 d</p>
    <p class="fh-metric__sub">vs September</p>
    <div class="fh-metric__figure"><p class="fh-metric__value">$48,210</p><span class="fh-metric__delta" data-trend="up">12%</span></div>
  </article>
  <article class="fh-metric" data-tone="sky" data-good="down" data-fh="MET-1.9">
    <p class="fh-metric__label"><i class="fh-icon fh-icon--trending-down" aria-hidden="true"></i>Churn</p>
    <p class="fh-metric__sub">Down is good here</p>
    <div class="fh-metric__figure"><p class="fh-metric__value">2.1%</p><span class="fh-metric__delta" data-trend="down">0.4 pt</span></div>
  </article>
  <article class="fh-metric" data-tone="teal" data-fh="MET-1.10">
    <p class="fh-metric__label"><i class="fh-icon fh-icon--chart-line" aria-hidden="true"></i>Orders · 12 wk</p>
    <div class="fh-metric__figure"><p class="fh-metric__value">42</p><span class="fh-metric__delta" data-trend="up">8</span><svg class="fh-sparkline" viewBox="0 0 120 32" preserveAspectRatio="none" aria-hidden="true"><path d="M0.0 30.0 L10.9 25.3 L21.8 27.7 L32.7 20.7 L43.6 23.0 L54.5 16.0 L65.5 18.3 L76.4 11.3 L87.3 12.5 L98.2 6.7 L109.1 9.0 L120.0 2.0 L120 32 L0 32Z" fill="currentColor" opacity=".12"></path><path d="M0.0 30.0 L10.9 25.3 L21.8 27.7 L32.7 20.7 L43.6 23.0 L54.5 16.0 L65.5 18.3 L76.4 11.3 L87.3 12.5 L98.2 6.7 L109.1 9.0 L120.0 2.0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"></path></svg></div>
  </article>
  <article class="fh-metric" data-tone="amber" data-fh="MET-1.11">
    <p class="fh-metric__label"><i class="fh-icon fh-icon--gauge" aria-hidden="true"></i>Credit used</p>
    <div class="fh-gauge" style="--fh-value: 31; --fh-gauge-size: 8rem" role="img" aria-label="31% of the credit line used"><b>31%</b><small>of $40,000</small></div>
  </article>
  <a class="fh-metric" data-tone="sky" href="#a-metric" data-fh="MET-1.4">
    <p class="fh-metric__label"><i class="fh-icon fh-icon--users" aria-hidden="true"></i>Faces</p>
    <p class="fh-metric__sub">2 public</p>
    <p class="fh-metric__value">4</p>
  </a>
</div>
```

### MET-2 · Spread tiles

The flagship tile: a bold title and its line at the top, a wide gap, the figure at the bottom, so a row of tiles lines up at both ends. Anything below the figure (delta, sparkline, avatars, progress, source, detail) keeps its order. `--tinted` leads a row; `--wide` takes two columns; `--full` takes the full width, and a table in it fills the tile.

```html
<div class="fh-metrics" style="--fh-metrics-min: 14rem">
  <article class="fh-metric fh-metric--spread" data-tone="lime">
    <p class="fh-metric__label"><i class="fh-icon fh-icon--credit-card" aria-hidden="true"></i>Stripe</p>
    <p class="fh-metric__sub">Next: confirm the payout bank account</p>
    <p class="fh-metric__value">82%</p>
    <progress class="fh-progress" value="82" max="100">82%</progress>
    <p class="fh-metric__source">9 of 11 facts</p>
  </article>
  <article class="fh-metric fh-metric--spread" data-tone="teal">
    <p class="fh-metric__label"><i class="fh-icon fh-icon--dollar-sign" aria-hidden="true"></i>Revenue · 30 d</p>
    <p class="fh-metric__sub">All brands, after refunds</p>
    <div class="fh-metric__figure"><p class="fh-metric__value">$48,210</p><span class="fh-metric__delta" data-trend="up">12%</span></div>
    <p class="fh-metric__source">vs September</p>
  </article>
  <article class="fh-metric fh-metric--spread" data-tone="sky">
    <p class="fh-metric__label"><i class="fh-icon fh-icon--chart-line" aria-hidden="true"></i>Orders</p>
    <p class="fh-metric__sub">Last 12 weeks</p>
    <div class="fh-metric__figure"><p class="fh-metric__value">42</p><span class="fh-metric__delta" data-trend="up">8</span><svg class="fh-sparkline" viewBox="0 0 120 32" preserveAspectRatio="none" aria-hidden="true"><path d="M0.0 30.0 L10.9 25.3 L21.8 27.7 L32.7 20.7 L43.6 23.0 L54.5 16.0 L65.5 18.3 L76.4 11.3 L87.3 12.5 L98.2 6.7 L109.1 9.0 L120.0 2.0 L120 32 L0 32Z" fill="currentColor" opacity=".12"/><path d="M0.0 30.0 L10.9 25.3 L21.8 27.7 L32.7 20.7 L43.6 23.0 L54.5 16.0 L65.5 18.3 L76.4 11.3 L87.3 12.5 L98.2 6.7 L109.1 9.0 L120.0 2.0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"/></svg></div>
    <p class="fh-metric__source">All channels</p>
  </article>
  <article class="fh-metric fh-metric--spread" data-tone="violet">
    <p class="fh-metric__label"><i class="fh-icon fh-icon--users" aria-hidden="true"></i>Team</p>
    <p class="fh-metric__sub">Who can sign in and act for the business</p>
    <div class="fh-metric__figure"><p class="fh-metric__value">4</p><div class="fh-avatars" role="group" aria-label="Team"><span class="fh-avatar fh-avatar--sm fh-avatar--square"><img src="/img/avatars/ava.webp" alt="Ava"></span><span class="fh-avatar fh-avatar--sm fh-avatar--square"><img src="/img/avatars/cole.webp" alt="Cole"></span><span class="fh-avatar fh-avatar--sm fh-avatar--square"><img src="/img/avatars/maya.webp" alt="Maya"></span><span class="fh-avatar fh-avatar--sm fh-avatar--square fh-avatars__more">+1</span></div></div>
    <p class="fh-metric__source">People</p>
  </article>
  <article class="fh-metric fh-metric--spread fh-metric--tinted" data-tone="orange">
    <p class="fh-metric__label"><i class="fh-icon fh-icon--globe" aria-hidden="true"></i>Google profile</p>
    <p class="fh-metric__sub">Next: opening hours for each location</p>
    <p class="fh-metric__value">45%</p>
    <progress class="fh-progress" value="45" max="100">45%</progress>
    <p class="fh-metric__source">5 of 11 facts</p>
  </article>
  <article class="fh-metric fh-metric--spread fh-metric--full" data-tone="sky">
    <p class="fh-metric__label"><i class="fh-icon fh-icon--receipt" aria-hidden="true"></i>Open invoices</p>
    <p class="fh-metric__sub">5 invoices, 1 overdue</p>
    <p class="fh-metric__value">$6,940</p>
    <details class="fh-metric__more"><summary>Breakdown <i class="fh-icon fh-icon--chevron-down" aria-hidden="true"></i></summary>
      <dl class="fh-kv"><div><dt>Brightline Builders</dt><dd>$2,180.00</dd></div><div><dt>Mesa Homes</dt><dd>$3,420.00</dd></div><div><dt>Harbor &amp; Pine</dt><dd>$940.00</dd></div><div><dt>Cobalt Roofing · overdue</dt><dd>$400.00</dd></div></dl>
    </details>
  </article>
  <article class="fh-metric fh-metric--spread fh-metric--wide" data-tone="teal">
    <p class="fh-metric__label"><i class="fh-icon fh-icon--gauge" aria-hidden="true"></i>Credit line</p>
    <p class="fh-metric__sub">Drawn against $40,000 at Cedar Valley Bank</p>
    <div class="fh-metric__figure"><p class="fh-metric__value">$12,500</p><span class="fh-metric__delta" data-trend="flat">0</span></div>
    <progress class="fh-progress" value="31" max="100">31%</progress>
    <p class="fh-metric__source">31% drawn · 9.4% rate</p>
  </article>
  <article class="fh-metric fh-metric--spread fh-metric--full" data-tone="sky">
    <p class="fh-metric__label"><i class="fh-icon fh-icon--receipt" aria-hidden="true"></i>Invoices this month</p>
    <p class="fh-metric__sub">Sent from all brands; amounts before card fees</p>
    <div class="fh-metric__figure"><p class="fh-metric__value">$6,940</p><span class="fh-metric__delta" data-trend="up">$1,120</span></div>
    <div class="fh-table-wrap"><table class="fh-table fh-table--reflow"><thead><tr><th>Invoice</th><th>Customer</th><th>Sent</th><th class="fh-num">Amount</th><th>Status</th></tr></thead><tbody><tr><td data-label="Invoice">INV-1042</td><td data-label="Customer">Brightline Builders</td><td data-label="Sent">Oct 30</td><td class="fh-num" data-label="Amount">$2,180.00</td><td data-label="Status"><span class="fh-chip" data-tone="amber">Due</span></td></tr><tr><td data-label="Invoice">INV-1041</td><td data-label="Customer">Harbor &amp; Pine</td><td data-label="Sent">Oct 26</td><td class="fh-num" data-label="Amount">$940.00</td><td data-label="Status"><span class="fh-chip" data-tone="lime">Paid</span></td></tr><tr><td data-label="Invoice">INV-1040</td><td data-label="Customer">Mesa Homes</td><td data-label="Sent">Oct 21</td><td class="fh-num" data-label="Amount">$3,420.00</td><td data-label="Status"><span class="fh-chip" data-tone="amber">Due</span></td></tr><tr><td data-label="Invoice">INV-1038</td><td data-label="Customer">Cobalt Roofing</td><td data-label="Sent">Oct 9</td><td class="fh-num" data-label="Amount">$400.00</td><td data-label="Status"><span class="fh-chip" data-tone="danger">Overdue</span></td></tr></tbody></table></div>
  </article>
</div>
```

### GAU · Gauge

A full-circle meter from `--fh-value` (0–100): the figure in the middle, the caption under it, and an indicator with rounded ends running clockwise from the top. The indicator takes the tone; set it from the value. Sizes with `--fh-gauge-size`; thickness with `--fh-gauge-width`.

```html
<div class="fh-cluster" style="gap: var(--fh-space-8)">
  <div class="fh-gauge" data-tone="lime" style="--fh-value: 82" role="img" aria-label="82% ready" data-fh="GAU-1.1"><b>82%</b><small>Ready</small></div>
  <div class="fh-gauge" data-tone="amber" style="--fh-value: 64" role="img" aria-label="64% of the limit used"><b>64%</b><small>Of limit</small></div>
  <div class="fh-gauge" data-tone="danger" style="--fh-value: 93; --fh-gauge-size: 6rem; --fh-gauge-width: 0.45rem" role="img" aria-label="93% of storage used" data-fh="GAU-1.2"><b>93%</b><small>Storage</small></div>
</div>
```

### TRA · Tracker

A day's check-offs as one section, as on Helm's Today: the title with the day's bar and the done items as chips flush right; a quick-add bar across the page; check-off cards (one height per row, text flush left, the action's icon large on the left, an etched check top right, a bar with a line above and below); the day's log beside them. Each card is a button that opens a check-off dialog.

```html
<section class="fh-tracker" data-fh="TRA-1.1">
  <header class="fh-tracker__head"><h3 class="fh-h3">Habits</h3>
    <p class="fh-tracker__meter" data-tone="lime"><progress class="fh-progress" value="38" max="100">38%</progress><b>38%</b></p>
    <ul class="fh-tracker__done"><li class="fh-chip" data-tone="orange"><i class="fh-icon fh-icon--check" aria-hidden="true"></i>Workout <b>+20</b></li><li class="fh-chip" data-tone="orange"><i class="fh-icon fh-icon--check" aria-hidden="true"></i>25 push-ups <b>+20</b></li><li class="fh-chip" data-tone="lime"><i class="fh-icon fh-icon--check" aria-hidden="true"></i>Haritaki <b>+20</b></li></ul>
  </header>
  <div class="fh-quick" role="group" aria-label="Quick add"><p class="fh-quick__label">Quick add</p>
    <button class="fh-quick__action" type="button" data-tone="orange"><i class="fh-icon fh-icon--biceps-flexed" aria-hidden="true"></i>+25 push-ups</button>
    <button class="fh-quick__action" type="button" data-tone="sky"><i class="fh-icon fh-icon--phone" aria-hidden="true"></i>Log a phone call</button>
    <button class="fh-quick__action" type="button" data-tone="sky"><i class="fh-icon fh-icon--send" aria-hidden="true"></i>One outreach</button>
    <button class="fh-quick__action" type="button" data-tone="violet"><i class="fh-icon fh-icon--book-open" aria-hidden="true"></i>Read 30 pages</button>
    <button class="fh-quick__action" type="button" data-tone="lime"><i class="fh-icon fh-icon--droplet" aria-hidden="true"></i>Glass of water</button>
  </div>
  <div class="fh-tracker__body">
    <ul class="fh-check-cards">
          <li><button class="fh-check-card" type="button" data-tone="orange"><span class="fh-check-card__check"></span><span class="fh-check-card__area"><i class="fh-icon fh-icon--flame" aria-hidden="true"></i>Fit</span><span class="fh-check-card__icon"><i class="fh-icon fh-icon--person-standing" aria-hidden="true"></i></span><span class="fh-check-card__title"><small>Do</small>Cardio</span><span class="fh-check-card__meter"><span class="fh-check-card__above"><span>30 minutes</span><span>+20 pts</span></span><progress class="fh-progress" value="0" max="30"></progress><span class="fh-check-card__below">0 of 30 done</span></span></button></li>
          <li><button class="fh-check-card" type="button" data-tone="lime"><span class="fh-check-card__check"></span><span class="fh-check-card__area"><i class="fh-icon fh-icon--leaf" aria-hidden="true"></i>Health</span><span class="fh-check-card__icon"><i class="fh-icon fh-icon--pill" aria-hidden="true"></i></span><span class="fh-check-card__title"><small>Take</small>Ashwagandha</span><span class="fh-check-card__meter"><span class="fh-check-card__above"><span>1 tsp</span><span>+20 pts</span></span><progress class="fh-progress" value="0" max="1"></progress><span class="fh-check-card__below">0 of 1 done</span></span></button></li>
          <li><button class="fh-check-card" type="button" data-tone="sky"><span class="fh-check-card__check"></span><span class="fh-check-card__area"><i class="fh-icon fh-icon--brain" aria-hidden="true"></i>Mind</span><span class="fh-check-card__icon"><i class="fh-icon fh-icon--pen-line" aria-hidden="true"></i></span><span class="fh-check-card__title"><small>Write</small>Longform piece</span><span class="fh-check-card__meter"><span class="fh-check-card__above"><span>1000 words</span><span>+20 pts</span></span><progress class="fh-progress" value="350" max="1000"></progress><span class="fh-check-card__below">350 of 1000 done</span></span></button></li>
          <li><button class="fh-check-card" type="button" data-tone="sky"><span class="fh-check-card__check"></span><span class="fh-check-card__area"><i class="fh-icon fh-icon--brain" aria-hidden="true"></i>Mind</span><span class="fh-check-card__icon"><i class="fh-icon fh-icon--phone" aria-hidden="true"></i></span><span class="fh-check-card__title"><small>Make</small>Phone calls</span><span class="fh-check-card__meter"><span class="fh-check-card__above"><span>3 calls</span><span>+20 pts</span></span><progress class="fh-progress" value="1" max="3"></progress><span class="fh-check-card__below">1 of 3 done</span></span></button></li>
          <li><button class="fh-check-card" type="button" data-tone="violet"><span class="fh-check-card__check"></span><span class="fh-check-card__area"><i class="fh-icon fh-icon--sparkles" aria-hidden="true"></i>Soul</span><span class="fh-check-card__icon"><i class="fh-icon fh-icon--sunrise" aria-hidden="true"></i></span><span class="fh-check-card__title"><small>Practice</small>Rising Center</span><span class="fh-check-card__meter"><span class="fh-check-card__above"><span>7 times</span><span>+20 pts</span></span><progress class="fh-progress" value="0" max="7"></progress><span class="fh-check-card__below">0 of 7 done</span></span></button></li>
    </ul>
    <aside class="fh-tracker__log"><h4>Today’s log <span>3</span></h4><ol>
      <li data-tone="orange"><time>7:10 AM</time><div><b>Workout</b><span>6 workouts</span></div></li>
      <li data-tone="orange"><time>7:40 AM</time><div><b>25 push-ups</b><span>25 push-ups</span></div></li>
      <li data-tone="lime"><time>8:05 AM</time><div><b>Haritaki</b><span>1 tbsp · with water</span></div></li>
    </ol></aside>
  </div>
</section>
```

### THB · Thumbnails & link cards

A YouTube thumbnail with the host in a tone ring (the timestamp covers the bottom right), and the Open Graph card every link preview uses: X, LinkedIn, Slack, iMessage.

```html
<dl class="site-media" style="--site-media-cols: 1.778fr 1.905fr">
  <div><dt>YouTube thumbnail<code>.fh-canvas--yt-thumb · 1280 × 720</code></dt><dd>
    <article class="fh-canvas fh-canvas--yt-thumb fh-canvas--split" data-tone="accent" data-fh="THB-1.1">
      <div class="fh-canvas__body">
        <div class="fh-canvas__top"><span class="fh-canvas__badge">New</span></div>
        <div class="fh-canvas__main"><h2 class="fh-canvas__title">One file, <mark>every</mark> theme</h2></div>
        <div class="fh-canvas__foot"><span><b>EP 07</b> · Firehorse</span></div>
        <figure class="fh-canvas__media fh-canvas__media--round"><img src="img/avatars/maya.webp" alt></figure>
      </div>
    </article></dd></div>
  <div><dt>Link card (Open Graph)<code>.fh-canvas--og · 1200 × 630</code></dt><dd>
    <article class="fh-canvas fh-canvas--og" data-tone="sky" data-fh="THB-1.2">
      <div class="fh-canvas__body">
        <div class="fh-canvas__top"><span class="fh-canvas__mark"><i>_</i>firehorse</span><p class="fh-canvas__eyebrow">Docs · Media</p></div>
        <div class="fh-canvas__main"><h2 class="fh-canvas__title">Media, <em>at the size it ships</em></h2><p class="fh-canvas__sub">Posts, headers, thumbnails, covers and slides from one set of tokens.</p></div>
        <div class="fh-canvas__foot"><span>firehorse.rascode.dev</span><span>v1.1</span></div>
      </div>
    </article></dd></div>
</dl>
```

### SOC · Posts & stories

A 4:5 feed post (Instagram, Threads, LinkedIn; the profile grid trims it to 3:4), a square carousel card, a 9:16 story for Stories, Reels, Shorts and TikTok with the app's top and bottom bands kept clear, and a type specimen (`--specimen` with `data-fh-type`): the headline big at the top, the face named at the foot.

```html
<dl class="site-media" style="--site-media-cols: 8fr 10fr 5.625fr">
  <div><dt>Feed post<code>.fh-canvas--post · 1080 × 1350</code></dt><dd>
    <article class="fh-canvas fh-canvas--post" data-tone="violet" data-fh="SOC-1.1">
      <div class="fh-canvas__body">
        <div class="fh-canvas__top"><p class="fh-canvas__eyebrow">Release notes</p></div>
        <div class="fh-canvas__main">
          <h2 class="fh-canvas__title">Themes are <em>one file now</em></h2>
          <ul class="fh-canvas__cubes"><li><b>3</b> themes</li><li><b>183</b> icons</li><li><b>0</b> js</li></ul>
        </div>
        <div class="fh-canvas__foot"><span>@firehorse</span><span>01 / 05</span></div>
      </div>
    </article></dd></div>
  <div><dt>Square card<code>.fh-canvas--square · 1080 × 1080</code></dt><dd>
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
    </article></dd></div>
  <div><dt>Story / Reel / Short<code>.fh-canvas--story · 1080 × 1920</code></dt><dd>
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
    </article></dd></div>
</dl>
<dl class="site-media" style="--site-media-cols: 1fr 1fr; margin-block-start: var(--fh-space-10)">
  <div><dt>Type specimen<code>.fh-canvas--post.fh-canvas--specimen · data-fh-type="hanken"</code></dt><dd>
    <article class="fh-canvas fh-canvas--post fh-canvas--specimen" data-fh-type="hanken" data-fh="SOC-1.4">
      <figure class="fh-canvas__media"><img src="img/backdrop/lipizzaner-horse.webp" alt></figure>
      <div class="fh-canvas__body">
        <div class="fh-canvas__top"><h2 class="fh-canvas__title">Beyond the ordinary</h2><span>TWF</span></div>
        <div class="fh-canvas__main"></div>
        <div class="fh-canvas__foot"><span>−5% letter spacing</span><p class="fh-canvas__face"><small>Font</small><b>Hanken<br>Grotesk</b></p></div>
      </div>
    </article></dd></div>
  <div><dt>Type specimen · Archivo<code>.fh-canvas--post.fh-canvas--specimen · data-fh-type="archivo"</code></dt><dd>
    <article class="fh-canvas fh-canvas--post fh-canvas--specimen" data-fh-type="archivo" data-fh="SOC-1.5">
      <figure class="fh-canvas__media"><img src="img/backdrop/firehorse-hoof.webp" alt></figure>
      <div class="fh-canvas__body">
        <div class="fh-canvas__top"><h2 class="fh-canvas__title">Create something different</h2><span>TWF</span></div>
        <div class="fh-canvas__main"></div>
        <div class="fh-canvas__foot"><span>−3% letter spacing</span><p class="fh-canvas__face"><small>Font</small><b>Archivo</b></p></div>
      </div>
    </article></dd></div>
</dl>
```

### WAL · Home screen wallpapers

A wallpaper drawn on the phone's own icon grid: the brand on icon row 1, the page title on row 2, an etched rule with a tone tick, then a dashed cell where each icon lands, and the dock. Leave rows 1 and 2 empty on that home page and the icons fill the cells. iOS uses one wallpaper for every home page, so make one per Focus (each Focus gets its own page and wallpaper), and turn off Perspective Zoom so it isn't scaled. `--wall-clean` drops the cells; `--wall-5x5` is the denser Android grid. Grid positions are estimates until measured on each device: correct a preset with its `--fh-wall-*` numbers.

```html
<dl class="site-media site-media--wall" style="--site-media-cols: 0.460fr 0.461fr 0.461fr 0.460fr">
  <div><dt>iPhone 6.3″<code>.fh-canvas--wall-iphone · 1206 × 2622 · 17, 17 Pro, 18 Pro</code></dt><dd>
    <article class="fh-canvas fh-canvas--wall fh-canvas--wall-iphone" data-tone="accent" data-fh="WAL-1.1">
      <div class="fh-canvas__band">
        <div class="fh-canvas__top"><span class="fh-canvas__mark"><i>_</i>firehorse</span><p class="fh-canvas__eyebrow">Focus 01</p></div>
        <h2 class="fh-canvas__title">Studio</h2>
      </div>
      <ol class="fh-canvas__cells" aria-hidden="true"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ol>
      <ol class="fh-canvas__dock" aria-hidden="true"><li></li><li></li><li></li><li></li><li></li></ol>
    </article></dd></div>
  <div><dt>iPhone 6.1″<code>.fh-canvas--wall-iphone-61 · 1179 × 2556 · 15, 15 Pro, 16</code></dt><dd>
    <article class="fh-canvas fh-canvas--wall fh-canvas--wall-iphone-61" data-tone="sky" data-fh="WAL-1.2">
      <div class="fh-canvas__band">
        <div class="fh-canvas__top"><span class="fh-canvas__mark"><i>_</i>firehorse</span><p class="fh-canvas__eyebrow">Focus 02</p></div>
        <h2 class="fh-canvas__title">Work</h2>
      </div>
      <ol class="fh-canvas__cells" aria-hidden="true"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ol>
      <ol class="fh-canvas__dock" aria-hidden="true"><li></li><li></li><li></li><li></li><li></li></ol>
    </article></dd></div>
  <div><dt>iPhone Air<code>.fh-canvas--wall-iphone-air · 1260 × 2736 · Air</code></dt><dd>
    <article class="fh-canvas fh-canvas--wall fh-canvas--wall-iphone-air" data-tone="lime" data-fh="WAL-1.3">
      <div class="fh-canvas__band">
        <div class="fh-canvas__top"><span class="fh-canvas__mark"><i>_</i>firehorse</span><p class="fh-canvas__eyebrow">Focus 03</p></div>
        <h2 class="fh-canvas__title">Personal</h2>
      </div>
      <ol class="fh-canvas__cells" aria-hidden="true"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ol>
      <ol class="fh-canvas__dock" aria-hidden="true"><li></li><li></li><li></li><li></li><li></li></ol>
    </article></dd></div>
  <div><dt>iPhone 6.9″<code>.fh-canvas--wall-iphone-max · 1320 × 2868 · 17 Pro Max, 18 Pro Max</code></dt><dd>
    <article class="fh-canvas fh-canvas--wall fh-canvas--wall-iphone-max" data-tone="amber" data-fh="WAL-1.4">
      <div class="fh-canvas__band">
        <div class="fh-canvas__top"><span class="fh-canvas__mark"><i>_</i>firehorse</span><p class="fh-canvas__eyebrow">Focus 04</p></div>
        <h2 class="fh-canvas__title">Travel</h2>
      </div>
      <ol class="fh-canvas__cells" aria-hidden="true"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ol>
      <ol class="fh-canvas__dock" aria-hidden="true"><li></li><li></li><li></li><li></li><li></li></ol>
    </article></dd></div>
</dl>
<dl class="site-media site-media--wall" style="--site-media-cols: 0.448fr 0.449fr 0.462fr 0.462fr; margin-block-start: var(--fh-space-10)">
  <div><dt>Pixel Pro<code>.fh-canvas--wall-pixel · 1280 × 2856 · Pixel 11 Pro, 10 Pro</code></dt><dd>
    <article class="fh-canvas fh-canvas--wall fh-canvas--wall-pixel" data-tone="violet" data-fh="WAL-2.1">
      <div class="fh-canvas__band">
        <div class="fh-canvas__top"><span class="fh-canvas__mark"><i>_</i>firehorse</span><p class="fh-canvas__eyebrow">Mode 01</p></div>
        <h2 class="fh-canvas__title">Studio</h2>
      </div>
      <ol class="fh-canvas__cells" aria-hidden="true"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ol>
      <ol class="fh-canvas__dock" aria-hidden="true"><li></li><li></li><li></li><li></li><li></li></ol>
    </article></dd></div>
  <div><dt>Pixel Pro XL · 5 × 5<code>.fh-canvas--wall-pixel-xl .fh-canvas--wall-5x5 · 1344 × 2992 · Pixel 11 Pro XL, 10 Pro XL</code></dt><dd>
    <article class="fh-canvas fh-canvas--wall fh-canvas--wall-pixel-xl fh-canvas--wall-5x5" data-tone="teal" data-fh="WAL-2.2">
      <div class="fh-canvas__band">
        <div class="fh-canvas__top"><span class="fh-canvas__mark"><i>_</i>firehorse</span><p class="fh-canvas__eyebrow">Mode 02</p></div>
        <h2 class="fh-canvas__title">Work</h2>
      </div>
      <ol class="fh-canvas__cells" aria-hidden="true"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ol>
      <ol class="fh-canvas__dock" aria-hidden="true"><li></li><li></li><li></li><li></li><li></li></ol>
    </article></dd></div>
  <div><dt>Galaxy S<code>.fh-canvas--wall-galaxy · 1080 × 2340 · S26, S25</code></dt><dd>
    <article class="fh-canvas fh-canvas--wall fh-canvas--wall-galaxy" data-tone="rose" data-fh="WAL-3.1">
      <div class="fh-canvas__band">
        <div class="fh-canvas__top"><span class="fh-canvas__mark"><i>_</i>firehorse</span><p class="fh-canvas__eyebrow">Mode 01</p></div>
        <h2 class="fh-canvas__title">Personal</h2>
      </div>
      <ol class="fh-canvas__cells" aria-hidden="true"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ol>
      <ol class="fh-canvas__dock" aria-hidden="true"><li></li><li></li><li></li><li></li><li></li></ol>
    </article></dd></div>
  <div><dt>Galaxy Plus / Ultra · 5 × 5<code>.fh-canvas--wall-galaxy-qhd .fh-canvas--wall-5x5 · 1440 × 3120 · S26+, S26 Ultra, S25+, S25 Ultra</code></dt><dd>
    <article class="fh-canvas fh-canvas--wall fh-canvas--wall-galaxy-qhd fh-canvas--wall-5x5" data-tone="orange" data-fh="WAL-3.2">
      <div class="fh-canvas__band">
        <div class="fh-canvas__top"><span class="fh-canvas__mark"><i>_</i>firehorse</span><p class="fh-canvas__eyebrow">Mode 02</p></div>
        <h2 class="fh-canvas__title">Travel</h2>
      </div>
      <ol class="fh-canvas__cells" aria-hidden="true"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ol>
      <ol class="fh-canvas__dock" aria-hidden="true"><li></li><li></li><li></li><li></li><li></li></ol>
    </article></dd></div>
</dl>
```

### HDR · Profile headers

Channel and profile banners in one row: the copy sits inside the part every device shows. YouTube shows only the centre 1546 × 423 of its banner on phones; X and LinkedIn put the profile photo over the lower left.

```html
<dl class="site-media" style="--site-media-cols: 3fr 4fr">
  <div class="site-media__wide"><dt>YouTube channel banner<code>.fh-canvas--yt-banner · .fh-canvas--plate · 2560 × 1440 · safe 1546 × 423</code></dt><dd>
    <header class="fh-canvas fh-canvas--yt-banner fh-canvas--row fh-canvas--plate" data-tone="accent" data-fh="HDR-1.1">
      <figure class="fh-canvas__media"><img src="img/backdrop/firehorse-horse.webp" alt></figure>
      <div class="fh-canvas__body">
        <div class="fh-canvas__top"><span class="fh-canvas__mark"><i>_</i>firehorse</span><p class="fh-canvas__eyebrow">New every Thursday</p></div>
        <div class="fh-canvas__main"><h2 class="fh-canvas__title">Design systems, <em>built in public</em></h2></div>
        <ul class="fh-canvas__cubes"><li><b>CSS</b> tokens</li><li><b>JS</b> optional</li></ul>
      </div>
    </header></dd></div>
  <div><dt>X / Bluesky header<code>.fh-canvas--x-header · 1500 × 500</code></dt><dd>
    <header class="fh-canvas fh-canvas--x-header fh-canvas--row" data-tone="sky" data-fh="HDR-1.2">
      <div class="fh-canvas__body">
        <div class="fh-canvas__main"><h2 class="fh-canvas__title">Tokens in, <em>pixels out</em></h2><p class="fh-canvas__sub">Notes on Firehorse, weekly.</p></div>
        <span class="fh-canvas__mark"><i>_</i>firehorse</span>
      </div>
    </header></dd></div>
  <div><dt>LinkedIn banner<code>.fh-canvas--li-banner · 1584 × 396</code></dt><dd>
    <header class="fh-canvas fh-canvas--li-banner fh-canvas--row" data-tone="teal" data-fh="HDR-1.3">
      <div class="fh-canvas__body">
        <div class="fh-canvas__main"><h2 class="fh-canvas__title">Design systems <em>&amp; APIs</em></h2><p class="fh-canvas__sub">Rascode Studio</p></div>
        <div class="fh-canvas__ui" style="--fh-canvas-ui-scale: 1.5"><div class="fh-avatars" role="group" aria-label="Team"><span class="fh-avatar" data-face><img src="img/avatars/ava.webp" alt="Ava"></span><span class="fh-avatar" data-face><img src="img/avatars/cole.webp" alt="Cole"></span><span class="fh-avatar" data-face><img src="img/avatars/maya.webp" alt="Maya"></span><span class="fh-avatar" data-face><img src="img/avatars/ray.webp" alt="Ray"></span><span class="fh-avatar fh-avatars__more">+6</span></div></div>
      </div>
    </header></dd></div>
</dl>
```

### CVR · Cover art

3000 × 3000, the size Spotify, Apple Music and Apple Podcasts ask for. An album or single over etched art, and a podcast cover led by an outlined episode number.

```html
<dl class="site-media" style="--site-media-cols: 1fr 1fr">
  <div><dt>Album / single<code>.fh-canvas--cover · 3000 × 3000</code></dt><dd>
    <article class="fh-canvas fh-canvas--cover" data-tone="sky" data-fh="CVR-1.1">
      <figure class="fh-canvas__media"><img src="img/backdrop/firehorse-horse.webp" alt></figure>
      <div class="fh-canvas__body">
        <div class="fh-canvas__top"><span class="fh-canvas__mark"><i>_</i>rascode studio</span><span class="fh-canvas__badge">Single</span></div>
        <div class="fh-canvas__main"><h2 class="fh-canvas__title">Drift</h2></div>
        <div class="fh-canvas__foot"><span>Rascode Studio</span><span>2026</span></div>
      </div>
    </article></dd></div>
  <div><dt>Podcast<code>.fh-canvas--cover · .fh-canvas__index</code></dt><dd>
    <article class="fh-canvas fh-canvas--cover" data-tone="amber" data-fh="CVR-1.2">
      <div class="fh-canvas__body">
        <div class="fh-canvas__top"><p class="fh-canvas__eyebrow">A Firehorse podcast</p></div>
        <div class="fh-canvas__main"><p class="fh-canvas__index">12</p><h2 class="fh-canvas__title">The Stable</h2><p class="fh-canvas__sub">Design systems, out loud.</p></div>
        <div class="fh-canvas__foot"><span><b>_</b>firehorse</span><span>Weekly</span></div>
      </div>
    </article></dd></div>
</dl>
```

### BIZ · Business cards

3.5 × 2 in at 300 dpi (1050 × 600, the trim size), with text kept an eighth of an inch inside the trim. Export both sides and send them to any printer; ask yours whether they want bleed added.

```html
<dl class="site-media" style="--site-media-cols: 1fr 1fr">
  <div><dt>Front<code>.fh-canvas--card · 1050 × 600</code></dt><dd>
    <article class="fh-canvas fh-canvas--card" data-tone="accent" data-fh="BIZ-1.1">
      <div class="fh-canvas__body">
        <div class="fh-canvas__top"><span class="fh-canvas__mark"><i>_</i>rascode</span></div>
        <div class="fh-canvas__main"><h2 class="fh-canvas__title">Ada Moreno</h2><p class="fh-canvas__sub">Design engineer</p></div>
        <div class="fh-canvas__foot"><span>rascode.dev</span></div>
      </div>
    </article></dd></div>
  <div><dt>Back<code>.fh-canvas--plain · .fh-canvas__cubes--rows</code></dt><dd>
    <article class="fh-canvas fh-canvas--card fh-canvas--plain" data-tone="accent" data-fh="BIZ-1.2">
      <div class="fh-canvas__body">
        <div class="fh-canvas__top"><p class="fh-canvas__eyebrow">Rascode Studio</p></div>
        <div class="fh-canvas__main">
          <ul class="fh-canvas__cubes fh-canvas__cubes--rows"><li><b>@</b> ada@rascode.dev</li><li><b>T</b> +1 555 0142</li><li><b>W</b> rascode.dev/ada</li></ul>
        </div>
        <div class="fh-canvas__foot"><span><b>_</b>rascode</span><span>Design systems &amp; APIs</span></div>
      </div>
    </article></dd></div>
</dl>
```

### SLD · Slide layouts

Ten layouts cover most talks: title, section, agenda, text and live UI, numbers, quote, code, product screen, team and close. The avatars, chips, chat, header and datatable on them are the real components inside `.fh-canvas__ui`, zoomed with the slide. Each slide is a `<section>`, so it drops straight into reveal's `.slides`.

```html
<dl class="site-media site-media--slides" style="--site-media-cols: 1fr 1fr">
  <div><dt>Title<code>.fh-slide--title</code></dt><dd>
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
    </section></dd></div>
  <div><dt>Section<code>.fh-slide--section · .fh-canvas__index</code></dt><dd>
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
    </section></dd></div>
  <div><dt>Agenda<code>.fh-slide__list</code></dt><dd>
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
    </section></dd></div>
  <div><dt>Text &amp; live UI<code>.fh-canvas--split · .fh-canvas__ui</code></dt><dd>
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
    </section></dd></div>
  <div><dt>Numbers<code>.fh-slide__stats</code></dt><dd>
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
    </section></dd></div>
  <div><dt>Quote<code>.fh-slide--middle · .fh-slide__quote</code></dt><dd>
    <section class="fh-canvas fh-slide fh-slide--middle" data-tone="amber" data-fh="SLD-2.3">
      <div class="fh-canvas__body">
        <div class="fh-canvas__main">
          <blockquote class="fh-slide__quote">Our banner, our thumbnails and our deck finally look like the product.</blockquote>
          <p class="fh-slide__cite"><b>—</b> A team that ships · sample</p>
        </div>
        <div class="fh-canvas__foot"><span>Media, at the size it ships</span><span>06 / 10</span></div>
      </div>
    </section></dd></div>
  <div><dt>Code<code>.fh-slide__code</code></dt><dd>
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
    </section></dd></div>
  <div><dt>Product screen<code>.fh-canvas__ui--crop · header · datatable</code></dt><dd>
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
    </section></dd></div>
  <div><dt>Team<code>.fh-canvas__ui · fh-person · fh-grid</code></dt><dd>
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
    </section></dd></div>
  <div><dt>Close<code>.fh-slide--middle · eyebrow pill · buttons</code></dt><dd>
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
    </section></dd></div>
</dl>
```

### THS · Theme select

A native select. firehorse.js sets data-fh-theme on <html> and remembers it.

```html
<div class="fh-field"><label for="theme-select-demo">Theme</label><select class="fh-select" id="theme-select-demo" data-fh-theme-select data-fh="THS"><option value>Firehorse</option><option value="mustang">Mustang</option><option value="friesian">Friesian</option><option value="akhal-teke">Akhal-Teke</option></select></div>
```

