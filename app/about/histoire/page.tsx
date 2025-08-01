// app/about/histoire/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import client from '@/lib/sanity';

type PDG = {
  nom: string;
  periode: string;
};

type SocietePDG = {
  _id: string;
  societe: string;
  periode: string;
  pdgs: PDG[];
};

export const metadata = {
  title: 'Histoire du GCT - GCT',
  description: 'Découvrez l’histoire du Groupe Chimique Tunisien depuis 1947 jusqu’à aujourd’hui.',
};

export default async function HistoirePage() {
  const Breadcrumb = () => (
    <nav 
      className="text-sm text-gray-600 mb-6 flex items-center flex-wrap" 
      aria-label="Fil d'Ariane"
    >
      <Link 
        href="/" 
        className="hover:text-emerald-600 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded px-1"
      >
        Accueil
      </Link>
      <span className="mx-2" aria-hidden="true">&raquo;</span>
      
     
      <span className="font-semibold text-emerald-700" aria-current="page">Histoire du GCT</span>
    </nav>
  );

  const pdgData: SocietePDG[] = await client.fetch(`*[_type == "listePDG"] | order(societe asc)`);

  return (
    <main className="bg-gradient-to-b from-emerald-50 to-white min-h-screen">
      <Breadcrumb />
      
      {/* Hero Section */}
      <section 
        className="relative py-20 bg-gradient-to-r from-emerald-900 to-emerald-700 text-white overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="max-w-4xl">
            <div className="w-20 h-1 bg-cyan-400 mb-6 rounded-full"></div>
            <h1 id="hero-heading" className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Notre Histoire
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl">
              Depuis 1947, le Groupe Chimique Tunisien façonne l&apos;industrie chimique tunisienne
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-800/20 to-transparent"></div>
        <div className="absolute bottom-10 left-10 w-8 h-8 rounded-full bg-cyan-400/20 motion-safe:animate-pulse"></div>
      </section>
      
      {/* Timeline Navigation */}
      <nav 
        className="sticky top-0 z-10 bg-white shadow-md py-4"
        aria-label="Navigation dans l&apos;historique"
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-wrap justify-center gap-2 md:gap-6">
            <Link 
              href="#intro" 
              className="px-4 py-2 bg-emerald-100 text-emerald-800 font-medium rounded-full hover:bg-emerald-200 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              Introduction
            </Link>
            <Link 
              href="#historique" 
              className="px-4 py-2 bg-emerald-100 text-emerald-800 font-medium rounded-full hover:bg-emerald-200 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              Historique
            </Link>
            <Link 
              href="#dates" 
              className="px-4 py-2 bg-emerald-100 text-emerald-800 font-medium rounded-full hover:bg-emerald-200 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              Dates Clés
            </Link>
            <Link 
              href="#pdg" 
              className="px-4 py-2 bg-emerald-100 text-emerald-800 font-medium rounded-full hover:bg-emerald-200 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              Liste des PDG
            </Link>
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-5xl py-16 space-y-20">
        {/* Intro Section */}
        <section id="intro" className="space-y-8" aria-labelledby="intro-heading">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-emerald-100">
            <h2 id="intro-heading" className="text-3xl font-bold text-emerald-900 mb-6">Fondation du GCT</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  L&apos;histoire du GCT remonte à 1947, avec la constitution de la S.I.A.P.E (Société Industrielle d&apos;Acide Phosphorique et d&apos;Engrais) implantée à Sfax, 
                  et le démarrage en 1952 de la production du Triple Super Phosphate (TSP).
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  La SIAPE apportait ainsi une valeur ajoutée au phosphate tunisien extrait par la Compagnie des Phosphates de Gafsa (CPG), marquant le début d&apos;une aventure industrielle 
                  qui allait façonner l&apos;économie tunisienne.
                </p>
              </div>
              
              <div className="relative overflow-hidden rounded-2xl border-4 border-white shadow-xl h-80">
                <Image 
                  src="/images/siape.jpg" 
                  alt="Première usine SIAPE à Sfax" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                  <p className="text-sm">Première usine SIAPE à Sfax, 1952</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Historique du GCT */}
        <section id="historique" className="space-y-8" aria-labelledby="historique-heading">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-emerald-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-emerald-600 rounded-full mr-4"></div>
              <h2 id="historique-heading" className="text-3xl font-bold text-emerald-900">Évolution Historique</h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Pendant les années 1970 - 1980, la Tunisie a poursuivi les investissements dans l&apos;industrie chimique, 
                transformant le paysage économique national et positionnant le GCT comme un acteur majeur du secteur.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="relative overflow-hidden rounded-xl border-4 border-white shadow-lg h-60">
                  <Image 
                    src="/images/historique-1.jpg" 
                    alt="Développement industriel des années 70" 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                    <p className="text-sm">Expansion industrielle des années 70</p>
                  </div>
                </div>
                
                <div className="relative overflow-hidden rounded-xl border-4 border-white shadow-lg h-60">
                  <Image 
                    src="/images/historique-2.jpg" 
                    alt="Modernisation des années 80" 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                    <p className="text-sm">Modernisation des installations dans les années 80</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-emerald-50 rounded-xl p-6 border border-emerald-200">
                <h3 className="text-xl font-bold text-emerald-800 mb-3">Notre Mission à Travers les Décennies</h3>
                <p className="text-gray-700">
                  Depuis sa création, le GCT a pour mission de valoriser les ressources phosphatées tunisiennes tout en contribuant 
                  au développement économique du pays et à la création d&apos;emplois qualifiés.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Dates Clés */}
        <section id="dates" className="space-y-8" aria-labelledby="dates-heading">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-emerald-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-orange-600 rounded-full mr-4"></div>
              <h2 id="dates-heading" className="text-3xl font-bold text-emerald-900">Dates Historiques</h2>
            </div>
            
            <div className="relative pl-8 border-l-4 border-emerald-200 space-y-10">
              {/* Timeline items */}
              <div className="relative">
                <div className="absolute -left-12 w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold">
                  47
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-emerald-900 mb-2">1947</h3>
                  <p className="text-gray-700">
                    Constitution de l&apos;usine TSP à Sfax sous le nom de SIAPE (Société Industrielle d&apos;Acide Phosphorique et d&apos;Engrais)
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-12 w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold">
                  52
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-emerald-900 mb-2">1952</h3>
                  <p className="text-gray-700">
                    Lancement de l&apos;usine TSP à Sfax, marquant le début de la production industrielle d&apos;engrais en Tunisie
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-12 w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold">
                  72
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-emerald-900 mb-2">1972</h3>
                  <p className="text-gray-700">
                    Lancement d&apos;une usine à Gabès, élargissant la capacité de production et la présence géographique du groupe
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-12 w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold">
                  83
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-emerald-900 mb-2">1983</h3>
                  <p className="text-gray-700">
                    Création du Groupe Chimique Tunisien (GCT) par la fusion de plusieurs entités spécialisées dans la transformation chimique. <br />
                    Le GCT devient le premier groupe industriel tunisien à être coté à la bourse de Tunis. <br />
                    
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-12 w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold">
                  21
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-emerald-900 mb-2">2021</h3>
                  <p className="text-gray-700">
                    Lancement du plan stratégique &quot;GCT 2030&quot; axé sur l&apos;innovation durable et la transition écologique
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Liste des PDG */}
        <section id="pdg" className="space-y-8" aria-labelledby="pdg-heading">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-emerald-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-cyan-600 rounded-full mr-4"></div>
              <h2 id="pdg-heading" className="text-3xl font-bold text-emerald-900">Direction à Travers les Âges</h2>
            </div>
            
            <div className="space-y-10">
              {pdgData.map((societe) => (
                <div key={societe._id} className="border-l-4 border-emerald-300 pl-6 py-2">
                  <div className="flex flex-wrap items-baseline gap-2 mb-4">
                    <h3 className="text-xl font-bold text-emerald-900">{societe.societe}</h3>
                    <span className="text-sm text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
                      {societe.periode}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {societe.pdgs.map((pdg, i) => (
                      <div key={i} className="bg-emerald-50 p-4 rounded-lg border border-emerald-200 hover:shadow-md transition-shadow">
                        <div className="flex items-start">
                          <div className="bg-gray-200 border-2 border-dashed border-emerald-300 rounded-xl w-16 h-16 mr-4 flex items-center justify-center">
                            <span className="text-emerald-800 font-bold">{pdg.nom.charAt(0)}</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-lg text-emerald-900">{pdg.nom}</h4>
                            <p className="text-sm text-gray-600">{pdg.periode}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}