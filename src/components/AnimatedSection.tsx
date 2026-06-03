import { motion, type HTMLMotionProps } from "motion/react";
import { EASE_OUT } from "../utils/animations";

interface AnimatedSectionProps extends HTMLMotionProps<"div"> {
  delay?: number;
}

export default function AnimatedSection({
  children,
  delay = 0,
  className,
  ...props
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: EASE_OUT, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
