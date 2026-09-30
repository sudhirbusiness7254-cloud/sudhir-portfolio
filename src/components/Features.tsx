import { highlights, modules } from "@/data/project";
import { FeatureIcon, Reveal, SectionHeading } from "@/components/ui";

export default function Features() {
  return (
    <section id="features" className="relative scroll-mt-20 py-14 sm:py-16 lg:py-20">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Highlights"
            title="Built clean, fast and mobile-first"
            sub="Every section of the school website was engineered to load fast, read clearly and stay usable on a low-end Android phone as well as on a studio display."
          />
        </Reveal>

        {/* highlights */}
        <div className="mt-6 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:mt-8 lg:grid-cols-4 lg:gap-4">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 70}>
              <article className="card group h-full p-4 transition hover:-translate-y-1 hover:shadow-[0_28px_60px_-34px_rgba(13,31,86,0.55)] sm:p-5">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-navy-800 to-navy-950 text-white shadow-md shadow-navy-900/25 transition group-hover:scale-105 sm:h-11 sm:w-11">
                  <FeatureIcon name={h.icon} />
                </span>
                <h3
                  className="mt-3.5 font-display font-extrabold text-navy-950"
                  style={{ fontSize: "var(--step-1)" }}
                >
                  {h.title}
                </h3>
                <p className="mt-1.5 text-slate-600" style={{ fontSize: "var(--step--1)", lineHeight: 1.6 }}>
                  {h.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* modules */}
        <Reveal className="mt-12 sm:mt-16">
          <SectionHeading
            eyebrow="Site map"
            title="Pages & modules shipped"
            sub="Ten fully responsive sections covering everything a parent, student or teacher needs."
          />
        </Reveal>

        <div className="mt-5 grid grid-cols-1 gap-3 min-[460px]:grid-cols-2 lg:grid-cols-3 min-[1400px]:grid-cols-5">
          {modules.map((m, i) => (
            <Reveal key={m.name} delay={i * 45}>
              <article className="card h-full p-4 transition hover:-translate-y-1 hover:border-brand-300/70">
                <div className="flex items-center gap-2.5">
                  <span aria-hidden className="text-lg sm:text-xl">{m.icon}</span>
                  <h3 className="text-[13px] leading-tight font-extrabold text-navy-950 sm:text-sm">
                    {m.name}
                  </h3>
                </div>
                <p className="mt-2 text-[12px] leading-relaxed text-slate-600 sm:text-[13px]">
                  {m.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* playbook */}
        <Reveal className="mt-12 sm:mt-16">
          <SectionHeading
            eyebrow="Responsive playbook"
            title="How the layout stays pixel-perfect everywhere"
            sub="The rules applied on every page of the school website — and on this case study page too."
          />
        </Reveal>

        <ul className="mt-5 grid grid-cols-1 gap-3 min-[460px]:grid-cols-2 xl:grid-cols-3">
          {playbook.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 55}>
              <div className="card flex h-full items-start gap-3 p-4">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-700">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                    <path d="m5 13 4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-[13px] font-extrabold text-navy-950 sm:text-sm">{p.title}</h3>
                  <p className="mt-1 text-[12px] leading-relaxed text-slate-600 sm:text-[13px]">
                    {p.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

const playbook = [
  {
    title: "Fluid type with clamp()",
    body: "Headings and body text scale continuously from 320px to 5120px — no abrupt jumps, no oversized text on phones.",
  },
  {
    title: "No fixed pixel widths",
    body: "Grids use minmax(0, 1fr) and flex-wrap so columns reflow instead of overflowing. Zero horizontal scroll on any device.",
  },
  {
    title: "object-fit: contain on screenshots",
    body: "Project images keep their natural aspect ratio inside frames, so the full photo is always visible — never cropped or stretched.",
  },
  {
    title: "Thumb-first navigation",
    body: "Below 1024px the header collapses into a 44px-tall drawer with large tap targets and safe-area padding for notched phones.",
  },
  {
    title: "Tables that collapse",
    body: "Device matrices render as real tables on tablets and desktops, then become stacked cards on small screens for readability.",
  },
  {
    title: "Accessible by default",
    body: "prefers-reduced-motion support, visible focus rings, semantic landmarks, alt text and AA-contrast colour pairings throughout.",
  },
];
