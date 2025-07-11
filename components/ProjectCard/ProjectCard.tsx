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
    <div className="mb-[40px] p-0 sm:py-0 sm:px-[20px] w-full sm:w-1/2 lg:w-1/3">
      <Link
        className="flex h-full bg-white flex-col flex-wrap pb-[20px] no-underline transition duration-200 hover:bg-white hover:shadow-project-card-hover hover:-translate-y-[5px]"
        href={`/projects/${name}`}
      >
        <div className="bg-cover bg-center bg-no-repeat h-[200px] mb-[20px] w-full flex justify-center align-middle relative">
          <Image
            className=""
            sizes="100vw"
            fill
            src={imageSrc}
            alt={name}
            objectFit="contain"
          />
        </div>
        <h3 className="text-black font-bptext text-[23px] font-semibold mt-0 mb-[20px] mx-[20px]">
          {title}
        </h3>
        <p className="text-dark-gray/70 pt-0 px-[20px] pb-[20px]">
          {short_summary}
        </p>
        <div
          className="font-bptext text-[18px] font-semibold my-0 mx-[20px] mt-auto"
          style={{ color: `#${color}` }}
        >
          Read More
        </div>
      </Link>
    </div>
  );
}
