import { Typography } from '../../ui/Typography';

const culture = [
  { label: 'Fast-moving', desc: 'Execution-focused environment where speed matters.' },
  { label: 'Open Communication', desc: 'Minimal hierarchy, direct and honest feedback.' },
  { label: 'Ownership-Driven', desc: 'You own your work end-to-end, from idea to ship.' },
  { label: 'Continuous Learning', desc: 'Always improving, always adapting to new challenges.' },
];

export const WorkCulture = () => {
  return (
    <section className="px-6 py-16 max-w-7xl mx-auto w-full">
      <div className="space-y-10">
        <Typography variant="h2" className="text-3xl sm:text-4xl text-center">
          Work Culture at LODBE
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {culture.map((item, i) => (
            <div key={i} className="space-y-2 p-6 border border-zinc-100 rounded-2xl hover:border-zinc-300 transition-all">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-zinc-900 font-bold text-sm">
                {i + 1}
              </div>
              <p className="font-semibold text-zinc-900 text-sm">{item.label}</p>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};