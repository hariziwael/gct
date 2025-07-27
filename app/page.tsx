import client from '@/lib/sanity'
import Image from 'next/image'
import ActualitesPage from './actualites/page'
import Produits from './produits/page'
import { Link } from 'lucide-react'

interface HeroBanner {
  titre: string
  sousTitre: string
  imageUrl: string
}
export const metadata = {
  title: "Accueil - GCT",
  description: "Découvrez le Groupe Chimique Tunisien, ses activités et ses produits.",
}
export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const hero: HeroBanner | null = await client.fetch(`*[_type == "heroBanner"][0]{
    titre,
    sousTitre,
    "imageUrl": image.asset->url
  }`)

  return (
    <main>
      {/* Professional Hero Banner */}

      {/* Spacer to prevent content from being hidden under fixed navbars */}
      <div className="h-32"></div>

      {/* Hero Section to Showcase Transparency Effect */}
      <div className="relative h-screen bg-gradient-to-b from-emerald-900 to-emerald-700 flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Groupe Chimique Tunisien
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-8 drop-shadow-md">
            Leader dans la production et l'exportation de phosphate depuis plus de 60 ans
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-emerald-800 hover:bg-emerald-100 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              <Link href='#produit'>Découvrir nos produits</Link> {/*i want to don in page Produits when i click on button but how ? */}
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-full transition-all duration-300">
              <Link href='/contact'>Contactez-nous</Link>
            </button>
          </div>
        </div>
      </div>
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {hero && (
          <div className="absolute inset-0 w-full h-full">
            {/* Background Image with Gradient Overlay */}
            <Image
              src={hero.imageUrl}
              alt="Industrial Banner"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 to-blue-800/70"></div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col justify-center h-full">
              <div className="max-w-3xl">
                {/* Animated Accent Bar */}
                <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 rounded-full"></div>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-4">
                  {hero.titre}
                </h1>

                {/* Subtitle */}
                <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mb-10 leading-relaxed">
                  {hero.sousTitre}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 mt-8">
                  <button className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
                    Discover Solutions
                  </button>
                  <button className="px-8 py-3.5 bg-transparent text-white border-2 border-white/40 font-medium rounded-lg hover:bg-white/10 transition-all duration-300">
                    Contact Experts
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Decorative Elements */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
      <ActualitesPage />
      <Produits />
    </main>
  )
}
