import { useState, useEffect } from "react";
import { Project, SkillProgress } from "../types";
import { motion } from "motion/react";
import AnimatedSection from "./AnimatedSection";
import { staggerContainer, staggerItem } from "../utils/animations";
import { Terminal, Code2, Database, Network, ChevronRight } from "lucide-react";

interface NikhilHomeProps {
  skills: SkillProgress[];
  techStack: {
    languages: string[];
    frameworks: string[];
    tools: string[];
  };
  personalProjects: Project[];
  onSelectProject: (project: Project) => void;
}

export default function NikhilHome({
  skills,
  techStack,
  personalProjects,
  onSelectProject,
}: NikhilHomeProps) {
  // Combine all phrases into one unified typing target
  const fullPhrase = "Code. Create. Innovate.";
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    // Smooth custom speeds: faster deletion, calculated typing cadence
    const typingSpeed = isDeleting ? 30 : 80;
    const holdPositionTime = 2000; // Pause when fully typed out

    const handleType = () => {
      if (!isDeleting) {
        // Build the entire text string progressively
        setCurrentText(fullPhrase.substring(0, currentText.length + 1));

        if (currentText === fullPhrase) {
          // Stay on the full phrase before beginning backspace
          timer = setTimeout(() => setIsDeleting(true), holdPositionTime);
          return;
        }
      } else {
        // Strip text string away progressively
        setCurrentText(fullPhrase.substring(0, currentText.length - 1));

        if (currentText === "") {
          setIsDeleting(false);
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting]);

  const techCategories = [
    {
      key: "languages",
      label: "Languages",
      icon: Code2,
      items: techStack.languages,
    },
    {
      key: "frameworks",
      label: "Frameworks / Libraries",
      icon: Database,
      items: techStack.frameworks,
    },
    {
      key: "tools",
      label: "Tools & Infra",
      icon: Network,
      items: techStack.tools,
    },
  ] as const;

  return (
    <div className="mx-auto max-w-7xl px-6 md:px-12">
      {/* 1. Jumbotron — full viewport height, space filled top & bottom */}
      <section
        id="nikhil-jumbotron"
        className="flex min-h-[calc(100vh-64px)] flex-col justify-between py-6"
      >
        {/* TOP BAR — fills upper space */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-gray-400"
        >
          <span className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#5a5a40] animate-pulse" />
            AVAILABLE FOR WORK
          </span>
          <span className="hidden sm:block">
            EST. 2024 — CREATIVE DEVELOPER
          </span>
          <span>v1.0.0 — PORTFOLIO</span>
        </motion.div>

        {/* CENTER CONTENT */}
        <div className="flex flex-col items-center gap-10 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
          {/* Left / main copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center lg:items-start lg:max-w-2xl"
          >
            <span className="font-mono text-xs font-bold tracking-widest text-[#5a5a40] uppercase flex items-center gap-1.5">
              <Terminal className="h-3.5 w-3.5" />
              // PERSONAL GREETING
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight text-[#1a1a1a] sm:text-5xl md:text-7xl">
              Hi, I am{" "}
              <span className="text-[#5a5a40] italic font-normal inline-block relative font-display">
                Nikhil.
                <span className="absolute bottom-2 left-0 h-2 w-full bg-[#5a5a40]/10 -z-10 rounded-sm" />
              </span>
            </h1>

            {/* Animating Single-line Complete Typewriter */}
            <h2 className="mt-4 font-mono text-xl font-medium text-gray-700 sm:text-2xl md:text-3xl tracking-tight min-h-[40px] flex items-center justify-center lg:justify-start">
              <span className="text-[#5a5a40]">{currentText}</span>
              <span className="inline-block w-[3px] h-[24px] md:h-[32px] bg-[#5a5a40] ml-1.5 animate-[ping_1s_infinite_ease-in-out]" />
            </h2>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg font-sans">
              A developer dedicated to learning, building, and delivering
              engaging digital experiences.
            </p>
          </motion.div>

          {/* Diagnostic Metadata card */}
          <motion.div
            initial={{ opacity: 0, x: 24, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-sm shrink-0 border border-[#e8e8df] bg-[#fbfbf6] p-6 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] font-mono text-xs"
          >
            <span className="text-[#5a5a40] font-bold block mb-4 uppercase tracking-widest text-[10px]">
              &gt; SYSTEM STATE
            </span>
            <div className="space-y-3 text-gray-600">
              <div className="flex justify-between border-b border-[#e8e8df]/40 pb-2">
                <span>ACTIVE REGION:</span>
                <span className="text-[#1a1a1a] font-semibold">
                  ASIA-SOUTH1
                </span>
              </div>
              <div className="flex justify-between border-b border-[#e8e8df]/40 pb-2">
                <span>WORK SPEC:</span>
                <span className="text-[#1a1a1a] font-semibold">
                  CREATIVE DEVELOPER
                </span>
              </div>
              <div className="flex justify-between border-b border-[#e8e8df]/40 pb-2">
                <span>EXPERIENCE:</span>
                <span className="text-[#1a1a1a] font-semibold">
                  LEARNING & SHAPING
                </span>
              </div>
              <div className="flex justify-between pb-1">
                <span>COLLAB:</span>
                <span className="text-[#5a5a40] font-bold">
                  CONFIRMED ACTIVE
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM BAR — scroll indicator fills lower space */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between"
        >
          {/* Scroll cue */}
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-gray-400"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="shrink-0"
            >
              <path
                d="M7 2v10M3.5 8.5L7 12l3.5-3.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Scroll to explore
          </motion.div>

          {/* Tech pill strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="hidden sm:flex items-center gap-2"
          >
            {["React", "TypeScript", "Node.js"].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#e8e8df] bg-white px-3 py-1 font-mono text-[10px] text-gray-500"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Below-the-fold sections */}
      <div className="py-12 md:py-24 space-y-20 md:space-y-32">
        {/* 2. Skills & Expertise */}
        <AnimatedSection id="skills-visual-section" delay={0.05}>
          <div className="mb-10 text-left border-b border-[#e8e8df] pb-4">
            <span className="font-mono text-xs font-bold tracking-widest text-[#5a5a40]/65 uppercase">
              // MEASUREMENTS
            </span>
            <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-[#1a1a1a]">
              Skills & Expertise
            </h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2"
          >
            {skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                variants={staggerItem}
                transition={{ delay: idx * 0.08 }}
                id={`skill-metric-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="group"
              >
                <div className="mb-2 flex items-center justify-between text-xs font-semibold">
                  <span className="text-gray-700 tracking-wide">
                    {skill.name}
                  </span>
                  <span className="text-[#5a5a40] font-mono">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden bg-[#e8e8df]/50 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 1.2,
                      delay: idx * 0.08,
                      ease: "easeOut",
                    }}
                    className="h-full bg-gradient-to-r from-[#5a5a40] to-[#808060] rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

        {/* 3. Technology Stack */}
        <AnimatedSection id="tech-stack-visual-grid" delay={0.05}>
          <div className="mb-10 text-left border-b border-[#e8e8df] pb-4">
            <span className="font-mono text-xs font-bold tracking-widest text-[#5a5a40] uppercase">
              // TOOLBELT
            </span>
            <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-[#1a1a1a]">
              Technology Stack
            </h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
          >
            {techCategories.map(({ key, label, icon: Icon, items }) => (
              <motion.div
                key={key}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                className="border border-[#e8e8df]/80 bg-[#fbfbf6] p-6 rounded-3xl shadow-xs hover:border-[#5a5a40]/30 transition-colors"
              >
                <span className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-[#5a5a40]/70 uppercase mb-4">
                  <Icon className="h-4 w-4 text-[#5a5a40]" />
                  {label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white border border-[#e8e8df] px-3 py-1 text-xs font-medium text-gray-600 hover:text-[#5a5a40] hover:border-[#5a5a40]/40 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

        {/* 4. Portfolio Works */}
        <AnimatedSection id="nikhil-works" delay={0.05}>
          <div className="mb-10 text-left border-b border-[#e8e8df] pb-4 flex justify-between items-end">
            <div>
              <span className="font-mono text-xs font-bold tracking-widest text-[#5a5a40] uppercase">
                // PRODUCTION
              </span>
              <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-[#1a1a1a]">
                Projects Grid
              </h2>
            </div>
            <span className="font-mono text-xs text-gray-400">
              TOUCH / CLICK TO VIEW DETAILS
            </span>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2"
          >
            {personalProjects.slice(0, 4).map((project) => (
              <motion.div
                key={project.id}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                id={`personal-proj-${project.id}`}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer rounded-3xl border border-[#e8e8df]/70 bg-[#fbfbf6] p-5 hover:shadow-xs transition-shadow duration-300 hover:border-[#5a5a40]/30"
              >
                <div className="relative overflow-hidden bg-stone-200 rounded-2xl aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:scale-102 group-hover:grayscale-0"
                  />
                  <span className="absolute bottom-3 right-3 rounded-full bg-white/95 px-2.5 py-0.5 font-mono text-[9px] text-[#1a1a1a] uppercase font-semibold shadow-xs">
                    {project.category}
                  </span>
                </div>
                <div className="mt-4 flex items-start justify-between">
                  <div>
                    <h3 className="font-display font-bold text-[#1a1a1a] group-hover:text-[#5a5a40] transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <span className="text-[10px] uppercase font-mono tracking-wide text-gray-400">
                      {project.tag}
                    </span>
                  </div>
                  <div className="rounded-full bg-white border border-[#e8e8df] p-1.5 text-gray-500 group-hover:bg-[#5a5a40]/10 group-hover:text-[#5a5a40] transition-all">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
                <p className="mt-2 text-xs text-gray-600 leading-relaxed font-sans">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>
      </div>
    </div>
  );
}
