// src/components/EighthBodySection.tsx

const EighthBodySection: React.FC = () => {
    return (
      <section className="py-12 text-center">
        <div className="container mx-auto px-6">
          {/* Bold Heading */}
          <h2 className="text-4xl font-bold mb-6"> <span className="blue">Ready to Scale?</span><br />
          Join successful brands that chose us <br /> <span className="blue">as their growth accelerator</span></h2>
  
          {/* Button */}
          <button className="px-6 py-2 bg-white text-black rounded hover:bg-blue-700">
            Book a Call
          </button>
        </div>
      </section>
    );
  };
  
  export default EighthBodySection;  