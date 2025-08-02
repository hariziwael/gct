import client from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import Acces from '../acces/page'

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
  const Breadcrumb = () => (
    <nav aria-label="breadcrumb" className="text-sm text-gray-500 mb-4 flex items-center">
      <Link href="/" className="hover:text-emerald-600 transition-colors focus:outline-none focus:ring focus:ring-emerald-300">Accueil</Link>
      <span className="mx-2 text-gray-400">&raquo;</span>
      <span className="font-medium text-emerald-700" aria-current="page">Contact</span>
    </nav>
  );

  const contacts = await client.fetch<Contact[]>(`*[_type == "contact"]{
    _id,
    titre,
    nom,
    poste,
    email,
    telephone,
    "imageUrl": image.asset->url
  }`)

  const gctAddress = encodeURIComponent("7 Rue d'Arabie Saoudite, Tunis 1002");
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${gctAddress}`;

  return (
    <div className="bg-emerald-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb />

        {/* Hero Section */}
        <section className="bg-emerald-700 text-white rounded-2xl shadow-lg py-12 px-6 mb-12">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-2/3">
              <h1 className="text-3xl font-extrabold mb-4">Contactez le Groupe Chimique Tunisien</h1>
              <p className="text-lg leading-relaxed">
                Notre équipe est à votre disposition pour répondre à vos questions et vous accompagner dans vos projets.
              </p>
            </div>
            <div className="mt-6 md:mt-0 md:w-1/3 text-center">
              {/* You can add a relevant image here if you have one */}
              {/* <Image src="/path/to/contact-image.svg" alt="Contact Us" width={200} height={200} /> */}
            </div>
          </div>
        </section>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-emerald-800 mb-4">Coordonnées Générales</h2>

            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start">
                <div className="mr-3">
                  <svg className="h-6 w-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-emerald-700">Siège Social</h3>
                  <p className="text-gray-600">Rue Hédi Nouira, 2035 Tunis-Carthage, Tunisie</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="mr-3">
                  <svg className="h-6 w-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-emerald-700">Téléphone</h3>
                  <p className="text-gray-600">+216 71 000 000</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="mr-3">
                  <svg className="h-6 w-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-emerald-700">Email</h3>
                  <p className="text-gray-600">contact@gct.tn</p>
                </div>
              </div>

              {/* Opening Hours */}
              <div>
                <h3 className="font-semibold text-emerald-700 mb-2">Heures d&apos;ouverture</h3>
                <div className="flex justify-between text-gray-600">
                  <span>Lundi - Vendredi</span>
                  <span>8:00 - 17:00</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Samedi - Dimanche</span>
                  <span>Fermé</span>
                </div>
              </div>
            </div>

            {/* Contact Form CTA */}
            <div className="mt-6">
              <Link href="/contact-form" className="block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-lg text-center transition-colors">
                Accéder au formulaire de contact
              </Link>
            </div>
          </div>

          {/* Team Contacts */}
          <div className="col-span-2">
            <h2 className="text-2xl font-semibold text-emerald-800 mb-4">Notre Équipe</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contacts.map((contact) => (
                <div key={contact._id} className="bg-white rounded-2xl shadow-md p-4">
                  <div className="flex items-center mb-3">
                    {contact.imageUrl && (
                      <Image
                        src={contact.imageUrl}
                        alt={contact.nom}
                        width={60}
                        height={60}
                        className="rounded-full mr-4"
                      />
                    )}
                    <div>
                      <h3 className="font-semibold text-emerald-700">{contact.nom}</h3>
                      <p className="text-gray-600 text-sm">{contact.poste}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{contact.titre}</p>
                  <div className="flex flex-col space-y-1">
                    <a href={`mailto:${contact.email}`} className="text-emerald-600 hover:text-emerald-800">
                      {contact.email}
                    </a>
                    <a href={`tel:${contact.telephone}`} className="text-emerald-600 hover:text-emerald-800">
                      {contact.telephone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <Acces />
            {/* Map Section */}
            <div className="mt-6">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-lg text-center transition-colors"
              >
                Obtenir les directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}