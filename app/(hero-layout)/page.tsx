import Image from 'next/image';
import Link from 'next/link';
import BPButton from '@/components/Button/Button';
import CenteredHero from '@/components/Hero/CenteredHero';
import HeroButton from '@/components/HeroButton/HeroButton';
import HomepageLink from '@/components/HomepageLink/HomepageLink';
import externalLinks from '@/data/external_links.json';
import projects from '@/data/projects.json';
import { env } from '@/env.mjs';
import bidsImage from '@/public/images/home/bids.png';
import groupPhoto from '@/public/images/home/group_photo_2024.jpg';
import nibImage from '@/public/images/home/nib.png';
import nonprofitImage from '@/public/images/home/nonprofits.jpg';
import tbgImage from '@/public/images/home/tbg.png';
import fastForwardImage from '@/public/images/sponsors/fast_forward.png';
import humaneImage from '@/public/images/sponsors/humane.png';
import notionImage from '@/public/images/sponsors/notion.png';
import wealthfrontImage from '@/public/images/sponsors/wealthfront.png';
import witImage from '@/public/images/sponsors/wit.png';
import yahooImage from '@/public/images/sponsors/yahoo.png';
import { ProjectData } from './projects/page';

export default function HomePage() {
  const projectList = projects.projects.projects_list;
  const firstSentence = (text: string) => text.split('. ')[0] + '.';

  return (
    <>
      <CenteredHero
        title={'Tech for Social Good'}
        body={
          'We’re a team of UC Berkeley students that develops software pro bono for nonprofits and promotes technology for social good.'
        }
        action={
          <div className="flex flex-row gap-3">
            <HeroButton
              buttonText={'Learn More'}
              buttonLink={'/#about'}
              bounce
            />
            <HeroButton
              buttonText={'Apply'}
              buttonLink={'/apply'}
              variant="clear"
              bounce
            />
          </div>
        }
      />

      <section
        className="py-[50px] sm:pt-[100px] bg-off-white sm:py-[60px]"
        id="about"
      >
        <div className="container px-[12px] mx-auto">
          <h2 className="font-bptext text-[28px] sm:text-[36px] font-semibold mb-[32px]">
            About Us
          </h2>
          <h3 className="text-dark-gray text-opacity-80 font-bptext text-[30px] font-light leading-[1.3] max-w-[950px] mb-[50px] md:text-[40px]">
            Blueprint strives to make technology accessible and useful for those
            who create communities and promote public welfare.
          </h3>
          <HomepageLink buttonText="Read More" href="/about" />
        </div>
      </section>

      <section className="bg-off-white py-[60px] px-0">
        <div className="container mx-auto px-[12px]">
          <h2 className="font-bptext text-[28px] sm:text-[36px] font-semibold mb-[32px]">
            Our Projects
          </h2>
          <p className="text-dark-gray text-opacity-60 text-[18px] sm:text-[21px] mb-[40px]">
            Each year, teams of five students work with non-profit organizations
            on projects to help them better serve their communities. We&apos;ve
            designed and built a crowdfunding application for Berkeley&apos;s
            public schools, a professional development platform for digital
            literacy in Oakland, and much more!
          </p>
          <HomepageLink
            buttonText="View All Projects"
            href="/projects"
            className="mb-[40px]"
          />
        </div>

        <div className="bg-off-white py-0 px-[15px] sm:py-[0px] sm:px-[30px] block sm:grid sm:grid-cols-3 sm:gap-y-[20px] lg:flex lg:gap-0 justify-between my-[30px] mx-auto max-w-[1350px]">
          {Object.keys(projectList).map(name => {
            const projectData = projectList[
              name as keyof typeof projectList
            ] as ProjectData;

            if (projectData.status !== 'current') return null;
            return (
              <Link
                href={`/projects/${name}`}
                key={projectData.title}
                className="block flex-1 p-0 sm:py-0 sm:px-[20px] mb-[20px] sm:m-0 no-underline backface-hidden transform-3d"
              >
                <div
                  className="bg-center bg-no-repeat bg-cover bg-position-[50%] shadow-project-item rounded-[3px] text-bp-white flex h-[200px] sm:h-[300px] justify-end overflow-hidden p-[20px] relative transition duration-200 flex-col flex-nowrap w-full 
                  hover:-translate-y-[10px] hover:shadow-project-item-hover"
                  id={name}
                >
                  <div className={`absolute inset-0 z-[1] ${name}-gradient`} />
                  <div className="h-full left-0 absolute top-0 transition duration-200 w-full overflow-visible hover:scale-105">
                    <Image
                      alt={projectData.title}
                      src={
                        env.NEXT_PUBLIC_BASE_PATH +
                        '/' +
                        projectData.banner_image
                      }
                      fill
                      className="absolute h-full w-full left-0 top-0 right-0 bottom-0 text-transparent object-cover align-middle border-none"
                    />
                  </div>
                  <h4 className="font-bptext text-[20px] sm:text-[23px] font-semibold mb-[10px] relative z-[2]">
                    {projectData.title}
                  </h4>
                  <p className="text-bp-white text-opacity-90 text-[15px] relative z-[2]">
                    {firstSentence(projectData.blurb ?? '')}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="py-[90px] px-0">
        <div className="container mx-auto px-[12px]">
          <h2 className="font-bptext text-[28px] sm:text-[36px] font-semibold mb-[32px]">
            Get Involved
          </h2>
          <div className="flex flex-row flex-wrap mb-[40px] sm:mb-[90px] students-involve">
            <div className="flex-initial sm:flex-1 order-[1] sm:order-none my-[20px] sm:mr-[40px] sm:my-0">
              <h4 className="font-bptext text-[26px] mb-[20px]">
                Berkeley Students
              </h4>
              <p className="text-dark-gray text-opacity-60 text-[18px] mb-[32px]">
                Applications will open for student developers at the beginning
                of each semester. Follow our{' '}
                <Link href={externalLinks.facebook}>Facebook page</Link> to stay
                updated!
              </p>
              <HomepageLink buttonText="Learn More" href="/apply/students" />
            </div>
            <div className="rounded-[3px] flex-1 max-h-[230px] shadow-dark-gray-10 m-0 sm:mx-[40px] overflow-hidden">
              <Image
                alt="Blueprint group photo"
                src={groupPhoto}
                className="w-full h-full my-0 mx-auto object-cover align-middle"
              />
            </div>
          </div>
          <div className="flex flex-row flex-wrap mb-[40px] sm:mb-[90px]">
            <div className="rounded-[3px] flex-1 max-h-[230px] shadow-dark-gray-10 m-0 sm:mx-[40px] overflow-hidden">
              <Image
                alt="Nonprofit"
                src={nonprofitImage}
                className="w-full h-full my-0 mx-auto object-cover align-middle"
              />
            </div>
            <div className="flex-initial sm:flex-1 order-[1] sm:order-none my-[20px] sm:ml-[40px] sm:my-0">
              <h4 className="font-bptext text-[26px] mb-[20px]">
                Nonprofit Organizations
              </h4>
              <p className="text-dark-gray text-opacity-60 text-[18px] mb-[32px]">
                If you&apos;re a nonprofit organization with a project in mind,
                we encourage you to apply! We accept NPO applications every
                June. Follow our{' '}
                <Link href={externalLinks.facebook}>Facebook page</Link> to stay
                updated!
              </p>
              <HomepageLink buttonText="Learn More" href="/apply/nonprofits" />
            </div>
          </div>
          <h4 className="font-bptext text-[26px] mb-[20px]">
            Sponsors and Partners
          </h4>
          <p className="text-dark-gray text-opacity-60 text-[18px] mb-[40px]">
            Our sponsors and partners help make what we do here at Blueprint a
            reality. Take a moment to learn about them below!
          </p>
          <div className="flex flex-row flex-wrap justify-center align-center">
            <Link
              className="mt-0 mx-[20px] mb-[30px] w-[220px] text-center no-underline"
              href="https://www.yahoo.com/"
            >
              <div className="mt-0 mx-auto mb-[20px]">
                <Image
                  alt="Yahoo"
                  src={yahooImage}
                  className="max-w-[150px] max-h-[80px] mx-auto object-scale-down"
                />
              </div>
              <h5 className="text-[18px] font-medium">Yahoo</h5>
            </Link>
            <Link
              className="mt-0 mx-[20px] mb-[30px] w-[220px] text-center no-underline"
              href="https://hu.ma.ne/"
            >
              <div className="mt-0 mx-auto mb-[20px] max-w-[200px]">
                <Image
                  alt="Humane"
                  src={humaneImage}
                  className="mx-auto object-scale-down"
                />
              </div>
              <h5 className="text-[18px] font-medium">Humane</h5>
            </Link>
            <Link
              className="mt-0 mx-[20px] mb-[30px] w-[220px] text-center no-underline"
              href="https://notion.so/"
            >
              <div className="mt-0 mx-auto mb-[20px]">
                <Image
                  alt="Sponsor: Notion"
                  src={notionImage}
                  className="max-w-[150px] max-h-[80px] w-full h-full mx-auto object-scale-down"
                />
              </div>
              <h5 className="text-[18px] font-medium">Notion</h5>
            </Link>
            <Link
              className="mt-0 mx-[20px] mb-[30px] w-[220px] text-center no-underline"
              href="https://www.wealthfront.com/"
            >
              <div className="mt-0 mx-auto mb-[20px]">
                <Image
                  alt="Sponsor: Wealthfront"
                  src={wealthfrontImage}
                  className="max-w-[150px] max-h-[80px] w-full h-full mx-auto object-scale-down"
                />
              </div>
              <h5 className="text-[18px] font-medium">Wealthfront</h5>
            </Link>
            <Link
              className="mt-0 mx-[20px] mb-[30px] w-[220px] text-center no-underline"
              href="https://www.ffwd.org/"
            >
              <div className="mt-0 mx-auto mb-[20px]">
                <Image
                  alt="Sponsor: Fast Forward"
                  src={fastForwardImage}
                  className="max-w-[150px] max-h-[80px] w-full h-full mx-auto object-scale-down"
                />
              </div>
              <h5 className="text-[18px] font-medium">Fast Forward</h5>
            </Link>
            <Link
              className="mt-0 mx-[20px] mb-[30px] w-[220px] text-center no-underline"
              href="https://witi.berkeley.edu/"
            >
              <div className="mt-0 mx-auto mb-[20px]">
                <Image
                  alt="Sponsor: Wit"
                  src={witImage}
                  className="max-w-[150px] max-h-[80px] w-full h-full mx-auto object-scale-down"
                />
              </div>
              <h5 className="text-[18px] font-medium">
                Women in Tech Initiative
              </h5>
            </Link>
          </div>
          <h4 className="font-bptext text-[26px] mb-[20px]">
            Other Organizations
          </h4>
          <p className="text-dark-gray text-opacity-60 text-[18px] mb-[40px]">
            If your background isn&apos;t a perfect fit for Blueprint,
            don&apos;t worry! There are plenty of other student organizations at
            Berkeley that support nonprofits and social good.
          </p>
          <div className="flex flex-row flex-wrap justify-center items-center">
            <Link
              className="mt-0 mx-[20px] mb-[30px] w-[220px] text-center no-underline"
              href="http://theberkeleygroup.org/"
            >
              <div className="mt-0 mx-auto mb-[20px]">
                <Image
                  alt="The Berkeley Group"
                  src={tbgImage}
                  className="max-w-[150px] max-h-[80px] w-full h-full mx-auto object-scale-down"
                />
              </div>
              <h5 className="text-[18px] font-medium">The Berkeley Group</h5>
              <p className="text-dark-gray text-opacity-60 text-[16px]">
                Consulting for Non-Profits
              </p>
            </Link>
            <Link
              className="mt-0 mx-[20px] mb-[30px] w-[220px] text-center no-underline"
              href="https://data.berkeley.edu/research/discovery/"
            >
              <div className="mt-0 mx-auto mb-[20px]">
                <Image
                  alt="Berkeley Institute for Data Science (BIDS)"
                  src={bidsImage}
                  className="max-w-[150px] max-h-[80px] w-full h-full mx-auto object-scale-down"
                />
              </div>
              <h5 className="text-[18px] font-medium">
                Berkeley Institute for Data Science (BIDS)
              </h5>
              <p className="text-dark-gray text-opacity-60 text-[16px]">
                Data science for social good
              </p>
            </Link>
            <Link
              className="mt-0 mx-[20px] mb-[30px] w-[250px] text-center no-underline"
              href="https://nib.berkeley.edu"
            >
              <div className="mt-0 mx-auto mb-[20px] max-w-[200px]">
                <Image
                  alt="Net Impact Berkeley"
                  src={nibImage}
                  className="w-full h-full mx-auto object-scale-down"
                />
              </div>
              <h5 className="text-[18px] font-medium">Net Impact Berkeley</h5>
              <p className="text-dark-gray text-opacity-60 text-[16px]">
                Bridging Business and Social Impact
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-off-white py-[60px] px-0">
        <div className="container px-[12px] mx-auto">
          <h2 className="font-bptext text-[28px] sm:text-[36px] font-semibold mb-[32px]">
            Contact Us
          </h2>
          <div className="block sm:flex">
            <h3 className="text-dark-gray text-opacity-60 text-[22px] max-w-[550px] mr-[30px]">
              Couldn&apos;t find what you needed? We&apos;re easily reached via
              email or social media.
            </h3>
            <div className="ml-0 mt-[30px] sm:ml-auto sm:mt-0 w-[300px]">
              <BPButton
                buttonText="Email Us"
                href={externalLinks.email}
                className="mr-[12px] mb-[6px]"
              />
              <BPButton
                buttonText="Facebook Page"
                href={externalLinks.facebook}
                variant="white"
                className="mb-[6px]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
