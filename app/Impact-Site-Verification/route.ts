export async function GET() {
  return new Response('Impact-Site-Verification: 1f643f35-cd2c-4732-b944-dd0d73bca159', {
    headers: { 'Content-Type': 'text/plain' },
  });
}
