// src/components/Header.tsx
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => (
  <header className="section-padding navbar w-full fixed top-0 left-0 py-[1.8rem] flex justify-between gap-10 items-center z-30 backdrop-blur-md">
    <div className="container mx-auto flex justify-between items-center p-4">
      <div className="w-12 h-12 relative">
        <Image width={30} height={30}
          src="/images/forcythelogo.svg" // Update the path if necessary
          alt="Forcyth Logo"
          // layout="fill"
          // objectFit="contain"
          className="w-full h-full"
        />
      </div>
      <nav className="hidden md:flex items-center gap-4 text-base">
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/studio">Studio</Link>
        <Link href="/foundation">Foundation</Link>
      </nav>
      <button className="px-4 py-2 bg-white text-black border rounded hover:bg-blue-500 hover:text-white">
        Book a Call
      </button>
    </div>
  </header>
);

export default Header;