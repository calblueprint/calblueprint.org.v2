'use client';

import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import externalLinks from '@/data/external_links.json';
import closeIcon from '@/public/images/icons/close.svg';
import whiteLogo from '@/public/images/logo-white.png';
import defaultLogo from '@/public/images/logo.png';

type NavbarProps = {
  variant: 'nav-white' | 'default';
};

// TODO: Add mobile nav bar state
export default function Navbar({ variant }: NavbarProps) {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <nav
      className={`block py-[15px] px-0 z-[10] ${variant === 'nav-white' && 'absolute'} w-full top-0 left-0`}
    >
      <div className="flex flex-row flex-wrap items-center container mx-auto px-[12px] max-w-[1170px]">
        <div
          className="font-poppins-roboto text-[20px] transition duration-100 hover:opacity-100 animate-none"
          style={{ animation: '400ms 700ms both slideDown' }}
        >
          <Link
            href="/"
            className={`${variant === 'default' ? 'text-bp-blue' : 'text-white'} font-semibold no-underline`}
          >
            <div className="bg-center bg-no-repeat bg-size-[90%] mr-[4px] inline-block h-[35px] w-[35px] transition duration-750 align-middle p-[2px] hover:animate-spin">
              <Image
                src={variant == 'nav-white' ? whiteLogo : defaultLogo}
                alt="blueprint logo"
              />
            </div>
            blueprint
          </Link>
        </div>
        <button
          className={`block sm:hidden h-[30px] w-[30px] bg-none border-none p-0 ${variant === 'default' ? 'text-bp-blue' : 'text-white'} text-[21px] ml-auto`}
          onClick={() => setShowMobileNav(true)}
        >
          <FaBars />
        </button>
        <ul
          className={`bg-dark-gray sm:!bg-transparent ${variant === 'default' ? 'sm:bg-white' : 'sm:bg-bp-blue'} block sm:flex absolute right-0 top-0 sm:relative w-full sm:w-auto opacity-0 sm:opacity-[initial] pt-[20px] pr-[60px] pb-[20px] pl-[20%] sm:p-0 font-bptext font-semibold ml-auto uppercase list-none -translate-y-[100%] sm:translate-y-0 transition duration-200 sm:transition-none z-[10] ${showMobileNav && '!top-0 opacity-100 sm:opacity-[initial] !translate-y-0'}`}
        >
          <button
            className="block sm:hidden h-[30px] w-[30px] bg-none border-none p-0 absolute text-white top-[20px] right-[20px]"
            onClick={() => setShowMobileNav(false)}
          >
            <Image alt="close menu" src={closeIcon} />
          </button>
          <li
            className={`block animate-none text-[24px] sm:text-base font-medium sm:font-semibold py-[5px] px-0 sm:p-0 ${variant === 'default' ? 'text-bp-white sm:text-bp-blue/80 hover:text-bp-blue' : 'text-white/80 hover:text-white'} my-0 mx-[15px] transition-opacity duration-100`}
            style={{ animation: '400ms 750ms both slideDown' }}
          >
            <Link
              className="text-inherit block no-underline"
              href="/about"
              onClick={() => setShowMobileNav(false)}
            >
              About
            </Link>
          </li>
          <li
            className={`block animate-none text-[24px] sm:text-base font-medium sm:font-semibold py-[5px] px-0 sm:p-0 ${variant === 'default' ? 'text-bp-white sm:text-bp-blue/80 hover:text-bp-blue' : 'text-white/80 hover:text-white'} my-0 mx-[15px] transition-opacity duration-100`}
            style={{ animation: '400ms 800ms both slideDown' }}
          >
            <Link
              className="text-inherit block no-underline"
              href="/chapters"
              onClick={() => setShowMobileNav(false)}
            >
              Chapters
            </Link>
          </li>
          <li
            className={`block animate-none text-[24px] sm:text-base font-medium sm:font-semibold py-[5px] px-0 sm:p-0 ${variant === 'default' ? 'text-bp-white sm:text-bp-blue/80 hover:text-bp-blue' : 'text-white/80 hover:text-white'} my-0 mx-[15px] transition-opacity duration-100`}
            style={{ animation: '400ms 850ms both slideDown' }}
          >
            <Link
              className="text-inherit block no-underline"
              href="/projects"
              onClick={() => setShowMobileNav(false)}
            >
              Projects
            </Link>
          </li>
          <li
            className={`block animate-none text-[24px] sm:text-base font-medium sm:font-semibold py-[5px] px-0 sm:p-0 ${variant === 'default' ? 'text-bp-white sm:text-bp-blue/80 hover:text-bp-blue' : 'text-white/80 hover:text-white'} my-0 mx-[15px] transition-opacity duration-100`}
            style={{ animation: '400ms 900ms both slideDown' }}
          >
            <Link
              className="text-inherit block no-underline"
              href={externalLinks.medium}
              onClick={() => setShowMobileNav(false)}
            >
              Blog
            </Link>
          </li>
          <li
            className={`block animate-none text-[24px] sm:text-base font-medium sm:font-semibold py-[5px] px-0 sm:p-0 ${variant === 'default' ? 'text-bp-white sm:text-bp-blue/80 hover:text-bp-blue' : 'text-white/80 hover:text-white'} my-0 mx-[15px] transition-opacity duration-100`}
            style={{ animation: '400ms 950ms both slideDown' }}
          >
            <Link
              className="text-inherit block no-underline"
              href="/apply"
              onClick={() => setShowMobileNav(false)}
            >
              Apply
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
