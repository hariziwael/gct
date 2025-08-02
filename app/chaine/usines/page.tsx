// app/usine/page.tsx

import client from '@/lib/sanity';
import Link from 'next/link';
import Image from 'next/image';
// @ts-expect-error - Sanity types are not defined
import { Capacite,      Usine } from '@/lib/sanity.types'

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
    <nav aria-label="breadcrumb" className="text-sm text-gray-500 mb-4 flex items-center">
      <Link href="/" className="hover:text-emerald-600 transition-colors focus:outline-none focus:ring focus:ring-emerald-300">Accueil</Link>
      <span className="mx-2 text-gray-400">&raquo;</span>
      <Link href="/chaine" className="hover:text-emerald-600 transition-colors focus:outline-none focus:ring focus:ring-emerald-300">Chaine de Valeur</Link>
      <span className="mx-2 text-gray-400">&raquo;</span>
      <span className="font-medium text-emerald-700" aria-current="page">Usines</span>
    </nav>
  );

  return (
    <section className="bg-emerald-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb />
        <h1 className="text-3xl font-extrabold text-emerald-800 mb-6 text-center">Nos Usines</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {usines.map((usine: Usine) => (
            <div key={usine._id} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {usine.imageUrl && (
                <div className="relative h-48">
                  <Image
                    src={usine.imageUrl}
                    alt={usine.nom}
                    fill
                    className="object-cover w-full"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-emerald-700 mb-2">{usine.nom}</h2>

                {usine.dateDemarrage && (
                  <p className="text-sm text-gray-500 mb-1">
                    <span className="mr-1">📅</span>
                    {usine.dateDemarrage.toString()}
                  </p>
                )}

                {usine.capaciteAnnuelle && (
                  <p className="text-sm mt-1 text-gray-600">
                    <span className="mr-1">⚙️</span>
                    Capacité annuelle: 
                    {usine.capaciteAnnuelle.toString()}
                  </p>
                )}

                {usine.capacites && usine.capacites.length > 0 && (
                  <div className="mt-2">
                    <p className="text-sm font-medium text-gray-700 mb-1">Détails des capacités :</p>
                    <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                                  {usine.capacites.map((cap: Capacite, index: number) => (
                        <li key={index}>
                          {cap.type} : 
                          {cap.capacite.toString()} 
                          {cap.unite.toString()}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {usine.description && (
                    <p className="text-gray-600 mt-3 leading-relaxed">{usine.description.toString()}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}