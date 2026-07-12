import type { Metadata } from "next";
import type { ReactNode } from "react";
import CodeBlock from "@/components/CodeBlock";
import { Platform, PlatformTabs } from "@/components/Platform";

export const metadata: Metadata = {
  title: "Setting Up Claude Code",
  description:
    "Step-by-step instructions for installing Claude Code and running it in your terminal, on macOS and Windows.",
};

function Step({
  n,
  title,
  children,
}: {
  n: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="relative border-t border-foreground/10 py-10">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-sm text-foreground/40">
          {String(n).padStart(2, "0")}
        </span>
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      </div>
      <div className="mt-4 pl-0 sm:pl-10">{children}</div>
    </section>
  );
}

function Callout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="my-5 rounded-xl border border-amber-500/30 bg-amber-500/[0.07] p-4">
      <p className="text-sm font-semibold text-amber-700 dark:text-amber-400">
        {title}
      </p>
      <div className="mt-1 text-sm leading-relaxed text-foreground/75">
        {children}
      </div>
    </div>
  );
}

export default function SettingUpClaudeCode() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16 sm:py-24">
      <header>
        <p className="font-mono text-sm uppercase tracking-widest text-foreground/50">
          Guide
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Setting up Claude Code
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-pretty text-foreground/70">
          Claude Code is Anthropic&rsquo;s coding agent that runs in your
          terminal. This walks you from nothing installed to a working session
          in about ten minutes.
        </p>
      </header>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-medium text-foreground/60">
          Choose your operating system:
        </p>
        <PlatformTabs />
      </div>
      <p className="mt-3 text-sm text-foreground/50">
        Every command below updates to match your choice.
      </p>

      <div className="mt-6">
        <Step n={1} title="Check that your machine qualifies">
          <Platform
            mac={
              <ul className="space-y-2 text-foreground/75">
                <li>&bull; macOS 13.0 (Ventura) or newer</li>
                <li>&bull; 4 GB of RAM or more</li>
                <li>&bull; An internet connection</li>
                <li>
                  &bull; The <strong>Terminal</strong> app &mdash; press{" "}
                  <kbd className="rounded border border-foreground/20 px-1.5 py-0.5 font-mono text-xs">
                    Cmd
                  </kbd>{" "}
                  +{" "}
                  <kbd className="rounded border border-foreground/20 px-1.5 py-0.5 font-mono text-xs">
                    Space
                  </kbd>
                  , type &ldquo;Terminal&rdquo;, hit Enter
                </li>
              </ul>
            }
            windows={
              <ul className="space-y-2 text-foreground/75">
                <li>&bull; Windows 10 (build 1809) or newer</li>
                <li>&bull; 4 GB of RAM or more</li>
                <li>&bull; An internet connection</li>
                <li>
                  &bull; <strong>PowerShell</strong> &mdash; press the Start
                  key, type &ldquo;PowerShell&rdquo;, hit Enter
                </li>
              </ul>
            }
          />
        </Step>

        <Step n={2} title="Install Claude Code">
          <p className="text-foreground/75">
            Paste this into your terminal and press Enter. It downloads and
            installs the official binary.
          </p>
          <Platform
            mac={
              <CodeBlock
                label="Terminal"
                code="curl -fsSL https://claude.ai/install.sh | bash"
              />
            }
            windows={
              <>
                <CodeBlock
                  label="PowerShell"
                  code="irm https://claude.ai/install.ps1 | iex"
                />
                <p className="text-sm text-foreground/60">
                  Not sure which terminal you&rsquo;re in? PowerShell&rsquo;s
                  prompt starts with{" "}
                  <code className="font-mono text-foreground/80">PS C:\</code>.
                  If yours lacks the <code className="font-mono">PS</code>,
                  you&rsquo;re in Command Prompt &mdash; use this instead:
                </p>
                <CodeBlock
                  label="Command Prompt (CMD)"
                  code="curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd"
                />
              </>
            }
          />

          <p className="mt-6 text-foreground/75">
            Prefer a package manager? This works too:
          </p>
          <Platform
            mac={
              <CodeBlock
                label="Homebrew"
                code="brew install --cask claude-code"
              />
            }
            windows={
              <CodeBlock
                label="WinGet"
                code="winget install Anthropic.ClaudeCode"
              />
            }
          />
          <p className="text-sm text-foreground/60">
            The installer above updates itself automatically in the background.{" "}
            <Platform mac={<>Homebrew</>} windows={<>WinGet</>} />
            {
              " installs do not, so you’d have to upgrade by hand. That’s why the first option is recommended."
            }
          </p>
        </Step>

        <Step n={3} title="Close and reopen your terminal">
          <p className="text-foreground/75">
            The installer adds <code className="font-mono">claude</code> to your
            PATH, and your terminal only reads that when it starts. Quit it
            fully and open a new window, then confirm the install worked:
          </p>
          <CodeBlock code="claude --version" />
          <p className="text-foreground/75">
            You should see a version number. If you instead see{" "}
            <em>&ldquo;command not found&rdquo;</em>, jump to troubleshooting at
            the bottom.
          </p>
        </Step>

        <Step n={4} title="Make sure you have a paid Claude plan">
          <Callout title="This trips up almost everyone">
            Claude Code does <strong>not</strong> work on the free Claude.ai
            plan. You need Claude <strong>Pro</strong>, <strong>Max</strong>,{" "}
            <strong>Team</strong>, or <strong>Enterprise</strong>, or a{" "}
            <strong>Claude Console</strong> account with pre-paid API credits.
          </Callout>
          <p className="text-foreground/75">
            If you don&rsquo;t have one yet, set it up at{" "}
            <a
              className="font-medium underline underline-offset-4 hover:text-foreground"
              href="https://claude.com/pricing"
              target="_blank"
              rel="noopener noreferrer"
            >
              claude.com/pricing
            </a>{" "}
            before continuing. Pro is the usual starting point.
          </p>
        </Step>

        <Step n={5} title="Open a project and start Claude Code">
          <p className="text-foreground/75">
            Claude Code works inside whatever folder you launch it from, so move
            into a project first. Replace the path with a real folder on your
            machine:
          </p>
          <Platform
            mac={
              <CodeBlock
                label="Terminal"
                code={"cd ~/Documents/my-project\nclaude"}
              />
            }
            windows={
              <CodeBlock
                label="PowerShell"
                code={"cd $HOME\\Documents\\my-project\nclaude"}
              />
            }
          />
          <p className="text-sm text-foreground/60">
            Shortcut: type <code className="font-mono">cd</code> followed by a
            space, then drag the folder from{" "}
            <Platform mac={<>Finder</>} windows={<>File Explorer</>} /> onto the
            terminal window. It fills in the path for you.
          </p>
        </Step>

        <Step n={6} title="Log in">
          <p className="text-foreground/75">
            The first time you run <code className="font-mono">claude</code>, it
            opens your browser to sign in. Approve it there and return to the
            terminal &mdash; your credentials are saved, so this is a one-time
            step.
          </p>
          <p className="mt-4 text-foreground/75">
            To switch accounts later, type this <em>inside</em> a running
            session:
          </p>
          <CodeBlock code="/login" />
        </Step>

        <Step n={7} title="Ask your first question">
          <p className="text-foreground/75">
            You&rsquo;re in. Talk to it in plain English &mdash; no special
            syntax. Try:
          </p>
          <CodeBlock code="what does this project do?" />
          <p className="text-foreground/75">
            Claude reads whatever files it needs on its own; you don&rsquo;t
            have to paste code in. Then try asking it to change something:
          </p>
          <CodeBlock code="add a hello world function to the main file" />
          <p className="text-foreground/75">
            It will show you the edit and wait for your approval before touching
            any file.
          </p>
        </Step>

        <Step n={8} title="Commands worth knowing">
          <p className="text-foreground/75">
            Run these in your terminal to <strong>start</strong> Claude Code:
          </p>
          <div className="my-4 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <tbody className="divide-y divide-foreground/10">
                <tr>
                  <td className="w-40 py-2.5 pr-4 font-mono text-foreground/90">
                    claude
                  </td>
                  <td className="py-2.5 text-foreground/70">
                    Start an interactive session
                  </td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-4 font-mono text-foreground/90">
                    claude -c
                  </td>
                  <td className="py-2.5 text-foreground/70">
                    Continue your most recent conversation
                  </td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-4 font-mono text-foreground/90">
                    claude -r
                  </td>
                  <td className="py-2.5 text-foreground/70">
                    Pick an older conversation to resume
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-foreground/75">
            And these run <strong>inside</strong> a session:
          </p>
          <div className="my-4 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <tbody className="divide-y divide-foreground/10">
                <tr>
                  <td className="w-40 py-2.5 pr-4 font-mono text-foreground/90">
                    /help
                  </td>
                  <td className="py-2.5 text-foreground/70">
                    List everything available
                  </td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-4 font-mono text-foreground/90">
                    /clear
                  </td>
                  <td className="py-2.5 text-foreground/70">
                    Wipe the conversation and start fresh
                  </td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-4 font-mono text-foreground/90">
                    /exit
                  </td>
                  <td className="py-2.5 text-foreground/70">
                    Quit (or press Ctrl+D)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Step>

        <Step n={9} title="If something went wrong">
          <p className="text-foreground/75">
            This command inspects your setup and reports what&rsquo;s broken:
          </p>
          <CodeBlock code="claude doctor" />

          <h3 className="mt-8 font-semibold">
            &ldquo;claude: command not found&rdquo;
          </h3>
          <p className="mt-2 text-foreground/75">
            Almost always means you didn&rsquo;t restart your terminal after
            installing. Fully quit it &mdash; a new tab isn&rsquo;t enough
            &mdash; and reopen.
          </p>

          <Platform
            mac={
              <>
                <h3 className="mt-6 font-semibold">
                  The install command hangs or fails
                </h3>
                <p className="mt-2 text-foreground/75">
                  School and conference Wi-Fi often blocks the download. Try a
                  different network or a phone hotspot.
                </p>
              </>
            }
            windows={
              <>
                <h3 className="mt-6 font-semibold">
                  &ldquo;irm is not recognized&rdquo;
                </h3>
                <p className="mt-2 text-foreground/75">
                  You&rsquo;re in Command Prompt, not PowerShell. Either open
                  PowerShell, or use the CMD command from step 2.
                </p>

                <h3 className="mt-6 font-semibold">
                  Recommended: install Git for Windows
                </h3>
                <p className="mt-2 text-foreground/75">
                  Not required, but it lets Claude Code run standard Bash
                  commands rather than falling back to PowerShell. Grab it from{" "}
                  <a
                    className="font-medium underline underline-offset-4 hover:text-foreground"
                    href="https://git-scm.com/downloads/win"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    git-scm.com
                  </a>
                  .
                </p>
              </>
            }
          />

          <p className="mt-8 text-foreground/75">
            Still stuck? Anthropic&rsquo;s full install troubleshooting lives at{" "}
            <a
              className="font-medium underline underline-offset-4 hover:text-foreground"
              href="https://code.claude.com/docs/en/troubleshoot-install"
              target="_blank"
              rel="noopener noreferrer"
            >
              code.claude.com/docs
            </a>
            .
          </p>
        </Step>
      </div>

      <footer className="border-t border-foreground/10 pt-8 text-sm text-foreground/50">
        Instructions follow Anthropic&rsquo;s official{" "}
        <a
          className="underline underline-offset-4 hover:text-foreground"
          href="https://code.claude.com/docs/en/quickstart"
          target="_blank"
          rel="noopener noreferrer"
        >
          Claude Code documentation
        </a>
        .
      </footer>
    </main>
  );
}
