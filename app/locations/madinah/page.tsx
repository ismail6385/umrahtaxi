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
    title: 'Madinah Umrah Taxi | Prophet\'s Mosque & Ziyarat',
    description: 'Reliable Umrah Taxi in Madinah. We specialize in transport to Prophet\'s Mosque, Ziyarat tours, airport transfers, and Makkah connections.',
    keywords: ['Madinah taxi', 'Prophet\'s Mosque taxi', 'Ziyarat taxi Madinah', 'Madinah airport transfer', 'Umrah taxi'],
};

export default function MadinahPage() {
    const services = [
        { name: 'Airport Transfers', description: 'Prince Mohammad Airport to hotels' },
        { name: 'Ziyarat Tours', description: 'Holy sites and historical places' },
        { name: 'Makkah Transport', description: 'Madinah to Makkah and return' },
        { name: 'Hotel Transfers', description: 'Hotel to Masjid Nabawi' },
        { name: 'Train Station', description: 'Haramain Station Transfers' },
        { name: 'Group Transport', description: 'For families and groups' },
    ];

    const features = [
        'Knowledgeable local drivers',
        'Comfortable vehicles',
        'Transparent pricing',
        '24/7 service',
        'Multilingual drivers',
        'Respectful service',
    ];

    const madinahImages = [
        '/madinah-prophets-mosque.webp',
        '/madinah-night-view.webp',
        '/hero-slide-2.webp',
    ];

    const faqs = [
        {
            question: "What is the taxi fare from Madinah Airport to Masjid An Nabawi?",
            answer: "The taxi fare from Prince Mohammad Bin Abdulaziz International Airport (MED) to Masjid An Nabawi is generally around SAR 80-120. We offer fixed rates for peace of mind."
        },
        {
            question: "Can I visit Ziyarat places in Madinah by taxi?",
            answer: "Yes, we offer specialized Ziyarat packages visiting Mount Uhud, Masjid Quba, Masjid Qiblatayn, and the Seven Mosques. Our drivers are well-versed in Islamic history sites."
        },
        {
            question: "How far is the train station from the Prophet's Mosque?",
            answer: "The Haramain High-Speed Railway station is about 15-20 minutes by taxi from the Prophet's Mosque (Al-Masjid an-Nabawi), depending on traffic."
        },
        {
            question: "Do you provide transport from Madinah to Makkah?",
            answer: "Yes, we offer comfortable private taxi transfers from Madinah to Makkah (approx. 4-5 hours). This is a preferred option for families with luggage and elderly pilgrims."
        },
        {
            question: "Are there female drivers available in Madinah?",
            answer: "Currently, our fleet is operated by professional male chauffeurs. However, we ensure the highest standards of safety, privacy, and respect for all family members."
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <Hero
                images={madinahImages}
                h1Text="Madinah Umrah Taxi & Ziyarat Tours"
                title={
                    <span className="bg-primary text-white px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Madinah Umrah Taxi
                    </span>
                }
                subtitle="Ziyarat Tours"
                location="Prophet's Mosque"
            />

            <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gray-50/50">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-l-full blur-3xl opacity-50 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="order-2 lg:order-1">
                            <span className="bg-primary/10 text-primary font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">Madinah Services</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Peace in the <br /><span className="text-primary">City of the Prophet</span>
                            </h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                Our Madinah transport services are designed with the tranquility of the city in mind. From Airport pickups to Ziyarat of historic mosques, we ensure a respectful and comfortable experience.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {services.map((service, index) => (
                                    <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-primary/40 hover:shadow-md transition-all">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                                <Car className="w-4 h-4" />
                                            </div>
                                            <h3 className="font-bold text-gray-900 text-sm">{service.name}</h3>
                                        </div>
                                        <p className="text-xs text-gray-500 pl-11">{service.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 relative group">
                            <div className="relative h-[600px] w-full rounded-t-full rounded-b-2xl overflow-hidden shadow-2xl border-4 border-white">
                                <img
                                    src="/green-dome-detail.webp"
                                    alt="The Green Dome of Prophet's Mosque"
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                <div className="absolute bottom-10 left-0 right-0 text-center text-white">
                                    <h3 className="text-2xl font-bold font-serif mb-1">Al-Masjid an-Nabawi</h3>
                                    <p className="text-sm opacity-90 tracking-widest uppercase">The City of Light</p>
                                </div>
                            </div>
                            {/* Decorative Outline */}
                            <div className="absolute -inset-4 border border-dashed border-primary/30 rounded-t-full rounded-b-3xl z-[-1] animate-spin-slow" style={{ animationDuration: '60s' }}></div>
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
                                Trusted Umrah Taxi in Madinah
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Experience the blessed city with our professional drivers who understand the significance of your spiritual journey to Masjid Nabawi and historical sites.
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
                                <div className="text-3xl font-bold text-gray-900 mb-1">4000+</div>
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

            {/* Sacred Landmarks */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900 text-white relative">
                <div className="absolute inset-0 bg-[url('/pattern-grid.png')] opacity-[0.05]"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-amber-500 font-bold tracking-[0.2em] uppercase text-xs">Explore History</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-serif mt-3 mb-6">Sacred Ziyarat Sites</h2>
                        <p className="text-neutral-400 max-w-2xl mx-auto">
                            Our drivers are knowledgeable guides who will take you to these blessed locations with the respect they deserve.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer border border-white/10">
                            <Image
                                src="/zip-quba.webp"
                                alt="Masjid Quba"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-8">
                                <h3 className="text-2xl font-bold font-serif mb-2 text-white group-hover:text-amber-500 transition-colors">Masjid Quba</h3>
                                <p className="text-sm text-neutral-300">The first mosque built by the Prophet (PBUH).</p>
                            </div>
                        </div>

                        <div className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer border border-white/10">
                            <Image
                                src="/zip-uhud.webp"
                                alt="Mount Uhud"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-8">
                                <h3 className="text-2xl font-bold font-serif mb-2 text-white group-hover:text-amber-500 transition-colors">Mount Uhud</h3>
                                <p className="text-sm text-neutral-300">"Uhud is a mountain that loves us and we love it."</p>
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

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Book Your Ride in Madinah?
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
