"""Generate Etsy listing preview images for Concrete Pro Toolkit (design-mockup style).

Run: python make_listing_images.py
Output: dist/listing/01_cover.png ... 05_rebar_ref.png  (2000x2000 each)

Note: this writes to 01_cover.png — if you want to keep the screenshot-pipeline
cover, rename it to 01_cover.png_design first or run this once and rename.
"""

from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

OUT = Path(__file__).parent / "dist" / "listing"
OUT.mkdir(parents=True, exist_ok=True)

W = H = 2000

BG = (14, 14, 12)
BG_2 = (22, 22, 19)
BG_3 = (31, 31, 28)
LINE = (42, 42, 38)
INK = (244, 241, 234)
INK_2 = (184, 179, 167)
INK_3 = (118, 114, 106)
HI_VIS = (255, 212, 0)

FN_BLACK = "C:/Windows/Fonts/ariblk.ttf"
FN_BOLD = "C:/Windows/Fonts/arialbd.ttf"
FN_REG = "C:/Windows/Fonts/arial.ttf"
FN_MONO = "C:/Windows/Fonts/consola.ttf"
FN_MONO_BOLD = "C:/Windows/Fonts/consolab.ttf"


def f(path, size):
    return ImageFont.truetype(path, size)


def grid_bg(img):
    d = ImageDraw.Draw(img)
    step = 60
    for x in range(0, W, step):
        d.line([(x, 0), (x, H)], fill=(20, 20, 18), width=1)
    for y in range(0, H, step):
        d.line([(0, y), (W, y)], fill=(20, 20, 18), width=1)


