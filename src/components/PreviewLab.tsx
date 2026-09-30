import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { deviceGroups, project } from "@/data/project";
import { cn } from "@/utils/cn";
import { LiveIcon, Reveal, SectionHeading } from "@/components/ui";

function useElementWidth<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setWidth(el.clientWidth);
    update();
    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", update);
      return () => window.removeEventListener("resize", update);
    }
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return { ref, width };
}

export default function PreviewLab() {
  const [groupId, setGroupId] = useState(deviceGroups[0].id);
  const [index, setIndex] = useState(3);
  const [landscape, setLandscape] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const { ref, width } = useElementWidth<HTMLDivElement>();

  const group = deviceGroups.find((g) => g.id === groupId) ?? deviceGroups[0];
  const device = group.devices[Math.min(index, group.devices.length - 1)];

  // keep index valid when switching groups
  useEffect(() => {
    setIndex((i) => Math.min(i, group.devices.length - 1));
  }, [groupId, group.devices.length]);

  // show the loader again whenever the viewport/URL changes
  useEffect(() => {
    setLoaded(false);
  }, [groupId, index, landscape, reloadKey]);

  const w = landscape ? device.h : device.w;
  const h = landscape ? device.w : device.h;

  const available = Math.max(width - 8, 160);
  const scale = Math.min(1, available / w);
  const maxStageHeight = width < 640 ? 420 : width < 1024 ? 520 : 600;
  const hEff = Math.min(h, Math.round(maxStageHeight / scale));
  const stageW = Math.round(w * scale);
  const stageH = Math.round(hEff * scale);

  return (
    <section id="preview" className="relative scroll-mt-20 py-14 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-white/70 to-transparent" />
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Live responsive lab"
            title={<>Preview the real website on <span className="text-brand-600">every screen</span></>}
            sub="Pick any device from a 320px phone to a 5K display — the live site is rendered inside a true-to-size viewport and scaled to fit your screen. Rotate, switch and compare."
          />
        </Reveal>

        <Reveal delay={80} className="mt-6 sm:mt-8">
          <div className="card overflow-hidden p-3 sm:p-5 lg:p-6">
            {/* category tabs */}
            <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
              {deviceGroups.map((g) => (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => {
                    setGroupId(g.id);
                    setIndex(0);
                    setLandscape(false);
                  }}
                  className={cn(
                    "inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-2 text-xs font-bold transition sm:px-4 sm:text-[13px]",
                    groupId === g.id
                      ? "border-navy-950 bg-navy-950 text-white shadow-md shadow-navy-900/25"
                      : "border-navy-900/12 bg-white text-navy-900 hover:border-navy-900/30",
                  )}
                >
                  <span aria-hidden>{g.icon}</span>
                  {g.name}
                </button>
              ))}
            </div>

            {/* device chips */}
            <div className="no-scrollbar -mx-1 mt-3 flex gap-2 overflow-x-auto px-1 pb-1">
              {group.devices.map((d, i) => {
                const isActive = i === index;
                return (
                  <button
                    key={d.label}
                    type="button"
                    onClick={() => setIndex(i)}
                    className={cn(
                      "shrink-0 rounded-xl border px-3 py-2 text-left transition",
                      isActive
                        ? "border-brand-400 bg-brand-500/10 shadow-sm"
                        : "border-navy-900/10 bg-white hover:border-navy-900/25",
                    )}
                  >
                    <span className="block text-[11px] font-bold whitespace-nowrap text-navy-950 sm:text-xs">
                      {d.label}
                    </span>
                    <span className="block font-mono text-[10px] whitespace-nowrap text-slate-500">
                      {d.w}×{d.h}
                      {d.note ? ` · ${d.note}` : ""}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* stage */}
            <div
              ref={ref}
              className="mt-4 grid place-items-center overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_50%_0%,#e6edff,#f4f7ff_60%)] p-2 sm:p-4"
            >
              <div
                className="relative overflow-hidden rounded-[10px] bg-white shadow-[0_24px_60px_-30px_rgba(13,31,86,0.6)] ring-1 ring-navy-900/10"
                style={{ width: stageW || "100%", height: stageH || 320 }}
              >
                {width > 0 && (
                  <>
                    <iframe
                      key={`${groupId}-${index}-${landscape}-${reloadKey}`}
                      title={`Live preview of ${project.title} at ${w}×${h}`}
                      src={project.liveUrl}
                      loading="lazy"
                      onLoad={() => setLoaded(true)}
                      className="border-0 bg-white origin-top-left"
                      style={{
                        width: w,
                        height: hEff,
                        transform: `scale(${scale})`,
                      }}
                    />
                    {!loaded && (
                      <div className="absolute inset-0 z-10 grid place-items-center gap-2 bg-[linear-gradient(110deg,#eef3ff,30%,#f8fbff,50%,#eef3ff,70%,#eef3ff)] bg-[length:200%_100%] text-center">
                        <div className="flex flex-col items-center gap-2 px-4">
                          <span className="h-6 w-6 animate-spin rounded-full border-2 border-navy-200 border-t-navy-700" />
                          <p className="text-[11px] font-bold text-navy-900 sm:text-xs">
                            Loading live website…
                          </p>
                          <p className="max-w-[26ch] text-[10px] text-slate-500 sm:max-w-none sm:text-[11px]">
                            {project.liveUrl.replace("https://", "")}
                          </p>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>

            {/* readout */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-semibold text-slate-500 sm:gap-x-4 sm:text-xs">
                <span className="font-mono text-navy-900">
                  {w} × {h} px
                </span>
                <span className="font-mono">
                  scale {Math.round(scale * 100)}%
                </span>
                <span className="font-mono hidden sm:inline">
                  stage {stageW} × {stageH}
                </span>
                <span className="hidden items-center gap-1.5 sm:flex">
                  <span className="h-1.5 w-1.5 animate-dot rounded-full bg-emerald-500" />
                  live render
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setLandscape((v) => !v)}
                  className="rounded-full border border-navy-900/12 bg-white px-3 py-1.5 text-xs font-bold text-navy-900 transition hover:border-navy-900/30 active:scale-95"
                >
                  {landscape ? "Portrait ⟳" : "Landscape ⟳"}
                </button>
                <button
                  type="button"
                  onClick={() => setReloadKey((k) => k + 1)}
                  className="rounded-full border border-navy-900/12 bg-white px-3 py-1.5 text-xs font-bold text-navy-900 transition hover:border-navy-900/30 active:scale-95"
                >
                  Reload
                </button>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 rounded-full bg-navy-950 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-navy-900 active:scale-95"
                >
                  <LiveIcon className="h-3.5 w-3.5" /> Open full site
                </a>
              </div>
            </div>

            <p className="mt-3 text-center text-[11px] leading-relaxed text-slate-500 sm:text-left">
              The frame above is a real browser viewport — scroll inside it to test sticky headers,
              menus and the gallery. If your browser blocks embedded frames,{" "}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="font-bold text-brand-600 underline underline-offset-2"
              >
                open the live site in a new tab
              </a>
              .
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
