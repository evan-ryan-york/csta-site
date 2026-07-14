import type { Metadata } from "next";
import TutorialDeck from "@/components/TutorialDeck";
import { STAGES } from "@/lib/tutorial";

export const metadata: Metadata = {
  title: "Build an app",
  description:
    "A step-by-step walkthrough of building a real, working web app with agentic coding tools — from a rough idea to a deployed product, including the parts that broke.",
};

export default function BuildAnAppPage() {
  const steps = STAGES.reduce((n, s) => n + s.steps.length, 0);

  return (
    <main className="flex flex-1 flex-col">
      <header className="mx-auto w-full max-w-6xl px-6 pt-16 sm:pt-20">
        <p className="font-mono text-sm uppercase tracking-widest text-foreground/50">
          Walkthrough
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Building a real app with agentic coding tools
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-pretty text-foreground/70">
          One idea — a nutrition tracker — taken from a rough note to a working,
          deployed web app. This is not one prompt into one tool. It is the
          sequence a working developer actually uses: clarify the spec, let a
          model attack it, run agents in parallel, and debug what they get wrong.
        </p>
        <p className="mt-4 max-w-2xl leading-relaxed text-pretty text-foreground/60">
          {steps} steps, captured from {STAGES.length} screen recordings. Nothing
          is edited out — the merge conflicts, the missing API key, and the bug
          that turned out not to be a bug are all here, because that is the part
          you actually need to see.
        </p>
        <p className="mt-6 font-mono text-xs text-foreground/45">
          Use &larr; and &rarr; to move through the steps.
        </p>
      </header>

      <TutorialDeck stages={STAGES} />
    </main>
  );
}
