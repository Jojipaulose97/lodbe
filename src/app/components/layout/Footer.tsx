import Link from 'next/link';
import { Typography } from '../ui/Typography';
import Image from 'next/image';

const footerLinks = {
    Product: [
        { name: 'Features', href: '/features' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Integrations', href: '/integrations' },
        { name: 'Changelog', href: '/changelog' },
    ],
    Resources: [
        { name: 'Documentation', href: '/documentation' },
        { name: 'Tutorials', href: '/tutorials' },
        { name: 'Blog', href: '/blog' }, // Connected to Blog
        { name: 'Support', href: '/support' },
    ],
    Company: [
        { name: 'About', href: '/about' },
        { name: 'Investors', href: '/investors' },
        { name: 'Contact', href: '/contact' },
        { name: 'Careers', href: '/careers' },
    ],
};

export const Footer = () => {
    return (
        <footer className="bg-white text-black pt-16 pb-8 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">

                    {/* Brand Section */}
                    <div className="col-span-2 space-y-1">
                        {/* 1. Logo and Two-Line Brand Header */}
                        <div className="flex items-center gap-4">
                            <Link href="/" className="flex-shrink-0 hover:opacity-80 transition-opacity">
                                <Image
                                    src="/images/lodbe.webp"
                                    alt="LODBE - Digital Business Ecosystem Platform"
                                    width={50}
                                    height={50}
                                    priority
                                    className="object-contain"
                                />
                            </Link>

                            {/* The "Two Lines" - Keep this strictly for Brand identity */}
                            <div className="flex flex-col leading-tight">
                                <span className="text-xl font-bold text-black tracking-tight">
                                    Leaders Of Digital Business Ecosystem
                                </span>
                                <Typography variant="p-muted" className="text-gray-600 max-w-xs text-sm leading-relaxed">
                                    is a leading digital business
                                </Typography>

                            </div>
                        </div>

                        {/* 2. SEO Description Paragraph - Full, complete sentences here */}
                        <Typography variant="p-muted" className="text-gray-600 max-w-xs text-sm leading-relaxed">
                            <span className="text-black font-medium"> ecosystem platform</span> dedicated to scaling growth through an integrated <span className="text-black font-medium">SaaS ecosystem platform</span>, cutting-edge <span className="text-black font-medium">AI business tools</span>, and a professional <span className="text-black font-medium">business networking platform</span>.
                        </Typography>

                        {/* 3. Social Icons */}
                        <div className="flex gap-4 text-gray-400">
                            <Link href="#" className="hover:text-black transition-colors">f</Link>
                            <Link href="#" className="hover:text-black transition-colors">t</Link>
                            <Link href="#" className="hover:text-black transition-colors">in</Link>
                            <Link href="#" className="hover:text-black transition-colors">ig</Link>
                        </div>
                    </div>


                    {/* Dynamic Link Columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category} className="flex flex-col gap-3">
                            <Typography variant="label" className="text-black">
                                {category}
                            </Typography>
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-500 text-sm hover:text-black transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>



                {/* Bottom Bar */}
                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>© 2026 LODBE. All rights reserved.</p>

                    <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-start text-gray-500 text-xs">
                        {/* Terms & Conditions */}
                        <Link href="/terms" className="hover:text-black transition-colors">
                            Terms and Conditions
                        </Link>

                        {/* Privacy Policy */}
                        <Link href="/privacy" className="hover:text-black transition-colors">
                            Privacy Policy
                        </Link>

                        {/* Disclaimer */}
                        <Link href="/disclaimer" className="hover:text-black transition-colors">
                            Disclaimer
                        </Link>

                        {/* Refund & Cancellation */}
                        <Link href="/refund" className="hover:text-black transition-colors">
                            Refund & Cancellation Policy
                        </Link>

                        {/* Data Deletion */}
                        <Link href="/data-deletion" className="hover:text-black transition-colors">
                            Data Deletion Policy
                        </Link>

                        {/* Cookie Policy */}
                        <Link href="/cookies" className="hover:text-black transition-colors">
                            Cookie Policy
                        </Link>
                    </div>

                </div>
            </div>
        </footer>
    );
};
