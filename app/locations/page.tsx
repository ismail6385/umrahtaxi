
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Service Locations | Taxi Service KSA',
    description: 'We provide premium taxi and chauffeur services in Jeddah, Makkah, Madinah, AlUla, Taif, and more.',
};

const locations = [
    {
        name: 'Jeddah',
        description: 'Airport transfers and city tours in the Bride of the Red Sea.',
        image: '/jeddah-corniche-sunset.webp',
        href: '/locations/jeddah'
    },
    {
        name: 'Makkah',
        description: 'Reliable transport for Umrah pilgrims and Ziyarat.',
        image: '/makkah-kaaba-night.webp',
        href: '/locations/makkah'
    },
    {
        name: 'Madinah',
        description: 'Comfortable journeys to the Prophet\'s City.',
        image: '/madinah-prophets-mosque.webp',
        href: '/locations/madinah'
    },
    {
        name: 'AlUla',
        description: 'Explore the ancient wonders of Hegra and Dadan.',
        image: '/alula-hegra-tombs.webp',
        href: '/locations/alula'
    },
    {
        name: 'Taif',
        description: 'Scenic drives to the City of Roses.',
        image: '/taif-mountains-view.webp',
        href: '/locations/taif'
    },
    {
        name: 'Khayber Fort',
        description: 'Historical tours to the ancient oases of Khaybar.',
        image: '/alula-hegra-tombs.webp', // Using AlUla image as fallback/relevant
        href: '/locations/khayber-fort'
    }
];

export default function LocationsPage() {
    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="bg-gray-100 text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">Destinations</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Service Locations</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We serve all major cities and historical sites in Saudi Arabia with our premium fleet.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {locations.map((loc, index) => (
                        <Link key={index} href={loc.href} className="group block h-full">
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 flex flex-col">
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={loc.image}
                                        alt={loc.name}
                                        fill
                                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <div className="flex items-center gap-2 mb-1">
                                            <MapPin className="w-5 h-5 text-primary" />
                                            <h3 className="text-2xl font-bold">{loc.name}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <p className="text-gray-600 mb-6 flex-1">{loc.description}</p>
                                    <div className="flex items-center text-gray-900 font-bold group-hover:translate-x-2 transition-transform">
                                        View Services <ArrowRight className="ml-2 w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
