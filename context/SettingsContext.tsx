// context/SettingsContext.tsx
'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface Settings {
  siteTitle: string
  contactEmail: string
  facebookLink: string
  themeColor: string
}

interface SettingsContextType {
  settings: Settings
  isLoading: boolean
  refreshSettings: () => Promise<void>
}

const defaultSettings: Settings = {
  siteTitle: 'Groupe Chimique Tunisien',
  contactEmail: 'contact@gct.tn',
  facebookLink: 'https://facebook.com/gct',
  themeColor: '#059669',
}

const SettingsContext = createContext<SettingsContextType>({
  settings: defaultSettings,
  isLoading: true,
  refreshSettings: async () => {},
})

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<Settings>(defaultSettings)
  const [isLoading, setIsLoading] = useState(true)

  const fetchSettings = async () => {
    try {
      const response = await fetch('/api/sanity/settings')
      const data = await response.json()

      if (data.success) {
        setSettings(data.settings)
      }
    } catch (error) {
      console.error('Erreur chargement settings:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchSettings()
  }, [])

  const refreshSettings = async () => {
    await fetchSettings()
  }

  return (
    <SettingsContext.Provider value={{ settings, isLoading, refreshSettings }}>
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