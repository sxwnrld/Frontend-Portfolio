import { FiActivity, FiBookOpen, FiTarget } from "react-icons/fi";
import ContactCTA from "../_components/ContactCTA";
import PageHeader from "../_components/PageHeader";
import { parcours } from "../_data/site";

export const metadata = {
  title: "À propos",
  description: "Le parcours de Sawwan Akrour, étudiant en développement web à l’IIM.",
};

const interests = [
  { icon: FiBookOpen, title: "Enseignement", text: "Je donne des cours, principalement de mathématiques." },
  { icon: FiActivity, title: "Natation", text: "Un sport d’endurance et de régularité." },
  { icon: FiTarget, title: "Tennis", text: "Concentration, stratégie et précision." },
];

export default function AProposPage() {
  return (
    <>
      <PageHeader eyebrow="À propos" title="Développeur web en devenir." />

      {/* PRÉSENTATION */}
      <section className="container-x pb-24 md:pb-32 grid gap-8 md:grid-cols-12">
        <p className="eyebrow md:col-span-4" data-reveal>
          (01) — Qui suis-je
        </p>
        <div className="md:col-span-8 space-y-8">
          <p data-reveal="1" className="font-display text-2xl md:text-4xl font-semibold leading-tight tracking-tight">
            Étudiant en développement web, je vois chaque projet comme une opportunité d’apprendre, d’améliorer ma
            méthode de travail et de développer des solutions toujours plus abouties.
          </p>
          <p data-reveal="2" className="text-lg text-paper/75 leading-relaxed">
            Après une première année en cybersécurité, je me suis orienté vers le développement web. Ce double
            parcours m’apporte une sensibilité aux questions de sécurité dans tout ce que je construis.
          </p>
          <p data-reveal="3" className="text-lg text-paper/75 leading-relaxed">
            Mon objectif : devenir un développeur complet, capable de transformer des idées en solutions concrètes et
            efficaces. Je suis actuellement à la recherche d’un stage pour mettre mes compétences en pratique.
          </p>
        </div>
      </section>

      {/* PARCOURS */}
      <section className="container-x pb-24 md:pb-32 grid gap-8 md:grid-cols-12">
        <h2 className="eyebrow md:col-span-4" data-reveal>
          (02) — Parcours
        </h2>
        <ol className="md:col-span-8 border-t border-line">
          {parcours.map((step, i) => (
            <li
              key={step.title}
              data-reveal={String(i + 1)}
              className="grid gap-2 md:grid-cols-[10rem_1fr] md:gap-8 py-8 border-b border-line"
            >
              <span className="font-mono text-xs text-muted pt-2">{step.period}</span>
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-1 text-muted">{step.school}</p>
                {step.detail && <p className="mt-1 text-sm text-muted">{step.detail}</p>}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* CENTRES D'INTÉRÊT */}
      <section className="container-x pb-28 md:pb-40 grid gap-8 md:grid-cols-12">
        <h2 className="eyebrow md:col-span-4" data-reveal>
          (03) — En dehors du code
        </h2>
        <ul className="md:col-span-8 grid gap-4 sm:grid-cols-3">
          {interests.map(({ icon: Icon, title, text }, i) => (
            <li key={title} data-reveal={String(i + 1)} className="lift rounded-2xl border border-line bg-surface p-7">
              <Icon className="lift-icon text-2xl text-accent" aria-hidden="true" />
              <h3 className="mt-8 font-display text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{text}</p>
            </li>
          ))}
        </ul>
      </section>

      <ContactCTA />
    </>
  );
}
