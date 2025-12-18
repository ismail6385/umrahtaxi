import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Users, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface FleetCardProps {
    name: string;
    image: string;
    passengers: number;
    luggage: number;
    features: string[];
    href: string;
}

export default function FleetCard({ name, image, passengers, luggage, features, href }: FleetCardProps) {
    return (
        <Link href={href} className="block group h-full">
            <div className="h-full bg-neutral-900 rounded-none overflow-hidden transition-all duration-300 border border-white/10 hover:border-amber-500/50 hover:bg-neutral-800 flex flex-col group relative">

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-amber-500/10 -mr-6 -mt-6 rotate-45 group-hover:bg-amber-500 transition-colors duration-500"></div>

                {/* Image */}
                <div className="relative h-64 w-full bg-neutral-800 overflow-hidden">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700 grayscale-[20%] group-hover:grayscale-0"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-90"></div>

                    {/* Floating Title over Image */}
                    <div className="absolute bottom-4 left-6">
                        <h3 className="text-2xl font-bold text-white font-serif tracking-wide group-hover:text-amber-500 transition-colors">
                            {name}
                        </h3>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col relative">
                    {/* Capacity Info */}
                    <div className="flex gap-4 mb-6 pb-6 border-b border-white/5">
                        <div className="flex items-center text-neutral-400 group-hover:text-white transition-colors">
                            <div className="bg-white/5 p-2 rounded-none mr-3 border border-white/5 group-hover:border-amber-500/30">
                                <Users className="w-4 h-4 text-amber-500" />
                            </div>
                            <div>
                                <div className="text-[10px] uppercase tracking-widest text-neutral-500">Passengers</div>
                                <div className="font-bold">{passengers}</div>
                            </div>
                        </div>
                        <div className="flex items-center text-neutral-400 group-hover:text-white transition-colors">
                            <div className="bg-white/5 p-2 rounded-none mr-3 border border-white/5 group-hover:border-amber-500/30">
                                <Briefcase className="w-4 h-4 text-amber-500" />
                            </div>
                            <div>
                                <div className="text-[10px] uppercase tracking-widest text-neutral-500">Luggage</div>
                                <div className="font-bold">{luggage}</div>
                            </div>
                        </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8 flex-grow">
                        {features.map((feature, index) => (
                            <li key={index} className="text-neutral-400 text-sm flex items-center group-hover:text-neutral-300 transition-colors">
                                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3 opacity-50 group-hover:opacity-100 transition-opacity"></span>
                                {feature}
                            </li>
                        ))}
                    </ul>

                    {/* CTA Button */}
                    <Button className="w-full bg-transparent hover:bg-amber-600 text-white border border-white/20 hover:border-amber-600 font-serif tracking-widest text-xs uppercase h-12 rounded-none transition-all group-hover:shadow-[0_0_20px_rgba(217,119,6,0.2)]">
                        View Details
                    </Button>
                </div>
            </div>
        </Link>
    );
}
