"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SciFiLayout from "@/components/SciFiLayout";
import EnergyDivider from "@/components/EnergyDivider";
import GlassPanel from "@/components/GlassPanel";

const sectionFade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  return (
    <SciFiLayout>
      {/* TOP NAV */}
      <header className="w-full px-6 pt-6 pb-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full border border-cyan-500/40 bg-cyan-500/10 flex items-center justify-center text-xs tracking-[0.18em] uppercase text-cyan-200">
              29
            </div>
            <span className="text-sm tracking-[0.22em] uppercase text-slate-200/80">
              Bi Analytics Interface
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-xs tracking-[0.22em] uppercase text-slate-200/70">
            <Link href="/projects" className="hover:text-cyan-300 transition-colors">
              Projects
            </Link>
            <Link href="/about" className="hover:text-cyan-300 transition-colors">
              About
            </Link>
            <a
              href="mailto:andrew@example.com"
              className="rounded-full border border-cyan-500/40 bg-cyan-500/5 px-4 py-1.5 text-cyan-200 hover:border-cyan-300 hover:bg-cyan-500/10 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <EnergyDivider />

      {/* HERO */}
      <section className="w-full px-6 pt-16 pb-20">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-4 py-1 text-xs tracking-[0.2em] uppercase text-cyan-300/80 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Analytics Command Interface
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[0.18em] uppercase mb-4">
              <span className="relative inline-block">
                <span className="relative z-10 glow-text">Bi Portfolio</span>
                <span className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-[1px]" />
              </span>
            </h1>
            <p className="mt-4 text-lg text-slate-200/80 leading-relaxed max-w-xl">
              A collection of production‑ready BI experiences — geospatial engines, executive
              dashboards, and narrative analytics — designed with a high‑end sci‑fi interface and
              engineered for real‑world decision‑making.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em] text-cyan-200/80">
              <span className="rounded-full border border-cyan-500/40 bg-cyan-500/5 px-3 py-1">
                Power BI
              </span>
              <span className="rounded-full border border-cyan-500/40 bg-cyan-500/5 px-3 py-1">
                Azure Maps
              </span>
              <span className="rounded-full border border-cyan-500/40 bg-cyan-500/5 px-3 py-1">
                Data Engineering
              </span>
              <span className="rounded-full border border-cyan-500/40 bg-cyan-500/5 px-3 py-1">
                UX Systems
              </span>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/projects/halo-maps"
                className="rounded-full border border-cyan-500/60 bg-cyan-500/15 px-6 py-2 text-xs tracking-[0.22em] uppercase text-cyan-100 hover:bg-cyan-500/25 transition-colors"
              >
                View “Halo Maps”
              </Link>
              <Link
                href="/projects"
                className="rounded-full border border-slate-500/50 bg-slate-900/60 px-6 py-2 text-xs tracking-[0.22em] uppercase text-slate-200 hover:border-cyan-400/60 hover:text-cyan-100 transition-colors"
              >
                Browse All Projects
            </Link>
            </div>
          </motion.div>

          {/* HERO SIDE PANEL */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="flex-1 w-full"
          >
            <GlassPanel>
              <div className="text-xs tracking-[0.22em] uppercase text-cyan-200/80 mb-4">
                Live System Telemetry
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm text-slate-200/85">
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-[0.18em] mb-1">
                    Projects
                  </div>
                  <div className="text-lg font-semibold text-cyan-100">Bi Experiences</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-[0.18em] mb-1">
                    Focus
                  </div>
                  <div className="text-lg font-semibold text-cyan-100">Geospatial & Exec</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-[0.18em] mb-1">
                    Stack
                  </div>
                  <div className="text-sm text-slate-200/85">
                    Power BI, DAX, Azure, Next.js, Vercel
                  </div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-[0.18em] mb-1">
                    Mode
                  </div>
                  <div className="text-sm text-cyan-200">Production‑oriented, UX‑driven</div>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </div>
      </section>

      <EnergyDivider />

      {/* FEATURED PROJECTS */}
      <motion.section
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full py-16 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="h-6 w-1 rounded-full bg-gradient-to-b from-cyan-400 to-sky-500" />
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-[0.16em] uppercase text-cyan-100">
                Featured Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-xs tracking-[0.22em] uppercase text-slate-300/80 hover:text-cyan-300 transition-colors"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Halo Maps */}
            <Link href="/projects/halo-maps" className="group">
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
                  “Halo Maps” are geospatial analytics dashboards that unify population, density, and
                  metro‑area insights into a single, map‑driven experience with narrative overlays.
                </p>
                <div className="flex flex-wrap gap-2 text-[11px] text-cyan-200/80">
                  <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-2 py-0.5">
                    Power BI
                  </span>
                  <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-2 py-0.5">
                    Azure Maps
                  </span>
                  <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-2 py-0.5">
                    DAX
                  </span>
                </div>
              </GlassPanel>
            </Link>

            {/* Placeholder for future project */}
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
                A high‑signal executive dashboard concept focused on narrative KPIs, anomaly
                detection, and decision‑ready views — designed to feel like a mission control surface.
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
          </div>
        </div>
      </motion.section>

      <EnergyDivider />

      {/* ABOUT BLURB */}
      <motion.section
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full py-16 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <GlassPanel>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-6 w-1 rounded-full bg-gradient-to-b from-cyan-400 to-sky-500" />
              <h2 className="text-xl sm:text-2xl font-semibold tracking-[0.16em] uppercase text-cyan-100">
                About the System
              </h2>
            </div>
            <p className="text-slate-200/85 leading-relaxed text-sm sm:text-base">
              This portfolio is built as a unified analytics interface — a place to explore how
              “Halo Maps” and other BI experiences are designed, engineered, and deployed. The focus
              is on production‑ready patterns: clean data models, robust DAX, thoughtful UX, and
              interfaces that feel as intentional as the insights they deliver.
            </p>
          </GlassPanel>
        </div>
      </motion.section>

      <EnergyDivider />

      {/* FOOTER */}
      <footer className="w-full px-6 pb-10 pt-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="tracking-[0.22em] uppercase">
            Bi Portfolio · High‑End Sci‑Fi Interface
          </div>
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} Andrew</span>
            <span className="h-1 w-1 rounded-full bg-cyan-400 animate-pulse" />
            <span className="tracking-[0.22em] uppercase text-cyan-200/80">
              System Status: Stable
            </span>
          </div>
        </div>
      </footer>
    </SciFiLayout>
  );
}
