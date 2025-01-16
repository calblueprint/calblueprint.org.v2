import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero/Hero';
import HeroButton from '@/components/HeroButton/HeroButton';
import HeroMessage from '@/components/HeroMessage/HeroMessage';
import PageNav from '@/components/PageNav/PageNav';
import settings from '@/data/students_applications.json';
import adaptabilityImage from '@/public/images/apply/students/adaptability.png';
import attitudeImage from '@/public/images/apply/students/attitude.png';
import cultureImage from '@/public/images/apply/students/culture.png';
import growthImage from '@/public/images/apply/students/growth.png';
import passionImage from '@/public/images/apply/students/passion.png';
import studentsImage from '@/public/images/apply/students/students.jpg';
import teamworkImage from '@/public/images/apply/students/teamwork.png';

export default function StudentApplyPage() {
  const appsEnabled = settings.student_applications_enabled;

  const appsDisabledText = `Our student applications for the ${settings.semester} semester will open ${settings.application_release_date}, and close on ${settings.application_deadline}.`;

  const action = appsEnabled ? (
    <HeroButton
      buttonText={'Apply Now'}
      buttonLink={settings.student_application_link}
      className="mt-[40px]"
    />
  ) : (
    <HeroMessage text={appsDisabledText} />
  );

  const sections = [
    { text: 'Developer', href: '#developer' },
    { text: 'External', href: '#external' },
    { text: 'Designer', href: '#designer' },
    { text: 'Decision Criteria', href: '#criteria' },
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
        className={'static-page-hero about-page-hero'}
      >
        <PageNav sections={sections} />
      </Hero>

      <section className="application-process-section">
        <div
          className="container marginBot-lg"
          id="developer-application-process"
        >
          <h2 className="static-page-header marginBot-sm">
            Developer Application Process
          </h2>
          <p className="static-page-desc marginBot-lg">
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
          <div className="student-timeline">
            <div className="timeline-row">
              <div className="num-col">
                <div className="timeline-num">01</div>
              </div>
              <div className="text-col">
                <div className="timeline-row-title">Infosession Series</div>
                <div className="timeline-row-description">
                  We will host a general in-person infosession on Tuesday,
                  September 3rd, and there will be multiple virtual infosessions
                  on Friday, Aug 30 and Tuesday, Sep 3. These sessions will give
                  you a chance to ask questions and talk to our members in a
                  comfortable setting!&nbsp; Take a look at our{' '}
                  <Link href="https://go.calblueprint.org/infosession">
                    infosession schedule
                  </Link>{' '}
                  for time and location updates.
                </div>
              </div>
            </div>
            <div className="timeline-row">
              <div className="num-col">
                <div className="timeline-num">02</div>
              </div>
              <div className="text-col">
                <div className="timeline-row-title">Applications Due</div>
                <div className="timeline-row-date">
                  Thursday September 5th, 11:59 PM PDT
                </div>
                <div className="timeline-row-description">
                  The application includes 3 short response questions to help us
                  understand your connection to Blueprint's mission and values.{' '}
                  <strong>
                    The application is due on September 5th, 11:59 PM PDT
                    (midnight).
                  </strong>{' '}
                  Decisions will be released via email on September 7th by
                  midnight. Note that all applications are reviewed after the
                  deadline, so there's no advantage to submitting early.
                </div>
                <div className="timeline-row-btn">
                  <div className="timeline-row-notice">
                    Student applications will be open on Wednesday, August 28th.
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline-row">
              <div className="num-col">
                <div className="timeline-num">03</div>
              </div>
              <div className="text-col">
                <div className="timeline-row-title">Blueprint Games</div>
                <div className="timeline-row-date">Sunday, September 8th</div>
                <div className="timeline-row-description">
                  A fun, interactive teamwork session involving a series of
                  challenges and puzzles that make you think critically. It will
                  simulate working on a Blueprint project team and the
                  collaborative nature of being a developer. This round is by
                  invitation only. Time and location will be emailed to invited
                  candidates. Decisions after this round will be emailed on
                  September 9th by midnight.
                </div>
              </div>
            </div>
            <div className="timeline-row">
              <div className="num-col">
                <div className="timeline-num">04</div>
              </div>
              <div className="text-col">
                <div className="timeline-row-title">Meet the Club</div>
                <div className="timeline-row-date">
                  Wednesday, September 11th &amp; Thursday, September 12th
                </div>
                <div className="timeline-row-description">
                  Meet the Club is an event for you to get to know and chat with{' '}
                  <Link href="/about#team">our members</Link> in a casual
                  setting! This event is by invitation only.
                </div>
              </div>
            </div>
            <div className="timeline-row">
              <div className="num-col">
                <div className="timeline-num">05</div>
              </div>
              <div className="text-col">
                <div className="timeline-row-title">Build with Blueprint</div>
                <div className="timeline-row-date">September 11th - 13th</div>
                <div className="timeline-row-description">
                  A 1-hour technical challenge to give you a chance to showcase
                  your technical resourcefulness, growth, and adaptability. This
                  round is by invitation only.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container marginTop-xxl"
          id="external-application-process"
        >
          <h2 className="static-page-header marginBot-sm">
            External Application Process
          </h2>
          <p className="static-page-desc marginBot-lg">
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
          <div className="student-timeline">
            <div className="timeline-row">
              <div className="num-col">
                <div className="timeline-num">01</div>
              </div>
              <div className="text-col">
                <div className="timeline-row-title">Infosession Series</div>
                <div className="timeline-row-description">
                  We will host a general in-person infosession on Tuesday,
                  September 3rd, and there will be multiple virtual infosessions
                  on Friday, Aug 30 and Tuesday, Sep 3. These sessions will give
                  you a chance to ask questions and talk to our members in a
                  comfortable setting!&nbsp; Take a look at our{' '}
                  <Link href="https://go.calblueprint.org/infosession">
                    infosession schedule
                  </Link>{' '}
                  for time and location updates.
                </div>
              </div>
            </div>
            <div className="timeline-row">
              <div className="num-col">
                <div className="timeline-num">02</div>
              </div>
              <div className="text-col">
                <div className="timeline-row-title">Applications Due</div>
                <div className="timeline-row-date">
                  Thursday September 5th, 11:59 PM PDT
                </div>
                <div className="timeline-row-description">
                  The application includes 3 short response questions to help us
                  understand your connection to Blueprint's mission and values.{' '}
                  <strong>
                    The application is due on September 5th, 11:59 PM PDT
                    (midnight).
                  </strong>{' '}
                  Decisions will be released via email on September 7th by
                  midnight. Note that all applications are reviewed after the
                  deadline, so there's no advantage to submitting early.
                </div>
                <div className="timeline-row-btn">
                  <div className="timeline-row-btn">
                    <div className="timeline-row-notice">
                      Student applications will be open on Wednesday, August
                      28th.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline-row">
              <div className="num-col">
                <div className="timeline-num">03</div>
              </div>
              <div className="text-col">
                <div className="timeline-row-title">External Interviews</div>
                <div className="timeline-row-date">September 9th - 13th</div>
                <div className="timeline-row-description">
                  We will be conducting interviews for the external team
                  throughout the entire week. This event is by invitation only.
                  Invited candidates will receive an interview sign-up link via
                  email.
                </div>
              </div>
            </div>
            <div className="timeline-row">
              <div className="num-col">
                <div className="timeline-num">04</div>
              </div>
              <div className="text-col">
                <div className="timeline-row-title">Meet the Club</div>
                <div className="timeline-row-date">
                  Wednesday, September 11th &amp; Thursday, September 12th
                </div>
                <div className="timeline-row-description">
                  Meet the Club is an event for you to get to know and chat with{' '}
                  <Link href="/about#team">our members</Link> in a casual
                  setting! This event is by invitation only.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container marginTop-xxl"
          id="designer-application-process"
        >
          <h2 className="static-page-header marginBot-sm">
            Designer Application Process
          </h2>
          <p className="static-page-desc marginBot-lg">
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
          <div className="student-timeline">
            <div className="timeline-row">
              <div className="num-col">
                <div className="timeline-num">01</div>
              </div>
              <div className="text-col">
                <div className="timeline-row-title">Infosession Series</div>
                <div className="timeline-row-description">
                  We will host a general in-person infosession on Tuesday,
                  September 3rd, and there will be multiple virtual infosessions
                  on Friday, Aug 30 and Tuesday, Sep 3. These sessions will give
                  you a chance to ask questions and talk to our members in a
                  comfortable setting!&nbsp; Take a look at our{' '}
                  <Link href="https://go.calblueprint.org/infosession">
                    infosession schedule
                  </Link>{' '}
                  for time and location updates.
                </div>
              </div>
            </div>
            <div className="timeline-row">
              <div className="num-col">
                <div className="timeline-num">02</div>
              </div>
              <div className="text-col">
                <div className="timeline-row-title">Applications Due</div>
                <div className="timeline-row-date">
                  Thursday September 5th, 11:59 PM PDT
                </div>
                <div className="timeline-row-description">
                  The application includes 3 short response questions to help us
                  understand your connection to Blueprint's mission and values.{' '}
                  <strong>
                    The application is due on September 5th, 11:59 PM PDT
                    (midnight).
                  </strong>{' '}
                  Decisions will be released via email on September 7th by
                  midnight. Note that all applications are reviewed after the
                  deadline, so there's no advantage to submitting early.
                </div>
                <div className="timeline-row-btn">
                  <div className="timeline-row-notice">
                    Student applications will be open on Wednesday, August 28th.
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline-row">
              <div className="num-col">
                <div className="timeline-num">03</div>
              </div>
              <div className="text-col">
                <div className="timeline-row-title">Designer Interviews</div>
                <div className="timeline-row-date">September 9th - 10th</div>
                <div className="timeline-row-description">
                  We will ask you to brainstorm with us and sketch out
                  low-fidelity solutions in a design challenge. After the
                  interview, you will have a chance to refine your solutions and
                  submit a final, higher-fidelity version by Thursday, September
                  12. This round is by invitation only. Invited candidates will
                  receive an interview sign-up link via email.
                </div>
              </div>
            </div>
            <div className="timeline-row">
              <div className="num-col">
                <div className="timeline-num">04</div>
              </div>
              <div className="text-col">
                <div className="timeline-row-title">Meet the Club</div>
                <div className="timeline-row-date">
                  Wednesday, September 11th &amp; Thursday, September 12th
                </div>
                <div className="timeline-row-description">
                  Meet the Club is an event for you to get to know and chat with{' '}
                  <Link href="/about#team">our members</Link> in a casual
                  setting! This event is by invitation only.
                </div>
              </div>
            </div>
            <div className="timeline-row">
              <div className="num-col">
                <div className="timeline-num">05</div>
              </div>
              <div className="text-col">
                <div className="timeline-row-title">Design Challenge Due</div>
                <div className="timeline-row-date">
                  September 8th, 10:00 PM PDT
                </div>
                <div className="timeline-row-description">
                  Building on top of your work from the interview, this
                  submission will give you a chance to showcase your ability to
                  iterate and your visual design skills. The prompt will be
                  covered during the interview.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="application-decision-criteria-section"
        id="decision-criteria"
      >
        <div className="container">
          <h2 className="static-page-header marginBot-lg">Decision Criteria</h2>
          <p className="static-page-desc marginBot-xxl">
            Each semester, we are unfortunately only able to move forward a
            select number of applicants. This is both so that every member of
            our project teams may develop close relationships with our nonprofit
            and community partners and so that we are internally able to provide
            a meaningful and streamlined learning and growth experience to each
            member. Throughout the recruitment process, we look for the
            following criteria:
          </p>
          <ul className="decision-criteria-list-container marginBot-lg">
            <li className="decision-criteria-item">
              <div className="img-container">
                <Image alt="Passion" src={passionImage} />
              </div>
              <h3>Passion</h3>
              <p>
                Are you excited to dedicate time, energy, and compassion towards
                understanding and building with communities?
              </p>
            </li>
            <li className="decision-criteria-item">
              <div className="img-container">
                <Image alt="Growth" src={growthImage} />
              </div>
              <h3>Growth</h3>
              <p>
                Do you actively seek out ways to grow? Do you take action to
                work towards that growth?
              </p>
            </li>
            <li className="decision-criteria-item">
              <div className="img-container">
                <Image alt="Adaptability" src={adaptabilityImage} />
              </div>
              <h3>Resourcefulness</h3>
              <p>
                Are you self-motivated and driven? Do you adapt to new
                environments and challenges?
              </p>
            </li>
            <li className="decision-criteria-item">
              <div className="img-container">
                <Image alt="Attitude" src={attitudeImage} />
              </div>
              <h3>Attitude</h3>
              <p>
                Do you approach problems and challenges with an open mind? Are
                you able to work through unfamiliar situations?
              </p>
            </li>
            <li className="decision-criteria-item">
              <div className="img-container">
                <Image alt="Teamwork" src={teamworkImage} />
              </div>
              <h3>Teamwork</h3>
              <p>
                Do you enjoy collaborating and learning with others? Do you
                value others' perspectives and experiences?
              </p>
            </li>
            <li className="decision-criteria-item">
              <div className="img-container">
                <Image alt="Culture" src={cultureImage} />
              </div>
              <h3>Culture</h3>
              <p>
                Are you looking forward to developing meaningful relationships
                with our members and partners beyond the work environment?
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="application-faqs-section bg-off-white" id="faqs">
        <div className="container">
          <h2 className="static-page-header marginBot-xl">
            Frequently Asked Questions
          </h2>
          <h3>What is Blueprint's structure?</h3>
          <p>
            Blueprint's project structure consists of 5 project teams, each with
            a Project Leader, a designer, and 4-5 developers. Each project team
            is dedicated to one of our nonprofit and community partners and
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
          <h3>What are nonprofit and community partner relationships like?</h3>
          <p>
            Our partners each have dedicated internal point(s) of contact who
            meet with our project teams on a regular (weekly or bi-weekly)
            basis. Because interactions vary based on partner capacity,
            timezones, internet access, and more, it's important to note that
            each partner relationship looks a little different. Broadly
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
          <h3>What resources does Blueprint have to ensure success?</h3>
          <p>
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
            naturally want to help each other - on any given day or night, it's
            easy to find members squashing bugs together, holding informal
            critique sessions, DMing teammates for insight into other parts of
            Blueprint, or lending a listening ear. <br />
            <br /> Even beyond college, our extensive alumni network remains in
            touch and are often continuing to give back to Blueprint by sharing
            their post-graduation professional experiences.
          </p>
        </div>
      </section>
    </>
  );
}
