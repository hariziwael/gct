import client from '@/lib/sanity'
import Image from 'next/image'
import { FaCalendarAlt, FaArrowRight, FaNewspaper, FaUsers, FaChartLine } from 'react-icons/fa'
import NewsletterSubscription from '@/components/NewsletterSubscription'

interface Actualite {
  _id: string
  titre: string
  contenu: string
  publishedAt: string
  imageUrl: string
  category: string
}

export const dynamic = 'force-dynamic'
export const metadata = {
  title: "Actualités - GCT",
  description: "Consultez les dernières actualités et événements de Groupe Chimique Tunisien.",
}

export default async function ActualitesPage() {
  const actualites = await client.fetch(`*[_type == "actualite"] | order(_createdAt desc)[0...6]{
    _id,
    titre,
    contenu,
    publishedAt,
    category,
    "imageUrl": image.asset->url
  }`)

  // Group news by category
  const categories = [
    { id: 'corporate', name: 'Actualités Corporates', icon: <FaNewspaper className="mr-2" /> },
    { id: 'innovation', name: 'Innovation & Recherche', icon: <FaChartLine className="mr-2" /> },
    { id: 'sustainability', name: 'Développement Durable', icon: <FaUsers className="mr-2" /> }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
     

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Navigation */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button 
                key={category.id}
                className="px-6 py-3 bg-white text-emerald-800 rounded-full border border-emerald-300 hover:bg-emerald-50 font-medium flex items-center transition-colors shadow-sm"
              >
                {category.icon}
                {category.name}
              </button>
            ))}
            <button className="px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 font-medium flex items-center transition-colors">
              Toutes les actualités
              <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>

        {/* Featured News */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-emerald-900 mb-8 pb-2 border-b border-emerald-200 flex items-center">
            <FaNewspaper className="mr-3 text-emerald-600" />
            Actualités en Vedette
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {actualites.slice(0, 2).map((a: Actualite) => (
              <div 
                key={a._id} 
                className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-80">
                  <Image 
                    src={a.imageUrl} 
                    alt={a.titre} 
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-900/90 to-transparent p-6">
                    <div className="flex items-center text-emerald-100 mb-2">
                      <FaCalendarAlt className="mr-2" />
                      <span>
                        {new Date(a.publishedAt).toLocaleDateString('fr-FR', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {a.titre}
                    </h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {a.category || "Actualité"}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {a.contenu}
                  </p>
                  <button
                   
                   className="flex items-center text-emerald-600 font-medium group-hover:text-emerald-800 transition-colors">
                    Lire la suite
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        

        
        

        
        {/* Newsletter Subscription */}
      <div className="bg-gradient-to-r from-emerald-700 to-emerald-800 rounded-2xl p-8 md:p-12 text-white mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-2xl font-bold mb-4">Restez informé</h2>
              <p className="text-emerald-100">
                Abonnez-vous à notre newsletter pour recevoir les dernières actualités, 
                événements et informations importantes directement dans votre boîte de réception.
              </p>
            </div>
            <div className="md:w-1/2 w-full">
              <NewsletterSubscription />
            </div>
          </div>
        </div>
      </div>

        
        
      </div>
    </div>
  )
}