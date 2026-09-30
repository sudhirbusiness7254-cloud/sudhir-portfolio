import { profile, skillTicker } from "@/data/profile";
import profilePhoto from "@/assets/profile.jpg";
import { ArrowIcon, GitHubIcon, LiveIcon } from "@/components/ui";

export default function ProfileHero() {
  const row = [...skillTicker, ...skillTicker];

  return (
    <section id="top" className="relative overflow-hidden pt-20 pb-10 sm:pt-24 lg:pt-28">
      {/* backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-bg absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]" />
        <div className="absolute -top-20 -left-24 h-64 w-64 rounded-full bg-navy-300/35 blur-[90px] sm:h-96 sm:w-96" />
        <div className="absolute top-10 right-0 h-56 w-56 rounded-full bg-rose-300/25 blur-[90px] sm:h-80 sm:w-80" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#f6f9ff]" />
      </div>

      <div className="shell grid items-center gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-14">
        {/* ------------------- photo ------------------- */}
        <div className="order-1 lg:order-2">
          <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[380px]">
            {/* gradient ring */}
            <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-navy-500 via-brand-500 to-rose-500 opacity-25 blur-lg sm:-inset-3 sm:rounded-[2.5rem]" />
            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/70 bg-white p-1.5 shadow-[0_30px_70px_-35px_rgba(13,31,86,0.6)] sm:rounded-[2rem] sm:p-2">
              <img
                src={profilePhoto}
                alt={`${profile.name} — ${profile.role}`}
                width={1086}
                height={1448}
                className="block h-auto w-full rounded-[1.15rem] object-cover object-top sm:rounded-[1.5rem]"
              />
              {/* name plate */}
              <figcaption className="absolute inset-x-1.5 bottom-1.5 flex items-center gap-2.5 rounded-[1rem] bg-navy-950/85 px-3 py-2 backdrop-blur-md sm:inset-x-2 sm:bottom-2 sm:px-3.5 sm:py-2.5">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-brand-500 to-rose-500 font-display text-[11px] font-black text-white">
                  {profile.initials}
                </span>
                <span className="min-w-0 leading-tight">
                  <span className="block truncate text-[12px] font-extrabold text-white sm:text-[13px]">
                    {profile.name}
                  </span>
                  <span className="block truncate text-[10px] font-semibold text-navy-200 sm:text-[11px]">
                    {profile.role}
                  </span>
                </span>
              </figcaption>
            </div>

            {/* floating chips */}
            <span className="absolute -top-2 -left-2 hidden rounded-xl border border-navy-900/10 bg-white/95 px-2.5 py-1.5 text-[10px] font-bold text-navy-900 shadow-lg backdrop-blur sm:block">
              🇳🇵 Nepal
            </span>
            <span className="absolute top-1/4 -right-2 hidden rounded-xl border border-emerald-300/60 bg-white/95 px-2.5 py-1.5 text-[10px] font-bold text-emerald-700 shadow-lg backdrop-blur sm:block">
              ● Available
            </span>
            <span className="absolute -bottom-2 -left-2 hidden rounded-xl border border-navy-900/10 bg-white/95 px-2.5 py-1.5 text-[10px] font-bold text-navy-900 shadow-lg backdrop-blur sm:block">
              MERN · Laravel · Spring Boot
            </span>
          </div>
        </div>

        {/* ------------------- copy ------------------- */}
        <div className="order-2 flex flex-col items-start gap-4 lg:order-1 lg:gap-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-navy-950 px-3 py-1.5 text-[10px] font-bold tracking-wide text-white uppercase sm:text-[11px]">
              <span className="h-1.5 w-1.5 animate-dot rounded-full bg-emerald-400" />
              {profile.availability}
            </span>
            <span className="chip border-navy-900/12 bg-white/80 text-navy-800">
              Frontend · Full Stack
            </span>
          </div>

          <h1
            className="font-display font-black tracking-tight text-navy-950"
            style={{ fontSize: "var(--step-4)", lineHeight: 1.02 }}
          >
            {profile.name}
            <span className="mt-2 block bg-gradient-to-r from-brand-500 via-rose-500 to-navy-700 bg-clip-text text-transparent">
              {profile.tagline}
            </span>
          </h1>

          <p
            className="text-slate-600"
            style={{ fontSize: "var(--step-0)", lineHeight: 1.65, maxWidth: "var(--measure)" }}
          >
            {profile.bioShort}
          </p>

          {/* skill ticker */}
          <div className="w-full">
            <p className="mb-2 text-[10px] font-bold tracking-[0.14em] text-slate-400 uppercase sm:text-[11px]">
              Skills
            </p>
            <div className="marquee relative overflow-hidden rounded-xl border border-navy-900/10 bg-white/70 py-2">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-white to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-white to-transparent" />
              <div className="marquee-track">
                {row.map((s, i) => (
                  <span
                    key={`${s}-${i}`}
                    className="flex shrink-0 items-center gap-2 px-2.5 text-[11px] font-bold whitespace-nowrap text-navy-900 sm:text-xs"
                  >
                    <span className="h-1 w-1 rounded-full bg-brand-500" />
                    {s}
                  </span>
                ))}
              </div>
              <span className="sr-only">Skills: {skillTicker.join(", ")}</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:flex-wrap">
            <a
              href="#experience"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-rose-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-brand-500/25 transition hover:shadow-xl active:scale-[0.98] sm:w-auto"
            >
              View experience <ArrowIcon />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-900/15 bg-white/80 px-5 py-3 text-sm font-bold text-navy-900 backdrop-blur transition hover:border-navy-900/35 hover:bg-white active:scale-[0.98] sm:w-auto"
            >
              Featured project
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-900/15 bg-white/80 px-5 py-3 text-sm font-bold text-navy-900 backdrop-blur transition hover:border-navy-900/35 hover:bg-white active:scale-[0.98] sm:w-auto"
            >
              <GitHubIcon className="h-4 w-4" /> GitHub
            </a>
          </div>

          {/* quick stats */}
          <dl className="mt-1 grid w-full grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4">
            {[
              { v: "2", l: "Internships" },
              { v: "10+", l: "Projects built" },
              { v: "3", l: "Core stacks" },
              { v: "320→5K", l: "Responsive range" },
            ].map((s) => (
              <div key={s.l} className="card rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3">
                <dt
                  className="font-display font-extrabold text-navy-950"
                  style={{ fontSize: "var(--step-1)" }}
                >
                  {s.v}
                </dt>
                <dd className="text-[10px] leading-snug font-semibold text-slate-500 sm:text-[11px]">
                  {s.l}
                </dd>
              </div>
            ))}
          </dl>

          <p className="flex items-center gap-2 text-[11px] font-semibold text-slate-500 sm:text-xs">
            <LiveIcon className="h-3.5 w-3.5 shrink-0 text-brand-500" />
            {profile.location}
          </p>
        </div>
      </div>
    </section>
  );
}
