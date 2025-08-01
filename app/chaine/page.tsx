"use client"
import client from '@/lib/sanity'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

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

interface DepotPhosphate {
  _id: string
  nom: string
  capacite: string
  localisation: string
  description: string
  imageUrl?: string
}

interface Usine {
  _id: string
  nom: string
  dateDemarrage?: string
  capaciteAnnuelle?: string
  capacites?: Array<{
    type: string
    capacite: string
    unite: string
  }>
  description?: string
  imageUrl?: string
}

interface Production {
  _id: string
  titre: string
  description: string
  annee: number
  quantite: string
  imageUrl?: string
}

export default function ChaineValeurPage() {
  const [sites, setSites] = useState<SiteMinier[]>([])
  const [depots, setDepots] = useState<DepotPhosphate[]>([])
  const [usines, setUsines] = useState<Usine[]>([])
  const [productions, setProductions] = useState<Production[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [sitesData, depotsData, usinesData, productionsData] = await Promise.all([
          client.fetch(`*[_type == "siteMinier"]{
            _id,
            nom,
            description,
            localisation,
            "imageUrl": image.asset->url
          }`),
          client.fetch(`*[_type == "depotPhosphate"]{
            _id,
            nom,
            capacite,
            localisation,
            description,
            "imageUrl": image.asset->url
          }`),
          client.fetch(`*[_type == "usine"]{
            _id,
            nom,
            dateDemarrage,
            capaciteAnnuelle,
            capacites,
            description,
            "imageUrl": image.asset->url
          }`),
          client.fetch(`*[_type == "production"] | order(annee desc){
            _id,
            titre,
            description,
            annee,
            quantite,
            "imageUrl": image.asset->url
          }`)
        ])
        
        setSites(sitesData)
        setDepots(depotsData)
        setUsines(usinesData)
        setProductions(productionsData)
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const Breadcrumb = () => (
    <nav aria-label="breadcrumb" className="text-sm text-gray-500 mb-8 flex items-center">
      <Link href="/" className="hover:text-emerald-600 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-300 rounded-md px-1">
        Accueil
      </Link>
      <span className="mx-2 text-gray-400">&raquo;</span>
      <span className="font-medium text-emerald-700" aria-current="page">Chaîne de Valeur</span>
    </nav>
  )

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-600 mx-auto"></div>
          <p className="mt-4 text-lg text-emerald-800">Chargement des données...</p>
        </div>
      </div>
    )
  }

  return (
    <section className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50 min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb />
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-4">
            Chaîne de Valeur
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez l&apos;ensemble de notre chaîne de valeur intégrée, de l&apos;extraction minière 
            à la production finale, en passant par le stockage et la transformation.
          </p>
        </div>

        {/* Value Chain Flow */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
            <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-lg">
              <span className="text-2xl mr-2">⛏️</span>
              <span className="font-semibold text-emerald-700">Sites Miniers</span>
            </div>
            <div className="text-emerald-400 text-2xl">→</div>
            <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-lg">
              <span className="text-2xl mr-2">🏗️</span>
              <span className="font-semibold text-emerald-700">Dépôts</span>
            </div>
            <div className="text-emerald-400 text-2xl">→</div>
            <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-lg">
              <span className="text-2xl mr-2">🏭</span>
              <span className="font-semibold text-emerald-700">Usines</span>
            </div>
            <div className="text-emerald-400 text-2xl">→</div>
            <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-lg">
              <span className="text-2xl mr-2">📦</span>
              <span className="font-semibold text-emerald-700">Production</span>
            </div>
          </div>
        </div>

        {/* Interactive Tabs */}
        <ChaineValeurTabs 
          sites={sites}
          depots={depots}
          usines={usines}
          productions={productions}
        />
      </div>
    </section>
  );
}

