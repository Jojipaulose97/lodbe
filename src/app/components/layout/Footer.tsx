import Link from 'next/link';
import { Typography } from '../ui/Typography';
import Image from 'next/image';

const footerLinks = {
    Product: [
        { name: 'Features', href: '#' },
        { name: 'Pricing', href: '#' },
        { name: 'Integrations', href: '#' },
        { name: 'Changelog', href: '#' },
    ],
    Resources: [
        { name: 'Documentation', href: '#' },
        { name: 'Tutorials', href: '#' },
        { name: 'Blog', href: '/blog' }, // Connected to Blog
        { name: 'Support', href: '#' },
    ],
    Company: [
        { name: 'About', href: '/about' },
        { name: 'Investors', href: '/investors' },
        { name: 'Contact', href: '/contact' },
        { name: 'Careers', href: '#' },
    ],
};

export const Footer = () => {
    return (
        <footer className="bg-white text-black pt-16 pb-8 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">

                    {/* Brand Section */}
                    <div className="col-span-2 space-y-4">
                        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                            <Image
                                src="/images/lodbe.webp"
                                alt="LODBE Logo"
                                width={50} // Slightly larger for better visibility in footer
                                height={50} 
                                priority 
                                className="object-contain"
                            />
                        </Link>

                        <Typography variant="p-muted" className="text-gray-600 max-w-xs text-sm">
                            LODBE empowers teams to transform raw data into clear, compelling visuals — making insights easier to share, understand, and act on.
                        </Typography>

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

                    <div className="flex gap-6">
                        {/* UPDATE: Connected to /privacy */}
                        <Link href="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link>

                        {/* UPDATE: Connected to /terms */}
                        <Link href="/terms" className="hover:text-black transition-colors">Terms of Service</Link>

                        {/* UPDATE: Connected to /cookies */}
                        <Link href="/cookies" className="hover:text-black transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
