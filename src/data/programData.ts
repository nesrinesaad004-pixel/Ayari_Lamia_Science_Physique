import { 
  Car, 
  Zap, 
  Waves, 
  Atom, 
  FlaskConical,
  FileText,
  Download,
  ChevronRight
} from "lucide-react";

export interface Chapitre {
  id: string;
  titre: string;
  description: string;
  pdfUrl?: string;
  coursUrl?: string;
  icon: React.ReactNode;
}

export interface Domaine {
  id: string;
  numero: string;
  titre: string;
  couleur: string;
  description: string;
  chapitres: Chapitre[];
}

export const domainesData: Domaine[] = [
  {
    id: "mecanique",
    numero: "01",
    titre: "Mécanique",
    couleur: "blue",
    description: "Cinématique, dynamique newtonienne, travail-énergie, oscillateurs mécaniques.",
    chapitres: [
      {
        id: "cinematique",
        titre: "Cinématique du point matériel",
        description: "Mouvement, vitesse, accélération",
        pdfUrl: "/pdf/mecanique/cinematique.pdf",
        icon: <Car className="w-6 h-6" />
      },
      {
        id: "dynamique-newtonienne",
        titre: "Dynamique newtonienne (1ère et 2ème loi)",
        description: "Lois de Newton, forces",
        pdfUrl: "/pdf/mecanique/dynamique.pdf",
        icon: <Car className="w-6 h-6" />
      },
      {
        id: "travail-energie",
        titre: "Travail et énergie cinétique",
        description: "Énergie cinétique, potentielle",
        pdfUrl: "/pdf/mecanique/energie.pdf",
        icon: <Car className="w-6 h-6" />
      },
      {
        id: "oscillateurs",
        titre: "Oscillateurs mécaniques (libres, amortis, forcés)",
        description: "Oscillateurs libres et forcés",
        pdfUrl: "/pdf/mecanique/oscillateurs.pdf",
        icon: <Car className="w-6 h-6" />
      }
    ]
  },
  {
    id: "electricite",
    numero: "02",
    titre: "Électricité",
    couleur: "orange",
    description: "Régime transitoire RC & RL, oscillations LC, filtres et résonance.",
    chapitres: [
      {
        id: "regime-transitoire",
        titre: "Courant continu / régime transitoire (RC, RL)",
        description: "Circuits RC et RL",
        pdfUrl: "/pdf/electricite/transitoire.pdf",
        icon: <Zap className="w-6 h-6" />
      },
      {
        id: "oscillations-lc",
        titre: "Oscillations libres (LC)",
        description: "Circuit oscillant LC",
        pdfUrl: "/pdf/electricite/oscillations-lc.pdf",
        icon: <Zap className="w-6 h-6" />
      },
      {
        id: "regime-sinusoidal",
        titre: "Circuits en régime sinusoïdal forcé",
        description: "Régime sinusoïdal",
        pdfUrl: "/pdf/electricite/sinusoidal.pdf",
        icon: <Zap className="w-6 h-6" />
      },
      {
        id: "filtres-resonance",
        titre: "Filtres (passe-bas, passe-haut, passe-bande)",
        description: "Filtres passe-bas, résonance d'intensité",
        pdfUrl: "/pdf/electricite/filtres.pdf",
        icon: <Zap className="w-6 h-6" />
      },
      {
        id: "resonance-intensite",
        titre: "Résonance d'intensité",
        description: "Phénomène de résonance",
        pdfUrl: "/pdf/electricite/resonance.pdf",
        icon: <Zap className="w-6 h-6" />
      }
    ]
  },
  {
    id: "ondes-nucleaire",
    numero: "03",
    titre: "Physique ondulatoire & nucléaire",
    couleur: "green",
    description: "Propagation, interférences, radioactivité, fission & fusion.",
    chapitres: [
      {
        id: "propagation-ondes",
        titre: "Propagation des ondes",
        description: "Ondes mécaniques et électromagnétiques",
        pdfUrl: "/pdf/ondes/propagation.pdf",
        icon: <Waves className="w-6 h-6" />
      },
      {
        id: "interferences",
        titre: "Interférences et diffraction",
        description: "Phénomènes d'interférences",
        pdfUrl: "/pdf/ondes/interferences.pdf",
        icon: <Waves className="w-6 h-6" />
      },
      {
        id: "radioactivite",
        titre: "Radioactivité et décroissance",
        description: "Décroissance radioactive",
        pdfUrl: "/pdf/nucleaire/radioactivite.pdf",
        icon: <Atom className="w-6 h-6" />
      },
      {
        id: "fission-fusion",
        titre: "Réactions nucléaires (fission / fusion)",
        description: "Réactions nucléaires",
        pdfUrl: "/pdf/nucleaire/fission-fusion.pdf",
        icon: <Atom className="w-6 h-6" />
      }
    ]
  },
  {
    id: "chimie",
    numero: "04",
    titre: "Chimie",
    couleur: "purple",
    description: "Suivi temporel, équilibres, acide-base, dosages, chimie organique.",
    chapitres: [
      {
        id: "suivi-temporel",
        titre: "Suivi temporel d'une transformation",
        description: "Cinétique chimique",
        pdfUrl: "/pdf/chimie/suivi-temporel.pdf",
        icon: <FlaskConical className="w-6 h-6" />
      },
      {
        id: "equilibres",
        titre: "Équilibres chimiques",
        description: "Équilibre chimique",
        pdfUrl: "/pdf/chimie/equilibres.pdf",
        icon: <FlaskConical className="w-6 h-6" />
      },
      {
        id: "acide-base",
        titre: "Réactions acide-base",
        description: "pH, solutions acides et basiques",
        pdfUrl: "/pdf/chimie/acide-base.pdf",
        icon: <FlaskConical className="w-6 h-6" />
      },
      {
        id: "dosages",
        titre: "Dosages (pH-métrique, colorimétrique)",
        description: "Titrages et dosages",
        pdfUrl: "/pdf/chimie/dosages.pdf",
        icon: <FlaskConical className="w-6 h-6" />
      },
      {
        id: "chimie-organique",
        titre: "Chimie organique (esters, savons)",
        description: "Composés organiques",
        pdfUrl: "/pdf/chimie/organique.pdf",
        icon: <FlaskConical className="w-6 h-6" />
      }
    ]
  }
];
