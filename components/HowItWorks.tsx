import { CalendarCheck, Car, MapPin } from 'lucide-react';

const steps = [
    {
        icon: CalendarCheck,
        title: "1. Book Your Ride",
        description: "Choose your pickup location, destination, and preferred vehicle type. You can book online or via WhatsApp instantly."
    },
    {
        icon: Car,
        title: "2. Get Confirmation",
        description: "Receive instant confirmation with driver details and vehicle information. We track your flight for airport pickups."
    },
    {
        icon: MapPin,
        title: "3. Enjoy the Journey",
        description: "Meet your professional chauffeur at the designated spot and enjoy a comfortable, safe ride to your destination."
    }
];

export default function HowItWorks() {
    return (
        <section className="py-20 bg-black border-y border-zinc-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">Simple Process</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">How It Works</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Booking a luxury taxi in Saudi Arabia has never been easier. Just 3 simple steps to your premium travel experience.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connecting Line (Desktop only) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-zinc-700 to-transparent z-0"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10 text-center">
                            <div className="w-24 h-24 bg-zinc-900 border-4 border-black rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-primary/5 group hover:scale-110 transition-transform duration-300">
                                <step.icon className="w-10 h-10 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                            <p className="text-gray-400 leading-relaxed px-4">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
