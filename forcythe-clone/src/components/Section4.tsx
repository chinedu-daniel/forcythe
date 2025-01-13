// FourthBodySection.tsx
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const FourthBodySection: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');
  const [activeImage, setActiveImage] = useState('');
  const [activeTextIndex, setActiveTextIndex] = useState(0);

  const sections = [
    {
      name: 'Idea',
      content: {
        heading: 'Your vision is unique.',
        description: 'Nurture Your Idea into a Blueprint for Success with our strategic insights and industry expertise. Your vision is unique, let’s us shape it.',
        image: '/images/camera-man.svg',
      },
    },
    {
      name: 'Design',
      content: {
        heading: 'Crafting the blueprint for success',
        description: 'Design is more than aesthetics, it’s about creating user experiences that resonate and convert. Our design experts shape your vision into a stunning reality.',
        image: '/images/menu.svg',
      },
    },
    {
      name: 'Develop',
      content: {
        heading: 'Turning blueprints into reality.',
        description: 'We breathe life into designs, building robust platforms ready to disrupt markets. Harness the experience of our development team to bring your Concept to Life.',
        image: '/images/phone.svg',
      },
    },
    {
      name: 'Launch',
      content: {
        heading: 'Your launchpad to the market.',
        description: 'Launching is just the beginning, we ensure your product makes a splash and keeps making waves, ensuring a continual customer acquisition.',
        image: '/images/camera-man.svg',
      },
    },
  ];

  const handleClick = (section: string) => {
    const selectedSection = sections.find((s) => s.name === section);
    if (selectedSection) {
      setActiveSection(selectedSection.content.heading);
      setActiveImage(selectedSection.content.image);
      setActiveTextIndex(0);
    }
  };

  return (
    <section className="py-12 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        <div className="flex-grow">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center md:text-left">
            From <span className="text-blue-500">Spark</span> to <span className="text-blue-500">Spotlight:</span> we take you <br /> every step of the way to success.
          </h2>
          <div className="m-6 p-6 border-4 text-xl md:text-4xl border-transparent rounded-lg shadow-sm bg-gray-800">
            <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
              {sections.map((section) => (
                <motion.button
                  key={section.name}
                  onClick={() => handleClick(section.name)}
                  className="text-white hover:bg-blue-700 font-bold p-4 rounded-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section.name}
                </motion.button>
              ))}
            </nav>
          </div>
          {activeSection && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-2">{activeSection}</h3>
              <p className="text-sm md:text-lg text-white mb-6">
                {sections.find((s) => s.content.heading === activeSection)?.content.description.split('. ').slice(0, activeTextIndex + 1).join('. ')}
              </p>
            </motion.div>
          )}
          <button className="px-6 py-2 bg-white text-black rounded-full hover:bg-blue-700">
            Book a Demo
          </button>
        </div>
        <div className="flex-shrink-0 w-full md:w-1/3">
          <Image
            src={activeImage || '/images/camera-man.svg'}
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