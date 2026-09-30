export type Expertise = {
  id: string;
  name: string;
  short: string;
  blurb: string;
  icon: "layout" | "server" | "brain" | "db" | "wrench";
  tools: string[];
};

export const expertise: Expertise[] = [
  {
    id: "frontend",
    name: "Frontend Development",
    short: "Frontend",
    blurb: "Responsive, accessible interfaces built with modern frameworks and clean design systems.",
    icon: "layout",
    tools: ["React", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Responsive Design"],
  },
  {
    id: "backend",
    name: "Backend Development",
    short: "Backend",
    blurb: "Server-side logic, REST APIs and authentication across PHP, Java and Node ecosystems.",
    icon: "server",
    tools: ["PHP", "Laravel", "Spring Boot", "Java", "Node.js", "Express", "REST APIs", "JWT Auth"],
  },
  {
    id: "ai",
    name: "AI & Machine Learning",
    short: "AI & ML",
    blurb: "Applied machine learning and natural language processing with Python-based tooling.",
    icon: "brain",
    tools: ["Python", "NLP", "scikit-learn", "Pandas", "NumPy", "Text Classification", "Model Evaluation", "Data Cleaning"],
  },
  {
    id: "database",
    name: "Databases",
    short: "Databases",
    blurb: "Relational and document databases — schema design, queries and optimisation.",
    icon: "db",
    tools: ["MySQL", "MongoDB", "phpMyAdmin", "Mongoose", "JDBC", "Indexing", "Joins & Views", "Backups"],
  },
  {
    id: "tools",
    name: "Development Tools",
    short: "Dev Tools",
    blurb: "The daily workflow and shipping stack.",
    icon: "wrench",
    tools: ["Git", "GitHub", "VS Code", "Postman", "Chrome DevTools", "XAMPP", "Vercel", "Figma"],
  },
];
