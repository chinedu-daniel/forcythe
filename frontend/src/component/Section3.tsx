// ThirdBodySection.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Note {
  title: string;
  imageSrc: string;
  alt: string;
  content: string;
}

const ThirdBodySection: React.FC = () => {
  const [expandedNote, setExpandedNote] = useState<number | null>(null);

  const notes: Note[] = [
    {
      title: "Note 1",
      imageSrc: "/images/image1.jpeg",
      alt: "Note 1 Image",
      content: "This is a detailed description of Note 1. You can add more information here.",
    },
    {
      title: "Note 2",
      imageSrc: "/images/image2.jpeg",
      alt: "Note 2 Image",
      content: "This is a detailed description of Note 2. You can add more information here.",
    },
    {
      title: "Note 3",
      imageSrc: "/images/image3.jpeg",
      alt: "Note 3 Image",
      content: "This is a detailed description of Note 3. You can add more information here.",
    },
    {
      title: "Note 4",
      imageSrc: "/images/image4.jpeg",
      alt: "Note 4 Image",
      content: "This is a detailed description of Note 4. You can add more information here.",
    },
  ];

  const handleNoteClick = (index: number) => {
    if (expandedNote === index) {
      setExpandedNote(null); // Collapse if already expanded
    } else {
      setExpandedNote(index); // Expand clicked note
    }
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 bg-white p-8 rounded-lg shadow-lg">
        {/* Write-up Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Explore Our Featured Notes</h2>
          <p className="text-lg text-gray-700">
            Click on any note to explore more details along with its image.
          </p>
        </div>

        {/* Notes Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {notes.map((note, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleNoteClick(index)}
            >
              {/* Note Title and Image */}
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Image
                    src={note.imageSrc}
                    alt={note.alt}
                    width={150}
                    height={100}
                    className="rounded-lg"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{note.title}</h3>
                  <Link href="#" className="text-blue-500 hover:underline">Click to view details
                  </Link>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedNote === index && (
                <div className="mt-4">
                  <p className="text-gray-700">{note.content}</p>
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
