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
        quote:
          "This is just a raw, unfiltered PRD in my own voice.",
      },
      {
        img: "s1-03.jpg",
        at: 110,
        title: "Hand the raw spec to a general model first",
        body: [
          "Do not send your first draft straight to the coding agent. Paste it into a general-purpose model and ask it to <strong>attack the document</strong>, not implement it.",
          "The ask has two halves: find the design problems, then rewrite it into something the coding agent can build from without guessing.",
        ],
        quote:
          "Analyze it for any improvements or design problems you already see in my notes — and rewrite the PRD in a format that will be most usable for Claude Code to then build.",
      },
      {
        img: "s1-04.jpg",
        at: 140,
        title: "The model is closing gaps, not having the idea",
        body: [
          "The response opens with an honest read: the concept is strong, but the spec leaves decisions open that the coding agent will otherwise make inconsistently — or overbuild.",
          "This is the whole point of the step. You still own the idea. The model is finding the places where you were vague and forcing a decision now, while it is cheap.",
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
        at: 225,
        title: "Start the design in parallel",
        body: [
          "Open Claude Design and give it the same spec. A PRD is nothing mystical — it is a document that explains what the product should do. The template does not matter; the clarity does.",
          "This is the step that makes the whole workflow fast: the design and the code scaffold get built <em>at the same time</em>, by two different agents.",
        ],
        quote:
          "Create a design for a web app that meets all the requirements of the PRD below.",
      },
      {
        img: "s1-08.jpg",
        at: 255,
        title: "Answer the clarifying questions",
        body: [
          "Claude Design reads the spec and comes back with scoped questions instead of guessing. What kind of deliverable — mocked screens, or a live prototype that really calls a model? Which screens? Which flow matters most?",
          "The answers: a <strong>live AI prototype</strong>, <strong>all four screens</strong>, every flow weighted equally, and <strong>desktop-first, responsive to mobile</strong>.",
        ],
        quote:
          "What kind of deliverable do you want? Let's say a real prototype. Which screens should I build? Let's do the whole thing.",
      },
      {
        img: "s1-09.jpg",
        at: 300,
        title: "Set the tone and the sample data",
        body: [
          "The second half of the questionnaire is about feel, not function. How should the clarification land — inline bubbles, a distinct card, a full-screen chat? What should populate the screens?",
          "Pick a realistic full day already logged, so the dashboard has something to show, and a <strong>warm and encouraging</strong> voice for the copy.",
        ],
        quote:
          "Sample data to populate the screens — let's say a full day, just to simulate the screens. And then definitely warm and encouraging.",
      },
      {
        img: "s1-10.jpg",
        at: 335,
        title: "Pick a design system, or describe one",
        body: [
          "Claude Design offers named starting points — Modernist, Classical, Nocturne, Organic, Broadsheet. You do not have to know which one you want.",
          "If none of them obviously fits, say what you are after in plain language and let it choose. That is a legitimate answer here, not a cop-out.",
        ],
        quote:
          "I'm going to say: pick a design system that is fun but still professional.",
      },
      {
        img: "s1-11.jpg",
        at: 355,
        title: "Let it run, and go do the next thing",
        body: [
          "The design job will take ten to fifteen minutes. This is the habit that separates agentic coding from waiting on a chatbot: <strong>the moment you hand off a long-running job, you should already know what you are doing next</strong>.",
          "Do not sit and watch it. Switch to the terminal and set up the codebase while the design builds itself.",
        ],
        quote:
          "A big part of working with agentic tools is you have to let it go, and then have a thing ready to go do next.",
      },
      {
        img: "s1-12.jpg",
        at: 390,
        title: "Make an empty project folder",
        body: [
          "Nothing clever here. Create a new, empty directory for the app — <code>health-tracking-app</code> — and open it.",
          "The coding agent will fill it. It just needs somewhere to stand.",
        ],
        quote:
          "I'm going to make a new folder that says health tracking app. So, just an empty folder.",
      },
      {
        img: "s1-13.jpg",
        at: 412,
        title: "Launch the coding agent in that folder",
        body: [
          "From the terminal, inside the new directory, start Claude Code by typing <code>claude</code>. That is the entire command.",
          "The agent inherits the folder it was launched in — which is why you made the folder first.",
        ],
        quote:
          "I already have Claude installed. I'm just going to type claude, and Claude loads up.",
      },
      {
        img: "s1-14.jpg",
        at: 500,
        title: "Choose a stack the model knows cold",
        body: [
          "This is a real technical decision and it is worth understanding. Build with languages and frameworks the models have <strong>enormous amounts of training data on</strong>. An obscure or outdated stack will fight you the whole way.",
          "For a web app that means <strong>React</strong>, with <strong>Next.js</strong> to handle backend data and calls, and <strong>Tailwind</strong> for styling. State the deployment target up front too: publish to Vercel, no repo for now.",
        ],
        quote:
          "There's not one right way to do this, but a really obscure or really outdated programming language wouldn't be good. For a web app, React is by far the best training data.",
      },
      {
        img: "s1-15.jpg",
        at: 520,
        title: "Two agents, both working",
        body: [
          "Send the scaffold prompt and the coding agent starts building Hello World in the folder. Flip back to the browser and the design is already rendering — the Macro Estimate dashboard, the calorie ring, the macro cards, the natural-language meal input.",
          "One idea, two agents, one elapsed clock. That is the shape of the whole workflow.",
        ],
        quote:
          "Claude's running here — and the design is coming along quite nicely.",
      },
    ],
  },
  {
    number: 2,
    short: "Scaffold",
    title: "A running app, and a plan for the real one",
    steps: [
      {
        img: "s2-01.jpg",
        at: 10,
        title: "Read the agent's report, but do not audit it",
        body: [
          "The scaffold is done: React, Next.js and Tailwind are installed and a basic page is in place. You do not need to read every line of what happened — skim it for the things that matter.",
          "Two are worth catching here. The agent admits it <strong>killed another dev server</strong> with an indiscriminate <code>pkill</code>, and it notes that <code>create-next-app</code> initialized a git repo despite being told not to bother — and left it, because it is harmless.",
        ],
        quote:
          "I typically don't read line by line everything that happened, but I'm going to kind of just walk through this.",
      },
      {
        img: "s2-02.jpg",
        at: 40,
        title: "Find the command that runs it locally",
        body: [
          "The agent tells you the app will be served at <code>localhost:3000</code> — that is how you load a web app on your own machine before it is published to the internet.",
          "It also hands you the deploy path for later: <code>npx vercel</code> for a preview, <code>npx vercel --prod</code> to go live.",
        ],
      },
      {
        img: "s2-03.jpg",
        at: 57,
        title: "Start the dev server and look at it",
        body: [
          "Split the terminal and run the dev command — here <code>pnpm dev</code>. The app comes up on localhost and the terminal prints a clickable link.",
          "It is Hello World, and it is not much. But it is a <em>real, running web app</em>, and you did not write a line of it.",
        ],
        quote:
          "Here we are. This is our web app. We now have a real web app up and running, which is pretty cool. We didn't really do anything.",
      },
      {
        img: "s2-04.jpg",
        at: 68,
        title: "Meanwhile, the design finished",
        body: [
          "Back in the browser, Claude Design has produced the Macro Estimate prototype: a calories-remaining hero, protein, carbs and fat cards, and the natural-language meal input.",
          "You could go back and forth and tweak it — the font is not perfect. For a first pass, it is close enough to build from, and that is the bar.",
        ],
        quote:
          "Claude Design is awesome. We could go back and forth. I actually don't love the font, but I'm going to leave it as it is for now.",
      },
      {
        img: "s2-05.jpg",
        at: 88,
        title: "Click around — it built more than you asked",
        body: [
          "The prototype is interactive. &ldquo;Recommend my next meal&rdquo; actually produces a suggestion card, with portions broken out.",
          "It also invented an <strong>&ldquo;I ate this&rdquo;</strong> button and a &ldquo;not quite right, refine&rdquo; path that were never specified. Poking at the prototype is how you find those.",
        ],
        quote:
          "I didn't even tell it to do this — that I ate this button. That's nice.",
      },
      {
        img: "s2-06.jpg",
        at: 105,
        title: "Check the other screens against your head",
        body: [
          "Reports shows target versus actual by day, deliberately neutral — no scores, no judgment. Profile is where the personal information and targets live.",
          "The useful reaction is the honest one: this is not quite what was in mind, and it is <em>better</em> than what was in mind.",
        ],
        quote:
          "It's not quite what I was expecting, but I actually think this is better than what was in my head.",
      },
      {
        img: "s2-07.jpg",
        at: 128,
        title: "Hand the design to the coding agent",
        body: [
          "Once the design is good, open Share. Alongside the usual exports there is an option to send the design directly to a coding agent.",
        ],
        quote:
          "So what I can now do is I can go to share and say, hey, I want to share this with Claude Code.",
      },
      {
        img: "s2-08.jpg",
        at: 138,
        title: "Copy the handoff prompt",
        body: [
          "Claude Design generates a prompt that points the coding agent at the design file and tells it to implement that file. Copy it.",
          "This is only the design — none of it is wired to anything. There is no real data and no working logic behind any of those buttons yet.",
        ],
        quote:
          "Obviously, none of this has real working data. None of this is actually connected to anything yet. This is just the design.",
      },
      {
        img: "s2-09.jpg",
        at: 148,
        title: "The local server is still running",
        body: [
          "In the split pane, <code>pnpm dev</code> is still serving the Hello World app on localhost:3000 and logging requests.",
          "Leaving it running is deliberate. As the agent rewrites the app, the page reloads and you watch it become real.",
        ],
      },
      {
        img: "s2-10.jpg",
        at: 158,
        title: "Paste the design prompt into the agent",
        body: [
          "Back in Claude Code, open with the context — &ldquo;we are building a health tracking app&rdquo; — then paste the design handoff prompt underneath it.",
          "The terminal collapses long pastes into a summary line. The full text is there; it is just not shouting at you.",
        ],
      },
      {
        img: "s2-11.jpg",
        at: 190,
        title: "Give it the spec as well",
        body: [
          "Paste the PRD in too, as extra context. Now the agent has both halves: the <strong>design</strong> that shows what it should look like, and the <strong>spec</strong> that explains what it should do.",
          "The design alone would leave it guessing at behavior. The spec alone would leave it guessing at appearance.",
        ],
        quote:
          "I'm actually going to come back and grab that PRD, just so that it has some extra context — here is the PRD of the app.",
      },
      {
        img: "s2-12.jpg",
        at: 230,
        title: "Ask for a plan, not a build",
        body: [
          "The instruction is deliberately narrow. Build <strong>only the front end</strong>. Use the dummy data already in the design file. Make the app a close replica of the design, and include every page and feature in it.",
          "Interaction, AI integration and data storage are explicitly deferred. Naming what is <em>out</em> of scope is as important as naming what is in.",
        ],
        quote:
          "We will deal with user interaction and AI integration and storage of data after the front end is built.",
      },
      {
        img: "s2-13.jpg",
        at: 268,
        title: "Stay for a moment and make sure it can see",
        body: [
          "Do not walk away instantly. Watch long enough to confirm the agent can actually read the design file — if you are signed into the wrong account, it cannot, and it will improvise instead.",
          "It reads the design, then announces the file is a 77KB single-file prototype and starts extracting it. It can see. Now you can leave.",
        ],
        quote:
          "I have a couple of Claude accounts, and sometimes I'm not logged into the right one. So let me make sure you can read it.",
      },
    ],
  },
  {
    number: 3,
    short: "Plan",
    title: "Write the plan down so a fresh agent can execute it",
    steps: [
      {
        img: "s3-01.jpg",
        at: 14,
        title: "The agent reports what it found",
        body: [
          "It read the design and the spec, and it plays back what it sees: four screens behind a client-side router, and a specific design system worth preserving exactly — the cream background, the terracotta accent, the macro colors, the display and body fonts.",
          "Then it produces a plan in phases. Foundation first, then the pure calculation logic, then the screens.",
        ],
        quote:
          "It kind of explains back to me what it sees, and it lets me know it's already got a design system and fonts and everything.",
      },
      {
        img: "s3-02.jpg",
        at: 40,
        title: "Read the flags it raises",
        body: [
          "Two things it wants you to know. The design returns inline styles, and it intends to re-express those as Tailwind classes — the same look, expressed the way the rest of the project is written.",
          "And the prototype quietly persists data to local storage, which it is <strong>deliberately dropping</strong> because you said storage comes later. That is the agent honoring your scope instead of helpfully exceeding it.",
        ],
        quote:
          "It's deliberately dropping it because we're just doing the front end. That's fine.",
      },
      {
        img: "s3-03.jpg",
        at: 62,
        title: "Decide the storage question now",
        body: [
          "It asks whether to build. Before answering, settle storage: this demo will use <strong>local storage</strong> — the browser's own disk — because wiring a real database would add fifteen minutes.",
          "If you do want a real database, the advice is Supabase. It looks almost identical to local storage in the code, but it works across many users on the internet rather than one browser.",
        ],
        quote:
          "Any time you are working with a database, use Supabase. It'll look exactly the same as working with local storage, except it'll work with lots of different users on the internet.",
      },
      {
        img: "s3-04.jpg",
        at: 100,
        title: "The context is filling up",
        body: [
          "The agent is now carrying a lot: the design file, the spec, the whole project setup. That accumulated memory is <strong>context</strong>, and it is a real constraint.",
          "The more an agent has to hold, the harder it is for it to hold any one thing well — and every message re-sends the entire history, so it gets slower and more expensive as it goes.",
        ],
        quote:
          "The more that an AI agent has to keep up with, the harder it has remembering everything. Just like us.",
      },
      {
        img: "s3-05.jpg",
        at: 135,
        title: "Ask it to write the plan to a file",
        body: [
          "This is the most transferable trick in the whole walkthrough. Have the agent save the entire plan as a <strong>self-contained file</strong> that a fresh agent could read and execute with no memory of this conversation.",
          "It goes further than asked — it copies the design prototype and the spec into the repo too, so the plan does not depend on the chat it was born in.",
        ],
        quote:
          "This is the equivalent of 8 p.m. you writing a note for yourself about what you need to do the next day, so you can wake up fresh and go do it.",
      },
      {
        img: "s3-06.jpg",
        at: 175,
        title: "It vendors the spec into the repo",
        body: [
          "The agent writes the spec into the project itself, so the plan can cite it by section and have those references actually resolve.",
          "The repo is becoming the source of truth. The conversation is becoming disposable — which is exactly what you want.",
        ],
      },
      {
        img: "s3-07.jpg",
        at: 240,
        title: "The plan and the spec land as real files",
        body: [
          "<code>docs/PRD.md</code> is written — hundreds of lines, structured, citable. The plan itself follows, with the formulas and seed values spelled out so the next agent never has to guess.",
          "Cost is worth naming here. Claude Code's $100/month plan covers a lot; the $200 tier comfortably runs five to ten agents all day. Against what the equivalent developer time would cost, it is not a close comparison.",
        ],
        quote:
          "I have the equivalent of five to ten high-quality mid-level software developers working for me twelve to sixteen hours a day — and that's a lot less than what it would cost to pay that many people.",
      },
      {
        img: "s3-08.jpg",
        at: 292,
        title: "You can open the files any time",
        body: [
          "The terminal here is Warp, which is free and can show the file tree. The docs folder now holds the spec and the design reference.",
          "If you code, open them. If you do not, you do not have to.",
        ],
      },
      {
        img: "s3-09.jpg",
        at: 315,
        title: "But mostly, you will not look",
        body: [
          "The source is right there — layout, page, styles. On a bigger project it gets far more extensive.",
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
        img: "s4-01.jpg",
        at: 8,
        title: "The plan is on disk",
        body: [
          "The agent reports what it wrote: the executable plan, the original design prototype extracted from Claude Design, and the spec — each one a file, each one citable.",
          "The plan is written to be executable rather than aspirational: exact hex values, exact macro colors, the actual target math.",
        ],
      },
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
        img: "s4-03.jpg",
        at: 50,
        title: "Point it at the plan",
        body: [
          "The prompt is short, because the plan is doing the work: there is a file called <code>PLAN.md</code> in the root of this project. Read it, then execute it until it is 100% complete and correct.",
        ],
      },
      {
        img: "s4-04.jpg",
        at: 72,
        title: "Ask for tests first, not tests later",
        body: [
          "Add a <strong>red/green TDD</strong> instruction — write the failing test first, then make it pass. It makes the build take slightly longer and saves far more than it costs, because the tests stop the thing breaking later.",
          "This one line changes how the agent works for the rest of the session. It is worth typing.",
        ],
      },
      {
        img: "s4-05.jpg",
        at: 100,
        title: "Tell it how to resolve its own uncertainty",
        body: [
          "Finish with a standing instruction: where there are questions or uncertainty, take the option that is the <strong>highest-quality, best practice</strong> choice. No band-aids. This will be a production app.",
          "That kind of guidance really belongs in <code>CLAUDE.md</code> — the instructions file every agent in the project reads automatically. This project does not have one yet, so it goes in the prompt instead.",
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
          "Notice what it does unprompted: it reads the project's own <code>AGENTS.md</code>, sees the warning that this version of Next.js differs from its training data, and goes to check the real docs.",
        ],
        quote:
          "I am on auto mode, which I highly recommend always being on. That means it just goes — it doesn't stop and ask you a bunch of questions.",
      },
      {
        img: "s4-07.jpg",
        at: 150,
        title: "It sets up its own test harness",
        body: [
          "It spawns a background agent to read the Next.js docs, and while that runs it installs a test runner — because you asked for TDD and the project had no way to run a test.",
          "It is reading real code files now. It is in good shape. This will take a while, and there is no value in watching.",
        ],
      },
    ],
  },
  {
    number: 5,
    short: "Parallel",
    title: "Three agents, three worktrees, at the same time",
    steps: [
      {
        img: "s5-01.jpg",
        at: 8,
        title: "The front end is built, with tests",
        body: [
          "The plan executed. 134 unit and integration tests, 24 end-to-end tests across desktop and mobile, lint clean, build clean — and the target math came out exactly as the plan demanded.",
          "It flags <strong>four things worth your attention</strong> rather than burying them. The safety clamps do not quite match what the spec's prose implied. Screenshots caught a CSS bug the tests could not see. Two small accessibility upgrades over the prototype.",
        ],
        quote:
          "The safety clamps don't quite match what was in the plan... snapshots caught a bug tests couldn't. All sounds great. Thanks for letting me know, Claude.",
      },
      {
        img: "s5-02.jpg",
        at: 60,
        title: "And it says what it did not do",
        body: [
          "&ldquo;Gaps carried forward, not silently solved&rdquo; — no persistence, no real AI, no date-range selector. Those were out of scope, and it left them out of scope.",
          "It also committed nothing. The work is sitting there for you to review. An agent that quietly exceeds its brief is far more dangerous than one that stops.",
        ],
      },
      {
        img: "s5-03.jpg",
        at: 100,
        title: "Look at what you actually have",
        body: [
          "The app is running on localhost, and it is a near-perfect replica of the design prototype — the calorie hero, the three macro cards, the meal input, the whole dashboard.",
          "This is no longer a mockup. It is a real, working front end. The logic behind it is still dummy data, and that is the next problem.",
        ],
        quote:
          "Oh my goodness, this looks fantastic. This is exactly what the prototype looked like. This is a real app.",
      },
      {
        img: "s5-04.jpg",
        at: 150,
        title: "Ask for git, and watch it push back",
        body: [
          "The next move is to run several agents at once, which needs git. So: initialize git so we can commit and create worktrees.",
          "Notice what the agent does <em>not</em> do. It does not blindly obey. It says git is already initialized, something looks off about the state, and it wants to look before touching anything.",
        ],
        quote:
          "I'm going to let it take care of that for me — that way I don't have to keep memorizing 800 different git commands.",
      },
      {
        img: "s5-05.jpg",
        at: 200,
        title: "What a worktree actually is",
        body: [
          "Git did not need initializing; the repo was healthy. It committed the work to a branch and proved worktrees function by making one and tearing it down.",
          "A <strong>worktree</strong> is a full copy of the project that shares the same history. It lets several agents work at once without stepping on each other — exactly as if three developers in three different houses each cloned the repo. You just have to reconcile them at the end.",
        ],
        quote:
          "It allows you to run multiple Claude Code instances without them stepping on each other's toes — just as if three different developers in three different houses all pulled the repo and worked on it.",
      },
      {
        img: "s5-06.jpg",
        at: 290,
        title: "When it asks, take the recommendation",
        body: [
          "It stops with a genuine question: the repo has one kind of lockfile but you are using a different package manager. How should it install across the three worktrees?",
          "It marks one option <strong>Recommended</strong>. In practice that recommendation is right almost every time — and it is right here.",
        ],
        quote:
          "It's going to make a recommendation. 99% of the time, the recommendation is good. In this case, it definitely is.",
      },
      {
        img: "s5-07.jpg",
        at: 410,
        title: "Three worktrees, off the same commit",
        body: [
          "It creates <code>ai-integration</code>, <code>profile-logic</code> and <code>app-data-storage</code>, all based on the same commit, then installs dependencies in each so all three can actually run.",
          "That last part matters and is easy to forget: a fresh worktree is not wired up on arrival. Say so in the prompt, as here.",
        ],
        quote:
          "For each worktree, be sure to run install, so the project will work locally.",
      },
      {
        img: "s5-08.jpg",
        at: 445,
        title: "One terminal tab per worktree",
        body: [
          "Open a terminal for each worktree and rename the tabs — AI Integration, Data Storage, Profile Logic.",
          "The naming is not cosmetic. In a minute you will have several agents running at once, and the only thing keeping them straight in your head is the label on the tab.",
        ],
      },
      {
        img: "s5-09.jpg",
        at: 490,
        title: "Launch an agent in each one",
        body: [
          "Type <code>claude</code> in each tab. You now have the original agent plus three new ones, each in its own copy of the codebase, each unable to break the others.",
        ],
        quote:
          "We now have three different software developers all working for us in their own repos. How cool is that?",
      },
      {
        img: "s5-10.jpg",
        at: 545,
        title: "Brief each agent on its own slice",
        body: [
          "The profile agent gets a scoped brief: read how the profile page is built, replace the dummy data, make the calculations actually determine the right macro goals and total calories.",
          "It is also told the storage decision — local storage, persisting across refresh — so it does not have to invent one.",
        ],
      },
      {
        img: "s5-11.jpg",
        at: 620,
        title: "A fresh agent for the AI wiring",
        body: [
          "The AI integration worktree gets its own agent. Its job is the thing that makes the app more than a pretty shell: real model calls behind the meal estimates and recommendations.",
        ],
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
        img: "s5-13.jpg",
        at: 700,
        title: "The agents find real holes",
        body: [
          "The profile agent comes back with a plan — and with a genuine bug you never mentioned: a blank form would silently save as a thirty-year-old weighing zero kilograms.",
          "It proposes real validation instead. This is the kind of thing a careful reviewer catches, and it caught it before writing a line.",
        ],
      },
      {
        img: "s5-14.jpg",
        at: 730,
        title: "They negotiate the boundary between them",
        body: [
          "The storage agent knows another agent is working on the profile in a parallel worktree, because you told it. So it writes a plan that carves local storage into separate keys and names the exact file both branches will have to touch.",
          "It calls that section <strong>&ldquo;the coordination point&rdquo;</strong> — a contract between two agents that have never spoken. It will not entirely hold, and that is the next stage.",
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
        at: 8,
        title: "All three agents finish",
        body: [
          "The AI integration agent is done and did more than write code: it drove the whole loop in a real browser against the live API — describe a meal, answer the clarification, get an estimate, save it, get a recommendation, refine it.",
          "It verified its own work end to end rather than declaring victory.",
        ],
      },
      {
        img: "s6-02.jpg",
        at: 35,
        title: "And so is storage",
        body: [
          "The data storage agent has persistence working, with 190 unit tests and 30 end-to-end tests behind it.",
          "Three agents, three finished bodies of work, one elapsed stretch of time.",
        ],
      },
      {
        img: "s6-03.jpg",
        at: 62,
        title: "Ask each one to merge itself",
        body: [
          "Treat them exactly like junior developers who have finished a ticket: commit your changes and merge them into main.",
          "With a remote repository you would raise a pull request per worktree — the formal way multiple developers reconcile. There is no remote here, so this takes the shorter road.",
        ],
        quote:
          "Just like if you had junior developers working for you, you're now going to say: commit all changes and merge them into local main.",
      },
      {
        img: "s6-04.jpg",
        at: 80,
        title: "The first collision",
        body: [
          "&ldquo;Merge is blocked&rdquo; — main is checked out in another worktree, the one the profile agent is using.",
          "This is the predictable cost of parallelism, and it is not a crisis. It is the same conflict three human developers would hit, arriving at the same moment.",
        ],
      },
      {
        img: "s6-05.jpg",
        at: 105,
        title: "It investigates before it merges",
        body: [
          "The agent notices the profile agent already committed to main, and that its commit also touched local storage. Rather than merging on top and hoping, it goes and reads what the other agent actually built.",
        ],
      },
      {
        img: "s6-06.jpg",
        at: 150,
        title: "&ldquo;This is a collision, not a merge&rdquo;",
        body: [
          "Both agents independently created the same file and rewrote the same function. One of them also deleted the seed data. Merging blindly would destroy real work.",
          "So it stops: <strong>&ldquo;I've stopped before doing anything destructive.&rdquo;</strong> Then it asks how to reconcile, and marks the careful option as recommended. Take it.",
        ],
        quote:
          "There may be a merge conflict or two, but that is also something Claude Code is going to be perfectly good at fixing.",
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
        img: "s7-01.jpg",
        at: 15,
        title: "Get back on main and check the work survived",
        body: [
          "All three branches have merged. Now switch to main and ask the agent to <strong>verify</strong> that everything the three worktrees produced actually got committed and merged — that nothing was silently dropped.",
          "This step feels like paperwork. It is the most valuable thing in this video.",
        ],
        quote:
          "We're just going to make sure that nothing got dropped. Once we are done with this confirmation, then we'll know that all of the work that all of our parallel agents did successfully made it in.",
      },
      {
        img: "s7-02.jpg",
        at: 150,
        title: "It finds something",
        body: [
          "Main passes 221 tests, lint and build clean. But the agent surfaces <strong>&ldquo;The problem&rdquo;</strong>: the profile worktree has a staged, uncommitted change that would <em>remove every AI route</em> and strip the Anthropic dependency.",
          "Committing that would have quietly rolled back the entire AI integration that just merged in. Nobody would have noticed until the app stopped working.",
        ],
        quote:
          "So it did find a problem. This is great. I'm glad we did this. This is the whole reason we did this.",
      },
      {
        img: "s7-03.jpg",
        at: 190,
        title: "Don't pick from the menu — ask the better question",
        body: [
          "It offers three options: discard it, save it to a scratch branch, or show you the full diff. You could pick one. Do not.",
          "Instead, restate the actual goal and hand the judgment back: my goal is that all the work from those three worktrees ends up on main. Is what is left a byproduct of the merge conflicts, or is it meaningful work? If it is meaningful, merge it. Either way, leave main clean and working.",
        ],
        quote:
          "I'm basically just saying: hey, you figure it out. Decide if this was meaningful work or not.",
      },
      {
        img: "s7-04.jpg",
        at: 290,
        title: "A definitive answer",
        body: [
          "It does the real analysis: the leftover change is <strong>byte-identical</strong> to a commit already in main's history. There are zero commits on any of the three branches that are not already merged. No stashes, no dangling commits.",
          "&ldquo;It's a byproduct, not work.&rdquo; Now it can be discarded safely — not because it looked unimportant, but because that was proven.",
        ],
      },
      {
        img: "s7-05.jpg",
        at: 350,
        title: "Paste the error straight in",
        body: [
          "Meanwhile the dev server is throwing a wall of red. Next.js gives you a copy button for the error — use it, paste it into the agent, and ask it to fix it and run a lint check for anything else lurking.",
          "The diagnosis: this is a <strong>stale build cache</strong>, left over from switching package managers. Not a code bug at all.",
        ],
        quote:
          "A lint check is basically just a code quality check. And a lot of times it will help catch any bugs.",
      },
      {
        img: "s7-06.jpg",
        at: 400,
        title: "Do not test while the agent is writing",
        body: [
          "Things get messy here: a dev server keeps respawning and rewriting the build directory while the agent tries to clear it. Errors pile up that are not real.",
          "The lesson is practical. When an agent is actively editing the project, poking the app at the same time produces failures that belong to <em>neither</em> of you. Let it finish.",
        ],
        quote:
          "Claude's trying to clean stuff up while we're doing stuff. Claude's basically trying to fix something that wasn't broken — but while it's trying to fix it, it's breaking the new thing that's there.",
      },
      {
        img: "s7-07.jpg",
        at: 460,
        title: "Fixed — and it was never a code bug",
        body: [
          "All five routes compile and return clean. The agent was right: stale cache, not broken code.",
          "It is worth noticing that it told you that <em>before</em> it did the work, and it turned out to be correct. Believing it would have saved several minutes.",
        ],
      },
      {
        img: "s7-08.jpg",
        at: 530,
        title: "Clean sweep — then a new error",
        body: [
          "The bug sweep comes back clean: 221 unit tests, 38 end-to-end, TypeScript strict, lint, production build — all green.",
          "And then the app throws: <code>ANTHROPIC_API_KEY is not set. Add it to .env.local.</code>",
        ],
      },
      {
        img: "s7-09.jpg",
        at: 610,
        title: "The API key never made it — and that is correct",
        body: [
          "Here is the gotcha, and it is a good one. The key was created inside the AI integration worktree. Secrets are <strong>deliberately excluded from git</strong>, so when that branch merged into main, the key did not come with it.",
          "That is not a bug. That is the system protecting you from committing a secret. The fix is to create <code>.env.local</code> again on main and paste the key in. Diagnosing it took reading the server logs — a browser error starting with 5 means the failure happened on the server, so the terminal is where the answer is.",
        ],
        quote:
          "The API key never made it over. It was in the AI integration worktree — but you don't ever store API keys in git history.",
      },
      {
        img: "s7-10.jpg",
        at: 690,
        title: "It writes the failing test first, unprompted",
        body: [
          "A real bug surfaces: you type your goal in your own words, and the app uses those words to pick a radio button and then throws the text away.",
          "Watch what the agent does before fixing it: <strong>&ldquo;Let me write the failing tests first.&rdquo;</strong> Nobody asked it to this time. It learned that from how you prompted it back in stage four, and it kept doing it.",
        ],
        quote:
          "Even though we didn't say do test-driven development, it's picked up that that's how we want to work — because that's how we asked it to work earlier. It's just learning best practices from how you asked it in the first place.",
      },
      {
        img: "s7-12.jpg",
        at: 800,
        title: "It catches its own mistake",
        body: [
          "The new test fails — and the agent works out that <em>its own test</em> was wrong, not the code. It had tested with a brand-new empty user instead of a returning one.",
          "&ldquo;That's my bug, not the code's.&rdquo; It rewrites the test, and 228 now pass.",
        ],
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
        img: "s7-14.jpg",
        at: 930,
        title: "Log a real meal",
        body: [
          "Profile saved, the dashboard comes alive. Type a real meal in plain language — &ldquo;tuna poke&rdquo; — and the app asks its <em>one</em> round of clarifying questions: how big was the bowl, was there rice, any high-calorie additions.",
          "That is the rule from the very first spec document, all the way back in stage one, now running in a real product.",
        ],
        quote:
          "And I love the &lsquo;skip and use standard&rsquo; if you don't know the answers. This is really cool.",
      },
      {
        img: "s7-15.jpg",
        at: 975,
        title: "It estimates, and it is plausible",
        body: [
          "545 calories, 38g protein, 52g carbs, 20g fat, itemized as ahi tuna, white rice and spicy mayo. The fat number is high, and it is high for the right reason.",
          "The dashboard, the macro rings and the day's log all update together.",
        ],
        quote:
          "Yeah, the spicy mayo and tuna had a lot of fat in it. Okay, and yeah, it was my lunch. Look at that.",
      },
      {
        img: "s7-16.jpg",
        at: 1010,
        title: "Recommend, then refine in plain words",
        body: [
          "&ldquo;Recommend my next meal&rdquo; returns a grilled chicken and rice bowl sized to the calories left for the day.",
          "Then the feature that made the original spec worth writing: tell it what you actually have — &ldquo;I have some lamb and fresh veggies I want to cook&rdquo; — and it regenerates around your constraints, still aligned to the day's targets.",
        ],
      },
      {
        img: "s7-17.jpg",
        at: 1040,
        title: "The whole thing works",
        body: [
          "Reports shows target versus actual for the day, neutral by design. Profile is editable. The dashboard, the estimator, the recommendation loop and the persistence all work.",
          "One rough note became a working, tested application in roughly three hours of agent time. The idea stayed yours throughout — the agents closed the gaps and absorbed the elapsed time.",
        ],
        quote:
          "And, oh my gosh, the entire thing works. We built an entire working app in like three hours of Claude work time.",
      },
    ],
  },
];
