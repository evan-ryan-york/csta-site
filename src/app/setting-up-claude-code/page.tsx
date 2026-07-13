import type { Metadata } from "next";
import type { ReactNode } from "react";
import CodeBlock from "@/components/CodeBlock";
import { Platform, PlatformTabs } from "@/components/Platform";

export const metadata: Metadata = {
  title: "Setting Up Claude Code",
  description:
    "A plain-English, step-by-step guide to creating a Claude account and installing Claude Code, for people who have never used a terminal.",
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
    <section className="border-t border-foreground/10 py-10">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-sm text-foreground/40">
          {String(n).padStart(2, "0")}
        </span>
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      </div>
      <div className="mt-4 sm:pl-10">{children}</div>
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

function Key({ children }: { children: ReactNode }) {
  return (
    <kbd className="whitespace-nowrap rounded border border-foreground/25 bg-foreground/5 px-1.5 py-0.5 font-mono text-xs">
      {children}
    </kbd>
  );
}

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      className="font-medium underline underline-offset-4 hover:text-foreground"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
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
          Claude Code is an AI assistant that works on your computer. This guide
          takes you from nothing to a working setup in about 15 minutes.
        </p>
        <p className="mt-4 leading-relaxed text-pretty text-foreground/70">
          You don&rsquo;t need to know how to code, and you don&rsquo;t need to
          have used a terminal before. Follow the steps in order and
          you&rsquo;ll be fine.
        </p>
      </header>

      <div className="mt-10 rounded-xl border border-foreground/10 bg-foreground/[0.03] p-5">
        <p className="text-sm font-semibold">What you&rsquo;ll need</p>
        <ul className="mt-2 space-y-1.5 text-sm text-foreground/75">
          <li>
            &bull; A laptop running macOS 13 or newer, or Windows 10 or newer
          </li>
          <li>&bull; An internet connection</li>
          <li>
            &bull; A payment method &mdash; Claude Code requires a paid plan
            (step 1 explains this)
          </li>
        </ul>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-medium text-foreground/60">
          First, pick your computer:
        </p>
        <PlatformTabs />
      </div>
      <p className="mt-3 text-sm text-foreground/50">
        Every instruction below changes to match what you choose.
      </p>

      <div className="mt-6">
        <Step n={1} title="Create your Claude account">
          <p className="text-foreground/75">
            Claude Code signs in with a Claude account, so make one before you
            install anything.
          </p>
          <ol className="mt-4 space-y-3 text-foreground/75">
            <li>
              <strong>1.</strong>{" "}Go to{" "}
              <ExternalLink href="https://claude.ai/signup">
                claude.ai/signup
              </ExternalLink>{" "}
              and sign up with your email address or a Google account.
            </li>
            <li>
              <strong>2.</strong>{" "}Check your inbox and confirm your email if
              you&rsquo;re asked to.
            </li>
            <li>
              <strong>3.</strong>{" "}Once you&rsquo;re signed in, click{" "}
              <strong>Upgrade</strong>{" "}and choose the <strong>Pro</strong>{" "}plan.
            </li>
          </ol>

          <Callout title="Important: the free plan will not work">
            Claude Code is <strong>not</strong>{" "}included in the free Claude
            account. You need a paid plan, and <strong>Pro</strong>{" "}is the right
            one for almost everyone &mdash; it&rsquo;s{" "}
            <strong>$20 per month</strong>{" "}(cheaper if you pay for a year up
            front). If you skip this step, everything below will install fine
            and then refuse to log you in.
          </Callout>

          <p className="text-sm text-foreground/60">
            Already have a paid Claude account? You&rsquo;re done with this
            step. Plans and prices are listed at{" "}
            <ExternalLink href="https://claude.com/pricing">
              claude.com/pricing
            </ExternalLink>
            .
          </p>
        </Step>

        <Step n={2} title="Open your terminal">
          <p className="text-foreground/75">
            The terminal is an app that&rsquo;s already on your computer.
            Instead of clicking buttons, you type commands into it. It looks
            like a plain window with a blinking cursor.
          </p>
          <Platform
            mac={
              <div className="mt-4 rounded-xl border border-foreground/10 p-5">
                <p className="text-sm font-semibold">On your Mac</p>
                <ol className="mt-3 space-y-2 text-foreground/75">
                  <li>
                    <strong>1.</strong>{" "}Press <Key>Cmd</Key> + <Key>Space</Key>{" "}
                    together. A search box appears in the middle of the screen.
                  </li>
                  <li>
                    <strong>2.</strong>{" "}Type <strong>Terminal</strong>.
                  </li>
                  <li>
                    <strong>3.</strong>{" "}Press <Key>Enter</Key>.
                  </li>
                </ol>
              </div>
            }
            windows={
              <div className="mt-4 rounded-xl border border-foreground/10 p-5">
                <p className="text-sm font-semibold">On your PC</p>
                <ol className="mt-3 space-y-2 text-foreground/75">
                  <li>
                    <strong>1.</strong>{" "}Press <Key>Win</Key> + <Key>X</Key>{" "}
                    together. A menu appears.
                  </li>
                  <li>
                    <strong>2.</strong>{" "}Click{" "}
                    <strong>Windows PowerShell</strong>{" "}(it may just say{" "}
                    <strong>Terminal</strong>).
                  </li>
                </ol>
              </div>
            }
          />
          <p className="mt-5 text-foreground/75">
            A window opens with a blinking cursor. That&rsquo;s it &mdash; leave
            it open and move to the next step.
          </p>
          <Platform
            mac={null}
            windows={
              <Callout title="Make sure it says PS at the start of the line">
                Windows has two of these apps and they look nearly identical.
                PowerShell shows{" "}
                <code className="font-mono">PS C:\Users\YourName&gt;</code>. The
                other one, Command Prompt, shows the same thing <em>without</em>{" "}
                the <code className="font-mono">PS</code>. You want the one with{" "}
                <code className="font-mono">PS</code>.
              </Callout>
            }
          />
        </Step>

        <Step n={3} title="Install Claude Code">
          <p className="text-foreground/75">
            Copy the line below using the Copy button, click into your{" "}
            <Platform mac={<>terminal</>} windows={<>PowerShell</>} />{" "}window,
            paste it with{" "}
            <Platform
              mac={
                <>
                  <Key>Cmd</Key> + <Key>V</Key>
                </>
              }
              windows={
                <>
                  <Key>Ctrl</Key> + <Key>V</Key>
                </>
              }
            />
            , and press <Key>Enter</Key>.
          </p>
          <Platform
            mac={
              <CodeBlock
                label="Terminal"
                code="curl -fsSL https://claude.ai/install.sh | bash"
              />
            }
            windows={
              <CodeBlock
                label="PowerShell"
                code="irm https://claude.ai/install.ps1 | iex"
              />
            }
          />
          <p className="text-foreground/75">
            Text will scroll by for a minute while it downloads. When it
            finishes, you&rsquo;ll see{" "}
            <strong>&ldquo;Claude Code successfully installed!&rdquo;</strong>
          </p>
          <p className="mt-4 text-sm text-foreground/60">
            That&rsquo;s the only time you&rsquo;ll run this. Claude Code
            updates itself from now on.
          </p>
        </Step>

        <Step n={4} title="Close the terminal and open it again">
          <p className="text-foreground/75">
            This sounds pointless, but it isn&rsquo;t: your terminal only
            notices newly installed programs when it starts up. Close the window
            completely, then open a new one the same way you did in step 2.
          </p>
          <p className="mt-4 text-foreground/75">
            To check that the install worked, type this and press{" "}
            <Key>Enter</Key>:
          </p>
          <CodeBlock code="claude --version" />
          <p className="text-foreground/75">
            If you see a version number, you&rsquo;re good. If you see{" "}
            <em>&ldquo;command not found&rdquo;</em>{" "}or{" "}
            <em>&ldquo;not recognized&rdquo;</em>, see the last step.
          </p>
        </Step>

        <Step n={5} title="Pick a folder to work in">
          <p className="text-foreground/75">
            Claude Code works on the files in one folder at a time, so you have
            to tell it which folder to open. Any folder works &mdash; if
            you&rsquo;re just experimenting, make an empty one on your Desktop
            called <strong>claude-test</strong>.
          </p>
          <p className="mt-4 text-foreground/75">
            Type <code className="font-mono">cd</code>{" "}and a space (that means
            &ldquo;change directory&rdquo;), then{" "}
            <strong>
              drag the folder from{" "}
              <Platform mac={<>Finder</>} windows={<>File Explorer</>} />{" "}into
              the terminal window
            </strong>
            . The folder&rsquo;s location gets typed out for you. Press{" "}
            <Key>Enter</Key>.
          </p>
          <Platform
            mac={
              <CodeBlock
                label="Terminal — example"
                code="cd /Users/yourname/Desktop/claude-test"
              />
            }
            windows={
              <CodeBlock
                label="PowerShell — example"
                code="cd C:\Users\yourname\Desktop\claude-test"
              />
            }
          />
        </Step>

        <Step n={6} title="Start Claude Code and sign in">
          <p className="text-foreground/75">
            Now type this and press <Key>Enter</Key>:
          </p>
          <CodeBlock code="claude" />
          <p className="text-foreground/75">
            The first time you do this, a browser window opens asking you to
            sign in. Use the account you made in step 1. Approve it, then come
            back to the terminal &mdash; you&rsquo;ll see a welcome screen.
          </p>
          <p className="mt-4 text-foreground/75">
            You only sign in once. From now on,{" "}
            <code className="font-mono">claude</code>{" "}just starts.
          </p>
        </Step>

        <Step n={7} title="Ask it something">
          <p className="text-foreground/75">
            You&rsquo;re in. Type in plain English, like you&rsquo;re texting a
            colleague, and press <Key>Enter</Key>. There&rsquo;s no special
            syntax to learn. Try:
          </p>
          <CodeBlock code="make me a simple webpage that says hello world" />
          <p className="text-foreground/75">
            Claude will tell you what it plans to do and ask permission before
            it creates or changes any file. Say yes, and it writes the file into
            the folder you chose. You can double-click that file to open it.
          </p>
          <p className="mt-4 text-foreground/75">
            Some other things worth trying:
          </p>
          <CodeBlock code="explain what this folder contains" />
          <CodeBlock code="I want to build a class attendance tracker. What would I need?" />
        </Step>

        <Step n={8} title="Getting around inside Claude Code">
          <div className="my-2 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <tbody className="divide-y divide-foreground/10">
                <tr>
                  <td className="w-44 py-3 pr-4 font-medium">
                    Your mouse won&rsquo;t work
                  </td>
                  <td className="py-3 text-foreground/70">
                    You can&rsquo;t click things here. Use the arrow keys.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">Stop it mid-answer</td>
                  <td className="py-3 text-foreground/70">
                    Press <Key>Esc</Key>.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">See what it can do</td>
                  <td className="py-3 text-foreground/70">
                    Type <code className="font-mono">/help</code>{" "}and press{" "}
                    <Key>Enter</Key>.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">Leave</td>
                  <td className="py-3 text-foreground/70">
                    Type <code className="font-mono">exit</code>. To come back
                    later, open your terminal,{" "}
                    <code className="font-mono">cd</code>{" "}to your folder, and
                    type <code className="font-mono">claude</code>{" "}again.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Step>

        <Step n={9} title="If something goes wrong">
          <p className="text-foreground/75">
            Start here. This command checks your setup and tells you
            what&rsquo;s wrong:
          </p>
          <CodeBlock code="claude doctor" />

          <Platform
            mac={
              <>
                <h3 className="mt-8 font-semibold">
                  &ldquo;command not found: claude&rdquo;
                </h3>
                <p className="mt-2 text-foreground/75">
                  Usually this just means you didn&rsquo;t fully close and
                  reopen the terminal after installing (step 4). A new tab
                  isn&rsquo;t enough &mdash; quit the app entirely and reopen
                  it.
                </p>
                <p className="mt-3 text-foreground/75">
                  If it still isn&rsquo;t found, paste this in, press{" "}
                  <Key>Enter</Key>, then close and reopen the terminal once
                  more:
                </p>
                <CodeBlock
                  label="Terminal"
                  code={
                    "echo 'export PATH=\"$HOME/.local/bin:$PATH\"' >> ~/.zshrc\nsource ~/.zshrc"
                  }
                />
              </>
            }
            windows={
              <>
                <h3 className="mt-8 font-semibold">
                  &ldquo;irm is not recognized&rdquo;
                </h3>
                <p className="mt-2 text-foreground/75">
                  You&rsquo;re in Command Prompt, not PowerShell. Close the
                  window, then reopen it with <Key>Win</Key> + <Key>X</Key> and
                  pick <strong>Windows PowerShell</strong>{" "}this time.
                </p>

                <h3 className="mt-8 font-semibold">
                  &ldquo;claude is not recognized&rdquo;
                </h3>
                <p className="mt-2 text-foreground/75">
                  Usually this just means you didn&rsquo;t fully close and
                  reopen PowerShell after installing (step 4). If reopening
                  doesn&rsquo;t fix it, paste these two lines in, press{" "}
                  <Key>Enter</Key>, then close and reopen PowerShell:
                </p>
                <CodeBlock
                  label="PowerShell"
                  code={
                    "$currentPath = [Environment]::GetEnvironmentVariable('PATH', 'User')\n[Environment]::SetEnvironmentVariable('PATH', \"$currentPath;$env:USERPROFILE\\.local\\bin\", 'User')"
                  }
                />
              </>
            }
          />

          <h3 className="mt-8 font-semibold">It won&rsquo;t let me log in</h3>
          <p className="mt-2 text-foreground/75">
            You&rsquo;re almost certainly still on the free plan. Go back to
            step 1 and upgrade to Pro.
          </p>

          <h3 className="mt-8 font-semibold">The install hangs or fails</h3>
          <p className="mt-2 text-foreground/75">
            School and conference Wi-Fi often block the download. Try a
            different network, or your phone&rsquo;s hotspot.
          </p>

          <p className="mt-8 text-foreground/75">
            Still stuck? Anthropic&rsquo;s own beginner guide covers more errors
            at{" "}
            <ExternalLink href="https://code.claude.com/docs/en/terminal-guide">
              code.claude.com/docs
            </ExternalLink>
            .
          </p>
        </Step>
      </div>

      <footer className="border-t border-foreground/10 pt-8 text-sm text-foreground/50">
        Based on Anthropic&rsquo;s official{" "}
        <ExternalLink href="https://code.claude.com/docs/en/terminal-guide">
          Claude Code documentation
        </ExternalLink>
        . Prices and steps were current as of July 2026.
      </footer>
    </main>
  );
}
