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
      "Création d'une forte valeur ajoutée à partir du phosphate tunisien ;",
      "Production et exportation de l'Acide Phosphorique et des Engrais Solides à travers le monde ;",
      "Création d'emplois et amélioration de la vie sociale des citoyens.",
    ],
  },
  imageAltText: "Siège de Makar", // Alt text for the image
  imageSrc: "/images/siege-makar.jpg", // Path to your image in the public folder
};

export default function QuiSommesNousPage() {

  // --- Breadcrumb Component ---
  const Breadcrumb = () => (
    <nav className="text-sm text-gray-500 mb-6 flex items-center">
      <Link href="/" className="hover:text-blue-600 transition-colors">Accueil</Link>
      <span className="mx-2">&raquo;</span>
      
      <Link href="/about" className="hover:text-blue-600 transition-colors">
      À propos</Link>
      <span className="mx-2">&raquo;</span>
      <span className="font-semibold text-blue-700">Qui-Sommes-Nous</span>
    </nav>
  );

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 bg-gray-50">
      <Breadcrumb />
      <section className="bg-white shadow-lg rounded-xl p-6 md:p-10 mb-12">
        <h1 className="text-4xl font-extrabold text-blue-800 text-center mb-6">
          {companyContent.title}
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center md:text-left">
          {companyContent.introduction}
        </p>

        {/* Image Section for "siege Makar" */}
        <div className="my-8 text-center">
          <div className="relative w-full max-w-2xl mx-auto h-64 md:h-96 rounded-lg overflow-hidden shadow-lg border border-gray-200">
            <Image
              src={companyContent.imageSrc}
              alt={companyContent.imageAltText}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
          <p className="mt-4 text-sm text-gray-500 italic">
            Image: {companyContent.imageAltText}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Global Leader Section */}
          <div className="p-6 bg-blue-50 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center">
              <svg className="w-7 h-7 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535A1 1 0 0111.414 15l-3.293-3.293a1 1 0 01.707-1.707H10a1 1 0 01.707.293l1.5 1.5a1 1 0 010 1.414z" clipRule="evenodd"></path></svg>
              Un Leader Mondial
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {companyContent.globalLeader.text}
            </p>
            <p className="text-blue-600 font-semibold">
              Capacité annuelle: {companyContent.globalLeader.capacity}
            </p>
          </div>

          {/* Additional Products & Employee Count */}
          <div className="p-6 bg-green-50 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-green-700 mb-4 flex items-center">
              <svg className="w-7 h-7 mr-3 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-3-5a1 1 0 112 0v2a1 1 0 11-2 0v-2zm3-4a1 1 0 112 0v4a1 1 0 11-2 0V9zm3-3a1 1 0 112 0v6a1 1 0 11-2 0V6z" clipRule="evenodd"></path></svg>
              Nos Produits & Équipe
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {companyContent.additionalProducts}
            </p>
            <p className="text-gray-700 mb-2">
              Le GCT emploie plus de <span className="font-semibold text-green-800">{companyContent.employees}</span>.
            </p>
          </div>
        </div>

        {/* Production Sites */}
        <div className="mt-12 p-6 bg-yellow-50 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-yellow-700 mb-4 text-center md:text-left flex items-center">
            <svg className="w-7 h-7 mr-3 text-yellow-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
            {companyContent.productionSites.heading}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            {companyContent.productionSites.locations.map((location, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-md shadow-sm border border-yellow-200">
                <svg className="w-6 h-6 mr-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                <span className="text-lg font-medium text-gray-800">{location}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Our Mission */}
        <div className="mt-12 p-6 bg-purple-50 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-purple-700 mb-4 text-center md:text-left flex items-center">
            <svg className="w-7 h-7 mr-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path></svg>
            {companyContent.mission.heading}
          </h2>
          <ul className="list-none space-y-3 mt-6">
            {companyContent.mission.points.map((point, index) => (
              <li key={index} className="flex items-start text-gray-700 leading-relaxed">
                <svg className="w-6 h-6 mr-3 text-purple-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Optional: Simple CTA at the bottom */}
      <div className="mt-12 text-center py-8 border-t border-gray-200">
        <h3 className="text-2xl font-semibold text-blue-800 mb-6">En savoir plus sur le GCT</h3>
        <a href="/about/dg" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Message du Directeur Général
          <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path><path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
        </a>
      </div>
    </div>
  );
}