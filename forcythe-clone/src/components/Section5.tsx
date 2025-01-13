// src/components/FifthBodySection.tsx
const FifthBodySection: React.FC = () => {
    return (
      <section className="py-12">
        <div className="container mx-auto px-6 p-8 rounded-lg shadow-lg">
          {/* Bold Text in the Center */}
          <h2 className="text-4xl font-bold text-center mb-12">
            Your best call for B2B/B2C product innovation
          </h2>
  
          {/* Grids with Write-ups */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Grid 1 */}
            <div className="flex flex-col items-center bg-slate-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Experience</h3>
              <p className="text-lg text-white">
                Decades of collective wisdom. Leverage our extensive experience to avoid common pitfalls and accelerate your business growth.
              </p>
            </div>
  
            {/* Grid 2 */}
            <div className="flex flex-col items-center bg-slate-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Quick Support</h3>
              <p className="text-lg text-white">
                We are your reliable partner, always there when you need us, ensuring smooth operations at every stage of your growth.
              </p>
            </div>
  
            {/* Grid 3 */}
            <div className="flex flex-col items-center bg-slate-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Cost Savings</h3>
              <p className="text-lg text-white">
                Maximising impact, minimising costs efficiency is key. We provide cost-effective solutions without compromising on quality.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default FifthBodySection;  