import client from '@/lib/sanity';
import Image from 'next/image';

interface Produit {
  _id: string
  titre: string
  description: string
  categorie: string
  imageUrl?: string
}

export const metadata = {
  title: "Produits - GCT",
  description: "Découvrez les produits du Groupe Chimique Tunisien, leurs caractéristiques et leurs utilisations.",
};

export default async function Produits() {
  const query = `*[_type == "produit"]{
    _id,
    titre,
    description,
    categorie,
    "imageUrl": image.asset->url
  }`;
  const produits = await client.fetch(query);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nos Produits</h1>
          <p className="text-xl text-gray-600">
            Découvrez notre gamme complète de produits chimiques de haute qualité
          </p>
        </div>

        {produits.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Aucun produit disponible pour le moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {produits.map((produit: Produit) => (
              <div key={produit._id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {produit.imageUrl && (
                  <div className="aspect-w-16 aspect-h-9">
                    <Image
                      src={produit.imageUrl}
                      alt={produit.titre}
                      width={400}
                      height={192}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{produit.titre}</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {produit.categorie}
                    </span>
                  </div>
                  <p className="text-gray-600 line-clamp-3">
                    {produit.description}
                  </p>
                  <div className="mt-4">
                    <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
                      En savoir plus
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}