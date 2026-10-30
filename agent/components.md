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
| Content | `fh-card` (`__meta` `__title` `__body` `__footer` `__price` `--solid`) `fh-stats` `fh-checklist` `fh-steps` (`--grid`) `fh-quote` `fh-crosses` `fh-table-wrap` `fh-table` (`--reflow`) `fh-matrix` |
| Forms | `fh-form` (`__row` `__actions`) `fh-field` (`--optional` `__hint` `__error`) `fh-input` `fh-textarea` `fh-select` `fh-select-wrap` `fh-input-group` `fh-check` `fh-switch` `fh-segmented` |
| Disclosure | `fh-accordion` `fh-tabs` (`--mono`) `fh-dialog` (`__header` `__body` `__footer`) `fh-menu` `fh-toaster` `fh-toast` |
| Chrome | `fh-header` (`__bar` `__brand` `__actions` `__toggle`) `fh-nav` `fh-nav__link` `fh-drawer` (`__group`) `fh-mega` (`__grid` `__rail`) `fh-footer` (`__columns` `__column` `__base`) |
| Patterns | `fh-hero` `fh-hero__actions` `fh-hero-split` `fh-section-head` `fh-etched-split` (`__pane`) `fh-cta-band` (`__main` `__title` `__aside` `__people` `__fine`) `fh-window` (`__bar` `__body`) `fh-letter` (`__portrait`) `fh-panel` `fh-panel-inset` `[data-fh-panel-start]` `fh-footer--tall` |
| Media | `fh-canvas` (`__body` `__top` `__main` `__foot` `__title` `__sub` `__eyebrow` `__mark` `__badge` `__index` `__cubes` `__media` `__ui` (`--crop`) `--og` `--yt-thumb` `--yt-banner` `--x-header` `--li-banner` `--post` `--square` `--story` `--cover` `--card` `--center` `--split` `--row` `--plain` `--plate` `--native` `__cubes--rows`) `[data-fh-guides]` |
| Slides | `fh-slide` (`--title` `--section` `--middle` `__list` `__stats` `__quote` `__cite` `__code`) on an `fh-canvas`; reveal.js: `dist/reveal.css` |
| Helpers | `fh-sr-only` `fh-skip` `fh-reveal` `fh-reveal-children` `fh-hide-narrow` `fh-hide-wide` `fh-tone-text` `fh-text-start|center|end` `fh-nowrap` `fh-tabular` `fh-full` |

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
      <p class="site-motion__roll" data-tone="sky"><span class="fh-rollover" id="motion-roll"><span class="fh-rollover__item"><b>04</b>Data</span></span></p>
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

### ROT · Word rotator

The rolling word in a headline, without the usual wiring: no library, no word array in a script, no timers. Write the words in the markup and they take turns. Change them by editing the HTML. Style the word apart from the sentence with a modifier, a tone or a knob: colour, font, size, weight, italic, underline, highlight, gradient, and which way it rolls.

```html
<dl class="fh-dl site-variants">
  <div><dt>Headline<code>.fh-rotator</code></dt><dd>
    <h3 class="fh-title">The design system that <span class="fh-rotator"><span>scales</span><span aria-hidden="true">adapts</span><span aria-hidden="true">fits</span><span aria-hidden="true">flexes</span><span aria-hidden="true">grows</span></span>.</h3></dd></div>
  <div><dt>In a sentence<code>--fh-rotator-step</code></dt><dd>
    <p class="fh-lede" style="--fh-rotator-step: 1.8s">Built for <span class="fh-rotator" data-tone="sky"><span>studios</span><span aria-hidden="true">startups</span><span aria-hidden="true">agencies</span></span>, shipped in a week.</p></dd></div>
  <div><dt>Styles<code>--script · --mono · --highlight · --gradient</code></dt><dd>
    <p class="fh-heading">Made by <span class="fh-rotator fh-rotator--script fh-rotator--accent"><span>hand</span><span aria-hidden="true">people</span><span aria-hidden="true">Rascode</span></span></p>
    <p class="fh-heading">Ship it <span class="fh-rotator fh-rotator--mono fh-rotator--highlight fh-rotator--fade" data-tone="lime"><span>today</span><span aria-hidden="true">tonight</span><span aria-hidden="true">now</span></span></p>
    <p class="fh-heading">Every <span class="fh-rotator fh-rotator--gradient fh-rotator--down"><span>tone</span><span aria-hidden="true">theme</span><span aria-hidden="true">scheme</span></span> included</p>
    <p class="fh-heading">Looks <span class="fh-rotator fh-rotator--italic fh-rotator--underline fh-rotator--display" data-tone="amber" style="--fh-rotator-scale: 1.2"><span>sharp</span><span aria-hidden="true">calm</span><span aria-hidden="true">bold</span></span> anywhere</p></dd></div>
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
  <main class="fh-main">
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
  <footer class="fh-footer fh-footer--tall">
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
  <div class="fh-etched-split fh-etched-split--roomy fh-bleed">
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
  <main class="fh-main">
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
  <footer class="fh-footer fh-footer--tall">
    <nav class="fh-footer__columns" aria-label="Sample footer">
      <div class="fh-footer__column" data-tone="teal"><h2>Docs</h2><ul><li><a href="#offset-panel">Layout</a></li></ul></div>
      <div class="fh-footer__column" data-tone="violet"><h2>Agents</h2><ul><li><a href="#offset-panel">Index</a></li></ul></div>
    </nav>
  </footer>
  <div class="fh-panel" aria-hidden="true"></div>
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
<div class="fh-cta-band fh-crosses" data-tone="accent">
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

Flat 3px rect, mono caps, solid fill (`data-fh-button="convex"` for the bevelled one). Primary buttons get an arrow; `data-tone` lights the top edge.

```html
<dl class="fh-dl site-variants">
  <div><dt>Primary<code>.fh-button</code></dt><dd>
    <a class="fh-button" href="#c-button"><span class="fh-roll">Discuss a project</span></a></dd></div>
  <div><dt>Tone edge<code>.fh-button · data-tone</code></dt><dd>
    <a class="fh-button" href="#c-button" data-tone="sky">Tone edge</a></dd></div>
  <div><dt>Secondary<code>--secondary</code></dt><dd>
    <button class="fh-button fh-button--secondary" type="button">Secondary</button></dd></div>
  <div><dt>Outline<code>--outline</code></dt><dd>
    <button class="fh-button fh-button--outline" type="button">Outline</button></dd></div>
  <div><dt>Ghost<code>--ghost</code></dt><dd>
    <button class="fh-button fh-button--ghost" type="button">Ghost</button></dd></div>
  <div><dt>Accent<code>--accent</code></dt><dd>
    <button class="fh-button fh-button--accent" type="button">Accent</button></dd></div>
  <div><dt>Busy<code>aria-busy="true"</code></dt><dd>
    <button class="fh-button" type="button" aria-busy="true">Saving</button></dd></div>
  <div><dt>Small, disabled<code>--sm · disabled</code></dt><dd>
    <button class="fh-button fh-button--sm" type="button" disabled>Disabled</button></dd></div>
