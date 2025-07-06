import client  from '@/lib/sanity'
import { format } from 'date-fns'

export const dynamic = 'force-dynamic'
export const metadata = {
    title: "Appels d’Offres - GCT",
    description: "Consultez les appels d’offres ouverts et téléchargez les documents nécessaires pour y participer.",
  }
export default async function AppelsPage() {
  const appels = await client.fetch(`*[_type == "appelOffre"] | order(dateLimite desc){
    _id,
    titre,
    description,
    dateLimite,
    etat,
    "documentUrl": documentPdf.asset->url
  }`)

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-6">Appels d’Offres</h1>
      <div className="grid gap-4">
        {appels.map((a: any) => (
          <div key={a._id} className="border p-4 rounded-xl shadow bg-white">
            <h2 className="text-xl font-semibold mb-1">{a.titre}</h2>
            <p className="text-gray-700 mb-2">{a.description}</p>
            <p className="text-sm text-gray-500">
              📅 Date limite: {format(new Date(a.dateLimite), 'dd/MM/yyyy')}<br />
              🏷️ État: {a.etat === 'ouvert' ? 'Ouvert' : 'Fermé'}
            </p>
            {a.documentUrl && (
              <a
                href={a.documentUrl}
                target="_blank"
                className="text-blue-600 underline mt-2 inline-block"
              >
                Télécharger le cahier des charges (PDF)
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
