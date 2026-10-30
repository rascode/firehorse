# Firehorse — patterns

> Page layouts by ID, v1.1.0. Generated from https://firehorse.rascode.dev/patterns/.
> A pattern is the saddle tree; the theme, tones and content are the leather and
> tooling. When a person
> names a pattern, build it with this markup and keep every **Keep** rule. Change
> only what **Change freely** allows. Rules: [system.md](system.md).

## Page patterns

Each one was recorded from a real page before it was rebuilt, so the proportions are measured, not remembered. Keep what the rules say to keep; change the rest.

### FND · Fender

A long page that changes gear partway. A note closes the first chapter and opens a tinted band that hangs down the rest of the page, the way a fender hangs down the side of a saddle: through the next section, under its full-width content and through a tall footer to the bottom.

Anatomy, top to bottom:

1. A note ends the first chapter and opens the panel: `data-fh-panel-start`.
2. The next section's rule crosses the panel.
3. That section's head steps onto it: `.fh-panel-inset`.
4. Wide content keeps its width and runs across both tones.
5. A tall footer: a large gap above its columns, open room below, the panel's edge running to the bottom.

- **Use it for:** Docs, product and service pages that move from showing to explaining: a gallery, then a second chapter; a feature tour, then pricing.
- **Built from:** `PNL` offset panel, ruled sections, `.fh-footer--tall`. On a docs page, `"panel": true` in the page meta.
- **Keep:** One panel per page. Width 52rem from the content edge. The fill is the canvas at 62%, so art behind the page shows only on the open side. Dashed edges, no bottom edge. Nothing sits under the edge line: content is either inset inside the panel or full width across it.
- **Change freely:** Where it starts. The theme, tones and content. The footer's tail (`--fh-footer-tail`). The panel's width (`--fh-panel-size`), if it still leaves a clear open side.
- **Phones:** The panel stops 3rem short of the right edge (`--fh-panel-gutter`), so the split still shows; inset content stays inside it.
- **Recorded:** Media page, 2026-10-29. `design/records/2026-10-29-offset-panel`

```html
<div class="fh-page">
  <main class="fh-main">
    <section class="fh-section">
      <div class="fh-grid" data-cols="3" style="--fh-grid-min: 6rem">
        <div class="fh-card fh-card--solid">Example</div>
        <div class="fh-card fh-card--solid">Example</div>
        <div class="fh-card fh-card--solid">Example</div>
      </div>
      <aside data-fh-panel-start>
        <p class="fh-label">Closing note</p>
        <p class="fh-small fh-muted">Ends the first chapter and opens the panel.</p>
      </aside>
    </section>
    <section class="fh-section fh-section--ruled">
      <header class="fh-section-head fh-panel-inset">
        <div><p data-tone="violet"><b>02</b> Next chapter</p><h3 class="fh-subheading">Stepped onto the panel</h3></div>
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

Anatomy, top to bottom:

1. The claim: a pill in one tone, then one `fh-heading`, four lines at most.
2. The substance: a pill in a second tone, an `fh-lede` that explains it.
3. The cinch: one dashed line between two equal panes, rules above and below, crosses at the joints.
4. One muted fact that ends on a bold number.

- **Use it for:** The top of a service, product or assessment page, under the sub-nav: why it matters, and what you get.
- **Built from:** `ESP` etched split with `--roomy`, eyebrow pills, `fh-heading`, `fh-lede`. In a flush section, full bleed.
- **Keep:** Full bleed, split exactly in half. Copy lines up with the content edge (the panes' outer padding is the page margin). Each pane gets the full section rhythm top and bottom. Two different tones. Claim on the left, facts on the right. One number.
- **Change freely:** The words, the tones, the fact. A checklist on the right instead of the lede, as long as one fact still closes it.
- **Phones:** The panes stack; the line becomes a dashed rule between them.
- **Recorded:** rascode.dev, AI Visibility Audit, 2026-10-29. `design/records/2026-10-29-cinch`

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

## Building blocks

Section-sized layouts you can use on their own. Patterns combine them with the frame and fix their proportions.

### PNL · Offset panel

A tinted column that begins where you mark it and runs to the bottom of the page, through every section below and the footer. Its fill against the open canvas splits the page in two tones; its dashed edges run the full height. Content stepping onto it takes `.fh-panel-inset`. Fender is built on it.

```html
<div class="fh-page">
  <main class="fh-main">
    <section class="fh-section">
      <p class="fh-label">Section</p>
      <aside data-fh-panel-start>
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

