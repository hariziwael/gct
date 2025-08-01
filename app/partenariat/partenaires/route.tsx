import client from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'

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
    <div className="bg-emerald-50 py-12">
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        

        {/* Title & Intro */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-emerald-800 mb-4">Nos Partenaires</h1>
          <p className="text-lg text-gray-600">
            Découvrez les institutions, entreprises et acteurs qui soutiennent notre mission à travers des collaborations stratégiques.
          </p>
        </div>

        {/* Table-style layout */}
        <div className="divide-y border border-emerald-200 rounded-2xl overflow-hidden bg-white shadow-xl">
          {partenaires.map((p) => (
            <div key={p._id} className="grid grid-cols-1 md:grid-cols-5 items-center gap-4 px-6 py-6 hover:bg-emerald-50 transition-colors">
              <div className="col-span-1 flex justify-center md:justify-start">
                <Image
                  src={p.logoUrl}
                  alt={p.nom}
                  width={120}
                  height={72}
                  className="object-contain h-16 w-auto"
                />
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-semibold text-emerald-700 mb-1">{p.nom}</h3>
                <p className="text-gray-600 text-sm">{p.description}</p>
              </div>
              <div className="text-right md:justify-end">
                {p.siteWeb && (
                  <a
                    href={p.siteWeb}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-emerald-700 underline hover:text-emerald-900 transition-colors"
                  >
                    Visiter le site →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Appel à action */}
        <div className="mt-12 bg-emerald-100 border-l-4 border-emerald-400 p-6 rounded-xl text-emerald-900">
          <h2 className="text-xl font-bold mb-2">Vous souhaitez devenir partenaire de GCT ?</h2>
          <p className="mb-4 text-emerald-800">
            Contactez-nous dès aujourd&apos;hui pour explorer de nouvelles opportunités de collaboration et d&apos;innovation.
          </p>
          <button  className="bg-emerald-700 text-white px-5 py-2 rounded-md hover:bg-emerald-800 transition-colors">
           <Link href="/contact"> Proposer un partenariat</Link>
          </button>
        </div>
      </section>
    </div>
  )
}