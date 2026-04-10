export default function ChangelogPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-16 px-6">
            <div className="max-w-4xl mx-auto flex flex-col gap-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Changelog</h1>
                <p className="text-gray-400 text-lg leading-relaxed">
                    Stay up to date with the latest features, improvements, and bug fixes to our growing ecosystem.
                </p>
                <div className="mt-12 border-l-2 border-zinc-800 pl-8 space-y-12">
                    {[
                        { version: 'v1.4.0', date: 'April 2026', title: 'New AI Assistants & Global Search', desc: 'Introduced project-specific AI agents that can directly interact with your Cloud Drive files. Added global ecosystem search.' },
                        { version: 'v1.3.2', date: 'March 2026', title: 'Security Patches & Performance', desc: 'Upgraded end-to-end encryption to military grade standards. Improved page load times across the dashboard by 40%.' },
                        { version: 'v1.3.0', date: 'February 2026', title: 'Cloud Collaboration Overhaul', desc: 'Real-time collaborative editing is now available for all premium users out of beta. Significant improvements to conflict resolution.' },
                    ].map((log, idx) => (
                        <div key={idx} className="relative group">
                            <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-[#0a0a0a] bg-yellow-400 group-hover:scale-125 transition-transform" />
                            <div className="flex items-center gap-4 mb-2">
                                <span className="px-3 py-1 bg-yellow-500/10 text-yellow-400 text-xs font-bold rounded-full">{log.version}</span>
                                <span className="text-zinc-500 text-sm font-medium">{log.date}</span>
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-3">{log.title}</h3>
                            <p className="text-zinc-400 leading-relaxed max-w-2xl">{log.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
