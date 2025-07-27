// app/about/strategie/page.tsx

import Image from 'next/image';
import Link from 'next/link';

// Static content for the page, directly embedded
const strategyContent = {
  pageTitle: "Stratégie du GCT",
  populationIntro: {
    year: 2060,
    text: "une dizaine de milliards de personnes vivront sur cette planète. Cette croissance de la population s'associe à d'énormes défis mondiaux. C'est à cet effet que la production des engrais chimiques s'avère apporter de nombreuses possibilités pour améliorer la situation et enrayer la famine.",
  },
  fertilizerDevelopment: {
    intro: "Grâce au développement technologique des procédés chimiques et afin de répondre aux besoins pressants de la population future, le GCT a mis au point différentes variétés et types d'engrais dérivant de l'Acide Phosphorique et de l'Ammoniac, citons:",
    types: [
      {
        name: "Le DAP \"Royal\"",
        description: "classé 1er à l'échelle mondiale, c'est l'engrais le plus populaire ;",
      },
      {
        name: "Le TSP",
        description: "un engrais à base de phosphate contenant un seul élément fertilisant: le Phosphore ;",
      },
      {
        name: "Le MAP",
        description: "un engrais binaire avec deux éléments fertilisants: l'Azote et le Phosphore ;",
      },
      {
        name: "Le NA (Nitrate d'Ammonium)",
        description: "renferme deux types d'azote: l'Azote ammoniacal et l'Azote Nitrique.",
      },
    ],
    // Image for the fertilizer development section
    imageSrc: "/images/fertilizer-types.jpg", // Place this image in public/images/
    imageAlt: "Différents types d'engrais produits par le GCT",
  },
  strategicPrinciples: {
    intro: "Nous agissons en conformité avec les principes stratégiques suivants:",
    principles: [
      "Nous assurons une valeur ajoutée à nos clients ;",
      "Nous innovons pour rendre nos clients plus satisfaits ;",
      "Nous conduisons des solutions durables ;",
      "Nous assumons la responsabilité du développement de notre personnel ;",
      "Nous devons être à jour et nous devons investir dans nos capacités.",
    ],
  },
  enrichment: `En outre, nos engrais peuvent être enrichis avec des macros et micro éléments : (S, Mg, Ca, B, Zn, Mn ...) et ce dans le but d'améliorer la fertilisation des terres et d'assurer une bonne proportion de micronutriments selon les conditions du sol.`,
  overallStrategy: `La stratégie du GCT combine à la fois la réussite économique, la responsabilité sociétale et la protection de l'environnement.`,
};

// You can make this dynamic if you fetch it from an API or calculate it
// For this example, let's just use a placeholder or generate a random one for demo
const currentWorldPopulation = Math.floor(8.1 * 1_000_000_000 + Math.random() * 200_000_000); // Between 8.1 and 8.3 billion
// For a truly dynamic, real-time number, you would fetch this from a specialized API.

