import client  from '@/lib/sanity'
import Link from 'next/link'
export const dynamic = 'force-dynamic'
export const metadata = {
  title: "Production - GCT",
  description: "Découvrez la production du Groupe Chimique Tunisien, ses capacités de production et ses produits.",
}
export default async function ProductionPage() {



  const Breadcrumb = () => (
    <nav className="text-sm text-gray-500 mb-6 flex items-center">
      <Link href="/" className="hover:text-blue-600 transition-colors">Accueil</Link>
      <span className="mx-2">&raquo;</span>
    <Link href="/chaine" className="hover:text-blue-600 transition-colors">Chaine de Valeur</Link>
    <span className="mx-2">&raquo;</span>
    <span className="font-semibold text-blue-700">Production</span>
  </nav>
    );

  const productions = await client.fetch(`*[_type == "production"] | order(annee desc){
    _id,
    titre,
    description,
    annee,
    quantite,
    "imageUrl": image.asset->url
  }`)

  return (
    <section className="p-6">
      <Breadcrumb />

      <h1 className="text-2xl font-bold mb-6">Production</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {productions.map((item: any) => (
          <div key={item._id} className="border rounded-xl p-4 bg-white shadow">
            {item.imageUrl && (
              <img src={item.imageUrl} alt={item.titre} className="rounded-md mb-3 h-48 w-full object-cover" />
            )}
            <h2 className="text-xl font-semibold">{item.titre}</h2>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-sm mt-2">Année: {item.annee}</p>
            <p className="text-sm text-gray-700">Quantité: {item.quantite} tonnes</p>
          </div>
        ))}
      </div>
    </section>
  )
}
