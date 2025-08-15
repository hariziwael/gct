import { fetchSettings } from '@/lib/sanity/fetchSettings'

export default async function SettingsPage() {
  const settings = await fetchSettings()

  return (
    <div className="p-8 text-center text-emerald-950">
      <h1 className="text-2xl font-bold mb-4">Paramètres du site</h1>
      <div className="space-y-4">
        <div>
          <strong>📛 Nom du site :</strong> {settings?.siteTitle || 'Non défini'}
        </div>
        <div>
          <strong>📧 Email de contact :</strong> {settings?.contactEmail || 'Non disponible'}
        </div>
        <div>
          <strong>🔗 Lien Facebook :</strong>{' '}
          {settings?.facebookLink ? (
            <a
              href={settings.facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {settings.facebookLink}
            </a>
          ) : (
            'Non disponible'
          )}
        </div>
        <div>
          <strong>🎨 Couleur du thème :</strong> {settings?.themeColor || 'Non définie'}
        </div>
      </div>
    </div>
  )
}
