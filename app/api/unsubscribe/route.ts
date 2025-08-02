// app/api/unsubscribe/route.ts

import { NextResponse } from 'next/server'
import client from '@/lib/sanity'

export async function POST(request: Request) {
  const { email } = await request.json()

  if (!email) {
    return NextResponse.json(
      { error: 'Email is required' },
      { status: 400 }
    )
  }

  try {
    // Find subscriber
    const subscriber = await client.fetch(
      `*[_type == "subscriber" && email == $email][0]`,
      { email }
    )

    if (!subscriber) {
      return NextResponse.json(
        { error: 'Subscriber not found' },
        { status: 404 }
      )
    }

    // Update subscriber to inactive
    await client
      .patch(subscriber._id)
      .set({ isActive: false })
      .commit()

    return NextResponse.json(
      { message: 'You have been unsubscribed successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Unsubscribe error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
