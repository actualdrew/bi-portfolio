import ProjectCard from "@/components/ProjectCard"

export default function Home() {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-3xl font-bold mb-4">Data & BI Portfolio</h2>
        <p className="text-neutral-400 max-w-2xl">
          I build clean, scalable analytics systems — from data pipelines to 
          polished Power BI dashboards. Below are selected projects showcasing 
          modeling, DAX, M transformations, and interactive reporting.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard
          title="Halo Maps – Interactive US Steel Pricing"
          description="Geospatial analytics, commodity pipelines, correlation modeling."
          image="/images/project1.png"
          slug="halo-maps"
        />

        <ProjectCard
          title="Product Alias Resolution Engine"
          description="Automated normalization, fuzzy matching, and canonical mapping."
          image="/images/project2.png"
          slug="alias-engine"
        />
      </section>
    </div>
  )
}
