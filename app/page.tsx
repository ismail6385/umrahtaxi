"use client";

import Hero from '@/components/Hero';
import Script from 'next/script';
import Image from 'next/image';
import { Plane, MapPin, Building2, Shield, Clock, Award, Star, CheckCircle2, Users, Car, ArrowRight, Camera, Calendar } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import JsonLdFAQ from '@/components/JsonLdFAQ';

export default function Home() {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  // Enhanced Structured Data with multiple schema types






  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Taxi Service KSA",
    "url": "https://taxiserviceksa.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://taxiserviceksa.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // High-Quality Images for Hero Slider
  const heroImages = [
    '/makkah-kaaba-night.webp', // Makkah
    '/madinah-prophets-mosque.webp', // Madinah
    '/jeddah-corniche-sunset.webp', // Jeddah
    '/taif-mountains-view.webp', // Taif
    '/alula-hegra-tombs.webp', // AlUla
  ];

  // Services data with RDF Triple structure and Correct Links
  const services = [
    {
      title: "Airport Transfer Jeddah",
      description: "Professional airport transfer service in Jeddah provides 24/7 chauffeur service from King Abdulaziz International Airport to Makkah, Madinah, and all Jeddah locations.",
      rdfTriple: "Airport transfer Jeddah → provides → 24/7 chauffeur service from King Abdulaziz Airport",
      icon: Plane,
      link: "/locations/jeddah",
      price: "From SAR 150"
    },
    {
      title: "Umrah Taxi Service",
      description: "Dedicated Umrah taxi service specializes in comfortable transportation for pilgrims between Makkah and Madinah with experienced drivers and spacious vehicles.",
      rdfTriple: "Umrah taxi → specializes in → comfortable transportation for pilgrims",
      icon: MapPin,
      link: "/locations/makkah",
      price: "From SAR 400"
    },
    {
      title: "AlUla Heritage Tours",
      description: "Luxury tour service to AlUla provides comfortable travel to Hegra, Elephant Rock, and ancient tombs with knowledgeable local guides.",
      rdfTriple: "AlUla tour → provides → luxury travel to heritage sites",
      icon: Building2,
      link: "/locations/alula",
      price: "Custom Quote"
    }
  ];

  // Fleet data with Links
  const fleet = [
    {
      name: "GMC Yukon",
      image: "/gmc-yukon.webp",
      passengers: 7,
      luggage: 5,
      features: ["Luxury Interior", "Extra Legroom", "VIP Experience"],
      link: "/fleet/gmc-yukon"
    },
    {
      name: "Toyota Camry",
      image: "/toyota-camry.webp",
      passengers: 4,
      luggage: 2,
      features: ["Comfortable Seating", "AC", "Economic Choice"],
      link: "/fleet/toyota-camry"
    },
    {
      name: "Hyundai Staria",
      image: "/hyundai-staria.webp",
      passengers: 7,
      luggage: 4,
      features: ["Modern Design", "Spacious", "Family Travel"],
      link: "/fleet/hyundai-staria"
    },
    {
      name: "Toyota Hiace",
      image: "/toyota-hiace.webp",
      passengers: 11,
      luggage: 16,
      features: ["Group Travel", "Spacious Interior", "Umrah Groups"],
      link: "/fleet/toyota-hiace"
    },
    {
      name: "Toyota Coaster",
      image: "/toyota-coaster.webp",
      passengers: 17,
      luggage: 20,
      features: ["Large Groups", "Tour Bus", "Corporate Events"],
      link: "/fleet/toyota-coaster"
    },
    {
      name: "Hyundai Starex",
      image: "/hyundai-starex.webp",
      passengers: 7,
      luggage: 10,
      features: ["Family Friendly", "Comfortable", "Reliable"],
      link: "/fleet/hyundai-starex"
    }
  ];

  // Service areas
  const serviceAreas = [
    "Jeddah", "Makkah", "Madinah", "Riyadh", "Dammam", "Taif", "Al Khobar", "Yanbu"
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Ahmed Al-Rashid",
      location: "Jeddah",
      rating: 5,
      text: "Excellent airport transfer service from King Abdulaziz Airport to Makkah. Professional driver, clean vehicle, and very punctual. Highly recommended!",
      service: "Airport Transfer"
    },
    {
      name: "Fatima Hassan",
      location: "Madinah",
      rating: 5,
      text: "Used their Umrah taxi service from Makkah to Madinah. The driver was very knowledgeable about Ziyarat locations and made our journey comfortable.",
      service: "Umrah Taxi"
    },
    {
      name: "Mohammed bin Salman",
      location: "Riyadh",
      rating: 5,
      text: "Professional VIP chauffeur service for my business meetings in Riyadh. GMC Yukon was luxurious and the driver was very professional.",
      service: "VIP Chauffeur"
    },
    {
      name: "Sarah Abdullah",
      location: "Makkah",
      rating: 5,
      text: "Booked a Toyota Hiace for our family Umrah trip. The vehicle was spacious and comfortable for all 10 of us. Driver was patient and helpful throughout the journey.",
      service: "Group Travel"
    },
    {
      name: "Khalid Al-Otaibi",
      location: "Dammam",
      rating: 5,
      text: "Intercity transfer from Riyadh to Dammam was smooth and comfortable. Driver was on time and the Toyota Camry was in excellent condition. Will use again!",
      service: "Intercity Travel"
    },
    {
      name: "Aisha Mohammed",
      location: "Jeddah",
      rating: 5,
      text: "Best taxi service in Jeddah! Used them multiple times for airport pickups. Always reliable, professional, and affordable. The booking process is very easy.",
      service: "Airport Transfer"
    },
    {
      name: "Omar Hassan",
      location: "Taif",
      rating: 5,
      text: "Hired Toyota Coaster for our corporate event. The bus was clean, modern, and perfect for our group of 15. Driver was professional and punctual.",
      service: "Corporate Events"
    },
    {
      name: "Layla Ahmed",
      location: "Madinah",
      rating: 5,
      text: "Wonderful experience with their Ziyarat tour service. The driver knew all the historical sites and gave us enough time at each location. Very respectful and knowledgeable.",
      service: "Ziyarat Tours"
    },
    {
      name: "Abdullah Rahman",
      location: "Riyadh",
      rating: 5,
      text: "Used their chauffeur service for airport transfer to King Khalid Airport. Flight was delayed but driver waited patiently. Excellent customer service!",
      service: "Airport Transfer"
    },
    {
      name: "Mariam Ali",
      location: "Makkah",
      rating: 5,
      text: "Booked Hyundai Starex for family trip from Jeddah to Makkah. Clean vehicle, professional driver, and very comfortable ride. Highly recommend for families!",
      service: "Family Travel"
    }
  ];

  // FAQ data with RDF answers
  const faqs = [
    {
      question: "Do you provide airport transfer from Jeddah Airport to Makkah?",
      answer: "Yes! Our airport transfer service in Jeddah provides professional chauffeur service from King Abdulaziz International Airport to Makkah. The journey takes approximately 1-1.5 hours. We offer meet and greet service, flight tracking, and luxury vehicles (GMC Yukon, Toyota Camry, Hyundai Staria)."
    },
    {
      question: "How much does Umrah taxi from Makkah to Madinah cost?",
      answer: "Our Umrah taxi service from Makkah to Madinah starts from SAR 400 for a comfortable vehicle. The price includes experienced drivers who specialize in Umrah transportation, spacious vehicles for families (up to 7 passengers), and prayer stops during the 4-5 hour journey."
    },
    {
      question: "Do you offer 24/7 service?",
      answer: "Yes! Taxi Service KSA provides 24/7 chauffeur service across Saudi Arabia. Our professional drivers are available round-the-clock for airport transfers, Umrah transportation, and intercity travel in Jeddah, Makkah, Madinah, and Riyadh."
    },
    {
      question: "What vehicles do you have for VIP service?",
      answer: "Our VIP chauffeur service provides luxury vehicles including GMC Yukon (7 passengers), Hyundai Staria (7 passengers), and Toyota Camry (4 passengers). All vehicles feature leather seats, air conditioning, Wi-Fi, and professional drivers in business attire."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Multiple Schema Markup for Enhanced SEO */}



      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <JsonLdFAQ faqs={faqs} />

      {/* Hero Section with New HD Images */}
      <Hero images={heroImages} />

      {/* Services Section - RDF Optimized */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="bg-primary text-black font-semibold tracking-wider uppercase text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full inline-block">Our Services</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 sm:mt-4 mb-4 sm:mb-6 px-4">
              Premium Chauffeur Services in KSA
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Taxi Service KSA provides professional chauffeur and airport transfer services across Saudi Arabia.
              We help travelers, pilgrims, and business executives with luxury vehicles and 24/7 availability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Link key={index} href={`${service.link}?service=${encodeURIComponent(service.title)}`} className="block group h-full">
                <div className="h-full bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-gray-900 transition-all duration-300 border border-gray-200 shadow-md hover:shadow-2xl hover:border-primary/50 relative overflow-hidden flex flex-col">

                  {/* Hover Accent */}
                  <div className="absolute top-0 left-0 w-2 h-full bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>

                  {/* Top Row: Icon & Arrow */}
                  <div className="flex justify-between items-start mb-4 sm:mb-6">
                    <div className="bg-gray-50 group-hover:bg-white/10 w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center transition-colors duration-300">
                      <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-gray-900 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 group-hover:text-white transform rotate-0 group-hover:-rotate-45 transition-all duration-300" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-white mb-2 sm:mb-3 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-300 leading-relaxed transition-colors duration-300 line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom: Action Label */}
                  <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100 group-hover:border-gray-800 transition-colors duration-300">
                    <span className="bg-primary text-black text-xs font-bold tracking-widest uppercase px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full inline-block">
                      Book Now
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Services Button */}
          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <Link href="/locations/makkah">
              <Button size="lg" className="bg-black text-white hover:bg-gray-900 font-bold px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all">
                View All Destinations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="bg-primary text-black font-semibold tracking-wider uppercase text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full inline-block">Process</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 sm:mt-4 mb-4 sm:mb-6 px-4">
              How It Works
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Booking your premium ride is simple and takes less than 2 minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 relative">
            {/* Connecting Line (Desktop Only) */}
            <div className="hidden md:block absolute top-16 sm:top-20 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-10"></div>

            {/* Step 1 */}
            <div className="text-center bg-white pt-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-xl border-2 sm:border-4 border-white relative z-10">
                <Car className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">1. Select Vehicle</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-2 sm:px-4">
                Choose from our luxury fleet of GMC Yukons, Sedans, or Vans based on your needs.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center bg-white pt-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-primary text-black rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-xl border-2 sm:border-4 border-white relative z-10">
                <Calendar className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">2. Book Online</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-2 sm:px-4">
                Enter your pickup details and flight information. Instant confirmation via email.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center bg-white pt-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-xl border-2 sm:border-4 border-white relative z-10">
                <MapPin className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">3. Enjoy the Ride</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-2 sm:px-4">
                Your professional chauffeur will meet you at the pickup point. Relax and enjoy the journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Preview */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-6 -left-6 sm:-top-10 sm:-left-10 w-32 h-32 sm:w-40 sm:h-40 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -right-6 sm:-bottom-10 sm:-right-10 w-32 h-32 sm:w-40 sm:h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 sm:border-8 border-white">
                <Image
                  src="/gmc-yukon.webp"
                  alt="Luxury GMC Yukon interior - Premium chauffeur service vehicle in Saudi Arabia"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  priority={false}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                  </div>
                  <div>
                    <div className="font-bold text-xl sm:text-2xl text-gray-900">10+ Years</div>
                    <div className="text-xs sm:text-sm text-gray-600">Of Excellence</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="bg-primary text-black font-semibold tracking-wider uppercase text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full inline-block mb-4 sm:mb-6">Who We Are</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Redefining Luxury Travel in Saudi Arabia
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                At Taxi Service KSA, we don't just provide a ride; we deliver an experience. We are the leading choice for pilgrims, business travelers, and families seeking reliability and comfort.
              </p>
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <li className="flex items-center gap-2 sm:gap-3 text-gray-700 font-medium text-sm sm:text-base">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                  Professional, English-speaking chauffeurs
                </li>
                <li className="flex items-center gap-2 sm:gap-3 text-gray-700 font-medium text-sm sm:text-base">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                  Maintained fleet of 2024/2025 models
                </li>
                <li className="flex items-center gap-2 sm:gap-3 text-gray-700 font-medium text-sm sm:text-base">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                  Guaranteed on-time pickup service
                </li>
              </ul>
              <Link href="/about">
                <Button size="lg" className="bg-black text-white hover:bg-gray-900 font-bold px-6 sm:px-8 py-4 sm:py-5 md:py-6 text-base sm:text-lg rounded-xl">
                  More About Us <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="bg-primary text-black font-semibold tracking-wider uppercase text-xs sm:text-sm px-4 py-1.5 rounded-full inline-block">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 sm:mt-4 mb-4 sm:mb-6 px-4">
              Trusted by 10,000+ Customers
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-amber-50 to-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-amber-100 hover:shadow-lg transition-shadow duration-300">
                <Shield className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary mx-auto mb-2 sm:mb-3 md:mb-4" />
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-1 sm:mb-2">100%</div>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">Safe & Insured</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-50 to-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-blue-100 hover:shadow-lg transition-shadow duration-300">
                <Clock className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-600 mx-auto mb-2 sm:mb-3 md:mb-4" />
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-1 sm:mb-2">24/7</div>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">Available</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-amber-50 to-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-amber-100 hover:shadow-lg transition-shadow duration-300">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary mx-auto mb-2 sm:mb-3 md:mb-4" />
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-1 sm:mb-2">10K+</div>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">Happy Clients</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-50 to-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-green-100 hover:shadow-lg transition-shadow duration-300">
                <Award className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-green-600 mx-auto mb-2 sm:mb-3 md:mb-4" />
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-1 sm:mb-2">4.9</div>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="bg-primary text-black font-semibold tracking-wider uppercase text-xs sm:text-sm px-4 py-1.5 rounded-full inline-block">Our Fleet</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 sm:mt-4 mb-4 sm:mb-6 px-4">
              Luxury Vehicles for Every Need
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Our chauffeur service provides premium vehicles with professional drivers for comfortable travel across Saudi Arabia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {fleet.map((vehicle, index) => (
              <Link key={index} href={vehicle.link} className="block group h-full">
                <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full border border-gray-200 group-hover:border-primary/50 group-hover:scale-[1.02]">
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                    <Image
                      src={vehicle.image}
                      alt={`${vehicle.name} - Luxury vehicle for ${vehicle.passengers} passengers with ${vehicle.luggage} luggage capacity`}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                  </div>
                  <div className="p-4 sm:p-5 md:p-6">
                    <div className="flex justify-between items-center mb-3 sm:mb-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{vehicle.name}</h3>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-primary transition-colors transform group-hover:translate-x-1" />
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 md:gap-6 mb-3 sm:mb-4 text-gray-600 text-sm sm:text-base">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>{vehicle.passengers} Passengers</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Car className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>{vehicle.luggage} Luggage</span>
                      </div>
                    </div>
                    <div className="space-y-1.5 sm:space-y-2">
                      {vehicle.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-600 text-sm sm:text-base">
                          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div>
              <span className="bg-primary text-black font-semibold tracking-wider uppercase text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full inline-block mb-3 sm:mb-4">Our Gallery</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                See Our Fleet & Destinations in Action
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Explore our premium vehicles and the beautiful locations we serve. From luxury interiors to scenic Makkah and AlUla views, see what awaits you.
              </p>
              <Link href="/gallery">
                <Button size="lg" className="bg-black text-white hover:bg-gray-800 font-bold px-6 sm:px-8 py-4 sm:py-5 md:py-6 text-base sm:text-lg rounded-xl">
                  View Full Gallery <Camera className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  <div className="relative h-40 sm:h-48 md:h-56 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                    <Image src="/makkah-kaaba-night.webp" alt="Makkah Kaaba at night - Umrah taxi service destination" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                  </div>
                  <div className="relative h-52 sm:h-60 md:h-64 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                    <Image src="/gmc-yukon.webp" alt="Luxury GMC Yukon interior - Premium chauffeur vehicle" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                  </div>
                </div>
                <div className="space-y-2 sm:space-y-3 md:space-y-4 pt-4 sm:pt-6 md:pt-8">
                  <div className="relative h-52 sm:h-60 md:h-64 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                    <Image src="/madinah-prophets-mosque.webp" alt="Prophet's Mosque in Madinah - Ziyarat tour destination" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                  </div>
                  <div className="relative h-40 sm:h-48 md:h-56 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                    <Image src="/hyundai-staria.webp" alt="Hyundai Staria luxury vehicle - Family travel option" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="bg-primary text-black font-semibold tracking-wider uppercase text-xs sm:text-sm px-4 py-1.5 rounded-full inline-block">Service Areas</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 sm:mt-4 mb-4 sm:mb-6 px-4">
              We Serve All Major Cities in Saudi Arabia
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Professional chauffeur service available across Jeddah, Makkah, Madinah, Riyadh, and more.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
            {serviceAreas.map((city, index) => (
              <div key={index} className="bg-white p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg hover:scale-105 transition-all duration-300 text-center cursor-pointer">
                <MapPin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary mx-auto mb-2 sm:mb-3" />
                <h3 className="text-base sm:text-lg font-bold text-gray-900">{city}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="bg-primary text-black font-semibold tracking-wider uppercase text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full inline-block">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 sm:mt-4 mb-4 sm:mb-6 px-4">
              What Our Customers Say
            </h2>
          </div>

          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-2 sm:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 h-full">
                    <div className="flex items-center gap-1 mb-3 sm:mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">{testimonial.text}</p>
                    <div className="border-t border-gray-200 pt-3 sm:pt-4">
                      <p className="font-bold text-sm sm:text-base text-gray-900">{testimonial.name}</p>
                      <p className="text-xs sm:text-sm text-gray-500">{testimonial.location} • {testimonial.service}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-4 md:-left-12" />
            <CarouselNext className="hidden sm:flex -right-4 md:-right-12" />
          </Carousel>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="bg-primary text-black font-semibold tracking-wider uppercase text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full inline-block">FAQ</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 sm:mt-4 mb-4 sm:mb-6 px-4">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg sm:rounded-xl border border-gray-200 px-4 sm:px-5 md:px-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <AccordionTrigger className="text-left hover:no-underline py-3 sm:py-4">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
                </AccordionTrigger>
                <AccordionContent className="pb-3 sm:pb-4">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed pt-2">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6 px-4">
            Ready to Book Your Ride?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-black/80 mb-6 sm:mb-8 px-4">
            Professional chauffeur service available 24/7 across Saudi Arabia. Book now for instant confirmation!
          </p>
          <div className="flex justify-center">
            <Link href="/booking">
              <Button size="lg" className="bg-black text-white hover:bg-gray-900 font-bold text-base sm:text-lg px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
