import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { SiGhostery } from "react-icons/si";
const GHOST_OFFSET = 18;

const GhostCursor = () => {
  const [mouse, setMouse] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: e.clientX + GHOST_OFFSET,
        y: e.clientY + GHOST_OFFSET,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999]"
      animate={{ x: mouse.x, y: mouse.y }}
      transition={{ type: "spring", stiffness: 120, damping: 14, mass: 0.3 }}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="relative flex h-10 w-10 items-center justify-center"
      >
        <motion.div
          animate={{
            opacity: [0.55, 0.9, 0.55],
            scale: [1, 1.25, 1],
            rotate: [0, 12, -8, 0],
          }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute h-8 w-11 bg-[#d9c9a3]/60 blur-lg"
          style={{ borderRadius: "58% 42% 55% 45% / 45% 55% 45% 55%" }}
        />
        <SiGhostery
          size={30}
          className="relative text-[#1a1a1a] drop-shadow-[0_0_2px_rgba(255,255,255,0.9)]"
        />
      </motion.div>
    </motion.div>
  );
};

export default GhostCursor;
