// app/unsubscribe/page.tsx
'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function UnsubscribePage() {
  const searchParams = useSearchParams()
  const initialEmail = searchParams.get('email') || ''
  const [email, setEmail] = useState(initialEmail)
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      const response = await fetch('/api/unsubscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      })
      
      const result = await response.json()
      
      if (response.ok) {
        setMessage(result.message)
      } else {
        setMessage(result.error || 'An error occurred')
      }
    } catch ( error: any) {
      setMessage('Failed to unsubscribe')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-emerald-800 mb-6">Unsubscribe from Newsletter</h1>
        
        {message ? (
          <div className="bg-emerald-100 text-emerald-800 p-4 rounded-md">
            {message}
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Your Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:opacity-70"
            >
              {isLoading ? 'Processing...' : 'Unsubscribe'}
            </button>
          </form>
        )}
        
        <div className="mt-6 text-center text-gray-600 text-sm">
          <p>You&apos;re receiving this because you subscribed to our newsletter</p>
          <p className="mt-2">
            <Link href="/" className="text-emerald-600 hover:underline">
              Return to homepage
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}