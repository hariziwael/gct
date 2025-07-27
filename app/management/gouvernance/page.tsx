// app/about/gouvernance/page.tsx

import Image from 'next/image';
import Link from 'next/link';

// Static content for the page, directly embedded
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
    // Make sure you have this image in your public/images/ folder!
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

export default function GCTGouvernancePage() {
  // --- Breadcrumb Component ---
  const Breadcrumb = () => (
    <nav className="text-sm text-gray-500 mb-6 flex items-center">
      <Link href="/" className="hover:text-blue-600 transition-colors">Accueil</Link>
      <span className="mx-2">&raquo;</span>
      
      <Link href="/management" className="hover:text-blue-600 transition-colors">Management</Link>
      <span className="mx-2">&raquo;</span>
      <span className="font-semibold text-blue-700">Gouvernance d'Entreprise</span>
    </nav>
  );

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 bg-gray-50">
      <Breadcrumb />

      <section className="bg-white shadow-lg rounded-xl p-6 md:p-10 mb-12">
        <h1 className="text-4xl font-extrabold text-blue-800 text-center mb-8">
          {governanceContent.pageTitle}
        </h1>

        {/* Part One: Introduction */}
        <div className="mb-10 text-center bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            {governanceContent.introduction.paragraph1}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed font-semibold">
            {governanceContent.introduction.paragraph2}
          </p>
        </div>

        {/* Part Two: Main Governance Structures with Image */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-bold text-purple-700 mb-4 flex items-center">
              <svg className="w-7 h-7 mr-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
              Structures de Gouvernance
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {governanceContent.governanceStructures.intro}
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
              {governanceContent.governanceStructures.list.map((item, index) => (
                <li key={index} className="font-semibold text-gray-800">{item}</li>
              ))}
            </ul>
          </div>
          {governanceContent.governanceStructures.imageSrc && (
            <div className="order-1 md:order-2 flex justify-center items-center">
              <div className="relative w-full max-w-md h-64 md:h-80 rounded-xl overflow-hidden shadow-lg border-4 border-purple-300">
                <Image
                  src={governanceContent.governanceStructures.imageSrc}
                  alt={governanceContent.governanceStructures.imageAlt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                  priority
                />
              </div>
            </div>
          )}
        </div>

        {/* Part Three: Board of Directors Composition */}
        <div className="mb-10 p-6 rounded-lg bg-green-50 shadow-sm border border-green-200">
          <h2 className="text-2xl font-bold text-green-700 mb-4 flex items-center">
            <svg className="w-7 h-7 mr-3 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a2 2 0 012 2v8a2 2 0 01-2 2H6.5L1 18V6z" clipRule="evenodd"></path></svg>
            Le Conseil d'Administration
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {governanceContent.boardOfDirectors.intro}
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
            {governanceContent.boardOfDirectors.members.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Optional: Navigation back to Management page */}
      <div className="mt-12 text-center py-8 border-t border-gray-200">
        <Link href="/about/management" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <svg className="mr-2 -ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"></path></svg>
          Retour à Management
        </Link>
      </div>
    </div>
  );
}