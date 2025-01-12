// src/components/SeventhBodySection.tsx
import Image from 'next/image';

const SeventhBodySection: React.FC = () => {
  const blogPosts = [
    {
      image: '/images/image1.jpeg',
      title: 'Innovative Solutions',
      description: 'Exploring the latest in technology.',
      additionalInfo: 'Read More',
    },
    {
      image: '/images/image2.jpeg',
      title: 'Creative Minds',
      description: 'Unleashing creativity in business.',
      additionalInfo: 'Learn More',
    },
    {
      image: '/images/image3.jpeg',
      title: 'Tech Trends',
      description: 'Staying ahead in the digital world.',
      additionalInfo: 'Discover Now',
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-6">Our Latest Blog Posts</h2>

        {/* Visit the Blog Button */}
        <button className="mb-8 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Visit the Blog
        </button>

        {/* Grid of Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white p-6 rounded shadow">
              {/* Image */}
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>

              {/* Writeup */}
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-2">{post.description}</p>
              <p className="text-blue-600 font-bold">{post.additionalInfo}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeventhBodySection;