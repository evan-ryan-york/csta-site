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

export const SHIP_SAFELY: Link[] = [
  {
    title: "WCAG 2.2 quick reference",
    href: "https://www.w3.org/WAI/WCAG22/quickref/",
    meta: "W3C",
    description:
      "The accessibility criteria your site is measured against. Filterable by level (A / AA / AAA).",
  },
  {
    title: "OWASP Top 10",
    href: "https://owasp.org/www-project-top-ten/",
    meta: "OWASP Foundation",
    description:
      "The ten most critical web security risks. If you only learn one security list, learn this one.",
  },
  {
    title: "Row Level Security",
    href: "https://supabase.com/docs/guides/database/postgres/row-level-security",
    meta: "Supabase docs",
    description:
      "How to stop one user reading another user's rows. The single most common way student projects leak data.",
  },
  {
    title: "Environment variables",
    href: "https://vercel.com/docs/environment-variables",
    meta: "Vercel docs",
    description:
      "Where secrets go instead of into your source code — and therefore instead of into your public GitHub repo.",
  },
  {
    title: "Preview deployments",
    href: "https://vercel.com/docs/deployments/environments#preview-environment-pre-production",
    meta: "Vercel docs",
    description:
      "Every branch gets its own live URL, so you can look at a change before it reaches your real users.",
  },
  {
    title: "Pull requests",
    href: "https://docs.github.com/en/pull-requests",
    meta: "GitHub docs",
    description:
      "The review checkpoint between 'the AI wrote it' and 'it's in production'.",
  },
  {
    title: "Claude Code security",
    href: "https://code.claude.com/docs/en/security",
    meta: "Anthropic docs",
    description:
      "The permission model, and how Claude Code guards against prompt injection.",
  },
];

export type Stance = "challenges" | "supports" | "mixed";

export type Study = {
  title: string;
  href: string;
  source: string;
  year: string;
  finding: string;
  stance: Stance;
  caveat?: string;
};

export type Topic = {
  topic: string;
  studies: Study[];
};

