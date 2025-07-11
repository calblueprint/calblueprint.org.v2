import Link from 'next/link';

type BPButtonProps = {
  buttonText: string;
  href: string;
  variant?: 'white' | 'white-clear' | 'dark' | 'light';
  size?: 'sm' | 'lg';
  className?: string;
};

export default function BPButton({
  buttonText,
  href,
  variant,
  size,
  className = ' ',
}: BPButtonProps) {
  const variantToStyle = {
    white: 'bg-white text-dark-gray',
    'white-clear': 'bg-bp-white/20 text-bp-white',
    dark: 'bg-dark-gray',
    light: 'bg-smoke/40 text-dark-gray hover:bg-smoke/60',
  };
  const sizeToStyle = {
    lg: 'text-[19px] px-[15px] py-[10px]',
    sm: 'text-[15px] px-[10px] py-[6px]',
  };
  return (
    <Link
      className={`bg-bp-blue border-bp-white border-[1px] rounded-[2px] text-bp-white cursor-pointer inline-block font-bptext text-[16px] 
                font-semibold tracking-[0.3px] leading-normal opacity-90 px-[12px] py-[8px] no-underline align-middle
                hover:opacity-100 focus:opacity-100 disabled:cursor-not-allowed disabled:opacity-50
                ${variant && variantToStyle[variant]}
                ${size && sizeToStyle[size]}
                ${className}
                `}
      href={href}
    >
      {buttonText}
    </Link>
  );
}
