"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ScrollChapters({
  chapters,
}: {
  chapters: Array<{ eyebrow: string; title: string; body: string }>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const progressBar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="story" ref={ref} className="relative mx-auto max-w-6xl px-5 sm:px-8">
      <div className="sticky top-0 z-10 -mx-5 bg-[color:var(--bg0)]/70 px-5 py-5 backdrop-blur sm:-mx-8 sm:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold tracking-wide text-white/70">Scroll-driven chapters</h2>
          <div className="h-1 w-40 overflow-hidden rounded-full bg-white/10">
            <motion.div className="h-full bg-[color:var(--accent)]" style={{ width: progressBar }} />
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {chapters.map((c, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_80px_-50px_rgba(0,0,0,0.9)]"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.14),transparent_55%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,color-mix(in_srgb,var(--accent)_40%,transparent),transparent_60%)]" />
            </div>
            <div className="relative">
              <div className="text-xs font-semibold text-[color:var(--muted)]">{c.eyebrow}</div>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">{c.title}</h3>
              <p className="mt-4 text-pretty leading-7 text-white/75">{c.body}</p>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
