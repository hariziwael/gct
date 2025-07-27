// app/sitemap.xml/route.ts
import { type MetadataRoute } from 'next'

export async function GET(): Promise<MetadataRoute.Sitemap> {
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



  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
    }))
  ]
}
