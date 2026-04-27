import { Metadata } from 'next';
import Hero from '@/components/Hero/Hero';
import HeroButton from '@/components/HeroButton/HeroButton';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import externalLinks from '@/data/external_links.json';
import projects from '@/data/projects.json';
import heroImage from '@/public/images/projects/background.png';
import BPButton from '@/components/Button/Button';

export const metadata: Metadata = {
  title: 'Projects | Blueprint',
};

export type ProjectData = {
  status: 'current' | 'past';
  title: string;
  short_summary: string;
  org_link: string;
  color: string;
  banner_image: string;
  full_description: string;
  blurb?: string;
};

export default function ProjectsPage() {
  const projectList = projects.projects.projects_list;

  return (
    <>
      {/* <Hero
        title={'Our Projects'}
        body={
          'All of Blueprint’s work is open source because we believe in building technology that makes us more open and connected.'
        }
        action={
          <HeroButton
            buttonText={'View Our Github'}
            buttonLink={externalLinks.github}
            className="mt-[40px]"
          />
        }
        heroImage={heroImage}
        className={'bg-center bg-cover bg-no-repeat relative'}
      /> */}
      <div className='flex flex-col gap-[36px] px-14 pt-28 pb-14 bg-gray-50'>
        <p className='text-bp-500 font-poppins text-7xl font-semibold leading-11 tracking-normal'>
          Our Projects
        </p>
        <p className='text-slate-500 font-inter text-4xl font-normal leading-8 tracking-normal'>
          All of Blueprint’s work is open source because we believe in building technology that makes us more open and connected.
        </p>
        <div className='w-[143px]'>
          <BPButton 
            buttonText='GitHub →'
            href={externalLinks.github}
          />
        </div>
      </div>

      <section className="bg-gray-50 py-[50px] px-0">
        <div className="max-w-[1200px] mx-auto px-[30px]">
          <div className="grid grid-cols-3 gap-[56px]">
            {Object.keys(projectList).map(name => {
              const projectData = projectList[
                name as keyof typeof projectList
              ] as ProjectData;

              if (projectData.status !== 'current') return null;
              return (
                <ProjectCard
                  key={name}
                  name={name}
                  banner_image={projectData.banner_image}
                  title={projectData.title}
                  tags={["Mobile", "Hardware", "Machine Learning"]}
                  short_summary={projectData.short_summary}
                  color={projectData.color}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-[50px] px-0">
        <div className="max-w-[1200px] mx-auto px-[30px]">
          <h2 className="font-poppins text-4xl text-bp-700 font-medium leading-7 tracking-normal mb-[48px]">
            PAST PROJECTS
          </h2>
          <div className="grid grid-cols-3 gap-[56px]">
            {Object.keys(projectList).map(name => {
              const projectData = projectList[
                name as keyof typeof projectList
              ] as ProjectData;

              if (projectData.status === 'current') return null;
              return (
                <ProjectCard
                  key={name}
                  name={name}
                  banner_image={projectData.banner_image}
                  title={projectData.title}
                  short_summary={projectData.short_summary}
                  color={projectData.color}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
