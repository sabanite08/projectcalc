"""Generate the bold marketing-splash cover for each Garage Ledger variant + the Vault.

Matches the style of toolkits/make_design_covers.py (used by the 4 trade toolkits)
but with a Garage Ledger layout: "GARAGE LEDGER" small on top, big variant tag in
hi-vis below, $XX chip, format badges, 7 TABS list, 3 bullets.

Run: python make_design_covers.py
Output: dist/<slug>/listing/01_cover_design.png per variant + dist/vault/listing/01_cover_design.png

After generation, upload at Etsy rank 1 with overwrite=true on each listing.
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
FN_REG = "C:/Windows/Fonts/arial.ttf"
FN_MONO_BOLD = "C:/Windows/Fonts/consolab.ttf"

GL_DIR = Path(__file__).parent


def f(path, size):
    return ImageFont.truetype(path, size)


def grid_bg(img):
    d = ImageDraw.Draw(img)
    for x in range(0, W, 60):
        d.line([(x, 0), (x, H)], fill=(20, 20, 18), width=1)
    for y in range(0, H, 60):
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
    d.text((100, y + 24), "PROJECTCALC.APP  ·  GARAGE LEDGER", fill=HI_VIS, font=f(FN_BLACK, 26))
    text_right(d, "MATH FOR ANY PROJECT", f(FN_MONO_BOLD, 22), INK_3, W - 100, y + 28)


def cover(variant_tag, tagline, tabs_line, bullets, price, out_path):
    img = Image.new("RGB", (W, H), BG)
    grid_bg(img)
    d = ImageDraw.Draw(img)

    # Yellow vertical bar top-right
    d.rectangle([W - 80, 0, W, 320], fill=HI_VIS)

    # Brand
    projectcalc_header(d)
    d.text((100, 165), "GARAGE LEDGER  ·  v1", fill=HI_VIS, font=f(FN_MONO_BOLD, 28))

    # "GARAGE LEDGER" subtitle (small, ink) above the big variant tag
    d.text((100, 380), "GARAGE LEDGER", fill=INK, font=f(FN_BLACK, 100))

    # Big variant tag in hi-vis. Hold at 200pt for short-to-medium names
    # (matches the trade-toolkit cover convention). Scale down for 13+ char
    # names to keep them inside the right-side yellow accent bar at x=1920.
    n = len(variant_tag)
    if n <= 12:
        tag_size = 200
    elif n <= 14:
        tag_size = 165
    else:
        tag_size = 135
    d.text((100, 520), variant_tag, fill=HI_VIS, font=f(FN_BLACK, tag_size))

    # Tagline
    d.text((100, 1080), tagline, fill=INK_2, font=f(FN_REG, 36))

    # Price chip
    panel(d, 100, 1180, 360, 180, fill=HI_VIS, border=HI_VIS)
    text_centered(d, price, f(FN_BLACK, 110), BG, 100 + 180, 1195)
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

    # 7 TABS
    d.text((100, 1450), "7 TABS", fill=HI_VIS, font=f(FN_BLACK, 36))
    d.text((100, 1510), tabs_line, fill=INK, font=f(FN_MONO_BOLD, 24))

    # Bullets
    by = 1610
    for b in bullets:
        d.text((100, by), b, fill=INK_2, font=f(FN_REG, 30))
        by += 50

    footer(d)
    out_path.parent.mkdir(parents=True, exist_ok=True)
    img.save(out_path, "PNG", optimize=True)
    print(f"  -> {out_path.relative_to(GL_DIR)}  ({out_path.stat().st_size // 1024} KB)")


TABS_LINE = "README · BUILD INFO · EXPENSE LOG · PARTS · TIMELINE · DASHBOARD · ROI"

# All 6 variants get the same 3 bullets (it's the same workbook structure)
SHARED_BULLETS = [
    "→  Log every receipt — DASHBOARD auto-pivots spend by category + month",
    "→  DIY hours × your shop rate = true labor value baked into ROI math",
    "→  5 sale-comp rows + break-even price + ROI-target sale calc",
]

COVERS = [
    {"slug": "master",        "tag": "PRO.",            "tagline": "Track every dollar in your build.",                       "price": "$39"},
    {"slug": "ls-swap",       "tag": "LS SWAP.",        "tagline": "LS engine, T56, harness, tune — cost-track it all.",       "price": "$59"},
    {"slug": "cummins-swap",  "tag": "CUMMINS SWAP.",   "tagline": "12V / 24V / CR Cummins conversion takeoff.",               "price": "$59"},
    {"slug": "overland",      "tag": "OVERLAND RIG.",   "tagline": "Lift, rack, sleep, recovery, comms — every line.",         "price": "$59"},
    {"slug": "restomod",      "tag": "RESTOMOD.",       "tagline": "Classic chassis, modern drivetrain — every receipt.",      "price": "$59"},
    {"slug": "track-build",   "tag": "TRACK BUILD.",    "tagline": "Cage, brakes, suspension, seat — track-day budget.",       "price": "$59"},
    {"slug": "vault",         "tag": "THE VAULT.",      "tagline": "All 6 ledgers — Pro + 5 build-type variants.",             "price": "$129"},
]


def main():
    print("Generating Garage Ledger design covers...")
    for cfg in COVERS:
        out_path = GL_DIR / "dist" / cfg["slug"] / "listing" / "01_cover_design.png"
        cover(cfg["tag"], cfg["tagline"], TABS_LINE, SHARED_BULLETS, cfg["price"], out_path)
    print("\nDone.")


if __name__ == "__main__":
    main()
