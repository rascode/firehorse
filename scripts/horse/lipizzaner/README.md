# Maestoso (Lipizzaner theme backdrop)

`source.png` is the photo Rascode supplied for the Lipizzaner theme.
`cut.png` is the horse cut out of it (rembg, isnet-general-use).
`etch.py` turns the cut-out into the hero linework: pencil strands along
the form (denser in the highlights), anatomy lines, a double contour, joint
circles, dash-dot construction and dimensions, on the same 1453 × 920 canvas
as `site/img/backdrop/firehorse-horse.webp`. Output: white lines on alpha,
saved as `site/img/backdrop/lipizzaner-horse.webp`.

    pip install opencv-python-headless scikit-image pillow
    python3 etch.py        # run inside this folder; writes lipizzaner-horse.webp

The site swaps to it with `:root[data-fh-theme="lipizzaner"] .site-backdrop`
in `site/site.css`.
