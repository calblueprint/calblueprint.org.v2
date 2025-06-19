import { Metadata } from 'next';
import Image from 'next/image';
import Hero from '@/components/Hero/Hero';
import HeroButton from '@/components/HeroButton/HeroButton';
import Members from '@/components/Members/Members';
import PageNav from '@/components/PageNav/PageNav';
import carouselImage4 from '@/public/images/about/4.jpg';
import carouselImage5 from '@/public/images/about/5.jpg';
import carouselImage6 from '@/public/images/about/6.jpg';
import carouselImage7 from '@/public/images/about/7.jpg';
import carouselImage8 from '@/public/images/about/8.jpg';
import carouselImage9 from '@/public/images/about/9.jpg';
import carouselImage10 from '@/public/images/about/10.jpg';
import fullClubImage from '@/public/images/home/group_photo_2024.jpg';

export const metadata: Metadata = {
  title: 'About | Blueprint',
};

export default function AboutPage() {
  const sections = [
    { text: 'Mission', href: '/about#mission' },
    { text: 'Values', href: '/about/#values' },
    { text: 'The Team', href: '/about#team' },
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
        className={'relative bg-cover bg-center bg-no-repeat'}
      >
        <PageNav sections={sections} />
      </Hero>

      <section
        className="w-full bg-[#F4F4F4] overflow-hidden pt-[70px] sm:pt-[80px] pb-[370px] sm:pb-[430px] relative text-center"
        id="mission"
      >
        <div className="container w-full mx-auto px-[12px]">
          <h2 className="font-bptext text-[28px] sm:text-[36px] font-semibold mb-[24px]">
            Our Mission Statement
          </h2>
          <p className="text-dark-gray text-opacity-70 font-bptext text-[24px] sm:text-[29px] my-0 mx-auto max-w-[730px]">
            To make beautiful engineering accessible and useful for those who
            create communities and promote public welfare.
          </p>
        </div>
        <div className="bg-white rounded-[100%] h-[350px] w-[150%] sm:w-[120%] absolute bottom-0 left-[50%] -translate-x-1/2 translate-y-1/2" />
      </section>

      <section
        className="w-full relative pt-[60px] sm:pt-[100px] pb-[60px] px-0"
        id="values"
      >
        <div className="container mx-auto px-[12px]">
          {/* TODO: shadow not working */}
          <div className="shadow-[0_10px_40px_rgba(#2C3E50,0.2)] my-0 mx-auto max-w-[650px] h-[250px] sm:h-[350px] absolute left-[50%] top-[-300px] sm:top-[-350px] -translate-x-[50%] w-[90%] sm:w-full">
            <Image
              alt="Full Club Image"
              src={fullClubImage}
              className="w-full h-full object-cover rounded-[4px]"
            />
          </div>
          <h2 className="font-bptext text-[28px] sm:text-[36px] font-semibold mb-[24px]">
            Our Values
          </h2>
          <div className="block sm:flex sm:flex-row sm:flex-wrap sm:justify-around">
            <div className="relative w-full sm:w-[30%]">
              <div className="font-bptext text-bp-blue text-opacity-10 text-[80px] font-semibold absolute top-[-55px] sm:top-[-20px]">
                01
              </div>
              <h3 className="text-bp-blue font-bptext text-[26px] font-semibold mt-[60px] sm:mt-[50px] mb-[15px] ml-[100px] sm:ml-[50px]">
                Mission First
              </h3>
              <p className="text-dark-gray text-opacity-60">
                We as Blueprint members ultimately unify under one goal -
                achieving our mission. We place the interests of the people and
                partners we serve above our own. Our primary measure of success
                is the amount of positive impact we create through our work.
              </p>
            </div>
            <div className="relative w-full sm:w-[30%]">
              <div className="font-bptext text-bp-blue text-opacity-10 text-[80px] font-semibold absolute top-[-55px] sm:top-[-20px]">
                02
              </div>
              <h3 className="text-bp-blue font-bptext text-[26px] font-semibold mt-[60px] sm:mt-[50px] mb-[15px] ml-[100px] sm:ml-[50px]">
                Perpetual Growth
              </h3>
              <p className="text-dark-gray text-opacity-60">
                We as Blueprint members value the academic, social, and personal
                growth of our peers. We constantly seek to perpetuate the cycle
                of learning and teaching, for our benefit and for others. We
                strive to offer a helping hand in times of need and push each
                other to succeed.
              </p>
            </div>
            <div className="relative w-full sm:w-[30%]">
              <div className="font-bptext text-bp-blue text-opacity-10 text-[80px] font-semibold absolute top-[-55px] sm:top-[-20px]">
                03
              </div>
              <h3 className="text-bp-blue font-bptext text-[26px] font-semibold mt-[60px] sm:mt-[50px] mb-[15px] ml-[100px] sm:ml-[50px]">
                Cherish Each Other
              </h3>
              <p className="text-dark-gray text-opacity-60">
                We as Blueprint members seek to cherish our time spent together.
                We develop meaningful relationships that extend well beyond the
                scope of the organization. We value each other as individuals
                and appreciate our differences.
              </p>
            </div>
            <div className="relative w-full sm:w-[30%]">
              <div className="font-bptext text-bp-blue text-opacity-10 text-[80px] font-semibold absolute top-[-55px] sm:top-[-20px]">
                04
              </div>
              <h3 className="text-bp-blue font-bptext text-[26px] font-semibold mt-[60px] sm:mt-[50px] mb-[15px] ml-[100px] sm:ml-[50px]">
                Always Innovate
              </h3>
              <p className="text-dark-gray text-opacity-60">
                We as Blueprint members recognize that change is both inevitable
                and necessary. We are committed to innovate and emphasize
                effective solutions as needed in order to remain relevant -
                nothing is sacred. We welcome new ideas and diverse thinking.
              </p>
            </div>
            <div className="relative w-full sm:w-[30%]">
              <div className="font-bptext text-bp-blue text-opacity-10 text-[80px] font-semibold absolute top-[-55px] sm:top-[-20px]">
                05
              </div>
              <h3 className="text-bp-blue font-bptext text-[26px] font-semibold mt-[60px] sm:mt-[50px] mb-[15px] ml-[100px] sm:ml-[50px]">
                Be Humble
              </h3>
              <p className="text-dark-gray text-opacity-60">
                We as Blueprint members strive to remain humble, accept our
                imperfections, and be receptive to feedback. We approach
                challenges with an open mind and remember that anyone can pursue
                social good, not just Blueprint.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-[20px] pl-0 pt-[30px] pr-[20px] sm:pt-[50px] sm:pr-0">
        {/* TODO: Fix gradient at right side of carousel */}
        <div
          className="absolute top-0 right-0 h-full w-[200px] pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(black, 0) 0%, rgba(white, 0.80) 100%)',
          }}
        />
        <div
          className="flex flex-row overflow-scroll gap-4 px-[10%]"
          style={{ cursor: 'grab' }}
        >
          {carouselImages.map((image, i) => (
            <div className="w-[300px] md:w-[600px] flex-shrink-0" key={i}>
              <Image
                alt="Blueprint Team"
                src={image}
                className="pointer-events-none"
              />
            </div>
          ))}
        </div>
      </section>

      <Members />
    </>
  );
}
