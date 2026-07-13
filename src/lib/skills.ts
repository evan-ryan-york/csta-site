export type Skill = {
  slug: string;
  title: string;
  description: string;
};

/** Order here is the order they appear on the resources page. */
export const SKILLS: Skill[] = [
  {
    slug: "claude-md",
    title: "CLAUDE.md template",
    description:
      "The file Claude Code reads first in every session. Encode your project's conventions here once instead of repeating them in every prompt.",
  },
  {
    slug: "planning",
    title: "Planning skill",
    description:
      "Teaches Claude Code to plan before it builds. You are the architect; it is the builder. A builder without a blueprint makes a mess.",
  },
  {
    slug: "execute-plan",
    title: "Execute-plan skill",
    description:
      "Orchestrates a plan across subagents, building each step in isolation so the main context window stays clean.",
  },
  {
    slug: "tdd",
    title: "TDD skill",
    description:
      "Tests first, mock only at boundaries, and cover auth, validation, edge cases, and error paths — not just the happy path.",
  },
  {
    slug: "commit",
    title: "Commit skill",
    description:
      "Reviews the diff, scans for secrets, stages files deliberately, and writes a commit message that explains why.",
  },
  {
    slug: "commit-check",
    title: "Commit-check skill",
    description:
      "Runs build, lint, and type checks before a commit lands, so broken code never enters the repo.",
  },
  {
    slug: "compliance-check",
    title: "Compliance skill",
    description:
      "Scans changed files for accessibility, data-protection, and security violations before you ship.",
  },
  {
    slug: "pr-check",
    title: "PR-check skill",
    description:
      "Full verification — build, tests, lint, security, accessibility — before a pull request goes up.",
  },
  {
    slug: "submit-pr",
    title: "Submit-PR skill",
    description:
      "Pushes the branch and opens a well-formatted pull request through the GitHub CLI.",
  },
  {
    slug: "design-system",
    title: "Design-system skill",
    description:
      "Forces Claude to use your existing components and tokens instead of inventing one-off styles and hardcoded values.",
  },
  {
    slug: "technical-overview",
    title: "Technical-overview example",
    description:
      "A real project's architecture, package boundaries, and data flow, written up as a document. Use the structure as a template for your own.",
  },
];

export function getSkill(slug: string): Skill | undefined {
  return SKILLS.find((s) => s.slug === slug);
}
