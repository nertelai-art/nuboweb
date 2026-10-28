"""Crop the N from the Nubo Telecom logo and measure each ribbon's visible extent.

usage: python -I n_measure.py logo.png out_n.png out.json
"""
import json
import struct
import sys
import zlib

sys.path.insert(0, __file__.rsplit("\\", 1)[0].rsplit("/", 1)[0])
from recolor_png import chunks, paeth  # noqa: E402


def decode(path):
    data = open(path, "rb").read()
    idat = b""
    for kind, body in chunks(data):
        if kind == b"IHDR":
            w, h, depth, ctype, _, _, il = struct.unpack(">IIBBBBB", body)
            assert depth == 8 and ctype == 6 and il == 0
        elif kind == b"IDAT":
            idat += body
    raw = zlib.decompress(idat)
    stride = w * 4
    out = bytearray()
    prev = bytearray(stride)
    pos = 0
    for _ in range(h):
        f = raw[pos]
        line = bytearray(raw[pos + 1 : pos + 1 + stride])
        pos += 1 + stride
        for i in range(stride):
            a = line[i - 4] if i >= 4 else 0
            b = prev[i]
            c = prev[i - 4] if i >= 4 else 0
            if f == 1:
                line[i] = (line[i] + a) & 255
            elif f == 2:
                line[i] = (line[i] + b) & 255
            elif f == 3:
                line[i] = (line[i] + ((a + b) >> 1)) & 255
            elif f == 4:
                line[i] = (line[i] + paeth(a, b, c)) & 255
        out += line
        prev = line
    return w, h, out


def encode(path, w, h, px):
    stride = w * 4
    filtered = b"".join(b"\x00" + bytes(px[y * stride : (y + 1) * stride]) for y in range(h))

    def chunk(kind, body):
        return struct.pack(">I", len(body)) + kind + body + struct.pack(">I", zlib.crc32(kind + body))

    png = b"\x89PNG\r\n\x1a\n" + chunk(b"IHDR", struct.pack(">IIBBBBB", w, h, 8, 6, 0, 0, 0))
    png += chunk(b"IDAT", zlib.compress(filtered, 9)) + chunk(b"IEND", b"")
    open(path, "wb").write(png)


def classify(r, g, b, a):
    if a < 128:
        return None
    if b > g and b > r:
        return "blue"
    if r > 100 and g > 150 and b < 140:
        return "lime"
    if g > r and b > r:
        return "teal"
    return None


def main(src, out_png, out_json):
    w, h, px = decode(src)
    # La N: les columnes amb color fins al primer forat ample abans del text.
    n_right = 0
    for x in range(w):
        col = any(classify(*px[(y * w + x) * 4 : (y * w + x) * 4 + 4]) for y in range(0, h, 3))
        if col:
            n_right = x
        elif n_right and x - n_right > 40:
            break
    nw = n_right + 1
    crop = bytearray()
    for y in range(h):
        crop += px[(y * w) * 4 : (y * w + nw) * 4]
    encode(out_png, nw, h, crop)

    rows = {"blue": [], "teal": [], "lime": []}
    for y in list(range(0, h, 4)) + [h - 1]:
        spans = {}
        for x in range(nw):
            c = classify(*crop[(y * nw + x) * 4 : (y * nw + x) * 4 + 4])
            if c:
                lo, hi = spans.get(c, (x, x))
                spans[c] = (min(lo, x), max(hi, x + 1))
        for c, (lo, hi) in spans.items():
            rows[c].append([y, lo, hi])
    json.dump({"width": nw, "height": h, "rows": rows}, open(out_json, "w"))
    print(nw, h, {k: len(v) for k, v in rows.items()})


if __name__ == "__main__":
    main(*sys.argv[1:])
