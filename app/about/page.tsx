import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, Users, Clock, Star, Award, Target, Heart, TrendingUp, CheckCircle, Car, MapPin, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
    title: 'About Us | Umrah Taxi - Royal Transport Services',
    description: 'Learn about Umrah Taxi, the premier luxury transportation service for pilgrims in Saudi Arabia. Dedicated to serving the Guests of Allah with dignity and comfort.',
    keywords: ['about umrah taxi', 'luxury hajj transport', 'vip pilgrim taxi', 'makkah royal transport', 'our mission'],
};

export default function AboutPage() {
    const values = [
        {
            icon: Shield,
            title: 'Uncompromised Safety',
            description: 'Your safety is our sacred duty. We strictly adhere to the highest safety checks and regulations.'
        },
        {
            icon: Clock,
            title: 'Prayer Punctuality',
            description: 'We understand the value of every Salah. Our schedules are optimized to ensure you never miss a prayer.'
        },
        {
            icon: Star,
            title: 'Royal Comfort',
            description: 'Travel in the dignity you deserve. Our fleet offers a peaceful sanctuary for your spiritual reflection.'
        },
        {
            icon: Users,
            title: 'Guest Hospitality',
            description: 'Serving the Guests of Allah with unmatched patience, respect, and traditional Arab hospitality.'
        }
    ];

    const achievements = [
        { number: '15k+', label: 'Pilgrims Served' },
        { number: '100+', label: 'Expert Chauffeurs' },
        { number: '50+', label: 'Luxury Fleet' },
        { number: '24/7', label: 'Support System' }
    ];

    const whyChooseUs = [
        {
            icon: Award,
            title: 'Umrah Specialists',
            description: 'Deep knowledge of Makkah & Madinah routes, ensuring the smoothest access to hotels and Haram.'
        },
        {
            icon: Car,
            title: 'Premium Fleet',
            description: 'From GMC Yukons to spacious Coasters, all our vehicles are 2024 models maintained to showroom standards.'
        },
        {
            icon: MapPin,
            title: 'Wide Coverage',
            description: 'Seamless transfers between Jeddah, Makkah, Madinah, Taif, and all Historical Ziyarat sites.'
        },
        {
            icon: Headphones,
            title: 'Round-the-Clock',
            description: 'Our team monitors your journey 24/7, ready to assist with any changes or requests instantly.'
        }
    ];

    const faqs = [
        {
            question: "Is Umrah Taxi a licensed provider?",
            answer: "Yes, we are a fully licensed and insured transportation service, operating in strict compliance with the Saudi Public Transport Authority regulations for Hajj and Umrah pilgrims."
        },
        {
            question: "Do you offer group bookings?",
            answer: "Absolutely. We specialize in group logistics, offering luxury Toyota Hiace vans and Coaster buses for families and large delegations performing Umrah together."
        },
        {
            question: "How do you ensure pilgrim safety?",
            answer: "Safety is paramount. All our vehicles are GPS-tracked, and our drivers undergo rigorous background checks and safe-driving training."
        },
        {
            question: "Can I book a customized Ziyarat tour?",
            answer: "Yes, our Ziyarat tours are not just rides but guided experiences. Our knowledgeable drivers can take you to all significant historical Islamic sites."
        }
    ];

    return (
        <div className="bg-neutral-950 min-h-screen pt-32 pb-20 relative text-neutral-200 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Hero Section */}
                <div className="text-center mb-20 animate-fade-in-up">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-amber-500/30 bg-white/5 backdrop-blur-md rounded-full mb-6">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>
                        <span className="text-amber-500 text-xs font-bold tracking-[0.2em] uppercase">Who We Are</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-serif">
                        Serving the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">Guests of Allah</span>
                    </h1>

                    <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed font-light">
                        We are more than a transport company; we are your partners in this sacred journey, dedicated to providing a travel experience defined by dignity, comfort, and reliability.
                    </p>
                </div>

                {/* Mission & Vision Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    {/* Mission */}
                    <div className="bg-neutral-900/50 rounded-none p-10 border border-white/5 relative overflow-hidden group hover:border-amber-500/30 transition-colors">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full -mr-8 -mt-8"></div>
                        <div className="flex items-center mb-6">
                            <div className="bg-amber-500/10 p-3 mr-4 border border-amber-500/20">
                                <Target className="w-8 h-8 text-amber-500" />
                            </div>
                            <h2 className="text-3xl font-bold text-white font-serif">Our Mission</h2>
                        </div>
                        <p className="text-neutral-400 text-lg leading-relaxed mb-4">
                            To serve every pilgrim with the highest standard of care, ensuring that transportation is the most seamless part of their ibadah.
                        </p>
                        <p className="text-neutral-400 text-lg leading-relaxed">
                            We aim to remove all worldly travel hassles, allowing you to focus entirely on your connection with the Divine.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-neutral-900/50 rounded-none p-10 border border-white/5 relative overflow-hidden group hover:border-amber-500/30 transition-colors">
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-500/5 rounded-tr-full -ml-8 -mb-8"></div>
                        <div className="flex items-center mb-6">
                            <div className="bg-amber-500/10 p-3 mr-4 border border-amber-500/20">
                                <TrendingUp className="w-8 h-8 text-amber-500" />
                            </div>
                            <h2 className="text-3xl font-bold text-white font-serif">Our Vision</h2>
                        </div>
                        <p className="text-neutral-400 text-lg leading-relaxed mb-4">
                            To set the global benchmark for religious tourism transport, merging modern luxury with traditional Islamic hospitality.
                        </p>
                        <p className="text-neutral-400 text-lg leading-relaxed">
                            We envision a future where every pilgrim's journey is as beautiful and dignified as the destination itself.
                        </p>
                    </div>
                </div>

                {/* Team / Driver Spotlight */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="relative h-[600px] w-full rounded-none overflow-hidden border border-white/10 group">
                        <Image
                            src="/driver-portrait.webp"
                            alt="Professional Saudi Chauffeur"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                        <div className="absolute bottom-8 left-8">
                            <div className="bg-amber-500 text-black text-xs font-bold px-3 py-1 uppercase tracking-widest inline-block mb-2">Our Pride</div>
                            <h3 className="text-3xl font-bold text-white font-serif">Expert Chauffeurs</h3>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif">
                            More Than Just <br /> <span className="text-amber-500">Drivers</span>
                        </h2>
                        <p className="text-neutral-400 text-lg leading-relaxed font-light">
                            Our chauffeurs are the heart of Umrah Taxi. Carefully selected for their experience, patience, and deep knowledge of the Holy Cities, they are not just driving you; they are guiding you.
                        </p>
                        <ul className="space-y-4 pt-4">
                            <li className="flex items-center gap-4">
                                <span className="w-12 h-12 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-amber-500">
                                    <Shield className="w-5 h-5" />
                                </span>
                                <div>
                                    <h4 className="text-white font-bold">Vetted & Trained</h4>
                                    <p className="text-sm text-neutral-500">Background checked and trained in pilgrim etiquette.</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="w-12 h-12 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-amber-500">
                                    <MapPin className="w-5 h-5" />
                                </span>
                                <div>
                                    <h4 className="text-white font-bold">Route Masters</h4>
                                    <p className="text-sm text-neutral-500">Experts in avoiding traffic during prayer times.</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="w-12 h-12 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-amber-500">
                                    <Heart className="w-5 h-5" />
                                </span>
                                <div>
                                    <h4 className="text-white font-bold">Multilingual Support</h4>
                                    <p className="text-sm text-neutral-500">English, Arabic, and Urdu speaking drivers available.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Journey Through History - Gallery */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif">
                            A Journey Through History
                        </h2>
                        <p className="text-neutral-400 max-w-2xl mx-auto">
                            We don't just drive; we guide you through the landmarks that define our Islamic heritage.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer border border-white/10">
                            <Image
                                src="/makkah-clock-tower-new.webp"
                                alt="Makkah Royal Clock Tower"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <h3 className="text-xl font-bold text-white font-serif mb-1">Makkah Al Mukarramah</h3>
                                <p className="text-xs text-amber-500 uppercase tracking-widest">The Holiest City</p>
                            </div>
                        </div>

                        <div className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer border border-white/10 md:-mt-8">
                            <Image
                                src="/madinah-umbrellas.webp"
                                alt="Masjid Al Nabawi Umbrellas"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <h3 className="text-xl font-bold text-white font-serif mb-1">Madinah Al Munawwarah</h3>
                                <p className="text-xs text-amber-500 uppercase tracking-widest">City of Peace</p>
                            </div>
                        </div>

                        <div className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer border border-white/10">
                            <Image
                                src="/zip-uhud.webp"
                                alt="Mount Uhud"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <h3 className="text-xl font-bold text-white font-serif mb-1">Mount Uhud</h3>
                                <p className="text-xs text-amber-500 uppercase tracking-widest">Historical Ziyarat</p>
                            </div>
                        </div>

                        <div className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer border border-white/10">
                            <Image
                                src="/zip-quba.webp"
                                alt="Masjid Quba"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <h3 className="text-xl font-bold text-white font-serif mb-1">Masjid Quba</h3>
                                <p className="text-xs text-amber-500 uppercase tracking-widest">First Mosque</p>
                            </div>
                        </div>

                        <div className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer border border-white/10 md:-mt-8">
                            <Image
                                src="/zip-hira.webp"
                                alt="Cave of Hira"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <h3 className="text-xl font-bold text-white font-serif mb-1">Jabal Al-Nour</h3>
                                <p className="text-xs text-amber-500 uppercase tracking-widest">Cave of Hira</p>
                            </div>
                        </div>

                        <div className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer border border-white/10">
                            <Image
                                src="/zip-mina.webp"
                                alt="Mina Tent City"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <h3 className="text-xl font-bold text-white font-serif mb-1">Mina</h3>
                                <p className="text-xs text-amber-500 uppercase tracking-widest">Tent City</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Core Values */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif">
                            Our Core Values
                        </h2>
                        <div className="h-1 w-24 bg-amber-500 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-neutral-900 border border-white/5 p-8 hover:border-amber-500/50 transition-all hover:-translate-y-2 duration-300 group"
                            >
                                <div className="w-14 h-14 bg-white/5 rounded-none flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors">
                                    <value.icon className="w-6 h-6 text-neutral-300 group-hover:text-black" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 font-serif">
                                    {value.title}
                                </h3>
                                <p className="text-neutral-500 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Fleet Experience Gallery */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif">
                            Travel in Dignity
                        </h2>
                        <p className="text-neutral-400 max-w-2xl mx-auto">
                            Our fleet is chosen for maximum comfort, silence, and presence.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="group relative h-64 rounded-xl overflow-hidden cursor-pointer border border-white/10">
                            <Image
                                src="/gmc-yukon-context.webp"
                                alt="GMC Yukon VIP Transport"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <div className="absolute bottom-4 left-6">
                                <h3 className="text-lg font-bold text-white font-serif">Royal VIP</h3>
                                <p className="text-xs text-amber-500 uppercase tracking-widest">GMC Yukon</p>
                            </div>
                        </div>

                        <div className="group relative h-64 rounded-xl overflow-hidden cursor-pointer border border-white/10">
                            <Image
                                src="/toyota-hiace-context.webp"
                                alt="Toyota Hiace Group Travel"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <div className="absolute bottom-4 left-6">
                                <h3 className="text-lg font-bold text-white font-serif">Group Family</h3>
                                <p className="text-xs text-amber-500 uppercase tracking-widest">Toyota Hiace</p>
                            </div>
                        </div>

                        <div className="group relative h-64 rounded-xl overflow-hidden cursor-pointer border border-white/10">
                            <Image
                                src="/hyundai-staria-context.webp"
                                alt="Hyundai Staria Luxury Van"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <div className="absolute bottom-4 left-6">
                                <h3 className="text-lg font-bold text-white font-serif">Modern Comfort</h3>
                                <p className="text-xs text-amber-500 uppercase tracking-widest">Hyundai Staria</p>
                            </div>
                        </div>
                        <div className="group relative h-64 rounded-xl overflow-hidden cursor-pointer border border-white/10 lg:hidden">
                            <Image
                                src="/toyota-camry-context.webp"
                                alt="Toyota Camry Sedan"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <div className="absolute bottom-4 left-6">
                                <h3 className="text-lg font-bold text-white font-serif">City Premium</h3>
                                <p className="text-xs text-amber-500 uppercase tracking-widest">Toyota Camry</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Achievements Stats */}
                <div className="relative bg-neutral-900 border-y border-white/10 p-12 mb-24 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/pattern-grid.png')] opacity-[0.05]"></div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                        {achievements.map((achievement, index) => (
                            <div key={index} className="text-center group">
                                <div className="text-4xl md:text-6xl font-bold text-white mb-2 font-serif group-hover:text-amber-500 transition-colors">
                                    {achievement.number}
                                </div>
                                <div className="text-amber-500/80 text-sm uppercase tracking-widest font-bold">
                                    {achievement.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif">
                            Why Choose Umrah Taxi?
                        </h2>
                        <p className="text-neutral-400">Distinguished service for a distinguished journey.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {whyChooseUs.map((item, index) => (
                            <div
                                key={index}
                                className="bg-neutral-900/50 p-8 border border-white/5 flex items-start hover:bg-neutral-900 transition-all group"
                            >
                                <div className="bg-amber-500/10 p-3 mr-6 flex-shrink-0 group-hover:bg-amber-500 transition-colors">
                                    <item.icon className="w-6 h-6 text-amber-500 group-hover:text-black" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2 font-serif group-hover:text-amber-500 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-neutral-400 leading-relaxed text-sm">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="max-w-3xl mx-auto mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6 font-serif">Questions & Answers</h2>
                    </div>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-neutral-900/50 border border-white/5 px-6 data-[state=open]:border-amber-500/30 transition-colors">
                                <AccordionTrigger className="text-left font-bold text-white hover:text-amber-500 hover:no-underline">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-neutral-400 pt-2 pb-4 leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                {/* CTA Section */}
                <div className="relative rounded-none overflow-hidden p-12 text-center border border-amber-500/30">
                    <div className="absolute inset-0 bg-neutral-900"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-amber-950/20 to-neutral-900"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif">
                            Ready for your <span className="text-amber-500">Sacred Journey?</span>
                        </h2>
                        <p className="text-lg text-neutral-400 mb-8 max-w-2xl mx-auto">
                            Book your premium transport today and experience the peace of mind you deserve.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/booking">
                                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-bold text-lg px-12 py-8 rounded-none shadow-[0_0_30px_rgba(245,158,11,0.3)] transition-transform hover:scale-105">
                                    Book Now
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button size="lg" variant="outline" className="bg-transparent text-white border-white/20 hover:bg-white hover:text-black font-bold text-lg px-12 py-8 rounded-none backdrop-blur-sm">
                                    Contact Support
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
