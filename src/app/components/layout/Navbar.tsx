import Link from 'next/link';
import { Button } from '../ui/Button';
import Image from 'next/image';

const navLinks = [
    { name: 'Product', href: '#' },
    { name: 'Resources', href: '#' },
    { name: 'Company', href: '/investors' },
];

export const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
            <div className="flex items-center gap-2">
                <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <Image
                        src="/images/lodbe.webp"
                        alt="LODBE Logo"
                        width={50} // Adjust width based on your image aspect ratio
                        height={50}  // Adjust height to fit your navbar
                        priority     // Ensures the logo loads immediately (crucial for LCP)
                        className="object-contain"
                    />
                </Link>
            </div>

            <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                    <Link key={link.name} href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                        {link.name}
                    </Link>
                ))}
            </div>

            <Button variant="outline" size="sm" className="hidden md:block">
                Get Started
            </Button>
        </nav>
    );
};
