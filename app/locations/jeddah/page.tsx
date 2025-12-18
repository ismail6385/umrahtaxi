import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Star, CheckCircle2, Car, Users, Shield, Plane } from 'lucide-react';
import Hero from '@/components/Hero';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'Taxi Service in Jeddah | Airport Transfer & Makkah Connection',
    description: 'Professional taxi service in Jeddah helping travelers with King Abdulaziz Airport transfers, Makkah connections, city tours, and corporate transport.',
    keywords: ['Jeddah taxi', 'KAIA airport taxi', 'Jeddah to Makkah taxi', 'Jeddah airport transfer'],
};

export default function JeddahPage() {
    const services = [
        { name: 'Airport Transfers', description: 'KAIA to any destination' },
        { name: 'Makkah Transport', description: 'Jeddah to Makkah (1-1.5 hours)' },
        { name: 'Madinah Transport', description: 'Jeddah to Madinah (4-5 hours)' },
        { name: 'Corporate Chauffeur', description: 'Business meetings & events' },
        { name: 'City Tours', description: 'Jeddah Corniche & attractions' },
        { name: 'Hourly Rental', description: 'Flexible hourly service' },
    ];

    const features = [
        'Professional drivers',
        'Luxury vehicles',
        'Flight tracking',
        '24/7 availability',
        'Meet & greet service',
        'Fixed pricing',
    ];

    const jeddahImages = [
        '/jeddah-corniche-sunset.webp',
        '/jeddah-airport-terminal.webp',
        '/jeddah-city-night.webp',
    ];

    const faqs = [
        {
            question: "How much is a taxi from Jeddah Airport to Makkah?",
            answer: "Our taxi rates from Jeddah Airport (KAIA) to Makkah start from SAR 200 depending on the vehicle type. We offer fixed pricing with no hidden charges for GMC Yukon, Camry, and Hiace vans."
        },
        {
            question: "Where will the driver meet me at Jeddah Airport?",
            answer: "For Terminal 1, our driver will meet you at the arrival hall with a name sign. We track your flight to ensure we are there when you land, even if your flight is delayed."
        },
        {
            question: "Can I book a taxi from Jeddah to Madinah directly?",
            answer: "Yes, we provide direct intercity taxi service from Jeddah to Madinah. The journey takes approximately 4 hours via the Haramain route, offering a comfortable and private ride."
        },
        {
            question: "Is your taxi service available 24/7 at Jeddah Airport?",
            answer: "Yes, Taxi Service KSA operates 24/7 at King Abdulaziz International Airport. Whether your flight lands at 2 AM or 2 PM, our chauffeurs are ready to serve you."
        },
        {
            question: "Do you provide child seats for families?",
            answer: "Yes, we offer complimentary child seats upon request. Please mention this requirement in the booking form to ensure safety for your little ones during the Jeddah to Makkah journey."
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdFAQ faqs={faqs} />
            <Hero
                images={jeddahImages}
                h1Text="Jeddah Taxi Service | Airport Transfer to Makkah & Madinah"
                title={
                    <span className="bg-primary text-black px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Jeddah Taxi Service
                    </span>
                }
                subtitle="Airport Transfers"
                location="To Makkah & Madinah"
            />

            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="bg-gray-100 text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block">Our Services</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
                            Taxi Services in Jeddah
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Gateway to the Holy Cities - Professional transport solutions
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-primary/50 hover:shadow-lg transition-all">
                                {service.name === 'Airport Transfers' ? (
                                    <Plane className="w-8 h-8 text-gray-700 mb-4" />
                                ) : (
                                    <Car className="w-8 h-8 text-gray-700 mb-4" />
                                )}
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                                <p className="text-gray-600 text-sm">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="bg-gray-100 text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">Why Choose Us</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Trusted Taxi Service in Jeddah
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Your reliable partner for airport transfers and intercity travel. We track your flight and ensure timely pickups.
                            </p>
                            <ul className="space-y-4">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex items-center text-gray-700">
                                        <CheckCircle2 className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-50 p-6 rounded-2xl text-center border border-gray-200">
                                <Clock className="w-8 h-8 text-gray-700 mx-auto mb-3" />
                                <div className="text-3xl font-bold text-gray-900 mb-1">24/7</div>
                                <div className="text-sm text-gray-600">Available</div>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-2xl text-center border border-gray-200">
                                <Users className="w-8 h-8 text-gray-700 mx-auto mb-3" />
                                <div className="text-3xl font-bold text-gray-900 mb-1">3000+</div>
                                <div className="text-sm text-gray-600">Happy Customers</div>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-2xl text-center border border-gray-200">
                                <Star className="w-8 h-8 text-gray-700 mx-auto mb-3" />
                                <div className="text-3xl font-bold text-gray-900 mb-1">4.9</div>
                                <div className="text-sm text-gray-600">Rating</div>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-2xl text-center border border-gray-200">
                                <Shield className="w-8 h-8 text-gray-700 mx-auto mb-3" />
                                <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
                                <div className="text-sm text-gray-600">Safe</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="bg-gray-100 text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">FAQ</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                        <p className="text-gray-600">Common questions about our taxi service</p>
                    </div>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl border border-gray-200 px-6 shadow-sm">
                                <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pt-2">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Book Your Ride in Jeddah?
                    </h2>
                    <p className="text-lg text-gray-300 mb-8">
                        Professional taxi service available 24/7. Book now for instant confirmation!
                    </p>
                    <Link href="#booking">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6">
                            Book Your Taxi Now
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
