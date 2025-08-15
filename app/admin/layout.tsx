'use client'

import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, FileText, Users, Settings } from 'lucide-react'

import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Welcome page', href: '/admin', icon: LayoutDashboard },
  { name: 'Gestion du contenu', href: '/admin/content', icon: FileText },
  { name: 'Gestion des utilisateurs', href: '/admin/users', icon: Users },
  { name: 'Paramètres du site', href: '/admin/settings', icon: Settings },
  
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, isLoaded } = useUser()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (isLoaded) {
      const role = user?.publicMetadata?.role
      if (role !== 'admin') {
        router.push('/not-authorized')
      }
    }
  }, [isLoaded, user, router])

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center bg-emerald-50 justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
      </div>
    )
  }

  return (
    <div className=" min-h-screen bg-gray-50 ">
      {/* Sidebar */}
      <div className="bg-white shadow-lg border-r border-gray-200">
        <div className=" flex justify-center">
          {/* Header */}
          <div className=" text-center pt-6 px-4 bg-emerald-600">
            <h1 className="text-xl font-bold text-white">Panneau d&apos;administration</h1>
          </div>

          {/* Navigation */}
          <nav className="flex px-4 py-6 space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    isActive
                      ? "bg-emerald-100 text-emerald-700"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  )}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* User info */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center space-x-3 mb-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">
                    {user?.firstName?.charAt(0) || 'A'}
                  </span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {user?.firstName} {user?.lastName}
                </p>
                <p className="text-xs text-gray-500 truncate">Administrateur</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Main content */}
      
        <main >
          {children}
        </main>
      
    </div>
  )
}
