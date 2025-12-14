'use client'

import { useEffect, useState } from 'react'
import { Plus, Edit2, Trash2, Calendar, ExternalLink } from 'lucide-react'
import client from '@/lib/sanity'

interface AppelOffre {
  _id: string
  titre: string
  description: string
  dateLimite: string
  etat: 'ouvert' | 'ferme'
}

export default function AppelsOffresManager() {
  const [appels, setAppels] = useState<AppelOffre[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    titre: '',
    description: '',
    dateLimite: new Date().toISOString().split('T')[0],
    etat: 'ouvert' as 'ouvert' | 'ferme',
  })
  const [message, setMessage] = useState('')
  const [pdfFile, setPdfFile] = useState<File | null>(null)

  useEffect(() => {
    fetchAppels()
  }, [])

  const fetchAppels = async () => {
    try {
      setIsLoading(true)
      const data = await client.fetch(`
        *[_type == "appelOffre"] | order(dateLimite desc) {
          _id,
          titre,
          description,
          dateLimite,
          etat
        }
      `)
      setAppels(data)
    } catch (error) {
      console.error('Erreur:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleOpenModal = (appel?: AppelOffre) => {
    if (appel) {
      setEditingId(appel._id)
      setFormData({
        titre: appel.titre,
        description: appel.description || '',
        dateLimite: appel.dateLimite ? appel.dateLimite.split('T')[0] : '',
        etat: appel.etat,
      })
    } else {
      setEditingId(null)
      setFormData({
        titre: '',
        description: '',
        dateLimite: new Date().toISOString().split('T')[0],
        etat: 'ouvert',
      })
    }
    setPdfFile(null) // Reset PDF file when opening modal
    setShowModal(true)
  }

  const handleSubmit = async () => {
    setMessage("")

    try {
      let body: BodyInit;
      const headers: HeadersInit = {};

      // If there's a PDF file, use FormData (works for both create and update)
      if (pdfFile) {
        const formDataToSend = new FormData();
        formDataToSend.append("titre", formData.titre);
        formDataToSend.append("description", formData.description);
        formDataToSend.append("dateLimite", formData.dateLimite);
        formDataToSend.append("etat", formData.etat);
        formDataToSend.append("file", pdfFile);
        if (editingId) {
          formDataToSend.append("_id", editingId);
        }
        body = formDataToSend;
        // No headers, browser sets them automatically for FormData
      } else {
        // No file, send as JSON
        body = JSON.stringify({
          ...formData,
          _id: editingId,
        });
        headers["Content-Type"] = "application/json";
      }

      const response = await fetch("/api/sanity/appel-offre", {
        method: editingId ? "PUT" : "POST",
        headers,
        body,
      })

      if (response.ok) {
        setMessage('✅ Appel d\'offre enregistré!')
        setShowModal(false)
        setPdfFile(null) // Reset PDF file after successful submission
        fetchAppels()
        setTimeout(() => setMessage(''), 3000)
      } else {
        setMessage('❌ Erreur lors de la sauvegarde')
      }
    } catch (error) {
      console.error('Erreur:', error)
      setMessage('❌ Erreur réseau')
    }
  }

  const handleToggleEtat = async (id: string, currentEtat: string) => {
    const newEtat = currentEtat === 'ouvert' ? 'ferme' : 'ouvert'
    
    try {
      const response = await fetch('/api/sanity/appel-offre', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          _id: id,
          etat: newEtat,
        }),
      })

      if (response.ok) {
        setMessage(`✅ État changé en "${newEtat === 'ouvert' ? 'Ouvert' : 'Fermé'}"`)
        fetchAppels()
        setTimeout(() => setMessage(''), 3000)
      }
    } catch (error) {
      console.error('Erreur:', error)
      setMessage('❌ Erreur lors du changement d\'état')
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cet appel d\'offre?')) return

    try {
      const response = await fetch('/api/sanity/appel-offre', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ _id: id }),
      })

      if (response.ok) {
        setMessage('✅ Appel d\'offre supprimé!')
        fetchAppels()
        setTimeout(() => setMessage(''), 3000)
      }
    } catch (error) {
      console.error('Erreur:', error)
      setMessage('❌ Erreur lors de la suppression')
    }
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPdfFile(e.target.files[0])
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
      </div>
    )
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              📋 Gestion des Appels d&apos;Offres
            </h1>
            <p className="text-slate-600">
              {appels.length} appel(s) - {appels.filter(a => a.etat === 'ouvert').length} ouvert(s)
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="http://localhost:3333/structure/appelOffre"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Sanity Studio
            </a>
            <button
              onClick={() => handleOpenModal()}
              className="flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
            >
              <Plus className="w-5 h-5 mr-2" />
              Nouvel Appel d&apos;Offre
            </button>
          </div>
        </div>
      </div>

      {message && (
        <div className={`mb-6 text-center py-3 px-4 rounded-lg ${
          message.includes('✅') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
        }`}>
          {message}
        </div>
      )}

      <div className="grid gap-6">
        {appels.map((appel) => (
          <div key={appel._id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-slate-900">
                    {appel.titre}
                  </h3>
                  <button
                    onClick={() => handleToggleEtat(appel._id, appel.etat)}
                    className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors ${
                      appel.etat === 'ouvert'
                        ? 'bg-green-100 text-green-700 hover:bg-green-200'
                        : 'bg-red-100 text-red-700 hover:bg-red-200'
                    }`}
                  >
                    {appel.etat === 'ouvert' ? 'Ouvert' : 'Fermé'}
                  </button>
                </div>
                <p className="text-slate-600 mb-3">
                  {appel.description || 'Aucune description'}
                </p>
                <div className="flex items-center text-sm text-slate-500">
                  <Calendar className="w-4 h-4 mr-1" />
                  Date limite: {new Date(appel.dateLimite).toLocaleDateString('fr-FR')}
                </div>
              </div>
              <div className="flex gap-2 ml-4">
                <button
                  onClick={() => handleOpenModal(appel)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  title="Modifier"
                >
                  <Edit2 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleDelete(appel._id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  title="Supprimer"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              {editingId ? 'Modifier l\'appel d\'offre' : 'Nouvel appel d\'offre'}
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Titre
                </label>
                <input
                  type="text"
                  value={formData.titre}
                  onChange={(e) => setFormData({ ...formData, titre: e.target.value })}
                  className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Description
                </label>
                <textarea
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Date limite
                </label>
                <input
                  type="date"
                  value={formData.dateLimite}
                  onChange={(e) => setFormData({ ...formData, dateLimite: e.target.value })}
                  className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  État
                </label>
                <select
                  value={formData.etat}
                  onChange={(e) => setFormData({ ...formData, etat: e.target.value as 'ouvert' | 'ferme' })}
                  className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="ouvert">Ouvert</option>
                  <option value="ferme">Fermé</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Fichier PDF (optionnel)
                </label>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileUpload}
                  className="w-full border border-slate-300 rounded-lg px-4 py-2"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-6 py-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  Annuler
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  Enregistrer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}