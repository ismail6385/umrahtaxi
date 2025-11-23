import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import BookingForm from './BookingForm';

export default function Hero() {
    return (
        <div className="relative bg-zinc-900 text-white overflow-hidden min-h-[85vh] sm:min-h-[90vh] flex items-center">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Text Content */}
                    <div className="lg:col-span-7">
                        <div className="flex flex-wrap items-center gap-2 mb-4 sm:mb-6">
                            <div className="flex text-primary">
                                <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-primary" />
                                <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-primary" />
                                <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-primary" />
                                <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-primary" />
                                <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-primary" />
                            </div>
                            <span className="text-gray-300 text-xs sm:text-sm font-medium">#1 Choice for Luxury Travel in KSA</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6 leading-tight">
                            <span className="text-white">Experience</span> <br />
                            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-yellow-200">Royal Comfort</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-2xl">
                            Premium chauffeur services for Airport Transfers, Umrah Pilgrimage, and Intercity Travel.
                            Reliable, safe, and luxurious transportation across Saudi Arabia.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-0">
                            <Link href="/booking" className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    className="w-full sm:w-auto bg-primary text-black hover:bg-yellow-400 font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95"
                                >
                                    Book Your Ride
                                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                                </Button>
                            </Link>
                            <a href="https://wa.me/03176243861" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    className="w-full sm:w-auto bg-[#25D366] text-white hover:bg-[#128C7E] font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-lg transition-all hover:scale-105 active:scale-95"
                                >
                                    WhatsApp Us
                                </Button>
                            </a>
                        </div>
                        <div className="mt-8 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-8 border-t border-white/10 pt-6 sm:pt-8">
                            <div className="text-center sm:text-left">
                                <p className="text-2xl sm:text-3xl font-bold text-white">500+</p>
                                <p className="text-gray-400 text-xs sm:text-sm">Happy Clients</p>
                            </div>
                            <div className="text-center sm:text-left">
                                <p className="text-2xl sm:text-3xl font-bold text-white">24/7</p>
                                <p className="text-gray-400 text-xs sm:text-sm">Support</p>
                            </div>
                            <div className="text-center sm:text-left">
                                <p className="text-2xl sm:text-3xl font-bold text-white">100%</p>
                                <p className="text-gray-400 text-xs sm:text-sm">Satisfaction</p>
                            </div>
                        </div>
                    </div>

                    {/* Booking Form */}
                    <div className="lg:col-span-5 w-full mt-8 lg:mt-0">
                        <BookingForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
