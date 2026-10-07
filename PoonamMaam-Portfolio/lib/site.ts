// Public URL of the site. Set NEXT_PUBLIC_SITE_URL in Vercel once a custom
// domain is connected; until then the Vercel production URL is used.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')
