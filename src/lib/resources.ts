export type Link = {
  title: string;
  href: string;
  meta?: string;
  description: string;
};

export const START_HERE: Link[] = [
  {
    title: "Claude Code overview",
    href: "https://code.claude.com/docs/en/overview",
    meta: "Anthropic docs",
    description:
      "What Claude Code actually is, and every way to run it — terminal, VS Code, desktop, web.",
  },
  {
    title: "Quickstart",
    href: "https://code.claude.com/docs/en/quickstart",
    meta: "Anthropic docs",
    description:
      "Your first session end to end: install, log in, ask a question, make an edit, commit it.",
  },
  {
    title: "Claude Code in VS Code",
    href: "https://code.claude.com/docs/en/vs-code",
    meta: "Anthropic docs",
    description:
      "If the terminal isn't your thing, run it inside your editor with inline diffs and @-mentions.",
  },
  {
    title: "Common workflows",
    href: "https://code.claude.com/docs/en/common-workflows",
    meta: "Anthropic docs",
    description:
      "Recipes for the things you'll actually do: explore a codebase, fix a bug, refactor, write tests, open a PR.",
  },
  {
    title: "Best practices",
    href: "https://code.claude.com/docs/en/best-practices",
    meta: "Anthropic docs · read this one",
    description:
      "The closest thing to a manual for using it well: plan first, course-correct early, use subagents deliberately, manage context, and review adversarially instead of accepting output.",
  },
];

export type Video = {
  title: string;
  guest: string;
  show: string;
  id: string;
  href: string;
};

export const WATCH: Video[] = [
  {
    title: "What happens after coding is solved",
    guest: "Boris Cherny — creator of Claude Code",
    show: "Lenny's Podcast",
    id: "We7BZVKbCVw",
    href: "https://www.youtube.com/watch?v=We7BZVKbCVw",
  },
  {
    title: "Building the most AI-pilled engineering team in the world",
    guest: "Fiona Fung — Anthropic",
    show: "Lenny's Podcast",
    id: "Ybrl4FYM57c",
    href: "https://www.youtube.com/watch?v=Ybrl4FYM57c",
  },
  {
    title: "How Anthropic's product team moves faster than anyone else",
    guest: "Cat Wu — Head of Product, Claude Code",
    show: "Lenny's Podcast",
    id: "PplmzlgE0kg",
    href: "https://www.youtube.com/watch?v=PplmzlgE0kg",
  },
  {
    title: "The design process is dead. Here's what's replacing it",
    guest: "Jenny Wen — Head of Design, Claude",
    show: "Lenny's Podcast",
    id: "eh8bcBIAAFo",
    href: "https://www.youtube.com/watch?v=eh8bcBIAAFo",
  },
];

/** Kept separate on purpose — see the note rendered above this section. */
export const OPINION: Video[] = [
  {
    title: "The real AI boom hasn't even started yet",
    guest: "Marc Andreessen — a16z",
    show: "Lenny's Podcast",
    id: "87Pm0SGTtN8",
    href: "https://www.youtube.com/watch?v=87Pm0SGTtN8",
  },
];

export const CHANNELS: Link[] = [
  {
    title: "Anthropic on YouTube",
    href: "https://www.youtube.com/@anthropic-ai",
    meta: "Channel",
    description:
      "Official channel: launches, research explainers, and Claude Code walkthroughs.",
  },
  {
    title: "How I AI",
    href: "https://www.lennysnewsletter.com/s/how-i-ai",
    meta: "Series · Lenny's Podcast",
    description:
      "Claire Vo's hands-on series. People screen-share the AI workflows they actually use, rather than talking about them abstractly.",
  },
  {
    title: "Lenny's Podcast",
    href: "https://www.lennysnewsletter.com/podcast",
    meta: "Podcast",
    description:
      "Where the interviews above live, if you want to browse the rest.",
  },
];
