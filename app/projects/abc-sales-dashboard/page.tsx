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

export default function ABCSalesDashboardPage() {
  const [caseOpen, setCaseOpen] = useState(false);
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
        {/* ── Header ── */}
        <div className="flex items-start justify-between gap-6 mb-10">
          <div>
            <div className="text-xs tracking-[0.22em] uppercase text-cyan-200/80 mb-2">
              ABC Inc. · Sales Intelligence
            </div>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-[0.12em] text-cyan-100">
              Executive Sales Dashboard
            </h1>
            <p className="mt-3 text-slate-200/80 max-w-2xl">
              A five-page executive Power BI dashboard built from nine raw CSV sources — covering
              revenue performance, pipeline health, lead generation, team activity, and rep-level
              leaderboards across a 270,000-row dataset.
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
              <div className="text-sm text-slate-200/80">
                <strong className="text-cyan-200">Status:</strong> Production
              </div>
              <div className="mt-3 text-sm text-slate-200/80">
                <strong className="text-cyan-200">Stack:</strong> Power BI · DAX · Power Query · M
              </div>
              <div className="mt-3 text-sm text-slate-200/80">
                <strong className="text-cyan-200">Data:</strong> 2020 – 2025 · 270K rows
              </div>
              <div className="mt-3 text-sm text-slate-200/80">
                <strong className="text-cyan-200">Pages:</strong> 5 executive views
              </div>
            </GlassPanel>
          </div>
        </div>

        {/* ── Divider ── */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="origin-left mb-10"
        >
          <EnergyDivider />
        </motion.div>

        {/* ── Main grid ── */}
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
                ABC Inc. Sales Dashboard
              </h2>
              <div className="relative w-full flex-1 min-h-[480px]">
                <iframe
                  title="ABC Inc. Sales Dashboard"
                  src="https://app.powerbi.com/view?r=eyJrIjoiMDQ0Zjg5NTgtMDE2OS00ODc3LWE0ODUtMWIzZDQ3NmE4ZTRiIiwidCI6ImNhZGZjN2E1LTBlZjUtNDJjZi05MTJjLTNhNzgzNWZiZWY5MCJ9"
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
                Built for senior leadership at ABC Inc., this dashboard delivers a clear,
                interactive view of business performance — from statewide revenue trends and
                pipeline health to individual rep leaderboards and lead conversion quality
                across five years of sales data.
              </p>
            </GlassPanel>

            {/* KPI Callouts */}
            <GlassPanel className="hover-lift">
              <div className="text-xs tracking-[0.22em] uppercase text-cyan-200/80 mb-3">
                Key Numbers
              </div>
              <div className="space-y-3 text-sm">
                {[
                  ["Total Revenue", "$871.4M"],
                  ["Pipeline Value", "$1.21B"],
                  ["Win Rate", "69.49%"],
                  ["Avg Sales Cycle", "97 days"],
                  ["DAX Measures", "26 across 5 folders"],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between">
                    <span className="text-slate-400 text-xs uppercase tracking-[0.16em]">{label}</span>
                    <span className="text-cyan-200 font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* How to Use */}
            <GlassPanel className="hover-lift">
              <div className="text-xs tracking-[0.22em] uppercase text-cyan-200/80 mb-2">
                How to Use
              </div>
              <ul className="text-sm text-slate-200/80 leading-relaxed space-y-3">
                <li>
                  <strong className="text-cyan-200">1. Start at the Summary:</strong>{" "}
                  The Executive Summary page gives a full-business health check at a glance.
                </li>
                <li>
                  <strong className="text-cyan-200">2. Filter by period:</strong>{" "}
                  Use the Year and Quarter slicers to focus on specific time windows.
                </li>
                <li>
                  <strong className="text-cyan-200">3. Drill into pipeline:</strong>{" "}
                  The Pipeline page surfaces funnel stage breakdowns and open deal details.
                </li>
                <li>
                  <strong className="text-cyan-200">4. Evaluate the team:</strong>{" "}
                  Sales Team Performance ranks reps by revenue and activity with manager rollup.
                </li>
                <li>
                  <strong className="text-cyan-200">5. Navigate tabs:</strong>{" "}
                  Switch between Executive Summary, Revenue &amp; Orders, Pipeline, Lead Generation,
                  and Sales Team Performance for different analytical views.
                </li>
              </ul>
            </GlassPanel>
          </motion.aside>
        </div>

        {/* ── Case Study ── */}
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
              onClick={() => setCaseOpen(!caseOpen)}
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
                {caseOpen ? "Hide" : "Show"}
              </div>
            </div>

            {caseOpen && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="mt-6 space-y-6 text-slate-200/85 leading-relaxed"
              >
                <div>
                  <h3 className="text-lg font-semibold text-cyan-200 mb-2">The Problem</h3>
                  <p>
                    ABC Inc. needed a single executive view of sales performance across revenue,
                    pipeline, leads, and team activity — but their data lived in nine separate CSV
                    exports with no unified model, no date dimension, and no relational structure
                    connecting opportunities to orders, reps to managers, or leads to conversions.
                    Standard reports couldn't answer cross-dimensional questions like "which reps
                    are closing the most pipeline gen leads?" or "how is win rate trending by
                    quarter across industries?"
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-cyan-200 mb-2">Building the Model</h3>
                  <p>
                    Before writing a single DAX measure, every file was audited for referential
                    integrity, null foreign keys, and date range coverage. The data came back clean —
                    zero orphan records across all joins — but surfaced several structural challenges
                    that required deliberate design decisions. The
                    <code className="text-cyan-300 text-xs mx-1">order</code> and
                    <code className="text-cyan-300 text-xs mx-1">lead</code> table names are reserved
                    words in DAX, requiring single-quote wrapping throughout all measures.
                    The <code className="text-cyan-300 text-xs mx-1">tasks.what_id</code> column
                    referenced both opportunity and account IDs in roughly equal proportion, making
                    a single modelled relationship impossible — the join was handled at the measure
                    level instead.
                  </p>
                  <p className="mt-3">
                    A custom date dimension was built in Power Query covering 2020 through 2026,
                    marked as the Date Table to enable time-intelligence functions. The
                    <code className="text-cyan-300 text-xs mx-1">opportunity[close_date]</code> →
                    <code className="text-cyan-300 text-xs mx-1">dim_date</code> relationship was
                    set inactive to avoid circular paths, then activated in booking measures via
                    <code className="text-cyan-300 text-xs mx-1">USERELATIONSHIP()</code>. A
                    <code className="text-cyan-300 text-xs mx-1">dim_manager</code> table was
                    created as a Power Query reference of the user table — filtered to Manager and
                    Director roles — to support the drillable manager matrix on the Sales Team
                    Performance page without polluting the rep-level dimension.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-cyan-200 mb-2">Report Design Philosophy</h3>
                  <p>
                    Each of the five pages targets a distinct leadership question rather than
                    presenting everything at once. Executive Summary answers "how is the business
                    performing overall?" Revenue &amp; Orders answers "what is driving and shaping
                    revenue?" Pipeline answers "what is the current state of the funnel?" Lead
                    Generation answers "where are leads coming from and which convert?" Sales Team
                    Performance answers "who is performing and where are the risks?" — including
                    a rep concentration flag on Gabriel Clark, the top performer at $15.4M in
                    closed revenue and $20M in pipeline.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-cyan-200 mb-2">Key Findings</h3>
                  <p>
                    Several structural insights emerged during the build. Revenue is distributed
                    nearly equally across all six industries (16–18% each) with no dominant
                    vertical, and all five products generate similar output ($108–115M), suggesting
                    the business carries no single-product dependency. Lead conversion rates are
                    consistent across all sources at 52–54%, indicating that volume — not source
                    quality — is the primary lever for lead growth. The average sales cycle runs
                    97 days. Win rate holds at 69.49% across 6,604 fully closed opportunities.
                  </p>
                </div>
              </motion.div>
            )}
          </GlassPanel>
        </motion.div>

        {/* ── Technical Overview ── */}
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
                  <h3 className="text-lg font-semibold text-cyan-200 mb-2">Data Model — Star Schema</h3>
                  <p>
                    Star schema with two fact layers and three core dimensions. Fact tables:
                    <code className="text-cyan-300 text-xs mx-1">order</code>,
                    <code className="text-cyan-300 text-xs mx-1">order_items</code>,
                    <code className="text-cyan-300 text-xs mx-1">opportunity</code>,
                    <code className="text-cyan-300 text-xs mx-1">lead</code>.
                    Dimension tables:
                    <code className="text-cyan-300 text-xs mx-1">account</code>,
                    <code className="text-cyan-300 text-xs mx-1">user</code>,
                    <code className="text-cyan-300 text-xs mx-1">dim_date</code>.
                    Supporting tables:
                    <code className="text-cyan-300 text-xs mx-1">contact</code>,
                    <code className="text-cyan-300 text-xs mx-1">tasks</code>,
                    <code className="text-cyan-300 text-xs mx-1">event</code>.
                    All relationships single-direction, one-to-many. Two inactive relationships
                    managed via <code className="text-cyan-300 text-xs mx-1">USERELATIONSHIP()</code> in DAX.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-cyan-200 mb-2">Power Query Transformations</h3>
                  <p>Key transformations applied before loading to the model:</p>
                  <ul className="mt-2 space-y-2 text-sm list-disc list-inside text-slate-300/85">
                    <li><code className="text-cyan-300 text-xs">order</code>: added <code className="text-cyan-300 text-xs">ContractEndDate</code> via <code className="text-cyan-300 text-xs">Date.AddMonths()</code> — correcting the common error where the <code className="text-cyan-300 text-xs">+</code> operator can't combine date and number types</li>
                    <li><code className="text-cyan-300 text-xs">user</code>: filtered to active reps, added <code className="text-cyan-300 text-xs">RoleGroup</code> column (AE → "Closing", SDR/BDR → "Pipeline Gen") using <code className="text-cyan-300 text-xs">List.Contains()</code></li>
                    <li><code className="text-cyan-300 text-xs">account</code>: added <code className="text-cyan-300 text-xs">RevenueSegment</code> and <code className="text-cyan-300 text-xs">EmployeeSegment</code> columns from revenue and headcount thresholds</li>
                    <li><code className="text-cyan-300 text-xs">opportunity</code>: added <code className="text-cyan-300 text-xs">IsClosed</code>, <code className="text-cyan-300 text-xs">IsWon</code>, and <code className="text-cyan-300 text-xs">WeightedAmount</code> calculated columns</li>
                    <li>All boolean columns explicitly cast to True/False to avoid DAX comparison issues with lowercase string values</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-cyan-200 mb-2">DAX Measures</h3>
                  <p>
                    26 measures organized into 5 display folders in a dedicated
                    <code className="text-cyan-300 text-xs mx-1">_Measures</code> table.
                    All measures referencing <code className="text-cyan-300 text-xs">order</code> or
                    <code className="text-cyan-300 text-xs mx-1">lead</code> tables use single-quote
                    syntax due to DAX reserved word conflicts.
                  </p>
                  <pre className="bg-[#0a0f1a] border border-cyan-500/20 rounded-md p-3 text-[11px] overflow-x-auto text-cyan-200 mt-3">
{`-- Revenue YTD with year-end override (data ends 2025, current year 2026)
Revenue YTD =
TOTALYTD([Total Revenue], dim_date[Date], "12-31-2025")

-- Closed Won activates the inactive close_date relationship
Closed Won Revenue =
CALCULATE(
    [Total Revenue],
    USERELATIONSHIP(opportunity[close_date], dim_date[Date]),
    opportunity[IsWon] = TRUE()
)

-- Win Rate excludes open pipeline
Win Rate =
DIVIDE(
    CALCULATE(COUNTROWS(opportunity), opportunity[IsWon] = TRUE()),
    CALCULATE(COUNTROWS(opportunity), opportunity[IsClosed] = TRUE()),
    0
)

-- RANKX bar highlight: navy for top performer, blue for all others
Revenue Bar Highlight =
IF(
    RANKX(ALL(user[full_name]), [Total Revenue],, DESC) = 1,
    "#1B2A4A",
    "#2E5FA3"
)`}
                  </pre>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-cyan-200 mb-2">Report Pages</h3>
                  <ul className="space-y-3 text-sm">
                    <li><strong className="text-slate-200">Executive Summary —</strong> KPI cards (Revenue, Pipeline, Win Rate, Open Opps, Total Leads), Revenue Trend line, Revenue by Industry donut, Bookings by Quarter, Lead Conversion by Source.</li>
                    <li><strong className="text-slate-200">Revenue &amp; Orders —</strong> Dual-line YoY chart with dashed prior-year line, Revenue by Product, Revenue by Segment, Orders by Status, Revenue by Industry quarterly matrix.</li>
                    <li><strong className="text-slate-200">Pipeline &amp; Opportunities —</strong> Funnel chart of open stages, Pipeline by Stage bar, Bookings Trend via inactive close_date relationship, Pipeline by Industry, Open Pipeline Details table.</li>
                    <li><strong className="text-slate-200">Lead Generation —</strong> Dual-axis Leads Trend (Total vs Converted), Leads by Source, Converted Leads by Source, Lead Conversion by Source, Leads by Status donut.</li>
                    <li><strong className="text-slate-200">Sales Team Performance —</strong> Revenue and Pipeline leaderboards with RANKX conditional formatting, Tasks by Seller, Revenue by Role (AE vs SDR/BDR), drillable manager matrix with rep-level Revenue, Pipeline, and Win Rate.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-cyan-200 mb-2">Theme &amp; Styling</h3>
                  <p>
                    Corporate navy/grey theme applied via a custom Power BI theme JSON file.
                    Primary: <code className="text-cyan-300 text-xs">#1B2A4A</code> navy,
                    Secondary: <code className="text-cyan-300 text-xs">#2E5FA3</code> corporate blue,
                    Accent: <code className="text-cyan-300 text-xs">#4A90D9</code> mid blue,
                    Canvas: <code className="text-cyan-300 text-xs">#F5F6F8</code>.
                    Full-width navy header bar on every page; all chart visuals white with light border;
                    matrix headers navy with white bold text; alternating row shading.
                    Line charts use 2.5px primary line with 10% area shading; prior year rendered dashed.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-cyan-200 mb-2">Deployment</h3>
                  <p>
                    Published to Power BI Service and embedded via a publish-to-web iframe in a
                    chromeless configuration, wrapped in a responsive container on this Next.js
                    portfolio. The report retains full cross-filter interactivity in the embedded view.
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
