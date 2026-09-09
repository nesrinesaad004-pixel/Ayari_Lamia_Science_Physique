import { createFileRoute } from "@tanstack/react-router";
import { Card, PageShell } from "../components/site/PageShell";

export const Route = createFileRoute("/exercices")({
  head: () => ({
    meta: [
      { title: "Exercices corrigés — 3 niveaux, du cours à l'excellence" },
      {
        name: "description",
        content:
          "Exercices de Sciences Physiques classés en trois niveaux : application directe, type Bac et problèmes d'excellence, avec correction vidéo.",
      },
      { property: "og:title", content: "Exercices corrigés — Espace Sciences" },
      {
        property: "og:description",
        content: "Trois niveaux progressifs, énoncés PDF, vidéos de correction et méthodologie écrite.",
      },
    ],
  }),
  component: Exercices,
});

const niveaux = [
  {
    badge: "Niveau 1",
    title: "Application directe",
    tone: "bg-ondes/10 ring-ondes/25",
    tag: "bg-ondes/20 text-ondes",
    goal: "Pour vérifier que le cours est compris.",
    items: [
      "Calculer une fréquence à partir d'une période",
      "Appliquer la loi d'Ohm dans un circuit simple",
      "Convertir des unités et vérifier une dimension",
    ],
  },
  {
    badge: "Niveau 2",
    title: "Type Bac",
    tone: "bg-elec/10 ring-elec/25",
    tag: "bg-elec/20 text-elec",
    goal: "Les classiques qui tombent chaque année.",
    items: [
      "Étude complète d'un circuit RLC en régime forcé",
      "Dosage acide-base avec exploitation de courbe",
      "Oscillateur mécanique amorti : bilan énergétique",
    ],
  },
  {
    badge: "Niveau 3",
    title: "Problèmes d'excellence",
    tone: "bg-meca/10 ring-meca/25",
    tag: "bg-meca/20 text-meca",
    goal: "Pour viser la mention.",
    items: [
      "Problème croisé Mécanique-Énergie",
      "Diffraction + analyse dimensionnelle",
      "Cinétique chimique et méthode graphique semi-log",
    ],
  },
];

function Exercices() {
  return (
    <PageShell
      eyebrow="Entraînement"
      title="Exercices corrigés"
      intro="Chaque exercice comprend un énoncé téléchargeable, une vidéo de correction au tableau et la méthodologie écrite : pourquoi cette loi, et pas une autre."
      folio="p. 05 / exercices"
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {niveaux.map((n) => (
          <section key={n.badge} className={`rounded-3xl p-6 ring-1 ${n.tone}`}>
            <span
              className={`inline-block rounded-full px-2.5 py-0.5 font-sans text-[11px] font-semibold ${n.tag}`}
            >
              {n.badge}
            </span>
            <h2 className="mt-4 font-sans text-lg font-semibold tracking-tight">{n.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">{n.goal}</p>
            <ul className="mt-4 space-y-2.5">
              {n.items.map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-ink/75">
                  <span className="mt-1.5 font-mono text-xs text-ink/40">—</span>
                  {i}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <Card>
        <h2 className="font-sans text-xl font-semibold tracking-tight">
          Le format de chaque exercice
        </h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl bg-paper p-4 ring-1 ring-ink/10">
            <p className="font-mono text-xs text-meca">01</p>
            <p className="mt-2 font-sans text-sm font-semibold">Énoncé</p>
            <p className="mt-1 text-sm leading-relaxed text-ink/65">PDF téléchargeable, imprimable.</p>
          </div>
          <div className="rounded-2xl bg-paper p-4 ring-1 ring-ink/10">
            <p className="font-mono text-xs text-elec">02</p>
            <p className="mt-2 font-sans text-sm font-semibold">Vidéo de correction</p>
            <p className="mt-1 text-sm leading-relaxed text-ink/65">
              Mme Lamia explique au tableau, étape par étape.
            </p>
          </div>
          <div className="rounded-2xl bg-paper p-4 ring-1 ring-ink/10">
            <p className="font-mono text-xs text-ondes">03</p>
            <p className="mt-2 font-sans text-sm font-semibold">Méthodologie écrite</p>
            <p className="mt-1 text-sm leading-relaxed text-ink/65">
              « Pourquoi j'ai choisi cette loi ? »
            </p>
          </div>
        </div>
      </Card>
    </PageShell>
  );
}
