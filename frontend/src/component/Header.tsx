// Header.tsx
import Link from 'next/link';

const Header: React.FC = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container mx-auto flex justify-between items-center p-4">
      <div className="logo">Forcythe</div>
      <nav className="flex space-x-8 mx-auto">
        <Link href="/services">Services</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/about">About</Link>
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
