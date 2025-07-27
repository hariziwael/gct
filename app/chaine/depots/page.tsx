import client  from '@/lib/sanity'
import Link from 'next/link'
export const dynamic = 'force-dynamic'
export const metadata = {
  title: "Dépôts de Phosphate - GCT",
  description: "Découvrez les dépôts de phosphate du Groupe Chimique Tunisien, leurs capacités de stockage et leurs localisations.",
}
export default async function DepotsPhosphatePage() {

  const Breadcrumb = () => (
    <nav className="text-sm text-gray-500 mb-6 flex items-center">
      <Link href="/" className="hover:text-blue-600 transition-colors">Accueil</Link>
      <span className="mx-2">&raquo;</span>
    <Link href="/chaine" className="hover:text-blue-600 transition-colors">Chaine de Valeur</Link>
    <span className="mx-2">&raquo;</span>
    <span className="font-semibold text-blue-700">Dépôts de Phosphate</span>
  </nav>
    );

  const depots = await client.fetch(`*[_type == "depotPhosphate"]{
    _id,
    nom,
    capacite,
    localisation,
    description,
    "imageUrl": image.asset->url
  }`)

  return (
    <section className="p-6">
      <Breadcrumb />
      <h1 className="text-2xl font-bold mb-6">Dépôts de Phosphate</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {depots.map((depot: any) => (
          <div key={depot._id} className="border rounded-xl p-4 bg-white shadow">
            {depot.imageUrl && (
              <img src={depot.imageUrl} alt={depot.nom} className="rounded-md mb-3 h-48 w-full object-cover" />
            )}
            <h2 className="text-xl font-semibold">{depot.nom}</h2>
            <p className="text-gray-600">{depot.description}</p>
            {depot.capacite && (
              <p className="text-sm mt-2">Capacité: {depot.capacite} tonnes</p>
            )}
            {depot.localisation && (
              <p className="text-sm text-gray-500">📍 {depot.localisation}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
