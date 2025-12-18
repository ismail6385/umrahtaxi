"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Shield, CheckCircle, Sparkles, MapPin, Clock, Award, Phone } from 'lucide-react';
import BookingForm from './BookingForm';
import { useState, useEffect } from 'react';

interface HeroProps {
    images?: string[];
    title?: React.ReactNode;
    subtitle?: string;
    location?: string;
    h1Text?: string; // Custom H1 text for SEO
}

export default function Hero(props: HeroProps) {
    const { images, title, subtitle, location, h1Text } = props;
    const [currentSlide, setCurrentSlide] = useState(0);

    // Use custom images if provided, otherwise use default homepage slides
    const slides = images || [
        '/hero-slide-1.webp', // Kaaba Makkah
        '/hero-slide-2.webp', // Madinah Mosque
        '/hero-slide-3.webp', // Luxury Car
        '/hero-slide-4.webp', // Jeddah
        '/hero-slide-5.webp', // Riyadh
    ];

    // Alt text for each slide (SEO optimized with keywords)
    const slideAltTexts = images 
        ? images.map((img, idx) => {
            // Extract meaningful alt text from image path with SEO keywords
            const imgLower = img.toLowerCase();
            if (imgLower.includes('makkah') || imgLower.includes('kaaba')) {
                return 'Makkah Kaaba at night - Premium Umrah taxi service from Jeddah Airport to Makkah, Saudi Arabia';
            }
            if (imgLower.includes('madinah') || imgLower.includes('mosque') || imgLower.includes('prophet')) {
                return 'Prophet\'s Mosque in Madinah - Professional Ziyarat tour service and Umrah taxi from Makkah to Madinah';
            }
            if (imgLower.includes('jeddah') || imgLower.includes('corniche') || imgLower.includes('airport')) {
                return 'Jeddah Corniche sunset view - Airport transfer service from King Abdulaziz International Airport to Makkah and Madinah';
            }
            if (imgLower.includes('taif') || imgLower.includes('mountain') || imgLower.includes('rose')) {
                return 'Taif mountains and rose gardens - Luxury intercity taxi service from Jeddah to Taif, Saudi Arabia';
            }
            if (imgLower.includes('alula') || imgLower.includes('hegra') || imgLower.includes('tomb')) {
                return 'AlUla Hegra tombs UNESCO World Heritage Site - Heritage tour and luxury transportation service in Saudi Arabia';
            }
            return `Premium chauffeur and taxi service in Saudi Arabia - Professional airport transfer and luxury transportation`;
        })
        : [
            'Makkah Kaaba at night - Premium Umrah taxi service from Jeddah Airport to Makkah, Saudi Arabia',
            'Prophet\'s Mosque in Madinah - Professional Ziyarat tour service and Umrah taxi from Makkah to Madinah',
            'Luxury GMC Yukon chauffeur vehicle - VIP transportation and premium taxi service in Saudi Arabia',
            'Jeddah city view - Airport transfer service from King Abdulaziz International Airport to Makkah and Madinah',
            'Riyadh cityscape - Premium intercity taxi and chauffeur service from Jeddah to Riyadh, Saudi Arabia'
        ];

    // Default text content for homepage slides
    const defaultSlideContent = [
        {
            highlight: <span className="bg-primary text-black px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">Umrah Taxi Service!</span>,
            subtitle: "Comfortable & Reliable",
            location: "Makkah to Madinah"
        },
        {
            highlight: <span className="bg-primary text-black px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">Ziyarat Tours!</span>,
            subtitle: "Sacred Sites Visit",
            location: "Madinah Holy Places"
        },
        {
            highlight: <span className="bg-primary text-black px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">VIP Chauffeur!</span>,
            subtitle: "Luxury Experience",
            location: "Premium Fleet"
        },
        {
            highlight: <span className="bg-primary text-black px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">Airport Transfer!</span>,
            subtitle: "Jeddah Airport",
            location: "To Makkah & Madinah"
        },
        {
            highlight: <span className="bg-primary text-black px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">City Tours!</span>,
            subtitle: "Explore Saudi Arabia",
            location: "Riyadh & Beyond"
        }
    ];

    // Text content for each slide (either from props or default)
    const slideContent = title && subtitle && location
        ? [{ highlight: title, subtitle: subtitle, location: location }]
        : defaultSlideContent;

    // Auto-slide every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    // Get current slide content (use modulo to stay within bounds)
    const currentContent = slideContent[currentSlide % slideContent.length];

    return (
        <section className="relative bg-white text-gray-900 overflow-hidden min-h-screen flex items-center" aria-label="Hero section">
            {/* Background Image Carousel - SEO Optimized with proper img tags */}
            <div className="absolute inset-0 z-0">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <Image
                            src={slide}
                            alt={slideAltTexts[index] || `Premium taxi service in Saudi Arabia - ${index + 1}`}
                            fill
                            priority={index === 0}
                            quality={90}
                            className="object-cover"
                            sizes="100vw"
                            aria-hidden={index !== currentSlide}
                        />
                    </div>
                ))}
                {/* Subtle dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
            </div>




            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
                    {/* Left Content */}
                    <div className="lg:col-span-7 space-y-6 sm:space-y-8">

                        {/* Main Heading - SEO Optimized: Static H1 for better SEO */}
                        <div className="space-y-4 sm:space-y-6 animate-fade-in-up delay-100">
                            {/* Static H1 for SEO - Main keyword always visible to search engines */}
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-tight sm:leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                                {h1Text || "Premium Taxi Service KSA"}
                            </h1>

                            {/* Dynamic H2 for visual appeal - Changes with slides */}
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight sm:leading-tight" key={currentSlide}>
                                <span className="block text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                                    {currentContent.subtitle}
                                </span>
                                <span className="block text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] mt-1 sm:mt-2">
                                    {currentContent.location}
                                </span>
                            </h2>

                            {/* Subtitle - SEO optimized description */}
                            <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] max-w-2xl mt-4 sm:mt-6">
                                Professional chauffeur and airport transfer services across Saudi Arabia.
                                We help travelers, pilgrims, and business executives with luxury vehicles and 24/7 availability.
                            </p>
                        </div>


                    </div>

                    {/* Right Side - Booking Form */}
                    <div className="lg:col-span-5 w-full animate-fade-in-left delay-300">
                        <BookingForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
