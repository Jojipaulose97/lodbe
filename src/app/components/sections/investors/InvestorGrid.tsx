import { Button } from "../../../components/ui/Button";
import { Typography } from "../../../components/ui/Typography";
import { Rocket, Globe, Zap } from "lucide-react"; // Professional Icons

const pillars = [
  {
    title: "Platform Expansion",
    desc: "Continuously launching new SaaS products and AI tools that address evolving business needs.",
    icon: <Rocket size={32} />
  },
  {
    title: "Network Effects",
    desc: "Scaling the business networking ecosystem to drive organic user acquisition and engagement.",
    icon: <Globe size={32} />
  },
  {
    title: "Global Reach",
    desc: "Expanding into international markets with digital-first solutions across industries.",
    icon: <Zap size={32} />
  }
];

export const InvestorGrid = () => {
  return (
    <section className="py-20 px-6 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Typography variant="h2" className="mb-4">Growth Vision</Typography>
          <Typography variant="p-muted" className="max-w-2xl mx-auto">
            Our strategy is centered on three core pillars to achieve scalable global expansion.
          </Typography>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {pillars.map((p, i) => (
            <div key={i} className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900 hover:border-brand-yellow/50 transition-all group">
              <div className="text-brand-yellow mb-4 group-hover:scale-110 transition-transform">
                {p.icon}
              </div>
              <Typography variant="h3" className="mb-2 group-hover:text-brand-yellow transition-colors">
                {p.title}
              </Typography>
              <Typography variant="p-muted">{p.desc}</Typography>
            </div>
          ))}
        </div>

        {/* Business Model Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Typography variant="h2">Business Model</Typography>
            <Typography variant="p" className="text-zinc-400">
              LODBE operates a multi-layered, technology-centric revenue model designed for scalability and recurring income.
            </Typography>
            <ul className="space-y-3">
              {['SaaS Subscriptions', 'Premium Platform Features', 'Cloud Storage Services', 'Membership Ecosystem Access'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-zinc-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow" /> {item}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Investment Opportunity Card */}
          <div className="bg-brand-yellow p-10 rounded-3xl text-black shadow-xl shadow-brand-yellow/10">
            <Typography variant="h3" className="text-black mb-4">Investment Opportunity</Typography>
            <p className="text-lg font-medium mb-6 text-black/80">
              Combine SaaS economics with strong network effects for long-term value creation in the digital economy.
            </p>
            <Button variant="primary" className="bg-black text-white w-full py-4">
              Request Investor Deck
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
