import Image from 'next/image';
import blueprintLogo from '@/public/images/logo-white.png';

export default function Footer() {
  return (
    <div className="bp-footer">
      <div className="container">
        <div className="footer-col footer-logo">
          <Image src={blueprintLogo} alt="blueprint logo" className="logo" />
          <h3>blueprint</h3>
        </div>
        <div className="footer-col">
          <h4 className="footer-header">General</h4>
          <a className="footer-link" href="/about">
            About
          </a>
          <a className="footer-link" href="/about#team">
            Team
          </a>
          <a className="footer-link" href="/projects">
            Projects
          </a>
          <a className="footer-link" href="/contact_forms/new">
            Contact
          </a>
          <a
            target="_blank"
            className="footer-link"
            href="https://medium.com/blueprint"
          >
            Blog
          </a>
        </div>
        <div className="footer-col">
          <h4 className="footer-header">Students</h4>
          <a className="footer-link" href="/apply/students">
            Apply
          </a>
          <a className="footer-link" href="/apply/students#application-process">
            Process
          </a>
          <a className="footer-link" href="/apply/students#faqs">
            FAQs
          </a>
        </div>
        <div className="footer-col">
          <h4 className="footer-header">Nonprofits</h4>
          <a className="footer-link" href="/apply/nonprofits">
            Apply
          </a>
          <a className="footer-link" href="/nonprofits/sign_in">
            Login
          </a>
          <a
            className="footer-link"
            href="/apply/nonprofits#application-process"
          >
            Process
          </a>
          <a className="footer-link" href="/apply/nonprofits#faqs">
            FAQs
          </a>
        </div>
        <div className="footer-col">
          <h4 className="footer-header">Social Media</h4>
          <a
            className="footer-link"
            target="_blank"
            href="https://www.facebook.com/calblueprint"
          >
            <i className="fa fa-facebook-f" />
            Facebook
          </a>
          <a
            className="footer-link"
            target="_blank"
            href="https://twitter.com/calblueprint"
          >
            <i className="fa fa-twitter" />
            Twitter
          </a>
          <a
            className="footer-link"
            target="_blank"
            href="https://github.com/calblueprint/"
          >
            <i className="fa fa-github-alt" />
            Github
          </a>
          <a
            className="footer-link"
            target="_blank"
            href="https://medium.com/blueprint"
          >
            <i className="fa fa-medium" />
            Blog
          </a>
        </div>
      </div>
      <div className="container footer-copyright">© Blueprint 2025</div>
    </div>
  );
}
