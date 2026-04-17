import Image from "next/image"
import Link from "next/link"

export default function ProjectCard({ title, description, image, slug }) {
  return (
    <Link href={`/projects/${slug}`}>
      <div className="border border-neutral-800 rounded-xl overflow-hidden hover:border-blue-500 transition">
        <Image src={image} width={800} height={500} alt={title} />
        <div className="p-4 space-y-2">
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-neutral-400 text-sm">{description}</p>
        </div>
      </div>
    </Link>
  )
}
