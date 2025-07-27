// app/recherche/siape/page.tsx

import Link from 'next/link';
import Image from 'next/image';

const siapeContent = {
  pageTitle: "Le procédé SIAPE/GCT : une innovation continue",
  partOne: {
    heading: "Le procédé SIAPE/GCT : une innovation continue dans la fabrication de l'acide phosphorique et des engrais TSP",
    paragraph: `Depuis ses débuts en 1952 avec le lancement de la première usine SIAPE, le GCT a été à l’avant-garde des technologies de transformation des phosphates en acide phosphorique et en engrais. Ce procédé a évolué au fil des décennies grâce à des recherches continues et à des innovations technologiques, marquant des étapes clés dans l’histoire de l’industrie des phosphates.`,
  },
  partTwo: {
    heading: "Évolutions du Procédé SIAPE",
    generations: [
      {
        year: "1954",
        title: "La première génération du procédé SIAPE",
        description: `Mise en œuvre pour produire de l’acide phosphorique à l’aide de multi-cuves, cette approche a marqué le début d’une production industrielle à grande échelle.`,
      },
      {
        year: "1972",
        title: "La deuxième génération",
        description: `Basée sur l’utilisation d’un réacteur unique (mono-cuve), cette avancée a permis de simplifier le processus tout en améliorant son efficacité.`,
      },
      {
        year: "1979",
        title: "La troisième génération",
        description: `Introduction du digesteur, une innovation majeure qui a optimisé les performances du procédé et renforcé sa compétitivité.`,
      },
      {
        year: "Quatrième génération",
        title: "Le procédé SIAPE/GCT moderne",
        description: `Après une décennie de recherches approfondies menées sur pilote et à l’échelle industrielle, la quatrième génération du procédé SIAPE/GCT a vu le jour. Ce procédé, conçu pour s’adapter à des capacités variées, se distingue par :`,
        subpoints: [
          `Des modules standards, tels que ceux de 600 T P₂O₅/J (installations du GCT M’dhilla et GSFC en Inde)`,
          `Des modules de grande capacité, atteignant 1100 T P₂O₅/J (notamment à l’usine de TIFERT).`,
        ],
      },
    ],
  },
  partThree: {
    heading: "Une technologie exportée à l’international",
    paragraph: `Le procédé SIAPE/GCT a été commercialisé avec succès à l’échelle internationale, témoignant de sa fiabilité et de son excellence technologique. Parmi les références notables :`,
    references: [
      "GUBRE SAMSUN (Turquie)",
      "PFI KAVALA (Grèce)",
      "GFC HOMS (Syrie)",
    ],
  },
  partFour: {
    introParagraph: `Grâce à ces innovations constantes et à une expertise reconnue, le GCT continue de jouer un rôle de premier plan dans l’industrie mondiale des phosphates, offrant des solutions technologiques performantes et adaptées aux exigences des marchés internationaux.`,
    image: {
      src: "/images/siape-gct-process.jpg", // Make sure to place your image here!
      alt: "Schéma du procédé SIAPE/GCT de fabrication de l'acide phosphorique et des engrais TSP",
    },
    tspProcess: {
      title: "Le procédé SIAPE/GCT de fabrication du TSP : une technologie performante et optimisée",
      paragraph1: `Développé par les ingénieurs du GCT, le procédé SIAPE/GCT de fabrication du Triple Superphosphate (TSP) représente une technologie innovante et fiable. Cette solution est conçue pour traiter efficacement des phosphates de qualité variée, allant des moyennes aux meilleures, tout en offrant des performances comparables à celles des procédés concurrents.`,
      generation2: {
        title: "Une deuxième génération axée sur l'efficacité énergétique",
        paragraph: `La deuxième génération de ce procédé marque une avancée significative dans l'optimisation des ressources. Basée sur l’utilisation d’acide phosphorique concentré, elle permet :`,
        benefits: [
          `Une réduction notable de la consommation spécifique d’énergie, ce qui améliore la rentabilité économique et limite l’impact environnemental ;`,
          `Une production de TSP de haute qualité, répondant aux exigences croissantes du marché agricole.`,
        ],
      },
      conclusion: `En alliant expertise technique et engagement en faveur de l’innovation, le procédé SIAPE/GCT de fabrication du TSP reflète les efforts constants du GCT pour proposer des technologies durables et compétitives, adaptées aux défis actuels de l’industrie des engrais.`,
    },
  },
  partFive: {
    heading: "Brevets d’inventions du GCT",
    intro: `Le GCT détient une vingtaine de brevets d’inventions propres, dont les plus réputés :`,
    patents: [
      { ref: "SN 95.036", title: "Procédé de réduction des teneurs en cadmium, en fluor dans l’acide phosphorique." },
      { ref: "SN 95.037", title: "Procédé de réduction des métaux lourds dans l’acide phosphorique." },
      { ref: "SN 95.038", title: "Procédé de régénération du catalyseur au vanadium utilisé lors de la conversion de l’anhydride sulfureux en anhydride sulfurique." },
      { ref: "SN 95.069", title: "Procédé de réduction des teneurs en cadmium, en fluorure et en chlorure de l’acide phosphorique marchand." },
      { ref: "TN 2014/0010", title: "Procédé de fabrication d’acide phosphorique de voie humide et dispositifs réactionnel et de filtration liés au procédé." },
      { ref: "TN 2014/0386", title: "Procédé de fabrication de triple super phosphate (TSP) et d’engrais complexes granulés, avec dispositifs réactionnel, de granulation-séchage, de conditionnement du produit et de traitement des rejets." },
      { ref: "TN2015/0508", title: "Procédé de fabrication d’un engrais phosphaté simple (SSP) par mélange de composés mûrs ou par mélange d’entités engendrant des réactions douces partielles avec dispositifs réactionnel de granulation-séchage et de conditionnement du produit." },
      { ref: "TN2018/0186", title: "Procédé de réduction des teneurs en impuretés dans l’acide phosphorique concentré." },
      { ref: "TN 2019/0043", title: "Procédé de réduction des métaux lourds dans l’acide phosphorique." },
    ],
  },
};

