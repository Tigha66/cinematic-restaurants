import { notFound } from "next/navigation";
import Link from "next/link";
import { getRestaurant } from "@/lib/restaurants";
import { CinematicHero } from "@/components/cinematic/CinematicHero";
import { ScrollChapters } from "@/components/cinematic/ScrollChapters";
import { SignatureDishes } from "@/components/cinematic/SignatureDishes";
import { FooterCTA } from "@/components/cinematic/FooterCTA";

export default async function RestaurantPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const r = getRestaurant(slug);
  if (!r) return notFound();

  return (
    <div
      className="min-h-dvh text-[color:var(--ink)]"
      style={{
        // @ts-expect-error CSS variables
        "--bg0": r.palette.bg0,
        "--bg1": r.palette.bg1,
        "--ink": r.palette.ink,
        "--muted": r.palette.muted,
        "--accent": r.palette.accent,
        "--accent2": r.palette.accent2,
      }}
    >
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(1200px_circle_at_20%_0%,var(--bg1),var(--bg0))]" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:72px_72px]" />

      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" className="text-xs font-semibold tracking-wide text-white/75 hover:text-white">
            Cinematic Restaurant Concepts
          </Link>
          <nav className="flex items-center gap-3 text-xs text-white/70">
            <a className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur hover:bg-white/10" href="#story">
              Story
            </a>
            <a className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur hover:bg-white/10" href="#menu">
              Signatures
            </a>
            <a
              className="rounded-full bg-[color:var(--accent)] px-3 py-1.5 font-semibold text-black"
              href={r.url}
              target="_blank"
              rel="noreferrer"
            >
              Original
            </a>
          </nav>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </header>

      <main>
        <CinematicHero
          name={r.name}
          tagline={r.tagline}
          locationLine={r.locationLine}
          intro={r.intro}
          accent={r.palette.accent}
        />

        <ScrollChapters chapters={r.chapters} />

        <SignatureDishes signatures={r.signatures} />

        <FooterCTA label={r.cta.label} href={r.cta.href} note={r.cta.note} />
      </main>
    </div>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const r = getRestaurant(slug);
  if (!r) return {};
  return {
    title: `${r.name} — cinematic concept`,
    description: r.tagline,
    openGraph: {
      title: `${r.name} — cinematic concept`,
      description: r.tagline,
      url: `/${r.key}`,
    },
  };
}
