// app/about/objectifs/page.tsx

import Image from 'next/image';
import Link from 'next/link';

// Static content for the page, directly embedded
const objectifsContent = {
  pageTitle: "Objectifs du GCT",
  partOne: `La roche phosphatée est extraite depuis le bassin minier de Gafsa, avant d'être acheminée par voie ferrée aux différents sites de production du GCT à Gabès, Skhira, Sfax et M'dhilla, pour être utilisée comme matière première dans la production de l'Acide Phosphorique et des engrais.`,
  partTwoIntro: `Pour atteindre l'excellence, l'optimisation des coûts, l'assurance qualité, le respect de l'environnement et du capital humain constituent les valeurs clés du développement industriel au sein du GCT.`,
  objectivesList: [
    `L'augmentation de la productivité ;`,
    `Le soutien au développement tout en préservant l'équilibre financier ;`,
    `La préservation de la meilleure qualité pour ses produits ;`,
    `La contribution au développement économique régional ;`,
    `La réduction de la consommation spécifique d'énergie ;`,
    `La préservation de l'environnement et le respect des exigences environnementales ;`,
    `L'adoption des meilleures technologies disponibles: "BAT" dans les unités de production.`,
  ],
  // You can place an image in your public folder, e.g., /public/images/gct-objectifs.jpg
  // Make sure you have this image in your public folder!
  imageSrc: "/images/gct-objectifs.jpg",
  imageAlt: "Objectifs du GCT: usine moderne et environnement respecté",
};

export default function GCTObjectifsPage() {
  // --- Breadcrumb Component ---
  const Breadcrumb = () => (
    <nav className="text-sm text-gray-500 mb-6 flex items-center">
      <Link href="/" className="hover:text-blue-600 transition-colors">Accueil</Link>
      <span className="mx-2">&raquo;</span>
      
      <Link href="/management" className="hover:text-blue-600 transition-colors">Management</Link>
      <span className="mx-2">&raquo;</span>
      <span className="font-semibold text-blue-700">Objectifs du GCT</span>
    </nav>
  );

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 bg-gray-50">
      <Breadcrumb />

      <section className="bg-white shadow-lg rounded-xl p-6 md:p-10 mb-12">
        <h1 className="text-4xl font-extrabold text-blue-800 text-center mb-8">
          {objectifsContent.pageTitle}
        </h1>

        {/* Part One: Introduction about raw material and sites */}
        <div className="mb-10 text-center bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center justify-center">
            <svg className="w-7 h-7 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.5a1 1 0 01-1 1h-2a1 1 0 01-1-1V3a1 1 0 011-1h2zM9 8a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zM5 14a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            De la Roche à l'Engrais
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {objectifsContent.partOne}
          </p>
        </div>

        {/* Part Two: Values, Objectives, and Image */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
          <div className="order-2 md:order-1">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {objectifsContent.partTwoIntro}
            </p>

            <h2 className="text-2xl font-bold text-green-700 mb-4 flex items-center">
              <svg className="w-7 h-7 mr-3 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              Nos Objectifs Principaux
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
              {objectifsContent.objectivesList.map((objective, index) => (
                <li key={index}>
                  <span className="font-semibold text-gray-800">{objective}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image for Part Two */}
          {objectifsContent.imageSrc && (
            <div className="order-1 md:order-2 flex justify-center items-center">
              <div className="relative w-full max-w-md h-64 md:h-96 rounded-xl overflow-hidden shadow-lg border-4 border-green-300">
                <Image
                  src={objectifsContent.imageSrc}
                  alt={objectifsContent.imageAlt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                  priority // Mark as priority if it's a key image on the page
                />
              </div>
            </div>
          )}
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