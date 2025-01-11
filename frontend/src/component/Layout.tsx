// src/components/Layout.tsx
import { ReactNode } from 'react';
import Header from './Header';
import BodySection from './Section1';
import SecondBodySection from './Section2';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    <main className="container mx-auto px-4 py-8">{children}</main>
    <BodySection />
    <SecondBodySection />
    {/* <Footer /> */}
  </>
);

export default Layout;