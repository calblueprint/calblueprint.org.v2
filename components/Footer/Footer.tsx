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

export default function Footer() {
  return (
    <div className="bp-footer">
      <div className="container max-w-[1200px] mx-auto px-[30px]">
        <div className="footer-col footer-logo">
          <Image src={blueprintLogo} alt="blueprint logo" className="logo" />
          <h3>blueprint</h3>
        </div>
        <div className="footer-col">
          <h4 className="footer-header">General</h4>
          <Link className="footer-link" href="/about">
            About
          </Link>
          <Link className="footer-link" href="/about#team">
            Team
          </Link>
          <Link className="footer-link" href="/projects">
            Projects
          </Link>
          <Link className="footer-link" href={data.email}>
            Contact
          </Link>
          <Link className="footer-link" href={data.medium}>
            Blog
          </Link>
        </div>
        <div className="footer-col">
          <h4 className="footer-header">Students</h4>
          <Link className="footer-link" href="/apply/students">
            Apply
          </Link>
          <Link
            className="footer-link"
            href="/apply/students#application-process"
          >
            Process
          </Link>
          <Link className="footer-link" href="/apply/students#faqs">
            FAQs
          </Link>
        </div>
        <div className="footer-col">
          <h4 className="footer-header">Nonprofits</h4>
          <Link className="footer-link" href="/apply/nonprofits">
            Apply
          </Link>
          {/* <Link className="footer-link" href="/nonprofits/sign_in"> */}
          {/*   Login */}
          {/* </Link> */}
          <Link
            className="footer-link"
            href="/apply/nonprofits#application-process"
          >
            Process
          </Link>
          <Link className="footer-link" href="/apply/nonprofits#faqs">
            FAQs
          </Link>
        </div>
        <div className="footer-col">
          <h4 className="footer-header">Social Media</h4>
          <Link className="footer-link" href={data.facebook}>
            <div className="flex flex-row gap-2">
              <FaFacebookF className="my-auto" />
              Facebook
            </div>
          </Link>
          <Link className="footer-link" href={data.twitter}>
            <div className="flex flex-row gap-2">
              <FaTwitter className="my-auto" />
              Twitter
            </div>
          </Link>
          <Link className="footer-link" href={data.instagram}>
            <div className="flex flex-row gap-2">
              <FaInstagram className="my-auto" />
              Instagram
            </div>
          </Link>
          <Link className="footer-link" href={data.github}>
            <div className="flex flex-row gap-2">
              <FaGithubAlt className="my-auto" />
              Github
            </div>
          </Link>
          <Link className="footer-link" href={data.medium}>
            <div className="flex flex-row gap-2">
              <FaMedium className="my-auto" />
              Blog
            </div>
          </Link>
        </div>
        <div className="container footer-copyright">© Blueprint 2025</div>
      </div>
    </div>
  );
}
