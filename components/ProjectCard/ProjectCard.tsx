import Image from 'next/image';
import Link from 'next/link';
import { env } from '@/env.mjs';

type ProjectCardProps = {
  name: string;
  banner_image: string;
  title: string;
  short_summary: string;
  color: string;
};

export default async function ProjectCard({
  name,
  banner_image,
  title,
  short_summary,
  color,
}: ProjectCardProps) {
  let imageSrc = banner_image;
  if (!banner_image.includes('http')) {
    imageSrc = env.NEXT_PUBLIC_BASE_PATH + '/' + banner_image;
  }

  return (
    <div className="project-card-column">
      <Link className="project-card" href={`/projects/${name}`}>
        <div className="project-card--image flex justify-center align-middle relative">
          <Image
            className=""
            sizes="100vw"
            fill
            src={imageSrc}
            alt={name}
            objectFit="contain"
          />
        </div>
        <h3 className="project-card--title">{title}</h3>
        <p className="project-card--summary">{short_summary}</p>
        <div className="card-button" style={{ color: `#${color}` }}>
          Read More
        </div>
      </Link>
    </div>
  );
}
