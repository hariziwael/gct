import Link from "next/link"
export default function Navbar() {
    return (
        <nav className="bg-blue-700 text-white px-6 py-4 flex justify-between items-center shadow-md">
            <h1 className="text-xl font-bold">GCT</h1>
            <ul className="flex gap-6 text-sm">
                <li><Link href="/">Accueil</Link></li>
                <li><Link href="/about">À propos</Link></li>
                <li><Link href="/chaine">Chaine de valeur</Link></li>
                <li><Link href="/produits">Produits</Link></li>
                <li><Link href="/environnement">Environnement</Link></li>
                <li><Link href="/rse">RSE</Link></li>
                <li><Link href="/bateaux">Bateaux</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}