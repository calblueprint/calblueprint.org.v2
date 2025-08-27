import Markdown from 'react-markdown';

type HeroMessageProps = {
  text: string;
};

// Custom markdown component to format links in markdown text
const markdownComponents = {
  a: ({
    children,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-bp-white underline"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  ),
};

export default function HeroMessage({ text }: HeroMessageProps) {
  return (
    <div
      className="animate-slideLeft mt-[40px]"
      style={{ animationDelay: '0.4s' }}
    >
      <div>
        <Markdown
          components={markdownComponents}
          className="text-bp-white text-[18px] font-medium max-w-[700px] mb-[20px]"
        >
          {text}
        </Markdown>
      </div>
    </div>
  );
}
