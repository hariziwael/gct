"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import { Menu, X, MapPin, Mail, ChevronDown, ChevronUp } from "lucide-react"
import { Search } from 'lucide-react';
import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, SignUpButton, useAuth, UserButton} from "@clerk/nextjs"


// Regular public navigation links
const publicNavLinks = [
  { name: "Accueil", href: "/" },
  {
    name: "À propos",
    href: "/about",
    dropdown: [
      { name: "Mot du DG", href: "/about/dg" },
      { name: "Qui Sommes-Nous?", href: "/about/qui-sommes-nous" },
      { name: "Histoire du GCT", href: "/about/histoire" },
      { name: "Vision du GCT", href: "/about/vision" },
    ],
  },
  // { name: "Admin", href: "/admin" },

  { name: "Partenariat", href: "/partenariat" },
  { name: "Management", href: "/management" },
  { name: "Chaine de Valeur", href: "/chaine" },
  
  { name: "Qualité", href: "/qualite" },
  { name: "Siape", href: "/recherche/siape" },
  { name: "RSE", href: "/rse" },
  {
    name: "Environnement",
    href: '#',
    dropdown: [
      { name: "Stratégie Environnementale", href: "/environnement/strategie" },
      { name: "Plan Environnemental (2009-2020)", href: "/environnement/plan" },
      { name: "Gestion du Phosphogypse", href: "/environnement/gestion" },
    ],
  },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "Achats", href: "/services/achats" },
      { name: "Appels", href: "/services/appels" },
    ],
  },
]

// Admin navigation links (when user is admin)
const adminNavLinks = [
  { name: "Dashboard", href: "/admin" },
  { 
    name: "Gestion Contenu", 
    href: "/admin/content",
    dropdown: [
      { name: "Articles", href: "/admin/content/articles" },
      { name: "Pages", href: "/admin/content/pages" },
      { name: "Médias", href: "/admin/content/media" },
    ]
  },
  { 
    name: "Utilisateurs", 
    href: "/admin/users",
    dropdown: [
      { name: "Liste Utilisateurs", href: "/admin/users/list" },
      { name: "Rôles", href: "/admin/users/roles" },
    ]
  },
  { name: "Paramètres", href: "/admin/settings" },
  { name: "Analytics", href: "/admin/analytics" },
  { name: "Retour au site", href: "/" },
]

const pdfFiles = [
  {
    title: "📝 Politique d'accès à l'information - GCT | سياسة النفاذ إلى المعلومة بالمجمع الكيميائي",
    url: "/pdf/politique-acces-information-gct.pdf",
  },
  {
    title: "📄 Formulaire de demande d'accès à l'information | مطلب النفاذ إلى المعلومة",
    url: "/pdf/demande-acces-information.pdf",
  },
  {
    title: "📑 Formulaire de recours en cas de refus | مطلب طعن لدى الهيكل العمومي",
    url: "/pdf/demande-recours-organisme.pdf",
  },
  {
    title: "📘 Loi n°2016-22 du 24 mars 2016 (FR) - Accès à l'information | القانون الأساسي عدد 22 لسنة 2016 (فرنسية)",
    url: "/pdf/loi-organique-2016-22-fr.pdf",
  },
  {
    title: "📙 القانون الأساسي عدد 22 لسنة 2016 (AR) - النفاذ إلى المعلومة | Loi organique n°2016-22 (arabe)",
    url: "/pdf/loi-organique-2016-22-ar.pdf",
  },
];

