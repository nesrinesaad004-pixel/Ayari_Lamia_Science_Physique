import type { ReactNode } from "react";

export function PageShell({
  eyebrow,
  title,
  intro,
  folio,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  folio?: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 lg:py-12">
      <section className="notebook relative overflow-hidden rounded-[1.6rem] p-6 sm:p-10">
        {folio ? (
          <span className="absolute right-6 top-6 hidden font-mono text-xs text-meca/50 sm:block">
            {folio}
          </span>
        ) : null}
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.22em] text-meca">{eyebrow}</p>
        <h1 className="max-w-[24ch] text-balance font-sans text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-5 max-w-[62ch] text-pretty text-base leading-relaxed text-ink/70">
            {intro}
          </p>
        ) : null}
      </section>

      <div className="mt-8 space-y-8">{children}</div>
    </div>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`glass rounded-3xl p-6 ring-1 ring-black/5 sm:p-8 ${className}`}>
      {children}
    </div>
  );
}
