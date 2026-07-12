"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Add future resource pages here and they show up in the menu automatically.
const NAV_LINKS = [
  { href: "/setting-up-claude-code", label: "Setting up Claude Code" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto flex w-full max-w-5xl items-center justify-between gap-6 px-6 py-4"
      >
        <Link
          href="/"
          className="font-mono text-sm font-semibold uppercase tracking-widest transition hover:opacity-70"
        >
          CSTA
        </Link>

        <ul className="flex items-center gap-1 sm:gap-2">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-3 py-1.5 text-sm font-medium transition sm:px-4 ${
                    active
                      ? "bg-foreground/10 text-foreground"
                      : "text-foreground/60 hover:bg-foreground/5 hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
