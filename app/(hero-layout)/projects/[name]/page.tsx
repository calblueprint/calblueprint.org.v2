import projects from '@/data/projects.json';

type ProjectDetailsPageProps = {
  params: Promise<{ name: string }>;
};

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const { name } = await params;
  const projectList = projects.projects.projects_list;

  const data = projectList[name as keyof typeof projectList];

  return (
    <div className="container project-article-container marginTop-xl">
      <h1 className="static-page-header marginBot-md">{name}</h1>
      <p>
        Our City Forest is the leading nonprofit in Silicon Valley for urban
        forestry and environmental education. They provide drought-tolerant
        trees to local residents, schools, and parks, and have a nursery where
        they educate their community on how to plant and care for trees.
      </p>
      <div className="project-article-links-container marginBot-md">
        <a
          className="homepage-link"
          target="_blank"
          href="https://www.ourcityforest.org/home-programs"
        >
          Learn More
          <span className="fa fa-angle-right" />
        </a>
      </div>
    </div>
  );
}
