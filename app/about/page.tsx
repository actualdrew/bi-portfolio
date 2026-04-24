"use client";

import { motion } from "framer-motion";
import SciFiLayout from "@/components/SciFiLayout";
import GlassPanel from "@/components/GlassPanel";
import EnergyDivider from "@/components/EnergyDivider";

const fade = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <SciFiLayout>
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-24">
        <motion.header
          initial="hidden"
          animate="visible"
          variants={fade}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-start justify-between gap-6">
            <div>
              <div className="text-xs tracking-[0.22em] uppercase text-cyan-200/80 mb-2">
                About
              </div>
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-[0.12em] text-cyan-100">
                Design, Data, and Decision Systems
              </h1>
              <p className="mt-3 text-slate-200/80 max-w-2xl">
                I build production‑grade BI experiences that combine rigorous data engineering,
                thoughtful UX, and narrative analytics. My work focuses on turning complex data
                into decision‑ready interfaces for analysts and executives.
              </p>
            </div>

            <div className="shrink-0 hidden md:block w-56">
              <GlassPanel>
                <div className="text-xs tracking-[0.22em] uppercase text-cyan-200/80 mb-2">
                  Quick Facts
                </div>
                <div className="text-sm text-slate-200/85">
                  <div><strong className="text-cyan-200">Specialties</strong></div>
                  <div className="text-slate-400 text-xs">Geospatial Analytics · Executive UX · Data Modeling</div>

                  <div className="mt-3"><strong className="text-cyan-200">Stack</strong></div>
                  <div className="text-slate-400 text-xs">Power BI · Azure · Next.js · DAX</div>
                </div>
              </GlassPanel>
            </div>
          </div>
        </motion.header>

        <EnergyDivider />

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fade}
          transition={{ duration: 0.6, delay: 0.06 }}
          className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <div className="lg:col-span-2">
            <GlassPanel>
              <h2 className="text-xl font-semibold text-cyan-100 mb-3">Philosophy</h2>
              <p className="text-slate-200/85 leading-relaxed mb-4">
                I treat analytics interfaces as products: they must be reliable, explainable,
                and tuned for the decisions they support. That means clean data models, clear
                narratives, and interfaces that reduce cognitive load while surfacing the right
                signals at the right time.
              </p>

              <h3 className="text-lg font-semibold text-cyan-100 mb-2">Approach</h3>
              <ul className="list-disc list-inside text-slate-200/85 space-y-2 mb-4">
                <li>Design data models for clarity and performance</li>
                <li>Use narrative overlays to connect insight to action</li>
                <li>Prioritize observability and reproducible pipelines</li>
                <li>Ship production integrations with Power BI and web platforms</li>
              </ul>

              <h3 className="text-lg font-semibold text-cyan-100 mb-2">Selected Work</h3>
              <p className="text-slate-200/85 mb-4">
                Projects include geospatial market intelligence, executive performance command
                centers, and reusable data pipeline toolkits. Each project emphasizes production
                readiness and decision clarity.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/projects"
                  className="rounded-full border border-cyan-500/30 bg-transparent px-4 py-2 text-xs tracking-[0.18em] uppercase text-slate-200/80 hover:text-cyan-200 transition-colors"
                >
                  View Projects
                </a>
                <a
                  href="mailto:andrew@example.com"
                  className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-xs tracking-[0.18em] uppercase text-cyan-200 hover:bg-cyan-500/20 transition-colors"
                >
                  Contact
                </a>
              </div>
            </GlassPanel>

            <div className="mt-8">
              <GlassPanel>
                <h3 className="text-lg font-semibold text-cyan-100 mb-2">Process</h3>
                <ol className="list-decimal list-inside text-slate-200/85 space-y-2">
                  <li>Discovery and decision mapping</li>
                  <li>Data modeling and ETL design</li>
                  <li>Prototype dashboards and narrative flows</li>
                  <li>Production integration and monitoring</li>
                </ol>
              </GlassPanel>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <GlassPanel>
              <div className="text-xs tracking-[0.22em] uppercase text-cyan-200/80 mb-2">Contact</div>
              <div className="text-sm text-slate-200/85 mb-4">
                For demos, consulting, or collaboration, reach out and I’ll prepare a tailored
                walkthrough or technical brief.
              </div>
              <a
                href="mailto:andrew@example.com"
                className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs tracking-[0.18em] uppercase text-cyan-200 hover:bg-cyan-500/20 transition-colors"
              >
                Request a Walkthrough
              </a>
            </GlassPanel>

            <div className="mt-6">
              <GlassPanel>
                <div className="text-xs tracking-[0.22em] uppercase text-cyan-200/80 mb-2">Resume</div>
                <div className="text-sm text-slate-200/85">
                  If you want a downloadable resume or a tailored CV for a role, tell me which
                  format and I’ll prepare it.
                </div>
              </GlassPanel>
            </div>
          </aside>
        </motion.section>

        <div className="mt-12">
          <EnergyDivider />
        </div>

        <footer className="mt-10 text-sm text-slate-400">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>© {new Date().getFullYear()} Andrew · Data & BI Portfolio</div>
              <div className="text-xs text-slate-500">Built with production patterns and thoughtful UX</div>
            </div>
          </div>
        </footer>
      </div>
    </SciFiLayout>
  );
}
