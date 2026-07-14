"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Add future pages here and they show up in the menu automatically.
// Set external: true for anything that isn't a page on this site.
const NAV_LINKS = [
  { href: "/setting-up-claude-code", label: "Setting up Claude Code" },
  { href: "/resources", label: "Resources" },
  {
    href: "https://docs.google.com/presentation/d/12ZHz2Y5yv-GD8Pv1DScaGDi6CmSd_jzW/edit?slide=id.p1#slide=id.p1",
    label: "Session deck",
    external: true,
  },
];

const BASE_CLASS =
  "rounded-full px-3 py-1.5 text-sm font-medium transition sm:px-4";
const INACTIVE_CLASS =
  "text-foreground/60 hover:bg-foreground/5 hover:text-foreground";

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-6 py-4"
      >
        <Link
          href="/"
          className="font-mono text-sm font-semibold uppercase tracking-widest transition hover:opacity-70"
        >
          CSTA
        </Link>

        <ul className="flex flex-wrap items-center justify-end gap-1 sm:gap-2">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${BASE_CLASS} ${INACTIVE_CLASS} inline-flex items-center gap-1.5`}
                >
                  {link.label}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3 w-3 opacity-60"
                    aria-hidden="true"
                  >
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </a>
              ) : (
                <Link
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={`${BASE_CLASS} ${
                    pathname === link.href
                      ? "bg-foreground/10 text-foreground"
                      : INACTIVE_CLASS
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
