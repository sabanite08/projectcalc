/**
 * Single source of truth for the named author across ProjectCalc.
 *
 * WHY THIS FILE EXISTS:
 * Google's E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
 * ranking signals favor content with a NAMED HUMAN AUTHOR over content
 * attributed to an organization. Switching from `author: Organization` to
 * `author: Person` in JSON-LD is the single biggest E-E-A-T fix for a young
 * site like this one.
 *
 * HOW TO SWAP TO YOUR REAL NAME:
 * 1. Change `name` and `firstName` below to your real first name (e.g., "Brad")
 *    or first name + last initial (e.g., "Brad M.")
 * 2. Update `bio` to a 1-2 sentence personal statement (background, why you
 *    built this, where you are based)
 * 3. (Optional but recommended) Add at least one more `sameAs` URL — a real
 *    Twitter, LinkedIn, or personal site at the same name. This is what lets
 *    Google verify the persona is a real person.
 * 4. Commit and push. The byline, JSON-LD schema, and about page all read
 *    from this file — no other changes needed.
 */

export interface Author {
  /** Public-facing name. Real first name (e.g., "Brad") or first + last initial. */
  name: string;
  /** Short form for inline bylines and CTAs. */
  firstName: string;
  /** Role / title. Shown in schema and the about page. */
  jobTitle?: string;
  /** 1-2 sentence personal statement. Real-world basis, not boilerplate. */
  bio: string;
  /** Permalink to where the author's "about" page lives. */
  url: string;
  /**
   * External URLs proving this person is real. Even one helps; more is better.
   * Twitter / LinkedIn / GitHub / personal site / Mastodon all work.
   */
  sameAs: string[];
}

export const author: Author = {
  name: 'Brent J.',
  firstName: 'Brent',
  jobTitle: 'Founder of ProjectCalc',
  bio:
    'Independent solo developer based in the United States. Built ProjectCalc ' +
    'to make construction estimating math fast and free — no spreadsheets, no ' +
    'signup, no paywall. Calculator formulas come from current code editions ' +
    '(NEC, IPC, ACCA, IRC) and industry standards.',
  url: 'https://projectcalc.app/about',
  sameAs: [
    'https://github.com/sabanite08/projectcalc',
  ],
};

/**
 * JSON-LD Person schema fragment. Drop this into any `author:` field in
 * Article, WebApplication, or other schema graphs.
 */
export const authorPersonSchema = {
  '@type': 'Person',
  name: author.name,
  jobTitle: author.jobTitle,
  description: author.bio,
  url: author.url,
  sameAs: author.sameAs,
} as const;

/**
 * Site-wide "last reviewed" date — bump whenever the site has been audited
 * end-to-end (calc formulas, code references, schema). Used as `dateModified`
 * in JSON-LD and as a visible "REVIEWED [LABEL]" line in the meta of every
 * blog and calc page.
 *
 * Important: Google's `dateModified` field is what Google actually reads for
 * freshness. Without it the site looks stale even when content is current.
 *
 * Update both fields together. Format: ISO date + human-readable month/year.
 */
export const LAST_REVIEWED = '2026-05-26';
export const LAST_REVIEWED_LABEL = 'MAY 2026';
