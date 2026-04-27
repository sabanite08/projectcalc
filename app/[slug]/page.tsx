import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { calculators, getCalculator } from '@/lib/calculators';
import CalculatorView from '@/components/CalculatorView';

const categoryLabels: Record<string, string> = {
  construction: 'TRADES',
  home: 'HOME & DIY',
  finance: 'FINANCE',
  utility: 'UTILITY',
};

export async function generateStaticParams() {
  return calculators.map(c => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const calc = getCalculator(slug);
  if (!calc) return { title: 'Calculator not found' };
  return {
    title: { absolute: calc.metaTitle },
    description: calc.metaDesc,
    alternates: { canonical: `https://projectcalc.app/${calc.slug}` },
    openGraph: {
      title: calc.metaTitle,
      description: calc.metaDesc,
      url: `https://projectcalc.app/${calc.slug}`,
      type: 'website',
    },
  };
}

export default async function CalcPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const calc = getCalculator(slug);
  if (!calc) notFound();

  // Find related calcs in same category, exclude current
  const related = calculators
    .filter(c => c.category === calc.category && c.slug !== calc.slug)
    .slice(0, 6);

  // JSON-LD structured data for Google
  const ldJson = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: calc.metaTitle.split(' | ')[0],
    description: calc.metaDesc,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    url: `https://projectcalc.app/${calc.slug}`,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };

  return (
    <main>
      <section className="calc-wrap">
        <nav className="breadcrumb">
          <Link href="/">ProjectCalc</Link>
          <span className="sep">/</span>
          <Link href={`/#${calc.category}`}>{categoryLabels[calc.category]}</Link>
          <span className="sep">/</span>
          <span>{calc.title}</span>
        </nav>

        <div className="calc-header">
          <div>
            <div className="calc-formula">{calc.name.toUpperCase()}</div>
            <h1 className="calc-title">{calc.title}</h1>
          </div>
          <div className="calc-formula">{calc.formula}</div>
        </div>

        <CalculatorView slug={calc.slug} />

        <div className="seo-block">
          <h2>About this calculator</h2>
          <p>{calc.seoIntro}</p>
        </div>

        {related.length > 0 && (
          <div className="related">
            <div className="section-label">
              <span>RELATED CALCULATORS</span>
            </div>
            <div className="related-list">
              {related.map(r => (
                <Link key={r.slug} href={`/${r.slug}`}>
                  <div className="cat-name" style={{ fontSize: 14 }}>{r.name}</div>
                  <div className="cat-desc">{r.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
        />
      </section>
    </main>
  );
}
