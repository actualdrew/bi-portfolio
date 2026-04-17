import ProjectCard from "@/components/ProjectCard"

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold">Projects</h1>

      <p className="text-neutral-400 max-w-2xl">
        A collection of analytics, engineering, and Power BI projects. Each one
        includes a breakdown of the business problem, data modeling approach,
        DAX/M transformations, and final visuals.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard
          title="Halo Maps – Interactive US Steel Pricing"
          description="Geospatial analytics, commodity pipelines, correlation modeling."
          image="/images/project1.jpg"
          slug="halo-maps"
        />

        <ProjectCard
          title="Product Alias Resolution Engine"
          description="Automated normalization, fuzzy matching, and canonical mapping."
          image="/images/project2.jpg"
          slug="alias-engine"
        />
      </div>
    </div>
  )
}
