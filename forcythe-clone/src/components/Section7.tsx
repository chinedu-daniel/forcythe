import Image from 'next/image';

const SeventhBodySection: React.FC = () => {
  const blogPosts = [
    {
      image: '/images/camera-man.svg',
      title: 'Blog',
      description: 'The Reformist. May 29, 2024.',
      additionalInfo: 'Will AI take over Art?',
    },
    {
      image: '/images/camera-man.svg',
      title: 'Blog',
      description: 'The Reformist. May 29, 2024.',
      additionalInfo: 'Cryptocurrency vs Tokens',
    },
    {
      image: '/images/camera-man.svg',
      title: 'Blog',
      description: 'The Reformist. May 29, 2024.',
      additionalInfo: 'Cryptocurrency and Crypto asset',
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-6 text-center">
        {/* Heading and Button on the same line */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Read our articles, news and product blog</h2>
          <button className="px-6 py-2 bg-white text-black rounded hover:bg-blue-700">
            Visit Blog
          </button>
        </div>

        {/* Grid of Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-transparent p-6 rounded shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all"
            >
              {/* Image with curved edges and hover effect */}
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg transition-transform transform hover:scale-110"
                />
              </div>

              {/* Writeup with bold text */}
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-white mb-2">{post.description}</p>
              <p className="text-white text-2xl font-bold">{post.additionalInfo}</p>

              {/* Book a Call Button
              <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Book a Call
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeventhBodySection;