import { Experience } from '../types';
import { motion } from 'motion/react';
import AnimatedSection from './AnimatedSection';
import { staggerContainer, staggerItem } from '../utils/animations';
import { Milestone, Cpu, DraftingCompass, Activity, ArrowRight, Github, Twitter, Linkedin } from 'lucide-react';

interface AboutProps {
  experiences: Experience[];
  portraitImage: string;
}

export default function About({ experiences, portraitImage }: AboutProps) {
  const expertises = [
    {
      id: 'exp-systems',
      title: 'Interactive Systems',
      description: 'Building custom interactive frameworks, highly responsive web dashboards, and web canvases designed to perform under demanding conditions.',
      icon: Cpu
    },
    {
      id: 'exp-ds',
      title: 'Design Systems',
      description: 'Engineering rigid, token-driven web components, layout grids, and visual guidelines scaled across multi-channel environments.',
      icon: DraftingCompass
    },
    {
      id: 'exp-kinetic',
      title: 'Kinetic Graphics',
      description: 'Specifying clean, user-centric screen transitions, fluid hover states, and canvas renderings using industry-standard easings.',
      icon: Activity
    }
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-24">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-20">
        {/* 1. Left Content Column */}
        <AnimatedSection className="lg:col-span-7">
          <span className="font-mono text-xs font-bold tracking-widest text-[#5a5a40] uppercase">
            // PROFILE
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-[#1a1a1a] md:text-6xl">
            The Story So Far.
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 space-y-6 text-base leading-relaxed text-gray-600 md:text-lg font-sans"
          >
            <p className="font-medium text-[#1a1a1a]">
              I am an independent interaction designer and creative director based in Milan, working with cultural institutions and forward-thinking brands globally.
            </p>
            <p>
              Over the last decade, I've developed digital systems, interactive installations, and brand identities that bridge physical spaces and virtual mediums. My work is anchored in meticulous grid structures, clear typographic hierarchy, and subtle transitions.
            </p>
            <p>
              I believe software interfaces must feel highly satisfying and immediate, which is why I merge rigorous engineering and elegant typography styling to deliver tailored aesthetic systems.
            </p>
          </motion.div>

          {/* 2. Interactive Resume Activity Timeline */}
          <div className="mt-16">
            <div className="mb-8 flex items-center gap-2 border-b border-[#e8e8df] pb-4">
              <Milestone className="h-5 w-5 text-[#5a5a40]" />
              <h2 className="font-display text-xl font-bold text-[#1a1a1a]">
                Professional Milestones
              </h2>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-40px" }}
              className="relative space-y-8 pl-6 before:absolute before:top-2 before:left-2 before:h-[calc(100%-16px)] before:w-0.5 before:bg-[#e8e8df]"
            >
              {experiences.map((exp) => (
                <motion.div
                  key={exp.id}
                  variants={staggerItem}
                  id={`timeline-${exp.id}`}
                  className="group relative"
                >
                  <div className="absolute -left-[22px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[#f5f5f0] bg-stone-300 transition-all duration-300 group-hover:bg-[#5a5a40] group-hover:scale-110" />
                  
                  <span className="font-mono text-xs text-[#5a5a40] font-semibold">
                    {exp.period}
                  </span>
                  <h3 className="mt-1 font-display text-base font-bold text-[#1a1a1a]">
                    {exp.role}{' '}
                    <span className="font-sans font-medium text-gray-400">
                      @ {exp.company}
                    </span>
                  </h3>
                  <p className="mt-2 text-xs text-gray-600 leading-relaxed md:text-sm">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>

        {/* 3. Right Portrait Frame & Details */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 lg:sticky lg:top-28"
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-3xl overflow-hidden bg-[#fbfbf6] shadow-[0_8px_35px_rgba(0,0,0,0.01)] border border-[#e8e8df] p-4"
          >
            <span className="absolute top-8 right-8 z-10 rounded-lg bg-[#1a1a1a]/95 px-2.5 py-1 text-[9px] font-mono tracking-widest text-white uppercase">
              STUDIO PORTRAIT
            </span>
            <img
              src={portraitImage}
              alt="Designer Portrait"
              referrerPolicy="no-referrer"
              className="w-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 aspect-[4/5]"
            />
            
            <div className="mt-4 border-t border-[#e8e8df] pt-4 grid grid-cols-2 font-mono text-[10px] text-gray-450">
              <div>
                <span>ROLE</span>
                <span className="block mt-0.5 text-[#1a1a1a] font-bold">PRINCIPAL CREATIVE</span>
              </div>
              <div className="text-right">
                <span>REPRESENTATION</span>
                <span className="block mt-0.5 text-[#1a1a1a] font-bold">MILAN / MILANO</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="mt-8 flex justify-center gap-6"
          >
            {[
              { id: 'twitter-link', href: 'https://twitter.com', icon: Twitter, label: 'Twitter', color: 'text-[#1da1f2]' },
              { id: 'linkedin-link', href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn', color: 'text-[#0a66c2]' },
              { id: 'github-link', href: 'https://github.com', icon: Github, label: 'GitHub', color: 'text-black' },
            ].map(({ id, href, icon: Icon, label, color }) => (
              <motion.a
                key={id}
                variants={staggerItem}
                id={id}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2 }}
                className="flex items-center gap-1.5 rounded-full border border-[#e8e8df] bg-[#fbfbf6] px-4 py-2 text-xs font-semibold text-stone-600 hover:text-[#1a1a1a] hover:border-[#5a5a40]/30 transition-colors cursor-pointer"
              >
                <Icon className={`h-3.5 w-3.5 ${color}`} />
                {label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* 4. Core Expertises Bento Grid */}
      <AnimatedSection delay={0.05} className="mt-24 border-t border-[#e8e8df] pt-16">
        <div className="mb-10 text-center max-w-xl mx-auto">
          <span className="font-mono text-xs font-bold tracking-widest text-[#5a5a40] uppercase">
            // SPECIALIZATION
          </span>
          <h2 className="mt-2 font-display text-2xl font-bold text-[#1a1a1a] md:text-3xl">
            Core Expertise
          </h2>
          <p className="mt-3 text-xs text-gray-500">
            A precise division of creative and structural domains engineered to deliver unmatched visual consistency.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          id="expertise-cards-grid"
        >
          {expertises.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={staggerItem}
                whileHover={{ y: -6, scale: 1.01 }}
                id={item.id}
                className="group rounded-3xl border border-[#e8e8df]/70 bg-[#fbfbf6] p-8 hover:shadow-[0_8px_30px_rgba(0,0,0,0.01)] hover:border-[#5a5a40]/30 flex flex-col justify-between transition-shadow"
              >
                <div>
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-[#e8e8df] text-[#5a5a40] transition-colors group-hover:bg-[#5a5a40] group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#1a1a1a]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs text-gray-600 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
                
                <div className="mt-8 flex items-center gap-1 text-[10px] font-mono text-[#5a5a40] uppercase tracking-wider font-semibold opacity-60 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatedSection>
    </div>
  );
}
