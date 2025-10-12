// hooks/useSiteSettings.ts
'use client'

import { useState, useEffect } from 'react'

interface SiteSettings {
  siteTitle: string
  contactEmail: string
  facebookLink: string
  themeColor: string
}

const defaultSettings: SiteSettings = {
  siteTitle: 'Groupe Chimique Tunisien',
  contactEmail: 'contact@gct.tn',
  facebookLink: 'https://facebook.com/gct',
  themeColor: '#059669',
}

export function useSiteSettings() {
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
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

    fetchSettings()
  }, [])

  return { settings, isLoading }
}