import client from '@/lib/sanity'
import Image from 'next/image'

interface Partenaire {
  _id: string
  nom: string
  description: string
  siteWeb?: string
  logoUrl: string
}

export const dynamic = 'force-dynamic'

export const metadata = {
  title: "Partenaires - GCT",
  description: "Découvrez les partenaires de GCT et leurs contributions.",
}

export default async function PartenairesPage() {
  const partenaires: Partenaire[] = await client.fetch(`
    *[_type == "partenaire"]{
      _id,
      nom,
      description,
      siteWeb,
      "logoUrl": logo.asset->url
    }
  `)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

        {/* Title & Intro */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Nos Partenaires</h1>
          <p className="text-lg text-gray-600">
            Découvrez les institutions, entreprises et acteurs qui soutiennent notre mission à travers des collaborations stratégiques.
          </p>
        </div>

        {/* Table-style layout */}
        <div className="divide-y border border-blue-100 rounded-xl overflow-hidden bg-gray-50 shadow-sm">
          {partenaires.map((p) => (
            <div key={p._id} className="grid grid-cols-1 md:grid-cols-5 items-center gap-4 px-6 py-6 hover:bg-blue-50 transition-colors">
              <div className="col-span-1 flex justify-center md:justify-start">
                <Image
                  src={p.logoUrl}
                  alt={p.nom}
                  width={100}
                  height={60}
                  className="object-contain h-16 w-auto"
                />
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-semibold text-blue-800 mb-1">{p.nom}</h3>
                <p className="text-gray-600 text-sm">{p.description}</p>
              </div>
              <div className="text-right md:justify-end">
                {p.siteWeb && (
                  <a
                    href={p.siteWeb}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-700 underline hover:text-blue-900"
                  >
                    Visiter le site →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Appel à action */}
        <div className="bg-blue-100 border-l-4 border-blue-400 p-6 rounded-lg text-blue-900">
          <h2 className="text-xl font-bold mb-2">Vous souhaitez devenir partenaire de GCT ?</h2>
          <p className="mb-4 text-blue-800">
            Contactez-nous dès aujourd'hui pour explorer de nouvelles opportunités de collaboration et d'innovation.
          </p>
          <button className="bg-blue-700 text-white px-5 py-2 rounded-md hover:bg-blue-800 transition">
            Proposer un partenariat
          </button>
        </div>

      </div>
    </section>
  )
}
