import type { ReactNode } from "react";
import shotDesktop from "@/assets/shot-desktop.jpg";
import shotMobile from "@/assets/shot-mobile.jpg";
import { cn } from "@/utils/cn";

export const desktopShot = shotDesktop;
export const mobileShot = shotMobile;

/* ------------------------------------------------------------------ *
 * Browser window chrome — the image is never cropped (h-auto)
 * ------------------------------------------------------------------ */
export function BrowserFrame({
  url,
  src,
  alt,
  className,
  children,
  caption,
}: {
  url: string;
  src?: string;
  alt?: string;
  className?: string;
  children?: ReactNode;
  caption?: string;
}) {
  return (
    <figure className={cn("group", className)}>
      <div className="overflow-hidden rounded-xl rounded-b-2xl border border-navy-900/12 bg-white shadow-[0_30px_70px_-40px_rgba(13,31,86,0.65)] ring-1 ring-white/60">
        {/* chrome */}
        <div className="flex items-center gap-2 border-b border-navy-900/10 bg-gradient-to-b from-slate-100 to-slate-200/80 px-2.5 py-2 sm:gap-3 sm:px-3.5 sm:py-2.5">
          <div className="flex shrink-0 gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57] sm:h-3 sm:w-3" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e] sm:h-3 sm:w-3" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840] sm:h-3 sm:w-3" />
          </div>
          <div className="flex min-w-0 flex-1 items-center gap-1.5 rounded-full border border-navy-900/10 bg-white px-2 py-1 sm:gap-2 sm:px-3">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3 w-3 shrink-0 text-emerald-600 sm:h-3.5 sm:w-3.5">
              <rect x="4" y="10" width="16" height="11" rx="2" />
              <path d="M8 10V7a4 4 0 0 1 8 0v3" />
            </svg>
            <span className="truncate font-mono text-[9px] text-slate-500 sm:text-[11px]">
              {url}
            </span>
          </div>
        </div>
        {/* viewport */}
        <div className="bg-white">
          {children ?? (
            <img
              src={src}
              alt={alt ?? ""}
              loading="lazy"
              className="block h-auto w-full select-none bg-white object-contain"
              draggable={false}
            />
          )}
        </div>
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-center text-[11px] font-semibold tracking-wide text-slate-500 uppercase sm:text-xs">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/* ------------------------------------------------------------------ *
 * Phone frame
 * ------------------------------------------------------------------ */
export function PhoneFrame({
  src,
  alt,
  className,
  url,
  caption,
}: {
  src?: string;
  alt?: string;
  className?: string;
  url?: string;
  caption?: string;
}) {
  return (
    <figure className={cn("group", className)}>
      <div className="relative rounded-[1.75rem] border border-navy-900/15 bg-gradient-to-b from-slate-800 to-slate-950 p-[6px] shadow-[0_30px_60px_-30px_rgba(13,31,86,0.7)] sm:rounded-[2.25rem] sm:p-2">
        <div className="relative overflow-hidden rounded-[1.4rem] bg-white sm:rounded-[1.75rem]">
          {/* notch */}
          <div className="pointer-events-none absolute top-1.5 left-1/2 z-10 h-3.5 w-16 -translate-x-1/2 rounded-full bg-slate-900/90 sm:top-2 sm:h-4 sm:w-24" />
          {url && (
            <div className="flex items-center justify-center bg-white pt-6 pb-1 sm:pt-8">
              <span className="max-w-[85%] truncate rounded-full bg-slate-100 px-2.5 py-0.5 font-mono text-[8px] text-slate-500 sm:text-[10px]">
                {url}
              </span>
            </div>
          )}
          <img
            src={src}
            alt={alt ?? ""}
            loading="lazy"
            draggable={false}
            className="block h-auto w-full select-none bg-white object-contain"
          />
        </div>
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-center text-[11px] font-semibold tracking-wide text-slate-500 uppercase sm:text-xs">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
