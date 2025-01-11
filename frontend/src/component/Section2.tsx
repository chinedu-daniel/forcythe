// src/components/SecondBodySection.tsx
'use client';
import Image from 'next/image';
import { useState } from 'react';

const SecondBodySection: React.FC = () => {
  // For image sliding effect
  const [currentIndexRight, setCurrentIndexRight] = useState(0);
  const [currentIndexLeft, setCurrentIndexLeft] = useState(0);

  const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    '/images/image4.jpg',
  ];

  // Slider functionality
  const handleNextRight = () => {
    setCurrentIndexRight((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevRight = () => {
    setCurrentIndexRight((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextLeft = () => {
    setCurrentIndexLeft((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevLeft = () => {
    setCurrentIndexLeft((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 bg-white p-8 rounded-lg shadow-lg">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-6">Explore Our Image Gallery</h2>

        {/* Right Image Slider */}
        <div className="flex justify-between items-center mb-8">
          {/* Next Button */}
          <button
            className="px-4 py-2 bg-gray-200 hover:bg-gray-400 rounded-full"
            onClick={handlePrevRight}
          >
            &#8592;
          </button>

          {/* Image Container */}
          <div className="flex flex-shrink-0 w-2/3 overflow-hidden relative">
            <Image
              src={images[currentIndexRight]}
              alt="Image Slider Right"
              className="w-full transition-transform duration-500 ease-in-out transform"
            />
          </div>

          {/* Prev Button */}
          <button
            className="px-4 py-2 bg-gray-200 hover:bg-gray-400 rounded-full"
            onClick={handleNextRight}
          >
            &#8594;
          </button>
        </div>

        {/* Left Image Slider */}
        <div className="flex justify-between items-center">
          {/* Next Button */}
          <button
            className="px-4 py-2 bg-gray-200 hover:bg-gray-400 rounded-full"
            onClick={handlePrevLeft}
          >
            &#8592;
          </button>

          {/* Image Container */}
          <div className="flex flex-shrink-0 w-2/3 overflow-hidden relative">
            <Image
              src={images[currentIndexLeft]}
              alt="Image Slider Left"
              className="w-full transition-transform duration-500 ease-in-out transform"
            />
          </div>

          {/* Prev Button */}
          <button
            className="px-4 py-2 bg-gray-200 hover:bg-gray-400 rounded-full"
            onClick={handleNextLeft}
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default SecondBodySection;
