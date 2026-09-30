import { useEffect, useRef, useState } from "react";
import { expertise } from "@/data/expertise";
import { cn } from "@/utils/cn";
import { Reveal } from "@/components/ui";

function CatIcon({ name, active }: { name: string; active: boolean }) {
  const stroke = active ? "#fb923c" : "currentColor";
  const common = {
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: stroke,
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-5 w-5 shrink-0 sm:h-[22px] sm:w-[22px]",
    "aria-hidden": true,
  };
  switch (name) {
    case "layout":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
        </svg>
      );
    case "server":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="7" rx="2" />
          <rect x="3" y="14" width="18" height="7" rx="2" />
          <path d="M7 6.5h.01M7 17.5h.01" />
        </svg>
      );
    case "brain":
      return (
        <svg {...common}>
          <path d="M12 3v3M12 18v3M4.2 7.5l2.6 1.5M17.2 15l2.6 1.5M4.2 16.5l2.6-1.5M17.2 9l2.6-1.5" />
          <circle cx="12" cy="12" r="3.4" />
          <circle cx="12" cy="12" r="1" fill={stroke} />
        </svg>
      );
    case "db":
      return (
        <svg {...common}>
          <ellipse cx="12" cy="5.5" rx="8" ry="2.8" />
          <path d="M4 5.5v13c0 1.55 3.58 2.8 8 2.8s8-1.25 8-2.8v-13" />
          <path d="M4 12c0 1.55 3.58 2.8 8 2.8s8-1.25 8-2.8" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M14.7 6.3a4 4 0 0 0 5 5l-9.4 9.4a2.8 2.8 0 0 1-4-4z" />
          <path d="M14.7 6.3 18 3l3 3-3.3 3.3" />
        </svg>
      );
  }
}

