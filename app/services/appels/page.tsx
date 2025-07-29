import client  from '@/lib/sanity'
import { format } from 'date-fns'
import Link from "next/link"
export const dynamic = 'force-dynamic'
export const metadata = {
    title: "Appels d’Offres - GCT",
    description: "Consultez les appels d’offres ouverts et téléchargez les documents nécessaires pour y participer.",
  }
export default async function AppelsPage() {







  const Breadcrumb = () => (
    <nav className="text-sm text-gray-500 mb-6 flex items-center">
    <Link href="/" className="hover:text-emerald-600 transition-colors">Accueil</Link>
    <span className="mx-2">&raquo;</span>
    
    <Link href="/services" className="hover:text-emerald-600 transition-colors">
    Services</Link>
    <span className="mx-2">&raquo;</span>
    <span className="font-semibold text-emerald-700">Appels</span>
  </nav>
    );


  const appels = await client.fetch(`*[_type == "appelOffre"] | order(dateLimite desc){
    _id,
    titre,
    description,
    dateLimite,
    etat,
    "documentUrl": documentPdf.asset->url
  }`)

  return (
    <section className="p-6 bg-emerald-50 py-12">
      <Breadcrumb />
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
                className="text-emerald-600 underline mt-2 inline-block"
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
