// Steps are derived from the seven screen recordings: the narration was transcribed,
// and each screenshot is a real frame pulled at the timestamp in `at`.
// `body` entries are rendered as HTML, so they may contain <strong>, <em>, and <code>.

export type Step = {
  /** Filename in /public/tutorial. */
  img: string;
  /** Seconds into that stage's recording — shown as the timestamp. */
  at: number;
  title: string;
  body: string[];
  /** Verbatim narration, lightly cleaned up. */
  quote?: string;
};

export type Stage = {
  number: number;
  /** Label for the chapter rail. */
  short: string;
  title: string;
  steps: Step[];
};

export const STAGES: Stage[] = [
  {
    number: 1,
    short: "Spec",
    title: "From a rough idea to a build-ready spec",
    steps: [
      {
        img: "s1-01.jpg",
        at: 5,
        title: "This is not vibe coding",
        body: [
          "The goal is an entire working app — idea inception through to something people can actually use. What follows is how professional developers are using these tools day to day, not a single prompt fired into a single app.",
          "The distinction matters. Vibe coding is one prompt and a hope. This is a <strong>sequence</strong>, and every step in it exists because it removes a decision the next agent would otherwise get wrong.",
        ],
        quote:
          "This is not what people often refer to as vibe coding, where you basically just use an app and give one prompt and there it goes.",
      },
      {
        img: "s1-02.jpg",
        at: 45,
        title: "Write the raw spec in your own voice",
        body: [
          "Before any tool touches the problem, get clarity on what you are building. A plain document is enough — no template, no formatting, no jargon.",
          "The idea: describe a meal in natural language and get protein, fat, carbs and calories back. It may ask <em>one</em> round of clarifying questions, then it has to commit to an estimate. You can enter your weight, height, age and a fitness goal in plain words, and it tells you what is left for the day.",
        ],
        quote: "This is just a raw, unfiltered PRD in my own voice.",
      },
      {
        img: "s1-03.jpg",
        at: 110,
        title: "Hand the raw spec to a general model first",
        body: [
          "Do not send your first draft straight to the coding agent. Paste it into a general-purpose model and ask it to <strong>attack the document</strong>, not implement it: find the design problems, then rewrite it into something a coding agent can build from without guessing.",
          "The response opens with an honest read — the concept is strong, but the spec leaves decisions open that the agent will otherwise make inconsistently. You still own the idea. The model is finding the places where you were vague and forcing a decision now, while it is cheap.",
        ],
        quote:
          "The AI is not doing the heart of the thinking for me, but it is certainly clarifying and adding detail that is going to make building this easier.",
      },
      {
        img: "s1-05.jpg",
        at: 165,
        title: "Read the objections — they are the value",
        body: [
          "Three catches worth the whole step. <strong>Weight does not determine portion size</strong>, so use a standard serving as the baseline instead. <strong>&ldquo;Lose weight&rdquo; is underspecified</strong> — offer maintain, lose gradually, gain muscle, improve fitness.",
          "And the one-round clarification rule needs precise behavior: what counts as a round, can it ask several questions at once, and what happens when the user does not answer.",
        ],
        quote:
          "I put this in here intentionally and I'm glad it caught it. Weight doesn't determine portion size.",
      },
      {
        img: "s1-06.jpg",
        at: 195,
        title: "Take the build-ready spec",
        body: [
          "With the objections resolved, the model emits a structured Product Requirements Document — product name, summary, numbered behavior. The working title lands as <strong>Macro Estimate</strong>.",
          "You could keep refining. Read it, sanity-check it, and move — the agents downstream will surface anything you missed faster than another editing pass will.",
        ],
        quote:
          "I could take a minute longer and read through these details, but I'm going to trust what's here.",
      },
      {
        img: "s1-07.jpg",
        at: 255,
        title: "Start the design in parallel, then walk away",
        body: [
          "Open Claude Design and give it the <em>same</em> spec. It comes back with scoped questions instead of guessing: a <strong>live prototype</strong> rather than mocked screens, all four screens, desktop-first and responsive, sample data for a full day already logged, and a warm, encouraging voice. Asked to pick a design system, the honest answer — &ldquo;something fun but still professional&rdquo; — is a legitimate one.",
          "The job takes ten to fifteen minutes. This is the habit that separates agentic coding from waiting on a chatbot: <strong>the moment you hand off a long-running job, you should already know what you are doing next</strong>. Do not sit and watch it — go set up the codebase while the design builds itself.",
        ],
        quote:
          "A big part of working with agentic tools is you have to let it go, and then have a thing ready to go do next.",
      },
      {
        img: "s1-14.jpg",
        at: 500,
        title: "Open a folder, launch the agent, pick a stack it knows cold",
        body: [
          "Make a new empty directory — <code>health-tracking-app</code> — and from inside it type <code>claude</code>. That is the entire command; the agent inherits the folder it was launched in, which is why you made the folder first.",
          "Then a real technical decision: build with languages and frameworks the models have <strong>enormous amounts of training data on</strong>. For a web app that means <strong>React</strong>, with <strong>Next.js</strong> for backend data and calls, and <strong>Tailwind</strong> for styling. State the deployment target up front too — publish to Vercel, no repo for now.",
        ],
        quote:
          "There's not one right way to do this, but a really obscure or really outdated programming language wouldn't be good. For a web app, React is by far the best training data.",
      },
    ],
  },
  {
    number: 2,
    short: "Scaffold",
    title: "A running app, and a plan for the real one",
    steps: [
      {
        img: "s2-03.jpg",
        at: 57,
        title: "A real, running web app — and you wrote none of it",
        body: [
          "The scaffold is done: React, Next.js and Tailwind installed, a basic page in place. Skim the report rather than auditing it — though it is worth catching that the agent admits it <strong>killed another dev server</strong> with an indiscriminate <code>pkill</code>.",
          "Split the terminal, run <code>pnpm dev</code>, and the app comes up on <code>localhost:3000</code> — how you load a web app on your own machine before it is published. It is Hello World, and it is not much. But it is <em>real</em>.",
        ],
        quote:
          "Here we are. This is our web app. We now have a real web app up and running, which is pretty cool. We didn't really do anything.",
      },
      {
        img: "s2-05.jpg",
        at: 88,
        title: "The design finished — and it built more than you asked",
        body: [
          "Claude Design has produced the Macro Estimate prototype, and it is interactive. &ldquo;Recommend my next meal&rdquo; really produces a suggestion card. It also invented an <strong>&ldquo;I ate this&rdquo;</strong> button and a &ldquo;not quite right, refine&rdquo; path that were never specified. Poking at the prototype is how you find those.",
          "Reports is deliberately neutral — no scores, no judgment. Profile holds the targets. The useful reaction is the honest one: this is not quite what was in mind, and it is <em>better</em> than what was in mind.",
        ],
        quote:
          "It's not quite what I was expecting, but I actually think this is better than what was in my head.",
      },
      {
        img: "s2-08.jpg",
        at: 138,
        title: "Hand the design to the coding agent",
        body: [
          "Once the design is good, open Share. Alongside the usual exports there is an option to send it straight to a coding agent — it generates a prompt that points at the design file and tells the agent to implement it. Copy it.",
          "Remember what this is and is not. It is only the design: no real data, no working logic behind any of those buttons yet.",
        ],
        quote:
          "Obviously, none of this has real working data. None of this is actually connected to anything yet. This is just the design.",
      },
      {
        img: "s2-11.jpg",
        at: 190,
        title: "Give it both halves — the design and the spec",
        body: [
          "Back in Claude Code, open with the context — &ldquo;we are building a health tracking app&rdquo; — paste the design handoff prompt, then paste the PRD underneath it.",
          "Now the agent has both halves: the <strong>design</strong> that shows what it should look like, and the <strong>spec</strong> that explains what it should do. The design alone would leave it guessing at behavior. The spec alone would leave it guessing at appearance.",
        ],
        quote:
          "I'm actually going to come back and grab that PRD, just so that it has some extra context — here is the PRD of the app.",
      },
      {
        img: "s2-12.jpg",
        at: 230,
        title: "Ask for a plan, not a build",
        body: [
          "The instruction is deliberately narrow. Build <strong>only the front end</strong>. Use the dummy data already in the design file. Make the app a close replica of the design, and include every page and feature in it. Interaction, AI integration and data storage are explicitly deferred — naming what is <em>out</em> of scope is as important as naming what is in.",
          "Do not walk away instantly. Watch long enough to confirm the agent can actually read the design file — if you are signed into the wrong account it cannot, and it will improvise instead. It reads it, reports a 77KB single-file prototype, and starts extracting. Now you can leave.",
        ],
        quote:
          "We will deal with user interaction and AI integration and storage of data after the front end is built.",
      },
    ],
  },
  {
    number: 3,
    short: "Plan",
    title: "Write the plan down so a fresh agent can execute it",
    steps: [
      {
        img: "s3-03.jpg",
        at: 62,
        title: "Decide the storage question now",
        body: [
          "The agent plays back what it sees — four screens, a design system worth preserving exactly — and flags that the prototype quietly persists to local storage, which it is <strong>deliberately dropping</strong> because you said storage comes later. That is an agent honoring your scope instead of helpfully exceeding it.",
          "Before it builds, settle storage. This demo uses <strong>local storage</strong> — the browser's own disk — because wiring a real database would add fifteen minutes. If you do want a real one, use <a href=\"https://supabase.com\" target=\"_blank\" rel=\"noreferrer\" class=\"font-medium underline underline-offset-4 hover:text-foreground\">Supabase</a>: nearly identical in the code, but it works across many users on the internet rather than one browser.",
        ],
        quote:
          "Any time you are working with a database, use Supabase. It'll look exactly the same as working with local storage, except it'll work with lots of different users on the internet.",
      },
      {
        img: "s3-05.jpg",
        at: 135,
        title: "Context is a constraint — so write the plan to a file",
        body: [
          "The agent is now carrying the design file, the spec and the whole project setup. That accumulated memory is <strong>context</strong>. The more it has to hold, the harder it is to hold any one thing well — and every message re-sends the entire history, so it gets slower and more expensive as it goes.",
          "So here is the most transferable trick in the walkthrough: have the agent save the plan as a <strong>self-contained file</strong> that a fresh agent could read and execute with no memory of this conversation. It goes further than asked, copying the design prototype and the spec into the repo too.",
        ],
        quote:
          "This is the equivalent of 8 p.m. you writing a note for yourself about what you need to do the next day, so you can wake up fresh and go do it.",
      },
      {
        img: "s3-07.jpg",
        at: 240,
        title: "The plan and the spec land as real files",
        body: [
          "<code>docs/PRD.md</code> is written — hundreds of lines, structured, citable — and the plan follows, with the formulas and seed values spelled out so the next agent never has to guess. The repo is becoming the source of truth; the conversation is becoming disposable, which is exactly what you want.",
          "Cost is worth naming here. Claude Code's $100/month plan covers a lot; the $200 tier comfortably runs five to ten agents all day. Against what the equivalent developer time would cost, it is not a close comparison.",
        ],
        quote:
          "I have the equivalent of five to ten high-quality mid-level software developers working for me twelve to sixteen hours a day — and that's a lot less than what it would cost to pay that many people.",
      },
      {
        img: "s3-09.jpg",
        at: 315,
        title: "You can open the files — but mostly you will not",
        body: [
          "The source is right there: layout, page, styles, the docs folder with the spec and the design reference. If you code, open them. On a bigger project it gets far more extensive.",
          "And it stays closed almost all of the time. That is not laziness; that is the point of working this way.",
        ],
        quote:
          "The reality is I have this closed 99% of the time, because you simply don't have to look at this very much — which is the beauty of doing it this way.",
      },
    ],
  },
  {
    number: 4,
    short: "Execute",
    title: "Clear the context and hand the plan to a fresh agent",
    steps: [
      {
        img: "s4-02.jpg",
        at: 28,
        title: "Clear the context",
        body: [
          "Do <strong>not</strong> let the agent that wrote the plan also execute it. Its context is nearly full — it is carrying the design, the spec, the setup, and every message in between.",
          "Type <code>/clear</code>. What comes back is effectively a brand-new agent with no idea what has happened so far — and a plan file that tells it everything it needs.",
        ],
        quote:
          "This particular instance of Claude has got a pretty full context at this point. So I'm going to type slash clear. This is a fresh agent that has no idea what's happened so far.",
      },
      {
        img: "s4-05.jpg",
        at: 100,
        title: "Three sentences: read the plan, test first, aim high",
        body: [
          "The prompt is short, because the plan is doing the work: there is a file called <code>PLAN.md</code> in the root of this project — read it, then execute it until it is 100% complete and correct.",
          "Then two standing instructions that change how it works for the rest of the session. Write the failing test first, then make it pass — <strong>red/green TDD</strong> costs a little time and saves far more. And where there is uncertainty, take the <strong>highest-quality, best-practice</strong> option. No band-aids. That kind of guidance really belongs in <code>CLAUDE.md</code>, the instructions file every agent in the project reads automatically; this project does not have one yet, so it goes in the prompt.",
        ],
        quote:
          "There's actually a file called CLAUDE.md — the instructions that all Claude agents get. We haven't customized ours yet, so I'm having to put extra information into my prompt.",
      },
      {
        img: "s4-06.jpg",
        at: 128,
        title: "Auto mode, and a minute of supervision",
        body: [
          "Run in auto mode so the agent proceeds without stopping to ask permission at every step. Even so, it sometimes has a question right at the start — so watch for a minute before you walk away.",
          "Notice what it does unprompted: it reads the project's own <code>AGENTS.md</code>, sees the warning that this version of Next.js differs from its training data, and spawns a background agent to check the real docs. Meanwhile it installs a test runner, because you asked for TDD and the project had no way to run a test. It is in good shape. There is no value in watching.",
        ],
        quote:
          "I am on auto mode, which I highly recommend always being on. That means it just goes — it doesn't stop and ask you a bunch of questions.",
      },
    ],
  },
  {
    number: 5,
    short: "Parallel",
    title: "Three agents, three worktrees, at the same time",
    steps: [
      {
        img: "s5-03.jpg",
        at: 100,
        title: "The front end is built, with tests — and an honest list of gaps",
        body: [
          "134 unit and integration tests, 24 end-to-end tests across desktop and mobile, lint clean, build clean, and the target math exactly as the plan demanded. The app on localhost is a near-perfect replica of the design prototype. This is no longer a mockup.",
          "It flags <strong>what it is unsure about</strong> rather than burying it — the safety clamps do not quite match the spec's prose, screenshots caught a CSS bug the tests could not see — and it says plainly what it did <em>not</em> do: no persistence, no real AI. It committed nothing. An agent that quietly exceeds its brief is far more dangerous than one that stops.",
        ],
        quote:
          "Oh my goodness, this looks fantastic. This is exactly what the prototype looked like. This is a real app.",
      },
      {
        img: "s5-05.jpg",
        at: 200,
        title: "Ask for git — and watch it push back",
        body: [
          "The next move is to run several agents at once, which needs git. So: initialize git so we can commit and create worktrees. Notice what the agent does <em>not</em> do — it does not blindly obey. Git was already initialized, something looked off, and it wanted to look before touching anything.",
          "A <strong>worktree</strong> is a full copy of the project that shares the same history. It lets several agents work at once without stepping on each other — exactly as if three developers in three different houses each cloned the repo. You just have to reconcile them at the end.",
        ],
        quote:
          "It allows you to run multiple Claude Code instances without them stepping on each other's toes — just as if three different developers in three different houses all pulled the repo and worked on it.",
      },
      {
        img: "s5-09.jpg",
        at: 490,
        title: "Three worktrees, three tabs, three agents",
        body: [
          "It creates <code>ai-integration</code>, <code>profile-logic</code> and <code>app-data-storage</code> off the same commit — and installs dependencies in each, because a fresh worktree is not wired up on arrival. Say so in the prompt, as here.",
          "Open a terminal tab per worktree and name them. The naming is not cosmetic: in a minute you will have several agents running at once, and the tab label is the only thing keeping them straight. Then type <code>claude</code> in each, and brief each one on its own slice — the profile agent, for instance, gets told to replace the dummy data, make the calculations really determine the macro goals, and persist to local storage across refresh.",
        ],
        quote:
          "We now have three different software developers all working for us in their own repos. How cool is that?",
      },
      {
        img: "s5-12.jpg",
        at: 665,
        title: "Put the API key in a file, never in the chat",
        body: [
          "This is the one moment you genuinely have to touch the code. Create a <code>.env.local</code> file and put the API key in it.",
          "<strong>Do not paste the key into the agent's chat.</strong> The conversation gets stored, and your secret gets stored with it. Write it to the file directly — and note this file is deliberately excluded from git, which will matter a great deal in a few minutes.",
        ],
        quote:
          "You don't want to paste that in the chat, because it saves it in the chat history. And now your API key is saved in chat history, which is less than ideal.",
      },
      {
        img: "s5-14.jpg",
        at: 730,
        title: "They find real holes — and negotiate the boundary between them",
        body: [
          "The profile agent comes back with a genuine bug you never mentioned: a blank form would silently save as a thirty-year-old weighing zero kilograms. It proposes real validation instead — caught before writing a line.",
          "The storage agent knows another agent is working on the profile in a parallel worktree, because you told it. So it carves local storage into separate keys and names the exact file both branches will have to touch. It calls that section <strong>&ldquo;the coordination point&rdquo;</strong> — a contract between two agents that have never spoken. It will not entirely hold, and that is the next stage.",
        ],
      },
    ],
  },
  {
    number: 6,
    short: "Merge",
    title: "Bringing three parallel branches back together",
    steps: [
      {
        img: "s6-01.jpg",
        at: 35,
        title: "All three agents finish",
        body: [
          "The AI integration agent did more than write code: it drove the whole loop in a real browser against the live API — describe a meal, answer the clarification, get an estimate, save it, get a recommendation, refine it. It verified its own work end to end rather than declaring victory.",
          "The data storage agent has persistence working, with 190 unit tests and 30 end-to-end tests behind it. Three agents, three finished bodies of work, one elapsed stretch of time.",
        ],
      },
      {
        img: "s6-06.jpg",
        at: 150,
        title: "&ldquo;This is a collision, not a merge&rdquo;",
        body: [
          "Treat them exactly like junior developers who have finished a ticket: commit your changes and merge them into main. The first one hits a wall — <strong>merge is blocked</strong>, main is checked out in another worktree. That is the predictable cost of parallelism, and it is the same conflict three humans would hit arriving at the same moment.",
          "Rather than merging on top and hoping, the agent reads what the other one actually built — and finds both independently created the same file and rewrote the same function, and one deleted the seed data. So it stops: <strong>&ldquo;I've stopped before doing anything destructive.&rdquo;</strong> Then it asks how to reconcile and marks the careful option as recommended. Take it.",
        ],
        quote:
          "Just like if you had junior developers working for you, you're now going to say: commit all changes and merge them into local main.",
      },
      {
        img: "s6-07.jpg",
        at: 178,
        title: "What the parallelism actually bought",
        body: [
          "It reconciles onto the other agent's design, reading their code first. Its own work is safe on its branch; nothing has been overwritten.",
          "Worth pausing on the arithmetic. Three agents worked in parallel for roughly two hours of machine time. The human time was about fifteen minutes. Hand-coding this would have taken a team considerably longer — with, most likely, more bugs.",
        ],
        quote:
          "The total amount of work time here for the agents is maybe two hours. For me, it would have been maybe 15 minutes worth of work.",
      },
    ],
  },
  {
    number: 7,
    short: "Debug",
    title: "Verify everything landed — then fix what is broken",
    steps: [
      {
        img: "s7-02.jpg",
        at: 150,
        title: "Verify nothing got dropped — and it finds something",
        body: [
          "All three branches have merged. Switch to main and ask the agent to <strong>verify</strong> that everything the three worktrees produced actually got committed and merged. This step feels like paperwork. It is the most valuable thing in the video.",
          "Main passes 221 tests, lint and build clean. But the agent surfaces <strong>&ldquo;The problem&rdquo;</strong>: the profile worktree has a staged, uncommitted change that would <em>remove every AI route</em> and strip the Anthropic dependency. Committing it would have quietly rolled back the entire AI integration. Nobody would have noticed until the app stopped working.",
        ],
        quote:
          "So it did find a problem. This is great. I'm glad we did this. This is the whole reason we did this.",
      },
      {
        img: "s7-03.jpg",
        at: 190,
        title: "Don't pick from the menu — ask the better question",
        body: [
          "It offers three options: discard it, save it to a scratch branch, or show you the full diff. You could pick one. Do not. Restate the actual goal and hand the judgment back: my goal is that all the work from those three worktrees ends up on main. Is what is left a byproduct of the merge conflicts, or is it meaningful work? If it is meaningful, merge it. Either way, leave main clean and working.",
          "It does the real analysis: the leftover change is <strong>byte-identical</strong> to a commit already in main's history, and there are zero unmerged commits on any branch. &ldquo;It's a byproduct, not work.&rdquo; Now it can be discarded safely — not because it looked unimportant, but because that was proven.",
        ],
        quote:
          "I'm basically just saying: hey, you figure it out. Decide if this was meaningful work or not.",
      },
      {
        img: "s7-09.jpg",
        at: 610,
        title: "Two errors, and neither is a code bug",
        body: [
          "The dev server throws a wall of red. Next.js gives you a copy button — paste it straight into the agent. The diagnosis: a <strong>stale build cache</strong> from switching package managers. It said so <em>before</em> doing the work, and it was right. (One practical lesson from the mess that follows: when an agent is actively editing the project, poking the app at the same time produces failures that belong to neither of you. Let it finish.)",
          "Then: <code>ANTHROPIC_API_KEY is not set</code>. The key was created inside the AI integration worktree, and secrets are <strong>deliberately excluded from git</strong> — so it did not come across on merge. That is not a bug; that is the system protecting you from committing a secret. Recreate <code>.env.local</code> on main. Diagnosing it meant reading the server logs: a browser error starting with 5 means the failure happened on the server.",
        ],
        quote:
          "The API key never made it over. It was in the AI integration worktree — but you don't ever store API keys in git history.",
      },
      {
        img: "s7-10.jpg",
        at: 690,
        title: "It writes the failing test first, unprompted",
        body: [
          "A real bug surfaces: you type your goal in your own words, and the app uses those words to pick a radio button and then throws the text away. Watch what the agent does before fixing it — <strong>&ldquo;Let me write the failing tests first.&rdquo;</strong> Nobody asked it to this time. It learned that from how you prompted it back in stage four.",
          "The new test fails, and the agent works out that <em>its own test</em> was wrong, not the code: it had tested with a brand-new empty user instead of a returning one. &ldquo;That's my bug, not the code's.&rdquo; It rewrites the test, and 228 pass.",
        ],
        quote:
          "Even though we didn't say do test-driven development, it's picked up that that's how we want to work — because that's how we asked it to work earlier.",
      },
      {
        img: "s7-13.jpg",
        at: 870,
        title: "The bug that was not a bug",
        body: [
          "You type &ldquo;lose weight quickly&rdquo; and the app keeps saying &ldquo;lose weight gradually.&rdquo; That looks broken. Paste a screenshot straight into the agent — it reads images — and ask why.",
          "The answer: the spec forbids extreme calorie deficits, so the app deliberately maps aggressive goals onto the gradual one. It is <strong>a product problem, not a code bug</strong> — the app is doing the right thing and never telling the user. Fixing that is a design decision, and it is yours to make, not the agent's.",
        ],
        quote:
          "So this is actually a product problem, not a bug. It's saying: tell us your goals and we'll find the closest one to match it.",
      },
      {
        img: "s7-17.jpg",
        at: 1040,
        title: "The whole thing works",
        body: [
          "Type a real meal in plain language — &ldquo;tuna poke&rdquo; — and the app asks its <em>one</em> round of clarifying questions, the rule from the very first spec document, now running in a real product. It commits: 545 calories, 38g protein, 52g carbs, 20g fat, itemized. Ask for a recommendation and it sizes one to the calories left; tell it &ldquo;I have some lamb and fresh veggies&rdquo; and it regenerates around your constraints.",
          "The dashboard, the estimator, the recommendation loop and the persistence all work. One rough note became a working, tested application in roughly three hours of agent time. The idea stayed yours throughout — the agents closed the gaps and absorbed the elapsed time.",
        ],
        quote:
          "And, oh my gosh, the entire thing works. We built an entire working app in like three hours of Claude work time.",
      },
    ],
  },
];
