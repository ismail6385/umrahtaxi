import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Briefcase } from 'lucide-react';
import Link from 'next/link';

interface FleetCardProps {
    name: string;
    image: string;
    passengers: number;
    luggage: number;
    features: string[];
}

export default function FleetCard({ name, image, passengers, luggage, features }: FleetCardProps) {
    return (
        <Card className="bg-zinc-900 border-zinc-800 overflow-hidden flex flex-col h-full">
            <div className="relative h-48 w-full bg-zinc-800">
                {/* Placeholder for image - in real app would use next/image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    <img src={image} alt={name} className="w-full h-full object-cover" />
                </div>
            </div>
            <CardHeader>
                <CardTitle className="text-white text-xl">{name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                <div className="flex space-x-4 mb-4 text-gray-400 text-sm">
                    <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2 text-primary" />
                        {passengers} Passengers
                    </div>
                    <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-2 text-primary" />
                        {luggage} Luggage
                    </div>
                </div>
                <ul className="space-y-2">
                    {features.map((feature, index) => (
                        <li key={index} className="text-gray-400 text-sm flex items-center">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                            {feature}
                        </li>
                    ))}
                </ul>
            </CardContent>
            <CardFooter>
                <Link href="/booking" className="w-full">
                    <Button className="w-full bg-primary text-black hover:bg-primary/90 font-bold">
                        Book This Vehicle
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
