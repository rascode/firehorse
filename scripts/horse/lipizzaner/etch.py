"""Etch a cut-out horse photo into Firehorse hero linework (white on alpha).
Matches site/img/backdrop/firehorse-horse.webp: 1453x920, pencil hatching that
follows the form, contour, joint circles, dash-dot construction, dimensions."""
import math, random, sys
import cv2, numpy as np
from PIL import Image, ImageDraw, ImageFont

random.seed(7); np.random.seed(7)
W, H, SS = 1453, 920, 2                     # output size, supersample
CW, CH = W * SS, H * SS
cut = np.array(Image.open("cut.png").convert("RGBA"))
alpha = cut[..., 3]
ys, xs = np.where(alpha > 100)
x0, x1, y0, y1 = xs.min(), xs.max(), ys.min(), ys.max()
crop = cut[y0:y1 + 1, x0:x1 + 1]
ch, cw = crop.shape[:2]

# Place: horse fills ~80% of the height, centred a little right, hooves near the base line.
s = (0.84 * CH) / ch
tw, th = int(cw * s), int(ch * s)
ox, oy = int(CW * 0.53 - tw / 2), int(CH * 0.885 - th)
big = cv2.resize(crop, (tw, th), interpolation=cv2.INTER_CUBIC)
mask = np.zeros((CH, CW), np.uint8); mask[oy:oy + th, ox:ox + tw] = (big[..., 3] > 35).astype(np.uint8) * 255
mask = cv2.morphologyEx(mask, cv2.MORPH_OPEN, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (7, 7)))
gray = np.zeros((CH, CW), np.float32)
g = cv2.cvtColor(big[..., :3], cv2.COLOR_RGB2GRAY)
g = cv2.createCLAHE(clipLimit=2.5, tileGridSize=(8, 8)).apply(g)
gray[oy:oy + th, ox:ox + tw] = g.astype(np.float32) / 255.0
P = lambda px, py: (ox + (px - x0) * s, oy + (py - y0) * s)   # photo coords -> canvas (2x)

acc = np.zeros((CH, CW), np.float32)                          # line intensity
def line(a, b, w=1, v=1.0):
    tmp = np.zeros_like(acc); cv2.line(tmp, (int(a[0]), int(a[1])), (int(b[0]), int(b[1])), v, w, cv2.LINE_AA); np.maximum(acc, tmp, out=acc)
def add_poly(pts, w=1, v=1.0):
    tmp = np.zeros_like(acc); cv2.polylines(tmp, [np.int32(pts)], False, v, w, cv2.LINE_AA); acc[:] = np.clip(acc + tmp * 0.6, 0, 1)

# —— Hatching: short strokes along the isophotes, denser where the coat is lighter ——
blur = cv2.GaussianBlur(gray, (0, 0), 6)
gx = cv2.Sobel(blur, cv2.CV_32F, 1, 0, ksize=5); gy = cv2.Sobel(blur, cv2.CV_32F, 0, 1, ksize=5)
# structure tensor for a smooth orientation field
Jxx = cv2.GaussianBlur(gx * gx, (0, 0), 16); Jyy = cv2.GaussianBlur(gy * gy, (0, 0), 16); Jxy = cv2.GaussianBlur(gx * gy, (0, 0), 16)
theta = 0.5 * np.arctan2(2 * Jxy, Jxx - Jyy) + np.pi / 2       # along the contours of light
inside = mask > 0
cand = np.argwhere(inside)
light = gray[inside]
lo_, hi_ = np.percentile(light, [8, 98]); Ln = np.clip((light - lo_) / (hi_ - lo_), 0, 1)
hatch = np.zeros_like(acc)
def strokes(N, wgt, rot, lmin, lmax, vmin, vmax):
    wgt = wgt / wgt.sum()
    for (y, x) in cand[np.random.choice(len(cand), N, p=wgt)]:
        pts = [(x, y)]; cx, cy = float(x), float(y)
        L = random.uniform(lmin, lmax); steps = 8
        for _ in range(steps):
            t = theta[int(cy), int(cx)] + rot
            cx += math.cos(t) * L / steps; cy += math.sin(t) * L / steps
            if not (0 <= cx < CW and 0 <= cy < CH) or not inside[int(cy), int(cx)]: break
            pts.append((cx, cy))
        if len(pts) > 3:
            cv2.polylines(hatch, [np.int32(pts)], False, random.uniform(vmin, vmax), 1, cv2.LINE_AA)
