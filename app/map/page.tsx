// gct-web-app/app/map/page.tsx
'use client'

const gctAddress = encodeURIComponent("Rue Hédi Nouira, 2035 Tunis-Carthage, Tunisie");

export default function MapPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-3xl p-4">
        <h1 className="text-2xl font-bold mb-6 text-center text-emerald-800">Localisation du GCT</h1>
<div className="aspect-video bg-gray-100 rounded-lg overflow-hidden border border-gray-300">
                  <iframe 
                    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${gctAddress}`}
                    width="100%"
                    height="100%"
                    loading="lazy"
                    allowFullScreen
                    className="border-0"
                  ></iframe>
                </div>
      </div>
    </div>
  );
}