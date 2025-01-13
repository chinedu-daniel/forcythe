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
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">Read our articles, news and product blog</h2>
          <button className="px-6 py-2 bg-white text-black rounded hover:bg-blue-700">
            Visit Blog
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-transparent p-6 rounded shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all"
            >
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg transition-transform transform hover:scale-110"
                />
              </div>

              <h3 className="text-lg md:text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-white mb-2">{post.description}</p>
              <p className="text-white text-lg md:text-2xl font-bold">{post.additionalInfo}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeventhBodySection;