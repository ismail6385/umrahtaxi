import { Metadata } from 'next';
import Link from 'next/link';
import { HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
    title: 'FAQs | Umrah Taxi - Common Questions',
    description: 'Find answers to frequently asked questions about booking Umrah taxi, payments, Ziyarat tours, and airport transfers.',
    keywords: ['umrah taxi FAQ', 'booking help', 'payment questions', 'ziyarat faq', 'airport transfer FAQ'],
};

export default function FAQPage() {
    const faqCategories = [
        {
            category: 'Booking & Reservations',
            questions: [
                {
                    question: 'How do I book a taxi?',
                    answer: 'You can book through our website, phone, email, or WhatsApp. Simply provide your pickup location, destination, date, time, and number of passengers. You\'ll receive a confirmation once your booking is processed.'
                },
                {
                    question: 'How far in advance should I book?',
                    answer: 'We recommend booking at least 24 hours in advance for airport transfers and 48 hours for long-distance or group travel. However, we also accept last-minute bookings subject to availability.'
                },
                {
                    question: 'Can I modify or cancel my booking?',
                    answer: 'Yes, you can modify or cancel your booking. For cancellations more than 24 hours before pickup, you\'ll receive a full refund. Cancellations 12-24 hours before receive a 50% refund. Less than 12 hours - no refund.'
                },
                {
                    question: 'Do I get a booking confirmation?',
                    answer: 'Yes, you will receive a confirmation email or message with all booking details including driver information, vehicle details, and pickup time.'
                }
            ]
        },
        {
            category: 'Pricing & Payment',
            questions: [
                {
                    question: 'How is the fare calculated?',
                    answer: 'Our fares are based on distance, vehicle type, and service duration. We provide upfront pricing with no hidden charges. Prices include driver service, fuel, and standard waiting time.'
                },
                {
                    question: 'What payment methods do you accept?',
                    answer: 'We accept cash, credit/debit cards, and bank transfers. Payment can be made at the time of booking or upon completion of service.'
                },
                {
                    question: 'Are there any additional charges?',
                    answer: 'Additional charges may apply for excessive waiting time, route changes, toll fees, parking charges, and late-night services (midnight to 6 AM).'
                },
                {
                    question: 'Do you offer discounts for regular customers?',
                    answer: 'Yes, we offer special rates for corporate clients and frequent travelers. Contact us to discuss customized packages.'
                }
            ]
        },
        {
            category: 'Vehicles & Drivers',
            questions: [
                {
                    question: 'What types of vehicles do you have?',
                    answer: 'We offer a diverse fleet including sedans (Toyota Camry), luxury SUVs (GMC Yukon), family vans (Hyundai Staria, Toyota Hiace, Hyundai Starex), and tour buses (Toyota Coaster) for groups up to 17 passengers.'
                },
                {
                    question: 'Are your drivers licensed and experienced?',
                    answer: 'Yes, all our drivers are professionally licensed, experienced, and trained to provide courteous service. They are knowledgeable about routes and local areas.'
                },
                {
                    question: 'Can I request a specific driver?',
                    answer: 'Yes, if you\'ve had a good experience with a particular driver, you can request them for future bookings, subject to availability.'
                },
                {
                    question: 'Are the vehicles clean and well-maintained?',
                    answer: 'Absolutely! All vehicles are regularly cleaned, sanitized, and maintained to ensure your comfort and safety.'
                }
            ]
        },
        {
            category: 'Services & Coverage',
            questions: [
                {
                    question: 'Which cities do you serve?',
                    answer: 'We provide services across major Saudi cities including Makkah, Madinah, Jeddah, Riyadh, Taif, and tourist destinations like AlUla and Khayber Fort.'
                },
                {
                    question: 'Do you provide airport transfer services?',
                    answer: 'Yes, we specialize in airport transfers to/from all major airports including Jeddah (KAIA), Madinah, and Taif airports with flight tracking and meet & greet services.'
                },
                {
                    question: 'Can you arrange Umrah transportation?',
                    answer: 'Yes, we offer specialized Umrah taxi services including Makkah to Madinah transfers, Ziyarat tours, and hotel to Haram transportation.'
                },
                {
                    question: 'Do you offer hourly rental services?',
                    answer: 'Yes, we provide hourly rental services for city tours, business meetings, or shopping trips with flexible duration options.'
                }
            ]
        },
        {
            category: 'Safety & Luggage',
            questions: [
                {
                    question: 'Is it safe to travel with your service?',
                    answer: 'Yes, safety is our top priority. All vehicles are insured, regularly inspected, and equipped with safety features. Our drivers follow all traffic regulations.'
                },
                {
                    question: 'How much luggage can I bring?',
                    answer: 'Luggage capacity varies by vehicle. Sedans accommodate 2-3 large bags, SUVs 4-5 bags, and vans 10-16 bags. Inform us if you have excess luggage.'
                },
                {
                    question: 'What if I leave something in the vehicle?',
                    answer: 'Contact us immediately if you leave belongings in the vehicle. We make every effort to return lost items, though we cannot guarantee recovery.'
                },
                {
                    question: 'Do you provide child car seats?',
                    answer: 'Yes, child car seats are available upon request. Please inform us during booking if you need one.'
                }
            ]
        },
        {
            category: 'Special Requests',
            questions: [
                {
                    question: 'Can I make special requests?',
                    answer: 'Yes, we accommodate special requests such as wheelchair accessibility, extra stops, specific routes, or temperature preferences. Inform us during booking.'
                },
                {
                    question: 'Do you provide multilingual drivers?',
                    answer: 'Yes, our drivers speak multiple languages including English, Arabic, and Urdu to assist international travelers.'
                },
                {
                    question: 'Can I book for someone else?',
                    answer: 'Yes, you can book on behalf of family, friends, or colleagues. Just provide their contact details and travel information.'
                },
                {
                    question: 'Do you offer corporate accounts?',
                    answer: 'Yes, we provide corporate accounts with monthly billing, dedicated support, and special rates for businesses. Contact us for details.'
                }
            ]
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-4">
                        <HelpCircle className="w-16 h-16 text-black" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Find answers to common questions about our taxi and chauffeur services in Saudi Arabia
                    </p>
                </div>

                {/* FAQ Categories */}
                <div className="space-y-12">
                    {faqCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex}>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <span className="bg-black text-white px-3 py-1 rounded-lg mr-3 text-lg">
                                    {categoryIndex + 1}
                                </span>
                                {category.category}
                            </h2>

                            <Accordion type="single" collapsible className="space-y-4">
                                {category.questions.map((faq, faqIndex) => (
                                    <AccordionItem
                                        key={faqIndex}
                                        value={`item-${categoryIndex}-${faqIndex}`}
                                        className="bg-white rounded-xl border border-gray-200 px-6 shadow-sm hover:border-black/20 transition-all"
                                    >
                                        <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-black hover:no-underline">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-gray-600 pt-2 pb-4">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    ))}
                </div>

                {/* Still Have Questions - CTA */}
                <div className="mt-16 bg-black rounded-2xl p-8 md:p-12 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Still Have Questions?
                    </h2>
                    <p className="text-lg text-gray-300 mb-6">
                        Can't find the answer you're looking for? Our customer support team is here to help!
                    </p>
                    <Link href="/contact">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-8 py-6">
                            Contact Us
                        </Button>
                    </Link>
                </div>

                {/* Back to Home */}
                <div className="text-center mt-12">
                    <Link href="/" className="text-gray-900 hover:text-gray-700 font-semibold">
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
