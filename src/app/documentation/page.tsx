export default function DocumentationPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-16 px-6">
            <div className="max-w-4xl mx-auto flex flex-col gap-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Documentation</h1>
                <p className="text-gray-400 text-lg leading-relaxed">
                    Explore comprehensive guides, API references, and conceptual content to get the most out of our platform.
                </p>
                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {[
                        { title: 'Getting Started', desc: 'Quick start guides, installation, and basic concepts for new users.', count: '12 Articles' },
                        { title: 'API Reference', desc: 'Comprehensive API endpoints, authentication, and webhooks documentation.', count: '45 Endpoints' },
                        { title: 'Cloud Infrastructure', desc: 'Setting up and managing your LODBE cloud storage and servers.', count: '24 Articles' },
                        { title: 'AI Tools Integration', desc: 'Connect and configure AI services within your business workflow.', count: '18 Guides' },
                    ].map((doc, idx) => (
                        <a href="#" key={idx} className="block p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-yellow-500/50 hover:-translate-y-1 transition-all duration-300 group">
                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors">{doc.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">{doc.desc}</p>
                            <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">{doc.count}</span>
                        </a>
                    ))}
                </div>
            </div>
        </main>
    );
}