</dl>
```

### ACT · Action & link

Section CTAs and card actions.

```html
<dl class="fh-dl site-rows">
  <div><dt>Large</dt><dd><a class="fh-action fh-action--lg" href="#c-action">View all services</a></dd></div>
  <div><dt>Toned</dt><dd><a class="fh-action" data-tone="teal" href="#c-action">Explore data architecture</a></dd></div>
  <div><dt>Text link</dt><dd><a class="fh-link" href="#c-action">Read the case study</a></dd></div>
  <div><dt>Quiet link</dt><dd><a class="fh-link fh-link--quiet" href="#c-action">Privacy policy</a></dd></div>
</dl>
```

### MRK · Markers

Dots, eyebrow pills, breadcrumbs and badges.

```html
<dl class="fh-dl site-rows">
  <div><dt>Eyebrow pill</dt><dd><p class="fh-eyebrow-pill" data-tone="fuchsia"><span class="fh-dot fh-dot--live"></span>AI services</p></dd></div>
  <div><dt>Breadcrumb</dt><dd>
    <nav class="fh-breadcrumb" aria-label="Breadcrumb" data-tone="teal">
      <a class="fh-breadcrumb__back" href="#c-markers" aria-label="Back"><span class="fh-dot fh-dot--live"></span></a>
      <ol>
        <li><a href="#c-markers">Services</a></li>
        <li><a href="#c-markers">Data</a></li>
        <li><span aria-current="page">Schema design</span></li>
      </ol>
    </nav></dd></div>
  <div><dt>Badges</dt><dd>
    <div class="fh-cluster">
      <span class="fh-badge">Required</span>
      <span class="fh-badge" data-tone="lime">Live</span>
      <span class="fh-badge fh-badge--solid" data-tone="amber">Beta</span>
    </div></dd></div>
