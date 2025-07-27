// app/about/dg/page.tsx
import Link from 'next/link';
import Image from 'next/image';

const dgMessageContent = {
  title: "Mot du Directeur Général",
  introduction: `Le GCT, en tant qu'établissement public, occupe une position nationale et internationale de premier plan dans le domaine de la transformation du phosphate depuis sa création en 1947. Il possède aujourd'hui une vaste expérience de plus de 76 ans dans le domaine de l'industrie de l'acide phosphorique et des engrais agricoles. Il poursuit une politique d'innovation, déterminée à élargir son marché et à démontrer la stabilité de la qualité de ses produits.`,
  innovationSustainability: {
    heading: "Innovation & Durabilité : Notre Engagement pour un Avenir Meilleur",
    paragraphs: [
      `Le GCT s'efforce toujours de suivre le développement technologique, d'adopter des méthodes technologiques modernes et propres et d'améliorer la situation environnementale dans tous les centres de production en s'efforçant de répondre aux spécifications nationales et internationales applicables dans le secteur de l'industrie des engrais chimiques. L'entreprise considère le développement durable comme une source importante de réduction des coûts et d'amélioration de la compétitivité.`,
    ],
    keyBenefit: "Réduction des coûts et amélioration de la compétitivité grâce au développement durable.",
  },
  qualityCertifications: {
    heading: "Qualité Certifiée : Une Preuve de Notre Excellence",
    paragraphs: [
      `Tous les laboratoires du GCT ont obtenu un certificat d'accréditation conformément aux normes internationales ISO/IEC 17025:2017. L'accréditation comprend les méthodes d'analyse pour divers produits exportés, notamment vers les pays européens, et les matières premières fournies. Un système intégré de certification QSE pour l'usine d'Ammonitrate de Gabès est également en cours de mise en œuvre.`,
    ],
    certifications: [
      "ISO/IEC 17025:2017 (Laboratoires)",
      "Système QSE intégré (Usine d'Ammonitrate de Gabès - en cours)",
    ],
  },
  humanResources: {
    heading: "Nos Ressources Humaines : Le Cœur de Notre Succès",
    paragraphs: [
      `Les ressources humaines dans le GCT sont considérées comme l'un des éléments les plus importants du succès de l'entreprise en raison de leur rôle efficace dans le développement des capacités de l'entreprise et dans la fourniture des ressources humaines nécessaires, qu'il s'agisse d'ouvriers ou de fonctionnaires dans toutes les spécialités, ainsi que dans la fourniture d'un environnement social sain dans l’entreprise et dans son environnement extérieur. L’entreprise a clairement exprimée et démontrée que l'engagement social vise l'intégration harmonieuse du groupe qui constitue la jeunesse dans l'environnement social tunisien. En mettant l’accent sur l’amélioration des conditions de travail dans l’entreprise et en continuant à soutenir la santé et la sécurité au travail.`,
      `Le GCT attache également une grande importance à la formation professionnelle continue de ses salariés. Il travaille à motiver ses équipes de travail, à évaluer leur niveau de compétences et à les faire progresser vers le meilleur pour créer une culture au sein de l'organisation basée sur la qualité et le respect de l'éthique.`,
    ],
    values: [
      "Transparence",
      "Bonne gestion",
      "Qualité",
      "Innovation",
      "Valeurs",
      "Éthique",
    ],
  },
  societalEngagement: {
    heading: "Engagement Sociétal : Construire Ensemble l'Avenir",
    paragraphs: [
      `Dans le domaine sociétal, et dans le cadre de l'ouverture et de la réconciliation de l’entreprise avec son environnement et dans le cadre de ses responsabilités sociétales, le GCT accompagne depuis sa création les efforts de l'État en matière de soutien aux infrastructures, à l'éducation, à la santé, conseils municipaux, complexes aquatiques et soutien dans les domaines de l'environnement, de l'agriculture et de la pêche, en plus de soutenir les sports civils, en particulier dans les zones adjacentes à ses centres de production et de travailler à l'amélioration du climat interne de l'entreprise (Amicales, Commissions Administratives Paritaires, Syndicats...).`,
    ],
    definition: `La responsabilité sociale est l'engagement continu à adopter un comportement éthique et à contribuer au développement durable (dimensions sociales, environnementales et économiques).`,
    recentFocus: `Ces dernières années peuvent être considérées comme des années de renforcement de la coopération et de la communication entre le GCT et la société civile à proximité des sites de production.`,
  },
  environmentalStewardship: {
    heading: "Protection de l'Environnement : Notre Priorité Durable",
    paragraphs: [
      `Dans le domaine environnemental, le GCT a poursuivi la mise en œuvre de son programme environnemental qui vise avant tout à réconcilier l'entreprise avec son environnement. Ce programme comprend une réhabilitation environnementale complète des usines du GCT en intégrant des méthodes technologiques modernes et propres dans le domaine de la production, en améliorant la qualité de l'air en réduisant les émissions gazeuses, en préservant les ressources en eau et en maitrisant l'énergie.`,
    ],
    climateStrategy: {
      heading: "Dans le cadre de la Stratégie Nationale Bas Carbone (SNBC):",
      initiatives: [
        "Réduire les émissions de gaz à effet de serre.",
        "Développer un ensemble de mesures en matière d'efficacité énergétique et d'énergies renouvelables.",
        "Réaliser une étude portant sur l'adoption d'une démarche de détermination de l'empreinte carbone des produits exportés par le GCT conformément aux normes ISO 14067 et ISO 14064 dans le cadre du mécanisme d'ajustement « MACF ».",
        "Réaliser une étude complète de dépollution de tous les centres de production.",
      ],
    },
  },
  researchInnovation: {
    heading: "Recherche Scientifique & Innovation : Penser l'Avenir",
    paragraphs: [
      `Dans le domaine de la recherche scientifique, le GCT estime que l'innovation dépend de plus en plus de la capacité des experts académiques et industriels à travailler ensemble sur de nombreux sujets liés à ses activités. Dans ce contexte, nous avons construit un système de coopération avec l'université qui s'appuie sur le parrainage de chercheurs universitaires pour résoudre des questions liées aux activités de l'entreprise afin de proposer des solutions aux problèmes liés aux processus de fabrication, à l'amélioration de la qualité des produits, à la préservation de l’environnement et des ressources en eau traditionnelles, ainsi que le contrôle et l’efficacité énergétiques.`,
    ],
  },
  challengeConclusion: {
    heading: "Le Défi de Demain : Se Démarquer par l'Excellence",
    paragraphs: [
      `Le défi auquel nous sommes confrontés aujourd’hui n’est pas seulement de bien travailler, mais aussi de mieux nous démarquer des autres concurrents. Nous devons tous travailler sans relâche, à tous les niveaux, pour faire respecter ces valeurs et ces règles, et que chacun d'entre nous soit garant de leur respect.`,
    ],
    gratitude: `Enfin, nous adressons nos remerciements à tous les travailleurs de notre entreprise qui contribuent à créer de la richesse, en surmontant quotidiennement les défis dans un climat social difficile depuis 2011. Merci à nos partenaires et clients pour leur confiance renouvelée. Nous continuerons à écouter nos employés et nos clients pour rester un leader sur les marchés locaux et mondiaux.`,
  },
  directorGeneralName: "Le Directeur Général",
};

