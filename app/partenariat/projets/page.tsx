import Image from "next/image"

const projetsContent = {
  pageTitle: "Projets en Partenariat",
  partOne: {
    paragraph1:
      "Le développement du secteur des phosphates en Tunisie repose sur la mise en œuvre de nouveaux projets dans un contexte de partenariat stratégique.",
    paragraph2:
      "A cet effet, le GCT a mis en œuvre avec succès des projets en partenariat avec SACF JV et CNCCC en Chine et avec TIFERT en Tunisie.",
    paragraph3:
      "Le GCT se rapproche de ses clients traditionnels en leur offrant un potentiel important d'engrais phosphatés en vue de promouvoir l'industrie des phosphates et lancer de nouveaux projets.",
  },
  partTwo: {
    sacf: {
      title: "SACF (Sino-Arab Chemical Fertilizers)",
      description:
        "En partenariat avec CNCCC (notre partenaire chinois), nous avons lancé un processus de fusion visant à augmenter la capacité de production annuelle pour atteindre 1,2 millions de tonnes de NPK.",
    },
    tifert: {
      title: "TIFERT (Tunisian Indian Fertilizers)",
      paragraph1:
        "TIFERT a été constituée le 26 Septembre 2006. Sa capacité de transformation pouvant atteindre environ 1,5 millions de tonnes de phosphate par an. Ce qui devrait accroître la capacité de production annuelle de la CPG de 8,5 millions à 10 millions de tonnes de phosphate.",
      paragraph2: "L'Acide Phosphorique marchand 54% P2O5 (360 000 T / an) sera exporté à part égale à CFL et GSFC.",
      paragraph3:
        "Le procédé adopté pour la production d'Acide Phosphorique est le procédé tunisien (SIAPE) avec un nouveau réacteur de conception de 1100 T P2O5 / jour.",
      paragraph4: "TIFERT s'engage à respecter rigoureusement les normes environnementales internationales.",
    },
  },
}

export default function GCTProjetsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-600 py-16">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-white opacity-10 rounded-full -translate-x-36 -translate-y-36"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-48 translate-y-48"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
            {projetsContent.pageTitle}
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Développement stratégique du secteur des phosphates en Tunisie
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        {/* Introduction Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            projetsContent.partOne.paragraph1,
            projetsContent.partOne.paragraph2,
            projetsContent.partOne.paragraph3,
          ].map((paragraph, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 border-t-4 border-emerald-500"
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-emerald-600 font-bold text-sm">{index + 1}</span>
                </div>
                <div className="h-1 bg-emerald-200 rounded flex-1"></div>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm lg:text-base">{paragraph}</p>
            </div>
          ))}
        </div>

        {/* Projects Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nos Projets Stratégiques</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* SACF Project */}
            <div className="group">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform group-hover:scale-[1.02] transition-all duration-300">
                {/* Project Header */}
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">SACF</h3>
                        <p className="text-blue-100 text-sm">Sino-Arab Chemical Fertilizers</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Image */}
                <div className="h-52 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <Image
                    src="/images/sacf.jpg"
                    alt="SACF Industrial Complex"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">Capacité de Production</span>
                      <span className="text-sm font-bold text-blue-600">1.2M tonnes/an</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">{projetsContent.partTwo.sacf.description}</p>

                  <div className="flex items-center text-blue-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-sm font-medium">Partenariat Chine-Tunisie</span>
                  </div>
                </div>
              </div>
            </div>

            {/* TIFERT Project */}
            <div className="group">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform group-hover:scale-[1.02] transition-all duration-300">
                {/* Project Header */}
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-6 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">TIFERT</h3>
                        <p className="text-orange-100 text-sm">Tunisian Indian Fertilizers</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Image */}
                <div className="h-54 bg-gradient-to-br from-amber-100 to-orange-200 flex items-center justify-center">
                  <Image
                    src="/images/tifert.jpg"
                    alt="TIFERT Production Facility"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-amber-50 rounded-lg">
                      <div className="text-2xl font-bold text-amber-600">1.5M</div>
                      <div className="text-xs text-gray-600">tonnes/an</div>
                    </div>
                    <div className="text-center p-3 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">2006</div>
                      <div className="text-xs text-gray-600">Année de création</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      projetsContent.partTwo.tifert.paragraph1,
                      projetsContent.partTwo.tifert.paragraph2,
                      projetsContent.partTwo.tifert.paragraph3,
                      projetsContent.partTwo.tifert.paragraph4,
                    ].map((paragraph, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-700 text-sm leading-relaxed">{paragraph}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center text-amber-600 mt-6">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm font-medium">Normes Environnementales Respectées</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Impact de nos Partenariats</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">2.7M</div>
              <div className="text-sm text-gray-600">Tonnes de capacité totale</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
              <div className="text-sm text-gray-600">Partenariats stratégiques</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="text-3xl font-bold text-amber-600 mb-2">3</div>
              <div className="text-sm text-gray-600">Pays impliqués</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div className="text-3xl font-bold text-teal-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Normes environnementales</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