</dl>
```

### EYE · Eyebrow pill

The Doppler pill from the top of this page, as a full component. Combine a shape, a line and any of the parts. Every variant takes the tone from `data-tone`.

```html
<dl class="fh-dl site-variants site-variants--grouped">
  <div><dt>Lines<code>.fh-eyebrow-pill · --etched · --dotted · --double</code></dt><dd>
    <p class="fh-eyebrow-pill" data-tone="sky"><span class="fh-dot fh-dot--live"></span>Solid line</p>
    <p class="fh-eyebrow-pill fh-eyebrow-pill--etched" data-tone="teal"><span class="fh-dot fh-dot--live"></span>Etched line</p>
    <p class="fh-eyebrow-pill fh-eyebrow-pill--dotted" data-tone="lime"><span class="fh-dot"></span>Dotted line</p>
    <p class="fh-eyebrow-pill fh-eyebrow-pill--double" data-tone="amber"><span class="fh-dot fh-dot--square"></span>Double line</p></dd></div>
  <div><dt>Shapes<code>--rounded · --sharp · --oval · --tab</code></dt><dd>
    <p class="fh-eyebrow-pill fh-eyebrow-pill--rounded" data-tone="orange"><span class="fh-dot"></span>Rounded</p>
    <p class="fh-eyebrow-pill fh-eyebrow-pill--sharp fh-eyebrow-pill--etched" data-tone="rose"><span class="fh-dot fh-dot--diamond"></span>Sharp</p>
    <p class="fh-eyebrow-pill fh-eyebrow-pill--oval fh-eyebrow-pill--etched" data-tone="fuchsia"><span class="fh-dot fh-dot--live"></span>Oval</p>
    <p class="fh-eyebrow-pill fh-eyebrow-pill--tab fh-eyebrow-pill--etched" data-tone="sky"><span class="fh-dot"></span>Tab</p></dd></div>
  <div><dt>Fills<code>--tone · --solid · --gradient · --glass · --ghost</code></dt><dd>
    <p class="fh-eyebrow-pill fh-eyebrow-pill--tone" data-tone="violet"><span class="fh-dot fh-dot--live"></span>Tone tinted</p>
    <p class="fh-eyebrow-pill fh-eyebrow-pill--solid" data-tone="sky"><span class="fh-dot fh-dot--blink"></span>Solid tone</p>
    <p class="fh-eyebrow-pill fh-eyebrow-pill--gradient" data-tone="fuchsia"><span class="fh-dot fh-dot--live"></span>Gradient sweep</p>
    <p class="fh-eyebrow-pill fh-eyebrow-pill--glass" data-tone="teal"><span class="fh-dot fh-dot--ring"></span>Glass</p>
    <p class="fh-eyebrow-pill fh-eyebrow-pill--ghost" data-tone="lime"><span class="fh-dot fh-dot--live"></span>Ghost</p></dd></div>
  <div><dt>Edges<code>--bracket · --underline</code></dt><dd>
    <p class="fh-eyebrow-pill fh-eyebrow-pill--bracket" data-tone="amber"><span class="fh-dot fh-dot--bar"></span>Bracketed</p>
    <p class="fh-eyebrow-pill fh-eyebrow-pill--underline" data-tone="orange"><span class="fh-dot"></span>Underline</p></dd></div>
  <div><dt>Parts<code>__index · __seg · __count</code></dt><dd>
    <p class="fh-eyebrow-pill fh-eyebrow-pill--etched" data-tone="teal"><span class="fh-eyebrow-pill__index">02</span>Indexed section</p>
    <p class="fh-eyebrow-pill" data-tone="orange"><span class="fh-dot fh-dot--live"></span><span class="fh-eyebrow-pill__seg">Automation</span><span class="fh-eyebrow-pill__seg"><strong>4 services</strong></span></p>
    <p class="fh-eyebrow-pill fh-eyebrow-pill--rounded" data-tone="rose"><span class="fh-dot fh-dot--live"></span>Open roles <span class="fh-eyebrow-pill__count">3</span></p></dd></div>
  <div><dt>Sentences<code>--sentence · __action · .fh-kbd</code></dt><dd>
    <p class="fh-eyebrow-pill fh-eyebrow-pill--sentence" data-tone="live"><span class="fh-dot fh-dot--live"></span><span>Now accepting proposals · <strong>Book a call</strong></span></p>
    <p class="fh-eyebrow-pill fh-eyebrow-pill--sentence" data-tone="sky"><span class="fh-avatar fh-avatar--circle"><img src="img/avatars/reginald.webp" alt=""></span><span>Reginald is online</span><a class="fh-eyebrow-pill__action" href="#c-eyebrow">Talk</a></p>
    <p class="fh-eyebrow-pill fh-eyebrow-pill--etched fh-eyebrow-pill--sentence" data-tone="neutral"><span>Search the docs</span><kbd class="fh-kbd">⌘K</kbd></p></dd></div>
  <div><dt>Sizes<code>--sm · --lg</code></dt><dd>
    <p class="fh-eyebrow-pill fh-eyebrow-pill--sm" data-tone="lime"><span class="fh-dot"></span>Small</p>
    <p class="fh-eyebrow-pill fh-eyebrow-pill--lg fh-eyebrow-pill--etched" data-tone="accent"><span class="fh-dot fh-dot--live"></span>Large</p></dd></div>
</dl>
```

### CHP · Chips

Chips filter or jump; the selected one fills with its tone. Icons replace the dot. Every variant takes the tone from `data-tone`.

```html
<dl class="fh-dl site-variants">
  <div><dt>Filter<code>.fh-chip · aria-current</code></dt><dd>
    <div class="fh-chips fh-chips--wrap">
      <a class="fh-chip" data-tone="sky" href="#c-chips" aria-current="true">Agents</a>
      <a class="fh-chip" data-tone="teal" href="#c-chips">Data</a>
      <a class="fh-chip" data-tone="orange" href="#c-chips">Automation</a>
      <a class="fh-chip" data-tone="fuchsia" href="#c-chips">AI</a>
    </div></dd></div>
  <div><dt>Choice<code>.fh-chips--track · radio</code></dt><dd>
    <div class="fh-chips fh-chips--track" role="group" aria-label="Contact task">
      <label class="fh-chip" data-tone="lime"><input type="radio" name="task" checked> Start a project</label>
      <label class="fh-chip" data-tone="sky"><input type="radio" name="task"> Book a call</label>
      <label class="fh-chip" data-tone="rose"><input type="radio" name="task"> Support</label>
    </div></dd></div>
  <div><dt>Fill<code>--solid · --tone · --plain</code></dt><dd>
    <div class="fh-chips fh-chips--wrap">
      <span class="fh-chip fh-chip--solid" data-tone="sky"><i class="fh-icon fh-icon--bot" aria-hidden="true"></i>Solid tone</span>
      <span class="fh-chip fh-chip--tone" data-tone="orange"><i class="fh-icon fh-icon--workflow" aria-hidden="true"></i>Soft tone</span>
      <span class="fh-chip fh-chip--plain">Plain</span>
    </div></dd></div>
  <div><dt>Tabs<code>.fh-chip--underline</code></dt><dd>
    <div class="fh-chips fh-chips--wrap">
      <a class="fh-chip fh-chip--underline" data-tone="lime" href="#c-chips" aria-current="true">Overview</a>
      <a class="fh-chip fh-chip--underline" data-tone="lime" href="#c-chips">Pricing</a>
      <a class="fh-chip fh-chip--underline" data-tone="lime" href="#c-chips">FAQ</a>
    </div></dd></div>
  <div><dt>Indexed<code>.fh-chip--indexed · __index</code></dt><dd>
    <div class="fh-chips fh-chips--wrap">
      <span class="fh-chip fh-chip--indexed" data-tone="violet"><b class="fh-chip__index">01</b>Foundations</span>
      <span class="fh-chip fh-chip--indexed" data-tone="amber"><b class="fh-chip__index">03</b>Components</span>
      <span class="fh-chip fh-chip--indexed" data-tone="sky"><b class="fh-chip__index">04</b>Data</span>
    </div></dd></div>
  <div><dt>Counted<code>.fh-chips--indexed</code></dt><dd>
    <div class="fh-chips fh-chips--indexed fh-chips--wrap" aria-label="Open roles">
      <a class="fh-chip fh-chip--tone" data-tone="fuchsia" href="#services">Design engineer</a>
      <a class="fh-chip fh-chip--tone" data-tone="sky" href="#services">AI agent builder</a>
      <a class="fh-chip fh-chip--tone" data-tone="orange" href="#services">Automation lead</a>
    </div></dd></div>
  <div><dt>Removable<code>.fh-chip__remove</code></dt><dd>
    <div class="fh-chips fh-chips--wrap">
      <span class="fh-chip fh-chip--plain">Website <button class="fh-chip__remove" type="button" aria-label="Remove Website"></button></span>
      <span class="fh-chip fh-chip--plain">Email <button class="fh-chip__remove" type="button" aria-label="Remove Email"></button></span>
    </div></dd></div>
