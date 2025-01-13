import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaReddit } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Form Section (Email and Subscribe) */}
        <div className="p-6 rounded-lg">
          <form className="flex flex-col space-y-4">
            <div className="flex flex-col items-center">
              <input
                type="email"
                placeholder="Your email address"
                className="p-3 rounded text-white w-full mb-2"
                required
              />
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="subscribe" className="mr-2" required />
                <label htmlFor="subscribe" className="text-sm">I agree to receive other notifications from Forcythe</label>
              </div>
            </div>
            <button type="submit" className="mt-4 px-6 py-2 bg-blue-600 rounded text-white">
              Subscribe
            </button>
          </form>
        </div>

        {/* Company Information with Logo */}
        <div>
          <div className="flex flex-col items-center mb-6">
            <Image src="/images/forcythelogo.svg" width={100} height={100} alt="Company Logo" className="mt-4" /> {/* Replace with your logo path */}
            <p className="text-sm mt-2 text-center">
              Your company description here. It can be a short write-up about what your company does and its core values.
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-6">
            <Link href="https://www.facebook.com" target="_blank" aria-label="Facebook">
              <FaFacebookF className="text-xl hover:text-blue-500" />
            </Link>
            <Link href="https://www.instagram.com" target="_blank" aria-label="Instagram">
              <FaInstagram className="text-xl hover:text-pink-500" />
            </Link>
            <Link href="https://www.twitter.com" target="_blank" aria-label="Twitter">
              <FaTwitter className="text-xl hover:text-blue-400" />
            </Link>
            <Link href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn">
              <FaLinkedinIn className="text-xl hover:text-blue-700" />
            </Link>
            <Link href="https://www.youtube.com" target="_blank" aria-label="YouTube">
              <FaYoutube className="text-xl hover:text-red-500" />
            </Link>
            <Link href="https://www.reddit.com" target="_blank" aria-label="Reddit">
              <FaReddit className="text-xl hover:text-orange-500" />
            </Link>
          </div>
        </div>

        {/* Company Links (Grid layout) */}
        <div>
          <h3 className="font-bold text-xl mb-4 text-center">Company</h3>
          <div className="grid grid-cols p-6 gap-4">
            <Link href="/about" className="text-sm">About</Link>
            <Link href="/services" className="text-sm">Services</Link>
            <Link href="/portfolio" className="text-sm">Portfolio</Link>
            <Link href="/studio-foundation" className="text-sm">Studio Foundation</Link>
            <Link href="/career" className="text-sm">Career</Link>
            <Link href="/blog" className="text-sm">Blog</Link>
          </div>
        </div>
      </div>

      {/* Bottom Line and Copyright */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-lg flex justify-between">
        <p>Copyright &copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;