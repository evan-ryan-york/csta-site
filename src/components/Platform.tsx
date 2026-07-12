"use client";

import { useSyncExternalStore, type ReactNode } from "react";

type OS = "mac" | "windows";

const STORAGE_KEY = "csta:platform";

// A tiny external store so every Platform block on the page stays in sync and
// the browser-only choice can be read without a hydration mismatch.
const listeners = new Set<() => void>();
let cached: OS | null = null;

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  return () => listeners.delete(onChange);
}

function getSnapshot(): OS {
  if (cached === null) {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    cached =
      saved === "mac" || saved === "windows"
        ? saved
        : /win/i.test(navigator.userAgent)
          ? "windows"
          : "mac";
  }
  return cached;
}

// The server has no way to know the visitor's OS, so it always renders macOS.
// React swaps in the real value right after hydration.
function getServerSnapshot(): OS {
  return "mac";
}

function setOs(next: OS) {
  cached = next;
  window.localStorage.setItem(STORAGE_KEY, next);
  listeners.forEach((listener) => listener());
}

function useOs(): OS {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function PlatformTabs() {
  const os = useOs();
  const tabs: { id: OS; label: string }[] = [
    { id: "mac", label: "macOS" },
    { id: "windows", label: "Windows" },
  ];

  return (
    <div
      role="tablist"
      aria-label="Operating system"
      className="inline-flex rounded-full border border-foreground/15 p-1"
    >
      {tabs.map((tab) => {
        const active = os === tab.id;
        return (
          <button
            key={tab.id}
            role="tab"
            type="button"
            aria-selected={active}
            onClick={() => setOs(tab.id)}
            className={`rounded-full px-5 py-1.5 text-sm font-medium transition ${
              active
                ? "bg-foreground text-background"
                : "text-foreground/60 hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

/** Renders whichever branch matches the platform selected at the top of the page. */
export function Platform({
  mac,
  windows,
}: {
  mac: ReactNode;
  windows: ReactNode;
}) {
  return <>{useOs() === "mac" ? mac : windows}</>;
}
