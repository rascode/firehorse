# Contributing to Firehorse

1. `npm install`, then `npm test` (lint → build → contrast verify). It must pass.
2. Put new CSS in the right layer and file (`src/components/*`, `src/patterns/*`).
3. Read semantic tokens only. Add a primitive only in `src/tokens/primitives.css`, and a role only in `src/tokens/semantic.css` as a `light-dark()` pair.
4. Respond to containers, not the viewport. `@media` is for `prefers-*`, `pointer`, `forced-colors` and `print`.
5. Prefix classes with `fh-`. Private custom properties start with `--_`; public knobs are `--fh-<component>-<prop>` and must have a fallback.
6. Add a live demo to its category page under `site/pages/` with `data-demo` on its stage and its Index ID (`data-fh-id`), then run `node scripts/gen-index.mjs` and `node scripts/agent-docs.mjs`. In a category listed in `SPECIMEN_CATEGORIES` (`scripts/specimen.mjs`) the family's specimen page (`/components/actions/button/`) is generated from the Index: check it there. Keep `site-*` helpers out of a variant's own markup; `scripts/lint-site.mjs` fails on any inside a specimen stage.
7. Add a line to `CHANGELOG.md`.
