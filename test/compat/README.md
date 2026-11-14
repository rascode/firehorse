# Compatibility fixture: Tailwind CSS v4 and shadcn/ui

Not shipped. Builds one page three ways and checks what wins where Firehorse meets Tailwind
and shadcn. Run `node test/compat/run.mjs` (fetches the Tailwind v4 CLI with npx).

- `naive-after.css`: `@import "tailwindcss"` then Firehorse, no bridge
- `naive-before.css`: Firehorse then `@import "tailwindcss"`, no bridge
- `bridged.css`: `src/integrations/tailwind/firehorse.css` first, then Tailwind, then
  `src/integrations/shadcn/firehorse.css`, with shadcn's own @theme inline block

The shadcn parts are shadcn's Button, Card and Input class strings on plain HTML (the
components are React, but their look is these classes and its theme variables).
