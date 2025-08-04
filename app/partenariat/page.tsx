import { Metadata } from "next"
import PartenairesPage from "./partenaires/page"
import GCTProjetsPage from "./projets/page"
import GCTPartenariatPage from "./partenariat/page"
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
    <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-12">
      <main className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Breadcrumb />

        <section className="mb-8">
          
          <GCTPartenariatPage />
        </section>

        <section className="mb-8" id="partenaires">
          
          <PartenairesPage />
        </section>

        <section className="mb-8" id="projets">
          
          <GCTProjetsPage />
        </section>
      </main>
    </div>
  )
}