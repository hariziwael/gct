import Link from 'next/link';

const projetsContent = {
  pageTitle: "Projets en Partenariat",
  partOne: {
    paragraph1: "Le développement du secteur des phosphates en Tunisie repose sur la mise en œuvre de nouveaux projets dans un contexte de partenariat stratégique.",
    paragraph2: "A cet effet, le GCT a mis en œuvre avec succès des projets en partenariat avec SACF JV et CNCCC en Chine et avec TIFERT en Tunisie.",
    paragraph3: "Le GCT se rapproche de ses clients traditionnels en leur offrant un potentiel important d’engrais phosphatés en vue de promouvoir l’industrie des phosphates et lancer de nouveaux projets.",
  },
  partTwo: {
    sacf: {
      title: "SACF (Sino-Arab Chemical Fertilizers)",
      description: "En partenariat avec CNCCC (notre partenaire chinois), nous avons lancé un processus de fusion visant à augmenter la capacité de production annuelle pour atteindre 1,2 millions de tonnes de NPK.",
    },
    tifert: {
      title: "TIFERT (Tunisian Indian Fertilizers)",
      paragraph1: "TIFERT a été constituée le 26 Septembre 2006. Sa capacité de transformation pouvant atteindre environ 1,5 millions de tonnes de phosphate par an. Ce qui devrait accroître la capacité de production annuelle de la CPG de 8,5 millions à 10 millions de tonnes de phosphate.",
      paragraph2: "L’Acide Phosphorique marchand 54% P2O5 (360 000 T / an) sera exporté à part égale à CFL et GSFC.",
      paragraph3: "Le procédé adopté pour la production d'Acide Phosphorique est le procédé tunisien (SIAPE) avec un nouveau réacteur de conception de 1100 T P2O5 / jour.",
      paragraph4: "TIFERT s’engage à respecter rigoureusement les normes environnementales internationales.",
    },
  },
};

export default function GCTProjetsPage() {



  return (
    <div className="bg-emerald-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        

        <section className="bg-white shadow-xl rounded-2xl p-6 md:p-8 lg:p-12 mb-12">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-emerald-800 text-center mb-6 lg:mb-8">
            {projetsContent.pageTitle}
          </h1>

          {/* Introduction */}
          <div className="space-y-6 text-center bg-emerald-50 p-6 rounded-xl shadow-sm border border-emerald-200 mb-10">
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
              {projetsContent.partOne.paragraph1}
            </p>
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
              {projetsContent.partOne.paragraph2}
            </p>
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
              {projetsContent.partOne.paragraph3}
            </p>
          </div>

          {/* Projects Section */}
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {/* SACF Project */}
            <div className="bg-green-50 p-6 rounded-xl shadow-sm border border-green-200">
              <h2 className="text-2xl font-semibold text-green-700 mb-4">
                {projetsContent.partTwo.sacf.title}
              </h2>
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                {projetsContent.partTwo.sacf.description}
              </p>
            </div>

            {/* TIFERT Project */}
            <div className="bg-yellow-50 p-6 rounded-xl shadow-sm border border-yellow-200">
              <h2 className="text-2xl font-semibold text-yellow-700 mb-4">
                {projetsContent.partTwo.tifert.title}
              </h2>
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-3">
                {projetsContent.partTwo.tifert.paragraph1}
              </p>
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-3">
                {projetsContent.partTwo.tifert.paragraph2}
              </p>
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-3">
                {projetsContent.partTwo.tifert.paragraph3}
              </p>
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                {projetsContent.partTwo.tifert.paragraph4}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}