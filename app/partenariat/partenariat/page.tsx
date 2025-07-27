// app/about/partenariat/page.tsx

import Link from 'next/link';

export default function GCTPartenariatPage() {
  // --- Breadcrumb Component ---
  const Breadcrumb = () => (
    <nav className="text-sm text-gray-500 mb-6 flex items-center">
      <Link href="/" className="hover:text-blue-600 transition-colors">Accueil</Link>
      
      <span className="mx-2">&raquo;</span>
      <span className="font-semibold text-blue-700">Partenariat</span>
    </nav>
  );

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 bg-gray-50">
      <Breadcrumb />

      <section className="bg-white shadow-lg rounded-xl p-6 md:p-10 mb-12">
        <h1 className="text-4xl font-extrabold text-blue-800 text-center mb-8">
          Partenariat
        </h1>

        <div className="space-y-6 text-center bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200">
          <p className="text-lg text-gray-700 leading-relaxed">
            Le GCT privilégie des partenariats fondés sur la complémentarité, la transparence et la durabilité.
            Notre objectif est de créer de la valeur ajoutée avec des partenaires partageant notre vision stratégique.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Que ce soit dans le domaine industriel, environnemental ou de la recherche,
            nous sommes ouverts à toute collaboration porteuse d’innovation et de croissance mutuelle.
          </p>
        </div>
      </section>

      
    </div>
  );
}