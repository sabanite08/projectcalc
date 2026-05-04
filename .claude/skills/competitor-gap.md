---
name: competitor-gap
description: Find bottom-of-funnel keyword gaps for ProjectCalc. Use when planning new calculators or blog posts. Outputs a ranked list of high-buyer-intent search terms competitors rank for that ProjectCalc doesn't have a page for yet.
---

# ProjectCalc Competitor Gap Research

## What this skill does
Find keyword gaps where (a) people are searching, (b) competitors rank, (c) ProjectCalc has no calculator or blog page yet. Output a ranked list focused on **bottom-of-funnel** intent — searches where the user already knows what they need and is one step from doing it.

## Inputs the user must provide
- A topic, trade, or competitor URL to investigate (e.g., "drywall", "inchcalculator.com/concrete", "framing")
- Optional: their own keyword data (Ahrefs/SEMrush export, Google Search Console pull)

If they don't provide data, use WebFetch on competitor URLs to read the actual page content. Do NOT invent keywords from thin air — every suggestion must trace back to real evidence (a competitor page, a "people also ask" box, a forum thread).

## Competitors to check
Primary calculator competitors (always reference at least 2):
- inchcalculator.com — strongest in construction/DIY math, deep blog content
- omnicalculator.com — broad calculator directory
- calculator.net — high authority, less specialized
- thecalculatorsite.com — UK-leaning but ranks well US

Editorial competitors:
- thespruce.com / bobvila.com / familyhandyman.com — DIY editorial
- finehomebuilding.com / jlconline.com — pro construction
- homedepot.com/c (project guides) and lowes.com/n/how-to (the most-cited DIY pages)

## Filters to apply (this is what most AI SEO advice skips)
For each candidate keyword, check:

1. **Intent type.** Reject informational-only ("what is drywall"). Keep:
   - **Calc intent**: "how many [bags/sheets/feet] of X for Y" — direct calculator opportunity
   - **Sizing/spec intent**: "what size [header/conduit/breaker] for X" — calc + companion post
   - **Comparison-to-action**: "4x8 vs 4x12 drywall for [room]" — companion post
   - **Estimating intent**: "cost to [task] X sq ft" — calc + post
2. **Page status.** Search the existing `lib/calculators.ts` and `lib/posts/` for overlap. If a calc or post already covers it, skip or note as "expand existing."
3. **Niche fit.** ProjectCalc covers construction trades (carpentry, masonry, electrical, plumbing, HVAC), home/DIY materials, finance basics, utility math. Reject anything outside (no recipes, no fitness, no medical).
4. **Disclaimer-required flag.** If the keyword is structural (beam, header, rafter, footing, stair) — flag it. Per project policy, structural calcs need "estimate only — verify with engineer" disclaimer in note + result row + blog CTA.

## Output format
Return a markdown table:

| Rank | Keyword | Intent type | Evidence (URL) | ProjectCalc gap | Suggested page type | Structural? |
|------|---------|-------------|----------------|-----------------|--------------------|-----|
| 1 | how many bags of mortar per 100 block | Calc | inchcalculator.com/mortar-calculator/ | No mortar calc yet | New calc + 800-word post | No |

Cap at 15 rows. Rank by: (a) clarity of buyer intent, (b) thinness of competitor page (we can do better), (c) fit with existing site categories.

## Honest limits to surface
End every report with a "What I couldn't verify" section listing:
- Search volume (no Ahrefs access here — recommend user spot-check 2-3 in Ubersuggest free or Google Trends)
- Competitor difficulty score (same)
- Whether the page would actually rank (depends on backlinks + on-page; we control the latter)

Do NOT make up search volume numbers. Saying "1,200 searches/mo" without a data source is a lie that the user might act on.
