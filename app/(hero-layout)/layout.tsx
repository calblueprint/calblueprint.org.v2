import Navbar from '@/components/Navbar/Navbar';

export default function HeroLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // pages-about applies custom container widths to all Hero pages (see styles/partials/containers.scss)
    <div className="relative pages-about">
      <Navbar variant="nav-white" />
      {children}
    </div>
  );
}
