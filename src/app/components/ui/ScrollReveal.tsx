"use client";

import { motion } from "framer-motion";
import { fadeUpVariant } from "../../lib/animations";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  width?: "fit-content" | "100%";
}

export const ScrollReveal = ({ children, className = "", delay = 0, width = "100%" }: ScrollRevealProps) => {
  return (
    <motion.div
      variants={{
        hidden: fadeUpVariant.hidden,
        visible: {
          ...fadeUpVariant.visible,
          transition: {
            ...fadeUpVariant.visible.transition,
            delay: delay
          }
        }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};
