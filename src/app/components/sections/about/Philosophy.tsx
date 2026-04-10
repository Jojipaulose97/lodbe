export const Philosophy = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Product-First <br /> <span className="text-yellow-400">Philosophy.</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            At its core, LODBE is not a traditional service provider. Instead, it builds and owns innovative digital products designed to solve real business challenges. 
          </p>
          <div className="p-6 rounded-2xl bg-zinc-900 border-l-4 border-yellow-400">
            <p className="italic text-gray-300">
              &quot;From intelligent software systems and automation tools to cloud-based solutions, we create infrastructure that enables growth at scale.&quot;
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: "SaaS Solutions", desc: "Scalable software as a service" },
            { title: "AI Tools", desc: "Intelligence-driven automation" },
            { title: "Cloud Infra", desc: "Modern digital foundations" },
            { title: "Networking", desc: "Business ecosystem connectivity" },
          ].map((item) => (
            <div key={item.title} className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50">
              <h4 className="font-bold mb-2">{item.title}</h4>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
