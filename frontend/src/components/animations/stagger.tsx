"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface StaggerProps {
  children: ReactNode;
}

export function Stagger({
  children,
}: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}