import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-24">
      <div className="max-w-xl text-center">
        <p className="font-mono text-sm uppercase tracking-widest text-foreground/50">
          CSTA
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance sm:text-6xl">
          Hello, World.
        </h1>
        <p className="mt-6 text-lg text-pretty text-foreground/70">
          A companion resource site for a conference presentation. Content
          coming soon.
        </p>
        <Link
          href="/setting-up-claude-code"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-foreground px-6 font-medium text-background transition hover:opacity-90"
        >
          Setting up Claude Code &rarr;
        </Link>
      </div>
    </main>
  );
}
