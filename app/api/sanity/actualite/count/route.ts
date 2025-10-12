// app/api/sanity/actualite/count/route.ts
import { NextResponse } from 'next/server'
import client from '@/lib/sanity'

export async function GET() {
  try {
    const count = await client.fetch(`count(*[_type == "actualite"])`)
    
    return NextResponse.json({
      success: true,
      count,
    })
  } catch (error) {
    console.error('Erreur:', error)
    return NextResponse.json({ count: 0 })
  }
}

