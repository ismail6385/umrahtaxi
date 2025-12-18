import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Star, CheckCircle2, Car, Users, Shield, Mountain } from 'lucide-react';
import Hero from '@/components/Hero';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
    title: 'Taxi Service in Taif | Mountain Tours & Makkah Connection',
    description: 'Professional taxi service in Taif helping visitors with mountain tours, rose garden visits, Makkah connections, and scenic city exploration.',
    keywords: ['Taif taxi', 'Taif to Makkah taxi', 'Taif mountain tour', 'Taif city tour'],
};

export default function TaifPage() {
    const services = [
        { name: 'City Tours', description: 'Explore Taif attractions' },
        { name: 'Makkah Transport', description: 'Taif to Makkah (1.5-2 hours)' },
        { name: 'Mountain Excursions', description: 'Al-Hada & Shafa mountains' },
        { name: 'Local Taxi Service', description: 'Within Taif city' },
        { name: 'Rose Farm Tours', description: 'Visit famous rose gardens' },
        { name: 'Airport Transfers', description: 'Taif Regional Airport' },
    ];

    const features = [
        'Local expert drivers',
        'Comfortable vehicles',
        'Scenic route knowledge',
        'Flexible timing',
        'Tourist-friendly service',
        'Competitive pricing',
    ];

    const taifImages = [
        '/taif-mountains-view.webp',
        '/taif-rose-gardens.webp',
        '/hero-slide-5.webp',
    ];

    const faqs = [
        {
            question: "Is it safe to drive to Taif from Jeddah?",
            answer: "The road to Taif involves a winding mountain ascent (Al Hada). Our experienced drivers are skilled in navigating these mountain roads safely, allowing you to enjoy the stunning views."
        },
        {
            question: "Can I take a taxi to the Taif Cable Car?",
            answer: "Yes, we can drop you off at the Al Hada Cable Car station. You can take the cable car down to the water park and we can pick you up from the bottom if arranged."
        },
        {
            question: "How much is a trip from Makkah to Taif?",
            answer: "A taxi trip from Makkah to Taif takes about 1 hour and costs starting from SAR 250. It's a popular day trip for pilgrims seeking cooler weather."
        },
        {
            question: "Do you visit the Taif Rose Farms?",
            answer: "Yes, during the season (March-April), we can take you to the famous Rose Farms and factories to see the distillation process of Taif Rose water."
        },
        {
            question: "What is the distance between Taif and Jeddah Airport?",
            answer: "The distance is approximately 170 km, which takes about 2 to 2.5 hours by taxi. We offer direct transfers for your convenience."
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <Hero
                images={taifImages}
                h1Text="Taif Taxi Service | Mountain Tours & Rose Garden Visits"
                title={
                    <span className="bg-primary text-black px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Taif Taxi Service
                    </span>
                }
                subtitle="Mountain Tours"
                location="Rose Gardens & City"
            />

            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="bg-gray-100 text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block">Our Services</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
                            Taxi Services in Taif
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Explore the mountain city with our specialized transport services
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

            {/* City of Roses Gallery */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern-grid.png')] opacity-[0.05]"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-pink-500 font-bold tracking-[0.2em] uppercase text-xs">Summer Capital</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white font-serif mt-3 mb-6">Discover the City of Roses</h2>
                        <p className="text-neutral-400 max-w-2xl mx-auto">
                            From the misty peaks of Al Hada to the fragrant rose gardens, experience the refreshing beauty of Taif.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
                        {/* Main Feature - Teleferique */}
                        <div className="md:col-span-8 md:row-span-2 relative group rounded-2xl overflow-hidden border border-white/10 h-80 md:h-full">
                            <Image
                                src="/taif-teleferique.webp"
                                alt="Taif Cable Car (Teleferique)"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-8">
                                <h3 className="text-2xl font-bold text-white font-serif mb-2">Al Hada Cable Car</h3>
                                <p className="text-pink-500 text-sm uppercase tracking-widest">Scenic Mountain Ride</p>
                            </div>
                        </div>

                        {/* Top Right - Rose Farm */}
                        <div className="md:col-span-4 relative group rounded-2xl overflow-hidden border border-white/10 h-64 md:h-auto">
                            <Image
                                src="/taif-rose-farm.webp"
                                alt="Taif Rose Farm"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6">
                                <h3 className="text-xl font-bold text-white font-serif mb-1">Rose Gardens</h3>
                                <p className="text-pink-500 text-xs uppercase tracking-widest">Fragrant Blooms</p>
                            </div>
                        </div>

                        {/* Middle Right - Shubra Palace */}
                        <div className="md:col-span-4 relative group rounded-2xl overflow-hidden border border-white/10 h-64 md:h-auto">
                            <Image
                                src="/taif-shubra-palace.webp"
                                alt="Shubra Palace Museum"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6">
                                <h3 className="text-xl font-bold text-white font-serif mb-1">Shubra Palace</h3>
                                <p className="text-pink-500 text-xs uppercase tracking-widest">Royal Heritage</p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="relative group rounded-2xl overflow-hidden border border-white/10 h-64">
                            <Image
                                src="/taif-al-hada.webp"
                                alt="Al Hada Mountain Road"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6">
                                <h3 className="text-xl font-bold text-white font-serif mb-1">Al Hada Mountain</h3>
                                <p className="text-pink-500 text-xs uppercase tracking-widest">Winding Roads</p>
                            </div>
                        </div>
                        <div className="relative group rounded-2xl overflow-hidden border border-white/10 h-64">
                            <Image
                                src="/taif-saiysad-park.webp"
                                alt="Saiysad National Park"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6">
                                <h3 className="text-xl font-bold text-white font-serif mb-1">Saiysad Park</h3>
                                <p className="text-pink-500 text-xs uppercase tracking-widest">Nature Reserve</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="bg-gray-100 text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">Why Choose Us</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Trusted Taxi Service in Taif
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Experience Taif's beauty with drivers who know every scenic route, historical site, and hidden gem in the mountain city.
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
                                <div className="text-3xl font-bold text-gray-900 mb-1">2000+</div>
                                <div className="text-sm text-gray-600">Happy Tourists</div>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-2xl text-center border border-gray-200">
                                <Star className="w-8 h-8 text-gray-700 mx-auto mb-3" />
                                <div className="text-3xl font-bold text-gray-900 mb-1">4.8</div>
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
                        Ready to Explore Taif?
                    </h2>
                    <p className="text-lg text-gray-300 mb-8">
                        Book your taxi or tour now and discover the beauty of the mountain city!
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
