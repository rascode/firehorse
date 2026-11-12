# Overlays

Things that open over the page: accordion, dialog, sheet, detail drawer, menu and its extras, toast and command menu.

Docs: https://firehorse.rascode.dev/components/overlays/

## Notes

Built on native elements (<details>, <dialog>, [popover]) so
they work without JavaScript and get keyboard + a11y behavior from
the browser. Open/close transitions use @starting-style and
::details-content where supported, and degrade to instant.
