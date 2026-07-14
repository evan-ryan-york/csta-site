"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useSyncExternalStore } from "react";
import type { Stage } from "@/lib/tutorial";

// The URL hash is the single source of truth for "which step am I on", so a step
// can be linked directly and the back button behaves. replaceState does not fire
// hashchange, so `go` announces the move on a private event instead.
const HASH_EVENT = "tutorialdeck:hash";

function subscribeToHash(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  window.addEventListener(HASH_EVENT, onChange);
  return () => {
    window.removeEventListener("hashchange", onChange);
    window.removeEventListener(HASH_EVENT, onChange);
  };
}

function readHash() {
  const n = parseInt(window.location.hash.slice(1), 10);
  return Number.isFinite(n) && n >= 1 ? n - 1 : 0;
}

// Frames are all exported from the same 3456x2234 screen recording, scaled to 1600px wide.
const FRAME_W = 1600;
const FRAME_H = 1034;

type Slide = {
  kind: "step";
  stage: Stage;
  stageIndex: number;
  stepIndex: number;
  step: Stage["steps"][number];
};

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

export default function TutorialDeck({ stages }: { stages: Stage[] }) {
  const slides = useMemo<Slide[]>(
    () =>
      stages.flatMap((stage, stageIndex) =>
        stage.steps.map((step, stepIndex) => ({
          kind: "step" as const,
          stage,
          stageIndex,
          stepIndex,
          step,
        })),
      ),
    [stages],
  );

  // Index of the first slide of each stage, so the chapter rail can jump.
  const stageStarts = useMemo(() => {
    const starts: number[] = [];
    let running = 0;
    for (const stage of stages) {
      starts.push(running);
      running += stage.steps.length;
    }
    return starts;
  }, [stages]);

  const raw = useSyncExternalStore(subscribeToHash, readHash, () => 0);
  const i = Math.min(raw, slides.length - 1);

  const go = useCallback(
    (n: number) => {
      const next = Math.max(0, Math.min(slides.length - 1, n));
      history.replaceState(null, "", `#${next + 1}`);
      window.dispatchEvent(new Event(HASH_EVENT));
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [slides.length],
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const target = e.target as HTMLElement | null;
      if (target && /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName)) return;

      if (e.key === "ArrowRight" || e.key === "PageDown") {
        e.preventDefault();
        go(i + 1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        go(i - 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        go(0);
      } else if (e.key === "End") {
        e.preventDefault();
        go(slides.length - 1);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [i, go, slides.length]);

  const slide = slides[i];
  const { stage, stageIndex, stepIndex, step } = slide;
  const progress = ((i + 1) / slides.length) * 100;

  return (
    <div className="flex flex-1 flex-col">
      {/* Chapter rail — the seven recordings, in order. */}
      <nav
        aria-label="Stages"
        className="mx-auto flex w-full max-w-6xl flex-wrap gap-1.5 px-6 pt-8"
      >
        {stages.map((s, n) => {
          const active = n === stageIndex;
          return (
            <button
              key={s.number}
              type="button"
              onClick={() => go(stageStarts[n])}
              aria-current={active ? "step" : undefined}
              title={s.title}
              className={`rounded-full border px-3 py-1 font-mono text-xs transition ${
                active
                  ? "border-foreground/40 bg-foreground/10 text-foreground"
                  : "border-foreground/15 text-foreground/50 hover:border-foreground/35 hover:text-foreground"
              }`}
            >
              {s.number}. {s.short}
            </button>
          );
        })}
      </nav>

      <div className="mx-auto grid w-full max-w-6xl flex-1 items-start gap-10 px-6 py-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
        {/* Text */}
        <div className="lg:sticky lg:top-28">
          <div className="flex items-center gap-3">
            <span className="rounded border border-foreground/20 bg-foreground/[0.04] px-1.5 py-0.5 font-mono text-xs font-semibold tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="h-px w-5 bg-foreground/20" aria-hidden="true" />
            <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-foreground/50">
              {stage.short}
            </span>
            <span className="ml-auto font-mono text-xs tabular-nums text-foreground/40">
              {formatTime(step.at)}
            </span>
          </div>

          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
            {step.title}
          </h2>

          <div className="mt-4 space-y-3">
            {step.body.map((p, n) => (
              <p
                key={n}
                className="leading-relaxed text-pretty text-foreground/70"
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
          </div>

          {step.quote ? (
            <blockquote className="mt-6 border-l-2 border-foreground/30 pl-4 text-[0.95rem] italic leading-relaxed text-foreground/80">
              &ldquo;{step.quote}&rdquo;
            </blockquote>
          ) : null}

          <p className="mt-6 font-mono text-xs text-foreground/40">
            Video {stage.number} of {stages.length} &middot; step {stepIndex + 1}{" "}
            of {stage.steps.length}
          </p>
        </div>

        {/* Screenshot */}
        <figure className="min-w-0">
          <Image
            key={step.img}
            src={`/tutorial/${step.img}`}
            alt={step.title}
            width={FRAME_W}
            height={FRAME_H}
            priority={i === 0}
            className="w-full rounded-lg border border-foreground/10 shadow-sm"
          />
        </figure>
      </div>

      {/* Controls */}
      <div className="sticky bottom-0 z-40 border-t border-foreground/10 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center gap-4 px-6 py-3">
          <span className="font-mono text-xs tabular-nums text-foreground/50">
            {i + 1} / {slides.length}
          </span>
          <span
            className="relative h-px flex-1 bg-foreground/15"
            aria-hidden="true"
          >
            <span
              className="absolute inset-y-0 left-0 bg-foreground transition-[width] duration-300"
              style={{ width: `${progress}%` }}
            />
          </span>
          <span className="flex gap-1.5">
            <button
              type="button"
              onClick={() => go(i - 1)}
              disabled={i === 0}
              className="rounded-full border border-foreground/15 px-3 py-1.5 text-sm font-medium transition enabled:hover:border-foreground/40 disabled:opacity-35"
            >
              <span aria-hidden="true">&larr;</span>
              <span className="sr-only">Previous step</span>
            </button>
            <button
              type="button"
              onClick={() => go(i + 1)}
              disabled={i === slides.length - 1}
              className="rounded-full border border-foreground/15 px-3 py-1.5 text-sm font-medium transition enabled:hover:border-foreground/40 disabled:opacity-35"
            >
              <span aria-hidden="true">&rarr;</span>
              <span className="sr-only">Next step</span>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
