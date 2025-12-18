'use client';

import { Car, Fuel, Users, Gauge, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const fleetData = [
    {
        id: '1',
        name: 'GMC Yukon',
        type: 'Luxury SUV',
        passengers: 7,
        luggage: 5,
        status: 'Active',
        image: '/gmc-yukon.webp',
        price: 'Start from 250 SAR'
    },
    {
        id: '2',
        name: 'Toyota Camry',
        type: 'Sedan',
        passengers: 4,
        luggage: 3,
        status: 'Active',
        image: '/toyota-camry.webp',
        price: 'Start from 100 SAR'
    },
    {
        id: '3',
        name: 'Hyundai Staria',
        type: 'Family Van',
        passengers: 7,
        luggage: 6,
        status: 'Active',
        image: '/hyundai-staria.webp',
        price: 'Start from 180 SAR'
    },
    {
        id: '4',
        name: 'Toyota Hiace',
        type: 'Minibus',
        passengers: 12,
        luggage: 10,
        status: 'Maintenance',
        image: '/toyota-hiace.webp',
        price: 'Start from 300 SAR'
    }
];

export default function FleetPage() {
    return (
        <div className="text-white">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                        Fleet Management
                    </h1>
                    <p className="text-neutral-400 mt-1">Manage your available vehicles and pricing</p>
                </div>
                <Button className="bg-primary text-black hover:bg-primary/90 font-bold">
                    <Plus className="mr-2 h-4 w-4" /> Add Vehicle
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {fleetData.map((vehicle) => (
                    <div key={vehicle.id} className="bg-neutral-800 rounded-xl overflow-hidden border border-neutral-700 group hover:border-primary/50 transition-colors">
                        <div className="relative h-48 w-full bg-neutral-900">
                            {/* Placeholder for real images */}
                            <div className="absolute inset-0 flex items-center justify-center text-neutral-700">
                                <Car className="w-12 h-12" />
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{vehicle.name}</h3>
                                    <p className="text-sm text-neutral-400">{vehicle.type}</p>
                                </div>
                                <Badge variant={vehicle.status === 'Active' ? 'default' : 'destructive'}
                                    className={`${vehicle.status === 'Active' ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'}`}>
                                    {vehicle.status}
                                </Badge>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="flex items-center text-sm text-neutral-400">
                                    <Users className="w-4 h-4 mr-2 text-primary" />
                                    {vehicle.passengers} Seats
                                </div>
                                <div className="flex items-center text-sm text-neutral-400">
                                    <Gauge className="w-4 h-4 mr-2 text-primary" />
                                    Automatic
                                </div>
                                <div className="flex items-center text-sm text-neutral-400">
                                    <Fuel className="w-4 h-4 mr-2 text-primary" />
                                    Petrol
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-neutral-700">
                                <span className="text-lg font-bold text-white">{vehicle.price}</span>
                                <Button variant="ghost" size="sm" className="text-primary hover:text-white">Edit Details</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
