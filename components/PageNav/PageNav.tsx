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
    <div className="self-center relative z-5">
      <ul className="flex flex-row flex-wrap justify-center">
        {sections.map(({ text, href }, i) => (
          <Link key={i} href={href}>
            <li className="text-bp-white cursor-pointer text-[19px] font-medium font-bptext mx-[5px] py-[15px] px-[10px]">
              {text}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
