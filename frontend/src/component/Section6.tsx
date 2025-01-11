// SixthBodySection.tsx
const SixthBodySection: React.FC = () => {
    return (
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6 bg-white p-8 rounded-lg shadow-lg text-center">
          {/* Write-up */}
          <h2 className="text-3xl font-bold mb-12">
            We build solutions that help businesses of all sizes to scale
          </h2>
  
          {/* Semi-circle layout */}
          <div className="relative flex justify-center items-center">
            <div className="w-full h-64 bg-gradient-to-b from-blue-600 to-transparent rounded-b-full">
              <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-around">
                {/* Statistic 1 */}
                <div className="text-center">
                  <p className="text-4xl font-bold text-blue-600">500+</p>
                  <p className="text-lg text-gray-600">Clients</p>
                </div>
  
                {/* Statistic 2 */}
                <div className="text-center">
                  <p className="text-4xl font-bold text-blue-600">120+</p>
                  <p className="text-lg text-gray-600">Projects</p>
                </div>
  
                {/* Statistic 3 */}
                <div className="text-center">
                  <p className="text-4xl font-bold text-blue-600">15+</p>
                  <p className="text-lg text-gray-600">Team Leads</p>
                </div>
  
                {/* Statistic 4 */}
                <div className="text-center">
                  <p className="text-4xl font-bold text-blue-600">10+</p>
                  <p className="text-lg text-gray-600">Glorious Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default SixthBodySection;
  