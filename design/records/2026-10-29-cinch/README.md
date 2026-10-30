# Record: the two-pane "Why it matters / The review" section (2026-10-29)

Captured on rascode.dev (local, http://127.0.0.1:3011/assessments/ai-visibility-audit), dark, at
1440 × 900 and 375 × 812. Rascode called it a ripe pattern. Named **Cinch** (`CIN`), built on the etched split (`ESP`) with `--roomy`. Live on /patterns/#cinch.

## What it is

A full-bleed pair of panes directly under the page's sticky sub-nav: a statement on the left,
the substance on the right, joined by one dashed line. Built entirely from existing Firehorse
parts: `fh-etched-split` (layout) + eyebrow pills + heading / lede / muted fact.

```html
<section class="fh-section fh-section--flush" aria-labelledby="context-heading">
  <div class="fh-etched-split fh-bleed">
    <div class="fh-etched-split__pane fh-crosses">
      <div class="fh-stack">
        <p class="fh-eyebrow-pill" data-tone="rose"><span class="fh-dot fh-dot--live" aria-hidden="true"></span><span>Why it matters</span></p>
        <h2 id="context-heading" class="fh-heading">Technical discovery readiness review: crawlability, structure, content consistency, and prioritized remediation.</h2>
      </div>
    </div>
    <div class="fh-etched-split__pane fh-crosses">
      <div class="fh-stack">
        <p class="fh-eyebrow-pill" data-tone="orange"><span class="fh-dot fh-dot--live" aria-hidden="true"></span><span>The review</span></p>
        <p class="fh-lede">Audit of how well search engines and AI-driven discovery systems can understand a business site—without guaranteeing citations or rankings.</p>
        <p class="fh-body fh-muted">Typical turnaround: <strong>5–10 business days</strong>.</p>
      </div>
    </div>
  </div>
</section>
```

## How it looks (1440 × 900)

- Full bleed, edge to edge (1425px), split exactly in half: 712.5 / 712.5.
- Dashed etched rules (text at 22%) on the top and bottom of the pair and down the centre seam;
  scaffold crosses (`fh-crosses`) where the seam meets the rules and at the content edges.
- Pane padding: 125.5px top and bottom (the section rhythm). Outside edge 49.875px, which is
  the page margin, so the copy lines up with the content edge above and below. Inside edge 28px from the seam.
- Pane height 450px; both panes share it.
- Left: eyebrow pill (rose, live dot) "Why it matters", then an `fh-heading` statement in
  four lines. Right: eyebrow pill (orange, live dot) "The review", an `fh-lede`, then one
  muted fact line with the number in bold.
- Two tones on the two pills, one per pane, so the pair reads as a question and its answer.

## Mobile (375 × 812)

The panes stack: each full width (375px), padding 72px / 20px, about 336px tall. The seam becomes
a dashed rule between them with crosses at its ends.

## What makes it a pattern (not just a split)

The layout piece already exists (`fh-etched-split`, on the Layout page, no Index ID yet).
What's worth fixing in place is the composition: statement left, substance right; one pill
per pane in two tones; the heading carries the claim and the right side carries the facts;
a single bold number ends it; it sits flush under the sub-nav as the page's opening argument.
