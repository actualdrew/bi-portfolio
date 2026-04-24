"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SciFiLayout from "@/components/SciFiLayout";
import GlassPanel from "@/components/GlassPanel";
import EnergyDivider from "@/components/EnergyDivider";

const cardFade = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectsIndexPage() {
  const projects = [
    {
      slug: "halo-maps",
      title: "Halo Maps",
      subtitle: "Geospatial Market Intelligence Suite",
      tags: ["Power BI", "Azure Maps", "DAX"],
      description:
        "Map-driven analytics that unify population, density, and metro-area insights with narrative overlays.",
    },
    {
      slug: "exec-command",
      title: "Executive Performance Command Center",
      subtitle: "Decision‑Ready Executive Dashboards",
      tags: ["Power BI", "Narrative KPIs"],
      description:
        "High-signal executive dashboards focused on anomaly detection, narrative KPIs, and mission-control UX.",
    },
    {
      slug: "data-pipeline",
      title: "Data Pipeline Toolkit",
      subtitle: "Robust ETL & Modeling Patterns",
      tags: ["Azure", "Data Engineering"],
      description:
        "Reusable pipeline patterns and data models designed for scale, observability, and production reliability.",
    },
  ];

  return (
    <SciFiLayout>
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-20">
        <motion.header
          initial="hidden"
          animate="visible"
          variants={cardFade}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between gap-6">
            <div>
              <div className="text-xs tracking-[0.22em] uppercase text-cyan-200/80 mb-2">
                Projects
              </div>
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-[0.12em] text-cyan-100">
                Unified BI Experiences
              </h1>
              <p className="mt-3 text-slate-200/80 max-w-2xl">
                A curated collection of production‑ready BI systems — geospatial engines,
                executive dashboards, and data engineering toolkits — designed with a high‑end
                sci‑fi interface and engineered for real decisions.
              </p>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/projects"
                className="rounded-full border border-cyan-500/30 bg-cyan-500/8 px-4 py-2 text-xs tracking-[0.18em] uppercase text-cyan-200"
              >
                All Projects
              </Link>
              <a
                href="mailto:andrew@example.com"
                className="rounded-full border border-cyan-500/30 bg-transparent px-4 py-2 text-xs tracking-[0.18em] uppercase text-slate-200/80"
              >
                Request Demo
              </a>
            </div>
          </div>
        </motion.header>

        <EnergyDivider />

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, visible: {} }}
          transition={{ staggerChildren: 0.08 }}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              variants={cardFade}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Link href={`/projects/${p.slug}`} className="group">
                <GlassPanel>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="text-xs tracking-[0.22em] uppercase text-cyan-200/80 mb-1">
                        {p.title}
                      </div>
                      <h3 className="text-lg font-semibold text-cyan-100 mb-2">
                        {p.subtitle}
                      </h3>
                      <p className="text-sm text-slate-200/80 leading-relaxed mb-4">
                        {p.description}
                      </p>

                      <div className="flex flex-wrap gap-2 text-[11px] text-cyan-200/80">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-cyan-500/30 bg-cyan-500/8 px-2 py-0.5"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="shrink-0 flex flex-col items-end gap-2">
                      <div className="text-[11px] text-slate-400 uppercase">Status</div>
                      <div className="text-sm font-medium text-cyan-200">Production</div>
                      <div className="mt-4">
                        <span className="inline-block rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200 tracking-[0.18em]">
                          View
                        </span>
                      </div>
                    </div>
                  </div>
                </GlassPanel>
              </Link>
            </motion.div>
          ))}
        </motion.section>

        <div className="mt-12">
          <EnergyDivider />
        </div>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={cardFade}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-12"
        >
          <GlassPanel>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <div className="text-xs tracking-[0.22em] uppercase text-cyan-200/80 mb-1">
                  Explore
                </div>
                <h4 className="text-lg font-semibold text-cyan-100">
                  Want a tailored walkthrough?
                </h4>
                <p className="mt-2 text-slate-200/80 max-w-xl">
                  I can prepare a demo or a short technical brief for any project — data model,
                  architecture, or UX patterns. Tell me which project and I’ll prepare a focused
                  walkthrough.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="mailto:andrew@example.com"
                  className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-xs tracking-[0.18em] uppercase text-cyan-200 hover:bg-cyan-500/20 transition-colors"
                >
                  Request Demo
                </a>
                <Link
                  href="/projects/halo-maps"
                  className="rounded-full border border-slate-700 bg-transparent px-4 py-2 text-xs tracking-[0.18em] uppercase text-slate-200/80 hover:text-cyan-200 transition-colors"
                >
                  Explore Halo Maps
                </Link>
              </div>
            </div>
          </GlassPanel>
        </motion.section>
      </div>
    </SciFiLayout>
  );
}
