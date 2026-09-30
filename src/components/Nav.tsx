import { useEffect, useState } from "react";
import { project } from "@/data/project";
import { cn } from "@/utils/cn";
import { GitHubIcon, LiveIcon } from "@/components/ui";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Project" },
  { id: "preview", label: "Preview" },
  { id: "devices", label: "Devices" },
  { id: "screenshots", label: "Gallery" },
  { id: "repo", label: "GitHub" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      let current = "about";
      links.forEach((l) => {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= 140) current = l.id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-navy-900/10 bg-white/85 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <nav className="shell flex h-14 items-center justify-between gap-3 sm:h-16">
        {/* brand */}
        <a href="#top" className="flex min-w-0 items-center gap-2.5">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-navy-700 to-navy-950 font-display text-[13px] font-black text-white shadow-md shadow-navy-900/30 sm:h-9 sm:w-9 sm:text-sm">
            SY
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display text-[13px] font-extrabold tracking-tight text-navy-950 sm:text-sm">
              Sudhir Yadav
            </span>
            <span className="hidden truncate text-[11px] font-medium text-slate-500 sm:block">
              Frontend &amp; Full Stack Developer
            </span>
          </span>
        </a>

        {/* desktop links */}
        <div className="hidden items-center gap-1 rounded-full border border-navy-900/10 bg-white/70 p-1 backdrop-blur lg:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={cn(
                "rounded-full px-3 py-1.5 text-[13px] font-semibold transition",
                active === l.id
                  ? "bg-navy-950 text-white shadow-sm"
                  : "text-navy-900/70 hover:bg-navy-50 hover:text-navy-950",
              )}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* actions */}
        <div className="flex shrink-0 items-center gap-2">
          <a
            href={project.repo.url}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub repository"
            className="hidden h-9 w-9 place-items-center rounded-full border border-navy-900/12 bg-white/80 text-navy-900 transition hover:bg-navy-950 hover:text-white sm:grid"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-500 to-rose-500 px-3 py-2 text-xs font-bold text-white shadow-md shadow-brand-500/25 transition hover:shadow-lg active:scale-95 sm:px-4 sm:text-[13px]"
          >
            <LiveIcon className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Live Site</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-full border border-navy-900/12 bg-white/80 text-navy-950 lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={cn(
                  "absolute left-0 h-0.5 w-4 rounded bg-current transition-all",
                  open ? "top-1.5 rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute top-1.5 left-0 h-0.5 w-4 rounded bg-current transition-all",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-0.5 w-4 rounded bg-current transition-all",
                  open ? "top-1.5 -rotate-45" : "top-3",
                )}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* mobile drawer */}
      <div
        className={cn(
          "overflow-hidden border-navy-900/10 bg-white/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-96 border-t opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="shell grid grid-cols-2 gap-2 py-4">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-xl border px-3 py-2.5 text-sm font-semibold transition",
                active === l.id
                  ? "border-navy-900/20 bg-navy-950 text-white"
                  : "border-navy-900/10 bg-white text-navy-900",
              )}
            >
              {l.label}
            </a>
          ))}
          <a
            href={project.repo.url}
            target="_blank"
            rel="noreferrer noopener"
            onClick={() => setOpen(false)}
            className="col-span-2 inline-flex items-center justify-center gap-2 rounded-xl border border-navy-900/10 bg-navy-50 px-3 py-2.5 text-sm font-bold text-navy-900"
          >
            <GitHubIcon className="h-4 w-4" /> View repository
          </a>
        </div>
      </div>
    </header>
  );
}
