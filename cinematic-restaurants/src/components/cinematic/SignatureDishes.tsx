"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

function TiltCard({ title, note, index }: { title: string; note: string; index: number }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useTransform(my, [-0.5, 0.5], [10, -10]);
  const ry = useTransform(mx, [-0.5, 0.5], [-12, 12]);
  const rxs = useSpring(rx, { stiffness: 180, damping: 18 });
  const rys = useSpring(ry, { stiffness: 180, damping: 18 });

  return (
    <motion.div
      onPointerMove={(e) => {
        const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      style={{ rotateX: rxs, rotateY: rys, transformStyle: "preserve-3d" }}
      className="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_25px_90px_-55px_rgba(0,0,0,0.95)]"
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl"
        style={{
          background:
            index % 2 === 0
              ? "radial-gradient(circle at 20% 20%, color-mix(in srgb, var(--accent) 35%, transparent), transparent 55%)"
              : "radial-gradient(circle at 80% 20%, color-mix(in srgb, var(--accent2) 30%, transparent), transparent 55%)",
        }}
      />
      <div style={{ transform: "translateZ(26px)" }} className="relative">
        <div className="text-xs font-semibold text-white/60">Signature</div>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-white/70">{note}</p>
        <div className="mt-6 inline-flex items-center gap-2 text-xs text-[color:var(--muted)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
          Hover tilt
        </div>
      </div>
    </motion.div>
  );
}

export function SignatureDishes({
  signatures,
}: {
  signatures: Array<{ title: string; note: string }>;
}) {
  return (
    <section id="menu" className="mx-auto max-w-6xl px-5 sm:px-8">
      <div className="mt-14">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Signature moments</h2>
            <p className="mt-3 max-w-xl text-white/70">
              Micro-interactions, depth, and typography — designed as components you can remix.
            </p>
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur">
            Scroll + 3D + motion
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {signatures.map((s, i) => (
            <TiltCard key={s.title} title={s.title} note={s.note} index={i} />
          ))}
        </div>

        <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
