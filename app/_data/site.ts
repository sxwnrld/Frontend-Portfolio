import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaNodeJs, FaPhp, FaPython, FaGit } from "react-icons/fa";
import { SiTailwindcss, SiSymfony, SiMysql, SiGithub, SiComposer } from "react-icons/si";

export const site = {
  firstName: "Sawwan",
  lastName: "Akrour",
  role: "Étudiant en développement web",
  email: "sawwan7555@gmail.com",
  location: "Île-de-France",
  socials: [
    { label: "GitHub", handle: "@swnnn768", href: "https://github.com/swnnn768" },
    { label: "LinkedIn", handle: "Sawwan Akrour", href: "https://www.linkedin.com/in/sawwan-akrour-03142832b/" },
  ],
};

export const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/projets", label: "Projets" },
  { href: "/competences", label: "Compétences" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export const skillCategories = [
  {
    title: "Front-End",
    description: "Interfaces, intégration et interactivité.",
    skills: [
      { icon: FaHtml5, name: "HTML5" },
      { icon: FaCss3Alt, name: "CSS3" },
      { icon: FaJs, name: "JavaScript" },
      { icon: FaReact, name: "React" },
      { icon: FaVuejs, name: "Vue.js" },
      { icon: SiTailwindcss, name: "TailwindCSS" },
    ],
  },
  {
    title: "Back-End",
    description: "Logique serveur et bases de données.",
    skills: [
      { icon: FaNodeJs, name: "Node.js" },
      { icon: FaPhp, name: "PHP" },
      { icon: SiSymfony, name: "Symfony" },
      { icon: SiMysql, name: "MySQL" },
      { icon: FaPython, name: "Python" },
    ],
  },
  {
    title: "Outils",
    description: "Versionnage et environnement de travail.",
    skills: [
      { icon: FaGit, name: "Git" },
      { icon: SiGithub, name: "GitHub" },
      { icon: SiComposer, name: "Composer" },
      { icon: SiSymfony, name: "Symfony CLI" },
    ],
  },
];

export const allSkills = skillCategories.flatMap((c) => c.skills.map((s) => s.name));

export const softSkills = ["Écoute active", "Communication", "Relationnel", "Curiosité", "Travail en équipe"];

export const parcours = [
  {
    period: "2025 — 2026",
    title: "Bachelor 2 — Développement Web",
    school: "IIM, Nanterre",
  },
  {
    period: "2024 — 2025",
    title: "Bachelor 1 — Cybersécurité",
    school: "NEXA, Paris",
  },
  {
    period: "2023 — 2024",
    title: "Baccalauréat général",
    school: "Lycée Albert Camus, Bois-Colombes",
    detail: "Spécialités maths, physique, maths expertes",
  },
];
