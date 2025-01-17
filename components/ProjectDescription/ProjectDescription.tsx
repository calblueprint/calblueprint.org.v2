import Markdown from 'react-markdown';

type ProjectDescriptionProps = {
  description: string;
};

export default function ProjectDescription({
  description,
}: ProjectDescriptionProps) {
  return (
    <div className="container project-article-container marginBot-xxxl">
      <Markdown>{description}</Markdown>
    </div>
  );
}
