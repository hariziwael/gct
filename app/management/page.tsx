import Image from 'next/image';
import Link from 'next/link';

// Static content for gouvernance section
const governanceContent = {
  pageTitle: "Gouvernance d'Entreprise",
  introduction: {
    paragraph1: `Le GCT est géré sous la supervision du Conseil d'Administration et du Ministère de l'Industrie et des Petites et Moyennes Entreprises, dans un cadre défini par les lois régissant les sociétés publiques tunisiennes.`,
    paragraph2: `Le capital social du GCT est entièrement propriété du Gouvernement Tunisien.`,
  },
  governanceStructures: {
    intro: `Les principales structures de Gouvernance au sein du GCT sont:`,
    list: [
      `Le Conseil d'Administration;`,
      `Le Comité Exécutif;`,
      `Les Comités Spéciaux;`,
      `Le Comité Permanent d'Audit.`,
    ],
    imageSrc: "/images/gct-governance-structures.jpg",
    imageAlt: "Organigramme des structures de gouvernance du GCT",
  },
  boardOfDirectors: {
    intro: `Le Conseil d'Administration est composé de onze membres nommés par le Gouvernement tunisien.`,
    members: [
      `Le Président du Conseil d'Administration ;`,
      `Un Représentant de la Présidence du Gouvernement ;`,
      `Un Représentant du Ministère de l'Industrie, des Mines et de l'Energie ;`,
      `Un Représentant du Ministère des Finances ;`,
      `Un Représentant du Ministère de l'Environnement ;`,
      `Un Représentant du Ministère des Affaires Sociales ;`,
      `Un Représentant du Ministère de l'Economie et de la Planification ;`,
      `Un Représentant du Ministère de l'Agriculture, des Ressources Hydrauliques et de la Pêche Maritime ;`,
      `Un Représentant de la Compagnie des Phosphates de Gafsa ;`,
      `Un Représentant de la Société Nationale des Chemins de Fer Tunisiens ;`,
      `Un Représentant de la Banque Centrale de Tunisie ;`,
      `Le Contrôleur de l'Etat.`,
    ],
  },
};

// Static content for objectifs section
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
  imageSrc: "/images/gct-objectifs.jpg",
  imageAlt: "Objectifs du GCT: usine moderne et environnement respecté",
};

// Static content for strategy section
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
    imageSrc: "/images/fertilizer-types.jpg",
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

// Dynamic world population calculation
const currentWorldPopulation = Math.floor(8.1 * 1_000_000_000 + Math.random() * 200_000_000);

