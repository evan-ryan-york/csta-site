import type { Metadata } from "next";
import { Card, Section } from "@/components/ResourceCard";
import VideoCard from "@/components/VideoCard";
import { CHANNELS, OPINION, START_HERE, WATCH } from "@/lib/resources";
import { SKILLS } from "@/lib/skills";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Everything referenced in the talk: the official docs, talks worth watching, and copy-and-paste files for your own projects.",
};

const SECTIONS = [
  { id: "start-here", label: "Start here" },
  { id: "watch", label: "Watch" },
  { id: "build-better", label: "Build better" },
];

export default function ResourcesPage() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16 sm:py-20">
      <header className="max-w-2xl">
        <p className="font-mono text-sm uppercase tracking-widest text-foreground/50">
          Reference
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Resources
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-pretty text-foreground/70">
          Everything referenced in the talk, grouped so you can find the one
          thing you came for. The files are yours to copy — no attribution
          needed.
        </p>
      </header>

      <nav aria-label="Sections" className="mt-8 flex flex-wrap gap-2">
        {SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="rounded-full border border-foreground/15 px-4 py-1.5 text-sm font-medium text-foreground/70 transition hover:border-foreground/40 hover:text-foreground"
          >
            {s.label}
          </a>
        ))}
      </nav>

      <div className="mt-8">
        <Section
          id="start-here"
          title="Start here"
          lede={
            <>
              The official documentation. If you read only one, make it{" "}
              <strong>Best practices</strong> — it argues for planning first,
              course-correcting early, using subagents deliberately, managing
              context, and reviewing adversarially rather than accepting whatever
              comes out. That is essentially the whole talk, from the people who
              built the thing.
            </>
          }
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {START_HERE.map((l) => (
              <Card
                key={l.href}
                href={l.href}
                external
                meta={l.meta}
                title={l.title}
                cta="Read"
              >
                {l.description}
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="watch"
          title="Watch"
          lede="Conversations with the people building these tools, and using them at scale."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WATCH.map((v) => (
              <VideoCard key={v.id} video={v} />
            ))}
          </div>

          <h3 className="mt-12 text-xl font-semibold tracking-tight">
            Opinion and prediction
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground/65">
            Filed separately on purpose. This is a venture capitalist forecasting
            a market he is invested in. Worth hearing, but treat it as a
            prediction, not as evidence.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {OPINION.map((v) => (
              <VideoCard key={v.id} video={v} />
            ))}
          </div>

          <h3 className="mt-12 text-xl font-semibold tracking-tight">
            Keep up with it
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CHANNELS.map((l) => (
              <Card
                key={l.href}
                href={l.href}
                external
                meta={l.meta}
                title={l.title}
                cta="Open"
              >
                {l.description}
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="build-better"
          title="Build better"
          lede={
            <>
              Copy-and-paste files that change how Claude Code behaves. Skills
              live in <code className="font-mono">.claude/skills/</code> in your
              project and load automatically when the task matches. Every file
              below has a copy button and a download link.
            </>
          }
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map((s) => (
              <Card
                key={s.slug}
                href={`/resources/${s.slug}`}
                meta="Download"
                title={s.title}
                cta="View file"
              >
                {s.description}
              </Card>
            ))}
          </div>
        </Section>

      </div>
    </main>
  );
}
