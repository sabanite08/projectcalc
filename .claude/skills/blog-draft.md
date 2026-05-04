---
name: blog-draft
description: Draft a ProjectCalc companion blog post in the house voice. Use when a new calculator needs its companion post, or when expanding an existing post. Outputs a complete .tsx file ready to drop into lib/posts/.
---

# ProjectCalc Blog Draft

## What this skill does
Write a 700–950 word companion blog post in the ProjectCalc voice, formatted as a ready-to-save `.tsx` file matching the existing post pattern in `lib/posts/`.

## Inputs the user must provide
- The calculator slug this post supports (e.g., `drywall-calculator`)
- The target keyword/title (e.g., "How to estimate drywall for a remodel")
- Optional: the formula or method the calc uses (read from `lib/calculators.ts` if not given)

## House voice — non-negotiables
Read 2-3 existing posts in `lib/posts/` before writing (especially `drywall-estimating-guide.tsx` as the reference). Match these patterns:

1. **Opening hook**: One paragraph that names the actual gotcha or the second-trip-to-Home-Depot moment. No "In this article we will discuss…" filler.
2. **Show the formula in mono** using this exact pattern:
   ```jsx
   <p style={{ fontFamily: 'JetBrains Mono, monospace', padding: '12px', background: 'var(--bg-2)', border: '1px solid var(--line)' }}>
     formula here
   </p>
   ```
3. **Worked example with real numbers** right after the formula. "12×14 ft bedroom with 8 ft ceilings…" — concrete, not abstract.
4. **Link back to the calculator** at least once mid-post: `<Link href="/[calc-slug]">[calc name]</Link> does this automatically and lets you…`
5. **Pro vs DIY split** when relevant — what contractors actually do vs what a homeowner doing it once should do.
6. **No fluff transitions** ("Now let's discuss…", "It's important to note…"). Cut them.
7. **Word count: 700–950** unless user specifies the longer plumbing-style format.
8. **Use `&apos;` for apostrophes** and `&times;` or `×` for multiplication, matching existing posts.

## Structural calcs require disclaimers
If the post is for a beam, header, rafter, footing, stair, joist, or any load-bearing calc, the body MUST include:
> **This is an estimate, not an engineering specification.** For permitted work or any structural change, have a licensed engineer or your local building department verify the result.

Place this in its own `<p>` near the top of the post (right after the lede) AND in the closing CTA paragraph.

## File structure to output
```tsx
import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>...</p>
    {/* sections */}
  </>
);

export const post: BlogPost = {
  slug: 'kebab-case-slug',
  title: 'Title Case Title',
  description: 'Meta description, 140-160 chars, contains the target keyword',
  category: 'Construction' | 'Home & DIY' | 'Finance' | 'Utility',
  publishedAt: 'YYYY-MM-DD',  // use today's date
  readTime: 'X min read',
  Body,
};
```

Check `lib/posts/types.ts` to confirm the current `BlogPost` shape before writing — don't assume.

## Process
1. Read 2 reference posts from `lib/posts/` (pick ones in the same category as the target).
2. Read the matching calculator file to get the actual formula being used.
3. Draft the post.
4. Save to `lib/posts/[slug].tsx`.
5. Remind the user they need to wire it into the post index/registry (check how existing posts are registered — likely an export aggregator or a slug map). Do NOT do this step automatically; let user verify the wiring location.

## What NOT to do
- No emojis in body text.
- No "In conclusion" or summary paragraph — end on the calculator CTA or a practical pro tip.
- No invented citations or stats. If you don't know the cost of drywall in 2026, write "around $15-20 per 4×8 sheet at most home centers" not "$17.42 per sheet (NAHB 2025)."
- No tables of contents — the posts are short enough that a TOC is noise.
