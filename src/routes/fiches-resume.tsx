import { createFileRoute } from "@tanstack/react-router";
import { Card, PageShell } from "../components/site/PageShell";

export const Route = createFileRoute("/fiches-resume")({
  head: () => ({
    meta: [
      { title: "Fiches résumé — L'essentiel du Bac Sciences en 1 page" },
      {
        name: "description",
        content:
          "Fiches A4 recto-verso très visuelles : notions clés, formules avec unités, pièges classiques et carte mentale par chapitre.",
      },
      { property: "og:title", content: "Fiches résumé — Espace Sciences" },
      {
        property: "og:description",
        content: "Réviser vite et bien : l'essentiel de chaque chapitre condensé sur une page.",
      },
    ],
  }),
  component: FichesResume,
});

function FichesResume() {
  return null;
}