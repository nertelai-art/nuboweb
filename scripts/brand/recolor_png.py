"""Recolor near-white pixels of an RGBA PNG (8-bit, non-interlaced). Pure stdlib.

usage: python -I recolor_png.py in.png out.png RRGGBB
"""
import struct
import sys
import zlib


def chunks(data):
    pos = 8
    while pos < len(data):
        (length,) = struct.unpack(">I", data[pos : pos + 4])
        kind = data[pos + 4 : pos + 8]
        body = data[pos + 8 : pos + 8 + length]
        yield kind, body
        pos += 12 + length


def paeth(a, b, c):
    p = a + b - c
    pa, pb, pc = abs(p - a), abs(p - b), abs(p - c)
    if pa <= pb and pa <= pc:
        return a
    return b if pb <= pc else c


def main(src, dst, hexcolor):
    data = open(src, "rb").read()
    idat = b""
    for kind, body in chunks(data):
        if kind == b"IHDR":
            w, h, depth, ctype, _, _, interlace = struct.unpack(">IIBBBBB", body)
            assert depth == 8 and ctype == 6 and interlace == 0, "only RGBA8"
        elif kind == b"IDAT":
            idat += body
    raw = zlib.decompress(idat)
    bpp, stride = 4, w * 4
    out = bytearray()
    prev = bytearray(stride)
    pos = 0
    for _ in range(h):
        f = raw[pos]
        line = bytearray(raw[pos + 1 : pos + 1 + stride])
        pos += 1 + stride
        for i in range(stride):
            a = line[i - bpp] if i >= bpp else 0
            b = prev[i]
            c = prev[i - bpp] if i >= bpp else 0
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
    r0, g0, b0 = (int(hexcolor[i : i + 2], 16) for i in (0, 2, 4))
    for i in range(0, len(out), 4):
        r, g, b = out[i], out[i + 1], out[i + 2]
        if r > 170 and g > 170 and b > 170:
            out[i], out[i + 1], out[i + 2] = r0, g0, b0
    filtered = b"".join(b"\x00" + bytes(out[y * stride : (y + 1) * stride]) for y in range(h))

    def chunk(kind, body):
        return struct.pack(">I", len(body)) + kind + body + struct.pack(">I", zlib.crc32(kind + body))

    png = b"\x89PNG\r\n\x1a\n"
    png += chunk(b"IHDR", struct.pack(">IIBBBBB", w, h, 8, 6, 0, 0, 0))
    png += chunk(b"IDAT", zlib.compress(filtered, 9))
    png += chunk(b"IEND", b"")
    open(dst, "wb").write(png)


if __name__ == "__main__":
    main(*sys.argv[1:])
