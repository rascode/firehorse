# Contributing to Firehorse

1. `npm install`, then `npm test` (lint → build → contrast verify). It must pass.
2. Put new CSS in the right layer and file (`src/components/*`, `src/patterns/*`).
3. Read semantic tokens only. Add a primitive only in `src/tokens/primitives.css`, and a role only in `src/tokens/semantic.css` as a `light-dark()` pair.
4. Respond to containers, not the viewport. `@media` is for `prefers-*`, `pointer`, `forced-colors` and `print`.
5. Prefix classes with `fh-`. Private custom properties start with `--_`; public knobs are `--fh-<component>-<prop>` and must have a fallback.
6. Add a live demo to `site/index.html` with `data-demo` on its stage, then run `node scripts/agent-docs.mjs` so `agent/components.md` picks it up.
7. Add a line to `CHANGELOG.md`.
