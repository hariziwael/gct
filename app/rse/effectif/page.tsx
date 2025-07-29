import client from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
export const dynamic = 'force-dynamic'
export const metadata = {
  title: "Effectif - GCT",
  description: "Découvrez l'effectif du Groupe Chimique Tunisien, ses effectifs et ses départements.",
}

export default async function EffectifPage() {
  const Breadcrumb = () => (
    <nav aria-label="breadcrumb" className="text-sm text-gray-500 mb-4 flex items-center">
      <Link href="/" className="hover:text-emerald-600 transition-colors focus:outline-none focus:ring focus:ring-emerald-300">Accueil</Link>
      <span className="mx-2 text-gray-400">&raquo;</span>
      <Link href="/rse" className="hover:text-emerald-600 transition-colors focus:outline-none focus:ring focus:ring-emerald-300">RSE</Link>
      <span className="mx-2 text-gray-400">&raquo;</span>
      <span className="font-medium text-emerald-700" aria-current="page">Effectif</span>
    </nav>
  );

  const data = await client.fetch(`*[_type == "effectif"] | order(annee desc){
    _id,
    titre,
    description,
    nombreTotal,
    departement,
    annee,
    "imageUrl": image.asset->url
  }`)

  type EffectifItem = typeof data[0];
  const dataByYear = data.reduce((acc: Record<string, EffectifItem[]>, item: EffectifItem) => {
    const year = item.annee;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(item);
    return acc;
  }, {} as Record<string, EffectifItem[]>);

  // Get years in descending order
  const years = Object.keys(dataByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="bg-emerald-50 py-12">
      <Breadcrumb />
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-emerald-900 to-emerald-700 text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="max-w-4xl">
            <div className="w-20 h-1 bg-cyan-400 mb-6 rounded-full"></div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Notre Effectif
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl">
              Découvrez la composition de nos équipes et l'évolution de nos ressources humaines
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-800/20 to-transparent"></div>
        <div className="absolute bottom-10 left-10 w-8 h-8 rounded-full bg-cyan-400/20 animate-pulse"></div>
      </section>

      {/* Statistics Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-emerald-100">
              <div className="flex items-center">
                <div className="p-3 bg-emerald-100 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Effectif Total</p>
                  <p className="text-2xl font-bold text-emerald-900">
                    {data.reduce((sum: number, item: EffectifItem) => sum + item.nombreTotal, 0)}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xl border border-emerald-100">
              <div className="flex items-center">
                <div className="p-3 bg-green-100 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Départements</p>
                  <p className="text-2xl font-bold text-emerald-900">
                    {[...new Set(data.map((item: EffectifItem) => item.departement))].length}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xl border border-emerald-100">
              <div className="flex items-center">
                <div className="p-3 bg-amber-100 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Historique</p>
                  <p className="text-2xl font-bold text-emerald-900">
                    {years.length} années
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workforce by Year */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-emerald-600 rounded-full"></div>
              <span className="mx-4 text-emerald-600 font-medium uppercase tracking-wider">Évolution</span>
              <div className="w-16 h-1 bg-gradient-to-r from-emerald-600 to-cyan-400 rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900 mb-4">
              Répartition par Année
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez l'évolution de nos effectifs et leur répartition par département
            </p>
          </div>

          {years.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-emerald-100">
              <div className="mx-auto max-w-md">
                <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-2">Aucune donnée disponible</h3>
                <p className="text-gray-600">Les informations sur nos effectifs seront bientôt disponibles</p>
              </div>
            </div>
          ) : (
            <div className="space-y-16">
              {years.map(year => (
                <div key={year} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-emerald-100">
                  <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 px-6 py-4 border-b border-emerald-200">
                    <h2 className="text-2xl font-semibold text-emerald-900 flex items-center">
                      <svg className="w-6 h-6 mr-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Effectif {year}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    {dataByYear[year].map((item: EffectifItem) => (
                      <div
                        key={item._id}
                        className="border border-emerald-100 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
                      >
                        {/* Department Image */}
                        {item.imageUrl ? (
                          <div className="relative h-48 bg-emerald-50 overflow-hidden">
                            <Image
                              src={item.imageUrl}
                              alt={item.titre}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
                          </div>
                        ) : (
                          <div className="h-48 bg-gradient-to-r from-emerald-100 to-cyan-100 flex items-center justify-center">
                            <svg className="w-16 h-16 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </div>
                        )}

                        {/* Department Info */}
                        <div className="p-5">
                          <h3 className="text-xl font-semibold text-emerald-900 mb-2 group-hover:text-emerald-700 transition-colors">
                            {item.titre}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {item.description}
                          </p>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-emerald-50 rounded-lg p-3">
                              <p className="text-xs text-gray-600">Employés</p>
                              <p className="text-lg font-bold text-emerald-800">{item.nombreTotal}</p>
                            </div>
                            <div className="bg-emerald-50 rounded-lg p-3">
                              <p className="text-xs text-gray-600">Département</p>
                              <p className="text-lg font-bold text-emerald-800">{item.departement}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Growth Visualization */}
          <div className="mt-16 bg-gradient-to-r from-emerald-900 to-emerald-700 rounded-2xl p-8 text-white overflow-hidden">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-extrabold mb-4">Évolution de Nos Effectifs</h3>
              <p className="text-emerald-200 mb-6">
                Analyse de la croissance de nos ressources humaines au fil des années
              </p>

              {/* Chart Placeholder */}
              <div className="bg-emerald-800/30 border border-cyan-500/30 rounded-xl h-96 flex items-center justify-center backdrop-blur-sm">
                <div className="text-center">
                  <div className="inline-block p-5 bg-emerald-700/50 rounded-full mb-4">
                    <span className="text-4xl">📈</span>
                  </div>
                  <p className="text-lg font-medium">Graphique d'Évolution des Effectifs</p>
                  <p className="text-emerald-300 mt-2">(Intégration système de visualisation de données)</p>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-white text-emerald-700 font-bold rounded-lg shadow-md hover:bg-emerald-50 transition-colors">
                  Télécharger le rapport complet
                </button>
                <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                  Contacter les RH
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}