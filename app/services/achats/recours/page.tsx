// app/services/achats/recours/page.tsx

import Link from 'next/link';

export default function AchatsRecoursPage() {
  const recoursContent = {
    title: "Commission de recours",
    introductionParagraph: `
      La Commission de recours du GCT est un organe essentiel garantissant l'équité et la transparence dans nos processus d'achats.
      Elle est chargée d'examiner les contestations et les réclamations relatives aux procédures d'appels d'offres, assurant ainsi un traitement juste
      et impartial des litiges. Son rôle est de veiller à ce que toutes les parties prenantes respectent les règles établies et à ce que les décisions
      prises soient conformes aux principes de bonne gouvernance et aux réglementations en vigueur.
      Cette commission contribue activement à renforcer la confiance de nos partenaires et fournisseurs dans l'intégrité de nos opérations.
    `,
    commissionComposition: {
      title: "La Commission de Recours et d’Intégrité est composée de :",
      members: [
        "Un administrateur du Conseil d’administration, Président",
        "Un administrateur du Conseil d’administration, membre",
        "Le Contrôleur d’Etat, membre",
      ],
    },
    commissionAddress: {
      title: "Adresse de la commission de Recours et d’Intégrité :",
      address: "Cellule de la Bonne Gouvernance du Groupe Chimique Tunisien, 7 rue du Royaume d’Arabie Saoudite, 1002 Belvédère Tunis",
    },
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 bg-gray-50 text-center">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center justify-center">
        <Link href="/" className="hover:text-blue-600 transition-colors">Accueil</Link>
        <span className="mx-2">&raquo;</span>
        <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
        <span className="mx-2">&raquo;</span>
        <Link href="/services/achats" className="hover:text-blue-600 transition-colors">Achats</Link>
        <span className="mx-2">&raquo;</span>
        <span className="font-semibold text-blue-700">Commission de recours</span>
      </nav>

      <section className="bg-white shadow-lg rounded-xl p-6 md:p-10 mb-12">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-8">
          {recoursContent.title}
        </h1>

        {/* Introduction Paragraph */}
        <div className="mb-10 p-6 rounded-lg bg-blue-50 shadow-sm border border-blue-200 text-justify">
          <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
            {recoursContent.introductionParagraph}
          </p>
        </div>

        {/* Commission Composition */}
        <div className="mb-10 p-6 rounded-lg bg-green-50 shadow-sm border border-green-200 text-left">
          <h2 className="text-2xl font-bold text-green-700 mb-4 flex items-center">
            <svg className="w-7 h-7 mr-3 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
            Composition de la Commission
          </h2>
          <p className="text-lg text-gray-700 font-semibold mb-3">
            {recoursContent.commissionComposition.title}
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
            {recoursContent.commissionComposition.members.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul>
        </div>

        {/* Commission Address */}
        <div className="p-6 rounded-lg bg-yellow-50 shadow-sm border border-yellow-200 text-left">
          <h2 className="text-2xl font-bold text-yellow-700 mb-4 flex items-center">
            <svg className="w-7 h-7 mr-3 text-yellow-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
            Adresse de la Commission
          </h2>
          <p className="text-lg text-gray-700 font-semibold mb-3">
            {recoursContent.commissionAddress.title}
          </p>
          <p className="text-xl text-blue-800 font-bold">
            {recoursContent.commissionAddress.address}
          </p>
        </div>
      </section>

      {/* Optional: Navigation back to Achats page */}
      <div className="mt-12 text-center py-8 border-t border-gray-200">
        <Link href="/services/achats" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <svg className="mr-2 -ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"></path></svg>
          Retour à la page Achats
        </Link>
      </div>
    </div>
  );
}