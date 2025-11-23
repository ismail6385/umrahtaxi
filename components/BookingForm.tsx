"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, MapPin, Phone, User, Clock, Car, Mail } from 'lucide-react';

export default function BookingForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        pickup: '',
        dropoff: '',
        date: '',
        time: '',
        vehicle: 'Sedan',
        passengers: '1'
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Construct WhatsApp message
        const message = `New Booking Request:%0A
Name: ${formData.name}%0A
Email: ${formData.email}%0A
Phone: ${formData.phone}%0A
Pickup: ${formData.pickup}%0A
Dropoff: ${formData.dropoff}%0A
Date: ${formData.date}%0A
Time: ${formData.time}%0A
Vehicle: ${formData.vehicle}%0A
Passengers: ${formData.passengers}`;

        // Open WhatsApp
        window.open(`https://wa.me/03176243861?text=${message}`, '_blank');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-2xl w-full max-w-md mx-auto">
            <div className="flex items-center gap-2 mb-6">
                <div className="bg-primary p-2 rounded-lg">
                    <Car className="w-5 h-5 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white">Quick Booking</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                        <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <Input
                            name="name"
                            placeholder="Name"
                            required
                            className="pl-10 bg-black/40 border-white/10 text-white placeholder:text-gray-400 focus:border-primary"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="relative">
                        <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <Input
                            name="email"
                            type="email"
                            placeholder="Email"
                            required
                            className="pl-10 bg-black/40 border-white/10 text-white placeholder:text-gray-400 focus:border-primary"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="relative">
                        <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <Input
                            name="phone"
                            type="tel"
                            placeholder="Phone Number"
                            required
                            className="pl-10 bg-black/40 border-white/10 text-white placeholder:text-gray-400 focus:border-primary"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                        <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <Input
                            name="pickup"
                            placeholder="Pickup"
                            required
                            className="pl-10 bg-black/40 border-white/10 text-white placeholder:text-gray-400 focus:border-primary"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="relative">
                        <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <Input
                            name="dropoff"
                            placeholder="Dropoff"
                            required
                            className="pl-10 bg-black/40 border-white/10 text-white placeholder:text-gray-400 focus:border-primary"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                        <Calendar className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <Input
                            name="date"
                            type="date"
                            required
                            className="pl-10 bg-black/40 border-white/10 text-white placeholder:text-gray-400 focus:border-primary [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="relative">
                        <Clock className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <Input
                            name="time"
                            type="time"
                            required
                            className="pl-10 bg-black/40 border-white/10 text-white placeholder:text-gray-400 focus:border-primary [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                        <Car className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <select
                            name="vehicle"
                            className="w-full h-10 pl-10 pr-3 rounded-md bg-black/40 border border-white/10 text-white focus:border-primary appearance-none"
                            onChange={handleChange}
                            value={formData.vehicle}
                        >
                            <option value="Sedan">Sedan (3 Pax)</option>
                            <option value="SUV">SUV (5 Pax)</option>
                            <option value="Van">Van (7+ Pax)</option>
                            <option value="Luxury">Luxury</option>
                        </select>
                    </div>
                    <div className="relative">
                        <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <Input
                            name="passengers"
                            type="number"
                            min="1"
                            placeholder="Pax"
                            required
                            className="pl-10 bg-black/40 border-white/10 text-white placeholder:text-gray-400 focus:border-primary"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <Button type="submit" className="w-full bg-primary text-black hover:bg-yellow-400 font-bold py-6 text-lg transition-all hover:scale-105 active:scale-95">
                    Book Now via WhatsApp
                </Button>
            </form>
        </div>
    );
}
