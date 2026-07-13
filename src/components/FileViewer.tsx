"use client";

import { useState } from "react";

export default function FileViewer({
  filename,
  content,
  downloadHref,
}: {
  filename: string;
  content: string;
  downloadHref: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be unavailable; the text is still selectable.
    }
  }

  return (
    <div className="overflow-hidden rounded-xl border border-foreground/10 bg-foreground/[0.03]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-foreground/10 px-4 py-2.5">
        <span className="font-mono text-xs text-foreground/50">{filename}</span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={copy}
            className="rounded-md border border-foreground/15 px-2.5 py-1 font-mono text-xs text-foreground/60 transition hover:border-foreground/35 hover:text-foreground"
          >
            {copied ? "Copied" : "Copy"}
          </button>
          <a
            href={downloadHref}
            download={filename}
            className="rounded-md border border-foreground/15 px-2.5 py-1 font-mono text-xs text-foreground/60 transition hover:border-foreground/35 hover:text-foreground"
          >
            Download
          </a>
        </div>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-relaxed">
        <code>{content}</code>
      </pre>
    </div>
  );
}
