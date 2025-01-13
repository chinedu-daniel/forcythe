// src/components/SixthBodySection.tsx
const SixthBodySection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6 p-8 text-center">
        {/* Arc with background image */}
        <div className="relative flex justify-center items-center overflow-hidden">
          <div
            className="w-full h-64 bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/arc-L.svg)' }}
          >
            {/* Bold Write-up */}
            <h2 className="text-3xl font-bold mb-12">
              We build solutions that help <br /> 
              <span className="blue">businesses</span> of all sizes to <span className="blue">scale</span>.
            </h2>

            {/* Text container with reduced padding around text */}
            <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-around space-x-6">
              {/* Statistic 1 */}
              <div className="text-center px-4 py-3">
                <p className="text-4xl font-bold text-white">500+</p>
                <p className="text-lg text-white">Clients</p>
              </div>

              {/* Statistic 2 */}
              <div className="text-center px-4 py-3">
                <p className="text-4xl font-bold text-white">120+</p>
                <p className="text-lg text-white">Projects</p>
              </div>

              {/* Statistic 3 */}
              <div className="text-center px-4 py-3">
                <p className="text-4xl font-bold text-white">15+</p>
                <p className="text-lg text-white">Team Leads</p>
              </div>

              {/* Statistic 4 */}
              <div className="text-center px-4 py-3">
                <p className="text-4xl font-bold text-white">10+</p>
                <p className="text-lg text-white">Glorious Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SixthBodySection;