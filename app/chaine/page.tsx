
  import Link from "next/link"
  import { Metadata } from "next"
  
  export const metadata: Metadata = {
    title: "Chaîne de valeur | GCT",
    description: "Présentation de la chaîne de valeur du Groupe Chimique Tunisien, incluant les sites, dépôts, production et usines.",
  }
  
  export default function ChainePage() {

      // --- Breadcrumb Component ---
  const Breadcrumb = () => (
    <nav className="text-sm text-gray-500 mb-6 flex items-center">
      <Link href="/" className="hover:text-blue-600 transition-colors">Accueil</Link>
      <span className="mx-2">&raquo;</span>
      <span className="font-semibold text-blue-700">Chaîne de Valeur</span>
    </nav>
  );

    return (
      <main className="space-y-16 px-6 py-12 max-w-7xl mx-auto">
        <Breadcrumb />
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-blue-800">Chaîne de valeur</h1>
          <p className="text-lg text-gray-700">
            Découvrez comment les matières premières circulent à travers les différentes étapes de transformation :
            de nos dépôts vers les usines, jusqu’aux produits finis.
          </p>
        </section>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/chaine/sites" className="block rounded-xl shadow-md p-6 bg-white hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-700">Sites</h3>
            <p className="text-gray-600">Découvrez nos implantations industrielles principales.</p>
          </Link>
  
          <Link href="/chaine/depots" className="block rounded-xl shadow-md p-6 bg-white hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-700">Dépôts</h3>
            <p className="text-gray-600">Visualisez les centres de stockage des matières premières.</p>
          </Link>
  
          <Link href="/chaine/usines" className="block rounded-xl shadow-md p-6 bg-white hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-700">Usines</h3>
            <p className="text-gray-600">Accédez à nos unités de production chimique.</p>
          </Link>
  
          <Link href="/chaine/production" className="block rounded-xl shadow-md p-6 bg-white hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-700">Production</h3>
            <p className="text-gray-600">Consultez le processus de transformation des produits.</p>
          </Link>
        </div>
      </main>
    )
  }
  