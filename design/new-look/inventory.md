# The new look: concept-page styles and their Firehorse equivalents

Source: the Homepage concept (`/home-concept/`, `site/home-concept.css`) and its menus, taken
2026-11-13. Direction (Rascode): large, chunky type, open spacing, icons and colour. Every style
below needs a Firehorse equivalent, so the site is built from the library rather than page CSS.

Status: **Done** = a Firehorse part the site now uses. **Exists** = already a Firehorse part.
**New** = to build.

| # | Style on the concept page | Where it shows | Firehorse equivalent | Status |
|---|---|---|---|---|
| 1 | Explore card: solid icon block, numbered mono eyebrow, large title, note, arrow | Home page Explore | Tiles · TIL-1.1 Index tile | Done |
| 2 | Docs tile: block left, title and note, number and ↗ right | Docs panel | Tiles · TIL-1.2 Row | Done (panel still on page CSS, see 9) |
| 3 | Agent tile, stacked: block, number and ↗, large name, note | Send to an agent (concept) | Tiles · TIL-2.1 Launch tile | Done |
| 4 | Agent tile, compact: tinted block, name and note inline | Send to an agent (home) | Tiles · TIL-2.2 Compact | Done |
| 5 | Terminal cell: name, `$ command` in mono | Send to an agent | Tiles · TIL-2.3 Command | Done |
| 6 | Backdrop row: thumbnail, name, mono caps note; picked row tinted | Backdrop picker (camera) | Tiles · TIL-3.1 Option tile, media | New |
| 7 | Typeface row: "Aa" specimen in the face, name, mono caps note | Typeface picker (T) | Tiles · TIL-3.2 Option tile, specimen | New |
| 8 | Photo swatch with a mono caption, in a three-across grid | Backdrop picker, Photos | Tiles · TIL-3.3 Option tile, swatch | New |
| 9 | Tile panel: mono title and count head, grouped tile grid, footer link rail | Docs panel | Mega panel · new variant (MEG-3) | New |
| 10 | Tile menu: mono head with a status pill, labels, tile grids, copy pill, ask accordion | Send to an agent | Dropdown menu · new variant (DRP-2) | New |
| 11 | Colour list: dot and mono caps label, picked dot ringed | Theme colour menu (brush) | Theme select · new variant (THS) | New |
| 12 | Mono caps nav links with a roll and a chevron | Hero top left | Navigation · new variant (NAV) | New |
| 13 | Round icon buttons: white disc, dark glyph | Top right (camera, T, brush) | Button · new variant, round icon (BTN) | New |
| 14 | Frosted pill trigger with an etched ring and ↑ | Send to an agent button | Button · new variant, etched pill (BTN) | New |
| 15 | Segmented pill with a filled action end (v1.1 · Download from Git) | Bottom right | Eyebrow pill · EYE-5.4 | Exists |
| 16 | Light / Dark rolling toggle pill | Bottom right | Segment switch · new variant (SEG) | New |
| 17 | Announcement chip (Introducing · Firehorse v1.1) | Above the logo | Eyebrow pill · EYE-5.2 | Exists |
| 18 | Hero lockup: wordmark, etched line to the edge, headline split by the line, rotating word | Hero | Masthead · new variant (MST) with Word rotator (WRT) | New |
| 19 | Lede with a mono caps underlined phrase and a down arrow | Under the logo | Action & link · new variant (ACT) | New |
| 20 | Frost: the art blurred and washed below the line | Hero | Backdrop · new option (BKD) | New |

Notes
- Tiles keeps one anatomy (`fh-tile__cube`, `__eyebrow`, `__title`, `__note`, `__go`) across
  index, launch and option tiles, so the pickers in 6 to 8 are a third group (TIL-3), not a new family.
- The below-the-fold sections (Build with, The problem / The solution, Configuration over code)
  were removed from the concept page at Rascode's call and are not in this list.
