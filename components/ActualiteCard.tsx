'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FaArrowRight, FaCalendarAlt } from 'react-icons/fa'

interface Actualite {
  _id: string
  titre: string
  contenu: string
  publishedAt: string
  imageUrl: string
}

export default function ActualiteCard({ a }: { a: Actualite }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <article
      key={a._id}
      className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
      aria-label={`Actualité: ${a.titre}`}
    >
      <div className="relative h-80 object-contain">
        <Image
          src={a.imageUrl || '/placeholder.png'}
          alt={a.titre || 'Image actualité'}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object transition-transform duration-500"
          priority
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-900/90 to-transparent p-6">
          <div className="flex items-center text-emerald-100 mb-2">
            <FaCalendarAlt className="mr-2" aria-hidden="true" />
            <time dateTime={a.publishedAt}>
              {new Date(a.publishedAt).toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </time>
          </div>
          <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
            {a.titre}
          </h3>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full">
            Actualité
          </span>
        </div>
        <p className={`text-gray-600 mb-4 ${expanded ? 'line-clamp-none' : 'line-clamp-3'}`}>
          {a.contenu}
        </p>
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="flex items-center text-emerald-600 font-medium group-hover:text-emerald-800 transition-colors"
        >
          {expanded ? 'Lire moins' : 'Lire la suite'}
          <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </article>
  )
}