</dl>
```

### CHC · Chip cards

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
    <ul class="fh-cubes" data-tone="teal">
      <li><b class="fh-cube">$1,250</b> fixed</li>
      <li><b class="fh-cube">14</b> days</li>
      <li><b class="fh-cube">4</b> deliverables</li>
    </ul></dd></div>
  <div><dt>Large<code>.fh-cube--lg</code></dt><dd>
    <ul class="fh-cubes" data-tone="fuchsia">
      <li><b class="fh-cube fh-cube--lg">98</b> score</li>
      <li><b class="fh-cube fh-cube--lg">A+</b> grade</li>
      <li><b class="fh-cube fh-cube--lg">12</b> fixes</li>
    </ul></dd></div>
  <div><dt>Icons<code>.fh-cube--sm · .fh-icon</code></dt><dd>
    <ul class="fh-cubes" data-tone="sky">
      <li><b class="fh-cube fh-cube--sm"><i class="fh-icon fh-icon--clock" aria-hidden="true"></i></b> 30 min</li>
      <li><b class="fh-cube fh-cube--sm"><i class="fh-icon fh-icon--video" aria-hidden="true"></i></b> Video call</li>
      <li><b class="fh-cube fh-cube--sm"><i class="fh-icon fh-icon--calendar" aria-hidden="true"></i></b> This week</li>
    </ul></dd></div>
  <div><dt>Outline<code>.fh-cube--outline</code></dt><dd>
    <ul class="fh-cubes" data-tone="amber">
      <li><b class="fh-cube fh-cube--outline">v1.1</b> release</li>
      <li><b class="fh-cube fh-cube--outline">MIT</b> license</li>
      <li><b class="fh-cube fh-cube--outline">183</b> icons</li>
    </ul></dd></div>
</dl>
```

### CUC · Cube cards

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
</dl>
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
<dl class="fh-stats" data-tone="teal">
  <div><dt>Timeline</dt><dd>2–3 wk</dd><dd>From kickoff to handover</dd></div>
  <div><dt>Investment</dt><dd>$1,250</dd><dd>Fixed scope</dd></div>
  <div><dt>Deliverables</dt><dd>4</dd><dd>Docs, diagrams, migration plan</dd></div>
  <div><dt>Follow-up</dt><dd>30 d</dd><dd>Questions answered</dd></div>
</dl>
```

### CKL · Checklist

```html
<ul class="fh-checklist" data-tone="lime">
  <li>Current-state schema review</li>
  <li>Risk register with severity</li>
  <li>Migration plan you can hand to any team</li>
</ul>
```

### STP · Steps

Numbered because order matters.

```html
<ol class="fh-steps">
  <li data-tone="sky"><span class="fh-steps__mark"></span><div><h3>Assess</h3><p>Understand the current state and its risks.</p></div></li>
  <li data-tone="teal"><span class="fh-steps__mark"></span><div><h3>Build</h3><p>Ship the foundation, then connect the systems.</p></div></li>
  <li data-tone="orange"><span class="fh-steps__mark"></span><div><h3>Operate</h3><p>Keep it healthy as you grow.</p></div></li>
</ol>
```

### CAR · Carousel

Multi-panel slider modelled on X media posts: swipe or scroll, panels snap, and the current dot stretches into a longer bubble. Native CSS dots in Chromium; the enhancer draws the same dots elsewhere.

```html
<section class="fh-carousel" aria-roledescription="carousel" aria-label="Firehorse in four panels">
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
      <dl class="fh-stats"><div><dt>Tokens</dt><dd>{{TOKENS}}</dd></div><div><dt>Layers</dt><dd>8</dd></div><div><dt>Breakpoints</dt><dd>0</dd></div></dl>
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
  <ul class="fh-list" role="list">
    <li><span class="fh-avatar" data-status="online"><img src="img/avatars/eleanor.webp" alt=""></span><div><p class="fh-list__title"><a class="fh-list__link" href="#c-list">Eleanor</a></p><p class="fh-list__meta">Legal intake · 14 leads today</p></div><span class="fh-badge" data-tone="lime">Live</span></li>
    <li><span class="fh-avatar" data-status="away"><img src="img/avatars/sam.webp" alt=""></span><div><p class="fh-list__title"><a class="fh-list__link" href="#c-list">Sam</a></p><p class="fh-list__meta">Medical front desk · paused</p></div><span class="fh-badge" data-tone="amber">Away</span></li>
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
<div class="fh-chat" role="log" aria-label="Conversation">
  <div class="fh-message" data-from="them" data-tone="sky"><span class="fh-avatar fh-avatar--sm"><img src="img/avatars/reginald.webp" alt=""></span><div class="fh-message__bubble"><p class="fh-message__name">Reginald</p><p>Good evening. Which of your channels gets the most inquiries?</p></div></div>
  <div class="fh-message" data-from="me"><div class="fh-message__bubble"><p>Facebook Messenger, mostly after 6pm.</p></div></div>
  <div class="fh-message" data-from="them" data-tone="sky"><span class="fh-avatar fh-avatar--sm"><img src="img/avatars/reginald.webp" alt=""></span><div class="fh-message__bubble"><p class="fh-message__name">Reginald</p><p>Then Wes should cover evenings first. I can have him live by Monday.</p></div></div>
  <div class="fh-message" data-from="them" data-tone="sky"><span class="fh-avatar fh-avatar--sm"><img src="img/avatars/reginald.webp" alt=""></span><div class="fh-message__bubble"><span class="fh-typing" aria-label="Reginald is typing"><i></i></span></div></div>
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
  <p class="fh-divider">or install</p>
  <figure class="fh-code">
    <figcaption>terminal <button class="fh-button fh-button--sm fh-button--ghost" type="button">Copy</button></figcaption>
    <pre><code>npm i https://firehorse.rascode.dev/npm/firehorse-1.1.0.tgz</code></pre>
  </figure>
  <p class="fh-small fh-muted">Open the command menu with <kbd class="fh-kbd">⌘</kbd> <kbd class="fh-kbd">K</kbd>.</p>
