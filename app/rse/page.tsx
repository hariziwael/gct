// app/rse/page.tsx
import { client } from "@/lib/client";
import Link from 'next/link'

type RSEData = {
  title: string;
  introduction: string;
  objectives: string[];
  pillars: string[];
  partners: string[];
  futureProjects: { title: string; description: string }[];
};

export default async function RSEPage() {
  const data: RSEData = await client.fetch(`*[_type == "rse"][0]`);

  return (
    <main className="p-6  bg-emerald-50 mx-auto">
      <h1 className="text-4xl font-bold text-black mb-6">{data.title}</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-black mb-2">Introduction</h2>
        <p className="text-gray-700">{data.introduction}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-black mb-2">Objectifs</h2>
        <ul className="list-disc pl-6 text-gray-700">
          {data.objectives.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

            {/* RSE Sections Navigation */}
<section className="pb-16">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-emerald-900">Explorez Nos Ressources Humaines</h2>
      <p className="text-gray-600 mt-2">Effectif, formation et développement des compétences</p>
    </div>

    <div className="grid gap-8 md:grid-cols-2">
      <Link href="/rse/effectif" className="block bg-white border border-emerald-100 p-6 rounded-xl shadow hover:shadow-md hover:bg-emerald-50 transition">
        <h3 className="text-2xl font-semibold text-emerald-800 mb-2">Effectif</h3>
        <p className="text-gray-600">Consultez la structure des effectifs et la dynamique du personnel au sein du GCT.</p>
      </Link>
      <Link href="/rse/formation" className="block bg-white border border-emerald-100 p-6 rounded-xl shadow hover:shadow-md hover:bg-emerald-50 transition">
        <h3 className="text-2xl font-semibold text-emerald-800 mb-2">Formation</h3>
        <p className="text-gray-600">Découvrez les programmes de formation et d’acquisition de compétences pour les collaborateurs.</p>
      </Link>
    </div>
  </div>
</section>

      <section className="mb-8">
        <h2 className="text-2xl text-black font-semibold mb-2">Axes stratégiques</h2>
        <ul className="list-disc pl-6 text-gray-700">
          {data.pillars.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl text-black font-semibold mb-2">Partenaires</h2>
        <ul className="list-disc pl-6 text-gray-700">
          {data.partners.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-black mb-2">Projets Futurs</h2>
        {data.futureProjects.map((proj, i) => (
          <div key={i} className="mb-4">
            <h3 className="font-bold text-black">{proj.title}</h3>
            <p className="text-gray-700">{proj.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
