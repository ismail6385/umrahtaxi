import { Shield, Users, Clock, Star } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="bg-black min-h-screen pt-20 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Taxi Service KSA</h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        We are Saudi Arabia&apos;s premier chauffeur service, dedicated to providing luxury, safety, and reliability for every journey.
                    </p>
                </div>

                {/* Mission Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="relative h-[400px] rounded-lg overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop"
                            alt="Professional Chauffeur"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                        <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                            At Taxi Service KSA, our mission is to redefine transportation in Saudi Arabia by offering a service that goes beyond just getting from point A to point B. We strive to provide an experience of unmatched comfort, professionalism, and luxury.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Whether you are performing Umrah, traveling for business, or exploring the kingdom, we ensure your journey is smooth, safe, and memorable. Our fleet of premium vehicles and professional chauffeurs are at your service 24/7.
                        </p>
                    </div>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Shield className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Safety First</h3>
                        <p className="text-gray-400">
                            Your safety is paramount. Our vehicles are rigorously maintained and our drivers are vetted professionals.
                        </p>
                    </div>
                    <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Clock className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Punctuality</h3>
                        <p className="text-gray-400">
                            We respect your time. Count on us for timely pickups and efficient routes to your destination.
                        </p>
                    </div>
                    <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Star className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Luxury</h3>
                        <p className="text-gray-400">
                            Experience the finest fleet of vehicles, offering premium comfort and amenities for a relaxing ride.
                        </p>
                    </div>
                    <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Users className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Customer Focus</h3>
                        <p className="text-gray-400">
                            We are dedicated to your satisfaction, offering personalized services to meet your unique needs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
