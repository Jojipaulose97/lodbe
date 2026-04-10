import { Globe, Bot, Cloud, Lock, Zap, Link } from 'lucide-react';
import { ScrollReveal } from '../components/ui/ScrollReveal';

export default function FeaturesPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-16 px-6">
            <div className="max-w-4xl mx-auto flex flex-col gap-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Features</h1>
                <p className="text-gray-400 text-lg leading-relaxed">
                    Discover the powerful features of our Digital Business Ecosystem, designed to scale your operations and drive growth. Core capabilities include seamless integrations, advanced analytics, and collaborative spaces.
                </p>
                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        { title: 'Unified Ecosystem', desc: 'Centralize your apps, tools, and workflows in one single platform.', icon: <Globe size={36} /> },
                        { title: 'AI-Powered Insights', desc: 'Transform data into actionable business intelligence seamlessly.', icon: <Bot size={36} /> },
                        { title: 'Cloud Collaboration', desc: 'Share, edit, and manage files securely with your team in real-time.', icon: <Cloud size={36} /> },
                        { title: 'Advanced Security', desc: 'Enterprise-grade encryption protecting your most sensitive assets.', icon: <Lock size={36} /> },
                        { title: 'Scalable Infrastructure', desc: 'Built to grow with your business demands without performance drops.', icon: <Zap size={36} /> },
                        { title: 'API Driven', desc: 'Connect and extend functionalities with our robust REST APIs.', icon: <Link size={36} /> },
                    ].map((feature, idx) => (
                        <ScrollReveal key={idx} delay={idx * 0.1}>
                            <div className="p-8 h-full rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-yellow-500/50 hover:bg-zinc-800/50 transition-all duration-300 group">
                                <span className="mb-6 block group-hover:scale-110 transition-transform origin-left text-yellow-500">{feature.icon}</span>
                                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </main>
    );
}
