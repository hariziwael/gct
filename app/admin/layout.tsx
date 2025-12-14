'use client'

import AdminSidebar from '@/components/AdminSidebar'
import { SettingsProvider } from '@/context/SettingsContext'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  // Auth is now handled server-side by middleware (faster!)
  // No need to wait for client-side auth check - middleware already protected the route
  // This eliminates the loading spinner and makes navigation instant

  return (
    <SettingsProvider>
      <div className="min-h-screen bg-slate-50">
        {/* Sidebar - Responsive */}
        <AdminSidebar />

        {/* Main content - Responsive offset */}
        <main className="lg:ml-64 min-h-screen">
          {children}
        </main>
      </div>
    </SettingsProvider>
  )
}