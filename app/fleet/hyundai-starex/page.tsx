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
    title: 'Hyundai Starex - Family Van | Taxi Service KSA',
    description: 'Book our reliable Hyundai Starex for family travel in Saudi Arabia. 7 passengers, comfortable and spacious, perfect for airport transfers.',
    keywords: ['Hyundai Starex rental Saudi Arabia', 'family van KSA', 'airport transfer', '7 seater van'],
};

export default function HyundaiStarexPage() {
    const features = [
        'Family friendly',
        'Comfortable seating',
        'Spacious interior',
        'Air conditioning',
        'Reliable performance',
        'Large luggage space',
        'Professional driver',
        'Airport transfer ready',
    ];

    const specifications = [
        { label: 'Passengers', value: '7' },
        { label: 'Luggage', value: '10 Bags' },
        { label: 'Type', value: 'Van' },
        { label: 'Transmission', value: 'Automatic' },
    ];

    const idealFor = [
        'Family Travel',
        'Airport Transfers',
        'Group Outings',
        'City Tours',
        'Umrah Transport',
        'Long Distance',
    ];

    const faqs = [
        {
            question: "Does the Hyundai Starex come with a professional driver?",
            answer: "Yes, all our Hyundai Starex rentals include a professional, well-trained chauffeur. We do not offer self-drive options."
        },
        {
            question: "How many passengers can the Hyundai Starex accommodate comfortably?",
            answer: "The Hyundai Starex is designed to carry 7 passengers with 10 luggage pieces comfortably, ensuring a relaxing journey for families."
        },
        {
            question: "Is fuel and toll charges included in the booking?",
            answer: "Yes, our pricing is all-inclusive. Fuel, road tolls, and parking fees at airports are covered specially for point-to-point transfers."
        },
        {
            question: "Can I book the Hyundai Starex for a trip from Jeddah to Makkah?",
            answer: "Absolutely. The Hyundai Starex is a reliable choice for the Jeddah-Makkah route, providing a smooth and safe ride for Umrah pilgrims."
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="relative h-96 lg:h-auto">
                            <Image
                                src="/hyundai-starex.webp"
                                alt="Hyundai Starex"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                            <span className="bg-gray-100 text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block w-fit mb-4">
                                Reliable Choice
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Hyundai Starex
                            </h1>
                            <p className="text-xl text-gray-600 mb-6">
                                Reliable and comfortable van perfect for families and small groups. Spacious interior with ample luggage capacity.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                {specifications.map((spec, index) => (
                                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                                        <div className="text-sm text-gray-500">{spec.label}</div>
                                        <div className="text-lg font-bold text-gray-900">{spec.value}</div>
                                    </div>
                                ))}
                            </div>

                            <Link href="/booking?vehicle=Hyundai%20Starex">
                                <Button size="lg" className="w-full bg-black hover:bg-gray-800 text-white font-bold">
                                    Book Hyundai Starex Now
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
                        <div className="text-3xl font-bold text-gray-900 mb-1">4.8</div>
                        <div className="text-sm text-gray-600">Rating</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
                        <Users className="w-8 h-8 text-gray-700 mx-auto mb-3" />
                        <div className="text-3xl font-bold text-gray-900 mb-1">7</div>
                        <div className="text-sm text-gray-600">Passengers</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
                        <Briefcase className="w-8 h-8 text-gray-700 mx-auto mb-3" />
                        <div className="text-3xl font-bold text-gray-900 mb-1">10</div>
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
                        Ready for Comfortable Family Travel?
                    </h2>
                    <p className="text-lg text-gray-300 mb-6">
                        Book our Hyundai Starex now for your next journey
                    </p>
                    <Link href="/booking?vehicle=Hyundai%20Starex">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6">
                            Book Now
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
