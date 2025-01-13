'use client';
import React, { useState, useEffect } from 'react';

const FirstBodySection: React.FC = () => {
  const fullText = 'We build products that shape a better future.';
  const fullParagraph = 'We’re the architects of digital excellence across industries. We redefine business with cutting-edge digital strategies that invoke sector-wide transformation.';
  const [text, setText] = useState('');
  const [paragraph, setParagraph] = useState('');
  const [index, setIndex] = useState(0);
  const [paraIndex, setParaIndex] = useState(0);

  // Function to animate the header text
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 100); // Adjust the speed by changing the delay
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  // Function to animate the paragraph text
  useEffect(() => {
    if (paraIndex < fullParagraph.length) {
      const timeout = setTimeout(() => {
        setParagraph((prev) => prev + fullParagraph[paraIndex]);
        setParaIndex(paraIndex + 1);
      }, 50); // Adjust the speed by changing the delay
      return () => clearTimeout(timeout);
    }
  }, [paraIndex, fullParagraph]);

  return (
    <section
  className="py-12 bg-cover"
  style={{ backgroundImage: "url('/images/header-background.svg')" }}
>
  <div className="container mx-auto px-6 bg-transparent border p-8 rounded-lg shadow-lg">
    <div className="mb-6">
      <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-2">
        {text.split('products').map((part, index, array) => (
          <React.Fragment key={index}>
            {part}
            {index === array.length - 1 ? '' : <span className="text-blue">products</span>}
          </React.Fragment>
        ))}
      </h2>
      <p className="text-sm md:text-lg text-white">
        {paragraph.split('.').map((sentence, index) => (
          <React.Fragment key={index}>
            {sentence.trim()}
            {index < paragraph.split('.').length - 1 ? <br /> : ''}
          </React.Fragment>
        ))}
      </p>
    </div>
    <button className="px-4 py-2 md:px-6 md:py-3 bg-white text-black border rounded hover:bg-blue-500 hover:text-white">
      Book a Call
    </button>
  </div>
</section>
  );
};

export default FirstBodySection;