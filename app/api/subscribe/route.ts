// app/api/subscribe/route.ts
import { NextResponse } from 'next/server'
import client from '@/lib/sanity'
import { v4 as uuidv4 } from 'uuid'

export async function POST(request: Request) {
  const { email } = await request.json()
  
  try {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Adresse email invalide' },
        { status: 400 }
      )
    }

    // Check for existing subscriber
    const existingSubscriber = await client.fetch(
      `*[_type == "subscriber" && email == $email][0]`,
      { email }
    )
    
    if (existingSubscriber) {
      return NextResponse.json(
        { message: 'Cet email est déjà abonné' },
        { status: 409 }
      )
    }
    
    // Create new subscriber
    const newSubscriber = {
      _type: 'subscriber',
      _id: `subscriber-${uuidv4()}`,
      email,
      subscribedAt: new Date().toISOString(),
      isActive: true,
    }
    
    await client.create(newSubscriber)
    
    return NextResponse.json(
      { message: 'Abonnement réussi !' },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Subscription error:', error)
    return NextResponse.json(
      { 
        message: "Erreur lors de l'abonnement",
        details: error.message 
      },
      { status: 500 }
    )
  }
}