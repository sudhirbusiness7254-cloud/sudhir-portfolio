import { useEffect, useState } from "react";
import { coverage } from "@/data/project";
import { cn } from "@/utils/cn";
import { Reveal, SectionHeading } from "@/components/ui";

const bands = [
  { max: 480, label: "Small mobile" },
  { max: 600, label: "Mobile" },
  { max: 768, label: "Large mobile / small tablet" },
  { max: 1024, label: "Tablet" },
  { max: 1280, label: "Tablet landscape" },
  { max: 1600, label: "Laptop" },
  { max: 2560, label: "Desktop" },
  { max: Infinity, label: "Large screen / 4K+" },
];

function classify(w: number) {
  return bands.find((b) => w <= b.max)!.label;
}

export default function DeviceCoverage() {
  const [vp, setVp] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const update = () =>
      setVp({ w: window.innerWidth, h: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  const pct = vp.w ? Math.min(100, (Math.log2(vp.w / 300) / Math.log2(5120 / 300)) * 100) : 0;

  return (
    <section id="devices" className="relative scroll-mt-20 py-14 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Device matrix"
            title="Tested on every device class"
            sub="The layout was verified against this full matrix — from a 320px iPhone SE up to 5K and super-ultrawide displays. Tables collapse into cards on small screens."
          />
        </Reveal>

        {/* your viewport */}
        <Reveal delay={60} className="mt-6 sm:mt-8">
          <div className="card p-4 sm:p-5">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-[11px] font-bold tracking-[0.14em] text-slate-400 uppercase">
                  You are viewing on
                </p>
                <p
                  className="mt-1 font-display font-extrabold text-navy-950"
                  style={{ fontSize: "var(--step-2)" }}
                >
                  {vp.w || "—"} × {vp.h || "—"} px
                </p>
                <p className="text-xs font-semibold text-brand-600 sm:text-sm">
                  {vp.w ? classify(vp.w) : "resize the window to explore"}
                </p>
              </div>
              <div className="flex min-w-0 flex-wrap gap-2">
                <span className="chip border-navy-900/10 bg-white text-navy-800">fluid type</span>
                <span className="chip border-navy-900/10 bg-white text-navy-800">no horizontal scroll</span>
              </div>
            </div>

            <div className="relative mt-4 h-2.5 w-full overflow-hidden rounded-full bg-navy-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-navy-500 via-brand-500 to-rose-500 transition-all duration-500"
                style={{ width: `${pct}%` }}
              />
            </div>
            <div className="mt-2 flex justify-between font-mono text-[10px] text-slate-400 sm:text-[11px]">
              <span>320</span>
              <span className="hidden sm:inline">768</span>
              <span className="hidden sm:inline">1280</span>
              <span className="hidden sm:inline">2560</span>
              <span>5120</span>
            </div>
          </div>
        </Reveal>

        {/* tables */}
        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {coverage.map((group, i) => (
            <Reveal key={group.id} delay={i * 60} className={cn(i === 4 && "xl:col-span-1")}>
              <article className="card h-full overflow-hidden">
                <header className="flex items-center gap-3 border-b border-navy-900/8 bg-white/60 px-4 py-3.5">
                  <span aria-hidden className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-navy-50 text-base">
                    {group.icon}
                  </span>
                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-extrabold text-navy-950 sm:text-[15px]">
                      {group.title}
                    </h3>
                    <p className="truncate text-[11px] text-slate-500">{group.rows.length} breakpoints</p>
                  </div>
                </header>

                {/* mobile: stacked cards */}
                <ul className="divide-y divide-navy-900/6 sm:hidden">
                  {group.rows.map((r) => (
                    <li key={r.type} className="flex items-center justify-between gap-3 px-4 py-2.5">
                      <span className="text-[13px] font-semibold text-navy-900">{r.type}</span>
                      <span className="rounded-lg bg-navy-50 px-2 py-1 font-mono text-[11px] font-semibold text-navy-800">
                        {r.range}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* tablet and up: real table */}
                <table className="hidden w-full border-collapse sm:table">
                  <thead>
                    <tr className="text-left text-[11px] tracking-wider text-slate-400 uppercase">
                      <th className="px-4 py-2 font-bold">Device type</th>
                      <th className="px-4 py-2 text-right font-bold">Resolution</th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.rows.map((r) => (
                      <tr key={r.type} className="border-t border-navy-900/6 transition hover:bg-navy-50/60">
                        <td className="px-4 py-2.5 text-[13px] font-semibold text-navy-900">{r.type}</td>
                        <td className="px-4 py-2.5 text-right font-mono text-[12px] text-slate-600">
                          {r.range}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <p className="border-t border-navy-900/8 bg-navy-50/40 px-4 py-2.5 text-[11px] leading-relaxed text-slate-500">
                  {group.intro}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
