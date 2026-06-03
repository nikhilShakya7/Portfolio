import { Project, ViewType } from "../types";
import { motion } from "motion/react";
import AnimatedSection from "./AnimatedSection";
import { staggerContainer, staggerItem } from "../utils/animations";
import { ArrowUpRight, Laptop, Landmark, Sparkles } from "lucide-react";

interface StudioHomeProps {
  featuredProjects: Project[];
  onViewChange: (view: ViewType) => void;
  onSelectProject: (project: Project) => void;
}

export default function StudioHome({
  featuredProjects,
  onViewChange,
  onSelectProject,
}: StudioHomeProps) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-24">
      {/* 1. Hero Presentation Section */}
      <AnimatedSection
        id="studio-hero-section"
        className="mb-20 grid grid-cols-1 items-start gap-8 lg:grid-cols-12 md:mb-32"
      >
        <div className="lg:col-span-8">
          <span className="font-mono text-xs font-bold tracking-widest text-amber-800/60 uppercase">
            // INTRODUCTION
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight text-[#1a1a1a] sm:text-5xl md:text-7xl lg:text-7xl">
            Designing Digital Experiences <br />
            <span className="text-[#5a5a40] italic font-normal inline-block relative font-display">
              with Precision.
              <span className="absolute bottom-2 left-0 h-1.5 w-full bg-[#5a5a40]/10 -z-10 rounded-sm" />
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl font-sans">
            A curated gallery of sophisticated, minimalist interfaces and
            product identities built for forward-thinking creative minds.
          </p>
        </div>

        {/* Decorative Grid Item */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:col-span-4 lg:flex flex-col gap-4 border-l border-[#e8e8df] pl-8 pt-12 text-xs font-mono text-gray-500"
        >
          <div>
            <span className="text-gray-400">// METADATA</span>
            <div className="mt-2 text-[#1a1a1a] font-semibold">
              LOCATION: MILAN, IT
            </div>
            <div className="text-gray-400">
              AVAILABLE FOR OFF-LINE COLLABORATION
            </div>
          </div>
          <div>
            <span className="text-gray-400">// FOCUS</span>
            <div className="mt-2 text-[#1a1a1a] font-semibold">
              INTERACTIVE GRAPHICS
            </div>
            <div className="text-gray-400">SPATIAL IDENTITY SYSTEMS</div>
          </div>
        </motion.div>
      </AnimatedSection>

      {/* 2. Featured Projects Grid Headers */}
      <AnimatedSection
        id="featured-work-section"
        delay={0.05}
        className="mb-10 flex flex-col justify-between border-b border-[#e8e8df] pb-6 md:flex-row md:items-end"
      >
        <div>
          <span className="font-mono text-xs font-bold tracking-widest text-[#5a5a40] uppercase">
            // PORTFOLIO
          </span>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#1a1a1a] md:text-4xl">
            Featured Work
          </h2>
        </div>
        <button
          id="view-all-projects-btn"
          onClick={() => onViewChange("selected-works")}
          className="group mt-4 flex items-center gap-1.5 text-sm font-semibold tracking-wide text-[#1a1a1a] hover:text-[#5a5a40] md:mt-0 transition-colors"
        >
          View Selected Works
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </AnimatedSection>

      {/* 3. Featured Projects Cards */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-60px" }}
        className="mb-24 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16"
      >
        {featuredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            variants={staggerItem}
            transition={{ delay: idx * 0.1 }}
            id={`featured-card-${project.id}`}
            onClick={() => onSelectProject(project)}
            className="group cursor-pointer flex flex-col"
          >
            {/* Project Image Frame */}
            <div className="relative overflow-hidden bg-stone-200 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] transition-transform duration-500 hover:scale-[1.01]">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full object-cover aspect-[4/3] grayscale hover:grayscale-0 transition-all duration-700 ease-out scale-100 hover:scale-105"
              />
              <div className="absolute top-4 left-4 rounded-full bg-[#1a1a1a]/90 px-3 py-1 text-[10px] font-mono tracking-widest text-white uppercase backdrop-blur-xs">
                {project.category}
              </div>
            </div>

            {/* Project Metadata details table */}
            <div className="mt-6 px-2">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-bold text-[#1a1a1a] transition-colors group-hover:text-[#5a5a40]">
                  {project.title}
                </h3>
                <span className="rounded-full bg-stone-200/60 border border-[#e8e8df] px-2.5 py-0.5 font-mono text-[10px] text-gray-600 uppercase">
                  {project.tag.split(" / ")[0]}
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed font-sans">
                {project.description}
              </p>

              {/* Extended technical stats block */}
              <div className="mt-4 grid grid-cols-3 border-t border-[#e8e8df] pt-4 font-mono text-[11px] text-gray-500">
                <div>
                  <span className="block text-[9px] uppercase tracking-wider text-gray-400">
                    CLIENT
                  </span>
                  <span className="text-[#1a1a1a] font-semibold">
                    {project.client}
                  </span>
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-wider text-gray-400">
                    YEAR
                  </span>
                  <span className="text-[#1a1a1a] font-semibold">
                    {project.year}
                  </span>
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-wider text-gray-400">
                    ROLE
                  </span>
                  <span className="text-[#1a1a1a] font-semibold">
                    {project.role}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* 4. Elegant Agency Pitch Section */}
      <AnimatedSection
        delay={0.05}
        className="mb-24 grid grid-cols-1 gap-8 rounded-3xl bg-[#fbfbf6] border border-[#e8e8df]/70 p-8 md:p-12 lg:grid-cols-3 shadow-[0_4px_24px_rgba(0,0,0,0.015)]"
      >
        {[
          {
            icon: Landmark,
            title: "Aesthetic Authenticity",
            text: "We reject current cookie-cutter patterns and build from mathematical grid structures, timeless Swiss layouts, and meticulous spacing ratios.",
          },
          {
            icon: Laptop,
            title: "Performant Systems",
            text: "Every interface we deliver is highly reactive, lightweight, search optimized, and built utilizing advanced modern React techniques.",
          },
          {
            icon: Sparkles,
            title: "Creative Direction",
            text: "We translate abstract structural concepts and brand philosophies into tactile online installations that spark engagement.",
          },
        ].map(({ icon: Icon, title, text }, idx) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: idx * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex items-start gap-4"
          >
            <div className="rounded-2xl bg-white p-3 shadow-xs border border-[#e8e8df] text-[#5a5a40]">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-[#1a1a1a]">{title}</h4>
              <p className="mt-1.5 text-xs text-gray-600 leading-relaxed">
                {text}
              </p>
            </div>
          </motion.div>
        ))}
      </AnimatedSection>

      {/* 5. Hero Pitch / Bottom Action Block */}
      <AnimatedSection delay={0.05}>
        <div className="relative overflow-hidden rounded-3xl bg-[#1a1a1a] px-8 py-16 text-center text-white md:px-16 md:py-24">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(90,90,64,0.18),transparent_40%)] pointer-events-none" />
          <span className="font-mono text-xs font-bold tracking-widest text-[#5a5a40] uppercase">
            // CREATIVE COLLABORATION
          </span>
          <h3 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Ready to elevate your <br className="hidden sm:inline" /> digital
            presence?
          </h3>
          <p className="mx-auto mt-6 max-w-lg text-sm text-stone-300 leading-relaxed md:text-base">
            Let's discuss your next project. We collaborate on selecting custom
            typography, responsive design, and tailored visual components.
          </p>
          <motion.button
            id="call-to-action-btn"
            onClick={() => onViewChange("contact")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10 cursor-pointer rounded-full bg-white px-8 py-3 text-xs font-bold uppercase tracking-widest text-[#1a1a1a] transition-colors hover:bg-[#5a5a40] hover:text-white"
          >
            Get In Touch
          </motion.button>
        </div>
      </AnimatedSection>
    </div>
  );
}
