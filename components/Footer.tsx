import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Car, Send, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {
    return (
        <footer className="bg-zinc-950 text-white pt-16 pb-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand & Social */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-white group">
                            <div className="bg-primary p-1.5 rounded-lg group-hover:scale-110 transition-transform">
                                <Car className="w-6 h-6 text-black" />
                            </div>
                            <span>TaxiService<span className="text-primary">KSA</span></span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed">
                            Premium chauffeur services in Saudi Arabia. Experience luxury, comfort, and reliability for all your travel needs.
                        </p>
                        <div className="flex space-x-4 flex-wrap gap-y-2">
                            <a href="#" className="bg-zinc-900 p-2 rounded-full text-gray-400 hover:text-primary hover:bg-zinc-800 transition-all hover:scale-110">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-zinc-900 p-2 rounded-full text-gray-400 hover:text-primary hover:bg-zinc-800 transition-all hover:scale-110">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-zinc-900 p-2 rounded-full text-gray-400 hover:text-primary hover:bg-zinc-800 transition-all hover:scale-110">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-zinc-900 p-2 rounded-full text-gray-400 hover:text-primary hover:bg-zinc-800 transition-all hover:scale-110">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-zinc-900 p-2 rounded-full text-gray-400 hover:text-primary hover:bg-zinc-800 transition-all hover:scale-110">
                                <Youtube className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-zinc-900 p-2 rounded-full text-gray-400 hover:text-primary hover:bg-zinc-800 transition-all hover:scale-110">
                                {/* TikTok SVG */}
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                </svg>
                            </a>
                            <a href="#" className="bg-zinc-900 p-2 rounded-full text-gray-400 hover:text-primary hover:bg-zinc-800 transition-all hover:scale-110">
                                {/* Pinterest SVG */}
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.399.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.173 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.62 0 12.017 0z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6 relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-primary transition-colors flex items-center group">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-gray-400 hover:text-primary transition-colors flex items-center group">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Our Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/fleet" className="text-gray-400 hover:text-primary transition-colors flex items-center group">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Our Fleet
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors flex items-center group">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6 relative inline-block">
                            Our Services
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/services#airport" className="text-gray-400 hover:text-primary transition-colors flex items-center group">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Airport Transfer
                                </Link>
                            </li>
                            <li>
                                <Link href="/services#umrah" className="text-gray-400 hover:text-primary transition-colors flex items-center group">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Umrah Taxi
                                </Link>
                            </li>
                            <li>
                                <Link href="/services#intercity" className="text-gray-400 hover:text-primary transition-colors flex items-center group">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Intercity Travel
                                </Link>
                            </li>
                            <li>
                                <Link href="/services#hourly" className="text-gray-400 hover:text-primary transition-colors flex items-center group">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Hourly Rental
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter & Contact */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6 relative inline-block">
                            Newsletter
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
                        </h4>
                        <p className="text-gray-400 mb-4 text-sm">
                            Subscribe to get the latest updates and exclusive offers.
                        </p>
                        <div className="flex gap-2 mb-8">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-zinc-900 border-zinc-800 focus:border-primary text-white"
                            />
                            <Button size="icon" className="bg-primary text-black hover:bg-yellow-400 shrink-0">
                                <Send className="w-4 h-4" />
                            </Button>
                        </div>

                        <div className="space-y-3">
                            <a href="tel:03176243861" className="flex items-center text-gray-400 hover:text-primary transition-colors group">
                                <div className="bg-zinc-900 p-2 rounded-lg mr-3 group-hover:bg-primary group-hover:text-black transition-colors">
                                    <Phone className="w-4 h-4" />
                                </div>
                                03176243861
                            </a>
                            <a href="mailto:Bookme@taxiserviceksa.com" className="flex items-center text-gray-400 hover:text-primary transition-colors group">
                                <div className="bg-zinc-900 p-2 rounded-lg mr-3 group-hover:bg-primary group-hover:text-black transition-colors">
                                    <Mail className="w-4 h-4" />
                                </div>
                                Bookme@taxiserviceksa.com
                            </a>
                            <div className="flex items-center text-gray-400 group">
                                <div className="bg-zinc-900 p-2 rounded-lg mr-3 group-hover:bg-primary group-hover:text-black transition-colors">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                Jeddah, Saudi Arabia
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} TaxiServiceKSA. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
