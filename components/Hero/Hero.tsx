import React from 'react';
import { StaticImageData } from 'next/image';
import Link from 'next/link';

type HeroProps = {
  title: string;
  body: string;
  heroImage: StaticImageData;
  className?: string;
  children?: React.ReactNode; // Used to pass in the page nav
  action: React.ReactNode;
};

export default function Hero({
  title,
  body,
  heroImage,
  action,
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
        {action}
      </div>
      {children && <div className="page-nav">{children}</div>}
    </section>
  );
}
