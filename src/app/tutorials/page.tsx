import { Play } from 'lucide-react';

export default function TutorialsPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-16 px-6">
            <div className="max-w-4xl mx-auto flex flex-col gap-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Tutorials</h1>
                <p className="text-gray-400 text-lg leading-relaxed">
                    Step-by-step tutorials to help you master our platform. Follow along and build complete solutions from scratch.
                </p>
                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        { title: 'Connecting your first ecosystem', duration: '5 min read', category: 'Basics' },
                        { title: 'Automating tasks with AI Agents', duration: '12 min video', category: 'Advanced' },
                        { title: 'Secure file sharing in Cloud Drive', duration: '8 min read', category: 'Security' },
                        { title: 'Building custom Dashboards', duration: '15 min video', category: 'Customization' },
                        { title: 'Setting up third-party webhooks', duration: '10 min read', category: 'Developers' },
                        { title: 'Managing team permissions matrix', duration: '7 min read', category: 'Admin' },
                    ].map((tutorial, idx) => (
                        <a href="#" key={idx} className="block p-5 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-yellow-500/50 hover:-translate-y-1 transition-all duration-300 group">
                            <div className="w-full h-40 bg-zinc-800 rounded-xl mb-5 flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
                                <span className="text-yellow-400 group-hover:scale-110 transition-transform duration-300"><Play size={40} fill="currentColor" /></span>
                            </div>
                            <div className="flex items-center gap-3 mb-2">
                                <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 text-[10px] font-bold uppercase tracking-wider rounded">{tutorial.category}</span>
                                <span className="text-zinc-500 text-xs font-medium">{tutorial.duration}</span>
                            </div>
                            <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors leading-tight">{tutorial.title}</h3>
                        </a>
                    ))}
                </div>
            </div>
        </main>
    );
}
