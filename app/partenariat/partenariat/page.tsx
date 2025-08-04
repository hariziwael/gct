import Image from "next/image";


export default function GCTPartenariatPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Combined Hero + Content Cards Section with Background */}
        <section className="relative mb-8">
          {/* Background Image Container */}
          <div
            className="absolute inset-0 z-10 rounded-3xl bg-[url('/images/partnership-hero.jpg')] bg-cover bg-center bg-no-repeat opacity-20"
            
          ></div>

          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-white bg-opacity-80 rounded-3xl"></div>

          {/* Content Container */}
          <div className="relative bg-white bg-opacity-90 rounded-3xl shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-100 rounded-full translate-y-12 -translate-x-12"></div>

            {/* Hero Content */}
            <div className="relative p-8 md:p-12 lg:p-16 text-center mb-8">
              <div className="inline-block p-4 bg-emerald-100 rounded-full mb-6">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
              </div>

              <h1 className="text-4xl lg:text-5xl font-extrabold text-emerald-800 mb-8 tracking-tight">Partenariat</h1>
            </div>

            {/* Content Cards Grid */}
            <div className="relative grid md:grid-cols-2 gap-8 p-8 md:p-12">
              {/* First Content Card - Hexagon Style */}
              <div className="relative">
                <div className="bg-white bg-opacity-95 rounded-2xl shadow-xl p-8 transform hover:rotate-1 transition-transform duration-300 border-l-4 border-emerald-500">
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-500 transform rotate-45"></div>

                  {/* Image placeholder */}
                  <div className="w-full h-48 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/business-complementarity.jpg"
                      alt="Business complementarity"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
                      <div className="w-12 h-1 bg-emerald-200 rounded"></div>
                    </div>

                    <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                      Le GCT privilégie des partenariats fondés sur la complémentarité, la transparence et la
                      durabilité. Notre objectif est de créer de la valeur ajoutée avec des partenaires partageant notre
                      vision stratégique.
                    </p>
                  </div>
                </div>
              </div>

              {/* Second Content Card - Diamond Style */}
              <div className="relative">
                <div className="bg-white bg-opacity-95 rounded-2xl shadow-xl p-8 transform hover:-rotate-1 transition-transform duration-300 border-r-4 border-teal-500">
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-teal-500 rounded-full"></div>

                  {/* Image placeholder */}
                  <div className="w-full h-40 bg-gradient-to-br from-teal-100 to-cyan-200 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/innovation-research.jpg"
                      alt="Innovation and research"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-3 bg-teal-500 rounded-full mr-3"></div>
                      <div className="w-12 h-1 bg-teal-200 rounded"></div>
                    </div>

                    <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                      Que ce soit dans le domaine industriel, environnemental ou de la recherche, nous sommes ouverts à
                      toute collaboration porteuse d&apos;innovation et de croissance mutuelle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

       

        {/* Decorative Elements */}
        <div className="fixed top-20 right-10 w-4 h-4 bg-emerald-300 rounded-full opacity-60 animate-pulse"></div>
        <div className="fixed bottom-20 left-10 w-6 h-6 bg-teal-300 transform rotate-45 opacity-40 animate-bounce"></div>
      </div>
    </div>
  )
}
