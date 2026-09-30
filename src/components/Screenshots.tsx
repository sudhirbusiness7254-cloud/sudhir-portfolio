import { useCallback, useEffect, useState } from "react";
import { gallery } from "@/data/project";
import { cn } from "@/utils/cn";
import { Reveal, SectionHeading } from "@/components/ui";
import { BrowserFrame, PhoneFrame, desktopShot, mobileShot } from "@/components/frames";
import { project } from "@/data/project";

export default function Screenshots() {
  const [fit, setFit] = useState<"contain" | "cover">("contain");
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir: number) =>
      setOpen((i) => (i === null ? null : (i + dir + gallery.length) % gallery.length)),
    [],
  );

  useEffect(() => {
    if (open === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  return (
    <section id="screenshots" className="relative scroll-mt-20 py-14 sm:py-16 lg:py-20">
      <div className="shell">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Screenshots"
              title="Every pixel, fully visible"
              sub="Screenshots render at their natural aspect ratio inside a fit-to-frame layout — no cropping, no cut edges. Switch the mode below to compare."
            />
          </Reveal>
          <Reveal delay={80} className="w-full sm:w-auto sm:shrink-0">
            <div className="flex w-full rounded-2xl border border-navy-900/12 bg-white p-1 shadow-sm sm:w-auto sm:rounded-full">
              {(
                [
                  { id: "contain", label: "Fit · full photo" },
                  { id: "cover", label: "Fill · cropped" },
                ] as const
              ).map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setFit(m.id)}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-[11px] font-bold transition sm:text-xs",
                    fit === m.id
                      ? "bg-navy-950 text-white shadow"
                      : "text-navy-900/70 hover:text-navy-950",
                  )}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* full-page captures */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:mt-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-8">
          <Reveal>
            <BrowserFrame
              url={project.liveUrl.replace("https://", "")}
              src={desktopShot}
              alt="Complete desktop homepage screenshot of the school website"
              caption="Full desktop capture · 1440 px wide"
            />
          </Reveal>
          <Reveal delay={80} className="mx-auto w-full max-w-[280px] lg:max-w-none">
            <PhoneFrame
              url={project.liveUrl.replace("https://", "")}
              src={mobileShot}
              alt="Complete mobile screenshot of the school website"
              caption="Full mobile capture · 390 px wide"
            />
          </Reveal>
        </div>

        {/* gallery */}
        <div className="mt-8 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {gallery.map((g, i) => (
            <Reveal key={g.title} delay={i * 55}>
              <button
                type="button"
                onClick={() => setOpen(i)}
                className="group relative block w-full overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_26px_60px_-34px_rgba(13,31,86,0.55)]"
              >
                <div className="aspect-4/3 w-full overflow-hidden bg-[linear-gradient(45deg,#f1f5f9_25%,transparent_25%,transparent_75%,#f1f5f9_75%),linear-gradient(45deg,#f1f5f9_25%,transparent_25%,transparent_75%,#f1f5f9_75%)] bg-[length:16px_16px] bg-[position:0_0,8px_8px] bg-white">
                  <img
                    src={g.src}
                    alt={`${g.title} — Mithila English Boarding School`}
                    loading="lazy"
                    className={cn(
                      "h-full w-full transition-transform duration-500 group-hover:scale-[1.03]",
                      fit === "contain" ? "object-contain p-1.5" : "object-cover",
                    )}
                  />
                </div>
                <div className="flex items-center justify-between gap-2 px-3.5 py-2.5">
                  <span className="truncate text-[12px] font-extrabold text-navy-950 sm:text-[13px]">
                    {g.title}
                  </span>
                  <span className="shrink-0 rounded-full bg-navy-50 px-2 py-0.5 text-[10px] font-bold text-navy-800">
                    {g.tag}
                  </span>
                </div>
                <span className="pointer-events-none absolute inset-x-0 top-0 flex justify-end p-2.5 opacity-0 transition group-hover:opacity-100">
                  <span className="rounded-full bg-navy-950/85 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur">
                    View full ⤢
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-5">
          <p className="text-center text-[11px] font-semibold text-slate-500 sm:text-xs">
            Tip: tap any image to open it full-size in the lightbox — arrows or swipe to move,
            Esc to close.
          </p>
        </Reveal>
      </div>

      {/* lightbox */}
      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={gallery[open].title}
          onClick={close}
          className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-navy-950/90 p-3 backdrop-blur-sm sm:p-6"
        >
          <img
            src={gallery[open].src}
            alt={gallery[open].title}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[74vh] w-auto max-w-full rounded-xl bg-white object-contain shadow-2xl sm:max-h-[80vh]"
          />
          <div
            className="mt-3 flex w-full max-w-3xl items-center justify-between gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="min-w-0">
              <p className="truncate text-sm font-bold text-white sm:text-base">
                {gallery[open].title}
              </p>
              <p className="text-[11px] text-white/60">
                {gallery[open].tag} · {open + 1} / {gallery.length}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous image"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next image"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
              >
                ›
              </button>
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="rounded-full bg-white px-4 py-2 text-xs font-bold text-navy-950 transition hover:bg-white/90"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
