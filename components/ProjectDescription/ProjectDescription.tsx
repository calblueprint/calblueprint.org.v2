import Markdown from 'react-markdown';

type ProjectDescriptionProps = {
  description: string;
};

// Custom components to render HTML elements in Markdown w/ tailwind styles
const markdownComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="font-bptext text-[30px] font-semibold mb-[20px]" {...props}>
      {props.children}
    </h2>
  ),

  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className="text-dark-gray/70 text-[20px] leading-[1.6] mb-[30px]"
      {...props}
    >
      {props.children}
    </p>
  ),
};

export default function ProjectDescription({
  description,
}: ProjectDescriptionProps) {
  return (
    <div className="container px-[12px] mx-auto max-w-[700px] last:pb-[60px] mb-[68px]">
      <Markdown components={markdownComponents}>{description}</Markdown>
    </div>
  );
}
