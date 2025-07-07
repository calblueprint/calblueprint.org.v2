import { FaAngleRight } from 'react-icons/fa';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import HomepageLink from '@/components/HomepageLink/HomepageLink';
import studentImage from '@/public/images/apply/students/students.jpg';
import nonprofitImage from '@/public/images/home/nonprofits.jpg';

export const metadata: Metadata = {
  title: 'Apply | Blueprint',
};

export default function ApplyPage() {
  return (
    <div className="container mx-auto px-[12px] block md:flex md:flex-row md:flex-wrap md:justify-center max-w-[1170px]">
      <Link className="text-inherit no-underline" href="/apply/nonprofits" />
      <div className="flex flex-col flex-wrap justify-start h-full w-full md:w-1/2 relative py-[30px] px-0 md:py-[40px] md:px-[20px] lg:p-[50px]">
        <Link className="text-inherit no-underline" href="/apply/nonprofits" />
        <div>
          <Link className="text-inherit no-underline" href="/apply/nonprofits">
            <div
              className="animate-slideLeft400 mb-[40px] h-[200px] md:h-[300px]"
              style={{ animationDelay: '0.3s' }}
            >
              <Image
                className="w-full h-full object-cover align-middle my-0 mx-auto rounded-[4px] shadow-apply-image"
                alt="Nonprofits"
                src={nonprofitImage}
              />
            </div>
            <h1
              className="font-bptext text-[35px] md:text-[40px] lg:text-[45px] font-semibold mb-[30px] animate-slideLeft400"
              style={{ animationDelay: '0.35s' }}
            >
              For Nonprofits
            </h1>
            <p
              className="animate-slideLeft400 text-dark-gray/60 text-[20px] md:text-[24px] mb-[20px]"
              style={{ animationDelay: '0.4s' }}
            >
              Partner with Blueprint to build the application your organization
              needs.
            </p>
          </Link>
          <HomepageLink
            buttonText="Learn More"
            href="/apply/nonprofits"
            className="animate-slideLeft400 text-bp-blue !font-semibold"
            style={{ animationDelay: '0.45s' }}
          />
        </div>
      </div>
      <Link className="text-inherit no-underline" href="/apply/students" />
      <div className="flex flex-col flex-wrap justify-start h-full w-full md:w-1/2 relative py-[30px] px-0 md:py-[40px] md:px-[20px] lg:p-[50px]">
        <Link className="text-inherit no-underline" href="/apply/students" />
        <div>
          <Link className="text-inherit no-underline" href="/apply/students">
            <div
              className="animate-slideLeft400 mb-[40px] h-[200px] md:h-[300px]"
              style={{ animationDelay: '0.5s' }}
            >
              <Image
                className="w-full h-full object-cover align-middle my-0 mx-auto rounded-[4px] shadow-apply-image"
                alt="Students"
                src={studentImage}
              />
            </div>
            <h1
              className="font-bptext text-[35px] md:text-[40px] lg:text-[45px] font-semibold mb-[30px] animate-slideLeft400"
              style={{ animationDelay: '0.55s' }}
            >
              For Students
            </h1>
            <p
              className="animate-slideLeft400 text-dark-gray/60 text-[20px] md:text-[24px] mb-[20px]"
              style={{ animationDelay: '0.6s' }}
            >
              Joining Blueprint is the perfect way to use your skills to give
              back to the community.
            </p>
          </Link>
          <HomepageLink
            buttonText="Learn More"
            href="/apply/students"
            className="animate-slideLeft400 text-bp-blue !font-semibold"
            style={{ animationDelay: '0.65s' }}
          />
        </div>
      </div>
    </div>
  );
}
