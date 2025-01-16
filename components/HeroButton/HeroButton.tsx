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
      <Link href={buttonLink}>
        <button
          className={`bp-btn ${variant === 'white' ? 'btn-white' : 'btn-white--clear'} btn-lg read-more`}
        >
          {buttonText}
        </button>
      </Link>
    </div>
  );
}
