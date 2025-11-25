import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import FleetCard from '@/components/FleetCard';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Welcome from '@/components/Welcome';
import PopularRoutes from '@/components/PopularRoutes';
import HowItWorks from '@/components/HowItWorks';
import SEOContent from '@/components/SEOContent';
import BlogPreview from '@/components/BlogPreview';
import VideoTour from '@/components/VideoTour';
import ServiceKeywords from '@/components/ServiceKeywords';
import { Plane, MapPin, Building2, Clock, Shield, Star, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Script from 'next/script';

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Taxi Service KSA",
    "image": "https://taxiserviceksa.com/logo.png",
    "@id": "https://taxiserviceksa.com",
    "url": "https://taxiserviceksa.com",
    "telephone": "+92-317-6243861",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "SA",
      "addressRegion": "Makkah Province"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.3891,
      "longitude": 39.8579
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://taxiserviceksa.com"
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Jeddah"
      },
      {
        "@type": "City",
        "name": "Makkah"
      },
      {
        "@type": "City",
        "name": "Madinah"
      },
      {
        "@type": "City",
        "name": "Riyadh"
      },
      {
        "@type": "City",
        "name": "Taif"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Chauffeur Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Airport Transfer Service",
            "description": "Professional airport transfers in Saudi Arabia including Jeddah, Madinah, and Riyadh airports."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Umrah Taxi Service",
            "description": "Dedicated Umrah transportation between Makkah and Madinah with experienced drivers."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Intercity Chauffeur",
            "description": "Luxury intercity travel across Saudi Arabia including Makkah to Madinah and Jeddah to Makkah."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ziyarat Tours",
            "description": "Guided tours to holy sites in Makkah and Madinah."
          }
        }
      ]
    }
  };
  const services = [
    {
      title: "Airport Transfer Saudi Arabia",
      description: "Professional airport transfers from King Abdulaziz International Airport (Jeddah), Prince Mohammad Bin Abdulaziz Airport (Madinah), and King Khalid International Airport (Riyadh). Real-time flight tracking and meet & greet service included.",
      icon: Plane
    },
    {
      title: "Umrah Taxi - Makkah to Madinah",
      description: "Dedicated Umrah taxi service between Makkah, Madinah, and Jeddah. Comfortable, spacious vehicles perfect for pilgrims with luggage. Experienced drivers familiar with Ziyarat locations.",
      icon: MapPin
    },
    {
      title: "Intercity Chauffeur Service",
      description: "Luxury intercity travel across Saudi Arabia including Jeddah to Makkah, Riyadh to Dammam, and Taif transfers. Professional chauffeurs, premium vehicles, competitive rates.",
      icon: Building2
    }
  ];

  const fleet = [
    {
      name: "Toyota Camry",
      image: "https://images.unsplash.com/photo-1621007947382-bb3c3968e3bb?q=80&w=2070&auto=format&fit=crop",
      passengers: 4,
      luggage: 2,
      features: ["Comfortable Seating", "AC", "Economic Choice"]
    },
    {
      name: "GMC Yukon",
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1974&auto=format&fit=crop",
      passengers: 7,
      luggage: 5,
      features: ["Luxury Interior", "Extra Legroom", "VIP Experience"]
    },
    {
      name: "Hyundai Staria",
      image: "https://images.unsplash.com/photo-1632245889029-e406faaa34cd?q=80&w=1974&auto=format&fit=crop",
      passengers: 7,
      luggage: 4,
      features: ["Modern Design", "Spacious", "Family Travel"]
    }
  ];

  const serviceAreas = [
    "Jeddah", "Makkah", "Madinah", "Riyadh", "Dammam", "Taif", "Al Khobar", "Yanbu"
  ];

  return (
    <div className="bg-black min-h-screen">
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />

      <Welcome />

      {/* Services Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-xs sm:text-sm">Our Expertise</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4 sm:mb-6">Premium Chauffeur Services in KSA</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            We offer professional chauffeur and taxi services across Saudi Arabia including Jeddah, Makkah, Madinah, and Riyadh.
            From airport pickups to intercity transfers, we provide reliable transportation 24/7.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <div className="text-center mt-8 sm:mt-12">
          <Link href="/services">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-black w-full sm:w-auto transition-all hover:scale-105 active:scale-95">
              View All Services
            </Button>
          </Link>
        </div>
      </section>

      <PopularRoutes />

      <HowItWorks />

      {/* Why Choose Us */}
      <section className="py-24 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Why Us</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-8">Experience the Difference</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-4 rounded-xl mr-6">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Punctuality Guaranteed</h3>
                    <p className="text-gray-400 leading-relaxed">We value your time above all. Our drivers are always on time, ensuring you never miss a flight or meeting.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/10 p-4 rounded-xl mr-6">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Safe & Secure</h3>
                    <p className="text-gray-400 leading-relaxed">Your safety is our priority. All our vehicles are regularly inspected and our drivers are professionally trained and vetted.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/10 p-4 rounded-xl mr-6">
                    <Star className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Premium Experience</h3>
                    <p className="text-gray-400 leading-relaxed">From booking to drop-off, we provide a seamless, luxury experience that exceeds expectations.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop"
                alt="Luxury Travel"
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-black/80 backdrop-blur-md p-6 rounded-xl border border-white/10">
                  <p className="text-white font-medium italic">"The best chauffeur service I've used in Saudi Arabia. Highly recommended!"</p>
                  <div className="flex items-center mt-4">
                    <div className="flex text-primary">
                      <Star className="w-4 h-4 fill-primary" />
                      <Star className="w-4 h-4 fill-primary" />
                      <Star className="w-4 h-4 fill-primary" />
                      <Star className="w-4 h-4 fill-primary" />
                      <Star className="w-4 h-4 fill-primary" />
                    </div>
                    <span className="text-gray-400 text-sm ml-2">- Verified Client</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoTour />

      {/* Fleet Section */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Fleet</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-6">Luxury Vehicles</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Choose from our diverse collection of high-end vehicles, maintained to the highest standards of safety and comfort.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fleet.map((vehicle, index) => (
              <FleetCard key={index} {...vehicle} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/fleet">
              <Button className="bg-primary text-black hover:bg-yellow-400 text-lg px-8 py-6 transition-all hover:scale-105 active:scale-95">
                View Full Fleet
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Service Areas */}
      <section className="py-24 bg-black border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Locations</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">Areas We Serve</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We provide reliable chauffeur services across all major cities in Saudi Arabia.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {serviceAreas.map((area, index) => (
              <div key={index} className="flex items-center space-x-3 bg-zinc-900/50 p-4 rounded-lg border border-zinc-800 hover:border-primary/50 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-white font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BlogPreview />

      <FAQ />

      <SEOContent />

      <ServiceKeywords />

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-primary text-black text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">Ready to Experience Luxury?</h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 opacity-90 font-medium">Book your ride today and enjoy the best chauffeur service in Saudi Arabia.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 w-full">
            <Link href="/booking" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-black text-white hover:bg-zinc-800 text-base sm:text-lg md:text-xl px-6 sm:px-10 py-6 sm:py-8 h-auto shadow-2xl transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                Book Now
              </Button>
            </Link>
            <a href="tel:03176243861" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-black border-2 text-black hover:bg-black/10 text-base sm:text-lg md:text-xl px-6 sm:px-10 py-6 sm:py-8 h-auto font-bold transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                Call Us: 03176243861
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// Updated fleet data
