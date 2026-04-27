import Link from 'next/link';

type BPButtonProps = {
  buttonText: string;
  href: string;
  className?: string;
};

export default function BPButton({
  buttonText,
  href,
  className = ' ',
}: BPButtonProps) {
  return (
    <Link
      className={`bg-bp-500 font-poppins justify-center items-center px-[14px] py-[8px] text-slate-50 rounded-lg gap-[14px]
                  text-2xl not-italic font-normal leading-6 tracking-normal hover:bg-bp-600 ${className}`}
      href={href}
    >
      {buttonText}
    </Link>
  );
}
