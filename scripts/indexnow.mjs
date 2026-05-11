#!/usr/bin/env node
// Pings IndexNow (Bing/Yandex/etc) with every URL in the live sitemap.
// Run: npm run indexnow
//      npm run indexnow -- --url https://projectcalc.app/some-new-page
//
// IndexNow accepts up to 10,000 URLs per POST; projectcalc has ~140 so we send all in one call.

const HOST = 'projectcalc.app';
const KEY = '249255cc50652892d9263dc62a526185';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';

async function loadUrls() {
  const cliUrls = process.argv
    .slice(2)
    .reduce((acc, arg, i, arr) => {
      if (arg === '--url' && arr[i + 1]) acc.push(arr[i + 1]);
      return acc;
    }, []);
  if (cliUrls.length) return cliUrls;

  const res = await fetch(SITEMAP_URL);
  if (!res.ok) throw new Error(`sitemap fetch failed: ${res.status}`);
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].trim());
  if (!urls.length) throw new Error('no <loc> entries found in sitemap');
  return urls;
}

async function main() {
  const urlList = await loadUrls();
  console.log(`Submitting ${urlList.length} URL(s) to IndexNow…`);

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
  });

  const body = await res.text();
  console.log(`Status: ${res.status} ${res.statusText}`);
  if (body) console.log(`Body: ${body}`);

  // 200 = accepted, 202 = accepted (validation pending)
  if (res.status !== 200 && res.status !== 202) process.exit(1);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
