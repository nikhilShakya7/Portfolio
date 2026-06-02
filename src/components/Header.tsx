import { ViewType } from '../types';
import { motion } from 'motion/react';
import { Briefcase, User, Mail, Sparkles, Code2 } from 'lucide-react';

interface HeaderProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
  personaMode: 'studio' | 'nikhil';
  onPersonaChange: (mode: 'studio' | 'nikhil') => void;
}

export default function Header({
  currentView,
  onViewChange,
  personaMode,
  onPersonaChange
}: HeaderProps) {
  const isSelected = (views: ViewType[]) => views.includes(currentView);

  const navItems = [
    {
      id: 'work-nav',
      label: 'Work',
      views: ['selected-works', 'studio-home', 'nikhil-home'] as ViewType[],
      targetView: 'selected-works' as ViewType,
      icon: Briefcase
    },
    {
      id: 'about-nav',
      label: 'About',
      views: ['about'] as ViewType[],
      targetView: 'about' as ViewType,
      icon: User
    },
    {
      id: 'contact-nav',
      label: 'Contact',
      views: ['contact'] as ViewType[],
      targetView: 'contact' as ViewType,
      icon: Mail
    }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e8e8df]/85 bg-[#f5f5f0]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        {/* Left Side: Brand Logo and Persona Switcher */}
        <div className="flex items-center gap-4">
          <button
            id="brand-logo"
            onClick={() => onViewChange(personaMode === 'studio' ? 'studio-home' : 'nikhil-home')}
            className="font-display text-lg font-bold tracking-tight text-[#1a1a1a] transition-opacity hover:opacity-85"
          >
            STUDIO
          </button>
          
          {/* Persona quick switch badge */}
          <div className="hidden items-center gap-1.5 rounded-full border border-[#e8e8df] bg-white/90 p-1 shadow-[0_1px_3px_rgba(0,0,0,0.02)] sm:flex">
            <button
              id="toggle-studio-mode"
              onClick={() => {
                onPersonaChange('studio');
                onViewChange('studio-home');
              }}
              className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium tracking-wide transition-all ${
                personaMode === 'studio'
                  ? 'bg-[#1a1a1a] text-white shadow-xs'
                  : 'text-gray-500 hover:text-[#1a1a1a]'
              }`}
            >
              <Sparkles className="h-3 w-3" />
              Agency
            </button>
            <button
              id="toggle-nikhil-mode"
              onClick={() => {
                onPersonaChange('nikhil');
                onViewChange('nikhil-home');
              }}
              className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium tracking-wide transition-all ${
                personaMode === 'nikhil'
                  ? 'bg-[#5a5a40] text-white shadow-xs'
                  : 'text-gray-500 hover:text-[#5a5a40]'
              }`}
            >
              <Code2 className="h-3 w-3" />
              Nikhil
            </button>
          </div>
        </div>

        {/* Right Side: Tab Navigation & CTA */}
        <div className="flex items-center gap-6 md:gap-8">
          <nav className="flex items-center gap-4 md:gap-6">
            {navItems.map((item) => {
              const active = isSelected(item.views);
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  id={item.id}
                  onClick={() => item.targetView === 'selected-works' && personaMode === 'nikhil' ? onViewChange('nikhil-home') : onViewChange(item.targetView)}
                  className="relative py-1 text-sm font-medium transition-colors"
                  style={{ color: active ? (personaMode === 'nikhil' ? '#5a5a40' : '#1a1a1a') : '#6e6e5a' }}
                >
                  <span className="flex items-center gap-1">
                    <Icon className="h-3.5 w-3.5 md:hidden" />
                    <span className="hidden md:inline">{item.label}</span>
                  </span>
                  
                  {active && (
                    <motion.div
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-0 h-0.5 w-full"
                      style={{ backgroundColor: personaMode === 'nikhil' ? '#5a5a40' : '#1a1a1a' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          <button
            id="hire-me-cta"
            onClick={() => onViewChange('contact')}
            className={`cursor-pointer rounded-full px-5 py-2 text-xs font-semibold tracking-wide transition-all ${
              personaMode === 'nikhil'
                ? 'bg-[#5a5a40] text-white hover:bg-[#40402d] shadow-sm'
                : 'bg-[#1a1a1a] text-white hover:bg-[#2c2c20] shadow-sm'
            }`}
          >
            Hire Me
          </button>
        </div>
      </div>

      {/* Visual Indicator of mode for mobile view */}
      <div className="flex justify-center border-t border-[#e8e8df]/50 bg-white/90 py-1.5 sm:hidden">
        <span className="flex items-center gap-1.5 text-[10px] font-semibold text-gray-500 tracking-wider uppercase">
          <span className={`h-1.5 w-1.5 rounded-full ${personaMode === 'nikhil' ? 'bg-[#5a5a40]' : 'bg-[#1a1a1a]'}`} />
          {personaMode === 'nikhil' ? 'Nikhil Portfolio Mode' : 'Studio Agency Mode'}
        </span>
      </div>
    </header>
  );
}
