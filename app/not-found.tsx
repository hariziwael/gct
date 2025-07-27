// app/not-found.tsx
export default function NotFound() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-4xl font-bold text-red-600">404</h1>
        <p className="text-lg mt-2">Page introuvable.</p>
        <a href="/" className="mt-4 text-blue-600 underline">Retour à l’accueil</a>
      </div>
    );
  }
  