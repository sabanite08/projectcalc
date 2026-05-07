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

        <div className="seo-block" style={{ maxWidth: 760, marginTop: 48 }}>
          <h2>What makes these picks different</h2>
          <p>
            The internet is choking on &ldquo;Top 10 Tools for [Trade]&rdquo;
            articles that are mostly affiliate bait — generic Amazon best-seller
            lists with no real opinion behind them. We took a different
            approach: each trade page lists 12 tools, with 3 marked
            <strong> ESSENTIAL</strong>. The essentials are the tools you can&apos;t
            skip. The other 9 are recommended additions if you&apos;re building
            out a kit or want a quality upgrade.
          </p>
          <p>
            Selection criteria for every pick: the tool has to be <em>still in
            production</em> (no recommending discontinued cult favorites you
            can&apos;t buy), <em>fairly priced for what it does</em> (no
            $400 hammers), and <em>actually used by working pros</em> (not just
            highly rated by hobbyists who used it twice). Where two tools are
            close, we go with the one that has parts and accessories
            available 5 years from now.
          </p>

          <h2 style={{ marginTop: 32 }}>Which trade page to pick</h2>
          <p>
            Service trades and remodel scopes overlap, so you may need tools
            from more than one list. Quick map:
          </p>
          <ul>
            <li>
              <strong>Carpentry</strong> — framing, finish carpentry, deck
              builds, trim work. The most general list — most homeowners
              doing serious DIY want this one first.
            </li>
            <li>
              <strong>Masonry &amp; Siding</strong> — concrete, brick, stone
              veneer, paver patios, exterior siding install or repair. Heavy
              on cutting, mixing, and lifting tools.
            </li>
            <li>
              <strong>Electrical</strong> — receptacle and switch work,
              fixture install, panel work, EV charger install, generator
              wiring. Code-aware tools (loop testers, NCV detectors, AFCI/GFCI
              testers).
            </li>
            <li>
              <strong>Plumbing</strong> — repair and replacement of fixtures,
              drain work, water heater swaps, PEX runs. Heavy on press tools,
              augers, and leak detection.
            </li>
            <li>
              <strong>HVAC</strong> — furnace and AC install/service,
              refrigerant work (Section 608 cert required), ductwork, line
              set runs. Specialty manifold gauges, vacuum pumps, and recovery
              equipment.
            </li>
            <li>
              <strong>Home &amp; DIY</strong> — general homeowner tool kit
              for everything else (paint, drywall patches, basic repairs,
              hanging things, weekend projects).
            </li>
          </ul>

          <h2 style={{ marginTop: 32 }}>Essential vs nice-to-have</h2>
          <p>
            On every trade page, three tools are tagged ESSENTIAL — these are
            the ones you can&apos;t do the work without. The remaining 9 are
            quality additions: faster, more accurate, or specifically suited
            to a common subtask. If you&apos;re starting from zero, buy the
            essentials first and add the others as specific jobs justify them.
          </p>
          <p>
            Brand mix is intentional. We don&apos;t lock to one brand — Milwaukee,
            DEWALT, Klein, Knipex, Wera, Ridgid, Yellow Jacket, Fluke all show
            up depending on what&apos;s genuinely best for the task. If a generic
            $20 tool beats the $200 brand-name version for a residential pro,
            we&apos;ll list the cheap one.
          </p>

          <h2 style={{ marginTop: 32 }}>How we update the lists</h2>
          <p>
            Tool lists are reviewed every 6 months. When a brand discontinues
            a model or a clearly better option launches, the page updates.
            Affiliate links are tracked separately so we can see which picks
            are actually getting clicked — that data informs future updates
            (popular picks get more depth; ignored picks get reconsidered or
            replaced).
          </p>
        </div>
      </section>
    </main>
  );
}
