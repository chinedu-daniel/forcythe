//FifthBodySection.tsx
const FifthBodySection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
          Your best call for B2B/B2C product innovation
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Experience</h3>
            <p className="text-sm md:text-lg text-white">
              Decades of collective wisdom. Leverage our extensive experience to avoid common pitfalls and accelerate your business growth.
            </p>
          </div>
          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Quick Support</h3>
            <p className="text-sm md:text-lg text-white">
              We are your reliable partner, always there when you need us, ensuring smooth operations at every stage of your growth.
            </p>
          </div>
          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Cost Savings</h3>
            <p className="text-sm md:text-lg text-white">
              Maximising impact, minimising costs efficiency is key. We provide cost-effective solutions without compromising on quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FifthBodySection;
