import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Camera, Car, MapPin } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Gallery | Taxi Service KSA - Our Fleet & Services',
    description: 'View our premium fleet of vehicles and services across Saudi Arabia. Browse photos of our luxury cars, vans, and professional chauffeur services.',
    keywords: ['taxi gallery', 'fleet photos', 'Saudi Arabia taxi', 'luxury vehicles', 'chauffeur service'],
};

export default function GalleryPage() {
    const galleryCategories = [
        {
            title: 'Our Premium Fleet',
            description: 'Luxury vehicles for every occasion',
            images: [
                { src: '/gmc-yukon.webp', alt: 'GMC Yukon - Luxury SUV', category: 'Luxury' },
                { src: '/toyota-camry.webp', alt: 'Toyota Camry - Comfortable Sedan', category: 'Sedan' },
                { src: '/hyundai-staria.webp', alt: 'Hyundai Staria - Modern Family Van', category: 'Van' },
                { src: '/toyota-hiace.webp', alt: 'Toyota Hiace - Group Transport', category: 'Van' },
                { src: '/toyota-coaster.webp', alt: 'Toyota Coaster - Tour Bus', category: 'Bus' },
                { src: '/hyundai-starex.webp', alt: 'Hyundai Starex - Family Van', category: 'Van' },
            ]
        },
        {
            title: 'Makkah Services',
            description: 'Professional transport in the Holy City',
            images: [
                { src: '/makkah-kaaba-night.webp', alt: 'Kaaba at Night', category: 'Makkah' },
                { src: '/makkah-grand-mosque.webp', alt: 'Grand Mosque Aerial View', category: 'Makkah' },
                { src: '/makkah-clock-tower.webp', alt: 'Clock Tower at Dusk', category: 'Makkah' },
            ]
        },
        {
            title: 'Madinah Services',
            description: 'Serving pilgrims in the City of the Prophet',
            images: [
                { src: '/madinah-prophets-mosque.webp', alt: 'Prophet\'s Mosque at Sunset', category: 'Madinah' },
                { src: '/madinah-night-view.webp', alt: 'Madinah Night View', category: 'Madinah' },
            ]
        },
        {
            title: 'Jeddah & Coastal Cities',
            description: 'Airport transfers and city tours',
            images: [
                { src: '/jeddah-corniche-sunset.webp', alt: 'Jeddah Corniche Sunset', category: 'Jeddah' },
                { src: '/jeddah-airport-terminal.webp', alt: 'Jeddah Airport Terminal', category: 'Jeddah' },
                { src: '/jeddah-city-night.webp', alt: 'Jeddah City Night', category: 'Jeddah' },
            ]
        },
        {
            title: 'Taif & Mountain Tours',
            description: 'Scenic routes and rose gardens',
            images: [
                { src: '/taif-mountains-view.webp', alt: 'Taif Mountains View', category: 'Taif' },
                { src: '/taif-rose-gardens.webp', alt: 'Taif Rose Gardens', category: 'Taif' },
            ]
        },
        {
            title: 'Heritage Sites',
            description: 'Tours to UNESCO World Heritage Sites',
            images: [
                { src: '/alula-hegra-tombs.webp', alt: 'AlUla Hegra Tombs', category: 'AlUla' },
            ]
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-4">
                        <Camera className="w-16 h-16 text-primary" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Our Gallery
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore our premium fleet and services across Saudi Arabia's most beautiful destinations
                    </p>
                </div>

                {/* Gallery Categories */}
                <div className="space-y-16">
                    {galleryCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex}>
                            {/* Category Header */}
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                    {category.title}
                                </h2>
                                <p className="text-gray-600">
                                    {category.description}
                                </p>
                            </div>

                            {/* Image Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.images.map((image, imageIndex) => (
                                    <div
                                        key={imageIndex}
                                        className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-primary/50"
                                    >
                                        {/* Image */}
                                        <div className="relative h-64 w-full overflow-hidden">
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                                    <span className="bg-primary text-black text-xs font-bold px-3 py-1 rounded-full">
                                                        {image.category}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Caption */}
                                        <div className="p-4">
                                            <p className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors">
                                                {image.alt}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-2xl text-center shadow-sm border border-gray-200">
                        <Car className="w-8 h-8 text-primary mx-auto mb-3" />
                        <div className="text-3xl font-bold text-gray-900 mb-1">6+</div>
                        <div className="text-sm text-gray-600">Vehicle Types</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl text-center shadow-sm border border-gray-200">
                        <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                        <div className="text-3xl font-bold text-gray-900 mb-1">10+</div>
                        <div className="text-sm text-gray-600">Cities Served</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl text-center shadow-sm border border-gray-200">
                        <Camera className="w-8 h-8 text-primary mx-auto mb-3" />
                        <div className="text-3xl font-bold text-gray-900 mb-1">20+</div>
                        <div className="text-sm text-gray-600">Gallery Images</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl text-center shadow-sm border border-gray-200">
                        <div className="text-3xl font-bold text-gray-900 mb-1">24/7</div>
                        <div className="text-sm text-gray-600">Service Available</div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 bg-gradient-to-r from-primary to-yellow-600 rounded-2xl p-8 md:p-12 text-center">
                    <h2 className="text-3xl font-bold text-black mb-4">
                        Ready to Experience Premium Service?
                    </h2>
                    <p className="text-lg text-black/90 mb-6">
                        Book your ride now and travel in style across Saudi Arabia
                    </p>
                    <Link href="/booking">
                        <button className="bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-900 transition-all hover:scale-105">
                            Book Now
                        </button>
                    </Link>
                </div>

                {/* Back to Home */}
                <div className="text-center mt-12">
                    <Link href="/" className="text-primary hover:text-primary/80 font-semibold">
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
