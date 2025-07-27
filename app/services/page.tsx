import Link from 'next/link';

export default function ServicesPage() {

    const Breadcrumb = () => (
        <nav className="text-sm text-gray-500 mb-6 flex items-center">
        <Link href="/" className="hover:text-blue-600 transition-colors">Accueil</Link>
        <span className="mx-2">&raquo;</span>
        
        
        <span className="font-semibold text-blue-700">Sevices</span>
      </nav>
        );

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4">
        <Breadcrumb />
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">Nos Services</h1>
        <p className="text-gray-700 mb-12 text-lg">
          Le Groupe Chimique Tunisien met à disposition plusieurs services essentiels pour ses partenaires, fournisseurs et le public.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
          {/* Achats */}
          <Link href="/services/achats" className="block border border-blue-200 rounded-xl p-6 shadow hover:shadow-md hover:bg-blue-50 transition">
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">Achats</h2>
            <p className="text-gray-600">
              Accédez aux informations sur les procédures d’achat, les fournisseurs, les recours et plus.
            </p>
          </Link>

          {/* Appels */}
          <Link href="/services/appels" className="block border border-blue-200 rounded-xl p-6 shadow hover:shadow-md hover:bg-blue-50 transition">
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">Appels d’Offres</h2>
            <p className="text-gray-600">
              Retrouvez ici tous les appels d’offres en cours et les modalités de participation.
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
