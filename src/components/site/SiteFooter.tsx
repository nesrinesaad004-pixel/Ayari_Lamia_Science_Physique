export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10">
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-ink/50">
            Espace Sciences · Mme Ayari Lamia — Bac Sciences Physique-Chimie
          </p>
          <p className="font-sans text-xs text-ink/45">
            Conçu comme un carnet de laboratoire bien tenu.
          </p>
        </div>
      </div>
    </footer>
  );
}
