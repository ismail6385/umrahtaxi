"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, Car, ChevronDown, MapPin, Camera, HelpCircle, Info, Contact, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    // Track scroll for background opacity
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', href: '/' },
        {
            name: 'Fleet',
            href: '/fleet',
            children: [
                { name: 'GMC Yukon', href: '/fleet/gmc-yukon' },
                { name: 'Toyota Camry', href: '/fleet/toyota-camry' },
                { name: 'Hyundai Staria', href: '/fleet/hyundai-staria' },
                { name: 'Toyota Hiace', href: '/fleet/toyota-hiace' },
                { name: 'Toyota Coaster', href: '/fleet/toyota-coaster' },
                { name: 'Hyundai Starex', href: '/fleet/hyundai-starex' },
            ]
        },
        {
            name: 'Locations',
            href: '/locations',
            children: [
                { name: 'Makkah', href: '/locations/makkah' },
                { name: 'Madinah', href: '/locations/madinah' },
                { name: 'Jeddah', href: '/locations/jeddah' },
                { name: 'Taif', href: '/locations/taif' },
                { name: 'Khayber Fort', href: '/locations/khayber-fort' },
                { name: 'AlUla', href: '/locations/alula' },
            ]
        },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    const toggleDropdown = (name: string) => {
        if (openDropdown === name) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(name);
        }
    };

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b",
                scrolled
                    ? "bg-black/90 backdrop-blur-md border-white/10 py-2"
                    : "bg-black/50 backdrop-blur-sm border-transparent py-4"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">

                    {/* Brand Logo - Distinctive Royal Look */}
                    <Link href="/" className="flex items-center group relative z-50">
                        <div className="bg-amber-600 p-1.5 mr-3 rotate-45 group-hover:rotate-0 transition-transform duration-500">
                            <Car className="w-5 h-5 text-black -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-serif font-bold text-white tracking-wide leading-none">
                                UMRAH<span className="text-amber-500">TAXI</span>
                            </span>
                            <span className="text-[0.6rem] text-neutral-400 uppercase tracking-[0.3em] font-light">
                                Royal Transport
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                {link.children ? (
                                    <button className="flex items-center px-4 py-2 text-sm font-medium text-neutral-300 hover:text-white transition-colors uppercase tracking-widest group">
                                        {link.name}
                                        <ChevronDown className="ml-1 w-3 h-3 text-amber-500 group-hover:rotate-180 transition-transform duration-300" />
                                    </button>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "block px-4 py-2 text-sm font-medium transition-colors uppercase tracking-widest relative overflow-hidden",
                                            pathname === link.href ? "text-amber-500" : "text-neutral-300 hover:text-white"
                                        )}
                                    >
                                        <span className="relative z-10">{link.name}</span>
                                        {pathname === link.href && (
                                            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-amber-500 shadow-[0_0_10px_#d97706]" />
                                        )}
                                    </Link>
                                )}

                                {/* Desktop Dropdown - The "Black Glass" Look */}
                                {link.children && (
                                    <div className="absolute left-0 mt-0 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pt-4">
                                        <div className="bg-black border border-white/15 p-1 shadow-2xl backdrop-blur-xl">
                                            {link.children.map((child) => (
                                                <Link
                                                    key={child.name}
                                                    href={child.href}
                                                    className="block px-4 py-3 text-xs text-neutral-400 hover:text-white hover:bg-white/5 transition-all uppercase tracking-wider border-l-2 border-transparent hover:border-amber-500"
                                                >
                                                    {child.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link href="/booking">
                            <Button className="bg-amber-600 hover:bg-amber-700 text-white font-serif tracking-widest text-xs uppercase px-8 py-6 rounded-none border border-amber-500/50 shadow-[0_0_15px_rgba(217,119,6,0.3)] transition-all hover:scale-105">
                                Book Now
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button - Minimalist */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-amber-500 transition-colors p-2"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay - Full Screen Luxury */}
            <div className={cn(
                "fixed inset-0 bg-black/95 backdrop-blur-xl z-40 md:hidden transition-all duration-500 flex flex-col justify-center items-center space-y-8",
                isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
            )}>
                {/* Background decoration */}
                <div className="absolute inset-0 bg-[url('/pattern-grid.png')] opacity-5 pointer-events-none"></div>

                <div className="w-full max-w-sm px-8 space-y-6 relative z-10 text-center">
                    {navLinks.map((link) => (
                        <div key={link.name} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                            {link.children ? (
                                <div className="space-y-4">
                                    <button
                                        onClick={() => toggleDropdown(link.name)}
                                        className="text-2xl font-serif text-white hover:text-amber-500 transition-colors flex items-center justify-center w-full gap-2"
                                    >
                                        {link.name}
                                        <ChevronDown className={cn("w-5 h-5 text-amber-500 transition-transform", openDropdown === link.name ? "rotate-180" : "")} />
                                    </button>

                                    <div className={cn(
                                        "space-y-3 overflow-hidden transition-all duration-300",
                                        openDropdown === link.name ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                    )}>
                                        {link.children.map((child) => (
                                            <Link
                                                key={child.name}
                                                href={child.href}
                                                onClick={() => setIsOpen(false)}
                                                className="block text-neutral-400 hover:text-amber-500 text-sm tracking-widest uppercase"
                                            >
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "block text-2xl font-serif transition-colors",
                                        pathname === link.href ? "text-amber-500" : "text-white hover:text-amber-500"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}

                    <div className="pt-8">
                        <Link href="/booking" onClick={() => setIsOpen(false)}>
                            <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-serif tracking-widest text-sm uppercase py-6 rounded-none shadow-[0_0_20px_rgba(217,119,6,0.4)]">
                                Book Your Ride
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
