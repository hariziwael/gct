'use client'

import { useEffect, useState } from 'react'
import client from '@/lib/sanity'


export default function AdminContentPage() {
  // @typescript-eslint/no-explicit-any
  const [hero, setHero] = useState<string | any>(null)

  useEffect(() => {
    const fetchHero = async () => {
      const data = await client.fetch(`*[_type == "heroBanner"][0]`)
      setHero(data)
    }

    fetchHero()
  }, [])

  if (!hero) return <p className="text-center py-12 text-gray-600">Chargement...</p>

  return (
    <div className="min-h-screen bg-emerald-50 py-20 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-emerald-900 mb-6 text-center">
          🎯 Gestion du contenu de la page d&apos;accueil
        </h1>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Titre principal
            </label>
            <input
              type="text"
              value={hero.titre}
              className="w-full border border-emerald-300 rounded-md px-4 py-2 text-emerald-950 bg-gray-50"
              readOnly
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sous-titre
            </label>
            <input
              type="text"
              value={hero.sousTitre}
              className="w-full border text-emerald-950 border-emerald-300 rounded-md px-4 py-2 bg-gray-50"
              readOnly
            />
          </div>
        </div>

        <div className="mt-6 text-center">
          <a
            href="http://localhost:3333/structure/heroBanner;83152269-0d49-4b85-96fe-84f693405eec%2Ctemplate%3DheroBanner"
            target="_blank"
            className="inline-block px-6 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition"
          >
            ✏️ Modifier dans Sanity Studio
          </a>
        </div>
      </div>
    </div>
  )
}
