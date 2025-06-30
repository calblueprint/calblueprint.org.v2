import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import "./linkAnimations.scss"; 

type HomepageLinkProps = {
  buttonText: string;
  href: string;
  className?: string;
};

export default function HomepageLink({
    buttonText,
    href,
    className = " ",
}: HomepageLinkProps) {
    return (
        // Animations are still imported from the css file in this folder in the homepage-link class
        <Link
            className={`homepage-link text-bp-blue inline-block font-bptext text-[22px] font-[500] pr-[5px] relative no-underline transition-all ease-in-out duration-300 hover:-translate-x-[2px] 
              before:content-[''] before:bg-bp-blue/10 before:block before:absolute before:left-[10px] before:-bottom-[2px] before:h-[20px] before-w-0 
              after:content-[''] after:bg-bp-blue/10 after:block after:absolute after:-right-[10px] after:-bottom-[2px] after:h-[20px] after-w-0
              hover:before:w-full hover:after:w-full hover:after:bg-transparent
              ${className}`}
            href={href}
        >
            <div className="flex flex-row">
                {buttonText}
                <FaAngleRight className="my-auto font-normal" />
            </div>
        </Link>
    )
}