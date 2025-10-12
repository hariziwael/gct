'use client'

import { useEffect, useState } from 'react'
import { Save, RefreshCw, ExternalLink } from 'lucide-react'
import client from '@/lib/sanity'

interface HeroBanner {
  _id: string
  titre: string
  sousTitre: string
}

export default function HeroBannerEditor() {
  const [hero, setHero] = useState<HeroBanner | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [message, setMessage] = useState('')
  const [editedHero, setEditedHero] = useState({ titre: '', sousTitre: '' })

  useEffect(() => {
    fetchHero()
  }, [])

  const fetchHero = async () => {
    try {
      setIsLoading(true)
      const data: HeroBanner = await client.fetch(`*[_type == "heroBanner"][0]{_id, titre, sousTitre}`)
      setHero(data)
      setEditedHero({ titre: data.titre, sousTitre: data.sousTitre })
    } catch (error) {
      console.error('Erreur:', error)
      setMessage('❌ Erreur lors du chargement')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSave = async () => {
    if (!hero) return

    setIsSaving(true)
    setMessage('')

    try {
      const response = await fetch('/api/sanity/update-hero', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          _id: hero._id,
          titre: editedHero.titre,
          sousTitre: editedHero.sousTitre,
        }),
      })

      const result = await response.json()

      if (response.ok) {
        setMessage('✅ Modifications enregistrées avec succès!')
        setHero({ ...hero, ...editedHero })
        setTimeout(() => setMessage(''), 3000)
      } else {
        setMessage(`❌ Erreur: ${result.error}`)
      }
    } catch (error) {
      console.error('Erreur:', error)
      setMessage('❌ Erreur lors de la sauvegarde')
    } finally {
      setIsSaving(false)
    }
  }

  const hasChanges = hero && (
    editedHero.titre !== hero.titre || 
    editedHero.sousTitre !== hero.sousTitre
  )

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
          <p className="mt-4 text-slate-600">Chargement...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              🎯 Gestion du Hero Banner
            </h1>
            <p className="text-slate-600">
              Modifiez le titre et sous-titre de la page d&apos;accueil
            </p>
          </div>
          <a
            href="http://localhost:3333/structure/heroBanner"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 text-sm bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Ouvrir dans Sanity
          </a>
        </div>
      </div>

      {/* Editor Card */}
      <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
        {/* Titre Principal */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Titre Principal
          </label>
          <input
            type="text"
            value={editedHero.titre}
            onChange={(e) => setEditedHero({ ...editedHero, titre: e.target.value })}
            className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="Ex: Bienvenue chez GCT"
          />
        </div>

        {/* Sous-titre */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Sous-titre
          </label>
          <textarea
            value={editedHero.sousTitre}
            onChange={(e) => setEditedHero({ ...editedHero, sousTitre: e.target.value })}
            rows={3}
            className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="Ex: Leader dans l'industrie du phosphate"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-200">
          <button
            onClick={fetchHero}
            className="flex items-center px-4 py-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Réinitialiser
          </button>

          <button
            onClick={handleSave}
            disabled={!hasChanges || isSaving}
            className="flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Save className="w-5 h-5 mr-2" />
            {isSaving ? 'Enregistrement...' : 'Enregistrer les modifications'}
          </button>
        </div>

        {/* Message */}
        {message && (
          <div className={`text-center py-3 px-4 rounded-lg ${
            message.includes('✅') 
              ? 'bg-green-50 text-green-700' 
              : 'bg-red-50 text-red-700'
          }`}>
            {message}
          </div>
        )}
      </div>

      {/* Preview */}
      <div className="mt-8 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl shadow-lg p-8 text-white">
        <p className="text-sm font-medium text-emerald-100 mb-2">Aperçu</p>
        <h2 className="text-3xl font-bold mb-2">{editedHero.titre || 'Titre...'}</h2>
        <p className="text-lg text-emerald-50">{editedHero.sousTitre || 'Sous-titre...'}</p>
      </div>
    </div>
  )
}