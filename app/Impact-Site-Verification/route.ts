export async function GET() {
  return new Response('Impact-Site-Verification: e1cdc443-992b-4317-9ff5-5fb602ce62e3', {
    headers: { 'Content-Type': 'text/plain' },
  });
}
