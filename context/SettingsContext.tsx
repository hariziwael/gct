'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface SocialMedia {
  facebook?: string
  twitter?: string
  linkedin?: string
  instagram?: string
  youtube?: string
}

interface SEO {
  metaTitle?: string
  metaDescription?: string
  keywords?: string[]
}

interface Settings {
  siteTitle: string
  siteDescription?: string
  logo?: string
  contactEmail: string
  contactPhone?: string
  address?: string
  socialMedia?: SocialMedia
  themeColor: string
  language: string
  seo?: SEO
  maintenance?: boolean
  maintenanceMessage?: string
}

interface SettingsContextType {
  settings: Settings
  isLoading: boolean
  error: string | null
  refreshSettings: () => Promise<void>
  updateSettings: (newSettings: Partial<Settings>) => Promise<void>
}

const defaultSettings: Settings = {
  siteTitle: 'Groupe Chimique Tunisien',
  siteDescription: 'Leader dans l\'industrie du phosphate',
  contactEmail: 'contact@gct.tn',
  themeColor: '#059669',
  language: 'fr',
}

const SettingsContext = createContext<SettingsContextType>({
  settings: defaultSettings,
  isLoading: true,
  error: null,
  refreshSettings: async () => {},
  updateSettings: async () => {},
})

export function SettingsProvider({ children }: { children: ReactNode }) {
  // Start with default settings immediately (non-blocking)
  const [settings, setSettings] = useState<Settings>(defaultSettings)
  const [isLoading, setIsLoading] = useState(false) // Start as false - non-blocking
  const [error, setError] = useState<string | null>(null)

  const fetchSettings = async () => {
    try {
      setIsLoading(true)
      setError(null)
      const response = await fetch('/api/sanity/settings')
      const data = await response.json()

      if (data.success) {
        setSettings({ ...defaultSettings, ...data.settings })
      }
    } catch (err) {
      console.error('Erreur chargement settings:', err)
      setError('Impossible de charger les paramètres')
      // Keep using default settings on error
    } finally {
      setIsLoading(false)
    }
  }

  const updateSettings = async (newSettings: Partial<Settings>) => {
    try {
      const response = await fetch('/api/sanity/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newSettings),
      })

      if (response.ok) {
        setSettings(prev => ({ ...prev, ...newSettings }))
        return
      }

      throw new Error('Erreur lors de la mise à jour')
    } catch (err) {
      console.error('Erreur update settings:', err)
      throw err
    }
  }

  // Fetch settings in background (non-blocking)
  useEffect(() => {
    fetchSettings()
  }, [])

  // Appliquer le thème dynamiquement (works with defaults too)
  useEffect(() => {
    if (settings.themeColor) {
      document.documentElement.style.setProperty('--theme-color', settings.themeColor)
    }
  }, [settings.themeColor])

  const refreshSettings = async () => {
    await fetchSettings()
  }

  return (
    <SettingsContext.Provider value={{ 
      settings, 
      isLoading, 
      error, 
      refreshSettings,
      updateSettings 
    }}>
      {children}
    </SettingsContext.Provider>
  )
}

export function useSettings() {
  const context = useContext(SettingsContext)
  if (!context) {
    throw new Error('useSettings doit être utilisé dans un SettingsProvider')
  }
  return context
}