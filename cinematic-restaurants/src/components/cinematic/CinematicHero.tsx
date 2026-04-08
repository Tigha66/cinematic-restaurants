"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ThreeMark = dynamic(
  () => import("./ThreeMark").then((m) => m.ThreeMark),
  { ssr: false }
);

export function CinematicHero({
  name,
  tagline,
  locationLine,
  intro,
  accent,
}: {
  name: string;
  tagline: string;
  locationLine: string;
  intro: string;
  accent: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const blur = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const filter = useTransform(blur, [0, 10], ["blur(0px)", "blur(10px)"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.15]);

  return (
    <section ref={ref} className="relative overflow-hidden pt-24 sm:pt-28">
      <motion.div
        style={{ y, filter, opacity }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,color-mix(in_srgb,var(--accent)_55%,transparent),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,color-mix(in_srgb,var(--accent2)_45%,transparent),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.55))]" />
      </motion.div>

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[color:var(--muted)] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: accent }} />
            {locationLine}
          </div>

          <h1 className="mt-6 text-balance text-5xl font-semibold tracking-tight sm:text-6xl">
            {name}
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-lg text-[color:var(--muted)] sm:text-xl">
            {tagline}
          </p>

          <p className="mt-8 max-w-2xl text-pretty leading-7 text-white/80">
            {intro}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#story"
              className="rounded-full bg-[color:var(--accent)] px-5 py-2.5 text-sm font-semibold text-black shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_16px_50px_-18px_color-mix(in_srgb,var(--accent)_55%,transparent)]"
            >
              Enter the story
            </a>
            <a
              href="#menu"
              className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/90 backdrop-blur hover:bg-white/10"
            >
              Signature moments
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center lg:justify-end">
          <div className="rounded-[34px] border border-white/10 bg-white/5 p-5 shadow-[0_10px_70px_-30px_rgba(0,0,0,0.8)] backdrop-blur">
            <ThreeMark accent={accent} />
            <div className="mt-4 flex items-center justify-between text-xs text-white/60">
              <span>Realtime 3D mark</span>
              <span className="font-mono">R3F</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-6xl px-5 sm:px-8">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
