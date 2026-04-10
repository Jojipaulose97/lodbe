"use client";

import { motion, Variants } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  width?: "fit-content" | "100%";
}

export const ScrollReveal = ({ children, className = "", delay = 0, width = "100%" }: ScrollRevealProps) => {
    const localVariant: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 20, mass: 1, delay }
        }
    };

  return (
    <motion.div
      variants={localVariant}
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
