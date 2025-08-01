'use client'

import { useState } from 'react'
import Link from 'next/link'



export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 🔒 Optionally: Send data to API endpoint here
    alert("Message envoyé avec succès !")
  }

  return (
    <section className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50 min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="text-sm text-gray-500 mb-8 flex items-center">
          <Link href="/" className="hover:text-emerald-600 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-300 rounded-md px-1">
            Accueil
          </Link>
          <span className="mx-2 text-gray-400">&raquo;</span>
          <span className="font-medium text-emerald-700" aria-current="page">Contact</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-4">
            Contactez-nous
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Pour toute demande d&apos;information, de partenariat ou de collaboration, veuillez remplir le formulaire ci-dessous.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom complet</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                onChange={handleChange}
                value={form.name}
                className="mt-2 block w-full px-4 py-3 border border-gray-200 rounded-xl shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Adresse Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                onChange={handleChange}
                value={form.email}
                className="mt-2 block w-full px-4 py-3 border border-gray-200 rounded-xl shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="vous@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                id="message"
                rows={6}
                required
                onChange={handleChange}
                value={form.message}
                className="mt-2 block w-full px-4 py-3 border border-gray-200 rounded-xl shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Écrivez votre message ici..."
              />
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition duration-300"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
