type Section = {
  text: string;
  sectionScrollHref: string; // Used to scroll to the section
};

type PageNavProps = {
  sections: Section[];
};

export default function PageNav({ sections }: PageNavProps) {
  return (
    <div className="container">
      <ul>
        {sections.map(({ text, sectionScrollHref }, i) => (
          <li
            key={i}
            className="page-nav-link"
            section-name={sectionScrollHref}
          >
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}
