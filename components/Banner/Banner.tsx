// import Link from 'next/link';
import Markdown from 'react-markdown';
import config from '@/data/students_applications.json';

// Banner is temporarily used to display infosession information for nonprofits
// still uses the students_applications.json file for now, will revert when the time comes
export default function Banner() {
  return (
    // <Link
    //   className="notify-bar-link"
    //   href="https://calblueprint.org/apply/students"
    // >
    <div>
      <div className="notify-bar-container">
        {/* <p>
          <span style={{ fontSize: 16 }}>{config.banner_text}</span>
        </p> */}
        <Markdown className="text-[16px]">{config.banner_text}</Markdown>
      </div>
    </div>
  );
}
