import { readFile } from "fs/promises";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import path from "path";
import FileViewer from "@/components/FileViewer";
import { getSkill, SKILLS } from "@/lib/skills";

export function generateStaticParams() {
  return SKILLS.map((skill) => ({ slug: skill.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const skill = getSkill(slug);
  if (!skill) return {};
  return { title: skill.title, description: skill.description };
}

async function readSkillFile(slug: string) {
  const file = path.join(process.cwd(), "public", "skills", `${slug}.md`);
  return readFile(file, "utf8");
}

export default async function SkillPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const skill = getSkill(slug);
  if (!skill) notFound();

  const content = await readSkillFile(slug);
  const filename = slug === "claude-md" ? "CLAUDE.md" : `${slug}.md`;

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16 sm:py-20">
      <Link
        href="/resources"
        className="font-mono text-sm text-foreground/50 transition hover:text-foreground"
      >
        &larr; All resources
      </Link>

      <header className="mt-8">
        <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {skill.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-pretty text-foreground/70">
          {skill.description}
        </p>
      </header>

      <div className="mt-8 rounded-xl border border-foreground/10 bg-foreground/[0.03] p-5 text-sm leading-relaxed text-foreground/75">
        <p className="font-semibold text-foreground">How to use it</p>
        {slug === "claude-md" ? (
          <p className="mt-2">
            Save this as <code className="font-mono">CLAUDE.md</code> in the root
            folder of your project. Claude Code reads it automatically at the
            start of every session.
          </p>
        ) : slug === "technical-overview" ? (
          <p className="mt-2">
            This is an example, not a drop-in file. Use its structure as a model
            for documenting your own project, then keep the result in your repo
            so Claude can read it.
          </p>
        ) : (
          <p className="mt-2">
            Save this as{" "}
            <code className="font-mono">.claude/skills/{slug}/SKILL.md</code> in
            your project. Claude Code loads it automatically and uses it when the
            task matches.
          </p>
        )}
      </div>

      <div className="mt-8">
        <FileViewer
          filename={filename}
          content={content}
          downloadHref={`/skills/${slug}.md`}
        />
      </div>
    </main>
  );
}
