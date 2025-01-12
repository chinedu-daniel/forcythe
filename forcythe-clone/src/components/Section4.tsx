// src/components/FourthBodySection.tsx
import Image from 'next/image';
import Link from 'next/link';

const FourthBodySection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 bg-white p-8 rounded-lg shadow-lg flex items-center justify-between">
        {/* Left Side Content */}
        <div className="flex-grow">
          {/* Bold Write-up */}
          <h2 className="text-3xl font-bold mb-6">Why Choose Our Services?</h2>

          {/* Navigation Links */}
          <div className="mb-6">
            <nav className="flex space-x-6">
              <Link href="/service1" className="text-blue-500 hover:underline">Service 1
              </Link>
              <Link href="/service2" className="text-blue-500 hover:underline">Service 2
              </Link>
              <Link href="/service3" className="text-blue-500 hover:underline">Service 3
              </Link>
              <Link href="/service4" className="text-blue-500 hover:underline">Service 4
              </Link>
            </nav>
          </div>

          {/* Semi-bold Write-up */}
          <p className="text-xl font-semibold text-gray-700 mb-4">
            Our services are designed to cater to your needs with efficiency and expertise.
          </p>

          {/* Normal Write-up */}
          <p className="text-lg text-gray-600 mb-6">
            We strive to provide quality and excellence in everything we do, ensuring the best possible results for our clients.
          </p>

          {/* Book a Demo Button */}
          <button className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700">
            Book a Demo
          </button>
        </div>

        {/* Right Side Image */}
        <div className="flex-shrink-0 w-1/3">
          <Image
            src="/images/image2.jpg"
            alt="Service Image"
            width={500}
            height={350}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default FourthBodySection;
