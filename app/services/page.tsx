import ServiceCard from '@/components/ServiceCard';
import { Plane, MapPin, Building2, Briefcase, Users, Clock } from 'lucide-react';

export default function ServicesPage() {
    const services = [
        {
            title: "Airport Transfer",
            description: "Seamless transfers to and from all major airports in Saudi Arabia including Jeddah (KAIA), Madinah, and Riyadh. We track your flight to ensure timely pickups.",
            icon: Plane
        },
        {
            title: "Umrah Taxi Service",
            description: "Specialized transportation for pilgrims visiting Makkah and Madinah. Comfortable and spiritual journeys between Holy cities.",
            icon: MapPin
        },
        {
            title: "Intercity Travel",
            description: "Travel between cities in comfort. Whether it's Jeddah to Makkah, or Madinah to Riyadh, enjoy a relaxing long-distance ride.",
            icon: MapPin
        },
        {
            title: "Corporate Chauffeur",
            description: "Professional transport for business meetings and corporate events. Impress your clients with our executive fleet.",
            icon: Briefcase
        },
        {
            title: "City Tours",
            description: "Discover the heritage and modern marvels of Saudi cities with our experienced local drivers who know the best routes and sights.",
            icon: Building2
        },
        {
            title: "Family Transport",
            description: "Spacious vehicles like GMC Yukon and H1 Vans perfect for family trips, ensuring safety and comfort for all ages.",
            icon: Users
        },
        {
            title: "Hourly Rental",
            description: "Need a car for the whole day? Rent our chauffeur-driven vehicles by the hour for maximum flexibility.",
            icon: Clock
        }
    ];

    return (
        <div className="bg-black min-h-screen pt-20 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        We provide a comprehensive range of luxury transport solutions designed to meet the diverse needs of our clients in Saudi Arabia.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </div>
    );
}
