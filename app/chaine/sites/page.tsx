import client from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
interface SiteMinier {
  _id: string
  nom: string
  description: string
  localisation?: {
    placeName: string
    coordinates?: number[]
  }
  imageUrl?: string
}


export const dynamic = 'force-dynamic'
export const metadata = {
  title: "Sites Miniers - GCT",
  description: "Découvrez les sites miniers du Groupe Chimique Tunisien, leurs activités et leurs ressources.",
}
export default async function SitesMinierPage() {


  const Breadcrumb = () => (
    <nav className="text-sm text-gray-500 mb-6 flex items-center">
      <Link href="/" className="hover:text-blue-600 transition-colors">Accueil</Link>
      <span className="mx-2">&raquo;</span>
    <Link href="/chaine" className="hover:text-blue-600 transition-colors">Chaine de Valeur</Link>
    <span className="mx-2">&raquo;</span>
    <span className="font-semibold text-blue-700">Sites Miniers</span>
  </nav>
    );

  const sites = await client.fetch(`*[_type == "siteMinier"]{
    _id,
    nom,
    description,
    localisation,
    "imageUrl": image.asset->url
  }`)

  return (
    <section className="p-6">
      <Breadcrumb />

      <h1 className="text-3xl font-bold mb-6">Sites Miniers</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {sites.map((site: SiteMinier) => (
          <div key={site._id} className="border rounded-lg shadow-md p-4 bg-white">
            {site.imageUrl && (
              <Image
                src={site.imageUrl}
                alt={site.nom}
                width={400}
                height={192}
                className="h-48 w-full object-cover rounded-md mb-3"
              />
            )}
            <h2 className="text-xl font-semibold">{site.nom}</h2>
            <p className="text-gray-600">{site.description}</p>
            {site.localisation?.placeName && (
              <p className="text-sm text-gray-500 mt-2">📍 {site.localisation.placeName}</p>
            )}

          </div>
        ))}
      </div>
    </section>
  )
}
