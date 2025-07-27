// app/about/vision/page.tsx

import Image from 'next/image';
import Link from 'next/link';

// Content for the Vision page, directly embedded
const gctVisionContent = {
  pageTitle: "Vision du GCT",
  introduction: `Le GCT est connu sur le marché international par la valorisation rentable et responsable des phosphates, permettant ainsi d’assurer la pérennité du secteur et de garantir la rentabilité souhaitée pour toutes les parties prenantes.`,
  annualCapacityTarget: 11, // in millions of tonnes
  capacityAchievementStrategy: `L’augmentation de la capacité de transformation devrait être atteinte en construisant dans le cadre de partenariat, de nouvelles unités de production d’acides et/ou d’engrais.`,
  industryOrientation: `La vision du GCT reste orientée vers l’industrie des engrais et la valorisation en acide purifié de l’acide phosphorique produit par les usines du GCT.`,
  newIndustryPerspectives: `Cette valorisation ouvrira des perspectives prometteuses pour une nouvelle industrie : les engrais solubles et les sels nobles.`,
  // You can place an image in your public folder, e.g., /public/images/gct-vision.jpg
  // Make sure you have this image in your public folder!
  visionImageSrc: "/images/gct-vision.jpg",
  visionImageAlt: "Vision du GCT - Objectif de croissance et d'innovation",
};

export default function GCTVisionPage() {
  // --- Breadcrumb Component ---
  const Breadcrumb = () => (
    <nav className="text-sm text-gray-500 mb-6 flex items-center">
      <Link href="/" className="hover:text-blue-600 transition-colors">Accueil</Link>
      <span className="mx-2">&raquo;</span>
      <Link href="/about" className="hover:text-blue-600 transition-colors">À propos</Link>
      <span className="mx-2">&raquo;</span>
      <span className="font-semibold text-blue-700">Vision du GCT</span>
    </nav>
  );

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 bg-gray-50">
      <Breadcrumb />

      <section className="bg-white shadow-lg rounded-xl p-6 md:p-10 mb-12">
        <h1 className="text-4xl font-extrabold text-blue-800 text-center mb-6">
          {gctVisionContent.pageTitle}
        </h1>

        <div className="grid md:grid-cols-2 gap-8 items-center mt-8">
          <div className="order-2 md:order-1">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {gctVisionContent.introduction}
            </p>

            <h2 className="text-2xl font-bold text-blue-700 mb-3 flex items-center">
                <svg className="w-7 h-7 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a2 2 0 012 2v8a2 2 0 01-2 2H6.5L1 18V6a3 3 0 013-3zM7 9a1 1 0 011-1h1a1 1 0 110 2H8a1 1 0 01-1-1zm3 0a1 1 0 112 0v1a1 1 0 11-2 0V9zm3 0a1 1 0 112 0v3a1 1 0 11-2 0V9z" clipRule="evenodd"></path></svg>
                Notre Objectif
            </h2>
            <p className="text-xl font-semibold text-gray-800 mb-4">
              Atteindre une capacité annuelle de transformation de{' '}
              <span className="text-blue-600">{gctVisionContent.annualCapacityTarget} millions de tonnes</span> de phosphate.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              {gctVisionContent.capacityAchievementStrategy}
            </p>

            <h2 className="text-2xl font-bold text-blue-700 mb-3 flex items-center">
                <svg className="w-7 h-7 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.92 8.51c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg>
                Orientation & Perspectives
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {gctVisionContent.industryOrientation}
            </p>
            <p className="text-gray-700 font-semibold leading-relaxed">
              {gctVisionContent.newIndustryPerspectives}
            </p>
          </div>

          {/* Vision Image */}
          {gctVisionContent.visionImageSrc && (
            <div className="order-1 md:order-2 flex justify-center items-center">
              <div className="relative w-full max-w-md h-64 md:h-96 rounded-xl overflow-hidden shadow-lg border-4 border-blue-300">
                <Image
                  src={gctVisionContent.visionImageSrc}
                  alt={gctVisionContent.visionImageAlt}
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