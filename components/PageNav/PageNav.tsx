import Link from 'next/link';

type Section = {
  text: string;
  href: string; // Used to scroll to the section
};

type PageNavProps = {
  sections: Section[];
};

export default function PageNav({ sections }: PageNavProps) {
  return (
    <div className="container">
      <ul>
        {sections.map(({ text, href }, i) => (
          <a key={i} href={href} className="scroll-smooth">
            <li className="page-nav-link">{text}</li>
          </a>
        ))}
      </ul>
    </div>
  );
}
