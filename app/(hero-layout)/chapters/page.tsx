import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero/Hero';
import Navbar from '@/components/Navbar/Navbar';
import PageNav from '@/components/PageNav/PageNav';
import chapters from '@/data/chapters.json';
import externalLinks from '@/data/external_links.json';
import impactImage from '@/public/images/apply/nonprofits/impact.png';
import cultureImage from '@/public/images/apply/students/culture.png';
import growthImage from '@/public/images/apply/students/growth.png';
import heroImage from '@/public/images/projects/background.png';

type BlueprintChapter = {
  name: string;
  image: string;
  description: string;
  url: string;
};

export default function ChapterPage() {
  const title = 'Start A Blueprint Chapter';
  const body =
    'Blueprint was founded at UC Berkeley in Spring 2013. Since then we started scaling our impact and further mission by establishing chapters in different colleges around the world.';
  const buttonText = 'Submit Interest Form';
  const buttonLink = '/chapters#interest';
  const sections = [
    { text: 'Current Chapters', sectionScrollHref: 'mission' },
    { text: 'Why Blueprint', sectionScrollHref: 'value' },
    { text: 'Establishment Process', sectionScrollHref: 'team' },
    { text: 'FAQs', sectionScrollHref: 'team' },
  ];

  return (
    <>
      <Hero
        title={title}
        body={body}
        buttonText={buttonText}
        buttonLink={buttonLink}
        heroImage={heroImage}
        className={'static-page-hero chapter-overview-hero'}
      >
        <PageNav sections={sections} />
      </Hero>

      <section className="current-chapters" id="current-chapters">
        <h2 className="static-page-header marginBot-lg">Current Chapters</h2>
        {/* <div className="chapter-card-container"> */}
        <div className="max-w-[1430px] mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {chapters.chapters.map((chapter: BlueprintChapter, i) => (
            <div className="chapter-card-column col-span-1" key={i}>
              <Link className="chapter-card" href={chapter.url}>
                <div
                  className="chapter-card--image"
                  style={{
                    backgroundImage: `url(${chapter.image})`,
                  }}
                />
                <h3 className="chapter-card--title">{chapter.name}</h3>
                <p className="chapter-card--summary">{chapter.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="why-blueprint-section" id="why-blueprint">
        <div className="max-w-[1200px] mx-auto px-[30px]">
          <h2 className="static-page-header marginBot-lg">Why Blueprint?</h2>
          <p className="static-page-desc marginBot-xxl" />
          <ul className="why-blueprint-list-container marginBot-lg">
            <li className="why-blueprint-item">
              <div className="img-container">
                <Image
                  alt="Bridge the gap between tech and non-profits."
                  src={impactImage}
                />
              </div>
              <h3>Bridge the gap between tech and non-profits.</h3>
              <p>
                It’s true that non-profits lack technical resources to do their
                meaningful work. It’s also true that tech can’t solve global
                challenges. Therefore, we are creating collaborative spaces both
                for NPOs and aspiring technologists to make positive changes
                together!
              </p>
            </li>
            <li className="why-blueprint-item">
              <div className="img-container">
                <Image
                  alt="Make a mark in your local community."
                  src={cultureImage}
                />
              </div>
              <h3>Make a mark in your local community.</h3>
              <p>
                Whether your university has a lot of clubs or not, you can be
                the one to bring accessible pathways for your community into
                technology that is inclusive and further the mission for social
                impact at the same time!
              </p>
            </li>
            <li className="why-blueprint-item">
              <div className="img-container">
                <Image alt="Learn and grow." src={growthImage} />
              </div>
              <h3>Learn and grow.</h3>
              <p>
                You and your peers can develop skills in software development,
                digital product design, event management, and so much more. And
                all of this for a good cause!
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section
        className="establishment-process-section"
        id="establishment-process"
      >
        <div className="max-w-[1200px] mx-auto px-[30px] ">
          <h2 className="static-page-header marginBot-xxl">
            Establisment Process
          </h2>
          <div className="chapter-timeline">
            <div className="timeline-row">
              <div className="num-col">
                <div className="timeline-num">01</div>
              </div>
              <div className="text-col">
                <div className="timeline-row-title">
                  Submit the Interest Form
                </div>
                <div className="timeline-row-description">
                  Fill out the form at the bottom of this page and someone on
                  our team will reach out to you to get the process started! If
                  you have any questions or concerns about anything in this
                  timeline, please email{' '}
                  <Link href="mailto:team@calblueprint.org">
                    team@calblueprint.org
                  </Link>
                  .
                </div>
                <div className="timeline-row-btn">
                  <Link className="bp-btn" href="/chapters#interest">
                    Interest Form
                  </Link>
                </div>
              </div>
            </div>
            <div className="timeline-row">
              <div className="num-col">
                <div className="timeline-num">02</div>
              </div>
              <div className="text-col">
                <div className="timeline-row-title">Find a Team</div>
                <div className="timeline-row-description">
                  Reach out to friends and peers to form your executive team to
                  have a starting team in building your chapter.
                </div>
              </div>
            </div>
            <div className="timeline-row">
              <div className="num-col">
                <div className="timeline-num">03</div>
              </div>
              <div className="text-col">
                <div className="timeline-row-title">
                  Review your school/university’s policies
                </div>
                <div className="timeline-row-description">
                  Ensure that you align your chapter formation with existing
                  student organization policies.
                </div>
              </div>
            </div>
            <div className="timeline-row">
              <div className="num-col">
                <div className="timeline-num">04</div>
              </div>
              <div className="text-col">
                <div className="timeline-row-title">
                  Onboard with Cal Blueprint
                </div>
                <div className="timeline-row-description">
                  Read over the provided Outreach &amp; Awareness, Project
                  Leader, Designer, and Developer guides to understand the
                  structure and function of Blueprint. Don’t hesitate to reach
                  out if you have any questions or need any advice!
                </div>
              </div>
            </div>
            <div className="timeline-row">
              <div className="num-col">
                <div className="timeline-num">05</div>
              </div>
              <div className="text-col">
                <div className="timeline-row-title">Recruit Members</div>
                <div className="timeline-row-description">
                  Create marketing material to spread the word in your community
                  and find people to join your project teams.
                </div>
              </div>
            </div>
            <div className="timeline-row">
              <div className="num-col">
                <div className="timeline-num">06</div>
              </div>
              <div className="text-col">
                <div className="timeline-row-title">
                  Find Non-Profit Organization (NPO) Partners
                </div>
                <div className="timeline-row-description">
                  Reach out to NPOs in your community and tell them about what
                  your Blueprint chapter can offer. Learn about their mission,
                  background, projects and technological needs to decide if they
                  would be a good fit as an NPO Partner.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-faqs-section" id="faqs">
        <div className="max-w-[1200px] mx-auto px-[30px]">
          <h2 className="static-page-header marginBot-xl">
            Frequently Asked Questions
          </h2>
          <h3>What kind of applications does Blueprint typically build?</h3>
          <p>
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
          <h3>Why are projects taken on for one year?</h3>
          <p>
            The year-long development cycle allows for a project to be
            completed, tested and deployed. Initially, Blueprint developed
            projects in a semester and found there was not enough time devoted
            to user testing and deployment. Now, the first semester of the
            development cycle is devoted to user research, design, and
            developing the MVP application. The second semester is then used for
            user testing, refinement, and deployment of the project (handoff
            process to NPOs).
          </p>
          <h3>
            How much time do members typically devote to Blueprint weekly?
          </h3>
          <p>
            Members typically devote 9-12 hours a week to Cal Blueprint
            including general meetings and project team meetings. If the member
            is a project leader or in leadership they can expect to devote up to
            15-20 hours a week to Cal Blueprint. But, again it's up to each
            Chapter Leadership team to decide!
          </p>
          <h3>
            I am a senior at my school, but really want to start a chapter. How
            can I help / being involved?
          </h3>
          <p>
            You can be an alumni and still establish the chapter. Just make sure
            that you found a team, who are still in the school!
          </p>
          <h3>
            How long does it take from establishing a chapter to the start of
            projects development?
          </h3>
          <p>
            Usually it takes one semester to kick off the process, but it's up
            to you! It also depends on each university academic system and
            policies. But we are here to help and resolve every roadblock you
            may encounter!
          </p>
          <h3>Are 5 projects required every year?</h3>
          <p>
            No! Usually early stage chapters start with 2-3 projects to see how
            it's like:)
          </p>
        </div>
      </section>

      <section className="chapter-interest-form" id="interest">
        <iframe
          className="airtable-embed airtable-dynamic-height"
          src={externalLinks.chapter_interest_form}
          width="100%"
          height={1547}
          style={{ background: 'transparent', border: '1px solid #ccc' }}
        />
      </section>
    </>
  );
}
