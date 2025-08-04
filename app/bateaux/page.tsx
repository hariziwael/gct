import client from '@/lib/sanity'
import { format } from 'date-fns'
import MarineTrafficButton from '../../components/MarineTrafficButton'
import Link from 'next/link'
import Image from 'next/image'
// @ts-expect-error - Sanity types are not defined
import { Bateau } from '@/lib/sanity.types'         

export const dynamic = 'force-dynamic'
export const metadata = {
  title: "Suivi des Bateaux - GCT",
  description: "Consultez le suivi des bateaux et les informations de navigation.",
}

export default async function BateauxPage() {

  const Breadcrumb = () => (
    <nav aria-label="breadcrumb" className="text-sm text-gray-500 mb-4 flex items-center">
      <Link href="/" className="hover:text-emerald-600 transition-colors focus:outline-none focus:ring focus:ring-emerald-300">Accueil</Link>
      <span className="mx-2 text-gray-400">&raquo;</span>
      <span className="font-medium text-emerald-700" aria-current="page">Bateaux</span>
    </nav>
  );


  const bateaux = await client.fetch(`*[_type == "bateaux"] | order(dateArrivee desc){
    _id,
    nom,
    type,
    produit,
    quantite,
    port,
    dateArrivee
  }`)

  // Group ships by arrival status
  const arrivingSoon = bateaux.filter((b: Bateau) => {
    const arrivalDate = new Date(b.dateArrivee);
    const today = new Date();
    const diffTime = arrivalDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 && diffDays <= 7;
  });

  const inPort = bateaux.filter((b: Bateau) => {
    const arrivalDate = new Date(b.dateArrivee);
    const today = new Date();
    return arrivalDate <= today;
  });

  const upcoming = bateaux.filter((b: Bateau) => {
    const arrivalDate = new Date(b.dateArrivee);
    const today = new Date();
    const diffTime = arrivalDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 7;
  });

  const statusGroups = [
    { title: "En Port", ships: inPort, color: "bg-emerald-100 text-emerald-800", icon: "⚓" },
    { title: "Arrivée Imminente", ships: arrivingSoon, color: "bg-amber-100 text-amber-800", icon: "🛳️" },
    { title: "Prochaines Arrivées", ships: upcoming, color: "bg-gray-100 text-gray-800", icon: "⏱️" }
  ];

  return (
    <section className="min-h-screen bg-emerald-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb />
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
            <span className="mx-4 text-emerald-600 font-medium uppercase tracking-wider">Navigation</span>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full"></div>
          </div>
          <h1 className="text-4xl font-bold text-emerald-900 mb-4">Suivi des Bateaux</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Suivez en temps réel les mouvements des navires transportant nos produits chimiques
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-emerald-100">
            <div className="flex items-center">
              <div className="p-3 bg-emerald-100 rounded-lg mr-4">
                <span className="text-2xl">🚢</span>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total des Navires</p>
                <p className="text-2xl font-bold text-emerald-900">{bateaux.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-emerald-100">
            <div className="flex items-center">
              <div className="p-3 bg-emerald-100 rounded-lg mr-4">
                <span className="text-2xl">⚓</span>
              </div>
              <div>
                <p className="text-sm text-gray-600">Actuellement en Port</p>
                <p className="text-2xl font-bold text-emerald-900">{inPort.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-emerald-100">
            <div className="flex items-center">
              <div className="p-3 bg-emerald-100 rounded-lg mr-4">
                <span className="text-2xl">⏱️</span>
              </div>
              <div>
                <p className="text-sm text-gray-600">En Route</p>
                <p className="text-2xl font-bold text-emerald-900">{arrivingSoon.length + upcoming.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Ship Tracking - Grouped by Status */}
        <div className="space-y-16">
          {statusGroups.map((group) => (
            group.ships.length > 0 && (
              <div key={group.title} className="bg-white rounded-2xl shadow-lg border border-emerald-100 overflow-hidden">
                <div className={`px-6 py-4 flex items-center ${group.color}`}>
                  <span className="text-xl mr-3">{group.icon}</span>
                  <h2 className="text-xl font-bold text-emerald-800">{group.title}</h2>
                  <span className="ml-auto bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">
                    {group.ships.length} navire{group.ships.length > 1 ? 's' : ''}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    {group.ships.map((b: Bateau) => (
                    <div
                      key={b._id}
                      className="border border-emerald-100 rounded-xl p-5 hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-emerald-900 group-hover:text-emerald-700 transition-colors">
                          {b.nom}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          b.type === 'import'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {b.type === 'import' ? 'Importation' : 'Exportation'}
                        </span>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center">
                          <div className="bg-emerald-50 p-2 rounded-lg mr-3">
                            <span className="text-emerald-600">📦</span>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Produit</p>
                            <p className="font-medium">{b.produit}</p>
                          </div>
                        </div>

                        <div className="flex items-center">
                          <div className="bg-emerald-50 p-2 rounded-lg mr-3">
                            <span className="text-emerald-600">⚖️</span>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Quantité</p>
                            <p className="font-medium">{b.quantite} tonnes</p>
                          </div>
                        </div>

                        <div className="flex items-center">
                          <div className="bg-emerald-50 p-2 rounded-lg mr-3">
                            <span className="text-emerald-600">📍</span>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Port</p>
                            <p className="font-medium">{b.port}</p>
                          </div>
                        </div>

                        <div className="flex items-center">
                          <div className="bg-emerald-50 p-2 rounded-lg mr-3">
                            <span className="text-emerald-600">📅</span>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Arrivée prévue</p>
                            <p className="font-medium">
                              {format(new Date(b.dateArrivee), 'dd/MM/yyyy')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>

        {/* Map Visualization Placeholder */}
        <div className="mt-16 bg-gradient-to-r from-emerald-700 to-emerald-900 rounded-2xl p-8 text-white overflow-hidden ">

          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Visualisation des Trajets Maritimes</h3>
            <p className="text-emerald-200 mb-6">
              Notre système de suivi en temps réel vous permet de visualiser les positions actuelles de nos navires
            </p>

            <div className="relative bg-emerald-800/30 border border-emerald-500/30 rounded-xl h-96 overflow-hidden">
              <Image
                src="/images/bateaux.jpg"
                alt="bateaux place"
                fill
                className="object-cover z-0" // الصورة في الخلفية
                priority
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center z-10 backdrop-blur-sm text-white text-center px-4">
                <div className="inline-block p-5 bg-emerald-100 rounded-full mb-4">
                  <span className="text-4xl text-emerald-700">🌍</span>
                </div>
                <p className="text-lg font-medium bg-emerald-700/50 rounded-md p-2">Suivez les navires en temps réel, cliquez ci-dessous</p>

              </div>
            </div>


            <MarineTrafficButton />
          </div>
        </div>
      </div>
    </section>
  )
}