import { Metadata } from "next"
import PartenairesPage from "./partenaires/page"
import GCTProjetsPage from "./projets/route"
import GCTPartenariatPage from "./partenariat/route"
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partenariat | GCT",
  description: "Partenariat institutionnel, projets et partenaires du Groupe Chimique Tunisien.",
}

export default function PartenariatHubPage() {

  const Breadcrumb = () => (
    <nav aria-label="breadcrumb" className="text-sm text-gray-500 mb-6 flex items-center">
      <Link href="/" className="hover:text-emerald-600 transition-colors focus:outline-none focus:ring focus:ring-emerald-300">Accueil</Link>
      <span className="mx-2 text-gray-400">&raquo;</span>
      <span className="font-medium text-emerald-700" aria-current="page">Partenariat</span>
    </nav>
  );

  return (
    <div className="bg-emerald-50 py-12">
      <main className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Breadcrumb />

        <section className="mb-16">
          <h2 className="text-3xl font-extrabold text-emerald-800 mb-6">À propos du Partenariat</h2>
          <GCTPartenariatPage />
        </section>

        <section className="mb-16" id="partenaires">
          <h2 className="text-3xl font-extrabold text-emerald-800 mb-6">Nos Partenaires</h2>
          <PartenairesPage />
        </section>

        <section className="mb-16" id="projets">
          <h2 className="text-3xl font-extrabold text-emerald-800 mb-6">Nos Projets</h2>
          <GCTProjetsPage />
        </section>
      </main>
    </div>
  )
}