</div>
```

### TIR · Pricing tiers

The featured tier glows in its tone; every tier stacks or sits side by side by container.

```html
<div class="fh-tiers">
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
  <div class="fh-feature" data-tone="teal"><span class="fh-feature__icon">CQ</span><h3>Container queries</h3><p>Every slot is a query container.</p></div>
  <div class="fh-feature" data-tone="amber"><span class="fh-feature__icon">L8</span><h3>Eight layers</h3><p>Override without !important.</p></div>
  <div class="fh-feature" data-tone="fuchsia"><span class="fh-feature__icon">◐</span><h3>Two schemes</h3><p>light-dark() on every role.</p></div>
  <div class="fh-feature" data-tone="violet"><span class="fh-feature__icon">AI</span><h3>Agent-ready</h3><p>Contract, markup and tokens.</p></div>
</div>
```

### TST · Testimonial

```html
<figure class="fh-testimonial" data-tone="orange">
  <blockquote>We stopped losing quotes in the follow-up. Wes answers at 9pm, books the estimate, and I wake up to a full route.</blockquote>
  <figcaption class="fh-person"><span class="fh-avatar fh-avatar--circle"><img src="img/avatars/cole.webp" alt=""></span><span class="fh-person__text"><b>Cole Brennan</b><span>Owner · Brennan Landscapes (sample)</span></span></figcaption>
</figure>
```

### DCK · Floating bar

The masthead from rascode.dev. It rides quietly under the header, then engages when it pins: the small title slides in, the cubes and chips appear in the section's tone, and the outline CTA fills. Scroll this page to watch the real one change color by section.

```html
<div class="fh-dock fh-frame site-dock-demo" data-tone="sky" data-active="true">
  <div class="fh-dock__bar">
    <div class="fh-dock__identity">
      <p class="fh-eyebrow-pill" data-tone="sky"><span class="fh-dot fh-dot--live"></span><span>Agents</span></p>
      <span class="fh-dock__avatar"><img src="img/avatars/cole.webp" alt=""></span>
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
  <div class="fh-tabs" role="tablist" aria-label="Portal">
    <button role="tab" aria-selected="true" type="button">Overview</button>
    <button role="tab" aria-selected="false" type="button">Invoices</button>
    <button role="tab" aria-selected="false" type="button">Proposals</button>
    <button role="tab" aria-selected="false" type="button">Activity</button>
  </div>
  <nav class="fh-tabs fh-tabs--mono" aria-label="Sections">
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
  <label class="fh-search"><span class="fh-sr-only">Search</span><input type="search" placeholder="Search components"><kbd class="fh-kbd">⌘K</kbd></label>
  <ol class="fh-stepper" data-tone="lime">
    <li data-state="done">Details</li>
    <li data-state="current" aria-current="step">Scope</li>
    <li>Review</li>
    <li>Sign</li>
  </ol>
  <nav class="fh-pagination" aria-label="Pages">
    <a href="#c-nav" rel="prev">Prev</a><a href="#c-nav">1</a><a href="#c-nav" aria-current="page">2</a><a href="#c-nav">3</a><span>…</span><a href="#c-nav">9</a><a href="#c-nav" rel="next">Next</a>
  </nav>
  <nav class="fh-sidenav" aria-label="Portal" data-tone="sky">
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
<div class="fh-accordion">
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
<div id="demo-menu" popover class="fh-menu" style="position-anchor: --demo-menu">
  <a href="#c-overlay">Duplicate</a>
  <a href="#c-overlay">Share link</a>
  <hr>
  <button type="button">Archive</button>
</div>
<dialog class="fh-dialog" id="demo-dialog" aria-labelledby="demo-dialog-title">
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
  </div>
</div>
```

### EMP · Empty state & banner

```html
<div class="fh-stack fh-stack--lg">
  <div class="fh-banner" data-tone="accent"><span>Themes now switch with one attribute.</span><a href="#top">Read the notes</a></div>
  <div class="fh-empty" data-tone="violet">
    <span class="fh-empty__icon">∅</span>
    <h4>No leads yet</h4>
    <p>When your agent answers its first inquiry, it will show up here with the transcript and the next step.</p>
    <a class="fh-button fh-button--sm fh-button--secondary" href="#c-feedback">Send a test lead</a>
  </div>
