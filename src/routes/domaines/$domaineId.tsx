import { createFileRoute } from "@tanstack/react-router";
import { domainsData } from "../../data/programData";
import { FileText, Download, ChevronRight, ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/domaines/$domaineId")({
  component: DomaineDetail,
});

function DomaineDetail() {
  const { domaineId } = Route.useParams();
  const domaine = domainesData.find((d) => d.id === domaineId);

  if (!domaine) {
    return <div>Domaine non trouvé</div>;
  }

  const couleurs = {
    blue: "bg-blue-50 border-blue-200 text-blue-900",
    orange: "bg-orange-50 border-orange-200 text-orange-900",
    green: "bg-green-50 border-green-200 text-green-900",
    purple: "bg-purple-50 border-purple-200 text-purple-900",
  };

  const couleursIcon = {
    blue: "bg-blue-100 text-blue-600",
    orange: "bg-orange-100 text-orange-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Bouton retour */}
        <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6">
          <ArrowLeft className="w-5 h-5" />
          Retour aux domaines
        </Link>

        {/* En-tête du domaine */}
        <div className={`rounded-2xl border-2 p-8 mb-8 ${couleurs[domaine.couleur as keyof typeof couleurs]}`}>
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 ${couleursIcon[domaine.couleur as keyof typeof couleursIcon]}`}>
                {domaine.numero}
              </span>
              <h1 className="text-3xl font-bold mb-2">{domaine.titre}</h1>
              <p className="text-lg opacity-90">{domaine.description}</p>
            </div>
          </div>
        </div>

        {/* Liste des chapitres */}
        <div className="grid gap-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Chapitres du programme</h2>
          
          {domaine.chapitres.map((chapitre, index) => (
            <div
              key={chapitre.id}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${couleursIcon[domaine.couleur as keyof typeof couleursIcon]}`}>
                  {chapitre.icon}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-semibold text-gray-500">
                      Chapitre {index + 1}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">
                      {chapitre.titre}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{chapitre.description}</p>
                  
                  <div className="flex gap-3">
                    {chapitre.pdfUrl && (
                      <a
                        href={chapitre.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors font-medium"
>
                        <FileText className="w-4 h-4" />
                        PDF
                      </a>
                    )}
                    <button className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium">
                      <Download className="w-4 h-4" />
                      Télécharger
                    </button>
                    <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors font-medium">
                      <FileText className="w-4 h-4" />
                      Voir le cours
                    </button>
                  </div>
                </div>
                
                <ChevronRight className="w-6 h-6 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}