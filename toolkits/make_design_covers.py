"""Generate the bold-marketing-splash design cover for the 4 new toolkits.

Matches the style of toolkits/concrete-pro/make_listing_images.py::cover() so
the Painting/Drywall/Deck/Flooring listings have the same thumbnail style as
the original 6.

Run: python make_design_covers.py
Output: dist/listing/01_cover_design.png inside each toolkit folder.
"""

from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

W = H = 2000

BG = (14, 14, 12)
BG_2 = (22, 22, 19)
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

TOOLKITS_DIR = Path(__file__).parent


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


def cover(trade, tagline, sheets_line, bullets, out_path):
    img = Image.new("RGB", (W, H), BG)
    grid_bg(img)
    d = ImageDraw.Draw(img)

    # Yellow vertical bar top-right
    d.rectangle([W - 80, 0, W, 320], fill=HI_VIS)

    # Brand
    projectcalc_header(d)
    d.text((100, 165), "PRO TOOLKIT  ·  v1", fill=HI_VIS, font=f(FN_MONO_BOLD, 28))

    # Big title block — hold trade size at 200pt to match the row spacing of
    # the existing 6 listings (rows hardcoded at y=380, 590, 810).
    d.text((100, 380), trade, fill=INK, font=f(FN_BLACK, 200))
    d.text((100, 590), "PRO", fill=INK, font=f(FN_BLACK, 240))
    d.text((100, 810), "TOOLKIT.", fill=HI_VIS, font=f(FN_BLACK, 240))

    # Tagline
    d.text((100, 1080), tagline, fill=INK_2, font=f(FN_REG, 38))

    # $39 chip
    panel(d, 100, 1180, 360, 180, fill=HI_VIS, border=HI_VIS)
    text_centered(d, "$39", f(FN_BLACK, 110), BG, 100 + 180, 1195)
    text_centered(d, "INSTANT DOWNLOAD", f(FN_MONO_BOLD, 22), BG, 100 + 180, 1320)

    # Format badges
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

    # 7 sheets
    d.text((100, 1450), "7 SHEETS", fill=HI_VIS, font=f(FN_BLACK, 36))
    d.text((100, 1510), sheets_line, fill=INK, font=f(FN_MONO_BOLD, 26))

    # Bullets
    by = 1610
    for b in bullets:
        d.text((100, by), b, fill=INK_2, font=f(FN_REG, 30))
        by += 50

    footer(d)
    out_path.parent.mkdir(parents=True, exist_ok=True)
    img.save(out_path, "PNG", optimize=True)
    print(f"  -> {out_path.relative_to(TOOLKITS_DIR)}  ({out_path.stat().st_size // 1024} KB)")


# ── Per-toolkit content ─────────────────────────────────────────────────────
TOOLKITS = [
    {
        "folder": "painting-pro",
        "trade": "PAINTING",
        "tagline": "Room takeoff  ·  gallons  ·  labor hours  ·  customer quote",
        "sheets": "README · INPUTS · SURFACES · PAINT · LABOR · PRICING · QUOTE",
        "bullets": [
            "->  Net wall + ceiling sq ft per room - doors/windows auto-deducted",
            "->  Gallons by surface with texture factor (smooth 1.0x -> popcorn 1.5x)",
            "->  Prep-level multiplier (1.0x light -> 3.0x lead-safe RRP) on labor",
        ],
    },
    {
        "folder": "drywall-pro",
        "trade": "DRYWALL",
        "tagline": "Sheets  ·  mud  ·  tape  ·  screws  ·  GA-214 customer quote",
        "sheets": "README · INPUTS · SURFACES · MATERIALS · LABOR · PRICING · QUOTE",
        "bullets": [
            "->  Sheets by 1/2\" vs 5/8\" type X with waste (residential / fire-rated)",
            "->  Mud + tape + screws + corner bead, scaled by GA-214 finish L1-L5",
            "->  Hang + tape/mud + sand hours with RSMeans-aligned rates",
        ],
    },
    {
        "folder": "deck-pro",
        "trade": "DECK",
        "tagline": "Joists  ·  footings  ·  decking  ·  railing  ·  print-ready quote",
        "sheets": "README · INPUTS · STRUCTURE · DECKING · LABOR · PRICING · QUOTE",
        "bullets": [
            "->  Joist + beam + post + footing counts + concrete CY with waste",
            "->  Decking material switcher (PT / Composite / Hardwood) auto-prices",
            "->  IRC R312 balusters at 4\" max sphere passage + stair stringers",
        ],
    },
    {
        "folder": "flooring-pro",
        "trade": "FLOORING",
        "tagline": "LVP  ·  Tile  ·  Hardwood  ·  Carpet  ·  Vinyl  -  full takeoff + quote",
        "sheets": "README · INPUTS · ROOMS · MATERIALS · LABOR · PRICING · QUOTE",
        "bullets": [
            "->  Material switcher pulls per-sf pricing, install rate, supplemental list",
            "->  Boxes with waste factor (8-15% by material) + transitions",
            "->  Thinset/grout for tile, pad for carpet, cleats for hardwood",
        ],
    },
]


def main():
    print("Generating design covers...")
    for cfg in TOOLKITS:
        out_path = TOOLKITS_DIR / cfg["folder"] / "dist" / "listing" / "01_cover_design.png"
        cover(cfg["trade"], cfg["tagline"], cfg["sheets"], cfg["bullets"], out_path)
    print("\nDone.")


if __name__ == "__main__":
    main()
