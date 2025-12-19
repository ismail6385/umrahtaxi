import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';

export default function BookingPage() {
    return (
        <div className="bg-gray-50 min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16 md:pb-24">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 md:gap-12 items-start">
                    {/* Booking Form Column */}
                    <div className="lg:col-span-7">
                        <div className="mb-6 sm:mb-8 lg:mb-12">
                            <span className="bg-amber-100 text-amber-800 font-bold tracking-wider uppercase text-xs px-2 sm:px-3 py-1 rounded-full inline-block mb-2 sm:mb-3">Secure Your Ride</span>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 font-serif leading-tight">Begin Your Journey</h1>
                            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                                Fill out the form below to reserve your luxury vehicle. We ensure a seamless experience from arrival to departure.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                            <div className="h-1.5 sm:h-2 bg-gradient-to-r from-amber-200 to-amber-500"></div>
                            <div className="p-4 sm:p-5 md:p-6 lg:p-8">
                                <Suspense fallback={<div className="text-center py-8 sm:py-12"><div className="inline-block animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-b-2 border-primary"></div><p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600">Loading booking form...</p></div>}>
                                    <BookingForm />
                                </Suspense>
                            </div>
                        </div>
                    </div>

                    {/* Trust Visuals Column */}
                    <div className="hidden lg:block lg:col-span-5 space-y-8 sticky top-24">
                        {/* Trust Card 1 */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group">
                            <div className="relative h-64 w-full">
                                <img
                                    src="/driver-nameboard.webp"
                                    alt="Professional Driver Waiting"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h3 className="font-bold text-lg">Meet & Greet Service</h3>
                                    <p className="text-sm opacity-90">We wait for you, not the other way around.</p>
                                </div>
                            </div>
                        </div>

                        {/* Trust Card 2 */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group">
                            <div className="relative h-64 w-full">
                                <img
                                    src="/family-arrival.webp"
                                    alt="Happy Family Arrival"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h3 className="font-bold text-lg">Family Friendly</h3>
                                    <p className="text-sm opacity-90">Spacious vehicles for your loved ones and luggage.</p>
                                </div>
                            </div>
                        </div>

                        {/* Trust Bullets */}
                        <div className="bg-neutral-900 rounded-2xl p-8 text-white">
                            <h3 className="font-serif text-xl mb-4 text-amber-500">Why Book With Us?</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-amber-500">1</div>
                                    <span className="text-sm text-gray-300">No hidden fees, fixed pricing</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-amber-500">2</div>
                                    <span className="text-sm text-gray-300">Flight tracking for delayed arrivals</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-amber-500">3</div>
                                    <span className="text-sm text-gray-300">24/7 Customer Support available</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
