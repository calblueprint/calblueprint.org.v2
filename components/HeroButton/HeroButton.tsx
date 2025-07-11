import Link from 'next/link';

type HeroButtonProps = {
  buttonText: string;
  buttonLink: string;
  variant?: 'white' | 'clear';
  className?: string;
  bounce?: boolean;
};

export default function HeroButton({
  buttonText,
  buttonLink,
  variant = 'white',
  className,
  bounce = false,
}: HeroButtonProps) {
  return (
    <div
      className={`animate-slideLeft ${className}`}
      style={{ animationDelay: '400ms' }}
    >
      <Link
        href={buttonLink}
        className={`border-bp-white border-[1px] rounded-[2px] cursor-pointer inline-block font-bptext font-semibold text-[19px] px-[15px] py-[10px]
        leading-normal opacity-90 hover:opacity-100 focus:opacity-100 disabled:cursor-not-allowed disabled:opacity-50 
        ${variant === 'white' ? 'bg-bp-white text-dark-gray' : 'bg-bp-white/20 text-bp-white'}
        ${bounce ? 'hover:shadow-dark-gray-20-small transition duration-150 hover:-translate-y-[3px]' : ''}`}
      >
        {buttonText}
      </Link>
    </div>
  );
}
