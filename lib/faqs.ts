import type { FAQItem } from './types';

export const faqs: Record<string, FAQItem[]> = {
  'drywall-calculator': [
    {
      q: 'How much does a sheet of drywall cost?',
      a: 'A standard 4×8 ft sheet of ½-inch drywall runs $13–18 at Home Depot or Lowe\'s as of 2026. Moisture-resistant (greenboard) and fire-rated (Type X) sheets run $18–28. 4×12 sheets cost roughly 1.5× the 4×8 price — slightly cheaper per square foot but harder to handle solo.',
    },
    {
      q: 'Should I buy 4×8 or 4×12 drywall sheets?',
      a: '4×8 is easier for one person to handle and fits most rooms with less waste. 4×12 reduces seams (faster mudding, smoother finish) but requires two people and a truck. For ceilings or rooms over 12 ft on the long side, 4×12 saves time. Most DIYers stick with 4×8.',
    },
    {
      q: 'Do I need to subtract windows and doors?',
      a: 'For most jobs, no — leaving the openings in your calculation gives you natural waste tolerance for cuts. If your room has unusually large openings (sliding glass doors, picture windows totaling more than 50 ft²), subtract them to avoid over-buying.',
    },
  ],
  'paint-calculator': [
    {
      q: 'How much paint do I need for a 12×12 room?',
      a: 'A 12×12 room with 8 ft ceilings has about 384 ft² of wall area. At 350 ft²/gallon coverage with 2 coats, you need about 2.2 gallons — round up to 3. Add another gallon if you\'re also painting the ceiling.',
    },
    {
      q: 'Should I buy 1-gallon cans or a 5-gallon bucket?',
      a: 'Buy a 5-gallon bucket if you need 4+ gallons — it\'s typically 15–20% cheaper per gallon and ensures color consistency across the whole job. For smaller jobs, gallon cans are fine and easier to handle.',
    },
    {
      q: 'How many coats of paint do I really need?',
      a: 'Two coats is standard and what this calculator assumes. One coat may work if you\'re repainting the same color over a clean surface. Always do two for color changes, dark over light, or any flat → satin/semi-gloss transitions.',
    },
  ],
  'concrete-calculator': [
    {
      q: 'When should I use bags vs ready-mix concrete?',
      a: 'Bags make sense for pours under 0.5 cubic yards (about 30–50 ft² of 4-inch slab). Above that, ready-mix delivery is cheaper, faster, and gives a more uniform pour. Most concrete plants have a 1-yard minimum and a per-yard short-load fee.',
    },
    {
      q: 'How many 80lb bags of concrete in a yard?',
      a: 'About 45 bags of 80lb concrete = 1 cubic yard. For 60lb bags it\'s 60 bags per yard. That\'s roughly 3,600–4,000 lbs of concrete per yard depending on mix.',
    },
    {
      q: 'How thick should my concrete slab be?',
      a: '4 inches is standard for residential patios, walkways, and shed pads. Driveways need 4–6 inches with rebar. Garage floors and heavy equipment areas need 6 inches. Footings depend on local code — typically 8–12 inches.',
    },
  ],
  'roofing-calculator': [
    {
      q: 'How long do asphalt shingles last?',
      a: '3-tab shingles last 15–20 years. Architectural (dimensional) shingles last 25–30 years. Premium shingles can last 40–50 years. Climate matters — southern heat shortens lifespan; northern cold/ice extends it.',
    },
    {
      q: 'How much does a roofing square cost?',
      a: 'Materials only: $90–150 per square for 3-tab shingles, $120–250 for architectural. Installed labor adds $300–500/square. A typical 2,000 ft² roof is 25–30 squares.',
    },
    {
      q: 'How do I figure my roof pitch?',
      a: 'Use a level on the roof or a ladder against the gable. Hold the level horizontal, measure straight down 12 inches from the level, then measure up to the roof — that vertical number is your pitch. A roof rising 6 inches per 12-inch run is "6/12 pitch."',
    },
  ],
  'flooring-calculator': [
    {
      q: 'Why do I need to buy extra flooring?',
      a: 'Cuts, mistakes, and matching for future repairs. Straight installs need 10% extra; offset plank patterns need 12%; diagonal/herringbone needs 15%. Always keep one full box unopened after the install for repairs — nothing matches old flooring exactly years later.',
    },
    {
      q: 'How many square feet are in a box of flooring?',
      a: 'Most boxes cover 20–25 ft², but it varies wildly — laminate boxes are often 20 ft², luxury vinyl plank is 23–28 ft², engineered hardwood is 18–25 ft². Always check the specific box label before buying.',
    },
    {
      q: 'Can I install flooring over existing flooring?',
      a: 'Click-lock laminate and LVP can usually go over existing vinyl, hardwood, or tile if the surface is flat (less than 3/16" variation per 10 ft). Carpet must come up. Hardwood nailed installs need a wood subfloor; floating floors don\'t.',
    },
  ],
  'tile-calculator': [
    {
      q: 'How much grout do I need?',
      a: 'A 25-lb bag of sanded grout typically covers 100–150 ft² for 12×12 tiles with ⅛-inch joints. Smaller tiles or wider joints need more — a backsplash with 4×4 tiles and ¼-inch grout lines might use 1 bag per 50 ft². Always buy 25% extra.',
    },
    {
      q: 'Do I need spacers and what size?',
      a: 'Yes — even tiles look amateur without consistent grout lines. Standard sizes: 1/16" for rectified porcelain (sleek modern look), ⅛" for most ceramic, 3/16"–¼" for rustic stone or large-format. Smaller spacers = harder install but cleaner look.',
    },
    {
      q: 'What\'s the difference between ceramic and porcelain tile?',
      a: 'Porcelain is denser (water absorption under 0.5%), harder, and rated for heavier use including outdoors. Ceramic is softer and better for walls/light-traffic floors. Porcelain costs 30–50% more but lasts longer in wet areas (showers, mudrooms, outdoors).',
    },
  ],
  'mulch-calculator': [
    {
      q: 'How many bags of mulch in a yard?',
      a: 'About 13.5 bags of 2 cubic foot mulch = 1 cubic yard. Most home centers sell mulch in 2 ft³ bags ($3–5 each). Bulk delivery from a landscape supplier costs $25–45 per yard plus delivery — significantly cheaper if you need 3+ yards.',
    },
    {
      q: 'How deep should I lay mulch?',
      a: '2–3 inches for established beds with shrubs and perennials. 3 inches around trees (but never piled against the trunk — keep a 3-inch gap). 1 inch for new gardens with annuals. Pine straw goes thicker — 4–6 inches.',
    },
    {
      q: 'When should I refresh mulch?',
      a: 'Once a year, typically spring before plants leaf out. You don\'t need to remove old mulch — just top up to maintain 2–3 inches total depth. If old mulch has matted into a crust, break it up with a rake first so water can penetrate.',
    },
  ],
  'gravel-calculator': [
    {
      q: 'What size gravel do I need for a driveway?',
      a: 'For the base layer: ¾-inch crushed stone (also called "57 stone" or "crusher run") — angular pieces lock together. Top dressing: ⅜" or pea gravel for looks, but it scatters. Most driveways use 4–6 inches of crushed stone over compacted earth.',
    },
    {
      q: 'How much does a yard of gravel cost?',
      a: 'Crushed stone runs $30–55/yard at the quarry, plus $50–100 delivery within 20 miles. Pea gravel and decorative stone are $40–80/yard. A typical pickup truck holds about 1 cubic yard (3,000 lbs) — most quarries sell by weight.',
    },
    {
      q: 'How is gravel sold — by ton or yard?',
      a: 'Most quarries sell by the ton. Most landscape suppliers sell by the cubic yard. 1 cubic yard of gravel weighs about 1.4 tons (varies by stone density). This calculator gives you both numbers so you can compare apples to apples.',
    },
  ],
  'fence-calculator': [
    {
      q: 'How deep should fence post holes be?',
      a: 'At least one-third the post\'s above-ground height, plus 6 inches for gravel base. For a 6-ft fence (8-ft post), dig 2.5–3 ft deep. Below the frost line in cold climates — typically 36–48 inches in northern states.',
    },
    {
      q: 'Do I really need concrete on every post?',
      a: 'Yes for gates and corner posts (they take the most stress). For line posts, gravel-only or compacted soil works in some soils, but concrete lasts longer. Use 2 bags of 60lb fast-set concrete per 4×4 post in a 10-inch hole.',
    },
    {
      q: 'How much does a wood privacy fence cost?',
      a: 'Materials: $15–35 per linear foot for 6-ft cedar privacy fence (posts, panels, concrete, hardware). Installed: $25–55 per linear foot. A 100-ft run costs $1,500–5,500 depending on materials and labor market.',
    },
  ],
  'deck-stain-calculator': [
    {
      q: 'How often should I re-stain my deck?',
      a: 'Every 2–3 years for transparent or semi-transparent stains; every 4–6 years for solid (paint-like) stains. South-facing decks fade faster. Sign you need a refresh: water no longer beads on the surface and the wood looks gray.',
    },
    {
      q: 'Should I use stain or sealer?',
      a: 'Both at once is ideal — most modern products are stain + sealer combined. Pure sealer (clear) protects from water but lets the wood gray over time. Stain (with pigment) blocks UV, preserves color, and is what you want for visible decks.',
    },
    {
      q: 'Can I stain a brand new pressure-treated deck?',
      a: 'Wait 3–6 months. Fresh PT lumber is too wet — stain won\'t soak in. Test with water: if it beads, wait longer. If it absorbs in seconds, you\'re ready. Some KDAT (kiln-dried after treatment) lumber can be stained in days.',
    },
  ],
  'insulation-calculator': [
    {
      q: 'What R-value do I need?',
      a: 'Depends on climate zone and where you\'re insulating. Walls: R-13 (2×4) or R-19/R-21 (2×6). Attic: R-38 in southern US, R-49 in northern. Basement walls: R-15. Crawl space ceiling: R-19. Check your local code for exact requirements.',
    },
    {
      q: 'Faced or unfaced insulation?',
      a: 'Faced (kraft paper or foil) for walls and ceilings — the facing is a vapor barrier and faces the warm side. Unfaced for layering on top of existing insulation, or where you\'ll add a separate vapor barrier. Never put two faced layers in one cavity.',
    },
    {
      q: 'How much does insulation cost?',
      a: 'R-13 fiberglass batts: $0.50–0.85/ft² installed yourself, $1.50–2.50/ft² installed pro. Blown cellulose attic: $1–2/ft². Spray foam open-cell: $1.25–2.25/ft²; closed-cell: $1.75–4/ft².',
    },
  ],
  'siding-calculator': [
    {
      q: 'How much does siding cost installed?',
      a: 'Vinyl: $4–8/ft² installed. Fiber cement (Hardie): $10–16/ft². Cedar lap: $7–12/ft². Wood shingle: $6–11/ft². Stucco: $7–12/ft². Materials are 30–50% of cost; rest is labor.',
    },
    {
      q: 'Do I need to remove old siding first?',
      a: 'Vinyl can sometimes go over existing wood siding if it\'s flat and sound. Fiber cement and stucco require removal. Always remove if siding is rotted, has insect damage, or trapping moisture. Code in many areas requires removal regardless.',
    },
    {
      q: 'How long does siding last?',
      a: 'Vinyl: 20–40 years. Fiber cement: 25–50 years (warranty often 30+). Cedar: 15–30 years if maintained, less if neglected. Stucco: 50+ years if properly applied. Aluminum: 20–40 years but dents easily.',
    },
  ],
  'sod-calculator': [
    {
      q: 'When is the best time to lay sod?',
      a: 'Early fall (warm soil, cooler air) is best in most climates. Spring is second-best. Avoid mid-summer in hot regions — sod stresses badly without consistent watering. Cool-season grasses (fescue, bluegrass) prefer fall; warm-season (Bermuda, zoysia) prefer late spring.',
    },
    {
      q: 'How much does a pallet of sod cost?',
      a: '$150–450 per pallet depending on grass type and region. Bermuda and tall fescue are cheaper ($150–250). St. Augustine and zoysia are more expensive ($300–450). Most pallets cover 450 ft².',
    },
    {
      q: 'How long until I can walk on new sod?',
      a: 'Light foot traffic: 2 weeks. Mowing: 3 weeks (when blades are 3+ inches). Heavy use (kids, dogs, sports): 6 weeks. Roots take about 3 weeks to anchor — anything earlier and you\'ll lift the sod.',
    },
  ],
  'brick-calculator': [
    {
      q: 'How many bricks per pallet?',
      a: 'Standard modular brick: about 500–525 per pallet. Queen size: 425–475. Kingsize/oversize: 350–425. A pallet weighs 2,000–3,000 lbs depending on brick type.',
    },
    {
      q: 'How much do bricks cost?',
      a: '$0.40–$0.90 per brick for common modular. Premium handmade or imported bricks can run $1–3 each. Installed brick veneer costs $9–15/ft² for materials and labor combined.',
    },
    {
      q: 'How many bags of mortar do I need?',
      a: 'About 1 bag of 70lb mortar mix for every 100–125 bricks laid (modular size with ⅜" joints). For a 1,000-brick wall, plan on 8–10 bags of mortar plus sand if you\'re mixing your own.',
    },
  ],
  'lumber-calculator': [
    {
      q: 'What does "on center" or "o.c." mean?',
      a: 'On-center is the distance between the center of one framing member and the center of the next. 16" o.c. means studs (or joists, rafters) are spaced so the centers are 16 inches apart, regardless of how thick the lumber actually is. Standard residential framing is 16" o.c.; ceiling joists and engineered floors often run 24" o.c.; 19.2" appears in advanced framing layouts (a 5-on-8 pattern that lines up with 8-ft sheet goods); 12" o.c. shows up in heavy-load areas or short-span situations.',
    },
    {
      q: 'What pre-cut stud length should I order?',
      a: 'For an 8-ft wall, pre-cut studs are 92-5/8" — that gives a finished ceiling around 8\'1-1/8" once the bottom plate (1-1/2") and double top plate (3") are added on. For 9-ft walls use 104-5/8", for 10-ft walls use 116-5/8". For non-standard heights, take the ceiling height in inches and subtract 4-1/2" — that\'s your stud cut length.',
    },
    {
      q: 'Do I need extras for corners and openings?',
      a: 'Yes. This calculator gives the run count along a single wall or joist line — corners, T-intersections, and openings are layout-dependent. Add 2–3 studs per outside corner (a 3-stud corner is the standard), 2–3 per T-intersection where another wall ties in, and 4 studs per door or window opening (2 jacks + 2 kings). Add cripple studs at 16" o.c. above and below openings as needed. A typical room ends up 6–12% over the run count.',
    },
  ],
  'voltage-drop-calculator': [
    {
      q: 'What\'s an acceptable voltage drop?',
      a: 'NEC recommends max 3% on branch circuits and max 5% combined feeder + branch. Code is a recommendation, not a hard requirement, but exceeding it causes lights to dim, motors to run hot, and electronics to misbehave.',
    },
    {
      q: 'When do I need to upsize wire for distance?',
      a: 'A 15A circuit on 14 AWG copper exceeds 3% drop past about 50 ft (one-way). Past 50 ft, jump to 12 AWG. Past 100 ft, jump to 10 AWG. Long subpanel runs commonly need 8 or 6 AWG even at low amperage.',
    },
    {
      q: 'Does aluminum wire have more voltage drop?',
      a: 'Yes — aluminum has about 1.6× the resistance of same-gauge copper. SE-rated aluminum wire is sized larger to compensate. For a given amperage, aluminum service entrance cable is typically 2 sizes larger (e.g., 4/0 AL replaces 2/0 CU).',
    },
  ],
  'btu-calculator': [
    {
      q: 'How many BTUs do I need per square foot?',
      a: 'Rule of thumb: 20 BTU per ft² for cooling, adjusted for sun exposure (±10%) and occupancy (+600 BTU per person above 2). Heating loads vary more by climate — 30–60 BTU/ft² in southern US, 40–80 in northern.',
    },
    {
      q: 'What size AC unit for a 1,500 sq ft house?',
      a: 'Roughly 30,000 BTU = 2.5 tons. But whole-house sizing should always use Manual J load calculation — not square footage rules — because insulation, windows, and exposure matter more than size. Get a contractor\'s Manual J for new installs.',
    },
    {
      q: 'Is bigger AC better?',
      a: 'No. Oversized AC short-cycles — kicks on, cools fast, kicks off without removing humidity. Result: cold and clammy room. A right-sized unit runs longer cycles, dehumidifies properly, and uses less energy.',
    },
  ],
  'pipe-volume-calculator': [
    {
      q: 'Why do I need to know pipe volume?',
      a: 'Sizing water heaters (recovery time), purging air or sediment, calculating chemical treatment doses, fill times for new systems, and estimating leak losses. Also useful for hydronic heating loop calculations.',
    },
    {
      q: 'What\'s the difference between pipe ID and OD?',
      a: 'ID is inside diameter (the water-carrying area). OD is outside diameter (the wall-to-wall measurement). For volume calculations, always use ID. Nominal pipe size (NPS) is neither — it\'s a label, not a measurement.',
    },
    {
      q: 'How much water is in 100 ft of ½" pipe?',
      a: 'Type L copper ½" pipe (ID 0.545") holds about 1.21 gallons per 100 ft. PEX-A ½" (ID 0.475") holds 0.92 gallons. Schedule 40 PVC ½" (ID 0.602") holds 1.48 gallons. Always check actual ID — it varies by material.',
    },
  ],
  'lumber-cut-calculator': [
    {
      q: 'What is a saw kerf and why does it matter?',
      a: 'The kerf is the slot of material the blade removes on each cut — typically 1/8" for a standard circular or miter saw, 3/32" for a thin-kerf framing blade. Ignoring it underestimates waste: ten 12-inch cuts in a 120-inch board only yields nine cuts once kerf is factored in (10 × 12 + 10 × 0.125 = 121.25"), so you actually need a longer stick or accept one short piece.',
    },
    {
      q: 'What is the standard length of a wall stud?',
      a: 'Pre-cut wall studs run 92-5/8" for a standard 8-foot wall — that\'s 96" minus the 1-1/2" bottom plate and double 1-1/2" top plates. For a 9-foot wall use 104-5/8", and for a 10-foot wall use 116-5/8". Stud-grade SPF and Doug fir at the lumberyard are usually pre-cut to 92-5/8" so you can frame an 8-ft wall straight from the bunk.',
    },
    {
      q: 'How do I handle a mixed cut list?',
      a: 'Run the calculator once for each unique cut length, then sum the boards. A true cut-list optimizer would mix leftovers from one length into the next (a 30" leftover could yield two 14-1/2" cripples), which saves 5–15% on most jobs. The simple version here is conservative — accurate per length, but does not pool offcuts across lengths.',
    },
  ],
  'conduit-fill-calculator': [
    {
      q: 'What is the NEC fill limit for EMT?',
      a: 'NEC Chapter 9, Note 4: 53% maximum fill for one conductor, 31% for two, and 40% for three or more. The lower limit on two-wire pulls is intentional — two stiff conductors jam in a way that one or three+ don\'t. Going over these numbers is an inspection failure.',
    },
    {
      q: 'Does this calculator account for conductor derating?',
      a: 'No — this is a physical fill check only. NEC 310.15(C)(1) requires ampacity adjustment when more than 3 current-carrying conductors share a raceway: 4–6 conductors derate to 80%, 7–9 to 70%, 10–20 to 50%. Plan ampacity separately if you\'re bundling many circuits.',
    },
    {
      q: 'Why use THHN/THWN-2 wire areas?',
      a: 'THHN/THWN-2 is the most common building wire in commercial and residential conduit runs. Other insulation types (XHHW, RHW, USE) have slightly different cross-sections — check NEC Chapter 9 Table 5 for exact areas. For mixed conductor sizes, sum each wire\'s area individually.',
    },
  ],
  'pipe-slope-calculator': [
    {
      q: 'What is the minimum slope for a 2-inch drain?',
      a: '1/4" per foot (about a 2% grade) per IPC and UPC. That\'s the standard for any horizontal drain 2.5 inches and smaller — kitchen, lavatory, shower, washing machine. Sloping less risks solids settling out and clogging the line.',
    },
    {
      q: 'Can a drain pipe have too much slope?',
      a: 'Yes. Above about 1/2" per foot, water flows faster than the solids it\'s carrying, leaving them behind to build up on the pipe walls. The clog pattern looks identical to too-little slope. The sweet spot is 1/4"/ft for small pipe, 1/8"/ft for 3"+ mains.',
    },
    {
      q: 'Does this apply to vent pipes?',
      a: 'Vent pipes only need to slope back toward the drain so condensation drains out — exact pitch isn\'t code-critical. The drain-side rules are what matters for waste flow. For sewer mains, also confirm your local jurisdiction\'s amendments — some cities tighten the IPC defaults.',
    },
  ],
  'water-supply-pipe-size-calculator': [
    {
      q: 'What is a Water Supply Fixture Unit (WSFU)?',
      a: 'A WSFU is a dimensionless number assigned to each fixture in IPC Table E202.1 that captures both its peak flow rate and its likely simultaneous use with other fixtures. A toilet is 2.5, a tub is 4, a kitchen sink is 1.5. Summing WSFUs lets you size a single supply line that serves many fixtures without assuming all of them open at once — Hunter\'s probabilistic curve does the rest.',
    },
    {
      q: 'Why is the PEX size bigger than the copper size?',
      a: 'PEX has a thicker wall than copper for the same nominal size, so the inside diameter is smaller and friction loss is higher per foot. To deliver the same flow rate, PEX usually needs to be one nominal size up. A ¾" copper line is roughly equivalent to a 1" PEX line at typical residential pressure.',
    },
    {
      q: 'Does this work for well water systems?',
      a: 'Use this for the line downstream of the pressure tank, which sees the same 40–60 psi residential range. The line from the pump to the pressure tank sizes differently — driven by pump GPM and lift, not WSFU. For long underground service runs (over 100 ft), bump up one size to offset friction loss regardless of what this calculator returns.',
    },
  ],
  'drain-pipe-size-calculator': [
    {
      q: 'What is a Drainage Fixture Unit (DFU)?',
      a: 'A DFU represents the discharge load a fixture puts on the drainage system. A toilet is 3 DFU, a lavatory is 1, a tub or shower is 2, a clothes washer is 3. DFU values come from IPC Table 709.1 and they\'re different from WSFU on the supply side — drainage is intermittent and gravity-driven, so the load calculation is separate.',
    },
    {
      q: 'Why does any branch with a toilet need a 3-inch pipe?',
      a: 'Solids. Toilet waste cannot be reliably carried in pipe smaller than 3 inches no matter how few DFUs the branch totals. IPC requires a minimum 3" branch for any line carrying a water closet, even if the DFU math would otherwise allow 2" — the calculator enforces this rule automatically.',
    },
    {
      q: 'Is the building drain sized the same way?',
      a: 'Same DFU table, different limits. The building drain (the horizontal main below the lowest fixtures) gets a separate column in IPC Table 710.1 with higher DFU caps — a 3" building drain handles 36 DFU at ¼"/ft slope, vs 20 for a horizontal branch. Sum every fixture in the building, look up the building drain row, and that\'s your main size.',
    },
  ],
  'vent-pipe-size-calculator': [
    {
      q: 'Why does the drain need a vent at all?',
      a: 'Two reasons. First, water flowing down a drain pulls air with it; without a vent, that suction siphons water out of the trap below the next fixture, breaking the seal and letting sewer gas into the room. Second, drains glug and run slow when air can\'t enter behind the flow. The vent pipe gives the system equal pressure on both sides of the moving water.',
    },
    {
      q: 'Can a vent pipe be horizontal?',
      a: 'Vent piping must rise vertically from the fixture for at least 6 inches above the flood-level rim before turning horizontal (IPC 905.4). After that, horizontal vent runs are allowed but must slope back toward the drain so condensation doesn\'t pool — a tiny grade like 1/8" per foot is enough.',
    },
    {
      q: 'When can I use an air admittance valve (AAV) instead of running a vent through the roof?',
      a: 'AAVs (Studor vents) are allowed by IPC for individual, branch, or circuit vents serving fixtures inside the building, but every drainage system still needs at least one vent open to the outside air. AAVs are great for kitchen island sinks and remodel work where running a stack to the roof would mean ripping out finished walls. Check local amendments — a handful of jurisdictions still don\'t accept them.',
    },
  ],
  'pressure-loss-calculator': [
    {
      q: 'What is the Hazen-Williams formula?',
      a: 'Hazen-Williams calculates friction loss in a water pipe at typical municipal pressures (down to about 60 psi). The formula h = 4.52·L·Q^1.852 ÷ (C^1.852·D^4.87) gives head loss in feet, where L is run length in feet, Q is flow in GPM, C is the pipe roughness coefficient, and D is inside diameter in inches. It\'s simpler than Darcy-Weisbach (which is more accurate at extreme conditions) and is the industry standard for residential and light commercial water supply.',
    },
    {
      q: 'What is a good C-factor for old galvanized pipe?',
      a: 'New galvanized steel starts at C=120, but mineral buildup and corrosion drop it to 60–90 within 30 years. If you\'re sizing a retrofit on existing galvanized service, use C=80 for sound 30+ year-old pipe and C=60 if there\'s visible corrosion or pressure complaints. The math will tell you to upsize, which is usually correct anyway — old galvanized restricts flow even before friction losses are calculated.',
    },
    {
      q: 'Why does velocity matter if my friction loss is acceptable?',
      a: 'Two reasons. Erosion: water above 8 fps (5 fps hot) physically scours the inside of pipe and fittings, especially at elbows, eventually causing pinhole leaks. Water hammer: high velocity means high momentum, so any sudden valve closure produces a pressure spike that can crack joints. Both effects are independent of friction loss — a system can pencil out on PSI drop while still failing on velocity.',
    },
  ],
  'gpm-to-pipe-size-calculator': [
    {
      q: 'When do I size by GPM instead of fixture units?',
      a: 'Fixture units (WSFU) work great for residential supply — they\'re probabilistic and account for fixtures rarely all running at once. GPM-based sizing is better when you know the actual continuous flow demand: irrigation zones, equipment cooling lines, hose stations, restaurant dish stations, and any system where the flow rate is dictated by the load not the fixture count.',
    },
    {
      q: 'Why is hot water sized for lower velocity than cold?',
      a: 'Hot water erodes copper faster — the rule of thumb is 5 fps max on hot vs 8 fps on cold. The mechanism is dezincification (in brass) and progressive copper-oxide stripping. At 140°F service temperature, sustained 8 fps flow can pinhole copper at fittings within 5–10 years. Sizing one nominal step bigger keeps velocity below the erosion threshold.',
    },
    {
      q: 'What size pipe for 10 GPM?',
      a: '10 GPM cold-water service needs a minimum ¾" copper or 1" PEX line for ≤8 fps velocity. For hot at 5 fps, bump to 1" copper or 1¼" PEX. Add friction loss check separately if the run is over 100 feet — long runs may need an upsize even when velocity is fine.',
    },
  ],
  'trap-size-calculator': [
    {
      q: 'Why does my fixture have a specific trap size?',
      a: 'Trap size has to match the flow capacity of the fixture so it self-scours — water leaving the fixture has enough velocity to flush the trap clean of debris. Too-small traps clog. Too-large traps don\'t maintain flow velocity and let solids settle in the bottom of the U. IPC Table 1002.1 picks the size that self-scours for each fixture\'s typical discharge.',
    },
    {
      q: 'How long can a trap arm be?',
      a: 'IPC 1002.4 limits the trap arm (the horizontal pipe between the trap weir and the vent) to a length that depends on trap size: 1¼" trap → 5 ft max arm, 1½" → 6 ft, 2" → 8 ft, 3" → 12 ft. Going longer breaks the trap seal under flow. The arm must also slope ¼" per foot back toward the drain so it self-drains.',
    },
    {
      q: 'Do toilets need a separate trap?',
      a: 'No — every modern water closet has an integral 3-inch S-trap or P-trap molded into the porcelain. That\'s the curved water column you see in the bowl. The branch drain leaving the toilet is straight pipe to the stack. This is why toilets need a 3" minimum branch even if other fixtures sharing the line would allow smaller.',
    },
  ],
  'water-meter-size-calculator': [
    {
      q: 'How does the utility decide my water meter size?',
      a: 'Most utilities use the AWWA M22 method: estimate peak demand from fixture units (or a flat per-unit value for multi-family), then pick the smallest meter that handles the peak with 15–20% margin. They\'ll oversize cautiously because under-sized meters cause customer complaints they have to fix. The most common residential meter in the US is a ⅝" × ¾" displacement meter, which handles 10 GPM continuous and 20 GPM intermittent — enough for a typical 2-bath home.',
    },
    {
      q: 'What size meter do I need for a tankless water heater?',
      a: 'Most whole-home tankless heaters pull 7–11 GPM at full output. A ⅝" × ¾" meter (10 GPM continuous) is borderline; a ¾" meter (15 GPM) gives proper headroom. If your house already has a ⅝" meter and you install a tankless that pulls 9 GPM, expect noticeable pressure dip during simultaneous shower and dishwasher use. Coordinate with the utility about a meter upsize before committing to the install.',
    },
    {
      q: 'Why not just install the biggest meter possible?',
      a: 'Three reasons. (1) Cost: bigger meters carry higher monthly base fees in most utility tariffs. (2) Accuracy at low flow: a 2" meter has a minimum registration threshold around 1.5 GPM, which means a slow toilet leak doesn\'t register and you don\'t get billed for it (sounds great, but the utility tariff sets your fixed cost based on meter size to recover this). (3) Service line cost: bigger meters need bigger service lines, which means more excavation and more pipe.',
    },
  ],
  'building-drain-size-calculator': [
    {
      q: 'How is building drain sizing different from horizontal branch sizing?',
      a: 'Same DFU concept, different limits. The IPC Table 710.1 has separate columns for horizontal branches and building drains (and stacks). Building drains carry higher DFU loads at the same diameter because they always run at full slope and don\'t experience the start-stop flow patterns that branches see. A 3" horizontal branch is limited to 20 DFU; the same 3" building drain at ¼"/ft handles 50 DFU.',
    },
    {
      q: 'What slope should I use for the building drain?',
      a: 'Default to ¼"/ft for any pipe size. ⅛"/ft is allowed only for 3" and larger pipe and is used when ceiling space is tight (basement runs under floor joists). Going steeper than ½"/ft causes scour problems where water outruns solids, leaving them behind to build up on pipe walls. The sweet spot is ¼" for most residential.',
    },
    {
      q: 'Where does the building drain end and the building sewer begin?',
      a: 'Per IPC: 5 feet outside the building foundation. Inside that 5 ft = building drain (subject to building drain sizing tables). Outside = building sewer (different, more permissive sizing). The transition matters for permit and inspection scope; the building drain is part of the rough plumbing inspection, the sewer is its own permit.',
    },
  ],
  'wet-wall-stack-calculator': [
    {
      q: 'What is a wet wall in plumbing?',
      a: 'A wet wall is a framed cavity (typically 6" or wider studs instead of standard 4") that carries vertical plumbing — supply lines, drain stack, and vent — through a multi-story house. Bathrooms are usually backed up against a wet wall so a single chase serves both floors. Stacking bathrooms vertically over a single wet wall cuts plumbing labor and material by 30–50% compared to spreading them across the floor plan.',
    },
    {
      q: 'What is a branch interval?',
      a: 'A branch interval is the vertical distance between two horizontal branches connecting to a stack — typically one floor, about 8 ft. The IPC limits how much DFU can connect to a stack at a single branch interval, separately from the total stack DFU. A 3" stack can carry 48 DFU total but only 20 DFU per branch interval — meaning you can\'t hang all the load on one floor. Spreading fixtures across multiple intervals is what stacks are designed for.',
    },
    {
      q: 'Does a stack vent need to be the same size as the stack?',
      a: 'IPC 906 sizes vents independently from the drain they serve, but practical residential rule: stack vents extending through the roof are usually the same diameter as the stack to avoid a reduction. Cold-climate codes also require minimum 3" through the roof regardless of stack size to prevent frost closure (ice buildup choking off the vent in winter).',
    },
  ],
  'booster-pump-sizing-calculator': [
    {
      q: 'When do I need a booster pump?',
      a: 'Three common scenarios. (1) Low municipal pressure: incoming static under 30 PSI consistently delivers under 20 PSI at far fixtures, which is below code minimum. (2) Tall buildings: any structure where elevation lift to the top floor exceeds the available pressure margin (every story adds about 4 PSI of static loss). (3) Long well runs or rural service lines where friction loss eats most of the available pressure before it reaches the building. Test incoming pressure with a hose-bib gauge before assuming you need one.',
    },
    {
      q: 'What\'s the difference between constant-speed and VFD booster pumps?',
      a: 'Constant-speed pumps cycle on/off when pressure drops below the lower set point and run until pressure hits the upper set point. They\'re cheaper and simpler but cause noticeable pressure fluctuations and pump short-cycling. VFD (variable-frequency drive) pumps modulate motor speed continuously to hold pressure at exactly the set point — much smoother, much quieter, and usually quieter long-term running cost. VFD is the modern default for residential and small commercial.',
    },
    {
      q: 'How do I prevent the pump from short-cycling?',
      a: 'Two ways. Add a pressure tank downstream of the pump (typical 4–14 gal bladder tank) to give the pump time between starts — sized for at least one minute of run time at peak demand. Or use a VFD pump that ramps speed instead of cycling on/off. Short-cycling kills pump motors fast — the start current is 6–8× running current and the bearings/seals see the thermal shock at every start.',
    },
  ],
  'expansion-tank-sizing-calculator': [
    {
      q: 'Do I need an expansion tank with my water heater?',
      a: 'Yes if your system is closed. A closed system has a check valve, pressure-reducing valve (PRV), or backflow preventer between the water meter and the water heater — meaning expanding hot water has nowhere to go back to. Most modern homes have a PRV at the meter (incoming municipal pressure exceeds 80 PSI in many areas), which makes the system closed by code definition. UPC 608.3 and IPC 607.3.1 both require an expansion tank in this case.',
    },
    {
      q: 'What size expansion tank for a 50-gallon water heater?',
      a: 'For typical residential setup (60 PSI supply, 90°F temperature rise, 80 PSI max), a 50-gallon water heater needs about 1.85 gallons of expansion volume → standard 2-gallon expansion tank. Higher supply pressure or larger water heater pushes you to a 4.4-gallon tank. Always go up to the next standard size; under-sized tanks fill completely and stop accepting expansion, which is the same as having no tank.',
    },
    {
      q: 'Where does the expansion tank install?',
      a: 'On the cold water inlet side of the water heater, between the heater and the shut-off valve. Hanging vertically (tank below pipe) is preferred so debris drains out of the bladder area. Pre-charge the tank air pressure to match the supply pressure (typically 60 PSI) before installing — most tanks ship at 40 PSI from the factory and need to be adjusted. Use a Schrader-valve gauge with the tank disconnected from water pressure.',
    },
  ],
  'duct-cfm-calculator': [
    {
      q: 'What is the typical CFM per ton of cooling?',
      a: '400 CFM per ton is the residential rule of thumb, which lines up with a 20°F supply-vs-return ΔT. High-humidity climates sometimes target 350 CFM/ton for better dehumidification; dry climates may run 450 CFM/ton for sensible-only cooling.',
    },
    {
      q: 'How do I figure CFM for a single room?',
      a: 'Two ways. (1) Run a Manual J load on that room, then apply CFM = BTU ÷ (1.08 × ΔT). (2) Proportional: room CFM = (room load ÷ total load) × system CFM. Method 2 is what most installers do once Manual J gives them the per-room loads.',
    },
    {
      q: 'Why does correct duct sizing matter?',
      a: 'Undersized ducts starve airflow — coils freeze in cooling mode, heat exchangers crack in heating mode, and equipment lifespan drops. Oversized ducts waste fan energy, leak more, and can produce uncomfortable air velocity. Manual D sizing pays back in efficiency and longevity.',
    },
  ],
  'mortgage-calculator': [
    {
      q: 'What does PITI mean?',
      a: 'Principal, Interest, Taxes, Insurance — the four parts of your monthly housing cost. This calculator only shows P&I (principal and interest). T&I (property tax + homeowners insurance) typically adds 25–35% on top, escrowed by your lender.',
    },
    {
      q: 'How much house can I afford?',
      a: 'Lenders typically allow up to 28% of gross income for PITI ("front-end ratio") and up to 36–43% for total debt ("back-end ratio"). On $100K gross income, that\'s ~$2,300/mo PITI max. Aim lower for actual comfort.',
    },
    {
      q: 'Should I pay points to lower my rate?',
      a: 'Each point costs 1% of the loan and typically reduces rate by 0.25%. Break-even is usually 4–6 years. If you\'ll stay in the home longer than that, points save money. If you might move or refinance sooner, skip them.',
    },
  ],
  'car-payment-calculator': [
    {
      q: 'What\'s a good interest rate on a car loan?',
      a: 'In 2026, excellent credit (740+) gets 6–8% on new cars and 7–10% on used. Average credit (660–739) sees 9–12% new and 11–14% used. Subprime (under 660) ranges from 14–22%. Always check your bank or credit union before accepting dealer financing — credit unions usually beat dealer rates by 1–3 points.',
    },
    {
      q: 'Should I take a 60-month or 72-month loan?',
      a: '60 months (5 years) is the sweet spot: lower interest paid than 72 or 84, payment stays manageable, and the car is paid off before major repairs hit. 72 and 84 month loans look attractive for the lower payment but you\'ll be underwater (owe more than car is worth) for most of the loan, and you\'ll pay 30–60% more total interest.',
    },
    {
      q: 'How much should I put down on a car?',
      a: 'Aim for 20% down on new and 10% on used to avoid being underwater immediately (new cars lose 20% of value in year one). If you can\'t hit that, consider GAP insurance to cover the difference between loan balance and car value if it\'s totaled. Trade-in value counts as down payment.',
    },
  ],
  'personal-loan-calculator': [
    {
      q: 'What credit score do I need for a personal loan?',
      a: 'Most lenders require 600+ for any approval. To get good rates (under 12% APR), you typically need 670+. Excellent rates (under 9%) require 740+. Subprime lenders will go down to 580 but rates climb past 25%.',
    },
    {
      q: 'What\'s an origination fee and does this calculator include it?',
      a: 'An origination fee is a one-time charge some lenders deduct from your funded amount — typically 1–8% of the loan. On a $10,000 loan with a 5% fee, you receive $9,500 but still pay back $10,000 plus interest. This calculator doesn\'t subtract origination fees; check your loan estimate. Lenders like SoFi, Marcus, and LightStream typically have no origination fee.',
    },
    {
      q: 'Personal loan vs credit card vs HELOC — which is cheapest?',
      a: 'For balances you can pay in 12 months: 0% APR balance-transfer credit card (if you qualify) is cheapest. For 24–60 month payoff: personal loan typically beats credit cards (which average 22% APR). HELOC is usually cheapest of all (8–10%) but requires home equity and has variable rates that can rise.',
    },
  ],
  'stair-stringer-calculator': [
    {
      q: 'What is the IRC code for stair rise and run?',
      a: 'Per IRC R311.7.5: maximum riser height is 7-3/4 inches and minimum tread depth is 10 inches measured nose to nose. The largest riser cannot vary more than 3/8 inch from the smallest within a flight. The "rule of comfort" target for a usable stair is 2R + T between 24 and 25 inches, where R is unit rise and T is unit run. This calculator flags violations on each side of those limits.',
    },
    {
      q: 'How long of a 2x12 do I need for a stair stringer?',
      a: 'Take the diagonal stringer length the calculator returns, round up to the nearest standard length, and add at least 12 inches for the seat cut at the bottom and the plumb cut at the top. A 9-foot rise with a 14-tread layout typically needs a 16-foot 2x12 even though the diagonal is only ~14 ft. Always lay out the cuts on paper before going to the lumberyard. This sizing is an estimate — confirm with your local building inspector before cutting.',
    },
    {
      q: 'Should I use 2 or 3 stringers?',
      a: 'For typical 36-inch-wide residential stairs, 3 stringers are recommended (one per edge plus a middle stringer). For wider stairs (over 36"), add an extra stringer per 16 inches of width. 2x12 is the standard size; 2x10 is allowed on shorter runs but leaves only ~3-1/2" of throat after the cuts, which gets fragile. Always verify spacing and stringer size with your inspector and engineered drawings.',
    },
  ],
  'beam-span-calculator': [
    {
      q: 'Can I use this calculator to size a real load-bearing beam?',
      a: 'No — this is a planning estimator, not an engineering calculation. Real beam sizing must consider bearing length, point loads, lumber grade and species variation, repetitive vs single-member factors, snow/seismic loads, and field conditions the calculator cannot see. Use this to sanity-check whether a 2-2x10 versus 3-2x12 is in the right ballpark, then have an engineer or your local inspector confirm before purchase. Span tables from AWC (American Wood Council) and Weyerhaeuser are the next step up.',
    },
    {
      q: 'What does L/360 deflection mean?',
      a: 'L/360 is the maximum live-load deflection allowed at midspan, where L is the span length. For a 12-foot beam, L/360 = 144"/360 = 0.4" of sag under full live load. It is the standard for floor framing under finished ceilings (drywall cracks if it sags more). Roofs and decks use L/240 (less strict). This calculator uses L/360 as the deflection limit because most residential beams support floors.',
    },
    {
      q: 'What is tributary width for a beam?',
      a: 'Tributary width is the half-distance to the next parallel support on each side. If a beam runs down the middle of a 24-foot-wide room with joists landing on it from both sides, each side feeds 12 feet of joist span, so the tributary width is 12 feet. If the beam is at one wall and joists hang from a ledger on the opposite wall, the beam carries the full 24-foot width. Tributary width times floor load (psf) gives the uniform load (plf) on the beam.',
    },
  ],
  'plywood-sheets-calculator': [
    {
      q: 'How many sheets of plywood do I need for a 24x16 subfloor?',
      a: 'A 24x16 floor is 384 ft². At 32 ft² per 4x8 sheet, that is exactly 12 sheets — but with 10% waste and at least one extra sheet for tongue-and-groove perimeter loss, plan for 14 sheets. The calculator handles the waste math automatically; just measure once and remember to count out an extra sheet when you load the truck. This is an estimate; verify against the engineered floor plan before ordering.',
    },
    {
      q: 'What thickness of plywood for subfloor?',
      a: '23/32" tongue-and-groove is the standard for residential floors over 16" o.c. joists. 19/32" works on 12" o.c. spacing or where a separate underlayment will be added. 1-1/8" T&G is used on 24" o.c. engineered I-joists. OSB rated as Sturd-I-Floor is acceptable in the same thicknesses. Always match the APA rated stamp on the sheet to the joist spacing called out in the framing plan.',
    },
    {
      q: 'OSB or plywood for sheathing — which is better?',
      a: 'OSB is cheaper, sheathing-rated equivalent, and dominates new construction. Plywood handles repeated wetting better and holds fasteners slightly stronger at the edges, so it is preferred where sheathing will be exposed (e.g., behind cement-board on showers, in unconditioned crawlspaces). For walls and roofs that get covered, OSB is fine. Both are sized identically in this calculator since coverage is the same per sheet.',
    },
  ],
  'rafter-length-calculator': [
    {
      q: 'How do I figure rafter length from pitch and run?',
      a: 'Multiply the run (half the building width) by the pitch factor √(pitch² + 144) ÷ 12. For a 24-ft-wide building with 6/12 pitch, run is 12 ft and the pitch factor is √(36+144)/12 ≈ 1.118, so the slope length from ridge to wall is 12 × 1.118 ≈ 13.4 ft. Add the eave overhang along the slope to get the total rafter length to cut. Always verify against the architect or engineer\'s roof plan.',
    },
    {
      q: 'Do I subtract the ridge board thickness?',
      a: 'Yes — at the upper end of the rafter, you cut a plumb cut that lands flush against the ridge board. The actual horizontal run of the rafter is half the building width minus half the ridge board thickness (typically 3/4" for a 1-1/2" ridge). For a 6/12 pitch that shaves about 0.84" off the slope length per rafter — small, but real. This calculator returns the un-corrected length; subtract the ridge offset before final cut.',
    },
    {
      q: 'What size rafter do I need for a 24-foot-wide house?',
      a: 'This calculator gives length only, not size. Rafter size depends on snow load, lumber species/grade, spacing, and whether the ceiling joists tie the rafters together. AWC and IRC R802.5 span tables are the right reference. For 24-ft buildings under 30 psf ground snow with 16" o.c. spacing, 2x8 #2 SPF rafters are typical, but 2x10 or 2x12 are needed in heavy-snow regions or with cathedral ceilings. Always verify with engineered plans.',
    },
  ],
  'header-size-calculator': [
    {
      q: 'What size header for a 6-foot opening?',
      a: 'For a non-bearing wall: a (2) 2x6 header is plenty. For an exterior bearing wall carrying roof and ceiling only: (2) 2x8. With one floor above plus the roof: (2) 2x10. With two floors above: (3) 2x10. These come from a simplified read of IRC R602.7 and assume average residential loading — your inspector or engineer is still the final word, especially in snow regions or with wider building widths.',
    },
    {
      q: 'How many jack studs per side for a header?',
      a: 'Up to 4 ft opening: 1 jack each side. 4–8 ft: 2 jacks each side. Over 8 ft: 3 jacks each side, or use engineered LVL with manufacturer-specified bearing. Always include 1 king stud (full-height) outside each jack. Wider doors (garage doors, sliding glass over 6 ft) often need a structural post or trimmer made of multiple jacks built up — confirm with the framing plan.',
    },
    {
      q: 'When do I need an LVL or engineered header instead of dimensional lumber?',
      a: 'Use an LVL (laminated veneer lumber) when opening width exceeds 12 feet, when point loads land on the header (girder bearing), in two-story bearing walls with wide openings, or whenever the architect or engineer specifies one. LVLs are stronger and stiffer than built-up dimensional lumber, span farther, and avoid the gap problems of crowned 2x stock. Anything outside the simplified table this calculator uses should be sized by an engineer.',
    },
  ],
  'mortar-grout-calculator': [
    {
      q: 'How many bags of mortar do I need for 1,000 bricks?',
      a: 'About 33 bags of 80-lb Type N or S — most masons round to 7 bags per 1,000 brick at a 3/8" joint, then add a 10-15% waste factor for partial bags and tooling loss. Type S has higher compressive strength than N (1,800 psi vs 750 psi) and is used below grade or for load-bearing walls; Type N is the all-purpose mix above grade. Joint thickness drives the math more than brick size: a 1/2" joint nearly doubles the mortar volume of a 3/8" joint.',
    },
    {
      q: 'What\'s the difference between sanded and unsanded grout?',
      a: 'Unsanded grout is rated for joints under 1/8 in (rectified porcelain, glass tile, polished marble) — sand particles would scratch the tile face. Sanded grout handles 1/8 in to 1/2 in joints and is the default for most floor tile and field tile. Above 1/2 in joint, switch to a wide-joint sanded mix or a polymer-modified mortar. Coverage drops fast as joints get wider — a 1/4 in joint on 4×4 tile burns 3-4× the grout of the same tile with a 1/16 in joint.',
    },
    {
      q: 'How much grout for a 100 sq ft floor?',
      a: 'For 12×12 tile with a 1/8" joint, one 25-lb bag of sanded grout typically covers 100-200 ft² depending on the manufacturer and how thick you bed the grout. For 4×4 tile with a 1/4" joint, that same bag drops to 50-75 ft² because joint length per area is roughly 3× higher. Always cross-check the manufacturer\'s coverage chart for the specific product before ordering.',
    },
  ],
  'cmu-block-calculator': [
    {
      q: 'How many concrete blocks per square foot?',
      a: '1.125 blocks per square foot of wall using standard 8×8×16 face dimensions with a 3/8" mortar joint — that\'s 0.889 ft² per block face. A 100 ft² wall needs 113 blocks; round up 5% for breakage and you order 119. Smaller faces (4×16 half-high block, for example) double the block count because the face is half the height.',
    },
    {
      q: 'How many bags of mortar for 100 concrete blocks?',
      a: 'Three 80-lb bags of Type S or N mortar per 100 blocks — about 0.5 ft³ of mortar per 100 blocks at a 3/8 in joint. Type S is the standard for load-bearing CMU walls (1,800 psi compressive strength). For below-grade foundations or seismic regions, the engineer may spec Type M (2,500 psi). Add 10% waste for spillage and partial bags.',
    },
    {
      q: 'When does a CMU wall need rebar?',
      a: 'Per IRC R606 and IBC Chapter 21, every CMU wall in seismic zones D1/D2 needs vertical reinforcement. Most jurisdictions also require rebar for any retaining wall, basement wall, or wall over 8 ft tall. Typical pattern is #4 vertical at 4 ft on center grouted into the cells plus #4 horizontal in every fourth course bond beam. For engineered designs (tall walls, heavy loads, seismic), a structural engineer specifies bar size and spacing — the calculator\'s rebar option assumes the standard non-engineered residential pattern.',
    },
  ],
  'stone-veneer-calculator': [
    {
      q: 'How much stone veneer do I need?',
      a: 'Measure wall height × length, subtract windows and doors, and add 10% for waste. The result is the square footage of "flats." Then measure outside corners separately by linear foot — corner pieces wrap the corner so they\'re sold by lin ft, and each lin ft replaces about 0.75 ft² of flat coverage. A 200 ft² wall with 30 lin ft of corners needs roughly 200 − (30 × 0.75) = 178 ft² of flats plus 33 lin ft of corners (with 10% waste).',
    },
    {
      q: 'Do I need lath behind manufactured stone veneer?',
      a: 'Yes — every code-compliant manufactured stone install over framing or sheathing needs metal lath stapled through to the studs (not just the sheathing) followed by a scratch coat before the stones go on. ASTM C1670 and most manufacturer specs call for 2.5-lb diamond mesh galvanized lath fastened at 6" o.c. on studs. Skip the lath and the veneer fails — usually within five years.',
    },
    {
      q: 'How many bags of mortar per 100 sq ft of stone veneer?',
      a: 'About three 80-lb bags of Type N or S mortar per 100 ft² for full mortar joints (the traditional grouted look). Dry-stack styles use ~one bag per 100 ft² for the back-buttering and a tight setting bed only — no joint filling. The polymer-modified bagged mortar (e.g., Type S Mason Mix or a dedicated stone-veneer mortar) is what manufacturers spec; standard Type N may not bond well to the back of cast veneer.',
    },
  ],
  'stucco-calculator': [
    {
      q: 'How many bags of stucco per square foot?',
      a: 'For 3-coat traditional Portland cement stucco, plan on roughly 38 bags of 80-lb stucco mix per 100 ft² of wall — about 1 bag per 8 ft² for the scratch and brown coats, plus 1 per 12 ft² for the finish coat. 1-coat synthetic systems run lighter at 8 bags per 100 ft². Substrate matters: rough block soaks up more than smooth sheathing, and lath profile (3.4 lb vs 2.5 lb) shifts the scratch coat thickness.',
    },
    {
      q: 'How long does stucco take to install?',
      a: 'A standard 3-coat job on a 1,500 ft² house takes 5-7 working days minimum: day 1 for lath, day 2 for scratch coat, days 3-4 to cure (the brown coat goes on after the scratch is moisture-cured for 48 hours), day 5 for brown coat, days 6-7 to cure, then 1 day for finish coat. Fast-tracking the cure between coats causes the cracking you see on rushed builds.',
    },
    {
      q: 'Can I do stucco over plywood?',
      a: 'Not directly. Stucco needs a weather-resistive barrier (two layers of grade D paper or a coded WRB) plus metal lath fastened through the sheathing into the framing. Skipping either layer voids the warranty and traps moisture against the plywood, which then rots within a few years. The CMU and concrete substrates allow direct application of a bonding coat — frame walls always need lath.',
    },
  ],
  'tuckpointing-calculator': [
    {
      q: 'How deep should I cut out a joint for tuckpointing?',
      a: 'BIA Technical Note 7F recommends a minimum repoint depth of 2× the joint width and never less than 5/8 in. For a typical 3/8 in joint, that\'s 3/4 in deep. Cutting shallower means the new mortar pops out within a few years because there isn\'t enough surface area for the bond. Cutting deeper is fine and often necessary on weathered walls — go until you reach sound, undamaged mortar.',
    },
    {
      q: 'What mortar type for tuckpointing an old building?',
      a: 'For 19th- and early 20th-century brick, the original mortar is usually a soft lime-based mix (Type O or weaker) — about 350 psi. Repointing it with modern Type S or M (1,800-2,500 psi) creates a hardness mismatch: the new mortar is stiffer than the brick, and freeze-thaw cycles spall the brick face instead of cracking the joints. For pre-1930 buildings, use a Type O or a custom lime-Portland blend matched to the original. Sample the existing mortar with a chemical analysis if the building is on a historic register.',
    },
    {
      q: 'How many bags of mortar for 200 lin ft of tuckpointing?',
      a: 'For 200 lin ft of 3/8" joint at 3/4" repoint depth, mortar volume is about 0.39 ft³ — call it one 80-lb bag with waste, since a single bag yields about 0.6 ft³. The math scales linearly: double the joint length doubles the bags, and a 1/2" joint at the same depth burns ~33% more than a 3/8" joint. For a full house repoint (often 2,000+ lin ft), expect 4-5 bags plus 15% waste.',
    },
  ],
  'tip-calculator': [
    {
      q: 'How much should I tip at a restaurant?',
      a: '15% is standard for adequate service, 18% for good, 20%+ for excellent. Below 15% sends a clear message about poor service. Coffee/counter service: $1 per drink or 10–15%. Bartender: $1–2 per drink.',
    },
    {
      q: 'Do I tip on the pre-tax or post-tax amount?',
      a: 'Most people tip on the pre-tax total (and that\'s what this calculator uses). Tipping on post-tax adds about 6–10% to the tip depending on local sales tax — a small generosity if you want to round up.',
    },
    {
      q: 'Are large parties auto-tipped?',
      a: 'Many restaurants add an automatic 18% gratuity for parties of 6 or more — check the menu fine print or receipt. If auto-grat is added, you don\'t need to tip again unless service was exceptional.',
    },
  ],
  'wire-gauge-calculator': [
    {
      q: 'What AWG is needed for 20 amps?',
      a: '12 AWG copper handles 20 A at 75°C terminations per NEC 310.16. 14 AWG is rated 15 A and pairs with a 15 A breaker only. Aluminum runs one size larger — 10 AWG aluminum is the minimum for a 20 A circuit.',
    },
    {
      q: 'When does run length force me to upsize?',
      a: 'Voltage drop bumps wire size when the round-trip drop exceeds 3% (NEC 210.19(A) Informational Note 4). On 12 AWG copper at 20 A and 120 V, that hits at roughly 60 ft one-way; on 240 V circuits the limit roughly doubles. Detached buildings, well pumps, and EV chargers are the usual offenders.',
    },
    {
      q: 'Do I need to derate for continuous loads?',
      a: 'Yes. NEC 210.19(A)(1) and 215.2 require conductor and breaker to be sized at 125% of continuous load (anything operating 3 hours or longer — EV chargers, electric heat, sign lighting). Multiply the actual load by 1.25 before entering it in the calculator.',
    },
  ],
  'circuit-breaker-size-calculator': [
    {
      q: 'How are standard breaker sizes set?',
      a: 'NEC 240.6(A) lists the standard sizes: 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100, 110, 125, 150, 175, 200, 225, 250 A and up. Anything else is non-standard and rarely stocked. The calculator always rounds up to the next standard size.',
    },
    {
      q: 'What is the 80% / 125% rule?',
      a: 'Two ways to say the same thing: a continuous load (≥3 hr operation) can be no more than 80% of breaker rating, OR breaker must be sized to 125% of the continuous load. NEC 210.20(A). A 16 A continuous EV charger needs a 20 A breaker; a 20 A non-continuous appliance also lands on a 20 A breaker.',
    },
    {
      q: 'Why are motor breakers oversized?',
      a: 'NEC 430.52 lets motor inverse-time breakers run up to 250% of full-load current to ride out the inrush at startup without nuisance tripping. The motor itself is protected by the overload relay, not the breaker. This is why a 12 A motor can be on a 30 A breaker and still be code-compliant.',
    },
  ],
  'panel-load-calculator': [
    {
      q: 'Is 200-amp service enough for a typical home?',
      a: '200 A handles most homes up to about 3,500 ft² with electric range, dryer, central AC, and a single Level-2 EV charger. Add a second EV, a hot tub, or whole-home electrification (heat pump + induction + heat-pump water heater) and 200 A starts feeling tight — plan for 320 A / 400 A class meter sockets up front.',
    },
    {
      q: 'What is the difference between Standard and Optional method?',
      a: 'NEC 220 Part III "Standard" method (used here) calculates each load with its own demand factor — accurate but conservative. Part IV "Optional" method uses a flat 100% on the first 10 kVA + 40% on the remainder for dwellings; for most all-electric homes it gives a smaller number than the Standard method. Either is code-legal.',
    },
    {
      q: 'Do I need to count gas appliances?',
      a: 'No. Only electric loads count toward the panel calculation. A gas range, gas dryer, or gas water heater contributes zero to the demand. The calculator is built so entering 0 kW for gas appliances drops them out cleanly.',
    },
  ],
  'conduit-bending-calculator': [
    {
      q: 'What is shrink and why does it matter?',
      a: 'When you bend an offset, the conduit gets shorter overall by a small amount per inch of rise — the "shrink." If you cut and thread before bending, you have to start your first mark farther from the box by exactly that amount or your conduit will land short. 30° offsets shrink ¼" per inch of rise; 45° offsets shrink 3⁄8" per inch.',
    },
    {
      q: 'Why do offset multipliers exist?',
      a: 'They convert the rise (vertical step you need) into the distance between the two bend marks on the pipe. 30° = 2.0 (mark-to-mark = 2× rise); 45° = 1.4; 22.5° = 2.6. Without the multiplier you would have to do trig on the job — benders that print these on the handle (Klein, Greenlee) save the math.',
    },
    {
      q: 'How does a 3-bend saddle differ from an offset?',
      a: 'An offset uses two opposite bends to step around an obstacle that is at the side of the run; a saddle uses three bends (center bend at 2× the side angles) to lift over an obstacle that crosses the middle of the run — typically another conduit or a beam. The center bend goes over the obstacle, the two outer bends bring the pipe back to its original line.',
    },
  ],
  'generator-size-calculator': [
    {
      q: 'How many watts to back up the essentials?',
      a: 'A typical "essentials" load — fridge, freezer, furnace blower, lights, phone chargers, modem/router, microwave — totals 3,000–4,500 running watts. Add a well pump and you are at 5,000–6,000 W running with 9,000+ W surge. A 7,500 W portable generator covers most of those scenarios.',
    },
    {
      q: 'What is starting (surge) wattage?',
      a: 'Motors draw 2-4× their running wattage for the half-second they are spinning up. A 700 W fridge surges to ~1,800 W; a ½ HP well pump runs at 1,000 W and surges to 3,000-4,000 W. The generator must have enough surge headroom (sometimes called "peak watts") to swallow the largest single motor without stalling.',
    },
    {
      q: 'Do I need a transfer switch?',
      a: 'Anything wired into the home panel needs a manual transfer switch or a UL-listed interlock kit per NEC 702. Backfeeding through a dryer outlet without an interlock is illegal and can kill a lineman working on the de-energized service. Portable generators powering extension cords directly to appliances are exempt.',
    },
  ],
  'manual-j-heat-load-calculator': [
    {
      q: 'Why is oversized AC bad?',
      a: 'An oversized AC short-cycles — runs for 5 minutes, hits the thermostat, shuts off, repeats. Short cycles never run long enough to wring humidity out of the air, so the house feels clammy at the right temperature. The compressor also wears out fast from constant restarts. Manual J prevents oversizing.',
    },
    {
      q: 'Is this calculator a substitute for a real Manual J?',
      a: 'No. A real Manual J is room-by-room: every wall orientation, window U-value, door, infiltration rate, internal gains, ducts inside vs outside conditioned space — all entered separately and run through Wrightsoft, Cool Calc, or Elite Software. Use this calculator for a sanity check or a rough budget; permits and equipment selection need the full ACCA package.',
    },
    {
      q: 'What if my old AC has been working fine on a rule-of-thumb size?',
      a: '"Working fine" usually means cooling but not dehumidifying — most older systems are oversized 30-50% and the homeowner has just accepted clammy summers. Replacement is the right time to size correctly: a heat pump (variable-speed) handles the design load and modulates down for partial loads, fixing the humidity problem.',
    },
  ],
  'refrigerant-charge-calculator': [
    {
      q: 'How is final refrigerant charge actually verified?',
      a: 'Subcooling for TXV / EEV systems (most modern equipment): measure liquid line temp at the condenser, compare to saturation temp at liquid pressure, target the manufacturer\'s subcooling spec (typically 8-12°F). Superheat for fixed-orifice systems: measure suction line temp at the condenser, compare to saturation at suction pressure, target the chart on the equipment.',
    },
    {
      q: 'Do I need a Section 608 license to handle refrigerant?',
      a: 'Yes. EPA Section 608 of the Clean Air Act requires technician certification to purchase, recover, recycle, or charge refrigerant. Type II covers high-pressure (most residential), universal covers everything. Selling or charging refrigerant without certification is a federal violation with up to $44,539 per day per violation.',
    },
    {
      q: 'Why is R-410A being phased out?',
      a: 'GWP (global warming potential). R-410A has a GWP of 2,088. Under the AIM Act, US residential systems must use refrigerants with GWP under 700 starting January 1, 2025 — R-454B (GWP 466) and R-32 (GWP 675) are the two main replacements. Existing R-410A systems can keep running, but new manufacture is being phased out.',
    },
  ],
  'static-pressure-calculator': [
    {
      q: 'What is "0.5 inches w.c." and why does it matter?',
      a: 'Inches of water column (in. w.c. or in. WC) is the unit the HVAC industry uses for low-pressure measurements. 0.5" w.c. is the static-pressure rating most residential PSC blowers are designed for. Run them at 0.7-0.8" and airflow drops 25-40%, the coil ices in summer, the heat exchanger overheats in winter, and the equipment dies in 5 years instead of 15.',
    },
    {
      q: 'Why is a 1-inch MERV 13 filter such a problem?',
      a: 'Surface area. A 1-inch pleated filter at MERV 13 has too little media to pass the airflow needed without a major pressure drop — typically 0.20-0.30" w.c. on a clean filter, and 0.40-0.50" once it loads up. A 4-inch or 5-inch media cabinet at MERV 13 has 4-5× the surface area and runs 0.10-0.15" — same filtration, half the cost in airflow.',
    },
    {
      q: 'How do I actually measure TESP?',
      a: 'Drill a 3/8" hole in the supply plenum after the coil and another in the return plenum before the filter. Insert a Magnehelic gauge probe (or a digital manometer) in each, set the gauge to read pressure differential, and read the result with the blower running on cooling speed. Plug the holes with grommets when finished. Total cost: $50 for a basic gauge, $300 for a digital manometer.',
    },
  ],
  'ventilation-cfm-calculator': [
    {
      q: 'Does an old leaky house need mechanical ventilation?',
      a: 'Per ASHRAE 62.2-2019, no — homes that test below 5 ACH50 on a blower-door test are required to have mechanical ventilation, but anything above can rely on infiltration. Practically: most pre-2000 homes are leaky enough to skip mechanical ventilation. Anything built or retrofitted to current code (3 ACH50 or tighter) needs it.',
    },
    {
      q: 'What is the best mechanical-ventilation strategy?',
      a: 'Three options. (1) Exhaust-only — just run a bath fan continuously at the calculated CFM. Cheap, depressurizes the house slightly. (2) Supply-only — duct outdoor air to the return side of the air handler. Pressurizes slightly, which keeps moisture out of walls in cold climates. (3) Balanced (HRV/ERV) — best, recovers 60-90% of heat or moisture from the exhaust stream.',
    },
    {
      q: 'How is bath exhaust counted toward whole-house?',
      a: 'A bath fan can pull double duty: provide the local 50 CFM exhaust during shower use, AND run continuously on a low setting to provide whole-house ventilation. Panasonic WhisperGreen and similar fans have dual-speed controls specifically for this. Cheaper and simpler than a separate whole-house exhaust fan.',
    },
  ],
  'heat-loss-calculator': [
    {
      q: 'What is the 99% design temp?',
      a: 'The outdoor temperature your area is colder than only 1% of the heating season hours. ACCA Manual J Table 1 lists it for every US city. Sizing equipment to the absolute lowest temperature on record means oversized equipment that short-cycles 99% of the year. Examples: Chicago -3°F, Boston 6°F, NYC 11°F, Atlanta 23°F, Phoenix 31°F.',
    },
    {
      q: 'Are R-value and U-value the same thing?',
      a: 'They are inverses. R-value is resistance to heat flow (insulation rating). U-value is the rate of heat flow (window rating). U = 1/R. A wall at R-19 has a U-value of 0.053. Windows are sold by U-value because their assemblies (glass + frame + spacer) have non-uniform heat flow — single R-value doesn\'t describe them well.',
    },
    {
      q: 'Why does conductive loss not equal Manual J?',
      a: 'Manual J adds three pieces this calculator doesn\'t: (1) infiltration loss — air leaking through the envelope, typically 0.35 ACH × volume × 0.018 BTU per CFH-°F, (2) duct losses — ducts in unconditioned attics or crawlspaces lose 15-25% of system output, (3) internal gains — bodies, lights, appliances offsetting load. Add 25-40% for full envelope; reduce by internal gains for net heating load.',
    },
  ],
};

export const getFAQ = (slug: string): FAQItem[] => faqs[slug] || [];
