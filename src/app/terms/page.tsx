import { Typography } from '../components/ui/Typography';

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white py-20 px-6">
            <div className="max-w-3xl mx-auto space-y-12">

                {/* Header Section */}
                <div className="space-y-4 border-b border-zinc-800 pb-12">
                    <Typography variant="label">Legal Agreement</Typography>
                    <Typography variant="h1" className="text-4xl md:text-6xl">
                        Terms and <br /> Conditions
                    </Typography>
                    <Typography variant="caption">
                        Last Updated: April 2026 | LODBE Private Limited
                    </Typography>
                </div>

                {/* Content Sections */}
                <div className="space-y-10">

                    <section className="space-y-4">
                        <Typography variant="h3" className="text-sm md:text-base text-zinc-300 font-semibold tracking-wide">1. Introduction & Governance</Typography>
                        <Typography variant="p" className="text-[13px] md:text-sm leading-relaxed text-zinc-400">
                            These Terms and Conditions govern the access to and use of all products, services, applications, websites, SaaS platforms, cloud storage solutions, digital ecosystems, and networking platforms operated by LODBE Private Limited (“LODBE”, “Company”, “we”, “our”, or “us”). By accessing, registering, or using any of LODBE’s services, you (“User”, “you”) agree to be bound by these Terms. If you do not agree, you must not use the services.
                        </Typography>
                    </section>

                    <section className="space-y-4">
                        <Typography variant="h3" className="text-sm md:text-base text-zinc-300 font-semibold tracking-wide">2. Company Overview</Typography>
                        <Typography variant="p" className="text-[13px] md:text-sm leading-relaxed text-zinc-400">
                            LODBE is a technology-driven digital platform company that develops and provides software products, SaaS solutions, artificial intelligence tools, cloud-based storage services, digital platforms, and business networking ecosystems designed to support businesses, professionals, and individuals globally.
                        </Typography>
                    </section>

                    <section className="space-y-4">
                        <Typography variant="h3" className="text-sm md:text-base text-zinc-300 font-semibold tracking-wide">3. Eligibility & Accounts</Typography>
                        <Typography variant="p" className="text-[13px] md:text-sm leading-relaxed text-zinc-400">
                            Users must be at least 18 years of age or have parental or legal guardian consent to use LODBE services. Users are responsible for maintaining the confidentiality of their account credentials and for all activities carried out under their accounts.
                        </Typography>
                    </section>

                    <section className="space-y-4">
                        <Typography variant="h3" className="text-sm md:text-base text-zinc-300 font-semibold tracking-wide">4. Acceptable Use</Typography>
                        <Typography variant="p" className="text-[13px] md:text-sm leading-relaxed text-zinc-400">
                            Users agree to use LODBE’s services only for lawful purposes. Users shall not misuse the platform, attempt unauthorized access, upload malicious content, engage in illegal activities, or interfere with the proper functioning of the platform. LODBE reserves the right to suspend or terminate accounts without prior notice in case of violations.
                        </Typography>
                    </section>

                    <section className="space-y-4">
                        <Typography variant="h3" className="text-sm md:text-base text-zinc-300 font-semibold tracking-wide">5. Cloud Storage & Data Management</Typography>
                        <Typography variant="p" className="text-[13px] md:text-sm leading-relaxed text-zinc-400">
                            Users retain ownership of their content; however, by uploading content, users grant LODBE a limited, non-exclusive right to store, process, and display such content solely for the purpose of providing the service. Users are solely responsible for the content they upload and must ensure that it does not violate any laws or third-party rights.
                        </Typography>
                    </section>

                    <section className="space-y-4">
                        <Typography variant="h3" className="text-sm md:text-base text-zinc-300 font-semibold tracking-wide">6. Intellectual Property</Typography>
                        <Typography variant="p" className="text-[13px] md:text-sm leading-relaxed text-zinc-400">
                            All intellectual property rights related to LODBE’s platforms, including software, source code, designs, trademarks, and proprietary systems, remain the exclusive property of LODBE. Users are granted a limited, non-exclusive, non-transferable license to use the services.
                        </Typography>
                    </section>

                    <section className="space-y-4">
                        <Typography variant="h3" className="text-sm md:text-base text-zinc-300 font-semibold tracking-wide">7. Payments & Billing</Typography>
                        <Typography variant="p" className="text-[13px] md:text-sm leading-relaxed text-zinc-400">
                            Payments may be processed through third-party payment gateways such as Razorpay or through platform providers such as Apple App Store or Google Play Store. All payments are subject to the respective platform’s billing policies. Unless otherwise stated, all payments are non-refundable.
                        </Typography>
                    </section>

                    <section className="space-y-4">
                        <Typography variant="h3" className="text-sm md:text-base text-zinc-300 font-semibold tracking-wide">8. Networking & Ecosystems</Typography>
                        <Typography variant="p" className="text-[13px] md:text-sm leading-relaxed text-zinc-400">
                            LODBE does not guarantee business results, referrals, earnings, or partnerships. Any interaction, agreement, or transaction between users is solely between the respective parties, and LODBE shall not be held liable for any disputes or outcomes.
                        </Typography>
                    </section>

                    <section className="space-y-4">
                        <Typography variant="h3" className="text-sm md:text-base text-zinc-300 font-semibold tracking-wide">9. Educational Content</Typography>
                        <Typography variant="p" className="text-[13px] md:text-sm leading-relaxed text-zinc-400">
                            LODBE may provide training and workshops. Such services are non-regulated and are intended for skill development purposes only and do not constitute formal academic education or government-recognized certification unless explicitly stated.
                        </Typography>
                    </section>

                    <section className="space-y-4">
                        <Typography variant="h3" className="text-sm md:text-base text-zinc-300 font-semibold tracking-wide">10. Limitation of Liability</Typography>
                        <Typography variant="p" className="text-[13px] md:text-sm leading-relaxed text-zinc-400">
                            Services are provided on an “as is” and “as available” basis. LODBE does not guarantee uninterrupted or error-free service and shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use the services.
                        </Typography>
                    </section>

                    <section className="space-y-4">
                        <Typography variant="h3" className="text-sm md:text-base text-zinc-300 font-semibold tracking-wide">11. Governing Law & Jurisdiction</Typography>
                        <Typography variant="p" className="text-[13px] md:text-sm leading-relaxed text-zinc-400">
                            These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising shall be subject to the jurisdiction of the courts located in Kerala, India.
                        </Typography>
                    </section>

                </div>

                {/* Footer Action */}
                <div className="pt-12 border-t border-zinc-800 text-center">
                    <Typography variant="p-muted" className="mb-6">
                        If you have any questions regarding these terms, please contact us.
                    </Typography>
                    <div className="flex justify-center gap-4">
                        <a href="/contact" className="text-brand-yellow font-medium hover:underline">Contact Support</a>
                    </div>
                </div>
            </div>
        </main>
    );
}
