import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import BPButton from '@/components/Button/Button';
import Hero from '@/components/Hero/Hero';
import HeroButton from '@/components/HeroButton/HeroButton';
import HeroMessage from '@/components/HeroMessage/HeroMessage';
import PageNav from '@/components/PageNav/PageNav';
import TimelineItem from '@/components/TimelineItem/TimelineItem';
import config from '@/data/students_applications.json';
import adaptabilityImage from '@/public/images/apply/students/adaptability.png';
import attitudeImage from '@/public/images/apply/students/attitude.png';
import cultureImage from '@/public/images/apply/students/culture.png';
import growthImage from '@/public/images/apply/students/growth.png';
import passionImage from '@/public/images/apply/students/passion.png';
import studentsImage from '@/public/images/apply/students/students.jpg';
import teamworkImage from '@/public/images/apply/students/teamwork.png';

export const metadata: Metadata = {
  title: 'Students | Blueprint',
};

export default function StudentApplyPage() {
  const appsEnabled = config.student_applications_enabled;

  const appsDisabledText = `Our student applications for the ${config.semester} semester will open ${config.application_release_date}, and close on ${config.application_deadline}.`;

  const action = appsEnabled ? (
    <HeroButton
      buttonText={'Apply Now'}
      buttonLink={config.student_application_link}
      className="mt-[40px]"
    />
  ) : (
    <HeroMessage text={appsDisabledText} />
  );

  const sections = [
    { text: 'Developer', href: '#developer' },
    { text: 'External', href: '#external' },
    // { text: 'Designer', href: '#designer' }, not recruiting for designers in fall 2025
    { text: 'Decision Criteria', href: '#decision-criteria' },
    { text: 'FAQs', href: '#faqs' },
  ];

  return (
    <>
      <Hero
        title={'For Students'}
        body={
          'Joining Blueprint is the perfect way to use your skills to give back to the community. We accept applications at the beginning of every semester.'
        }
        action={action}
        heroImage={studentsImage}
        className="bg-cover bg-center bg-no-repeat relative"
      >
        <PageNav sections={sections} />
      </Hero>

      <section className="bg-off-white py-[80px] px-0" id="developer">
        <div className="container mx-auto px-[12px] mb-[32px]">
          <h2 className="font-bptext text-[28px] sm:text-[36px] font-semibold text-center mb-[16px]">
            Developer Application Process
          </h2>
          <p className="text-dark-gray/60 text-[18px] sm:text-[21px] text-center mb-[32px]">
            Learn what it means to be a developer{' '}
            <strong>
              👉{' '}
              <Link
                href="https://go.calblueprint.org/developer-role"
                rel="noopener noreferrer"
              >
                go.calblueprint.org/developer-role
              </Link>{' '}
              👈
            </strong>
          </p>
          <div className="my-0 mx-auto max-w-[800px]">
            <TimelineItem
              num={'01'}
              title={'Infosession Series'}
              description={
                <>
                  We will host a general in-person infosession on{' '}
                  {config.infosession_dates}, and there will be multiple virtual
                  infosessions on {config.virtual_infosessions_date}. These
                  sessions will give you a chance to ask questions and talk to
                  our members in a comfortable setting! Take a look at our{' '}
                  <Link href="https://go.calblueprint.org/infosession">
                    infosession schedule
                  </Link>{' '}
                  for time and location updates.
                </>
              }
            />
            <TimelineItem
              num={'02'}
              title="Applications Due"
              date={config.application_deadline}
              description={
                <>
                  The application includes 3 short response questions to help us
                  understand your connection to Blueprint&apos;s mission and
                  values.
                  <strong>
                    The application is due on {config.application_deadline}.
                  </strong>{' '}
                  Decisions will be released via email on{' '}
                  {config.written_round_decision_date}. Note that all
                  applications are reviewed after the deadline, so there&apos;s
                  no advantage to submitting early.
                </>
              }
              additionalInfo={
                <div className="mt-[25px] mx-0 mb-[35px]">
                  {config.student_applications_enabled ? (
                    <BPButton
                      buttonText="Start Application"
                      href={config.student_application_link}
                    />
                  ) : (
                    <div className="text-bp-blue text-[14px] font-medium">
                      Student applications will be open on{' '}
                      {config.application_release_date}.
                    </div>
                  )}
                </div>
              }
            />
            <TimelineItem
              num={'03'}
              title="Blueprint Games"
              date={config.bp_games_date}
              description={
                <>
                  A fun, interactive teamwork session involving a series of
                  challenges and puzzles that make you think critically. It will
                  simulate working on a Blueprint project team and the
                  collaborative nature of being a developer. This round is by
                  invitation only. Time and location will be emailed to invited
                  candidates. Decisions after this round will be emailed on{' '}
                  {config.bp_games_decision_date}.
                </>
              }
            />
            <TimelineItem
              num={'04'}
              title="Meet the Club"
              date={config.mtc_dates}
              description={
                <>
                  Meet the Club is an event for you to get to know and chat with{' '}
                  <Link href="/about#team">our members</Link> in a casual
                  setting! This event is by invitation only.
                </>
              }
            />
            <TimelineItem
              num={'05'}
              title="Build with Blueprint"
              date={config.bwbp_dates}
              description={
                <>
                  A 1-hour technical challenge to give you a chance to showcase
                  your technical resourcefulness, growth, and adaptability. This
                  round is by invitation only.
                </>
              }
              last
            />
          </div>
        </div>

        <div className="container mx-auto px-[12px] mt-[54px]" id="external">
          <h2 className="font-bptext text-[28px] sm:text-[36px] font-semibold text-center mb-[16px]">
            External Application Process
          </h2>
          <p className="text-dark-gray/60 text-[18px] sm:text-[21px] text-center mb-[32px]">
            Learn what it means to be on external{' '}
            <strong>
              👉{' '}
              <Link
                href="https://go.calblueprint.org/external-role"
                target="_blank"
                rel="noopener noreferrer"
              >
                go.calblueprint.org/external-role
              </Link>{' '}
              👈
            </strong>
          </p>
          <div className="my-0 mx-auto max-w-[800px]">
            <TimelineItem
              num={'01'}
              title={'Infosession Series'}
              description={
                <>
                  We will host a general in-person infosession on{' '}
                  {config.infosession_dates}, and there will be multiple virtual
                  infosessions on {config.virtual_infosessions_date}. These
                  sessions will give you a chance to ask questions and talk to
                  our members in a comfortable setting! Take a look at our{' '}
                  <Link href="https://go.calblueprint.org/infosession">
                    infosession schedule
                  </Link>{' '}
                  for time and location updates.
                </>
              }
            />
            <TimelineItem
              num={'02'}
              title="Applications Due"
              date={config.application_deadline}
              description={
                <>
                  The application includes 3 short response questions to help us
                  understand your connection to Blueprint&apos;s mission and
                  values.{' '}
                  <strong>
                    The application is due on {config.application_deadline}.
                  </strong>{' '}
                  Decisions will be released via email on{' '}
                  {config.written_round_decision_date}. Note that all
                  applications are reviewed after the deadline, so there&apos;s
                  no advantage to submitting early.
                </>
              }
              additionalInfo={
                <div className="mt-[25px] mx-0 mb-[35px]">
                  {config.student_applications_enabled ? (
                    <BPButton
                      buttonText="Start Application"
                      href={config.student_application_link}
                    />
                  ) : (
                    <div className="text-bp-blue text-[14px] font-medium">
                      Student applications will be open on{' '}
                      {config.application_release_date}.
                    </div>
                  )}
                </div>
              }
            />
            <TimelineItem
              num={'03'}
              title="External Interviews"
              date={config.external_interview_dates}
              description={
                <>
                  We will be conducting interviews for the external team
                  throughout the entire week. This event is by invitation only.
                  Invited candidates will receive an interview sign-up link via
                  email.
                </>
              }
            />
            <TimelineItem
              num={'04'}
              title="Meet the Club"
              date={config.mtc_dates}
              description={
                <>
                  Meet the Club is an event for you to get to know and chat with{' '}
                  <Link href="/about#team">our members</Link> in a casual
                  setting! This event is by invitation only.
                </>
              }
              last
            />
          </div>
        </div>
        {/* Not recruiting for designers in Fall 2025 */}

        {/* <div className="container mx-auto px-[12px] mt-[54px]" id="designer">
          <h2 className="font-bptext text-[28px] sm:text-[36px] font-semibold text-center mb-[16px]">
            Designer Application Process
          </h2>
          <p className="text-dark-gray/60 text-[18px] sm:text-[21px] text-center mb-[32px]">
            Learn what it means to be a designer{' '}
            <strong>
              👉{' '}
              <Link
                href="https://go.calblueprint.org/designer-role"
                target="_blank"
                rel="noopener noreferrer"
              >
                go.calblueprint.org/designer-role
              </Link>{' '}
              👈
            </strong>
          </p>
          <div className="my-0 mx-auto max-w-[800px]">
            <TimelineItem
              num="01"
              title="Infosession Series"
              description={
                <>
                  We will host a general in-person infosession on{' '}
                  {config.infosession_dates}, and there will be multiple virtual
                  infosessions on {config.virtual_infosessions_date}. These
                  sessions will give you a chance to ask questions and talk to
                  our members in a comfortable setting! Take a look at our{' '}
                  <Link href="https://go.calblueprint.org/infosession">
                    infosession schedule
                  </Link>{' '}
                  for time and location updates.
                </>
              }
            />
            <TimelineItem
              num="02"
              title="Applications Due"
              date={config.application_deadline}
              description={
                <>
                  The application includes 3 short response questions to help us
                  understand your connection to Blueprint&apos;s mission and
                  values.{' '}
                  <strong>
                    The application is due on {config.application_deadline}.
                  </strong>{' '}
                  Decisions will be released via email on{' '}
                  {config.written_round_decision_date} by midnight. Note that
                  all applications are reviewed after the deadline, so
                  there&apos;s no advantage to submitting early.
                </>
              }
              additionalInfo={
                <div className="mt-[25px] mx-0 mb-[35px]">
                  {config.student_applications_enabled ? (
                    <BPButton
                      buttonText="Start Application"
                      href={config.student_application_link}
                    />
                  ) : (
                    <div className="text-bp-blue text-[14px] font-medium">
                      Student applications will be open on{' '}
                      {config.application_release_date}.
                    </div>
                  )}
                </div>
              }
            />
            <TimelineItem
              num="03"
              title="Designer Interviews"
              date={config.designer_interview_dates}
              description={
                <>
                  We will ask you to brainstorm with us and sketch out
                  low-fidelity solutions in a design challenge. After the
                  interview, you will have a chance to refine your solutions and
                  submit a final, higher-fidelity version by{' '}
                  {config.design_challenge_due_date}. This round is by
                  invitation only. Invited candidates will receive an interview
                  sign-up link via email.
                </>
              }
            />
            <TimelineItem
              num="04"
              title="Meet the Club"
              date={config.mtc_dates}
              description={
                <>
                  Meet the Club is an event for you to get to know and chat with{' '}
                  <Link href="/about#team">our members</Link> in a casual
                  setting! This event is by invitation only.
                </>
              }
            />
            <TimelineItem
              num="05"
              title="Design Challenge Due"
              date={config.design_challenge_due_date}
              description={
                <>
                  Building on top of your work from the interview, this
                  submission will give you a chance to showcase your ability to
                  iterate and your visual design skills. The prompt will be
                  covered during the interview.
                </>
              }
              last
            />
          </div>
        </div> */}
      </section>

      <section className="py-[50px] px-0" id="decision-criteria">
        <div className="container mx-auto px-[12px]">
          <h2 className="font-bptext text-[28px] sm:text-[36px] font-semibold mb-[32px]">
            Decision Criteria
          </h2>
          <p className="text-dark-gray/60 text-[18px] sm:text-[21px] mb-[54px]">
            Each semester, we are unfortunately only able to move forward a
            select number of applicants. This is both so that every member of
            our project teams may develop close relationships with our nonprofit
            and community partners and so that we are internally able to provide
            a meaningful and streamlined learning and growth experience to each
            member. Throughout the recruitment process, we look for the
            following criteria:
          </p>
          <ul className="flex flex-row flex-wrap justify-around mb-0 sm:mb-[32px]">
            <li className="mb-[40px] w-[45%] sm:w-[28%] ">
              <div className="mb-[10px] max-w-[100px] overflow-hidden">
                <Image
                  className="w-full h-full my-0 mx-auto object-cover align-middle"
                  alt="Passion"
                  src={passionImage}
                />
              </div>
              <h3 className="font-bptext text-[19px] font-semibold mb-[12px]">
                Passion
              </h3>
              <p className="text-dark-gray/70">
                Are you excited to dedicate time, energy, and compassion towards
                understanding and building with communities?
              </p>
            </li>
            <li className="mb-[40px] w-[45%] sm:w-[28%] ">
              <div className="mb-[10px] max-w-[100px] overflow-hidden">
                <Image
                  className="w-full h-full my-0 mx-auto object-cover align-middle"
                  alt="Growth"
                  src={growthImage}
                />
              </div>
              <h3 className="font-bptext text-[19px] font-semibold mb-[12px]">
                Growth
              </h3>
              <p className="text-dark-gray/70">
                Do you actively seek out ways to grow? Do you take action to
                work towards that growth?
              </p>
            </li>
            <li className="mb-[40px] w-[45%] sm:w-[28%] ">
              <div className="mb-[10px] max-w-[100px] overflow-hidden">
                <Image
                  className="w-full h-full my-0 mx-auto object-cover align-middle"
                  alt="Adaptability"
                  src={adaptabilityImage}
                />
              </div>
              <h3 className="font-bptext text-[19px] font-semibold mb-[12px]">
                Resourcefulness
              </h3>
              <p className="text-dark-gray/70">
                Are you self-motivated and driven? Do you adapt to new
                environments and challenges?
              </p>
            </li>
            <li className="mb-[40px] w-[45%] sm:w-[28%] ">
              <div className="mb-[10px] max-w-[100px] overflow-hidden">
                <Image
                  className="w-full h-full my-0 mx-auto object-cover align-middle"
                  alt="Attitude"
                  src={attitudeImage}
                />
              </div>
              <h3 className="font-bptext text-[19px] font-semibold mb-[12px]">
                Attitude
              </h3>
              <p className="text-dark-gray/70">
                Do you approach problems and challenges with an open mind? Are
                you able to work through unfamiliar situations?
              </p>
            </li>
            <li className="mb-[40px] w-[45%] sm:w-[28%] ">
              <div className="mb-[10px] max-w-[100px] overflow-hidden">
                <Image
                  className="w-full h-full my-0 mx-auto object-cover align-middle"
                  alt="Teamwork"
                  src={teamworkImage}
                />
              </div>
              <h3 className="font-bptext text-[19px] font-semibold mb-[12px]">
                Teamwork
              </h3>
              <p className="text-dark-gray/70">
                Do you enjoy collaborating and learning with others? Do you
                value others&apos; perspectives and experiences?
              </p>
            </li>
            <li className="mb-[40px] w-[45%] sm:w-[28%] ">
              <div className="mb-[10px] max-w-[100px] overflow-hidden">
                <Image
                  className="w-full h-full my-0 mx-auto object-cover align-middle"
                  alt="Culture"
                  src={cultureImage}
                />
              </div>
              <h3 className="font-bptext text-[19px] font-semibold mb-[12px]">
                Culture
              </h3>
              <p className="text-dark-gray/70">
                Are you looking forward to developing meaningful relationships
                with our members and partners beyond the work environment?
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-[50px] px-0 bg-off-white" id="faqs">
        <div className="container mx-auto px-[12px]">
          <h2 className="font-bptext text-[28px] sm:text-[36px] font-semibold mb-[40px]">
            Frequently Asked Questions
          </h2>
          <h3 className="font-bptext text-[22px] font-medium mb-[5px]">
            What is Blueprint&apos;s structure?
          </h3>
          <p className="text-dark-gray/70 text-[18px] mb-[40px]">
            Blueprint&apos;s project structure consists of 5 project teams, each
            with a Project Leader, a designer, and 4-5 developers. Each project
            team is dedicated to one of our nonprofit and community partners and
            works closely with our points of contact to create equitable
            solutions through design and development. <br />
            <br /> Blueprint’s External team consists of 6 directors and the
            External Vice President as the team lead. External works to inspire
            students outside of Cal Blueprint about creating change in
            communities and promoting public welfare through tech and design.
            This is done through public events, partnerships with
            mission-aligned organizations, new programs, and more. External,
            along with other project teams, are supported by an executive team
            of 7 students.
          </p>
          <h3 className="font-bptext text-[22px] font-medium mb-[5px]">
            What are nonprofit and community partner relationships like?
          </h3>
          <p className="text-dark-gray/70 text-[18px] mb-[40px]">
            Our partners each have dedicated internal point(s) of contact who
            meet with our project teams on a regular (weekly or bi-weekly)
            basis. Because interactions vary based on partner capacity,
            timezones, internet access, and more, it&apos;s important to note
            that each partner relationship looks a little different. Broadly
            speaking, these meetings help ensure that our partners are on the
            same page as our project teams, and that the solutions we design and
            develop will actually be able to help the partner and communities in
            the best possible ways. <br />
            <br /> At a more detailed level, we hold project scoping meeting(s)
            with each partner and their Project Leader at the start of the Fall
            semester to create a clear path for Blueprint is able to deliver. At
            the end of each semester, we hold a final meeting to present what
            was accomplished during the semester (and, in the case of fall, what
            will be accomplished in the spring).
          </p>
          <h3 className="font-bptext text-[22px] font-medium mb-[5px]">
            What resources does Blueprint have to ensure success?
          </h3>
          <p className="text-dark-gray/70 text-[18px] mb-[40px]">
            Every member of Blueprint has several layers of formal support,
            including their project team members, their Project Leader, and the
            executive team. To keep a pulse check on how members are feeling,
            leadership actively seeks out constructive feedback and holds
            periodic one-on-ones with members. We also guide all new developers
            and designers through our technical onboarding processes and make
            sure there is always space to ask for help, no matter how large or
            small the task. Project Leaders and our External Vice Presidet also
            ensure project success through organized timelines that make tasks
            and expectations as clear as possible throughout the semester.{' '}
            <br />
            <br /> On top of everything, Blueprint is full of people who
            naturally want to help each other - on any given day or night,
            it&apos;s easy to find members squashing bugs together, holding
            informal critique sessions, DMing teammates for insight into other
            parts of Blueprint, or lending a listening ear. <br />
            <br /> Even beyond college, our extensive alumni network remains in
            touch and are often continuing to give back to Blueprint by sharing
            their post-graduation professional experiences.
          </p>
        </div>
      </section>
    </>
  );
}
