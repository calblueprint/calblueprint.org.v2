import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.scss';
import { Inter, Poppins, Roboto } from 'next/font/google';
import Banner from '@/components/Banner/Banner';
import Footer from '@/components/Footer/Footer';
import config from '@/data/students_applications.json';

// Font must be assigned to consts or else the build will fail
/* eslint-disable @typescript-eslint/no-unused-vars */
const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
  weight: '400',
});

/* eslint-disable @typescript-eslint/no-unused-vars */
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: '400',
});

/* eslint-disable @typescript-eslint/no-unused-vars */
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: '400',
});

const bpText = localFont({
  variable: '--font-bptext',
  src: [
    {
      path: '../public/fonts/BPText-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/BPText-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../public/fonts/BPText-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/BPText-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/BPText-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/BPText-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Blueprint',
  description:
    'We’re a team of UC Berkeley students that develops software pro bono for nonprofits and promotes technology for social good.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      style={{ scrollBehavior: 'smooth' }}
    >
      <body className={`scroll-smooth ${bpText.variable}`}>
        {config.banner_enabled && <Banner />}
        {children}
        <Footer />
      </body>
    </html>
  );
}
