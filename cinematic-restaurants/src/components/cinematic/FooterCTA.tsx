import Link from "next/link";

export function FooterCTA({ label, href, note }: { label: string; href: string; note: string }) {
  return (
    <footer className="mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">Ready for the real thing?</h3>
            <p className="mt-2 max-w-xl text-sm leading-6 text-white/70">{note}</p>
          </div>
          <a
            className="rounded-full bg-[color:var(--accent)] px-5 py-2.5 text-sm font-semibold text-black"
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            {label}
          </a>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-white/50">
        <p>
          Built as a cinematic component demo (Next.js + Tailwind + Framer Motion + R3F). Not affiliated with the
          restaurants.
        </p>
        <Link className="underline underline-offset-4 hover:text-white/80" href="/">
          Back to index
        </Link>
      </div>
    </footer>
  );
}
