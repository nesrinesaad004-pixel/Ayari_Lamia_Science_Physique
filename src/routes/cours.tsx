import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/site/PageShell";

export const Route = createFileRoute("/cours")({
  head: () => ({
    meta: [
      { title: "Les Cours — Programme officiel du Bac Sciences" },
      {
        name: "description",
        content:
          "Tous les cours de Sciences Physiques du Bac classés en quatre domaines : mécanique, électricité, ondes & nucléaire, chimie.",
      },
      { property: "og:title", content: "Les Cours — Programme officiel du Bac Sciences" },
      {
        property: "og:description",
        content:
          "Mécanique, électricité, ondes & nucléaire, chimie : chaque chapitre avec cours PDF, vidéo et schémas.",
      },
    ],
  }),
  component: Cours,
});

const domaines = [
  {
    n: "01",
    name: "Mécanique",
    tone: "bg-meca/10 ring-meca/25",
    dot: "bg-meca",
    tag: "bg-meca/15 text-meca",
    chapters: [
      "Cinématique du point matériel",
      "Dynamique newtonienne (1ère et 2ème loi)",
      "Travail et énergie cinétique",
      "Oscillateurs mécaniques (libres, amortis, forcés)",
    ],
  },
  {
    n: "02",
    name: "Électricité",
    tone: "bg-elec/10 ring-elec/25",
    dot: "bg-elec",
    tag: "bg-elec/15 text-elec",
    chapters: [
      "Courant continu / régime transitoire (RC, RL)",
      "Oscillations libres (LC)",
      "Circuits en régime sinusoïdal forcé",
      "Filtres (passe-bas, passe-haut, passe-bande)",
      "Résonance d'intensité",
    ],
  },
  {
    n: "03",
    name: "Physique ondulatoire & nucléaire",
    tone: "bg-ondes/10 ring-ondes/25",
    dot: "bg-ondes",
    tag: "bg-ondes/15 text-ondes",
    chapters: [
      "Propagation des ondes",
      "Interférences et diffraction",
      "Radioactivité et décroissance",
      "Réactions nucléaires (fission / fusion)",
    ],
  },
  {
    n: "04",
    name: "Chimie",
    tone: "bg-chimie/10 ring-chimie/25",
    dot: "bg-chimie",
    tag: "bg-chimie/15 text-chimie",
    chapters: [
      "Suivi temporel d'une transformation",
      "Équilibres chimiques",
      "Réactions acide-base",
      "Dosages (pH-métrique, colorimétrique)",
      "Chimie organique (esters, savons)",
    ],
  },
];

function Cours() {
  return (
    <PageShell
      eyebrow="Programme officiel"
      title="Les Cours — Programme officiel du Bac Sciences"
      intro="Chaque chapitre contient un cours en PDF, une vidéo explicative et les schémas indispensables."
      folio="p. 03 / cours"
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {domaines.map((d) => (
          <section key={d.n} className={`rounded-3xl p-6 ring-1 ${d.tone}`}>
            <div className="flex items-center justify-between">
              <span
                className={`rounded-full px-2.5 py-1 font-mono text-xs font-bold ${d.tag}`}
              >
                {d.n}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/45">
                {d.chapters.length} chapitres
              </span>
            </div>
            <h2 className="mt-4 font-sans text-lg font-semibold tracking-tight">{d.name}</h2>
            <ul className="mt-4 space-y-2.5">
              {d.chapters.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm leading-relaxed text-ink/75">
                  <span className={`mt-2 size-1.5 shrink-0 rounded-full ${d.dot}`} />
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-5 font-mono text-[11px] text-ink/50">
              Cours PDF · Vidéo explicative · Schémas
            </p>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
