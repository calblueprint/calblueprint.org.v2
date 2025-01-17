import { FaAngleRight } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectData } from '@/app/(hero-layout)/projects/page';
import ProjectDescription from '@/components/ProjectDescription/ProjectDescription';
import projects from '@/data/projects.json';

type ProjectDetailsPageProps = {
  params: Promise<{ name: string }>;
};

export async function generateStaticParams() {
  return Object.keys(projects.projects.projects_list).map(name => ({
    name: name,
  }));
}

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const { name } = await params;
  const projectList = projects.projects.projects_list;

  const data = projectList[name as keyof typeof projectList] as ProjectData;
  let imageSrc = data.banner_image;
  if (!data.banner_image.includes('http')) {
    imageSrc = '/' + data.banner_image;
  }

  return (
    <>
      <div className="container project-article-container marginTop-xl">
        <h1 className="static-page-header marginBot-md">{data.title}</h1>
        <p>{data.short_summary}</p>
        <div className="project-article-links-container marginBot-md">
          <Link className="homepage-link" href={data.org_link ?? ''}>
            <div className="flex flex-row">
              Learn More
              <FaAngleRight className="my-auto font-normal" />
            </div>
          </Link>
        </div>
      </div>

      <div className="project-article-img-container">
        <div className="img-container relative">
          <Image
            className=""
            sizes="100vw"
            fill
            src={imageSrc}
            alt={data.title}
            objectFit="contain"
          />
        </div>
      </div>

      <ProjectDescription description={data.full_description} />
    </>
  );
}
