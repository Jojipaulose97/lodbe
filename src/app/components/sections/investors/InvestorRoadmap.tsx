import { Typography } from '../../../components/ui/Typography';

export const InvestorRoadmap = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto w-full">
      <Typography variant="h2" className="mb-12 text-center">Future Roadmap</Typography>
      
      <div className="space-y-12 max-w-3xl mx-auto">
        {[
          { step: "1", title: "AI-Driven Intelligence", desc: "Introducing advanced automation and intelligence-driven features to optimize user workflows." },
          { step: "2", title: "Infrastructure Scaling", desc: "Strengthening cloud infrastructure to support millions of users across global geographies." },
          { step: "3", title: "Ecosystem Integration", desc: "Creating a fully integrated environment where businesses operate without fragmentation." },
        ].map((item, index) => (
          <div key={index} className="flex gap-6 group">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center font-bold border border-zinc-700 group-hover:border-brand-yellow transition-colors text-zinc-400 group-hover:text-brand-yellow">
              {item.step}
            </div>
            <div className="space-y-2">
              <Typography variant="h3">{item.title}</Typography>
              <Typography variant="p-muted">{item.desc}</Typography>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
