import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, AlertCircle, CheckCircle, XCircle, Scale } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Terms and Conditions | Umrah Taxi',
    description: 'Read the terms and conditions for using Umrah Taxi. Understand your rights and responsibilities when booking our taxi and chauffeur services.',
    keywords: ['terms and conditions', 'service agreement', 'user terms', 'booking terms'],
};

export default function TermsConditionsPage() {
    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex justify-center mb-4">
                        <FileText className="w-16 h-16 text-primary" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Terms and Conditions
                    </h1>
                    <p className="text-lg text-gray-600">
                        Last Updated: December 18, 2024
                    </p>
                </div>

                {/* Introduction */}
                <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Welcome to <strong>Umrah Taxi</strong>. These Terms and Conditions govern your use of our taxi and chauffeur services in Saudi Arabia. By booking or using our services, you agree to comply with and be bound by these terms.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Please read these terms carefully before making a booking. If you do not agree with any part of these terms, please do not use our services.
                    </p>
                </div>

                {/* Definitions */}
                <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Definitions</h2>
                    <ul className="space-y-3 text-gray-700">
                        <li><strong>"Company," "We," "Us," "Our"</strong> refers to Umrah Taxi</li>
                        <li><strong>"Customer," "You," "Your"</strong> refers to the person booking or using our services</li>
                        <li><strong>"Services"</strong> refers to taxi, chauffeur, and transportation services we provide</li>
                        <li><strong>"Driver"</strong> refers to our professional chauffeurs and drivers</li>
                        <li><strong>"Vehicle"</strong> refers to any car, van, or bus used to provide our services</li>
                        <li><strong>"Booking"</strong> refers to a reservation made for our transportation services</li>
                    </ul>
                </div>

                {/* Booking and Reservations */}
                <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
                    <div className="flex items-center mb-6">
                        <CheckCircle className="w-6 h-6 text-primary mr-3" />
                        <h2 className="text-2xl font-bold text-gray-900">2. Booking and Reservations</h2>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">2.1 How to Book</h3>
                            <p className="text-gray-700">
                                Bookings can be made through our website, phone, email, or WhatsApp. All bookings are subject to availability and confirmation.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">2.2 Booking Confirmation</h3>
                            <p className="text-gray-700">
                                A booking is confirmed only when you receive a confirmation email or message from us. We reserve the right to decline any booking at our discretion.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">2.3 Accuracy of Information</h3>
                            <p className="text-gray-700">
                                You are responsible for providing accurate pickup/drop-off locations, contact details, and travel information. Any errors may result in service delays or additional charges.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">2.4 Advance Booking</h3>
                            <p className="text-gray-700">
                                We recommend booking at least 24 hours in advance for airport transfers and 48 hours for long-distance or group travel. Last-minute bookings are subject to availability.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Pricing and Payment */}
                <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Pricing and Payment</h2>

                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">3.1 Pricing</h3>
                            <p className="text-gray-700 mb-2">
                                All prices are quoted in Saudi Riyals (SAR) unless otherwise stated. Prices include:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                <li>Driver service</li>
                                <li>Fuel costs</li>
                                <li>Standard waiting time (as specified)</li>
                                <li>Applicable taxes</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">3.2 Payment Methods</h3>
                            <p className="text-gray-700">
                                We accept cash, credit/debit cards, and bank transfers. Payment is due at the time of booking or upon completion of service, as specified.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">3.3 Additional Charges</h3>
                            <p className="text-gray-700 mb-2">Extra charges may apply for:</p>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                <li>Excessive waiting time beyond the included period</li>
                                <li>Route changes or additional stops</li>
                                <li>Toll fees and parking charges</li>
                                <li>Late-night services (midnight to 6 AM)</li>
                                <li>Cleaning fees for vehicle damage or excessive mess</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">3.4 Price Changes</h3>
                            <p className="text-gray-700">
                                Confirmed bookings are honored at the quoted price. We reserve the right to adjust prices for future bookings without prior notice.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Cancellation and Refunds */}
                <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
                    <div className="flex items-center mb-6">
                        <XCircle className="w-6 h-6 text-primary mr-3" />
                        <h2 className="text-2xl font-bold text-gray-900">4. Cancellation and Refund Policy</h2>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">4.1 Customer Cancellation</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                <li><strong>More than 24 hours before pickup:</strong> Full refund</li>
                                <li><strong>12-24 hours before pickup:</strong> 50% refund</li>
                                <li><strong>Less than 12 hours before pickup:</strong> No refund</li>
                                <li><strong>No-show:</strong> Full charge applies</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">4.2 Company Cancellation</h3>
                            <p className="text-gray-700">
                                We reserve the right to cancel bookings due to unforeseen circumstances (vehicle breakdown, driver unavailability, severe weather). In such cases, we will provide a full refund or alternative arrangement.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">4.3 Refund Processing</h3>
                            <p className="text-gray-700">
                                Approved refunds will be processed within 7-10 business days to the original payment method.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Customer Responsibilities */}
                <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
                    <div className="flex items-center mb-6">
                        <AlertCircle className="w-6 h-6 text-primary mr-3" />
                        <h2 className="text-2xl font-bold text-gray-900">5. Customer Responsibilities</h2>
                    </div>

                    <p className="text-gray-700 mb-4">As a customer, you agree to:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                        <li>Be ready at the pickup location at the scheduled time</li>
                        <li>Provide accurate contact information and pickup/drop-off details</li>
                        <li>Treat drivers and vehicles with respect</li>
                        <li>Not smoke, consume alcohol, or use illegal substances in the vehicle</li>
                        <li>Not carry prohibited or dangerous items</li>
                        <li>Ensure children are accompanied by adults and use appropriate car seats if required</li>
                        <li>Pay all applicable fees and charges</li>
                        <li>Report any issues or concerns immediately</li>
                        <li>Comply with Saudi Arabian laws and regulations</li>
                    </ul>
                </div>

                {/* Luggage and Belongings */}
                <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Luggage and Personal Belongings</h2>

                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">6.1 Luggage Allowance</h3>
                            <p className="text-gray-700">
                                Standard luggage allowance is specified for each vehicle type. Excess luggage may require a larger vehicle or incur additional charges.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">6.2 Lost Items</h3>
                            <p className="text-gray-700">
                                While we make every effort to return lost items, we are not responsible for personal belongings left in vehicles. Please check the vehicle before exiting.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">6.3 Valuable Items</h3>
                            <p className="text-gray-700">
                                We are not liable for loss or damage to valuable items, cash, jewelry, electronics, or important documents. Keep valuables with you at all times.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Liability and Insurance */}
                <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
                    <div className="flex items-center mb-6">
                        <Scale className="w-6 h-6 text-primary mr-3" />
                        <h2 className="text-2xl font-bold text-gray-900">7. Liability and Insurance</h2>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">7.1 Our Liability</h3>
                            <p className="text-gray-700">
                                We maintain comprehensive insurance for all our vehicles and drivers. Our liability is limited to direct damages arising from our negligence during service provision.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">7.2 Limitation of Liability</h3>
                            <p className="text-gray-700 mb-2">We are not liable for:</p>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                <li>Delays caused by traffic, weather, or circumstances beyond our control</li>
                                <li>Missed flights, appointments, or connections due to external factors</li>
                                <li>Indirect, consequential, or punitive damages</li>
                                <li>Acts of third parties or force majeure events</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">7.3 Customer Insurance</h3>
                            <p className="text-gray-700">
                                We recommend customers maintain their own travel insurance to cover personal belongings, trip cancellations, and other unforeseen events.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Service Standards */}
                <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Service Standards</h2>

                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">8.1 Vehicle Condition</h3>
                            <p className="text-gray-700">
                                All vehicles are regularly maintained, cleaned, and inspected to ensure safety and comfort. We reserve the right to substitute vehicles of equal or higher standard if necessary.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">8.2 Driver Conduct</h3>
                            <p className="text-gray-700">
                                Our drivers are professional, licensed, and trained to provide courteous service. They will follow the most efficient routes unless you request otherwise.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">8.3 Service Complaints</h3>
                            <p className="text-gray-700">
                                If you are unsatisfied with our service, please contact us within 48 hours. We will investigate and respond promptly to resolve any issues.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Prohibited Activities */}
                <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Prohibited Activities</h2>

                    <p className="text-gray-700 mb-4">The following activities are strictly prohibited:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                        <li>Smoking, vaping, or using tobacco products in vehicles</li>
                        <li>Consuming alcohol or illegal drugs</li>
                        <li>Carrying weapons, explosives, or hazardous materials</li>
                        <li>Engaging in illegal activities</li>
                        <li>Harassing, threatening, or abusing drivers</li>
                        <li>Damaging or vandalizing vehicles</li>
                        <li>Exceeding passenger capacity</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                        Violation of these rules may result in immediate termination of service without refund and potential legal action.
                    </p>
                </div>

                {/* Intellectual Property */}
                <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Intellectual Property</h2>

                    <p className="text-gray-700">
                        All content on our website, including text, graphics, logos, images, and software, is the property of Umrah Taxi and protected by copyright laws. You may not reproduce, distribute, or use our content without written permission.
                    </p>
                </div>

                {/* Governing Law */}
                <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Governing Law and Disputes</h2>

                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">11.1 Governing Law</h3>
                            <p className="text-gray-700">
                                These Terms and Conditions are governed by the laws of the Kingdom of Saudi Arabia.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">11.2 Dispute Resolution</h3>
                            <p className="text-gray-700">
                                Any disputes arising from these terms or our services will be resolved through good-faith negotiation. If unresolved, disputes will be subject to the jurisdiction of Saudi Arabian courts.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Changes to Terms */}
                <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">12. Changes to Terms</h2>

                    <p className="text-gray-700">
                        We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. Continued use of our services after changes constitutes acceptance of the updated terms.
                    </p>
                </div>

                {/* Contact */}
                <div className="bg-gradient-to-r from-primary to-yellow-600 rounded-2xl p-8 text-center">
                    <h2 className="text-2xl font-bold text-black mb-4">13. Contact Information</h2>
                    <p className="text-black/90 mb-4">
                        For questions about these Terms and Conditions, please contact us through our website contact form.
                    </p>
                </div>

                {/* Acceptance */}
                <div className="bg-white rounded-2xl p-8 shadow-sm mt-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Acceptance of Terms</h2>
                    <p className="text-gray-700 text-center">
                        By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                    </p>
                </div>

                {/* Back to Home */}
                <div className="text-center mt-12">
                    <Link href="/" className="text-primary hover:text-primary/80 font-semibold">
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
