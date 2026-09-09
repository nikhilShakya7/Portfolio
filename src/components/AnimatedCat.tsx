import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const AnimatedCat = ({ className = "" }: { className?: string }) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [blink, setBlink] = useState(false);
  const [tongue, setTongue] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const box = boxRef.current;
      if (!box) return;
      const rect = box.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const max = 5;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const scale = dist === 0 ? 1 : Math.min(1, max / dist);
      setOffset({ x: dx * scale, y: dy * scale });
    };
    window.addEventListener("mousemove", handleMouseMove);

    const blinkTimer = window.setInterval(() => {
      setBlink(true);
      window.setTimeout(() => setBlink(false), 160);
    }, 3400 + Math.random() * 2000);

    const tongueTimer = window.setInterval(() => {
      setTongue(true);
      window.setTimeout(() => setTongue(false), 1800);
    }, 7000 + Math.random() * 5000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.clearInterval(blinkTimer);
      window.clearInterval(tongueTimer);
    };
  }, []);

  return (
    <div
      ref={boxRef}
      className={`flex items-center justify-center ${className}`}
    >
      <svg viewBox="0 0 240 320" className="h-full w-full max-w-[320px]">
        {/* Left ear */}
        <path d="M72 84 L48 32 L110 58 Z" fill="#1a1a1a" />
        {/* Right ear */}
        <path d="M168 84 L192 32 L130 58 Z" fill="#1a1a1a" />
        {/* Inner ears */}
        <path d="M72 76 L58 50 L96 64 Z" fill="#5a5a40" />
        <path d="M168 76 L182 50 L144 64 Z" fill="#5a5a40" />
        {/* Angular head */}
        <path
          d="M48 32 L110 58 L130 58 L192 32 L174 92 L190 138 L120 172 L50 138 Z"
          fill="#1a1a1a"
        />
        {/* Determined confident brows */}
        <g stroke="#5a5a40" strokeWidth="5" strokeLinecap="round">
          <line x1="62" y1="90" x2="90" y2="98" />
          <line x1="178" y1="90" x2="150" y2="98" />
        </g>
        {/* Eyes */}
        <motion.g
          animate={blink ? { scaleY: 0 } : { scaleY: 1 }}
          transition={{ duration: 0.15 }}
          style={{ transformOrigin: "78px 106px" }}
        >
          <ellipse cx="78" cy="106" rx="11" ry="12" fill="#f5f5f0" />
        </motion.g>
        <motion.g
          animate={blink ? { scaleY: 0 } : { scaleY: 1 }}
          transition={{ duration: 0.15 }}
          style={{ transformOrigin: "162px 106px" }}
        >
          <ellipse cx="162" cy="106" rx="11" ry="12" fill="#f5f5f0" />
        </motion.g>
        {/* Pupils */}
        <circle cx={78 + offset.x} cy={106 + offset.y} r={6} fill="#1a1a1a" />
        <circle cx={162 + offset.x} cy={106 + offset.y} r={6} fill="#1a1a1a" />
        {/* Angular nose */}
        <path d="M112 134 L128 134 L120 146 Z" fill="#d9c9a3" />
        {/* Confident smile */}
        <path
          d="M120 148 C104 156 96 150 96 146 M120 148 C136 156 144 150 144 146 M120 148 L120 158"
          stroke="#d9c9a3"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        {/* Tongue */}
        {tongue && (
          <motion.path
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            style={{ transformBox: "fill-box", transformOrigin: "50% 0%" }}
            d="M111 154 L129 154 C134 154 134 170 129 176 L111 176 C106 170 106 154 111 154 Z"
            fill="#d98d7e"
          />
        )}
        {/* Whiskers */}
        <g stroke="#5a5a40" strokeWidth="2.5" strokeLinecap="round">
          <line x1="56" y1="124" x2="20" y2="118" />
          <line x1="54" y1="134" x2="16" y2="136" />
          <line x1="184" y1="124" x2="220" y2="118" />
          <line x1="186" y1="134" x2="224" y2="136" />
        </g>
        {/* Body */}
        <path d="M52 158 L188 158 L206 268 L34 268 Z" fill="#1a1a1a" />
        {/* Chest detail */}
        <path d="M120 158 L120 258" stroke="#5a5a40" strokeWidth="4" strokeLinecap="round" />
        <path d="M92 168 L92 200 M148 168 L148 200" stroke="#5a5a40" strokeWidth="4" strokeLinecap="round" />
        {/* Paws */}
        <rect x="64" y="266" width="30" height="16" rx="8" fill="#1a1a1a" />
        <rect x="146" y="266" width="30" height="16" rx="8" fill="#1a1a1a" />
        {/* Wagging tail */}
        <motion.g
          style={{ transformBox: "fill-box", transformOrigin: "100% 100%" }}
          animate={{ rotate: [0, 16, -8, 16, 0] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            d="M186 250 C220 252 232 216 214 190 C204 174 196 180 200 192"
            stroke="#1a1a1a"
            strokeWidth="18"
            fill="none"
            strokeLinecap="round"
          />
        </motion.g>
      </svg>
    </div>
  );
};

export default AnimatedCat;