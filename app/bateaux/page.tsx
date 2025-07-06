import client from '@/lib/sanity'
import { format } from 'date-fns'

export const dynamic = 'force-dynamic'
export const metadata = {
  title: "Suivi des Bateaux - GCT",
  description: "Consultez le suivi des bateaux et les informations de navigation.",
}

export default async function BateauxPage() {
  const bateaux = await client.fetch(`*[_type == "bateaux"] | order(dateArrivee desc){
    _id,
    nom,
    type,
    produit,
    quantite,
    port,
    dateArrivee
  }`)

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-6">Suivi des Bateaux</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {bateaux.map((b: any) => (
          <div key={b._id} className="border rounded-xl p-4 bg-white shadow">
            <h2 className="text-xl font-semibold mb-2">{b.nom}</h2>
            <p className="text-sm text-gray-600">📦 {b.produit} ({b.quantite} tonnes)</p>
            <p className="text-sm text-gray-600">⚓ {b.port}</p>
            <p className="text-sm text-gray-500 mt-1">
              Type: {b.type === 'import' ? 'Importation' : 'Exportation'}
            </p>
            <p className="text-sm text-gray-500">
              Date d’arrivée : {format(new Date(b.dateArrivee), 'dd/MM/yyyy')}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
