import  client  from '@/lib/sanity'

export const dynamic = 'force-dynamic'
export const metadata = {
  title: "Responsabilité Sociétale (RSE) - GCT",
  description: "Découvrez les initiatives de responsabilité sociétale du Groupe Chimique Tunisien, ses actions pour la protection de l'environnement et la promotion de la santé et du bien-être.",
}
export default async function RsePage() {
  const initiatives = await client.fetch(`*[_type == "rse"] | order(_createdAt desc){
    _id,
    titre,
    description,
    categorie,
    "imageUrl": image.asset->url
  }`)

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-6">Responsabilité Sociétale (RSE)</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {initiatives.map((item: any) => (
          <div key={item._id} className="border rounded-xl p-4 bg-white shadow">
            {item.imageUrl && (
              <img src={item.imageUrl} alt={item.titre} className="rounded-md mb-3 h-48 w-full object-cover" />
            )}
            <h2 className="text-xl font-semibold">{item.titre}</h2>
            <p className="text-gray-600">{item.description}</p>
            {item.categorie && (
              <p className="text-sm text-gray-500 mt-2">Catégorie: {item.categorie}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