</div>
```

### AVS · Shapes

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

### AVZ · Sizes & presence

`--xs → --2xl · data-status`

```html
<div class="fh-cluster" style="--fh-gap: var(--fh-space-4); --fh-align: flex-end">
  <span class="fh-avatar fh-avatar--xs" data-face><img src="img/avatars/sam.webp" alt="Sam"></span>
  <span class="fh-avatar fh-avatar--sm" data-status="online" data-face><img src="img/avatars/maya.webp" alt="Maya"></span>
  <span class="fh-avatar" data-status="away" data-face><img src="img/avatars/cole.webp" alt="Cole"></span>
  <span class="fh-avatar fh-avatar--lg" data-status="busy" data-face><img src="img/avatars/ruth.webp" alt="Ruth"></span>
  <span class="fh-avatar fh-avatar--xl" data-status="online" data-face><img src="img/avatars/cole.webp" alt="Wes"></span>
  <span class="fh-avatar fh-avatar--xl fh-avatar--circle" data-status="offline" data-face><img src="img/avatars/reginald.webp" alt="Reginald"></span>
</div>
```

### AVR · Rings & halos

`--ring · --halo · data-tone`

```html
<div class="fh-cluster" style="--fh-gap: var(--fh-space-6)">
  <span class="fh-avatar fh-avatar--xl fh-avatar--ring" data-tone="sky" data-face><img src="img/avatars/isla.webp" alt="Isla"></span>
  <span class="fh-avatar fh-avatar--xl fh-avatar--circle fh-avatar--ring" data-tone="lime" data-face><img src="img/avatars/mateo.webp" alt="Mateo"></span>
  <span class="fh-avatar fh-avatar--xl fh-avatar--circle fh-avatar--halo" data-tone="fuchsia" data-face><img src="img/avatars/ava.webp" alt="Ava"></span>
  <span class="fh-avatar fh-avatar--xl fh-avatar--halo" data-tone="orange" data-face><img src="img/avatars/cole.webp" alt="Wes"></span>
</div>
```

### AVG · Generated

No photo? A tone mesh behind initials. Each tone walks its own neighbours on the wheel, so a team reads as a family.

```html
<div class="fh-cluster" style="--fh-gap: var(--fh-space-4)" id="generated-avatars">
  <span class="fh-avatar fh-avatar--xl fh-avatar--generated" data-tone="sky" role="img" aria-label="Ada Lovelace">AL</span>
  <span class="fh-avatar fh-avatar--xl fh-avatar--generated fh-avatar--circle" data-tone="teal" role="img" aria-label="Grace Hopper">GH</span>
  <span class="fh-avatar fh-avatar--xl fh-avatar--generated fh-avatar--oval" data-tone="lime" role="img" aria-label="Alan Turing">AT</span>
  <span class="fh-avatar fh-avatar--xl fh-avatar--generated fh-avatar--squircle" data-tone="amber" role="img" aria-label="Katherine Johnson">KJ</span>
  <span class="fh-avatar fh-avatar--xl fh-avatar--generated" data-tone="orange" role="img" aria-label="Dennis Ritchie">DR</span>
  <span class="fh-avatar fh-avatar--xl fh-avatar--generated fh-avatar--circle" data-tone="rose" role="img" aria-label="Margaret Hamilton">MH</span>
  <span class="fh-avatar fh-avatar--xl fh-avatar--generated" data-tone="fuchsia" role="img" aria-label="Linus Torvalds">LT</span>
  <span class="fh-avatar fh-avatar--xl fh-avatar--generated fh-avatar--squircle" data-tone="violet" role="img" aria-label="Radia Perlman">RP</span>
</div>
```

### AVK · Groups

Overlapping stack with a counter, a stack that fans out on hover, a packed cluster, a plain row, and a person with name and role.

```html
<div class="site-avatar-groups">
  <div class="fh-avatars" role="group" aria-label="Team">
    <span class="fh-avatar" data-face><img src="img/avatars/ava.webp" alt="Ava"></span>
    <span class="fh-avatar" data-face><img src="img/avatars/cole.webp" alt="Cole"></span>
    <span class="fh-avatar" data-face><img src="img/avatars/maya.webp" alt="Maya"></span>
    <span class="fh-avatar" data-face><img src="img/avatars/ray.webp" alt="Ray"></span>
    <span class="fh-avatar fh-avatars__more">+6</span>
  </div>
  <div class="fh-avatars fh-avatars--spread fh-avatars--lg" role="group" aria-label="Agents on shift" tabindex="0">
    <span class="fh-avatar fh-avatar--circle" data-face><img src="img/avatars/isla.webp" alt="Isla"></span>
    <span class="fh-avatar fh-avatar--circle" data-face><img src="img/avatars/mateo.webp" alt="Mateo"></span>
    <span class="fh-avatar fh-avatar--circle" data-face><img src="img/avatars/eleanor.webp" alt="Eleanor"></span>
    <span class="fh-avatar fh-avatar--circle" data-face><img src="img/avatars/cole.webp" alt="Wes"></span>
    <span class="fh-avatar fh-avatar--circle" data-face><img src="img/avatars/sam.webp" alt="Sam"></span>
  </div>
  <div class="fh-avatars fh-avatars--grid" role="group" aria-label="Clients">
    <span class="fh-avatar fh-avatar--sm" data-face><img src="img/avatars/ruth.webp" alt="Ruth"></span>
    <span class="fh-avatar fh-avatar--sm fh-avatar--generated" data-tone="teal">NW</span>
    <span class="fh-avatar fh-avatar--sm" data-face><img src="img/avatars/ray.webp" alt="Ray"></span>
    <span class="fh-avatar fh-avatar--sm fh-avatar--generated" data-tone="amber">HC</span>
    <span class="fh-avatar fh-avatar--sm" data-face><img src="img/avatars/maya.webp" alt="Maya"></span>
    <span class="fh-avatar fh-avatar--sm fh-avatar--generated" data-tone="violet">TJ</span>
  </div>
  <div class="fh-avatars fh-avatars--row" role="group" aria-label="Reviewers">
    <span class="fh-avatar fh-avatar--oval" data-face><img src="img/avatars/cole.webp" alt="Cole"></span>
    <span class="fh-avatar fh-avatar--oval" data-face><img src="img/avatars/isla.webp" alt="Isla"></span>
    <span class="fh-avatar fh-avatar--oval" data-face><img src="img/avatars/ava.webp" alt="Ava"></span>
  </div>
  <a class="fh-person" href="#avatars" data-tone="sky"><span class="fh-avatar fh-avatar--lg" data-status="online" data-face><img src="img/avatars/reginald.webp" alt=""></span><span class="fh-person__text"><b>Reginald</b><span>Head of agent services</span></span></a>
