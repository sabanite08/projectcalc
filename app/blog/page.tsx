import Link from 'next/link';
import type { Metadata } from 'next';
import { posts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Blog — Honest Project Guides',
  description: 'Practical guides on construction, home improvement, and project finance. Honest, no-fluff articles for trades and homeowners.',
  alternates: { canonical: 'https://projectcalc.app/blog' },
  openGraph: {
    title: 'ProjectCalc Blog — Honest Project Guides',
    description: 'Practical guides on construction, home improvement, and project finance.',
    url: 'https://projectcalc.app/blog',
    type: 'website',
  },
};

const categoryLabels: Record<string, string> = {
  home: 'HOME & DIY',
  construction: 'TRADES',
  finance: 'FINANCE',
};

const blogLdJson = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'ProjectCalc', item: 'https://projectcalc.app' },
    { '@type': 'ListItem', position: 2, name: 'Blog' },
  ],
};

export default function BlogIndex() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLdJson) }}
      />
      <section className="hero">
        <div className="hero-tag">FIELD GUIDES</div>
        <h1>Project<br /><span className="accent">guides.</span></h1>
        <p>
          Honest articles on construction, home improvement, and project
          finance. Real numbers, real tradeoffs, no SEO fluff.
        </p>
      </section>

      <section className="grid-section">
        <div className="section-label">
          <span>ALL POSTS</span>
          <span className="count">{posts.length} ARTICLES</span>
        </div>
        <div className="post-list">
          {posts.map(p => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="post-card">
              <div className="post-meta">
                <span>{categoryLabels[p.category]}</span>
                <span>·</span>
                <span>{p.readTime} MIN READ</span>
              </div>
              <h2 className="post-title">{p.title}</h2>
              <p className="post-excerpt">{p.excerpt}</p>
              <div className="post-cta">READ →</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
