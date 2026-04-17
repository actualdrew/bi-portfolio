interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold capitalize">
        {slug.replace(/-/g, " ")}
      </h1>

      <p className="text-neutral-400 max-w-3xl">
        This is a placeholder project page. You can customize each project with:
        <br />• A description of the business problem
        <br />• Your modeling approach
        <br />• DAX / M transformations
        <br />• Power BI screenshots or embeds
        <br />• Architecture diagrams
      </p>

      <div className="aspect-video bg-neutral-900 rounded-xl border border-neutral-800 flex items-center justify-center">
        <p className="text-neutral-500">Power BI embed or screenshot goes here</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Technical Breakdown</h2>
        <ul className="list-disc list-inside text-neutral-400 space-y-1">
          <li>Star schema modeling</li>
          <li>Power Query transformations</li>
          <li>DAX measures</li>
          <li>Data pipeline architecture</li>
        </ul>
      </section>
    </div>
  )
}