export default function RechercheSiapePage() {
  // --- Breadcrumb Component ---
  const Breadcrumb = () => (
    <nav className="text-sm text-gray-500 mb-6 flex items-center">
      <Link href="/" className="hover:text-blue-600 transition-colors">Accueil</Link>
      <span className="mx-2">&raquo;</span>
      <Link href="/recherche" className="hover:text-blue-600 transition-colors">Recherche & Développement</Link>
      <span className="mx-2">&raquo;</span>
      <span className="font-semibold text-blue-700">Le procédé SIAPE/GCT</span>
    </nav>
  );

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 bg-gray-50">
      <Breadcrumb />

      <section className="bg-white shadow-lg rounded-xl p-6 md:p-10 mb-12">
        <h1 className="text-4xl font-extrabold text-blue-800 text-center mb-8">
          {siapeContent.pageTitle}
        </h1>

        {/* Part One */}
        <div className="mb-10 p-6 rounded-lg bg-blue-50 shadow-sm border border-blue-200">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center">
            <svg className="w-7 h-7 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 9.586V6z" clipRule="evenodd"></path></svg>
            {siapeContent.partOne.heading}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {siapeContent.partOne.paragraph}
          </p>
        </div>

        {/* Part Two: Generations */}
        <div className="mb-10 p-6 rounded-lg bg-purple-50 shadow-sm border border-purple-200">
          <h2 className="text-2xl font-bold text-purple-700 mb-6 flex items-center">
            <svg className="w-7 h-7 mr-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3-7a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm3 11a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            {siapeContent.partTwo.heading}
          </h2>
          <div className="space-y-6">
            {siapeContent.partTwo.generations.map((gen, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                  <span className="text-purple-600 mr-2 text-2xl font-bold">{gen.year}:</span> {gen.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {gen.description}
                </p>
                {gen.subpoints && (
                  <ul className="list-disc list-inside ml-4 mt-2 text-lg text-gray-700">
                    {gen.subpoints.map((sub, subIndex) => (
                      <li key={subIndex}>{sub}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Part Three: International Export */}
        <div className="mb-10 p-6 rounded-lg bg-green-50 shadow-sm border border-green-200">
          <h2 className="text-2xl font-bold text-green-700 mb-4 flex items-center">
            <svg className="w-7 h-7 mr-3 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12 5a1 1 0 011 1v4a1 1 0 01-1 1H9.293l1.146 1.146a1 1 0 01-1.414 1.414l-2.5-2.5a1 1 0 010-1.414l2.5-2.5a1 1 0 011.414 1.414L9.707 10H12V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
            {siapeContent.partThree.heading}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            {siapeContent.partThree.paragraph}
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
            {siapeContent.partThree.references.map((ref, index) => (
              <li key={index}>{ref}</li>
            ))}
          </ul>
        </div>

        {/* Part Four: TSP Process & Image */}
        <div className="grid md:grid-cols-2 gap-8 items-start mb-10">
          <div className="order-2 md:order-1">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {siapeContent.partFour.introParagraph}
            </p>

            <div className="p-6 rounded-lg bg-yellow-50 shadow-sm border border-yellow-200">
              <h3 className="text-2xl font-bold text-yellow-700 mb-4 flex items-center">
                <svg className="w-7 h-7 mr-3 text-yellow-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 100 2 1 1 0 000-2zm-6 4a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path></svg>
                {siapeContent.partFour.tspProcess.title}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                {siapeContent.partFour.tspProcess.paragraph1}
              </p>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                {siapeContent.partFour.tspProcess.generation2.title}
              </h4>
              <p className="text-lg text-gray-700 leading-relaxed mb-3">
                {siapeContent.partFour.tspProcess.generation2.paragraph}
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                {siapeContent.partFour.tspProcess.generation2.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                {siapeContent.partFour.tspProcess.conclusion}
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center items-center">
            {siapeContent.partFour.image.src && (
              <div className="relative w-full max-w-md h-64 md:h-96 rounded-xl overflow-hidden shadow-lg border-4 border-yellow-300">
                <Image
                  src={siapeContent.partFour.image.src}
                  alt={siapeContent.partFour.image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                  priority
                />
              </div>
            )}
          </div>
        </div>

        {/* Part Five: Patents */}
        <div className="p-6 rounded-lg bg-orange-50 shadow-sm border border-orange-200">
          <h2 className="text-2xl font-bold text-orange-700 mb-4 flex items-center">
            <svg className="w-7 h-7 mr-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zM12 8a1 1 0 100-2h-3a1 1 0 100 2h3zm-3 2a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
            {siapeContent.partFive.heading}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {siapeContent.partFive.intro}
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Référence</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Titre de l’invention</th>
                </tr>
              </thead>
              <tbody>
                {siapeContent.partFive.patents.map((patent, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 border-b border-gray-200 text-sm font-medium text-gray-800">{patent.ref}</td>
                    <td className="py-3 px-4 border-b border-gray-200 text-sm text-gray-700">{patent.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Optional: Navigation back to Recherche page */}
      <div className="mt-12 text-center py-8 border-t border-gray-200">
        <Link href="/recherche" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <svg className="mr-2 -ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"></path></svg>
          Retour à la Recherche & Développement
        </Link>
      </div>
    </div>
  );
}