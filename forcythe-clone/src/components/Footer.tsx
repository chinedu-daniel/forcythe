// src/components/Footer.tsx
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaReddit } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Form Section */}
        <div>
          <form className="flex flex-col">
            <input
              type="email"
              placeholder="Your email address"
              className="p-3 rounded text-black mb-4"
            />
            <div className="flex items-center">
              <input type="checkbox" id="subscribe" className="mr-2" />
              <label htmlFor="subscribe" className="text-sm">
                I agree to receive other notifications from the company.
              </label>
            </div>
            <button type="submit" className="mt-4 px-6 py-2 bg-blue-600 rounded text-white">
              Subscribe
            </button>
          </form>
        </div>

        {/* Company Information */}
        <div>
          <div className="mb-4">
            <div className="text-2xl font-bold">Forcythe</div>
            <p className="text-sm mt-2">
              Your company description here. It can be a short write-up about what your company does.
            </p>
          </div>
          <div className="flex space-x-4">
            <Link href="https://www.facebook.com" target="_blank">
              <FaFacebookF className="text-xl hover:text-blue-500" />
            </Link>
            <Link href="https://www.instagram.com" target="_blank">
              <FaInstagram className="text-xl hover:text-pink-500" />
            </Link>
            <Link href="https://www.twitter.com" target="_blank">
              <FaTwitter className="text-xl hover:text-blue-400" />
            </Link>
            <Link href="https://www.linkedin.com" target="_blank">
              <FaLinkedinIn className="text-xl hover:text-blue-700" />
            </Link>
            <Link href="https://www.youtube.com" target="_blank">
              <FaYoutube className="text-xl hover:text-red-500" />
            </Link>
            <Link href="https://www.reddit.com" target="_blank">
              <FaReddit className="text-xl hover:text-orange-500" />
            </Link>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-bold mb-2">Company</h3>
          <ul className="text-sm space-y-2">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/studio-foundation">Studio Foundation</Link></li>
            <li><Link href="/career">Career</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Line and Copyright */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;