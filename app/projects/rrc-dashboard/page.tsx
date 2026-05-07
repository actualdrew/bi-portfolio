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

export default function RRCDashboardPage() {
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
              RRC Oil &amp; Gas
            </div>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-[0.12em] text-cyan-100">
              Texas Oil & Gas Production Analytics Dashboard
            </h1>
            <p className="mt-3 text-slate-200/80 max-w-2xl">
              A full upstream analytics suite built from raw Texas Railroad Commission data —
              production trends, well activity, drilling permits, and operator performance
              in a single interactive view.
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
                <strong className="text-cyan-200">Status:</strong> In Development
              </div>
              <div className="mt-3 text-sm text-slate-200/80">
                <strong className="text-cyan-200">Stack:</strong> Power BI · SQL Server · DAX · Python ETL
              </div>
              <div className="mt-3 text-sm text-slate-200/80">
                <strong className="text-cyan-200">Data:</strong> 2018 – 2026 · Monthly
              </div>
              <div className="mt-3 text-sm text-slate-200/80">
                <strong className="text-cyan-200">Records:</strong> ~15M+ rows across facts
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
                Interactive Power BI Report
              </h2>
              <div className="relative w-full flex-1 min-h-[480px]">
                <iframe
                  title="RRC_OilGas"
                  src="https://app.powerbi.com/view?r=eyJrIjoiYjA5NmM4Y2UtZTdkNy00YmQ5LWJjYTQtN2FiMzQ1Mzk3ZWY3IiwidCI6ImNhZGZjN2E1LTBlZjUtNDJjZi05MTJjLTNhNzgzNWZiZWY5MCJ9&pageName=bf89cff6b052b36649a9"
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
            <GlassPanel className="hover-lift">
              <div className="text-xs tracking-[0.22em] uppercase text-cyan-200/80 mb-2">
                Overview
              </div>
              <p className="text-sm text-slate-200/80 leading-relaxed">
                Built directly from official RRC datasets, this dashboard surfaces macro
                production patterns — statewide oil and gas volumes, gas vs. oil balance,
                and well activity — while enabling drill-downs into operators, counties,
                fields, and drilling permits across more than 20 years of Texas upstream history.
              </p>
            </GlassPanel>

            <GlassPanel className="hover-lift">
              <div className="text-xs tracking-[0.22em] uppercase text-cyan-200/80 mb-2">
                How to Use
              </div>
              <ul className="text-sm text-slate-200/80 leading-relaxed space-y-3">
                <li>
                  <strong className="text-cyan-200">1. Filter by year:</strong>{" "}
                  Use the year slicer to focus on specific production cycles.
                </li>
                <li>
                  <strong className="text-cyan-200">2. Read the KPIs:</strong>{" "}
                  Start with total oil, gas, and active wells to understand scale.
                </li>
                <li>
                  <strong className="text-cyan-200">3. Follow the trends:</strong>{" "}
                  Use the time-series charts to spot structural shifts and inflection points.
                </li>
                <li>
                  <strong className="text-cyan-200">4. Hover for detail:</strong>{" "}
                  Tooltips expose exact values and help compare specific periods.
                </li>
                <li>
                  <strong className="text-cyan-200">5. Navigate tabs:</strong>{" "}
                  Switch between Production Trends, Field Analysis, Top Operators, County
                  Map, and Drilling Permits for different analytical views.
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
                    The Texas Railroad Commission publishes upstream oil and gas data as raw
                    ASCII flat files — dozens of them, each with fixed-width column layouts
                    defined in separate PDF field manuals. There is no API, no unified key
                    structure, and no way to relate production to wells, operators, or counties
                    without building the relational layer from scratch. Analysts working with
                    this data typically resort to one-off exports or static reports that can't
                    answer cross-dimensional questions like "which operators are driving
                    production growth in the Permian?" or "how has gas output in Webb County
                    trended since 2018?"
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-cyan-200 mb-2">Building the Pipeline</h3>
                  <p>
                    The project started with the drilling permit files — 104 monthly ASCII
                    releases spanning 2018 through 2026. I wrote a Python batch loader using
                    <code className="text-cyan-300 text-xs mx-1">pandas</code> and
                    <code className="text-cyan-300 text-xs mx-1">pyodbc</code> that parsed each
                    file against the OGA049M field layout spec, normalized column types, and
                    used a SQL Server MERGE statement to upsert records into
                    <code className="text-cyan-300 text-xs mx-1">fact_permits</code> without
                    duplicates. The pipeline hit several real production failures along the way:
                    a foreign key violation against
                    <code className="text-cyan-300 text-xs mx-1">dim_operator</code> for permit
                    operators not present in the dimension table, a SQL Server error rejecting
                    <code className="text-cyan-300 text-xs mx-1">MAX()</code> on BIT columns in
                    the deduplication logic, and primary key conflicts caused by cumulative monthly
                    files re-delivering historical permit records. Each failure required a targeted
                    fix — dropping the FK constraint, casting BIT to INT for aggregation, and
                    truncating the fact table before replaying the full batch.
                  </p>
                  <p className="mt-3">
                    Production data came from the RRC's Production Data Query (PDQ) system — a
                    12.68GB flat file covering every lease-level production cycle since 1993.
                    Loading it required an overnight bulk insert that landed at roughly 80–100M
                    rows in <code className="text-cyan-300 text-xs mx-1">fact_production</code>.
                    To keep Power BI performant, I pre-aggregated production into three summary
                    fact tables at different analytical grains:
                    <code className="text-cyan-300 text-xs mx-1">fact_county_cycle</code> (145K rows),
                    <code className="text-cyan-300 text-xs mx-1">fact_field_cycle</code> (10.1M rows),
                    and <code className="text-cyan-300 text-xs mx-1">fact_operator_cycle</code> (3.7M rows).
                    The report queries these pre-summarized tables for all visuals, reserving the
                    raw lease-level fact for future drill-through.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-cyan-200 mb-2">Dimensions & Scale</h3>
                  <p>
                    The well dimension —
                    <code className="text-cyan-300 text-xs mx-1">dim_well_completion</code> — holds
                    818,277 records parsed from the MAF016 dataset, which required iterating across
                    276 individual county files. The operator dimension was sourced from two separate
                    RRC datasets: the PDQ operator table (78,047 records) and the P5 organization
                    file (78,037 records with active/inactive status and mailing addresses), loaded
                    and maintained separately to preserve source fidelity. The field dimension covers
                    65,825 unique Texas oil and gas fields with district, field class, and county
                    assignments used as slicer dimensions in the report.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-cyan-200 mb-2">Report Design Philosophy</h3>
                  <p>
                    Each of the five report pages targets a distinct analytical question rather than
                    trying to show everything at once. Production Trends answers "what is Texas
                    producing and how is it changing?" Top Operators answers "who is driving
                    production?" County Map answers "where is production concentrated?" Field Analysis
                    answers "which fields are producing and at what trajectory?" Drilling Permits
                    answers "where are operators drilling today?" — a forward-looking page that most
                    production dashboards omit entirely. The underlying model is built to support
                    future extensions without re-engineering the pipeline.
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
                  <h3 className="text-lg font-semibold text-cyan-200 mb-2">Database Schema</h3>
                  <p>
                    Star schema in SQL Server (<code className="text-cyan-300 text-xs">RRC_OilGas</code>).
                    Dimensions: <code className="text-cyan-300 text-xs mx-1">dim_operator_pdq</code> (78,047),{" "}
                    <code className="text-cyan-300 text-xs">dim_operator_p5</code> (78,037),{" "}
                    <code className="text-cyan-300 text-xs mx-1">dim_well_completion</code> (818,277),{" "}
                    <code className="text-cyan-300 text-xs">dim_field</code> (65,825),{" "}
                    <code className="text-cyan-300 text-xs mx-1">dim_county</code>,{" "}
                    <code className="text-cyan-300 text-xs">dim_district</code>,{" "}
                    <code className="text-cyan-300 text-xs mx-1">dim_date</code>.
                    Facts: <code className="text-cyan-300 text-xs">fact_production</code> (~80–100M rows),{" "}
                    <code className="text-cyan-300 text-xs mx-1">fact_county_cycle</code> (145K),{" "}
                    <code className="text-cyan-300 text-xs">fact_field_cycle</code> (10.1M),{" "}
                    <code className="text-cyan-300 text-xs mx-1">fact_operator_cycle</code> (3.7M),{" "}
                    <code className="text-cyan-300 text-xs">fact_permits</code> (104 months),{" "}
                    <code className="text-cyan-300 text-xs mx-1">fact_wells</code> (1.2M).
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-cyan-200 mb-2">ETL — Python Batch Loaders</h3>
                  <p>
                    Each dataset required a custom Python loader. The permit batch loader parsed
                    104 monthly ASCII files using
                    <code className="text-cyan-300 text-xs mx-1">pandas.read_fwf</code> against the
                    OGA049M fixed-width spec, bulk-inserted rows via
                    <code className="text-cyan-300 text-xs mx-1">pyodbc</code> into a staging table,
                    then executed a MERGE into
                    <code className="text-cyan-300 text-xs mx-1">fact_permits</code> using
                    <code className="text-cyan-300 text-xs mx-1">permit_number + sequence_number</code> as
                    the composite key. BIT columns were cast to INT for MAX() deduplication in the
                    MERGE, and the FK constraint to
                    <code className="text-cyan-300 text-xs mx-1">dim_operator</code> was dropped to
                    allow permit operators not present in the operator dimension. The well loader
                    iterated 276 MAF016 county files. The PDQ production load ran overnight via
                    BULK INSERT from a 12.68GB flat file.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-cyan-200 mb-2">Power BI Data Model</h3>
                  <p>
                    All tables loaded in Import mode using custom SQL queries in Power Query to
                    pre-filter by year and column before VertiPaq compression. Nine relationships
                    defined across the model — all many-to-one with single-direction cross-filtering.
                    The date table joins on an integer
                    <code className="text-cyan-300 text-xs mx-1">YearMonth</code> key (YYYYMM format)
                    shared across all fact tables, which also enforces correct chronological sort
                    order on time-series visuals. All measures live in a dedicated
                    <code className="text-cyan-300 text-xs mx-1">_Measures</code> table created as a
                    single-row DAX table, keeping them separate from the fact tables.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-cyan-200 mb-2">DAX Measures</h3>
                  <p>
                    Core measures are scoped per fact table to preserve filter context:
                    <code className="text-cyan-300 text-xs mx-1">Total Oil BBL</code> and
                    <code className="text-cyan-300 text-xs mx-1">Total Gas MCF</code> from county cycle;
                    <code className="text-cyan-300 text-xs mx-1">Total Oil BBL (Field)</code> and
                    <code className="text-cyan-300 text-xs mx-1">Total Gas MCF (Field)</code> from field cycle;
                    operator-scoped equivalents from operator cycle. Well measures use
                    <code className="text-cyan-300 text-xs mx-1">CALCULATE + COUNTROWS</code> with an
                    <code className="text-cyan-300 text-xs mx-1">is_active</code> filter for active well counts.
                    YoY growth uses <code className="text-cyan-300 text-xs mx-1">SAMEPERIODLASTYEAR</code> over
                    the date dimension.
                  </p>

                  <pre className="bg-[#0a0f1a] border border-cyan-500/20 rounded-md p-3 text-[11px] overflow-x-auto text-cyan-200 mt-3">
{`YoY Oil Growth =
VAR CurrentYear = [Total Oil BBL]
VAR PriorYear =
    CALCULATE(
        [Total Oil BBL],
        SAMEPERIODLASTYEAR(dim_date[Date])
    )
RETURN
    DIVIDE(CurrentYear - PriorYear, PriorYear)

Active Wells =
CALCULATE(
    COUNTROWS(fact_wells),
    fact_wells[is_active] = 1
)`}
                  </pre>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-cyan-200 mb-2">Report Pages</h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <strong className="text-slate-200">Production Trends —</strong>{" "}
                      Dual-axis line charts for oil (BBL) and gas (MCF) over time, sorted on the
                      integer YearMonth key to enforce correct chronological order. Year and
                      oil/gas code slicers drive cross-page filtering.
                    </li>
                    <li>
                      <strong className="text-slate-200">Top Operators —</strong>{" "}
                      Horizontal bar charts from
                      <code className="text-cyan-300 text-xs mx-1">fact_operator_cycle</code> ranked
                      by oil and gas volume, with Top N filters in the Filters pane to surface the
                      20 highest-volume operators. Operator selection cross-filters all page visuals.
                    </li>
                    <li>
                      <strong className="text-slate-200">County Map —</strong>{" "}
                      Filled map choropleth using county names suffixed with ", Texas" to resolve
                      Power BI's geographic ambiguity. Color saturation driven by total oil BBL.
                      Offshore counties excluded via the
                      <code className="text-cyan-300 text-xs mx-1">is_offshore</code> flag to remove
                      the single misplaced point in Missouri.
                    </li>
                    <li>
                      <strong className="text-slate-200">Field Analysis —</strong>{" "}
                      Top fields bar chart from
                      <code className="text-cyan-300 text-xs mx-1">fact_field_cycle</code> with
                      district and field class slicers. Clicking a field cross-filters a secondary
                      line chart to show that field's full production history.
                    </li>
                    <li>
                      <strong className="text-slate-200">Drilling Permits —</strong>{" "}
                      Azure Maps scatter plot of actual drill locations using lat/long coordinates
                      from <code className="text-cyan-300 text-xs mx-1">fact_permits</code>, with donut
                      chart for well type breakdown and bar chart for top counties by permit count.
                    </li>
                  </ul>
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
