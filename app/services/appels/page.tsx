import client from '@/lib/sanity'
import { format } from 'date-fns'
import Link from "next/link"

export const dynamic = 'force-dynamic'

export const metadata = {
  title: "Appels d'Offres - GCT",
  description: "Consultez les appels d'offres ouverts et téléchargez les documents nécessaires pour y participer.",
}

export default async function AppelsPage() {
  const Breadcrumb = () => (
    <nav className="flex items-center space-x-2 text-sm mb-8">
      <Link 
        href="/" 
        className="text-gray-600 hover:text-emerald-600 transition-colors duration-200 font-medium"
      >
        Accueil
      </Link>
      
      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
      </svg>
      <span className="text-emerald-700 font-semibold">Appels</span>
    </nav>
  );

  const appels = await client.fetch(`*[_type == "appelOffre"] | order(dateLimite desc){
    _id,
    titre,
    description,
    dateLimite,
    etat,
    "documentUrl": documentPdf.asset->url
  }`)

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <Breadcrumb />
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Appels d'Offres
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
            Découvrez nos opportunités d'affaires et téléchargez les documents nécessaires pour participer
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:gap-6 lg:grid-cols-2 xl:grid-cols-2">
          {appels.map((a: any) => (
            <div 
              key={a._id} 
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Status Badge */}
              <div className="absolute top-6 right-6 z-10">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                  a.etat === 'ouvert' 
                    ? 'bg-green-100 text-green-800 border border-green-200' 
                    : 'bg-red-100 text-red-800 border border-red-200'
                }`}>
                  <div className={`w-2 h-2 rounded-full mr-2 ${
                    a.etat === 'ouvert' ? 'bg-green-500' : 'bg-red-500'
                  }`}></div>
                  {a.etat === 'ouvert' ? 'Ouvert' : 'Fermé'}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pr-20 leading-tight group-hover:text-emerald-700 transition-colors duration-200">
                  {a.titre}
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {a.description}
                </p>

                {/* Date Section */}
                <div className="flex items-center mb-6 p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center justify-center w-10 h-10 bg-emerald-100 rounded-lg mr-4">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Date limite</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {format(new Date(a.dateLimite), 'dd/MM/yyyy')}
                    </p>
                  </div>
                </div>

                {/* Download Button */}
                {a.documentUrl && (
                  <a
                    href={a.documentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Télécharger le cahier des charges (PDF)
                  </a>
                )}
              </div>

              {/* Decorative Element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {appels.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Aucun appel d'offre disponible</h3>
            <p className="text-gray-600">Revenez bientôt pour découvrir de nouvelles opportunités</p>
          </div>
        )}
      </div>
    </div>
  )
}