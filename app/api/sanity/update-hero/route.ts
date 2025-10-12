// app/api/sanity/update-hero/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@sanity/client'

const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN!,
})

export async function POST(request: NextRequest) {
  try {
    const { _id, titre, sousTitre } = await request.json()

    // Vérification des données
    if (!_id || !titre || !sousTitre) {
      return NextResponse.json(
        { error: 'Données manquantes' },
        { status: 400 }
      )
    }

    // Mise à jour dans Sanity
    const result = await writeClient
      .patch(_id)
      .set({ titre, sousTitre })
      .commit()

    return NextResponse.json({
      success: true,
      data: result,
    })
  } catch (error) {
    console.error('Erreur Sanity:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la mise à jour' },
      { status: 500 }
    )
  }
}