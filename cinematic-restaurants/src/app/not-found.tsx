import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-dvh bg-black text-white">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 px-6 py-24">
        <p className="text-xs font-semibold tracking-wide text-white/60">404</p>
        <h1 className="text-4xl font-semibold tracking-tight">That concept isn’t on the menu.</h1>
        <p className="text-white/70">Pick one of the restaurant concept pages from the index.</p>
        <Link
          className="mt-4 inline-flex w-fit rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black"
          href="/"
        >
          Back to index
        </Link>
      </div>
    </div>
  );
}
