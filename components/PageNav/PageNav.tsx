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
          <li key={i} className="page-nav-link" section-name={href}>
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}
