import FleetCard from '@/components/FleetCard';

export default function FleetPage() {
    const fleet = [
        {
            name: "Lexus ES 250",
            image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop",
            passengers: 3,
            luggage: 2,
            features: ["Leather Seats", "Free Wi-Fi", "Bottled Water", "Climate Control"]
        },
        {
            name: "Toyota Camry 2024",
            image: "https://images.unsplash.com/photo-1621007947382-bb3c3968e3bb?q=80&w=2070&auto=format&fit=crop",
            passengers: 3,
            luggage: 2,
            features: ["Comfortable Seating", "AC", "USB Charging", "Economic Choice"]
        },
        {
            name: "Mercedes S Class",
            image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop",
            passengers: 3,
            luggage: 2,
            features: ["First Class Comfort", "Massage Seats", "Executive Service", "Privacy Shades"]
        },
        {
            name: "BMW 7 Series",
            image: "https://images.unsplash.com/photo-1555215695-3004980adade?q=80&w=2070&auto=format&fit=crop",
            passengers: 3,
            luggage: 2,
            features: ["Luxury Interior", "Advanced Tech", "Smooth Ride", "Premium Sound"]
        },
        {
            name: "GMC Yukon XL",
            image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1974&auto=format&fit=crop",
            passengers: 7,
            luggage: 5,
            features: ["Extra Legroom", "Privacy Glass", "Premium Sound", "Perfect for Families"]
        },
        {
            name: "Hyundai Staria / H1",
            image: "https://images.unsplash.com/photo-1626859235084-5f53229b439c?q=80&w=1974&auto=format&fit=crop",
            passengers: 7,
            luggage: 6,
            features: ["Spacious Interior", "Group Travel", "AC Vents for All", "Sliding Doors"]
        },
        {
            name: "Toyota Hiace",
            image: "https://images.unsplash.com/photo-1632245889029-e406faaa34cd?q=80&w=1974&auto=format&fit=crop",
            passengers: 11,
            luggage: 8,
            features: ["High Capacity", "Reliable", "Group Transport", "Umrah Groups"]
        }
    ];

    return (
        <div className="bg-black min-h-screen pt-20 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Premium Fleet</h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Experience the journey in style with our diverse collection of luxury vehicles, meticulously maintained for your comfort and safety.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {fleet.map((vehicle, index) => (
                        <FleetCard key={index} {...vehicle} />
                    ))}
                </div>
            </div>
        </div>
    );
}
