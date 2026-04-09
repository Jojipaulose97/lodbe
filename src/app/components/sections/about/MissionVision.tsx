export const MissionVision = () => {
  return (
    <section className="py-20 px-6 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Mission */}
        <div className="p-10 rounded-3xl border border-zinc-800 bg-zinc-900 hover:border-yellow-400/50 transition-colors">
          <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold mb-6">M</div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-400 leading-relaxed">
            To build powerful, scalable, and intelligent digital platforms that enable businesses, professionals, and individuals to create, connect, and grow within a unified ecosystem. We simplify business processes and unlock new opportunities through continuous innovation.
          </p>
        </div>

        {/* Vision */}
        <div className="p-10 rounded-3xl border border-zinc-800 bg-zinc-900 hover:border-yellow-400/50 transition-colors">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-bold mb-6">V</div>
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-400 leading-relaxed">
            To become a global leader in digital business ecosystems by creating a technology-driven environment where opportunities, innovation, and collaboration are seamlessly connected, redefining how businesses operate and scale.
          </p>
        </div>

      </div>
    </section>
  );
};
