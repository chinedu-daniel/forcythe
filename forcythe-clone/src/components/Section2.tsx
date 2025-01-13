'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SecondBodySection: React.FC = () => {
  const images = [
    '/images/phone.svg',
    '/images/menu.svg',
    '/images/activity.svg',
    '/images/africaFund.svg',
  ];

  // Repeat images to create continuous effect
  const repeatedImages = [...images, ...images];

  const animationTop = {
    animate: { x: ['0%', '-100%'] },
    transition: { repeat: Infinity, duration: 15, ease: 'linear' },
  };

  const animationBottom = {
    animate: { x: ['0%', '100%'] },
    transition: { repeat: Infinity, duration: 15, ease: 'linear' },
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-6 p-8 rounded-lg shadow-lg">
        <h2 className="text-5xl font-bold mb-6">Success in Motion – Our clients’ journey</h2>
      </div>

      <div className="overflow-hidden p-10">
        {/* Top row moving left */}
        <motion.div className="flex gap-8" {...animationTop}>
          {repeatedImages.map((image, index) => (
            <div key={index} className="min-w-[33.33%] flex-shrink-0 p-6">
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                width={30}
                height={30}
                className="w-full h-auto"
              />
            </div>
          ))}
        </motion.div>

        {/* Bottom row moving right */}
        <motion.div className="flex gap-8" {...animationBottom}>
          {repeatedImages.map((image, index) => (
            <div key={index} className="min-w-[33.33%] flex-shrink-0 p-6">
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                width={30}
                height={30}
                className="w-full h-auto"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SecondBodySection;