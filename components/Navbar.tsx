"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X, MapPin, Mail, ChevronDown, ChevronUp } from "lucide-react";
import { Search } from "lucide-react";
import Image from "next/image";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
// Au début du fichier, après les autres imports
import { useSiteSettings } from "@/hooks/useSiteSettings";
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
    title:
      "📋 Politique d'accès à l'information - GCT | سياسة النفاذ إلى المعلومة بالمجمع الكيميائي",
    url: "/pdf/politique-acces-information-gct.pdf",
  },
  {
    title:
      "📄 Formulaire de demande d'accès à l'information | مطلب النفاذ إلى المعلومة",
    url: "/pdf/demande-acces-information.pdf",
  },
  {
    title:
      "📑 Formulaire de recours en cas de refus | مطلب طعن لدى الهيكل العمومي",
    url: "/pdf/demande-recours-organisme.pdf",
  },
  {
    title:
      "📘 Loi n°2016-22 du 24 mars 2016 (FR) - Accès à l'information | القانون الأساسي عدد 22 لسنة 2016 (فرنسية)",
    url: "/pdf/loi-organique-2016-22-fr.pdf",
  },
  {
    title:
      "📙 القانون الأساسي عدد 22 لسنة 2016 (AR) - النفاذ إلى المعلومة | Loi organique n°2016-22 (arabe)",
    url: "/pdf/loi-organique-2016-22-ar.pdf",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  // Don't show navbar on admin routes
  const isAdminRoute = pathname.startsWith("/admin");
  const { settings, isLoading } = useSiteSettings();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const filteredSuggestions =
    query.length > 0
      ? pdfFiles.filter((file) =>
          file.title.toLowerCase().includes(query.toLowerCase())
        )
      : [];

  // Hide navbar completely for admin routes
  if (isAdminRoute) {
    return null;
  }

  return (
    <>
      {/* Top Navigation Bar */}
      <div
        className={`bg-emerald-900 text-white fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "py-2 shadow-md" : "py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-2 md:mb-0">
              <div className="p-0.5 mr-3">
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
                  {isLoading ? "Groupe Chimique Tunisien" : settings.siteTitle}
                </span>
                <p className="text-xs text-gray-200">
                  Leader dans l&apos;industrie du phosphate
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {/* Search */}
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
                    onBlur={() =>
                      setTimeout(() => setShowSuggestions(false), 200)
                    }
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
                          window.open(file.url, "_blank");
                          setQuery("");
                          setShowSuggestions(false);
                        }}
                      >
                        {file.title}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <a
                href={`mailto:${settings.contactEmail}`}
                className="flex items-center hover:text-emerald-300 transition-colors text-sm"
              >
                <Mail className="w-4 h-4 mr-1" />
                {settings.contactEmail}
              </a>
              <Link
                href="/map"
                className="flex items-center hover:text-emerald-300 transition-colors text-sm"
              >
                <MapPin className="w-4 h-4 mr-1" />
                Plan du site
              </Link>

              {/* Authentication */}
              <div className="flex items-center gap-4">
                <SignedIn>
                  <UserButton
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        avatarBox: "w-8 h-8",
                      },
                    }}
                  />
                </SignedIn>

                <SignedOut>
                  <SignInButton mode="modal">
                    <button className="bg-white text-emerald-800 px-4 py-1 rounded hover:bg-gray-100 transition-colors">
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

      {/* Main Navigation Bar */}
      <nav
        className={`fixed w-full mt-1 z-40 sm:top-16 lg:top-18 transition-all duration-300 ${
          scrolled ? "bg-emerald-800 py-2 shadow-lg" : "bg-emerald-900"
        }`}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4">
              {publicNavLinks.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    prefetch={true}
                    className={cn(
                      "font-medium flex items-center px-3 py-2 rounded-lg transition-colors",
                      pathname === item.href
                        ? "text-white bg-emerald-700"
                        : "text-white hover:bg-emerald-700/50",
                      scrolled
                        ? "text-white"
                        : "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                    )}
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown className="ml-1 w-4 h-4" />}
                  </Link>

                  {item.dropdown && (
                    <div className="absolute left-0 mt-1 w-56 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1 transition-all duration-200 z-50">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          prefetch={true}
                          className="block px-4 py-3 text-sm text-emerald-900 hover:bg-emerald-50 border-b border-gray-100 last:border-b-0 transition-colors"
                        >
                          {sub.name}
                        </Link>
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
                    ? "bg-emerald-700 text-white"
                    : "bg-white/20 text-white"
                )}
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-emerald-800 pb-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-1">
                {publicNavLinks.map((item) => (
                  <div key={item.name} className="pt-2">
                    <div className="flex justify-between items-center">
                      <Link
                        href={item.href}
                        className={cn(
                          "block py-2 px-4 text-base font-medium rounded-md flex-grow transition-colors",
                          pathname.startsWith(item.href)
                            ? "bg-emerald-700 text-white"
                            : "text-white hover:bg-emerald-700"
                        )}
                        onClick={() => !item.dropdown && setIsOpen(false)}
                      >
                        {item.name}
                      </Link>

                      {item.dropdown && (
                        <button
                          className="p-2 mr-2"
                          onClick={() => toggleDropdown(item.name)}
                        >
                          {activeDropdown === item.name ? (
                            <ChevronUp className="w-5 h-5 text-white" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-white" />
                          )}
                        </button>
                      )}
                    </div>

                    {item.dropdown && activeDropdown === item.name && (
                      <div className="ml-6 mt-1 space-y-1">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className={cn(
                              "block py-2 px-4 text-sm rounded-md transition-colors",
                              pathname === sub.href
                                ? "bg-emerald-700 text-white"
                                : "text-emerald-100 hover:bg-emerald-700"
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
  );
}
