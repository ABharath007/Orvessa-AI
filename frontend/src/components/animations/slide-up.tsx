"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface SlideUpProps {
  children: ReactNode;
  delay?: number;
}

export function SlideUp({
  children,
  delay = 0,
}: SlideUpProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}