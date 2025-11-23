"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Phone, Mail, Car, ChevronDown, Home, Briefcase, Info, Contact } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', href: '/', icon: Home },
        {
            name: 'Services',
            href: '/services',
            icon: Briefcase,
            children: [
                { name: 'Airport Transfers', href: '/services#airport' },
                { name: 'Umrah Taxi', href: '/services#umrah' },
                { name: 'Intercity Travel', href: '/services#intercity' },
                { name: 'Hourly Rental', href: '/services#hourly' },
            ]
        },
        { name: 'Fleet', href: '/fleet', icon: Car },
        { name: 'About', href: '/about', icon: Info },
        { name: 'Contact', href: '/contact', icon: Contact },
    ];

    const isActive = (path: string) => pathname === path;

    return (
        <nav className="bg-black/80 backdrop-blur-md text-white sticky top-0 z-50 border-b border-white/10">
            {/* Top Bar */}
            <div className="bg-black/40 py-2 text-xs md:text-sm hidden md:block border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <div className="flex space-x-6">
                        <a href="mailto:Bookme@taxiserviceksa.com" className="flex items-center hover:text-primary transition-colors">
                            <Mail className="w-4 h-4 mr-2" />
                            Bookme@taxiserviceksa.com
                        </a>
                        <a href="tel:03176243861" className="flex items-center hover:text-primary transition-colors">
                            <Phone className="w-4 h-4 mr-2" />
                            03176243861
                        </a>
                    </div>
                    <div className="text-primary font-medium">
                        Premium Chauffeur Services in KSA
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-white group">
                            <div className="bg-primary p-1.5 rounded-lg group-hover:scale-110 transition-transform">
                                <Car className="w-6 h-6 text-black" />
                            </div>
                            <span>TaxiService<span className="text-primary">KSA</span></span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                {link.children ? (
                                    <button
                                        className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${pathname.startsWith(link.href) ? 'text-primary' : 'text-gray-300 hover:text-white'
                                            }`}
                                    >
                                        <link.icon className="w-4 h-4 mr-2" />
                                        {link.name}
                                        <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform" />
                                    </button>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(link.href) ? 'text-primary' : 'text-gray-300 hover:text-white'
                                            }`}
                                    >
                                        <link.icon className="w-4 h-4 mr-2" />
                                        {link.name}
                                    </Link>
                                )}

                                {/* Dropdown */}
                                {link.children && (
                                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-zinc-900 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left">
                                        <div className="py-1" role="menu">
                                            {link.children.map((child) => (
                                                <Link
                                                    key={child.name}
                                                    href={child.href}
                                                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-zinc-800 hover:text-primary"
                                                    role="menuitem"
                                                >
                                                    {child.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                        <Link href="/booking">
                            <Button className="bg-primary text-black hover:bg-yellow-400 font-bold transition-all hover:scale-105 active:scale-95">
                                Book Now
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-zinc-900/95 backdrop-blur-md border-t border-white/10">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <div key={link.name}>
                                {link.children ? (
                                    <>
                                        <button
                                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                                            className={`w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium ${pathname.startsWith(link.href) ? 'text-primary' : 'text-gray-300 hover:text-white'
                                                }`}
                                        >
                                            <span className="flex items-center">
                                                <link.icon className="w-4 h-4 mr-2" />
                                                {link.name}
                                            </span>
                                            <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                                        </button>
                                        {isServicesOpen && (
                                            <div className="pl-4 space-y-1 bg-black/20 rounded-md mb-1">
                                                {link.children.map((child) => (
                                                    <Link
                                                        key={child.name}
                                                        href={child.href}
                                                        className="block px-3 py-2 rounded-md text-sm text-gray-400 hover:text-primary"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        {child.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${isActive(link.href) ? 'text-primary' : 'text-gray-300 hover:text-white'
                                            }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <link.icon className="w-4 h-4 mr-2" />
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <Link href="/booking" onClick={() => setIsOpen(false)}>
                            <Button className="w-full mt-4 bg-primary text-black hover:bg-yellow-400 font-bold">
                                Book Now
                            </Button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
