import Link from 'next/link';

// The fixed paragraph content
const qualiteContent = {
  pageTitle: "Management de la Qualité",
  paragraph: `Dans un environnement de plus en plus concurrentiel, le GCT s'engage à renforcer continuellement son image de marque sur le marché international. Dans cette optique, la politique qualité définie par la direction générale met un accent particulier sur la satisfaction des attentes des clients. Pour ce faire, le GCT a lancé sa démarche qualité par l'accréditation de l'ensemble de ses laboratoires de contrôle qualité selon la norme ISO 17025, obtenue en 2008 auprès du Conseil National d'Accréditation (TUNAC).
De plus, les laboratoires du GCT ont brillamment mené la transition vers la nouvelle version de cette norme, ISO 17025 : 2017, consolidant ainsi leur engagement en matière de rigueur et de performance.
Certificats d'accréditation ISO 17025 (Français, Arabe, Anglais).
En 2010, l'Usine de M'dhilla a été certifiée selon la norme ISO 9001, actuellement le certificat est en cours de revalidation.
Une étude portant sur l'adoption d'une démarche de détermination de l'empreinte carbone des produits exportés par le GCT et bilan carbone conformément aux normes ISO 14067 et ISO 14064 dans le cadre du mécanisme d'ajustement « MACF », est en cours de réalisation.
La politique qualité du GCT inclut également le déploiement d'un programme de certification progressif visant à instaurer un système intégré QSE (Qualité, Sécurité, Environnement) pour l'usine Ammonitrate, avec pour objectif de l'étendre à l'ensemble des sites de production.
Pour assurer la qualité et la conformité du phosphate de calcium, tout en améliorant la traçabilité et réduisant les risques de contamination, le GCT a lancé un projet visant à intégrer les normes GMP+ dans son usine de production de DCP, garantissant ainsi un contrôle rigoureux et une sécurité renforcée.`,
};

export default function GCTQualitePage() {
  // --- Breadcrumb Component ---
  const Breadcrumb = () => (
    <nav aria-label="breadcrumb" className="flex items-center space-x-2 mb-8">
      <Link 
        href="/" 
        className="text-slate-600 hover:text-emerald-600 transition-all duration-300 font-medium hover:scale-105"
      >
        Accueil
      </Link>
      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
      
      <span className="text-emerald-700 font-semibold" aria-current="page">
        Gestion de la Qualité
      </span>
    </nav>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Breadcrumb />

        {/* Main Content Card */}
        <div className="backdrop-blur-sm bg-white/80 shadow-2xl rounded-3xl overflow-hidden border border-white/20">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/5"></div>
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-20 -right-20 w-32 h-32 bg-white/10 rounded-full"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight">
                {qualiteContent.pageTitle}
              </h1>
              <div className="w-24 h-1 bg-white/40 mx-auto rounded-full"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 lg:p-12">
            <div className="max-w-4xl mx-auto">
              {/* Quality Badge */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full border border-emerald-200">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-emerald-800 font-semibold text-sm uppercase tracking-wide">
                    Excellence & Innovation
                  </span>
                </div>
              </div>

              {/* Main Content */}
              <div className="prose prose-lg max-w-none">
                <div className="bg-gradient-to-br from-slate-50 to-emerald-50 rounded-2xl p-8 shadow-inner border-l-4 border-emerald-500">
                  <div className="flex items-start mb-4">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-slate-700 leading-relaxed text-justify whitespace-pre-line font-medium">
                      {qualiteContent.paragraph}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quality Indicators */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-emerald-800 font-semibold mb-2">ISO 17025</h3>
                  <p className="text-slate-600 text-sm">Laboratoires accrédités</p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl border border-teal-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                    </svg>
                  </div>
                  <h3 className="text-teal-800 font-semibold mb-2">ISO 9001</h3>
                  <p className="text-slate-600 text-sm">Usine M&apos;dhilla certifiée</p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-emerald-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-slate-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                  </div>
                  <h3 className="text-slate-800 font-semibold mb-2">QSE Intégré</h3>
                  <p className="text-slate-600 text-sm">Système holistique</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}