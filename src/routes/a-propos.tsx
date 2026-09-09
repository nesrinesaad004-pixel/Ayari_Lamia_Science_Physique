import { createFileRoute } from "@tanstack/react-router";
import { Card, PageShell } from "../components/site/PageShell";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "Votre professeur — Mme Ayari Lamia, Sciences Physiques" },
      {
        name: "description",
        content:
          "Découvrez Mme Ayari Lamia, professeur de Sciences Physiques, sa méthode et ses valeurs pédagogiques : clarté, pratique, progressivité.",
      },
      { property: "og:title", content: "Votre professeur — Mme Ayari Lamia" },
      {
        property: "og:description",
        content: "La méthode et les valeurs pédagogiques de Mme Ayari Lamia, professeur de Sciences Physiques.",
      },
    ],
  }),
  component: APropos,
});

const valeurs = [
  {
    title: "Clarté",
    desc: "Chaque notion est expliquée pas à pas, sans raccourci ni jargon inutile.",
    tone: "bg-meca/10 ring-meca/25 text-meca",
  },
  {
    title: "Pratique",
    desc: "La physique s'apprend en manipulant : TP détaillés, schémas et mesures réelles.",
    tone: "bg-ondes/10 ring-ondes/25 text-ondes",
  },
  {
    title: "Progressivité",
    desc: "Du simple au complexe, sans brûler les étapes ni sauter les bases.",
    tone: "bg-elec/10 ring-elec/25 text-elec",
  },
];

function APropos() {
  return (
    <PageShell
      eyebrow="Votre professeur"
      title="Mme Ayari Lamia, professeur de Sciences Physiques"
      intro="Ma mission n'est pas seulement de vous faire apprendre des formules, mais de vous apprendre à penser comme un scientifique."
      folio="p. 02 / à propos"
    >
      <Card>
        <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
          <div className="rounded-3xl bg-ink/5 p-5 ring-1 ring-ink/10">
            <div className="grid aspect-square w-full place-items-center rounded-2xl bg-paper ring-1 ring-ink/10">
              <span className="font-mono text-4xl text-ink/30">AL</span>
            </div>
            <p className="mt-4 font-sans text-sm font-semibold">Mme Ayari Lamia</p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">
              Sciences Physiques
            </p>
          </div>

          <div className="space-y-4 text-base leading-relaxed text-ink/75">
            <p>
              Bonjour à tous ! Je suis Madame Ayari Lamia, professeure de Sciences Physiques. Ma
              mission n'est pas seulement de vous faire apprendre des formules, mais de vous
              apprendre à penser comme un scientifique.
            </p>
            <p>
              Ce site est mon laboratoire numérique : j'y rassemble tout ce que j'aurais aimé avoir
              quand j'étais moi-même élève en Bac. Ici, pas de blabla inutile — uniquement
              l'essentiel, expliqué clairement, avec des exercices progressifs et des astuces
              testées en classe.
            </p>
            <p className="rounded-2xl bg-meca/10 p-5 text-ink ring-1 ring-meca/20">
              <span className="font-sans font-semibold">Mon conseil :</span> la physique n'est pas
              une matière de « doués », c'est une matière de méthodiques. Bienvenue dans l'aventure !
            </p>
          </div>
        </div>
      </Card>

      <section>
        <h2 className="mb-5 font-sans text-xl font-semibold tracking-tight">
          Mes valeurs pédagogiques
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {valeurs.map((v) => (
            <div key={v.title} className={`rounded-3xl p-5 ring-1 ${v.tone}`}>
              <p className="font-sans text-lg font-semibold tracking-tight text-ink">{v.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Card>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink/50">
          À compléter par Mme Lamia
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ink/70">
          Nombre d'années d'expérience, établissement et portrait photo restent à fournir : je les
          ajouterai dès que vous me les transmettez.
        </p>
      </Card>
    </PageShell>
  );
}
