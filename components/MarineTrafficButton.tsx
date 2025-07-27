'use client'

export default function MarineTrafficButton() {
  return (
      <button onClick={() => window.open('https://www.marinetraffic.com/fr/ais/home/centerx:-12.0/centery:25.0/zoom:4', '_blank')} className="mt-8 inline-flex items-center px-6 py-3 bg-cyan-500 text-white font-medium rounded-lg shadow-md hover:bg-cyan-400 transition-colors">
      Accéder au système complet
      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />  
      </svg>
    </button>
  )
}