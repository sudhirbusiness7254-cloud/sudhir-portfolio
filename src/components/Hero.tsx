import { project } from "@/data/project";
import { ArrowIcon, GhostLink, GitHubIcon, LiveIcon, PrimaryLink, Reveal } from "@/components/ui";
import { BrowserFrame, PhoneFrame, desktopShot, mobileShot } from "@/components/frames";

export default function Hero() {
  return (
    <section id="projects" className="relative scroll-mt-20 overflow-hidden py-12 sm:py-16 lg:py-20">
      {/* backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-bg absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-navy-300/35 blur-[90px] sm:h-96 sm:w-96" />
        <div className="absolute -top-10 right-0 h-64 w-64 rounded-full bg-rose-300/30 blur-[90px] sm:h-96 sm:w-96" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#f6f9ff]" />
      </div>

      <div className="shell grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12 xl:gap-16">
        {/* ---------------- copy ---------------- */}
        <div className="flex flex-col items-start gap-5">
          <Reveal className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-500 px-3 py-1.5 text-[11px] font-bold tracking-wide text-white uppercase sm:text-xs">
              ★ Featured
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-navy-950 px-3 py-1.5 text-[11px] font-bold tracking-wide text-white uppercase sm:text-xs">
              <span className="h-1.5 w-1.5 animate-dot rounded-full bg-emerald-400" />
              {project.badge}
            </span>
            <span className="chip border-navy-900/12 bg-white/80 text-navy-800">
              {project.category}
            </span>
            <span className="chip border-emerald-300/60 bg-emerald-50 text-emerald-700">
              Delivered &amp; Live
            </span>
          </Reveal>

          <Reveal delay={60}>
            <h2
              className="font-display font-black tracking-tight text-navy-950"
              style={{ fontSize: "var(--step-4)", lineHeight: 1.02 }}
            >
              {project.title}
              <span className="mt-2 block bg-gradient-to-r from-brand-500 via-rose-500 to-navy-700 bg-clip-text text-transparent">
                {project.subtitle}
              </span>
            </h2>
          </Reveal>

          <Reveal delay={120} className="flex items-center gap-2 text-slate-500">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4 shrink-0 text-brand-500">
              <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            <span style={{ fontSize: "var(--step--1)" }} className="font-semibold">
              {project.location}
            </span>
          </Reveal>

          <Reveal delay={160}>
            <p
              className="text-slate-600"
              style={{ fontSize: "var(--step-0)", lineHeight: 1.65, maxWidth: "var(--measure)" }}
            >
              {project.description}
            </p>
          </Reveal>

          {/* tech */}
          <Reveal delay={200} className="w-full">
            <p className="mb-2 text-[11px] font-bold tracking-[0.14em] text-slate-400 uppercase">
              Tech stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t.name}
                  className="inline-flex items-center gap-2 rounded-xl border border-navy-900/10 bg-white/85 px-2.5 py-1.5 text-xs font-bold text-navy-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span
                    className="h-2.5 w-2.5 rounded-[4px]"
                    style={{ backgroundColor: t.color }}
                  />
                  {t.name}
                </span>
              ))}
            </div>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={240} className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:flex-wrap">
            <PrimaryLink href={project.liveUrl} className="w-full sm:w-auto">
              <LiveIcon className="h-4 w-4" /> Visit live website
              <ArrowIcon />
            </PrimaryLink>
            <GhostLink href="#preview" external={false} className="w-full sm:w-auto">
              Try responsive preview
            </GhostLink>
            <GhostLink href={project.repo.url} className="w-full sm:w-auto">
              <GitHubIcon className="h-4 w-4" /> Repository
            </GhostLink>
          </Reveal>

          {/* stats */}
          <Reveal delay={280} className="mt-2 w-full">
            <dl className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4">
              {project.stats.map((s) => (
                <div
                  key={s.label}
                  className="card rounded-2xl px-3 py-3 sm:px-4 sm:py-4"
                >
                  <dt
                    className="font-display font-extrabold text-navy-950"
                    style={{ fontSize: "var(--step-1)" }}
                  >
                    {s.value}
                  </dt>
                  <dd className="mt-0.5 text-[11px] leading-snug font-semibold text-slate-500 sm:text-xs">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* ---------------- mockup ---------------- */}
        <Reveal delay={120} className="relative">
          <div className="relative">
            {/* glow */}
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-navy-200/50 via-white to-rose-200/40 blur-2xl" />

            <BrowserFrame
              url={project.liveUrl.replace("https://", "")}
              src={desktopShot}
              alt="Mithila English Boarding School website homepage shown on a desktop browser — full screenshot, uncropped"
              caption="Desktop · 1920 × 1080 reference"
            />

            {/* floating phone — overlaps on larger screens only */}
            <div className="mt-6 flex justify-center sm:mt-8 lg:absolute lg:-bottom-14 lg:-left-6 lg:mt-0 lg:w-[30%] lg:justify-start xl:-left-10">
              <div className="animate-float w-[62%] max-w-[190px] lg:w-full lg:max-w-none">
                <PhoneFrame
                  url={project.liveUrl.replace("https://", "")}
                  src={mobileShot}
                  alt="Mobile view of the school website, complete screen shown without cropping"
                  caption="375 × 812"
                />
              </div>
            </div>
          </div>

          {/* floating tags */}
          <span className="absolute -top-3 right-2 hidden rounded-full border border-navy-900/10 bg-white/90 px-3 py-1.5 text-[11px] font-bold text-navy-800 shadow-lg backdrop-blur lg:block">
            ✔ No cropped images
          </span>
          <span className="absolute top-1/3 -right-2 hidden rounded-2xl border border-navy-900/10 bg-white/90 px-3 py-2 text-[11px] font-bold text-navy-800 shadow-lg backdrop-blur xl:block">
            320px → 5120px
          </span>
        </Reveal>
      </div>
    </section>
  );
}
