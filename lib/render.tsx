import type { ReactNode } from 'react';

const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

export function renderInline(text: string): ReactNode {
  const out: ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  const re = new RegExp(LINK_RE);
  while ((match = re.exec(text)) !== null) {
    if (match.index > last) out.push(text.slice(last, match.index));
    const [, label, href] = match;
    const isAffiliate = /amazon\.com|amzn\.to/.test(href);
    out.push(
      <a
        key={match.index}
        href={href}
        target="_blank"
        rel={isAffiliate ? 'sponsored nofollow noopener' : 'noopener noreferrer'}
        style={{ color: 'var(--hi-vis)' }}
      >
        {label}
      </a>,
    );
    last = match.index + match[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export function stripInlineLinks(text: string): string {
  return text.replace(LINK_RE, '$1');
}
