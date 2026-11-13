"""Check text legibility on a rendered TTE slide.

Usage:
    python check_composition.py slide.png boxes.json [--plate no_text.png] [--subject cutout.png] [--out report.png]

boxes.json: list of {"name", "x", "y", "w", "h", "color": "#RRGGBB", "large": bool}
in slide pixels (1080x1350). Take them from Figma (absoluteBoundingBox minus the slide's origin).

For each text box it measures the background *around the glyphs* (the box with the text pixels
masked out by colour distance), then reports:
  - contrast at the worst point (5th percentile) against the text colour (WCAG ratio);
  - clutter: std of background luminance (busy backgrounds read badly even with ok contrast);
  - subject overlap: share of the box covered by the subject cut-out, if given.
Thresholds: contrast >= 4.5 (small) / 3.0 (large); clutter < 0.12; overlap = 0 (except a headline
behind a cut-out subject, which the agent decides).
"""
import json
import sys

import numpy as np
from PIL import Image, ImageDraw

# ponytail: edge threshold calibrated on 4 slides (0037 s3, Sahel v1/v2); recalibrate as refs grow
EDGE_MAX = 0.02


def lin(c):
    c = c / 255.0
    return np.where(c <= 0.03928, c / 12.92, ((c + 0.055) / 1.055) ** 2.4)


def luminance(rgb):
    r, g, b = lin(rgb[..., 0]), lin(rgb[..., 1]), lin(rgb[..., 2])
    return 0.2126 * r + 0.7152 * g + 0.0722 * b


def contrast(l1, l2):
    hi, lo = np.maximum(l1, l2), np.minimum(l1, l2)
    return (hi + 0.05) / (lo + 0.05)


def hex_rgb(h):
    h = h.lstrip("#")
    return np.array([int(h[i:i + 2], 16) for i in (0, 2, 4)], dtype=float)


def check(slide_path, boxes, subject_path=None, out_path=None, plate_path=None):
    """plate_path: render of the same slide with the text layers hidden (recommended).
    Without it, glyphs are removed by colour, which misses obstacles of the text's own colour."""
    img = Image.open(slide_path).convert("RGB")
    if img.size != (1080, 1350):
        img = img.resize((1080, 1350))
    arr = np.asarray(img).astype(float)
    plate = None
    if plate_path:
        plate = np.asarray(Image.open(plate_path).convert("RGB").resize((1080, 1350))).astype(float)
    sub = None
    if subject_path:
        s = Image.open(subject_path).convert("RGBA").resize((1080, 1350))
        sub = np.asarray(s)[..., 3] > 128
    results = []
    for b in boxes:
        x, y, w, h = (int(round(b[k])) for k in ("x", "y", "w", "h"))
        x0, y0, x1, y1 = max(0, x), max(0, y), min(1080, x + w), min(1350, y + h)
        tc = hex_rgb(b.get("color", "#FFFFFF"))
        if plate is not None:
            crop = plate[y0:y1, x0:x1]
            glyph = np.zeros(crop.shape[:2], dtype=bool)
        else:
            crop = arr[y0:y1, x0:x1]
            # mask out glyph pixels (close to the text colour)
            dist = np.linalg.norm(crop - tc, axis=-1)
            glyph = dist < 140  # glyph core + anti-aliased edges
            try:
                from scipy import ndimage
                glyph = ndimage.binary_dilation(glyph, iterations=3)
            except ImportError:
                pass
        bg = crop[~glyph]
        if len(bg) < 50:
            bg = crop.reshape(-1, 3)
        lum = luminance(bg)
        t_l = float(luminance(tc[None, :])[0])
        worst = float(np.percentile(contrast(lum, t_l), 5))
        clutter = float(np.std(lum))
        # edge density of the background (objects behind text: trees, poles, horizon lines)
        # perceptual grey, blurred so film grain and dither do not count as objects
        grey = crop.mean(axis=-1) / 255.0
        grey[glyph] = np.median(grey[~glyph]) if (~glyph).any() else grey.mean()  # erase glyphs first
        try:
            from scipy import ndimage
            grey = ndimage.gaussian_filter(grey, 2.5)
        except ImportError:
            pass
        gy, gx = np.gradient(grey)
        grad = np.hypot(gx, gy)
        grad[glyph] = 0
        edges = float((grad > 0.02).sum() / max(1, (~glyph).sum()))
        overlap = float(sub[y0:y1, x0:x1].mean()) if sub is not None else None
        need = 3.0 if b.get("large") else 4.5
        ok = worst >= need and clutter < 0.12 and edges < EDGE_MAX and not overlap
        results.append({"name": b["name"], "contrast_worst": round(worst, 2), "need": need,
                        "clutter": round(clutter, 3), "edges": round(edges, 3),
                        "subject_overlap": None if overlap is None else round(overlap, 3),
                        "ok": bool(ok)})
    if out_path:
        d = ImageDraw.Draw(img)
        for b, r in zip(boxes, results):
            d.rectangle([b["x"], b["y"], b["x"] + b["w"], b["y"] + b["h"]], outline=(0, 255, 0) if r["ok"] else (255, 0, 0), width=3)
        img.save(out_path)
    return results


if __name__ == "__main__":
    args = sys.argv[1:]
    subject = args[args.index("--subject") + 1] if "--subject" in args else None
    out = args[args.index("--out") + 1] if "--out" in args else None
    plate = args[args.index("--plate") + 1] if "--plate" in args else None
    res = check(args[0], json.load(open(args[1], encoding="utf-8")), subject, out, plate)
    for r in res:
        print(("OK  " if r["ok"] else "FAIL"), r)


def _selftest():
    # white text on dark: passes; white text on white: fails
    dark = np.zeros((1350, 1080, 3), dtype=np.uint8) + 40
    Image.fromarray(dark).save("_t.png")
    r = check("_t.png", [{"name": "a", "x": 10, "y": 10, "w": 200, "h": 50, "color": "#FFFFFF"}])
    assert r[0]["ok"], r
    light = np.zeros((1350, 1080, 3), dtype=np.uint8) + 245
    Image.fromarray(light).save("_t.png")
    r = check("_t.png", [{"name": "b", "x": 10, "y": 10, "w": 200, "h": 50, "color": "#FFFFFF"}])
    assert not r[0]["ok"], r
    print("selftest ok")
