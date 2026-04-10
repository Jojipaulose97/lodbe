import { Typography } from '../../ui/Typography';

export const CareersHero = () => {
  return (
    <section className="relative px-6 py-24 max-w-7xl mx-auto w-full text-center">
      <div className="space-y-6 max-w-3xl mx-auto">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-zinc-400 border border-zinc-200 rounded-full px-4 py-1.5">
          Careers at LODBE
        </span>
        <Typography variant="h1" className="text-4xl sm:text-5xl md:text-6xl leading-tight">
          Build the Future of{' '}
          <span className="text-zinc-400">Digital Business Ecosystems</span>
        </Typography>
        <Typography variant="p-muted" className="text-base sm:text-lg max-w-2xl mx-auto">
          We&apos;re not a service agency — we design and own products that power how businesses
          and professionals connect, operate, and grow.
        </Typography>
        <div className="pt-2">
          <a href="#open-roles" className="inline-block bg-zinc-900 text-white text-sm font-medium px-8 py-3 rounded-full hover:bg-zinc-700 transition-colors">
            View Open Roles
          </a>
        </div>
      </div>
    </section>
  );
};