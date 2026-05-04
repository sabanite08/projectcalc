import type { Metadata } from 'next';
import Link from 'next/link';
import { toolCategories } from '@/lib/tools';

export const metadata: Metadata = {
  title: 'Tools by Trade — Curated Picks for Every Project',
  description: 'Hand-picked tools by trade — carpentry, masonry, electrical, plumbing, HVAC, and home DIY. Curated picks from Amazon and Home Depot.',
  alternates: { canonical: 'https://projectcalc.app/tools' },
};

export default function ToolsHub() {
  return (
    <main>
      <section className="calc-wrap">
        <nav className="breadcrumb">
          <Link href="/">ProjectCalc</Link>
          <span className="sep">/</span>
          <span>Tools</span>
        </nav>
        <div className="calc-header">
          <div>
            <div className="calc-formula">CURATED</div>
            <h1 className="calc-title">TOOLS BY TRADE</h1>
          </div>
        </div>
        <div className="seo-block" style={{ maxWidth: 760 }}>
          <p>
            Six trade-specific lists of the tools we actually recommend. Each
            page is short, opinionated, and skips the affiliate-bait product
            roundup nonsense — these are the picks pros and serious DIYers
            reach for. Links go to Amazon today; we&apos;ll be adding Home Depot
            options as we&apos;re approved on more programs.
          </p>
          <p className="affiliate-note" style={{ marginTop: 16 }}>
            Tool links on these pages are affiliate links — we may earn a small
            commission if you buy, at no extra cost to you.
          </p>
        </div>

        <div className="trade-grid" style={{ marginTop: 32 }}>
          {toolCategories.map(c => (
            <Link key={c.slug} href={`/tools/${c.slug}`} className="trade-tile">
              <div className="cat-name">{c.shortName}</div>
              <div className="cat-desc">{c.tools.length} curated picks</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
