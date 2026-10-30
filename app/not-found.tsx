import Link from "next/link";
import Arrow from "./_components/Arrow";

export default function NotFound() {
  return (
    <section className="container-x min-h-[80svh] flex flex-col justify-center pt-32 pb-20">
      <p className="eyebrow">Erreur 404</p>
      <h1 className="mt-6 font-display font-extrabold tracking-tight leading-[0.9] text-[clamp(4rem,16vw,12rem)]">
        Perdu<span className="text-accent">.</span>
      </h1>
      <p className="mt-6 text-lg text-paper/70 max-w-md">Cette page n’existe pas ou a été déplacée.</p>
      <Link href="/" className="group btn btn-primary mt-10 self-start">
        Retour à l’accueil <Arrow />
      </Link>
    </section>
  );
}
