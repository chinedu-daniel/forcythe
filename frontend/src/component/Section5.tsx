// src/components/FifthBodySection.tsx
const FifthBodySection: React.FC = () => {
    return (
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6 bg-white p-8 rounded-lg shadow-lg">
          {/* Bold Text in the Center */}
          <h2 className="text-3xl font-bold text-center mb-12">
            Your best call for B2B/B2C product innovation
          </h2>
  
          {/* Grids */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* 1st Grid*/}
            <div className="flex flex-col items-center p-6 bg-gray-200 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Experience</h3>
              <p className="text-lg text-gray-600">
                Decades of collective wisdom. Leverage our extensive experience to avoid common pitfalls and accelerate your business growth.
              </p>
            </div>
  
            {/* 2nd Grid */}
            <div className="flex flex-col items-center p-6 bg-gray-200 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Quick Support</h3>
              <p className="text-lg text-gray-600">
                We are your reliable partner, always there when you need us, ensuring smooth operations at every stage of your growth.
              </p>
            </div>
  
            {/* 3rd Grid */}
            <div className="flex flex-col items-center p-6 bg-gray-200 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Cost Savings</h3>
              <p className="text-lg text-gray-600">
                Maximising impact, minimising costs efficiency is key. We provide cost-effective solutions without compromising on quality.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default FifthBodySection;
  