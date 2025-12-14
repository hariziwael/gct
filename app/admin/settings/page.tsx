'use client'

import { useState, useEffect } from 'react'
import { Save, Globe, Mail} from 'lucide-react'
import { useSettings } from '@/context/SettingsContext'

export default function SettingsPage() {
  const { settings: globalSettings, updateSettings } = useSettings()
  const [settings, setSettings] = useState(globalSettings)
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [saveMessage, setSaveMessage] = useState('')
  const [activeTab, setActiveTab] = useState('general')

  useEffect(() => {
    setSettings(globalSettings)
    setIsLoading(false)
  }, [globalSettings])

  const handleSave = async () => {
    setIsSaving(true)
    setSaveMessage('')

    try {
      await updateSettings(settings)
      setSaveMessage('✅ Paramètres enregistrés avec succès!')
      setTimeout(() => setSaveMessage(''), 3000)
    } catch (error) {
      console.error('Erreur:', error)
      setSaveMessage('❌ Erreur lors de la sauvegarde')
    } finally {
      setIsSaving(false)
    }
  }

  const tabs = [
    { id: 'general', name: 'Général', icon: Globe },
    { id: 'contact', name: 'Contact', icon: Mail },
    
  ]

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
      </div>
    )
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Paramètres du site</h1>
        <p className="text-slate-600">Gérez tous les paramètres de votre site web</p>
      </div>

      {/* Tabs */}
      <div className="mb-8">
        <div className="border-b border-slate-200">
          <nav className="flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-emerald-500 text-emerald-600'
                      : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {tab.name}
                </button>
              )
            })}
          </nav>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        {/* Général */}
        {activeTab === 'general' && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Nom du site <span className='text-red-500'>*</span>
              </label>
              <input
                type="text"
                value={settings.siteTitle}
                onChange={(e) => setSettings({ ...settings, siteTitle: e.target.value })}
                className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Description du site
              </label>
              <textarea
                rows={3}
                value={settings.siteDescription || ''}
                onChange={(e) => setSettings({ ...settings, siteDescription: e.target.value })}
                className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            
          </div>
        )}

        {/* Contact */}
        {activeTab === 'contact' && (
          <div className="space-y-6">
            <div>
              <label className="flex items-center text-sm font-medium text-slate-700 mb-2">
                <Mail className="w-4 h-4 mr-2" />
                Email de contact <span className='text-red-500'>*</span>
              </label>
              <input
                type="email"
                value={settings.contactEmail}
                onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
                className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            

            
          </div>
        )}

        

        

        {/* Bouton Save */}
        <div className="pt-6 border-t border-slate-200 mt-8">
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="w-full flex items-center justify-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50"
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
    </div>
  )
}