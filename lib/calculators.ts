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
    seoIntro: 'Use this concrete calculator to estimate how much concrete you need for a slab, footing, sidewalk, or patio. Enter the length, width, and thickness of your pour, and the calculator returns cubic yards (for ready-mix delivery) plus the equivalent number of 60-pound or 80-pound concrete bags from Home Depot or Lowe\'s. A 60lb bag yields about 0.45 ft³; an 80lb bag yields 0.60 ft³.',
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
