// import Link from 'next/link';
import Markdown from 'react-markdown';
import config from '@/data/students_applications.json';

// Banner is temporarily used to display infosession information for nonprofits
// still uses the students_applications.json file for now, will revert when the time comes
export default function Banner() {
  return (
    // <Link
    //   className="no-underline"
    //   href="https://calblueprint.org/apply/students"
    // >
    <div>
      <div className="flex h-auto text-[80%] justify-center items-center text-center no-underline py-[8px] px-0 hover:bg-bp-blue/10 transition-all duration-500 ease">
        {/* <p>
          <span style={{ fontSize: 16 }}>{config.banner_text}</span>
        </p> */}
        <Markdown className="text-[16px]">{config.banner_text}</Markdown>
      </div>
    </div>
  );
}
