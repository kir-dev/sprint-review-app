import { Footer } from '../../components/Footer';
import Navbar from '../../components/Navbar';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}