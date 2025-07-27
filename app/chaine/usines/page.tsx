// app/usine/page.tsx

import client from '@/lib/sanity';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: "Usines - GCT",
  description: "Découvrez les usines du Groupe Chimique Tunisien, leurs capacités de production et leurs localisations.",
};

export default async function UsinesPage() {
  const usines = await client.fetch(`
    *[_type == "usine"]{
      _id,
      nom,
      dateDemarrage,
      capaciteAnnuelle,
      capacites,
      description,
      "imageUrl": image.asset->url
    }
  `);

  const Breadcrumb = () => (
    <nav className="text-sm text-gray-500 mb-6 flex items-center">
      <Link href="/" className="hover:text-blue-600 transition-colors">Accueil</Link>
      <span className="mx-2">&raquo;</span>
      <Link href="/chaine" className="hover:text-blue-600 transition-colors">Chaine de Valeur</Link>
      <span className="mx-2">&raquo;</span>
      <span className="font-semibold text-blue-700">Usines</span>
    </nav>
  );

  return (
    <section className="p-6">
      <Breadcrumb />
      <h1 className="text-2xl font-bold mb-6">Nos Usines</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {usines.map((usine: any) => (
          <div key={usine._id} className="border rounded-xl p-4 bg-white shadow">
            {usine.imageUrl && (
              <img src={usine.imageUrl} alt={usine.nom} className="rounded-md mb-3 h-48 w-full object-cover" />
            )}
            <h2 className="text-xl font-semibold">{usine.nom}</h2>

            {usine.dateDemarrage && (
              <p className="text-sm text-gray-500">📅 Démarrage : {usine.dateDemarrage}</p>
            )}

            {usine.capaciteAnnuelle && (
              <p className="text-sm mt-1 text-gray-600">⚙️ Capacité annuelle : {usine.capaciteAnnuelle}</p>
            )}

            {usine.capacites && usine.capacites.length > 0 && (
              <div className="mt-2">
                <p className="text-sm font-medium text-gray-700 mb-1">Détails des capacités :</p>
                <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                  {usine.capacites.map((cap: any, index: number) => (
                    <li key={index}>
                      {cap.type} : {cap.capacite} {cap.unite}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {usine.description && (
              <p className="text-gray-600 mt-3">{usine.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
