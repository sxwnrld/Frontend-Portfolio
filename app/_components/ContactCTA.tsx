import Link from "next/link";
import { site } from "../_data/site";
import Arrow from "./Arrow";

// Appel à l'action affiché en bas des pages (sauf la page contact)
export default function ContactCTA() {
  return (
    <section className="container-x">
      <div className="py-28 md:py-40 border-t border-line">
        <h2
          data-reveal
          className="font-display font-bold tracking-tight leading-[0.95] text-[clamp(2.5rem,8vw,7rem)]"
        >
          Un stage, un projet{" "}?
          <br />
          <span className="text-muted">Parlons-en.</span>
        </h2>
        <div data-reveal="2" className="mt-12 flex flex-wrap items-center gap-4">
          <Link href="/contact" className="group btn btn-primary">
            Me contacter <Arrow />
          </Link>
          <a href={`mailto:${site.email}`} className="group btn btn-ghost">
            {site.email} <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
