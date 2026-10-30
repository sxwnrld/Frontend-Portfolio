export type Project = {
  slug: string;
  title: string;
  client: string;
  context: string;
  school: string;
  period: string;
  year: string;
  domain: string;
  summary: string;
  description: string[];
  missions: string[];
  tags: string[];
};

// Du plus récent au plus ancien
export const projects: Project[] = [
  {
    slug: "lexilala",
    title: "Refonte du site LEXILALA",
    client: "LEXILALA",
    context: "Projet BAP",
    school: "IIM, Paris",
    period: "Oct. 2025 — Déc. 2025",
    year: "2025",
    domain: "Développement web",
    summary: "Modernisation du design et amélioration de l’ergonomie du site.",
    description: [
      "Dans le cadre d’un projet BAP à l’IIM, nous avons travaillé sur la refonte du site internet LEXILALA.",
      "L’objectif était de moderniser l’identité visuelle du site et de rendre la navigation plus simple et plus agréable pour les utilisateurs.",
    ],
    missions: [
      "Analyse du site existant et de ses points faibles",
      "Proposition d’un nouveau design plus moderne",
      "Amélioration de l’ergonomie et de la navigation",
      "Intégration des pages",
    ],
    tags: ["Refonte", "UX/UI", "Front-End", "Travail en équipe"],
  },
  {
    slug: "curiositiz",
    title: "Refonte du site CURIOSITIZ",
    client: "CURIOSITIZ",
    context: "Projet BAP",
    school: "IIM, Paris",
    period: "2025",
    year: "2025",
    domain: "Développement web",
    summary: "Refonte centrée sur l’expérience utilisateur.",
    description: [
      "Projet BAP consacré à la refonte du site CURIOSITIZ.",
      "Le travail s’est concentré sur l’expérience utilisateur : rendre les contenus plus accessibles et le parcours sur le site plus fluide.",
    ],
    missions: [
      "Étude du parcours utilisateur",
      "Refonte des interfaces",
      "Amélioration de l’expérience utilisateur",
    ],
    tags: ["Refonte", "UX", "Front-End"],
  },
  {
    slug: "biometrie",
    title: "Étude des méthodes biométriques",
    client: "Biométrie",
    context: "Projet d’étude",
    school: "NEXA, Paris",
    period: "Avr. 2025 — Mai 2025",
    year: "2025",
    domain: "Cybersécurité",
    summary: "Analyse comparative des méthodes d’authentification biométrique.",
    description: [
      "Projet réalisé pendant mon Bachelor Cybersécurité à NEXA.",
      "Il consistait à étudier les différentes méthodes d’authentification biométrique et à comparer leurs avantages et leurs inconvénients.",
    ],
    missions: [
      "Recherche sur les méthodes biométriques existantes",
      "Comparaison des avantages et inconvénients de chaque méthode",
      "Présentation des résultats",
    ],
    tags: ["Cybersécurité", "Authentification", "Analyse"],
  },
  {
    slug: "ransomware-wannacry",
    title: "Le ransomware WannaCry",
    client: "WannaCry",
    context: "Projet d’étude",
    school: "NEXA, Paris",
    period: "Déc. 2024 — Janv. 2025",
    year: "2024",
    domain: "Cybersécurité",
    summary: "Étude d’un cas réel de ransomware et des mesures de protection.",
    description: [
      "Projet réalisé pendant mon Bachelor Cybersécurité à NEXA.",
      "Étude du ransomware WannaCry : sa mise en place, son développement et l’analyse des mesures de sécurité permettant de s’en protéger.",
    ],
    missions: [
      "Étude du fonctionnement et de la propagation de WannaCry",
      "Analyse de son développement",
      "Analyse des mesures de sécurité",
    ],
    tags: ["Cybersécurité", "Ransomware", "Analyse"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