function ChaineValeurTabs({ 
  sites, 
  depots, 
  usines, 
  productions 
}: {
  sites: SiteMinier[]
  depots: DepotPhosphate[]
  usines: Usine[]
  productions: Production[]
}) {
  const [activeTab, setActiveTab] = useState('sites');

  const tabs = [
    { id: 'sites', label: 'Sites Miniers', icon: '⛏️', count: sites.length },
    { id: 'depots', label: 'Dépôts de Phosphate', icon: '🏗️', count: depots.length },
    { id: 'usines', label: 'Usines', icon: '🏭', count: usines.length },
    { id: 'production', label: 'Production', icon: '📦', count: productions.length }
  ];

  const TabButton = ({ 
    isActive, 
    onClick, 
    children, 
    icon,
    count 
  }: { 
    isActive: boolean
    onClick: () => void
    children: React.ReactNode
    icon: string
    count: number
  }) => (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 relative ${
        isActive
          ? 'bg-emerald-600 text-white shadow-xl transform scale-105'
          : 'bg-white text-emerald-700 hover:bg-emerald-50 hover:shadow-lg shadow-md'
      }`}
    >
      <span className="text-xl">{icon}</span>
      <div className="text-left">
        <div className="font-semibold">{children}</div>
        <div className={`text-xs ${isActive ? 'text-emerald-100' : 'text-gray-500'}`}>
          {count} élément{count > 1 ? 's' : ''}
        </div>
      </div>
      {isActive && (
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-emerald-600 rotate-45"></div>
      )}
    </button>
  );

  return (
    <>
      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-12 bg-gray-50 p-4 rounded-2xl">
        {tabs.map((tab) => (
          <TabButton
            key={tab.id}
            isActive={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
            icon={tab.icon}
            count={tab.count}
          >
            {tab.label}
          </TabButton>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[600px]">
        {activeTab === 'sites' && (
          <SitesSection sites={sites} />
        )}
        {activeTab === 'depots' && (
          <DepotsSection depots={depots} />
        )}
        {activeTab === 'usines' && (
          <UsinesSection usines={usines} />
        )}
        {activeTab === 'production' && (
          <ProductionSection productions={productions} />
        )}
      </div>
    </>
  );
}

// ... (SitesSection, DepotsSection, UsinesSection, ProductionSection remain unchanged)

function SitesSection({ sites }: { sites: SiteMinier[] }) {
  return (
    <div className="animate-fadeIn">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-emerald-800 mb-2">Sites Miniers</h2>
        <p className="text-gray-600">Nos sites d&apos;extraction de phosphate à travers la Tunisie</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sites.map((site) => (
          <div key={site._id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
            {site.imageUrl && (
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={site.imageUrl}
                  alt={site.nom}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            )}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-emerald-700 mb-3 group-hover:text-emerald-600 transition-colors">
                {site.nom}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">{site.description}</p>
              {site.localisation?.placeName && (
                <div className="flex items-center text-sm text-gray-500 bg-gray-50 rounded-lg p-3">
                  <span className="mr-2 text-emerald-500">📍</span>
                  <span className="font-medium">{site.localisation.placeName}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DepotsSection({ depots }: { depots: DepotPhosphate[] }) {
  return (
    <div className="animate-fadeIn">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-emerald-800 mb-2">Dépôts de Phosphate</h2>
        <p className="text-gray-600">Nos installations de stockage et de traitement du phosphate</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {depots.map((depot) => (
          <div key={depot._id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
            {depot.imageUrl && (
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={depot.imageUrl}
                  alt={depot.nom}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            )}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-emerald-700 mb-3 group-hover:text-emerald-600 transition-colors">
                {depot.nom}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">{depot.description}</p>
              <div className="space-y-2">
                {depot.capacite && (
                  <div className="flex items-center justify-between bg-emerald-50 rounded-lg p-3">
                    <span className="font-semibold text-gray-700">Capacité:</span>
                    <span className="text-emerald-600 font-bold">{depot.capacite} tonnes</span>
                  </div>
                )}
                {depot.localisation && (
                  <div className="flex items-center text-sm text-gray-500 bg-gray-50 rounded-lg p-3">
                    <span className="mr-2 text-emerald-500">📍</span>
                    <span className="font-medium">{depot.localisation}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function UsinesSection({ usines }: { usines: Usine[] }) {
  return (
    <div className="animate-fadeIn">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-emerald-800 mb-2">Nos Usines</h2>
        <p className="text-gray-600">Nos installations de transformation et de production</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {usines.map((usine) => (
          <div key={usine._id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
            {usine.imageUrl && (
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={usine.imageUrl}
                  alt={usine.nom}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            )}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-emerald-700 mb-3 group-hover:text-emerald-600 transition-colors">
                {usine.nom}
              </h3>

              <div className="space-y-3 mb-4">
                {usine.dateDemarrage && (
                  <div className="flex items-center text-sm text-gray-600 bg-blue-50 rounded-lg p-2">
                    <span className="mr-2">📅</span>
                    <span className="font-medium">Démarrage: {usine.dateDemarrage.toString()}</span>
                  </div>
                )}

                {usine.capaciteAnnuelle && (
                  <div className="flex items-center text-sm text-gray-600 bg-green-50 rounded-lg p-2">
                    <span className="mr-2">⚙️</span>
                    <span className="font-medium">Capacité: {usine.capaciteAnnuelle}</span>
                  </div>
                )}
              </div>

              {usine.capacites && usine.capacites.length > 0 && (
                <div className="mb-4">
                  {/* @ts-ignore */}
                  <p className="text-sm font-semibold text-gray-700 mb-2">Détails des capacités:</p>
                  {/* @ts-ignore */}
                  <div className="space-y-1">
                    {usine.capacites.map((cap, index) => (
                      <div key={index} className="text-sm text-gray-600 bg-gray-50 rounded p-2">
                        {/* @ts-ignore */}
                                <span className="font-medium">{cap.type}:</span> {cap.capacite} {cap.unite}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {usine.description && (
                <p className="text-gray-600 leading-relaxed">{usine.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductionSection({ productions }: { productions: Production[] }) {
  return (
    <div className="animate-fadeIn">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-emerald-800 mb-2">Production</h2>
        <p className="text-gray-600">Notre production annuelle et nos réalisations</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productions.map((item) => (
          <div key={item._id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
            {item.imageUrl && (
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.titre}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {item.annee}
                </div>
              </div>
            )}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-emerald-700 mb-3 group-hover:text-emerald-600 transition-colors">
                {item.titre}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between bg-blue-50 rounded-lg p-3">
                  <span className="font-semibold text-gray-700">Année:</span>
                  <span className="text-blue-600 font-bold">{item.annee}</span>
                </div>
                <div className="flex items-center justify-between bg-emerald-50 rounded-lg p-3">
                  <span className="font-semibold text-gray-700">Quantité:</span>
                  <span className="text-emerald-600 font-bold">{item.quantite} tonnes</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}