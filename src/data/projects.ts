export type VisualKind = 'artm' | 'radio' | 'maita' | 'mimmen' | 'tanks' | 'viewer'

export type Project = {
  id: VisualKind
  name: string
  category: string
  description: string
  role: string[]
  stack: string[]
}

export const projects: Project[] = [
  {
    id: 'artm',
    name: 'ARTM',
    category: "App mobile · Projet de fin d'études CDA",
    description:
      "Application de gestion des cotisations pour l'Association des Ressortissants Tchadiens à Marseille : authentification, paiements et tableaux de bord admin.",
    role: [
      'Modélisation de la base (MCD / ERD) et intégration MySQL',
      "Parcours d'authentification et de paiement",
      'Tableaux de bord administrateur',
    ],
    stack: ['React Native', 'Expo', 'MySQL'],
  },
  {
    id: 'radio',
    name: 'Radio EPHEM7RE',
    category: 'Webradio · Infra + front',
    description:
      "Une webradio montée de zéro pour le festival de l'école : serveur, diffusion live, archives des émissions et lecteur public néo-brutaliste.",
    role: [
      'VPS DigitalOcean, AzuraCast sous Docker, Nginx',
      "API Python d'enregistrements en service systemd, stockage S3 Scaleway",
      'UI du lecteur public et des archives en React/TypeScript',
    ],
    stack: ['AzuraCast', 'Docker', 'Nginx', 'Python', 'React / Vite', 'S3'],
  },
  {
    id: 'maita',
    name: 'MAITA',
    category: 'Web · Bioinformatique pour ID Solutions',
    description:
      "Front de gestion de kits de détection de mutations génétiques, de design d'amorces PCR et de traceurs, avec affichage synchronisé des séquences.",
    role: [
      "Débogage de l'attribution des fluorophores et de la persistance des statuts",
      "Intégration de l'API FastAPI / Django",
      'Code nettoyé et documenté à la livraison',
    ],
    stack: ['React', 'TypeScript', 'FastAPI / Django'],
  },
  {
    id: 'mimmen',
    name: 'mimmen-ai',
    category: 'Mobile · Streaming temps réel',
    description:
      'Streaming vidéo du mobile vers le navigateur en temps réel, avec enregistrement local simultané.',
    role: [
      'Flux WebRTC mobile → navigateur',
      'Modules natifs Kotlin / Android et builds EAS',
      'Résolution des problèmes de connexion ICE',
    ],
    stack: ['WebRTC', 'React Native', 'Expo', 'Kotlin'],
  },
  {
    id: 'tanks',
    name: 'War of Tanks',
    category: 'Jeu RTS · La Plateforme',
    description:
      'Jeu de stratégie temps réel en 2D, avec IA, cartes générées et un backend pour les scores.',
    role: [
      'Pathfinding Flow Field et separation steering',
      'Génération procédurale de cartes et IA en behavior trees',
      'Score, timer, victoire et backend Node/Express + MongoDB',
    ],
    stack: ['Unity 2D', 'C#', 'Node.js', 'MongoDB'],
  },
  {
    id: 'viewer',
    name: 'PlateformeViewer',
    category: "3D · Projet d'équipe",
    description: 'Outil de visualisation 3D de bâtiment, construit en équipe sous Unity 6.',
    role: ['Fonctionnalités caméra', "Documentation d'onboarding", 'Slides de présentation'],
    stack: ['Unity 6', 'URP', 'C#'],
  },
]
