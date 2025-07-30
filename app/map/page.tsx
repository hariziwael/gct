// gct-web-app/app/map/page.tsx
'use client'

export default function MapPage() {
  // Exact embed URL for Groupe Chimique Tunisien with higher zoom level
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.2!2d10.1753!3d36.8189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1255655890000001%3A0x3f705625efc077ca!2sGroupe%20Chimique%20Tunisien!5e1!3m2!1sfr!2stn!4v1753898849352!5m2!1sfr!2stn";
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-3xl p-4">
        <h1 className="text-2xl font-bold mb-6 text-center text-emerald-800">
          Localisation du GCT
        </h1>
        
        <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden border border-gray-300">
          <iframe
            src={embedUrl}
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            className="border-0"
            title="GCT Location Map"
          ></iframe>
        </div>
        
        {/* Link to the actual Google Maps location */}
        <div className="mt-4 text-center">
          <a 
            href="https://maps.app.goo.gl/sXu5L6DgV3UyJdTr9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Ouvrir dans Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}