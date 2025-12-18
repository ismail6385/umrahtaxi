
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, ArrowRight, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Service Locations | Umrah Taxi - Royal Coverage',
    description: 'We provide premium Umrah taxi and Ziyarat services in Makkah, Madinah, Jeddah, and other holy sites with VIP comfort.',
};

const locations = [
    {
        name: 'Jeddah',
        description: 'Premium Airport transfers and coastal city tours in the Gateway to the Two Holy Mosques.',
        image: '/jeddah-corniche-sunset.webp',
        href: '/locations/jeddah'
    },
    {
        name: 'Makkah',
        description: 'Dignified transport for Umrah pilgrims and Ziyarat to historical sites in the Holy City.',
        image: '/makkah-clock-tower.webp',
        href: '/locations/makkah'
    },
    {
        name: 'Madinah',
        description: 'Serene and comfortable journeys to the Prophet\'s Mosque and sacred landmarks.',
        image: '/madinah-prophets-mosque.webp',
        href: '/locations/madinah'
    },
    {
        name: 'AlUla',
        description: 'Luxury expeditions to the ancient wonders of Hegra, offering a journey through time.',
        image: '/alula-hegra-tombs.webp',
        href: '/locations/alula'
    },
    {
        name: 'Taif',
        description: 'Scenic drives through the mountains to the City of Roses for a refreshing retreat.',
        image: '/taif-mountains-view.webp',
        href: '/locations/taif'
    },
    {
        name: 'Khayber',
        description: 'Historical tours to the ancient oases and forts of Khaybar, rich in Islamic history.',
        image: '/alula-hegra-tombs.webp', // Placeholder
        href: '/locations/khayber-fort'
    }
];

export default function LocationsPage() {
    return (
        <div className="bg-neutral-950 min-h-screen pt-32 pb-20 relative text-neutral-200 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-[url('/pattern-grid.png')] opacity-[0.03] pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Hero Section */}
                <div className="text-center mb-20 animate-fade-in-up">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-amber-500/30 bg-white/5 backdrop-blur-md rounded-full mb-6">
                        <MapPin className="w-3 h-3 text-amber-500" />
                        <span className="text-amber-500 text-xs font-bold tracking-[0.2em] uppercase">Kingdom Wide</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-serif">
                        Our Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">Locations</span>
                    </h1>

                    <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
                        From the bustling ports of Jeddah to the sacred silence of Madinah, our premium fleet covers every key destination in your spiritual journey.
                    </p>
                </div>

                {/* Locations Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {locations.map((loc, index) => (
                        <Link key={index} href={loc.href} className="group block h-full animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                            <div className="bg-neutral-900 rounded-none overflow-hidden border border-white/5 hover:border-amber-500/50 transition-all duration-500 h-full flex flex-col relative group-hover:-translate-y-2">

                                {/* Image Container */}
                                <div className="relative h-72 overflow-hidden">
                                    <Image
                                        src={loc.image}
                                        alt={loc.name}
                                        fill
                                        className="object-cover transform group-hover:scale-110 transition-transform duration-1000 grayscale-[30%] group-hover:grayscale-0"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent opacity-90"></div>

                                    {/* Location Name on Image */}
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <h3 className="text-3xl font-bold text-white font-serif mb-1 group-hover:text-amber-500 transition-colors">{loc.name}</h3>
                                        <div className="h-0.5 w-12 bg-amber-500 group-hover:w-24 transition-all duration-500"></div>
                                    </div>

                                    {/* Corner Icon */}
                                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md p-2 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                                        <ArrowUpRight className="w-5 h-5 text-amber-500" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex-1 flex flex-col border-t border-white/5 bg-neutral-900/50 backdrop-blur-sm">
                                    <p className="text-neutral-400 mb-6 flex-1 text-sm leading-relaxed font-light group-hover:text-neutral-300 transition-colors">
                                        {loc.description}
                                    </p>
                                    <div className="flex items-center text-amber-500 font-bold text-xs uppercase tracking-widest group-hover:gap-2 transition-all">
                                        Explore Routes <ArrowRight className="ml-2 w-4 h-4" />
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
