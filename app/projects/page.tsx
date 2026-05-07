"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SciFiLayout from "@/components/SciFiLayout";
import GlassPanel from "@/components/GlassPanel";

const fadeUp = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const staggerParent = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const projects = [
  {
    href: "/projects/halo-maps",
    label: '"Halo Maps"',
    title: "Geospatial Market Intelligence Suite",
    description:
      "A map-driven analytics engine that unifies population, density, and metro-area signals into a single, decision-ready experience.",
  },
  {
    href: "/projects/rrc-dashboard",
    label: '"RRC Dashboard"',
    title: "Texas Oil & Gas Intelligence",
    description:
      "A full-stack upstream analytics suite built from raw Texas Railroad Commission data — production, wells, permits, and operator performance across 30+ years of Texas drilling history.",
  },
];

export default function ProjectsPage() {
  return (
    <SciFiLayout>
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full px-6 pt-28 pb-24"
      >
        <div className="max-w-6xl mx-auto">

          {/* HEADER BLOCK */}
          <div className="flex items-center gap-3 mb-6">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="h-6 w-1 rounded-full bg-gradient-to-b from-cyan-400 to-sky-500 origin-top"
            />
            <h1 className="text-3xl font-semibold tracking-[0.16em] uppercase text-cyan-100">
              Projects
            </h1>
          </div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-300/80 max-w-2xl mb-10"
          >
            A collection of analytical products designed and built end-to-end — each one
            focused on clarity, structure, and decision-ready insight.
          </motion.p>

          {/* PROJECT GRID */}
          <motion.div
            variants={staggerParent}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project) => (
              <motion.div key={project.href} variants={staggerItem} className="h-full">
                <Link href={project.href} className="block h-full">
                  <motion.div
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 0 35px rgba(0,255,255,0.45)",
                    }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="h-full rounded-xl border border-cyan-400/20 bg-white/5 backdrop-blur-sm p-6 hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-colors duration-300"
                  >
                    <div className="text-xs tracking-[0.22em] uppercase text-cyan-200/80 mb-2">
                      {project.label}
                    </div>
                    <h3 className="text-lg font-semibold text-cyan-100 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-200/80 leading-relaxed">
                      {project.description}
                    </p>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </motion.section>
    </SciFiLayout>
  );
}
