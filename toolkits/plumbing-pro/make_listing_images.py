"""Generate Etsy listing preview images for Plumbing Pro Toolkit.

Run: python make_listing_images.py
Output: dist/listing/01_cover.png ... 05_pipe_ref.png  (2000x2000 each)
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
    grid_bg(img)
    d = ImageDraw.Draw(img)

    d.rectangle([W - 80, 0, W, 320], fill=HI_VIS)
    projectcalc_header(d)
    d.text((100, 165), "PRO TOOLKIT  ·  v1", fill=HI_VIS, font=f(FN_MONO_BOLD, 28))

    d.text((100, 380), "PLUMBING", fill=INK, font=f(FN_BLACK, 200))
    d.text((100, 590), "PRO", fill=INK, font=f(FN_BLACK, 240))
    d.text((100, 810), "TOOLKIT.", fill=HI_VIS, font=f(FN_BLACK, 240))

    d.text(
        (100, 1080),
        "Fixture units  ·  pipe sizing  ·  IPC vent rules  ·  customer quote",
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
    sheets = "README · INPUTS · FIXTURE-UNITS · PIPE-SIZING · VENT · PRICING · QUOTE"
    d.text((100, 1510), sheets, fill=INK, font=f(FN_MONO_BOLD, 26))

    bullets = [
        "→  Type fixture quantities → automatic WSFU + DFU totals",
        "→  Auto-pick supply main, distribution, drain, and vent sizes (IPC tables)",
        "→  Print-ready customer quote with editable margin, tax, and labor",
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
        ("README",        "Quick-start guide and what each sheet does"),
        ("INPUTS",        "Yellow cells: bathrooms, stories, service psi, pipe materials"),
        ("FIXTURE-UNITS", "Type qty per fixture → auto WSFU + DFU totals (IPC tables)"),
        ("PIPE-SIZING",   "Auto-pick supply main, distribution, drain, trap-arm sizes"),
        ("VENT",          "IPC 906 vent stack lookup + AAV branch sizing reference"),
        ("PRICING",       "Editable PEX / copper / PVC + fixture unit costs"),
        ("QUOTE",         "Print-ready quote: materials, labor, margin, tax, total"),
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


def fixture_mockup():
    """Mock the FIXTURE-UNITS sheet."""
    img = Image.new("RGB", (W, H), BG)
    grid_bg(img); d = ImageDraw.Draw(img)

    projectcalc_header(d)
    d.text((100, 230), "PREVIEW  ·  FIXTURE-UNITS SHEET", fill=HI_VIS, font=f(FN_MONO_BOLD, 28))
    d.text((100, 280), "Type qty,", fill=INK, font=f(FN_BLACK, 96))
    d.text((100, 390), "size pipes.", fill=HI_VIS, font=f(FN_BLACK, 96))

    sx, sy, sw = 100, 560, W - 200

    d.rectangle([sx, sy, sx + sw, sy + 70], fill=HI_VIS)
    fnt = f(FN_BLACK, 32)
    d.text((sx + 24, sy + 18), "PROJECTCALC", fill=BG, font=fnt)
    pc_bbox = d.textbbox((sx + 24, sy + 18), "PROJECTCALC", font=fnt)
    ds = 18
    dx = pc_bbox[2] + 28
    dy = sy + 28
    d.polygon([(dx, dy + ds // 2), (dx + ds // 2, dy), (dx + ds, dy + ds // 2), (dx + ds // 2, dy + ds)], fill=BG)
    d.text((dx + ds + 28, sy + 18), "FIXTURE UNITS", fill=BG, font=fnt)
    d.rectangle([sx, sy + 70, sx + sw, sy + 110], fill=BG)
    d.text((sx + 24, sy + 80), "WSFU + DFU per fixture × quantity = pipe size", fill=HI_VIS, font=f(FN_MONO, 22))

    panel_white = (246, 246, 242)
    panel_lighter = (250, 250, 247)
    text_dark = (14, 14, 12)

    cols = [("FIXTURE", 60), ("QTY", 720), ("WSFU", 880), ("DFU", 1040), ("TOTAL WSFU", 1280), ("TOTAL DFU", 1530)]
    rows = [
        ("Water closet (1.6 gpf)",     "2",  "2.2", "4.0",  "4.4",  "8.0"),
        ("Lavatory",                    "4",  "0.7", "1.0",  "2.8",  "4.0"),
        ("Bathtub",                     "1",  "4.0", "2.0",  "4.0",  "2.0"),
        ("Shower (separate)",           "1",  "1.4", "2.0",  "1.4",  "2.0"),
        ("Kitchen sink",                "1",  "1.4", "2.0",  "1.4",  "2.0"),
        ("Dishwasher",                  "1",  "1.4", "2.0",  "1.4",  "2.0"),
        ("Clothes washer",              "1",  "1.4", "3.0",  "1.4",  "3.0"),
        ("Hose bibb (sillcock)",        "2",  "2.5", "0.0",  "5.0",  "0.0"),
        ("Floor drain",                 "1",  "0.0", "3.0",  "0.0",  "3.0"),
    ]

    rh = 70
    ry = sy + 130

    d.rectangle([sx, ry, sx + sw, ry + rh], fill=BG_3, outline=LINE, width=2)
    for label, x_off in cols:
        d.text((sx + x_off, ry + 22), label, fill=HI_VIS, font=f(FN_MONO_BOLD, 22))
    ry += rh

    for i, (item, qty, wsfu, dfu, tw, td) in enumerate(rows):
        bg = panel_lighter if i % 2 == 0 else panel_white
        d.rectangle([sx, ry, sx + sw, ry + rh], fill=bg, outline=(220, 220, 215), width=1)
        d.text((sx + 60, ry + 20), item, fill=text_dark, font=f(FN_REG, 26))
        text_right(d, qty, f(FN_MONO_BOLD, 28), text_dark, sx + 760, ry + 18)
        text_right(d, wsfu, f(FN_MONO, 24), text_dark, sx + 940, ry + 20)
        text_right(d, dfu, f(FN_MONO, 24), text_dark, sx + 1100, ry + 20)
        text_right(d, tw, f(FN_MONO_BOLD, 26), text_dark, sx + 1450, ry + 18)
        text_right(d, td, f(FN_MONO_BOLD, 26), text_dark, sx + 1700, ry + 18)
        ry += rh

    # Totals stripe
    d.rectangle([sx, ry, sx + sw, ry + 90], fill=HI_VIS)
    d.text((sx + 60, ry + 24), "TOTALS  →", fill=BG, font=f(FN_BLACK, 32))
    text_right(d, "21.8 WSFU", f(FN_BLACK, 36), BG, sx + 1450, ry + 22)
    text_right(d, "26.0 DFU", f(FN_BLACK, 36), BG, sx + 1700, ry + 22)

    # Pipe-size callouts
    d.text((sx + 60, ry + 130), "→ Service main: 1\"   ·   Distribution: 3/4\"   ·   Building drain: 4\"   ·   Vent stack: 3\"",
           fill=INK, font=f(FN_MONO_BOLD, 26))

    footer(d)
    img.save(OUT / "03_fixture_units.png", "PNG", optimize=True)


def quote_mockup():
    img = Image.new("RGB", (W, H), BG)
    grid_bg(img); d = ImageDraw.Draw(img)

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
    d.text((dx + ds + 28, sy + 26), "PLUMBING QUOTE", fill=BG, font=fnt)

    d.text((sx + 30, sy + 120), "PREPARED FOR", fill=(120, 120, 115), font=f(FN_MONO_BOLD, 18))
    d.text((sx + 30, sy + 150), "Mr. & Mrs. Chen", fill=text_dark, font=f(FN_BLACK, 32))
    d.text((sx + 30, sy + 196), "412 Maple Ave  ·  2-bath remodel, PEX-A repipe", fill=text_dark, font=f(FN_REG, 22))

    text_right(d, "QUOTE #2026-019", f(FN_MONO_BOLD, 22), text_dark, sx + sw - 30, sy + 130)
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
        ("PEX-A 1/2\" tubing (100 ft)",  "3 rolls",   "$65.00",  "$195.00"),
        ("PEX-A 3/4\" tubing (100 ft)",  "2 rolls",   "$110.00", "$220.00"),
        ("PEX expansion rings 1/2\"",     "80 ea",     "$0.45",   "$36.00"),
        ("PVC DWV 3\" (10 ft)",           "5 sticks",  "$42.00",  "$210.00"),
        ("PVC DWV 2\" (10 ft)",           "6 sticks",  "$22.00",  "$132.00"),
        ("P-traps 1-1/2\"",               "4 ea",      "$8.50",   "$34.00"),
        ("Toilets (1.28 gpf)",            "2 ea",      "$240.00", "$480.00"),
        ("Lavatory faucets",              "4 ea",      "$140.00", "$560.00"),
        ("Tub/shower valve set",          "1 ea",      "$320.00", "$320.00"),
        ("Lead plumber labor",            "24 hr",     "$110.00", "$2,640.00"),
        ("Helper labor",                  "16 hr",     "$65.00",  "$1,040.00"),
        ("Permit + inspection",           "1 ea",      "$225.00", "$225.00"),
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
        ("Materials + labor", "$6,092.00"),
        ("Margin (25%)", "$1,523.00"),
        ("Tax (7%)", "$533.05"),
    ]
    for lbl, v in totals:
        d.text((sx + 1000, ry), lbl, fill=text_dark, font=f(FN_REG, 26))
        text_right(d, v, f(FN_MONO_BOLD, 26), text_dark, sx + sw - 50, ry)
        ry += 44

    ry += 10
    d.rectangle([sx + 30, ry, sx + sw - 30, ry + 80], fill=HI_VIS)
    d.text((sx + 50, ry + 22), "TOTAL DUE", fill=BG, font=f(FN_BLACK, 32))
    text_right(d, "$8,148.05", f(FN_BLACK, 38), BG, sx + sw - 50, ry + 18)

    footer(d)
    img.save(OUT / "04_quote.png", "PNG", optimize=True)


def pipe_ref():
    """Reference: pipe sizing tables (supply + drain + vent)."""
    img = Image.new("RGB", (W, H), BG)
    grid_bg(img); d = ImageDraw.Draw(img)

    projectcalc_header(d)
    d.text((100, 230), "PREVIEW  ·  PIPE-SIZING + VENT", fill=HI_VIS, font=f(FN_MONO_BOLD, 28))
    d.text((100, 280), "Code-aware", fill=INK, font=f(FN_BLACK, 96))
    d.text((100, 390), "by default.", fill=HI_VIS, font=f(FN_BLACK, 96))

    # ── SUPPLY ──
    sx, sy, sw, sh = 100, 560, W - 200, 480
    d.rectangle([sx, sy, sx + sw, sy + 70], fill=HI_VIS)
    d.text((sx + 24, sy + 18), "SUPPLY  ·  IPC E103 (private dwelling, ≤60 PSI)", fill=BG, font=f(FN_BLACK, 30))
    panel(d, sx, sy + 70, sw, sh - 70, fill=BG_2, border=LINE)

    th_y = sy + 110
    d.text((sx + 60, th_y), "WSFU",                fill=HI_VIS, font=f(FN_MONO_BOLD, 22))
    d.text((sx + 540, th_y), "SERVICE MAIN",       fill=HI_VIS, font=f(FN_MONO_BOLD, 22))
    d.text((sx + 1020, th_y), "DISTRIBUTION",      fill=HI_VIS, font=f(FN_MONO_BOLD, 22))
    d.text((sx + 1500, th_y), "TYPICAL USE",       fill=HI_VIS, font=f(FN_MONO_BOLD, 22))
    th_y += 44
    d.line([(sx + 30, th_y), (sx + sw - 30, th_y)], fill=LINE, width=2)
    th_y += 14

    supply = [
        ("≤ 6",      "3/4\"",   "1/2\"",   "Single bath / ADU"),
        ("7 - 16",   "1\"",     "3/4\"",   "1-2 bath home"),
        ("17 - 32",  "1\"",     "3/4\"",   "3 bath / dual-laundry"),
        ("33 - 50",  "1-1/4\"", "1\"",     "Large home / 4+ bath"),
        ("51 - 100", "1-1/2\"", "1-1/4\"", "Multi-family duplex"),
    ]
    rh2 = 56
    for i, (rng, main, branch, note) in enumerate(supply):
        ry = th_y + i * rh2
        if i % 2 == 0:
            d.rectangle([sx + 30, ry - 4, sx + sw - 30, ry + rh2 - 4], fill=BG_3)
        d.text((sx + 60, ry + 6),  rng,    fill=INK,   font=f(FN_MONO_BOLD, 26))
        d.text((sx + 540, ry + 6), main,   fill=HI_VIS, font=f(FN_MONO_BOLD, 26))
        d.text((sx + 1020, ry + 6), branch, fill=INK,    font=f(FN_MONO_BOLD, 26))
        d.text((sx + 1500, ry + 6), note,   fill=INK_2,  font=f(FN_REG, 22))

    # ── DRAIN + VENT ──
    px, py, pw, ph = 100, 1090, W - 200, 720
    d.rectangle([px, py, px + pw, py + 70], fill=HI_VIS)
    d.text((px + 24, py + 18), "DRAIN + VENT  ·  IPC 710 / 906", fill=BG, font=f(FN_BLACK, 30))
    panel(d, px, py + 70, pw, ph - 70, fill=BG_2, border=LINE)

    th_y = py + 110
    d.text((px + 60, th_y), "DFU",        fill=HI_VIS, font=f(FN_MONO_BOLD, 22))
    d.text((px + 360, th_y), "DRAIN",     fill=HI_VIS, font=f(FN_MONO_BOLD, 22))
    d.text((px + 700, th_y), "MIN SLOPE", fill=HI_VIS, font=f(FN_MONO_BOLD, 22))
    d.text((px + 1080, th_y), "VENT",     fill=HI_VIS, font=f(FN_MONO_BOLD, 22))
    d.text((px + 1380, th_y), "MAX VENT LENGTH", fill=HI_VIS, font=f(FN_MONO_BOLD, 22))

    th_y += 44
    d.line([(px + 30, th_y), (px + pw - 30, th_y)], fill=LINE, width=2)
    th_y += 14

    drain = [
        ("1 - 3",     "1-1/2\"", "1/4\"/ft", "1-1/4\"", "50 ft"),
        ("4 - 6",     "2\"",     "1/4\"/ft", "1-1/2\"", "80 ft"),
        ("7 - 20",    "3\"",     "1/8\"/ft", "2\"",     "200 ft"),
        ("21 - 160",  "4\"",     "1/8\"/ft", "3\"",     "400 ft"),
        ("161 - 620", "6\"",     "1/16\"/ft","4\"",     "600 ft"),
    ]
    for i, (rng, drn, slope, vent, vlen) in enumerate(drain):
        ry = th_y + i * rh2
        if i % 2 == 0:
            d.rectangle([px + 30, ry - 4, px + pw - 30, ry + rh2 - 4], fill=BG_3)
        d.text((px + 60, ry + 6),  rng,   fill=INK,    font=f(FN_MONO_BOLD, 26))
        d.text((px + 360, ry + 6), drn,   fill=HI_VIS, font=f(FN_MONO_BOLD, 26))
        d.text((px + 700, ry + 6), slope, fill=INK,    font=f(FN_MONO, 24))
        d.text((px + 1080, ry + 6), vent, fill=HI_VIS, font=f(FN_MONO_BOLD, 26))
        d.text((px + 1380, ry + 6), vlen, fill=INK_2,  font=f(FN_MONO, 24))

    d.text((px + 30, py + ph - 60),
           "Vent stack ≥ ½ × drain diameter, never less than 1-1/4\". Auto-pick on PIPE-SIZING tab.",
           fill=INK_3, font=f(FN_MONO, 22))

    footer(d)
    img.save(OUT / "05_pipe_ref.png", "PNG", optimize=True)


def main():
    print("Generating Plumbing listing previews...")
    cover(); print("  01_cover.png")
    whats_inside(); print("  02_whats_inside.png")
    fixture_mockup(); print("  03_fixture_units.png")
    quote_mockup(); print("  04_quote.png")
    pipe_ref(); print("  05_pipe_ref.png")
    print(f"Done. Output: {OUT}")


if __name__ == "__main__":
    main()
