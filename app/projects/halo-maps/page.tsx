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
  const [techOpen, setTechOpen] = useState(false);

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
              A custom‑built geospatial analytics engine that visualizes population patterns,
              density signals, and city‑level behavior to help leaders understand how a metro
              area functions.
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

          {/* Embed */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col h-full"
          >
            <GlassPanel className="hover-lift flex flex-col h-full">
              <h2 className="text-xl font-semibold text-cyan-100 mb-4">
                Interactive Power BI Report
              </h2>

              <div className="relative w-full flex-1 min-h-[480px]">
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

          {/* Sidebar */}
          <motion.aside
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Overview */}
            <GlassPanel className="hover-lift">
              <div className="text-xs tracking-[0.22em] uppercase text-cyan-200/80 mb-2">
                Overview
              </div>
              <p className="text-sm text-slate-200/80 leading-relaxed">
                Halo Maps analyzes population, density, and city‑level attributes across a
                metro area to reveal where people live, how communities cluster, and which
                locations present the strongest opportunities.
              </p>
            </GlassPanel>

            {/* SimpleMaps Data Badge */}
            <a
              href="https://simplemaps.com/data/us-cities"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 20px rgba(0,255,255,0.2)",
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="rounded-xl border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm px-4 py-3 flex items-center justify-between gap-3 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-colors duration-300"
              >
                <div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-cyan-200/60 mb-0.5">
                    Data Source
                  </div>
                  <div className="text-sm font-medium text-cyan-100">
                    simplemaps.com/data/us-cities
                  </div>
                </div>
                <svg
                  className="w-4 h-4 text-cyan-400/70 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </motion.div>
            </a>

            {/* HOW TO USE */}
            <GlassPanel className="hover-lift">
              <div className="text-xs tracking-[0.22em] uppercase text-cyan-200/80 mb-2">
                How to Use
              </div>
              <ul className="text-sm text-slate-200/80 leading-relaxed space-y-3">
                <li>
                  <strong className="text-cyan-200">1. Choose a Mode:</strong>{" "}
                  Select Coordinate, Metro, or City/State mode to define how the map interprets your input.
                </li>
                <li>
                  <strong className="text-cyan-200">2. Enter or Select a Location:</strong>{" "}
                  Use the slicers to enter coordinates or choose a metro/city.
                </li>
                <li>
                  <strong className="text-cyan-200">3. Explore the Map:</strong>{" "}
                  Azure Maps updates instantly based on your selection.
                </li>
                <li>
                  <strong className="text-cyan-200">4. Read the Narrative:</strong>{" "}
                  The narrative panel explains what your selection means.
                </li>
                <li>
                  <strong className="text-cyan-200">5. Compare Areas:</strong>{" "}
                  Switch modes or locations to evaluate different geographies.
                </li>
              </ul>
            </GlassPanel>
          </motion.aside>
        </div>

        {/* CASE STUDY */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-16"
        >
          <GlassPanel className="hover-lift p-6">
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
                    Halo Map is a geospatial analytics engine built to help leaders understand
                    how a metro area behaves. It unifies population patterns, density signals,
                    and city‑level attributes into a single, map‑driven experience that
                    highlights where people live, how communities cluster, and which locations
                    present the strongest opportunities.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-cyan-200 mb-2">The Problem</h3>
                  <p>
                    Decision‑makers often rely on fragmented demographic reports or static maps
                    that fail to show how a region actually behaves. Halo Maps solve this by
                    translating complex spatial data into clear, actionable insight.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-cyan-200 mb-2">The Solution</h3>
                  <p>
                    Halo Maps transforms raw demographic and geographic data into a
                    decision‑ready geospatial intelligence layer. It highlights population
                    distribution, density extremes, top cities, and opportunity clusters while
                    providing narrative context that explains why patterns exist.
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
                    Halo Maps enables leaders to identify high‑value trade areas, compare
                    markets with clarity, and make confident, data‑driven decisions using a
                    living, interactive intelligence tool.
                  </p>
                </div>
              </motion.div>
            )}
          </GlassPanel>
        </motion.div>

        {/* TECHNICAL OVERVIEW */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <GlassPanel className="hover-lift p-6">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setTechOpen(!techOpen)}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="h-6 w-1 rounded-full bg-gradient-to-b from-cyan-400 to-sky-500 origin-top"
                />
                <h2 className="text-xl font-semibold tracking-[0.16em] uppercase text-cyan-100">
                  Technical Overview
                </h2>
              </div>
              <div className="text-cyan-300 text-sm tracking-wide">
                {techOpen ? "Hide" : "Show"}
              </div>
            </div>

            {techOpen && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="mt-6 space-y-6 text-slate-200/85 leading-relaxed"
              >
                <div>
                  <h3 className="text-lg font-semibold text-cyan-200 mb-2">Mode Switching</h3>
                  <p>
                    The report supports three analytical modes — Coordinate Mode, Metro Mode, and
                    City/State Mode. These modes are switched using Power BI bookmarks, which
                    control which slicers are visible and which inputs are active. The underlying
                    data model remains constant; only the UI state changes.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-cyan-200 mb-2">Slicers & Inputs</h3>
                  <p>
                    Each mode exposes a different set of slicers: latitude/longitude inputs in
                    Coordinate Mode, a metro selector in Metro Mode, and city/state selectors in
                    City/State Mode. These inputs determine the selected point used throughout
                    the report for distance calculations, filtering, and narrative generation.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-cyan-200 mb-2">Spatial Calculations</h3>
                  <p>
                    Distance between the selected point and each location in the SimpleMaps
                    dataset is computed using a DAX implementation of the haversine formula.
                    This measure drives nearest‑location ranking, distance‑based filtering, and
                    dynamic text updates.
                  </p>

                  <pre className="bg-[#0a0f1a] border border-cyan-500/20 rounded-md p-3 text-[11px] overflow-x-auto text-cyan-200 mt-3">
{`Distance =
VAR Lat1 = [Selected Latitude]
VAR Lon1 = [Selected Longitude]
VAR Lat2 = MAX(SimpleMaps[lat])
VAR Lon2 = MAX(SimpleMaps[lng])
VAR EarthRadius = 3959

VAR dLat = RADIANS(Lat2 - Lat1)
VAR dLon = RADIANS(Lon2 - Lon1)

VAR a =
    SIN(dLat / 2) * SIN(dLat / 2) +
    COS(RADIANS(Lat1)) * COS(RADIANS(Lat2)) *
    SIN(dLon / 2) * SIN(dLon / 2)

VAR c = 2 * ATAN( SQRT(a) / SQRT(1 - a) )

RETURN EarthRadius * c`}
                  </pre>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-cyan-200 mb-2">Auto‑Populating Metrics</h3>
                  <p>
                    All numeric and textual outputs are generated through DAX measures that
                    reference the active mode and selected point. These measures populate metro
                    labels, city/state identifiers, nearest‑location names, distance summaries,
                    and other context‑aware values.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-cyan-200 mb-2">Narrative Insights</h3>
                  <p>
                    Narrative insights are produced through structured DAX expressions that
                    synthesize the active mode, selected geography, and computed distances. The
                    narrative panel updates automatically when the mode changes or a new point
                    is selected.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-cyan-200 mb-2">Embedded Deployment</h3>
                  <p>
                    The report is embedded into the Next.js portfolio using a chromeless Power BI
                    iframe wrapped in a responsive container, allowing it to appear as a native
                    part of the site while maintaining full interactivity.
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
