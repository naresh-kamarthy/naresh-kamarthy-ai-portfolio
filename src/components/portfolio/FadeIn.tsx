import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  stagger?: boolean;
}

const FadeIn = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 40,
  duration = 0.5,
  stagger = false
}: FadeInProps) => {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: { x: 0, y: 0 }
  };

  const initial = {
    opacity: 0,
    ...directions[direction]
  };

  const variants = stagger ? {
    hidden: initial,
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98] as any,
        staggerChildren: 0.1
      }
    }
  } : null;

  return (
    <motion.div
      initial={stagger ? "hidden" : initial}
      whileInView={stagger ? "visible" : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
      transition={stagger ? undefined : {
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98] as any
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
