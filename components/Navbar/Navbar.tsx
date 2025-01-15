import { FaBars } from 'react-icons/fa';
import Image from 'next/image';
import closeIcon from '@/public/images/icons/close.svg';
import blueprintLogo from '@/public/images/logo-white.png';
import styles from './Navbar.module.scss';

export default function NavBar() {
  return (
    <nav className={`${styles.navWhite} ${styles.bpNav}`}>
      <div className={styles.container}>
        <div
          className={`${styles.logoContainer} ${styles.navLink}`}
          style={{ animation: '400ms 700ms both slideDown' }}
        >
          <a href="/">
            <Image
              src={blueprintLogo}
              alt="blueprint logo"
              className={styles.logo}
            />
            blueprint
          </a>
        </div>
        <button className={`${styles.mobileNavBtn} ${styles.mobileNavShow}`}>
          <FaBars />
        </button>
        <ul className={styles.linkContainer}>
          <button className={`${styles.mobileNavBtn} ${styles.mobileNavClose}`}>
            <Image alt="close menu" src={closeIcon} />
          </button>
          <li
            className={styles.navLink}
            style={{ animation: '400ms 750ms both slideDown' }}
          >
            <a href="/about">About</a>
          </li>
          <li
            className={styles.navLink}
            style={{ animation: '400ms 800ms both slideDown' }}
          >
            <a href="/chapters">Chapters</a>
          </li>
          <li
            className={styles.navLink}
            style={{ animation: '400ms 850ms both slideDown' }}
          >
            <a href="/projects">Projects</a>
          </li>
          <li
            className={styles.navLink}
            style={{ animation: '400ms 900ms both slideDown' }}
          >
            <a target="_blank" href="https://medium.com/blueprint">
              Blog
            </a>
          </li>
          <li
            className={styles.navLink}
            style={{ animation: '400ms 950ms both slideDown' }}
          >
            <a href="/apply">Apply</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
