import Link from "next/link";
import type { ReactNode } from "react";

export function Card({
  href,
  external,
  meta,
  title,
  children,
  cta,
}: {
  href: string;
  external?: boolean;
  meta?: string;
  title: string;
  children: ReactNode;
  cta: string;
}) {
  const inner = (
    <>
      {meta ? (
        <p className="font-mono text-xs uppercase tracking-wider text-foreground/45">
          {meta}
        </p>
      ) : null}
      <h3 className="mt-2 text-lg font-semibold leading-snug tracking-tight">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/70">
        {children}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground/60 transition group-hover:text-foreground">
        {cta} <span aria-hidden="true">&rarr;</span>
      </span>
    </>
  );

  const className =
    "group flex h-full flex-col rounded-xl border border-foreground/10 p-5 transition hover:border-foreground/30 hover:bg-foreground/[0.02]";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {inner}
    </Link>
  );
}

export function Section({
  id,
  title,
  lede,
  children,
}: {
  id: string;
  title: string;
  lede: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-foreground/10 py-12">
      <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-3 max-w-2xl leading-relaxed text-pretty text-foreground/70">
        {lede}
      </div>
      <div className="mt-8">{children}</div>
    </section>
  );
}
