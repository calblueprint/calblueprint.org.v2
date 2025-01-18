import { FaAngleRight } from 'react-icons/fa';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero/Hero';
import HeroButton from '@/components/HeroButton/HeroButton';
import HeroMessage from '@/components/HeroMessage/HeroMessage';
import PageNav from '@/components/PageNav/PageNav';
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
        body={
          'As a partner, Blueprint will work with you to develop technology that turns your vision into a reality, completely free of charge.'
        }
        action={action}
        heroImage={fullClubImage}
        className={'static-page-hero about-page-hero'}
      >
        <PageNav sections={sections} />
      </Hero>

      <section className="application-our-services" id="our-services">
        <div className="container">
          <h2 className="static-page-header marginBot-xxl">Our Services</h2>
          <div className="our-services-container">
            <div className="item">
              <div className="img-container">
                <Image alt="Web" src={webImage} />
              </div>
              <h3>Web Development</h3>
              <p>
                Web applications let your users access information from any
                browser. This might be better for applications that need to be
                publicly available or ones that help facilitate task management.
              </p>
            </div>
            <div className="item">
              <div className="img-container">
                <Image alt="Mobile" src={mobileImage} />
              </div>
              <h3>Mobile Development</h3>
              <p>
                Mobile applications let your users download an app and access it
                on their phone. This might be better for applications that need
                to be portable or accessed with no internet connection.
              </p>
            </div>
          </div>
        </div>

        <div className="photo-carousel npo-photo-carousel">
          <div
            className="flex flex-row overflow-scroll gap-4 px-[10%]"
            style={{ cursor: 'grab' }}
          >
            {carouselImages.map((image, i) => (
              <div className="flex-shrink-0" key={i}>
                <Image alt="Nonprofit Carousel Image" src={image} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="application-process-section" id="application-process">
        <div className="container">
          <h2 className="static-page-header marginBot-xxl">
            Nonprofit Application Process
          </h2>
          <div className="npo-timeline">
            <div className="timeline-row">
              <div className="num-col">
                <div className="timeline-num">01</div>
              </div>
              <div className="text-col">
                <div className="timeline-row-title">Interest Form Open</div>
                <div className="timeline-row-date">
                  {config.interest_form_release_dates}
                </div>
                <div className="timeline-row-description">
                  The first part of our application is an interest form where
                  you will provide contact and basic information about your
                  organization. If you have any questions or concerns about
                  anything in this timeline, please email{' '}
                  <Link href="mailto:projects@calblueprint.org">
                    projects@calblueprint.org
                  </Link>
                  .
                </div>
              </div>
            </div>
            <div className="timeline-row">
              <div className="num-col">
                <div className="timeline-num">02</div>
              </div>
              <div className="text-col">
                <div className="timeline-row-title">
                  Informational Phone Call
                </div>
                <div className="timeline-row-date">
                  {config.phone_call_dates}
                </div>
                <div className="timeline-row-description">
                  One of our Project Managers will reach out to you to schedule
                  a 15 - 30 minute informational phone call that will help you
                  get to know the work we do, and vice versa! We&apos;ll also be
                  able to answer any questions you have about the application
                  process. If you decide that you&apos;d like to potentially
                  work with us and we feel our services could fit your needs,
                  we&apos;ll open up the second part of our application.
                </div>
              </div>
            </div>
            <div className="timeline-row">
              <div className="num-col">
                <div className="timeline-num">03</div>
              </div>
              <div className="text-col">
                <div className="timeline-row-title">
                  Written Application Due
                </div>
                <div className="timeline-row-date">
                  {config.written_application_due}
                </div>
                <div className="timeline-row-description">
                  The second part of our application helps us understand what
                  you need from Blueprint. You&apos;ll have the opportunity to
                  explain why our services could be helpful to your
                  organization, identify any pain points within your current
                  operations, and expand on what you&apos;d like us to build for
                  you. If your proposed project sounds like something we can
                  build, we&apos;ll be in touch for a final interview.
                </div>
                {/* <div className="timeline-row-btn"> */}
                {/*   <Link className="bp-btn" href="/nonprofit_applications"> */}
                {/*     View Application */}
                {/*   </Link> */}
                {/* </div> */}
              </div>
            </div>
            <div className="timeline-row">
              <div className="num-col">
                <div className="timeline-num">04</div>
              </div>
              <div className="text-col">
                <div className="timeline-row-title">Final Interviews</div>
                <div className="timeline-row-date">
                  {config.final_interview_dates}
                </div>
                <div className="timeline-row-description">
                  The final interview will be with a handful of our Project
                  Managers and Designers. Together, we&apos;ll dive into more
                  detail about your proposed project, discuss how it could be
                  designed to best fit your needs, and leave room for any
                  remaining questions.
                </div>
              </div>
            </div>
            <div className="timeline-row">
              <div className="num-col">
                <div className="timeline-num">05</div>
              </div>
              <div className="text-col">
                <div className="timeline-row-title">Decisions Released</div>
                <div className="timeline-row-date">
                  {config.decision_released_date}
                </div>
                <div className="timeline-row-description">
                  We&apos;ll reach out and let you know whether your
                  organization has been selected to work with Blueprint!
                </div>
              </div>
            </div>
            <div className="timeline-row">
              <div className="num-col">
                <div className="timeline-num">06</div>
              </div>
              <div className="text-col">
                <div className="timeline-row-title">Project Scoping</div>
                <div className="timeline-row-date">
                  {config.project_scoping_dates}
                </div>
                <div className="timeline-row-description">
                  If selected, your organization will have the opportunity to
                  work with us on a project over the course of the school year
                  (August - May). Each Project Manager and Designer will choose
                  an organization, and over the course of August, they will work
                  with you to finalize the plans for your project.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="application-decision-criteria-section" id="criteria">
        <div className="container">
          <h2 className="static-page-header marginBot-lg">Decision Criteria</h2>
          <p className="static-page-desc marginBot-lg">
            We want to help as many organizations as we possibly can.
            Unfortunately, we cannot take every project because of the large
            amount of resources each one requires. These are the primary
            criteria we use to determine project fit.
          </p>
          <Link
            className="homepage-link marginBot-xl"
            href={data.nonprofit_sample_application}
          >
            <div className="flex flex-row">
              Sample Application
              <FaAngleRight className="my-auto font-normal" />
            </div>
          </Link>
          <ul className="decision-criteria-list-container npo-criteria-list marginTop-xl">
            <li className="decision-criteria-item">
              <div className="img-container">
                <Image alt="Impact" src={impactImage} />
              </div>
              <h3>Impact</h3>
              <p>How much will your project impact the community?</p>
            </li>
            <li className="decision-criteria-item">
              <div className="img-container">
                <Image alt="Necessity" src={necessityImage} />
              </div>
              <h3>Necessity</h3>
              <p>How vital is your project to your non-profit organization?</p>
            </li>
            <li className="decision-criteria-item">
              <div className="img-container">
                <Image alt="Scope" src={scopeImage} />
              </div>
              <h3>Scope</h3>
              <p>Is your project achievable within the alloted timeline?</p>
            </li>
            <li className="decision-criteria-item">
              <div className="img-container">
                <Image alt="Technical Fit" src={technicalFitImage} />
              </div>
              <h3>Technical Fit</h3>
              <p>Does your project use the capabilities of technology?</p>
            </li>
            <li className="decision-criteria-item">
              <div className="img-container">
                <Image alt="Credibility" src={credibilityImage} />
              </div>
              <h3>Credibility</h3>
              <p>Is there evidence that your project will have an impact?</p>
            </li>
            <li className="decision-criteria-item" />
          </ul>
        </div>
      </section>

      <section className="npo-apply-quote">
        <div className="container">
          <q>
            Working with Blueprint has been an incredible pleasure. We have used
            their application to raise hundreds of thousands of dollars for
            Berkeley&apos;s teachers.
          </q>
          <h5 className="reference">- Berkeley Public Schools Fund</h5>
        </div>
      </section>

      <section className="npo-apply-previous-work-section" id="previous-work">
        <div className="container">
          <h2 className="static-page-header marginBot-lg">Previous Work</h2>
          <p className="static-page-desc marginBot-lg">
            Some of the applications we&apos;ve developed for previous clients.
          </p>
          <Link className="homepage-link marginBot-xl" href="/projects">
            <div className="flex flex-row">
              View All Projects
              <FaAngleRight className="my-auto font-normal" />
            </div>
          </Link>

          <div className="projects-container">
            <Link href="/projects/1951coffee">
              <div className="project-item" id="coffee">
                <div className="project-img img-container">
                  <Image alt="1951 Coffee Company" src={coffeeImage} />
                </div>
                <h4>1951</h4>
                <p>
                  Building communities to make successful refugee resettlement
                  possible.
                </p>
              </div>
            </Link>
            <Link href="/projects/unloop">
              <div className="project-item" id="unloop">
                <div className="project-img img-container">
                  <Image alt="Unloop" src={unloopImage} />
                </div>
                <h4>Unloop</h4>
                <p>Building a pipeline from prison to tech.</p>
              </div>
            </Link>
            <Link href="/projects/dckitchen">
              <div className="project-item" id="dckitchen">
                <div className="project-img img-container">
                  <Image alt="DC Central Kitchen" src={dcKitchenImage} />
                </div>
                <h4>DC Central Kitchen </h4>
                <p>
                  Expanding access to affordable healthy food through corner
                  stores.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="application-faqs-section" id="faqs">
        <div className="container">
          <h2 className="static-page-header marginBot-xl">
            Frequently Asked Questions
          </h2>
          <h3>How often do project teams and nonprofits meet?</h3>
          <p>
            The client and the project manager meet on a weekly or biweekly
            basis to ensure the project’s progress. There are project scoping
            meetings with the project manager at the project start, a formal
            midpoint presentation, and a final presentation where the project is
            delivered.
          </p>
          <h3>What is the client-team interaction like?</h3>
          <p>
            The team works alongside the client&apos;s vision for the
            organization. We hope that our project has significant impact on the
            organization&apos;s efficiency and reach, so the alignment of goals
            is crucial. At our meetings, we discuss updates on project features,
            check the timeline, and have discussion on the progress of the
            project and the nonprofit itself.
          </p>
          <h3>How does Blueprint ensure success?</h3>
          <p>
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
