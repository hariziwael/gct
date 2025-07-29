// app/environnement/gestion/page.tsx

import Link from 'next/link';
import Image from 'next/image';

export default function EnvironnementGestionPage() {
  const content = {
    pageTitle: "Gestion de l'Élimination du Phosphogypse et Préservation de l'eau",
    partOne: {
      paragraph: `Pour chaque tonne d'acide phosphorique (exprimée en P2O5) produite en utilisant le procédé par voie humide, plus de 5 tonnes de phosphogypse sont générées. L'eau libre contenue dans le gâteau de gypse est très acide (pH inférieur à 2,0).`,
    },
    partTwo: {
      image: {
        src: "/images/gestion-phosphogypse.jpg", // Ensure this image exists in public/images/
        alt: "Vue d'un site de gestion de phosphogypse ou une station de traitement d'eau",
      },
      paragraph: `Les utilisations commerciales du phosphogypse dans le monde restent limitées dans l'agriculture et dans la fabrication de plaques de plâtre et de ciment Portland, la grande majorité du phosphogypse produit par les unités phosphoriques du GCT est mise en terril dans des surfaces de terre aménagées ou sont rejetées en mer.`,
      advantagesTitle: `Prenant en considération la spécificité du phosphogypse produit par les unités phosphorique du GCT et les retombés économiques bénéfiques attendues derrière le projet de décharge humide du phosphogypse, les avantages du nouveau mode de décharge sont:`,
      advantages: [
        `Protection de la terre, de la surface et des eaux souterraines.`,
        `Réduction des émissions de poussières.`,
        `Taux de récupération élevé de P2O5.`,
        `Faible taux dans le temps d'arrêt.`,
        `Système d'entretien réduit.`,
      ],
    },
    partThree: {
      heading: `Afin de préserver les ressources en eau, le GCT a prévu de nouveaux projets:`,
      projects: [
        `Réutilisation des eaux usées récupérées après traitement tertiaire.`,
        `Réutilisation des eaux usées de la station de dessalement SONEDE.`,
        `Dessalement de l'eau de mer.`,
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
          <Link href="/environnement" className="hover:text-emerald-600 transition-colors focus:outline-none focus:ring focus:ring-emerald-300">Environnement</Link>
          <span className="mx-2 text-gray-400">&raquo;</span>
          <span className="font-medium text-emerald-700" aria-current="page">Gestion de l'eau</span>
        </nav>

        <section className="bg-white shadow-xl rounded-2xl p-6 md:p-8 lg:p-12 mb-12">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-emerald-800 text-center mb-6 lg:mb-8">
            {content.pageTitle}
          </h1>

          {/* Part One: Introduction to Phosphogypsum */}
          <div className="mb-8 p-6 rounded-xl bg-emerald-50 shadow-sm border border-emerald-200 text-justify">
            <h2 className="text-xl lg:text-2xl font-semibold text-emerald-700 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 9.586V6z" clipRule="evenodd"></path></svg>
              Le Phosphogypse : Un Défi Environnemental
            </h2>
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
              {content.partOne.paragraph}
            </p>
          </div>

          {/* Part Two: Phosphogypsum Management & Advantages */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            {content.partTwo.image.src && (
              <div className="flex justify-center items-center order-1 md:order-1">
                <div className="relative w-full max-w-md h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg border-4 border-emerald-300">
                  <Image
                    src={content.partTwo.image.src}
                    alt={content.partTwo.image.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            )}
            <div className="text-justify order-2 md:order-2">
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-6">
                {content.partTwo.paragraph}
              </p>
              <div className="p-4 rounded-xl bg-green-50 shadow-sm border border-green-200">
                <h3 className="text-xl lg:text-2xl font-semibold text-green-700 mb-3 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  {content.partTwo.advantagesTitle}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-base lg:text-lg text-gray-700">
                  {content.partTwo.advantages.map((advantage, index) => (
                    <li key={index}>{advantage}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Part Three: Water Preservation Projects */}
          <div className="p-6 rounded-xl bg-purple-50 shadow-sm border border-purple-200">
            <h2 className="text-xl lg:text-2xl font-semibold text-purple-700 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm4 0a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm4 0a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
              {content.partThree.heading}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-base lg:text-lg text-gray-700">
              {content.partThree.projects.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
          </div>
        </section>

      </div>
    </div>
  );
}