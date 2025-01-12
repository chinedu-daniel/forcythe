// src/components/FirstBodySection.tsx

const FirstBodySection: React.FC = () => (
    <section className="py-12">
      <div className="container mx-auto px-6 bg-transparent border p-8 rounded-lg shadow-lg">
        {/* Write-up content */}
        <div className="mb-6">
          <h2 className="text-7xl font-bold text-white mb-2">We build products that shape a better future</h2>
          <p className="text-lg text-white-700">We’re the architects of digital excellence across industries. We redefine business with cutting-edge digital strategies that invokes sector-wide transformation.</p>
        </div>
  
        {/* Book a Demo button */}
        <button className="px-6 py-2 bg-white text-black border rounded hover:bg-blue-500 hover:text-white">
          Book a Demo
        </button>
      </div>
    </section>
);
  
  export default FirstBodySection;  