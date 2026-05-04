---
name: social-repurpose
description: Turn a published ProjectCalc blog post or calculator into platform-specific social posts. Use when promoting a new calc/post or filling a content calendar. Outputs ready-to-paste posts for X/Twitter, LinkedIn, Facebook, and Instagram caption.
---

# ProjectCalc Social Repurpose

## What this skill does
Take one published ProjectCalc page (calculator or blog post) and produce 4 platform-tailored posts plus image suggestions. Optimized for the trade/DIY audience that actually uses ProjectCalc — contractors, framers, electricians, weekend DIYers.

## Inputs
- URL or slug of the page to repurpose (e.g., `/drywall-calculator` or `/blog/drywall-estimating-guide`)
- Optional: a specific angle to emphasize (e.g., "the 4x8 vs 4x12 split")

If only a slug is given, read the post/calc file from `lib/posts/` or `lib/calculators.ts` to pull the actual content. Do not paraphrase blind.

## Audience tone
- **X/Twitter**: terse, one strong claim + numbers + URL. No hashtags except 1 max.
- **LinkedIn**: contractor-to-contractor or solopreneur-to-solopreneur — trade insight, why-it-matters framing, light line breaks. 100–180 words. 0–2 hashtags.
- **Facebook**: friendlier, problem-solution, 60-100 words. Aimed at homeowners/DIYers in trade groups.
- **Instagram caption**: hook in first line (caption preview cuts off ~125 chars), then 80-150 words below, 3-5 hashtags at end. Image carries the visual; caption gives the takeaway.

## What to NOT do
- No emoji spam. One emoji max per post if any. No 🚀🔥💯.
- No "Are you a contractor struggling with…" infomercial openings.
- No fake urgency ("Don't make this mistake!").
- No claim of search volume or "this calc is used by 10,000 contractors" — we don't have that data.
- No promising savings figures unless they're directly from the post and verifiable.

## Output format
Return four code blocks, labeled, ready to paste:

```
### X / Twitter (≤280 chars)
[post]

### LinkedIn
[post]

### Facebook
[post]

### Instagram caption
[caption]

### Image suggestions (3 options)
1. [description]
2. [description]
3. [description]
```

Image suggestions should be concrete enough to brief a Canva/Figma/AI image step: subject, style (clean diagram vs photo vs annotated screenshot), key text overlay if any. Prefer screenshots of the calculator with the example numbers filled in — that's the most authentic asset.

## Cross-promotion link
Always link to the canonical URL `https://projectcalc.app/[slug]`. For blog posts, the canonical is `/blog/[slug]`. For calculators, it's `/[calc-slug]`.

## What to leave to the human
After producing posts, end with one line: "Spot-check the formula/numbers against the source post before publishing — I pull from the file but don't run the calc."
