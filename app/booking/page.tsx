import BookingForm from '@/components/BookingForm';

export default function BookingPage() {
    return (
        <div className="bg-black min-h-screen pt-20 pb-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Book Your Ride</h1>
                    <p className="text-xl text-gray-400">
                        Fill out the form below to reserve your luxury vehicle. We will confirm your booking shortly.
                    </p>
                </div>

                <BookingForm />
            </div>
        </div>
    );
}
