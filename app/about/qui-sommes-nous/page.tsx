// app/about/qui-sommes-nous/page.tsx
import Link from 'next/link';
import Image from 'next/image';

const companyContent = {
  title: "Qui Sommes-Nous ?",
  introduction: `Après une longue période d'exportation du phosphate brut, la Tunisie s'est orientée vers la transformation et la valorisation de ce minerai, et ce par l'implantation d'une industrie locale de production d'Acide Phosphorique et d'Engrais Phosphatés.`,
  globalLeader: {
    text: `Le Groupe Chimique Tunisien est un leader mondial dans la transformation de phosphate en Acide Phosphorique Marchand (MGA), en Phosphate d'Ammonium (DAP, MAP), en Super Phosphate (TSP, SSP) et en Phosphate de Calcium (DCP). Sa capacité nominale annuelle est d'environ 6,5 millions de tonnes de phosphate naturel.`,
    capacity: "6,5 millions de tonnes de phosphate naturel",
  },
  additionalProducts: `En outre, le GCT produit le Nitrate d’Ammonium Agricole et le Nitrate d'Ammonium Poreux destinés principalement au marché local.`,
  productionSites: {
    heading: "Nos Sites de Production",
    locations: ["Gabès", "Skhira", "M'dhilla"],
  },
  employees: "4200 personnes (en 2024)",
  mission: {
    heading: "Notre Mission",
    points: [
      "Création d'une forte valeur ajoutée à partir du phosphate tunisien",
      "Production et exportation de l'Acide Phosphorique et des Engrais Solides à travers le monde",
      "Création d'emplois et amélioration de la vie sociale des citoyens",
    ],
  },
  imageAltText: "Siège de Makar",
  imageSrc: "/images/siege-makar.jpg",
};

