import { FaBars } from 'react-icons/fa';
import Image from 'next/image';
import closeIcon from '@/public/images/icons/close.svg';
import blueprintLogo from '@/public/images/logo-white.png';

// TODO: Add mobile nav bar state
export default function Navbar() {
  return (
    <nav className="bp-nav nav-white">
      <div className="container">
        <div
          className="logo-container nav-link"
          style={{ animation: '400ms 700ms both slideDown' }}
        >
          <a href="/">
            <div className="logo">
              <Image src={blueprintLogo} alt="blueprint logo" />
            </div>
            blueprint
          </a>
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
            <a href="/about">About</a>
          </li>
          <li
            className="nav-link"
            style={{ animation: '400ms 800ms both slideDown' }}
          >
            <a href="/chapters">Chapters</a>
          </li>
          <li
            className="nav-link"
            style={{ animation: '400ms 850ms both slideDown' }}
          >
            <a href="/projects">Projects</a>
          </li>
          <li
            className="nav-link"
            style={{ animation: '400ms 900ms both slideDown' }}
          >
            <a target="_blank" href="https://medium.com/blueprint">
              Blog
            </a>
          </li>
          <li
            className="nav-link"
            style={{ animation: '400ms 950ms both slideDown' }}
          >
            <a href="/apply">Apply</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
