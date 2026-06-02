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
      views: ["selected-works", "nikhil-home"] as ViewType[],
      targetView: "nikhil-home" as ViewType,
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
    <header className="sticky top-0 z-50 w-full border-b border-[#e8e8df]/85 bg-[#f5f5f0]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        {/* Left */}
        <div className="flex items-center gap-3">
          <button
            id="brand-logo"
            onClick={() => onViewChange("nikhil-home")}
            className="font-display text-lg font-bold tracking-tight text-[#5a5a40] transition-opacity hover:opacity-85"
          >
            NIKHIL
          </button>

          <div className="hidden items-center gap-1 rounded-full border border-[#e8e8df] bg-white/90 px-3 py-1.5 sm:flex">
            <Code2 className="h-3 w-3 text-[#5a5a40]" />
            <span className="text-[11px] font-medium tracking-wide text-[#5a5a40]">
              Portfolio
            </span>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-6 md:gap-8">
          <nav className="flex items-center gap-4 md:gap-6">
            {navItems.map((item) => {
              const active = isSelected(item.views);
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  id={item.id}
                  onClick={() => onViewChange(item.targetView)}
                  className="relative py-1 text-sm font-medium transition-colors"
                  style={{
                    color: active ? "#5a5a40" : "#6e6e5a",
                  }}
                >
                  <span className="flex items-center gap-1">
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
                </button>
              );
            })}
          </nav>

          <button
            id="hire-me-cta"
            onClick={() => onViewChange("contact")}
            className="cursor-pointer rounded-full bg-[#5a5a40] px-5 py-2 text-xs font-semibold tracking-wide text-white transition-all hover:bg-[#40402d] shadow-sm"
          >
            Hire Me
          </button>
        </div>
      </div>
    </header>
  );
}
