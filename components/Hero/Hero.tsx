import React from 'react';
import { StaticImageData } from 'next/image';
import Link from 'next/link';

type HeroProps = {
  title: string;
  body: string;
  buttonText: string;
  buttonLink: string;
  heroImage: StaticImageData;
  children: React.ReactNode; // Used to pass in the page nav
};

export default function Hero({
  title,
  body,
  heroImage,
  buttonText,
  buttonLink,
  children,
}: HeroProps) {
  return (
    <section
      className="static-page-hero about-page-hero"
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
      <div className="page-nav">{children}</div>
    </section>
  );
}
