"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { ReactNode } from "react";

interface FadeInViewProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  threshold?: number;
}

export function FadeInView({
  children,
  className = "",
  variants,
  delay = 0,
  threshold = 0.1,
}: FadeInViewProps) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold });

  const defaultVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants || defaultVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}
