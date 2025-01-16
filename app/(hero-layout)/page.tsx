import { FaAngleRight } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import CenteredHero from '@/components/Hero/CenteredHero';
import HeroButton from '@/components/HeroButton/HeroButton';
import projects from '@/data/projects.json';
import bidsImage from '@/public/images/home/bids.png';
import groupPhoto from '@/public/images/home/group_photo_2021.jpg';
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
            <HeroButton buttonText={'Learn More'} buttonLink={'/#about'} />
            <HeroButton
              buttonText={'Apply'}
              buttonLink={'/apply'}
              variant="clear"
            />
          </div>
        }
      />

      <section className="about-section">
        <div className="container">
          <h2 className="static-page-header marginBot-lg">About Us</h2>
          <h3 className="homepage-mission-statement">
            Blueprint strives to make technology accessible and useful for those
            who create communities and promote public welfare.
          </h3>
          <Link className="homepage-link" href="/about">
            <div className="flex flex-row">
              Read More
              <FaAngleRight className="my-auto font-normal" />
            </div>
          </Link>
        </div>
      </section>

      <section className="projects-section">
        <div className="container">
          <h2 className="static-page-header marginBot-lg">Our Projects</h2>
          <p className="static-page-desc marginBot-xl">
            Each year, teams of five students work with non-profit organizations
            on projects to help them better serve their communities. We've
            designed and built a crowdfunding application for Berkeley's public
            schools, a professional development platform for digital literacy in
            Oakland, and much more!
          </p>
          <Link className="homepage-link marginBot-xl" href="/projects">
            <div className="flex flex-row">
              View All Projects
              <FaAngleRight className="my-auto font-normal" />
            </div>
          </Link>
        </div>

        <div className="projects-container">
          {Object.keys(projectList).map(name => {
            const projectData = projectList[
              name as keyof typeof projectList
            ] as ProjectData;

            if (projectData.status !== 'current') return null;
            return (
              <Link href="/projects/ocf" key={projectData.title}>
                <div className="project-item" id={name}>
                  <div className="project-img img-container">
                    <Image
                      alt={projectData.title}
                      src={'/' + projectData.banner_image}
                      fill
                    />
                  </div>
                  <h4>{projectData.title}</h4>
                  <p>{firstSentence(projectData.blurb ?? '')}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="involve-section">
        <div className="container">
          <h2 className="static-page-header marginBot-lg">Get Involved</h2>
          <div className="involve-container students-involve">
            <div className="text marginRight-xl">
              <h4>Berkeley Students</h4>
              <p className="static-page-desc marginBot-lg">
                Applications will open for student developers at the beginning
                of each semester. Follow our{' '}
                <Link href="//facebook.com/calblueprint">Facebook page</Link> to
                stay updated!
              </p>
              <Link className="homepage-link" href="/apply/students">
                <div className="flex flex-row">
                  Learn More
                  <FaAngleRight className="my-auto font-normal" />
                </div>
              </Link>
            </div>
            <div className="image img-container marginLeftRight-xl">
              <Image alt="Blueprint group photo" src={groupPhoto} />
            </div>
          </div>
          <div className="involve-container npo-involve">
            <div className="image img-container marginLeftRight-xl">
              <Image alt="Nonprofit" src={nonprofitImage} />
            </div>
            <div className="text marginLeft-xl">
              <h4>Nonprofit Organizations</h4>
              <p className="static-page-desc marginBot-lg">
                If you’re a nonprofit organization with a project in mind, we
                encourage you to apply! We accept NPO applications every June.
                Follow our{' '}
                <Link href="//facebook.com/calblueprint">Facebook page</Link> to
                stay updated!
              </p>
              <Link className="homepage-link" href="/apply/nonprofits">
                <div className="flex flex-row">
                  Learn More
                  <FaAngleRight className="my-auto font-normal" />
                </div>
              </Link>
            </div>
          </div>
          <h4>Sponsors and Partners</h4>
          <p className="static-page-desc marginBot-xl">
            Our sponsors and partners help make what we do here at Blueprint a
            reality. Take a moment to learn about them below!
          </p>
          <div className="other-org-container">
            <Link className="org" href="https://www.yahoo.com/">
              <div className="img-container">
                <Image alt="Yahoo" src={yahooImage} />
              </div>
              <h5>Yahoo</h5>
            </Link>
            <Link className="org" href="https://hu.ma.ne/">
              <div className="img-container-wide">
                <Image alt="Humane" src={humaneImage} />
              </div>
              <h5>Humane</h5>
            </Link>
            <Link className="org" href="https://notion.so/">
              <div className="img-container">
                <Image alt="Sponsor: Notion" src={notionImage} />
              </div>
              <h5>Notion</h5>
            </Link>
            <Link className="org" href="https://www.wealthfront.com/">
              <div className="img-container">
                <Image alt="Sponsor: Wealthfront" src={wealthfrontImage} />
              </div>
              <h5>Wealthfront</h5>
            </Link>
            <Link className="org" href="https://www.ffwd.org/">
              <div className="img-container">
                <Image alt="Sponsor: Fast Forward" src={fastForwardImage} />
              </div>
              <h5>Fast Forward</h5>
            </Link>
            <Link className="org" href="https://witi.berkeley.edu/">
              <div className="img-container">
                <Image alt="Sponsor: Wit" src={witImage} />
              </div>
              <h5>Women in Tech Initiative</h5>
            </Link>
          </div>
          <h4>Other Organizations</h4>
          <p className="static-page-desc marginBot-xl">
            If your background isn’t a perfect fit for Blueprint, don’t worry!
            There are plenty of other student organizations at Berkeley that
            support nonprofits and social good.
          </p>
          <div className="other-org-container">
            <Link className="org" href="http://theberkeleygroup.org/">
              <div className="img-container">
                <Image alt="The Berkeley Group" src={tbgImage} />
              </div>
              <h5>The Berkeley Group</h5>
              <p>Consulting for Non-Profits</p>
            </Link>
            <Link
              className="org"
              href="https://data.berkeley.edu/research/discovery/"
            >
              <div className="img-container">
                <Image
                  alt="Berkeley Institute for Data Science (BIDS)"
                  src={bidsImage}
                />
              </div>
              <h5>Berkeley Institute for Data Science (BIDS)</h5>
              <p>Data science for social good</p>
            </Link>
            <Link className="org-wide" href="https://nib.berkeley.edu">
              <div className="img-container-wide">
                <Image alt="Net Impact Berkeley" src={nibImage} />
              </div>
              <h5>Net Impact Berkeley</h5>
              <p>Bridging Business and Social Impact</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <h2 className="static-page-header marginBot-lg">Contact Us</h2>
          <div className="contact-items">
            <h3 className="static-page-desc">
              Couldn’t find what you needed? We’re easily reached via email or
              social media.
            </h3>
            <div className="contact-btns">
              <Link
                className="bp-btn marginRight-xs marginBot-xxs"
                href="/contact_forms/new"
              >
                Email Us
              </Link>
              <Link
                className="bp-btn btn-white marginBot-xxs"
                href="https://facebook.com/calblueprint"
              >
                Facebook Page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
