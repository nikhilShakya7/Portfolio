import { useState } from "react";
import { motion, AnimatePresence, Variants } from "motion/react";

interface DesignProject {
  id: string;
  title: string;
  category: "REACT JS" | "NEXT JS" | "PYTHON" | "MOBILE";
  description: string;
  image: string;
  link: string;
}

interface SelectedWorksProps {
  onSelectProject?: (project: DesignProject) => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function SelectedWorks({ onSelectProject }: SelectedWorksProps) {
  const [activeFilter, setActiveFilter] = useState<
    "ALL" | "REACT JS" | "NEXT JS" | "PYTHON" | "MOBILE"
  >("ALL");

  const categories = [
    "ALL",
    "REACT JS",
    "NEXT JS",
    "PYTHON",
    "MOBILE",
  ] as const;

  const worksData: DesignProject[] = [
    {
      id: "aura-architecture",
      link: "https://react-js-event-manager.vercel.app/",
      title: "Event Manager",
      description:
        "A stylish React-based UI showcasing modern layouts and responsive design that helps to manage events.",
      category: "REACT JS",
      image: "/images/10780103_19198080.svg",
    },
    {
      id: "Weather Application",
      title: "Weather Application",
      description:
        "A React app that fetches real-time weather data with a clean and user-friendly interface.",
      category: "REACT JS",
      link: "https://reactjs-weather-app-phi.vercel.app/",
      image: "/images/weather.jpg",
    },
    {
      id: "वसः A clothing website",
      title: "वसः A clothing website",
      link: "https://reactjs-wosa.vercel.app/",
      description:
        "Wosa (वसः) is a responsive fashion e-commerce site built with React.js and Context API. It features dynamic routing and localStorage persistence.",
      category: "REACT JS",
      image: "/images/9.svg",
    },
    {
      id: "Renovyte.",
      title: "Renovyte.",
      link: "https://nextjs-extension-manager.vercel.app/",
      description:
        "Simple and easy to use website to help you with every step of your home renovation.",
      category: "REACT JS",
      image: "/images/10.svg",
    },
    {
      id: "Movies",
      title: "Movies",
      link: "https://next-js-movies-phi-self.vercel.app/",
      description:
        "A dynamic quiz app using Next.js and TypeScript with category selection feature.",
      category: "NEXT JS",
      image: "/images/3.svg",
    },
    {
      id: "Dashboard",
      title: "Dashboard",
      link: "https://next-js-dashboard-tlad.vercel.app/",
      description:
        "An analytics dashboard built with modern UI components for data visualization.",
      category: "NEXT JS",
      image: "/images/4.svg",
    },
    {
      id: "Dashboa",
      title: "Automated face recognition Attendance System",
      description:
        "A Python-based system using facial recognition and SQLite to automate attendance tracking.",
      category: "PYTHON",
      link: "https://github.com/nikhilShakya7/Python_Face-Attendence-System",
      image: "/images/face.svg",
    },
    {
      id: "mobile",
      link: "https://github.com/nikhilShakya7/Flutter-Flappy_Bird",
      title: "Flappy Bird Clone",
      description:
        "A fun and engaging Flappy Bird clone built using Flutter and Dart with smooth animations, collision detection, and scoring.",
      category: "MOBILE",
      image: "/images/8.png",
    },
    {
      id: "Technest",
      link: "https://reactjs-tech-nest.vercel.app/",
      title: "Technest",
      description:
        "A sleek tech UI built with React and Bootstrap to showcase media content.",
      category: "NEXT JS",
      image: "/images/2.svg",
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
          Here are some of my featured projects. Each one represents unique
          challenges and creative solutions.
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
                className="relative py-2 font-mono text-[11px] font-bold tracking-widest transition-colors duration-200 hover:cursor-pointer"
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
        className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
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
                onClick={() => {
                  onSelectProject?.(project);
                  window.open(project.link, "_blank", "noopener,noreferrer");
                }}
                className={`group flex cursor-pointer flex-col ${dynamicOffset}`}
              >
                {/*
                  ── IMAGE CONTAINER ──────────────────────────────────────────
                  • relative + overflow-hidden clips the scale transform
                  • aspect-[3/4] locks the ratio on all screen sizes
                  • The ::before pseudo-border is replicated with an absolutely
                    positioned inset div that scales from 0 → 1 on hover,
                    giving a clean "draw-in" border effect matching the
                    black / mono editorial theme.
                */}
                <div className="relative w-full overflow-hidden bg-gray-50 aspect-[3/4]">
                  {/* Responsive image — fills the fixed aspect-ratio box */}
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="
                      absolute inset-0
                      h-full w-full
                      object-cover
                      grayscale
                      transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                      group-hover:grayscale-0
                      group-hover:scale-[1.04]
                    "
                  />

                  {/* Dark scrim — fades in on hover for readability depth */}
                  <div
                    className="
                      absolute inset-0
                      bg-black/0
                      transition-colors duration-500
                      group-hover:bg-black/10
                    "
                  />

                  {/*
                    Border overlay — four edges animate independently.
                    Top & bottom scale on the X axis; left & right on the Y axis.
                    All start at scale 0 from the correct transform origin and
                    expand to full size on group-hover.
                  */}
                  {/* Top edge */}
                  <span
                    className="
                      pointer-events-none absolute left-3 top-3 right-3
                      h-[1.5px] bg-black
                      origin-left scale-x-0
                      transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                      group-hover:scale-x-100
                    "
                  />
                  {/* Bottom edge */}
                  <span
                    className="
                      pointer-events-none absolute left-3 bottom-3 right-3
                      h-[1.5px] bg-black
                      origin-right scale-x-0
                      transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] delay-75
                      group-hover:scale-x-100
                    "
                  />
                  {/* Left edge */}
                  <span
                    className="
                      pointer-events-none absolute top-3 bottom-3 left-3
                      w-[1.5px] bg-black
                      origin-bottom scale-y-0
                      transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] delay-100
                      group-hover:scale-y-100
                    "
                  />
                  {/* Right edge */}
                  <span
                    className="
                      pointer-events-none absolute top-3 bottom-3 right-3
                      w-[1.5px] bg-black
                      origin-top scale-y-0
                      transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[50ms]
                      group-hover:scale-y-100
                    "
                  />

                  {/* "View Project ↗" label that appears on hover */}
                  <div
                    className="
                      absolute bottom-6 left-0 right-0
                      flex justify-center
                      opacity-0 translate-y-2
                      transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]
                      group-hover:opacity-100 group-hover:translate-y-0
                    "
                  >
                    <span className="font-mono text-[10px] font-bold tracking-widest text-black bg-white/90 px-3 py-1.5 uppercase">
                      View Project ↗
                    </span>
                  </div>
                </div>

                {/* Info Text Elements */}
                <div className="mt-5 flex flex-col">
                  <span className="font-mono text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                    {project.category}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-black transition-colors duration-200 group-hover:text-gray-500">
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

      <div className="mt-16 border-t border-gray-100/80 pt-12 pb-16" />
    </div>
  );
}
