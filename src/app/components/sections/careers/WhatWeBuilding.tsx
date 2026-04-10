import { Typography } from '../../ui/Typography';

const items = [
  'SaaS platforms for business operations',
  'Cloud Drive — secure storage & collaboration',
  'AI-powered tools and automation systems',
  'Networking ecosystem connecting users, opportunities, and data',
];

export const WhatWeBuilding = () => {
  return (
    <section className="px-6 py-16 bg-zinc-900 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <Typography variant="h2" className="text-3xl sm:text-4xl text-white">
              What We're Building
            </Typography>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-md">
              LODBE is building a suite of connected products designed for scale —
              from SaaS tools to AI systems and cloud infrastructure.
            </p>
          </div>
          <ul className="space-y-4">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-900" />
                </span>
                <span className="text-zinc-300 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};