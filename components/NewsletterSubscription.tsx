// components/NewsletterSubscription.tsx
'use client'

import { useState } from 'react'
import { FaPaperPlane, FaSpinner, FaCheck } from 'react-icons/fa'
import toast, { Toaster } from 'react-hot-toast'
import { addSubscriber } from '@/lib/newsletter'

export default function NewsletterSubscription() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      toast.error('Veuillez entrer une adresse email')
      return
    }
    
    setIsLoading(true)
    setIsSuccess(false)

    try {
      await addSubscriber(email)
      toast.success('Abonnement réussi ! Vous recevrez nos actualités bientôt.')
      setEmail('')
      setIsSuccess(true)
      
      // Reset success state after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000)
    } catch (error:   any) {
        // @ts-ignore
      console.error('Subscription error:', error)
      
      // @ts-ignore
        if (error.message.includes('déjà abonné')) {
        toast.error(error.message)
        // @ts-ignore
      } else if (error.message.includes('invalide')) {
        toast.error('Adresse email invalide')
      } else {
        // @ts-ignore
              toast.error("Échec de l&apos;abonnement. Veuillez réessayer.")
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full">
      <Toaster 
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#047857',
            color: '#fff',
          },
          error: {
            style: {
              background: '#EF4444',
              color: '#fff',
            }
          },
          iconTheme: {
            primary: '#fff',
            secondary: '#047857',
          },
        }}
      />
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input 
          type="email" 
          placeholder="Votre adresse email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          required
          disabled={isLoading || isSuccess}
        />
        <button 
          type="submit"
          disabled={isLoading || isSuccess}
          className={`${
            isSuccess 
              ? 'bg-emerald-500 text-white' 
              : 'bg-white text-emerald-700 hover:bg-emerald-100'
          } font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap flex items-center justify-center min-w-[150px] disabled:opacity-70`}
        >
          {isLoading ? (
            <>
              <FaSpinner className="animate-spin mr-2" />
              Envoi...
            </>
          ) : isSuccess ? (
            <>
              <FaCheck className="mr-2" />
              Envoyé!
            </>
          ) : (
            <>
              <FaPaperPlane className="mr-2" />
              S&apos;abonner
            </>
          )}
        </button>
      </form>
      <p className="text-emerald-200 text-sm mt-3">
        Vous pouvez vous désabonner à tout moment. Nous respectons votre vie privée.
      </p>
    </div>
  )
}