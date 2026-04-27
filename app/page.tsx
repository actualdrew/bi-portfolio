"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SciFiLayout from "@/components/SciFiLayout";
import EnergyDivider from "@/components/EnergyDivider";
import GlassPanel from "@/components/GlassPanel";

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const staggerParent = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20, filter: "blur(3px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function HomePage() {
  return (
    <SciFiLayout>

      {/* HERO */}
      <section className="w-full px-6 pt-16 pb-20 relative">
        {/* Ambient glow */}
        <motion.div
          animate={{ opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute inset-0 bg-cyan-500/10 blur-3xl pointer-events-none"
        />

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">

          {/* HERO LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-4 py-1 text-xs tracking-[0.2em] uppercase text-cyan-300/80 mb-6"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ x: 3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[0.18em] uppercase mb-4 glow-text"
            >
              BI Portfolio
            </motion.h1>

            <p className="mt-4 text-lg text-slate-200/80 leading-relaxed max-w-xl">
              This portfolio is a fully custom, self‑built platform designed to show how I approach analytics with a product mindset. Every page reflects the full lifecycle — defining the problem, engineering the data foundation, designing the experience, and delivering polished solutions that drive decisions.
            </p>

            {/* SKILL TAGS */}
            <motion.div
              variants={staggerParent}
              initial="hidden"
              animate="visible"
              className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em] text-cyan-200/80"
            >
              {["Power BI", "Azure Maps", "Data Engineering", "UX Systems"].map((tag) => (
                <motion.span
                  key={tag}
                  variants={staggerItem}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-full border border-cyan-500/40 bg-cyan-500/5 px-3 py-1 hover:shadow-[0_0_12px_rgba(0,255,255,0.35)] transition-shadow"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA BUTTONS */}
            <div className="mt-10 flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.04, x: 2 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/projects/halo-maps"
                  className="rounded-full border border-cyan-500/60 bg-cyan-500/15 px-6 py-2 text-xs tracking-[0.22em] uppercase text-cyan-100 hover:bg-cyan-500/25 transition-colors"
                >
                  View “Halo Maps”
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.04, x: 2 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/projects"
                  className="rounded-full border border-slate-500/50 bg-slate-900/60 px-6 py-2 text-xs tracking-[0.22em] uppercase text-slate-200 hover:border-cyan-400/60 hover:text-cyan-100 transition-colors"
                >
                  Browse All Projects
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* HERO SIDE PANEL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="flex-1 w-full"
          >
            <GlassPanel className="hover:shadow-[0_0_20px_rgba(0,255,255,0.25)] transition-shadow">
              <div className="text-xs tracking-[0.22em] uppercase text-cyan-200/80 mb-4">
                Live System Telemetry
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm text-slate-200/85">
                {[
                  ["Portfolio Scope", "Analytical Products · UI/UX Design · Technical Capabilities · Background"],
                  ["Core Strengths", "Geospatial Analytics · Executive Reporting · Problem Solving"],
                  ["Technical Foundation", "Fabric · DAX · Azure · Next.js · SQL"],
                  ["Delivery Philosophy", "Product‑minded · UX‑driven"],
                ].map(([label, value]) => (
                  <motion.div
                    key={label}
                    whileHover={{ x: 2 }}
                    transition={{ type: "spring", stiffness: 250, damping: 18 }}
                  >
                    <div className="text-xs text-slate-400 uppercase tracking-[0.18em] mb-1">
                      {label}
                    </div>
                    <div className="text-sm text-cyan-100">{value}</div>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="origin-left"
      >
        <EnergyDivider />
      </motion.div>

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full py-16 px-6"
      >
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="h-6 w-1 rounded-full bg-gradient-to-b from-cyan-400 to-sky-500 origin-top"
              />
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-[0.16em] uppercase text-cyan-100">
                Featured Projects
              </h2>
            </div>

            <motion.div whileHover={{ scale: 1.05, x: 2 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/projects"
                className="text-xs tracking-[0.22em] uppercase text-slate-300/80 hover:text-cyan-300 transition-colors"
              >
                View All
              </Link>
            </motion.div>
          </div>

          {/* Project Grid */}
          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Halo Maps */}
            <motion.div variants={staggerItem}>
              <Link href="/projects/halo-maps" className="group">
                <motion.div
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                    boxShadow: "0 0 25px rgba(0,255,255,0.25)",
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                  <GlassPanel>
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-xs tracking-[0.22em] uppercase text-cyan-200/80">
                        “Halo Maps”
                      </div>
                      <div className="text-[10px] tracking-[0.22em] uppercase text-slate-400">
                        Geospatial Engine
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-cyan-100 mb-2">
                      Geospatial Market Intelligence Suite
                    </h3>

                    <p className="text-sm text-slate-200/80 leading-relaxed mb-4">
                      Halo Maps is a geospatial intelligence report built to unify population, density, and metro‑area signals into a single, decision‑ready experience with narrative overlays.
                    </p>

                    <div className="flex flex-wrap gap-2 text-[11px] text-cyan-200/80">
                      {["Power BI", "Azure Maps", "DAX"].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-2 py-0.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </GlassPanel>
                </motion.div>
              </Link>
            </motion.div>

            {/* Coming Soon */}
            <motion.div variants={staggerItem}>
              <motion.div
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  boxShadow: "0 0 25px rgba(0,255,255,0.25)",
                }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                <GlassPanel>
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-xs tracking-[0.22em] uppercase text-slate-300/80">
                      Coming Soon
                    </div>
                    <div className="text-[10px] tracking-[0.22em] uppercase text-slate-500">
                      Executive Analytics
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-cyan-100 mb-2">
                    Executive Performance Command Center
                  </h3>

                  <p className="text-sm text-slate-200/80 leading-relaxed mb-4">
                    A high‑signal executive dashboard concept focused on narrative KPIs, anomaly detection, and decision‑ready views — designed to feel like a mission control surface.
                  </p>

                  <div className="flex flex-wrap gap-2 text-[11px] text-cyan-200/80">
                    <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-2 py-0.5">
                      Power BI
                    </span>
                    <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-2 py-0.5">
                      Narrative KPIs
                    </span>
                  </div>
                </GlassPanel>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* ABOUT SECTION */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="origin-left"
      >
        <EnergyDivider />
      </motion.div>

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full py-16 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <GlassPanel className="hover:shadow-[0_0_20px_rgba(0,255,255,0.25)] transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="h-6 w-1 rounded-full bg-gradient-to-b from-cyan-400 to-sky-500 origin-top"
              />
              <h2 className="text-xl sm:text-2xl font-semibold tracking-[0.16em] uppercase text-cyan-100">
                About the System
              </h2>
            </div>

            <p className="text-slate-200/85 leading-relaxed text-sm sm:text-base">
              This site is a custom, self‑built system created to demonstrate how I design and deliver analytical products end‑to‑end. Rather than showcasing isolated dashboards, the portfolio highlights the reasoning, structure, and user‑experience decisions behind each solution — giving leaders a clear view of how I build tools that drive real business impact.
            </p>
          </GlassPanel>
        </div>
      </motion.section>

            {/* FOOTER */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full px-6 pb-10 pt-6"
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="tracking-[0.22em] uppercase">
            Custom‑Built BI Portfolio
          </div>

          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} Andrew</span>
            <span className="h-1 w-1 rounded-full bg-cyan-400 animate-pulse" />
            <span className="tracking-[0.22em] uppercase text-cyan-200/80">
              System Status: Stable
            </span>
          </div>
        </div>
      </motion.footer>
    </SciFiLayout>
  );
}
