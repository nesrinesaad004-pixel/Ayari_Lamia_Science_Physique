import { createFileRoute, Link } from "@tanstack/react-router";
import { Countdown } from "../components/site/Countdown";
import { TipOfTheDay } from "../components/site/TipOfTheDay";
import { domainesData } from "../../programData";
import { ChevronRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Espace Sciences — Réussir le Bac Sciences avec méthode" },
      {
        name: "description",
        content:
          "Espace numérique de Mme Ayari Lamia : cours complets, TP illustrés, exercices corrigés et fiches résumé de Sciences Physiques pour le Bac.",
      },
      { property: "og:title", content: "Espace Sciences — Mme Ayari Lamia" },
      {
        property: "og:description",
        content:
          "Cours, TP, exercices corrigés et astuces de Sciences Physiques pour réussir le Bac avec méthode.",
      },
    ],
  }),
  component: Index,
});

const dotColor: Record<string, string> = {
  blue: "bg-blue-500",
  orange: "bg-orange-500",
  green: "bg-green-500",
  purple: "bg-purple-500",
};

function Index() {
  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <div className="grid grid-cols-1 gap-6 py-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-8 lg:py-12">
        <div className="min-w-0 space-y-8">
          {/* HERO */}
          <section className="notebook relative overflow-hidden rounded-[1.6rem] p-6 sm:p-10">
            <span className="absolute right-6 top-6 hidden font-mono text-xs text-blue-500/50 sm:block">
              p. 01 / cours
            </span>
            <div className="max-w-[46ch]">
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.22em] text-blue-600">
                Bac Sciences · Physique-Chimie
              </p>
              <h1 className="text-balance font-sans text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Réussir le Bac Sciences, c'est possible — avec méthode.
              </h1>
              <p className="mt-5 max-w-[52ch] text-pretty text-base leading-relaxed text-gray-700/70">
                L'espace numérique de Mme Ayari Lamia, professeur de Sciences Physiques. Cours
                complets, TP illustrés, exercices corrigés et astuces testées en classe.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/cours"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 font-sans text-sm font-medium text-white ring-1 ring-blue-600/50"
              >
                <span className="font-mono">§</span> Accéder aux Cours
              </Link>
              <Link
                to="/exercices"
                className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-5 py-3 font-sans text-sm font-medium text-gray-900 ring-1 ring-orange-400/40"
              >
                Voir les Exercices
              </Link>
              <Link
                to="/fiches-resume"
                className="inline-flex items-center gap-2 rounded-full bg-green-100 px-5 py-3 font-sans text-sm font-medium text-gray-900 ring-1 ring-green-400/40"
              >
                Télécharger les Résumés
              </Link>
            </div>
          </section>

          {/* DOMAINS - Juste les titres des chapitres */}
          <section>
            <div className="mb-5 flex items-end justify-between">
              <h2 className="font-sans text-xl font-semibold tracking-tight">
                Les quatre domaines du programme
              </h2>
              <span className="font-mono text-xs text-gray-500/40">04 domaines</span>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {domainesData.map((d) => (
                <Link
                  key={d.id}
                  to="/domaines/$domaineId"
                  params={{ domaineId: d.id }}
                  className="group glass rounded-3xl p-5 ring-1 ring-black/5 transition-transform hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`rounded-full px-2.5 py-1 font-mono text-xs font-bold bg-${d.couleur}-100 text-${d.couleur}-700`}>
                      {d.numero}
                    </span>
                    <span className={`rounded-full px-2 py-0.5 font-sans text-[11px] font-medium bg-${d.couleur}-50 text-${d.couleur}-600`}>
                      {d.chapitres.length} CHAPITRES
                    </span>
                  </div>
                  
                  <p className="font-sans text-lg font-semibold tracking-tight mb-3">{d.titre}</p>

                  {/* Juste la liste des chapitres */}
                  <ul className="space-y-2">
                    {d.chapitres.map((chap) => (
                      <li key={chap.id} className="flex items-start gap-2 text-sm text-gray-700/80">
                        <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${dotColor[d.couleur]}`}></span>
                        <span>{chap.titre}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Lien vers la page détail */}
                  <div className={`mt-4 inline-flex items-center gap-1 font-mono text-xs text-${d.couleur}-600/70`}>
                    Voir tous les chapitres
                    <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* EXERCICES LEVELS */}
          <section className="glass rounded-3xl p-6 ring-1 ring-black/5 sm:p-8">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="font-sans text-xl font-semibold tracking-tight">
                  S'entraîner au bon rythme
                </h2>
                <p className="mt-2 max-w-[48ch] text-pretty text-sm text-gray-700/65">
                  Trois niveaux progressifs, chacun avec énoncé, vidéo de correction et méthodologie
                  écrite.
                </p>
              </div>
              <Link
                to="/exercices"
                className="hidden shrink-0 rounded-full px-4 py-2 font-sans text-sm font-medium text-gray-900 ring-1 ring-gray-900/20 hover:bg-gray-900/5 sm:inline-block"
              >
                Tous les exercices
              </Link>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-green-100/50 p-4 ring-1 ring-green-200/50">
                <span className="inline-block rounded-full bg-green-200/50 px-2 py-0.5 font-sans text-[11px] font-semibold text-green-700">
                  Niveau 1
                </span>
                <p className="mt-3 font-sans text-sm font-semibold">Application directe</p>
                <p className="mt-1 font-mono text-xs text-gray-600/55">m/s = km/h ÷ 3,6</p>
              </div>
              <div className="rounded-2xl bg-orange-100/50 p-4 ring-1 ring-orange-200/50">
                <span className="inline-block rounded-full bg-orange-200/50 px-2 py-0.5 font-sans text-[11px] font-semibold text-orange-700">
                  Niveau 2
                </span>
                <p className="mt-3 font-sans text-sm font-semibold">Type Bac</p>
                <p className="mt-1 font-mono text-xs text-gray-600/55">Étude complète d'un RLC</p>
              </div>
              <div className="rounded-2xl bg-blue-100/50 p-4 ring-1 ring-blue-200/50">
                <span className="inline-block rounded-full bg-blue-200/50 px-2 py-0.5 font-sans text-[11px] font-semibold text-blue-700">
                  Niveau 3
                </span>
                <p className="mt-3 font-sans text-sm font-semibold">Excellence</p>
                <p className="mt-1 font-mono text-xs text-gray-600/55">Mécanique × Énergie</p>
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT WIDGETS */}
        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <Countdown />
          <TipOfTheDay />
          <div className="glass rounded-3xl p-6 ring-1 ring-black/5">
            <p className="font-sans text-sm font-semibold tracking-tight">Nouvelle fiche résumé</p>
            <p className="mt-1 text-pretty text-sm leading-relaxed text-gray-700/65">
              RC, RL, LC — tout en une page, avec unités.
            </p>
            <Link
              to="/fiches-resume"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2.5 font-sans text-sm font-medium text-white ring-1 ring-gray-900/40"
            >
              Consulter la fiche
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Index;
