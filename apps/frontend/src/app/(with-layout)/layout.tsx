import { Footer } from '../../components/footer';
import Navbar from '../../components/Navbar';
import Section from '../../components/section';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <Section>{children}</Section>
      <Footer />
    </div>
  );
}