export default function QuiSommesNousPage() {
  // --- Breadcrumb Component ---
  const Breadcrumb = () => (
    <nav className="text-sm text-gray-500 mb-6 flex items-center">
      <Link href="/" className="hover:text-emerald-600 transition-colors">Accueil</Link>
      <span className="mx-2">&raquo;</span>
      <Link href="/about" className="hover:text-emerald-600 transition-colors">À propos</Link>
      <span className="mx-2">&raquo;</span>
      <span className="font-semibold text-emerald-700">Qui-Sommes-Nous</span>
    </nav>
  );

  return (
    <div className="bg-gradient-to-b from-emerald-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-emerald-900 to-emerald-700 text-white">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <Breadcrumb />
              <div className="w-20 h-1 bg-cyan-400 mb-6 rounded-full"></div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                {companyContent.title}
              </h1>
              <p className="text-xl text-emerald-100 max-w-3xl">
                {companyContent.introduction}
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="relative w-64 h-64 rounded-full border-4 border-white shadow-2xl overflow-hidden">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-800/20 to-transparent"></div>
        <div className="absolute bottom-10 left-10 w-8 h-8 rounded-full bg-cyan-400/20 animate-pulse"></div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-6xl py-16">
        {/* Introduction & Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border border-emerald-100 shadow-sm">
            <h2 className="text-2xl font-bold text-emerald-800 mb-4">Notre Histoire</h2>
            <p className="text-gray-700 mb-6">
              Fondé en 1947, le Groupe Chimique Tunisien (GCT) a évolué d'une entreprise d'extraction de phosphate brut 
              à un leader mondial dans la transformation de phosphates. Avec plus de 75 ans d'expertise, nous avons 
              constamment innové pour valoriser cette ressource naturelle au profit de l'économie tunisienne.
            </p>
            
            <div className="flex items-center bg-blue-50 p-4 rounded-lg">
              <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                <span className="text-emerald-600 text-xl">🏭</span>
              </div>
              <p className="text-gray-700">
                Aujourd'hui, nous transformons le phosphate tunisien en produits à haute valeur ajoutée pour le marché mondial.
              </p>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden h-80 border-4 border-white shadow-lg">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
          </div>
        </div>

        {/* Global Leader Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-cyan-50 to-white rounded-2xl p-8 border border-cyan-100 shadow-sm">
            <div className="flex items-center mb-6">
              <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                <span className="text-emerald-600 text-xl">🌍</span>
              </div>
              <h2 className="text-2xl font-bold text-emerald-800">Un Leader Mondial</h2>
            </div>
            
            <p className="text-gray-700 mb-6">
              {companyContent.globalLeader.text}
            </p>
            
            <div className="bg-gradient-to-r from-emerald-100 to-cyan-100 p-6 rounded-lg">
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-800 mb-2">
                  {companyContent.globalLeader.capacity}
                </div>
                <p className="text-emerald-700">Capacité annuelle de production</p>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-emerald-100 text-center">
                <div className="text-3xl text-emerald-600 mb-2">🔄</div>
                <h3 className="font-bold text-emerald-800">Acide Phosphorique</h3>
                <p className="text-gray-600 text-sm">Marchand (MGA)</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-emerald-100 text-center">
                <div className="text-3xl text-emerald-600 mb-2">🌱</div>
                <h3 className="font-bold text-emerald-800">Engrais Phosphatés</h3>
                <p className="text-gray-600 text-sm">DAP, MAP, TSP, SSP</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-emerald-100 text-center">
                <div className="text-3xl text-emerald-600 mb-2">🧪</div>
                <h3 className="font-bold text-emerald-800">Phosphate de Calcium</h3>
                <p className="text-gray-600 text-sm">DCP</p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Products & Team */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 border border-amber-100 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                  <span className="text-emerald-600 text-xl">➕</span>
                </div>
                <h2 className="text-2xl font-bold text-emerald-800">Produits Complémentaires</h2>
              </div>
              
              <p className="text-gray-700 mb-6">
                {companyContent.additionalProducts}
              </p>
              
              <div className="bg-gradient-to-r from-amber-100 to-yellow-100 p-6 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-emerald-800">Nitrate d'Ammonium Agricole</h3>
                    <p className="text-gray-600">Pour le marché local</p>
                  </div>
                  <div className="text-4xl text-amber-600">🌾</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-amber-100 to-yellow-100 p-6 rounded-lg mt-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-emerald-800">Nitrate d'Ammonium Poreux</h3>
                    <p className="text-gray-600">Applications spécialisées</p>
                  </div>
                  <div className="text-4xl text-amber-600">🧪</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                  <span className="text-emerald-600 text-xl">👥</span>
                </div>
                <h2 className="text-2xl font-bold text-emerald-800">Notre Équipe</h2>
              </div>
              
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-emerald-800 mb-2">
                  {companyContent.employees.split(' ')[0]}
                </div>
                <p className="text-emerald-700">collaborateurs dédiés</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-emerald-100 p-2 rounded-lg mr-4">
                    <span className="text-emerald-600">👷</span>
                  </div>
                  <p>Spécialistes techniques et ingénieurs</p>
                </div>
                <div className="flex items-center">
                  <div className="bg-emerald-100 p-2 rounded-lg mr-4">
                    <span className="text-emerald-600">🔬</span>
                  </div>
                  <p>Chercheurs et développeurs</p>
                </div>
                <div className="flex items-center">
                  <div className="bg-emerald-100 p-2 rounded-lg mr-4">
                    <span className="text-emerald-600">🤝</span>
                  </div>
                  <p>Experts en relations internationales</p>
                </div>
                <div className="flex items-center">
                  <div className="bg-emerald-100 p-2 rounded-lg mr-4">
                    <span className="text-emerald-600">🌱</span>
                  </div>
                  <p>Professionnels de l'agro-industrie</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Production Sites */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border border-green-100 shadow-sm">
            <div className="flex items-center mb-6">
              <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                <span className="text-emerald-600 text-xl">📍</span>
              </div>
              <h2 className="text-2xl font-bold text-emerald-800">
                {companyContent.productionSites.heading}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {companyContent.productionSites.locations.map((location, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-emerald-100">
                  <div className="h-48 bg-gradient-to-br from-emerald-100 to-cyan-100 flex items-center justify-center">
                    <div className="text-5xl text-emerald-600">
                      {location === "Gabès" ? "🏭" : location === "Skhira" ? "⚓" : "⛰️"}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-emerald-800 mb-2">{location}</h3>
                    <p className="text-gray-600">
                      {location === "Gabès" 
                        ? "Centre de production d'acide phosphorique et d'engrais" 
                        : location === "Skhira" 
                          ? "Site portuaire et unité de transformation" 
                          : "Zone d'extraction et de traitement primaire"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 border border-purple-100 shadow-sm">
            <div className="flex items-center mb-6">
              <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                <span className="text-emerald-600 text-xl">🎯</span>
              </div>
              <h2 className="text-2xl font-bold text-emerald-800">
                {companyContent.mission.heading}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {companyContent.mission.points.map((point, index) => (
                <div key={index} className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-xl border border-emerald-100">
                  <div className="text-5xl text-emerald-600 mb-4">
                    {index === 0 ? "💰" : index === 1 ? "🌎" : "👨‍👩‍👧‍👦"}
                  </div>
                  <h3 className="text-lg font-bold text-emerald-800 mb-2">
                    {point.split(':')[0]}
                  </h3>
                  <p className="text-gray-700">
                    {point.split(':')[1] || "Au cœur de notre engagement quotidien"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border border-emerald-100 shadow-sm">
            <div className="flex items-center mb-6">
              <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                <span className="text-emerald-600 text-xl">❤️</span>
              </div>
              <h2 className="text-2xl font-bold text-emerald-800">
                Nos Valeurs Fondamentales
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center p-6 bg-white rounded-xl border border-emerald-100">
                <div className="text-4xl text-emerald-600 mb-4">🔒</div>
                <h3 className="font-bold text-emerald-800 mb-2">Intégrité</h3>
                <p className="text-gray-600 text-sm">Éthique professionnelle et transparence</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl border border-emerald-100">
                <div className="text-4xl text-emerald-600 mb-4">♻️</div>
                <h3 className="font-bold text-emerald-800 mb-2">Durabilité</h3>
                <p className="text-gray-600 text-sm">Respect de l'environnement et développement durable</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl border border-emerald-100">
                <div className="text-4xl text-emerald-600 mb-4">🚀</div>
                <h3 className="font-bold text-emerald-800 mb-2">Innovation</h3>
                <p className="text-gray-600 text-sm">Recherche constante de solutions améliorées</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl border border-emerald-100">
                <div className="text-4xl text-emerald-600 mb-4">🤝</div>
                <h3 className="font-bold text-emerald-800 mb-2">Collaboration</h3>
                <p className="text-gray-600 text-sm">Travail d'équipe et partenariats solides</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-emerald-700 to-emerald-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">En savoir plus sur le GCT</h3>
          <p className="text-emerald-100 max-w-2xl mx-auto mb-6">
            Découvrez le message du Directeur Général et notre vision pour l'avenir de l'industrie chimique tunisienne.
          </p>
          <Link 
            href="/about/dg" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-emerald-900 bg-white hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            Message du Directeur Général
            <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
          </Link>
        </div>
      </div>
    </div>
  );
}