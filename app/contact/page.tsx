import BookingForm from '@/components/BookingForm';
import { Clock, Send, MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

export default function ContactPage() {
    const faqs = [
        {
            question: "How can I contact customer support regarding my booking?",
            answer: "You can reach our 24/7 dedicated support team directly through the contact form on this page, or for urgent matters, via WhatsApp or phone."
        },
        {
            question: "What is your average response time for inquiries?",
            answer: "We pride ourselves on speed. For web inquiries, we aim to respond within 30-60 minutes. WhatsApp messages usually receive an instant response."
        },
        {
            question: "I left a personal item in the taxi, what should I do?",
            answer: "Please contact us immediately with your booking reference number. Our vehicles are checked after every trip, and we have a high success rate in reuniting guests with lost items."
        },
        {
            question: "How do I cancel or modify my confirmed booking?",
            answer: "Changes can be made by contacting our support team at least 24 hours before your scheduled pickup. We try to be as flexible as possible for our pilgrims."
        },
        {
            question: "Do you offer corporate or long-term partnership agreements?",
            answer: "Yes, we specialize in B2B transport solutions for Umrah agents and corporations. Please use the form to request a partnership proposal."
        }
    ];

    const contactMethods = [
        {
            icon: Phone,
            title: "Phone Support",
            desc: "24/7 Urgent Assistance",
            action: "+966 50 123 4567"
        },
        {
            icon: Mail,
            title: "Email Us",
            desc: "For Quotes & Inquiries",
            action: "support@umrahtaxi.com"
        },
        {
            icon: MessageSquare,
            title: "WhatsApp",
            desc: "Instant Chat Support",
            action: "Chat Now"
        }
    ];

    return (
        <div className="bg-neutral-950 min-h-screen pt-32 pb-20 relative overflow-hidden text-neutral-200">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

            {/* Header Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 relative z-10">
                <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-amber-500/30 bg-white/5 backdrop-blur-md rounded-full mb-6 animate-fade-in-up">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>
                    <span className="text-amber-500 text-xs font-bold tracking-[0.2em] uppercase">24/7 Support</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-serif">
                    Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">Touch</span>
                </h1>
                <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light">
                    Have questions about your spiritual journey transport? We are here to assist you with royal care and attention.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
                    {/* Left Side: Contact Info & Value Props */}
                    <div className="lg:col-span-5 space-y-8">
                        {/* Contact Methods removed */}

                        {/* Support Agent Visual */}
                        <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-8 border border-white/10 group">
                            <img
                                src="/support-team.webp"
                                alt="Saudi Customer Support Team"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <div className="absolute bottom-4 left-4">
                                <span className="bg-green-500/20 text-green-400 text-xs font-bold px-2 py-1 rounded-full border border-green-500/20 animate-pulse">
                                    ● Online Now
                                </span>
                                <h3 className="text-white font-bold text-lg mt-2">Real Humans, Royal Care</h3>
                            </div>
                        </div>

                        <div className="bg-neutral-900/50 p-8 border border-white/5 relative overflow-hidden rounded-2xl">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-bl-full -mr-4 -mt-4"></div>
                            <h2 className="text-2xl font-bold text-white mb-6 font-serif">Why Choose Us?</h2>
                            <ul className="space-y-6">
                                <li className="flex items-start">
                                    <Clock className="w-6 h-6 text-amber-500 mr-4 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-white mb-1">Always Available</h3>
                                        <p className="text-neutral-400 text-sm">Our support team works 24/7 to ensure your peace of mind.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <Send className="w-6 h-6 text-amber-500 mr-4 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-white mb-1">Instant Confirmation</h3>
                                        <p className="text-neutral-400 text-sm">Book online and receive immediate booking details via email.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <MapPin className="w-6 h-6 text-amber-500 mr-4 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-white mb-1">Kingdom-Wide</h3>
                                        <p className="text-neutral-400 text-sm">Seamless service across Makkah, Madinah, Jeddah, and beyond.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Side: Booking Form (Hero Variant) */}
                    <div className="lg:col-span-7">
                        <div className="bg-neutral-900/30 border border-white/10 p-1 rounded-sm backdrop-blur-sm">
                            <div className="bg-black/80 p-6 md:p-8 border border-white/5">
                                <h3 className="text-2xl font-serif text-white mb-6">Send a Message</h3>
                                <BookingForm variant="hero" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="max-w-3xl mx-auto mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6 font-serif">Frequently Asked Questions</h2>
                        <p className="text-neutral-400">Common questions about our support and services</p>
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

            </div>
        </div>
    );
}
