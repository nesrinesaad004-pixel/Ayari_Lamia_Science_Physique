import { useEffect, useState } from "react";

const tips = [
  {
    text: "En mécanique, toujours dessiner le schéma des forces avant de calculer. 80 % des erreurs viennent d'un schéma bâclé.",
    source: "Mécanique · n°12",
  },
  {
    text: "Vérifiez toujours vos unités : une analyse dimensionnelle prend 10 secondes et sauve un exercice entier.",
    source: "Méthode · n°03",
  },
  {
    text: "Pour convertir des km/h en m/s, divisez par 3,6. Dans l'autre sens, multipliez par 3,6.",
    source: "Calcul · n°07",
  },
];

export function TipOfTheDay() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % tips.length), 7000);
    return () => clearInterval(id);
  }, []);

  const tip = tips[i] ?? tips[0]!;

  return (
    <div className="glass rounded-3xl p-6 ring-1 ring-black/5">
      <p className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-meca">
        <span className="grid size-5 place-items-center rounded-full bg-meca/15 font-mono text-[11px]">
          §
        </span>
        Astuce du jour
      </p>
      <p className="text-pretty text-base font-medium leading-relaxed transition-opacity duration-500">
        {tip.text}
      </p>
      <div className="mt-5 flex items-center justify-between">
        <span className="font-mono text-[11px] text-ink/45">{tip.source}</span>
        <div className="flex gap-1.5">
          {tips.map((t, idx) => (
            <span
              key={t.source}
              className={`size-1.5 rounded-full ${idx === i ? "bg-ink/60" : "bg-ink/20"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
