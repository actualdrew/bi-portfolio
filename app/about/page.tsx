"use client";

import { motion } from "framer-motion";
import SciFiLayout from "@/components/SciFiLayout";
import GlassPanel from "@/components/GlassPanel";
import EnergyDivider from "@/components/EnergyDivider";

const fadeUp = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const staggerParent = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <SciFiLayout>
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto px-6 pt-28 pb-24"
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="h-7 w-1 rounded-full bg-gradient-to-b from-cyan-400 to-sky-500 origin-top"
          />
          <h1 className="text-3xl font-semibold tracking-[0.16em] uppercase text-cyan-100">
            About Me
          </h1>
        </div>

        {/* Main Panel */}
        <GlassPanel className="hover-lift p-8">
          <motion.div
            variants={staggerParent}
            initial="hidden"
            animate="visible"
            className="space-y-10"
          >
            {/* Intro Section */}
            <motion.div variants={staggerItem} className="space-y-4">
              <h2 className="text-xl font-semibold text-cyan-200 tracking-wide">
                Who I Am
              </h2>
              <p className="text-slate-200/85 leading-relaxed text-base">
                I’m Andrew Adamson — a competitive intelligence and analytics professional from 
                <span className="text-cyan-200"> Longview, Texas</span>, now based in Fort Worth. 
                My work lives at the intersection of <span className="text-cyan-200">data, strategy, and narrative</span>, 
                where I help teams understand what’s happening, why it matters, and where to go next.
              </p>
              <p className="text-slate-200/85 leading-relaxed text-base">
                I’ve always believed that clarity creates momentum. That belief has shaped everything I build — 
                from geospatial analytics products to competitive intelligence frameworks to CRM migration workflows.
              </p>
            </motion.div>

            {/* What I Do */}
            <motion.div variants={staggerItem} className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-5 w-1 bg-cyan-400/70 rounded-full" />
                <h2 className="text-lg font-semibold text-cyan-100 tracking-wide">
                  What I Do
                </h2>
              </div>
              <p className="text-slate-200/85 leading-relaxed text-base">
                My work blends competitive intelligence, analytics product development, and cross‑functional leadership. 
                I help organizations understand their competitive landscape, identify risk and opportunity earlier, and make 
                decisions with more confidence — all through tools and insights designed with clarity and purpose.
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div variants={staggerItem} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-5 w-1 bg-cyan-400/70 rounded-full" />
                <h2 className="text-lg font-semibold text-cyan-100 tracking-wide">
                  A Few Things I’m Proud Of
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <GlassPanel className="p-4 bg-cyan-400/5 border border-cyan-400/20 rounded-lg">
                  <p className="text-slate-200/85 text-sm leading-relaxed">
                    <strong className="text-cyan-200">Halo Maps:</strong> Designed and owned a geospatial intelligence product used across Compass Group for proposals, RFPs, and strategic planning. 
                    Migrated a legacy QGIS + Excel workflow into a Snowflake‑backed Power BI product, reducing manual effort by 20–30%.
                  </p>
                </GlassPanel>

                <GlassPanel className="p-4 bg-cyan-400/5 border border-cyan-400/20 rounded-lg">
                  <p className="text-slate-200/85 text-sm leading-relaxed">
                    <strong className="text-cyan-200">CRM Migration:</strong> Supported the full migration from on‑prem CRM to Dynamics 365 — writing user stories, participating in design discussions, conducting structured testing, training users, and providing post‑launch support.
                  </p>
                </GlassPanel>

                <GlassPanel className="p-4 bg-cyan-400/5 border border-cyan-400/20 rounded-lg">
                  <p className="text-slate-200/85 text-sm leading-relaxed">
                    <strong className="text-cyan-200">Pipeline & Competitive Intelligence:</strong> Owned monthly reporting covering more than $5M in pipeline, improving forecast accuracy and leadership visibility into risk and opportunity.
                  </p>
                </GlassPanel>

                <GlassPanel className="p-4 bg-cyan-400/5 border border-cyan-400/20 rounded-lg">
                  <p className="text-slate-200/85 text-sm leading-relaxed">
                    <strong className="text-cyan-200">Cross‑Functional Leadership:</strong> Partnered with sales, engineering, and data teams to influence platform strategy across SAP → Snowflake → Power BI architecture and future self‑service analytics direction.
                  </p>
                </GlassPanel>
              </div>
            </motion.div>

            {/* How I Work */}
            <motion.div variants={staggerItem} className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-5 w-1 bg-cyan-400/70 rounded-full" />
                <h2 className="text-lg font-semibold text-cyan-100 tracking-wide">
                  How I Work
                </h2>
              </div>
              <p className="text-slate-200/85 leading-relaxed text-base">
                I approach problems with curiosity, structure, and a product mindset. I like building things that last — 
                tools, frameworks, and processes that make the organization smarter long after the project is done.
              </p>
            </motion.div>

            {/* Outside of Work */}
            <motion.div variants={staggerItem} className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-5 w-1 bg-cyan-400/70 rounded-full" />
                <h2 className="text-lg font-semibold text-cyan-100 tracking-wide">
                  Outside of Work
                </h2>
              </div>
              <p className="text-slate-200/85 leading-relaxed text-base">
                When I’m not building analytics products or digging into competitive signals, you’ll usually find me listening to music, 
                playing golf, fishing, traveling, spending time with friends and family, or supporting 
                <span className="text-cyan-200"> TCU athletics</span>.
              </p>
            </motion.div>

            {/* Resume Download */}
            <motion.div variants={staggerItem} className="pt-4">
              <h2 className="text-lg font-semibold text-cyan-100 mb-3 tracking-wide">
                Download My Resume
              </h2>
              <a
                href="/Andrew_Adamson_Resume.pdf"
                download
                className="inline-block rounded-full border border-cyan-400/40 bg-cyan-400/10 px-6 py-2 text-sm tracking-wide text-cyan-200 hover:bg-cyan-400/20 hover:border-cyan-300 transition-all hover-lift"
              >
                Download Resume (PDF)
              </a>
            </motion.div>
          </motion.div>
        </GlassPanel>
      </motion.section>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="origin-left"
      >
        <EnergyDivider />
      </motion.div>
    </SciFiLayout>
  );
}
