import Actualites from "./actualites/page";     
import Partenaires from "./partenaires/page";

export const metadata = {
  title: "À propos - GCT",
  description: "Découvrez l'histoire du Groupe Chimique Tunisien, sa vision et ses contributions à l'économie nationale depuis sa création.",
};

export default function About() {
  return (
    <>
    <div className="text-center text-3xl font-bold text-blue-600 mt-10">
      About
    </div>
    <Actualites />
    <Partenaires />
    </>
  );
}