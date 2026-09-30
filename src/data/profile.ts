/* ------------------------------------------------------------------ *
 * Personal profile — Sudhir Yadav
 * Replace `photo` with your own image path (e.g. "/me.jpg" in public/)
 * ------------------------------------------------------------------ */

export const profile = {
  name: "Sudhir Yadav",
  initials: "SY",
  role: "Frontend Developer",
  tagline: "Frontend & Full Stack Developer",
  location: "Bardibas, Mahottari, Nepal",
  email: "sudhiryadav7@example.com",
  photo: "src/assets/profile.jpg",
  bio: "I'm a frontend-focused developer from Nepal who loves turning clean UI designs into fast, accessible and fully responsive websites. I work across the MERN stack and PHP/Laravel, and I'm currently exploring AI/ML and NLP. I recently delivered a complete school website for Mithila English Boarding School and built two Java-based systems during my project-based internship.",
  bioShort:
    "Frontend developer building responsive, performance-oriented interfaces — and a full stack developer who ships complete products end to end.",
  availability: "Open to frontend & full stack roles",
};

/* ------------------------- Skill groups --------------------------- */
export const skillGroups = [
  {
    id: "frontend",
    name: "Frontend",
    accent: "#2547eb",
    items: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Bootstrap", "Responsive Design", "UI/UX"],
  },
  {
    id: "backend",
    name: "Backend",
    accent: "#ea4a10",
    items: ["PHP", "Laravel", "Spring Boot", "Java", "Node.js", "Express", "REST APIs"],
  },
  {
    id: "mern",
    name: "MERN Stack",
    accent: "#0d9488",
    items: ["MongoDB", "Express", "React", "Node.js", "MERN Stack"],
  },
  {
    id: "ai",
    name: "AI / ML & Data",
    accent: "#7c3aed",
    items: ["AI / ML", "NLP", "Python", "Pandas", "scikit-learn"],
  },
  {
    id: "database",
    name: "Database",
    accent: "#0891b2",
    items: ["MySQL", "MongoDB", "phpMyAdmin"],
  },
  {
    id: "tools",
    name: "Tools & Practices",
    accent: "#b45309",
    items: ["Git", "GitHub", "Cross-Browser Compatibility", "Debugging", "Page Speed Optimization"],
  },
];

/* Flat list for the ticker next to the photo */
export const skillTicker = [
  "AI / ML",
  "NLP",
  "Next.js",
  "React",
  "MERN Stack",
  "Spring Boot",
  "Laravel",
  "PHP",
  "Python",
  "JavaScript",
  "HTML5",
  "CSS3",
  "MySQL",
  "MongoDB",
  "REST APIs",
  "Git & GitHub",
  "Responsive Design",
  "UI/UX",
];

/* -------------------------- Experience ---------------------------- */
export type Experience = {
  id: string;
  role: string;
  company: string;
  type: string;
  period: string;
  location?: string;
  accent: string;
  summary: string;
  bullets?: string[];
  projects?: { name: string; detail: string; stack: string[] }[];
  skills: string[];
};

export const experience: Experience[] = [
  {
    id: "fizzy",
    role: "Frontend Developer Intern",
    company: "Fizzy Reality & Homes Search Pvt. Ltd.",
    type: "Internship",
    period: "Frontend Development",
    accent: "#2547eb",
    summary:
      "Hands-on frontend development experience focused on building responsive, user-friendly, and performance-oriented web interfaces.",
    bullets: [
      "Developed and maintained responsive web interfaces using HTML, CSS, JavaScript, and modern frontend development practices.",
      "Built reusable UI components and interactive features with a focus on clean design, usability, and consistent user experience.",
      "Integrated RESTful APIs to display and manage dynamic application data within frontend interfaces.",
      "Implemented responsive layouts optimized for mobile, tablet, laptop, and desktop devices with cross-browser compatibility.",
      "Collaborated with developers and designers to translate UI/UX designs into functional, accessible, and production-ready web pages.",
      "Debugged UI issues, optimized frontend performance, and improved page speed, responsiveness, and overall user experience.",
      "Used Git/GitHub for version control, code collaboration, and maintaining organized development workflows.",
    ],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "UI/UX",
      "REST APIs",
      "Git",
      "GitHub",
      "Cross-Browser Compatibility",
    ],
  },
  {
    id: "java",
    role: "Java Developer Intern",
    company: "Project Based Internship",
    type: "Project Based Internship",
    period: "Java · Spring Boot",
    accent: "#ea4a10",
    summary:
      "Completed a project-based Java development internship, delivering two full applications end to end — from database design to working UI.",
    projects: [
      {
        name: "Consumer Loan Assistant Project",
        detail:
          "A Java-based loan assistant that helps users evaluate consumer loan options — EMI calculation, interest breakdown, eligibility checks and a clear repayment schedule.",
        stack: ["Java", "OOP", "MySQL", "Swing / JavaFX", "Spring Boot"],
      },
      {
        name: "Home Inventory Manager Project",
        detail:
          "A home inventory management system to record, categorise and track household items with quantities, purchase details, warranty reminders and search/filter reports.",
        stack: ["Java", "CRUD", "MySQL", "JDBC", "Report Generation"],
      },
    ],
    skills: ["Java", "Spring Boot", "OOP", "MySQL", "JDBC", "CRUD", "Problem Solving"],
  },
];
