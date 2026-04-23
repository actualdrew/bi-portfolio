export default function HaloMapsPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      
      {/* HERO SECTION */}
      <section className="w-full py-24 px-6 border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 tracking-tight">
            Halo Maps
          </h1>
          <p className="text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
            A geospatial market analysis tool built with Power BI, Azure Maps, 
            and custom DAX logic — designed for population, density, and 
            metro‑area insights.
          </p>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="w-full py-12 px-6 flex justify-center">
        <div className="w-full max-w-[1400px] rounded-xl overflow-hidden shadow-2xl border border-white/10">
          <img
            src="/images/halo_map.png"
            alt="Halo Maps Dashboard Screenshot"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* EMBED SECTION */}
      <section className="w-full py-20 px-6 flex justify-center border-t border-white/10">
        <div className="w-full max-w-[1400px] rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#0e0e0e]">
          <iframe
            title="Halo Maps Report"
            width="100%"
            height="850"
            src="YOUR_EMBED_URL_HERE"
            allowFullScreen
            style={{ border: "none" }}
          />
        </div>
      </section>

      {/* PROJECT OVERVIEW */}
      <section className="w-full py-20 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Project Overview</h2>
          <p className="text-white/70 leading-relaxed text-lg">
            Halo Maps is an interactive geospatial engine that allows users to 
            explore population, density, and city characteristics using radius, 
            metro, and city/state modes. The tool includes dynamic GPT‑style 
            insights, a polished dark‑mode UI, and a fully responsive Azure Maps 
            experience.
          </p>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="w-full py-20 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10">Key Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold mb-3">Multi‑Mode Engine</h3>
              <p className="text-white/70">
                Radius mode, metro mode, and city/state mode powered by dynamic 
                Haversine distance calculations.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold mb-3">GPT‑Style Insights</h3>
              <p className="text-white/70">
                Automatically generated narratives with bolded metrics, deep‑dive 
                analysis, and density insights.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold mb-3">Dark‑Mode UI</h3>
              <p className="text-white/70">
                A polished, app‑like interface with stylized insight cards, neon 
                map markers, and clean visual hierarchy.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* TECHNICAL SECTION */}
      <section className="w-full py-20 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Technical Breakdown</h2>
          <ul className="space-y-4 text-white/70 text-lg leading-relaxed">
            <li>
              <strong className="text-white">Data Engineering:</strong> 
              SimpleMaps dataset, transformations, distance calculations, mode logic.
            </li>
            <li>
              <strong className="text-white">DAX Logic:</strong> 
              WithinRadius engine, Selected_Radius logic, GPT narrative generator, dynamic bolding.
            </li>
            <li>
              <strong className="text-white">UI/UX:</strong> 
              3‑card insight strip, dark‑mode palette, map styling, marker clustering.
            </li>
            <li>
              <strong className="text-white">Architecture:</strong> 
              Power BI, Azure Maps, Next.js, Vercel.
            </li>
          </ul>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="w-full py-24 px-6 border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Interested in this project?</h2>
          <p className="text-white/70 text-lg mb-8">
            Halo Maps demonstrates my approach to building polished, scalable BI 
            applications with strong engineering and UX foundations.
          </p>
        </div>
      </section>

    </main>
  );
}
