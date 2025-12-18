import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Lock, Eye, UserCheck, Database, Mail, Phone } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Privacy Policy | Umrah Taxi',
    description: 'Learn how Umrah Taxi collects, uses, and protects your personal information. Your privacy and data security are our top priorities.',
    keywords: ['privacy policy', 'data protection', 'personal information', 'GDPR compliance'],
};

export default function PrivacyPolicyPage() {
    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex justify-center mb-4">
                        <Shield className="w-16 h-16 text-primary" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-lg text-gray-600">
                        Last Updated: December 18, 2024
                    </p>
                </div>

                {/* Introduction */}
                <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
                    <p className="text-gray-700 leading-relaxed mb-4">
                        At <strong>Umrah Taxi</strong>, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our taxi and chauffeur services in Saudi Arabia.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        By using our services, you agree to the collection and use of information in accordance with this policy. We encourage you to read this document carefully to understand our practices.
                    </p>
                </div>

                {/* Information We Collect */}
                <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
                    <div className="flex items-center mb-6">
                        <Database className="w-6 h-6 text-primary mr-3" />
                        <h2 className="text-2xl font-bold text-gray-900">1. Information We Collect</h2>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">1.1 Personal Information</h3>
                            <p className="text-gray-700 mb-2">When you book our services, we may collect:</p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                <li>Full name</li>
                                <li>Phone number</li>
                                <li>Email address</li>
                                <li>Pickup and drop-off locations</li>
                                <li>Travel dates and times</li>
                                <li>Payment information (processed securely through third-party providers)</li>
                                <li>Special requirements or preferences</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">1.2 Automatically Collected Information</h3>
                            <p className="text-gray-700 mb-2">When you visit our website, we may automatically collect:</p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                <li>IP address and device information</li>
                                <li>Browser type and version</li>
                                <li>Pages visited and time spent on our website</li>
                                <li>Referring website addresses</li>
                                <li>Cookies and similar tracking technologies</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">1.3 Location Data</h3>
                            <p className="text-gray-700">
                                With your permission, we may collect real-time location data to provide accurate pickup services, optimize routes, and improve service quality. You can disable location services at any time through your device settings.
                            </p>
                        </div>
                    </div>
                </div>

                {/* How We Use Your Information */}
                <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
                    <div className="flex items-center mb-6">
                        <UserCheck className="w-6 h-6 text-primary mr-3" />
                        <h2 className="text-2xl font-bold text-gray-900">2. How We Use Your Information</h2>
                    </div>

                    <p className="text-gray-700 mb-4">We use the collected information for the following purposes:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                        <li><strong>Service Delivery:</strong> To process bookings, assign drivers, and provide transportation services</li>
                        <li><strong>Communication:</strong> To send booking confirmations, updates, and respond to inquiries</li>
                        <li><strong>Payment Processing:</strong> To handle transactions securely through our payment partners</li>
                        <li><strong>Service Improvement:</strong> To analyze usage patterns and enhance our services</li>
                        <li><strong>Safety & Security:</strong> To ensure passenger and driver safety, prevent fraud, and comply with legal requirements</li>
                        <li><strong>Marketing:</strong> To send promotional offers and updates (only with your consent)</li>
                        <li><strong>Customer Support:</strong> To address complaints, feedback, and service requests</li>
                    </ul>
                </div>

                {/* Information Sharing */}
                <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
                    <div className="flex items-center mb-6">
                        <Eye className="w-6 h-6 text-primary mr-3" />
                        <h2 className="text-2xl font-bold text-gray-900">3. Information Sharing and Disclosure</h2>
                    </div>

                    <p className="text-gray-700 mb-4">We do not sell your personal information. We may share your data only in the following circumstances:</p>

                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">3.1 Service Providers</h3>
                            <p className="text-gray-700">
                                We share necessary information with our drivers and partner companies to fulfill your booking requests and provide transportation services.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">3.2 Payment Processors</h3>
                            <p className="text-gray-700">
                                Payment information is shared with secure third-party payment gateways to process transactions. We do not store complete credit card details on our servers.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">3.3 Legal Requirements</h3>
                            <p className="text-gray-700">
                                We may disclose your information if required by law, court order, or government regulation, or to protect our rights, property, and safety.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">3.4 Business Transfers</h3>
                            <p className="text-gray-700">
                                In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity, subject to the same privacy protections.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Data Security */}
                <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
                    <div className="flex items-center mb-6">
                        <Lock className="w-6 h-6 text-primary mr-3" />
                        <h2 className="text-2xl font-bold text-gray-900">4. Data Security</h2>
                    </div>

                    <p className="text-gray-700 mb-4">
                        We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Our security practices include:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                        <li>Encrypted data transmission using SSL/TLS technology</li>
                        <li>Secure servers with firewall protection</li>
                        <li>Regular security audits and updates</li>
                        <li>Access controls and authentication measures</li>
                        <li>Employee training on data protection practices</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                        However, no method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
                    </p>
                </div>

                {/* Your Rights */}
                <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Your Rights and Choices</h2>

                    <p className="text-gray-700 mb-4">You have the following rights regarding your personal information:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                        <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
                        <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                        <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal obligations)</li>
                        <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                        <li><strong>Data Portability:</strong> Request your data in a structured, machine-readable format</li>
                        <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing where applicable</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                        To exercise these rights, please contact us using the information provided below.
                    </p>
                </div>

                {/* Cookies */}
                <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Cookies and Tracking Technologies</h2>

                    <p className="text-gray-700 mb-4">
                        We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and personalize content. Cookies are small text files stored on your device.
                    </p>

                    <div className="space-y-3">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Types of Cookies We Use:</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                                <li><strong>Marketing Cookies:</strong> Track your activity for advertising purposes</li>
                            </ul>
                        </div>
                        <p className="text-gray-700">
                            You can control cookies through your browser settings. Note that disabling cookies may affect website functionality.
                        </p>
                    </div>
                </div>

                {/* Data Retention */}
                <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Data Retention</h2>

                    <p className="text-gray-700">
                        We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. Booking records are typically retained for 7 years for accounting and legal purposes. After this period, data is securely deleted or anonymized.
                    </p>
                </div>

                {/* Children's Privacy */}
                <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Children's Privacy</h2>

                    <p className="text-gray-700">
                        Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal data, please contact us immediately, and we will take steps to remove such information.
                    </p>
                </div>

                {/* International Transfers */}
                <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">9. International Data Transfers</h2>

                    <p className="text-gray-700">
                        Your information may be transferred to and processed in countries other than Saudi Arabia. We ensure that such transfers comply with applicable data protection laws and that your data receives adequate protection through appropriate safeguards.
                    </p>
                </div>

                {/* Changes to Policy */}
                <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Changes to This Privacy Policy</h2>

                    <p className="text-gray-700">
                        We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the new policy on our website with an updated "Last Updated" date. We encourage you to review this policy periodically.
                    </p>
                </div>

                {/* Contact Information */}
                <div className="bg-gradient-to-r from-primary to-yellow-600 rounded-2xl p-8 text-center">
                    <div className="flex justify-center mb-4">
                        <Mail className="w-12 h-12 text-black" />
                    </div>
                    <h2 className="text-2xl font-bold text-black mb-4">11. Contact Us</h2>
                    <p className="text-black/90 mb-6">
                        If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us through our website contact form.
                    </p>

                    <p className="text-sm text-black/80 mt-6">
                        We are committed to resolving any privacy concerns promptly and transparently.
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
