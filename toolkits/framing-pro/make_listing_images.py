"""Generate Etsy listing preview images for Framing Pro Toolkit.

Run: python make_listing_images.py
Output: dist/listing/01_cover.png ... 05_header_ref.png  (2000x2000 each)
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


def cover():
    img = Image.new("RGB", (W, H), BG)
    grid_bg(img); d = ImageDraw.Draw(img)

    d.rectangle([W - 80, 0, W, 320], fill=HI_VIS)
    projectcalc_header(d)
    d.text((100, 165), "PRO TOOLKIT  ·  v1", fill=HI_VIS, font=f(FN_MONO_BOLD, 28))

    d.text((100, 380), "FRAMING", fill=INK, font=f(FN_BLACK, 220))
    d.text((100, 590), "PRO", fill=INK, font=f(FN_BLACK, 240))
    d.text((100, 810), "TOOLKIT.", fill=HI_VIS, font=f(FN_BLACK, 240))

    d.text(
        (100, 1080),
        "Lumber takeoff  ·  cut list  ·  plywood  ·  print-ready quote",
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
    sheets = "README · INPUTS · TAKEOFF · CUT-LIST · PLYWOOD · PRICING · QUOTE"
    d.text((100, 1510), sheets, fill=INK, font=f(FN_MONO_BOLD, 28))

    bullets = [
        "→  Walls + floor + roof — full stud, joist, rafter, header takeoff",
        "→  Board-foot count by member with cut list at standard 2× lengths",
        "→  Plywood / OSB sheet count for subfloor, walls, and pitch-adjusted roof",
    ]
    by = 1610
    for b in bullets:
        d.text((100, by), b, fill=INK_2, font=f(FN_REG, 30))
        by += 50

    footer(d)
    img.save(OUT / "01_cover.png", "PNG", optimize=True)


def whats_inside():
    img = Image.new("RGB", (W, H), BG)
    grid_bg(img); d = ImageDraw.Draw(img)
    projectcalc_header(d)

    hi_vis_bar(d, 100, 230, 200, 12)
    d.text((100, 270), "WHAT'S", fill=INK, font=f(FN_BLACK, 140))
    d.text((100, 410), "INSIDE.", fill=HI_VIS, font=f(FN_BLACK, 140))

    sheets = [
        ("README",   "Quick-start guide and what each sheet does"),
        ("INPUTS",   "Yellow cells: walls, floor, roof, sheathing, waste"),
        ("TAKEOFF",  "Studs, plates, headers, joists, rafters, hangers, fasteners"),
        ("CUT-LIST", "Standard 2× lengths + board-foot total by section"),
        ("PLYWOOD",  "Subfloor + wall + roof sheet count (pitch-adjusted)"),
        ("PRICING",  "Editable lumber + sheathing + fastener unit costs"),
        ("QUOTE",    "Print-ready quote: materials, labor by BF, total"),
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


def takeoff_mockup():
    img = Image.new("RGB", (W, H), BG)
    grid_bg(img); d = ImageDraw.Draw(img)

    projectcalc_header(d)
    d.text((100, 230), "PREVIEW  ·  TAKEOFF SHEET", fill=HI_VIS, font=f(FN_MONO_BOLD, 28))
    d.text((100, 280), "Lumber count,", fill=INK, font=f(FN_BLACK, 96))
    d.text((100, 390), "every member.", fill=HI_VIS, font=f(FN_BLACK, 96))

    sx, sy, sw = 100, 560, W - 200

    d.rectangle([sx, sy, sx + sw, sy + 70], fill=HI_VIS)
    fnt = f(FN_BLACK, 32)
    d.text((sx + 24, sy + 18), "PROJECTCALC", fill=BG, font=fnt)
    pc_bbox = d.textbbox((sx + 24, sy + 18), "PROJECTCALC", font=fnt)
    ds = 18
    dx = pc_bbox[2] + 28
    dy = sy + 28
    d.polygon([(dx, dy + ds // 2), (dx + ds // 2, dy), (dx + ds, dy + ds // 2), (dx + ds // 2, dy + ds)], fill=BG)
    d.text((dx + ds + 28, sy + 18), "FRAMING TAKEOFF", fill=BG, font=fnt)
    d.rectangle([sx, sy + 70, sx + sw, sy + 110], fill=BG)
    d.text((sx + 24, sy + 80), "Type wall + floor + roof inputs — every member auto-counts", fill=HI_VIS, font=f(FN_MONO, 22))

    panel_white = (246, 246, 242)
    panel_lighter = (250, 250, 247)
    text_dark = (14, 14, 12)

    cols = [("MEMBER", 60), ("QTY", 760), ("UNIT", 920), ("NOTE", 1180)]
    rows = [
        ("Studs (precut 104-5/8\")",    "165",    "ea",        "16\" OC + corners + RO"),
        ("Plates 2x4 8-ft (PT + SPF)",  "75",     "8' pieces", "1 bot + 2 top × walls"),
        ("Headers 2x10 8-ft",           "16",     "8' pieces", "Built-up 2-ply"),
        ("Floor joists 2x10 16-ft",     "53",     "ea",        "16\" OC, 14' span"),
        ("Rim joists 2x10 12-ft",       "8",      "12' pieces","Foundation perimeter"),
        ("Rafters 2x10 16-ft",          "34",     "ea",        "Both sides, 24\" OC"),
        ("Ridge 2x12 12-ft",            "3",      "ea",        "Gable, 32 ft ridge"),
        ("Joist hangers (2x10)",        "107",    "ea",        "Both ends + rim"),
        ("Hurricane ties (H2.5A)",      "34",     "ea",        "1 per rafter"),
        ("16d sinkers (50 lb box)",     "1",      "box",       "≈0.5 lb / lin ft wall"),
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
        text_right(d, qty, f(FN_MONO_BOLD, 28), text_dark, sx + 880, ry + 18)
        d.text((sx + 920, ry + 22), unit, fill=text_dark, font=f(FN_REG, 24))
        d.text((sx + 1180, ry + 24), note, fill=(100, 100, 95), font=f(FN_REG, 22))
        ry += rh

    # Totals row
    d.rectangle([sx, ry, sx + sw, ry + 90], fill=HI_VIS)
    d.text((sx + 60, ry + 24), "BOARD FEET TOTAL  →", fill=BG, font=f(FN_BLACK, 32))
    text_right(d, "4,810 BF", f(FN_BLACK, 38), BG, sx + sw - 60, ry + 22)

    footer(d)
    img.save(OUT / "03_takeoff.png", "PNG", optimize=True)


def quote_mockup():
    img = Image.new("RGB", (W, H), BG)
    grid_bg(img); d = ImageDraw.Draw(img)

    projectcalc_header(d)
    d.text((100, 230), "PREVIEW  ·  QUOTE SHEET", fill=HI_VIS, font=f(FN_MONO_BOLD, 28))
    d.text((100, 280), "Print-ready", fill=INK, font=f(FN_BLACK, 96))
    d.text((100, 390), "framing quote.", fill=HI_VIS, font=f(FN_BLACK, 96))

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
    d.text((dx + ds + 28, sy + 26), "FRAMING QUOTE", fill=BG, font=fnt)

    d.text((sx + 30, sy + 120), "PREPARED FOR", fill=(120, 120, 115), font=f(FN_MONO_BOLD, 18))
    d.text((sx + 30, sy + 150), "Mr. & Mrs. Chen", fill=text_dark, font=f(FN_BLACK, 32))
    d.text((sx + 30, sy + 196), "412 Maple Ave  ·  Garage addition, 24×30", fill=text_dark, font=f(FN_REG, 22))

    text_right(d, "QUOTE #2026-027", f(FN_MONO_BOLD, 22), text_dark, sx + sw - 30, sy + 130)
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
        ("Studs 2x4 (precut 104-5/8\")",    "165 ea",  "$5.95",   "$981.75"),
        ("Plates 2x4 SPF 8-ft",             "75 ea",   "$5.20",   "$390.00"),
        ("Headers 2x10 SPF 12-ft",          "16 ea",   "$22.00",  "$352.00"),
        ("Floor joists 2x10 16-ft",         "53 ea",   "$29.50",  "$1,563.50"),
        ("Rafters 2x10 16-ft",              "34 ea",   "$29.50",  "$1,003.00"),
        ("Ridge 2x12 12-ft",                "3 ea",    "$28.00",  "$84.00"),
        ("Joist hangers LUS210",            "107 ea",  "$4.20",   "$449.40"),
        ("Subfloor 3/4 T&G 4×8",            "26 ea",   "$42.00",  "$1,092.00"),
        ("Wall sheathing 7/16 OSB",         "34 ea",   "$18.50",  "$629.00"),
        ("Roof sheathing 5/8 OSB",          "30 ea",   "$24.00",  "$720.00"),
        ("Wall framing labor (BF × $0.85)", "1,920 BF","$0.85",   "$1,632.00"),
        ("Floor framing labor",             "1,510 BF","$0.65",   "$981.50"),
        ("Roof framing labor",              "1,820 BF","$1.05",   "$1,911.00"),
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
        ("Materials + labor", "$11,789.15"),
        ("Margin (25%)", "$2,947.29"),
        ("Tax (7%)", "$1,031.54"),
    ]
    for lbl, v in totals:
        d.text((sx + 1000, ry), lbl, fill=text_dark, font=f(FN_REG, 26))
        text_right(d, v, f(FN_MONO_BOLD, 26), text_dark, sx + sw - 50, ry)
        ry += 44

    ry += 10
    d.rectangle([sx + 30, ry, sx + sw - 30, ry + 80], fill=HI_VIS)
    d.text((sx + 50, ry + 22), "TOTAL DUE", fill=BG, font=f(FN_BLACK, 32))
    text_right(d, "$15,767.98", f(FN_BLACK, 38), BG, sx + sw - 50, ry + 18)

    footer(d)
    img.save(OUT / "04_quote.png", "PNG", optimize=True)


def header_ref():
    """IRC header quick-pick + plywood reference."""
    img = Image.new("RGB", (W, H), BG)
    grid_bg(img); d = ImageDraw.Draw(img)

    projectcalc_header(d)
    d.text((100, 230), "PREVIEW  ·  HEADER + PLYWOOD", fill=HI_VIS, font=f(FN_MONO_BOLD, 28))
    d.text((100, 280), "Code-aware", fill=INK, font=f(FN_BLACK, 96))
    d.text((100, 390), "by default.", fill=HI_VIS, font=f(FN_BLACK, 96))

    # ── HEADER quick-pick ──
    sx, sy, sw, sh = 100, 560, W - 200, 580
    d.rectangle([sx, sy, sx + sw, sy + 70], fill=HI_VIS)
    d.text((sx + 24, sy + 18), "HEADER QUICK-PICK  ·  IRC R602.7 (built-up SPF #2)", fill=BG, font=f(FN_BLACK, 28))
    panel(d, sx, sy + 70, sw, sh - 70, fill=BG_2, border=LINE)

    th_y = sy + 110
    d.text((sx + 60, th_y),  "SPAN",        fill=HI_VIS, font=f(FN_MONO_BOLD, 22))
    d.text((sx + 540, th_y), "HEADER",      fill=HI_VIS, font=f(FN_MONO_BOLD, 22))
    d.text((sx + 1020, th_y),"# JACKS",     fill=HI_VIS, font=f(FN_MONO_BOLD, 22))
    d.text((sx + 1280, th_y),"NOTE",        fill=HI_VIS, font=f(FN_MONO_BOLD, 22))
    th_y += 44
    d.line([(sx + 30, th_y), (sx + sw - 30, th_y)], fill=LINE, width=2)
    th_y += 14

    headers = [
        ("≤ 4 ft",  "2-2x4",  "1", "Single-story, light load"),
        ("4 - 6",   "2-2x6",  "1", "Single-story, light load"),
        ("6 - 8",   "2-2x8",  "1", "Single-story, light load"),
        ("8 - 10",  "2-2x10", "2", "Single-story or top of 2-story"),
        ("10 - 12", "2-2x12", "2", "Single-story; engineer if 2-story"),
        (">12 ft",  "Engineered", "2+", "LVL or steel — get stamped design"),
    ]
    rh2 = 56
    for i, (rng, hdr, jacks, note) in enumerate(headers):
        ry = th_y + i * rh2
        if i % 2 == 0:
            d.rectangle([sx + 30, ry - 4, sx + sw - 30, ry + rh2 - 4], fill=BG_3)
        d.text((sx + 60, ry + 6),  rng,   fill=INK,    font=f(FN_MONO_BOLD, 26))
        d.text((sx + 540, ry + 6), hdr,   fill=HI_VIS, font=f(FN_MONO_BOLD, 26))
        d.text((sx + 1020, ry + 6),jacks, fill=INK,    font=f(FN_MONO_BOLD, 26))
        d.text((sx + 1280, ry + 6),note,  fill=INK_2,  font=f(FN_REG, 22))

    # ── PLYWOOD coverage ──
    px, py, pw, ph = 100, 1190, W - 200, 620
    d.rectangle([px, py, px + pw, py + 70], fill=HI_VIS)
    d.text((px + 24, py + 18), "PLYWOOD / OSB  ·  4×8 SHEET = 32 SQ FT", fill=BG, font=f(FN_BLACK, 30))
    panel(d, px, py + 70, pw, ph - 70, fill=BG_2, border=LINE)

    metrics = [
        ("SUBFLOOR",        "12% waste", "3/4\" T&G"),
        ("WALL SHEATHING",  "10% waste", "7/16\" OSB"),
        ("ROOF SHEATHING",  "12% waste", "5/8\" OSB"),
    ]
    col_w = pw // 3
    for i, (label, value, sub) in enumerate(metrics):
        cx = px + col_w * i + col_w // 2
        d.text((px + col_w * i + 30, py + 110), label, fill=HI_VIS, font=f(FN_MONO_BOLD, 24))
        text_centered(d, value, f(FN_BLACK, 56), INK, cx, py + 160)
        text_centered(d, sub, f(FN_MONO, 22), INK_3, cx, py + 240)

    d.line([(px + 30, py + 320), (px + pw - 30, py + 320)], fill=LINE, width=2)
    d.text((px + 30, py + 340),
           "Roof sheets = (footprint × slope multiplier) ÷ 32 × (1 + waste%)",
           fill=INK, font=f(FN_MONO_BOLD, 26))
    d.text((px + 30, py + 380),
           "PLYWOOD tab does the math live — type pitch and waste, sheet count drops in.",
           fill=INK_3, font=f(FN_REG, 22))
    d.text((px + 30, py + 430),
           "Pitch 4/12 → 1.054 mult   ·   6/12 → 1.118   ·   8/12 → 1.202   ·   12/12 → 1.414",
           fill=INK_2, font=f(FN_MONO, 24))

    footer(d)
    img.save(OUT / "05_header_ref.png", "PNG", optimize=True)


def main():
    print("Generating Framing listing previews...")
    cover(); print("  01_cover.png")
    whats_inside(); print("  02_whats_inside.png")
    takeoff_mockup(); print("  03_takeoff.png")
    quote_mockup(); print("  04_quote.png")
    header_ref(); print("  05_header_ref.png")
    print(f"Done. Output: {OUT}")


if __name__ == "__main__":
    main()
