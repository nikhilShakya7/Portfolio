import { useState, useEffect } from 'react';
import { ViewType, Project } from './types';
import Header from './components/Header';
import StudioHome from './components/StudioHome';
import NikhilHome from './components/NikhilHome';
import SelectedWorks from './components/SelectedWorks';
import About from './components/About';
import Contact from './components/Contact';
import ProjectDetailModal from './components/ProjectDetailModal';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS, EXPERIENCES, NIKHIL_SKILLS, TECH_STACK, PORTRAIT_IMAGE } from './data';
import { Github, Twitter, Linkedin, HelpCircle, ArrowUpRight } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('studio-home');
  const [personaMode, setPersonaMode] = useState<'studio' | 'nikhil'>('studio');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Sync default home view when switcher changes persona mode
  const handlePersonaChange = (mode: 'studio' | 'nikhil') => {
    setPersonaMode(mode);
    if (currentView === 'studio-home' || currentView === 'nikhil-home') {
      setCurrentView(mode === 'studio' ? 'studio-home' : 'nikhil-home');
    }
  };

  // Safe window scroll to top when changing views
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentView]);

  return (
    <div id="studio-app-root" className="min-h-screen flex flex-col justify-between bg-[#f5f5f0]">
      <div className="w-full">
        {/* Navigation Header bar state controller */}
        <Header
          currentView={currentView}
          onViewChange={setCurrentView}
          personaMode={personaMode}
          onPersonaChange={handlePersonaChange}
        />

        {/* Dynamic active view animated container */}
        <main className="w-full relative min-h-[calc(100vh-140px)]">
          <AnimatePresence mode="wait">
            {currentView === 'studio-home' && (
              <motion.div key="studio-home-wrap" className="w-full">
                <StudioHome
                  featuredProjects={PROJECTS.filter((p) => p.featured)}
                  onViewChange={setCurrentView}
                  onSelectProject={setSelectedProject}
                />
              </motion.div>
            )}

            {currentView === 'nikhil-home' && (
              <motion.div key="nikhil-home-wrap" className="w-full">
                <NikhilHome
                  skills={NIKHIL_SKILLS}
                  techStack={TECH_STACK}
                  personalProjects={PROJECTS}
                  onSelectProject={setSelectedProject}
                />
              </motion.div>
            )}

            {currentView === 'selected-works' && (
              <motion.div key="selected-works-wrap" className="w-full">
                <SelectedWorks
                  projects={PROJECTS}
                  onSelectProject={setSelectedProject}
                />
              </motion.div>
            )}

            {currentView === 'about' && (
              <motion.div key="about-wrap" className="w-full">
                <About
                  experiences={EXPERIENCES}
                  portraitImage={PORTRAIT_IMAGE}
                />
              </motion.div>
            )}

            {currentView === 'contact' && (
              <motion.div key="contact-wrap" className="w-full">
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
      <footer id="studio-footer" className="w-full bg-[#1b1c1c] text-white border-t border-neutral-800 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            
            {/* Logo/Signet */}
            <div className="md:col-span-2 text-left">
              <span className="font-display font-black text-xl tracking-widest text-[#5a5a40]">
                STUDIO
              </span>
              <p className="mt-4 max-w-sm text-xs leading-relaxed text-gray-400">
                Crafting refined responsive digital designs, mathematical page alignments, and fluid visual animations for progressive clients.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <a
                  id="foot-icon-twitter"
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-neutral-800/80 p-2 text-gray-300 hover:text-white hover:bg-[#5a5a40] transition-all"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  id="foot-icon-linkedin"
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-neutral-800/80 p-2 text-gray-300 hover:text-white hover:bg-[#5a5a40] transition-all"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  id="foot-icon-github"
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-neutral-800/80 p-2 text-gray-300 hover:text-white hover:bg-[#5a5a40] transition-all"
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Quick Map links */}
            <div className="text-left">
              <span className="font-mono text-[9px] font-bold tracking-widest text-gray-500 uppercase">
                // MAP DIRECTORIES
              </span>
              <ul className="mt-4 space-y-2 text-xs">
                <li>
                  <button
                    onClick={() => setCurrentView(personaMode === 'studio' ? 'studio-home' : 'nikhil-home')}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Home Index
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentView('selected-works')}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Selected Works
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentView('about')}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Designer Story
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentView('contact')}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Contact Portal
                  </button>
                </li>
              </ul>
            </div>

            {/* Technical credentials */}
            <div className="text-left font-mono text-[10px] text-gray-500 space-y-1.5">
              <span className="block font-bold tracking-widest text-gray-500 uppercase text-[9px]">
                // FRAMEWORK RECAP
              </span>
              <p className="pt-2">BUILD SPEC: React v19.0</p>
              <p>STYLING: Tailwind CSS v4</p>
              <p>ANIMATION: Framer Motion v12</p>
              <p className="text-[#5a5a40] font-bold">MODE: {personaMode === 'nikhil' ? 'Nikhil Personal' : 'Studio Agency'}</p>
            </div>

          </div>

          <div className="mt-12 border-t border-neutral-850 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-gray-500 text-left gap-4">
            <span>&copy; {new Date().getFullYear()} STUDIO CO. ALL RIGHTS RESERVED WORLDWIDE.</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white">PRIVACY</a>
              <span>/</span>
              <a href="#" className="hover:text-white">TERMS & IMPRESSUM</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