const Breadcrumb = () => (
  <nav className="text-sm text-gray-500 mb-6 flex items-center">
    <Link href="/" className="hover:text-blue-600 transition-colors">Accueil</Link>
    <span className="mx-2">&raquo;</span>
    <Link href="/about" className="hover:text-blue-600 transition-colors">À propos</Link>
    <span className="mx-2">&raquo;</span>
    <span className="font-semibold text-blue-700">Mot du Directeur Général</span>
  </nav>
);

const SectionHeader = ({ title, subtitle, icon }: { title: string; subtitle?: string; icon?: string }) => (
  <div className="mb-8">
    <div className="flex items-center mb-4">
      {icon && <span className="text-2xl mr-3">{icon}</span>}
      <h2 className="text-2xl md:text-3xl font-bold text-blue-900 border-l-4 border-blue-600 pl-4 py-1">
        {title}
      </h2>
    </div>
    {subtitle && <p className="text-gray-600 max-w-3xl">{subtitle}</p>}
  </div>
);

const ValueCard = ({ value }: { value: string }) => (
  <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-all">
    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
      <span className="text-2xl text-blue-600">★</span>
    </div>
    <h3 className="font-bold text-blue-800">{value}</h3>
  </div>
);

const TimelineItem = ({ year, title, description }: { year: string; title: string; description: string }) => (
  <div className="flex">
    <div className="flex flex-col items-center mr-4">
      <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
        {year}
      </div>
      <div className="w-1 h-full bg-blue-200 mt-2"></div>
    </div>
    <div className="pb-8">
      <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

export default function DirectorGeneralMessagePage() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <Breadcrumb />
              <div className="w-20 h-1 bg-cyan-400 mb-6 rounded-full"></div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                {dgMessageContent.title}
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl">
                {dgMessageContent.introduction}
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="relative w-64 h-64 rounded-full border-4 border-white shadow-2xl overflow-hidden">
                <Image
                  src="/images/dg-photo.jpg"
                  alt="Directeur Général"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-800/20 to-transparent"></div>
        <div className="absolute bottom-10 left-10 w-8 h-8 rounded-full bg-cyan-400/20 animate-pulse"></div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-6xl py-16">
        {/* Innovation & Sustainability */}
        <section className="mb-16">
          <SectionHeader 
            title={dgMessageContent.innovationSustainability.heading}
            subtitle="Adopter des méthodes modernes et propres pour un développement durable"
            icon="🌱"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100">
              {dgMessageContent.innovationSustainability.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-700 mb-4">
                  {p}
                </p>
              ))}
              <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded-lg mt-4">
                <p className="text-blue-800 font-medium">
                  {dgMessageContent.innovationSustainability.keyBenefit}
                </p>
              </div>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden h-80 border-4 border-white shadow-lg">
              <Image
                src="/images/innovation.jpg"
                alt="Innovation et développement durable"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                <p>Centre de recherche GCT - Développement de solutions durables</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quality & Certifications */}
        <section className="mb-16">
          <SectionHeader 
            title={dgMessageContent.qualityCertifications.heading}
            subtitle="Nos certifications internationales, gage de notre engagement qualité"
            icon="🏅"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative rounded-2xl overflow-hidden h-80 border-4 border-white shadow-lg">
              <Image
                src="/images/lab-quality.jpg"
                alt="Laboratoire certifié ISO"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                <p>Laboratoire GCT - Certification ISO/IEC 17025:2017</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100">
              {dgMessageContent.qualityCertifications.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-700 mb-6">
                  {p}
                </p>
              ))}
              
              <div className="space-y-4">
                {dgMessageContent.qualityCertifications.certifications.map((cert, i) => (
                  <div key={i} className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-lg mr-4">
                      <span className="text-blue-600">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-800">{cert.split('(')[0]}</h4>
                      <p className="text-gray-600">{cert.split('(')[1]?.replace(')', '')}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Human Resources */}
        <section className="mb-16">
          <SectionHeader 
            title={dgMessageContent.humanResources.heading}
            subtitle="Investir dans nos talents pour bâtir une culture d'excellence"
            icon="👥"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100">
              {dgMessageContent.humanResources.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-700 mb-4">
                  {p}
                </p>
              ))}
              
              <div className="mt-8">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Nos Valeurs Fondamentales</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {dgMessageContent.humanResources.values.map((value) => (
                    <ValueCard key={value} value={value} />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden h-80 border-4 border-white shadow-lg">
              <Image
                src="/images/team.jpg"
                alt="Équipe GCT"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                <p>L'équipe GCT - Notre plus grande force</p>
              </div>
            </div>
          </div>
        </section>

        {/* Societal Engagement */}
        <section className="mb-16">
          <SectionHeader 
            title={dgMessageContent.societalEngagement.heading}
            subtitle="Un engagement fort pour le développement de notre communauté"
            icon="🤝"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-2xl overflow-hidden h-80 border-4 border-white shadow-lg">
              <Image
                src="/images/community.jpg"
                alt="Engagement communautaire"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                <p>Projets communautaires soutenus par GCT</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100">
              {dgMessageContent.societalEngagement.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-700 mb-4">
                  {p}
                </p>
              ))}
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg mt-6">
                <p className="text-yellow-800 italic">
                  "{dgMessageContent.societalEngagement.definition}"
                </p>
              </div>
              
              <p className="text-gray-700 mt-4">
                {dgMessageContent.societalEngagement.recentFocus}
              </p>
            </div>
          </div>
        </section>

        {/* Environmental Stewardship */}
        <section className="mb-16">
          <SectionHeader 
            title={dgMessageContent.environmentalStewardship.heading}
            subtitle="Des actions concrètes pour un environnement plus sain"
            icon="🌿"
          />
          
          <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 border border-green-100">
            {dgMessageContent.environmentalStewardship.paragraphs.map((p, i) => (
              <p key={i} className="text-gray-700 mb-6">
                {p}
              </p>
            ))}
            
            <h3 className="text-xl font-bold text-green-800 mb-4">
              {dgMessageContent.environmentalStewardship.climateStrategy.heading}
            </h3>
            
            <div className="space-y-3">
              {dgMessageContent.environmentalStewardship.climateStrategy.initiatives.map((item, i) => (
                <div key={i} className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <span className="text-green-600">✓</span>
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research & Innovation */}
        <section className="mb-16">
          <SectionHeader 
            title={dgMessageContent.researchInnovation.heading}
            subtitle="Une collaboration étroite avec le monde académique pour innover"
            icon="🔬"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 border border-purple-100">
              {dgMessageContent.researchInnovation.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-700 mb-4">
                  {p}
                </p>
              ))}
              
              <div className="mt-6 flex items-center">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <span className="text-purple-600 text-xl">🎓</span>
                </div>
                <p className="text-gray-700">
                  Le GCT collabore avec plusieurs universités tunisiennes pour développer des solutions innovantes.
                </p>
              </div>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden h-80 border-4 border-white shadow-lg">
              <Image
                src="/images/research.jpg"
                alt="Recherche scientifique"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                <p>Collaboration entre GCT et les universités tunisiennes</p>
              </div>
            </div>
          </div>
        </section>

        {/* Historical Timeline */}
        <section className="mb-16 bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
          <SectionHeader 
            title="Notre Héritage & Expertise"
            subtitle="Plus de 76 ans au service de l'innovation dans la transformation du phosphate"
            icon="🕰️"
          />
          
          <div className="space-y-2">
            <TimelineItem 
              year="47"
              title="1947 : Fondation du GCT"
              description="Création de la S.I.A.P.E (Société Industrielle d'Acide Phosphorique et d'Engrais) implantée à Sfax."
            />
            
            <TimelineItem 
              year="52"
              title="1952 : Démarrage de la production"
              description="Lancement de la production du Triple Super Phosphate (TSP)."
            />
            
            <TimelineItem 
              year="72"
              title="1972 : Expansion industrielle"
              description="Lancement d'une usine à Gabès, élargissant la capacité de production."
            />
            
            <TimelineItem 
              year="83"
              title="1983 : Transformation en Groupe"
              description="Création officielle du Groupe Chimique Tunisien (GCT)."
            />
            
            <TimelineItem 
              year="21"
              title="2021 : Stratégie 2030"
              description="Lancement du plan stratégique 'GCT 2030' axé sur l'innovation durable."
            />
          </div>
        </section>

        {/* Conclusion */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-8 text-white">
          <div className="max-w-4xl mx-auto">
            <SectionHeader 
              title={dgMessageContent.challengeConclusion.heading}
              subtitle="Travaillons ensemble pour l'excellence et un avenir prometteur"
              icon="✨"
            />
            
            <div className="prose prose-invert max-w-none text-blue-100">
              {dgMessageContent.challengeConclusion.paragraphs.map((p, i) => (
                <p key={i} className="text-lg">
                  {p}
                </p>
              ))}
              
              <blockquote className="border-l-4 border-cyan-400 pl-4 my-6 italic">
                "{dgMessageContent.challengeConclusion.gratitude}"
              </blockquote>
              
              <div className="mt-8 flex flex-col items-end">
                <p className="text-2xl font-bold">{dgMessageContent.directorGeneralName}</p>
                <p className="text-lg">Groupe Chimique Tunisien</p>
              </div>
            </div>
          </div>
        </section>

        {/* Explore More */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">Découvrez le GCT</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg shadow hover:shadow-lg transition-all">
              Notre Histoire
            </Link>
            <Link href="/produits" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg shadow hover:shadow-lg transition-all">
              Nos Produits
            </Link>
            <Link href="/rse" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg shadow hover:shadow-lg transition-all">
              Engagement RSE
            </Link>
            <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg shadow hover:shadow-lg transition-all">
              Contactez-nous
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}