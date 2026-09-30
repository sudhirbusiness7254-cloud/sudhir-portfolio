import { gitCommands, project } from "@/data/project";
import { cn } from "@/utils/cn";
import { CopyButton, GitHubIcon, LiveIcon, Reveal, SectionHeading } from "@/components/ui";

const readme = `# ${project.title} — ${project.subtitle}

![${project.badge}](https://img.shields.io/badge/${project.badge.replace(/ /g, "%20")}-EA4A10?style=for-the-badge)
![${project.category}](https://img.shields.io/badge/${project.category.replace(/ /g, "%20")}-0D1F56?style=for-the-badge)

> ${project.description}

**Live:** ${project.liveUrl}

## Features
- Fully responsive — 320px phones → 4K / 5K / ultrawide monitors
- Academics, Results, Faculty, Admissions, Events, Campus Life
- Dynamic photo gallery with categories + lightbox
- Announcements / notice board and student communication
- Clean, accessible UI with fast page loads

## Tech Stack
HTML5 · CSS3 · JavaScript · PHP · MySQL · Bootstrap

## Local Setup
\`\`\`bash
git clone https://github.com/${project.repo.owner}/${project.repo.name}.git
cd ${project.repo.name}
# import database.sql, then point your virtual host at /public
\`\`\`

---
Developed by **Sudhir Yadav** · Full Stack Developer`;

const description = `${project.description} Project badge: ${project.badge}. Category: ${project.category}.`;

