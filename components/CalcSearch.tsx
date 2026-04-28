'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { calculators } from '@/lib/calculators';

type Hit = {
  slug: string;
  name: string;
  desc: string;
  category: string;
  trade?: string;
  score: number;
};

const categoryShort: Record<string, string> = {
  construction: 'Trades',
  home: 'Home',
  finance: 'Finance',
  utility: 'Utility',
};

function score(query: string, c: typeof calculators[number]): number {
  const q = query.toLowerCase().trim();
  if (!q) return 0;

  const name = c.name.toLowerCase();
  const desc = c.desc.toLowerCase();
  const slug = c.slug.toLowerCase();
  const trade = (c.trade ?? '').toLowerCase();

  // Tokenize query so "voltage drop" matches even if order varies
  const tokens = q.split(/\s+/).filter(Boolean);
  let total = 0;
  for (const t of tokens) {
    let s = 0;
    if (name === t) s = 100;
    else if (name.startsWith(t)) s = 60;
    else if (name.includes(t)) s = 40;
    else if (slug.startsWith(t)) s = 30;
    else if (trade.includes(t)) s = 25;
    else if (desc.includes(t)) s = 20;
    else if (slug.includes(t)) s = 15;
    else return 0; // every token must match somewhere
    total += s;
  }
  return total;
}

export default function CalcSearch() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  const hits = useMemo<Hit[]>(() => {
    if (!query.trim()) return [];
    const scored: Hit[] = [];
    for (const c of calculators) {
      const s = score(query, c);
      if (s > 0) {
        scored.push({
          slug: c.slug,
          name: c.name,
          desc: c.desc,
          category: c.category,
          trade: c.trade,
          score: s,
        });
      }
    }
    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, 8);
  }, [query]);

  // Reset active row when results change
  useEffect(() => {
    setActive(0);
  }, [query]);

  // Global "/" hotkey to focus search
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== '/') return;
      const tag = (document.activeElement?.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'textarea' || (document.activeElement as HTMLElement)?.isContentEditable) return;
      e.preventDefault();
      inputRef.current?.focus();
      setOpen(true);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Close when clicking outside
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  function go(slug: string) {
    setOpen(false);
    setQuery('');
    router.push(`/${slug}`);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Escape') {
      if (query) setQuery('');
      else inputRef.current?.blur();
      setOpen(false);
      return;
    }
    if (!hits.length) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive(a => (a + 1) % hits.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive(a => (a - 1 + hits.length) % hits.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const hit = hits[active];
      if (hit) go(hit.slug);
    }
  }

  return (
    <div className="calc-search" ref={wrapRef}>
      <span className="calc-search-icon" aria-hidden>⌕</span>
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={e => { setQuery(e.target.value); setOpen(true); }}
        onFocus={() => setOpen(true)}
        onKeyDown={onKeyDown}
        placeholder="Search calculators…"
        aria-label="Search calculators"
        autoComplete="off"
        spellCheck={false}
      />
      <span className="calc-search-hint" aria-hidden>{query ? 'ESC' : '/'}</span>

      {open && query.trim() && (
        <div className="calc-search-pop" role="listbox">
          {hits.length === 0 ? (
            <div className="calc-search-empty">No calculators match &ldquo;{query}&rdquo;.</div>
          ) : (
            hits.map((h, i) => (
              <Link
                key={h.slug}
                href={`/${h.slug}`}
                role="option"
                aria-selected={i === active}
                className={'calc-search-row' + (i === active ? ' is-active' : '')}
                onMouseEnter={() => setActive(i)}
                onClick={() => { setOpen(false); setQuery(''); }}
              >
                <div className="calc-search-row-main">
                  <span className="calc-search-name">{h.name}</span>
                  <span className="calc-search-desc">{h.desc}</span>
                </div>
                <span className="calc-search-cat">
                  {h.trade ?? categoryShort[h.category] ?? h.category}
                </span>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}
