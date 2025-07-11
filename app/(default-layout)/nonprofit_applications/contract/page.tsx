import Markdown from 'react-markdown';
import { contract } from '@/data/contract';

// Custom components to render HTML elements in Markdown with Tailwind styles
const markdownComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="font-bptext text-[28pt] font-bold mt-[20px] text-dark-gray"
      {...props}
    >
      {props.children}
    </h1>
  ),

  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="font-bptext text-[32px] font-bold mt-[20px] text-dark-gray"
      {...props}
    >
      {props.children}
    </h2>
  ),

  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="font-bptext text-[24px] font-bold mt-[20px] text-dark-gray"
      {...props}
    >
      {props.children}
    </h3>
  ),

  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className="font-bptext font-bold mt-[20px] text-dark-gray" {...props}>
      {props.children}
    </h4>
  ),

  h5: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5 className="font-bptext font-bold mt-[20px] text-dark-gray" {...props}>
      {props.children}
    </h5>
  ),

  h6: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6 className="font-bptext font-bold mt-[20px] text-dark-gray" {...props}>
      {props.children}
    </h6>
  ),

  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-dark-gray/70 mb-[10px]" {...props}>
      {props.children}
    </p>
  ),

  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img className="max-w-[250px]" {...props} />
  ),

  em: (props: React.HTMLAttributes<HTMLElement>) => (
    <em className="italic" {...props}>
      {props.children}
    </em>
  ),

  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-inside" {...props}>
      {props.children}
    </ul>
  ),

  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="text-dark-gray/70 mb-[5px]" {...props}>
      {props.children}
    </li>
  ),
};

export default function ContractPage() {
  return (
    <div className="max-w-[900px] mx-auto p-[30px]">
      <Markdown components={markdownComponents}>{contract}</Markdown>
    </div>
  );
}
