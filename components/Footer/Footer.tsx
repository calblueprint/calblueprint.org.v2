import {
  FaFacebookF,
  FaGithubAlt,
  FaInstagram,
  FaMedium,
  FaTwitter,
} from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import data from '@/data/external_links.json';
import blueprintLogo from '@/public/images/logo-white.png';

const FooterLink = ({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon?: React.ReactNode;
}) => (
  <Link
    className="text-bp-white/60 block font-sans-serif text-[15px] py-[3px] px-0 no-underline transition duration-150 hover:text-bp-white"
    href={href}
  >
    <div className="flex flex-row gap-2">
      {icon}
      {label}
    </div>
  </Link>
);

export default function Footer() {
  return (
    <div className="bg-dark-gray text-bp-white pt-[60px] px-0 pb-[30px]">
      <div className="flex flex-row flex-wrap justify-end max-w-[1200px] mx-auto px-[30px]">
        <div className="py-0 px-[15px] w-1/2 sm:w-[17%] mb-[40px] sm:mb-0 mr-auto opacity-70 pl-[15px] sm:pl-0 w-full sm:w-auto">
          <Image
            src={blueprintLogo}
            alt="blueprint logo"
            className="bg-contain bg-no-repeat float-left h-[30px] mr-[10px] w-[30px]"
          />
          <h3 className="font-poppins-roboto text-[21px] font-semibold float-left">
            blueprint
          </h3>
        </div>
        <div className="py-0 px-[15px] w-1/2 sm:w-[17%] mb-[30px] sm:m-0">
          <h4 className="text-bp-white/90 font-bptext text-[19px] font-semibold mb-[18px]">
            General
          </h4>
          <FooterLink href="/about" label="About" />
          <FooterLink href="/about#team" label="Team" />
          <FooterLink href="/projects" label="Projects" />
          <FooterLink href={data.email} label="Contact" />
          <FooterLink href={data.medium} label="Blog" />
        </div>
        <div className="py-0 px-[15px] w-1/2 sm:w-[17%] mb-[30px] sm:m-0">
          <h4 className="text-bp-white/90 font-bptext text-[19px] font-semibold mb-[18px]">
            Students
          </h4>
          <FooterLink href="/apply/students" label="Apply" />
          <FooterLink
            href="/apply/students#application-process"
            label="Process"
          />
          <FooterLink href="/apply/students#faqs" label="FAQs" />
        </div>
        <div className="py-0 px-[15px] w-1/2 sm:w-[17%] mb-[30px] sm:m-0">
          <h4 className="text-bp-white/90 font-bptext text-[19px] font-semibold mb-[18px]">
            Nonprofits
          </h4>
          <FooterLink href="/apply/nonprofits" label="Apply" />
          <FooterLink
            href="/apply/nonprofits#application-process"
            label="Process"
          />
          <FooterLink href="/apply/nonprofits#faqs" label="FAQs" />
        </div>
        <div className="py-0 px-[15px] w-1/2 sm:w-[17%] mb-[30px] sm:m-0">
          <h4 className="text-bp-white/90 font-bptext text-[19px] font-semibold mb-[18px]">
            Social Media
          </h4>
          <FooterLink
            href={data.facebook}
            label="Facebook"
            icon={<FaFacebookF className="my-auto" />}
          />
          <FooterLink
            href={data.twitter}
            label="Twitter"
            icon={<FaTwitter className="my-auto" />}
          />
          <FooterLink
            href={data.instagram}
            label="Instagram"
            icon={<FaInstagram className="my-auto" />}
          />
          <FooterLink
            href={data.github}
            label="Github"
            icon={<FaGithubAlt className="my-auto" />}
          />
          <FooterLink
            href={data.medium}
            label="Blog"
            icon={<FaMedium className="my-auto" />}
          />
        </div>
        <div className="container mx-auto px-[12px] text-bp-white/40 block text-left mt-[20px]">
          © Blueprint 2025
        </div>
      </div>
    </div>
  );
}
