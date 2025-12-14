// app/api/clerk/users/invite/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { clerkClient } from '@clerk/nextjs/server'

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, role } = await request.json()

    // Validation
    if (!email) {
      return NextResponse.json(
        { error: 'Email est requis' },
        { status: 400 }
      )
    }

    // Créer une invitation
    const client = await clerkClient();
    const invitation = await client.invitations.createInvitation({
      emailAddress: email,
      publicMetadata: {
        role: role || 'user',
        firstName: firstName || '',
        lastName: lastName || '',
      },
      redirectUrl: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/sign-up`,
    })

    return NextResponse.json({
      success: true,
      message: 'Invitation envoyée avec succès!',
      invitation: {
        id: invitation.id,
        email: invitation.emailAddress,
        status: invitation.status,
      },
    })
  } catch (error: unknown) {
    console.error('Erreur invitation:', error)

    // Gestion erreurs Clerk
    if (typeof error === 'object' && error !== null && 'errors' in error) {
      const maybeErrors = (error as { errors?: unknown }).errors
      if (Array.isArray(maybeErrors) && maybeErrors.length > 0) {
        const clerkError = maybeErrors[0] as { code?: string }
        if (clerkError.code === 'duplicate_record') {
          return NextResponse.json(
            { error: 'Une invitation existe déjà pour cet email' },
            { status: 400 }
          )
        }
      }
    }

    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi de l\'invitation' },
      { status: 500 }
    )
  }
}