import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import BPButton from '@/components/Button/Button';
import Hero from '@/components/Hero/Hero';
import HeroButton from '@/components/HeroButton/HeroButton';
import PageNav from '@/components/PageNav/PageNav';
import TimelineItem from '@/components/TimelineItem/TimelineItem';
import chapters from '@/data/chapters.json';
import externalLinks from '@/data/external_links.json';
import { env } from '@/env.mjs';
import impactImage from '@/public/images/apply/nonprofits/impact.png';
import cultureImage from '@/public/images/apply/students/culture.png';
import growthImage from '@/public/images/apply/students/growth.png';
import heroImage from '@/public/images/projects/background.png';

export const metadata: Metadata = {
  title: 'Chapters | Blueprint',
};

type BlueprintChapter = {
  name: string;
  image: string;
  description: string;
  url: string;
};

export default function ChapterPage() {
  const sections = [
    { text: 'Current Chapters', href: '#current-chapters' },
    { text: 'Why Blueprint', href: '#why-blueprint' },
    { text: 'Establishment Process', href: '#establishment-process' },
    { text: 'FAQs', href: '#faqs' },
  ];

  return (
    <>
      <Hero
        title={'Start A Blueprint Chapter'}
        body={
          'Blueprint was founded at UC Berkeley in Spring 2013. Since then we started scaling our impact and further mission by establishing chapters in different colleges around the world.'
        }
        action={
          <HeroButton
            buttonText={'Submit Interest Form'}
            buttonLink={'/chapters#interest'}
            className="mt-[40px]"
          />
        }
        heroImage={heroImage}
        className="bg-center bg-cover bg-no-repeat relative"
      >
        <PageNav sections={sections} />
      </Hero>

      <section
        className="pt-[100px] px-[30px] pb-0 relative text-center justify-center"
        id="current-chapters"
      >
        <h2 className="font-bptext text-[28px] sm:text-[36px] font-semibold mb-[32px]">
          Current Chapters
        </h2>
        <div className="max-w-[1430px] mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {chapters.chapters.map((chapter: BlueprintChapter, i) => (
            <div className="mb-[40px] py-[10px] px-[20px] col-span-1" key={i}>
              <Link
                className="flex flex-col flex-wrap h-full pb-[40px] no-underline transition duration-200
              hover:bg-white hover:shadow-project-card-hover hover:-translate-y-[5px]"
                href={chapter.url}
              >
                <div className="bg-cover bg-center bg-no-repeat h-[100px] w-full mb-[20px] flex justify-center align-middle relative">
                  <Image
                    sizes="100vw"
                    fill
                    src={env.NEXT_PUBLIC_BASE_PATH + '/' + chapter.image}
                    alt={chapter.name}
                    objectFit="cover"
                  />
                </div>
                <h3 className="text-black font-bptext text-[23px] font-semibold mt-0 mx-[20px] mb-[20px]">
                  {chapter.name}
                </h3>
                <p className="text-dark-gray/70 font-sans-serif pt-0 px-[20px] py-[20px]">
                  {chapter.description}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="pt-[50px] px-[30px] pb-0" id="why-blueprint">
        <div className="max-w-[1200px] mx-auto px-[30px]">
          <h2 className="font-bptext text-[28px] sm:text-[36px] font-semibold mb-[32px]">
            Why Blueprint?
          </h2>
          <p className="”text-dark-gray/60 text-[18px] sm:text-[21px] mb-[54px]" />
          <ul className="flex flex-row flex-wrap justify-around mb-[32px]">
            <li className="mb-[40px] w-full">
              <div className="mb-[10px] mr-[20px] max-w-[100px] float-left overflow-hidden">
                <Image
                  alt="Bridge the gap between tech and non-profits."
                  src={impactImage}
                />
              </div>
              <h3 className="font-bptext text-[24px] font-semibold mb-[2px] mt-[10px]">
                Bridge the gap between tech and non-profits.
              </h3>
              <p className="text-[18px] text-dark-gray/70">
                It&apos;s true that non-profits lack technical resources to do
                their meaningful work. It&apos;s also true that tech can&apos;t
                solve global challenges. Therefore, we are creating
                collaborative spaces both for NPOs and aspiring technologists to
                make positive changes together!
              </p>
            </li>
            <li className="mb-[40px] w-full">
              <div className="mb-[10px] mr-[20px] max-w-[100px] float-left overflow-hidden">
                <Image
                  alt="Make a mark in your local community."
                  src={cultureImage}
                />
              </div>
              <h3 className="font-bptext text-[24px] font-semibold mb-[2px] mt-[10px]">
                Make a mark in your local community.
              </h3>
              <p className="text-[18px] text-dark-gray/70">
                Whether your university has a lot of clubs or not, you can be
                the one to bring accessible pathways for your community into
                technology that is inclusive and further the mission for social
                impact at the same time!
              </p>
            </li>
            <li className="mb-[40px] w-full">
              <div className="mb-[10px] mr-[20px] max-w-[100px] float-left overflow-hidden">
                <Image alt="Learn and grow." src={growthImage} />
              </div>
              <h3 className="font-bptext text-[24px] font-semibold mb-[2px] mt-[10px]">
                Learn and grow.
              </h3>
              <p className="text-[18px] text-dark-gray/70">
                You and your peers can develop skills in software development,
                digital product design, event management, and so much more. And
                all of this for a good cause!
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section
        className="bg-off-white py-[80px] px-0"
        id="establishment-process"
      >
        <div className="max-w-[1200px] mx-auto px-[30px] ">
          <h2 className="font-bptext text-[28px] sm:text-[36px] font-semibold mb-[54px] text-left">
            Establishment Process
          </h2>
          <div className="chapter-timeline">
            <TimelineItem
              num="01"
              title="Submit the Interest Form"
              description={
                <>
                  Fill out the form at the bottom of this page and someone on
                  our team will reach out to you to get the process started! If
                  you have any questions or concerns about anything in this
                  timeline, please email{' '}
                  <Link href={externalLinks.email}>team@calblueprint.org</Link>.
                </>
              }
              additionalInfo={
                <BPButton
                  buttonText="Interest Form"
                  href="/chapters#interest"
                  className="mt-[25px] mb-[35px]"
                />
              }
            />
            <TimelineItem
              num="02"
              title="Find a Team"
              description={
                <>
                  Reach out to friends and peers to form your executive team to
                  have a starting team in building your chapter.
                </>
              }
            />
            <TimelineItem
              num="03"
              title="Review your school/university's policies"
              description={
                <>
                  Ensure that you align your chapter formation with existing
                  student organization policies.
                </>
              }
            />
            <TimelineItem
              num="04"
              title="Onboard with Cal Blueprint"
              description={
                <>
                  Read over the provided Outreach &amp; Awareness, Project
                  Leader, Designer, and Developer guides to understand the
                  structure and function of Blueprint. Don&apos;t hesitate to
                  reach out if you have any questions or need any advice!
                </>
              }
            />
            <TimelineItem
              num="05"
              title="Recruit Members"
              description={
                <>
                  Create marketing material to spread the word in your community
                  and find people to join your project teams.
                </>
              }
            />
            <TimelineItem
              num="06"
              title="Find Non-Profit Organization (NPO) Partners"
              description={
                <>
                  Reach out to NPOs in your community and tell them about what
                  your Blueprint chapter can offer. Learn about their mission,
                  background, projects and technological needs to decide if they
                  would be a good fit as an NPO Partner.
                </>
              }
              last
            />
          </div>
        </div>
      </section>

      <section className="py-[50px] px-0" id="faqs">
        <div className="max-w-[1200px] mx-auto px-[30px]">
          <h2 className="font-bptext text-[28px] sm:text-[36px] font-semibold mb-[40px]">
            Frequently Asked Questions
          </h2>
          <h3 className="font-bptext text-[22px] font-medium mb-[5px]">
            What kind of applications does Blueprint typically build?
          </h3>
          <p className="text-dark-gray/70 text-[18px] mb-[40px]">
            We develop web applications and mobile applications. Blueprint
            typically built Rails applications with Postgres databases and React
            on the front-end, however, over time we have been changing tech
            stack based on NPO needs and Team Leads decisions. Make sure to read
            Technology Part in Project Leader Handbook and Developer Guide Tech
            that we send after onboarding to learn more! Mobile applications are
            built natively for the desired platform. The use of standardized
            frameworks helps developers switch between projects seamlessly and
            makes it easier for nonprofits to find developers to maintain the
            applications.
          </p>
          <h3 className="font-bptext text-[22px] font-medium mb-[5px]">
            Why are projects taken on for one year?
          </h3>
          <p className="text-dark-gray/70 text-[18px] mb-[40px]">
            The year-long development cycle allows for a project to be
            completed, tested and deployed. Initially, Blueprint developed
            projects in a semester and found there was not enough time devoted
            to user testing and deployment. Now, the first semester of the
            development cycle is devoted to user research, design, and
            developing the MVP application. The second semester is then used for
            user testing, refinement, and deployment of the project (handoff
            process to NPOs).
          </p>
          <h3 className="font-bptext text-[22px] font-medium mb-[5px]">
            How much time do members typically devote to Blueprint weekly?
          </h3>
          <p className="text-dark-gray/70 text-[18px] mb-[40px]">
            Members typically devote 9-12 hours a week to Cal Blueprint
            including general meetings and project team meetings. If the member
            is a project leader or in leadership they can expect to devote up to
            15-20 hours a week to Cal Blueprint. But, again it&apos;s up to each
            Chapter Leadership team to decide!
          </p>
          <h3 className="font-bptext text-[22px] font-medium mb-[5px]">
            I am a senior at my school, but really want to start a chapter. How
            can I help / being involved?
          </h3>
          <p className="text-dark-gray/70 text-[18px] mb-[40px]">
            You can be an alumni and still establish the chapter. Just make sure
            that you found a team, who are still in the school!
          </p>
          <h3 className="font-bptext text-[22px] font-medium mb-[5px]">
            How long does it take from establishing a chapter to the start of
            projects development?
          </h3>
          <p className="text-dark-gray/70 text-[18px] mb-[40px]">
            Usually it takes one semester to kick off the process, but it&apos;s
            up to you! It also depends on each university academic system and
            policies. But we are here to help and resolve every roadblock you
            may encounter!
          </p>
          <h3 className="font-bptext text-[22px] font-medium mb-[5px]">
            Are 5 projects required every year?
          </h3>
          <p className="text-dark-gray/70 text-[18px] mb-[40px]">
            No! Usually early stage chapters start with 2-3 projects to see how
            it&apos;s like:)
          </p>
        </div>
      </section>

      <section className="py-[70px] px-0" id="interest">
        <iframe
          src={externalLinks.chapter_interest_form}
          width="100%"
          height={1547}
          style={{ background: 'transparent', border: '1px solid #ccc' }}
        />
      </section>
    </>
  );
}
