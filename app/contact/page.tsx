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
    <nav className="text-sm text-gray-500 mb-6 flex items-center">
      <Link href="/" className="hover:text-blue-600 transition-colors">Accueil</Link>
      <span className="mx-2">&raquo;</span>
    
    <span className="font-semibold text-blue-700">Contact</span>
  </nav>
    );
  const contacts = await client.fetch(`*[_type == "contact"]{
    _id,
    titre,
    nom,
    poste,
    email,
    telephone,
    "imageUrl": image.asset->url
  }`)

  // Encode address for Google Maps
  const gctAddress = encodeURIComponent("Rue Hédi Nouira, 2035 Tunis-Carthage, Tunisie");
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${gctAddress}`;

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <Breadcrumb />
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="max-w-4xl">
            <div className="w-16 md:w-20 h-1 bg-cyan-400 mb-4 md:mb-6 rounded-full"></div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6">
              Contactez le Groupe Chimique Tunisien
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl">
              Notre équipe est à votre disposition pour répondre à vos questions et vous accompagner dans vos projets.
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-800/20 to-transparent"></div>
        <div className="absolute bottom-10 left-4 md:left-10 w-6 h-6 md:w-8 md:h-8 rounded-full bg-cyan-400/20 animate-pulse"></div>
      </section>

      {/* Contact Grid - Responsive Layout */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Contact Information - Left Column */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-blue-100 w-full lg:w-1/3">
              <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-6">Coordonnées Générales</h2>
              
              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-lg p-2 md:p-3 mr-3 md:mr-4">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-blue-800">Siège Social</h3>
                    <p className="text-sm md:text-base text-gray-600">Rue Hédi Nouira, 2035 Tunis-Carthage, Tunisie</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-lg p-2 md:p-3 mr-3 md:mr-4">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-blue-800">Téléphone</h3>
                    <p className="text-sm md:text-base text-gray-600">+216 71 000 000</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-lg p-2 md:p-3 mr-3 md:mr-4">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-blue-800">Email</h3>
                    <p className="text-sm md:text-base text-gray-600">contact@gct.tn</p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <h3 className="text-base md:text-lg font-semibold text-blue-800 mb-3">Heures d'ouverture</h3>
                  <div className="flex justify-between text-sm md:text-base text-gray-600 pb-2 border-b border-blue-100">
                    <span>Lundi - Vendredi</span>
                    <span>8:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between text-sm md:text-base text-gray-600 pt-2">
                    <span>Samedi - Dimanche</span>
                    <span>Fermé</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-blue-50 rounded-xl p-5 md:p-6">
                <h3 className="text-base md:text-lg font-semibold text-blue-800 mb-2">Demande d'information</h3>
                <p className="text-sm md:text-base text-gray-600 mb-3">Remplissez notre formulaire en ligne</p>
                <button className="w-full py-2.5 md:py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-lg shadow hover:shadow-md transition-all text-sm md:text-base">
                  Accéder au formulaire
                </button>
              </div>
            </div>
            
            {/* Team Contacts - Right Column */}
            <div className="w-full lg:w-2/3">
              <div className="mb-8">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="hidden md:flex items-center mr-4">
                    <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full"></div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2 md:mb-0">Notre Équipe</h2>
                </div>
                <p className="text-gray-600 mt-3 max-w-2xl text-sm md:text-base">
                  Contactez directement nos experts spécialisés
                </p>
              </div>
              
              {/* Responsive Team Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {contacts.map((c: Contact) => (
                  <div 
                    key={c._id} 
                    className="border border-blue-200 rounded-xl md:rounded-2xl p-4 md:p-5 bg-white hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row">
                      {/* Profile Image */}
                      {/* <div className="flex-shrink-0 mb-3 sm:mb-0 sm:mr-4 flex justify-center">
                        <div className="relative overflow-hidden rounded-lg w-16 h-16 md:w-20 md:h-20 border-2 border-white shadow">
                          <Image 
                            src={c.imageUrl} 
                            alt={`Photo de ${c.nom}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div> */}
                      
                      {/* Contact Info */}
                      <div className="flex-grow">
                        <span className="inline-block px-2.5 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full mb-2">
                          {c.titre}
                        </span>
                        <h3 className="text-lg md:text-xl font-bold text-blue-900">
                          {c.nom}
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base">{c.poste}</p>
                        
                        <div className="mt-3 space-y-1.5">
                          <a 
                            href={`mailto:${c.email}`} 
                            className="flex items-center text-xs md:text-sm text-gray-600 hover:text-blue-600 transition-colors"
                          >
                            <svg className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="truncate">{c.email}</span>
                          </a>
                          <a 
                            href={`tel:${c.telephone}`} 
                            className="flex items-center text-xs md:text-sm text-gray-600 hover:text-blue-600 transition-colors"
                          >
                            <svg className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            {c.telephone}
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    {/* Contact Button - Single Responsive Button */}
                    <div className="mt-4">
                      <a 
                        href={`mailto:${c.email}`}
                        className="block w-full py-2 bg-blue-50 text-blue-700 font-medium rounded-lg hover:bg-blue-100 transition-colors text-center text-sm md:text-base"
                      >
                        Contacter
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <Acces />
              {/* Map Section */}
              <div className="mt-10 bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl md:rounded-2xl overflow-hidden">
                
                <div className="p-4 md:p-6 bg-white">
                  <a 
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-2.5 md:py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-lg shadow hover:shadow-md transition-all text-center text-sm md:text-base"
                  >
                    Obtenir les directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}