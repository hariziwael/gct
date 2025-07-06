import client from '@/lib/sanity'
import Image from 'next/image'

interface Partenaire {
  _id: string
  nom: string
  description: string
  siteWeb?: string
  logoUrl: string
}

export const dynamic = 'force-dynamic'
export const metadata = {
  title: "Partenaires - GCT",
  description: "Découvrez les partenaires de GCT et leurs contributions.",
}

export default async function PartenairesPage() {
  const partenaires = await client.fetch(`*[_type == "partenaire"]{
    _id,
    nom,
    description,
    siteWeb,
    "logoUrl": logo.asset->url
  }`)

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-4">Nos Partenaires</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {partenaires.map((p: Partenaire) => (
          <div key={p._id} className="border rounded-xl p-4 bg-white shadow text-center">
            <Image 
              src={p.logoUrl} 
              alt={p.nom} 
              width={200}
              height={112}
              className="h-28 mx-auto mb-3 object-contain" 
            />
            <h2 className="text-xl font-semibold">{p.nom}</h2>
            <p className="text-gray-700 mb-2">{p.description}</p>
            {p.siteWeb && (
              <a href={p.siteWeb} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                Voir le site
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
