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
    <nav aria-label="breadcrumb" className="text-sm text-gray-500 mb-4 flex items-center">
      <Link href="/" className="hover:text-emerald-600 transition-colors focus:outline-none focus:ring focus:ring-emerald-300">Accueil</Link>
      <span className="mx-2 text-gray-400">&raquo;</span>
      
      <span className="font-medium text-emerald-700" aria-current="page">Vision du GCT</span>
    </nav>
  );

  return (
    <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb />

        <section className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Hero Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-700 opacity-70"></div>
            <Image
              src={gctVisionContent.visionImageSrc}
              alt={gctVisionContent.visionImageAlt}
              width={1200} // Adjust as needed
              height={600} // Adjust as needed
              className="object-cover w-full h-80 sm:h-96"
              priority // Load this image with high priority
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center drop-shadow-lg">
                {gctVisionContent.pageTitle}
              </h1>
            </div>
          </div>

          {/* Content Section */}
          <div className="px-4 py-8 sm:px-8 sm:py-12">
            <div className=" mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {gctVisionContent.introduction}
                  </p>

                  <h2 className="text-2xl font-semibold text-emerald-800 mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    Notre Objectif
                  </h2>
                  <p className="text-xl font-semibold text-gray-800 mb-4">
                    Atteindre une capacité annuelle de transformation de{' '}
                    <span className="text-emerald-600">{gctVisionContent.annualCapacityTarget} millions de tonnes</span> de phosphate.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {gctVisionContent.capacityAchievementStrategy}
                  </p>

                  <h2 className="text-2xl font-semibold text-emerald-800 mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 15v2m-1.023-3h2.046m5.475 14H21a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2.586m-1.025-4h1.023m-1.023-3.423l1.51-1.887M9.664 10.341l1.51-1.887m-1.023-3.423l1.51-1.887M12 7.108l1.51-1.887m-1.023 3.423l1.51 1.887M9.664 13.659l1.51 1.887"></path></svg>
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
                    <div className="relative w-full max-w-md h-64 md:h-96 rounded-xl overflow-hidden shadow-lg border-4 border-emerald-300">
                      <Image
                        src={gctVisionContent.visionImageSrc}
                        alt={gctVisionContent.visionImageAlt}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                        priority // Mark as priority if it's a key image on the page
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

       
      </div>
    </div>
  );
}