export default function RepoSection() {
  return (
    <section id="repo" className="relative scroll-mt-20 py-14 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-white/60 to-transparent" />
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="GitHub"
            title="Repository, About section & push kit"
            sub="Copy-ready description, topics, homepage URL and commands so the repo page looks as polished as the website itself."
          />
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
          {/* repo card */}
          <Reveal>
            <article className="card h-full overflow-hidden">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 border-b border-navy-900/8 px-4 py-3.5">
                <GitHubIcon className="h-5 w-5 shrink-0 text-navy-950" />
                <span className="min-w-0 text-[12px] break-all text-slate-500 sm:text-sm [overflow-wrap:anywhere]">
                  {project.repo.owner} /
                </span>
                <span className="font-display text-sm font-extrabold break-all text-brand-600 sm:text-[15px]">
                  {project.repo.name}
                </span>
                <span className="rounded-full border border-navy-900/12 px-2 py-0.5 text-[10px] font-bold text-slate-500">
                  {project.repo.visibility}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 border-b border-navy-900/8 px-4 py-2.5 text-[12px] font-semibold text-slate-500">
                {["Code", "Issues", "Pull requests", "Actions", "Projects"].map((t, i) => (
                  <span
                    key={t}
                    className={cn(
                      "rounded-full px-2.5 py-1",
                      i === 0 && "bg-navy-950 text-white",
                    )}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2 px-4 py-3.5 sm:grid-cols-4">
                {[
                  { k: "Branch", v: project.repo.branch },
                  { k: "Commits", v: "27+" },
                  { k: "Pages", v: "10+" },
                  { k: "Breakpoints", v: "28" },
                ].map((s) => (
                  <div key={s.k} className="rounded-xl bg-navy-50/70 px-3 py-2">
                    <p className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">{s.k}</p>
                    <p className="font-display text-sm font-extrabold text-navy-950">{s.v}</p>
                  </div>
                ))}
              </div>

              {/* README preview */}
              <div className="border-t border-navy-900/8 bg-white/60">
                <div className="flex flex-col items-stretch gap-2 px-4 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-2">
                  <p className="text-[11px] font-bold tracking-[0.14em] text-slate-400 uppercase">
                    README.md
                  </p>
                  <CopyButton
                    value={readme}
                    label="Copy README"
                    className="w-full justify-center sm:w-auto"
                  />
                </div>
                <pre className="no-scrollbar max-h-64 overflow-auto border-t border-navy-900/6 bg-navy-950 px-4 py-3.5 font-mono text-[11px] leading-relaxed text-navy-100 sm:text-xs">
                  {readme}
                </pre>
              </div>
            </article>
          </Reveal>

          {/* about panel */}
          <Reveal delay={80}>
            <article className="card h-full p-4 sm:p-5">
              <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                <h3 className="font-display text-base font-extrabold text-navy-950">About</h3>
                <CopyButton
                  value={description}
                  label="Copy description"
                  className="w-full justify-center sm:w-auto"
                />
              </div>

              <p className="mt-3 min-w-0 rounded-xl bg-navy-50/70 p-3 text-[13px] leading-relaxed break-words text-slate-600 italic [overflow-wrap:anywhere]">
                {description}
              </p>

              <p className="mt-4 text-[11px] font-bold tracking-[0.14em] text-slate-400 uppercase">
                Website
              </p>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-1 flex min-w-0 items-start gap-2 text-[12px] leading-relaxed font-semibold break-all text-brand-600 underline decoration-brand-300 underline-offset-2 hover:text-brand-500 sm:text-[13px]"
              >
                <LiveIcon className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                <span className="min-w-0 [overflow-wrap:anywhere]">
                  {project.liveUrl.replace("https://", "")}
                </span>
              </a>

              <p className="mt-4 text-[11px] font-bold tracking-[0.14em] text-slate-400 uppercase">
                Topics
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {project.topics.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-navy-100/80 px-2.5 py-1 font-mono text-[10px] font-semibold text-navy-800 sm:text-[11px]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2">
                <a
                  href={project.repo.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy-950 px-3 py-2.5 text-xs font-bold text-white transition hover:bg-navy-900"
                >
                  <GitHubIcon className="h-4 w-4" /> Open repo
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-navy-900/12 bg-white px-3 py-2.5 text-xs font-bold text-navy-900 transition hover:border-navy-900/30"
                >
                  <LiveIcon className="h-4 w-4" /> Live site
                </a>
              </div>
            </article>
          </Reveal>
        </div>

        {/* commands */}
        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {gitCommands.map((c, i) => (
            <Reveal key={c.title} delay={i * 70}>
              <article className="card flex h-full flex-col overflow-hidden">
                <div className="flex flex-col items-stretch gap-2 border-b border-navy-900/8 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-2">
                  <h3 className="min-w-0 text-[13px] leading-snug font-extrabold text-navy-950">
                    {c.title}
                  </h3>
                  <CopyButton value={c.code} label="Copy" className="w-full justify-center sm:w-auto" />
                </div>
                <pre className="no-scrollbar flex-1 overflow-x-auto bg-navy-950 px-3 py-3.5 font-mono text-[11px] leading-relaxed text-navy-100 sm:px-4 sm:text-xs">
                  {c.code}
                </pre>
              </article>
            </Reveal>
          ))}
        </div>

        {/* security note */}
        <Reveal className="mt-4">
          <div className="card border-amber-300/60 bg-amber-50/80 p-4 sm:p-5">
            <div className="flex items-start gap-3">
              <span aria-hidden className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-amber-400/30 text-lg">
                🔐
              </span>
              <div>
                <h3 className="text-sm font-extrabold text-amber-900 sm:text-[15px]">
                  Security note — never commit a GitHub token
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-amber-900/85">
                  A personal access token shared in a chat is treated as compromised. Revoke it
                  immediately at <span className="font-semibold">GitHub → Settings → Developer settings → Personal access tokens</span>,
                  then generate a fine-grained token limited to this repository only. Push with the
                  Git Credential Manager or <code className="rounded bg-amber-200/60 px-1 font-mono text-[11px]">gh auth login</code> instead
                  of pasting the token into a remote URL, and keep secrets in
                  <code className="mx-1 rounded bg-amber-200/60 px-1 font-mono text-[11px]">.env</code> files
                  that are listed in <code className="rounded bg-amber-200/60 px-1 font-mono text-[11px]">.gitignore</code>.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
