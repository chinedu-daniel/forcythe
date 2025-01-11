// SeventhBodySection.tsx
import Image from 'next/image';

const SeventhBodySection: React.FC = () => {
  const blogPosts = [
    {
      image: '/images/image1.jpeg',
      title: 'Blog',
      description: 'The Reformist. May 29th, 2024.',
      additionalInfo: 'Will AI take over Art?',
    },
    {
      image: '/images/image2.jpeg',
      title: 'Blog',
      description: 'The Reformist. May 29th, 2024.',
      additionalInfo: 'Cryptocurrency vs Token',
    },
    {
      image: '/images/image3.jpeg',
      title: 'Blog',
      description: 'The Reformist. May 29th, 2024.',
      additionalInfo: 'Cryptocurrency and crypto asset',
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-6">Read our articles, news and product blog</h2>

        {/* Visit the Blog Button */}
        <button className="mb-8 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Visit Blog
        </button>

        {/* Grid of Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white p-6 rounded shadow">
              {/* Image */}
              <div className="relative w-full h-48 mb-4">
                <Image width={80} height={100}
                  src={post.image}
                  alt={post.title}
                //   layout="fill"
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