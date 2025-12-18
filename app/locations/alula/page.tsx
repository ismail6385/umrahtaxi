import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Star, CheckCircle2, Car, Users, Shield, Palmtree } from 'lucide-react';
import Hero from '@/components/Hero';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
    title: 'Taxi Service to AlUla | Hegra Tours & Heritage Site Transport',
    description: 'Professional taxi service to AlUla helping tourists with Hegra (Madain Saleh) tours, UNESCO heritage site visits, and desert exploration.',
    keywords: ['AlUla taxi', 'Hegra tour taxi', 'Madain Saleh transport', 'AlUla heritage tour'],
};

export default function AlUlaPage() {
    const services = [
        { name: 'Heritage Site Tours', description: 'Hegra & ancient tombs' },
        { name: 'Desert Excursions', description: 'Stunning landscapes' },
        { name: 'Multi-Day Tours', description: 'Extended exploration' },
        { name: 'Airport Transfers', description: 'AlUla International Airport' },
        { name: 'Photography Tours', description: 'Capture ancient wonders' },
        { name: 'Custom Itinerary', description: 'Personalized experiences' },
    ];

    const features = [
        'UNESCO site expertise',
        'Luxury 4x4 vehicles',
        'Professional guides',
        'Flexible schedules',
        'Photography assistance',
        'Premium service',
    ];

    const alulaImages = [
        '/alula-hegra-tombs.webp',
        '/hero-slide-5.webp',
        '/hero-slide-4.webp',
    ];

    const faqs = [
        {
            question: "How do I get from AlUla Airport to Hegra (Madain Saleh)?",
            answer: "We provide private airport transfers from AlUla International Airport (ULH) directly to your hotel or Hegra. The drive takes about 35-45 minutes."
        },
        {
            question: "Can a taxi take me to Elephant Rock and Maraya Concert Hall?",
            answer: "Yes, our chauffeurs can take you to all major attractions including Elephant Rock (Jabal AlFil), Maraya, and Dadan. We can arrange a full-day tour for your convenience."
        },
        {
            question: "Is Uber available in AlUla?",
            answer: "Ride-hailing apps can be scarce in AlUla. It is highly recommended to book a private chauffeur service in advance to ensure reliable transport in this desert region."
        },
        {
            question: "What is the best time to visit AlUla Old Town?",
            answer: "The best time is usually late afternoon or evening when the temperature is cooler. Our drivers can drop you off at the entrance as cars are restricted inside the Old Town."
        },
        {
            question: "Do you offer desert safari transport?",
            answer: "Our 4x4 GMC Yukons are perfect for navigating the terrain around AlUla, offering a comfortable and safe ride for your desert excursions."
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <Hero
                images={alulaImages}
                h1Text="AlUla Taxi Service | Heritage Tours to Hegra & Ancient Sites"
                title={
                    <span className="bg-primary text-black px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        AlUla Taxi Service
                    </span>
                }
                subtitle="Heritage Tours"
                location="Hegra & Ancient Sites"
            />

            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="bg-gray-100 text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block">Our Services</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
                            AlUla Tour & Transport Services
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Explore the ancient wonders of AlUla with our specialized services
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

            {/* Timeless Wonders Gallery */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern-grid.png')] opacity-[0.05]"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Discover Arabia</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white font-serif mt-3 mb-6">Timeless Wonders of AlUla</h2>
                        <p className="text-neutral-400 max-w-2xl mx-auto">
                            From the mirrored reflection of Maraya to the ancient tombs of Hegra, let us guide you through history.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
                        {/* Main Feature - Elephant Rock */}
                        <div className="md:col-span-8 md:row-span-2 relative group rounded-2xl overflow-hidden border border-white/10 h-80 md:h-full">
                            <Image
                                src="/alula-elephant-rock.webp"
                                alt="Elephant Rock (Jabal AlFil) - AlUla"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-8">
                                <h3 className="text-2xl font-bold text-white font-serif mb-2">Elephant Rock</h3>
                                <p className="text-primary text-sm uppercase tracking-widest">Natural Wonder</p>
                            </div>
                        </div>

                        {/* Top Right - Maraya */}
                        <div className="md:col-span-4 relative group rounded-2xl overflow-hidden border border-white/10 h-64 md:h-auto">
                            <Image
                                src="/alula-maraya.webp"
                                alt="Maraya Concert Hall"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6">
                                <h3 className="text-xl font-bold text-white font-serif mb-1">Maraya</h3>
                                <p className="text-primary text-xs uppercase tracking-widest">Mirrored Architecture</p>
                            </div>
                        </div>

                        {/* Middle Right - Old Town */}
                        <div className="md:col-span-4 relative group rounded-2xl overflow-hidden border border-white/10 h-64 md:h-auto">
                            <Image
                                src="/alula-old-town.webp"
                                alt="AlUla Old Town"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6">
                                <h3 className="text-xl font-bold text-white font-serif mb-1">Old Town</h3>
                                <p className="text-primary text-xs uppercase tracking-widest">Ancient Mudbrick</p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="relative group rounded-2xl overflow-hidden border border-white/10 h-64">
                            <Image
                                src="/alula-dadan.webp"
                                alt="Dadan Ancient Kingdom"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6">
                                <h3 className="text-xl font-bold text-white font-serif mb-1">Kingdom of Dadan</h3>
                                <p className="text-primary text-xs uppercase tracking-widest">Lihyanite Tombs</p>
                            </div>
                        </div>
                        <div className="relative group rounded-2xl overflow-hidden border border-white/10 h-64">
                            <Image
                                src="/alula-oasis.webp"
                                alt="AlUla Oasis"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6">
                                <h3 className="text-xl font-bold text-white font-serif mb-1">The Oasis</h3>
                                <p className="text-primary text-xs uppercase tracking-widest">Lush Heritage</p>
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
                                Expert AlUla Tour Specialists
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Experience AlUla's ancient wonders with our knowledgeable guides and premium vehicles. We specialize in UNESCO World Heritage Site tours.
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
                                <div className="text-3xl font-bold text-gray-900 mb-1">Custom</div>
                                <div className="text-sm text-gray-600">Schedules</div>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-2xl text-center border border-gray-200">
                                <Users className="w-8 h-8 text-gray-700 mx-auto mb-3" />
                                <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
                                <div className="text-sm text-gray-600">Tourists</div>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-2xl text-center border border-gray-200">
                                <Star className="w-8 h-8 text-gray-700 mx-auto mb-3" />
                                <div className="text-3xl font-bold text-gray-900 mb-1">5.0</div>
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
                        Ready to Explore AlUla's Ancient Wonders?
                    </h2>
                    <p className="text-lg text-gray-300 mb-8">
                        Book your UNESCO heritage tour now and discover the magic of AlUla!
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
