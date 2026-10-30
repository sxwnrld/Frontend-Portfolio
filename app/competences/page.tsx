import ContactCTA from "../_components/ContactCTA";
import PageHeader from "../_components/PageHeader";
import { skillCategories, softSkills } from "../_data/site";

export const metadata = {
  title: "Compétences",
  description: "Les langages, frameworks et outils maîtrisés par Sawwan Akrour.",
};

const domains = [
  {
    title: "Développement web",
    school: "IIM — Bachelor 2",
    text: "Conception et intégration de sites et d’applications web, du front-end au back-end.",
  },
  {
    title: "Cybersécurité",
    school: "NEXA — Bachelor 1",
    text: "Une première année consacrée à la sécurité : menaces, authentification et bonnes pratiques.",
  },
];

export default function CompetencesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Compétences"
        title="Ma boîte à outils."
        intro="Les langages, frameworks et outils que j’utilise au quotidien, et deux domaines qui se complètent : le développement web et la cybersécurité."
      />

      {/* DOMAINES */}
      <section className="container-x pb-24 md:pb-32 grid gap-6 md:grid-cols-2">
        {domains.map((d, i) => (
          <div key={d.title} data-reveal={String(i + 1)} className="rounded-2xl border border-line bg-surface p-8 md:p-10">
            <p className="eyebrow">{d.school}</p>
            <h2 className="mt-6 font-display text-3xl md:text-4xl font-semibold tracking-tight">{d.title}</h2>
            <p className="mt-4 text-paper/70 leading-relaxed">{d.text}</p>
          </div>
        ))}
      </section>

      {/* STACK */}
      <section className="container-x pb-24 md:pb-32">
        {skillCategories.map((cat, i) => (
          <div key={cat.title} className="grid gap-8 md:grid-cols-12 py-12 md:py-16 border-t border-line">
            <div className="md:col-span-4" data-reveal>
              <p className="eyebrow">({String(i + 1).padStart(2, "0")})</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">{cat.title}</h2>
              <p className="mt-2 text-sm text-muted">{cat.description}</p>
            </div>
            <ul className="md:col-span-8 grid grid-cols-2 lg:grid-cols-3 gap-3">
              {cat.skills.map(({ icon: Icon, name }, j) => (
                <li
                  key={name}
                  data-reveal={String(Math.min(j + 1, 5))}
                  className="lift flex items-center gap-4 rounded-xl border border-line bg-surface px-5 py-5"
                >
                  <Icon className="lift-icon text-2xl shrink-0" aria-hidden="true" />
                  <span className="font-medium">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* SOFT SKILLS & LANGUES */}
      <section className="container-x pb-28 md:pb-40">
        <div className="grid gap-8 md:grid-cols-12 border-t border-line pt-12 md:pt-16">
        <div className="md:col-span-4" data-reveal>
          <p className="eyebrow">(04)</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">Savoir-être</h2>
        </div>
        <div className="md:col-span-8" data-reveal="1">
          <ul className="flex flex-wrap gap-3">
            {softSkills.map((skill) => (
              <li key={skill} className="rounded-full border border-line-strong px-5 py-2.5">
                {skill}
              </li>
            ))}
          </ul>
          <p className="mt-10 eyebrow">Langue</p>
          <p className="mt-3">Français — langue maternelle</p>
        </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
