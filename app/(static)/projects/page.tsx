import Hero from '@/components/Hero/Hero';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import projects from '@/data/projects.json';
import heroImage from '@/public/images/projects/background.png';

type ProjectData = {
  status: 'current' | 'past';
  title: string;
  short_summary: string;
  org_link: string;
  color: string;
  banner_image: string;
  full_description: string;
};

export default function ProjectsPage() {
  const title = 'Our Projects';
  const body =
    'All of Blueprint’s work is open source because we believe in building technology that makes us more open and connected.';
  const buttonText = 'View Our Github';
  const buttonLink = 'https://github.com/calblueprint/';
  const projectList = projects.projects.projects_list;

  return (
    <>
      <Hero
        title={title}
        body={body}
        buttonText={buttonText}
        buttonLink={buttonLink}
        heroImage={heroImage}
        className={'static-page-hero chapter-overview-hero'}
      />

      <section className="current-projects-section">
        <div className="max-w-[1200px] mx-auto px-[30px]">
          <h2 className="static-page-header marginBot-xxl">Current Projects</h2>
          <div className="project-card-container">
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
                  short_summary={projectData.short_summary}
                  color={projectData.color}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="past-projects-section">
        <div className="max-w-[1200px] mx-auto px-[30px]">
          <h2 className="static-page-header marginBot-xxl">Past Projects</h2>
          <div className="project-card-container">
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
