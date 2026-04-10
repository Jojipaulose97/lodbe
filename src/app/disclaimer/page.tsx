import { Typography } from '../components/ui/Typography';

export default function DisclaimerPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white py-20 px-6">
            <div className="max-w-3xl mx-auto space-y-12">

                {/* Header */}
                <div className="space-y-4 border-b border-zinc-800 pb-12">
                    <Typography variant="label">Legal Documentation</Typography>
                    <Typography variant="h1">
                        Disclaimer
                    </Typography>
                    <Typography variant="p-muted">
                        Effective Date: April 2026 — LODBE Private Limited
                    </Typography>
                </div>

                <div className="space-y-12">

                    <section className="space-y-3">
                        <Typography variant="h3">General Use of Services</Typography>
                        <Typography variant="p">
                            The information, services, software products, digital platforms, cloud storage solutions,
                            and business networking ecosystems provided by LODBE Private Limited are offered on an
                            "as is" and "as available" basis. While LODBE makes reasonable efforts to ensure
                            accuracy, reliability, and availability, the Company does not guarantee that its services
                            will be uninterrupted, error-free, or free from defects.
                        </Typography>
                    </section>

                    <section className="space-y-3">
                        <Typography variant="h3">No Guarantee of Outcomes</Typography>
                        <Typography variant="p">
                            LODBE does not guarantee any specific outcomes, including business success, revenue
                            generation, client acquisition, partnerships, or performance improvements resulting
                            from the use of its platforms or participation in its ecosystem.
                        </Typography>
                    </section>

                    <section className="space-y-3">
                        <Typography variant="h3">Cloud Storage & Data</Typography>
                        <Typography variant="p">
                            Users are solely responsible for the content they upload and for maintaining appropriate
                            backups. While LODBE implements reasonable security measures, it does not guarantee
                            absolute data security or protection against data loss, unauthorized access, or
                            system failures.
                        </Typography>
                    </section>

                    <section className="space-y-3">
                        <Typography variant="h3">User Interactions & Ecosystem</Typography>
                        <Typography variant="p">
                            Any interactions, communications, or transactions between users within LODBE's networking
                            platforms are solely between the respective users. LODBE does not endorse, verify, or
                            guarantee the accuracy or quality of any user, service, or business listed on the
                            platform and shall not be held responsible for any disputes or damages arising from
                            such interactions.
                        </Typography>
                    </section>

                    <section className="space-y-3">
                        <Typography variant="h3">Training & Educational Content</Typography>
                        <Typography variant="p">
                            Training programs, workshops, AI tools, and educational content provided by LODBE are
                            for informational and skill development purposes only. They do not constitute
                            professional, legal, financial, or academic advice. LODBE does not provide any
                            regulated or government-recognized certifications unless explicitly stated.
                        </Typography>
                    </section>

                    <section className="space-y-3">
                        <Typography variant="h3">Payment Processing</Typography>
                        <Typography variant="p">
                            Payments may be processed through third-party providers such as Razorpay, Apple App
                            Store, or Google Play Store. LODBE is not responsible for payment processing errors,
                            delays, or disputes arising from third-party systems.
                        </Typography>
                    </section>

                    <section className="space-y-3">
                        <Typography variant="h3">Limitation of Liability</Typography>
                        <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-2">
                            <Typography variant="p">
                                LODBE shall not be liable for any direct, indirect, incidental, consequential,
                                or special damages arising out of or in connection with the use of its services —
                                including but not limited to loss of data, loss of profits, business interruption,
                                or system failures.
                            </Typography>
                        </div>
                    </section>

                    <section className="space-y-3">
                        <Typography variant="h3">Compliance Responsibility</Typography>
                        <Typography variant="p">
                            Users are responsible for ensuring that their use of LODBE services complies with
                            applicable laws and regulations in their respective jurisdictions. LODBE makes no
                            representations that its services are appropriate or compliant for use in all locations.
                        </Typography>
                    </section>

                    <section className="space-y-3">
                        <Typography variant="h3">Right to Modify Services</Typography>
                        <Typography variant="p">
                            LODBE reserves the right to modify, suspend, or discontinue any part of its services
                            at any time without prior notice.
                        </Typography>
                    </section>

                </div>

                {/* Footer */}
                <div className="pt-12 border-t border-zinc-800 text-center space-y-4">
                    <Typography variant="p-muted">
                        For any questions regarding this disclaimer, please reach out to our team.
                    </Typography>
                    <a href="/contact" className="text-yellow-400 font-medium text-base hover:underline">
                        Contact LODBE
                    </a>
                </div>

            </div>
        </main>
    );
}