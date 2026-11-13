"""Build a subject cut-out from several SAM masks (Magnific `images_segment`, one box per person).

Usage:
    python merge_masks.py image.png out.png mask1.png mask2.png ... [--erase x0,y0,x1,y1 ...]

Union of the masks -> closing + hole filling -> drop specks < 1500 px -> 1px feather -> alpha on image.
Magnific's SAM returns ONE instance per call; for a group, call it once per person (box) and merge here.
`images_remove_background` keeps the ground for groups on open terrain, so use it only for single subjects.
"""
import sys

import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage


def merge(image_path, out_path, masks, erase=()):
    m = None
    for f in masks:
        x = np.array(Image.open(f).convert("L")) > 127
        m = x if m is None else (m | x)
    for x0, y0, x1, y1 in erase:
        m[y0:y1, x0:x1] = False
    m = ndimage.binary_fill_holes(ndimage.binary_closing(m, iterations=2))
    lab, n = ndimage.label(m)
    sizes = ndimage.sum(m, lab, range(1, n + 1))
    keep = np.isin(lab, [i + 1 for i, s in enumerate(sizes) if s > 1500])
    alpha = Image.fromarray((keep * 255).astype("uint8")).filter(ImageFilter.GaussianBlur(1.0))
    out = Image.open(image_path).convert("RGB")
    out.putalpha(alpha)
    out.save(out_path)
    return out_path


if __name__ == "__main__":
    a = sys.argv[1:]
    erase = []
    if "--erase" in a:
        i = a.index("--erase")
        erase = [tuple(int(v) for v in r.split(",")) for r in a[i + 1:]]
        a = a[:i]
    print(merge(a[0], a[1], a[2:], erase))
