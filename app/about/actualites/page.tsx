import client from '@/lib/sanity'
import Image from 'next/image'

interface Actualite {
  _id: string
  titre: string
  contenu: string
  publishedAt: string
  imageUrl: string
}

export const dynamic = 'force-dynamic'
export const metadata = {
  title: "Actualités - GCT",
  description: "Consultez les dernières actualités et événements de GCT.",
}

export default async function ActualitesPage() {
  const actualites = await client.fetch(`*[_type == "actualite"] | order(_createdAt desc)[0...3]{
    _id,
    titre,
    contenu,
    publishedAt,
    "imageUrl": image.asset->url
  }`)

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-4">Actualités</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {actualites.map((a: Actualite) => (
          <div key={a._id} className="border rounded-xl p-4 bg-white shadow">
            <Image 
              src={a.imageUrl} 
              alt={a.titre} 
              width={400}
              height={208}
              className="rounded-md w-full h-52 object-cover mb-3" 
            />
            <h2 className="text-xl font-semibold">{a.titre}</h2>
            <p className="text-sm text-gray-600 mb-2">{new Date(a.publishedAt).toLocaleDateString('fr-FR')}</p>
            <p className="text-gray-700">{a.contenu?.slice(0, 200)}...</p>
          </div>
        ))}
      </div>
    </section>
  )
}
