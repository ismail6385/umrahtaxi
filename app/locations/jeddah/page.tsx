import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
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
    title: 'Jeddah Taxi Service | Airport Transfer to Makkah',
    description: 'Reliable Umrah Taxi service in Jeddah. We specialize in King Abdulaziz Airport transfers to Makkah and Madinah hotels for pilgrims.',
    keywords: ['Jeddah taxi', 'Jeddah airport to Makkah', 'Umrah taxi Jeddah', 'Haramain transfer', 'Jeddah airport taxi'],
};

export default function JeddahPage() {
    const services = [
        { name: 'Umrah Airport Pickup', description: 'Meet & Greet at KAIA Terminals' },
        { name: 'Makkah Transfer', description: 'Jeddah to Makkah (1-1.5 hours)' },
        { name: 'Madinah Transfer', description: 'Jeddah to Madinah (4-5 hours)' },
        { name: 'Ziyarat Tours', description: 'Visit historic Jeddah & Mosques' },
        { name: 'Family Vans', description: 'Spacious vehicles for families' },
        { name: 'VIP Service', description: 'Luxury GMC Yukon for comfort' },
    ];

    const features = [
        'Experienced drivers',
        'Clean & spacious cars',
        'Flight tracking',
        'Prayer time stops',
        'Meet & greet service',
        'Fair fixed rates',
    ];

    const jeddahImages = [
        '/jeddah-corniche-sunset.webp',
        '/jeddah-airport-terminal.webp',
        '/jeddah-city-night.webp',
    ];

    const faqs = [
        {
            question: "How much is a taxi from Jeddah Airport to Makkah?",
            answer: "Our reduced rates for Umrah pilgrims start from SAR 200 depending on the vehicle. Use our booking form for an instant quote for GMC Yukon, Camry, or Hiace."
        },
        {
            question: "Where will the driver meet me at Jeddah Airport?",
            answer: "For Terminal 1, 1 North, and Hajj Terminal, our driver will wait at the arrival hall with your name on a signboard. We track flights to ensure timely pickup."
        },
        {
            question: "Can I book a taxi from Jeddah to Madinah directly?",
            answer: "Yes, we provide direct transfer from Jeddah Airport to Madinah hotels. The journey takes about 4-5 hours in a comfortable, air-conditioned vehicle."
        },
        {
            question: "Is your taxi service available 24/7 at Jeddah Airport?",
            answer: "Yes, Umrah Taxi operates 24/7. Whether you arrive for Umrah late at night or early morning, we are ready to serve you."
        },
        {
            question: "Do you provide child seats for families?",
            answer: "Yes, we offer complimentary child seats upon request. Please mention this in the booking form for your family's safety."
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdFAQ faqs={faqs} />
            <Hero
                images={jeddahImages}
                h1Text="Jeddah Airport Taxi to Makkah & Madinah"
                title={
                    <span className="bg-primary text-white px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Jeddah Umrah Taxi
                    </span>
                }
                subtitle="Reliable Pilgrimage Transport"
                location="Jeddah ⇄ Makkah"
            />

            <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <span className="bg-primary/10 text-primary font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block">Jeddah Services</span>
                                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 mb-4 leading-tight">
                                    The Gateway to <br /> <span className="text-primary">The Holy Cities</span>
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Start your spiritual journey the right way. Our premium transfer service from King Abdulaziz International Airport (KAIA) ensures you arrive at the Haram in Makkah refreshed and ready for Umrah.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {services.map((service, index) => (
                                    <div key={index} className="bg-white p-5 rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all group">
                                        <div className="flex items-center gap-3 mb-2">
                                            {service.name.includes('Airport') ? <Plane className="w-5 h-5 text-primary" /> : <Car className="w-5 h-5 text-primary" />}
                                            <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">{service.name}</h3>
                                        </div>
                                        <p className="text-gray-500 text-sm pl-8 border-l border-gray-100">{service.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                                <Image
                                    src="/jeddah-corniche-road.webp"
                                    alt="Luxury Car on Jeddah Corniche"
                                    fill
                                    className="object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 text-white p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <MapPin className="w-5 h-5 text-primary" />
                                        <span className="font-bold">Jeddah Corniche</span>
                                    </div>
                                    <p className="text-sm opacity-90">Scenic coastal route transfers available</p>
                                </div>
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full z-[-1]"></div>
                            <div className="absolute -top-6 -left-6 w-20 h-20 bg-primary/10 rounded-full z-[-1]"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bride of the Red Sea Gallery */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern-grid.png')] opacity-[0.05]"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Coastal Jewel</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white font-serif mt-3 mb-6">The Bride of the Red Sea</h2>
                        <p className="text-neutral-400 max-w-2xl mx-auto">
                            Experience the vibrant culture and stunning waterfront of Saudi Arabia's most dynamic city.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
                        {/* Main Feature - Floating Mosque */}
                        <div className="md:col-span-8 md:row-span-2 relative group rounded-2xl overflow-hidden border border-white/10 h-80 md:h-full">
                            <Image
                                src="/jeddah-floating-mosque.webp"
                                alt="Al-Rahma Floating Mosque"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-8">
                                <h3 className="text-2xl font-bold text-white font-serif mb-2">Floating Mosque</h3>
                                <p className="text-primary text-sm uppercase tracking-widest">Al-Rahma Mosque</p>
                            </div>
                        </div>

                        {/* Top Right - Al Balad */}
                        <div className="md:col-span-4 relative group rounded-2xl overflow-hidden border border-white/10 h-64 md:h-auto">
                            <Image
                                src="/jeddah-al-balad.webp"
                                alt="Al Balad Historic District"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6">
                                <h3 className="text-xl font-bold text-white font-serif mb-1">Historic Al Balad</h3>
                                <p className="text-primary text-xs uppercase tracking-widest">UNESCO World Heritage</p>
                            </div>
                        </div>

                        {/* Middle Right - King Fahd Fountain */}
                        <div className="md:col-span-4 relative group rounded-2xl overflow-hidden border border-white/10 h-64 md:h-auto">
                            <Image
                                src="/jeddah-fountain.webp"
                                alt="King Fahd's Fountain"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6">
                                <h3 className="text-xl font-bold text-white font-serif mb-1">King Fahd's Fountain</h3>
                                <p className="text-primary text-xs uppercase tracking-widest">Tallest in World</p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="relative group rounded-2xl overflow-hidden border border-white/10 h-64">
                            <Image
                                src="/jeddah-red-sea-mall.webp"
                                alt="Red Sea Mall"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6">
                                <h3 className="text-xl font-bold text-white font-serif mb-1">Red Sea Mall</h3>
                                <p className="text-primary text-xs uppercase tracking-widest">Premier Shopping</p>
                            </div>
                        </div>
                        <div className="relative group rounded-2xl overflow-hidden border border-white/10 h-64">
                            <Image
                                src="/jeddah-yacht-club.webp"
                                alt="Jeddah Yacht Club"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6">
                                <h3 className="text-xl font-bold text-white font-serif mb-1">Yacht Club</h3>
                                <p className="text-primary text-xs uppercase tracking-widest">Luxury Marina</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="bg-primary/10 text-primary font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">Why Choose Us</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Trusted Umrah Taxi in Jeddah
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Your reliable partner for airport transfers to Makkah and Madinah. We understand the importance of your spiritual journey.
                            </p>
                            <ul className="space-y-4">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex items-center text-gray-700">
                                        <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-50 p-6 rounded-2xl text-center border border-gray-200">
                                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                                <div className="text-3xl font-bold text-gray-900 mb-1">24/7</div>
                                <div className="text-sm text-gray-600">Available</div>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-2xl text-center border border-gray-200">
                                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                                <div className="text-3xl font-bold text-gray-900 mb-1">10k+</div>
                                <div className="text-sm text-gray-600">Pilgrims Served</div>
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
