'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle, Home } from 'lucide-react';

function ConfirmationContent() {
    const searchParams = useSearchParams();
    const bookingId = searchParams.get('id');
    const already = searchParams.get('already');

    return (
        <div className="min-h-screen bg-neutral-950 flex items-center justify-center px-4 py-20">
            <div className="max-w-2xl w-full bg-neutral-900 border border-white/10 rounded-lg p-8 sm:p-12 text-center">
                <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-12 h-12 text-black" />
                </div>

                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-serif">
                    {already ? 'Already Confirmed!' : 'Booking Confirmed!'}
                </h1>

                <p className="text-neutral-300 text-lg mb-2">
                    {already
                        ? 'This booking has already been confirmed.'
                        : 'Thank you for confirming your booking with Umrah Taxi!'
                    }
                </p>

                {bookingId && (
                    <p className="text-neutral-400 text-sm mb-8">
                        Booking ID: <span className="text-amber-500 font-mono">#{bookingId.slice(0, 8).toUpperCase()}</span>
                    </p>
                )}

                <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8">
                    <h2 className="text-xl font-semibold text-white mb-3">What's Next?</h2>
                    <ul className="text-neutral-300 text-left space-y-2">
                        <li className="flex items-start gap-2">
                            <span className="text-amber-500 mt-1">✓</span>
                            <span>You will receive a confirmation email shortly</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-amber-500 mt-1">✓</span>
                            <span>Our team will contact you 24 hours before your pickup</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-amber-500 mt-1">✓</span>
                            <span>Your driver will arrive at the scheduled time</span>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/">
                        <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 h-12 rounded-none">
                            <Home className="w-4 h-4 mr-2" />
                            Back to Home
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black px-8 h-12 rounded-none">
                            Contact Support
                        </Button>
                    </Link>
                </div>

                <p className="text-neutral-500 text-sm mt-8">
                    Need help? Contact us at{' '}
                    <a href="mailto:umrahtaxi22@gmail.com" className="text-amber-500 hover:underline">
                        umrahtaxi22@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
}

export default function BookingConfirmedPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
                <div className="text-white">Loading...</div>
            </div>
        }>
            <ConfirmationContent />
        </Suspense>
    );
}
