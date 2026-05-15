import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { toolCategories, getToolCategory } from '@/lib/tools';

export async function generateStaticParams() {
  return toolCategories.map(c => ({ category: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const cat = getToolCategory(category);
  if (!cat) return { title: 'Tools not found' };
  return {
    title: { absolute: cat.metaTitle },
    description: cat.metaDesc,
    alternates: { canonical: `https://projectcalc.app/tools/${cat.slug}` },
    openGraph: {
      title: cat.metaTitle,
      description: cat.metaDesc,
      url: `https://projectcalc.app/tools/${cat.slug}`,
      type: 'website',
    },
  };
}

export default async function ToolsCategory({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const cat = getToolCategory(category);
  if (!cat) notFound();

  const others = toolCategories.filter(c => c.slug !== cat.slug);

  const ldJson = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ProjectCalc', item: 'https://projectcalc.app' },
      { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://projectcalc.app/tools' },
      { '@type': 'ListItem', position: 3, name: cat.shortName },
    ],
  };

  return (
    <main>
      <section className="calc-wrap">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
        />
        <nav className="breadcrumb">
          <Link href="/">ProjectCalc</Link>
          <span className="sep">/</span>
          <Link href="/tools">Tools</Link>
          <span className="sep">/</span>
          <span>{cat.shortName}</span>
        </nav>
        <div className="calc-header">
          <div>
            <div className="calc-formula">{cat.shortName.toUpperCase()}</div>
            <h1 className="calc-title">{cat.name.toUpperCase()}</h1>
          </div>
        </div>

        <div className="seo-block" style={{ maxWidth: 760 }}>
          <p>{cat.intro}</p>
          <p className="affiliate-note" style={{ marginTop: 16 }}>
            Links below are affiliate links — we may earn a small commission if
            you buy, at no extra cost to you. Picks are based on what tradespeople
            and serious DIYers actually use.
          </p>
        </div>

        <div className="tools-list">
          {cat.tools.map((t, i) => (
            <a
              key={i}
              href={t.url}
              target="_blank"
              rel="sponsored nofollow noopener"
              className="tool-card"
            >
              <div className="tool-header">
                <div className="tool-name">
                  {t.essential && <span className="tool-essential">ESSENTIAL</span>}
                  {t.name}
                </div>
                <div className="tool-retailer">View on {t.retailer}</div>
              </div>
              <div className="tool-blurb">{t.blurb}</div>
            </a>
          ))}
        </div>

        <div className="related" style={{ marginTop: 48 }}>
          <div className="section-label">
            <span>OTHER TRADES</span>
          </div>
          <div className="related-list">
            {others.map(o => (
              <Link key={o.slug} href={`/tools/${o.slug}`}>
                <div className="cat-name" style={{ fontSize: 14 }}>{o.shortName}</div>
                <div className="cat-desc">{o.tools.length} curated picks</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
