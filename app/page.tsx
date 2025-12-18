"use client";

import Hero from '@/components/Hero';
import Script from 'next/script';
import Image from 'next/image';
import { Plane, MapPin, Building2, Shield, Clock, Award, CheckCircle2, Users, Crown, Star, ArrowRight, DollarSign, Headphones, Car } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export default function Home() {
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Umrah Taxi - Premium Transport Service",
    "url": "https://umrahtaxi.site",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://umrahtaxi.site/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const heroImages = [
    '/makkah-clock-tower.webp',
    '/madinah-prophets-mosque.webp',
    '/gmc-yukon.webp',
    '/jeddah-corniche-sunset.webp',
    '/makkah-kaaba-night.webp',
  ];

  const services = [
    {
      title: "Jeddah Airport Transfers",
      description: "Seamless VIP pickup from King Abdulaziz International Airport (KAIA) to your Makkah hotel.",
      icon: Plane,
      link: "/locations/jeddah",
      location: "Jeddah",
      image: "/jeddah-service.webp"
    },
    {
      title: "Makkah - Madinah",
      description: "Blessed journey between the Two Holy Harams in our premium GMC Yukon fleet.",
      icon: MapPin,
      link: "/locations/makkah",
      location: "Holy Route",
      image: "/makkah-clock-tower-new.webp"
    },
    {
      title: "Ziyarat Tours",
      description: "Religious tours to historical sites: Quba Mosque, Mount Uhud, Cave of Hira, and more.",
      icon: Building2,
      link: "/locations/madinah",
      location: "Madinah",
      image: "/madinah-umbrellas.webp"
    },
    {
      title: "Royal VIP Service",
      description: "Exclusive chauffeur service for dignitaries and families requiring absolute privacy.",
      icon: Crown,
      link: "/fleet/gmc-yukon",
      location: "Kingdom Wide",
      image: "/driver-luxury.webp"
    }
  ];

  const fleet = [
    {
      name: "GMC Yukon XL",
      image: "/gmc-yukon.webp",
      passengers: 7,
      luggage: 5,
      features: ["VIP Luxury", "Soundproof", "Privacy Glass"],
      link: "/fleet/gmc-yukon"
    },
    {
      name: "Toyota Camry",
      image: "/toyota-camry.webp",
      passengers: 4,
      luggage: 2,
      features: ["Economic", "Comfortable", "City Travel"],
      link: "/fleet/toyota-camry"
    },
    {
      name: "Hyundai Staria",
      image: "/hyundai-staria.webp",
      passengers: 7,
      luggage: 4,
      features: ["Family Van", "Spacious", "Modern AC"],
      link: "/fleet/hyundai-staria"
    }
  ];

  const faqs = [
    {
      question: "How does the airport pickup work at Jeddah Terminal?",
      answer: "Our driver will track your flight via flight number. Upon landing, he will wait at the arrival hall holding a name board with your name for easy identification."
    },
    {
      question: "Are there any hidden fees for toll gates on the Makkah highway?",
      answer: "No. Our pricing is 100% transparent. The quote includes fuel, driver allowance, toll gate fees (Makkah/Jeddah highway), and airport parking."
    },
    {
      question: "Can we stop at Meeqat for Ihram?",
      answer: "Yes, absolutely. For travelers coming from Madinah or Jeddah to Makkah, we facilitate a 30-45 minute stop at the designated Meeqat points (like Abyar Ali or Al Juhfah) at no extra cost."
    },
    {
      question: "What vehicle is best for a family of 5 with luggage?",
      answer: "We recommend the GMC Yukon XL or Hyundai Staria. Both comfortably accommodate 5-7 passengers with ample space for 5+ large suitcases."
    }
  ];

  return (
    <div className="bg-neutral-950 min-h-screen font-sans">
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <JsonLdFAQ faqs={faqs} />

      {/* Hero Section */}
      <Hero images={heroImages} />

      {/* Trust Indicators Stripe */}
      <div className="bg-neutral-900 border-b border-white/5 py-10 relative z-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { icon: Clock, text: "Always Punctual" },
            { icon: Shield, text: "Fully Insured" },
            { icon: DollarSign, text: "Fixed Pricing" },
            { icon: Headphones, text: "24/7 Support" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 group opacity-70 hover:opacity-100 transition-opacity cursor-default">
              <div className="p-2 bg-amber-500/10 rounded-full border border-amber-500/20 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                <item.icon className="w-5 h-5 text-amber-500 group-hover:text-black" />
              </div>
              <span className="font-semibold uppercase tracking-widest text-xs md:text-sm text-neutral-300 group-hover:text-white transition-colors">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/pattern-grid.png')] opacity-[0.03] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-amber-500/30 bg-white/5 backdrop-blur-md rounded-full mb-6">
              <span className="text-amber-500 text-xs font-bold tracking-[0.2em] uppercase">Our Expertise</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
              Royal Service for <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">Sacred Departures</span>
            </h3>
            <p className="text-neutral-400 text-lg leading-relaxed font-light">
              Designing the perfect travel experience for the Guests of Allah. From the moment you land in Jeddah to your prayers in the Holy Mosques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link key={index} href={service.link} className="group">
                <div className="bg-neutral-900 border border-white/5 hover:border-amber-500/50 h-full flex flex-col cursor-pointer relative overflow-hidden transition-all duration-500 hover:-translate-y-2 group-hover:shadow-[0_0_30px_rgba(217,119,6,0.15)] rounded-lg">

                  {/* Image Header with Overlay */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent"></div>

                    {/* Location Tag */}
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-wider text-white border border-white/10 group-hover:border-amber-500/50 transition-colors">
                      {service.location}
                    </div>
                  </div>

                  <div className="p-6 pt-2 relative">
                    <div className="w-12 h-12 bg-amber-500 text-black rounded-lg flex items-center justify-center mb-4 -mt-10 relative z-10 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6" />
                    </div>

                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors font-serif">{service.title}</h4>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-6 group-hover:text-neutral-300">{service.description}</p>

                    <span className="mt-auto text-amber-600 font-semibold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                      Book Journey <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Split Section */}
      <section className="py-24 bg-neutral-900 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="order-2 lg:order-1 relative">
              <div className="relative h-[600px] w-full shadow-2xl group">
                {/* Decorative Frame */}
                <div className="absolute inset-0 border border-amber-500/30 translate-x-4 translate-y-4 transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>
                <div className="relative h-full w-full overflow-hidden bg-neutral-800">
                  <Image
                    src="/madinah-prophets-mosque.webp"
                    alt="The Prophet's Mosque Madinah - Peaceful Night View"
                    fill
                    className="object-cover opacity-90 grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-80"></div>
                </div>

                {/* Floating Quote Card */}
                <div className="absolute bottom-12 -left-6 bg-neutral-950 border border-white/10 p-6 shadow-2xl max-w-xs hidden md:block">
                  <div className="flex gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 text-amber-500 fill-amber-500" />)}
                  </div>
                  <p className="font-serif text-white text-lg italic leading-tight mb-2">"The journey was spiritual and the car was incredibly comfortable."</p>
                  <p className="text-xs text-amber-500 uppercase tracking-widest">- Pilgrim from UK</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div className="flex items-center gap-4 mb-2">
                <div className="h-[1px] w-12 bg-amber-500"></div>
                <span className="text-amber-500 font-bold tracking-[0.2em] uppercase text-xs">Why Choose Umrah Taxi</span>
              </div>

              <h3 className="text-4xl md:text-5xl font-bold font-serif leading-tight text-white">
                Dedicated to the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">Guests of Allah</span>
              </h3>

              <p className="text-neutral-400 text-lg leading-relaxed font-light border-l-2 border-white/10 pl-6">
                We understand that this is not just a trip, but a lifelong dream. Our drivers are trained to recognize the sanctity of your pilgrimage, ensuring silence, cleanliness, and punctuality at all times.
              </p>

              <div className="space-y-6 pt-4">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-neutral-800 rounded border border-white/10 mt-1 group-hover:border-amber-500/50 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">Makkah & Madinah Experts</h4>
                    <p className="text-sm text-neutral-500 group-hover:text-neutral-300 transition-colors">Drivers who know every hotel, gate, and Ziyarat location by heart.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-neutral-800 rounded border border-white/10 mt-1 group-hover:border-amber-500/50 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">Guaranteed 2024 Models</h4>
                    <p className="text-sm text-neutral-500 group-hover:text-neutral-300 transition-colors">Travel in the reliability and cooling comfort of brand new vehicles.</p>
                  </div>
                </div>
              </div>

              <Link href="/about">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white mt-6 rounded-none px-8 h-12 text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(217,119,6,0.2)]">
                  Discover Our Mission
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Fleet Showcase */}
      <section className="py-24 bg-neutral-950 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-white/10 pb-8">
            <div className="max-w-2xl">
              <h2 className="text-amber-500 font-bold tracking-[0.2em] uppercase text-xs mb-3">The Royal Fleet</h2>
              <h2 className="text-4xl font-bold text-white font-serif mb-4">Choose Your Carriage</h2>
              <p className="text-neutral-400 font-light">Meticulously maintained vehicles ensuring a dignified arrival at the Haram.</p>
            </div>
            <Link href="/fleet" className="hidden sm:block">
              <Button variant="outline" className="rounded-none px-8 h-12 border-white/20 text-white hover:bg-white hover:text-black transition-colors uppercase tracking-widest text-xs">
                View Full Fleet
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fleet.map((item, i) => (
              <div key={i} className="group cursor-pointer relative bg-neutral-900 border border-white/5 hover:border-amber-500/50 transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-90"></div>

                  {/* Floating Badge */}
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white font-serif group-hover:text-amber-500 transition-colors">{item.name}</h3>
                  </div>
                </div>

                <div className="p-6">
                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.features.map((feat, idx) => (
                      <span key={idx} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-white/5 text-neutral-400 border border-white/5 rounded-sm">{feat}</span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center text-sm text-neutral-400 border-t border-white/5 pt-4 mb-6">
                    <span className="flex items-center gap-2"><Users className="w-4 h-4 text-amber-500" /> {item.passengers} Guests</span>
                    <span className="flex items-center gap-2"><Car className="w-4 h-4 text-amber-500" /> {item.luggage} Bags</span>
                  </div>

                  <Link href={item.link} className="inline-block w-full">
                    <Button className="w-full bg-transparent border border-white/20 text-white hover:bg-amber-600 hover:border-amber-600 transition-all uppercase text-xs tracking-widest h-12 rounded-none">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center sm:hidden">
            <Link href="/fleet">
              <Button variant="outline" className="rounded-none px-8 w-full border-white/20 text-white">View Full Fleet</Button>
            </Link>
          </div>

        </div>
      </section>

      {/* Moments of Peace Gallery */}
      <section className="py-24 bg-neutral-900 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern-grid.png')] opacity-[0.05] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-amber-500/30 bg-white/5 backdrop-blur-md rounded-full mb-6">
              <span className="text-amber-500 text-xs font-bold tracking-[0.2em] uppercase">Visual Journey</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
              Moments <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">of Peace</span>
            </h3>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto font-light">
              Glimpses of the spiritual comfort and premium service that awaits you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
            {/* Large Main Item */}
            <div className="md:col-span-3 md:row-span-2 relative group rounded-2xl overflow-hidden border border-white/10 h-72 md:h-full">
              <Image
                src="/makkah-royal-suite-view.webp"
                alt="Panoramic view of Makkah Grand Mosque from Royal Suite"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-2 block">Spiritual Elevation</span>
                <h4 className="text-white font-serif text-2xl font-bold">Makkah Al Mukarramah</h4>
              </div>
            </div>

            {/* Top Row Right */}
            <div className="md:col-span-3 md:row-span-1 grid grid-cols-2 gap-4">
              <div className="relative group rounded-2xl overflow-hidden border border-white/10 h-48 md:h-full">
                <Image
                  src="/umrah-family-arrival.webp"
                  alt="Family arriving at Jeddah Airport for Umrah"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                <div className="absolute bottom-4 left-4">
                  <p className="text-white text-sm font-bold">Family Arrival</p>
                </div>
              </div>
              <div className="relative group rounded-2xl overflow-hidden border border-white/10 h-48 md:h-full">
                <Image
                  src="/madinah-rawdah-visit.webp"
                  alt="Pilgrims visiting the Rawdah in Madinah"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                <div className="absolute bottom-4 left-4">
                  <p className="text-white text-sm font-bold">Rawdah Visit</p>
                </div>
              </div>
            </div>

            {/* Bottom Row Right */}
            <div className="md:col-span-3 md:row-span-1 grid grid-cols-2 gap-4">
              <div className="relative group rounded-2xl overflow-hidden border border-white/10 h-48 md:h-full">
                <Image
                  src="/vip-luxury-interior.webp"
                  alt="GMC Yukon luxury interior seating"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                <div className="absolute bottom-4 left-4">
                  <p className="text-white text-sm font-bold">Royal Comfort</p>
                </div>
              </div>
              <div className="relative group rounded-2xl overflow-hidden border border-white/10 h-48 md:h-full">
                <Image
                  src="/jeddah-airport-pickup-service.webp"
                  alt="Professional airport pickup service at KAIA"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                <div className="absolute bottom-4 left-4">
                  <p className="text-white text-sm font-bold">VIP Pickup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-neutral-900 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4 font-serif">Frequently Asked Questions</h2>
            <p className="text-neutral-400">Everything you need to know about your pilgrimage transport</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-neutral-950/50 px-6 rounded-none border border-white/5 data-[state=open]:border-amber-500/30 transition-all">
                <AccordionTrigger className="text-lg font-medium text-white py-6 hover:no-underline hover:text-amber-500 text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-neutral-400 pb-6 text-base leading-relaxed font-light border-t border-white/5 pt-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 text-center bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/makkah-kaaba-night.webp')] bg-cover bg-center opacity-40 blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>

        <div className="relative z-10 max-w-4xl mx-auto animate-fade-in-up">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-amber-500/50 bg-black/60 backdrop-blur-md rounded-full mb-8">
            <Star className="w-3 h-3 text-amber-500 fill-amber-500 animate-pulse" />
            <span className="text-amber-400 text-xs font-bold tracking-[0.2em] uppercase">Trusted by 15,000+ Pilgrims</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 font-serif tracking-tight">
            Ready for your <span className="text-amber-500">Journey?</span>
          </h2>
          <p className="text-xl text-neutral-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Secure your ride with Umrah Taxi today. We guarantee the best rates, punctual service, and a peaceful journey to the House of Allah.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/booking">
              <Button size="lg" className="h-16 px-12 bg-amber-600 hover:bg-amber-700 text-white text-xl font-bold rounded-none shadow-[0_0_30px_rgba(217,119,6,0.4)] transition-transform hover:scale-105">
                Book Your Ride
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="h-16 px-12 bg-transparent border-white/30 hover:bg-white hover:text-black text-white text-xl font-bold rounded-none backdrop-blur-sm">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div >
  );
}