export default function GCTManagementPage() {
  // --- Breadcrumb Component ---
  const Breadcrumb = () => (
    <nav aria-label="breadcrumb" className="text-sm text-gray-500 mb-4 flex items-center">
      <Link href="/" className="hover:text-emerald-600 transition-colors focus:outline-none focus:ring focus:ring-emerald-300">Accueil</Link>
      <span className="mx-2 text-gray-400">&raquo;</span>
      
      <span className="font-medium text-emerald-700" aria-current="page">Management</span>
    </nav>
  );

  return (
    <div className="bg-emerald-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb />

        {/* Main Management Title */}
        <section className="bg-white shadow-xl rounded-2xl p-6 md:p-8 lg:p-12 mb-12">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-emerald-800 text-center mb-12">
            Management du GCT
          </h1>

          {/* SECTION 1: GOUVERNANCE D'ENTREPRISE */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-emerald-800 text-center mb-6 lg:mb-8">
              {governanceContent.pageTitle}
            </h2>

            {/* Part One: Introduction */}
            <div className="mb-8 text-center bg-emerald-50 p-6 rounded-xl shadow-sm border border-emerald-200">
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-4">
                {governanceContent.introduction.paragraph1}
              </p>
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed font-semibold">
                {governanceContent.introduction.paragraph2}
              </p>
            </div>

            {/* Part Two: Main Governance Structures with Image */}
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-semibold text-emerald-700 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                  Structures de Gouvernance
                </h3>
                <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-6">
                  {governanceContent.governanceStructures.intro}
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-base lg:text-lg">
                  {governanceContent.governanceStructures.list.map((item, index) => (
                    <li key={index} className="font-semibold text-gray-800">{item}</li>
                  ))}
                </ul>
              </div>
              {governanceContent.governanceStructures.imageSrc && (
                <div className="order-1 md:order-2 flex justify-center items-center">
                  <div className="relative w-full max-w-md h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg border-4 border-emerald-300">
                    <Image
                      src={governanceContent.governanceStructures.imageSrc}
                      alt={governanceContent.governanceStructures.imageAlt}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Part Three: Board of Directors Composition */}
            <div className="mb-8 p-6 rounded-xl bg-emerald-50 shadow-sm border border-emerald-200">
              <h3 className="text-2xl font-semibold text-emerald-700 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a2 2 0 012 2v8a2 2 0 01-2 2H6.5L1 18V6z" clipRule="evenodd"></path></svg>
                Le Conseil d&apos;Administration
              </h3>
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-6">
                {governanceContent.boardOfDirectors.intro}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-base lg:text-lg">
                {governanceContent.boardOfDirectors.members.map((member, index) => (
                  <li key={index}>{member}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* SECTION 2: OBJECTIFS DU GCT */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-emerald-800 text-center mb-6 lg:mb-8">
              {objectifsContent.pageTitle}
            </h2>

            {/* Part One: Introduction about raw material and sites */}
            <div className="mb-8 text-center bg-emerald-50 p-6 rounded-xl shadow-sm border border-emerald-200">
              <h3 className="text-2xl font-semibold text-emerald-700 mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 mr-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.5a1 1 0 01-1 1h-2a1 1 0 01-1-1V3a1 1 0 011-1h2zM9 8a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zM5 14a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                De la Roche à l&apos;Engrais
              </h3>
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                {objectifsContent.partOne}
              </p>
            </div>

            {/* Part Two: Values, Objectives, and Image */}
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div className="order-2 md:order-1">
                <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-6">
                  {objectifsContent.partTwoIntro}
                </p>

                <h3 className="text-2xl font-semibold text-emerald-700 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  Nos Objectifs Principaux
                </h3>
                <ul className="list-disc list-inside space-y-3 text-gray-700 text-base lg:text-lg">
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
                  <div className="relative w-full max-w-md h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg border-4 border-emerald-300">
                    <Image
                      src={objectifsContent.imageSrc}
                      alt={objectifsContent.imageAlt}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* SECTION 3: STRATÉGIE DU GCT */}
          <div className="mb-8">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-emerald-800 text-center mb-6 lg:mb-8">
              {strategyContent.pageTitle}
            </h2>

            {/* Part One: Population mondiale */}
            <div className="mb-8 text-center bg-emerald-50 p-6 rounded-xl shadow-sm border border-emerald-200">
              <h3 className="text-2xl font-semibold text-emerald-700 mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 mr-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zm-6 9A7 7 0 0110 18a7 7 0 01-5-2.22V17a1 1 0 11-2 0v-2.11C1 12.15 1 9.5 1 9.5a1 1 0 011-1h16a1 1 0 011 1v2.11c0 2.65 0 5.3-2 6.11V17a1 1 0 11-2 0v-2.22A7 7 0 0113 15z"></path></svg>
                Population Mondiale Actuelle
              </h3>
              <p className="text-4xl lg:text-5xl font-extrabold text-emerald-900 mb-4 animate-pulse">
                {currentWorldPopulation.toLocaleString('fr-FR')}
              </p>
              <p className="text-base lg:text-lg text-gray-700 italic">
                Estimation en temps réel.
              </p>
            </div>

            {/* Part Two: Stratégie du GCT - Introduction */}
            <div className="mb-8 p-6 rounded-xl bg-emerald-50 shadow-sm border border-emerald-200">
              <h3 className="text-2xl font-semibold text-emerald-700 mb-4">Stratégie du GCT</h3>
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                En {strategyContent.populationIntro.year}, {strategyContent.populationIntro.text}
              </p>
            </div>

            {/* Part Three: Développement technologique et types d'engrais */}
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-semibold text-emerald-700 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.49 3.17C10.687 2.148 9.38 2.148 8.577 3.17L3.904 12.02A1 1 0 004.857 13h9.286a1 1 0 00.953-1.18l-4.673-8.85zM12 15a1 1 0 100 2h1a1 1 0 100-2h-1zm-4 0a1 1 0 100 2h1a1 1 0 100-2H8z" clipRule="evenodd"></path></svg>
                  Développement de Nos Engrais
                </h3>
                <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-6">
                  {strategyContent.fertilizerDevelopment.intro}
                </p>
                <ul className="list-none space-y-4">
                  {strategyContent.fertilizerDevelopment.types.map((type, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 mr-2 mt-1 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
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
                  <div className="relative w-full max-w-md h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg border-4 border-emerald-300">
                    <Image
                      src={strategyContent.fertilizerDevelopment.imageSrc}
                      alt={strategyContent.fertilizerDevelopment.imageAlt}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Part Four: Principes stratégiques et enrichissement */}
            <div className="mb-8 p-6 rounded-xl bg-emerald-50 shadow-sm border border-emerald-200">
              <h3 className="text-2xl font-semibold text-emerald-700 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11 2a1 1 0 011 1v1.5a1 1 0 01-1 1h-2a1 1 0 01-1-1V3a1 1 0 011-1h2zM9 8a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zM5 14a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                Nos Principes Stratégiques
              </h3>
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-6">
                {strategyContent.strategicPrinciples.intro}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 text-base lg:text-lg">
                {strategyContent.strategicPrinciples.principles.map((principle, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-1 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span>{principle}</span>
                  </li>
                ))}
              </ul>

              <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-6">
                {strategyContent.enrichment}
              </p>

              <p className="text-xl font-semibold text-gray-800 leading-relaxed">
                <span className="text-emerald-700">La stratégie du GCT</span> combine à la fois{' '}
                <span className="text-green-600">la réussite économique</span>,{' '}
                <span className="text-blue-600">la responsabilité sociétale</span> et{' '}
                <span className="text-purple-600">la protection de l&apos;environnement</span>.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}