export const Ecosystem = () => {
  return (
    <section className="py-24 px-6 bg-zinc-900/50 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        <h2 className="text-3xl md:text-5xl font-bold">A Unified Digital Environment</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          LODBE brings together different stakeholders into one framework where technology meets opportunity.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { role: "Students", benefit: "Access digital tools and unlock professional development pathways." },
            { role: "Professionals", benefit: "Build meaningful connections and scale their digital presence." },
            { role: "Businesses", benefit: "Simplify processes and expand via an interconnected ecosystem." },
          ].map((item) => (
            <div key={item.role} className="relative p-8 rounded-3xl bg-black border border-zinc-800 hover:border-yellow-400/40 transition-all group">
              <div className="text-yellow-400 font-bold text-xl mb-4">{item.role}</div>
              <p className="text-gray-500 group-hover:text-gray-300 transition-colors">{item.benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
