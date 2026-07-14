"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// Add future pages here and they show up in the menu automatically.
// Set external: true for anything that isn't a page on this site.
const NAV_LINKS = [
  { href: "/setting-up-claude-code", label: "Setting up Claude Code" },
  { href: "/build-an-app", label: "Build an app" },
  { href: "/resources", label: "Resources" },
  {
    href: "https://docs.google.com/presentation/d/12ZHz2Y5yv-GD8Pv1DScaGDi6CmSd_jzW/edit?slide=id.p1#slide=id.p1",
    label: "Session deck",
    external: true,
  },
  {
    href: "https://health-tracking-app-beta.vercel.app/",
    label: "Health App",
    external: true,
  },
  {
    href: "https://www.youtube.com/watch?v=JT1CLJ61ktk",
    label: "Build Demo Video",
    external: true,
  },
];

function OutboundIcon() {
  return (
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
  );
}

function NavItem({
  link,
  active,
  onNavigate,
  className,
}: {
  link: (typeof NAV_LINKS)[number];
  active: boolean;
  onNavigate?: () => void;
  className: string;
}) {
  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onNavigate}
        className={`${className} inline-flex items-center gap-1.5 text-foreground/60 hover:bg-foreground/5 hover:text-foreground`}
      >
        {link.label}
        <OutboundIcon />
      </a>
    );
  }

  return (
    <Link
      href={link.href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={`${className} ${
        active
          ? "bg-foreground/10 text-foreground"
          : "text-foreground/60 hover:bg-foreground/5 hover:text-foreground"
      }`}
    >
      {link.label}
    </Link>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  // Each link closes the menu itself via onNavigate, so no effect is needed.
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-6 py-4"
      >
        <Link
          href="/"
          className="shrink-0 font-mono text-sm font-semibold uppercase tracking-widest transition hover:opacity-70"
        >
          CSTA
        </Link>

        {/* Wide screens: everything inline. Five labels need ~1024px;
            below that they wrap inside their pills, so collapse instead. */}
        <ul className="hidden items-center gap-2 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <NavItem
                link={link}
                active={pathname === link.href}
                className="whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition"
              />
            </li>
          ))}
        </ul>

        {/* Narrower than lg: collapse behind a menu. */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-3 py-1.5 text-sm font-medium text-foreground/70 transition hover:border-foreground/40 hover:text-foreground lg:hidden"
        >
          Menu
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="h-4 w-4"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-foreground/10 bg-background px-6 py-3 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <NavItem
                  link={link}
                  active={pathname === link.href}
                  onNavigate={() => setOpen(false)}
                  className="flex rounded-lg px-3 py-2.5 text-base font-medium transition"
                />
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
