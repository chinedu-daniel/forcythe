import Footer from "./Footer";
import Header from "./Header";
import { ReactNode } from 'react';
import FirstBodySection from "./Section1";
import SecondBodySection from "./Section2";
import ThirdBodySection from "./Section3";
import FourthBodySection from "./Section4";
import FifthBodySection from "./Section5";
import SixthBodySection from "./Section6";
import SeventhBodySection from "./Section7";
import EighthBodySection from "./Section8";

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
    <div>
        <Header />
        <FirstBodySection />
        <SecondBodySection />
        <ThirdBodySection />
        <FourthBodySection />
        <FifthBodySection />
        <SixthBodySection />
        <SeventhBodySection />
        <EighthBodySection />
        <main>{children}</main>
        <Footer />
        {/* Footer component will go here */}
    </div>
);

export default Layout;