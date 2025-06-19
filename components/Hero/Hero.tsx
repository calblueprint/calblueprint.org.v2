import React from 'react';
import { StaticImageData } from 'next/image';

type HeroProps = {
  title: string;
  body: string;
  heroImage: StaticImageData;
  className?: string;
  children?: React.ReactNode; // Used to pass in the page nav
  additionalInfo?: React.ReactNode;
  action: React.ReactNode;
};

export default function Hero({
  title,
  body,
  heroImage,
  action,
  className = '',
  children,
  additionalInfo,
}: HeroProps) {
  return (
    <section
      className={`flex flex-row flex-wrap h-[90vh] max-h-[600px] sm:max-h-[650px] min-h-[520px] overflow-hidden pt-[50px] relative ${className}`}
      style={{ backgroundImage: `url(${heroImage.src})` }}
    >
      <div
        className="h-full w-full top-0 left-0 absolute"
        style={{
          background:
            'linear-gradient(to right, rgba(24, 123, 229, 0.95) 38%, rgba(24, 123, 229, 0.75) 99%,rgba(24, 123, 229, 0.75) 100%)',
        }}
      />
      <div className="container relative self-center z-5 px-[12px] w-full mx-auto">
        <h1
          className="animate-slideLeft text-bp-white font-bptext font-semibold text-[34px] sm:text-[42px] mb-[40px]"
          style={{
            animationDelay: '200ms',
            textShadow: '3px 3px rgba(44, 62, 80, 0.1)',
          }}
        >
          {title}
        </h1>
        <p
          className="animate-slideLeft text-[25px] sm:text-[30px] font-bptext font-normal text-bp-white text-opacity-80 max-w-[600px]"
          style={{ animationDelay: '300ms' }}
        >
          {body}
        </p>
        {action}
        {additionalInfo}
      </div>
      {children && (
        <div
          className="hidden sm:block animate-slideUp self-end bg-bp-white bg-opacity-10 relative w-full z-6"
          style={{ animationDelay: '400ms' }}
        >
          {children}
        </div>
      )}
    </section>
  );
}
