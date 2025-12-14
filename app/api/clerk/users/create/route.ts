// app/api/clerk/users/create/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { clerkClient } from '@clerk/nextjs/server'

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, password, role } = await request.json()

    // Validation des données
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email et mot de passe sont requis' },
        { status: 400 }
      )
    }

    if (password.length < 8) {
      return NextResponse.json(
        { error: 'Le mot de passe doit contenir au moins 8 caractères' },
        { status: 400 }
      )
    }

    // Créer l'utilisateur dans Clerk
    const client = await clerkClient();
    const user = await client.users.createUser({
      emailAddress: [email],
      password: password,
      firstName: firstName || '',
      lastName: lastName || '',
      publicMetadata: {
        role: role || 'user', // 'admin' ou 'user'
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Utilisateur créé avec succès!',
      user: {
        id: user.id,
        email: user.emailAddresses[0]?.emailAddress,
        nom: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
        role: role || 'user',
      },
    })
  } catch (error: unknown) {
    console.error('Erreur création utilisateur:', error)

    // Gestion des erreurs spécifiques Clerk
    type ClerkError = { code?: string }
    type ClerkErrorResponse = { errors?: ClerkError[] }

    if (typeof error === 'object' && error !== null && 'errors' in error) {
      const maybeErrors = (error as ClerkErrorResponse).errors
      if (Array.isArray(maybeErrors) && maybeErrors.length > 0) {
        const clerkError = maybeErrors[0]
        if (clerkError?.code === 'form_identifier_exists') {
          return NextResponse.json(
            { error: 'Cet email existe déjà' },
            { status: 400 }
          )
        }
      }
    }

    return NextResponse.json(
      { error: 'Erreur lors de la création de l\'utilisateur' },
      { status: 500 }
    )
  }
}