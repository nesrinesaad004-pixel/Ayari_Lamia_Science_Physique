import { createFileRoute } from "@tanstack/react-router";
import { Card, PageShell } from "../components/site/PageShell";

export const Route = createFileRoute("/travaux-pratiques")({
  head: () => ({
    meta: [
      { title: "Travaux Pratiques — Préparer son TP de physique-chimie" },
      {
        name: "description",
        content:
          "Fiches TP complètes : objectif, matériel, protocole, tableau de mesures, questions guidées et correction détaillée.",
      },
      { property: "og:title", content: "Travaux Pratiques — Espace Sciences" },
      {
        property: "og:description",
        content: "Cinq fiches TP pour arriver préparé en salle de physique : protocole, mesures, correction.",
      },
    ],
  }),
  component: TravauxPratiques,
});

const structure = [
  { label: "Objectif du TP", desc: "En deux lignes, ce que l'on cherche à mettre en évidence." },
  { label: "Matériel nécessaire", desc: "Liste complète du montage et des appareils de mesure." },
  { label: "Protocole expérimental", desc: "Étape par étape, dans l'ordre exact de manipulation." },
  { label: "Photos / vidéos du montage", desc: "Le montage réel, vu de la salle de physique." },
  { label: "Tableau de mesures", desc: "À imprimer et remplir pendant la séance." },
  { label: "Questions guidées", desc: "Pour interpréter les mesures sans se perdre." },
  { label: "Correction détaillée", desc: "Publiée après la séance, avec les pièges rencontrés." },
];

const tps = [
  {
    code: "TP 1",
    title: "Étude d'un oscillateur RC",
    tone: "bg-elec/10 ring-elec/25",
    tag: "bg-elec/15 text-elec",
    goal: "Observer la charge et la décharge d'un condensateur et mesurer la constante de temps.",
  },
  {
    code: "TP 2",
    title: "Dosage acide-base par pH-métrie",
    tone: "bg-chimie/10 ring-chimie/25",
    tag: "bg-chimie/15 text-chimie",
    goal: "Déterminer la concentration d'une solution acide par suivi du pH.",
  },
  {
    code: "TP 3",
    title: "Détermination d'une constante de temps",
    tone: "bg-elec/10 ring-elec/25",
    tag: "bg-elec/15 text-elec",
    goal: "Comparer trois méthodes de mesure de τ dans un circuit RL.",
  },
  {
    code: "TP 4",
    title: "Spectre de diffraction",
    tone: "bg-ondes/10 ring-ondes/25",
    tag: "bg-ondes/15 text-ondes",
    goal: "Mesurer la largeur d'une fente à partir de la figure de diffraction.",
  },
  {
    code: "TP 5",
    title: "Synthèse d'un ester (odeur de banane)",
    tone: "bg-chimie/10 ring-chimie/25",
    tag: "bg-chimie/15 text-chimie",
    goal: "Réaliser une estérification et identifier le produit par son odeur.",
  },
];

function TravauxPratiques() {
  return (
    <PageShell
      eyebrow="Salle de physique"
      title="Les Travaux Pratiques"
      intro="Objectif : arriver en séance déjà préparé. Lisez la fiche avant le TP, remplissez le tableau pendant, comparez avec la correction après."
      folio="p. 04 / tp"
    >
      <Card>
        <h2 className="font-sans text-xl font-semibold tracking-tight">
          Structure type d'une fiche TP
        </h2>
        <ol className="mt-5 grid gap-3 sm:grid-cols-2">
          {structure.map((s, i) => (
            <li key={s.label} className="rounded-2xl bg-paper p-4 ring-1 ring-ink/10">
              <span className="font-mono text-xs text-meca">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 font-sans text-sm font-semibold">{s.label}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink/65">{s.desc}</p>
            </li>
          ))}
        </ol>
      </Card>

      <section>
        <h2 className="mb-5 font-sans text-xl font-semibold tracking-tight">Les TP de l'année</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {tps.map((tp) => (
            <article key={tp.code} className={`rounded-3xl p-5 ring-1 ${tp.tone}`}>
              <div className="flex items-center justify-between">
                <span className={`rounded-full px-2.5 py-1 font-mono text-xs font-bold ${tp.tag}`}>
                  {tp.code}
                </span>
                <span className="font-mono text-[11px] text-ink/45">fiche + correction</span>
              </div>
              <h3 className="mt-4 font-sans text-lg font-semibold tracking-tight">{tp.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{tp.goal}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
