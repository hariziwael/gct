// app/sitemap.xml/route.ts
export async function GET(): Promise<Response> {
  const baseUrl = 'https://gct.vercel.app'

  const staticRoutes = [
    '',
    '/about',
    '/partenariat',
    '/management',
    '/chaine',
    '/environnement/strategie',
    '/services',
    '/qualite',
    '/recherche/siape',
    '/rse',
    '/contact',
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticRoutes
  .map(
    (route) => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>`
  )
  .join('')}
</urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
