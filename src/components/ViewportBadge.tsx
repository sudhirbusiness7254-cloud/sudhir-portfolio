import { useEffect, useState } from "react";

const bands: { max: number; label: string }[] = [
  { max: 480, label: "Small mobile" },
  { max: 600, label: "Mobile" },
  { max: 768, label: "Large mobile" },
  { max: 1024, label: "Tablet" },
  { max: 1280, label: "Laptop" },
  { max: 1920, label: "Desktop" },
  { max: Infinity, label: "Large screen" },
];

export default function ViewportBadge() {
  const [vp, setVp] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const update = () => setVp({ w: window.innerWidth, h: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  const label = bands.find((b) => vp.w <= b.max)?.label ?? "Large screen";

  return (
    <div className="pointer-events-none fixed bottom-2 left-1/2 z-40 -translate-x-1/2 sm:bottom-3">
      <div className="flex items-center gap-1.5 rounded-full border border-navy-900/12 bg-white/85 px-2.5 py-1 font-mono text-[10px] font-bold text-navy-900 shadow-lg backdrop-blur sm:gap-2 sm:px-3 sm:text-[11px]">
        <span className="h-1.5 w-1.5 animate-dot rounded-full bg-emerald-500" />
        <span>{vp.w}×{vp.h}</span>
        <span className="hidden text-slate-400 sm:inline">·</span>
        <span className="hidden text-brand-600 sm:inline">{label}</span>
      </div>
    </div>
  );
}
