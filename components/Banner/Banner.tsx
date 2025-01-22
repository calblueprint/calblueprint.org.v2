import Link from 'next/link';
import config from '@/data/students_applications.json';

export default function Banner() {
  return (
    <Link
      className="notify-bar-link"
      href="https://calblueprint.org/apply/students"
    >
      <div className="notify-bar-container">
        <p>
          <span style={{ fontSize: 16 }}>{config.banner_text}</span>
        </p>
      </div>
    </Link>
  );
}
