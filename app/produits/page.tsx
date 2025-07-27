// app/produit/page.tsx
import { client } from '@/lib/client';
import Image from 'next/image';
import { FaFlask, FaWeight, FaWater, FaRuler } from 'react-icons/fa';

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">
          Nos Produits Phares
        </h1>
        <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Découvrez notre gamme complète de produits phosphatés de haute qualité, 
          répondant aux normes internationales les plus strictes.
        </p>
      </div>

      {/* Product Type Navigation */}
      <div className="mb-12">
        <div className="flex overflow-x-auto pb-2 space-x-4 scrollbar-hide">
          {Object.keys(groupedProduits).map((type, index) => (
            <a 
              key={index}
              href={`#${type.replace(/\s+/g, '-').toLowerCase()}`}
              className="flex-shrink-0 px-6 py-3 bg-emerald-100 text-emerald-800 rounded-full hover:bg-emerald-200 transition-colors font-medium"
            >
              {type}
            </a>
          ))}
        </div>
      </div>

      {/* Products by Type */}
      <div className="space-y-20">
        {Object.entries(groupedProduits).map(([type, produits], index) => (
          <section key={index} id={type.replace(/\s+/g, '-').toLowerCase()} className="scroll-mt-24">
            <div className="mb-10 border-b border-emerald-200 pb-4">
              <h2 className="text-2xl font-bold text-emerald-800 flex items-center">
                <FaFlask className="mr-3 text-emerald-600" />
                {type}
              </h2>
              <p className="text-gray-600 mt-2">
                Gamme de produits spécialisés pour diverses applications industrielles et agricoles
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {produits.map((produit) => (
                <div 
                  key={produit._id} 
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{produit.nom}</h3>
                        <div className="mt-1 flex items-center">
                          <span className="inline-block w-3 h-3 rounded-full bg-emerald-500 mr-2"></span>
                          <span className="text-sm text-emerald-700 font-medium">{produit.type}</span>
                        </div>
                      </div>
                      <div className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-1 rounded-full">
                        GCT Premium
                      </div>
                    </div>
                    
                    <p className="mt-4 text-gray-600">{produit.description}</p>
                    
                    {/* Technical Specifications */}
                    <div className="mt-6 space-y-5">
                      {produit.analyseChimique?.length > 0 && (
                        <div>
                          <div className="flex items-center text-sm font-medium text-gray-900 mb-2">
                            <FaFlask className="mr-2 text-emerald-600" />
                            Analyse Chimique
                          </div>
                          <div className="bg-gray-50 rounded-lg p-3">
                            <ul className="space-y-2">
                              {produit.analyseChimique.map((a, idx) => (
                                <li key={idx} className="flex justify-between text-sm">
                                  <span className="text-gray-600">{a.element}</span>
                                  <span className="font-medium">{a.valeur}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                      
                      {produit.analyseGranulometrique?.length > 0 && (
                        <div>
                          <div className="flex items-center text-sm font-medium text-gray-900 mb-2">
                            <FaWeight className="mr-2 text-emerald-600" />
                            Analyse Granulométrique
                          </div>
                          <div className="bg-gray-50 rounded-lg p-3">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="border-b border-gray-200">
                                  <th className="py-1 text-left text-gray-600 font-normal">Maillage</th>
                                  <th className="py-1 text-right font-medium">Poids</th>
                                </tr>
                              </thead>
                              <tbody>
                                {produit.analyseGranulometrique.map((g, idx) => (
                                  <tr key={idx} className="border-b border-gray-100 last:border-0">
                                    <td className="py-1.5 text-gray-600">{g.maillage}</td>
                                    <td className="py-1.5 text-right font-medium">{g.poids}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}
                      
                      {produit.solubilite?.length > 0 && (
                        <div>
                          <div className="flex items-center text-sm font-medium text-gray-900 mb-2">
                            <FaWater className="mr-2 text-emerald-600" />
                            Solubilité
                          </div>
                          <div className="bg-gray-50 rounded-lg p-3">
                            <ul className="space-y-2">
                              {produit.solubilite.map((s, idx) => (
                                <li key={idx} className="flex justify-between text-sm">
                                  <span className="text-gray-600">{s.methode}</span>
                                  <span className="font-medium">{s.valeur}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                      
                      {produit.caracteristiquesPhysiques?.length > 0 && (
                        <div>
                          <div className="flex items-center text-sm font-medium text-gray-900 mb-2">
                            <FaRuler className="mr-2 text-emerald-600" />
                            Caractéristiques Physiques
                          </div>
                          <div className="bg-gray-50 rounded-lg p-3">
                            <ul className="space-y-2">
                              {produit.caracteristiquesPhysiques.map((c, idx) => (
                                <li key={idx} className="flex justify-between text-sm">
                                  <span className="text-gray-600">{c.propriete}</span>
                                  <span className="font-medium">{c.valeur}</span>
                                </li>
                              ))}
                            </ul>
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
      <section className="mt-20 bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-2xl p-8 md:p-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-4">
              Applications de Nos Produits
            </h2>
            <p className="text-gray-700">
              Nos produits phosphatés sont essentiels dans divers secteurs industriels et agricoles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start mb-4">
                <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                  <FaFlask className="text-emerald-700 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Agriculture</h3>
                  <p className="text-gray-600 mt-1">
                    Engrais phosphatés pour améliorer la croissance des cultures et augmenter les rendements
                  </p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-700 pl-4">
                <li className="list-disc">Engrais NPK et superphosphates</li>
                <li className="list-disc">Amendements de sol</li>
                <li className="list-disc">Nutrition végétale spécialisée</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start mb-4">
                <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                  <FaFlask className="text-emerald-700 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Industrie</h3>
                  <p className="text-gray-600 mt-1">
                    Matières premières pour la production d'acides, de détergents et de produits chimiques
                  </p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-700 pl-4">
                <li className="list-disc">Production d'acide phosphorique</li>
                <li className="list-disc">Fabrication de détergents</li>
                <li className="list-disc">Traitement des métaux</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start mb-4">
                <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                  <FaFlask className="text-emerald-700 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Alimentation Animale</h3>
                  <p className="text-gray-600 mt-1">
                    Compléments minéraux pour la nutrition animale
                  </p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-700 pl-4">
                <li className="list-disc">Phosphates dicalciques</li>
                <li className="list-disc">Monophosphates</li>
                <li className="list-disc">Additifs nutritionnels</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start mb-4">
                <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                  <FaFlask className="text-emerald-700 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Traitement de l'Eau</h3>
                  <p className="text-gray-600 mt-1">
                    Produits pour la purification et le traitement des eaux
                  </p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-700 pl-4">
                <li className="list-disc">Inhibiteurs de corrosion</li>
                <li className="list-disc">Adoucisseurs d'eau</li>
                <li className="list-disc">Traitement des eaux usées</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="mt-20">
        <div className="bg-emerald-800 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Engagement Qualité</h2>
            <p className="text-emerald-100 mb-8">
              Tous nos produits sont soumis à des contrôles qualité rigoureux à chaque étape de la production.
              Notre système de gestion qualité est certifié ISO 9001:2015, garantissant une qualité constante
              et une traçabilité complète de nos produits.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold">99.8%</div>
                <div className="text-emerald-200 mt-1">Pureté</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">ISO</div>
                <div className="text-emerald-200 mt-1">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-emerald-200 mt-1">Pays Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-emerald-200 mt-1">Support Technique</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}