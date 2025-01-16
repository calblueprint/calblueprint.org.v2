import Navbar from '@/components/Navbar/Navbar';

export default function WhiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="content apply apply-show">
      <Navbar theme="default" />
      {children}
    </div>
  );
}
