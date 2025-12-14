// app/api/sanity/actualite/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@sanity/client'
// Upload l'image vers Sanity

const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN!,
})

// Créer une nouvelle actualité
export async function POST(request: NextRequest) {
  try {
    let titre, contenu, publishedAt, imageAsset;
    if (request.headers.get("content-type")?.includes("multipart/form-data")) {
      const formData = await request.formData();
      titre = formData.get("titre") as string;
      contenu = formData.get("contenu") as string;
      publishedAt = formData.get("publishedAt") as string;
      const image = formData.get("image") as File | null;
      if (image && image.size > 0) {
        const arrayBuffer = await image.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        imageAsset = await writeClient.assets.upload("image", buffer, {
          filename: image.name,
        });
      }
    } else {
      const body = await request.json();
      titre = body.titre;
      contenu = body.contenu;
      publishedAt = body.publishedAt;
    }

    if (!titre || !contenu || !publishedAt) {
      return NextResponse.json(
        { error: "Données manquantes" },
        { status: 400 }
      );
    }

    const doc: any = {
      _type: "actualite",
      titre,
      contenu,
      publishedAt: new Date(publishedAt).toISOString(),
    };
    if (imageAsset) {
      doc.image = {
        _type: "image",
        asset: { _type: "reference", _ref: imageAsset._id },
      };
    }

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

// Mettre à jour une actualité
export async function PUT(request: NextRequest) {
  try {
    let _id, titre, contenu, publishedAt, imageAsset;
    
    if (request.headers.get("content-type")?.includes("multipart/form-data")) {
      const formData = await request.formData();
      _id = formData.get("_id") as string;
      titre = formData.get("titre") as string;
      contenu = formData.get("contenu") as string;
      publishedAt = formData.get("publishedAt") as string;
      const image = formData.get("image") as File | null;
      
      if (image && image.size > 0) {
        const arrayBuffer = await image.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        imageAsset = await writeClient.assets.upload("image", buffer, {
          filename: image.name,
        });
      }
    } else {
      const body = await request.json();
      _id = body._id;
      titre = body.titre;
      contenu = body.contenu;
      publishedAt = body.publishedAt;
    }

    if (!_id || !titre || !contenu || !publishedAt) {
      return NextResponse.json(
        { error: 'Données manquantes' },
        { status: 400 }
      )
    }

    const updateData: any = {
      titre,
      contenu,
      publishedAt: new Date(publishedAt).toISOString(),
    };

    if (imageAsset) {
      updateData.image = {
        _type: "image",
        asset: { _type: "reference", _ref: imageAsset._id },
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

// Supprimer une actualité
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