import Navbar from '@/components/Navbar/Navbar';

export default function HeroLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="content pages pages-about">
      <Navbar theme="nav-white" />
      {children}
    </div>
  );
}
