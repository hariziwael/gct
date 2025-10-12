'use client'

import { useState, useEffect } from 'react'
import { Save, Globe, Palette, Mail, ExternalLink, RefreshCw } from 'lucide-react'

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    siteTitle: 'Groupe Chimique Tunisien',
    contactEmail: 'contact@gct.tn',
    facebookLink: 'https://facebook.com/gct',
    themeColor: '#059669',
  })

  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [saveMessage, setSaveMessage] = useState('')

  useEffect(() => {
    fetchSettings()
  }, [])

  const fetchSettings = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/sanity/settings')
      const data = await response.json()

      if (data.success) {
        setSettings(data.settings)
      }
    } catch (error) {
      console.error('Erreur:', error)
      setSaveMessage('❌ Erreur lors du chargement')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSave = async () => {
    setIsSaving(true)
    setSaveMessage('')

    try {
      const response = await fetch('/api/sanity/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      })

      const data = await response.json()

      if (response.ok) {
        setSaveMessage('✅ Paramètres enregistrés avec succès!')
        setTimeout(() => setSaveMessage(''), 3000)
      } else {
        setSaveMessage(`❌ ${data.error}`)
      }
    } catch (error) {
      console.error('Erreur:', error)
      setSaveMessage('❌ Erreur lors de la sauvegarde')
    } finally {
      setIsSaving(false)
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Chargement des paramètres...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Paramètres du site</h1>
            <p className="text-slate-600">Gérez les paramètres généraux de votre site web</p>
          </div>
          <button
            onClick={fetchSettings}
            className="flex items-center px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
            title="Actualiser"
          >
            <RefreshCw className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
        <div>
          <label className="flex items-center text-sm font-medium text-slate-700 mb-2">
            <Globe className="w-4 h-4 mr-2" />
            Nom du site
          </label>
          <input
            type="text"
            value={settings.siteTitle}
            onChange={(e) => setSettings({ ...settings, siteTitle: e.target.value })}
            className="w-full border border-slate-300 rounded-lg px-4 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-slate-700 mb-2">
            <Mail className="w-4 h-4 mr-2" />
            Email de contact
          </label>
          <input
            type="email"
            value={settings.contactEmail}
            onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
            className="w-full border border-slate-300 rounded-lg px-4 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-slate-700 mb-2">
            <ExternalLink className="w-4 h-4 mr-2" />
            Lien Facebook
          </label>
          <input
            type="url"
            value={settings.facebookLink}
            onChange={(e) => setSettings({ ...settings, facebookLink: e.target.value })}
            className="w-full border border-slate-300 rounded-lg px-4 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-slate-700 mb-2">
            <Palette className="w-4 h-4 mr-2" />
            Couleur du thème
          </label>
          <div className="flex items-center space-x-4">
            <input
              type="color"
              value={settings.themeColor}
              onChange={(e) => setSettings({ ...settings, themeColor: e.target.value })}
              className="w-20 h-10 border border-slate-300 rounded-lg cursor-pointer"
            />
            <input
              type="text"
              value={settings.themeColor}
              onChange={(e) => setSettings({ ...settings, themeColor: e.target.value })}
              className="flex-1 border border-slate-300 rounded-lg px-4 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="#059669"
            />
          </div>
        </div>

        <div className="pt-4 border-t border-slate-200">
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="w-full flex items-center justify-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Save className="w-5 h-5 mr-2" />
            {isSaving ? 'Enregistrement...' : 'Enregistrer les paramètres'}
          </button>

          {saveMessage && (
            <p className={`mt-3 text-center text-sm font-medium ${
              saveMessage.includes('✅') ? 'text-emerald-600' : 'text-red-600'
            }`}>
              {saveMessage}
            </p>
          )}
        </div>
      </div>

      <div className="mt-8 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Aperçu</h2>
        <div className="space-y-3 text-sm">
          <div className="flex items-center justify-between py-2 border-b">
            <span className="text-slate-600">Nom du site:</span>
            <span className="font-medium text-slate-900">{settings.siteTitle}</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b">
            <span className="text-slate-600">Email:</span>
            <span className="font-medium text-slate-900">{settings.contactEmail}</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-slate-600">Couleur du thème:</span>
            <div className="flex items-center space-x-2">
              <div
                className="w-8 h-8 rounded-md border border-slate-300"
                style={{ backgroundColor: settings.themeColor }}
              ></div>
              <span className="font-medium text-slate-900">{settings.themeColor}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}