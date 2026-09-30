import { profile } from "@/data/profile";
import profilePhoto from "@/assets/profile.jpg";
import { Reveal, SectionHeading } from "@/components/ui";

const focusAreas = [
  { label: "Frontend Engineering", detail: "React · Next.js · Responsive UI" },
  { label: "Backend & APIs", detail: "Laravel · PHP · Spring Boot" },
  { label: "AI / ML & NLP", detail: "Python · scikit-learn · NLP" },
  { label: "Databases", detail: "MySQL · MongoDB" },
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-14 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-white/70 to-transparent" />
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="01 · About me"
            title="Frontend first, full stack when it matters"
            sub="I care about pixels, performance and people being able to actually use what I build."
          />
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-6">
          {/* ---- bio ---- */}
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

              <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-navy-950 px-4 py-2.5 text-[13px] font-bold text-white transition hover:bg-navy-900"
                >
                  ✉️ Contact me
                </a>
                <a
                  href="#skills"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-navy-900/12 bg-white px-4 py-2.5 text-[13px] font-bold text-navy-900 transition hover:border-navy-900/30"
                >
                  View skills →
                </a>
              </div>
            </article>
          </Reveal>

          {/* ---- focus areas ---- */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {focusAreas.map((f, i) => (
              <Reveal key={f.label} delay={i * 60}>
                <article className="card flex h-full items-start gap-3 p-4 transition hover:-translate-y-1">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-navy-800 to-navy-950 font-mono text-[10px] font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[13px] leading-tight font-extrabold text-navy-950 sm:text-sm">
                      {f.label}
                    </h3>
                    <p className="mt-1 text-[12px] leading-snug text-slate-500">{f.detail}</p>
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
