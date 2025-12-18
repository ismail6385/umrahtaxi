import FleetCard from '@/components/FleetCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Fleet | Umrah Taxi - Luxury Vehicles for Pilgrims',
    description: 'Explore our premium fleet of vehicles for Umrah and Hajj transport. From luxury GMC Yukons to spacious Toyota Hiace vans.',
    keywords: ['umrah taxi fleet', 'GMC Yukon Makkah', 'family van madinah', 'luxury transport saudi'],
};

export default function FleetPage() {
    const fleet = [
        {
            name: "GMC Yukon",
            image: "/gmc-yukon.webp",
            passengers: 7,
            luggage: 5,
            features: ["Luxury Interior", "Extra Legroom", "VIP Experience", "Premium Sound System"],
            href: "/fleet/gmc-yukon"
        },
        {
            name: "Toyota Camry",
            image: "/toyota-camry.webp",
            passengers: 4,
            luggage: 2,
            features: ["Comfortable Seating", "AC", "Economic Choice", "City Travel"],
            href: "/fleet/toyota-camry"
        },
        {
            name: "Hyundai Staria",
            image: "/hyundai-staria.webp",
            passengers: 7,
            luggage: 4,
            features: ["Modern Design", "Spacious", "Family Travel", "USB Charging"],
            href: "/fleet/hyundai-staria"
        },
        {
            name: "Toyota Hiace",
            image: "/toyota-hiace.webp",
            passengers: 11,
            luggage: 16,
            features: ["Group Travel", "Spacious Interior", "Umrah Groups", "Reliable"],
            href: "/fleet/toyota-hiace"
        },
        {
            name: "Toyota Coaster",
            image: "/toyota-coaster.webp",
            passengers: 17,
            luggage: 20,
            features: ["Large Groups", "Tour Bus", "Corporate Events", "Long Distance"],
            href: "/fleet/toyota-coaster"
        },
        {
            name: "Hyundai Starex",
            image: "/hyundai-starex.webp",
            passengers: 7,
            luggage: 10,
            features: ["Family Friendly", "Comfortable", "Reliable", "Airport Transfer"],
            href: "/fleet/hyundai-starex"
        }
    ];

    return (
        <div className="bg-neutral-950 min-h-screen pt-32 pb-20 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('/pattern-grid.png')] opacity-[0.03] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20 animate-fade-in-up">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-amber-500/30 bg-white/5 backdrop-blur-md rounded-full mb-6">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>
                        <span className="text-amber-500 text-xs font-bold tracking-[0.2em] uppercase">Premium Transport</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-serif tracking-tight">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-700">Royal Fleet</span>
                    </h1>

                    <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Experience the sacred journey in absolute comfort. Our meticulously maintained collection of luxury vehicles ensures a safe and dignified travel experience across Saudi Arabia.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {fleet.map((vehicle, index) => (
                        <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                            <FleetCard {...vehicle} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
