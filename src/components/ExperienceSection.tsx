import { experience } from "@/data/profile";
import { CopyButton, Reveal, SectionHeading } from "@/components/ui";

function Tick() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-[3px] h-3.5 w-3.5 shrink-0 text-emerald-600"
      aria-hidden="true"
    >
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative scroll-mt-20 py-14 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-35 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Where I've worked & what I shipped"
            sub="Frontend development internship plus a project-based Java development internship with two complete applications."
          />
        </Reveal>

        {/* timeline */}
        <ol className="relative mt-6 space-y-4 sm:mt-8 sm:space-y-6">
          <span
            aria-hidden
            className="absolute top-2 left-[15px] hidden w-0.5 bg-gradient-to-b from-navy-300 via-navy-200 to-transparent sm:block"
            style={{ bottom: "2rem" }}
          />

          {experience.map((exp, idx) => (
            <Reveal as="li" key={exp.id} delay={idx * 90} className="relative">
              <div className="flex gap-0 sm:gap-5">
                {/* rail dot */}
                <span
                  aria-hidden
                  className="relative z-10 hidden h-8 w-8 shrink-0 place-items-center rounded-full border-4 border-[#f6f9ff] shadow-md sm:grid"
                  style={{ backgroundColor: exp.accent }}
                >
                  <span className="h-2 w-2 rounded-full bg-white" />
                </span>

                <article className="card w-full min-w-0 overflow-hidden">
                  {/* header */}
                  <header
                    className="flex flex-col gap-2 px-4 py-3.5 sm:flex-row sm:items-start sm:justify-between sm:gap-4 sm:px-5"
                    style={{
                      background: `linear-gradient(100deg, ${exp.accent}12, transparent 70%)`,
                    }}
                  >
                    <div className="min-w-0">
                      <span
                        className="inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-white uppercase"
                        style={{ backgroundColor: exp.accent }}
                      >
                        {exp.type}
                      </span>
                      <h3 className="mt-2 font-display text-base leading-tight font-extrabold text-navy-950 sm:text-lg">
                        {exp.role}
                      </h3>
                      <p className="mt-0.5 text-[12px] font-bold break-words text-navy-700 sm:text-[13px] [overflow-wrap:anywhere]">
                        {exp.company}
                      </p>
                    </div>
                    <span className="chip w-fit shrink-0 border-navy-900/12 bg-white text-navy-800">
                      {exp.period}
                    </span>
                  </header>

                  <div className="border-t border-navy-900/8 px-4 py-4 sm:px-5">
                    <p
                      className="text-slate-700 italic"
                      style={{ fontSize: "var(--step--1)", lineHeight: 1.7 }}
                    >
                      {exp.summary}
                    </p>

                    {/* bullets */}
                    {exp.bullets && exp.bullets.length > 0 && (
                      <>
                        <p className="mt-4 text-[10px] font-bold tracking-[0.14em] text-slate-400 uppercase">
                          Key responsibilities
                        </p>
                        <ul className="mt-2.5 space-y-2">
                          {exp.bullets.map((b) => (
                            <li key={b} className="flex items-start gap-2.5">
                              <Tick />
                              <span
                                className="min-w-0 text-slate-600"
                                style={{ fontSize: "var(--step--1)", lineHeight: 1.65 }}
                              >
                                {b}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}

                    {/* projects */}
                    {exp.projects && exp.projects.length > 0 && (
                      <>
                        <p className="mt-5 text-[10px] font-bold tracking-[0.14em] text-slate-400 uppercase">
                          Projects delivered · {exp.projects.length}
                        </p>
                        <div className="mt-2.5 grid grid-cols-1 gap-3 min-[560px]:grid-cols-2">
                          {exp.projects.map((p, i) => (
                            <article
                              key={p.name}
                              className="rounded-2xl border border-navy-900/10 bg-white p-3.5 transition hover:-translate-y-0.5 hover:border-brand-300/70 hover:shadow-md"
                            >
                              <div className="flex items-start gap-2.5">
                                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-brand-500 to-rose-500 font-display text-[11px] font-black text-white">
                                  {i + 1}
                                </span>
                                <h4 className="min-w-0 text-[13px] leading-snug font-extrabold text-navy-950 sm:text-sm">
                                  {p.name}
                                </h4>
                              </div>
                              <p className="mt-2 text-[12px] leading-relaxed text-slate-600">
                                {p.detail}
                              </p>
                              <div className="mt-2.5 flex flex-wrap gap-1.5">
                                {p.stack.map((s) => (
                                  <span
                                    key={s}
                                    className="rounded-md bg-navy-50 px-2 py-0.5 font-mono text-[10px] font-semibold text-navy-800"
                                  >
                                    {s}
                                  </span>
                                ))}
                              </div>
                            </article>
                          ))}
                        </div>
                      </>
                    )}

                    {/* skills */}
                    <div className="mt-5 flex flex-col items-stretch gap-2.5 border-t border-navy-900/8 pt-3.5 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                      <div className="min-w-0">
                        <p className="text-[10px] font-bold tracking-[0.14em] text-slate-400 uppercase">
                          Skills
                        </p>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {exp.skills.map((s) => (
                            <span
                              key={s}
                              className="rounded-full border border-navy-900/10 bg-navy-50/70 px-2.5 py-1 text-[11px] font-semibold text-navy-800"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                      <CopyButton
                        value={`${exp.role} — ${exp.company}\n${exp.summary}\n\n${
                          exp.bullets?.map((b) => `• ${b}`).join("\n") ?? ""
                        }${
                          exp.projects
                            ? `\n\n${exp.projects
                                .map((p) => `${p.name}: ${p.detail}`)
                                .join("\n\n")}`
                            : ""
                        }\n\nSkills: ${exp.skills.join(", ")}`}
                        label="Copy"
                        className="w-full justify-center sm:w-auto"
                      />
                    </div>
                  </div>
                </article>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
