// app/about/qualite/page.tsx

import Link from 'next/link';

// The fixed paragraph content
const qualiteContent = {
  pageTitle: "Management de la Qualité",
  paragraph: `Dans un environnement de plus en plus concurrentiel, le GCT s'engage à renforcer continuellement son image de marque sur le marché international. Dans cette optique, la politique qualité définie par la direction générale met un accent particulier sur la satisfaction des attentes des clients. Pour ce faire, le GCT a lancé sa démarche qualité par l’accréditation de l’ensemble de ses laboratoires de contrôle qualité selon la norme ISO 17025, obtenue en 2008 auprès du Conseil National d’Accréditation (TUNAC).
De plus, les laboratoires du GCT ont brillamment mené la transition vers la nouvelle version de cette norme, ISO 17025 : 2017, consolidant ainsi leur engagement en matière de rigueur et de performance.
Certificats d’accréditation ISO 17025 (Français, Arabe, Anglais).
En 2010, l'Usine de M'dhilla a été certifiée selon la norme ISO 9001, actuellement le certificat est en cours de revalidation.
Une étude portant sur l'adoption d'une démarche de détermination de l'empreinte carbone des produits exportés par le GCT et bilan carbone conformément aux normes ISO 14067 et ISO 14064 dans le cadre du mécanisme d'ajustement « MACF », est en cours de réalisation.
La politique qualité du GCT inclut également le déploiement d'un programme de certification progressif visant à instaurer un système intégré QSE (Qualité, Sécurité, Environnement) pour l’usine Ammonitrate, avec pour objectif de l'étendre à l'ensemble des sites de production.
Pour assurer la qualité et la conformité du phosphate de calcium, tout en améliorant la traçabilité et réduisant les risques de contamination, le GCT a lancé un projet visant à intégrer les normes GMP+ dans son usine de production de DCP, garantissant ainsi un contrôle rigoureux et une sécurité renforcée.`,
};

export default function GCTQualitePage() {
  // --- Breadcrumb Component ---
  const Breadcrumb = () => (
    <nav className="text-sm text-gray-500 mb-6 flex items-center">
      <Link href="/" className="hover:text-blue-600 transition-colors">Accueil</Link>
      <span className="mx-2">&raquo;</span>
      <Link href="/about" className="hover:text-blue-600 transition-colors">L'Entreprise</Link>
      <span className="mx-2">&raquo;</span>
      <Link href="/about/management" className="hover:text-blue-600 transition-colors">Management</Link>
      <span className="mx-2">&raquo;</span>
      <span className="font-semibold text-blue-700">Gestion de la Qualité</span>
    </nav>
  );

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 bg-gray-50">
      <Breadcrumb />

      <section className="bg-white shadow-lg rounded-xl p-6 md:p-10 mb-12">
        <h1 className="text-4xl font-extrabold text-blue-800 text-center mb-8">
          {qualiteContent.pageTitle}
        </h1>

        <div className="mb-10 text-justify bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200">
          <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
            {qualiteContent.paragraph}
          </p>
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