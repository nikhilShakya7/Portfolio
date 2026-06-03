import { Project, Experience, SkillProgress } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "mobile",
    link: "https://github.com/nikhilShakya7/Flutter-Flappy_Bird",
    title: "Flappy Bird Clone",
    description:
      "A fun and engaging Flappy Bird clone built using Flutter and Dart with smooth animations, collision detection, and scoring.",
    category: "MOBILE",
    image: "/images/8.png",
    tag: "MOBILE",
  },
  {
    id: "py",
    tag: "PYTHON",
    title: "Automated face recognition Attendance System",
    description:
      "A Python-based system using facial recognition and SQLite to automate attendance tracking.",
    category: "PYTHON",
    link: "https://github.com/nikhilShakya7/Python_Face-Attendence-System",
    image: "/images/face.svg",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp1",
    period: "2026 — Present",
    role: "Quality Assurance Analyst",
    company: "CodePixelz Media",
    description:
      "Carried out manual testing on web applications to detect functional defects, UI inconsistencies, and usability problems. Created and executed test cases aligned with requirements and user stories.",
  },
  {
    id: "exp2",
    period: "2025",
    role: "Junior Quality Assurance Analyst",
    company: "Peace Nepal Dot Com",
    description:
      "Performed manual testing on web applications to identify functional, UI and usability issues. Designed and executed test cases based on requirements and user stories.",
  },
  {
    id: "exp3",
    period: "2025",
    role: "Junior Frontend Developer",
    company: "Peace Nepal Dot Com",
    description:
      "Worked on building responsive user interfaces using ReactJS and other frameworks. Web applications for enterprise clients.",
  },
  {
    id: "exp4",
    period: "2025",
    role: "Intern",
    company: "Peace Nepal Dot Com",
    description:
      "Learn to build responsive user interfaces using NextJS and other frameworks.",
  },
  {
    id: "exp5",
    period: "2025",
    role: "Freelancer",
    company: "GeoSpatial Pvt.Ltd",
    description:
      "Freelanced with GeoSpatial Systems Pvt. Ltd., specializing in the processing and interpretation of Lidar data.",
  },
];

export const NIKHIL_SKILLS: SkillProgress[] = [
  { name: "Frontend Engineering", percentage: 90 },
  { name: "UI/UX Interaction Design", percentage: 80 },
  { name: "Mobile App Development (Flutter)", percentage: 75 },
  { name: "Cloud & System Architectures", percentage: 70 },
];

export const TECH_STACK = {
  languages: [
    "TypeScript",
    "JavaScript",
    "Python",
    "Go",
    "Java",
    "SQL",
    "Dart",
    "HTML / CSS",
  ],
  frameworks: [
    "React",
    "Next.js",
    "Node.js",
    "Flutter",
    "Express",
    "TailwindCSS",
    "Redux",
    "Electron",
  ],
  tools: [
    "Docker",
    "Git",
    "AWS",
    "Google Cloud",
    "Firebase",
    "Vercel",
    "Figma",
    "Webpack",
  ],
};

export const PORTRAIT_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA6ufwoG0jfcgWodW_1fNo6DDl0S4R6mWSXn7bWLnSSgxG2fX8zsrOCTtAGoGOAprnqau3U_LTLGk5zb2-VjNbm9pLvmRLkLukjLz-MsC8u-ZwTUdDzgV7AIbOh1ioZPLcQT3kzHjPwQG4K9taiK7FDGDG2Z0_Vq5WDJYv_kDd2TtGYEDgTtND1p0zh8xFRyFJgGcfpsgA0dQalm-2hywzSrG99o_ABiKUkVHirZaTT5FGh0i8hTMFVzNWbs0PIWvjKUv_SeYp-9JE3";
