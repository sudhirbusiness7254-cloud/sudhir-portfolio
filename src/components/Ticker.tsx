import { project } from "@/data/project";

const items = [
  "Frontend Developer Intern · Fizzy Reality & Homes Search Pvt. Ltd.",
  "Java Developer Intern · Project Based Internship",
  "Consumer Loan Assistant Project",
  "Home Inventory Manager Project",
  "Skills: AI/ML · NLP · Next.js · React · MERN · Spring Boot · Laravel · PHP · Python",
  "Client Project · Mithila English Boarding School",
  "Responsive · 320px → 5K",
];

export default function Ticker() {
  const row = [...items, ...items];
  return (
    <div className="marquee relative border-y border-navy-900/10 bg-navy-950 py-2.5 text-white">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-navy-950 to-transparent sm:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-navy-950 to-transparent sm:w-20" />
      <div className="marquee-track">
        {row.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="flex shrink-0 items-center gap-3 px-4 text-[11px] font-bold tracking-wide uppercase sm:text-xs"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            {t}
          </span>
        ))}
      </div>
      <span className="sr-only">Project highlights: {items.join(", ")}. Live at {project.liveUrl}</span>
    </div>
  );
}
