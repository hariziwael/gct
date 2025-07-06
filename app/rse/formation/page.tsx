import  client  from '@/lib/sanity'
import { format } from 'date-fns'

export const dynamic = 'force-dynamic'
export const metadata = {
  title: "Formations - GCT",
  description: "Découvrez les formations proposées par le Groupe Chimique Tunisien, leurs dates et leurs lieux.",
}     
export default async function FormationPage() {
  const formations = await client.fetch(`*[_type == "formation"] | order(dateDebut desc){
    _id,
    titre,
    description,
    dateDebut,
    dateFin,
    lieu,
    "imageUrl": image.asset->url
  }`)

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-6">Formations</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {formations.map((item: any) => (
          <div key={item._id} className="border rounded-xl p-4 bg-white shadow">
            {item.imageUrl && (
              <img src={item.imageUrl} alt={item.titre} className="rounded-md mb-3 h-48 w-full object-cover" />
            )}
            <h2 className="text-xl font-semibold">{item.titre}</h2>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-sm mt-2 text-gray-500">
              📅 Du {format(new Date(item.dateDebut), 'dd/MM/yyyy')} au {format(new Date(item.dateFin), 'dd/MM/yyyy')}<br />
              📍 {item.lieu}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
