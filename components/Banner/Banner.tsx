import Markdown from 'react-markdown';
import Link from 'next/link';
import config from '@/data/students_applications.json';

export default function Banner() {
  return (
    <Link className="no-underline" href="/apply/students">
      <div>
        <div className="flex h-auto text-[80%] justify-center items-center text-center no-underline py-[8px] px-0 hover:bg-bp-blue/10 transition-all duration-500 ease">
          <Markdown className="text-[16px]">{config.banner_text}</Markdown>
        </div>
      </div>
    </Link>
  );
}
