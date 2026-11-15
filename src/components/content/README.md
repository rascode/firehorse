# Content

Blocks that carry content: card, checklist, steps, stats, quote, crosses, word rotator, list, timeline, chat, text fold, description list, key value list, kbd, divider, code block, pricing tiers, features, testimonial, logo strip, bento grid, carousel, stacking deck, member card, story card, and the speed blur, dither and liquid glass effects.

Docs: https://firehorse.rascode.dev/components/content/

## Notes

Every block here is container-aware: it adapts to the slot, cell
or pane it is placed in, not to the viewport.

## Text fold (FOL)

`fold.css` clamps long text (a chat message, a long reply, a note) to
`--fh-fold-lines` lines, 6 by default, with a ghost Show all / Show less
button. The clamp only applies once `fold.js` (`@rascode/firehorse/fold`)
sets `.fh-fold--js`; without it the text is shown in full. The script shows
the button only when the text is taller than the clamp. Agent notes:
`agent/components/fold.md`.
