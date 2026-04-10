import { Typography } from '../components/ui/Typography';


export default function CookiePage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white py-20 px-6">
            <div className="max-w-3xl mx-auto space-y-12">

                <div className="space-y-4 border-b border-zinc-800 pb-12">
                    <Typography variant="label">Legal Documentation</Typography>
                    <Typography variant="h1" className="text-4xl md:text-6xl">
                        Cookie <br /> Policy
                    </Typography>
                    <Typography variant="caption">
                        Last Updated: April 2026 | LODBE Private Limited
                    </Typography>
                </div>

                <div className="space-y-10">
                    <section className="space-y-4">
                        <Typography variant="h3" className="text-sm md:text-base text-zinc-300 font-semibold tracking-wide">1. What are Cookies?</Typography>
                        <Typography variant="p" className="text-[13px] md:text-sm leading-relaxed text-zinc-400">
                            Cookies are small text files stored on your device (computer, mobile, or tablet) when you visit a website or use an application. These cookies help improve user experience, enable essential platform functionality, and provide insights into how our services are used.
                        </Typography>
                    </section>

                    <section className="space-y-4">
                        <Typography variant="h3" className="text-sm md:text-base text-zinc-300 font-semibold tracking-wide">2. How LODBE Uses Cookies</Typography>
                        <Typography variant="p" className="text-[13px] md:text-sm leading-relaxed text-zinc-400">
                            LODBE uses cookies for various purposes, including enabling core functionality of the platform, managing user sessions, remembering user preferences, enhancing security, analyzing usage patterns, and improving performance.
                        </Typography>
                    </section>

                    <section className="space-y-4">
                        <Typography variant="h3" className="text-sm md:text-base text-zinc-300 font-semibold tracking-wide">3. Types of Cookies We Use</Typography>
                        <div className="space-y-4">
                            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800">
                                <span className="font-bold text-brand-yellow">Essential Cookies:</span> Necessary for the basic operation of our platforms.
                            </div>
                            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800">
                                <span className="font-bold text-brand-yellow">Performance Cookies:</span> Help us understand how users interact with our services.
                            </div>
                            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800">
                                <span className="font-bold text-brand-yellow">Functional Cookies:</span> Remember user preferences and settings.
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <Typography variant="h3" className="text-sm md:text-base text-zinc-300 font-semibold tracking-wide">4. Third-Party Cookies</Typography>
                        <Typography variant="p" className="text-[13px] md:text-sm leading-relaxed text-zinc-400">
                            LODBE may use third-party services such as analytics providers to collect and analyze information. These third parties may use cookies to collect data such as IP address and device information in accordance with their own privacy policies.
                        </Typography>
                    </section>

                    <section className="space-y-4">
                        <Typography variant="h3" className="text-sm md:text-base text-zinc-300 font-semibold tracking-wide">5. Managing Your Preferences</Typography>
                        <Typography variant="p" className="text-[13px] md:text-sm leading-relaxed text-zinc-400">
                            Users have the ability to control or disable cookies through their browser or device settings. However, disabling certain cookies may affect the functionality and performance of LODBE services.
                        </Typography>
                    </section>
                </div>

                <div className="pt-12 border-t border-zinc-800 text-center">
                    <Typography variant="p-muted" className="mb-6">
                        By continuing to use LODBE platforms, you consent to the use of cookies as described in this policy.
                    </Typography>
                    <a href="/contact" className="text-brand-yellow font-medium hover:underline">Manage Cookie Settings</a>
                </div>
            </div>
        </main>
    );
}
