// src/components/FifthBodySection.tsx
const FifthBodySection: React.FC = () => {
    return (
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6 bg-white p-8 rounded-lg shadow-lg">
          {/* Bold Text in the Center */}
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Services at a Glance
          </h2>
  
          {/* Grids with Write-ups */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Grid 1 */}
            <div className="flex flex-col items-center p-6 bg-gray-200 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Service One</h3>
              <p className="text-lg text-gray-600">
                A comprehensive solution for your needs, designed with quality and precision in mind.
              </p>
            </div>
  
            {/* Grid 2 */}
            <div className="flex flex-col items-center p-6 bg-gray-200 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Service Two</h3>
              <p className="text-lg text-gray-600">
                We provide expert services to help you achieve success, with personalized support every step of the way.
              </p>
            </div>
  
            {/* Grid 3 */}
            <div className="flex flex-col items-center p-6 bg-gray-200 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Service Three</h3>
              <p className="text-lg text-gray-600">
                Experience seamless service and tailored solutions, designed to optimize your workflow and results.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default FifthBodySection;  