"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  Home,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { UserButton, useUser } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { useSiteSettings } from "@/hooks/useSiteSettings";
const navigation = [
  { name: "Welcome", href: "/admin", icon: LayoutDashboard },
  {
    name: "Gestion du contenu",
    href: "/admin/content",
    icon: FileText,
    // Ajoute un sous-menu si tu veux
    submenu: [
      { name: "Hero Banner", href: "/admin/content/hero" },
      { name: "Actualités", href: "/admin/content/actualites" },
      { name: "Appels d'Offres", href: "/admin/content/appels-offres" },
    ],
  },
  { name: "Gestion des utilisateurs", href: "/admin/users", icon: Users },
  { name: "Paramètres du site", href: "/admin/settings", icon: Settings },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const { user } = useUser();
  const { settings, isLoading } = useSiteSettings();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const SidebarContent = () => (
    <>
      {/* Header */}
      <div className="p-6 border-b border-slate-700">
        <Link
          href="/admin"
          className="flex items-center space-x-3"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="w-10 h-10  rounded-lg flex items-center justify-center">
            <Image
              src="/images/logo_gct.png"
              alt="GCT Logo"
              width={50}
              height={50}
              className="w-8 h-8 object-contain"
            />
          </div>
          <div>
            <h1 className="text-lg font-bold">
              {isLoading
                ? "GCT Admin"
                : `${settings.siteTitle.split(" ")[0]} Admin`}
            </h1>
            <p className="text-xs text-slate-400">Panneau de contrôle</p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200",
                isActive
                  ? "bg-emerald-600 text-white shadow-lg"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              )}
            >
              <Icon className="mr-3 h-5 w-5" />
              {item.name}
            </Link>
          );
        })}

        {/* Return to Public Site */}
        <Link
          href="/"
          onClick={() => setIsMobileMenuOpen(false)}
          className="flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 text-slate-300 hover:bg-slate-800 hover:text-white mt-4 border-t border-slate-700 pt-6"
        >
          <Home className="mr-3 h-5 w-5" />
          Retour au site
        </Link>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-slate-700">
        <div className="flex items-center space-x-3 p-3 rounded-lg bg-slate-800">
          <UserButton
            appearance={{
              elements: {
                avatarBox: "w-10 h-10",
              },
            }}
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">
              {user?.firstName} {user?.lastName}
            </p>
            <p className="text-xs text-slate-400 truncate">Administrateur</p>
          </div>
          <button
            onClick={() => (window.location.href = "/")}
            className="p-2 hover:bg-slate-700 rounded-md transition-colors"
            title="Sign out"
          >
            <LogOut className="w-4 h-4 text-slate-400" />
          </button>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-900 text-white rounded-lg shadow-lg"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-64 bg-slate-900 text-white shadow-2xl z-50 flex-col">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Sidebar */}
          <aside className="lg:hidden fixed left-0 top-0 h-screen w-64 bg-slate-900 text-white shadow-2xl z-50 flex flex-col animate-slide-in">
            <SidebarContent />
          </aside>
        </>
      )}

      {/* Add custom animation */}
      <style jsx global>{`
        @keyframes slide-in {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
