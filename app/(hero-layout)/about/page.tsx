import Image from 'next/image';
import Hero from '@/components/Hero/Hero';
import HeroButton from '@/components/HeroButton/HeroButton';
import Members from '@/components/Members/Members';
import Navbar from '@/components/Navbar/Navbar';
import PageNav from '@/components/PageNav/PageNav';
import carouselImage4 from '@/public/images/about/4.jpg';
import carouselImage5 from '@/public/images/about/5.jpg';
import carouselImage6 from '@/public/images/about/6.jpg';
import carouselImage7 from '@/public/images/about/7.jpg';
import carouselImage8 from '@/public/images/about/8.jpg';
import carouselImage9 from '@/public/images/about/9.jpg';
import carouselImage10 from '@/public/images/about/10.jpg';
import fullClubImage from '@/public/images/home/group_photo_2021.jpg';

export default function AboutPage() {
  const sections = [
    { text: 'Mission', href: 'mission' },
    { text: 'Values', href: 'value' },
    { text: 'The Team', href: 'team' },
  ];

  const carouselImages = [
    carouselImage10,
    carouselImage9,
    carouselImage8,
    carouselImage7,
    carouselImage6,
    carouselImage5,
    carouselImage4,
  ];

  return (
    <>
      <Hero
        title={'About The Club'}
        body={
          'We’re a club at UC Berkeley that develops pro-bono apps for nonprofits and promotes tech for social good.'
        }
        action={
          <HeroButton
            buttonText={'Read More'}
            buttonLink={'/about#mission'}
            className="mt-[40px]"
          />
        }
        heroImage={fullClubImage}
        className={'static-page-hero about-page-hero'}
      >
        <PageNav sections={sections} />
      </Hero>

      <section className="about-page-mission-section" id="mission">
        <div className="container">
          <h2 className="static-page-header marginBot-md">
            Our Mission Statement
          </h2>
          <p className="mission">
            To make beautiful engineering accessible and useful for those who
            create communities and promote public welfare.
          </p>
        </div>
        <div className="about-page-oval" />
      </section>

      <section className="about-page-values-section" id="values">
        <div className="container">
          <div className="img-container">
            <Image alt="Full Club Image" src={fullClubImage} />
          </div>
          <h2 className="static-page-header marginBot-md">Our Values</h2>
          <div className="values-container">
            <div className="value">
              <div className="value-num">01</div>
              <h3 className="value-title">Mission First</h3>
              <p className="value-desc">
                We as Blueprint members ultimately unify under one goal -
                achieving our mission. We place the interests of the people and
                partners we serve above our own. Our primary measure of success
                is the amount of positive impact we create through our work.
              </p>
            </div>
            <div className="value">
              <div className="value-num">02</div>
              <h3 className="value-title">Perpetual Growth</h3>
              <p className="value-desc">
                We as Blueprint members value the academic, social, and personal
                growth of our peers. We constantly seek to perpetuate the cycle
                of learning and teaching, for our benefit and for others. We
                strive to offer a helping hand in times of need and push each
                other to succeed.
              </p>
            </div>
            <div className="value">
              <div className="value-num">03</div>
              <h3 className="value-title">Cherish Each Other</h3>
              <p className="value-desc">
                We as Blueprint members seek to cherish our time spent together.
                We develop meaningful relationships that extend well beyond the
                scope of the organization. We value each other as individuals
                and appreciate our differences.
              </p>
            </div>
            <div className="value">
              <div className="value-num">04</div>
              <h3 className="value-title">Always Innovate</h3>
              <p className="value-desc">
                We as Blueprint members recognize that change is both inevitable
                and necessary. We are committed to innovate and emphasize
                effective solutions as needed in order to remain relevant -
                nothing is sacred. We welcome new ideas and diverse thinking.
              </p>
            </div>
            <div className="value">
              <div className="value-num">05</div>
              <h3 className="value-title">Be Humble</h3>
              <p className="value-desc">
                We as Blueprint members strive to remain humble, accept our
                imperfections, and be receptive to feedback. We approach
                challenges with an open mind and remember that anyone can pursue
                social good, not just Blueprint.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="photo-carousel about-page-photo-carousel">
        <div
          className="flex flex-row overflow-scroll gap-4 px-[10%]"
          style={{ cursor: 'grab' }}
        >
          {carouselImages.map((image, i) => (
            <div className="w-[300px] md:w-[600px] flex-shrink-0" key={i}>
              <Image alt="Blueprint Team" src={image} />
            </div>
          ))}
        </div>
      </section>

      <Members />
    </>
  );
}