export default function Navbar() {
  const { sessionClaims, isLoaded } = useAuth()
  
  const pathname = usePathname()
  
  // Get user role from session claims
  const userRole = sessionClaims?.role as string
  const isAdmin = userRole === 'admin'
  
  // Choose navigation links based on user role
  const navLinks = isAdmin ? adminNavLinks : publicNavLinks
  
  // State management
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [, setActiveNested] = useState<string | null>(null)
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null)
      setActiveNested(null)
    } else {
      setActiveDropdown(name)
      setActiveNested(null)
    }
  }



  const filteredSuggestions = query.length > 0
    ? pdfFiles.filter((file) =>
        file.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  // Show loading state while auth is loading
  if (!isLoaded) {
    return <div className="fixed top-0 w-full h-20 bg-emerald-900 z-50" />
  }

  return (
    <>
      {/* Top Navigation Bar - Changes color when admin */}
      <div
        className={`${isAdmin ? 'bg-slate-800' : 'bg-emerald-900'} text-white fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'py-2 shadow-md' : 'py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-2 md:mb-0">
              <div className="p-0.2 mr-3">
                <Link href="/" className="block">
                  <Image
                    src="/images/logo_gct.png"
                    alt="GCT Logo"
                    className="w-10 h-15 object-cover"
                    width={100}
                    height={100}
                  />
                </Link>
              </div>
              <div>
                <span className="font-bold text-lg md:text-xl">
                  {isAdmin ? "GCT - Administration" : "Groupe Chimique Tunisien"}
                </span>
                <p className="text-xs text-gray-200">
                  {isAdmin ? "Panneau d'administration" : "Leader dans l'industrie du phosphate"}
                </p>
              </div>
            </div>
            

            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {/* Search - Hide for admin mode or show based on preference */}
              {!isAdmin && (
                <div className="relative w-full sm:w-80 mt-4 sm:mt-0">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                    <input
                      type="text"
                      value={query}
                      onChange={(e) => {
                        setQuery(e.target.value);
                        setShowSuggestions(true);
                      }}
                      onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                      placeholder="Rechercher un document..."
                      className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition duration-200"
                    />
                  </div>

                  {showSuggestions && filteredSuggestions.length > 0 && (
                    <ul className="absolute w-full mt-2 bg-white text-black rounded-lg shadow-md overflow-hidden z-50 max-h-60 overflow-y-auto">
                      {filteredSuggestions.map((file, i) => (
                        <li
                          key={i}
                          className="px-4 py-3 hover:bg-emerald-100 transition cursor-pointer text-sm"
                          onClick={() => {
                            window.open(file.url, '_blank');
                            setQuery('');
                            setShowSuggestions(false);
                          }}
                        >
                          {file.title}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {/* Contact and Map links - Hide for admin mode */}
              {!isAdmin && (
                <>
                  <Link href="/contact" className="flex items-center hover:text-emerald-300 transition-colors text-sm">
                    <Mail className="w-4 h-4 mr-1" />
                    Contactez-nous
                  </Link>
                  <Link href="/map" className="flex items-center hover:text-emerald-300 transition-colors text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    Plan du site
                  </Link>
                </>
              )}

              {/* Admin mode indicator */}
              {isAdmin && (
                <div className="flex items-center text-sm bg-slate-700 px-3 py-1 rounded-full">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  Mode Administrateur
                </div>
              )}

              {/* Authentication */}
              <div className="flex items-center gap-4">
                <SignedIn>
                  <UserButton 
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        avatarBox: "w-8 h-8"
                      }
                    }}
                  />
                </SignedIn>

                <SignedOut>
                  <SignInButton mode="modal">
                    <button className={`${isAdmin ? 'bg-white text-slate-800' : 'bg-white text-emerald-800'} px-4 py-1 rounded hover:bg-gray-100 transition-colors`}>
                      Sign In
                    </button>
                  </SignInButton>

                  <SignUpButton mode="modal">
                    <button className="bg-transparent border border-white px-4 py-1 rounded hover:bg-white hover:text-emerald-800 transition-colors">
                      Sign Up
                    </button>
                  </SignUpButton>
                </SignedOut>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Changes based on user role */}
      <nav className={`fixed w-full  z-40 sm:top-16 lg:top-18 transition-all duration-300 ${
        scrolled 
          ? `${isAdmin ? 'bg-slate-700' : 'bg-emerald-800'} py-2 shadow-lg` 
          : `${isAdmin ? 'bg-slate-800' : 'bg-emerald-900'}`
      }`}>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4">
              {navLinks.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className={cn(
                      "font-medium flex items-center px-3 py-2 rounded-lg transition-colors",
                      pathname === item.href
                        ? `text-white ${isAdmin ? 'bg-slate-600' : 'bg-emerald-700'}`
                        : `text-white hover:${isAdmin ? 'bg-slate-600/50' : 'bg-emerald-700/50'}`,
                      scrolled ? "text-white" : "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                    )}
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown className="ml-1 w-4 h-4" />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <div className="absolute left-0 mt-1 w-56 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1 transition-all duration-200 z-50">
                      {item.dropdown.map((sub) => (
                        <div key={sub.name} className="relative group/nested">
                          <Link
                            href={sub.href}
                            className={`block px-4 py-3 text-sm ${
                              isAdmin ? 'text-slate-900 hover:bg-slate-50' : 'text-emerald-900 hover:bg-emerald-50'
                            } border-b border-gray-100 last:border-b-0 transition-colors`}
                          >
                            {sub.name}
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                  "p-2 rounded-full transition-colors",
                  scrolled 
                    ? `${isAdmin ? 'bg-slate-600' : 'bg-emerald-700'} text-white` 
                    : "bg-white/20 text-white"
                )}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className={`md:hidden ${isAdmin ? 'bg-slate-700' : 'bg-emerald-800'} pb-4`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-1">
                {navLinks.map((item) => (
                  <div key={item.name} className="pt-2">
                    <div className="flex justify-between items-center">
                      <Link
                        href={item.href}
                        className={cn(
                          "block py-2 px-4 text-base font-medium rounded-md flex-grow transition-colors",
                          pathname.startsWith(item.href)
                            ? `${isAdmin ? 'bg-slate-600' : 'bg-emerald-700'} text-white`
                            : `text-white hover:${isAdmin ? 'bg-slate-600' : 'bg-emerald-700'}`
                        )}
                        onClick={() => {
                          if (!item.dropdown) {
                            setIsOpen(false)
                          }
                        }}
                      >
                        {item.name}
                      </Link>

                      {item.dropdown && (
                        <button
                          className="p-2 mr-2"
                          onClick={() => toggleDropdown(item.name)}
                          aria-expanded={activeDropdown === item.name}
                        >
                          {activeDropdown === item.name ?
                            <ChevronUp className="w-5 h-5 text-white" /> :
                            <ChevronDown className="w-5 h-5 text-white" />
                          }
                        </button>
                      )}
                    </div>

                    {/* Mobile Dropdown */}
                    {item.dropdown && activeDropdown === item.name && (
                      <div className="ml-6 mt-1 space-y-1">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className={cn(
                              "block py-2 px-4 text-sm rounded-md transition-colors",
                              pathname === sub.href
                                ? `${isAdmin ? 'bg-slate-600' : 'bg-emerald-700'} text-white`
                                : `${isAdmin ? 'text-slate-100 hover:bg-slate-600' : 'text-emerald-100 hover:bg-emerald-700'}`
                            )}
                            onClick={() => setIsOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}