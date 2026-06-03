import { Project } from '../types';
import { motion } from 'motion/react';
import { staggerContainer, staggerItem } from '../utils/animations';
import { X, Calendar, User, Briefcase, Tag, Code } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  if (!project) return null;

  const metadataItems = [
    { icon: Briefcase, label: 'CLIENT', value: project.client || 'Aura Labs' },
    { icon: Calendar, label: 'RELEASE YEAR', value: project.year || '2024' },
    { icon: User, label: 'ROLE SPECIFICATION', value: project.role || 'Interaction Lead' },
    { icon: Tag, label: 'TAG LABELS', value: project.tag },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 md:p-6 backdrop-blur-xs"
    >
      <div className="absolute inset-0" onClick={onClose} />

      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 12 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#fbfbf6] shadow-2xl border border-[#e8e8df] custom-scrollbar"
        id="case-study-modal"
      >
        <button
          id="close-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 rounded-full bg-[#fbfbf6]/90 p-2 text-[#5a5a40] hover:text-[#1a1a1a] hover:bg-white shadow-xs transition-colors cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative"
        >
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full object-cover max-h-[350px] aspect-video"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute bottom-6 left-6 right-6 text-white text-left">
            <span className="font-mono text-[9px] font-bold tracking-widest text-[#fbfbf6] bg-[#1a1a1a]/90 px-2.5 py-1 rounded-lg">
              {project.category}
            </span>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {project.title}
            </h2>
          </div>
        </motion.div>

        <div className="p-6 md:p-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
          
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-8 text-left space-y-6"
          >
            <div>
              <h3 className="font-display text-lg font-bold text-[#1a1a1a]">
                Case Overview & Problem Statement
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 font-sans">
                The {project.title} development required combining rich client interaction guidelines and highly structured component models. We addressed these parameters by selecting custom modern typography pairings, responsive layouts, and beautiful minimalist components.
              </p>
            </div>

            <div>
              <h4 className="font-display font-semibold text-[#1a1a1a] text-sm">
                Aesthetic Execution
              </h4>
              <p className="mt-2 text-xs text-gray-600 leading-relaxed font-sans">
                Using specific fluid modular grids, we created balanced negative space margins and integrated micro-animations on interaction triggers to guide focus points effectively.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="rounded-2xl bg-white border border-[#e8e8df] p-5 mt-6"
            >
              <span className="font-mono text-[9px] font-bold tracking-wider text-stone-500 uppercase">
                // DIAGNOSTIC METRIC ARCHITECTURE
              </span>
              <div className="mt-3 grid grid-cols-2 gap-4 text-xs font-mono">
                <div className="border-l-2 border-[#5a5a40] pl-3">
                  <span className="block text-gray-400 text-[10px]">REACTIVE FRAME-RATE</span>
                  <span className="text-[#1a1a1a] font-bold text-sm">60 FLOATS/S</span>
                </div>
                <div className="border-l-2 border-[#1a1a1a] pl-3">
                  <span className="block text-gray-400 text-[10px]">BUNDLE MEMORY WEIGHT</span>
                  <span className="text-[#1a1a1a] font-bold text-sm">~45kb (GZIP)</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="whileInView"
            className="lg:col-span-4 border-t border-gray-100 pt-8 lg:border-t-0 lg:border-l lg:border-[#e8e8df] lg:pl-10 lg:pt-0 text-left"
          >
            <motion.h3 variants={staggerItem} className="font-display text-sm font-bold text-[#1a1a1a] uppercase tracking-wider mb-6">
              PROJECT METADATA
            </motion.h3>

            <div className="space-y-5 font-mono text-[11px] text-gray-550">
              {metadataItems.map(({ icon: Icon, label, value }) => (
                <motion.div key={label} variants={staggerItem} className="flex items-start gap-2.5">
                  <Icon className="h-4 w-4 text-[#5a5a40] shrink-0" />
                  <div>
                    <span className="block text-[9px] text-stone-500 uppercase font-bold">{label}</span>
                    <span className="text-[#1a1a1a] font-semibold">{value}</span>
                  </div>
                </motion.div>
              ))}

              <motion.div variants={staggerItem} className="flex items-start gap-2.5 pt-4 border-t border-gray-100">
                <Code className="h-4 w-4 text-[#5a5a40] shrink-0" />
                <div>
                  <span className="block text-[9px] text-stone-500 uppercase font-bold">CORE TECHNOLOGY</span>
                  <span className="text-stone-600 font-semibold font-sans">REACT, TYPESCRIPT, TAILWIND v4, FRAMER MOTION</span>
                </div>
              </motion.div>
            </div>

            <motion.button
              variants={staggerItem}
              id="modal-cta-close"
              onClick={onClose}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 cursor-pointer w-full text-center border border-[#1a1a1a] bg-[#1a1a1a] text-white hover:bg-transparent hover:text-[#1a1a1a] transition-all rounded-full py-3.5 text-xs font-bold leading-tight tracking-wider uppercase font-sans"
            >
              Close case report
            </motion.button>
          </motion.div>

        </div>
      </motion.div>
    </motion.div>
  );
}
