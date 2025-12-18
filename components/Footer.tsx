import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin, Car, Youtube, Share2, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('/pattern-grid.png')] opacity-[0.03] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="bg-amber-600 p-1.5 rotate-45 group-hover:rotate-0 transition-transform duration-500">
                                <Car className="w-5 h-5 text-black -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-serif font-bold text-white tracking-wide leading-none">
                                    UMRAH<span className="text-amber-500">TAXI</span>
                                </span>
                                <span className="text-[0.6rem] text-neutral-500 uppercase tracking-[0.3em] font-light">
                                    Royal Transport
                                </span>
                            </div>
                        </Link>
                        <p className="text-neutral-400 text-sm leading-relaxed font-light">
                            Experience the sacred journey with dignity and comfort. Premier transportation services for Hajj and Umrah pilgrims across Saudi Arabia.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                                <Link
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-none border border-white/10 flex items-center justify-center text-neutral-400 hover:text-black hover:bg-amber-500 hover:border-amber-500 transition-all duration-300"
                                >
                                    <Icon className="w-4 h-4" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-serif font-bold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {['About Us', 'Our Fleet', 'Imprint', 'FAQ', 'Contact Us'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={item === 'Imprint' ? '/imprint' : `/${item.toLowerCase().replace(' ', '-')}`}
                                        className="text-neutral-400 hover:text-amber-500 text-sm tracking-wide transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Service Areas */}
                    <div>
                        <h4 className="text-lg font-serif font-bold text-white mb-6">Service Areas</h4>
                        <ul className="space-y-3">
                            {['Makkah', 'Madinah', 'Jeddah Airport', 'Taif', 'AlUla', 'Ziyarat Tours'].map((loc) => (
                                <li key={loc}>
                                    <Link
                                        href={`/locations/${loc.toLowerCase().replace(' ', '-')}`}
                                        className="text-neutral-400 hover:text-amber-500 text-sm tracking-wide transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {loc}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Our Fleet */}
                    <div>
                        <h4 className="text-lg font-serif font-bold text-white mb-6">Our Fleet</h4>
                        <ul className="space-y-3">
                            {['GMC Yukon', 'Toyota Camry', 'Hyundai Staria', 'Toyota Hiace', 'Toyota Coaster', 'Hyundai Starex'].map((vehicle) => (
                                <li key={vehicle}>
                                    <Link
                                        href={`/fleet/${vehicle.toLowerCase().replace(' ', '-')}`}
                                        className="text-neutral-400 hover:text-amber-500 text-sm tracking-wide transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {vehicle}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>


                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-neutral-500 text-xs tracking-widest uppercase">
                        &copy; {new Date().getFullYear()} Umrah Taxi. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-xs tracking-widest uppercase text-neutral-500">
                        <Link href="/privacy-policy" className="hover:text-amber-500 transition-colors">Privacy Policy</Link>
                        <Link href="/terms-conditions" className="hover:text-amber-500 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
