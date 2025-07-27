// app/about/page.tsx
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos | Groupe Chimique Tunisien",
  description: "Découvrez la Mot du Directeur Général, la vision et l'histoire du Groupe Chimique Tunisien.",
};

export default function AboutIndexPage() {

  const Breadcrumb = () => (
    <nav className="text-sm text-gray-500 mb-6 flex items-center">
    <Link href="/" className="hover:text-blue-600 transition-colors">Accueil</Link>
    <span className="mx-2">&raquo;</span>
    <span className="font-semibold text-blue-700">À propos</span>
  </nav>
    );

  const links = [
    {
      title: "Qui sommes-nous ?",
      description: "Découvrez l'identité et les valeurs du GCT.",
      href: "/about/qui-sommes-nous",
      emoji: "🧑‍🏭",
    },
    {
      title: "Mot du Directeur Général",
      description: "Le mot du DG et sa vision stratégique.",
      href: "/about/dg",
      emoji: "👤",
    },
    {
      title: "Notre vision",
      description: "Nos objectifs pour un avenir durable.",
      href: "/about/vision",
      emoji: "👁️",
    },
    {
      title: "Notre histoire",
      description: "Un parcours riche depuis la création du GCT.",
      href: "/about/histoire",
      emoji: "📜",
    },
  ];

  return (
    <main className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-16">
      <Breadcrumb />
      <h1 className="text-4xl font-extrabold text-green-800 mb-6">À propos du Groupe Chimique Tunisien</h1>
      <p className="text-lg text-gray-600 mb-10">Explorez les aspects clés de notre identité, notre histoire, et nos ambitions.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {links.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            className="flex flex-col justify-between p-6 bg-green-50 rounded-2xl border border-green-200 hover:border-green-600 transition-all duration-200 hover:shadow-xl group"
          >
            <div>
              <div className="text-4xl mb-2">{item.emoji}</div>
              <h2 className="text-xl font-semibold text-green-800 group-hover:underline">
                {item.title}
              </h2>
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
            </div>
            <div className="flex items-center justify-end mt-4 text-green-600 group-hover:translate-x-1 transition-transform">
              <ArrowRightIcon className="w-5 h-5" />
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