def projectcalc_header(d, x=100, y=100):
    s = 30
    d.polygon(
        [(x, y + s // 2), (x + s // 2, y), (x + s, y + s // 2), (x + s // 2, y + s)],
        fill=HI_VIS,
    )
    d.text((x + s + 22, y - 8), "PROJECTCALC", fill=INK, font=f(FN_BLACK, 38))


def hi_vis_bar(d, x, y, w, h):
    d.rectangle([x, y, x + w, y + h], fill=HI_VIS)


def panel(d, x, y, w, h, fill=BG_2, border=LINE):
    d.rectangle([x, y, x + w, y + h], fill=fill, outline=border, width=2)


def text_centered(d, text, font, fill, cx, y):
    bbox = d.textbbox((0, 0), text, font=font)
    w = bbox[2] - bbox[0]
    d.text((cx - w // 2, y), text, fill=fill, font=font)


def text_right(d, text, font, fill, x_right, y):
    bbox = d.textbbox((0, 0), text, font=font)
    w = bbox[2] - bbox[0]
    d.text((x_right - w, y), text, fill=fill, font=font)


def footer(d):
    y = 1880
    d.line([(100, y), (W - 100, y)], fill=LINE, width=2)
    d.text((100, y + 24), "PROJECTCALC.APP", fill=HI_VIS, font=f(FN_BLACK, 26))
    text_right(d, "MATH FOR ANY PROJECT", f(FN_MONO_BOLD, 22), INK_3, W - 100, y + 28)


# ─────────────────────────────────────────────────────────────────────
# IMAGE 1 — COVER
# ─────────────────────────────────────────────────────────────────────
def cover():
    img = Image.new("RGB", (W, H), BG)
    grid_bg(img)
    d = ImageDraw.Draw(img)

    d.rectangle([W - 80, 0, W, 320], fill=HI_VIS)
    projectcalc_header(d)
    d.text((100, 165), "PRO TOOLKIT  ·  v1", fill=HI_VIS, font=f(FN_MONO_BOLD, 28))

    d.text((100, 380), "CONCRETE", fill=INK, font=f(FN_BLACK, 200))
    d.text((100, 590), "PRO", fill=INK, font=f(FN_BLACK, 240))
    d.text((100, 810), "TOOLKIT.", fill=HI_VIS, font=f(FN_BLACK, 240))

    d.text(
        (100, 1080),
        "Yardage  ·  rebar grid  ·  forms  ·  print-ready customer quote",
        fill=INK_2,
        font=f(FN_REG, 38),
    )

    panel(d, 100, 1180, 360, 180, fill=HI_VIS, border=HI_VIS)
    text_centered(d, "$39", f(FN_BLACK, 110), BG, 100 + 180, 1195)
    text_centered(d, "INSTANT DOWNLOAD", f(FN_MONO_BOLD, 22), BG, 100 + 180, 1320)

    badges = ["EXCEL", "GOOGLE SHEETS", "LIBREOFFICE", "NUMBERS"]
    bx = 520; by = 1220
    for b in badges:
        bbox = d.textbbox((0, 0), b, font=f(FN_MONO_BOLD, 24))
        bw = bbox[2] - bbox[0]
        panel(d, bx, by, bw + 40, 60, fill=BG_2, border=LINE)
        d.text((bx + 20, by + 16), b, fill=INK, font=f(FN_MONO_BOLD, 24))
        bx += bw + 60
        if bx > W - 200:
            bx = 520; by += 80

    d.text((100, 1450), "7 SHEETS", fill=HI_VIS, font=f(FN_BLACK, 36))
    sheets = "README · INPUTS · SLAB · FOOTINGS-WALLS · REBAR · PRICING · QUOTE"
    d.text((100, 1510), sheets, fill=INK, font=f(FN_MONO_BOLD, 26))

    bullets = [
        "→  Type slab L × W × T → auto yardage with waste, base, mesh, curing",
        "→  Rebar grid count both ways with ties, chairs, bolsters auto-counted",
        "→  Print-ready quote with editable concrete pricing by PSI + pump truck",
    ]
    by = 1610
    for b in bullets:
        d.text((100, by), b, fill=INK_2, font=f(FN_REG, 30))
        by += 50

    footer(d)
    img.save(OUT / "01_cover.png", "PNG", optimize=True)


# ─────────────────────────────────────────────────────────────────────
# IMAGE 2 — WHAT'S INSIDE
# ─────────────────────────────────────────────────────────────────────
def whats_inside():
    img = Image.new("RGB", (W, H), BG)
    grid_bg(img); d = ImageDraw.Draw(img)
    projectcalc_header(d)

    hi_vis_bar(d, 100, 230, 200, 12)
    d.text((100, 270), "WHAT'S", fill=INK, font=f(FN_BLACK, 140))
    d.text((100, 410), "INSIDE.", fill=HI_VIS, font=f(FN_BLACK, 140))

    sheets = [
        ("README",          "Quick-start guide and what each sheet does"),
        ("INPUTS",          "Yellow cells: slab, footing, wall, rebar, waste"),
        ("SLAB",            "Yardage, base, vapor barrier, mesh, curing, edge form"),
        ("FOOTINGS-WALLS",  "Continuous footings + optional stem walls + form lumber"),
        ("REBAR",           "Slab grid + footing + wall bars, ties, chairs, bolsters"),
        ("PRICING",         "Editable concrete by PSI, rebar, forms, pump truck, labor"),
        ("QUOTE",           "Print-ready quote: materials, labor, margin, tax, total"),
    ]
    y = 620
    for i, (name, desc) in enumerate(sheets):
        panel(d, 100, y, 80, 80, fill=HI_VIS, border=HI_VIS)
        text_centered(d, str(i + 1), f(FN_BLACK, 50), BG, 140, y + 12)
        d.text((210, y + 4), name, fill=INK, font=f(FN_BLACK, 44))
        d.text((210, y + 56), desc, fill=INK_2, font=f(FN_REG, 26))
        y += 150
        if y > 1750:
            break

    footer(d)
    img.save(OUT / "02_whats_inside.png", "PNG", optimize=True)


# ─────────────────────────────────────────────────────────────────────
# IMAGE 3 — SLAB TAKEOFF MOCKUP
# ─────────────────────────────────────────────────────────────────────
def slab_mockup():
    img = Image.new("RGB", (W, H), BG)
    grid_bg(img); d = ImageDraw.Draw(img)

    projectcalc_header(d)
    d.text((100, 230), "PREVIEW  ·  SLAB SHEET", fill=HI_VIS, font=f(FN_MONO_BOLD, 28))
    d.text((100, 280), "Type slab L × W × T,", fill=INK, font=f(FN_BLACK, 80))
    d.text((100, 374), "every line auto-counts.", fill=HI_VIS, font=f(FN_BLACK, 80))

    sx, sy, sw = 100, 540, W - 200

    d.rectangle([sx, sy, sx + sw, sy + 70], fill=HI_VIS)
    fnt = f(FN_BLACK, 32)
    d.text((sx + 24, sy + 18), "PROJECTCALC", fill=BG, font=fnt)
    pc_bbox = d.textbbox((sx + 24, sy + 18), "PROJECTCALC", font=fnt)
    ds = 18
    dx = pc_bbox[2] + 28
    dy = sy + 28
    d.polygon([(dx, dy + ds // 2), (dx + ds // 2, dy), (dx + ds, dy + ds // 2), (dx + ds // 2, dy + ds)], fill=BG)
    d.text((dx + ds + 28, sy + 18), "SLAB TAKEOFF", fill=BG, font=fnt)
    d.rectangle([sx, sy + 70, sx + sw, sy + 110], fill=BG)
    d.text((sx + 24, sy + 80), "Pulled from INPUTS — bring this list to the supply house", fill=HI_VIS, font=f(FN_MONO, 22))

    panel_white = (246, 246, 242)
    panel_lighter = (250, 250, 247)
    text_dark = (14, 14, 12)

    cols = [("ITEM", 60), ("QTY", 700), ("UNIT", 880), ("NOTE", 1120)]
    rows = [
        ("Slab footprint",                   "1,200",  "sq ft",     "30 × 40"),
        ("Slab volume (raw)",                "14.81",  "cu yd",     "1,200 × 4\" / 12 / 27"),
        ("Slab volume + 8% waste",           "16.00",  "cu yd",     "rounded to 1/4 yd"),
        ("Crushed stone base",               "17",     "cu yd",     "4\" × 1,200 sf, +10%"),
        ("Vapor barrier rolls",              "6",      "rolls",     "6-mil 200 sf each"),
        ("Curing compound",                  "6",      "gallons",   "≈200 sf per gallon"),
        ("Rebar #4 (slab grid 18\" OC)",     "98",     "20' sticks", "62 + 81 bars + 5% waste"),
        ("Rebar chairs (3\" plastic)",       "75",     "ea",        "1 per 16 sf grid"),
        ("Slab edge form (2x10)",            "12",     "12' pieces","Perimeter, 4–8\" deep"),
        ("Stakes (2x4, 4 ft OC)",            "35",     "stakes",    "1 per 4 ft perimeter"),
        ("Form release oil",                 "5",      "gallons",   "100 sf form face per gal"),
        ("Sawcut control joints",            "100",    "lin ft",    "12×12 ft grid"),
    ]

    rh = 70
    ry = sy + 130

    d.rectangle([sx, ry, sx + sw, ry + rh], fill=BG_3, outline=LINE, width=2)
    for label, x_off in cols:
        d.text((sx + x_off, ry + 22), label, fill=HI_VIS, font=f(FN_MONO_BOLD, 24))
    ry += rh

    for i, (item, qty, unit, note) in enumerate(rows):
        bg = panel_lighter if i % 2 == 0 else panel_white
        d.rectangle([sx, ry, sx + sw, ry + rh], fill=bg, outline=(220, 220, 215), width=1)
        d.text((sx + 60, ry + 20), item, fill=text_dark, font=f(FN_REG, 26))
        text_right(d, qty, f(FN_MONO_BOLD, 28), text_dark, sx + 860, ry + 18)
        d.text((sx + 880, ry + 22), unit, fill=text_dark, font=f(FN_REG, 24))
        d.text((sx + 1120, ry + 24), note, fill=(100, 100, 95), font=f(FN_REG, 22))
        ry += rh

    footer(d)
    img.save(OUT / "03_slab.png", "PNG", optimize=True)


# ─────────────────────────────────────────────────────────────────────
# IMAGE 4 — QUOTE MOCKUP
# ─────────────────────────────────────────────────────────────────────
def quote_mockup():
    img = Image.new("RGB", (W, H), BG)
    grid_bg(img); d = ImageDraw.Draw(img)

    projectcalc_header(d)
    d.text((100, 230), "PREVIEW  ·  QUOTE SHEET", fill=HI_VIS, font=f(FN_MONO_BOLD, 28))
    d.text((100, 280), "Print-ready", fill=INK, font=f(FN_BLACK, 96))
    d.text((100, 390), "concrete quote.", fill=HI_VIS, font=f(FN_BLACK, 96))

    sx, sy, sw = 100, 560, W - 200
    panel_white = (250, 250, 247)
    text_dark = (14, 14, 12)

    d.rectangle([sx, sy, sx + sw, sy + 1240], fill=panel_white, outline=LINE, width=2)

    d.rectangle([sx, sy, sx + sw, sy + 90], fill=HI_VIS)
    fnt = f(FN_BLACK, 32)
    d.text((sx + 30, sy + 26), "PROJECTCALC", fill=BG, font=fnt)
    pc_bbox = d.textbbox((sx + 30, sy + 26), "PROJECTCALC", font=fnt)
    ds = 18
    dx = pc_bbox[2] + 28
    dy = sy + 36
    d.polygon([(dx, dy + ds // 2), (dx + ds // 2, dy), (dx + ds, dy + ds // 2), (dx + ds // 2, dy + ds)], fill=BG)
    d.text((dx + ds + 28, sy + 26), "CONCRETE QUOTE", fill=BG, font=fnt)

    d.text((sx + 30, sy + 120), "PREPARED FOR", fill=(120, 120, 115), font=f(FN_MONO_BOLD, 18))
    d.text((sx + 30, sy + 150), "Mr. & Mrs. Chen", fill=text_dark, font=f(FN_BLACK, 32))
    d.text((sx + 30, sy + 196), "412 Maple Ave  ·  30 × 40 garage slab + 80 lf footing", fill=text_dark, font=f(FN_REG, 22))

    text_right(d, "QUOTE #2026-033", f(FN_MONO_BOLD, 22), text_dark, sx + sw - 30, sy + 130)
    text_right(d, "Apr 28, 2026", f(FN_MONO, 20), (120, 120, 115), sx + sw - 30, sy + 160)
    text_right(d, "Valid 30 days", f(FN_MONO, 20), (120, 120, 115), sx + sw - 30, sy + 188)

    ry = sy + 280
    d.line([(sx + 30, ry), (sx + sw - 30, ry)], fill=text_dark, width=2)
    ry += 18
    d.text((sx + 50, ry), "LINE ITEM", fill=text_dark, font=f(FN_MONO_BOLD, 22))
    text_right(d, "QTY", f(FN_MONO_BOLD, 22), text_dark, sx + 1120, ry)
    text_right(d, "UNIT $", f(FN_MONO_BOLD, 22), text_dark, sx + 1380, ry)
    text_right(d, "TOTAL", f(FN_MONO_BOLD, 22), text_dark, sx + sw - 50, ry)
    ry += 38
    d.line([(sx + 30, ry), (sx + sw - 30, ry)], fill=(200, 200, 195), width=1)
    ry += 18

    items = [
        ("Concrete delivered, 4000 psi",  "20 cu yd", "$215.00", "$4,300.00"),
        ("Crushed stone base",            "17 cu yd", "$42.00",  "$714.00"),
        ("Vapor barrier (6-mil)",         "6 rolls",  "$28.00",  "$168.00"),
        ("Curing compound",               "2 pails",  "$95.00",  "$190.00"),
        ("Rebar #4 slab + footing",       "107 ea",   "$8.50",   "$909.50"),
        ("Tie wire rolls",                "6 rolls",  "$12.00",  "$72.00"),
        ("Rebar chairs",                  "75 ea",    "$0.45",   "$33.75"),
        ("Continuous bolster",            "20 ea",    "$8.50",   "$170.00"),
        ("2x10 SPF (slab edge form)",     "12 ea",    "$22.00",  "$264.00"),
        ("2x4 SPF stakes",                "75 ea",    "$5.20",   "$390.00"),
        ("Slab labor (form/place/finish)","1,200 sf", "$4.50",   "$5,400.00"),
        ("Footing labor",                 "80 lf",    "$12.00",  "$960.00"),
        ("Excavation / haul-off",         "1 ea",     "$650.00", "$650.00"),
        ("Permit + inspection",           "1 ea",     "$225.00", "$225.00"),
    ]

    for item, qty, up, tot in items:
        d.text((sx + 50, ry), item, fill=text_dark, font=f(FN_REG, 24))
        text_right(d, qty, f(FN_MONO, 22), text_dark, sx + 1120, ry + 2)
        text_right(d, up, f(FN_MONO, 22), text_dark, sx + 1380, ry + 2)
        text_right(d, tot, f(FN_MONO_BOLD, 24), text_dark, sx + sw - 50, ry)
        ry += 50

    ry += 16
    d.line([(sx + 30, ry), (sx + sw - 30, ry)], fill=text_dark, width=2)
    ry += 26

    totals = [
        ("Materials + labor", "$14,446.25"),
        ("Margin (20%)",      "$2,889.25"),
        ("Tax (7%)",          "$1,213.49"),
    ]
    for lbl, v in totals:
        d.text((sx + 1000, ry), lbl, fill=text_dark, font=f(FN_REG, 26))
        text_right(d, v, f(FN_MONO_BOLD, 26), text_dark, sx + sw - 50, ry)
        ry += 44

    ry += 10
    d.rectangle([sx + 30, ry, sx + sw - 30, ry + 80], fill=HI_VIS)
    d.text((sx + 50, ry + 22), "TOTAL DUE", fill=BG, font=f(FN_BLACK, 32))
    text_right(d, "$18,548.99", f(FN_BLACK, 38), BG, sx + sw - 50, ry + 18)

    footer(d)
    img.save(OUT / "04_quote.png", "PNG", optimize=True)


# ─────────────────────────────────────────────────────────────────────
# IMAGE 5 — REBAR REFERENCE
# ─────────────────────────────────────────────────────────────────────
def rebar_ref():
    img = Image.new("RGB", (W, H), BG)
    grid_bg(img); d = ImageDraw.Draw(img)

    projectcalc_header(d)
    d.text((100, 230), "PREVIEW  ·  REBAR + YARDAGE", fill=HI_VIS, font=f(FN_MONO_BOLD, 28))
    d.text((100, 280), "Code-aware", fill=INK, font=f(FN_BLACK, 96))
    d.text((100, 390), "by default.", fill=HI_VIS, font=f(FN_BLACK, 96))

    # ── REBAR table ──
    sx, sy, sw, sh = 100, 560, W - 200, 540
    d.rectangle([sx, sy, sx + sw, sy + 70], fill=HI_VIS)
    d.text((sx + 24, sy + 18), "REBAR  ·  DIAMETER + LAP SPLICE (40d) + WEIGHT", fill=BG, font=f(FN_BLACK, 28))
    panel(d, sx, sy + 70, sw, sh - 70, fill=BG_2, border=LINE)

    th_y = sy + 110
    d.text((sx + 60, th_y),  "BAR",            fill=HI_VIS, font=f(FN_MONO_BOLD, 22))
    d.text((sx + 360, th_y), "DIAMETER",       fill=HI_VIS, font=f(FN_MONO_BOLD, 22))
    d.text((sx + 720, th_y), "LAP SPLICE 40d", fill=HI_VIS, font=f(FN_MONO_BOLD, 22))
    d.text((sx + 1180, th_y),"WEIGHT (lb/ft)", fill=HI_VIS, font=f(FN_MONO_BOLD, 22))
    d.text((sx + 1500, th_y),"TYPICAL USE",    fill=HI_VIS, font=f(FN_MONO_BOLD, 22))
    th_y += 44
    d.line([(sx + 30, th_y), (sx + sw - 30, th_y)], fill=LINE, width=2)
    th_y += 14

    bars = [
        ("#3", "3/8 in",  "15 in", "0.376", "Sidewalks · light slabs"),
        ("#4", "1/2 in",  "20 in", "0.668", "Slabs · footings · walls"),
        ("#5", "5/8 in",  "25 in", "1.043", "Heavy slabs · structural footings"),
        ("#6", "3/4 in",  "30 in", "1.502", "Foundation walls · piers"),
    ]
    rh2 = 70
    for i, (size, dia, lap, wt, note) in enumerate(bars):
        ry = th_y + i * rh2
        if i % 2 == 0:
            d.rectangle([sx + 30, ry - 4, sx + sw - 30, ry + rh2 - 4], fill=BG_3)
        d.text((sx + 60, ry + 14),  size, fill=HI_VIS, font=f(FN_MONO_BOLD, 32))
        d.text((sx + 360, ry + 16), dia,  fill=INK,    font=f(FN_MONO, 28))
        d.text((sx + 720, ry + 16), lap,  fill=INK,    font=f(FN_MONO, 28))
        d.text((sx + 1180, ry + 16),wt,   fill=INK,    font=f(FN_MONO, 28))
        d.text((sx + 1500, ry + 18),note, fill=INK_2,  font=f(FN_REG, 22))

    # ── YARDAGE FORMULA panel ──
    px, py, pw, ph = 100, 1140, W - 200, 670
    d.rectangle([px, py, px + pw, py + 70], fill=HI_VIS)
    d.text((px + 24, py + 18), "YARDAGE  ·  CUBIC YARDS = (L × W × T_in / 12) / 27", fill=BG, font=f(FN_BLACK, 28))
    panel(d, px, py + 70, pw, ph - 70, fill=BG_2, border=LINE)

    # 3 example slabs as metric tiles
    metrics = [
        ("10 × 10 × 4 in",   "1.23",  "+8% waste = 1.50 yd"),
        ("30 × 40 × 4 in",   "14.81", "+8% waste = 16.00 yd"),
        ("40 × 60 × 6 in",   "44.44", "+8% waste = 48.00 yd"),
    ]
    col_w = pw // 3
    for i, (label, value, sub) in enumerate(metrics):
        cx = px + col_w * i + col_w // 2
        d.text((px + col_w * i + 30, py + 110), label, fill=HI_VIS, font=f(FN_MONO_BOLD, 22))
        text_centered(d, value, f(FN_BLACK, 64), INK, cx, py + 160)
        text_centered(d, "cu yd raw", f(FN_MONO, 18), INK_3, py + 240, py + 240)
        text_centered(d, "cu yd raw", f(FN_MONO, 18), INK_3, cx, py + 240)
        text_centered(d, sub, f(FN_MONO, 20), HI_VIS, cx, py + 280)

    d.line([(px + 30, py + 360), (px + pw - 30, py + 360)], fill=LINE, width=2)
    d.text((px + 30, py + 380), "ORDERING TIP", fill=HI_VIS, font=f(FN_MONO_BOLD, 22))
    d.text((px + 30, py + 420),
           "Order 1/2 yd over the calc — supplier usually allows return of unused.",
           fill=INK, font=f(FN_REG, 24))
    d.text((px + 30, py + 460),
           "Pump truck recommended for any pour > 10 yd or anywhere a truck",
           fill=INK_3, font=f(FN_REG, 22))
    d.text((px + 30, py + 488),
           "can't reach the form. Toolkit prices both per-day + per-yd line pump.",
           fill=INK_3, font=f(FN_REG, 22))

    footer(d)
    img.save(OUT / "05_rebar_ref.png", "PNG", optimize=True)


def main():
    print("Generating Concrete listing previews (design-mockup style)...")
    cover();        print("  01_cover.png")
    whats_inside(); print("  02_whats_inside.png")
    slab_mockup();  print("  03_slab.png")
    quote_mockup(); print("  04_quote.png")
    rebar_ref();    print("  05_rebar_ref.png")
    print(f"Done. Output: {OUT}")


if __name__ == "__main__":
    main()
