// app/api/sanity/appel-offre/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@sanity/client'

const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN!,
})

// Créer un nouvel appel d'offre
export async function POST(request: NextRequest) {
  try {
    let titre, description, dateLimite, etat, fileAsset

    if (request.headers.get('content-type')?.includes('multipart/form-data')) {
      const formData = await request.formData()
      titre = formData.get('titre') as string
      description = formData.get('description') as string
      dateLimite = formData.get('dateLimite') as string
      etat = formData.get('etat') as string
      const file = formData.get('file') as File | null
      if (file && file.size > 0) {
        const buffer = await file.arrayBuffer()
        fileAsset = await writeClient.assets.upload('file', Buffer.from(buffer), {
          filename: file.name,
          contentType: 'application/pdf',
        })
      }
    } else {
      const body = await request.json()
      titre = body.titre
      description = body.description
      dateLimite = body.dateLimite
      etat = body.etat
    }

    if (!titre || !dateLimite || !etat) {
      return NextResponse.json(
        { error: 'Données manquantes' },
        { status: 400 }
      )
    }

    const doc: any = {
      _type: 'appelOffre',
      titre,
      description: description || '',
      dateLimite,
      etat,
    }
    if (fileAsset) {
      doc.fichier = {
        _type: 'file',
        asset: { _type: 'reference', _ref: fileAsset._id },
      }
    }

    const result = await writeClient.create(doc)

    return NextResponse.json({ success: true, data: result })
  } catch (error) {
    console.error('Erreur création:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la création' },
      { status: 500 }
    )
  }
}

// Mettre à jour un appel d'offre
export async function PUT(request: NextRequest) {
  try {
    let _id, titre, description, dateLimite, etat, fileAsset

    if (request.headers.get('content-type')?.includes('multipart/form-data')) {
      const formData = await request.formData()
      _id = formData.get('_id') as string
      titre = formData.get('titre') as string
      description = formData.get('description') as string
      dateLimite = formData.get('dateLimite') as string
      etat = formData.get('etat') as string
      const file = formData.get('file') as File | null
      if (file && file.size > 0) {
        const buffer = await file.arrayBuffer()
        fileAsset = await writeClient.assets.upload('file', Buffer.from(buffer), {
          filename: file.name,
          contentType: 'application/pdf',
        })
      }
    } else {
      const body = await request.json()
      _id = body._id
      titre = body.titre
      description = body.description
      dateLimite = body.dateLimite
      etat = body.etat
    }

    if (!_id) {
      return NextResponse.json(
        { error: 'ID manquant' },
        { status: 400 }
      )
    }

    // Si seulement l'état est envoyé (toggle rapide)
    if (etat && !titre) {
      const result = await writeClient
        .patch(_id)
        .set({ etat })
        .commit()

      return NextResponse.json({ success: true, data: result })
    }

    // Mise à jour complète
    if (!titre || !dateLimite || !etat) {
      return NextResponse.json(
        { error: 'Données manquantes' },
        { status: 400 }
      )
    }

    const patchData: any = {
      titre,
      description: description || '',
      dateLimite,
      etat,
    }

    if (fileAsset) {
      patchData.fichier = {
        _type: 'file',
        asset: { _type: 'reference', _ref: fileAsset._id },
      }
    }

    const result = await writeClient
      .patch(_id)
      .set(patchData)
      .commit()

    return NextResponse.json({ success: true, data: result })
  } catch (error) {
    console.error('Erreur mise à jour:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la mise à jour' },
      { status: 500 }
    )
  }
}

// Supprimer un appel d'offre
export async function DELETE(request: NextRequest) {
  try {
    const { _id } = await request.json()

    if (!_id) {
      return NextResponse.json(
        { error: 'ID manquant' },
        { status: 400 }
      )
    }

    await writeClient.delete(_id)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Erreur suppression:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la suppression' },
      { status: 500 }
    )
  }
}