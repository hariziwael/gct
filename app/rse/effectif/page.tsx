import client  from '@/lib/sanity'

export const dynamic = 'force-dynamic'
export const metadata = {
  title: "Effectif - GCT",
  description: "Découvrez l'effectif du Groupe Chimique Tunisien, ses effectifs et ses départements.",
}
export default async function EffectifPage() {
  const data = await client.fetch(`*[_type == "effectif"] | order(annee desc){
    _id,
    titre,
    description,
    nombreTotal,
    departement,
    annee,
    "imageUrl": image.asset->url
  }`)

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-6">Effectif</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {data.map((item: any) => (
          <div key={item._id} className="border rounded-xl p-4 bg-white shadow">
            {item.imageUrl && (
              <img src={item.imageUrl} alt={item.titre} className="rounded-md mb-3 h-48 w-full object-cover" />
            )}
            <h2 className="text-xl font-semibold">{item.titre}</h2>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-sm text-gray-500 mt-2">
              Total: {item.nombreTotal} employés <br />
              Département: {item.departement} <br />
              Année: {item.annee}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
