# Maestoso (Lipizzaner theme backdrop)

The supplied photo was removed (2026-11-13, rights unconfirmed). Point `etch.py` at a generated image instead.
The horse is cut out first (rembg, isnet-general-use) as `cut.png`.
`etch.py` turns the cut-out into the hero linework: pencil strands along
the form (denser in the highlights), anatomy lines, a double contour, joint
circles, dash-dot construction and dimensions, on the same 1453 × 920 canvas
as `site/img/backdrop/firehorse-horse.webp`. Output: white lines on alpha,
saved as `site/img/backdrop/lipizzaner-horse.webp`.

    pip install opencv-python-headless scikit-image pillow
    python3 etch.py        # run inside this folder; writes lipizzaner-horse.webp

The site swaps to it with `:root[data-fh-theme="lipizzaner"] .site-backdrop`
in `site/site.css`.