</div>
```

### FLD · Fields

The "Required" chip comes from the input's own `required` attribute and settles to "Done" once the field is valid. Errors only show after the visitor has interacted.

```html
<form class="fh-form" novalidate onsubmit="event.preventDefault()">
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
        <option value="">Choose a service</option>
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

Real radios and checkboxes under the styling, so they submit with the form and work with the keyboard.

```html
<div class="fh-stack fh-stack--lg">
  <fieldset class="fh-segmented">
    <legend class="fh-sr-only">How should we reach you?</legend>
    <label><input type="radio" name="reach" value="email" checked> Email</label>
    <label><input type="radio" name="reach" value="call"> Call</label>
    <label><input type="radio" name="reach" value="text"> Text</label>
  </fieldset>
  <label class="fh-check"><input class="fh-switch" type="checkbox" role="switch" checked> Send me a copy</label>
  <label class="fh-check"><input type="checkbox"> Keep me posted on new articles</label>
  <label class="fh-check"><input type="radio" name="plan"> Monthly</label>
  <label class="fh-check"><input type="radio" name="plan" checked> Annual, two months free</label>
</div>
```

### UPL · Upload, range, tags, sheet

A dropzone over a real file input, a styled range, a tag field, and a dialog that slides in as a side sheet.

```html
<div class="fh-grid" data-cols="2" style="--fh-grid-min: 17rem; --fh-gap: var(--fh-space-6)">
  <label class="fh-dropzone" data-tone="sky">
    <input type="file" multiple>
    <span class="fh-dropzone__title">Drop files or browse</span>
    <span class="fh-dropzone__hint">PDF, PNG or JPG · up to 10 MB</span>
  </label>
  <div class="fh-stack fh-stack--lg">
    <div class="fh-field" data-tone="lime"><label for="fx-budget">Monthly budget</label><input class="fh-range" id="fx-budget" type="range" min="500" max="5000" step="100" value="1700"></div>
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

### TBL · Table

With `fh-table--reflow`, rows turn into labelled cards when the slot is under 36rem.

```html
<div class="fh-table-wrap">
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

### THB · Thumbnails & link cards

A YouTube thumbnail with the host in a tone ring (the timestamp covers the bottom right), and the Open Graph card every link preview uses: X, LinkedIn, Slack, iMessage.

```html
<dl class="site-media" style="--site-media-cols: 1.778fr 1.905fr">
  <div><dt>YouTube thumbnail<code>.fh-canvas--yt-thumb · 1280 × 720</code></dt><dd>
    <article class="fh-canvas fh-canvas--yt-thumb fh-canvas--split" data-tone="accent">
      <div class="fh-canvas__body">
        <div class="fh-canvas__top"><span class="fh-canvas__badge">New</span></div>
        <div class="fh-canvas__main"><h2 class="fh-canvas__title">One file, <mark>every</mark> theme</h2></div>
        <div class="fh-canvas__foot"><span><b>EP 07</b> · Firehorse</span></div>
        <figure class="fh-canvas__media fh-canvas__media--round"><img src="img/avatars/maya.webp" alt=""></figure>
      </div>
    </article></dd></div>
  <div><dt>Link card (Open Graph)<code>.fh-canvas--og · 1200 × 630</code></dt><dd>
    <article class="fh-canvas fh-canvas--og" data-tone="sky">
      <div class="fh-canvas__body">
        <div class="fh-canvas__top"><span class="fh-canvas__mark"><i>_</i>firehorse</span><p class="fh-canvas__eyebrow">Docs · Media</p></div>
        <div class="fh-canvas__main"><h2 class="fh-canvas__title">Media, <em>at the size it ships</em></h2><p class="fh-canvas__sub">Posts, headers, thumbnails, covers and slides from one set of tokens.</p></div>
        <div class="fh-canvas__foot"><span>firehorse.rascode.dev</span><span>v1.1</span></div>
      </div>
    </article></dd></div>
</dl>
```

### SOC · Posts & stories

A 4:5 feed post (Instagram, Threads, LinkedIn; the profile grid trims it to 3:4), a square carousel card, and a 9:16 story for Stories, Reels, Shorts and TikTok with the app's top and bottom bands kept clear.

```html
<dl class="site-media" style="--site-media-cols: 8fr 10fr 5.625fr">
  <div><dt>Feed post<code>.fh-canvas--post · 1080 × 1350</code></dt><dd>
    <article class="fh-canvas fh-canvas--post" data-tone="violet">
      <div class="fh-canvas__body">
        <div class="fh-canvas__top"><p class="fh-canvas__eyebrow">Release notes</p></div>
        <div class="fh-canvas__main">
          <h2 class="fh-canvas__title">Themes are <em>one file now</em></h2>
          <ul class="fh-canvas__cubes"><li><b>3</b> themes</li><li><b>183</b> icons</li><li><b>0</b> js</li></ul>
```

### HDR · Profile headers

Channel and profile banners in one row: the copy sits inside the part every device shows. YouTube shows only the centre 1546 × 423 of its banner on phones; X and LinkedIn put the profile photo over the lower left.

