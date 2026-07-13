import type { Metadata } from "next";
import { Card, Section } from "@/components/ResourceCard";
import VideoCard from "@/components/VideoCard";
import {
  CHANNELS,
  OPINION,
  SHIP_SAFELY,
  START_HERE,
  THINK_CRITICALLY,
  WATCH,
  type Stance,
} from "@/lib/resources";
import { SKILLS } from "@/lib/skills";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Everything referenced in the talk: official docs, talks worth watching, copy-and-paste files, security and accessibility references, and the research — including the research that argues against me.",
};

const SECTIONS = [
  { id: "start-here", label: "Start here" },
  { id: "watch", label: "Watch" },
  { id: "build-better", label: "Build better" },
  { id: "ship-safely", label: "Ship safely" },
  { id: "think-critically", label: "Think critically" },
];

const STANCE_STYLES: Record<Stance, string> = {
  challenges:
    "border-rose-500/30 bg-rose-500/10 text-rose-700 dark:text-rose-300",
  supports:
    "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  mixed:
    "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300",
};

const STANCE_LABELS: Record<Stance, string> = {
  challenges: "Challenges the case for AI tools",
  supports: "Supports the case for AI tools",
  mixed: "Cuts both ways",
};

function StanceBadge({ stance }: { stance: Stance }) {
  return (
    <span
      className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium ${STANCE_STYLES[stance]}`}
    >
      {STANCE_LABELS[stance]}
    </span>
  );
}

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
            a market he is invested in. Worth hearing, but it is a prediction,
            not evidence — and it should not be weighed like the research further
            down this page.
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

        <Section
          id="ship-safely"
          title="Ship safely"
          lede="Claude Code will happily write code that works and leaks. These are the references that tell you what 'working' is supposed to mean."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SHIP_SAFELY.map((l) => (
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
          id="think-critically"
          title="Think critically"
          lede={
            <>
              <strong>
                Some of this contradicts what I argued on stage. That is
                deliberate.
              </strong>{" "}
              If a claim only survives when you hide the counter-evidence, it was
              never worth making. Each item is labelled with whether it supports
              or undercuts the case for these tools. Read the ones that annoy you
              first.
            </>
          }
        >
          <div className="space-y-12">
            {THINK_CRITICALLY.map((group) => (
              <div key={group.topic}>
                <h3 className="text-xl font-semibold tracking-tight">
                  {group.topic}
                </h3>
                <div className="mt-5 space-y-4">
                  {group.studies.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block rounded-xl border border-foreground/10 p-5 transition hover:border-foreground/30 hover:bg-foreground/[0.02]"
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <StanceBadge stance={s.stance} />
                        <span className="font-mono text-xs text-foreground/45">
                          {s.year}
                        </span>
                      </div>
                      <h4 className="mt-3 font-semibold leading-snug tracking-tight">
                        {s.title}
                      </h4>
                      <p className="mt-1 text-sm text-foreground/55">
                        {s.source}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                        {s.finding}
                      </p>
                      {s.caveat ? (
                        <p className="mt-3 border-l-2 border-foreground/15 pl-3 text-sm leading-relaxed text-foreground/55">
                          {s.caveat}
                        </p>
                      ) : null}
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground/60 transition group-hover:text-foreground">
                        Read the source <span aria-hidden="true">&rarr;</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
}
