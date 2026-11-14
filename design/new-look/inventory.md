# The new look: concept-page styles and their Firehorse equivalents

Source: the Homepage concept (`/home-concept/`, `site/home-concept.css`) and its menus, taken
2026-11-13. Direction (Rascode): large, chunky type, open spacing, icons and colour. Every style
below needs a Firehorse equivalent, so the site is built from the library rather than page CSS.

Status: **Done** = a Firehorse part the site now uses. **Exists** = already a Firehorse part.
**New** = to build.

| # | Style on the concept page | Where it shows | Firehorse equivalent | Status |
|---|---|---|---|---|
| 1 | Explore card: solid icon block, numbered mono eyebrow, large title, note, arrow | Home page Explore | Tiles · TIL-1.1 Index tile | Done |
| 2 | Docs tile: block left, title and note, number and ↗ right | Docs panel | Tiles · TIL-1.2 Row | Done |
| 3 | Agent tile, stacked: block, number and ↗, large name, note | Send to an agent (concept) | Tiles · TIL-2.1 Launch tile | Done |
| 4 | Agent tile, compact: tinted block, name and note inline | Send to an agent (home) | Tiles · TIL-2.2 Compact | Done |
| 5 | Terminal cell: name, `$ command` in mono | Send to an agent | Tiles · TIL-2.3 Command | Done |
| 6 | Backdrop options, rebuilt as tiles: a large thumbnail, name, mono caps note; the picked tile marked | Backdrop picker (camera), full width | Tiles · TIL-3.1 Option tile, media | Done (TIL-3.1) |
| 7 | Typeface options, rebuilt as tiles: a large "Aa" in the face, name, mono caps note; the picked tile marked | Typeface picker (T), full width | Tiles · TIL-3.2 Option tile, specimen | Done (TIL-3.2) |
| 8 | Photo swatches as tiles with a mono caption, many across | Backdrop picker, Photos, full width | Tiles · TIL-3.3 Option tile, swatch | Done (TIL-3.3) |
| 9 | Tile panel, full width: mono title and count head, grouped tile grid, footer link rail | Docs panel, and the typeface and backdrop pickers | Mega panel · MEG-3.1 Tile panel | Done (MEG-3.1) |
| 10 | Tile menu: mono head with a status pill, labels, tile grids, copy pill, ask accordion | Send to an agent | Dropdown menu · DRP-2.1 Tile menu | Done (DRP-2.1) |
| 11 | Colour picker: opens like the typeface and backdrop pickers (Rascode, 2026-11-14), a full-width tile panel of colour tiles, the picked one marked | Theme colour menu (brush), full width | Mega panel · MEG-3.1 with Tiles · TIL-3.4 Option tile, colour (the compact list is Theme select · THS-2.1) | Done (TIL-3.4, THS-2.1) |
| 12 | Mono caps nav links with a roll and a chevron | Hero top left | Navigation · NAV-2.1 Nav links | Done (NAV-2.1) |
| 13 | Round icon buttons: white disc, dark glyph | Top right (camera, T, brush) | Button · BTN-4.1 Disc, BTN-4.2 Disc, tone | Done (BTN-4.1, BTN-4.2) |
| 14 | Frosted pill trigger with an etched edge and ↑ | Send to an agent button | Button · BTN-5.1 Etched pill | Done (BTN-5.1) |
| 15 | Segmented pill with a filled action end (v1.1 · Download from Git) | Bottom right | Eyebrow pill · EYE-5.4 | Exists |
| 16 | Light / Dark rolling toggle pill; and the Text \| Transcribe switch in the dictation field (Rascode, 2026-11-14) | Bottom right; dictation field | Segment switch · SEG-2.1 Rolling toggle, SEG-2.2 Mode toggle (SEG moved to Forms and live, Rascode, 2026-11-14) | Done (SEG-2.1, SEG-2.2) |
| 17 | Announcement chip (Introducing · Firehorse v1.1) | Above the logo | Eyebrow pill · EYE-5.2 | Exists |
| 18 | Hero lockup: wordmark, etched line to the edge, headline split by the line, rotating word | Hero | Masthead · new variant (MST) with Word rotator (WRT); both go live (Rascode, 2026-11-14). Word rotator keeps only the home page's rotator and the same rotator inside paragraph text; its other variants are removed | New |
| 19 | Lede with a mono caps underlined phrase and a down arrow | Under the logo | Action & link · new variant (ACT) | New |
| 20 | Frost: the art blurred and washed below the line | Hero | Backdrop · new option (BKD); goes live (Rascode, 2026-11-14) | New |
| 21 | Announcement banner across the top: tag, the news, Read more and Become a Pro cells (Rascode, 2026-11-13) | Top of the concept page | Empty state & banner · EMP-1.3 Announcement banner | Done (EMP-1.3) |

Notes
- **MEG-3.1 Tile panel is the look to aim for** (Rascode, 2026-11-13: "MEG-3.1 is perfect"). New parts match it: a mono caps head, dashed etch rules, open tiles, large type, the accent for what's picked. The rest of this list ships in v1.1.0 (launch goal objective "New look", due 2026-11-18).
- **Pickers are full width** (Rascode, 2026-11-13): the typeface and backdrop pickers open as
  full-width panels (the Tile panel, row 9) and show their options as tiles (rows 6 to 8), not the
  current narrow list restyled. There is plenty of room; use it. The colour picker (row 11) now
  opens the same way (Rascode, 2026-11-14); the small list it first became stays in Firehorse as
  THS-2.1.
- Tiles keeps one anatomy (`fh-tile__cube`, `__eyebrow`, `__title`, `__note`, `__go`) across
  index, launch and option tiles, so the pickers in 6 to 8 are a third group (TIL-3), not a new family.
- The below-the-fold sections (Build with, The problem / The solution, Configuration over code)
  were removed from the concept page at Rascode's call and are not in this list.
