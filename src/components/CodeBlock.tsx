"use client";

import { useState } from "react";

export default function CodeBlock({
  code,
  label,
}: {
  code: string;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard is unavailable over plain http or without permission;
      // the code is still selectable by hand.
    }
  }

  return (
    <div className="group relative my-4 overflow-hidden rounded-xl border border-foreground/10 bg-foreground/[0.03]">
      {label ? (
        <div className="border-b border-foreground/10 px-4 py-2 font-mono text-xs uppercase tracking-wider text-foreground/45">
          {label}
        </div>
      ) : null}
      <div className="flex items-start gap-3 p-4">
        <pre className="min-w-0 flex-1 overflow-x-auto font-mono text-sm leading-relaxed">
          <code>{code}</code>
        </pre>
        <button
          type="button"
          onClick={copy}
          aria-label={copied ? "Copied" : "Copy to clipboard"}
          className="shrink-0 rounded-md border border-foreground/15 px-2.5 py-1 font-mono text-xs text-foreground/60 transition hover:border-foreground/35 hover:text-foreground"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
}
