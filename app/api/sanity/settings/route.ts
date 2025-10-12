// app/api/sanity/settings/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@sanity/client'
import client from '@/lib/sanity'

const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN!,
})

// GET - Récupérer les settings
export async function GET() {
  try {
    const settings = await client.fetch(`
      *[_type == "settings"][0] {
        _id,
        siteTitle,
        contactEmail,
        facebookLink,
        themeColor
      }
    `)

    if (!settings) {
      return NextResponse.json({
        success: true,
        settings: {
          siteTitle: 'Groupe Chimique Tunisien',
          contactEmail: 'contact@gct.tn',
          facebookLink: 'https://facebook.com/gct',
          themeColor: '#059669',
        },
      })
    }

    return NextResponse.json({
      success: true,
      settings,
    })
  } catch (error) {
    console.error('Erreur GET settings:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la récupération' },
      { status: 500 }
    )
  }
}

// POST - Mettre à jour les settings
export async function POST(request: NextRequest) {
  try {
    const { siteTitle, contactEmail, facebookLink, themeColor } = await request.json()

    // Récupérer le document settings existant
    const existingSettings = await client.fetch(`*[_type == "settings"][0]._id`)

    let result

    if (existingSettings) {
      // Mettre à jour le document existant
      result = await writeClient
        .patch(existingSettings)
        .set({
          siteTitle,
          contactEmail,
          facebookLink,
          themeColor,
        })
        .commit()
    } else {
      // Créer un nouveau document
      result = await writeClient.create({
        _type: 'settings',
        siteTitle,
        contactEmail,
        facebookLink,
        themeColor,
      })
    }

    return NextResponse.json({
      success: true,
      message: 'Paramètres enregistrés avec succès!',
      settings: result,
    })
  } catch (error) {
    console.error('Erreur POST settings:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la sauvegarde' },
      { status: 500 }
    )
  }
}