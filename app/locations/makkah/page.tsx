import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Star, CheckCircle2, Car, Users, Shield } from 'lucide-react';
import Hero from '@/components/Hero';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
    title: 'Makkah Umrah Taxi | Airport Transfers & Ziyarat',
    description: 'Reliable Umrah Taxi in Makkah. We specialize in Jeddah airport transfers, Ziyarat tours, and hotel to Haram transportation for pilgrims.',
    keywords: ['Makkah taxi', 'Umrah taxi Makkah', 'Makkah to Madinah taxi', 'Jeddah airport to Makkah', 'Ziyarat taxi'],
};

export default function MakkahPage() {
    const services = [
        { name: 'Airport Transfers', description: 'Jeddah Airport to Makkah hotels' },
        { name: 'Umrah Transportation', description: 'Makkah to Madinah and return' },
        { name: 'Ziyarat Tours', description: 'Holy sites and historical places' },
        { name: 'Local Transfers', description: 'Hotel to Haram and back' },
        { name: 'Intercity Taxi', description: 'Transport to Taif & Madinah' },
        { name: 'Group Transport', description: 'For families and groups' },
    ];

    const features = [
        'Experienced local drivers',
        'Clean and comfortable vehicles',
        'Fixed transparent pricing',
        '24/7 availability',
        'English & Arabic speaking drivers',
        'Prayer time accommodations',
    ];

    // Makkah-specific hero images
    const makkahImages = [
        '/makkah-kaaba-night.webp',
        '/makkah-grand-mosque.webp',
        '/makkah-clock-tower.webp',
    ];

    const faqs = [
        {
            question: "How do I book an Umrah taxi from Makkah to Taneem (Masjid Aisha)?",
            answer: "You can easily book a round-trip taxi from your Makkah hotel to Masjid Aisha (Taneem) for Ihram. Our drivers know the best routes to minimize travel time."
        },
        {
            question: "Are your vehicles allowed to enter the Makkah Haram zone?",
            answer: "Yes, our licensed taxis have permits to drop you as close as possible to the Haram or your hotel in the central area, respecting local traffic regulations."
        },
        {
            question: "How long does it take by taxi from Makkah to Madinah?",
            answer: "The taxi journey from Makkah to Madinah takes about 4 to 5 hours via the Hijrah Highway. We recommend our comfortable GMC Yukon or Hyundai Staria for this long trip."
        },
        {
            question: "Can you arrange Ziyarat tours in Makkah?",
            answer: "Absolutely. We offer comprehensive Ziyarat tours visiting Jabal Al-Nour (Cave of Hira), Jabal Thawr, Mina, Muzdalifah, and Arafat with knowledgeable drivers."
        },
        {
            question: "Do you offer group transport for Umrah families?",
            answer: "Yes, for larger families or Umrah groups, we provide Toyota Hiace (10 passengers) and Coaster (20+ passengers) buses with ample luggage space."
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section with Background Images & Booking Form */}
            <Hero
                images={makkahImages}
                h1Text="Makkah Umrah Taxi & Ziyarat Tours"
                title={
                    <span className="bg-primary text-white px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Makkah Umrah Taxi
                    </span>
                }
                subtitle="Reliable Pilgrimage Transport"
                location="24/7 Available"
            />

            {/* Services Section */}
            {/* Services Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
                {/* Highway Visual */}
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="order-2 lg:order-1 relative group">
                            <div className="relative h-[550px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-50">
                                <img
                                    src="/makkah-highway.webp"
                                    alt="Journey to Makkah on Highway"
                                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                                <div className="absolute bottom-8 left-8 text-white">
                                    <h3 className="text-2xl font-bold mb-1">The Sacred Path</h3>
                                    <p className="text-gray-300 text-sm">Experience the serenity of the journey to the Haram</p>
                                </div>
                            </div>
                            <div className="absolute -z-10 top-10 -left-10 w-full h-full border-2 border-primary/20 rounded-2xl"></div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <span className="bg-primary/10 text-primary font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">Makkah Transport</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Journey with <br /><span className="text-primary">Dignity & Comfort</span>
                            </h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                Whether you are arriving from Jeddah or moving between Makkah and Madinah, our fleet ensures your focus remains on your worship, not the road.
                            </p>

                            <div className="space-y-4">
                                {services.map((service, index) => (
                                    <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-primary/40 transition-colors">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                            <Car className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">{service.name}</h3>
                                            <p className="text-sm text-gray-500">{service.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="bg-primary/10 text-primary font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">Why Choose Us</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Trusted Umrah Taxi in Makkah
                            </h2>
                            <p className="text-gray-600 mb-8">
                                We understand the sacred nature of your journey. Our drivers are experienced, respectful, and knowledgeable about Makkah and its holy sites.
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
                                <div className="text-3xl font-bold text-gray-900 mb-1">5000+</div>
                                <div className="text-sm text-gray-600">Happy Pilgrims</div>
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

            {/* Sacred Sites Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900 text-white relative">
                <div className="absolute inset-0 bg-[url('/pattern-grid.png')] opacity-[0.05]"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-amber-500 font-bold tracking-[0.2em] uppercase text-xs">Journey of Faith</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-serif mt-3 mb-6">Explore Holy Sites</h2>
                        <p className="text-neutral-400 max-w-2xl mx-auto">
                            Beyond the Haram, Makkah holds the history of Islam. Let us guide you to the places where revelation descended.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer border border-white/10">
                            <Image
                                src="/zip-hira.webp"
                                alt="Cave of Hira - Jabal Al Noor"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-8">
                                <h3 className="text-2xl font-bold font-serif mb-2 text-white group-hover:text-amber-500 transition-colors">Jabal Al-Nour</h3>
                                <p className="text-sm text-neutral-300">The Mountain of Light & Cave of Hira.</p>
                            </div>
                        </div>

                        <div className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer border border-white/10">
                            <Image
                                src="/zip-mina.webp"
                                alt="Mina Tent City"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-8">
                                <h3 className="text-2xl font-bold font-serif mb-2 text-white group-hover:text-amber-500 transition-colors">Mina Tent City</h3>
                                <p className="text-sm text-neutral-300">The largest tent city in the world.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
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

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Book Your Ride in Makkah?
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
