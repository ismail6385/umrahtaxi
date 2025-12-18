import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Users, Briefcase, CheckCircle2, Star, Shield, Car, Check } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'GMC Yukon - Royal VIP Transport | Umrah Taxi',
    description: 'Book our premium GMC Yukon for VIP Umrah transport. Luxury interior, spacious seating for 7 passengers, perfect for executive travel and family Ziyarat.',
    keywords: ['GMC Yukon rental Makkah', 'luxury SUV Umrah', 'VIP transport Saudi Arabia', 'executive chauffeur', 'royal transport'],
};

export default function GMCYukonPage() {
    const features = [
        'Luxury Leather Interiors',
        'Extra Extended Legroom',
        'Premium Bose Sound System',
        'Multi-Zone Climate Control',
        'Privacy Tinted Windows',
        'Professional Uniformed Chauffeur',
        'Complimentary High-Speed WiFi',
        'USB Charging Ports & Water',
    ];

    const specifications = [
        { label: 'Passengers', value: '7 Adults' },
        { label: 'Luggage', value: '5 Large Bags' },
        { label: 'Class', value: 'Royal VIP SUV' },
        { label: 'Transmission', value: 'Automatic' },
    ];

    const idealFor = [
        'VIP Airport Transfers',
        'Executive Business Travel',
        'Royal Family Umrah Trips',
        'Corporate Delegations',
        'Luxury Ziyarat Tours',
        'Special Dignitary Visits',
    ];

    const faqs = [
        {
            question: "Does the GMC Yukon come with a professional driver?",
            answer: "Yes, all our Royal GMC Yukon rentals include a professional, well-trained, and uniformed chauffeur who speaks multiple languages. We do not offer self-drive options to ensure the highest level of service."
        },
        {
            question: "How many passengers can the GMC Yukon accommodate comfortably?",
            answer: "The GMC Yukon is designed to carry 7 passengers in absolute comfort, with ample dedicated space for 5 large luggage pieces, ensuring a relaxing journey between Holy Cities."
        },
        {
            question: "Is fuel and toll charges included in the booking?",
            answer: "Yes, our Royal Service Pricing is all-inclusive. Fuel, road tolls, airport parking fees, and driver accommodation are all covered in your quoted price."
        },
        {
            question: "Can I book the GMC Yukon for a trip from Jeddah to Makkah?",
            answer: "Absolutely. The GMC Yukon is our most requested vehicle for the Jeddah-Makkah route, providing a smooth, silent, and safe ride perfectly suited for the start of your spiritual journey."
        }
    ];

    return (
        <div className="bg-neutral-950 min-h-screen pt-32 pb-20 relative text-neutral-200">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <JsonLdFAQ faqs={faqs} />

                {/* Breadcrumb-ish */}
                <div className="flex items-center gap-2 text-sm text-neutral-500 mb-6 uppercase tracking-widest">
                    <Link href="/fleet" className="hover:text-amber-500 transition-colors">Fleet</Link>
                    <span>/</span>
                    <span className="text-amber-500">GMC Yukon</span>
                </div>

                {/* Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-center">
                    {/* Content */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 border border-amber-500/30 bg-amber-500/10 rounded-full">
                            <Star className="w-3.5 h-3.5 text-amber-500" />
                            <span className="text-amber-500 text-[10px] font-bold tracking-[0.2em] uppercase">The Royal Choice</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold text-white font-serif leading-none">
                            GMC <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">Yukon</span>
                        </h1>

                        <p className="text-lg text-neutral-400 leading-relaxed border-l-2 border-amber-500/30 pl-6">
                            Experience the pinnacle of American luxury and comfort. Designed for those who demand excellence, the GMC Yukon offers unmatched space, silence, and presence for your sacred journey.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link href="/booking?vehicle=GMC%20Yukon">
                                <Button className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white font-serif tracking-widest text-sm uppercase px-8 py-6 rounded-none shadow-[0_0_20px_rgba(217,119,6,0.3)] hover:scale-105 transition-all">
                                    Book Now
                                </Button>
                            </Link>
                            <Link href="#details">
                                <Button variant="outline" className="w-full sm:w-auto border-white/20 text-white hover:bg-white hover:text-black font-serif tracking-widest text-sm uppercase px-8 py-6 rounded-none backdrop-blur-sm">
                                    View Details
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="lg:col-span-7 relative">
                        <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden border border-white/10 shadow-2xl group">
                            <Image
                                src="/gmc-yukon.webp"
                                alt="GMC Yukon Luxury"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-neutral-900/60 via-transparent to-transparent"></div>
                        </div>
                        {/* Box Decoration */}
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-500/10 -z-10 rounded-full blur-2xl"></div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div id="details" className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
                    {[
                        { icon: Star, label: "Safety Rating", value: "5-Star" },
                        { icon: Users, label: "Capacity", value: "7 Pax" },
                        { icon: Briefcase, label: "Luggage", value: "5 Bags" },
                        { icon: Shield, label: "Reliability", value: "100%" },
                    ].map((stat, i) => (
                        <div key={i} className="bg-white/5 border border-white/5 p-6 backdrop-blur-sm text-center group hover:border-amber-500/30 transition-colors">
                            <stat.icon className="w-8 h-8 text-neutral-500 mx-auto mb-3 group-hover:text-amber-500 transition-colors" />
                            <div className="text-2xl font-bold text-white mb-1 font-serif">{stat.value}</div>
                            <div className="text-xs uppercase tracking-widest text-neutral-500">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Features & Ideal For Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    {/* Features */}
                    <div className="bg-neutral-900/50 p-8 border border-white/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-700"></div>
                        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 font-serif">
                            <span className="w-8 h-[1px] bg-amber-500"></span> Premium Features
                        </h2>
                        <ul className="grid gap-4">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center text-neutral-400 group-hover:text-neutral-300 transition-colors">
                                    <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center mr-4 border border-amber-500/20">
                                        <Check className="w-3 h-3 text-amber-500" />
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Context Visual - Makkah Arrival */}
                    <div className="relative h-full min-h-[400px] rounded-sm overflow-hidden border border-white/10 group">
                        <Image
                            src="/gmc-yukon-context.webp"
                            alt="GMC Yukon at Makkah Clock Tower"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <div className="mb-4">
                                <span className="text-amber-500 text-xs font-bold tracking-[0.2em] uppercase">The Experience</span>
                                <h3 className="text-2xl font-bold text-white font-serif mt-2">Arrive in Divinity</h3>
                            </div>
                            <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                                Make your entrance to the Holy City as dignified as your intentions. Perfect for VIP hotel transfers and Ziyarat.
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {idealFor.slice(0, 4).map((use, index) => (
                                    <span key={index} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-white/10 backdrop-blur-md text-white border border-white/10 rounded-sm">
                                        {use}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Specifications */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-white mb-8 font-serif text-center">Technical Specifications</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {specifications.map((spec, index) => (
                            <div key={index} className="bg-neutral-900 p-6 border-l-2 border-amber-500/20 hover:border-amber-500 transition-colors">
                                <div className="text-xs text-neutral-500 uppercase tracking-widest mb-2">{spec.label}</div>
                                <div className="text-xl font-bold text-white font-serif">{spec.value}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQ Section - Dark Mode */}
                <div className="max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl font-bold text-white mb-10 text-center font-serif">Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-neutral-900/50 border border-white/5 px-6 data-[state=open]:border-amber-500/30 transition-colors">
                                <AccordionTrigger className="text-left font-bold text-white hover:text-amber-500 hover:no-underline">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-neutral-400 pt-2 pb-4 leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                {/* CTA - Royal Banner */}
                <div className="relative rounded-none overflow-hidden p-12 text-center border border-amber-500/30">
                    <div className="absolute inset-0 bg-neutral-900"></div>
                    <div className="absolute inset-0 bg-[url('/pattern-grid.png')] opacity-[0.05]"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-amber-950/20 to-neutral-900"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif">
                            Ready for the <span className="text-amber-500">Royal Experience?</span>
                        </h2>
                        <p className="text-lg text-neutral-400 mb-8 max-w-2xl mx-auto">
                            Secure your GMC Yukon today and elevate your pilgrimage with unmatched comfort and dignity.
                        </p>
                        <Link href="/booking?vehicle=GMC%20Yukon">
                            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-bold text-lg px-12 py-8 rounded-none shadow-[0_0_30px_rgba(245,158,11,0.3)] transition-transform hover:scale-105">
                                Book This Vehicle
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
