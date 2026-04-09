import { Typography } from '../components/ui/Typography';


export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white py-20 px-6">
            <div className="max-w-3xl mx-auto space-y-12">

                <div className="space-y-4 border-b border-zinc-800 pb-12">
                    <Typography variant="label">Legal Documentation</Typography>
                    <Typography variant="h1" className="text-4xl md:text-6xl">
                        Privacy <br /> Policy
                    </Typography>
                    <Typography variant="caption">
                        Effective Date: April 2026 | LODBE Private Limited
                    </Typography>
                </div>

                <div className="space-y-10">
                    <section className="space-y-4">
                        <Typography variant="h3">1. Overview</Typography>
                        <Typography variant="p">
                            This Privacy Policy describes how LODBE Private Limited (“LODBE”, “Company”, “we”, “our”, or “us”) collects, uses, stores, processes, and protects personal and business information of users (“User”, “you”) who access or use our websites, mobile applications, SaaS platforms, cloud storage services, digital products, and business networking ecosystems.
                        </Typography>
                    </section>

                    <section className="space-y-4">
                        <Typography variant="h3">2. Information Collection</Typography>
                        <Typography variant="p">
                            LODBE collects information that you provide directly, including but not limited to your name, email address, phone number, business details, account credentials, profile information, and any content you upload or share on the platform.
                        </Typography>
                        <Typography variant="p-muted">
                            When you use LODBE’s cloud storage or digital services, we may collect files, documents, and data that you choose to upload, store, and manage within our systems.
                        </Typography>
                    </section>

                    <section className="space-y-4">
                        <Typography variant="h3">3. Automatic Data Collection</Typography>
                        <Typography variant="p">
                            We also collect information automatically such as device information, IP address, browser type, usage data, and interaction with our platforms to improve performance and user experience.
                        </Typography>
                    </section>

                    <section className="space-y-4">
                        <Typography variant="h3">4. Use of Information</Typography>
                        <Typography variant="p">
                            The information collected is used to provide, operate, and improve LODBE services, including user authentication, platform functionality, cloud storage operations, communication, customer support, personalization, security monitoring, analytics, and development of new features.
                        </Typography>
                    </section>

                    <section className="space-y-4">
                        <Typography variant="h3">5. Data Sharing & Third Parties</Typography>
                        <Typography variant="p">
                            LODBE does not sell or rent your personal data to third parties. However, we may share information with trusted third-party service providers for the purpose of operating our services, including payment processing partners such as Razorpay, hosting providers, analytics services, and app distribution platforms such as Apple App Store and Google Play Store.
                        </Typography>
                    </section>
                </div>

                <div className="pt-12 border-t border-zinc-800 text-center">
                    <Typography variant="p-muted" className="mb-6">
                        For questions regarding your data privacy, please contact our support team.
                    </Typography>
                    <a href="/contact" className="text-brand-yellow font-medium hover:underline">Contact Privacy Officer</a>
                </div>
            </div>
        </main>
    );
}
