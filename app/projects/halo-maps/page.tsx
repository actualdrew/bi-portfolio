"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import SciFiLayout from "@/components/SciFiLayout";
import GlassPanel from "@/components/GlassPanel";
import EnergyDivider from "@/components/EnergyDivider";

const fadeUp = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function HaloMapsPage() {
  const [open, setOpen] = useState(false);

  return (
    <SciFiLayout>
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto px-6 pt-28 pb-24"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-6 mb-10">
          <div>
            <div className="text-xs tracking-[0.22em] uppercase text-cyan-200/80 mb-2">
              Halo Maps
            </div>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-[0.12em] text-cyan-100">
              Geospatial Market Intelligence Suite
            </h1>
            <p className="mt-3 text-slate-200/80 max-w-2xl">
              A custom‑built geospatial analytics engine that visualizes population patterns, density signals, and city‑level behavior to reveal opportunity clusters and help leaders understand how a metro area functions.
            </p>

            <div className="mt-6">
              <Link
                href="/projects"
                className="rounded-full border border-cyan-500/30 bg-transparent px-4 py-2 text-xs tracking-[0.18em] uppercase text-slate-200/80 hover:text-cyan-200 transition-colors hover-lift"
              >
                Back to Projects
              </Link>
            </div>
          </div>

          <div className="hidden md:block w-56">
            <GlassPanel className="hover-lift">
              <div className="text-xs tracking-[0.22em] uppercase text-cyan-200/80 mb-2">
                Snapshot
              </div>
              <div className="text-sm text-slate-200/85">
                <strong className="text-cyan-200">Status:</strong> Production
              </div>
              <div className="mt-3 text-sm text-slate-200/80">
                <strong className="text-cyan-200">Stack:</strong> Power BI · Azure Maps · DAX · Next.js
              </div>
            </GlassPanel>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="origin-left mb-10"
        >
          <EnergyDivider />
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Embed */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <GlassPanel className="hover-lift">
              <h2 className="text-xl font-semibold text-cyan-100 mb-4">
                Interactive Power BI Report
              </h2>

              <div
                className="relative w-full max-w-[1600px] mx-auto"
                style={{ paddingTop: "56.25%" }} // 16:9 recommended
              >
                <iframe
                  title="PowerBI Halo Map--Azure"
                  src="https://app.powerbi.com/view?r=eyJrIjoiYzMyNzQwZTYtOGI4YS00ZGI2LTkxMzYtNjUxZGYzMzI0NWJjIiwidCI6ImNhZGZjN2E1LTBlZjUtNDJjZi05MTJjLTNhNzgzNWZiZWY5MCJ9&embedImagePlaceholder=true"
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </GlassPanel>
          </motion.div>

          {/* Sidebar Overview */}
          <motion.aside
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <GlassPanel className="hover-lift">
              <div className="text-xs tracking-[0.22em] uppercase text-cyan-200/80 mb-2">
                Overview
              </div>
              <p className="text-sm text-slate-200/80 leading-relaxed">
                Halo Maps analyze population, density, and city‑level attributes across a metro area to reveal where people live, how communities cluster, and which locations present the strongest opportunities.
              </p>
            </GlassPanel>
          </motion.aside>
        </div>

        {/* CASE STUDY SECTION */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-16"
        >
          <GlassPanel className="hover-lift p-6">
            {/* Header Block */}
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="h-6 w-1 rounded-full bg-gradient-to-b from-cyan-400 to-sky-500 origin-top"
                />
                <h2 className="text-xl font-semibold tracking-[0.16em] uppercase text-cyan-100">
                  Case Study
                </h2>
              </div>

              <div className="text-cyan-300 text-sm tracking-wide">
                {open ? "Hide" : "Show"}
              </div>
            </div>

            {/* Collapsible Content */}
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="mt-6 space-y-6 text-slate-200/85 leading-relaxed"
              >
                <div>
                  <h3 className="text-lg font-semibold text-cyan-200 mb-2">Overview</h3>
                  <p>
                    Halo Map is a geospatial analytics engine built to help leaders understand how a metro area behaves. It unifies population patterns, density signals, and city‑level attributes into a single, map‑driven experience that highlights where people live, how communities cluster, and which locations present the strongest opportunities.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-cyan-200 mb-2">The Problem</h3>
                  <p>
                    Decision‑makers often rely on fragmented demographic reports or static maps that fail to show how a region actually behaves. Halo Maps solve this by translating complex spatial data into clear, actionable insight.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-cyan-200 mb-2">The Solution</h3>
                  <p>
                    Halo Maps transforms raw demographic and geographic data into a decision‑ready geospatial intelligence layer. It highlights population distribution, density extremes, top cities, and opportunity clusters while providing narrative context that explains why patterns exist.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-cyan-200 mb-2">Key Features</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Metro‑area population mapping</li>
                    <li>Density insights and extremes</li>
                    <li>Top‑city rankings</li>
                    <li>Opportunity cluster detection</li>
                    <li>Narrative insight layer</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-cyan-200 mb-2">Impact</h3>
                  <p>
                    Halo Maps enable leaders to identify high‑value trade areas, compare markets with clarity, and make confident, data‑driven decisions using a living, interactive intelligence tool.
                  </p>
                </div>
              </motion.div>
            )}
          </GlassPanel>
        </motion.div>
      </motion.section>
    </SciFiLayout>
  );
}
