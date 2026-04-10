import { Typography } from '../components/ui/Typography';

export default function RefundPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white py-20 px-6">
            <div className="max-w-3xl mx-auto space-y-12">

                {/* Header */}
                <div className="space-y-4 border-b border-zinc-800 pb-12">
                    <Typography variant="label">Legal Documentation</Typography>
                    <Typography variant="h1">
                        Refund & <br /> Cancellation Policy
                    </Typography>
                    <Typography variant="p-muted">
                        Effective Date: April 2026 — LODBE Private Limited
                    </Typography>
                </div>

                <div className="space-y-10">

                    <section className="space-y-3">
                        <Typography variant="h3" className="text-sm md:text-base text-zinc-300 font-semibold tracking-wide">Overview</Typography>
                        <Typography variant="p" className="text-[13px] md:text-sm leading-relaxed text-zinc-400">
                            This policy governs all payments, subscriptions, memberships, and purchases made
                            through LODBE Private Limited across its websites, applications, SaaS platforms,
                            cloud storage services, digital products, and business networking ecosystems.
                            By making any payment to LODBE, you agree to this policy.
                        </Typography>
                    </section>

                    <section className="space-y-3">
                        <Typography variant="h3" className="text-sm md:text-base text-zinc-300 font-semibold tracking-wide">General Refund Policy</Typography>
                        <Typography variant="p" className="text-[13px] md:text-sm leading-relaxed text-zinc-400">
                            LODBE provides digital products, software services, cloud storage solutions,
                            subscriptions, training programs, and platform-based services. Due to the nature
                            of digital services and immediate access provided upon purchase, all payments
                            made to LODBE are generally non-refundable unless explicitly stated otherwise.
                        </Typography>
                    </section>

                    <section className="space-y-3">
                        <Typography variant="h3" className="text-sm md:text-base text-zinc-300 font-semibold tracking-wide">Subscription Cancellation</Typography>
                        <Typography variant="p" className="text-[13px] md:text-sm leading-relaxed text-zinc-400">
                            Users may cancel their subscriptions, memberships, or recurring billing plans
                            at any time through their account settings or by contacting LODBE support.
                            Upon cancellation, users will continue to have access to the paid services
                            until the end of the current billing cycle. No partial or prorated refunds
                            will be provided for the remaining period.
                        </Typography>
                    </section>

                    <section className="space-y-3">
                        <Typography variant="h3" className="text-sm md:text-base text-zinc-300 font-semibold tracking-wide">App Store & Play Store Payments</Typography>
                        <Typography variant="p" className="text-[13px] md:text-sm leading-relaxed text-zinc-400">
                            For payments made through third-party platforms such as Apple App Store or
                            Google Play Store, all billing, cancellation, and refund requests are governed
                            by their respective policies. Users must contact Apple or Google directly for
                            refund requests, as LODBE does not have control over such transactions.
                        </Typography>
                    </section>

                    <section className="space-y-3">
                        <Typography variant="h3" className="text-sm md:text-base text-zinc-300 font-semibold tracking-wide">Payment Gateway Refunds</Typography>
                        <Typography variant="p" className="text-[13px] md:text-sm leading-relaxed text-zinc-400">
                            For payments processed through third-party payment gateways such as Razorpay,
                            refunds (if applicable) will be processed only in cases of duplicate transactions,
                            failed payments where the amount has been deducted, or technical errors
                            attributable to LODBE. Approved refunds will be credited back to the original
                            payment method within a reasonable timeframe.
                        </Typography>
                    </section>

                    <section className="space-y-3">
                        <Typography variant="h3" className="text-sm md:text-base text-zinc-300 font-semibold tracking-wide">Exceptional Circumstances</Typography>
                        <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800">
                            <Typography variant="p" className="text-[13px] md:text-sm leading-relaxed text-zinc-400">
                                LODBE may, at its sole discretion, consider refund requests in exceptional
                                circumstances such as service unavailability, major technical defects, or
                                billing errors — provided the request is made within a reasonable time from
                                the date of transaction. LODBE reserves the right to approve or reject
                                such requests.
                            </Typography>
                        </div>
                    </section>

                    <section className="space-y-3">
                        <Typography variant="h3" className="text-sm md:text-base text-zinc-300 font-semibold tracking-wide">Digital Products & Downloads</Typography>
                        <Typography variant="p" className="text-[13px] md:text-sm leading-relaxed text-zinc-400">
                            For digital products, downloadable content, software licenses, AI tools, or
                            training programs — once access has been granted or content has been delivered,
                            no refunds shall be issued. Users are encouraged to review product details
                            carefully before making a purchase.
                        </Typography>
                    </section>

                    <section className="space-y-3">
                        <Typography variant="h3" className="text-sm md:text-base text-zinc-300 font-semibold tracking-wide">Cloud Storage & Data</Typography>
                        <Typography variant="p" className="text-[13px] md:text-sm leading-relaxed text-zinc-400">
                            Users are responsible for managing their data before cancellation. Upon
                            termination or expiry of a subscription, access to stored data may be limited
                            or removed after a specified period. LODBE shall not be responsible for data
                            loss after account cancellation or service termination.
                        </Typography>
                    </section>

                    <section className="space-y-3">
                        <Typography variant="h3" className="text-sm md:text-base text-zinc-300 font-semibold tracking-wide">Pricing & Plan Changes</Typography>
                        <Typography variant="p" className="text-[13px] md:text-sm leading-relaxed text-zinc-400">
                            LODBE reserves the right to modify pricing, subscription plans, or service
                            offerings at any time. Any changes will not affect active subscriptions until
                            the end of the current billing cycle.
                        </Typography>
                    </section>

                    <section className="space-y-3">
                        <Typography variant="h3" className="text-sm md:text-base text-zinc-300 font-semibold tracking-wide">Service Termination</Typography>
                        <Typography variant="p" className="text-[13px] md:text-sm leading-relaxed text-zinc-400">
                            LODBE reserves the right to suspend or terminate services in case of violation
                            of Terms and Conditions, misuse of the platform, or unlawful activities.
                            In such cases, no refunds shall be provided.
                        </Typography>
                    </section>

                    <section className="space-y-3">
                        <Typography variant="h3" className="text-sm md:text-base text-zinc-300 font-semibold tracking-wide">Policy Updates</Typography>
                        <Typography variant="p" className="text-[13px] md:text-sm leading-relaxed text-zinc-400">
                            This policy is subject to change at any time without prior notice. Continued
                            use of LODBE services after updates constitutes acceptance of the revised policy.
                        </Typography>
                    </section>

                </div>

                {/* Footer */}
                <div className="pt-12 border-t border-zinc-800 text-center space-y-4">
                    <Typography variant="p-muted">
                        For any refund or cancellation-related queries, contact us through our official support channels.
                    </Typography>
                    <a href="/contact" className="text-yellow-400 font-medium text-sm hover:underline">
                        Contact Support
                    </a>
                </div>

            </div>
        </main>
    );
}