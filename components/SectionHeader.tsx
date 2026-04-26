"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex items-center gap-3 mb-4"
    >
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="h-6 w-1 rounded-full bg-gradient-to-b from-cyan-400 to-sky-500 origin-top"
      />

      <div className="flex flex-col">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-[0.16em] uppercase text-cyan-100">
          {title}
        </h2>

        {subtitle && (
          <p className="text-sm tracking-wide text-cyan-200/70 mt-1">
            {subtitle}
          </p>
        )}
      </div>
    </motion.div>
  );
}
