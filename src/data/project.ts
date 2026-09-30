export const project = {
  badge: "Client Project",
  category: "Web Development",
  title: "Mithila English Boarding School",
  subtitle: "School Website & Student Portal",
  location: "Mathani-2 (Bardibas), Mahottari, Nepal · Estd. 2058",
  liveUrl: "https://mithila-english-boarding-school-bardaha.sudhiryadav7.com.np/",
  repo: {
    owner: "sudhirbusiness7254-cloud",
    name: "perfect-copy",
    url: "https://github.com/sudhirbusiness7254-cloud/perfect-copy",
    visibility: "Private",
    branch: "main",
  },
  description:
    "A modern, responsive school website developed for Mithila English Boarding School, featuring academics, results, faculty, admissions, events, campus life, gallery, announcements, and student communication features. Built with a clean UI focused on accessibility, performance, and responsive user experience.",
  shortDescription:
    "A modern, responsive school website with a clean UI, engaging gallery, announcements and essential school information.",
  topics: [
    "school-website",
    "responsive-design",
    "php",
    "mysql",
    "bootstrap",
    "html5",
    "css3",
    "javascript",
    "education-portal",
    "client-project",
  ],
  tech: [
    { name: "HTML5", color: "#E34F26" },
    { name: "CSS3", color: "#1572B6" },
    { name: "JavaScript", color: "#F7DF1E" },
    { name: "PHP", color: "#777BB4" },
    { name: "MySQL", color: "#00758F" },
    { name: "Bootstrap", color: "#7952B3" },
  ],
  stats: [
    { value: "320px – 5K", label: "Tested viewport range" },
    { value: "10+", label: "Pages & modules" },
    { value: "100%", label: "Responsive coverage" },
    { value: "2058", label: "School established" },
  ],
};

export const highlights = [
  {
    icon: "device",
    title: "Responsive Design",
    body: "Works seamlessly on all devices — from a 320px iPhone SE to 4K, 5K and ultrawide monitors.",
  },
  {
    icon: "code",
    title: "Modern UI",
    body: "Clean, professional and easy to navigate with a clear visual hierarchy and readable typography.",
  },
  {
    icon: "gallery",
    title: "Dynamic Gallery",
    body: "Showcases school life and events with a filterable, lightbox-ready photo gallery.",
  },
  {
    icon: "gear",
    title: "Complete School Portal",
    body: "Includes academics, results, faculty, admissions, events and student communication.",
  },
];

export const modules = [
  { name: "Home", desc: "Hero slider, breaking-news ticker, highlights and quick stats.", icon: "🏠" },
  { name: "Academics", desc: "Curriculum, streams, syllabus outline and academic calendar.", icon: "📚" },
  { name: "Results", desc: "SEE / district topper results with distinctions and mark-sheet lookup.", icon: "🏆" },
  { name: "Faculty", desc: "Teacher profiles with subject, qualification and experience.", icon: "👩‍🏫" },
  { name: "Admissions", desc: "Admission notice, eligibility, fee structure and enquiry form.", icon: "📝" },
  { name: "Events", desc: "Annual sports meet, cultural mahotsav and exam series notices.", icon: "🎉" },
  { name: "Campus Life", desc: "Classrooms, science & IT labs, library, transport and assembly.", icon: "🏫" },
  { name: "Gallery", desc: "Album grid with categories, hover captions and full-screen view.", icon: "🖼️" },
  { name: "Announcements", desc: "Notice board with pinned circulars and downloadable files.", icon: "📢" },
  { name: "Contact / Student Communication", desc: "Enquiry form, map, phone, plus student message channel.", icon: "✉️" },
];

export type Device = {
  label: string;
  w: number;
  h: number;
  note?: string;
};

export const deviceGroups: { id: string; name: string; icon: string; devices: Device[] }[] = [
  {
    id: "mobile",
    name: "Mobile",
    icon: "📱",
    devices: [
      { label: "iPhone SE", w: 320, h: 568, note: "Small mobile" },
      { label: "Android small", w: 360, h: 640, note: "Small mobile" },
      { label: "iPhone 12/13/14", w: 375, h: 667, note: "Standard mobile" },
      { label: "iPhone 14/15", w: 390, h: 844, note: "Large mobile" },
      { label: "Pixel / iPhone 15 PM", w: 393, h: 852, note: "Large mobile" },
      { label: "iPhone 16 Pro Max", w: 430, h: 932, note: "Large mobile" },
      { label: "Mobile landscape", w: 640, h: 360, note: "Landscape 568–844" },
      { label: "Landscape large", w: 844, h: 390, note: "Landscape" },
    ],
  },
  {
    id: "tablet",
    name: "Tablet",
    icon: "💻",
    devices: [
      { label: "Small tablet", w: 600, h: 960 },
      { label: "iPad Mini / iPad", w: 768, h: 1024 },
      { label: "iPad Air", w: 820, h: 1180 },
      { label: "iPad Pro 11", w: 834, h: 1194 },
      { label: "Tablet landscape", w: 1024, h: 768 },
      { label: "iPad Pro 12.9", w: 1024, h: 1366 },
      { label: "Large tablet landscape", w: 1180, h: 820 },
    ],
  },
  {
    id: "laptop",
    name: "Laptop",
    icon: "🖥️",
    devices: [
      { label: "Small laptop", w: 1280, h: 720 },
      { label: "HD laptop", w: 1366, h: 768 },
      { label: "MacBook Air", w: 1440, h: 900 },
      { label: "Full HD laptop", w: 1920, h: 1080 },
      { label: "MacBook Pro", w: 1512, h: 982 },
      { label: "Hi-DPI laptop", w: 2560, h: 1600 },
    ],
  },
  {
    id: "desktop",
    name: "Desktop",
    icon: "🖲️",
    devices: [
      { label: "HD desktop", w: 1280, h: 720 },
      { label: "HD+", w: 1600, h: 900 },
      { label: "Full HD", w: 1920, h: 1080 },
      { label: "QHD / 2K", w: 2560, h: 1440 },
      { label: "4K UHD", w: 3840, h: 2160 },
      { label: "5K", w: 5120, h: 2880 },
    ],
  },
  {
    id: "wide",
    name: "Ultrawide",
    icon: "📺",
    devices: [
      { label: "Ultrawide", w: 2560, h: 1080 },
      { label: "Super ultrawide", w: 3440, h: 1440 },
      { label: "Ultrawide 32:9", w: 3840, h: 1080 },
      { label: "TV / signage", w: 1920, h: 1080 },
    ],
  },
];

