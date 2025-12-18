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

export const metadata: Metadata = {
    title: 'Toyota Coaster - Large Group Bus | Umrah Taxi',
    description: 'Book our Toyota Coaster bus for large Umrah groups. 17 passengers, perfect for Ziyarat tours and group pilgrimages.',
    keywords: ['Toyota Coaster rental Makkah', 'tour bus Umrah', 'large group transport Saudi', '17 seater bus'],
};

export default function ToyotaCoasterPage() {
    const features = [
        'Large capacity',
        '17 comfortable seats',
        'Spacious luggage area',
        'Air conditioning',
        'Entertainment system',
        'Professional driver',
        'Long distance ready',
        'Corporate events',
    ];

    const specifications = [
        { label: 'Passengers', value: '17' },
        { label: 'Luggage', value: '20 Bags' },
        { label: 'Type', value: 'Tour Bus' },
        { label: 'Transmission', value: 'Automatic' },
    ];

    const idealFor = [
        'Tour Groups',
        'Corporate Events',
        'Large Families',
        'School Trips',
        'Conference Transport',
        'Long Distance Travel',
    ];

    const faqs = [
        {
            question: "Does the Toyota Coaster come with a professional driver?",
            answer: "Yes, all our Toyota Coaster rentals include a professional, well-trained bus driver. We do not offer self-drive options."
        },
        {
            question: "How many passengers can the Toyota Coaster accommodate comfortably?",
            answer: "The Toyota Coaster is designed to carry 17 passengers comfortably, making it ideal for large groups, corporate transport, and tours."
        },
        {
            question: "Is fuel and toll charges included in the booking?",
            answer: "Yes, our pricing is all-inclusive. Fuel, road tolls, and parking fees at airports are covered specially for point-to-point transfers."
        },
        {
            question: "Can I book the Toyota Coaster for intercity travel?",
            answer: "Absolutely. The Toyota Coaster is designed for long-distance travel, providing a safe and comfortable ride between major cities like Jeddah, Makkah, and Madinah."
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="relative h-96 lg:h-auto">
                            <Image
                                src="/toyota-coaster.webp"
                                alt="Toyota Coaster"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                            <span className="bg-gray-100 text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block w-fit mb-4">
                                Large Groups
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Toyota Coaster
                            </h1>
                            <p className="text-xl text-gray-600 mb-6">
                                Professional tour bus perfect for large groups and corporate events. Comfortable seating for up to 17 passengers with ample luggage space.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                {specifications.map((spec, index) => (
                                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                                        <div className="text-sm text-gray-500">{spec.label}</div>
                                        <div className="text-lg font-bold text-gray-900">{spec.value}</div>
                                    </div>
                                ))}
                            </div>

                            <Link href="/booking?vehicle=Toyota%20Coaster">
                                <Button size="lg" className="w-full bg-black hover:bg-gray-800 text-white font-bold">
                                    Book Toyota Coaster Now
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    <div className="bg-white p-8 rounded-2xl shadow-sm">
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

                    <div className="bg-white p-8 rounded-2xl shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Ideal For</h2>
                        <ul className="space-y-3">
                            {idealFor.map((use, index) => (
                                <li key={index} className="flex items-center text-gray-700">
                                    <Car className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                                    {use}
                                </li>
                            ))}
                        </ul>
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
                        <div className="text-3xl font-bold text-gray-900 mb-1">17</div>
                        <div className="text-sm text-gray-600">Passengers</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
                        <Briefcase className="w-8 h-8 text-gray-700 mx-auto mb-3" />
                        <div className="text-3xl font-bold text-gray-900 mb-1">20</div>
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
                        Need a Tour Bus?
                    </h2>
                    <p className="text-lg text-gray-300 mb-6">
                        Book our Toyota Coaster now for large group travel
                    </p>
                    <Link href="/booking?vehicle=Toyota%20Coaster">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6">
                            Book Now
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
