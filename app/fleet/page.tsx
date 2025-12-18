import FleetCard from '@/components/FleetCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Fleet - Premium Luxury Vehicles | Taxi Service KSA',
    description: 'Explore our diverse fleet of luxury vehicles including GMC Yukon, Toyota Camry, Hyundai Staria, Toyota Hiace, and Toyota Coaster. Perfect for airport transfers, Umrah travel, and group transportation across Saudi Arabia.',
    keywords: ['luxury vehicles KSA', 'GMC Yukon rental', 'Toyota Hiace Saudi Arabia', 'premium fleet', 'VIP transport vehicles'],
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
        <div className="bg-gray-50 min-h-screen pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="bg-primary text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block">Our Fleet</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">Premium Luxury Vehicles</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Experience the journey in style with our diverse collection of luxury vehicles, meticulously maintained for your comfort and safety across Saudi Arabia.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {fleet.map((vehicle, index) => (
                        <FleetCard key={index} {...vehicle} />
                    ))}
                </div>
            </div>
        </div>
    );
}
