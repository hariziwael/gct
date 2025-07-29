"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import { Menu, X, MapPin, Mail, Phone, ChevronDown, ChevronRight, ChevronUp } from "lucide-react"

const navLinks = [
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
  { name: "Partenariat", href: "/partenariat" },
  {
    name: "Management",
    href: "/management",
    
  },
  {
    name: "Chaine de Valeur",
    href: "/chaine",
    // dropdown: [
    //   { name: "Sites Miniers de Phosphate", href: "/chaine/sites" },
    //   { name: "Dépots de Phosphate en Tunisie", href: "/chaine/depots" },
    //   { name: "Usines du GCT", href: "/chaine/usines" },
    //   { name: "Production du GCT", href: "/chaine/production" },
    // ],
  },
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
      {
        name: "Achats",
        href: "/services/achats",
        // subitems: [
        //   { name: "Manuel des procédures", href: "/services/achats/procedures" },
        //   { name: "Commission Recours/Intégrité", href: "/services/achats/recours" },
        //   { name: "Appel Fournisseurs", href: "/services/achats/fournisseurs" },
        //   { name: "Appel Armateurs", href: "/services/achats/armateurs" },
        // ],
      },
      { name: "Appels", href: "/services/appels" },
    ],
  },
  { name: "Qualité", href: "/qualite" },
  { name: "Siape", href: "/recherche/siape" },
  { name: "RSE", href: "/rse" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeNested, setActiveNested] = useState<string | null>(null)

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

  const toggleNested = (name: string) => {
    setActiveNested(activeNested === name ? null : name)
  }

  return (
    <>
      {/* Top Navigation Bar */}
      <div className={`bg-emerald-900 text-white fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-3'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-2 md:mb-0">
              <div className=" p-0.2  mr-3">
                <Link href="/" className="block">
                  <img
                    src="/images/logo_gct.png" // <-- Change to your actual image path
                    alt="GCT Logo"
                    className="w-10 h-15  object-cover"
                  />
                </Link>
              </div>
              <div>
                <span className="font-bold text-lg md:text-xl">Groupe Chimique Tunisien</span>
                <p className="text-xs text-emerald-200">Leader dans l'industrie du phosphate</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link href="/contact" className="flex items-center hover:text-emerald-300 transition-colors text-sm">
                <Mail className="w-4 h-4 mr-1" />
                Contactez-nous
              </Link>
              <Link href="/map" className="flex items-center hover:text-emerald-300 transition-colors text-sm">
                <MapPin className="w-4 h-4 mr-1" />
                Plan du site
              </Link>
              <div className="flex items-center text-sm">
                <Phone className="w-4 h-4 mr-1" />
                +216 71 100 100
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Transparent */}
      <nav className={`fixed w-full  z-40  sm:top-16 lg:top-18 transition-all duration-300 ${scrolled ? 'bg-emerald-800    py-2 shadow-lg' : 'bg-transparent py-3'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="hidden md:flex space-x-4">
              {navLinks.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className={cn(
                      "font-medium flex items-center px-3 py-2 rounded-lg transition-colors",
                      pathname.startsWith(item.href)
                        ? "text-white bg-emerald-700"
                        : "text-white hover:bg-emerald-700/50",
                      scrolled ? "text-white" : "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                    )}
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown className="ml-1 w-4 h-4" />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.dropdown && (
                    <div className="absolute left-0 mt-1 w-56 bg-white border border-emerald-200 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1 transition-all duration-200 z-50">
                      {item.dropdown.map((sub) => (
                        <div key={sub.name} className="relative group/nested">
                          <Link
                            href={sub.href}
                            className="block px-4 py-3 text-sm text-emerald-900 hover:bg-emerald-50 border-b border-emerald-100 flex justify-between items-center"
                          >
                            {sub.name}
                            {"subitems" in sub && Array.isArray(sub.subitems) && (
                              <ChevronRight className="w-4 h-4" />
                            )}
                          </Link>

                          {/* Nested dropdown */}
                          {"subitems" in sub && Array.isArray(sub.subitems) && (
                            <div className="absolute left-full top-0 ml-1 w-56 bg-white border border-emerald-200 rounded-lg shadow-xl opacity-0 group-hover/nested:opacity-100 transition-opacity duration-200 z-50">
                              {sub.subitems.map((s) => (
                                <Link
                                  key={s.name}
                                  href={s.href}
                                  className="block px-4 py-3 text-sm text-emerald-900 hover:bg-emerald-50"
                                >
                                  {s.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                  "p-2 rounded-full transition-colors",
                  scrolled ? "bg-emerald-700 text-white" : "bg-white/20 text-white"
                )}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown */}
        {isOpen && (
          <div className="md:hidden bg-emerald-800 pb-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-1">
                {navLinks.map((item) => (
                  <div key={item.name} className="pt-2">
                    <div className="flex justify-between items-center">
                      <Link
                        href={item.href}
                        className={cn(
                          "block py-2 px-4 text-base font-medium rounded-md flex-grow",
                          pathname.startsWith(item.href)
                            ? "bg-emerald-700 text-white"
                            : "text-white hover:bg-emerald-700"
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

                    {item.dropdown && activeDropdown === item.name && (
                      <div className="ml-6 mt-1 space-y-1">
                        {item.dropdown.map((sub) => (
                          <div key={sub.name} className="relative">
                            <div className="flex justify-between items-center">
                              <Link
                                href={sub.href}
                                className={cn(
                                  "block py-2 px-4 text-sm rounded-md flex-grow",
                                  pathname === sub.href
                                    ? "bg-emerald-700 text-white"
                                    : "text-emerald-100 hover:bg-emerald-700"
                                )}
                                onClick={() => {
                                  if (!("subitems" in sub)) {
                                    setIsOpen(false)
                                  }
                                }}
                              >
                                {sub.name}
                              </Link>

                              {"subitems" in sub && Array.isArray(sub.subitems) && (
                                <button
                                  className="p-2 mr-2"
                                  onClick={() => toggleNested(`${item.name}-${sub.name}`)}
                                  aria-expanded={activeNested === `${item.name}-${sub.name}`}
                                >
                                  {activeNested === `${item.name}-${sub.name}` ?
                                    <ChevronUp className="w-4 h-4 text-emerald-100" /> :
                                    <ChevronDown className="w-4 h-4 text-emerald-100" />
                                  }
                                </button>
                              )}
                            </div>

                            {"subitems" in sub && Array.isArray(sub.subitems) && activeNested === `${item.name}-${sub.name}` && (
                              <div className="ml-4 space-y-1">
                                {sub.subitems.map((s) => (
                                  <Link
                                    key={s.name}
                                    href={s.href}
                                    className={cn(
                                      "block py-2 px-4 text-xs rounded-md",
                                      pathname === s.href
                                        ? "bg-emerald-700 text-white"
                                        : "text-emerald-100 hover:bg-emerald-700"
                                    )}
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {s.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
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