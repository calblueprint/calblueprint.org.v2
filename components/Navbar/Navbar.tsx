import { FaBars } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import closeIcon from '@/public/images/icons/close.svg';
import whiteLogo from '@/public/images/logo-white.png';
import defaultLogo from '@/public/images/logo.png';

type NavbarProps = {
  theme: 'nav-white' | 'default';
};

// TODO: Add mobile nav bar state
export default function Navbar({ theme }: NavbarProps) {
  return (
    <nav className={`bp-nav ${theme}`}>
      <div className="container max-w-[1170px]">
        <div
          className="logo-container nav-link"
          style={{ animation: '400ms 700ms both slideDown' }}
        >
          <Link href="/">
            <div className="logo">
              <Image
                src={theme == 'nav-white' ? whiteLogo : defaultLogo}
                alt="blueprint logo"
              />
            </div>
            blueprint
          </Link>
        </div>
        <button className="mobile-nav-btn mobile-nav-show">
          <FaBars />
        </button>
        <ul className="link-container">
          <button className="mobile-nav-btn mobile-nav-close">
            <Image alt="close menu" src={closeIcon} />
          </button>
          <li
            className="nav-link"
            style={{ animation: '400ms 750ms both slideDown' }}
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className="nav-link"
            style={{ animation: '400ms 800ms both slideDown' }}
          >
            <Link href="/chapters">Chapters</Link>
          </li>
          <li
            className="nav-link"
            style={{ animation: '400ms 850ms both slideDown' }}
          >
            <Link href="/projects">Projects</Link>
          </li>
          <li
            className="nav-link"
            style={{ animation: '400ms 900ms both slideDown' }}
          >
            <Link href="https://medium.com/blueprint">Blog</Link>
          </li>
          <li
            className="nav-link"
            style={{ animation: '400ms 950ms both slideDown' }}
          >
            <Link href="/apply">Apply</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
