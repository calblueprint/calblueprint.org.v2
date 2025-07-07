import { FaAngleRight } from 'react-icons/fa';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero/Hero';
import HeroButton from '@/components/HeroButton/HeroButton';
import HeroMessage from '@/components/HeroMessage/HeroMessage';
import HomepageLink from '@/components/HomepageLink/HomepageLink';
import PageNav from '@/components/PageNav/PageNav';
import TimelineItem from '@/components/TimelineItem/TimelineItem';
import data from '@/data/external_links.json';
import config from '@/data/nonprofit_applications.json';
import carouselImage1 from '@/public/images/apply/nonprofits/carousel_1.jpg';
import carouselImage2 from '@/public/images/apply/nonprofits/carousel_2.jpg';
import carouselImage3 from '@/public/images/apply/nonprofits/carousel_3.jpg';
import carouselImage4 from '@/public/images/apply/nonprofits/carousel_4.jpg';
import credibilityImage from '@/public/images/apply/nonprofits/credibility.png';
import impactImage from '@/public/images/apply/nonprofits/impact.png';
import mobileImage from '@/public/images/apply/nonprofits/mobile.png';
import necessityImage from '@/public/images/apply/nonprofits/necessity.png';
import nonprofitsImage from '@/public/images/apply/nonprofits/nonprofits.jpg';
import scopeImage from '@/public/images/apply/nonprofits/scope.png';
import technicalFitImage from '@/public/images/apply/nonprofits/technical_fit.png';
import webImage from '@/public/images/apply/nonprofits/web.png';
import coffeeImage from '@/public/images/home/1951.png';
import dcKitchenImage from '@/public/images/home/dckitchen.png';
import fullClubImage from '@/public/images/home/group_photo_2024.jpg';
import unloopImage from '@/public/images/home/unloop.png';

export const metadata: Metadata = {
  title: 'Nonprofits | Blueprint',
};

