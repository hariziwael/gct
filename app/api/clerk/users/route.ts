// app/api/clerk/users/route.ts
import { NextResponse } from 'next/server'
import { clerkClient } from '@clerk/nextjs/server'

export async function GET() {
  try {
    // Récupérer tous les utilisateurs de Clerk
    const client = await clerkClient();
    const users = await client.users.getUserList({
      limit: 100, // Limite à 100 utilisateurs (ajuste si besoin)
    })

    // Transformer les données pour ton interface
    const formattedUsers = users.data.map((user) => ({
      id: user.id,
      nom: `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'Sans nom',
      email: user.emailAddresses[0]?.emailAddress || 'Pas d\'email',
      role: (user.publicMetadata?.role as string) === 'admin' ? 'Administrateur' : 'Visiteur',
      actif: !user.banned && user.emailAddresses[0]?.verification?.status === 'verified',
      avatar: `${user.firstName?.[0] || ''}${user.lastName?.[0] || ''}`.toUpperCase() || 'U',
      createdAt: user.createdAt,
      lastSignInAt: user.lastSignInAt,
    }))

    return NextResponse.json({
      success: true,
      users: formattedUsers,
      count: formattedUsers.length,
    })
  } catch (error) {
    console.error('Erreur Clerk:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Erreur lors de la récupération des utilisateurs' 
      },
      { status: 500 }
    )
  }

}