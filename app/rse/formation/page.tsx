





'use client'

import { useEffect, useState } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/lib/client'
import { Card, CardContent } from '@/components/ui/card'

import { urlForImage } from '@/sanity/lib/image'



type Formation = {
  _id: string
  titre: string
  description: string
  objectifs: string[]
  dateDebut: string
  dateFin: string
  lieu: string
  image?: any
  donneesParAnnee: {
    annee: number
    participation: number
    joursFormation: number
    candidats: number
  }[]
}

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: 'outline' | 'secondary'
}

export function Badge({ children, variant, ...props }: BadgeProps) {
  let className = props.className || ''
  if (variant === 'outline') className += ' border border-gray-400'
  if (variant === 'secondary') className += ' bg-gray-200'
  return <span {...props} className={className.trim()}>{children}</span>
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

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-10">
      <h1 className="text-4xl font-bold mb-4 text-center">Nos Formations</h1>

      {formations.map((formation) => (
        <Card key={formation._id} className="shadow-xl border border-gray-200 rounded-2xl">
          <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {formation.image && (
              <img
                src={urlForImage(formation.image).width(500).height(300).fit('crop').url()}
                alt={formation.titre}
                className="w-full h-auto rounded-xl object-cover"
              />
            )}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">{formation.titre}</h2>
              <p className="text-gray-700">{formation.description}</p>

              <div>
                <h3 className="font-medium">Objectifs :</h3>
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
                  <h4 className="font-medium mb-1">Statistiques par année :</h4>
                  <div className="overflow-auto">
                    <table className="text-sm border w-full">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="border px-3 py-1">Année</th>
                          <th className="border px-3 py-1">Participation</th>
                          <th className="border px-3 py-1">Jours</th>
                          <th className="border px-3 py-1">Candidats</th>
                        </tr>
                      </thead>
                      <tbody>
                        {formation.donneesParAnnee.map((data, i) => (
                          <tr key={i}>
                            <td className="border px-3 py-1 text-center">{data.annee}</td>
                            <td className="border px-3 py-1 text-center">{data.participation}</td>
                            <td className="border px-3 py-1 text-center">{data.joursFormation}</td>
                            <td className="border px-3 py-1 text-center">{data.candidats}</td>
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
  )
}







