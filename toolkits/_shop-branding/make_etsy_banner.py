"""Generate Etsy mini banner for the ProjectCalc shop.

Etsy mini banner spec: 1200 × 270 px (4.4:1)
Larger "big banner" / cover photo: 3360 × 840 px (4:1) — also produced.

Run: python make_etsy_banner.py
Output: dist/etsy_mini_banner.png  (1200 × 270)
        dist/etsy_big_banner.png   (3360 × 840)
"""

from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

OUT = Path(__file__).parent / "dist"
OUT.mkdir(parents=True, exist_ok=True)

# Brand
BG = (14, 14, 12)
BG_2 = (22, 22, 19)
LINE = (42, 42, 38)
INK = (244, 241, 234)
INK_2 = (184, 179, 167)
INK_3 = (118, 114, 106)
HI_VIS = (255, 212, 0)

FN_BLACK = "C:/Windows/Fonts/ariblk.ttf"
FN_REG = "C:/Windows/Fonts/arial.ttf"
FN_MONO = "C:/Windows/Fonts/consola.ttf"
FN_MONO_BOLD = "C:/Windows/Fonts/consolab.ttf"


def f(path, size):
    return ImageFont.truetype(path, size)


def text_centered(d, text, font, fill, cx, y):
    bbox = d.textbbox((0, 0), text, font=font)
    w = bbox[2] - bbox[0]
    d.text((cx - w // 2, y), text, fill=fill, font=font)


def text_right(d, text, font, fill, x_right, y):
    bbox = d.textbbox((0, 0), text, font=font)
    w = bbox[2] - bbox[0]
    d.text((x_right - w, y), text, fill=fill, font=font)


def draw_grid(d, W, H, step):
    for x in range(0, W, step):
        d.line([(x, 0), (x, H)], fill=(20, 20, 18), width=1)
    for y in range(0, H, step):
        d.line([(0, y), (W, y)], fill=(20, 20, 18), width=1)


def draw_diamond(d, x, y, size, fill):
    d.polygon(
        [(x, y + size // 2), (x + size // 2, y),
         (x + size, y + size // 2), (x + size // 2, y + size)],
        fill=fill,
    )


def banner(W, H, scale, out_name):
    """Render at the given dimensions. `scale` multiplies font sizes/spacing."""
    img = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(img)
    draw_grid(d, W, H, int(30 * scale))

    # Yellow accent panel on the right (~38% of width)
    accent_x = int(W * 0.62)
    d.rectangle([accent_x, 0, W, H], fill=HI_VIS)

    # Diamond + PROJECTCALC wordmark, top-left
    diamond_size = int(28 * scale)
    pad_x = int(40 * scale)
    pad_y = int(36 * scale)
    draw_diamond(d, pad_x, pad_y, diamond_size, HI_VIS)
    d.text(
        (pad_x + diamond_size + int(16 * scale), pad_y - int(6 * scale)),
        "PROJECTCALC",
        fill=INK,
        font=f(FN_BLACK, int(34 * scale)),
    )

    # Tagline immediately under the wordmark
    d.text(
        (pad_x, pad_y + int(56 * scale)),
        "MATH FOR ANY PROJECT.",
        fill=HI_VIS,
        font=f(FN_BLACK, int(48 * scale)),
    )

    # Sub-tag (one line about the shop)
    d.text(
        (pad_x, pad_y + int(118 * scale)),
        "Pro toolkits  ·  estimating spreadsheets  ·  contractor tools",
        fill=INK_2,
        font=f(FN_REG, int(22 * scale)),
    )

    # Bottom-left URL
    d.text(
        (pad_x, H - int(46 * scale)),
        "PROJECTCALC.APP",
        fill=HI_VIS,
        font=f(FN_BLACK, int(20 * scale)),
    )

    # Right yellow panel content — centered vertically
    panel_cx = (accent_x + W) // 2

    # Small mono header
    text_centered(
        d,
        "PRO TOOLKITS",
        f(FN_MONO_BOLD, int(20 * scale)),
        BG,
        panel_cx,
        int(48 * scale),
    )

    # Big $39
    text_centered(
        d,
        "$39",
        f(FN_BLACK, int(96 * scale)),
        BG,
        panel_cx,
        int(78 * scale),
    )

    # Compact list of trades on right panel
    text_centered(
        d,
        "HVAC · PLUMBING · FRAMING",
        f(FN_MONO_BOLD, int(15 * scale)),
        BG,
        panel_cx,
        H - int(76 * scale),
    )
    text_centered(
        d,
        "ELECTRICAL · CONCRETE · ROOFING",
        f(FN_MONO_BOLD, int(15 * scale)),
        BG,
        panel_cx,
        H - int(50 * scale),
    )

    # Vertical hi-vis stripe between panels
    stripe_w = max(2, int(2 * scale))
    d.rectangle([accent_x - stripe_w, 0, accent_x, H], fill=BG_2)

    img.save(OUT / out_name, "PNG", optimize=True)
    print(f"  {out_name}  ({W}×{H})")


def main():
    print("Generating Etsy banners...")
    # Mini banner: 1200 × 270
    banner(1200, 270, scale=1.0, out_name="etsy_mini_banner.png")
    # Big banner / cover photo: 3360 × 840 (same aspect 4:1, so scale ≈ 2.8)
    # Use the same template at 2.8x scale; the height is 840 vs 270 so vertical
    # padding scales differently. We honor the 4:1 instead by widening accent.
    banner(3360, 840, scale=3.0, out_name="etsy_big_banner.png")
    print(f"Done. Output: {OUT}")


if __name__ == "__main__":
    main()
