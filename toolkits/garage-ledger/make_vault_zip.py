"""Bundle all 6 Garage Ledger xlsx files into Garage-Ledger-Vault-v1.zip.

Run: python make_vault_zip.py
Output: dist/vault/Garage-Ledger-Vault-v1.zip
"""

import zipfile
from pathlib import Path

from variants import VARIANTS

GL_DIR = Path(__file__).parent
VAULT_DIR = GL_DIR / "dist" / "vault"
VAULT_DIR.mkdir(parents=True, exist_ok=True)

OUT_ZIP = VAULT_DIR / "Garage-Ledger-Vault-v1.zip"

README = """GARAGE LEDGER -- THE VAULT (v1)
================================

Six workbooks bundled together. Each is a complete, audit-tested project
ledger for tracking a different style of build. Use the generic one for
any project; pick the build-type variant that matches your build for
pre-filled categories + milestone templates.

Files in this zip:
- Garage-Ledger-Pro-v1.xlsx           generic master (any build)
- Garage-Ledger-LS-Swap-v1.xlsx       LS engine swap presets
- Garage-Ledger-Cummins-Swap-v1.xlsx  12V / 24V / CR Cummins conversion
- Garage-Ledger-Overland-Rig-v1.xlsx  overland rig (lift, rack, sleep)
- Garage-Ledger-Restomod-v1.xlsx      classic chassis + modern drivetrain
- Garage-Ledger-Track-Build-v1.xlsx   track-day / time-attack build

Each workbook has 7 tabs:
  README / BUILD INFO / EXPENSE LOG / PARTS INVENTORY / TIMELINE /
  DASHBOARD / ROI

How to use:
  1. Open the variant that matches your build (or the generic Pro).
  2. Fill BUILD INFO (vehicle, budget, target sale, shop rate).
  3. Log receipts on EXPENSE LOG. Pick a category from the dropdown.
  4. DASHBOARD auto-aggregates spend by category + month.
  5. ROI / SALE COMP tracks your true cost vs. comparable build sales.

You can run more than one variant in parallel (one ledger per project).
Each file is independent -- no cross-file references.

Works in Microsoft Excel, Google Sheets, LibreOffice Calc, Apple Numbers.

Single user license. Use on as many of your own builds as you want.
Please don't redistribute the files. Bug reports + feature requests:
bullbears21@gmail.com

ProjectCalc -- projectcalc.app
"""


def main():
    print(f"Building {OUT_ZIP.relative_to(GL_DIR)}...")
    with zipfile.ZipFile(OUT_ZIP, "w", zipfile.ZIP_DEFLATED) as z:
        for variant_key, cfg in VARIANTS.items():
            src = GL_DIR / "dist" / cfg["slug"] / cfg["xlsx_basename"]
            if not src.exists():
                print(f"  WARN: {src.relative_to(GL_DIR)} missing, skipping")
                continue
            z.write(src, arcname=cfg["xlsx_basename"])
            print(f"  + {cfg['xlsx_basename']}  ({src.stat().st_size // 1024} KB)")
        z.writestr("README.txt", README)
        print(f"  + README.txt")

    sz = OUT_ZIP.stat().st_size / 1024
    print(f"\nDone: {OUT_ZIP.relative_to(GL_DIR)}  ({sz:.1f} KB)")


if __name__ == "__main__":
    main()
