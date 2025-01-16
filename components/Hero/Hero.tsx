import React from 'react';
import { StaticImageData } from 'next/image';
import Link from 'next/link';

type HeroProps = {
  title: string;
  body: string;
  heroImage: StaticImageData;
  className?: string;
  children?: React.ReactNode; // Used to pass in the page nav
  buttonText: string;
  buttonLink: string;
};

export default function Hero({
  title,
  body,
  heroImage,
  buttonText,
  buttonLink,
  className = '',
  children,
}: HeroProps) {
  return (
    <section
      className={className}
      style={{ backgroundImage: `url(${heroImage.src})` }}
    >
      <div className="static-hero-gradient" />
      <div className="container">
        <h1 className="static-page-title marginBot-xl">{title}</h1>
        <p className="static-page-subtitle light">{body}</p>
        <div className="static-page-hero-btn-container marginTop-xl">
          <Link href={buttonLink}>
            <button className="bp-btn btn-white btn-lg read-more">
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
      {children && <div className="page-nav">{children}</div>}
    </section>
  );
}
