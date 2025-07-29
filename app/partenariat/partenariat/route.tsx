import Link from 'next/link';

export default function GCTPartenariatPage() {
  // --- Breadcrumb Component ---


  return (
    <div className="bg-emerald-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        

        <section className="bg-white shadow-xl rounded-2xl p-6 md:p-8 lg:p-12 mb-12">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-emerald-800 text-center mb-6 lg:mb-8">
            Partenariat
          </h1>

          <div className="space-y-6 text-center bg-emerald-50 p-6 rounded-xl shadow-sm border border-emerald-200">
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
              Le GCT privilégie des partenariats fondés sur la complémentarité, la transparence et la durabilité.
              Notre objectif est de créer de la valeur ajoutée avec des partenaires partageant notre vision stratégique.
            </p>
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
              Que ce soit dans le domaine industriel, environnemental ou de la recherche,
              nous sommes ouverts à toute collaboration porteuse d’innovation et de croissance mutuelle.
            </p>
            <Link href="/partenariat/#partenaires" className="inline-block mt-6 px-6 py-3 bg-emerald-600 text-white font-medium rounded-md shadow-md hover:bg-emerald-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50">
              Découvrir nos partenaires
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}