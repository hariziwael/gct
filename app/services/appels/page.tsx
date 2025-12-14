'use client'

import { useEffect, useState } from 'react'
const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('fr-FR')
}
import Link from "next/link"
import { X, Upload, Send } from 'lucide-react'

interface AppelOffre {
  _id: string
  titre: string
  description: string
  dateLimite: string
  etat: string
  documentUrl?: string
}

export default function AppelsPage() {
  const [appels, setAppels] = useState<AppelOffre[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [selectedAppel, setSelectedAppel] = useState<AppelOffre | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
  })
  const [cvFile, setCvFile] = useState<File | null>(null)

  useEffect(() => {
    fetchAppels()
  }, [])

  const fetchAppels = async () => {
    try {
      const response = await fetch('/api/sanity/appel-offre')
      const data = await response.json()
      setAppels(data.appels || [])
    } catch (error) {
      console.error('Erreur:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleOpenModal = (appel: AppelOffre) => {
    setSelectedAppel(appel)
    setShowModal(true)
    setFormData({ nom: '', email: '', telephone: '' })
    setCvFile(null)
    setMessage('')
  }

  const handleCvUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      if (file.type === 'application/pdf') {
        setCvFile(file)
      } else {
        alert('Veuillez sélectionner un fichier PDF')
      }
    }
  }

  const handleSubmit = async () => {
    if (!formData.nom || !formData.email || !formData.telephone || !cvFile) {
      setMessage('❌ Veuillez remplir tous les champs')
      return
    }

    setIsSubmitting(true)
    setMessage('')

    try {
      const formDataToSend = new FormData()
      formDataToSend.append('appelOffre', selectedAppel!._id)
      formDataToSend.append('nom', formData.nom)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('telephone', formData.telephone)
      formDataToSend.append('cv', cvFile)

      const response = await fetch('/api/candidature', {
        method: 'POST',
        body: formDataToSend,
      })

      if (response.ok) {
        setMessage('✅ Candidature envoyée avec succès!')
        setTimeout(() => {
          setShowModal(false)
          setMessage('')
        }, 2000)
      } else {
        setMessage('❌ Erreur lors de l\'envoi')
      }
    } catch (error) {
      console.error('Erreur:', error)
      setMessage('❌ Erreur réseau')
    } finally {
      setIsSubmitting(false)
    }
  }

  const Breadcrumb = () => (
    <nav className="flex items-center space-x-2 text-sm mb-8">
      <Link href="/" className="text-gray-600 hover:text-emerald-600 transition-colors duration-200 font-medium">
        Accueil
      </Link>
      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
      </svg>
      <span className="text-emerald-700 font-semibold">Appels</span>
    </nav>
  )

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <Breadcrumb />
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Appels d'Offres
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
            Découvrez nos opportunités d'affaires et postulez directement
          </p>
        </div>

        <div className="grid gap-8 md:gap-6 lg:grid-cols-2 xl:grid-cols-2">
          {appels.map((appel) => (
            <div key={appel._id} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="absolute top-6 right-6 z-10">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                  appel.etat === 'ouvert' 
                    ? 'bg-green-100 text-green-800 border border-green-200' 
                    : 'bg-red-100 text-red-800 border border-red-200'
                }`}>
                  <div className={`w-2 h-2 rounded-full mr-2 ${appel.etat === 'ouvert' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  {appel.etat === 'ouvert' ? 'Ouvert' : 'Fermé'}
                </span>
              </div>

              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pr-20 leading-tight group-hover:text-emerald-700 transition-colors duration-200">
                  {appel.titre}
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {appel.description}
                </p>

                <div className="flex items-center mb-6 p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center justify-center w-10 h-10 bg-emerald-100 rounded-lg mr-4">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Date limite</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {formatDate(appel.dateLimite)}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  {appel.documentUrl && (
                    <a
                      href={appel.documentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-slate-100 text-slate-700 font-semibold rounded-xl hover:bg-slate-200 transition-all duration-200"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      PDF
                    </a>
                  )}
                  
                  {appel.etat === 'ouvert' && (
                    <button
                      onClick={() => handleOpenModal(appel)}
                      className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Postuler
                    </button>
                  )}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        {appels.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Aucun appel d'offre disponible</h3>
            <p className="text-gray-600">Revenez bientôt pour découvrir de nouvelles opportunités</p>
          </div>
        )}
      </div>

      {/* Modal Candidature */}
      {showModal && selectedAppel && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900">Postuler</h2>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-6 h-6" />
              </button>
            </div>

            <p className="text-sm text-slate-600 mb-6">
              Candidature pour: <strong>{selectedAppel.titre}</strong>
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Nom complet *</label>
                <input
                  type="text"
                  value={formData.nom}
                  onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                  className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500"
                  placeholder="foulen ben foulen"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500"
                  placeholder="foulen@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Téléphone *</label>
                <input
                  type="tel"
                  value={formData.telephone}
                  onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                  className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500"
                  placeholder="+216 XX XXX XXX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">CV (PDF) *</label>
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 text-center">
                  {cvFile ? (
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-emerald-600">{cvFile.name}</span>
                      <button onClick={() => setCvFile(null)} className="text-red-500">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <label className="cursor-pointer">
                      <Upload className="w-8 h-8 mx-auto text-slate-400 mb-2" />
                      <span className="text-emerald-600 hover:text-emerald-700 font-medium">Choisir un fichier</span>
                      <input type="file" accept="application/pdf" onChange={handleCvUpload} className="hidden" />
                      <p className="text-xs text-slate-500 mt-1">PDF uniquement, max 5MB</p>
                    </label>
                  )}
                </div>
              </div>

              {message && (
                <div className={`text-center py-2 px-4 rounded-lg ${
                  message.includes('✅') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                }`}>
                  {message}
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full flex items-center justify-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Envoi...' : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer la candidature
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}