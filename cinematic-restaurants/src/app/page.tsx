import { RESTAURANTS } from "@/lib/restaurants";

export default function Home() {
  return (
    <div className="min-h-dvh bg-black text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.12] [background-image:radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.20),transparent_55%),radial-gradient(circle_at_70%_40%,rgba(56,189,248,0.20),transparent_60%),radial-gradient(circle_at_40%_90%,rgba(244,63,94,0.18),transparent_60%)]" />
      <header className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <p className="text-xs font-semibold tracking-wide text-white/60">Cinematic Restaurant Concepts</p>
        <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight sm:text-6xl">
          Scroll-driven storytelling. 3D marks. Premium motion.
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-white/70">
          Five concept redesigns inspired by cinematic component patterns (sticky chapters, depth, parallax, and
          tactile UI). Built for responsive, fast Vercel deploys.
        </p>
      </header>

      <main className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {RESTAURANTS.map((r) => (
            <a
              key={r.key}
              href={`/${r.key}`}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 shadow-[0_30px_120px_-90px_rgba(0,0,0,0.95)]"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at 20% 20%, color-mix(in srgb, " +
                    r.palette.accent +
                    " 35%, transparent), transparent 55%), radial-gradient(circle at 80% 80%, color-mix(in srgb, " +
                    r.palette.accent2 +
                    " 28%, transparent), transparent 60%)",
                }}
              />
              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-2xl font-semibold tracking-tight">{r.name}</h2>
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ background: r.palette.accent, boxShadow: `0 0 0 6px ${r.palette.accent}22` }}
                  />
                </div>
                <p className="mt-2 text-sm text-white/60">{r.locationLine}</p>
                <p className="mt-5 text-pretty text-sm leading-6 text-white/75">{r.tagline}</p>
                <div className="mt-8 inline-flex items-center gap-2 text-xs font-semibold text-white/70">
                  Open concept
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 text-xs text-white/50">
          <p>All content is placeholder copy. For demonstration only.</p>
          <a
            className="underline underline-offset-4 hover:text-white/80"
            href="https://vercel.com"
            target="_blank"
            rel="noreferrer"
          >
            Deploy on Vercel
          </a>
        </div>
      </main>
    </div>
  );
}
