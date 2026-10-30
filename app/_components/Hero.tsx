"use client";

import Link from "next/link";
import { useEffect, useRef, type CSSProperties } from "react";
import Arrow from "./Arrow";
import { site } from "../_data/site";

// Nombre de tranches empilées derrière le titre pour créer l'épaisseur
const LAYERS = 20;
const DEPTH_STEP = 0.011; // en em, suit la taille du titre

// Couleur d'une tranche : bord violet clair → violet → presque noir au fond
function layerColor(i: number) {
  const stops: [number, number[]][] = [
    [0, [214, 196, 255]],
    [0.2, [157, 107, 255]],
    [1, [20, 12, 36]],
  ];
  const t = i / LAYERS;
  const k = t <= stops[1][0] ? 0 : 1;
  const [t0, c0] = stops[k];
  const [t1, c1] = stops[k + 1];
  const f = (t - t0) / (t1 - t0);
  return `rgb(${c0.map((c, j) => Math.round(c + (c1[j] - c) * f)).join(",")})`;
}

const layers = Array.from({ length: LAYERS }, (_, n) => {
  const i = n + 1;
  return { i, style: { transform: `translateZ(${(-i * DEPTH_STEP).toFixed(3)}em)`, color: layerColor(i) } };
});

function Lines({ face = false }: { face?: boolean }) {
  return (
    <>
      <span className="line-mask">
        <span className="rise">{site.firstName}</span>
      </span>
      <span className="line-mask">
        <span className="rise [animation-delay:120ms] md:pl-[0.75em]">
          {site.lastName}
          <span className={face ? "text-accent" : undefined}>.</span>
        </span>
      </span>
    </>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  // Inclinaison qui suit la souris (ou flotte seule sur mobile), bascule au scroll
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const target = { x: 0, y: 0 };
    const cur = { x: 0, y: 0, s: 0, e: 1 };
    let mouse = false;
    let raf = 0;
    let running = false;
    const start = performance.now();

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      mouse = true;
      target.x = (e.clientX / window.innerWidth) * 2 - 1;
      target.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    const onLeave = () => (mouse = false);

    const tick = (now: number) => {
      const t = (now - start) / 1000;
      const tx = mouse ? target.x : Math.sin(t * 0.55) * 0.55;
      const ty = mouse ? target.y : Math.cos(t * 0.4) * 0.35;
      const scroll = Math.min(Math.max(window.scrollY / el.offsetHeight, 0), 1);

      cur.x += (tx - cur.x) * 0.06;
      cur.y += (ty - cur.y) * 0.06;
      cur.s += (scroll - cur.s) * 0.18;
      cur.e += (0 - cur.e) * 0.03;

      el.style.setProperty("--px", cur.x.toFixed(4));
      el.style.setProperty("--py", cur.y.toFixed(4));
      el.style.setProperty("--s", cur.s.toFixed(4));
      el.style.setProperty("--e", cur.e.toFixed(4));
      raf = requestAnimationFrame(tick);
    };

    // On ne calcule rien quand le hero n'est plus à l'écran
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !running) {
        running = true;
        raf = requestAnimationFrame(tick);
      } else if (!entry.isIntersecting && running) {
        running = false;
        cancelAnimationFrame(raf);
      }
    });
    io.observe(el);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="hero-3d relative min-h-[100svh] flex flex-col justify-end pt-32 pb-12 md:pb-16 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="hero-glow absolute -top-1/3 left-1/2 w-[120vw] max-w-[1400px] aspect-square rounded-full bg-[radial-gradient(circle,rgba(157,107,255,0.16),transparent_60%)] pointer-events-none"
      />

      {/* Sol en grille qui défile vers le spectateur */}
      <div aria-hidden="true" className="hero-floor">
        <div className="hero-floor-plane" />
      </div>

      <div className="container-x relative min-w-0">
        <div className="hero-parallax flex flex-wrap items-center justify-between gap-4 mb-10 md:mb-14">
          <div className="fade-up flex flex-wrap items-center justify-between gap-4 w-full">
            <p className="eyebrow">Portfolio — {new Date().getFullYear()}</p>
            <p className="eyebrow inline-flex items-center gap-2.5 text-paper">
              <span className="status-dot" /> Disponible pour un stage
            </p>
          </div>
        </div>

        {/* Taille calculée pour que "AKROUR." + le décalage tiennent dans la largeur (Syne est très large) */}
        <div className="hero-stage font-display font-extrabold uppercase leading-[0.9] tracking-[-0.03em] text-[clamp(2.4rem,8.2vw,8rem)]">
          <div className="hero-tilt">
            <div aria-hidden="true" className="hero-layer hero-layer-glow">
              <Lines />
            </div>
            {layers.map(({ i, style }) => (
              <div key={i} aria-hidden="true" className="hero-layer" style={style as CSSProperties}>
                <Lines />
              </div>
            ))}
            <h1 className="hero-face">
              <Lines face />
            </h1>
          </div>
        </div>

        <div className="mt-12 md:mt-16 grid gap-10 md:grid-cols-12 md:items-end">
          <p className="fade-up [animation-delay:450ms] md:col-span-7 lg:col-span-6 text-lg md:text-xl text-paper/75 leading-relaxed">
            Étudiant en développement web à l’IIM. Je conçois des sites et des applications web, du front-end au
            back-end, avec une attention particulière à l’expérience utilisateur.
          </p>
          <div className="fade-up [animation-delay:600ms] md:col-span-5 lg:col-span-6 flex flex-wrap gap-3 md:justify-end">
            <Link href="/projets" className="group btn btn-primary">
              Voir mes projets <Arrow />
            </Link>
            <Link href="/a-propos" className="group btn btn-ghost">
              À propos <Arrow />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
