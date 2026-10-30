"use client";

import { useEffect, useRef } from "react";

// Méridiens (tous les 20°) et parallèles de la sphère en fil de fer
const meridians = Array.from({ length: 9 }, (_, i) => i * 20);
const parallels = [-60, -30, 0, 30, 60];

export default function HeroGlobe() {
  const ref = useRef<HTMLDivElement>(null);

  // Inclinaison vers la souris, la boucle s'arrête dès que la sphère est en place
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const target = { x: 0, y: 0 };
    const cur = { x: 0, y: 0 };
    let raf = 0;

    const tick = () => {
      cur.x += (target.x - cur.x) * 0.06;
      cur.y += (target.y - cur.y) * 0.06;
      el.style.transform = `translate3d(${(cur.x * 24).toFixed(1)}px, ${(cur.y * 16).toFixed(1)}px, 0) rotateX(${(-cur.y * 16).toFixed(2)}deg) rotateY(${(cur.x * 22).toFixed(2)}deg)`;
      const moving = Math.abs(target.x - cur.x) + Math.abs(target.y - cur.y) > 0.001;
      raf = moving ? requestAnimationFrame(tick) : 0;
    };

    const onMove = (e: PointerEvent) => {
      target.x = (e.clientX / window.innerWidth) * 2 - 1;
      target.y = (e.clientY / window.innerHeight) * 2 - 1;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden="true" className="globe">
      <div className="globe-core" />
      <div ref={ref} className="globe-tilt">
        <div className="globe-spin">
          {meridians.map((deg) => (
            <span key={`m${deg}`} className={`globe-ring${deg === 0 ? " is-strong" : ""}`} style={{ transform: `rotateY(${deg}deg)` }} />
          ))}
          {parallels.map((lat) => {
            const rad = (lat * Math.PI) / 180;
            return (
              <span
                key={`p${lat}`}
                className={`globe-ring${lat === 0 ? " is-strong" : ""}`}
                style={{
                  transform: `translateY(${(-Math.sin(rad) * 50).toFixed(2)}%) rotateX(90deg) scale(${Math.cos(rad).toFixed(3)})`,
                }}
              />
            );
          })}
        </div>
        <div className="globe-orbit">
          <span className="globe-satellite" />
        </div>
      </div>
    </div>
  );
}
