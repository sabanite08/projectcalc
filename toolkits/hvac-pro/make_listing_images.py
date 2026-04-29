"""Generate Etsy listing preview images for HVAC Pro Toolkit.

Run: python make_listing_images.py
Output: dist/listing/01_cover.png ... 05_duct_vent.png  (2000x2000 each)
"""

from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

OUT = Path(__file__).parent / "dist" / "listing"
OUT.mkdir(parents=True, exist_ok=True)

W = H = 2000

# Brand
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

    d.text((100, 380), "HVAC", fill=INK, font=f(FN_BLACK, 240))
    d.text((100, 600), "PRO", fill=INK, font=f(FN_BLACK, 240))
    d.text((100, 820), "TOOLKIT.", fill=HI_VIS, font=f(FN_BLACK, 240))

    d.text(
        (100, 1080),
        "Manual J load  ·  duct CFM  ·  ASHRAE 62.2  ·  print-ready quote",
        fill=INK_2,
        font=f(FN_REG, 38),
    )

    panel(d, 100, 1180, 360, 180, fill=HI_VIS, border=HI_VIS)
    text_centered(d, "$39", f(FN_BLACK, 110), BG, 100 + 180, 1195)
    text_centered(d, "INSTANT DOWNLOAD", f(FN_MONO_BOLD, 22), BG, 100 + 180, 1320)

    badges = ["EXCEL", "GOOGLE SHEETS", "LIBREOFFICE", "NUMBERS"]
    bx = 520
    by = 1220
    for b in badges:
        bbox = d.textbbox((0, 0), b, font=f(FN_MONO_BOLD, 24))
        bw = bbox[2] - bbox[0]
        panel(d, bx, by, bw + 40, 60, fill=BG_2, border=LINE)
        d.text((bx + 20, by + 16), b, fill=INK, font=f(FN_MONO_BOLD, 24))
        bx += bw + 60
        if bx > W - 200:
            bx = 520
            by += 80

    d.text((100, 1450), "7 SHEETS", fill=HI_VIS, font=f(FN_BLACK, 36))
    sheets = "README  ·  INPUTS  ·  LOAD  ·  DUCT  ·  VENTILATION  ·  PRICING  ·  QUOTE"
    d.text((100, 1510), sheets, fill=INK, font=f(FN_MONO_BOLD, 30))

    bullets = [
        "→  Whole-house Manual J HTM — heating + cooling BTU/hr in one click",
        "→  Per-room CFM allocation with round-duct sizing (0.10\" WC table)",
        "→  ASHRAE 62.2 whole-house ventilation + spot exhaust check",
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
    grid_bg(img)
    d = ImageDraw.Draw(img)

    projectcalc_header(d)

    hi_vis_bar(d, 100, 230, 200, 12)
    d.text((100, 270), "WHAT'S", fill=INK, font=f(FN_BLACK, 140))
    d.text((100, 410), "INSIDE.", fill=HI_VIS, font=f(FN_BLACK, 140))

    sheets = [
        ("README", "Quick-start guide and what each sheet does"),
        ("INPUTS", "Yellow cells: house geometry, envelope R/U, climate, system type"),
        ("LOAD", "Manual J HTM — heating + cooling BTU/hr, equipment ton size"),
        ("DUCT", "Total CFM, per-room allocation, round-duct lookup, TESP budget"),
        ("VENTILATION", "ASHRAE 62.2-2022 whole-house Q_total + spot exhaust"),
        ("PRICING", "Editable equipment + labor unit costs — set once per supplier"),
        ("QUOTE", "Print-ready quote: equipment, labor, margin, tax, total due"),
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
# IMAGE 3 — LOAD MOCKUP
# ─────────────────────────────────────────────────────────────────────
def load_mockup():
    img = Image.new("RGB", (W, H), BG)
    grid_bg(img)
    d = ImageDraw.Draw(img)

    projectcalc_header(d)
    d.text((100, 230), "PREVIEW  ·  LOAD SHEET", fill=HI_VIS, font=f(FN_MONO_BOLD, 28))
    d.text((100, 280), "Manual J load,", fill=INK, font=f(FN_BLACK, 96))
    d.text((100, 390), "every component.", fill=HI_VIS, font=f(FN_BLACK, 96))

    sx, sy, sw = 100, 560, W - 200

    d.rectangle([sx, sy, sx + sw, sy + 70], fill=HI_VIS)
    fnt = f(FN_BLACK, 32)
    d.text((sx + 24, sy + 18), "PROJECTCALC", fill=BG, font=fnt)
    pc_bbox = d.textbbox((sx + 24, sy + 18), "PROJECTCALC", font=fnt)
    ds = 18
    dx = pc_bbox[2] + 28
    dy = sy + 28
    d.polygon([(dx, dy + ds // 2), (dx + ds // 2, dy), (dx + ds, dy + ds // 2), (dx + ds // 2, dy + ds)], fill=BG)
    d.text((dx + ds + 28, sy + 18), "MANUAL J LOAD", fill=BG, font=fnt)
    d.rectangle([sx, sy + 70, sx + sw, sy + 110], fill=BG)
    d.text((sx + 24, sy + 80), "Heating + cooling BTU/hr by component, with equipment sizing", fill=HI_VIS, font=f(FN_MONO, 22))

    panel_white = (246, 246, 242)
    panel_lighter = (250, 250, 247)
    text_dark = (14, 14, 12)
    pos = (200, 130, 80)

    cols = [("COMPONENT", 60), ("HEAT (BTU/h)", 700), ("COOL (BTU/h)", 980), ("NOTE", 1260)]
    rows = [
        ("Walls",                "5,440",  "4,720",  "R-19, U=0.053"),
        ("Windows (cond)",       "5,040",  "3,360",  "U=0.30, 280 sq ft"),
        ("Windows (solar)",      "—",      "8,400",  "SHGC=0.30 × 100"),
        ("Doors",                "640",    "480",    "U=0.40, 40 sq ft"),
        ("Ceiling / Roof",       "2,841",  "1,752",  "R-38 attic"),
        ("Infiltration",         "6,804",  "4,536",  "0.35 ACH × Vol"),
        ("Internal: occupants",  "—",      "920",    "230 × 4 occupants"),
        ("Internal: kitchen",    "—",      "1,200",  "Range + appliances"),
    ]

    rh = 70
    ry = sy + 130

    d.rectangle([sx, ry, sx + sw, ry + rh], fill=BG_3, outline=LINE, width=2)
    for label, x_off in cols:
        d.text((sx + x_off, ry + 22), label, fill=HI_VIS, font=f(FN_MONO_BOLD, 24))
    ry += rh

    for i, (item, h, c, note) in enumerate(rows):
        bg = panel_lighter if i % 2 == 0 else panel_white
        d.rectangle([sx, ry, sx + sw, ry + rh], fill=bg, outline=(220, 220, 215), width=1)
        d.text((sx + 60, ry + 20), item, fill=text_dark, font=f(FN_REG, 26))
        text_right(d, h, f(FN_MONO_BOLD, 26), text_dark, sx + 920, ry + 18)
        text_right(d, c, f(FN_MONO_BOLD, 26), text_dark, sx + 1200, ry + 18)
        d.text((sx + 1260, ry + 22), note, fill=(100, 100, 95), font=f(FN_REG, 22))
        ry += rh

    # Totals stripe
    d.rectangle([sx, ry, sx + sw, ry + 90], fill=HI_VIS)
    d.text((sx + 60, ry + 24), "DESIGN TOTAL  →", fill=BG, font=f(FN_BLACK, 32))
    text_right(d, "23,066 BTU/h", f(FN_BLACK, 36), BG, sx + 920, ry + 22)
    text_right(d, "28,290 BTU/h", f(FN_BLACK, 36), BG, sx + 1200, ry + 22)
    d.text((sx + 1260, ry + 30), "= 2.5 ton AC", fill=BG, font=f(FN_MONO_BOLD, 24))

    footer(d)
    img.save(OUT / "03_load.png", "PNG", optimize=True)


# ─────────────────────────────────────────────────────────────────────
# IMAGE 4 — QUOTE MOCKUP
# ─────────────────────────────────────────────────────────────────────
def quote_mockup():
    img = Image.new("RGB", (W, H), BG)
    grid_bg(img)
    d = ImageDraw.Draw(img)

    projectcalc_header(d)
    d.text((100, 230), "PREVIEW  ·  QUOTE SHEET", fill=HI_VIS, font=f(FN_MONO_BOLD, 28))
    d.text((100, 280), "Print-ready", fill=INK, font=f(FN_BLACK, 96))
    d.text((100, 390), "customer quote.", fill=HI_VIS, font=f(FN_BLACK, 96))

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
    d.text((dx + ds + 28, sy + 26), "HVAC QUOTE", fill=BG, font=fnt)

    d.text((sx + 30, sy + 120), "PREPARED FOR", fill=(120, 120, 115), font=f(FN_MONO_BOLD, 18))
    d.text((sx + 30, sy + 150), "Mr. & Mrs. Chen", fill=text_dark, font=f(FN_BLACK, 32))
    d.text((sx + 30, sy + 196), "412 Maple Ave  ·  3-ton heat pump swap, R-410A", fill=text_dark, font=f(FN_REG, 22))

    text_right(d, "QUOTE #2026-021", f(FN_MONO_BOLD, 22), text_dark, sx + sw - 30, sy + 130)
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
        ("Heat pump condenser, 3 ton 15 SEER2", "1 ea", "$2,900.00", "$2,900.00"),
        ("Air handler w/ heat strips", "1 ea", "$1,800.00", "$1,800.00"),
        ("Refrigerant line set, insulated", "30 lin ft", "$12.00", "$360.00"),
        ("Smart thermostat", "1 ea", "$240.00", "$240.00"),
        ("MERV 11 filter cabinet", "1 ea", "$165.00", "$165.00"),
        ("Concrete equipment pad", "1 ea", "$75.00", "$75.00"),
        ("Disconnect + whip", "1 ea", "$85.00", "$85.00"),
        ("Install labor (lead, 16 hr)", "16 hr", "$95.00", "$1,520.00"),
        ("Install labor (helper, 16 hr)", "16 hr", "$55.00", "$880.00"),
        ("Refrigerant charge + commission", "1 ea", "$285.00", "$285.00"),
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
        ("Equipment + labor", "$8,310.00"),
        ("Margin (25%)", "$2,077.50"),
        ("Tax (7%)", "$727.13"),
    ]
    for lbl, v in totals:
        d.text((sx + 1000, ry), lbl, fill=text_dark, font=f(FN_REG, 26))
        text_right(d, v, f(FN_MONO_BOLD, 26), text_dark, sx + sw - 50, ry)
        ry += 44

    ry += 10
    d.rectangle([sx + 30, ry, sx + sw - 30, ry + 80], fill=HI_VIS)
    d.text((sx + 50, ry + 22), "TOTAL DUE", fill=BG, font=f(FN_BLACK, 32))
    text_right(d, "$11,114.63", f(FN_BLACK, 38), BG, sx + sw - 50, ry + 18)

    footer(d)
    img.save(OUT / "04_quote.png", "PNG", optimize=True)


# ─────────────────────────────────────────────────────────────────────
# IMAGE 5 — DUCT + VENTILATION REFERENCE
# ─────────────────────────────────────────────────────────────────────
def duct_vent():
    img = Image.new("RGB", (W, H), BG)
    grid_bg(img)
    d = ImageDraw.Draw(img)

    projectcalc_header(d)
    d.text((100, 230), "PREVIEW  ·  DUCT + VENTILATION", fill=HI_VIS, font=f(FN_MONO_BOLD, 28))
    d.text((100, 280), "Code-aware", fill=INK, font=f(FN_BLACK, 96))
    d.text((100, 390), "by default.", fill=HI_VIS, font=f(FN_BLACK, 96))

    # ── DUCT panel ──
    sx, sy, sw, sh = 100, 560, W - 200, 720
    d.rectangle([sx, sy, sx + sw, sy + 70], fill=HI_VIS)
    d.text((sx + 24, sy + 18), "DUCT  ·  ROUND SIZE BY CFM @ 0.10\" WC / 100 FT", fill=BG, font=f(FN_BLACK, 28))
    panel(d, sx, sy + 70, sw, sh - 70, fill=BG_2, border=LINE)

    duct_rows = [
        ("100 CFM", "6\"",  "8×4",   "510 FPM"),
        ("200 CFM", "8\"",  "10×6",  "575 FPM"),
        ("300 CFM", "9\"",  "12×6",  "680 FPM"),
        ("400 CFM", "10\"", "12×6",  "730 FPM"),
        ("500 CFM", "12\"", "14×8",  "640 FPM"),
        ("700 CFM", "14\"", "16×8",  "655 FPM"),
        ("900 CFM", "16\"", "18×10", "645 FPM"),
        ("1200 CFM","18\"", "20×10", "680 FPM"),
    ]
    th_y = sy + 110
    d.text((sx + 60, th_y), "CFM",        fill=HI_VIS, font=f(FN_MONO_BOLD, 22))
    d.text((sx + 320, th_y), "ROUND",     fill=HI_VIS, font=f(FN_MONO_BOLD, 22))
    d.text((sx + 580, th_y), "RECT",      fill=HI_VIS, font=f(FN_MONO_BOLD, 22))
    d.text((sx + 920, th_y), "VELOCITY",  fill=HI_VIS, font=f(FN_MONO_BOLD, 22))
    d.text((sx + 1280, th_y), "RULE: 600–700 FPM = quiet branch / 800+ = noisy", fill=INK_3, font=f(FN_MONO, 20))

    th_y += 44
    d.line([(sx + 30, th_y), (sx + sw - 30, th_y)], fill=LINE, width=2)
    th_y += 14
    rh2 = 56
    for i, (cfm, rd, rect, fpm) in enumerate(duct_rows):
        ry = th_y + i * rh2
        if i % 2 == 0:
            d.rectangle([sx + 30, ry - 4, sx + sw - 30, ry + rh2 - 4], fill=BG_3)
        d.text((sx + 60,  ry + 6), cfm,  fill=INK, font=f(FN_MONO_BOLD, 26))
        d.text((sx + 320, ry + 6), rd,   fill=HI_VIS, font=f(FN_MONO_BOLD, 26))
        d.text((sx + 580, ry + 6), rect, fill=INK,    font=f(FN_MONO, 26))
        d.text((sx + 920, ry + 6), fpm,  fill=INK_2,  font=f(FN_MONO, 26))

    # ── VENTILATION panel ──
    px, py, pw, ph = 100, 1330, W - 200, 480
    d.rectangle([px, py, px + pw, py + 70], fill=HI_VIS)
    d.text((px + 24, py + 18), "VENTILATION  ·  ASHRAE 62.2-2022", fill=BG, font=f(FN_BLACK, 32))
    panel(d, px, py + 70, pw, ph - 70, fill=BG_2, border=LINE)

    metrics = [
        ("WHOLE-HOUSE", "75 CFM", "0.03 × 1,800 + 7.5 × 4"),
        ("KITCHEN", "100 CFM",     "intermittent, vented out"),
        ("BATH (×2)", "50 CFM",    "intermittent each"),
    ]
    col_w = pw // 3
    for i, (label, value, sub) in enumerate(metrics):
        cx = px + col_w * i + col_w // 2
        d.text((px + col_w * i + 30, py + 110), label, fill=HI_VIS, font=f(FN_MONO_BOLD, 22))
        text_centered(d, value, f(FN_BLACK, 64), INK, cx, py + 160)
        text_centered(d, sub, f(FN_MONO, 20), INK_3, cx, py + 248)

    d.line([(px + 30, py + 320), (px + pw - 30, py + 320)], fill=LINE, width=2)
    d.text((px + 30, py + 340),
           "Q_total = 0.03 × A_floor + 7.5 × (Nbr + 1)",
           fill=INK, font=f(FN_MONO_BOLD, 28))
    d.text((px + 30, py + 380),
           "Add 100 CFM kitchen + 50 CFM per bath. Run continuous or balance over 24 h.",
           fill=INK_3, font=f(FN_REG, 22))

    footer(d)
    img.save(OUT / "05_duct_vent.png", "PNG", optimize=True)


def main():
    print("Generating HVAC listing previews...")
    cover(); print("  01_cover.png")
    whats_inside(); print("  02_whats_inside.png")
    load_mockup(); print("  03_load.png")
    quote_mockup(); print("  04_quote.png")
    duct_vent(); print("  05_duct_vent.png")
    print(f"Done. Output: {OUT}")


if __name__ == "__main__":
    main()
