"""Generate Etsy listing preview images for Electrical Pro Toolkit.

Run: python make_listing_images.py
Output: dist/listing/01_cover.png ... 05_branch_ref.png  (2000x2000 each)
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

    d.text((100, 380), "ELECTRICAL", fill=INK, font=f(FN_BLACK, 168))
    d.text((100, 590), "PRO", fill=INK, font=f(FN_BLACK, 240))
    d.text((100, 810), "TOOLKIT.", fill=HI_VIS, font=f(FN_BLACK, 240))

    d.text(
        (100, 1080),
        "NEC 220 panel load  ·  branch circuits  ·  voltage drop  ·  quote",
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
    sheets = "README · INPUTS · PANEL-LOAD · BRANCH-CIRCUITS · VOLTAGE-DROP · PRICING · QUOTE"
    d.text((100, 1510), sheets, fill=INK, font=f(FN_MONO_BOLD, 24))

    bullets = [
        "→  NEC 220 Part III standard-method service-load calc with demand factors",
        "→  20 branch circuits pre-mapped: AWG, ampacity, breaker, AFCI/GFCI",
        "→  Voltage-drop check with copper K = 12.9 — flags any branch over 3%",
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
        ("README",          "Quick-start guide and what each sheet does"),
        ("INPUTS",          "Yellow cells: floor area, voltage, fixed appliances"),
        ("PANEL-LOAD",      "NEC 220 standard method, 100/200/400A pick"),
        ("BRANCH-CIRCUITS", "20 circuits + AWG, breaker, AFCI/GFCI, conduit fill"),
        ("VOLTAGE-DROP",    "VD = 2·K·I·L/cmil — flags branches > 3% drop"),
        ("PRICING",         "Editable wire, breaker, device, panel unit costs"),
        ("QUOTE",           "Print-ready customer quote with margin + tax"),
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


def panel_load_mockup():
    img = Image.new("RGB", (W, H), BG)
    grid_bg(img); d = ImageDraw.Draw(img)

    projectcalc_header(d)
    d.text((100, 230), "PREVIEW  ·  PANEL-LOAD SHEET", fill=HI_VIS, font=f(FN_MONO_BOLD, 28))
    d.text((100, 280), "NEC 220 service", fill=INK, font=f(FN_BLACK, 96))
    d.text((100, 390), "calc, automated.", fill=HI_VIS, font=f(FN_BLACK, 96))

    sx, sy, sw = 100, 560, W - 200

    d.rectangle([sx, sy, sx + sw, sy + 70], fill=HI_VIS)
    fnt = f(FN_BLACK, 32)
    d.text((sx + 24, sy + 18), "PROJECTCALC", fill=BG, font=fnt)
    pc_bbox = d.textbbox((sx + 24, sy + 18), "PROJECTCALC", font=fnt)
    ds = 18
    dx = pc_bbox[2] + 28
    dy = sy + 28
    d.polygon([(dx, dy + ds // 2), (dx + ds // 2, dy), (dx + ds, dy + ds // 2), (dx + ds // 2, dy + ds)], fill=BG)
    d.text((dx + ds + 28, sy + 18), "NEC 220 SERVICE LOAD", fill=BG, font=fnt)
    d.rectangle([sx, sy + 70, sx + sw, sy + 110], fill=BG)
    d.text((sx + 24, sy + 80), "Standard method, single-phase 240/120 dwelling", fill=HI_VIS, font=f(FN_MONO, 22))

    panel_white = (246, 246, 242)
    panel_lighter = (250, 250, 247)
    text_dark = (14, 14, 12)

    cols = [("LOAD", 60), ("RATED VA", 720), ("DEMAND %", 1000), ("DEMAND VA", 1280)]
    rows = [
        ("General lighting (3 VA × 1,800 sf)",  "5,400",   "—",     "5,400"),
        ("Small-appliance × 2 (1,500 ea)",      "3,000",   "—",     "3,000"),
        ("Laundry (1,500)",                      "1,500",  "—",     "1,500"),
        ("→ Lighting after demand (220.42)",     "—",       "100/35", "5,790"),
        ("Electric range",                       "8,000",   "75%",   "6,000"),
        ("Electric dryer",                       "5,000",   "100%",  "5,000"),
        ("Heat pump",                            "7,200",   "100%",  "7,200"),
        ("Water heater",                         "4,500",   "100%",  "4,500"),
        ("EV charger 40A",                       "9,600",   "100%",  "9,600"),
        ("Dishwasher / disposal / micro",        "3,600",   "75%",   "2,700"),
    ]

    rh = 70
    ry = sy + 130

    d.rectangle([sx, ry, sx + sw, ry + rh], fill=BG_3, outline=LINE, width=2)
    for label, x_off in cols:
        d.text((sx + x_off, ry + 22), label, fill=HI_VIS, font=f(FN_MONO_BOLD, 24))
    ry += rh

    for i, (item, va, dem, dva) in enumerate(rows):
        bg = panel_lighter if i % 2 == 0 else panel_white
        d.rectangle([sx, ry, sx + sw, ry + rh], fill=bg, outline=(220, 220, 215), width=1)
        d.text((sx + 60, ry + 20), item, fill=text_dark, font=f(FN_REG, 26))
        text_right(d, va, f(FN_MONO_BOLD, 26), text_dark, sx + 940, ry + 18)
        d.text((sx + 1000, ry + 22), dem, fill=text_dark, font=f(FN_MONO, 24))
        text_right(d, dva, f(FN_MONO_BOLD, 26), text_dark, sx + 1640, ry + 18)
        ry += rh

    # Totals stripe
    d.rectangle([sx, ry, sx + sw, ry + 90], fill=HI_VIS)
    d.text((sx + 60, ry + 24), "SERVICE TOTAL  →", fill=BG, font=f(FN_BLACK, 32))
    text_right(d, "46,190 VA / 192 A", f(FN_BLACK, 36), BG, sx + 1640, ry + 22)
    d.text((sx + 60, ry + 130), "→ Recommended service: 200A panel  ·  4% headroom",
           fill=INK, font=f(FN_MONO_BOLD, 28))

    footer(d)
    img.save(OUT / "03_panel_load.png", "PNG", optimize=True)


def quote_mockup():
    img = Image.new("RGB", (W, H), BG)
    grid_bg(img); d = ImageDraw.Draw(img)

    projectcalc_header(d)
    d.text((100, 230), "PREVIEW  ·  QUOTE SHEET", fill=HI_VIS, font=f(FN_MONO_BOLD, 28))
    d.text((100, 280), "Print-ready", fill=INK, font=f(FN_BLACK, 96))
    d.text((100, 390), "service quote.", fill=HI_VIS, font=f(FN_BLACK, 96))

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
    d.text((dx + ds + 28, sy + 26), "ELECTRICAL QUOTE", fill=BG, font=fnt)

    d.text((sx + 30, sy + 120), "PREPARED FOR", fill=(120, 120, 115), font=f(FN_MONO_BOLD, 18))
    d.text((sx + 30, sy + 150), "Mr. & Mrs. Chen", fill=text_dark, font=f(FN_BLACK, 32))
    d.text((sx + 30, sy + 196), "412 Maple Ave  ·  200A service swap + EV charger circuit", fill=text_dark, font=f(FN_REG, 22))

    text_right(d, "QUOTE #2026-031", f(FN_MONO_BOLD, 22), text_dark, sx + sw - 30, sy + 130)
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
        ("200A main breaker panel (40 spc)",       "1 ea",   "$485.00", "$485.00"),
        ("Whole-house surge protector",            "1 ea",   "$185.00", "$185.00"),
        ("Standard 15/20A breakers",               "18 ea",  "$8.00",   "$144.00"),
        ("AFCI 15A breakers",                      "4 ea",   "$48.00",  "$192.00"),
        ("AFCI 20A breakers",                      "6 ea",   "$52.00",  "$312.00"),
        ("2-pole 50A (range + EV)",                "2 ea",   "$35.00",  "$70.00"),
        ("Romex 12/2 NM-B (250 ft coil)",          "3 ea",   "$145.00", "$435.00"),
        ("Romex 8/3 NM-B (125 ft coil)",           "1 ea",   "$320.00", "$320.00"),
        ("Receptacles 15A TR",                     "42 ea",  "$3.50",   "$147.00"),
        ("GFCI receptacles (kitchen + bath)",      "8 ea",   "$18.00",  "$144.00"),
        ("EV charger 14-50 outlet",                "1 ea",   "$32.00",  "$32.00"),
        ("Service swap labor (lead, 18 hr)",       "18 hr",  "$115.00", "$2,070.00"),
        ("Service swap labor (helper, 18 hr)",     "18 hr",  "$65.00",  "$1,170.00"),
        ("Branch circuit labor (50 devices)",      "50 ea",  "$85.00",  "$4,250.00"),
        ("Permit + inspection",                    "1 ea",   "$275.00", "$275.00"),
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
        ("Materials + labor", "$10,231.00"),
        ("Margin (25%)",      "$2,557.75"),
        ("Tax (7%)",          "$895.21"),
    ]
    for lbl, v in totals:
        d.text((sx + 1000, ry), lbl, fill=text_dark, font=f(FN_REG, 26))
        text_right(d, v, f(FN_MONO_BOLD, 26), text_dark, sx + sw - 50, ry)
        ry += 44

    ry += 10
    d.rectangle([sx + 30, ry, sx + sw - 30, ry + 80], fill=HI_VIS)
    d.text((sx + 50, ry + 22), "TOTAL DUE", fill=BG, font=f(FN_BLACK, 32))
    text_right(d, "$13,683.96", f(FN_BLACK, 38), BG, sx + sw - 50, ry + 18)

    footer(d)
    img.save(OUT / "04_quote.png", "PNG", optimize=True)


def branch_ref():
    """Branch circuit + voltage-drop reference."""
    img = Image.new("RGB", (W, H), BG)
    grid_bg(img); d = ImageDraw.Draw(img)

    projectcalc_header(d)
    d.text((100, 230), "PREVIEW  ·  CIRCUITS + V-DROP", fill=HI_VIS, font=f(FN_MONO_BOLD, 28))
    d.text((100, 280), "Code-aware", fill=INK, font=f(FN_BLACK, 96))
    d.text((100, 390), "by default.", fill=HI_VIS, font=f(FN_BLACK, 96))

    # ── BRANCH ──
    sx, sy, sw, sh = 100, 560, W - 200, 600
    d.rectangle([sx, sy, sx + sw, sy + 70], fill=HI_VIS)
    d.text((sx + 24, sy + 18), "BRANCH CIRCUITS  ·  NEC 310.16 + 240.6", fill=BG, font=f(FN_BLACK, 30))
    panel(d, sx, sy + 70, sw, sh - 70, fill=BG_2, border=LINE)

    th_y = sy + 110
    d.text((sx + 60, th_y),  "CIRCUIT",  fill=HI_VIS, font=f(FN_MONO_BOLD, 22))
    d.text((sx + 700, th_y), "AWG",      fill=HI_VIS, font=f(FN_MONO_BOLD, 22))
    d.text((sx + 880, th_y), "BREAKER",  fill=HI_VIS, font=f(FN_MONO_BOLD, 22))
    d.text((sx + 1100, th_y),"OCPD",     fill=HI_VIS, font=f(FN_MONO_BOLD, 22))
    d.text((sx + 1320, th_y),"CODE NOTE",fill=HI_VIS, font=f(FN_MONO_BOLD, 22))
    th_y += 44
    d.line([(sx + 30, th_y), (sx + sw - 30, th_y)], fill=LINE, width=2)
    th_y += 14

    branch = [
        ("Lighting (general)",     "14", "15A", "STD",  "Most rooms"),
        ("Receptacles (general)",  "12", "20A", "AFCI", "210.12"),
        ("Bathroom",               "12", "20A", "GFCI", "210.8(A)"),
        ("Kitchen SAB (×2)",       "12", "20A", "GFCI", "210.52(B)"),
        ("Range",                  "8",  "40A", "STD",  "≥ 8.75 kW"),
        ("Dryer",                  "10", "30A", "STD",  "NEMA 14-30"),
        ("AC condenser (3T)",      "10", "30A", "HACR", "Per nameplate"),
        ("EV charger (40A cont)",  "8",  "50A", "GFCI", "625.42, 125%"),
    ]
    rh2 = 56
    for i, (circ, awg, br, ocpd, note) in enumerate(branch):
        ry = th_y + i * rh2
        if i % 2 == 0:
            d.rectangle([sx + 30, ry - 4, sx + sw - 30, ry + rh2 - 4], fill=BG_3)
        d.text((sx + 60, ry + 6),   circ,  fill=INK,    font=f(FN_REG, 24))
        d.text((sx + 700, ry + 6),  awg,   fill=HI_VIS, font=f(FN_MONO_BOLD, 26))
        d.text((sx + 880, ry + 6),  br,    fill=INK,    font=f(FN_MONO_BOLD, 26))
        d.text((sx + 1100, ry + 6), ocpd,  fill=INK_2,  font=f(FN_MONO, 24))
        d.text((sx + 1320, ry + 6), note,  fill=INK_3,  font=f(FN_REG, 22))

    # ── VOLTAGE DROP ──
    px, py, pw, ph = 100, 1210, W - 200, 600
    d.rectangle([px, py, px + pw, py + 70], fill=HI_VIS)
    d.text((px + 24, py + 18), "VOLTAGE DROP  ·  VD = 2·K·I·L / CMIL  ·  K=12.9 COPPER", fill=BG, font=f(FN_BLACK, 26))
    panel(d, px, py + 70, pw, ph - 70, fill=BG_2, border=LINE)

    th_y = py + 110
    d.text((px + 60, th_y),   "CIRCUIT",       fill=HI_VIS, font=f(FN_MONO_BOLD, 22))
    d.text((px + 600, th_y),  "VOLTS",         fill=HI_VIS, font=f(FN_MONO_BOLD, 22))
    d.text((px + 780, th_y),  "AMPS",          fill=HI_VIS, font=f(FN_MONO_BOLD, 22))
    d.text((px + 960, th_y),  "LENGTH",        fill=HI_VIS, font=f(FN_MONO_BOLD, 22))
    d.text((px + 1180, th_y), "AWG",           fill=HI_VIS, font=f(FN_MONO_BOLD, 22))
    d.text((px + 1360, th_y), "% DROP",        fill=HI_VIS, font=f(FN_MONO_BOLD, 22))
    d.text((px + 1580, th_y), "STATUS",        fill=HI_VIS, font=f(FN_MONO_BOLD, 22))

    th_y += 44
    d.line([(px + 30, th_y), (px + pw - 30, th_y)], fill=LINE, width=2)
    th_y += 14

    vdrop = [
        ("EV charger",     "240V", "32A",  "75 ft",  "8",  "1.9%", "OK"),
        ("Sub-panel 60A",  "240V", "60A",  "120 ft", "6",  "2.8%", "OK"),
        ("Pool pump",      "240V", "12A",  "150 ft", "12", "1.4%", "OK"),
        ("Garage receps",  "120V", "16A",  "60 ft",  "12", "3.2%", "UPSIZE"),
    ]
    for i, (circ, v, a, l, awg, pct, status) in enumerate(vdrop):
        ry = th_y + i * rh2
        if i % 2 == 0:
            d.rectangle([px + 30, ry - 4, px + pw - 30, ry + rh2 - 4], fill=BG_3)
        d.text((px + 60, ry + 6),   circ,   fill=INK,    font=f(FN_REG, 24))
        d.text((px + 600, ry + 6),  v,      fill=INK,    font=f(FN_MONO, 24))
        d.text((px + 780, ry + 6),  a,      fill=INK,    font=f(FN_MONO, 24))
        d.text((px + 960, ry + 6),  l,      fill=INK,    font=f(FN_MONO, 24))
        d.text((px + 1180, ry + 6), awg,    fill=HI_VIS, font=f(FN_MONO_BOLD, 26))
        d.text((px + 1360, ry + 6), pct,    fill=INK,    font=f(FN_MONO_BOLD, 26))
        clr = (220, 60, 60) if status == "UPSIZE" else (60, 180, 90)
        d.text((px + 1580, ry + 6), status, fill=clr,    font=f(FN_MONO_BOLD, 24))

    d.text((px + 30, py + ph - 60),
           "Toolkit auto-flags any branch over 3% drop. Upsize one AWG step per doubling above the limit.",
           fill=INK_3, font=f(FN_MONO, 22))

    footer(d)
    img.save(OUT / "05_branch_ref.png", "PNG", optimize=True)


def main():
    print("Generating Electrical listing previews...")
    cover(); print("  01_cover.png")
    whats_inside(); print("  02_whats_inside.png")
    panel_load_mockup(); print("  03_panel_load.png")
    quote_mockup(); print("  04_quote.png")
    branch_ref(); print("  05_branch_ref.png")
    print(f"Done. Output: {OUT}")


if __name__ == "__main__":
    main()
