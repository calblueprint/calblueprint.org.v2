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
    <section className="bg-bp-blue h-[90vh] max-h-[500px] sm:max-h-[650px] overflow-hidden relative py-[50px] px-0">
      <div className="absolute h-full opacity-0 top-0 left-0 py-[10px] px-0 w-full animate-scaleIn">
        <object
          className="w-full h-full transform scale-2 sm:scale-1.8 md:scale-1.5 lg:scale-1.1"
          data={pattern.src}
          id="pattern"
          type="image/svg+xml"
        />
      </div>
      <div className="container mx-auto px-[12px] h-full flex flex-col justify-center items-start sm:items-center relative z-1 pointer-events-none">
        <h1
          className="font-bptext font-normal animate-slideLeft text-bp-white text-[40px] sm:text-[60px] font-semibold mb-[24px]"
          style={{
            animationDelay: '200ms',
            textShadow: '3px 3px rgba(44, 62, 80, 0.2)',
          }}
        >
          {title}
        </h1>
        <p
          className="animate-slideLeft text-bp-white text-opacity-80 text-[20px] sm:text-[22px] mb-[28px] max-w-[550px] text-left sm:text-center"
          style={{ animationDelay: '350ms' }}
        >
          {body}
        </p>
        <div
          className="animate-slideLeft pointer-events-auto"
          style={{ animationDelay: '500ms' }}
        >
          {action}
        </div>
      </div>
    </section>
  );
}
