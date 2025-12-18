import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Star, CheckCircle2, Car, Users, Shield, Landmark } from 'lucide-react';
import Hero from '@/components/Hero';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
    title: 'Taxi Service to Khayber Fort | Historical Site Tours from Madinah',
    description: 'Professional taxi service to Khayber Fort helping visitors with historical fortress tours, day trips from Madinah, and guided heritage exploration.',
    keywords: ['Khayber Fort taxi', 'Madinah to Khayber', 'historical site tour', 'Khayber day trip'],
};

export default function KhayberPage() {
    const services = [
        { name: 'Madinah to Khayber', description: 'Comfortable transport from Madinah' },
        { name: 'Guided Tours', description: 'Historical site exploration' },
        { name: 'Day Trips', description: 'Full day excursions' },
        { name: 'Group Transport', description: 'For families and groups' },
        { name: 'Photography Tours', description: 'Capture historical moments' },
        { name: 'Custom Itinerary', description: 'Flexible scheduling' },
    ];

    const features = [
        'Historical knowledge',
        'Comfortable vehicles',
        'Flexible timing',
        'Photography stops',
        'Multilingual guides',
        'Safe transport',
    ];

    const khayberImages = [
        '/hero-slide-2.webp',
        '/hero-slide-5.webp',
        '/hero-slide-1.webp',
    ];

    const faqs = [
        {
            question: "How far is Khaybar from AlUla?",
            answer: "Khaybar is approximately 3 hours drive from AlUla. We provide comfortable day trips to explore its ancient oases and forts."
        },
        {
            question: "Do I need a 4x4 for Khaybar?",
            answer: "While the main roads are paved, exploring some of the volcanic fields (Harrat Khaybar) might require our 4x4 GMC Yukon for better access."
        },
        {
            question: "Is there an airport in Khaybar?",
            answer: "No, the nearest major airport is in AlUla or Madinah. We can pick you up from either airport and drive you to Khaybar."
        },
        {
            question: "Are there guided tours available?",
            answer: "Yes, our drivers are knowledgeable about the region's history, including the Battle of Khaybar forts. We can also arrange professional guides upon request."
        },
        {
            question: "What is the best time to visit Khaybar?",
            answer: "Winter months (November to March) are ideal as summers can be extremely hot. We recommend starting your trip early in the morning."
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <Hero
                images={khayberImages}
                h1Text="Khayber Fort Taxi Service | Historical Site Tours from Madinah"
                title={
                    <span className="bg-primary text-black px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Khayber Fort Tours
                    </span>
                }
                subtitle="Historical Sites"
                location="Day Trips from Madinah"
            />

            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="bg-gray-100 text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block">Our Services</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
                            Khayber Fort Tour Services
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Discover Islamic history with our specialized tour and transport services
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
                                Expert Historical Tours
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Our drivers are knowledgeable about the rich Islamic history of Khayber Fort and can provide insightful commentary during your journey.
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
                                <div className="text-3xl font-bold text-gray-900 mb-1">Flexible</div>
                                <div className="text-sm text-gray-600">Timing</div>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-2xl text-center border border-gray-200">
                                <Users className="w-8 h-8 text-gray-700 mx-auto mb-3" />
                                <div className="text-3xl font-bold text-gray-900 mb-1">1000+</div>
                                <div className="text-sm text-gray-600">Visitors</div>
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
                        Ready to Visit Khayber Fort?
                    </h2>
                    <p className="text-lg text-gray-300 mb-8">
                        Book your historical tour now and explore the legacy of Islamic history!
                    </p>
                    <Link href="#booking">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6">
                            Book Your Tour Now
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
