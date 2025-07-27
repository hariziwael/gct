// app/about/acces/page.tsx

import Link from 'next/link';

export default function GCTAccesInformationPage() {
  // Define the PDF documents with their titles and paths in the public folder
  const documents = [
    {
      title: "Politique d'Accès à l'information au GCT",
      href: "/documents/acces-information/politique-acces-information-gct.pdf",
    },
    {
      title: "Demande d’accès à l’information",
      href: "/documents/acces-information/demande-acces-information.pdf",
    },
    {
      title: "Demande de recours auprès de l'organisme",
      href: "/documents/acces-information/demande-recours-organisme.pdf",
    },
    {
      title: "Loi organique n° 2016-22 du 24 mars 2016 (ar)",
      href: "/documents/acces-information/loi-organique-2016-22-ar.pdf",
    },
    {
      title: "Loi organique n° 2016-22 du 24 mars 2016 (fr)",
      href: "/documents/acces-information/loi-organique-2016-22-fr.pdf",
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
  // const Breadcrumb = () => (
  //   <nav className="text-sm text-gray-500 mb-6 flex items-center">
  //     <Link href="/" className="hover:text-blue-600 transition-colors">Accueil</Link>
  //     <span className="mx-2">&raquo;</span>
  //     <Link href="/about" className="hover:text-blue-600 transition-colors">A propos</Link>
  //     <span className="mx-2">&raquo;</span>
  //     <span className="font-semibold text-blue-700">Accès à l'information</span>
  //   </nav>
  // );

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 bg-gray-50">
      {/* <Breadcrumb /> */}

      <section className="bg-white shadow-lg rounded-xl p-6 md:p-10 mb-12">
        <h1 className="text-4xl font-extrabold text-blue-800 text-center mb-8">
          Accès à l'information
        </h1>

        {/* Section for PDF Documents */}
        <div className="mb-10 p-6 rounded-lg bg-blue-50 shadow-sm border border-blue-200">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center">
            <svg className="w-7 h-7 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0113 3.414L16.586 7A2 2 0 0117 8.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path></svg>
            Documents Légaux et Procédures
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
            {documents.map((doc, index) => (
              <li key={index}>
                <a
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold hover:underline flex items-center"
                >
                  <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z" clipRule="evenodd"></path></svg>
                  {doc.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Section for Contact Information */}
        <div className="p-6 rounded-lg bg-green-50 shadow-sm border border-green-200">
          <h2 className="text-2xl font-bold text-green-700 mb-4 flex items-center">
            <svg className="w-7 h-7 mr-3 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
            Responsables de l’Accès à l’Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Main Officer */}
            <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
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
                <a href={`mailto:${contactInfo.mainOfficer.email}`} className="text-blue-600 hover:underline">
                  {contactInfo.mainOfficer.email}
                </a>
              </p>
            </div>

            {/* Deputy Officer */}
            <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
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
                <a href={`mailto:${contactInfo.deputyOfficer.email}`} className="text-blue-600 hover:underline">
                  {contactInfo.deputyOfficer.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}