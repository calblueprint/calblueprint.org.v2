import { FaAngleRight } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import studentImage from '@/public/images/apply/students/students.jpg';
import nonprofitImage from '@/public/images/home/nonprofits.jpg';

export default function ApplyPage() {
  return (
    <div className="container apply-container max-w-[1170px]">
      <Link href="/apply/nonprofits" />
      <div className="panel npo-panel">
        <Link href="/apply/nonprofits" />
        <div>
          <Link href="/apply/nonprofits">
            <div className="img-container">
              <Image alt="Nonprofits" src={nonprofitImage} />
            </div>
            <h1>For Nonprofits</h1>
            <p>
              Partner with Blueprint to build the application your organization
              needs.
            </p>
          </Link>
          <Link className="homepage-link" href="/apply/nonprofits">
            <div className="flex flex-row">
              Learn More
              <FaAngleRight className="my-auto font-normal" />
            </div>
          </Link>
        </div>
      </div>
      <Link href="/apply/students" />
      <div className="panel student-panel">
        <Link href="/apply/students" />
        <div>
          <Link href="/apply/students">
            <div className="img-container">
              <Image alt="Students" src={studentImage} />
            </div>
            <h1>For Students</h1>
            <p>
              Joining Blueprint is the perfect way to use your skills to give
              back to the community.
            </p>
          </Link>
          <Link className="homepage-link" href="/apply/students">
            <div className="flex flex-row">
              <div>Learn More</div>
              <FaAngleRight className="my-auto font-normal" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
