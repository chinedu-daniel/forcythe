// src/components/Layout.tsx
import { ReactNode } from 'react';
import Header from './Header';
import BodySection from './Section1';
import SecondBodySection from './Section2';
import ThirdBodySection from './Section3';
import FourthBodySection from './Section4';
import FifthBodySection from './Section5';
import SixthBodySection from './Section6';
import SeventhBodySection from './Section7';
import EighthBodySection from './Section8';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    <main className="container mx-auto px-4 py-8">{children}</main>
    <BodySection />
    <SecondBodySection />
    <ThirdBodySection />
    <FourthBodySection />
    <FifthBodySection />
    <SixthBodySection />
    <SeventhBodySection />
    <EighthBodySection />
    <Footer />
  </>
);

export default Layout;