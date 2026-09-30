import { project } from "@/data/project";
import { ArrowIcon, GitHubIcon, LiveIcon } from "@/components/ui";

export default function Footer() {
  return (
    <footer className="relative mt-8 border-t border-navy-900/10 bg-navy-950 text-navy-100">
      <div className="shell py-12 sm:py-14">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_minmax(0,1fr)] md:gap-10">
          {/* brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-rose-500 font-display text-sm font-black text-white">
                SY
              </span>
              <div>
                <p className="font-display text-sm font-extrabold text-white">Sudhir Yadav</p>
                <p className="text-[11px] text-navy-200">Full Stack Developer · Nepal</p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-[13px] leading-relaxed text-navy-200">
              {project.shortDescription} Delivered as a client project for Mithila English Boarding
              School, Bardibas — built mobile-first and tested up to 5K displays.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-bold text-navy-950 transition hover:bg-navy-100"
              >
                <LiveIcon className="h-3.5 w-3.5" /> Live website <ArrowIcon />
              </a>
              <a
                href={project.repo.url}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-white/10"
              >
                <GitHubIcon className="h-3.5 w-3.5" /> Repository
              </a>
            </div>
          </div>

          {/* modules */}
          <nav aria-label="Skills">
            <p className="text-[11px] font-bold tracking-[0.14em] text-navy-300 uppercase">
              Skills
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-[13px] text-navy-200 md:grid-cols-1">
              {[
                "AI / ML & NLP",
                "React & Next.js",
                "MERN Stack",
                "Spring Boot (Java)",
                "Laravel & PHP",
                "Python",
                "MySQL & MongoDB",
                "Responsive Design",
              ].map((s) => (
                <li key={s}>
                  <a href="#about" className="transition hover:text-white">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* stack */}
          <div>
            <p className="text-[11px] font-bold tracking-[0.14em] text-navy-300 uppercase">
              Stack
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t.name}
                  className="rounded-lg border border-white/15 px-2.5 py-1 text-[11px] font-semibold text-navy-100"
                >
                  {t.name}
                </span>
              ))}
            </div>

            <p className="mt-5 text-[11px] font-bold tracking-[0.14em] text-navy-300 uppercase">
              Categories
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              <span className="rounded-full bg-brand-500/20 px-2.5 py-1 text-[11px] font-bold text-brand-500">
                {project.badge}
              </span>
              <span className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-bold text-white">
                {project.category}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-5 text-center sm:flex-row sm:text-left">
          <p className="text-[11px] text-navy-300 sm:text-xs">
            © {new Date().getFullYear()} {project.title} · Developed by Sudhir Yadav
          </p>
          <a
            href="#top"
            className="text-[11px] font-bold text-navy-200 transition hover:text-white sm:text-xs"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
