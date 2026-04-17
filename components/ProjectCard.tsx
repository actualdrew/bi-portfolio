import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  slug: string
}

export default function ProjectCard({
  title,
  description,
  image,
  slug
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`}>
      <div className="border border-neutral-800 rounded-xl overflow-hidden hover:border-blue-400 transition">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="object-cover w-full h-48"
        />
        <div className="p-4 space-y-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-neutral-400 text-sm">{description}</p>
        </div>
      </div>
    </Link>
  )
}
