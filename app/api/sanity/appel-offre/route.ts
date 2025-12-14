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

interface AppelOffreDocument {
  _type: "appelOffre"
  titre: string
  description: string
  dateLimite: string
  etat: string
  documentPdf?: {
    _type: "file"
    asset: {
      _type: "reference"
      _ref: string
    }
  }
}

interface AppelOffreUpdateData {
  titre?: string
  description?: string
  dateLimite?: string
  etat?: string
  documentPdf?: {
    _type: "file"
    asset: {
      _type: "reference"
      _ref: string
    }
  }
}

export async function GET() {
  try {
    const appels = await client.fetch(`
      *[_type == "appelOffre"] | order(dateLimite desc) {
        _id,
        titre,
        description,
        dateLimite,
        etat,
        "documentUrl": documentPdf.asset->url
      }
    `)

    return NextResponse.json({
      success: true,
      appels,
    })
  } catch (error) {
    console.error('Erreur:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la récupération' },
      { status: 500 }
    )
  }
}

// Créer un nouvel appel d'offre
export async function POST(request: NextRequest) {
  try {
    let titre, description, dateLimite, etat, pdfAsset;
    
    if (request.headers.get("content-type")?.includes("multipart/form-data")) {
      const formData = await request.formData();
      titre = formData.get("titre") as string;
      description = formData.get("description") as string;
      dateLimite = formData.get("dateLimite") as string;
      etat = formData.get("etat") as string;
      const file = formData.get("file") as File | null;
      
      if (file && file.size > 0) {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        pdfAsset = await writeClient.assets.upload("file", buffer, {
          filename: file.name,
          contentType: file.type || "application/pdf",
        });
      }
    } else {
      const body = await request.json();
      titre = body.titre;
      description = body.description;
      dateLimite = body.dateLimite;
      etat = body.etat;
    }

    if (!titre || !dateLimite || !etat) {
      return NextResponse.json(
        { error: "Données manquantes" },
        { status: 400 }
      );
    }

    const doc: AppelOffreDocument = {
      _type: "appelOffre",
      titre,
      description: description || "",
      dateLimite: new Date(dateLimite).toISOString(),
      etat,
      ...(pdfAsset && {
        documentPdf: {
          _type: "file",
          asset: { _type: "reference", _ref: pdfAsset._id },
        },
      }),
    };

    const result = await writeClient.create(doc);

    return NextResponse.json({ success: true, data: result });
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
    let _id, titre, description, dateLimite, etat, pdfAsset;
    
    if (request.headers.get("content-type")?.includes("multipart/form-data")) {
      const formData = await request.formData();
      _id = formData.get("_id") as string;
      titre = formData.get("titre") as string | null;
      description = formData.get("description") as string | null;
      dateLimite = formData.get("dateLimite") as string | null;
      etat = formData.get("etat") as string | null;
      const file = formData.get("file") as File | null;
      
      if (file && file.size > 0) {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        pdfAsset = await writeClient.assets.upload("file", buffer, {
          filename: file.name,
          contentType: file.type || "application/pdf",
        });
      }
    } else {
      const body = await request.json();
      _id = body._id;
      titre = body.titre;
      description = body.description;
      dateLimite = body.dateLimite;
      etat = body.etat;
    }

    if (!_id) {
      return NextResponse.json(
        { error: 'ID manquant' },
        { status: 400 }
      )
    }

    // Support partial updates - only update fields that are provided
    const updateData: AppelOffreUpdateData = {};

    if (titre !== undefined && titre !== null) {
      updateData.titre = titre;
    }
    if (description !== undefined && description !== null) {
      updateData.description = description || "";
    }
    if (dateLimite !== undefined && dateLimite !== null) {
      updateData.dateLimite = new Date(dateLimite).toISOString();
    }
    if (etat !== undefined && etat !== null) {
      updateData.etat = etat;
    }
    if (pdfAsset) {
      updateData.documentPdf = {
        _type: "file",
        asset: { _type: "reference", _ref: pdfAsset._id },
      };
    }

    const result = await writeClient
      .patch(_id)
      .set(updateData)
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