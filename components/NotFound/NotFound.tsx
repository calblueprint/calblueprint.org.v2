import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="container pb-5">
      <h1 className="text-[200px]">404</h1>
      <p className="text-[36px] text-bp-blue font-[BPtext] pb-0 font-bold">
        Uh oh! This page doesn't exist.
      </p>
      <Link href="/" className="text-[24px] underline">
        Back to homepage
      </Link>
    </div>
  );
}
