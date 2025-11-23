import BookingForm from '@/components/BookingForm';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="bg-black min-h-screen pt-20 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Have questions or need a custom quote? Get in touch with us. We are available 24/7 to assist you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 mb-8">
                            <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <Phone className="w-6 h-6 text-primary mr-4 mt-1" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Phone / WhatsApp</h3>
                                        <a href="tel:03176243861" className="text-gray-400 hover:text-primary transition-colors block mt-1">
                                            03176243861
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Mail className="w-6 h-6 text-primary mr-4 mt-1" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Email</h3>
                                        <a href="mailto:Bookme@taxiserviceksa.com" className="text-gray-400 hover:text-primary transition-colors block mt-1">
                                            Bookme@taxiserviceksa.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <MapPin className="w-6 h-6 text-primary mr-4 mt-1" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Location</h3>
                                        <p className="text-gray-400 mt-1">
                                            Jeddah, Saudi Arabia<br />
                                            Serving Makkah, Madinah, and Riyadh
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
                            <h2 className="text-2xl font-bold text-white mb-4">Why Contact Us?</h2>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                                    24/7 Customer Support
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                                    Instant Booking Confirmation
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                                    Custom Travel Packages
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                                    Corporate Account Inquiries
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                        <BookingForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
