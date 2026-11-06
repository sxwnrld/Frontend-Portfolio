import Arrow from "../_components/Arrow";
import ContactForm from "../_components/ContactForm";
import CopyEmail from "../_components/CopyEmail";
import PageHeader from "../_components/PageHeader";
import { site } from "../_data/site";

export const metadata = {
  title: "Contact",
  description: "Contacter Sawwan Akrour pour un stage ou un projet.",
};

const infos = [
  { label: "Statut", value: "Disponible pour un stage" },
  { label: "Formation", value: "Bachelor 2 Développement Web — IIM" },
  { label: "Localisation", value: site.location },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Parlons-en."
        intro="Je recherche actuellement un stage en développement web. Une opportunité, une question ou un projet ? Écrivez-moi, je vous répondrai avec plaisir."
      />

      {/* FORMULAIRE */}
      <section className="container-x pb-24 md:pb-32 grid gap-8 md:grid-cols-12">
        <h2 className="eyebrow md:col-span-4" data-reveal>
          Écrire un message
        </h2>
        <div className="md:col-span-8" data-reveal="1">
          <ContactForm email={site.email} />
        </div>
      </section>

      {/* EMAIL */}
      <section className="container-x pb-20 md:pb-28 border-t border-line pt-16 md:pt-20">
        <p className="eyebrow" data-reveal>
          Ou directement par e-mail
        </p>
        <a
          href={`mailto:${site.email}`}
          data-reveal="1"
          className="group mt-6 inline-flex items-center gap-4 md:gap-6 font-display font-bold tracking-tight [overflow-wrap:anywhere] text-[clamp(1.25rem,3vw,2.75rem)] leading-none"
        >
          <span className="link-underline">{site.email}</span>
          <Arrow className="hidden sm:inline-block" />
        </a>
        <div className="mt-10" data-reveal="2">
          <CopyEmail email={site.email} />
        </div>
      </section>

      {/* RÉSEAUX + INFOS */}
      <section className="container-x pb-28 md:pb-40 grid gap-16 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="eyebrow mb-6" data-reveal>
            Réseaux
          </p>
          <ul className="border-t border-line">
            {site.socials.map((s, i) => (
              <li key={s.label} data-reveal={String(i + 1)}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group row-link flex items-center justify-between gap-6 py-7 border-b border-line"
                >
                  <span className="row-shift">
                    <span className="block font-display text-3xl md:text-4xl font-semibold tracking-tight">{s.label}</span>
                    <span className="block mt-1 text-sm text-muted">{s.handle}</span>
                  </span>
                  <Arrow className="text-2xl" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <dl className="md:col-span-4 md:col-start-9 space-y-8">
          {infos.map((info, i) => (
            <div key={info.label} data-reveal={String(i + 1)}>
              <dt className="eyebrow">{info.label}</dt>
              <dd className="mt-2 text-lg inline-flex items-center gap-2.5">
                {i === 0 && <span className="status-dot" />}
                {info.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
