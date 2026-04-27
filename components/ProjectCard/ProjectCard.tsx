import Image from 'next/image';
import Link from 'next/link';
import { env } from '@/env.mjs';

type ProjectCardProps = {
  name: string;
  banner_image: string;
  title: string;
  short_summary: string;
  tags?: string[];
  color: string;
};

type ProjectTagProps = {
  text: string;
};

function ProjectTag({text}: ProjectTagProps) {
  return (
    <div className='flex py-[6px] px-[8px] justify-center items-center gap-[10px] rounded-lg bg-bp-100'>
      <p className='text-bp-500 font-poppins text-base font-medium no-italics leading-3 tracking-normal'>{text}</p>
    </div>
  )
}

export default async function ProjectCard({
  name,
  banner_image,
  title,
  short_summary,
  tags = [],
  color,
}: ProjectCardProps) {
  let imageSrc = banner_image;
  if (!banner_image.includes('http')) {
    imageSrc = env.NEXT_PUBLIC_BASE_PATH + '/' + banner_image;
  }

  return (
    <div className='flex flex-col w-full items-start rounded-lg bg-white'>
      <div className="bg-cover bg-center bg-no-repeat h-[312px] w-full flex justify-center align-middle relative">
        <Image
          className=""
          sizes="100vw"
          fill
          src={imageSrc}
          alt={name}
          objectFit="contain"
        />
      </div>
      <div className='flex flex-col p-[20px]'>
        <div className='flex flex-row mb-[24px] gap-[10px]'>
          {tags.map((tag) => (
            <ProjectTag key={tag} text={tag} />
          ))}
        </div>
        <p className='text-black font-poppins text-3xl font-semibold no-italics leading-7 tracking-normal mb-[12px]'>
          {title}
        </p>
        <p className='text-slate-600 font-inter text-lg font-light no-italics leading-4 tracking-normal'>
          {short_summary}
        </p>
      </div>
    </div>
    // <div className="mb-[40px] p-0 sm:py-0 sm:px-[20px] w-full sm:w-1/2 lg:w-1/3">
    //   <Link
    //     className="flex h-full bg-white flex-col flex-wrap pb-[20px] no-underline transition duration-200 hover:bg-white hover:shadow-project-card-hover hover:-translate-y-[5px]"
    //     href={`/projects/${name}`}
    //   >
    //     <div className="bg-cover bg-center bg-no-repeat h-[200px] mb-[20px] w-full flex justify-center align-middle relative">
    //       <Image
    //         className=""
    //         sizes="100vw"
    //         fill
    //         src={imageSrc}
    //         alt={name}
    //         objectFit="contain"
    //       />
    //     </div>
    //     <h3 className="text-black font-bptext text-[23px] font-semibold mt-0 mb-[20px] mx-[20px]">
    //       {title}
    //     </h3>
    //     <p className="text-dark-gray/70 pt-0 px-[20px] pb-[20px]">
    //       {short_summary}
    //     </p>
    //     <div
    //       className="font-bptext text-[18px] font-semibold my-0 mx-[20px] mt-auto"
    //       style={{ color: `#${color}` }}
    //     >
    //       Read More
    //     </div>
    //   </Link>
    // </div>
  );
}
