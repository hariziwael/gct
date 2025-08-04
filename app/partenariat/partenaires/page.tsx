'use client'

import client from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'

interface Partenaire {
  _id: string
  nom: string
  description: string
  siteWeb?: string
  logoUrl: string
}

export const dynamic = 'force-dynamic'

export default function PartenairesPage() {
  const [partenaires, setPartenaires] = useState<Partenaire[]>([])
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    async function fetchPartenaires() {
      const data: Partenaire[] = await client.fetch(`
        *[_type == "partenaire"]{
          _id,
          nom,
          description,
          siteWeb,
          "logoUrl": logo.asset->url
        }
      `)
      setPartenaires(data)
    }
    fetchPartenaires()
  }, [])

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -300, behavior: 'smooth' })
  }

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 300, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen relative">
      {/* Split Background - 60% emerald, 40% light */}
      <div className="absolute inset-0 flex">
        <div className="w-[70%] bg-gradient-to-br rounded-3xl from-emerald-600 to-emerald-700"></div>
        <div className="w-[30%] bg-gradient-to-bl rounded-3xl from-slate-100 to-white"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 py-12">
        <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          {/* Title & Intro */}
          <div className="text-start mb-12">
            <h1 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 drop-shadow-lg">
              Nos Partenaires
            </h1>
            <p className="text-lg text-emerald-100 drop-shadow-md">
              Découvrez nos partenaires et leur contribution à notre mission.
            </p>
          </div>

          {/* Slider container */}
          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm text-emerald-700 p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200 z-10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Scrollable Partners List - Hidden Scrollbar */}
            <div
              ref={scrollContainerRef}
              className="flex space-x-6 overflow-x-auto scroll-smooth pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {partenaires.map((partenaire) => (
                <div
                  key={partenaire._id}
                  className="min-w-[320px] bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20 flex-shrink-0 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="flex flex-col items-center gap-4">
                    {/* Logo Container */}
                    <div className="w-20 h-20 bg-white rounded-xl shadow-md flex items-center justify-center overflow-hidden">
                      <Image
                        src={partenaire.logoUrl}
                        alt={partenaire.nom}
                        width={64}
                        height={64}
                        className="object-contain max-w-16 max-h-16"
                      />
                    </div>
                    
                    {/* Partner Name */}
                    <h3 className="text-xl font-bold text-emerald-800 text-center">
                      {partenaire.nom}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-700 text-sm whitespace-pre-line text-center leading-relaxed">
                      {partenaire.description}
                    </p>
                    
                    {/* Website Link */}
                    {partenaire.siteWeb && (
                      <a
                        href={partenaire.siteWeb}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-emerald-700 font-medium hover:text-emerald-900 transition-colors mt-2 group"
                      >
                        Visiter le site
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm text-emerald-700 p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200 z-10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Call to Action Section */}
          <div className="mt-16 bg-white/95 backdrop-blur-sm border border-white/20 p-8 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold mb-3 text-emerald-800">
              Vous souhaitez devenir partenaire de GCT ?
            </h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Contactez-nous dès aujourd&apos;hui pour explorer de nouvelles opportunités de collaboration et d&apos;innovation.
            </p>
            <Link href="/contact">
              <button className="bg-emerald-700 text-white px-6 py-3 rounded-xl font-medium hover:bg-emerald-800 hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                Proposer un partenariat
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}