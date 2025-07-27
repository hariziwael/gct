import { Metadata } from "next"
import PartenairesPage from "./partenaires/page"
import GCTProjetsPage from "./projets/page"
import GCTPartenariatPage from "./partenariat/page"

export const metadata: Metadata = {
  title: "Partenariat | GCT",
  description: "Partenariat institutionnel, projets et partenaires du Groupe Chimique Tunisien.",
}

export default function PartenariatHubPage() {
  return (
    <main className="space-y-16 px-6 py-12 max-w-7xl mx-auto">

      <section>
        <h2 className="text-3xl font-bold mb-6">À propos du Partenariat</h2>
        <GCTPartenariatPage />
      </section>


      <section>
        <h1 className="text-3xl font-bold mb-6">Nos Partenaires</h1>
        <PartenairesPage />
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Nos Projets</h2>
        <GCTProjetsPage />
      </section>

      
    </main>
  )
}
