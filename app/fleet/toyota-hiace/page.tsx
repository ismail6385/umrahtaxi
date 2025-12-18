import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Users, Briefcase, CheckCircle2, Star, Shield, Clock, Car } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'Toyota Hiace - Group Transport | Umrah Taxi',
    description: 'Book our spacious Toyota Hiace for group Umrah travel. 11 passengers, perfect for Ziyarat tours and large families.',
    keywords: ['Toyota Hiace rental Makkah', 'group transport Umrah', 'Umrah van Saudi Arabia', '11 seater taxi'],
};

export default function ToyotaHiacePage() {
    const features = [
        'Spacious interior',
        '11 passenger capacity',
        'Large luggage space',
        'Air conditioning',
        'Comfortable seats',
        'Reliable performance',
        'Group travel ready',
        'Professional driver',
    ];

    const specifications = [
        { label: 'Passengers', value: '11' },
        { label: 'Luggage', value: '16 Bags' },
        { label: 'Type', value: 'Van' },
        { label: 'Transmission', value: 'Automatic' },
    ];

    const idealFor = [
        'Umrah Groups',
        'Large Families',
        'Group Tours',
        'Airport Transfers',
        'Corporate Events',
        'School Trips',
    ];

    const faqs = [
        {
            question: "Does the Toyota Hiace come with a professional driver?",
            answer: "Yes, all our Toyota Hiace rentals include a professional, well-trained chauffeur. We do not offer self-drive options."
        },
        {
            question: "How many passengers can the Toyota Hiace accommodate comfortably?",
            answer: "The Toyota Hiace is designed to carry 11 passengers with 16 luggage pieces comfortably, ensuring a relaxing journey for large groups."
        },
        {
            question: "Is fuel and toll charges included in the booking?",
            answer: "Yes, our pricing is all-inclusive. Fuel, road tolls, and parking fees at airports are covered specially for point-to-point transfers."
        },
        {
            question: "Can I book the Toyota Hiace for an Umrah trip?",
            answer: "Absolutely. The Toyota Hiace is the preferred choice for Umrah groups traveling between Jeddah, Makkah, and Madinah."
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <JsonLdFAQ faqs={faqs} />

                <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="relative h-96 lg:h-auto">
                            <Image
                                src="/toyota-hiace.webp"
                                alt="Toyota Hiace"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                            <span className="bg-gray-100 text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block w-fit mb-4">
                                Group Transport
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Toyota Hiace
                            </h1>
                            <p className="text-xl text-gray-600 mb-6">
                                Reliable and spacious van perfect for group travel and Umrah trips. Comfortable seating for up to 11 passengers.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                {specifications.map((spec, index) => (
                                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                                        <div className="text-sm text-gray-500">{spec.label}</div>
                                        <div className="text-lg font-bold text-gray-900">{spec.value}</div>
                                    </div>
                                ))}
                            </div>

                            <Link href="/booking?vehicle=Toyota%20Hiace">
                                <Button size="lg" className="w-full bg-black hover:bg-gray-800 text-white font-bold">
                                    Book Toyota Hiace Now
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Features</h2>
                        <ul className="space-y-3">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
                        <Image
                            src="/toyota-hiace-context.webp"
                            alt="Toyota Hiace Loading at Airport"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                        <div className="absolute bottom-0 left-0 p-8 w-full text-white">
                            <div className="mb-4">
                                <span className="bg-white text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Group Travel</span>
                            </div>
                            <h2 className="text-2xl font-bold mb-2">Designed for Families</h2>
                            <p className="text-gray-300 text-sm mb-6 max-w-md">
                                From Airport pick-ups with heavy luggage to Ziyarat tours, the Hiace is the workhorse of Umrah travel.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {idealFor.slice(0, 4).map((use, index) => (
                                    <span key={index} className="flex items-center text-xs bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                                        <Car className="w-3 h-3 mr-2" />
                                        {use}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
                        <Star className="w-8 h-8 text-gray-700 mx-auto mb-3" />
                        <div className="text-3xl font-bold text-gray-900 mb-1">4.9</div>
                        <div className="text-sm text-gray-600">Rating</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
                        <Users className="w-8 h-8 text-gray-700 mx-auto mb-3" />
                        <div className="text-3xl font-bold text-gray-900 mb-1">11</div>
                        <div className="text-sm text-gray-600">Passengers</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
                        <Briefcase className="w-8 h-8 text-gray-700 mx-auto mb-3" />
                        <div className="text-3xl font-bold text-gray-900 mb-1">16</div>
                        <div className="text-sm text-gray-600">Bags</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
                        <Shield className="w-8 h-8 text-gray-700 mx-auto mb-3" />
                        <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
                        <div className="text-sm text-gray-600">Safe</div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="max-w-4xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl border border-gray-200 px-6 shadow-sm">
                                <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pt-2">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                {/* CTA */}
                <div className="bg-black rounded-2xl p-8 md:p-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready for Group Travel?
                    </h2>
                    <p className="text-lg text-gray-300 mb-6">
                        Book our Toyota Hiace now for your Umrah or group journey
                    </p>
                    <Link href="/booking?vehicle=Toyota%20Hiace">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6">
                            Book Now
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
