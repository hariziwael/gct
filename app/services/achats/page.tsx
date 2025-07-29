// app/services/achats/page.tsx

import Link from 'next/link';
import client from '../../../lib/sanity';

type ManuelAchat = {
  titre: string;
  fichierPdf: {
    url: string;
  };
};

export const metadata = {
  title: 'Services d\'Achats - GCT',
  description: 'Services d\'achats du Groupe Chimique Tunisien : appels aux armateurs, fournisseurs, procédures et commission de recours.',
};

export default async function AchatsPage() {
  // Fetch manual data from Sanity
  const manuelData: ManuelAchat = await client.fetch(`*[_type == "manuelAchat"][0]{
    titre,
    "fichierPdf": fichierPdf.asset->{url}
  }`);

  const content = {
    // Armateurs content
    armateurs: {
      id: "armateurs",
      title: "Appel aux armateurs/courtiers",
      icon: "🚢",
      heading: "APPEL À CANDIDATURE POUR PARTICIPER AUX APPELS D'OFFRES DES AFFRÈTEMENTS DU GCT",
      paragraph: `Tout armateur ou courtier désirant participer aux Appels d'Offres du Groupe Chimique Tunisien concernant l'affrètement des navires est prié de manifester son intérêt via l'adresse mail gct_chartering@gct.com.tn`,
      email: "gct_chartering@gct.com.tn",
      cta: "Veuillez envoyer votre manifestation d'intérêt à l'adresse e-mail ci-dessus."
    },

    // Fournisseurs content
    fournisseurs: {
      id: "fournisseurs",
      title: "Appel aux fournisseurs",
      icon: "🏭",
      heading: "APPEL À CANDIDATURE POUR PARTICIPER AUX CONSULTATIONS DU GCT",
      paragraph: `Tout fournisseur de bien, d'équipement ou service désirant participer aux consultations relatives aux achats du Groupe Chimique Tunisien au niveau des régions de Gabes, de Sfax, de Gafsa ou de Tunis peut manifester son intérêt par envoi de courrier au Bureau d'Ordre du GCT.

Le courrier doit comporter la mention « Manifestation d'intérêt pour participation aux consultations du GCT » et contenir la raison sociale et les coordonnées du fournisseur (adresse, e-mail, téléphones, etc.) ainsi que ses spécialités et ses domaines d'activité.`
    },

    // Procedures content
    procedures: {
      id: "procedures",
      title: "Manuel des procédures",
      icon: "📋",
      heading: "MANUEL DES PROCÉDURES D'ACHATS DU GCT"
    },

    // Recours content
    recours: {
      id: "recours",
      title: "Commission de recours",
      icon: "⚖️",
      introductionParagraph: `La Commission de recours du GCT est un organe essentiel garantissant l'équité et la transparence dans nos processus d'achats. Elle est chargée d'examiner les contestations et les réclamations relatives aux procédures d'appels d'offres, assurant ainsi un traitement juste et impartial des litiges. Son rôle est de veiller à ce que toutes les parties prenantes respectent les règles établies et à ce que les décisions prises soient conformes aux principes de bonne gouvernance et aux réglementations en vigueur. Cette commission contribue activement à renforcer la confiance de nos partenaires et fournisseurs dans l'intégrité de nos opérations.`,
      commissionComposition: {
        title: "La Commission de Recours et d'Intégrité est composée de :",
        members: [
          "Un administrateur du Conseil d'administration, Président",
          "Un administrateur du Conseil d'administration, membre",
          "Le Contrôleur d'Etat, membre",
        ],
      },
      commissionAddress: {
        title: "Adresse de la commission de Recours et d'Intégrité :",
        address: "Cellule de la Bonne Gouvernance du Groupe Chimique Tunisien, 7 rue du Royaume d'Arabie Saoudite, 1002 Belvédère Tunis",
      },
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-slate-100">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-8 flex items-center justify-center">
          <Link href="/" className="hover:text-emerald-600 transition-colors duration-200">
            Accueil
          </Link>
          <span className="mx-2 text-gray-400">→</span>
          <Link href="/services" className="hover:text-emerald-600 transition-colors duration-200">
            Services
          </Link>
          <span className="mx-2 text-gray-400">→</span>
          <span className="font-semibold text-emerald-700">Achats</span>
        </nav>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Services d'<span className="text-emerald-600">Achats</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos services d'achats et les opportunités de collaboration avec le Groupe Chimique Tunisien
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.values(content).map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="group bg-white hover:bg-emerald-50 px-6 py-3 rounded-full shadow-md hover:shadow-lg border border-emerald-100 transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="text-2xl mr-2">{section.icon}</span>
              <span className="font-medium text-gray-700 group-hover:text-emerald-600">
                {section.title}
              </span>
            </a>
          ))}
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          
          {/* 1. Armateurs Section */}
          <section id="armateurs" className="scroll-mt-20">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-emerald-100">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-6 text-white">
                <div className="flex items-center">
                  <span className="text-4xl mr-4">{content.armateurs.icon}</span>
                  <h2 className="text-3xl font-bold">{content.armateurs.title}</h2>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                  {content.armateurs.heading}
                </h3>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {content.armateurs.paragraph.split('gct_chartering@gct.com.tn')[0]}
                    <a
                      href={`mailto:${content.armateurs.email}`}
                      className="text-emerald-600 hover:underline font-semibold bg-emerald-100 px-2 py-1 rounded transition-colors duration-200"
                    >
                      {content.armateurs.email}
                    </a>
                    {content.armateurs.paragraph.split('gct_chartering@gct.com.tn')[1]}
                  </p>
                </div>
                <div className="text-center">
                  <a
                    href={`mailto:${content.armateurs.email}`}
                    className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    Envoyer votre manifestation d'intérêt
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Fournisseurs Section */}
          <section id="fournisseurs" className="scroll-mt-20">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-white">
                <div className="flex items-center">
                  <span className="text-4xl mr-4">{content.fournisseurs.icon}</span>
                  <h2 className="text-3xl font-bold">{content.fournisseurs.title}</h2>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                  {content.fournisseurs.heading}
                </h3>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {content.fournisseurs.paragraph}
                  </p>
                </div>
                <div className="mt-6 grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">📍 Régions concernées:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Gabès</li>
                      <li>• Sfax</li>
                      <li>• Gafsa</li>
                      <li>• Tunis</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">📝 Informations requises:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Raison sociale</li>
                      <li>• Coordonnées complètes</li>
                      <li>• Spécialités</li>
                      <li>• Domaines d'activité</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Procedures Section */}
          <section id="procedures" className="scroll-mt-20">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-orange-100">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 text-white">
                <div className="flex items-center">
                  <span className="text-4xl mr-4">{content.procedures.icon}</span>
                  <h2 className="text-3xl font-bold">{content.procedures.title}</h2>
                </div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  {content.procedures.heading}
                </h3>
                {manuelData?.titre && (
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">
                      {manuelData.titre}
                    </h4>
                    {manuelData.fichierPdf?.url ? (
                      <a
                        href={manuelData.fichierPdf.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        Télécharger le manuel en PDF
                      </a>
                    ) : (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <p className="text-red-600 font-medium">
                          ⚠️ Fichier PDF non disponible pour le moment.
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* 4. Recours Section */}
          <section id="recours" className="scroll-mt-20">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-purple-100">
              <div className="bg-gradient-to-r from-purple-500 to-violet-600 p-6 text-white">
                <div className="flex items-center">
                  <span className="text-4xl mr-4">{content.recours.icon}</span>
                  <h2 className="text-3xl font-bold">{content.recours.title}</h2>
                </div>
              </div>
              <div className="p-8">
                {/* Introduction */}
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
                  <p className="text-gray-700 leading-relaxed">
                    {content.recours.introductionParagraph}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Commission Composition */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center">
                      <svg className="w-6 h-6 mr-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                      Composition de la Commission
                    </h3>
                    <p className="text-gray-700 font-medium mb-4">
                      {content.recours.commissionComposition.title}
                    </p>
                    <ul className="space-y-3">
                      {content.recours.commissionComposition.members.map((member, index) => (
                        <li key={index} className="flex items-start">
                          <span className="bg-green-200 text-green-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-1 flex-shrink-0">
                            {index + 1}
                          </span>
                          <span className="text-gray-700">{member}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Commission Address */}
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-yellow-700 mb-4 flex items-center">
                      <svg className="w-6 h-6 mr-3 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      Adresse de la Commission
                    </h3>
                    <p className="text-gray-700 font-medium mb-4">
                      {content.recours.commissionAddress.title}
                    </p>
                    <div className="bg-white border border-yellow-300 rounded-lg p-4">
                      <p className="text-purple-800 font-semibold">
                        {content.recours.commissionAddress.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Besoin d'aide ?</h2>
          <p className="text-lg mb-6 opacity-90">
            Notre équipe est à votre disposition pour répondre à vos questions concernant nos services d'achats.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-emerald-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-md"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
            Nous contacter
          </Link>
        </div>
      </div>
    </div>
  );
}