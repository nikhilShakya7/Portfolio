import { useState, useEffect } from "react";
import { Project, ViewType } from "./types";
import { useViewRouter } from "./hooks/useViewRouter";
import Header from "./components/Header";
import StudioHome from "./components/StudioHome";
import NikhilHome from "./components/NikhilHome";
import SelectedWorks from "./components/SelectedWorks";
import Works from "./components/Works";
import About from "./components/About";
import Contact from "./components/Contact";
import ProjectDetailModal from "./components/ProjectDetailModal";
import { Analytics } from "@vercel/analytics/react";
import { motion, AnimatePresence } from "motion/react";
import { pageTransition } from "./utils/animations";
import {
  PROJECTS,
  EXPERIENCES,
  NIKHIL_SKILLS,
  TECH_STACK,
  PORTRAIT_IMAGE,
} from "./data";
import {
  Github,
  Twitter,
  Linkedin,
  HelpCircle,
  ArrowUpRight,
  Instagram,
  MailIcon,
} from "lucide-react";

export default function App() {
  const { currentView, setCurrentView } = useViewRouter();
  const [personaMode, setPersonaMode] = useState<"studio" | "nikhil">("studio");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [reloadKey, setReloadKey] = useState<{ [key: string]: number }>({
    "studio-home": 0,
    "nikhil-home": 0,
    "selected-works": 0,
    works: 0,
    about: 0,
    contact: 0,
  });

  // Handle navigation with reload capability
  const handleViewChange = (view: ViewType) => {
    if (currentView === view) {
      // If clicking the same view, trigger a reload
      setReloadKey((prev) => ({
        ...prev,
        [view]: (prev[view] || 0) + 1,
      }));
    } else {
      setCurrentView(view);
    }
  };

  // Sync default home view when switcher changes persona mode
  const handlePersonaChange = (mode: "studio" | "nikhil") => {
    setPersonaMode(mode);
    if (currentView === "studio-home" || currentView === "nikhil-home") {
      setCurrentView(mode === "studio" ? "studio-home" : "nikhil-home");
    }
  };

  // Safe window scroll to top when changing views
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [currentView]);

  // Scroll to top when page reloads (reloadKey changes)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [Object.values(reloadKey).join(",")]);

  return (
    <div
      id="studio-app-root"
      className="min-h-screen flex flex-col justify-between bg-[#f5f5f0]"
    >
      <div className="w-full">
        {/* Navigation Header bar state controller */}
        <Header
          currentView={currentView}
          onViewChange={handleViewChange}
          // personaMode={personaMode}
          // onPersonaChange={handlePersonaChange}
        />

        {/* Dynamic active view animated container */}
        <main className="w-full relative min-h-[calc(100vh-140px)]">
          <AnimatePresence mode="wait">
            {currentView === "studio-home" && (
              <motion.div
                key={`studio-home-${reloadKey["studio-home"]}`}
                className="w-full"
                {...pageTransition}
              >
                <StudioHome
                  featuredProjects={PROJECTS.filter((p) => p.featured)}
                  onViewChange={handleViewChange}
                  onSelectProject={setSelectedProject}
                />
              </motion.div>
            )}

            {currentView === "nikhil-home" && (
              <motion.div
                key={`nikhil-home-${reloadKey["nikhil-home"]}`}
                className="w-full"
                {...pageTransition}
              >
                <NikhilHome
                  skills={NIKHIL_SKILLS}
                  techStack={TECH_STACK}
                  personalProjects={PROJECTS}
                  onSelectProject={setSelectedProject}
                  onContact={() => handleViewChange("contact")}
                />
              </motion.div>
            )}

            {currentView === "selected-works" && (
              <motion.div
                key={`selected-works-${reloadKey["selected-works"]}`}
                className="w-full"
                {...pageTransition}
              >
                <SelectedWorks
                  projects={PROJECTS}
                  onSelectProject={setSelectedProject}
                />
              </motion.div>
            )}

            {currentView === "works" && (
              <motion.div
                key={`works-${reloadKey}`}
                className="w-full"
                {...pageTransition}
              >
                <Works />
              </motion.div>
            )}

            {currentView === "about" && (
              <motion.div
                key={`about-${reloadKey["about"]}`}
                className="w-full"
                {...pageTransition}
              >
                <About
                  experiences={EXPERIENCES}
                  portraitImage={PORTRAIT_IMAGE}
                />
              </motion.div>
            )}

            {currentView === "contact" && (
              <motion.div
                key={`contact-${reloadKey["contact"]}`}
                className="w-full"
                {...pageTransition}
              >
                <Contact />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

      {/* Case Study Modal Dialog */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      {/* TIMEPASS MODERN DESIGN SYSTEM FOOTER */}
      <motion.footer
        id="studio-footer"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full bg-[#1b1c1c] text-white border-t border-neutral-800 py-12 md:py-16"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            {/* Logo/Signet */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-2 text-left"
            >
              <span className="font-display font-black text-xl tracking-widest text-[#5a5a40]">
                NIKHIL
              </span>
              <p className="mt-4 max-w-sm text-xs leading-relaxed text-gray-400">
                Crafting refined responsive digital designs, mathematical page
                alignments, and fluid visual animations for progressive clients.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <a
                  id="foot-icon-instagram"
                  href="https://www.instagram.com/s._.nikk/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-neutral-800/80 p-2 text-gray-300 hover:text-white hover:bg-[#5a5a40] transition-all"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  id="foot-icon-linkedin"
                  href="https://www.linkedin.com/in/nikhil-shakya-00250b290/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-neutral-800/80 p-2 text-gray-300 hover:text-white hover:bg-[#5a5a40] transition-all"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  id="foot-icon-github"
                  href="https://github.com/nikhilShakya7"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-neutral-800/80 p-2 text-gray-300 hover:text-white hover:bg-[#5a5a40] transition-all"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  id="foot-icon-mail"
                  href="mailto:shakyankhil2003@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-neutral-800/80 p-2 text-gray-300 hover:text-white hover:bg-[#5a5a40] transition-all"
                >
                  <MailIcon className="h-4 w-4" />
                </a>
              </div>
            </motion.div>

            {/* Quick Map links */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-left"
            >
              <span className="font-mono text-[9px] font-bold tracking-widest text-gray-500 uppercase">
                // MAP DIRECTORIES
              </span>
              <ul className="mt-4 space-y-2 text-xs">
                <li>
                  <button
                    onClick={() => handleViewChange("nikhil-home")}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Home Index
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleViewChange("works")}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Selected Works
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleViewChange("about")}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleViewChange("contact")}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Contact Portal
                  </button>
                </li>
              </ul>
            </motion.div>

            {/* Technical credentials */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-left font-mono text-[10px] text-gray-500 space-y-1.5"
            >
              <span className="block font-bold tracking-widest text-gray-500 uppercase text-[9px]">
                // FRAMEWORK RECAP
              </span>
              <p className="pt-2">BUILD SPEC: React v19.0</p>
              <p>STYLING: Tailwind CSS v4</p>
              <p>ANIMATION: Framer Motion v12</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 border-t border-neutral-850 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-gray-500 text-left gap-4"
          >
            <span>
              &copy; {new Date().getFullYear()} ALL RIGHTS RESERVED WORLDWIDE.
            </span>
          </motion.div>
        </div>
      </motion.footer>

      {/* VERCEL WEB ANALYTICS TRACKER COMPONENT INJECTED AT ROOT LEVEL */}
      <Analytics />
    </div>
  );
}
