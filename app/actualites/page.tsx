import client from '@/lib/sanity'
import Image from 'next/image'
import { FaCalendarAlt, FaArrowRight, FaNewspaper, FaUsers, FaChartLine } from 'react-icons/fa'
import NewsletterSubscription from '@/components/NewsletterSubscription'
import React from 'react'
import  ActualiteCard  from "@/components/ActualiteCard";

interface Actualite {
  _id: string
  titre: string
  contenu: string
  publishedAt: string
  imageUrl: string
  
}

export const dynamic = 'force-dynamic'
export const metadata = {
  title: "Actualités - GCT",
  description: "Consultez les dernières actualités et événements de Groupe Chimique Tunisien.",
}

export default async function ActualitesPage() {
  const actualites: Actualite[] = await client.fetch(`*[_type == "actualite"] | order(_createdAt desc)[0...6]{
    _id,
    titre,
    contenu,
    publishedAt,
    
    "imageUrl": image.asset->url
  }`)



  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      

      {/* Featured News */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-emerald-900 mb-8 pb-2 border-b border-emerald-200 flex items-center">
          <FaNewspaper className="mr-3 text-emerald-600" />
          Actualités en Vedette
        </h2>

        <div className="grid grid-cols-1 gap-10">
        {actualites.slice(0, 2).map((a) => (
        <ActualiteCard key={a._id} a={a} />
        ))}

        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="bg-gradient-to-r from-emerald-700 to-emerald-800 rounded-2xl p-8 md:p-12 text-white mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-2xl font-bold mb-4">Restez informé</h2>
              <p className="text-emerald-100">
                Abonnez-vous à notre newsletter pour recevoir les dernières actualités, événements et informations importantes directement dans votre boîte de réception.
              </p>
            </div>
            <div className="md:w-1/2 w-full">
              <NewsletterSubscription />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
