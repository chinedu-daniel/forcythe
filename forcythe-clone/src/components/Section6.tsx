// SixthBodySection.tsx
const SixthBodySection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 p-8 text-center">
        <div className="relative flex justify-center items-center overflow-hidden">
          <div className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: 'url(/images/arc-L.svg)' }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-12">
              We build solutions that help <br />
              <span className="text-blue-500">businesses</span> of all sizes to <span className="text-blue-500">scale</span>.
            </h2>
            <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-around space-x-6">
              <div className="text-center px-4 py-3">
                <p className="text-xl md:text-4xl font-bold text-white">500+</p>
                <p className="text-sm md:text-lg text-white">Clients</p>
              </div>
              <div className="text-center px-4 py-3">
                <p className="text-xl md:text-4xl font-bold text-white">120+</p>
                <p className="text-sm md:text-lg text-white">Projects</p>
              </div>
              <div className="text-center px-4 py-3">
                <p className="text-xl md:text-4xl font-bold text-white">15+</p>
                <p className="text-sm md:text-lg text-white">Team Leads</p>
              </div>
              <div className="text-center px-4 py-3">
                <p className="text-xl md:text-4xl font-bold text-white">10+</p>
                <p className="text-sm md:text-lg text-white">Glorious Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SixthBodySection;
