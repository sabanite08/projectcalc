import type { Calculator } from './types';
import { SHAPE_INPUTS, extractShape, shapeDetailRows } from './shape';

export const calculators: Calculator[] = [
  {
    slug: 'drywall-calculator',
    name: 'Drywall',
    category: 'home',
    desc: 'Drywall sheets',
    formula: 'sheets = area ÷ 32 × 1.10',
    title: 'DRYWALL SHEETS',
    metaTitle: 'Drywall Calculator — How Many Sheets Do You Need? | ProjectCalc',
    metaDesc: 'Free drywall calculator. Enter your room size and get the exact number of 4x8 sheets to buy, including 10% waste. Works for walls only or walls + ceiling.',
    seoIntro: 'Use this drywall calculator to estimate how many sheets of drywall (sheetrock) you need to finish a room. Enter the room dimensions and ceiling height, pick a sheet size, choose whether you are covering the ceiling, and the calculator returns the exact sheet count rounded up with a 10% waste factor built in. Standard 4×8 sheets cover 32 ft² each; 4×12 sheets cover 48 ft² and reduce seams on long walls but require two people and a truck to handle.',
    howToUse: 'Measure your room length and width in feet, plus the ceiling height. Pick the sheet size — 4×8 is standard and easy to handle solo; 4×12 cuts seam count on long walls but each sheet weighs about 80 lbs and needs two people. Choose whether you\'re hanging the ceiling or just walls. The result is the total sheet count rounded up with a 10% waste factor for cuts around doors, windows, and outlets.\n\nFor irregular rooms, use the L-shape toggle and enter the cutout dimensions — the calculator subtracts the missing rectangle from the ceiling area only, since wall perimeter is the same for an L-shape as the bounding rectangle. For complex multi-room jobs, run each room separately and add the results.',
    workedExample: 'For a 12 × 10 ft room with 8-foot ceilings, walls + ceiling:\n\nWall area = 2 × (12 + 10) × 8 = 352 ft². Ceiling area = 12 × 10 = 120 ft². Total = 472 ft².\n\nWith 10% waste: 519 ft². At 32 ft² per 4×8 sheet: 17 sheets. At 48 ft² per 4×12 sheet: 11 sheets.\n\nThe 4×12 option saves 6 sheets and reduces seams across the long 12-foot walls (one continuous sheet instead of one + a butt joint). The tradeoff is weight — six 4×12 sheets weigh roughly 480 lbs total versus 320 lbs for the equivalent 4×8 count, plus you need a truck or trailer to haul 4×12s home.',
    commonMistakes: 'Forgetting to subtract for door and window openings — only matters on jobs over 1,000 ft². For most rooms the 10% waste factor absorbs the openings and the cuts you\'ll need to make around them.\n\nBuying too many 4×12s for a small bathroom or closet. The 4×12 advantage is on walls 12+ feet long. For a small room, the extra weight and handling difficulty isn\'t worth it.\n\nUnderordering screws and joint compound. As a rough guide: ½ pound of drywall screws per sheet, and one 5-gallon bucket of pre-mixed compound per 600–800 ft² of wall.\n\nSkipping moisture-resistant board in wet areas. Bathrooms, kitchen splash zones, and laundry rooms should use green board (paper-faced moisture-resistant) or cement board behind tile. Standard drywall in those locations leads to mold within a year or two.',
    rulesOfThumb: '4×8 sheets cover 32 ft². 4×12 sheets cover 48 ft². Both are ½-inch thick for residential walls; ceilings often use ⅝-inch.\n\n10% waste is standard for clean rectangular rooms. Bump to 15% for rooms with lots of cuts (multiple windows, knee walls, vaulted ceilings).\n\nAbout 1.5 lbs of joint compound per ft² of finished wall (for taping, two coats, and skim).\n\nA standard pro hangs 40–60 sheets per 8-hour day; a DIYer should plan on 8–15.\n\n½-inch lightweight drywall (UltraLight) weighs about 13 lbs less than standard ½-inch — worth the small upcharge for any solo install.',
    note: '10% waste built in. 4×8 sheets cover 32 ft²; 4×12 sheets cover 48 ft² (50% heavier — plan for 2 people).',
    inputs: [
      { id: 'L', label: 'Room length', unit: 'ft', default: 12, step: 0.5 },
      { id: 'W', label: 'Room width', unit: 'ft', default: 10, step: 0.5 },
      ...SHAPE_INPUTS,
      { id: 'H', label: 'Ceiling height', unit: 'ft', default: 8, step: 0.5 },
      { id: 'ceil', label: 'Include ceiling?', unit: '', type: 'select', default: 'yes',
        options: [['yes','Yes'],['no','No (walls only)']] },
      { id: 'sheet', label: 'Sheet size', unit: '', type: 'select', default: '4x8',
        tooltip: '4×8 covers 32 ft² and is easy to handle solo. 4×12 covers 48 ft², cuts seams on long walls, but is heavy and needs two people.',
        options: [['4x8','4×8 (32 ft²)'],['4x12','4×12 (48 ft²)']] }
    ],
    calc: (data) => {
      const L = +data.L, W = +data.W, H = +data.H, ceil = data.ceil as string, sheet = data.sheet as string;
      const s = extractShape(data);
      // L-shape's wall perimeter equals the bounding rectangle's perimeter
      const wallArea = 2 * (L + W) * H;
      const ceilArea = ceil === 'yes' ? s.net : 0;
      const total = wallArea + ceilArea;
      const sheetArea = sheet === '4x12' ? 48 : 32;
      const sheetLabel = sheet === '4x12' ? '4×12 SHEETS' : '4×8 SHEETS';
      const sheets = Math.ceil((total / sheetArea) * 1.10);
      return {
        main: sheets, unit: sheetLabel,
        detail: [
          ...shapeDetailRows(s),
          ['Wall area', wallArea.toFixed(0) + ' ft²'],
          ['Ceiling area', ceilArea.toFixed(0) + ' ft²'],
          ['Total area', total.toFixed(0) + ' ft²'],
          ['With 10% waste', (total * 1.10).toFixed(0) + ' ft²'],
          ['Sheet coverage', sheetArea + ' ft²']
        ]
      };
    }
  },
  {
    slug: 'paint-calculator',
    name: 'Paint',
    category: 'home',
    desc: 'Gallons needed',
    formula: 'gal = ft² × coats ÷ 350',
    title: 'PAINT GALLONS',
    metaTitle: 'Paint Calculator — How Much Paint Do You Need? | ProjectCalc',
    metaDesc: 'Calculate paint gallons for any room. Enter dimensions, number of coats, and surface type — get the exact gallons to buy. Free, no signup.',
    seoIntro: 'This paint calculator tells you how many gallons of paint you need for a room. One gallon covers about 350 square feet on smooth walls or 275 on rough/textured surfaces. Enter your room length, width, ceiling height, the number of coats you plan to apply, and whether the surface is smooth or rough — the calculator rounds up to the nearest whole gallon since paint is sold by the gallon.',
    howToUse: 'Enter your room length, width, and ceiling height. Set the number of coats — 2 is standard for new color or covering primer; 1 may be enough for refresh of the same color. Pick the surface type: smooth drywall and previously painted walls get the full 350 ft² per gallon, while textured walls (knockdown, orange peel, popcorn) drop to 275 ft² per gallon because the texture has more surface area.\n\nThe result rounds up to whole gallons since paint is sold by the gallon. Always buy a slight surplus — touchups years later are nearly impossible without a leftover can in the same lot. The calculator covers walls only; add a separate gallon for the ceiling and a quart of trim paint per ~100 linear feet of baseboard, casing, and crown.',
    workedExample: 'For a 12 × 10 ft room with 8-foot ceilings, 2 coats, smooth walls:\n\nWall area = 2 × (12 + 10) × 8 = 352 ft². Total to cover = 352 × 2 = 704 ft². At 350 ft² per gallon: 2.01 gallons → round up to 3 gallons (the third gallon covers touchups, the closet you forgot, and stays sealed for future repairs).\n\nIf those same walls were textured: 704 ÷ 275 = 2.56 gallons → also 3 gallons. Same purchase, but you\'ll use more of the third can during the actual job.\n\nAdd 1 quart of trim paint per ~80–100 linear feet of baseboard, casing, and crown — and a separate gallon if you\'re painting the ceiling, since ceiling paint is a flatter formula than wall paint.',
    commonMistakes: 'Skipping primer on bare drywall, water stains, or color changes from dark to light. Primer is cheaper than paint and seals the surface so your topcoat covers in one coat instead of three.\n\nConfusing wall area with floor area. A 12 × 10 room has 120 ft² of floor but ~352 ft² of walls (more than 3× the floor area). Calculating from floor area alone leaves you 60% short.\n\nBuying paint from different lots for the same job. Two cans labeled the same color can vary slightly between manufacturing batches. Have the store mix all your gallons in one batch, or "box mix" by intermixing cans yourself before applying.\n\nIgnoring sheen for the room\'s use. Flat hides imperfections but won\'t scrub clean — bad for kitchens, bathrooms, hallways, and kids\' rooms. Eggshell and satin clean better; semi-gloss for trim and doors.',
    rulesOfThumb: 'Smooth wall: 350 ft² per gallon, one coat. Textured: 275 ft² per gallon. Two coats is the residential standard.\n\nCeilings: 1 gallon covers about 350 ft² of ceiling at one coat. A typical 12 × 10 ceiling is 120 ft² — 1 gallon does it twice with paint left over.\n\nTrim and doors: 1 quart covers about 100 linear feet of baseboard or one full interior door (both sides + frame).\n\nWall area ≈ 3× floor area for a standard 8-foot ceiling — useful sanity check.\n\nAllow 1 gallon of leftover per 4-5 gallons used for future touchups. Same lot will never come back.',
    note: '1 gallon ≈ 350 ft² on smooth surfaces, 250–300 on rough/textured. Always round up.',
    inputs: [
      { id: 'L', label: 'Room length', unit: 'ft', default: 12, step: 0.5 },
      { id: 'W', label: 'Room width', unit: 'ft', default: 10, step: 0.5 },
      { id: 'H', label: 'Ceiling height', unit: 'ft', default: 8, step: 0.5 },
      { id: 'coats', label: 'Number of coats', unit: '', default: 2, step: 1 },
      { id: 'surface', label: 'Surface', unit: '', type: 'select', default: 'smooth',
        options: [['smooth','Smooth (350 ft²/gal)'],['rough','Rough/textured (275 ft²/gal)']] }
    ],
    calc: (data) => {
      const L=+data.L, W=+data.W, H=+data.H, coats=+data.coats, surface=data.surface as string;
      const wallArea = 2 * (L + W) * H;
      const coverage = surface === 'smooth' ? 350 : 275;
      const gallons = (wallArea * coats) / coverage;
      return {
        main: Math.ceil(gallons), unit: 'GALLONS',
        detail: [
          ['Wall area', wallArea.toFixed(0) + ' ft²'],
          ['Total to cover', (wallArea * coats).toFixed(0) + ' ft²'],
          ['Exact need', gallons.toFixed(2) + ' gal'],
          ['Coverage / gal', coverage + ' ft²']
        ]
      };
    }
  },
  {
    slug: 'concrete-calculator',
    name: 'Concrete',
    category: 'home',
    desc: 'Bags or yards',
    formula: 'yd³ = L·W·D ÷ 27',
    title: 'CONCRETE',
    metaTitle: 'Concrete Calculator — Bags and Cubic Yards | ProjectCalc',
    metaDesc: 'Concrete calculator for slabs, footings, and pads. Get cubic yards plus the exact number of 60lb or 80lb bags. Free, instant.',
    seoIntro: 'Use this concrete calculator to estimate how much concrete you need for a slab, footing, sidewalk, or patio. Enter the length, width, and thickness of your pour, and the calculator returns cubic yards (for ready-mix delivery) plus the equivalent number of 60-pound or 80-pound concrete bags from Home Depot or Lowe\'s. A 60lb bag yields about 0.45 ft³ of mixed concrete; an 80lb bag yields 0.60 ft³.\n\nThe result already includes a 10% waste factor to cover spillage, over-dig, uneven sub-base, and the small amount that always sticks to the wheelbarrow or chute. For projects bigger than one cubic yard, pricing flips in favor of ready-mix delivery from a local plant — bags are convenient up to that point, then they get expensive fast.',
    howToUse: 'Measure the length and width of the area you\'re pouring, in feet. For an irregular shape, switch the Shape toggle to "L-shape" and enter the cutout dimensions — the calculator subtracts the missing rectangle for you. For shapes that aren\'t rectangles or L-shapes, break the area into rectangles, run each one through the calculator, and add the results.\n\nPick the slab thickness in inches: 4 inches is standard for patios, walkways, and shed pads; 6 inches for driveways and garages; 8–12 inches for footings (check your local code). The result returns cubic yards (already padded with 10% waste) plus the bag count for both 60lb and 80lb sizes. If you\'re ordering ready-mix, give the plant the cubic-yard number; if you\'re mixing yourself, the bag count is what to load into your cart.',
    workedExample: 'Say you\'re pouring a 12 ft × 12 ft patio at 4 inches thick.\n\nThe volume is 12 × 12 × (4 ÷ 12) = 48 cubic feet, which is 48 ÷ 27 = 1.78 cubic yards. With the built-in 10% waste factor, the calculator shows 1.96 cubic yards.\n\nIn bags: 48 ÷ 0.45 = 107 bags of 60lb, or 48 ÷ 0.60 = 80 bags of 80lb. At roughly $4 per 60lb bag from Home Depot, that\'s about $428 in materials — versus a typical short-load ready-mix delivery at around $200–300 per yard plus a $100–150 short-load fee, putting a 2-yard delivery in the $500–700 range.\n\nFor this 1.78-yard pour, bags are slightly cheaper, but ready-mix saves several hours of mixing and gives a more uniform finish. Once you cross 2 yards, ready-mix wins on both price and time.',
    commonMistakes: 'Forgetting the waste factor. Concrete shrinks slightly as it cures and a surprising amount sticks to the mixer, wheelbarrow, and chute. Order at least 10% extra — this calculator already adds that, but if you\'re double-checking with napkin math, don\'t forget to pad.\n\nConfusing slab thickness units. Length and width are in feet; thickness is in inches. Entering "0.33" for a 4-inch slab (instead of 4) is a common slip that throws results off by a factor of 12.\n\nUnder-ordering for footings. Trench footings rarely match nominal dimensions — the soil collapses inward, the trench widens, the bottom is uneven. Order 15–20% extra for any below-grade pour, not the standard 10%.\n\nMixing partial bags. A 60lb bag is calibrated for a specific water ratio. Splitting one bag in half almost always gives you a weaker mix than full-bag pours. Round bag count up, don\'t fudge it down.',
    rulesOfThumb: '0.5 cubic yards is the bags/ready-mix breakeven. Below that, bags are more convenient and roughly the same cost. Above that, ready-mix is cheaper, faster, and more uniform.\n\n4 inches = standard residential slab. Patios, walkways, shed pads, AC condenser pads — 4 inches with wire mesh or fiber reinforcement is the default.\n\n6 inches + rebar = driveways and garages. Anywhere a vehicle parks needs 6 inches of concrete and a #3 or #4 rebar grid on 12–18 inch centers.\n\nOne cubic yard ≈ 45 bags of 80lb or 60 bags of 60lb. Useful for sanity-checking large pours against bag counts.\n\nOne cubic yard covers 81 ft² at 4 inches deep, or 54 ft² at 6 inches. Quick mental math: divide your slab area in ft² by 81 for a 4" pour, or by 54 for a 6" pour, to get cubic yards.',
    note: 'For pours over 1 cubic yard, ready-mix delivery is usually cheaper than bags. Add 10% for spillage and over-dig.',
    inputs: [
      { id: 'L', label: 'Length', unit: 'ft', default: 10, step: 0.5 },
      { id: 'W', label: 'Width', unit: 'ft', default: 10, step: 0.5 },
      ...SHAPE_INPUTS,
      { id: 'D', label: 'Thickness', unit: 'in', default: 4, step: 0.5 }
    ],
    calc: (data) => {
      const D = +data.D;
      const s = extractShape(data);
      const cubicFt = s.net * (D / 12);
      const cubicYd = cubicFt / 27;
      const cubicYdWithWaste = cubicYd * 1.10;
      const bags60 = Math.ceil(cubicFt / 0.45);
      const bags80 = Math.ceil(cubicFt / 0.60);
      return {
        main: cubicYdWithWaste.toFixed(2), unit: 'CUBIC YARDS (W/ 10%)',
        detail: [
          ...shapeDetailRows(s),
          ['Cubic feet', cubicFt.toFixed(2)],
          ['Cubic yards (exact)', cubicYd.toFixed(3)],
          ['60lb bags needed', bags60.toLocaleString()],
          ['80lb bags needed', bags80.toLocaleString()]
        ]
      };
    }
  },
  {
    slug: 'roofing-calculator',
    name: 'Roofing',
    category: 'home',
    desc: 'Shingle bundles',
    formula: 'sq = footprint × pitch',
    title: 'ROOFING SHINGLES',
    metaTitle: 'Roofing Calculator — Shingle Bundles and Squares | ProjectCalc',
    metaDesc: 'Roofing calculator. Enter footprint and pitch, get squares and shingle bundles needed. Includes 10% waste factor. Free.',
    seoIntro: 'This roofing calculator estimates the number of shingle bundles you need for a roof. Enter the building footprint length and width and the roof pitch (rise per 12 inches of run), and the calculator computes the actual roof surface area, converts it to roofing squares (1 square = 100 ft²), and returns the bundle count. Most asphalt shingles ship 3 bundles per square. A 10% waste factor for cuts and ridge caps is built in.',
    howToUse: 'Measure the building footprint length and width in feet — that\'s the outer dimensions of the area covered by the roof, NOT the actual roof surface (the actual surface is larger because of the slope). Then enter the pitch as inches of rise per 12 inches of horizontal run. A 6/12 pitch rises 6 inches for every 12 horizontal inches; a 12/12 pitch is 45°.\n\nThe calculator multiplies your footprint by the pitch factor to get true roof area, converts to roofing squares (1 square = 100 ft²), and returns bundle count assuming 3 bundles per square with a 10% waste factor for cuts, ridge caps, and starter rows. For a complex roof with multiple ridges, hips, valleys, or dormers, increase the waste factor by ordering 1–2 extra squares above the calculated number.',
    workedExample: 'For a 40 × 30 ft footprint with a 6/12 pitch:\n\nPitch multiplier = √(6² + 12²) ÷ 12 = 13.42 ÷ 12 = 1.118. So a 1,200 ft² footprint becomes 1,341 ft² of actual roof surface.\n\nIn squares: 1,341 ÷ 100 = 13.41 squares. With 10% waste: 14.75 squares = ~45 bundles of standard 3-tab or architectural shingles.\n\nAt ~$35–50 per bundle for architectural shingles, materials run $1,575–$2,250. Add roofing felt (1 roll per 4 squares = 4 rolls), ice & water shield for the eaves and valleys, drip edge, and ridge cap shingles. Total materials for a typical re-roof of this size land around $2,500–$3,500. Pro re-roofs typically cost $7,000–$10,000 for this footprint installed.',
    commonMistakes: 'Measuring the actual roof surface instead of the footprint. The calculator wants the building footprint (top-down view) and applies the pitch math itself. Measuring the slope directly and entering that as L × W double-counts the pitch.\n\nForgetting hips, valleys, and dormers. A simple gable roof matches the calculator output closely. Hip roofs need 5–10% more shingles; cut-up roofs with multiple dormers need 15–25% more.\n\nUnderordering ice & water shield. Code in cold climates requires it from the eave to 2 feet inside the heated wall line, plus all valleys. Underordering forces a second supply trip mid-tear-off.\n\nSkipping the dump fee in the budget. Tearing off old shingles generates 1–2 tons of debris per square. Renting a 10-yard dumpster runs $400–$700 — easy to forget when costing the project.',
    rulesOfThumb: '3 bundles per square. 1 square = 100 ft² of roof surface (not footprint).\n\nPitch multipliers: 4/12 = 1.054 · 6/12 = 1.118 · 8/12 = 1.202 · 12/12 = 1.414.\n\n10% waste for simple gable roofs; 15–20% for hip, complex, or cut-up roofs.\n\n3-tab shingles last 15–20 years; architectural last 25–30; premium 40–50.\n\nMaterials cost is roughly ⅓ of total re-roof cost; labor is the other ⅔.\n\nTear-off generates ~1.5 tons of waste per square — plan dumpster size accordingly.',
    note: 'Pitch multiplier: 4/12 = 1.054 · 6/12 = 1.118 · 8/12 = 1.202 · 12/12 = 1.414. 3 bundles per square. 10% waste included.',
    inputs: [
      { id: 'L', label: 'Roof footprint length', unit: 'ft', default: 40, step: 1 },
      { id: 'W', label: 'Roof footprint width', unit: 'ft', default: 30, step: 1 },
      { id: 'pitch', label: 'Pitch (rise per 12)', unit: 'in', default: 6, step: 1, tooltip: 'How many inches the roof rises for every 12 inches of horizontal run. A 6/12 pitch rises 6 inches per foot.' }
    ],
    calc: (data) => {
      const L=+data.L, W=+data.W, pitch=+data.pitch;
      const footprint = L * W;
      const pitchMult = Math.sqrt(pitch * pitch + 144) / 12;
      const roofArea = footprint * pitchMult;
      const squares = roofArea / 100;
      const squaresWithWaste = squares * 1.10;
      const bundles = Math.ceil(squaresWithWaste * 3);
      return {
        main: bundles, unit: 'BUNDLES',
        detail: [
          ['Footprint', footprint.toFixed(0) + ' ft²'],
          ['Pitch multiplier', pitchMult.toFixed(3)],
          ['Roof area', roofArea.toFixed(0) + ' ft²'],
          ['Squares (w/ 10%)', squaresWithWaste.toFixed(2)]
        ]
      };
    }
  },
  {
    slug: 'hardwood-calculator',
    name: 'Hardwood',
    category: 'home',
    desc: 'Planks + sq ft',
    formula: 'planks = ft² × waste ÷ plank ft²',
    title: 'HARDWOOD FLOORING',
    metaTitle: 'Hardwood Flooring Calculator — Planks and Square Feet | ProjectCalc',
    metaDesc: 'Hardwood flooring calculator with plank width and length. Enter room size and plank dimensions — get square feet to buy, plank count, and box estimate.',
    seoIntro: 'This hardwood flooring calculator gives you the square footage and number of planks needed for a solid or engineered hardwood install. Enter your room dimensions, pick a plank width (2.25"–7") and an average plank length (36"–72"), and the calculator returns the square feet to buy with the correct waste factor — 10% for straight, 12% for offset plank, 15% for diagonal or herringbone. Most hardwood boxes cover 18–25 ft²; the calculator estimates box count at 22 ft²/box. Wider planks lay faster but waste more material at room edges.',
    howToUse: 'Enter your room length and width in feet. For irregular rooms, use the L-shape toggle and enter the cutout. Pick a plank width — 2.25–3.25 inches is traditional strip oak; 4–5 inches is the modern standard; 6–7 inches is wide plank, which lays faster but creates more waste at room edges. Average plank length matters less but affects how many small cuts end up in the trash.\n\nChoose the install pattern: straight runs add 10% waste; offset (random or stairstep) plank adds 12%; diagonal or herringbone adds 15%. The result is the square footage to buy (already padded with the right waste factor) plus an estimated plank count and box count assuming 22 ft² per box (the most common spec — confirm on the actual box label).',
    workedExample: 'For a 14 × 12 ft room (168 ft²) using 5-inch wide planks at 48-inch average length, offset pattern:\n\nSquare feet to buy: 168 × 1.12 = 188 ft². Plank coverage: (5 × 48) ÷ 144 = 1.67 ft² per plank. Planks needed: 188 ÷ 1.67 = 113 planks. Boxes (at 22 ft²): 9 boxes.\n\nAt ~$5–$8/ft² for solid oak, materials cost $940–$1,500. Add underlayment ($0.50/ft²), nails or staples ($60–$100), and rental of a flooring nailer ($45/day) for a DIY install. Pro labor adds $4–$8/ft² on top, putting an installed cost in the $1,800–$3,200 range for this room.\n\nAlways order one extra box beyond the calculated count and keep it sealed for repairs — same-lot replacements are nearly impossible to find years later.',
    commonMistakes: 'Treating engineered hardwood like solid hardwood. Engineered comes in different lengths and widths and often has its own per-box coverage spec — always check the actual label before buying.\n\nBuying on a budget without accounting for transition pieces. T-moldings, reducers, and stair nosings cost $20–$60 each and add up fast across multiple doorways and stairs.\n\nSkipping acclimation. Hardwood needs to sit in the room (boxes opened) for 3–7 days before installing so it equilibrates to the room\'s humidity. Skipping this step causes gapping in winter or buckling in summer.\n\nUnderordering for diagonal/herringbone patterns. The 15% waste factor is the minimum — for true herringbone with lots of 45° cuts, plan on 18–20% waste, especially with longer planks.',
    rulesOfThumb: 'Waste factor: 10% straight, 12% offset plank, 15% diagonal/herringbone. Bump 3% if planks are long (60–72 inches) since cuts produce more unusable scrap.\n\nMost hardwood boxes hold 18–25 ft² — confirm the label before buying.\n\nWider planks lay faster but waste more at room edges. Strip flooring (2.25–3.25 inches) wastes the least; 7-inch wide plank can hit 8% pure cutoff loss before the install pattern.\n\nA solo DIYer installs 100–150 ft² per day. A pro crew runs 400–600 ft²/day.\n\nAcclimation: 72+ hours in the room (boxes open) before nailing. Below 35% or above 55% humidity, push to 5–7 days.',
    note: 'Hardwood boxes average 18–25 ft²/box — confirm the label before buying. Keep one full box unopened for future repairs; same-lot replacements are nearly impossible to find later.',
    inputs: [
      { id: 'L', label: 'Room length', unit: 'ft', default: 14, step: 0.5 },
      { id: 'W', label: 'Room width', unit: 'ft', default: 12, step: 0.5 },
      ...SHAPE_INPUTS,
      { id: 'pw', label: 'Plank width', unit: '', type: 'select', default: '5',
        tooltip: '2.25"–3.25" is traditional strip oak; 4"–5" is the common modern plank; 6"–7" is wide plank.',
        options: [['2.25','2.25 in (strip)'],['3.25','3.25 in (strip)'],['4','4 in'],['5','5 in (wide)'],['6','6 in (wide)'],['7','7 in (extra wide)']] },
      { id: 'pl', label: 'Plank length (avg)', unit: '', type: 'select', default: '48',
        tooltip: 'Hardwood is typically random length. Pick the average plank length spec on the box.',
        options: [['36','36 in (random short)'],['48','48 in (standard)'],['60','60 in (long)'],['72','72 in (extra long)']] },
      { id: 'pattern', label: 'Install pattern', unit: '', type: 'select', default: 'offset',
        options: [['straight','Straight (10%)'],['offset','Offset plank (12%)'],['diagonal','Diagonal / herringbone (15%)']] }
    ],
    calc: (data) => {
      const pw=+data.pw, pl=+data.pl, pattern=data.pattern as string;
      const s = extractShape(data);
      const wasteMap: Record<string, number> = {straight: 1.10, offset: 1.12, diagonal: 1.15};
      const buy = s.net * wasteMap[pattern];
      const plankSqFt = (pw * pl) / 144;
      const planks = Math.ceil(buy / plankSqFt);
      const boxes = Math.ceil(buy / 22);
      return {
        main: buy.toFixed(0), unit: 'FT² TO BUY',
        detail: [
          ...shapeDetailRows(s),
          ['Waste factor', ((wasteMap[pattern]-1)*100).toFixed(0) + '%'],
          ['Plank coverage', plankSqFt.toFixed(2) + ' ft²/plank'],
          ['Planks needed', planks],
          ['~Boxes (@ 22 sf)', boxes]
        ]
      };
    }
  },
  {
    slug: 'carpet-calculator',
    name: 'Carpet',
    category: 'home',
    desc: 'Sq yds + pad',
    formula: 'yd² = ft² × waste ÷ 9',
    title: 'CARPET',
    metaTitle: 'Carpet Calculator — Square Yards, Pad, and Seams | ProjectCalc',
    metaDesc: 'Carpet calculator for any room. Enter dimensions and roll width — get square yards to buy plus pad coverage and a seam estimate.',
    seoIntro: 'This carpet calculator gives you the square yards of carpet (and pad) needed for a room. Carpet is sold by the square yard from rolls 12 or 15 feet wide; the roll width determines whether your room can be covered seamlessly or whether you need a seam. Enter your room length and width, choose a roll width, and the calculator returns square yards to buy with a 10% waste factor plus a rough seam count. One square yard equals nine square feet; pricing is almost always quoted per yd² at retail and per ft² at warehouse outlets.',
    howToUse: 'Measure your room length and width in feet. For an L-shaped or stepped room, use the L-shape toggle and enter the cutout. Pick the roll width — 12 ft is the standard residential carpet roll; 15 ft is wider and stocked for large rooms (great room, master bedroom) where you don\'t want a seam. Choose whether to include carpet pad in the materials estimate.\n\nThe result is square yards to buy with a 10% waste factor (carpet is sold by the yd², not the ft²) plus a rough seam count based on whether the room\'s narrow dimension exceeds the roll width. Pad coverage matches the carpet area. Most installers charge $1–3 per linear foot for seaming, so a single seam adds $20–60 in labor on a typical bedroom.',
    workedExample: 'For a 16 × 13 ft bedroom (208 ft²) with 12-ft roll, including pad:\n\nSquare feet to buy: 208 × 1.10 = 229 ft². In yards: 229 ÷ 9 = 25.4 yd² → buy 26 yd².\n\nSeam check: short side is 13 ft, roll is 12 ft → 1 seam needed.\n\nAt $3–$8/ft² for retail carpet ($27–$72/yd²), materials run $700–$1,800. Pad adds $0.40–$0.80/ft² ($90–$185 for 229 ft²). Pro install adds $0.50–$1.50/ft² in labor plus the $20–$60 seam charge.\n\nFor a 12 × 11 ft room (132 ft²) with 12-ft roll: short side fits the roll, so zero seams. That\'s why room layout matters — a 12 × 11 ft room is cheaper to install than a 13 × 11 ft room of nearly equal area.',
    commonMistakes: 'Forgetting the room is sold to you in yards but the room measures in feet. 1 yd² = 9 ft², so a 200 ft² room is only 22.2 yd² — confirm pricing units before you sign.\n\nSkipping the pad. New carpet over old hard pad gets 30–50% less life. Pad is the cheapest part of the install and the biggest factor in how the carpet feels and lasts.\n\nUnderordering on pattern carpet. Patterned or directional carpet (Berber loops, wide stripes) needs the same direction across all pieces — adds 15–20% waste, not 10%.\n\nForgetting transition strips and tackless. T-moldings between rooms ($15–$30 each) and tackless strip around the perimeter ($1/lin ft) add up. Budget another $100–$200 in trim materials for a typical bedroom.',
    rulesOfThumb: '1 yd² = 9 ft². Always confirm whether you\'re being quoted per yd² or per ft².\n\nStandard rolls: 12 ft (most common) and 15 ft (wide). 13\'2" exists for European patterned carpet and is rare.\n\n10% waste for plain carpet, 15–20% for patterned or directional.\n\nSeam labor runs $1–3 per linear foot. A 13-ft seam adds about $40 to your install.\n\nCarpet life: builder-grade nylon 5–7 years, mid-grade 8–12, premium 15–20. Pad always wears out faster than the carpet — replace both together.',
    note: 'Carpet sells by the square yard. Standard rolls are 12 ft or 15 ft wide. 1 yd² = 9 ft². Add 10% waste; seams add labor cost ($1–3/lin ft).',
    inputs: [
      { id: 'L', label: 'Room length', unit: 'ft', default: 16, step: 0.5 },
      { id: 'W', label: 'Room width', unit: 'ft', default: 13, step: 0.5 },
      ...SHAPE_INPUTS,
      { id: 'roll', label: 'Roll width', unit: '', type: 'select', default: '12',
        tooltip: '12 ft is the most common carpet roll width; 15 ft is wider for large rooms with no seam.',
        options: [['12','12 ft (standard)'],['15','15 ft (wide)']] },
      { id: 'pad', label: 'Include pad?', unit: '', type: 'select', default: 'yes',
        options: [['yes','Yes'],['no','No']] }
    ],
    calc: (data) => {
      const L=+data.L, W=+data.W, roll=+data.roll, pad=data.pad as string;
      const s = extractShape(data);
      const buy = s.net * 1.10;
      const yards = buy / 9;
      const shortSide = Math.min(L, W);
      const seams = shortSide <= roll ? 0 : 1;
      const padSqFt = pad === 'yes' ? Math.ceil(s.net * 1.10) : 0;
      return {
        main: yards.toFixed(1), unit: 'YD² TO BUY',
        detail: [
          ...shapeDetailRows(s),
          ['With 10% waste', buy.toFixed(0) + ' ft²'],
          ['Roll width', roll + ' ft'],
          ['Seams (est.)', seams],
          ['Pad needed', padSqFt + ' ft²']
        ]
      };
    }
  },
  {
    slug: 'vinyl-calculator',
    name: 'Vinyl',
    category: 'home',
    desc: 'Sheet vinyl + seams',
    formula: 'lin ft = long side × strips × waste',
    title: 'SHEET VINYL FLOORING',
    metaTitle: 'Sheet Vinyl Flooring Calculator — Linear Feet and Square Yards | ProjectCalc',
    metaDesc: 'Sheet vinyl flooring calculator. Enter room size and roll width — get linear feet to buy, square yards, and a seam estimate for residential sheet vinyl installs.',
    seoIntro: 'This sheet vinyl calculator gives you the linear feet of roll vinyl, total square footage, and square yards needed for a sheet-goods install. Sheet vinyl is sold by the linear foot off rolls 6, 12, or 13 ft 2 in wide; the roll width determines whether your room covers seamlessly or needs a seam. Enter room dimensions and roll width, and the calculator returns the linear feet to buy with a 10% waste factor (15% for printed pattern repeats) plus an estimated seam count. Sheet vinyl is the cheapest and most water-resistant flooring per square foot — common in kitchens, baths, laundry rooms, and rentals.',
    howToUse: 'Measure your room length and width in feet. For irregular rooms, use the L-shape toggle. Pick the roll width — 12 ft is the residential standard and covers most bedrooms, kitchens, and laundry rooms in a single piece. 6 ft is cheaper but needs a seam in anything wider. 13\'2" is the European wide width, mostly stocked for higher-end patterned vinyl.\n\nIndicate whether the pattern has a repeat (printed wood-plank or tile patterns need extra material to align across cuts and seams — 15% waste vs 10% for solid colors). The result is the linear feet to buy off the roll plus the equivalent in square yards. Sheet vinyl is sold by the linear foot, but suppliers often quote price per square yard — confirm units before paying.',
    workedExample: 'For a 14 × 10 ft kitchen with a 12-ft roll, solid color:\n\nLong side 14 ft, short side 10 ft. Strips needed = ⌈10 ÷ 12⌉ = 1 strip. Linear feet = 1 × 14 × 1.10 = 15.4 → 16 linear ft. Square yards = (16 × 12) ÷ 9 = 21.3 yd².\n\nA single 12-ft-wide piece covers the entire room with one roll — no seams. At $1–$3/ft² for sheet vinyl, materials cost $170–$500.\n\nFor the same room with a 6-ft roll: ⌈10 ÷ 6⌉ = 2 strips, 2 × 14 × 1.10 = 31 linear ft, plus a 14-ft seam to glue and finish. The 6-ft roll is cheaper per ft² but seam labor and the visible seam line usually wipe out the savings — go with 12 ft if your vehicle can transport it.',
    commonMistakes: 'Buying off the wrong roll width. A 13-ft-wide room from a 12-ft roll requires either a seam or a wider roll. Always check that the roll width meets or exceeds your room\'s narrow dimension.\n\nSkipping pattern repeat math. Printed sheet vinyl with a tile or plank pattern needs cuts aligned across seams — 15% waste, not 10%. Some patterns with long repeats (24-inch tile repeats) need 18–20% waste.\n\nUnderestimating substrate prep. Sheet vinyl shows every imperfection in the floor below it. Self-leveling compound to fill low spots ($0.50–$1.50/ft²) is often necessary on older subfloors.\n\nBuying perimeter-bond vinyl for a wet area. Some sheet vinyl glues only at the edges; for kitchens and baths where water gets under the seams, you want full-spread glue or a fully-bonded product.',
    rulesOfThumb: 'Rolls: 6 ft (narrow), 12 ft (standard), 13\'2" (European wide).\n\n10% waste for solid colors, 15% for patterned with a repeat.\n\nSold by the linear foot off the roll; priced often per yd² (1 yd² = 9 ft²).\n\nSheet vinyl life: 10–20 years residential, 5–10 in heavy commercial use.\n\nSubstrate matters more than the vinyl itself. Budget $0.50–$1.50/ft² for floor prep on older subfloors.',
    note: 'Sheet vinyl sold by the linear foot off the roll. 12 ft roll is the residential standard; 6 ft is for narrow halls and small baths. 1 yd² = 9 ft². Add 10% waste, 15% if the pattern has a repeat.',
    inputs: [
      { id: 'L', label: 'Room length', unit: 'ft', default: 14, step: 0.5 },
      { id: 'W', label: 'Room width', unit: 'ft', default: 10, step: 0.5 },
      ...SHAPE_INPUTS,
      { id: 'roll', label: 'Roll width', unit: '', type: 'select', default: '12',
        tooltip: '12 ft covers most rooms seamlessly. 6 ft is cheaper but needs a seam in anything wider than a small bath. 13\'2" (European) is rarer and runs higher.',
        options: [['6','6 ft (narrow)'],['12','12 ft (standard)'],['13.17','13\'2" (wide / European)']] },
      { id: 'pattern', label: 'Pattern repeat?', unit: '', type: 'select', default: 'no',
        tooltip: 'Printed sheet vinyl with a tile or wood-plank pattern needs extra material to align the repeat across cuts and seams.',
        options: [['no','No / solid color (10% waste)'],['yes','Yes / patterned (15% waste)']] }
    ],
    calc: (data) => {
      const L=+data.L, W=+data.W, roll=+data.roll, pattern=data.pattern as string;
      const s = extractShape(data);
      // Sheet vinyl is laid in strips covering the bounding rectangle; trim around any cutout.
      const longSide = Math.max(L, W);
      const shortSide = Math.min(L, W);
      const waste = pattern === 'yes' ? 1.15 : 1.10;
      const strips = Math.ceil(shortSide / roll);
      const linFt = Math.ceil(strips * longSide * waste);
      const buyArea = strips * longSide * roll;
      const yards = (linFt * roll) / 9;
      const seams = strips - 1;
      return {
        main: linFt, unit: 'LINEAR FT OF ROLL',
        detail: [
          ...shapeDetailRows(s),
          ['Roll width', roll === 13.17 ? '13\'2"' : roll + ' ft'],
          ['Strips needed', strips],
          ['Seams', seams],
          ['Coverage purchased', buyArea.toFixed(0) + ' ft²'],
          ['Square yards', yards.toFixed(1) + ' yd²'],
          ['Waste factor', ((waste-1)*100).toFixed(0) + '%']
        ]
      };
    }
  },
  {
    slug: 'tile-calculator',
    name: 'Tile',
    category: 'home',
    desc: 'Tiles per room',
    formula: 'tiles = area ÷ tile size × waste',
    title: 'TILE QUANTITY',
    metaTitle: 'Tile Calculator — How Many Tiles Do You Need? | ProjectCalc',
    metaDesc: 'Tile calculator for floors, backsplashes, and showers. Enter area and tile size — get exact tile count with waste factor.',
    seoIntro: 'This tile calculator computes how many tiles you need based on the area to cover and the tile dimensions. Pick from common tile sizes (12x12, 12x24, 18x18, 24x24, 6x6, 4x4 inches) and the calculator returns the tile count with a 10% waste factor for straight layouts or 15% for diagonal. Tiles are typically sold by the box; check the box count when buying so you don\'t come up short.',
    howToUse: 'Measure the area length and width in feet. For an irregular floor (L-shaped bathroom, kitchen with peninsula), use the L-shape toggle and enter the cutout. Pick the tile size from the dropdown — the calculator already knows tiles per square foot for each common nominal size (4×4 = 9 tiles/ft², 12×12 = 1 tile/ft², 24×24 = 0.25 tiles/ft²).\n\nChoose the layout: straight (grid pattern) adds 10% waste; diagonal or offset patterns add 15%. The result is the total tile count rounded up. Tiles are typically sold by the box (10–20 tiles per box for 12×12s, fewer for larger formats), so check the box count when buying — you almost always need to round up to the next full box.',
    workedExample: 'For an 8 × 10 ft bathroom floor (80 ft²) using 12×12 tiles, straight pattern:\n\nTiles per ft²: 1.0. Waste factor: 1.10. Tiles needed: 80 × 1.0 × 1.10 = 88 tiles.\n\nIf the boxes hold 10 tiles each, you need 9 boxes (90 tiles). If 12 per box, 8 boxes (96 tiles).\n\nAt $2–$5/ft² for ceramic or $5–$10/ft² for porcelain, materials cost $200–$800. Add thinset mortar ($30/bag, ~50 ft² coverage = 2 bags), grout ($25/bag, covers ~150 ft² for a ⅛-inch joint = 1 bag), tile spacers, and rental of a wet saw ($50/day) for a DIY install.\n\nSwitching to a diagonal layout: 80 × 1.15 = 92 tiles → still 9–10 boxes. The waste increase is real but small at this size; bumps up sharply on bigger floors with lots of edges.',
    commonMistakes: 'Underordering for diagonal or herringbone. The 15% factor in the calculator is the minimum. For a true herringbone with 45° cuts at every edge, plan on 18–22% waste, especially in narrow rooms.\n\nBuying tile from different lots. Color and shade vary slightly between manufacturing lots. Always check the lot number on each box and buy all your tile from the same lot. Stores can usually pull from a single lot if you ask up front.\n\nForgetting cement board, thinset, and grout in the budget. The tile is often less than half the total materials cost. Cement board ($10–$15 per 3×5 sheet), thinset ($30/bag), grout ($25/bag), spacers, and corner trim add up to $100–$300 even on a small bathroom.\n\nSkipping the dry layout. Lay the tiles out without thinset first to confirm the cuts at the edges and around fixtures. A small shift in starting position can move all your edge cuts from awkward 1-inch slivers to half-tiles, which look much cleaner.',
    rulesOfThumb: 'Tiles per ft²: 4×4 = 9 · 6×6 = 4 · 12×12 = 1 · 12×24 = 0.5 · 18×18 = 0.44 · 24×24 = 0.25.\n\nWaste factor: 10% straight, 15% diagonal/offset. Bump to 18–22% for true herringbone or rooms with lots of cuts.\n\nThinset coverage: 1 bag of 50lb modified thinset covers about 50 ft² with a ¼-inch notched trowel. Larger format tiles need a ½-inch trowel and use closer to 30 ft² per bag.\n\nGrout coverage: 1 bag covers ~150 ft² of 12×12 with ⅛-inch joints, much less for smaller tiles or wider joints.\n\nAlways order at least 1 extra box beyond the calculated count and keep it sealed for future repairs — tile lines get discontinued constantly.',
    note: 'Tile sizes are nominal — actual size includes the grout joint. Add 10% waste straight, 15% diagonal.',
    inputs: [
      { id: 'L', label: 'Area length', unit: 'ft', default: 10, step: 0.5 },
      { id: 'W', label: 'Area width', unit: 'ft', default: 8, step: 0.5 },
      ...SHAPE_INPUTS,
      { id: 'tile', label: 'Tile size', unit: '', type: 'select', default: '12x12',
        options: [['4x4','4×4 in (1.5 tiles/ft²... 9 tiles)'],['6x6','6×6 in (4 tiles/ft²)'],['12x12','12×12 in (1 tile/ft²)'],['12x24','12×24 in (0.5 tiles/ft²)'],['18x18','18×18 in (0.44 tiles/ft²)'],['24x24','24×24 in (0.25 tiles/ft²)']] },
      { id: 'pattern', label: 'Layout', unit: '', type: 'select', default: 'straight',
        options: [['straight','Straight (10%)'],['diagonal','Diagonal (15%)']] }
    ],
    calc: (data) => {
      const tile=data.tile as string, pattern=data.pattern as string;
      const s = extractShape(data);
      const tilesPerSqFt: Record<string, number> = {'4x4': 9, '6x6': 4, '12x12': 1, '12x24': 0.5, '18x18': 0.444, '24x24': 0.25};
      const waste = pattern === 'diagonal' ? 1.15 : 1.10;
      const tiles = Math.ceil(s.net * tilesPerSqFt[tile] * waste);
      return {
        main: tiles, unit: 'TILES',
        detail: [
          ...shapeDetailRows(s),
          ['Tile size', tile + ' in'],
          ['Tiles per ft²', tilesPerSqFt[tile].toFixed(2)],
          ['Waste factor', ((waste-1)*100).toFixed(0) + '%']
        ]
      };
    }
  },
  {
    slug: 'mulch-calculator',
    name: 'Mulch',
    category: 'home',
    desc: 'Cubic yards',
    formula: 'yd³ = ft² × depth ÷ 324',
    title: 'MULCH',
    metaTitle: 'Mulch Calculator — Cubic Yards and Bags | ProjectCalc',
    metaDesc: 'Mulch calculator. Enter bed area and depth — get cubic yards needed plus the equivalent in 2 cubic foot bags.',
    seoIntro: 'This mulch calculator tells you how many cubic yards of mulch to order based on the area of your beds and the depth of coverage. The standard rule is 1 cubic yard covers 324 square feet at 1 inch depth, or 108 ft² at 3 inches (the typical landscape depth). Bagged mulch is sold in 2 cubic foot bags; one cubic yard equals about 13.5 bags.',
    howToUse: 'Measure your bed length and width in feet — for irregular beds, switch to L-shape mode and enter the cutout, or break a curving bed into rectangles, run each separately, and add the cubic yards. Set the depth in inches: 2–3 inches is the standard for mulched shrub beds, 3 inches around trees, and 1 inch as a refresh layer over existing mulch.\n\nThe result is cubic yards (what landscape suppliers and bulk yards sell by) plus the equivalent in standard 2-cubic-foot bags from Home Depot or Lowe\'s. One cubic yard equals 13.5 bags, so the breakeven where bulk delivery beats bagged is roughly 14–15 bags\' worth — typically a 3-yard mulch bed at 3-inch depth.',
    workedExample: 'For a 20 × 5 ft bed at 3 inches deep:\n\nVolume = 20 × 5 × (3 ÷ 12) = 25 ft³. In cubic yards: 25 ÷ 27 = 0.93 yd³.\n\nIn bags: 25 ft³ ÷ 2 ft³/bag = 13 bags of standard mulch.\n\nAt ~$4 per bag, 13 bags is $52. A bulk yard charges $30–$45 per cubic yard delivered (in lots of 2+ yards usually). For under one yard, bags win on price and convenience. For 2+ yards, bulk wins on price by 30–50% but you need a place to dump the pile and a wheelbarrow + a free Saturday.\n\nFor larger beds: a 30 × 10 ft bed at 3 inches = 2.78 yd³ — bulk is clearly cheaper, plus you avoid hauling and disposing of 38 plastic bags.',
    commonMistakes: 'Going too deep. Mulch over 4 inches starves roots of oxygen and creates "mulch volcano" rot around tree trunks. Keep it 2–3 inches and pull it back from the trunk by an inch or two.\n\nForgetting to refresh, not replace. Existing mulch breaks down over the season and just needs a 1-inch top-up — not a full 3-inch reapplication. Doing the full depth every spring quickly buries your plant crowns.\n\nConfusing volumes. A "cubic yard" (27 ft³) is very different from a "square yard" (9 ft²) and from "a yard" (3 ft). Bulk suppliers sell by the cubic yard. The calculator handles the unit conversion.\n\nBuying dyed mulch where it touches food gardens or pets eat the soil. Most dyes are vegetable-based and safe, but some cheaper imports use lead-based pigments. Stick to natural cedar or hardwood mulch in vegetable beds.',
    rulesOfThumb: '1 cubic yard of mulch covers 108 ft² at 3 inches deep, or 162 ft² at 2 inches.\n\n1 cubic yard = 13.5 standard 2-cubic-foot bags. Bulk usually wins past 2 yards.\n\n3-inch depth is the residential standard for ornamental beds. Trees: 2–3 inches in a wide ring (drip line is ideal), pulled away from the trunk.\n\nPine straw goes about 6 inches deep because it compacts to half that within weeks.\n\nA pickup truck bed (6 ft) holds 1.5–2 cubic yards if heaped. Most bulk yards will load you for free if you have a tarp.',
    note: 'Recommended depth: 2–3 inches for shrub beds, 3 inches for trees, 1 inch for new gardens. Pine straw goes about 6 inches.',
    inputs: [
      { id: 'L', label: 'Bed length', unit: 'ft', default: 20, step: 1 },
      { id: 'W', label: 'Bed width', unit: 'ft', default: 5, step: 1 },
      ...SHAPE_INPUTS,
      { id: 'depth', label: 'Depth', unit: 'in', default: 3, step: 0.5 }
    ],
    calc: (data) => {
      const depth=+data.depth;
      const s = extractShape(data);
      const cubicYd = (s.net * (depth / 12)) / 27;
      const bags = Math.ceil((cubicYd * 27) / 2);
      return {
        main: cubicYd.toFixed(2), unit: 'CUBIC YARDS',
        detail: [
          ...shapeDetailRows(s),
          ['Depth', depth + ' in'],
          ['~2 ft³ bags equivalent', bags.toLocaleString()],
          ['Cubic feet', (cubicYd * 27).toFixed(1)]
        ]
      };
    }
  },
  {
    slug: 'gravel-calculator',
    name: 'Gravel',
    category: 'home',
    desc: 'Tons or yards',
    formula: 'tons = yd³ × 1.4',
    title: 'GRAVEL / TOPSOIL',
    metaTitle: 'Gravel Calculator — Cubic Yards and Tons | ProjectCalc',
    metaDesc: 'Gravel and topsoil calculator. Enter area and depth — get cubic yards plus tons. Works for driveway gravel, pea gravel, crushed stone.',
    seoIntro: 'This gravel calculator computes how much gravel, crushed stone, or topsoil you need for a driveway, patio base, or fill area. Enter the area dimensions and the depth of fill, and the calculator returns cubic yards along with the equivalent in tons (gravel weighs about 1.4 tons per cubic yard, topsoil about 1.0 ton). Most quarries sell by the ton, while landscape suppliers often sell by the cubic yard.',
    howToUse: 'Measure the area length and width in feet, set the depth in inches, and pick the material. Gravel weighs about 1.4 tons per cubic yard, sand about 1.3, and topsoil about 1.0 — the calculator returns both volume (cubic yards) and weight (tons) so you can match whichever unit your supplier prices in.\n\nFor driveway base, use 4 inches minimum over compacted subgrade; 6 inches if the soil is soft or expansive. For walkway base under pavers, 4 inches of crushed stone is typical. For drainage gravel around a French drain or foundation, 6–12 inches is common. For topsoil over a lawn, 2–4 inches is enough for new sod or seed.',
    workedExample: 'A 30 × 12 ft driveway base at 4 inches deep, using crushed gravel:\n\nVolume = 30 × 12 × (4 ÷ 12) = 120 ft³. In cubic yards: 120 ÷ 27 = 4.44 yd³.\n\nIn tons: 4.44 × 1.4 = 6.22 tons.\n\nAt $30–$50 per yard delivered, that\'s $130–$220 in materials. A pickup truck holds about 1 yard of gravel safely (gravel is heavy — don\'t max out a half-ton truck), so you\'re either getting it delivered or making 4–5 trips with a trailer.\n\nFor a 12 × 12 ft patio base under pavers at 4 inches deep: 1.78 yd³ = 2.5 tons. Add another 1 inch (0.45 yd³) of paver sand on top for the screed bed.',
    commonMistakes: 'Skipping the compaction step. Loose gravel settles 15–25% the first year. Always compact in 2-inch lifts with a plate compactor (rentable for ~$70/day) to lock the stone in place.\n\nMixing rock sizes incorrectly. Driveways need ¾-inch crushed gravel as a base with a top layer of #57 stone or pea gravel. Pure pea gravel as a base shifts under weight; pure ¾-inch on top is ankle-twisting to walk on.\n\nUnderordering. Bulk gravel is heavy and a 5% short order means a second delivery fee that often costs more than the missing material. Add 10% to your calculated volume.\n\nConfusing tons and yards. Suppliers price either way. Always confirm — a "5-yard delivery" and a "5-ton delivery" for gravel are different volumes (5 tons of gravel is only 3.6 yards).',
    rulesOfThumb: 'Gravel: 1.4 tons per cubic yard. Topsoil: 1.0 ton per cubic yard. Sand: 1.3 tons per cubic yard.\n\n1 cubic yard covers 81 ft² at 4 inches deep, or 54 ft² at 6 inches.\n\nDriveway minimum: 4 inches over compacted subgrade; 6 inches if heavy vehicles or soft soil.\n\nPaver base: 4 inches of ¾-inch crushed stone, then 1 inch of paver sand for screeding.\n\nA standard pickup bed safely hauls 1 cubic yard of gravel (about 2,800 lbs). A half-ton truck shouldn\'t try to carry more than 1 yard; ¾-ton can take 1.5 yards.',
    note: 'Gravel = ~1.4 tons/yd³. Topsoil = ~1.0 ton/yd³. Sand = ~1.3 tons/yd³. For driveways, use 4 inches min over compacted base.',
    inputs: [
      { id: 'L', label: 'Length', unit: 'ft', default: 30, step: 1 },
      { id: 'W', label: 'Width', unit: 'ft', default: 12, step: 1 },
      ...SHAPE_INPUTS,
      { id: 'depth', label: 'Depth', unit: 'in', default: 4, step: 0.5 },
      { id: 'material', label: 'Material', unit: '', type: 'select', default: 'gravel',
        options: [['gravel','Gravel (1.4 t/yd³)'],['topsoil','Topsoil (1.0 t/yd³)'],['sand','Sand (1.3 t/yd³)']] }
    ],
    calc: (data) => {
      const depth=+data.depth, material=data.material as string;
      const s = extractShape(data);
      const cubicYd = (s.net * (depth / 12)) / 27;
      const tonsMap: Record<string, number> = {gravel: 1.4, topsoil: 1.0, sand: 1.3};
      const tons = cubicYd * tonsMap[material];
      return {
        main: cubicYd.toFixed(2), unit: 'CUBIC YARDS',
        detail: [
          ...shapeDetailRows(s),
          ['Tons', tons.toFixed(2)],
          ['Depth', depth + ' in'],
          ['Material', material]
        ]
      };
    }
  },
  {
    slug: 'fence-calculator',
    name: 'Fence',
    category: 'home',
    desc: 'Posts + panels',
    formula: 'posts = length ÷ spacing + 1',
    title: 'FENCE POSTS',
    metaTitle: 'Fence Calculator — Posts, Panels, and Concrete | ProjectCalc',
    metaDesc: 'Fence calculator. Enter total length and post spacing — get posts, panels, and concrete bags needed for a complete fence.',
    seoIntro: 'This fence calculator estimates the materials you need for a privacy or picket fence: posts, panels, and concrete for setting the posts. Standard wood fence posts are spaced 8 feet on center; vinyl can be 6 or 8 feet depending on the panel system. Each post hole typically takes 1–2 bags of 60lb concrete (for a 4x4 post in a 10-inch-wide hole, 2 feet deep).',
    howToUse: 'Measure the total fence run in feet (the property boundary you\'re fencing, not the perimeter — only the sides you\'re actually building). Set the post spacing — 8 feet is standard for wood fences and matches the panel size most lumberyards stock. Vinyl fences are 6 or 8 feet depending on the panel system. Tighter spacing (6 ft) costs more in posts and concrete but produces a stronger, more level fence on uneven ground.\n\nEnter the number of gates. Each gate adds an extra post (you need a post on both sides of every gate) and replaces one panel. The calculator returns the post count, panel count, gate post count, and the bag count of 60lb concrete needed to set the posts (at the standard 2 bags per post for a 6-foot privacy fence in a 10-inch hole, 2 feet deep).',
    workedExample: 'For a 100 ft fence with 8 ft post spacing and 1 gate:\n\nPosts: ⌈100 ÷ 8⌉ + 1 + 1 (gate) = 13 + 1 + 1 = 15 posts. Panels: 13 − 1 (gate) = 12 panels. Concrete: 15 × 2 = 30 bags of 60lb.\n\nAt $25–$40 per 4×4 pressure-treated post and $80–$150 per 8-foot privacy panel, materials run $1,300–$2,400. Add concrete (30 × $5 = $150), gate hardware ($60–$120), and post caps. Total materials around $1,500–$2,700.\n\nA two-person DIY crew typically takes 2–3 days for 100 feet of privacy fence including concrete cure time. Pro install adds $25–$45/linear foot in labor, putting an installed price at $4,000–$7,000 for this run.',
    commonMistakes: 'Forgetting the corner and end posts. Every change in direction needs a post; the calculator\'s "+1" covers the end post on a straight run, but for an L-shaped or U-shaped fence, add 1 extra post per corner.\n\nUnderestimating concrete. The calculator assumes 2 bags per post for a standard 6-foot privacy fence. For 8-foot fences or windy areas, plan on 3 bags per post. For 4-foot picket fences, 1 bag per post is usually enough.\n\nSkipping the line check. Stretch a string line between corner posts BEFORE digging any intermediate holes. A fence that drifts 6 inches off-line over 100 feet looks crooked from the road and there\'s no way to fix it short of repulling posts.\n\nIgnoring local setback and HOA rules. Most jurisdictions require 6–12 inches of setback from the property line; HOAs often dictate fence style, height, and color. Check before you dig — fence projects are the most-cited cause of property line disputes.',
    rulesOfThumb: '8 ft post spacing is standard for wood fences. 6 ft is stronger and required for vinyl in some regions.\n\n2 bags of 60lb concrete per post for a 6 ft privacy fence in a 10-inch hole, 2 ft deep. Bump to 3 bags for 8 ft fences or windy areas.\n\nEnd and gate posts should be 6×6 or doubled 4×4 — never single 4×4 — because they take all the lateral load.\n\nPost hole depth = ⅓ of post height above grade. A 6 ft fence needs posts buried 2 feet (8 ft total post length).\n\nPlan for one full day of cure time before hanging panels or gates. Quick-set concrete cuts that to 4–6 hours.',
    note: 'Standard 8 ft post spacing. 2 bags of 60lb concrete per post is typical for a 6 ft fence. Add 1 to post count (you need posts on both ends).',
    inputs: [
      { id: 'L', label: 'Total fence length', unit: 'ft', default: 100, step: 1 },
      { id: 'spacing', label: 'Post spacing', unit: 'ft', default: 8, step: 1, tooltip: '8 ft is standard for wood; 6 or 8 ft for vinyl panels. Tighter spacing = more posts but stronger.' },
      { id: 'gates', label: 'Number of gates', unit: '', default: 1, step: 1 }
    ],
    calc: (data) => {
      const L=+data.L, spacing=+data.spacing, gates=+data.gates;
      const posts = Math.ceil(L / spacing) + 1 + gates;
      const panels = Math.ceil(L / spacing) - gates;
      const concreteBags = posts * 2;
      return {
        main: posts, unit: 'POSTS',
        detail: [
          ['Panels (8 ft)', panels],
          ['~60lb concrete bags', concreteBags],
          ['Gate posts (extra)', gates],
          ['Run length', L + ' ft']
        ]
      };
    }
  },
  {
    slug: 'deck-stain-calculator',
    name: 'Deck Stain',
    category: 'home',
    desc: 'Stain coverage',
    formula: 'gal = ft² ÷ 200',
    title: 'DECK STAIN',
    metaTitle: 'Deck Stain Calculator — How Much Stain Do You Need? | ProjectCalc',
    metaDesc: 'Deck stain calculator. Enter deck size and railing length — get gallons of stain or sealer needed for one or two coats.',
    seoIntro: 'This deck stain calculator tells you how many gallons of stain or sealer you need for a deck. Coverage depends on the wood condition: weathered or rough wood absorbs more (150 ft²/gal), while smooth or previously sealed wood gets full coverage (250 ft²/gal). The calculator includes deck surface plus railing area, which is often forgotten and accounts for 15–25% of total stain.',
    howToUse: 'Enter your deck length and width in feet. For an L-shaped or wraparound deck, use the L-shape toggle and enter the cutout. Add the railing perimeter in feet — every linear foot of railing has roughly 4 ft² of stain surface (top rail, bottom rail, both faces of balusters). Forgetting the railing is the #1 reason DIYers run out of stain mid-project.\n\nSet the number of coats — 2 is standard for new applications; 1 may suffice for refresh stains over an existing coat. Pick the wood condition: smooth/sealed wood gets 250 ft²/gal coverage; weathered/rough wood drops to 150 ft²/gal because the open grain absorbs much more. The calculator returns gallons rounded up since stain is sold by the gallon.',
    workedExample: 'For a 16 × 12 ft deck with 30 ft of railing, 2 coats, smooth condition:\n\nDeck area = 16 × 12 = 192 ft². Railing area = 30 × 4 = 120 ft². Total = 312 ft². With 2 coats: 624 ft² to cover. At 250 ft²/gal: 2.5 gallons → round up to 3 gallons.\n\nNotice the railing accounts for 38% of the total surface — that\'s why running out of stain on a deck job is so common when you only stain the deck itself first.\n\nAt $30–$60 per gallon for a quality semi-transparent stain, materials run $90–$180 for this deck. For a weathered deck of the same size, drop coverage to 150 ft²/gal: 624 ÷ 150 = 4.16 → 5 gallons ($150–$300). Always do a small test patch first — stain color shifts dramatically based on the wood species and existing weathering.',
    commonMistakes: 'Skipping the surface prep. Stain doesn\'t bond to dirty, mossy, or oxidized wood. Wash with deck cleaner (or a 50/50 bleach-water mix) and let dry 48 hours before staining. For weathered decks, sand with 60–80 grit before cleaning.\n\nStaining when the wood is wet or before rain. Stain needs 24–48 hours dry weather to cure. Check the forecast — a sudden rain in the first 12 hours strips the stain right off.\n\nUsing the wrong stain type. Solid stains last longest (5–7 years) but obscure wood grain. Semi-transparent shows grain and lasts 2–4 years. Clear sealers last 1–2 years and barely change appearance. Match the stain type to how often you\'re willing to recoat.\n\nStaining between deck boards. Stain dripping into the gaps between boards never fully cures and remains tacky. Use a brush to wipe excess from the edges, or accept that some drip is inevitable and set up dropcloths under the deck.',
    rulesOfThumb: 'Smooth/sealed wood: 250 ft²/gal. Weathered/rough wood: 150 ft²/gal. Always do 2 coats on new applications.\n\nRailing area = roughly 4 ft² per linear foot of railing. Add this to deck floor area before sizing stain.\n\nSolid stains last 5–7 years. Semi-transparent: 2–4 years. Sealers/clear: 1–2 years.\n\nApply at 50–90°F, in dry weather with no rain forecast for 48 hours.\n\nA 16 × 12 deck takes a single person about 4–6 hours including prep. Two people can knock it out in an afternoon.',
    note: 'New/smooth wood: ~250 ft²/gal. Weathered: ~150 ft²/gal. Always do 2 coats for new applications.',
    inputs: [
      { id: 'L', label: 'Deck length', unit: 'ft', default: 16, step: 0.5 },
      { id: 'W', label: 'Deck width', unit: 'ft', default: 12, step: 0.5 },
      ...SHAPE_INPUTS,
      { id: 'railing', label: 'Railing perimeter', unit: 'ft', default: 30, step: 1 },
      { id: 'coats', label: 'Coats', unit: '', default: 2, step: 1 },
      { id: 'condition', label: 'Wood condition', unit: '', type: 'select', default: 'smooth',
        options: [['smooth','Smooth/sealed (250 ft²/gal)'],['weathered','Weathered/rough (150 ft²/gal)']] }
    ],
    calc: (data) => {
      const railing=+data.railing, coats=+data.coats, condition=data.condition as string;
      const s = extractShape(data);
      const railArea = railing * 4;
      const totalArea = s.net + railArea;
      const coverage = condition === 'smooth' ? 250 : 150;
      const gallons = (totalArea * coats) / coverage;
      return {
        main: Math.ceil(gallons), unit: 'GALLONS',
        detail: [
          ...shapeDetailRows(s).map(([k, v]): [string, string] => k === 'Floor area' ? ['Deck area', v] : [k, v]),
          ['Railing area', railArea.toFixed(0) + ' ft²'],
          ['Total to cover', (totalArea * coats).toFixed(0) + ' ft²'],
          ['Coverage / gal', coverage + ' ft²']
        ]
      };
    }
  },
  {
    slug: 'insulation-calculator',
    name: 'Insulation',
    category: 'home',
    desc: 'Batts needed',
    formula: 'batts = wall area ÷ batt sf',
    title: 'INSULATION BATTS',
    metaTitle: 'Insulation Calculator — Batts and Bags | ProjectCalc',
    metaDesc: 'Insulation calculator for batts. Enter wall length and pick R-value — get batts and bags needed.',
    seoIntro: 'This insulation calculator estimates the number of fiberglass or mineral wool batts you need for walls or ceilings. R-13 batts (for standard 2x4 walls with 16-inch-on-center studs) cover 32 ft² each in a typical 8-foot-tall wall. R-19 (for 2x6 walls) and R-30/R-38 (for ceilings) cover less per batt because they are wider or taller. Subtract 10% for studs, doors, and windows if you want net insulation; the calculator gives gross batts.',
    howToUse: 'Enter your total wall length in feet (the perimeter of the area you\'re insulating, NOT the room area) and the wall height. Pick the R-value to match your wall or ceiling cavity: R-13 for standard 2×4 walls (the most common residential framing), R-19 for 2×6 walls (newer construction with deeper cavities for more insulation), R-30 or R-38 for ceilings and attics where building codes require higher R-values.\n\nThe result is the gross batt count (no subtraction for studs, doors, or windows). For ordering, this is what you want — the extra absorbs any edge cuts. The bag estimate matches the typical retail packaging of each R-value (R-13 sells 8 batts/bag; R-38 sells 4).',
    workedExample: 'For a 1,500 ft² house with about 60 linear feet of exterior wall and 8-foot ceilings, using R-13 batts:\n\nWall area = 60 × 8 = 480 ft². At 32 ft²/batt: 480 ÷ 32 = 15 batts.\n\nBags needed: 15 ÷ 8 batts/bag = 2 bags.\n\nAt ~$50/bag for R-13 ($6.25/batt), materials cost $100. The same house with R-19 batts (24 ft²/batt) needs 20 batts in 4 bags at ~$60/bag = $240.\n\nFor ceilings: 1,500 ft² of ceiling at R-30 (24 ft²/batt) = 63 batts in 16 bags at ~$45/bag = $720. Ceiling insulation alone is typically the biggest insulation line item — and the highest-impact one for energy bills.',
    commonMistakes: 'Stuffing batts. Compressing R-13 to fit a tight cavity drops the actual R-value to R-9 or R-10. Cut batts to fit; don\'t squish them.\n\nLeaving gaps around outlets, switches, and windows. Air leaks defeat the insulation. Use spray foam (one can per 8–10 outlets) to seal small gaps before installing batts.\n\nInsulating without a vapor barrier in cold climates. R-13 unfaced batts in a wall in Minnesota will trap moisture inside the cavity and rot the studs within a few years. Use kraft-faced batts or add a separate poly vapor barrier on the warm side.\n\nMixing R-values to save money. The lowest R-value in your wall determines effective performance. R-19 in 80% of the wall and R-13 in 20% performs like R-13 across the whole wall once thermal bridging is considered.',
    rulesOfThumb: 'R-13: 32 ft²/batt for 16" o.c. 2×4 walls, 8 ft tall. R-19: 24 ft²/batt for 2×6 walls. R-30: 24 ft²/batt for ceilings. R-38: 16 ft²/batt for high-R ceilings.\n\nAlways wear a respirator (N95 or better) and long sleeves when handling fiberglass — itch lasts for days.\n\nCode minimums vary by climate: ceiling R-38 in cold zones, R-30 in warm; walls R-13 minimum, R-19 in cold zones.\n\nSpray foam outperforms batts (about R-6 per inch closed-cell vs R-3.5 per inch fiberglass) but costs 3–5× as much per ft².\n\nOld fiberglass loses about 5% R-value per decade as it settles and absorbs dust. Worth replacing in attics older than 30 years.',
    note: 'Standard R-13 batt covers 32 ft² (16" OC, 8 ft tall). Subtract ~10% for studs/openings for net.',
    inputs: [
      { id: 'L', label: 'Total wall length', unit: 'ft', default: 60, step: 1 },
      { id: 'H', label: 'Wall height', unit: 'ft', default: 8, step: 0.5 },
      { id: 'rval', label: 'R-value', unit: '', type: 'select', default: 'r13',
        tooltip: 'R-13 is for standard 2x4 walls. R-19 for 2x6 walls. R-30 and R-38 are for ceilings/attics.',
        options: [['r13','R-13 (2x4 wall)'],['r19','R-19 (2x6 wall)'],['r30','R-30 (ceiling)'],['r38','R-38 (ceiling)']] }
    ],
    calc: (data) => {
      const L=+data.L, H=+data.H, rval=data.rval as string;
      const area = L * H;
      const sfPerBatt: Record<string, number> = {r13: 32, r19: 24, r30: 24, r38: 16};
      const batts = Math.ceil(area / sfPerBatt[rval]);
      const bagsizes: Record<string, number> = {r13: 8, r19: 6, r30: 4, r38: 4};
      const bags = Math.ceil(batts / bagsizes[rval]);
      return {
        main: batts, unit: rval.toUpperCase() + ' BATTS',
        detail: [
          ['Wall area', area.toFixed(0) + ' ft²'],
          ['Coverage / batt', sfPerBatt[rval] + ' ft²'],
          ['~Bags needed', bags],
          ['Profile', rval.toUpperCase()]
        ]
      };
    }
  },
  {
    slug: 'siding-calculator',
    name: 'Siding',
    category: 'construction',
    trade: 'Masonry & Siding',
    desc: 'Squares needed',
    formula: 'squares = ft² ÷ 100',
    title: 'SIDING',
    metaTitle: 'Siding Calculator — Squares for Vinyl, Fiber Cement | ProjectCalc',
    metaDesc: 'Siding calculator. Subtract windows and doors from wall area — get squares of siding to order with 10% waste.',
    seoIntro: 'This siding calculator gives you the number of squares of siding (vinyl, fiber cement, lap, or panel) you need to cover the exterior of a house. One square equals 100 square feet of finished wall. Most siding is sold by the square at home centers and lumber yards. The calculator subtracts window and door area from gross wall area and applies a 10% waste factor.',
    howToUse: 'Measure the gross exterior wall area of the house. The simplest approach: measure perimeter × wall height for the rectangular portions. For gable ends (the triangular wall portions under a roof slope), measure the gable height × half the wall width and add. For multi-story houses, measure each level separately and sum.\n\nSubtract the area of windows and doors from the gross — a standard window is 12–15 ft², a 6-foot patio door is 42 ft², a single entry door is 21 ft². The calculator subtracts openings, applies a 10% waste factor, and returns squares (1 square = 100 ft²) — the standard unit siding is sold by at home centers and lumberyards.',
    workedExample: 'For a 2-story 24 × 32 ft house with 9-foot wall heights, six 15 ft² windows, and one 21 ft² entry door:\n\nPerimeter = 2 × (24 + 32) = 112 ft. Wall area = 112 × 9 × 2 (two stories) = 2,016 ft². Subtract gables and windows.\n\nGable area (4/12 pitch): for a 24-ft gable, peak height = 24 × (4/24) = 4 ft. Gable triangle area = ½ × 24 × 4 = 48 ft². Two gables = 96 ft². Total gross wall area = 2,016 + 96 = 2,112 ft².\n\nOpenings: 6 × 15 + 21 = 111 ft². Net wall area = 2,001 ft².\n\nSquares with 10% waste: 2,001 ÷ 100 × 1.10 = 22 squares.\n\nAt $200–$400/square for vinyl or $500–$900/square for fiber cement, materials run $4,400–$19,800. Trim, j-channel, corner posts, and starter strip add another $500–$1,500.',
    commonMistakes: 'Forgetting the gable ends. A typical house has 50–150 ft² of gable wall hidden in the slope — easy to miss when eyeballing from the ground.\n\nUnderordering trim. Vinyl trim (j-channel, corner posts, starter strip) is sold separately from the siding squares and adds 15–25% to the materials budget. Easy to forget when costing a project.\n\nSkipping house wrap. Code requires a weather-resistant barrier behind siding. House wrap (Tyvek or equivalent) costs ~$0.20/ft² and is the cheapest insurance against bulk water intrusion.\n\nMixing siding lots on visible elevations. Vinyl color shifts slightly between lots. Order all your siding from a single batch at the start; if you need a partial reorder, save it for the back wall where mismatches are less visible.',
    rulesOfThumb: '1 square = 100 ft² of finished wall. All siding is sold by the square.\n\nStandard window: 12–18 ft². Patio door: 40–50 ft². Entry door: 20–22 ft².\n\nGable area = ½ × wall width × peak height. Peak height = wall width × (pitch ÷ 12) for symmetric gables.\n\n10% waste covers cuts and trim. Bump to 15% for staggered or shake-style profiles.\n\nVinyl runs $200–$400/square installed. Fiber cement (HardiePlank) runs $500–$900/square installed and lasts 2–3× longer.',
    note: '1 square = 100 ft² of finished wall. Vinyl, fiber cement, lap, panel — all sold by the square. 10% waste.',
    inputs: [
      { id: 'wallArea', label: 'Total wall area', unit: 'ft²', default: 1600, step: 50 },
      { id: 'openings', label: 'Window/door area to subtract', unit: 'ft²', default: 120, step: 10 }
    ],
    calc: (data) => {
      const wallArea=+data.wallArea, openings=+data.openings;
      const net = Math.max(0, wallArea - openings);
      const squares = (net / 100) * 1.10;
      return {
        main: squares.toFixed(2), unit: 'SQUARES',
        detail: [
          ['Gross wall area', wallArea.toFixed(0) + ' ft²'],
          ['Net (after openings)', net.toFixed(0) + ' ft²'],
          ['Waste factor', '10%'],
          ['Round up to', Math.ceil(squares) + ' sq']
        ]
      };
    }
  },
  {
    slug: 'sod-calculator',
    name: 'Sod',
    category: 'home',
    desc: 'Yard pallets',
    formula: 'pallets = ft² ÷ 450',
    title: 'SOD FOR YARD',
    metaTitle: 'Sod Calculator — Pallets for Your Yard | ProjectCalc',
    metaDesc: 'Sod calculator. Enter yard size minus hardscape — get pallets and rolls needed for a complete lawn install.',
    seoIntro: 'This sod calculator computes how many pallets of sod you need for a new lawn. A standard sod pallet covers about 450 square feet (varies by supplier; some are 400, some are 500). Individual rolls are typically 10 ft² each. Subtract any hardscape (driveways, walkways, beds) from your gross yard size to avoid over-ordering.',
    howToUse: 'Measure your yard length and width in feet. For irregular yards, use the L-shape toggle. Enter the total area of any hardscape to exclude — driveways, walkways, planting beds, deck footprint, AC unit pads. The calculator subtracts that from the gross area and returns pallet count (most suppliers palletize sod at 450 ft²) plus the equivalent in individual 10-ft² rolls if you only need a small patch.\n\nPallets are how sod is sold for installs; rolls are for patching small dead spots. Always order one extra pallet for cuts around irregular edges and beds — leftover sod placed in the shade and watered survives 3–5 days for emergency repairs.',
    workedExample: 'For a 50 × 30 ft front yard (1,500 ft²) minus 200 ft² of driveway and 100 ft² of beds:\n\nNet sod area: 1,500 − 300 = 1,200 ft². Pallets: 1,200 ÷ 450 = 2.67 → 3 pallets. Rolls equivalent: 1,200 ÷ 10 = 120 rolls.\n\nAt $200–$400 per pallet delivered (varies by region and grass type), materials run $600–$1,200 for this yard. Pro install adds $0.50–$1.50 per ft² in labor (~$600–$1,800), making total installed cost $1,200–$3,000 for 1,200 ft² of new lawn.\n\nFor a small patch (say a 6 × 8 ft dead spot = 48 ft²), buy 5 individual rolls instead of a full pallet. Most landscape yards sell loose rolls if you ask.',
    commonMistakes: 'Skipping soil prep. Sod laid over compacted clay or weedy soil dies within weeks. Spend the day before install loosening the top 2–3 inches with a tiller, removing weeds, raking smooth.\n\nBuying sod that doesn\'t match your sun exposure. Bermuda needs full sun; St. Augustine tolerates shade; Kentucky bluegrass wants cool climates. Match the variety to your yard before ordering.\n\nLetting pallets sit. Sod is alive — it deteriorates within 24–48 hours of being cut, faster in heat. Order delivery the morning of your install, not days ahead.\n\nUnderwatering the first week. New sod needs 1+ inch of water daily for 7–10 days while roots establish. Most failures trace back to insufficient first-week watering.',
    rulesOfThumb: '1 pallet covers 450 ft² (varies 400–500 by supplier). 1 individual roll = 10 ft². 1 pallet ≈ 21 × 21 ft.\n\nOver 1,000 ft²: pallets win on cost. Under 100 ft²: bagged grass seed is cheaper than even a single pallet.\n\nBest install temps: 50–80°F for cool-season grasses, 60–95°F for warm-season. Avoid sodding in midsummer heat.\n\nA pallet weighs 1,500–3,000 lbs and needs a forklift or pallet jack to unload. Most delivery companies will set it on your driveway, not lawn.\n\nWalking on new sod the first 2 weeks compacts roots and creates dead spots. Stay off until you can pull a corner and feel resistance from rooted runners.',
    note: '1 pallet ≈ 450 ft² (varies by supplier, 400–500 typical). 1 pallet covers ~21×21 ft.',
    inputs: [
      { id: 'L', label: 'Yard length', unit: 'ft', default: 50, step: 1 },
      { id: 'W', label: 'Yard width', unit: 'ft', default: 30, step: 1 },
      ...SHAPE_INPUTS,
      { id: 'subtract', label: 'Hardscape to exclude', unit: 'ft²', default: 0, step: 10 }
    ],
    calc: (data) => {
      const subtract=+data.subtract;
      const s = extractShape(data);
      const net = Math.max(0, s.net - subtract);
      const pallets = Math.ceil(net / 450);
      const rolls = Math.ceil(net / 10);
      return {
        main: pallets, unit: 'PALLETS',
        detail: [
          ...shapeDetailRows(s),
          ['Hardscape excluded', subtract.toLocaleString() + ' ft²'],
          ['Net to sod', net.toLocaleString() + ' ft²'],
          ['~Individual rolls', rolls.toLocaleString()],
          ['Coverage / pallet', '450 ft²']
        ]
      };
    }
  },
  {
    slug: 'brick-calculator',
    name: 'Brick',
    category: 'construction',
    trade: 'Masonry & Siding',
    desc: 'Bricks per wall',
    formula: 'bricks = ft² × 6.86',
    title: 'BRICK QUANTITY',
    metaTitle: 'Brick Calculator — How Many Bricks Per Wall | ProjectCalc',
    metaDesc: 'Brick calculator for modular brick walls. Get brick count and mortar bags including 5% waste.',
    seoIntro: 'This brick calculator estimates the number of modular bricks (7⅝ × 2¼ × 3⅝ inches) you need for a wall, plus the bags of mortar required to lay them. Modular brick with a standard ⅜-inch mortar joint runs 6.86 bricks per square foot. The calculator subtracts the area of windows and doors and adds 5% waste for breakage and cuts.',
    howToUse: 'Measure your wall length and height in feet. Subtract the area of any windows or doors (a standard window is about 15 ft², a door is about 21 ft²) — the calculator handles the math, just enter the total opening area in ft². The result is the brick count for modular brick (the most common residential format at 7⅝ × 2¼ × 3⅝ inches with a ⅜-inch mortar joint, which works out to 6.86 bricks per ft² of wall surface).\n\nMortar bag count assumes 125 modular bricks per 80-pound bag of Type N or S mortar — typical for residential brick veneer. The calculator includes 5% waste for breakage and cuts. Order full pallets — most yards palletize at 500 or 750 brick depending on supplier.',
    workedExample: 'For a 20 × 8 ft wall with one 15 ft² window:\n\nWall area = (20 × 8) − 15 = 145 ft². At 6.86 bricks/ft² with 5% waste: 145 × 6.86 × 1.05 = 1,045 bricks.\n\nMortar bags: 1,045 ÷ 125 = 8.4 → 9 bags of 80lb Type N.\n\nAt $0.50–$1.50 per modular brick (common red clay) and $7–$10 per 80lb mortar bag, materials run $585–$1,660. Brick veneer over a wood-framed wall also needs galvanized brick ties (1 per 2.67 ft² of wall = ~55 ties for this wall) and a 1-inch air gap with weep holes at the bottom course.\n\nPro masons charge $8–$15/ft² for brick veneer install (~$1,160–$2,175 for this wall) on top of the materials. DIY is possible but slow — a beginner lays 50–100 bricks per hour vs 200–300 for a pro.',
    commonMistakes: 'Confusing modular with queen-size or oversized brick. Queen brick (8 × 2¾ × 3⅝) covers the same wall in fewer bricks (~5.8/ft²) but each brick costs more. Always confirm the brick format your supplier stocks before applying the 6.86/ft² number.\n\nUnderordering mortar. The 125 bricks/bag rule is for ⅜-inch joints. Larger joints (½-inch) drop yield to 100/bag — order 25% more mortar.\n\nSkipping weep holes and flashing. Brick is not waterproof — it absorbs and releases moisture. Without weep holes (small gaps at the base course every 32 inches) and through-wall flashing, water collects behind the veneer and rots the framing.\n\nBuilding during cold weather without protection. Mortar shouldn\'t cure below 40°F. Cover finished walls with insulated tarps if temps drop, or wait for warmer weather.',
    rulesOfThumb: 'Modular brick: 6.86 per ft² with ⅜-inch mortar joints. Queen brick: ~5.8 per ft². Oversized: ~5 per ft².\n\n5% waste minimum for residential walls. 10% waste for cut-up walls with lots of openings or a chimney.\n\n1 bag (80lb) of Type N mortar lays about 125 modular bricks at ⅜-inch joint.\n\nBrick ties: 1 per 2.67 ft² of veneer, embedded in the mortar joint and screwed to the wall sheathing.\n\nA pro mason lays 300–500 bricks per day. DIY pace is typically 100–200/day for first-timers.',
    note: 'Modular brick (7⅝" × 2¼" × 3⅝") with ⅜" mortar joint = 6.86 bricks/ft². 5% waste for cuts.',
    inputs: [
      { id: 'L', label: 'Wall length', unit: 'ft', default: 20, step: 1 },
      { id: 'H', label: 'Wall height', unit: 'ft', default: 8, step: 0.5 },
      { id: 'opening', label: 'Openings (doors/windows)', unit: 'ft²', default: 0, step: 1 }
    ],
    calc: (data) => {
      const L=+data.L, H=+data.H, opening=+data.opening;
      const wallArea = (L * H) - opening;
      const bricks = Math.ceil(wallArea * 6.86 * 1.05);
      const mortarBags = Math.ceil(bricks / 125);
      return {
        main: bricks.toLocaleString(), unit: 'BRICKS',
        detail: [
          ['Net wall area', wallArea.toFixed(0) + ' ft²'],
          ['Per ft² (modular)', '6.86'],
          ['~Mortar bags (70 lb)', mortarBags],
          ['Includes 5% waste', '✓']
        ]
      };
    }
  },
  {
    slug: 'mortar-grout-calculator',
    name: 'Mortar / Grout',
    category: 'construction',
    trade: 'Masonry & Siding',
    desc: 'Bags for brick or tile',
    formula: 'bags = volume ÷ yield',
    title: 'MORTAR / GROUT BAGS',
    metaTitle: 'Mortar & Grout Calculator — Bags for Brick or Tile | ProjectCalc',
    metaDesc: 'Mortar and grout calculator. Pick brick mortar or tile grout, enter your area and joint size — get the bags to order with waste built in.',
    seoIntro: 'This mortar and grout calculator handles two of the most common masonry quantities: brick mortar in 80-pound bags (Type N or S) and tile grout in 25-pound bags. Pick a mode, enter your wall area or tile area along with the joint size, and the calculator estimates the bags to order with waste factored in. Brick math assumes modular brick at 6.86 per square foot with a 3/8-inch mortar joint and 30 bricks per 80-lb bag. Tile math computes grout volume from joint cross-section using tile size, joint width, and tile thickness — the same approach manufacturers use to publish coverage charts. ESTIMATE ONLY — verify with your supplier and the manufacturer\'s coverage chart for the specific product.',
    note: 'Brick mortar = 80 lb bags Type N/S, ~30 bricks/bag at 3/8" joint. Tile grout = 25 lb bags. Estimate only — verify with supplier.',
    inputs: [
      { id: 'mode', label: 'What are you grouting?', unit: '', type: 'select', default: 'brick',
        options: [['brick','Brick mortar (Type N/S)'],['tile','Tile grout']] },
      { id: 'area', unit: 'ft²', default: 200, step: 10,
        label: (d) => d.mode === 'brick' ? 'Wall area (gross)' : 'Tile area to grout' },
      { id: 'tileSize', label: 'Tile size', unit: '', type: 'select', default: '12x12',
        tooltip: 'Used in tile grout mode only. Larger tiles need less grout per square foot because the joint length per area drops.',
        options: [['4x4','4×4 in'],['6x6','6×6 in'],['8x8','8×8 in'],['12x12','12×12 in'],['18x18','18×18 in'],['24x24','24×24 in']] },
      { id: 'joint', label: 'Joint width', unit: '', type: 'select', default: '1/8',
        tooltip: 'Tile typically uses 1/16 to 1/4 in. Brick mortar joints are standard 3/8 in.',
        options: [['1/16','1/16 in (rectified)'],['1/8','1/8 in'],['3/16','3/16 in'],['1/4','1/4 in'],['3/8','3/8 in (brick std)']] },
      { id: 'tileThk', label: 'Tile thickness', unit: 'in', default: 0.375, step: 0.0625,
        tooltip: 'Used in tile grout mode only. Standard ceramic and porcelain are about 3/8 in. Thin-set tiles run 1/4 in.' }
    ],
    calc: (data) => {
      const mode = data.mode as string;
      const area = +data.area;
      const jointStr = data.joint as string;
      const jointMap: Record<string, number> = { '1/16': 0.0625, '1/8': 0.125, '3/16': 0.1875, '1/4': 0.25, '3/8': 0.375 };
      const jointW = jointMap[jointStr] ?? 0.125;

      if (mode === 'brick') {
        const bricks = area * 6.86;
        const bags = Math.ceil((bricks / 30) * 1.10);
        return {
          main: bags, unit: '80 lb BAGS',
          detail: [
            ['Mode', 'Brick mortar (Type N/S)'],
            ['Wall area', area.toLocaleString() + ' ft²'],
            ['Bricks (modular, 6.86/ft²)', Math.ceil(bricks).toLocaleString()],
            ['Bag yield', '~30 bricks per 80 lb bag at 3/8" joint'],
            ['10% waste', '✓'],
            ['Disclaimer', 'Estimate only — verify with supplier']
          ]
        };
      }

      const tileSize = data.tileSize as string;
      const [tw, tl] = tileSize.split('x').map(Number);
      const tileThk = +data.tileThk;
      const groutCuInPerFt2 = ((tw + tl) / (tw * tl)) * 144 * jointW * tileThk;
      const totalCuIn = groutCuInPerFt2 * area;
      const bagYieldCuIn = 220;
      const bags = Math.ceil((totalCuIn / bagYieldCuIn) * 1.10);
      return {
        main: bags, unit: '25 lb BAGS',
        detail: [
          ['Mode', 'Tile grout'],
          ['Tile area', area.toLocaleString() + ' ft²'],
          ['Tile size', tileSize + ' in'],
          ['Joint width', jointStr + ' in'],
          ['Joint depth (tile thickness)', tileThk + ' in'],
          ['Grout volume', (totalCuIn / 1728).toFixed(2) + ' ft³'],
          ['Bag yield (25 lb)', '~220 in³ usable'],
          ['10% waste', '✓'],
          ['Disclaimer', 'Estimate only — verify with supplier']
        ]
      };
    }
  },
  {
    slug: 'cmu-block-calculator',
    name: 'CMU Block',
    category: 'construction',
    trade: 'Masonry & Siding',
    desc: 'Blocks per wall',
    formula: 'blocks = ft² ÷ 0.889',
    title: 'CMU BLOCK COUNT',
    metaTitle: 'CMU Block Calculator — Blocks Per Wall | ProjectCalc',
    metaDesc: 'CMU block calculator. Wall length × height minus openings → block count, mortar bags, and rebar runs. Standard 8×8×16 face math.',
    seoIntro: 'This CMU calculator estimates the number of concrete masonry units (blocks) for a wall, plus the mortar bags and optional rebar runs. The math assumes standard nominal sizes — face dimension 16" × 8" with a 3/8-inch mortar joint, giving 1.125 blocks per square foot of wall (about 0.889 ft² per block face). Mortar adds three 80-lb bags of Type S per 100 blocks. Rebar follows the IRC and IBC pattern of #4 vertical at 4 ft on center plus #4 horizontal in every fourth course bond beam — typical for non-engineered residential and light commercial. ESTIMATE ONLY — for engineered or load-bearing CMU walls verify with a structural engineer.',
    note: '1.125 blocks/ft² (8×8×16 face). 5% waste. Mortar = 3 × 80-lb bags per 100 blocks. Estimate only — verify structural designs with engineer.',
    inputs: [
      { id: 'L', label: 'Wall length', unit: 'ft', default: 30, step: 1 },
      { id: 'H', label: 'Wall height', unit: 'ft', default: 8, step: 0.5 },
      { id: 'opening', label: 'Openings (doors/windows)', unit: 'ft²', default: 0, step: 1 },
      { id: 'block', label: 'Block size (W×H×L)', unit: '', type: 'select', default: '8x8x16',
        tooltip: 'All standard CMU has the same 16×8 face — only the depth changes. 4 in for partitions, 6/8 in for typical structural walls, 12 in for heavy loads or basements.',
        options: [['4x8x16','4×8×16 (partition)'],['6x8x16','6×8×16'],['8x8x16','8×8×16 (standard)'],['12x8x16','12×8×16 (heavy)']] },
      { id: 'rebar', label: 'Include rebar?', unit: '', type: 'select', default: 'no',
        tooltip: 'Adds #4 (½ in) vertical at 4 ft on center and #4 horizontal in every fourth course bond beam — typical non-engineered residential pattern.',
        options: [['no','No'],['yes','Yes (#4 vert 4 ft o.c., #4 horiz every 4 courses)']] }
    ],
    calc: (data) => {
      const L = +data.L, H = +data.H, opening = +data.opening;
      const block = data.block as string;
      const rebar = data.rebar as string;
      const wallArea = Math.max(0, L * H - opening);
      const blocks = Math.ceil((wallArea / 0.889) * 1.05);
      const mortarBags = Math.ceil((blocks / 100) * 3);

      const detail: [string, string | number][] = [
        ['Block size', block],
        ['Net wall area', wallArea.toFixed(0) + ' ft²'],
        ['Blocks per ft²', '1.125 (face 16"×8")'],
        ['Mortar bags (80 lb Type S)', mortarBags + ' (3 per 100 blocks)'],
        ['5% waste', '✓']
      ];

      if (rebar === 'yes') {
        const vBars = Math.ceil(L / 4) + 1;
        const vRebarLF = vBars * Math.ceil(H);
        const courses = Math.floor((H * 12) / 8);
        const hRebarRows = Math.max(1, Math.floor(courses / 4));
        const hRebarLF = hRebarRows * Math.ceil(L);
        detail.push(['Vertical #4 rebar', vRebarLF + ' lin ft (' + vBars + ' bars × ' + Math.ceil(H) + ' ft)']);
        detail.push(['Horizontal #4 rebar', hRebarLF + ' lin ft (' + hRebarRows + ' rows × ' + Math.ceil(L) + ' ft)']);
      }

      detail.push(['Disclaimer', 'Estimate only — engineer-verify load-bearing walls']);

      return {
        main: blocks.toLocaleString(),
        unit: 'BLOCKS',
        detail
      };
    }
  },
  {
    slug: 'stone-veneer-calculator',
    name: 'Stone Veneer',
    category: 'construction',
    trade: 'Masonry & Siding',
    desc: 'Coverage square footage',
    formula: 'flats = ft² − (corners × 0.75)',
    title: 'STONE VENEER COVERAGE',
    metaTitle: 'Stone Veneer Calculator — Flats, Corners, Mortar | ProjectCalc',
    metaDesc: 'Stone veneer calculator. Get sq ft of flats, lin ft of corners, mortar bags, and lath sheets for a manufactured stone install.',
    seoIntro: 'This stone veneer calculator estimates the materials for a manufactured stone install: flats sold by the square foot, corner pieces sold by the linear foot, mortar in 80-lb bags, and metal lath in standard 27"×96" sheets. Each linear foot of outside corner replaces about 0.75 ft² of flat coverage, so the calculator deducts that to keep you from double-buying. Mortar runs about three 80-lb bags per 100 ft² with full mortar joints; dry-stack styles drop closer to one bag per 100 ft². ESTIMATE ONLY — manufacturer coverage rates vary; verify against the spec sheet for the exact product.',
    note: '1 lin ft outside corner ≈ 0.75 ft² of flat coverage. Full-joint mortar ≈ 3 bags / 100 ft². 10% waste built in. Estimate only — verify with veneer manufacturer.',
    inputs: [
      { id: 'L', label: 'Wall length', unit: 'ft', default: 20, step: 1 },
      { id: 'H', label: 'Wall height', unit: 'ft', default: 8, step: 0.5 },
      { id: 'opening', label: 'Openings (doors/windows)', unit: 'ft²', default: 0, step: 1 },
      { id: 'corners', label: 'Outside corner', unit: 'lin ft', default: 0, step: 1,
        tooltip: 'Total linear feet of outside corners on the wall. Each lin ft replaces about 0.75 ft² of flat veneer.' },
      { id: 'jointType', label: 'Joint style', unit: '', type: 'select', default: 'mortar',
        tooltip: 'Full mortar joint = traditional grouted look (more mortar). Dry stack = stones butted with minimal joint visible (less mortar).',
        options: [['mortar','Full mortar joint'],['drystack','Dry stack']] }
    ],
    calc: (data) => {
      const L = +data.L, H = +data.H, opening = +data.opening, corners = +data.corners;
      const jointType = data.jointType as string;
      const grossArea = Math.max(0, L * H - opening);
      const cornerCoverage = corners * 0.75;
      const flatsNeeded = Math.max(0, grossArea - cornerCoverage);
      const flatsWithWaste = Math.ceil(flatsNeeded * 1.10);
      const cornersWithWaste = Math.ceil(corners * 1.10);
      const mortarRate = jointType === 'mortar' ? 3 : 1;
      const mortarBags = Math.ceil((grossArea / 100) * mortarRate);
      const lathSheets = Math.ceil(grossArea / 18);
      return {
        main: flatsWithWaste.toLocaleString(),
        unit: 'FT² FLATS',
        detail: [
          ['Net wall area', grossArea.toFixed(0) + ' ft²'],
          ['Outside corner', cornersWithWaste + ' lin ft (10% waste)'],
          ['Mortar bags (80 lb Type S)', mortarBags + ' (' + mortarRate + ' per 100 ft²)'],
          ['Metal lath sheets', lathSheets + ' (27"×96" = 18 ft²)'],
          ['10% waste built in', '✓'],
          ['Disclaimer', 'Estimate only — verify with veneer manufacturer']
        ]
      };
    }
  },
  {
    slug: 'stucco-calculator',
    name: 'Stucco',
    category: 'construction',
    trade: 'Masonry & Siding',
    desc: 'Bags per ft²',
    formula: '3-coat ≈ 1 bag / 4 ft²',
    title: 'STUCCO BAGS',
    metaTitle: 'Stucco Calculator — Bags Per Square Footage | ProjectCalc',
    metaDesc: 'Stucco calculator for traditional 3-coat or 1-coat synthetic. Bags per coat, lath sheets, total — with 10% waste.',
    seoIntro: 'This stucco calculator estimates 80-lb bag count for an exterior stucco job. Traditional 3-coat (scratch + brown + finish) burns roughly one 80-lb bag per 8 ft² for the scratch coat, another for the brown coat, and one per 12 ft² for the finish coat — about 38 bags per 100 ft² of wall. One-coat synthetic systems run closer to one bag per 12 ft² total. The calculator subtracts window and door area, applies a 10% waste factor, and returns bag counts by coat plus the metal lath sheets needed underneath. ESTIMATE ONLY — exact yields vary by mix design and lath substrate; verify with the manufacturer.',
    note: '3-coat ≈ 38 bags / 100 ft² (scratch + brown + finish). 1-coat ≈ 8 bags / 100 ft². 10% waste built in. Estimate only — verify with manufacturer specs.',
    inputs: [
      { id: 'L', label: 'Wall length', unit: 'ft', default: 30, step: 1 },
      { id: 'H', label: 'Wall height', unit: 'ft', default: 8, step: 0.5 },
      { id: 'opening', label: 'Openings (doors/windows)', unit: 'ft²', default: 60, step: 5 },
      { id: 'system', label: 'Stucco system', unit: '', type: 'select', default: '3coat',
        tooltip: '3-coat traditional Portland cement stucco gives the longest service life. 1-coat synthetic systems install faster but cost more per bag and are thinner.',
        options: [['3coat','3-coat traditional (scratch + brown + finish)'],['1coat','1-coat / synthetic']] }
    ],
    calc: (data) => {
      const L = +data.L, H = +data.H, opening = +data.opening;
      const system = data.system as string;
      const wallArea = Math.max(0, L * H - opening);
      const wallWithWaste = wallArea * 1.10;

      if (system === '3coat') {
        const scratchBags = Math.ceil(wallWithWaste / 8);
        const brownBags = Math.ceil(wallWithWaste / 8);
        const finishBags = Math.ceil(wallWithWaste / 12);
        const total = scratchBags + brownBags + finishBags;
        const lathSheets = Math.ceil(wallArea / 18);
        return {
          main: total, unit: '80 lb BAGS',
          detail: [
            ['System', '3-coat traditional'],
            ['Net wall area', wallArea.toFixed(0) + ' ft²'],
            ['Scratch coat (~1 bag / 8 ft²)', scratchBags + ' bags'],
            ['Brown coat (~1 bag / 8 ft²)', brownBags + ' bags'],
            ['Finish coat (~1 bag / 12 ft²)', finishBags + ' bags'],
            ['Metal lath sheets', lathSheets + ' (27"×96")'],
            ['10% waste built in', '✓'],
            ['Disclaimer', 'Estimate only — verify with manufacturer specs']
          ]
        };
      }

      const bags = Math.ceil(wallWithWaste / 12);
      return {
        main: bags, unit: '80 lb BAGS',
        detail: [
          ['System', '1-coat / synthetic'],
          ['Net wall area', wallArea.toFixed(0) + ' ft²'],
          ['Coverage', '~12 ft² per 80 lb bag'],
          ['10% waste built in', '✓'],
          ['Disclaimer', 'Estimate only — verify with manufacturer specs']
        ]
      };
    }
  },
  {
    slug: 'tuckpointing-calculator',
    name: 'Tuckpointing',
    category: 'construction',
    trade: 'Masonry & Siding',
    desc: 'Mortar for repointing',
    formula: 'ft³ = LF · w · d ÷ 144',
    title: 'TUCKPOINTING MORTAR',
    metaTitle: 'Tuckpointing Calculator — Mortar for Repointing | ProjectCalc',
    metaDesc: 'Tuckpointing calculator. Joint length × width × repoint depth → mortar volume and 80-lb bags. BIA depth rule built in.',
    seoIntro: 'This tuckpointing calculator estimates the mortar volume and 80-lb bag count needed to repoint deteriorated joints in a brick or stone wall. Volume comes from joint linear feet × joint width × repoint depth; the Brick Industry Association recommends a minimum repoint depth of 2× joint width and never less than 5/8 in for soft mortar. A standard 80-lb bag of Type N or S yields about 0.6 ft³ once mixed. The calculator builds in 15% waste because tuckpointing involves a lot of small applications and partial-bag cure-offs. ESTIMATE ONLY — for historic buildings, mortar mix must match the original by composition and hardness; verify with a preservation mason before purchasing.',
    note: 'BIA: minimum repoint depth = 2× joint width, no less than 5/8". 80 lb bag yield ≈ 0.6 ft³. 15% waste built in. Estimate only — match historic mortar carefully.',
    inputs: [
      { id: 'jointLF', label: 'Total joint linear feet', unit: 'lin ft', default: 200, step: 10,
        tooltip: 'Sum every joint to repoint. For modular brick walls, allow ~7 lin ft of joint per ft² of wall (head + bed joints combined).' },
      { id: 'jointW', label: 'Joint width', unit: '', type: 'select', default: '3/8',
        tooltip: 'Modern brick walls are typically 3/8 in. Older buildings may run 1/4 to 5/8 in. Measure several joints — they vary.',
        options: [['1/4','1/4 in'],['3/8','3/8 in (standard)'],['1/2','1/2 in'],['5/8','5/8 in']] },
      { id: 'jointD', label: 'Repoint depth', unit: 'in', default: 0.75, step: 0.125,
        tooltip: 'BIA recommends a minimum of 2× joint width and never less than 5/8 in. Standard repoint depth is 3/4 in.' }
    ],
    calc: (data) => {
      const jointLF = +data.jointLF, jointD = +data.jointD;
      const jointWStr = data.jointW as string;
      const jointMap: Record<string, number> = { '1/4': 0.25, '3/8': 0.375, '1/2': 0.5, '5/8': 0.625 };
      const jointW = jointMap[jointWStr] ?? 0.375;
      const minDepth = Math.max(jointW * 2, 0.625);
      const cuIn = jointLF * 12 * jointW * jointD;
      const cuFt = cuIn / 1728;
      const cuFtWithWaste = cuFt * 1.15;
      const bags = Math.ceil(cuFtWithWaste / 0.6);
      const depthOk = jointD >= minDepth;
      return {
        main: bags, unit: '80 lb BAGS',
        detail: [
          ['Joint length', jointLF.toLocaleString() + ' lin ft'],
          ['Joint width', jointWStr + ' in'],
          ['Repoint depth', jointD + ' in'],
          ['BIA minimum depth', minDepth + ' in (2× joint, ≥5/8")'],
          ['Depth check', depthOk ? '✓ meets BIA minimum' : '⚠ shallower than BIA minimum'],
          ['Mortar volume', cuFt.toFixed(2) + ' ft³'],
          ['Bag yield (Type N/S)', '~0.6 ft³ per 80 lb bag'],
          ['15% waste built in', '✓'],
          ['Disclaimer', 'Estimate only — match historic mortar with a preservation mason']
        ]
      };
    }
  },
  {
    slug: 'lumber-calculator',
    name: 'Lumber',
    category: 'construction',
    trade: 'Carpentry',
    desc: 'Studs · joists · rafters',
    formula: 'count = ⌈run·12 ÷ o.c.⌉ + 1',
    title: 'FRAMING LUMBER COUNT',
    metaTitle: 'Framing Calculator — Studs, Joists, Rafters | ProjectCalc',
    metaDesc: 'Free framing calculator. Pick wall studs, floor joists, ceiling joists, or rafters — enter dimensions and on-center spacing for piece count and linear feet.',
    seoIntro: 'This framing lumber calculator handles four of the most common rough-framing counts: wall studs, floor joists, ceiling joists, and roof rafters. Pick the framing type, enter the room or wall dimensions, choose your on-center spacing, and the calculator returns the piece count plus the supporting numbers a framer or estimator actually wants — pre-cut stud length for walls, total linear feet for joists, rafter pairs and per-rafter horizontal span for roofs. Standard residential spacing is 16" o.c.; engineered floors and advanced framing often run 19.2" or 24" o.c.; 12" o.c. is used in heavy-load or short-span situations.',
    howToUse: 'Pick the framing type — wall studs, floor joists, ceiling joists, or rafters. Enter the wall length (or room run for joists/rafters) in feet, plus the second dimension (ceiling height for studs, span per piece for joists, building width for rafters). Pick the on-center spacing — 16 inches is the residential standard and works for almost all wall and floor framing. 24-inch spacing is common for ceiling joists and engineered floors. 19.2-inch spacing appears in advanced framing layouts that minimize lumber waste.\n\nThe result is the piece count plus the supporting numbers a framer wants — pre-cut stud length, total linear feet of joists, rafter pairs, etc. The count is for run-spacing only — add 2–3 studs per corner or T-intersection and 4 studs per door/window opening for the full wall.',
    workedExample: 'For a 12 ft long wall with 8-foot ceilings, 16" o.c. studs:\n\nStud count = ⌈(12 × 12) ÷ 16⌉ + 1 = 9 + 1 = 10 studs (run-spacing pieces only). Pre-cut stud length: 92⅝" (the standard for an 8-foot ceiling — finished wall plus 1½" top plate plus 1½" bottom plate plus 1" drywall ceiling).\n\nPlate lumber: 12 ft × 3 = 36 linear feet (top plate doubled, bottom plate single). One bottom plate, two top plates.\n\nReal-world add: a single corner adds 2 extra studs (3-stud corner). A door opening adds 4 (king + jack on each side). For a 12-foot wall with one corner and one door opening, total studs ≈ 10 + 2 + 4 = 16.\n\nAt $4–$8 per 92⅝" pre-cut stud, materials for studs alone run $64–$128. Plates add another $40–$80.',
    commonMistakes: 'Buying full 8-foot studs for an 8-foot wall. The pre-cut 92⅝" stud accounts for top and bottom plates — buying full 8-footers means 1½" of waste per stud. Pre-cuts are also cheaper.\n\nUnder-counting at corners and openings. The on-center math gives you the pieces between the corners and openings; add 2 per corner and 4 per opening for a full-wall count.\n\nSkipping the top plate doubling. Load-bearing walls need a doubled top plate (two 2x4s stacked) for splice strength. Non-load-bearing partitions can use a single top plate, but check local code.\n\nMixing stud grades. Use #2 and Better stud-grade 2x4s for walls. Premium grades cost 30–50% more and aren\'t necessary for non-structural framing.',
    rulesOfThumb: 'Pre-cut studs: 92⅝" for 8-foot walls, 104⅝" for 9-foot, 116⅝" for 10-foot.\n\n16" o.c. is residential standard. 24" o.c. is common for ceiling joists in non-load-bearing areas.\n\nCorners: add 2 studs per outside corner (3-stud corner) or 1 stud per inside corner.\n\nOpenings: add 4 studs per door or window (king stud + jack on each side).\n\nPlates: bottom plate × 1 + top plate × 2 = 3 × wall length in linear feet of 2x4 plate stock.\n\nFloor joist span (rule of thumb): 2x10 SPF #2 spans about 14–16 ft at 16" o.c. for residential live load. Always check span tables for your specific lumber and load.',
    note: 'Counts run-spacing pieces only. Add 2–3 studs per corner/T-intersection and 4 per opening for a full wall.',
    inputs: [
      { id: 'type', label: 'Framing type', unit: '', type: 'select', default: 'wall-stud',
        options: [['wall-stud','Wall studs'],['floor-joist','Floor joists'],['ceiling-joist','Ceiling joists'],['rafter','Rafters']] },
      { id: 'L', unit: 'ft', default: 12, step: 0.5,
        label: (d) => d.type === 'wall-stud' ? 'Wall length' : 'Room length (run)' },
      { id: 'W', unit: 'ft', default: 8, step: 0.5,
        label: (d) => d.type === 'wall-stud' ? 'Ceiling height (ft)' : 'Room width (span per piece, ft)',
        tooltip: (d) => d.type === 'rafter'
          ? 'Room width in feet — each rafter spans about half of this (plus pitch and overhang). Use the building width across the ridge.'
          : d.type === 'wall-stud'
            ? 'Ceiling height in FEET — typical range 7–12 ft. Drives the pre-cut stud length, not the count. Standard 8, 9, or 10 ft walls map to pre-cut studs (92-5/8", 104-5/8", 116-5/8").'
            : 'The dimension each joist spans, in feet — typically the shorter room dimension.' },
      { id: 'oc', label: 'On-center spacing', unit: '', type: 'select', default: '16',
        tooltip: 'On-center is the distance between the center of one piece and the center of the next. 16" is standard residential, 24" is common for ceiling joists and engineered floors, 19.2" appears in advanced framing layouts.',
        options: [['12','12" o.c. (heavy load)'],['16','16" o.c. (standard)'],['19.2','19.2" o.c. (advanced framing)'],['24','24" o.c.']] }
    ],
    calc: (data) => {
      const type = data.type as string;
      const L = +data.L, W = +data.W, oc = +data.oc;
      const count = Math.ceil((L * 12) / oc) + 1;

      if (type === 'wall-stud') {
        const plateLF = L * 3;
        const preCutMap: Record<string, string> = { '8': '92-5/8"', '9': '104-5/8"', '10': '116-5/8"' };
        let preCut: string;
        if (W < 6.5 || W > 14) {
          preCut = 'Check ceiling height — input is in FEET (typical 7–12)';
        } else if (preCutMap[String(W)]) {
          preCut = preCutMap[String(W)];
        } else {
          preCut = (W * 12 - 4.5).toFixed(2) + '" (custom: height − 4½")';
        }
        return {
          main: count, unit: 'WALL STUDS',
          detail: [
            ['Spacing', oc + '" o.c.'],
            ['Wall length', L + ' ft'],
            ['Pre-cut stud length', preCut],
            ['Plate stock (LF)', plateLF + ' ft (single bottom + double top)'],
            ['Heads-up', 'Add 2–3 studs per corner, 4 per opening']
          ]
        };
      }

      if (type === 'floor-joist' || type === 'ceiling-joist') {
        const totalLF = count * W;
        return {
          main: count, unit: type === 'floor-joist' ? 'FLOOR JOISTS' : 'CEILING JOISTS',
          detail: [
            ['Each piece length', W + ' ft (room span)'],
            ['Spacing', oc + '" o.c.'],
            ['Total linear feet', totalLF.toFixed(0) + ' ft'],
            ['Run length', L + ' ft'],
            ['Stock to order', count + ' × ' + W + ' ft']
          ]
        };
      }

      // rafter
      const pairs = count;
      const totalRafters = pairs * 2;
      const horizSpan = W / 2;
      return {
        main: totalRafters, unit: 'RAFTERS',
        detail: [
          ['Rafter pairs', pairs],
          ['Horiz span / rafter', horizSpan.toFixed(2) + ' ft (½ width)'],
          ['Spacing', oc + '" o.c.'],
          ['Roof length', L + ' ft'],
          ['Pitch note', 'Multiply horiz span by pitch factor for actual length']
        ]
      };
    }
  },
  {
    slug: 'voltage-drop-calculator',
    name: 'Voltage Drop',
    category: 'construction',
    trade: 'Electrical',
    desc: 'NEC compliance',
    formula: 'VD = 2·K·I·L ÷ CM',
    title: 'VOLTAGE DROP',
    metaTitle: 'Voltage Drop Calculator — NEC Compliance | ProjectCalc',
    metaDesc: 'NEC voltage drop calculator for copper wire. Enter voltage, amps, distance, and AWG — get drop volts and percent.',
    seoIntro: 'This voltage drop calculator computes the voltage lost in a copper wire run, which the NEC recommends keeping at or below 3% on branch circuits and 5% combined feeder + branch. Use one-way distance — the calculator doubles it for round-trip. K = 12.9 for copper at 75°C. For aluminum wire, multiply the drop by 1.6.',
    howToUse: 'Enter your system voltage (120 for standard outlets/lights, 240 for dryers/AC/EV chargers), the circuit\'s continuous current draw in amps, and the one-way distance from panel to load in feet (the calculator doubles it for round-trip). Pick the wire size you\'re planning to use in AWG (American Wire Gauge — lower numbers are thicker wire).\n\nThe result is voltage dropped over the run plus drop as a percentage of system voltage. NEC recommends ≤3% drop on branch circuits and ≤5% combined for feeder + branch. The status indicator flags whether your spec passes, is marginal, or needs upsizing. K = 12.9 for copper at 75°C; for aluminum, multiply the result by 1.6.',
    workedExample: 'Say you\'re running a 20A 120V circuit 75 feet to a detached garage on 12 AWG copper:\n\nVD = (2 × 12.9 × 20 × 75) ÷ 6,530 = 38,700 ÷ 6,530 = 5.93 V. Drop %: 5.93 ÷ 120 = 4.94%.\n\nStatus: marginal — exceeds NEC\'s 3% recommendation. Voltage at the load: 120 − 5.93 = 114 V (lights flicker, motors run hot).\n\nUpsize to 10 AWG: VD = (2 × 12.9 × 20 × 75) ÷ 10,380 = 3.73 V = 3.1%. Status: still slightly marginal but acceptable. Upsize to 8 AWG: 2.34 V = 1.95% — clean install.\n\nFor a 50A EV charger at 240V over 100 ft on 6 AWG: VD = (2 × 12.9 × 50 × 100) ÷ 26,240 = 4.92 V = 2.05%. Passes comfortably.',
    commonMistakes: 'Using one-way distance without doubling. The calculator doubles it for you, but if you\'re doing the math by hand, remember the current flows panel → load → back to panel. A 75-foot run is 150 feet of conductor.\n\nAssuming voltage drop only matters for long runs. A 14 AWG circuit at 15A drops 4.7% over just 50 feet at 120V — already over NEC recommendation. Long runs make it worse, but short undersized runs also fail.\n\nForgetting that aluminum needs a bigger conductor. Aluminum wire has 1.6× the resistance of copper at the same AWG. A 10 AWG aluminum run drops the same as 12 AWG copper.\n\nSizing for ampacity but not drop. NEC requires the wire handle the current safely (ampacity), but drop is a separate calculation. A wire that\'s safe might still cause equipment to malfunction from low voltage. Always check both.',
    rulesOfThumb: 'NEC: ≤3% drop on branch circuits, ≤5% feeder + branch combined.\n\nQuick mental math: at 120V, a 20A circuit on 12 AWG drops about 1% per 15 ft of one-way run. So 75 ft = ~5% drop. Useful for ballpark sizing.\n\nCopper K = 12.9 (75°C terminations). Aluminum K = 21.2 (multiply copper drop by 1.6 for aluminum at same AWG).\n\nLong runs (100+ ft) almost always need the next-larger wire size beyond ampacity minimum.\n\nFor 240V circuits, drop percentage is half of the same circuit at 120V because voltage doubled and current halved for the same load.',
    note: 'NEC recommends ≤3% drop on branch circuits, ≤5% total. K = 12.9 for copper.',
    inputs: [
      { id: 'V', label: 'System voltage', unit: 'V', default: 120, step: 1 },
      { id: 'I', label: 'Current load', unit: 'A', default: 15, step: 1 },
      { id: 'L', label: 'One-way distance', unit: 'ft', default: 50, step: 5 },
      { id: 'awg', label: 'Wire size (AWG copper)', unit: '', type: 'select', default: '12',
        tooltip: 'AWG = American Wire Gauge. Lower numbers = thicker wire. 14 AWG for 15A circuits, 12 AWG for 20A, 10 AWG for 30A.',
        options: [['14','14 AWG (4110 CM)'],['12','12 AWG (6530 CM)'],['10','10 AWG (10380 CM)'],['8','8 AWG (16510 CM)'],['6','6 AWG (26240 CM)'],['4','4 AWG (41740 CM)'],['2','2 AWG (66360 CM)'],['1/0','1/0 AWG (105600 CM)']]}
    ],
    calc: (data) => {
      const V=+data.V, I=+data.I, L=+data.L, awg=data.awg as string;
      const cmTable: Record<string, number> = {'14':4110,'12':6530,'10':10380,'8':16510,'6':26240,'4':41740,'2':66360,'1/0':105600};
      const CM = cmTable[awg];
      const VD = (2 * 12.9 * I * L) / CM;
      const pct = (VD / V) * 100;
      const status = pct <= 3 ? 'OK — within NEC' : pct <= 5 ? 'Marginal — upsize if possible' : 'TOO HIGH — upsize wire';
      return {
        main: VD.toFixed(2), unit: 'VOLTS DROPPED',
        detail: [
          ['Drop %', pct.toFixed(2) + '%'],
          ['Voltage at load', (V - VD).toFixed(2) + ' V'],
          ['Wire CM', CM.toLocaleString()],
          ['Status', status]
        ]
      };
    }
  },
  {
    slug: 'btu-calculator',
    name: 'AC BTU',
    category: 'construction',
    trade: 'HVAC',
    desc: 'Cooling load',
    formula: 'BTU ≈ ft² × 20 × adj',
    title: 'AC BTU SIZING',
    metaTitle: 'BTU Calculator — Air Conditioner Sizing | ProjectCalc',
    metaDesc: 'Free AC BTU calculator. Enter room size, sun exposure, and occupants — get cooling BTUs and recommended unit size.',
    seoIntro: 'This BTU calculator gives a quick rule-of-thumb cooling load for sizing an air conditioner. The base rule is 20 BTU per square foot of room area, adjusted for sun exposure (±10%) and adding 600 BTU per occupant above two. For tight specs in commercial or unusual residential spaces, an HVAC contractor should run a Manual J load calculation. 12,000 BTU/hr equals one ton of cooling.',
    howToUse: 'Enter the room\'s square footage (length × width). Pick the sun exposure: heavily shaded rooms (north-facing, blocked by trees, lower floor) need 10% less cooling; very sunny rooms (south- or west-facing, large windows, top floor) need 10% more. Enter the typical number of occupants — every person above two adds 600 BTU/hr to the cooling load.\n\nThe result is the BTU/hr cooling capacity needed plus the equivalent in tons (1 ton = 12,000 BTU) and a recommended unit size. Use this for window units, mini-splits, or sizing portable AC. For whole-house central air, get a Manual J load calculation from an HVAC contractor — the rule-of-thumb method is fine for individual rooms but undersizes whole houses by 15–30%.',
    workedExample: 'For a 200 ft² bedroom with normal sun and 2 occupants:\n\nBase load = 200 × 20 = 4,000 BTU/hr. Sun adjustment: none. Occupant load: 0 (only counts above 2). Total = 4,000 BTU/hr = 0.33 tons.\n\nSuggested unit: 5,000 BTU window unit (next size up; window units come in 5K, 8K, 10K, 12K, 15K BTU sizes).\n\nFor a 350 ft² south-facing living room with 4 occupants:\n\nBase = 350 × 20 = 7,000. Sunny adjustment: × 1.10 = 7,700. Occupant load: 2 × 600 = 1,200. Total = 8,900 BTU/hr = 0.74 tons.\n\nSuggested unit: 10,000 BTU window unit, or a 1-ton mini-split for quieter operation. A 5,000 BTU unit would run continuously and never cool the room.',
    commonMistakes: 'Oversizing. Bigger isn\'t better — an oversized AC short-cycles, never running long enough to dehumidify the room. The result is a cool but clammy space. Right-size it.\n\nUndersizing for sun. A south- or west-facing room with floor-to-ceiling windows can need 30–50% more BTU than the rule-of-thumb suggests. Bump sun exposure to "sunny" and add another 1,000 BTU as a buffer.\n\nForgetting the kitchen. Kitchens generate 4,000+ BTU of waste heat from cooking, refrigeration, and dishwashing. Add 4,000 BTU to a kitchen\'s calculated load.\n\nIgnoring duct losses. For ducted central AC, ducts that run through unconditioned attics or crawlspaces lose 20–40% of the cool air. The rule-of-thumb method assumes ductless or short ducts.',
    rulesOfThumb: 'Base: 20 BTU/hr per ft². 12,000 BTU/hr = 1 ton of cooling.\n\nSun: ±10% based on heavy shade vs heavy sun. Top-floor west-facing rooms can need +20%.\n\nOccupants: +600 BTU/hr per person above 2.\n\nKitchens: add 4,000 BTU for cooking equipment.\n\nWhole-house systems: rule of thumb only as a sanity check. Get a Manual J for accurate sizing — costs $200–$500 and prevents oversized systems that short-cycle.',
    note: 'Rule of thumb. For tight specs use Manual J. Add 600 BTU/person above 2.',
    inputs: [
      { id: 'sqft', label: 'Room square footage', unit: 'ft²', default: 200, step: 10 },
      { id: 'sun', label: 'Sun exposure', unit: '', default: 'normal', type: 'select',
        options: [['shaded','Heavily shaded (-10%)'],['normal','Normal'],['sunny','Very sunny (+10%)']] },
      { id: 'occ', label: 'Occupants (regular)', unit: 'ppl', default: 2, step: 1 }
    ],
    calc: (data) => {
      const sqft=+data.sqft, sun=data.sun as string, occ=+data.occ;
      let base = sqft * 20;
      if (sun === 'shaded') base *= 0.9;
      if (sun === 'sunny') base *= 1.1;
      const extra = Math.max(0, occ - 2) * 600;
      const total = base + extra;
      const tons = total / 12000;
      return {
        main: total.toLocaleString(undefined, {maximumFractionDigits: 0}), unit: 'BTU / HR',
        detail: [
          ['Cooling tons', tons.toFixed(2)],
          ['Base load', Math.round(base).toLocaleString()],
          ['Occupant load', extra.toLocaleString()],
          ['Suggested unit', tons < 1 ? '0.75 ton' : tons < 1.5 ? '1.0 ton' : tons < 2 ? '1.5 ton' : tons < 2.5 ? '2.0 ton' : tons < 3 ? '2.5 ton' : tons < 3.5 ? '3.0 ton' : '3.5+ ton']
        ]
      };
    }
  },
  {
    slug: 'pipe-volume-calculator',
    name: 'Pipe Volume',
    category: 'construction',
    trade: 'Plumbing',
    desc: 'Water capacity',
    formula: 'V = π·r²·L ÷ 231',
    title: 'PIPE VOLUME',
    metaTitle: 'Pipe Volume Calculator — Gallons of Water | ProjectCalc',
    metaDesc: 'Pipe volume calculator. Enter inside diameter and length — get gallons of water capacity for any straight pipe run.',
    seoIntro: 'This pipe volume calculator gives the water capacity of a single straight pipe run in gallons, cubic inches, and liters. Useful for sizing water heaters, calculating purge volumes for plumbing, or estimating fill time. Multiply the result by the number of identical runs for total system volume. Diameter is the inside diameter (ID), not the nominal size. ESTIMATE ONLY — verify with a licensed plumber and local plumbing code before installation.',
    note: 'Calculates a single straight pipe run. Multiply by number of runs as needed. Estimate only — verify with a licensed plumber and local plumbing code before purchase or installation. Not a substitute for engineered drawings.',
    inputs: [
      { id: 'd', label: 'Pipe inside diameter', unit: 'in', default: 0.75, step: 0.125 },
      { id: 'L', label: 'Pipe length', unit: 'ft', default: 50, step: 1 }
    ],
    calc: (data) => {
      const d=+data.d, L=+data.L;
      const r = d / 2;
      const cubicIn = Math.PI * r * r * (L * 12);
      const gal = cubicIn / 231;
      const liters = gal * 3.7854;
      return {
        main: gal.toFixed(2), unit: 'GALLONS',
        detail: [
          ['Cubic inches', cubicIn.toFixed(0)],
          ['Liters', liters.toFixed(2)],
          ['Pipe ID', d + '"'],
          ['Length', L + ' ft'],
          ['Disclaimer', 'Estimate only — verify with licensed plumber and local code']
        ]
      };
    }
  },
  {
    slug: 'lumber-cut-calculator',
    name: 'Lumber Cuts',
    category: 'construction',
    trade: 'Carpentry',
    desc: 'Boards & waste',
    formula: 'cuts/board = stock ÷ (cut + kerf)',
    title: 'LUMBER CUT LIST',
    metaTitle: 'Lumber Cut Calculator — Boards Needed & Waste | ProjectCalc',
    metaDesc: 'Free lumber cut calculator for framers. Enter stock length, cut length, and quantity — get boards needed, cuts per board, and waste percent.',
    seoIntro: 'This lumber cut calculator tells a framer or finish carpenter exactly how many boards to buy when every cut is the same length — wall studs, blocking, cripples, jack rafters, fascia returns, deck balusters, fence pickets. Pick the stock length you can buy at the lumberyard, enter the length each cut needs to be, set how many cuts the job calls for, and the calculator subtracts a saw kerf (default 1/8") from each cut. The output is the cuts you can get per board, total boards needed (rounded up), and the leftover waste per stick. For a mixed cut list, run the calculator separately for each unique length and add the boards together.',
    note: 'Kerf-aware (default 1/8"). For mixed cut lists, run separately per length and sum.',
    inputs: [
      { id: 'stock', label: 'Stock board length', unit: '', type: 'select', default: '96',
        options: [['72','6 ft (72")'],['96','8 ft (96")'],['120','10 ft (120")'],['144','12 ft (144")'],['168','14 ft (168")'],['192','16 ft (192")'],['240','20 ft (240")']] },
      { id: 'cut', label: 'Cut length', unit: 'in', default: 92.625, step: 0.125,
        tooltip: 'Pre-cut wall stud is 92-5/8" (8 ft wall) or 104-5/8" (9 ft wall). 16" o.c. cripples are 14-1/2".' },
      { id: 'qty', label: 'Total cuts needed', unit: '', default: 30, step: 1 },
      { id: 'kerf', label: 'Saw kerf', unit: 'in', default: 0.125, step: 0.0625,
        tooltip: 'Width of material removed by the saw blade. 1/8" is standard for circular and miter saws; thin-kerf framing blades run 3/32".' }
    ],
    calc: (data) => {
      const stock = +data.stock, cut = +data.cut, qty = +data.qty, kerf = +data.kerf;
      const cutsPerBoard = Math.floor(stock / (cut + kerf));
      if (cutsPerBoard === 0) {
        return {
          main: 'N/A', unit: 'CUT TOO LONG',
          detail: [
            ['Issue', 'Cut length exceeds stock board'],
            ['Stock', (stock / 12).toFixed(2) + ' ft'],
            ['Cut', cut + '"'],
            ['Fix', 'Pick longer stock or use a scarf joint']
          ]
        };
      }
      const boards = Math.ceil(qty / cutsPerBoard);
      const wastePerBoard = stock - cutsPerBoard * (cut + kerf);
      const cutsOnLast = qty - cutsPerBoard * (boards - 1);
      const totalLinearIn = boards * stock;
      const totalUsedIn = qty * cut;
      const wastePct = ((totalLinearIn - totalUsedIn) / totalLinearIn) * 100;
      return {
        main: boards, unit: 'BOARDS NEEDED',
        detail: [
          ['Cuts per board', cutsPerBoard],
          ['Cuts on last board', cutsOnLast],
          ['Waste per board', wastePerBoard.toFixed(2) + '"'],
          ['Total waste', wastePct.toFixed(1) + '%'],
          ['Stock length', (stock / 12).toFixed(0) + ' ft']
        ]
      };
    }
  },
  {
    slug: 'conduit-fill-calculator',
    name: 'Conduit Fill',
    category: 'construction',
    trade: 'Electrical',
    desc: 'NEC % fill check',
    formula: 'fill% = (n · A_wire) ÷ A_conduit',
    title: 'CONDUIT FILL',
    metaTitle: 'Conduit Fill Calculator — NEC Chapter 9 EMT | ProjectCalc',
    metaDesc: 'Free conduit fill calculator. Enter EMT size, wire AWG, and conductor count — get NEC fill percent and pass/fail status.',
    seoIntro: 'This conduit fill calculator checks whether the wires you plan to pull fit inside an EMT (Electrical Metallic Tubing) run within NEC limits. NEC Chapter 9 caps fill at 53% for one conductor, 31% for two, and 40% for three or more. Wire areas are taken from NEC Chapter 9 Table 5 (THHN/THWN-2) and conduit internal areas from Table 4. Use it on rough-in or feeder runs to confirm the conduit size you spec\'d will pass inspection.',
    howToUse: 'Pick the EMT (Electrical Metallic Tubing) size you plan to use, the wire AWG you\'ll be pulling, and the total number of current-carrying conductors that will share the conduit. The calculator returns the percent fill plus pass/fail status against NEC Chapter 9 limits.\n\nNEC fill limits depend on the number of conductors: 53% maximum for one wire (rare — only used for single feeders), 31% for two wires, and 40% for three or more (the most common case). The cap is lower for three or more because pulling becomes harder and heat dissipation worsens as wires multiply. Wire and conduit areas come from NEC Chapter 9 Tables 4 and 5 for THHN/THWN-2 conductors in EMT.',
    workedExample: 'For a ¾-inch EMT with 3 conductors of 12 AWG THHN (a typical 20A branch run):\n\nConductor area: 3 × 0.0133 = 0.0399 in². Conduit area: 0.533 in². Fill: 0.0399 ÷ 0.533 = 7.5%.\n\nNEC limit (3+ wires): 40%. Status: passes with 32.5% headroom — plenty of room for additional circuits.\n\nFor ¾-inch EMT with 9 conductors of 12 AWG (three 20A circuits sharing the conduit): Fill = 9 × 0.0133 ÷ 0.533 = 22.4%. Still passes, but headroom shrinks.\n\nFor ½-inch EMT with 3 conductors of 6 AWG (a 50A run): Fill = 3 × 0.0507 ÷ 0.304 = 50%. Fails 40% limit — upsize to ¾-inch (3 × 0.0507 ÷ 0.533 = 28.5%, passes).',
    commonMistakes: 'Counting the ground conductor toward fill but not toward derating. Both are tracked separately by NEC: green/bare grounds count toward fill but don\'t trigger conductor-count derating like current-carrying wires do.\n\nUsing nominal conduit size as area. Nominal ¾-inch EMT has an internal area of 0.533 in², not 0.44 in² (the geometric area of a 0.75-inch circle). The calculator uses the actual NEC table values.\n\nForgetting that conduit fill caps don\'t increase by going to PVC or ENT. Different conduit types (EMT, PVC, ENT, RMC) have slightly different internal diameters per nominal size, but the 40% cap applies to all. The calculator handles EMT specifically.\n\nPulling at fill maximums. Code says 40% fill is allowed, but pulling 6+ wires through a long run at 38% fill is physically very difficult. Pros target 30–35% maximum for pull-friendliness.',
    rulesOfThumb: 'NEC fill caps: 1 wire 53%, 2 wires 31%, 3+ wires 40%.\n\n¾" EMT handles up to about 9 #12 THHN conductors (three 20A circuits) before fill becomes a concern.\n\n½" EMT is for short runs of 1–3 small conductors. Anything with 4+ wires usually wants ¾" or larger.\n\nFor long runs (50+ ft) or runs with bends, target 30–35% fill maximum to keep pulling reasonable.\n\nDerating: 4–6 current-carrying conductors in a conduit reduces ampacity to 80%; 7–9 to 70%; 10–20 to 50%. Calculator doesn\'t apply derating — handle separately.',
    note: 'NEC fill limits: 53% (1 wire), 31% (2 wires), 40% (3+). EMT + THHN/THWN-2 only.',
    inputs: [
      { id: 'conduit', label: 'EMT size', unit: '', type: 'select', default: '0.75',
        options: [['0.5','½" (0.304 in²)'],['0.75','¾" (0.533 in²)'],['1','1" (0.864 in²)'],['1.25','1¼" (1.496 in²)'],['1.5','1½" (2.036 in²)'],['2','2" (3.356 in²)']] },
      { id: 'awg', label: 'Wire AWG (THHN/THWN-2)', unit: '', type: 'select', default: '12',
        tooltip: 'AWG = American Wire Gauge. Lower numbers = thicker wire. 14 AWG for 15A circuits, 12 AWG for 20A, 10 AWG for 30A.',
        options: [['14','14 AWG (0.0097 in²)'],['12','12 AWG (0.0133 in²)'],['10','10 AWG (0.0211 in²)'],['8','8 AWG (0.0366 in²)'],['6','6 AWG (0.0507 in²)'],['4','4 AWG (0.0824 in²)'],['2','2 AWG (0.1158 in²)'],['1/0','1/0 AWG (0.1855 in²)']] },
      { id: 'n', label: 'Number of conductors', unit: '', default: 3, step: 1 }
    ],
    calc: (data) => {
      const conduit = data.conduit as string, awg = data.awg as string, n = +data.n;
      const conduitArea: Record<string, number> = {'0.5':0.304,'0.75':0.533,'1':0.864,'1.25':1.496,'1.5':2.036,'2':3.356};
      const wireArea: Record<string, number> = {'14':0.0097,'12':0.0133,'10':0.0211,'8':0.0366,'6':0.0507,'4':0.0824,'2':0.1158,'1/0':0.1855};
      const Acon = conduitArea[conduit];
      const Awire = wireArea[awg];
      const totalWireArea = n * Awire;
      const pct = (totalWireArea / Acon) * 100;
      const limit = n === 1 ? 53 : n === 2 ? 31 : 40;
      const status = pct <= limit ? 'OK — within NEC' : 'TOO HIGH — upsize conduit';
      return {
        main: pct.toFixed(1), unit: '% FILL',
        detail: [
          ['NEC limit', limit + '%'],
          ['Status', status],
          ['Conductor area', totalWireArea.toFixed(4) + ' in²'],
          ['Conduit area', Acon + ' in²'],
          ['Headroom', (limit - pct).toFixed(1) + '%']
        ]
      };
    }
  },
  {
    slug: 'wire-gauge-calculator',
    name: 'Wire Gauge (AWG)',
    category: 'construction',
    trade: 'Electrical',
    desc: 'Amps to wire size',
    formula: 'AWG = f(amps, NEC 310.16 75°C)',
    title: 'WIRE GAUGE (AWG)',
    metaTitle: 'Wire Gauge Calculator — Amps to AWG (NEC 310.16) | ProjectCalc',
    metaDesc: 'Free wire gauge calculator. Enter your circuit amps and run length — get the minimum copper or aluminum AWG per NEC 310.16 with voltage-drop bump.',
    seoIntro: 'This wire gauge calculator returns the minimum AWG (American Wire Gauge) for a copper or aluminum conductor based on circuit amperage and run length. Sizing comes from NEC Table 310.16 at 75°C terminations (the standard for residential and commercial breakers, lugs, and panelboards). The calculator also runs a 3% voltage-drop check on the chosen size and bumps up if a long run pushes drop past code-recommended limits, since NEC 210.19(A) Informational Note 4 caps branch circuits at 3%. ESTIMATE ONLY — final wire size and install must be verified by a licensed electrician and the local AHJ before any work goes in.',
    howToUse: 'Enter the circuit\'s current load in amps. Apply the 125% continuous-load factor first if applicable: dryers, EV chargers, electric heat, and any load running ≥3 hours need amps × 1.25 entered (e.g., 12A continuous → enter 15). System voltage is 120V for standard outlets and lights, 240V for dryers and AC, 208V for commercial 3-phase. One-way run length is the panel-to-load distance.\n\nPick copper (the common residential default) or aluminum (used for service entrance and large feeders to save cost on heavy gauges). The calculator returns the minimum AWG per NEC 310.16 ampacity tables, then runs a 3% voltage-drop check and bumps up to the next size if the run is too long for the picked gauge.',
    workedExample: 'For a 20A 240V circuit running 100 ft on copper:\n\nNEC 310.16 ampacity: 12 AWG copper handles 20A → start at 12 AWG. Voltage-drop check: VD = (2 × 12.9 × 20 × 100) ÷ 6,530 ÷ 240 × 100 = 3.29% — over the 3% cap.\n\nBumped to 10 AWG: VD = (2 × 12.9 × 20 × 100) ÷ 10,380 ÷ 240 × 100 = 2.07% — passes. Final spec: 10 AWG copper (one size larger than ampacity-only would dictate), 20A breaker.\n\nFor a 50A EV charger 80 ft from the panel on copper: 8 AWG handles 50A ampacity. Drop check: 1.94% — passes without a bump. Final: 8 AWG copper, 50A breaker.\n\nFor a 200A service feeder 50 ft to a sub-panel on aluminum: 4/0 aluminum at 200A, drop ~1.2% — passes. Saves significant material cost vs 3/0 copper.',
    commonMistakes: 'Forgetting the 125% continuous-load factor. NEC requires sizing wire and breaker for continuous loads (≥3 hr) at 125% of rated load. A 32A EV charger running for hours needs to be sized as if it\'s 40A.\n\nUsing residential 60°C terminations on commercial gear. Most modern panelboards have 75°C terminations (the calculator assumes this). Older or budget gear with 60°C terminations needs a larger wire for the same amperage.\n\nSizing for ampacity but not drop. Ampacity keeps the wire from melting; voltage drop keeps motors and lights running properly. Long runs almost always need the next size up beyond ampacity minimum.\n\nMixing aluminum and copper at terminations. Aluminum-to-copper junctions need anti-oxidant compound and listed connectors (CO/ALR or AL-CU rated). Otherwise corrosion creates resistive joints that overheat and burn.',
    rulesOfThumb: 'Copper ampacity (NEC 310.16, 75°C): 14 AWG = 15A · 12 = 20A · 10 = 30A · 8 = 50A · 6 = 65A · 4 = 85A · 2 = 115A · 1/0 = 150A.\n\nAluminum runs at about 80% of copper ampacity for the same AWG — usually needs the next size larger.\n\nContinuous loads (≥3 hr): apply ×1.25 to amps before sizing.\n\nVoltage drop bump: roughly add one wire size for every 50–100 ft beyond what ampacity dictates.\n\nService entrance: 4/0 aluminum or 2/0 copper handles 200A. Common residential service today.',
    note: 'NEC 310.16 75°C ampacity + 3% voltage-drop bump. Continuous loads (≥3 hr) require 125% derate — apply manually before entering amps. Estimate only — verify with a licensed electrician and local code/inspector before purchase or installation. Not a substitute for engineered drawings.',
    inputs: [
      { id: 'amps', label: 'Circuit load', unit: 'A', default: 20, step: 1,
        tooltip: 'Continuous loads (≥3 hr like EV chargers, dryers, electric heat) must be multiplied by 1.25 before entering. 12A continuous → enter 15.' },
      { id: 'V', label: 'System voltage', unit: 'V', default: 240, step: 1,
        tooltip: '120V for standard outlets/lights, 240V for dryers/AC/EV chargers, 208V for commercial 3-phase, 480V for industrial.' },
      { id: 'L', label: 'One-way run length', unit: 'ft', default: 75, step: 5 },
      { id: 'mat', label: 'Conductor material', unit: '', type: 'select', default: 'cu',
        options: [['cu','Copper'],['al','Aluminum']] }
    ],
    calc: (data) => {
      const amps = +data.amps, V = +data.V, L = +data.L, mat = data.mat as string;
      const cuAmpacity: [number, string, number][] = [[15,'14',4110],[20,'12',6530],[30,'10',10380],[50,'8',16510],[65,'6',26240],[85,'4',41740],[115,'2',66360],[150,'1/0',105600],[175,'2/0',133100],[200,'3/0',167800]];
      const alAmpacity: [number, string, number][] = [[15,'12',6530],[25,'10',10380],[40,'8',16510],[50,'6',26240],[65,'4',41740],[90,'2',66360],[120,'1/0',105600],[135,'2/0',133100],[155,'3/0',167800],[180,'4/0',211600]];
      const table = mat === 'cu' ? cuAmpacity : alAmpacity;
      const K = mat === 'cu' ? 12.9 : 21.2;
      let pickedAwg = '4/0';
      let pickedCm = 211600;
      let ampacityHit = 0;
      for (const [a, awg, cm] of table) {
        if (amps <= a) { pickedAwg = awg; pickedCm = cm; ampacityHit = a; break; }
      }
      let vdPct = (2 * K * amps * L) / pickedCm / V * 100;
      let bumped = false;
      let bumpFrom = pickedAwg;
      while (vdPct > 3) {
        const idx = table.findIndex(t => t[1] === pickedAwg);
        if (idx === -1 || idx === table.length - 1) break;
        pickedAwg = table[idx + 1][1];
        pickedCm = table[idx + 1][2];
        ampacityHit = table[idx + 1][0];
        vdPct = (2 * K * amps * L) / pickedCm / V * 100;
        bumped = true;
      }
      const breakerHint = amps <= 15 ? '15 A' : amps <= 20 ? '20 A' : amps <= 30 ? '30 A' : amps <= 50 ? '50 A' : amps <= 60 ? '60 A' : amps <= 100 ? '100 A' : amps <= 200 ? '200 A' : 'engineered';
      return {
        main: pickedAwg + ' AWG', unit: mat === 'cu' ? 'COPPER' : 'ALUMINUM',
        detail: [
          ['Sized for amps', amps + ' A (table cap ' + ampacityHit + ' A)'],
          ['Voltage drop', vdPct.toFixed(2) + '% on ' + L + ' ft'],
          ['Drop bump?', bumped ? 'Yes — upsized from ' + bumpFrom + ' AWG' : 'No'],
          ['Suggested breaker', breakerHint],
          ['Code reference', 'NEC 310.16 75°C + 210.19(A) IN 4'],
          ['Disclaimer', 'Estimate only — verify with licensed electrician + AHJ']
        ]
      };
    }
  },
  {
    slug: 'circuit-breaker-size-calculator',
    name: 'Breaker Size',
    category: 'construction',
    trade: 'Electrical',
    desc: 'Load to breaker',
    formula: 'breaker = next std ≥ load × (1.25 if continuous)',
    title: 'CIRCUIT BREAKER SIZE',
    metaTitle: 'Circuit Breaker Size Calculator — Load to Amps | ProjectCalc',
    metaDesc: 'Free breaker size calculator. Enter watts or amps + load type — get the next-standard NEC 240.6 breaker with 125% continuous-load bump.',
    seoIntro: 'This circuit breaker calculator picks the next standard breaker size (NEC 240.6) for a given load. Enter wattage or amperage and the calculator converts watts to amps using your system voltage, applies the NEC 210.20(A) 125% multiplier when the load is continuous (anything operating ≥3 hours — lighting, EV chargers, electric heat), and rounds up to the nearest standard breaker (15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100, 110, 125, 150, 175, 200 A). Motor loads use NEC 430.52 sizing (250% inverse-time breaker for typical service factor 1.15 motors) and are flagged separately. ESTIMATE ONLY — final breaker selection must be verified by a licensed electrician and the local AHJ before any work goes in.',
    note: 'NEC 240.6 standard sizes + 210.20(A) 125% continuous multiplier. Motor circuits flagged for 430.52 sizing. Estimate only — verify with a licensed electrician and local code/inspector before purchase or installation. Not a substitute for engineered drawings.',
    inputs: [
      { id: 'mode', label: 'Enter load as', unit: '', type: 'select', default: 'amps',
        options: [['amps','Amps directly'],['watts','Watts (will convert)']] },
      { id: 'value', label: (data) => data.mode === 'watts' ? 'Wattage' : 'Amperage', unit: '', default: 12, step: 1 },
      { id: 'V', label: 'System voltage (only used for watts)', unit: 'V', default: 120, step: 1 },
      { id: 'loadType', label: 'Load type', unit: '', type: 'select', default: 'continuous',
        tooltip: 'Continuous = expected to run 3+ hours (lighting, EV charger, electric heat, server room). Non-continuous = motors, dryers, ovens, intermittent loads. Motor = sized to NEC 430.52, not the 125% rule.',
        options: [['continuous','Continuous (≥3 hr — adds 25%)'],['noncont','Non-continuous'],['motor','Motor (NEC 430.52)']] }
    ],
    calc: (data) => {
      const mode = data.mode as string, V = +data.V, loadType = data.loadType as string;
      const value = +data.value;
      const baseAmps = mode === 'watts' ? value / V : value;
      let designAmps = baseAmps;
      let multNote = '1.0× (non-continuous)';
      if (loadType === 'continuous') {
        designAmps = baseAmps * 1.25;
        multNote = '1.25× (continuous, NEC 210.20(A))';
      } else if (loadType === 'motor') {
        designAmps = baseAmps * 2.5;
        multNote = '2.5× (motor inverse-time, NEC 430.52)';
      }
      const stdSizes = [15,20,25,30,35,40,45,50,60,70,80,90,100,110,125,150,175,200,225,250];
      let breaker: number | string = 'engineered';
      for (const s of stdSizes) {
        if (designAmps <= s) { breaker = s; break; }
      }
      const wireHint = breaker === 15 ? '14 AWG Cu' : breaker === 20 ? '12 AWG Cu' : breaker === 30 ? '10 AWG Cu' : breaker === 40 ? '8 AWG Cu' : breaker === 50 ? '8 AWG Cu' : breaker === 60 ? '6 AWG Cu' : breaker === 100 ? '3 AWG Cu / 1 AWG Al' : breaker === 200 ? '2/0 AWG Cu / 4/0 AWG Al' : 'see NEC 310.16';
      return {
        main: typeof breaker === 'number' ? breaker + ' A' : breaker, unit: 'BREAKER',
        detail: [
          ['Base load', baseAmps.toFixed(2) + ' A' + (mode === 'watts' ? ' (from ' + value + ' W ÷ ' + V + ' V)' : '')],
          ['Multiplier', multNote],
          ['Design amps', designAmps.toFixed(2) + ' A'],
          ['Min wire (75°C)', wireHint],
          ['Code reference', loadType === 'motor' ? 'NEC 430.52' : 'NEC 240.6 + 210.20(A)'],
          ['Disclaimer', 'Estimate only — verify with licensed electrician + AHJ']
        ]
      };
    }
  },
  {
    slug: 'panel-load-calculator',
    name: 'Panel Load',
    category: 'construction',
    trade: 'Electrical',
    desc: 'Service amperage',
    formula: 'demand = NEC 220 standard method',
    title: 'PANEL LOAD',
    metaTitle: 'Panel Load Calculator — Service Amps (NEC 220) | ProjectCalc',
    metaDesc: 'Residential service load calculator. Enter sq ft and major appliances — get total demand and recommended 100/150/200/400 A service per NEC 220.',
    seoIntro: 'This panel load calculator estimates the total demand on a residential electrical service using the NEC 220 Part III "Standard Method." It applies 3 VA/ft² for general lighting and receptacles, 1500 VA per small-appliance and laundry circuit, then NEC 220.42 demand factors (100% of the first 3000 VA + 35% of the next 117,000 VA). Major appliances — range, dryer, water heater, HVAC, EV charger — are added at their nameplate or NEC-prescribed demand. The result is a service-size recommendation: 100 A, 150 A, 200 A, or 400 A. ESTIMATE ONLY — final service sizing must be done by a licensed electrician using the actual NEC 220 Part III or IV worksheet and verified by the local AHJ.',
    note: 'NEC 220 Part III standard method, single-phase 240/120 V. Estimate only — actual service sizing requires a full Part III/IV worksheet by a licensed electrician and AHJ approval. Not a substitute for engineered drawings.',
    inputs: [
      { id: 'sqft', label: 'Conditioned floor area', unit: 'ft²', default: 2000, step: 50,
        tooltip: 'NEC 220.41 unit load: 3 VA per ft² of habitable area (excludes open porches, garages, unused attics, unfinished basements).' },
      { id: 'sa', label: 'Small-appliance circuits (kitchen, dining)', unit: '', default: 2, step: 1,
        tooltip: 'NEC 210.11(C)(1) requires at least 2; each adds 1500 VA to the load. Most homes have exactly 2.' },
      { id: 'laundry', label: 'Laundry circuits', unit: '', default: 1, step: 1 },
      { id: 'range', label: 'Electric range (kW nameplate, 0 if gas)', unit: 'kW', default: 12, step: 0.5 },
      { id: 'dryer', label: 'Electric dryer (kW, 0 if gas)', unit: 'kW', default: 5, step: 0.5 },
      { id: 'wh', label: 'Electric water heater (kW, 0 if gas)', unit: 'kW', default: 4.5, step: 0.5 },
      { id: 'ac', label: 'AC / heat pump (kW running, larger of cool/heat)', unit: 'kW', default: 5, step: 0.5,
        tooltip: 'NEC 220.51 / 220.60: include the larger of heat or AC; do not double-count.' },
      { id: 'ev', label: 'EV charger (kW continuous, 0 if none)', unit: 'kW', default: 0, step: 1,
        tooltip: 'EV charging is continuous: enter actual draw (e.g. 7.7 kW for a 32A 240V Level 2). NEC 625.41 requires 125% sizing — already applied here.' }
    ],
    calc: (data) => {
      const sqft = +data.sqft, sa = +data.sa, laundry = +data.laundry, range = +data.range, dryer = +data.dryer, wh = +data.wh, ac = +data.ac, ev = +data.ev;
      const generalLighting = sqft * 3;
      const saVa = sa * 1500;
      const laundryVa = laundry * 1500;
      const lightTotal = generalLighting + saVa + laundryVa;
      const lightDemand = lightTotal <= 3000 ? lightTotal : 3000 + (lightTotal - 3000) * 0.35;
      let rangeDemand = 0;
      if (range > 0) {
        if (range <= 12) rangeDemand = 8000;
        else rangeDemand = 8000 + Math.ceil(range - 12) * 400;
      }
      const dryerDemand = dryer > 0 ? Math.max(dryer * 1000, 5000) : 0;
      const whVa = wh * 1000;
      const acVa = ac * 1000;
      const evVa = ev * 1000 * 1.25;
      const totalVa = lightDemand + rangeDemand + dryerDemand + whVa + acVa + evVa;
      const amps = totalVa / 240;
      const service = amps <= 90 ? '100 A' : amps <= 130 ? '150 A' : amps <= 180 ? '200 A' : amps <= 320 ? '400 A' : 'engineered (>400 A)';
      return {
        main: Math.ceil(amps) + ' A', unit: 'CALCULATED DEMAND',
        detail: [
          ['Lighting + SA + laundry', Math.round(lightTotal).toLocaleString() + ' VA → ' + Math.round(lightDemand).toLocaleString() + ' VA after demand'],
          ['Range demand', Math.round(rangeDemand).toLocaleString() + ' VA'],
          ['Dryer demand', Math.round(dryerDemand).toLocaleString() + ' VA'],
          ['Water heater + HVAC + EV', Math.round(whVa + acVa + evVa).toLocaleString() + ' VA'],
          ['Total VA', Math.round(totalVa).toLocaleString() + ' VA'],
          ['Recommended service', service],
          ['Code reference', 'NEC 220 Part III standard method'],
          ['Disclaimer', 'Estimate only — verify with licensed electrician + AHJ']
        ]
      };
    }
  },
  {
    slug: 'conduit-bending-calculator',
    name: 'Conduit Bending',
    category: 'construction',
    trade: 'Electrical',
    desc: 'Offset & saddle math',
    formula: 'shrink = offset × (cosec − cot)',
    title: 'CONDUIT BENDING',
    metaTitle: 'Conduit Bending Calculator — Offset & Saddle Math | ProjectCalc',
    metaDesc: 'Free conduit bending calculator. Compute offset shrink, distance between bends, and 3-bend saddle marks for any angle and rise.',
    seoIntro: 'This conduit bending calculator handles the two bends every electrician runs daily: the offset (two opposite bends to step a run around an obstruction) and the 3-bend saddle (center bend at 2× the side bends to clear an obstacle in the middle of a run). Pick the bend angle and rise/obstacle height — the calculator returns the distance between marks, the shrink (how much the run loses to the bends), and where to start the first mark from a known reference. Multipliers come from the standard bender table: 22.5° → 2.6, 30° → 2.0, 45° → 1.4, 60° → 1.15. ESTIMATE ONLY — final layout must be verified against the actual bender deduct/take-up and AHJ requirements.',
    note: 'Offset multipliers: 22.5°→2.6, 30°→2.0, 45°→1.4, 60°→1.15. Shrink per inch of rise: 22.5°→3/16", 30°→1/4", 45°→3/8", 60°→1/2". Estimate only — confirm against your bender\'s deduct and verify with a licensed electrician before installation.',
    inputs: [
      { id: 'mode', label: 'Bend type', unit: '', type: 'select', default: 'offset',
        options: [['offset','Offset (2 bends)'],['saddle','3-bend saddle']] },
      { id: 'rise', label: (data) => data.mode === 'saddle' ? 'Obstacle height' : 'Offset rise', unit: 'in', default: 4, step: 0.25,
        tooltip: 'Vertical distance the conduit needs to step (offset) or clear (saddle). For a saddle, this is the height of the obstacle.' },
      { id: 'angle', label: 'Bend angle', unit: '', type: 'select', default: '30',
        tooltip: '22.5°/30° are the common low-angle offsets; 45° is steepest most benders go without binding the wire pull. Saddles are usually 45° center / 22.5° side or 60°/30°.',
        options: [['22.5','22.5°'],['30','30°'],['45','45°'],['60','60°']] }
    ],
    calc: (data) => {
      const mode = data.mode as string, rise = +data.rise, angle = +data.angle;
      const multTable: Record<number, number> = { 22.5: 2.6, 30: 2.0, 45: 1.4, 60: 1.15 };
      const shrinkPerIn: Record<number, number> = { 22.5: 0.1875, 30: 0.25, 45: 0.375, 60: 0.5 };
      const mult = multTable[angle];
      const shrink = shrinkPerIn[angle] * rise;
      if (mode === 'offset') {
        const distBetween = rise * mult;
        return {
          main: distBetween.toFixed(2) + '"', unit: 'BETWEEN BENDS',
          detail: [
            ['Bend angle', angle + '°'],
            ['Multiplier', mult.toFixed(2)],
            ['Offset rise', rise + '"'],
            ['Shrink', shrink.toFixed(3) + '" — add this to your start mark'],
            ['Code reference', 'Standard bender layout — verify with bender deduct'],
            ['Disclaimer', 'Estimate only — verify with licensed electrician']
          ]
        };
      } else {
        const centerToSide = rise * mult;
        const totalShrink = shrink * 2;
        return {
          main: centerToSide.toFixed(2) + '"', unit: 'CENTER → EACH SIDE BEND',
          detail: [
            ['Center bend angle', angle + '° (side bends at half angle)'],
            ['Multiplier', mult.toFixed(2)],
            ['Obstacle height', rise + '"'],
            ['Shrink (total)', totalShrink.toFixed(3) + '"'],
            ['Layout', 'Mark center → measure ' + centerToSide.toFixed(2) + '" each direction for side bends'],
            ['Code reference', 'Standard bender layout — verify with bender deduct'],
            ['Disclaimer', 'Estimate only — verify with licensed electrician']
          ]
        };
      }
    }
  },
  {
    slug: 'generator-size-calculator',
    name: 'Generator Size',
    category: 'construction',
    trade: 'Electrical',
    desc: 'Watts for home/site',
    formula: 'kW = Σ run watts + largest motor surge',
    title: 'GENERATOR SIZE',
    metaTitle: 'Generator Size Calculator — Watts for Home or Job Site | ProjectCalc',
    metaDesc: 'Free generator sizing calculator. Add up your essential or whole-home loads — get running watts, surge watts, and recommended portable or standby generator size.',
    seoIntro: 'This generator size calculator adds up running wattage for the loads you want to back up, applies a startup surge to the largest motor (refrigerator, well pump, AC compressor — typically 2.5× running), and recommends a portable or standby generator size. Inductive loads — anything with a motor — are the trap that undersized generators fall into: nameplate running watts is fine, but the locked-rotor inrush at startup is 2-4× higher and stalls the genset. The calculator picks a generator with at least 20% headroom on running watts and headroom for the surge. Use the "essentials" preset for a portable, or "whole home" for a standby. ESTIMATE ONLY — interlock kits, transfer switches, and fuel sizing must be verified by a licensed electrician.',
    note: 'Running watts + 2.5× surge on largest motor + 20% headroom. Estimate only — verify with a licensed electrician and local code/inspector before purchase or installation. Not a substitute for engineered drawings.',
    inputs: [
      { id: 'fridge', label: 'Refrigerator (running W, 0 if not on backup)', unit: 'W', default: 700, step: 50,
        tooltip: 'Running watts ~600-800 W for a typical residential fridge. Surge ~1800-2200 W at compressor start — calculator handles the surge automatically.' },
      { id: 'freezer', label: 'Chest/upright freezer (W)', unit: 'W', default: 0, step: 50 },
      { id: 'well', label: 'Well pump (½ HP = 1000 W, ¾ HP = 1500 W, 1 HP = 2000 W)', unit: 'W', default: 0, step: 100,
        tooltip: 'Well pumps have the highest surge of any common home load — 3-4× running watts. The calculator adds 3× surge to well pumps specifically.' },
      { id: 'sump', label: 'Sump pump (W)', unit: 'W', default: 0, step: 100 },
      { id: 'furnace', label: 'Furnace blower / boiler (W)', unit: 'W', default: 600, step: 50 },
      { id: 'lights', label: 'Lights + outlets (W)', unit: 'W', default: 600, step: 100,
        tooltip: 'Estimate ~600 W for kitchen + a few rooms of LED lights, phone chargers, TV, router, modem.' },
      { id: 'microwave', label: 'Microwave (W, 0 if not on backup)', unit: 'W', default: 1500, step: 100 },
      { id: 'ac', label: 'Window AC or central AC (running W, 0 if not backed up)', unit: 'W', default: 0, step: 100,
        tooltip: 'Window AC: 1000 W (8000 BTU) up to 2000 W (15000 BTU). Central 3-ton AC: 3500 W running, ~9000 W surge.' },
      { id: 'extra', label: 'Other (W)', unit: 'W', default: 0, step: 100 }
    ],
    calc: (data) => {
      const fridge = +data.fridge, freezer = +data.freezer, well = +data.well, sump = +data.sump, furnace = +data.furnace, lights = +data.lights, microwave = +data.microwave, ac = +data.ac, extra = +data.extra;
      const running = fridge + freezer + well + sump + furnace + lights + microwave + ac + extra;
      const motorSurge = (load: number, factor: number) => load > 0 ? load * (factor - 1) : 0;
      const surgeAdds = [
        motorSurge(fridge, 2.5),
        motorSurge(freezer, 2.5),
        motorSurge(well, 3.0),
        motorSurge(sump, 3.0),
        motorSurge(furnace, 2.0),
        motorSurge(ac, 2.5)
      ];
      const largestSurge = Math.max(0, ...surgeAdds);
      const surgeWatts = running + largestSurge;
      const required = Math.max(running * 1.2, surgeWatts);
      const sizes = [2000, 3000, 4000, 5000, 7500, 9000, 12000, 14000, 18000, 22000, 26000];
      let pick: number | string = 'engineered (>26 kW)';
      for (const s of sizes) {
        if (required <= s) { pick = s; break; }
      }
      const portableLimit = 12000;
      const class_ = typeof pick === 'number' && pick <= portableLimit ? 'Portable' : 'Standby (whole-home)';
      return {
        main: typeof pick === 'number' ? (pick / 1000).toFixed(1) + ' kW' : pick, unit: 'GENERATOR',
        detail: [
          ['Running watts', running.toLocaleString() + ' W'],
          ['Largest startup surge', Math.round(largestSurge).toLocaleString() + ' W'],
          ['Peak demand', Math.round(surgeWatts).toLocaleString() + ' W'],
          ['Required (with 20% headroom)', Math.round(required).toLocaleString() + ' W'],
          ['Class', class_],
          ['Code note', 'Permanent install needs transfer switch / interlock kit (NEC 702)'],
          ['Disclaimer', 'Estimate only — verify with licensed electrician + AHJ']
        ]
      };
    }
  },
  {
    slug: 'pipe-slope-calculator',
    name: 'Pipe Slope',
    category: 'construction',
    trade: 'Plumbing',
    desc: 'Drain drop & grade',
    formula: 'drop = run × slope/ft',
    title: 'PIPE SLOPE',
    metaTitle: 'Pipe Slope Calculator — Drain Drop & Grade | ProjectCalc',
    metaDesc: 'Drain pipe slope calculator. Enter run length and pitch — get total drop in inches, grade percent, and IPC/UPC reference.',
    seoIntro: 'This pipe slope calculator gives the total drop and grade percent for a drain or sewer line. The IPC and UPC plumbing codes require a minimum 1/4" per foot fall on horizontal drains 2.5" and smaller, and 1/8" per foot on 3" and larger pipe (some jurisdictions allow 1/16" per foot on 8"+ pipe with engineering approval). Too little slope and solids settle out of the flow; too much (above 1/2" per ft) and water outruns the solids — both end the same way, with a clog. ESTIMATE ONLY — verify with a licensed plumber and local plumbing code before installation.',
    note: 'IPC/UPC: 1/4"/ft for ≤2.5" pipe, 1/8"/ft for 3"+. Don\'t exceed 1/2"/ft. Estimate only — verify with a licensed plumber and local plumbing code/inspector before purchase or installation. Not a substitute for engineered drawings.',
    inputs: [
      { id: 'L', label: 'Pipe run length', unit: 'ft', default: 20, step: 1 },
      { id: 'slope', label: 'Slope per foot', unit: '', type: 'select', default: '0.25',
        tooltip: 'Slope is the vertical drop per linear foot of run. Code minimum depends on pipe diameter.',
        options: [['0.0625','1/16" per ft (8"+ pipe, where allowed)'],['0.125','1/8" per ft (3"+ pipe)'],['0.25','1/4" per ft (≤2.5" pipe — most common)'],['0.5','1/2" per ft (max — steeper risks scouring)']] }
    ],
    calc: (data) => {
      const L = +data.L, slope = +data.slope;
      const dropIn = L * slope;
      const dropFt = dropIn / 12;
      const gradePct = (dropFt / L) * 100;
      const slopeLabel = slope === 0.0625 ? '1/16"' : slope === 0.125 ? '1/8"' : slope === 0.25 ? '1/4"' : '1/2"';
      return {
        main: dropIn.toFixed(2), unit: 'INCHES OF DROP',
        detail: [
          ['Drop in feet', dropFt.toFixed(3) + ' ft'],
          ['Grade', gradePct.toFixed(2) + '%'],
          ['Slope', slopeLabel + ' per ft'],
          ['Run length', L + ' ft'],
          ['Disclaimer', 'Estimate only — verify with licensed plumber and local code']
        ]
      };
    }
  },
  {
    slug: 'water-supply-pipe-size-calculator',
    name: 'Water Supply Size',
    category: 'construction',
    trade: 'Plumbing',
    desc: 'Supply pipe diameter',
    formula: 'size = f(Σ WSFU)',
    title: 'WATER SUPPLY PIPE',
    metaTitle: 'Water Supply Pipe Sizing Calculator — WSFU to Pipe Diameter | ProjectCalc',
    metaDesc: 'Free water supply pipe sizing calculator. Enter your home\'s fixtures — get the minimum copper/CPVC and PEX supply pipe diameter per IPC.',
    seoIntro: 'This water supply pipe sizing calculator gives the minimum supply pipe diameter for a residential service line, based on the fixtures it serves. Enter how many full baths, kitchens, washing machines, and hose bibs the line feeds; the calculator sums Water Supply Fixture Units (WSFU) per IPC Table E202.1, then picks the smallest pipe that can carry that demand at typical residential pressure (40–60 psi static). Copper Type L and CPVC use the nominal size returned. PEX has a smaller inside diameter for the same nominal size, so the PEX answer is bumped up one size for equivalent flow. ESTIMATE ONLY — verify with a licensed plumber and local plumbing code before installation.',
    note: 'Residential service entry, 40–60 psi static. PEX is bumped one nominal size vs copper because of thinner ID. Estimate only — verify with a licensed plumber and local plumbing code/inspector before purchase or installation. Not a substitute for engineered drawings.',
    inputs: [
      { id: 'fullBath', label: 'Full bathrooms', unit: '', default: 2, step: 1,
        tooltip: 'A full bath = toilet + lavatory + tub/shower. Counts as 7 WSFU per IPC.' },
      { id: 'halfBath', label: 'Half baths (powder rooms)', unit: '', default: 0, step: 1,
        tooltip: 'Toilet + lavatory only. Counts as 3.5 WSFU.' },
      { id: 'kitchen', label: 'Kitchen sinks', unit: '', default: 1, step: 1 },
      { id: 'dishwasher', label: 'Dishwashers', unit: '', default: 1, step: 1 },
      { id: 'washer', label: 'Clothes washers', unit: '', default: 1, step: 1 },
      { id: 'hose', label: 'Outdoor hose bibs', unit: '', default: 2, step: 1 }
    ],
    calc: (data) => {
      const fb = +data.fullBath, hb = +data.halfBath, k = +data.kitchen, dw = +data.dishwasher, w = +data.washer, h = +data.hose;
      const wsfu = fb * 7 + hb * 3.5 + k * 1.5 + dw * 1.4 + w * 4 + h * 2.5;
      const sizes: [number, string][] = [[2, '½"'], [14, '¾"'], [32, '1"'], [50, '1¼"'], [90, '1½"'], [200, '2"']];
      const pexBump: Record<string, string> = { '½"': '¾"', '¾"': '1"', '1"': '1¼"', '1¼"': '1½"', '1½"': '2"', '2"': '2"' };
      let copper = '2"';
      for (const [max, sz] of sizes) {
        if (wsfu <= max) { copper = sz; break; }
      }
      const pex = pexBump[copper] ?? copper;
      const peakGpm = (wsfu < 6) ? wsfu * 1.5 : 5 + Math.sqrt(wsfu) * 1.8;
      return {
        main: copper, unit: 'COPPER / CPVC SIZE',
        detail: [
          ['Total WSFU', wsfu.toFixed(1)],
          ['PEX equivalent', pex],
          ['Estimated peak demand', peakGpm.toFixed(1) + ' GPM'],
          ['Code reference', 'IPC Table E202.1 / 604.5'],
          ['Pressure assumption', '40–60 psi static'],
          ['Disclaimer', 'Estimate only — verify with licensed plumber and local code']
        ]
      };
    }
  },
  {
    slug: 'drain-pipe-size-calculator',
    name: 'Drain Pipe Size',
    category: 'construction',
    trade: 'Plumbing',
    desc: 'DWV drain diameter',
    formula: 'size = f(Σ DFU)',
    title: 'DRAIN PIPE SIZE',
    metaTitle: 'Drain Pipe Sizing Calculator — DFU to Pipe Diameter | ProjectCalc',
    metaDesc: 'Free drain pipe size calculator. Enter the fixtures on the branch — get the minimum DWV pipe diameter per IPC Table 710.1.',
    seoIntro: 'This drain pipe sizing calculator returns the minimum diameter for a horizontal drain branch carrying a given set of fixtures. Sum of Drainage Fixture Units (DFU) is computed from the fixture counts you enter, then matched against IPC Table 710.1 limits. The output is the smallest pipe size that handles the load — anything smaller risks slow flow or backups; anything larger is wasted material and grade. For a soil stack carrying multiple branches, sum the branch DFUs and oversize accordingly. ESTIMATE ONLY — verify with a licensed plumber and local plumbing code before installation.',
    note: 'Horizontal branch sizing per IPC Table 710.1. For full stacks or building drains, sum branch DFUs and consult code tables. Estimate only — verify with a licensed plumber and local plumbing code/inspector before purchase or installation. Not a substitute for engineered drawings.',
    inputs: [
      { id: 'wc', label: 'Water closets (toilets)', unit: '', default: 2, step: 1,
        tooltip: 'Modern 1.28–1.6 GPF toilets count as 3 DFU each (IPC).' },
      { id: 'lav', label: 'Lavatories (bathroom sinks)', unit: '', default: 2, step: 1 },
      { id: 'shower', label: 'Showers', unit: '', default: 1, step: 1 },
      { id: 'tub', label: 'Bathtubs', unit: '', default: 1, step: 1 },
      { id: 'ks', label: 'Kitchen sinks', unit: '', default: 1, step: 1 },
      { id: 'dw', label: 'Dishwashers', unit: '', default: 1, step: 1 },
      { id: 'cw', label: 'Clothes washers (standpipe)', unit: '', default: 1, step: 1 },
      { id: 'fd', label: 'Floor drains', unit: '', default: 0, step: 1 }
    ],
    calc: (data) => {
      const wc=+data.wc, lav=+data.lav, sh=+data.shower, tub=+data.tub, ks=+data.ks, dw=+data.dw, cw=+data.cw, fd=+data.fd;
      const dfu = wc * 3 + lav * 1 + sh * 2 + tub * 2 + ks * 2 + dw * 2 + cw * 3 + fd * 2;
      const sizes: [number, string][] = [[1, '1¼"'], [3, '1½"'], [6, '2"'], [12, '2½"'], [20, '3"'], [160, '4"'], [620, '6"']];
      let pipe = '6"';
      for (const [max, sz] of sizes) {
        if (dfu <= max) { pipe = sz; break; }
      }
      const minSlope = (pipe === '1¼"' || pipe === '1½"' || pipe === '2"' || pipe === '2½"') ? '¼" per ft' : '⅛" per ft';
      const wcWarn = wc > 0 && (pipe === '1¼"' || pipe === '1½"' || pipe === '2"') ? 'Toilets require ≥3" branch — upsize to 3".' : '';
      const finalPipe = wcWarn ? '3"' : pipe;
      return {
        main: finalPipe, unit: 'MIN DRAIN SIZE',
        detail: [
          ['Total DFU', dfu.toFixed(0)],
          ['Min slope', minSlope],
          ['Toilet rule', wc > 0 ? '≥3" required (any branch carrying a WC)' : 'No WC on branch'],
          ['Code reference', 'IPC Table 710.1'],
          ['Note', wcWarn || 'Sized for horizontal branch'],
          ['Disclaimer', 'Estimate only — verify with licensed plumber and local code']
        ]
      };
    }
  },
  {
    slug: 'vent-pipe-size-calculator',
    name: 'Vent Pipe Size',
    category: 'construction',
    trade: 'Plumbing',
    desc: 'Vent diameter',
    formula: 'vent ≥ ½ drain, min 1¼"',
    title: 'VENT PIPE SIZE',
    metaTitle: 'Vent Pipe Size Calculator — DWV Vent Sizing | ProjectCalc',
    metaDesc: 'Free vent pipe sizing calculator. Enter drain size, vented DFUs, and developed length — get the minimum vent diameter per IPC.',
    seoIntro: 'This vent pipe sizing calculator returns the minimum vent diameter for a residential branch vent or stack vent. Per IPC Section 906, every vent must be at least half the diameter of the drain it serves, never less than 1¼", and never more than half the developed length its size allows in IPC Table 906.1. Enter the drain size, total DFUs being vented, and developed length of the vent run; the calculator picks the smallest size that satisfies all three rules. For commercial loads (hundreds of DFUs) or unusual vent configurations like circuit or relief venting, defer to the full code table. ESTIMATE ONLY — verify with a licensed plumber and local plumbing code before installation.',
    note: 'Residential branch / stack vents per IPC 906. Vent ≥ ½ drain diameter, ≥ 1¼", and within Table 906.1 length limits. Estimate only — verify with a licensed plumber and local plumbing code/inspector before purchase or installation. Not a substitute for engineered drawings.',
    inputs: [
      { id: 'drain', label: 'Drain pipe being vented', unit: '', type: 'select', default: '2',
        tooltip: 'Nominal diameter of the drain pipe the vent serves.',
        options: [['1.25','1¼"'],['1.5','1½"'],['2','2"'],['3','3"'],['4','4"']] },
      { id: 'dfu', label: 'Total DFU on vented branch', unit: '', default: 8, step: 1,
        tooltip: 'Sum of drainage fixture units served by this vent. Use the drain pipe sizing calculator to compute.' },
      { id: 'len', label: 'Developed vent length', unit: 'ft', default: 25, step: 1,
        tooltip: 'Total length of vent pipe from the trap arm to the open air, including all fittings (each elbow ~1 ft equivalent).' }
    ],
    calc: (data) => {
      const drain = +data.drain, dfu = +data.dfu, len = +data.len;
      const halfDrain = drain / 2;
      const minByHalf = Math.max(1.25, halfDrain);
      const sizes = [1.25, 1.5, 2, 3, 4];
      // IPC Table 906.1 simplified: max DFU and length per vent size
      // [size, maxDFU, maxLengthFt]
      const table: [number, number, number][] = [
        [1.25, 1, 45],
        [1.5, 8, 60],
        [2, 24, 120],
        [3, 84, 212],
        [4, 256, 300],
      ];
      let pick = 4;
      for (const sz of sizes) {
        if (sz < minByHalf) continue;
        const row = table.find(r => r[0] === sz);
        if (!row) continue;
        if (dfu <= row[1] && len <= row[2]) { pick = sz; break; }
      }
      const fmt = (n: number) => n === 1.25 ? '1¼"' : n === 1.5 ? '1½"' : n === 2 ? '2"' : n === 3 ? '3"' : '4"';
      const pickRow = table.find(r => r[0] === pick)!;
      return {
        main: fmt(pick), unit: 'MIN VENT SIZE',
        detail: [
          ['Drain served', fmt(drain)],
          ['Half-drain rule', '≥ ' + fmt(minByHalf)],
          ['DFU served', dfu + ' (limit at this size: ' + pickRow[1] + ')'],
          ['Developed length', len + ' ft (limit at this size: ' + pickRow[2] + ' ft)'],
          ['Code reference', 'IPC 906 / Table 906.1'],
          ['Disclaimer', 'Estimate only — verify with licensed plumber and local code']
        ]
      };
    }
  },
  {
    slug: 'pressure-loss-calculator',
    name: 'Pressure Loss',
    category: 'construction',
    trade: 'Plumbing',
    desc: 'Friction loss (Hazen-Williams)',
    formula: 'h = 4.52·L·Q^1.852 ÷ (C^1.852·D^4.87)',
    title: 'PRESSURE LOSS',
    metaTitle: 'Pressure Loss Calculator — Hazen-Williams Friction Loss | ProjectCalc',
    metaDesc: 'Free pressure loss calculator using the Hazen-Williams formula. Enter pipe size, flow, and length — get friction loss in PSI plus velocity check.',
    seoIntro: 'This pressure loss calculator computes friction loss in a water supply line using the Hazen-Williams equation. Pick the pipe material (different roughness coefficients), nominal size (which determines inside diameter), flow rate, and run length. The output is total head loss in feet, pressure drop in PSI, and water velocity in feet per second — exceeding 8 fps cold or 5 fps hot causes erosion, noise, and water hammer regardless of how the friction math looks. Use this for long service runs, multi-story buildings, irrigation mains, and any branch where the fixture at the dead end is losing pressure. ESTIMATE ONLY — verify with a licensed plumber and local plumbing code before installation.',
    note: 'Hazen-Williams. Velocity should stay <8 fps cold, <5 fps hot. Old galvanized C-factor drops to 60–80 over decades. Estimate only — verify with a licensed plumber and local plumbing code/inspector before purchase or installation. Not a substitute for engineered drawings.',
    inputs: [
      { id: 'material', label: 'Pipe material', unit: '', type: 'select', default: 'copper-l',
        tooltip: 'Hazen-Williams C-factor: copper Type L = 140, PEX = 150, CPVC = 150, new galvanized = 100 (drops to 60–80 with age).',
        options: [['copper-l','Copper Type L (C=140)'],['pex','PEX-A (C=150)'],['cpvc','CPVC (C=150)'],['galv','Galvanized steel (C=100)']] },
      { id: 'size', label: 'Nominal pipe size', unit: '', type: 'select', default: '0.75',
        options: [['0.5','½"'],['0.75','¾"'],['1','1"'],['1.25','1¼"'],['1.5','1½"'],['2','2"']] },
      { id: 'gpm', label: 'Flow rate', unit: 'GPM', default: 8, step: 0.5 },
      { id: 'length', label: 'Run length (developed)', unit: 'ft', default: 100, step: 5,
        tooltip: 'Total straight-pipe length plus equivalent length for fittings (each elbow ≈ 2 ft, each tee ≈ 5 ft equivalent).' }
    ],
    calc: (data) => {
      const material = data.material as string, size = data.size as string;
      const gpm = +data.gpm, len = +data.length;
      const cFactors: Record<string, number> = { 'copper-l': 140, 'pex': 150, 'cpvc': 150, 'galv': 100 };
      // Inside diameters by material + nominal size (inches)
      const ids: Record<string, Record<string, number>> = {
        'copper-l': { '0.5': 0.545, '0.75': 0.785, '1': 1.025, '1.25': 1.265, '1.5': 1.505, '2': 1.985 },
        'pex':      { '0.5': 0.475, '0.75': 0.671, '1': 0.862, '1.25': 1.053, '1.5': 1.243, '2': 1.718 },
        'cpvc':     { '0.5': 0.469, '0.75': 0.695, '1': 0.874, '1.25': 1.101, '1.5': 1.394, '2': 1.836 },
        'galv':     { '0.5': 0.622, '0.75': 0.824, '1': 1.049, '1.25': 1.380, '1.5': 1.610, '2': 2.067 },
      };
      const C = cFactors[material];
      const D = ids[material][size];
      // Hazen-Williams head loss in feet per 100 ft, then scale to length
      const headLoss = 4.52 * Math.pow(gpm, 1.852) / (Math.pow(C, 1.852) * Math.pow(D, 4.87)) * len;
      const psi = headLoss * 0.433;
      // Velocity in fps: V = Q × 0.4085 / D²  (Q in GPM, D in inches)
      const velocity = (gpm * 0.4085) / (D * D);
      const velOK = velocity < 8 ? 'OK' : velocity < 10 ? 'HIGH — noise risk' : 'TOO HIGH — erosion risk';
      return {
        main: psi.toFixed(2), unit: 'PSI LOSS',
        detail: [
          ['Head loss', headLoss.toFixed(2) + ' ft'],
          ['Velocity', velocity.toFixed(2) + ' fps (' + velOK + ')'],
          ['Inside diameter', D + '"'],
          ['C-factor', C],
          ['Per 100 ft', (psi * 100 / len).toFixed(2) + ' PSI'],
          ['Disclaimer', 'Estimate only — verify with licensed plumber and local code']
        ]
      };
    }
  },
  {
    slug: 'gpm-to-pipe-size-calculator',
    name: 'GPM to Pipe Size',
    category: 'construction',
    trade: 'Plumbing',
    desc: 'Flow rate sizing',
    formula: 'D ≥ √(Q ÷ 19.6) for V ≤ 8 fps',
    title: 'GPM TO PIPE SIZE',
    metaTitle: 'GPM to Pipe Size Calculator — Flow Rate Sizing | ProjectCalc',
    metaDesc: 'Free flow rate to pipe size calculator. Enter your required GPM and get the minimum pipe diameter for copper, PEX, CPVC, and steel.',
    seoIntro: 'This GPM to pipe size calculator returns the smallest nominal pipe diameter that can carry a given flow rate while keeping water velocity below 8 feet per second on cold lines (5 fps on hot). Velocity above those thresholds causes pipe erosion, water hammer, and audible flow noise — issues that don\'t show up in friction-loss math but ruin a system. Use this for irrigation mains, hose bib supply, custom water features, mechanical room piping, and any application where you know the flow demand directly rather than summing fixture units. ESTIMATE ONLY — verify with a licensed plumber and local plumbing code before installation.',
    note: 'Velocity-based sizing per industry practice: ≤8 fps cold, ≤5 fps hot. Bump up one size for hot water service. Estimate only — verify with a licensed plumber and local plumbing code/inspector before purchase or installation. Not a substitute for engineered drawings.',
    inputs: [
      { id: 'gpm', label: 'Required flow rate', unit: 'GPM', default: 12, step: 0.5 },
      { id: 'service', label: 'Service type', unit: '', type: 'select', default: 'cold',
        tooltip: 'Hot water uses lower max velocity (5 fps vs 8 fps) because temperature accelerates erosion at the same flow rate.',
        options: [['cold','Cold water (max 8 fps)'],['hot','Hot water (max 5 fps)']] }
    ],
    calc: (data) => {
      const gpm = +data.gpm;
      const service = data.service as string;
      const maxV = service === 'hot' ? 5 : 8;
      // D_min = sqrt(Q × 0.4085 / V_max), inches
      const dMinIn = Math.sqrt((gpm * 0.4085) / maxV);
      // Nominal sizes with inside diameters (use copper Type L as reference)
      const sizes: [string, number][] = [
        ['½"', 0.545], ['¾"', 0.785], ['1"', 1.025], ['1¼"', 1.265],
        ['1½"', 1.505], ['2"', 1.985], ['2½"', 2.465], ['3"', 2.945]
      ];
      let copperSize = '3"+';
      for (const [label, id] of sizes) {
        if (id >= dMinIn) { copperSize = label; break; }
      }
      const pexBump: Record<string, string> = { '½"':'¾"', '¾"':'1"', '1"':'1¼"', '1¼"':'1½"', '1½"':'2"', '2"':'2½"', '2½"':'3"', '3"':'3"' };
      const pexSize = pexBump[copperSize] ?? copperSize;
      return {
        main: copperSize, unit: 'COPPER / CPVC SIZE',
        detail: [
          ['Min ID needed', dMinIn.toFixed(3) + '"'],
          ['Max velocity', maxV + ' fps'],
          ['PEX equivalent', pexSize],
          ['Service', service === 'hot' ? 'Hot water' : 'Cold water'],
          ['Note', 'Verify friction loss separately for runs >100 ft'],
          ['Disclaimer', 'Estimate only — verify with licensed plumber and local code']
        ]
      };
    }
  },
  {
    slug: 'trap-size-calculator',
    name: 'Trap Size',
    category: 'construction',
    trade: 'Plumbing',
    desc: 'Trap diameter by fixture',
    formula: 'IPC Table 1002.1',
    title: 'TRAP SIZE',
    metaTitle: 'Plumbing Trap Size Calculator — Diameter by Fixture | ProjectCalc',
    metaDesc: 'Free plumbing trap size calculator. Pick the fixture and get the minimum trap diameter, DFU, and required vent size per IPC Table 1002.1.',
    seoIntro: 'Every plumbing fixture needs a trap — a U-shape that holds water as a barrier against sewer gas — and the IPC specifies a minimum trap size for each fixture type in Table 1002.1. Use this trap size calculator to confirm you\'re installing the right trap diameter when replacing a fixture, roughing in new construction, or troubleshooting a slow-draining or gurgling fixture (often a sign the trap is undersized or the trap arm too long). The output also includes DFU value and minimum vent size, so you can size the rest of the branch in one pass. ESTIMATE ONLY — verify with a licensed plumber and local plumbing code before installation.',
    note: 'IPC Table 1002.1. WCs have integral 3" traps cast into the porcelain — no separate trap needed. Estimate only — verify with a licensed plumber and local plumbing code/inspector before purchase or installation. Not a substitute for engineered drawings.',
    inputs: [
      { id: 'fixture', label: 'Fixture type', unit: '', type: 'select', default: 'lavatory',
        options: [
          ['lavatory','Lavatory (bathroom sink)'],
          ['bidet','Bidet'],
          ['drinking-fountain','Drinking fountain'],
          ['kitchen-sink','Kitchen sink (single or double bowl)'],
          ['bar-sink','Bar / prep sink'],
          ['laundry-tub','Laundry tub'],
          ['bathtub','Bathtub'],
          ['shower','Shower stall'],
          ['floor-drain','Floor drain'],
          ['washer','Clothes washer standpipe'],
          ['urinal','Urinal'],
          ['dishwasher','Dishwasher (separate trap)'],
          ['wc','Water closet (toilet)'],
        ] }
    ],
    calc: (data) => {
      const f = data.fixture as string;
      // [trap size, branch min, DFU, vent min]
      const table: Record<string, [string, string, number, string]> = {
        'lavatory':         ['1¼"', '1¼"', 1, '1¼"'],
        'bidet':            ['1¼"', '1¼"', 1, '1¼"'],
        'drinking-fountain':['1¼"', '1¼"', 0.5, '1¼"'],
        'kitchen-sink':     ['1½"', '1½"', 2, '1¼"'],
        'bar-sink':         ['1½"', '1½"', 1, '1¼"'],
        'laundry-tub':      ['1½"', '1½"', 2, '1¼"'],
        'bathtub':          ['1½"', '1½"', 2, '1¼"'],
        'shower':           ['2"',  '2"',  2, '1½"'],
        'floor-drain':      ['2"',  '2"',  2, '1½"'],
        'washer':           ['2"',  '2"',  3, '1½"'],
        'urinal':           ['2"',  '2"',  4, '1½"'],
        'dishwasher':       ['1½"', '1½"', 2, '1¼"'],
        'wc':               ['Integral 3"', '3"', 3, '2"'],
      };
      const row = table[f];
      const isWC = f === 'wc';
      return {
        main: row[0], unit: 'MIN TRAP SIZE',
        detail: [
          ['Min branch drain', row[1]],
          ['DFU value', row[2]],
          ['Min vent size', row[3]],
          ['Trap arm max', isWC ? 'N/A — built into fixture' : '5 × trap diameter (per IPC 1002.4)'],
          ['Code reference', 'IPC Table 1002.1 + 906'],
          ['Disclaimer', 'Estimate only — verify with licensed plumber and local code']
        ]
      };
    }
  },
  {
    slug: 'water-meter-size-calculator',
    name: 'Water Meter Size',
    category: 'construction',
    trade: 'Plumbing',
    desc: 'Meter sizing by demand',
    formula: 'meter ≥ peak GPM at acceptable Δp',
    title: 'WATER METER SIZE',
    metaTitle: 'Water Meter Size Calculator — AWWA Sizing Guide | ProjectCalc',
    metaDesc: 'Free water meter sizing calculator. Enter total fixture units — get the recommended meter size and peak demand for residential and small commercial service.',
    seoIntro: 'This water meter size calculator returns the recommended residential or small commercial water meter based on total fixture units, using the AWWA M22 sizing approach. Meters that are too small choke peak flow and cause pressure complaints; meters that are too large under-register low flows and cost the utility (and you, on a per-meter charge). The output gives the displacement-meter size with safe margin, plus the peak GPM that meter is rated for so you can sanity-check against fixture demand. ESTIMATE ONLY — verify with a licensed plumber and local plumbing code before installation.',
    note: 'AWWA M22-based residential meter sizing. Always confirm with your local water utility — they set the actual service size. Estimate only — verify with a licensed plumber and local plumbing code/inspector before purchase or installation. Not a substitute for engineered drawings.',
    inputs: [
      { id: 'wsfu', label: 'Total Water Supply Fixture Units', unit: 'WSFU', default: 30, step: 1,
        tooltip: 'Use the water supply pipe sizing calculator to compute WSFU from your fixture counts.' },
      { id: 'service', label: 'Service type', unit: '', type: 'select', default: 'residential',
        options: [['residential','Single-family residential'],['multi','Multi-family / small commercial']] }
    ],
    calc: (data) => {
      const wsfu = +data.wsfu;
      const service = data.service as string;
      // Peak GPM via Hunter (simplified): for residential
      const peakGpm = wsfu < 6 ? wsfu * 1.5 : 5 + Math.sqrt(wsfu) * 1.8;
      // Meter sizing: displacement (PD) meters typical residential
      // Size, max continuous GPM, max safe flow GPM
      const meters: [string, number, number][] = [
        ['⅝" × ¾"', 10, 20],
        ['¾"',       15, 30],
        ['1"',       25, 50],
        ['1½"',      50, 100],
        ['2"',       80, 160],
        ['3"',       180, 320],
      ];
      let pick = '3"+';
      let maxCont = 180, maxSafe = 320;
      // Pick smallest meter where peak < max continuous (provides margin)
      for (const [size, cont, safe] of meters) {
        if (peakGpm <= cont * (service === 'multi' ? 0.85 : 1.0)) {
          pick = size; maxCont = cont; maxSafe = safe; break;
        }
      }
      return {
        main: pick, unit: 'METER SIZE',
        detail: [
          ['Total WSFU', wsfu],
          ['Estimated peak demand', peakGpm.toFixed(1) + ' GPM'],
          ['Meter max continuous', maxCont + ' GPM'],
          ['Meter max safe (intermittent)', maxSafe + ' GPM'],
          ['Standard', 'AWWA M22 / displacement meter'],
          ['Disclaimer', 'Estimate only — verify with licensed plumber and local code']
        ]
      };
    }
  },
  {
    slug: 'building-drain-size-calculator',
    name: 'Building Drain Size',
    category: 'construction',
    trade: 'Plumbing',
    desc: 'Main drain + slope',
    formula: 'building drain DFU + slope',
    title: 'BUILDING DRAIN SIZE',
    metaTitle: 'Building Drain Size Calculator — IPC Table 710.1 | ProjectCalc',
    metaDesc: 'Free building drain sizing calculator. Enter total DFUs — get minimum building drain diameter at ⅛" and ¼" per foot slope per IPC Table 710.1.',
    seoIntro: 'The building drain is the lowest horizontal pipe inside the building, where every branch eventually empties before the line transitions to the building sewer at 5 feet outside the foundation. Its size is set by IPC Table 710.1 using a different DFU column from horizontal branches — the building drain is allowed higher loads at the same diameter because it always runs at full slope. This calculator returns the minimum building drain size for the total DFU load at both ⅛"/ft and ¼"/ft slopes, since slope choice affects capacity. ESTIMATE ONLY — verify with a licensed plumber and local plumbing code before installation.',
    note: 'IPC Table 710.1, building drain column. Not the same as horizontal branch sizing. Estimate only — verify with a licensed plumber and local plumbing code/inspector before purchase or installation. Not a substitute for engineered drawings.',
    inputs: [
      { id: 'dfu', label: 'Total DFU served', unit: '', default: 30, step: 1,
        tooltip: 'Sum of drainage fixture units for every fixture in the building. Use the drain pipe sizing calculator to compute.' },
      { id: 'slope', label: 'Drain slope', unit: '', type: 'select', default: '0.25',
        tooltip: '⅛"/ft is allowed for 3"+ pipe and saves vertical space; ¼"/ft is required for ≤2.5" pipe and increases capacity at every size.',
        options: [['0.125','⅛" per ft (3" pipe and larger only)'],['0.25','¼" per ft (any size)'],['0.5','½" per ft (max — beyond this, scour issues)']] }
    ],
    calc: (data) => {
      const dfu = +data.dfu;
      const slope = +data.slope;
      // IPC 710.1 building drain column
      // [size, max DFU @ ⅛, max DFU @ ¼, max DFU @ ½]
      const table: [string, number, number, number][] = [
        ['2"',  21, 26, 31],
        ['2½"', 24, 31, 36],
        ['3"',  42, 50, 57],
        ['4"',  180, 216, 250],
        ['5"',  390, 480, 575],
        ['6"',  700, 840, 1000],
        ['8"',  1600, 1920, 2300],
      ];
      const slopeIdx = slope === 0.125 ? 1 : slope === 0.25 ? 2 : 3;
      let pick = '8"+';
      for (const row of table) {
        if (dfu <= row[slopeIdx]) {
          // Building drain must be ≥3" if any WCs (assume yes for any meaningful DFU count)
          // and ⅛" slope only allowed for ≥3"
          if (slope === 0.125 && (row[0] === '2"' || row[0] === '2½"')) continue;
          pick = row[0]; break;
        }
      }
      const slopeLabel = slope === 0.125 ? '⅛"/ft' : slope === 0.25 ? '¼"/ft' : '½"/ft';
      const dropPer10 = slope * 10;
      return {
        main: pick, unit: 'BUILDING DRAIN SIZE',
        detail: [
          ['Total DFU', dfu],
          ['Slope chosen', slopeLabel],
          ['Drop per 10 ft of run', dropPer10.toFixed(2) + '"'],
          ['Min size if any WC', 'must be ≥ 3"'],
          ['Code reference', 'IPC Table 710.1 (building drain column)'],
          ['Disclaimer', 'Estimate only — verify with licensed plumber and local code']
        ]
      };
    }
  },
  {
    slug: 'wet-wall-stack-calculator',
    name: 'Wet Wall Stack',
    category: 'construction',
    trade: 'Plumbing',
    desc: 'Combined drain + vent stack',
    formula: 'stack DFU + branch interval limit',
    title: 'WET WALL STACK',
    metaTitle: 'Wet Wall Stack Sizing Calculator — Soil Stack DFU | ProjectCalc',
    metaDesc: 'Free wet wall / soil stack sizing calculator. Enter total DFUs and branch intervals — get minimum vertical stack diameter per IPC.',
    seoIntro: 'A wet wall is the framed cavity that carries the drain stack, vent, and hot/cold supply lines through a multi-story building, usually directly behind the bathroom. The soil stack inside that wall is sized for the total DFU load it carries (every fixture above and at its level) and limited per branch interval (the vertical span between fixture connections). This calculator returns the minimum vertical stack diameter from IPC Table 710.1, accounting for both total stack DFU and the per-branch-interval cap. Pair with vent sizing for the stack vent extending above the roof. ESTIMATE ONLY — verify with a licensed plumber and local plumbing code before installation.',
    note: 'IPC Table 710.1 (stack columns). Stacks ≤3 stories use the higher per-branch-interval column; taller stacks use the stricter total-stack column. Estimate only — verify with a licensed plumber and local plumbing code/inspector before purchase or installation. Not a substitute for engineered drawings.',
    inputs: [
      { id: 'dfu', label: 'Total DFU on stack', unit: '', default: 24, step: 1,
        tooltip: 'Sum of DFU for every fixture connecting to this stack.' },
      { id: 'intervals', label: 'Number of branch intervals', unit: '', default: 2, step: 1,
        tooltip: 'A branch interval = one floor\'s worth of fixture connections (typically 8 ft of vertical stack). Most residential = 1–3 intervals.' },
      { id: 'maxBranchDfu', label: 'Largest single branch DFU', unit: '', default: 12, step: 1,
        tooltip: 'DFU of the most heavily-loaded branch entering the stack at one level (typically a full bath = 7 DFU, two baths = 14).' }
    ],
    calc: (data) => {
      const dfu = +data.dfu;
      const intervals = +data.intervals;
      const branchDfu = +data.maxBranchDfu;
      // IPC 710.1 simplified soil stack column:
      // [size, max DFU per branch interval, max DFU on stack ≤3 stories, max DFU on stack >3 stories]
      const table: [string, number, number, number][] = [
        ['1½"', 1, 2, 1],
        ['2"',  6, 10, 8],
        ['2½"', 9, 20, 15],
        ['3"',  20, 48, 30],
        ['4"',  90, 240, 180],
        ['5"',  200, 540, 390],
        ['6"',  350, 960, 700],
      ];
      const tallStack = intervals > 3;
      const stackCol = tallStack ? 3 : 2;
      let pick = '6"+';
      for (const row of table) {
        if (dfu <= row[stackCol] && branchDfu <= row[1]) {
          pick = row[0]; break;
        }
      }
      // Stack vent (extension through roof) is at least same size or per IPC 906; min 3" through roof in cold climates
      return {
        main: pick, unit: 'STACK SIZE',
        detail: [
          ['Total DFU on stack', dfu],
          ['Branch intervals', intervals + (tallStack ? ' (tall stack — stricter limit)' : '')],
          ['Largest single branch DFU', branchDfu],
          ['Stack vent (through roof)', 'same as stack, min 3" in cold climates (frost closure)'],
          ['Code reference', 'IPC Table 710.1 (stack columns)'],
          ['Disclaimer', 'Estimate only — verify with licensed plumber and local code']
        ]
      };
    }
  },
  {
    slug: 'booster-pump-sizing-calculator',
    name: 'Booster Pump Size',
    category: 'construction',
    trade: 'Plumbing',
    desc: 'Pump GPM and PSI',
    formula: 'pump = peak GPM @ (target − supply) PSI',
    title: 'BOOSTER PUMP SIZE',
    metaTitle: 'Booster Pump Sizing Calculator — GPM and PSI | ProjectCalc',
    metaDesc: 'Free booster pump sizing calculator. Enter supply pressure, target pressure, and demand — get required pump PSI boost and GPM.',
    seoIntro: 'A booster pump adds pressure to a water supply that doesn\'t arrive at adequate PSI for the building — common with low municipal pressure, well systems on long supply lines, or top-floor fixtures in tall buildings. This booster pump sizing calculator returns the required pump PSI boost and GPM rating based on incoming static pressure, target delivered pressure, and peak flow demand. Use the result to spec a constant-pressure or VFD pump from any major manufacturer. ESTIMATE ONLY — verify with a licensed plumber and local plumbing code before installation.',
    note: 'Sizes the boost stage. Variable-speed (VFD) pumps modulate to maintain target; constant-speed sizes for the peak design point. Estimate only — verify with a licensed plumber and local plumbing code/inspector before purchase or installation. Not a substitute for engineered drawings.',
    inputs: [
      { id: 'supply', label: 'Incoming static pressure', unit: 'PSI', default: 35, step: 1,
        tooltip: 'Pressure at the meter or well tank during no-flow conditions. Test with a $10 hose-bib gauge.' },
      { id: 'target', label: 'Target delivered pressure', unit: 'PSI', default: 60, step: 1,
        tooltip: 'Code minimum is 20 PSI at the most remote fixture; 40–60 PSI is comfortable. Above 80 requires a pressure-reducing valve.' },
      { id: 'gpm', label: 'Peak demand', unit: 'GPM', default: 15, step: 1,
        tooltip: 'Use the water supply pipe sizing calculator to estimate peak GPM from fixture units.' },
      { id: 'lift', label: 'Vertical lift to highest fixture', unit: 'ft', default: 25, step: 1,
        tooltip: 'Vertical distance from pump to the highest fixture. Each foot of lift adds 0.433 PSI to required boost.' }
    ],
    calc: (data) => {
      const supply = +data.supply, target = +data.target, gpm = +data.gpm, lift = +data.lift;
      const liftPsi = lift * 0.433;
      const boost = Math.max(0, (target - supply) + liftPsi);
      const status = boost <= 0 ? 'No booster needed — supply already meets target' :
                     boost <= 20 ? 'Single-stage booster (light duty)' :
                     boost <= 50 ? 'Multi-stage booster (medium duty)' :
                     'Multi-stage / high-pressure booster';
      // Approximate motor HP: HP = (GPM × Boost × SG) / (3960 × pump_efficiency)
      // Assume 65% pump efficiency, water SG = 1
      const hp = (gpm * boost) / (3960 * 0.65);
      const hpRound = hp <= 0.5 ? '½ HP' : hp <= 0.75 ? '¾ HP' : hp <= 1 ? '1 HP' :
                      hp <= 1.5 ? '1½ HP' : hp <= 2 ? '2 HP' : hp <= 3 ? '3 HP' : `${Math.ceil(hp)} HP`;
      return {
        main: boost.toFixed(1), unit: 'PSI BOOST',
        detail: [
          ['Pump rated GPM', gpm + ' GPM'],
          ['Vertical lift loss', liftPsi.toFixed(1) + ' PSI'],
          ['Approx motor size', hpRound],
          ['Pump duty', status],
          ['Note', 'Add 10–20% to GPM for VFD pump capacity headroom'],
          ['Disclaimer', 'Estimate only — verify with licensed plumber and local code']
        ]
      };
    }
  },
  {
    slug: 'expansion-tank-sizing-calculator',
    name: 'Expansion Tank Size',
    category: 'construction',
    trade: 'Plumbing',
    desc: 'Closed-loop tank size',
    formula: 'V_tank = V_water × (Vexp ÷ Pa) × (Pa − Pp) ÷ (Ph − Pp)',
    title: 'EXPANSION TANK SIZE',
    metaTitle: 'Expansion Tank Sizing Calculator — Water Heater | ProjectCalc',
    metaDesc: 'Free expansion tank sizing calculator for closed water heater systems. Enter tank volume and pressure — get the required expansion tank size.',
    seoIntro: 'Closed plumbing systems (those with a check valve, pressure-reducing valve, or backflow preventer between the meter and the water heater) require a thermal expansion tank to absorb the volume increase as the heater warms cold water. Without it, every heating cycle pressurizes the system above safe limits, eventually rupturing the tank, blowing fittings, or triggering the T&P relief valve. This calculator sizes the expansion tank based on water heater capacity, supply pressure, and target heating range using the standard ASME formula. ESTIMATE ONLY — verify with a licensed plumber and local plumbing code before installation.',
    note: 'Required by code (UPC 608.3, IPC 607.3.1) on any closed system. Check for: backflow preventer, PRV, or check valve at the meter. Estimate only — verify with a licensed plumber and local plumbing code/inspector before purchase or installation. Not a substitute for engineered drawings.',
    inputs: [
      { id: 'wh', label: 'Water heater capacity', unit: 'gallons', default: 50, step: 5,
        tooltip: 'Tank water heater nominal capacity. Tankless systems usually don\'t need expansion tanks unless storage tank is added.' },
      { id: 'supply', label: 'Supply pressure (set on PRV)', unit: 'PSI', default: 60, step: 1 },
      { id: 'maxPressure', label: 'Maximum allowable pressure', unit: 'PSI', default: 80, step: 1,
        tooltip: 'Set just below the T&P relief valve pop pressure (typically 150 PSI) — code targets 80 PSI max for plumbing fittings.' },
      { id: 'temp', label: 'Heating temperature rise', unit: '°F', default: 90, step: 5,
        tooltip: 'Difference between cold inlet and stored hot water temp. 50°F → 140°F = 90°F rise.' }
    ],
    calc: (data) => {
      const wh = +data.wh;
      const supplyPsi = +data.supply;
      const maxPsi = +data.maxPressure;
      const tempRise = +data.temp;
      // Expansion factor: water expands about 0.000022 per °F
      // For 90°F rise on 50 gal water: ~50 × 0.000022 × 90 = 0.099 gal expansion (about 0.2%)
      // Better approximation from ASHRAE: % expansion ≈ 0.00041 × (T_hot - T_cold) for 50°F to 140°F
      const expansionFraction = 0.00041 * tempRise;
      const expansionGal = wh * expansionFraction;
      // Tank acceptance volume formula (simplified bladder tank):
      // V_tank = V_exp / (1 − (P_supply / P_max))
      const acceptanceFactor = 1 - (supplyPsi / maxPsi);
      const tankGal = expansionGal / acceptanceFactor;
      // Round to standard tank sizes: 2, 4.4, 6, 14, 20, 32 gal
      const standard = [2, 4.4, 6, 14, 20, 32, 44];
      let pick = 44;
      for (const s of standard) {
        if (s >= tankGal) { pick = s; break; }
      }
      return {
        main: pick + '', unit: 'GALLON TANK',
        detail: [
          ['Computed minimum', tankGal.toFixed(2) + ' gal'],
          ['Water expansion volume', expansionGal.toFixed(3) + ' gal'],
          ['Pre-charge pressure', supplyPsi + ' PSI (match supply)'],
          ['Max system pressure', maxPsi + ' PSI'],
          ['Common size match', 'Watts / Amtrol / Zilmet ' + pick + '-gal'],
          ['Disclaimer', 'Estimate only — verify with licensed plumber and local code']
        ]
      };
    }
  },
  {
    slug: 'duct-cfm-calculator',
    name: 'Duct CFM',
    category: 'construction',
    trade: 'HVAC',
    desc: 'HVAC airflow',
    formula: 'CFM = BTU ÷ (1.08 × ΔT)',
    title: 'DUCT CFM',
    metaTitle: 'Duct CFM Calculator — HVAC Airflow Sizing | ProjectCalc',
    metaDesc: 'Calculate duct CFM for HVAC sizing. Enter BTU load and supply temp differential — get airflow in cubic feet per minute.',
    seoIntro: 'This duct CFM calculator gives the airflow needed (in cubic feet per minute) to deliver a given heating or cooling load. The sensible heat formula CFM = BTU/hr ÷ (1.08 × ΔT) is what HVAC contractors use for room-by-room duct sizing in a Manual D layout. ΔT is the difference between the supply air temperature and the return air temperature — typically 20°F for cooling and 50–70°F for forced-air heating. The industry rule of thumb is 400 CFM per ton of cooling (1 ton = 12,000 BTU/hr), which lines up with a 20°F cooling ΔT.',
    note: 'CFM = BTU ÷ (1.08 × ΔT). Cooling ΔT ≈ 20°F. Forced-air heating ΔT ≈ 60°F.',
    inputs: [
      { id: 'btu', label: 'Heat load', unit: 'BTU/hr', default: 24000, step: 500 },
      { id: 'dt', label: 'Supply temp differential', unit: '°F', default: 20, step: 1,
        tooltip: 'ΔT = the temperature difference between supply air and return air. Use ~20°F for cooling and ~60°F for furnace heating.' }
    ],
    calc: (data) => {
      const btu = +data.btu, dt = +data.dt;
      const cfm = btu / (1.08 * dt);
      const tons = btu / 12000;
      return {
        main: Math.round(cfm).toLocaleString(), unit: 'CFM',
        detail: [
          ['Cooling tons', tons.toFixed(2)],
          ['Rule-of-thumb (400 CFM/ton)', Math.round(tons * 400).toLocaleString() + ' CFM'],
          ['Heat load', btu.toLocaleString() + ' BTU/hr'],
          ['ΔT', dt + '°F']
        ]
      };
    }
  },
  {
    slug: 'manual-j-heat-load-calculator',
    name: 'Manual J Heat Load',
    category: 'construction',
    trade: 'HVAC',
    desc: 'Whole-home BTU load',
    formula: 'q = ft² × HTM (climate × construction)',
    title: 'MANUAL J HEAT LOAD',
    metaTitle: 'Manual J Heat Load Calculator — Cooling & Heating BTU | ProjectCalc',
    metaDesc: 'Free Manual J style heat load calculator. Enter floor area, climate zone, insulation, and windows — get cooling and heating BTU plus tonnage.',
    seoIntro: 'This Manual J heat load calculator gives a whole-home approximation of cooling and heating BTU/hr using the ACCA Manual J approach: floor area × Heat Transfer Multiplier (HTM), with HTMs adjusted by climate zone, insulation level, window quality, and air-tightness. It is a planning tool — equipment selection, zoning, and duct design require a full room-by-room Manual J / Manual D / Manual S package run by a credentialed HVAC contractor (ACCA RSDI, Wrightsoft, or similar). Oversizing is the #1 reason heat pumps short-cycle, dehumidify poorly, and die early. ESTIMATE ONLY — verify with a licensed HVAC contractor and a full Manual J before equipment purchase.',
    howToUse: 'Enter the conditioned floor area in ft² (heated/cooled space only — exclude garage, unconditioned attic, unfinished basement). Average ceiling height in feet (the calculator scales for taller ceilings since they hold more air to condition). Pick your IECC climate zone — Zone 1 is Miami/Honolulu; Zone 4 is St. Louis/NYC; Zone 6 is Minneapolis. Maps are at energycodes.gov.\n\nInsulation + air sealing: tight = post-2015 build with blower-door <3 ACH50 or sprayfoam; average = post-2000 code-minimum; loose = pre-1980, no upgrades, drafty. Window quality + area: low = double-pane low-E ≤15% wall area; average = double-pane 15–20%; high = single-pane or oversized glazing >20%. Result is whole-home cooling and heating BTU/hr loads with a suggested AC tonnage.',
    workedExample: 'A 2,000 ft² house with 9-ft ceilings in Zone 4 (St. Louis), average insulation, average windows:\n\nCooling HTM (Zone 4) = 18. Volume factor (9÷8) = 1.125. Cooling load = 2,000 × 18 × 1.0 × 1.0 × 1.125 = 40,500 BTU/hr = 3.4 tons → 3.5-ton AC.\n\nHeating HTM (Zone 4) = 35. Heating load = 2,000 × 35 × 1.0 × 1.0 × 1.125 = 78,750 BTU/hr = 78.8 kBTU.\n\nSame house with tight insulation (×0.85) and low-E windows (×0.9): cooling drops to 31,000 BTU = 2.6 tons → 3-ton; heating drops to 60,200 BTU = 60 kBTU. Tighter envelope = smaller equipment = lower install cost AND lower operating cost.\n\nFor sizing actual equipment: a contractor must run a full Manual J room-by-room, plus Manual D (duct sizing) and Manual S (equipment selection). This calculator is for planning and sanity-check only.',
    commonMistakes: 'Using a rule-of-thumb 400–600 ft²/ton for sizing. That gives oversized equipment by 20–50% in modern tight homes. Modern code-built houses often need 800–1,200 ft²/ton.\n\nTreating the calculator as a substitute for a stamped Manual J. Permits and equipment selection require the full ACCA Manual J/D/S workflow run by an HVAC contractor with credentialed software.\n\nIgnoring duct losses for ducted systems. Ducts running through unconditioned attics or crawlspaces lose 15–30% of capacity. The calculator gives the net house load — equipment sizing must add duct losses for ducted systems.\n\nPicking "tight" insulation without a blower-door test confirming it. "Tight" requires verified ACH50 ≤ 3.0. Without a test, default to "average" — getting it wrong undersizes by 15–25% and you\'ll be cold/hot at design temperatures.',
    rulesOfThumb: 'Cooling HTM by IECC zone: 1=28, 2=25, 3=22, 4=18, 5=16, 6=14, 7=12, 8=10 BTU/hr per ft².\n\nHeating HTM by zone: 1=12, 2=18, 3=25, 4=35, 5=45, 6=55, 7=65, 8=80 BTU/hr per ft².\n\nTight envelope multiplier 0.85, average 1.0, loose 1.25.\n\n12,000 BTU/hr = 1 ton of cooling. 1 kBTU/hr = 1,000 BTU/hr.\n\nA contractor\'s Manual J typically lands within 10–20% of this approximation for a typical residential layout. If the contractor\'s number is 50%+ above this, get a second opinion — likely oversized.',
    note: 'Whole-home rule-of-thumb sized to ACCA Manual J HTMs. Doesn\'t replace a room-by-room Manual J for permit submittal. Estimate only — verify with a licensed HVAC contractor running full ACCA Manual J/D/S before purchase or installation. Not a substitute for engineered drawings.',
    inputs: [
      { id: 'sqft', label: 'Conditioned floor area', unit: 'ft²', default: 2000, step: 50 },
      { id: 'ceil', label: 'Average ceiling height', unit: 'ft', default: 9, step: 0.5 },
      { id: 'zone', label: 'Climate zone (IECC)', unit: '', type: 'select', default: '4',
        tooltip: 'IECC zones: 1 = Miami/Honolulu, 2 = Houston/Phoenix, 3 = Atlanta/Dallas, 4 = NYC/St. Louis, 5 = Chicago/Boston, 6 = Minneapolis, 7 = Duluth, 8 = Fairbanks. Maps at energycodes.gov.',
        options: [['1','Zone 1 (very hot)'],['2','Zone 2 (hot)'],['3','Zone 3 (warm)'],['4','Zone 4 (mixed)'],['5','Zone 5 (cool)'],['6','Zone 6 (cold)'],['7','Zone 7 (very cold)'],['8','Zone 8 (subarctic)']] },
      { id: 'insul', label: 'Insulation + air sealing', unit: '', type: 'select', default: 'avg',
        tooltip: 'Tight = post-2015 build, blower-door <3 ACH50, sprayfoam or dense-pack. Average = post-2000, code minimum. Loose = pre-1980, no upgrades, drafty.',
        options: [['tight','Tight (new / retrofitted)'],['avg','Average (code minimum)'],['loose','Loose (drafty / pre-1980)']] },
      { id: 'windows', label: 'Window quality + area', unit: '', type: 'select', default: 'avg',
        tooltip: 'Low = double-pane low-E, ≤15% wall area. Average = double-pane, 15-20% wall area. High = single-pane or oversized glazing >20% wall area.',
        options: [['low','Low (modern, ≤15% wall)'],['avg','Average (double-pane)'],['high','High (single-pane / 20%+ glass)']] }
    ],
    calc: (data) => {
      const sqft = +data.sqft, ceil = +data.ceil, zone = data.zone as string, insul = data.insul as string, windows = data.windows as string;
      const coolHTMByZone: Record<string, number> = { '1': 28, '2': 25, '3': 22, '4': 18, '5': 16, '6': 14, '7': 12, '8': 10 };
      const heatHTMByZone: Record<string, number> = { '1': 12, '2': 18, '3': 25, '4': 35, '5': 45, '6': 55, '7': 65, '8': 80 };
      const insulMult: Record<string, number> = { 'tight': 0.85, 'avg': 1.0, 'loose': 1.25 };
      const windowMult: Record<string, number> = { 'low': 0.9, 'avg': 1.0, 'high': 1.2 };
      const ceilFactor = ceil / 8;
      const cool = sqft * coolHTMByZone[zone] * insulMult[insul] * windowMult[windows] * ceilFactor;
      const heat = sqft * heatHTMByZone[zone] * insulMult[insul] * windowMult[windows] * ceilFactor;
      const coolTons = cool / 12000;
      const heatKbtu = heat / 1000;
      const sized = coolTons < 1 ? '0.75 ton' : coolTons < 1.5 ? '1.5 ton' : coolTons < 2 ? '2 ton' : coolTons < 2.5 ? '2.5 ton' : coolTons < 3 ? '3 ton' : coolTons < 4 ? '4 ton' : coolTons < 5 ? '5 ton' : 'engineered (>5 ton)';
      return {
        main: Math.round(cool).toLocaleString(), unit: 'COOLING BTU/HR',
        detail: [
          ['Heating load', Math.round(heat).toLocaleString() + ' BTU/hr (' + heatKbtu.toFixed(1) + ' kBTU)'],
          ['Cooling tons', coolTons.toFixed(2)],
          ['Suggested AC size', sized],
          ['Climate zone', 'IECC ' + zone],
          ['Volume factor', ceilFactor.toFixed(2) + 'x for ' + ceil + ' ft ceilings'],
          ['Code reference', 'ACCA Manual J HTM approximation'],
          ['Disclaimer', 'Estimate only — full Manual J required before equipment purchase']
        ]
      };
    }
  },
  {
    slug: 'refrigerant-charge-calculator',
    name: 'Refrigerant Charge',
    category: 'construction',
    trade: 'HVAC',
    desc: 'Pounds by tonnage',
    formula: 'lbs = factory + (line_oz/ft × extra ft)',
    title: 'REFRIGERANT CHARGE',
    metaTitle: 'Refrigerant Charge Calculator — Lbs by System Size | ProjectCalc',
    metaDesc: 'Free refrigerant charge calculator. Enter system tonnage, refrigerant type, and line set length — get pre-charged factory amount plus extra-length adder.',
    seoIntro: 'This refrigerant charge calculator estimates how many pounds of refrigerant a residential split-system AC or heat pump should carry. The factory pre-charge typically covers a 15-foot or 25-foot line set; anything beyond that adds refrigerant by weight per linear foot of liquid line, scaled to refrigerant type (R-410A, R-32, R-454B). Final charge is verified with subcooling (TXV / EEV systems) or superheat (fixed-orifice systems) — never just by weight alone. ESTIMATE ONLY: this is a planning figure for line-set ordering, not an install procedure. Adding or removing refrigerant must be done by an EPA Section 608-certified technician.',
    note: 'Estimate only. EPA Section 608 certification required to handle refrigerant. Final charge verified by subcooling/superheat, not weight. Verify with a licensed HVAC contractor before purchase or installation.',
    inputs: [
      { id: 'tons', label: 'System size', unit: 'tons', default: 3, step: 0.5,
        tooltip: '1 ton = 12,000 BTU/hr cooling. Most residential homes are 2-5 tons.' },
      { id: 'refrig', label: 'Refrigerant type', unit: '', type: 'select', default: 'R410A',
        tooltip: 'R-410A: standard since 2010, being phased out. R-32: lower GWP, common in mini-splits. R-454B: 2025+ replacement for R-410A in residential.',
        options: [['R410A','R-410A (legacy split systems)'],['R32','R-32 (mini-splits, low-GWP)'],['R454B','R-454B (2025+ residential)']] },
      { id: 'lineLen', label: 'Line set length', unit: 'ft', default: 25, step: 1,
        tooltip: 'Distance from outdoor unit to indoor coil/air handler along the actual run, not straight-line. Pre-charge typically covers 15-25 ft.' },
      { id: 'liquidSize', label: 'Liquid line size', unit: '', type: 'select', default: '0.375',
        tooltip: 'Standard residential: 1/4" for 1.5-2 ton, 3/8" for 2.5-5 ton. Larger pipe holds more refrigerant per foot.',
        options: [['0.25','1/4" liquid line'],['0.375','3/8" liquid line'],['0.5','1/2" liquid line']] }
    ],
    calc: (data) => {
      const tons = +data.tons, refrig = data.refrig as string, lineLen = +data.lineLen, liquidSize = data.liquidSize as string;
      const factoryByTon: Record<string, number> = { 'R410A': 2.6, 'R32': 1.8, 'R454B': 2.4 };
      const ozPerFootByLine: Record<string, number> = { '0.25': 0.4, '0.375': 0.6, '0.5': 1.0 };
      const factoryLbs = tons * factoryByTon[refrig];
      const factoryCovers = 25;
      const extraFt = Math.max(0, lineLen - factoryCovers);
      const ozPerFt = ozPerFootByLine[liquidSize];
      const extraOz = extraFt * ozPerFt;
      const extraLbs = extraOz / 16;
      const totalLbs = factoryLbs + extraLbs;
      return {
        main: totalLbs.toFixed(2) + ' lbs', unit: 'TOTAL CHARGE',
        detail: [
          ['Factory pre-charge', factoryLbs.toFixed(2) + ' lbs (covers first ' + factoryCovers + ' ft)'],
          ['Extra line set', extraFt + ' ft × ' + ozPerFt + ' oz/ft = ' + extraOz.toFixed(1) + ' oz'],
          ['Refrigerant', refrig],
          ['Liquid line', liquidSize === '0.25' ? '1/4"' : liquidSize === '0.375' ? '3/8"' : '1/2"'],
          ['Verify by', 'Subcooling (TXV) or Superheat (fixed orifice)'],
          ['Code reference', 'EPA Section 608, AHRI 700'],
          ['Disclaimer', 'Estimate only — Section 608 cert required to handle refrigerant']
        ]
      };
    }
  },
  {
    slug: 'static-pressure-calculator',
    name: 'Static Pressure',
    category: 'construction',
    trade: 'HVAC',
    desc: 'TESP across system',
    formula: 'TESP = filter + coil + supply + return',
    title: 'TOTAL EXTERNAL STATIC PRESSURE',
    metaTitle: 'Static Pressure Calculator — TESP for Duct Systems | ProjectCalc',
    metaDesc: 'Free TESP calculator for HVAC techs. Sum filter, coil, supply, and return drops — compare to blower rating and check fan ESP headroom.',
    seoIntro: 'This static pressure calculator sums the four pressure drops a residential HVAC blower fights against: filter, evaporator coil, supply duct/registers, and return duct/grille. Total External Static Pressure (TESP) is what a Magnehelic gauge reads with probes drilled into the supply and return plenums. Most residential blowers are rated at 0.5" w.c. TESP — exceed that and airflow drops, the coil ices, the gas heat exchanger overheats, and the system dies young. Aim for 0.5" w.c. or lower; 0.7" is "in trouble." ESTIMATE ONLY — actual TESP must be measured with a Magnehelic gauge or manometer.',
    note: 'Most residential blowers are rated 0.5" w.c. TESP. >0.7" = airflow problems. Estimate only — verify with manometer measurement and a licensed HVAC contractor before equipment changes.',
    inputs: [
      { id: 'filter', label: 'Filter type', unit: '', type: 'select', default: 'merv11',
        tooltip: 'Higher MERV = denser media = higher pressure drop. Pleated 1-inch filters at MERV 11+ are the silent killer of residential systems.',
        options: [['merv8','1" MERV 8 fiberglass (0.05" w.c.)'],['merv11','1" MERV 11 pleated (0.15" w.c.)'],['merv13','1" MERV 13 pleated (0.25" w.c.)'],['media4','4-5" media MERV 11-13 (0.10" w.c.)'],['hepa','HEPA / electronic (0.30" w.c.)']] },
      { id: 'coil', label: 'Evaporator coil drop', unit: 'in w.c.', default: 0.20, step: 0.05,
        tooltip: 'Most residential A-coils run 0.20-0.30" w.c. when clean. Wet coil under cooling adds ~0.05". Dirty coils can hit 0.50"+.' },
      { id: 'supply', label: 'Supply duct + registers drop', unit: 'in w.c.', default: 0.15, step: 0.05,
        tooltip: 'Well-designed supply trunk + branches: 0.10-0.15". Long runs, kinked flex, undersized registers: 0.20-0.30"+.' },
      { id: 'return', label: 'Return duct + grille drop', unit: 'in w.c.', default: 0.10, step: 0.05,
        tooltip: 'Well-designed return: 0.05-0.10". Single undersized return grille is the most common static-pressure offender — typical bad install: 0.20-0.30".' },
      { id: 'rating', label: 'Blower TESP rating', unit: 'in w.c.', default: 0.5, step: 0.05,
        tooltip: 'Most residential PSC blowers: 0.5" w.c. ECM blowers: 0.5-0.8". Check the cabinet label.' }
    ],
    calc: (data) => {
      const filterMap: Record<string, number> = { 'merv8': 0.05, 'merv11': 0.15, 'merv13': 0.25, 'media4': 0.10, 'hepa': 0.30 };
      const filter = filterMap[data.filter as string];
      const coil = +data.coil, supply = +data.supply, ret = +data.return, rating = +data.rating;
      const tesp = filter + coil + supply + ret;
      const headroom = rating - tesp;
      const status = tesp <= rating * 0.9 ? 'OK — within blower rating' : tesp <= rating ? 'Tight — at the redline' : tesp <= rating * 1.4 ? 'Over — airflow reduced ~15-25%' : 'CRITICAL — coil will ice / heat exchanger overheats';
      return {
        main: tesp.toFixed(2) + '"', unit: 'TESP (w.c.)',
        detail: [
          ['Filter', filter.toFixed(2) + '"'],
          ['Coil', coil.toFixed(2) + '"'],
          ['Supply', supply.toFixed(2) + '"'],
          ['Return', ret.toFixed(2) + '"'],
          ['Blower rated', rating.toFixed(2) + '"'],
          ['Headroom', headroom.toFixed(2) + '"'],
          ['Status', status],
          ['Disclaimer', 'Estimate only — measure with manometer for accuracy']
        ]
      };
    }
  },
  {
    slug: 'ventilation-cfm-calculator',
    name: 'Ventilation CFM',
    category: 'construction',
    trade: 'HVAC',
    desc: 'ASHRAE 62.2 fresh air',
    formula: 'CFM = 0.03 × ft² + 7.5 × (Nbr + 1)',
    title: 'VENTILATION CFM',
    metaTitle: 'Ventilation CFM Calculator — ASHRAE 62.2 Fresh Air | ProjectCalc',
    metaDesc: 'Free ventilation CFM calculator. ASHRAE 62.2 whole-house fresh air requirement plus exhaust CFM for kitchens, baths, and laundry.',
    seoIntro: 'This ventilation CFM calculator gives the required mechanical ventilation rate for a residence per ASHRAE 62.2 (and the IECC residential ventilation standard that references it). The whole-house base rate is 0.03 CFM per ft² of conditioned floor area + 7.5 CFM per occupant, with occupancy assumed at bedrooms + 1. The calculator also lists the local exhaust CFM required for kitchens (intermittent vs continuous), bathrooms, and laundry per the same standard. ESTIMATE ONLY — actual installed flow must be measured at the grille with a flow hood and verified by a licensed HVAC contractor.',
    note: 'ASHRAE 62.2-2019. Tight homes (<3 ACH50) require mechanical ventilation. Estimate only — verify installed flow at the grille with a flow hood and confirm with a licensed HVAC contractor.',
    inputs: [
      { id: 'sqft', label: 'Conditioned floor area', unit: 'ft²', default: 2000, step: 50 },
      { id: 'bedrooms', label: 'Number of bedrooms', unit: '', default: 3, step: 1,
        tooltip: 'ASHRAE 62.2 assumes occupancy = bedrooms + 1.' },
      { id: 'kitchenMode', label: 'Kitchen ventilation', unit: '', type: 'select', default: 'intermittent',
        tooltip: 'Intermittent (range hood used during cooking) needs 100 CFM. Continuous (always-on) needs only 5 ACH at the kitchen volume — usually less than 25 CFM.',
        options: [['intermittent','Intermittent (100 CFM range hood)'],['continuous','Continuous (5 ACH @ kitchen volume)']] },
      { id: 'bathrooms', label: 'Bathroom exhaust fans', unit: '', default: 2, step: 1,
        tooltip: 'ASHRAE 62.2: 50 CFM intermittent or 20 CFM continuous each. The calculator uses 50 CFM intermittent.' }
    ],
    calc: (data) => {
      const sqft = +data.sqft, bedrooms = +data.bedrooms, kitchenMode = data.kitchenMode as string, bathrooms = +data.bathrooms;
      const occupants = bedrooms + 1;
      const wholeHouse = 0.03 * sqft + 7.5 * occupants;
      const kitchen = kitchenMode === 'intermittent' ? 100 : 25;
      const bathTotal = bathrooms * 50;
      const laundry = 50;
      const totalExhaust = kitchen + bathTotal + laundry;
      return {
        main: Math.round(wholeHouse).toLocaleString(), unit: 'WHOLE-HOUSE CFM',
        detail: [
          ['Calculation', '0.03 × ' + sqft + ' + 7.5 × ' + occupants + ' = ' + wholeHouse.toFixed(1) + ' CFM'],
          ['Occupants assumed', occupants + ' (bedrooms + 1)'],
          ['Kitchen exhaust', kitchen + ' CFM'],
          ['Bath exhaust (each 50 CFM intermittent)', bathTotal + ' CFM'],
          ['Laundry exhaust', laundry + ' CFM'],
          ['Total local exhaust', totalExhaust + ' CFM'],
          ['Code reference', 'ASHRAE 62.2-2019'],
          ['Disclaimer', 'Estimate only — verify installed flow with a flow hood']
        ]
      };
    }
  },
  {
    slug: 'heat-loss-calculator',
    name: 'Heat Loss',
    category: 'construction',
    trade: 'HVAC',
    desc: 'BTU loss through envelope',
    formula: 'Q = U × A × ΔT (per surface)',
    title: 'HEAT LOSS',
    metaTitle: 'Heat Loss Calculator — BTU Loss Through Walls, Windows, Roof | ProjectCalc',
    metaDesc: 'Free heat loss calculator. Enter wall, window, ceiling, and floor areas with U-values — get conductive BTU loss for a heating-design temperature.',
    seoIntro: 'This heat loss calculator computes the conductive heat loss through a building envelope using Q = U × A × ΔT per surface, where U-value is the inverse of R-value. Enter the area and U-value for walls, windows, ceiling/roof, and floor, then the indoor design temp and outdoor 99% design temperature for your location. Add infiltration losses (typical 0.35 ACH × volume × 0.018) for a full envelope figure. The result is BTU/hr at design conditions — multiply by hours of heating season for annual energy. ESTIMATE ONLY — full Manual J adds duct losses, internal gains, and solar to get installed equipment size.',
    note: 'Conductive loss only. Add infiltration + duct losses for full Manual J. Estimate only — verify with a licensed HVAC contractor running full ACCA Manual J before equipment purchase.',
    inputs: [
      { id: 'wallArea', label: 'Wall area (above grade, minus windows/doors)', unit: 'ft²', default: 1600, step: 50 },
      { id: 'wallR', label: 'Wall R-value', unit: '', default: 19, step: 1,
        tooltip: '2x4 batt = R-13. 2x6 batt = R-19. R-21 high-density. Sprayfoam closed-cell = R-6.5/in. Modern cold-climate code = R-23 to R-30.' },
      { id: 'winArea', label: 'Window + door glass area', unit: 'ft²', default: 240, step: 10 },
      { id: 'winU', label: 'Window U-value', unit: '', default: 0.32, step: 0.02,
        tooltip: 'Single pane = 1.0. Double low-E = 0.30. Triple pane = 0.18. ENERGY STAR threshold by climate zone, typically 0.27-0.32.' },
      { id: 'ceilArea', label: 'Ceiling/roof area', unit: 'ft²', default: 1500, step: 50 },
      { id: 'ceilR', label: 'Ceiling R-value', unit: '', default: 38, step: 1,
        tooltip: 'Code minimum varies: R-30 (warm climate) to R-60 (cold climate). Loose-fill blown 12" = R-38.' },
      { id: 'floorArea', label: 'Floor over unconditioned space', unit: 'ft²', default: 1500, step: 50,
        tooltip: 'Slab-on-grade or basement on conditioned space = 0. Crawlspace or unheated garage above = full area.' },
      { id: 'floorR', label: 'Floor R-value', unit: '', default: 19, step: 1 },
      { id: 'tIn', label: 'Indoor design temp', unit: '°F', default: 70, step: 1 },
      { id: 'tOut', label: '99% outdoor design temp', unit: '°F', default: 5, step: 1,
        tooltip: 'The 99% design temp from ACCA Manual J Table 1 — the temperature your area is colder than only 1% of winter hours. Chicago: -3°F. NYC: 11°F. Atlanta: 23°F. Phoenix: 31°F.' }
    ],
    calc: (data) => {
      const wallArea = +data.wallArea, wallR = +data.wallR;
      const winArea = +data.winArea, winU = +data.winU;
      const ceilArea = +data.ceilArea, ceilR = +data.ceilR;
      const floorArea = +data.floorArea, floorR = +data.floorR;
      const tIn = +data.tIn, tOut = +data.tOut;
      const dT = tIn - tOut;
      const wallLoss = (wallArea / wallR) * dT;
      const winLoss = winArea * winU * dT;
      const ceilLoss = (ceilArea / ceilR) * dT;
      const floorLoss = floorR > 0 ? (floorArea / floorR) * dT : 0;
      const total = wallLoss + winLoss + ceilLoss + floorLoss;
      const tons = total / 12000;
      return {
        main: Math.round(total).toLocaleString(), unit: 'BTU/HR LOSS',
        detail: [
          ['Wall loss', Math.round(wallLoss).toLocaleString() + ' BTU/hr'],
          ['Window/door loss', Math.round(winLoss).toLocaleString() + ' BTU/hr'],
          ['Ceiling loss', Math.round(ceilLoss).toLocaleString() + ' BTU/hr'],
          ['Floor loss', Math.round(floorLoss).toLocaleString() + ' BTU/hr'],
          ['ΔT', dT + '°F (' + tIn + ' indoor − ' + tOut + ' outdoor)'],
          ['Equivalent tons', tons.toFixed(2)],
          ['Note', 'Conductive only — add infiltration + duct losses for full envelope'],
          ['Disclaimer', 'Estimate only — verify with full Manual J']
        ]
      };
    }
  },
  {
    slug: 'mortgage-calculator',
    name: 'Mortgage',
    category: 'finance',
    desc: 'Monthly payment',
    formula: 'M = P·r(1+r)ⁿ / ((1+r)ⁿ-1)',
    title: 'MORTGAGE PAYMENT',
    metaTitle: 'Mortgage Calculator — Monthly Payment | ProjectCalc',
    metaDesc: 'Mortgage calculator. Enter loan, rate, and term — get monthly principal & interest plus total interest paid.',
    seoIntro: 'This mortgage calculator computes the monthly principal and interest payment on a fixed-rate home loan. Enter the loan amount, interest rate, and term in years. The calculator does not include property tax, homeowner\'s insurance, PMI, or HOA — those are typically escrowed and added on top. To estimate total housing cost, add roughly 1.5–3% of home value annually for those items, divided by 12.',
    howToUse: 'Enter your loan amount (the amount you\'re borrowing — purchase price minus down payment), the annual interest rate as a percentage (e.g., 6.5), and the loan term in years. The calculator returns the monthly principal and interest (P&I) payment plus the total amount paid over the life of the loan and the total interest cost.\n\nFor a complete monthly housing payment (PITI — principal, interest, taxes, insurance), add roughly $200–$500 per month for property tax, $80–$200 for homeowner\'s insurance, and $50–$150 for PMI if your down payment is under 20%. HOA dues, if applicable, also add to PITI but aren\'t part of the loan itself.',
    workedExample: '$300,000 loan at 6.5% for 30 years:\n\nMonthly P&I = $1,896.20. Total paid over 30 years = $682,633. Total interest paid = $382,633 — more than the original loan amount.\n\nSame loan at 15 years: Monthly P&I = $2,613. Total paid = $470,388. Total interest = $170,388.\n\nThe 15-year payment is $717/month higher but saves $212,245 in interest over the life of the loan. That tradeoff — pay more in monthly outflow over 15 years to save $212K in interest — only makes sense if you\'d otherwise actually invest the difference at a return higher than the mortgage rate (after tax) and have the income stability to support the higher payment for 180 straight months.',
    commonMistakes: 'Confusing rate (APR) with monthly rate. The calculator handles the conversion (rate ÷ 12) internally — always enter the annual percentage as a percentage, not a decimal. 6.5%, not 0.065.\n\nForgetting taxes, insurance, and PMI when comparing affordability. P&I on a $300K loan looks like $1,896/month, but the true PITI is closer to $2,400–$2,800. Lenders typically cap your total housing cost at 28–31% of gross income — using P&I alone can put you 30% over what you can actually qualify for.\n\nChoosing a long term to lower the payment without considering the interest cost. Going from 15 to 30 years roughly doubles your total interest payment.\n\nIgnoring the impact of small rate changes. A 1% rate increase on a $400K loan adds roughly $250–$300 per month — that\'s $90–$108K over 30 years.',
    rulesOfThumb: 'Quick monthly P&I estimate: $6 per $1,000 borrowed at 6% for 30 years. So $300K = ~$1,800/month, $400K = ~$2,400/month. Adjust ±$60 per $1,000 for each 1% rate change.\n\nTotal interest paid on a 30-year loan at 6–7% rates ≈ the loan amount itself. At 4%, total interest is closer to ½ the loan; at 8%, it\'s about 1.4×.\n\nBi-weekly payments (paying half your monthly amount every two weeks) shave about 5–7 years off a 30-year mortgage and save 20–25% of total interest, because you make 13 monthly payments per year instead of 12.\n\nPITI typically runs 25–35% above the P&I number on this calculator. Use the higher figure for affordability planning, not P&I alone.\n\nRefinancing rule of thumb: a 0.75–1% rate drop is usually enough to justify closing costs if you\'ll stay in the home 3+ more years.',
    note: 'Principal & interest only. PITI (with tax/insurance) typically runs 25–35% higher.',
    inputs: [
      { id: 'P', label: 'Loan amount', unit: '$', default: 300000, step: 1000 },
      { id: 'rate', label: 'Interest rate', unit: '%', default: 6.5, step: 0.125 },
      { id: 'years', label: 'Term', unit: 'yrs', default: 30, step: 1 }
    ],
    calc: (data) => {
      const P=+data.P, rate=+data.rate, years=+data.years;
      const r = rate / 100 / 12;
      const n = years * 12;
      const M = r === 0 ? P / n : P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const totalPaid = M * n;
      const totalInterest = totalPaid - P;
      return {
        main: '$' + M.toLocaleString(undefined, {maximumFractionDigits: 2}), unit: 'PER MONTH (P&I)',
        detail: [
          ['Total paid', '$' + totalPaid.toLocaleString(undefined, {maximumFractionDigits: 0})],
          ['Total interest', '$' + totalInterest.toLocaleString(undefined, {maximumFractionDigits: 0})],
          ['Loan amount', '$' + P.toLocaleString()],
          ['Term', n + ' months']
        ]
      };
    }
  },
  {
    slug: 'car-payment-calculator',
    name: 'Car Payment',
    category: 'finance',
    desc: 'Auto loan',
    formula: 'M = P·r(1+r)ⁿ / ((1+r)ⁿ-1)',
    title: 'CAR PAYMENT',
    metaTitle: 'Car Payment Calculator — Monthly Auto Loan Payment | ProjectCalc',
    metaDesc: 'Free car payment calculator. Enter price, down payment, trade-in, term, and rate — get monthly payment, total interest, and amount financed.',
    seoIntro: 'This car payment calculator estimates your monthly auto loan payment. Enter the vehicle price, your down payment in cash, the trade-in value of your current vehicle (if any), the loan term in months, and the interest rate. The calculator returns your monthly principal and interest payment along with the total amount financed and total interest paid over the life of the loan. Sales tax varies by state — some states tax the full price, others tax price minus trade-in. If you want to include sales tax, add it to the vehicle price.',
    howToUse: 'Enter the vehicle price as listed (out-the-door price minus tax/title/registration if you want pure loan math — see common mistakes). Subtract your down payment in cash and the trade-in value of your current vehicle to get the amount actually financed. Pick a loan term in months — 60 (5 years) is the most common; 72 and 84 lower the monthly payment but extend interest payments and increase total cost. Enter the APR (annual percentage rate) the dealer or bank quoted you.\n\nThe calculator returns the monthly P&I payment plus the amount financed, total interest paid, and total cost over the loan. New-car APRs in 2026 typically run 7–9% with good credit; used-car loans run 9–12%. Subprime (sub-650 credit) can hit 18–25% — at those rates, used cars or longer terms become very expensive.',
    workedExample: '$35,000 vehicle, $5,000 down, $3,000 trade-in, 60 months at 8.5% APR:\n\nAmount financed: $35,000 − $5,000 − $3,000 = $27,000. Monthly payment: $554. Total paid (loan only): $33,250. Total interest: $6,250.\n\nTotal cost including down + trade: $41,250 — roughly 18% above sticker price.\n\nSame loan at 72 months: $474/month, $34,123 total paid, $7,123 total interest. Lower payment, $873 more interest, longer underwater period (the truck is worth less than the loan balance for the first 36–48 months).\n\nSame loan at 36 months: $852/month, $30,667 total paid, $3,667 total interest — best math, but $300/month higher payment than the 60-month term.',
    commonMistakes: 'Focusing on monthly payment instead of total cost. Dealers will stretch any term to fit your payment goal — the result is more interest and longer underwater periods. Always compare total interest paid across term lengths.\n\nForgetting tax, title, registration, doc fees. These add 8–12% to the total cost and aren\'t included in the calculator. State tax varies; doc fees can be $300–$700.\n\nRolling negative equity into a new loan. If you owe more on your trade-in than it\'s worth, the dealer can roll the difference into the new loan — but you start the new loan already underwater, often by thousands.\n\nBuying GAP insurance and extended warranties from the dealer. Both are profit centers — typically 50–100% cheaper from your insurer or a third party. Decline at the F&I desk and shop separately.',
    rulesOfThumb: '60 months is the sweet spot for total cost. 72–84 months minimizes monthly payment but maximizes total interest.\n\n20% down minimum is the traditional rule — keeps you above water on depreciation. Less than 20% down + 72-month term = guaranteed to be upside-down for years.\n\nNew-car APRs (2026): 6–7% excellent credit, 8–9% average, 11–15% subprime.\n\nUsed-car APRs: typically 2–3% higher than new at the same credit tier.\n\nTotal auto cost (loan + insurance + fuel + maintenance) typically runs 15–25% of take-home pay for sustainable car ownership.',
    note: 'Principal & interest only. Doesn\'t include sales tax, title, registration, or extended warranty add-ons. Average new-car rates in 2026: 7–9%; used: 9–12%.',
    inputs: [
      { id: 'price', label: 'Vehicle price', unit: '$', default: 35000, step: 500 },
      { id: 'down', label: 'Down payment', unit: '$', default: 5000, step: 500 },
      { id: 'trade', label: 'Trade-in value', unit: '$', default: 0, step: 500 },
      { id: 'months', label: 'Loan term', unit: '', type: 'select', default: '60',
        options: [['36','36 months (3 yr)'],['48','48 months (4 yr)'],['60','60 months (5 yr)'],['72','72 months (6 yr)'],['84','84 months (7 yr)']] },
      { id: 'rate', label: 'Interest rate (APR)', unit: '%', default: 8.5, step: 0.125 }
    ],
    calc: (data) => {
      const price=+data.price, down=+data.down, trade=+data.trade, months=+data.months, rate=+data.rate;
      const P = Math.max(0, price - down - trade);
      const r = rate / 100 / 12;
      const M = P === 0 ? 0 : (r === 0 ? P / months : P * (r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1));
      const totalPaid = M * months;
      const totalInterest = totalPaid - P;
      return {
        main: '$' + M.toLocaleString(undefined, {maximumFractionDigits: 2}), unit: 'PER MONTH',
        detail: [
          ['Amount financed', '$' + P.toLocaleString(undefined, {maximumFractionDigits: 0})],
          ['Total interest', '$' + totalInterest.toLocaleString(undefined, {maximumFractionDigits: 0})],
          ['Total paid (loan)', '$' + totalPaid.toLocaleString(undefined, {maximumFractionDigits: 0})],
          ['Total cost (incl. down + trade)', '$' + (totalPaid + down + trade).toLocaleString(undefined, {maximumFractionDigits: 0})]
        ]
      };
    }
  },
  {
    slug: 'personal-loan-calculator',
    name: 'Personal Loan',
    category: 'finance',
    desc: 'Monthly payment',
    formula: 'M = P·r(1+r)ⁿ / ((1+r)ⁿ-1)',
    title: 'PERSONAL LOAN',
    metaTitle: 'Personal Loan Calculator — Monthly Payment & Total Interest | ProjectCalc',
    metaDesc: 'Personal loan calculator. Enter loan amount, APR, and term — get monthly payment plus total interest you\'ll pay over the life of the loan.',
    seoIntro: 'This personal loan calculator computes the monthly payment on an unsecured fixed-rate personal loan. Enter the loan amount, the APR (annual percentage rate) the lender quoted you, and the term in months. The calculator returns the monthly principal and interest payment plus the total interest you\'ll pay over the life of the loan. Personal loan APRs in 2026 typically range from 7% (excellent credit, top lenders) to 35% (subprime). Most personal loans run 24 to 84 months.',
    note: 'Doesn\'t account for origination fees, which some lenders deduct from your funded amount (a 5% fee on a $10,000 loan means you receive $9,500 but still owe $10,000).',
    inputs: [
      { id: 'P', label: 'Loan amount', unit: '$', default: 15000, step: 500 },
      { id: 'rate', label: 'Interest rate (APR)', unit: '%', default: 12, step: 0.25 },
      { id: 'months', label: 'Term', unit: '', type: 'select', default: '60',
        options: [['12','12 months (1 yr)'],['24','24 months (2 yr)'],['36','36 months (3 yr)'],['48','48 months (4 yr)'],['60','60 months (5 yr)'],['72','72 months (6 yr)'],['84','84 months (7 yr)']] }
    ],
    calc: (data) => {
      const P=+data.P, rate=+data.rate, months=+data.months;
      const r = rate / 100 / 12;
      const M = r === 0 ? P / months : P * (r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
      const totalPaid = M * months;
      const totalInterest = totalPaid - P;
      return {
        main: '$' + M.toLocaleString(undefined, {maximumFractionDigits: 2}), unit: 'PER MONTH',
        detail: [
          ['Total paid', '$' + totalPaid.toLocaleString(undefined, {maximumFractionDigits: 0})],
          ['Total interest', '$' + totalInterest.toLocaleString(undefined, {maximumFractionDigits: 0})],
          ['Loan amount', '$' + P.toLocaleString()],
          ['Term', months + ' months']
        ]
      };
    }
  },
  {
    slug: 'tip-calculator',
    name: 'Tip',
    category: 'finance',
    desc: 'Restaurant tip',
    formula: 'tip = bill × %',
    title: 'TIP',
    metaTitle: 'Tip Calculator — Split Bills, Multiple Rates | ProjectCalc',
    metaDesc: 'Tip calculator with bill split. Enter bill, tip percent, and number of people — get total per person.',
    seoIntro: 'This tip calculator splits a restaurant bill including the tip across any number of people. Enter the pre-tip bill amount, the tip percentage (15% standard, 18% good service, 20% excellent), and the party size. The calculator returns the total bill, the tip amount, and what each person owes if you\'re splitting evenly.',
    note: 'US norms: 15% standard, 18% good, 20%+ excellent. Some restaurants auto-include 18% for parties of 6+.',
    inputs: [
      { id: 'bill', label: 'Bill amount', unit: '$', default: 50, step: 1 },
      { id: 'pct', label: 'Tip percent', unit: '%', default: 18, step: 1 },
      { id: 'people', label: 'Split between', unit: 'ppl', default: 2, step: 1 }
    ],
    calc: (data) => {
      const bill=+data.bill, pct=+data.pct, people=+data.people;
      const tip = bill * (pct / 100);
      const total = bill + tip;
      const perPerson = total / Math.max(1, people);
      return {
        main: '$' + perPerson.toFixed(2), unit: 'PER PERSON',
        detail: [
          ['Bill', '$' + bill.toFixed(2)],
          ['Tip (' + pct + '%)', '$' + tip.toFixed(2)],
          ['Total', '$' + total.toFixed(2)],
          ['People', people]
        ]
      };
    }
  },
  {
    slug: 'stair-stringer-calculator',
    name: 'Stair Stringer',
    category: 'construction',
    trade: 'Carpentry',
    desc: 'Rise · run · stringer length',
    formula: 'L = √(rise² + run²)',
    title: 'STAIR STRINGER',
    metaTitle: 'Stair Stringer Calculator — Rise, Run, Length | ProjectCalc',
    metaDesc: 'Free stair stringer calculator. Enter total rise and number of risers — get unit rise, total run, stringer length, and IRC code checks for rise/run.',
    seoIntro: 'This stair stringer calculator gives you the four numbers a framer or DIY builder needs before cutting a stringer: unit riser height, unit tread depth, total horizontal run, and the diagonal stringer length. Enter the total rise (finished floor to finished floor), the number of risers you want, and your tread depth, and the calculator returns each value plus an IRC R311.7 code check (max riser 7-3/4", min tread 10", target 2R + T = 24"–25" for comfortable stride). The stringer length is the Pythagorean diagonal — buy a 2x12 at least one foot longer to leave room for the seat cut at the bottom and the plumb cut at the top. ESTIMATE ONLY — verify with your local building department before cutting.',
    howToUse: 'Measure the total rise from the finished surface of the lower floor to the finished surface of the upper floor (or deck) in inches. For a typical basement-to-main-floor run, this is around 100–110 inches. Decide on the number of risers — IRC R311.7 caps individual riser height at 7¾ inches, so total rise ÷ 7.75 gives you the minimum riser count. Most installs use 13–15 risers for residential floor-to-floor runs.\n\nEnter your tread depth (run): IRC minimum is 10 inches; 10½ or 11 inches gives a more comfortable step. The calculator returns unit riser height, total horizontal run, the diagonal stringer length, the IRC code check (riser ≤ 7¾, tread ≥ 10), and the 2R+T stride check (target 24–25 for natural walking rhythm). Buy a 2x12 at least one foot longer than the calculated stringer length to leave room for the seat cut at the bottom and plumb cut at the top.',
    workedExample: 'For a 108-inch total rise, 14 risers, 10½-inch tread:\n\nUnit riser height: 108 ÷ 14 = 7.71 inches. Treads: 14 − 1 = 13 (one less than risers since the top step is the upper floor). Total horizontal run: 13 × 10.5 = 136.5 inches (11.4 ft).\n\nStringer length (diagonal): √(108² + 136.5²) = √(11,664 + 18,632) = √30,296 = 174 inches = 14.5 ft.\n\nStride check: 2 × 7.71 + 10.5 = 25.92 — slightly above the comfortable 24–25 target, but within IRC. Code check: passes (riser 7.71 ≤ 7.75, tread 10.5 ≥ 10).\n\nBuy: one 2x12 at least 16 ft long for each stringer. Standard residential stairs use 3 stringers (one per side, one center) for 36-inch-wide stairs. Total stock: 3 × 16-ft 2x12s, plus tread material (13 treads × 36 inches = 39 linear feet of 2x12 or 5/4 deck board).',
    commonMistakes: 'Mixing riser heights. The first or last riser slightly off (¼ inch) is the #1 cause of stair-related falls. Cut all stringers identically and shim the bottom plate or top hanger if needed.\n\nSkipping the bottom-step adjustment. The bottom of the stringer sits on the lower floor; the seat cut for the first tread needs to account for the tread thickness so the first riser height matches the others. Forget this and the bottom step is 1 inch tall (the top of the seat cut) when it should be 7.71 inches.\n\nUsing a single stringer in the center for wide stairs. Stairs over 36 inches wide need 3+ stringers; over 48 inches need 4. A single center stringer plus two outer stringers is the residential standard for 36-inch stairs.\n\nBuilding stairs without checking IRC compliance. Riser > 7¾, tread < 10, or 2R+T outside 24–25 will fail inspection. The calculator checks all three; trust the warning if it fires.',
    rulesOfThumb: 'IRC R311.7: max riser 7¾ inches, min tread 10 inches.\n\nStride formula: 2R + T = 24 to 25 inches (tested for natural walking gait).\n\nStringers: 2x12 #1 grade or better. One 2x12 per 12–16 inches of stair width. 36-inch-wide stairs need 3 stringers.\n\nTotal rise budget: typical floor-to-floor for an 8-foot ceiling + joist depth = 105–115 inches. Plan for 13–15 risers.\n\nAlways buy stringer stock at least 1 foot longer than the calculated diagonal — the seat and plumb cuts eat material.',
    note: 'IRC R311.7: max riser 7-3/4", min tread 10". This is an estimate — verify with a licensed structural engineer or local building inspector. Not a substitute for engineered drawings.',
    inputs: [
      { id: 'rise', label: 'Total rise (floor to floor)', unit: 'in', default: 108, step: 0.25,
        tooltip: 'Vertical distance from the finished surface of the lower floor to the finished surface of the upper floor (or deck). 108" = 9 ft, typical for an 8-ft basement ceiling plus joist depth.' },
      { id: 'risers', label: 'Number of risers', unit: '', default: 14, step: 1,
        tooltip: 'Risers are the vertical faces between treads. Treads = risers - 1 (open at top). Aim for unit riser between 7" and 7-3/4".' },
      { id: 'run', label: 'Tread depth (run)', unit: 'in', default: 10.5, step: 0.25,
        tooltip: 'Horizontal depth of each tread, nose to nose. IRC minimum is 10". 10-1/2" or 11" gives a more comfortable step.' }
    ],
    calc: (data) => {
      const rise = +data.rise, risers = +data.risers, run = +data.run;
      const treads = Math.max(0, risers - 1);
      const unitRise = rise / risers;
      const totalRun = treads * run;
      const stringerIn = Math.sqrt(rise * rise + totalRun * totalRun);
      const stringerFt = stringerIn / 12;
      const stride = 2 * unitRise + run;
      let codeCheck = 'OK';
      if (unitRise > 7.75) codeCheck = 'Riser TOO TALL — exceeds IRC max 7-3/4"';
      else if (run < 10) codeCheck = 'Tread TOO SHALLOW — below IRC min 10"';
      else if (stride < 24 || stride > 25) codeCheck = 'OK — stride feels off (2R+T target 24-25")';
      return {
        main: stringerFt.toFixed(2), unit: 'STRINGER FT',
        detail: [
          ['Unit riser height', unitRise.toFixed(3) + '"'],
          ['Number of treads', treads],
          ['Total horizontal run', totalRun.toFixed(2) + '" (' + (totalRun / 12).toFixed(2) + ' ft)'],
          ['Stringer length', stringerIn.toFixed(2) + '"'],
          ['Stride check (2R + T)', stride.toFixed(2) + '" (target 24-25")'],
          ['Code check', codeCheck],
          ['Stock to buy', 'One 2x12 ≥ ' + Math.ceil(stringerFt + 1) + ' ft long'],
          ['Disclaimer', 'Estimate only — verify with local code/inspector']
        ]
      };
    }
  },
  {
    slug: 'beam-span-calculator',
    name: 'Beam Span',
    category: 'construction',
    trade: 'Carpentry',
    desc: 'Max span by lumber size',
    formula: 'L = √(8·Fb·Cf·N·S ÷ 12·w)',
    title: 'BEAM SPAN (BUILT-UP)',
    metaTitle: 'Beam Span Calculator — Max Span by Lumber Size | ProjectCalc',
    metaDesc: 'Built-up beam span estimator for #2 SPF. Enter lumber size, plies, and tributary width — get max simple-span length plus bending and L/360 deflection limits.',
    seoIntro: 'This beam span calculator estimates the maximum simple-span length of a built-up dimensional-lumber beam (one to three plies of 2x6, 2x8, 2x10, or 2x12) based on its bending capacity and an L/360 live-load deflection limit. The calculation assumes #2 Spruce-Pine-Fir (Fb = 875 psi, E = 1,400,000 psi) with a size factor Cf, repetitive-member factor not applied (single-beam case), normal load duration. Enter the lumber size, the number of plies nailed or bolted into a built-up beam, the tributary width the beam is carrying, and the floor live and dead loads. Output is the maximum span where the beam stays within both bending strength and deflection limits. ESTIMATE ONLY — built-up beams should be sized by an engineer or a code-stamped span table for any actual structure.',
    note: '#2 SPF lumber, simple span, L/360 LL deflection. Not engineered. Verify with a structural engineer, AWC span tables, or your local building department before purchase or framing.',
    inputs: [
      { id: 'size', label: 'Lumber size', unit: '', type: 'select', default: '2x10',
        options: [['2x6','2x6'],['2x8','2x8'],['2x10','2x10'],['2x12','2x12']] },
      { id: 'plies', label: 'Number of plies', unit: '', type: 'select', default: '2',
        tooltip: 'A built-up beam stacks 2 or 3 dimensional members nailed/bolted side by side. (1) is a single rafter/joist, (2) is a typical double header, (3) is a heavy header.',
        options: [['1','1 (single)'],['2','2 (double)'],['3','3 (triple)']] },
      { id: 'trib', label: 'Tributary width', unit: 'ft', default: 12, step: 0.5,
        tooltip: 'Half the joist span on each side of the beam (or full span if beam is at one end). For a 24-ft-wide room with the beam down the middle, tributary width = 12 ft.' },
      { id: 'LL', label: 'Live load', unit: 'psf', default: 40, step: 5,
        tooltip: 'Residential floor LL is 40 psf per IRC. Bedrooms only is 30 psf. Decks 40 psf. Snow load varies by region.' },
      { id: 'DL', label: 'Dead load', unit: 'psf', default: 10, step: 5,
        tooltip: 'Self-weight of floor: subfloor + joists + finish + ceiling. Typical residential floor 10-15 psf. Heavy tile/stone floor 20+ psf.' }
    ],
    calc: (data) => {
      const Fb = 875;
      const E = 1400000;
      const Cf: Record<string, number> = { '2x6': 1.3, '2x8': 1.2, '2x10': 1.1, '2x12': 1.0 };
      const Sx: Record<string, number> = { '2x6': 7.56, '2x8': 13.14, '2x10': 21.39, '2x12': 31.64 };
      const I: Record<string, number> = { '2x6': 20.80, '2x8': 47.63, '2x10': 98.93, '2x12': 178.0 };
      const size = data.size as string;
      const N = +data.plies;
      const trib = +data.trib;
      const LL = +data.LL, DL = +data.DL;
      const w = (LL + DL) * trib;
      const wLL = LL * trib;
      const Sxx = N * Sx[size];
      const Itot = N * I[size];
      const Lb = Math.sqrt((8 * Fb * Cf[size] * Sxx) / (12 * w));
      const Ld = Math.cbrt((384 * E * Itot * 12) / (1800 * wLL)) / 12;
      const span = Math.min(Lb, Ld);
      const govern = Lb < Ld ? 'Bending' : 'Deflection (L/360)';
      const spanRound = Math.floor(span * 2) / 2;
      return {
        main: spanRound.toFixed(1), unit: 'MAX SPAN FT',
        detail: [
          ['Beam', N + ' × ' + size + ' (' + size + ' built-up)'],
          ['Total uniform load', w.toFixed(0) + ' plf'],
          ['Live-load only', wLL.toFixed(0) + ' plf'],
          ['Bending limit', Lb.toFixed(2) + ' ft'],
          ['Deflection L/360 limit', Ld.toFixed(2) + ' ft'],
          ['Governs', govern],
          ['Disclaimer', 'Estimate only — engineer must verify']
        ]
      };
    }
  },
  {
    slug: 'plywood-sheets-calculator',
    name: 'Plywood Sheets',
    category: 'construction',
    trade: 'Carpentry',
    desc: 'Subfloor / sheathing',
    formula: 'sheets = ⌈(area ÷ sheet) × waste⌉',
    title: 'PLYWOOD / OSB SHEETS',
    metaTitle: 'Plywood Calculator — Subfloor & Sheathing Sheets | ProjectCalc',
    metaDesc: 'Free plywood and OSB calculator for floors, walls, and roofs. Enter dimensions and sheet size — get total sheets needed including waste.',
    seoIntro: 'This plywood calculator estimates how many 4-foot-wide sheets of plywood or OSB you need for a subfloor, wall sheathing, or roof deck. Enter the length and width of the area to cover, choose the sheet length (4×8 = 32 ft², 4×9 = 36 ft², 4×10 = 40 ft²), and adjust the waste percentage. Subfloor jobs run 5–10% waste because joists land on a 16" or 24" pattern that aligns well with 4×8 sheets; complex hip roofs and walls with many openings push waste to 12–15%. The calculator rounds up to the nearest whole sheet. For T&G subfloor, allow at least one extra sheet to deal with the tongue lost on the perimeter sheet. ESTIMATE ONLY — measure the actual area and verify your fastening pattern with the engineered plans.',
    note: 'Standard waste 10%. T&G subfloor loses 3" of width on perimeter sheets — buy at least 1 extra. This is an estimate; not a substitute for plans or shop drawings.',
    inputs: [
      { id: 'L', label: 'Length', unit: 'ft', default: 24, step: 0.5 },
      { id: 'W', label: 'Width', unit: 'ft', default: 16, step: 0.5 },
      { id: 'sheet', label: 'Sheet size', unit: '', type: 'select', default: '32',
        options: [['32','4×8 (32 ft²)'],['36','4×9 (36 ft²)'],['40','4×10 (40 ft²)']] },
      { id: 'waste', label: 'Waste factor', unit: '%', default: 10, step: 1,
        tooltip: 'Subfloor 5-10%, walls 10-12%, hip roofs 12-15%. Increase for cut-up layouts or angled walls.' }
    ],
    calc: (data) => {
      const L = +data.L, W = +data.W, sheet = +data.sheet, waste = +data.waste;
      const area = L * W;
      const exact = area / sheet;
      const withWaste = exact * (1 + waste / 100);
      const sheets = Math.ceil(withWaste);
      const sheetLabel = sheet === 32 ? '4×8' : sheet === 36 ? '4×9' : '4×10';
      return {
        main: sheets, unit: sheetLabel.toUpperCase() + ' SHEETS',
        detail: [
          ['Total area', area.toFixed(0) + ' ft²'],
          ['Sheet coverage', sheet + ' ft²'],
          ['Exact need', exact.toFixed(2) + ' sheets'],
          ['With ' + waste + '% waste', withWaste.toFixed(2) + ' sheets'],
          ['Heads-up', 'Buy 1 extra for T&G perimeter loss'],
          ['Disclaimer', 'Estimate only — verify with plans']
        ]
      };
    }
  },
  {
    slug: 'rafter-length-calculator',
    name: 'Rafter Length',
    category: 'construction',
    trade: 'Carpentry',
    desc: 'Pitch · run · overhang',
    formula: 'L = √(run² + rise²) + overhang·factor',
    title: 'RAFTER LENGTH',
    metaTitle: 'Rafter Length Calculator — Pitch and Run | ProjectCalc',
    metaDesc: 'Rafter length calculator. Enter building width, roof pitch, and overhang — get rafter length, ridge rise, and pitch factor for cut planning.',
    seoIntro: 'This rafter length calculator gives you the cut length for a common rafter on a gable roof based on building width, roof pitch, and eave overhang. Run is half the building width (rafter spans from outside the wall plate to the ridge). Rise is run × pitch/12. The diagonal length (ridge length minus 1/2 ridge board thickness, but uncorrected here) is the Pythagorean √(run² + rise²) — this calculator returns the total along-the-slope length including the eave overhang, which is the length to mark on the rafter stock. You still need to subtract half the ridge board thickness from the upper end for a precise plumb cut, and lay out the bird\'s-mouth seat cut at the wall. ESTIMATE ONLY — verify with a stamped roof plan; structural rafter sizing depends on snow load and ceiling joist tie capacity.',
    howToUse: 'Enter the building width in feet — this is the outside-to-outside distance perpendicular to the ridge, not the rafter length itself. Each rafter spans half the building width plus the overhang. Pick the roof pitch in rise per 12 inches of run: 4/12 is a low-slope ranch, 6/12 is conventional residential, 12/12 is 45° (steep, requires safety equipment to walk).\n\nEnter eave overhang in inches — 12 inches is typical for shadow line and weather protection, 18–24 for more shade and rain shedding, 6 inches or less if you\'re matching an existing house. The calculator returns the along-the-slope rafter length (mark this on the lumber), the plumb-cut angle for the ridge end, and the recommended stock length to buy.',
    workedExample: 'For a 24 ft wide building with 6/12 pitch and 12-inch overhang:\n\nRun = 24 ÷ 2 = 12 ft. Rise to ridge = 12 × (6/12) = 6 ft. Pitch factor = √(36 + 144) ÷ 12 = √180 ÷ 12 = 1.118.\n\nSlope length (no overhang) = 12 × 1.118 = 13.42 ft. Overhang along slope = 12 × 1.118 = 13.4 inches = 1.12 ft. Total rafter length = 13.42 + 1.12 = 14.54 ft.\n\nPlumb-cut angle = arctan(6/12) = 26.57°. Stock to buy: 16-foot 2x10 or 2x12 (allow 1 ft for cut waste and the seat cut at the wall).\n\nFor a steeper 9/12 pitch on the same 24-ft building: pitch factor = √(81+144) ÷ 12 = 1.25. Slope = 12 × 1.25 = 15 ft. Total with overhang = 16.25 ft → buy 18-foot stock.',
    commonMistakes: 'Forgetting to subtract half the ridge board thickness from the upper end. The calculator returns the length to the ridge centerline; the actual cut needs to be ¾ inch shorter (half of a 1½-inch ridge board) for the rafter to butt cleanly.\n\nUsing building width as run. Run is HALF the building width — one rafter spans from outside the wall plate to the ridge, not all the way across.\n\nUnderestimating rafter SIZE for snow load. Length is geometry; size (2x10 vs 2x12, etc.) depends on snow load, span, and spacing per AWC span tables. The calculator handles geometry only — verify the size with a stamped roof plan or local building department.\n\nSkipping the bird\'s-mouth seat cut. The rafter must sit flat on the wall plate — this requires a notch (bird\'s mouth) cut at the wall location. Forgetting this leaves the rafter resting on a knife edge.',
    rulesOfThumb: 'Pitch factor: 3/12 = 1.031 · 4/12 = 1.054 · 6/12 = 1.118 · 8/12 = 1.202 · 9/12 = 1.250 · 12/12 = 1.414.\n\nRafter length = (run × pitch factor) + (overhang × pitch factor / 12).\n\nPlumb-cut angle = arctan(pitch / 12). 6/12 = 26.6°. 12/12 = 45°.\n\nBuy stock at least 1–2 ft longer than calculated rafter length to allow for cut waste, plumb cut, seat cut, and an oops factor.\n\nStandard residential rafter sizing (verify with span tables): 2x8 spans 12–14 ft at 16" o.c.; 2x10 spans 16–18 ft; 2x12 spans 20–22 ft.',
    note: 'Length is along-the-slope from ridge to overhang tip. Subtract half ridge-board thickness for actual cut. Verify rafter SIZE with engineered plans or AWC tables.',
    inputs: [
      { id: 'width', label: 'Building width', unit: 'ft', default: 24, step: 0.5,
        tooltip: 'Outside-to-outside of the wall plates, perpendicular to the ridge. Each rafter runs half this distance.' },
      { id: 'pitch', label: 'Roof pitch (rise / 12)', unit: '', type: 'select', default: '6',
        tooltip: 'Pitch is rise (inches) per 12 inches of run. 4/12 is shallow ranch; 6/12 is conventional; 9/12 and steeper need toe-boards or scaffolding to walk.',
        options: [['3','3/12 (low slope)'],['4','4/12'],['5','5/12'],['6','6/12 (standard)'],['7','7/12'],['8','8/12'],['9','9/12 (steep)'],['10','10/12'],['12','12/12 (45°)']] },
      { id: 'overhang', label: 'Eave overhang', unit: 'in', default: 12, step: 1,
        tooltip: 'Horizontal projection of the rafter past the wall plate. 12" is typical; 18-24" gives more weather protection but adds load.' }
    ],
    calc: (data) => {
      const width = +data.width, pitch = +data.pitch, overhang = +data.overhang;
      const runFt = width / 2;
      const riseFt = runFt * (pitch / 12);
      const factor = Math.sqrt(pitch * pitch + 144) / 12;
      const slopeFt = runFt * factor;
      const overhangSlopeIn = overhang * factor;
      const totalIn = slopeFt * 12 + overhangSlopeIn;
      const totalFt = totalIn / 12;
      const angleDeg = Math.atan(pitch / 12) * 180 / Math.PI;
      return {
        main: totalFt.toFixed(2), unit: 'RAFTER FT',
        detail: [
          ['Run (1/2 building)', runFt.toFixed(2) + ' ft'],
          ['Rise to ridge', riseFt.toFixed(2) + ' ft'],
          ['Pitch factor', factor.toFixed(4)],
          ['Slope length (no overhang)', slopeFt.toFixed(2) + ' ft'],
          ['Overhang along slope', overhangSlopeIn.toFixed(2) + '"'],
          ['Plumb-cut angle', angleDeg.toFixed(1) + '°'],
          ['Stock to buy', 'Rafter ≥ ' + Math.ceil(totalFt + 1) + ' ft (allow waste)'],
          ['Disclaimer', 'Estimate — subtract ½ ridge for cut; verify size']
        ]
      };
    }
  },
  {
    slug: 'header-size-calculator',
    name: 'Header Size',
    category: 'construction',
    trade: 'Carpentry',
    desc: 'Door / window beam',
    formula: 'IRC R602.7 quick-pick',
    title: 'HEADER SIZE',
    metaTitle: 'Header Size Calculator — Door & Window Beam | ProjectCalc',
    metaDesc: 'Free header size calculator for doors and windows. Pick opening width, wall location, and floors above — get a quick IRC-style header recommendation.',
    seoIntro: 'This header size calculator gives a quick IRC-style recommendation for the built-up header that spans a door or window opening in a wood-framed wall. Choose the wall location (non-bearing, exterior bearing, or interior bearing), the number of floors stacking on top of the wall, and the opening width — the calculator returns a built-up header size (e.g., "two 2x10s" or "three 2x12s") consistent with the simplified tables in IRC R602.7. Non-bearing partition walls take a minimum 2-2x4 header up to 8 ft. Bearing walls add depth as opening width and load increase: roof-only walls go up to 2-2x12 at 10 ft, while two-story bearing walls jump faster. ESTIMATE ONLY — IRC tables are based on specific assumptions (snow load, building width, lumber grade); your inspector or engineer is the final word.',
    note: 'Quick-pick estimate based on simplified IRC R602.7 ranges. NOT engineered. Verify with a structural engineer, code-stamped tables, or local inspector before framing.',
    inputs: [
      { id: 'width', label: 'Opening width (rough opening)', unit: 'ft', default: 6, step: 0.5,
        tooltip: 'Rough opening width — the framed hole for the door or window unit. Typical doors 3 ft, sliding glass 6 ft, garage doors 9-16 ft.' },
      { id: 'loc', label: 'Wall location', unit: '', type: 'select', default: 'ext1',
        options: [
          ['nonbear','Non-bearing partition'],
          ['ext0','Exterior bearing — roof + ceiling only'],
          ['ext1','Exterior bearing — 1 floor + roof above'],
          ['ext2','Exterior bearing — 2 floors + roof above'],
          ['intbear','Interior bearing wall']
        ],
        tooltip: 'Non-bearing carries only its own weight. Bearing carries floor/roof loads. Interior bearing walls run perpendicular to the joists they support.' }
    ],
    calc: (data) => {
      const w = +data.width;
      const loc = data.loc as string;
      let header = '';
      let jacks = 1;
      if (loc === 'nonbear') {
        if (w <= 4) header = '(2) 2x4';
        else if (w <= 8) header = '(2) 2x6';
        else header = '(2) 2x8';
        jacks = w <= 6 ? 1 : 2;
      } else if (loc === 'ext0') {
        if (w <= 3) header = '(2) 2x4';
        else if (w <= 5) header = '(2) 2x6';
        else if (w <= 7) header = '(2) 2x8';
        else if (w <= 8) header = '(2) 2x10';
        else if (w <= 10) header = '(3) 2x10';
        else if (w <= 12) header = '(3) 2x12';
        else header = '(4) 2x12 — verify with engineer';
        jacks = w <= 4 ? 1 : w <= 8 ? 2 : 3;
      } else if (loc === 'ext1' || loc === 'intbear') {
        if (w <= 3) header = '(2) 2x6';
        else if (w <= 5) header = '(2) 2x8';
        else if (w <= 7) header = '(2) 2x10';
        else if (w <= 8) header = '(3) 2x10';
        else if (w <= 10) header = '(3) 2x12';
        else if (w <= 12) header = '(4) 2x12 — engineer verify';
        else header = 'Engineered LVL/PSL required';
        jacks = w <= 4 ? 1 : w <= 8 ? 2 : 3;
      } else {
        if (w <= 3) header = '(2) 2x8';
        else if (w <= 5) header = '(2) 2x10';
        else if (w <= 7) header = '(3) 2x10';
        else if (w <= 8) header = '(3) 2x12';
        else if (w <= 10) header = '(4) 2x12 — engineer verify';
        else header = 'Engineered LVL/PSL required';
        jacks = w <= 4 ? 2 : w <= 8 ? 2 : 3;
      }
      const kingPerSide = 1;
      return {
        main: header, unit: 'HEADER',
        detail: [
          ['Opening width', w + ' ft'],
          ['Jack studs (per side)', jacks],
          ['King studs (per side)', kingPerSide],
          ['Plywood spacer', '½" plywood between plies (built-up only)'],
          ['Code reference', 'IRC R602.7 simplified'],
          ['Disclaimer', 'Estimate only — engineer/inspector required']
        ]
      };
    }
  },
  {
    slug: 'paver-calculator',
    name: 'Pavers',
    category: 'home',
    desc: 'Pavers for a patio',
    formula: 'pavers = area ÷ paver ft² × waste',
    title: 'PAVER COUNT',
    metaTitle: 'Paver Calculator — How Many Pavers for a Patio | ProjectCalc',
    metaDesc: 'Free paver calculator. Enter your patio dimensions and paver size, get the exact count to order with the right waste factor for the laying pattern.',
    seoIntro: 'This paver calculator estimates how many concrete or brick pavers you need for a patio, walkway, or driveway. Enter the project dimensions and the paver size sold at your supplier, choose the laying pattern (straight runs cost about 5% in cuts; 45° diagonal and herringbone climb to 15-20%), and the calculator returns the total piece count rounded up. The math is the project area divided by the area of a single paver, multiplied by the waste factor for the pattern. Brick-format 4×8 in pavers run 4.5 per ft² before waste; 12×12 in slabs run 1 per ft².',
    howToUse: 'Measure your patio length and width in feet. For an L-shaped patio or one with a cutout (around an AC unit, tree, etc.), use the L-shape toggle and enter the cutout dimensions. Pick the paver size from the dropdown — the calculator already knows the area per paver for each common format (4×8 brick = 4.5/ft², 6×9 standard = 2.67/ft², 12×12 slab = 1/ft², etc.).\n\nChoose the laying pattern: straight or running bond runs at 5% waste; 45° diagonal hits 15%; herringbone needs 20% because every perimeter piece requires a diagonal cut. The result is the total paver count rounded up. Order full pallets — most yards palletize at 100–144 ft² of standard pavers, so even if you only need 110 pavers, you\'ll buy a 200-paver pallet.',
    workedExample: 'For a 12 × 10 ft patio (120 ft²) using 6×9 standard pavers in a straight running bond:\n\nPaver area: (6 × 9) ÷ 144 = 0.375 ft²/paver. Pavers per ft²: 1 ÷ 0.375 = 2.67. Pavers needed: 120 × 2.67 × 1.05 (5% waste) = 336 pavers.\n\nAt $1.50–$3 per 6×9 paver, materials run $500–$1,000. Add 4 inches of crushed stone base (1.5 yd³ = ~$60) and 1 inch of paver sand (0.4 yd³ = ~$30). Total materials around $600–$1,100.\n\nSwitching to herringbone: 120 × 2.67 × 1.20 = 384 pavers — 48 more pavers, $72–$144 more in materials, and significantly more cutting and labor. The pattern is worth it on visible patios but adds real cost.\n\nPro install runs $15–$30/ft² installed for standard patterns ($1,800–$3,600 for this patio); herringbone adds $5–$10/ft². DIY is doable for a small patio in a weekend with two people.',
    commonMistakes: 'Skipping the base. Pavers laid directly on dirt heave with frost and shift with traffic within a year. 4 inches of crushed stone, compacted in 2-inch lifts, is non-negotiable.\n\nUnderordering for diagonal patterns. The 15% waste for 45° and 20% for herringbone are minimums. Add 2–3% if your patio has lots of curves or a circular border.\n\nForgetting edge restraint. Without a metal or plastic edge restraint around the perimeter, the pavers slowly migrate outward and the pattern fails. $30–$50 of edge restraint saves $1,000+ in repaving labor.\n\nUsing regular sand for joints. Polymeric sand (the kind that hardens with water) is the standard for paver joints. Regular sand washes out within a year and the joints fill with weeds.',
    rulesOfThumb: 'Paver math (per ft²): 4×8 = 4.5 · 6×6 = 4 · 6×9 = 2.67 · 8×8 = 2.25 · 12×12 = 1 · 12×24 = 0.5.\n\nWaste: 5% straight, 15% diagonal, 20% herringbone. Add 3% for circular or curved edges.\n\nBase: 4 inches of compacted ¾-inch crushed stone, then 1 inch of paver sand for screeding.\n\nEdge restraint: required around the perimeter or pavers walk outward over time.\n\nPolymeric joint sand (not regular sand) for finished joints — locks pavers in place and resists weeds.',
    note: 'Waste built in by pattern: straight 5%, 45° 15%, herringbone 20%. Order full pallets — most yards sell 100-144 ft² per pallet of standard pavers.',
    inputs: [
      { id: 'L', label: 'Patio length', unit: 'ft', default: 12, step: 0.5 },
      { id: 'W', label: 'Patio width', unit: 'ft', default: 10, step: 0.5 },
      ...SHAPE_INPUTS,
      { id: 'paver', label: 'Paver size', unit: '', type: 'select', default: '6x9',
        tooltip: 'Most home centers stock 4×8 brick pavers (4.5/ft²) and 6×9 standard pavers (2.67/ft²). 12×12 slabs are cheaper per ft² and faster to lay.',
        options: [
          ['4x8','4×8 in (brick, ~4.5/ft²)'],
          ['6x6','6×6 in (~4/ft²)'],
          ['6x9','6×9 in (standard, ~2.67/ft²)'],
          ['8x8','8×8 in (~2.25/ft²)'],
          ['12x12','12×12 in (slab, 1/ft²)'],
          ['12x24','12×24 in (large slab, 0.5/ft²)'],
          ['16x16','16×16 in (~0.56/ft²)']
        ] },
      { id: 'pattern', label: 'Laying pattern', unit: '', type: 'select', default: 'straight',
        tooltip: 'Straight bond cuts the least at the borders. 45° and herringbone need diagonal cuts at every perimeter piece, doubling waste.',
        options: [
          ['straight','Straight / running bond (5% waste)'],
          ['diagonal','45° diagonal (15% waste)'],
          ['herringbone','Herringbone (20% waste)']
        ] }
    ],
    calc: (data) => {
      const paver = data.paver as string;
      const pattern = data.pattern as string;
      const s = extractShape(data);
      const paverAreaFt2: Record<string, number> = {
        '4x8': (4*8)/144, '6x6': (6*6)/144, '6x9': (6*9)/144,
        '8x8': (8*8)/144, '12x12': 1, '12x24': 2, '16x16': (16*16)/144,
      };
      const pAreaFt2 = paverAreaFt2[paver];
      const wasteMap: Record<string, number> = { straight: 1.05, diagonal: 1.15, herringbone: 1.20 };
      const waste = wasteMap[pattern];
      const pavers = Math.ceil((s.net / pAreaFt2) * waste);
      const wastePct = ((waste - 1) * 100).toFixed(0);
      return {
        main: pavers.toLocaleString(), unit: 'PAVERS',
        detail: [
          ...shapeDetailRows(s).map(([k, v]): [string, string] => k === 'Floor area' ? ['Patio area', v] : [k, v]),
          ['Per ft² (no waste)', (1/pAreaFt2).toFixed(2)],
          ['Pattern waste', wastePct + '%'],
          ['Pavers (rounded up)', pavers.toLocaleString()]
        ]
      };
    }
  },
  {
    slug: 'paver-sand-calculator',
    name: 'Paver Base & Sand',
    category: 'home',
    desc: 'Base gravel + bedding sand',
    formula: 'yd³ = ft² × depth_in ÷ 324',
    title: 'PAVER BASE + SAND',
    metaTitle: 'Paver Base & Sand Calculator — Gravel and Bedding Yards | ProjectCalc',
    metaDesc: 'Paver base calculator. Enter patio area and project type — get the cubic yards of gravel base, sand bedding, and bags of polymeric joint sand.',
    seoIntro: 'This paver base calculator returns the gravel base, sand bedding, and polymeric joint sand needed for a paver patio, walkway, or driveway. The base layer is compacted crushed stone (commonly Class 5 or 3/4-inch minus) at 4 inches for foot-traffic patios, 6-8 inches for walkways with light vehicle use, and 8-12 inches for full driveways. The bedding layer is 1 inch of clean concrete sand or stone dust under the pavers themselves. Joint sand fills the gaps between pavers — polymeric joint sand sets up like mortar after wetting and resists weeds, ant colonization, and washout.',
    note: 'Standard recipes: patio = 4" base + 1" sand bed; driveway = 8-12" base + 1" sand bed. Always compact base in 2-inch lifts with a plate compactor.',
    inputs: [
      { id: 'area', label: 'Patio area', unit: 'ft²', default: 120, step: 10 },
      { id: 'use', label: 'Project type', unit: '', type: 'select', default: 'patio',
        tooltip: 'Driveways need a deeper base because vehicle weight cycles the substrate. Patios and walkways at 4 inches over compacted subgrade are stable for foot traffic.',
        options: [
          ['patio','Patio (4" base)'],
          ['walkway','Walkway (4" base)'],
          ['driveway','Driveway (8" base)'],
          ['heavy','Heavy driveway (12" base)']
        ] },
      { id: 'joint', label: 'Polymeric joint sand?', unit: '', type: 'select', default: 'yes',
        tooltip: 'Polymeric joint sand sets up after watering and prevents weeds. Plain mason sand is cheaper but washes out and lets weeds in.',
        options: [['yes','Yes — calculate bags'],['no','No — plain sand']] }
    ],
    calc: (data) => {
      const area = +data.area;
      const use = data.use as string;
      const joint = data.joint as string;
      const baseDepthIn: Record<string, number> = { patio: 4, walkway: 4, driveway: 8, heavy: 12 };
      const baseIn = baseDepthIn[use];
      const baseYd3 = (area * baseIn) / 324;
      const beddingYd3 = (area * 1) / 324;
      const polyBags = joint === 'yes' ? Math.ceil(area / 75) : 0;
      return {
        main: (baseYd3 + beddingYd3).toFixed(2), unit: 'YD³ TOTAL',
        detail: [
          ['Base depth', baseIn + ' in'],
          ['Gravel base', baseYd3.toFixed(2) + ' yd³'],
          ['Sand bedding (1")', beddingYd3.toFixed(2) + ' yd³'],
          ['Polymeric joint sand', polyBags > 0 ? polyBags + ' × 50 lb bags' : 'Not needed'],
          ['Compact in lifts of', '2 in']
        ]
      };
    }
  },
  {
    slug: 'retaining-wall-calculator',
    name: 'Retaining Wall',
    category: 'home',
    desc: 'Block count + base',
    formula: 'blocks = (L÷blkL) × (H÷blkH)',
    title: 'WALL BLOCK COUNT',
    metaTitle: 'Retaining Wall Calculator — Blocks, Caps, and Base Gravel | ProjectCalc',
    metaDesc: 'Retaining wall calculator. Enter wall length and height, pick a block size — get block count, cap count, and the cubic yards of base gravel.',
    seoIntro: 'This retaining wall calculator estimates the segmental concrete blocks, cap blocks, and cubic yards of base gravel needed for a small landscape retaining wall. Enter the wall length and finished height, pick a block size sold at your local home center, and the calculator returns full courses plus caps and the leveling pad gravel. Walls under 4 feet of exposed face are typically gravity walls a homeowner can build over a weekend; anything taller usually requires geogrid soil reinforcement and engineered design per local code.',
    howToUse: 'Enter the wall length and finished height in feet. Pick the block size sold at your local home center — small landscape blocks (12 × 4 × 8 in, ~25 lb each) build short ornamental walls; standard blocks (16 × 6 × 10 in, ~60 lb) are the common residential choice; large blocks (18 × 6 × 12 in, ~85 lb) build taller walls but each one needs a wheelbarrow.\n\nChoose whether to include cap blocks (caps finish the top course flat and are sold separately). The calculator returns total block count, blocks per course, course count, cap count, and base gravel needed for the leveling pad. Walls under 4 feet of exposed face are gravity walls a homeowner can DIY; over 4 feet typically requires geogrid soil reinforcement and engineered design.',
    workedExample: 'For a 20 ft long, 2 ft high wall using standard 16×6×10 blocks with caps:\n\nBlocks per course: ⌈(20 × 12) ÷ 16⌉ = 15 blocks. Courses: ⌈(2 × 12) ÷ 6⌉ = 4 courses. Total blocks: 15 × 4 = 60. Caps: 15.\n\nBase gravel: 21 ft long × 1 ft wide × 6 in deep = 10.5 ft³ = 0.39 yd³. Round up to 0.5 yd³ at the supply yard.\n\nAt $4–$8 per standard block, $4–$6 per cap, and $40 per yard of gravel: materials run $310–$590. Pro install adds $25–$50/ft of wall in labor (~$500–$1,000), making installed cost $800–$1,600 for this wall. DIY is doable but heavy work — plan for 2 people and a full weekend.\n\nFor a 4 ft tall wall: jumps to 8 courses, 120 blocks, and triggers the engineered-design recommendation. Below 4 ft is the DIY sweet spot.',
    commonMistakes: 'Skipping the leveling pad. A retaining wall built directly on dirt sinks unevenly and pushes outward within a year. 6 inches of compacted ¾-inch crushed stone, leveled with a long board and torpedo level, is non-negotiable.\n\nBuilding over 4 feet without engineering. Walls over 4 feet of exposed face hold significantly more soil pressure than gravity walls can resist. Geogrid (soil reinforcement strips that extend back into the slope) is required, plus an engineered design and usually a permit.\n\nForgetting drainage. Water building up behind the wall pushes hard. Install a 4-inch perforated drain pipe in 1–2 feet of crushed stone behind the first course, run to daylight or a French drain. Without this, walls bulge and topple.\n\nSetting the first course at grade. The bottom course should be buried 1 inch per foot of wall height (so a 3-ft wall has the first course buried 3 inches). This anchors the wall against forward sliding.',
    rulesOfThumb: 'Small landscape blocks (12×4×8): ~25 lb, builds walls up to 2–3 ft.\n\nStandard blocks (16×6×10): ~60 lb, builds gravity walls up to 4 ft.\n\nLarge blocks (18×6×12): ~85 lb, builds taller walls (still requires engineering above 4 ft).\n\nBase: 6 inches of compacted ¾-inch crushed stone, 12 inches wider than the block face.\n\nDrainage: 4-inch perforated drain pipe + crushed stone behind the wall, run to daylight.\n\nBury 1 inch per foot of wall height for stability.',
    note: 'Walls over 4 ft of exposed height typically require engineered design and a permit. This calculator handles unreinforced gravity walls only. Verify local code before building.',
    inputs: [
      { id: 'L', label: 'Wall length', unit: 'ft', default: 20, step: 1 },
      { id: 'H', label: 'Wall height', unit: 'ft', default: 2, step: 0.25,
        tooltip: 'Use the exposed (above-grade) finished height. Add 6 inches buried below grade for the first course; the calculator does not include buried courses.' },
      { id: 'block', label: 'Block size', unit: '', type: 'select', default: '12x4x8',
        tooltip: 'Sizes are length × height × depth in inches. Most home centers stock the small (12×4×8) and standard (16×6×10) sizes. Heavier blocks build taller stable walls but need a wheelbarrow per piece.',
        options: [
          ['12x4x8','12×4×8 in (small landscape, ~25 lb)'],
          ['16x6x10','16×6×10 in (standard, ~60 lb)'],
          ['18x6x12','18×6×12 in (large, ~85 lb)']
        ] },
      { id: 'caps', label: 'Include cap blocks?', unit: '', type: 'select', default: 'yes',
        tooltip: 'Caps finish the top course flat and are sold separately. Skip if your block has a flat top face or you plan to set planters on top.',
        options: [['yes','Yes'],['no','No']] }
    ],
    calc: (data) => {
      const L = +data.L, H = +data.H;
      const block = data.block as string;
      const caps = data.caps as string;
      const blockDims: Record<string, [number, number]> = {
        '12x4x8': [12, 4], '16x6x10': [16, 6], '18x6x12': [18, 6],
      };
      const [blkL, blkH] = blockDims[block];
      const blocksPerCourse = Math.ceil((L * 12) / blkL);
      const courses = Math.ceil((H * 12) / blkH);
      const totalBlocks = blocksPerCourse * courses;
      const capCount = caps === 'yes' ? blocksPerCourse : 0;
      const baseAreaFt2 = (L + 1) * 1;
      const baseYd3 = (baseAreaFt2 * 6) / 324;
      const heightWarn = H > 4 ? 'Engineer required (>4 ft)' : 'Gravity wall OK';
      return {
        main: totalBlocks.toLocaleString(), unit: 'BLOCKS',
        detail: [
          ['Blocks per course', blocksPerCourse],
          ['Courses', courses],
          ['Cap blocks', capCount],
          ['Base gravel (6" × 12" wide)', baseYd3.toFixed(2) + ' yd³'],
          ['Height check', heightWarn],
          ['Disclaimer', 'Estimate only — verify local code']
        ]
      };
    }
  },
  {
    slug: 'roof-pitch-calculator',
    name: 'Roof Pitch',
    category: 'home',
    desc: 'Pitch, angle, slope %',
    formula: 'pitch = (rise × 12) ÷ run',
    title: 'ROOF PITCH',
    metaTitle: 'Roof Pitch Calculator — Rise Over Run, Angle, and Slope | ProjectCalc',
    metaDesc: 'Free roof pitch calculator. Enter rise and run — get pitch in /12, angle in degrees, slope percentage, and the multiplier to convert plan area to roof area.',
    seoIntro: 'This roof pitch calculator converts a measured rise and run into the four ways pitch is expressed: the trade format (X in 12), the angle in degrees, the slope as a percentage, and the slope multiplier used to convert plan-view square footage into actual roof surface area for shingle ordering. Standard residential pitches run from 4/12 (low) through 12/12 (steep). Anything under 2/12 is considered low slope and needs a membrane roof, not asphalt shingles.',
    howToUse: 'Measure the rise (vertical distance) at exactly 12 inches of run (horizontal distance) for the trade-format X/12 pitch. Use a level: hold it horizontal against the rafter or roof surface, mark 12 inches from the level\'s tip, then measure the vertical gap at that mark.\n\nIf you measured rise over a different run distance (say 24 inches or 36 inches), enter both — the calculator normalizes the result to the 12-inch convention. The result includes the pitch in /12 format, the angle in degrees, slope as a percentage, and the slope multiplier used to convert plan-view square footage to actual roof surface area for shingle ordering.',
    workedExample: 'A roof rises 6 inches over 12 inches of horizontal run:\n\nPitch = (6 × 12) ÷ 12 = 6/12. Angle = arctan(6/12) = 26.57°. Slope % = 6 ÷ 12 × 100 = 50%. Slope multiplier = √(36 + 144) ÷ 12 = 1.118.\n\nFor a roof with a 1,200 ft² footprint (top-down view) and 6/12 pitch: actual roof surface = 1,200 × 1.118 = 1,341 ft². Shingle ordering uses the surface area, not the footprint.\n\nA 4/12 roof: angle 18.4°, slope 33%, multiplier 1.054. A 9/12 roof: angle 36.9°, slope 75%, multiplier 1.25. A 12/12 roof: angle 45°, slope 100%, multiplier 1.414.\n\nIf you measured 12 inches of rise over 36 inches of run (took a wider span for accuracy): pitch = (12 × 12) ÷ 36 = 4/12. Same roof, easier measurement.',
    commonMistakes: 'Mixing up rise and run. Rise is vertical; run is horizontal. A 6/12 pitch rises 6 inches vertically for every 12 inches you move horizontally — not the other way around.\n\nMeasuring along the slope instead of horizontally. The 12-inch run is the horizontal distance, not the slope distance. Measuring along the slope gives a steeper-looking pitch than reality.\n\nUsing degrees and pitch interchangeably. A 6/12 pitch is 26.57°, not 6°. The trade convention is /12; degrees are for engineering and architecture work.\n\nForgetting that low-slope roofs need different roofing. Below 2/12 pitch, asphalt shingles aren\'t allowed by code — water can back up under the tabs in driving rain. Use modified bitumen, EPDM, or TPO membrane instead.',
    rulesOfThumb: 'Pitch in /12 = (rise × 12) ÷ run.\n\nCommon pitches: 4/12 = 18.4° · 6/12 = 26.6° · 9/12 = 36.9° · 12/12 = 45°.\n\nSlope multipliers: 4/12 = 1.054 · 6/12 = 1.118 · 8/12 = 1.202 · 12/12 = 1.414.\n\nBelow 2/12 = low slope, requires membrane roofing.\n\nAbove 4/12 = standard residential, asphalt shingles and standard install methods work.\n\nAbove 9/12 = steep, requires toe-boards or scaffolding for safe install.',
    note: 'Measure rise at exactly 12 inches of run for the trade format. Pitches below 2/12 require membrane roofing. Below 4/12 needs ice and water shield in cold climates.',
    inputs: [
      { id: 'rise', label: 'Rise', unit: 'in', default: 6, step: 0.25,
        tooltip: 'Vertical distance the roof goes up over the chosen run distance. Measure with a level held flat against the rafter — the gap between the level tip and the roof at 12 in horizontal is your rise.' },
      { id: 'run', label: 'Run (horizontal)', unit: 'in', default: 12, step: 1,
        tooltip: 'Horizontal distance over which the rise was measured. The trade convention is exactly 12 inches — keep this at 12 unless you are converting a measurement taken over a different span.' }
    ],
    calc: (data) => {
      const rise = +data.rise;
      const run = +data.run;
      const pitchPer12 = (rise * 12) / run;
      const angleDeg = Math.atan(rise / run) * 180 / Math.PI;
      const percentage = (rise / run) * 100;
      const slopeMultiplier = Math.sqrt(1 + Math.pow(rise / run, 2));
      let materialNote = '';
      if (pitchPer12 < 2) materialNote = 'Low slope — membrane required';
      else if (pitchPer12 < 4) materialNote = 'Add ice & water shield (cold)';
      else if (pitchPer12 <= 12) materialNote = 'Standard asphalt OK';
      else materialNote = 'Steep slope — special install';
      return {
        main: pitchPer12.toFixed(1) + '/12',
        unit: 'PITCH',
        detail: [
          ['Angle', angleDeg.toFixed(1) + '°'],
          ['Slope %', percentage.toFixed(1) + '%'],
          ['Plan-to-roof multiplier', slopeMultiplier.toFixed(3)],
          ['Material guidance', materialNote]
        ]
      };
    }
  },
  {
    slug: 'roof-truss-calculator',
    name: 'Roof Trusses',
    category: 'construction',
    trade: 'Carpentry',
    desc: 'Truss count for a roof',
    formula: 'trusses = ceil(L × 12 ÷ spacing) + 1',
    title: 'TRUSS COUNT',
    metaTitle: 'Roof Truss Calculator — Count for 16 or 24 OC Spacing | ProjectCalc',
    metaDesc: 'Roof truss calculator. Enter building length and truss spacing — get the number of common trusses, gable end trusses, and total to order.',
    seoIntro: 'This roof truss calculator estimates the number of prefabricated roof trusses needed for a residential or light commercial building, based on building length and spacing. Standard residential spacing is 24 inches on center; 16-inch spacing is used for heavier snow loads, longer spans, or to allow lighter top-chord lumber. The calculator returns common trusses for the field, gable end trusses for the two end walls, and the total piece count to order. Engineered trusses must be sized by the supplier for your specific span, snow load, and roof loads.',
    note: 'Engineered design required — supplier sizes lumber and connections for span, snow, and dead loads. This calculator handles count only, not truss design or pricing.',
    inputs: [
      { id: 'len', label: 'Building length', unit: 'ft', default: 30, step: 1,
        tooltip: 'Length of the building running parallel to the ridge. The trusses span the building width (perpendicular to length) and are spaced along this length dimension.' },
      { id: 'spacing', label: 'Truss spacing', unit: '', type: 'select', default: '24',
        tooltip: '24 in OC is the residential standard. 16 in OC is used for heavy snow regions, longer spans (over 32 ft), or when lighter top-chord lumber is preferred.',
        options: [['16','16 in OC (heavy snow / long span)'],['24','24 in OC (standard residential)']] },
      { id: 'gable', label: 'Gable end trusses?', unit: '', type: 'select', default: 'yes',
        tooltip: 'Gable end trusses are special trusses with vertical studs at each cavity — they double as the gable wall framing. Skip if your end walls are conventionally framed.',
        options: [['yes','Yes (2 gable trusses)'],['no','No (all common trusses)']] }
    ],
    calc: (data) => {
      const len = +data.len;
      const spacing = +data.spacing;
      const gable = data.gable as string;
      const total = Math.ceil((len * 12) / spacing) + 1;
      const gableCount = gable === 'yes' ? 2 : 0;
      const commonCount = total - gableCount;
      return {
        main: total.toLocaleString(),
        unit: 'TRUSSES',
        detail: [
          ['Building length', len + ' ft'],
          ['Spacing', spacing + ' in OC'],
          ['Common trusses', commonCount],
          ['Gable end trusses', gableCount],
          ['Lead time', 'Order 4-8 weeks ahead'],
          ['Disclaimer', 'Engineered by supplier — verify span and load']
        ]
      };
    }
  },
  {
    slug: 'snow-load-calculator',
    name: 'Snow Load',
    category: 'construction',
    trade: 'Carpentry',
    desc: 'Roof snow load (ASCE 7)',
    formula: 'pf = 0.7 × Ce × Ct × I × pg',
    title: 'ROOF SNOW LOAD',
    metaTitle: 'Roof Snow Load Calculator — ASCE 7 Simplified | ProjectCalc',
    metaDesc: 'Snow load calculator using the ASCE 7 simplified formula. Enter ground snow, roof type, exposure, and pitch — get the design snow load in psf.',
    seoIntro: 'This snow load calculator returns the design snow load for a residential pitched roof using the ASCE 7 simplified formula: pf = 0.7 × Ce × Ct × I × pg. The four multipliers account for exposure (Ce), thermal effect (Ct, heated vs unheated structures), importance (I, set to 1.0 for residential Risk Category II), and ground snow load (pg, the regional value from your local building department or snowloadinfo.com). For sloped roofs above 30 degrees on warm slippery surfaces, the slope factor Cs reduces the load further. The result is the design load (psf) that rafters, trusses, and sheathing must support — used by structural engineers and code officials to verify framing.',
    note: 'Per ASCE 7-22 simplified method. Estimate only — local jurisdictions may require site-specific snow analysis. Always verify pg with your building department.',
    inputs: [
      { id: 'pg', label: 'Ground snow load (pg)', unit: 'psf', default: 30, step: 5,
        tooltip: 'Regional ground snow load in pounds per square foot. Pull from your local building department or snowloadinfo.com. Common values: Boston 35, Denver 25, Chicago 25, Buffalo 50, mountain regions 70-100+.' },
      { id: 'ct', label: 'Roof type', unit: '', type: 'select', default: '1.0',
        tooltip: 'Heated: house with insulated, conditioned space below the roof. Unheated: barn, detached garage, or open-air structure where roof temperature matches outside air.',
        options: [['1.0','Heated (house) — Ct = 1.0'],['1.2','Unheated (barn/shed) — Ct = 1.2']] },
      { id: 'ce', label: 'Exposure', unit: '', type: 'select', default: '1.0',
        tooltip: 'Partially exposed (default): typical suburban with some trees or nearby buildings. Fully exposed: open terrain, no obstructions. Sheltered: dense trees or taller buildings on all sides.',
        options: [['0.9','Fully exposed — Ce = 0.9'],['1.0','Partially exposed (typical) — Ce = 1.0'],['1.2','Sheltered — Ce = 1.2']] },
      { id: 'pitch', label: 'Roof pitch', unit: '/12', default: 6, step: 0.5,
        tooltip: 'Rise per 12 in run. Slope reduction kicks in above 7/12 (about 30 degrees) for asphalt shingle and warm slippery roofs.' }
    ],
    calc: (data) => {
      const pg = +data.pg;
      const ct = +data.ct;
      const ce = +data.ce;
      const pitch = +data.pitch;
      const I = 1.0;
      const pf = 0.7 * ce * ct * I * pg;
      const angleDeg = Math.atan(pitch / 12) * 180 / Math.PI;
      let cs = 1.0;
      if (angleDeg > 30) cs = Math.max(0, (70 - angleDeg) / 40);
      const ps = cs * pf;
      return {
        main: ps.toFixed(1),
        unit: 'PSF (SLOPED)',
        detail: [
          ['Flat roof load (pf)', pf.toFixed(1) + ' psf'],
          ['Roof angle', angleDeg.toFixed(1) + '°'],
          ['Slope factor (Cs)', cs.toFixed(2)],
          ['Sloped roof load (ps)', ps.toFixed(1) + ' psf'],
          ['Per ASCE 7-22', 'Residential, Risk Cat II'],
          ['Disclaimer', 'Estimate only — verify with code official']
        ]
      };
    }
  },
  {
    slug: 'floor-joist-span-calculator',
    name: 'Floor Joist Span',
    category: 'construction',
    trade: 'Carpentry',
    desc: 'Max joist span',
    formula: 'Per IRC R502.3 + AWC tables',
    title: 'MAX JOIST SPAN',
    metaTitle: 'Floor Joist Span Calculator — IRC R502.3 + AWC Tables | ProjectCalc',
    metaDesc: 'Floor joist span calculator. Pick lumber size, spacing, live load, and species — get the maximum allowable span per IRC R502.3 and AWC Maximum Spans tables.',
    seoIntro: 'This floor joist span calculator returns the maximum allowable simple span for residential floor joists per IRC R502.3.1 and the American Wood Council Maximum Spans tables. The calculator covers four common joist sizes (2×6 through 2×12), two standard spacings (16 and 24 in OC), the two residential live loads (30 psf for sleeping rooms, 40 psf for living areas), and three common framing species (Doug Fir-Larch, Spruce-Pine-Fir, Southern Pine) — all at #2 grade with L/360 deflection limit and 10 psf dead load. Spans assume a simple span between bearing walls, no cantilever, and no concentrated loads.',
    note: 'Estimate only — based on simplified AWC Maximum Spans for #2 grade lumber, L/360 deflection, 10 psf dead load. Verify with engineer or local code official before framing.',
    inputs: [
      { id: 'size', label: 'Joist size', unit: '', type: 'select', default: '2x10',
        options: [['2x6','2×6'],['2x8','2×8'],['2x10','2×10'],['2x12','2×12']] },
      { id: 'spacing', label: 'Spacing (OC)', unit: '', type: 'select', default: '16',
        tooltip: '16 in OC is the residential standard. 24 in OC reduces lumber cost about 30% but cuts span 10-15% and may need thicker sheathing.',
        options: [['16','16 in'],['24','24 in']] },
      { id: 'live', label: 'Live load', unit: '', type: 'select', default: '40',
        tooltip: '30 psf for sleeping rooms only. 40 psf for general living areas including kitchens, dining rooms, halls, and bathrooms.',
        options: [['30','30 psf (sleeping rooms)'],['40','40 psf (living areas)']] },
      { id: 'species', label: 'Lumber species', unit: '', type: 'select', default: 'DFL',
        tooltip: 'DFL = Douglas Fir-Larch (West Coast). SPF = Spruce-Pine-Fir (Canadian, common in Northeast and Midwest). SP = Southern Pine (Southeast).',
        options: [
          ['DFL','Doug Fir-Larch #2'],
          ['SPF','Spruce-Pine-Fir #2'],
          ['SP','Southern Pine #2']
        ] }
    ],
    calc: (data) => {
      const size = data.size as string;
      const spacing = +data.spacing;
      const live = +data.live;
      const species = data.species as string;
      const SPANS: Record<string, Record<string, Record<number, Record<number, number>>>> = {
        DFL: {
          '2x6':  { 16: { 30: 10.75, 40: 9.75  }, 24: { 30: 9.33,  40: 8.5   } },
          '2x8':  { 16: { 30: 14.17, 40: 12.83 }, 24: { 30: 12.33, 40: 11.25 } },
          '2x10': { 16: { 30: 18.0,  40: 16.25 }, 24: { 30: 15.75, 40: 14.25 } },
          '2x12': { 16: { 30: 21.75, 40: 19.83 }, 24: { 30: 19.08, 40: 17.25 } },
        },
        SPF: {
          '2x6':  { 16: { 30: 10.25, 40: 9.33  }, 24: { 30: 8.92,  40: 8.0   } },
          '2x8':  { 16: { 30: 13.5,  40: 12.25 }, 24: { 30: 11.75, 40: 10.67 } },
          '2x10': { 16: { 30: 17.17, 40: 15.58 }, 24: { 30: 15.0,  40: 13.58 } },
          '2x12': { 16: { 30: 20.83, 40: 18.92 }, 24: { 30: 18.17, 40: 16.42 } },
        },
        SP: {
          '2x6':  { 16: { 30: 10.92, 40: 9.92  }, 24: { 30: 9.5,   40: 8.67  } },
          '2x8':  { 16: { 30: 14.42, 40: 13.08 }, 24: { 30: 12.58, 40: 11.42 } },
          '2x10': { 16: { 30: 18.33, 40: 16.5  }, 24: { 30: 16.0,  40: 14.42 } },
          '2x12': { 16: { 30: 22.0,  40: 20.0  }, 24: { 30: 19.42, 40: 17.5  } },
        },
      };
      const spanFt = SPANS[species]?.[size]?.[spacing]?.[live] ?? 0;
      const ft = Math.floor(spanFt);
      const inches = Math.round((spanFt - ft) * 12);
      const spanLabel = `${ft}'-${inches}"`;
      return {
        main: spanLabel,
        unit: 'MAX SPAN',
        detail: [
          ['Joist', size],
          ['Spacing', spacing + ' in OC'],
          ['Live + dead load', live + ' + 10 psf'],
          ['Species/grade', species + ' #2'],
          ['Deflection limit', 'L/360'],
          ['Code reference', 'IRC R502.3.1 / AWC'],
          ['Disclaimer', 'Estimate only — verify with engineer']
        ]
      };
    }
  },
  {
    slug: 'rebar-calculator',
    name: 'Rebar',
    category: 'construction',
    trade: 'Masonry & Siding',
    desc: 'Rebar grid for slabs',
    formula: 'linft = (long_bars × L) + (short_bars × W)',
    title: 'REBAR ORDER',
    metaTitle: 'Rebar Calculator — Linear Feet and Sticks for a Slab | ProjectCalc',
    metaDesc: 'Rebar calculator for concrete slabs. Enter slab dimensions, spacing, and bar size — get total linear feet, weight, and 20 ft sticks to order.',
    seoIntro: 'This rebar calculator estimates the rebar grid for a residential concrete slab — driveway, patio, garage floor, or shed pad. Enter the slab length, width, the bar spacing on center, and the bar size (#3, #4, or #5 are common for residential slabs). The calculator returns the bar count in each direction, total linear feet, total weight, and the number of 20 ft sticks to order from the supply yard. Standard residential slab spacing is 18 in OC for patios and garages, 12-16 in OC for driveways carrying vehicle weight.',
    note: 'Sized for unreinforced and lightly reinforced slabs only. Slabs supporting columns, walls, or vehicles over 5,000 lb need engineered design. Verify cover (3 in from earth, 1.5 in from finished surface) per ACI 318.',
    inputs: [
      { id: 'L', label: 'Slab length', unit: 'ft', default: 20, step: 1 },
      { id: 'W', label: 'Slab width', unit: 'ft', default: 12, step: 1 },
      { id: 'spacing', label: 'Bar spacing (OC)', unit: '', type: 'select', default: '18',
        tooltip: '12 in OC for driveways and heavy-load slabs. 18 in OC for patios and garage floors. 24 in OC for sidewalks and light-duty slabs.',
        options: [['12','12 in (driveway)'],['16','16 in'],['18','18 in (patio)'],['24','24 in (sidewalk)']] },
      { id: 'size', label: 'Rebar size', unit: '', type: 'select', default: '#4',
        tooltip: '#3 (3/8 in) is light-duty for sidewalks. #4 (1/2 in) is the residential standard for slabs and footings. #5 (5/8 in) for driveways and heavier loads.',
        options: [['#3','#3 (3/8 in, ~0.38 lb/ft)'],['#4','#4 (1/2 in, ~0.67 lb/ft)'],['#5','#5 (5/8 in, ~1.04 lb/ft)']] }
    ],
    calc: (data) => {
      const L = +data.L;
      const W = +data.W;
      const spacing = +data.spacing;
      const size = data.size as string;
      const spacingFt = spacing / 12;
      const barsLong = Math.ceil(W / spacingFt) + 1;
      const barsShort = Math.ceil(L / spacingFt) + 1;
      const linftLong = barsLong * L;
      const linftShort = barsShort * W;
      const totalLinft = linftLong + linftShort;
      const sticks20 = Math.ceil(totalLinft / 20);
      const weightPerFt: Record<string, number> = { '#3': 0.376, '#4': 0.668, '#5': 1.043 };
      const totalWeight = totalLinft * weightPerFt[size];
      return {
        main: sticks20.toLocaleString(),
        unit: 'STICKS (20 ft)',
        detail: [
          ['Slab area', (L*W).toFixed(0) + ' ft²'],
          ['Bars long direction', barsLong + ' × ' + L + ' ft'],
          ['Bars short direction', barsShort + ' × ' + W + ' ft'],
          ['Total linear feet', totalLinft.toFixed(0) + ' ft'],
          ['Total weight', totalWeight.toFixed(0) + ' lb of ' + size],
          ['20 ft sticks', sticks20]
        ]
      };
    }
  },
  {
    slug: 'ac-tonnage-calculator',
    name: 'AC Tonnage',
    category: 'construction',
    trade: 'HVAC',
    desc: 'AC size in tons',
    formula: 'tons = (ft² × 20 × adj) ÷ 12,000',
    title: 'AC TONNAGE',
    metaTitle: 'AC Tonnage Calculator — What Size AC Do I Need | ProjectCalc',
    metaDesc: 'AC tonnage calculator. Enter room size, sun exposure, and occupants — get the cooling tons and recommended residential AC unit size.',
    seoIntro: 'This AC tonnage calculator returns the cooling capacity needed for a room or whole house, expressed in tons (the unit HVAC contractors quote and that residential AC equipment is rated in). 1 ton = 12,000 BTU/hr of cooling. The math is the standard residential rule of thumb — 20 BTU per square foot of conditioned area, adjusted for sun exposure and occupant count, divided by 12,000 to convert to tons. For a tighter spec on equipment over 3 tons or houses with unusual envelope construction, an HVAC contractor should run a full Manual J load calculation.',
    note: 'Rule of thumb. 1 ton = 12,000 BTU/hr. Add 600 BTU/person above 2. For tight specs use Manual J.',
    inputs: [
      { id: 'sqft', label: 'Conditioned area', unit: 'ft²', default: 1500, step: 50 },
      { id: 'sun', label: 'Sun exposure', unit: '', default: 'normal', type: 'select',
        options: [['shaded','Heavily shaded (-10%)'],['normal','Normal'],['sunny','Very sunny (+10%)']] },
      { id: 'occ', label: 'Occupants (regular)', unit: 'ppl', default: 4, step: 1 }
    ],
    calc: (data) => {
      const sqft = +data.sqft, sun = data.sun as string, occ = +data.occ;
      let base = sqft * 20;
      if (sun === 'shaded') base *= 0.9;
      if (sun === 'sunny') base *= 1.1;
      const extra = Math.max(0, occ - 2) * 600;
      const total = base + extra;
      const tons = total / 12000;
      const unit = tons <= 1.0 ? '1.0 ton' : tons <= 1.5 ? '1.5 ton' : tons <= 2.0 ? '2.0 ton' : tons <= 2.5 ? '2.5 ton' : tons <= 3.0 ? '3.0 ton' : tons <= 3.5 ? '3.5 ton' : tons <= 4.0 ? '4.0 ton' : tons <= 4.5 ? '4.5 ton' : tons <= 5.0 ? '5.0 ton' : '5.0+ ton (consider zoning)';
      return {
        main: tons.toFixed(1),
        unit: 'TONS',
        detail: [
          ['Total cooling load', Math.round(total).toLocaleString() + ' BTU/hr'],
          ['Base load (20 BTU/ft²)', Math.round(base).toLocaleString()],
          ['Occupant load', extra.toLocaleString()],
          ['Suggested unit', unit],
          ['Standard sizes', '1.5 / 2.0 / 2.5 / 3.0 / 3.5 / 4.0 / 5.0 ton']
        ]
      };
    }
  },
  {
    slug: 'furnace-size-calculator',
    name: 'Furnace Size',
    category: 'construction',
    trade: 'HVAC',
    desc: 'Furnace BTU by climate',
    formula: 'BTU/hr = ft² × climate_factor',
    title: 'FURNACE SIZE',
    metaTitle: 'Furnace Size Calculator — BTU by Climate Zone | ProjectCalc',
    metaDesc: 'Furnace size calculator. Enter house square footage and climate zone — get the heating BTU and recommended furnace input size accounting for AFUE.',
    seoIntro: 'This furnace size calculator returns the heating output a residential furnace needs for a given conditioned area and climate zone. The rule of thumb runs 25-60 BTU per square foot of heating output depending on climate severity, building tightness, and insulation level. The calculator returns both heating output BTU/hr (what the equipment delivers to the house) and input BTU/hr (the rated nameplate size, accounting for typical 80-95% AFUE efficiency). For tight specs in cold climates or large houses, an HVAC contractor should run an ACCA Manual J load calculation against the actual building envelope.',
    note: 'Rule of thumb based on climate zone. AFUE 80% common for older furnaces, 90-96% for high-efficiency condensing models. Input BTU = output BTU ÷ AFUE.',
    inputs: [
      { id: 'sqft', label: 'Conditioned area', unit: 'ft²', default: 2000, step: 50 },
      { id: 'climate', label: 'Climate zone', unit: '', type: 'select', default: '40',
        tooltip: 'Mild: Atlanta, Dallas, LA. Moderate: DC, St Louis, San Francisco. Cool: Chicago, Boston, Denver. Cold: Minneapolis, Buffalo. Very cold: Anchorage, Burlington VT, Fargo.',
        options: [
          ['30','Mild (zones 1-3) — 30 BTU/ft²'],
          ['35','Mild-moderate (zone 3-4) — 35 BTU/ft²'],
          ['40','Moderate (zone 4) — 40 BTU/ft²'],
          ['45','Cool (zone 5) — 45 BTU/ft²'],
          ['50','Cold (zone 6) — 50 BTU/ft²'],
          ['60','Very cold (zone 7-8) — 60 BTU/ft²']
        ] },
      { id: 'afue', label: 'Furnace efficiency (AFUE)', unit: '', type: 'select', default: '0.95',
        tooltip: 'AFUE is the percentage of fuel energy that becomes heat in the house. 80% standard non-condensing. 90-95% high-efficiency condensing. 96-98% premium condensing.',
        options: [
          ['0.80','80% (standard non-condensing)'],
          ['0.90','90% (entry condensing)'],
          ['0.95','95% (high-efficiency condensing)'],
          ['0.98','98% (premium condensing)']
        ] }
    ],
    calc: (data) => {
      const sqft = +data.sqft;
      const climate = +data.climate;
      const afue = +data.afue;
      const outputBtu = sqft * climate;
      const inputBtu = outputBtu / afue;
      const stdSizes = [40000, 60000, 80000, 100000, 120000, 140000];
      const recommendedInput = stdSizes.find(s => s >= inputBtu) || (inputBtu > 140000 ? Math.ceil(inputBtu / 20000) * 20000 : 140000);
      return {
        main: outputBtu.toLocaleString(),
        unit: 'BTU/HR HEATING',
        detail: [
          ['Conditioned area', sqft.toLocaleString() + ' ft²'],
          ['Climate factor', climate + ' BTU/ft²'],
          ['Output BTU (delivered)', outputBtu.toLocaleString() + ' BTU/hr'],
          ['Input BTU (nameplate)', Math.round(inputBtu).toLocaleString() + ' BTU/hr at ' + (afue * 100).toFixed(0) + '% AFUE'],
          ['Suggested furnace size', recommendedInput.toLocaleString() + ' BTU/hr input'],
          ['Disclaimer', 'Estimate only — verify with Manual J for tight specs']
        ]
      };
    }
  },
  {
    slug: 'boiler-size-calculator',
    name: 'Boiler Size',
    category: 'construction',
    trade: 'HVAC',
    desc: 'Boiler BTU by climate',
    formula: 'BTU/hr = ft² × climate_factor',
    title: 'BOILER SIZE',
    metaTitle: 'Boiler Size Calculator — Hydronic Heating BTU | ProjectCalc',
    metaDesc: 'Boiler size calculator. Enter house square footage and climate zone — get the heating output and recommended boiler size for hydronic radiator or radiant systems.',
    seoIntro: 'This boiler size calculator returns the heating output needed for a residential hydronic system, whether the distribution is radiators, baseboard, or radiant floor. The rule of thumb is the same as forced-air furnace sizing — 25-60 BTU/ft² depending on climate zone — but boilers are quoted in input BTU at the gas burner and the typical efficiency profile (AFUE) ranges from 82% non-condensing to 95% modulating-condensing. For radiant floor systems specifically, design heat loss is typically lower than radiator systems because the entire floor is the emitter, but the boiler sizing follows the same envelope load.',
    note: 'Rule of thumb based on climate zone. Cast-iron boilers commonly 82% AFUE; modulating condensing boilers 90-95%. Radiant systems sometimes specced 10-15% lower than radiator systems.',
    inputs: [
      { id: 'sqft', label: 'Conditioned area', unit: 'ft²', default: 2000, step: 50 },
      { id: 'climate', label: 'Climate zone', unit: '', type: 'select', default: '45',
        tooltip: 'Boilers are most common in cold climates. Mild: Atlanta. Moderate: DC. Cool: Chicago, Boston. Cold: Minneapolis. Very cold: Burlington VT, Fargo.',
        options: [
          ['30','Mild — 30 BTU/ft²'],
          ['35','Mild-moderate — 35 BTU/ft²'],
          ['40','Moderate — 40 BTU/ft²'],
          ['45','Cool — 45 BTU/ft²'],
          ['50','Cold — 50 BTU/ft²'],
          ['60','Very cold — 60 BTU/ft²']
        ] },
      { id: 'system', label: 'Distribution', unit: '', type: 'select', default: 'radiator',
        tooltip: 'Radiator/baseboard systems use the standard rule. Radiant floor systems can be sized 10-15% lower because the entire floor radiates heat at lower water temperatures.',
        options: [
          ['radiator','Radiators or baseboard (full load)'],
          ['radiant','Radiant floor (-10%)']
        ] },
      { id: 'afue', label: 'Boiler efficiency (AFUE)', unit: '', type: 'select', default: '0.95',
        tooltip: '82% standard cast-iron. 87% mid-efficiency. 90-95% modulating condensing.',
        options: [
          ['0.82','82% (cast-iron, atmospheric vent)'],
          ['0.87','87% (mid-efficiency)'],
          ['0.95','95% (modulating condensing)']
        ] }
    ],
    calc: (data) => {
      const sqft = +data.sqft;
      const climate = +data.climate;
      const system = data.system as string;
      const afue = +data.afue;
      let outputBtu = sqft * climate;
      if (system === 'radiant') outputBtu *= 0.9;
      const inputBtu = outputBtu / afue;
      const stdSizes = [60000, 80000, 100000, 120000, 140000, 175000];
      const recommendedInput = stdSizes.find(s => s >= inputBtu) || 200000;
      return {
        main: outputBtu.toLocaleString(undefined, { maximumFractionDigits: 0 }),
        unit: 'BTU/HR HEATING',
        detail: [
          ['Conditioned area', sqft.toLocaleString() + ' ft²'],
          ['Climate factor', climate + ' BTU/ft²'],
          ['System adjustment', system === 'radiant' ? '-10% (radiant floor)' : 'None (radiators)'],
          ['Output BTU', Math.round(outputBtu).toLocaleString() + ' BTU/hr'],
          ['Input BTU (nameplate)', Math.round(inputBtu).toLocaleString() + ' BTU/hr at ' + (afue * 100).toFixed(0) + '% AFUE'],
          ['Suggested boiler size', recommendedInput.toLocaleString() + ' BTU/hr input'],
          ['Disclaimer', 'Estimate only — verify with Manual J']
        ]
      };
    }
  },
  {
    slug: 'mini-split-sizing-calculator',
    name: 'Mini-Split',
    category: 'construction',
    trade: 'HVAC',
    desc: 'BTU per indoor head',
    formula: 'BTU/hr = ft² × climate_factor',
    title: 'MINI-SPLIT SIZE',
    metaTitle: 'Mini-Split Sizing Calculator — BTU per Zone | ProjectCalc',
    metaDesc: 'Mini-split sizing calculator. Enter zone area, climate, and use — get the BTU/hr per indoor head and the standard 9k/12k/18k/24k size to order.',
    seoIntro: 'This mini-split sizing calculator returns the cooling and heating capacity needed per indoor head for a ductless system. Mini-splits are sized per zone (one indoor head per room or open area), and standard residential head sizes are 9,000, 12,000, 18,000, 24,000, and 36,000 BTU/hr. The cooling load runs about 25 BTU/ft² for a single zone (slightly higher than central AC because zones do not share air handling), and heating load matches the climate-zone rule used for furnaces. For open-concept spaces over 600 ft², a single high-capacity head is usually less efficient than two smaller heads on a multi-zone system.',
    note: 'Sized per indoor head. Standard sizes: 9k, 12k, 18k, 24k, 36k BTU/hr. Multi-zone systems share an outdoor unit but each indoor head is sized to its room.',
    inputs: [
      { id: 'sqft', label: 'Zone (room) area', unit: 'ft²', default: 350, step: 25 },
      { id: 'climate', label: 'Climate zone', unit: '', type: 'select', default: '45',
        tooltip: 'Affects heating load primarily. Mini-splits with hyper-heat work down to -15°F outdoor in cold climates, but capacity drops below 5°F.',
        options: [
          ['30','Mild — 30 BTU/ft² heating'],
          ['35','Mild-moderate — 35 BTU/ft²'],
          ['40','Moderate — 40 BTU/ft²'],
          ['45','Cool — 45 BTU/ft²'],
          ['50','Cold — 50 BTU/ft²'],
          ['60','Very cold — 60 BTU/ft²']
        ] },
      { id: 'sun', label: 'Sun exposure', unit: '', type: 'select', default: 'normal',
        tooltip: 'Affects cooling load. Heavy sun on west or south walls bumps the load 10%.',
        options: [['shaded','Heavily shaded (-10%)'],['normal','Normal'],['sunny','Very sunny (+10%)']] }
    ],
    calc: (data) => {
      const sqft = +data.sqft;
      const climate = +data.climate;
      const sun = data.sun as string;
      let cooling = sqft * 25;
      if (sun === 'shaded') cooling *= 0.9;
      if (sun === 'sunny') cooling *= 1.1;
      const heating = sqft * climate;
      const designLoad = Math.max(cooling, heating);
      const stdSizes = [9000, 12000, 18000, 24000, 36000, 48000];
      const recommendedSize = stdSizes.find(s => s >= designLoad) || 48000;
      const oversize = designLoad > 36000;
      const sizeLabel = `${(recommendedSize / 1000).toFixed(0)}k BTU/hr` + (oversize ? ' (consider 2 heads)' : '');
      return {
        main: sizeLabel,
        unit: 'INDOOR HEAD',
        detail: [
          ['Zone area', sqft.toLocaleString() + ' ft²'],
          ['Cooling load', Math.round(cooling).toLocaleString() + ' BTU/hr'],
          ['Heating load', heating.toLocaleString() + ' BTU/hr'],
          ['Design load (max)', Math.round(designLoad).toLocaleString() + ' BTU/hr'],
          ['Suggested head size', sizeLabel],
          ['Standard sizes', '9k / 12k / 18k / 24k / 36k']
        ]
      };
    }
  },
  {
    slug: 'water-heater-size-calculator',
    name: 'Water Heater Size',
    category: 'construction',
    trade: 'Plumbing',
    desc: 'Tank gallons or tankless GPM',
    formula: 'Per DOE FHR + GPM tables',
    title: 'WATER HEATER SIZE',
    metaTitle: 'Water Heater Sizing Calculator — Tank Gallons or Tankless GPM | ProjectCalc',
    metaDesc: 'Water heater sizing calculator. Pick tank or tankless and household size — get the recommended gallons or GPM rating to match your hot water demand.',
    seoIntro: 'This water heater sizing calculator returns the recommended residential water heater capacity for either a tank-style heater (rated in gallons) or a tankless heater (rated in GPM at a 70°F temperature rise). The math follows DOE Energy Saver guidelines based on household size, the strongest predictor of peak-hour hot water demand. For tank heaters, the recommendation accounts for First Hour Rating (FHR) — the gallons of hot water available in the busiest hour of the day. For tankless, the GPM target assumes one shower plus a bathroom sink running simultaneously at the household&apos;s typical peak.',
    howToUse: 'Enter the number of people regularly using the home\'s hot water and pick tank or tankless. Tank heaters store hot water at temperature and are sized in gallons; tankless heaters heat on demand and are sized in GPM (gallons per minute) at a 70°F temperature rise.\n\nThe calculator returns both recommendations so you can compare. Tank sizing follows DOE Energy Saver guidelines based on First Hour Rating (FHR) — the gallons of hot water available in the home\'s busiest hour. Tankless GPM assumes one shower (2.5 GPM) plus a bathroom sink running simultaneously at peak. For very cold inlet water (under 50°F, common in northern winters), bump the tankless GPM recommendation up 20–30%.',
    workedExample: 'A 4-person household:\n\nTank recommendation: 60 gallons. Tankless: 8 GPM at 70°F rise.\n\nCommon tank sizes: 30, 40, 50, 65, 75, 80 gal. The 60-gal recommendation rounds to 65-gal tank. Cost: ~$600–$1,200 installed for electric, $900–$1,800 for gas.\n\nCommon tankless sizes: 5.5, 6.5, 8.5, 9.5, 11 GPM. The 8 GPM recommendation rounds to 8.5 GPM. Cost: ~$1,500–$3,500 installed for gas tankless, $2,000–$4,500 for electric.\n\nTankless saves 20–30% on energy if hot water demand is moderate (single shower at a time, no overlapping appliance use). For high-simultaneous-use households (teenagers, multiple showers running, dishwasher + washing machine + shower), tank often wins on simplicity and avoiding "drop-in cold water" complaints when demand exceeds GPM.',
    commonMistakes: 'Sizing tankless too small. A 6.5 GPM tankless can run a single shower (2.5 GPM) plus a sink (1 GPM) but bogs down on a shower + dishwasher (2.5 + 1.5 = 4) plus a sink. Underspecified tankless is the #1 install regret.\n\nForgetting cold-climate inlet temperatures. Northern winter inlet water is 40–45°F; sun-belt inlet is 65–70°F. Tankless GPM ratings assume 70°F rise; cold inlet drops effective GPM significantly.\n\nBuying tank for "hot water security" when the home is small. A 1–2 person household with low simultaneous use does great on tankless — and the energy savings pay back the price difference in 8–12 years.\n\nSkipping the recirculation question. Tank heaters with built-in recirculation give instant hot water at distant fixtures. Tankless can do recirculation but needs a dedicated pump and wiring. Important for large homes with the heater far from the master bath.',
    rulesOfThumb: 'Tank sizing by household: 1–2 people = 40 gal; 3 = 50 gal; 4 = 60 gal; 5 = 75 gal; 6+ = 80 gal.\n\nTankless GPM by household: 1–2 = 5; 3 = 6; 4 = 8; 5 = 9; 6+ = 11 (at 70°F rise).\n\nCold inlet (<50°F): bump tankless GPM 20–30%.\n\nTank life: 8–12 years standard; 12–15 years with annual flushing.\n\nTankless life: 15–20 years with descaling every 1–2 years in hard-water areas.\n\nEnergy savings: tankless saves 20–30% over tank if usage is moderate; less savings or even break-even for very high-use households.',
    note: 'Tank sizing per DOE Energy Saver FHR guidelines. Tankless GPM assumes 70°F temperature rise (typical for cold-climate winter inlet). Adjust GPM up 20-30% for inlet temps below 50°F.',
    inputs: [
      { id: 'people', label: 'People in household', unit: '', default: 4, step: 1 },
      { id: 'type', label: 'Heater type', unit: '', type: 'select', default: 'tank',
        tooltip: 'Tank: stores hot water at temp, sized in gallons. Tankless: heats water on demand, sized in GPM. Tankless saves 20-30% on energy if usage is moderate but costs more upfront.',
        options: [['tank','Tank (storage)'],['tankless','Tankless (on-demand)']] }
    ],
    calc: (data) => {
      const people = +data.people;
      const type = data.type as string;
      let recTank: number;
      if (people <= 2) recTank = 40;
      else if (people <= 3) recTank = 50;
      else if (people <= 4) recTank = 60;
      else if (people <= 5) recTank = 75;
      else recTank = 80;
      let recGPM: number;
      if (people <= 2) recGPM = 5;
      else if (people <= 3) recGPM = 6;
      else if (people <= 4) recGPM = 8;
      else if (people <= 5) recGPM = 9;
      else recGPM = 11;
      return {
        main: type === 'tank' ? recTank.toString() : recGPM.toString(),
        unit: type === 'tank' ? 'GAL TANK' : 'GPM TANKLESS',
        detail: [
          ['Household size', people + ' people'],
          ['Tank recommendation', recTank + ' gal'],
          ['Tankless recommendation', recGPM + ' GPM at 70°F rise'],
          ['Tank common sizes', '30 / 40 / 50 / 65 / 75 / 80 gal'],
          ['Tankless common sizes', '5.5 / 6.5 / 8.5 / 9.5 / 11 GPM'],
          ['Note', 'Cold inlet (<50°F) reduces tankless GPM 20-30%']
        ]
      };
    }
  },
  {
    slug: 'topsoil-calculator',
    name: 'Topsoil',
    category: 'home',
    desc: 'Yards or bags for fill',
    formula: 'yd³ = ft² × depth_in ÷ 324',
    title: 'TOPSOIL VOLUME',
    metaTitle: 'Topsoil Calculator — Yards and Bags for Fill | ProjectCalc',
    metaDesc: 'Topsoil calculator. Enter area and depth — get cubic yards, cubic feet, and 40 lb bag count for raised beds, lawn fill, or grading.',
    seoIntro: 'This topsoil calculator returns the cubic yards, cubic feet, and bag count needed for filling raised garden beds, leveling low spots in a yard, building up the soil profile for a lawn, or topdressing existing turf. Topsoil is sold both in bulk by the cubic yard at landscape supply yards (typically $25-50 delivered per yard depending on quality and region) and in 40 lb bags at home centers (~0.75 ft³ per bag, 5-8 dollars each). For any project over 1 cubic yard (about 36 bags), bulk delivery is dramatically cheaper than bagged.',
    howToUse: 'Measure the area length and width in feet — for irregular beds or yards, use the L-shape toggle. Set the fill depth in inches: 8–12 inches for raised vegetable beds; 6 inches minimum for new lawn over a graded base; 0.25–0.5 inches per pass when topdressing existing turf. The calculator returns cubic yards (the bulk-delivery unit), cubic feet (handy for mixing math), and the equivalent count of standard 0.75 ft³ bags.\n\nFor under 1 cubic yard total, bagged topsoil from Home Depot or Lowe\'s makes sense — easier to handle, no delivery scheduling. Over 1 yd³ (about 36 bags), bulk delivery is dramatically cheaper. A typical landscape supplier delivers 1–10 cubic yards for $25–$50 per yard plus a $50–$100 delivery fee.',
    workedExample: 'For an 8 × 4 ft raised vegetable bed at 12 inches deep:\n\nVolume = 8 × 4 × (12 ÷ 12) = 32 ft³. Cubic yards: 32 ÷ 27 = 1.19 yd³. Bags: 32 ÷ 0.75 = 43 bags.\n\nAt ~$5 per 0.75 ft³ bag, bagged topsoil costs $215. Bulk delivery of 1.5 yd³ at $40/yd + $75 delivery = $135 — saves $80 and one trip with a wheelbarrow from the curb to the bed.\n\nFor lawn fill on a 50 × 30 ft yard at 4 inches: 1,500 × (4/12) = 500 ft³ = 18.5 yd³. Definitely bulk territory — at $40/yd² delivered in two truckloads, ~$800.\n\nFor topdressing a 1,000 ft² lawn at 0.25 inch per pass: 1,000 × (0.25/12) = 20.8 ft³ = 0.77 yd³ per pass. One bulk delivery ($75) covers two passes, with leftover for repairs.',
    commonMistakes: 'Not screening the topsoil for trash. Cheap "topsoil" from low-cost suppliers often contains rocks, glass, plant debris, even old construction waste. Pay slightly more for screened topsoil for raised beds and lawn install.\n\nFilling raised beds with pure topsoil. Pure topsoil compacts hard within a season. Mix 60% topsoil + 30% compost + 10% perlite or coarse sand for raised beds — this gives lasting structure plus drainage.\n\nSkipping a soil test. A $20 soil test from your county extension office tells you pH, NPK levels, and major issues. Worth doing before dumping yards of fill that may be wrong for your plants.\n\nUnderestimating settling. Fresh topsoil settles 15–25% in the first year as organic matter compresses and rain rinses out air pockets. Order 15–20% extra if final grade matters (around foundations, walkways).',
    rulesOfThumb: 'Topsoil weighs 1,800–2,400 lb per cubic yard depending on moisture and organic content.\n\nBagged: ~0.75 ft³ per standard bag. 36 bags = 1 cubic yard.\n\nBulk delivery breakeven: ~1 cubic yard. Below: bagged. Above: bulk.\n\nRaised bed depth: 8–12 inches for vegetables, 6 inches minimum for shallow-rooted ornamentals.\n\nLawn fill: 4–6 inches over a graded base.\n\nTopdressing: 0.25–0.5 inches per pass, no more.\n\nA pickup truck holds about 1.5–2 yd³ heaped. Bulk yards typically deliver in 1, 2, 5, or 10-yard loads.',
    note: 'A cubic yard of topsoil weighs about 1,800-2,400 lb depending on moisture and organic content. Bagged topsoil is convenient for under 1 yd³; over that, order bulk delivered.',
    inputs: [
      { id: 'L', label: 'Area length', unit: 'ft', default: 8, step: 0.5 },
      { id: 'W', label: 'Area width', unit: 'ft', default: 4, step: 0.5 },
      ...SHAPE_INPUTS,
      { id: 'depth', label: 'Fill depth', unit: 'in', default: 6, step: 0.5,
        tooltip: 'Raised beds: 8-12 in for vegetables, 6 in minimum for lawns over a graded base. Topdressing existing lawn: 0.25-0.5 in per pass.' }
    ],
    calc: (data) => {
      const depth = +data.depth;
      const s = extractShape(data);
      const cubicFt = s.net * (depth / 12);
      const cubicYd = cubicFt / 27;
      const bags = Math.ceil(cubicFt / 0.75);
      const weightLbs = cubicFt * 75;
      return {
        main: cubicYd.toFixed(2),
        unit: 'CUBIC YARDS',
        detail: [
          ...shapeDetailRows(s).map(([k, v]): [string, string] => k === 'Floor area' ? ['Area', v] : [k, v]),
          ['Depth', depth + ' in'],
          ['Cubic feet', cubicFt.toFixed(1) + ' ft³'],
          ['40 lb bags (~0.75 ft³ each)', bags],
          ['Approx weight', weightLbs.toFixed(0) + ' lb (~' + (weightLbs/2000).toFixed(2) + ' tons)'],
          ['Bulk vs bag breakeven', cubicYd > 1 ? 'Order bulk delivered' : 'Bags OK']
        ]
      };
    }
  }
];

export const getCalculator = (slug: string) => calculators.find(c => c.slug === slug);

export const getCategories = () => {
  const cats = new Map<string, typeof calculators>();
  calculators.forEach(c => {
    if (!cats.has(c.category)) cats.set(c.category, []);
    cats.get(c.category)!.push(c);
  });
  return cats;
};
