"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import BookingForm from './BookingForm';
import { useState, useEffect } from 'react';

interface HeroProps {
    images?: string[];
    title?: React.ReactNode;
    subtitle?: string;
    location?: string;
    h1Text?: string;
}

export default function Hero(props: HeroProps) {
    const { images } = props;
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = images || [
        '/makkah-clock-tower.webp',
        '/madinah-prophets-mosque.webp',
        '/gmc-yukon.webp',
    ];

    const slideAltTexts = [
        "Makkah Royal Clock Tower",
        "Prophet's Mosque Madinah",
        "Luxury GMC Yukon Fleet"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <section className="relative min-h-screen w-full overflow-x-hidden bg-black">
            {/* Fullscreen Background Slider */}
            <div className="absolute inset-0 z-0">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <Image
                            src={slide}
                            alt={slideAltTexts[index] || "Luxury Transport"}
                            fill
                            priority={index === 0}
                            className="object-cover"
                            quality={85}
                        />
                        {/* Luxury Overlay: Deep Black with Gold Vignette */}
                        <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/30" />
                    </div>
                ))}
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12">

                    {/* Typography Section - Center on Mobile, Left on Desktop */}
                    <div className="lg:col-span-7 space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start animate-fade-in-up">
                        {/* Premium Badge */}
                        <div className="inline-flex items-center gap-3 px-5 py-2 border border-amber-500/30 bg-black/40 backdrop-blur-md rounded-sm">
                            <span className="h-[1px] w-8 bg-amber-500"></span>
                            <span className="text-amber-400 text-xs font-bold tracking-[0.2em] uppercase font-serif">Royal Travel Experience</span>
                            <span className="h-[1px] w-8 bg-amber-500"></span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-medium text-white leading-[1.1] tracking-tight">
                            Journey of <br />
                            <span className="text-amber-500 drop-shadow-lg">
                                Faith & Comfort
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-neutral-300 font-light leading-relaxed max-w-xl">
                            Premium Umrah taxi services for the guests of Allah. Experience certified luxury with our GMC Yukon fleet in Makkah, Madinah, and Jeddah.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 pt-6 w-full sm:w-auto">
                            <Link href="/booking" className="w-full sm:w-auto">
                                <Button className="w-full h-14 px-10 bg-amber-600 hover:bg-amber-700 text-white font-serif tracking-widest text-sm uppercase rounded-sm border border-amber-500/50 shadow-[0_0_20px_rgba(217,119,6,0.3)] transition-all hover:scale-105">
                                    Book Now
                                </Button>
                            </Link>
                            <Link href="/fleet" className="w-full sm:w-auto">
                                <Button variant="outline" className="w-full h-14 px-10 bg-transparent border-amber-500/50 text-white hover:bg-amber-500 hover:text-black font-serif tracking-widest text-sm uppercase rounded-sm backdrop-blur-sm transition-all shadow-[0_0_15px_rgba(217,119,6,0.1)] hover:shadow-[0_0_20px_rgba(217,119,6,0.4)]">
                                    View Fleet
                                </Button>
                            </Link>
                        </div>

                        {/* Trust Badges */}
                        <div className="pt-8 flex flex-wrap justify-center lg:justify-start gap-8 text-white/60 text-sm font-light">
                            <div className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-amber-500" /> 5-Star Service
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> 2024 Models
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> 24/7 Support
                            </div>
                        </div>
                    </div>

                    {/* Booking Form Widget - Floating Right */}
                    <div className="lg:col-span-5 relative animate-fade-in-up delay-200 w-full mt-6 lg:mt-0">
                        <div className="bg-black/40 backdrop-blur-xl p-1 rounded-sm border border-amber-500/30 max-h-[calc(100vh-180px)] overflow-y-auto scrollbar-thin scrollbar-thumb-amber-500/50 scrollbar-track-white/5">
                            <div className="bg-black/90 p-4 sm:p-5 lg:p-6 border border-white/5">
                                <div className="text-center mb-4 sm:mb-5 pb-3 border-b border-white/10">
                                    <h3 className="text-base sm:text-lg font-serif text-white tracking-wide">Plan Your Trip</h3>
                                    <p className="text-amber-500/80 text-xs uppercase tracking-widest mt-1">Instant Confirmation</p>
                                </div>
                                <BookingForm variant="hero" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
