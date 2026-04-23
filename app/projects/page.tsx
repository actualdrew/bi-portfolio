import Link from "next/link"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white px-6 py-24">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold tracking-tight mb-4">Projects</h1>
        <p className="text-lg text-white/70">
          A collection of analytics, engineering, and BI applications showcasing
          geospatial modeling, data pipelines, and polished UI/UX design.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* HALO MAPS */}
        <Link
          href="/projects/halo-maps"
          className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
        >
          <h2 className="text-2xl font-semibold mb-2 group-hover:text-white">
            Halo Maps
          </h2>
          <p className="text-white/60">
            A geospatial market analysis tool built with Power BI, Azure Maps,
            and custom DAX logic. Includes multi‑mode radius analysis and GPT‑style insights.
          </p>
        </Link>

        {/* ADD MORE PROJECTS HERE */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10 opacity-40">
          <h2 className="text-2xl font-semibold mb-2">Coming Soon</h2>
          <p className="text-white/60">
            Additional BI and engineering projects will appear here.
          </p>
        </div>

      </div>
    </main>
  )
}
