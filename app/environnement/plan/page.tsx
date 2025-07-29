// app/environnement/plan/page.tsx

import Link from 'next/link';
import Image from 'next/image';

export default function EnvironnementPlanPage() {
  const content = {
    pageTitle: "Plan environnemental du GCT (2009-2020)",
    partOne: {
      paragraph: `Parallèlement au développement de l'industrie phosphatière en Tunisie et afin de satisfaire aux normes nationales et internationales les plus strictes en matière de protection de l’environnement, le GCT a mis au point un vaste programme de lutte contre la pollution visant à contenir les rejets atmosphériques, liquides et solides.`,
    },
    partTwo: {
      image: {
        src: "/images/plan-environnemental-2009-2020.jpg", // Ensure this image exists in public/images/
        alt: "Vue aérienne d'une installation GCT avec des initiatives environnementales",
      },
      paragraph: `Ce plan vise à améliorer la situation de l'environnement dans tous les sites de production appartenant au GCT avec un coût de près de 1.323 millions de Dinars Tunisiens. La réalisation du plan de réhabilitation environnementale du GCT s’étaler jusqu'à 2020.`,
    },
    tables: [
      {
        site: "Site de Skhira",
        rows: [
          { item: 1, project: "Integration de la technologie Double Absorption avec HRS aux unites de production acide sulfurique pour réduire les emissions SO2 et récupérer l’énergie", situation: { dossier: false, contract: true, realised: false } },
          { item: 2, project: "Développement d’une nouvelle aire de stockage du phosphogypse pour TIFERT factory", situation: { dossier: false, contract: false, realised: true } },
          { item: 3, project: "Construction d’un digue pour stocker le phosphogypse", situation: { dossier: false, contract: false, realised: true } },
          { item: 4, project: "Construction d’une station de traitement des eaux domestiques", situation: { dossier: true, contract: false, realised: false } },
          { item: 5, project: "Construction d’une station de décharge de phosphogypse, en utilisant le mode d'empilage humide avec ligne de fond, sous-drain et système de recyclage des eaux", situation: { dossier: true, contract: false, realised: false } },
        ],
      },
      {
        site: "Site de M'dhilla",
        rows: [
          { item: 1, project: "Integration de la technologie Double Absorption avec HRS aux unites de production acide sulfurique pour réduire les émissions SO2 et récupérer l’énergie", situation: { dossier: false, contract: true, realised: false } },
          { item: 2, project: "Construction d’une station de décharge de phosphogypse, en utilisant le mode d'empilage humide avec ligne de fond, sous-drain et système recyclage des eaux", situation: { dossier: true, contract: false, realised: false } },
          { item: 3, project: "Projet de commutation du combustible fuel au gaz naturel (Projet MDP)", situation: { dossier: false, contract: true, realised: false } },
          { item: 4, project: "Rénovation des stations de tamisage d'engrais pour réduire les émanations de de la poussière", situation: { dossier: false, contract: true, realised: false } },
        ],
      },
      {
        site: "Site de Gabès",
        rows: [
          { item: 1, project: "Rénovation du système de lavage des gaz dans les unités DAP pour la reduction des émanations d’ammoniac", situation: { dossier: false, contract: "X (part II)", realised: "X (part I)" } },
          { item: 2, project: "Réduction Catalytique des NOX à l’ unite de production HNO3", situation: { dossier: false, contract: true, realised: false } },
          { item: 3, project: "Integration de la technologie Double Absorption avec HRS aux unites de production acide sulfurique (ICM2) pour réduire les émissions SO2 et récupérer l’énergie", situation: { dossier: true, contract: false, realised: false } },
          { item: 4, project: "Traitement tertiaire des eaux urbaines résiduaires pour les réutiliser comme eau industrielle", situation: { dossier: true, contract: "X (renting)", realised: false } },
          { item: 5, project: "Réutilisation dee eaux saumâtres évacuées de la station de SONEDE", situation: { dossier: true, contract: false, realised: false } },
          { item: 6, project: "Réalisation d'une usine de dessalement d'eau de mer par osmose", situation: { dossier: true, contract: false, realised: false } },
          { item: 7, project: "Abattement gaz malodorants émis durant la production d’acide phosphorique acid", situation: { dossier: true, contract: false, realised: false } },
          { item: 8, project: "Projet de décharge Phosphogypse en utilisant le transport par pipe line et le mode d'empilage humide avec ligne de fond, sous-drain et système de recyclage des eaux", situation: { dossier: true, contract: false, realised: false } },
          { item: 9, project: "Elimination des émissions d’aerosols de l’unité Nitrates d’ammonium", situation: { dossier: true, contract: false, realised: false } },
          { item: 10, project: "Lavage des émissions de gaz so2 lors des démarrages des unités sulfuriques", situation: { dossier: true, contract: false, realised: false } },
        ],
      },
      {
        site: "Projets Divers",
        rows: [
          { item: 1, project: "Mise en œuvre d’un système de surveillance des émissions de gaz sur les sites de production GCT", situation: { dossier: false, contract: "X (part II)", realised: "X (part I)" } },
          { item: 2, project: "Amélioration des conditions de déchargement soufre à Sfax et à Gabes", situation: { dossier: false, contract: false, realised: true } },
          { item: 3, project: "Etudes pour la caractérisation environnementale des unités du GCT", situation: { dossier: false, contract: "X(part I & II)", realised: "X (part III)" } },
          { item: 4, project: "Construction d’un rideau vert autour des centres de production du GCT", situation: { dossier: true, contract: false, realised: false } },
          { item: 5, project: "Récupération et recyclage du fluor des unites Phosphoriques", situation: { dossier: true, contract: false, realised: false } },
        ],
      },
    ],
    totalCost: "1323 Million de Dinars Tunisiens",
  };

  return (
    <div className="bg-emerald-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="text-sm text-gray-500 mb-4 flex items-center">
          <Link href="/" className="hover:text-emerald-600 transition-colors focus:outline-none focus:ring focus:ring-emerald-300">Accueil</Link>
          <span className="mx-2 text-gray-400">&raquo;</span>
          <Link href="/environnement" className="hover:text-emerald-600 transition-colors focus:outline-none focus:ring focus:ring-emerald-300">Environnement</Link>
          <span className="mx-2 text-gray-400">&raquo;</span>
          <span className="font-medium text-emerald-700" aria-current="page">Plan Environnemental 2009-2020</span>
        </nav>

        <section className="bg-white shadow-xl rounded-2xl p-6 md:p-8 lg:p-12 mb-12">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-emerald-800 text-center mb-6 lg:mb-8">
            {content.pageTitle}
          </h1>

          {/* Part One: Introduction */}
          <div className="mb-8 p-6 rounded-xl bg-emerald-50 shadow-sm border border-emerald-200 text-justify">
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
              {content.partOne.paragraph}
            </p>
          </div>

          {/* Part Two: Image and General Plan Info */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            {content.partTwo.image.src && (
              <div className="flex justify-center items-center">
                <div className="relative w-full max-w-md h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg border-4 border-emerald-300">
                  <Image
                    src={content.partTwo.image.src}
                    alt={content.partTwo.image.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            )}
            <div className="text-justify">
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                {content.partTwo.paragraph}
              </p>
            </div>
          </div>

          {/* Part Three: Tables for each site */}
          <div className="mb-8 p-6 rounded-xl bg-emerald-50 shadow-sm border border-emerald-200">
            <h2 className="text-2xl font-semibold text-emerald-700 mb-6 text-center">
              Plan de réhabilitation environnementale du GCT 2009-2020
            </h2>
            {content.tables.map((siteData, siteIndex) => (
              <div key={siteIndex} className="mb-6 last:mb-0">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 bg-emerald-100 p-3 rounded-md border-l-4 border-emerald-600">
                  {siteData.site}
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                    <thead>
                      <tr className="bg-gray-100 border-b border-gray-200">
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Item</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">PROJETS</th>
                        <th className="py-3 px-4 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider">Dossier Appel d’offres</th>
                        <th className="py-3 px-4 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider">Contract & Work in progress</th>
                        <th className="py-3 px-4 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider">Réalisé</th>
                      </tr>
                    </thead>
                    <tbody>
                      {siteData.rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="py-3 px-4 border-b border-gray-200 text-sm font-medium text-gray-800">{row.item}</td>
                          <td className="py-3 px-4 border-b border-gray-200 text-sm text-gray-700">{row.project}</td>
                          <td className="py-3 px-4 border-b border-gray-200 text-center text-sm text-gray-700">
                            {row.situation.dossier === true ? 'X' : (row.situation.dossier || '')}
                          </td>
                          <td className="py-3 px-4 border-b border-gray-200 text-center text-sm text-gray-700">
                            {row.situation.contract === true ? 'X' : (row.situation.contract || '')}
                          </td>
                          <td className="py-3 px-4 border-b border-gray-200 text-center text-sm text-gray-700">
                            {row.situation.realised === true ? 'X' : (row.situation.realised || '')}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          {/* Part Four: Total Cost */}
          <div className="p-6 rounded-xl bg-orange-50 shadow-sm border border-orange-200 text-center">
            <h2 className="text-2xl font-semibold text-orange-700 mb-4">
              Coût Total du Plan
            </h2>
            <p className="text-3xl font-extrabold text-orange-800">
              {content.totalCost}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}