strokes(11500, 0.002 + Ln ** 6.0, 0.0, 26, 70, 0.26, 0.62)            # light: flowing strands in the highlights
strokes(1600, 0.02 + (1 - Ln) ** 2.0, 0.65, 14, 30, 0.10, 0.22)        # shade: sparse cross-hatching
acc = np.clip(acc + hatch, 0, 1)

# —— Anatomy: edges inside the horse ——
e = cv2.Canny((cv2.GaussianBlur(gray, (0, 0), 3.0) * 255).astype(np.uint8), 14, 40)
e[~cv2.erode(mask, np.ones((9, 9), np.uint8)).astype(bool)] = 0
cnts, _ = cv2.findContours(e, cv2.RETR_LIST, cv2.CHAIN_APPROX_NONE)
for c in cnts:
    if cv2.arcLength(c, False) < 80: continue
    tmp = np.zeros_like(acc); cv2.polylines(tmp, [c], False, 0.75, 1, cv2.LINE_AA); acc = np.maximum(acc, tmp)

# —— Silhouette: a solid contour and a dashed one just inside ——
sm = cv2.GaussianBlur(mask, (0, 0), 2.5); sm = (sm > 127).astype(np.uint8) * 255
outer, _ = cv2.findContours(sm, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
for c in outer:
    if cv2.contourArea(c) < 4000: continue
    tmp = np.zeros_like(acc); cv2.polylines(tmp, [c], True, 0.95, 2, cv2.LINE_AA); acc = np.maximum(acc, tmp)
inner, _ = cv2.findContours(cv2.erode(sm, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (13, 13))), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
for c in inner:
    if cv2.contourArea(c) < 4000: continue
    pts = c[:, 0, :]
    for i in range(0, len(pts) - 8, 22):
        tmp = np.zeros_like(acc); cv2.polylines(tmp, [pts[i:i + 12]], False, 0.55, 1, cv2.LINE_AA); acc = np.maximum(acc, tmp)

# —— Blueprint: joints, construction, dimensions (photo landmarks) ——
J = {  # photo pixel coordinates of joints on the 640x480 source
    "eye": (372, 150), "poll": (378, 122), "muzzle": (404, 190), "withers": (305, 200), "croup": (198, 214),
    "shoulder": (352, 248), "elbow": (345, 292), "kneeF": (424, 318), "fetF": (430, 356), "kneeN": (368, 333), "fetN": (372, 357),
    "hip": (230, 240), "stifle": (262, 285), "hockF": (247, 334), "fetHF": (266, 365), "hockN": (288, 368), "fetHN": (305, 388),
}
C = {k: P(*v) for k, v in J.items()}
def circle(c, r, dashed=True, v=0.6, w=1):
    n = max(24, int(r / 3))
    for i in range(n):
        if dashed and i % 2: continue
        a0, a1 = 2 * math.pi * i / n, 2 * math.pi * (i + 1) / n
        line((c[0] + r * math.cos(a0), c[1] + r * math.sin(a0)), (c[0] + r * math.cos(a1), c[1] + r * math.sin(a1)), w, v)
def cross(c, r=10, v=0.85):
    for a in (0, math.pi / 2, math.pi / 4, 3 * math.pi / 4):
        line((c[0] - r * math.cos(a), c[1] - r * math.sin(a)), (c[0] + r * math.cos(a), c[1] + r * math.sin(a)), 1, v)
def dashline(a, b, dash=18, gap=10, dot=True, v=0.5):
    L = math.dist(a, b); ux, uy = (b[0] - a[0]) / L, (b[1] - a[1]) / L; t = 0
    while t < L:
        e1 = min(t + dash, L); line((a[0] + ux * t, a[1] + uy * t), (a[0] + ux * e1, a[1] + uy * e1), 1, v); t = e1 + gap
        if dot and t < L: line((a[0] + ux * t, a[1] + uy * t), (a[0] + ux * (t + 2), a[1] + uy * (t + 2)), 1, v); t += 2 + gap
for k in ("shoulder", "hip"):
    circle(C[k], 46 * SS, v=0.6); circle(C[k], 12 * SS, dashed=False, v=0.85); cross(C[k], 10 * SS)
for k in ("elbow", "stifle", "kneeF", "kneeN", "hockF", "hockN", "fetF", "fetN", "fetHF", "fetHN"):
    circle(C[k], 19 * SS, v=0.75); circle(C[k], 7 * SS, dashed=False, v=0.85)
circle(C["eye"], 8 * SS, dashed=False, v=0.8)
for a, b in (("shoulder", "elbow"), ("elbow", "kneeN"), ("kneeN", "fetN"), ("shoulder", "kneeF"), ("kneeF", "fetF"),
             ("hip", "stifle"), ("stifle", "hockF"), ("hockF", "fetHF"), ("stifle", "hockN"), ("hockN", "fetHN"), ("hip", "shoulder"), ("withers", "croup")):
    dashline(C[a], C[b], 10 * SS, 6 * SS, dot=False, v=0.42)
# horizontal and vertical construction running past the figure
L0, R0, T0, B0 = 60 * SS, CW - 120 * SS, 30 * SS, CH - 70 * SS
for k in ("poll", "withers", "shoulder", "kneeF", "fetHN"):
    y = C[k][1]; dashline((L0 + 40 * SS, y), (R0 - 20 * SS, y), 16 * SS, 7 * SS, v=0.38); cross((R0 - 20 * SS, y), 6 * SS, 0.7)
for k in ("croup", "withers", "muzzle"):
    x = C[k][0]; dashline((x, T0 + 30 * SS), (x, B0), 16 * SS, 7 * SS, v=0.38); cross((x, T0 + 30 * SS), 6 * SS, 0.7)
base = C["fetHN"][1] + 18 * SS
line((L0, base), (R0, base), 1, 0.55)
for x in range(int(L0), int(R0), 20 * SS):
    line((x, base), (x, base + (10 if (x // (20 * SS)) % 5 else 22) * SS / 2), 1, 0.5)

# dimensions: width across the top and bottom, heights on both sides
dims = []
def dim(a, b, label, vertical=False):
    line(a, b, 1, 0.9); cross(a, 9 * SS, 0.9); cross(b, 9 * SS, 0.9)
    dims.append(((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, label, vertical))
nose_x, tail_x = C["muzzle"][0] + 10 * SS, P(120, 290)[0]
dim((C["croup"][0], 36 * SS), (nose_x, 36 * SS), "15 2")
dim((tail_x, CH - 30 * SS), (nose_x, CH - 30 * SS), "18 4")
dim((CW - 52 * SS, C["poll"][1] - 40 * SS), (CW - 52 * SS, base), "12 8", True)
dim((42 * SS, C["withers"][1]), (42 * SS, base), "10 6", True)

img = Image.fromarray((np.clip(acc, 0, 1) * 255).astype(np.uint8), "L")
d = ImageDraw.Draw(img)
try: font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 17 * SS)
except Exception: font = ImageFont.load_default()
for x, y, label, vert in dims:
    tw_, th_ = d.textbbox((0, 0), label, font=font)[2:]
    bx, by = (x + 14 * SS, y - th_ / 2) if vert else (x - tw_ / 2, y - th_ / 2)
    d.rectangle((bx - 10 * SS, by - 4 * SS, bx + tw_ + 10 * SS, by + th_ + 6 * SS), fill=0)
    d.text((bx, by - 2 * SS), label, fill=235, font=font)
a = img.resize((W, H), Image.LANCZOS)
out = Image.new("RGBA", (W, H), (255, 255, 255, 0)); out.putalpha(a)
white = Image.new("RGBA", (W, H), (255, 255, 255, 255)); white.putalpha(a)
white.save("lipizzaner-horse.png")
white.save("lipizzaner-horse.webp", "WEBP", quality=88, method=6)
prev = Image.new("RGB", (W, H), (22, 22, 22)); prev.paste((235, 235, 235), mask=a); prev.save("lipizzaner-preview.png")
print("ok", W, H)
