"""Avatar quadrat (512 px) per a Vercel: la N del logo, centrada sobre blanc, amb marge per al retall rodó.

usage: python -I avatar.py public/brand/nubo-n.png out.png
"""
import sys

sys.path.insert(0, __file__.rsplit("\\", 1)[0].rsplit("/", 1)[0])
from n_measure import decode, encode  # noqa: E402

SIZE, BOX = 512, 300  # la N cap dins d'un quadrat de 300 px: el cercle inscrit no la talla


def main(src, dst):
    w, h, px = decode(src)
    scale = BOX / max(w, h)
    nw, nh = round(w * scale), round(h * scale)
    out = bytearray([255, 255, 255, 255] * SIZE * SIZE)
    ox, oy = (SIZE - nw) // 2, (SIZE - nh) // 2
    for y in range(nh):
        y0, y1 = int(y / scale), max(int(y / scale) + 1, int((y + 1) / scale))
        for x in range(nw):
            x0, x1 = int(x / scale), max(int(x / scale) + 1, int((x + 1) / scale))
            r = g = b = a = n = 0
            for sy in range(y0, min(y1, h)):
                for sx in range(x0, min(x1, w)):
                    i = (sy * w + sx) * 4
                    al = px[i + 3]
                    r += px[i] * al
                    g += px[i + 1] * al
                    b += px[i + 2] * al
                    a += al
                    n += 1
            if not a:
                continue
            alpha = a / (255 * n)
            j = ((oy + y) * SIZE + ox + x) * 4
            for k, c in enumerate((r / a, g / a, b / a)):
                out[j + k] = round(c * alpha + 255 * (1 - alpha))
    encode(dst, SIZE, SIZE, out)


if __name__ == "__main__":
    main(*sys.argv[1:])
