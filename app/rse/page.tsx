import { client } from "@/lib/client"
import Link from "next/link"

type RSEData = {
  title: string
  introduction: string
  objectives: string[]
  pillars: string[]
  partners: string[]
  futureProjects: { title: string; description: string }[]
}

export default async function RSEPage() {
  const data: RSEData = await client.fetch(`*[_type == "rse"][0]`)

  return (
    <div className=" bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Title */}
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-emerald-100 rounded-full mb-6">
            <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-emerald-800 mb-4 tracking-tight">{data.title}</h1>
        </div>

        {/* Introduction Section */}
        <section className="mb-16">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 transform hover:scale-[1.01] transition-transform duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-black">Introduction</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">{data.introduction}</p>
          </div>
        </section>

        {/* Objectives Section */}
        <section className="mb-16">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-black">Objectifs</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {data.objectives.map((item, i) => (
                <div key={i} className="flex items-start p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-xs font-bold">{i + 1}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RSE Sections Navigation */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white bg-opacity-10 rounded-full -translate-y-20 -translate-x-20"></div>
          

            <div className="relative p-8 md:p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white">Explorez Nos Ressources Humaines</h2>
                <p className="text-emerald-100 mt-2 text-lg">Effectif, formation et développement des compétences</p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
                <Link
                  href="/rse/effectif"
                  className="group bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 p-6 rounded-2xl hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-black bg-opacity-20 rounded-full mx-auto mb-4 group-hover:bg-opacity-30 transition-all duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2 text-center">Effectif</h3>
                  <p className="text-emerald-950 text-center">
                    Consultez la structure des effectifs et la dynamique du personnel au sein du GCT.
                  </p>
                </Link>
                <Link
                  href="/rse/formation"
                  className="group bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 p-6 rounded-2xl hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-black bg-opacity-20 rounded-full mx-auto mb-4 group-hover:bg-opacity-30 transition-all duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2 text-center">Formation</h3>
                  <p className="text-emerald-950 text-center">
                    Découvrez les programmes de formation et d&apos;acquisition de compétences pour les collaborateurs.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Pillars Section */}
        <section className="mb-16">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h2 className="text-2xl text-black font-semibold">Axes stratégiques</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {data.pillars.map((item, i) => (
                <div key={i} className="flex items-start p-4 bg-teal-50 rounded-xl border-l-4 border-teal-500">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="mb-16">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 6V9a2 2 0 00-2-2H10a2 2 0 00-2 2v3.1M15 13l-3-3-3 3"
                  />
                </svg>
              </div>
              <h2 className="text-2xl text-black font-semibold">Partenaires</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.partners.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center p-4 bg-purple-50 rounded-xl border-l-4 border-purple-500 transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Future Projects Section */}
        <section className="mb-16">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-black">Projets Futurs</h2>
            </div>
            <div className="space-y-6">
              {data.futureProjects.map((proj, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 border-l-4 border-orange-500 transform hover:scale-[1.02] transition-transform duration-300"
                >
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-white font-bold text-sm">{i + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-black text-xl mb-3">{proj.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{proj.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Decorative Elements */}
        <div className="fixed top-20 right-10 w-4 h-4 bg-emerald-300 rounded-full opacity-60 animate-pulse"></div>
        <div className="fixed bottom-20 left-10 w-6 h-6 bg-teal-300 transform rotate-45 opacity-40 animate-bounce"></div>
      </main>
    </div>
  )
}