export default function NonprofitApplyPage() {
  const appsEnabled = config.nonprofit_applications_enabled;

  const appsDisabledText =
    'Applications for Blueprint are closed for this semester. We will recruit more nonprofit partners next summer. If you have any questions, contact us at team@calblueprint.org.';

  const action = appsEnabled ? (
    <HeroButton
      buttonText={'Apply Now'}
      buttonLink={config.nonprofit_application_link}
      className="mt-[40px]"
    />
  ) : (
    <HeroMessage text={appsDisabledText} />
  );

  const sections = [
    { text: 'Our Services', href: '#our-services' },
    {
      text: 'Application Process',
      href: '#application-process',
    },
    { text: 'Previous Work', href: '#previous-work' },
    { text: 'FAQs', href: '#faqs' },
  ];

  const carouselImages = [
    carouselImage1,
    carouselImage2,
    carouselImage3,
    carouselImage4,
    nonprofitsImage,
  ];

  return (
    <>
      <Hero
        title={'For Nonprofits'}
        body={`As a partner, Blueprint will work with you to develop technology that turns your vision into a reality, completely free of charge.`}
        action={action}
        heroImage={fullClubImage}
        className="bg-center bg-cover bg-no-repeat relative"
        additionalInfo={
          <p
            className="max-w-[600px] text-bp-white/80 font-bptext animate-slideLeft my-[24px]"
            style={{ animationDelay: '0.4s' }}
          >
            For more information, please see our info-session{' '}
            <Link
              className="text-[#f9fafccc] underline"
              href={config.infosession_slides_link}
              target="_blank"
            >
              slide-deck
            </Link>
            . You can also watch a{' '}
            <Link
              className="text-[#f9fafccc] underline"
              href={config.infosession_recording_link}
              target="_blank"
            >
              recording
            </Link>{' '}
            of our most recent info-session with Blake Nathan&apos;s Nonprofit
            Academy!
          </p>
        }
      >
        <PageNav sections={sections} />
      </Hero>

      <section className="py-[50px] px-0" id="our-services">
        <div className="container mx-auto px-[12px]">
          <h2 className="font-bptext text-[28px] sm:text-[36px] font-semibold text-center mb-[54px]">
            Our Services
          </h2>
          <div className="block sm:flex sm:flex-row sm:flex-wrap">
            <div className="py-0 px-[30px] text-center my-[20px] mx-auto sm:m-0 max-w-[450px] sm:max-w-none w-full sm:w-1/2">
              <div className="mt-0 mx-auto mb-[20px] text-center w-1/2">
                <Image alt="Web" src={webImage} />
              </div>
              <h3 className="font-bptext text-[23px] font-semibold mb-[16px]">
                Web Development
              </h3>
              <p className="text-dark-gray/70 text-[18px]">
                Web applications let your users access information from any
                browser. This might be better for applications that need to be
                publicly available or ones that help facilitate task management.
              </p>
            </div>
            <div className="py-0 px-[30px] text-center my-[20px] mx-auto sm:m-0 max-w-[450px] sm:max-w-none w-full sm:w-1/2">
              <div className="mt-0 mx-auto mb-[20px] text-center w-1/2">
                <Image alt="Mobile" src={mobileImage} />
              </div>
              <h3 className="font-bptext text-[23px] font-semibold mb-[16px]">
                Mobile Development
              </h3>
              <p className="text-dark-gray/70 text-[18px]">
                Mobile applications let your users download an app and access it
                on their phone. This might be better for applications that need
                to be portable or accessed with no internet connection.
              </p>
            </div>
          </div>
        </div>

        <div className="relative pt-[100px] pb-[30px] after:content-[''] after:absolute after:top-0 after:right-0 after:w-[200px] after:h-full after:pointer-events-none after:bg-gradient-to-r after:from-transparent after:to-white/80">
          <div
            className="flex flex-row overflow-scroll gap-4 px-[10%]"
            style={{ cursor: 'grab' }}
          >
            {carouselImages.map((image, i) => (
              <div className="flex-shrink-0" key={i}>
                <Image
                  className="w-[500px]"
                  alt="Nonprofit Carousel Image"
                  src={image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-off-white py-[50px] sm:py-[80px] px-0"
        id="application-process"
      >
        <div className="container mx-auto px-[12px]">
          <h2 className="font-bptext text-[28px] sm:text-[36px] font-semibold text-center mb-[54px]">
            Nonprofit Application Process
          </h2>
          <div className="npo-timeline">
            {/* Previous step 1:
                  The first part of our application is an interest form where
                  you will provide contact and basic information about your
                  organization. If you have any questions or concerns about
                  anything in this timeline, please email{' '}
                  <Link href="mailto:projects@calblueprint.org">
                    projects@calblueprint.org
                  </Link>
                  . 
                  */}
            <TimelineItem
              num="01"
              title="Informational Phone Call"
              date={config.phone_call_dates}
              description={
                <>
                  You can schedule a 15 - 30 minute informational phone call
                  with one of our Project Leads{' '}
                  <Link
                    href={config.phone_call_availabilities_link}
                    target="_blank"
                  >
                    here
                  </Link>{' '}
                  to help you get to know the work we do, and vice versa!
                  We&apos;ll also be able to answer any questions you have about
                  the application process and help you brainstorm and gauge the
                  feasibility of potential technical solutions. If you decide
                  that you&apos;d like to potentially work with us and we feel
                  our services could fit your needs, we encourage you to fill
                  out the written application.
                </>
              }
            />
            <TimelineItem
              num="02"
              title="Written Application Due"
              date={config.written_application_due}
              description={
                <>
                  <p style={{ fontStyle: 'italic' }}>
                    Note: While the priority deadline is July 11, we have extended the deadline to July 18.
                  </p>
                  Your response helps us understand what you need from
                  Blueprint. You&apos;ll have the opportunity to explain why our
                  services could be helpful to your organization, identify any
                  pain points within your current operations, and expand on what
                  you&apos;d like us to build for you. If your proposed project
                  sounds like something we can build, we&apos;ll be in touch for
                  a final interview.
                </>
              }
            />
            <TimelineItem
              num="03"
              title="Final Interviews"
              date={config.final_interview_dates}
              description={
                <>
                  The final interview will be with some of our Project Leads and
                  Designers. Together, we&apos;ll dive into more detail about
                  your proposed project, discuss how it could be designed to
                  best fit your needs, and leave room for any remaining
                  questions.
                </>
              }
            />
            <TimelineItem
              num="04"
              title="Decisions Released"
              date={config.decision_released_date}
              description={
                <>
                  We&apos;ll reach out and let you know whether your
                  organization has been selected to work with Blueprint!
                </>
              }
            />
            <TimelineItem
              num="05"
              title="Project Scoping"
              date={config.project_scoping_dates}
              description={
                <>
                  If selected, your organization will have the opportunity to
                  work with us on a project over the course of the school year
                  (August - May). Each Project Leader and Designer will choose
                  an organization, and over the course of August, they will work
                  with you to finalize the plans for your project.
                </>
              }
            />
          </div>
        </div>
      </section>

      <section className="py-[50px] px-0" id="criteria">
        <div className="container mx-auto px-[12px]">
          <h2 className="font-bptext text-[28px] sm:text-[36px] font-semibold mb-[32px]">
            Decision Criteria
          </h2>
          <p className="text-dark-gray/60 text-[18px] sm:text-[21px] mb-[32px]">
            We want to help as many organizations as we possibly can.
            Unfortunately, we cannot take every project because of the large
            amount of resources each one requires. These are the primary
            criteria we use to determine project fit.
          </p>
          <HomepageLink
            buttonText="Sample Application"
            href={data.nonprofit_sample_application}
            className="mb-[40px]"
          />
          <ul className="flex flex-row flex-wrap justify-around mb-0 mt-[40px]">
            <li className="mb-[40px] w-[45%] sm:w-[28%]">
              <div className="max-w-[100px] mb-[10px] overflow-hidden">
                <Image
                  className="w-full h-full my-0 mx-auto object-cover align-middle"
                  alt="Impact"
                  src={impactImage}
                />
              </div>
              <h3 className="font-bptext text-[19px] font-semibold mb-[12px]">
                Impact
              </h3>
              <p className="text-dark-gray/70">
                How much will your project impact the community?
              </p>
            </li>
            <li className="mb-[40px] w-[45%] sm:w-[28%]">
              <div className="max-w-[100px] mb-[10px] overflow-hidden">
                <Image
                  className="w-full h-full my-0 mx-auto object-cover align-middle"
                  alt="Necessity"
                  src={necessityImage}
                />
              </div>
              <h3 className="font-bptext text-[19px] font-semibold mb-[12px]">
                Necessity
              </h3>
              <p className="text-dark-gray/70">
                How vital is your project to your non-profit organization?
              </p>
            </li>
            <li className="mb-[40px] w-[45%] sm:w-[28%]">
              <div className="max-w-[100px] mb-[10px] overflow-hidden">
                <Image
                  className="w-full h-full my-0 mx-auto object-cover align-middle"
                  alt="Scope"
                  src={scopeImage}
                />
              </div>
              <h3 className="font-bptext text-[19px] font-semibold mb-[12px]">
                Scope
              </h3>
              <p className="text-dark-gray/70">
                Is your project achievable within the alloted timeline?
              </p>
            </li>
            <li className="mb-[40px] w-[45%] sm:w-[28%]">
              <div className="max-w-[100px] mb-[10px] overflow-hidden">
                <Image
                  className="w-full h-full my-0 mx-auto object-cover align-middle"
                  alt="Technical Fit"
                  src={technicalFitImage}
                />
              </div>
              <h3 className="font-bptext text-[19px] font-semibold mb-[12px]">
                Technical Fit
              </h3>
              <p className="text-dark-gray/70">
                Does your project use the capabilities of technology?
              </p>
            </li>
            <li className="mb-[40px] w-[45%] sm:w-[28%]">
              <div className="max-w-[100px] mb-[10px] overflow-hidden">
                <Image
                  className="w-full h-full my-0 mx-auto object-cover align-middle"
                  alt="Credibility"
                  src={credibilityImage}
                />
              </div>
              <h3 className="font-bptext text-[19px] font-semibold mb-[12px]">
                Credibility
              </h3>
              <p className="text-dark-gray/70">
                Is there evidence that your project will have an impact?
              </p>
            </li>
            <li className="mb-[40px] w-[45%] sm:w-[28%]" />
          </ul>
        </div>
      </section>

      <section className="bg-bp-blue text-bp-white py-[50px] sm:pt-[80px] px-0 sm:pb-[70px]">
        <div className="container mx-auto px-[12px]">
          <q
            className='block font-bptext text-[26px] sm:text-[35px] font-medium relative mb-[20px] sm:m-0 
            before:bg-contain before:bg-no-repeat before:content-[""] before:opacity-20 before:absolute before:-left-[30px] before:top-0 before:h-[70px] before:w-[70px]'
          >
            Working with Blueprint has been an incredible pleasure. We have used
            their application to raise hundreds of thousands of dollars for
            Berkeley&apos;s teachers.
          </q>
          <h5 className="text-bp-white/80 float-right text-[20px] font-normal">
            - Berkeley Public Schools Fund
          </h5>
        </div>
      </section>

      <section
        className="bg-off-white pt-[70px] px-0 pb-[50px]"
        id="previous-work"
      >
        <div className="container mx-auto px-[12px]">
          <h2 className="font-bptext text-[28px] sm:text-[36px] font-semibold mb-[32px]">
            Previous Work
          </h2>
          <p className="text-dark-gray/60 text-[18px] sm:text-[21px] mb-[32px]">
            Some of the applications we&apos;ve developed for previous clients.
          </p>
          <HomepageLink
            buttonText="View All Projects"
            href="/projects"
            className="mb-[40px]"
          />

          <div className="block sm:flex justify-between my-[30px] mx-auto max-w-[1350px] py-0 px-[15px] sm:px-[30px]">
            <Link
              className="block flex-1 p-0 sm:py-0 sm:px-[20px] mb-[20px] sm:m-0 no-underline backface-hidden transform-3d"
              href="/projects/1951coffee"
            >
              <div
                className="shadow-project-item bg-center bg-cover bg-no-repeat rounded-[3px] text-bp-white flex h-[200px] sm:h-[300px] justify-end overflow-hidden p-[20px] relative transition duration-200 flex-col w-full
                before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-[1]
                hover:project-item-hover hover:-translate-y-[10px]"
                id="coffee"
              >
                {/* TODO: fix hover scale */}
                <div className="h-full left-0 absolute top-0 transition duration-200 w-full overflow-hidden hover:scale-105">
                  <Image
                    className="w-full h-full my-0 mx-auto object-cover align-middle"
                    alt="1951 Coffee Company"
                    src={coffeeImage}
                  />
                </div>
                <h4 className="font-bptext text-[23px] font-semibold mb-[10px] relative z-[1]">
                  1951
                </h4>
                <p className="text-bp-white/90 text-[18px] relative z-[1]">
                  Building communities to make successful refugee resettlement
                  possible.
                </p>
              </div>
            </Link>
            <Link
              className="block flex-1 p-0 sm:py-0 sm:px-[20px] mb-[20px] sm:m-0 no-underline backface-hidden transform-3d"
              href="/projects/unloop"
            >
              <div
                className="shadow-project-item bg-center bg-cover bg-no-repeat rounded-[3px] text-bp-white flex h-[200px] sm:h-[300px] justify-end overflow-hidden p-[20px] relative transition duration-200 flex-col w-full
                before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-[1]
                hover:project-item-hover hover:-translate-y-[10px]"
                id="unloop"
              >
                <div className="h-full left-0 absolute top-0 transition duration-200 w-full overflow-hidden hover:scale-105">
                  <Image
                    className="w-full h-full my-0 mx-auto object-cover align-middle"
                    alt="Unloop"
                    src={unloopImage}
                  />
                </div>
                <h4 className="font-bptext text-[23px] font-semibold mb-[10px] relative z-[1]">
                  Unloop
                </h4>
                <p className="text-bp-white/90 text-[18px] relative z-[1]">
                  Building a pipeline from prison to tech.
                </p>
              </div>
            </Link>
            <Link
              className="block flex-1 p-0 sm:py-0 sm:px-[20px] mb-[20px] sm:m-0 no-underline backface-hidden transform-3d"
              href="/projects/dckitchen"
            >
              <div
                className="shadow-project-item bg-center bg-cover bg-no-repeat rounded-[3px] text-bp-white flex h-[200px] sm:h-[300px] justify-end overflow-hidden p-[20px] relative transition duration-200 flex-col w-full
                before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-[1]
                hover:project-item-hover hover:-translate-y-[10px]"
                id="dckitchen"
              >
                <div className="h-full left-0 absolute top-0 transition duration-200 w-full overflow-hidden hover:scale-105">
                  <Image
                    className="w-full h-full my-0 mx-auto object-cover align-middle"
                    alt="DC Central Kitchen"
                    src={dcKitchenImage}
                  />
                </div>
                <h4 className="font-bptext text-[23px] font-semibold mb-[10px] relative z-[1]">
                  DC Central Kitchen{' '}
                </h4>
                <p className="text-bp-white/90 text-[18px] relative z-[1]">
                  Expanding access to affordable healthy food through corner
                  stores.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-[50px] px-0" id="faqs">
        <div className="container mx-auto px-[12px]">
          <h2 className="font-bptext text-[28px] sm:text-[36px] font-semibold marginBot-xl">
            Frequently Asked Questions
          </h2>
          <h3 className="font-bptext text-[22px] font-medium mb-[5px]">
            How often do project teams and nonprofits meet?
          </h3>
          <p className="text-dark-gray/70 text-[18px] mb-[40px]">
            The client and the project manager meet on a weekly or biweekly
            basis to ensure the project&apos;s progress. There are project
            scoping meetings with the project manager at the project start, a
            formal midpoint presentation, and a final presentation where the
            project is delivered.
          </p>
          <h3 className="font-bptext text-[22px] font-medium mb-[5px]">
            What is the client-team interaction like?
          </h3>
          <p className="text-dark-gray/70 text-[18px] mb-[40px]">
            The team works alongside the client&apos;s vision for the
            organization. We hope that our project has significant impact on the
            organization&apos;s efficiency and reach, so the alignment of goals
            is crucial. At our meetings, we discuss updates on project features,
            check the timeline, and have discussion on the progress of the
            project and the nonprofit itself.
          </p>
          <h3 className="font-bptext text-[22px] font-medium mb-[5px]">
            How does Blueprint ensure success?
          </h3>
          <p className="text-dark-gray/70 text-[18px] mb-[40px]">
            Our club recruits the brightest and most hard-working students at UC
            Berkeley, one of the best universities in computer science. Through
            effective leadership and frequent checkins with our clients we hope
            that the combination of talent, dedication, and care will result in
            a project that benefits your organization.
          </p>
        </div>
      </section>
    </>
  );
}
