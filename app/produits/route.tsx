// app/produit/page.tsx
import { client } from '@/lib/client';
import { FaFlask, FaWeight, FaWater, FaRuler, FaIndustry, FaLeaf, FaPaw } from 'react-icons/fa';

interface Produit {
  _id: string;
  nom: string;
  type: string;
  description: string;
  analyseChimique: { element: string; valeur: string }[];
  analyseGranulometrique: { maillage: string; poids: string }[];
  solubilite: { methode: string; valeur: string }[];
  caracteristiquesPhysiques: { propriete: string; valeur: string }[];
}

export const metadata = {
  title: "Nos Produits - Groupe Chimique Tunisien",
  description: "Découvrez la gamme complète de produits phosphatés du Groupe Chimique Tunisien, adaptés à l'industrie et à l'agriculture.",
};

export default async function ProduitPage() {
  const produits: Produit[] = await client.fetch(`*[_type == "produit"]`);
  
  // Group products by type
  const groupedProduits: Record<string, Produit[]> = {};
  produits.forEach(produit => {
    if (!groupedProduits[produit.type]) {
      groupedProduits[produit.type] = [];
    }
    groupedProduits[produit.type].push(produit);
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos Produits Phares
            </h1>
            <div className="w-32 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl text-emerald-100 max-w-4xl mx-auto leading-relaxed">
              Découvrez notre gamme complète de produits phosphatés de haute qualité, 
              répondant aux normes internationales les plus strictes pour l&apos;industrie et l&apos;agriculture.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Product Type Navigation */}
        <div className="py-8 border-b border-gray-200">
          <nav className="flex justify-center">
            <div className="flex overflow-x-auto space-x-1 bg-white rounded-lg p-1 shadow-sm border">
              {Object.keys(groupedProduits).map((type, index) => (
                <a 
                  key={index}
                  href={`#${type.replace(/\s+/g, '-').toLowerCase()}`}
                  className="flex-shrink-0 px-6 py-3 text-sm font-medium text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50 rounded-md transition-all duration-200"
                >
                  {type}
                </a>
              ))}
            </div>
          </nav>
        </div>

        {/* Products by Type */}
        <div className="py-12 space-y-16">
          {Object.entries(groupedProduits).map(([type, produits], index) => (
            <section key={index} id={type.replace(/\s+/g, '-').toLowerCase()} className="scroll-mt-24">
              {/* Section Header */}
              <div className="mb-10">
                <div className="flex items-center mb-4">
                  <div className="bg-emerald-800 p-3 rounded-lg mr-4">
                    <FaFlask className="text-white text-xl" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-emerald-800">{type}</h2>
                    <p className="text-gray-600 mt-1">
                      Gamme de produits spécialisés pour diverses applications industrielles et agricoles
                    </p>
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200"></div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {produits.map((produit) => (
                  <div 
                    key={produit._id} 
                    className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 overflow-hidden"
                  >
                    {/* Product Header */}
                    <div className="bg-gradient-to-r from-emerald-800 to-emerald-700 px-6 py-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white">{produit.nom}</h3>
                          <div className="mt-1 flex items-center">
                            <span className="inline-block w-2 h-2 rounded-full bg-emerald-300 mr-2"></span>
                            <span className="text-sm text-emerald-100 font-medium">{produit.type}</span>
                          </div>
                        </div>
                        <div className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                          GCT Premium
                        </div>
                      </div>
                    </div>
                    
                    {/* Product Content */}
                    <div className="p-6">
                      <p className="text-gray-700 leading-relaxed mb-6">{produit.description}</p>
                      
                      {/* Technical Specifications */}
                      <div className="space-y-6">
                        {produit.analyseChimique?.length > 0 && (
                          <div>
                            <div className="flex items-center text-sm font-semibold text-emerald-800 mb-3">
                              <FaFlask className="mr-2 text-emerald-600" />
                              Analyse Chimique
                            </div>
                            <div className="bg-gray-50 rounded-lg border p-4">
                              <div className="space-y-2">
                                {produit.analyseChimique.map((a, idx) => (
                                  <div key={idx} className="flex justify-between items-center py-1 border-b border-gray-200 last:border-0">
                                    <span className="text-gray-600 font-medium">{a.element}</span>
                                    <span className="font-semibold text-emerald-800">{a.valeur}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {produit.analyseGranulometrique?.length > 0 && (
                          <div>
                            <div className="flex items-center text-sm font-semibold text-emerald-800 mb-3">
                              <FaWeight className="mr-2 text-emerald-600" />
                              Analyse Granulométrique
                            </div>
                            <div className="bg-gray-50 rounded-lg border overflow-hidden">
                              <table className="w-full">
                                <thead className="bg-emerald-50">
                                  <tr>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-emerald-800">Maillage</th>
                                    <th className="px-4 py-3 text-right text-sm font-semibold text-emerald-800">Poids</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {produit.analyseGranulometrique.map((g, idx) => (
                                    <tr key={idx} className="border-t border-gray-200">
                                      <td className="px-4 py-3 text-gray-600 font-medium">{g.maillage}</td>
                                      <td className="px-4 py-3 text-right font-semibold text-emerald-800">{g.poids}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}
                        
                        {produit.solubilite?.length > 0 && (
                          <div>
                            <div className="flex items-center text-sm font-semibold text-emerald-800 mb-3">
                              <FaWater className="mr-2 text-emerald-600" />
                              Solubilité
                            </div>
                            <div className="bg-gray-50 rounded-lg border p-4">
                              <div className="space-y-2">
                                {produit.solubilite.map((s, idx) => (
                                  <div key={idx} className="flex justify-between items-center py-1 border-b border-gray-200 last:border-0">
                                    <span className="text-gray-600 font-medium">{s.methode}</span>
                                    <span className="font-semibold text-emerald-800">{s.valeur}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {produit.caracteristiquesPhysiques?.length > 0 && (
                          <div>
                            <div className="flex items-center text-sm font-semibold text-emerald-800 mb-3">
                              <FaRuler className="mr-2 text-emerald-600" />
                              Caractéristiques Physiques
                            </div>
                            <div className="bg-gray-50 rounded-lg border p-4">
                              <div className="space-y-2">
                                {produit.caracteristiquesPhysiques.map((c, idx) => (
                                  <div key={idx} className="flex justify-between items-center py-1 border-b border-gray-200 last:border-0">
                                    <span className="text-gray-600 font-medium">{c.propriete}</span>
                                    <span className="font-semibold text-emerald-800">{c.valeur}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Applications Section */}
        <section className="py-16 bg-white rounded-lg shadow-sm border border-gray-200 mb-16">
          <div className="px-8 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-emerald-800 mb-4">
                Applications de Nos Produits
              </h2>
              <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Nos produits phosphatés sont essentiels dans divers secteurs industriels et agricoles
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="border border-gray-200 rounded-lg p-8 hover:shadow-sm transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="bg-emerald-800 p-4 rounded-lg mr-6">
                    <FaLeaf className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-emerald-800 mb-2">Agriculture</h3>
                    <p className="text-gray-600">
                      Engrais phosphatés pour améliorer la croissance des cultures et augmenter les rendements
                    </p>
                  </div>
                </div>
                <div className="border-l-4 border-emerald-200 pl-6">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                      Engrais NPK et superphosphates
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                      Amendements de sol
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                      Nutrition végétale spécialisée
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-8 hover:shadow-sm transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="bg-emerald-800 p-4 rounded-lg mr-6">
                    <FaIndustry className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-emerald-800 mb-2">Industrie</h3>
                    <p className="text-gray-600">
                      Matières premières pour la production d&apos;acides, de détergents et de produits chimiques
                    </p>
                  </div>
                </div>
                <div className="border-l-4 border-emerald-200 pl-6">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                      Production d&apos;acide phosphorique
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                      Fabrication de détergents
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                      Traitement des métaux
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-8 hover:shadow-sm transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="bg-emerald-800 p-4 rounded-lg mr-6">
                    <FaPaw className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-emerald-800 mb-2">Alimentation Animale</h3>
                    <p className="text-gray-600">
                      Compléments minéraux pour la nutrition animale
                    </p>
                  </div>
                </div>
                <div className="border-l-4 border-emerald-200 pl-6">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                      Phosphates dicalciques
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                      Monophosphates
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                      Additifs nutritionnels
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-8 hover:shadow-sm transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="bg-emerald-800 p-4 rounded-lg mr-6">
                    <FaWater className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-emerald-800 mb-2">Traitement de l&apos;Eau</h3>
                    <p className="text-gray-600">
                      Produits pour la purification et le traitement des eaux
                    </p>
                  </div>
                </div>
                <div className="border-l-4 border-emerald-200 pl-6">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                      Inhibiteurs de corrosion
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                      Adoucisseurs d&apos;eau
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                      Traitement des eaux usées
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Assurance */}
        <section className="mb-16">
          <div className="bg-emerald-800 rounded-lg shadow-lg overflow-hidden">
            <div className="px-8 md:px-12 py-12">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold text-white mb-4">Engagement Qualité</h2>
                  <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
                  <p className="text-emerald-100 text-lg leading-relaxed max-w-4xl mx-auto">
                    Tous nos produits sont soumis à des contrôles qualité rigoureux à chaque étape de la production.
                    Notre système de gestion qualité est certifié ISO 9001:2015, garantissant une qualité constante
                    et une traçabilité complète de nos produits.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="text-4xl font-bold text-white mb-2">99.8%</div>
                    <div className="text-emerald-200 text-sm font-medium uppercase tracking-wide">Pureté</div>
                  </div>
                  <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="text-4xl font-bold text-white mb-2">ISO</div>
                    <div className="text-emerald-200 text-sm font-medium uppercase tracking-wide">Certifications</div>
                  </div>
                  <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="text-4xl font-bold text-white mb-2">50+</div>
                    <div className="text-emerald-200 text-sm font-medium uppercase tracking-wide">Pays Clients</div>
                  </div>
                  <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="text-4xl font-bold text-white mb-2">24/7</div>
                    <div className="text-emerald-200 text-sm font-medium uppercase tracking-wide">Support Technique</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}