export default function GCTStrategyPage() {
// --- Breadcrumb Component ---
const Breadcrumb = () => (
  <nav className="text-sm text-gray-500 mb-6 flex items-center">
    <Link href="/" className="hover:text-blue-600 transition-colors">Accueil</Link>
    <span className="mx-2">&raquo;</span>
    
    <Link href="/management" className="hover:text-blue-600 transition-colors">Management</Link>
    <span className="mx-2">&raquo;</span>
    <span className="font-semibold text-blue-700">Strategie du GCT</span>
  </nav>
);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 bg-gray-50">
      <Breadcrumb />

      <section className="bg-white shadow-lg rounded-xl p-6 md:p-10 mb-12">
        <h1 className="text-4xl font-extrabold text-blue-800 text-center mb-6">
          {strategyContent.pageTitle}
        </h1>

        {/* Part One: Population mondiale */}
        <div className="mb-10 text-center bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center justify-center">
            <svg className="w-8 h-8 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zm-6 9A7 7 0 0110 18a7 7 0 01-5-2.22V17a1 1 0 11-2 0v-2.11C1 12.15 1 9.5 1 9.5a1 1 0 011-1h16a1 1 0 011 1v2.11c0 2.65 0 5.3-2 6.11V17a1 1 0 11-2 0v-2.22A7 7 0 0113 15z"></path></svg>
            Population Mondiale Actuelle
          </h2>
          <p className="text-5xl font-extrabold text-blue-900 mb-4 animate-pulse">
            {currentWorldPopulation.toLocaleString('fr-FR')}
          </p>
          <p className="text-lg text-gray-700 italic">
            Estimation en temps réel.
          </p>
        </div>

        {/* Part Two: Stratégie du GCT - Introduction */}
        <div className="mb-10 p-6 rounded-lg bg-green-50 shadow-sm border border-green-200">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Stratégie du GCT</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            En {strategyContent.populationIntro.year}, {strategyContent.populationIntro.text}
          </p>
        </div>

        {/* Part Three: Développement technologique et types d'engrais */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-bold text-purple-700 mb-4 flex items-center">
              <svg className="w-7 h-7 mr-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.49 3.17C10.687 2.148 9.38 2.148 8.577 3.17L3.904 12.02A1 1 0 004.857 13h9.286a1 1 0 00.953-1.18l-4.673-8.85zM12 15a1 1 0 100 2h1a1 1 0 100-2h-1zm-4 0a1 1 0 100 2h1a1 1 0 100-2H8z" clipRule="evenodd"></path></svg>
              Développement de Nos Engrais
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {strategyContent.fertilizerDevelopment.intro}
            </p>
            <ul className="list-none space-y-4">
              {strategyContent.fertilizerDevelopment.types.map((type, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-1 text-purple-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <div>
                    <strong className="text-gray-900">{type.name} :</strong>{' '}
                    <span className="text-gray-700">{type.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2 flex justify-center items-center">
            {strategyContent.fertilizerDevelopment.imageSrc && (
              <div className="relative w-full max-w-md h-64 md:h-80 rounded-xl overflow-hidden shadow-lg border-4 border-purple-300">
                <Image
                  src={strategyContent.fertilizerDevelopment.imageSrc}
                  alt={strategyContent.fertilizerDevelopment.imageAlt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                  priority
                />
              </div>
            )}
          </div>
        </div>

        {/* Part Four: Principes stratégiques et enrichissement */}
        <div className="mb-10 p-6 rounded-lg bg-yellow-50 shadow-sm border border-yellow-200">
          <h2 className="text-2xl font-bold text-yellow-700 mb-4 flex items-center">
            <svg className="w-7 h-7 mr-3 text-yellow-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11 2a1 1 0 011 1v1.5a1 1 0 01-1 1h-2a1 1 0 01-1-1V3a1 1 0 011-1h2zM9 8a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zM5 14a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            Nos Principes Stratégiques
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {strategyContent.strategicPrinciples.intro}
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            {strategyContent.strategicPrinciples.principles.map((principle, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-1 text-yellow-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                <span>{principle}</span>
              </li>
            ))}
          </ul>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {strategyContent.enrichment}
          </p>

          <p className="text-xl font-bold text-gray-800 leading-relaxed">
            <span className="text-yellow-700">La stratégie du GCT</span> combine à la fois{' '}
            <span className="text-green-600">la réussite économique</span>,{' '}
            <span className="text-blue-600">la responsabilité sociétale</span> et{' '}
            <span className="text-purple-600">la protection de l'environnement</span>.
          </p>
        </div>
      </section>

      {/* Optional: Navigation back to About page */}
      <div className="mt-12 text-center py-8 border-t border-gray-200">
        <Link href="/about" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <svg className="mr-2 -ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"></path></svg>
          Retour à À Propos
        </Link>
      </div>
    </div>
  );
}