```html
<dl class="site-media" style="--site-media-cols: 3fr 4fr">
  <div class="site-media__wide"><dt>YouTube channel banner<code>.fh-canvas--yt-banner · .fh-canvas--plate · 2560 × 1440 · safe 1546 × 423</code></dt><dd>
    <header class="fh-canvas fh-canvas--yt-banner fh-canvas--row fh-canvas--plate" data-tone="accent">
      <figure class="fh-canvas__media"><img src="img/backdrop/firehorse-horse.webp" alt=""></figure>
      <div class="fh-canvas__body">
        <div class="fh-canvas__top"><span class="fh-canvas__mark"><i>_</i>firehorse</span><p class="fh-canvas__eyebrow">New every Thursday</p></div>
        <div class="fh-canvas__main"><h2 class="fh-canvas__title">Design systems, <em>built in public</em></h2></div>
        <ul class="fh-canvas__cubes"><li><b>CSS</b> tokens</li><li><b>JS</b> optional</li></ul>
      </div>
    </header></dd></div>
  <div><dt>X / Bluesky header<code>.fh-canvas--x-header · 1500 × 500</code></dt><dd>
    <header class="fh-canvas fh-canvas--x-header fh-canvas--row" data-tone="sky">
      <div class="fh-canvas__body">
        <div class="fh-canvas__main"><h2 class="fh-canvas__title">Tokens in, <em>pixels out</em></h2><p class="fh-canvas__sub">Notes on Firehorse, weekly.</p></div>
        <span class="fh-canvas__mark"><i>_</i>firehorse</span>
      </div>
    </header></dd></div>
  <div><dt>LinkedIn banner<code>.fh-canvas--li-banner · 1584 × 396</code></dt><dd>
    <header class="fh-canvas fh-canvas--li-banner fh-canvas--row" data-tone="teal">
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
    <article class="fh-canvas fh-canvas--cover" data-tone="sky">
      <figure class="fh-canvas__media"><img src="img/backdrop/firehorse-horse.webp" alt=""></figure>
      <div class="fh-canvas__body">
        <div class="fh-canvas__top"><span class="fh-canvas__mark"><i>_</i>rascode studio</span><span class="fh-canvas__badge">Single</span></div>
        <div class="fh-canvas__main"><h2 class="fh-canvas__title">Drift</h2></div>
        <div class="fh-canvas__foot"><span>Rascode Studio</span><span>2026</span></div>
      </div>
    </article></dd></div>
  <div><dt>Podcast<code>.fh-canvas--cover · .fh-canvas__index</code></dt><dd>
    <article class="fh-canvas fh-canvas--cover" data-tone="amber">
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
    <article class="fh-canvas fh-canvas--card" data-tone="accent">
      <div class="fh-canvas__body">
        <div class="fh-canvas__top"><span class="fh-canvas__mark"><i>_</i>rascode</span></div>
        <div class="fh-canvas__main"><h2 class="fh-canvas__title">Ada Moreno</h2><p class="fh-canvas__sub">Design engineer</p></div>
        <div class="fh-canvas__foot"><span>rascode.dev</span></div>
      </div>
    </article></dd></div>
  <div><dt>Back<code>.fh-canvas--plain · .fh-canvas__cubes--rows</code></dt><dd>
    <article class="fh-canvas fh-canvas--card fh-canvas--plain" data-tone="accent">
      <div class="fh-canvas__body">
        <div class="fh-canvas__top"><p class="fh-canvas__eyebrow">Rascode Studio</p></div>
        <div class="fh-canvas__main">
          <ul class="fh-canvas__cubes fh-canvas__cubes--rows"><li><b>@</b> ada@rascode.dev</li><li><b>T</b> +1 555 0142</li><li><b>W</b> rascode.dev/ada</li></ul>
```

### SLD · Slide layouts

Ten layouts cover most talks: title, section, agenda, text and live UI, numbers, quote, code, product screen, team and close. The avatars, chips, chat, header and datatable on them are the real components inside `.fh-canvas__ui`, zoomed with the slide. Each slide is a `<section>`, so it drops straight into reveal's `.slides`.

```html
<dl class="site-media site-media--slides" style="--site-media-cols: 1fr 1fr">
  <div><dt>Title<code>.fh-slide--title</code></dt><dd>
    <section class="fh-canvas fh-slide fh-slide--title" data-tone="violet">
      <div class="fh-canvas__body">
        <div class="fh-canvas__top"><span class="fh-canvas__mark"><i>_</i>firehorse</span><p class="fh-canvas__eyebrow">Talk · 2026</p></div>
        <div class="fh-canvas__main"><h2 class="fh-canvas__title">Media, <em>at the size it ships</em></h2><p class="fh-canvas__sub">Designing the things you post outside the app.</p></div>
        <div class="fh-canvas__foot">
          <div class="fh-canvas__ui" style="--fh-canvas-ui-scale: 1.4">
            <div class="fh-cluster">
              <div class="fh-avatars" role="group" aria-label="Speakers"><span class="fh-avatar" data-face><img src="img/avatars/ava.webp" alt="Ava"></span><span class="fh-avatar" data-face><img src="img/avatars/cole.webp" alt="Cole"></span><span class="fh-avatar" data-face><img src="img/avatars/maya.webp" alt="Maya"></span></div>
              <span class="fh-small fh-muted">Ava, Cole &amp; Maya · Rascode Studio</span>
```

### THS · Theme select

A native select. firehorse.js sets data-fh-theme on <html> and remembers it.

```html
              <div class="fh-field"><label for="theme-select-demo">Theme</label><select class="fh-select" id="theme-select-demo" data-fh-theme-select><option value="">Firehorse</option><option value="mustang">Mustang</option><option value="friesian">Friesian</option><option value="akhal-teke">Akhal-Teke</option></select></div>
```

