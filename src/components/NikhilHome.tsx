import { Project, SkillProgress } from '../types';
import { motion } from 'motion/react';
import { Sparkles, Terminal, Code2, Database, Network, ChevronRight } from 'lucide-react';

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
  onSelectProject
}: NikhilHomeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-24"
    >
      {/* 1. Jumbotron Introduction Frame */}
      <div id="nikhil-jumbotron" className="mb-20 grid grid-cols-1 items-start gap-8 lg:grid-cols-12 md:mb-32">
        <div className="lg:col-span-8">
          <span className="font-mono text-xs font-bold tracking-widest text-[#5a5a40] uppercase flex items-center gap-1.5">
            <Terminal className="h-3.5 w-3.5" />
            // PERSONAL GREETING
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight text-[#1a1a1a] sm:text-5xl md:text-7xl">
            Hi, I am{' '}
            <span className="text-[#5a5a40] italic font-normal inline-block relative font-display">
              Nikhil.
              <span className="absolute bottom-2 left-0 h-2 w-full bg-[#5a5a40]/10 -z-10 rounded-sm" />
            </span>
          </h1>
          <h2 className="mt-4 font-display text-xl font-medium text-gray-700 sm:text-2xl md:text-3xl max-w-2xl leading-tight font-sans">
            A passionate developer learning and crafting digital experiences.
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg font-sans">
            Based in Bangalore, India, I specialize in full-stack engineering, client-side animations, and developer tools. Exploring the intersections of typography, engineering, and beautiful minimalist layouts.
          </p>
        </div>

        {/* Diagnostic Metadata card */}
        <div className="lg:col-span-4 border border-[#e8e8df] bg-[#fbfbf6] p-6 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.01)] font-mono text-xs">
          <span className="text-[#5a5a40] font-bold block mb-4 uppercase tracking-widest text-[10px]">
            &gt; SYSTEM STATE
          </span>
          <div className="space-y-3 text-gray-600">
            <div className="flex justify-between border-b border-[#e8e8df]/40 pb-2">
              <span>ACTIVE REGION:</span>
              <span className="text-[#1a1a1a] font-semibold">ASIA-SOUTH1 (BLR)</span>
            </div>
            <div className="flex justify-between border-b border-[#e8e8df]/40 pb-2">
              <span>WORK SPEC:</span>
              <span className="text-[#1a1a1a] font-semibold">CREATIVE DEVELOPER</span>
            </div>
            <div className="flex justify-between border-b border-[#e8e8df]/40 pb-2">
              <span>EXPERIENCE:</span>
              <span className="text-[#1a1a1a] font-semibold">LEARNING & SHAPING</span>
            </div>
            <div className="flex justify-between pb-1">
              <span>COLLAB:</span>
              <span className="text-[#5a5a40] font-bold">CONFIRMED ACTIVE</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Skills & Expertise Progress Bars */}
      <div id="skills-visual-section" className="mb-20">
        <div className="mb-10 text-left border-b border-[#e8e8df] pb-4">
          <span className="font-mono text-xs font-bold tracking-widest text-[#5a5a40]/65 uppercase">
            // MEASUREMENTS
          </span>
          <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-[#1a1a1a]">
            Skills & Expertise
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.name} id={`skill-metric-${skill.name.toLowerCase().replace(/\s+/g, '-')}`} className="group">
              <div className="mb-2 flex items-center justify-between text-xs font-semibold">
                <span className="text-gray-700 tracking-wide">{skill.name}</span>
                <span className="text-[#5a5a40] font-mono">{skill.percentage}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden bg-[#e8e8df]/50 rounded-full">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-[#5a5a40] to-[#808060] rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Technology Stack Categorized Grid */}
      <div id="tech-stack-visual-grid" className="mb-20">
        <div className="mb-10 text-left border-b border-[#e8e8df] pb-4">
          <span className="font-mono text-xs font-bold tracking-widest text-[#5a5a40] uppercase">
            // TOOLBELT
          </span>
          <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-[#1a1a1a]">
            Technology Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Languages card */}
          <div className="border border-[#e8e8df]/80 bg-[#fbfbf6] p-6 rounded-3xl shadow-xs hover:border-[#5a5a40]/30 transition-all">
            <span className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-[#5a5a40]/70 uppercase mb-4">
              <Code2 className="h-4 w-4 text-[#5a5a40]" />
              Languages
            </span>
            <div className="flex flex-wrap gap-2">
              {techStack.languages.map((lng) => (
                <span
                  key={lng}
                  className="rounded-full bg-white border border-[#e8e8df] px-3 py-1 text-xs font-medium text-gray-600 hover:text-[#5a5a40] hover:border-[#5a5a40]/40 transition-colors"
                >
                  {lng}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks card */}
          <div className="border border-[#e8e8df]/80 bg-[#fbfbf6] p-6 rounded-3xl shadow-xs hover:border-[#5a5a40]/30 transition-all">
            <span className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-[#5a5a40]/70 uppercase mb-4">
              <Database className="h-4 w-4 text-[#5a5a40]" />
              Frameworks / Libraries
            </span>
            <div className="flex flex-wrap gap-2">
              {techStack.frameworks.map((fw) => (
                <span
                  key={fw}
                  className="rounded-full bg-white border border-[#e8e8df] px-3 py-1 text-xs font-medium text-gray-600 hover:text-[#5a5a40] hover:border-[#5a5a40]/40 transition-colors"
                >
                  {fw}
                </span>
              ))}
            </div>
          </div>

          {/* Tools Infrastructure */}
          <div className="border border-[#e8e8df]/80 bg-[#fbfbf6] p-6 rounded-3xl shadow-xs hover:border-[#5a5a40]/30 transition-all">
            <span className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-[#5a5a40]/70 uppercase mb-4">
              <Network className="h-4 w-4 text-[#5a5a40]" />
              Tools & Infra
            </span>
            <div className="flex flex-wrap gap-2">
              {techStack.tools.map((tl) => (
                <span
                  key={tl}
                  className="rounded-full bg-white border border-[#e8e8df] px-3 py-1 text-xs font-medium text-gray-600 hover:text-[#5a5a40] hover:border-[#5a5a40]/40 transition-colors"
                >
                  {tl}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. Portfolio Works showcase (Screen 5) */}
      <div id="nikhil-works" className="mb-10">
        <div className="mb-10 text-left border-b border-[#e8e8df] pb-4 flex justify-between items-end">
          <div>
            <span className="font-mono text-xs font-bold tracking-widest text-[#5a5a40] uppercase">
              // PRODUCTION
            </span>
            <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-[#1a1a1a]">
              Projects Grid
            </h2>
          </div>
          <span className="font-mono text-xs text-gray-400">TOUCH / CLICK TO VIEW DETAILS</span>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {personalProjects.slice(0, 4).map((project) => (
            <div
              key={project.id}
              id={`personal-proj-${project.id}`}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer rounded-3xl border border-[#e8e8df]/70 bg-[#fbfbf6] p-5 hover:shadow-xs transition-all duration-300 hover:border-[#5a5a40]/30"
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
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
