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
      q: 'What\'s the difference between nominal and actual lumber size?',
      a: 'A "2×4" measures 1.5"×3.5" actual. Nominal sizes are what lumber was before drying and planing. Use nominal for board feet calculations and ordering; use actual when measuring fits and clearances.',
    },
    {
      q: 'How much does a board foot of lumber cost?',
      a: 'Construction-grade 2× SPF: $0.60–1.20/BF. Premium framing (Doug fir, southern yellow pine): $1–2/BF. Hardwoods at the lumber yard: oak $4–8/BF, walnut $10–15/BF, maple $5–9/BF. Big-box stores price by piece, not BF.',
    },
    {
      q: 'How do I convert linear feet to board feet?',
      a: 'Multiply nominal thickness × nominal width × length (in feet) ÷ 12. A 2×6 that\'s 8 ft long is 2 × 6 × 8 ÷ 12 = 8 board feet. This calculator does it for you across multiple pieces.',
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
};

export const getFAQ = (slug: string): FAQItem[] => faqs[slug] || [];
