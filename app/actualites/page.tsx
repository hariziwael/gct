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
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full"></div>
            <span className="mx-4 text-blue-600 font-medium">Actualités Récentes</span>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"></div>
          </div>
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Les Dernières Nouvelles</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Restez informé des développements et innovations au sein du Groupe Chimique Tunisien
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
          {actualites.map((a: Actualite) => (
            <div 
              key={a._id} 
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100"
            >
              {/* Image Container */}
              <div className="relative h-100 overflow-hidden">
                <Image 
                  src={a.imageUrl} 
                  alt={a.titre} 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Date Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow">
                  <span className="text-blue-700 font-medium">
                    {new Date(a.publishedAt).toLocaleDateString('fr-FR', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric'
                    })}
                  </span>
                </div>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {a.titre}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-24">
                  {a.contenu}
                </p>
                <button className="flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors">
                  Lire la suite
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  )
}