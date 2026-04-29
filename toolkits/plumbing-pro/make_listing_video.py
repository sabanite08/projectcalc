"""Generate Etsy listing video for Plumbing Pro Toolkit.

~9 sec, 1080×1080, 30 fps, MP4 (H.264, no audio).

Run: python make_listing_video.py
Output: dist/listing/06_video.mp4
"""

from pathlib import Path
import numpy as np
import imageio.v2 as iio
from PIL import Image, ImageDraw, ImageFont

OUT = Path(__file__).parent / "dist" / "listing"
OUT.mkdir(parents=True, exist_ok=True)

# ── Canvas ──
W = H = 1080
FPS = 30
DURATION = 9.5  # seconds
N_FRAMES = int(FPS * DURATION)

# ── Brand ──
BG = (14, 14, 12)
BG_2 = (22, 22, 19)
BG_3 = (31, 31, 28)
LINE = (42, 42, 38)
INK = (244, 241, 234)
INK_2 = (184, 179, 167)
INK_3 = (118, 114, 106)
HI_VIS = (255, 212, 0)

# ── Fonts ──
FN_BLACK = "C:/Windows/Fonts/ariblk.ttf"
FN_BOLD = "C:/Windows/Fonts/arialbd.ttf"
FN_REG = "C:/Windows/Fonts/arial.ttf"
FN_MONO = "C:/Windows/Fonts/consola.ttf"
FN_MONO_BOLD = "C:/Windows/Fonts/consolab.ttf"


def f(path, size):
    return ImageFont.truetype(path, size)


def grid_bg(d):
    step = 60
    for x in range(0, W, step):
        d.line([(x, 0), (x, H)], fill=(20, 20, 18), width=1)
    for y in range(0, H, step):
        d.line([(0, y), (W, y)], fill=(20, 20, 18), width=1)


