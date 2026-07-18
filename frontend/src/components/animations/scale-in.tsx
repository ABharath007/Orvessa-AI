"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface ScaleInProps {
  children: ReactNode;
  delay?: number;
}

export function ScaleIn({
  children,
  delay = 0,
}: ScaleInProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.4,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}