export const THINK_CRITICALLY: Topic[] = [
  {
    topic: "Does it actually make you faster?",
    studies: [
      {
        title:
          "Measuring the impact of early-2025 AI on experienced open-source developer productivity",
        href: "https://arxiv.org/abs/2507.09089",
        source: "METR — randomized controlled trial",
        year: "2025",
        finding:
          "16 experienced developers, 246 real issues in repos they'd worked in for years. They predicted AI would make them 24% faster. Afterwards they believed they had been 20% faster. Measured, they were 19% SLOWER — and never noticed.",
        stance: "challenges",
        caveat:
          "METR are careful to say this doesn't generalize to all developers or newer models. Read their caveats, not just the headline.",
      },
    ],
  },
  {
    topic: "Does it help or hurt learning?",
    studies: [
      {
        title:
          "Generative AI without guardrails can harm learning: evidence from high school mathematics",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12232635/",
        source: "Bastani et al., PNAS — pre-registered RCT, ~1,000 students",
        year: "2025",
        finding:
          "Unrestricted GPT-4 raised practice scores 48% — then students scored 17% WORSE than their peers on exams without it. A tutor version that gave hints instead of answers improved practice 127% and erased the harm entirely.",
        stance: "challenges",
        caveat:
          "The most useful study on this page for a teacher: it's not AI that harms learning, it's AI without guardrails. Design decides the outcome.",
      },
      {
        title: "The widening gap: benefits and harms of generative AI for novice programmers",
        href: "https://arxiv.org/abs/2405.17739",
        source: "Prather et al., ICER — observation + eye tracking",
        year: "2024",
        finding:
          "Strong students accelerated. Struggling students hit compounded difficulty and an 'illusion of competence.' AI may widen the novice gap rather than close it.",
        stance: "challenges",
      },
      {
        title: "Your brain on ChatGPT: accumulation of cognitive debt",
        href: "https://arxiv.org/abs/2506.08872",
        source: "Kosmyna et al., MIT Media Lab — EEG study, 54 participants",
        year: "2025",
        finding:
          "LLM users showed the weakest brain connectivity, the lowest sense of ownership over their own essays, and couldn't quote work they had just written.",
        stance: "challenges",
        caveat:
          "A preprint, not peer-reviewed, and formally critiqued for its sample size and EEG methods (arxiv.org/abs/2601.00856). Cite it WITH its critics — that's the honest move.",
      },
      {
        title: "AI code generators and novice learners in introductory programming",
        href: "https://arxiv.org/abs/2302.07427",
        source: "Kazemitabaar et al., CHI — controlled experiment, 69 learners aged 10–17",
        year: "2023",
        finding:
          "Codex access raised task completion 1.15x and scores 1.8x with NO detectable harm to retention a week later.",
        stance: "supports",
        caveat:
          "The honest counterweight to the studies above. The evidence genuinely cuts both ways.",
      },
      {
        title: "The impact of generative AI on critical thinking",
        href: "https://www.microsoft.com/en-us/research/publication/the-impact-of-generative-ai-on-critical-thinking-self-reported-reductions-in-cognitive-effort-and-confidence-effects-from-a-survey-of-knowledge-workers/",
        source: "Lee et al., Microsoft Research + CMU, CHI — 319 knowledge workers",
        year: "2025",
        finding:
          "The more people trusted the AI, the less critical thinking they did. The more they trusted themselves, the more they did.",
        stance: "challenges",
      },
    ],
  },
  {
    topic: "Is the code any good?",
    studies: [
      {
        title: "Do users write more insecure code with AI assistants?",
        href: "https://arxiv.org/abs/2211.03622",
        source: "Perry et al., Stanford, ACM CCS — 47 participants",
        year: "2023",
        finding:
          "Participants with an AI assistant wrote LESS secure code on 4 of 5 tasks — and were MORE likely to believe it was secure. Those who trusted the AI least produced the fewest vulnerabilities.",
        stance: "challenges",
      },
      {
        title: "The maintainability gap: AI code quality research",
        href: "https://www.gitclear.com/the_ai_code_quality_maintainability_gap",
        source: "GitClear — 623M code changes, 2023–2026",
        year: "2026",
        finding:
          "Refactoring collapsed to 3.8% of changed lines (from 21% in 2022). Duplicated blocks up 81%. Code is being copied, not consolidated.",
        stance: "challenges",
        caveat: "Correlational, and GitClear sells code-quality analytics. Weigh accordingly.",
      },
      {
        title: "2025 GenAI code security report",
        href: "https://www.veracode.com/resources/analyst-reports/2025-genai-code-security-report/",
        source: "Veracode — 100+ LLMs tested",
        year: "2025",
        finding:
          "45% of AI-generated samples failed security tests, introducing OWASP Top 10 flaws. Newer models wrote code that worked better but was no more secure.",
        stance: "challenges",
        caveat: "Vendor research — Veracode sells security scanning.",
      },
    ],
  },
  {
    topic: "Accessibility",
    studies: [
      {
        title: "The WebAIM Million",
        href: "https://webaim.org/projects/million/",
        source: "WebAIM, Utah State University — top 1,000,000 home pages",
        year: "2026",
        finding:
          "95.9% of home pages have detectable WCAG failures — and it got WORSE this year, reversing six years of slow gains. Pages using ARIA averaged 59 errors versus 42 for pages without it.",
        stance: "challenges",
      },
      {
        title: "Human or LLM? Comparing accessible code generation",
        href: "https://arxiv.org/abs/2503.15885",
        source: "Suh et al., UC Irvine",
        year: "2025",
        finding:
          "LLMs beat humans on the basics (contrast, alt text) but fall down on anything complex like ARIA. Ordinary prompting barely helps; you need a feedback loop.",
        stance: "mixed",
      },
    ],
  },
  {
    topic: "Privacy — read this before you put 30 students on it",
    studies: [
      {
        title: "Claude Code data usage",
        href: "https://code.claude.com/docs/en/data-usage",
        source: "Anthropic docs",
        year: "current",
        finding:
          "On consumer plans (Free/Pro/Max) Anthropic MAY train on your sessions if the setting is on, with 5-year retention. Commercial plans (Team/Enterprise) do not train on your code by default. The tier a teacher is most likely to use is the one where data may train models.",
        stance: "challenges",
      },
      {
        title: "What GitHub Copilot actually sends",
        href: "https://docs.github.com/en/copilot/responsible-use/copilot-code-completion",
        source: "GitHub docs",
        year: "current",
        finding:
          "Code around your cursor — plus snippets from your other open tabs — is packaged into a prompt and sent to the model. A concrete answer to 'what actually leaves the machine?'",
        stance: "mixed",
      },
      {
        title: "Cursor security and Privacy Mode",
        href: "https://cursor.com/security",
        source: "Cursor (Anysphere)",
        year: "current",
        finding:
          "Privacy Mode exists on free and paid tiers and admins can enforce it. Note that it is a setting, not a default.",
        stance: "mixed",
      },
    ],
  },
  {
    topic: "Environmental and economic cost",
    studies: [
      {
        title: "US data center energy usage report",
        href: "https://www.energy.gov/articles/doe-releases-new-report-evaluating-increase-electricity-demand-data-centers",
        source: "Lawrence Berkeley National Laboratory / US Dept. of Energy",
        year: "2024",
        finding:
          "US data centres used 176 TWh in 2023 — 4.4% of all US electricity — and are projected to reach 6.7–12% by 2028.",
        stance: "challenges",
      },
      {
        title: "Power hungry processing: watts driving the cost of AI deployment?",
        href: "https://arxiv.org/abs/2311.16863",
        source: "Luccioni, Jernite & Strubell — ACM FAccT, peer-reviewed",
        year: "2024",
        finding:
          "General-purpose generative models cost orders of magnitude more energy than task-specific models doing the same job.",
        stance: "challenges",
      },
      {
        title: "Measuring the environmental impact of AI at Google scale",
        href: "https://arxiv.org/abs/2508.15734",
        source: "Google — production measurement",
        year: "2025",
        finding:
          "A median Gemini text prompt uses 0.24 Wh — about nine seconds of television — and 0.26 mL of water.",
        stance: "supports",
        caveat:
          "First-party measurement of a short median prompt, not an agentic coding session. Per-prompt efficiency says nothing about total demand — hold it against the LBNL figure above.",
      },
    ],
  },
  {
    topic: "What happens to your students' jobs",
    studies: [
      {
        title: "Canaries in the coal mine? Six facts about the employment effects of AI",
        href: "https://digitaleconomy.stanford.edu/publication/canaries-in-the-coal-mine-six-facts-about-the-recent-employment-effects-of-artificial-intelligence/",
        source: "Brynjolfsson, Chandar & Chen, Stanford — ADP payroll microdata",
        year: "2025",
        finding:
          "Workers aged 22–25 in the most AI-exposed occupations — software development among them — show a ~16% relative employment decline since late 2022. Employment held steady for older workers in the same roles.",
        stance: "challenges",
        caveat: "This one lands directly on 'what happens to the kids I teach?'",
      },
      {
        title: "Anthropic Economic Index: learning curves",
        href: "https://www.anthropic.com/research/economic-index-march-2026-report",
        source: "Anthropic",
        year: "2026",
        finding:
          "Users with 6+ months of experience had ~10% higher task success rates even after controls. Skill with the tool is learned, not automatic.",
        stance: "supports",
        caveat: "First-party vendor data.",
      },
    ],
  },
  {
    topic: "CS education standards and guidance",
    studies: [
      {
        title: "2026 CSTA PK–12 Computer Science Standards",
        href: "https://csteachers.org/k12standards/",
        source: "Computer Science Teachers Association",
        year: "2026",
        finding:
          "The current standards — the 2017 set is superseded. Five concepts, twelve practices, plus specialty high-school standards in six areas, one of which is Artificial Intelligence.",
        stance: "supports",
      },
      {
        title: "Guidance on the future of CS education in an age of AI",
        href: "https://www.teachai.org/cs",
        source: "TeachAI + CSTA, with AAAI, AI4K12 and Code.org",
        year: "2024–25",
        finding:
          "Tackles 'why is it still important to learn to program?' head-on, and names 'code sense' — conceptual understanding of what a program does — as the thing that must survive AI. 85% of surveyed CS teachers think AI belongs in a fundamental CS experience; 88% want more support.",
        stance: "supports",
      },
      {
        title: "AI learning priorities for all K-12 students",
        href: "https://csteachers.org/ai-priorities/",
        source: "CSTA",
        year: "2025",
        finding:
          "Aim at critical consumers, responsible creators and informed citizens — not future AI specialists.",
        stance: "supports",
      },
    ],
  },
];
