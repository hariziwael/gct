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
    <nav aria-label="breadcrumb" className="text-sm text-gray-500 mb-4 flex items-center">
      <Link href="/" className="hover:text-emerald-600 transition-colors focus:outline-none focus:ring focus:ring-emerald-300">Accueil</Link>
      <span className="mx-2 text-gray-400">&raquo;</span>
      <Link href="/about" className="hover:text-emerald-600 transition-colors focus:outline-none focus:ring focus:ring-emerald-300">L'Entreprise</Link>
      <span className="mx-2 text-gray-400">&raquo;</span>
      <Link href="/about/management" className="hover:text-emerald-600 transition-colors focus:outline-none focus:ring focus:ring-emerald-300">Management</Link>
      <span className="mx-2 text-gray-400">&raquo;</span>
      <span className="font-medium text-emerald-700" aria-current="page">Gestion de la Qualité</span>
    </nav>
  );

  return (
    <div className="bg-emerald-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb />

        <section className="bg-white shadow-xl rounded-2xl p-6 md:p-8 lg:p-12 mb-12">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-emerald-800 text-center mb-6 lg:mb-8">
            {qualiteContent.pageTitle}
          </h1>

          <div className="mb-10 text-justify bg-emerald-50 p-6 rounded-xl shadow-sm border border-emerald-200">
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed whitespace-pre-line">
              {qualiteContent.paragraph}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}