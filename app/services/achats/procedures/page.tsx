// app/services/achats/procedures/page.tsx

import  client  from '../../../../lib/sanity';


type ManuelAchat = {
  titre: string;
  fichierPdf: {
    url: string;
  };
};

export const metadata = {
  title: 'Manuel des procédures des achats du GCT',
  description: 'Télécharger le manuel des procédures d’achats officiel du Groupe Chimique Tunisien.',
};

export default async function ManuelPage() {
  const data: ManuelAchat = await client.fetch(`*[_type == "manuelAchat"][0]{
    titre,
    "fichierPdf": fichierPdf.asset->{url}
  }`);

  return (
    <main className="max-w-3xl mx-auto px-6 py-10 space-y-6">
      <h1 className="text-2xl font-bold text-blue-900">{data?.titre}</h1>

      {data?.fichierPdf?.url ? (
        <a
          href={data.fichierPdf.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          📥 Télécharger le manuel en PDF
        </a>
      ) : (
        <p className="text-red-600">Fichier PDF non disponible pour le moment.</p>
      )}
    </main>
  );
}
