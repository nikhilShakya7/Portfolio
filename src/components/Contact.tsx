import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import AnimatedSection from './AnimatedSection';
import { staggerContainer, staggerItem } from '../utils/animations';
import { Send, CheckCircle, Mail, MapPin, Clock, Phone } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'UI/UX DESIGN',
    budget: '$10k - $20k',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const projectTypes = ['BRANDING', 'UI/UX DESIGN', 'MOTION GRAPHICS', 'FULL-STACK ENGAGEMENT'];
  const budgets = ['$5k - $10k', '$10k - $20k', '$20k - $50k', '$50k+'];

  const contactDetails = [
    { icon: Mail, label: 'GENERAL INQUIRIES', value: 'hello@studio.com', href: 'mailto:hello@studio.com', id: 'inquiry-email-link' },
    { icon: Phone, label: 'DIRECT LINE / WIRED', value: '+39 02 8374 9284' },
    { icon: MapPin, label: 'HEADQUARTERS', value: 'Milan, Italy & Bangalore, India' },
    { icon: Clock, label: 'ACTIVE BUSINESS WORK HOURS', value: 'Mon — Fri, 09:00 — 18:00 CET' },
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg('Please populate all required fields.');
      return;
    }

    setErrorMsg('');
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        projectType: 'UI/UX DESIGN',
        budget: '$10k - $20k',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-24">
      <div id="contact-split-view" className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        
        {/* 1. Left Column: Context Pitch & Details */}
        <AnimatedSection className="lg:col-span-5">
          <span className="font-mono text-xs font-bold tracking-widest text-[#5a5a40] uppercase">
            // COLLABORATION
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-[#1a1a1a] md:text-5xl leading-tight">
            Let's Create <br />
            Something Together.
          </h1>
          <p className="mt-6 text-sm leading-relaxed text-gray-650 md:text-base font-sans">
            Available for select freelance engagements, contract leadership roles, and creative design consultation. Get in touch to schedule a project brief call.
          </p>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="mt-12 space-y-6 border-t border-[#e8e8df] pt-8"
          >
            {contactDetails.map(({ icon: Icon, label, value, href, id }) => (
              <motion.div key={label} variants={staggerItem} className="flex items-start gap-3.5">
                <div className="rounded-2xl bg-[#fbfbf6] p-2.5 border border-[#e8e8df] text-[#5a5a40]">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-stone-500 uppercase tracking-widest">
                    {label}
                  </span>
                  {href ? (
                    <a
                      id={id}
                      href={href}
                      className="text-sm font-semibold text-[#1a1a1a] hover:text-[#5a5a40] transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-sm font-semibold text-[#1a1a1a]">
                      {value}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

        {/* 2. Right Column: Beautiful Interactive Form Layout */}
        <AnimatedSection delay={0.1} className="lg:col-span-7">
          <div className="bg-[#fbfbf6] border border-[#e8e8df] rounded-3xl p-6 sm:p-10 shadow-none">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="contact-form"
                  id="contact-details-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 font-sans">
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 }}
                    >
                      <label id="lbl-name" htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2 font-sans">
                        Your Name <span className="text-[#5a5a40]">*</span>
                      </label>
                      <input
                        type="text"
                        id="input-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alexandra Smith"
                        className="w-full rounded-2xl border border-[#e8e8df] bg-white px-4 py-3 text-sm text-[#1a1a1a] placeholder-gray-400 transition-colors focus:border-[#5a5a40] focus:bg-[#fbfbf6]/20 focus:outline-hidden"
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <label id="lbl-email" htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2 font-sans">
                        Email Address <span className="text-[#5a5a40]">*</span>
                      </label>
                      <input
                        type="email"
                        id="input-email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alexandra@company.com"
                        className="w-full rounded-2xl border border-[#e8e8df] bg-white px-4 py-3 text-sm text-[#1a1a1a] placeholder-gray-400 transition-colors focus:border-[#5a5a40] focus:bg-[#fbfbf6]/20 focus:outline-hidden"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    <label id="lbl-project-type" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-3 font-sans">
                      Project Type
                    </label>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2" id="project-type-options">
                      {projectTypes.map((type) => {
                        const isSelected = formData.projectType === type;
                        return (
                          <motion.button
                            key={type}
                            type="button"
                            whileTap={{ scale: 0.97 }}
                            id={`type-btn-${type.toLowerCase().replace(/\s+/g, '-')}`}
                            onClick={() => setFormData({ ...formData, projectType: type })}
                            className={`rounded-2xl border px-4 py-2.5 text-left text-xs font-medium tracking-wide uppercase transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#5a5a40] border-[#5a5a40] text-white'
                                : 'bg-white border-[#e8e8df] text-stone-500 hover:bg-[#e8e8df]/30 hover:text-[#1a1a1a]'
                            }`}
                          >
                            {type}
                          </motion.button>
                        );
                      })}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label id="lbl-budget" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-3 font-sans">
                      Estimated Budget
                    </label>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4" id="budget-estimate-options">
                      {budgets.map((bgt) => {
                        const isSelected = formData.budget === bgt;
                        return (
                          <motion.button
                            key={bgt}
                            type="button"
                            whileTap={{ scale: 0.97 }}
                            id={`budget-btn-${bgt.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()}`}
                            onClick={() => setFormData({ ...formData, budget: bgt })}
                            className={`rounded-2xl border py-2 text-center text-xs font-semibold transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#5a5a40] border-[#5a5a40] text-white'
                                : 'bg-white border-[#e8e8df] text-stone-500 hover:bg-[#e8e8df]/30'
                            }`}
                          >
                            {bgt}
                          </motion.button>
                        );
                      })}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                  >
                    <label id="lbl-message" htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2 font-sans">
                      Project Brief / Message <span className="text-[#5a5a40]">*</span>
                    </label>
                    <textarea
                      id="input-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about the digital goals, required systems, or creative parameters..."
                      className="w-full rounded-2xl border border-[#e8e8df] bg-white px-4 py-3 text-sm text-[#1a1a1a] placeholder-gray-400 transition-colors focus:border-[#5a5a40] focus:bg-[#fbfbf6]/20 focus:outline-hidden resize-none font-sans"
                    />
                  </motion.div>

                  {errorMsg && (
                    <motion.p
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      id="error-message-text"
                      className="text-xs font-semibold text-[#5a5a40] font-mono"
                    >
                      ⚠️ {errorMsg}
                    </motion.p>
                  )}

                  <motion.button
                    type="submit"
                    id="submit-form-btn"
                    disabled={loading}
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="cursor-pointer w-full flex items-center justify-center gap-2 rounded-full bg-[#5a5a40] hover:bg-[#4a4a35] py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors disabled:bg-stone-300"
                  >
                    {loading ? (
                      'Transmitting brief...'
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        SUBMIT PROJECT INQUIRY
                      </>
                    )}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="submission-success"
                  id="submission-success-notification"
                  initial={{ opacity: 0, scale: 0.92, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="py-16 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
                    className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#5a5a40]/10 text-[#5a5a40]"
                  >
                    <CheckCircle className="h-10 w-10" />
                  </motion.div>
                  <h2 className="font-display text-2xl font-bold text-[#1a1a1a]">
                    Transmission Succeeded!
                  </h2>
                  <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-gray-600 font-sans">
                    Thank you for sharing your project details. We have structured your design parameters and will respond to your registered inbox within 24 business hours.
                  </p>
                  
                  <motion.button
                    type="button"
                    id="reset-submitted-btn"
                    onClick={() => setSubmitted(false)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-8 rounded-full bg-[#1a1a1a] text-[#fbfbf6] px-6 py-2 text-xs font-semibold hover:bg-[#5a5a40] transition-colors cursor-pointer"
                  >
                    Send another message
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
