/**
 * Contenu du site : c'est le seul fichier à modifier pour mettre à jour
 * les liens de contact ou la liste des projets.
 *
 * Une valeur vide ('') masque automatiquement le bouton ou le lien concerné.
 */

const SITE = {
  github: 'https://github.com/Abakar-Issa-Ali',
  linkedin: 'http://www.linkedin.com/in/ali-abakar-issa-817a841a3' ,
  email: 'abakarali025@gmail.com',
  cv: 'assets/CV_Ali_abakar_issa.pdf'
};

/**
 * Projets affichés dans la section « Projets récents », dans cet ordre.
 * - image : chemin depuis la racine du site (1200 × 750 conseillé)
 * - demo / code : liens optionnels, laisser '' pour masquer le bouton
 */
const PROJECTS = [
  {
    title: 'ARTM',
    tag: "App mobile · Projet de fin d'études",
    description:
      "Gestion des cotisations pour l'Association des Ressortissants Tchadiens à Marseille : authentification, paiements et tableaux de bord admin.",
    stack: ['React Native', 'Expo', 'MySQL'],
    image: 'assets/images/projects/artm.jpg',
    demo: '',
    code: '',
  },
  {
    title: 'Radio EPHEM7RE',
    tag: 'Webradio · Infra + front',
    description:
      "Webradio montée de zéro pour le festival de l'école : VPS, diffusion live avec AzuraCast, archives des émissions et lecteur public.",
    stack: ['Docker', 'Nginx', 'Python', 'React'],
    image: 'assets/images/projects/radio.jpg',
    demo: '',
    code: '',
  },
  {
    title: 'MAITA',
    tag: 'Web · Bioinformatique',
    description:
      "Front pour ID Solutions : kits de détection de mutations génétiques, design d'amorces PCR et affichage synchronisé des séquences.",
    stack: ['React', 'TypeScript', 'FastAPI'],
    image: 'assets/images/projects/maita.jpg',
    demo: '',
    code: '',
  },
  {
    title: 'mimmen-ai',
    tag: 'Mobile · Temps réel',
    description:
      'Streaming vidéo du mobile vers le navigateur via WebRTC, avec enregistrement local simultané et modules natifs Android.',
    stack: ['WebRTC', 'React Native', 'Kotlin'],
    image: 'assets/images/projects/mimmen-ai.jpg',
    demo: '',
    code: '',
  },
  {
    title: 'War of Tanks',
    tag: 'Jeu RTS · Unity 2D',
    description:
      'Stratégie temps réel : pathfinding Flow Field, cartes procédurales, IA en behavior trees et backend de scores Node/MongoDB.',
    stack: ['Unity', 'C#', 'Node.js', 'MongoDB'],
    image: 'assets/images/projects/war-of-tanks.jpg',
    demo: '',
    code: '',
  },
  {
    title: 'PlateformeViewer',
    tag: "3D · Projet d'équipe",
    description:
      "Outil de visualisation 3D de bâtiment sous Unity 6. Ma part : les fonctionnalités caméra et la documentation d'onboarding.",
    stack: ['Unity 6', 'URP', 'C#'],
    image: 'assets/images/projects/plateforme-viewer.jpg',
    demo: '',
    code: '',
  },
];
