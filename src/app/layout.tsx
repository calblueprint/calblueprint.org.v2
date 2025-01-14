import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const bpText = localFont({
  src: [
    {
      path: '../../public/fonts/BPText-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/BPText-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/BPText-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/BPText-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/BPText-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/BPText-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Blueprint',
  description: 'Tech for Social Good',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bpText.className}>{children}</body>
    </html>
  );
}
