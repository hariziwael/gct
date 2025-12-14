'use client'

import { useEffect, useState, useCallback } from 'react'
import { CheckCircle, XCircle, FileText, Mail, Phone, Calendar, Filter, Download } from 'lucide-react'

interface Candidature {
  _id: string
  nom: string
  email: string
  telephone: string
  statut: 'pending' | 'accepted' | 'refused'
  datePostulation: string
  appelOffreTitre: string
  cvUrl?: string
  noteAdmin?: string
}

export default function CandidaturesManager() {
  const [candidatures, setCandidatures] = useState<Candidature[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [filter, setFilter] = useState<string>('all')
  const [message, setMessage] = useState('')

  const fetchCandidatures = useCallback(async () => {
    try {
      setIsLoading(true)
      const url = filter === 'all' 
        ? '/api/candidature' 
        : `/api/candidature?statut=${filter}`
      
      const response = await fetch(url)
      const data = await response.json()

      if (data.success) {
        setCandidatures(data.candidatures)
      }
    } catch (error) {
      console.error('Erreur:', error)
    } finally {
      setIsLoading(false)
    }
  }, [filter])

  useEffect(() => {
    fetchCandidatures()
  }, [fetchCandidatures])

  const handleUpdateStatut = async (id: string, statut: 'accepted' | 'refused') => {
    try {
      const response = await fetch('/api/candidature', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ _id: id, statut }),
      })

      if (response.ok) {
        
        setMessage(`✅ Candidature ${statut === 'accepted' ? 'acceptée' : 'refusée'}! 📧 Email de notification envoyé au candidat.`)
        fetchCandidatures()
        setTimeout(() => setMessage(''), 5000)
      } else {
        const errorData = await response.json()
        setMessage(`❌ Erreur: ${errorData.error || 'Erreur lors de la mise à jour'}`)
        setTimeout(() => setMessage(''), 5000)
      }
    } catch (error) {
      console.error('Erreur:', error)
      setMessage('❌ Erreur de connexion')
      setTimeout(() => setMessage(''), 5000)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Supprimer cette candidature?')) return

    try {
      const response = await fetch('/api/candidature', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ _id: id }),
      })

      if (response.ok) {
        setMessage('✅ Candidature supprimée!')
        fetchCandidatures()
        setTimeout(() => setMessage(''), 3000)
      }
    } catch (error) {
      console.error('Erreur:', error)
    }
  }

  const getStatutBadge = (statut: string) => {
    const styles = {
      pending: 'bg-yellow-100 text-yellow-800',
      accepted: 'bg-green-100 text-green-800',
      refused: 'bg-red-100 text-red-800',
    }
    const labels = {
      pending: '⏳ En attente',
      accepted: '✅ Accepté',
      refused: '❌ Refusé',
    }
    return (
      <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${styles[statut as keyof typeof styles]}`}>
        {labels[statut as keyof typeof labels]}
      </span>
    )
  }

  const stats = {
    total: candidatures.length,
    pending: candidatures.filter(c => c.statut === 'pending').length,
    accepted: candidatures.filter(c => c.statut === 'accepted').length,
    refused: candidatures.filter(c => c.statut === 'refused').length,
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
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          📋 Gestion des Candidatures
        </h1>
        <p className="text-slate-600">
          {stats.total} candidature(s) - {stats.pending} en attente
        </p>
      </div>

      {message && (
        <div className={`mb-6 text-center py-3 px-4 rounded-lg ${
          message.includes('✅') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
        }`}>
          {message}
        </div>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          <p className="text-sm text-slate-600 mb-1">Total</p>
          <p className="text-3xl font-bold text-slate-900">{stats.total}</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <p className="text-sm text-slate-600 mb-1">En attente</p>
          <p className="text-3xl font-bold text-yellow-600">{stats.pending}</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <p className="text-sm text-slate-600 mb-1">Acceptées</p>
          <p className="text-3xl font-bold text-green-600">{stats.accepted}</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <p className="text-sm text-slate-600 mb-1">Refusées</p>
          <p className="text-3xl font-bold text-red-600">{stats.refused}</p>
        </div>
      </div>

      {/* Filtres */}
      <div className="mb-6 flex items-center gap-2">
        <Filter className="w-5 h-5 text-slate-500" />
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg ${filter === 'all' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'}`}
        >
          Toutes
        </button>
        <button
          onClick={() => setFilter('pending')}
          className={`px-4 py-2 rounded-lg ${filter === 'pending' ? 'bg-yellow-600 text-white' : 'bg-slate-100 text-slate-700'}`}
        >
          En attente
        </button>
        <button
          onClick={() => setFilter('accepted')}
          className={`px-4 py-2 rounded-lg ${filter === 'accepted' ? 'bg-green-600 text-white' : 'bg-slate-100 text-slate-700'}`}
        >
          Acceptées
        </button>
        <button
          onClick={() => setFilter('refused')}
          className={`px-4 py-2 rounded-lg ${filter === 'refused' ? 'bg-red-600 text-white' : 'bg-slate-100 text-slate-700'}`}
        >
          Refusées
        </button>
      </div>

      {/* Liste des candidatures */}
      <div className="space-y-4">
        {candidatures.map((candidature) => (
          <div key={candidature._id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-slate-900">{candidature.nom}</h3>
                  {getStatutBadge(candidature.statut)}
                </div>
                <p className="text-sm text-slate-600 mb-2">
                  <strong>Appel d&apos;offre:</strong> {candidature.appelOffreTitre}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center text-sm text-slate-600">
                <Mail className="w-4 h-4 mr-2 text-emerald-600" />
                {candidature.email}
              </div>
              <div className="flex items-center text-sm text-slate-600">
                <Phone className="w-4 h-4 mr-2 text-emerald-600" />
                {candidature.telephone}
              </div>
              <div className="flex items-center text-sm text-slate-600">
                <Calendar className="w-4 h-4 mr-2 text-emerald-600" />
                {new Date(candidature.datePostulation).toLocaleDateString('fr-FR')}
              </div>
            </div>

            <div className="flex items-center gap-3">
              {candidature.cvUrl && (
                <a
                  href={candidature.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Télécharger CV
                </a>
              )}

              {candidature.statut === 'pending' && (
                <>
                  <button
                    onClick={() => handleUpdateStatut(candidature._id, 'accepted')}
                    className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Accepter
                  </button>
                  <button
                    onClick={() => handleUpdateStatut(candidature._id, 'refused')}
                    className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <XCircle className="w-4 h-4 mr-2" />
                    Refuser
                  </button>
                </>
              )}

              <button
                onClick={() => handleDelete(candidature._id)}
                className="ml-auto px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>

      {candidatures.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl shadow-md">
          <FileText className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <p className="text-slate-600 text-lg">Aucune candidature</p>
        </div>
      )}
    </div>
  )
}