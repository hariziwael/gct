"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X, MapPin, Mail, ChevronDown, ChevronUp, Search } from "lucide-react";
import Image from "next/image";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { useSiteSettings } from "@/hooks/useSiteSettings";

// --- Configuration ---
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
  { name: "Partenariat", href: "/partenariat" },
  { name: "Management", href: "/management" },
  { name: "Chaine de Valeur", href: "/chaine" },
  { name: "Qualité", href: "/qualite" },
  { name: "Siape", href: "/recherche/siape" },
  { name: "RSE", href: "/rse" },
  {
    name: "Environnement",
    href: "#",
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
];

const pdfFiles = [
  {
    title: "📋 Politique d'accès à l'information - GCT",
    url: "/pdf/politique-acces-information-gct.pdf",
  },
  {
    title: "📄 Formulaire de demande d'accès à l'information",
    url: "/pdf/demande-acces-information.pdf",
  },
  {
    title: "📑 Formulaire de recours en cas de refus",
    url: "/pdf/demande-recours-organisme.pdf",
  },
  {
    title: "📘 Loi n°2016-22 (FR) - Accès à l'information",
    url: "/pdf/loi-organique-2016-22-fr.pdf",
  },
  {
    title: "📙 Loi organique n°2016-22 (AR) - النفاذ إلى المعلومة",
    url: "/pdf/loi-organique-2016-22-ar.pdf",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");
  const { settings, isLoading } = useSiteSettings();
  
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  // Search State
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Scroll Listener
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setQuery("");
  }, [pathname]);

  // Lock Body Scroll
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const filteredSuggestions = query.length > 0
    ? pdfFiles.filter((file) => file.title.toLowerCase().includes(query.toLowerCase()))
    : [];

  // Helper for opening PDFs
  const handleSuggestionClick = (url: string) => {
    window.open(url, "_blank");
    setQuery("");
    setShowSuggestions(false);
    setIsOpen(false);
  };

  if (isAdminRoute) return null;

  // --- Render Components Helpers ---

  // 1. Search Component (Reused in Desktop Header and Mobile Menu)
  const SearchBar = ({ isMobile = false }) => (
    <div className={`relative ${isMobile ? "w-full" : "w-64 lg:w-80"}`}>
      <div className="relative">
        <Search className={`absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 ${isMobile ? "w-5 h-5" : "w-4 h-4"}`} />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowSuggestions(true);
          }}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          placeholder="Rechercher..."
          className={`w-full pl-10 pr-4 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-200 ${
            isMobile ? "py-3 text-base" : "py-1.5 text-sm"
          }`}
        />
      </div>
      {showSuggestions && filteredSuggestions.length > 0 && (
        <ul className="absolute w-full mt-1 bg-white text-black rounded-lg shadow-xl overflow-hidden z-[60] max-h-60 overflow-y-auto border border-gray-200">
          {filteredSuggestions.map((file, i) => (
            <li
              key={i}
              className="px-4 py-3 hover:bg-emerald-100 transition cursor-pointer text-sm border-b border-gray-100 last:border-b-0"
              onClick={() => handleSuggestionClick(file.url)}
            >
              {file.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  // 2. Auth Buttons
  const AuthButtons = ({ isMobile = false }) => (
    <div className={`flex items-center gap-3 ${isMobile ? "w-full justify-center mt-4" : ""}`}>
      <SignedIn>
        <UserButton afterSignOutUrl="/" appearance={{ elements: { avatarBox: "w-8 h-8" } }} />
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <button className={`bg-white text-emerald-800 rounded hover:bg-gray-100 transition-colors font-medium ${isMobile ? "flex-1 py-3" : "px-3 py-1 text-xs lg:text-sm"}`}>
            Connexion
          </button>
        </SignInButton>
        <SignUpButton mode="modal">
          <button className={`border border-white text-white rounded hover:bg-white hover:text-emerald-800 transition-colors font-medium ${isMobile ? "flex-1 py-3" : "px-3 py-1 text-xs lg:text-sm"}`}>
            Inscription
          </button>
        </SignUpButton>
      </SignedOut>
    </div>
  );

  return (
    <>
      {/* --- Top Navigation Bar (Logo, Contact, Search - Desktop) --- */}
      <div
        className={`bg-emerald-900 text-white fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "h-16 shadow-md" : "h-20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            
            {/* 1. Left: Logo & Title */}
            <div className="flex items-center gap-3 overflow-hidden">
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/images/logo_gct.png"
                  alt="GCT Logo"
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                  width={48}
                  height={48}
                  priority
                />
              </Link>
              <div className="flex flex-col justify-center min-w-0">
                <span className="font-bold text-sm sm:text-lg lg:text-xl truncate leading-tight">
                  {isLoading ? "Groupe Chimique Tunisien" : settings?.siteTitle || "GCT"}
                </span>
                <span className="text-[10px] sm:text-xs text-emerald-200 hidden sm:block">
                  Leader dans l&apos;industrie du phosphate
                </span>
              </div>
            </div>

            {/* 2. Right: Actions (Hidden on Mobile, Visible on LG+) */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6">
              {/* Search */}
              <SearchBar />

              {/* Contact Links */}
              <div className="flex flex-col items-end gap-1 text-xs xl:text-sm text-emerald-100">
                <a href={`mailto:${settings?.contactEmail}`} className="flex items-center hover:text-white transition-colors">
                  <Mail className="w-3.5 h-3.5 mr-1.5" />
                  {settings?.contactEmail || "contact@gct.com.tn"}
                </a>
                <Link href="/map" className="flex items-center hover:text-white transition-colors">
                  <MapPin className="w-3.5 h-3.5 mr-1.5" />
                  Plan du site
                </Link>
              </div>

              {/* Auth */}
              <AuthButtons />
            </div>

            {/* 3. Mobile Hamburger Trigger (Visible < LG) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white hover:bg-emerald-800 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* --- Main Navigation Bar (Links - Desktop Only) --- */}
      <nav
        className={`hidden lg:block fixed w-full z-40 transition-all duration-300 bg-emerald-800 ${
          scrolled ? "top-16 shadow-lg py-0" : "top-20 py-1"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center h-12 xl:h-14 gap-1">
            {publicNavLinks.map((item) => (
              <div key={item.name} className="relative group h-full flex items-center">
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 rounded-md text-sm xl:text-base font-medium transition-colors whitespace-nowrap",
                    pathname === item.href
                      ? "bg-emerald-900/50 text-white shadow-sm"
                      : "text-emerald-50 hover:bg-emerald-700/50 hover:text-white"
                  )}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="ml-1.5 w-4 h-4 opacity-70" />}
                </Link>

                {/* Desktop Dropdown */}
                {item.dropdown && (
                  <div className="absolute left-0 top-full pt-1 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden py-1">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors border-l-4 border-transparent hover:border-emerald-600"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* --- Mobile Menu Overlay (Visible < LG) --- */}
      {/* Backdrop */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/60 z-[60] lg:hidden transition-opacity duration-300",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div 
        className={cn(
          "fixed inset-y-0 right-0 w-[85%] sm:w-[380px] bg-emerald-900 z-[70] lg:hidden shadow-2xl transform transition-transform duration-300 ease-out overflow-y-auto",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-5 flex flex-col min-h-full">
          {/* Header of Drawer */}
          <div className="flex justify-between items-center mb-6 border-b border-emerald-800 pb-4">
            <span className="font-bold text-lg text-white">Menu</span>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 bg-emerald-800 rounded-full text-white hover:bg-emerald-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Search */}
          <div className="mb-6">
            <SearchBar isMobile={true} />
          </div>

          {/* Links List */}
          <div className="flex-1 space-y-1">
            {publicNavLinks.map((item) => (
              <div key={item.name} className="overflow-hidden">
                {item.dropdown ? (
                  // Dropdown Parent
                  <div className="rounded-lg bg-emerald-800/30 mb-2">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={cn(
                        "w-full flex items-center justify-between px-4 py-3.5 text-left text-white font-semibold transition-colors rounded-lg",
                        activeDropdown === item.name ? "bg-emerald-800" : "hover:bg-emerald-800/50"
                      )}
                    >
                      {item.name}
                      {activeDropdown === item.name ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                    
                    {/* Accordion Body */}
                    <div 
                      className={cn(
                        "transition-all duration-300 ease-in-out overflow-hidden bg-emerald-950/30",
                        activeDropdown === item.name ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      )}
                    >
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="block py-3 pl-8 pr-4 text-sm text-emerald-100 hover:text-white hover:bg-emerald-800/50 border-l-2 border-emerald-700/0 hover:border-emerald-500"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  // Simple Link
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-4 py-3.5 mb-2 rounded-lg text-white font-semibold transition-colors",
                      pathname === item.href ? "bg-emerald-700" : "hover:bg-emerald-800/50 bg-emerald-800/30"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Footer Area */}
          <div className="mt-8 pt-6 border-t border-emerald-800 space-y-4">
            <AuthButtons isMobile={true} />
            
            <div className="space-y-3 text-emerald-200 text-sm">
              <a href={`mailto:${settings?.contactEmail}`} className="flex items-center p-2 rounded hover:bg-emerald-800 transition-colors">
                <Mail className="w-5 h-5 mr-3" />
                {settings?.contactEmail || "contact@gct.com.tn"}
              </a>
              <Link href="/map" onClick={() => setIsOpen(false)} className="flex items-center p-2 rounded hover:bg-emerald-800 transition-colors">
                <MapPin className="w-5 h-5 mr-3" />
                Plan du site
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}