import { profile, skillGroups } from "@/data/profile";
import profilePhoto from "@/assets/profile.jpg";
import { Reveal, SectionHeading } from "@/components/ui";

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-14 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-white/70 to-transparent" />
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="About me"
            title="Frontend first, full stack when it matters"
            sub="I care about pixels, performance and people being able to actually use what I build."
          />
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:mt-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-8">
          {/* ---- bio card ---- */}
          <Reveal>
            <article className="card h-full p-4 sm:p-6">
              <div className="flex items-center gap-3.5">
                <img
                  src={profilePhoto}
                  alt=""
                  width={1086}
                  height={1448}
                  loading="lazy"
                  className="h-16 w-16 shrink-0 rounded-2xl object-cover object-top shadow-md sm:h-20 sm:w-20"
                />
                <div className="min-w-0">
                  <h3 className="font-display text-base font-extrabold text-navy-950 sm:text-lg">
                    {profile.name}
                  </h3>
                  <p className="text-[12px] font-semibold text-brand-600 sm:text-[13px]">
                    {profile.role}
                  </p>
                  <p className="mt-0.5 text-[11px] text-slate-500 sm:text-xs">
                    {profile.location}
                  </p>
                </div>
              </div>

              <p
                className="mt-4 text-slate-600"
                style={{ fontSize: "var(--step--1)", lineHeight: 1.7 }}
              >
                {profile.bio}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {["Frontend", "MERN Stack", "Laravel / PHP", "Spring Boot", "AI / ML"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-navy-900/10 bg-navy-50/70 px-2.5 py-1 text-[11px] font-bold text-navy-800"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={`mailto:${profile.email}`}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-navy-950 px-4 py-2.5 text-[13px] font-bold text-white transition hover:bg-navy-900 sm:w-auto"
              >
                ✉️ Contact me
              </a>
            </article>
          </Reveal>

          {/* ---- skills grid ---- */}
          <div className="grid grid-cols-1 gap-3 min-[460px]:grid-cols-2">
            {skillGroups.map((g, i) => (
              <Reveal key={g.id} delay={i * 55}>
                <article className="card group h-full p-4 transition hover:-translate-y-1">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="h-8 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: g.accent }}
                    />
                    <h3 className="min-w-0 text-[13px] leading-tight font-extrabold text-navy-950 sm:text-sm">
                      {g.name}
                    </h3>
                    <span className="ml-auto shrink-0 font-mono text-[10px] text-slate-400">
                      {g.items.length}
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {g.items.map((s) => (
                      <span
                        key={s}
                        className="rounded-lg border border-navy-900/10 bg-white px-2 py-1 text-[11px] font-semibold text-navy-900 transition group-hover:border-navy-900/20"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