def projectcalc_header(d, x=60, y=50):
    s = 22
    d.polygon(
        [(x, y + s // 2), (x + s // 2, y), (x + s, y + s // 2), (x + s // 2, y + s)],
        fill=HI_VIS,
    )
    d.text((x + s + 14, y - 4), "PROJECTCALC", fill=INK, font=f(FN_BLACK, 26))


def text_centered(d, text, font, fill, cx, y):
    bbox = d.textbbox((0, 0), text, font=font)
    w = bbox[2] - bbox[0]
    d.text((cx - w // 2, y), text, fill=fill, font=font)


def text_right(d, text, font, fill, x_right, y):
    bbox = d.textbbox((0, 0), text, font=font)
    w = bbox[2] - bbox[0]
    d.text((x_right - w, y), text, fill=fill, font=font)


def lerp(a, b, t):
    return a + (b - a) * t


def ease_out(t):
    return 1 - (1 - t) ** 3


def ease_in_out(t):
    return 3 * t * t - 2 * t * t * t


# ──────────────────────────────────────────────────────────────────────
# CONTENT (HVAC-specific) — change these to make a video for another tk
# ──────────────────────────────────────────────────────────────────────
# TITLE_LINES: list of (text, color, font_size). Stacked top-to-bottom on the title slide.
TITLE_LINES = [
    ("PLUMBING", "INK", 130),
    ("PRO TOOLKIT.", "HI_VIS", 110),
]
TAGLINE = "WSFU + DFU · Pipe sizing · IPC vent · Quote"

# Inputs that "type in" during phase 2
INPUT_ROWS = [
    ("Bathrooms",          "2"),
    ("Stories",            "2"),
    ("Service pressure",   "60 psi"),
    ("Water closets",      "2 ea"),
    ("Lavatories",         "4 ea"),
    ("Kitchen + laundry",  "Yes"),
]

# Results that animate in during phase 3
RESULT_ROWS = [
    ("TOTAL WSFU",     "21.8"),
    ("TOTAL DFU",      "26.0"),
    ("SERVICE MAIN",   "1 in"),
    ("BUILDING DRAIN", "4 in"),
]

GRAND_TOTAL_LABEL = "QUOTE TOTAL"
GRAND_TOTAL_VALUE = "$7,954"

# ──────────────────────────────────────────────────────────────────────
# Phases
# ──────────────────────────────────────────────────────────────────────
P1_END = 1.5   # title
P2_END = 5.0   # inputs typing
P3_END = 8.0   # results reveal
P4_END = 9.5   # outro


def frame_title(t_local):
    """Phase 1: brand title slide. t_local in [0..P1_END]."""
    img = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(img)
    grid_bg(d)
    projectcalc_header(d)

    # Yellow accent bar that sweeps in
    sweep = ease_out(min(1.0, t_local / 0.6))
    bar_w = int(8 * sweep)
    d.rectangle([60, 220, 60 + 220 * sweep, 220 + 12], fill=HI_VIS)

    # Title fade-in/slide-up
    title_t = max(0.0, min(1.0, (t_local - 0.2) / 0.7))
    eased = ease_out(title_t)
    y_offset = int(40 * (1 - eased))
    alpha = int(255 * eased)

    # Render onto an alpha layer; stack TITLE_LINES top-to-bottom
    layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ld = ImageDraw.Draw(layer)
    color_map = {"INK": INK, "HI_VIS": HI_VIS, "INK_2": INK_2}
    y = 280
    for text, color_name, size in TITLE_LINES:
        color = color_map[color_name]
        ld.text((60, y + y_offset), text, fill=(*color, alpha), font=f(FN_BLACK, size))
        y += int(size * 1.07)

    # Tagline appears slightly later
    tag_t = max(0.0, min(1.0, (t_local - 0.7) / 0.6))
    tag_alpha = int(255 * ease_out(tag_t))
    ld.text((60, 620), TAGLINE, fill=(*INK_2, tag_alpha), font=f(FN_REG, 30))

    # PRO TOOLKIT badge
    badge_t = max(0.0, min(1.0, (t_local - 0.9) / 0.5))
    if badge_t > 0:
        badge_alpha = int(255 * ease_out(badge_t))
        ld.text((60, 180), "PRO TOOLKIT  ·  v1", fill=(*HI_VIS, badge_alpha), font=f(FN_MONO_BOLD, 22))

    img = Image.alpha_composite(img.convert("RGBA"), layer).convert("RGB")
    d = ImageDraw.Draw(img)

    # $39 chip in lower right (stays for the whole video)
    chip_t = max(0.0, min(1.0, (t_local - 1.0) / 0.4))
    if chip_t > 0:
        cx, cy, cw, ch = W - 260, H - 200, 200, 110
        d.rectangle([cx, cy, cx + cw, cy + ch], fill=HI_VIS)
        text_centered(d, "$39", f(FN_BLACK, 56), BG, cx + cw // 2, cy + 12)
        text_centered(d, "INSTANT", f(FN_MONO_BOLD, 14), BG, cx + cw // 2, cy + 78)

    return img


def frame_inputs(t_local, t_global):
    """Phase 2: inputs typing in. t_local in [0..P2_END-P1_END]."""
    img = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(img)
    grid_bg(d)
    projectcalc_header(d)

    # Section title
    d.rectangle([60, 130, 280, 138], fill=HI_VIS)
    d.text((60, 150), "INPUTS", fill=INK, font=f(FN_BLACK, 56))
    d.text((60, 218), "Type your project numbers.", fill=INK_2, font=f(FN_REG, 26))

    # Render an Excel-style mini-table of inputs filling in
    sx, sy, sw = 60, 290, W - 120
    rh = 80

    # Header bar
    d.rectangle([sx, sy, sx + sw, sy + 50], fill=BG_2, outline=LINE, width=1)
    d.text((sx + 22, sy + 14), "FIELD", fill=HI_VIS, font=f(FN_MONO_BOLD, 22))
    d.text((sx + 580, sy + 14), "VALUE", fill=HI_VIS, font=f(FN_MONO_BOLD, 22))

    # Rows reveal one at a time, with typing on the value
    n_rows = len(INPUT_ROWS)
    available_time = (P2_END - P1_END) - 0.4  # leave a little buffer
    per_row_t = available_time / n_rows

    for i, (label, value) in enumerate(INPUT_ROWS):
        ry = sy + 50 + i * rh
        # Row appears when its time slot opens
        row_local = t_local - i * per_row_t
        if row_local < 0:
            continue
        slide_t = ease_out(min(1.0, row_local / 0.15))
        x_offset = int(40 * (1 - slide_t))
        alpha = int(255 * slide_t)

        # Row background — light panel
        bg = (246, 246, 242) if i % 2 == 0 else (250, 250, 247)
        d.rectangle([sx + x_offset, ry, sx + sw, ry + rh - 4], fill=bg, outline=(220, 220, 215), width=1)

        # Label
        d.text((sx + 22 + x_offset, ry + 22), label, fill=(20, 20, 20), font=f(FN_REG, 28))

        # Value cell — yellow background ("input cell")
        vx = sx + 560
        d.rectangle([vx, ry + 8, sx + sw - 10, ry + rh - 12], fill=HI_VIS, outline=(200, 160, 0), width=2)

        # Typing animation on value
        typing_t = max(0.0, min(1.0, (row_local - 0.15) / 0.4))
        chars_to_show = int(len(value) * ease_out(typing_t))
        shown = value[:chars_to_show]
        d.text((vx + 16, ry + 22), shown, fill=BG, font=f(FN_MONO_BOLD, 26))

        # Blinking cursor while typing in progress
        if 0 < typing_t < 1.0:
            cursor_visible = int(t_global * FPS) % 8 < 4  # ~0.13s on/off
            if cursor_visible:
                bbox = d.textbbox((0, 0), shown, font=f(FN_MONO_BOLD, 26))
                cw = bbox[2] - bbox[0]
                d.rectangle([vx + 18 + cw, ry + 24, vx + 22 + cw, ry + rh - 18], fill=BG)

    # $39 chip — corner, persistent
    cx, cy, cw, ch = W - 260, H - 200, 200, 110
    d.rectangle([cx, cy, cx + cw, cy + ch], fill=HI_VIS)
    text_centered(d, "$39", f(FN_BLACK, 56), BG, cx + cw // 2, cy + 12)
    text_centered(d, "INSTANT", f(FN_MONO_BOLD, 14), BG, cx + cw // 2, cy + 78)

    return img


def frame_results(t_local, t_global):
    """Phase 3: results animate in. t_local in [0..P3_END-P2_END]."""
    img = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(img)
    grid_bg(d)
    projectcalc_header(d)

    d.rectangle([60, 130, 380, 138], fill=HI_VIS)
    d.text((60, 150), "RESULTS", fill=INK, font=f(FN_BLACK, 56))
    d.text((60, 218), "Auto-calculated, every cell.", fill=INK_2, font=f(FN_REG, 26))

    # Big result tiles — 2x2 grid
    grid_x, grid_y = 60, 280
    tile_w, tile_h = (W - 120 - 30) // 2, 130
    gap = 30

    n_results = len(RESULT_ROWS)
    available_time = 1.6
    per_tile_t = available_time / n_results

    for i, (label, value) in enumerate(RESULT_ROWS):
        col, row = i % 2, i // 2
        tx = grid_x + col * (tile_w + gap)
        ty = grid_y + row * (tile_h + gap)

        local = t_local - i * (per_tile_t * 0.6)
        if local < 0:
            continue
        # Slide up + fade in
        slide_t = ease_out(min(1.0, local / 0.35))
        y_off = int(30 * (1 - slide_t))
        alpha = int(255 * slide_t)

        layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        ld = ImageDraw.Draw(layer)
        ld.rectangle([tx, ty + y_off, tx + tile_w, ty + tile_h + y_off],
                     fill=(*BG_2, alpha), outline=(*LINE, alpha), width=2)
        ld.text((tx + 22, ty + 18 + y_off), label, fill=(*HI_VIS, alpha), font=f(FN_MONO_BOLD, 20))
        ld.text((tx + 22, ty + 56 + y_off), value, fill=(*INK, alpha), font=f(FN_BLACK, 36))

        img = Image.alpha_composite(img.convert("RGBA"), layer).convert("RGB")
        d = ImageDraw.Draw(img)

    # Grand total — slams in last with a satisfying hit
    grand_local = t_local - 1.6
    if grand_local > 0:
        # Scale-bounce effect
        bounce_t = min(1.0, grand_local / 0.5)
        # Overshoot then settle
        if bounce_t < 0.6:
            scale = 0.7 + 0.5 * (bounce_t / 0.6)
        else:
            scale = 1.2 - 0.2 * ((bounce_t - 0.6) / 0.4)

        # Grand total bar
        bx, by = 60, 720
        bw, bh = W - 120, 140
        # Animate from center (scale)
        cx_b = bx + bw // 2
        cy_b = by + bh // 2
        scaled_w = int(bw * scale)
        scaled_h = int(bh * scale)
        d.rectangle([cx_b - scaled_w // 2, cy_b - scaled_h // 2,
                     cx_b + scaled_w // 2, cy_b + scaled_h // 2], fill=HI_VIS)

        if scale >= 1.0:
            d.text((bx + 28, by + 38), GRAND_TOTAL_LABEL, fill=BG, font=f(FN_BLACK, 38))
            text_right(d, GRAND_TOTAL_VALUE, f(FN_BLACK, 72), BG, bx + bw - 28, by + 26)

    # No corner chip during results phase — total takes its place

    return img


def frame_outro(t_local):
    """Phase 4: outro CTA. t_local in [0..P4_END-P3_END]."""
    img = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(img)
    grid_bg(d)
    projectcalc_header(d)

    # Big CTA centered
    fade_t = ease_out(min(1.0, t_local / 0.4))
    alpha = int(255 * fade_t)

    layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ld = ImageDraw.Draw(layer)

    # $39 hero — generous band so the glyph never clips
    band_y, band_h = 340, 280
    ld.rectangle([0, band_y, W, band_y + band_h], fill=(*HI_VIS, alpha))
    text_centered(ld, "$39", f(FN_BLACK, 180), (*BG, alpha), W // 2, band_y + 30)

    text_centered(ld, "INSTANT DOWNLOAD  ·  EXCEL  ·  GOOGLE SHEETS",
                  f(FN_MONO_BOLD, 22), (*INK_2, alpha), W // 2, band_y + band_h + 40)

    text_centered(ld, "PROJECTCALC.APP",
                  f(FN_BLACK, 36), (*HI_VIS, alpha), W // 2, band_y + band_h + 100)

    img = Image.alpha_composite(img.convert("RGBA"), layer).convert("RGB")
    return img


def render_frame(frame_idx):
    t = frame_idx / FPS  # global time in seconds

    if t < P1_END:
        return frame_title(t)
    elif t < P2_END:
        return frame_inputs(t - P1_END, t)
    elif t < P3_END:
        return frame_results(t - P2_END, t)
    else:
        return frame_outro(t - P3_END)


def main():
    out_path = OUT / "06_video.mp4"
    print(f"Rendering {N_FRAMES} frames at {FPS} fps -> {DURATION}s")

    # H.264, no audio, 1080x1080
    writer = iio.get_writer(
        str(out_path),
        fps=FPS,
        codec="libx264",
        quality=8,
        macro_block_size=8,
        pixelformat="yuv420p",
        ffmpeg_params=["-preset", "medium", "-crf", "20"],
    )
    try:
        for i in range(N_FRAMES):
            if i % 30 == 0:
                print(f"  frame {i}/{N_FRAMES}  (t={i/FPS:.1f}s)")
            img = render_frame(i)
            writer.append_data(np.asarray(img))
    finally:
        writer.close()

    sz = out_path.stat().st_size / 1024
    print(f"Done: {out_path}  ({sz:.0f} KB)")


if __name__ == "__main__":
    main()