export const coverage = [
  {
    id: "mobile",
    icon: "📱",
    title: "Mobile Devices",
    intro: "Examples: iPhone SE, iPhone 12/13/14/15/16, Samsung Galaxy, Pixel, etc.",
    rows: [
      { type: "Small Mobile", range: "320px – 360px" },
      { type: "Standard Mobile", range: "375px – 390px" },
      { type: "Large Mobile", range: "393px – 430px" },
      { type: "Mobile Landscape", range: "568px – 844px" },
    ],
  },
  {
    id: "tablet",
    icon: "💻",
    title: "Tablet Devices",
    intro: "Examples: iPad Mini, iPad, iPad Air, iPad Pro, Samsung Galaxy Tab.",
    rows: [
      { type: "Small Tablet", range: "600px – 768px" },
      { type: "Standard Tablet", range: "768px – 834px" },
      { type: "Large Tablet", range: "834px – 1024px" },
      { type: "Tablet Landscape", range: "1024px – 1180px" },
    ],
  },
  {
    id: "laptop",
    icon: "🖥️",
    title: "Laptop",
    intro: "Examples: Windows laptops, MacBook Air, MacBook Pro.",
    rows: [
      { type: "Small Laptop", range: "1280 × 720" },
      { type: "HD Laptop", range: "1366 × 768" },
      { type: "Full HD Laptop", range: "1920 × 1080" },
      { type: "High-resolution Laptop", range: "1440 × 900 / 2560 × 1600" },
    ],
  },
  {
    id: "desktop",
    icon: "🖲️",
    title: "Desktop / Monitor",
    intro: "Production builds are also checked on large monitors and TVs.",
    rows: [
      { type: "HD Desktop", range: "1280 × 720" },
      { type: "HD+", range: "1600 × 900" },
      { type: "Full HD", range: "1920 × 1080" },
      { type: "QHD / 2K", range: "2560 × 1440" },
      { type: "4K", range: "3840 × 2160" },
      { type: "Ultrawide", range: "2560 × 1080 / 3440 × 1440" },
    ],
  },
  {
    id: "large",
    icon: "📺",
    title: "Large Screens",
    intro: "Large monitors and TV displays for notice boards and reception screens.",
    rows: [
      { type: "Full HD", range: "1920 × 1080" },
      { type: "QHD", range: "2560 × 1440" },
      { type: "4K", range: "3840 × 2160" },
      { type: "5K", range: "5120 × 2880" },
      { type: "Ultrawide", range: "3440 × 1440" },
      { type: "Super Ultrawide", range: "3840 × 1080" },
    ],
  },
];

export const gallery = [
  {
    title: "Smart Classrooms",
    tag: "Academics",
    src: "https://images.pexels.com/photos/29659894/pexels-photo-29659894.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
  {
    title: "Sports & Games",
    tag: "Events",
    src: "https://images.pexels.com/photos/38016210/pexels-photo-38016210.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
  {
    title: "Reading Library",
    tag: "Campus Life",
    src: "https://images.pexels.com/photos/9489917/pexels-photo-9489917.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
  {
    title: "Awards & Honours",
    tag: "Results",
    src: "https://images.pexels.com/photos/31772913/pexels-photo-31772913.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
  {
    title: "Interactive Learning",
    tag: "Academics",
    src: "https://images.pexels.com/photos/8617765/pexels-photo-8617765.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
  {
    title: "Morning Assembly",
    tag: "Campus Life",
    src: "https://images.pexels.com/photos/7396377/pexels-photo-7396377.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
];

export const gitCommands = [
  {
    title: "1 · Create the repo & set the remote",
    code: `git init
git branch -M main
git remote add origin https://github.com/sudhirbusiness7254-cloud/perfect-copy.git`,
  },
  {
    title: "2 · Commit the responsive portfolio build",
    code: `git add .
git commit -m "feat: responsive school-website project case study (320px → 5K)"
git push -u origin main`,
  },
  {
    title: "3 · Set the GitHub About section",
    code: `gh repo edit sudhirbusiness7254-cloud/perfect-copy \\
  --description "A modern, responsive school website for Mithila English Boarding School — academics, results, faculty, admissions, events, campus life, gallery, announcements and student communication. Client Project · Web Development." \\
  --homepage "https://mithila-english-boarding-school-bardaha.sudhiryadav7.com.np/" \\
  --add-topic school-website --add-topic responsive-design \\
  --add-topic php --add-topic mysql --add-topic bootstrap \\
  --add-topic html5 --add-topic css3 --add-topic javascript \\
  --add-topic education-portal --add-topic client-project`,
  },
];
