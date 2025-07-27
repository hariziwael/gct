// app/management/page.tsx
import Link from 'next/link'
import { Settings, Target, GanttChart } from 'lucide-react'

export const metadata = {
  title: "Management - GCT",
  description: "Découvrez la gouvernance, les objectifs et la stratégie de gestion du Groupe Chimique Tunisien.",
}

export default function ManagementPage() {




  const Breadcrumb = () => (
    <nav className="text-sm text-gray-500 mb-6 flex items-center">
      <Link href="/" className="hover:text-blue-600 transition-colors">Accueil</Link>
      <span className="mx-2">&raquo;</span>
    
    <span className="font-semibold text-blue-700">Management</span>
  </nav>
    );
  return (
    <section className="px-6 py-10 max-w-4xl mx-auto">
      <Breadcrumb />
      <h1 className="text-3xl font-bold mb-4">Management</h1>
      <p className="text-gray-600 mb-8">
        Explorez la structure de gestion du Groupe Chimique Tunisien, y compris la gouvernance, les objectifs et la stratégie de développement.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        <Link
          href="/management/gouvernance"
          className="flex items-center gap-4 p-5 border border-gray-200 rounded-xl hover:shadow-lg hover:border-primary transition"
        >
          <Settings className="text-primary" />
          <div>
            <h2 className="text-xl font-semibold">Gouvernance</h2>
            <p className="text-gray-500 text-sm">Découvrez les mécanismes de gouvernance du GCT.</p>
          </div>
        </Link>

        <Link
          href="/management/objectifs"
          className="flex items-center gap-4 p-5 border border-gray-200 rounded-xl hover:shadow-lg hover:border-primary transition"
        >
          <Target className="text-primary" />
          <div>
            <h2 className="text-xl font-semibold">Objectifs</h2>
            <p className="text-gray-500 text-sm">Nos objectifs stratégiques et opérationnels.</p>
          </div>
        </Link>

        <Link
          href="/management/strategie"
          className="flex items-center gap-4 p-5 border border-gray-200 rounded-xl hover:shadow-lg hover:border-primary transition"
        >
          <GanttChart className="text-primary" />
          <div>
            <h2 className="text-xl font-semibold">Stratégie</h2>
            <p className="text-gray-500 text-sm">Notre plan d’action et stratégie de croissance.</p>
          </div>
        </Link>
      </div>
    </section>
  )
}
