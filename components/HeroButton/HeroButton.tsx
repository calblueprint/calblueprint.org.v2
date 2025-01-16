import Link from 'next/link';

type HeroButtonProps = {
  buttonText: string;
  buttonLink: string;
};

export default function HeroButton({
  buttonText,
  buttonLink,
}: HeroButtonProps) {
  return (
    <div className="static-page-hero-btn-container marginTop-xl">
      <Link href={buttonLink}>
        <button className="bp-btn btn-white btn-lg read-more">
          {buttonText}
        </button>
      </Link>
    </div>
  );
}
