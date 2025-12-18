import { CheckCircle2 } from 'lucide-react';

export default function Welcome() {
    return (
        <section className="py-20 bg-gray-50 text-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Welcome to <span className="text-primary">Umrah Taxi</span>
                        </h2>
                        <h3 className="text-xl text-gray-700 font-semibold mb-6">
                            Your Trusted Partner for Hajj & Umrah Transport
                        </h3>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            We specialize in providing comfortable and reliable transportation for pilgrims visiting the Holy Cities.
                            From Jeddah Airport transfers to intercity travel between Makkah and Madinah, we ensure your journey is spiritually focused and stress-free.
                        </p>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            Our fleet includes luxury GMC Yukons, spacious Toyota Hiace vans for families, and comfortable sedans.
                            Our professional drivers are experienced in serving pilgrims and know the best routes to the Haram and Ziyarat sites.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "24/7 Pilgrimage Support",
                                "Fixed Rates for Umrah",
                                "Professional Muslim Drivers",
                                "Luxury & Family Vehicles",
                                "Makkah & Madinah Ziyarat",
                                "Seamless Airport Transfers"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    <span className="text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative h-[500px] rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                        <img
                            src="/makkah-kaaba-night.webp" // Updated image to be relevant
                            alt="Umrah Taxi Service Makkah"
                            className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="bg-white/95 backdrop-blur-sm p-4 rounded-lg border border-gray-200 shadow-xl">
                                <p className="text-gray-900 font-semibold text-lg">&quot;Excellent service for our family Umrah trip. Highly recommended!&quot;</p>
                                <p className="text-primary text-sm mt-1">⭐⭐⭐⭐⭐</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
