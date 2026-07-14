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

// The default stack. Ordered roughly as you meet each piece, not alphabetically.
const STACK = [
  {
    name: "React",
    href: "https://react.dev",
    what: "the UI library everything else here is built around, and the one with the most training data behind it.",
  },
  {
    name: "Next.js",
    href: "https://nextjs.org",
    what: "the framework on top of React. Gives you routing, and a backend for API calls and data.",
  },
  {
    name: "TypeScript",
    href: "https://www.typescriptlang.org",
    what: "JavaScript with types. The types catch a whole class of agent mistakes before the app ever runs.",
  },
  {
    name: "Tailwind",
    href: "https://tailwindcss.com",
    what: "styling written directly on the element. Agents are unusually good at it, and it avoids a sprawl of CSS files.",
  },
  {
    name: "Supabase",
    href: "https://supabase.com",
    what: "the database, plus login and file storage. Use it the moment you need more than one user.",
  },
  {
    name: "GitHub",
    href: "https://github.com",
    what: "where the code lives and every change is recorded. It is what makes parallel agents and undo possible.",
  },
  {
    name: "Vercel",
    href: "https://vercel.com",
    what: "publishes the app to a real URL. Connect the GitHub repo and each push deploys itself.",
  },
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

      <a
        href="https://claude-session-one.vercel.app/workshop"
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-10 block rounded-2xl border border-foreground/20 bg-foreground/[0.03] p-6 transition hover:border-foreground/40 hover:bg-foreground/[0.05] sm:p-8"
      >
        <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
          Start with this
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          The Claude Code workshop
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-pretty text-foreground/75">
          A full three-hour workshop I built for learning Claude Code hands-on,
          with a <strong>beginner track</strong> and an{" "}
          <strong>advanced track</strong>
          {" so you can join at whatever level you’re at. If you only open one thing on this page, open this."}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition group-hover:gap-2.5">
          Open the workshop <span aria-hidden="true">&rarr;</span>
        </span>
      </a>

      <nav aria-label="Sections" className="mt-10 flex flex-wrap gap-2">
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
              Pick a stack the models know cold. An obscure or outdated one will
              fight you the whole way, because the model has seen far less of it.
              For almost any web app, this is the boring, well-trodden set worth
              defaulting to: <strong>React</strong> and <strong>Next.js</strong>{" "}
              in <strong>TypeScript</strong>, styled with{" "}
              <strong>Tailwind</strong>, data in <strong>Supabase</strong>,
              versioned on <strong>GitHub</strong>, deployed to{" "}
              <strong>Vercel</strong>.
            </>
          }
        >
          <ul className="-mt-2 grid max-w-3xl gap-x-8 gap-y-2.5 text-sm leading-relaxed text-foreground/70 sm:grid-cols-2">
            {STACK.map((s) => (
              <li key={s.name} className="flex gap-2">
                <span aria-hidden="true" className="text-foreground/30">
                  &bull;
                </span>
                <span>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-foreground underline underline-offset-4 decoration-foreground/25 transition hover:decoration-foreground"
                  >
                    {s.name}
                  </a>{" "}
                  — {s.what}
                </span>
              </li>
            ))}
          </ul>

          <h3 className="mt-12 text-xl font-semibold tracking-tight">
            The app from the walkthrough
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground/65">
            Everything built in the walkthrough, on that stack — the spec, the
            plan the agents executed, the tests, and the finished app.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card
              href="https://github.com/evan-ryan-york/health-tracking-app"
              external
              meta="GitHub"
              title="health-tracking-app"
              cta="Open the repo"
            >
              The nutrition tracker from the walkthrough, exactly as the agents
              left it. Read <code className="font-mono">docs/</code> for the spec
              and plan the agents were handed.
            </Card>
          </div>

          <h3 className="mt-12 text-xl font-semibold tracking-tight">
            Files to copy
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground/65">
            Copy-and-paste files that change how Claude Code behaves. Skills live
            in <code className="font-mono">.claude/skills/</code> in your project
            and load automatically when the task matches. Every file below has a
            copy button and a download link.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