export default function TechnicalExpertise() {
  const [activeId, setActiveId] = useState(expertise[0].id);
  const stripRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const active = expertise.find((e) => e.id === activeId) ?? expertise[0];

  /* Keep the active tab fully visible on small screens (no cut text) */
  useEffect(() => {
    const strip = stripRef.current;
    const card = cardRefs.current[activeId];
    if (!strip || !card) return;
    if (strip.scrollWidth <= strip.clientWidth + 4) return; // not scrollable
    const target =
      card.offsetLeft - (strip.clientWidth - card.offsetWidth) / 2;
    strip.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
  }, [activeId]);

  const activate = (id: string) => setActiveId(id);

  return (
    <section
      id="skills"
      className="relative scroll-mt-20 overflow-hidden bg-[#0b0f1a] py-14 text-slate-300 sm:py-16 lg:py-20"
    >
      {/* ---------- background: dots + constellation ---------- */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(148,163,184,0.16) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-orange-500/10 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />

        {/* constellation lines (hidden on tiny phones for clarity) */}
        <svg
          className="absolute inset-0 hidden h-full w-full opacity-40 min-[380px]:block"
          viewBox="0 0 400 600"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <g stroke="rgba(251,146,60,0.28)" strokeWidth="0.7" fill="none">
            <path d="M300 40 L360 130 L330 230 L375 330 L340 430 L370 540" />
            <path d="M250 90 L300 40 M360 130 L300 40 M330 230 L360 130" />
          </g>
          <g fill="#fb923c">
            <circle cx="300" cy="40" r="2.4" />
            <circle cx="330" cy="230" r="2" />
            <circle cx="340" cy="430" r="2.4" />
          </g>
          <g fill="#60a5fa">
            <circle cx="360" cy="130" r="2" />
            <circle cx="375" cy="330" r="2.2" />
          </g>
        </svg>
      </div>

      <div className="shell">
        {/* ---------- heading ---------- */}
        <Reveal>
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="font-mono text-[11px] font-semibold tracking-[0.2em] text-slate-500 sm:text-xs">
              02
            </span>
            <span className="h-px w-8 shrink-0 bg-orange-500/50 sm:w-12" />
            <span className="font-mono text-[10px] font-semibold tracking-[0.16em] text-orange-400 uppercase min-[420px]:tracking-[0.24em] sm:text-xs">
              Technologies I work with
            </span>
          </div>

          <h2
            className="mt-4 font-display font-black tracking-tight text-white"
            style={{ fontSize: "var(--step-3)", lineHeight: 1.05 }}
          >
            Technical
            <br className="min-[420px]:hidden" />
            <span className="min-[420px]:hidden"> </span>
            Expertise
          </h2>

          <p
            className="mt-3.5 max-w-[52ch] text-slate-400"
            style={{ fontSize: "var(--step-0)", lineHeight: 1.65 }}
          >
            Frontend, backend, AI, databases, and the tools that bring a complete
            application to life.
          </p>
        </Reveal>

        {/* ---------- CATEGORY STRIP (the fixed part) ---------- */}
        <Reveal delay={70}>
          <div className="relative mt-7 sm:mt-9">
            {/* edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-4 bg-gradient-to-r from-[#0b0f1a] to-transparent sm:w-8" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-4 bg-gradient-to-l from-[#0b0f1a] to-transparent sm:w-8" />

            <div
              ref={stripRef}
              role="tablist"
              aria-label="Skill categories"
              className="no-scrollbar flex snap-x snap-mandatory gap-2.5 overflow-x-auto scroll-smooth pb-1 sm:grid sm:grid-cols-3 sm:gap-3 sm:overflow-visible lg:grid-cols-5"
            >
              {expertise.map((cat) => {
                const isActive = cat.id === activeId;
                return (
                  <button
                    key={cat.id}
                    id={`tab-${cat.id}`}
                    ref={(el) => {
                      cardRefs.current[cat.id] = el;
                    }}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="expertise-panel"
                    onClick={() => activate(cat.id)}
                    className={cn(
                      // ⬇️ mobile: exactly 2 cards per screen width → full labels fit
                      "group relative flex w-[calc(50%-0.3125rem)] shrink-0 snap-start flex-col items-start gap-2 overflow-hidden rounded-2xl border p-3 text-left transition-all duration-300 sm:w-auto sm:p-4",
                      "min-h-[104px] sm:min-h-[132px]",
                      isActive
                        ? "border-orange-500/60 bg-gradient-to-b from-orange-500/[0.14] to-white/[0.03] shadow-[0_0_0_1px_rgba(251,146,60,0.25),0_18px_40px_-24px_rgba(251,146,60,0.5)]"
                        : "border-white/10 bg-white/[0.035] hover:border-white/25 hover:bg-white/[0.06]",
                    )}
                  >
                    {/* active left bar */}
                    <span
                      aria-hidden
                      className={cn(
                        "absolute top-0 bottom-0 left-0 w-[3px] rounded-full transition-all duration-300",
                        isActive
                          ? "bg-gradient-to-b from-orange-400 to-orange-600"
                          : "bg-transparent",
                      )}
                    />

                    <CatIcon name={cat.icon} active={isActive} />

                    {/* label — wraps, never truncates */}
                    <span
                      className={cn(
                        "min-w-0 text-[13px] leading-[1.2] font-extrabold hyphenate sm:text-[15px]",
                        isActive ? "text-white" : "text-slate-300",
                      )}
                    >
                      {cat.name}
                    </span>

                    <span className="mt-auto font-mono text-[10px] tracking-wide text-slate-500">
                      {String(cat.tools.length).padStart(2, "0")} skills
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* ---------- DETAIL PANEL ---------- */}
        <Reveal delay={120}>
          <div
            id="expertise-panel"
            role="tabpanel"
            aria-labelledby={`tab-${active.id}`}
            className="mt-5 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-4 sm:mt-6 sm:p-6 lg:p-8"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
              <div className="min-w-0">
                <h3
                  className="font-display font-black tracking-tight text-white"
                  style={{ fontSize: "var(--step-2)", lineHeight: 1.12 }}
                >
                  {active.name}
                </h3>
                <p
                  className="mt-2 max-w-[56ch] text-slate-400"
                  style={{ fontSize: "var(--step--1)", lineHeight: 1.7 }}
                >
                  {active.blurb}
                </p>
              </div>
              <span className="w-fit shrink-0 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1.5 font-mono text-[10px] font-semibold tracking-wider text-orange-300 uppercase">
                {String(active.tools.length).padStart(2, "0")} tools
              </span>
            </div>

            <div className="mt-4 h-px w-full bg-white/10 sm:mt-5" />

            <ul className="mt-1">
              {active.tools.map((tool, i) => (
                <li
                  key={tool}
                  className="group flex items-center gap-3 border-b border-white/[0.07] py-3 transition-colors last:border-0 hover:border-orange-500/25 sm:gap-5 sm:py-3.5"
                >
                  <span className="w-6 shrink-0 font-mono text-[11px] font-semibold text-orange-400/80 sm:w-8 sm:text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1 text-[14px] font-bold break-words text-slate-100 transition-colors group-hover:text-white sm:text-[17px]">
                    {tool}
                  </span>
                  <span
                    aria-hidden
                    className="shrink-0 font-mono text-sm text-orange-500 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                  >
                    →
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* ---------- all-at-a-glance chips ---------- */}
        <Reveal delay={160}>
          <p className="mt-7 font-mono text-[10px] tracking-[0.16em] text-slate-500 uppercase sm:text-[11px]">
            Full stack at a glance
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5 sm:gap-2">
            {expertise.flatMap((c) => c.tools).map((t, i) => (
              <span
                key={`${t}-${i}`}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-[11px] font-semibold text-slate-300 transition hover:border-orange-500/40 hover:text-white sm:text-xs"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
