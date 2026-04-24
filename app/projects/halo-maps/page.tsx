"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SciFiLayout from "@/components/SciFiLayout";
import GlassPanel from "@/components/GlassPanel";
import EnergyDivider from "@/components/EnergyDivider";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function HaloMapsPage() {
  return (
    <SciFiLayout>
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-24">
        {/* Header */}
        <motion.header
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-start justify-between gap-6">
            <div>
              <div className="text-xs tracking-[0.22em] uppercase text-cyan-200/80 mb-2">
                Halo Maps
              </div>
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-[0.12em] text-cyan-100">
                Geospatial Market Intelligence Suite
              </h1>
              <p className="mt-3 text-slate-200/80 max-w-2xl">
                Map-driven analytics that unify population, density, and metro‑area insights into a
                single narrative experience. Designed for analysts and decision makers who need
                spatial context, signal clarity, and production‑grade performance.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="rounded-full border border-cyan-500/30 bg-transparent px-4 py-2 text-xs tracking-[0.18em] uppercase text-slate-200/80 hover:text-cyan-200 transition-colors"
                >
                  Back to Projects
                </Link>
                <a
                  href="mailto:andrew@example.com"
                  className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-xs tracking-[0.18em] uppercase text-cyan-200 hover:bg-cyan-500/20 transition-colors"
                >
                  Request Demo
                </a>
              </div>
            </div>

            <div className="shrink-0 hidden md:block w-56">
              <GlassPanel>
                <div className="text-xs tracking-[0.22em] uppercase text-cyan-200/80 mb-2">
                  Snapshot
                </div>
                <div className="text-sm text-slate-200/85">
                  **Status:** <span className="text-cyan-200">Production</span>
                </div>
                <div className="mt-3 text-sm text-slate-200/80">
                  **Stack:** Power BI; Azure Maps; DAX; Next.js
                </div>
                <div className="mt-4 text-[11px] text-slate-400 uppercase">Telemetry</div>
                <div className="mt-2 text-sm text-cyan-200">Live map tiling · Narrative overlays</div>
              </GlassPanel>
            </div>
          </div>
        </motion.header>

        <EnergyDivider />

        {/* Main content */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map / Visual */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <GlassPanel>
              <div className="h-[420px] rounded-lg overflow-hidden border border-cyan-500/10 bg-gradient-to-b from-slate-900/60 to-slate-900/40 flex items-center justify-center">
                <div className="text-slate-400 text-sm">
                  Interactive map placeholder
                  <div className="mt-2 text-xs text-slate-500">
                    Replace this area with your Azure Maps / Mapbox / Leaflet integration.
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-sm">
                  <div className="text-xs text-slate-400 uppercase mb-1">Layers</div>
                  <div className="text-cyan-200">Population Density · Points of Interest</div>
                </div>
                <div className="text-sm">
                  <div className="text-xs text-slate-400 uppercase mb-1">Narrative</div>
                  <div className="text-slate-200/85">Contextual overlays and story panels</div>
                </div>
                <div className="text-sm">
                  <div className="text-xs text-slate-400 uppercase mb-1">Export</div>
                  <div className="text-slate-200/85">PNG, GeoJSON, CSV</div>
                </div>
              </div>
            </GlassPanel>
          </motion.div>

          {/* Details / Sidebar */}
          <motion.aside
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="lg:col-span-1"
          >
            <GlassPanel>
              <div>
                <div className="text-xs tracking-[0.22em] uppercase text-cyan-200/80 mb-2">
                  Overview
                </div>

                <h3 className="text-lg font-semibold text-cyan-100 mb-2">
                  What Halo Maps does
                </h3>

                <p className="text-sm text-slate-200/80 leading-relaxed mb-4">
                  Halo Maps combines spatial tiling, demographic surfaces, and narrative annotations
                  so analysts can quickly identify opportunity clusters, cannibalization risk, and
                  trade area dynamics.
                </p>

                <div className="mt-4">
                  <div className="text-xs text-slate-400 uppercase mb-2">Key Capabilities</div>
                  <ul className="text-sm text-slate-200/85 space-y-2 list-disc list-inside">
                    <li>Multi-layer spatial analysis (density, drive-time, POI)</li>
                    <li>Custom narrative overlays for executive storytelling</li>
                    <li>Exportable datasets and map snapshots</li>
                    <li>Seamless integration with Power BI reports</li>
                  </ul>
                </div>

                <div className="mt-6">
                  <div className="text-xs text-slate-400 uppercase mb-2">Contact</div>
                  <a
                    href="mailto:andrew@example.com"
                    className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs tracking-[0.18em] uppercase text-cyan-200 hover:bg-cyan-500/20 transition-colors"
                  >
                    Request a Walkthrough
                  </a>
                </div>
              </div>
            </GlassPanel>

            <div className="mt-6">
              <GlassPanel>
                <div className="text-xs tracking-[0.22em] uppercase text-cyan-200/80 mb-2">
                  Technical Notes
                </div>
                <div className="text-sm text-slate-200/85 space-y-2">
                  <div>
                    <strong className="text-cyan-200">Data</strong>
                    <div className="text-slate-400 text-xs">Census, POI, proprietary telemetry</div>
                  </div>
                  <div>
                    <strong className="text-cyan-200">Performance</strong>
                    <div className="text-slate-400 text-xs">Vector tiles, server-side tiling cache</div>
                  </div>
                  <div>
                    <strong className="text-cyan-200">Integration</strong>
                    <div className="text-slate-400 text-xs">Power BI embedding, REST APIs</div>
                  </div>
                </div>
              </GlassPanel>
            </div>
          </motion.aside>
        </div>

        <div className="mt-12">
          <EnergyDivider />
        </div>

        {/* Related */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-10"
        >
          <GlassPanel>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <div className="text-xs tracking-[0.22em] uppercase text-cyan-200/80 mb-1">
                  Related Projects
                </div>
                <h4 className="text-lg font-semibold text-cyan-100">Executive Performance Command Center</h4>
                <p className="mt-2 text-slate-200/80 max-w-xl">
                  A companion product focused on narrative KPIs and anomaly detection for executive audiences.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href="/projects/exec-command"
                  className="rounded-full border border-slate-700 bg-transparent px-4 py-2 text-xs tracking-[0.18em] uppercase text-slate-200/80 hover:text-cyan-200 transition-colors"
                >
                  Explore
                </Link>
                <a
                  href="mailto:andrew@example.com"
                  className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-xs tracking-[0.18em] uppercase text-cyan-200 hover:bg-cyan-500/20 transition-colors"
                >
                  Request Demo
                </a>
              </div>
            </div>
          </GlassPanel>
        </motion.section>
      </div>
    </SciFiLayout>
  );
}
