import { FaAngleRight } from 'react-icons/fa';
import Link from 'next/link';
import './linkAnimations.scss';

type HomepageLinkProps = {
  buttonText: string;
  href: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function HomepageLink({
  buttonText,
  href,
  className = ' ',
  style = {},
}: HomepageLinkProps) {
  return (
    // TODO: Animations are no longer working after migrating to Tailwind, investigate if possible
    // Animation video: https://www.loom.com/share/6ceb7c1aa7844991977a82481ea0802d?sid=14ecc7c6-4c17-417c-a8ed-2e1fd51212b3
    // Reference previous versions of calblueprint.org on GitHub to see original code
    <Link
      className={`homepage-link text-bp-blue inline-block font-bptext text-[22px] font-[500] pr-[5px] relative no-underline hover:-translate-x-[2px] 
              before:content-[''] before:bg-bp-blue/10 before:block before:absolute before:left-[10px] before:-bottom-[2px] before:h-[20px] before-w-0 
              after:content-[''] after:bg-bp-blue/10 after:block after:absolute after:-right-[10px] after:-bottom-[2px] after:h-[20px] after-w-0
              ${className}`}
      href={href}
      style={style}
    >
      <div className="flex flex-row">
        {buttonText}
        <FaAngleRight className="my-auto font-normal" />
      </div>
    </Link>
  );
}
