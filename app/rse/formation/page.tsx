'use client'

import { useEffect, useState } from 'react'
import { client } from '@/lib/client'
import { Card, CardContent } from '@/components/ui/card'
import { urlForImage } from '@/sanity/lib/image'
import Link from 'next/link'
import Image from 'next/image'
import type { Image as SanityImage } from 'sanity'

type Formation = {
  _id: string
  titre: string
  description: string
  objectifs: string[]
  dateDebut: string
  dateFin: string
  lieu: string
  image?: SanityImage
  donneesParAnnee: {
    annee: number
    participation: number
    joursFormation: number
    candidats: number
  }[]
}

export default function FormationPage() {
  const [formations, setFormations] = useState<Formation[]>([])

  useEffect(() => {
    const fetchFormations = async () => {
      const query = `*[_type == "formation"] | order(dateDebut desc)`
      const data: Formation[] = await client.fetch(query)
      setFormations(data)
    }
    fetchFormations()
  }, [])

  const Breadcrumb = () => (
    <nav aria-label="breadcrumb" className="text-sm text-gray-500 mb-4 flex items-center">
      <Link href="/" className="hover:text-emerald-600 transition-colors focus:outline-none focus:ring focus:ring-emerald-300">Accueil</Link>
      <span className="mx-2 text-gray-400">&raquo;</span>
      <Link href="/rse" className="hover:text-emerald-600 transition-colors focus:outline-none focus:ring focus:ring-emerald-300">RSE</Link>
      <span className="mx-2 text-gray-400">&raquo;</span>
      <span className="font-medium text-emerald-700" aria-current="page">Formations</span>
    </nav>
  )

  const Badge = ({
    children,
    variant,
    ...props
  }: React.HTMLAttributes<HTMLSpanElement> & {
    variant?: 'outline' | 'secondary'
  }) => {
    let className = props.className || ''
    if (variant === 'outline') className += ' border border-emerald-400 text-emerald-700 px-2 py-1 rounded'
    if (variant === 'secondary') className += ' bg-emerald-100 text-emerald-700 px-2 py-1 rounded'
    return (
      <span {...props} className={className.trim()}>
        {children}
      </span>
    )
  }

  return (
    <div className="bg-emerald-50 max-h-max py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <Breadcrumb />
        <h1 className="text-4xl font-extrabold mb-8 text-center text-emerald-800">Nos Formations</h1>

        <div className="space-y-10">
          {formations.map((formation) => (
            <Card key={formation._id} className="shadow-xl border border-emerald-200 rounded-2xl">
              <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {formation.image && (
                  <div className="relative rounded-xl overflow-hidden">
                    <Image
                      src={urlForImage(formation.image).width(500).height(300).fit('crop').url() ?? ''}
                      alt={formation.titre}
                      width={500}
                      height={300}
                      className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                )}
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-emerald-700">{formation.titre}</h2>
                  <p className="text-gray-700">{formation.description}</p>

                  <div>
                    <h3 className="font-medium text-emerald-700">Objectifs :</h3>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      {formation.objectifs?.map((obj, index) => (
                        <li key={index}>{obj}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Badge variant="outline">📍 {formation.lieu}</Badge>
                    <Badge variant="secondary">🗓️ {formation.dateDebut} → {formation.dateFin}</Badge>
                  </div>

                  {formation.donneesParAnnee?.length > 0 && (
                    <div className="mt-4">
                      <h4 className="font-medium mb-1 text-emerald-700">Statistiques par année :</h4>
                      <div className="overflow-x-auto">
                        <table className="text-sm border w-full">
                          <thead className="bg-emerald-50 text-emerald-700">
                            <tr>
                              <th className="border px-3 py-1 text-left">Année</th>
                              <th className="border px-3 py-1 text-left">Participation</th>
                              <th className="border px-3 py-1 text-left">Jours</th>
                              <th className="border px-3 py-1 text-left">Candidats</th>
                            </tr>
                          </thead>
                          <tbody>
                            {formation.donneesParAnnee.map((data, i) => (
                              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-emerald-50'}>
                                <td className="border px-3 py-1 text-gray-800 text-center">{data.annee}</td>
                                <td className="border px-3 py-1 text-gray-800 text-center">{data.participation}</td>
                                <td className="border px-3 py-1 text-gray-800 text-center">{data.joursFormation}</td>
                                <td className="border px-3 py-1 text-gray-800 text-center">{data.candidats}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
