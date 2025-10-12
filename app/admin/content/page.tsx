'use client'

import Link from 'next/link'
import { FileText, Newspaper, Briefcase, ArrowRight } from 'lucide-react'

const contentSections = [
  {
    name: 'Hero Banner',
    href: '/admin/content/hero',
    icon: FileText,
    description: 'Modifier le titre et sous-titre de la page d\'accueil',
    color: 'bg-blue-500',
    hoverColor: 'hover:bg-blue-600',
  },
  {
    name: 'Actualités',
    href: '/admin/content/actualites',
    icon: Newspaper,
    description: 'Créer, modifier et supprimer les actualités de l\'entreprise',
    color: 'bg-emerald-500',
    hoverColor: 'hover:bg-emerald-600',
  },
  {
    name: 'Appels d\'Offres',
    href: '/admin/content/appels-offres',
    icon: Briefcase,
    description: 'Gérer les appels d\'offres et changer leur état',
    color: 'bg-purple-500',
    hoverColor: 'hover:bg-purple-600',
  },
]

export default function ContentIndexPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          📝 Gestion du Contenu
        </h1>
        <p className="text-slate-600">
          Gérez tout le contenu dynamique de votre site directement depuis cette interface
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {contentSections.map((section) => {
          const Icon = section.icon
          return (
            <Link
              key={section.name}
              href={section.href}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden"
            >
              <div className={`${section.color} p-6 transition-colors ${section.hoverColor}`}>
                <Icon className="w-10 h-10 text-white mb-2" />
                <h3 className="text-xl font-bold text-white">
                  {section.name}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-slate-600 mb-4">
                  {section.description}
                </p>
                <div className="flex items-center text-emerald-600 group-hover:text-emerald-700 font-medium">
                  Gérer
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl p-8 border border-emerald-100">
        <h2 className="text-xl font-bold text-slate-900 mb-4">
          💡 Comment ça marche?
        </h2>
        <div className="space-y-3 text-slate-700">
          <div className="flex items-start">
            <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">1</span>
            <p>Sélectionnez la section de contenu que vous souhaitez modifier</p>
          </div>
          <div className="flex items-start">
            <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">2</span>
            <p>Modifiez, ajoutez ou supprimez le contenu directement dans l&apos;interface</p>
          </div>
          <div className="flex items-start">
            <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">3</span>
            <p>Cliquez sur &quot;Enregistrer&quot; et vos modifications sont immédiatement visibles sur le site!</p>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-3">
            🔒 Sécurisé
          </h3>
          <p className="text-slate-600 text-sm">
            Toutes vos modifications sont protégées et synchronisées avec Sanity CMS en temps réel.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-3">
            ⚡ Instantané
          </h3>
          <p className="text-slate-600 text-sm">
            Les changements sont appliqués immédiatement sans nécessiter de redéploiement.
          </p>
        </div>
      </div>
    </div>
  )
}