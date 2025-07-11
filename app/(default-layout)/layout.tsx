import Navbar from '@/components/Navbar/Navbar';

export default function WhiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative">
      <Navbar variant="default" />
      {children}
    </div>
  );
}
