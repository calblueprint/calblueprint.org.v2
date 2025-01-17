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
          <Link key={i} href={href}>
            <li className="page-nav-link">{text}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
