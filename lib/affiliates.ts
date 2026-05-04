export const AMAZON_TAG = 'projectcalc-20';

export function amazon(asinOrUrl: string): string {
  if (asinOrUrl.startsWith('http')) {
    const u = new URL(asinOrUrl);
    u.searchParams.set('tag', AMAZON_TAG);
    return u.toString();
  }
  return `https://www.amazon.com/dp/${asinOrUrl}?tag=${AMAZON_TAG}`;
}

export function amazonSearch(query: string): string {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${AMAZON_TAG}`;
}
