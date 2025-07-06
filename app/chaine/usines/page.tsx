import client  from '@/lib/sanity'

export const dynamic = 'force-dynamic'
export const metadata = {
  title: "Usines - GCT",
  description: "Découvrez les usines du Groupe Chimique Tunisien, leurs capacités de production et leurs localisations.",
}
export default async function UsinesPage() {
  const usines = await client.fetch(`*[_type == "usine"]{
    _id,
    nom,
    ville,
    capaciteProduction,
    description,
    "imageUrl": image.asset->url
  }`)

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-6">Nos Usines</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {usines.map((usine: any) => (
          <div key={usine._id} className="border rounded-xl p-4 bg-white shadow">
            {usine.imageUrl && (
              <img src={usine.imageUrl} alt={usine.nom} className="rounded-md mb-3 h-48 w-full object-cover" />
            )}
            <h2 className="text-xl font-semibold">{usine.nom}</h2>
            <p className="text-gray-600">{usine.description}</p>
            {usine.capaciteProduction && (
              <p className="text-sm mt-2">Capacité: {usine.capaciteProduction} tonnes/an</p>
            )}
            {usine.ville && (
              <p className="text-sm text-gray-500">📍 {usine.ville}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
