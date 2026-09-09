import { Link } from "@tanstack/react-router";
import { useState } from "react";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/a-propos", label: "À propos" },
  { to: "/cours", label: "Cours" },
  { to: "/travaux-pratiques", label: "TP" },
  { to: "/exercices", label: "Exercices" },
  { to: "/fiches-resume", label: "Résumés" },
  { to: "/astuces", label: "Astuces" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="glass sticky top-0 z-30 border-b border-ink/10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <nav className="flex items-center justify-between gap-4 py-4">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-full bg-ink font-mono text-sm text-paper">
              λ
            </span>
            <span className="leading-none">
              <span className="block font-sans text-sm font-semibold tracking-tight">
                Espace Sciences
              </span>
              <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-ink/50">
                Mme Ayari Lamia
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "bg-ink/5 text-ink" }}
                className="rounded-full px-3 py-2 font-sans text-sm text-ink/70 hover:bg-ink/5"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden rounded-full bg-ink px-4 py-2 font-sans text-sm font-medium text-paper ring-1 ring-ink/40 sm:inline-block">
              Classe de Tle
            </span>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Ouvrir le menu"
              className="rounded-full px-3 py-2 font-mono text-sm text-ink ring-1 ring-ink/20 lg:hidden"
            >
              ☰
            </button>
          </div>
        </nav>

        {open ? (
          <div className="grid grid-cols-2 gap-1 pb-4 lg:hidden">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 font-sans text-sm text-ink/75 hover:bg-ink/5"
              >
                {l.label}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </header>
  );
}
