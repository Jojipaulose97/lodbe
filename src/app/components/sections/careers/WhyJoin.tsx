import { Typography } from '../../ui/Typography';

const reasons = [
  { title: 'Product-First Engineering', desc: 'Work on platforms we own and evolve continuously.' },
  { title: 'Real Impact', desc: 'Your work directly shapes user experience and growth.' },
  { title: 'Modern Stack', desc: 'Cloud-native architecture, APIs, AI integrations, scalable systems.' },
  { title: 'Learning Culture', desc: 'Rapid exposure across SaaS, AI, cloud, and ecosystem design.' },
  { title: 'Growth Opportunities', desc: 'Build deep expertise or move across functions as we scale.' },
];

export const WhyJoin = () => {
  return (
    <section className="px-6 py-16 max-w-7xl mx-auto w-full">
      <div className="space-y-10">
        <Typography variant="h2" className="text-3xl sm:text-4xl text-center">
          Why Join LODBE
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="border border-zinc-100 rounded-2xl p-6 space-y-2 hover:border-zinc-300 hover:shadow-sm transition-all"
            >
              <div className="w-2 h-2 rounded-full bg-zinc-700" />
              <p className="font-semibold text-zinc-300 text-sm">{item.title}</p>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};