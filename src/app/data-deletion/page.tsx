import { Typography } from '../components/ui/Typography';

export default function DataDeletionPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white py-20 px-6">
            <div className="max-w-3xl mx-auto space-y-12">

                {/* Header */}
                <div className="space-y-4 border-b border-zinc-800 pb-12">
                    <Typography variant="label">Legal Documentation</Typography>
                    <Typography variant="h1">
                        Data Deletion <br /> Policy
                    </Typography>
                    <Typography variant="p-muted">
                        Effective Date: April 2026 — LODBE Private Limited
                    </Typography>
                </div>

                <div className="space-y-10">

                    <section className="space-y-3">
                        <Typography variant="h3">Overview</Typography>
                        <Typography variant="p">
                            This Data Deletion Policy describes how users of LODBE Private Limited can
                            request deletion of their personal data and account information from our
                            platforms, including websites, mobile applications, SaaS products, cloud
                            storage services, and business networking ecosystems.
                        </Typography>
                    </section>

                    <section className="space-y-3">
                        <Typography variant="h3">Your Right to Deletion</Typography>
                        <Typography variant="p">
                            Users have the right to request deletion of their personal data and account
                            at any time. Requests may be initiated through the account settings within
                            the LODBE platform or by contacting LODBE through the official support email.
                            Upon receiving a valid request, LODBE will verify the identity of the user
                            before proceeding with the deletion process.
                        </Typography>
                    </section>

                    <section className="space-y-3">
                        <Typography variant="h3">What Gets Deleted</Typography>
                        <Typography variant="p">
                            When a user requests account deletion, LODBE will delete or anonymize personal
                            information such as name, email address, profile details, and account-related
                            data from active systems within a reasonable period — unless retention is
                            required for legal, regulatory, or legitimate business purposes.
                        </Typography>
                        <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800">
                            <Typography variant="p">
                                Certain information such as transaction records, billing data, or logs
                                may be retained for compliance with applicable laws or for resolving
                                disputes, even after an account deletion request.
                            </Typography>
                        </div>
                    </section>

                    <section className="space-y-3">
                        <Typography variant="h3">Cloud Storage & User Files</Typography>
                        <Typography variant="p">
                            For users utilizing LODBE's cloud storage services, it is the user's
                            responsibility to download or back up their data before initiating a deletion
                            request. Upon account deletion, all files, documents, and stored content
                            associated with the account may be permanently removed after a defined
                            retention period, and recovery may not be possible.
                        </Typography>
                    </section>

                    <section className="space-y-3">
                        <Typography variant="h3">Backup & Residual Data</Typography>
                        <Typography variant="p">
                            LODBE may retain limited residual data in backup systems for a temporary
                            period to ensure system integrity, disaster recovery, and compliance with
                            legal obligations. Such data will be securely stored and automatically
                            deleted after the retention period expires.
                        </Typography>
                    </section>

                    <section className="space-y-3">
                        <Typography variant="h3">Shared & Community Content</Typography>
                        <Typography variant="p">
                            In cases where users have participated in networking platforms, communities,
                            or shared content with other users, certain non-personal or anonymized data
                            may continue to exist within the platform to maintain system functionality
                            and historical records — but it will not be linked to identifiable personal
                            information.
                        </Typography>
                    </section>

                    <section className="space-y-3">
                        <Typography variant="h3">Active Subscriptions</Typography>
                        <Typography variant="p">
                            If a user has active subscriptions, memberships, or pending transactions,
                            LODBE may require such obligations to be completed or resolved before
                            processing the deletion request. Users are advised to cancel all active
                            subscriptions prior to requesting account deletion.
                        </Typography>
                    </section>

                    <section className="space-y-3">
                        <Typography variant="h3">Processing Timeframe</Typography>
                        <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800">
                            <Typography variant="p">
                                LODBE will process data deletion requests within a reasonable timeframe,
                                typically within <span className="text-yellow-400 font-semibold">7 to 30 business days</span>,
                                depending on the nature and scope of the request.
                            </Typography>
                        </div>
                    </section>

                    <section className="space-y-3">
                        <Typography variant="h3">Right to Reject or Delay</Typography>
                        <Typography variant="p">
                            LODBE reserves the right to reject or delay deletion requests that cannot
                            be verified or that conflict with legal or regulatory requirements.
                        </Typography>
                    </section>

                </div>

                {/* Footer */}
                <div className="pt-12 border-t border-zinc-800 text-center space-y-4">
                    <Typography variant="p-muted">
                        To submit a data deletion request or for related inquiries, contact us through
                        our official support channels.
                    </Typography>
                    <a href="/contact" className="text-yellow-400 font-medium text-sm hover:underline">
                        Contact Support
                    </a>
                </div>

            </div>
        </main>
    );
}