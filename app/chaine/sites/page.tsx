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
    <nav aria-label="breadcrumb" className="text-sm text-gray-500 mb-4 flex items-center">
      <Link href="/" className="hover:text-emerald-600 transition-colors focus:outline-none focus:ring focus:ring-emerald-300">Accueil</Link>
      <span className="mx-2 text-gray-400">&raquo;</span>
      <Link href="/chaine" className="hover:text-emerald-600 transition-colors focus:outline-none focus:ring focus:ring-emerald-300">Chaine de Valeur</Link>
      <span className="mx-2 text-gray-400">&raquo;</span>
      <span className="font-medium text-emerald-700" aria-current="page">Sites Miniers</span>
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
    <section className="bg-emerald-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb />

        <h1 className="text-3xl font-extrabold text-emerald-800 mb-6 text-center">Sites Miniers</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sites.map((site: SiteMinier) => (
            <div key={site._id} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {site.imageUrl && (
                <div className="relative h-48">
                  <Image
                    src={site.imageUrl}
                    alt={site.nom}
                    fill
                    className="object-cover w-full"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-emerald-700 mb-2">{site.nom}</h2>
                <p className="text-gray-600 leading-relaxed mb-3">{site.description}</p>
                {site.localisation?.placeName && (
                  <p className="text-sm text-gray-500 mt-2">
                    <span className="mr-1">📍</span>
                    {site.localisation.placeName}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}