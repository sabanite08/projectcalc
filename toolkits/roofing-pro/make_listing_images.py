"""Generate Etsy listing preview images for Roofing Pro Toolkit.

Run: python make_listing_images.py
Output: dist/listing/01_cover.png ... 05_pitch.png  (2000x2000 each)
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
SAFETY = (255, 90, 31)

# Fonts (Windows)
FN_BLACK = "C:/Windows/Fonts/ariblk.ttf"      # Arial Black
FN_BOLD = "C:/Windows/Fonts/arialbd.ttf"      # Arial Bold
FN_REG = "C:/Windows/Fonts/arial.ttf"         # Arial
FN_MONO = "C:/Windows/Fonts/consola.ttf"      # Consolas
FN_MONO_BOLD = "C:/Windows/Fonts/consolab.ttf"


def f(path, size):
    return ImageFont.truetype(path, size)


def grid_bg(img):
    """Subtle grid background like the OG images."""
    d = ImageDraw.Draw(img)
    step = 60
    for x in range(0, W, step):
        d.line([(x, 0), (x, H)], fill=(20, 20, 18), width=1)
    for y in range(0, H, step):
        d.line([(0, y), (W, y)], fill=(20, 20, 18), width=1)


def projectcalc_header(d, x=100, y=100):
    """Diamond + PROJECTCALC text."""
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
    """Common bottom strip."""
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

    # Hi-vis stripe top right
    d.rectangle([W - 80, 0, W, 320], fill=HI_VIS)

    projectcalc_header(d)
    d.text((100, 165), "PRO TOOLKIT  ·  v1", fill=HI_VIS, font=f(FN_MONO_BOLD, 28))

    # Hero stack
    d.text((100, 380), "ROOFING", fill=INK, font=f(FN_BLACK, 240))
    d.text((100, 600), "PRO", fill=INK, font=f(FN_BLACK, 240))
    d.text((100, 820), "TOOLKIT.", fill=HI_VIS, font=f(FN_BLACK, 240))

    # Sub-tagline
    d.text(
        (100, 1080),
        "Excel workbook  ·  material takeoff  ·  print-ready customer quote",
        fill=INK_2,
        font=f(FN_REG, 38),
    )

    # Price tag block
    panel(d, 100, 1180, 360, 180, fill=HI_VIS, border=HI_VIS)
    text_centered(d, "$39", f(FN_BLACK, 110), BG, 100 + 180, 1195)
    text_centered(d, "INSTANT DOWNLOAD", f(FN_MONO_BOLD, 22), BG, 100 + 180, 1320)

    # Compatibility badges
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

    # 7 sheets list
    d.text((100, 1450), "7 SHEETS", fill=HI_VIS, font=f(FN_BLACK, 36))
    sheets = "README  ·  INPUTS  ·  TAKEOFF  ·  VENTILATION  ·  PRICING  ·  QUOTE  ·  PITCH"
    d.text((100, 1510), sheets, fill=INK, font=f(FN_MONO_BOLD, 30))

    # Bullets
    bullets = [
        "→  Type your roof footprint and pitch — every sheet updates automatically",
        "→  Built-in NFA ventilation balance (1:150 rule, 50/50 intake/exhaust)",
        "→  Print-ready customer quote with editable margin, tax, and labor",
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

    # Title bar
    hi_vis_bar(d, 100, 230, 200, 12)
    d.text((100, 270), "WHAT'S", fill=INK, font=f(FN_BLACK, 140))
    d.text((100, 410), "INSIDE.", fill=HI_VIS, font=f(FN_BLACK, 140))

    sheets = [
        ("README", "Quick-start guide and what each sheet does"),
        ("INPUTS", "Yellow cells: footprint, pitch, eave, ridge, waste %, dumpster"),
        ("TAKEOFF", "Auto-calculated squares, bundles, underlayment, drip edge, nails"),
        ("VENTILATION", "1:150 NFA balance with 50/50 intake/exhaust split"),
        ("PRICING", "Editable unit prices — set once to match your supplier"),
        ("QUOTE", "Print-ready customer quote: line items, margin, tax, labor, total"),
        ("PITCH", "Pitch-to-multiplier reference (3/12 through 12/12)"),
    ]

    y = 620
    for name, desc in sheets:
        # Sheet number bar
        panel(d, 100, y, 80, 80, fill=HI_VIS, border=HI_VIS)
        text_centered(d, str(sheets.index((name, desc)) + 1), f(FN_BLACK, 50), BG, 140, y + 12)

        # Sheet name
        d.text((210, y + 4), name, fill=INK, font=f(FN_BLACK, 44))
        # Description
        d.text((210, y + 56), desc, fill=INK_2, font=f(FN_REG, 26))

        y += 150
        if y > 1750:
            break

    footer(d)
    img.save(OUT / "02_whats_inside.png", "PNG", optimize=True)


# ─────────────────────────────────────────────────────────────────────
# IMAGE 3 — TAKEOFF MOCKUP
# ─────────────────────────────────────────────────────────────────────
def takeoff_mockup():
    img = Image.new("RGB", (W, H), BG)
    grid_bg(img)
    d = ImageDraw.Draw(img)

    projectcalc_header(d)
    d.text((100, 230), "PREVIEW  ·  TAKEOFF SHEET", fill=HI_VIS, font=f(FN_MONO_BOLD, 28))
    d.text((100, 280), "Material list", fill=INK, font=f(FN_BLACK, 96))
    d.text((100, 390), "auto-calculated.", fill=HI_VIS, font=f(FN_BLACK, 96))

    # Mock spreadsheet — light theme like real Excel
    sx, sy, sw = 100, 560, W - 200

    # Banner
    d.rectangle([sx, sy, sx + sw, sy + 70], fill=HI_VIS)
    fnt = f(FN_BLACK, 32)
    d.text((sx + 24, sy + 18), "PROJECTCALC", fill=BG, font=fnt)
    pc_bbox = d.textbbox((sx + 24, sy + 18), "PROJECTCALC", font=fnt)
    # Drawn diamond separator
    ds = 18
    dx = pc_bbox[2] + 28
    dy = sy + 28
    d.polygon([(dx, dy + ds // 2), (dx + ds // 2, dy), (dx + ds, dy + ds // 2), (dx + ds // 2, dy + ds)], fill=BG)
    d.text((dx + ds + 28, sy + 18), "MATERIAL TAKEOFF", fill=BG, font=fnt)
    # Subtitle
    d.rectangle([sx, sy + 70, sx + sw, sy + 110], fill=BG)
    d.text((sx + 24, sy + 80), "Pulled from INPUTS — bring this list to the supply house", fill=HI_VIS, font=f(FN_MONO, 22))

    # Header row
    panel_white = (246, 246, 242)
    panel_lighter = (250, 250, 247)
    text_dark = (14, 14, 12)

    cols = [("ITEM", 60), ("QTY", 700), ("UNIT", 880), ("NOTE", 1120)]
    rows = [
        ("Roof footprint", "1,500", "sq ft", "from INPUTS"),
        ("Pitch multiplier", "1.202", "×", "8/12 → 33.7°"),
        ("True roof area", "1,803", "sq ft", "footprint × multiplier"),
        ("Squares (incl. 12% waste)", "20.2", "sq", "1 sq = 100 sq ft"),
        ("Shingle bundles (3/sq)", "61", "bundles", "3-tab equivalent"),
        ("Underlayment", "7", "rolls", "synthetic, 4 sq/roll"),
        ("Ice & water shield", "210", "lin ft", "eave + valleys"),
        ("Drip edge", "180", "lin ft", "perimeter"),
        ("Ridge cap", "45", "lin ft", "from ridge length"),
        ("Starter strip", "120", "lin ft", "eave only"),
        ("Roofing nails (1¼\")", "25", "lb", "~320 nails/lb"),
        ("Dumpster", "20", "yd", "auto-sized"),
    ]

    rh = 70
    ry = sy + 130

    # Header
    d.rectangle([sx, ry, sx + sw, ry + rh], fill=BG_3, outline=LINE, width=2)
    for label, x_off in cols:
        d.text((sx + x_off, ry + 22), label, fill=HI_VIS, font=f(FN_MONO_BOLD, 24))
    ry += rh

    # Rows
    for i, (item, qty, unit, note) in enumerate(rows):
        bg = panel_lighter if i % 2 == 0 else panel_white
        d.rectangle([sx, ry, sx + sw, ry + rh], fill=bg, outline=(220, 220, 215), width=1)
        d.text((sx + 60, ry + 20), item, fill=text_dark, font=f(FN_REG, 26))
        text_right(d, qty, f(FN_MONO_BOLD, 28), text_dark, sx + 860, ry + 18)
        d.text((sx + 880, ry + 22), unit, fill=text_dark, font=f(FN_REG, 24))
        d.text((sx + 1120, ry + 24), note, fill=(100, 100, 95), font=f(FN_REG, 22))
        ry += rh

    footer(d)
    img.save(OUT / "03_takeoff.png", "PNG", optimize=True)


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

    # Quote paper
    d.rectangle([sx, sy, sx + sw, sy + 1240], fill=panel_white, outline=LINE, width=2)

    # Quote header
    d.rectangle([sx, sy, sx + sw, sy + 90], fill=HI_VIS)
    fnt = f(FN_BLACK, 32)
    d.text((sx + 30, sy + 26), "PROJECTCALC", fill=BG, font=fnt)
    pc_bbox = d.textbbox((sx + 30, sy + 26), "PROJECTCALC", font=fnt)
    ds = 18
    dx = pc_bbox[2] + 28
    dy = sy + 36
    d.polygon([(dx, dy + ds // 2), (dx + ds // 2, dy), (dx + ds, dy + ds // 2), (dx + ds // 2, dy + ds)], fill=BG)
    d.text((dx + ds + 28, sy + 26), "CUSTOMER QUOTE", fill=BG, font=fnt)

    # Customer block
    d.text((sx + 30, sy + 120), "PREPARED FOR", fill=(120, 120, 115), font=f(FN_MONO_BOLD, 18))
    d.text((sx + 30, sy + 150), "Mr. & Mrs. Chen", fill=text_dark, font=f(FN_BLACK, 32))
    d.text((sx + 30, sy + 196), "412 Maple Ave  ·  Reroof, asphalt 30-yr", fill=text_dark, font=f(FN_REG, 22))

    text_right(d, "QUOTE #2026-014", f(FN_MONO_BOLD, 22), text_dark, sx + sw - 30, sy + 130)
    text_right(d, "Apr 27, 2026", f(FN_MONO, 20), (120, 120, 115), sx + sw - 30, sy + 160)
    text_right(d, "Valid 30 days", f(FN_MONO, 20), (120, 120, 115), sx + sw - 30, sy + 188)

    # Line items header
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
        ("Architectural shingles, 30-yr", "61 bundles", "$38.00", "$2,318.00"),
        ("Synthetic underlayment", "7 rolls", "$92.00", "$644.00"),
        ("Ice & water shield", "210 lin ft", "$2.40", "$504.00"),
        ("Drip edge, white aluminum", "180 lin ft", "$1.85", "$333.00"),
        ("Ridge cap shingles", "45 lin ft", "$5.20", "$234.00"),
        ("Starter strip", "120 lin ft", "$1.10", "$132.00"),
        ("Roofing nails 1¼\"", "25 lb", "$3.40", "$85.00"),
        ("Tear-off & dumpster (20 yd)", "1 ea", "$685.00", "$685.00"),
        ("Labor, install + cleanup", "20.2 sq", "$185.00", "$3,737.00"),
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

    # Totals
    totals = [
        ("Materials + labor", "$8,672.00", False),
        ("Margin (15%)", "$1,300.80", False),
        ("Tax (7%)", "$697.10", False),
    ]
    for lbl, v, _ in totals:
        d.text((sx + 1000, ry), lbl, fill=text_dark, font=f(FN_REG, 26))
        text_right(d, v, f(FN_MONO_BOLD, 26), text_dark, sx + sw - 50, ry)
        ry += 44

    # Grand total bar
    ry += 10
    d.rectangle([sx + 30, ry, sx + sw - 30, ry + 80], fill=HI_VIS)
    d.text((sx + 50, ry + 22), "TOTAL DUE", fill=BG, font=f(FN_BLACK, 32))
    text_right(d, "$10,669.90", f(FN_BLACK, 38), BG, sx + sw - 50, ry + 18)

    footer(d)
    img.save(OUT / "04_quote.png", "PNG", optimize=True)


# ─────────────────────────────────────────────────────────────────────
# IMAGE 5 — VENTILATION + PITCH REFERENCE
# ─────────────────────────────────────────────────────────────────────
def vent_pitch():
    img = Image.new("RGB", (W, H), BG)
    grid_bg(img)
    d = ImageDraw.Draw(img)

    projectcalc_header(d)
    d.text((100, 230), "PREVIEW  ·  VENTILATION + PITCH", fill=HI_VIS, font=f(FN_MONO_BOLD, 28))
    d.text((100, 280), "Code-aware", fill=INK, font=f(FN_BLACK, 96))
    d.text((100, 390), "by default.", fill=HI_VIS, font=f(FN_BLACK, 96))

    # ── VENTILATION panel ──
    sx, sy, sw, sh = 100, 560, W - 200, 480
    d.rectangle([sx, sy, sx + sw, sy + 70], fill=HI_VIS)
    d.text((sx + 24, sy + 18), "VENTILATION  ·  1:150 NFA RULE", fill=BG, font=f(FN_BLACK, 32))

    panel(d, sx, sy + 70, sw, sh - 70, fill=BG_2, border=LINE)

    # 3 column metrics
    col_w = sw // 3
    metrics = [
        ("ATTIC FLOOR", "1,500 sq ft", "from INPUTS"),
        ("REQUIRED NFA", "1,440 sq in", "1:150 of attic floor"),
        ("INTAKE / EXHAUST", "720 / 720", "50/50 split"),
    ]
    for i, (label, value, sub) in enumerate(metrics):
        cx = sx + col_w * i + col_w // 2
        d.text((sx + col_w * i + 30, sy + 110), label, fill=HI_VIS, font=f(FN_MONO_BOLD, 22))
        text_centered(d, value, f(FN_BLACK, 64), INK, cx, sy + 160)
        text_centered(d, sub, f(FN_MONO, 20), INK_3, cx, sy + 248)

    # Vent type rows
    d.line([(sx + 30, sy + 320), (sx + sw - 30, sy + 320)], fill=LINE, width=2)
    vents = [
        ("Soffit vents (continuous, 9 NFA / lin ft)", "80 lin ft"),
        ("Ridge vent (18 NFA / lin ft)", "40 lin ft"),
    ]
    vy = sy + 340
    for label, v in vents:
        d.text((sx + 30, vy), label, fill=INK, font=f(FN_REG, 26))
        text_right(d, v, f(FN_MONO_BOLD, 28), HI_VIS, sx + sw - 30, vy - 2)
        vy += 56

    # ── PITCH panel ──
    px, py, pw, ph = 100, 1090, W - 200, 720
    d.rectangle([px, py, px + pw, py + 70], fill=HI_VIS)
    d.text((px + 24, py + 18), "PITCH  ·  SLOPE MULTIPLIER REFERENCE", fill=BG, font=f(FN_BLACK, 32))

    panel(d, px, py + 70, pw, ph - 70, fill=BG_2, border=LINE)

    # Pitch table
    pitches = [
        ("3/12", "14.0°", "1.031"),
        ("4/12", "18.4°", "1.054"),
        ("5/12", "22.6°", "1.083"),
        ("6/12", "26.6°", "1.118"),
        ("7/12", "30.3°", "1.158"),
        ("8/12", "33.7°", "1.202"),
        ("9/12", "36.9°", "1.250"),
        ("10/12", "39.8°", "1.302"),
        ("11/12", "42.5°", "1.357"),
        ("12/12", "45.0°", "1.414"),
    ]

    # 2 columns of pitches
    col_w2 = (pw - 60) // 2
    th_y = py + 110
    d.text((px + 60, th_y), "PITCH", fill=HI_VIS, font=f(FN_MONO_BOLD, 22))
    d.text((px + 240, th_y), "ANGLE", fill=HI_VIS, font=f(FN_MONO_BOLD, 22))
    d.text((px + 420, th_y), "MULTIPLIER", fill=HI_VIS, font=f(FN_MONO_BOLD, 22))
    d.text((px + 60 + col_w2, th_y), "PITCH", fill=HI_VIS, font=f(FN_MONO_BOLD, 22))
    d.text((px + 240 + col_w2, th_y), "ANGLE", fill=HI_VIS, font=f(FN_MONO_BOLD, 22))
    d.text((px + 420 + col_w2, th_y), "MULTIPLIER", fill=HI_VIS, font=f(FN_MONO_BOLD, 22))

    th_y += 44
    d.line([(px + 30, th_y), (px + pw - 30, th_y)], fill=LINE, width=2)
    th_y += 14

    rh2 = 50
    for i, (p, a, m) in enumerate(pitches):
        col = i % 2
        row = i // 2
        rx = px + col * col_w2
        ry = th_y + row * rh2

        if row % 2 == 0:
            d.rectangle([rx + 30, ry - 4, rx + col_w2 + 30, ry + rh2 - 4], fill=BG_3)

        d.text((rx + 60, ry + 6), p, fill=INK, font=f(FN_MONO_BOLD, 26))
        d.text((rx + 240, ry + 6), a, fill=INK_2, font=f(FN_MONO, 24))
        d.text((rx + 420, ry + 6), m, fill=HI_VIS, font=f(FN_MONO_BOLD, 26))

    # Footnote
    d.text(
        (px + 30, py + ph - 60),
        "Multiply roof footprint area by the multiplier to get true sloped roof area.",
        fill=INK_3,
        font=f(FN_MONO, 22),
    )

    footer(d)
    img.save(OUT / "05_vent_pitch.png", "PNG", optimize=True)


def shop_avatar_yellow():
    """Yellow background, black PC monogram. 1000x1000."""
    s = 1000
    img = Image.new("RGB", (s, s), HI_VIS)
    d = ImageDraw.Draw(img)

    # Big PC monogram, centered
    fnt = f(FN_BLACK, 560)
    text = "PC"
    bbox = d.textbbox((0, 0), text, font=fnt)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    # Visual centering — Arial Black has top whitespace, nudge up
    d.text(((s - tw) // 2 - bbox[0], (s - th) // 2 - bbox[1] - 30), text, fill=BG, font=fnt)

    # Small diamond accent top
    ds = 60
    cx = s // 2
    dy = 80
    d.polygon(
        [(cx - ds // 2, dy + ds // 2), (cx, dy), (cx + ds // 2, dy + ds // 2), (cx, dy + ds)],
        fill=BG,
    )

    # Tagline at bottom
    tag = "PROJECTCALC"
    tag_fnt = f(FN_BLACK, 56)
    tbb = d.textbbox((0, 0), tag, font=tag_fnt)
    tw2 = tbb[2] - tbb[0]
    d.text(((s - tw2) // 2, s - 130), tag, fill=BG, font=tag_fnt)

    img.save(OUT / "shop_avatar_yellow.png", "PNG", optimize=True)


def shop_avatar_black():
    """Black background, yellow PC monogram + diamond. 1000x1000."""
    s = 1000
    img = Image.new("RGB", (s, s), BG)
    d = ImageDraw.Draw(img)

    # Big PC monogram, centered, hi-vis
    fnt = f(FN_BLACK, 560)
    text = "PC"
    bbox = d.textbbox((0, 0), text, font=fnt)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    d.text(((s - tw) // 2 - bbox[0], (s - th) // 2 - bbox[1] - 30), text, fill=HI_VIS, font=fnt)

    # Diamond accent top
    ds = 60
    cx = s // 2
    dy = 80
    d.polygon(
        [(cx - ds // 2, dy + ds // 2), (cx, dy), (cx + ds // 2, dy + ds // 2), (cx, dy + ds)],
        fill=HI_VIS,
    )

    # Tagline at bottom
    tag = "PROJECTCALC"
    tag_fnt = f(FN_BLACK, 56)
    tbb = d.textbbox((0, 0), tag, font=tag_fnt)
    tw2 = tbb[2] - tbb[0]
    d.text(((s - tw2) // 2, s - 130), tag, fill=HI_VIS, font=tag_fnt)

    img.save(OUT / "shop_avatar_black.png", "PNG", optimize=True)


def main():
    print("Generating listing previews...")
    cover()
    print("  01_cover.png")
    whats_inside()
    print("  02_whats_inside.png")
    takeoff_mockup()
    print("  03_takeoff.png")
    quote_mockup()
    print("  04_quote.png")
    vent_pitch()
    print("  05_vent_pitch.png")
    shop_avatar_yellow()
    print("  shop_avatar_yellow.png")
    shop_avatar_black()
    print("  shop_avatar_black.png")
    print(f"Done. Output: {OUT}")


if __name__ == "__main__":
    main()
