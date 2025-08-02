// app/unsubscribe/page.tsx

'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState, Suspense } from 'react'

function UnsubscribePageContent() {
  const searchParams = useSearchParams()
  const email = searchParams.get('email')
  const [message, setMessage] = useState('Unsubscribing...')

  useEffect(() => {
    if (email) {
      fetch('/api/unsubscribe', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setMessage(data.message || data.error)
        })
        .catch(() => setMessage('Something went wrong'))
    } else {
      setMessage('No email provided.')
    }
  }, [email])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow text-center max-w-md">
        <h1 className="text-xl font-semibold text-gray-800">Unsubscribe</h1>
        <p className="mt-4 text-gray-600">{message}</p>
      </div>
    </div>
  )
}

// Wrap in Suspense for streaming support
export default function UnsubscribePage() {
  return (
    <Suspense fallback={<div className="text-center p-8">Loading...</div>}>
      <UnsubscribePageContent />
    </Suspense>
  )
}
