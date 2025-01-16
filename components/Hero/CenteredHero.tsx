import React from 'react';
import pattern from '@/public/images/home/pattern.svg';

type CenteredHeroProps = {
  title: string;
  body: string;
  action: React.ReactNode;
};

export default function CenteredHero({
  title,
  body,
  action,
}: CenteredHeroProps) {
  return (
    <section className="home-section">
      <div className="pattern show">
        <object data={pattern.src} id="pattern" type="image/svg+xml" />
      </div>
      <div className="container">
        <h1 className="main-title">{title}</h1>
        <p className="main-subtitle">{body}</p>
        <div className="main-button-container">{action}</div>
      </div>
    </section>
  );
}
