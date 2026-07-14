import type { Metadata } from "next";
import TutorialDeck from "@/components/TutorialDeck";
import { STAGES } from "@/lib/tutorial";

export const metadata: Metadata = {
  title: "Build an app",
  description:
    "A step-by-step walkthrough of building a real, working web app with agentic coding tools — from a rough idea to a deployed product, including the parts that broke.",
};

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
        <p className="mt-4 text-lg leading-relaxed text-pretty text-foreground/70">
          One idea — a nutrition tracker — taken from a rough note to a working,
          deployed web app. This is not one prompt into one tool. It is the
          sequence a working developer actually uses: clarify the spec, let a
          model attack it, run agents in parallel, and debug what they get wrong.
        </p>
        <p className="mt-4 font-mono text-xs text-foreground/45">
          Use &larr; and &rarr; to move through the steps.
        </p>
      </header>

      <TutorialDeck stages={STAGES} />
    </main>
  );
}
