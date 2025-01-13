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
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Success in Motion – Our clients’ journey</h2>
      </div>
      <div className="overflow-hidden p-10">
        <motion.div className="flex gap-4 md:gap-8" {...animationTop}>
          {repeatedImages.map((image, index) => (
            <div key={index} className="min-w-[50%] md:min-w-[33.33%] flex-shrink-0 p-2 md:p-6">
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
        <motion.div className="flex gap-4 md:gap-8" {...animationBottom}>
          {repeatedImages.map((image, index) => (
            <div key={index} className="min-w-[50%] md:min-w-[33.33%] flex-shrink-0 p-2 md:p-6">
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