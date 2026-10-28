import json, sys

d = json.load(open(sys.argv[1]))

def rdp(pts, eps):
    if len(pts) < 3:
        return pts
    (x1, y1), (x2, y2) = pts[0], pts[-1]
    dx, dy = x2 - x1, y2 - y1
    norm = (dx * dx + dy * dy) ** 0.5 or 1
    idx, dmax = 0, 0
    for i in range(1, len(pts) - 1):
        x0, y0 = pts[i]
        dist = abs(dy * x0 - dx * y0 + x2 * y1 - y2 * x1) / norm
        if dist > dmax:
            idx, dmax = i, dist
    if dmax > eps:
        return rdp(pts[: idx + 1], eps)[:-1] + rdp(pts[idx:], eps)
    return [pts[0], pts[-1]]

out = {}
for name, rows in d["rows"].items():
    rows = sorted(rows)
    left = [(lo, y) for y, lo, hi in rows]
    right = [(hi, y) for y, lo, hi in rows][::-1]
    # Vores de dalt i de baix: la fila extrema ocupa el seu píxel sencer.
    top, bottom = rows[0][0], rows[-1][0] + 1
    left[0] = (left[0][0], top)
    left[-1] = (left[-1][0], bottom)
    right[0] = (right[0][0], bottom)
    right[-1] = (right[-1][0], top)
    poly = rdp(left, 1.6) + rdp(right, 1.6)
    out[name] = poly
    print(name, len(poly), file=sys.stderr)

lines = ["// Generat per scripts/brand/gen_shapes.py a partir del PNG gran del logo:", "// la zona visible de cada cinta, fila a fila, simplificada a 1,6 px. No editar a mà.", "export const N_POLYGONS = {"]
for name, poly in out.items():
    flat = ", ".join(f"{x}, {y}" for x, y in poly)
    lines.append(f"  {name}: [{flat}],")
lines.append("} as const;")
lines.append(f"export const N_SIZE = {{ width: {d['width']}, height: {d['height']} }} as const;")
open(sys.argv[2], "w", encoding="utf-8").write("\n".join(lines) + "\n")
