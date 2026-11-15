# Text fold (content)

Long text folds to a few lines with a Show all / Show less button. Held until Helm makes FOL live; its specimen
reads this file. CSS: `src/components/content/fold.css`. Script: `src/js/fold.js` (`@rascode/firehorse/fold`).

### FOL · Text fold

Use it for any text that can run long in a narrow slot: a chat message or reply in the Chat section (SCH), a note, a
description in a sidecar. Use it for text, not for lists or tables (those have their own sections). The body is
clamped to `--fh-fold-lines` lines (6 by default) of its own line height, the last line and a half fading out
through a mask, so the fade is always the surface the fold sits on. The toggle is the ghost button (BTN,
`fh-button--ghost fh-button--sm`), so it adds no colour, radius or size of its own.

```html
<div class="fh-fold">
  <div class="fh-fold__body" id="reply-1"><p>…</p></div>
  <button class="fh-button fh-button--ghost fh-button--sm fh-fold__toggle" type="button" aria-expanded="false" aria-controls="reply-1" hidden>Show all</button>
</div>
```

Load `@rascode/firehorse/fold` (`/fold.js` on a page). It adds `fh-fold--js` (the clamp only applies with it), shows
the toggle only when the text is taller than the clamp (measured on load, when the width changes, after fonts load,
and on `fh:fold-refresh` dispatched on or in a fold), sets `data-fits` on short text, and on click sets `data-open`,
`aria-expanded` and the label. Without the script the text is shown in full and the toggle stays hidden. A fold with
no toggle gets one, and a body with no id gets one for `aria-controls`.

- Lines: `style="--fh-fold-lines: 4"` on the fold. Labels: `data-label-closed` and `data-label-open` on the button.
- Start open: `data-open` on the fold, `aria-expanded="true"` and Show less on the button.
- Exports: `initFold(fold)` (for a fold added later), `measureFold(fold)`, `setFoldOpen(fold, open)`.
- No transition, so nothing moves under reduced motion. The toggle is a real button: focus stays on it.
- In a chat bubble, wrap the message paragraphs, not the head (name and time stay above the fold).
