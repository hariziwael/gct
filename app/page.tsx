import client from '@/lib/sanity'
import Image from 'next/image'

interface HeroBanner {
  titre: string
  sousTitre: string
  imageUrl: string
}

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const hero: HeroBanner | null = await client.fetch(`*[_type == "heroBanner"][0]{
    titre,
    sousTitre,
    "imageUrl": image.asset->url
  }`)

  return (
    <main>
      {/* Hero Banner */}
      <section className="bg-gray-100 py-8 px-4 text-center">
        {hero && (
          <>
                      <Image 
              src={hero.imageUrl} 
              alt="Banner" 
              width={1200}
              height={400}
              className="mx-auto w-full max-h-[400px] object-cover rounded-lg mb-4" 
            />
            <h1 className="text-4xl font-bold mb-2">{hero.titre}</h1>
            <p className="text-lg text-gray-700">{hero.sousTitre}</p>
          </>
        )}
      </section>
    </main>
  )
}
