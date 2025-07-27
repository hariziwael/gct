// app/services/achats/fournisseurs/page.tsx

import Link from 'next/link';

export default function AchatsFournisseursPage() {
  const content = {
    pageTitle: "Appel aux fournisseurs",
    heading: "APPEL À CANDIDATURE POUR PARTICIPER AUX CONSULTATIONS DU GCT",
    paragraph: `
      Tout fournisseur de bien, d’équipement ou service désirant participer aux consultations
      relatives aux achats du Groupe Chimique Tunisien au niveau des régions de Gabes, de Sfax,
      de Gafsa ou de Tunis peut manifester son intérêt par envoi de courrier au Bureau d’Ordre du GCT.

      Le courrier doit comporter la mention « Manifestation d’intérêt pour participation aux consultations du GCT »
      et contenir la raison sociale et les coordonnées du fournisseur (adresse, e-mail, téléphones, etc.)
      ainsi que ses spécialités et ses domaines d’activité.
    `,
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
        <span className="font-semibold text-blue-700">Appel aux fournisseurs</span>
      </nav>

      <section className="bg-white shadow-lg rounded-xl p-6 md:p-10 mb-12">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-8">
          {content.pageTitle}
        </h1>

        <div className="p-6 rounded-lg bg-blue-50 shadow-sm border border-blue-200 text-justify">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">
            {content.heading}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
            {content.paragraph}
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