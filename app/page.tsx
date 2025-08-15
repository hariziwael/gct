// app/page.tsx
import client from '@/lib/sanity'
import ActualitesPage from './actualites/page'
import Produits from './produits/page'
import Link from 'next/link'


interface HeroBanner {
  titre: string
  sousTitre: string
 
  
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
    
  }`)

  return (
    <main className="overflow-x-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">



      {/* Hero Section to Showcase Transparency Effect */}
      <div className="relative h-screen bg-gradient-to-b from-emerald-900 to-emerald-700 flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/images/img-CMSkDvRS2ehl1X8O39rkH.jpg')" }}></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Groupe Chimique Tunisien
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-8 drop-shadow-md">
            Leader dans la production et l&apos;exportation de phosphate depuis plus de 60 ans
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
              <Link 
                href="#produits" 
                className="px-6 py-3 bg-white text-emerald-800 font-medium rounded-lg shadow-md hover:bg-emerald-50 transition-all duration-300 hover:shadow-lg"
              >
                Découvrir nos produits
              </Link>
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-transparent text-white border-2 border-white/40 font-medium rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Contactez-nous
              </Link>
            </div>
        </div>
      </div>
      {/* Professional Hero Banner */}
      <div className="relative min-h-[50vh] flex items-center overflow-hidden bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-900">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-emerald-700/40 via-emerald-600/30 to-emerald-700/40 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-emerald-900/90 to-emerald-800/80"></div>
          {/* Floating Elements */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-emerald-300 rounded-full animate-ping"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10">
          <div className="max-w-4xl">
            {/* Enhanced Animated Accent Bar */}
            <div className="w-24 h-2 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 mb-4 rounded-full animate-pulse shadow-lg"></div>

            {/* Main Heading with Enhanced Typography */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-4 drop-shadow-lg">
              {hero?.titre || "Groupe Chimique Tunisien"}
            </h1>

            {/* Enhanced Subtitle */}
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mb-6 leading-relaxed min-h-[6rem] max-h-[10rem] overflow-hidden drop-shadow-md">
              {hero?.sousTitre || "Leader dans l'industrie des phosphates en Tunisie, innovant pour un avenir durable"}
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link 
                href="#actualites" 
                className="px-8 py-4 bg-white text-emerald-800 font-semibold rounded-lg shadow-lg hover:bg-emerald-50 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
              >
                Découvrir nos actualités
              </Link>
              
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">60+</div>
                  <div className="text-emerald-200 text-sm">Années d&apos;expertise</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">5000+</div>
                <div className="text-emerald-200 text-sm">Employés qualifiés</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-emerald-200 text-sm">Pays clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">1M+</div>
                <div className="text-emerald-200 text-sm">Tonnes/an</div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Animated Elements */}
        <div className="absolute bottom-8 right-8 w-1/4 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 animate-moveLeftRight rounded-full"></div>
        <div className="absolute top-16 left-8 w-1/5 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 animate-moveRightLeft rounded-full"></div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Actualites Section */}
      <section id="actualites" className="py-6 scroll-mt-24">
        <ActualitesPage />
      </section>

      {/* Produits Section */}
      <section id="produits" className="py-6 scroll-mt-24">
        <Produits />
      </section>

      
      {/* Values Section */}
      <div className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-emerald-800 mb-3">Nos Valeurs Fondamentales</h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
              <div className="text-emerald-600 text-4xl mb-3">♻️</div>
              <h3 className="text-xl font-bold text-emerald-800 mb-2">Développement Durable</h3>
              <p className="text-gray-700">
                Nous nous engageons à minimiser notre empreinte environnementale et à promouvoir 
                des pratiques industrielles responsables.
              </p>
            </div>
            
            <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
              <div className="text-emerald-600 text-4xl mb-3">🔬</div>
              <h3 className="text-xl font-bold text-emerald-800 mb-2">Innovation Technologique</h3>
              <p className="text-gray-700">
                      Notre centre de recherche développe constamment de nouvelles méthodes d&apos;extraction 
                et de transformation plus efficaces.
              </p>
            </div>
            
            <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
              <div className="text-emerald-600 text-4xl mb-3">🤝</div>
              <h3 className="text-xl font-bold text-emerald-800 mb-2">Engagement Social</h3>
              <p className="text-gray-700">
                Nous investissons dans les communautés locales à travers des programmes éducatifs, 
                de santé et de développement économique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}