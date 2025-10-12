"use client";

import { useEffect, useState } from "react";
import { Plus, Edit2, Trash2, Calendar, ExternalLink } from "lucide-react";
import client from "@/lib/sanity";

interface Actualite {
  _id: string;
  titre: string;
  contenu: string;
  publishedAt: string;
}

export default function ActualitesManager() {
  const [actualites, setActualites] = useState<Actualite[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    titre: "",
    contenu: "",
    publishedAt: new Date().toISOString().split("T")[0],
  });
  const [message, setMessage] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);

  useEffect(() => {
    fetchActualites();
  }, []);

  const fetchActualites = async () => {
    try {
      setIsLoading(true);
      const data = await client.fetch(`
        *[_type == "actualite"] | order(publishedAt desc) {
          _id,
          titre,
          contenu,
          publishedAt
        }
      `);
      setActualites(data);
    } catch (error) {
      console.error("Erreur:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenModal = (actualite?: Actualite) => {
    if (actualite) {
      setEditingId(actualite._id);
      setFormData({
        titre: actualite.titre,
        contenu: actualite.contenu,
        publishedAt: actualite.publishedAt.split("T")[0],
      });
    } else {
      setEditingId(null);
      setFormData({
        titre: "",
        contenu: "",
        publishedAt: new Date().toISOString().split("T")[0],
      });
    }
    setShowModal(true);
  };

  const handleSubmit = async () => {
    setMessage("");

    try {
      const response = await fetch("/api/sanity/actualite", {
        method: editingId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          _id: editingId,
        }),
      });

      if (response.ok) {
        setMessage("✅ Actualité enregistrée!");
        setShowModal(false);
        fetchActualites();
        setTimeout(() => setMessage(""), 3000);
      } else {
        setMessage("❌ Erreur lors de la sauvegarde");
      }
    } catch (error) {
      console.error("Erreur:", error);
      setMessage("❌ Erreur réseau");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer cette actualité?")) return;

    try {
      const response = await fetch("/api/sanity/actualite", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ _id: id }),
      });

      if (response.ok) {
        setMessage("✅ Actualité supprimée!");
        fetchActualites();
        setTimeout(() => setMessage(""), 3000);
      }
    } catch (error) {
      console.error("Erreur:", error);
      setMessage("❌ Erreur lors de la suppression");
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              📰 Gestion des Actualités
            </h1>
            <p className="text-slate-600">{actualites.length} actualité(s)</p>
          </div>
          <div className="flex gap-3">
            <a
              href="http://localhost:3333/structure/actualite"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Sanity Studio
            </a>
            <button
              onClick={() => handleOpenModal()}
              className="flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
            >
              <Plus className="w-5 h-5 mr-2" />
              Nouvelle Actualité
            </button>
          </div>
        </div>
      </div>

      {message && (
        <div
          className={`mb-6 text-center py-3 px-4 rounded-lg ${
            message.includes("✅")
              ? "bg-green-50 text-green-700"
              : "bg-red-50 text-red-700"
          }`}
        >
          {message}
        </div>
      )}

      <div className="grid gap-6">
        {actualites.map((actualite) => (
          <div
            key={actualite._id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {actualite.titre}
                </h3>
                <p className="text-slate-600 mb-3 line-clamp-2">
                  {actualite.contenu}
                </p>
                <div className="flex items-center text-sm text-slate-500">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(actualite.publishedAt).toLocaleDateString("fr-FR")}
                </div>
                
              </div>
              <div className="flex gap-2 ml-4">
                <button
                  onClick={() => handleOpenModal(actualite)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  title="Modifier"
                >
                  <Edit2 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleDelete(actualite._id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  title="Supprimer"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              {editingId ? "Modifier l'actualité" : "Nouvelle actualité"}
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Titre
                </label>
                <input
                  type="text"
                  value={formData.titre}
                  onChange={(e) =>
                    setFormData({ ...formData, titre: e.target.value })
                  }
                  className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Contenu
                </label>
                <textarea
                  rows={6}
                  value={formData.contenu}
                  onChange={(e) =>
                    setFormData({ ...formData, contenu: e.target.value })
                  }
                  className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Date de publication
                </label>
                <input
                  type="date"
                  value={formData.publishedAt}
                  onChange={(e) =>
                    setFormData({ ...formData, publishedAt: e.target.value })
                  }
                  className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Image (optionnelle)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full border border-slate-300 rounded-lg px-4 py-2"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-6 py-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  Annuler
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  Enregistrer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
