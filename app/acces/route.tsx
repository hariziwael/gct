// app/about/acces/page.tsx

import Link from 'next/link';

export default function GCTAccesInformationPage() {
  // Define the PDF documents with their titles and paths in the public folder
  const documents = [
    {
      title: "Politique d'Accès à l'information au GCT",
      href: "/pdf/politique-acces-information-gct.pdf",
    },
    {
      title: "Demande d’accès à l’information",
      href: "/pdf/demande-acces-information.pdf",
    },
    {
      title: "Demande de recours auprès de l'organisme",
      href: "/pdf/demande-recours-organisme.pdf",
    },
    {
      title: "Loi organique n° 2016-22 du 24 mars 2016 (ar)",
      href: "/pdf/loi-organique-2016-22-ar.pdf",
    },
    {
      title: "Loi organique n° 2016-22 du 24 mars 2016 (fr)",
      href: "/pdf/loi-organique-2016-22-fr.pdf",
    },
  ];

  // Define the contact information for the access officers
  const contactInfo = {
    mainOfficer: {
      identity: "Walid Marzouk",
      grade: "Administrateur général",
      function: "Directeur",
      email: "marzouk.walid@gct.com.tn",
    },
    deputyOfficer: {
      identity: "Adel Bouricha",
      grade: "Administrateur général",
      function: "Directeur",
      email: "bouricha.adel@gct.com.tn",
    },
  };

  // --- Breadcrumb Component ---
  const Breadcrumb = () => (
    <nav aria-label="breadcrumb" className="text-sm text-gray-500 mb-4 flex items-center">
      <Link href="/" className="hover:text-emerald-600 transition-colors focus:outline-none focus:ring focus:ring-emerald-300">Accueil</Link>
      <span className="mx-2 text-gray-400">&raquo;</span>
      <Link href="/about" className="hover:text-emerald-600 transition-colors focus:outline-none focus:ring focus:ring-emerald-300">À propos</Link>
      <span className="mx-2 text-gray-400">&raquo;</span>
      <span className="font-medium text-emerald-700" aria-current="page">Accès à l&apos;information</span>
    </nav>
  );


  return (
    <div className="bg-emerald-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb />

        <section className="bg-white rounded-2xl shadow-xl p-6 md:p-10 mb-12">
          <h1 className="text-4xl font-extrabold text-emerald-800 text-center mb-8">
            Accès à l&apos;information
          </h1>

          {/* Section for PDF Documents */}
          <div className="mb-10 p-6 rounded-lg bg-emerald-50 shadow-sm border border-emerald-200">
            <h2 className="text-2xl font-bold text-emerald-700 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
              Documents Légaux et Procédures
            </h2>
            <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
              {documents.map((doc, index) => (
                <li key={index}>
                  <a
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:text-emerald-800 font-semibold hover:underline flex items-center transition-colors duration-200 focus:outline-none focus:ring focus:ring-emerald-300"
                  >
                    <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7"></path></svg>
                    {doc.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Section for Contact Information */}
          <div className="p-6 rounded-lg bg-green-50 shadow-sm border border-green-200">
            <h2 className="text-2xl font-bold text-green-700 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948.684l1.143 2.857a1 1 0 01.368.638l.211.553a1 1 0 01-.39.242h-2.936c0 .1-.001.201.002.301a1 1 0 01-.145.487l-1.375 2.75a1 1 0 01-.792.64l-2.563.642a1 1 0 01-1.101-.255l-1.14-2.849a1 1 0 01.293-.708l1.493-1.493c.1-.1.2-.1.3-.1H6.75a9.034 9.034 0 00-1.286-2.14l-1.14-2.85a1 1 0 01.293-.708zM14 10l?6 6m-6-6l6-6"></path></svg>
              Responsables de l’Accès à l’Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Main Officer */}
              <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  Chargé Principal
                </h3>
                <p className="text-gray-700">
                  <strong className="font-medium">Identité :</strong> {contactInfo.mainOfficer.identity}
                </p>
                <p className="text-gray-700">
                  <strong className="font-medium">Grade :</strong> {contactInfo.mainOfficer.grade}
                </p>
                <p className="text-gray-700">
                  <strong className="font-medium">Fonction :</strong> {contactInfo.mainOfficer.function}
                </p>
                <p className="text-gray-700 mt-2">
                  <strong className="font-medium">Email :</strong>{' '}
                  <a href={`mailto:${contactInfo.mainOfficer.email}`} className="text-emerald-600 hover:underline transition-colors duration-200 focus:outline-none focus:ring focus:ring-emerald-300">
                    {contactInfo.mainOfficer.email}
                  </a>
                </p>
              </div>

              {/* Deputy Officer */}
              <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  Suppléant
                </h3>
                <p className="text-gray-700">
                  <strong className="font-medium">Identité :</strong> {contactInfo.deputyOfficer.identity}
                </p>
                <p className="text-gray-700">
                  <strong className="font-medium">Grade :</strong> {contactInfo.deputyOfficer.grade}
                </p>
                <p className="text-gray-700">
                  <strong className="font-medium">Fonction :</strong> {contactInfo.deputyOfficer.function}
                </p>
                <p className="text-gray-700 mt-2">
                  <strong className="font-medium">Email :</strong>{' '}
                  <a href={`mailto:${contactInfo.deputyOfficer.email}`} className="text-emerald-600 hover:underline transition-colors duration-200 focus:outline-none focus:ring focus:ring-emerald-300">
                    {contactInfo.deputyOfficer.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>


      </div>
    </div>
  );
}