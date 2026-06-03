import { useState } from "react";
import { motion, AnimatePresence, Variants } from "motion/react";

interface DesignProject {
  id: string;
  title: string;
  category: "BRANDING" | "UI/UX" | "MOTION";
  description: string;
  image: string;
}

interface SelectedWorksProps {
  onSelectProject?: (project: DesignProject) => void;
}

// Parent container layout variants for the entrance orchestration
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Staggers the card entrances sequentially
      delayChildren: 0.1,
    },
  },
};

// Card structural animation states explicitly typed to Framer Motion's Variants
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1], // TypeScript now validates this as a fixed cubic-bezier tuple format
    },
  },
};

export default function SelectedWorks({ onSelectProject }: SelectedWorksProps) {
  const [activeFilter, setActiveFilter] = useState<
    "ALL" | "BRANDING" | "UI/UX" | "MOTION"
  >("ALL");

  const categories = ["ALL", "BRANDING", "UI/UX", "MOTION"] as const;

  const worksData: DesignProject[] = [
    {
      id: "aura-skincare",
      title: "Aura Skincare",
      category: "BRANDING",
      description:
        "Visual identity and packaging design focusing on raw, organic materials and minimalist...",
      image:
        "https://images.unsplash.com/photo-1608248597481-496100c8c836?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "nexus-finance",
      title: "Nexus Finance",
      category: "UI/UX",
      description:
        "A comprehensive dashboard redesign to simplify complex data streams for institutional...",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "kinetic-flow",
      title: "Kinetic Flow",
      category: "MOTION",
      description:
        "An exploration of physics-based typography and organic fluid simulations for a tech...",
      image:
        "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "lumina-arch",
      title: "Lumina Arch",
      category: "BRANDING",
      description:
        "Positioning a boutique architecture firm with a robust, monochromatic identity system and...",
      image:
        "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "vanguard-ed",
      title: "Vanguard Ed",
      category: "UI/UX",
      description:
        "A seamless, distraction-free learning platform designed for premier creative institutions.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "sonic-identity",
      title: "Sonic Identity",
      category: "MOTION",
      description:
        "Translating audio branding into reactive, generative visual systems for live...",
      image:
        "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const filteredWorks =
    activeFilter === "ALL"
      ? worksData
      : worksData.filter((work) => work.category === activeFilter);

  return (
    <div className="mx-auto min-h-screen max-w-7xl px-6 text-[#1a1a1a] md:px-12">
      {/* Title Header Section */}
      <section className="pt-20 pb-16 md:pt-28">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl font-bold tracking-tight text-black sm:text-6xl md:text-7xl"
        >
          Selected Works.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-xl text-base leading-relaxed text-gray-500 font-sans"
        >
          A curated selection of digital experiences, brand identities, and
          motion design projects crafted with precision and intent.
        </motion.p>
      </section>

      {/* Filter Tabs Navigation */}
      <div className="border-b border-gray-100 pb-4">
        <div className="flex flex-wrap gap-6 md:gap-8">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className="relative py-2 font-mono text-[11px] font-bold tracking-widest transition-colors duration-200"
                style={{ color: isActive ? "#000000" : "#9e9e9e" }}
              >
                {cat}
                {isActive && (
                  <motion.div
                    layoutId="activeFilterLine"
                    className="absolute bottom-[-17px] left-0 h-[1.5px] w-full bg-black"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filteredWorks.map((project, index) => {
            const dynamicOffset =
              index % 3 === 2
                ? "lg:mt-12"
                : index % 3 === 1
                  ? "lg:mt-24"
                  : "lg:mt-0";

            return (
              <motion.div
                layout
                key={project.id}
                variants={cardVariants}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                  transition: { duration: 0.2 },
                }}
                onClick={() => onSelectProject?.(project)}
                className={`group flex cursor-pointer flex-col ${dynamicOffset}`}
              >
                {/* Image Wrap */}
                <div className="w-full overflow-hidden bg-gray-50">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-700 ease-[0.16, 1, 0.3, 1] aspect-[3/4] group-hover:scale-[1.015]"
                  />
                </div>

                {/* Info Text Elements */}
                <div className="mt-5 flex flex-col">
                  <span className="font-mono text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                    {project.category}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-black transition-colors duration-200 group-hover:text-gray-600">
                    {project.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-gray-500 font-sans">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      <div className="mt-16 border-t border-gray-100/80 pt-12 pb-16"></div>
    </div>
  );
}
