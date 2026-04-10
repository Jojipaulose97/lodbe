export default function PricingPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-16 px-6">
            <div className="max-w-4xl mx-auto flex flex-col gap-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Pricing</h1>
                <p className="text-gray-400 text-lg leading-relaxed">
                    Flexible pricing plans designed to grow with your business. Whether you are a startup or a global enterprise, we have a plan suitable for your scale.
                </p>
                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800">
                        <h3 className="text-xl font-bold mb-2">Starter</h3>
                        <p className="text-gray-400 mb-6">Perfect for small teams</p>
                        <div className="text-3xl font-bold mb-6">$29<span className="text-sm font-normal text-gray-500">/mo</span></div>
                    </div>
                    <div className="p-6 rounded-2xl bg-gray-800 border border-blue-500/50">
                        <h3 className="text-xl font-bold mb-2 text-blue-400">Professional</h3>
                        <p className="text-gray-400 mb-6">For scaling businesses</p>
                        <div className="text-3xl font-bold mb-6">$99<span className="text-sm font-normal text-gray-500">/mo</span></div>
                    </div>
                    <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800">
                        <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                        <p className="text-gray-400 mb-6">Custom solutions</p>
                        <div className="text-3xl font-bold mb-6">Custom</div>
                    </div>
                </div>
            </div>
        </main>
    );
}
