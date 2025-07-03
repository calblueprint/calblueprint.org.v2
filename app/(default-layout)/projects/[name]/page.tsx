import { FaAngleRight } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectData } from '@/app/(hero-layout)/projects/page';
import HomepageLink from '@/components/HomepageLink/HomepageLink';
import ProjectDescription from '@/components/ProjectDescription/ProjectDescription';
import projects from '@/data/projects.json';
import { env } from '@/env.mjs';

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
    imageSrc = env.NEXT_PUBLIC_BASE_PATH + '/' + data.banner_image;
  }

  return (
    <>
      <div className="container mx-auto px-[12px] max-w-[700px] mt-[40px] last:pb-[60px]">
        <h1 className="font-bptext text-[28px] sm:text-[36px] font-semibold mb-[24px]">
          {data.title}
        </h1>
        <p className="text-dark-gray/70 text-[20px] leading-[1.6] mb-[30px]">
          {data.short_summary}
        </p>
        <div className="mb-[24px]">
          <HomepageLink buttonText="Learn More" href={data.org_link ?? ''} />
        </div>
      </div>

      <div className="mt-[40px] mx-auto mb-[60px] max-w-[900px]">
        <div className="rounded-[4px] h-[400px] shadow-project-description relative">
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
