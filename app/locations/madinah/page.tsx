import { Metadata } from 'next';
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
    title: 'Taxi Service in Madinah | Prophet\'s Mosque Transport & Ziyarat Tours',
    description: 'Professional taxi service in Madinah helping pilgrims with Prophet\'s Mosque transportation, Ziyarat tours, airport transfers, and hotel to Masjid Nabawi rides.',
    keywords: ['Madinah taxi', 'Prophet\'s Mosque taxi', 'Ziyarat taxi Madinah', 'Madinah airport transfer'],
};

export default function MadinahPage() {
    const services = [
        { name: 'Airport Transfers', description: 'Prince Mohammad Airport to hotels' },
        { name: 'Ziyarat Tours', description: 'Holy sites and historical places' },
        { name: 'Makkah Transport', description: 'Madinah to Makkah and return' },
        { name: 'Local Taxi Service', description: 'Within Madinah city' },
        { name: 'Mosque Transfers', description: 'Hotel to Masjid Nabawi' },
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
                h1Text="Madinah Taxi Service | Ziyarat Tours & Prophet's Mosque Visits"
                title={
                    <span className="bg-primary text-black px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Madinah Taxi Service
                    </span>
                }
                subtitle="Ziyarat Tours"
                location="Prophet's Mosque"
            />

            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="bg-gray-100 text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block">Our Services</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
                            Taxi Services in Madinah
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Complete transportation solutions in the blessed city of Madinah
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-primary/50 hover:shadow-lg transition-all">
                                <Car className="w-8 h-8 text-gray-700 mb-4" />
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
                                Trusted Taxi Service in Madinah
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
