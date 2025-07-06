import client  from '@/lib/sanity'
import Image from 'next/image'

interface Contact {
  _id: string
  titre: string
  nom: string
  poste: string
  email: string
  telephone: string
  imageUrl: string
}

export const dynamic = 'force-dynamic'
export const metadata = {
  title: "Contact - GCT",
  description: "Contactez le Groupe Chimique Tunisien pour toute question ou demande de service.",
}
export default async function ContactPage() {
  const contacts = await client.fetch(`*[_type == "contact"]{
    _id,
    titre,
    nom,
    poste,
    email,
    telephone,
    "imageUrl": image.asset->url
  }`)

  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Nos Interlocuteurs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {contacts.map((c: Contact) => (
          <div key={c._id} className="border border-gray-200 rounded-xl shadow-sm p-6 bg-white hover:shadow-md transition-shadow duration-300">
            <div className="flex flex-col h-full">
              <div className="flex-shrink-0">
                <Image 
                  src={c.imageUrl} 
                  alt={`Photo de ${c.nom}`}
                  width={300}
                  height={192}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              </div>
              <div className="flex-grow">
                <p className="text-gray-500 text-sm uppercase tracking-wider">{c.titre}</p>
                <h2 className="text-xl font-bold text-gray-800 mt-1">{c.nom}</h2>
                <p className="text-gray-600 mt-1">{c.poste}</p>
              </div>
              <div className="mt-4 space-y-2">
                <p className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href={`mailto:${c.email}`} className="hover:text-blue-600 transition-colors">{c.email}</a>
                </p>
                <p className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {c.telephone}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}