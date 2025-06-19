import Link from 'next/link';

type HeroButtonProps = {
  buttonText: string;
  buttonLink: string;
  variant?: 'white' | 'clear';
  className?: string;
};

export default function HeroButton({
  buttonText,
  buttonLink,
  variant = 'white',
  className,
}: HeroButtonProps) {
  return (
    <div className={`static-page-hero-btn-container ${className}`}>
      <Link
        href={buttonLink}
        className={`border-bp-white border-[1px] rounded-[2px] cursor-pointer inline-block font-bptext font-semibold text-[19px] px-[15px] py-[10px]
        leading-normal opacity-90 hover:opacity-100 focus:opacity-100 disabled:cursor-not-allowed disabled:opacity-50 
        ${variant === 'white' ? 'bg-bp-white text-dark-gray' : 'bg-bp-white/20 text-bp-white'}`}
      >
        {buttonText}
      </Link>
    </div>
  );
}
