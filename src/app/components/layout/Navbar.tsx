'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { name: 'Product', href: '/product' },
    // { name: 'Resources', href: '#' },
    { name: 'Company', href: '/investors' },
    { name: 'Careers', href: '/careers' },
];
export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
            {/* Logo Section */}
            <div className="flex items-center gap-2">
                <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <Image
                        src="/images/lodbe.webp"
                        alt="LODBE - Digital Business Ecosystem Platform"
                        width={50}
                        height={50}
                        priority
                        className="object-contain"
                    />
                </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-gray-400 hover:text-yellow-400 transition-colors text-sm font-medium"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* Desktop Button */}
            <div className="hidden md:block">
                <Button variant="outline" size="sm">
                    Get Started
                </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-gray-600 hover:text-yellow-400 transition-colors"
                    aria-label="Toggle Menu"
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <div
                id="mobile-menu"
                className={`
                    absolute top-full left-0 w-full bg-white border-b border-gray-100 z-50 md:hidden
                    overflow-hidden transition-all duration-300 ease-in-out
                    ${isOpen ? 'max-h-96 opacity-100 pointer-events-auto' : 'max-h-0 opacity-0 pointer-events-none'}
                `}
            >
                <div className="flex flex-col p-6 gap-1">
                    {navLinks.map((link, i) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            style={{ transitionDelay: isOpen ? `${i * 60}ms` : '0ms' }}
                            className={`
                                text-gray-600 hover:text-gray-400
                                transition-all duration-200 text-lg font-medium
                                border-b border-gray-100 py-3 last:border-none
                                ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-3 opacity-0'}
                            `}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-3">
                        <Button variant="outline" size="sm" className="w-full py-6 text-base" onClick={() => setIsOpen(false)}>
                            Get Started
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};