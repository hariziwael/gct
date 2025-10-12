'use client'

import { useUser } from '@clerk/nextjs'
import { LayoutDashboard, FileText, Users, Settings, TrendingUp, Activity } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useSettings } from '@/context/SettingsContext'

export default function AdminPage() {
  const { user } = useUser()
  const { settings } = useSettings()
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalActualites: 0,
    totalAppels: 0,
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      // Fetch users count from Clerk
      const usersResponse = await fetch('/api/clerk/users')
      const usersData = await usersResponse.json()

      // Fetch actualités count from Sanity
      const actualitesResponse = await fetch('/api/sanity/actualite/count')
      const actualitesData = await actualitesResponse.json()

      // Fetch appels d'offres count from Sanity
      const appelsResponse = await fetch('/api/sanity/appel-offre/count')
      const appelsData = await appelsResponse.json()

      setStats({
        totalUsers: usersData.count || 0,
        totalActualites: actualitesData.count || 0,
        totalAppels: appelsData.count || 0,
      })
    } catch (error) {
      console.error('Erreur chargement stats:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const statsData = [
    { name: 'Total Utilisateurs', value: stats.totalUsers.toString(), icon: Users, color: 'bg-blue-500' },
    { name: 'Actualités', value: stats.totalActualites.toString(), icon: FileText, color: 'bg-emerald-500' },
    { name: 'Appels d\'Offres', value: stats.totalAppels.toString(), icon: TrendingUp, color: 'bg-purple-500' },
    { name: 'Statut Système', value: 'Actif', icon: Activity, color: 'bg-green-500' },
  ]

  const quickActions = [
    {
      name: 'Gestion du contenu',
      description: 'Gérer les articles et pages',
      href: '/admin/content',
      icon: FileText,
      color: 'bg-emerald-600 hover:bg-emerald-700',
    },
    {
      name: 'Utilisateurs',
      description: 'Voir et gérer les utilisateurs',
      href: '/admin/users',
      icon: Users,
      color: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      name: 'Paramètres',
      description: 'Configurer le site',
      href: '/admin/settings',
      icon: Settings,
      color: 'bg-slate-600 hover:bg-slate-700',
    },
  ]

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            Bienvenue, {user?.firstName || 'Admin'} 👋
          </h1>
          <p className="text-lg text-slate-600">
            Voici un aperçu de votre tableau de bord d'administration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsData.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.name}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">{stat.name}</p>
                    <p className="text-3xl font-bold text-slate-900 mt-2">
                      {isLoading ? '...' : stat.value}
                    </p>
                  </div>
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Actions rapides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action) => {
              const Icon = action.icon
              return (
                <Link
                  key={action.name}
                  href={action.href}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`${action.color} p-3 rounded-lg transition-colors`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{action.name}</h3>
                      <p className="text-sm text-slate-600">{action.description}</p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-slate-900">Activité récente</h2>
            <LayoutDashboard className="w-5 h-5 text-slate-400" />
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-3 pb-4 border-b border-slate-100">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-900">
                  Nouveau contenu publié
                </p>
                <p className="text-xs text-slate-500">Il y a 2 heures</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 pb-4 border-b border-slate-100">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-900">
                  Utilisateur ajouté
                </p>
                <p className="text-xs text-slate-500">Il y a 5 heures</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-900">
                  Paramètres mis à jour
                </p>
                <p className="text-xs text-slate-500">Hier</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl shadow-md p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold mb-1">{settings.siteTitle}</h3>
              <p className="text-sm text-emerald-100">
                Système de gestion de contenu - Version 1.0
              </p>
            </div>
            <Activity className="w-8 h-8 text-emerald-200" />
          </div>
        </div>
      </div>
    </div>
  )
}