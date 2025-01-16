type ProjectCardProps = {
  name: string;
  banner_image: string;
  title: string;
  short_summary: string;
  color: string;
};

export default function ProjectCard({
  name,
  banner_image,
  title,
  short_summary,
  color,
}: ProjectCardProps) {
  return (
    <div className="project-card-column">
      <a className="project-card" href={`/projects/${name}`}>
        <div
          className="project-card--image"
          style={{
            backgroundImage: `url(${banner_image})`,
          }}
        />
        <h3 className="project-card--title">{title}</h3>
        <p className="project-card--summary">{short_summary}</p>
        <div className="card-button" style={{ color: `#${color}` }}>
          Read More
        </div>
      </a>
    </div>
  );
}
