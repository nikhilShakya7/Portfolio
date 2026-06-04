import { ViewType } from "../types";
import { motion } from "motion/react";
import { Briefcase, User, Mail, Code2 } from "lucide-react";

interface HeaderProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
}

export default function Header({ currentView, onViewChange }: HeaderProps) {
  const isSelected = (views: ViewType[]) => views.includes(currentView);

  const navItems = [
    {
      id: "work-nav",
      label: "Work",
      views: ["works"] as ViewType[],
      targetView: "works" as ViewType,
      icon: Briefcase,
    },
    {
      id: "about-nav",
      label: "About",
      views: ["about"] as ViewType[],
      targetView: "about" as ViewType,
      icon: User,
    },
    {
      id: "contact-nav",
      label: "Contact",
      views: ["contact"] as ViewType[],
      targetView: "contact" as ViewType,
      icon: Mail,
    },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 w-full border-b border-[#e8e8df]/85 bg-[#f5f5f0]/85 backdrop-blur-md"
    >
      <div className="mx-auto flex flex-row items-center justify-between px-6 py-4 md:grid md:grid-cols-3 md:px-12 max-w-7xl">
        {/* Left Section: Logo */}
        <div className="flex items-center gap-3 justify-start ">
          <motion.button
            id="brand-logo"
            onClick={() => onViewChange("nikhil-home")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="font-display text-2xl font-bold tracking-tight text-[#5a5a40] transition-opacity hover:opacity-85 cursor-pointer"
          >
            NIKHIL
          </motion.button>

          <div className="hidden items-center gap-1 rounded-full border border-[#e8e8df] bg-white/90 px-3 py-1.5 sm:flex">
            <Code2 className="h-2 w-3 text-[#5a5a40]" />
            <span className="text-[10px] font-medium tracking-wide text-[#5a5a40]">
              Portfolio
            </span>
          </div>
        </div>

        {/* Center Section: Navigation Links */}
        <nav className="flex items-center justify-center gap-4 md:gap-8">
          {navItems.map((item, idx) => {
            const active = isSelected(item.views);
            const Icon = item.icon;

            return (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + idx * 0.05, duration: 0.4 }}
                id={item.id}
                onClick={() => onViewChange(item.targetView)}
                whileHover={{ y: -1 }}
                className="relative py-1 text-sm font-medium transition-colors duration-300 hover:text-[#5a5a40] cursor-pointer"
                style={{
                  color: active ? "#5a5a40" : "#6e6e5a",
                }}
              >
                <span className="flex items-center gap-1.5">
                  <Icon className="h-3.5 w-3.5 md:hidden" />
                  <span className="hidden md:inline">{item.label}</span>
                </span>

                {active && (
                  <motion.div
                    layoutId="activeNavLine"
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-[#5a5a40]"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </motion.button>
            );
          })}
        </nav>

        {/* Right Section: CTA Button */}
        <div className="flex items-center justify-end">
          <motion.button
            id="hire-me-cta"
            onClick={() => {
              if (currentView === "contact") {
                document
                  .getElementById("contact-details-form")
                  ?.scrollIntoView({ behavior: "smooth" });
              } else {
                onViewChange("contact");
              }
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
            style={{ originX: 0.5, originY: 0.5 }}
            className="hire-me-btn cursor-pointer bg-black px-5 py-[9px] text-[11px] font-bold tracking-[0.15em] text-white  shadow-sm"
          >
            Hire Me
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}
