import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="bg-emerald-900 text-white pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
              <div className=" p-0.2  mr-3">
                <Link href="/" className="block">
                  <img
                    src="/images/logo_gct.png" // <-- Change to your actual image path
                    alt="GCT Logo"
                    className="w-12 h-15  object-cover"
                  />
                </Link>
              </div>
                Groupe Chimique Tunisien
              </h3>
              <p className="text-emerald-200 mb-4">
                Leader dans l'industrie chimique tunisienne, spécialisé dans la production et 
                la commercialisation de produits phosphatés.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/GroupeChimiqueTunisienGCT" className="text-emerald-200 hover:text-white transition-colors" target="_blank">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
  href="https://tn.linkedin.com/company/groupe-chimique-tunisien"
  className="text-emerald-200 hover:text-white transition-colors"
  target="_blank"
  rel="noopener noreferrer"
>
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 
      0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-.97 
      0-1.75-.78-1.75-1.75s.78-1.75 
      1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 
      1.75zm13.5 11.3h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 
      0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 
      1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 
      4.59v5.59z" />
  </svg>
</a>

                
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
              <ul className="space-y-2">
                <li><Link href="/#produits" className="text-emerald-200 hover:text-white transition-colors">Nos Produits</Link></li>
                <li><Link href="/about/histoire" className="text-emerald-200 hover:text-white transition-colors">Histoire du GCT</Link></li>
                <li><Link href="/partenariat/#partenaires" className="text-emerald-200 hover:text-white transition-colors">Nos Partenaires</Link></li>
                <li><Link href="/partenariat/#projets" className="text-emerald-200 hover:text-white transition-colors">Nos Projets</Link></li>
                <li><Link href="/bateaux" className="text-emerald-200 hover:text-white transition-colors">Suivi des Bateaux</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Nos Sites, Effictif et Formation</h3>
              <ul className="space-y-2">
                <li><Link href="/chaine/sites" className="text-emerald-200 hover:text-white transition-colors">Sites miniers de Phosphate</Link></li>
                <li><Link href="/chaine/usines" className="text-emerald-200 hover:text-white transition-colors">Usines du GCT</Link></li>
                <li><Link href="/rse/effectif" className="text-emerald-200 hover:text-white transition-colors">Effectif</Link></li>
                <li><Link href="/rse/formation" className="text-emerald-200 hover:text-white transition-colors">Formation</Link></li>
                <li><Link href="https://maps.app.goo.gl/RtX3MsP8dCPBNio59" target="_blanc" className="text-emerald-200 hover:text-white transition-colors">Siège Social, Tunis</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-2 mt-0.5 text-emerald-300" />
                  <span>Rue Hédi Nouira, 1080 Tunis, Tunisie</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-emerald-300" />
                  <span>+216 71 783 822</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-emerald-300" />
                  <span>contact@gct.tn</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-emerald-800 mt-8 pt-6 text-center text-emerald-300 text-sm">
            <p>&copy; {new Date().getFullYear()} Groupe Chimique Tunisien. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </>
  );
}