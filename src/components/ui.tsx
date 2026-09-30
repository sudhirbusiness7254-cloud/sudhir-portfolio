import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";
import { cn } from "@/utils/cn";

/* ------------------------------------------------------------------ *
 * Scroll reveal
 * ------------------------------------------------------------------ */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", visible && "is-visible", className)}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ *
 * Section heading
 * ------------------------------------------------------------------ */
export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  sub?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
      )}
    >
      {eyebrow && (
        <span className="chip border-navy-900/10 bg-white/70 text-navy-700 shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
          {eyebrow}
        </span>
      )}
      <h2
        className="font-display font-extrabold tracking-tight text-navy-950"
        style={{ fontSize: "var(--step-3)", lineHeight: 1.1 }}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={cn(
            "text-slate-600",
            align === "center" && "mx-auto max-w-[60ch]",
          )}
          style={{ fontSize: "var(--step-0)", maxWidth: "var(--measure)" }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * Copy to clipboard button
 * ------------------------------------------------------------------ */
export function CopyButton({
  value,
  label = "Copy",
  className,
}: {
  value: string;
  label?: string;
  className?: string;
}) {
  const [done, setDone] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = value;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setDone(true);
    window.setTimeout(() => setDone(false), 1800);
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-live="polite"
      className={cn(
        "inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition active:scale-95",
        done
          ? "border-emerald-300 bg-emerald-50 text-emerald-700"
          : "border-navy-900/15 bg-white/80 text-navy-800 hover:border-navy-900/30 hover:bg-white",
        className,
      )}
    >
      {done ? <TickIcon /> : <CopyIcon />}
      <span className="hidden sm:inline">{done ? "Copied!" : label}</span>
    </button>
  );
}

/* ------------------------------------------------------------------ *
 * Buttons
 * ------------------------------------------------------------------ */
export function PrimaryLink({
  href,
  children,
  className,
  external = true,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-rose-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-brand-500/25 transition hover:shadow-xl hover:shadow-brand-500/35 active:scale-[0.98] sm:text-[0.95rem]",
        className,
      )}
    >
      {children}
    </a>
  );
}

export function GhostLink({
  href,
  children,
  className,
  external = true,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full border border-navy-900/15 bg-white/80 px-5 py-3 text-sm font-bold text-navy-900 backdrop-blur transition hover:border-navy-900/35 hover:bg-white active:scale-[0.98] sm:text-[0.95rem]",
        className,
      )}
    >
      {children}
    </a>
  );
}

/* ------------------------------------------------------------------ *
 * Icons
 * ------------------------------------------------------------------ */
type IconProps = { className?: string };
const base = "h-5 w-5";

export function CopyIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={cn(base, "h-3.5 w-3.5", className)}>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15V5a2 2 0 0 1 2-2h8" />
    </svg>
  );
}

export function TickIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className={cn(base, "h-3.5 w-3.5", className)}>
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" className={cn(base, "h-4 w-4 transition group-hover:translate-x-0.5", className)}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function FeatureIcon({ name, className }: { name: string; className?: string }) {
  const paths: Record<string, ReactNode> = {
    device: (
      <>
        <rect x="2" y="4" width="14" height="10" rx="2" />
        <rect x="15" y="9" width="7" height="12" rx="2" />
      </>
    ),
    code: (
      <>
        <path d="m9 18-6-6 6-6" />
        <path d="m15 6 6 6-6 6" />
      </>
    ),
    gallery: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="m21 15-4.5-4.5L7 21" />
      </>
    ),
    gear: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 7.5 19l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.6 1.6 0 0 0 3 13.6H3a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 4.7 7l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9.4A1.6 1.6 0 0 0 10.4 3V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 2.7 1.1l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8v.1a1.6 1.6 0 0 0 1.4 1h.1a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.4 1z" />
      </>
    ),
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={cn(base, className)}>
      {paths[name] ?? paths.code}
    </svg>
  );
}

export function GitHubIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cn(base, className)} aria-hidden="true">
      <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7 0-.7 0-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6.2 0C17.9 4.9 19 5.2 19 5.2c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.2.8 2.4v3.6c0 .3.2.7.8.6A12 12 0 0 0 12 .5z" />
    </svg>
  );
}

export function LiveIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={cn(base, className)}>
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
    </svg>
  );
}
