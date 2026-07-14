import type { Metadata } from "next";
import Link from "next/link";
import CodeBlock from "@/components/CodeBlock";
import TutorialDeck from "@/components/TutorialDeck";
import { STAGES } from "@/lib/tutorial";

export const metadata: Metadata = {
  title: "Build an app",
  description:
    "A step-by-step walkthrough of building a real, working web app with agentic coding tools — from a rough idea to a deployed product, including the parts that broke.",
};

// The recording every slide below is a frame from, the app it produced, and the
// raw spec that started it — the document written in stage one.
const DEMO_VIDEO = "https://www.youtube.com/watch?v=JT1CLJ61ktk";
const LIVE_APP = "https://health-tracking-app-beta.vercel.app/";
const ORIGINAL_PRD =
  "https://docs.google.com/document/d/1sdord-5Gng1Nx-V5xrMRzBL32EW4EeWdNKjPnZBrI_g/edit?tab=t.c7aq6q3m9fii";

export default function BuildAnAppPage() {
  return (
    <main className="flex flex-1 flex-col">
      {/* Full width and tight: the header is preamble, so the slides should be
          reachable without scrolling past a column of text. */}
      <header className="mx-auto w-full max-w-6xl px-6 pt-12 sm:pt-14">
        <p className="font-mono text-sm uppercase tracking-widest text-foreground/50">
          Walkthrough
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Building a real app with agentic coding tools
        </h1>

        {/* The slides are frames from this recording and the app is what it
            produced, so both belong with the title rather than in the site nav. */}
        <div className="mt-5 flex flex-wrap items-center gap-2.5">
          <a
            href={ORIGINAL_PRD}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-foreground/[0.03] px-4 py-1.5 text-sm font-medium transition hover:border-foreground/40 hover:bg-foreground/[0.06]"
          >
            The original PRD
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3.5 w-3.5 text-foreground/40 transition group-hover:text-foreground/70"
              aria-hidden="true"
            >
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
          </a>

          <a
            href={DEMO_VIDEO}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full border border-foreground/20 bg-foreground/[0.03] py-1.5 pl-2 pr-4 text-sm font-medium transition hover:border-foreground/40 hover:bg-foreground/[0.06]"
          >
            <span
              aria-hidden="true"
              className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-foreground text-background"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            Watch the full demo video
            <span
              aria-hidden="true"
              className="text-foreground/40 transition group-hover:text-foreground/70"
            >
              &rarr;
            </span>
          </a>

          <a
            href={LIVE_APP}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-foreground/[0.03] px-4 py-1.5 text-sm font-medium transition hover:border-foreground/40 hover:bg-foreground/[0.06]"
          >
            Try the finished app
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3.5 w-3.5 text-foreground/40 transition group-hover:text-foreground/70"
              aria-hidden="true"
            >
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
          </a>
        </div>

        <p className="mt-5 text-lg leading-relaxed text-pretty text-foreground/70">
          One idea — a nutrition tracker — taken from a rough note to a working,
          deployed web app. This is not one prompt into one tool. It is the
          sequence a working developer actually uses: clarify the spec, let a
          model attack it, run agents in parallel, and debug what they get wrong.
        </p>
        <div className="mt-6 rounded-xl border border-foreground/15 bg-foreground/[0.03] p-4 sm:p-5">
          <p className="text-sm leading-relaxed text-pretty text-foreground/75">
            <strong className="font-semibold text-foreground">
              Before you start:
            </strong>{" "}
            this walkthrough assumes Claude Code is already installed and signed
            in on your machine. If it is not, set that up first — it takes a few
            minutes, and every step below depends on it.
          </p>
          <Link
            href="/setting-up-claude-code"
            className="group mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition hover:gap-2.5"
          >
            Setting up Claude Code{" "}
            <span aria-hidden="true" className="transition">
              &rarr;
            </span>
          </Link>

          <hr className="my-5 border-foreground/10" />

          <p className="text-sm leading-relaxed text-pretty text-foreground/75">
            <strong className="font-semibold text-foreground">
              Skeleton project prompt:
            </strong>{" "}
            once Claude Code is running inside a new, empty folder, this is the
            first thing to send it. It is the scaffold step from stage one, and
            it gets you a real, running app before you build anything real into
            it.
          </p>

          <CodeBlock
            label="Paste into Claude Code in an empty folder"
            code={`We are building a web app. Your job is to set up the structure of the web app so it's using up-to-date libraries and renders hello world.

The app should be a TypeScript / React / Next.js / Tailwind app that for now will not have authentication and will use localStorage as a database.

Use npm as the package manager, and set it up to deploy to Vercel. Don't create a git repo yet.

Build that app now, then tell me the command to run it locally.`}
          />
        </div>

        <p className="mt-6 font-mono text-xs text-foreground/45">
          Use &larr; and &rarr; to move through the steps.
        </p>
      </header>

      <TutorialDeck stages={STAGES} />
    </main>
  );
}
