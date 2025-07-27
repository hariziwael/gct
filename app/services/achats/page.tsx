import Link from 'next/link';

export default function AchatsPage() {
    const Breadcrumb = () => (
    <nav className="text-sm text-gray-500 mb-6 flex items-center">
    <Link href="/" className="hover:text-blue-600 transition-colors">Accueil</Link>
    <span className="mx-2">&raquo;</span>
    
    <Link href="/services" className="hover:text-blue-600 transition-colors">
    Services</Link>
    <span className="mx-2">&raquo;</span>
    <span className="font-semibold text-blue-700">Achats</span>
  </nav>
    );

  return (
    <main className="min-h-screen bg-white py-16 px-4">
        <Breadcrumb />
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">Services d’Achats</h1>
        <p className="text-gray-700 mb-12 text-lg">
          Cette section regroupe toutes les informations liées aux achats du GCT : fournisseurs, procédures, recours, et plus encore.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
          {/* Armateurs */}
          <Link href="/services/achats/armateurs" className="block border border-gray-200 rounded-xl p-6 shadow hover:shadow-md hover:bg-gray-50 transition">
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">Armateurs</h2>
            <p className="text-gray-600">
              Informations sur les compagnies maritimes partenaires du GCT.
            </p>
          </Link>

          {/* Fournisseurs */}
          <Link href="/services/achats/fournisseurs" className="block border border-gray-200 rounded-xl p-6 shadow hover:shadow-md hover:bg-gray-50 transition">
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">Fournisseurs</h2>
            <p className="text-gray-600">
              Liste des fournisseurs agréés et modalités d’inscription.
            </p>
          </Link>

          {/* Procédures */}
          <Link href="/services/achats/procedures" className="block border border-gray-200 rounded-xl p-6 shadow hover:shadow-md hover:bg-gray-50 transition">
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">Procédures</h2>
            <p className="text-gray-600">
              Détails sur les étapes et conditions de passation des marchés.
            </p>
          </Link>

          {/* Recours */}
          <Link href="/services/achats/recours" className="block border border-gray-200 rounded-xl p-6 shadow hover:shadow-md hover:bg-gray-50 transition">
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">Recours</h2>
            <p className="text-gray-600">
              Informations sur les recours possibles en cas de litige.
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
