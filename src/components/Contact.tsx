import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import AnimatedSection from "./AnimatedSection";
import { Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const socialLinks = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nikhil-shakya-00250b290/",
      id: "social-linkedin",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/s._.nikk/",
      id: "social-twitter",
    },
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg("Please populate all required fields.");
      return;
    }

    setErrorMsg("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-24 selection:bg-[#5a5a40]/10 selection:text-[#5a5a40]">
      <div
        id="contact-split-view"
        className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24 items-start"
      >
        {/* 1. Left Column: Text Pitch */}
        <AnimatedSection className="lg:col-span-5 lg:sticky lg:top-24">
          <h1 className="font-display text-4xl font-light tracking-tight text-[#1a1a1a] md:text-6xl leading-[1.1]">
            Let's Create <br />
            <span className="font-serif italic font-normal text-[#5a5a40]">
              something together
            </span>
          </h1>

          <p className="mt-6 text-sm leading-relaxed text-stone-600 md:text-base font-sans max-w-md">
            Available for select freelance engagements, contract leadership
            roles, and creative design consultation. Get in touch to schedule a
            project brief call.
          </p>
        </AnimatedSection>

        {/* 2. Right Column: Beautiful Interactive Form Layout */}
        <AnimatedSection delay={0.1} className="lg:col-span-7 h-full">
          <div className="bg-white border border-[#e8e8df] rounded-2xl p-8 sm:p-12 shadow-xs relative overflow-hidden">
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
                  className="space-y-10"
                >
                  <div className="space-y-10 font-sans">
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 }}
                      className="relative group"
                    >
                      <label
                        id="lbl-name"
                        htmlFor="name"
                        className="block text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1 transition-colors group-focus-within:text-[#1a1a1a]"
                      >
                        NAME
                      </label>
                      <input
                        type="text"
                        id="input-name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Your full name"
                        className="w-full border-b border-[#e8e8df] bg-transparent py-3 text-sm text-[#1a1a1a] placeholder-stone-300 transition-all focus:border-[#1a1a1a] focus:outline-hidden"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="relative group"
                    >
                      <label
                        id="lbl-email"
                        htmlFor="email"
                        className="block text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1 transition-colors group-focus-within:text-[#1a1a1a]"
                      >
                        EMAIL
                      </label>
                      <input
                        type="email"
                        id="input-email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="your@email.com"
                        className="w-full border-b border-[#e8e8df] bg-transparent py-3 text-sm text-[#1a1a1a] placeholder-stone-300 transition-all focus:border-[#1a1a1a] focus:outline-hidden"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="relative group"
                  >
                    <label
                      id="lbl-message"
                      htmlFor="message"
                      className="block text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1 transition-colors group-focus-within:text-[#1a1a1a]"
                    >
                      MESSAGE
                    </label>
                    <textarea
                      id="input-message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell me about your project, goals, and timeline..."
                      className="w-full border-b border-[#e8e8df] bg-transparent py-3 text-sm text-[#1a1a1a] placeholder-stone-300 transition-all focus:border-[#1a1a1a] focus:outline-hidden resize-none font-sans leading-relaxed"
                    />
                  </motion.div>

                  {errorMsg && (
                    <motion.p
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      id="error-message-text"
                      className="text-xs font-semibold text-[#5a5a40] font-mono flex items-center gap-1.5"
                    >
                      <span>⚠️</span> {errorMsg}
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
                    transition={{ delay: 0.2 }}
                    className="cursor-pointer flex items-center justify-center gap-2.5 rounded bg-[#1a1a1a] hover:bg-[#1a1a1a]/90 px-12 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 disabled:bg-stone-300"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-4 w-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        TRANSMITTING BRIEF...
                      </span>
                    ) : (
                      <>
                        SEND MESSAGE
                        <Send className="h-3.5 w-3.5" />
                      </>
                    )}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="submission-success"
                  id="submission-success-notification"
                  initial={{ opacity: 0, scale: 0.95, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="py-20 text-center flex flex-col items-center justify-center h-full min-h-[450px]"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 0.1,
                    }}
                    className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#5a5a40]/10 text-[#5a5a40]"
                  >
                    <CheckCircle className="h-10 w-10" />
                  </motion.div>

                  <h2 className="font-display text-3xl font-light text-[#1a1a1a] tracking-tight">
                    Transmission{" "}
                    <span className="font-serif italic text-[#5a5a40]">
                      Succeeded
                    </span>
                  </h2>

                  <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-stone-500 font-sans">
                    Thank you for sharing your project details. We have
                    structured your design parameters and will respond to your
                    registered inbox within 24 business hours.
                  </p>

                  <motion.button
                    type="button"
                    id="reset-submitted-btn"
                    onClick={() => setSubmitted(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-10 rounded-full bg-[#1a1a1a] text-white px-8 py-3 text-xs font-bold tracking-widest uppercase hover:bg-[#5a5a40] transition-colors cursor-pointer shadow-sm"
                  >
                    Send another message
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </AnimatedSection>
      </div>

      {/* Footer Contact Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-24 pt-12 border-t border-[#e8e8df]">
        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-2">
            DIRECT CONTACT
          </h4>
          <a
            href="mailto:shakyanikhil2003@gmail.com"
            className="text-sm text-[#1a1a1a] hover:text-[#5a5a40] transition-colors pb-0.5 border-b border-[#1a1a1a]"
          >
            shakyanikhil2003@gmail.com
          </a>
        </div>
        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-2">
            SOCIAL CHANNELS
          </h4>
          <div className="flex gap-6">
            {socialLinks.map(({ label, href, id }) => (
              <a
                key={label}
                id={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#1a1a1a] hover:text-[#5a5a40] transition-colors flex items-center gap-1.5"
              >
                {label} <span className="text-[10px]">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
