'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface Note {
  title: string;
  imageSrc: string;
  alt: string;
  content: string;
  footer: string;
}

const ThirdBodySection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [displayedContent, setDisplayedContent] = useState<string>('');

  const notes: Note[] = [
    {
      title: "Starks",
      imageSrc: "/images/executive-pro-ceo.svg",
      alt: "Starks Associate Image",
      content: "Partnering with Forcythe was like finding a hidden gem...",
      footer: "John, Management",
    },
    {
      title: "ExecutivePros",
      imageSrc: "/images/executive-pro-ceo.svg",
      alt: "ExecutivePros",
      content: "The team understood the assignment and delivered very well...",
      footer: "Testimony, Co-founder",
    },
    {
      title: "stac.ai",
      imageSrc: "/images/exec-pro.svg",
      alt: "Stac Ai",
      content: "Forcythe is seriously amazing when it comes to coming up with new ideas...",
      footer: "Edwin, Former CTO",
    },
    {
      title: "Iwaria",
      imageSrc: "/images/iwaria-founder.svg",
      alt: "Iwaria",
      content: "The moment we engaged Forcythe, it was clear they were in a league of their own...",
      footer: "Iwaria Founder",
    },
    {
      title: "Beaupreneur",
      imageSrc: "/images/executive-pro-ceo.svg",
      alt: "Beaupreneur",
      content: "The moment we engaged Forcythe, it was clear they were in a league of their own...",
      footer: "Christiana, Founder",
    }
  ];

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (currentIndex >= 0) {
      setDisplayedContent('');
      const content = notes[currentIndex].content;
      let index = 0;

      const revealContent = () => {
        setDisplayedContent((prev) => prev + content[index]);
        index++;
        if (index < content.length) {
          timeoutId = setTimeout(revealContent, 50);
        }
      };

      revealContent();
    }

    return () => clearTimeout(timeoutId);
  }, [currentIndex, notes]);

  const handleNoteClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-6 p-8 rounded-lg shadow-lg">
        <div className="p-4 rounded-lg border-2">
          <div className="flex space-x-4 overflow-x-auto">
            {notes.map((note, index) => (
              <div
                key={index}
                className={`cursor-pointer mb-4 p-4 ${currentIndex === index ? 'text-blue-500' : 'text-gray-500'}`}
                onClick={() => handleNoteClick(index)}
              >
                <h3 className="text-4xl font-bold">{note.title}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {notes.map((note, index) => (
            <div key={index} className="space-y-4">
              {currentIndex === index && (
                <div className="p-6 rounded-lg shadow-lg">
                  <h3 className="text-4xl font-bold mb-4">{note.title}</h3>
                  <Image
                    src={note.imageSrc}
                    alt={note.alt}
                    width={400}
                    height={300}
                    className="rounded-lg mb-4"
                  />
                  <p className="text-lg text-white mb-4">{displayedContent}</p>
                  <div className="text-sm text-white">{note.footer}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThirdBodySection;