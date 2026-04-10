import { ScrollReveal } from '../components/ui/ScrollReveal';

export default function IntegrationsPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-16 px-6">
            <div className="max-w-4xl mx-auto flex flex-col gap-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Integrations</h1>
                <p className="text-gray-400 text-lg leading-relaxed">
                    Connect our platform with your favorite tools. Build a seamless workflow that empowers your team to work more efficiently.
                </p>
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {['Slack', 'Google Workspace', 'Salesforce', 'Jira', 'GitHub', 'HubSpot', 'Notion', 'Zapier'].map((integration, idx) => (
                        <ScrollReveal key={idx} delay={idx * 0.05}>
                            <div className="p-6 h-full rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col items-center justify-center text-center hover:border-yellow-500/50 hover:-translate-y-1 transition-all duration-300">
                                <div className="w-16 h-16 rounded-full bg-zinc-800 mb-4 flex items-center justify-center text-zinc-500 font-bold text-xl uppercase shadow-inner">
                                    {integration.charAt(0)}
                                </div>
                                <h3 className="font-semibold text-white mb-1">{integration}</h3>
                                <p className="text-xs text-zinc-500">Official Partner</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </main>
    );
}
