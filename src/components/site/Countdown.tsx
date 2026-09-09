import { useEffect, useState } from "react";

/** Next Bac session: 8 June, current or following year. */
function nextSession(now: Date) {
  const year = now.getUTCFullYear();
  const thisYear = Date.UTC(year, 5, 8);
  return now.getTime() <= thisYear ? new Date(thisYear) : new Date(Date.UTC(year + 1, 5, 8));
}

export function Countdown() {
  const [days, setDays] = useState<number | null>(null);
  const [label, setLabel] = useState("");

  useEffect(() => {
    const now = new Date();
    const target = nextSession(now);
    setDays(Math.max(0, Math.ceil((target.getTime() - now.getTime()) / 86_400_000)));
    setLabel(
      target.toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
      }),
    );
  }, []);

  return (
    <div className="glass rounded-3xl p-6 ring-1 ring-black/5">
      <p className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-ink/50">
        <span className="size-1.5 rounded-full bg-elec" /> Jours avant le Bac
      </p>
      <div className="flex items-end gap-3">
        <span className="tick font-mono text-6xl font-bold leading-none tracking-tighter text-ink">
          {days ?? "—"}
        </span>
        <span className="mb-1 font-sans text-sm leading-tight text-ink/55">
          jours
          <br />
          restants
        </span>
      </div>
      <div className="mt-5 h-px w-full bg-ink/10" />
      <div className="mt-4 space-y-2 font-mono text-xs text-ink/60">
        <div className="flex justify-between">
          <span>Début de session</span>
          <span>{label || "—"}</span>
        </div>
        <div className="flex justify-between">
          <span>Physique-Chimie</span>
          <span>3 h · coeff. 4</span>
        </div>
      </div>
    </div>
  );
}
