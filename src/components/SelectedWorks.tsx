import { useState } from 'react';
import { Project } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Search, SlidersHorizontal, Eye } from 'lucide-react';

interface SelectedWorksProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export default function SelectedWorks({ projects, onSelectProject }: SelectedWorksProps) {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'BRANDING' | 'UI/UX' | 'MOTION'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: ('ALL' | 'BRANDING' | 'UI/UX' | 'MOTION')[] = ['ALL', 'BRANDING', 'UI/UX', 'MOTION'];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeFilter === 'ALL' || project.category === activeFilter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-24"
    >
      {/* 1. Header Segment */}
      <div id="works-header" className="mb-12 max-w-3xl">
        <span className="font-mono text-xs font-bold tracking-widest text-[#5a5a40] uppercase">
          // GALLERY
        </span>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-[#1a1a1a] md:text-6xl">
          Selected Works.
        </h1>
        <p className="mt-6 text-base leading-relaxed text-gray-600 md:text-lg font-sans">
          A curated selection of digital experiences crafting brand guidelines, interface engineering, and interactive animations. Each project is grounded in strict grids and user-centric systems.
        </p>
      </div>

      {/* 2. Advanced Interactive Filter Controls & Search */}
      <div className="mb-12 flex flex-col gap-6 border-b border-[#e8e8df] pb-6 md:flex-row md:items-center md:justify-between">
        {/* Category triggers */}
        <div className="flex flex-wrap items-center gap-2" id="category-filter-buttons">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                id={`filter-${cat.toLowerCase()}`}
                onClick={() => setActiveFilter(cat)}
                className={`relative rounded-full px-5 py-2 text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#5a5a40] text-white shadow-xs'
                    : 'bg-[#e8e8df]/40 text-stone-600 hover:bg-[#e8e8df]/85 hover:text-[#1a1a1a]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Live Search and filters */}
        <div className="relative w-full max-w-xs md:w-64">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <Search className="h-4 w-4" />
          </span>
          <input
            type="text"
            id="work-search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects..."
            className="w-full rounded-full border border-[#e8e8df] bg-[#fbfbf6] py-2 pl-9 pr-4 text-xs font-medium text-[#1a1a1a] placeholder-gray-400 focus:border-[#5a5a40] focus:outline-hidden"
          />
        </div>
      </div>

      {/* 4. Filter Information text feedback */}
      <div className="mb-6 flex items-center justify-between text-xs text-stone-500 font-mono">
        <span>SHOWING {filteredProjects.length} OF {projects.length} PROJECTS</span>
        {searchQuery && (
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveFilter('ALL');
            }}
            className="text-[#5a5a40] font-semibold hover:underline"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* 5. Fluid Responsive Projects Grid */}
      <AnimatePresence mode="popLayout">
        {filteredProjects.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                key={project.id}
                id={`project-card-${project.id}`}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer flex flex-col justify-between border border-[#e8e8df]/70 bg-[#fbfbf6] p-5 rounded-3xl transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:border-[#5a5a40]/35 h-full"
              >
                <div>
                  {/* Decorative project order list label */}
                  <div className="mb-3 flex items-center justify-between font-mono text-[10px] text-stone-500">
                    <span>№ {String(idx + 1).padStart(2, '0')}</span>
                    <span>{project.year || '2024'}</span>
                  </div>

                  {/* Project image overlay */}
                  <div className="relative overflow-hidden bg-stone-200 rounded-2xl aspect-4/3">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out grayscale group-hover:grayscale-0 group-hover:scale-105"
                    />
                    
                    {/* Hover state cover action */}
                    <div className="absolute inset-0 bg-[#1a1a1a]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="rounded-full bg-[#fbfbf6]/90 px-4 py-2 text-xs font-bold text-[#5a5a40] shadow-sm flex items-center gap-1.5 backdrop-blur-xs">
                        <Eye className="h-3.5 w-3.5" />
                        Explore Case Study
                      </span>
                    </div>

                    {/* Left Category flag */}
                    <div className="absolute top-3 left-3 rounded-lg bg-[#1a1a1a]/90 px-2 py-0.5 text-[9px] font-bold tracking-widest text-white uppercase font-mono">
                      {project.category}
                    </div>
                  </div>

                  {/* Technical Tags & Meta */}
                  <div className="mt-5">
                    <span className="text-[10px] uppercase font-bold tracking-wide text-[#5a5a40]">
                      {project.tag}
                    </span>
                    <h3 className="mt-1 font-display text-lg font-bold text-[#1a1a1a] group-hover:text-[#5a5a40] transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs text-gray-600 leading-relaxed line-clamp-2 font-sans">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Arrow detail footer */}
                <div className="mt-6 border-t border-[#e8e8df] pt-3 flex items-center justify-between font-mono text-[9px] text-gray-500 uppercase">
                  <span>Client: {project.client}</span>
                  <span className="text-[#1a1a1a] font-semibold group-hover:text-[#5a5a40] transition-colors flex items-center gap-0.5">
                    VIEW DETAILS <span className="text-xs">&rarr;</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-sm border border-dashed border-gray-200 p-16 text-center"
          >
            <p className="text-sm text-gray-400 font-mono">
              No projects found matching the selection.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveFilter('ALL');
              }}
              className="mt-4 rounded-full bg-[#1a1a1a] px-4 py-2 text-xs font-semibold text-white hover:bg-[#5a5a40] transition-colors"
            >
              Reset filters
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
