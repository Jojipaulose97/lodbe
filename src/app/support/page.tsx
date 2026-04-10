import { Star } from 'lucide-react';

export default function SupportPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-16 px-6">
            <div className="max-w-4xl mx-auto flex flex-col gap-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Support</h1>
                <p className="text-gray-400 text-lg leading-relaxed">
                    Need help? Our dedicated support team is here to assist you with any questions or technical issues you may encounter.
                </p>
                <div className="mt-12 grid gap-12 lg:grid-cols-2 items-start">
                    {/* Support Form */}
                    <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800">
                        <h3 className="text-2xl font-bold mb-6">Submit a Request</h3>
                        <form className="space-y-5">
                            <div className="space-y-2">
                                <label className="text-sm text-zinc-400 ml-1">Your Email</label>
                                <input type="email" placeholder="you@company.com" className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none text-white transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-zinc-400 ml-1">Issue Type</label>
                                <select className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none text-white transition-all">
                                    <option>Technical Issue</option>
                                    <option>Billing Question</option>
                                    <option>Feature Request</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-zinc-400 ml-1">Description</label>
                                <textarea rows={4} placeholder="Please describe your issue in detail..." className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none text-white transition-all"></textarea>
                            </div>
                            <button type="button" className="w-full py-4 bg-white text-black font-semibold rounded-xl hover:bg-yellow-400 transition-colors">
                                Submit Ticket
                            </button>
                        </form>
                    </div>

                    {/* Quick Resources */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Quick Resources</h3>
                            <div className="space-y-3">
                                {[
                                    { title: 'Knowledge Base', desc: 'Find answers to common questions immediately.' },
                                    { title: 'Community Forum', desc: 'Ask the community and share your LODBE setups.' },
                                    { title: 'System Status', desc: 'Check for outages or scheduled maintenance.' },
                                ].map((resource, idx) => (
                                    <div key={idx} className="p-5 rounded-xl border border-zinc-800 hover:border-yellow-500/50 hover:bg-zinc-900 transition-all cursor-pointer group">
                                        <h4 className="font-semibold text-white group-hover:text-yellow-400 transition-colors">{resource.title}</h4>
                                        <p className="text-sm text-zinc-500 mt-1">{resource.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="p-6 rounded-xl bg-yellow-400/10 border border-yellow-400/20 text-yellow-400">
                            <h4 className="font-bold mb-2 flex items-center gap-2"><span><Star size={18} fill="currentColor" /></span> Premium Support</h4>
                            <p className="text-sm text-yellow-100/70">Enterprise customers get 24/7 dedicated phone and slack support. Check your admin dashboard for your dedicated support pin.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
