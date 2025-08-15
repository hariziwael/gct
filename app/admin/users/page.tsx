import React from 'react'

interface Utilisateur {
  id: number
  nom: string
  email: string
  rôle: 'Administrateur' | 'Visiteur'
  actif: boolean
}

const utilisateursFictifs: Utilisateur[] = [
  { id: 1, nom: 'Jean Dupont', email: 'jean.dupont@example.com', rôle: 'Administrateur', actif: true },
  { id: 2, nom: 'Claire Martin', email: 'claire.martin@example.com', rôle: 'Visiteur', actif: false },
  { id: 3, nom: 'Ali Ben Salah', email: 'ali.salah@example.com', rôle: 'Visiteur', actif: true },
]

export default function PageUtilisateurs() {
  return (
    <div className="p-8 text-emerald-950">
      <h1 className="text-2xl font-bold mb-6">Liste des utilisateurs</h1>
      <div className="overflow-x-auto rounded-lg shadow border">
        <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 font-medium">Nom</th>
              <th className="px-4 py-2 font-medium">Email</th>
              <th className="px-4 py-2 font-medium">Rôle</th>
              <th className="px-4 py-2 font-medium">Statut</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {utilisateursFictifs.map((utilisateur) => (
              <tr key={utilisateur.id}>
                <td className="px-4 py-3">{utilisateur.nom}</td>
                <td className="px-4 py-3">{utilisateur.email}</td>
                <td className="px-4 py-3">{utilisateur.rôle}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                      utilisateur.actif ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {utilisateur.actif ? 'Actif' : 'Inactif'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
