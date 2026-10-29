"""Trace the hero horse into etched line art.

Source: "Frison au galop dans la neige" by Fchosson, CC BY-SA 3.0,
https://commons.wikimedia.org/wiki/File:Frison_au_galop_dans_la_neige.JPG
(downscaled to 1800px). The traced artwork is a derivative and is
licensed CC BY-SA 3.0 (see site/parts/HORSE-CREDIT.md).

Mirrors the photo so the horse runs left to right, masks the horse,
then engraves it: parallel lines displaced by the coat's light (a relief
engraving), split into three weights by brightness, plus the silhouette.
Run once (needs opencv-python-headless, scikit-image); writes
site/parts/horse-art.json, which scripts/gen-horse.mjs turns into SVG.
"""
import json, os, cv2, numpy as np
from skimage import measure
here = os.path.dirname(os.path.abspath(__file__))
root = os.path.abspath(os.path.join(here, "..", ".."))
im = cv2.flip(cv2.imread(os.path.join(here, "source.jpg")), 1)
H, W = im.shape[:2]
hsv = cv2.cvtColor(im, cv2.COLOR_BGR2HSV); v = hsv[..., 2].astype(float); s = hsv[..., 1].astype(float)
def comp(d):
    d = cv2.morphologyEx(d.astype(np.uint8) * 255, cv2.MORPH_OPEN, np.ones((3, 3), np.uint8))
    n, lab, st, _ = cv2.connectedComponentsWithStats(d, 8); return (lab == lab[650, 900]).astype(np.uint8) * 255
strict = comp((v < 70) | ((v < 95) & (s < 90)))
loose = comp((v < 70) | ((v < 95) & (s < 90)) | ((v < 135) & (s < 55)))
box = np.zeros_like(strict); box[760:1080, 220:430] = 255   # the far hind leg, dusted with snow
m = strict | (loose & box)
m = cv2.morphologyEx(m, cv2.MORPH_CLOSE, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (15, 15)))
ff = m.copy(); mk = np.zeros((H + 2, W + 2), np.uint8); cv2.floodFill(ff, mk, (0, 0), 255); m = m | cv2.bitwise_not(ff)
m = cv2.morphologyEx(m, cv2.MORPH_OPEN, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (9, 9)))
n, lab, st, _ = cv2.connectedComponentsWithStats(m, 8); m = (lab == lab[650, 900]).astype(np.uint8) * 255

g = cv2.cvtColor(im, cv2.COLOR_BGR2GRAY)
e = cv2.createCLAHE(clipLimit=3.0, tileGridSize=(10, 10)).apply(g)
e = cv2.GaussianBlur(e, (0, 0), 2.4).astype(float)
inside = cv2.erode(m, np.ones((3, 3), np.uint8)) > 0
lo, hi = np.percentile(e[inside], [5, 97]); L = np.clip((e - lo) / (hi - lo), 0, 1)

def path(pts):
    pts = np.round(np.asarray(pts)).astype(int)
    keep = [0] + [i for i in range(1, len(pts)) if (pts[i] != pts[i - 1]).any()]
    pts = pts[keep]
    if len(pts) < 2: return None
    d = f"M{pts[0][0]} {pts[0][1]}l" + " ".join(f"{a} {b}" for a, b in np.diff(pts, axis=0))
    return d
weights = {0: [], 1: [], 2: []}
STEP = 5.5; ang = np.deg2rad(-14); dx, dy = np.cos(ang), np.sin(ang); nx, ny = -dy, dx
diag = int(np.hypot(W, H))
for k in np.arange(-diag / 2, diag / 2, STEP):
    run, cur = [], None
    def flush():
        if cur is not None and len(run) > 2:
            p = path(run[::2] + ([run[-1]] if len(run) % 2 == 0 else []))
            if p: weights[cur].append(p)
    for t in np.arange(-diag / 2, diag / 2, 3):
        x0 = W / 2 + nx * k + dx * t; y0 = H / 2 + ny * k + dy * t
        xi, yi = int(x0), int(y0)
        if not (0 <= xi < W and 0 <= yi < H and inside[yi, xi]):
            flush(); run, cur = [], None; continue
        l = L[yi, xi]; off = -3.4 * l
        p = (x0 + nx * off, y0 + ny * off)
        b = 0 if l < 0.25 else (1 if l < 0.6 else 2)
        if cur is None: cur = b
        if b != cur:
            run.append(p); flush(); run, cur = [p], b
        else: run.append(p)
    flush()
mb = cv2.GaussianBlur(m.astype(float) / 255, (0, 0), 2)
outline = []
for c in measure.find_contours(mb, 0.5):
    if len(c) < 200: continue
    pts = cv2.approxPolyDP(np.array([[p[1], p[0]] for p in c], dtype=np.float32).reshape(-1, 1, 2), 0.8, True).reshape(-1, 2)
    outline.append(path(list(pts) + [pts[0]]))
x, y, w, h = cv2.boundingRect(m)
art = {"source": "Frison au galop dans la neige, Fchosson, CC BY-SA 3.0, Wikimedia Commons (mirrored, traced)", "width": W, "height": H, "bbox": [x, y, w, h],
       "dark": weights[0], "mid": weights[1], "light": weights[2], "outline": outline}
out = os.path.join(root, "site/parts/horse-art.json")
json.dump(art, open(out, "w"), separators=(",", ":"))
print("horse-art.json", os.path.getsize(out) // 1024, "KB", {k: len(v) for k, v in weights.items()}, "bbox", art["bbox"])
