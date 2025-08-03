// app/environnement/strategie/page.tsx

import Link from 'next/link';
import Image from 'next/image';

export default function EnvironnementStrategiePage() {
  const content = {
    pageTitle: "Stratégie Environnementale du GCT",
    partOne: {
      intro: `Les questions environnementales évoquées lors de la production de l'acide phosphorique et des engrais concernent la pollution de l'air, de l'eau et de la terre.
      Dans chaque partie de la chaîne de production, il y a lieu de maintenir des conditions propices de sécurité et de santé, en évitant les dangers et les nocivités pour tous ceux qui travaillent à proximité de ces produits et pour les citoyens qui vivent autour des lieux de production.
      Le GCT a fait des progrès significatifs pour réduire les nuisances environnementales et améliorer les rendements.`,
      image: {
        src: "/images/environnement-strategie.png", // Ensure this image exists in public/images/
        alt: "Vue sur une installation industrielle du GCT avec un environnement propre et des cheminées sans fumée",
      },
    },
    partTwo: {
      heading: "Stratégie environnementale du GCT",
      intro: `Le GCT a mis en œuvre une nouvelle stratégie environnementale ayant pour objectif de réconcilier la société avec son environnement.`,
      axes: [
        `Mise en œuvre d’un plan de réhabilitation environnementale des unités de production.`,
        `Adoption des meilleures technologies disponibles «BAT».`,
        `Adoption d’une politique de gestion durable de l'eau.`,
        `Proposition d’un mode de gestion environnementale concernant la mise en terril du phosphogypse.`,
        `Surveillance environnementale continue.`,
      ],
    },
    partThree: {
      heading: "Objectifs de la Stratégie Environnementale du GCT",
      objectives: [
        `Respect strict des normes en vigueur pour les émissions de gaz.`,
        `Garantir en continue le principe de « Zéro rejet liquide » pour tout ce qui est effluent liquide.`,
        `Assurer une mise en terril du phosphogypse conformément aux normes environnementales.`,
        `Préserver les ressources en eau.`,
        `Améliorer la gestion et la Production d'énergie.`,
        `Préserver une meilleure image de marque publique et de meilleures relations entreprise-communauté.`,
      ],
    },
    partFour: {
      intro: "En savoir plus :",
      documents: [
        {
          title: "Projet de mise à niveau environnementale (PDF)",
          href: "/pdf/projet-mise-a-niveau-environnementale.pdf", // Ensure this PDF exists
        },
        {
          title: "Stratégie Environnementale du GCT (PDF)",
          href: "/pdf/strategie-environnementale-gct.pdf", // Ensure this PDF exists
        },
      ],
    },
  };

  return (
    <div className="bg-emerald-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="text-sm text-gray-500 mb-4 flex items-center">
          <Link href="/" className="hover:text-emerald-600 transition-colors focus:outline-none focus:ring focus:ring-emerald-300">Accueil</Link>
          <span className="mx-2 text-gray-400">&raquo;</span>
          
          <span className="font-medium text-emerald-700" aria-current="page">Stratégie Environnementale</span>
        </nav>

        <section className="bg-white shadow-xl rounded-2xl p-6 md:p-8 lg:p-12 mb-12">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-emerald-800 text-center mb-6 lg:mb-8">
            {content.pageTitle}
          </h1>

          {/* Part One: Introduction & Image */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div className="order-2 md:order-1 text-justify">
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                {content.partOne.intro}
              </p>
            </div>
            {content.partOne.image.src && (
              <div className="order-1 md:order-2 flex justify-center items-center">
                <div className="relative w-full max-w-md h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg border-4 border-emerald-300">
                  <Image
                    src={content.partOne.image.src}
                    alt={content.partOne.image.alt}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Part Two: Environmental Strategy */}
          <div className="mb-8 p-6 rounded-xl bg-emerald-50 shadow-sm border border-emerald-200">
            <h2 className="text-2xl font-semibold text-emerald-700 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              {content.partTwo.heading}
            </h2>
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-4">
              {content.partTwo.intro}
            </p>
            <ul className="list-disc list-inside space-y-2 text-base lg:text-lg text-gray-700">
              {content.partTwo.axes.map((axis, index) => (
                <li key={index}>{axis}</li>
              ))}
            </ul>
          </div>

          {/* Part Three: Objectives */}
          <div className="mb-8 p-6 rounded-xl bg-emerald-50 shadow-sm border border-emerald-200">
            <h2 className="text-2xl font-semibold text-emerald-700 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3-7a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm3 11a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
              {content.partThree.heading}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-base lg:text-lg text-gray-700">
              {content.partThree.objectives.map((objective, index) => (
                <li key={index}>{objective}</li>
              ))}
            </ul>
          </div>

          {/* Part Four: Learn More (PDFs) */}
          <div className="p-6 rounded-xl bg-yellow-50 shadow-sm border border-yellow-200">
            <h2 className="text-2xl font-semibold text-yellow-700 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-3 text-yellow-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zm-2 2a1 1 0 00-1 1v3a1 1 0 001 1h2a1 1 0 001-1v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
              {content.partFour.intro}
            </h2>
            <div className="text-base lg:text-lg text-gray-700 leading-relaxed">
              {content.partFour.documents.map((doc, index) => (
                <div key={index} className="mb-2">
                  <a
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:text-emerald-800 font-semibold hover:underline flex items-center"
                  >
                    <svg className="w-5 h-5 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0113 3.414L16.586 7A2 2 0 0117 8.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 011-1h6a1 1 0 110 2H7z" clipRule="evenodd"></path></svg>
                    {doc.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}