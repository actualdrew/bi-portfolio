export default function AboutPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">About Me</h1>

      <p className="text-neutral-400 max-w-3xl leading-relaxed">
        I'm a Senior Power BI Analyst and Data Pipeline Architect focused on 
        building clean, scalable analytics systems. My work blends data modeling, 
        automation, and polished UI/UX to create dashboards and insights that 
        actually drive decisions — not just look good.
      </p>

      <p className="text-neutral-400 max-w-3xl leading-relaxed">
        I specialize in Power BI, DAX, M transformations, semantic modeling, 
        and end‑to‑end data pipelines. I also build interactive mapping tools, 
        including geospatial analytics for commodity pricing and market 
        intelligence.
      </p>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">What I Focus On</h2>
        <ul className="list-disc list-inside text-neutral-400 space-y-1">
          <li>Clean, maintainable data models (star schema, semantic layers)</li>
          <li>Power BI dashboards with strong UI/UX and dark mode support</li>
          <li>DAX patterns, calculation groups, and performance tuning</li>
          <li>Data pipelines and automation for reliable refreshes</li>
          <li>Interactive geospatial analytics and mapping</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Outside of Work</h2>
        <p className="text-neutral-400 max-w-3xl leading-relaxed">
          I enjoy strategy games, modding, and building personal analytics tools 
          — including my own habit tracker and a full mapping engine for 
          commodity pricing. I like projects that combine data, design, and 
          engineering.
        </p>
      </section>
    </div>
  )
}
