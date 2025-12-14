// ============================================
// app/api/candidature/route.ts
// ============================================
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@sanity/client'

const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN!,
})

// POST - Créer une candidature
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const appelOffre = formData.get('appelOffre') as string
    const nom = formData.get('nom') as string
    const email = formData.get('email') as string
    const telephone = formData.get('telephone') as string
    const cvFile = formData.get('cv') as File

    // Validation
    if (!appelOffre || !nom || !email || !telephone || !cvFile) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      )
    }

    // Upload CV vers Sanity
    const arrayBuffer = await cvFile.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    const cvAsset = await writeClient.assets.upload('file', buffer, {
      filename: cvFile.name,
      contentType: 'application/pdf',
    })

    // Créer la candidature
    const candidature = await writeClient.create({
      _type: 'candidature',
      appelOffre: {
        _type: 'reference',
        _ref: appelOffre,
      },
      nom,
      email,
      telephone,
      cv: {
        _type: 'file',
        asset: {
          _type: 'reference',
          _ref: cvAsset._id,
        },
      },
      statut: 'pending',
      datePostulation: new Date().toISOString(),
    })

    return NextResponse.json({
      success: true,
      message: 'Candidature envoyée avec succès!',
      candidature,
    })
  } catch (error) {
    console.error('Erreur création candidature:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la création' },
      { status: 500 }
    )
  }
}

// GET - Récupérer les candidatures (pour l'admin)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const statut = searchParams.get('statut')

    let query = `*[_type == "candidature"]`
    
    if (statut) {
      query += ` && statut == "${statut}"`
    }

    query += ` | order(datePostulation desc) {
      _id,
      nom,
      email,
      telephone,
      statut,
      datePostulation,
      noteAdmin,
      "appelOffreTitre": appelOffre->titre,
      "cvUrl": cv.asset->url
    }`

    const candidatures = await writeClient.fetch(query)

    return NextResponse.json({
      success: true,
      candidatures,
      count: candidatures.length,
    })
  } catch (error) {
    console.error('Erreur GET candidatures:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la récupération' },
      { status: 500 }
    )
  }
}

// PUT - Mettre à jour le statut (accepter/refuser)
export async function PUT(request: NextRequest) {
  try {
    const { _id, statut, noteAdmin } = await request.json()

    if (!_id || !statut) {
      return NextResponse.json(
        { error: 'ID et statut requis' },
        { status: 400 }
      )
    }

    // Fetch candidature data before updating to get email and appel d'offre title
    const candidatureQuery = `*[_type == "candidature" && _id == $id][0]{
      _id,
      nom,
      email,
      statut,
      "appelOffreTitre": appelOffre->titre
    }`
    
    const candidatureData = await writeClient.fetch(candidatureQuery, { id: _id })

    if (!candidatureData) {
      return NextResponse.json(
        { error: 'Candidature non trouvée' },
        { status: 404 }
      )
    }

    // Update candidature status
    const result = await writeClient
      .patch(_id)
      .set({ 
        statut,
        ...(noteAdmin && { noteAdmin })
      })
      .commit()

    // Send email notification to candidate
    try {
      const { sendCandidatureStatusEmail } = await import('@/lib/email')
      
      await sendCandidatureStatusEmail({
        nom: candidatureData.nom,
        email: candidatureData.email,
        appelOffreTitre: candidatureData.appelOffreTitre || 'Appel d\'offres',
        statut: statut as 'accepted' | 'refused',
        noteAdmin: noteAdmin || undefined,
      })

      console.log(`Email sent to ${candidatureData.email} for candidature ${_id}`)
    } catch (emailError) {
      // Log email error but don't fail the request
      console.error('Error sending email notification:', emailError)
      // Continue with the response even if email fails
    }

    return NextResponse.json({
      success: true,
      message: `Candidature ${statut === 'accepted' ? 'acceptée' : 'refusée'}! Email de notification envoyé.`,
      result,
    })
  } catch (error) {
    console.error('Erreur update candidature:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la mise à jour' },
      { status: 500 }
    )
  }
}

// DELETE - Supprimer une candidature
export async function DELETE(request: NextRequest) {
  try {
    const { _id } = await request.json()

    if (!_id) {
      return NextResponse.json(
        { error: 'ID requis' },
        { status: 400 }
      )
    }

    await writeClient.delete(_id)

    return NextResponse.json({
      success: true,
      message: 'Candidature supprimée',
    })
  } catch (error) {
    console.error('Erreur delete candidature:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la suppression' },
      { status: 500 }
    )
  }
}

