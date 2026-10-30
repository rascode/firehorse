# Record: the offset panel on /media/ (2026-10-29)

Captured at http://localhost:8787/media/, desktop 1440 × 900 and mobile 375 × 812, dark scheme,
Rascode theme fonts. Rascode called this the layout to keep: "room to breathe", offset, variety.
Nothing was changed to produce it. This file records exactly what it is and why it happens,
so it can be rebuilt on purpose.

## What you see

1. **Section 1 (Social & print) is unchanged** down to the Export note.
2. **From the Export note to the bottom of the page, a tinted panel fills the left side.**
   - Left edge: the content edge (x = 50 at 1440). Width: 832px (52rem). Right edge: a 1px
     dashed etched line at x ≈ 882 that runs straight down through section 2 and the footer.
   - Fill: the card fill, `--fh-card-bg` (Rascode theme: surface at ~62% opacity,
     oklab(0.20 0 0 / 0.62) in dark). Right of the line is the plain page canvas.
     That fill vs canvas is the **two-tone split, left to right**.
   - Top edge: the Export note's dashed top border (y ≈ 5764 at 1440).
   - Bottom: ends at the bottom of the page (y ≈ 10570 of 10578).
3. **Section 2 (Slides) sits on that panel.** Its head (chapter, title, lede) starts at the panel's
   left edge, so the content touches the line (to fix: inset it). The slide gallery and builder
   are wider than the panel and run across both tones.
4. **Footer:** 637px tall (y 9941 → 10578), columns Docs / Reference / Agents / Rascode. The panel's
   tint and dashed line continue through it, so the empty band above the columns and the left
   three columns read darker, the Rascode column and the art read lighter, split by the line.

Mobile (375 × 812): the panel is the full content width (335px, x = 20) from y ≈ 6603 to the page
bottom (12528), so there is no left/right split on phones: the whole lower page is tinted.

## Why it happens (mechanism)

- `.fh-card` (src/components/content.css:145) has `min-block-size: 100%` so cards fill grid cells.
- The Export note is `<aside class="fh-card site-media__export">` inside the section's
  `.fh-stack.fh-stack--xl` (a flex column). There the 100% resolves to the stack's own height
  (4806.5px at 1440), so the card becomes 4806px tall and overflows the section.
- `.site-media__export { max-inline-size: 52rem }` (site/site.css) sets the 832px width.
- Overflow is visible, so the card paints behind section 2 and the footer, and extends the page.
- **It is fragile:** its length equals section 1's stack height, so any change to section 1
  (a demo added, a height changed) changes where the panel ends. It has to be rebuilt as an
  intended layout before anything else is edited on this page.

## Snapshot

`snapshot/` holds the exact files served when this was recorded: the built page (`media.html`),
`site.css`, the preview `firehorse.css`, `themes.css`, `rascode.css`, and the page source
(`media.source.html`). To view it again, copy them over site/dist (media.html → media/index.html)
and serve as usual.

## Rebuilt on purpose (same evening)

The accident is gone; the same look is now the **offset panel** pattern (Index `PNL`,
`src/patterns/panel.css`), confirmed by Rascode: "the menu should have that large gap", "I want
splits, but it may not work on mobile", "rascode will apply patterns defined in the fh spec".

| Recorded (accident) | Rebuilt |
|---|---|
| Export card overflowing (`min-block-size: 100%` in a flex stack) | `[data-fh-panel-start]` on the Export note + `<div class="fh-panel">` as the page's last child, anchored to it |
| 832px wide from the content edge | `--fh-panel-size: 52rem`, placed in the frame's content column |
| Fill oklab(0.2002 0 0 / 0.62) | `--fh-panel-fill: color-mix(in oklab, var(--fh-color-canvas) 62%, transparent)`, same value |
| Dashed etched edges, open bottom | `border: 1px dashed var(--fh-color-etch)`, no bottom border |
| Ends at the page bottom; length depended on section 1 | Always runs to the page bottom (`inset-block-end: 0`) |
| Tall footer with an open tail (varied with viewport) | `.fh-footer--tall`, tail `--fh-footer-tail: clamp(16rem, 60vh, 36rem)` |
| Slides head touching the edge | `.fh-panel-inset` on the section head |
| Mobile: panel full width, no split | Panel keeps a 3rem open strip (`--fh-panel-gutter`), so phones split too |

The full composition is the **Fender** pattern (`FND`), live on /patterns/#fender; the panel is its building block.
