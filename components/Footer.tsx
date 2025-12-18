import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin, Car, Youtube, Share2 } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-neutral-900 text-white pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
            {/* Abstract Background Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
                    {/* Brand & Social */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="bg-primary p-2 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(200,255,0,0.3)]">
                                <Car className="w-6 h-6 text-neutral-900" />
                            </div>
                            <span className="text-2xl font-bold text-white tracking-tight">TaxiService<span className="text-primary">KSA</span></span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Premium chauffeur services in Saudi Arabia. Experience luxury, comfort, and reliability for all your travel needs.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <a 
                                href="https://www.facebook.com/people/Taxi-Service-KSA/61573850597962/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-primary text-gray-400 hover:text-neutral-900 transition-all duration-300 hover:scale-110 border border-white/5 hover:border-primary"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a 
                                href="https://www.linkedin.com/company/taxi-service-ksa/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-primary text-gray-400 hover:text-neutral-900 transition-all duration-300 hover:scale-110 border border-white/5 hover:border-primary"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a 
                                href="https://www.youtube.com/channel/UCeP44oxBUKUG5X-UhYmPMNw" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-primary text-gray-400 hover:text-neutral-900 transition-all duration-300 hover:scale-110 border border-white/5 hover:border-primary"
                                aria-label="YouTube"
                            >
                                <Youtube className="w-5 h-5" />
                            </a>
                            <a 
                                href="https://www.pinterest.com/taxiserviceksa/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-primary text-gray-400 hover:text-neutral-900 transition-all duration-300 hover:scale-110 border border-white/5 hover:border-primary"
                                aria-label="Pinterest"
                            >
                                <Share2 className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                            Quick Links
                            <span className="h-1 w-8 bg-primary rounded-full"></span>
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-primary transition-colors flex items-center group text-sm">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-2 group-hover:h-2"></span>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/fleet" className="text-gray-400 hover:text-primary transition-colors flex items-center group text-sm">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-2 group-hover:h-2"></span>
                                    Our Fleet
                                </Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="text-gray-400 hover:text-primary transition-colors flex items-center group text-sm">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-2 group-hover:h-2"></span>
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="text-gray-400 hover:text-primary transition-colors flex items-center group text-sm">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-2 group-hover:h-2"></span>
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors flex items-center group text-sm">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-2 group-hover:h-2"></span>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Locations */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                            Locations
                            <span className="h-1 w-8 bg-primary rounded-full"></span>
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/locations/jeddah" className="text-gray-400 hover:text-primary transition-colors flex items-center group text-sm">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-2 group-hover:h-2"></span>
                                    Jeddah
                                </Link>
                            </li>
                            <li>
                                <Link href="/locations/makkah" className="text-gray-400 hover:text-primary transition-colors flex items-center group text-sm">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-2 group-hover:h-2"></span>
                                    Makkah
                                </Link>
                            </li>
                            <li>
                                <Link href="/locations/madinah" className="text-gray-400 hover:text-primary transition-colors flex items-center group text-sm">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-2 group-hover:h-2"></span>
                                    Madinah
                                </Link>
                            </li>
                            <li>
                                <Link href="/locations/alula" className="text-gray-400 hover:text-primary transition-colors flex items-center group text-sm">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-2 group-hover:h-2"></span>
                                    AlUla
                                </Link>
                            </li>
                            <li>
                                <Link href="/locations/taif" className="text-gray-400 hover:text-primary transition-colors flex items-center group text-sm">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-2 group-hover:h-2"></span>
                                    Taif
                                </Link>
                            </li>
                            <li>
                                <Link href="/locations/khayber-fort" className="text-gray-400 hover:text-primary transition-colors flex items-center group text-sm">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-2 group-hover:h-2"></span>
                                    Khayber Fort
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Fleet */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                            Our Fleet
                            <span className="h-1 w-8 bg-primary rounded-full"></span>
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/fleet/gmc-yukon" className="text-gray-400 hover:text-primary transition-colors flex items-center group text-sm">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-2 group-hover:h-2"></span>
                                    GMC Yukon
                                </Link>
                            </li>
                            <li>
                                <Link href="/fleet/toyota-camry" className="text-gray-400 hover:text-primary transition-colors flex items-center group text-sm">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-2 group-hover:h-2"></span>
                                    Toyota Camry
                                </Link>
                            </li>
                            <li>
                                <Link href="/fleet/hyundai-staria" className="text-gray-400 hover:text-primary transition-colors flex items-center group text-sm">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-2 group-hover:h-2"></span>
                                    Hyundai Staria
                                </Link>
                            </li>
                            <li>
                                <Link href="/fleet/toyota-hiace" className="text-gray-400 hover:text-primary transition-colors flex items-center group text-sm">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-2 group-hover:h-2"></span>
                                    Toyota Hiace
                                </Link>
                            </li>
                            <li>
                                <Link href="/fleet/toyota-coaster" className="text-gray-400 hover:text-primary transition-colors flex items-center group text-sm">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-2 group-hover:h-2"></span>
                                    Toyota Coaster
                                </Link>
                            </li>
                            <li>
                                <Link href="/fleet/hyundai-starex" className="text-gray-400 hover:text-primary transition-colors flex items-center group text-sm">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-2 group-hover:h-2"></span>
                                    Hyundai Starex
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        &copy; {new Date().getFullYear()} TaxiServiceKSA. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="/terms-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
